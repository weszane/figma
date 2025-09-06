import { useLayoutEffect } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { parsePxInt } from "../figma_app/783094";
import { F } from "../905/680873";
import { dh } from "../figma_app/186343";
import { l7 } from "../figma_app/932601";
import { xM9 } from "../figma_app/27776";
let c = parsePxInt(xM9);
export function $$u0({
  pagesList: e,
  scrollContainerRef: t
}) {
  let i = dh();
  let a = useAtomWithSubscription(l7);
  let d = F(e);
  let c = F(!!a);
  useLayoutEffect(() => {
    c.current || p({
      pageId: i,
      pagesList: d.current,
      scrollContainerRef: t
    });
  }, [i, t, d, c]);
  useLayoutEffect(() => {
    a && p({
      pageId: a,
      pagesList: d.current,
      scrollContainerRef: t
    });
  }, [a, t, d]);
}
function p({
  pageId: e,
  pagesList: t,
  scrollContainerRef: i
}) {
  let r = i.current;
  if (!r) return;
  let n = t.findIndex(t => t.nodeId === e);
  if (-1 === n) return;
  let a = n * c;
  let s = a + c;
  let o = r.getScrollTop();
  let l = o + r.getTrackHeight();
  a < o ? r.scrollTo(a - c / 2) : s > l && r.scrollTo(o + (s - l) + c / 2);
}
export const a = $$u0;