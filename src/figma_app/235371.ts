import { atom } from "../figma_app/27355";
import { createTrackedAtom } from "../figma_app/615482";
import { YQ, lS } from "../figma_app/257779";
let s = createTrackedAtom({
  suggestions: [],
  analyticsData: YQ,
  isSeen: !0
});
let $$o0 = atom(e => e(s), (e, t, r) => {
  let n = e(s);
  let i = r.suggestions.slice(0, lS);
  let o = n.suggestions.length !== i.length || n.suggestions.some((e, t) => e.id !== i[t]?.id);
  let l = n.isSeen;
  o && (l = 0 === i.length);
  t(s, {
    ...r,
    suggestions: i,
    isSeen: l
  });
});
let $$l1 = atom(e => e(s).isSeen, (e, t) => {
  let r = e(s);
  t(s, {
    ...r,
    isSeen: !0
  });
});
export const P = $$o0;
export const a = $$l1;