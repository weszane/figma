import { forwardRef, useId, useMemo } from 'react';
import { jsx } from 'react/jsx-runtime';
import { RadioPrimivteContext } from '../905/5729';
import { setupRecordingHandler } from '../905/458642';
import { defaultComponentAttribute } from '../905/577641';

/**
 * RadioPrimitiveRoot - Refactored radio group root component.
 *
 * @param props - Props for the radio group root.
 * @param ref - Forwarded ref for the fieldset element.
 * @returns JSX.Element
 */
export const RadioPrimitiveRoot = forwardRef<HTMLFieldSetElement, {
  autofocus?: boolean;
  htmlAttributes?: React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  recordingKey?: string;
  readonly?: boolean;
  value?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}>(({
  autofocus = false,
  htmlAttributes,
  onChange: userOnChange,
  recordingKey,
  readonly,
  value,
  className,
  children,
  ...restProps
}, ref) => {
  // Generate unique id for radio group
  const radioGroupId = useId();

  // Setup recording handler for radio group changes
  const {
    onChange
  } = setupRecordingHandler({
    disabled: readonly,
    onChange: userOnChange,
    recordingKey,
    readonly,
    value,
    className,
    children,
    ...restProps
  });

  // Memoize radio group context value
  const radioGroupContextValue = useMemo(() => ({
    name: radioGroupId,
    value: value ?? '',
    onChange,
    readonlyGroup: readonly,
    autofocus
  }), [radioGroupId, onChange, value, readonly, autofocus]);

  // Render radio group fieldset
  return jsx('fieldset', {
    ...htmlAttributes,
    ...restProps,
    ...defaultComponentAttribute,
    ref,
    'role': 'radiogroup',
    'aria-readonly': readonly || undefined,
    'aria-disabled': readonly || undefined,
    'aria-labelledby': restProps['aria-labelledby'] ?? undefined,
    className,
    'children': jsx(RadioPrimivteContext.Provider, {
      value: radioGroupContextValue,
      children
    })
  });
});
// Original name: RadioPrimitiveRoot
RadioPrimitiveRoot.displayName = 'RadioPrimitive.Root';

// Refactored export name for RadioPrimitiveRoot
export const b = RadioPrimitiveRoot;