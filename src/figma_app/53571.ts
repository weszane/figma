import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { zIx, w3z, SES, h3O } from "../figma_app/763686";
import { l7, zk } from "../905/189185";
import { zl } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { subscribeMultipleAndAwaitAll } from "../905/553831";
import { $D } from "../905/11";
import { YQ } from "../905/502364";
import { t as _$$t } from "../905/303541";
import { j } from "../figma_app/172303";
import { hj, d1 } from "../figma_app/888478";
import { tn } from "../figma_app/473493";
import { np } from "../figma_app/544649";
import { pc, d as _$$d, cR, hv } from "../figma_app/715641";
import { zi } from "../figma_app/867292";
import { b as _$$b } from "../905/985254";
import { ds } from "../figma_app/314264";
import { Y5 } from "../figma_app/455680";
import { n as _$$n } from "../905/917104";
import { FEventType } from "../figma_app/191312";
import { WND } from "../figma_app/43951";
import { m as _$$m } from "../905/294113";
import { e as _$$e2 } from "../905/365408";
import { f as _$$f } from "../905/436809";
import { S7 } from "../figma_app/379850";
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
  ds("dev_handoff_edit_status", c.openFile?.key, c, {
    status: e,
    prevStatus: t,
    source: r,
    numNodesUpdated: n,
    nodeId: i,
    nodeType: a,
    isViewOnly: s,
    hasDescription: "" !== o,
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
  let h = _.openFile?.key || "";
  let m = d ?? void 0;
  let g = performance.now();
  if (zl.set(pc, !0), t === zIx.BUILD || t === zIx.COMPLETED) try {
    let e = await _$$m(h, zi(t) ?? void 0, m, p, !0);
    u = e?.id;
    h && !u && $D(_$$e.DEVELOPER_TOOLS, Error("[Dev mode activity] createSavepoint returned no id"));
  } catch (e) {
    $D(_$$e.DEVELOPER_TOOLS, Error("[Dev mode activity] Error creating version on status change: " + e.stack));
  }
  let y = !1;
  l7(zk.SYSTEM, "store-status-activity", () => {
    _$$e2.recordStatusChange({
      fileKey: h,
      nodes: e,
      status: t,
      description: m,
      versionId: u
    }).then(() => {
      y = !0;
    }).catch(e => {
      $D(_$$e.DEVELOPER_TOOLS, Error("[Dev mode activity] Error creating activity: " + e.stack));
    }).$$finally(() => {
      let t = performance.now() - g;
      ds("dev_handoff_status_activity", h, _, {
        elapsedMs: t,
        status: r,
        source: n,
        savedVersion: !!u,
        savedActivity: y,
        nodeIds: e.map(e => e.id)
      }, {
        forwardToDatadog: !0
      });
      zl.set(pc, !1);
    });
  });
}
function R(e) {
  switch (e) {
    case zIx.BUILD:
      return "ready_for_dev";
    case zIx.COMPLETED:
      return "completed";
    default:
      return "none";
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
  if (0 === r.length) return {};
  let i = await subscribeMultipleAndAwaitAll(WND, r);
  let a = {};
  i.forEach(({
    result: e
  }, t) => {
    if (e.data?.file.status === "loaded") {
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
  let E = d.openFile?.key ?? "";
  let S = d.user?.id ?? "";
  let v = w3z.isReadOnly(SES.NODE_STATUS);
  let A = R(t);
  let x = debugState.dispatch;
  if (t === zIx.BUILD) {
    x(_$$b({
      has_marked_ready_for_dev: !0
    }));
    YQ({
      id: "marked_ready_for_dev",
      properties: {
        nodeIds: e
      }
    });
    let t = zl.get(hj);
    if (t && e.includes(t)) {
      let e = zl.get(d1);
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
      let i = S7(c, r, e.containingCanvas || "");
      let s = n === zIx.BUILD && t === zIx.BUILD;
      let o = "";
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
  let M = np();
  if (v || M) {
    let s = d.openFile;
    let o = {
      status: A,
      canAccessDevModeRaw: s?.canAccessFullDevMode,
      canAccessDevModeEntryPoint: s?.canAccessDevModeEntryPoint,
      canAccessDevMode: tn(d),
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
    ds("temp_debug_set_status_view_only", s?.key, d, o);
    let l = !1;
    setTimeout(() => {
      l || ds("temp_debug_set_status_view_only_failed", s?.key, d, o);
    }, 2e3);
    h3O.sendSetNodeStatus(e, t, r ?? "", S);
    let [c] = await Promise.all([$$L(k, E), _$$n()]);
    if (l = !0, tn(d)) for (let {
      id,
      name,
      type,
      pageName,
      prevStatus,
      previewBackground
    } of k) _$$f.recordStatusChange({
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
    for (let {
      id,
      type
    } of (O(k, t, A, n, r), k)) w({
      status: A,
      source: n,
      numNodesUpdated: e.length,
      nodeId: id,
      nodeType: type,
      isReadOnly: v,
      description: r ?? "",
      prevStatus: D.get(id) ?? A,
      isEdited: P.get(id) ?? !1
    });
  } else {
    if (!navigator.onLine) {
      j("offlineSettingNodeStatus", !0, {
        message: _$$t("dev_handoff.status.offline")
      });
      return;
    }
    l7(i, "set-nodes-status", () => {
      for (let {
        id
      } of k) {
        let n = c.get(id);
        n && n.setStatus(t, S, r ?? void 0);
      }
      Y5.triggerAction("commit");
    });
    let a = await $$L(k, E);
    for (let {
      id,
      name,
      type,
      pageName,
      prevStatus,
      previewBackground
    } of k) tn(d) && _$$f.recordStatusChange({
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
    for (let {
      id,
      type
    } of (O(k, t, A, n, r), k)) w({
      status: A,
      source: n,
      numNodesUpdated: e.length,
      nodeId: id,
      nodeType: type,
      isReadOnly: v,
      description: r ?? "",
      prevStatus: D.get(id) ?? A,
      isEdited: P.get(id) ?? !1
    });
  }
  !function (e) {
    let t = zl.get(_$$d);
    let r = zl.get(cR);
    let n = zl.get(hv)?.data;
    e !== zIx.BUILD || t || r || n || zl.set(_$$d, !0);
  }(t);
}
export function $$D1(e, t) {
  return new Date(1e3 * e.lastUpdateUnixTimestamp) > t.createdAt;
}
export const L = $$P0;
export const y = $$D1;