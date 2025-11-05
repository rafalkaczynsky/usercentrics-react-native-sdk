import { CCPASettings } from "./CCPASettings";
import { TCF2Settings } from "./TCF2Settings";
import { UsercentricsLabels } from "./UsercentricsLabels";
export declare class UsercentricsSettings {
    labels: UsercentricsLabels;
    version: string;
    language: string;
    imprintUrl: string;
    privacyPolicyUrl: string;
    cookiePolicyUrl: string;
    firstLayerDescriptionHtml: string;
    firstLayerMobileDescriptionHtml: string;
    settingsId: string;
    bannerMobileDescriptionIsActive: boolean;
    enablePoweredBy: boolean;
    displayOnlyForEU: boolean;
    tcf2Enabled: boolean;
    reshowBanner: number;
    editableLanguages: [string];
    languagesAvailable: [string];
    showInitialViewForVersionChange: [string];
    ccpa?: CCPASettings;
    tcf2?: TCF2Settings;
    customization?: string;
    firstLayer?: FirstLayer;
    secondLayer?: SecondLayer;
    variants?: VariantsSettings;
    dpsDisplayFormat?: DpsDisplayFormat;
    framework?: USAFrameworks;
    publishedApps?: [PublishedApp];
    renewConsentsTimestamp?: number;
    consentWebhook?: boolean;
    constructor(labels: UsercentricsLabels, version: string, language: string, imprintUrl: string, privacyPolicyUrl: string, cookiePolicyUrl: string, firstLayerDescriptionHtml: string, firstLayerMobileDescriptionHtml: string, settingsId: string, bannerMobileDescriptionIsActive: boolean, enablePoweredBy: boolean, displayOnlyForEU: boolean, tcf2Enabled: boolean, reshowBanner: number, editableLanguages: [string], languagesAvailable: [string], showInitialViewForVersionChange: [string], ccpa?: CCPASettings, tcf2?: TCF2Settings, customization?: string, firstLayer?: FirstLayer, secondLayer?: SecondLayer, variants?: VariantsSettings, dpsDisplayFormat?: DpsDisplayFormat, framework?: USAFrameworks, publishedApps?: [PublishedApp], renewConsentsTimestamp?: number, consentWebhook?: boolean);
}
export declare class FirstLayer {
    hideButtonDeny?: boolean;
    constructor(hideButtonDeny?: boolean);
}
export declare class SecondLayer {
    tabsCategoriesLabel: string;
    tabsServicesLabel: string;
    hideButtonDeny?: boolean;
    hideLanguageSwitch?: boolean;
    acceptButtonText?: string;
    denyButtonText?: string;
    constructor(tabsCategoriesLabel: string, tabsServicesLabel: string, hideButtonDeny?: boolean, hideLanguageSwitch?: boolean, acceptButtonText?: string, denyButtonText?: string);
}
export declare class VariantsSettings {
    enabled: boolean;
    experimentsJson: string;
    activateWith: string;
    constructor(enabled: boolean, experimentsJson: string, activateWith: string);
}
export declare enum DpsDisplayFormat {
    all = 0,
    short = 1
}
export declare enum USAFrameworks {
    cpra = 0,
    vcdpa = 1,
    cpa = 2,
    ctdpa = 3,
    ucpa = 4
}
export declare class PublishedApp {
    bundleId: string;
    platform: PublishedAppPlatform;
    constructor(bundleId: string, platform: PublishedAppPlatform);
}
export declare enum PublishedAppPlatform {
    android = 0,
    ios = 1
}
