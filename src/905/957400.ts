import { useSelector } from "react-redux";
import { MIXED_MARKER } from "../905/216495";
import { kl } from "../905/275640";
import { a6 } from "../905/129660";
export function $$o0() {
  let e = useSelector(e => e.mirror.selectionProperties.textUserLayoutVersion);
  let t = kl("intrinsicLineHeight");
  let i = kl("fontSize") ?? MIXED_MARKER;
  let o = kl("lineHeight") ?? MIXED_MARKER;
  return a6({
    textUserLayoutVersion: e,
    intrinsicLineHeight: t,
    fontSize: i,
    lineHeight: o
  });
}
export const B = $$o0;
