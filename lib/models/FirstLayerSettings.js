export class FirstLayerStyleSettings {
    constructor(layout, headerImage, title, message, buttonLayout, backgroundColorHex, cornerRadius, overlayColorHex) {
        this.layout = layout;
        this.headerImage = headerImage;
        this.title = title;
        this.message = message;
        this.buttonLayout = buttonLayout;
        this.backgroundColorHex = backgroundColorHex;
        this.cornerRadius = cornerRadius;
        this.overlayColorHex = overlayColorHex;
    }
}
export class HeaderImageSettings {
    constructor(isExtended, isHidden, image, height, alignment) {
        this.isExtended = isExtended;
        this.isHidden = isHidden;
        this.image = image;
        this.height = height;
        this.alignment = alignment;
    }
    static extended(image) {
        return new HeaderImageSettings(true, false, image);
    }
    static logo(image, height, alignment) {
        return new HeaderImageSettings(false, false, image, height, alignment);
    }
    static hidden() {
        return new HeaderImageSettings(false, true);
    }
}
export class TitleSettings {
    constructor(fontName, textSize, textColorHex, textAlignment) {
        this.fontName = fontName;
        this.textSize = textSize;
        this.textColorHex = textColorHex;
        this.textAlignment = textAlignment;
    }
}
export class MessageSettings {
    constructor(fontName, textSize, textColorHex, textAlignment, linkTextColorHex, linkTextUnderline) {
        this.fontName = fontName;
        this.textSize = textSize;
        this.textColorHex = textColorHex;
        this.textAlignment = textAlignment;
        this.linkTextColorHex = linkTextColorHex;
        this.linkTextUnderline = linkTextUnderline;
    }
}
export class ButtonLayout {
    constructor(buttons, layout) {
        this.buttons = buttons;
        this.layout = layout;
    }
    static row(buttons) {
        return new ButtonLayout([buttons], InternalButtonLayout.row);
    }
    static column(buttons) {
        return new ButtonLayout([buttons], InternalButtonLayout.column);
    }
    static grid(buttons) {
        return new ButtonLayout(buttons, InternalButtonLayout.grid);
    }
}
var InternalButtonLayout;
(function (InternalButtonLayout) {
    InternalButtonLayout["row"] = "ROW";
    InternalButtonLayout["grid"] = "GRID";
    InternalButtonLayout["column"] = "COLUMN";
})(InternalButtonLayout || (InternalButtonLayout = {}));
export class ButtonSettings {
    constructor(buttonType, fontName, textSize, textColorHex, backgroundColorHex, cornerRadius, isAllCaps) {
        this.buttonType = buttonType;
        this.fontName = fontName;
        this.textSize = textSize;
        this.textColorHex = textColorHex;
        this.backgroundColorHex = backgroundColorHex;
        this.cornerRadius = cornerRadius;
        this.isAllCaps = isAllCaps;
    }
}
export var ButtonType;
(function (ButtonType) {
    ButtonType["acceptAll"] = "ACCEPT_ALL";
    ButtonType["denyAll"] = "DENY_ALL";
    ButtonType["more"] = "MORE";
    ButtonType["save"] = "SAVE";
})(ButtonType || (ButtonType = {}));
export var SectionAlignment;
(function (SectionAlignment) {
    SectionAlignment["left"] = "START";
    SectionAlignment["right"] = "END";
    SectionAlignment["center"] = "CENTER";
})(SectionAlignment || (SectionAlignment = {}));
export var UsercentricsLayout;
(function (UsercentricsLayout) {
    UsercentricsLayout["full"] = "FULL";
    UsercentricsLayout["sheet"] = "SHEET";
    UsercentricsLayout["popupCenter"] = "POPUP_CENTER";
    UsercentricsLayout["popupBottom"] = "POPUP_BOTTOM";
})(UsercentricsLayout || (UsercentricsLayout = {}));
//# sourceMappingURL=FirstLayerSettings.js.map