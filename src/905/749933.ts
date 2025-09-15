import { createContext } from 'react'

/**
 * Context value type for StatsigContext.
 */
export interface StatsigContextValue {
  initialized: boolean
  initStarted: boolean
  initCompleted: boolean
  statsigPromise: Promise<any> | null
  updateUser: () => void
  userVersion: number
}

/**
 * StatsigContext (original: $$n0)
 * Provides initialization and user update state for Statsig.
 */
export const StatsigContext = createContext<StatsigContextValue>({
  initialized: false,
  initStarted: false,
  initCompleted: false,
  statsigPromise: null,
  updateUser: () => {},
  userVersion: 0,
})

/**
 * Exported alias for StatsigContext (original: B)
 */
export const B = StatsigContext
