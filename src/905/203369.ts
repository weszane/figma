import classNames from 'classnames';
import { createRef, PureComponent } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { isModifierMatch, KeyCodes, ModifierKeyCodes } from '../905/63728';
import { isInvalidValue, isValidValue, normalizeValue, valueOrFallback } from '../905/216495';
import { getI18nString } from '../905/303541';
import { FormattedInputContext } from '../905/427409';
import { getIncrementTargets, getNudgeAmount, incrementValue } from '../905/668764';
import { By } from '../905/777187';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { J, P } from '../figma_app/120873';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { cZ } from '../figma_app/272902';
import { jT } from '../figma_app/626177';
import { BrowserInfo } from '../figma_app/778880';
import { SKIP_RECORDING } from '../figma_app/878298';
import { jr, W0 } from '../figma_app/896988';
import { LS } from '../figma_app/975811';

// Define interfaces for props and state to improve type safety
interface FormattedInputProps {
  // Add specific prop types based on usage, e.g.:
  property: any;
  formatter: any;
  shouldClearOnFocus?: boolean;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onChange: (value: any) => void;
  allowEmpty?: boolean;
  mixedMathHandler?: any;
  mixedMathCallback?: (value: string) => void;
  onKeyDown?: (e: any) => void;
  onKeyUp?: (e: any) => void;
  onNudge?: (e: any) => void;
  onMixedMathNudge?: (e: any) => void;
  variablesDisabled?: boolean;
  onClick?: (e: any) => void;
  autoFocus?: boolean;
  source?: any;
  onMouseDown?: (e: any) => void;
  onPaste?: (e: any) => void;
  placeholder?: string;
  recordingKey?: any;
  size?: any;
  softDisabled?: boolean;
  squareRightBorder?: boolean;
  style?: any;
  tabIndex?: number;
  ariaDescription?: string;
  ariaLabel?: string;
  className?: string;
  dataOnboardingKey?: string;
  dataTestId?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  noBorderOnFocus?: boolean;
  noLeftBorder?: boolean;
  noPlaceholderLine?: boolean;
  ellipsis?: boolean;
  forwardedRef?: any;
}
interface FormattedInputState {
  editingValue: string | null;
  incrementTargets: any;
}

/**
 * FormattedInput component for handling formatted input values with features like incrementing, variables, etc.
 * Original class: $$I3
 */
export class FormattedInput extends PureComponent<FormattedInputProps, FormattedInputState> {
  static displayName = 'FormattedInput';
  static contextType = FormattedInputContext;
  private previousContext: any = null;
  private inputRef = createRef<any>();
  private didIncrement = false;
  private needToSelectAll = false;
  constructor(props: FormattedInputProps) {
    super(props);
    this.state = {
      editingValue: null,
      incrementTargets: null
    };
  }

  /**
   * Checks if two values look equal based on the formatter.
   * Original: this.looksEqual
   */
  private looksEqual = (value1: any, value2: any): boolean => {
    const isInvalid1 = !isValidValue(value1);
    const isInvalid2 = !isValidValue(value2);
    if (isInvalid1 !== isInvalid2) return false;
    if (isInvalid1) return true;
    return this.props.formatter.isEqual ? this.props.formatter.isEqual(value1, value2) : this.props.formatter.format(value1) === this.props.formatter.format(value2);
  };

  /**
   * Selects all text in the input or applies default selection.
   * Original: this.selectAll
   */
  private selectAll = (): void => {
    const input = this.inputRef.current;
    if (isValidValue(this.props.property) && this.props.formatter.defaultSelection) {
      const selection = this.props.formatter.defaultSelection(input.value);
      input.setSelectionRange(selection.start, selection.end);
    } else {
      input.select();
    }
    this.needToSelectAll = false;
  };

  /**
   * Handles focus event.
   * Original: this.onFocus
   */
  private onFocus = (e: any): void => {
    this.needToSelectAll = true;
    if (this.props.shouldClearOnFocus) {
      this.setState({
        editingValue: ''
      });
    }
    this.props.onFocus?.(e);
  };

