import type { PrimitiveAtom } from 'jotai';
import { useSetAtom } from 'jotai';
import { uniqBy } from 'lodash-es';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useMemoStable } from '../905/19536';
import { getFeatureFlags } from '../905/601108';
import { getResourceDataOrFallback } from '../905/723791';
import { matchesLibraryKey } from '../905/760074';
import { createLoadedState } from '../905/957591';
import { atom, useAtomWithSubscription } from '../figma_app/27355';
import { LibraryPresetSubscriptionsV2, SubscribedLibrariesForBuzzFile, SubscribedLibrariesForFigJamFile, SubscribedLibrariesForFile, SubscribedLibrariesForSlidesFile } from '../figma_app/43951';
import { assertNotNullish, isNotNullish } from '../figma_app/95419';
import { getProviderConfigType } from '../figma_app/155411';
import { useSiteKitAssetsSubscription } from '../figma_app/177636';
import { isSlidesFile } from '../figma_app/252485';
import { useSubscription, useSubscriptionAnalytics } from '../figma_app/288654';
import { useCurrentPublicPlan, useIsProOrStudentPlan } from '../figma_app/465071';
import { selectCurrentFile } from '../figma_app/516028';
import { hasRootPath } from '../figma_app/528509';
import { useParentOrgOfOpenFile } from '../figma_app/543529';
import { flatten, sortByPropertyWithOptions } from '../figma_app/656233';
import { useFigmaLibrariesEnabled } from '../figma_app/657017';
import { isInteractionPathCheck } from '../figma_app/897289';
/**
 * LibrarySubscriptionType enum (original: $$x1)
 */
export enum LibrarySubscriptionType {
  COMMUNITY = 'community',
  ORGANIZATION = 'organization',
  WORKSPACE = 'workspace',
  TEAM = 'team',
  FILE = 'file',
  USER = 'user',
}

/**
 * SubscribedLibrariesContext (original: N)
 */
const SubscribedLibrariesContext = createContext<SubscribedLibrariesContextValue | null>(null);

/**
 * Atom for storing subscribed libraries (original: $$C4)
 */
export const SubscribedLibrariesAtom = atom<any>(void 0) as PrimitiveAtom<any>;

/**
 * Hook to get the transformed subscription (original: $$w6)
 * Must be called within SubscribedLibrariesProvider
 */
export function useSubscribedLibraries() {
  const context = useContext(SubscribedLibrariesContext);
  const {
    subscription,
    ensureSubscription
  } = assertNotNullish(context, 'Must call `useSubscribedLibraries` from within <SubscribedLibrariesContext>');
  useEffect(() => {
    ensureSubscription();
  }, [ensureSubscription]);
  const emptyState = useMemo(() => createLoadedState([]), []);
  return isInteractionPathCheck() ? emptyState : subscription;
}

/**
 * Hook to get a set of file keys from the subscription (original: $$O8)
 */
export function useSubscribedLibraryFileKeys() {
  const subscription = useSubscribedLibraries();
  return useMemoStable(() => {
    const fileKeys = new Set<string>();
    subscription.data?.forEach(lib => fileKeys.add(lib.fileKey));
    return fileKeys;
  }, [subscription.data]);
}

/**
 * Hook to get a set of library keys from the subscription (original: $$R9)
 */
export function useSubscribedLibraryKeys() {
  const subscription = useSubscribedLibraries();
  return useMemoStable(() => {
    const libraryKeys = new Set<string>();
    subscription.data?.forEach(lib => libraryKeys.add(lib.libraryKey));
    return libraryKeys;
  }, [subscription.data]);
}

/**
 * Hook to get the untransformed subscription (original: $$L10)
 * Must be called within SubscribedLibrariesProvider
 */
