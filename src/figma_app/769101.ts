import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { W as _$$W } from "../905/187396";
import { KeyCodes, isModifierMatch, isCommandModifier } from "../905/63728";
import { isInteractionPathCheck } from "../figma_app/897289";
import { generateUUIDv4 } from "../905/871474";
import { fullscreenValue } from "../figma_app/455680";
import { f7 } from "../figma_app/896988";
import { W1 } from "../figma_app/439493";
import { A as _$$A } from "../905/139173";
import { Wh, ec } from "../figma_app/599095";
var $$h3 = (e => (e.fontFamilyControl = "fontFamilyControl", e))($$h3 || {});
export function $$m2(e, t) {
  return function ({
    children: r
  }) {
    return jsx("div", {
      id: t,
      role: "listbox",
      "aria-label": e,
      tabIndex: -1,
      className: Wh,
      children: r
    });
  };
}
export function $$g0({
  children: e
}) {
  return jsx(Fragment, {
    children: e
  });
}
export function $$f4({
  children: e,
  padding: t
}) {
  return jsx(W1, {
    padding: t,
    children: jsx("div", {
      className: ec,
      children: e
    })
  });
}
export function $$E1({
  value: e,
  onChange: t,
  options: r,
  renderOption: u,
  renderButton: _,
  optionEquality: h,
  OptionWrapper: g = $$m2(),
  additionalOptions: E,
  additionalOptionId: y,
  additionalOptionOnChange: b,
  additionalContentsTop: T,
  additionalContentsBottom: I,
  PopoverWrapper: S = $$f4,
  positionX: v,
  positionY: A,
  responsivePositionY: x,
  popoverClassName: N,
  useDropdownZIndex: C,
  onToggleMenuOpen: w,
  parentComponent: O,
  customOptions: R,
  customOptionsHeader: L,
  overrideMenuOpenState: P,
  renderButtonRef: D,
  overrideMenuFocused: k
}) {
  let M = useRef(null);
  let [F, j] = useState(!1);
  let U = P ? P.isOpenOverride : F;
  let B = P ? P.setIsOpenOverride : j;
  let [G, V] = useState(0);
  let [H, z] = useState(!1);
  let W = k ? k.focusedIndexOverride : G;
  let K = k ? k.setFocusedIndexOverride : V;
  let Y = k ? k.isFocusedByKeyboardOverride : H;
  let $ = k ? k.setIsFocusedByKeyboardOverride : z;
  let X = r.length + (R ? R.length : 0) + (null != E ? 1 : 0);
  let [q] = useState(() => {
    let e = Array(X);
    for (let t = 0; t < r.length; t++) e[t] = generateUUIDv4();
    null != E && (e[r.length] = y);
    return e;
  });
  let J = new _$$W();
  let [Z, Q] = useState(!0);
  useEffect(() => {
    w && w(U);
  }, [U, w]);
  return jsx(_$$A, {
    target: _({
      value: e,
      ref: D ?? M,
      onKeyDown: e => {
        switch (e.keyCode) {
          case KeyCodes.ESCAPE:
            U ? B(!1) : e.currentTarget?.blur();
            break;
          case KeyCodes.ENTER:
            U && (W >= 0 && W < r.length ? t(r[W], e) : W === r.length && E && b?.(e));
            break;
          case KeyCodes.RIGHT_ARROW:
          case KeyCodes.LEFT_ARROW:
          case KeyCodes.UP_ARROW:
          case KeyCodes.DOWN_ARROW:
            if (!isModifierMatch(e, 0)) {
              f7(e);
              break;
            }
            if ($(!0), U && X) {
              let t = W;
              (t += e.keyCode === KeyCodes.UP_ARROW || e.keyCode === KeyCodes.LEFT_ARROW ? -1 : 1) >= X ? t = 0 : t < 0 && (t = X - 1);
              K(t);
            } else U || B(!0);
            e.preventDefault();
            e.stopPropagation();
            break;
          case KeyCodes.TAB:
            $(!1);
            break;
          case KeyCodes.C:
          case KeyCodes.V:
          case KeyCodes.X:
            isCommandModifier(e) && (fullscreenValue.triggerAction(e.keyCode === KeyCodes.C ? "copy" : e.keyCode === KeyCodes.X ? "cut" : "paste"), e.stopPropagation(), e.preventDefault());
            break;
          default:
            f7(e);
        }
      },
      onClick: () => {
        $(!1);
        B(!U);
        O && "fontFamilyControl" === O && (isInteractionPathCheck() ? Q(!0) : (Q(!1), J.reset(), J.scheduleOnce(() => {
          Q(!0);
        }, 250)));
      },
      active: U,
      activeOptionId: null != W ? q[W] : void 0
    }),
    onClose: () => {
      O && "fontFamilyControl" === O && J.reset();
      B(!1);
    },
    renderPopoverContents: i => {
      let a = (r, n) => {
        let i = e => t(r, e);
        let a = e => {
          i(e);
          B(!1);
        };
        return u({
          value: r,
          id: q[n],
          onClick: e => {
            (!O || "fontFamilyControl" !== O || Z) && a(e);
          },
          isSelected: h ? h(r, e) : r === e,
          isFocused: Y && W === n
        });
      };
      let s = r.map(a);
      let o = R?.map((e, t) => a(e, t + s.length));
      return o ? jsxs(S, {
        side: i,
        children: [T, jsx(g, {
          children: s
        }), L, jsxs(g, {
          children: [o, E?.(Y && W === s.length + o.length)]
        }), I]
      }) : jsxs(S, {
        side: i,
        children: [T, jsxs(g, {
          children: [s, E?.(Y && W === s.length)]
        }), I]
      });
    },
    isOpen: U,
    positionX: v,
    positionY: A,
    responsivePositionY: x,
    className: N,
    useDropdownZIndex: C
  });
}
export const A3 = $$g0;
export const Fn = $$E1;
export const SC = $$m2;
export const k2 = $$h3;
export const wM = $$f4;