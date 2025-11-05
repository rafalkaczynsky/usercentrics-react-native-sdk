export declare class TCFData {
    features: TCFFeature[];
    purposes: TCFPurpose[];
    specialFeatures: TCFSpecialFeature[];
    specialPurposes: TCFSpecialPurpose[];
    stacks: TCFStack[];
    vendors: TCFVendor[];
    tcString: String;
    thirdPartyCount: number;
    constructor(features: TCFFeature[], purposes: TCFPurpose[], specialFeatures: TCFSpecialFeature[], specialPurposes: TCFSpecialPurpose[], stacks: TCFStack[], vendors: TCFVendor[], tcString: String, thirdPartyCount: number);
}
export declare class TCFFeature {
    purposeDescription: string;
    illustrations: [string];
    id: number;
    name: string;
    constructor(purposeDescription: string, illustrations: [string], id: number, name: string);
}
export declare class TCFPurpose {
    purposeDescription: string;
    illustrations: [string];
    id: number;
    name: string;
    consent?: boolean;
    isPartOfASelectedStack: boolean;
    legitimateInterestConsent?: boolean;
    showConsentToggle: boolean;
    showLegitimateInterestToggle: boolean;
    stackId?: number;
    numberOfVendors?: number;
    constructor(purposeDescription: string, illustrations: [string], id: number, name: string, isPartOfASelectedStack: boolean, showConsentToggle: boolean, showLegitimateInterestToggle: boolean, legitimateInterestConsent?: boolean, consent?: boolean, stackId?: number, numberOfVendors?: number);
}
export declare class TCFSpecialFeature {
    purposeDescription: string;
    illustrations: [string];
    id: number;
    name: string;
    consent?: boolean;
    isPartOfASelectedStack: boolean;
    stackId?: number;
    showConsentToggle: boolean;
    constructor(purposeDescription: string, illustrations: [string], id: number, isPartOfASelectedStack: boolean, showConsentToggle: boolean, name: string, consent?: boolean, stackId?: number);
}
export declare class TCFSpecialPurpose {
    purposeDescription: string;
    illustrations: [string];
    id: number;
    name: string;
    constructor(purposeDescription: string, illustrations: [string], id: number, name: string);
}
export declare class TCFStack {
    description: string;
    id: number;
    name: string;
    purposeIds: [number];
    specialFeatureIds: [number];
    constructor(description: string, id: number, name: string, purposeIds: [number], specialFeatureIds: [number]);
}
export declare class TCFVendor {
    consent?: boolean;
    features: [number];
    flexiblePurposes: [number];
    id: number;
    legitimateInterestConsent?: boolean;
    legitimateInterestPurposes: [number];
    name: string;
    policyUrl: string;
    purposes: [number];
    specialFeatures: [number];
    specialPurposes: [number];
    showConsentToggle: boolean;
    showLegitimateInterestToggle: boolean;
    cookieMaxAgeSeconds: number;
    usesNonCookieAccess: boolean;
    deviceStorageDisclosureUrl?: string;
    usesCookies: boolean;
    cookieRefresh?: boolean;
    dataSharedOutsideEU: boolean;
    dataCategories: [number];
    vendorUrls: VendorUrl[];
    restrictions: TCFVendorRestriction[];
    constructor(features: [number], flexiblePurposes: [number], id: number, legitimateInterestPurposes: [number], name: string, policyUrl: string, purposes: [number], specialFeatures: [number], specialPurposes: [number], showConsentToggle: boolean, showLegitimateInterestToggle: boolean, cookieMaxAgeSeconds: number, usesNonCookieAccess: boolean, usesCookies: boolean, dataSharedOutsideEU: boolean, dataCategories: [number], vendorUrls: VendorUrl[], restrictions: TCFVendorRestriction[], deviceStorageDisclosureUrl?: string, legitimateInterestConsent?: boolean, consent?: boolean, cookieRefresh?: boolean);
}
export declare class VendorUrl {
    langId?: string;
    privacy?: string;
    legIntClaim?: string;
    constructor(langId: string, privacy: string, legIntClaim: string);
}
export declare class TCFVendorRestriction {
    purposeId: number;
    restrictionType: RestrictionType;
    constructor(purposeId: number, restrictionType: RestrictionType);
}
export declare enum RestrictionType {
    notAllowed = 0,
    requireConsent = 1,
    requireLi = 2
}
