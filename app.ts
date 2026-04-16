/*********************************************************************
 *
 *  Yoctopuce TypeScript library example
 *
 *********************************************************************/

import {YWebPage} from './yv4web-readonly.js'
import {YAPI, YErrorMsg} from './yocto_api.js'
import {YRelay} from './yocto_relay.js'

let HeatingRelay: YRelay;
let prevCount: number = -1;

function wdg(elementId: string): HTMLElement | null {
    return document.getElementById(elementId);
}

function setStatus(msg: string): void {
    console.log("Stautus:" + msg);
    let div: HTMLElement | null = wdg('status');
    if (div) div.innerHTML = msg;
}

async function updateStatus(): Promise<void> {
    try {
        let countdown: number = await HeatingRelay.get_pulseTimer();
        if (prevCount !== countdown) {
            // only update status when countdown has changed
            prevCount = countdown;
            let mode: string = '<span class="cold">&#x2744;</span> Heating is OFF';
            if (countdown > 0) {
                let secs: number = (countdown / 1000) | 0;
                let days: number = (secs / 86400) | 0;
                let hours: number = ((secs % 86400) / 3600) | 0;
                let mins: number = ((secs % 3600) / 60) | 0;
                mode = '<span class="warm">&#x1F525;</span> Heating is ON<br>' +
                    `(turn off in ${days} days ${hours}h${mins})`;
            }
            setStatus(mode);
        }
    } catch (e) {
        console.log(e);
        setStatus('Connection lost, please retry');
        prevCount = -1;
    }
    setTimeout(updateStatus, 1000);
}

async function startYoctoVisualization4web(): Promise<boolean> {
    let configXml = await fetch('config.xml');
    if (!configXml.ok) {
        return false;
    }
    YWebPage.run(await configXml.text());
    // trigger a resize event to force a graph refresh
    setTimeout(window.dispatchEvent, 100, new Event("resize"));
    return true;
}

//
// button callbacks
//
(window as any).login = async function (): Promise<void> {
    await YAPI.LogUnhandledPromiseRejections();
    // Connect to VirtualHub for Web instance and locate the heating relay
    let pwd: string = (<HTMLInputElement>wdg('pwd')).value;
    let vhub: string = 'www.yoctopuce-demo.org/CloudHub/testsuite';
    let url: string = `https://admin:${pwd}@${vhub}`;
    let errmsg: YErrorMsg = new YErrorMsg();
    setStatus("login....");


    if (await YAPI.RegisterHub(url, errmsg) != YAPI.SUCCESS) {
        setStatus('Error: ' + errmsg.msg);
        return;
    }
    setStatus("registered");
    if (!await startYoctoVisualization4web()) {
        setStatus('Error: Failed to load graph settings');
    }
    HeatingRelay = YRelay.FindRelay("heating");
    if (!await HeatingRelay.isOnline()) {
        setStatus('Error: Relay not found');
        return;
    }
    (<HTMLElement>wdg('auth')).style.display = 'none';
    (<HTMLElement>wdg('ui')).style.display = '';
    setTimeout(updateStatus, 100);
};

(window as any).switchOn = async function (nHours: number): Promise<void> {
    if (nHours) {
        // pulse requires a duration in [ms]
        await HeatingRelay.pulse(nHours * 3600 * 1000);
    } else {
        await HeatingRelay.set_output(YRelay.OUTPUT_OFF);
        if (!prevCount) return; // no change expected
    }
    setStatus('<span class="wait">&#x23F3;</span>Sending command...');
};
