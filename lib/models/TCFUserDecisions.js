export class TCFUserDecisions {
    constructor(purposes, specialFeatures, vendors, adTechProviders) {
        this.purposes = purposes;
        this.specialFeatures = specialFeatures;
        this.vendors = vendors;
        this.adTechProviders = adTechProviders;
    }
}
export class TCFUserDecisionOnPurpose {
    constructor(id, consent, legitimateInterestConsent) {
        this.id = id;
        this.consent = consent;
        this.legitimateInterestConsent = legitimateInterestConsent;
    }
}
export class TCFUserDecisionOnSpecialFeature {
    constructor(id, consent) {
        this.id = id;
        this.consent = consent;
    }
}
export class TCFUserDecisionOnVendor {
    constructor(id, consent, legitimateInterestConsent) {
        this.id = id;
        this.consent = consent;
        this.legitimateInterestConsent = legitimateInterestConsent;
    }
}
export class AdTechProviderDecision {
    constructor(id, consent) {
        this.id = id;
        this.consent = consent;
    }
}
//# sourceMappingURL=TCFUserDecisions.js.map