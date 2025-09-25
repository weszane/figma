import type { UseDispatch } from 'react-redux'
import type { Dispatch, Store } from 'redux'
import type { AppState as App } from './app.js'
import type { EarlyArgs, Fig as FigType, InitialOptions } from './global.d.ts'
import { TaskController as TaskControllerPrority } from '../src/figma_app/946103.js'

declare global {
  type Fn = (...args: any[]) => any
  interface ObjectOf<T = any> { [key: string]: T }
  let scheduler: any
  let createFileImporter: any
  let Fig: FigType
  type AppDispatch = Dispatch<any>
  let mpGlobal: any
  type AppState = App
  let TaskController = TaskControllerPrority
  type Dispatch = (action: any) => any;
  interface Window {
    INITIAL_OPTIONS: InitialOptions
    EARLY_ARGS: EarlyArgs
    Fig: FigType
    figma: any
    FigmaMobile: any
    store: {
      getState: () => AppState
      dispatch: Dispatch<any>
    }
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
