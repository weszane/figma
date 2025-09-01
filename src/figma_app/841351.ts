import { ServiceCategories as _$$e } from "../905/165054";
import { _em, glU, Oin, lyf, m1T, w3z, Nfd, Ez5, Egt } from "../figma_app/763686";
import { Xy } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { eU, zl } from "../figma_app/27355";
import { q as _$$q } from "../905/196201";
import { sx } from "../905/449184";
import { A as _$$A } from "../905/920142";
import { debugState } from "../905/407919";
import { En, mL } from "../figma_app/661371";
import { $D } from "../905/11";
import { x1 } from "../905/714362";
import { g as _$$g } from "../905/880308";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { _ as _$$_ } from "../905/170564";
import { Q } from "../905/463586";
import { F as _$$F } from "../905/302958";
import { nF } from "../905/350402";
import { sf } from "../905/929976";
import { Y6 } from "../figma_app/91703";
import { SR, EB, ne, BC, p0, Fm, ke as _$$ke, TO } from "../905/784363";
import { C2 } from "../905/760074";
import { tJ } from "../figma_app/741237";
import { nT, CO } from "../figma_app/53721";
import { NK } from "../figma_app/111825";
import { lE } from "../905/218608";
import { S as _$$S } from "../figma_app/787550";
import { W } from "../905/985740";
import { Vj } from "../905/561485";
import { s0 } from "../figma_app/115923";
import { n as _$$n } from "../905/815475";
import { Y5 } from "../figma_app/455680";
import { W5 } from "../figma_app/582924";
import { C as _$$C } from "../905/703182";
import { M4 } from "../905/713695";
import { U2 } from "../figma_app/193867";
let $$B5 = "current_version";
let $$G2 = new _$$q(40);
let $$V14 = eU("");
let $$H12 = M4.Query({
  fetch: async e => {
    let t = e.fileKey;
    if (!t) return null;
    let r = performance.now();
    let n = await W.getPaginatedVersions({
      ...e,
      fileKey: t,
      versionIds: e.versionIds?.join(",")
    });
    let i = performance.now() - r;
    sx("version_diffing_performance_metrics", {
      name: "Lego versions fetched",
      durationMs: i
    });
    return n.data.meta?.versions || [];
  },
  key: "fileVersionsPaginated"
});
export function $$z10(e, t, r, n) {
  return `${e}-${t}-${r.id}-${n}`;
}
export function $$W8(e, t) {
  let r = debugState.getState();
  let n = r.openFile?.key;
  let i = [t, r.mirror.sceneGraph.getInternalCanvas()?.guid].filter(e => !!e);
  if (!n || !t) return null;
  let a = $$z10(n, t, e, NK(r.fileVersion));
  if ($$G2.has(a)) return $$G2.get(a);
  let s = new Promise((r, s) => _$$n(`${e.canvas_url}&nodes_to_extract=${i.join(",")}`).then(([i, s, o]) => {
    let l = $$z10(n, t, e, o);
    let d = Promise.resolve({
      canvas: i,
      key: l
    });
    $$G2.$$delete(a);
    $$G2.set(l, d);
    r(d);
  }).catch(s));
  $$G2.set(a, s);
  return s;
}
export function $$K18(e) {
  let t = debugState.getState();
  let r = t.openFile?.key;
  let n = t.mirror.appModel.currentPage;
  if (!r || !n) return null;
  let i = $$z10(r, n, e, NK(t.fileVersion));
  $$G2.$$delete(i);
}
let Y = async (e, t, r, n) => {
  let i = new URLSearchParams();
  i.set("diff_version", C2().toString());
  i.set("from_file_version_id", t);
  i.set("migration_version", `${r}`);
  n && n.length > 0 && i.set("nodes_to_diff", n.join(","));
  let {
    data: {
      meta: {
        checkpoint_diff
      }
    }
  } = await XHR.post(`/api/file_diff/v2/checkpoint_diff/${e}?${i.toString()}`);
  return checkpoint_diff;
};
let $ = async e => {
  let t = new Date().getTime();
  let {
    data
  } = await XHR.crossOriginGetAny(e, null, {
    responseType: "arraybuffer"
  });
  let n = new Date().getTime();
  sx("versioning_performance_metrics", {
    name: "download_diff",
    durationMs: n - t
  }, {
    forwardToDatadog: !0
  });
  return data;
};
export function $$X17(e) {
  for (let t of e.versions) if (t.id === e.activeId) return t;
  if (e.linkedVersion && e.activeId === e.linkedVersion.id) return e.linkedVersion;
}
async function q(e, t, r) {
  let n = await Y(t.getState().openFile.key, e, t.getState().fileVersion, r);
  if (!n.signed_url) return "Error viewing what's changed between file versions.";
  let a = !!t.getState().openFile?.canEdit;
  let s = new Date().getTime();
  let [o] = await Promise.all([$(n.signed_url), W5(_em.DEBUG_TOOL)]);
  let l = new Date().getTime();
  return (sx("versioning_performance_metrics", {
    name: "download_diff_and_load_pages",
    durationMs: l - s,
    isEditor: a
  }, {
    forwardToDatadog: !0
  }), glU.loadHistoryChangesState(o)) ? "" : "Error loading HistoryChangesState into memory.";
}
export function $$J1(e, t) {
  if (e) return t.versions.find(t => t.id === e);
}
export async function $$Z13(e, t) {
  let r = Date.now();
  let n = $$J1(e, t.getState().versionHistory);
  if (!n) return {
    elapsedTime: Date.now() - r,
    numPagesWithChanges: 0
  };
  let a = await q(n.id, t);
  let s = Date.now() - r;
  if (a) {
    x1("version diffing", "error checking for visible changes", {
      error: a
    });
    return Error("Error checking for visible changes");
  }
  return {
    elapsedTime: s,
    numPagesWithChanges: glU.getPagesWithChanges().length
  };
}
let $$Q11 = nF(async (e, t) => {
  let r;
  let n;
  let a = e.getState();
  let o = () => {
    e.dispatch(sf({
      ...a.selectedView,
      compareLatest: void 0
    }));
  };
  let l = () => {
    e.dispatch(Y6({
      mode: Oin.OFF
    }));
    o();
  };
  let d = a.user;
  if (!getFeatureFlags().version_diffing || !getFeatureFlags().xr_debounce_threshold || !d || "fullscreen" !== a.selectedView.view || a.selectedView.editorType === nT.Whiteboard || a.mirror.appModel.topLevelMode === lyf.HISTORY || a.mirror.appModel.activeCanvasEditModeType === m1T.COMPARE_CHANGES) return l();
  let {
    openFileKey
  } = t;
  try {
    let e = await _$$S.getLastInteraction({
      openFileKey
    });
    r = e.data.meta.last_view_at;
    n = e.data.meta.last_edit_at;
  } catch {
    l();
  }
  let p = _$$A(r);
  let _ = _$$A(n);
  let h = p > _ ? p : _;
  if (!h.isValid() || h < _$$A().subtract(7, "days")) return l();
  let m = W.getPaginatedVersions({
    fileKey: openFileKey,
    createdAtOrBefore: h.toISOString()
  });
  let g = W.getPaginatedVersions({
    fileKey: openFileKey
  });
  let [f, E] = await Promise.all([m, g]);
  let y = f.data.meta.versions;
  let b = E.data.meta.versions;
  if (!(y.length > 0 && b.length > 0)) return l();
  let T = y[0];
  let v = b[0];
  if (!(_$$A(v.created_at) > _$$A(T.created_at)) || v.user_id === d.id || v.participating_users_array?.includes(d.handle)) return l();
  e.dispatch($$eo6());
  e.dispatch($$ep16({
    fromVersionId: T.id
  }));
});
let $$ee4 = nF(async (e, t) => {
  let r = e.getState();
  let n = r.user;
  if (!getFeatureFlags().version_diffing || !n || "fullscreen" !== r.selectedView.view || r.selectedView.editorType === nT.Whiteboard || r.mirror.appModel.topLevelMode === lyf.HISTORY || r.mirror.appModel.activeCanvasEditModeType === m1T.COMPARE_CHANGES) return;
  let {
    openFileKey
  } = t;
  let o = _$$A(t.versionHistory.lastEdited);
  let l = _$$A(t.versionHistory.lastViewed);
  let u = l > o ? l : o;
  if (!u.isValid() || u < _$$A().subtract(7, "days")) return;
  let p = Date.now();
  let _ = W.getPaginatedVersions({
    fileKey: openFileKey,
    pageSize: 1,
    createdAtOrBefore: u.toISOString()
  });
  let h = W.getPaginatedVersions({
    fileKey: openFileKey,
    pageSize: 1
  });
  let [g, f] = await Promise.all([_, h]);
  let E = g.data.meta.versions;
  let y = f.data.meta.versions;
  if (E.length > 0 && y.length > 0) {
    let t = E[0];
    let r = y[0];
    if (_$$A(r.created_at) > _$$A(t.created_at) && r.user_id !== n.id && !r.participating_users_array?.includes(n.handle)) {
      let n = {
        fileKey: openFileKey,
        eventId: _$$g(),
        lastEdited: o.toISOString(),
        lastViewed: l.toISOString(),
        lastSeenVersion: t.id,
        lastSeenCreatedAt: t.created_at,
        latestVersion: r.id,
        latestCreatedAt: r.created_at
      };
      sx("Version Diffing Changed Since Last View", {
        ...n,
        durationMs: Date.now() - p
      }, {
        forwardToDatadog: !0
      });
      e.dispatch(ei({
        lastSeenVersionId: t.id,
        trackingProps: n
      }));
    }
  }
});
export function $$et15() {
  let e = debugState;
  let t = e.getState().versionHistory;
  let r = $$X17(t);
  let n = t.fetchedPageIds || new Set();
  let i = e.getState().mirror.appModel.currentPage;
  return r && r.id !== $$B5 ? en(r, e, n, i, Xy) : Promise.reject("Version history inactive");
}
let er = null;
function en(e, t, r, n, s, l) {
  return new Promise((d, c) => {
    let u = e.canvas_url;
    u || c("Couldn't get canvas URL for version.");
    let p = s === Xy;
    let _ = !p && r.size > 0;
    let h = s ?? n;
    let m = t.getState().mirror.appModel.currentPage;
    "LOAD_NEW_VERSION" === l && m && !s && (h = m);
    let g = !t.getState().mirror.appModel.pagesList.every(e => r.has(e.nodeId)) && !r.has(h);
    if (!g) {
      t.dispatch(SR({
        isLoadingPage: !1
      }));
      return d();
    }
    u += `&nodes_to_extract=${h}`;
    let f = t.getState().selectedView;
    _$$C.markVersionHistoryLoadStart(f.fileKey, f.nodeId, l);
    let E = _$$n(u).then(([e]) => {
      if (E === er) {
        var a;
        er = null;
        let s = t.getState().selectedView.editorType;
        if ((a = t.getState().mirror.appModel.topLevelMode) === lyf.HISTORY || a === lyf.DEV_HANDOFF) {
          let a;
          if (_) glU.applyFileToCurrentScene(e); else if (zl.set($$V14, ""), !glU.loadFigFileForPreview(e)) return c("Error loading this version into memory.");
          _$$C.markVersionHistoryLoadEnd();
          let l = t.getState().selectedView.fileKey;
          a = s === nT.Whiteboard ? "figjam" : s === nT.Design || s === nT.Slides ? CO(s) : "unknown";
          let u = t.getState().selectedView.devModeFocusId ? "focus_view" : "version_history";
          _$$C.report(l, a, u);
          g && (p ? t.getState().mirror.appModel.pagesList.forEach(e => r.add(e.nodeId)) : r.add(h), t.dispatch(EB({
            fetchedPageIds: r
          })), t.dispatch(SR({
            isLoadingPage: !1
          })), d());
          f.nodeId && f.nodeId !== n && tJ([f.nodeId]);
          f.devModeFocusId && w3z.focusOnNode(f.devModeFocusId, !1);
          t.dispatch(Y6({
            mode: Oin.OFF
          }));
        }
      }
    });
    er = E;
  });
}
let ei = nF(async (e, t) => {
  let r;
  let n;
  let {
    lastSeenVersionId,
    trackingProps
  } = t;
  try {
    let t = await $$Z13(lastSeenVersionId, e);
    r = t.elapsedTime;
    n = t.numPagesWithChanges;
  } catch (e) {
    return;
  }
  if (0 === n) {
    sx("Version Diffing Notification Skipped", {
      ...t.trackingProps,
      pagesWithChanges: 0,
      durationMs: r
    }, {
      forwardToDatadog: !0
    });
    return;
  }
  sx("Version Diffing Notification Shown", {
    ...t.trackingProps,
    pagesWithChanges: n,
    durationMs: r
  }, {
    forwardToDatadog: !0
  });
  e.dispatch(Q.enqueueFront({
    notification: {
      type: _$$_.SEE_WHATS_CHANGED,
      message: "See what's changed since the last time you viewed this file",
      acceptCallback: () => {
        sx("Version Diffing Notification Opened", trackingProps);
        e.dispatch($$eo6());
        e.dispatch($$ep16({
          fromVersionId: lastSeenVersionId
        }));
      },
      dismissCallback: () => {
        sx("Version Diffing Notification Dismissed", trackingProps);
      }
    }
  }));
});
let $$ea7 = nF((e, {
  direction: t
}) => {
  let r = e.getState();
  let n = U2(r.selectedView);
  n && !r.versionHistory.loading && (e.dispatch(ne({
    loading: !0
  })), En(`/api/versions/${n}`, 30, r.versionHistory, t).then(r => {
    n === U2(e.getState().selectedView) && e.dispatch(BC({
      history: r,
      direction: t
    }));
  }));
});
let es = nF(e => {
  e.dispatch(p0());
  e.dispatch($$ea7({
    direction: mL
  }));
});
let $$eo6 = nF((e, t) => {
  Y5.triggerAction("enter-history-mode");
  Y5.triggerAction("deselect-all");
  e.dispatch(es());
  Vj(e.getState().selectedView) && zl.set(s0, Nfd.FILE);
  Ez5?.uiState().showPropertiesPanel.set(!0);
  sx("Toggle Version History", {
    source: t?.source || null
  });
});
let $$el0 = nF(e => {
  e.dispatch($$ed9());
  e.dispatch(_$$F.dequeue({
    matchType: "versions"
  }));
  glU.exitVersionHistoryMode(e.getState().openFile?.canEdit ?? !1);
});
let $$ed9 = nF(e => {
  e.dispatch($$ec3({
    id: $$B5
  }));
  e.dispatch($$ep16({
    fromVersionId: void 0
  }));
  Egt.clearSelection();
  e.dispatch(_$$F.dequeue({
    matchType: "comparing"
  }));
  e.dispatch(_$$F.dequeue({
    matchType: "view_changes"
  }));
  e.dispatch(Y6({
    mode: Oin.OFF
  }));
});
let $$ec3 = nF(async (e, t) => {
  if (t.id === $$B5) {
    zl.set($$V14, "");
    glU.loadFigFileForPreview(new Uint8Array());
    let r = e.getState();
    e.dispatch(sf({
      ...r.selectedView,
      versionId: void 0,
      compareVersionId: void 0
    }));
    e.dispatch(Fm({
      id: t.id
    }));
    return;
  }
  e.dispatch(Fm({
    id: t.id
  }));
  let r = e.getState();
  let a = t.versions ? t.versions.find(e => e.id === t.id) : $$X17(r.versionHistory);
  if (!a) return;
  e.dispatch(sf({
    ...r.selectedView,
    compareVersionId: void 0
  }));
  let s = e.getState().mirror.appModel.currentPage;
  let l = t.eventType;
  let d = !!e.getState().selectedView.devModeFocusId;
  await en(a, e, new Set(), s, t.nodeId, l).catch(t => {
    if (d) {
      let e = `[${l}] Failed load version for preview in focus view: ${t}`;
      $D(_$$e.DEVELOPER_TOOLS, Error(`[LOAD_VERSION_FOR_PREVIEW] ${e}`));
    }
    e.dispatch(_$$s.error(t));
  });
});
let $$eu19 = nF((e, t) => {
  let r = t.version;
  let i = t.currentPageNodeId;
  let a = t.fetchedPageIds;
  let s = t.eventType;
  en(r, e, a, i, void 0, s).then(() => e.dispatch(_$$ke({
    version: t.version
  }))).catch(t => {
    let r = `[${s}] Failed load fig file for preview: ${t}`;
    $D(_$$e.SCENEGRAPH_AND_SYNC, Error(`[VERSION_HISTORY_INCREMENTAL_LOAD] ${r}`));
    e.dispatch(_$$s.error(t));
  });
});
let $$ep16 = nF(async (e, t) => {
  if (!getFeatureFlags().version_diffing) {
    e.dispatch(TO(t));
    return;
  }
  let r = t.fromVersionId;
  if (!r) return;
  let n = $$J1(r, e.getState().versionHistory);
  if (!n) return;
  let a = new Date().getTime();
  let o = await q(n.id, e);
  if (o) {
    e.dispatch(_$$s.error(o));
    return;
  }
  let l = new Date().getTime();
  let c = e.getState().selectedView.editorType;
  let u = lE[lE.COMPARE_CHANGES];
  if (sx("versioning_performance_metrics", {
    name: "load_diff",
    durationMs: l - a,
    fromCheckpointKey: n.checkpoint_key,
    nodesToDiff: "all",
    editorType: c,
    source: u
  }, {
    forwardToDatadog: !0
  }), n.canvas_url) {
    let e = glU.getChangesToCompareFromHistoryChangesState();
    if (e.size > 0) {
      let t = Array.from(e).join(",");
      let r = `${n.canvas_url}&nodes_to_extract=${t}`;
      _$$n(r).then(([e]) => {
        glU.loadPartialHistoryScene(e);
      });
    }
  }
  let p = glU.startComparingChanges() ? "" : "Error starting history compare";
  if (p) {
    e.dispatch(_$$s.error(p));
    return;
  }
  let _ = e.getState();
  e.dispatch(sf({
    ..._.selectedView,
    compareVersionId: r,
    compareLatest: void 0
  }));
  sx("Version History Compare Start", {
    fromVersionId: r
  });
  e.dispatch(TO(t));
});
export const Eg = $$el0;
export const HF = $$J1;
export const Ht = $$G2;
export const Nb = $$ec3;
export const Ul = $$ee4;
export const V_ = $$B5;
export const _b = $$eo6;
export const _h = $$ea7;
export const _t = $$W8;
export const cU = $$ed9;
export const cn = $$z10;
export const hZ = $$Q11;
export const kT = $$H12;
export const ke = $$Z13;
export const tP = $$V14;
export const un = $$et15;
export const vF = $$ep16;
export const vw = $$X17;
export const w_ = $$K18;
export const yH = $$eu19; 
