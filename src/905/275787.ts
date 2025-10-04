import { memo, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { jsx } from 'react/jsx-runtime';
import { useIsComponentFlyoutModalShownForAsset } from '../905/186638';
import { permissionScopeHandler } from '../905/189185';
import { useLibraryFileLink } from '../905/217163';
import { renderI18nText } from '../905/303541';
import { getSingletonSceneGraph } from '../905/700578';
import { getSelectedFile } from '../905/766303';
import { useFileByKey } from '../905/862913';
import { styleBuilderInstance } from '../905/941192';
import { isNotNullish, isNullish } from '../figma_app/95419';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { c$, ms } from '../figma_app/236327';
import { useComponentFlyoutModal } from '../figma_app/608944';
export enum LibraryItemTileContextMenuType {
  ASSETS_PANEL = 'library-item-tile-context-menu-for-assets-panel',
  LIBRARY_MODAL = 'library-item-tile-context-menu-for-library-modal',
  ACTIONS_ASSETS = 'library-item-tile-context-menu-for-actions-assets',
}
interface LibraryItemTileContextMenuProps {
  dropdownShown?: {
    type: LibraryItemTileContextMenuType;
    data: {
      component: {
        library_key: string;
        node_id: string;
      };
      position: any;
      sectionPosition?: any;
      sectionNameForTracking?: string;
    };
  };
  hideForLocalComponents?: boolean;
  hidePublishingForLocalComponents?: boolean;
  onOpenFlyout?: (component: any, sectionPosition?: any, sectionNameForTracking?: string) => void;
  onJumpToLocalComponent?: (nodeId: string) => void;
  selectedView: any;
  usePortal?: boolean;
}
function isValidContextMenuType(type: any): type is LibraryItemTileContextMenuType {
  return Object.values(LibraryItemTileContextMenuType).includes(type);
}
const MenuContainer = ms;
const MenuItem = c$;
export const LibraryItemTileContextMenu = memo(({
  dropdownShown: dropdownShownData,
  hideForLocalComponents = false,
  hidePublishingForLocalComponents = false,
  onOpenFlyout,
  onJumpToLocalComponent,
  selectedView,
  usePortal = false
}: LibraryItemTileContextMenuProps) => {
  const {
    isFlyoutOpen
  } = useComponentFlyoutModal();
  const defaultPublishedLibraryKeys = useSelector<AppState, string[]>(state => state.library.defaultPublished.libraryKeys);
  const fileByKey = useFileByKey();
  const selectedFile = useMemo(() => getSelectedFile({
    fileByKey,
    selectedView
  }), [fileByKey, selectedView]);
  const component = useMemo(() => {
    if (!dropdownShownData?.type || !isValidContextMenuType(dropdownShownData.type)) {
      return null;
    }
    return dropdownShownData.data.component;
  }, [dropdownShownData]);
  const isComponentFlyoutModalShown = useIsComponentFlyoutModalShownForAsset(component);
  const libraryFileLink = useLibraryFileLink({
    libraryKey: component?.library_key,
    nodeId: component?.node_id,
    mainComponent: true
  });
  const isLibraryFileLinkAvailable = !!libraryFileLink.data;
  const isSameLibrary = component?.library_key === selectedFile?.library_key;
  const shouldHideMenu = useMemo(() => {
    const isInvalidType = !dropdownShownData?.type || !isValidContextMenuType(dropdownShownData.type);
    const isNoSelectedFile = !selectedFile;
    const isHiddenLocalComponent = isSameLibrary && hideForLocalComponents;
    const isDefaultPublished = component && defaultPublishedLibraryKeys.includes(component.library_key);
    const isDifferentLibraryWithoutLink = !isSameLibrary && !isLibraryFileLinkAvailable;
    return isInvalidType || isNoSelectedFile || isHiddenLocalComponent || isDefaultPublished || isDifferentLibraryWithoutLink;
  }, [dropdownShownData?.type, selectedFile, isSameLibrary, hideForLocalComponents, defaultPublishedLibraryKeys, component, isLibraryFileLinkAvailable]);
  const togglePublishableItem = useMemo(() => {
    if (!component || !isSameLibrary || hidePublishingForLocalComponents) {
      return null;
    }
    return jsx(TogglePublishableMenuItem, {
      localNodeId: component.node_id
    }, `togglePublishable-${component.node_id}`);
  }, [component, isSameLibrary, hidePublishingForLocalComponents]);
  const goToMainItem = useMemo(() => {
    const goToMainText = renderI18nText('design_systems.assets_panel.go_to_main');
    if (isSameLibrary && component) {
      return onJumpToLocalComponent ? jsx(MenuItem, {
        onClick: () => onJumpToLocalComponent(component.node_id),
        recordingKey: 'libraryItemTileContextMenu.goToMain',
        children: goToMainText
      }, 'goToMainLocal') : null;
    }
    if (libraryFileLink.data?.type === 'team') {
      return jsx(MenuItem, {
        href: libraryFileLink.data.link,
        target: '_blank',
        children: goToMainText
      }, 'goToMainSubscribed');
    }
    return null;
  }, [isSameLibrary, component, onJumpToLocalComponent, libraryFileLink.data]);
  const viewDetailsItem = useMemo(() => {
    if (!onOpenFlyout || !component) {
      return null;
    }
    return jsx(MenuItem, {
      disabled: isFlyoutOpen && isComponentFlyoutModalShown,
      onClick: () => onOpenFlyout(component, dropdownShownData?.data?.sectionPosition, dropdownShownData?.data?.sectionNameForTracking),
      children: renderI18nText('design_systems.assets_panel.view_details')
    }, 'openFlyout');
  }, [onOpenFlyout, component, isFlyoutOpen, isComponentFlyoutModalShown, dropdownShownData?.data?.sectionPosition, dropdownShownData?.data?.sectionNameForTracking]);
  const menuItems = useMemo(() => {
    if (shouldHideMenu) {
      return null;
    }
    return [togglePublishableItem, goToMainItem, viewDetailsItem].filter(isNotNullish);
  }, [shouldHideMenu, togglePublishableItem, goToMainItem, viewDetailsItem]);
  if (!menuItems || menuItems.length === 0) {
    return null;
  }
  const menu = jsx(MenuContainer, {
    style: styleBuilderInstance.add(dropdownShownData?.data?.position).add(styleBuilderInstance.fixed).$,
    children: menuItems
  });
  return usePortal ? createPortal(menu, document.body) : menu;
});
interface TogglePublishableMenuItemProps {
  localNodeId: string;
}
function TogglePublishableMenuItem({
  localNodeId
}: TogglePublishableMenuItemProps) {
  const isPublishable = useDeepEqualSceneValue(sceneGraph => {
    const node = sceneGraph.get(localNodeId);
    if (!node) return null;
    return node.isStateGroup ? node.isPublishable : node.isSymbolPublishable;
  }, localNodeId);
  const togglePublishability = useCallback(() => {
    const node = getSingletonSceneGraph().get(localNodeId);
    if (!node) return;
    permissionScopeHandler.user('toggle-publishability', () => {
      if (node.isStateGroup) {
        node.isPublishable = !isPublishable;
      } else if (node.isLooseComponent) {
        node.isSymbolPublishable = !isPublishable;
      }
    });
  }, [localNodeId, isPublishable]);
  if (isNullish(isPublishable)) {
    return null;
  }
  const toggleText = isPublishable ? renderI18nText('design_systems.publishing_modal.hide_when_publishing') : renderI18nText('design_systems.publishing_modal.show_when_publishing');
  return jsx(MenuItem, {
    onClick: togglePublishability,
    children: toggleText
  }, 'togglePublishableOption');
}
export const K = LibraryItemTileContextMenuType;
export const h = LibraryItemTileContextMenu;