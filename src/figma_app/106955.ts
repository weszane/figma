import { eU, Rq } from "../figma_app/27355";
import { Xb } from "../figma_app/778880";
import { u8 } from "../figma_app/976749";
import { cS } from "../figma_app/45218";
import { nT } from "../figma_app/53721";
import { A } from "../905/665703";
import { hS } from "../905/595131";
let $$c1 = eU(e => {
  let t = e(u8) === nT.Whiteboard;
  let r = e(hS);
  return t && !r && !Xb;
});
let u = eU(async () => await A.getCommunityShelves({
  shelfType: cS.FIGJAM_SECTION_PRESET_PICKER
}).then(e => e.data.meta));
let $$p0 = Rq(u);
export const g = $$p0;
export const w = $$c1;