export function useUntransformedSubscribedLibraries() {
  const context = useContext(SubscribedLibrariesContext);
  const {
    untransformedSubscription,
    ensureSubscription
  } = assertNotNullish(context, 'Must call `useSubscribedLibraries` from within <SubscribedLibrariesContext>');
  useEffect(() => {
    ensureSubscription();
  }, [ensureSubscription]);
  return untransformedSubscription;
}

/**
 * Get grouped library keys by org/team/file/user (original: $$P7)
 */
export function getGroupedSubscribedLibraryKeys() {
  const context = useContext(SubscribedLibrariesContext);
  const {
    untransformedSubscription
  } = assertNotNullish(context, 'Must call `useSubscribedLibraries` from within <SubscribedLibrariesContext>');
  if (untransformedSubscription.status !== 'loaded') return {};
  const result: Record<string, Set<string>> = {};
  const {
    file
  } = untransformedSubscription.data;
  if (file?.libraryOrgSubscriptions.length) {
    result.org = file.libraryOrgSubscriptions.reduce((set, sub) => {
      const key = sub.library?.file?.libraryKey;
      if (key) set.add(key);
      return set;
    }, new Set<string>());
  }
  if (file?.libraryTeamSubscriptions.length) {
    result.team = file.libraryTeamSubscriptions.reduce((set, sub) => {
      const key = sub.library?.file?.libraryKey;
      if (key) set.add(key);
      return set;
    }, new Set<string>());
  }
  if (file?.libraryFileSubscriptions.length) {
    result.file = file.libraryFileSubscriptions.reduce((set, sub) => {
      const key = sub.library?.file?.libraryKey;
      if (key) set.add(key);
      return set;
    }, new Set<string>());
  }
  if (file?.libraryUserSubscriptions.length) {
    result.user = file.libraryUserSubscriptions.reduce((set, sub) => {
      const key = sub.library?.file?.libraryKey;
      if (key) set.add(key);
      return set;
    }, new Set<string>());
  }
  return result;
}

/**
 * Provider for subscribed libraries context (original: $$D0)
 */
export function SubscribedLibrariesProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const file = selectCurrentFile();
  const hasTeam = !!file?.teamId;
  const hasProjectRoot = hasRootPath(file?.project);
  useAtomWithSubscription(LibraryPresetSubscriptionsV2.Query({
    group: getProviderConfigType()
  }));
  useSiteKitAssetsSubscription();
  const [enabled, setEnabled] = useState(false);
  const fileKey = file?.key;
  const teamId = file?.teamId;
  const workspaceId = file?.team?.workspaceId;
  const orgId = file?.parentOrgId;
  const isSlides = isSlidesFile(file?.editorType ?? null);
  const isCooper = file?.editorType === 'cooper' && !!getFeatureFlags().buzz_library_subscriptions;
  const editorType = useMemo(() => isSlides ? 'slides' : isCooper ? 'cooper' : file?.editorType === 'whiteboard' ? 'whiteboard' : 'design', [isCooper, isSlides, file?.editorType]);
  const subscriptionParams = useMemo(() => ({
    fileKey: fileKey || '',
    teamId: teamId ?? '-1',
    workspaceId: workspaceId || null,
    orgId: orgId || null,
    group: getProviderConfigType() ?? null
  }), [fileKey, teamId, workspaceId, orgId]);
  const designSubscription = useSubscription(SubscribedLibrariesForFile, subscriptionParams, {
    enabled: !!file && enabled && editorType === 'design'
  });
  const figJamSubscription = useSubscription(SubscribedLibrariesForFigJamFile, subscriptionParams, {
    enabled: !!file && enabled && editorType === 'whiteboard'
  });
  const slidesSubscription = useSubscription(SubscribedLibrariesForSlidesFile, subscriptionParams, {
    enabled: !!file && enabled && editorType === 'slides'
  });
  const buzzSubscription = useSubscription(SubscribedLibrariesForBuzzFile, subscriptionParams, {
    enabled: !!file && enabled && editorType === 'cooper'
  });

  /**
   * Transform subscription based on editor type (original: F)
   */
  const transformedSubscription = useMemo(() => {
    switch (editorType) {
      case 'design':
        return designSubscription;
      case 'whiteboard':
        return transformFigJamSubscription(figJamSubscription);
      case 'slides':
        return transformSlidesSubscription(slidesSubscription);
      case 'cooper':
        return transformBuzzSubscription(buzzSubscription);
      default:
        return designSubscription;
    }
  }, [editorType, designSubscription, figJamSubscription, slidesSubscription, buzzSubscription]);

  /**
   * Final transformed subscription (original: j)
   */
  const finalSubscription = useTransformSubscription(transformedSubscription, hasTeam, hasProjectRoot);
  const contextValue = useMemo(() => ({
    subscription: finalSubscription,
    ensureSubscription: () => setEnabled(true),
    untransformedSubscription: transformedSubscription
  }), [transformedSubscription, finalSubscription]);
  const setAtom = useSetAtom(SubscribedLibrariesAtom);
  useEffect(() => {
    if (finalSubscription.status === 'loaded') setAtom(finalSubscription.data);
  }, [finalSubscription, setAtom]);
  return jsxs(Fragment, {
    children: [jsx(SubscribedLibrariesContext.Provider, {
      value: contextValue,
      children
    }), enabled && jsx(SubscriptionAnalytics, {
      subscription: finalSubscription
    })]
  });
}

