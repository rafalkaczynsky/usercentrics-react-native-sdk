export declare class ConsentDisclosureObject {
    disclosures: [ConsentDisclosure];
    constructor(disclosures: [ConsentDisclosure]);
}
export declare class ConsentDisclosure {
    identifier?: string;
    type?: ConsentDisclosureType;
    name?: string;
    maxAgeSeconds?: number;
    cookieRefresh: boolean;
    purposes: [number];
    domain?: string;
    description?: string;
    constructor(cookieRefresh: boolean, purposes: [number], identifier?: string, type?: ConsentDisclosureType, name?: string, maxAgeSeconds?: number, domain?: string, description?: string);
}
export declare enum ConsentDisclosureType {
    cookie = 0,
    web = 1,
    app = 2
}
