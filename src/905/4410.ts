import { createContext, forwardRef, useContext, useLayoutEffect, useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import { InputComponent } from '../905/185998';
import { Stepper } from '../905/294086';
import { E } from '../905/427996';
import { l as _$$l } from '../905/490996';
import { hasIncrementBy } from '../905/687992';
import { setupRefUpdater } from '../905/823680';
let c = createContext(null);
let u = createContext(_$$l);
function p({
  children: e
}) {
  let [t, i] = useState(null);
  return jsx(c.Provider, {
    value: t,
    children: jsx(u.Provider, {
      value: i,
      children: e
    })
  });
}
p.displayName = 'FormattedInputContext';
export let $$h1 = forwardRef((e, t) => jsx(p, {
  children: jsx(InputComponent.Root, {
    ...e,
    ref: t
  })
}));
$$h1.displayName = 'FormattedInput.Root';
let g = forwardRef((e, t) => {
  let i = useContext(u);
  let a = E(e);
  useLayoutEffect(() => i(a), [a]);
  let {
    inputProps
  } = a;
  let c = setupRefUpdater(t, inputProps.ref);
  return jsx(InputComponent, {
    ...inputProps,
    ref: c
  });
});
g.displayName = 'FormattedInput.Field';
export let $$f0 = g;
forwardRef((e, t) => {
  let i = useContext(c);
  return i && !i.inputProps.disabled && hasIncrementBy(i.formatter) ? jsx(Stepper, {
    ref: t,
    value: i.value,
    formatter: i.formatter,
    getStringValue: i.getStringValue,
    onChange: e => i.onChange(e, {
      commit: !0,
      source: 'stepper'
    }),
    onChangeRestricted: i.onChangeRestricted
  }) : null;
}).displayName = 'FormattedInput.Stepper';
export const D0 = $$f0;
export const bL = $$h1;