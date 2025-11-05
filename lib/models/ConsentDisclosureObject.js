export class ConsentDisclosureObject {
    constructor(disclosures) {
        this.disclosures = disclosures;
    }
}
export class ConsentDisclosure {
    constructor(cookieRefresh, purposes, identifier, type, name, maxAgeSeconds, domain, description) {
        this.identifier = identifier;
        this.type = type;
        this.name = name;
        this.maxAgeSeconds = maxAgeSeconds;
        this.cookieRefresh = cookieRefresh;
        this.purposes = purposes;
        this.domain = domain;
        this.description = description;
    }
}
export var ConsentDisclosureType;
(function (ConsentDisclosureType) {
    ConsentDisclosureType[ConsentDisclosureType["cookie"] = 0] = "cookie";
    ConsentDisclosureType[ConsentDisclosureType["web"] = 1] = "web";
    ConsentDisclosureType[ConsentDisclosureType["app"] = 2] = "app";
})(ConsentDisclosureType || (ConsentDisclosureType = {}));
//# sourceMappingURL=ConsentDisclosureObject.js.map