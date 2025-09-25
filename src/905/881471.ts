import { isBrowser } from '../905/268204'

const userAgent = isBrowser ? navigator.userAgent : ''
const isWebDriver = !!isBrowser && (navigator.webdriver ?? false)

// Platform detection
export const isMac = /macintosh/i.test(userAgent)
export const isIOS = /ipad|iphone|ipod/.test(userAgent)
export const isAppleDevice = isMac || isIOS
export const isAndroid = /android/i.test(userAgent)

// Browser detection
export const isFirefox = /firefox|iceweasel|fxios/i.test(userAgent)
export const isChrome = !isFirefox && /chrome|crios|crmo/i.test(userAgent)
export const isSafari = isAppleDevice && !isFirefox && !isChrome && /safari|applewebkit/i.test(userAgent)
export const Bt = isAppleDevice // isAppleDevice
export const Md = isMac // isMac
export const Uo = isWebDriver // isWebDriver
export const VM = isSafari // isSafari
export const yA = isAndroid // isAndroid
