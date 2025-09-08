import { Fonts } from "../figma_app/763686";
import { nN } from "../figma_app/91703";
import { F8 } from "../905/777093";
import { xK } from "../905/125218";
export function $$o0(e, t) {
  xK.time("updateFontListFileMetadata", () => {
    t.sharedFontsList = F8(t.sharedFontsList || []);
    e.dispatch(nN(t));
    Fonts?.updateFontList({
      list: t.sharedFontsList,
      localizedToUnlocalized: []
    });
  });
}
export const n = $$o0;