/**
 * Subscription analytics component (original: k)
 */
function SubscriptionAnalytics({
  subscription
}: {
  subscription: any;
}) {
  useSubscriptionAnalytics(subscription, 'Subscribed Libraries Subscription Load Time', {
    numLibraries: subscription.status === 'loaded' ? subscription.data.length : 0
  });
  return null;
}

/**
 * Transform subscription for FigJam editor (original: whiteboard case in F)
 */
function transformFigJamSubscription(subscription: any) {
  if (subscription.status === 'loading' || subscription.status === 'errors' || subscription.status === 'disabled') {
    return subscription;
  }
  const file = subscription.data.file;
  if (!file) {
    return createLoadedState({
      file: null,
      libraryPresetSubscriptionsV2: subscription.data.libraryPresetSubscriptionsV2
    });
  }
  const transformedFile = {
    ...file,
    currentUser: file.currentUser ? {
      ...file.currentUser,
      orgAwareTeamRoles: file.currentUser.orgAwareTeamRoles.map(role => {
        const teamSubscriptions = getResourceDataOrFallback(role.team?.libraryTeamSubscriptionsForFigJam);
        return {
          ...role,
          team: role.team && teamSubscriptions ? {
            ...role.team,
            libraryTeamSubscriptions: teamSubscriptions
          } : null
        };
      })
    } : null,
    libraryOrgSubscriptions: file.libraryOrgSubscriptionsForFigJam.status === 'loaded' ? file.libraryOrgSubscriptionsForFigJam.data : [],
    libraryTeamSubscriptions: file.libraryTeamSubscriptionsForFigJam.status === 'loaded' ? file.libraryTeamSubscriptionsForFigJam.data : [],
    libraryUserSubscriptions: file.libraryUserSubscriptionsForFigJam.status === 'loaded' ? file.libraryUserSubscriptionsForFigJam.data : []
  };
  transformedFile.computedWorkspacePublicInfo?.workspace?.librarySubscriptions?.forEach(sub => {
    sub.isSubscribed = sub.figJamSubscribed ?? false;
  });
  return createLoadedState({
    file: transformedFile,
    libraryPresetSubscriptionsV2: subscription.data.libraryPresetSubscriptionsV2
  });
}

/**
 * Transform subscription for Slides editor (original: slides case in F)
 */
