export declare class AdditionalConsentModeData {
    acString: string;
    adTechProviders: AdTechProvider[];
    constructor(acString: string, adTechProviders: AdTechProvider[]);
}
export declare class AdTechProvider {
    id: number;
    name: string;
    privacyPolicyUrl: string;
    consent: boolean;
    constructor(id: number, name: string, privacyPolicyUrl: string, consent: boolean);
}
