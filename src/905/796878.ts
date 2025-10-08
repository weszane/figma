import { jsxs, jsx } from "react/jsx-runtime";
import { RecordingScrollContainer } from "../905/347284";
import { U5, jG } from "../905/599844";
export function $$s0({
  children: e,
  onScroll: t,
  isEditHubFilePageMode: i = !1,
  footerErrorHeightPx: s
}) {
  return jsxs(RecordingScrollContainer, {
    className: i ? U5 : jG,
    onScroll: t,
    children: [jsx("div", {
      children: e
    }), jsx("div", {
      style: {
        height: s
      }
    })]
  });
}
export const A = $$s0;
