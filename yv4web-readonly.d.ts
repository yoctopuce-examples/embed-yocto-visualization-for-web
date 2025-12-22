

// from yocto_api.d.ts
/*********************************************************************
 *
 * $Id: yocto_api.ts 70666 2025-12-09 10:26:00Z seb $
 *
 * High-level programming interface, common to all modules
 *
 * - - - - - - - - - License information: - - - - - - - - -
 *
 *  Copyright (C) 2011 and beyond by Yoctopuce Sarl, Switzerland.
 *
 *  Yoctopuce Sarl (hereafter Licensor) grants to you a perpetual
 *  non-exclusive license to use, modify, copy and integrate http
 *  file into your software for the sole purpose of interfacing
 *  with Yoctopuce products.
 *
 *  You may reproduce and distribute copies of this file in
 *  source or object form, as long as the sole purpose of this
 *  code is to interface with Yoctopuce products. You must retain
 *  this notice in the distributed source file.
 *
 *  You should refer to Yoctopuce General Terms and Conditions
 *  for additional information regarding your rights and
 *  obligations.
 *
 *  THE SOFTWARE AND DOCUMENTATION ARE PROVIDED "AS IS" WITHOUT
 *  WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
 *  WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS
 *  FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO
 *  EVENT SHALL LICENSOR BE LIABLE FOR ANY INCIDENTAL, SPECIAL,
 *  INDIRECT OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA,
 *  COST OF PROCUREMENT OF SUBSTITUTE GOODS, TECHNOLOGY OR
 *  SERVICES, ANY CLAIMS BY THIRD PARTIES (INCLUDING BUT NOT
 *  LIMITED TO ANY DEFENSE THEREOF), ANY CLAIMS FOR INDEMNITY OR
 *  CONTRIBUTION, OR OTHER SIMILAR COSTS, WHETHER ASSERTED ON THE
 *  BASIS OF CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF
 *  WARRANTY, OR OTHERWISE.
 *
 *********************************************************************/
export declare const YAPI_SUCCESS: number;
export declare const YAPI_NOT_INITIALIZED: number;
export declare const YAPI_INVALID_ARGUMENT: number;
export declare const YAPI_NOT_SUPPORTED: number;
export declare const YAPI_DEVICE_NOT_FOUND: number;
export declare const YAPI_VERSION_MISMATCH: number;
export declare const YAPI_DEVICE_BUSY: number;
export declare const YAPI_TIMEOUT: number;
export declare const YAPI_IO_ERROR: number;
export declare const YAPI_NO_MORE_DATA: number;
export declare const YAPI_EXHAUSTED: number;
export declare const YAPI_DOUBLE_ACCES: number;
export declare const YAPI_UNAUTHORIZED: number;
export declare const YAPI_RTC_NOT_READY: number;
export declare const YAPI_FILE_NOT_FOUND: number;
export declare const YAPI_SSL_ERROR: number;
export declare const YAPI_RFID_SOFT_ERROR: number;
export declare const YAPI_RFID_HARD_ERROR: number;
export declare const YAPI_BUFFER_TOO_SMALL: number;
export declare const YAPI_DNS_ERROR: number;
export declare const YAPI_SSL_UNK_CERT: number;
export declare const YAPI_UNCONFIGURED: number;
export declare const YAPI_INVALID_INT: number;
export declare const YAPI_INVALID_UINT: number;
export declare const YAPI_INVALID_LONG: number;
export declare const YAPI_INVALID_DOUBLE: number;
export declare const YAPI_INVALID_STRING: string;
export declare const YAPI_NO_TRUSTED_CA_CHECK: number;
export declare const YAPI_NO_EXPIRATION_CHECK: number;
export declare const YAPI_NO_HOSTNAME_CHECK: number;
export declare const YAPI_LEGACY: number;
export declare const YAPI_MIN_DOUBLE: number;
export declare const YAPI_MAX_DOUBLE: number;
export declare const Y_FUNCTIONDESCRIPTOR_INVALID: string;
export declare const Y_DETECT_NONE: number;
export declare const Y_DETECT_USB: number;
export declare const Y_DETECT_NET: number;
export declare const Y_DETECT_ALL: number;
export declare class YErrorMsg {
    msg: string;
    constructor(msg?: string);
}
export declare class YoctoError extends Error {
    errorType?: number;
    errorMsg?: string;
    constructor(...params: any[]);
}
export interface YLogCallback {
    (msg: string): void;
}
export interface YProgressCallback {
    (progress: number, msg: string): void;
}
export interface yCalibrationHandler {
    (rawValue: number, calibType: number, parameters: number[], rawValues: number[], refValues: number[]): number;
}
export interface YHubDiscoveryCallback {
    (serial: string, urlToRegister: string | null): void;
}
export interface YDeviceUpdateCallback {
    (module: YModule): void;
}
export interface YUnhandledPromiseRejectionCallback {
    (reason: object, promise: PromiseLike<any>): void;
}
interface _YY_CalibCtx {
    src: string;
    typ: number;
    hdl: yCalibrationHandler;
    par: number[];
    raw: number[];
    cal: number[];
}
export type _YY_PortInfo = {
    proto: string;
    port: number;
};
export declare class _YY_UrlInfo {
    private proto;
    private user;
    private pass;
    private host;
    private port;
    private domain;
    private orgUrl;
    constructor(str_url: string);
    imm_getHost(): string;
    imm_getPass(): string;
    imm_getPort(): number;
    imm_getUser(): string;
    imm_getUrl(withProto?: boolean, withUserPass?: boolean, withEndSlash?: boolean): string;
    imm_getRootUrl(): string;
    imm_getProto(): string;
    imm_useWebSocket(): boolean;
    /**
     * @return subdomain (starting with a /)
     */
    imm_getSubDomain(): string;
    imm_hasAuthParam(): boolean;
    imm_useSecureSocket(): boolean;
    imm_testInfoJson(): boolean;
    imm_updateBestProto(proto: string, port: number): void;
    imm_updateForRedirect(host: string, port: number, is_secure: boolean): void;
    imm_updatePortInfo(proto: string, port: number): void;
    imm_getOriginalURL(): string;
    imm_updateFrom(urlInfo: _YY_UrlInfo): void;
}
export interface YConditionalResult {
    errorType: number;
    errorMsg: string;
    result?: string;
}
export interface YConditionalResultResolver {
    (result: YConditionalResult): void;
}
export interface WebSocketCredential {
    user: string;
    pass: string;
}
interface YStringDict {
    [ident: string]: string;
}
interface YBoolDict {
    [ident: string]: boolean;
}
interface YIntDict {
    [ident: string]: number;
}
interface YDeviceDict {
    [ident: string]: YDevice;
}
interface YGenericHubDict {
    [ident: string]: YGenericHub;
}
interface YHubDict {
    [ident: string]: YHub;
}
interface YFunctionTypeDict {
    [ident: string]: YFunctionType;
}
interface YDataStreamDict {
    [ident: string]: YDataStream;
}
declare class YFunctionType {
    private _yapi;
    private _className;
    private _connectedFns;
    private _requestedFns;
    private _hwIdByName;
    private _nameByHwId;
    private _valueByHwId;
    private _baseType;
    constructor(yapi: YAPIContext, classname: string);
    /** Index a single function given by HardwareId and logical name; store any advertised value
     *
     * @returns true iff there was a logical name discrepancy
     */
    imm_reindexFunction(str_hwid: string, str_name: string, str_val: string | null, int_basetype: number | null): boolean;
    /** Forget a disconnected function given by HardwareId
     */
    imm_forgetFunction(str_hwid: string): void;
    /** Find the exact Hardware Id of the specified function, if currently connected
     * If device is not known as connected, return a clean error
     * This function will not cause any network access
     */
    imm_resolve(str_func: string): YConditionalResult;
    /** Find the friendly name (use logical name if available) of the specified function, if currently connected
     * If device is not known as connected, return a clean error
     * This function will not cause any network access
     */
    imm_getFriendlyName(str_func: string): YConditionalResult;
    /** Associates a given function object to a function id
     */
    imm_setFunction(str_func: string, obj_func: YFunction): void;
    /** Retrieve a function object by hardware id, updating the indexes on the fly if needed
     */
    imm_getFunction(str_func: string): YFunction;
    /** Stores a function advertised value by hardware id, and tell if an event should be queued for it
     */
    imm_setFunctionValue(str_hwid: string, str_pubval: string): boolean;
    /** Retrieve a function advertised value by hardware id
     */
    imm_getFunctionValue(str_hwid: string): string;
    /** Return the basetype of this function class
     */
    imm_getBaseType(): number;
    /** Test if function type is compatible with basetype
     */
    imm_matchBaseType(baseclass: number): boolean;
    /** Find the hardwareId of the first instance of a given function class
     */
    imm_getFirstHardwareId(): string | null;
    /** Find the hardwareId for the next instance of a given function class
     */
    imm_getNextHardwareId(str_hwid: string): string | null;
}
export interface YDownloadProgressCallback {
    (curr: number, total: number): void;
}
export declare class YHTTPBody {
    fname: string;
    data: Uint8Array;
    progressCb: YDownloadProgressCallback | null;
    /** Object storing a file to upload
     */
    constructor(str_fname: string, bin_data: Uint8Array, fun_progressCb: YDownloadProgressCallback | null);
}
export declare class YHTTPRequest {
    devUrl: string | null;
    errorType: number;
    errorMsg: string;
    bin_result: Uint8Array | null;
    obj_result: any;
    asyncId: number;
    acceptor: Function | null;
    toBeSent: Uint8Array | null;
    sendPos: number;
    progressCb: YDownloadProgressCallback | null;
    timeoutId: any;
    sendTimeoutId: any;
    next: YHTTPRequest | null;
    _creat: string;
    _sent: string;
    /** Object storing the result of any HTTP Query, with status code and error message
     */
    constructor(bin_res: Uint8Array | null, int_errType?: number, str_errMsg?: string);
}
interface _YY_FuncCache {
    _expiration: number;
    [funcAttr: string]: object | number | string;
}
interface _YY_FuncReq extends _YY_FuncCache {
    device: YDevice;
    deviceid: string;
    functionid: string;
    hwid: string;
}
declare class YFuncRequest {
    obj_result: _YY_FuncReq | null;
    errorType: number;
    errorMsg: string;
    constructor(obj_res: _YY_FuncReq | null, int_errType?: number, str_errMsg?: string);
}
interface _YY_Module {
    serialNumber: string;
    logicalName: string;
    productName: string;
    productId: number;
    firmwareRelease: string;
    beacon: number;
}
interface _YY_WhitePage {
    serialNumber: string;
    logicalName: string;
    productName: string;
    productId: number;
    networkUrl: string;
    beacon: number;
    index: number;
}
interface _YY_YellowPage {
    baseType: number;
    hardwareId: string;
    logicalName: string;
    advertisedValue: string;
    index: number;
}
interface _YY_YellowPages {
    [classname: string]: _YY_YellowPage[];
}
interface _YY_Services {
    whitePages: _YY_WhitePage[];
    yellowPages: _YY_YellowPages;
}
interface _YY_HubApi {
    module: _YY_Module;
    services: _YY_Services;
}
/**
 * YDataStream Class: Unformatted data sequence
 *
 * DataStream objects represent bare recorded measure sequences,
 * exactly as found within the data logger present on Yoctopuce
 * sensors.
 *
 * In most cases, it is not necessary to use DataStream objects
 * directly, as the DataSet objects (returned by the
 * get_recordedData() method from sensors and the
 * get_dataSets() method from the data logger) provide
 * a more convenient interface.
 */
export declare class YDataStream {
    static DATA_INVALID: number;
    static DURATION_INVALID: number;
    DATA_INVALID: number;
    DURATION_INVALID: number;
    _yapi: YAPIContext;
    _cal: _YY_CalibCtx | null;
    _parent: YFunction;
    _runNo: number;
    _utcStamp: number;
    _nCols: number;
    _nRows: number;
    _startTime: number;
    _duration: number;
    _dataSamplesInterval: number;
    _firstMeasureDuration: number;
    _columnNames: string[];
    _functionId: string;
    _isClosed: boolean;
    _isAvg: boolean;
    _minVal: number;
    _avgVal: number;
    _maxVal: number;
    _values: number[][];
    _isLoaded: boolean;
    constructor(obj_parent: YFunction, obj_dataset: YDataSet, encoded: number[]);
    _parseCalibArr(iCalib: number[]): number;
    imm_initFromDataSet(dataset: YDataSet, encoded: number[]): number;
    imm_parseStream(sdata: Uint8Array): number;
    imm_wasLoaded(): boolean;
    imm_get_url(): string;
    imm_get_baseurl(): string;
    imm_get_urlsuffix(): string;
    loadStream(): Promise<number>;
    imm_decodeVal(w: number): number;
    imm_decodeAvg(dw: number, count: number): number;
    isClosed(): Promise<boolean>;
    /**
     * Returns the run index of the data stream. A run can be made of
     * multiple datastreams, for different time intervals.
     *
     * @return an unsigned number corresponding to the run index.
     */
    get_runIndex(): Promise<number>;
    /**
     * Returns the relative start time of the data stream, measured in seconds.
     * For recent firmwares, the value is relative to the present time,
     * which means the value is always negative.
     * If the device uses a firmware older than version 13000, value is
     * relative to the start of the time the device was powered on, and
     * is always positive.
     * If you need an absolute UTC timestamp, use get_realStartTimeUTC().
     *
     * <b>DEPRECATED</b>: This method has been replaced by get_realStartTimeUTC().
     *
     * @return an unsigned number corresponding to the number of seconds
     *         between the start of the run and the beginning of this data
     *         stream.
     */
    get_startTime(): Promise<number>;
    /**
     * Returns the start time of the data stream, relative to the Jan 1, 1970.
     * If the UTC time was not set in the datalogger at the time of the recording
     * of this data stream, this method returns 0.
     *
     * <b>DEPRECATED</b>: This method has been replaced by get_realStartTimeUTC().
     *
     * @return an unsigned number corresponding to the number of seconds
     *         between the Jan 1, 1970 and the beginning of this data
     *         stream (i.e. Unix time representation of the absolute time).
     */
    get_startTimeUTC(): Promise<number>;
    /**
     * Returns the start time of the data stream, relative to the Jan 1, 1970.
     * If the UTC time was not set in the datalogger at the time of the recording
     * of this data stream, this method returns 0.
     *
     * @return a floating-point number  corresponding to the number of seconds
     *         between the Jan 1, 1970 and the beginning of this data
     *         stream (i.e. Unix time representation of the absolute time).
     */
    get_realStartTimeUTC(): Promise<number>;
    /**
     * Returns the number of milliseconds between two consecutive
     * rows of this data stream. By default, the data logger records one row
     * per second, but the recording frequency can be changed for
     * each device function
     *
     * @return an unsigned number corresponding to a number of milliseconds.
     */
    get_dataSamplesIntervalMs(): Promise<number>;
    get_dataSamplesInterval(): Promise<number>;
    get_firstDataSamplesInterval(): Promise<number>;
    /**
     * Returns the number of data rows present in this stream.
     *
     * If the device uses a firmware older than version 13000,
     * this method fetches the whole data stream from the device
     * if not yet done, which can cause a little delay.
     *
     * @return an unsigned number corresponding to the number of rows.
     *
     * On failure, throws an exception or returns zero.
     */
    get_rowCount(): Promise<number>;
    /**
     * Returns the number of data columns present in this stream.
     * The meaning of the values present in each column can be obtained
     * using the method get_columnNames().
     *
     * If the device uses a firmware older than version 13000,
     * this method fetches the whole data stream from the device
     * if not yet done, which can cause a little delay.
     *
     * @return an unsigned number corresponding to the number of columns.
     *
     * On failure, throws an exception or returns zero.
     */
    get_columnCount(): Promise<number>;
    /**
     * Returns the title (or meaning) of each data column present in this stream.
     * In most case, the title of the data column is the hardware identifier
     * of the sensor that produced the data. For streams recorded at a lower
     * recording rate, the dataLogger stores the min, average and max value
     * during each measure interval into three columns with suffixes _min,
     * _avg and _max respectively.
     *
     * If the device uses a firmware older than version 13000,
     * this method fetches the whole data stream from the device
     * if not yet done, which can cause a little delay.
     *
     * @return a list containing as many strings as there are columns in the
     *         data stream.
     *
     * On failure, throws an exception or returns an empty array.
     */
    get_columnNames(): Promise<string[]>;
    /**
     * Returns the smallest measure observed within this stream.
     * If the device uses a firmware older than version 13000,
     * this method will always return YDataStream.DATA_INVALID.
     *
     * @return a floating-point number corresponding to the smallest value,
     *         or YDataStream.DATA_INVALID if the stream is not yet complete (still recording).
     *
     * On failure, throws an exception or returns YDataStream.DATA_INVALID.
     */
    get_minValue(): Promise<number>;
    /**
     * Returns the average of all measures observed within this stream.
     * If the device uses a firmware older than version 13000,
     * this method will always return YDataStream.DATA_INVALID.
     *
     * @return a floating-point number corresponding to the average value,
     *         or YDataStream.DATA_INVALID if the stream is not yet complete (still recording).
     *
     * On failure, throws an exception or returns YDataStream.DATA_INVALID.
     */
    get_averageValue(): Promise<number>;
    /**
     * Returns the largest measure observed within this stream.
     * If the device uses a firmware older than version 13000,
     * this method will always return YDataStream.DATA_INVALID.
     *
     * @return a floating-point number corresponding to the largest value,
     *         or YDataStream.DATA_INVALID if the stream is not yet complete (still recording).
     *
     * On failure, throws an exception or returns YDataStream.DATA_INVALID.
     */
    get_maxValue(): Promise<number>;
    get_realDuration(): Promise<number>;
    /**
     * Returns the whole data set contained in the stream, as a bidimensional
     * table of numbers.
     * The meaning of the values present in each column can be obtained
     * using the method get_columnNames().
     *
     * This method fetches the whole data stream from the device,
     * if not yet done.
     *
     * @return a list containing as many elements as there are rows in the
     *         data stream. Each row itself is a list of floating-point
     *         numbers.
     *
     * On failure, throws an exception or returns an empty array.
     */
    get_dataRows(): Promise<number[][]>;
    /**
     * Returns a single measure from the data stream, specified by its
     * row and column index.
     * The meaning of the values present in each column can be obtained
     * using the method get_columnNames().
     *
     * This method fetches the whole data stream from the device,
     * if not yet done.
     *
     * @param row : row index
     * @param col : column index
     *
     * @return a floating-point number
     *
     * On failure, throws an exception or returns YDataStream.DATA_INVALID.
     */
    get_data(row: number, col: number): Promise<number>;
}
/**
 * YDataSet Class: Recorded data sequence, as returned by sensor.get_recordedData()
 *
 * YDataSet objects make it possible to retrieve a set of recorded measures
 * for a given sensor and a specified time interval. They can be used
 * to load data points with a progress report. When the YDataSet object is
 * instantiated by the sensor.get_recordedData()  function, no data is
 * yet loaded from the module. It is only when the loadMore()
 * method is called over and over than data will be effectively loaded
 * from the dataLogger.
 *
 * A preview of available measures is available using the function
 * get_preview() as soon as loadMore() has been called
 * once. Measures themselves are available using function get_measures()
 * when loaded by subsequent calls to loadMore().
 *
 * This class can only be used on devices that use a relatively recent firmware,
 * as YDataSet objects are not supported by firmwares older than version 13000.
 */
export declare class YDataSet {
    static DATA_INVALID: number;
    static DURATION_INVALID: number;
    static HARDWAREID_INVALID: string;
    static FUNCTIONID_INVALID: string;
    static UNIT_INVALID: string;
    DATA_INVALID: number;
    DURATION_INVALID: number;
    HARDWAREID_INVALID: string;
    FUNCTIONID_INVALID: string;
    UNIT_INVALID: string;
    _yapi: YAPIContext;
    _parent: YFunction;
    _hardwareId: string;
    _functionId: string;
    _unit: string;
    _bulkLoad: number;
    _startTimeMs: number;
    _endTimeMs: number;
    _progress: number;
    _calib: number[];
    _streams: YDataStream[];
    _summary: YMeasure;
    _preview: YMeasure[];
    _measures: YMeasure[];
    _summaryMinVal: number;
    _summaryMaxVal: number;
    _summaryTotalAvg: number;
    _summaryTotalTime: number;
    constructor(obj_parent: YFunction, str_functionId?: string, str_unit?: string, double_startTime?: number, double_endTime?: number);
    imm_get_functionId(): string;
    imm_get_calibration(): number[];
    loadSummary(data: Uint8Array): Promise<number>;
    processMore(progress: number, data: Uint8Array): Promise<number>;
    get_privateDataStreams(): Promise<YDataStream[]>;
    /**
     * Returns the unique hardware identifier of the function who performed the measures,
     * in the form SERIAL.FUNCTIONID. The unique hardware identifier is composed of the
     * device serial number and of the hardware identifier of the function
     * (for example THRMCPL1-123456.temperature1)
     *
     * @return a string that uniquely identifies the function (ex: THRMCPL1-123456.temperature1)
     *
     * On failure, throws an exception or returns  YDataSet.HARDWAREID_INVALID.
     */
    get_hardwareId(): Promise<string>;
    /**
     * Returns the hardware identifier of the function that performed the measure,
     * without reference to the module. For example temperature1.
     *
     * @return a string that identifies the function (ex: temperature1)
     */
    get_functionId(): Promise<string>;
    /**
     * Returns the measuring unit for the measured value.
     *
     * @return a string that represents a physical unit.
     *
     * On failure, throws an exception or returns  YDataSet.UNIT_INVALID.
     */
    get_unit(): Promise<string>;
    /**
     * Returns the start time of the dataset, relative to the Jan 1, 1970.
     * When the YDataSet object is created, the start time is the value passed
     * in parameter to the get_dataSet() function. After the
     * very first call to loadMore(), the start time is updated
     * to reflect the timestamp of the first measure actually found in the
     * dataLogger within the specified range.
     *
     * <b>DEPRECATED</b>: This method has been replaced by get_summary()
     * which contain more precise informations.
     *
     * @return an unsigned number corresponding to the number of seconds
     *         between the Jan 1, 1970 and the beginning of this data
     *         set (i.e. Unix time representation of the absolute time).
     */
    get_startTimeUTC(): Promise<number>;
    imm_get_startTimeUTC(): number;
    /**
     * Returns the end time of the dataset, relative to the Jan 1, 1970.
     * When the YDataSet object is created, the end time is the value passed
     * in parameter to the get_dataSet() function. After the
     * very first call to loadMore(), the end time is updated
     * to reflect the timestamp of the last measure actually found in the
     * dataLogger within the specified range.
     *
     * <b>DEPRECATED</b>: This method has been replaced by get_summary()
     * which contain more precise informations.
     *
     * @return an unsigned number corresponding to the number of seconds
     *         between the Jan 1, 1970 and the end of this data
     *         set (i.e. Unix time representation of the absolute time).
     */
    get_endTimeUTC(): Promise<number>;
    imm_get_endTimeUTC(): number;
    /**
     * Returns the progress of the downloads of the measures from the data logger,
     * on a scale from 0 to 100. When the object is instantiated by get_dataSet,
     * the progress is zero. Each time loadMore() is invoked, the progress
     * is updated, to reach the value 100 only once all measures have been loaded.
     *
     * @return an integer in the range 0 to 100 (percentage of completion).
     */
    get_progress(): number;
    /**
     * Loads the next block of measures from the dataLogger, and updates
     * the progress indicator.
     *
     * @return an integer in the range 0 to 100 (percentage of completion),
     *         or a negative error code in case of failure.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    loadMore(): Promise<number>;
    /**
     * Returns an YMeasure object which summarizes the whole
     * YDataSet. In includes the following information:
     * - the start of a time interval
     * - the end of a time interval
     * - the minimal value observed during the time interval
     * - the average value observed during the time interval
     * - the maximal value observed during the time interval
     *
     * This summary is available as soon as loadMore() has
     * been called for the first time.
     *
     * @return an YMeasure object
     */
    get_summary(): Promise<YMeasure>;
    /**
     * Returns a condensed version of the measures that can
     * retrieved in this YDataSet, as a list of YMeasure
     * objects. Each item includes:
     * - the start of a time interval
     * - the end of a time interval
     * - the minimal value observed during the time interval
     * - the average value observed during the time interval
     * - the maximal value observed during the time interval
     *
     * This preview is available as soon as loadMore() has
     * been called for the first time.
     *
     * @return a table of records, where each record depicts the
     *         measured values during a time interval
     *
     * On failure, throws an exception or returns an empty array.
     */
    get_preview(): Promise<YMeasure[]>;
    /**
     * Returns the detailed set of measures for the time interval corresponding
     * to a given condensed measures previously returned by get_preview().
     * The result is provided as a list of YMeasure objects.
     *
     * @param measure : condensed measure from the list previously returned by
     *         get_preview().
     *
     * @return a table of records, where each record depicts the
     *         measured values during a time interval
     *
     * On failure, throws an exception or returns an empty array.
     */
    get_measuresAt(measure: YMeasure): Promise<YMeasure[]>;
    /**
     * Returns all measured values currently available for this DataSet,
     * as a list of YMeasure objects. Each item includes:
     * - the start of the measure time interval
     * - the end of the measure time interval
     * - the minimal value observed during the time interval
     * - the average value observed during the time interval
     * - the maximal value observed during the time interval
     *
     * Before calling this method, you should call loadMore()
     * to load data from the device. You may have to call loadMore()
     * several time until all rows are loaded, but you can start
     * looking at available data rows before the load is complete.
     *
     * The oldest measures are always loaded first, and the most
     * recent measures will be loaded last. As a result, timestamps
     * are normally sorted in ascending order within the measure table,
     * unless there was an unexpected adjustment of the datalogger UTC
     * clock.
     *
     * @return a table of records, where each record depicts the
     *         measured value for a given time interval
     *
     * On failure, throws an exception or returns an empty array.
     */
    get_measures(): Promise<YMeasure[]>;
    _parse(str_json: string): Promise<number>;
}
/**
 * YConsolidatedDataSet Class: Cross-sensor consolidated data sequence.
 *
 * YConsolidatedDataSet objects make it possible to retrieve a set of
 * recorded measures from multiple sensors, for a specified time interval.
 * They can be used to load data points progressively, and to receive
 * data records by timestamp, one by one..
 */
export declare class YConsolidatedDataSet {
    _start: number;
    _end: number;
    _nsensors: number;
    _sensors: YSensor[];
    _datasets: YDataSet[];
    _progresss: number[];
    _nextidx: number[];
    _nexttim: number[];
    constructor(double_startTime: number, double_endTime: number, obj_sensorList: YSensor[]);
    imm_init(startt: number, endt: number, sensorList: YSensor[]): number;
    /**
     * Returns an object holding historical data for multiple
     * sensors, for a specified time interval.
     * The measures will be retrieved from the data logger, which must have been turned
     * on at the desired time. The resulting object makes it possible to load progressively
     * a large set of measures from multiple sensors, consolidating data on the fly
     * to align records based on measurement timestamps.
     *
     * @param sensorNames : array of logical names or hardware identifiers of the sensors
     *         for which data must be loaded from their data logger.
     * @param startTime : the start of the desired measure time interval,
     *         as a Unix timestamp, i.e. the number of seconds since
     *         January 1, 1970 UTC. The special value 0 can be used
     *         to include any measure, without initial limit.
     * @param endTime : the end of the desired measure time interval,
     *         as a Unix timestamp, i.e. the number of seconds since
     *         January 1, 1970 UTC. The special value 0 can be used
     *         to include any measure, without ending limit.
     *
     * @return an instance of YConsolidatedDataSet, providing access to
     *         consolidated historical data. Records can be loaded progressively
     *         using the YConsolidatedDataSet.nextRecord() method.
     */
    static Init(sensorNames: string[], startTime: number, endTime: number): YConsolidatedDataSet;
    /**
     * Extracts the next data record from the data logger of all sensors linked to this
     * object.
     *
     * @param datarec : array of floating point numbers, that will be filled by the
     *         function with the timestamp of the measure in first position,
     *         followed by the measured value in next positions.
     *
     * @return an integer in the range 0 to 100 (percentage of completion),
     *         or a negative error code in case of failure.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    nextRecord(datarec: number[]): Promise<number>;
}
declare class YDevice {
    _yapi: YAPIContext;
    _rootUrl: string;
    _serialNumber: string;
    _logicalName: string;
    _productName: string;
    _productId: number;
    _beacon: number;
    _devYdx: number;
    _lastErrorType: number;
    _lastErrorMsg: string;
    _pendingQueries: Promise<void>;
    private _cache;
    private _functions;
    private _busy;
    private _lastTimeRef;
    private _lastDuration;
    private _logCallback;
    private _logIsPulling;
    private _logpos;
    constructor(obj_yapi: YAPIContext, str_rooturl: string, obj_wpRec: _YY_WhitePage | null, obj_ypRecs: _YY_YellowPages | null);
    _throw(int_errType: number, str_errMsg: string, obj_retVal?: any): any;
    /** Return the root URL used to access a device (including the trailing slash)
     *
     * @returns {string}
     */
    imm_getRootUrl(): string;
    /** Return the serial number of the device, as found during discovery
     *
     * @returns {string}
     */
    imm_getSerialNumber(): string;
    /** Return the logical name of the device, as found during discovery
     *
     * @returns {string}
     */
    imm_getLogicalName(): string;
    getLogicalName(): Promise<string>;
    /** Return the product name of the device, as found during discovery
     *
     * @returns {string}
     */
    imm_getProductName(): string;
    /** Return the product Id of the device, as found during discovery
     *
     * @returns {number}
     */
    imm_getProductId(): number;
    /** Return the beacon state of the device, as found during discovery
     *
     * @returns {number}
     */
    imm_getBeacon(): number;
    /** Return the beacon state of the device, as found during discovery
     *
     * @returns {number}
     */
    getBeacon(): Promise<number>;
    imm_getLastTimeRef(): number;
    imm_getLastDuration(): number;
    imm_triggerLogPull(): void;
    imm_registerLogCallback(callback: YModule.LogCallback | null): void;
    /** Return the value of the last timestamp sent by the device, if any
     */
    imm_setTimeRef(float_timestamp: number, float_duration: number): void;
    /** Return the hub-specific devYdx of the device, as found during discovery
     *
     * @returns {number}
     */
    imm_getDevYdx(): number;
    /** Return a string that describes the device (serial number, logical name or root URL)
     *
     * @returns {string}
     */
    imm_describe(): string;
    /** Update device cache and YAPI function lists from yp records
     */
    imm_updateFromYP(obj_ypRecs: _YY_YellowPages): void;
    /** Update device cache and YAPI function lists accordingly
     */
    updateFromReq(yreq: YHTTPRequest, loadval: _YY_HubApi): Promise<void>;
    imm_dropCache(): void;
    /** Retrieve the number of functions (beside "module") in the device
     */
    imm_functionCount(): number;
    /** Retrieve the Id of the nth function (beside "module") in the device
     */
    imm_functionId(int_idx: number): string;
    /** Retrieve the base type of the nth function (beside "module") in the device
     */
    imm_functionBaseType(int_idx: number): string;
    /** Retrieve the type of the nth function (beside 'module') in the device
     */
    imm_functionType(int_idx: number): string;
    /** Retrieve the logical name of the nth function (beside "module") in the device
     */
    imm_functionName(int_idx: number): string;
    /** Retrieve the advertised value of the nth function (beside "module") in the device
     */
    imm_functionValue(int_idx: number): string;
    /** Retrieve the Id of a function given its funydx (internal function identifier index)
     */
    imm_functionIdByFunYdx(int_funydx: number): string;
    /** Map an optimized JZON reply to a previously known JSON structure
     */
    imm_jzon2json(jzon: object, json: object): object;
    /** Get the whole REST API string for a device, from cache if possible
     */
    requestAPI(int_msValidity: number): Promise<YHTTPRequest>;
    /** Reload a device API (store in cache), and update YAPI function lists accordingly
     *
     * @returns {number}
     */
    refresh(): Promise<number>;
    waitPendingQueries(): Promise<void>;
}
/**
 * YFirmwareFile Class: Object describing a loaded firmware file
 */
export declare class YFirmwareFile {
    private _path;
    private _serial;
    private _pictype;
    private _product;
    private _firmware;
    private _prog_version;
    private _ROM_nb_zone;
    private _FLA_nb_zone;
    private _ROM_total_size;
    private _FLA_total_size;
    private _data;
    private _zone_ofs;
    constructor(path: string, serial: string, pictype: string, product: string, firmware: string, prog_version: string, ROM_nb_zone: number, FLA_nb_zone: number, ROM_total_size: number, FLA_total_size: number, data: Uint8Array, zone_ofs: number);
    /**
     * Parse the binary buffer provided as input and initialize a new object
     * returns null if the file is not a valid firmware
     */
    static imm_Parse(path: string, data: Uint8Array, force: boolean): YFirmwareFile | null;
    static imm_progCompatible(prog_version: string): boolean;
    imm_getSerial(): string;
    imm_getPictype(): string;
    imm_getProduct(): string;
    imm_getFirmwareRelease(): string;
    imm_getFirmwareReleaseAsInt(): number;
    imm_getProg_version(): string;
    imm_getROM_nb_zone(): number;
    imm_getFLA_nb_zone(): number;
    imm_getROM_total_size(): number;
    imm_getFLA_total_size(): number;
    imm_getData(): Uint8Array;
    imm_getPath(): string;
}
/**
 * YFirmwareUpdate Class: Firmware update process control interface, returned by module.updateFirmware method.
 *
 * The YFirmwareUpdate class let you control the firmware update of a Yoctopuce
 * module. This class should not be instantiate directly, but instances should be retrieved
 * using the YModule method module.updateFirmware.
 */
export declare class YFirmwareUpdate {
    _yapi: YAPIContext;
    _serial: string;
    _settings: Uint8Array;
    _firmwarepath: string;
    _progress_msg: string;
    _progress_c: number;
    _progress: number;
    _restore_step: number;
    _force: boolean;
    constructor(obj_yapi: YAPIContext, str_serial: string, str_path: string, bin_settings: Uint8Array, bool_force: boolean);
    imm_progress(progress: number, msg: string): void;
    _processMore_internal(newupdate: number): Promise<number>;
    static checkFirmware_r(file: string, serial_base: string, force: boolean): Promise<YFirmwareFile | null>;
    /**
     * Test if the byn file is valid for this module. It is possible to pass a directory instead of a file.
     * In that case, this method returns the path of the most recent appropriate byn file. This method will
     * ignore any firmware older than minrelease.
     *
     * @param serial {string} : the serial number of the module to update
     * @param path {string} : the path of a byn file or a directory that contains byn files
     * @param minrelease {number} : a positive integer
     * @param force {boolean} : true to force an update even if the API is below expected revision
     *
     * @return {string} : the path of the byn file to use, or an empty string if no byn files matches the requirement
     *
     * On failure, returns a string that starts with "error:".
     */
    static CheckFirmwareEx(serial: string, path: string, minrelease: number, force: boolean): Promise<string>;
    static CheckFirmware_internal(serial: string, path: string, minrelease: number): Promise<string>;
    static GetAllBootLoadersInContext_internal(yctx: YAPIContext): Promise<string[]>;
    static GetAllBootLoaders_internal(): Promise<string[]>;
    _processMore(newupdate: number): Promise<number>;
    /**
     * Returns a list of all the modules in "firmware update" mode.
     *
     * @return an array of strings containing the serial numbers of devices in "firmware update" mode.
     */
    static GetAllBootLoaders(): Promise<string[]>;
    /**
     * Returns a list of all the modules in "firmware update" mode.
     *
     * @param yctx : a YAPI context.
     *
     * @return an array of strings containing the serial numbers of devices in "firmware update" mode.
     */
    static GetAllBootLoadersInContext(yctx: YAPIContext): Promise<string[]>;
    /**
     * Test if the byn file is valid for this module. It is possible to pass a directory instead of a file.
     * In that case, this method returns the path of the most recent appropriate byn file. This method will
     * ignore any firmware older than minrelease.
     *
     * @param serial : the serial number of the module to update
     * @param path : the path of a byn file or a directory that contains byn files
     * @param minrelease : a positive integer
     *
     * @return : the path of the byn file to use, or an empty string if no byn files matches the requirement
     *
     * On failure, returns a string that starts with "error:".
     */
    static CheckFirmware(serial: string, path: string, minrelease: number): Promise<string>;
    /**
     * Returns the progress of the firmware update, on a scale from 0 to 100. When the object is
     * instantiated, the progress is zero. The value is updated during the firmware update process until
     * the value of 100 is reached. The 100 value means that the firmware update was completed
     * successfully. If an error occurs during the firmware update, a negative value is returned, and the
     * error message can be retrieved with get_progressMessage.
     *
     * @return an integer in the range 0 to 100 (percentage of completion)
     *         or a negative error code in case of failure.
     */
    get_progress(): Promise<number>;
    /**
     * Returns the last progress message of the firmware update process. If an error occurs during the
     * firmware update process, the error message is returned
     *
     * @return a string  with the latest progress message, or the error message.
     */
    get_progressMessage(): Promise<string>;
    /**
     * Starts the firmware update process. This method starts the firmware update process in background. This method
     * returns immediately. You can monitor the progress of the firmware update with the get_progress()
     * and get_progressMessage() methods.
     *
     * @return an integer in the range 0 to 100 (percentage of completion),
     *         or a negative error code in case of failure.
     *
     * On failure returns a negative error code.
     */
    startUpdate(): Promise<number>;
}
/**
 * YFunction Class: Common function interface
 *
 * This is the parent class for all public objects representing device functions documented in
 * the high-level programming API. This abstract class does all the real job, but without
 * knowledge of the specific function attributes.
 *
 * Instantiating a child class of YFunction does not cause any communication.
 * The instance simply keeps track of its function identifier, and will dynamically bind
 * to a matching device at the time it is really being used to read or set an attribute.
 * In order to allow true hot-plug replacement of one device by another, the binding stay
 * dynamic through the life of the object.
 *
 * The YFunction class implements a generic high-level cache for the attribute values of
 * the specified function, pre-parsed from the REST API string.
 */
export declare class YFunction {
    _yapi: YAPIContext;
    _className: string;
    _func: string;
    _lastErrorType: number;
    _lastErrorMsg: string;
    _userData: any;
    _cache: _YY_FuncCache;
    _dataStreams: YDataStreamDict;
    _logicalName: string;
    _advertisedValue: string;
    _valueCallbackFunction: YFunction.ValueCallback | null;
    _cacheExpiration: number;
    _serial: string;
    _funId: string;
    _hwId: string;
    readonly LOGICALNAME_INVALID: string;
    readonly ADVERTISEDVALUE_INVALID: string;
    static readonly LOGICALNAME_INVALID: string;
    static readonly ADVERTISEDVALUE_INVALID: string;
    constructor(obj_yapi: YAPIContext, str_func: string);
    _throw(int_errType: number, str_errMsg: string, obj_retVal?: any): any;
    isReadOnly_internal(): Promise<boolean>;
    imm_parseAttr(name: string, val: any): number;
    /**
     * Returns the logical name of the function.
     *
     * @return a string corresponding to the logical name of the function
     *
     * On failure, throws an exception or returns YFunction.LOGICALNAME_INVALID.
     */
    get_logicalName(): Promise<string>;
    /**
     * Changes the logical name of the function. You can use yCheckLogicalName()
     * prior to this call to make sure that your parameter is valid.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : a string corresponding to the logical name of the function
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_logicalName(newval: string): Promise<number>;
    /**
     * Returns a short string representing the current state of the function.
     *
     * @return a string corresponding to a short string representing the current state of the function
     *
     * On failure, throws an exception or returns YFunction.ADVERTISEDVALUE_INVALID.
     */
    get_advertisedValue(): Promise<string>;
    set_advertisedValue(newval: string): Promise<number>;
    /**
     * Retrieves a function for a given identifier.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the function is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YFunction.isOnline() to test if the function is
     * indeed online at a given time. In case of ambiguity when looking for
     * a function by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * If a call to this object's is_online() method returns FALSE although
     * you are certain that the matching device is plugged, make sure that you did
     * call registerHub() at application initialization time.
     *
     * @param func : a string that uniquely characterizes the function, for instance
     *         MyDevice..
     *
     * @return a YFunction object allowing you to drive the function.
     */
    static FindFunction(func: string): YFunction;
    /**
     * Retrieves a function for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the function is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YFunction.isOnline() to test if the function is
     * indeed online at a given time. In case of ambiguity when looking for
     * a function by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx : a YAPI context
     * @param func : a string that uniquely characterizes the function, for instance
     *         MyDevice..
     *
     * @return a YFunction object allowing you to drive the function.
     */
    static FindFunctionInContext(yctx: YAPIContext, func: string): YFunction;
    /**
     * Registers the callback function that is invoked on every change of advertised value.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered. For good responsiveness, remember to call
     * one of these two functions periodically. To unregister a callback, pass a null pointer as argument.
     *
     * @param callback : the callback function to call, or a null pointer. The callback function should take two
     *         arguments: the function object of which the value has changed, and the character string describing
     *         the new advertised value.
     * @noreturn
     */
    registerValueCallback(callback: YFunction.ValueCallback | null): Promise<number>;
    _invokeValueCallback(value: string): Promise<number>;
    /**
     * Disables the propagation of every new advertised value to the parent hub.
     * You can use this function to save bandwidth and CPU on computers with limited
     * resources, or to prevent unwanted invocations of the HTTP callback.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    muteValueCallbacks(): Promise<number>;
    /**
     * Re-enables the propagation of every new advertised value to the parent hub.
     * This function reverts the effect of a previous call to muteValueCallbacks().
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    unmuteValueCallbacks(): Promise<number>;
    /**
     * Returns the current value of a single function attribute, as a text string, as quickly as
     * possible but without using the cached value.
     *
     * @param attrName : the name of the requested attribute
     *
     * @return a string with the value of the the attribute
     *
     * On failure, throws an exception or returns an empty string.
     */
    loadAttribute(attrName: string): Promise<string>;
    /**
     * Indicates whether changes to the function are prohibited or allowed.
     * Returns true if the function is blocked by an admin password
     * or if the function is not available.
     *
     * @return true if the function is write-protected or not online.
     */
    isReadOnly(): Promise<boolean>;
    /**
     * Returns the serial number of the module, as set by the factory.
     *
     * @return a string corresponding to the serial number of the module, as set by the factory.
     *
     * On failure, throws an exception or returns YFunction.SERIALNUMBER_INVALID.
     */
    get_serialNumber(): Promise<string>;
    _parserHelper(): number;
    _is_valid_pass(passwd: string): boolean;
    /**
     * Returns the next Function
     *
     * @returns {YFunction}
     */
    nextFunction(): YFunction | null;
    /**
     * Retrieves the first Function in a YAPI context
     *
     * @returns {YFunction}
     */
    static FirstFunction(): YFunction | null;
    /**
     * Retrieves the first Function in a given context
     *
     * @param yctx {YAPIContext}
     *
     * @returns {YFunction}
     */
    static FirstFunctionInContext(yctx: YAPIContext): YFunction | null;
    /** Retrieve a function instance from cache
     */
    static _FindFromCacheInContext(yctx: YAPIContext, className: string, func: string): YFunction;
    /** Retrieve a function instance from cache
     */
    static _FindFromCache(className: string, func: string): YFunction;
    /** Add a function instance to cache
     */
    static _AddToCache(className: string, func: string, obj: YFunction): void;
    /** Clear the function instance cache
     */
    static _ClearCache(obj_yapi?: YAPIContext | null): void;
    /** Add or remove a value change callback
     */
    static _UpdateValueCallbackList(obj_func: YFunction, bool_add: boolean): Promise<void>;
    /** Add or remove a timed report callback
     */
    static _UpdateTimedReportCallbackList(obj_func: YFunction, bool_add: boolean): Promise<void>;
    /**
     * Returns a short text that describes unambiguously the instance of the function in the form
     * TYPE(NAME)=SERIAL&#46;FUNCTIONID.
     * More precisely,
     * TYPE       is the type of the function,
     * NAME       it the name used for the first access to the function,
     * SERIAL     is the serial number of the module if the module is connected or "unresolved", and
     * FUNCTIONID is  the hardware identifier of the function if the module is connected.
     * For example, this method returns Relay(MyCustomName.relay1)=RELAYLO1-123456.relay1 if the
     * module is already connected or Relay(BadCustomeName.relay1)=unresolved if the module has
     * not yet been connected. This method does not trigger any USB or TCP transaction and can therefore be used in
     * a debugger.
     *
     * @return a string that describes the function
     *         (ex: Relay(MyCustomName.relay1)=RELAYLO1-123456.relay1)
     */
    describe(): Promise<string>;
    /**
     * Returns the unique hardware identifier of the function in the form SERIAL.FUNCTIONID.
     * The unique hardware identifier is composed of the device serial
     * number and of the hardware identifier of the function (for example RELAYLO1-123456.relay1).
     *
     * @return a string that uniquely identifies the function (ex: RELAYLO1-123456.relay1)
     *
     * On failure, throws an exception or returns  YFunction.HARDWAREID_INVALID.
     */
    get_hardwareId(): Promise<string>;
    /**
     * Returns the hardware identifier of the function, without reference to the module. For example
     * relay1
     *
     * @return a string that identifies the function (ex: relay1)
     *
     * On failure, throws an exception or returns  YFunction.FUNCTIONID_INVALID.
     */
    get_functionId(): Promise<string>;
    imm_get_functionId(): string;
    /**
     * Returns a global identifier of the function in the format MODULE_NAME&#46;FUNCTION_NAME.
     * The returned string uses the logical names of the module and of the function if they are defined,
     * otherwise the serial number of the module and the hardware identifier of the function
     * (for example: MyCustomName.relay1)
     *
     * @return a string that uniquely identifies the function using logical names
     *         (ex: MyCustomName.relay1)
     *
     * On failure, throws an exception or returns  YFunction.FRIENDLYNAME_INVALID.
     */
    get_friendlyName(): Promise<string>;
    /** Store and parse an API request for current function
     */
    _parse(yreq: YFuncRequest, msValidity: number): Promise<void>;
    /**
     ** Helpers for built-in classes
     **

     // Helper for initializing standard attributes (used in particular by built-in classes)
     async _i(): Promise<void>
     {
     let arr_attrNames: string[] = this.constructor._attrList;
     this._className = this.constructor.name.slice(1);
     for(let i = 0; i < arr_attrNames.length; i++) {
     this['_'+arr_attrNames[i]] = this.constructor[arr_attrNames[i].toUpperCase()+'_INVALID'];
     }
     }

     // Helper for simple accessors (used in particular by built-in classes)
     async _g(str_attr): Promise<object>
     {
     if (this._cacheExpiration <= this._yapi.GetTickCount()) {
     if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
     return this.constructor[str_attr.toLocaleUpperCase()+'_INVALID'];
     }
     }
     return this['_'+str_attr];
     }

     // Helper for simple accessors (used in particular by built-in classes)
     async _s(str_attr, obj_val): Promise<number>
     {
     return this._setAttr(str_attr, String(obj_val));
     }

     // Helper for completing and exporting the class; used by built-in classes
     static _E(arr_attrlist)
     {
     let className = this.name.slice(1);
     this._attrList = arr_attrlist;
     for(let i = 0; i < arr_attrlist.length; i++) {
     let attrname = arr_attrlist[i];
     let getMethod = 'get_'+attrname;
     this.prototype[getMethod] = async function(): Promise<object> { return this._g(attrname); };
     }
     this['Find'+className] = function(func) {
     let str_classname = this.name.slice(1);
     let obj: YFunction;
     obj = YFunction._FindFromCache(str_classname, func);
     if (obj == null) {
     obj = new this(YAPI, func);
     YFunction._AddToCache(str_classname, func, obj);
     }
     return obj;
     };
     this['First'+className] = function() {
     let str_classname = this.name.slice(1);
     let next_hwid = YAPI.imm_getFirstHardwareId(str_classname);
     if(next_hwid == null) return null;
     return this['Find'+className](next_hwid);
     };
     this.prototype['next'+className] = function() {
     let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
     if(resolve.errorType != YAPI.SUCCESS) return null;
     let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
     if(next_hwid == null) return null;
     return this.constructor['Find'+className](next_hwid);
     };
     this.imm_Init();
     }

     ********/
    isOnline_async(func: Function, ctx: object): void;
    load_async(ms_validiy: number, func: Function, ctx: object): void;
    /** Return the value of an attribute from function cache, after reloading it from device if needed
     * Note: the function cache is a typed (parsed) cache, contrarily to the agnostic device cache
     */
    _getAttr(str_attr: string): Promise<string | null>;
    /** Return the value of an attribute from function cache, after reloading it from device if needed
     * Note: the function cache is a typed (parsed) cache, contrarily to the agnostic device cache
     */
    _getFixedAttr(str_attr: string): Promise<string | null>;
    /** Escape a string for posting it as an URL
     */
    imm_escapeAttr(str_newval: string): string;
    /** Change the value of an attribute on a device, and invalidate the cache
     */
    _setAttr(str_attr: string, str_newval: string): Promise<number>;
    /** Execute an arbitrary HTTP GET request on the device and return the binary content
     */
    _download(str_path: string): Promise<Uint8Array>;
    /** Execute an out-of-band HTTP GET request on the device and return the binary content.
     * The request may execute in parallel to regular requests currently in progress.
     */
    _downloadOutOfBand(str_path: string): Promise<Uint8Array>;
    /** Upload a file to the filesystem, to the specified full path name.
     * If a file already exists with the same path name, its content is overwritten.
     * The progress callback function is called with two parameters: the number of
     * bytes uploaded so far and the total size to be uploaded.
     */
    _uploadWithProgress(str_path: string, bin_content: Uint8Array | string | number[], fun_progressCb: YDownloadProgressCallback | null): Promise<YHTTPRequest>;
    /** Upload a file to the filesystem, to the specified full path name.
     * If a file already exists with the same path name, its content is overwritten.
     * The progress callback function is called with two parameters: the number of
     * bytes uploaded so far and the total size to be uploaded.
     */
    _uploadEx(str_path: string, bin_content: Uint8Array | string | number[]): Promise<Uint8Array>;
    /** Upload a file to the filesystem, to the specified full path name.
     * If a file already exists with the same path name, its content is overwritten.
     */
    _upload(str_path: string, bin_content: Uint8Array | string | number[]): Promise<number>;
    /**
     * Waits for all pending asynchronous commands on the module to complete, and invoke
     * the user-provided callback function. The callback function can therefore freely
     * issue synchronous or asynchronous commands, without risking to block the
     * JavaScript VM.
     *
     * @param callback : callback function that is invoked when all pending commands on
     *         the module are completed.
     *         The callback function receives two arguments: the caller-specific
     *         context object and the receiving function object.
     * @param context : caller-specific object that is passed as-is to the callback function
     *
     * @return nothing.
     */
    wait_async(callback: Function, context: object): number;
    /** Get a value from a JSON buffer
     **/
    imm_json_get_key(bin_jsonbuff: Uint8Array, str_key: string): string;
    /** Get a string from a JSON buffer
     **/
    imm_json_get_string(bin_jsonbuff: Uint8Array): string;
    /** Get an array of strings from a JSON buffer
     **/
    imm_json_get_array(bin_jsonbuff: Uint8Array): Uint8Array[];
    /** Get an array of strings from a JSON buffer
     **/
    imm_get_json_path(bin_json: Uint8Array, str_path: string): Uint8Array;
    /** Get a string from a JSON string
     **/
    imm_decode_json_string(bin_json: Uint8Array): string;
    /** Get a integer from a JSON string
     **/
    imm_decode_json_int(bin_json: Uint8Array): number;
    /** Method used to cache DataStream objects (new DataLogger)
     **/
    imm_findDataStream(obj_dataset: YDataSet, str_def: string): YDataStream | null;
    clearDataStreamCache(): Promise<void>;
    /**
     * Checks if the function is currently reachable, without raising any error.
     * If there is a cached value for the function in cache, that has not yet
     * expired, the device is considered reachable.
     * No exception is raised if there is an error while trying to contact the
     * device hosting the function.
     *
     * @return true if the function can be reached, and false otherwise
     */
    isOnline(): Promise<boolean>;
    /**
     * Returns the numerical error code of the latest error with the function.
     * This method is mostly useful when using the Yoctopuce library with
     * exceptions disabled.
     *
     * @return a number corresponding to the code of the latest error that occurred while
     *         using the function object
     */
    get_errorType(): number;
    /**
     * Returns the error message of the latest error with the function.
     * This method is mostly useful when using the Yoctopuce library with
     * exceptions disabled.
     *
     * @return a string corresponding to the latest error message that occured while
     *         using the function object
     */
    get_errorMessage(): string;
    /**
     * Preloads the function cache with a specified validity duration.
     * By default, whenever accessing a device, all function attributes
     * are kept in cache for the standard duration (5 ms). This method can be
     * used to temporarily mark the cache as valid for a longer period, in order
     * to reduce network traffic for instance.
     *
     * @param msValidity : an integer corresponding to the validity attributed to the
     *         loaded function parameters, in milliseconds
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    load(msValidity: number): Promise<number>;
    /**
     * Invalidates the cache. Invalidates the cache of the function attributes. Forces the
     * next call to get_xxx() or loadxxx() to use values that come from the device.
     *
     * @noreturn
     */
    clearCache(): Promise<void>;
    /**
     * Gets the YModule object for the device on which the function is located.
     * If the function cannot be located on any module, the returned instance of
     * YModule is not shown as on-line.
     *
     * @return {YModule} an instance of YModule
     */
    module(): Promise<YModule>;
    /**
     * Gets the YModule object for the device on which the function is located.
     * If the function cannot be located on any module, the returned instance of
     * YModule is not shown as on-line.
     *
     * @return an instance of YModule
     */
    get_module(): Promise<YModule>;
    /**
     * Returns a unique identifier of type YFUN_DESCR corresponding to the function.
     * This identifier can be used to test if two instances of YFunction reference the same
     * physical function on the same physical device.
     *
     * @return an identifier of type YFUN_DESCR.
     *
     * If the function has never been contacted, the returned value is Y$CLASSNAME$.FUNCTIONDESCRIPTOR_INVALID.
     */
    get_functionDescriptor(): Promise<string>;
    /**
     * Returns the value of the userData attribute, as previously stored using method
     * set_userData.
     * This attribute is never touched directly by the API, and is at disposal of the caller to
     * store a context.
     *
     * @return the object stored previously by the caller.
     */
    get_userData(): Promise<any>;
    /**
     * Stores a user context provided as argument in the userData attribute of the function.
     * This attribute is never touched by the API, and is at disposal of the caller to store a context.
     *
     * @param data : any kind of object to be stored
     * @noreturn
     */
    set_userData(data: any): Promise<void>;
}
export declare namespace YFunction {
    const FUNCTIONDESCRIPTOR_INVALID: string;
    const HARDWAREID_INVALID: string;
    const FUNCTIONID_INVALID: string;
    const FRIENDLYNAME_INVALID: string;
    interface ValueCallback {
        (func: YFunction, value: string): void;
    }
}
/**
 * YModule Class: Global parameters control interface for all Yoctopuce devices
 *
 * The YModule class can be used with all Yoctopuce USB devices.
 * It can be used to control the module global parameters, and
 * to enumerate the functions provided by each module.
 */
export declare class YModule extends YFunction {
    _className: string;
    _productName: string;
    _serialNumber: string;
    _productId: number;
    _productRelease: number;
    _firmwareRelease: string;
    _persistentSettings: YModule.PERSISTENTSETTINGS;
    _luminosity: number;
    _beacon: YModule.BEACON;
    _upTime: number;
    _usbCurrent: number;
    _rebootCountdown: number;
    _userVar: number;
    _valueCallbackModule: YModule.ValueCallback | null;
    _logCallback: YModule.LogCallback | null;
    _confChangeCallback: YModule.ConfigChangeCallback | null;
    _beaconCallback: YModule.BeaconCallback | null;
    readonly PRODUCTNAME_INVALID: string;
    readonly SERIALNUMBER_INVALID: string;
    readonly PRODUCTID_INVALID: number;
    readonly PRODUCTRELEASE_INVALID: number;
    readonly FIRMWARERELEASE_INVALID: string;
    readonly PERSISTENTSETTINGS_LOADED: YModule.PERSISTENTSETTINGS;
    readonly PERSISTENTSETTINGS_SAVED: YModule.PERSISTENTSETTINGS;
    readonly PERSISTENTSETTINGS_MODIFIED: YModule.PERSISTENTSETTINGS;
    readonly PERSISTENTSETTINGS_INVALID: YModule.PERSISTENTSETTINGS;
    readonly LUMINOSITY_INVALID: number;
    readonly BEACON_OFF: YModule.BEACON;
    readonly BEACON_ON: YModule.BEACON;
    readonly BEACON_INVALID: YModule.BEACON;
    readonly UPTIME_INVALID: number;
    readonly USBCURRENT_INVALID: number;
    readonly REBOOTCOUNTDOWN_INVALID: number;
    readonly USERVAR_INVALID: number;
    static readonly PRODUCTNAME_INVALID: string;
    static readonly SERIALNUMBER_INVALID: string;
    static readonly PRODUCTID_INVALID: number;
    static readonly PRODUCTRELEASE_INVALID: number;
    static readonly FIRMWARERELEASE_INVALID: string;
    static readonly PERSISTENTSETTINGS_LOADED: YModule.PERSISTENTSETTINGS;
    static readonly PERSISTENTSETTINGS_SAVED: YModule.PERSISTENTSETTINGS;
    static readonly PERSISTENTSETTINGS_MODIFIED: YModule.PERSISTENTSETTINGS;
    static readonly PERSISTENTSETTINGS_INVALID: YModule.PERSISTENTSETTINGS;
    static readonly LUMINOSITY_INVALID: number;
    static readonly BEACON_OFF: YModule.BEACON;
    static readonly BEACON_ON: YModule.BEACON;
    static readonly BEACON_INVALID: YModule.BEACON;
    static readonly UPTIME_INVALID: number;
    static readonly USBCURRENT_INVALID: number;
    static readonly REBOOTCOUNTDOWN_INVALID: number;
    static readonly USERVAR_INVALID: number;
    constructor(yapi: YAPIContext, func: string);
    _throw(int_errType: number, str_errMsg: string, obj_retVal?: any): any;
    static _updateModuleCallbackList(YModule_module: YModule, bool_add: boolean): Promise<void>;
    /** Return the internal device object hosting the function
     *
     * @return {YDevice}
     *
     * Raise an error if not found
     */
    imm_getDev(): YDevice;
    /**
     * Forces a full redetection of the device, in case the functions changed
     *
     * @noreturn
     */
    forceDeviceRefresh(): Promise<void>;
    /**
     * Returns the number of functions (beside the "module" interface) available on the module.
     *
     * @return the number of functions on the module
     *
     * On failure, throws an exception or returns a negative error code.
     */
    functionCount(): Promise<number>;
    /**
     * Retrieves the hardware identifier of the <i>n</i>th function on the module.
     *
     * @param functionIndex : the index of the function for which the information is desired, starting at
     * 0 for the first function.
     *
     * @return a string corresponding to the unambiguous hardware identifier of the requested module function
     *
     * On failure, throws an exception or returns an empty string.
     */
    functionId(functionIndex: number): Promise<string>;
    /**
     * Retrieves the type of the <i>n</i>th function on the module. Yoctopuce functions type names match
     * their class names without the <i>Y</i> prefix, for instance <i>Relay</i>, <i>Temperature</i> etc..
     *
     * @param functionIndex : the index of the function for which the information is desired, starting at
     * 0 for the first function.
     *
     * @return a string corresponding to the type of the function.
     *
     * On failure, throws an exception or returns an empty string.
     */
    functionType(functionIndex: number): Promise<string>;
    /**
     * Retrieves the base type of the <i>n</i>th function on the module.
     * For instance, the base type of all measuring functions is "Sensor".
     *
     * @param functionIndex : the index of the function for which the information is desired, starting at
     * 0 for the first function.
     *
     * @return a string corresponding to the base type of the function
     *
     * On failure, throws an exception or returns an empty string.
     */
    functionBaseType(functionIndex: number): Promise<string>;
    /**
     * Retrieves the logical name of the <i>n</i>th function on the module.
     *
     * @param functionIndex : the index of the function for which the information is desired, starting at
     * 0 for the first function.
     *
     * @return a string corresponding to the logical name of the requested module function
     *
     * On failure, throws an exception or returns an empty string.
     */
    functionName(functionIndex: number): Promise<string>;
    /**
     * Retrieves the advertised value of the <i>n</i>th function on the module.
     *
     * @param functionIndex : the index of the function for which the information is desired, starting at
     * 0 for the first function.
     *
     * @return a short string (up to 6 characters) corresponding to the advertised value of the requested
     * module function
     *
     * On failure, throws an exception or returns an empty string.
     */
    functionValue(functionIndex: number): Promise<string>;
    /**
     * Returns the logical name of the module.
     *
     * @return a string corresponding to the logical name of the module
     *
     * On failure, throws an exception or returns YModule.LOGICALNAME_INVALID.
     */
    get_logicalName(): Promise<string>;
    set_logicalName(newval: string): Promise<number>;
    imm_flattenJsonStruct_internal(jsoncomplex: Uint8Array): Uint8Array;
    get_subDevices_internal(): Promise<string[]>;
    get_parentHub_internal(): Promise<string>;
    get_url_internal(): Promise<string>;
    _startStopDevLog_internal(str_serial: string, bool_start: boolean): Promise<void>;
    imm_parseAttr(name: string, val: any): number;
    /**
     * Returns the commercial name of the module, as set by the factory.
     *
     * @return a string corresponding to the commercial name of the module, as set by the factory
     *
     * On failure, throws an exception or returns YModule.PRODUCTNAME_INVALID.
     */
    get_productName(): Promise<string>;
    /**
     * Returns the serial number of the module, as set by the factory.
     *
     * @return a string corresponding to the serial number of the module, as set by the factory
     *
     * On failure, throws an exception or returns YModule.SERIALNUMBER_INVALID.
     */
    get_serialNumber(): Promise<string>;
    /**
     * Returns the USB device identifier of the module.
     *
     * @return an integer corresponding to the USB device identifier of the module
     *
     * On failure, throws an exception or returns YModule.PRODUCTID_INVALID.
     */
    get_productId(): Promise<number>;
    /**
     * Returns the release number of the module hardware, preprogrammed at the factory.
     * The original hardware release returns value 1, revision B returns value 2, etc.
     *
     * @return an integer corresponding to the release number of the module hardware, preprogrammed at the factory
     *
     * On failure, throws an exception or returns YModule.PRODUCTRELEASE_INVALID.
     */
    get_productRelease(): Promise<number>;
    /**
     * Returns the version of the firmware embedded in the module.
     *
     * @return a string corresponding to the version of the firmware embedded in the module
     *
     * On failure, throws an exception or returns YModule.FIRMWARERELEASE_INVALID.
     */
    get_firmwareRelease(): Promise<string>;
    /**
     * Returns the current state of persistent module settings.
     *
     * @return a value among YModule.PERSISTENTSETTINGS_LOADED, YModule.PERSISTENTSETTINGS_SAVED and
     * YModule.PERSISTENTSETTINGS_MODIFIED corresponding to the current state of persistent module settings
     *
     * On failure, throws an exception or returns YModule.PERSISTENTSETTINGS_INVALID.
     */
    get_persistentSettings(): Promise<YModule.PERSISTENTSETTINGS>;
    set_persistentSettings(newval: YModule.PERSISTENTSETTINGS): Promise<number>;
    /**
     * Returns the luminosity of the  module informative LEDs (from 0 to 100).
     *
     * @return an integer corresponding to the luminosity of the  module informative LEDs (from 0 to 100)
     *
     * On failure, throws an exception or returns YModule.LUMINOSITY_INVALID.
     */
    get_luminosity(): Promise<number>;
    /**
     * Changes the luminosity of the module informative leds. The parameter is a
     * value between 0 and 100.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : an integer corresponding to the luminosity of the module informative leds
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_luminosity(newval: number): Promise<number>;
    /**
     * Returns the state of the localization beacon.
     *
     * @return either YModule.BEACON_OFF or YModule.BEACON_ON, according to the state of the localization beacon
     *
     * On failure, throws an exception or returns YModule.BEACON_INVALID.
     */
    get_beacon(): Promise<YModule.BEACON>;
    /**
     * Turns on or off the module localization beacon.
     *
     * @param newval : either YModule.BEACON_OFF or YModule.BEACON_ON
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_beacon(newval: YModule.BEACON): Promise<number>;
    /**
     * Returns the number of milliseconds spent since the module was powered on.
     *
     * @return an integer corresponding to the number of milliseconds spent since the module was powered on
     *
     * On failure, throws an exception or returns YModule.UPTIME_INVALID.
     */
    get_upTime(): Promise<number>;
    /**
     * Returns the current consumed by the module on the USB bus, in milli-amps.
     *
     * @return an integer corresponding to the current consumed by the module on the USB bus, in milli-amps
     *
     * On failure, throws an exception or returns YModule.USBCURRENT_INVALID.
     */
    get_usbCurrent(): Promise<number>;
    /**
     * Returns the remaining number of seconds before the module restarts, or zero when no
     * reboot has been scheduled.
     *
     * @return an integer corresponding to the remaining number of seconds before the module restarts, or zero when no
     *         reboot has been scheduled
     *
     * On failure, throws an exception or returns YModule.REBOOTCOUNTDOWN_INVALID.
     */
    get_rebootCountdown(): Promise<number>;
    set_rebootCountdown(newval: number): Promise<number>;
    /**
     * Returns the value previously stored in this attribute.
     * On startup and after a device reboot, the value is always reset to zero.
     *
     * @return an integer corresponding to the value previously stored in this attribute
     *
     * On failure, throws an exception or returns YModule.USERVAR_INVALID.
     */
    get_userVar(): Promise<number>;
    /**
     * Stores a 32 bit value in the device RAM. This attribute is at programmer disposal,
     * should he need to store a state variable.
     * On startup and after a device reboot, the value is always reset to zero.
     *
     * @param newval : an integer
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_userVar(newval: number): Promise<number>;
    /**
     * Allows you to find a module from its serial number or from its logical name.
     *
     * This function does not require that the module is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YModule.isOnline() to test if the module is
     * indeed online at a given time. In case of ambiguity when looking for
     * a module by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     *
     * If a call to this object's is_online() method returns FALSE although
     * you are certain that the device is plugged, make sure that you did
     * call registerHub() at application initialization time.
     *
     * @param func : a string containing either the serial number or
     *         the logical name of the desired module
     *
     * @return a YModule object allowing you to drive the module
     *         or get additional information on the module.
     */
    static FindModule(func: string): YModule;
    /**
     * Retrieves a module for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the module is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YModule.isOnline() to test if the module is
     * indeed online at a given time. In case of ambiguity when looking for
     * a module by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx : a YAPI context
     * @param func : a string that uniquely characterizes the module, for instance
     *         MyDevice.module.
     *
     * @return a YModule object allowing you to drive the module.
     */
    static FindModuleInContext(yctx: YAPIContext, func: string): YModule;
    /**
     * Registers the callback function that is invoked on every change of advertised value.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered. For good responsiveness, remember to call
     * one of these two functions periodically. To unregister a callback, pass a null pointer as argument.
     *
     * @param callback : the callback function to call, or a null pointer. The callback function should take two
     *         arguments: the function object of which the value has changed, and the character string describing
     *         the new advertised value.
     * @noreturn
     */
    registerValueCallback(callback: YModule.ValueCallback | null): Promise<number>;
    _invokeValueCallback(value: string): Promise<number>;
    get_productNameAndRevision(): Promise<string>;
    /**
     * Saves current settings in the nonvolatile memory of the module.
     * Warning: the number of allowed save operations during a module life is
     * limited (about 100000 cycles). Do not call this function within a loop.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    saveToFlash(): Promise<number>;
    /**
     * Reloads the settings stored in the nonvolatile memory, as
     * when the module is powered on.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    revertFromFlash(): Promise<number>;
    /**
     * Schedules a simple module reboot after the given number of seconds.
     *
     * @param secBeforeReboot : number of seconds before rebooting
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    reboot(secBeforeReboot: number): Promise<number>;
    /**
     * Schedules a module reboot into special firmware update mode.
     *
     * @param secBeforeReboot : number of seconds before rebooting
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    triggerFirmwareUpdate(secBeforeReboot: number): Promise<number>;
    _startStopDevLog(serial: string, start: boolean): Promise<void>;
    /**
     * Registers a device log callback function. This callback will be called each time
     * that a module sends a new log message. Mostly useful to debug a Yoctopuce module.
     *
     * @param callback : the callback function to call, or a null pointer.
     *         The callback function should take two
     *         arguments: the module object that emitted the log message,
     *         and the character string containing the log.
     *         On failure, throws an exception or returns a negative error code.
     */
    registerLogCallback(callback: YModule.LogCallback | null): Promise<number>;
    get_logCallback(): Promise<YModule.LogCallback | null>;
    /**
     * Register a callback function, to be called when a persistent settings in
     * a device configuration has been changed (e.g. change of unit, etc).
     *
     * @param callback : a procedure taking a YModule parameter, or null
     *         to unregister a previously registered  callback.
     */
    registerConfigChangeCallback(callback: YModule.ConfigChangeCallback | null): Promise<number>;
    _invokeConfigChangeCallback(): Promise<number>;
    /**
     * Register a callback function, to be called when the localization beacon of the module
     * has been changed. The callback function should take two arguments: the YModule object of
     * which the beacon has changed, and an integer describing the new beacon state.
     *
     * @param callback : The callback function to call, or null to unregister a
     *         previously registered callback.
     */
    registerBeaconCallback(callback: YModule.BeaconCallback | null): Promise<number>;
    _invokeBeaconCallback(beaconState: number): Promise<number>;
    /**
     * Triggers a configuration change callback, to check if they are supported or not.
     */
    triggerConfigChangeCallback(): Promise<number>;
    /**
     * Tests whether the byn file is valid for this module. This method is useful to test if the module
     * needs to be updated.
     * It is possible to pass a directory as argument instead of a file. In this case, this method returns
     * the path of the most recent
     * appropriate .byn file. If the parameter onlynew is true, the function discards firmwares that are older or
     * equal to the installed firmware.
     *
     * @param path : the path of a byn file or a directory that contains byn files
     * @param onlynew : returns only files that are strictly newer
     *
     * @return the path of the byn file to use or a empty string if no byn files matches the requirement
     *
     * On failure, throws an exception or returns a string that start with "error:".
     */
    checkFirmware(path: string, onlynew: boolean): Promise<string>;
    /**
     * Prepares a firmware update of the module. This method returns a YFirmwareUpdate object which
     * handles the firmware update process.
     *
     * @param path : the path of the .byn file to use.
     * @param force : true to force the firmware update even if some prerequisites appear not to be met
     *
     * @return a YFirmwareUpdate object or NULL on error.
     */
    updateFirmwareEx(path: string, force: boolean): Promise<YFirmwareUpdate>;
    /**
     * Prepares a firmware update of the module. This method returns a YFirmwareUpdate object which
     * handles the firmware update process.
     *
     * @param path : the path of the .byn file to use.
     *
     * @return a YFirmwareUpdate object or NULL on error.
     */
    updateFirmware(path: string): Promise<YFirmwareUpdate>;
    /**
     * Returns all the settings and uploaded files of the module. Useful to backup all the
     * logical names, calibrations parameters, and uploaded files of a device.
     *
     * @return a binary buffer with all the settings.
     *
     * On failure, throws an exception or returns an binary object of size 0.
     */
    get_allSettings(): Promise<Uint8Array>;
    loadThermistorExtra(funcId: string, jsonExtra: string): Promise<number>;
    set_extraSettings(jsonExtra: string): Promise<number>;
    /**
     * Restores all the settings and uploaded files to the module.
     * This method is useful to restore all the logical names and calibrations parameters,
     * uploaded files etc. of a device from a backup.
     * Remember to call the saveToFlash() method of the module if the
     * modifications must be kept.
     *
     * @param settings : a binary buffer with all the settings.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_allSettingsAndFiles(settings: Uint8Array): Promise<number>;
    /**
     * Tests if the device includes a specific function. This method takes a function identifier
     * and returns a boolean.
     *
     * @param funcId : the requested function identifier
     *
     * @return true if the device has the function identifier
     */
    hasFunction(funcId: string): Promise<boolean>;
    /**
     * Retrieve all hardware identifier that match the type passed in argument.
     *
     * @param funType : The type of function (Relay, LightSensor, Voltage,...)
     *
     * @return an array of strings.
     */
    get_functionIds(funType: string): Promise<string[]>;
    imm_flattenJsonStruct(jsoncomplex: Uint8Array): Uint8Array;
    calibVersion(cparams: string): Promise<number>;
    calibScale(unit_name: string, sensorType: string): Promise<number>;
    calibOffset(unit_name: string): Promise<number>;
    calibConvert(param: string, currentFuncValue: string, unit_name: string, sensorType: string): Promise<string>;
    _tryExec(url: string): Promise<number>;
    /**
     * Restores all the settings of the device. Useful to restore all the logical names and calibrations parameters
     * of a module from a backup.Remember to call the saveToFlash() method of the module if the
     * modifications must be kept.
     *
     * @param settings : a binary buffer with all the settings.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_allSettings(settings: Uint8Array): Promise<number>;
    /**
     * Adds a file to the uploaded data at the next HTTP callback.
     * This function only affects the next HTTP callback and only works in
     * HTTP callback mode.
     *
     * @param filename : the name of the file to upload at the next HTTP callback
     *
     * @return nothing.
     */
    addFileToHTTPCallback(filename: string): Promise<number>;
    /**
     * Returns the unique hardware identifier of the module.
     * The unique hardware identifier is made of the device serial
     * number followed by string ".module".
     *
     * @return a string that uniquely identifies the module
     */
    get_hardwareId(): Promise<string>;
    /**
     * Downloads the specified built-in file and returns a binary buffer with its content.
     *
     * @param pathname : name of the new file to load
     *
     * @return a binary buffer with the file content
     *
     * On failure, throws an exception or returns an empty content.
     */
    download(pathname: string): Promise<Uint8Array>;
    /**
     * Returns the icon of the module. The icon is a PNG image and does not
     * exceeds 1536 bytes.
     *
     * @return a binary buffer with module icon, in png format.
     *         On failure, throws an exception or returns an empty content.
     */
    get_icon2d(): Promise<Uint8Array>;
    /**
     * Returns a string with last logs of the module. This method return only
     * logs that are still in the module.
     *
     * @return a string with last logs of the module.
     *         On failure, throws an exception or returns  YAPI.INVALID_STRING.
     */
    get_lastLogs(): Promise<string>;
    /**
     * Adds a text message to the device logs. This function is useful in
     * particular to trace the execution of HTTP callbacks. If a newline
     * is desired after the message, it must be included in the string.
     *
     * @param text : the string to append to the logs.
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    log(text: string): Promise<number>;
    /**
     * Returns a list of all the modules that are plugged into the current module.
     * This method only makes sense when called for a YoctoHub/VirtualHub.
     * Otherwise, an empty array will be returned.
     *
     * @return an array of strings containing the sub modules.
     */
    get_subDevices(): Promise<string[]>;
    /**
     * Returns the serial number of the YoctoHub on which this module is connected.
     * If the module is connected by USB, or if the module is the root YoctoHub, an
     * empty string is returned.
     *
     * @return a string with the serial number of the YoctoHub or an empty string
     */
    get_parentHub(): Promise<string>;
    /**
     * Returns the URL used to access the module. If the module is connected by USB, the
     * string 'usb' is returned.
     *
     * @return a string with the URL of the module.
     */
    get_url(): Promise<string>;
    /**
     * Continues the module enumeration started using yFirstModule().
     * Caution: You can't make any assumption about the returned modules order.
     * If you want to find a specific module, use Module.findModule()
     * and a hardwareID or a logical name.
     *
     * @return a pointer to a YModule object, corresponding to
     *         the next module found, or a null pointer
     *         if there are no more modules to enumerate.
     */
    nextModule(): YModule | null;
    /**
     * Starts the enumeration of modules currently accessible.
     * Use the method YModule.nextModule() to iterate on the
     * next modules.
     *
     * @return a pointer to a YModule object, corresponding to
     *         the first module currently online, or a null pointer
     *         if there are none.
     */
    static FirstModule(): YModule | null;
    /**
     * Retrieves the first Module in a given context
     *
     * @param yctx {YAPIContext}
     *
     * @returns {YModule}
     */
    static FirstModuleInContext(yctx: YAPIContext): YModule | null;
}
export declare namespace YModule {
    interface LogCallback {
        (module: YModule, msg: string): void;
    }
    interface ConfigChangeCallback {
        (module: YModule): void;
    }
    interface BeaconCallback {
        (module: YModule, beacon: number): void;
    }
    const enum PERSISTENTSETTINGS {
        LOADED = 0,
        SAVED = 1,
        MODIFIED = 2,
        INVALID = -1
    }
    const enum BEACON {
        OFF = 0,
        ON = 1,
        INVALID = -1
    }
    interface ValueCallback {
        (func: YModule, value: string): void;
    }
}
/**
 * YSensor Class: Sensor function interface.
 *
 * The YSensor class is the parent class for all Yoctopuce sensor types. It can be
 * used to read the current value and unit of any sensor, read the min/max
 * value, configure autonomous recording frequency and access recorded data.
 * It also provides a function to register a callback invoked each time the
 * observed value changes, or at a predefined interval. Using this class rather
 * than a specific subclass makes it possible to create generic applications
 * that work with any Yoctopuce sensor, even those that do not yet exist.
 * Note: The YAnButton class is the only analog input which does not inherit
 * from YSensor.
 */
export declare class YSensor extends YFunction {
    _cal: _YY_CalibCtx | null;
    _className: string;
    _unit: string;
    _currentValue: number;
    _lowestValue: number;
    _highestValue: number;
    _currentRawValue: number;
    _logFrequency: string;
    _reportFrequency: string;
    _advMode: YSensor.ADVMODE;
    _calibrationParam: string;
    _resolution: number;
    _sensorState: number;
    _valueCallbackSensor: YSensor.ValueCallback | null;
    _timedReportCallbackSensor: YSensor.TimedReportCallback | null;
    _prevTR: number;
    _iresol: number;
    readonly UNIT_INVALID: string;
    readonly CURRENTVALUE_INVALID: number;
    readonly LOWESTVALUE_INVALID: number;
    readonly HIGHESTVALUE_INVALID: number;
    readonly CURRENTRAWVALUE_INVALID: number;
    readonly LOGFREQUENCY_INVALID: string;
    readonly REPORTFREQUENCY_INVALID: string;
    readonly ADVMODE_IMMEDIATE: YSensor.ADVMODE;
    readonly ADVMODE_PERIOD_AVG: YSensor.ADVMODE;
    readonly ADVMODE_PERIOD_MIN: YSensor.ADVMODE;
    readonly ADVMODE_PERIOD_MAX: YSensor.ADVMODE;
    readonly ADVMODE_INVALID: YSensor.ADVMODE;
    readonly CALIBRATIONPARAM_INVALID: string;
    readonly RESOLUTION_INVALID: number;
    readonly SENSORSTATE_INVALID: number;
    static readonly UNIT_INVALID: string;
    static readonly CURRENTVALUE_INVALID: number;
    static readonly LOWESTVALUE_INVALID: number;
    static readonly HIGHESTVALUE_INVALID: number;
    static readonly CURRENTRAWVALUE_INVALID: number;
    static readonly LOGFREQUENCY_INVALID: string;
    static readonly REPORTFREQUENCY_INVALID: string;
    static readonly ADVMODE_IMMEDIATE: YSensor.ADVMODE;
    static readonly ADVMODE_PERIOD_AVG: YSensor.ADVMODE;
    static readonly ADVMODE_PERIOD_MIN: YSensor.ADVMODE;
    static readonly ADVMODE_PERIOD_MAX: YSensor.ADVMODE;
    static readonly ADVMODE_INVALID: YSensor.ADVMODE;
    static readonly CALIBRATIONPARAM_INVALID: string;
    static readonly RESOLUTION_INVALID: number;
    static readonly SENSORSTATE_INVALID: number;
    constructor(yapi: YAPIContext, func: string);
    imm_parseAttr(name: string, val: any): number;
    /**
     * Returns the measuring unit for the measure.
     *
     * @return a string corresponding to the measuring unit for the measure
     *
     * On failure, throws an exception or returns YSensor.UNIT_INVALID.
     */
    get_unit(): Promise<string>;
    /**
     * Returns the current value of the measure, in the specified unit, as a floating point number.
     * Note that a get_currentValue() call will *not* start a measure in the device, it
     * will just return the last measure that occurred in the device. Indeed, internally, each Yoctopuce
     * devices is continuously making measurements at a hardware specific frequency.
     *
     * If continuously calling  get_currentValue() leads you to performances issues, then
     * you might consider to switch to callback programming model. Check the "advanced
     * programming" chapter in in your device user manual for more information.
     *
     * @return a floating point number corresponding to the current value of the measure, in the specified
     * unit, as a floating point number
     *
     * On failure, throws an exception or returns YSensor.CURRENTVALUE_INVALID.
     */
    get_currentValue(): Promise<number>;
    /**
     * Changes the recorded minimal value observed. Can be used to reset the value returned
     * by get_lowestValue().
     *
     * @param newval : a floating point number corresponding to the recorded minimal value observed
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_lowestValue(newval: number): Promise<number>;
    /**
     * Returns the minimal value observed for the measure since the device was started.
     * Can be reset to an arbitrary value thanks to set_lowestValue().
     *
     * @return a floating point number corresponding to the minimal value observed for the measure since
     * the device was started
     *
     * On failure, throws an exception or returns YSensor.LOWESTVALUE_INVALID.
     */
    get_lowestValue(): Promise<number>;
    /**
     * Changes the recorded maximal value observed. Can be used to reset the value returned
     * by get_lowestValue().
     *
     * @param newval : a floating point number corresponding to the recorded maximal value observed
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_highestValue(newval: number): Promise<number>;
    /**
     * Returns the maximal value observed for the measure since the device was started.
     * Can be reset to an arbitrary value thanks to set_highestValue().
     *
     * @return a floating point number corresponding to the maximal value observed for the measure since
     * the device was started
     *
     * On failure, throws an exception or returns YSensor.HIGHESTVALUE_INVALID.
     */
    get_highestValue(): Promise<number>;
    /**
     * Returns the uncalibrated, unrounded raw value returned by the
     * sensor, in the specified unit, as a floating point number.
     *
     * @return a floating point number corresponding to the uncalibrated, unrounded raw value returned by the
     *         sensor, in the specified unit, as a floating point number
     *
     * On failure, throws an exception or returns YSensor.CURRENTRAWVALUE_INVALID.
     */
    get_currentRawValue(): Promise<number>;
    /**
     * Returns the datalogger recording frequency for this function, or "OFF"
     * when measures are not stored in the data logger flash memory.
     *
     * @return a string corresponding to the datalogger recording frequency for this function, or "OFF"
     *         when measures are not stored in the data logger flash memory
     *
     * On failure, throws an exception or returns YSensor.LOGFREQUENCY_INVALID.
     */
    get_logFrequency(): Promise<string>;
    /**
     * Changes the datalogger recording frequency for this function.
     * The frequency can be specified as samples per second,
     * as sample per minute (for instance "15/m") or in samples per
     * hour (eg. "4/h"). To disable recording for this function, use
     * the value "OFF". Note that setting the  datalogger recording frequency
     * to a greater value than the sensor native sampling frequency is useless,
     * and even counterproductive: those two frequencies are not related.
     * Remember to call the saveToFlash() method of the module if the modification must be kept.
     *
     * @param newval : a string corresponding to the datalogger recording frequency for this function
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_logFrequency(newval: string): Promise<number>;
    /**
     * Returns the timed value notification frequency, or "OFF" if timed
     * value notifications are disabled for this function.
     *
     * @return a string corresponding to the timed value notification frequency, or "OFF" if timed
     *         value notifications are disabled for this function
     *
     * On failure, throws an exception or returns YSensor.REPORTFREQUENCY_INVALID.
     */
    get_reportFrequency(): Promise<string>;
    /**
     * Changes the timed value notification frequency for this function.
     * The frequency can be specified as samples per second,
     * as sample per minute (for instance "15/m") or in samples per
     * hour (e.g. "4/h"). To disable timed value notifications for this
     * function, use the value "OFF". Note that setting the  timed value
     * notification frequency to a greater value than the sensor native
     * sampling frequency is unless, and even counterproductive: those two
     * frequencies are not related.
     * Remember to call the saveToFlash() method of the module if the modification must be kept.
     *
     * @param newval : a string corresponding to the timed value notification frequency for this function
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_reportFrequency(newval: string): Promise<number>;
    /**
     * Returns the measuring mode used for the advertised value pushed to the parent hub.
     *
     * @return a value among YSensor.ADVMODE_IMMEDIATE, YSensor.ADVMODE_PERIOD_AVG,
     * YSensor.ADVMODE_PERIOD_MIN and YSensor.ADVMODE_PERIOD_MAX corresponding to the measuring mode used
     * for the advertised value pushed to the parent hub
     *
     * On failure, throws an exception or returns YSensor.ADVMODE_INVALID.
     */
    get_advMode(): Promise<YSensor.ADVMODE>;
    /**
     * Changes the measuring mode used for the advertised value pushed to the parent hub.
     * Remember to call the saveToFlash() method of the module if the modification must be kept.
     *
     * @param newval : a value among YSensor.ADVMODE_IMMEDIATE, YSensor.ADVMODE_PERIOD_AVG,
     * YSensor.ADVMODE_PERIOD_MIN and YSensor.ADVMODE_PERIOD_MAX corresponding to the measuring mode used
     * for the advertised value pushed to the parent hub
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_advMode(newval: YSensor.ADVMODE): Promise<number>;
    get_calibrationParam(): Promise<string>;
    set_calibrationParam(newval: string): Promise<number>;
    /**
     * Changes the resolution of the measured physical values. The resolution corresponds to the numerical precision
     * when displaying value. It does not change the precision of the measure itself.
     * Remember to call the saveToFlash() method of the module if the modification must be kept.
     *
     * @param newval : a floating point number corresponding to the resolution of the measured physical values
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_resolution(newval: number): Promise<number>;
    /**
     * Returns the resolution of the measured values. The resolution corresponds to the numerical precision
     * of the measures, which is not always the same as the actual precision of the sensor.
     * Remember to call the saveToFlash() method of the module if the modification must be kept.
     *
     * @return a floating point number corresponding to the resolution of the measured values
     *
     * On failure, throws an exception or returns YSensor.RESOLUTION_INVALID.
     */
    get_resolution(): Promise<number>;
    /**
     * Returns the sensor state code, which is zero when there is an up-to-date measure
     * available or a positive code if the sensor is not able to provide a measure right now.
     *
     * @return an integer corresponding to the sensor state code, which is zero when there is an up-to-date measure
     *         available or a positive code if the sensor is not able to provide a measure right now
     *
     * On failure, throws an exception or returns YSensor.SENSORSTATE_INVALID.
     */
    get_sensorState(): Promise<number>;
    /**
     * Retrieves a sensor for a given identifier.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YSensor.isOnline() to test if the sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * If a call to this object's is_online() method returns FALSE although
     * you are certain that the matching device is plugged, make sure that you did
     * call registerHub() at application initialization time.
     *
     * @param func : a string that uniquely characterizes the sensor, for instance
     *         MyDevice..
     *
     * @return a YSensor object allowing you to drive the sensor.
     */
    static FindSensor(func: string): YSensor;
    /**
     * Retrieves a sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YSensor.isOnline() to test if the sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx : a YAPI context
     * @param func : a string that uniquely characterizes the sensor, for instance
     *         MyDevice..
     *
     * @return a YSensor object allowing you to drive the sensor.
     */
    static FindSensorInContext(yctx: YAPIContext, func: string): YSensor;
    /**
     * Registers the callback function that is invoked on every change of advertised value.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered. For good responsiveness, remember to call
     * one of these two functions periodically. To unregister a callback, pass a null pointer as argument.
     *
     * @param callback : the callback function to call, or a null pointer. The callback function should take two
     *         arguments: the function object of which the value has changed, and the character string describing
     *         the new advertised value.
     * @noreturn
     */
    registerValueCallback(callback: YSensor.ValueCallback | null): Promise<number>;
    _invokeValueCallback(value: string): Promise<number>;
    _parserHelper(): number;
    /**
     * Checks if the sensor is currently able to provide an up-to-date measure.
     * Returns false if the device is unreachable, or if the sensor does not have
     * a current measure to transmit. No exception is raised if there is an error
     * while trying to contact the device hosting $THEFUNCTION$.
     *
     * @return true if the sensor can provide an up-to-date measure, and false otherwise
     */
    isSensorReady(): Promise<boolean>;
    /**
     * Returns the YDatalogger object of the device hosting the sensor. This method returns an object
     * that can control global parameters of the data logger. The returned object
     * should not be freed.
     *
     * @return an YDatalogger object, or null on error.
     */
    get_dataLogger(): Promise<YDataLogger | null>;
    _parseCalibStr(calibStr: string): number;
    /**
     * Starts the data logger on the device. Note that the data logger
     * will only save the measures on this sensor if the logFrequency
     * is not set to "OFF".
     *
     * @return YAPI.SUCCESS if the call succeeds.
     */
    startDataLogger(): Promise<number>;
    /**
     * Stops the datalogger on the device.
     *
     * @return YAPI.SUCCESS if the call succeeds.
     */
    stopDataLogger(): Promise<number>;
    /**
     * Retrieves a YDataSet object holding historical data for this
     * sensor, for a specified time interval. The measures will be
     * retrieved from the data logger, which must have been turned
     * on at the desired time. See the documentation of the YDataSet
     * class for information on how to get an overview of the
     * recorded data, and how to load progressively a large set
     * of measures from the data logger.
     *
     * This function only works if the device uses a recent firmware,
     * as YDataSet objects are not supported by firmwares older than
     * version 13000.
     *
     * @param startTime : the start of the desired measure time interval,
     *         as a Unix timestamp, i.e. the number of seconds since
     *         January 1, 1970 UTC. The special value 0 can be used
     *         to include any measure, without initial limit.
     * @param endTime : the end of the desired measure time interval,
     *         as a Unix timestamp, i.e. the number of seconds since
     *         January 1, 1970 UTC. The special value 0 can be used
     *         to include any measure, without ending limit.
     *
     * @return an instance of YDataSet, providing access to historical
     *         data. Past measures can be loaded progressively
     *         using methods from the YDataSet object.
     */
    get_recordedData(startTime: number, endTime: number): Promise<YDataSet>;
    /**
     * Registers the callback function that is invoked on every periodic timed notification.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered. For good responsiveness, remember to call
     * one of these two functions periodically. To unregister a callback, pass a null pointer as argument.
     *
     * @param callback : the callback function to call, or a null pointer. The callback function should take two
     *         arguments: the function object of which the value has changed, and an YMeasure object describing
     *         the new advertised value.
     * @noreturn
     */
    registerTimedReportCallback(callback: YSensor.TimedReportCallback | null): Promise<number>;
    _invokeTimedReportCallback(value: YMeasure): Promise<number>;
    /**
     * Configures error correction data points, in particular to compensate for
     * a possible perturbation of the measure caused by an enclosure. It is possible
     * to configure up to five correction points. Correction points must be provided
     * in ascending order, and be in the range of the sensor. The device will automatically
     * perform a linear interpolation of the error correction between specified
     * points. Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * For more information on advanced capabilities to refine the calibration of
     * sensors, please contact support@yoctopuce.com.
     *
     * @param rawValues : array of floating point numbers, corresponding to the raw
     *         values returned by the sensor for the correction points.
     * @param refValues : array of floating point numbers, corresponding to the corrected
     *         values for the correction points.
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    calibrateFromPoints(rawValues: number[], refValues: number[]): Promise<number>;
    /**
     * Retrieves error correction data points previously entered using the method
     * calibrateFromPoints.
     *
     * @param rawValues : array of floating point numbers, that will be filled by the
     *         function with the raw sensor values for the correction points.
     * @param refValues : array of floating point numbers, that will be filled by the
     *         function with the desired values for the correction points.
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    loadCalibrationPoints(rawValues: number[], refValues: number[]): Promise<number>;
    _encodeCalibrationPoints(rawValues: number[], refValues: number[]): Promise<string>;
    _applyCalibration(rawValue: number): Promise<number>;
    _decodeTimedReport(timestamp: number, duration: number, report: number[]): Promise<YMeasure>;
    imm_decodeVal(w: number): number;
    imm_decodeAvg(dw: number): number;
    /**
     * Continues the enumeration of sensors started using yFirstSensor().
     * Caution: You can't make any assumption about the returned sensors order.
     * If you want to find a specific a sensor, use Sensor.findSensor()
     * and a hardwareID or a logical name.
     *
     * @return a pointer to a YSensor object, corresponding to
     *         a sensor currently online, or a null pointer
     *         if there are no more sensors to enumerate.
     */
    nextSensor(): YSensor | null;
    /**
     * Starts the enumeration of sensors currently accessible.
     * Use the method YSensor.nextSensor() to iterate on
     * next sensors.
     *
     * @return a pointer to a YSensor object, corresponding to
     *         the first sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstSensor(): YSensor | null;
    /**
     * Starts the enumeration of sensors currently accessible.
     * Use the method YSensor.nextSensor() to iterate on
     * next sensors.
     *
     * @param yctx : a YAPI context.
     *
     * @return a pointer to a YSensor object, corresponding to
     *         the first sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstSensorInContext(yctx: YAPIContext): YSensor | null;
}
export declare namespace YSensor {
    const enum ADVMODE {
        IMMEDIATE = 0,
        PERIOD_AVG = 1,
        PERIOD_MIN = 2,
        PERIOD_MAX = 3,
        INVALID = -1
    }
    interface ValueCallback {
        (func: YSensor, value: string): void;
    }
    interface TimedReportCallback {
        (func: YSensor, measure: YMeasure): void;
    }
}
/**
 * YMeasure Class: Measured value, returned in particular by the methods of the YDataSet class.
 *
 * YMeasure objects are used within the API to represent
 * a value measured at a specified time. These objects are
 * used in particular in conjunction with the YDataSet class,
 * but also for sensors periodic timed reports
 * (see sensor.registerTimedReportCallback).
 */
export declare class YMeasure {
    _start: number;
    _end: number;
    _minVal: number;
    _avgVal: number;
    _maxVal: number;
    constructor(float_start: number, float_end: number, float_minVal: number, float_avgVal: number, float_maxVal: number);
    /**
     * Returns the start time of the measure, relative to the Jan 1, 1970 UTC
     * (Unix timestamp). When the recording rate is higher then 1 sample
     * per second, the timestamp may have a fractional part.
     *
     * @return a floating point number corresponding to the number of seconds
     *         between the Jan 1, 1970 UTC and the beginning of this measure.
     */
    get_startTimeUTC(): number;
    /**
     * Returns the end time of the measure, relative to the Jan 1, 1970 UTC
     * (Unix timestamp). When the recording rate is higher than 1 sample
     * per second, the timestamp may have a fractional part.
     *
     * @return a floating point number corresponding to the number of seconds
     *         between the Jan 1, 1970 UTC and the end of this measure.
     */
    get_endTimeUTC(): number;
    /**
     * Returns the smallest value observed during the time interval
     * covered by this measure.
     *
     * @return a floating-point number corresponding to the smallest value observed.
     */
    get_minValue(): number;
    /**
     * Returns the average value observed during the time interval
     * covered by this measure.
     *
     * @return a floating-point number corresponding to the average value observed.
     */
    get_averageValue(): number;
    /**
     * Returns the largest value observed during the time interval
     * covered by this measure.
     *
     * @return a floating-point number corresponding to the largest value observed.
     */
    get_maxValue(): number;
    /**
     * Returns the start date of the measure.
     *
     * @return {Date} a Date object corresponding to the beginning of this measure
     */
    get_startTimeUTC_asDate(): Date;
    /**
     * Returns the start date of the measure.
     *
     * @return {Date} a Date object corresponding to the end of this measure
     */
    get_endTimeUTC_asDate(): Date;
}
export declare namespace YMeasure {
}
/**
 * YDataLogger Class: DataLogger control interface, available on most Yoctopuce sensors.
 *
 * A non-volatile memory for storing ongoing measured data is available on most Yoctopuce
 * sensors. Recording can happen automatically, without requiring a permanent
 * connection to a computer.
 * The YDataLogger class controls the global parameters of the internal data
 * logger. Recording control (start/stop) as well as data retrieval is done at
 * sensor objects level.
 */
export declare class YDataLogger extends YFunction {
    _className: string;
    _currentRunIndex: number;
    _timeUTC: number;
    _recording: YDataLogger.RECORDING;
    _autoStart: YDataLogger.AUTOSTART;
    _beaconDriven: YDataLogger.BEACONDRIVEN;
    _usage: number;
    _clearHistory: YDataLogger.CLEARHISTORY;
    _valueCallbackDataLogger: YDataLogger.ValueCallback | null;
    readonly CURRENTRUNINDEX_INVALID: number;
    readonly TIMEUTC_INVALID: number;
    readonly RECORDING_OFF: YDataLogger.RECORDING;
    readonly RECORDING_ON: YDataLogger.RECORDING;
    readonly RECORDING_PENDING: YDataLogger.RECORDING;
    readonly RECORDING_INVALID: YDataLogger.RECORDING;
    readonly AUTOSTART_OFF: YDataLogger.AUTOSTART;
    readonly AUTOSTART_ON: YDataLogger.AUTOSTART;
    readonly AUTOSTART_INVALID: YDataLogger.AUTOSTART;
    readonly BEACONDRIVEN_OFF: YDataLogger.BEACONDRIVEN;
    readonly BEACONDRIVEN_ON: YDataLogger.BEACONDRIVEN;
    readonly BEACONDRIVEN_INVALID: YDataLogger.BEACONDRIVEN;
    readonly USAGE_INVALID: number;
    readonly CLEARHISTORY_FALSE: YDataLogger.CLEARHISTORY;
    readonly CLEARHISTORY_TRUE: YDataLogger.CLEARHISTORY;
    readonly CLEARHISTORY_INVALID: YDataLogger.CLEARHISTORY;
    static readonly CURRENTRUNINDEX_INVALID: number;
    static readonly TIMEUTC_INVALID: number;
    static readonly RECORDING_OFF: YDataLogger.RECORDING;
    static readonly RECORDING_ON: YDataLogger.RECORDING;
    static readonly RECORDING_PENDING: YDataLogger.RECORDING;
    static readonly RECORDING_INVALID: YDataLogger.RECORDING;
    static readonly AUTOSTART_OFF: YDataLogger.AUTOSTART;
    static readonly AUTOSTART_ON: YDataLogger.AUTOSTART;
    static readonly AUTOSTART_INVALID: YDataLogger.AUTOSTART;
    static readonly BEACONDRIVEN_OFF: YDataLogger.BEACONDRIVEN;
    static readonly BEACONDRIVEN_ON: YDataLogger.BEACONDRIVEN;
    static readonly BEACONDRIVEN_INVALID: YDataLogger.BEACONDRIVEN;
    static readonly USAGE_INVALID: number;
    static readonly CLEARHISTORY_FALSE: YDataLogger.CLEARHISTORY;
    static readonly CLEARHISTORY_TRUE: YDataLogger.CLEARHISTORY;
    static readonly CLEARHISTORY_INVALID: YDataLogger.CLEARHISTORY;
    constructor(yapi: YAPIContext, func: string);
    imm_parseAttr(name: string, val: any): number;
    /**
     * Returns the current run number, corresponding to the number of times the module was
     * powered on with the dataLogger enabled at some point.
     *
     * @return an integer corresponding to the current run number, corresponding to the number of times the module was
     *         powered on with the dataLogger enabled at some point
     *
     * On failure, throws an exception or returns YDataLogger.CURRENTRUNINDEX_INVALID.
     */
    get_currentRunIndex(): Promise<number>;
    /**
     * Returns the Unix timestamp for current UTC time, if known.
     *
     * @return an integer corresponding to the Unix timestamp for current UTC time, if known
     *
     * On failure, throws an exception or returns YDataLogger.TIMEUTC_INVALID.
     */
    get_timeUTC(): Promise<number>;
    /**
     * Changes the current UTC time reference used for recorded data.
     *
     * @param newval : an integer corresponding to the current UTC time reference used for recorded data
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_timeUTC(newval: number): Promise<number>;
    /**
     * Returns the current activation state of the data logger.
     *
     * @return a value among YDataLogger.RECORDING_OFF, YDataLogger.RECORDING_ON and
     * YDataLogger.RECORDING_PENDING corresponding to the current activation state of the data logger
     *
     * On failure, throws an exception or returns YDataLogger.RECORDING_INVALID.
     */
    get_recording(): Promise<YDataLogger.RECORDING>;
    /**
     * Changes the activation state of the data logger to start/stop recording data.
     *
     * @param newval : a value among YDataLogger.RECORDING_OFF, YDataLogger.RECORDING_ON and
     * YDataLogger.RECORDING_PENDING corresponding to the activation state of the data logger to
     * start/stop recording data
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_recording(newval: YDataLogger.RECORDING): Promise<number>;
    /**
     * Returns the default activation state of the data logger on power up.
     *
     * @return either YDataLogger.AUTOSTART_OFF or YDataLogger.AUTOSTART_ON, according to the default
     * activation state of the data logger on power up
     *
     * On failure, throws an exception or returns YDataLogger.AUTOSTART_INVALID.
     */
    get_autoStart(): Promise<YDataLogger.AUTOSTART>;
    /**
     * Changes the default activation state of the data logger on power up.
     * Do not forget to call the saveToFlash() method of the module to save the
     * configuration change.  Note: if the device doesn't have any time source at his disposal when
     * starting up, it will wait for ~8 seconds before automatically starting to record  with
     * an arbitrary timestamp
     *
     * @param newval : either YDataLogger.AUTOSTART_OFF or YDataLogger.AUTOSTART_ON, according to the
     * default activation state of the data logger on power up
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_autoStart(newval: YDataLogger.AUTOSTART): Promise<number>;
    /**
     * Returns true if the data logger is synchronised with the localization beacon.
     *
     * @return either YDataLogger.BEACONDRIVEN_OFF or YDataLogger.BEACONDRIVEN_ON, according to true if
     * the data logger is synchronised with the localization beacon
     *
     * On failure, throws an exception or returns YDataLogger.BEACONDRIVEN_INVALID.
     */
    get_beaconDriven(): Promise<YDataLogger.BEACONDRIVEN>;
    /**
     * Changes the type of synchronisation of the data logger.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : either YDataLogger.BEACONDRIVEN_OFF or YDataLogger.BEACONDRIVEN_ON, according to
     * the type of synchronisation of the data logger
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_beaconDriven(newval: YDataLogger.BEACONDRIVEN): Promise<number>;
    /**
     * Returns the percentage of datalogger memory in use.
     *
     * @return an integer corresponding to the percentage of datalogger memory in use
     *
     * On failure, throws an exception or returns YDataLogger.USAGE_INVALID.
     */
    get_usage(): Promise<number>;
    get_clearHistory(): Promise<YDataLogger.CLEARHISTORY>;
    set_clearHistory(newval: YDataLogger.CLEARHISTORY): Promise<number>;
    /**
     * Retrieves a data logger for a given identifier.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the data logger is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YDataLogger.isOnline() to test if the data logger is
     * indeed online at a given time. In case of ambiguity when looking for
     * a data logger by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * If a call to this object's is_online() method returns FALSE although
     * you are certain that the matching device is plugged, make sure that you did
     * call registerHub() at application initialization time.
     *
     * @param func : a string that uniquely characterizes the data logger, for instance
     *         LIGHTMK4.dataLogger.
     *
     * @return a YDataLogger object allowing you to drive the data logger.
     */
    static FindDataLogger(func: string): YDataLogger;
    /**
     * Retrieves a data logger for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the data logger is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YDataLogger.isOnline() to test if the data logger is
     * indeed online at a given time. In case of ambiguity when looking for
     * a data logger by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx : a YAPI context
     * @param func : a string that uniquely characterizes the data logger, for instance
     *         LIGHTMK4.dataLogger.
     *
     * @return a YDataLogger object allowing you to drive the data logger.
     */
    static FindDataLoggerInContext(yctx: YAPIContext, func: string): YDataLogger;
    /**
     * Registers the callback function that is invoked on every change of advertised value.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered. For good responsiveness, remember to call
     * one of these two functions periodically. To unregister a callback, pass a null pointer as argument.
     *
     * @param callback : the callback function to call, or a null pointer. The callback function should take two
     *         arguments: the function object of which the value has changed, and the character string describing
     *         the new advertised value.
     * @noreturn
     */
    registerValueCallback(callback: YDataLogger.ValueCallback | null): Promise<number>;
    _invokeValueCallback(value: string): Promise<number>;
    /**
     * Clears the data logger memory and discards all recorded data streams.
     * This method also resets the current run index to zero.
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    forgetAllDataStreams(): Promise<number>;
    /**
     * Returns a list of YDataSet objects that can be used to retrieve
     * all measures stored by the data logger.
     *
     * This function only works if the device uses a recent firmware,
     * as YDataSet objects are not supported by firmwares older than
     * version 13000.
     *
     * @return a list of YDataSet object.
     *
     * On failure, throws an exception or returns an empty list.
     */
    get_dataSets(): Promise<YDataSet[]>;
    parse_dataSets(jsonbuff: Uint8Array): Promise<YDataSet[]>;
    /**
     * Continues the enumeration of data loggers started using yFirstDataLogger().
     * Caution: You can't make any assumption about the returned data loggers order.
     * If you want to find a specific a data logger, use DataLogger.findDataLogger()
     * and a hardwareID or a logical name.
     *
     * @return a pointer to a YDataLogger object, corresponding to
     *         a data logger currently online, or a null pointer
     *         if there are no more data loggers to enumerate.
     */
    nextDataLogger(): YDataLogger | null;
    /**
     * Starts the enumeration of data loggers currently accessible.
     * Use the method YDataLogger.nextDataLogger() to iterate on
     * next data loggers.
     *
     * @return a pointer to a YDataLogger object, corresponding to
     *         the first data logger currently online, or a null pointer
     *         if there are none.
     */
    static FirstDataLogger(): YDataLogger | null;
    /**
     * Starts the enumeration of data loggers currently accessible.
     * Use the method YDataLogger.nextDataLogger() to iterate on
     * next data loggers.
     *
     * @param yctx : a YAPI context.
     *
     * @return a pointer to a YDataLogger object, corresponding to
     *         the first data logger currently online, or a null pointer
     *         if there are none.
     */
    static FirstDataLoggerInContext(yctx: YAPIContext): YDataLogger | null;
}
export declare namespace YDataLogger {
    const enum RECORDING {
        OFF = 0,
        ON = 1,
        PENDING = 2,
        INVALID = -1
    }
    const enum AUTOSTART {
        OFF = 0,
        ON = 1,
        INVALID = -1
    }
    const enum BEACONDRIVEN {
        OFF = 0,
        ON = 1,
        INVALID = -1
    }
    const enum CLEARHISTORY {
        FALSE = 0,
        TRUE = 1,
        INVALID = -1
    }
    interface ValueCallback {
        (func: YDataLogger, value: string): void;
    }
}
export declare class YSystemEnv {
    isNodeJS: boolean;
    hasSSDP: boolean;
    unknownSystemEnvError(): YoctoError;
    hookUnhandledRejection(handler: YUnhandledPromiseRejectionCallback): void;
    getWebSocketEngine(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo): YHubEngine | null;
    getHttpEngine(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo, infojson: any): YHubEngine | null;
    getWebSocketCallbackEngine(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo, ws: _YY_WebSocket): YHubEngine | null;
    getHttpCallbackEngine(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo, incomingMessage: any, serverResponse: any): YHubEngine | null;
    getSSDPManager(obj_yapi: YAPIContext): YGenericSSDPManager | null;
    loadfile(file: string | Blob): Promise<Uint8Array>;
    downloadfile(url: string, yapi: YAPIContext): Promise<Uint8Array>;
    downloadRemoteCertificate(urlinfo: _YY_UrlInfo): Promise<string>;
}
export declare const enum Y_YHubConnType {
    HUB_UNKNOWN = -6,
    HUB_DETACHED = -5,
    HUB_DETACHING = -4,
    HUB_DISCONNECTED = -3,
    HUB_DISCONNECTING = -2,
    HUB_CONNECTING = -1,
    HUB_CONNECTED = 0,
    HUB_PREREGISTERED = 1,
    HUB_REGISTERED = 2,
    HUB_CALLBACK = 3
}
export declare abstract class YHubEngine {
    protected readonly _hub: YGenericHub;
    protected readonly _runtime_urlInfo: _YY_UrlInfo;
    protected lastPingStamp: number;
    constructor(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo);
    /** Attempt to establish a connection to the hub asynchronously.
     *
     * On success, this method should call this.signalHubConnected()
     * On temporary failure, this method should call this.imm_signalHubDisconnected()
     * On fatal failure, this method should call this.imm_commonDisconnect()
     *
     * This method is supposed to be redefined by subclasses
     */
    reconnectEngine(tryOpenID: string): Promise<void>;
    imm_disconnectEngineNow(connID?: string): void;
    /** Perform an HTTP query on the hub
     */
    request(method: string, devUrl: string, obj_body: YHTTPBody | null, tcpchan: number): Promise<YHTTPRequest>;
    reportFailure(message: string): Promise<void>;
    imm_updateLastPinfStamp(): void;
    imm_isConnected(): boolean;
    imm_isForwarded(): boolean;
    waitForPendingQueries(ms_duration: number): Promise<void>;
}
export declare class YGenericHub {
    private static globalHubRefCounter;
    private _hubRef;
    private _hubEngine;
    _yapi: YAPIContext;
    private _lastErrorType;
    private _lastErrorMsg;
    readonly urlInfo: _YY_UrlInfo;
    private hubSerial;
    serialByYdx: string[];
    private _currentState;
    private _targetState;
    private currentConnID;
    private connResolvers;
    private disconnResolvers;
    retryDelay: number;
    private _reconnectionTimer;
    private _rwAccess;
    private keepTryingExpiration;
    private keepTryingTimeoutId;
    private stalledTimeoutMs;
    timeoutId: any;
    isNotifWorking: boolean;
    devListExpires: number;
    notifPos: number;
    notifCarryOver: string;
    private _firstArrivalCallback;
    _missing: YBoolDict;
    private _knownUrls;
    private _hubMode;
    private _portInfo;
    private _usePureHTTP;
    constructor(yapi: YAPIContext, urlInfo: _YY_UrlInfo);
    _throw(int_errType: number, str_errMsg: string, obj_retVal?: any): any;
    imm_isFirstArrivalCallback(): boolean;
    imm_setFirstArrivalCallback(isfirst: boolean): void;
    imm_getNotifyPos(): number;
    imm_getcurrentState(): Y_YHubConnType;
    imm_getCurrentConnID(): string;
    imm_setCurrentConnID(id: string): void;
    /**
     * Returns the numerical error code of the latest error with the function.
     * This method is mostly useful when using the Yoctopuce library with
     * exceptions disabled.
     *
     * @return a number corresponding to the code of the latest error that occurred while
     *         using the function object
     */
    get_errorType(): number;
    /**
     * Returns the error message of the latest error with the function.
     * This method is mostly useful when using the Yoctopuce library with
     * exceptions disabled.
     *
     * @return a string corresponding to the latest error message that occured while
     *         using the function object
     */
    get_errorMessage(): string;
    imm_forceUpdate(): void;
    imm_logrequest(method: string, devUrl: string, obj_body: YHTTPBody | null): void;
    imm_setState(newState: Y_YHubConnType): void;
    imm_setTargetState(newState: Y_YHubConnType): void;
    imm_isDisconnecting(): boolean;
    imm_isDisconnected(): boolean;
    imm_isPreOrRegistered(): boolean;
    imm_isOnline(): boolean;
    imm_getConnectionState(): number;
    imm_isForwarded(): boolean;
    imm_addKnownUrl(urlInfo: _YY_UrlInfo): void;
    imm_updateUrl(urlInfo: _YY_UrlInfo): void;
    imm_updateForRedirect(url: string): void;
    imm_inheritFrom(otherHub: YGenericHub): void;
    imm_getNewConnID(): string;
    imm_tryTestConnectFor(mstimeout: number): void;
    /** Trigger the setup of a connection to the target hub, and return.
     * This method uses a connection helper that is overridden by each type of hub.
     */
    attach(targetConnType: Y_YHubConnType): Promise<void>;
    /** Wait until the connection to the hub is established
     */
    waitForConnection(mstimeout: number, errmsg: YErrorMsg): Promise<number>;
    /** Attempt to establish a connection to the hub asynchronously.
     *
     * On success, this method should call this.signalHubConnected()
     * On temporary failure, this method should call this.imm_signalHubDisconnected()
     * On fatal failure, this method should call this.imm_commonDisconnect()
     *
     * This method is supposed to be redefined by subclasses
     */
    reconnect(tryOpenID: string): Promise<void>;
    /** Invoked by this.reconnect() to handle successful hub connection
     */
    signalHubConnected(tryOpenID: string, hubSerial: string): Promise<void>;
    /** Invoked by the network handler to signal hub disconnection
     *
     * Returns true if a reconnection has been scheduled
     *     or false if the target state is "detached"
     */
    imm_signalHubDisconnected(tryOpenID: string): boolean;
    imm_commonDisconnect(tryOpenID: string, errType: number, errMsg: string): void;
    imm_disconnectNow(connID?: string): boolean;
    /** Invoked by UnregisterHub
     *
     * Free ressources allocated by the hub, close requests,
     * call this.imm_commonDisconnect() and bring the link down.
     *
     * This method may be redefined by subclasses to do additional
     * cleanup before invoking this.imm_commonDisconnect() to bring
     * communication down, to prevent automatic reconnect.
     */
    detach(errType?: number, errMsg?: string): Promise<void>;
    /** Wait until the hub is fully disconnected
     */
    waitForDisconnection(mstimeout: number): Promise<void>;
    hubUpdateDeviceList(): Promise<number>;
    /** Perform an HTTP query on the hub
     */
    request(method: string, devUrl: string, obj_body: YHTTPBody | null, tcpchan: number): Promise<YHTTPRequest>;
    /** Create a new random boundary for form-encoding
     */
    imm_getBoundary(): string;
    /** Form-encode a body object into an raw Uint8Array to send
     */
    imm_formEncodeBody(obj_body: YHTTPBody, str_boundary: string): Uint8Array;
    /** Return an array of serial numbers
     */
    getBootloaders(): Promise<string[]>;
    /** Perform a firmware update
     */
    firmwareUpdate(serial: string, firmware: YFirmwareFile, settings: Uint8Array, progress: YProgressCallback): Promise<string[] | null>;
    reportFailure(message: string): Promise<void>;
    hasRwAccess(): Promise<boolean>;
    imm_isRwAccess(): boolean;
    imm_setRwAccess(rwAccess: boolean): void;
    getHubRef(): number;
    get_knownUrls(): string[];
    imm_forgetUrls(): void;
    imm_getOriginalURL(): string;
    imm_getRootUrl(): string;
    imm_getSerialNumber(): string;
    imm_setSerialNumber(serial: string): void;
    imm_getNetworkTimeout(): number;
    imm_setNetworkTimeout(mstimeout: number): void;
    imm_setHubEngine(engine: YHubEngine): void;
    imm_setRetryDelay(value: number): void;
    imm_SetErr(errorType: number, errorMsg: string): void;
    WebSocketJoin(ws: _YY_WebSocket, arr_credentials: WebSocketCredential[], closeCallback: Function): Promise<boolean>;
    imm_UseBestProto(): _YY_UrlInfo;
    imm_useMixedMode(): boolean;
    waitForPendingQueries(ms_timeout: number): Promise<void>;
}
export declare class YHttpEngine extends YHubEngine {
    infoJson: any;
    ha1: string;
    realm: string;
    nonce: string;
    opaque: string;
    nonceCount: number;
    notbynRequest: any;
    constructor(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo, firstInfoJson: any);
    imm_makeRequest(method: string, relUrl: string, contentType: string, body: string | Uint8Array | null, onProgress: null | ((moreText: string) => void), onSuccess: null | ((responseText: string) => void), onError: (errorType: number, errorMsg: string, can_be_retry: boolean) => any): any;
    imm_abortRequest(clientRequest: any): void;
    imm_sendRequest(method: string, relUrl: string, obj_body: YHTTPBody | null, onProgress: null | ((moreText: string) => void), onSuccess: null | ((responseText: string) => void), onError: (errorType: number, errorMsg: string, can_be_retry: boolean) => void): any;
    tryFetch(relUrl: string): Promise<YConditionalResult>;
    /** Handle HTTP-based event-monitoring work on a registered hub
     */
    reconnectEngine(tryOpenID: string): Promise<void>;
    imm_disconnectEngineNow(connID?: string): void;
    /** Perform an HTTP query on the hub
     */
    request(method: string, devUrl: string, obj_body: YHTTPBody | null, tcpchan: number): Promise<YHTTPRequest>;
}
export interface _YY_WebSocketSendOptions {
    binary: boolean;
    mask: boolean;
}
interface _YY_WebSocketErrorEvent extends Event {
    error: any;
    message: string;
    type: string;
    target: any;
}
interface _YY_WebSocketCloseEvent extends Event {
    wasClean: boolean;
    code: number;
    reason: string;
    target: any;
}
interface _YY_WebSocketMessageEvent extends Event {
    data: Uint8Array;
    origin: any;
    lastEventId: any;
    source: any;
    ports: any;
    type: string;
    target: any;
}
export interface _YY_WebSocket {
    binaryType: string;
    protocol: string;
    readyState: number;
    url: string;
    onerror: ((event: _YY_WebSocketErrorEvent) => any) | null;
    onclose: ((event: _YY_WebSocketCloseEvent) => any) | null;
    onmessage: ((event: _YY_WebSocketMessageEvent) => any) | null;
    close(code?: number, data?: string): void;
    send(data: any, cb?: (err?: Error) => void): void;
    send(data: any, options: {
        mask?: boolean;
        binary?: boolean;
        compress?: boolean;
        fin?: boolean;
    }, cb?: (err?: Error) => void): void;
    ping?: (data?: any, mask?: boolean, cb?: (err: Error) => void) => void;
    pong?: (data?: any, mask?: boolean, cb?: (err: Error) => void) => void;
    terminate?: () => void;
}
declare const enum WSConnState {
    DEAD = 0,
    DISCONNECTED = 1,
    CONNECTING = 2,
    AUTHENTICATING = 3,
    READY = 4,
    CONNECTED = 5
}
export declare abstract class YWebSocketEngine extends YHubEngine {
    _DEFAULT_TCP_ROUND_TRIP_TIME: number;
    _DEFAULT_TCP_MAX_WINDOW_SIZE: number;
    _YIO_DEFAULT_TCP_TIMEOUT: number;
    _YIO_1_MINUTE_TCP_TIMEOUT: number;
    _YIO_10_MINUTES_TCP_TIMEOUT: number;
    _USB_META_UTCTIME_SIZE: number;
    _USB_META_DLFLUSH_SIZE: number;
    _USB_META_ACK_D2H_PACKET_SIZE: number;
    _USB_META_WS_ANNOUNCE_SIZE: number;
    _USB_META_WS_AUTHENTICATION_SIZE: number;
    _USB_META_WS_ERROR_SIZE: number;
    _USB_META_ACK_UPLOAD_SIZE: number;
    _USB_META_WS_VALID_SHA1: number;
    _USB_META_WS_RW: number;
    websocket: _YY_WebSocket | null;
    tcpChan: (YHTTPRequest | null)[];
    nextAsyncId: number;
    _connectionTime: number;
    _connectionState: WSConnState;
    _remoteVersion: number;
    _remoteSerial: string;
    _remoteNonce: number;
    _nonce: number;
    _session_error: string | null;
    _session_errno: number | null;
    _tcpRoundTripTime: number;
    _tcpMaxWindowSize: number;
    _lastUploadAckBytes: number[];
    _lastUploadAckTime: number[];
    _lastUploadRateBytes: number[];
    _lastUploadRateTime: number[];
    _uploadRate: number[];
    fwd_nonce: number;
    fwd_websocket: _YY_WebSocket | null;
    fwd_credentials: WebSocketCredential[];
    fwd_connectionState: number;
    fwd_closeCallback: Function | null;
    constructor(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo);
    /** Open an outgoing websocket
     **/
    abstract imm_webSocketOpen(str_url: string): void;
    /** Fills a buffer with random numbers
     **/
    abstract imm_getRandomValues(arr: Uint8Array): Uint8Array;
    /** Report a low-level asynchronous websocket error
     **/
    imm_asyncWebSocketError(errorType: number, message: string): void;
    /** Handle websocket-based event-monitoring work on a registered hub
     */
    reconnectEngine(tryOpenID: string): Promise<void>;
    /** Compute websocket authentication sha1 key
     */
    imm_computeAuth(user: string, pass: string, serial: string, nonce: number): Uint8Array;
    /** Tell if a websocket hub is currently forwarded and handled remotely
     */
    imm_isForwarded(): boolean;
    /** Handle an incoming packet
     **/
    _webSocketMsg(arr_bytes: Uint8Array): Promise<void>;
    /** Send an outgoing packet
     **/
    imm_webSocketSend(arr_bytes: Uint8Array): void;
    imm_hasPendingRequest(): boolean;
    waitForPendingQueries(ms_duration: number): Promise<void>;
    /** Perform an HTTP query on the hub
     */
    request(method: string, devUrl: string, obj_body: YHTTPBody | null, tcpchan: number): Promise<YHTTPRequest>;
    /** Send all possible pending requests on specified tcpchan
     */
    imm_sendPendingRequest(tcpchan: number): void;
    imm_abortRequest(tcpchan: number, yreq: YHTTPRequest): void;
    imm_forgetRequest(tcpchan: number, yreq: YHTTPRequest): void;
    imm_dropAllPendingConnection(): void;
    websocketJoin(ws: _YY_WebSocket, arr_credentials: WebSocketCredential[], close_callback: Function): Promise<boolean>;
    imm_sendAPIAnnouncePkt(): boolean;
    imm_handleAPIAuthPkt(msg: Uint8Array): void;
    detach(errType?: number, errMsg?: string): Promise<void>;
    imm_disconnectEngineNow(connID?: string): void;
    imm_isConnected(): boolean;
}
interface _YY_SSDPCacheEntry {
    serial: string;
    url: string;
    detectedTime: number;
    maxAge: number;
}
interface _YY_SSDPCache {
    [uuid: string]: _YY_SSDPCacheEntry;
}
export declare abstract class YGenericSSDPManager {
    _yapi: YAPIContext;
    _started: boolean;
    _callback: Function | null;
    _SSDPCache: _YY_SSDPCache;
    _thread: any;
    YSSDP_PORT: number;
    YSSDP_MCAST_ADDR_STR: string;
    YSSDP_URN_YOCTOPUCE: string;
    YSSDP_DISCOVERY_MSG: string;
    constructor(obj_yapi: YAPIContext);
    abstract ySSDPOpenSockets(): Promise<void>;
    abstract ySSDPCloseSockets(): Promise<void>;
    abstract ySSDPSendPacket(msg: string, port: number, ipaddr: string): Promise<void>;
    _invokeCallback(str_serial: string, str_addUrl: string | null, str_removeUrl: string | null): Promise<void>;
    imm_uuidToSerial(str_uuid: string): string | null;
    ySSDPUpdateCache(str_uuid: string, str_url: string, int_cacheValidity: number): Promise<void>;
    ySSDPParseMessage(str_msg: string): Promise<void>;
    ySSDPCheckExpiration(): Promise<void>;
    ySSDPStart(func_callback: Function): Promise<number>;
    ySSDPStop(): Promise<void>;
    ySSDPDiscover(): Promise<void>;
}
/**
 * YHub Class: YoctoHub or VirtualHub currently in use by the API.
 *
 *
 */
export declare class YHub {
    _ctx: YAPIContext;
    _hubref: number;
    _userData: any;
    readonly TRYING: number;
    readonly CONNECTED: number;
    readonly RECONNECTING: number;
    readonly ABORTED: number;
    readonly UNREGISTERED: number;
    static readonly TRYING: number;
    static readonly CONNECTED: number;
    static readonly RECONNECTING: number;
    static readonly ABORTED: number;
    static readonly UNREGISTERED: number;
    constructor(obj_yapi: YAPIContext, hubref: number);
    private _imm_getStrAttr;
    private _imm_getIntAttr;
    private _getIntAttr;
    private _imm_setIntAttr;
    /**
     * Returns all known URLs that have been used to register this hub.
     * URLs are pointing to the same hub when the devices connected
     * are sharing the same serial number.
     */
    get_knownUrls(): string[];
    /**
     * Returns the URL that has been used first to register this hub.
     */
    get_registeredUrl(): string;
    /**
     * Returns the URL currently in use to communicate with this hub.
     */
    get_connectionUrl(): string;
    /**
     * Returns the state of the connection with this hub. (TRYING, CONNECTED, RECONNECTING, ABORTED, UNREGISTERED)
     */
    get_connectionState(): number;
    /**
     * Returns the hub serial number, if the hub was already connected once.
     */
    get_serialNumber(): string;
    /**
     * Tells if this hub is still registered within the API.
     *
     * @return true if the hub has not been unregistered.
     */
    isInUse(): Promise<boolean>;
    /**
     * Tells if there is an active communication channel with this hub.
     *
     * @return true if the hub is currently connected.
     */
    isOnline(): Promise<boolean>;
    /**
     * Tells if write access on this hub is blocked. Return true if it
     * is not possible to change attributes on this hub
     *
     * @return true if it is not possible to change attributes on this hub.
     */
    isReadOnly(): Promise<boolean>;
    /**
     * Modifies tthe network connection delay for this hub.
     * The default value is inherited from ySetNetworkTimeout
     * at the time when the hub is registered, but it can be updated
     * afterward for each specific hub if necessary.
     *
     * @param networkMsTimeout : the network connection delay in milliseconds.
     * @noreturn
     */
    set_networkTimeout(networkMsTimeout: number): void;
    /**
     * Returns the network connection delay for this hub.
     * The default value is inherited from ySetNetworkTimeout
     * at the time when the hub is registered, but it can be updated
     * afterward for each specific hub if necessary.
     *
     * @return the network connection delay in milliseconds.
     */
    get_networkTimeout(): number;
    /**
     * Returns the numerical error code of the latest error with the hub.
     * This method is mostly useful when using the Yoctopuce library with
     * exceptions disabled.
     *
     * @return a number corresponding to the code of the latest error that occurred while
     *         using the hub object
     */
    get_errorType(): Promise<number>;
    /**
     * Returns the error message of the latest error with the hub.
     * This method is mostly useful when using the Yoctopuce library with
     * exceptions disabled.
     *
     * @return a string corresponding to the latest error message that occured while
     *         using the hub object
     */
    get_errorMessage(): Promise<string>;
    /**
     * Returns the value of the userData attribute, as previously stored
     * using method set_userData.
     * This attribute is never touched directly by the API, and is at
     * disposal of the caller to store a context.
     *
     * @return the object stored previously by the caller.
     */
    get_userData(): Promise<any>;
    /**
     * Stores a user context provided as argument in the userData
     * attribute of the function.
     * This attribute is never touched by the API, and is at
     * disposal of the caller to store a context.
     *
     * @param data : any kind of object to be stored
     * @noreturn
     */
    set_userData(data: any): Promise<void>;
    /**
     * Starts the enumeration of hubs currently in use by the API.
     * Use the method YHub.nextHubInUse() to iterate on the
     * next hubs.
     *
     * @return a pointer to a YHub object, corresponding to
     *         the first hub currently in use by the API, or a
     *         null pointer if none has been registered.
     */
    static FirstHubInUse(): YHub | null;
    /**
     * Starts the enumeration of hubs currently in use by the API
     * in a given YAPI context.
     * Use the method YHub.nextHubInUse() to iterate on the
     * next hubs.
     *
     * @param yctx : a YAPI context
     *
     * @return a pointer to a YHub object, corresponding to
     *         the first hub currently in use by the API, or a
     *         null pointer if none has been registered.
     */
    static FirstHubInUseInContext(yctx: YAPIContext): YHub | null;
    /**
     * Retrieves hub for a given identifier. The identifier can be the URL or the
     * serial of the hub.
     *
     * @param url : The url or serial of the hub.
     *
     * @return a pointer to a YHub object, corresponding to
     *         the first hub currently in use by the API, or a
     *         null pointer if none has been registered.
     */
    static FindHubInUse(url: string): Promise<YHub | null>;
    /**
     * Retrieves hub for a given identifier in a given YAPI context. The identifier can be the URL or the
     * serial of the hub.
     *
     * @param yctx : a YAPI context
     * @param url : The url or serial of the hub.
     *
     * @return a pointer to a YHub object, corresponding to
     *         the first hub currently in use by the API, or a
     *         null pointer if none has been registered.
     */
    static FindHubInUseInContext(yctx: YAPIContext, url: string): Promise<YHub | null>;
    /**
     * Continues the module enumeration started using YHub.FirstHubInUse().
     * Caution: You can't make any assumption about the order of returned hubs.
     *
     * @return a pointer to a YHub object, corresponding to
     *         the next hub currently in use, or a null pointer
     *         if there are no more hubs to enumerate.
     */
    nextHubInUse(): YHub | null;
}
interface DeviceUpdateEvent {
    event: string;
    serial: string;
    module: YModule;
}
/**
 * YAPIContext Class: Yoctopuce I/O context configuration.
 *
 *
 */
export declare class YAPIContext {
    system_env: YSystemEnv;
    _uniqueID: string;
    _detectType: number;
    _knownHubsBySerial: YGenericHubDict;
    _knownHubsByUrl: YGenericHubDict;
    _connectedHubs: YGenericHub[];
    _registeredHubs: YGenericHub[];
    _trustedCertificate: string[];
    _networkSecurityOptions: number;
    _yhub_cache: YHubDict;
    _ssdpManager: YGenericSSDPManager | null;
    _devs: YDeviceDict;
    _snByUrl: YStringDict;
    _snByName: YStringDict;
    _fnByType: YFunctionTypeDict;
    _lastErrorType: number;
    _lastErrorMsg: string;
    _updateDevListStarted: number;
    _pendingCallbacks: DeviceUpdateEvent[];
    _logLevel: number;
    _logCallback: YLogCallback | null;
    _arrivalCallback: YDeviceUpdateCallback | null;
    _namechgCallback: YDeviceUpdateCallback | null;
    _removalCallback: YDeviceUpdateCallback | null;
    _hubDiscoveryCallback: YHubDiscoveryCallback | null;
    _forwardValues: number;
    _calibHandlers: yCalibrationHandler[];
    _ValueCallbackList: YFunction[];
    _TimedReportCallbackList: YFunction[];
    _beacons: YIntDict;
    _isNodeJS: boolean;
    _networkTimeoutMs: number;
    _deviceListValidityMs: number;
    _crcTable: Int32Array | null;
    defaultEncoding: string;
    exceptionsDisabled: boolean;
    readonly SUCCESS: number;
    readonly NOT_INITIALIZED: number;
    readonly INVALID_ARGUMENT: number;
    readonly NOT_SUPPORTED: number;
    readonly DEVICE_NOT_FOUND: number;
    readonly VERSION_MISMATCH: number;
    readonly DEVICE_BUSY: number;
    readonly TIMEOUT: number;
    readonly IO_ERROR: number;
    readonly NO_MORE_DATA: number;
    readonly EXHAUSTED: number;
    readonly DOUBLE_ACCES: number;
    readonly UNAUTHORIZED: number;
    readonly RTC_NOT_READY: number;
    readonly FILE_NOT_FOUND: number;
    readonly SSL_ERROR: number;
    readonly RFID_SOFT_ERROR: number;
    readonly RFID_HARD_ERROR: number;
    readonly BUFFER_TOO_SMALL: number;
    readonly DNS_ERROR: number;
    readonly SSL_UNK_CERT: number;
    readonly UNCONFIGURED: number;
    readonly NO_TRUSTED_CA_CHECK: number;
    readonly NO_EXPIRATION_CHECK: number;
    readonly NO_HOSTNAME_CHECK: number;
    readonly LEGACY: number;
    defaultCacheValidity: number;
    static readonly SUCCESS: number;
    static readonly NOT_INITIALIZED: number;
    static readonly INVALID_ARGUMENT: number;
    static readonly NOT_SUPPORTED: number;
    static readonly DEVICE_NOT_FOUND: number;
    static readonly VERSION_MISMATCH: number;
    static readonly DEVICE_BUSY: number;
    static readonly TIMEOUT: number;
    static readonly IO_ERROR: number;
    static readonly NO_MORE_DATA: number;
    static readonly EXHAUSTED: number;
    static readonly DOUBLE_ACCES: number;
    static readonly UNAUTHORIZED: number;
    static readonly RTC_NOT_READY: number;
    static readonly FILE_NOT_FOUND: number;
    static readonly SSL_ERROR: number;
    static readonly RFID_SOFT_ERROR: number;
    static readonly RFID_HARD_ERROR: number;
    static readonly BUFFER_TOO_SMALL: number;
    static readonly DNS_ERROR: number;
    static readonly SSL_UNK_CERT: number;
    static readonly UNCONFIGURED: number;
    static readonly NO_TRUSTED_CA_CHECK: number;
    static readonly NO_EXPIRATION_CHECK: number;
    static readonly NO_HOSTNAME_CHECK: number;
    static readonly LEGACY: number;
    readonly INVALID_INT: number;
    readonly INVALID_UINT: number;
    readonly INVALID_LONG: number;
    readonly INVALID_DOUBLE: number;
    readonly MIN_DOUBLE: number;
    readonly MAX_DOUBLE: number;
    readonly INVALID_STRING: string;
    readonly HASH_BUF_SIZE: number;
    readonly DETECT_NONE: number;
    readonly DETECT_USB: number;
    readonly DETECT_NET: number;
    readonly DETECT_ALL: number;
    readonly YOCTO_DEFAULT_HTTP_PORT: number;
    readonly YOCTO_DEFAULT_HTTPS_PORT: number;
    constructor(system_env?: YSystemEnv);
    imm_ResetToDefaults(): void;
    _throw(int_errType: number, str_errMsg: string, obj_retVal?: any): any;
    imm_setErr(errmsg: YErrorMsg | null, int_errType: number, str_errMsg: string, obj_retVal?: any): any;
    imm_setSystemEnv(env: YSystemEnv): void;
    imm_log(msg: string, ...moreArgs: any[]): void;
    /**
     * Registers a log callback function. This callback will be called each time
     * the API have something to say. Quite useful to debug the API.
     *
     * @param logfun : a procedure taking a string parameter, or null
     *         to unregister a previously registered  callback.
     */
    RegisterLogFunction(logfun: YLogCallback): Promise<number>;
    imm_getHub(obj_urlInfo: _YY_UrlInfo): YGenericHub | null;
    imm_getPrimaryHub(hub: YGenericHub): YGenericHub;
    _addConnectedHub(newhub: YGenericHub): Promise<void>;
    imm_isActiveHub(hubSerial: string): boolean;
    imm_dropConnectedHub(hub: YGenericHub): void;
    _ensureUpdateDeviceListNotRunning(): Promise<void>;
    _updateDeviceList_internal(bool_forceupdate: boolean, bool_invokecallbacks: boolean): Promise<YConditionalResult>;
    updateDeviceList_process(hub: YGenericHub, hubDev: YDevice, whitePages: _YY_WhitePage[], yellowPages: _YY_YellowPages): Promise<number>;
    /** process event data produced by a hub
     */
    parseEvents(hub: YGenericHub, str_lines: string): Promise<void>;
    /** Network notification format: 7x7bit (mapped to 7 chars in range 32..159)
     *                               used to represent 1 flag (RAW6BYTES) + 6 bytes
     * INPUT:  [R765432][1076543][2107654][3210765][4321076][5432107][6543210]
     * OUTPUT: 7 bytes array (1 byte for the funcint_TypeV2 and 6 bytes of USB like data
     *                     funcTypeV2 + [R][-byte 0][-byte 1-][-byte 2-][-byte 3-][-byte 4-][-byte 5-]
     *
     * @return {number[]}
     */
    imm_decodeNetFuncValV2(p: string): number[] | null;
    /** Decode an enhanced notification (V2) buffer
     */
    imm_decodePubVal(int_typeV2: number, arr_funcval: number[], int_ofs: number, int_funcvalen: number): string;
    imm_decExp(int_pow: number): number;
    imm_decimalToDouble(val: number): number;
    imm_doubleToDecimal(val: number): number;
    imm_getCalibrationHandler(calibType: number): yCalibrationHandler;
    imm_decodeWords(data: string): number[];
    imm_decodeFloats(data: string): number[];
    /** Convert a numeric string to an integer
     */
    static imm_atoi(str_data: string): number;
    /** Convert a numeric string to an float
     */
    static imm_atof(str_data: string): number;
    /** Convert a binary object to string
     */
    imm_bin2str(bin_data: Uint8Array): string;
    /** Convert a string to binary object
     */
    imm_str2bin(str_data: string): Uint8Array;
    /** Convert a binary object to hex string
     */
    imm_bin2hexstr(bin_data: Uint8Array): string;
    /** Compute the 32-bit CRC of a binary object
     */
    imm_bincrc(bin_data: Uint8Array, ofs: number, size: number): number;
    /** Convert a hex string to binary object
     */
    imm_hexstr2bin(str_data: string): Uint8Array;
    /** Return a Device object for a specified URL, serial number or logical device name
     *
     * This function will not cause any network access (not async !)
     */
    imm_getDevice(str_device: string): YDevice | null;
    /** Add or remove a value change callback
     */
    _UpdateValueCallbackList(obj_func: YFunction, bool_add: boolean): Promise<void>;
    /** Add or remove a timed report callback
     */
    _UpdateTimedReportCallbackList(obj_func: YFunction, bool_add: boolean): Promise<void>;
    imm_functionClass(str_funcid: string): string;
    imm_reindexDevice(obj_dev: YDevice): void;
    imm_forgetDevice(obj_dev: YDevice): void;
    imm_resolveFunction(str_className: string, str_func: string): YConditionalResult;
    imm_getFriendlyNameFunction(str_className: string, str_func: string): YConditionalResult;
    imm_setFunction(str_className: string, str_func: string, obj_func: YFunction): void;
    imm_getFunction(str_className: string, str_func: string): YFunction;
    setFunctionValue(str_hwid: string, str_pubval: string): Promise<void>;
    setTimedReport(str_hwid: string, float_timestamp: number, float_duration: number, arr_report: number[]): Promise<void>;
    setConfChange(str_serial: string): Promise<void>;
    setBeaconChange(str_serial: string, int_beacon: number): Promise<void>;
    imm_getFunctionValue(str_hwid: string): string;
    imm_getFunctionBaseType(str_hwid: string): number;
    imm_getFirstHardwareId(str_className: string): string | null;
    imm_getNextHardwareId(str_className: string, str_hwid: string): string | null;
    /** Perform an HTTP request on a device, by URL or identifier.
     * When loading the REST API from a device by identifier, the device cache will be used.
     */
    devRequest(str_device: string, str_request: string, obj_body?: YHTTPBody | null, int_tcpchan?: number): Promise<YHTTPRequest>;
    isReadOnly(str_device: string): Promise<boolean>;
    /** Locate the device to access a specified function, without causing any I/O
     */
    imm_funcDev_internal(str_className: string, str_func: string): YFuncRequest;
    /** Locate the device to access a specified function. May cause device list update if needed
     */
    _funcDev(str_className: string, str_func: string): Promise<YFuncRequest>;
    /** Load and parse the REST API for a function given by class name and identifier, possibly applying changes
     * Device cache will be preloaded when loading function 'module' and leveraged for other modules
     */
    funcRequest(str_className: string, str_func: string, str_extra: string, int_msValidity?: number): Promise<YFuncRequest>;
    /** Perform an HTTP request on a device and return the result string
     */
    HTTPRequest(str_device: string, str_request: string): Promise<Uint8Array | null>;
    ForceDeviceRefresh(str_device: string): Promise<number>;
    SetDeviceListValidity_internal(deviceListValidity: number): Promise<void>;
    GetDeviceListValidity_internal(): Promise<number>;
    SetNetworkTimeout_internal(networkMsTimeout: number): Promise<void>;
    GetNetworkTimeout_internal(): Promise<number>;
    GetYAPISharedLibraryPath_internal(): Promise<string>;
    AddUdevRule_internal(force: boolean): Promise<string>;
    DownloadHostCertificate_internal(url: string, mstimeout: number): Promise<string>;
    SetTrustedCertificatesList_internal(certificatePath: string): Promise<string>;
    SetNetworkSecurityOptions_internal(opts: number): Promise<string>;
    AddTrustedCertificates_internal(certificate: string): Promise<string>;
    imm_updateRegisteredHubs(hub: YGenericHub, add: boolean): void;
    /**
     * Modifies the delay between each forced enumeration of the used YoctoHubs.
     * By default, the library performs a full enumeration every 10 seconds.
     * To reduce network traffic, you can increase this delay.
     * It's particularly useful when a YoctoHub is connected to the GSM network
     * where traffic is billed. This parameter doesn't impact modules connected by USB,
     * nor the working of module arrival/removal callbacks.
     * Note: you must call this function after yInitAPI.
     *
     * @param deviceListValidity : nubmer of seconds between each enumeration.
     * @noreturn
     */
    SetDeviceListValidity(deviceListValidity: number): Promise<void>;
    /**
     * Returns the delay between each forced enumeration of the used YoctoHubs.
     * Note: you must call this function after yInitAPI.
     *
     * @return the number of seconds between each enumeration.
     */
    GetDeviceListValidity(): Promise<number>;
    /**
     * Returns the path to the dynamic YAPI library. This function is useful for debugging problems loading the
     * dynamic library YAPI. This function is supported by the C#, Python and VB languages. The other
     * libraries return an
     * empty string.
     *
     * @return a string containing the path of the YAPI dynamic library.
     */
    GetYAPISharedLibraryPath(): Promise<string>;
    /**
     * Adds a UDEV rule which authorizes all users to access Yoctopuce modules
     * connected to the USB ports. This function works only under Linux. The process that
     * calls this method must have root privileges because this method changes the Linux configuration.
     *
     * @param force : if true, overwrites any existing rule.
     *
     * @return an empty string if the rule has been added.
     *
     * On failure, returns a string that starts with "error:".
     */
    AddUdevRule(force: boolean): Promise<string>;
    /**
     * Download the TLS/SSL certificate from the hub. This function allows to download a TLS/SSL certificate to add it
     * to the list of trusted certificates using the AddTrustedCertificates method.
     *
     * @param url : the root URL of the VirtualHub V2 or HTTP server.
     * @param mstimeout : the number of milliseconds available to download the certificate.
     *
     * @return a string containing the certificate. In case of error, returns a string starting with "error:".
     */
    DownloadHostCertificate(url: string, mstimeout: number): Promise<string>;
    /**
     * Adds a TLS/SSL certificate to the list of trusted certificates. By default, the library
     * library will reject TLS/SSL connections to servers whose certificate is not known. This function
     * function allows to add a list of known certificates. It is also possible to disable the verification
     * using the SetNetworkSecurityOptions method.
     *
     * @param certificate : a string containing one or more certificates.
     *
     * @return an empty string if the certificate has been added correctly.
     *         In case of error, returns a string starting with "error:".
     */
    AddTrustedCertificates(certificate: string): Promise<string>;
    /**
     * Set the path of Certificate Authority file on local filesystem. This method takes as a parameter
     * the path of a file containing all certificates in PEM format.
     * For technical reasons, only one file can be specified. So if you need to connect to several Hubs
     * instances with self-signed certificates, you'll need to use
     * a single file containing all the certificates end-to-end. Passing a empty string will restore the
     * default settings. This option is only supported by PHP library.
     *
     * @param certificatePath : the path of the file containing all certificates in PEM format.
     *
     * @return an empty string if the certificate has been added correctly.
     *         In case of error, returns a string starting with "error:".
     */
    SetTrustedCertificatesList(certificatePath: string): Promise<string>;
    /**
     * Enables or disables certain TLS/SSL certificate checks.
     *
     * @param opts : The options are YAPI.NO_TRUSTED_CA_CHECK,
     *         YAPI.NO_EXPIRATION_CHECK, YAPI.NO_HOSTNAME_CHECK.
     *
     * @return an empty string if the options are taken into account.
     *         On error, returns a string beginning with "error:".
     */
    SetNetworkSecurityOptions(opts: number): Promise<string>;
    /**
     * Modifies the network connection delay for yRegisterHub() and yUpdateDeviceList().
     * This delay impacts only the YoctoHubs and VirtualHub
     * which are accessible through the network. By default, this delay is of 20000 milliseconds,
     * but depending on your network you may want to change this delay,
     * gor example if your network infrastructure is based on a GSM connection.
     *
     * @param networkMsTimeout : the network connection delay in milliseconds.
     * @noreturn
     */
    SetNetworkTimeout(networkMsTimeout: number): Promise<void>;
    /**
     * Returns the network connection delay for yRegisterHub() and yUpdateDeviceList().
     * This delay impacts only the YoctoHubs and VirtualHub
     * which are accessible through the network. By default, this delay is of 20000 milliseconds,
     * but depending on your network you may want to change this delay,
     * for example if your network infrastructure is based on a GSM connection.
     *
     * @return the network connection delay in milliseconds.
     */
    GetNetworkTimeout(): Promise<number>;
    /**
     * Change the validity period of the data loaded by the library.
     * By default, when accessing a module, all the attributes of the
     * module functions are automatically kept in cache for the standard
     * duration (5 ms). This method can be used to change this standard duration,
     * for example in order to reduce network or USB traffic. This parameter
     * does not affect value change callbacks
     * Note: This function must be called after yInitAPI.
     *
     * @param cacheValidityMs : an integer corresponding to the validity attributed to the
     *         loaded function parameters, in milliseconds.
     * @noreturn
     */
    SetCacheValidity(cacheValidityMs: number): Promise<void>;
    /**
     * Returns the validity period of the data loaded by the library.
     * This method returns the cache validity of all attributes
     * module functions.
     * Note: This function must be called after yInitAPI .
     *
     * @return an integer corresponding to the validity attributed to the
     *         loaded function parameters, in milliseconds
     */
    GetCacheValidity(): Promise<number>;
    nextHubInUseInternal(hubref: number): YHub | null;
    getYHubObj(hubref: number): YHub;
    findYHubFromID(id: string): Promise<YHub | null>;
    /**
     * Returns the version identifier for the Yoctopuce library in use.
     * The version is a string in the form "Major.Minor.Build",
     * for instance "1.01.5535". For languages using an external
     * DLL (for instance C#, VisualBasic or Delphi), the character string
     * includes as well the DLL version, for instance
     * "1.01.5535 (1.01.5439)".
     *
     * If you want to verify in your code that the library version is
     * compatible with the version that you have used during development,
     * verify that the major number is strictly equal and that the minor
     * number is greater or equal. The build number is not relevant
     * with respect to the library compatibility.
     *
     * @return a character string describing the library version.
     */
    GetAPIVersion(): Promise<string>;
    imm_GetAPIVersion(): string;
    /**
     * Initializes the Yoctopuce programming library explicitly.
     * It is not strictly needed to call yInitAPI(), as the library is
     * automatically  initialized when calling yRegisterHub() for the
     * first time.
     *
     * When YAPI.DETECT_NONE is used as detection mode,
     * you must explicitly use yRegisterHub() to point the API to the
     * VirtualHub on which your devices are connected before trying to access them.
     *
     * @param mode : an integer corresponding to the type of automatic
     *         device detection to use. Possible values are
     *         YAPI.DETECT_NONE, YAPI.DETECT_USB, YAPI.DETECT_NET,
     *         and YAPI.DETECT_ALL.
     * @param errmsg : a string passed by reference to receive any error message.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure returns a negative error code.
     */
    InitAPI(mode: number, errmsg: YErrorMsg): Promise<number>;
    /**
     * Waits for all pending communications with Yoctopuce devices to be
     * completed then frees dynamically allocated resources used by
     * the Yoctopuce library.
     *
     * From an operating system standpoint, it is generally not required to call
     * this function since the OS will automatically free allocated resources
     * once your program is completed. However, there are two situations when
     * you may really want to use that function:
     *
     * - Free all dynamically allocated memory blocks in order to
     * track a memory leak.
     *
     * - Send commands to devices right before the end
     * of the program. Since commands are sent in an asynchronous way
     * the program could exit before all commands are effectively sent.
     *
     * You should not call any other library function after calling
     * yFreeAPI(), or your program will crash.
     */
    FreeAPI(): Promise<void>;
    /**
     * Abort any ongoing API activity immediately by closing all open hubs. Then
     * frees dynamically allocated memory blocks used by the Yoctopuce library.
     * You should not call any other library function after calling
     * yDropAPI(), or your program will crash.
     */
    KillAPI(): Promise<void>;
    /**
     * Disables the use of exceptions to report runtime errors.
     * When exceptions are disabled, every function returns a specific
     * error value which depends on its type and which is documented in
     * this reference manual.
     */
    DisableExceptions(): Promise<void>;
    /**
     * Re-enables the use of exceptions for runtime error handling.
     * Be aware than when exceptions are enabled, every function that fails
     * triggers an exception. If the exception is not caught by the user code,
     * it either fires the debugger or aborts (i.e. crash) the program.
     */
    EnableExceptions(): Promise<void>;
    /**
     * Enable logging to the console for unhandled promise rejections,
     * such as exceptions in async functions without a try/catch.
     * This is not really a Yoctopuce thing, but since it is not obvious
     * to find out and since the code differs depending on the environment,
     * we provide it here for convenience.
     */
    LogUnhandledPromiseRejections(): Promise<void>;
    /**
     * Set up the Yoctopuce library to use modules connected on a given machine. Idealy this
     * call will be made once at the begining of your application.  The
     * parameter will determine how the API will work. Use the following values:
     *
     * <b>usb</b>: When the usb keyword is used, the API will work with
     * devices connected directly to the USB bus. Some programming languages such a JavaScript,
     * PHP, and Java don't provide direct access to USB hardware, so usb will
     * not work with these. In this case, use a VirtualHub or a networked YoctoHub (see below).
     *
     * <b><i>x.x.x.x</i></b> or <b><i>hostname</i></b>: The API will use the devices connected to the
     * host with the given IP address or hostname. That host can be a regular computer
     * running a <i>native VirtualHub</i>, a <i>VirtualHub for web</i> hosted on a server,
     * or a networked YoctoHub such as YoctoHub-Ethernet or
     * YoctoHub-Wireless. If you want to use the VirtualHub running on you local
     * computer, use the IP address 127.0.0.1. If the given IP is unresponsive, yRegisterHub
     * will not return until a time-out defined by ySetNetworkTimeout has elapsed.
     * However, it is possible to preventively test a connection  with yTestHub.
     * If you cannot afford a network time-out, you can use the non-blocking yPregisterHub
     * function that will establish the connection as soon as it is available.
     *
     *
     * <b>callback</b>: that keyword make the API run in "<i>HTTP Callback</i>" mode.
     * This a special mode allowing to take control of Yoctopuce devices
     * through a NAT filter when using a VirtualHub or a networked YoctoHub. You only
     * need to configure your hub to call your server script on a regular basis.
     * This mode is currently available for PHP and Node.JS only.
     *
     * Be aware that only one application can use direct USB access at a
     * given time on a machine. Multiple access would cause conflicts
     * while trying to access the USB modules. In particular, this means
     * that you must stop the VirtualHub software before starting
     * an application that uses direct USB access. The workaround
     * for this limitation is to set up the library to use the VirtualHub
     * rather than direct USB access.
     *
     * If access control has been activated on the hub, virtual or not, you want to
     * reach, the URL parameter should look like:
     *
     * http://username:password@address:port
     *
     * You can call <i>RegisterHub</i> several times to connect to several machines. On
     * the other hand, it is useless and even counterproductive to call <i>RegisterHub</i>
     * with to same address multiple times during the life of the application.
     *
     * @param url : a string containing either "usb","callback" or the
     *         root URL of the hub to monitor
     * @param errmsg : a string passed by reference to receive any error message.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure returns a negative error code.
     */
    RegisterHub(url: string, errmsg: YErrorMsg): Promise<number>;
    /**
     * Fault-tolerant alternative to yRegisterHub(). This function has the same
     * purpose and same arguments as yRegisterHub(), but does not trigger
     * an error when the selected hub is not available at the time of the function call.
     * If the connexion cannot be established immediately, a background task will automatically
     * perform periodic retries. This makes it possible to register a network hub independently of the current
     * connectivity, and to try to contact it only when a device is actively needed.
     *
     * @param url : a string containing either "usb","callback" or the
     *         root URL of the hub to monitor
     * @param errmsg : a string passed by reference to receive any error message.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure returns a negative error code.
     */
    PreregisterHub(url: string, errmsg: YErrorMsg): Promise<number>;
    /**
     * Setup the Yoctopuce library to use modules connected on a remote hub
     * performing an incoming connection to an HTTP server.
     *
     * @param incomingMessage {IncomingMessage} : node http incomingMessage object.
     * @param serverResponse  {ServerResponse} : node http serverResponse object.
     * @param errmsg {YErrorMsg} : a string passed by reference to receive any error message.
     *
     * @return {number} YAPI_SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    RegisterHubHttpCallback(incomingMessage: any, serverResponse: any, errmsg: YErrorMsg): Promise<number>;
    /**
     * Setup the Yoctopuce library to use modules connected on a remote hub
     * performing an incoming connection to a websocket server.
     *
     * @param ws {WebSocket} : node WebSocket object for the incoming websocket callback connection.
     * @param errmsg {YErrorMsg} : a string passed by reference to receive any error message.
     * @param authpwd {string} : an optional authentication password
     *
     * @return {number} YAPI_SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    RegisterHubWebSocketCallback(ws: _YY_WebSocket, errmsg: YErrorMsg, authpwd: string): Promise<number>;
    WebSocketJoin(ws: _YY_WebSocket, arr_credentials: WebSocketCredential[], closeCallback: Function): Promise<boolean>;
    /**
     * Set up the Yoctopuce library to no more use modules connected on a previously
     * registered machine with RegisterHub.
     *
     * @param url : a string containing either "usb" or the
     *         root URL of the hub to monitor
     */
    UnregisterHub(url: string): Promise<void>;
    /**
     * Test if the hub is reachable. This method do not register the hub, it only test if the
     * hub is usable. The url parameter follow the same convention as the yRegisterHub
     * method. This method is useful to verify the authentication parameters for a hub. It
     * is possible to force this method to return after mstimeout milliseconds.
     *
     * @param url : a string containing either "usb","callback" or the
     *         root URL of the hub to monitor
     * @param mstimeout : the number of millisecond available to test the connection.
     * @param errmsg : a string passed by reference to receive any error message.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure returns a negative error code.
     */
    TestHub(url: string, mstimeout: number, errmsg: YErrorMsg): Promise<number>;
    /**
     * Triggers a (re)detection of connected Yoctopuce modules.
     * The library searches the machines or USB ports previously registered using
     * yRegisterHub(), and invokes any user-defined callback function
     * in case a change in the list of connected devices is detected.
     *
     * This function can be called as frequently as desired to refresh the device list
     * and to make the application aware of hot-plug events. However, since device
     * detection is quite a heavy process, UpdateDeviceList shouldn't be called more
     * than once every two seconds.
     *
     * @param errmsg : a string passed by reference to receive any error message.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure returns a negative error code.
     */
    UpdateDeviceList(errmsg?: YErrorMsg | null): Promise<number>;
    _hubDiscoveryCallback_internal(serial: string, urlToRegister: string | null, urlToUnregister: string | null): Promise<void>;
    /**
     * Force a hub discovery, if a callback as been registered with yRegisterHubDiscoveryCallback it
     * will be called for each net work hub that will respond to the discovery.
     *
     * @param errmsg : a string passed by reference to receive any error message.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *         On failure returns a negative error code.
     */
    TriggerHubDiscovery(errmsg?: YErrorMsg | null): Promise<number>;
    /**
     * Maintains the device-to-library communication channel.
     * If your program includes significant loops, you may want to include
     * a call to this function to make sure that the library takes care of
     * the information pushed by the modules on the communication channels.
     * This is not strictly necessary, but it may improve the reactivity
     * of the library for the following commands.
     *
     * This function may signal an error in case there is a communication problem
     * while contacting a module.
     *
     * @param errmsg : a string passed by reference to receive any error message.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure returns a negative error code.
     */
    HandleEvents(errmsg?: YErrorMsg | null): Promise<number>;
    /**
     * Pauses the execution flow for a specified duration.
     * This function implements a passive waiting loop, meaning that it does not
     * consume CPU cycles significantly. The processor is left available for
     * other threads and processes. During the pause, the library nevertheless
     * reads from time to time information from the Yoctopuce modules by
     * calling yHandleEvents(), in order to stay up-to-date.
     *
     * This function may signal an error in case there is a communication problem
     * while contacting a module.
     *
     * @param ms_duration : an integer corresponding to the duration of the pause,
     *         in milliseconds.
     * @param errmsg : a string passed by reference to receive any error message.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure returns a negative error code.
     */
    Sleep(ms_duration: number, errmsg?: YErrorMsg | null): Promise<number>;
    _microSleep_internal(): Promise<void>;
    /**
     * Invoke the specified callback function after a given timeout.
     * This function behaves more or less like Javascript setTimeout,
     * but during the waiting time, it will call yHandleEvents
     * and yUpdateDeviceList periodically, in order to
     * keep the API up-to-date with current devices.
     *
     * @param callback : the function to call after the timeout occurs.
     *         On Microsoft Internet Explorer, the callback must
     *         be provided as a string to be evaluated.
     * @param ms_timeout : an integer corresponding to the duration of the
     *         timeout, in milliseconds.
     * @param args : additional arguments to be passed to the
     *         callback function can be provided, if needed
     *         (not supported on Microsoft Internet Explorer).
     *
     * @return YAPI.SUCCESS
     */
    SetTimeout(callback: Function, ms_timeout: number, args?: any): number;
    /**
     * Returns the current value of a monotone millisecond-based time counter.
     * This counter can be used to compute delays in relation with
     * Yoctopuce devices, which also uses the millisecond as timebase.
     *
     * @return a long integer corresponding to the millisecond counter.
     */
    GetTickCount(): number;
    imm_CheckLogicalName(name: string): boolean;
    /**
     * Checks if a given string is valid as logical name for a module or a function.
     * A valid logical name has a maximum of 19 characters, all among
     * A...Z, a...z, 0...9, _, and -.
     * If you try to configure a logical name with an incorrect string,
     * the invalid characters are ignored.
     *
     * @param name : a string containing the name to check.
     *
     * @return true if the name is valid, false otherwise.
     */
    CheckLogicalName(name: string): Promise<boolean>;
    /**
     * Register a callback function, to be called each time
     * a device is plugged. This callback will be invoked while yUpdateDeviceList
     * is running. You will have to call this function on a regular basis.
     *
     * @param arrivalCallback : a procedure taking a YModule parameter, or null
     *         to unregister a previously registered  callback.
     */
    RegisterDeviceArrivalCallback(arrivalCallback: YDeviceUpdateCallback | null): Promise<void>;
    RegisterDeviceChangeCallback(changeCallback: YDeviceUpdateCallback | null): Promise<void>;
    /**
     * Register a callback function, to be called each time
     * a device is unplugged. This callback will be invoked while yUpdateDeviceList
     * is running. You will have to call this function on a regular basis.
     *
     * @param removalCallback : a procedure taking a YModule parameter, or null
     *         to unregister a previously registered  callback.
     */
    RegisterDeviceRemovalCallback(removalCallback: YDeviceUpdateCallback | null): Promise<void>;
    /**
     * Register a callback function, to be called each time an Network Hub send
     * an SSDP message. The callback has two string parameter, the first one
     * contain the serial number of the hub and the second contain the URL of the
     * network hub (this URL can be passed to RegisterHub). This callback will be invoked
     * while yUpdateDeviceList is running. You will have to call this function on a regular basis.
     *
     * @param hubDiscoveryCallback : a procedure taking two string parameter, the serial
     *         number and the hub URL. Use null to unregister a previously registered  callback.
     */
    RegisterHubDiscoveryCallback(hubDiscoveryCallback: YHubDiscoveryCallback): Promise<number>;
    RegisterCalibrationHandler(calibrationType: number, calibrationHandler: yCalibrationHandler): Promise<void>;
    LinearCalibrationHandler(float_rawValue: number, int_calibType: number, arr_calibParams: number[], arr_calibRawValues: number[], arr_calibRefValues: number[]): number;
    /**
     * Compute the MD5 digest for a given ASCII string
     *
     * @param text {string} : the ASCII string to hash
     *
     * @return {Uint8Array} the 16-bytes MD5 hash key
     */
    imm_yMD5(text: string): Uint8Array;
    imm_initshaw(str_s: string, int_ofs: number, int_pad: number, int_xinit: number, _shaw: Uint32Array): void;
    imm_itershaw(s: number[], _shaw: Uint32Array): void;
    /**
     * Compute the SHA1 digest for a given ASCII string
     *
     * @param text {string} : the ASCII string to hash
     *
     * @return {Uint8Array} the 20-bytes SHA1 hash key
     */
    imm_ySHA1(text: string): Uint8Array;
    /**
     * Compute the WPA Preshared key for a given SSID and passphrase
     *
     * @param ssid {string} : the access point SSID
     * @param pass {string} : the access point WPA/WPA2 passphrase
     *
     * @return {string} an hexadecimal string for the preshared key
     */
    ComputePSK(ssid: string, pass: string): Promise<string>;
    private nextHubInUseInternal_internal;
    getGenHub(hubref: number): YGenericHub | null;
    private _findYHubFromCache;
    private _addYHubToCache;
}
export declare var YAPI: YAPIContext;
export {};


// from yocto_api_html.d.ts
/*********************************************************************
 *
 * $Id: yocto_api_html.ts 68272 2025-08-11 14:08:33Z mvuilleu $
 *
 * High-level programming interface, common to all modules
 *
 * - - - - - - - - - License information: - - - - - - - - -
 *
 *  Copyright (C) 2011 and beyond by Yoctopuce Sarl, Switzerland.
 *
 *  Yoctopuce Sarl (hereafter Licensor) grants to you a perpetual
 *  non-exclusive license to use, modify, copy and integrate http
 *  file into your software for the sole purpose of interfacing
 *  with Yoctopuce products.
 *
 *  You may reproduce and distribute copies of this file in
 *  source or object form, as long as the sole purpose of this
 *  code is to interface with Yoctopuce products. You must retain
 *  this notice in the distributed source file.
 *
 *  You should refer to Yoctopuce General Terms and Conditions
 *  for additional information regarding your rights and
 *  obligations.
 *
 *  THE SOFTWARE AND DOCUMENTATION ARE PROVIDED "AS IS" WITHOUT
 *  WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
 *  WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS
 *  FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO
 *  EVENT SHALL LICENSOR BE LIABLE FOR ANY INCIDENTAL, SPECIAL,
 *  INDIRECT OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA,
 *  COST OF PROCUREMENT OF SUBSTITUTE GOODS, TECHNOLOGY OR
 *  SERVICES, ANY CLAIMS BY THIRD PARTIES (INCLUDING BUT NOT
 *  LIMITED TO ANY DEFENSE THEREOF), ANY CLAIMS FOR INDEMNITY OR
 *  CONTRIBUTION, OR OTHER SIMILAR COSTS, WHETHER ASSERTED ON THE
 *  BASIS OF CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF
 *  WARRANTY, OR OTHERWISE.
 *
 *********************************************************************/
import { _YY_UrlInfo, YAPIContext, YGenericHub, YGenericSSDPManager, YSystemEnv, YUnhandledPromiseRejectionCallback, YHubEngine } from "./yocto_api.js";
/**
 * System environment definition, for use in a browser
 */
export declare class YSystemEnvHtml extends YSystemEnv {
    isNodeJS: boolean;
    hasSSDP: boolean;
    hookUnhandledRejection(handler: YUnhandledPromiseRejectionCallback): void;
    getWebSocketEngine(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo): YHubEngine | null;
    getHttpEngine(hub: YGenericHub, runtime_urlInfo: _YY_UrlInfo, firstInfoJson: any): YHubEngine | null;
    getWebSocketCallbackHub(hub: YGenericHub, ws: any): YHubEngine | null;
    getHttpCallbackHub(hub: YGenericHub, incomingMessage: any, serverResponse: any): YHubEngine | null;
    getSSDPManager(obj_yapi: YAPIContext): YGenericSSDPManager | null;
    loadfile(file: string | Blob): Promise<Uint8Array>;
    downloadfile(url: string, yapi: YAPIContext): Promise<Uint8Array>;
    downloadRemoteCertificate(urlinfo: _YY_UrlInfo): Promise<string>;
}


// from yocto_files.d.ts
/*********************************************************************
 *
 *  $Id: yocto_files.ts 70518 2025-11-26 16:18:50Z mvuilleu $
 *
 *  Implements the high-level API for FileRecord functions
 *
 *  - - - - - - - - - License information: - - - - - - - - -
 *
 *  Copyright (C) 2011 and beyond by Yoctopuce Sarl, Switzerland.
 *
 *  Yoctopuce Sarl (hereafter Licensor) grants to you a perpetual
 *  non-exclusive license to use, modify, copy and integrate this
 *  file into your software for the sole purpose of interfacing
 *  with Yoctopuce products.
 *
 *  You may reproduce and distribute copies of this file in
 *  source or object form, as long as the sole purpose of this
 *  code is to interface with Yoctopuce products. You must retain
 *  this notice in the distributed source file.
 *
 *  You should refer to Yoctopuce General Terms and Conditions
 *  for additional information regarding your rights and
 *  obligations.
 *
 *  THE SOFTWARE AND DOCUMENTATION ARE PROVIDED 'AS IS' WITHOUT
 *  WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
 *  WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS
 *  FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO
 *  EVENT SHALL LICENSOR BE LIABLE FOR ANY INCIDENTAL, SPECIAL,
 *  INDIRECT OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA,
 *  COST OF PROCUREMENT OF SUBSTITUTE GOODS, TECHNOLOGY OR
 *  SERVICES, ANY CLAIMS BY THIRD PARTIES (INCLUDING BUT NOT
 *  LIMITED TO ANY DEFENSE THEREOF), ANY CLAIMS FOR INDEMNITY OR
 *  CONTRIBUTION, OR OTHER SIMILAR COSTS, WHETHER ASSERTED ON THE
 *  BASIS OF CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF
 *  WARRANTY, OR OTHERWISE.
 *
 *********************************************************************/
import { YAPIContext, YFunction } from './yocto_api.js';
/**
 * YFileRecord Class: Description of a file on the device filesystem, returned by files.get_list
 *
 * YFileRecord objects are used to describe a file that is stored on a Yoctopuce device.
 * These objects are used in particular in conjunction with the YFiles class.
 */
export declare class YFileRecord {
    _name: string;
    _size: number;
    _crc: number;
    constructor(str_json: string);
    /**
     * Returns the name of the file.
     *
     * @return a string with the name of the file.
     */
    get_name(): string;
    /**
     * Returns the size of the file in bytes.
     *
     * @return the size of the file.
     */
    get_size(): number;
    /**
     * Returns the 32-bit CRC of the file content.
     *
     * @return the 32-bit CRC of the file content.
     */
    get_crc(): number;
}
export declare namespace YFileRecord {
}
/**
 * YFiles Class: filesystem control interface, available for instance in the Yocto-Color-V2, the
 * Yocto-SPI, the YoctoHub-Ethernet or the YoctoHub-GSM-4G
 *
 * The YFiles class is used to access the filesystem embedded on
 * some Yoctopuce devices. This filesystem makes it
 * possible for instance to design a custom web UI
 * (for networked devices) or to add fonts (on display devices).
 */
/** @extends {YFunction} **/
export declare class YFiles extends YFunction {
    _className: string;
    _filesCount: number;
    _freeSpace: number;
    _valueCallbackFiles: YFiles.ValueCallback | null;
    _ver: number;
    readonly FILESCOUNT_INVALID: number;
    readonly FREESPACE_INVALID: number;
    static readonly FILESCOUNT_INVALID: number;
    static readonly FREESPACE_INVALID: number;
    constructor(yapi: YAPIContext, func: string);
    imm_parseAttr(name: string, val: any): number;
    /**
     * Returns the number of files currently loaded in the filesystem.
     *
     * @return an integer corresponding to the number of files currently loaded in the filesystem
     *
     * On failure, throws an exception or returns YFiles.FILESCOUNT_INVALID.
     */
    get_filesCount(): Promise<number>;
    /**
     * Returns the free space for uploading new files to the filesystem, in bytes.
     *
     * @return an integer corresponding to the free space for uploading new files to the filesystem, in bytes
     *
     * On failure, throws an exception or returns YFiles.FREESPACE_INVALID.
     */
    get_freeSpace(): Promise<number>;
    /**
     * Retrieves a filesystem for a given identifier.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the filesystem is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YFiles.isOnline() to test if the filesystem is
     * indeed online at a given time. In case of ambiguity when looking for
     * a filesystem by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * If a call to this object's is_online() method returns FALSE although
     * you are certain that the matching device is plugged, make sure that you did
     * call registerHub() at application initialization time.
     *
     * @param func : a string that uniquely characterizes the filesystem, for instance
     *         YRGBLED2.files.
     *
     * @return a YFiles object allowing you to drive the filesystem.
     */
    static FindFiles(func: string): YFiles;
    /**
     * Retrieves a filesystem for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the filesystem is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YFiles.isOnline() to test if the filesystem is
     * indeed online at a given time. In case of ambiguity when looking for
     * a filesystem by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx : a YAPI context
     * @param func : a string that uniquely characterizes the filesystem, for instance
     *         YRGBLED2.files.
     *
     * @return a YFiles object allowing you to drive the filesystem.
     */
    static FindFilesInContext(yctx: YAPIContext, func: string): YFiles;
    /**
     * Registers the callback function that is invoked on every change of advertised value.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered. For good responsiveness, remember to call
     * one of these two functions periodically. To unregister a callback, pass a null pointer as argument.
     *
     * @param callback : the callback function to call, or a null pointer. The callback function should take two
     *         arguments: the function object of which the value has changed, and the character string describing
     *         the new advertised value.
     * @noreturn
     */
    registerValueCallback(callback: YFiles.ValueCallback | null): Promise<number>;
    _invokeValueCallback(value: string): Promise<number>;
    sendCommand(command: string): Promise<Uint8Array>;
    _getVersion(): Promise<number>;
    /**
     * Reinitialize the filesystem to its clean, unfragmented, empty state.
     * All files previously uploaded are permanently lost.
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    format_fs(): Promise<number>;
    /**
     * Returns a list of YFileRecord objects that describe files currently loaded
     * in the filesystem.
     *
     * @param pattern : an optional filter pattern, using star and question marks
     *         as wild cards. When an empty pattern is provided, all file records
     *         are returned.
     *
     * @return a list of YFileRecord objects, containing the file path
     *         and name, byte size and 32-bit CRC of the file content.
     *
     * On failure, throws an exception or returns an empty list.
     */
    get_list(pattern: string): Promise<YFileRecord[]>;
    /**
     * Tests if a file exists on the filesystem of the module.
     *
     * @param filename : the filename to test.
     *
     * @return true if the file exists, false otherwise.
     *
     * On failure, throws an exception.
     */
    fileExist(filename: string): Promise<boolean>;
    /**
     * Downloads the requested file and returns a binary buffer with its content.
     *
     * @param pathname : path and name of the file to download
     *
     * @return a binary buffer with the file content
     *
     * On failure, throws an exception or returns an empty content.
     */
    download(pathname: string): Promise<Uint8Array>;
    /**
     * Uploads a file to the filesystem, to the specified full path name.
     * If a file already exists with the same path name, its content is overwritten.
     *
     * @param pathname : path and name of the new file to create
     * @param content : binary buffer with the content to set
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    upload(pathname: string, content: Uint8Array): Promise<number>;
    /**
     * Deletes a file, given by its full path name, from the filesystem.
     * Because of filesystem fragmentation, deleting a file may not always
     * free up the whole space used by the file. However, rewriting a file
     * with the same path name will always reuse any space not freed previously.
     * If you need to ensure that no space is taken by previously deleted files,
     * you can use format_fs to fully reinitialize the filesystem.
     *
     * @param pathname : path and name of the file to remove.
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    remove(pathname: string): Promise<number>;
    /**
     * Returns the expected file CRC for a given content.
     * Note that the CRC value may vary depending on the version
     * of the filesystem used by the hub, so it is important to
     * use this method if a reference value needs to be computed.
     *
     * @param content : a buffer representing a file content
     *
     * @return the 32-bit CRC summarizing the file content, as it would
     *         be returned by the get_crc() method of
     *         YFileRecord objects returned by get_list().
     */
    get_content_crc(content: Uint8Array): Promise<number>;
    /**
     * Continues the enumeration of filesystems started using yFirstFiles().
     * Caution: You can't make any assumption about the returned filesystems order.
     * If you want to find a specific a filesystem, use Files.findFiles()
     * and a hardwareID or a logical name.
     *
     * @return a pointer to a YFiles object, corresponding to
     *         a filesystem currently online, or a null pointer
     *         if there are no more filesystems to enumerate.
     */
    nextFiles(): YFiles | null;
    /**
     * Starts the enumeration of filesystems currently accessible.
     * Use the method YFiles.nextFiles() to iterate on
     * next filesystems.
     *
     * @return a pointer to a YFiles object, corresponding to
     *         the first filesystem currently online, or a null pointer
     *         if there are none.
     */
    static FirstFiles(): YFiles | null;
    /**
     * Starts the enumeration of filesystems currently accessible.
     * Use the method YFiles.nextFiles() to iterate on
     * next filesystems.
     *
     * @param yctx : a YAPI context.
     *
     * @return a pointer to a YFiles object, corresponding to
     *         the first filesystem currently online, or a null pointer
     *         if there are none.
     */
    static FirstFilesInContext(yctx: YAPIContext): YFiles | null;
}
export declare namespace YFiles {
    interface ValueCallback {
        (func: YFiles, value: string): void;
    }
}


// from yocto_network.d.ts
/*********************************************************************
 *
 *  $Id: svn_id $
 *
 *  Implements the high-level API for Network functions
 *
 *  - - - - - - - - - License information: - - - - - - - - -
 *
 *  Copyright (C) 2011 and beyond by Yoctopuce Sarl, Switzerland.
 *
 *  Yoctopuce Sarl (hereafter Licensor) grants to you a perpetual
 *  non-exclusive license to use, modify, copy and integrate this
 *  file into your software for the sole purpose of interfacing
 *  with Yoctopuce products.
 *
 *  You may reproduce and distribute copies of this file in
 *  source or object form, as long as the sole purpose of this
 *  code is to interface with Yoctopuce products. You must retain
 *  this notice in the distributed source file.
 *
 *  You should refer to Yoctopuce General Terms and Conditions
 *  for additional information regarding your rights and
 *  obligations.
 *
 *  THE SOFTWARE AND DOCUMENTATION ARE PROVIDED 'AS IS' WITHOUT
 *  WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
 *  WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS
 *  FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO
 *  EVENT SHALL LICENSOR BE LIABLE FOR ANY INCIDENTAL, SPECIAL,
 *  INDIRECT OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA,
 *  COST OF PROCUREMENT OF SUBSTITUTE GOODS, TECHNOLOGY OR
 *  SERVICES, ANY CLAIMS BY THIRD PARTIES (INCLUDING BUT NOT
 *  LIMITED TO ANY DEFENSE THEREOF), ANY CLAIMS FOR INDEMNITY OR
 *  CONTRIBUTION, OR OTHER SIMILAR COSTS, WHETHER ASSERTED ON THE
 *  BASIS OF CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF
 *  WARRANTY, OR OTHERWISE.
 *
 *********************************************************************/
import { YAPIContext, YFunction } from './yocto_api.js';
/**
 * YNetwork Class: network interface control interface, available for instance in the
 * YoctoHub-Ethernet, the YoctoHub-GSM-4G, the YoctoHub-Wireless-SR or the YoctoHub-Wireless-n
 *
 * YNetwork objects provide access to TCP/IP parameters of Yoctopuce
 * devices that include a built-in network interface.
 */
export declare class YNetwork extends YFunction {
    _className: string;
    _readiness: YNetwork.READINESS;
    _macAddress: string;
    _ipAddress: string;
    _subnetMask: string;
    _router: string;
    _currentDNS: string;
    _ipConfig: string;
    _primaryDNS: string;
    _secondaryDNS: string;
    _ntpServer: string;
    _userPassword: string;
    _adminPassword: string;
    _httpPort: number;
    _httpsPort: number;
    _securityMode: YNetwork.SECURITYMODE;
    _defaultPage: string;
    _discoverable: YNetwork.DISCOVERABLE;
    _wwwWatchdogDelay: number;
    _callbackUrl: string;
    _callbackMethod: YNetwork.CALLBACKMETHOD;
    _callbackEncoding: YNetwork.CALLBACKENCODING;
    _callbackTemplate: YNetwork.CALLBACKTEMPLATE;
    _callbackCredentials: string;
    _callbackInitialDelay: number;
    _callbackSchedule: string;
    _callbackMinDelay: number;
    _callbackMaxDelay: number;
    _poeCurrent: number;
    _valueCallbackNetwork: YNetwork.ValueCallback | null;
    readonly READINESS_DOWN: YNetwork.READINESS;
    readonly READINESS_EXISTS: YNetwork.READINESS;
    readonly READINESS_LINKED: YNetwork.READINESS;
    readonly READINESS_LAN_OK: YNetwork.READINESS;
    readonly READINESS_WWW_OK: YNetwork.READINESS;
    readonly READINESS_INVALID: YNetwork.READINESS;
    readonly MACADDRESS_INVALID: string;
    readonly IPADDRESS_INVALID: string;
    readonly SUBNETMASK_INVALID: string;
    readonly ROUTER_INVALID: string;
    readonly CURRENTDNS_INVALID: string;
    readonly IPCONFIG_INVALID: string;
    readonly PRIMARYDNS_INVALID: string;
    readonly SECONDARYDNS_INVALID: string;
    readonly NTPSERVER_INVALID: string;
    readonly USERPASSWORD_INVALID: string;
    readonly ADMINPASSWORD_INVALID: string;
    readonly HTTPPORT_INVALID: number;
    readonly HTTPSPORT_INVALID: number;
    readonly SECURITYMODE_UNDEFINED: YNetwork.SECURITYMODE;
    readonly SECURITYMODE_LEGACY: YNetwork.SECURITYMODE;
    readonly SECURITYMODE_MIXED: YNetwork.SECURITYMODE;
    readonly SECURITYMODE_SECURE: YNetwork.SECURITYMODE;
    readonly SECURITYMODE_INVALID: YNetwork.SECURITYMODE;
    readonly DEFAULTPAGE_INVALID: string;
    readonly DISCOVERABLE_FALSE: YNetwork.DISCOVERABLE;
    readonly DISCOVERABLE_TRUE: YNetwork.DISCOVERABLE;
    readonly DISCOVERABLE_INVALID: YNetwork.DISCOVERABLE;
    readonly WWWWATCHDOGDELAY_INVALID: number;
    readonly CALLBACKURL_INVALID: string;
    readonly CALLBACKMETHOD_POST: YNetwork.CALLBACKMETHOD;
    readonly CALLBACKMETHOD_GET: YNetwork.CALLBACKMETHOD;
    readonly CALLBACKMETHOD_PUT: YNetwork.CALLBACKMETHOD;
    readonly CALLBACKMETHOD_INVALID: YNetwork.CALLBACKMETHOD;
    readonly CALLBACKENCODING_FORM: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_JSON: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_JSON_ARRAY: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_CSV: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_YOCTO_API: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_JSON_NUM: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_EMONCMS: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_AZURE: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_INFLUXDB: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_MQTT: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_YOCTO_API_JZON: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_PRTG: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_INFLUXDB_V2: YNetwork.CALLBACKENCODING;
    readonly CALLBACKENCODING_INVALID: YNetwork.CALLBACKENCODING;
    readonly CALLBACKTEMPLATE_OFF: YNetwork.CALLBACKTEMPLATE;
    readonly CALLBACKTEMPLATE_ON: YNetwork.CALLBACKTEMPLATE;
    readonly CALLBACKTEMPLATE_INVALID: YNetwork.CALLBACKTEMPLATE;
    readonly CALLBACKCREDENTIALS_INVALID: string;
    readonly CALLBACKINITIALDELAY_INVALID: number;
    readonly CALLBACKSCHEDULE_INVALID: string;
    readonly CALLBACKMINDELAY_INVALID: number;
    readonly CALLBACKMAXDELAY_INVALID: number;
    readonly POECURRENT_INVALID: number;
    static readonly READINESS_DOWN: YNetwork.READINESS;
    static readonly READINESS_EXISTS: YNetwork.READINESS;
    static readonly READINESS_LINKED: YNetwork.READINESS;
    static readonly READINESS_LAN_OK: YNetwork.READINESS;
    static readonly READINESS_WWW_OK: YNetwork.READINESS;
    static readonly READINESS_INVALID: YNetwork.READINESS;
    static readonly MACADDRESS_INVALID: string;
    static readonly IPADDRESS_INVALID: string;
    static readonly SUBNETMASK_INVALID: string;
    static readonly ROUTER_INVALID: string;
    static readonly CURRENTDNS_INVALID: string;
    static readonly IPCONFIG_INVALID: string;
    static readonly PRIMARYDNS_INVALID: string;
    static readonly SECONDARYDNS_INVALID: string;
    static readonly NTPSERVER_INVALID: string;
    static readonly USERPASSWORD_INVALID: string;
    static readonly ADMINPASSWORD_INVALID: string;
    static readonly HTTPPORT_INVALID: number;
    static readonly HTTPSPORT_INVALID: number;
    static readonly SECURITYMODE_UNDEFINED: YNetwork.SECURITYMODE;
    static readonly SECURITYMODE_LEGACY: YNetwork.SECURITYMODE;
    static readonly SECURITYMODE_MIXED: YNetwork.SECURITYMODE;
    static readonly SECURITYMODE_SECURE: YNetwork.SECURITYMODE;
    static readonly SECURITYMODE_INVALID: YNetwork.SECURITYMODE;
    static readonly DEFAULTPAGE_INVALID: string;
    static readonly DISCOVERABLE_FALSE: YNetwork.DISCOVERABLE;
    static readonly DISCOVERABLE_TRUE: YNetwork.DISCOVERABLE;
    static readonly DISCOVERABLE_INVALID: YNetwork.DISCOVERABLE;
    static readonly WWWWATCHDOGDELAY_INVALID: number;
    static readonly CALLBACKURL_INVALID: string;
    static readonly CALLBACKMETHOD_POST: YNetwork.CALLBACKMETHOD;
    static readonly CALLBACKMETHOD_GET: YNetwork.CALLBACKMETHOD;
    static readonly CALLBACKMETHOD_PUT: YNetwork.CALLBACKMETHOD;
    static readonly CALLBACKMETHOD_INVALID: YNetwork.CALLBACKMETHOD;
    static readonly CALLBACKENCODING_FORM: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_JSON: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_JSON_ARRAY: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_CSV: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_YOCTO_API: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_JSON_NUM: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_EMONCMS: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_AZURE: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_INFLUXDB: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_MQTT: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_YOCTO_API_JZON: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_PRTG: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_INFLUXDB_V2: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKENCODING_INVALID: YNetwork.CALLBACKENCODING;
    static readonly CALLBACKTEMPLATE_OFF: YNetwork.CALLBACKTEMPLATE;
    static readonly CALLBACKTEMPLATE_ON: YNetwork.CALLBACKTEMPLATE;
    static readonly CALLBACKTEMPLATE_INVALID: YNetwork.CALLBACKTEMPLATE;
    static readonly CALLBACKCREDENTIALS_INVALID: string;
    static readonly CALLBACKINITIALDELAY_INVALID: number;
    static readonly CALLBACKSCHEDULE_INVALID: string;
    static readonly CALLBACKMINDELAY_INVALID: number;
    static readonly CALLBACKMAXDELAY_INVALID: number;
    static readonly POECURRENT_INVALID: number;
    constructor(yapi: YAPIContext, func: string);
    imm_parseAttr(name: string, val: any): number;
    /**
     * Returns the current established working mode of the network interface.
     * Level zero (DOWN_0) means that no hardware link has been detected. Either there is no signal
     * on the network cable, or the selected wireless access point cannot be detected.
     * Level 1 (LIVE_1) is reached when the network is detected, but is not yet connected.
     * For a wireless network, this shows that the requested SSID is present.
     * Level 2 (LINK_2) is reached when the hardware connection is established.
     * For a wired network connection, level 2 means that the cable is attached at both ends.
     * For a connection to a wireless access point, it shows that the security parameters
     * are properly configured. For an ad-hoc wireless connection, it means that there is
     * at least one other device connected on the ad-hoc network.
     * Level 3 (DHCP_3) is reached when an IP address has been obtained using DHCP.
     * Level 4 (DNS_4) is reached when the DNS server is reachable on the network.
     * Level 5 (WWW_5) is reached when global connectivity is demonstrated by properly loading the
     * current time from an NTP server.
     *
     * @return a value among YNetwork.READINESS_DOWN, YNetwork.READINESS_EXISTS,
     * YNetwork.READINESS_LINKED, YNetwork.READINESS_LAN_OK and YNetwork.READINESS_WWW_OK corresponding to
     * the current established working mode of the network interface
     *
     * On failure, throws an exception or returns YNetwork.READINESS_INVALID.
     */
    get_readiness(): Promise<YNetwork.READINESS>;
    /**
     * Returns the MAC address of the network interface. The MAC address is also available on a sticker
     * on the module, in both numeric and barcode forms.
     *
     * @return a string corresponding to the MAC address of the network interface
     *
     * On failure, throws an exception or returns YNetwork.MACADDRESS_INVALID.
     */
    get_macAddress(): Promise<string>;
    /**
     * Returns the IP address currently in use by the device. The address may have been configured
     * statically, or provided by a DHCP server.
     *
     * @return a string corresponding to the IP address currently in use by the device
     *
     * On failure, throws an exception or returns YNetwork.IPADDRESS_INVALID.
     */
    get_ipAddress(): Promise<string>;
    /**
     * Returns the subnet mask currently used by the device.
     *
     * @return a string corresponding to the subnet mask currently used by the device
     *
     * On failure, throws an exception or returns YNetwork.SUBNETMASK_INVALID.
     */
    get_subnetMask(): Promise<string>;
    /**
     * Returns the IP address of the router on the device subnet (default gateway).
     *
     * @return a string corresponding to the IP address of the router on the device subnet (default gateway)
     *
     * On failure, throws an exception or returns YNetwork.ROUTER_INVALID.
     */
    get_router(): Promise<string>;
    /**
     * Returns the IP address of the DNS server currently used by the device.
     *
     * @return a string corresponding to the IP address of the DNS server currently used by the device
     *
     * On failure, throws an exception or returns YNetwork.CURRENTDNS_INVALID.
     */
    get_currentDNS(): Promise<string>;
    /**
     * Returns the IP configuration of the network interface.
     *
     * If the network interface is set up to use a static IP address, the string starts with "STATIC:" and
     * is followed by three
     * parameters, separated by "/". The first is the device IP address, followed by the subnet mask
     * length, and finally the
     * router IP address (default gateway). For instance: "STATIC:192.168.1.14/16/192.168.1.1"
     *
     * If the network interface is configured to receive its IP from a DHCP server, the string start with
     * "DHCP:" and is followed by
     * three parameters separated by "/". The first is the fallback IP address, then the fallback subnet
     * mask length and finally the
     * fallback router IP address. These three parameters are used when no DHCP reply is received.
     *
     * @return a string corresponding to the IP configuration of the network interface
     *
     * On failure, throws an exception or returns YNetwork.IPCONFIG_INVALID.
     */
    get_ipConfig(): Promise<string>;
    set_ipConfig(newval: string): Promise<number>;
    /**
     * Returns the IP address of the primary name server to be used by the module.
     *
     * @return a string corresponding to the IP address of the primary name server to be used by the module
     *
     * On failure, throws an exception or returns YNetwork.PRIMARYDNS_INVALID.
     */
    get_primaryDNS(): Promise<string>;
    /**
     * Changes the IP address of the primary name server to be used by the module.
     * When using DHCP, if a value is specified, it overrides the value received from the DHCP server.
     * Remember to call the saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @param newval : a string corresponding to the IP address of the primary name server to be used by the module
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_primaryDNS(newval: string): Promise<number>;
    /**
     * Returns the IP address of the secondary name server to be used by the module.
     *
     * @return a string corresponding to the IP address of the secondary name server to be used by the module
     *
     * On failure, throws an exception or returns YNetwork.SECONDARYDNS_INVALID.
     */
    get_secondaryDNS(): Promise<string>;
    /**
     * Changes the IP address of the secondary name server to be used by the module.
     * When using DHCP, if a value is specified, it overrides the value received from the DHCP server.
     * Remember to call the saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @param newval : a string corresponding to the IP address of the secondary name server to be used by the module
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_secondaryDNS(newval: string): Promise<number>;
    /**
     * Returns the IP address of the NTP server to be used by the device.
     *
     * @return a string corresponding to the IP address of the NTP server to be used by the device
     *
     * On failure, throws an exception or returns YNetwork.NTPSERVER_INVALID.
     */
    get_ntpServer(): Promise<string>;
    /**
     * Changes the IP address of the NTP server to be used by the module. Use an empty
     * string to restore the factory set  address.
     * Remember to call the saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @param newval : a string corresponding to the IP address of the NTP server to be used by the module
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_ntpServer(newval: string): Promise<number>;
    /**
     * Returns a hash string if a password has been set for "user" user,
     * or an empty string otherwise.
     *
     * @return a string corresponding to a hash string if a password has been set for "user" user,
     *         or an empty string otherwise
     *
     * On failure, throws an exception or returns YNetwork.USERPASSWORD_INVALID.
     */
    get_userPassword(): Promise<string>;
    /**
     * Changes the password for the "user" user. This password becomes instantly required
     * to perform any use of the module. If the specified value is an
     * empty string, a password is not required anymore.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : a string corresponding to the password for the "user" user
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_userPassword(newval: string): Promise<number>;
    /**
     * Returns a hash string if a password has been set for user "admin",
     * or an empty string otherwise.
     *
     * @return a string corresponding to a hash string if a password has been set for user "admin",
     *         or an empty string otherwise
     *
     * On failure, throws an exception or returns YNetwork.ADMINPASSWORD_INVALID.
     */
    get_adminPassword(): Promise<string>;
    /**
     * Changes the password for the "admin" user. This password becomes instantly required
     * to perform any change of the module state. If the specified value is an
     * empty string, a password is not required anymore.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : a string corresponding to the password for the "admin" user
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_adminPassword(newval: string): Promise<number>;
    /**
     * Returns the TCP port used to serve the hub web UI.
     *
     * @return an integer corresponding to the TCP port used to serve the hub web UI
     *
     * On failure, throws an exception or returns YNetwork.HTTPPORT_INVALID.
     */
    get_httpPort(): Promise<number>;
    /**
     * Changes the the TCP port used to serve the hub web UI. The default value is port 80,
     * which is the default for all Web servers. Regardless of the value set here,
     * the hub will always reply on port 4444, which is used by default by Yoctopuce
     * API library. When you change this parameter, remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * @param newval : an integer corresponding to the the TCP port used to serve the hub web UI
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_httpPort(newval: number): Promise<number>;
    /**
     * Returns the secure TCP port used to serve the hub web UI.
     *
     * @return an integer corresponding to the secure TCP port used to serve the hub web UI
     *
     * On failure, throws an exception or returns YNetwork.HTTPSPORT_INVALID.
     */
    get_httpsPort(): Promise<number>;
    /**
     * Changes the secure TCP port used to serve the hub web UI. The default value is port 4443,
     * which is the default for all Web servers. When you change this parameter, remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * @param newval : an integer corresponding to the secure TCP port used to serve the hub web UI
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_httpsPort(newval: number): Promise<number>;
    /**
     * Returns the security level chosen to prevent unauthorized access to the server.
     *
     * @return a value among YNetwork.SECURITYMODE_UNDEFINED, YNetwork.SECURITYMODE_LEGACY,
     * YNetwork.SECURITYMODE_MIXED and YNetwork.SECURITYMODE_SECURE corresponding to the security level
     * chosen to prevent unauthorized access to the server
     *
     * On failure, throws an exception or returns YNetwork.SECURITYMODE_INVALID.
     */
    get_securityMode(): Promise<YNetwork.SECURITYMODE>;
    /**
     * Changes the security level used to prevent unauthorized access to the server.
     * The value UNDEFINED causes the security configuration wizard to be
     * displayed the next time you log on to the Web console.
     * The value LEGACY offers unencrypted HTTP access by default, and
     * is designed to provide compatibility with legacy applications that do not
     * handle password or do not support HTTPS. But it should
     * only be used when system security is guaranteed by other means, such as the
     * use of a firewall.
     * The value MIXED requires the configuration of passwords, and allows
     * access via both HTTP (unencrypted) and HTTPS (encrypted), while requiring
     * the Yoctopuce API to be tolerant of certificate characteristics.
     * The value SECURE requires the configuration of passwords and the
     * use of secure communications in all cases.
     * When you change this parameter, remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * @param newval : a value among YNetwork.SECURITYMODE_UNDEFINED, YNetwork.SECURITYMODE_LEGACY,
     * YNetwork.SECURITYMODE_MIXED and YNetwork.SECURITYMODE_SECURE corresponding to the security level
     * used to prevent unauthorized access to the server
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_securityMode(newval: YNetwork.SECURITYMODE): Promise<number>;
    /**
     * Returns the HTML page to serve for the URL "/"" of the hub.
     *
     * @return a string corresponding to the HTML page to serve for the URL "/"" of the hub
     *
     * On failure, throws an exception or returns YNetwork.DEFAULTPAGE_INVALID.
     */
    get_defaultPage(): Promise<string>;
    /**
     * Changes the default HTML page returned by the hub. If not value are set the hub return
     * "index.html" which is the web interface of the hub. It is possible to change this page
     * for file that has been uploaded on the hub. The maximum filename size is 15 characters.
     * When you change this parameter, remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * @param newval : a string corresponding to the default HTML page returned by the hub
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_defaultPage(newval: string): Promise<number>;
    /**
     * Returns the activation state of the multicast announce protocols to allow easy
     * discovery of the module in the network neighborhood (uPnP/Bonjour protocol).
     *
     * @return either YNetwork.DISCOVERABLE_FALSE or YNetwork.DISCOVERABLE_TRUE, according to the
     * activation state of the multicast announce protocols to allow easy
     *         discovery of the module in the network neighborhood (uPnP/Bonjour protocol)
     *
     * On failure, throws an exception or returns YNetwork.DISCOVERABLE_INVALID.
     */
    get_discoverable(): Promise<YNetwork.DISCOVERABLE>;
    /**
     * Changes the activation state of the multicast announce protocols to allow easy
     * discovery of the module in the network neighborhood (uPnP/Bonjour protocol).
     * Remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * @param newval : either YNetwork.DISCOVERABLE_FALSE or YNetwork.DISCOVERABLE_TRUE, according to the
     * activation state of the multicast announce protocols to allow easy
     *         discovery of the module in the network neighborhood (uPnP/Bonjour protocol)
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_discoverable(newval: YNetwork.DISCOVERABLE): Promise<number>;
    /**
     * Returns the allowed downtime of the WWW link (in seconds) before triggering an automated
     * reboot to try to recover Internet connectivity. A zero value disables automated reboot
     * in case of Internet connectivity loss.
     *
     * @return an integer corresponding to the allowed downtime of the WWW link (in seconds) before
     * triggering an automated
     *         reboot to try to recover Internet connectivity
     *
     * On failure, throws an exception or returns YNetwork.WWWWATCHDOGDELAY_INVALID.
     */
    get_wwwWatchdogDelay(): Promise<number>;
    /**
     * Changes the allowed downtime of the WWW link (in seconds) before triggering an automated
     * reboot to try to recover Internet connectivity. A zero value disables automated reboot
     * in case of Internet connectivity loss. The smallest valid non-zero timeout is
     * 90 seconds. Remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * @param newval : an integer corresponding to the allowed downtime of the WWW link (in seconds)
     * before triggering an automated
     *         reboot to try to recover Internet connectivity
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_wwwWatchdogDelay(newval: number): Promise<number>;
    /**
     * Returns the callback URL to notify of significant state changes.
     *
     * @return a string corresponding to the callback URL to notify of significant state changes
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKURL_INVALID.
     */
    get_callbackUrl(): Promise<string>;
    /**
     * Changes the callback URL to notify significant state changes. Remember to call the
     * saveToFlash() method of the module if the modification must be kept.
     *
     * @param newval : a string corresponding to the callback URL to notify significant state changes
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackUrl(newval: string): Promise<number>;
    /**
     * Returns the HTTP method used to notify callbacks for significant state changes.
     *
     * @return a value among YNetwork.CALLBACKMETHOD_POST, YNetwork.CALLBACKMETHOD_GET and
     * YNetwork.CALLBACKMETHOD_PUT corresponding to the HTTP method used to notify callbacks for
     * significant state changes
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKMETHOD_INVALID.
     */
    get_callbackMethod(): Promise<YNetwork.CALLBACKMETHOD>;
    /**
     * Changes the HTTP method used to notify callbacks for significant state changes.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : a value among YNetwork.CALLBACKMETHOD_POST, YNetwork.CALLBACKMETHOD_GET and
     * YNetwork.CALLBACKMETHOD_PUT corresponding to the HTTP method used to notify callbacks for
     * significant state changes
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackMethod(newval: YNetwork.CALLBACKMETHOD): Promise<number>;
    /**
     * Returns the encoding standard to use for representing notification values.
     *
     * @return a value among YNetwork.CALLBACKENCODING_FORM, YNetwork.CALLBACKENCODING_JSON,
     * YNetwork.CALLBACKENCODING_JSON_ARRAY, YNetwork.CALLBACKENCODING_CSV,
     * YNetwork.CALLBACKENCODING_YOCTO_API, YNetwork.CALLBACKENCODING_JSON_NUM,
     * YNetwork.CALLBACKENCODING_EMONCMS, YNetwork.CALLBACKENCODING_AZURE,
     * YNetwork.CALLBACKENCODING_INFLUXDB, YNetwork.CALLBACKENCODING_MQTT,
     * YNetwork.CALLBACKENCODING_YOCTO_API_JZON, YNetwork.CALLBACKENCODING_PRTG and
     * YNetwork.CALLBACKENCODING_INFLUXDB_V2 corresponding to the encoding standard to use for
     * representing notification values
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKENCODING_INVALID.
     */
    get_callbackEncoding(): Promise<YNetwork.CALLBACKENCODING>;
    /**
     * Changes the encoding standard to use for representing notification values.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : a value among YNetwork.CALLBACKENCODING_FORM, YNetwork.CALLBACKENCODING_JSON,
     * YNetwork.CALLBACKENCODING_JSON_ARRAY, YNetwork.CALLBACKENCODING_CSV,
     * YNetwork.CALLBACKENCODING_YOCTO_API, YNetwork.CALLBACKENCODING_JSON_NUM,
     * YNetwork.CALLBACKENCODING_EMONCMS, YNetwork.CALLBACKENCODING_AZURE,
     * YNetwork.CALLBACKENCODING_INFLUXDB, YNetwork.CALLBACKENCODING_MQTT,
     * YNetwork.CALLBACKENCODING_YOCTO_API_JZON, YNetwork.CALLBACKENCODING_PRTG and
     * YNetwork.CALLBACKENCODING_INFLUXDB_V2 corresponding to the encoding standard to use for
     * representing notification values
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackEncoding(newval: YNetwork.CALLBACKENCODING): Promise<number>;
    /**
     * Returns the activation state of the custom template file to customize callback
     * format. If the custom callback template is disabled, it will be ignored even
     * if present on the YoctoHub.
     *
     * @return either YNetwork.CALLBACKTEMPLATE_OFF or YNetwork.CALLBACKTEMPLATE_ON, according to the
     * activation state of the custom template file to customize callback
     *         format
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKTEMPLATE_INVALID.
     */
    get_callbackTemplate(): Promise<YNetwork.CALLBACKTEMPLATE>;
    /**
     * Enable the use of a template file to customize callbacks format.
     * When the custom callback template file is enabled, the template file
     * will be loaded for each callback in order to build the data to post to the
     * server. If template file does not exist on the YoctoHub, the callback will
     * fail with an error message indicating the name of the expected template file.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : either YNetwork.CALLBACKTEMPLATE_OFF or YNetwork.CALLBACKTEMPLATE_ON
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackTemplate(newval: YNetwork.CALLBACKTEMPLATE): Promise<number>;
    /**
     * Returns a hashed version of the notification callback credentials if set,
     * or an empty string otherwise.
     *
     * @return a string corresponding to a hashed version of the notification callback credentials if set,
     *         or an empty string otherwise
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKCREDENTIALS_INVALID.
     */
    get_callbackCredentials(): Promise<string>;
    /**
     * Changes the credentials required to connect to the callback address. The credentials
     * must be provided as returned by function get_callbackCredentials,
     * in the form username:hash. The method used to compute the hash varies according
     * to the the authentication scheme implemented by the callback, For Basic authentication,
     * the hash is the MD5 of the string username:password. For Digest authentication,
     * the hash is the MD5 of the string username:realm:password. For a simpler
     * way to configure callback credentials, use function callbackLogin instead.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval : a string corresponding to the credentials required to connect to the callback address
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackCredentials(newval: string): Promise<number>;
    /**
     * Connects to the notification callback and saves the credentials required to
     * log into it. The password is not stored into the module, only a hashed
     * copy of the credentials are saved. Remember to call the
     * saveToFlash() method of the module if the modification must be kept.
     *
     * @param username : username required to log to the callback
     * @param password : password required to log to the callback
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    callbackLogin(username: string, password: string): Promise<number>;
    /**
     * Returns the initial waiting time before first callback notifications, in seconds.
     *
     * @return an integer corresponding to the initial waiting time before first callback notifications, in seconds
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKINITIALDELAY_INVALID.
     */
    get_callbackInitialDelay(): Promise<number>;
    /**
     * Changes the initial waiting time before first callback notifications, in seconds.
     * Remember to call the saveToFlash() method of the module if the modification must be kept.
     *
     * @param newval : an integer corresponding to the initial waiting time before first callback
     * notifications, in seconds
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackInitialDelay(newval: number): Promise<number>;
    /**
     * Returns the HTTP callback schedule strategy, as a text string.
     *
     * @return a string corresponding to the HTTP callback schedule strategy, as a text string
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKSCHEDULE_INVALID.
     */
    get_callbackSchedule(): Promise<string>;
    /**
     * Changes the HTTP callback schedule strategy, as a text string.
     * Remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * @param newval : a string corresponding to the HTTP callback schedule strategy, as a text string
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackSchedule(newval: string): Promise<number>;
    /**
     * Returns the minimum waiting time between two HTTP callbacks, in seconds.
     *
     * @return an integer corresponding to the minimum waiting time between two HTTP callbacks, in seconds
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKMINDELAY_INVALID.
     */
    get_callbackMinDelay(): Promise<number>;
    /**
     * Changes the minimum waiting time between two HTTP callbacks, in seconds.
     * Remember to call the saveToFlash() method of the module if the modification must be kept.
     *
     * @param newval : an integer corresponding to the minimum waiting time between two HTTP callbacks, in seconds
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackMinDelay(newval: number): Promise<number>;
    /**
     * Returns the waiting time between two HTTP callbacks when there is nothing new.
     *
     * @return an integer corresponding to the waiting time between two HTTP callbacks when there is nothing new
     *
     * On failure, throws an exception or returns YNetwork.CALLBACKMAXDELAY_INVALID.
     */
    get_callbackMaxDelay(): Promise<number>;
    /**
     * Changes the waiting time between two HTTP callbacks when there is nothing new.
     * Remember to call the saveToFlash() method of the module if the modification must be kept.
     *
     * @param newval : an integer corresponding to the waiting time between two HTTP callbacks when there
     * is nothing new
     *
     * @return YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_callbackMaxDelay(newval: number): Promise<number>;
    /**
     * Returns the current consumed by the module from Power-over-Ethernet (PoE), in milliamps.
     * The current consumption is measured after converting PoE source to 5 Volt, and should
     * never exceed 1800 mA.
     *
     * @return an integer corresponding to the current consumed by the module from Power-over-Ethernet
     * (PoE), in milliamps
     *
     * On failure, throws an exception or returns YNetwork.POECURRENT_INVALID.
     */
    get_poeCurrent(): Promise<number>;
    /**
     * Retrieves a network interface for a given identifier.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the network interface is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YNetwork.isOnline() to test if the network interface is
     * indeed online at a given time. In case of ambiguity when looking for
     * a network interface by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * If a call to this object's is_online() method returns FALSE although
     * you are certain that the matching device is plugged, make sure that you did
     * call registerHub() at application initialization time.
     *
     * @param func : a string that uniquely characterizes the network interface, for instance
     *         YHUBETH1.network.
     *
     * @return a YNetwork object allowing you to drive the network interface.
     */
    static FindNetwork(func: string): YNetwork;
    /**
     * Retrieves a network interface for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     *
     * - FunctionLogicalName
     * - ModuleSerialNumber.FunctionIdentifier
     * - ModuleSerialNumber.FunctionLogicalName
     * - ModuleLogicalName.FunctionIdentifier
     * - ModuleLogicalName.FunctionLogicalName
     *
     *
     * This function does not require that the network interface is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YNetwork.isOnline() to test if the network interface is
     * indeed online at a given time. In case of ambiguity when looking for
     * a network interface by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx : a YAPI context
     * @param func : a string that uniquely characterizes the network interface, for instance
     *         YHUBETH1.network.
     *
     * @return a YNetwork object allowing you to drive the network interface.
     */
    static FindNetworkInContext(yctx: YAPIContext, func: string): YNetwork;
    /**
     * Registers the callback function that is invoked on every change of advertised value.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered. For good responsiveness, remember to call
     * one of these two functions periodically. To unregister a callback, pass a null pointer as argument.
     *
     * @param callback : the callback function to call, or a null pointer. The callback function should take two
     *         arguments: the function object of which the value has changed, and the character string describing
     *         the new advertised value.
     * @noreturn
     */
    registerValueCallback(callback: YNetwork.ValueCallback | null): Promise<number>;
    _invokeValueCallback(value: string): Promise<number>;
    /**
     * Changes the configuration of the network interface to enable the use of an
     * IP address received from a DHCP server. Until an address is received from a DHCP
     * server, the module uses the IP parameters specified to this function.
     * Remember to call the saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @param fallbackIpAddr : fallback IP address, to be used when no DHCP reply is received
     * @param fallbackSubnetMaskLen : fallback subnet mask length when no DHCP reply is received, as an
     *         integer (e.g. 24 means 255.255.255.0)
     * @param fallbackRouter : fallback router IP address, to be used when no DHCP reply is received
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    useDHCP(fallbackIpAddr: string, fallbackSubnetMaskLen: number, fallbackRouter: string): Promise<number>;
    /**
     * Changes the configuration of the network interface to enable the use of an
     * IP address received from a DHCP server. Until an address is received from a DHCP
     * server, the module uses an IP of the network 169.254.0.0/16 (APIPA).
     * Remember to call the saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    useDHCPauto(): Promise<number>;
    /**
     * Changes the configuration of the network interface to use a static IP address.
     * Remember to call the saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @param ipAddress : device IP address
     * @param subnetMaskLen : subnet mask length, as an integer (e.g. 24 means 255.255.255.0)
     * @param router : router IP address (default gateway)
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    useStaticIP(ipAddress: string, subnetMaskLen: number, router: string): Promise<number>;
    /**
     * Pings host to test the network connectivity. Sends four ICMP ECHO_REQUEST requests from the
     * module to the target host. This method returns a string with the result of the
     * 4 ICMP ECHO_REQUEST requests.
     *
     * @param host : the hostname or the IP address of the target
     *
     * @return a string with the result of the ping.
     */
    ping(host: string): Promise<string>;
    /**
     * Trigger an HTTP callback quickly. This function can even be called within
     * an HTTP callback, in which case the next callback will be triggered 5 seconds
     * after the end of the current callback, regardless if the minimum time between
     * callbacks configured in the device.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    triggerCallback(): Promise<number>;
    /**
     * Set up periodic HTTP callbacks (simplified function).
     *
     * @param interval : a string representing the callback periodicity, expressed in
     *         seconds, minutes or hours, eg. "60s", "5m", "1h", "48h".
     * @param offset : an integer representing the time offset relative to the period
     *         when the callback should occur. For instance, if the periodicity is
     *         24h, an offset of 7 will make the callback occur each day at 7AM.
     *
     * @return YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    set_periodicCallbackSchedule(interval: string, offset: number): Promise<number>;
    /**
     * Continues the enumeration of network interfaces started using yFirstNetwork().
     * Caution: You can't make any assumption about the returned network interfaces order.
     * If you want to find a specific a network interface, use Network.findNetwork()
     * and a hardwareID or a logical name.
     *
     * @return a pointer to a YNetwork object, corresponding to
     *         a network interface currently online, or a null pointer
     *         if there are no more network interfaces to enumerate.
     */
    nextNetwork(): YNetwork | null;
    /**
     * Starts the enumeration of network interfaces currently accessible.
     * Use the method YNetwork.nextNetwork() to iterate on
     * next network interfaces.
     *
     * @return a pointer to a YNetwork object, corresponding to
     *         the first network interface currently online, or a null pointer
     *         if there are none.
     */
    static FirstNetwork(): YNetwork | null;
    /**
     * Starts the enumeration of network interfaces currently accessible.
     * Use the method YNetwork.nextNetwork() to iterate on
     * next network interfaces.
     *
     * @param yctx : a YAPI context.
     *
     * @return a pointer to a YNetwork object, corresponding to
     *         the first network interface currently online, or a null pointer
     *         if there are none.
     */
    static FirstNetworkInContext(yctx: YAPIContext): YNetwork | null;
}
export declare namespace YNetwork {
    const enum READINESS {
        DOWN = 0,
        EXISTS = 1,
        LINKED = 2,
        LAN_OK = 3,
        WWW_OK = 4,
        INVALID = -1
    }
    const enum SECURITYMODE {
        UNDEFINED = 0,
        LEGACY = 1,
        MIXED = 2,
        SECURE = 3,
        INVALID = -1
    }
    const enum DISCOVERABLE {
        FALSE = 0,
        TRUE = 1,
        INVALID = -1
    }
    const enum CALLBACKMETHOD {
        POST = 0,
        GET = 1,
        PUT = 2,
        INVALID = -1
    }
    const enum CALLBACKENCODING {
        FORM = 0,
        JSON = 1,
        JSON_ARRAY = 2,
        CSV = 3,
        YOCTO_API = 4,
        JSON_NUM = 5,
        EMONCMS = 6,
        AZURE = 7,
        INFLUXDB = 8,
        MQTT = 9,
        YOCTO_API_JZON = 10,
        PRTG = 11,
        INFLUXDB_V2 = 12,
        INVALID = -1
    }
    const enum CALLBACKTEMPLATE {
        OFF = 0,
        ON = 1,
        INVALID = -1
    }
    interface ValueCallback {
        (func: YNetwork, value: string): void;
    }
}


// from colorEditor_rw.d.ts


// from configForm_rw.d.ts


// from YDataRendererCommon.d.ts
export interface logFct {
    (msg: string): void;
}
export interface ResetCallBack {
    (source: Proportional): void;
}
export interface fontChangeResetCallBack {
    (source: YFont): void;
}
export interface ProportionnalValueChangeCallback {
    (source: Proportional): void;
}
export interface PatchAnnotationCallback {
    (text: string): string;
}
export interface ValueFormater {
    (source: YDataRenderer, value: number): string;
}
export declare class Vector3 {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    constructor(a: number, b: number, c: number);
    static FromXYCoord(x: number, y: number): Vector3;
    multiplyByM(m: Matrix3x3): Vector3;
    multiplyByN(n: number): Vector3;
    AddV(v: Vector3): Vector3;
    SubstractV(v: Vector3): Vector3;
    toPointF(): PointF;
    toPoint(): Point;
}
export declare class Matrix3x3 {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    readonly e: number;
    readonly f: number;
    readonly g: number;
    readonly h: number;
    readonly i: number;
    private static readonly Flag_NONE;
    private static readonly Flag_IDENTITY;
    private static readonly Flag_TRANSLATION;
    readonly isTranslation: boolean;
    readonly isIdentity: boolean;
    private constructor();
    clone(): Matrix3x3;
    get determinant(): number;
    get transpose(): Matrix3x3;
    multiplyByV(v: Vector3): Vector3;
    static newMatrix(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): Matrix3x3;
    static newTranslateMatrix(offsetX: number, offsetY: number): Matrix3x3;
    static newRotateMatrix(AngleDeg: number): Matrix3x3;
    static newScaleMatrix(Coef: number): Matrix3x3;
    static newIdentityMatrix(): Matrix3x3;
    toCSS(): string;
    toString(): string;
    multiplyByM(m: Matrix3x3): Matrix3x3;
    get inverse(): Matrix3x3;
    log(): void;
}
export declare class YEnum {
    static fromString(container: any, value: string): YEnumItem;
    static siblings(container: any): YEnumItem[];
}
export declare class YEnumItem {
    private _value;
    private _humanreadable;
    private _container;
    constructor(value: any, humanreadable: string, container: object);
    fromString(value: string): YEnumItem;
    get toString(): string;
    get description(): string;
    get sibblings(): YEnumItem[];
}
export declare class ViewPortSettings {
    IRLx: number;
    IRLy: number;
    zoomx: number;
    zoomy: number;
    Lmargin: number;
    Rmargin: number;
    Tmargin: number;
    Bmargin: number;
    Width: number;
    Height: number;
    Capture: boolean;
    IRLCaptureStartX: number;
    CaptureStartY: number;
    OriginalXAxisMin: number;
    OriginalXAxisMax: number;
    OriginalIRLx: number;
    OriginalLmargin: number;
    OriginalZoomx: number;
}
export declare class YFont {
    private _userData;
    get userData(): any;
    set userData(value: any);
    private _parentRenderer;
    private _fontChangeCallback;
    private _directParent;
    get directParent(): object;
    constructor(parentRenderer: YDataRenderer, directParent: object, size?: number, fontChangeCallback?: fontChangeResetCallBack | null);
    ResetFont(source: Proportional | null): void;
    private _name;
    get name(): string;
    set name(value: string);
    get hasChanged(): boolean;
    private _size;
    get size(): number;
    set size(value: number);
    private _italic;
    get italic(): boolean;
    set italic(value: boolean);
    private _bold;
    get bold(): boolean;
    set bold(value: boolean);
    private _color;
    get color(): YColor;
    set color(value: YColor);
    private _alternateColor;
    get alternateColor(): YColor | null;
    set alternateColor(value: YColor | null);
    private _font;
    get fontObject(): string;
    private _brush;
    get brush(): YBrush;
    get sizeInPoints(): number;
    get sizeForCanvas(): number;
    get htmlCode(): string;
}
export declare class YSizeF {
    private _w;
    private _h;
    private _lines;
    private _linesCount;
    private _lineHeight;
    private _firstlineHeight;
    constructor(font: YFont | null, st: string);
    get lines(): string[];
    get linesCount(): number;
    get firstLineHeight(): number;
    get lineHeight(): number;
    get height(): number;
    get width(): number;
    set width(value: number);
    set height(value: number);
}
export declare class YTextRenderingHint {
    _value: number;
    static readonly SystemDefault: YTextRenderingHint;
    static readonly SingleBitPerPixelGridFit: YTextRenderingHint;
    static readonly SingleBitPerPixel: YTextRenderingHint;
    static readonly AntiAliasGridFit: YTextRenderingHint;
    static readonly AntiAlias: YTextRenderingHint;
    static readonly ClearTypeGridFit: YTextRenderingHint;
    constructor(value: number);
}
export declare class YSmoothingMode {
    _value: number;
    static readonly Invalid: YSmoothingMode;
    static readonly Default: YSmoothingMode;
    static readonly HighSpeed: YSmoothingMode;
    static readonly HighQuality: YSmoothingMode;
    static readonly None: YSmoothingMode;
    static readonly AntiAlias: YSmoothingMode;
    constructor(value: number);
}
export declare class YStringFormat {
    private _Alignment;
    get Alignment(): YStringFormat.StringAlignment;
    set Alignment(value: YStringFormat.StringAlignment);
    private _LineAlignment;
    get LineAlignment(): YStringFormat.StringAlignment;
    set LineAlignment(value: YStringFormat.StringAlignment);
    private _formatFlags;
    get FormatFlags(): YStringFormat.StringFormatFlags;
    set FormatFlags(value: YStringFormat.StringFormatFlags);
    private _Trimming;
    get Trimming(): YStringFormat.StringTrimming;
    set Trimming(value: YStringFormat.StringTrimming);
    private _clip;
    constructor(clip: YStringFormat.StringFormatFlags);
}
export declare namespace YStringFormat {
    const enum StringAlignment {
        Near = 0,
        Center = 1,
        Far = 2
    }
    const enum StringFormatFlags {
        default = 0,
        DirectionRightToLeft = 1,
        DirectionVertical = 2,
        FitBlackBox = 4,
        DisplayFormatControl = 32,
        NoFontFallback = 1024,
        MeasureTrailingSpaces = 2048,
        NoWrap = 4096,
        LineLimit = 8192,
        NoClip = 16384
    }
    const enum StringTrimming {
        None = 0,
        Character = 1,
        Word = 2,
        EllipsisCharacter = 3,
        EllipsisWord = 4,
        EllipsisPath = 5
    }
}
export declare const enum YGraphicsUnit {
    World = 0,
    Display = 1,
    Pixel = 2,
    Point = 3,
    Inch = 4,
    Document = 5,
    Millimeter = 6
}
export declare class YColor {
    static readonly AliceBlue: YColor;
    static readonly AntiqueWhite: YColor;
    static readonly Aqua: YColor;
    static readonly Aquamarine: YColor;
    static readonly Azure: YColor;
    static readonly Beige: YColor;
    static readonly Bisque: YColor;
    static readonly Black: YColor;
    static readonly BlanchedAlmond: YColor;
    static readonly Blue: YColor;
    static readonly BlueViolet: YColor;
    static readonly Brown: YColor;
    static readonly BurlyWood: YColor;
    static readonly CadetBlue: YColor;
    static readonly Chartreuse: YColor;
    static readonly Chocolate: YColor;
    static readonly Coral: YColor;
    static readonly CornflowerBlue: YColor;
    static readonly Cornsilk: YColor;
    static readonly Crimson: YColor;
    static readonly Cyan: YColor;
    static readonly DarkBlue: YColor;
    static readonly DarkCyan: YColor;
    static readonly DarkGoldenrod: YColor;
    static readonly DarkGray: YColor;
    static readonly DarkGreen: YColor;
    static readonly DarkKhaki: YColor;
    static readonly DarkMagenta: YColor;
    static readonly DarkOliveGreen: YColor;
    static readonly DarkOrange: YColor;
    static readonly DarkOrchid: YColor;
    static readonly DarkRed: YColor;
    static readonly DarkSalmon: YColor;
    static readonly DarkSeaGreen: YColor;
    static readonly DarkSlateBlue: YColor;
    static readonly DarkSlateGray: YColor;
    static readonly DarkTurquoise: YColor;
    static readonly DarkViolet: YColor;
    static readonly DeepPink: YColor;
    static readonly DeepSkyBlue: YColor;
    static readonly DimGray: YColor;
    static readonly DodgerBlue: YColor;
    static readonly Firebrick: YColor;
    static readonly FloralWhite: YColor;
    static readonly ForestGreen: YColor;
    static readonly Fuchsia: YColor;
    static readonly Gainsboro: YColor;
    static readonly GhostWhite: YColor;
    static readonly Gold: YColor;
    static readonly Goldenrod: YColor;
    static readonly Gray: YColor;
    static readonly Green: YColor;
    static readonly GreenYellow: YColor;
    static readonly Honeydew: YColor;
    static readonly HotPink: YColor;
    static readonly IndianRed: YColor;
    static readonly Indigo: YColor;
    static readonly Ivory: YColor;
    static readonly Khaki: YColor;
    static readonly Lavender: YColor;
    static readonly LavenderBlush: YColor;
    static readonly LawnGreen: YColor;
    static readonly LemonChiffon: YColor;
    static readonly LightBlue: YColor;
    static readonly LightCoral: YColor;
    static readonly LightCyan: YColor;
    static readonly LightGoldenrodYellow: YColor;
    static readonly LightGray: YColor;
    static readonly LightGreen: YColor;
    static readonly LightPink: YColor;
    static readonly LightSalmon: YColor;
    static readonly LightSeaGreen: YColor;
    static readonly LightSkyBlue: YColor;
    static readonly LightSlateGray: YColor;
    static readonly LightSteelBlue: YColor;
    static readonly LightYellow: YColor;
    static readonly Lime: YColor;
    static readonly LimeGreen: YColor;
    static readonly Linen: YColor;
    static readonly Magenta: YColor;
    static readonly Maroon: YColor;
    static readonly MediumAquamarine: YColor;
    static readonly MediumBlue: YColor;
    static readonly MediumOrchid: YColor;
    static readonly MediumPurple: YColor;
    static readonly MediumSeaGreen: YColor;
    static readonly MediumSlateBlue: YColor;
    static readonly MediumSpringGreen: YColor;
    static readonly MediumTurquoise: YColor;
    static readonly MediumVioletRed: YColor;
    static readonly MidnightBlue: YColor;
    static readonly MintCream: YColor;
    static readonly MistyRose: YColor;
    static readonly Moccasin: YColor;
    static readonly NavajoWhite: YColor;
    static readonly Navy: YColor;
    static readonly OldLace: YColor;
    static readonly Olive: YColor;
    static readonly OliveDrab: YColor;
    static readonly Orange: YColor;
    static readonly OrangeRed: YColor;
    static readonly Orchid: YColor;
    static readonly PaleGoldenrod: YColor;
    static readonly PaleGreen: YColor;
    static readonly PaleTurquoise: YColor;
    static readonly PaleVioletRed: YColor;
    static readonly PapayaWhip: YColor;
    static readonly PeachPuff: YColor;
    static readonly Peru: YColor;
    static readonly Pink: YColor;
    static readonly Plum: YColor;
    static readonly PowderBlue: YColor;
    static readonly Purple: YColor;
    static readonly Red: YColor;
    static readonly RosyBrown: YColor;
    static readonly RoyalBlue: YColor;
    static readonly SaddleBrown: YColor;
    static readonly Salmon: YColor;
    static readonly SandyBrown: YColor;
    static readonly SeaGreen: YColor;
    static readonly SeaShell: YColor;
    static readonly Sienna: YColor;
    static readonly Silver: YColor;
    static readonly SkyBlue: YColor;
    static readonly SlateBlue: YColor;
    static readonly SlateGray: YColor;
    static readonly Snow: YColor;
    static readonly SpringGreen: YColor;
    static readonly SteelBlue: YColor;
    static readonly Tan: YColor;
    static readonly Teal: YColor;
    static readonly Thistle: YColor;
    static readonly Tomato: YColor;
    static readonly Transparent: YColor;
    static readonly Turquoise: YColor;
    static readonly Violet: YColor;
    static readonly Wheat: YColor;
    static readonly White: YColor;
    static readonly WhiteSmoke: YColor;
    static readonly Yellow: YColor;
    static readonly YellowGreen: YColor;
    private isHSLColor;
    private _isPredefined;
    private hslConvertionDone;
    private rgbConvertionDone;
    private transparency;
    private r;
    private g;
    private b;
    private h;
    private s;
    private l;
    private _name;
    get name(): string;
    private set predefname(value);
    private static _predefinedColors;
    static get predefinedColors(): {
        [name: string]: YColor;
    };
    static FromString(value: string): YColor | null;
    private static hex;
    toString(): string;
    get svgCode(): string;
    get alphaCode(): string;
    private static hsl2rgbInt;
    private hsl2rgb;
    private computeHSL;
    get hue(): number;
    get saturation(): number;
    get luminosity(): number;
    get red(): number;
    get green(): number;
    get blue(): number;
    get alpha(): number;
    static FromArgb(a: number, r: number, g: number, b: number): YColor;
    static FromAhsl(a: number, h: number, s: number, l: number): YColor;
    get isHSL(): boolean;
    get isRGB(): boolean;
    equal(c: YColor): boolean;
    clone(): YColor;
    get isPredefined(): boolean;
    constructor(isHsl: boolean, transparency: number, r_h: number, g_s: number, b_l: number, isPredefined?: boolean);
    private computeHTMLCode;
    private _htmlcode;
    get htmlCode(): string;
}
export declare abstract class YBrush {
    private _color;
    private _noAntiAlias;
    constructor(c: YColor, disableAntialias?: boolean);
    get noAntiAlias(): boolean;
    get color(): YColor;
}
export declare class YSolidBrush extends YBrush {
}
export declare class YLinearGradientBrush extends YBrush {
    private _color1;
    private _color2;
    constructor(c1: YColor, c2: YColor);
    get color1(): YColor;
    get color2(): YColor;
}
export declare class YPen {
    private _thickness;
    private _color;
    private _noAntiAlias;
    constructor(color: YColor, thickness: number, disableAntialias?: boolean);
    get noAntiAlias(): boolean;
    get lineWidth(): number;
    get strokeStyle(): string;
    get color(): YColor;
    private _startCap;
    set startCap(value: YPen.LineCap);
    private _endCap;
    set endCap(value: YPen.LineCap);
    private _linejoin;
    set linejoin(value: YPen.LineJoin);
}
export declare namespace YPen {
    const enum LineCap {
        Flat = 0,
        Square = 1,
        Round = 2,
        Triangle = 3,
        NoAnchor = 16,
        SquareAnchor = 17,
        RoundAnchor = 18,
        DiamondAnchor = 19,
        ArrowAnchor = 20,
        AnchorMask = 240,
        Custom = 255
    }
    enum LineJoin {
        Miter = 0,
        Bevel = 1,
        Round = 2,
        MiterClipped = 3
    }
}
export declare class YRectangle {
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x: number, y: number, w: number, h: number);
}
export interface RendererDblClickCallBack {
    (event: object): void;
}
export interface RendererRightClickCallBack {
    (event: object): void;
}
export declare class Point {
    X: number;
    Y: number;
    constructor(valueX: number, valueY: number);
}
export declare class minMaxPoint {
    X1: number;
    YMIN: number;
    X2: number;
    YMAX: number;
    constructor(valueX1: number, valueYMIN: number, valueX2: number, valueYMAX: number);
}
export declare class PointF {
    X: number;
    Y: number;
    constructor(valueX: number, valueY: number);
}
export declare class captureParametersSet {
    captureType: YDataRenderer.CaptureTypeEnumItem;
    captureFolder: string;
    captureWidth: number;
    captureHeight: number;
    captureDPI: number;
}
export interface getCaptureParamaters {
    (source: YDataRenderer, p: captureParametersSet): void;
}
export declare abstract class GenericPanel {
    private _userData;
    get userData(): object;
    set userData(value: object);
    protected _parentRenderer: YDataRenderer;
    private _directParent;
    get directParent(): object;
    protected constructor(parent: YDataRenderer, directParent: object);
    protected _enabled: boolean;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _panelTextAlign;
    get panelTextAlign(): GenericPanel.TextAlignEnumItem;
    set panelTextAlign(value: GenericPanel.TextAlignEnumItem);
    private _text;
    get text(): string;
    set text(value: string);
    private _bgColor;
    get bgColor(): YColor;
    set bgColor(value: YColor);
    private _borderColor;
    get borderColor(): YColor;
    set borderColor(value: YColor);
    private _borderthickness;
    get borderthickness(): number;
    set borderthickness(value: number);
    private _padding;
    get padding(): number;
    set padding(value: number);
    private _verticalMargin;
    get verticalMargin(): number;
    set verticalMargin(value: number);
    private _horizontalMargin;
    get horizontalMargin(): number;
    set horizontalMargin(value: number);
    private _bgBrush;
    get bgBrush(): YBrush;
    private _pen;
    get pen(): YPen;
    private _font;
    get font(): YFont;
}
export declare namespace GenericPanel {
    class HorizontalAlignPosEnumItem extends YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class HorizontalAlignPos extends YEnum {
        static readonly LEFT: HorizontalAlignPosEnumItem;
        static readonly CENTER: HorizontalAlignPosEnumItem;
        static readonly RIGHT: HorizontalAlignPosEnumItem;
    }
    class VerticalAlignPosEnumItem extends YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class VerticalAlignPos extends YEnum {
        static readonly TOP: VerticalAlignPosEnumItem;
        static readonly CENTER: VerticalAlignPosEnumItem;
        static readonly BOTTOM: VerticalAlignPosEnumItem;
    }
    class TextAlignEnumItem extends YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class TextAlign extends YEnum {
        static readonly LEFT: TextAlignEnumItem;
        static readonly CENTER: TextAlignEnumItem;
        static readonly RIGHT: TextAlignEnumItem;
    }
}
export declare class MessagePanel extends GenericPanel {
    constructor(parent: YDataRenderer, directParent: object);
    private _panelHrzAlign;
    get panelHrzAlign(): GenericPanel.HorizontalAlignPosEnumItem;
    set panelHrzAlign(value: GenericPanel.HorizontalAlignPosEnumItem);
    private _panelVrtAlign;
    get panelVrtAlign(): GenericPanel.VerticalAlignPosEnumItem;
    set panelVrtAlign(value: GenericPanel.VerticalAlignPosEnumItem);
}
export declare class AnnotationPanel extends GenericPanel {
    constructor(parent: YDataRenderer, directParent: object);
    private _overlap;
    get overlap(): boolean;
    set overlap(value: boolean);
    private _positionOffsetX;
    get positionOffsetX(): number;
    set positionOffsetX(value: number);
    private _positionOffsetY;
    get positionOffsetY(): number;
    set positionOffsetY(value: number);
    private _panelHrzAlign;
    get panelHrzAlign(): GenericPanel.HorizontalAlignPos;
    set panelHrzAlign(value: GenericPanel.HorizontalAlignPos);
    private _panelVrtAlign;
    get panelVrtAlign(): GenericPanel.VerticalAlignPos;
    set panelVrtAlign(value: GenericPanel.VerticalAlignPos);
}
export declare class Zone {
    protected _parentRenderer: YDataRenderer;
    private _directParent;
    get directParent(): object;
    private _userData;
    get userData(): object;
    set userData(value: object);
    protected resetCache(): void;
    constructor(parentRenderer: YDataRenderer, directParent: object);
    private _zoneBrush;
    get zoneBrush(): YBrush;
    private _color;
    get color(): YColor;
    set color(value: YColor);
    private _visible;
    get visible(): boolean;
    set visible(value: boolean);
    set_minMax(min: number, max: number): void;
    private _min;
    get min(): number;
    set min(value: number);
    private _max;
    get max(): number;
    set max(value: number);
}
export declare class Proportional {
    private _reset;
    private _parentRenderer;
    private _directParent;
    private _refWidth;
    private _refHeight;
    private _refValue;
    private _value;
    private valueStack;
    private _resizeRule;
    private _userData;
    get userData(): any;
    set userData(value: any);
    get directParent(): object;
    get value(): number;
    set value(v: number);
    get resizeRule(): Proportional.ResizeRuleEnumItem;
    set resizeRule(value: Proportional.ResizeRuleEnumItem);
    private set_refPoint;
    constructor(value: number, resizeRule: Proportional.ResizeRuleEnumItem, parentRenderer: YDataRenderer, directParent: Object, resetCallBack: ResetCallBack);
    containerResizedPushNewCoef(coef: number): void;
    containerResizedPop(): void;
    static resizeCoef(rule: Proportional.ResizeRuleEnumItem, refWidth: number, refHeight: number, newWidth: number, newHeight: number): number;
    containerResized(newWidth: number, newHeight: number): void;
    forceChangeCallback(): void;
}
export declare namespace Proportional {
    class ResizeRuleEnumItem extends YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class ResizeRule extends YEnum {
        static readonly FIXED: ResizeRuleEnumItem;
        static readonly RELATIVETOWIDTH: ResizeRuleEnumItem;
        static readonly RELATIVETOHEIGHT: ResizeRuleEnumItem;
        static readonly RELATIVETOBOTH: ResizeRuleEnumItem;
    }
}
export declare abstract class YDataRenderer {
    protected _redrawAllowed: number;
    private _refWidth;
    private _refHeight;
    private rendererTimingTotal;
    private rendererTimingCount;
    static RendererDebug: boolean;
    static readonly FloatToStrformats: string[];
    protected _PatchAnnotationCallback: PatchAnnotationCallback | null;
    protected _logFunction: logFct | null;
    protected _annotationPanels: AnnotationPanel[];
    get annotationPanels(): AnnotationPanel[];
    private _userData;
    get userData(): any;
    private documentVisibiltyChangeFct;
    private containerResizedFct;
    private static _disableMinMaxCheck;
    static get minMaxCheckDisabled(): boolean;
    static set minMaxCheckDisabled(value: boolean);
    resetlegendPens(): void;
    private _getCaptureParameters;
    get getCaptureParameters(): getCaptureParamaters | null;
    set getCaptureParameters(value: getCaptureParamaters | null);
    OnDblClick: RendererDblClickCallBack | null;
    OnRightClick: RendererRightClickCallBack | null;
    protected _messagePanels: MessagePanel[];
    get messagePanels(): MessagePanel[];
    private static globalMouseMoveSet;
    private static globalMouseX;
    private static globalMouseY;
    private static globalMouseMove;
    private _Scr2ElmMatrix;
    private _Elm2ScrMatrix;
    clearTransformationMatrix(): void;
    private findElementAbsolutePosition;
    get Elm2ScrMatrix(): Matrix3x3;
    get Scr2ElmMatrix(): Matrix3x3;
    addAnnotationPanel(): AnnotationPanel;
    AllowRedraw(): void;
    AllowRedrawNoRefresh(): void;
    DisableRedraw(): void;
    private ProportionalToSizeValues;
    AddNewProportionalToSizeValue(v: Proportional): void;
    protected canRedraw(): boolean;
    protected UIContainer: HTMLCanvasElement;
    protected parentForm: HTMLDocument;
    setPatchAnnotationCallback(callback: PatchAnnotationCallback): void;
    patchAnnotation(text: string): string;
    protected mouseLocalPosition(): Point | null;
    private _proportionnalValueChangeCallback;
    set proportionnalValueChangeCallback(value: ProportionnalValueChangeCallback);
    ProportionnalValueChanged(source: Proportional): void;
    getContainerInnerWidth(): number;
    getContainerInnerHeight(): number;
    Draw(timestamp: number): number;
    protected renderingPostProcessing(): void;
    protected abstract Render(g: YGraphics, w: number, h: number): number;
    abstract clearCachedObjects(): void;
    private _resizeRule;
    get resizeRule(): Proportional.ResizeRuleEnumItem;
    set resizeRule(value: Proportional.ResizeRuleEnumItem);
    private requestAnimationFrameID;
    redraw(): void;
    usableUiWidth(): number;
    usableUiHeight(): number;
    resetProportionalSizeObjectsCachePush(newcoef: number): void;
    resetProportionalSizeObjectsCachePop(): void;
    protected resetProportionalSizeObjectsCache(w: number, h: number): void;
    containerResized(): void;
    private containerResize;
    proportionnalsizeReset(): void;
    captureAndDownloadImage(captureType: YDataRenderer.CaptureTypeEnumItem, defaultFilename?: string, // or null
    captureWidth?: number, // or null
    captureHeight?: number, // or null
    captureDPI?: number): void;
    private getFocus;
    gainFocus(): void;
    private lostFocus;
    private _snapshotPanel;
    private _snapshotTimer;
    private _AllowPrintScreenCapture;
    get AllowPrintScreenCapture(): boolean;
    set AllowPrintScreenCapture(value: boolean);
    protected constructor(UIContainer: HTMLCanvasElement, logFunction: logFct);
    destroy(): void;
    resetRefrenceSize(): void;
    get refWidth(): number;
    get refHeight(): number;
    private RendererCanvas_Click;
    private RendererCanvas_DoubleClick;
    addMessagePanel(): MessagePanel;
    DrawMessagePanels(g: YGraphics, viewPortWidth: number, viewPortHeight: number): void;
    drawAnnotationPanels(g: YGraphics, annotationPanels: AnnotationPanel[], viewPortWidth: number, viewPortHeight: number, overlap: boolean, mainViewPort: ViewPortSettings): void;
    log(s: string): void;
}
export declare namespace YDataRenderer {
    class CaptureTypeEnumItem extends YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class CaptureType extends YEnum {
        static readonly PNG: CaptureTypeEnumItem;
        static readonly SVG: CaptureTypeEnumItem;
    }
    class CaptureTargetEnumItem extends YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class CaptureTarget extends YEnum {
        static readonly ToClipBoard: CaptureTargetEnumItem;
        static readonly ToFile: CaptureTargetEnumItem;
    }
    class CaptureFormatsEnumItem extends YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class CaptureFormats extends YEnum {
        static readonly Keep: CaptureFormatsEnumItem;
        static readonly Fixed: CaptureFormatsEnumItem;
        static readonly FixedWidth: CaptureFormatsEnumItem;
        static readonly FixedHeight: CaptureFormatsEnumItem;
    }
}
export declare class YGraphics {
    protected _c: HTMLCanvasElement | null;
    protected _g: CanvasRenderingContext2D | null;
    protected _width: number;
    protected _height: number;
    protected _dpi: number;
    protected _image: HTMLCanvasElement | null;
    private _lastPen;
    private _lastBrush;
    private _lastFont;
    private _clipCounter;
    private _textRenderingHint;
    private _smoothingMode;
    constructor(canvas: HTMLCanvasElement, width: number, height: number, dpi: number);
    get_downloadableData(): string;
    get graphics(): CanvasRenderingContext2D;
    private setPen;
    private setBrush;
    private setFont;
    DrawLineXY(p: YPen, x1: number, y1: number, x2: number, y2: number): void;
    DrawLine(p: YPen, p1: PointF, p2: PointF): void;
    SetClip(rect: YRectangle): void;
    ResetClip(): void;
    MeasureString(text: string, font: YFont, width: number): YSizeF;
    MeasureStringSF(text: string, font: YFont, width: number, stringFormat: YStringFormat): YSizeF;
    FillRectangle(brush: YBrush, rect: YRectangle): void;
    FillRectangleXYHW(brush: YBrush, x: number, y: number, width: number, height: number): void;
    DrawRectangle(p: YPen, rect: YRectangle): void;
    DrawRectangleXYHW(p: YPen, x: number, y: number, width: number, height: number): void;
    DrawStringXY(s: string, font: YFont, brush: YBrush, x: number, y: number): void;
    DrawStringXYF(s: string, font: YFont, brush: YBrush, x: number, y: number, format: YStringFormat): void;
    DrawStringPF(s: string, font: YFont, brush: YBrush, p: PointF, format: YStringFormat): void;
    protected static readonly _debugDrawString = false;
    DrawString(s: string, font: YFont, brush: YBrush, p: PointF): void;
    DrawStringRect(s: string, font: YFont, brush: YBrush, layoutRectangle: YRectangle, format: YStringFormat): void;
    Transform(dx: number, dy: number, angle: number): void;
    ResetTransform(): void;
    FillEllipse(brush: YBrush, x: number, y: number, width: number, height: number): void;
    DrawEllipse(pen: YPen, x: number, y: number, width: number, height: number): void;
    FillPolygon(brush: YBrush, points: PointF[]): void;
    DrawPolygon(pen: YPen, points: PointF[]): void;
    DrawLines(pen: YPen, points: PointF[]): void;
    Dispose(): void;
    get TextRenderingHint(): YTextRenderingHint | null;
    set TextRenderingHint(value: YTextRenderingHint | null);
    get SmoothingMode(): YSmoothingMode;
    set SmoothingMode(value: YSmoothingMode);
    DrawImage(srcimage: HTMLCanvasElement, destRect: YRectangle, srcRect: YRectangle, srcUnit: YGraphicsUnit): void;
    comment(s: string): void;
}
export declare class YGraphicsSVG extends YGraphics {
    private _SVGdefs;
    private _SVGcontents;
    private _clipcount;
    private _clipSectionsToClose;
    private _transformSectionsToClose;
    private _gradientCount;
    static SVGID: number;
    constructor(canvas: HTMLCanvasElement, width: number, height: number, dpi: number);
    static escapeXml(unsafe: string): string;
    get_downloadableData(): string;
    DrawLineXY(p: YPen, x1: number, y1: number, x2: number, y2: number): void;
    DrawLine(p: YPen, p1: PointF, p2: PointF): void;
    SetClip(rect: YRectangle): void;
    ResetClip(): void;
    private BrushToSVG;
    FillRectangle(brush: YBrush, rect: YRectangle): void;
    FillRectangleXYHW(brush: YBrush, x: number, y: number, width: number, height: number): void;
    DrawRectangle(p: YPen, rect: YRectangle): void;
    DrawRectangleXYHW(p: YPen, x: number, y: number, width: number, height: number): void;
    DrawEllipse(pen: YPen, x: number, y: number, width: number, height: number): void;
    FillEllipse(brush: YBrush, x: number, y: number, width: number, height: number): void;
    DrawStringXY(s: string, font: YFont, brush: YBrush, x: number, y: number): void;
    DrawString(s: string, font: YFont, brush: YBrush, p: PointF): void;
    DrawStringF(s: string, font: YFont, brush: YBrush, point: PointF, format: YStringFormat): void;
    DrawStringRect(s: string, font: YFont, brush: YBrush, layoutRectangle: YRectangle, format: YStringFormat): void;
    Transform(dx: number, dy: number, angle: number): void;
    ResetTransform(): void;
    DrawPolygon(pen: YPen, points: PointF[]): void;
    DrawLines(pen: YPen, points: PointF[]): void;
    FillPolygon(brush: YBrush, points: PointF[]): void;
    DrawImage(image: HTMLCanvasElement, destRect: YRectangle, srcRect: YRectangle, srcUnit: YGraphicsUnit): void;
    save(filename: string): void;
    comment(s: string): void;
    get_svgContents(): string;
}


// from YAngularGauge.d.ts
import * as YDataRendering from "./YDataRendererCommon.js";
export declare class YAngularZone extends YDataRendering.Zone {
    private _path;
    get path(): YDataRendering.PointF[] | null;
    setPathSize(count: number): void;
    setPathPoint(index: number, p: YDataRendering.PointF): void;
    resetPath(): void;
    protected resetCache(): void;
    private _width;
    get width(): number;
    set width(value: number);
    private _outerRadius;
    get outerRadius(): number;
    set outerRadius(value: number);
    constructor(parentRenderer: YDataRendering.YDataRenderer, directParent: object);
}
export declare class YAngularGauge extends YDataRendering.YDataRenderer {
    protected _min: number;
    get min(): number;
    set min(value: number);
    protected _max: number;
    get max(): number;
    set max(value: number);
    private readonly SegmentMaxLength;
    private _borderpen;
    get borderpen(): YDataRendering.YPen;
    private _borderColor;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _bgBrush;
    private _backgroundColor1;
    get backgroundColor1(): YDataRendering.YColor;
    set backgroundColor1(value: YDataRendering.YColor);
    private _backgroundColor2;
    get backgroundColor2(): YDataRendering.YColor;
    set backgroundColor2(value: YDataRendering.YColor);
    private _borderThickness;
    private get borderThickness();
    private set borderThickness(value);
    private _valueFormater;
    get valueFormater(): YDataRendering.ValueFormater | null;
    set valueFormater(value: YDataRendering.ValueFormater | null);
    private _minmaxFormater;
    get minmaxFormater(): YDataRendering.ValueFormater | null;
    set minmaxFormater(value: YDataRendering.ValueFormater | null);
    private _thickness;
    get thickness(): number;
    set thickness(value: number);
    private _value;
    get value(): number;
    set value(value: number);
    private _needleValue;
    private _color1;
    get color1(): YDataRendering.YColor;
    set color1(value: YDataRendering.YColor);
    private _color2;
    get color2(): YDataRendering.YColor;
    set color2(value: YDataRendering.YColor);
    private _graduationPen;
    private _graduationColor;
    get graduationColor(): YDataRendering.YColor;
    set graduationColor(value: YDataRendering.YColor);
    private _graduationThickness;
    get graduationThickness(): number;
    set graduationThickness(value: number);
    private _graduationSize;
    get graduationSize(): number;
    set graduationSize(value: number);
    private _graduation;
    get graduation(): number;
    set graduation(value: number);
    private _unitFactor;
    get unitFactor(): number;
    set unitFactor(value: number);
    private _unit;
    get unit(): string;
    set unit(value: string);
    private _unitFont;
    get unitFont(): YDataRendering.YFont;
    private _subgraduationPen;
    private _subgraduationColor;
    get subgraduationColor(): YDataRendering.YColor;
    set subgraduationColor(value: YDataRendering.YColor);
    private _subgraduationThickness;
    get subgraduationThickness(): number;
    set subgraduationThickness(value: number);
    private _subgraduationSize;
    get subgraduationSize(): number;
    set subgraduationSize(value: number);
    private _graduationOuterRadiusSize;
    get graduationOuterRadiusSize(): number;
    set graduationOuterRadiusSize(value: number);
    private _subgraduationCount;
    get subgraduationCount(): number;
    set subgraduationCount(value: number);
    private _statusColor;
    get statusColor(): YDataRendering.YColor;
    set statusColor(value: YDataRendering.YColor);
    private _statusFont;
    get statusFont(): YDataRendering.YFont;
    private _statusLine;
    get statusLine(): string;
    set statusLine(value: string);
    private _showNeedle;
    get showNeedle(): boolean;
    set showNeedle(value: boolean);
    private _needleBrush;
    private _needleColor;
    get needleColor(): YDataRendering.YColor;
    set needleColor(value: YDataRendering.YColor);
    private _needleMaxSpeed;
    get needleMaxSpeed(): number;
    set needleMaxSpeed(value: number);
    private _needleLength1;
    get needleLength1(): number;
    set needleLength1(value: number);
    private _needleLength2;
    get needleLength2(): number;
    set needleLength2(value: number);
    private _needleWidth;
    get needleWidth(): number;
    set needleWidth(value: number);
    private _needleContourPen;
    private _needleContourColor;
    get needleContourColor(): YDataRendering.YColor;
    set needleContourColor(value: YDataRendering.YColor);
    private _needleContourThickness;
    get needleContourThickness(): number;
    set needleContourThickness(value: number);
    _graduationFont: YDataRendering.YFont;
    get graduationFont(): YDataRendering.YFont;
    private _showMinMax;
    get showMinMax(): boolean;
    set showMinMax(value: boolean);
    private _path;
    constructor(UIContainer: HTMLCanvasElement, logFunction: YDataRendering.logFct);
    clearCachedObjects(): void;
    private _zones;
    get zones(): YAngularZone[];
    AddZone(): YAngularZone;
    protected Render(g: YDataRendering.YGraphics, w: number, h: number): number;
    protected renderingPostProcessing(): void;
}


// from YDigitalDisplay.d.ts
import * as YDataRendering from "./YDataRendererCommon.js";
export declare class YDigitalDisplay extends YDataRendering.YDataRenderer {
    private _bgBrush;
    private _backgroundColor1;
    get backgroundColor1(): YDataRendering.YColor;
    set backgroundColor1(value: YDataRendering.YColor);
    private _backgroundColor2;
    get backgroundColor2(): YDataRendering.YColor;
    set backgroundColor2(value: YDataRendering.YColor);
    private _alternateValue;
    get alternateValue(): string | null;
    set alternateValue(value: string | null);
    private _valueFormater;
    get valueFormater(): YDataRendering.ValueFormater | null;
    set valueFormater(value: YDataRendering.ValueFormater | null);
    private _hrzAlignmentOfset;
    get hrzAlignmentOfset(): number;
    set hrzAlignmentOfset(value: number);
    private _hrzAlignment;
    get hrzAlignment(): YDigitalDisplay.HrzAlignmentEnumItem;
    set hrzAlignment(value: YDigitalDisplay.HrzAlignmentEnumItem);
    private _outOfRangeMin;
    get outOfRangeMin(): number;
    set outOfRangeMin(value: number);
    private _outOfRangeMax;
    get outOfRangeMax(): number;
    set outOfRangeMax(value: number);
    private _outOfRangeColor;
    get outOfRangeColor(): YDataRendering.YColor;
    set outOfRangeColor(value: YDataRendering.YColor);
    private _value;
    get value(): number;
    set value(value: number);
    private _font;
    get font(): YDataRendering.YFont;
    constructor(UIContainer: HTMLCanvasElement, logFunction: YDataRendering.logFct);
    clearCachedObjects(): void;
    protected Render(g: YDataRendering.YGraphics, w: number, h: number): number;
}
export declare namespace YDigitalDisplay {
    class HrzAlignmentEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class HrzAlignment extends YDataRendering.YEnum {
        static readonly LEFT: HrzAlignmentEnumItem;
        static readonly CENTER: HrzAlignmentEnumItem;
        static readonly DECIMAL: HrzAlignmentEnumItem;
        static readonly RIGHT: HrzAlignmentEnumItem;
    }
}


// from YGraph.d.ts
import * as YDataRendering from "./YDataRendererCommon.js";
export declare class pointXY {
    x: number;
    y: number;
    constructor(X?: number, Y?: number);
    clone(): pointXY;
}
export declare class pointsSummary {
    x1: number;
    x2: number;
    ymin: number;
    ymax: number;
    constructor(X1: number, X2: number, YMIN: number, YMAX: number);
    clone(): pointsSummary;
}
export interface PatchMarkerTextCallback {
    (text: string): string;
}
export declare class TimeConverterParseResult {
    success: boolean;
    result: number;
}
declare class TimeResolution {
    step: number;
    format: number;
}
export declare class YDate extends Date {
    static readonly D: number;
    static readonly DD: number;
    static readonly M: number;
    static readonly YY: number;
    static readonly h: number;
    static readonly m: number;
    static readonly s: number;
    static readonly ms1: number;
    static readonly ms01: number;
    static readonly ms001: number;
    static readonly CR: number;
    static readonly isRelative: number;
    static readonly YYYY: number;
    private static d;
    static readonly use24Hformat: boolean;
    private static readonly months;
    ToString(format: number): string;
}
export declare class TimeConverter {
    static UTCNow(): YDate;
    static ToUnixTime(datetime: Date): number;
    static FromUnixTime(unixtime: number): YDate;
    static tryParseStringToAbsDateTime(str: string): TimeConverterParseResult;
    static tryParseStringToSecTimeSpan(st: string): TimeConverterParseResult;
    static secTimeSpanToString(timespan: number, resolution: number): string;
    static RelativeFormat(dataDeltaTime: number, viewportDeltaTime: number, resolution: number): number;
    static BestTimeformat(dataDeltaTime: number, viewportDeltaTime: number, tref: TimeConverter.TimeReference): TimeResolution;
}
export declare namespace TimeConverter {
    class TimeReferenceEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class TimeReference extends YDataRendering.YEnum {
        static readonly ABSOLUTE: TimeReferenceEnumItem;
        static readonly RELATIVE: TimeReferenceEnumItem;
    }
}
export declare class MinMax {
    Min: number;
    Max: number;
    constructor(minimum: number, maximum: number);
}
export declare class MinMaxHandler {
    static extend(M: MinMax, factor: number): MinMax;
    static DefaultValue(value1?: number, value2?: number): MinMax;
    static isDefined(v: MinMax): boolean;
    static Combine(M1: MinMax, M2: MinMax): MinMax;
    static CombineWithNumber(M1: MinMax, value: number): MinMax;
}
export declare class DataSegment {
    static readonly SegmentGranularity: number;
    data: (pointXY | null)[];
    count: number;
    static ArrayCopy(sourceArray: Array<pointXY | null>, sourceIndex: number, destinationArray: Array<pointXY | null>, destinationIndex: number, length: number): void;
    constructor(p: any);
    grow(): void;
}
export declare class Summary {
    private static readonly DBG;
    segments: DataSummarySegment[];
    totalpoints: number;
    private Xmin;
    private Xmax;
    private Ymin;
    private Ymax;
    private vtlPtCount;
    private pointSize;
    private isLast;
    private selfIndex;
    private selfArray;
    private newSummaryLevelTrigger;
    getBufferpoint(): pointsSummary | null;
    Dump(): void;
    constructor(index: number, array: Summary[], pointSize: number);
    processSegments(segments: DataSegment[]): void;
    addNewLevel(): void;
    addNewSinglePointSegment(xmin: number, xmax: number, ymin: number, ymax: number, _count: number): void;
    addNewEmptySegment(): void;
    addSequentialPoint(p: pointXY, maxHoleSize: number): void;
    flush(forceNewSegment: boolean): void;
}
export declare class DataSummarySegment {
    static readonly SegmentGranularity: number;
    data: (pointsSummary | null)[];
    ptCount: number;
    static ArrayCopy(sourceArray: Array<pointsSummary | null>, sourceIndex: number, destinationArray: Array<pointsSummary | null>, destinationIndex: number, length: number): void;
    constructor(p: any, virtualPointCount: any);
    grow(): void;
}
export declare class DataSerie {
    protected parent: YGraph;
    private totalPointCount;
    private _userData;
    get userData(): any;
    set userData(value: any);
    static _MaxPointsPerSeries: number;
    static get MaxPointsPerSeries(): number;
    static set MaxPointsPerSeries(value: number);
    private _timeRange;
    get timeRange(): MinMax;
    private _valueRange;
    get valueRange(): MinMax;
    constructor(parent: YGraph);
    private _yAxisIndex;
    get yAxisIndex(): number;
    set yAxisIndex(value: number);
    private _pen;
    get pen(): YDataRendering.YPen;
    private _legendPen;
    get legendPen(): YDataRendering.YPen;
    resetlegendPen(): void;
    private _brush;
    get brush(): YDataRendering.YBrush;
    private _navigatorpen;
    get navigatorpen(): YDataRendering.YPen;
    private _visible;
    get visible(): boolean;
    set visible(value: boolean);
    private _disabled;
    get disabled(): boolean;
    set disabled(value: boolean);
    private _color;
    get color(): YDataRendering.YColor;
    set color(value: YDataRendering.YColor);
    private _thickness;
    get thickness(): number;
    set thickness(value: number);
    private _legend;
    get legend(): string;
    set legend(value: string);
    private _unit;
    get unit(): string;
    set unit(value: string);
    segments: DataSegment[];
    summaries: Summary[] | null;
    private AddNewSegment;
    getlastPoint(): pointXY;
    private handleSummary;
    AddPoint(p: pointXY): void;
    rebuildSummaries(): void;
    dumpSummaries(): void;
    dataCleanUp(): void;
    InsertPoints(points: pointXY[]): void;
    private static CompareSegments;
    getData(): pointXY[];
    findClosestValue(x: number, AllowInterpolation: boolean): pointXY | null;
    clear(): void;
}
export declare class DataTracker {
    private _parentRenderer;
    private _directParent;
    get directParent(): object;
    private _userData;
    get userData(): any;
    set userData(value: any);
    constructor(parent: YDataRendering.YDataRenderer, directParent: object);
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _showSerieName;
    get showSerieName(): boolean;
    set showSerieName(value: boolean);
    private _showTimeStamp;
    get showTimeStamp(): boolean;
    set showTimeStamp(value: boolean);
    private _dataPrecisionString;
    get dataPrecisionString(): string;
    private _dataPrecision;
    get dataPrecision(): DataTracker.DataPrecisionEnumItem;
    set dataPrecision(value: DataTracker.DataPrecisionEnumItem);
    private compute_dataPrecisionString;
    private _diameter;
    get diameter(): number;
    set diameter(value: number);
    private _handleLength;
    get handleLength(): number;
    set handleLength(value: number);
    private _detectionDistance;
    get detectionDistance(): number;
    set detectionDistance(value: number);
    private _bgColor;
    get bgColor(): YDataRendering.YColor;
    set bgColor(value: YDataRendering.YColor);
    private _borderColor;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderthickness;
    get borderthickness(): number;
    set borderthickness(value: number);
    private _padding;
    get padding(): number;
    set padding(value: number);
    private _verticalMargin;
    get verticalMargin(): number;
    set verticalMargin(value: number);
    private _horizontalMargin;
    get horizontalMargin(): number;
    set horizontalMargin(value: number);
    private _bgBrush;
    get bgBrush(): YDataRendering.YBrush;
    private _pen;
    get pen(): YDataRendering.YPen;
    private _font;
    get font(): YDataRendering.YFont | null;
}
export declare namespace DataTracker {
    class DataPrecisionEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class DataPrecision extends YDataRendering.YEnum {
        static readonly PRECISION_NOLIMIT: DataPrecisionEnumItem;
        static readonly PRECISION_1: DataPrecisionEnumItem;
        static readonly PRECISION_01: DataPrecisionEnumItem;
        static readonly PRECISION_001: DataPrecisionEnumItem;
        static readonly PRECISION_0001: DataPrecisionEnumItem;
        static readonly PRECISION_00001: DataPrecisionEnumItem;
        static readonly PRECISION_000001: DataPrecisionEnumItem;
        static readonly PRECISION_0000001: DataPrecisionEnumItem;
        static readonly PRECISION_00000001: DataPrecisionEnumItem;
        static readonly PRECISION_000000001: DataPrecisionEnumItem;
        static readonly PRECISION_0000000001: DataPrecisionEnumItem;
    }
}
export declare class LegendPanel {
    private _parentRenderer;
    private _directParent;
    get directParent(): object;
    private _userData;
    get userData(): any;
    set userData(value: any);
    protected _traceWidth: number;
    get traceWidthFactor(): number;
    set traceWidthFactor(value: number);
    constructor(parent: YDataRendering.YDataRenderer, directParent: object);
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _position;
    get position(): LegendPanel.PositionEnumItem;
    set position(value: LegendPanel.PositionEnumItem);
    private _overlap;
    get overlap(): boolean;
    set overlap(value: boolean);
    private _bgColor;
    get bgColor(): YDataRendering.YColor;
    set bgColor(value: YDataRendering.YColor);
    private _borderColor;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderthickness;
    get borderthickness(): number;
    set borderthickness(value: number);
    private _padding;
    get padding(): number;
    set padding(value: number);
    private _verticalMargin;
    get verticalMargin(): number;
    set verticalMargin(value: number);
    private _horizontalMargin;
    get horizontalMargin(): number;
    set horizontalMargin(value: number);
    private _bgBrush;
    get bgBrush(): YDataRendering.YBrush;
    private _pen;
    get pen(): YDataRendering.YPen;
    private _font;
    get font(): YDataRendering.YFont | null;
}
export declare namespace LegendPanel {
    class PositionEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class Position extends YDataRendering.YEnum {
        static readonly LEFT: PositionEnumItem;
        static readonly TOPLEFT: PositionEnumItem;
        static readonly TOP: PositionEnumItem;
        static readonly TOPRIGHT: PositionEnumItem;
        static readonly RIGHT: PositionEnumItem;
        static readonly BOTTOMRIGHT: PositionEnumItem;
        static readonly BOTTOM: PositionEnumItem;
        static readonly BOTTOMLEFT: PositionEnumItem;
    }
}
export declare class Navigator {
    private _parentRenderer;
    private _directParent;
    get directParent(): object;
    private _userData;
    get userData(): any;
    set userData(value: any);
    private _viewport;
    Xrange: MinMax | null;
    private _showXAxisZones;
    get showXAxisZones(): boolean;
    set showXAxisZones(value: boolean);
    private _relativeheight;
    get relativeheight(): number;
    set relativeheight(value: number);
    constructor(parent: YGraph, directParent: object);
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _bgColor1;
    get bgColor1(): YDataRendering.YColor;
    set bgColor1(value: YDataRendering.YColor);
    private _cursorBorderColor;
    get cursorBorderColor(): YDataRendering.YColor;
    set cursorBorderColor(value: YDataRendering.YColor);
    private _yAxisHandling;
    get yAxisHandling(): Navigator.YAxisHandlingEnumItem;
    set yAxisHandling(value: Navigator.YAxisHandlingEnumItem);
    private _bgColor2;
    get bgColor2(): YDataRendering.YColor;
    set bgColor2(value: YDataRendering.YColor);
    private _cursorColor;
    get cursorColor(): YDataRendering.YColor;
    set cursorColor(value: YDataRendering.YColor);
    private _cursorBrush;
    get cursorBrush(): YDataRendering.YBrush;
    private _pen;
    get pen(): YDataRendering.YPen;
    private _cursorBorderPen;
    get cursorBorderPen(): YDataRendering.YPen;
    private _xAxisColor;
    get xAxisColor(): YDataRendering.YColor;
    set xAxisColor(value: YDataRendering.YColor);
    private _xAxisThickness;
    get xAxisThickness(): number;
    set xAxisThickness(value: number);
    private _borderPen;
    get borderPen(): YDataRendering.YPen;
    private _borderColor;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderThickness;
    get borderThickness(): number;
    set borderThickness(value: number);
    private _bgBrush;
    setPosition(ParentWidth: number, ParentHeight: number, Lmargin: number, Rmargin: number, Tmargin: number, Bmargin: number): void;
    setIRLPosition(IRLx: number, IRLy: number, xZoom: number, yZoom: number): void;
    startCapture(IRLStartPoint: pointXY, xAxisMin: number, xAxisMax: number): void;
    get Capture(): boolean;
    stopCapture(): void;
    get viewport(): YDataRendering.ViewPortSettings;
    get bgBrush(): YDataRendering.YLinearGradientBrush;
    private _font;
    get font(): YDataRendering.YFont | null;
}
export declare namespace Navigator {
    class YAxisHandlingEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class YAxisHandling extends YDataRendering.YEnum {
        static readonly AUTO: YAxisHandlingEnumItem;
        static readonly INHERIT: YAxisHandlingEnumItem;
    }
}
export declare class Marker {
    private _userData;
    get userData(): any;
    set userData(value: any);
    private static _round100;
    private _stringFormat;
    get stringFormat(): YDataRendering.YStringFormat;
    _MarkerTextCallback: PatchMarkerTextCallback | null;
    get PatchTextCallback(): PatchMarkerTextCallback | null;
    set PatchTextCallback(callback: PatchMarkerTextCallback | null);
    protected _parentRenderer: YDataRendering.YDataRenderer;
    private _directParent;
    get directParent(): object;
    constructor(parent: YDataRendering.YDataRenderer, directParent: object);
    startCapture(): void;
    setCapturedPosition(position: number, axis: XAxis): void;
    protected _enabled: boolean;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _xposition;
    get xposition(): number;
    set xposition(value: number);
    protected _xpositionIsRelative: boolean;
    get timereference(): TimeConverter.TimeReference;
    set timereference(value: TimeConverter.TimeReference);
    get positionOnXAxis(): xAxisPosition;
    set positionOnXAxis(value: xAxisPosition);
    private _yposition;
    get yposition(): number;
    set yposition(value: number);
    private _text;
    get text(): string;
    set text(value: string);
    private _textAlign;
    get textAlign(): Marker.TextAlignEnumItem;
    set textAlign(value: Marker.TextAlignEnumItem);
    get shortText(): string;
    private _bgColor;
    get bgColor(): YDataRendering.YColor;
    set bgColor(value: YDataRendering.YColor);
    private _borderColor;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderthickness;
    get borderthickness(): number;
    set borderthickness(value: number);
    private _arrowSize;
    get arrowSize(): number;
    set arrowSize(value: number);
    private _padding;
    get padding(): number;
    set padding(value: number);
    private _verticalMargin;
    get verticalMargin(): number;
    set verticalMargin(value: number);
    private _horizontalMargin;
    get horizontalMargin(): number;
    set horizontalMargin(value: number);
    private _bgBrush;
    get bgBrush(): YDataRendering.YBrush;
    private _arrowBrush;
    get arrowBrush(): YDataRendering.YBrush;
    private _pen;
    get pen(): YDataRendering.YPen;
    private _navigatorpen;
    get navigatorpen(): YDataRendering.YPen;
    private _font;
    get font(): YDataRendering.YFont | null;
}
export declare namespace Marker {
    class TextAlignEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class TextAlign extends YDataRendering.YEnum {
        static readonly LEFT: TextAlignEnumItem;
        static readonly CENTER: TextAlignEnumItem;
        static readonly RIGHT: TextAlignEnumItem;
    }
}
export declare class Legend {
    protected _parentRenderer: YGraph;
    private _directParent;
    get directParent(): object;
    private _userData;
    get userData(): any;
    set userData(value: any);
    constructor(parent: YGraph, directParent: object);
    private _title;
    get title(): string;
    set title(value: string);
    private _font;
    get font(): YDataRendering.YFont | null;
}
export interface axisChangedCallBack {
    (source: GenericAxis): void;
}
export declare abstract class GenericAxis {
    protected _parentRenderer: YGraph;
    private _directParent;
    get directParent(): object;
    protected _zones: YDataRendering.Zone[];
    get zones(): YDataRendering.Zone[];
    AddZone(): YDataRendering.Zone;
    private _userData;
    get userData(): any;
    set userData(value: any);
    protected _AxisChanged: axisChangedCallBack | null;
    get AxisChanged(): axisChangedCallBack | null;
    set AxisChanged(value: axisChangedCallBack | null);
    protected constructor(parent: YGraph, directParent: object);
    protected _pen: YDataRendering.YPen | null;
    get pen(): YDataRendering.YPen;
    protected _gridPen: YDataRendering.YPen | null;
    get gridPen(): YDataRendering.YPen;
    protected _visible: boolean;
    get visible(): boolean;
    set visible(value: boolean);
    protected _AllowAutoShow: boolean;
    get AllowAutoShow(): boolean;
    set AllowAutoShow(value: boolean);
    AutoShow(): void;
    set_minMax(value_min: number, value_max: number): void;
    protected _min: number;
    get min(): number;
    set min(value: number);
    setMinMax(min: number, max: number): void;
    protected _max: number;
    get max(): number;
    set max(value: number);
    protected _step: number;
    get step(): number;
    set step(value: number);
    protected _thickness: number;
    get thickness(): number;
    set thickness(value: number);
    protected _color: YDataRendering.YColor;
    get color(): YDataRendering.YColor;
    set color(value: YDataRendering.YColor);
    protected _showGrid: boolean;
    get showGrid(): boolean;
    set showGrid(value: boolean);
    protected _gridColor: YDataRendering.YColor;
    get gridColor(): YDataRendering.YColor;
    set gridColor(value: YDataRendering.YColor);
    protected _gridThickness: number;
    get gridThickness(): number;
    set gridThickness(value: number);
    private _font;
    get font(): YDataRendering.YFont | null;
    private _legend;
    get legend(): Legend;
}
export declare class StartStopStep {
    dataMin: number;
    dataMax: number;
    absMin: number;
    absMax: number;
    step: number;
    start: number;
    stop: number;
    precision: number;
}
export declare class xAxisPosition {
    static DTdisplayformat: string;
    static TSdisplayformat: string;
    private _isRelative;
    get relative(): boolean;
    set relative(value: boolean);
    private _value;
    get value(): number;
    set value(value: number);
    constructor(v: number, rel: boolean, capture?: boolean);
    clone(): xAxisPosition;
    toString(): string;
    TryParse(str: string): TimeConverterParseResult;
    private _capture;
    get capture(): boolean;
    set capture(value: boolean);
}
export declare class YAxis extends GenericAxis {
    private nfi;
    startStopStep: StartStopStep;
    constructor(parent: YGraph, directParent: object, index: number);
    private _index;
    get index(): number;
    lockMinMax(): void;
    unlockMinMax(): void;
    private _highlightZero;
    get highlightZero(): boolean;
    set highlightZero(value: boolean);
    private _position;
    get position(): YAxis.HrzPositionEnumItem;
    set position(value: YAxis.HrzPositionEnumItem);
    innerWidth: number;
    zoom: number;
    IRLy: number;
    computeStartAndStep(M: MinMax): StartStopStep;
}
export declare namespace YAxis {
    class HrzPositionEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class HrzPosition extends YDataRendering.YEnum {
        static readonly LEFT: HrzPositionEnumItem;
        static readonly RIGHT: HrzPositionEnumItem;
    }
}
export declare class XAxis extends GenericAxis {
    static readonly FORMATAUTO: number;
    private _parentGraph;
    private _position;
    get position(): XAxis.VrtPositionEnumItem;
    set position(value: XAxis.VrtPositionEnumItem);
    private _markers;
    get markers(): Marker[];
    AddMarker(): Marker;
    private _initialZoom;
    get initialZoom(): number;
    set initialZoom(value: number);
    private _initialOffset;
    get initialOffset(): number;
    set initialOffset(value: number);
    private _format;
    get labelFormat(): number;
    set labelFormat(value: number);
    constructor(parent: YGraph, directParent: object);
    protected _timeReference: TimeConverter.TimeReferenceEnumItem;
    get timeReference(): TimeConverter.TimeReferenceEnumItem;
    set timeReference(value: TimeConverter.TimeReferenceEnumItem);
    protected _zeroTime: number;
    get zeroTime(): number;
    set zeroTime(value: number);
    protected _fullSize: number;
    get fullSize(): number;
    set fullSize(value: number);
    bestFormat(dataTimedelta: number, viewportTimedelta: number): TimeResolution;
    innerHeight: number;
    private _overflowHandling;
    get overflowHandling(): XAxis.OverflowHandlingEnumItem;
    set overflowHandling(value: XAxis.OverflowHandlingEnumItem);
}
export declare namespace XAxis {
    class VrtPositionEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class VrtPosition extends YDataRendering.YEnum {
        static readonly TOP: VrtPositionEnumItem;
        static readonly BOTTOM: VrtPositionEnumItem;
    }
    class OverflowHandlingEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class OverflowHandling extends YDataRendering.YEnum {
        static readonly DONOTHING: OverflowHandlingEnumItem;
        static readonly SCROLL: OverflowHandlingEnumItem;
        static readonly CONTRACT: OverflowHandlingEnumItem;
    }
}
export declare class DataPanel extends YDataRendering.GenericPanel {
    constructor(parent: YDataRendering.YDataRenderer, directParent: object);
    private _panelHrzAlign;
    get panelHrzAlign(): DataPanel.HorizontalAlign;
    set panelHrzAlign(value: DataPanel.HorizontalAlign);
    private _panelVrtAlign;
    get panelVrtAlign(): DataPanel.VerticalAlignEnumItem;
    set panelVrtAlign(value: DataPanel.VerticalAlignEnumItem);
    private _horizontalPosition;
    get horizontalPosition(): DataPanel.HorizontalPositionEnumItem;
    set horizontalPosition(value: DataPanel.HorizontalPositionEnumItem);
    private _verticalPosition;
    get verticalPosition(): DataPanel.VerticalPositionEnumItem;
    set verticalPosition(value: DataPanel.VerticalPositionEnumItem);
    private _AbsoluteXposition;
    get AbsoluteXposition(): number;
    set AbsoluteXposition(value: number);
    private _AbsoluteYposition;
    get AbsoluteYposition(): number;
    set AbsoluteYposition(value: number);
    private _YScaleIndex;
    get yScaleIndex(): number;
    set yScaleIndex(value: number);
}
export declare namespace DataPanel {
    class HorizontalAlignEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class HorizontalAlign extends YDataRendering.YEnum {
        static readonly LEFTOF: HorizontalAlignEnumItem;
        static readonly CENTERED: HorizontalAlignEnumItem;
        static readonly RIGHTOF: HorizontalAlignEnumItem;
    }
    class VerticalAlignEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class VerticalAlign extends YDataRendering.YEnum {
        static readonly ABOVE: VerticalAlignEnumItem;
        static readonly CENTERED: VerticalAlignEnumItem;
        static readonly BELOW: VerticalAlignEnumItem;
    }
    class HorizontalPositionEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class HorizontalPosition extends YDataRendering.YEnum {
        static readonly LEFTBORDER: HorizontalPositionEnumItem;
        static readonly ABSOLUTEX: HorizontalPositionEnumItem;
        static readonly RIGHTBORDER: HorizontalPositionEnumItem;
    }
    class VerticalPositionEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class VerticalPosition extends YDataRendering.YEnum {
        static readonly TOPBORDER: VerticalPositionEnumItem;
        static readonly ABSOLUTEY: VerticalPositionEnumItem;
        static readonly BOTTOMBORDER: VerticalPositionEnumItem;
    }
}
declare class YCursor {
    constructor(pngImageData: string);
    get handle(): string;
}
export interface MarkerCaptureStartedCallback {
    (source: Marker): void;
}
export interface MarkerCaptureStoppedCallback {
    (source: Marker | null): void;
}
export declare class YGraph extends YDataRendering.YDataRenderer {
    private _xAxis;
    private _yAxes;
    private _series;
    private _markerCaptureStartedCallback;
    private _markerCaptureStoppedCallback;
    private static _defaultVerticalDragZoomEnabled;
    private lastPointCount;
    private lastTopMargin;
    private lastBottomMargin;
    private navigatorCache;
    private markerCapture;
    static captureCursor: YCursor | null;
    private _legendPanel;
    get legendPanel(): LegendPanel;
    private _dataTracker;
    get dataTracker(): DataTracker;
    private _borderPen;
    private _borderColor;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderThickness;
    get borderThickness(): number;
    set borderThickness(value: number);
    private _touchStartfct;
    private _touchMovefct;
    private _touchEndfct;
    private _mouseDownfct;
    private _mouseMovefct;
    private _mouseWheelfct;
    private _mouseKeyDownfct;
    static get verticalDragZoomEnabled(): boolean;
    static set verticalDragZoomEnabled(value: boolean);
    private static createCaptureCursor;
    private mainViewPort;
    protected _dataPanels: DataPanel[];
    get dataPanels(): DataPanel[];
    addDataPanel(): DataPanel;
    setMarkerCaptureCallbacks(start: MarkerCaptureStartedCallback, stop: MarkerCaptureStoppedCallback): void;
    startMarkerCapture(m: Marker): void;
    constructor(ChartContainer: HTMLCanvasElement, logFunction: YDataRendering.logFct);
    destroy(): void;
    getMostRecentPoint(): pointXY;
    private _timeRange;
    adjustGlobalTimeRange(x: number): void;
    private _bgBrush;
    _navigator: Navigator;
    private _bgColor1;
    get bgColor1(): YDataRendering.YColor;
    set bgColor1(value: YDataRendering.YColor);
    private _bgColor2;
    get bgColor2(): YDataRendering.YColor;
    set bgColor2(value: YDataRendering.YColor);
    get xAxis(): XAxis;
    get navigator(): Navigator | null;
    get yAxes(): YAxis[];
    get series(): DataSerie[];
    addYAxis(): YAxis;
    addSerie(): DataSerie;
    clearCachedObjects(): void;
    private _touchStartPinchDistance;
    private _touchStartPinchCenter;
    private _touchStartPinchZoom;
    private _touchStartPinchIRLx;
    private _touchStartPinchRange;
    private TouchStart;
    private MouseDown;
    private HandleMouseDown;
    private TouchMove;
    private TouchEnd;
    private dataTrackerRefreshtimeout;
    private MouseMove;
    private HandleEndOfMouseCapture;
    private HandleMouseMove;
    cross(p: pointXY): void;
    private static IRLPointToViewPort;
    private static IRLPointSummaryToViewPort;
    private static ViewPortPointToIRL;
    private static FindMinMax;
    resetlegendPens(): void;
    drawLegendPanel(g: YDataRendering.YGraphics, viewPortWidth: number, viewPortHeight: number, mainViewPort: YDataRendering.ViewPortSettings): void;
    private static DoSegmentRendering;
    private static DoSummarySegmentRendering;
    private DrawYAxisZones;
    private DrawXAxisZones;
    private static DrawYAxis;
    private DrawMonitorXAxis;
    private static XLabel;
    private DrawXAxis;
    pixelxSize(mainViewPort: YDataRendering.ViewPortSettings, scaleX: XAxis): number;
    TimeToAutoSting(t: number, mainViewPort: YDataRendering.ViewPortSettings, scaleX: XAxis): string;
    private DrawDataTracker;
    DrawMarkers(w: YDataRendering.ViewPortSettings, g: YDataRendering.YGraphics, scaleX: XAxis, viewPortWidth: number, viewPortHeight: number): void;
    DrawDataPanels(w: YDataRendering.ViewPortSettings, g: YDataRendering.YGraphics, scaleX: XAxis, scalesY: YAxis[], viewPortWidth: number, viewPortHeight: number): void;
    private findSegmentIndex;
    private findTimestampIndexInSegment;
    protected Render(g: YDataRendering.YGraphics, UIw: number, UIh: number): number;
    private KeyDown;
    mouseWheel(pos: YDataRendering.Point, delta: number): void;
    mouseWheelEvent(sender: HTMLCanvasElement, e: WheelEvent): void;
}
export {};


// from YSolidGauge.d.ts
import * as YDataRendering from "./YDataRendererCommon.js";
export declare class YSolidGauge extends YDataRendering.YDataRenderer {
    private _shownValue;
    protected _min: number;
    get min(): number;
    set min(value: number);
    protected _max: number;
    get max(): number;
    set max(value: number);
    private readonly SegmentMaxLength;
    private mainViewPort;
    private _borderpen;
    get borderpen(): YDataRendering.YPen;
    private _borderColor;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _bgBrush;
    private _backgroundColor1;
    get backgroundColor1(): YDataRendering.YColor;
    set backgroundColor1(value: YDataRendering.YColor);
    private _backgroundColor2;
    get backgroundColor2(): YDataRendering.YColor;
    set backgroundColor2(value: YDataRendering.YColor);
    private _borderThickness;
    get borderThickness(): number;
    set borderThickness(value: number);
    private _valueFormater;
    get valueFormater(): YDataRendering.ValueFormater | null;
    set valueFormater(value: YDataRendering.ValueFormater | null);
    private _minmaxFormater;
    get minmaxFormater(): YDataRendering.ValueFormater | null;
    set minmaxFormater(value: YDataRendering.ValueFormater | null);
    private _thickness;
    get thickness(): number;
    set thickness(value: number);
    private _maxSpeed;
    get maxSpeed(): number;
    set maxSpeed(value: number);
    private _value;
    get value(): number;
    set value(value: number);
    private _color1;
    get color1(): YDataRendering.YColor;
    set color1(value: YDataRendering.YColor);
    private _color2;
    get color2(): YDataRendering.YColor;
    set color2(value: YDataRendering.YColor);
    private _font;
    get font(): YDataRendering.YFont | null;
    private _minMaxFont;
    get minMaxFont(): YDataRendering.YFont | null;
    private _showMinMax;
    get showMinMax(): boolean;
    set showMinMax(value: boolean);
    private _path;
    private lastDrawParameters;
    private _displayMode;
    get displayMode(): YSolidGauge.DisplayModeEnumItem;
    set displayMode(value: YSolidGauge.DisplayModeEnumItem);
    FontsizeChange(source: YDataRendering.YFont): void;
    constructor(UIContainer: HTMLCanvasElement, mode: YSolidGauge.DisplayModeEnumItem, logFunction: YDataRendering.logFct);
    clearCachedObjects(): void;
    private ComputeDrawParameters;
    protected Render(g: YDataRendering.YGraphics, w: number, h: number): number;
    protected renderingPostProcessing(): void;
}
export declare namespace YSolidGauge {
    class DisplayModeEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class DisplayMode extends YDataRendering.YEnum {
        static readonly DISPLAY90: DisplayModeEnumItem;
        static readonly DISPLAY180: DisplayModeEnumItem;
        static readonly DISPLAY270: DisplayModeEnumItem;
        static readonly DISPLAY360: DisplayModeEnumItem;
    }
}


// from YDataRendererFull.d.ts


// from YoctoApiFull.d.ts


// from sensorManager.d.ts
import * as YoctoVisualization from "./YoctoVisualizationFull.js";
import * as YoctoAPI from "./YoctoApiFull.js";
export declare const enum HubType {
    LOCALUSB = 0,
    LOCALHUB = 1,
    REMOTEHUB = 2
}
export declare const enum HubState {
    NOTCONNECTED = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    FAILURE = 3
}
export declare class Hub {
    static loginCypherPassword: string;
    static Decrypt(data: string, loginCypherPassword: string): string;
    static Encrypt(data: string, loginCypherPassword: string): string;
    static encryptPassword(clearPassword: string): string;
    private _netname;
    private _module;
    private _logicname;
    private _previousURL;
    private _previousobfuscatedURL;
    private _apiHub;
    set_apiHub(hub: YoctoAPI.YHub): void;
    private _hubType;
    get hubType(): HubType;
    set hubType(value: HubType);
    private _protocol;
    get protocol(): string;
    set protocol(value: string);
    private _user;
    get user(): string;
    set user(value: string);
    private _password;
    get encryptedPassword(): string;
    set encryptedPassword(value: string);
    get clearPassword(): string;
    set clearPassword(value: string);
    private _addr;
    get addr(): string;
    set addr(value: string);
    private _port;
    get port(): string;
    set port(value: string);
    private _removable;
    get removable(): boolean;
    set removable(value: boolean);
    private _path;
    get path(): string;
    set path(value: string);
    get_serialNumber(): string;
    private _state;
    ConnectionState(): HubState;
    ConnectionDescription(): Promise<string>;
    constructor(hubType: HubType, protocol: string, user: string, password: string, clearPassword: boolean, addr: string, port: string, path: string, removeable?: boolean);
    static HubFromXml(subnode: YoctoVisualization.YXmlNode): YoctoVisualization.Hub;
    Connect(): Promise<void>;
    Disconnect(): Promise<void>;
    arrival(ip: string, netname: string, module: YoctoAPI.YModule, logicname: string): void;
    get address(): string;
    get_consoleUrl(): string;
    toString(): string;
    get_fullUrl(): string;
    get_fullUrlNoCredentials(): string;
    get_connexionUrl(): string;
    get_obfuscatedURL(): string;
    matches(apihub: YoctoAPI.YHub): Promise<boolean>;
}
export declare class TimedSensorValue {
    private _DateTime;
    private _value;
    constructor(DateTime: number, value: number);
    get DateTime(): number;
    get value(): number;
}
export declare class AlarmSettings {
    private index;
    private Condition;
    private Source;
    private Value;
    private Delay;
    private Commandline;
    private parent;
    private lastAlarm;
    static ExecuteCommand(source: string, command: string): void;
    constructor(index: number, owner: CustomYSensor, xmldata?: YoctoVisualization.YXmlNode);
    setCondition(condition: number): void;
    getCondition(): number;
    setSource(source: number): void;
    getSource(): number;
    setValue(value: number): void;
    getValue(): number;
    setDelay(value: number): void;
    getDelay(): number;
    setCommandline(value: string): void;
    getCommandline(): string;
    check(m: YoctoAPI.YMeasure): void;
}
declare class DataLoggerBoundary {
    private _start;
    private _stop;
    constructor(start: number, stop: number);
    get start(): number;
    get stop(): number;
}
declare class MergeSourceRange {
    MergeSourceStart: number;
    MergeSourceStop: number;
    constructor(start: number, stop: number);
}
export declare class CustomYSensor {
    private sensor;
    protected hwdName: string;
    protected _friendlyname: string;
    private unit;
    private _frequency;
    private resolution;
    private _recording;
    private FormsToNotify;
    private _online;
    private preloadDone;
    private loadDone;
    private cfgChgNotificationsSupported;
    private mustReloadConfig;
    private _readonly;
    get isReadOnly(): boolean;
    private _plzCancelDataloggerLoading;
    private _predloadProcessIsBusy;
    private _loadProcessIsBusy;
    private lastGetConfig;
    private recordedDataLoadProgress;
    private recordedData;
    protected dataLoggerFeature: boolean;
    private dataLoggerLoadCompleted;
    private loadFailed;
    private loadCanceled;
    private firstLiveDataTimeStamp;
    private firstDataloggerTimeStamp;
    private lastDataTimeStamp;
    private lastDataSource;
    private consecutiveBadTimeStamp;
    minData: TimedSensorValue[];
    curData: TimedSensorValue[];
    maxData: TimedSensorValue[];
    previewMinData: TimedSensorValue[];
    previewCurData: TimedSensorValue[];
    previewMaxData: TimedSensorValue[];
    private _lastAvgValue;
    private _lastMinValue;
    private _lastMaxValue;
    private _dataloggerLoadisRunning;
    private _dataloggerLoadProgress;
    get dataloggerLoadisRunning(): boolean;
    get dataloggerLoadProgress(): number;
    private setDataloggerLoadProgress;
    private dataLoggerStartReadTime;
    private Alarms;
    private static _MaxDataRecords;
    static get MaxDataRecords(): number;
    static set MaxDataRecords(value: number);
    private static _MaxLoggerRecords;
    static get MaxLoggerRecords(): number;
    static set MaxLoggerRecords(value: number);
    get_lastAvgValue(): number;
    get_lastMaxValue(): number;
    get_lastMinValue(): number;
    ConfigHasChanged(): Promise<void>;
    constructor(s: YoctoAPI.YSensor | null, name: string, SensorLocalConfig: YoctoVisualization.YXmlNode | null);
    private checkAlarmIndex;
    getAlarmCount(): number;
    setAlarmCondition(index: number, condition: number): void;
    getAlarmCondition(index: number): number;
    setAlarmSource(index: number, source: number): void;
    getAlarmSource(index: number): number;
    setAlarmValue(index: number, value: number): void;
    getAlarmValue(index: number): number;
    setAlarmDelay(index: number, value: number): void;
    getAlarmDelay(index: number): number;
    setAlarmCommandline(index: number, value: string): void;
    getAlarmCommandline(index: number): string;
    get_firstLiveDataTimeStamp(): number;
    get_firstDataloggerTimeStamp(): number;
    get_lastDataTimeStamp(): number;
    protected preload_DoWork(arg: DataLoggerBoundary): Promise<void>;
    protected findMergeBoundaries(previewMinData: TimedSensorValue[]): MergeSourceRange;
    protected preload_Completed(arg: DataLoggerBoundary): void;
    get_frequency(): string;
    private updateFrequncy;
    set_frequency(frequencyToSet: string): void;
    get_recording(): boolean;
    set_recording(recordingStatus: boolean): void;
    updaterecording(recordingStatus: boolean): Promise<void>;
    protected reportDataloggerLoadProgress(progress: number): void;
    protected load_DoWork(arg: DataLoggerBoundary): Promise<void>;
    protected load_Completed(): void;
    get dataloggerWasUsed(): boolean;
    private dataCleanUp;
    private previewDataCleanUp;
    stopDataloggerloading(): void;
    isOnline(): boolean;
    reloadConfig(): Promise<void>;
    get_unit(): string;
    get_resolution(): number;
    resetDataloggerLoader(): void;
    loadDatalogger(start: number, stop: number): void;
    arrival(dataloggerOn: boolean): Promise<void>;
    startDataloggerload(source: YoctoVisualization.graphWidget): Promise<void>;
    notifySensorArrival(): void;
    notifySensorStateChange(): void;
    removal(): void;
    configureSensor(): Promise<void>;
    registerCallback(f: YoctoVisualization.YWidget): void;
    forceUpdate(): void;
    TimedCallback(source: YoctoAPI.YSensor, M: YoctoAPI.YMeasure | null): Promise<void>;
    forgetForm(source: YoctoVisualization.YWidget): void;
    get_sensor(): YoctoAPI.YSensor | null;
    get_hardwareId(): string;
    get_friendlyName(): string;
    toString(): string;
}
export declare class NullYSensor extends CustomYSensor {
    constructor();
    protected preload_DoWork(arg: DataLoggerBoundary): Promise<void>;
    get dataloggerLoadisRunning(): boolean;
    get_unit(): string;
    registerCallback(Form: YoctoVisualization.YWidget): void;
    forceUpdate(): void;
    get_frequency(): string;
    set_frequency(frequencyToSet: string): void;
    get_sensor(): YoctoAPI.YSensor | null;
    toString(): string;
    setAlarmCondition(index: number, condition: number): void;
    getAlarmCondition(index: number): number;
    setAlarmValue(index: number, value: number): void;
    getAlarmValue(index: number): number;
    setAlarmDelay(index: number, value: number): void;
    getAlarmDelay(index: number): number;
    setAlarmCommandline(index: number, value: string): void;
    getAlarmCommandline(index: number): string;
}
export interface SensorManagerChangeCallback {
    (): void;
}
export declare class sensorsManager {
    private static counter;
    static sensorList: CustomYSensor[];
    static NullSensor: CustomYSensor;
    private static KnownSensors;
    private static _hubList;
    private static _customArrivalCallback;
    private static _customRemovalCallback;
    private static _changeCallback;
    private static _changeExternalCallback;
    static clearHublist(): Promise<void>;
    static registerChangeCallback(changeCallback: SensorManagerChangeCallback): void;
    static registerChangeExternalCallback(changeCallback: YoctoVisualization.ConfigChangeHandler): void;
    static forgetForm(source: YoctoVisualization.YWidget): void;
    static InitHubList(node: YoctoVisualization.YXmlNode): Promise<void>;
    static get hubList(): YoctoVisualization.Hub[];
    static hubWasremoved(h: YoctoVisualization.Hub): void;
    static newHubCreated(h: YoctoVisualization.Hub): boolean;
    private static removeExtraInfoFromUrl;
    static NetworkArrival(net: YoctoAPI.YNetwork): Promise<void>;
    static setKnownSensors(sensorXMLList: YoctoVisualization.YXmlNode): void;
    static FindSensorLastLocalConfig(hwdId: string): YoctoVisualization.YXmlNode | null;
    static deviceConfigChanged(m: YoctoAPI.YModule): Promise<void>;
    static deviceArrival(m: YoctoAPI.YModule): Promise<void>;
    static deviceRemoval(m: YoctoAPI.YModule): Promise<void>;
    static RegisterDeviceArrivalCallback(arrivalCallback: YoctoAPI.YDeviceUpdateCallback | null): void;
    static RegisterDeviceRemovalCallback(removalCallback: YoctoAPI.YDeviceUpdateCallback | null): void;
    static AddNewSensor(hwdID: string): CustomYSensor;
    static getNullSensor(): CustomYSensor;
    private static UpdateDeviceList;
    private static _runAsync;
    static run(): void;
}
export {};


// from formManager.d.ts
import * as YDataRendering from "./Renderer/YDataRendererFull.js";
import * as YoctoVisualization from "./YoctoVisualizationFull.js";
import * as YoctoAPI from "./YoctoApiFull.js";
export declare class YWidget {
    static log(st: string): void;
    protected UIContainer: HTMLCanvasElement;
    protected _genProp: YoctoVisualization.GenericProperties | null;
    protected _genRenderer: YDataRendering.YDataRenderer | null;
    private _windowResizeCallback;
    SourceChanged(src: object, index?: number): void;
    loadRecordedDataIfNeeded(): void;
    removeDataloggerData(): void;
    snapshot(): void;
    private _BackColor;
    get BackColor(): YDataRendering.YColor;
    set BackColor(value: YDataRendering.YColor);
    private _BorderColor;
    get BorderColor(): YDataRendering.YColor;
    set BorderColor(value: YDataRendering.YColor);
    private get parentWidth();
    private get parentHeight();
    private get relativePositionX();
    private _relativePositionX;
    private set relativePositionX(value);
    private _relativePositionY;
    private set relativePositionY(value);
    private get relativePositionY();
    private _PositionX;
    get PositionX(): number;
    set PositionX(value: number);
    private _PositionY;
    get PositionY(): number;
    set PositionY(value: number);
    private sizeRound;
    private get relativeWidth();
    private _relativeWidth;
    private set relativeWidth(value);
    private _relativeHeight;
    private set relativeHeight(value);
    private get relativeHeight();
    private updateRelativeSize;
    private _Width;
    get Width(): number;
    set Width(value: number);
    _Height: number;
    get Height(): number;
    set Height(value: number);
    private _InitialSizeIsRelative;
    private _SizeIsRelative;
    get SizeIsRelative(): boolean;
    set SizeIsRelative(value: boolean);
    _initialContainerID: string;
    _containerID: string;
    get containerID(): string;
    set containerID(value: string);
    _Text: string;
    get Text(): string;
    set Text(value: string);
    set_name(name: string): void;
    private windowResized;
    protected ApplyRelativeSizeIfRequired(): void;
    destroy(): void;
    getContainerOffset(): YDataRendering.pointXY;
    contextMenuCallBack(mouseX: number, mouseY: number): void;
    protected contextMenuIsOpening(): void;
    constructor(node: YoctoVisualization.YXmlNode | null, editor: null, default_x?: number, default_y?: number, default_width?: number, default_height?: number);
    rearrangeZindexes(): void;
    SensorArrivalcallback(source: YoctoVisualization.CustomYSensor): void;
    SensorStateChangedcallback(source: YoctoVisualization.CustomYSensor): void;
    SensorValuecallback(source: YoctoVisualization.CustomYSensor, M: YoctoAPI.YMeasure | null): void;
    protected updateWindowPositionProperties(prop: YoctoVisualization.GenericProperties): void;
    resize(newWidth: number, newHeight: number): void;
    containerResized(): void;
    protected getPropertiesXml(): string;
    protected PatchSensorAnnotationCallback(sensor: YoctoVisualization.CustomYSensor, text: string): string;
}
/**************************************************
 *
 * solid gauge Widget
 *
 */
export declare class gaugeWidget extends YWidget {
    private _gauge;
    private static AnnotationPanelCount;
    private noDataSourcepanel;
    private prop;
    containerResized(): void;
    destroy(): void;
    protected contextMenuIsOpening(): void;
    get confirmDeleteString(): string;
    private AnnotationCallback;
    constructor(node: YoctoVisualization.YXmlNode | null, editor: null, x?: number, y?: number, width?: number, height?: number);
    valueFormater(source: YDataRendering.YDataRenderer, value: number): string;
    SourceChanged(value: YoctoVisualization.CustomYSensor, index?: number): void;
    SensorValuecallback(source: YoctoVisualization.CustomYSensor, M: YoctoAPI.YMeasure): void;
}
/**************************************************
 *
 * angularGaugeWidget
 *
 */
export declare class angularGaugeWidget extends YWidget {
    private _angularGauge;
    private prop;
    private noDataSourcepanel;
    private static AnnotationPanelCount;
    private static zonesCount;
    private initDataNode;
    containerResized(): void;
    destroy(): void;
    private AnnotationCallback;
    protected contextMenuIsOpening(): void;
    get confirmDeleteString(): string;
    constructor(node: YoctoVisualization.YXmlNode | null, editor: null, x?: number, y?: number, width?: number, height?: number);
    private showStatus;
    SourceChanged(value: YoctoVisualization.CustomYSensor, index?: number): void;
    SensorValuecallback(source: YoctoVisualization.CustomYSensor, M: YoctoAPI.YMeasure): void;
}
/**************************************************
 *
 * digitalDisplayWidget
 *
 */
export declare class digitalDisplayWidget extends YWidget {
    private _display;
    private prop;
    private noDataSourcepanel;
    private static AnnotationPanelCount;
    private _unit;
    containerResized(): void;
    destroy(): void;
    private AnnotationCallback;
    protected contextMenuIsOpening(): void;
    get confirmDeleteString(): string;
    constructor(node: YoctoVisualization.YXmlNode | null, editor: null, x?: number, y?: number, width?: number, height?: number);
    valueFormater(source: YDataRendering.YDataRenderer, value: number): string;
    SourceChanged(value: YoctoVisualization.CustomYSensor, index?: number): void;
    SensorValuecallback(source: YoctoVisualization.CustomYSensor, M: YoctoAPI.YMeasure | null): void;
}
/**************************************************
 *
 * graph Widget
 *
 */
export declare class graphWidget extends YWidget {
    private _graph;
    private noDataSourcepanel;
    private offLineSourcesPanel;
    private captureRunningPanel;
    private dataloggerProgress;
    private prop;
    private markers;
    private seriesProperties;
    private static AnnotationPanelCount;
    private static SeriesCount;
    private static ZoneCountPerYaxis;
    private static MarkerCountPerXaxis;
    private static YAxisCount;
    private static DataLoggerLoadingMsg;
    private offlineMessages;
    private showOffline;
    private AnnotationCallback;
    destroy(): void;
    containerResized(): void;
    protected contextMenuIsOpening(): void;
    startMarkerCapture(markerIndex: number): void;
    AxisParamtersChangedAutomatically(source: YDataRendering.GenericAxis): void;
    constructor(node: YoctoVisualization.YXmlNode | null, editor: null, x?: number, y?: number, width?: number, height?: number);
    private decomposeToSegments;
    SourceChanged(value: YoctoVisualization.CustomYSensor, index: number): void;
    SensorArrivalcallback(source: YoctoVisualization.CustomYSensor): void;
    private preLoadSensorData;
    private updateOfflinePanel;
    SensorValuecallback(source: YoctoVisualization.CustomYSensor, M: YoctoAPI.YMeasure): void;
    disableAllMarkers(): void;
    clearDataLogger(): void;
    private truncateView;
    resetDataView(): void;
    private startToClearDataLoggers;
    dataLoggerLoadprocessIsRunningNotification(source: YoctoVisualization.CustomYSensor): void;
    SensorNewDataBlock(source: YoctoVisualization.CustomYSensor, sourceFromIndex: number, sourcetoIndex: number, targetIndex: number, fromDataLogger: boolean): void;
    loadRecordedDataIfNeeded(): void;
    removeDataloggerData(): void;
    DataloggerCompleted(Source: YoctoVisualization.CustomYSensor): void;
}


// from propertiesMngmt.d.ts
import * as YDataRendering from "./Renderer/YDataRendererFull.js";
import * as YoctoVisualization from "./YoctoVisualizationFull.js";
export interface YXmlNodeDict {
    [key: string]: YXmlNode;
}
export declare class YXmlNode {
    private node;
    constructor(node: Node);
    get Name(): string;
    get_childsByName(): YoctoVisualization.YXmlNodeDict;
    get_childsByIndex(): YXmlNode[];
    get_attributes(): {
        [index: string]: string;
    };
    get Attributes(): {
        [index: string]: string;
    };
}
export interface PropFilter {
    (propNname: string): boolean;
}
export declare class doubleNan {
    private _value;
    constructor(v?: any);
    toString(): string;
    clone(): YoctoVisualization.doubleNan;
    get value(): number;
    set value(value: number);
}
export declare class PropertyDescriptor {
    name: string;
    isWritable: boolean;
    isEnum: boolean;
    type: string;
    Attributes: {
        [index: string]: any;
    };
    constructor(name: string);
}
export declare class PropertiesList {
    byIndex: PropertyDescriptor[];
    byName: {
        [index: string]: PropertyDescriptor;
    };
}
export declare abstract class GenericProperties {
    ownerForm: YoctoVisualization.YWidget | null;
    static NoFilter(propNname: string): boolean;
    abstract IsDataSourceAssigned(): boolean;
    static XmlFileVersion: number;
    static escapeXml(unsafe: string): string;
    protected constructor(Owner: YoctoVisualization.YWidget | null);
    destroy(): void;
    initFromXmlData(initData: YXmlNode | null): void;
    loadProperties(initData: YXmlNode, Owner: YoctoVisualization.YWidget, o: Object): void;
    private _Form_Text;
    get ATTR_Form_Text__DisplayName(): string;
    get ATTR_Form_Text__CategoryAttribute(): string;
    get ATTR_Form_Text__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_Form_Text__DescriptionAttribute(): string;
    get Form_Text(): string;
    set Form_Text(value: string);
    private _Form_BackColor;
    get ATTR_Form_BackColor__DisplayName(): string;
    get ATTR_Form_BackColor__CategoryAttribute(): string;
    get ATTR_Form_BackColor__DescriptionAttribute(): string;
    get Form_BackColor(): YDataRendering.YColor;
    set Form_BackColor(value: YDataRendering.YColor);
    private _Form_BorderColor;
    get ATTR_Form_BorderColor__DisplayName(): string;
    get ATTR_Form_BorderColor__CategoryAttribute(): string;
    get ATTR_Form_BorderColor__DescriptionAttribute(): string;
    get Form_BorderColor(): YDataRendering.YColor;
    set Form_BorderColor(value: YDataRendering.YColor);
    private _SizeIsRelative;
    get ATTR_Form_SizeIsRelative__NotSavedInXMLAttribute(): boolean;
    get ATTR_Form_SizeIsRelative__DisplayName(): string;
    get ATTR_Form_SizeIsRelative__CategoryAttribute(): string;
    get ATTR_Form_SizeIsRelative__DescriptionAttribute(): string;
    get ATTR_Form_SizeIsRelative__ChangeCausesParentRefreshAttribute(): boolean;
    get Form_SizeIsRelative(): boolean;
    set Form_SizeIsRelative(value: boolean);
    private _Form_PositionX;
    get ATTR_Form_PositionX__NotSavedInXMLAttribute(): boolean;
    get ATTR_Form_PositionX__DisplayName(): string;
    get ATTR_Form_PositionX__CategoryAttribute(): string;
    get ATTR_Form_PositionX__DescriptionAttribute(): string;
    get Form_PositionX(): number;
    set Form_PositionX(value: number);
    private _Form_PositionY;
    get ATTR_Form_PositionY__NotSavedInXMLAttribute(): boolean;
    get ATTR_Form_PositionY__DisplayName(): string;
    get ATTR_Form_PositionY__CategoryAttribute(): string;
    get ATTR_Form_PositionY__DescriptionAttribute(): string;
    get Form_PositionY(): number;
    set Form_PositionY(value: number);
    private _Form_Width;
    get ATTR_Form_Width__NotSavedInXMLAttribute(): boolean;
    get ATTR_Form_Width__DisplayName(): string;
    get ATTR_Form_Width__CategoryAttribute(): string;
    get ATTR_Form_Width__DescriptionAttribute(): string;
    get Form_Width(): number;
    set Form_Width(value: number);
    private _Form_Height;
    get ATTR_Form_Height__NotSavedInXMLAttribute(): boolean;
    get ATTR_Form_Height__DisplayName(): string;
    get ATTR_Form_Height__CategoryAttribute(): string;
    get ATTR_Form_Height__DescriptionAttribute(): string;
    get Form_Height(): number;
    set Form_Height(value: number);
    private _containerID;
    get ATTR_Form_containerID__NotSavedInXMLAttribute(): boolean;
    get ATTR_Form_containerID__DisplayName(): string;
    get ATTR_Form_containerID__CategoryAttribute(): string;
    get ATTR_Form_containerID__DescriptionAttribute(): string;
    get Form_containerID(): string;
    set Form_containerID(value: string);
    indent(n: number): string;
    static IsStructured(o: any): boolean;
    static getObjectFromPath(rootTarget: object, path: string[]): object;
    private static computePropertyAccess_SFT;
    private static Reflect_getIndexed;
    private static computePropertyAccess;
    static newGetProperty(rootTarget: object, source: object, propertySourceName: string, path: string[], filterAllow: PropFilter | null): any;
    static copyProperty_SFT(rootTarget: object, source: object, propertySourceName: string, path: string[], filterAllow?: PropFilter): void;
    static copyProperty_STT(rootTarget: object, source: object, propertySourceName: string, path: string[], filterAllow?: PropFilter): void;
    ApplyAllProperties(target: object): void;
    RefreshAllProperties(target: object): void;
    ApplyProperties(rootSource: object, rootTarget: object, fullpropname: string, sourceValue: object, path: string[], direction: GenericProperties.APPLYDIRECTION): void;
    static isProperty(proto: any, propName: string): boolean;
    static isWritable(proto: any, propName: string): boolean;
    static getAllProperties(o: any): PropertiesList;
    ApplyAllPropertiesEx(target: object, filter: PropFilter, direction: GenericProperties.APPLYDIRECTION): void;
}
export declare namespace GenericProperties {
    const enum APPLYDIRECTION {
        SETTINGS_TO_TARGET = 0,
        SETTINGS_FROM_TARGET = 1
    }
}


// from properties.d.ts
import * as YDataRendering from "./Renderer/YDataRendererFull.js";
import * as YoctoVisualization from "./YoctoVisualizationFull.js";
export declare class TypeDescription {
    static get AllowedValues(): string[];
}
export declare class sensorFreqTypeDescription {
    private static readonly _AllowedValues;
    static get AllowedValues(): string[];
}
export declare class yAxisDescription {
    private static _AllowedValues;
    private static initialized;
    static initialize(): void;
    static get AllowedValues(): string[];
}
export declare class AlarmTestTypeDescription {
    private static _AllowedValues;
    static get AllowedValues(): string[];
}
export declare class fontNameTypeDescription {
    private static readonly _AllowedValues;
    static fontNameTypeDescription(): void;
    static get AllowedValues(): string[];
}
export declare class sensorPrecisionTypeDescription {
    private static readonly _AllowedValues;
    static get AllowedValues(): string[];
}
export declare class sensorDataTypeDescription {
    private static readonly _AllowedValues;
    static get AllowedValues(): string[];
}
export declare class GaugeFormProperties extends YoctoVisualization.GenericProperties {
    constructor(initData: YoctoVisualization.YXmlNode | null, owner: YoctoVisualization.YWidget);
    private PropagateDataSourceChange;
    private _DataSource_source;
    get ATTR_DataSource_source__DisplayName(): string;
    get ATTR_DataSource_source__CategoryAttribute(): string;
    get ATTR_DataSource_source__ParamCategorySummaryAttribute(): string;
    get ATTR_DataSource_source__PreExpandedCategoryAttribute(): boolean;
    get ATTR_DataSource_source__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_DataSource_source__DescriptionAttribute(): string;
    get DataSource_source(): YoctoVisualization.CustomYSensor;
    set DataSource_source(value: YoctoVisualization.CustomYSensor);
    get sensorDescription(): string;
    get isSensorReadOnly(): boolean;
    get ATTR_DataSource_freq__DisplayName(): string;
    get ATTR_DataSource_freq__CategoryAttribute(): string;
    get ATTR_DataSource_freq__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_freq__IsReadonlyCallAttribute(): boolean;
    get ATTR_DataSource_freq__AllowedValues(): string[];
    get ATTR_DataSource_freq__DescriptionAttribute(): string;
    get DataSource_freq(): string;
    set DataSource_freq(value: string);
    private _DataSource_precision;
    get ATTR_DataSource_precision__DisplayName(): string;
    get ATTR_DataSource_precision__CategoryAttribute(): string;
    get ATTR_DataSource_precision__DescriptionAttribute(): string;
    get ATTR_DataSource_precision__AllowedValues(): string[];
    get DataSource_precision(): string;
    set DataSource_precision(value: string);
    private _DataSource_AlarmSection0;
    get ATTR_DataSource_AlarmSection0__DisplayName(): string;
    get ATTR_DataSource_AlarmSection0__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_AlarmSection0__ReadOnlyAttribute(): boolean;
    get ATTR_DataSource_AlarmSection0__CategoryAttribute(): string;
    get ATTR_DataSource_AlarmSection0__DescriptionAttribute(): string;
    get DataSource_AlarmSection0(): AlarmSection;
    set DataSource_AlarmSection0(value: AlarmSection);
    private _DataSource_AlarmSection1;
    get ATTR_DataSource_AlarmSection1__DisplayName(): string;
    get ATTR_DataSource_AlarmSection1__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_AlarmSection1__ReadOnlyAttribute(): boolean;
    get ATTR_DataSource_AlarmSection1__CategoryAttribute(): string;
    get ATTR_DataSource_AlarmSection1__DescriptionAttribute(): string;
    get DataSource_AlarmSection1(): AlarmSection;
    set DataSource_AlarmSection1(value: AlarmSection);
    private _SolidGauge_min;
    get ATTR_SolidGauge_min__DisplayName(): string;
    get ATTR_SolidGauge_min__CategoryAttribute(): string;
    get ATTR_SolidGauge_min__DescriptionAttribute(): string;
    get SolidGauge_min(): number;
    set SolidGauge_min(value: number);
    private _SolidGauge_max;
    get ATTR_SolidGauge_max__DisplayName(): string;
    get ATTR_SolidGauge_max__CategoryAttribute(): string;
    get ATTR_SolidGauge_max__DescriptionAttribute(): string;
    get SolidGauge_max(): number;
    set SolidGauge_max(value: number);
    private _SolidGauge_showMinMax;
    get ATTR_SolidGauge_showMinMax__DisplayName(): string;
    get ATTR_SolidGauge_showMinMax__CategoryAttribute(): string;
    get ATTR_SolidGauge_showMinMax__DescriptionAttribute(): string;
    get SolidGauge_showMinMax(): boolean;
    set SolidGauge_showMinMax(value: boolean);
    private _SolidGauge_color1;
    get ATTR_SolidGauge_color1__DisplayName(): string;
    get ATTR_SolidGauge_color1__CategoryAttribute(): string;
    get ATTR_SolidGauge_color1__DescriptionAttribute(): string;
    get SolidGauge_color1(): YDataRendering.YColor;
    set SolidGauge_color1(value: YDataRendering.YColor);
    private _SolidGauge_color2;
    get ATTR_SolidGauge_color2__DisplayName(): string;
    get ATTR_SolidGauge_color2__CategoryAttribute(): string;
    get ATTR_SolidGauge_color2__DescriptionAttribute(): string;
    get SolidGauge_color2(): YDataRendering.YColor;
    set SolidGauge_color2(value: YDataRendering.YColor);
    private _SolidGauge_font;
    get ATTR_SolidGauge_font__DisplayName(): string;
    get ATTR_SolidGauge_font__CategoryAttribute(): string;
    get ATTR_SolidGauge_font__ReadOnlyAttribute(): boolean;
    get ATTR_SolidGauge_font__DescriptionAttribute(): string;
    get SolidGauge_font(): FontDescription;
    set SolidGauge_font(value: FontDescription);
    private _SolidGauge_minMaxFont;
    get ATTR_SolidGauge_minMaxFont__DisplayName(): string;
    get ATTR_SolidGauge_minMaxFont__CategoryAttribute(): string;
    get ATTR_SolidGauge_minMaxFont__ReadOnlyAttribute(): boolean;
    get ATTR_SolidGauge_minMaxFont__DescriptionAttribute(): string;
    get SolidGauge_minMaxFont(): FontDescription;
    set SolidGauge_minMaxFont(value: FontDescription);
    private _SolidGauge_displayMode;
    get ATTR_SolidGauge_displayMode__DisplayName(): string;
    get ATTR_SolidGauge_displayMode__CategoryAttribute(): string;
    get ATTR_SolidGauge_displayMode__DescriptionAttribute(): string;
    get SolidGauge_displayMode(): YDataRendering.YSolidGauge.DisplayModeEnumItem;
    set SolidGauge_displayMode(value: YDataRendering.YSolidGauge.DisplayModeEnumItem);
    private _SolidGauge_borderColor;
    get ATTR_SolidGauge_borderColor__DisplayName(): string;
    get ATTR_SolidGauge_borderColor__CategoryAttribute(): string;
    get ATTR_SolidGauge_borderColor__DescriptionAttribute(): string;
    get SolidGauge_borderColor(): YDataRendering.YColor;
    set SolidGauge_borderColor(value: YDataRendering.YColor);
    private _SolidGauge_borderThickness;
    get ATTR_SolidGauge_borderThickness__DisplayName(): string;
    get ATTR_SolidGauge_borderThickness__CategoryAttribute(): string;
    get ATTR_SolidGauge_borderThickness__DescriptionAttribute(): string;
    get SolidGauge_borderThickness(): number;
    set SolidGauge_borderThickness(value: number);
    private _SolidGauge_backgroundColor1;
    get ATTR_SolidGauge_backgroundColor1__DisplayName(): string;
    get ATTR_SolidGauge_backgroundColor1__CategoryAttribute(): string;
    get ATTR_SolidGauge_backgroundColor1__DescriptionAttribute(): string;
    get SolidGauge_backgroundColor1(): YDataRendering.YColor;
    set SolidGauge_backgroundColor1(value: YDataRendering.YColor);
    private _SolidGauge_backgroundColor2;
    get ATTR_SolidGauge_backgroundColor2__DisplayName(): string;
    get ATTR_SolidGauge_backgroundColor2__CategoryAttribute(): string;
    get ATTR_SolidGauge_backgroundColor2__DescriptionAttribute(): string;
    get SolidGauge_backgroundColor2(): YDataRendering.YColor;
    set SolidGauge_backgroundColor2(value: YDataRendering.YColor);
    private _SolidGauge_thickness;
    get ATTR_SolidGauge_thickness__DisplayName(): string;
    get ATTR_SolidGauge_thickness__CategoryAttribute(): string;
    get ATTR_SolidGauge_thickness__DescriptionAttribute(): string;
    get SolidGauge_thickness(): number;
    set SolidGauge_thickness(value: number);
    private _SolidGauge_maxSpeed;
    get ATTR_SolidGauge_maxSpeed__DisplayName(): string;
    get ATTR_SolidGauge_maxSpeed__CategoryAttribute(): string;
    get ATTR_SolidGauge_maxSpeed__DescriptionAttribute(): string;
    get SolidGauge_maxSpeed(): number;
    set SolidGauge_maxSpeed(value: number);
    IsDataSourceAssigned(): boolean;
    private _annotationPanels0;
    get ATTR_SolidGauge_annotationPanels0__DisplayName(): string;
    get ATTR_SolidGauge_annotationPanels0__CategoryAttribute(): string;
    get ATTR_SolidGauge_annotationPanels0__ReadOnlyAttribute(): boolean;
    get ATTR_SolidGauge_annotationPanels0__DescriptionAttribute(): string;
    get SolidGauge_annotationPanels0(): AnnotationPanelDescription;
    set SolidGauge_annotationPanels0(value: AnnotationPanelDescription);
    private _annotationPanels1;
    get ATTR_SolidGauge_annotationPanels1__DisplayName(): string;
    get ATTR_SolidGauge_annotationPanels1__CategoryAttribute(): string;
    get ATTR_SolidGauge_annotationPanels1__ReadOnlyAttribute(): boolean;
    get ATTR_SolidGauge_annotationPanels1__DescriptionAttribute(): string;
    get SolidGauge_annotationPanels1(): AnnotationPanelDescription;
    set SolidGauge_annotationPanels1(value: AnnotationPanelDescription);
}
export declare class AngularGaugeFormProperties extends YoctoVisualization.GenericProperties {
    constructor(initData: YoctoVisualization.YXmlNode | null, owner: YoctoVisualization.YWidget);
    private PropagateDataSourceChange;
    IsDataSourceAssigned(): boolean;
    private _DataSource_source;
    get ATTR_DataSource_source__DisplayName(): string;
    get ATTR_DataSource_source__CategoryAttribute(): string;
    get ATTR_DataSource_source__ParamCategorySummaryAttribute(): string;
    get ATTR_DataSource_source__PreExpandedCategoryAttribute(): boolean;
    get ATTR_DataSource_source__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_DataSource_source__DescriptionAttribute(): string;
    get DataSource_source(): YoctoVisualization.CustomYSensor;
    set DataSource_source(value: YoctoVisualization.CustomYSensor);
    get sensorDescription(): string;
    get isSensorReadOnly(): boolean;
    get ATTR_DataSource_freq__DisplayName(): string;
    get ATTR_DataSource_freq__CategoryAttribute(): string;
    get ATTR_DataSource_freq__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_freq__IsReadonlyCallAttribute(): string;
    get ATTR_DataSource_freq__DescriptionAttribute(): string;
    get ATTR_DataSource_freq__AllowedValues(): string[];
    get DataSource_freq(): string;
    set DataSource_freq(value: string);
    private _DataSource_AlarmSection0;
    get ATTR_DataSource_AlarmSection0__DisplayName(): string;
    get ATTR_DataSource_AlarmSection0__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_AlarmSection0__ReadOnlyAttribute(): boolean;
    get ATTR_DataSource_AlarmSection0__CategoryAttribute(): string;
    get ATTR_DataSource_AlarmSection0__DescriptionAttribute(): string;
    get DataSource_AlarmSection0(): AlarmSection;
    set DataSource_AlarmSection0(value: AlarmSection);
    private _DataSource_AlarmSection1;
    get ATTR_DataSource_AlarmSection1__DisplayName(): string;
    get ATTR_DataSource_AlarmSection1__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_AlarmSection1__ReadOnlyAttribute(): boolean;
    get ATTR_DataSource_AlarmSection1__CategoryAttribute(): string;
    get ATTR_DataSource_AlarmSection1__DescriptionAttribute(): string;
    get DataSource_AlarmSection1(): AlarmSection;
    set DataSource_AlarmSection1(value: AlarmSection);
    private _AngularGauge_min;
    get ATTR_AngularGauge_min__DisplayName(): string;
    get ATTR_AngularGauge_min__CategoryAttribute(): string;
    get ATTR_AngularGauge_min__DescriptionAttribute(): string;
    get AngularGauge_min(): number;
    set AngularGauge_min(value: number);
    private _AngularGauge_max;
    get ATTR_AngularGauge_max__DisplayName(): string;
    get ATTR_AngularGauge_max__CategoryAttribute(): string;
    get ATTR_AngularGauge_max__DescriptionAttribute(): string;
    get AngularGauge_max(): number;
    set AngularGauge_max(value: number);
    private _AngularGauge_unitFactor;
    get ATTR_AngularGauge_unitFactor__DisplayName(): string;
    get ATTR_AngularGauge_unitFactor__CategoryAttribute(): string;
    get ATTR_AngularGauge_unitFactor__DescriptionAttribute(): string;
    get AngularGauge_unitFactor(): number;
    set AngularGauge_unitFactor(value: number);
    private _AngularGauge_graduation;
    get ATTR_AngularGauge_graduation__DisplayName(): string;
    get ATTR_AngularGauge_graduation__CategoryAttribute(): string;
    get ATTR_AngularGauge_graduation__DescriptionAttribute(): string;
    get AngularGauge_graduation(): number;
    set AngularGauge_graduation(value: number);
    private _AngularGauge_graduationSize;
    get ATTR_AngularGauge_graduationSize__DisplayName(): string;
    get ATTR_AngularGauge_graduationSize__CategoryAttribute(): string;
    get ATTR_AngularGauge_graduationSize__DescriptionAttribute(): string;
    get AngularGauge_graduationSize(): number;
    set AngularGauge_graduationSize(value: number);
    private _AngularGauge_graduationOuterRadiusSize;
    get ATTR_AngularGauge_graduationOuterRadiusSize__DisplayName(): string;
    get ATTR_AngularGauge_graduationOuterRadiusSize__CategoryAttribute(): string;
    get ATTR_AngularGauge_graduationOuterRadiusSize__DescriptionAttribute(): string;
    get AngularGauge_graduationOuterRadiusSize(): number;
    set AngularGauge_graduationOuterRadiusSize(value: number);
    private _AngularGauge_graduationThickness;
    get ATTR_AngularGauge_graduationThickness__DisplayName(): string;
    get ATTR_AngularGauge_graduationThickness__CategoryAttribute(): string;
    get ATTR_AngularGauge_graduationThickness__DescriptionAttribute(): string;
    get AngularGauge_graduationThickness(): number;
    set AngularGauge_graduationThickness(value: number);
    private _AngularGauge_graduationColor;
    get ATTR_AngularGauge_graduationColor__DisplayName(): string;
    get ATTR_AngularGauge_graduationColor__CategoryAttribute(): string;
    get ATTR_AngularGauge_graduationColor__DescriptionAttribute(): string;
    get AngularGauge_graduationColor(): YDataRendering.YColor;
    set AngularGauge_graduationColor(value: YDataRendering.YColor);
    private _AngularGauge_graduationFont;
    get ATTR_AngularGauge_graduationFont__DisplayName(): string;
    get ATTR_AngularGauge_graduationFont__CategoryAttribute(): string;
    get ATTR_AngularGauge_graduationFont__ReadOnlyAttribute(): boolean;
    get ATTR_AngularGauge_graduationFont__DescriptionAttribute(): string;
    get AngularGauge_graduationFont(): FontDescription;
    set AngularGauge_graduationFont(value: FontDescription);
    private _AngularGauge_subgraduationCount;
    get ATTR_AngularGauge_subgraduationCount__DisplayName(): string;
    get ATTR_AngularGauge_subgraduationCount__CategoryAttribute(): string;
    get ATTR_AngularGauge_subgraduationCount__DescriptionAttribute(): string;
    get AngularGauge_subgraduationCount(): number;
    set AngularGauge_subgraduationCount(value: number);
    private _AngularGauge_subgraduationSize;
    get ATTR_AngularGauge_subgraduationSize__DisplayName(): string;
    get ATTR_AngularGauge_subgraduationSize__CategoryAttribute(): string;
    get ATTR_AngularGauge_subgraduationSize__DescriptionAttribute(): string;
    get AngularGauge_subgraduationSize(): number;
    set AngularGauge_subgraduationSize(value: number);
    private _AngularGauge_subgraduationThickness;
    get ATTR_AngularGauge_subgraduationThickness__DisplayName(): string;
    get ATTR_AngularGauge_subgraduationThickness__CategoryAttribute(): string;
    get ATTR_AngularGauge_subgraduationThickness__DescriptionAttribute(): string;
    get AngularGauge_subgraduationThickness(): number;
    set AngularGauge_subgraduationThickness(value: number);
    private _AngularGauge_subgraduationColor;
    get ATTR_AngularGauge_subgraduationColor__DisplayName(): string;
    get ATTR_AngularGauge_subgraduationColor__CategoryAttribute(): string;
    get ATTR_AngularGauge_subgraduationColor__DescriptionAttribute(): string;
    get AngularGauge_subgraduationColor(): YDataRendering.YColor;
    set AngularGauge_subgraduationColor(value: YDataRendering.YColor);
    private _AngularGauge_needleColor;
    get ATTR_AngularGauge_needleColor__DisplayName(): string;
    get ATTR_AngularGauge_needleColor__CategoryAttribute(): string;
    get ATTR_AngularGauge_needleColor__DescriptionAttribute(): string;
    get AngularGauge_needleColor(): YDataRendering.YColor;
    set AngularGauge_needleColor(value: YDataRendering.YColor);
    private _AngularGauge_needleContourColor;
    get ATTR_AngularGauge_needleContourColor__DisplayName(): string;
    get ATTR_AngularGauge_needleContourColor__CategoryAttribute(): string;
    get ATTR_AngularGauge_needleContourColor__DescriptionAttribute(): string;
    get AngularGauge_needleContourColor(): YDataRendering.YColor;
    set AngularGauge_needleContourColor(value: YDataRendering.YColor);
    private _AngularGauge_needleContourThickness;
    get ATTR_AngularGauge_needleContourThickness__DisplayName(): string;
    get ATTR_AngularGauge_needleContourThickness__CategoryAttribute(): string;
    get ATTR_AngularGauge_needleContourThickness__DescriptionAttribute(): string;
    get AngularGauge_needleContourThickness(): number;
    set AngularGauge_needleContourThickness(value: number);
    private _AngularGauge_needleLength1;
    get ATTR_AngularGauge_needleLength1__DisplayName(): string;
    get ATTR_AngularGauge_needleLength1__CategoryAttribute(): string;
    get ATTR_AngularGauge_needleLength1__DescriptionAttribute(): string;
    get AngularGauge_needleLength1(): number;
    set AngularGauge_needleLength1(value: number);
    private _AngularGauge_needleLength2;
    get ATTR_AngularGauge_needleLength2__DisplayName(): string;
    get ATTR_AngularGauge_needleLength2__CategoryAttribute(): string;
    get ATTR_AngularGauge_needleLength2__DescriptionAttribute(): string;
    get AngularGauge_needleLength2(): number;
    set AngularGauge_needleLength2(value: number);
    private _AngularGauge_needleWidth;
    get ATTR_AngularGauge_needleWidth__DisplayName(): string;
    get ATTR_AngularGauge_needleWidth__CategoryAttribute(): string;
    get ATTR_AngularGauge_needleWidth__DescriptionAttribute(): string;
    get AngularGauge_needleWidth(): number;
    set AngularGauge_needleWidth(value: number);
    private _AngularGauge_needleMaxSpeed;
    get ATTR_AngularGauge_needleMaxSpeed__DisplayName(): string;
    get ATTR_AngularGauge_needleMaxSpeed__CategoryAttribute(): string;
    get ATTR_AngularGauge_needleMaxSpeed__DescriptionAttribute(): string;
    get AngularGauge_needleMaxSpeed(): number;
    set AngularGauge_needleMaxSpeed(value: number);
    private _AngularGauge_unitFont;
    get ATTR_AngularGauge_unitFont__DisplayName(): string;
    get ATTR_AngularGauge_unitFont__CategoryAttribute(): string;
    get ATTR_AngularGauge_unitFont__ReadOnlyAttribute(): boolean;
    get ATTR_AngularGauge_unitFont__DescriptionAttribute(): string;
    get AngularGauge_unitFont(): FontDescription;
    set AngularGauge_unitFont(value: FontDescription);
    private _AngularGauge_statusFont;
    get ATTR_AngularGauge_statusFont__DisplayName(): string;
    get ATTR_AngularGauge_statusFont__ReadOnlyAttribute(): boolean;
    get ATTR_AngularGauge_statusFont__CategoryAttribute(): string;
    get ATTR_AngularGauge_statusFont__DescriptionAttribute(): string;
    get AngularGauge_statusFont(): FontDescription;
    set AngularGauge_statusFont(value: FontDescription);
    private _AngularGauge_borderColor;
    get ATTR_AngularGauge_borderColor__DisplayName(): string;
    get ATTR_AngularGauge_borderColor__CategoryAttribute(): string;
    get ATTR_AngularGauge_borderColor__DescriptionAttribute(): string;
    get AngularGauge_borderColor(): YDataRendering.YColor;
    set AngularGauge_borderColor(value: YDataRendering.YColor);
    private _AngularGauge_borderThickness;
    get ATTR_AngularGauge_borderThickness__DisplayName(): string;
    get ATTR_AngularGauge_borderThickness__CategoryAttribute(): string;
    get ATTR_AngularGauge_borderThickness__DescriptionAttribute(): string;
    get AngularGauge_borderThickness(): number;
    set AngularGauge_borderThickness(value: number);
    private _AngularGauge_backgroundColor1;
    get ATTR_AngularGauge_backgroundColor1__DisplayName(): string;
    get ATTR_AngularGauge_backgroundColor1__CategoryAttribute(): string;
    get ATTR_AngularGauge_backgroundColor1__DescriptionAttribute(): string;
    get AngularGauge_backgroundColor1(): YDataRendering.YColor;
    set AngularGauge_backgroundColor1(value: YDataRendering.YColor);
    private _AngularGauge_backgroundColor2;
    get ATTR_AngularGauge_backgroundColor2__DisplayName(): string;
    get ATTR_AngularGauge_backgroundColor2__CategoryAttribute(): string;
    get ATTR_AngularGauge_backgroundColor2__DescriptionAttribute(): string;
    get AngularGauge_backgroundColor2(): YDataRendering.YColor;
    set AngularGauge_backgroundColor2(value: YDataRendering.YColor);
    private _AngularGauge_zones0;
    get ATTR_AngularGauge_zones0__DisplayName(): string;
    get ATTR_AngularGauge_zones0__CategoryAttribute(): string;
    get ATTR_AngularGauge_zones0__ReadOnlyAttribute(): boolean;
    get ATTR_AngularGauge_zones0__DescriptionAttribute(): string;
    get AngularGauge_zones0(): AngularZoneDescription;
    set AngularGauge_zones0(value: AngularZoneDescription);
    private _AngularGauge_zones1;
    get ATTR_AngularGauge_zones1__DisplayName(): string;
    get ATTR_AngularGauge_zones1__CategoryAttribute(): string;
    get ATTR_AngularGauge_zones1__ReadOnlyAttribute(): boolean;
    get ATTR_AngularGauge_zones1__DescriptionAttribute(): string;
    get AngularGauge_zones1(): AngularZoneDescription;
    set AngularGauge_zones1(value: AngularZoneDescription);
    private _AngularGauge_zones2;
    get ATTR_AngularGauge_zones2__DisplayName(): string;
    get ATTR_AngularGauge_zones2__CategoryAttribute(): string;
    get ATTR_AngularGauge_zones2__ReadOnlyAttribute(): boolean;
    get ATTR_AngularGauge_zones2__DescriptionAttribute(): string;
    get AngularGauge_zones2(): AngularZoneDescription;
    set AngularGauge_zones2(value: AngularZoneDescription);
    private _annotationPanels0;
    get ATTR_AngularGauge_annotationPanels0__DisplayName(): string;
    get ATTR_AngularGauge_annotationPanels0__CategoryAttribute(): string;
    get ATTR_AngularGauge_annotationPanels0__ReadOnlyAttribute(): boolean;
    get ATTR_AngularGauge_annotationPanels0__DescriptionAttribute(): string;
    get AngularGauge_annotationPanels0(): AnnotationPanelDescription;
    set AngularGauge_annotationPanels0(value: AnnotationPanelDescription);
    private _annotationPanels1;
    get ATTR_AngularGauge_annotationPanels1__DisplayName(): string;
    get ATTR_AngularGauge_annotationPanels1__CategoryAttribute(): string;
    get ATTR_AngularGauge_annotationPanels1__ReadOnlyAttribute(): boolean;
    get ATTR_AngularGauge_annotationPanels1__DescriptionAttribute(): string;
    get AngularGauge_annotationPanels1(): AnnotationPanelDescription;
    set AngularGauge_annotationPanels1(value: AnnotationPanelDescription);
}
export declare class ZoneDescription {
    private _min;
    private _max;
    private _visible;
    private _color;
    constructor(min: number, max: number, color: YDataRendering.YColor);
    get summary(): string;
    get ATTR_visible__DisplayName(): string;
    get ATTR_visible__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_visible__DescriptionAttribute(): string;
    get visible(): boolean;
    set visible(value: boolean);
    get ATTR_min__DisplayName(): string;
    get ATTR_min__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_min__DescriptionAttribute(): string;
    get min(): number;
    set min(value: number);
    get ATTR_max__DisplayName(): string;
    get ATTR_max__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_max__DescriptionAttribute(): string;
    get max(): number;
    set max(value: number);
    get ATTR_color__DisplayName(): string;
    get ATTR_color__DescriptionAttribute(): string;
    get color(): YDataRendering.YColor;
    set color(value: YDataRendering.YColor);
}
export declare class AngularZoneDescription {
    private _width;
    private _outerRadius;
    private _min;
    private _max;
    private _visible;
    private _color;
    constructor(min: number, max: number, color: YDataRendering.YColor);
    get summary(): string;
    get ATTR_visible__DisplayName(): string;
    get ATTR_visible__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_visible__DescriptionAttribute(): string;
    get visible(): boolean;
    set visible(value: boolean);
    get ATTR_min__DisplayName(): string;
    get ATTR_min__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_min__DescriptionAttribute(): string;
    get min(): number;
    set min(value: number);
    get ATTR_max__DisplayName(): string;
    get ATTR_max__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_max__DescriptionAttribute(): string;
    get max(): number;
    set max(value: number);
    get ATTR_color__DisplayName(): string;
    get ATTR_color__DescriptionAttribute(): string;
    get color(): YDataRendering.YColor;
    set color(value: YDataRendering.YColor);
    get ATTR_outerRadius__DisplayName(): string;
    get ATTR_outerRadius__DescriptionAttribute(): string;
    get outerRadius(): number;
    set outerRadius(value: number);
    get ATTR_width__DisplayName(): string;
    get ATTR_width__DescriptionAttribute(): string;
    get width(): number;
    set width(value: number);
}
export declare class FontDescription {
    constructor(name: string, size: number, color: YDataRendering.YColor, italic: boolean, bold: boolean);
    ToString(): string;
    get summary(): string;
    private _name;
    get ATTR_name__DisplayName(): string;
    get ATTR_name__AllowedValues(): string[];
    get ATTR_name__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_name__DescriptionAttribute(): string;
    get name(): string;
    set name(value: string);
    private _size;
    get ATTR_size__DisplayName(): string;
    get ATTR_size__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_size__DescriptionAttribute(): string;
    get size(): number;
    set size(value: number);
    private _color;
    get ATTR_color__DisplayName(): string;
    get ATTR_color__DescriptionAttribute(): string;
    get color(): YDataRendering.YColor;
    set color(value: YDataRendering.YColor);
    private _italic;
    get ATTR_italic__DisplayName(): string;
    get ATTR_italic__DescriptionAttribute(): string;
    get italic(): boolean;
    set italic(value: boolean);
    private _bold;
    get ATTR_bold__DisplayName(): string;
    get ATTR_bold__DescriptionAttribute(): string;
    get bold(): boolean;
    set bold(value: boolean);
}
export declare class digitalDisplayFormProperties extends YoctoVisualization.GenericProperties {
    constructor(initData: YoctoVisualization.YXmlNode | null, owner: YoctoVisualization.YWidget);
    private PropagateDataSourceChange;
    IsDataSourceAssigned(): boolean;
    private _DataSource_source;
    get ATTR_DataSource_source__DisplayName(): string;
    get ATTR_DataSource_source__CategoryAttribute(): string;
    get ATTR_DataSource_source__ParamCategorySummaryAttribute(): string;
    get ATTR_DataSource_source__PreExpandedCategoryAttribute(): boolean;
    get ATTR_DataSource_source__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_DataSource_source__DescriptionAttribute(): string;
    get DataSource_source(): YoctoVisualization.CustomYSensor;
    set DataSource_source(value: YoctoVisualization.CustomYSensor);
    get isSensorReadOnly(): boolean;
    get sensorDescription(): string;
    get ATTR_DataSource_freq__DisplayName(): string;
    get ATTR_DataSource_freq__CategoryAttribute(): string;
    get ATTR_DataSource_freq__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_freq__IsReadonlyCallAttribute(): string;
    get ATTR_DataSource_freq__DescriptionAttribute(): string;
    get ATTR_DataSource_freq__AllowedValues(): string[];
    get DataSource_freq(): string;
    set DataSource_freq(value: string);
    private _DataSource_precision;
    get ATTR_DataSource_precision__DisplayName(): string;
    get ATTR_DataSource_precision__CategoryAttribute(): string;
    get ATTR_DataSource_precision__DescriptionAttribute(): string;
    get ATTR_DataSource_precision__AllowedValues(): string[];
    get DataSource_precision(): string;
    set DataSource_precision(value: string);
    private _DataSource_AlarmSection0;
    get ATTR_DataSource_AlarmSection0__DisplayName(): string;
    get ATTR_DataSource_AlarmSection0__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_AlarmSection0__ReadOnlyAttribute(): boolean;
    get ATTR_DataSource_AlarmSection0__CategoryAttribute(): string;
    get ATTR_DataSource_AlarmSection0__DescriptionAttribute(): string;
    get DataSource_AlarmSection0(): AlarmSection;
    set DataSource_AlarmSection0(value: AlarmSection);
    private _DataSource_AlarmSection1;
    get ATTR_DataSource_AlarmSection1__DisplayName(): string;
    get ATTR_DataSource_AlarmSection1__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_AlarmSection1__ReadOnlyAttribute(): boolean;
    get ATTR_DataSource_AlarmSection1__CategoryAttribute(): string;
    get ATTR_DataSource_AlarmSection1__DescriptionAttribute(): string;
    get DataSource_AlarmSection1(): AlarmSection;
    set DataSource_AlarmSection1(value: AlarmSection);
    private _font;
    get ATTR_display_font__DisplayName(): string;
    get ATTR_display_font__CategoryAttribute(): string;
    get ATTR_display_font__ReadOnlyAttribute(): boolean;
    get ATTR_display_font__DescriptionAttribute(): string;
    get display_font(): FontDescription;
    set display_font(value: FontDescription);
    private _display_backgroundColor1;
    get ATTR_display_backgroundColor1__DisplayName(): string;
    get ATTR_display_backgroundColor1__CategoryAttribute(): string;
    get ATTR_display_backgroundColor1__DescriptionAttribute(): string;
    get display_backgroundColor1(): YDataRendering.YColor;
    set display_backgroundColor1(value: YDataRendering.YColor);
    private _display_backgroundColor2;
    get ATTR_display_backgroundColor2__DisplayName(): string;
    get ATTR_display_backgroundColor2__CategoryAttribute(): string;
    get ATTR_display_backgroundColor2__DescriptionAttribute(): string;
    get display_backgroundColor2(): YDataRendering.YColor;
    set display_backgroundColor2(value: YDataRendering.YColor);
    private _hrzAlignment;
    get ATTR_display_hrzAlignment__DisplayName(): string;
    get ATTR_display_hrzAlignment__CategoryAttribute(): string;
    get ATTR_display_hrzAlignment__DescriptionAttribute(): string;
    get display_hrzAlignment(): YDataRendering.YDigitalDisplay.HrzAlignmentEnumItem;
    set display_hrzAlignment(value: YDataRendering.YDigitalDisplay.HrzAlignmentEnumItem);
    private _hrzAlignmentOfset;
    get ATTR_display_hrzAlignmentOfset__DisplayName(): string;
    get ATTR_display_hrzAlignmentOfset__CategoryAttribute(): string;
    get ATTR_display_hrzAlignmentOfset__DescriptionAttribute(): string;
    get display_hrzAlignmentOfset(): number;
    set display_hrzAlignmentOfset(value: number);
    private _outOfRangeMin;
    get ATTR_display_outOfRangeMin__DisplayName(): string;
    get ATTR_display_outOfRangeMin__CategoryAttribute(): string;
    get ATTR_display_outOfRangeMin__DescriptionAttribute(): string;
    get display_outOfRangeMin(): YoctoVisualization.doubleNan;
    set display_outOfRangeMin(value: YoctoVisualization.doubleNan);
    private _outOfRangeMax;
    get ATTR_display_outOfRangeMax__DisplayName(): string;
    get ATTR_display_outOfRangeMax__CategoryAttribute(): string;
    get ATTR_display_outOfRangeMax__DescriptionAttribute(): string;
    get display_outOfRangeMax(): YoctoVisualization.doubleNan;
    set display_outOfRangeMax(value: YoctoVisualization.doubleNan);
    private _outOfRangeColor;
    get ATTR_display_outOfRangeColor__DisplayName(): string;
    get ATTR_display_outOfRangeColor__CategoryAttribute(): string;
    get ATTR_display_outOfRangeColor__DescriptionAttribute(): string;
    get display_outOfRangeColor(): YDataRendering.YColor;
    set display_outOfRangeColor(value: YDataRendering.YColor);
    private _annotationPanels0;
    get ATTR_display_annotationPanels0__DisplayName(): string;
    get ATTR_display_annotationPanels0__CategoryAttribute(): string;
    get ATTR_display_annotationPanels0__ReadOnlyAttribute(): boolean;
    get ATTR_display_annotationPanels0__DescriptionAttribute(): string;
    get display_annotationPanels0(): AnnotationPanelDescription;
    set display_annotationPanels0(value: AnnotationPanelDescription);
    private _annotationPanels1;
    get ATTR_display_annotationPanels1__DisplayName(): string;
    get ATTR_display_annotationPanels1__CategoryAttribute(): string;
    get ATTR_display_annotationPanels1__ReadOnlyAttribute(): boolean;
    get ATTR_display_annotationPanels1__DescriptionAttribute(): string;
    get display_annotationPanels1(): AnnotationPanelDescription;
    set display_annotationPanels1(value: AnnotationPanelDescription);
}
/****************************************
 * Alarm section
 */
export declare class AlarmSection {
    private _sensor;
    private _index;
    get summary(): string;
    constructor(index: number);
    get ATTR_source__DisplayName(): string;
    get ATTR_source__NotSavedInXMLAttribute(): boolean;
    get ATTR_source__AllowedValues(): string[];
    get ATTR_source__DescriptionAttribute(): string;
    get source(): number;
    set source(value: number);
    get ATTR_condition__DisplayName(): string;
    get ATTR_condition__NotSavedInXMLAttribute(): boolean;
    get ATTR_condition__AllowedValues(): string[];
    get ATTR_condition__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_condition__DescriptionAttribute(): string;
    get condition(): number;
    set condition(value: number);
    setDataSource(sensor: YoctoVisualization.CustomYSensor): void;
    get ATTR_value__DisplayName(): string;
    get ATTR_value__NotSavedInXMLAttribute(): boolean;
    get ATTR_value__DescriptionAttribute(): string;
    get value(): number;
    set value(value: number);
    get ATTR_commandLine__DisplayName(): string;
    get ATTR_commandLine__NotSavedInXMLAttribute(): boolean;
    get ATTR_commandLine__DescriptionAttribute(): string;
    get commandLine(): string;
    set commandLine(value: string);
    get ATTR_delay__DisplayName(): string;
    get ATTR_delay__NotSavedInXMLAttribute(): boolean;
    get ATTR_delay__DescriptionAttribute(): string;
    get delay(): number;
    set delay(value: number);
}
/*********************************
 * SERIES
 */
export declare class ChartSerie {
    private ownerForm;
    private index;
    dataloggerAlreadyLoaded: boolean;
    constructor(defaultColor: YDataRendering.YColor);
    get summary(): string;
    Init(owner: YoctoVisualization.YWidget, serieIndex: number): void;
    private PropagateDataSourceChange;
    private _DataSource_source;
    get ATTR_DataSource_source__DisplayName(): string;
    get ATTR_DataSource_source__CopyToTarget(): boolean;
    get ATTR_DataSource_source__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_DataSource_source__DescriptionAttribute(): string;
    get DataSource_source(): YoctoVisualization.CustomYSensor;
    set DataSource_source(value: YoctoVisualization.CustomYSensor);
    get isSensorReadOnly(): boolean;
    get ATTR_DataSource_freq__DisplayName(): string;
    get ATTR_DataSource_freq__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_freq__CopyToTarget(): boolean;
    get ATTR_DataSource_freq__IsReadonlyCallAttribute(): string;
    get ATTR_DataSource_freq__DescriptionAttribute(): string;
    get ATTR_DataSource_freq__AllowedValues(): string[];
    get DataSource_freq(): string;
    set DataSource_freq(value: string);
    private _DataType;
    get ATTR_DataSource_datatype__DisplayName(): string;
    get ATTR_DataSource_datatype__AllowedValues(): string[];
    get ATTR_DataSource_datatype__CopyToTarget(): boolean;
    get ATTR_DataSource_datatype__DescriptionAttribute(): string;
    get DataSource_datatype(): number;
    set DataSource_datatype(value: number);
    get ATTR_DataSource_recording__DisplayName(): string;
    get ATTR_DataSource_recording__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_recording__IsReadonlyCallAttribute(): string;
    get ATTR_DataSource_recording__CopyToTarget(): boolean;
    get ATTR_DataSource_recording__DescriptionAttribute(): string;
    get DataSource_recording(): boolean;
    set DataSource_recording(value: boolean);
    private _thickness;
    get ATTR_thickness__DisplayName(): string;
    get ATTR_thickness__DescriptionAttribute(): string;
    get thickness(): number;
    set thickness(value: number);
    private _legend;
    get ATTR_legend__DisplayName(): string;
    get ATTR_legend__DescriptionAttribute(): string;
    get legend(): string;
    set legend(value: string);
    private _color;
    get ATTR_color__DisplayName(): string;
    get ATTR_color__DescriptionAttribute(): string;
    get color(): YDataRendering.YColor;
    set color(value: YDataRendering.YColor);
    private _yAxisIndex;
    get ATTR_yAxisIndex__AllowedValues(): string[];
    get ATTR_yAxisIndex__DisplayName(): string;
    get ATTR_yAxisIndex__DescriptionAttribute(): string;
    get yAxisIndex(): number;
    set yAxisIndex(value: number);
    private _DataSource_AlarmSection0;
    get ATTR_DataSource_AlarmSection0__DisplayName(): string;
    get ATTR_DataSource_AlarmSection0__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_AlarmSection0__DescriptionAttribute(): string;
    get DataSource_AlarmSection0(): AlarmSection;
    set DataSource_AlarmSection0(value: AlarmSection);
    private _DataSource_AlarmSection1;
    get ATTR_DataSource_AlarmSection1__DisplayName(): string;
    get ATTR_DataSource_AlarmSection1__NotSavedInXMLAttribute(): boolean;
    get ATTR_DataSource_AlarmSection1__DescriptionAttribute(): string;
    get DataSource_AlarmSection1(): AlarmSection;
    set DataSource_AlarmSection1(value: AlarmSection);
}
export declare class LegendPanelDescription {
    get summary(): string;
    private _enabled;
    get ATTR_enabled__DisplayName(): string;
    get ATTR_enabled__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_enabled__DescriptionAttribute(): string;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _overlap;
    get ATTR_overlap__DisplayName(): string;
    get ATTR_overlap__DescriptionAttribute(): string;
    get overlap(): boolean;
    set overlap(value: boolean);
    private _position;
    get ATTR_position__DisplayName(): string;
    get ATTR_position__DescriptionAttribute(): string;
    get position(): YDataRendering.LegendPanel.PositionEnumItem;
    set position(value: YDataRendering.LegendPanel.PositionEnumItem);
    private _font;
    get ATTR_font__DisplayName(): string;
    get ATTR_font__ReadOnlyAttribute(): boolean;
    get ATTR_font__DescriptionAttribute(): string;
    get font(): FontDescription;
    set font(value: FontDescription);
    private _bgColor;
    get ATTR_bgColor__DisplayName(): string;
    get ATTR_bgColor__DescriptionAttribute(): string;
    get bgColor(): YDataRendering.YColor;
    set bgColor(value: YDataRendering.YColor);
    private _borderColor;
    get ATTR_borderColor__DisplayName(): string;
    get ATTR_borderColor__DescriptionAttribute(): string;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderthickness;
    get ATTR_borderthickness__DisplayName(): string;
    get ATTR_borderthickness__DescriptionAttribute(): string;
    get borderthickness(): number;
    set borderthickness(value: number);
    private _padding;
    get ATTR_padding__DisplayName(): string;
    get ATTR_padding__DescriptionAttribute(): string;
    get padding(): number;
    set padding(value: number);
    private _verticalMargin;
    get ATTR_verticalMargin__DisplayName(): string;
    get ATTR_verticalMargin__DescriptionAttribute(): string;
    get verticalMargin(): number;
    set verticalMargin(value: number);
    private _horizontalMargin;
    get ATTR_horizontalMargin__DisplayName(): string;
    get ATTR_horizontalMargin__DescriptionAttribute(): string;
    get horizontalMargin(): number;
    set horizontalMargin(value: number);
    private _traceWidthFactor;
    get ATTR_traceWidthFactor__DisplayName(): string;
    get ATTR_traceWidthFactor__DescriptionAttribute(): string;
    get traceWidthFactor(): number;
    set traceWidthFactor(value: number);
}
export declare class AnnotationPanelDescription {
    get summary(): string;
    protected _enabled: boolean;
    get ATTR_enabled__DisplayName(): string;
    get ATTR_enabled__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_enabled__DescriptionAttribute(): string;
    get enabled(): boolean;
    set enabled(value: boolean);
    protected _overlap: boolean;
    get ATTR_overlap__DisplayName(): string;
    get ATTR_overlap__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_overlap__DescriptionAttribute(): string;
    get overlap(): boolean;
    set overlap(value: boolean);
    protected _text: string;
    get ATTR_text__DisplayName(): string;
    get ATTR_text__DescriptionAttribute(): string;
    get text(): string;
    set text(value: string);
    protected _panelTextAlign: YDataRendering.GenericPanel.TextAlignEnumItem;
    get ATTR_panelTextAlign__DisplayName(): string;
    get ATTR_panelTextAlign__DescriptionAttribute(): string;
    get panelTextAlign(): YDataRendering.GenericPanel.TextAlignEnumItem;
    set panelTextAlign(value: YDataRendering.GenericPanel.TextAlignEnumItem);
    private _panelHrzAlign;
    get ATTR_panelHrzAlign__DisplayName(): string;
    get ATTR_panelHrzAlign__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_panelHrzAlign__DescriptionAttribute(): string;
    get panelHrzAlign(): YDataRendering.GenericPanel.HorizontalAlignPosEnumItem;
    set panelHrzAlign(value: YDataRendering.GenericPanel.HorizontalAlignPosEnumItem);
    private _positionOffsetX;
    get ATTR_positionOffsetX__DisplayName(): string;
    get ATTR_positionOffsetX__DescriptionAttribute(): string;
    get positionOffsetX(): number;
    set positionOffsetX(value: number);
    private _panelVrtAlign;
    get ATTR_panelVrtAlign__DisplayName(): string;
    get ATTR_panelVrtAlign__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_panelVrtAlign__DescriptionAttribute(): string;
    get panelVrtAlign(): YDataRendering.GenericPanel.VerticalAlignPosEnumItem;
    set panelVrtAlign(value: YDataRendering.GenericPanel.VerticalAlignPosEnumItem);
    private _positionOffsetY;
    get ATTR_positionOffsetY__DisplayName(): string;
    get ATTR_positionOffsetY__DescriptionAttribute(): string;
    get positionOffsetY(): number;
    set positionOffsetY(value: number);
    private _font;
    get ATTR_font__DisplayName(): string;
    get ATTR_font__ReadOnlyAttribute(): boolean;
    get ATTR_font__DescriptionAttribute(): string;
    get font(): FontDescription;
    set font(value: FontDescription);
    private _bgColor;
    get ATTR_bgColor__DisplayName(): string;
    get ATTR_bgColor__DescriptionAttribute(): string;
    get bgColor(): YDataRendering.YColor;
    set bgColor(value: YDataRendering.YColor);
    private _borderColor;
    get ATTR_borderColor__DisplayName(): string;
    get ATTR_borderColor__DescriptionAttribute(): string;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderthickness;
    get ATTR_borderthickness__DisplayName(): string;
    get ATTR_borderthickness__DescriptionAttribute(): string;
    get borderthickness(): number;
    set borderthickness(value: number);
    private _padding;
    get ATTR_padding__DisplayName(): string;
    get ATTR_padding__DescriptionAttribute(): string;
    get padding(): number;
    set padding(value: number);
    constructor(hrzAlignInit?: YDataRendering.GenericPanel.HorizontalAlignPosEnumItem, vrtAlignInit?: YDataRendering.GenericPanel.VerticalAlignPosEnumItem, offsetY?: number, overlap?: boolean, textInit?: string, BgColorInit?: YDataRendering.YColor, BorderColorInit?: YDataRendering.YColor, fontSizeInit?: number, FontColorInit?: YDataRendering.YColor);
}
export declare class AnnotationPanelDescriptionGraph extends AnnotationPanelDescription {
    get ATTR_enabled__DisplayName(): string;
    get ATTR_enabled__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_enabled__DescriptionAttribute(): string;
    get enabled(): boolean;
    set enabled(value: boolean);
    get ATTR_overlap__DisplayName(): string;
    get ATTR_overlap__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_overlap__DescriptionAttribute(): string;
    get overlap(): boolean;
    set overlap(value: boolean);
    get ATTR_text__DisplayName(): string;
    get ATTR_text__DescriptionAttribute(): string;
    get text(): string;
    set text(value: string);
}
export declare class DataTrackerDescription {
    get summary(): string;
    private _enabled;
    get ATTR_enabled__DisplayName(): string;
    get ATTR_enabled__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_enabled__DescriptionAttribute(): string;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _showSerieName;
    get ATTR_showSerieName__DisplayName(): string;
    get ATTR_showSerieName__DescriptionAttribute(): string;
    get showSerieName(): boolean;
    set showSerieName(value: boolean);
    private _showTimeStamp;
    get ATTR_showTimeStamp__DisplayName(): string;
    get ATTR_showTimeStamp__DescriptionAttribute(): string;
    get showTimeStamp(): boolean;
    set showTimeStamp(value: boolean);
    private _dataPrecision;
    get ATTR_dataPrecision__DisplayName(): string;
    get ATTR_dataPrecision__DescriptionAttribute(): string;
    get dataPrecision(): DataTrackerDescription.DataPrecisionEnumItem;
    set dataPrecision(value: DataTrackerDescription.DataPrecisionEnumItem);
    private _diameter;
    get ATTR_diameter__DisplayName(): string;
    get ATTR_diameter__DescriptionAttribute(): string;
    get diameter(): number;
    set diameter(value: number);
    private _handleLength;
    get ATTR_handleLength__DisplayName(): string;
    get ATTR_handleLength__DescriptionAttribute(): string;
    get handleLength(): number;
    set handleLength(value: number);
    private _font;
    get ATTR_font__DisplayName(): string;
    get ATTR_font__ReadOnlyAttribute(): boolean;
    get ATTR_font__DescriptionAttribute(): string;
    get font(): FontDescription;
    set font(value: FontDescription);
    private _bgColor;
    get ATTR_bgColor__DisplayName(): string;
    get ATTR_bgColor__DescriptionAttribute(): string;
    get bgColor(): YDataRendering.YColor;
    set bgColor(value: YDataRendering.YColor);
    private _borderColor;
    get ATTR_borderColor__DisplayName(): string;
    get ATTR_borderColor__DescriptionAttribute(): string;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderthickness;
    get ATTR_borderthickness__DisplayName(): string;
    get ATTR_borderthickness__DescriptionAttribute(): string;
    get borderthickness(): number;
    set borderthickness(value: number);
    private _padding;
    get ATTR_padding__DisplayName(): string;
    get ATTR_padding__DescriptionAttribute(): string;
    get padding(): number;
    set padding(value: number);
    private _detectionDistance;
    get ATTR_detectionDistance__DisplayName(): string;
    get ATTR_detectionDistance__DescriptionAttribute(): string;
    get detectionDistance(): number;
    set detectionDistance(value: number);
}
export declare namespace DataTrackerDescription {
    class DataPrecisionEnumItem extends YDataRendering.YEnumItem {
        constructor(value: any, humanreadable: string, container?: object);
    }
    class DataPrecision extends YDataRendering.YEnum {
        static readonly PRECISION_NOLIMIT: DataPrecisionEnumItem;
        static readonly PRECISION_1: DataPrecisionEnumItem;
        static readonly PRECISION_01: DataPrecisionEnumItem;
        static readonly PRECISION_001: DataPrecisionEnumItem;
        static readonly PRECISION_0001: DataPrecisionEnumItem;
    }
}
export declare class NavigatorDescription {
    get summary(): string;
    constructor();
    private _enabled;
    get ATTR_enabled__DisplayName(): string;
    get ATTR_enabled__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_enabled__DescriptionAttribute(): string;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _bgColor1;
    get ATTR_bgColor1__DisplayName(): string;
    get ATTR_bgColor1__DescriptionAttribute(): string;
    get bgColor1(): YDataRendering.YColor;
    set bgColor1(value: YDataRendering.YColor);
    private _bgColor2;
    get ATTR_bgColor2__DisplayName(): string;
    get ATTR_bgColor2__DescriptionAttribute(): string;
    get bgColor2(): YDataRendering.YColor;
    set bgColor2(value: YDataRendering.YColor);
    private _borderThickness;
    get ATTR_borderThickness__DisplayName(): string;
    get ATTR_borderThickness__DescriptionAttribute(): string;
    get borderThickness(): number;
    set borderThickness(value: number);
    private _borderColor;
    get ATTR_borderColor__DisplayName(): string;
    get ATTR_borderColor__DescriptionAttribute(): string;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _cursorColor;
    get ATTR_cursorColor__DisplayName(): string;
    get ATTR_cursorColor__DescriptionAttribute(): string;
    get cursorColor(): YDataRendering.YColor;
    set cursorColor(value: YDataRendering.YColor);
    private _cursorBorderColor;
    get ATTR_cursorBorderColor__DisplayName(): string;
    get ATTR_cursorBorderColor__DescriptionAttribute(): string;
    get cursorBorderColor(): YDataRendering.YColor;
    set cursorBorderColor(value: YDataRendering.YColor);
    private _yAxisHandling;
    get ATTR_yAxisHandling__DisplayName(): string;
    get ATTR_yAxisHandling__DescriptionAttribute(): string;
    get yAxisHandling(): YDataRendering.Navigator.YAxisHandlingEnumItem;
    set yAxisHandling(value: YDataRendering.Navigator.YAxisHandlingEnumItem);
    private _xAxisThickness;
    get ATTR_xAxisThickness__DisplayName(): string;
    get ATTR_xAxisThickness__DescriptionAttribute(): string;
    get xAxisThickness(): number;
    set xAxisThickness(value: number);
    private _xAxisColor;
    get ATTR_xAxisColor__DisplayName(): string;
    get ATTR_xAxisColor__DescriptionAttribute(): string;
    get xAxisColor(): YDataRendering.YColor;
    set xAxisColor(value: YDataRendering.YColor);
    private _font;
    get ATTR_font__DisplayName(): string;
    get ATTR_font__ReadOnlyAttribute(): boolean;
    get ATTR_font__DescriptionAttribute(): string;
    get font(): FontDescription;
    set font(value: FontDescription);
}
export declare class LegendDescription {
    private _title;
    get ATTR_title__DisplayName(): string;
    get ATTR_title__DescriptionAttribute(): string;
    get title(): string;
    set title(value: string);
    private _font;
    get ATTR_font__DisplayName(): string;
    get ATTR_font__ReadOnlyAttribute(): boolean;
    get ATTR_font__DescriptionAttribute(): string;
    get font(): FontDescription;
    set font(value: FontDescription);
}
export declare class YaxisDescription {
    constructor(index: number, shown: boolean);
    get summary(): string;
    private _visible;
    get ATTR_visible__DisplayName(): string;
    get ATTR_visible__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_visible__DescriptionAttribute(): string;
    get visible(): boolean;
    set visible(value: boolean);
    private _position;
    get ATTR_position__DisplayName(): string;
    get ATTR_position__DescriptionAttribute(): string;
    get position(): YDataRendering.YAxis.HrzPositionEnumItem;
    set position(value: YDataRendering.YAxis.HrzPositionEnumItem);
    private _min;
    get ATTR_min__DisplayName(): string;
    get ATTR_min__DescriptionAttribute(): string;
    get min(): YoctoVisualization.doubleNan;
    set min(value: YoctoVisualization.doubleNan);
    private _max;
    get ATTR_max__DisplayName(): string;
    get ATTR_max__DescriptionAttribute(): string;
    get max(): YoctoVisualization.doubleNan;
    set max(value: YoctoVisualization.doubleNan);
    private _step;
    get ATTR_step__DisplayName(): string;
    get ATTR_step__DescriptionAttribute(): string;
    get step(): YoctoVisualization.doubleNan;
    set step(value: YoctoVisualization.doubleNan);
    private _color;
    get ATTR_color__DisplayName(): string;
    get ATTR_color__DescriptionAttribute(): string;
    get color(): YDataRendering.YColor;
    set color(value: YDataRendering.YColor);
    private _thickness;
    get ATTR_thickness__DisplayName(): string;
    get ATTR_thickness__DescriptionAttribute(): string;
    get thickness(): number;
    set thickness(value: number);
    private _showGrid;
    get ATTR_showGrid__DisplayName(): string;
    get ATTR_showGrid__DescriptionAttribute(): string;
    get showGrid(): boolean;
    set showGrid(value: boolean);
    private _gridColor;
    get ATTR_gridColor__DisplayName(): string;
    get ATTR_gridColor__DescriptionAttribute(): string;
    get gridColor(): YDataRendering.YColor;
    set gridColor(value: YDataRendering.YColor);
    private _gridThickness;
    get ATTR_gridThickness__DisplayName(): string;
    get ATTR_gridThickness__DescriptionAttribute(): string;
    get gridThickness(): number;
    set gridThickness(value: number);
    private _font;
    get ATTR_font__DisplayName(): string;
    get ATTR_font__ReadOnlyAttribute(): boolean;
    get ATTR_font__DescriptionAttribute(): string;
    get font(): FontDescription;
    set font(value: FontDescription);
    private _legend;
    get ATTR_legend__DisplayName(): string;
    get ATTR_legend__DescriptionAttribute(): string;
    get legend(): LegendDescription;
    set legend(value: LegendDescription);
    private _zones0;
    get ATTR_zones0__DisplayName(): string;
    get ATTR_zones0__CategoryAttribute(): string;
    get ATTR_zones0__ReadOnlyAttribute(): boolean;
    get ATTR_zones0__DescriptionAttribute(): string;
    get zones0(): ZoneDescription;
    set zones0(value: ZoneDescription);
    private _zones1;
    get ATTR_zones1__DisplayName(): string;
    get ATTR_zones1__CategoryAttribute(): string;
    get ATTR_zones1__ReadOnlyAttribute(): boolean;
    get ATTR_zones1__DescriptionAttribute(): string;
    get zones1(): ZoneDescription;
    set zones1(value: ZoneDescription);
    private _zones2;
    get ATTR_zones2__DisplayName(): string;
    get ATTR_zones2__CategoryAttribute(): string;
    get ATTR_zones2__ReadOnlyAttribute(): boolean;
    get ATTR_zones2__DescriptionAttribute(): string;
    get zones2(): ZoneDescription;
    set zones2(value: ZoneDescription);
}
export declare class MarkerDescription {
    constructor(defaultText: string);
    get summary(): string;
    private _enabled;
    get ATTR_enabled__DisplayName(): string;
    get ATTR_enabled__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_enabled__DescriptionAttribute(): string;
    get enabled(): boolean;
    set enabled(value: boolean);
    private _text;
    get ATTR_text__DisplayName(): string;
    get ATTR_text__DescriptionAttribute(): string;
    get text(): string;
    set text(value: string);
    private _textAlign;
    get ATTR_textAlign__DisplayName(): string;
    get ATTR_textAlign__DescriptionAttribute(): string;
    get textAlign(): YDataRendering.Marker.TextAlignEnumItem;
    set textAlign(value: YDataRendering.Marker.TextAlignEnumItem);
    private _timereference;
    get ATTR_timereference__DisplayName(): string;
    get ATTR_timereference__ChangeCausesParentRefreshAttribute(): boolean;
    get ATTR_timereference__NotSavedInXMLAttribute(): boolean;
    get ATTR_timereference__DescriptionAttribute(): string;
    get timereference(): YDataRendering.TimeConverter.TimeReferenceEnumItem;
    set timereference(value: YDataRendering.TimeConverter.TimeReferenceEnumItem);
    private _positionOnXAxis;
    get ATTR_positionOnXAxis__DisplayName(): string;
    get ATTR_positionOnXAxis__DescriptionAttribute(): string;
    get positionOnXAxis(): YDataRendering.xAxisPosition;
    set positionOnXAxis(value: YDataRendering.xAxisPosition);
    private _yposition;
    get ATTR_yposition__DisplayName(): string;
    get ATTR_yposition__DescriptionAttribute(): string;
    get yposition(): number;
    set yposition(value: number);
    private _bgColor;
    get ATTR_bgColor__DisplayName(): string;
    get ATTR_bgColor__DescriptionAttribute(): string;
    get bgColor(): YDataRendering.YColor;
    set bgColor(value: YDataRendering.YColor);
    private _borderColor;
    get ATTR_borderColor__DisplayName(): string;
    get ATTR_borderColor__DescriptionAttribute(): string;
    get borderColor(): YDataRendering.YColor;
    set borderColor(value: YDataRendering.YColor);
    private _borderthickness;
    get ATTR_borderthickness__DisplayName(): string;
    get ATTR_borderthickness__DescriptionAttribute(): string;
    get borderthickness(): number;
    set borderthickness(value: number);
    private _padding;
    get ATTR_padding__DisplayName(): string;
    get ATTR_padding__DescriptionAttribute(): string;
    get padding(): number;
    set padding(value: number);
    private _font;
    get ATTR_font__DisplayName(): string;
    get ATTR_font__ReadOnlyAttribute(): boolean;
    get ATTR_font__DescriptionAttribute(): string;
    get font(): FontDescription;
    set font(value: FontDescription);
}
export declare class XaxisDescription {
    private _initialZoom;
    get ATTR_initialZoom__DisplayName(): string;
    get ATTR_initialZoom__DescriptionAttribute(): string;
    get initialZoom(): number;
    set initialZoom(value: number);
    private _initialOffset;
    get ATTR_initialOffset__DisplayName(): string;
    get ATTR_initialOffset__DescriptionAttribute(): string;
    get initialOffset(): number;
    set initialOffset(value: number);
    private _position;
    get ATTR_position__DisplayName(): string;
    get ATTR_position__DescriptionAttribute(): string;
    get position(): YDataRendering.XAxis.VrtPositionEnumItem;
    set position(value: YDataRendering.XAxis.VrtPositionEnumItem);
    private _timeReference;
    get ATTR_timeReference__DisplayName(): string;
    get ATTR_timeReference__DescriptionAttribute(): string;
    get timeReference(): YDataRendering.TimeConverter.TimeReferenceEnumItem;
    set timeReference(value: YDataRendering.TimeConverter.TimeReferenceEnumItem);
    private _overflowHandling;
    get ATTR_overflowHandling__DisplayName(): string;
    get ATTR_overflowHandling__DescriptionAttribute(): string;
    get overflowHandling(): YDataRendering.XAxis.OverflowHandlingEnumItem;
    set overflowHandling(value: YDataRendering.XAxis.OverflowHandlingEnumItem);
    private _color;
    get ATTR_color__DisplayName(): string;
    get ATTR_color__DescriptionAttribute(): string;
    get color(): YDataRendering.YColor;
    set color(value: YDataRendering.YColor);
    private _thickness;
    get ATTR_thickness__DisplayName(): string;
    get ATTR_thickness__DescriptionAttribute(): string;
    get thickness(): number;
    set thickness(value: number);
    private _showGrid;
    get ATTR_showGrid__DisplayName(): string;
    get ATTR_showGrid__DescriptionAttribute(): string;
    get showGrid(): boolean;
    set showGrid(value: boolean);
    private _gridColor;
    get ATTR_gridColor__DisplayName(): string;
    get ATTR_gridColor__DescriptionAttribute(): string;
    get gridColor(): YDataRendering.YColor;
    set gridColor(value: YDataRendering.YColor);
    private _gridThickness;
    get ATTR_gridThickness__DisplayName(): string;
    get ATTR_gridThickness__DescriptionAttribute(): string;
    get gridThickness(): number;
    set gridThickness(value: number);
    private _font;
    get ATTR_font__DisplayName(): string;
    get ATTR_font__ReadOnlyAttribute(): boolean;
    get ATTR_font__DescriptionAttribute(): string;
    get font(): FontDescription;
    set font(value: FontDescription);
    private _legend;
    get ATTR_legend__DisplayName(): string;
    get ATTR_legend__ReadOnlyAttribute(): boolean;
    get ATTR_legend__DescriptionAttribute(): string;
    get legend(): LegendDescription;
    set legend(value: LegendDescription);
    private _markers0;
    get ATTR_markers0__DisplayName(): string;
    get ATTR_markers0__ReadOnlyAttribute(): boolean;
    get ATTR_markers0__CategoryAttribute(): string;
    get ATTR_markers0__DescriptionAttribute(): string;
    get markers0(): MarkerDescription;
    set markers0(value: MarkerDescription);
    private _markers1;
    get ATTR_markers1__DisplayName(): string;
    get ATTR_markers1__ReadOnlyAttribute(): boolean;
    get ATTR_markers1__CategoryAttribute(): string;
    get ATTR_markers1__DescriptionAttribute(): string;
    get markers1(): MarkerDescription;
    set markers1(value: MarkerDescription);
    private _markers2;
    get ATTR_markers2__DisplayName(): string;
    get ATTR_markers2__ReadOnlyAttribute(): boolean;
    get ATTR_markers2__CategoryAttribute(): string;
    get ATTR_markers2__DescriptionAttribute(): string;
    get markers2(): MarkerDescription;
    set markers2(value: MarkerDescription);
    private _markers3;
    get ATTR_markers3__DisplayName(): string;
    get ATTR_markers3__ReadOnlyAttribute(): boolean;
    get ATTR_markers3__CategoryAttribute(): string;
    get ATTR_markers3__DescriptionAttribute(): string;
    get markers3(): MarkerDescription;
    set markers3(value: MarkerDescription);
    private _markers4;
    get ATTR_markers4__DisplayName(): string;
    get ATTR_markers4__ReadOnlyAttribute(): boolean;
    get ATTR_markers4__CategoryAttribute(): string;
    get ATTR_markers4__DescriptionAttribute(): string;
    get markers4(): MarkerDescription;
    set markers4(value: MarkerDescription);
    private _markers5;
    get ATTR_markers5__DisplayName(): string;
    get ATTR_markers5__ReadOnlyAttribute(): boolean;
    get ATTR_markers5__CategoryAttribute(): string;
    get ATTR_markers5__DescriptionAttribute(): string;
    get markers5(): MarkerDescription;
    set markers5(value: MarkerDescription);
    private _markers6;
    get ATTR_markers6__DisplayName(): string;
    get ATTR_markers6__ReadOnlyAttribute(): boolean;
    get ATTR_markers6__CategoryAttribute(): string;
    get ATTR_markers6__DescriptionAttribute(): string;
    get markers6(): MarkerDescription;
    set markers6(value: MarkerDescription);
    private _markers7;
    get ATTR_markers7__DisplayName(): string;
    get ATTR_markers7__ReadOnlyAttribute(): boolean;
    get ATTR_markers7__CategoryAttribute(): string;
    get ATTR_markers7__DescriptionAttribute(): string;
    get markers7(): MarkerDescription;
    set markers7(value: MarkerDescription);
}
export declare class GraphFormProperties extends YoctoVisualization.GenericProperties {
    constructor(initData: YoctoVisualization.YXmlNode | null, owner: YoctoVisualization.YWidget | null);
    IsDataSourceAssigned(): boolean;
    private _Graph_series0;
    get ATTR_Graph_series0__DisplayName(): string;
    get ATTR_Graph_series0__CategoryAttribute(): string;
    get ATTR_Graph_series0__PreExpandedCategoryAttribute(): boolean;
    get ATTR_Graph_series0__PreExpandedAttribute(): boolean;
    get ATTR_Graph_series0__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_series0__DescriptionAttribute(): string;
    get Graph_series0(): ChartSerie;
    set Graph_series0(value: ChartSerie);
    private _Graph_series1;
    get ATTR_Graph_series1__DisplayName(): string;
    get ATTR_Graph_series1__CategoryAttribute(): string;
    get ATTR_Graph_series1__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_series1__DescriptionAttribute(): string;
    get Graph_series1(): ChartSerie;
    set Graph_series1(value: ChartSerie);
    private _Graph_series2;
    get ATTR_Graph_series2__DisplayName(): string;
    get ATTR_Graph_series2__CategoryAttribute(): string;
    get ATTR_Graph_series2__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_series2__DescriptionAttribute(): string;
    get Graph_series2(): ChartSerie;
    set Graph_series2(value: ChartSerie);
    private _Graph_series3;
    get ATTR_Graph_series3__DisplayName(): string;
    get ATTR_Graph_series3__CategoryAttribute(): string;
    get ATTR_Graph_series3__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_series3__DescriptionAttribute(): string;
    get Graph_series3(): ChartSerie;
    set Graph_series3(value: ChartSerie);
    private _Graph_showRecordedData;
    get ATTR_Graph_showRecordedData__DisplayName(): string;
    get ATTR_Graph_showRecordedData__CategoryAttribute(): string;
    get ATTR_Graph_showRecordedData__CopyToTarget(): boolean;
    get ATTR_Graph_showRecordedData__DescriptionAttribute(): string;
    get Graph_showRecordedData(): boolean;
    set Graph_showRecordedData(value: boolean);
    private _Graph_borderColor;
    get ATTR_Graph_borderColor__DisplayName(): string;
    get ATTR_Graph_borderColor__CategoryAttribute(): string;
    get ATTR_Graph_borderColor__DescriptionAttribute(): string;
    get Graph_borderColor(): YDataRendering.YColor;
    set Graph_borderColor(value: YDataRendering.YColor);
    private _Graph_borderThickness;
    get ATTR_Graph_borderThickness__DisplayName(): string;
    get ATTR_Graph_borderThickness__CategoryAttribute(): string;
    get ATTR_Graph_borderThickness__DescriptionAttribute(): string;
    get Graph_borderThickness(): number;
    set Graph_borderThickness(value: number);
    private _Graph_bgColor1;
    get ATTR_Graph_bgColor1__DisplayName(): string;
    get ATTR_Graph_bgColor1__CategoryAttribute(): string;
    get ATTR_Graph_bgColor1__DescriptionAttribute(): string;
    get Graph_bgColor1(): YDataRendering.YColor;
    set Graph_bgColor1(value: YDataRendering.YColor);
    private _Graph_bgColor2;
    get ATTR_Graph_bgColor2__DisplayName(): string;
    get ATTR_Graph_bgColor2__CategoryAttribute(): string;
    get ATTR_Graph_bgColor2__DescriptionAttribute(): string;
    get Graph_bgColor2(): YDataRendering.YColor;
    set Graph_bgColor2(value: YDataRendering.YColor);
    private _Graph_resizeRule;
    get ATTR_Graph_resizeRule__DisplayName(): string;
    get ATTR_Graph_resizeRule__CategoryAttribute(): string;
    get ATTR_Graph_resizeRule__DescriptionAttribute(): string;
    get Graph_resizeRule(): YDataRendering.Proportional.ResizeRuleEnumItem;
    set Graph_resizeRule(value: YDataRendering.Proportional.ResizeRuleEnumItem);
    private _Graph_xAxis;
    get ATTR_Graph_xAxis__DisplayName(): string;
    get ATTR_Graph_xAxis__CategoryAttribute(): string;
    get ATTR_Graph_xAxis__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_xAxis__DescriptionAttribute(): string;
    get Graph_xAxis(): XaxisDescription;
    set Graph_xAxis(value: XaxisDescription);
    private _Graph_yAxes0;
    get ATTR_Graph_yAxes0__DisplayName(): string;
    get ATTR_Graph_yAxes0__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_yAxes0__CategoryAttribute(): string;
    get ATTR_Graph_yAxes0__DescriptionAttribute(): string;
    get Graph_yAxes0(): YaxisDescription;
    set Graph_yAxes0(value: YaxisDescription);
    private _Graph_yAxes1;
    get ATTR_Graph_yAxes1__DisplayName(): string;
    get ATTR_Graph_yAxes1__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_yAxes1__CategoryAttribute(): string;
    get ATTR_Graph_yAxes1__DescriptionAttribute(): string;
    get Graph_yAxes1(): YaxisDescription;
    set Graph_yAxes1(value: YaxisDescription);
    private _Graph_yAxes2;
    get ATTR_Graph_yAxes2__DisplayName(): string;
    get ATTR_Graph_yAxes2__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_yAxes2__CategoryAttribute(): string;
    get ATTR_Graph_yAxes2__DescriptionAttribute(): string;
    get Graph_yAxes2(): YaxisDescription;
    set Graph_yAxes2(value: YaxisDescription);
    private _Graph_legendPanel;
    get ATTR_Graph_legendPanel__DisplayName(): string;
    get ATTR_Graph_legendPanel__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_legendPanel__CategoryAttribute(): string;
    get ATTR_Graph_legendPanel__DescriptionAttribute(): string;
    get Graph_legendPanel(): LegendPanelDescription;
    set Graph_legendPanel(value: LegendPanelDescription);
    private _Graph_dataTracker;
    get ATTR_Graph_dataTracker__DisplayName(): string;
    get ATTR_Graph_dataTracker__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_dataTracker__CategoryAttribute(): string;
    get ATTR_Graph_dataTracker__DescriptionAttribute(): string;
    get Graph_dataTracker(): DataTrackerDescription;
    set Graph_dataTracker(value: DataTrackerDescription);
    private _Graph_navigator;
    get ATTR_Graph_navigator__DisplayName(): string;
    get ATTR_Graph_navigator__CategoryAttribute(): string;
    get ATTR_Graph_navigator__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_navigator__DescriptionAttribute(): string;
    get Graph_navigator(): NavigatorDescription;
    set Graph_navigator(value: NavigatorDescription);
    private _annotationPanels0;
    get ATTR_Graph_annotationPanels0__DisplayName(): string;
    get ATTR_Graph_annotationPanels0__CategoryAttribute(): string;
    get ATTR_Graph_annotationPanels0__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_annotationPanels0__DescriptionAttribute(): string;
    get Graph_annotationPanels0(): AnnotationPanelDescription;
    set Graph_annotationPanels0(value: AnnotationPanelDescription);
    private _annotationPanels1;
    get ATTR_Graph_annotationPanels1__DisplayName(): string;
    get ATTR_Graph_annotationPanels1__CategoryAttribute(): string;
    get ATTR_Graph_annotationPanels1__ReadOnlyAttribute(): boolean;
    get ATTR_Graph_annotationPanels1__DescriptionAttribute(): string;
    get Graph_annotationPanels1(): AnnotationPanelDescription;
    set Graph_annotationPanels1(value: AnnotationPanelDescription);
}


// from contextMenu.d.ts
export interface MenuItemCallBack {
    (): void;
}
export interface MenuOpenCallBack {
    (mouseX: number, mouseY: number): void;
}
export declare class ContextMenuSeparator {
    private TR;
    private TD_icon;
    private TD_caption;
    constructor();
    toString(): string;
    get focusable(): boolean;
    parentMenuisClosing(): void;
    get domData(): HTMLTableRowElement;
}
export declare class ContextMenuItemBase {
    private _TR_keydown;
    private _TR_mouseover;
    private _TR_mouseout;
    private _A_click;
    private _A_mouseover;
    private _A_mouseout;
    private _TR_focusin;
    private _TR_focusout;
    protected TR: HTMLTableRowElement;
    protected TD_icon: HTMLTableCellElement;
    protected TD_caption: HTMLTableCellElement;
    protected A_caption: HTMLAnchorElement;
    protected _menu: ContextMenuBase;
    protected _clickHidesMenu: boolean;
    protected _userdata: object | null;
    get userdata(): object | null;
    set userdata(value: object | null);
    constructor(menu: ContextMenuBase, icon: string | null, caption: string);
    toString(): string;
    get focusable(): boolean;
    protected activate(): void;
    focus(): void;
    protected focusIn(): void;
    protected focusOut(): void;
    removeAndDestroy(): void;
    set caption(value: string);
    get caption(): string;
    protected keydown(e: KeyboardEvent): void;
    protected mouserOver(e: MouseEvent | null): void;
    protected mouserOut(e: MouseEvent | null): void;
    get domData(): HTMLTableRowElement;
    get visible(): boolean;
    set visible(value: boolean);
    parentMenuisClosing(): void;
    closeMenu(all: boolean): void;
}
export declare class ContextMenuItem extends ContextMenuItemBase {
    protected _callback: MenuItemCallBack | null;
    protected activate(): void;
    constructor(menu: ContextMenuBase, icon: string | null, caption: string, callback: MenuItemCallBack | null);
}
export declare class ContextMenuItemSubMenuEntry extends ContextMenuItem {
    private _submenu;
    private _parentmenu;
    protected TD_arrow: HTMLTableCellElement;
    constructor(menu: ContextMenuBase, icon: string, caption: string, submenu: ContextMenuBase);
    protected keydown(e: KeyboardEvent): void;
    removeAndDestroy(): void;
    protected activate(): void;
    get submenu(): ContextMenuBase;
    protected showSubmenu(): void;
    protected focusIn(): void;
    protected focusOut(): void;
    parentMenuisClosing(): void;
    protected mouserOver(e: MouseEvent): void;
    protected mouserOut(e: MouseEvent): void;
}
declare class ContextMenuBase {
    static readonly SEPARATOR_MARKER = "separator";
    static readonly iconBGColor: string;
    static readonly captionBgColor: string;
    static readonly ActiveColor: string;
    protected _visible: boolean;
    protected _openCallback: MenuOpenCallBack | null;
    protected _zIndex: number;
    protected _parentmenu: ContextMenuBase | null;
    protected _parentMenuItem: ContextMenuItemBase | null;
    get parentMenuItem(): ContextMenuItemBase | null;
    set parentMenuItem(value: ContextMenuItemBase | null);
    private _timer;
    protected _userdata: object | null;
    get userdata(): object | null;
    set userdata(value: object | null);
    protected Menutable: HTMLTableElement;
    constructor(baseSize: number, openCallback: MenuOpenCallBack | null, fontFamily?: string);
    closeAll(): void;
    cancelDelayedAction(): void;
    setDelayedAction(action: MenuItemCallBack): void;
    get parentMenu(): ContextMenuBase | null;
    destroy(): void;
    focusFirst(): void;
    toString(): string;
    isXYOnMenu(x: number, y: number): boolean;
    activateNext(source: ContextMenuItemBase): void;
    activatePrevious(source: ContextMenuItemBase): void;
    get width(): number;
    closeSubmenus(): void;
    get zIndex(): number;
    set zIndex(value: number);
    get visible(): boolean;
    set visible(value: boolean);
    close(): void;
    refresh(): void;
    addMenuItem(icon: string | null, caption: string, callback: MenuItemCallBack): ContextMenuItem;
    get menuItemsCount(): number;
    closeSubMenusExcept(doNotClose: ContextMenuBase | null): void;
    subMenuisOpening(source: ContextMenuBase): void;
    addSubMenuItem(icon: string, caption: string, submenu: ContextMenuBase): ContextMenuItem;
    clearAllContents(): void;
    AddSeparator(): ContextMenuSeparator;
    showContextMenu(x: number, y: number): void;
}
export declare class ContextSubMenu extends ContextMenuBase {
    constructor(baseSize: number, parentMenu: ContextMenuBase, openCallback: MenuOpenCallBack | null, fontFamily?: string);
    showContextMenu(x: number, y: number): void;
}
export declare class ContextMenu extends ContextMenuBase {
    constructor(baseSize: number, openCallback: MenuOpenCallBack, fontFamily?: string);
    private click;
    showContextMenu(x: number, y: number): void;
}
export {};


// from ressources.d.ts
export declare class ressources {
    private static SVGheader;
    private static SVGFooter;
    private static addIconTransparency;
    private static addIconSrcCode;
    private static deleteIconSrcCode;
    private static IconSourceCode;
    static GraphIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static SolidGaugeIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static RawDataIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static ConfigureIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static DigitalDisplayIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static AngularGaugeIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static EditIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static AllIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static TrashIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static SaveIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static SaveNeededIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static snapshotIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static CloseIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static MoveToRightIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static MoveToLeftIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static ExpandIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static OkIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static FailedIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static DontKnowIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static infoIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static ColapseIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static AddMarkerIcon(size: string, index: number): string;
    static AddMarker(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static EraseDatalogger(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static resetViewPort(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static DeleteMarker(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
    static targetIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static DotDotDotIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean, title: string): string;
    static LogFileIcon(size: string, shadow: boolean, semitransparent: boolean, addIcon: boolean, deleteIcon: boolean): string;
}


// from common.d.ts
export declare class utils_common {
    static flattenChunks(chunks: Uint8Array[]): Uint8Array;
}


// from strings.d.ts
export declare class Pako_strings {
    private static STR_APPLY_UIA_OK;
    private static readonly _utf8len;
    private static _init;
    static string2buf(str: string): Uint8Array;
    static buf2binstring(buf: number[], len: number): string;
    static buf2string(buf: Uint8Array, max: number): string;
    static utf8border(buf: Uint8Array, max: number): number;
    private static initDone;
}


// from utilsFull.d.ts


// from deflate.d.ts
import * as PAKO from "./Pakofull.js";
/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/
/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/
/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/
/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/
/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
export declare class Pako_deflate_option {
    level: number;
    method: number;
    chunkSize: number;
    windowBits: number;
    memLevel: number;
    strategy: number;
    raw: boolean;
    gzip: boolean;
    header: PAKO.zlib_GZheader | null;
    dictionary: Uint8Array | null;
    ignore_os: boolean;
    constructor(CustOption?: {});
    static ApplyCustomOptions(StdOption: Pako_deflate_option, CustOption?: {}): void;
}
export declare class Pako_Deflate {
    private options;
    private err;
    private msg;
    private ended;
    private chunks;
    private strm;
    private _dict_set;
    private result;
    constructor(options?: {});
    /**
     * Deflate#push(data[, flush_mode]) -> Boolean
     * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
     *   converted to utf8 byte sequence.
     * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
     *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
     *
     * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
     * new compressed chunks. Returns `true` on success. The last data block must
     * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
     * buffers and call [[Deflate#onEnd]].
     *
     * On fail call [[Deflate#onEnd]] with error code and return false.
     *
     * ##### Example
     *
     * ```javascript
     * push(chunk, false); // push one of data chunks
     * ...
     * push(chunk, true);  // push last chunk
     * ```
     **/
    push(data: Uint8Array | ArrayBuffer | String, flush_mode: Number | Boolean): boolean;
    /**
     * Deflate#onData(chunk) -> Void
     * - chunk (Uint8Array): output data.
     *
     * By default, stores data blocks in `chunks[]` property and glue
     * those in `onEnd`. Override this handler, if you need another behaviour.
     **/
    onData(chunk: Uint8Array): void;
    /**
     * Deflate#onEnd(status) -> Void
     * - status (Number): deflate status. 0 (Z_OK) on success,
     *   other if not.
     *
     * Called once after you tell deflate that the input stream is
     * complete (Z_FINISH). By default - join collected chunks,
     * free memory and fill `results` / `err` properties.
     **/
    onEnd(status: number): void;
    /**
     * deflate(data[, options]) -> Uint8Array
     * - data (Uint8Array|String): input data to compress.
     * - options (Object): zlib deflate options.
     *
     * Compress `data` with deflate algorithm and `options`.
     *
     * Supported options are:
     *
     * - level
     * - windowBits
     * - memLevel
     * - strategy
     * - dictionary
     *
     * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
     * for more information on these.
     *
     * Sugar (options):
     *
     * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
     *   negative windowBits implicitly.
     *
     * ##### Example:
     *
     * ```javascript
     * const pako = require('pako')
     * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
     *
     * console.log(pako.deflate(data));
     * ```
     **/
    static deflate(input: Uint8Array | String, options: {}): Uint8Array | null;
    /**
     * deflateRaw(data[, options]) -> Uint8Array
     * - data (Uint8Array|String): input data to compress.
     * - options (Object): zlib deflate options.
     *
     * The same as [[deflate]], but creates raw data, without wrapper
     * (header and adler32 crc).
     **/
    static deflateRaw(input: Uint8Array | String, options: {}): Uint8Array | null;
    /**
     * gzip(data[, options]) -> Uint8Array
     * - data (Uint8Array|String): input data to compress.
     * - options (Object): zlib deflate options.
     *
     * The same as [[deflate]], but create gzip wrapper instead of
     * deflate one.
     **/
    static gzip(input: Uint8Array | String, options?: {}): Uint8Array | null;
}


// from adler32.d.ts
export declare class zlib_adler32 {
    static adler32(adler: number, buf: Uint8Array, len: number, pos: number): number;
}


// from constants.d.ts
export declare class zlib_constants {
    static readonly Z_NO_FLUSH: number;
    static readonly Z_PARTIAL_FLUSH: number;
    static readonly Z_SYNC_FLUSH: number;
    static readonly Z_FULL_FLUSH: number;
    static readonly Z_FINISH: number;
    static readonly Z_BLOCK: number;
    static readonly Z_TREES: number;
    static readonly Z_OK: number;
    static readonly Z_STREAM_END: number;
    static readonly Z_NEED_DICT: number;
    static readonly Z_ERRNO: number;
    static readonly Z_STREAM_ERROR: number;
    static readonly Z_DATA_ERROR: number;
    static readonly Z_MEM_ERROR: number;
    static readonly Z_BUF_ERROR: number;
    static readonly Z_NO_COMPRESSION: number;
    static readonly Z_BEST_SPEED: number;
    static readonly Z_BEST_COMPRESSION: number;
    static readonly Z_DEFAULT_COMPRESSION: number;
    static readonly Z_FILTERED: number;
    static readonly Z_HUFFMAN_ONLY: number;
    static readonly Z_RLE: number;
    static readonly Z_FIXED: number;
    static readonly Z_DEFAULT_STRATEGY: number;
    static readonly Z_BINARY: number;
    static readonly Z_TEXT: number;
    static readonly Z_UNKNOWN: number;
    static readonly Z_DEFLATED: number;
}


// from crc32.d.ts
export declare class zlib_crc32 {
    private static makeTable;
    private static readonly crcTable;
    static crc32(crc: number, buf: Uint8Array, len: number, pos: number): number;
}


// from deflate.d.ts
import * as ZLIB from "./zlibfull.js";
export declare class zlib_DeflateState {
    strm: any;
    status: number;
    pending_buf: Uint8Array | null;
    pending_buf_size: number;
    pending_out: number;
    pending: number;
    wrap: number;
    gzhead: any;
    gzindex: number;
    method: number;
    last_flush: number;
    w_size: number;
    w_bits: number;
    w_mask: number;
    window: any;
    window_size: number;
    prev: any;
    head: Uint16Array | null;
    ins_h: number;
    hash_size: number;
    hash_bits: number;
    hash_mask: number;
    hash_shift: number;
    block_start: number;
    match_length: number;
    prev_match: number;
    match_available: number;
    strstart: number;
    match_start: number;
    lookahead: number;
    prev_length: number;
    max_chain_length: number;
    max_lazy_match: number;
    level: number;
    strategy: number;
    good_match: number;
    nice_match: number;
    dyn_ltree: Uint16Array;
    dyn_dtree: Uint16Array;
    bl_tree: Uint16Array;
    l_desc: any;
    d_desc: any;
    bl_desc: any;
    bl_count: Uint16Array;
    heap: Uint16Array;
    heap_len: number;
    heap_max: number;
    depth: Uint16Array;
    l_buf: number;
    lit_bufsize: number;
    last_lit: number;
    d_buf: number;
    opt_len: number;
    static_len: number;
    matches: number;
    insert: number;
    bi_buf: number;
    bi_valid: number;
    constructor();
}
export declare class zlib_deflate {
    private static readonly MAX_MEM_LEVEL;
    private static readonly MAX_WBITS;
    private static readonly DEF_MEM_LEVEL;
    private static readonly LENGTH_CODES;
    private static readonly LITERALS;
    private static readonly L_CODES;
    private static readonly D_CODES;
    private static readonly BL_CODES;
    private static readonly HEAP_SIZE;
    private static readonly MAX_BITS;
    private static readonly MIN_MATCH;
    private static readonly MAX_MATCH;
    private static readonly MIN_LOOKAHEAD;
    private static readonly PRESET_DICT;
    private static readonly INIT_STATE;
    private static readonly EXTRA_STATE;
    private static readonly NAME_STATE;
    private static readonly COMMENT_STATE;
    private static readonly HCRC_STATE;
    private static readonly BUSY_STATE;
    private static readonly FINISH_STATE;
    private static readonly BS_NEED_MORE;
    private static readonly BS_BLOCK_DONE;
    private static readonly BS_FINISH_STARTED;
    private static readonly BS_FINISH_DONE;
    private static readonly OS_CODE;
    private static err;
    private static rank;
    private zero;
    private static HASH_ZLIB;
    private static HASH;
    private static flush_pending;
    private static flush_block_only;
    private static put_byte;
    private static putShortMSB;
    private static read_buf;
    private static longest_match;
    private static fill_window;
    private static deflate_stored;
    private static deflate_fast;
    private static deflate_slow;
    private static deflate_rle;
    private static deflate_huff;
    private static configuration_table;
    private static lm_init;
    static deflateResetKeep(strm: ZLIB.zlib_ZStream): number;
    static deflateReset(strm: ZLIB.zlib_ZStream): number;
    static deflateSetHeader(strm: ZLIB.zlib_ZStream, head: ZLIB.zlib_GZheader): number;
    static deflateInit2(strm: ZLIB.zlib_ZStream, level: number, method: number, windowBits: number, memLevel: number, strategy: number): number;
    static deflateInit(strm: ZLIB.zlib_ZStream, level: number): number;
    static deflate(strm: ZLIB.zlib_ZStream, flush: number): number;
    static deflateEnd(strm: ZLIB.zlib_ZStream): number;
    static deflateSetDictionary(strm: ZLIB.zlib_ZStream, dictionary: Uint8Array): number;
}


// from trees.d.ts
import * as ZLIB from "./zlibfull.js";
export declare class zlib_Pako_trees {
    private static readonly Z_FIXED;
    private static readonly Z_BINARY;
    private static readonly Z_TEXT;
    private static readonly Z_UNKNOWN;
    static zero(buf: Uint16Array): void;
    private static readonly STORED_BLOCK;
    private static readonly STATIC_TREES;
    private static readonly DYN_TREES;
    static readonly MIN_MATCH: number;
    static readonly MAX_MATCH: number;
    static readonly LENGTH_CODES: number;
    static readonly LITERALS: number;
    static readonly L_CODES: number;
    static readonly D_CODES: number;
    static readonly BL_CODES: number;
    static readonly HEAP_SIZE: number;
    static readonly MAX_BITS: number;
    private static readonly Buf_size;
    private static readonly MAX_BL_BITS;
    private static readonly END_BLOCK;
    private static readonly REP_3_6;
    private static readonly REPZ_3_10;
    private static readonly REPZ_11_138;
    private static readonly extra_lbits;
    private static readonly extra_dbits;
    private static readonly extra_blbits;
    private static readonly bl_order;
    private static readonly DIST_CODE_LEN;
    private static static_ltree;
    private static static_dtree;
    private static _dist_code;
    private static _length_code;
    private static base_length;
    private static base_dist;
    private static Zeroinit;
    private static static_l_desc;
    private static static_d_desc;
    private static static_bl_desc;
    private static d_code;
    private static put_short;
    private static send_bits;
    private static send_code;
    private static bi_reverse;
    private static bi_flush;
    private static gen_bitlen;
    static gen_codes(tree: Uint16Array, max_code: number, bl_count: Uint16Array): void;
    static tr_static_init(): void;
    private static init_block;
    private static bi_windup;
    private static copy_block;
    private static smaller;
    private static pqdownheap;
    private static compress_block;
    private static build_tree;
    private static scan_tree;
    private static send_tree;
    private static build_bl_tree;
    private static send_all_trees;
    private static detect_data_type;
    private static static_init_done;
    static _tr_init(s: ZLIB.zlib_DeflateState): void;
    static _tr_stored_block(s: ZLIB.zlib_DeflateState, buf: number, stored_len: number, last: boolean): void;
    static _tr_align(s: ZLIB.zlib_DeflateState): void;
    static _tr_flush_block(s: ZLIB.zlib_DeflateState, buf: number, stored_len: number, last: boolean): void;
    static _tr_tally(s: ZLIB.zlib_DeflateState, dist: number, lc: number): boolean;
    private static readonly initDone;
}


// from gzheader.d.ts
export declare class zlib_GZheader {
    text: number;
    time: number;
    xflags: number;
    os: number;
    extra: any;
    extra_len: number;
    name: string;
    comment: string;
    hcrc: number;
    done: boolean;
}


// from inffast.d.ts
import * as ZLIB from "./zlibfull.js";
export declare class zlib_inffast {
    private static readonly BAD;
    private static readonly TYPE;
    static inflate_fast(strm: ZLIB.zlib_ZStream, start: number): void;
}


// from inflate.d.ts
import * as ZLIB from "./zlibfull.js";
export declare class zlib_InflateState {
    mode: number;
    last: number;
    wrap: number;
    havedict: number;
    flags: number;
    dmax: number;
    check: number;
    total: number;
    head: any;
    wbits: number;
    wsize: number;
    whave: number;
    wnext: number;
    window: any;
    hold: number;
    bits: number;
    length: number;
    offset: number;
    extra: number;
    lencode: any;
    distcode: any;
    lenbits: number;
    distbits: number;
    ncode: number;
    nlen: number;
    ndist: number;
    have: number;
    next: any;
    lens: Uint16Array;
    work: Uint16Array;
    lendyn: any;
    distdyn: any;
    sane: number;
    back: number;
    was: number;
}
export declare class zlib_inflate {
    private static readonly CODES;
    private static readonly LENS;
    private static readonly DISTS;
    private static readonly HEAD;
    private static readonly FLAGS;
    private static readonly TIME;
    private static readonly OS;
    private static readonly EXLEN;
    private static readonly EXTRA;
    private static readonly NAME;
    private static readonly COMMENT;
    private static readonly HCRC;
    private static readonly DICTID;
    private static readonly DICT;
    private static readonly TYPE;
    private static readonly TYPEDO;
    private static readonly STORED;
    private static readonly COPY_;
    private static readonly COPY;
    private static readonly TABLE;
    private static readonly LENLENS;
    private static readonly CODELENS;
    private static readonly LEN_;
    private static readonly LEN;
    private static readonly LENEXT;
    private static readonly DIST;
    private static readonly DISTEXT;
    private static readonly MATCH;
    private static readonly LIT;
    private static readonly CHECK;
    private static readonly LENGTH;
    private static readonly DONE;
    private static readonly BAD;
    private static readonly MEM;
    private static readonly SYNC;
    private static readonly ENOUGH_LENS;
    private static readonly ENOUGH_DISTS;
    private static readonly MAX_WBITS;
    private static readonly DEF_WBITS;
    private static zswap32;
    static inflateResetKeep(strm: ZLIB.zlib_ZStream): number;
    static inflateReset(strm: ZLIB.zlib_ZStream): number;
    static inflateReset2(strm: ZLIB.zlib_ZStream, windowBits: number): number;
    static inflateInit2(strm: ZLIB.zlib_ZStream, windowBits: number): number;
    private static inflateInit;
    private static virgin;
    private static lenfix;
    private static distfix;
    private static fixedtables;
    static updatewindow(strm: ZLIB.zlib_ZStream, src: Uint8Array, end: number, copy: number): number;
    static inflate(strm: ZLIB.zlib_ZStream, flush: number): number;
    static inflateEnd(strm: ZLIB.zlib_ZStream): number;
    static inflateGetHeader(strm: ZLIB.zlib_ZStream, head: ZLIB.zlib_GZheader): number;
    static inflateSetDictionary(strm: ZLIB.zlib_ZStream, dictionary: Uint8Array): number;
}


// from messages.d.ts
export declare class zlib_messages {
    static msg(index: number): string;
}


// from inftrees.d.ts
declare class zlib_opt {
    bits: number;
    constructor(bits: number);
}
export declare class zlib_inftrees {
    private static readonly MAXBITS;
    private static readonly ENOUGH_LENS;
    private static readonly ENOUGH_DISTS;
    private static readonly CODES;
    private static readonly LENS;
    private static readonly DISTS;
    private static readonly lbase;
    private static readonly lext;
    private static readonly dbase;
    private static readonly dext;
    static inflate_table(type: number, lens: Uint16Array, lens_index: number, codes: number, table: Int32Array, table_index: number, work: Uint16Array, opts: zlib_opt): 0 | 1 | -1;
}
export {};


// from zstream.d.ts
import * as ZLIB from "./zlibfull.js";
export declare class zlib_ZStream {
    input: any;
    next_in: number;
    avail_in: number;
    total_in: number;
    output: any;
    next_out: number;
    avail_out: number;
    total_out: number;
    msg: string;
    state: ZLIB.zlib_DeflateState | ZLIB.zlib_InflateState | null;
    data_type: number;
    adler: number;
}


// from zlibfull.d.ts


// from inflate.d.ts
/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/
/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/
/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/
/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/
/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
export declare class Pako_inflate_option {
    chunkSize: number;
    windowBits: number;
    to: string;
    raw: boolean;
    dictionary: Uint8Array | null;
    constructor(CustOption?: {});
    static ApplyCustomOptions(StdOption: Pako_inflate_option, CustOption?: {}): void;
}
export declare class Pako_Inflate {
    options: Pako_inflate_option;
    err: number;
    private msg;
    private ended;
    private chunks;
    private strm;
    private header;
    result: Uint8Array | string | null;
    constructor(options: {});
    /**
     * Inflate#push(data[, flush_mode]) -> Boolean
     * - data (Uint8Array|ArrayBuffer): input data
     * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
     *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
     *   `true` means Z_FINISH.
     *
     * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
     * new output chunks. Returns `true` on success. If end of stream detected,
     * [[Inflate#onEnd]] will be called.
     *
     * `flush_mode` is not needed for normal operation, because end of stream
     * detected automatically. You may try to use it for advanced things, but
     * this functionality was not tested.
     *
     * On fail call [[Inflate#onEnd]] with error code and return false.
     *
     * ##### Example
     *
     * ```javascript
     * push(chunk, false); // push one of data chunks
     * ...
     * push(chunk, true);  // push last chunk
     * ```
     **/
    push(data: Uint8Array, flush_mode: Number | Boolean): boolean;
    /**
     * Inflate#onData(chunk) -> Void
     * - chunk (Uint8Array|String): output data. When string output requested,
     *   each chunk will be string.
     *
     * By default, stores data blocks in `chunks[]` property and glue
     * those in `onEnd`. Override this handler, if you need another behaviour.
     **/
    onData(chunk: Uint8Array | string): void;
    /**
     * Inflate#onEnd(status) -> Void
     * - status (Number): inflate status. 0 (Z_OK) on success,
     *   other if not.
     *
     * Called either after you tell inflate that the input stream is
     * complete (Z_FINISH). By default - join collected chunks,
     * free memory and fill `results` / `err` properties.
     **/
    onEnd(status: number): void;
    /**
     * inflate(data[, options]) -> Uint8Array|String
     * - data (Uint8Array): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * Decompress `data` with inflate/ungzip and `options`. Autodetect
     * format via wrapper header by default. That's why we don't provide
     * separate `ungzip` method.
     *
     * Supported options are:
     *
     * - windowBits
     *
     * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
     * for more information.
     *
     * Sugar (options):
     *
     * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
     *   negative windowBits implicitly.
     * - `to` (String) - if equal to 'string', then result will be converted
     *   from utf8 to utf16 (javascript) string. When string output requested,
     *   chunk length can differ from `chunkSize`, depending on content.
     *
     *
     * ##### Example:
     *
     * ```javascript
     * const pako = require('pako');
     * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
     * let output;
     *
     * try {
     *   output = pako.inflate(input);
     * } catch (err)
     *   console.log(err);
     * }
     * ```
     **/
    static inflate(input: Uint8Array, options: {}): Uint8Array | string | null;
    /**
     * inflateRaw(data[, options]) -> Uint8Array|String
     * - data (Uint8Array): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * The same as [[inflate]], but creates raw data, without wrapper
     * (header and adler32 crc).
     **/
    inflateRaw(input: Uint8Array, options: {}): Uint8Array | string | null;
    /**
     * ungzip(data[, options]) -> Uint8Array|String
     * - data (Uint8Array): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * Just shortcut to [[inflate]], because it autodetects format
     * by header.content. Done for convenience.
     **/
    static ungzip(input: Uint8Array, options: {}): Uint8Array | string | null;
}


// from Pakofull.d.ts


// from webPage.d.ts
import * as YoctoVisualization from "./YoctoVisualizationFull.js";
import * as YoctoAPI from "./YoctoApiFull.js";
export interface XMLConfigSaveFunction {
    (xmlDataToSave: string, completedCallback?: XMLConfigSaveFunctionCompleted): Promise<boolean>;
}
export interface XMLConfigSaveFunctionCompleted {
    (success: boolean, message: string): void;
}
export interface XMLConfigFileChangedCallback {
    (newXmlData: string): void;
}
export interface ConfigChangeHandler {
    (m: YoctoAPI.YModule): Promise<string | null>;
}
export declare class YWebPage {
    private static readonly baseSize;
    private static xmlDataCRC;
    private static manager;
    private static widgets;
    private static _contextMenu;
    private static _contextMarkerSubMenu;
    private static _contextWidgetsSubMenu;
    private static _widgetsMenuItem;
    private static _markersSubMenuItems;
    private static _resetDataViewMenuItem;
    static get resetDataViewMenuItem(): YoctoVisualization.ContextMenuItem;
    private static _snapshotMenuItem;
    static get snapshotMenuItem(): YoctoVisualization.ContextMenuItem;
    private static _MarkerCountPerXaxis;
    private static applicationGlobalinit;
    private static RegisterDeviceArrivalCallback;
    private static RegisterDeviceRemovalCallback;
    private static showLogsWindow;
    private static snapShot;
    private static menuIsOpening;
    private static resetDataView;
    static sensorListHaschanged(): void;
    static EmptyReadonlyConfig(): void;
    static ForceReloadConfig(newXMLdata: string): Promise<void>;
    private static ConfigChangedConfirmWindows;
    static ConfigChanged(newXMLdata: string): void;
    private static loadFromXML;
    static run(xmlData: string, ExternalConfigChange?: ConfigChangeHandler, saveFunction?: XMLConfigSaveFunction): void;
    private static pageIsleaving;
    static get readonly(): boolean;
    private static save;
    private static handleSavedNotification;
}
export declare class HTTPrequestResult {
    private _data;
    private _status;
    private _statusText;
    constructor(data: Uint8Array | null, status: number, statusText: string);
    get data(): Uint8Array | null;
    get status(): number;
    get statusText(): string;
}
export declare class HubInfo {
    private _protocol;
    private _addr;
    private _port;
    private _path;
    private _userPassword;
    private _adminPassword;
    private _cred;
    private _serial;
    private _srvusername;
    private _srvpassword;
    get protocol(): string;
    get addr(): string;
    get port(): number;
    get path(): string;
    get userPassword(): boolean;
    get adminPassword(): boolean;
    get serial(): string;
    get srvUsername(): string;
    get srvPassword(): string;
    constructor(protocol: string, addr: string, port: number, path: string, srvusername?: string | null, srvpassword?: string | null);
    get_hubUrl(user?: string, password?: string): string;
    makeRequest(): Promise<boolean | number>;
    private findChild;
    findOutCredentialsFromConfigFile(xmlData?: string): void;
}
export declare class YoctoHubFileHandler {
    private static signatureStart;
    private static signatureEnd;
    private info;
    private filename;
    private xmldata;
    private htmlSrcCode;
    private FileSystemAccessDenied;
    private _XMLConfigFileChanged;
    constructor(hubInfo: HubInfo);
    init(defaultXmlConfigFileContents?: string): Promise<void>;
    disconnect(): Promise<void>;
    static start(defaultXmlConfigFileContents?: string): Promise<YoctoVisualization.YoctoHubFileHandler>;
    get xmlConfigData(): string;
    static makeRequest(method: string, url: string, username?: string | null, password?: string | null): Promise<HTTPrequestResult>;
}


// from logForm.d.ts
export declare class logForm {
    private static _window;
    private static _contents;
    private static _lines;
    static show(): void;
    private static addLine;
    private static padStart;
    static dateToString(d: Date): string;
    static log(st: string): void;
    static logNOTS(st: string): void;
}


// from rawDataForm.d.ts
export declare class rawDataForm {
    private static _window;
    private static _contents;
    private static _datacontents;
    private static _sensorsList;
    private static _optionsList;
    private static _statusline;
    private static _lines;
    private static readonly topMargin;
    private static readonly sensorListWidth;
    private static readonly MAXRAWDATAROWS;
    private static readonly STATUSLINEHEIGHT;
    private static _optionAVG;
    private static _optionMAX;
    private static _optionMIN;
    private static _dataTable;
    private static _selection;
    static hide(): void;
    static show(): void;
    static refresh(): void;
    private static padStart;
    private static UnixTimeStampTostring;
    private static RefreshContents;
    private static getCvsdata;
    static export(): void;
}


// from windowManager.d.ts
export interface buttonClickCallback {
    (source: button): void;
}
export interface confirmCallback {
    (userdata: object): void;
}
export interface windowIsClosingCallBack {
    (source: YWindow): void;
}
export declare class button {
    private _action;
    private _link;
    private _enabled;
    private _visible;
    private _caption;
    constructor(caption: string, action: buttonClickCallback, sizeCoefOverload?: number);
    get Element(): HTMLAnchorElement;
    set tabIndex(index: number);
    focus(): void;
    get visible(): boolean;
    set visible(value: boolean);
    get enabled(): boolean;
    set enabled(value: boolean);
    performAction(): void;
    showShortcut(enable: boolean): void;
    private enable;
}
export declare const enum WindowPositionType {
    REGULAR = 0,
    CENTERED = 1,
    SIDEANCHORED = 2
}
export declare class newWindowParam {
    createNow: boolean;
    left: number;
    top: number;
    positionType: WindowPositionType;
    width: number;
    height: number;
    isModal: boolean;
    showShadow: boolean;
    showContainerBorders: boolean;
    showHeader: boolean;
    title: string;
    closeIcon: boolean;
    headerBgColor: string;
    bottomKeepClear: number;
    contentsDefaultFontSize: number;
    contentsDefaultFontFamily: string;
    closingCallBack: windowIsClosingCallBack | null;
    WindowBackgroundColor: string;
    WindowBorder: string;
    WindowPadding: number;
    WindowInnerBorderColor: string;
    WindowInnerBackgroundColor: string;
    WindowInnerBorder: string;
    WindowHeaderBackgroundColor: string;
    WindowHeaderColor: string;
    WindowHeaderBorder: string;
    private _GUICoef;
    WindowHeaderHeight: number;
    WindowHeaderFontSize: number;
    WindowHeaderFontFamily: string;
    buttons: button[];
    get GUICoef(): number;
    constructor(sizeCoefOverload?: number);
    clone(): newWindowParam;
}
export declare class YWindow {
    private _params;
    private _div;
    private _contents;
    private _titleSpan;
    private _ModalDivShield;
    private _switchSideDiv;
    private _buttonsContainer;
    private static windowList;
    static get ConTextMenuBestZindex(): number;
    constructor(params: newWindowParam);
    get innerContentDiv(): HTMLDivElement;
    get bottomKeepClear(): number;
    set bottomKeepClear(value: number);
    get outterContentDiv(): HTMLDivElement;
    isModal(): boolean;
    get visible(): boolean;
    set visible(v: boolean);
    show(width?: number): void;
    allocate(): void;
    hide(): void;
    set title(value: string);
    brintToFront(): void;
    set zIndex(index: number);
    switchSide(): void;
}
export declare class confirm {
    private static _window;
    static ask(message: string, yes: confirmCallback, no: confirmCallback | null, userdata: any): YWindow;
}
declare class notififaction {
    private static _window;
    static show(icon: string, message: string): YWindow;
}
export declare class alert extends notififaction {
    static show(message: string): YWindow;
}
export declare class info extends notififaction {
    static show(message: string): YWindow;
}
export {};


// from YoctoVisualizationFull.d.ts


// from constants.d.ts
import * as YDataRendering from "./Renderer/YDataRendererFull.js";
import * as YoctoVisualization from "./YoctoVisualizationFull.js";
export declare class constants {
    static get versionInfo(): string[];
    static get buildVersion(): string;
    static get trueBuild(): string;
    static get deviceScreenWidth(): number;
    static get deviceScreenHeight(): number;
    private static readonly DPIFactorKey;
    private static readonly isAndroid;
    private static readonly ScreenDPI;
    private static readonly FontFamily;
    static get isPhoneOrTablet(): boolean;
    private static readonly DPIfactorCookieValue;
    private static readonly DPIfactorOverriden;
    private static readonly DPIfactor;
    private static readonly FontSize;
    private static _defaultCaptureType;
    static _defaultCaptureWidth: number;
    static _defaultCaptureHeight: number;
    static _defaultCaptureDPI: number;
    static _defaultCaptureSizePolicy: YDataRendering.YDataRenderer.CaptureFormatsEnumItem;
    static _defaultMaxPointsPerGraphSerie: number;
    static _defaultMaxPointsPerDataloggerSerie: number;
    static _defaultMaxDataRecordsPerSensor: number;
    static _defaulDbleClickBringsUpContextMenu: boolean;
    static get captureSizePolicy(): YDataRendering.YDataRenderer.CaptureFormatsEnumItem;
    static set captureSizePolicy(value: YDataRendering.YDataRenderer.CaptureFormatsEnumItem);
    static get dbleClickBringsUpContextMenu(): boolean;
    static set dbleClickBringsUpContextMenu(value: boolean);
    static get maxPointsPerGraphSerie(): number;
    static set maxPointsPerGraphSerie(value: number);
    static get maxPointsPerDataloggerSerie(): number;
    static set maxPointsPerDataloggerSerie(value: number);
    static get maxDataRecordsPerSensor(): number;
    static set maxDataRecordsPerSensor(value: number);
    static get captureWidth(): number;
    static set captureWidth(value: number);
    static get captureHeight(): number;
    static set captureHeight(value: number);
    static get captureDPI(): number;
    static set captureDPI(value: number);
    static get captureType(): YDataRendering.YDataRenderer.CaptureTypeEnumItem;
    static set captureType(value: YDataRendering.YDataRenderer.CaptureTypeEnumItem);
    static get generalFontFamily(): string;
    static get generalFontSize(): number;
    static get generalSizeCoef(): number;
    static get screenDPI(): number;
    static get guiDPIFactor(): number;
    static get guiDPIFactorWasOverriden(): boolean;
    static get guiDPIFactorIsOverriden(): boolean;
    static get guiDPIFactorOverrideValue(): number;
    static overrideGuiDPIFactor(override: boolean, value?: number): void;
    static get RunningOnAndroid(): boolean;
    static get WindowBackgroundColor(): string;
    static get WindowBorder(): string;
    static get WindowPadding(): number;
    static get WindowInnerBorderColor(): string;
    static get WindowInnerBackgroundColor(): string;
    static get WindowInnerBorder(): string;
    static get WindowHeaderBackgroundColor(): string;
    static get WindowHeaderColor(): string;
    static get WindowHeaderBorder(): string;
    static get WindowHeaderHeight(): number;
    static get WindowHeaderFontSize(): number;
    static get WindowHeaderFontFamily(): string;
    private static _useUSB;
    private static _useVirtualHub;
    private static _captureTarget;
    private static _captureFolder;
    private static _checkForUpdate;
    static get mustCheckForUpdate(): boolean;
    static set mustCheckForUpdate(value: boolean);
    private static _ignoreBuild;
    private static _deviceListValidity;
    private static findDPI;
    static InitCaptureParams(node: YoctoVisualization.YXmlNode): void;
    static InitUIParams(node: YoctoVisualization.YXmlNode): void;
    static InitCheckForUpdateParams(node: YoctoVisualization.YXmlNode): void;
    static InitMemoryUsageParams(node: YoctoVisualization.YXmlNode): void;
    static Init(initData: YoctoVisualization.YXmlNode): void;
    private static _crcTable;
    private static get CRCTable();
    static crc32(str: string): number;
    static setCookie(cname: string, cvalue: string, exdays: number): void;
    static getCookie(cname: string): string | null;
}


// from credPrompt_rw.d.ts


// from Editor_rw.d.ts


// from HubEdit_rw.d.ts


// from installer_rw.d.ts


// from mainForm_rw.d.ts


// from UIElements_rw.d.ts


// from YoctoVisualizationBinaries.d.ts
export declare class BinariesBlobs {
    static ro_js: string;
    static ro_minjs: string;
    static rw_js: string;
    static rw_minjs: string;
}