function transformSlidesSubscription(subscription: any) {
  if (subscription.status === 'loading' || subscription.status === 'errors' || subscription.status === 'disabled') {
    return subscription;
  }
  const file = subscription.data.file;
  if (!file) {
    return createLoadedState({
      file: null,
      libraryPresetSubscriptionsV2: subscription.data.libraryPresetSubscriptionsV2
    });
  }
  const transformedFile = {
    ...file,
    currentUser: file.currentUser ? {
      ...file.currentUser,
      orgAwareTeamRoles: file.currentUser.orgAwareTeamRoles.map(role => {
        const teamSubscriptions = getResourceDataOrFallback(role.team?.libraryTeamSubscriptionsForSlides);
        return {
          ...role,
          team: role.team && teamSubscriptions ? {
            ...role.team,
            libraryTeamSubscriptions: teamSubscriptions
          } : null
        };
      })
    } : null,
    libraryOrgSubscriptions: file.libraryOrgSubscriptionsForSlides.status === 'loaded' ? file.libraryOrgSubscriptionsForSlides.data : [],
    libraryTeamSubscriptions: file.libraryTeamSubscriptionsForSlides.status === 'loaded' ? file.libraryTeamSubscriptionsForSlides.data : [],
    libraryUserSubscriptions: file.libraryUserSubscriptionsForSlides.status === 'loaded' ? file.libraryUserSubscriptionsForSlides.data : []
  };
  transformedFile.computedWorkspacePublicInfo?.workspace?.librarySubscriptions?.forEach(sub => {
    sub.isSubscribed = sub.slidesSubscribed ?? false;
  });
  return createLoadedState({
    file: transformedFile,
    libraryPresetSubscriptionsV2: subscription.data.libraryPresetSubscriptionsV2
  });
}

/**
 * Transform subscription for Buzz editor (original: cooper case in F)
 */
function transformBuzzSubscription(subscription: any) {
  if (subscription.status === 'loading' || subscription.status === 'errors' || subscription.status === 'disabled') {
    return subscription;
  }
  const file = subscription.data.file;
  if (!file) {
    return createLoadedState({
      file: null,
      libraryPresetSubscriptionsV2: subscription.data.libraryPresetSubscriptionsV2
    });
  }
  const transformedFile = {
    ...file,
    currentUser: file.currentUser ? {
      ...file.currentUser,
      orgAwareTeamRoles: file.currentUser.orgAwareTeamRoles.map(role => {
        const teamSubscriptions = getResourceDataOrFallback(role.team?.libraryTeamSubscriptionsForBuzz);
        return {
          ...role,
          team: role.team && teamSubscriptions ? {
            ...role.team,
            libraryTeamSubscriptions: teamSubscriptions
          } : null
        };
      })
    } : null,
    libraryOrgSubscriptions: file.libraryOrgSubscriptionsForBuzz.status === 'loaded' ? file.libraryOrgSubscriptionsForBuzz.data : [],
    libraryTeamSubscriptions: file.libraryTeamSubscriptionsForBuzz.status === 'loaded' ? file.libraryTeamSubscriptionsForBuzz.data : [],
    libraryUserSubscriptions: file.libraryUserSubscriptionsForBuzz.status === 'loaded' ? file.libraryUserSubscriptionsForBuzz.data : []
  };
  transformedFile.computedWorkspacePublicInfo?.workspace?.librarySubscriptions?.forEach(sub => {
    sub.isSubscribed = sub.buzzSubscribed.status === 'loaded' && sub.buzzSubscribed.data ? sub.buzzSubscribed.data : false;
  });
  return createLoadedState({
    file: transformedFile,
    libraryPresetSubscriptionsV2: subscription.data.libraryPresetSubscriptionsV2
  });
}

/**
 * Transform and filter subscriptions (original: $$M5)
 */
