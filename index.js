import { NativeModules } from 'react-native';


const { RNAppLaunchArguments } = NativeModules;

// Safely fall back to empty values if native module is not available
const getNativeModule = () => RNAppLaunchArguments || {};
const getLaunchArguments = () => (getNativeModule().launchArguments || '').split('::');

export default getLaunchArguments;
