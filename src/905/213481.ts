import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A as _$$A } from "../vendor/723372";
import { E } from "../905/632989";
import { bL, hE, O6, HG } from "../905/598775";
import { useRecording } from "../905/959312";
import { $ } from "../905/61417";
import { O } from "../905/969533";
import { f as _$$f } from "../905/54715";
import { pk } from "../905/408073";
import { Lh } from "../figma_app/415899";
import { preventAndStopEvent } from "../905/955878";
var g = "chip__mainButton__8pK6D";
function f({
  "aria-label": e,
  children: t,
  disabled: i,
  htmlAttributes: r,
  leading: s,
  selected: l,
  size: d = "md",
  trailing: c,
  variant: u,
  mainButton: p,
  isInteractive: m = !1
}, h) {
  return jsxs(bL, {
    ref: h,
    "aria-label": e,
    className: _$$A({
      chip__chip__p9lFq: !0,
      chip__sizeSm__lkIcs: "sm" === d,
      chip__sizeMd__OpcZs: "md" === d,
      chip__sizeFill__X3su6: "fill" === d,
      "chip__selected__j8L-p": l,
      "chip__disabled__Cr-yT": i,
      chip__enabled__oqgSy: !i,
      chip__interactive__mYmLC: m,
      chip__variantPrimary__cdoqy: !u || "primary" === u,
      chip__variantComponent__iYi9L: "component" === u,
      chip__variantSuccess__NqX9S: "success" === u,
      chip__variantWarning__tpuFm: "warning" === u,
      chip__variantDanger__3kLvy: "danger" === u,
      chip__variantToggle__dKATE: "toggle" === u
    }),
    ...r,
    children: [p, jsxs("div", {
      className: "chip__content__PFdMr",
      children: [s && jsx("span", {
        className: "chip__leading__zJNEa",
        children: s
      }), jsx("span", {
        className: "chip__title__pAoz6",
        children: jsx(hE, {
          children: t
        })
      }), c && jsx("span", {
        className: "chip__trailing__gFQmd",
        children: c
      })]
    })]
  });
}
let _ = forwardRef((e, t) => {
  let i = useRecording(e.onClose, {
    eventName: "close",
    recordingKey: e.recordingKey
  }, [e.onClose]);
  let r = null != e.onClose || null != e.onClick;
  let a = Lh("close");
  return f({
    ...e,
    isInteractive: r,
    htmlAttributes: {
      ...e.htmlAttributes,
      onKeyDown: t => {
        e.disabled || (i && ("Backspace" === t.key || "Delete" === t.key) && (i(t), preventAndStopEvent(t)), e.htmlAttributes?.onKeyDown?.(t));
      }
    },
    mainButton: r ? jsx(O6, {
      actionOnPointerDown: e.actionOnPointerDown,
      className: g,
      disabled: e.disabled,
      onClick: e.onClick,
      recordingKey: e.recordingKey,
      "aria-controls": e["aria-controls"],
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"]
    }) : null,
    trailing: e.trailing || e.hasCloseButton ? jsxs(Fragment, {
      children: [e.trailing, e.hasCloseButton && jsx(HG, {
        className: "chip__closeButtonWrapper__DJlYV",
        children: jsx(E, {
          className: "chip__closeButton__qGt5t",
          "aria-label": a,
          disabled: e.disabled,
          onClick: i,
          htmlAttributes: {
            tabIndex: -1
          },
          children: jsx(_$$f, {})
        })
      })]
    }) : null
  }, t);
});
_.displayName = "Chip";
let A = forwardRef((e, t) => {
  let {
    getTriggerProps,
    setTriggerReference
  } = $(pk, "SelectPrimitiveContext", "SelectPrimitive.Root");
  let {
    onClick,
    ...s
  } = getTriggerProps();
  return f({
    ...e,
    isInteractive: !0,
    mainButton: jsx(O6, {
      ref: setTriggerReference,
      actionOnPointerDown: e.actionOnPointerDown,
      className: g,
      disabled: e.disabled,
      recordingKey: e.recordingKey,
      onClick,
      htmlAttributes: s
    }),
    trailing: jsxs(Fragment, {
      children: [e.trailing, jsx(O, {
        className: "chip__triggerChevron__s7ngi"
      })]
    })
  }, t);
});
A.displayName = "Chip.SelectTrigger";
export let $$y0 = Object.assign(_, {
  SelectTrigger: A
});
export const v = $$y0;