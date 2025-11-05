export declare class TCFUserDecisions {
    purposes: TCFUserDecisionOnPurpose[];
    specialFeatures: TCFUserDecisionOnSpecialFeature[];
    vendors: TCFUserDecisionOnVendor[];
    adTechProviders: AdTechProviderDecision[];
    constructor(purposes: TCFUserDecisionOnPurpose[], specialFeatures: TCFUserDecisionOnSpecialFeature[], vendors: TCFUserDecisionOnVendor[], adTechProviders: AdTechProviderDecision[]);
}
export declare class TCFUserDecisionOnPurpose {
    id: number;
    consent?: boolean;
    legitimateInterestConsent?: boolean;
    constructor(id: number, consent?: boolean, legitimateInterestConsent?: boolean);
}
export declare class TCFUserDecisionOnSpecialFeature {
    id: number;
    consent?: boolean;
    constructor(id: number, consent?: boolean);
}
export declare class TCFUserDecisionOnVendor {
    id: number;
    consent?: boolean;
    legitimateInterestConsent?: boolean;
    constructor(id: number, consent?: boolean, legitimateInterestConsent?: boolean);
}
export declare class AdTechProviderDecision {
    id: number;
    consent: boolean;
    constructor(id: number, consent: boolean);
}
