import classNames from 'classnames';
import { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { TokenizableInput } from '../905/45781';
import { KindEnum } from '../905/129884';
import { ScrubbableContext, ScrubbableControl } from '../905/181535';
import { a3 } from '../905/188421';
import { FormattedInput } from '../905/203369';
import { isInvalidValue, MIXED_MARKER } from '../905/216495';
import { getI18nString, renderI18nText } from '../905/303541';
import { P } from '../905/460261';
import { conditionalWrapper } from '../905/579635';
import { DEFAULT_COARSE_NUDGE, DEFAULT_FINE_NUDGE } from '../905/668764';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { stopPropagation } from '../figma_app/753501';
import { IB, QK, sC, V, WC, Ww } from '../figma_app/779179';
import { Qu } from '../figma_app/941824';
import { ag, cu, f0, h7, i5, Lk, LN, NB, PZ, X9 } from '../figma_app/975811';

// Define common types for props
interface BaseScrubbableProps {
  noBorderOnHover: any;
  scrubMultiplier: any;
  tooltipForScreenReadersOnly: any;
  shouldClearOnFocus: any;
  value?: any;
  onValueChange?: (value: any, tracking?: any) => void;
  disabled?: boolean;
  scrubbingDisabled?: boolean;
  min?: number;
  max?: number;
  smallNudgeAmount?: number;
  bigNudgeAmount?: number;
  formatter?: any;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  dataTestId?: string;
  recordingKey?: string;
  forwardedRef?: any;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: (e: any) => void;
  onKeyUp?: (e: any) => void;
  onClick?: () => void;
  onMouseDown?: () => void;
  mixedMathHandler?: any;
  mixedMathCallback?: any;
  onMixedMathNudge?: any;
  allowEmpty?: boolean;
  autoFocus?: boolean;
  noLeftBorder?: boolean;
  squareRightBorder?: boolean;
  softDisabled?: boolean;
  isTokenizable?: boolean;
  children?: any;
  childrenAtEnd?: boolean;
  endNode?: any;
  minimizeScrubTargetWidth?: boolean;
  dispatch: (action: any) => void;
}
interface DropdownProps extends BaseScrubbableProps {
  ariaLabel?: string;
  chevronClassName?: string;
  dispatch: (action: any) => void;
  dropdownAlignment?: any;
  dropdownClassName?: string;
  dropdownShown?: boolean;
  dropdownWidth?: any;
  enablePreview?: boolean;
  hasIconStyle?: boolean;
  icon?: any;
  id?: string;
  noPlaceholderLine?: boolean;
  omitValueFromDropdown?: boolean;
  onInputBlur?: () => void;
  onInputFocus?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseEnterNonPropagating?: () => void;
  onboardingKey?: string;
  openBelowTarget?: boolean;
  optionsWithDisabledPreviews?: any;
  scrubbableControlProps?: any;
  targetDomNode?: any;
  unNamespacedInputRecordingKey?: string;
  willShowDropdown?: boolean;
  disableSelectFocus?: boolean;
  noBorderOnFocus?: boolean;
}
interface PercentageProps extends BaseScrubbableProps {
  'decimals'?: number;
  'hidePercentSign'?: boolean;
  'ui3RightJustifyPercentSign'?: boolean;
  'reverseScrub'?: boolean;
  'resolution'?: number;
  'displayFractions'?: boolean;
  'onEvaluateExpressionError'?: any;
  'floatingPointFormat'?: any;
  'shouldClearOnFocus'?: boolean;
  'onNudge'?: any;
  'onPaste'?: any;
  'source'?: string;
  'onScrubBegin'?: (e: any) => void;
  'onScrubEnd'?: (e: any) => void;
  'tooltipForScreenReadersOnly'?: boolean;
  'noBorderOnHover'?: boolean;
  'data-tooltip'?: string;
  'data-tooltip-type'?: any;
  'dispatch': (action: any) => void;
}

// Common scrub config
const defaultScrubConfig = {
  scrubMultiplier: 1,
  wheelMultiplier: 1,
  smallNudgeAmount: DEFAULT_FINE_NUDGE,
  bigNudgeAmount: DEFAULT_COARSE_NUDGE
};

// Percentage scrub config
const percentageScrubConfig = {
  ...defaultScrubConfig,
  scrubMultiplier: 4,
  wheelMultiplier: 2
};

/**
 * Original: S
 * Component for handling scrubbing behavior on children.
 */
export function ScrubWrapper({
  children,
  onNormalClick
}: {
  children: any;
  onNormalClick?: () => void;
}) {
  const {
    setScrubbableElement
  } = useContext(ScrubbableContext);
  const elementRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | NodeJS.Timeout | null>(null);
  const isScrubbingRef = useRef(false);
  const deltaRef = useRef({
    x: 0,
    y: 0
  });
  const startPosRef = useRef({
    x: 0,
    y: 0
  });
  useEffect(() => {
    setScrubbableElement(elementRef.current);
    return () => setScrubbableElement(null);
  }, [setScrubbableElement]);
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isScrubbingRef.current = false;
    deltaRef.current = {
      x: 0,
      y: 0
    };
    startPosRef.current = {
      x: e.clientX,
      y: e.clientY
    };
    const timeout = setTimeout(() => {
      timeoutRef.current = null;
    }, 500);
    timeoutRef.current = timeout;
  }, []);
  const handlePointerUp = useCallback(() => {
    if (timeoutRef.current !== null && !isScrubbingRef.current) {
      clearTimeout(timeoutRef.current);
      onNormalClick?.();
    }
    timeoutRef.current = null;
    deltaRef.current = null;
    startPosRef.current = null;
  }, [onNormalClick]);
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!deltaRef.current) return;
    let dx = e.movementX;
    let dy = e.movementY;
    if (dx == null && dy == null && startPosRef.current) {
      dx = e.clientX - startPosRef.current.x;
      dy = e.clientY - startPosRef.current.y;
      startPosRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    }
    deltaRef.current.x += dx;
    deltaRef.current.y += dy;
    const {
      x,
      y
    } = deltaRef.current;
    if (Math.sqrt(x * x + y * y) > 5) {
      isScrubbingRef.current = true;
    }
  }, []);
  useEffect(() => () => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
  }, []);
  return jsx('div', {
    ref: elementRef,
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerMove: handlePointerMove,
    children
  });
}

