import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, useCallback, useMemo } from "react";
import { Ay } from "../figma_app/272902";
import { ZC } from "../figma_app/39751";
import { useSetupPlayback, useHandleChangeEvent, useHandleGenericEvent, useHandleKeyboardEvent } from "../figma_app/878298";
import { Q } from "../905/249555";
export let $$d0 = forwardRef(function (e, t) {
  let i = e.recordingKey || "";
  let d = useRef(null);
  let c = ZC(d.current);
  useEffect(() => {
    let t = d.current;
    t && !c && (t.value || (e.usePlaceholderAttribute || (t.value = e.placeholderValue || ""), e.noDefaultFocus || (t.focus(), t.select())));
  }, [d, c, e.noDefaultFocus, e.placeholderValue, e.usePlaceholderAttribute]);
  let {
    submit,
    cancel
  } = e;
  let m = useSetupPlayback(i, "submit", e => {
    d.current && submit(e, d.current);
  });
  let h = useCallback(() => {
    if (!d.current) return;
    let e = d.current?.value;
    if (e) {
      m(e);
      return;
    }
    cancel(d.current);
  }, [d, cancel, m]);
  let g = useHandleChangeEvent(e.recordingKey || "", "change", e => {});
  let f = useCallback(() => {
    d.current && (d.current.value !== e.placeholderValue ? h() : cancel(d.current));
  }, [cancel, e.placeholderValue, h]);
  let _ = useHandleGenericEvent(i, "blur", f);
  let A = useHandleKeyboardEvent(i, "keydown", t => {
    if (d.current) switch (t.keyCode) {
      case 13:
        t.stopPropagation();
        h();
        break;
      case 27:
        t.stopPropagation();
        cancel(d.current);
        break;
      default:
        if (e.dontPropagateKeyDown) {
          t.stopPropagation();
          return;
        }
        e.onKeyDown?.(t);
    }
  });
  let y = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
  }, []);
  let b = useMemo(() => Ay(d, t), [d, t]);
  return jsxs(Fragment, {
    children: [e.hiddenLabelText && jsx("label", {
      htmlFor: e.inputId,
      className: Q,
      children: e.hiddenLabelText
    }), jsx("input", {
      ref: b,
      className: `input--input--IPk3x ${e.className || ""}`,
      dir: "auto",
      id: e.inputId,
      maxLength: e.maxLength,
      onBlur: e.onBlur || _,
      onChange: g,
      onClick: y,
      onKeyDown: A,
      placeholder: e.usePlaceholderAttribute ? e.placeholderValue : void 0,
      style: e.style
    })]
  });
});
export const p = $$d0;