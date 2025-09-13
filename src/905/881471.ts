import { isBrowser } from '../905/268204';
const userAgent = isBrowser ? navigator.userAgent : '';
const isWebDriver = !!isBrowser && (navigator.webdriver ?? false);

// Platform detection
const isMac = /macintosh/i.test(userAgent);
const isIOS = /ipad|iphone|ipod/.test(userAgent);
const isAppleDevice = isMac || isIOS;
const isAndroid = /android/i.test(userAgent);

// Browser detection
const isFirefox = /firefox|iceweasel|fxios/i.test(userAgent);
const isChrome = !isFirefox && /chrome|crios|crmo/i.test(userAgent);
const isSafari = isAppleDevice && !isFirefox && !isChrome && /safari|applewebkit/i.test(userAgent);
export const Bt = isAppleDevice; // isAppleDevice
export const Md = isMac; // isMac
export const Uo = isWebDriver; // isWebDriver
export const VM = isSafari; // isSafari
export const yA = isAndroid; // isAndroid