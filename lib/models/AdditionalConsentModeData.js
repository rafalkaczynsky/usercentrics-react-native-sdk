export class AdditionalConsentModeData {
    constructor(acString, adTechProviders) {
        this.acString = acString;
        this.adTechProviders = adTechProviders;
    }
}
export class AdTechProvider {
    constructor(id, name, privacyPolicyUrl, consent) {
        this.id = id;
        this.name = name;
        this.privacyPolicyUrl = privacyPolicyUrl;
        this.consent = consent;
    }
}
//# sourceMappingURL=AdditionalConsentModeData.js.map