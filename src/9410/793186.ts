import M from 'classnames';
import { noop } from 'lodash-es';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { isCommandEvent } from '../905/63728';
import { registerModal } from '../905/102752';
import { selectWithShallowEqual } from '../905/103090';
import { hideModal, showModalHandler } from '../905/156213';
import { permissionScopeHandler as _$$l2, scopeAwareFunction } from '../905/189185';
import { isInvalidValue, normalizeValue } from '../905/216495';
import { InputPrimitive } from '../905/246212';
import { useSelectionProperty, useSelectionPropertyValue } from '../905/275640';
import { getI18nString, renderI18nText } from '../905/303541';
import { selectCurrentUser } from '../905/372672';
import { useIsFullscreenWithDevVariables } from '../905/383776';
import { debugState } from '../905/407919';
import { trackEventAnalytics } from '../905/449184';
import { l as _$$l } from '../905/479687';
import { handleAtomEvent } from '../905/502364';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { setupThemeContext } from '../905/614223';
import { ComboboxPrimitive } from '../905/634016';
import { L as _$$L } from '../905/657783';
import { getSingletonSceneGraph } from '../905/700578';
import { s as _$$s } from '../905/780421';
import { initializeWidgetAllowlist } from '../905/837497';
import { O as _$$O } from '../905/969533';
import { N as _$$N } from '../905/995635';
import { $2 } from '../3276/545630';
import { jsFullscreenPreventEventCapture } from '../figma_app/8833';
import { v as _$$v } from '../figma_app/45501';
import { getViewportInfo, viewportToScreen } from '../figma_app/62612';
import { G as _$$G } from '../figma_app/80900';
import { useIsFullscreenDevModeComponentBrowser, useIsFullscreenOverview } from '../figma_app/88239';
import { uQ, xv } from '../figma_app/151869';
import { floatToString } from '../figma_app/164212';
import { createOpenDesktopAppModal } from '../figma_app/240060';
import { createMultiplayerCursorSystem } from '../figma_app/242062';
import { trackUserEvent } from '../figma_app/314264';
import { gI } from '../figma_app/399472';
import { fullscreenValue } from '../figma_app/455680';
import { useCanUseDevModeDemoFile } from '../figma_app/473493';
import { clamp, lerp } from '../figma_app/492908';
import { selectCurrentFile } from '../figma_app/516028';
import { isDevModeFocusViewActive } from '../figma_app/544649';
import { isUserNotLoggedInAndEditorSupported } from '../figma_app/564183';
import { C as _$$C } from '../figma_app/630916';
import { DD, jE, yl } from '../figma_app/639088';
import { useAppModelProperty } from '../figma_app/722362';
import { T as _$$T } from '../figma_app/737897';
import { renameNode } from '../figma_app/741237';
import { AppStateTsApi, Axis, DesignGraphElements, DiagramElementType, Fullscreen, HandoffBindingsCpp, InteractionCpp, LayoutSizingType, LayoutTabType, UIVisibilitySetting, ViewType } from '../figma_app/763686';
import { memoizeByArgs } from '../figma_app/815945';
import { TrackingProvider } from '../figma_app/831799';
import { d as _$$d, W as _$$W } from '../figma_app/833988';
import { Ay } from '../figma_app/838407';
import { useHandleChangeEvent, useHandleKeyboardEvent } from '../figma_app/878298';
import { forwardKeyboardEvent } from '../figma_app/896988';
import { trackFileEventWithStore } from '../figma_app/901889';
import { PluginRunForContext } from '../figma_app/915202';
import { ConfirmationModal2, ModalView } from '../figma_app/918700';
import { w as _$$w } from '../figma_app/984514';
let P: typeof M = M;
let q = 'on_canvas_name_editor--frameNameInput--VpLPf sf_pro--uiFontWithSFProFallback--m-p9V';

/**
 * Custom hook for managing the on-canvas name editor functionality
 * @param initialName - The initial name value
 * @param setNameCallback - Callback function to set the name
 * @param options - Configuration options for the editor
 * @returns Object containing refs, styles, and event handlers for the editor
 */
