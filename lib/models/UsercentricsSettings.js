export class UsercentricsSettings {
    constructor(labels, version, language, imprintUrl, privacyPolicyUrl, cookiePolicyUrl, firstLayerDescriptionHtml, firstLayerMobileDescriptionHtml, settingsId, bannerMobileDescriptionIsActive, enablePoweredBy, displayOnlyForEU, tcf2Enabled, reshowBanner, editableLanguages, languagesAvailable, showInitialViewForVersionChange, ccpa, tcf2, customization, firstLayer, secondLayer, variants, dpsDisplayFormat, framework, publishedApps, renewConsentsTimestamp, consentWebhook) {
        this.labels = labels;
        this.version = version;
        this.language = language;
        this.imprintUrl = imprintUrl;
        this.privacyPolicyUrl = privacyPolicyUrl;
        this.cookiePolicyUrl = cookiePolicyUrl;
        this.firstLayerDescriptionHtml = firstLayerDescriptionHtml;
        this.firstLayerMobileDescriptionHtml = firstLayerMobileDescriptionHtml;
        this.settingsId = settingsId;
        this.bannerMobileDescriptionIsActive = bannerMobileDescriptionIsActive;
        this.enablePoweredBy = enablePoweredBy;
        this.displayOnlyForEU = displayOnlyForEU;
        this.tcf2Enabled = tcf2Enabled;
        this.reshowBanner = reshowBanner;
        this.editableLanguages = editableLanguages;
        this.languagesAvailable = languagesAvailable;
        this.showInitialViewForVersionChange = showInitialViewForVersionChange;
        this.ccpa = ccpa;
        this.tcf2 = tcf2;
        this.customization = customization;
        this.firstLayer = firstLayer;
        this.secondLayer = secondLayer;
        this.variants = variants;
        this.dpsDisplayFormat = dpsDisplayFormat;
        this.framework = framework;
        this.publishedApps = publishedApps;
        this.renewConsentsTimestamp = renewConsentsTimestamp;
        this.consentWebhook = consentWebhook;
    }
}
export class FirstLayer {
    constructor(hideButtonDeny) {
        this.hideButtonDeny = hideButtonDeny;
    }
}
export class SecondLayer {
    constructor(tabsCategoriesLabel, tabsServicesLabel, hideButtonDeny, hideLanguageSwitch, acceptButtonText, denyButtonText) {
        this.tabsCategoriesLabel = tabsCategoriesLabel;
        this.tabsServicesLabel = tabsServicesLabel;
        this.hideButtonDeny = hideButtonDeny;
        this.hideLanguageSwitch = hideLanguageSwitch;
        this.acceptButtonText = acceptButtonText;
        this.denyButtonText = denyButtonText;
    }
}
export class VariantsSettings {
    constructor(enabled, experimentsJson, activateWith) {
        this.enabled = enabled;
        this.experimentsJson = experimentsJson;
        this.activateWith = activateWith;
    }
}
export var DpsDisplayFormat;
(function (DpsDisplayFormat) {
    DpsDisplayFormat[DpsDisplayFormat["all"] = 0] = "all";
    DpsDisplayFormat[DpsDisplayFormat["short"] = 1] = "short";
})(DpsDisplayFormat || (DpsDisplayFormat = {}));
export var USAFrameworks;
(function (USAFrameworks) {
    USAFrameworks[USAFrameworks["cpra"] = 0] = "cpra";
    USAFrameworks[USAFrameworks["vcdpa"] = 1] = "vcdpa";
    USAFrameworks[USAFrameworks["cpa"] = 2] = "cpa";
    USAFrameworks[USAFrameworks["ctdpa"] = 3] = "ctdpa";
    USAFrameworks[USAFrameworks["ucpa"] = 4] = "ucpa";
})(USAFrameworks || (USAFrameworks = {}));
export class PublishedApp {
    constructor(bundleId, platform) {
        this.bundleId = bundleId;
        this.platform = platform;
    }
}
export var PublishedAppPlatform;
(function (PublishedAppPlatform) {
    PublishedAppPlatform[PublishedAppPlatform["android"] = 0] = "android";
    PublishedAppPlatform[PublishedAppPlatform["ios"] = 1] = "ios";
})(PublishedAppPlatform || (PublishedAppPlatform = {}));
//# sourceMappingURL=UsercentricsSettings.js.map