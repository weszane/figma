import { throwTypeError } from "../figma_app/465776";
import { localStorageRef } from "../905/657224";
import a from "../vendor/946678";
import o from "../vendor/626715";
import { HY } from "../vendor/156872";
import { createOptimistThunk } from "../905/350402";
import { ts } from "../figma_app/49598";
import { W9, b6 } from "../figma_app/559491";
import { PI } from "../figma_app/933328";
import { loadingStatePutLoading, loadingStatePutSuccess } from "../figma_app/714946";
import { D as _$$D } from "../905/775228";
import { nM, QN, Vu, Kq, jS, f0, jX, Ks, lD, WR, cu, pj, F9, v8, ay, KA } from "../figma_app/147952";
import { MF } from "../figma_app/646357";
import { getCurrentPluginVersionId } from "../figma_app/300692";
import { gJ, Jl, SO, JG } from "../figma_app/190980";
import { HubTypeEnum } from "../figma_app/45218";
import { NO_TEAM } from "../figma_app/633080";
import { ITemplateType, FDocumentType, FaceToolType } from "../905/862883";
import { q } from "../figma_app/446378";
var s = a;
var l = o;
let x = "recent-library-items-design";
let S = "recent-library-items";
let w = "recent-library-items-slides";
let C = "recent-library-items-cooper";
let T = createOptimistThunk(async (e, t, {
  loadingKey: i
}) => {
  let n = e.getState();
  let {
    orgId,
    teamId
  } = t;
  if (!orgId && !teamId) return;
  let s = n.recentlyUsed.templates[t.key];
  let o = s.filter(e => e.type === ITemplateType.CommunityResource);
  let l = s.filter(e => e.type === ITemplateType.TeamTemplate);
  let d = new Set();
  for (let e of o) n.hubFiles[e.id] || d.add(e.id);
  if (0 === d.size && 0 === l.length) return;
  e.dispatch(loadingStatePutLoading({
    key: i
  }));
  let c = [];
  let p = Array.from(d).map(async t => {
    try {
      await e.dispatch(ts({
        hubFileId: t
      }));
    } catch (e) {
      c.push(t);
    }
  });
  let m = !1;
  let _ = new Set();
  if (0 !== l.length) {
    let t = {
      fileKeys: l.map(e => e.key).join(","),
      ...(orgId ? {
        orgId
      } : teamId ? {
        teamId
      } : {})
    };
    let i = await q.getRecents(t).catch(e => {
      m = !0;
      console.error("Error fetching recent custom templates", e);
    });
    if (i) {
      let t = i?.data.meta.templates;
      if (t.length < l.length) for (let e of l) t.find(t => t.file_key === e.key) || _.add(e.key);
      e.dispatch(_$$D(t));
    }
  }
  await Promise.all(p);
  let A = m || 0 !== _.size;
  if (0 !== c.length || A) {
    let i = new Set();
    for (let e of c) i.add(e);
    let n = s.filter(e => e.type === ITemplateType.TeamTemplate ? !m && !_.has(e.key) : !i.has(e.id));
    e.dispatch(nM({
      storeInRecentsKey: t.key,
      recentTemplates: n
    }));
  }
  e.dispatch(loadingStatePutSuccess({
    key: i
  }));
});
let k = createOptimistThunk(async (e, t, {
  loadingKey: i
}) => {
  let n = e.getState();
  let r = {};
  for (let e of n.recentlyUsed.widgets[t.key]) {
    let t = getCurrentPluginVersionId(n.publishedCanvasWidgetVersions, e.id);
    !(t && n.publishedCanvasWidgetVersions[e.id]?.[t]) && e.version && (r[e.id] || (r[e.id] = []), e.version && r[e.id].push(e.version));
  }
  if (e.dispatch(loadingStatePutLoading({
    key: i
  })), 0 === Object.keys(r).length) {
    e.dispatch(loadingStatePutSuccess({
      key: i
    }));
    return;
  }
  Object.keys(r).length > 0 && (await W9(r, n.currentUserOrgId), e.dispatch(b6({
    widgetIDToVersions: r
  })), e.dispatch(loadingStatePutSuccess({
    key: i
  })));
});
let R = [];
let N = [];
let P = [];
let O = [];
if (localStorageRef) {
  let e = localStorageRef.getItem(x);
  let t = localStorageRef.getItem(S);
  let i = localStorageRef.getItem(w);
  let n = localStorageRef.getItem(C);
  try {
    R = e && JSON.parse(e) || [];
    N = t && JSON.parse(t) || [];
    P = i && JSON.parse(i) || [];
    O = n && JSON.parse(n) || [];
    R = B(R);
    N = B(N);
    P = B(P);
    O = B(O);
  } catch (e) {}
}
let D = {
  [FDocumentType.Design]: R,
  [FDocumentType.FigJam]: N,
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: P,
  [FDocumentType.Cooper]: O
};
let L = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: gJ(FDocumentType.FigJam, HubTypeEnum.WIDGET),
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: [],
  [FDocumentType.Cooper]: [],
  fetchedResources: {}
};
let F = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: gJ(FDocumentType.FigJam, HubTypeEnum.PLUGIN),
  [FDocumentType.Handoff]: gJ(FDocumentType.Handoff, HubTypeEnum.PLUGIN),
  [FDocumentType.Slides]: [],
  [FDocumentType.Cooper]: [],
  fetchedResources: {}
};
let M = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: gJ(FDocumentType.FigJam, HubTypeEnum.HUB_FILE),
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: gJ(FDocumentType.Slides, HubTypeEnum.HUB_FILE),
  [FDocumentType.Cooper]: []
};
let j = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: gJ(FDocumentType.FigJam, FaceToolType.FACE_STAMP),
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: [],
  [FDocumentType.Cooper]: []
};
let U = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: gJ(FDocumentType.FigJam, FaceToolType.WHITEBOARD_TOOL),
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: [],
  [FDocumentType.Cooper]: []
};
function B(e) {
  return e.filter(e => !!e.library_key);
}
function V(e) {
  let {
    currentUserId,
    resourceId,
    currentVersionId,
    editorKey,
    resourceKey
  } = e;
  let [[d], c] = s()(gJ(editorKey, resourceKey), e => e.type === ITemplateType.CommunityResource && e.id === resourceId);
  let u = [{
    id: resourceId,
    version: currentVersionId,
    run_by_user_ids: l()([...(d?.run_by_user_ids || []), ...(currentUserId ? [currentUserId] : [])]),
    last_added_at_by_user_id: {
      ...(d?.last_added_at_by_user_id || {}),
      ...(currentUserId ? {
        [currentUserId]: Date.now()
      } : {})
    },
    type: ITemplateType.CommunityResource
  }, ...c].slice(0, resourceKey === HubTypeEnum.PLUGIN ? 21 : 12);
  let p = Jl(editorKey, resourceKey);
  p && localStorageRef?.setItem(p, JSON.stringify(u));
  return u;
}
function G(e, t, i) {
  let n = gJ(e, t);
  if (!i) return n;
  n = n.filter(e => e.id !== i);
  let a = Jl(e, t);
  a && localStorageRef?.setItem(a, JSON.stringify(n));
  return n;
}
let $$z1 = {
  fetchWidgetsMetadata: k,
  fetchTemplatesMetadata: T
};
let $$H0 = HY({
  libraryItems: function (e = D, t) {
    if (PI.matches(t)) {
      if (!t.payload.storeInRecentsKey) return e;
      let i = MF(t.payload.item);
      if (!i.key) return e;
      let {
        node_id,
        team_id
      } = t.payload.item;
      let o = t.payload.item.library_key;
      let [[l], d] = s()(e[t.payload.storeInRecentsKey], e => e.library_key === o && e.node_id === node_id);
      let c = [{
        ...i,
        team_id: team_id || NO_TEAM,
        library_key: t.payload.item.library_key,
        node_id,
        last_added_at_by_user_id: {
          ...(l?.last_added_at_by_user_id || {}),
          ...(t.payload.userId ? {
            [t.payload.userId]: Date.now()
          } : {})
        }
      }, ...d].slice(0, 21);
      localStorageRef?.setItem(function (e) {
        switch (e) {
          case FDocumentType.Design:
            return x;
          case FDocumentType.Slides:
            return w;
          case FDocumentType.FigJam:
            return S;
          case FDocumentType.Cooper:
            return C;
          default:
            return S;
        }
      }(t.payload.storeInRecentsKey), JSON.stringify(c));
      return {
        ...e,
        [t.payload.storeInRecentsKey]: c
      };
    }
    return e;
  },
  widgets: function (e = L, t) {
    if (QN.matches(t)) {
      let {
        storeInRecentsKey
      } = t.payload;
      let n = HubTypeEnum.WIDGET;
      if (!Jl(storeInRecentsKey, n)) return e;
      let r = V({
        currentUserId: t.payload.currentUserId,
        resourceId: t.payload.id,
        currentVersionId: t.payload.version,
        editorKey: storeInRecentsKey,
        resourceKey: n
      });
      return {
        ...e,
        [t.payload.storeInRecentsKey]: r
      };
    }
    if (Vu.matches(t)) return {
      ...e,
      [t.payload.storeInRecentsKey]: t.payload.recentResources
    };
    if (Kq.matches(t)) {
      let {
        resourceId,
        storeInRecentsKey
      } = t.payload;
      let r = G(storeInRecentsKey, HubTypeEnum.WIDGET, resourceId);
      return {
        ...e,
        [storeInRecentsKey]: r
      };
    }
    return jS.matches(t) ? {
      ...e,
      [t.payload.storeInRecentsKey]: gJ(t.payload.storeInRecentsKey, HubTypeEnum.WIDGET)
    } : f0.matches(t) ? {
      ...e,
      fetchedResources: {
        ...e.fetchedResources,
        [t.payload.id]: {
          version: t.payload.version,
          status: t.payload.status
        }
      }
    } : e;
  },
  plugins: function (e = F, t) {
    if (jX.matches(t)) {
      let {
        storeInRecentsKey
      } = t.payload;
      let n = HubTypeEnum.PLUGIN;
      if (!Jl(storeInRecentsKey, n)) return e;
      let r = V({
        currentUserId: t.payload.currentUserId,
        resourceId: t.payload.id,
        currentVersionId: t.payload.version || void 0,
        editorKey: storeInRecentsKey,
        resourceKey: n
      });
      return {
        ...e,
        [t.payload.storeInRecentsKey]: r
      };
    }
    if (Ks.matches(t)) return {
      ...e,
      [t.payload.storeInRecentsKey]: t.payload.recentResources
    };
    if (lD.matches(t)) {
      let {
        resourceId,
        storeInRecentsKey
      } = t.payload;
      let r = G(storeInRecentsKey, HubTypeEnum.PLUGIN, resourceId);
      return {
        ...e,
        [storeInRecentsKey]: r
      };
    }
    return WR.matches(t) ? t.payload.storeInRecentsKey === FDocumentType.Design ? e : {
      ...e,
      [t.payload.storeInRecentsKey]: gJ(t.payload.storeInRecentsKey, HubTypeEnum.PLUGIN)
    } : cu.matches(t) ? {
      ...e,
      fetchedResources: {
        ...e.fetchedResources,
        [t.payload.id]: {
          version: t.payload.version,
          status: t.payload.status
        }
      }
    } : e;
  },
  templates: function (e = M, t) {
    if (pj.matches(t)) {
      let i;
      let {
        storeInRecentsKey
      } = t.payload;
      let o = Jl(storeInRecentsKey, HubTypeEnum.HUB_FILE);
      if (!o) throw Error("Recently used templates currently only implemented for FigJam and Slides");
      let {
        payload
      } = t;
      let {
        type,
        userId
      } = l;
      let [[u], p] = s()(gJ(storeInRecentsKey, HubTypeEnum.HUB_FILE), e => {
        let {
          type: _type
        } = e;
        switch (_type) {
          case ITemplateType.CommunityResource:
            return payload.type === ITemplateType.CommunityResource && e.id === payload.id;
          case ITemplateType.TeamTemplate:
            return payload.type === ITemplateType.TeamTemplate && e.key === payload.file_key;
          default:
            throwTypeError(_type);
        }
      });
      let m = {
        ...(u?.last_added_at_by_user_id || {}),
        ...(userId ? {
          [userId]: Date.now()
        } : {})
      };
      switch (type) {
        case ITemplateType.CommunityResource:
          i = {
            id: payload.id,
            type: ITemplateType.CommunityResource,
            last_added_at_by_user_id: m
          };
          break;
        case ITemplateType.TeamTemplate:
          i = {
            key: payload.file_key,
            type: ITemplateType.TeamTemplate,
            last_added_at_by_user_id: m
          };
          break;
        default:
          throwTypeError(type);
      }
      let h = [i, ...p].slice(0, 4);
      localStorageRef?.setItem(o, JSON.stringify(h));
      return {
        ...e,
        [t.payload.storeInRecentsKey]: h
      };
    }
    return nM.matches(t) ? {
      ...e,
      [t.payload.storeInRecentsKey]: t.payload.recentTemplates
    } : e;
  },
  faceStamps: function (e = j, t) {
    if (F9.matches(t)) {
      if (t.payload.storeInRecentsKey !== FDocumentType.FigJam) throw Error("Recently used facestamps currently only implemented for Figjam.");
      let [[i], n] = s()(e[t.payload.storeInRecentsKey], e => e.user.id === t.payload.item.user.id);
      let a = [{
        id: t.payload.item.user.id,
        type: ITemplateType.FaceStamp,
        user: t.payload.item.user,
        last_added_at_by_user_id: {
          ...(i?.last_added_at_by_user_id || {}),
          ...(t.payload.currentUserId ? {
            [t.payload.currentUserId]: Date.now()
          } : {})
        }
      }, ...n].slice(0, 20);
      localStorageRef?.setItem(SO, JSON.stringify(a));
      return {
        ...e,
        [t.payload.storeInRecentsKey]: a
      };
    }
    return v8.matches(t) ? {
      ...e,
      [t.payload.storeInRecentsKey]: t.payload.recentFaceStamps
    } : e;
  },
  whiteboardTools: function (e = U, t) {
    if (ay.matches(t)) {
      if (t.payload.storeInRecentsKey !== FDocumentType.FigJam) throw Error("Recently used whiteboard tools currently only implemented for Figjam.");
      let [[i], n] = s()(e[t.payload.storeInRecentsKey], e => e.id === t.payload.item.id);
      let a = [{
        id: t.payload.item.id,
        type: ITemplateType.WhiteboardTool,
        last_added_at_by_user_id: {
          ...(i?.last_added_at_by_user_id || {}),
          ...(t.payload.currentUserId ? {
            [t.payload.currentUserId]: Date.now()
          } : {})
        }
      }, ...n];
      localStorageRef?.setItem(JG, JSON.stringify(a));
      return {
        ...e,
        [t.payload.storeInRecentsKey]: a
      };
    }
    return KA.matches(t) ? {
      ...e,
      [t.payload.storeInRecentsKey]: t.payload.recentWhiteboardTools
    } : e;
  }
});
export const Cs = $$H0;
export const cd = $$z1;