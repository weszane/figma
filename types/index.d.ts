import type { Store } from 'redux'
import type { EarlyArgs, Fig as FigType, InitialOptions } from './global.d.ts'

declare global {

  let scheduler: any
  let createFileImporter: any
  let Fig: FigType
  interface Window {
    INITIAL_OPTIONS: InitialOptions
    EARLY_ARGS: EarlyArgs
    Fig: FigType
    figma: any
    FigmaMobile: any
    store: Store
    drainErrors: any
    __figmaDesktop: any
    __figmaDesktopGetPopoutAPI: any
    bellFeedAPI: any
    ENTRY_POINT: string
    DESKTOP_CHANNEL: string
    DESKTOP_VERSION: string
    DESKTOP_CLIENT_ID: string
    scheduler: any
    _fullscreen_: any
    setDevLogAnalytics: any
    STATSIG_PERF: any
    scheduler: any
    createFileImporter: any
  }

  interface globalThis {
    INITIAL_OPTIONS: InitialOptions
    EARLY_ARGS: EarlyArgs
    Fig: FigType
    figma: any
    FigmaMobile: any
    store: Store
    scheduler: any
  }

}

export { }