export function useTransformSubscription(subscription: any, hasTeam: boolean, hasProjectRoot: boolean) {
  const figmaLibrariesEnabled = useFigmaLibrariesEnabled();
  const parentOrgId = useParentOrgOfOpenFile()?.id;
  const publicPlan = useCurrentPublicPlan('useTransformSubscription');
  const isProOrStudent = useIsProOrStudentPlan(publicPlan).unwrapOr(false);
  return useMemo(() => {
    return transformAndFilterSubscriptions(subscription, hasTeam, hasProjectRoot, figmaLibrariesEnabled, parentOrgId ?? null, isProOrStudent);
  }, [subscription, hasTeam, hasProjectRoot, figmaLibrariesEnabled, parentOrgId, isProOrStudent]);
}

/**
 * Transform and filter subscriptions logic (original: $$M5)
 */
export function transformAndFilterSubscriptions(subscription: any, hasTeam: boolean, hasProjectRoot: boolean, figmaLibrariesEnabled: boolean, parentOrgId: string | null, isProOrStudent: boolean) {
  if (subscription.status === 'loading' || subscription.status === 'errors' || subscription.status === 'disabled') {
    return subscription;
  }
  const file = subscription.data.file;
  if (!file) return createLoadedState([]);
  const presetSubscriptions = subscription.data.libraryPresetSubscriptionsV2;
  const orgSubscriptions = file.libraryOrgSubscriptions;
  const workspaceSubscriptions = file.computedWorkspacePublicInfo?.workspace?.librarySubscriptions;
  const teamSubscriptions = file.libraryTeamSubscriptions;
  const userSubscriptions = file.libraryUserSubscriptions;
  const fileSubscriptions = file.libraryFileSubscriptions;
  let libraries: any[] = [...orgSubscriptions.filter(sub => figmaLibrariesEnabled || !sub.communityLibrary).filter(sub => hasProjectRoot ? (sub.libraryFileSubscriptionOverride || sub.libraryUserSubscriptionOverride) == null : (sub.libraryFileSubscriptionOverride || sub.libraryWorkspaceSubscriptionOverride || sub.libraryTeamSubscriptionOverride) == null).map(sub => mapLibrarySubscription(sub, LibrarySubscriptionType.ORGANIZATION)), ...fileSubscriptions.filter(sub => figmaLibrariesEnabled || !sub.communityLibrary).map(sub => mapLibrarySubscription(sub, LibrarySubscriptionType.FILE))];
  if (!parentOrgId && !isProOrStudent && figmaLibrariesEnabled) {
    const communityPresets = (presetSubscriptions ?? []).filter(preset => {
      const defaultSubscribed = preset.default_subscribed;
      return (hasProjectRoot ? !(file?.parentOrgId && preset.libraryOrgSubscriptionOverride != null) && !(file?.teamId && preset.libraryTeamSubscriptionOverride != null) && (preset.libraryFileSubscriptionOverride || preset.libraryUserSubscriptionOverride) == null : (preset.libraryOrgSubscriptionOverride || preset.libraryWorkspaceSubscriptionOverride || preset.libraryTeamSubscriptionOverride || preset.libraryFileSubscriptionOverride) == null) && defaultSubscribed;
    }).map(preset => mapCommunityLibraryPreset(preset, LibrarySubscriptionType.COMMUNITY)) || [];
    libraries.push(...communityPresets);
  }
  if (hasProjectRoot) {
    const userLibs = userSubscriptions.filter(sub => figmaLibrariesEnabled || !sub.communityLibrary).filter(sub => sub.communityLibrary ? sub.libraryFileSubscriptionOverride == null : sub.libraryFileSubscriptionOverride == null && sub.library?.file?.parentOrgId === parentOrgId).map(sub => mapLibrarySubscription(sub, LibrarySubscriptionType.USER));
    libraries.push(...userLibs);
  }
  if (hasTeam) {
    const teamLibs = teamSubscriptions.filter(sub => figmaLibrariesEnabled || !sub.communityLibrary).filter(isTeamSubscriptionValid).map(sub => mapLibrarySubscription(sub, LibrarySubscriptionType.TEAM));
    const workspaceLibs = (workspaceSubscriptions || []).filter(sub => figmaLibrariesEnabled || !sub.communityLibrary).filter(sub => (sub.libraryFileSubscriptionOverride || sub.libraryTeamSubscriptionOverride) == null).filter(sub => sub.isSubscribed).map(sub => mapLibrarySubscription(sub, LibrarySubscriptionType.WORKSPACE)) || [];
    libraries.push(...teamLibs);
    libraries.push(...workspaceLibs);
  } else {
    const teamRoles = getTeamRolesFromFile(file)?.map(teamLibs => teamLibs.filter(sub => figmaLibrariesEnabled || !sub.communityLibrary).filter(isUserSubscriptionValid).map(sub => mapLibrarySubscription(sub, LibrarySubscriptionType.TEAM))) ?? [];
    libraries.push(...flatten(teamRoles));
  }
  const uniqueLibraries = uniqBy(libraries.filter(isNotNullish), lib => lib.libraryKey).filter(lib => !matchesLibraryKey(file, lib.libraryKey));
  sortByPropertyWithOptions(uniqueLibraries, 'name');
  return createLoadedState(uniqueLibraries);
}

