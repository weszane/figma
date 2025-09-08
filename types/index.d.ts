import type { Store } from 'redux'
import type { EarlyArgs, Fig, InitialOptions } from './global.d.ts'




declare global {
  interface Window {
    INITIAL_OPTIONS: InitialOptions
    EARLY_ARGS: EarlyArgs
    Fig: Fig
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
    _fullscreen_:any
  }

  interface globalThis {
    INITIAL_OPTIONS: InitialOptions
    EARLY_ARGS: EarlyArgs
    Fig: Fig
    figma: any
    FigmaMobile: any
    store: Store
  }

  // const ObservableValue_Map_GUID_Int: any
  
  


}

export { }
