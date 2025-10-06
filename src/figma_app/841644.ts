import classNames from 'classnames';
import { forwardRef, memo, useCallback, useContext, useId, useRef } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { G as _$$G, v as _$$v } from '../905/77111';
import { KindEnum } from '../905/129884';
import { getI18nString } from '../905/303541';
import { FormattedInputContext } from '../905/427409';
import { IconButton } from '../905/443068';
import { RecordableDiv } from '../905/511649';
import { ButtonPrimitive } from '../905/632989';
import { SvgComponent } from '../905/714743';
import { Ab, AM, fE, I6, jX, KH, li, mc, Nb, NH, r9, UU, vu, wQ, zm } from '../905/838262';
import { useDropdown } from '../905/848862';
import { m as _$$m } from '../905/886380';
import { o as _$$o } from '../905/949628';
import { i as _$$i } from '../figma_app/85949';
import { FormattedInputWithWrapper } from '../figma_app/260445';
import { createMultiRefCallback } from '../figma_app/272902';
import { Gp } from '../figma_app/779179';
import { SG } from '../figma_app/852050';
import { generateRecordingKey, useHandleMouseEvent } from '../figma_app/878298';
import { _$$default as $$default } from '../svg/764361';

// Define interfaces for props to improve type safety
interface ComboInputContainerProps {
  children: React.ReactNode;
  disabled?: boolean;
  icons?: React.ReactNode[];
  iconLayout?: 'absolute' | string;
  inputClassName?: string;
  isActive?: boolean;
  nonTextChild?: boolean;
  noBorder?: boolean;
  fullHeight?: boolean;
  onMouseDownCapture?: (event: React.MouseEvent) => void;
  onContextMenuCapture?: (event: React.MouseEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  recordingKey?: string;
}

/**
 * ComboInputContainer component - renders a container for combo input controls with icons and event handlers.
 * Original name: x
 */
const ComboInputContainer = forwardRef<HTMLDivElement, ComboInputContainerProps>(({
  children,
  disabled = false,
  icons,
  iconLayout = 'absolute',
  inputClassName,
  isActive = false,
  nonTextChild = false,
  noBorder = false,
  fullHeight = false,
  onMouseDownCapture,
  onContextMenuCapture,
  onFocus,
  onBlur,
  onKeyDown,
  recordingKey
}, ref) => {
  return jsxs(RecordableDiv, {
    forwardedRef: ref,
    recordingKey: generateRecordingKey(recordingKey, 'comboInputControl', 'container'),
    className: classNames(inputClassName, {
      [mc]: true,
      [vu]: isActive,
      [li]: noBorder,
      [KH]: !noBorder,
      [r9]: disabled,
      [fE]: nonTextChild
    }),
    onMouseDownCapture,
    onContextMenuCapture,
    onFocus,
    onBlur,
    onKeyDown,
    children: [jsx('div', {
      className: classNames(I6, {
        [Nb]: fullHeight
      }),
      children
    }), !disabled && jsx('span', {
      className: classNames(zm, {
        [wQ]: iconLayout === 'absolute'
      }),
      children: icons
    })]
  });
});
interface FormattedInputWrapperProps {
  inputClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  currentFieldValue?: any;
  recordingKey?: string;
  disabled?: boolean;
  children: React.ReactNode;
  hideIcon?: boolean;
  iconLayout?: 'absolute' | string;
  nonTextChild?: boolean;
  isActive?: boolean;
  onPickerOpen?: () => void;
  disableEntryPoint?: boolean;
  noBorder?: boolean;
  fullHeight?: boolean;
  hasBindingContextMenu?: boolean;
  onClickDetachButton?: () => void;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  handleClearOverride?: () => void;
}

/**
 * FormattedInputWrapper component - wraps input with binding and icon logic.
 * Original name: $$N2
 */
export const FormattedInputWrapper = forwardRef<HTMLDivElement, FormattedInputWrapperProps>(({
  inputClassName,
  inputRef,
  currentFieldValue,
  recordingKey,
  disabled = false,
  children,
  hideIcon = false,
  iconLayout = 'absolute',
  nonTextChild = false,
  isActive,
  onPickerOpen,
  disableEntryPoint = false,
  noBorder = false,
  fullHeight = false,
  hasBindingContextMenu = false,
  onClickDetachButton,
  onFocus,
  onBlur,
  handleClearOverride
}, ref) => {
  const id = useId();
  const context = useContext(FormattedInputContext);
  const boundVariableId = context?.boundVariableId;
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    showing,
    show,
    data,
    hide
  } = useDropdown(_$$v + id);
  const handlePickerOpen = useCallback(() => {
    if (onPickerOpen) {
      onPickerOpen();
    } else {
      context?.showBindingUI(containerRef.current, {
        currentFieldValue
      });
    }
    hide();
  }, [currentFieldValue, hide, onPickerOpen, context]);
  const handleDetach = useCallback(() => {
    context?.onVariableSelected?.(undefined);
    hide();
    onClickDetachButton?.();
  }, [hide, context, onClickDetachButton]);
  const detachMouseHandler = useHandleMouseEvent(generateRecordingKey(recordingKey, 'detachIcon'), 'click', handleDetach);
  const mouseDownHandler = useHandleMouseEvent(recordingKey, 'mousedown', event => {
    if (event && !disableEntryPoint && event.shiftKey) {
      handlePickerOpen();
      event.preventDefault();
      event.stopPropagation();
    }
  });
  const contextMenuHandler = useHandleMouseEvent(recordingKey, 'contextmenu', event => {
    if (event && !disableEntryPoint && hasBindingContextMenu && inputRef?.current) {
      show({
        data: {
          position: {
            top: event.clientY,
            left: event.clientX
          }
        }
      });
      event.preventDefault();
      event.stopPropagation();
    }
  });
  const icons = [handleClearOverride && jsx(ClearOverrideButton, {
    handleClearOverride,
    recordingKey: generateRecordingKey(recordingKey, 'clearOverrideButton')
  }, 'clearOverrideButton'), !(hideIcon || disableEntryPoint) && jsx(VariableBindingButton, {
    boundVariableId,
    handleUnbind: detachMouseHandler,
    handlePickerOpen,
    recordingKey
  }, 'variableBindingButton')].filter(Boolean);
  return jsxs(Fragment, {
    children: [jsx(ComboInputContainer, {
      ref: createMultiRefCallback(ref, containerRef),
      disabled,
      fullHeight,
      iconLayout,
      icons,
      inputClassName: classNames(inputClassName, {
        [Gp]: icons.length > 0 && iconLayout === 'absolute'
      }),
      isActive: isActive ?? !!context?.isShowingBindingUI,
      noBorder,
      nonTextChild,
      onBlur,
      onContextMenuCapture: contextMenuHandler,
      onFocus,
      onMouseDownCapture: mouseDownHandler,
      recordingKey,
      children
    }), hasBindingContextMenu && inputRef && showing && typeof data?.position?.top === 'number' && typeof data?.position?.left === 'number' && jsx(_$$G, {
      inputRef,
      isBound: !!context?.boundVariableId,
      left: data.position.left,
      onClose: hide,
      onOpenVariablePicker: handlePickerOpen,
      onUnbindVariable: detachMouseHandler,
      recordingKey: generateRecordingKey(recordingKey, 'contextMenu'),
      top: data.position.top
    })]
  });
});
interface VariableBindingInputProps {
  fields?: any[];
  currentFieldValue?: number;
  resolvedType?: any;
  editingStyleGuid?: string;
  inputClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
  recordingKey?: string;
  disableEntryPoint?: boolean;
  hideIcon?: boolean;
  noBorder?: boolean;
  children: React.ReactNode;
  hasBindingContextMenu?: boolean;
  fullHeight?: boolean;
  onClickDetachButton?: () => void;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
}

