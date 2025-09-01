import { glU } from "../figma_app/763686";
export function $$r0(e, t, i, a, s, o, l = !1) {
  let [d] = e.useSyncedState(t, "");
  let c = d && !l ? decodeURIComponent(d) : d;
  let [u, p] = e.useSyncedState(`truncated_${t}`, "");
  e.useEffect(() => {
    if (c && glU) {
      let e = glU.truncateText(i.name, i.size, i.lineHeight, a, s, o ? c.replace(/(:)/giu, `$1\u200B`).replace(/([/~.,\-_?#%])/giu, `\u200B$1`).replace(/([=&])/giu, `\u200B$1\u200B`) : c);
      e !== u && p(e);
    }
  }, [c, u]);
  return u || c;
}
export const H = $$r0;