import { xv } from "../figma_app/701982";
import { xv as _$$xv } from "../figma_app/701982";
import { ServiceCategories as _$$e } from "../905/165054";
import { NC } from "../905/17179";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { P } from "../905/724705";
import { reportError } from "../905/11";
import { logInfo } from "../905/714362";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { vv } from "../905/890368";
import { VisualBellActions } from "../905/302958";
import { q0 } from "../figma_app/976345";
import { U2 } from "../figma_app/545293";
import { os } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { Pg } from "../figma_app/314264";
import { z$ } from "../figma_app/840917";
import { d9 } from "../figma_app/740025";
import { y as _$$y, J } from "../905/235145";
import { H } from "../905/202181";
import { createOptimistThunk } from "../905/350402";
let $$A1 = createOptimistThunk(async () => {
  try {
    await XHR.post("/api/user/migrate_personal_drafts");
  } catch (e) {
    logInfo("planSpaces", "Personal drafts not auto-migrated for user", e);
  }
});
let $$x2 = createOptimistThunk(async e => {
  try {
    let t = e.getState();
    for (let n of t.authedUsers.orderedIds) if (await z$(n)) {
      w();
      let n = _$$xv;
      e.dispatch(showModalHandler({
        type: n,
        data: {
          users: Object.values(t.authedUsers.byId),
          onLogOut: () => {
            e.dispatch(N());
          }
        }
      }));
      return;
    }
  } catch (e) {
    reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("Failed to get autosave files for user"));
  }
  e.dispatch(N());
});
let N = createOptimistThunk(e => {
  if (desktopAPIInstance) {
    customHistory.redirect("/logout");
    return;
  }
  let t = d9(e.getState().selectedView);
  H.logoutAllUsers().then(() => {
    Pg();
    U2.clear();
    new P().sendToAllTabs(_$$y, J);
    customHistory.redirect(`${t ? "/community" : ""}/?fuid=`);
  }).catch(t => {
    let r = t.data?.message || getI18nString("file_browser.file_browser_actions.logout_error_without_email");
    e.dispatch(VisualBellActions.enqueue({
      error: !0,
      message: r
    }));
  });
});
let $$C5 = createOptimistThunk(async (e, t) => {
  try {
    if (await z$(t.user.id)) {
      w();
      let n = xv;
      e.dispatch(showModalHandler({
        type: n,
        data: {
          users: [t.user],
          onLogOut: () => {
            e.dispatch(O(t));
          }
        }
      }));
    } else e.dispatch(O(t));
  } catch (r) {
    reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("Failed to get autosave files for user"));
    e.dispatch(O(t));
  }
});
let w = () => {
  try {
    trackEventAnalytics("autosave_modal_shown", {}, {
      forwardToDatadog: !0,
      batchRequest: !0
    });
  } catch (e) {}
};
let O = createOptimistThunk((e, t) => {
  H.logoutOneUser(t.user.id).then(r => {
    e.dispatch(os(r.data.meta));
    e.dispatch(q0(r.data.meta));
    r.data?.meta?.users?.length === 0 && (Pg(), U2.clear());
    let n = r.data?.meta?.redirect_url;
    n ? customHistory.redirect(n) : e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("file_browser.file_browser_actions.successfully_logged_out", {
        emailAddress: t.user.email
      })
    }));
  }).catch(r => {
    let n = r.data?.message || getI18nString("file_browser.file_browser_actions.logout_error_with_email", {
      emailAddress: t.user.email
    });
    e.dispatch(VisualBellActions.enqueue({
      error: !0,
      message: n
    }));
  });
});
let $$R4 = NC("DELETE_USER_LOADING");
let $$L3 = NC("USER_ERASE_SECRETS");
let $$P0 = NC("USER_TOGGLE_TWO_FACTOR");
let $$D6 = vv;
export const C$ = $$P0;
export const FY = $$A1;
export const S5 = $$x2;
export const WJ = $$L3;
export const hz = $$R4;
export const ql = $$C5;
export const yJ = $$D6;