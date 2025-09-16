import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { AUTH_INIT } from "../905/194276";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { isValidWorkshopModeExpiration } from "../figma_app/789";
import { F } from "../905/224";
import { t as _$$t2 } from "../figma_app/579169";
import { openFileTeamAtom } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { Bi } from "../905/652992";
import { FEditorType } from "../figma_app/53721";
import { AuthModal } from "../905/749159";
import { Y } from "../905/513161";
import { DV } from "../905/739964";
export function $$y1(e) {
  let t = atomStoreManager.get(_$$t2).data ?? !1;
  let i = atomStoreManager.get(openFileTeamAtom);
  let h = e.getState().selectedView?.editorType === FEditorType.Cooper;
  let y = e.getState().selectedView?.editorType === FEditorType.Slides;
  let v = e.getState().selectedView?.editorType === FEditorType.Whiteboard;
  let I = e.getState().openFile;
  let E = I?.teamId ? e.getState().teams[I.teamId] : null;
  let x = e.getState().openFile?.editorType === FFileType.WHITEBOARD;
  let S = !e.getState().user;
  let w = isValidWorkshopModeExpiration(e.getState().openFile);
  x && S && w ? (e.dispatch(AUTH_INIT({
    origin: "open_session_video_upload",
    redirectUrl: customHistory.location.pathname,
    signedUpFromOpenSession: !0
  })), e.dispatch(showModalHandler({
    type: AuthModal,
    data: {
      headerText: getI18nString("fullscreen.toolbar.create_an_account_to_do_more_with_fig_jam")
    }
  }))) : t || i ? (() => {
    let t = $$b0(y, v, h);
    e.dispatch(showModalHandler({
      type: DV,
      data: {
        team: E,
        resource: t,
        editorType: FFileType.DESIGN,
        currentPlan: F.Plan.STARTER,
        upsellPlan: F.Plan.PRO
      }
    }));
    trackEventAnalytics("prototype.payment_upsell_modal_shown", {
      paywallFeature: t
    });
  })() : e.dispatch(showModalHandler({
    type: Y,
    data: {
      titleText: getI18nString("upsell.move_file_videos.move_file_to_upload_videos_title"),
      bodyText: getI18nString("upsell.move_file_videos.move_file_to_upload_videos_subtitle")
    }
  }));
}
export function $$b0(e, t, i) {
  return e ? Bi.VIDEOS_IN_SLIDES : t ? Bi.VIDEOS_IN_WHITEBOARD : i ? Bi.VIDEOS_IN_BUZZ : Bi.VIDEOS_IN_PROTOTYPES;
}
export const P = $$b0;
export const k = $$y1;