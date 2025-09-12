import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, forwardRef, useMemo, useContext } from "react";
import { getThemeContextOrDefault } from "../905/158740";
import { A as _$$A } from "../vendor/723372";
import { l as _$$l } from "../905/479687";
import { aC, Os, AS, mL, rv, ZU, dl, HI, Dq, WE, pc } from "../905/379736";
import { useSelectionProvider } from "../905/751750";
import { useRecording } from "../905/959312";
import { defaultComponentAttribute } from "../905/577641";
import { setupMenuItemHandler } from "../905/743079";
import { ensureContext } from "../905/61417";
let m = createContext({
  onChange: () => {},
  disabledGroup: !1,
  currentValue: ""
});
let h = forwardRef(({
  onChange: e,
  title: t,
  disabled: i = !1,
  children: a,
  htmlAttributes: s,
  value: o = "",
  recordingKey: l,
  ...p
}, h) => {
  let [g, f] = useSelectionProvider();
  let _ = useRecording(e, {
    eventName: "change",
    recordingKey: l
  }, [e]);
  let A = useMemo(() => ({
    onChange: function (e, t) {
      _(e, {
        event: t
      });
    },
    currentValue: o,
    disabledGroup: i
  }), [i, o, _]);
  return jsx(f, {
    value: g,
    children: jsx(m.Provider, {
      value: A,
      children: jsxs("ul", {
        ...defaultComponentAttribute,
        ...s,
        ...p,
        role: "group",
        "aria-labelledby": g,
        ref: h,
        children: [t, a]
      })
    })
  });
});
h.displayName = "MenuPrimitive.RadioGroup";
let g = forwardRef(({
  value: e,
  disabled: t,
  htmlAttributes: i,
  ...a
}, s) => {
  let {
    currentValue,
    onChange,
    disabledGroup
  } = useContext(m);
  let c = disabledGroup || t;
  let u = e === currentValue;
  let h = setupMenuItemHandler({
    forwardedRef: s,
    disabled: c,
    action: function (t) {
      onChange(e, t);
    },
    closeOnClick: !0
  });
  return jsx("li", {
    ...i,
    role: "menuitemradio",
    "aria-checked": u,
    "aria-disabled": c,
    ...h,
    ...a
  });
});
g.displayName = "MenuPrimitive.RadioGroupItem";
let _ = createContext(null);
let A = forwardRef(({
  onChange: e,
  title: t,
  disabled: i = !1,
  children: r,
  recordingKey: a,
  selectedItems: s = [],
  ...o
}, l) => {
  let [u, p] = useSelectionProvider();
  let m = useRecording(e, {
    eventName: "change",
    recordingKey: a
  }, [e]);
  return jsx(p, {
    value: u,
    children: jsx(_.Provider, {
      value: {
        onChange: (e, t, i) => {
          t ? m(s.concat([e]), {
            event: i
          }) : m(s.filter(t => t !== e), {
            event: i
          });
        },
        selectedItems: s,
        disabledGroup: i
      },
      children: jsxs("ul", {
        role: "group",
        "aria-labelledby": u,
        ...o,
        ref: l,
        children: [t, r]
      })
    })
  });
});
A.displayName = "MenuPrimitive.CheckboxGroup";
let y = forwardRef(({
  disabled: e,
  value: t,
  ...i
}, a) => {
  let {
    selectedItems,
    onChange,
    disabledGroup
  } = ensureContext(_, "CheckboxGroupItem", "CheckboxGroup");
  let d = useMemo(() => selectedItems.includes(t), [t, selectedItems]);
  let c = disabledGroup || e;
  let u = setupMenuItemHandler({
    forwardedRef: a,
    disabled: c,
    action: function (e) {
      onChange(t, !d, e);
    },
    closeOnClick: !1
  });
  return jsx("li", {
    role: "menuitemcheckbox",
    "aria-checked": d,
    "aria-disabled": c,
    ...u,
    ...i
  });
});
y.displayName = "MenuPrimitive.CheckboxGroupItem";
let b = forwardRef(({
  onChange: e,
  checked: t,
  mixed: i,
  disabled: r,
  recordingKey: a,
  htmlAttributes: s,
  ...o
}, l) => {
  let d = useRecording(e, {
    eventName: "change",
    recordingKey: a
  }, [e]);
  let u = setupMenuItemHandler({
    forwardedRef: l,
    action: function (e) {
      return i ? d(!0, {
        event: e
      }) : d(!t, {
        event: e
      });
    },
    disabled: r,
    closeOnClick: !0
  });
  return jsx("li", {
    role: "menuitemcheckbox",
    "aria-checked": i ? "mixed" : t,
    "aria-disabled": r,
    ...u,
    ...o,
    ...s
  });
});
function v() {
  let {
    version
  } = getThemeContextOrDefault();
  return "ui2" === version ? jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    className: aC,
    "aria-hidden": !0,
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2069 5.20724L7.70688 10.7072L6.99977 11.4144L6.29266 10.7072L3.29266 7.70724L4.70688 6.29303L6.99977 8.58592L11.7927 3.79303L13.2069 5.20724Z",
      fill: "var(--color-icon"
    })
  }) : jsx(_$$l, {
    className: aC,
    "aria-hidden": !0
  });
}
b.displayName = "MenuPrimitive.CheckboxItem";
v.displayName = "MenuItemCheckIcon";
export let $$I3 = forwardRef((e, t) => jsx(h, {
  className: Os,
  ...e,
  ref: t
}));
$$I3.displayName = "Menu.RadioGroup";
export let $$E4 = forwardRef(({
  children: e,
  ...t
}, i) => jsx(g, {
  className: _$$A(AS, mL),
  ...t,
  ref: i,
  children: jsxs("span", {
    className: _$$A(rv, ZU),
    children: [jsx(v, {}), e]
  })
}));
$$E4.displayName = "Menu.RadioGroupItem";
export let $$x2 = forwardRef(({
  children: e,
  ...t
}, i) => jsx(b, {
  className: _$$A(AS, mL),
  ...t,
  ref: i,
  children: jsxs("span", {
    className: _$$A(rv, ZU),
    children: [jsx(v, {}), e]
  })
}));
$$x2.displayName = "Menu.CheckboxItem";
export let $$S0 = forwardRef((e, t) => jsx(A, {
  className: Os,
  ...e,
  ref: t
}));
$$S0.displayName = "Menu.CheckboxGroup";
export let $$w1 = forwardRef(({
  children: e,
  ...t
}, i) => {
  let r;
  r = "ui3" === getThemeContextOrDefault().version ? _$$l : C;
  return jsx(y, {
    className: _$$A(AS, dl),
    ...t,
    ref: i,
    children: jsxs("span", {
      className: _$$A(rv, HI),
      children: [jsx("span", {
        className: Dq,
        children: e
      }), jsx("span", {
        className: WE,
        children: jsx(r, {
          className: pc
        })
      })]
    })
  });
});
function C(e) {
  return jsx("svg", {
    ...e,
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.17647 4.82377L5.05882 6.70613L8.82353 2.94141L10 4.11788L5.05882 9.05908L2 6.00024L3.17647 4.82377Z",
      fill: "var(--color-icon)"
    })
  });
}
$$w1.displayName = "Menu.CheckboxGroupItem";
export const $Q = $$S0;
export const a2 = $$w1;
export const H_ = $$x2;
export const z6 = $$I3;
export const CU = $$E4;