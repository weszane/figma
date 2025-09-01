import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useContext, useMemo, createContext } from "react";
import { c as _$$c } from "../905/34525";
import { b } from "../905/22449";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { Uz } from "../905/63728";
import { z3 } from "../figma_app/119475";
import { s as _$$s } from "../cssbuilder/589278";
import { H } from "../905/286442";
import { m as _$$m } from "../figma_app/175364";
import { c as _$$c2 } from "../905/566438";
import { TH } from "../figma_app/171177";
import { B } from "../905/222272";
import { R$ } from "../905/479155";
import { k } from "../905/341245";
import { U } from "../905/172092";
import { e as _$$e, g as _$$g } from "../905/466584";
export function $$b2({
  tabId: e,
  onAction: t,
  children: r,
  navigatingShortcut: s,
  recordingKey: d,
  htmlAttributes: p
}) {
  let m = U();
  let g = generateRecordingKey(m, "tabs", d ?? e);
  let b = useRef(null);
  let {
    activeTabId
  } = useContext(S);
  let {
    active,
    target
  } = H({
    ref: b,
    focusOptions: {
      autoFocusOverride: activeTabId === e,
      enableAutoFocus: !1
    }
  });
  TH(s ? [s] : [], e => {
    e.preventDefault();
    t();
  });
  let A = useMemo(() => ({
    shortcuts: [{
      key: Uz.ENTER
    }],
    onAction: t
  }), [t]);
  let {
    onClickCallback
  } = k({
    primaryAction: A,
    active,
    actionLabel: !1,
    target
  });
  let N = useHandleMouseEvent(g, "click", onClickCallback);
  return jsx("button", {
    ref: b,
    tabIndex: 0,
    onClick: N,
    "data-testid": `tab-${e}`,
    ...p,
    children: jsx(_$$c2, {
      active,
      children: jsxs("div", {
        className: _$$e,
        children: [jsx(_$$c, {
          id: e,
          value: e
        }), jsx("label", {
          htmlFor: e,
          className: _$$s.noWrap.$,
          children: r
        })]
      })
    })
  });
}
export function $$T1({
  children: e,
  onChange: t,
  value: r
}) {
  return jsx(B, {
    primary: !1,
    gap: 8,
    fullWidth: !0,
    justify: "space-between",
    children: jsx(b, {
      value: r,
      onChange: t,
      className: _$$g,
      children: jsx(S.Provider, {
        value: {
          activeTabId: r
        },
        children: e
      })
    })
  });
}
export function $$I0(e) {
  let t = useRef(null);
  let r = z3("faux");
  let {
    active,
    focus
  } = H({
    ref: t
  });
  let o = R$();
  return jsx(_$$m, {
    ...e,
    buttonRef: t,
    active,
    onVisibleChange: e => {
      e ? r() : (o(), focus());
    }
  });
}
let S = createContext({
  activeTabId: ""
});
export const c0 = $$I0;
export const fu = $$T1;
export const oz = $$b2;