function useOnCanvasNameEditor(initialName: string, setNameCallback: (name: string) => void, options: NameEditorHookProps): NameEditorHookReturn | null {
  let inputClassName: string;
  const {
    maxWidth,
    noSelectOnFocus = false,
    disableSaveOnEscape = false,
    hasSlideRowBeenManuallyRenamed = true
  } = options;
  const {
    padding,
    margin,
    ...editorInfo
  } = useSelector((state: any) => state.mirror.appModel.onCanvasNameEditorInfo);
  const viewportInfo = getViewportInfo({
    subscribeToUpdates_expensive: true
  });
  const zoomScale = viewportInfo?.zoomScale || 1;
  const [editingName, setEditingName] = useState(initialName);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const measurerRef = useRef<HTMLSpanElement>(null);
  const [inputWidth, setInputWidth] = useState(0);
  const [isComposing, setIsComposing] = useState(false);
  const calculateInputWidth = useCallback((scrollWidth: number, currentName: string) => {
    switch (editorInfo.mode) {
      case DiagramElementType.FRAME_NAME:
      case DiagramElementType.VAR_WIDTH_SIZE:
      case DiagramElementType.CANVAS_GRID_ROW_STATE_GROUP:
        setInputWidth(Math.min(scrollWidth, maxWidth * zoomScale) + 7);
        break;
      case DiagramElementType.CANVAS_GRID_ROW_NAME:
        const minWidth = Math.min(scrollWidth, maxWidth * zoomScale);
        hasSlideRowBeenManuallyRenamed ? setInputWidth(minWidth + 14) : setInputWidth(Math.max(minWidth, 40) + 14);
        break;
      case DiagramElementType.RESPONSIVE_SET_NAME:
      case DiagramElementType.SECTION_NAME:
        let adjustedMaxWidth = maxWidth * zoomScale;
        if (editorInfo.mode === DiagramElementType.RESPONSIVE_SET_NAME) {
          adjustedMaxWidth -= 60;
        }
        scrollWidth < adjustedMaxWidth ? setInputWidth(scrollWidth) : setInputWidth(adjustedMaxWidth - 2 * (margin?.x || 0));
        break;
      case DiagramElementType.FLOW_STARTING_POINT_NAME:
        setInputWidth(Math.min(scrollWidth, maxWidth) + 4);
        break;
      case DiagramElementType.MEASUREMENT_FREE_TEXT:
        setInputWidth(Math.min(scrollWidth, maxWidth * zoomScale) + 8.5);
        break;
      case DiagramElementType.GRID_TRACK_SIZE:
        let labelWidth = scrollWidth;
        if (InteractionCpp) {
          labelWidth = InteractionCpp.measureTrackLabelSize(currentName).x;
        }
        setInputWidth(Math.min(labelWidth, maxWidth * zoomScale + 8.5));
        break;
    }
  }, [editorInfo.mode, maxWidth, zoomScale, margin?.x, hasSlideRowBeenManuallyRenamed]);
  useLayoutEffect(() => {
    if (measurerRef.current) {
      calculateInputWidth(measurerRef.current.scrollWidth, editingName);
    }
  }, [editingName, calculateInputWidth]);
  useEffect(() => {
    if (initialName) {
      setIsVisible(true);
      setEditingName(initialName);
    }
  }, [initialName]);
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const isClickOutsideContainer = !(containerRef.current && containerRef.current.contains(event.target as Node));
      const renameSelectionElement = document.querySelector('[data-resource-id="rename-selection"]');
      const isClickOnRenameSelection = event.target && renameSelectionElement && renameSelectionElement.contains(event.target as Node);
      if (isClickOutsideContainer && !isClickOnRenameSelection) {
        Fullscreen?.hideOnCanvasNameEditor();
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
  const handleChange = useHandleChangeEvent('onCanvasRename', 'change', event => {
    setEditingName(event.target.value);
  });
  const handleKeyDown = useHandleKeyboardEvent('onCanvasRename', 'keydown', event => {
    if (!isComposing) {
      if (event.key === 'Escape' && disableSaveOnEscape) {
        setIsVisible(false);
        Fullscreen?.hideOnCanvasNameEditor();
        return;
      }
      switch (event.key) {
        case 'Escape':
        case 'Enter':
        case 'Tab':
          event.preventDefault();
          setIsVisible(false);
          setNameCallback(editingName);
          fullscreenValue.commit();
          Fullscreen?.hideOnCanvasNameEditor();
          break;
        case '=':
        case '-':
          if (isCommandEvent(event)) {
            forwardKeyboardEvent(event);
          }
      }
    }
  });
  if (!viewportInfo) return null;
  const containerStyle: StyleObject = {};
  const screenPosition = viewportToScreen(viewportInfo, {
    x: editorInfo.x,
    y: editorInfo.y
  }, false);
  const position: Position = {
    x: screenPosition.x + viewportInfo.x,
    y: screenPosition.y + viewportInfo.y
  };

  // Adjust position based on editor mode
  if (editorInfo.mode === DiagramElementType.FLOW_STARTING_POINT_NAME) {
    position.x -= 32 + inputWidth;
    position.y = Math.round(position.y);
  }
  if (editorInfo.mode === DiagramElementType.FRAME_NAME) {
    let offset = lerp(5, 9, (viewportInfo.zoomScale - 0.1) * 5);
    offset = clamp(offset, 5, 9) - 3;
    position.y -= offset;
  }
  if (editorInfo.mode === DiagramElementType.CANVAS_GRID_ROW_NAME && AppStateTsApi) {
    const rowSpacing = AppStateTsApi.canvasGrid().gridRowSpacing() / 2 * viewportInfo.zoomScale;
    position.y -= rowSpacing - 8;
  }

  // Apply additional positioning based on mode
  if (editorInfo.mode === DiagramElementType.CANVAS_GRID_ROW_STATE_GROUP && AppStateTsApi) {
    position.y += 8;
    position.x += 20;
  }
  if (editorInfo.mode === DiagramElementType.RESPONSIVE_SET_NAME) {
    position.x += 36;
    position.y -= 3;
  }
  if (editorInfo.mode === DiagramElementType.VAR_WIDTH_SIZE) {
    position.y += 20 * (editorInfo.varWidthTextDirection?.y || 0);
    position.x += 20 * (editorInfo.varWidthTextDirection?.x || 0);
  }

  // Apply transforms based on mode
  if (editorInfo.mode === DiagramElementType.GRID_TRACK_SIZE) {
    if (editorInfo.isShownOnLeft) {
      containerStyle.transformOrigin = `${position.x - 10}px ${position.y}px`;
      position.x += 10;
      containerStyle.transform = `rotate(${editorInfo.angle || 0}deg) translate(calc(${position.x}px - 100%), ${position.y - 10}px)`;
    } else {
      containerStyle.transformOrigin = `${position.x}px ${position.y}px`;
      containerStyle.transform = `rotate(${editorInfo.angle || 0}deg) translate(calc(${position.x}px - 50%), ${position.y - 10}px)`;
    }
  } else if (editorInfo.mode === DiagramElementType.MEASUREMENT_FREE_TEXT) {
    if (editorInfo.invertTextPosition) {
      containerStyle.transform = editorInfo.isCentered ? `translate(calc(${position.x}px - 50%), ${position.y - 24}px)` : `translate(calc(${position.x - 6}px - 100%), ${position.y - 9.5}px)`;
    } else {
      containerStyle.transform = editorInfo.isCentered ? `translate(calc(${position.x}px - 50%), ${position.y + 7}px)` : `translate(${position.x + 6}px, ${position.y - 9.5}px)`;
    }
  } else if (editorInfo.mode === DiagramElementType.VAR_WIDTH_SIZE) {
    containerStyle.transform = `translate(calc(${position.x}px - 50%), ${position.y - 10}px)`;
  } else {
    containerStyle.transform = `translate(${position.x}px, ${position.y}px) rotate(${editorInfo.angle || 0}deg)`;
  }

  // Determine input class name based on mode
  switch (editorInfo.mode) {
    case DiagramElementType.FRAME_NAME:
      inputClassName = q;
      break;
    case DiagramElementType.CANVAS_GRID_ROW_NAME:
      inputClassName = 'on_canvas_name_editor--canvasGridRowNameInput--NtMKm on_canvas_name_editor--frameNameInput--VpLPf sf_pro--uiFontWithSFProFallback--m-p9V';
      break;
    case DiagramElementType.CANVAS_GRID_ROW_STATE_GROUP:
      inputClassName = q;
      break;
    case DiagramElementType.FLOW_STARTING_POINT_NAME:
      inputClassName = 'on_canvas_name_editor--flowStartingPointNameInput--lLEZF';
      break;
    case DiagramElementType.MEASUREMENT_FREE_TEXT:
      inputClassName = 'on_canvas_name_editor--measurementFreeTextInput--gJle8 sf_pro--uiFontWithSFProFallback--m-p9V';
      break;
    case DiagramElementType.GRID_TRACK_SIZE:
      inputClassName = 'on_canvas_name_editor--gridTrackSizeInput--TX2Zz sf_pro--uiFontWithSFProFallback--m-p9V';
      break;
    case DiagramElementType.VAR_WIDTH_SIZE:
      inputClassName = 'on_canvas_name_editor--varWidthSizeInput--34tdd sf_pro--uiFontWithSFProFallback--m-p9V';
      break;
    default:
      inputClassName = q;
  }
  return {
    containerRef,
    measurerRef,
    containerStyle,
    inputClassname: inputClassName,
    editingName,
    onFocus: event => {
      if (!noSelectOnFocus) {
        event.target.select();
      }
      if (measurerRef.current) {
        calculateInputWidth(measurerRef.current.scrollWidth, editingName);
      }
    },
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    onBlur: event => {
      if (isVisible) {
        setNameCallback(event.target.value);
        fullscreenValue.commit();
        if (event.relatedTarget && event.relatedTarget.className === 'focus-target') {
          Fullscreen?.hideOnCanvasNameEditor();
        }
      }
    },
    width: inputWidth,
    setIsComposing
  };
}

/**
 * Container component for the on-canvas name editor
 * @param props - Component props
 * @returns JSX element
 */
function OnCanvasNameEditorContainer({
  containerRef,
  containerClassname,
  containerStyle,
  measurerRef,
  editingName,
  children
}: ZComponentProps) {
  return jsxs('div', {
    ref: containerRef,
    className: P(containerClassname, jsFullscreenPreventEventCapture, 'on_canvas_name_editor--containerOnLight--6zUKs'),
    style: containerStyle,
    children: [jsx('span', {
      ref: measurerRef,
      className: 'on_canvas_name_editor--measurer--KTnSp',
      children: editingName
    }), children]
  });
}
/**
 * On-canvas name editor input component
 * @param props - Component props
 * @returns JSX element
 */
function OnCanvasNameEditorInput({
  name,
  setName,
  maxWidth,
  noSelectOnFocus,
  disableSaveOnEscape,
  hasSlideRowBeenManuallyRenamed
}: QComponentProps) {
  const editorHookResult = useOnCanvasNameEditor(name, setName, {
    maxWidth,
    noSelectOnFocus,
    disableSaveOnEscape,
    hasSlideRowBeenManuallyRenamed
  });
  if (!editorHookResult) return null;
  const {
    containerRef,
    measurerRef,
    containerStyle,
    editingName,
    onFocus,
    onChange,
    onKeyDown,
    onBlur,
    width,
    setIsComposing,
    inputClassname
  } = editorHookResult;
  return jsx(OnCanvasNameEditorContainer, {
    containerRef,
    containerStyle,
    measurerRef,
    editingName,
    children: jsx('input', {
      autoCapitalize: 'off',
      autoComplete: 'off',
      autoCorrect: 'off',
      autoFocus: true,
      className: inputClassname,
      dir: 'auto',
      onBlur,
      onChange,
      onCompositionEnd: () => setIsComposing(false),
      onCompositionStart: () => setIsComposing(true),
      onFocus,
      onKeyDown,
      spellCheck: false,
      style: {
        width: `${width}px`
      },
      value: editingName
    })
  });
}

/**
 * Converts a LayoutSizingType enum value to its string representation
 * @param sizingType - The layout sizing type enum value
 * @returns String representation of the sizing type
 */
function getLayoutSizingTypeName(sizingType: LayoutSizingType): string {
  switch (sizingType) {
    case LayoutSizingType.FIXED:
      return 'FIXED';
    case LayoutSizingType.HUG:
      return 'HUG';
    case LayoutSizingType.FLEX:
      return 'FLEX';
    default:
      return 'UNKNOWN';
  }
}

/**
 * Grid track size editor component
 * @param props - Component props
 * @returns JSX element
 */
function GridTrackSizeEditor({
  name,
  setName,
  maxWidth,
  noSelectOnFocus,
  disableSaveOnEscape,
  axis,
  gridTrackSizingType,
  setGridTrackSizingType,
  shouldOpenDropdown,
  containerClassname
}: GridTrackSizeEditorProps) {
  const editorHookResult = useOnCanvasNameEditor(name, setName, {
    maxWidth,
    noSelectOnFocus,
    disableSaveOnEscape
  });
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(shouldOpenDropdown);
  const [activeValue, setActiveValue] = useState(getLayoutSizingTypeName(gridTrackSizingType));
  const combobox = ComboboxPrimitive.useCombobox({
    selected: [getLayoutSizingTypeName(gridTrackSizingType)],
    activeValue,
    onActiveValueChange: setActiveValue,
    expanded: isDropdownExpanded,
    expandOnFocus: false,
    onExpand: setIsDropdownExpanded,
    onSelect: selectedValue => {
      if (!selectedValue) return;
      const sizingType = function getSizingTypeFromString(value: string): LayoutSizingType | null {
        switch (value) {
          case 'FIXED':
            return LayoutSizingType.FIXED;
          case 'HUG':
            return LayoutSizingType.HUG;
          case 'FLEX':
            return LayoutSizingType.FLEX;
          default:
            return null;
        }
      }(selectedValue);
      if (sizingType != null) {
        setGridTrackSizingType(sizingType);
        setIsDropdownExpanded(false);
        Fullscreen?.hideOnCanvasNameEditor();
      }
    }
  });
  const inputRef = useRef(null);
  if (!editorHookResult) return null;
  const {
    containerRef,
    measurerRef,
    containerStyle,
    editingName,
    onFocus,
    onChange,
    onKeyDown,
    onBlur,
    width,
    setIsComposing
  } = editorHookResult;
  return jsx(OnCanvasNameEditorContainer, {
    containerRef,
    containerClassname,
    containerStyle,
    measurerRef,
    editingName,
    children: jsxs(setupThemeContext, {
      brand: 'design',
      children: [jsxs('div', {
        className: 'on_canvas_name_editor--gridTrackSizeComboboxContainer--XhG0G',
        children: [jsx(InputPrimitive, {
          id: `on-canvas-name-editor-${name}`,
          ...combobox.getInputProps({
            ref: inputRef,
            autoFocus: true,
            className: 'on_canvas_name_editor--gridTrackSizeComboboxInput--BR3nH sf_pro--uiFontWithSFProFallback--m-p9V',
            onChange: (value, {
              event
            }) => {
              onChange(event);
            },
            onKeyDown(event) {
              if (event.key === 'Enter' && isDropdownExpanded) {
                // Do nothing, let the combobox handle it
              } else {
                onKeyDown(event);
              }
            },
            spellCheck: false,
            style: {
              width: `${width}px`
            },
            value: editingName,
            htmlAttributes: {
              autoCapitalize: 'off',
              autoComplete: 'off',
              autoCorrect: 'off',
              dir: 'auto',
              onBlur,
              onCompositionEnd: () => setIsComposing(false),
              onCompositionStart: () => setIsComposing(true),
              onFocus
            }
          })
        }), jsx(ComboboxPrimitive.Trigger, {
          ...combobox.getTriggerProps(),
          className: 'on_canvas_name_editor--gridTrackSizeComboboxTrigger--x3YF2',
          children: jsx(_$$O, {})
        })]
      }), jsx(ComboboxPrimitive.PopupList, {
        ...combobox.getListProps(),
        'anchorEl': inputRef,
        'data-testid': 'grid-track-combobox-popup-list',
        'placement': 'bottom',
        'offset': ({
          rects
        }) => -rects.reference.height / 2 - rects.floating.height / 2,
        'className': 'on_canvas_name_editor--gridTrackSizeComboboxPopupList--VszDC',
        'children': Object.values(LayoutSizingType).filter(value => typeof value === 'number').map(sizingType => jsx(ComboboxPrimitive.Option, {
          value: getLayoutSizingTypeName(sizingType as LayoutSizingType),
          className: 'on_canvas_name_editor--gridTrackSizeComboboxOption--txB7m',
          recordingKey: `trackSizingTypeOption-${sizingType}`,
          children: jsxs('span', {
            className: P('on_canvas_name_editor--gridTrackSizeComboboxOptionInner--hHnK8', {
              'on_canvas_name_editor--gridTrackSizeComboboxOptionInnerActive--iBPBQ': activeValue === getLayoutSizingTypeName(sizingType as LayoutSizingType)
            }),
            children: [jsx(_$$l, {
              className: 'on_canvas_name_editor--gridTrackSizeComboboxOptionCheck--HHUoo'
            }), jsx(GridTrackSizingIcon, {
              gridTrackSizingType: sizingType as LayoutSizingType,
              axis
            }), jsx(GridTrackSizingLabel, {
              gridTrackSizingType: sizingType as LayoutSizingType,
              axis
            })]
          })
        }, sizingType))
      })]
    })
  });
}

/**
 * Icon component for grid track sizing options
 * @param props - Component props
 * @returns JSX element
 */
function GridTrackSizingIcon({
  gridTrackSizingType,
  axis
}: {
  gridTrackSizingType: LayoutSizingType;
  axis: Axis;
}) {
  switch (gridTrackSizingType) {
    case LayoutSizingType.FIXED:
      return axis === Axis.X ? jsx(_$$w, {}) : jsx(_$$T, {});
    case LayoutSizingType.HUG:
      return axis === Axis.X ? jsx(_$$v, {}) : jsx(_$$C, {});
    case LayoutSizingType.FLEX:
      return axis === Axis.X ? jsx(_$$G, {}) : jsx(_$$N, {});
    default:
      return null;
  }
}

/**
 * Label component for grid track sizing options
 * @param props - Component props
 * @returns JSX element
 */
function GridTrackSizingLabel({
  gridTrackSizingType,
  axis
}: {
  gridTrackSizingType: LayoutSizingType;
  axis: Axis;
}) {
  switch (gridTrackSizingType) {
    case LayoutSizingType.FIXED:
      return axis === Axis.X ? renderI18nText('fullscreen.on_canvas_editor.grid_track_size.fixed_width') : renderI18nText('fullscreen.on_canvas_editor.grid_track_size.fixed_height');
    case LayoutSizingType.HUG:
      return renderI18nText('fullscreen.on_canvas_editor.grid_track_size.hug');
    case LayoutSizingType.FLEX:
      return axis === Axis.X ? renderI18nText('fullscreen.on_canvas_editor.grid_track_size.fill_column') : renderI18nText('fullscreen.on_canvas_editor.grid_track_size.fill_row');
    default:
      return null;
  }
}

/**
 * Grid track size editor component with combobox functionality
 * @returns JSX element
 */
function GridTrackSizeEditorWithCombobox() {
  const [gridTrackSize, setGridTrackSize] = useSelectionProperty('gridTrackSize');
  const [gridTrackSizingType, setGridTrackSizingType] = useSelectionProperty('gridTrackSizingType');
  const {
    axis,
    width,
    initialText,
    shouldOpenDropdown
  } = selectWithShallowEqual((state: any) => ({
    axis: state.mirror.appModel.onCanvasNameEditorInfo.axis,
    width: state.mirror.selectionProperties.width,
    initialText: state.mirror.appModel.onCanvasNameEditorInfo.initialText,
    shouldOpenDropdown: state.mirror.appModel.onCanvasNameEditorInfo.shouldOpenDropdown
  }));
  const gridRowCount = normalizeValue(useSelectionPropertyValue('gridRowCount'));
  const gridColumnCount = normalizeValue(useSelectionPropertyValue('gridColumnCount'));
  if (!gridTrackSize || gridTrackSizingType == null || !width || !gridColumnCount || !gridRowCount || isInvalidValue(gridTrackSize) || isInvalidValue(gridTrackSizingType)) {
    return null;
  }
  const gridSize = axis === Axis.X ? Math.round(width / gridColumnCount) : Math.round(width / gridRowCount);
  const hugLabel = getFeatureFlags().ce_tv_grid_hug ? 'Fill' : 'Auto';
  const displayValue = gridTrackSizingType === LayoutSizingType.FLEX ? hugLabel : gridTrackSizingType === LayoutSizingType.HUG ? 'Hug' : floatToString(gridTrackSize);
  const handleSetName = (inputValue: string) => {
    // Parse the input to determine if it's a sizing type or a numeric value
    const trimmedInput = inputValue.trim().toLowerCase();
    const isAutoOrFill = trimmedInput.startsWith('auto') || trimmedInput.startsWith('fill');
    const isHug = trimmedInput.startsWith('hug') && getFeatureFlags().ce_tv_grid_hug;
    const isFixed = trimmedInput.startsWith('fixed');
    let sizingType: LayoutSizingType | null = null;
    if (isAutoOrFill) {
      sizingType = LayoutSizingType.FLEX;
    } else if (isHug) {
      sizingType = LayoutSizingType.HUG;
    } else if (isFixed) {
      sizingType = LayoutSizingType.FIXED;
    }
    if (sizingType != null) {
      setGridTrackSizingType(sizingType);
    } else {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        setGridTrackSize(numericValue);
      }
    }
  };
  return getFeatureFlags().ce_tv_grid_hug ? jsx(GridTrackSizeEditor, {
    name: initialText || displayValue,
    setName: handleSetName,
    maxWidth: gridSize,
    noSelectOnFocus: !!initialText,
    disableSaveOnEscape: true,
    axis,
    gridTrackSizingType,
    setGridTrackSizingType,
    shouldOpenDropdown
  }) : jsx(OnCanvasNameEditorInput, {
    name: initialText || displayValue,
    setName: handleSetName,
    maxWidth: gridSize,
    noSelectOnFocus: !!initialText,
    disableSaveOnEscape: true
  });
}

