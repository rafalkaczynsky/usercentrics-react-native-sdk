import { UsercentricsLocation, UsercentricsServiceConsent } from ".";
import { GeolocationRuleset } from "./GeolocationRuleset";
export declare class UsercentricsReadyStatus {
    shouldCollectConsent: boolean;
    consents: [UsercentricsServiceConsent];
    geolocationRuleset?: GeolocationRuleset;
    location: UsercentricsLocation;
    constructor(shouldCollectConsent: boolean, consents: [UsercentricsServiceConsent], location: UsercentricsLocation, geolocationRuleSet?: GeolocationRuleset);
}
