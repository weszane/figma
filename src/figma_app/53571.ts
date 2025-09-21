import { reportError } from '../905/11';
import { ServiceCategories as _$$e } from '../905/165054';
import { permissionScopeHandler, zk } from '../905/189185';
import { maybeCreateSavepoint } from '../905/294113';
import { getI18nString } from '../905/303541';
import { e as _$$e2 } from '../905/365408';
import { debugState } from '../905/407919';
import { f as _$$f } from '../905/436809';
import { handleAtomEvent } from '../905/502364';
import { subscribeMultipleAndAwaitAll } from '../905/553831';
import { n as _$$n } from '../905/917104';
import { postUserFlag } from '../905/985254';
import { atomStoreManager } from '../figma_app/27355';
import { DevModeActivity } from '../figma_app/43951';
import { isNotNullish } from '../figma_app/95419';
import { j } from '../figma_app/172303';
import { FEventType } from '../figma_app/191312';
import { trackFileEvent } from '../figma_app/314264';
import { S7 } from '../figma_app/379850';
import { fullscreenValue } from '../figma_app/455680';
import { canAccessFullDevMode } from '../figma_app/473493';
import { isDevModeFocusViewCopyActive } from '../figma_app/544649';
import { d as _$$d, cR, hv, pc } from '../figma_app/715641';
import { Multiplayer, SessionOrigin, HandoffBindingsCpp, BuildStatus } from '../figma_app/763686';
import { zi } from '../figma_app/867292';
import { d1, hj } from '../figma_app/888478';
function w({
  status: e,
  prevStatus: t,
  source: r,
  numNodesUpdated: n,
  nodeId: i,
  nodeType: a,
  isReadOnly: s,
  description: o,
  isEdited: d
}) {
  let c = debugState.getState();
  trackFileEvent('dev_handoff_edit_status', c.openFile?.key, c, {
    status: e,
    prevStatus: t,
    source: r,
    numNodesUpdated: n,
    nodeId: i,
    nodeType: a,
    isViewOnly: s,
    hasDescription: o !== '',
    description: o,
    isEdited: d
  }, {
    forwardToDatadog: !0
  });
}
async function O(e, t, r, n, d) {
  let u;
  let p = debugState.dispatch;
  let _ = debugState.getState();
  let h = _.openFile?.key || '';
  let m = d ?? void 0;
  let g = performance.now();
  if (atomStoreManager.set(pc, !0), t === BuildStatus.BUILD || t === BuildStatus.COMPLETED) {
    try {
      let e = await maybeCreateSavepoint(h, zi(t) ?? void 0, m, p, !0);
      u = e?.id;
      h && !u && reportError(_$$e.DEVELOPER_TOOLS, new Error('[Dev mode activity] createSavepoint returned no id'));
    } catch (e) {
      reportError(_$$e.DEVELOPER_TOOLS, new Error(`[Dev mode activity] Error creating version on status change: ${e.stack}`));
    }
  }
  let y = !1;
  permissionScopeHandler(zk.SYSTEM, 'store-status-activity', () => {
    _$$e2.recordStatusChange({
      fileKey: h,
      nodes: e,
      status: t,
      description: m,
      versionId: u
    }).then(() => {
      y = !0;
    }).catch(e => {
      reportError(_$$e.DEVELOPER_TOOLS, new Error(`[Dev mode activity] Error creating activity: ${e.stack}`));
    }).finally(() => {
      let t = performance.now() - g;
      trackFileEvent('dev_handoff_status_activity', h, _, {
        elapsedMs: t,
        status: r,
        source: n,
        savedVersion: !!u,
        savedActivity: y,
        nodeIds: e.map(e => e.id)
      }, {
        forwardToDatadog: !0
      });
      atomStoreManager.set(pc, !1);
    });
  });
}
function R(e) {
  switch (e) {
    case BuildStatus.BUILD:
      return 'ready_for_dev';
    case BuildStatus.COMPLETED:
      return 'completed';
    default:
      return 'none';
  }
}
async function $$L(e, t) {
  let r = e.map(({
    id: e,
    isUpdated: r
  }) => r ? {
    fileKey: t,
    nodeId: e
  } : null).filter(isNotNullish);
  if (r.length === 0) return {};
  let i = await subscribeMultipleAndAwaitAll(DevModeActivity, r);
  let a = {};
  i.forEach(({
    result: e
  }, t) => {
    if (e.data?.file.status === 'loaded') {
      let n = e.data.file.data?.devModeActivity.filter(e => e.activityType === FEventType.STATUS_CHANGE).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()) || [];
      let i = r[t];
      let s = n[0];
      i && s && (a[i.nodeId] = s.id);
    }
  });
  return a;
}
export async function $$P0({
  nodeIds: e,
  status: t,
  description: r,
  sourceForLogging: n,
  editScopeType: i
}) {
  let d = debugState.getState();
  let c = d.mirror.sceneGraph;
  let E = d.openFile?.key ?? '';
  let S = d.user?.id ?? '';
  let v = HandoffBindingsCpp.isReadOnly(SessionOrigin.NODE_STATUS);
  let A = R(t);
  let x = debugState.dispatch;
  if (t === BuildStatus.BUILD) {
    x(postUserFlag({
      has_marked_ready_for_dev: !0
    }));
    handleAtomEvent({
      id: 'marked_ready_for_dev',
      properties: {
        nodeIds: e
      }
    });
    let t = atomStoreManager.get(hj);
    if (t && e.includes(t)) {
      let e = atomStoreManager.get(d1);
      e.fn?.();
    }
  }
  let P = new Map();
  let D = new Map();
  let k = [];
  for (let r of e) {
    let e = c.get(r);
    if (e) {
      let n = e.getStatusInfo().status;
      P.set(r, e.hasBeenEditedSinceLastStatusChange);
      D.set(r, R(n));
      let i = S7(c, r, e.containingCanvas || '');
      let s = n === BuildStatus.BUILD && t === BuildStatus.BUILD;
      let o = '';
      if (e.containingCanvas) {
        let t = c.get(e.containingCanvas);
        t && (o = t.name);
      }
      k.push({
        id: r,
        name: e.name,
        type: e.type,
        pageName: o,
        prevStatus: n,
        previewBackground: i,
        isUpdated: s
      });
    }
  }
  let M = isDevModeFocusViewCopyActive();
  if (v || M) {
    let s = d.openFile;
    let o = {
      status: A,
      canAccessDevModeRaw: s?.canAccessFullDevMode,
      canAccessDevModeEntryPoint: s?.canAccessDevModeEntryPoint,
      canAccessDevMode: canAccessFullDevMode(d),
      fileRepoId: s?.fileRepoId,
      userOrgId: d.user?.org_id,
      currentTeamId: d.currentTeamId,
      currentUserOrgId: d.currentUserOrgId,
      source: n,
      numNodes: e.length,
      editScopeType: i,
      userIdForMultiplayer: S,
      linkAccess: s?.linkAccess,
      fileCanEdit: s?.canEdit,
      fileCanEditCanvas: s?.canEditCanvas,
      fileCanEditIgnoreEduGracePeriod: s?.canEditIgnoreEduGracePeriod,
      canManage: s?.canManage,
      canView: s?.canView,
      isTeamTemplate: s?.isTeamTemplate,
      isTryFile: s?.isTryFile,
      viewerExportRestricted: s?.viewerExportRestricted,
      fileHasPartialOrgUser: !!s?.currentPartialOrgUser,
      fileHasCurrentTeamUser: !!s?.currentTeamUser,
      hasEditRole: s?.hasEditRole?.data
    };
    trackFileEvent('temp_debug_set_status_view_only', s?.key, d, o);
    let l = !1;
    setTimeout(() => {
      l || trackFileEvent('temp_debug_set_status_view_only_failed', s?.key, d, o);
    }, 2e3);
    Multiplayer.sendSetNodeStatus(e, t, r ?? '', S);
    let [c] = await Promise.all([$$L(k, E), _$$n()]);
    if (l = !0, canAccessFullDevMode(d)) {
      for (let {
        id,
        name,
        type,
        pageName,
        prevStatus,
        previewBackground
      } of k) {
        _$$f.recordStatusChange({
          fileKey: E,
          nodeId: id,
          nodeName: name,
          nodeType: type,
          status: t,
          prevStatus,
          description: r || void 0,
          pageName,
          previewBackground,
          prevActivityId: c[id] || null
        });
      }
    }
    for (let {
      id,
      type
    } of (O(k, t, A, n, r), k)) {
      w({
        status: A,
        source: n,
        numNodesUpdated: e.length,
        nodeId: id,
        nodeType: type,
        isReadOnly: v,
        description: r ?? '',
        prevStatus: D.get(id) ?? A,
        isEdited: P.get(id) ?? !1
      });
    }
  } else {
    if (!navigator.onLine) {
      j('offlineSettingNodeStatus', !0, {
        message: getI18nString('dev_handoff.status.offline')
      });
      return;
    }
    permissionScopeHandler(i, 'set-nodes-status', () => {
      for (let {
        id
      } of k) {
        let n = c.get(id);
        n && n.setStatus(t, S, r ?? void 0);
      }
      fullscreenValue.triggerAction('commit');
    });
    let a = await $$L(k, E);
    for (let {
      id,
      name,
      type,
      pageName,
      prevStatus,
      previewBackground
    } of k) {
      canAccessFullDevMode(d) && _$$f.recordStatusChange({
        fileKey: E,
        nodeId: id,
        nodeName: name,
        nodeType: type,
        status: t,
        prevStatus,
        description: r || void 0,
        pageName,
        previewBackground,
        prevActivityId: a[id] || null
      });
    }
    for (let {
      id,
      type
    } of (O(k, t, A, n, r), k)) {
      w({
        status: A,
        source: n,
        numNodesUpdated: e.length,
        nodeId: id,
        nodeType: type,
        isReadOnly: v,
        description: r ?? '',
        prevStatus: D.get(id) ?? A,
        isEdited: P.get(id) ?? !1
      });
    }
  }
  !function (e) {
    let t = atomStoreManager.get(_$$d);
    let r = atomStoreManager.get(cR);
    let n = atomStoreManager.get(hv)?.data;
    e !== BuildStatus.BUILD || t || r || n || atomStoreManager.set(_$$d, !0);
  }(t);
}
export function $$D1(e, t) {
  return new Date(1e3 * e.lastUpdateUnixTimestamp) > t.createdAt;
}
export const L = $$P0;
export const y = $$D1;
