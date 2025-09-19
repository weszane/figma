import { Atom, WritableAtom } from 'jotai' // Assuming jotai types for atoms
import { useMemo } from 'react'
import { getPlanFeaturesAtomFamily } from '../905/276025'
import { getFeatureFlags } from '../905/601108'
import { getResourceDataOrFallback } from '../905/723791'
import { currentUserOrgIdAtom } from '../905/845253'
import { parentOrgIdAtom } from '../905/872904'
import { atom, createRemovableAtomFamily, useAtomWithSubscription } from '../figma_app/27355'
import { LibraryOrgSubscriptions, LibraryPresetSubscriptionsV2, LibrarySubscriptionsForTeam, LibraryTeamSubscriptions, LibraryUserSubscriptions, WorkspaceSubscribedLibrariesForTeam } from '../figma_app/43951'
import { getProviderConfigType } from '../figma_app/155411'
import { FPlanNameType } from '../figma_app/191312'
import { currentTeamAtom, isNumericString } from '../figma_app/598018'
import { figmaLibrariesEnabledAtom } from '../figma_app/657017'
import { createLoadedState } from './957591'

/**
 * Refactored atoms and utility functions for library subscriptions.
 * Original variable/function names are preserved in comments for traceability.
 * Types are added for clarity.
 */

// Types for subscription data
type SubscriptionStatus = 'loaded' | string
interface LibrarySubscription {
  id: string
  libraryKey: string
  isSubscribed?: boolean
  figJamSubscribed?: boolean
  slidesSubscribed?: boolean
  buzzSubscribed?: {
    status: SubscriptionStatus
    data?: any
  }
  communityLibrary?: any
  library?: any
}
type SubscriptionOverrides = Record<string, {
  design: boolean
  figjam: boolean
  slides: boolean
  buzz: boolean
  subscriptionId: string
}>

// Utility function to process subscriptions
/**
 * Processes a list of subscriptions and returns a mapping of libraryKey to subscription details.
 * @param subscriptions Array of LibrarySubscription objects.
 * @param options Options to ignore community subscriptions.
 * @returns SubscriptionOverrides mapping.
 * @see S
 */
export function processSubscriptions(
  subscriptions: LibrarySubscription[],
  options?: { ignoreCommunitySubs?: boolean },
): SubscriptionOverrides {
  const ignoreCommunitySubs = options?.ignoreCommunitySubs ?? false
  const filtered = subscriptions.filter(sub => sub.library || sub.communityLibrary)
  const result: SubscriptionOverrides = {}
  for (const sub of filtered) {
    if ((sub.communityLibrary && ignoreCommunitySubs) || !sub.libraryKey)
      continue
    result[sub.libraryKey] = {
      design: !!sub.isSubscribed,
      figjam: !!sub.figJamSubscribed,
      slides: !!sub.slidesSubscribed,
      buzz: sub.buzzSubscribed?.status === 'loaded' && !!sub.buzzSubscribed?.data,
      subscriptionId: sub.id,
    }
  }
  return result
}

// Refactored atom for preset subscriptions
/**
 * Atom for library preset subscriptions.
 * @see _
 */
export const libraryPresetSubscriptionsAtom = atom((get) => {
  const parentOrgId = get(parentOrgIdAtom)
  const providerConfigType = getProviderConfigType()
  const isNotStarter = get<ObjectOf>(getPlanFeaturesAtomFamily(true)).data?.tier !== FPlanNameType.STARTER
  const { data } = providerConfigType
    ? get<ObjectOf>(LibraryPresetSubscriptionsV2.Query({ group: providerConfigType }))
    : createLoadedState({ libraryPresetSubscriptionsV2: [] })
  if (data && data.libraryPresetSubscriptionsV2) {
    if (parentOrgId || isNotStarter)
      return []
    return data.libraryPresetSubscriptionsV2.filter(
      sub => sub.default_subscribed.status !== 'loaded' || sub.default_subscribed.data,
    )
  }
  return undefined
})

// Refactored atom for org subscriptions
/**
 * Atom for organization library subscriptions.
 * @see $$A0
 */
export const orgLibrarySubscriptionsAtom = atom((get) => {
  const parentOrgId = get(parentOrgIdAtom)
  const orgSubscriptions = parentOrgId
    ? get<ObjectOf>(LibraryOrgSubscriptions.Query({ orgId: parentOrgId }))
    : createLoadedState({ orgLibrarySubscriptions: [] })
  const figmaEnabled = get(figmaLibrariesEnabledAtom)
  if (orgSubscriptions.status !== 'loaded')
    return orgSubscriptions
  const subs = orgSubscriptions.data.orgLibrarySubscriptions
  if (!subs)
    return createLoadedState({})
  const processed = processSubscriptions(subs, { ignoreCommunitySubs: !figmaEnabled })
  return createLoadedState(processed)
})

// Refactored atom family for workspace subscriptions
/**
 * Atom family for workspace library subscriptions for a team.
 * @see $$y4
 */
export const workspaceLibrarySubscriptionsAtomFamily = createRemovableAtomFamily(teamId =>
  atom((get) => {
    const currentOrgId = get(currentUserOrgIdAtom)
    const isValid = !!teamId && !!currentOrgId
    const figmaEnabled = get(figmaLibrariesEnabledAtom)
    const teamSubscriptions = isValid
      ? get<ObjectOf>(WorkspaceSubscribedLibrariesForTeam.Query({ teamId }))
      : createLoadedState({ team: null })
    if (teamSubscriptions.status !== 'loaded')
      return teamSubscriptions
    const subs = teamSubscriptions.data.team?.workspace?.librarySubscriptions
    if (!subs)
      return createLoadedState({})
    const processed = processSubscriptions(subs, { ignoreCommunitySubs: !figmaEnabled })
    return createLoadedState(processed)
  }),
)