/**
 * Frame name editor component
 * @returns JSX element
 */
function FrameNameEditor() {
  const name = useSelector((state: any) => state.mirror.selectionProperties.name);
  const width = useSelector((state: any) => state.mirror.selectionProperties.width);
  const nodeId = xv();
  const trackRenameEvent = _$$W();
  return name != null && width ? jsx(OnCanvasNameEditorInput, {
    name,
    setName: (newName: string) => {
      _$$l2.user('rename-frame', () => renameNode(nodeId, newName));
      trackRenameEvent({
        newTitle: newName,
        nodeType: 'FRAME'
      });

      // Track RFD indicator if name changed and contains indicators
      if (newName !== name && _$$d(newName).length > 0) {
        handleAtomEvent({
          id: 'frame_node_name_changed_with_rfd_indicator',
          properties: {
            nodeId
          }
        });
      }
    },
    maxWidth: width
  }) : null;
}

/**
 * Canvas grid row name editor component
 * @returns JSX element
 */
function CanvasGridRowNameEditor() {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsx(FrameNameEditor, {})
  });
}

/**
 * Flow starting point name editor component
 * @returns JSX element
 */
function FlowStartingPointNameEditor() {
  const [prototypeStartingPoint, setPrototypeStartingPoint] = useSelectionProperty('prototypeStartingPoint' as any);
  const startingPointName = normalizeValue(prototypeStartingPoint)?.name || '';
  return startingPointName ? jsx(OnCanvasNameEditorInput, {
    name: startingPointName,
    setName: (newName: string) => {
      if (newName) {
        setPrototypeStartingPoint({
          name: newName,
          description: normalizeValue(prototypeStartingPoint)?.description || '',
          position: normalizeValue(prototypeStartingPoint)?.position || ''
        });
      }
    },
    maxWidth: 93,
    containerClassname: 'on_canvas_name_editor--flowStartingPointNameContainer--JdVwd'
  }) : null;
}