/**
 * Original: $$v15
 * Basic scrubbable input component.
 */
export function ScrubbableInput(props: BaseScrubbableProps) {
  const {
    onValueChange,
    forwardedRef,
    onKeyDown
  } = props;
  const inputRef = useRef<any>(null);
  const ref = forwardedRef ?? inputRef;
  const handleKeyDown = Qu();
  const wrappedKeyDown = useCallback((e: any) => {
    handleKeyDown(e);
    onKeyDown?.(e);
  }, [handleKeyDown, onKeyDown]);
  const handleChange = useCallback((e: any) => onValueChange?.(e, yesNoTrackingEnum.YES), [onValueChange]);
  const focusAndSelect = useCallback(() => {
    ref.current?.focus();
    ref.current?.select();
  }, [ref]);
  const InputComponent = props.isTokenizable ? TokenizableInput : FormattedInput;
  const wrapper = useCallback((children: any) => jsx(ScrubWrapper, {
    onNormalClick: focusAndSelect,
    children
  }), [focusAndSelect]);
  const hasScrubTarget = !props.minimizeScrubTargetWidth;
  return jsxs(ScrubbableControl, {
    ...defaultScrubConfig,
    ...props,
    scrubbingDisabled: props.scrubbingDisabled || props.disabled || props.value == null || props.value === MIXED_MARKER && !props.mixedMathHandler,
    children: [props.childrenAtEnd ? null : jsx(conditionalWrapper, {
      condition: !!props.children || !!hasScrubTarget,
      wrapper,
      children: jsx(Fragment, {
        children: props.children ? props.children : hasScrubTarget ? jsx('div', {
          className: V
        }) : null
      })
    }), jsx(InputComponent, {
      allowEmpty: props.allowEmpty,
      autoFocus: props.autoFocus,
      className: classNames(props.inputClassName, {
        [sC]: true,
        [WC]: !props.childrenAtEnd && !props.children && hasScrubTarget
      }),
      dataTestId: props.dataTestId,
      disabled: props.disabled ?? props.value === null,
      ellipsis: true,
      formatter: props.formatter,
      forwardedRef: ref,
      mixedMathCallback: props.mixedMathCallback,
      mixedMathHandler: props.mixedMathHandler,
      noBorderOnFocus: true,
      noLeftBorder: props.noLeftBorder,
      onBlur: props.onBlur,
      onChange: handleChange,
      onClick: props.onClick,
      onFocus: props.onFocus,
      onKeyDown: wrappedKeyDown,
      onKeyUp: props.onKeyUp,
      onMixedMathNudge: props.onMixedMathNudge,
      onMouseDown: stopPropagation,
      placeholder: props.placeholder,
      property: props.value ?? null,
      recordingKey: props.recordingKey,
      softDisabled: props.softDisabled,
      squareRightBorder: props.squareRightBorder
    }), props.childrenAtEnd ? jsx(conditionalWrapper, {
      condition: !!props.children,
      wrapper,
      children: jsx(Fragment, {
        children: props.children
      })
    }) : null, props.endNode]
  });
}

