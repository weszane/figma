import { noop } from 'lodash-es';
import { useDispatch, useSelector } from 'react-redux';
import { showMobileNav } from '../905/34809';
import { toggleSidebarSectionCollapsedState } from '../905/148074';
import { getI18nString } from '../905/303541';
import { hideDropdownAction } from '../905/929976';
import { setNewSectionIndexAction, setMovingResourceAction, updateExpandedSectionsAction } from '../figma_app/909778';
interface FavoriteResourceParams {
  currentOrgId: string;
  currentTeamId: string | null;
  updateFavorite: (isFavorited: boolean, sectionId: string | null) => void;
  resourceId: string;
  resourceType: string;
  isFavorited: boolean;
  currentSectionId: string | null;
  sections: Array<{
    id: string;
    name: string;
  }>;
  userHasMaxFavorites: boolean;
}
interface MenuItem {
  displayText: string;
  isChecked?: boolean;
  alwaysShowCheckMarkOffset?: boolean;
  callback?: () => void;
  separator?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
}

/**
 * Generates menu items for favorite resource management
 * Original function: $$c0
 */
export function generateFavoriteResourceMenuItems({
  currentOrgId,
  currentTeamId,
  updateFavorite,
  resourceId,
  resourceType,
  isFavorited,
  currentSectionId,
  sections,
  userHasMaxFavorites
}: FavoriteResourceParams): MenuItem[] {
  const dispatch = useDispatch();
  const isMobileNavShown = useSelector((state: any) => state.mobileNavShown);
  const collapsedCustomSections = useSelector((state: any) => state.favorites.collapsedCustomSections);

  /**
   * Toggle favorite status and handle section collapsing
   * Original function: b
   */
  const toggleFavoriteAndSection = (shouldFavorite: boolean, sectionId: string | null) => {
    dispatch(hideDropdownAction());
    if (!userHasMaxFavorites || !shouldFavorite) {
      updateFavorite(shouldFavorite, sectionId);
      if (shouldFavorite && sectionId) {
        collapsedCustomSections.$$delete(sectionId);
        dispatch(updateExpandedSectionsAction({
          collapsedCustomSections
        }));
        toggleSidebarSectionCollapsedState({
          type: 'topLevel',
          id: 'custom',
          orgId: currentOrgId,
          sectionId
        }, true);
      }
    }
  };

  /**
   * Create menu items for each section
   * Original variable: v
   */
  const sectionMenuItems: MenuItem[] = sections.map(section => ({
    displayText: section.name === '' ? getI18nString('sidebar.starred') : section.name,
    isChecked: isFavorited && currentSectionId === section.id,
    alwaysShowCheckMarkOffset: true,
    callback: () => toggleFavoriteAndSection(!(isFavorited && currentSectionId === section.id), section.id)
  }));

  /**
   * Create remove from sidebar menu items
   * Original variable: I
   */
  const removeFromSidebarItems: MenuItem[] = [...createMenuItem(isFavorited, null, noop, {
    separator: true
  }), ...createMenuItem(isFavorited, getI18nString('favorited_resources.remove_from_sidebar'), () => toggleFavoriteAndSection(false, null))];

  /**
   * Create new section menu items
   * Original variable: E
   */
  const createNewSectionItems: MenuItem[] = [...createMenuItem(!currentTeamId, getI18nString('favorited_resources.create_a_new_section'), () => {
    if (isMobileNavShown === undefined || !isMobileNavShown) {
      dispatch(showMobileNav());
    }
    const sectionIndex = currentSectionId ? sections.findIndex(section => section.id === currentSectionId) : 0;
    if (resourceType) {
      dispatch(setMovingResourceAction({
        movingResource: {
          resourceId,
          isFavorited: true,
          resourceType
        }
      }));
    }
    dispatch(setNewSectionIndexAction({
      newCustomSectionIndex: sectionIndex
    }));
    dispatch(hideDropdownAction());
  })];

  /**
   * Separator item
   * Original variable: x
   */
  const separatorItem: MenuItem[] = [{
    displayText: '',
    separator: true
  }];

  /**
   * Current section name
   * Original variable: S
   */
  const currentSection = sections.find(section => section.id === currentSectionId);

  /**
   * Main display text
   * Original variable: w
   */
  const mainDisplayText = isFavorited ? `${getI18nString('favorited_resources.indicate_section_prefix')}: ${currentSection?.name || getI18nString('sidebar.starred')}` : getI18nString('favorited_resources.add_to_sidebar');

  // Return structured menu based on section count
  if (sections.length > 4) {
    return [{
      displayText: mainDisplayText,
      children: [...sectionMenuItems, ...separatorItem, ...createNewSectionItems]
    }, ...removeFromSidebarItems];
  } else {
    return [...createMenuItem(true, getI18nString('favorited_resources.add_to_sidebar'), noop, {
      disabled: true
    }), ...sectionMenuItems, ...separatorItem, ...removeFromSidebarItems, ...separatorItem, ...createNewSectionItems];
  }
}

/**
 * Helper function to create menu items
 * Original function: u
 */
function createMenuItem(condition: boolean, displayText: string | null, callback: () => void, options: {
  separator?: boolean;
  disabled?: boolean;
} = {}): MenuItem[] {
  return condition ? [{
    displayText: displayText || '',
    callback,
    ...options
  }] : [];
}
export const x = generateFavoriteResourceMenuItems;