import { atom, Rq } from "../figma_app/27355";
import { isAnyMobile } from "../figma_app/778880";
import { editorTypeAtom } from "../figma_app/976749";
import { CommunityPageType } from "../figma_app/45218";
import { FEditorType } from "../figma_app/53721";
import { communityShelfService } from "../905/665703";
import { canvasEditDisabledAtom } from "../905/595131";
let $$c1 = atom(e => {
  let t = e(editorTypeAtom) === FEditorType.Whiteboard;
  let r = e(canvasEditDisabledAtom);
  return t && !r && !isAnyMobile;
});
let u = atom(async () => await communityShelfService.getCommunityShelves({
  shelfType: CommunityPageType.FIGJAM_SECTION_PRESET_PICKER
}).then(e => e.data.meta));
let $$p0 = Rq(u);
export const g = $$p0;
export const w = $$c1;