import { ServiceCategories as _$$e } from "../905/165054";
import { trackEventAnalytics } from "../905/449184";
import { O as _$$O } from "../905/539306";
import { isMobileUA } from "../figma_app/778880";
import { reportError } from "../905/11";
import { Ts } from "../905/194276";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { t as _$$t2 } from "../905/706346";
import { _ as _$$_ } from "../905/456042";
import { wr, Ux } from "../figma_app/387599";
import { y as _$$y } from "../905/444931";
import { createOptimistThunk } from "../905/350402";
import { popModalStack, showModalHandler } from "../905/156213";
import { RH, gU } from "../figma_app/147952";
import { B as _$$B } from "../905/808775";
import { hb, VT } from "../905/551193";
import { nm } from "../905/352022";
import { HE } from "../905/967587";
import { F as _$$F2 } from "../905/504462";
import { canMemberOrg } from "../figma_app/642025";
import { hasOrgRole, getCurrentPluginVersion, getPluginVersion } from "../figma_app/300692";
import { Y9 } from "../figma_app/502247";
import { isWidget, hasMonetizedResourceMetadata } from "../figma_app/45218";
import { mapFileTypeToEditorType, FEditorType, mapEditorTypeToFileType } from "../figma_app/53721";
import { O as _$$O2 } from "../905/833838";
import { ManifestEditorType } from "../figma_app/155287";
import { G as _$$G } from "../figma_app/124713";
import { registerModal } from "../905/102752";
import { l as _$$l } from "../905/690005";
import { yX } from "../figma_app/918700";
import { j as _$$j } from "../905/689815";
import { A as _$$A } from "../6828/903761";
import { A as _$$A2 } from "../6828/529628";
let j = () => async e => {
  let t = "org-admin-team-creation";
  e(VisualBellActions.enqueue({
    message: getI18nString("resources_tab.create_team_modal.team_creation_loading"),
    type: t,
    icon: VisualBellIcon.SPINNER
  }));
  try {
    let r = (await _$$G.createStarterTeam()).data.meta;
    e(VisualBellActions.dequeue({
      matchType: t
    }));
    e(popModalStack());
    return r;
  } catch (r) {
    e(VisualBellActions.dequeue({
      matchType: t
    }));
    e(popModalStack());
    e(VisualBellActions.enqueue({
      message: getI18nString("general.an_error_occurred"),
      error: !0
    }));
    return Promise.reject();
  }
};
let U = registerModal(yX);
let B = (e, t, r) => n => {
  n(showModalHandler({
    type: U,
    data: {
      confirmationTitle: getI18nString("resources_tab.create_team_modal.modal_title", {
        extensionName: e
      }),
      content: getI18nString("resources_tab.create_team_modal.content", {
        orgName: t
      }),
      confirmText: getI18nString("general.continue"),
      onConfirm: () => {
        n(j()).then(r);
      },
      hideCancel: !0
    }
  }));
};
let G = createOptimistThunk(async (e, t) => {
  let {
    workspaces,
    plans
  } = t;
  let i = e.getState();
  let {
    authedUsers,
    orgById
  } = i;
  let o = workspaces.map(e => ({
    ...e,
    workspaceName: HE(i, e),
    user: authedUsers.byId[e.userId]
  }));
  let l = await Promise.all(o.map(async e => {
    let r = e.orgId && orgById[e.orgId];
    let a = !0;
    let o = !0;
    if (r && (a = await hb(t.resource, r), o = VT(t.resource, r)), hasOrgRole(t.resource) && !canMemberOrg(e.orgId, i, e.userId)) return;
    let l = _$$y(e, mapFileTypeToEditorType(t.editorType), i, plans);
    l.publicPluginsOrWidgetDisabled = !a;
    l.extensionRequestsAllowed = o;
    return l;
  }));
  let d = [];
  if (l.forEach(e => {
    void 0 !== e && d.push(e);
  }), d.length <= 1) {
    let e = d.length ? d[0] : void 0;
    t.onSelectWorkspace(e);
    return;
  }
  e.dispatch(showModalHandler({
    type: _$$_,
    data: {
      payload: {
        extension: t.resource,
        workspaces: d,
        onSelectWorkspace: t.onSelectWorkspace,
        mode: "new_file"
      }
    }
  }));
});
let $$V2 = createOptimistThunk((e, t) => {
  if (isMobileUA) {
    window.location.href = "/login";
    return;
  }
  let r = t.isWidget ? getI18nString("community.logged_out.sign_up_modal_widget_header") : getI18nString("community.logged_out.sign_up_modal_plugin_header");
  e.dispatch(Ts({
    origin: "plugin_try_signed_out"
  }));
  e.dispatch(showModalHandler({
    type: _$$l,
    data: {
      headerText: r,
      icon: t.isWidget ? _$$A2 : _$$A,
      dispatch: e.dispatch,
      redirectPath: t.redirectPath
    }
  }));
});
createOptimistThunk((e, t) => {
  let r = e.getState().user;
  let n = t.extension;
  let i = "isWidget" in n ? !!n.isWidget : !!n.is_widget;
  let a = "currentPluginVersion" in n ? n.currentPluginVersion : getCurrentPluginVersion(n);
  if (!a || !r) return;
  let s = "hasPlaygroundFile" in a ? a.hasPlaygroundFile : a.playground_file_version_id;
  let o = t.fullscreenEditorType === FEditorType.DevHandoff;
  let l = {
    fullscreenEditorType: t.fullscreenEditorType,
    tryPluginId: n.id,
    tryPluginVersionId: a.id,
    tryPluginName: a.name ?? "",
    isWidget: i,
    isPlaygroundFile: !!(s || o),
    fuid: r.id,
    tryPluginParams: void 0
  };
  Y9(r.id, !1, null);
  _$$j(l, null, null, r.id);
  (() => {
    let s = {
      storeInRecentsKey: _$$B(t.fullscreenEditorType),
      id: n.id,
      version: a.id,
      currentUserId: r.id
    };
    i ? e.dispatch(RH(s)) : e.dispatch(gU(s));
  })();
});
let $$H0 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = r.user;
  let i = t.extension;
  let s = "isWidget" in i ? !!i.isWidget : !!i.is_widget;
  let o = "currentPluginVersion" in i ? i.currentPluginVersion : getCurrentPluginVersion(i);
  if (!o || !n) return;
  let l = () => {
    let r = {
      storeInRecentsKey: _$$B(t.fullscreenEditorType),
      id: i.id,
      version: o.id,
      currentUserId: n.id
    };
    s ? e.dispatch(RH(r)) : e.dispatch(gU(r));
  };
  let d = "hasPlaygroundFile" in o ? o.hasPlaygroundFile : o.playground_file_version_id;
  let c = t.fullscreenEditorType === FEditorType.DevHandoff;
  let u = {
    fullscreenEditorType: t.fullscreenEditorType,
    tryPluginId: i.id,
    tryPluginVersionId: o.id,
    tryPluginName: o.name ?? "",
    isWidget: s,
    isPlaygroundFile: !!(d || c),
    fuid: n.id,
    tryPluginParams: void 0
  };
  let p = r.plans.filter(e => e.plan_type === _$$O2.TEAM).map(e => {
    let t = _$$O(e, n.id);
    return {
      ...t,
      workspaceName: HE(r, t),
      user: n
    };
  });
  if (0 === p.length) {
    e.dispatch(B(o.name, r.orgById[r.currentUserOrgId].name, e => {
      Y9(n.id, !1, null, void 0, e.id);
      _$$j(u, null, e.id, n.id);
      l();
    }));
    return;
  }
  1 === p.length ? (Y9(n.id, !1, null, void 0, p[0].teamId ?? null), _$$j(u, null, p[0].teamId ?? null, n.id), l()) : e.dispatch(showModalHandler({
    type: _$$_,
    data: {
      payload: {
        workspaces: p,
        onSelectWorkspace: e => {
          Y9(n.id, !1, null, void 0, e?.teamId ?? null);
          _$$j(u, null, e?.teamId ?? null, n.id);
          l();
        },
        mode: "new_file"
      }
    }
  }));
});
let $$z3 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = r.user;
  let i = t.extension;
  let a = "isWidget" in i ? !!i.isWidget : !!i.is_widget;
  let s = "currentPluginVersion" in i ? i.currentPluginVersion : getCurrentPluginVersion(i);
  if (!s || !n) return;
  let o = "hasPlaygroundFile" in s ? s.hasPlaygroundFile : s.playground_file_version_id;
  let l = t.fullscreenEditorType === FEditorType.DevHandoff;
  let d = {
    fullscreenEditorType: t.fullscreenEditorType,
    tryPluginId: i.id,
    tryPluginVersionId: s.id,
    tryPluginName: s.name ?? "",
    isWidget: a,
    isPlaygroundFile: !!(o || l),
    fuid: n.id,
    tryPluginParams: void 0
  };
  let c = r.plans.find(e => e.plan_type === _$$O2.ORG && e.plan_id === r.currentUserOrgId);
  Y9(n.id, !1, c.plan_id, void 0, null);
  _$$j(d, c.plan_id, null, n.id);
  (() => {
    let r = {
      storeInRecentsKey: _$$B(t.fullscreenEditorType),
      id: i.id,
      version: s.id,
      currentUserId: n.id
    };
    a ? e.dispatch(RH(r)) : e.dispatch(gU(r));
  })();
});
let $$W1 = createOptimistThunk(async (e, t) => {
  let r = e.getState();
  let {
    user
  } = r;
  let s = wr(r);
  let l = Ux(r);
  let u = isWidget(t.resource);
  let p = getPluginVersion(t.resource);
  if (!user) {
    e.dispatch($$V2({
      isWidget: u
    }));
    return;
  }
  let _ = () => {
    let r = {
      storeInRecentsKey: _$$B(t.fullscreenEditorType),
      id: t.resource.id,
      version: p.id,
      currentUserId: user.id
    };
    u ? e.dispatch(RH(r)) : e.dispatch(gU(r));
  };
  let m = [];
  let g = null;
  try {
    g = await e.dispatch(nm(!0));
    m = _$$F2(r, t.resource, g);
  } catch (r) {
    let t = r?.data?.message || getI18nString("file_browser.error_try_again");
    e.dispatch(VisualBellActions.enqueue({
      message: t,
      type: "error"
    }));
  }
  let f = !t.orgId && m.length > 1 && !t.fileKey;
  let v = {
    fullscreenEditorType: t.fullscreenEditorType,
    tryPluginId: t.resource.id,
    tryPluginVersionId: p.id,
    tryPluginName: p.name,
    tryPluginEditorType: p.manifest.editorType?.[0] ?? ManifestEditorType.FIGMA,
    isWidget: u,
    isPlaygroundFile: !!t.isPlaygroundFile,
    tryPluginParams: void 0,
    fileKey: t.fileKey
  };
  if (trackEventAnalytics("CTA Clicked", {
    name: "Try it out",
    pluginId: t.resource.id,
    isWidget: u,
    editorType: t.fullscreenEditorType,
    isMonetized: hasMonetizedResourceMetadata(t.resource),
    fileKey: t.fileKey,
    search_session_id: s,
    query_id: l
  }), f) {
    trackEventAnalytics("try_it_out_drafts_picker_menu_opened", {
      pluginId: t.resource.id,
      isWidget: u,
      searchSessionId: s
    });
    e.dispatch(G({
      plans: g,
      workspaces: m,
      resource: t.resource,
      editorType: mapEditorTypeToFileType(t.fullscreenEditorType),
      onSelectWorkspace: e => {
        e ? (v.fuid = e.userId, Y9(e.userId, !1, e.orgId, void 0, e.teamId ?? null), _$$j(v, e.orgId, e.teamId ?? null, e.userId)) : _$$j(v, null, null, user.id);
        _();
      }
    }));
  } else if (t.fileKey) {
    v.fuid = t.userId ?? user.id;
    _$$j(v, null, null, v.fuid);
  } else if (t.orgId) {
    v.fuid = t.userId ?? user.id;
    let n = r.orgById[t.orgId];
    if (n && !(await hb(t.resource, n))) {
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("community.resource.you_do_not_have_permissions_to_use_this_resource"),
        error: !0
      }));
      return;
    }
    Y9(user.id, !1, t.orgId);
    _$$j(v, t.orgId, null, user.id);
  } else if (1 === m.length) {
    let n = m[0];
    if (n.orgId && !VT(t.resource, r.orgById[n.orgId]) && !(await hb(t.resource, r.orgById[n.orgId]))) {
      e.dispatch(B(p.name, HE(r, n), e => {
        Y9(user.id, !1, null, void 0, e.id);
        _$$j(v, null, e.id, user.id);
        _();
      }));
      return;
    }
    Y9(n.userId, !1, n.orgId, void 0, n.teamId ?? null);
    _$$j(v, n.orgId, n.teamId ?? null, n.userId);
  } else {
    reportError(_$$e.COMMUNITY, Error("No workspaces found"));
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("file_browser.error_try_again"),
      error: !0
    }));
  }
});
export function $$K4(e, t) {
  e(showModalHandler({
    type: _$$t2,
    data: {
      onContinue: t
    }
  }));
}
export const JA = $$H0;
export const aI = $$W1;
export const cx = $$V2;
export const lx = $$z3;
export const s0 = $$K4;