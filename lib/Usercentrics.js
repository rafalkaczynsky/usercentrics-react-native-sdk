import { NativeModules } from 'react-native';
import NativeUsercentrics from './NativeUsercentrics';
// Use TurboModule when available, fallback to legacy bridge
const RNUsercentricsModule = NativeUsercentrics || NativeModules.RNUsercentricsModule;
export const Usercentrics = {
    configure: (options) => {
        RNUsercentricsModule.configure(options);
    },
    status: () => {
        return RNUsercentricsModule.isReady();
    },
    showFirstLayer: async (options) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.showFirstLayer(options);
    },
    showSecondLayer: async (options) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.showSecondLayer(options);
    },
    restoreUserSession: async (controllerId) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.restoreUserSession(controllerId);
    },
    getControllerId: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.getControllerId();
    },
    getABTestingVariant: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.getABTestingVariant();
    },
    getConsents: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.getConsents();
    },
    getCMPData: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.getCMPData();
    },
    getUserSessionData: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.getUserSessionData();
    },
    getCCPAData: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.getUSPData();
    },
    getTCFData: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.getTCFData();
    },
    getAdditionalConsentModeData: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.getAdditionalConsentModeData();
    },
    changeLanguage: async (language) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.changeLanguage(language);
    },
    acceptAll: async (consentType) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.acceptAll(consentType);
    },
    acceptAllForTCF: async (fromLayer, consentType) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.acceptAllForTCF(fromLayer, consentType);
    },
    denyAll: async (consentType) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.denyAll(consentType);
    },
    denyAllForTCF: async (fromLayer, consentType) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.denyAllForTCF(fromLayer, consentType);
    },
    saveDecisions: async (decisions, consentType) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.saveDecisions(decisions, consentType);
    },
    saveDecisionsForTCF: async (tcfDecisions, fromLayer, decisions, consentType) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.saveDecisionsForTCF(tcfDecisions, fromLayer, decisions, consentType);
    },
    saveOptOutForCCPA: async (isOptedOut, consentType) => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.saveOptOutForCCPA(isOptedOut, consentType);
    },
    setCMPId: (id) => {
        RNUsercentricsModule.setCMPId(id);
    },
    setABTestingVariant: (variant) => {
        RNUsercentricsModule.setABTestingVariant(variant);
    },
    track: async (event) => {
        await RNUsercentricsModule.isReady();
        RNUsercentricsModule.track(event);
    },
    clearUserSession: async () => {
        await RNUsercentricsModule.isReady();
        return RNUsercentricsModule.clearUserSession();
    },
};
//# sourceMappingURL=Usercentrics.js.map