/**
 * Section name editor component
 * @returns JSX element
 */
function SectionNameEditor() {
  const name = useSelector((state: any) => state.mirror.selectionProperties.name);
  const width = useSelector((state: any) => state.mirror.selectionProperties.width);
  const trackRenameEvent = _$$W();
  return name != null && width ? jsx(SectionNameEditorInput, {
    name,
    setNameWithNodeId: (nodeId: string, newName: string) => {
      _$$l2.user('rename-section', () => renameNode(nodeId, newName ? newName.trim() : ''));
      trackRenameEvent({
        newTitle: newName,
        nodeType: 'SECTION'
      });
    },
    maxWidth: width
  }) : null;
}
interface SectionNameEditorInputProps {
  name: string;
  setNameWithNodeId: (nodeId: string, name: string) => void;
  maxWidth: number;
}

/**
 * Section name editor input component
 * @param props - Component props
 * @returns JSX element
 */
function SectionNameEditorInput({
  name,
  setNameWithNodeId,
  maxWidth
}: SectionNameEditorInputProps) {
  const nodeId = uQ();
  const editorHookResult = useOnCanvasNameEditor(name, newName => {
    if (nodeId) {
      setNameWithNodeId(nodeId, newName);
    }
  }, {
    maxWidth
  });
  const isDesignLayout = useSelector((state: AppState) => {
    const activeCanvasEditModeType = state.mirror.appModel.activeCanvasEditModeType;
    return activeCanvasEditModeType === LayoutTabType.DESIGN_LAYOUT || activeCanvasEditModeType === LayoutTabType.SITES_LAYOUT;
  });
  const {
    fontSize,
    top,
    left,
    height,
    horizontalPadding,
    verticalPadding,
    borderRadius
  } = function getSectionEditorStyles(isTopLevelSection: boolean, zoomScalePercentage: number) {
    const {
      fontSize: _fontSize,
      padding,
      margin,
      cornerRadius
    } = useSelector((state: any) => state.mirror.appModel.onCanvasNameEditorInfo);
    const showBigSectionNamePills = InteractionCpp.editorTypeConfig().showBigSectionNamePills();
    const paddingX = padding.x;
    const paddingY = padding.y;
    const sectionHeight = showBigSectionNamePills ? 24 : 2 * paddingY + _fontSize;
    let positionTop = 0;
    let positionLeft = -margin.y - sectionHeight;
    const sectionNestedZoomLevel = InteractionCpp.editorTypeConfig().sectionNestedZoomLevel();
    if (!isTopLevelSection || zoomScalePercentage <= sectionNestedZoomLevel) {
      positionLeft = margin.x;
      positionTop = margin.y;
    }
    return {
      fontSize: _fontSize,
      height: sectionHeight,
      top: positionTop,
      left: positionLeft,
      horizontalPadding: paddingX,
      verticalPadding: paddingY,
      borderRadius: cornerRadius
    };
  }(useSelector((state: any) => {
    if (nodeId === null) return false;
    const node = state.mirror.sceneGraph.get(nodeId);
    const currentPage = state.mirror.appModel.currentPage;
    const isResponsiveSet = !!node?.isResponsiveSet;
    return node && (node.type === 'SECTION' || isResponsiveSet) && node.parentGuid === currentPage;
  }), Math.round(100 * getViewportInfo({
    subscribeToUpdates_expensive: true
  }).zoomScale));
  if (!editorHookResult || !nodeId) return null;
  const {
    containerRef,
    measurerRef,
    containerStyle,
    editingName,
    onFocus,
    onChange,
    onKeyDown,
    onBlur,
    width,
    setIsComposing
  } = editorHookResult;
  const fontWeight = isDesignLayout ? 'normal' : 500;
  return jsxs('div', {
    ref: containerRef,
    className: `on_canvas_name_editor--sectionNameContainer--D8aez ${jsFullscreenPreventEventCapture}`,
    style: containerStyle,
    children: [jsx('span', {
      ref: measurerRef,
      className: 'on_canvas_name_editor--sectionMeasurer--kfBij',
      style: {
        fontSize,
        fontWeight,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        paddingTop: verticalPadding,
        paddingBottom: verticalPadding
      },
      children: editingName
    }), jsx('input', {
      autoCapitalize: 'off',
      autoComplete: 'off',
      autoCorrect: 'off',
      autoFocus: true,
      className: 'on_canvas_name_editor--sectionNameInput--MgIUi',
      dir: 'auto',
      onBlur,
      onChange,
      onCompositionEnd: () => setIsComposing(false),
      onCompositionStart: () => setIsComposing(true),
      onFocus,
      onKeyDown,
      spellCheck: false,
      style: {
        width: `${width}px`,
        fontSize,
        fontWeight,
        left,
        top,
        height,
        borderRadius,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        paddingTop: verticalPadding,
        paddingBottom: verticalPadding
      },
      value: editingName
    })]
  });
}

