import { useCallback, useMemo } from 'react';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { getI18nString, renderI18nText } from '../905/303541';
import { collaboratorSet } from '../905/332483';
import { getMinimumBundle, shouldShowSeatDescription } from '../905/389382';
import { isInCollaboratorHierarchy, ProductAccessTypeEnum, ViewAccessTypeEnum } from '../905/513035';
import { formatSortedProductNames } from '../905/584964';
import { findMatchingValue } from '../905/807535';
import { FPlanNameType, FProductAccessType } from '../figma_app/191312';
import { useCurrentPublicPlan } from '../figma_app/465071';
import { isFigmakeSitesEnabled } from '../figma_app/552876';
import { filterNotNullish } from '../figma_app/656233';
import { compareProductAccessOrder, getProductAccessTypeOrDefault } from '../figma_app/765689';
let productAccessTypeMap = {
  design: ProductAccessTypeEnum.DESIGN,
  whiteboard: ProductAccessTypeEnum.FIGJAM,
  figjam: ProductAccessTypeEnum.FIGJAM,
  dev_mode: ProductAccessTypeEnum.DEV_MODE,
  slides: ProductAccessTypeEnum.SLIDES,
  collaborator: ProductAccessTypeEnum.COLLABORATOR,
  developer: ProductAccessTypeEnum.DEVELOPER,
  expert: ProductAccessTypeEnum.EXPERT,
  content: ProductAccessTypeEnum.CONTENT,
  view: ViewAccessTypeEnum.VIEW,
  ai_credits: ProductAccessTypeEnum.AI_CREDITS
};
export function getProductAccessTypeByKey(e) {
  return productAccessTypeMap[e] ?? e;
}
let fProductAccessTypeMap = {
  design: FProductAccessType.DESIGN,
  whiteboard: FProductAccessType.WHITEBOARD,
  figjam: FProductAccessType.WHITEBOARD,
  dev_mode: FProductAccessType.DEV_MODE,
  slides: FProductAccessType.SLIDES,
  sites: FProductAccessType.SITES,
  figmake: FProductAccessType.FIGMAKE,
  cooper: FProductAccessType.COOPER
};
export function getFProductAccessTypeByKey(e) {
  return fProductAccessTypeMap[e] ?? e;
}
let productAccessOrder = {
  [ProductAccessTypeEnum.DESIGN]: 10,
  [ProductAccessTypeEnum.DEV_MODE]: 20,
  [ProductAccessTypeEnum.FIGJAM]: 30,
  [ProductAccessTypeEnum.SLIDES]: 40,
  [ProductAccessTypeEnum.EXPERT]: 50,
  [ProductAccessTypeEnum.DEVELOPER]: 60,
  [ProductAccessTypeEnum.CONTENT]: 70,
  [ProductAccessTypeEnum.COLLABORATOR]: 80,
  [ViewAccessTypeEnum.VIEW]: 90,
  [ProductAccessTypeEnum.AI_CREDITS]: 100
};
export function getProductAccessOrderValue(e) {
  return productAccessOrder[e];
}
export function compareProductAccessTypes(e, t) {
  return productAccessOrder[e] - productAccessOrder[t];
}
export enum SeatDescriptionVisibility {
  SEAT_DESCRIPTION = 'seat_description',
  ALL = 'all',
}
export function useLicenseTypesForSeatTypeMemoized(e, t) {
  let r = useGetLicenseTypesForSeatType(t);
  return useMemo(() => r(e), [r, e]);
}
/**
 * Returns a memoized callback to get license types for a given seat type.
 * Original: useGetLicenseTypesForSeatType
 * @param options - Options for license type retrieval.
 * @returns Callback to get sorted license types for a seat type.
 */
