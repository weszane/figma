import { throwError } from "../figma_app/465776";
import { glU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import s from "../vendor/223926";
import { lg, Hb, zE, X7 } from "../figma_app/646357";
import { w5 } from "../figma_app/345997";
import { O } from "../905/566074";
import { M$, PW, E8 } from "../figma_app/633080";
var o = s;
function p(e, t) {
  return t?.has(e.node_id);
}
class m {
  constructor(e) {
    this.addItem = (e, t, i) => {
      if (t[e.type] && t[e.type][i]) {
        t[e.type][i].push(e);
        return this.shouldReturnEarlyOnUpdate;
      }
      throwError("Unexpected library item type: " + e.type);
    };
    this.publishItem = (e, t) => this.addItem(e, t, M$.PUBLISH);
    this.unpublishItem = (e, t) => this.addItem(e, t, M$.UNPUBLISH);
    this.getPendingLibraryUpdates = (e, t, i, n, r, s, m, h, f, _) => {
      let A = {
        [PW.STATE_GROUP]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        },
        [PW.COMPONENT]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        },
        [PW.STYLE]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        },
        [PW.VARIABLE]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        },
        [PW.VARIABLE_SET]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        },
        [PW.MODULE]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        },
        [PW.RESPONSIVE_SET]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        },
        [PW.CODE_COMPONENT]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        },
        [PW.MANAGED_STRING]: {
          [M$.PUBLISH]: [],
          [M$.UNPUBLISH]: []
        }
      };
      if (!h) return A;
      let y = e => Object.values(e).filter(e => O(e.type) && p(e, _?.itemsToPublish));
      let b = _?.overridePublishPermissions || w5(h.team_id ? f[h.team_id] : null);
      let v = y(b ? t : {});
      let I = y(b ? e : {});
      let E = y(i);
      let x = y(r);
      let S = getFeatureFlags().dse_module_publish ? y(s) : [];
      let w = y(m);
      if (_?.unpublishAll) {
        for (let e of [...v, ...I, ...E, ...x, ...S, ...w]) e.status === E8.NOT_STAGED || e.status === E8.NEW || e.type === PW.COMPONENT && e.containing_frame?.containingStateGroup?.nodeId || this.unpublishItem(e, A);
        return A;
      }
      let C = new Set(Object.keys(_?.moveRemappings || {}));
      for (let e of E) {
        if (g(e, C, _?.forcePublish)) continue;
        let t = e.status;
        if (t === E8.DELETED) {
          if (this.unpublishItem(e, A)) return A;
        } else if (lg(t) && this.publishItem(e, A)) return A;
      }
      let T = function (e) {
        let t = new Map();
        for (let i of e) {
          if (i.deletedFromSceneGraph) continue;
          let e = i.containing_frame?.containingStateGroup?.nodeId;
          if (!e) continue;
          let n = t.get(e);
          n || (n = [], t.set(e, n));
          n.push(i);
        }
        return t;
      }(Object.values(t));
      let k = o()(Object.values(n), e => e.variableSetId);
      for (let e of I) {
        if (g(e, C, _?.forcePublish)) continue;
        let t = e.status;
        let i = e.node_id;
        let n = T.get(i) ?? [];
        if (!Hb(t)) {
          if (t === E8.DELETED && this.unpublishItem(e, A)) return A;
          for (let e of n) {
            let t = e.status !== E8.NOT_STAGED && e.status !== E8.NEW;
            if (e.component_key && t && this.unpublishItem(e, A)) return A;
          }
          continue;
        }
        if (zE(e)) continue;
        let r = new Set(n.map(e => e.node_id));
        for (let e of n) if (!g(e, C, _?.forcePublish) && r.has(e.node_id) && this.publishItem(e, A)) return A;
        if (this.publishItem(e, A)) return A;
      }
      for (let e of v) if (!(e.status === E8.NOT_STAGED || g(e, C, _?.forcePublish) || e.containing_frame?.containingStateGroup?.nodeId)) {
        if (e.component_key && e.status === E8.DELETED) {
          if (this.unpublishItem(e, A)) return A;
          continue;
        }
        if (this.publishItem(e, A)) return A;
      }
      let R = new Set(X7(A[PW.COMPONENT][M$.PUBLISH]).filter(e => !!e));
      let N = new Set(X7(A[PW.COMPONENT][M$.UNPUBLISH]).filter(e => !!e));
      for (let e of []) if (!R.has(e.component_key) && !N.has(e.component_key) && this.unpublishItem(t[e.node_id], A)) return A;
      for (let e of x) if (e.status !== E8.NOT_STAGED) {
        if (e.key && e.status === E8.DELETED) {
          if (this.unpublishItem(e, A)) return A;
          continue;
        }
        for (let t of k[e.node_id] ?? []) if (t.status !== E8.NOT_STAGED && t.status !== E8.CURRENT) {
          if (t.key && t.status === E8.DELETED) {
            if (this.unpublishItem(t, A)) return A;
            continue;
          }
          if (this.publishItem(t, A)) return A;
        }
        if (this.publishItem(e, A)) return A;
      }
      for (let e of S) {
        if (e.key && e.status === E8.DELETED) {
          if (this.unpublishItem(e, A)) return A;
          continue;
        }
        if (this.publishItem(e, A)) return A;
      }
      for (let e of w) if (O(e.type)) {
        if (e.status === E8.DELETED) {
          if (this.unpublishItem(e, A)) break;
        } else if (lg(e.status) && this.publishItem(e, A)) break;
      }
      return A;
    };
    this.shouldReturnEarlyOnUpdate = !!e?.shouldReturnEarlyOnUpdate;
  }
}
export function $$h2(e, t, i, n, r, a, s, o, l, d) {
  return new m().getPendingLibraryUpdates(e, t, i, n, r, a, s, o, l, d);
}
function g(e, t, i) {
  return !i && !(e.status !== E8.CURRENT || t.has(e.node_id)) && (glU.clearLibraryMoveInfo(e.node_id), !0);
}
export function $$f0(e) {
  return !e.some(e => [E8.CURRENT, E8.CHANGED, E8.NEW].includes(e.status));
}
export function $$_1(e, t) {
  return Object.values(e).filter(e => p(e, t)).every(e => !Hb(e.status));
}
export const Ol = $$f0;
export const aB = $$_1;
export const jx = $$h2;