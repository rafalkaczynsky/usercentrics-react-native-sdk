import { UsercentricsConsentType } from ".";
export declare class UsercentricsServiceConsent {
    templateId: string;
    status: boolean;
    dataProcessor: string;
    version: string;
    type: UsercentricsConsentType;
    isEssential: boolean;
    history: UsercentricsConsentHistoryEntry[];
    category: string;
    constructor(templateId: string, status: boolean, dataProcessor: string, version: string, type: UsercentricsConsentType, isEssential: boolean, history: UsercentricsConsentHistoryEntry[], category: string);
}
export declare class UsercentricsConsentHistoryEntry {
    status: boolean;
    type: UsercentricsConsentType;
    timestampInMillis: number;
    constructor(status: boolean, type: UsercentricsConsentType, timestampInMillis: number);
}