/**
 * Measurement free text editor component
 * @returns JSX element
 */
function MeasurementFreeTextEditor() {
  const {
    measurementId,
    initMeasurementText
  } = useSelector((state: any) => state.mirror.appModel.onCanvasNameEditorInfo);
  const currentPage = useSelector((state: any) => state.mirror.appModel.currentPage);
  const measurement = useMemo(() => HandoffBindingsCpp.findMeasurement(measurementId, currentPage), [measurementId, currentPage]);
  const hasFreeText = useRef(!measurement?.freeText);
  const isFocusViewActive = isDevModeFocusViewActive();
  const trackMeasurementEvent = useCallback((node: any, measurementData: any, freeText: string) => {
    const trackEvent = trackFileEventWithStore();
    const topLevelFrame = node.findContainingTopLevelFrameOrSelf();
    const canvas = node.containingCanvas;
    const eventData: any = {
      measurement_id: measurementData.id,
      from_node_id: measurementData.fromNode,
      to_node_id: measurementData.toNode.length === 1 ? measurementData.toNode[0].toString() : measurementData.toNode.toString(),
      node_type: node.type
    };
    if (topLevelFrame) {
      eventData.tlf_id = topLevelFrame;
    }
    if (canvas) {
      eventData.page_id = canvas;
    }
    eventData.free_text = freeText;
    trackEvent('update_annotation_measurement_free_text', eventData);
  }, []);
  if (!measurement) return null;
  if (isFocusViewActive) {
    Fullscreen?.hideOnCanvasNameEditor();
    return null;
  }
  return jsx(OnCanvasNameEditorInput, {
    name: initMeasurementText,
    setName: (newText: string) => {
      const node = getSingletonSceneGraph().get(measurement.fromNode);
      if (node) {
        // Don't update if text hasn't changed
        if (hasFreeText && newText === initMeasurementText) return;
        _$$l2.user('free-text-annotation-measurement', () => {
          node.updateMeasurementFreeText(measurement.id, newText);
          trackMeasurementEvent(node, measurement, newText);
        });
      }
    },
    maxWidth: 150
  });
}

