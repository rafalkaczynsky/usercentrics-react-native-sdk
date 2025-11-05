export class TCF2Settings {
    constructor(firstLayerTitle, secondLayerTitle, tabsPurposeLabel, tabsVendorsLabel, labelsFeatures, labelsIabVendors, labelsNonIabPurposes, labelsNonIabVendors, labelsPurposes, vendorFeatures, vendorLegitimateInterestPurposes, vendorPurpose, vendorSpecialFeatures, vendorSpecialPurposes, togglesConsentToggleLabel, togglesLegIntToggleLabel, buttonsAcceptAllLabel, buttonsDenyAllLabel, buttonsSaveLabel, linksManageSettingsLabel, linksVendorListLinkLabel, cmpId, cmpVersion, firstLayerHideToggles, secondLayerHideToggles, hideLegitimateInterestToggles, secondLayerHideButtonDeny, publisherCountryCode, purposeOneTreatment, selectedVendorIds, gdprApplies, selectedStacks, disabledSpecialFeatures, firstLayerShowDescriptions, hideNonIabOnFirstLayer, resurfacePeriodEnded, resurfacePurposeChanged, resurfaceVendorAdded, firstLayerDescription, firstLayerAdditionalInfo, secondLayerDescription, togglesSpecialFeaturesToggleOn, togglesSpecialFeaturesToggleOff, appLayerNoteResurface, firstLayerNoteResurface, categoriesOfDataLabel, dataRetentionPeriodLabel, legitimateInterestLabel, version, examplesLabel, showDataSharedOutsideEUText, vendorIdsOutsideEUList, scope, changedPurposes, acmV2Enabled, selectedATPIds, firstLayerHideButtonDeny, firstLayerMobileVariant, dataSharedOutsideEUText) {
        this.firstLayerTitle = firstLayerTitle;
        this.secondLayerTitle = secondLayerTitle;
        this.tabsPurposeLabel = tabsPurposeLabel;
        this.tabsVendorsLabel = tabsVendorsLabel;
        this.labelsFeatures = labelsFeatures;
        this.labelsIabVendors = labelsIabVendors;
        this.labelsNonIabPurposes = labelsNonIabPurposes;
        this.labelsNonIabVendors = labelsNonIabVendors;
        this.labelsPurposes = labelsPurposes;
        this.vendorFeatures = vendorFeatures;
        this.vendorLegitimateInterestPurposes = vendorLegitimateInterestPurposes;
        this.vendorPurpose = vendorPurpose;
        this.vendorSpecialFeatures = vendorSpecialFeatures;
        this.vendorSpecialPurposes = vendorSpecialPurposes;
        this.togglesConsentToggleLabel = togglesConsentToggleLabel;
        this.togglesLegIntToggleLabel = togglesLegIntToggleLabel;
        this.buttonsAcceptAllLabel = buttonsAcceptAllLabel;
        this.buttonsDenyAllLabel = buttonsDenyAllLabel;
        this.buttonsSaveLabel = buttonsSaveLabel;
        this.linksManageSettingsLabel = linksManageSettingsLabel;
        this.linksVendorListLinkLabel = linksVendorListLinkLabel;
        this.cmpId = cmpId;
        this.cmpVersion = cmpVersion;
        this.firstLayerHideToggles = firstLayerHideToggles;
        this.secondLayerHideToggles = secondLayerHideToggles;
        this.hideLegitimateInterestToggles = hideLegitimateInterestToggles;
        this.firstLayerHideButtonDeny = firstLayerHideButtonDeny;
        this.secondLayerHideButtonDeny = secondLayerHideButtonDeny;
        this.publisherCountryCode = publisherCountryCode;
        this.purposeOneTreatment = purposeOneTreatment;
        this.selectedVendorIds = selectedVendorIds;
        this.gdprApplies = gdprApplies;
        this.selectedStacks = selectedStacks;
        this.disabledSpecialFeatures = disabledSpecialFeatures;
        this.firstLayerShowDescriptions = firstLayerShowDescriptions;
        this.hideNonIabOnFirstLayer = hideNonIabOnFirstLayer;
        this.resurfacePeriodEnded = resurfacePeriodEnded;
        this.resurfacePurposeChanged = resurfacePurposeChanged;
        this.resurfaceVendorAdded = resurfaceVendorAdded;
        this.firstLayerDescription = firstLayerDescription;
        this.firstLayerAdditionalInfo = firstLayerAdditionalInfo;
        this.secondLayerDescription = secondLayerDescription;
        this.togglesSpecialFeaturesToggleOn = togglesSpecialFeaturesToggleOn;
        this.togglesSpecialFeaturesToggleOff = togglesSpecialFeaturesToggleOff;
        this.appLayerNoteResurface = appLayerNoteResurface;
        this.firstLayerNoteResurface = firstLayerNoteResurface;
        this.categoriesOfDataLabel = categoriesOfDataLabel;
        this.dataRetentionPeriodLabel = dataRetentionPeriodLabel;
        this.legitimateInterestLabel = legitimateInterestLabel;
        this.version = version;
        this.examplesLabel = examplesLabel;
        this.firstLayerMobileVariant = firstLayerMobileVariant;
        this.showDataSharedOutsideEUText = showDataSharedOutsideEUText;
        this.dataSharedOutsideEUText = dataSharedOutsideEUText;
        this.vendorIdsOutsideEUList = vendorIdsOutsideEUList;
        this.scope = scope;
        this.changedPurposes = changedPurposes;
        this.acmV2Enabled = acmV2Enabled;
        this.selectedATPIds = selectedATPIds;
    }
}
export var FirstLayerMobileVariant;
(function (FirstLayerMobileVariant) {
    FirstLayerMobileVariant[FirstLayerMobileVariant["sheet"] = 0] = "sheet";
    FirstLayerMobileVariant[FirstLayerMobileVariant["full"] = 1] = "full";
    FirstLayerMobileVariant[FirstLayerMobileVariant["popupBottom"] = 2] = "popupBottom";
    FirstLayerMobileVariant[FirstLayerMobileVariant["popupCenter"] = 3] = "popupCenter";
})(FirstLayerMobileVariant || (FirstLayerMobileVariant = {}));
export var TCF2Scope;
(function (TCF2Scope) {
    TCF2Scope[TCF2Scope["global"] = 0] = "global";
    TCF2Scope[TCF2Scope["service"] = 1] = "service";
})(TCF2Scope || (TCF2Scope = {}));
export class TCF2ChangedPurposes {
    constructor(purposes, legIntPurposes) {
        this.purposes = purposes;
        this.legIntPurposes = legIntPurposes;
    }
}
//# sourceMappingURL=TCF2Settings.js.map