export class TCFData {
    constructor(features, purposes, specialFeatures, specialPurposes, stacks, vendors, tcString, thirdPartyCount) {
        this.features = features;
        this.purposes = purposes;
        this.specialFeatures = specialFeatures;
        this.specialPurposes = specialPurposes;
        this.stacks = stacks;
        this.vendors = vendors;
        this.tcString = tcString;
        this.thirdPartyCount = thirdPartyCount;
    }
}
export class TCFFeature {
    constructor(purposeDescription, illustrations, id, name) {
        this.purposeDescription = purposeDescription;
        this.illustrations = illustrations;
        this.id = id;
        this.name = name;
    }
}
export class TCFPurpose {
    constructor(purposeDescription, illustrations, id, name, isPartOfASelectedStack, showConsentToggle, showLegitimateInterestToggle, legitimateInterestConsent, consent, stackId, numberOfVendors) {
        this.purposeDescription = purposeDescription;
        this.illustrations = illustrations;
        this.id = id;
        this.name = name;
        this.consent = consent;
        this.isPartOfASelectedStack = isPartOfASelectedStack;
        this.legitimateInterestConsent = legitimateInterestConsent;
        this.showConsentToggle = showConsentToggle;
        this.showLegitimateInterestToggle = showLegitimateInterestToggle;
        this.stackId = stackId;
        this.numberOfVendors = numberOfVendors;
    }
}
export class TCFSpecialFeature {
    constructor(purposeDescription, illustrations, id, isPartOfASelectedStack, showConsentToggle, name, consent, stackId) {
        this.purposeDescription = purposeDescription;
        this.illustrations = illustrations;
        this.id = id;
        this.name = name;
        this.consent = consent;
        this.isPartOfASelectedStack = isPartOfASelectedStack;
        this.stackId = stackId;
        this.showConsentToggle = showConsentToggle;
    }
}
export class TCFSpecialPurpose {
    constructor(purposeDescription, illustrations, id, name) {
        this.purposeDescription = purposeDescription;
        this.illustrations = illustrations;
        this.id = id;
        this.name = name;
    }
}
export class TCFStack {
    constructor(description, id, name, purposeIds, specialFeatureIds) {
        this.description = description;
        this.id = id;
        this.name = name;
        this.purposeIds = purposeIds;
        this.specialFeatureIds = specialFeatureIds;
    }
}
export class TCFVendor {
    constructor(features, flexiblePurposes, id, legitimateInterestPurposes, name, policyUrl, purposes, specialFeatures, specialPurposes, showConsentToggle, showLegitimateInterestToggle, cookieMaxAgeSeconds, usesNonCookieAccess, usesCookies, dataSharedOutsideEU, dataCategories, vendorUrls, restrictions, deviceStorageDisclosureUrl, legitimateInterestConsent, consent, cookieRefresh) {
        this.consent = consent;
        this.features = features;
        this.flexiblePurposes = flexiblePurposes;
        this.id = id;
        this.legitimateInterestConsent = legitimateInterestConsent;
        this.legitimateInterestPurposes = legitimateInterestPurposes;
        this.name = name;
        this.policyUrl = policyUrl;
        this.purposes = purposes;
        this.specialFeatures = specialFeatures;
        this.specialPurposes = specialPurposes;
        this.showConsentToggle = showConsentToggle;
        this.showLegitimateInterestToggle = showLegitimateInterestToggle;
        this.cookieMaxAgeSeconds = cookieMaxAgeSeconds;
        this.usesNonCookieAccess = usesNonCookieAccess;
        this.deviceStorageDisclosureUrl = deviceStorageDisclosureUrl;
        this.usesCookies = usesCookies;
        this.cookieRefresh = cookieRefresh;
        this.dataSharedOutsideEU = dataSharedOutsideEU;
        this.dataCategories = dataCategories;
        this.vendorUrls = vendorUrls;
        this.restrictions = restrictions;
    }
}
export class VendorUrl {
    constructor(langId, privacy, legIntClaim) {
        this.langId = langId;
        this.privacy = privacy;
        this.legIntClaim = legIntClaim;
    }
}
export class TCFVendorRestriction {
    constructor(purposeId, restrictionType) {
        this.purposeId = purposeId;
        this.restrictionType = restrictionType;
    }
}
export var RestrictionType;
(function (RestrictionType) {
    RestrictionType[RestrictionType["notAllowed"] = 0] = "notAllowed";
    RestrictionType[RestrictionType["requireConsent"] = 1] = "requireConsent";
    RestrictionType[RestrictionType["requireLi"] = 2] = "requireLi";
})(RestrictionType || (RestrictionType = {}));
//# sourceMappingURL=TCFData.js.map