/**
 * Original: $$A12
 * Scrubbable dropdown input component.
 */
export function ScrubbableDropdownInput({
  onMouseEnter,
  onMouseLeave,
  onMouseEnterNonPropagating,
  ...props
}: DropdownProps) {
  const config = {
    ...defaultScrubConfig,
    ...props,
    noBorderOnFocus: props.noBorderOnFocus || props.disableSelectFocus
  };
  return jsx('div', {
    className: props.className,
    children: jsx(a3, {
      allowEmpty: props.allowEmpty,
      ariaLabel: props.ariaLabel,
      autoFocus: props.autoFocus,
      chevronClassName: props.chevronClassName,
      dataTestId: props.dataTestId,
      disableSelectFocus: props.disableSelectFocus,
      disabled: props.disabled,
      dispatch: props.dispatch,
      dropdownAlignment: props.dropdownAlignment,
      dropdownClassName: props.dropdownClassName,
      dropdownShown: props.dropdownShown,
      dropdownWidth: props.dropdownWidth,
      enablePreview: props.enablePreview,
      formatter: props.formatter,
      forwardedRef: props.forwardedRef,
      hasIconStyle: props.hasIconStyle,
      icon: props.icon,
      id: props.id,
      inputClassName: props.inputClassName,
      isTokenizable: props.isTokenizable,
      mixedMathHandler: props.mixedMathHandler,
      noPlaceholderLine: props.noPlaceholderLine,
      omitValueFromDropdown: props.omitValueFromDropdown,
      onChange: (e: any, t = yesNoTrackingEnum.YES) => props.onValueChange?.(e, t),
      onInputBlur: props.onBlur,
      onInputFocus: props.onFocus,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp,
      onMouseEnter,
      onMouseEnterNonPropagating,
      onMouseLeave,
      onboardingKey: props.onboardingKey,
      openBelowTarget: props.openBelowTarget,
      optionsWithDisabledPreviews: props.optionsWithDisabledPreviews,
      placeholder: props.placeholder,
      property: props.value,
      recordingKey: props.recordingKey,
      scrubbableControlProps: config,
      targetDomNode: props.targetDomNode,
      unNamespacedInputRecordingKey: props.unNamespacedInputRecordingKey,
      willShowDropdown: props.willShowDropdown,
      children: props.children
    })
  });
}

/**
 * Original: $$x17
 * Numeric dropdown input component.
 */
export function NumericDropdownInput(props: BaseScrubbableProps) {
  const {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    formatter
  } = props;
  const fmt = useMemo(() => new Lk({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  }), [min, max, smallNudgeAmount, bigNudgeAmount]);
  return jsx(ScrubbableDropdownInput, {
    ...props,
    formatter: formatter ?? fmt
  });
}

/**
 * Original: $$N2
 * Numeric input component.
 */
