import { useSelector } from "../vendor/514228";
import { oV } from "../905/216495";
import { kl } from "../905/275640";
import { a6 } from "../905/129660";
export function $$o0() {
  let e = useSelector(e => e.mirror.selectionProperties.textUserLayoutVersion);
  let t = kl("intrinsicLineHeight");
  let i = kl("fontSize") ?? oV;
  let o = kl("lineHeight") ?? oV;
  return a6({
    textUserLayoutVersion: e,
    intrinsicLineHeight: t,
    fontSize: i,
    lineHeight: o
  });
}
export const B = $$o0;