  /**
   * Handles blur event, parsing and validating input.
   * Original: this.onBlur
   */
  private onBlur = (e: any): void => {
    this.props.onBlur?.(e);
    const property = this.props.property;
    const inputValue = this.inputRef.current?.value;
    if (inputValue == null || this.state.editingValue == null) return;
    this.setState({
      editingValue: null
    });
    const parseValue = (fallback: any) => {
      const parsed = this.props.formatter.parse(inputValue, valueOrFallback(fallback, undefined));
      return this.props.formatter.clamp?.(parsed) ?? parsed;
    };
    try {
      const newValue = parseValue(property);
      if (property !== null && !this.looksEqual(newValue, property)) {
        this.props.onChange(newValue);
      }
    } catch (error) {
      if (error instanceof LS) {
        if (error.errorType === By.SYNTAX_EMPTY && this.props.allowEmpty) {
          this.props.onChange(null);
        } else if (error.errorType === By.EVAL_NO_CURRENT_VALUE && isInvalidValue(property)) {
          if (this.props.mixedMathHandler) {
            const value = this.props.mixedMathHandler.getValue();
            this.props.mixedMathHandler.onChange(value, parseValue, yesNoTrackingEnum.YES);
          } else {
            this.props.mixedMathCallback?.(inputValue);
          }
        }
      }
      const fallbackValue = this.props.formatter.onParseThrow?.(error, inputValue);
      if (fallbackValue != null) {
        this.props.onChange(fallbackValue);
      }
    }
  };

  /**
   * Handles input change.
   * Original: this.onChange
   */
  private onChange = (e: any): void => {
    this.setState({
      editingValue: e.target.value.toString()
    });
  };

  /**
   * Handles key down events, including navigation and special keys.
   * Original: this.onKeyDown
   */
  private onKeyDown = (e: any): any => {
    if (jr(e, this.shouldForwardUndo()) || (this.props.onKeyDown?.(e), e.defaultPrevented)) return;
    this.didIncrement = false;
    const input = this.inputRef.current;
    if (e.keyCode === KeyCodes.ESCAPE) {
      this.setState({
        editingValue: null
      });
      setTimeout(() => input.blur(), 0);
      e.preventDefault();
    } else if (e.keyCode === KeyCodes.ENTER) {
      input.blur();
      e.preventDefault();
      return SKIP_RECORDING;
    } else if (e.keyCode === KeyCodes.UP_ARROW || e.keyCode === KeyCodes.DOWN_ARROW) {
      if (this.context?.boundVariableId || !this.props.formatter.incrementBy) return;
      e.preventDefault();
      let value = this.props.property;
      try {
        value = this.props.formatter.parse(input.value || (this.props.placeholder ?? ''), normalizeValue(this.props.property) ?? undefined);
      } catch {}
      if (value == null && !this.props.allowEmpty) return;
      if (isValidValue(value)) {
        const targets = getIncrementTargets(this.props.formatter, input);
        const shift = e.shiftKey;
        const direction = e.keyCode === KeyCodes.DOWN_ARROW ? -1 : 1;
        const nudge = getNudgeAmount(this.props.formatter, shift, value);
        const newValue = incrementValue(this.props.formatter, value, nudge * direction, {
          incrementTargets: targets
        });
        this.setState({
          editingValue: null,
          incrementTargets: targets
        });
        if (!this.looksEqual(value, newValue)) {
          this.props.onChange(newValue);
          this.didIncrement = true;
        }
      } else if (this.props.mixedMathHandler) {
        if (this.inputRef.current?.value == null) return;
        const currentValue = this.props.mixedMathHandler.getValue();
        this.props.mixedMathHandler.onChange(currentValue, (val: any) => {
          const dir = e.keyCode === KeyCodes.DOWN_ARROW ? -1 : 1;
          const nudge = getNudgeAmount(this.props.formatter, e.shiftKey, val);
          return incrementValue(this.props.formatter, val, nudge * dir);
        }, yesNoTrackingEnum.YES);
        this.props.onMixedMathNudge?.(e);
      }
      this.props.onNudge?.(e);
    } else if (this.shouldHandleVariables() && e.key === '=') {
      e.preventDefault();
      const element = this.inputRef.current?.closest('label') ?? this.inputRef.current ?? null;
      if (!element) return;
      this.context?.showBindingUI(element, {
        currentFieldValue: this.props.property
      });
    } else if (e.keyCode !== KeyCodes.TAB) {
      return SKIP_RECORDING;
    }
  };

