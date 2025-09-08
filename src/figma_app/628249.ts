import { selectWithShallowEqual } from "../905/103090";
import { isInvalidValue } from "../905/216495";
import { A5 } from "../905/275640";
export function $$s0() {
  let e = A5("fillPaints");
  return selectWithShallowEqual(t => {
    let r = t.mirror.selectionProperties.fillPaints;
    if (!r || isInvalidValue(r)) return null;
    let n = r.findIndex(e => "IMAGE" === e.type);
    return n < 0 ? null : {
      paint: r[n],
      paintIndex: n,
      onChange: (t, i) => {
        e([...r.slice(0, n), t, ...r.slice(n + 1)], i);
      }
    };
  });
}
export const j = $$s0;