// Refactored atom family for team subscriptions
/**
 * Atom family for team library subscription overrides.
 * @see $$b1
 */
export const teamLibrarySubscriptionOverridesAtomFamily = createRemovableAtomFamily(teamId =>
  atom((get) => {
    let overrides
    if (getFeatureFlags().dse_library_subscriptions_for_team) {
      if (!teamId)
        return createLoadedState({})
      const teamSubs = get<ObjectOf>(LibrarySubscriptionsForTeam.Query({ teamId }))
      if (teamSubs.status !== 'loaded')
        return teamSubs
      overrides = teamSubs.data.team?.libraryTeamSubscriptionOverrides
    }
    else {
      const teamSubs = get<ObjectOf>(LibraryTeamSubscriptions.Query({}))
      if (teamSubs.status !== 'loaded')
        return teamSubs
      overrides = teamSubs.data.allTeamRoles?.find(role => role?.team?.id === teamId)?.team?.libraryTeamSubscriptionOverrides
    }
    if (!overrides)
      return createLoadedState({})
    const processed = processSubscriptions(overrides, { ignoreCommunitySubs: !get(figmaLibrariesEnabledAtom) })
    return createLoadedState(processed)
  }),
)

// Refactored atom for all team subscription overrides
/**
 * Atom for all team library subscription overrides.
 * @see v
 */
export const allTeamLibrarySubscriptionOverridesAtom = atom((get) => {
  const teamSubs = get<ObjectOf>(LibraryTeamSubscriptions.Query({}))
  const figmaEnabled = get(figmaLibrariesEnabledAtom)
  const parentOrgId = get(parentOrgIdAtom)
  const currentTeam = get(currentTeamAtom)
  const currentTeamId = isNumericString(currentTeam?.id) ? currentTeam?.id : ''
  if (teamSubs.status !== 'loaded')
    return teamSubs
  const teams = teamSubs.data.allTeamRoles?.filter(
    role => role.team && !role.team.deletedAt && (role.team.orgId === parentOrgId || role.team.id === currentTeamId),
  ).map(role => role.team) ?? []
  const result: Record<string, SubscriptionOverrides> = {}
  teams.forEach((team) => {
    result[team.id] = processSubscriptions(team.libraryTeamSubscriptionOverrides, { ignoreCommunitySubs: !figmaEnabled })
  })
  return createLoadedState(result)
})

// Refactored atom for merged team subscription overrides
/**
 * Atom for merged team library subscription overrides.
 * @see $$I3
 */
export const mergedTeamLibrarySubscriptionOverridesAtom = atom((get) => {
  const allOverrides = get(allTeamLibrarySubscriptionOverridesAtom)
  if (allOverrides.status !== 'loaded')
    return allOverrides
  const data = allOverrides.data
  const merged: SubscriptionOverrides = {}
  for (const overrides of Object.values(data)) {
    for (const [key, value] of Object.entries(overrides)) {
      merged[key] = merged[key]
        ? {
            design: merged[key].design || value.design,
            figjam: merged[key].figjam || value.figjam,
            slides: merged[key].slides || value.slides,
            buzz: merged[key].buzz || value.buzz,
            subscriptionId: value.subscriptionId,
          }
        : { ...value }
    }
  }
  return createLoadedState(merged)
})

// Refactored atom for user subscriptions
/**
 * Atom for user library subscriptions.
 * @see $$E6
 */
export const userLibrarySubscriptionsAtom = atom((get) => {
  const userSubs = get<ObjectOf>(LibraryUserSubscriptions.Query({}))
  const figmaEnabled = get(figmaLibrariesEnabledAtom)
  if (userSubs.status !== 'loaded')
    return userSubs
  const subs = userSubs.data.currentUser.libraryUserSubscriptions
  if (!subs)
    return createLoadedState({})
  const processed = processSubscriptions(subs, { ignoreCommunitySubs: !figmaEnabled })
  return createLoadedState(processed)
})

/**
 * Hook to get memoized preset subscriptions mapping.
 * @see $$x2
 */
export function usePresetSubscriptionsMapping() {
  const subscriptions = useAtomWithSubscription(libraryPresetSubscriptionsAtom)
  return useMemo(() => {
    if (!subscriptions)
      return
    const mapping: SubscriptionOverrides = {}
    for (const sub of subscriptions) {
      const resourceKey = getResourceDataOrFallback(sub.libraryKey)
      if (resourceKey) {
        mapping[resourceKey] = {
          design: true,
          figjam: false,
          slides: false,
          buzz: false,
          subscriptionId: sub.id,
        }
      }
    }
    return mapping
  }, [subscriptions])
}

/**
 * Converts a subscription mapping to an array of subscription objects.
 * @see $$w5
 */
export function subscriptionMappingToArray(mapping: SubscriptionOverrides) {
  return Object.keys(mapping).map(key => ({
    id: mapping[key]?.subscriptionId,
    communityLibrary: {},
    libraryKey: key,
    library: null,
    isSubscribed: true,
  }))
}

// Export refactored atoms and functions with original export names for traceability
export const GO = orgLibrarySubscriptionsAtom
export const Lr = teamLibrarySubscriptionOverridesAtomFamily
export const Nn = usePresetSubscriptionsMapping
export const XM = mergedTeamLibrarySubscriptionOverridesAtom
export const pD = workspaceLibrarySubscriptionsAtomFamily
export const sj = subscriptionMappingToArray
export const zK = userLibrarySubscriptionsAtom
