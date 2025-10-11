import classNames from 'classnames';
import { Component, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { b1, DY, Gv, jT, OW, pj, Tc, TK, XY, Yg, ZS } from '../905/362959';
import { getFeatureFlags } from '../905/601108';
import { SvgComponent } from '../905/714743';
import { A } from '../6828/564422';
import { jsFullscreenPreventEventCapture } from '../figma_app/8833';
import { getInitialOptions } from '../figma_app/169182';
import { Rf } from '../figma_app/546509';

// Original class name: $$h0
// Original export: u = $$h0

// Define interface for component props to add required types
interface ModalProps {
  tintedModalBackground?: boolean;
  unblockFileBrowserSidebar?: boolean;
  close: () => void;
  renderSimplifiedView?: boolean;
  onBackClick?: () => void;
  headerImage?: React.ReactNode;
  imageSrc?: any;
  imageClassName?: string;
  useOriginalSrcFills?: boolean;
  headerText?: string;
  secondaryText?: string;
  children?: React.ReactNode;
}

/**
 * Refactored functional component equivalent to original class $$h0.
 * Maintains the same functionality: renders a modal with optional back button, images, texts, and children.
 * Handles click events and updates tracking session on mount.
 */
export const CustomModalComponent: React.FC<ModalProps> = props => {
  // Helper function to compute outer div className, simplifying conditional logic
  const getOuterClassName = () => {
    const baseClass = props.tintedModalBackground ? classNames(XY, jsFullscreenPreventEventCapture) : Tc;
    if (props.unblockFileBrowserSidebar) {
      return classNames(b1, {
        [pj]: getFeatureFlags().file_browser_sidebar_row_ui
      });
    }
    return baseClass;
  };

  // Helper function to render back button if onBackClick is provided
  const renderBackButton = () => {
    if (!props.onBackClick) return null;
    return jsx('button', {
      'onClick': props.onBackClick,
      'className': Gv,
      'type': 'button',
      'data-testid': 'back-button',
      'children': jsx(SvgComponent, {
        svg: A,
        className: OW
      })
    });
  };

  // Helper function to render image section if imageSrc is provided
  const renderImage = () => {
    if (!props.imageSrc) return null;
    return jsx('div', {
      className: props.imageClassName ? props.imageClassName : ZS,
      children: jsx(SvgComponent, {
        useOriginalSrcFills_DEPRECATED: props.useOriginalSrcFills,
        svg: props.imageSrc,
        autosize: true
      })
    });
  };

  // Helper function to render header text if provided
  const renderHeaderText = () => {
    if (!props.headerText) return null;
    return jsx('div', {
      className: TK,
      children: props.headerText
    });
  };

  // Helper function to render secondary text if provided
  const renderSecondaryText = () => {
    if (!props.secondaryText) return null;
    return jsx('div', {
      className: Yg,
      children: props.secondaryText
    });
  };

  // Effect equivalent to componentDidMount: update tracking session on mount
  useEffect(() => {
    const e = Rf();
    e?.updateTrackingSessionId && e.updateTrackingSessionId(getInitialOptions().tracking_session_id);
  }, []);
  return jsx('div', {
    className: getOuterClassName(),
    onClick: props.close,
    children: jsxs('div', {
      className: props.renderSimplifiedView ? DY : jT,
      onClick: e => {
        e.stopPropagation();
      },
      children: [renderBackButton(), props.headerImage, renderImage(), renderHeaderText(), renderSecondaryText(), props.children]
    })
  });
};

// Refactored export name to match new component name
export const u = CustomModalComponent;