/**
 * Map a library subscription to a normalized object (original: $$F2)
 */
export function mapLibrarySubscription(subscription: any, type: LibrarySubscriptionType): LibraryInfo | null {
  if (subscription.communityLibrary) {
    return mapCommunityLibraryPreset({
      communityLibrary: subscription.communityLibrary,
      id: subscription.id
    }, type);
  }
  if (subscription.library && subscription.library.file) {
    return {
      fileKey: subscription.library.file.key,
      libraryKey: subscription.library.file.libraryKey,
      id: subscription.id,
      name: subscription.library.file.name,
      numComponents: subscription.library.numComponents ?? 0,
      numStateGroups: subscription.library.numStateGroups ?? 0,
      numStyles: subscription.library.numStyles ?? 0,
      numStylesFill: subscription.library.numStylesFill ?? 0,
      numStylesText: subscription.library.numStylesText ?? 0,
      numStylesEffect: subscription.library.numStylesEffect ?? 0,
      numStylesGrid: subscription.library.numStylesGrid ?? 0,
      numVariables: subscription.library.numVariables ?? 0,
      numVariablesBoolean: subscription.library.numVariablesBoolean ?? 0,
      numVariablesFloat: subscription.library.numVariablesFloat ?? 0,
      numVariablesColor: subscription.library.numVariablesColor ?? 0,
      numVariablesString: subscription.library.numVariablesString ?? 0,
      numModuleAssets: subscription.library.numModuleAssets ?? 0,
      parentOrgId: subscription.library.file.parentOrgId,
      subscriptionType: type,
      thumbnailUrl: subscription.library.file.thumbnailUrl,
      thumbnailUrlOverride: subscription.library.file.thumbnailUrlOverride,
      thumbnailGuid: subscription.library.file.thumbnailGuid,
      libraryType: 'team'
    };
  }
  return null;
}

/**
 * Map a community library preset to a normalized object (original: j)
 */
