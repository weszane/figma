import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useLayoutEffect } from "react";
import { K } from "../905/443068";
import { L } from "../905/704296";
import { generateRecordingKey } from "../figma_app/878298";
import { s as _$$s } from "../cssbuilder/589278";
import { Y } from "../905/830372";
import { B } from "../905/222272";
function u({
  children: e
}) {
  return jsx("div", {
    className: _$$s.p8.flex.borderBox.$,
    children: e
  });
}
export let $$p0 = forwardRef(function ({
  onDismiss: e,
  children: t,
  content: i,
  extra: p,
  dataTestId: m,
  recordingKey: h,
  shouldAutoFocus: g
}, f) {
  let _ = function (e) {
    if (Array.isArray(e)) {
      if (1 === e.length) return jsx(u, {
        children: e[0]
      });
      if (e.length > 1) return jsx(Fragment, {
        children: e.map((e, t) => jsx("div", {
          className: _$$s.$$if(t > 0, _$$s.bSolid.bt1.colorBorder).$,
          children: jsx(u, {
            children: e
          })
        }, t))
      });
    } else if (e) return jsx(u, {
      children: e
    });
  }(p);
  let A = useRef(null);
  let y = f || A;
  useLayoutEffect(() => {
    g && y && "function" != typeof y && y.current && y.current.focus();
  }, [y, g]);
  return jsxs("div", {
    "data-testid": m,
    ref: y,
    tabIndex: -1,
    children: [jsx(u, {
      children: jsxs(Y, {
        direction: "vertical",
        spacing: 8,
        children: [jsxs(B, {
          fullWidth: !0,
          gap: 4,
          align: "center",
          children: [jsx("div", {
            className: _$$s.flex1.$,
            children: t
          }), e && jsx(K, {
            "aria-label": "close",
            onClick: e,
            recordingKey: generateRecordingKey(h, "dismiss"),
            children: jsx(L, {})
          })]
        }), i]
      })
    }), _ && jsx("div", {
      className: _$$s.bt1.bSolid.colorBorder.$,
      children: _
    })]
  });
});
export const y = $$p0;