/**
 * VariableBindingInput component - memoized wrapper for variable binding input logic.
 * Original name: $$C1
 */
export const VariableBindingInput = memo<VariableBindingInputProps>(({
  fields,
  currentFieldValue,
  resolvedType,
  editingStyleGuid,
  inputClassName,
  inputRef,
  disabled = false,
  recordingKey,
  disableEntryPoint = false,
  hideIcon = false,
  noBorder = false,
  children,
  hasBindingContextMenu = false,
  fullHeight = false,
  onClickDetachButton,
  onBlur,
  onFocus
}) => {
  const availableFields = SG(fields).data ?? [];
  return jsx(FormattedInputWithWrapper, {
    fields,
    resolvedType,
    editingStyleGuid,
    children: jsx(FormattedInputWrapper, {
      currentFieldValue,
      disableEntryPoint: disableEntryPoint || availableFields.length === 0,
      disabled,
      fullHeight,
      hasBindingContextMenu,
      hideIcon,
      inputClassName,
      inputRef,
      noBorder,
      onBlur,
      onClickDetachButton,
      onFocus,
      recordingKey,
      children
    })
  });
});
interface PickerControlProps {
  currentFieldValue?: any;
  disabled?: boolean;
  isActive?: boolean;
  recordingKey?: string;
  children: React.ReactNode;
  onPickerOpen?: () => void;
  dataTestId?: string;
  openOnRightClick?: boolean;
  inputClassName?: string;
  tooltip?: string;
}

