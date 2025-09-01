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