export function NumericInput(props: BaseScrubbableProps) {
  const {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  } = props;
  const fmt = useMemo(() => new X9({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  }), [min, max, smallNudgeAmount, bigNudgeAmount]);
  return jsx(ScrubbableInput, {
    ...props,
    formatter: fmt
  });
}

/**
 * Original: $$C9
 * Numeric dropdown input with icon.
 */
export function NumericDropdownWithIcon(props: BaseScrubbableProps & {
  icon?: any;
}) {
  const {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    formatter,
    icon
  } = props;
  const fmt = useMemo(() => new X9({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  }), [min, max, smallNudgeAmount, bigNudgeAmount]);
  return jsx(ScrubbableDropdownInput, {
    ...props,
    formatter: formatter ?? fmt,
    className: classNames(props.className, {
      [IB]: !!icon
    })
  });
}

/**
 * Original: $$w19
 * Scale input component.
 */
export function ScaleInput(props: BaseScrubbableProps & {
  icon?: any;
}) {
  const {
    formatter,
    icon
  } = props;
  return jsx(ScrubbableDropdownInput, {
    ...props,
    formatter,
    className: classNames(props.className, {
      [IB]: !!icon
    }),
    postScrubMultiplier: 0.001,
    postBigNudgeAmount: 0.1
  });
}

/**
 * Original: $$O7
 * Time input component.
 */
export function TimeInput(props: BaseScrubbableProps & {
  icon?: any;
}) {
  const {
    min,
    max,
    icon
  } = props;
  const fmt = useMemo(() => new ag(i5.MILLISECONDS, max, min), [max, min]);
  return jsx(ScrubbableDropdownInput, {
    ...props,
    formatter: fmt,
    className: classNames(props.className, {
      [IB]: !!icon
    })
  });
}

/**
 * Original: $$R13
 * Expression input component.
 */
export function ExpressionInput(props: BaseScrubbableProps & {
  onEvaluateExpressionError?: any;
}) {
  const {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    onEvaluateExpressionError
  } = props;
  const fmt = useMemo(() => new Lk({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    onEvaluateExpressionError
  }), [min, max, smallNudgeAmount, bigNudgeAmount, onEvaluateExpressionError]);
  return jsx(ScrubbableInput, {
    ...props,
    formatter: fmt
  });
}

/**
 * Original: $$L1
 * Length input component.
 */
export function LengthInput(props: BaseScrubbableProps & {
  floatingPointFormat?: any;
  onEvaluateExpressionError?: any;
}) {
  const {
    min = 0,
    max,
    floatingPointFormat,
    onEvaluateExpressionError,
    smallNudgeAmount,
    bigNudgeAmount,
    ...rest
  } = props;
  const fmt = useMemo(() => new Lk({
    min: Math.max(min, 0),
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    floatingPointFormat,
    onEvaluateExpressionError
  }), [min, max, smallNudgeAmount, bigNudgeAmount, floatingPointFormat, onEvaluateExpressionError]);
  return jsx(ScrubbableInput, {
    ...rest,
    formatter: fmt
  });
}

/**
 * Original: $$P14
 * Percentage input component (min=0).
 */
