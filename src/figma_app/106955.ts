import { atom, Rq } from "../figma_app/27355";
import { isAnyMobile } from "../figma_app/778880";
import { u8 } from "../figma_app/976749";
import { cS } from "../figma_app/45218";
import { FEditorType } from "../figma_app/53721";
import { A } from "../905/665703";
import { hS } from "../905/595131";
let $$c1 = atom(e => {
  let t = e(u8) === FEditorType.Whiteboard;
  let r = e(hS);
  return t && !r && !isAnyMobile;
});
let u = atom(async () => await A.getCommunityShelves({
  shelfType: cS.FIGJAM_SECTION_PRESET_PICKER
}).then(e => e.data.meta));
let $$p0 = Rq(u);
export const g = $$p0;
export const w = $$c1;