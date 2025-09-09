import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { gE } from "../5132/642384";
import { _ as _$$_ } from "../905/456042";
import { showModalHandler } from "../905/156213";
import { selectCurrentUser } from "../905/372672";
import { U } from "../figma_app/45218";
import { T } from "../5132/203178";
import { Jm } from "../figma_app/387599";
export function $$u0(e, l = !1, i = !1, _ = !1) {
  let h = useDispatch();
  let m = Jm();
  let f = T();
  let g = selectCurrentUser();
  if (!U(e)) return () => {};
  let v = gE(l => {
    trackEventAnalytics("try_it_out_drafts_picker_menu_opened", {
      hubFileId: e.id,
      searchSessionId: m
    });
    h(showModalHandler({
      type: _$$_,
      data: {
        payload: l
      }
    }));
  }, {
    isFreemiumPreview: i,
    adminReviewerOverride: l,
    skipWorkspaceSelection: f || _,
    userId: g?.id
  });
  return () => {
    h(v(e));
  };
}
export const A = $$u0;