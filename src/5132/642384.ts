import { trackEventAnalytics } from "../905/449184";
import { dR } from "../905/508367";
import { customHistory } from "../905/612521";
import { isMobileUA } from "../figma_app/778880";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { Hx } from "../905/321397";
import { VisualBellActions } from "../905/302958";
import { wr } from "../figma_app/387599";
import { JJ } from "../figma_app/471982";
import { YN } from "../figma_app/275462";
import { y as _$$y } from "../905/444931";
import { M5 } from "../figma_app/350203";
import { nm } from "../905/352022";
import { F as _$$F } from "../905/504462";
import { getDesignFileUrlWithOptions } from "../905/612685";
import { FFileType } from "../figma_app/191312";
import { Y9 } from "../figma_app/502247";
import { hasMonetizedResourceMetadata } from "../figma_app/45218";
import { $A, vt } from "../905/862883";
import { H } from "../905/548668";
async function j(e, l, i, t, a, r) {
  let s = [];
  let c = null;
  try {
    c = await nm(!0)(i);
    s = _$$F(t, l, c);
  } catch (l) {
    let e = l?.data?.message || getI18nString("file_browser.error_try_again");
    i(VisualBellActions.enqueue({
      message: e,
      type: "error"
    }));
  }
  let o = (t.authedActiveCommunityProfile?.associated_users ?? []).filter(e => e.user_id in t.authedUsers.byId).length > 1;
  if (s.length > 1 || o) {
    let i = JJ(l.viewer_mode);
    "sites" === i && (s = s.filter(e => {
      if (e?.teamId) {
        let l = t.teams[e.teamId];
        return l?.pro_team;
      }
      return !0;
    }));
    e({
      onSelectWorkspace: a,
      workspaces: s.map(e => _$$y(e, i, t, c, r)),
      mode: "new_file"
    });
  } else a(s[0]);
}
let $$T1 = (e, l = {
  isFreemiumPreview: !1,
  adminReviewerOverride: !1,
  skipWorkspaceSelection: !1,
  userId: void 0
}) => i => async (n, d) => {
  let u = d();
  function h(e) {
    let d = {
      headers: {
        ...XHR.defaults.headers
      }
    };
    let _ = {};
    e && (d.headers["X-Figma-User-ID"] = e.userId, _.org_id = e.orgId, _.team_id = e.teamId);
    !0 === l.adminReviewerOverride && (_.admin_reviewer_override = !0);
    XHR.post(`/api/hub_files/v2/${i.id}/copy`, _, d).then(({
      data: c
    }) => {
      let d = c.meta;
      let h = hasMonetizedResourceMetadata(i);
      let f = !0 !== h ? "none" : !0 === l.isFreemiumPreview ? "trial" : "paid";
      trackEventAnalytics(M5.HUB_FILE_DUPLICATED, {
        hubFileId: i.id,
        figFileKey: d.key,
        isMonetized: h,
        paidStatus: f,
        searchSessionId: wr(u),
        file_team_id: _.team_id,
        org_id: _.org_id,
        file_folder_id: d.folder_id
      });
      "whiteboard" === d.editor_type && n(Hx({
        storeInRecentsKey: $A.FigJam,
        id: i.id,
        type: vt.CommunityResource
      }));
      let g = getDesignFileUrlWithOptions(d);
      g = dR(g, {
        "is-community-duplicate": "1",
        fuid: e?.userId || l.userId || ""
      });
      !0 === l.isFreemiumPreview && (g = dR(g, {
        "is-freemium-preview": "1"
      }));
      customHistory.redirect(g, isMobileUA ? void 0 : "_blank");
    });
  }
  YN() && l.skipWorkspaceSelection ? h() : await j(e, i, n, u, h);
};
let $$A2 = (e, l = {
  skipWorkspaceSelection: !1,
  userId: void 0
}) => i => async (t, c) => {
  let n = c();
  function o(e) {
    let t = H(FFileType.SLIDES, i.library_key);
    e ? (Y9(e.userId, !1, e.orgId, void 0, e.teamId ?? null), t = dR(t, {
      fuid: e.userId
    })) : l.userId && (t = dR(t, {
      fuid: l.userId
    }));
    customHistory.redirect(t, isMobileUA ? void 0 : "_blank");
  }
  YN() && l.skipWorkspaceSelection ? o() : await j(e, i, t, n, o);
};
let $$S0 = (e, l = {
  skipWorkspaceSelection: !1,
  userId: void 0
}) => i => async (t, c) => {
  let n = c();
  function o(e) {
    let t = `/file/new?initial-library-key=${i.library_key}`;
    e ? (Y9(e.userId, !1, e.orgId, void 0, e.teamId ?? null), t = dR(t, {
      fuid: e.userId
    })) : l.userId && (t = dR(t, {
      fuid: l.userId
    }));
    customHistory.redirect(t, isMobileUA ? void 0 : "_blank");
  }
  YN() && l.skipWorkspaceSelection ? o() : await j(e, i, t, n, o, !0);
};
export const Q4 = $$S0;
export const gE = $$T1;
export const u5 = $$A2;