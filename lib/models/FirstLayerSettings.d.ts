import { BannerLogo } from ".";
export declare class FirstLayerStyleSettings {
    layout?: UsercentricsLayout;
    headerImage?: HeaderImageSettings;
    title?: TitleSettings;
    message?: MessageSettings;
    buttonLayout?: ButtonLayout;
    backgroundColorHex?: String;
    cornerRadius?: Number;
    overlayColorHex?: String;
    constructor(layout?: UsercentricsLayout, headerImage?: HeaderImageSettings, title?: TitleSettings, message?: MessageSettings, buttonLayout?: ButtonLayout, backgroundColorHex?: String, cornerRadius?: Number, overlayColorHex?: String);
}
export declare class HeaderImageSettings {
    isExtended: Boolean;
    isHidden: Boolean;
    image?: BannerLogo;
    height?: Number;
    alignment?: SectionAlignment;
    private constructor();
    static extended(image: BannerLogo): HeaderImageSettings;
    static logo(image: BannerLogo, height?: Number, alignment?: SectionAlignment): HeaderImageSettings;
    static hidden(): HeaderImageSettings;
}
export declare class TitleSettings {
    fontName?: string;
    textSize?: number;
    textColorHex?: String;
    textAlignment?: SectionAlignment;
    constructor(fontName?: string, textSize?: number, textColorHex?: String, textAlignment?: SectionAlignment);
}
export declare class MessageSettings {
    fontName?: string;
    textSize?: number;
    textColorHex?: String;
    textAlignment?: SectionAlignment;
    linkTextColorHex?: String;
    linkTextUnderline?: Boolean;
    constructor(fontName?: string, textSize?: number, textColorHex?: String, textAlignment?: SectionAlignment, linkTextColorHex?: String, linkTextUnderline?: Boolean);
}
export declare class ButtonLayout {
    buttons: ButtonSettings[][];
    layout: InternalButtonLayout;
    private constructor();
    static row(buttons: ButtonSettings[]): ButtonLayout;
    static column(buttons: ButtonSettings[]): ButtonLayout;
    static grid(buttons: ButtonSettings[][]): ButtonLayout;
}
declare enum InternalButtonLayout {
    row = "ROW",
    grid = "GRID",
    column = "COLUMN"
}
export declare class ButtonSettings {
    buttonType: ButtonType;
    fontName?: string;
    textSize?: number;
    textColorHex?: String;
    backgroundColorHex?: String;
    cornerRadius?: number;
    isAllCaps?: Boolean;
    constructor(buttonType: ButtonType, fontName?: string, textSize?: number, textColorHex?: String, backgroundColorHex?: String, cornerRadius?: number, isAllCaps?: Boolean);
}
export declare enum ButtonType {
    acceptAll = "ACCEPT_ALL",
    denyAll = "DENY_ALL",
    more = "MORE",
    save = "SAVE"
}
export declare enum SectionAlignment {
    left = "START",
    right = "END",
    center = "CENTER"
}
export declare enum UsercentricsLayout {
    full = "FULL",
    sheet = "SHEET",
    popupCenter = "POPUP_CENTER",
    popupBottom = "POPUP_BOTTOM"
}
export {};