function mapCommunityLibraryPreset(preset: any, type: LibrarySubscriptionType): LibraryInfo | null {
  if (preset?.communityLibrary) {
    return {
      fileKey: preset.communityLibrary.hubFileId,
      libraryKey: preset.communityLibrary.hubFile.libraryKey,
      id: preset.id,
      name: preset.communityLibrary.name,
      numComponents: preset.communityLibrary.numComponents ?? 0,
      numStateGroups: preset.communityLibrary.numStateGroups ?? 0,
      numStyles: preset.communityLibrary.numStyles ?? 0,
      numStylesFill: preset.communityLibrary.numStylesFill ?? 0,
      numStylesText: preset.communityLibrary.numStylesText ?? 0,
      numStylesEffect: preset.communityLibrary.numStylesEffect ?? 0,
      numStylesGrid: preset.communityLibrary.numStylesGrid ?? 0,
      numVariables: preset.communityLibrary.numVariables ?? 0,
      numVariablesBoolean: preset.communityLibrary.numVariablesBoolean ?? 0,
      numVariablesFloat: preset.communityLibrary.numVariablesFloat ?? 0,
      numVariablesColor: preset.communityLibrary.numVariablesColor ?? 0,
      numVariablesString: preset.communityLibrary.numVariablesString ?? 0,
      numModuleAssets: preset.communityLibrary.numModuleAssets ?? 0,
      parentOrgId: null,
      subscriptionType: type,
      thumbnailUrl: preset.communityLibrary.hubFile.thumbnailUrl,
      thumbnailUrlOverride: null,
      thumbnailGuid: null,
      libraryType: 'community'
    };
  }
  return null;
}

/**
 * Helper: is valid team subscription (original: U)
 */
function isTeamSubscriptionValid(sub: any) {
  return sub.libraryFileSubscriptionOverride == null;
}

/**
 * Helper: is valid user subscription (original: B)
 */
function isUserSubscriptionValid(sub: any) {
  return (sub.libraryFileSubscriptionOverride || sub.libraryUserSubscriptionOverride) == null;
}

/**
 * Helper: get team roles from file (original: function (e) {...} in $$M5)
 */
function getTeamRolesFromFile(file: any) {
  const teamId = file?.teamId;
  if (teamId) {
    return file?.currentUser?.orgAwareTeamRoles?.filter(role => role.team?.id === teamId).map(role => role.team?.libraryTeamSubscriptions).filter(isNotNullish);
  }
  return file?.currentUser?.orgAwareTeamRoles?.map(role => role.team?.libraryTeamSubscriptions).filter(isNotNullish);
}

/**
 * Get number of styles by type (original: $$G3)
 */
export function getNumStylesByType(library: LibraryInfo, type: string): number {
  switch (type) {
    case 'FILL':
      return library.numStylesFill;
    case 'TEXT':
      return library.numStylesText;
    case 'EFFECT':
      return library.numStylesEffect;
    case 'GRID':
      return library.numStylesGrid;
    default:
      return 0;
  }
}

/**
 * Types for context value and library info
 */
export interface SubscribedLibrariesContextValue {
  subscription: any;
  ensureSubscription: () => void;
  untransformedSubscription: any;
}
export interface LibraryInfo {
  fileKey: string;
  libraryKey: string;
  id: string;
  name: string;
  numComponents: number;
  numStateGroups: number;
  numStyles: number;
  numStylesFill: number;
  numStylesText: number;
  numStylesEffect: number;
  numStylesGrid: number;
  numVariables: number;
  numVariablesBoolean: number;
  numVariablesFloat: number;
  numVariablesColor: number;
  numVariablesString: number;
  numModuleAssets: number;
  parentOrgId: string | null;
  subscriptionType: LibrarySubscriptionType;
  thumbnailUrl: string | null;
  thumbnailUrlOverride: string | null;
  thumbnailGuid: string | null;
  libraryType: string;
}

/**
 * Exported names (original: zN, Qh, m1, Sp, $p, gM, je, Ly, l6, He, fi)
 */
export const zN = SubscribedLibrariesProvider;
export const Qh = LibrarySubscriptionType;
export const m1 = mapLibrarySubscription;
export const Sp = getNumStylesByType;
export const $p = SubscribedLibrariesAtom;
export const gM = transformAndFilterSubscriptions;
export const je = useSubscribedLibraries;
export const Ly = getGroupedSubscribedLibraryKeys;
export const l6 = useSubscribedLibraryFileKeys;
export const He = useSubscribedLibraryKeys;
export const fi = useUntransformedSubscribedLibraries;
