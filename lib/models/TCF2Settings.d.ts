export declare class TCF2Settings {
    firstLayerTitle: string;
    secondLayerTitle: string;
    tabsPurposeLabel: string;
    tabsVendorsLabel: string;
    labelsFeatures: string;
    labelsIabVendors: string;
    labelsNonIabPurposes: string;
    labelsNonIabVendors: string;
    labelsPurposes: string;
    vendorFeatures: string;
    vendorLegitimateInterestPurposes: string;
    vendorPurpose: string;
    vendorSpecialFeatures: string;
    vendorSpecialPurposes: string;
    togglesConsentToggleLabel: string;
    togglesLegIntToggleLabel: string;
    buttonsAcceptAllLabel: string;
    buttonsDenyAllLabel: string;
    buttonsSaveLabel: string;
    linksManageSettingsLabel: string;
    linksVendorListLinkLabel: string;
    cmpId: number;
    cmpVersion: number;
    firstLayerHideToggles: boolean;
    secondLayerHideToggles: boolean;
    hideLegitimateInterestToggles: boolean;
    firstLayerHideButtonDeny?: boolean;
    secondLayerHideButtonDeny: boolean;
    publisherCountryCode: string;
    purposeOneTreatment: boolean;
    selectedVendorIds: [number];
    gdprApplies: boolean;
    selectedStacks: [number];
    disabledSpecialFeatures: [number];
    firstLayerShowDescriptions: boolean;
    hideNonIabOnFirstLayer: boolean;
    resurfacePeriodEnded: boolean;
    resurfacePurposeChanged: boolean;
    resurfaceVendorAdded: boolean;
    firstLayerDescription: string;
    firstLayerAdditionalInfo: string;
    secondLayerDescription: string;
    togglesSpecialFeaturesToggleOn: string;
    togglesSpecialFeaturesToggleOff: string;
    appLayerNoteResurface: string;
    firstLayerNoteResurface: string;
    categoriesOfDataLabel: string;
    dataRetentionPeriodLabel: string;
    legitimateInterestLabel: string;
    version: string;
    examplesLabel: string;
    firstLayerMobileVariant?: FirstLayerMobileVariant;
    showDataSharedOutsideEUText: boolean;
    dataSharedOutsideEUText?: string;
    vendorIdsOutsideEUList: [number];
    scope: TCF2Scope;
    changedPurposes: TCF2ChangedPurposes;
    acmV2Enabled: boolean;
    selectedATPIds: number[];
    constructor(firstLayerTitle: string, secondLayerTitle: string, tabsPurposeLabel: string, tabsVendorsLabel: string, labelsFeatures: string, labelsIabVendors: string, labelsNonIabPurposes: string, labelsNonIabVendors: string, labelsPurposes: string, vendorFeatures: string, vendorLegitimateInterestPurposes: string, vendorPurpose: string, vendorSpecialFeatures: string, vendorSpecialPurposes: string, togglesConsentToggleLabel: string, togglesLegIntToggleLabel: string, buttonsAcceptAllLabel: string, buttonsDenyAllLabel: string, buttonsSaveLabel: string, linksManageSettingsLabel: string, linksVendorListLinkLabel: string, cmpId: number, cmpVersion: number, firstLayerHideToggles: boolean, secondLayerHideToggles: boolean, hideLegitimateInterestToggles: boolean, secondLayerHideButtonDeny: boolean, publisherCountryCode: string, purposeOneTreatment: boolean, selectedVendorIds: [number], gdprApplies: boolean, selectedStacks: [number], disabledSpecialFeatures: [number], firstLayerShowDescriptions: boolean, hideNonIabOnFirstLayer: boolean, resurfacePeriodEnded: boolean, resurfacePurposeChanged: boolean, resurfaceVendorAdded: boolean, firstLayerDescription: string, firstLayerAdditionalInfo: string, secondLayerDescription: string, togglesSpecialFeaturesToggleOn: string, togglesSpecialFeaturesToggleOff: string, appLayerNoteResurface: string, firstLayerNoteResurface: string, categoriesOfDataLabel: string, dataRetentionPeriodLabel: string, legitimateInterestLabel: string, version: string, examplesLabel: string, showDataSharedOutsideEUText: boolean, vendorIdsOutsideEUList: [number], scope: TCF2Scope, changedPurposes: TCF2ChangedPurposes, acmV2Enabled: boolean, selectedATPIds: number[], firstLayerHideButtonDeny?: boolean, firstLayerMobileVariant?: FirstLayerMobileVariant, dataSharedOutsideEUText?: string);
}
export declare enum FirstLayerMobileVariant {
    sheet = 0,
    full = 1,
    popupBottom = 2,
    popupCenter = 3
}
export declare enum TCF2Scope {
    global = 0,
    service = 1
}
export declare class TCF2ChangedPurposes {
    purposes: [number];
    legIntPurposes: [number];
    constructor(purposes: [number], legIntPurposes: [number]);
}
