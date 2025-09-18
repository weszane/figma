import { useEffect, useState } from 'react'
import { setTagGlobal } from '../905/11'
import { trackEventAnalytics } from '../905/449184'
import { updateEnvironmentInfo } from '../905/883621'
import { atom, atomStoreManager } from '../figma_app/27355'
import { BrowserInfo } from '../figma_app/778880'
// original: $$d3
export function isChromebookTabbed(): boolean {
  return !!(BrowserInfo.chromeos && window.matchMedia('(display-mode: tabbed)').matches)
}

// original: $$u4
const PATH_REGEX = /^\/(files|idle_timeout|ip_account_restriction|my_plugins|user|org|team)(\/.*)?$/
export function isAllowedPath(path: string): boolean {
  return PATH_REGEX.test(path) || path === '/' || path === ''
}

// original: $$p1
/**
 * Apply the app's dark background.
 * original name: $$p1
 */
export function applyDarkBackground(_color?: string): void {
  // keep the original behavior: always set the specific dark color
  document.body.style.backgroundColor = '#2c2c2c'
}

// original: $$_0
export const chromeInstallPromptAtom = atom(null)

// original: m
function initChromeOSEnvironment(): void {
  const isTabbed = isChromebookTabbed()
  setTagGlobal('chrome_os_app', isTabbed)
  if (isTabbed) {
    updateEnvironmentInfo({
      browser_name: 'Figma ChromeOS App',
    })
  }
}

// original: $$h2
/**
 * Wire up ChromeOS specific listeners (matchMedia, install prompt, installed).
 * original name: $$h2
 */
export function setupChromeOSListeners(): void {
  initChromeOSEnvironment()

  if (!BrowserInfo.chromeos || !BrowserInfo.chrome)
    return

  const mq = window.matchMedia('(display-mode: tabbed)')

  const handleChange = () => {
    if (isChromebookTabbed()) {
      applyDarkBackground('dark')
      initChromeOSEnvironment()
    }
  }

  mq.addEventListener('change', handleChange)
  window.addEventListener('appinstalled', () => {
    trackEventAnalytics('chrome_os_app_installed')
  })
  window.addEventListener('beforeinstallprompt', (e) => {
    atomStoreManager.set(chromeInstallPromptAtom, e)
  })
}

// original: $$g6
/**
 * React hook that tracks whether the app is running in ChromeOS tabbed mode.
 * original name: $$g6
 */
export function useChromeOSTabbed(): boolean {
  const [isTabbed, setIsTabbed] = useState<boolean>(isChromebookTabbed())

  useEffect(() => {
    if (!BrowserInfo.chromeos || !BrowserInfo.chrome)
      return

    const onChange = () => setIsTabbed(isChromebookTabbed())
    const mq = window.matchMedia('(display-mode: tabbed)')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isTabbed
}

const BLOCKED_KEYS = new Set([
  'BrowserRefresh',
  'BrowserBack',
  'BrowserForward',
  'ZoomToggle',
  'PrintScreen',
  'BrightnessUp',
  'BrightnessDown',
  'MediaPlayPause',
  'AudioVolumeMute',
  'AudioVolumeUp',
  'AudioVolumeDown',
  'F4',
  'Unidentified',
])

// original: E
function preventBrowserKeyPropagation(e: KeyboardEvent): void {
  if (BLOCKED_KEYS.has(e.key)) {
    e.stopPropagation()
  }
}

// original: $$y5
/**
 * React hook that prevents certain browser keys from propagating when in ChromeOS tabbed mode.
 * original name: $$y5
 */
export function usePreventBrowserKeydown(): void {
  const isTabbed = useChromeOSTabbed()

  useEffect(() => {
    if (!isTabbed)
      return
    document.addEventListener('keydown', preventBrowserKeyPropagation, true)
    return () => document.removeEventListener('keydown', preventBrowserKeyPropagation, true)
  }, [isTabbed])
}

// Export old obfuscated names as aliases to the refactored identifiers
export const Bb = chromeInstallPromptAtom // original $$_0
export const Fe = applyDarkBackground // original $$p1
export const GH = setupChromeOSListeners // original $$h2
export const ce = isChromebookTabbed // original $$d3
export const cm = isAllowedPath // original $$u4
export const fp = usePreventBrowserKeydown// original $$y5
export const lH = useChromeOSTabbed // original $$g6
