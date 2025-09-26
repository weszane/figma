import { Fonts } from "../figma_app/763686";
import { updateFontListAction } from "../figma_app/91703";
import { normalizeFontMetadata } from "../905/777093";
import { fullscreenPerfManager } from "../905/125218";
export function $$o0(e, t) {
  fullscreenPerfManager.time("updateFontListFileMetadata", () => {
    t.sharedFontsList = normalizeFontMetadata(t.sharedFontsList || []);
    e.dispatch(updateFontListAction(t));
    Fonts?.updateFontList({
      list: t.sharedFontsList,
      localizedToUnlocalized: []
    });
  });
}
export const n = $$o0;
