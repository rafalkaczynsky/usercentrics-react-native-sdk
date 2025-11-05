import { UsercentricsServiceConsent, UsercentricsUserInteraction } from ".";
export declare class UsercentricsConsentUserResponse {
    controllerId: string;
    userInteraction: UsercentricsUserInteraction;
    consents: [UsercentricsServiceConsent];
    constructor(controllerId: string, userIntaction: UsercentricsUserInteraction, consents: [UsercentricsServiceConsent]);
}
