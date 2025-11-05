import { NetworkMode, UsercentricsLoggerLevel } from ".";
export declare class UsercentricsOptions {
    settingsId?: string;
    ruleSetId?: string;
    defaultLanguage?: string;
    loggerLevel?: UsercentricsLoggerLevel;
    timeoutMillis?: number;
    version?: string;
    networkMode?: NetworkMode;
    consentMediation?: Boolean;
    initTimeoutMillis?: number;
    constructor({ settingsId, ruleSetId, defaultLanguage, loggerLevel, timeoutMillis, version, networkMode, consentMediation, initTimeoutMillis }: {
        settingsId?: string;
        ruleSetId?: string;
        defaultLanguage?: string;
        loggerLevel?: UsercentricsLoggerLevel;
        timeoutMillis?: number;
        version?: string;
        networkMode?: NetworkMode;
        consentMediation?: Boolean;
        initTimeoutMillis?: number;
    });
}
