import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useContext, useMemo, createContext } from "react";
import { RadioPrimitiveOption } from "../905/34525";
import { RadioPrimitiveRoot } from "../905/22449";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { KeyCodes } from "../905/63728";
import { useBlurFocusedItem } from "../figma_app/119475";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { usKeyboardFocusHandler } from "../905/286442";
import { m as _$$m } from "../figma_app/175364";
import { c as _$$c2 } from "../905/566438";
import { TH } from "../figma_app/171177";
import { FlexBox } from "../905/222272";
import { useLayoutRerender } from "../905/479155";
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
  } = usKeyboardFocusHandler({
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
      key: KeyCodes.ENTER
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
        children: [jsx(RadioPrimitiveOption, {
          id: e,
          value: e
        }), jsx("label", {
          htmlFor: e,
          className: cssBuilderInstance.noWrap.$,
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
  return jsx(FlexBox, {
    primary: !1,
    gap: 8,
    fullWidth: !0,
    justify: "space-between",
    children: jsx(RadioPrimitiveRoot, {
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
  let r = useBlurFocusedItem("faux");
  let {
    active,
    focus
  } = usKeyboardFocusHandler({
    ref: t
  });
  let o = useLayoutRerender();
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