import classNames from 'classnames';
import { forwardRef } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { a as _$$a } from '../905/339331';
import { r as _$$r } from '../905/571562';
import { ButtonPrimitive } from '../905/632989';
import { areValuesEqual, performNudge, handleParseWithError } from '../905/687992';
import { identity, toPixels } from '../905/893109';
import { preventEvent } from '../905/955878';
p('stack__row__-rJHV').displayName = 'Stack.Row';
let u = p('stack__col__4xLd-');
function p(e) {
  return forwardRef(({
    fill: t,
    gap: i = 0,
    wrap: r,
    align: a,
    justify: s,
    className: o,
    style: l,
    ...u
  }, p) => jsx('div', {
    ref: p,
    className: classNames(e, o, {
      stack__fill__6NGzz: t
    }),
    style: {
      ...l,
      gap: typeof i == 'number' ? toPixels(i) : i,
      [identity('--wrap')]: r ? 'wrap' : 'nowrap',
      justifyContent: s,
      alignItems: a
    },
    ...u
  }));
}
u.displayName = 'Stack.Col';
export let $$h0 = forwardRef(({
  value: e,
  getStringValue: t,
  formatter: i,
  onChange: r,
  onChangeRestricted: d
}, c) => {
  let {
    min,
    max
  } = i;
  let g = (n, a) => {
    n.preventDefault();
    let o = n.shiftKey;
    let l = t();
    let c = handleParseWithError(i, l, e, 'nudge', n);
    if (c == null) return;
    let u = e => performNudge(i, e, a, {
      big: o
    });
    if (c.callback) {
      c.callback(e => u(e).value, {
        commit: !0
      });
      return;
    }
    let p = u(e);
    areValuesEqual(i, e, p.value) || r?.(p.value);
    p.value !== p.preClamped && d?.(p.preClamped, {
      value: p.value
    });
  };
  let f = {
    tabIndex: -1,
    onPointerDown: preventEvent
  };
  return jsxs(u, {
    ref: c,
    children: [jsx(ButtonPrimitive, {
      className: 'stepper__up__z53LA',
      onClick: e => g(e, 1),
      disabled: max != null && areValuesEqual(i, e, max),
      htmlAttributes: f,
      children: jsx(_$$a, {})
    }), jsx(ButtonPrimitive, {
      className: 'stepper__down__zob3i',
      onClick: e => g(e, -1),
      disabled: min != null && areValuesEqual(i, e, min),
      htmlAttributes: f,
      children: jsx(_$$r, {})
    })]
  });
});
$$h0.displayName = 'Stepper';
export const C = $$h0;