import { ServiceCategories as _$$e } from "../905/165054";
import { ColorOptions, WhiteboardTsApi, WeightLevel } from "../figma_app/763686";
import { reportError } from "../905/11";
import { t1 } from "../figma_app/728075";
var $$o1 = (e => (e[e.YELLOW = 0] = "YELLOW", e[e.ORANGE = 1] = "ORANGE", e[e.RED = 2] = "RED", e[e.PINK = 3] = "PINK", e[e.VIOLET = 4] = "VIOLET", e[e.BLUE = 5] = "BLUE", e[e.TEAL = 6] = "TEAL", e[e.GREEN = 7] = "GREEN", e))($$o1 || {});
let l = new Map([[ColorOptions.YELLOW, 0], [ColorOptions.ORANGE, 1], [ColorOptions.RED, 2], [ColorOptions.PINK, 3], [ColorOptions.VIOLET, 4], [ColorOptions.BLUE, 5], [ColorOptions.TEAL, 6], [ColorOptions.GREEN, 7]]);
let d = new Map();
export function $$c0(e, t) {
  0 === d.size && function () {
    let e = WhiteboardTsApi?.getWhiteboardUI3ColorRamps();
    if (e) for (let [t, i] of e.entries()) {
      let e = {
        [WeightLevel.V100]: i[0],
        [WeightLevel.V200]: i[1],
        [WeightLevel.V300]: i[2],
        [WeightLevel.V400]: i[3],
        [WeightLevel.V500]: i[4],
        [WeightLevel.V600]: i[5],
        [WeightLevel.V700]: i[6],
        [WeightLevel.V800]: i[7],
        [WeightLevel.V900]: i[8],
        [WeightLevel.V1000]: i[9]
      };
      let s = l.get(t);
      if (void 0 === s) {
        reportError(_$$e.FIGJAM, Error(`The ${t} WhiteboardColor doesn't exist in the FigJam UI3 color ramp map from C++`));
        continue;
      }
      d.set(s, e);
    }
  }();
  let i = d.get(e);
  return i ? i[t] : (reportError(_$$e.FIGJAM, Error(`The ${e} ColorRampName doesn't exist in the whiteboardUI3ColorRamps map`)), t1);
}
export const W = $$c0;
export const r = $$o1;