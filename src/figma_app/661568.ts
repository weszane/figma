import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { debounce } from '../905/915765'
import { getMemoryUsage } from '../figma_app/527873'
import { getViewerInstance } from '../figma_app/632319'
import { CorePerfInfo } from '../figma_app/763686'
import { BrowserInfo } from '../figma_app/778880'
import type { LoadTimeTracker } from './781115'

// Timer for tracking prototype library loading performance
interface LoadTimerEvents {
  [key: string]: number
}

class LoadTimer {
  reported: boolean = false
  initializationStart: number | null = null
  events: LoadTimerEvents = {}

  // Event names that this timer subscribes to
  static readonly SUBSCRIBED_EVENTS = [
    'applyNodeChanges',
    'multiplayerMessageSize',
    'initializePrototypeLib',
    'viewerSceneDidCompleteInitialLoad',
    'transferSentToWorker',
    'transferMemory',
    'transferMemorySize',
  ]

  constructor(eventRegistry: Record<string, LoadTimer[]>) {
    // Register this instance with the event registry for each subscribed event
    for (const eventName of LoadTimer.SUBSCRIBED_EVENTS) {
      if (!eventRegistry[eventName]) {
        eventRegistry[eventName] = []
      }
      eventRegistry[eventName].push(this)
    }
  }

  reset(): void {
    this.events = {}
  }

  start(eventName: string): void {
    this.logTime(`${eventName}Start`)
    if (eventName === 'initializePrototypeLib') {
      this.initializationStart = performance.now()
    }
  }

  end(eventName: string): void {
    this.logTime(`${eventName}End`)
  }

  logValue(key: string, value: number): void {
    this.events[key] = value
  }

  logTime(key: string): void {
    this.events[key] = Math.round(performance.now())
  }

  report(): void {
    this.logTime('reportedAt')

    const reportData = {
      version: 2,
      firstReport: !this.reported,
      totalUsedHeapMemory: CorePerfInfo?.getTotalUsedHeapMemory(),
      maxUsedHeapMemory: CorePerfInfo?.getMaxUsedHeapMemory(),
      fileKey: getViewerInstance()?.openFileKey(),
      ...this.events,
    }

    setTimeout(() => {
      trackEventAnalytics('Prototype Lib Loaded', reportData)
      this.reported = true
    }, 0)
  }
}

// Timer for tracking function performance within the prototype library
interface FunctionTimerMeta {
  [key: string]: number
}

interface FunctionTimerStartTimes {
  [key: string]: number
}

interface FunctionPerformanceData {
  name: string
  start: number
  end: number
  totalUsedHeapMemory?: number
  maxUsedHeapMemory?: number
  [key: string]: number | string | undefined
}

class FunctionTimer {
  startTimes: FunctionTimerStartTimes = {}
  meta: FunctionTimerMeta = {}

  // Debounced tracking function to avoid excessive analytics calls
  track: (data: FunctionPerformanceData) => void

  // Event names that this timer subscribes to
  static readonly SUBSCRIBED_EVENTS = [
    'applyNodeChanges',
    'getNodeChangesForSwap',
    'multiplayerMessageSize',
  ]

  constructor(eventRegistry: Record<string, FunctionTimer[]>) {
    // Create debounced tracking function
    this.track = debounce((data: FunctionPerformanceData) => {
      if (getFeatureFlags().prototype_lib_perf_report) {
        trackEventAnalytics('Prototype Lib Function', data)
      }
    }, 200)

    // Register this instance with the event registry for each subscribed event
    for (const eventName of FunctionTimer.SUBSCRIBED_EVENTS) {
      if (!eventRegistry[eventName]) {
        eventRegistry[eventName] = []
      }
      eventRegistry[eventName].push(this)
    }
  }

  reset(): void {
    this.startTimes = {}
    this.meta = {}
  }

  logValue(key: string, value: number): void {
    this.meta[key] = value
  }

  start(eventName: string): void {
    this.startTimes[eventName] = performance.now()
  }

  end(eventName: string): void {
    if (this.startTimes[eventName] !== undefined) {
      const totalUsedHeapMemory = CorePerfInfo?.getTotalUsedHeapMemory()
      const maxUsedHeapMemory = CorePerfInfo?.getMaxUsedHeapMemory()

      const performanceData: FunctionPerformanceData = {
        name: eventName,
        start: this.startTimes[eventName],
        end: performance.now(),
        totalUsedHeapMemory,
        maxUsedHeapMemory,
        ...this.meta,
      }

      this.track(performanceData)
      this.reset()
    }
  }
}

interface PrototypeLibPerfModule {
  loadTimer: LoadTimer
  reset: () => void
  start: (eventName: string) => void
  end: (eventName: string) => void
  logValue: (eventName: string, value: number) => void
  reportOOM: (failedSize: number) => void
}


// Initialize the prototype library performance tracking module

const eventRegistry: any = {}
const functionTimer = new FunctionTimer(eventRegistry)
const loadTimer = new LoadTimer(eventRegistry)

const timers: (FunctionTimer | LoadTimer)[] = [functionTimer, loadTimer]

export let prototypeLibPerfModule: PrototypeLibPerfModule = {
  loadTimer,

  reset(): void {
    for (const timer of timers) {
      timer.reset()
    }
  },

  start(eventName: string): void {
    eventRegistry[eventName]?.forEach(timer => timer.start(eventName))
  },

  end(eventName: string): void {
    eventRegistry[eventName]?.forEach(timer => timer.end(eventName))
  },

  logValue(eventName: string, value: number): void {
    eventRegistry[eventName]?.forEach(timer => timer.logValue(eventName, value))
  },

  reportOOM(failedSize: number): void {
    // Only report once
    if (!this.loadTimer.reported) {
      const timeSinceInitialization = this.loadTimer.initializationStart
        ? Math.round(performance.now() - this.loadTimer.initializationStart)
        : 0

      const oomData = {
        totalMemoryInBytes: getMemoryUsage(),
        failedSize,
        currentAllocatedBytes: CorePerfInfo?.getTotalUsedHeapMemory(),
        maxAllocatedBytes: CorePerfInfo?.getMaxUsedHeapMemory(),
        timeSinceInitialization,
        is64BitBrowser: BrowserInfo.is64BitBrowser,
      }

      trackEventAnalytics('Prototype Lib Out Of Memory', oomData)
      this.loadTimer.reported = true
    }
  },
}

// Initialize the load time tracker module

let loadTimeTracker: LoadTimeTracker = null

export let loadTimeTrackerModule = {
  setLoadTimeTracker(tracker: LoadTimeTracker) {
    loadTimeTracker = tracker
  },

  getLoadTimeTracker() {
    return loadTimeTracker
  },
}

export const Q = loadTimeTrackerModule
export const r = prototypeLibPerfModule
