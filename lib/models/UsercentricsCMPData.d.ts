import { UsercentricsCategory } from "./UsercentricsCategory";
import { UsercentricsLocation } from "./UsercentricsLocation";
import { UsercentricsService } from "./UsercentricsService";
import { UsercentricsSettings } from "./UsercentricsSettings";
import { UsercentricsVariant } from "./UsercentricsVariant";
import { LegalBasisLocalization } from "./LegalBasisLocalization";
export declare class UsercentricsCMPData {
    settings: UsercentricsSettings;
    services: [UsercentricsService];
    categories: [UsercentricsCategory];
    activeVariant: UsercentricsVariant;
    userLocation: UsercentricsLocation;
    legalBasis: LegalBasisLocalization;
    constructor(settings: UsercentricsSettings, services: [UsercentricsService], categories: [UsercentricsCategory], activeVariant: UsercentricsVariant, userLocation: UsercentricsLocation, legalBasis: LegalBasisLocalization);
}
