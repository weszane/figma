import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useLayoutEffect } from "react";
import { IconButton } from "../905/443068";
import { L } from "../905/704296";
import { generateRecordingKey } from "../figma_app/878298";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { AutoLayout } from "../905/470281";
import { B } from "../905/222272";
function u({
  children: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.p8.flex.borderBox.$,
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
          className: cssBuilderInstance.$$if(t > 0, cssBuilderInstance.bSolid.bt1.colorBorder).$,
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
      children: jsxs(AutoLayout, {
        direction: "vertical",
        spacing: 8,
        children: [jsxs(B, {
          fullWidth: !0,
          gap: 4,
          align: "center",
          children: [jsx("div", {
            className: cssBuilderInstance.flex1.$,
            children: t
          }), e && jsx(IconButton, {
            "aria-label": "close",
            onClick: e,
            recordingKey: generateRecordingKey(h, "dismiss"),
            children: jsx(L, {})
          })]
        }), i]
      })
    }), _ && jsx("div", {
      className: cssBuilderInstance.bt1.bSolid.colorBorder.$,
      children: _
    })]
  });
});
export const y = $$p0;