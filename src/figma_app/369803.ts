import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { atom } from 'jotai'
import { createLocalStorageAtom } from '../905/42220'
import { compareVersions } from '../905/616700'

/**
 * Represents a version deprecation schedule entry.
 */
export interface DeprecationScheduleEntry {
  minVersion: string
  date: string
}

/**
 * Status types for version support.
 */
export enum VersionSupportStatus {
  SUPPORTED = 'SUPPORTED',
  DEPRECATED = 'DEPRECATED',
  DISABLED = 'DISABLED',
}

/**
 * Deprecation schedule for versions.
 */
const deprecationSchedule: DeprecationScheduleEntry[] = [
  { minVersion: '124.7.0', date: '2025-05-21' },
  { minVersion: '125.1.0', date: '2025-08-13' },
  { minVersion: '125.2.0', date: '2025-08-28' },
  { minVersion: '125.3.0', date: '2025-09-20' },
  { minVersion: '125.4.0', date: '2025-10-22' },
  { minVersion: '125.5.0', date: '2025-11-06' },
  { minVersion: '125.6.0', date: '2026-01-01' },
  { minVersion: '125.7.0', date: '2026-01-24' },
]

/**
 * Result type for version support check.
 */
export type VersionSupportResult
  = | { status: VersionSupportStatus.SUPPORTED }
  | { status: VersionSupportStatus.DISABLED }
  | { status: VersionSupportStatus.DEPRECATED, date: Dayjs }

/**
 * Checks the support status of a given version.
 * @param version - The version string to check.
 * @param now - The current date (defaults to now).
 * @param schedule - The deprecation schedule to use.
 * @returns The support status and optional deprecation date.
 */
export function checkVersionSupport(
  version: string | null | undefined,
  now: Dayjs = dayjs(),
  schedule: DeprecationScheduleEntry[] = deprecationSchedule,
): VersionSupportResult {
  // $$l2 original function
  if ((window as any).__figmaContent) {
    return { status: VersionSupportStatus.DISABLED }
  }
  if (version == null) {
    return { status: VersionSupportStatus.SUPPORTED }
  }
  if (!(window as any).trustedTypes) {
    return { status: VersionSupportStatus.DISABLED }
  }
  if (
    compareVersions(version, '10.100.0') !== 1
    && compareVersions(version, '10.101.0') === 1
  ) {
    return { status: VersionSupportStatus.SUPPORTED }
  }
  for (const { minVersion, date } of schedule) {
    if (compareVersions(version, minVersion) !== 1)
      continue
    const deprecationDate = dayjs(date)
    if (deprecationDate.isBefore(now)) {
      return { status: VersionSupportStatus.DISABLED }
    }
    if (deprecationDate.subtract(2, 'month').isBefore(now)) {
      return {
        status: VersionSupportStatus.DEPRECATED,
        date: deprecationDate,
      }
    }
  }
  return { status: VersionSupportStatus.SUPPORTED }
}

/**
 * Atom for storing the last dismissed desktop deprecation banner date.
 */
const lastDismissedDeprecationBannerAtom = createLocalStorageAtom(
  'last_dismissed_desktop_deprecation_banner',
  '',
  { subscribeToChanges: true },
)

/**
 * Atom to determine if the deprecation banner should be shown.
 */
export const shouldShowDeprecationBannerAtom = atom(
  // $$c1 original atom
  (get) => {
    const lastDismissed = get(lastDismissedDeprecationBannerAtom)
    if (lastDismissed) {
      const dismissedDate = dayjs(lastDismissed)
      const oneWeekAgo = dayjs().subtract(1, 'week')
      if (dismissedDate.isAfter(oneWeekAgo))
        return true
    }
    return false
  },
  (get, set, show: boolean) => {
    set(
      lastDismissedDeprecationBannerAtom,
      show ? dayjs().toISOString() : '',
    )
  },
)

// Exported variables with refactored names
export const JN = VersionSupportStatus // $$o0
export const Pi = shouldShowDeprecationBannerAtom // $$c1
export const x5 = checkVersionSupport // $$l2