  /**
   * Handles key up events, including autocomplete.
   * Original: this.onKeyUp
   */
  private onKeyUp = (e: any): any => {
    if (jr(e, this.shouldForwardUndo())) return SKIP_RECORDING;
    this.props.onKeyUp?.(e);
    const input = this.inputRef.current;
    if (!this.props.formatter.autocomplete) return SKIP_RECORDING;
    const value = input.value;
    const atEnd = value.length > 0 && input.selectionStart === value.length && input.selectionEnd === value.length;
    const isSingleChar = e.key && e.key.length === 1;
    const isLetterOrSpace = e.keyCode === 32 || e.keyCode >= 65 && e.keyCode <= 90;
    if (atEnd && (isSingleChar || isLetterOrSpace) && isModifierMatch(e, ModifierKeyCodes.SHIFT)) {
      const completion = this.props.formatter.autocomplete(value);
      if (completion !== null) {
        input.value = completion;
        input.setSelectionRange(value.length, completion.length);
      }
    }
  };

  /**
   * Handles mouse up, potentially selecting all.
   * Original: this.onMouseUp
   */
  private onMouseUp = (e: any): any => {
    const input = this.inputRef.current;
    if (!this.state.editingValue && isInvalidValue(this.props.property)) input.select?.();
    if (!this.needToSelectAll) return SKIP_RECORDING;
    if (input.selectionStart === input.selectionEnd) this.selectAll();
    this.needToSelectAll = false;
  };

  /**
   * Handles mouse leave, resetting select all flag.
   * Original: this.onMouseLeave
   */
  private onMouseLeave = (e: any): void => {
    if (this.needToSelectAll) this.needToSelectAll = false;
  };

  /**
   * Checks if variables should be handled.
   * Original: this.shouldHandleVariables
   */
  private shouldHandleVariables = (): boolean => !!(this.props.variablesDisabled === false && this.context);

  /**
   * Handles click, potentially showing binding UI.
   * Original: this.onClick
   */
  private onClick = (e: any): void => {
    this.props.onClick?.(e);
    if (this.shouldHandleVariables() && this.context?.boundVariableId) {
      const input = this.inputRef.current;
      input.blur();
      this.context?.showBindingUI(input.closest('label'), {
        currentFieldValue: this.props.property
      });
    }
  };
  componentDidMount(): void {
    const input = this.inputRef.current;
    if (this.props.autoFocus) {
      input.select();
      if (BrowserInfo.safari) input.focus();
    }
  }
  getSnapshotBeforeUpdate(prevProps: FormattedInputProps, prevState: FormattedInputState): any {
    if (prevProps.property === this.props.property) return false;
    const input = this.inputRef.current;
    if (input == null || input !== document.activeElement) return false;
    const {
      selectionStart,
      selectionEnd,
      value
    } = input;
    return typeof selectionEnd === 'number' && typeof selectionStart === 'number' && selectionEnd > 0 && selectionEnd - selectionStart === value.length;
  }
  componentDidUpdate(prevProps: FormattedInputProps, prevState: FormattedInputState, snapshot: any): void {
    if (prevProps.source !== this.props.source) {
      this.setState({
        editingValue: null
      });
    }
    const input = this.inputRef.current;
    if (this.didIncrement && prevProps.property !== this.props.property) {
      this.didIncrement = false;
      if (this.state.incrementTargets && this.props.formatter.getSelection) {
        const {
          start,
          end
        } = this.props.formatter.getSelection(input.value, this.state.incrementTargets);
        input.setSelectionRange(start, end);
      } else {
        this.selectAll();
      }
    } else if (snapshot && input === document.activeElement) {
      input.select();
    }
    const context = this.context;
    const prevContext = this.previousContext;
    if (prevContext?.boundVariableId !== context?.boundVariableId && context?.boundVariableId && this.inputRef?.current) {
      this.setState({
        editingValue: null
      });
    }
    this.previousContext = context;
  }

