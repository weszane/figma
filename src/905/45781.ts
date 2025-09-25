
import classNames from 'classnames'
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { KeyCodes } from '../905/63728'
import { FormattedInput } from '../905/203369'
import { isInvalidValue, isValidValue } from '../905/216495'
import { getI18nString } from '../905/303541'
import { FormattedInputContext } from '../905/427409'
import { Bv, hF, kL, zN } from '../905/435127'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { isNotNullish } from '../figma_app/95419'
import { P as _$$P, J } from '../figma_app/120873'
import { S as _$$S } from '../figma_app/552746'
import { M } from '../figma_app/648761'
import { DimensionErrorType } from '../figma_app/763686'
import { generateRecordingKey } from '../figma_app/878298'
import { useLatestRef } from '../figma_app/922077'


// Original code: $$v0 function
// Refactored to TokenizableInput for better readability and maintainability.
// This component handles a tokenizable input with variable binding support.

/**
 * Props for the TokenizableInput component.
 */
interface TokenizableInputProps {
  property: any;
  formatter: any;
  forwardedRef?: any;
  outerClassName?: string;
  pillsContainerClassName?: string;
  disabled?: boolean;
  allowEmpty?: boolean;
  ariaLabel?: string;
  autoFocus?: boolean;
  ellipsis?: boolean;
  className?: string;
  dataTestId?: string;
  mixedMathHandler?: any;
  noBorderOnFocus?: boolean;
  noLeftBorder?: boolean;
  noPlaceholderLine?: boolean;
  onBlur?: (event: any) => void;
  onChange?: (event: any) => void;
  onClick?: (event: any) => void;
  onFocus?: (event: any) => void;
  onKeyDown?: (event: any) => void;
  onKeyUp?: (event: any) => void;
  onMixedMathNudge?: (event: any) => void;
  onMouseDown?: (event: any) => void;
  placeholder?: string;
  recordingKey?: string;
  shouldClearOnFocus?: boolean;
  squareRightBorder?: boolean;
}

/**
 * TokenizableInput component for handling formatted input with variable tokens.
 * @param props - The component props.
 * @returns The JSX element.
 */
