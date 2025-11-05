export class BannerLogo {
    constructor(logoName, logoPath, logoUrl) {
        this.logoName = logoName;
        this.logoPath = logoPath.uri;
        this.logoUrl = logoUrl;
    }
}
export class BannerFont {
    constructor(regularFont, boldFont, fontSize) {
        this.regularFont = regularFont;
        this.boldFont = boldFont;
        this.fontSize = fontSize;
    }
}
export var LegalLinksSettings;
(function (LegalLinksSettings) {
    LegalLinksSettings["firstLayerOnly"] = "FIRST_LAYER_ONLY";
    LegalLinksSettings["secondLayerOnly"] = "SECOND_LAYER_ONLY";
    LegalLinksSettings["both"] = "BOTH";
    LegalLinksSettings["hidden"] = "HIDDEN";
})(LegalLinksSettings || (LegalLinksSettings = {}));
export class ToggleStyleSettings {
    constructor(activeBackgroundColorHex, inactiveBackgroundColorHex, disabledBackgroundColorHex, activeThumbColorHex, inactiveThumbColorHex, disabledThumbColorHex) {
        this.activeBackgroundColorHex = activeBackgroundColorHex;
        this.inactiveBackgroundColorHex = inactiveBackgroundColorHex;
        this.disabledBackgroundColorHex = disabledBackgroundColorHex;
        this.activeThumbColorHex = activeThumbColorHex;
        this.inactiveThumbColorHex = inactiveThumbColorHex;
        this.disabledThumbColorHex = disabledThumbColorHex;
    }
}
export class GeneralStyleSettings {
    constructor(font, logo, links, textColorHex, layerBackgroundColorHex, layerBackgroundSecondaryColorHex, linkColorHex, tabColorHex, bordersColorHex, toggleStyleSettings, disableSystemBackButton) {
        this.font = font;
        this.logo = logo;
        this.links = links;
        this.textColorHex = textColorHex;
        this.layerBackgroundColorHex = layerBackgroundColorHex;
        this.layerBackgroundSecondaryColorHex = layerBackgroundSecondaryColorHex;
        this.linkColorHex = linkColorHex;
        this.tabColorHex = tabColorHex;
        this.bordersColorHex = bordersColorHex;
        this.toggleStyleSettings = toggleStyleSettings;
        this.disableSystemBackButton = disableSystemBackButton;
    }
}
export class BannerSettings {
    constructor(firstLayerStyleSettings, secondLayerStyleSettings, generalStyleSettings, variantName) {
        this.firstLayerStyleSettings = firstLayerStyleSettings;
        this.secondLayerStyleSettings = secondLayerStyleSettings;
        this.generalStyleSettings = generalStyleSettings;
        this.variantName = variantName;
    }
}
//# sourceMappingURL=BannerSettings.js.map