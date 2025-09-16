import { createActionCreator } from "../905/73481";
import { logger } from "../905/651849";
import { XHR } from "../905/910117";
import { resolveMessage } from "../905/231762";
import { nM as _$$nM, pj as _$$pj, Hx as _$$Hx } from "../905/321397";
import { createOptimistThunk } from "../905/350402";
import { Qi } from "../figma_app/559491";
import { R } from "../905/542113";
import { n as _$$n } from "../figma_app/740025";
import { Vi } from "../figma_app/364284";
import { getPluginVersion, resolveFrameworkType } from "../figma_app/300692";
import { gJ, ul } from "../figma_app/190980";
import { HubTypeEnum, isWidget } from "../figma_app/45218";
import { FaceToolType, FetchStatus } from "../905/862883";
let $$f3 = createActionCreator("SET_RECENT_WHITEBOARD_TOOLS");
let $$E25 = createOptimistThunk((e, t) => {
  let r = gJ(t.storeInRecentsKey, FaceToolType.WHITEBOARD_TOOL);
  e.dispatch($$f3({
    storeInRecentsKey: t.storeInRecentsKey,
    recentWhiteboardTools: r
  }));
});
let $$y13 = createActionCreator("ADD_WHITEBOARD_TOOL_TO_RECENTS");
let $$b24 = createActionCreator("SET_RECENT_FACE_STAMPS");
let $$T18 = createOptimistThunk((e, t) => {
  let r = gJ(t.storeInRecentsKey, FaceToolType.FACE_STAMP);
  e.dispatch($$b24({
    storeInRecentsKey: t.storeInRecentsKey,
    recentFaceStamps: r
  }));
});
let $$I0 = createActionCreator("ADD_FACE_STAMP_TO_RECENTS");
let $$S11 = createActionCreator("SYNC_RECENT_PLUGINS");
let $$v1 = createOptimistThunk((e, t) => {
  let r = gJ(t.storeInRecentsKey, HubTypeEnum.PLUGIN);
  e.dispatch($$N5({
    storeInRecentsKey: t.storeInRecentsKey,
    recentResources: r
  }));
  let n = r.map(e => e.id);
  e.dispatch($$D9({
    resourceType: HubTypeEnum.PLUGIN,
    resourceIds: n
  }));
  e.dispatch($$S11(t));
});
let $$A19 = createActionCreator("SYNC_RECENT_WIDGETS");
let $$x12 = createOptimistThunk((e, t) => {
  let r = gJ(t.storeInRecentsKey, HubTypeEnum.WIDGET);
  e.dispatch($$C10({
    storeInRecentsKey: t.storeInRecentsKey,
    recentResources: r
  }));
  let n = r.map(e => e.id);
  e.dispatch($$D9({
    resourceType: HubTypeEnum.WIDGET,
    resourceIds: n
  }));
  e.dispatch($$A19(t));
});
let $$N5 = createActionCreator("SET_RECENT_PLUGINS");
let $$C10 = createActionCreator("SET_RECENT_WIDGETS");
let $$w22 = _$$nM;
let $$O23 = _$$pj;
let $$R2 = _$$Hx;
let $$L14 = createActionCreator("ADD_FETCHED_PLUGIN_VERSION");
let $$P15 = createActionCreator("ADD_FETCHED_WIDGET_VERSION");
let $$D9 = createOptimistThunk((e, t) => {
  $$H8(e, t);
});
let $$k20 = createActionCreator("ADD_PLUGIN_TO_RECENTS");
let $$M17 = createOptimistThunk((e, t) => {
  e.dispatch($$D9({
    resourceType: HubTypeEnum.PLUGIN,
    resourceIds: [t.id]
  }));
  t.skipPluginRun || G(t.id, t.currentUserId, e.getState().currentUserOrgId, e.getState().publishedPlugins[t.id], e.getState().recentlyUsed.plugins[t.storeInRecentsKey], !!t.isDevelopment, e.dispatch);
  e.dispatch($$k20(t));
});
let $$F6 = createActionCreator("ADD_WIDGETS_TO_RECENTS");
let $$j7 = createOptimistThunk((e, t) => {
  e.dispatch($$D9({
    resourceType: HubTypeEnum.WIDGET,
    resourceIds: [t.id]
  }));
  t.skipPluginRun || G(t.id, t.currentUserId, e.getState().currentUserOrgId, e.getState().publishedWidgets[t.id], e.getState().recentlyUsed.widgets[t.storeInRecentsKey], !!t.isDevelopment, e.dispatch);
  e.dispatch($$F6(t));
});
let $$U21 = createActionCreator("REMOVE_RECENTLY_USED_PLUGIN");
let $$B4 = createActionCreator("REMOVE_RECENTLY_USED_WIDGET");
let G = (e, t, r, n, o, l, d) => {
  if (n && n.current_user_has_run || !t || Vi(e) || l) return;
  let u = o.find(t => t.id === e);
  u?.run_by_user_ids?.includes(t) || XHR.post(`/api/plugin_runs/${e}`, {
    org_id: r
  }).then(({
    data: t
  }) => {
    d(R({
      resourceId: e,
      userFirstRanAt: t.meta.created_at
    }));
  }).catch(e => {
    logger.error(resolveMessage(e));
  });
};
let $$V16 = (e, t) => r => {
  let n = getPluginVersion(e);
  let i = (n.manifest?.editorType ?? []).map(resolveFrameworkType);
  let a = isWidget(e) ? $$j7 : $$M17;
  i.forEach(i => r(a({
    storeInRecentsKey: i,
    id: e.id,
    version: n.id,
    currentUserId: t
  })));
};
export function $$H8(e, t) {
  let r = {};
  let n = ({
    id: n,
    version: i,
    status: a
  }) => {
    let s = t.resourceType === HubTypeEnum.PLUGIN ? $$L14 : $$P15;
    i && (r[n] = i);
    return e.dispatch(s({
      id: n,
      version: i,
      status: a
    }));
  };
  let i = [];
  if (t.resourceIds.forEach(a => {
    let s = t.resourceType === HubTypeEnum.PLUGIN ? e.getState().installedPluginVersions.plugins[a] : void 0;
    if (s) {
      n({
        id: a,
        version: s,
        status: FetchStatus.FETCHED
      });
      return;
    }
    let o = t.resourceType === HubTypeEnum.PLUGIN ? e.getState().recentlyUsed.plugins.fetchedResources[a] : e.getState().recentlyUsed.widgets.fetchedResources[a];
    o && o.status !== FetchStatus.NOT_FETCHED && o.status !== FetchStatus.FETCHING && (o.status !== FetchStatus.FETCHED || o.version) ? o.version && (r[a] = o.version) : i.push(a);
  }), !i.length) return Promise.resolve(r);
  i.forEach(e => {
    n({
      id: e,
      status: FetchStatus.FETCHING
    });
  });
  let s = {
    ids: i,
    org_id: e.getState().currentUserOrgId,
    include_pending: !0
  };
  return XHR.post(`/api/${_$$n(t.resourceType)}/batch`, s).then(({
    data: t
  }) => (e.dispatch(Qi({
    publishedPlugins: t.meta,
    src: "fetchExtensionVersions",
    overrideInstallStatus: !0
  })), i.forEach(e => {
    let r;
    let i = t.meta.find(t => t.id === e);
    i && (r = ul(i));
    n({
      id: e,
      version: r,
      status: FetchStatus.FETCHED
    });
  }), r)).catch(() => (i.forEach(e => {
    n({
      id: e,
      status: FetchStatus.NOT_FETCHED
    });
  }), {}));
}
export const F9 = $$I0;
export const HQ = $$v1;
export const Hx = $$R2;
export const KA = $$f3;
export const Kq = $$B4;
export const Ks = $$N5;
export const QN = $$F6;
export const RH = $$j7;
export const TN = $$H8;
export const Vg = $$D9;
export const Vu = $$C10;
export const WR = $$S11;
export const aF = $$x12;
export const ay = $$y13;
export const cu = $$L14;
export const f0 = $$P15;
export const fR = $$V16;
export const gU = $$M17;
export const gr = $$T18;
export const jS = $$A19;
export const jX = $$k20;
export const lD = $$U21;
export const nM = $$w22;
export const pj = $$O23;
export const v8 = $$b24;
export const vZ = $$E25;