export function PercentageInput(props: PercentageProps) {
  const {
    min = 0,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  } = props;
  const isScrubbingRef = useRef(false);
  const fmt = useMemo(() => new NB({
    min: Math.max(min, 0),
    max,
    smallNudgeAmount,
    bigNudgeAmount
  }), [min, max, smallNudgeAmount, bigNudgeAmount]);
  const isInvalid = isInvalidValue(props.value) && props.mixedMathHandler;
  const scrubbingDisabled = props.disabled || props.scrubbingDisabled || typeof props.value !== 'number' && !Array.isArray(props.value) && !isInvalid;
  const InputComponent = props.isTokenizable ? TokenizableInput : FormattedInput;
  return jsxs(ScrubbableControl, {
    ...defaultScrubConfig,
    ...props,
    formatter: fmt,
    scrubbingDisabled,
    onScrubBegin: (e: any) => {
      isScrubbingRef.current = true;
      props.onScrubBegin?.(e);
    },
    onScrubEnd: (e: any) => {
      isScrubbingRef.current = false;
      props.onScrubEnd?.(e);
    },
    className: props.className,
    children: [props.children, jsx(InputComponent, {
      className: props.inputClassName,
      dataTestId: props.dataTestId,
      disabled: props.disabled,
      formatter: fmt,
      forwardedRef: props.forwardedRef,
      mixedMathHandler: props.mixedMathHandler,
      noBorderOnFocus: true,
      onBlur: props.onBlur,
      onChange: (e: any) => props.onValueChange?.(e, yesNoTrackingEnum.YES),
      onClick: props.onClick,
      onFocus: props.onFocus,
      onKeyDown: props.onKeyDown,
      onMixedMathNudge: props.onMixedMathNudge,
      onNudge: props.onNudge,
      onPaste: props.onPaste,
      placeholder: props.placeholder,
      property: props.value ?? null,
      recordingKey: props.recordingKey,
      shouldClearOnFocus: props.shouldClearOnFocus,
      source: isScrubbingRef.current ? 'scrub' : 'document'
    })]
  });
}

/**
 * Original: $$D0
 * Percentage input component (with min/max).
 */
export function PercentageInputWithMinMax(props: PercentageProps) {
  const {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  } = props;
  const isScrubbingRef = useRef(false);
  const fmt = useMemo(() => new NB({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  }), [min, max, smallNudgeAmount, bigNudgeAmount]);
  const isInvalid = isInvalidValue(props.value) && props.mixedMathHandler;
  const scrubbingDisabled = props.disabled || props.scrubbingDisabled || typeof props.value !== 'number' && !Array.isArray(props.value) && !isInvalid;
  const InputComponent = props.isTokenizable ? TokenizableInput : FormattedInput;
  return jsxs(ScrubbableControl, {
    ...defaultScrubConfig,
    ...props,
    formatter: fmt,
    scrubbingDisabled,
    onScrubBegin: (e: any) => {
      isScrubbingRef.current = true;
      props.onScrubBegin?.(e);
    },
    onScrubEnd: (e: any) => {
      isScrubbingRef.current = false;
      props.onScrubEnd?.(e);
    },
    className: props.className,
    children: [props.children, jsx(InputComponent, {
      className: props.inputClassName,
      dataTestId: props.dataTestId,
      disabled: props.disabled,
      formatter: fmt,
      forwardedRef: props.forwardedRef,
      mixedMathHandler: props.mixedMathHandler,
      noBorderOnFocus: true,
      onBlur: props.onBlur,
      onChange: (e: any) => props.onValueChange?.(e, yesNoTrackingEnum.YES),
      onClick: props.onClick,
      onFocus: props.onFocus,
      onKeyDown: props.onKeyDown,
      onMixedMathNudge: props.onMixedMathNudge,
      onNudge: props.onNudge,
      onPaste: props.onPaste,
      placeholder: props.placeholder,
      property: props.value ?? null,
      recordingKey: props.recordingKey,
      shouldClearOnFocus: props.shouldClearOnFocus,
      source: isScrubbingRef.current ? 'scrub' : 'document'
    })]
  });
}

/**
 * Original: $$k6
 * Color input component.
 */