  /**
   * Determines if undo should be forwarded.
   * Original: this.shouldForwardUndo
   */
  private shouldForwardUndo() {
    if (this.state.editingValue === null) return W0.YES;
    if (isValidValue(this.props.property)) {
      const formatted = this.props.property == null ? '' : this.props.formatter.format(this.props.property);
      return this.state.editingValue === formatted ? W0.YES : W0.NO;
    }
    return W0.YES;
  }

  /**
   * Gets the value to render in the input.
   * Original: this.valueForRender
   */
  private valueForRender(): string {
    if (this.state.editingValue !== null) return this.state.editingValue;
    if (isValidValue(this.props.property)) {
      return this.props.property == null ? '' : this.props.formatter.format(this.props.property);
    }
    return getI18nString('fullscreen.mixed');
  }

  /**
   * Renders the variable pill if applicable.
   * Original: this.renderVariablePill
   */
  private renderVariablePill(): any {
    if (!this.shouldHandleVariables()) return null;
    const value = this.valueForRender();
    return this.context?.boundVariableId && value ? jsx(P, {
      value,
      variableId: this.context.boundVariableId ?? undefined,
      colorTheme: this.context.isBoundVariableDeleted ? J.DISABLED_TERTIARY : J.DEFAULT,
      isDeleted: false,
      offsetLeft: this.props.noLeftBorder || this.props.squareRightBorder ? 1 : -7,
      offsetTop: -11,
      zeroSizeLayout: true
    }) : null;
  }

  /**
   * Focuses the input.
   * Original: this.focus
   */
  focus(options?: any): void {
    this.inputRef.current?.focus(options);
  }
  render(): any {
    return jsxs(Fragment, {
      children: [this.renderVariablePill(), jsx(jT, {
        'ref': (el: any) => {
          this.inputRef.current = el;
          cZ(this.props.forwardedRef, el);
        },
        'aria-description': this.props.ariaDescription,
        'aria-label': this.props.ariaLabel,
        'autoFocus': !BrowserInfo.safari && this.props.autoFocus,
        'className': classNames({
          [cssBuilderInstance.ellipsis.$]: this.props.ellipsis
        }, this.props.className),
        'dataOnboardingKey': this.props.dataOnboardingKey,
        'dataTestId': this.props.dataTestId,
        'disabled': this.props.disabled,
        'id': this.props.id,
        'name': this.props.name,
        'noBorderOnFocus': this.props.noBorderOnFocus,
        'noLeftBorder': this.props.noLeftBorder,
        'noPlaceholderLine': this.props.noPlaceholderLine,
        'onBlur': this.onBlur,
        'onChange': this.onChange,
        'onClick': this.onClick,
        'onFocus': this.onFocus,
        'onKeyDown': this.onKeyDown,
        'onKeyUp': this.onKeyUp,
        'onMouseDown': this.props.onMouseDown,
        'onMouseLeave': this.onMouseLeave,
        'onMouseUp': this.onMouseUp,
        'onPaste': this.props.onPaste,
        'placeholder': this.props.placeholder,
        'recordingKey': this.props.recordingKey,
        'size': this.props.size,
        'softDisabled': this.props.softDisabled,
        'squareRightBorder': this.props.squareRightBorder,
        'style': this.props.style,
        'tabIndex': this.props.tabIndex,
        'value': this.valueForRender()
      })]
    });
  }
}

/**
 * Subclass of FormattedInput.
 * Original: $$E1
 */
export class FormattedInputVariant1 extends FormattedInput {}

/**
 * Subclass of FormattedInput.
 * Original: $$x2
 */
export class FormattedInputVariant2 extends FormattedInput {}

/**
 * Subclass of FormattedInput.
 * Original: $$S0
 */
export class FormattedInputVariant3 extends FormattedInput {}

// Refactored exports with new names
export const AN = FormattedInputVariant3;
export const Q7 = FormattedInputVariant1;
export const nA = FormattedInputVariant2;
export const p_ = FormattedInput;
