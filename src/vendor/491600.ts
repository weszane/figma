import { Db, yW, hx } from "../vendor/491721";
import { DF } from "../vendor/463802";
import { Sd, xj } from "../vendor/425002";
import { Ac, w, vJ, I2, ff } from "../vendor/408361";
import { useEffect } from "react";
export function $$d0({
  validateUrl: e
}) {
  let [r] = DF();
  useEffect(() => {
    if (!r.hasNodes([Db])) throw Error("LinkPlugin: LinkNode not registered on editor");
    return Sd(r.registerCommand(yW, r => {
      if (null === r) {
        hx(r);
        return !0;
      }
      if ("string" == typeof r) return !(void 0 !== e && !e(r)) && (hx(r), !0);
      {
        let {
          url,
          target,
          rel,
          title
        } = r;
        hx(url, {
          rel,
          target,
          title
        });
        return !0;
      }
    }, Ac), void 0 !== e ? r.registerCommand(w, n => {
      let s = vJ();
      if (!I2(s) || s.isCollapsed() || !xj(n, ClipboardEvent)) return !1;
      let h = n;
      if (null === h.clipboardData) return !1;
      let d = h.clipboardData.getData("text");
      return !!e(d) && !s.getNodes().some(e => ff(e)) && (r.dispatchCommand(yW, d), n.preventDefault(), !0);
    }, Ac) : () => {});
  }, [r, e]);
  return null;
}
export const W = $$d0;