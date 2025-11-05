export class UsercentricsServiceConsent {
    constructor(templateId, status, dataProcessor, version, type, isEssential, history, category) {
        this.templateId = templateId;
        this.status = status;
        this.dataProcessor = dataProcessor;
        this.version = version;
        this.type = type;
        this.isEssential = isEssential;
        this.history = history;
        this.category = category;
    }
}
export class UsercentricsConsentHistoryEntry {
    constructor(status, type, timestampInMillis) {
        this.status = status;
        this.type = type;
        this.timestampInMillis = timestampInMillis;
    }
}
//# sourceMappingURL=UsercentricsServiceConsent.js.map