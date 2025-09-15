import { transformAtom } from '../905/401885'
import { createRemovableAtomFamily } from '../figma_app/27355'
import { UserForRcs } from '../figma_app/43951'
import { V5 as surveyResponsesSet } from '../figma_app/625596'

/**
 * Transforms user flags into a map keyed by flag name.
 * Original variable: $$o4
 */
export const userFlagsAtom = transformAtom(
  UserForRcs.Query({}),
  (response) => {
    const flags = response.currentUser.userFlags
    const flagMap: Record<string, typeof flags[number]> = {}
    flags.forEach((flag) => {
      flagMap[flag.name] = flag
    })
    return flagMap
  },
)

/**
 * Creates a removable atom family for accessing specific user flags.
 * Original variable: $$l1
 */
export const userFlagAtomFamily = createRemovableAtomFamily(
  (flagName: string) => transformAtom(userFlagsAtom, flagMap => flagMap[flagName]),
)

/**
 * Returns the most recent date from an array of timestamps.
 * Original function: d
 * @param timestamps Array of timestamps as strings or numbers
 * @returns Date of the most recent timestamp, or undefined if empty
 */
function getLatestDate(timestamps: (string | number)[]): Date | undefined {
  if (timestamps.length === 0)
    return undefined
  return new Date(Math.max(...timestamps.map(Number)))
}

/**
 * Atom for the latest survey response update date.
 * Original variable: $$c3
 */
export const latestSurveyResponseDateAtom = transformAtom(
  userFlagsAtom,
  (flagMap) => {
    const updatedAts = Array.from(surveyResponsesSet)
      .map(key => flagMap[key]?.updatedAt)
      .filter(date => date != null)
    return getLatestDate(updatedAts)
  },
)

/**
 * Creates a removable atom family to check if a user flag exists.
 * Original variable: $$u5
 */
export const userFlagExistsAtomFamily = createRemovableAtomFamily(
  (flagName: string) => transformAtom(userFlagsAtom, flagMap => flagMap[flagName] != null),
)

/**
 * Atom indicating if the user has onboarded the file browser.
 * Original variable: $$p2
 */
const fileBrowserOnboardedAtom = userFlagExistsAtomFamily('file_browser_onboarded')

/**
 * Atom for the 'not_gen_0' user flag.
 * Original variable: $$_0
 */
const notGen0Atom = userFlagAtomFamily('not_gen_0')

// Exported variables (refactored names match import/export convention)
/** Atom for the 'not_gen_0' user flag. Original export: $B */
export const B = notGen0Atom
/** Removable atom family for user flags. Original export: Fu */
export const Fu = userFlagAtomFamily
/** Atom for file browser onboarding status. Original export: GW */
export const GW = fileBrowserOnboardedAtom
/** Atom for latest survey response date. Original export: Hy */
export const Hy = latestSurveyResponseDateAtom
/** Atom for all user flags. Original export: qG */
export const qG = userFlagsAtom
/** Removable atom family for user flag existence. Original export: r1 */
export const r1 = userFlagExistsAtomFamily