/**
 * Variable width size editor component
 * @returns JSX element
 */
function VariableWidthSizeEditor() {
  const {
    varWidthNodeId,
    varWidthIndex
  } = useSelector((state: any) => state.mirror.appModel.onCanvasNameEditorInfo);
  const trackEvent = trackFileEventWithStore();
  const node = getSingletonSceneGraph().get(varWidthNodeId);
  if (!node) return null;
  const variableWidthPoints = node.variableWidthPoints;
  const strokeWeight = node.strokeWeight;
  if (variableWidthPoints.length <= varWidthIndex) return null;
  const point = variableWidthPoints[varWidthIndex];
  const ascentValue = point.ascent * strokeWeight * 2;
  return jsx(OnCanvasNameEditorInput, {
    name: (Math.round(10 * ascentValue) / 10).toString(),
    containerClassname: 'on_canvas_name_editor--varWidthSizeContainer--GP30J',
    setName: (newAscent: string) => scopeAwareFunction.user('set-var-width-point-ascent', () => {
      const numericValue = parseFloat(newAscent);
      if (isNaN(numericValue)) return;
      const updatedPoints = [...variableWidthPoints];
      updatedPoints[varWidthIndex] = {
        ...point,
        ascent: numericValue / (2 * strokeWeight)
      };
      node.variableWidthPoints = updatedPoints;
      trackEvent('on_canvas_var_width_point_update', {
        node_id: node.id
      });
    })(),
    maxWidth: 200
  });
}

