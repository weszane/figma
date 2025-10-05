import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jsx } from 'react/jsx-runtime';
import { generateFavoriteResourceMenuItems } from '../905/796251';
import { j } from '../905/834956';
import { jU } from '../figma_app/544879';
import { sortWithPinnedItems } from '../figma_app/863319';
interface FavoriteResourceDropdownProps {
  setFavorite: (sectionId: string, favoriteId: string, orgId: string) => void;
  sections: any[];
  customSectionOrdering: string[];
  resourceId: string;
  resourceType: string;
  favoriteId: string | null;
  currentSectionId: string | null;
  userHasMaxFavorites: boolean;
  orgId: string;
}
export function FavoriteResourceDropdown({
  setFavorite,
  sections,
  customSectionOrdering,
  resourceId,
  resourceType,
  favoriteId,
  currentSectionId,
  userHasMaxFavorites,
  orgId
}: FavoriteResourceDropdownProps) {
  const dispatch = useDispatch();
  const currentTeamId = useSelector((state: any) => state.currentTeamId);
  const orderedSections = useMemo(() => sortWithPinnedItems(sections, customSectionOrdering), [sections, customSectionOrdering]);
  const menuItems = generateFavoriteResourceMenuItems({
    currentOrgId: orgId,
    currentTeamId,
    updateFavorite: (sectionId: any, targetOrgId: string) => setFavorite(sectionId, favoriteId!, targetOrgId),
    resourceId,
    resourceType,
    isFavorited: !!favoriteId,
    currentSectionId,
    sections: orderedSections,
    userHasMaxFavorites
  });
  const dropdownState = useSelector((state: any) => {
    const dropdown = state.dropdownShown;
    return dropdown && dropdown?.type === jU ? dropdown : null;
  });
  if (!dropdownState) {
    return null;
  }
  return jsx(j, {
    autofocusPrevOnDismount: true,
    items: menuItems,
    parentRect: dropdownState.data.targetRect,
    showPoint: false,
    lean: 'right',
    recordingKey: 'organize-favorited-dropdown',
    dispatch,
    onSelectItem: (item: any, event: any) => {
      item.callback?.('', {}, dispatch, event);
    },
    shouldUsePortal: true
  });
}
export const t = FavoriteResourceDropdown;