import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { noop } from 'lodash-es';
import s from "classnames";
import { KeyCodes } from "../905/63728";
import { BrowserInfo } from "../figma_app/778880";
import { v } from "../905/318279";
import { Rt, tI } from "../9410/733790";
var o = s;
export function $$p0({
  ariaDescription: e,
  innerRef: t,
  value: i,
  placeholder: s,
  onChange: p,
  onFocus: h,
  onKeyDown: m,
  onKeyUp: f,
  shiftEnterInsertsNewline: g,
  dataTestId: _,
  recordingKey: x,
  onPasteCapture: y
}) {
  let b = useCallback(e => {
    t && (t.current = e?.textarea ?? null);
  }, [t]);
  let C = i.includes("\n");
  return jsx(v, {
    ref: b,
    ariaDescription: e,
    className: o()(Rt, {
      [tI]: !C
    }),
    dataTestId: _,
    disableBorderStyles: !0,
    focusOnMount: !0,
    onChange: e => p(e.currentTarget.value),
    onEscape: noop,
    onFocus: h,
    onKeyDown: e => {
      switch (e.keyCode) {
        case KeyCodes.ENTER:
          if (e.preventDefault(), g && (e.shiftKey || BrowserInfo.mac && e.ctrlKey)) {
            let {
              selectionStart,
              selectionEnd
            } = e.currentTarget;
            e.currentTarget.setRangeText("\n", selectionStart, selectionEnd, "end");
            e.currentTarget.scrollLeft = 0;
            e.stopPropagation();
            p(e.currentTarget.value);
            return;
          }
          break;
        case KeyCodes.UP_ARROW:
        case KeyCodes.DOWN_ARROW:
          if (C) return;
      }
      m(e);
    },
    onKeyUp: f,
    onPasteCapture: y,
    placeholder: s,
    recordingKey: x,
    spellCheck: !1,
    value: i
  });
}
export const H = $$p0;