/**
 * Starter team edit confirmation modal component
 * @param props - Component props
 * @returns JSX element
 */
function StarterTeamEditConfirmationModal({
  fileKey
}: {
  fileKey: string;
}) {
  const currentUser = selectCurrentUser();
  return jsx(TrackingProvider, {
    name: 'Starter team edit confirmation modal',
    properties: {
      userId: currentUser?.id,
      userEmail: currentUser?.email
    },
    children: jsx(ConfirmationModal2, {
      confirmationTitle: getI18nString('fullscreen.starter_team_edit_modal.open_this_link'),
      confirmText: 'Continue',
      onConfirm: () => {
        trackEventAnalytics('Starter File Edit Modal Confirm Clicked', {
          fileKey
        });
        _$$L.createStarterTeamFileRole({
          key: fileKey
        });
      },
      disableClickOutsideToHide: true,
      hideOnConfirm: false,
      size: 'small',
      hideCancel: false,
      hideClose: true,
      onCancel: () => {
        trackEventAnalytics('Starter File Edit Modal Cancel Clicked', {
          fileKey
        });
        customHistory.redirect('/files/recents-and-sharing');
      },
      children: jsx('div', {
        className: jE,
        children: renderI18nText('fullscreen.starter_team_edit_modal.when_you_open_this_link_your_email_may_be_visible', {
          email: currentUser?.email
        })
      })
    })
  });
}

/**
 * File migration warning modal component
 * @returns JSX element
 */
const FileMigrationWarningModal = registerModal(() => {
  return jsxs(ModalView, {
    size: 'small',
    className: yl,
    disableClickOutsideToHide: true,
    hide: noop,
    children: [jsx('div', {
      className: DD,
      children: renderI18nText('file_migration.updating.title')
    }), jsx('div', {
      className: jE,
      children: renderI18nText('file_migration.updating.message')
    })]
  });
}, 'FileMigrationWarningModal');

/**
 * Gets the progress bar state from the store
 * @returns Progress bar state
 */
function getProgressBarState() {
  return useSelector((state: AppState) => state.progressBarState);
}

/**
 * Initializes widget allowlist
 * @param param0 - Initialization parameters
 * @returns Initialization result
 */
export const initializeWidgetAllowlistMemoized = memoizeByArgs((param0: any, _param1: any, _param2: any) => {
  param0(gI());
  param0(initializeWidgetAllowlist({}));
});

/**
 * Main on-canvas name editor component selector
 * @returns JSX element
 */
export function OnCanvasNameEditor() {
  switch (useAppModelProperty('onCanvasNameEditorInfo').mode) {
    case DiagramElementType.FRAME_NAME:
      return jsx(FrameNameEditor, {});
    case DiagramElementType.FLOW_STARTING_POINT_NAME:
      return jsx(FlowStartingPointNameEditor, {});
    case DiagramElementType.SECTION_NAME:
      return jsx(SectionNameEditor, {});
    case DiagramElementType.MEASUREMENT_FREE_TEXT:
      return jsx(MeasurementFreeTextEditor, {});
    case DiagramElementType.RESPONSIVE_SET_NAME:
      return jsx(SectionNameEditor, {});
    case DiagramElementType.CANVAS_GRID_ROW_NAME:
      return jsx(CanvasGridRowNameEditor, {});
    case DiagramElementType.CANVAS_GRID_ROW_STATE_GROUP:
      return jsx(FrameNameEditor, {});
    case DiagramElementType.GRID_TRACK_SIZE:
      return jsx(GridTrackSizeEditorWithCombobox, {});
    case DiagramElementType.VAR_WIDTH_SIZE:
      return jsx(VariableWidthSizeEditor, {});
    default:
      return null;
  }
}

/**
 * Plugin modal component
 * @returns JSX element
 */
export function PluginModal() {
  const progressBarState = getProgressBarState();
  const showingOpenDesktopAppModal = useSelector((state: any) => state.showingOpenDesktopAppModal);
  const dispatch = useDispatch<AppDispatch>();
  if (progressBarState.mode !== UIVisibilitySetting.OFF) return jsx(Fragment, {});
  switch (showingOpenDesktopAppModal) {
    case PluginRunForContext.FOR_OPEN:
      return jsx(createOpenDesktopAppModal, {
        dispatch
      });
    case PluginRunForContext.FOR_MENU:
      return jsx(_$$s, {
        dispatch
      });
  }
  return jsx(Fragment, {});
}

/**
 * Starter team edit modal component
 * @param props - Component props
 * @returns JSX element
 */
export function StarterTeamEditModal({
  showStartModal
}: {
  showStartModal?: boolean;
}) {
  const currentFile = selectCurrentFile();
  const currentUser = selectCurrentUser();
  return showStartModal && currentUser && currentFile && currentFile.key ? jsx(StarterTeamEditConfirmationModal, {
    fileKey: currentFile.key
  }) : jsx(Fragment, {});
}

/**
 * Multiplayer connection timeout handler
 * @returns void
 */
export function MultiplayerConnectionTimeoutHandler() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalShownRef = useRef(false);
  const progressBarState = getProgressBarState();
  const dispatch = useDispatch<AppDispatch>();
  const needsUpgrade = useSelector((state: any) => state.needsUpgrade);
  const clearTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [timeoutRef]);
  const startTimer = useCallback(() => {
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      modalShownRef.current = true;
      if (needsUpgrade && progressBarState.mode !== UIVisibilitySetting.OFF) {
        dispatch(showModalHandler({
          type: FileMigrationWarningModal
        }) as any);
      }
    }, 20000);
  }, [needsUpgrade, progressBarState, dispatch, clearTimer]);
  const hideModal = useCallback(() => {
    if (modalShownRef.current) {
      dispatch(hideModal() as any);
    }
    modalShownRef.current = false;
    clearTimer();
  }, [modalShownRef, clearTimer, dispatch]);
  useEffect(() => {
    fullscreenValue.fromFullscreen.on('multiplayerConnect', startTimer);
    fullscreenValue.fromFullscreen.on('multiplayerDisconnect', clearTimer);
    fullscreenValue.fromFullscreen.on('multiplayerGotSchema', hideModal);
    return () => {
      fullscreenValue.fromFullscreen.removeListener('multiplayerConnect', startTimer);
      fullscreenValue.fromFullscreen.removeListener('multiplayerDisconnect', clearTimer);
      fullscreenValue.fromFullscreen.removeListener('multiplayerGotSchema', hideModal);
      clearTimer();
    };
  }, [clearTimer, startTimer, hideModal]);
}