export function ColorInput(props: PercentageProps & {
  allowEmpty?: boolean;
}) {
  const {
    min,
    max,
    allowEmpty,
    smallNudgeAmount,
    bigNudgeAmount
  } = props;
  const isScrubbingRef = useRef(false);
  const fmt = useMemo(() => new PZ({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    allowEmpty
  }), [min, max, smallNudgeAmount, bigNudgeAmount, allowEmpty]);
  const isInvalid = isInvalidValue(props.value) && props.mixedMathHandler;
  const scrubbingDisabled = props.disabled || props.scrubbingDisabled || typeof props.value !== 'number' && !isInvalid;
  const InputComponent = props.isTokenizable ? TokenizableInput : FormattedInput;
  return jsxs(ScrubbableControl, {
    ...defaultScrubConfig,
    ...props,
    formatter: fmt,
    scrubbingDisabled,
    onScrubBegin: (e: any) => {
      isScrubbingRef.current = true;
      props.onScrubBegin?.(e);
    },
    onScrubEnd: (e: any) => {
      isScrubbingRef.current = false;
      props.onScrubEnd?.(e);
    },
    className: props.className,
    children: [props.children, jsx(InputComponent, {
      allowEmpty,
      className: props.inputClassName,
      dataTestId: props.dataTestId,
      disabled: props.disabled,
      formatter: fmt,
      forwardedRef: props.forwardedRef,
      mixedMathHandler: props.mixedMathHandler,
      noBorderOnFocus: true,
      onBlur: props.onBlur,
      onChange: (e: any) => props.onValueChange?.(e, yesNoTrackingEnum.YES),
      onFocus: props.onFocus,
      onKeyDown: props.onKeyDown,
      onMixedMathNudge: props.onMixedMathNudge,
      onNudge: props.onNudge,
      onPaste: props.onPaste,
      placeholder: props.placeholder,
      property: props.value ?? null,
      recordingKey: props.recordingKey,
      shouldClearOnFocus: props.shouldClearOnFocus,
      source: isScrubbingRef.current ? 'scrub' : 'document'
    })]
  });
}

/**
 * Original: $$M8
 * Time milliseconds input component.
 */
export function TimeMillisecondsInput(props: BaseScrubbableProps & {
  resolution?: number;
}) {
  const {
    min = 0.001,
    max = 10,
    resolution = 0.001
  } = props;
  const fmt = useMemo(() => new ag(i5.MILLISECONDS, max, min), [max, min]);
  return jsx(ScrubbableInput, {
    ...props,
    resolution,
    formatter: fmt
  });
}

/**
 * Original: $$F11
 * Time seconds input component.
 */
export function TimeSecondsInput(props: BaseScrubbableProps & {
  resolution?: number;
}) {
  const {
    min = 0.001,
    max = 10,
    resolution = 0.001
  } = props;
  const fmt = useMemo(() => new ag(i5.SECONDS, max, min), [max, min]);
  return jsx(ScrubbableInput, {
    ...props,
    resolution,
    formatter: fmt
  });
}

/**
 * Original: $$j16
 * Time duration input component.
 */
export function TimeDurationInput(props: BaseScrubbableProps & {
  displayFractions?: boolean;
}) {
  const {
    max = 3600,
    displayFractions = false
  } = props;
  const fmt = useMemo(() => new f0(max, displayFractions), [max, displayFractions]);
  return jsx(ScrubbableInput, {
    ...props,
    formatter: fmt
  });
}

/**
 * Original: $$B18
 * Base percentage input component.
 */
export function PercentageBaseInput(props: PercentageProps) {
  const {
    min = 0,
    max = 1,
    decimals,
    hidePercentSign,
    smallNudgeAmount,
    bigNudgeAmount
  } = props;
  const fmt = useMemo(() => new LN({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    decimals,
    hidePercentSign
  }), [min, max, smallNudgeAmount, bigNudgeAmount, decimals, hidePercentSign]);
  return jsx(ScrubbableInput, {
    ...percentageScrubConfig,
    ...props,
    formatter: fmt,
    postScrubMultiplier: 0.001,
    postBigNudgeAmount: 0.1
  });
}

/**
 * Original: $$G5
 * Opacity input component.
 */
export function OpacityInput(props: PercentageProps & {
  ui3RightJustifyPercentSign?: boolean;
}) {
  const {
    inputClassName,
    ui3RightJustifyPercentSign = true,
    ...rest
  } = props;
  const tooltip = P(getI18nString('fullscreen.scrubbable.opacity'));
  return jsx(PercentageBaseInput, {
    ...rest,
    'inputClassName': classNames(inputClassName, {
      [Ww]: ui3RightJustifyPercentSign
    }),
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': tooltip,
    'hidePercentSign': ui3RightJustifyPercentSign,
    'childrenAtEnd': ui3RightJustifyPercentSign,
    'children': ui3RightJustifyPercentSign ? jsx('span', {
      className: QK,
      children: renderI18nText('fullscreen.scrubbable.percent')
    }) : props.children
  });
}

