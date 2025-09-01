import { E2, eU } from "../figma_app/27355";
import { z } from "../905/239603";
import a from "../vendor/240820";
import { kS } from "../figma_app/864723";
var s = a;
export function $$l0(e, t, i, a = {
  maxNumRecentlyUsed: 20,
  transform: s()
}) {
  let d = E2(e, [], z.array(i.and(z.object({
    lastAddedAtUserId: z.record(z.string(), z.number())
  }))), {
    subscribeToChanges: !0
  });
  return eU(e => {
    let t = e(kS);
    return t ? e(d).filter(e => !!e.lastAddedAtUserId[t]) : [];
  }, (e, i, n) => {
    let r = [...e(d)];
    let s = e(kS);
    if (!s) return;
    let l = a.transform(n, e);
    let c = r.findIndex(e => e[t] === l[t]);
    let u = c > -1 ? r.splice(c, 1)[0] : void 0;
    let p = {
      ...(u?.lastAddedAtUserId ?? {}),
      [s]: Date.now()
    };
    i(d, [{
      ...l,
      lastAddedAtUserId: p
    }, ...r].slice(0, a.maxNumRecentlyUsed ?? 20));
  });
}
export const P = $$l0;