export function TokenizableInput(props: TokenizableInputProps) {
  const context = useContext(FormattedInputContext);
  const { property, formatter } = props;

  // Memoized tokens based on context and property
  const tokens = useMemo(() => {
    if (!context?.boundVariableId) return [];
    if (isInvalidValue(property) || isInvalidValue(context.mismatchedValue)) {
      return [{ value: getI18nString('fullscreen.mixed') }];
    }
    const mismatched = context.mismatchedValue;
    return [{
      value: mismatched ? mismatched.value.toFixed(0) : formatter.format(property),
      variableId: context.boundVariableId ?? undefined,
      isDeleted: context.isBoundVariableDeleted,
      invalidReason: getInvalidReason(mismatched?.reason) ?? undefined,
    }];
  }, [property, formatter, context]);

  // Helper function to get invalid reason string
  function getInvalidReason(reason: DimensionErrorType | null | undefined): string | null {
    if (reason == null) return null;
    switch (reason) {
      case DimensionErrorType.NONE: return null;
      case DimensionErrorType.LESS_THAN_MIN_WIDTH: return getI18nString('variables.invalid.less_than_min_width');
      case DimensionErrorType.LESS_THAN_MIN_HEIGHT: return getI18nString('variables.invalid.less_than_min_height');
      case DimensionErrorType.GREATER_THAN_MAX_WIDTH: return getI18nString('variables.invalid.greater_than_max_width');
      case DimensionErrorType.GREATER_THAN_MAX_HEIGHT: return getI18nString('variables.invalid.greater_than_max_height');
      case DimensionErrorType.LESS_THAN_ONE: return getI18nString('variables.invalid.less_than_one');
      case DimensionErrorType.NEGATIVE: return getI18nString('variables.invalid.negative');
      case DimensionErrorType.NEGATIVE_OR_ZERO: return getI18nString('variables.invalid.negative_or_zero');
      default: return null;
    }
  }

  const inputProperty = context?.boundVariableId ? undefined : property;
  const tokenCount = tokens.length;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const containerRef = useRef<any>(null);
  const inputRef = M(props.forwardedRef);
  const [shouldSelect, setShouldSelect] = useState(false);

  // Effect to focus input when not showing binding UI and selectedIndex is null
  useEffect(() => {
    if (!context?.isShowingBindingUI && selectedIndex === null) {
      containerRef.current?.focus?.();
    }
  }, [containerRef, selectedIndex, context]);

  // Effect to reset selectedIndex when showing binding UI
  useEffect(() => {
    if (context?.isShowingBindingUI) {
      setSelectedIndex(null);
    }
  }, [context?.isShowingBindingUI]);

  // Function to move selection left
  const moveSelectionLeft = () => {
    containerRef.current?.focus?.();
    setSelectedIndex(Math.max(0, selectedIndex === null ? tokenCount - 1 : selectedIndex - 1));
  };

  const latestInputProperty = useLatestRef(inputProperty);

  // Effect to select input when property changes and shouldSelect is true
  useEffect(() => {
    if (shouldSelect && latestInputProperty !== inputProperty) {
      inputRef?.current?.select();
      setShouldSelect(false);
    }
  }, [inputRef, inputProperty, latestInputProperty, shouldSelect]);

  // Callback to handle click or focus on container
  const handleContainerFocus = useCallback(() => {
    if (tokens.length > 0) {
      setSelectedIndex(0);
    } else {
      inputRef.current?.focus?.({ preventScroll: true });
    }
  }, [tokens, inputRef]);

  // Function to show binding UI
  const showBindingUI = () => {
    const inputElement = inputRef.current;
    context?.showBindingUI(inputElement, {
      currentFieldValue: isValidValue(property) && isNotNullish(property) ? property : undefined,
    });
  };

  // Function to handle token click
  const handleTokenClick = (event: any, index: number) => {
    setSelectedIndex(index);
    showBindingUI();
    event.preventDefault();
    event.stopPropagation();
  };

  // Function to handle key down on container
  const handleContainerKeyDown = (event: any) => {
    props.onKeyDown?.(event);
    if (tokenCount === 0) return;
    const inputElement = inputRef.current;
    switch (event.keyCode) {
      case KeyCodes.DELETE:
      case KeyCodes.BACKSPACE:
        if (selectedIndex !== null) {
          event.preventDefault();
          inputRef.current?.focus?.();
          setSelectedIndex(null);
          context?.onVariableSelected?.();
        }
        break;
      case KeyCodes.ENTER:
        if (selectedIndex !== null) {
          event.preventDefault();
          context?.showBindingUI(inputElement);
        }
        break;
      case KeyCodes.RIGHT_ARROW:
        if (selectedIndex !== null) {
          event.preventDefault();
          if (selectedIndex + 1 === tokenCount) {
            setSelectedIndex(null);
            inputRef.current?.focus?.();
          } else {
            setSelectedIndex(selectedIndex + 1);
          }
        }
        break;
      case KeyCodes.LEFT_ARROW:
        event.preventDefault();
        moveSelectionLeft();
        break;
    }
  };

  // Function to handle key down on input
  const handleInputKeyDown = (event: any) => {
    props.onKeyDown?.(event);
    if (!event.defaultPrevented && event.key === '=' && tokenCount !== 0) {
      event.preventDefault();
      showBindingUI();
    }
    if (!event.defaultPrevented && tokenCount !== 0) {
      switch (event.keyCode) {
        case KeyCodes.BACKSPACE: {
          const inputElement = inputRef.current;
          if (inputElement && inputElement === document.activeElement &&
              inputElement.selectionStart === 0 && inputElement.selectionEnd === 0) {
            event.preventDefault();
            inputRef.current?.focus?.();
            setSelectedIndex(null);
            context?.onVariableSelected?.();
            setShouldSelect(true);
          }
          break;
        }
        case KeyCodes.LEFT_ARROW:
          event.preventDefault();
          moveSelectionLeft();
          break;
      }
    }
  };

  return jsxs(_$$S.recordableDiv, {
    role: 'textbox',
    forwardedRef: containerRef,
    onClick: handleContainerFocus,
    onFocus: handleContainerFocus,
    onBlur: () => setSelectedIndex(null),
    onKeyDown: handleContainerKeyDown,
    className: classNames(kL, props.outerClassName),
    recordingKey: generateRecordingKey(props.recordingKey, 'tokenizableInput'),
    children: [
      jsx('div', {
        className: classNames(Bv, props.pillsContainerClassName),
        children: tokens.map((token, index) => {
          const colorTheme = index === selectedIndex ? J.SELECTED :
            token.isDeleted ? J.DISABLED_TERTIARY :
            props.disabled ? J.DISABLED : J.DEFAULT;
          return jsx(_$$P, {
            colorTheme,
            disableHover: props.disabled,
            invalid: token.invalidReason != null,
            isDeleted: false,
            isStandalone: true,
            onClick: props.disabled ? undefined : (e) => handleTokenClick(e, index),
            recordingKey: generateRecordingKey(props.recordingKey, 'tokens', index),
            tooltipOverride: token.invalidReason,
            value: token.value,
            variableId: token.variableId,
          }, index);
        }),
      }),
      jsx('div', {
        className: classNames({
          [hF]: true,
          [zN]: tokens.length >= 1,
        }),
        children: jsx(FormattedInput, {
          allowEmpty: props.allowEmpty,
          ariaDescription: getI18nString('fullscreen.properties_panel.apply_variable_hotkey'),
          ariaLabel: props.ariaLabel,
          autoFocus: props.autoFocus,
          className: classNames({
            [cssBuilderInstance.ellipsis.$]: props.ellipsis,
          }, props.className),
          dataTestId: props.dataTestId,
          disabled: props.disabled,
          formatter: props.formatter,
          forwardedRef: inputRef,
          mixedMathHandler: props.mixedMathHandler,
          noBorderOnFocus: props.noBorderOnFocus,
          noLeftBorder: props.noLeftBorder,
          noPlaceholderLine: props.noPlaceholderLine,
          onBlur: (event) => {
            setSelectedIndex(null);
            props.onBlur?.(event);
          },
          onChange: props.onChange,
          onClick: props.onClick,
          onFocus: props.onFocus,
          onKeyDown: handleInputKeyDown,
          onKeyUp: props.onKeyUp,
          onMixedMathNudge: props.onMixedMathNudge,
          onMouseDown: props.onMouseDown,
          placeholder: tokenCount > 0 ? undefined : props.placeholder,
          property: inputProperty,
          recordingKey: props.recordingKey,
          shouldClearOnFocus: props.shouldClearOnFocus,
          squareRightBorder: props.squareRightBorder,
          variablesDisabled: true,
        }),
      }),
    ],
  });
}

// Original export: export const $ = $$v0
export const $ = TokenizableInput;
