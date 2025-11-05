import { ImageResolvedAssetSource } from "react-native";
import { FirstLayerStyleSettings, SecondLayerStyleSettings } from ".";
export declare class BannerLogo {
    logoName: string;
    logoPath: string;
    logoUrl?: String;
    constructor(logoName: string, logoPath: ImageResolvedAssetSource, logoUrl?: String);
}
export declare class BannerFont {
    regularFont: string;
    boldFont: string;
    fontSize: number;
    constructor(regularFont: string, boldFont: string, fontSize: number);
}
export declare enum LegalLinksSettings {
    firstLayerOnly = "FIRST_LAYER_ONLY",
    secondLayerOnly = "SECOND_LAYER_ONLY",
    both = "BOTH",
    hidden = "HIDDEN"
}
export declare class ToggleStyleSettings {
    activeBackgroundColorHex?: String;
    inactiveBackgroundColorHex?: String;
    disabledBackgroundColorHex?: String;
    activeThumbColorHex?: String;
    inactiveThumbColorHex?: String;
    disabledThumbColorHex?: String;
    constructor(activeBackgroundColorHex?: String, inactiveBackgroundColorHex?: String, disabledBackgroundColorHex?: String, activeThumbColorHex?: String, inactiveThumbColorHex?: String, disabledThumbColorHex?: String);
}
export declare class GeneralStyleSettings {
    font?: BannerFont;
    logo?: BannerLogo;
    links?: LegalLinksSettings;
    textColorHex?: String;
    layerBackgroundColorHex?: String;
    layerBackgroundSecondaryColorHex?: String;
    linkColorHex?: String;
    tabColorHex?: String;
    bordersColorHex?: String;
    toggleStyleSettings?: ToggleStyleSettings;
    disableSystemBackButton?: Boolean;
    constructor(font?: BannerFont, logo?: BannerLogo, links?: LegalLinksSettings, textColorHex?: String, layerBackgroundColorHex?: String, layerBackgroundSecondaryColorHex?: String, linkColorHex?: String, tabColorHex?: String, bordersColorHex?: String, toggleStyleSettings?: ToggleStyleSettings, disableSystemBackButton?: Boolean);
}
export declare class BannerSettings {
    firstLayerStyleSettings?: FirstLayerStyleSettings;
    secondLayerStyleSettings?: SecondLayerStyleSettings;
    generalStyleSettings?: GeneralStyleSettings;
    variantName?: String;
    constructor(firstLayerStyleSettings?: FirstLayerStyleSettings, secondLayerStyleSettings?: SecondLayerStyleSettings, generalStyleSettings?: GeneralStyleSettings, variantName?: String);
}