export function useGetLicenseTypesForSeatType(options: {
  overridePlanTier?: string;
  visibility?: 'seat_description' | 'all';
}) {
  /**
   * Computes the license types mapping for each seat type.
   * Original: inner function in useGetLicenseTypesForSeatType
   */
  const computeLicenseTypesMap = useMemo(() => {
    const visibility = options.visibility ?? 'seat_description';
    const currentPlan = useCurrentPublicPlan('useSeatTypeLicenseTypesMap').unwrapOr(null);
    const planTier = (options.overridePlanTier ? findMatchingValue(FPlanNameType, options.overridePlanTier) : undefined) || currentPlan?.tier;

    // Map seat types to their allowed license types
    /** Original: o */
    const seatTypeLicenseTypes = {
      [ProductAccessTypeEnum.EXPERT]: filterNotNullish([FProductAccessType.DESIGN, FProductAccessType.DEV_MODE, FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES, FProductAccessType.SITES, FProductAccessType.COOPER, isFigmakeSitesEnabled() ? FProductAccessType.FIGMAKE : undefined]),
      [ProductAccessTypeEnum.DEVELOPER]: filterNotNullish([FProductAccessType.DEV_MODE, FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES, FProductAccessType.COOPER]),
      [ProductAccessTypeEnum.COLLABORATOR]: filterNotNullish([FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES]),
      [ProductAccessTypeEnum.CONTENT]: filterNotNullish([FProductAccessType.COOPER, FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES])
    };

    // Build collaborator set dictionary with filtered license types
    return collaboratorSet.dict(seatType => {
      let licenseTypes = seatTypeLicenseTypes[seatType];
      if (visibility === 'seat_description') {
        licenseTypes = licenseTypes.filter(type => shouldShowSeatDescription(type, planTier));
      }
      return licenseTypes;
    });
  }, [options.visibility, options.overridePlanTier, isFigmakeSitesEnabled()]);

  /**
   * Returns sorted license types for a given seat type.
   * Original: returned callback in useGetLicenseTypesForSeatType
   */
  const getLicenseTypes = useCallback((seatType: ProductAccessTypeEnum) => computeLicenseTypesMap[seatType]?.sort(compareProductAccessOrder) || [], [computeLicenseTypesMap]);
  return getLicenseTypes;
}
let collaboratorSetDict = collaboratorSet.dict();
export function getCollaboratorSet(e) {
  return collaboratorSetDict[e];
}
export function convertLgSeatTypeProduct(e) {
  if (!e) return null;
  let t = collaboratorSetDict[getProductAccessTypeByKey(e.key)];
  return t ? {
    key: t,
    license_types: e.licenseTypes
  } : (reportError(ServiceCategories.BILLING_EXPERIENCE, new Error(`convertLgSeatTypeProduct encountered unexpected seat type key: ${e.key}`)), null);
}
export function useFormatProductNamesForSeatType(e) {
  let {
    listFormatType,
    overridePlanTier
  } = e ?? {};
  let i = useGetLicenseTypesForSeatType({
    overridePlanTier,
    visibility: 'seat_description'
  });
  return useCallback(e => e === ViewAccessTypeEnum.VIEW ? getI18nString('modify_plan_user_seat_modal.products_for_seat.view') : formatSortedProductNames(i(e), listFormatType), [listFormatType, i]);
}
export function useFormattedProductNamesMemoized(e, t) {
  let r = useFormatProductNamesForSeatType(t);
  return useMemo(() => r(e), [e, r]);
}
export function getUpgradeMessage(e, t) {
  switch (getMinimumBundle(e)) {
    case ProductAccessTypeEnum.EXPERT:
      return {
        header: renderI18nText('upgrades.drafts_move.admin_self_upgrade_header.full_seat'),
        body: renderI18nText('upgrades.drafts_move.admin_self_upgrade_body.full_seat', {
          planName: t
        })
      };
    case ProductAccessTypeEnum.DEVELOPER:
      return {
        header: renderI18nText('upgrades.drafts_move.admin_self_upgrade_header.dev_seat'),
        body: renderI18nText('upgrades.drafts_move.admin_self_upgrade_body.dev_seat', {
          planName: t
        })
      };
    case ProductAccessTypeEnum.COLLABORATOR:
      return {
        header: renderI18nText('upgrades.drafts_move.admin_self_upgrade_header.collab_seat'),
        body: renderI18nText('upgrades.drafts_move.admin_self_upgrade_body.collab_seat', {
          planName: t
        })
      };
    default:
      return null;
  }
}
export function isSeatTypeRestrictedForUser(e, t) {
  let r = getMinimumBundle(getProductAccessTypeOrDefault(t));
  return !r || !isInCollaboratorHierarchy(r, e);
}
export const AG = compareProductAccessTypes;
export const Gj = getFProductAccessTypeByKey;
export const HD = useLicenseTypesForSeatTypeMemoized;
export const Hl = useGetLicenseTypesForSeatType;
export const JR = isSeatTypeRestrictedForUser;
export const KS = getProductAccessOrderValue;
export const SS = useFormattedProductNamesMemoized;
export const TA = convertLgSeatTypeProduct;
export const Uw = getUpgradeMessage;
export const YT = SeatDescriptionVisibility;
export const Zx = getProductAccessTypeByKey;
export const _w = useFormatProductNamesForSeatType;
export const f2 = getCollaboratorSet;
