import { useMemo } from "react";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { MP, AU, nr, vW } from "../5430/908946";
import { PF } from "../figma_app/930386";
export function $$a0(e) {
  let t = e === PF.LANDING ? MP : AU;
  let r = e === PF.LANDING ? nr : vW;
  let [a, l] = useAtomValueAndSetter(t);
  let [c, d] = useAtomValueAndSetter(r);
  let u = useMemo(() => ["files", "plugins", "widgets", "creators"].reduce((e, t) => {
    let r = (a?.[t] ?? []).map((e, r) => ({
      type: t,
      idx: r
    })).slice(0, 4);
    return e.concat(r);
  }, []), [a]);
  let m = useMemo(() => u.findIndex(e => e.type === c?.type && e.idx === c?.idx), [u, c]);
  return {
    renderedOrder: u,
    renderedSelectedIdx: m,
    resources: a,
    setResources: l,
    selectedIdx: c,
    setSelectedIdx: d
  };
}
export const W = $$a0;