import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';
import { i as _$$i, label } from '../905/620622';
import { useSelectionContext } from '../905/751750';
import { generateInputId } from '../905/786321';
import { Ay, q9 } from '../905/865071';
import { A } from '../vendor/723372';
export let Label = forwardRef<HTMLLabelElement, {
  className?: string;
  htmlFor?: string;
  variant?: 'primary' | 'secondary' | string;
  [key: string]: any;
}>(({
  className,
  htmlFor,
  // variant = 'primary',
  ...props
}, ref) => {
  let id = useSelectionContext();
  let labelFor = htmlFor ?? generateInputId(id);
  return jsx(Ay, {
    ...props,
    ref,
    className: A(label, _$$i, className),
    htmlFor: labelFor
  });
});
Label.displayName = 'Label';
export let HiddenLabel = forwardRef<HTMLLabelElement, {
  htmlFor?: string;
  [key: string]: any;
}>(({
  htmlFor,
  ...props
}, ref) => {
  let id = useSelectionContext();
  let labelFor = htmlFor ?? generateInputId(id);
  return jsx(q9, {
    ...props,
    ref,
    htmlFor: labelFor
  });
});
HiddenLabel.displayName = 'HiddenLabel';
export const J = Label;
export const h = HiddenLabel;
