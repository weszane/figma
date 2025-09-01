import { ServiceCategories as _$$e } from "../905/165054";
import { daH, DV9, Hdj } from "../figma_app/763686";
import { $D } from "../905/11";
import { t1 } from "../figma_app/728075";
var $$o1 = ((e) => (e[e.YELLOW = 0] = "YELLOW", e[e.ORANGE = 1] = "ORANGE", e[e.RED = 2] = "RED", e[e.PINK = 3] = "PINK", e[e.VIOLET = 4] = "VIOLET", e[e.BLUE = 5] = "BLUE", e[e.TEAL = 6] = "TEAL", e[e.GREEN = 7] = "GREEN", e))($$o1 || {});
let l = new Map([[daH.YELLOW, 0], [daH.ORANGE, 1], [daH.RED, 2], [daH.PINK, 3], [daH.VIOLET, 4], [daH.BLUE, 5], [daH.TEAL, 6], [daH.GREEN, 7]]);
let d = new Map();
export function $$c0(e, t) {
  0 === d.size && function () {
    let e = DV9?.getWhiteboardUI3ColorRamps();
    if (e) for (let [t, i] of e.entries()) {
      let e = {
        [Hdj.V100]: i[0],
        [Hdj.V200]: i[1],
        [Hdj.V300]: i[2],
        [Hdj.V400]: i[3],
        [Hdj.V500]: i[4],
        [Hdj.V600]: i[5],
        [Hdj.V700]: i[6],
        [Hdj.V800]: i[7],
        [Hdj.V900]: i[8],
        [Hdj.V1000]: i[9]
      };
      let s = l.get(t);
      if (void 0 === s) {
        $D(_$$e.FIGJAM, Error(`The ${t} WhiteboardColor doesn't exist in the FigJam UI3 color ramp map from C++`));
        continue;
      }
      d.set(s, e);
    }
  }();
  let i = d.get(e);
  return i ? i[t] : ($D(_$$e.FIGJAM, Error(`The ${e} ColorRampName doesn't exist in the whiteboardUI3ColorRamps map`)), t1);
}
export const W = $$c0;
export const r = $$o1;