/**
 * Original: $$V10
 * Angle input component.
 */
export function AngleInput(props: BaseScrubbableProps & {
  reverseScrub?: boolean;
}) {
  const {
    smallNudgeAmount,
    bigNudgeAmount
  } = props;
  const fmt = useMemo(() => new cu({
    smallNudgeAmount,
    bigNudgeAmount
  }), [smallNudgeAmount, bigNudgeAmount]);
  return jsx(ScrubbableInput, {
    ...props,
    formatter: fmt,
    postScrubMultiplier: props.reverseScrub ? 0.5 : -0.5,
    postWheelMultiplier: props.reverseScrub ? 0.2 : -0.2,
    postBigNudgeAmount: 0.1
  });
}

/**
 * Original: $$H4
 * Angle input component (fixed range).
 */
export function AngleInputFixed(props: BaseScrubbableProps) {
  const fmt = useMemo(() => new cu({
    min: 7.16,
    max: 180
  }), []);
  return jsx(ScrubbableInput, {
    ...props,
    formatter: fmt,
    postScrubMultiplier: 0.5,
    postBigNudgeAmount: 0.1,
    postWheelMultiplier: 0.2
  });
}

/**
 * Original: $$z3
 * Pixel input component.
 */
export function PixelInput(props: BaseScrubbableProps) {
  const {
    min,
    smallNudgeAmount = DEFAULT_FINE_NUDGE,
    bigNudgeAmount = DEFAULT_COARSE_NUDGE,
    formatter
  } = props;
  const isScrubbingRef = useRef(false);
  const fmt = useMemo(() => formatter ?? new h7({
    min,
    smallPixelNudgeAmount: smallNudgeAmount,
    bigPixelNudgeAmount: bigNudgeAmount
  }), [min, smallNudgeAmount, bigNudgeAmount, formatter]);
  const InputComponent = props.isTokenizable ? TokenizableInput : FormattedInput;
  return jsxs(ScrubbableControl, {
    ...defaultScrubConfig,
    bigNudgeAmount,
    'className': props.className,
    'data-tooltip': props['data-tooltip'],
    'data-tooltip-type': props['data-tooltip-type'],
    'disabled': props.disabled,
    'dispatch': props.dispatch,
    'formatter': fmt,
    'noBorderOnHover': props.noBorderOnHover,
    'onScrubBegin': () => {
      isScrubbingRef.current = true;
    },
    'onScrubEnd': () => {
      isScrubbingRef.current = false;
    },
    'onValueChange': props.onValueChange,
    'scrubMultiplier': props.scrubMultiplier,
    'scrubbingDisabled': props.disabled,
    smallNudgeAmount,
    'tooltipForScreenReadersOnly': props.tooltipForScreenReadersOnly,
    'value': props.value,
    'children': [props.children, jsx(InputComponent, {
      className: props.inputClassName,
      disabled: props.disabled,
      formatter: fmt,
      noBorderOnFocus: true,
      onChange: (t: any) => props.onValueChange?.(t, yesNoTrackingEnum.YES),
      placeholder: props.placeholder,
      property: props.value,
      recordingKey: props.recordingKey,
      shouldClearOnFocus: props.shouldClearOnFocus,
      source: isScrubbingRef.current ? 'scrub' : 'document'
    })]
  });
}

// Exports with refactored names
export const $$ = PercentageInputWithMinMax;
export const $j = LengthInput;
export const Ht = NumericInput;
export const Jl = PixelInput;
export const M4 = AngleInputFixed;
export const Pd = OpacityInput;
export const Se = ColorInput;
export const W0 = TimeInput;
export const W4 = TimeMillisecondsInput;
export const YZ = NumericDropdownWithIcon;
export const Zp = AngleInput;
export const dE = TimeSecondsInput;
export const fl = ScrubbableDropdownInput;
export const gq = ExpressionInput;
export const ig = PercentageInput;
export const j5 = ScrubbableInput;
export const qd = TimeDurationInput;
export const vD = NumericDropdownInput;
export const w2 = PercentageBaseInput;
export const xW = ScaleInput;