/**
 * PickerControl component - handles picker opening on mouse events.
 * Original name: $$w0
 */
export const PickerControl = forwardRef<HTMLDivElement, PickerControlProps>(({
  currentFieldValue,
  disabled = false,
  isActive = false,
  recordingKey,
  children,
  onPickerOpen,
  dataTestId,
  openOnRightClick = false,
  inputClassName,
  tooltip
}, ref) => {
  const context = useContext(FormattedInputContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const handlePickerOpen = useCallback(() => {
    if (onPickerOpen) {
      onPickerOpen();
    } else {
      context?.showBindingUI(containerRef.current, {
        currentFieldValue
      });
    }
  }, [currentFieldValue, onPickerOpen, context]);
  const mouseDownHandler = useHandleMouseEvent(recordingKey, 'mousedown', event => {
    if (event && !disabled) {
      if (openOnRightClick) {
        if (_$$i(event)) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (event.shiftKey && event.buttons & 1) {
          handlePickerOpen();
          event.preventDefault();
          event.stopPropagation();
        }
      } else if (event.buttons & 1) {
        handlePickerOpen();
        event.preventDefault();
        event.stopPropagation();
      }
    }
  });
  const contextMenuHandler = useHandleMouseEvent(recordingKey, 'contextmenu', event => {
    if (event && !disabled) {
      handlePickerOpen();
      event.preventDefault();
      event.stopPropagation();
    }
  });
  return jsx('div', {
    'ref': createMultiRefCallback(ref, containerRef),
    'className': classNames(inputClassName, {
      [jX]: true,
      [NH]: isActive && !inputClassName
    }),
    'onMouseDownCapture': mouseDownHandler,
    'onContextMenu': contextMenuHandler,
    'data-testid': dataTestId,
    'data-tooltip-type': tooltip ? KindEnum.TEXT : undefined,
    'data-tooltip': tooltip,
    children
  });
});
interface ClearOverrideButtonProps {
  handleClearOverride: () => void;
  recordingKey?: string;
}

/**
 * ClearOverrideButton component - button to clear overrides.
 * Original name: O
 */
function ClearOverrideButton({
  handleClearOverride,
  recordingKey
}: ClearOverrideButtonProps) {
  return jsx(IconButton, {
    'aria-label': getI18nString('variables.authoring_modal.table.clear_override'),
    'actionOnPointerDown': true,
    'onClick': handleClearOverride,
    'recordingKey': recordingKey,
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('variables.authoring_modal.table.clear_override')
    },
    'children': jsx(_$$m, {})
  }, 'clearOverrideButton');
}
interface VariableBindingButtonProps {
  boundVariableId?: string;
  handleUnbind: () => void;
  handlePickerOpen: () => void;
  recordingKey?: string;
}

/**
 * VariableBindingButton component - button for variable binding actions.
 * Original name: R
 */
function VariableBindingButton({
  boundVariableId,
  handleUnbind,
  handlePickerOpen,
  recordingKey
}: VariableBindingButtonProps) {
  if (boundVariableId) {
    return jsx(ButtonPrimitive, {
      'className': classNames(AM, Ab),
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('variables.binding_ui.detach_variable_tooltip')
      },
      'aria-label': getI18nString('variables.binding_ui.detach_variable_tooltip'),
      'onClick': handleUnbind,
      'children': jsx(_$$o, {})
    });
  }
  return jsx(ButtonPrimitive, {
    'className': UU,
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('fullscreen.properties_panel.apply_variable'),
      'data-test-id': generateRecordingKey('variable-control-icon', recordingKey ?? ''),
      'tabIndex': -1
    },
    'aria-label': getI18nString('fullscreen.properties_panel.apply_variable'),
    'onClick': handlePickerOpen,
    'recordingKey': generateRecordingKey(recordingKey, 'comboBoxButton'),
    'children': jsx(SvgComponent, {
      svg: $$default
    })
  });
}

// Update exports to use refactored names
export const JQ = PickerControl;
export const sA = VariableBindingInput;
export const sJ = FormattedInputWithWrapper;