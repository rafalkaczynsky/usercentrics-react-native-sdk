import { NativeModules, TurboModuleRegistry } from 'react-native';
// Try to get TurboModule first, fallback to NativeModule
const RNUsercentricsModule = TurboModuleRegistry.get('RNUsercentricsModule') || NativeModules.RNUsercentricsModule;
if (!RNUsercentricsModule) {
    throw new Error('Usercentrics React Native SDK: Native module not found. ' +
        'Make sure the SDK is properly installed and linked. ' +
        'For iOS, run "cd ios && pod install". ' +
        'For Android, make sure autolinking is working correctly.');
}
export default RNUsercentricsModule;
//# sourceMappingURL=NativeUsercentrics.js.map