/**
 * Pointer input tracker
 * @param event - Pointer event
 * @param ref - Ref object
 * @param toolType - Tool type
 * @returns boolean
 */
export function trackPointerInput(event: any, ref: React.MutableRefObject<boolean>, toolType: DesignGraphElements) {
  if (!ref.current && function shouldTrackPointerInput(e: any, t: DesignGraphElements) {
    if (t === DesignGraphElements.VECTOR_PENCIL || t === DesignGraphElements.ERASER || t === DesignGraphElements.HIGHLIGHTER) {
      const productType = 'figjam';
      trackUserEvent('Pointer Input', debugState.getState(), {
        inputSource: e.pointerType,
        tool: function getToolName(tool: DesignGraphElements) {
          switch (tool) {
            case DesignGraphElements.VECTOR_PENCIL:
              return 'VECTOR_PENCIL';
            case DesignGraphElements.ERASER:
              return 'ERASER';
            case DesignGraphElements.HIGHLIGHTER:
              return 'HIGHLIGHTER';
            default:
              return 'UNKNOWN';
          }
        }(t),
        productType
      });
      return true;
    }
    return false;
  }(event, toolType)) {
    ref.current = true;
  }
}

/**
 * Sets the first interaction flag
 * @param event - Event object
 * @param ref - Ref object
 * @returns void
 */
export function setFirstInteraction(event: any, ref: React.MutableRefObject<boolean>) {
  if (!ref.current) {
    ref.current = true;
  }
}

/**
 * Comments and multiplayer cursor system component
 * @param props - Component props
 * @returns JSX element
 */
// todo: important: used in fullscreen/index.tsx
export function CommentsAndMultiplayerSystem({
  commentsDetailContainerRef
}: {
  commentsDetailContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const isHistoryView = useAppModelProperty('topLevelMode') === ViewType.HISTORY;
  const currentFile = selectCurrentFile();
  const user = useSelector((state: any) => state.user);
  const currentPage = useAppModelProperty('currentPage');
  const comments = useSelector((state: any) => state.comments);
  const isOverview = useIsFullscreenOverview();
  const hasDevVariables = useIsFullscreenWithDevVariables();
  const isComponentBrowser = useIsFullscreenDevModeComponentBrowser();
  const isNotLoggedInButSupported = isUserNotLoggedInAndEditorSupported();
  const canUseDemoFile = useCanUseDevModeDemoFile();
  const activeThreadId = comments.activeThread?.id || null;
  const showOnlyParticipating = comments.showOnlyParticipating;
  const showResolved = comments.showResolved;
  return jsxs(Fragment, {
    children: [jsx(Ay, {}), currentFile && !isHistoryView && !isOverview && !hasDevVariables && !isComponentBrowser && (user || isNotLoggedInButSupported) && !canUseDemoFile && jsx($2, {
      showOnlyParticipatingComments: showOnlyParticipating,
      showResolvedComments: showResolved,
      pageId: currentPage,
      activeId: activeThreadId,
      renderDetailContainerInPortal: true,
      detailContainerPortal: commentsDetailContainerRef.current
    }), !canUseDemoFile && jsx(createMultiplayerCursorSystem, {})]
  });
}

// Export aliases for backward compatibility
export const jx = StarterTeamEditModal;
export const XI = CommentsAndMultiplayerSystem;
export const qn = OnCanvasNameEditor;
export const Nd = PluginModal;
export const RS = initializeWidgetAllowlistMemoized;
export const P2 = trackPointerInput;
export const j6 = setFirstInteraction;
export const Ky = MultiplayerConnectionTimeoutHandler;

// ======================
// TypeScript Interfaces
// ======================

interface _OnCanvasNameEditorInfo {
  mode: DiagramElementType;
  x: number;
  y: number;
  axis?: Axis;
  width?: number;
  initialText?: string;
  shouldOpenDropdown?: boolean;
  varWidthTextDirection?: {
    x: number;
    y: number;
  };
  isShownOnLeft?: boolean;
  angle?: number;
  invertTextPosition?: boolean;
  isCentered?: boolean;
  padding?: {
    x: number;
    y: number;
  };
  margin?: {
    x: number;
    y: number;
  };
  cornerRadius?: number;
  fontSize?: number;
  activeCanvasEditModeType?: LayoutTabType;
  currentPage?: string;
}
interface Position {
  x: number;
  y: number;
}
interface StyleObject {
  transformOrigin?: string;
  transform?: string;
  [key: string]: string | undefined;
}
interface NameEditorHookProps {
  maxWidth: number;
  noSelectOnFocus?: boolean;
  disableSaveOnEscape?: boolean;
  hasSlideRowBeenManuallyRenamed?: boolean;
}
interface NameEditorHookReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  measurerRef: React.RefObject<HTMLSpanElement>;
  containerStyle: StyleObject;
  inputClassname: string;
  editingName: string;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  width: number;
  setIsComposing: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ZComponentProps {
  containerRef: React.RefObject<HTMLDivElement>;
  containerClassname?: string;
  containerStyle: StyleObject;
  measurerRef: React.RefObject<HTMLSpanElement>;
  editingName: string;
  children: React.ReactNode;
}
interface QComponentProps {
  name: string;
  setName: (name: string) => void;
  maxWidth: number;
  noSelectOnFocus?: boolean;
  disableSaveOnEscape?: boolean;
  hasSlideRowBeenManuallyRenamed?: boolean;
  containerClassname?: string;
}
interface GridTrackSizeEditorProps {
  name: string;
  setName: (name: string) => void;
  maxWidth: number;
  noSelectOnFocus?: boolean;
  disableSaveOnEscape?: boolean;
  axis: Axis;
  gridTrackSizingType: LayoutSizingType;
  setGridTrackSizingType: (type: LayoutSizingType) => void;
  shouldOpenDropdown?: boolean;
  containerClassname?: string;
}