import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { RecordableDiv, RecordableSpan } from "../905/511649";
export let $$i0 = forwardRef(function (e, t) {
  let {
    tag,
    ...l
  } = e;
  return "div" === tag ? e.recordingKey ? jsx(RecordableDiv, {
    "data-fpl-audit": !0,
    ...l,
    ref: t
  }) : jsx("div", {
    "data-fpl-audit": !0,
    ...l,
    ref: t
  }) : e.recordingKey ? jsx(RecordableSpan, {
    "data-fpl-audit": !0,
    ...l,
    ref: t
  }) : jsx("span", {
    "data-fpl-audit": !0,
    ...l,
    ref: t
  });
});
export const b = $$i0;