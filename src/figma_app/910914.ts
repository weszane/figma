import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { getI18nString, renderI18nText } from '../905/303541';
import { BannerMessage } from '../905/363675';
import { BannerButton } from '../905/692618';
import { isSingleSceneGraphSelectionInDevHandoff } from '../905/782918';
import { postUserFlag } from '../905/985254';
import { BannerInformational } from '../figma_app/59509';
import { buildUploadUrl } from '../figma_app/169182';
import { f as SVG1 } from '../figma_app/258006';
import { setSelectedDevModePropertiesPanelTab } from '../figma_app/741237';
import { IAssertResource } from '../figma_app/763686';

/**
 * CSS class for icon elements in the hint panel.
 * (original: g)
 */
const HINT_PANEL_ICON_CLASS = 'hint_panels--icon--EMIdH';

/**
 * Upload URLs for icons in the hint panel.
 * (original: f, E)
 */
const PLUGIN_ICON_URL = buildUploadUrl('aae0db2814117595e45cc509d52e79e7cc31333c');
const INSPECT_ICON_URL = buildUploadUrl('ae3807b6d650b52da20879078b85a0df23ee056a');

/**
 * User flag key for dismissing the inspect panel plugins hint.
 * (original: $$y0)
 */
export const DEV_HAND = 'dev_handoff_dismissed_inspect_panel_plugins_hint';

/**
 * Renders the Dev Handoff Inspect Panel Plugins Hint.
 * Shows a banner with icons, message, and a button.
 * Handles dismiss and link click actions.
 * (original: $$b1)
 */
export function DevHandoffInspectPanelPluginsHint() {
  const isVisible = isSingleSceneGraphSelectionInDevHandoff();
  const dispatch = useDispatch<AppDispatch>();

  /**
   * Handles dismissing the hint panel.
   * Dispatches a user flag to mark as dismissed.
   * (original: r)
   */
  const handleDismiss = useCallback(() => {
    dispatch(postUserFlag({
      [DEV_HAND]: true
    }));
  }, [dispatch]);

  /**
   * Handles clicking the link in the hint panel.
   * Sets the selected tab and dismisses the panel.
   * (original: c)
   */
  const handleLinkClick = useCallback(() => {
    setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
    handleDismiss();
  }, [handleDismiss]);
  if (!isVisible) return null;
  return jsx('div', {
    className: 'hint_panels--hintPanel--MUqNV',
    children: jsxs(BannerInformational, {
      variant: 'default',
      icon: jsxs('div', {
        className: 'hint_panels--iconRow--SXq7J',
        children: [jsx('img', {
          alt: '',
          className: HINT_PANEL_ICON_CLASS,
          src: PLUGIN_ICON_URL
        }), jsx('div', {
          className: HINT_PANEL_ICON_CLASS,
          children: jsx(SVG1, {})
        }), jsx('img', {
          alt: '',
          className: HINT_PANEL_ICON_CLASS,
          src: INSPECT_ICON_URL
        })]
      }),
      onDismiss: handleDismiss,
      children: [jsx(BannerMessage, {
        title: getI18nString('dev_handoff.inspect_panel.plugins_hint.title'),
        children: renderI18nText('dev_handoff.inspect_panel.plugins_hint')
      }), jsx(BannerButton, {
        onClick: handleLinkClick,
        children: renderI18nText('dev_handoff.inspect_panel.plugins_hint.link')
      })]
    })
  });
}

/**
 * Exported aliases for refactored names.
 * (original: xb, FO)
 */
export const xb = DEV_HAND;
export const FO = DevHandoffInspectPanelPluginsHint;
