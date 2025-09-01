import { d4 } from "../vendor/514228";
import { arraysEqual } from "../figma_app/656233";
import { c2 } from "../905/382883";
import { Egt } from "../figma_app/763686";
import { dI, AD, sH, aI } from "../905/871411";
import { sx } from "../905/449184";
import { d as _$$d, s as _$$s } from "../figma_app/429226";
import { Y5 } from "../figma_app/455680";
import { oV, gl, _W, hS } from "../905/216495";
import { eY } from "../figma_app/722362";
import { Xt } from "../figma_app/889655";
import { zk } from "../figma_app/198712";
import { J, j } from "../905/980942";
function g(e) {
  if (!e || !e.interactionType) return "NONE";
  switch (e.interactionType) {
    case "MOUSE_IN":
    case "MOUSE_OUT":
    case "MOUSE_ENTER":
    case "MOUSE_LEAVE":
    case "MOUSE_DOWN":
    case "MOUSE_UP":
      return e.interactionType + (e.interactionMaintained?.toString() ?? "0");
    case "ON_KEY_DOWN":
      return e.interactionType + (e.keyTrigger?.triggerDevice ?? "") + (e.keyTrigger?.keyCodes?.sort().toString() ?? "");
    case "AFTER_TIMEOUT":
      return e.interactionType + (e.transitionTimeout?.toString() ?? "0");
    case "ON_MEDIA_HIT":
      return e.interactionType + (e.mediaHitTime?.toString() ?? "0");
    default:
      return e.interactionType;
  }
}
function f(e, t) {
  return Object.keys(e).length > 1 ? function (e) {
    let t = [];
    let r = new Map();
    for (let t of e) {
      let e = g(t.event);
      r.has(e) || r.set(e, []);
      let n = r.get(e);
      n && n.push(t);
    }
    for (let [e, n] of r) n && n.length > 0 && n[0].event && t.push({
      key: e,
      event: n[0].event,
      interactions: n
    });
    return t;
  }(t) : function (e) {
    let t = [];
    if (e.length > 0 && e[0].event) for (let r of e) r.event && t.push({
      key: g(r.event),
      event: r.event,
      interactions: [r]
    });
    return t;
  }(t);
}
export function $$E5() {
  let e = d4($$C1);
  return f(d4(Xt), e);
}
export function $$y4() {
  let e = d4($$w6);
  return f(d4(Xt), e);
}
export function $$b3() {
  let e = d4($$C1);
  let t = new Set(d4($$O2));
  return e.some(e => {
    let r = e.id && e.sourceNodeID ? _$$d({
      nodeID: e.sourceNodeID,
      interactionID: e.id
    }) : void 0;
    return r && t.has(r);
  }) ? J.NORMAL : J.INHERITED_INTERNAL;
}
export function $$T0(e, t) {
  let r = d4($$C1);
  let i = d4($$w6);
  let a = e === J.INHERITED_INTERNAL ? i : r;
  let s = d4($$O2);
  let _ = new Set(s);
  let g = new Set();
  let f = [];
  a.forEach((e, r) => {
    let n = e.id && e.sourceNodeID ? _$$d({
      nodeID: e.sourceNodeID,
      interactionID: e.id
    }) : void 0;
    if (n && _.has(n)) {
      g.add(r);
      let n = {
        ...e
      };
      n.actions && t && (n.actions = n.actions.filter(e => "NONE" !== e.connectionType));
      f.push(n);
    }
  });
  let E = f.map(e => e.actions?.length).some(e => e !== f[0].actions?.length);
  let b = (0 === f.length ? [] : f[0].actions || []).map(e => ({
    ...e
  }));
  let T = eY();
  if (!E) for (var v = 0; v < f.length; v++) {
    let e = f[v].actions || [];
    for (var R = 0; R < e.length; R++) {
      let t = b[R];
      let r = e[R];
      for (let e in r) t[e] ? S(r, t, e, T) || (t[e] = oV) : t[e] = r[e];
    }
  }
  let L = t => function n(s) {
    let o = function (...n) {
      let [o, d] = n;
      let p = !1;
      let _ = [];
      let f = [];
      for (let e in o) gl(F[e]) ? (p = !0, _.push(e)) : f.push(e);
      let {
        changes,
        eventChanges,
        actionChanges,
        interactionChanges
      } = function (e) {
        let t = {};
        let r = {};
        let n = {};
        let i = {};
        for (let a in e) x.has(a) ? n[a] = e[a] : A.has(a) ? r[a] = e[a] : N.has(a) ? i[a] = e[a] : t[a] = e[a];
        return {
          changes: t,
          eventChanges: r,
          actionChanges: n,
          interactionChanges: i
        };
      }(o);
      let I = [];
      a.forEach((e, r) => {
        if (g.has(r)) {
          let r = {
            ...e.event,
            ...eventChanges
          };
          let n = [];
          let i = e.actions || [];
          for (let e = 0; e < i.length; e++) if (e === t) {
            if (s.length > 1) {
              let {
                newPrototypeAction
              } = function (e, t, r) {
                if (t.length > 2 && e.conditionalActions) {
                  let a = e.conditionalActions;
                  let s = e.conditionalActions;
                  let o = t[1];
                  let l = s[o];
                  var n = {
                    condition: l.condition,
                    actions: []
                  };
                  var i = [];
                  let d = l.actions ? l.actions : [];
                  for (let e = 0; e < d.length; e++) e === t[2] ? i.push({
                    ...d[e],
                    ...r
                  }) : i.push({
                    ...d[e]
                  });
                  n.actions = i;
                  a[o] = n;
                  e.conditionalActions = a;
                }
                return {
                  newPrototypeAction: e
                };
              }(i[e], s, actionChanges);
              n[e] = newPrototypeAction;
            } else n.push({
              ...i[e],
              ...actionChanges
            });
          } else n.push({
            ...i[e]
          });
          t >= n.length && n.push({
            ...actionChanges
          });
          I.push({
            ...e,
            ...interactionChanges,
            event: r,
            actions: n
          });
        } else I.push(e);
      });
      sx("prototype_update_selection_properties", {
        mixedUpdate: p,
        mixedUpdatedProperties: _,
        nonMixedUpdatedProperties: f,
        num_connector: g.size,
        category: e
      });
      e === J.NORMAL ? I = [...I, ...i] : e === J.INHERITED_INTERNAL && (I = [...r, ...I]);
      changes.prototypeInteractions = I;
      Y5.updateSelectionProperties(changes, {
        shouldCommit: d?.shouldCommit || zk.YES,
        overwrite: d?.overwrite
      });
    };
    o.appendActionIndex = function (e) {
      return n([...s, e]);
    };
    return o;
  }([t]);
  let P = e => e && null != e.actions ? e.actions[0] : null;
  let D = e => {
    let t = P(e);
    if (null == t) return dI(e.sourceNodeID);
    let r = dI(t.transitionNodeID);
    return r === AD || null === r ? dI(e.sourceNodeID) : r;
  };
  let k = (e, t) => {
    if (!e.actions || e.actions?.length === 0 || 0 === t.length) return null;
    if (!(t.length > 2)) return e.actions[t[0]];
    {
      let r = e.actions.length > t[0] ? e.actions[t[0]] : null;
      if (r && r.conditionalActions) {
        let e = r.conditionalActions.length > t[1] ? r.conditionalActions[t[1]] : null;
        if (e && e.actions) return e.actions.length > t[2] ? e.actions[t[2]] : null;
      }
    }
  };
  let M = (e, t) => {
    if (null == t || void 0 === t) return dI(e.sourceNodeID);
    let r = dI(t.transitionNodeID);
    return r === AD || null === r ? dI(e.sourceNodeID) : r;
  };
  let F = function (e, t) {
    let r = {};
    let n = {};
    for (let i of e) {
      if (!i || !i.event) continue;
      for (let e in i.event) r[e] ? I(i.event, r, e) || (r[e] = oV) : r[e] = i.event[e];
      let e = i.actions && {
        ...i.actions[0]
      };
      if (e) for (let r in e) n[r] ? S(e, n, r, t) || (n[r] = oV) : n[r] = e[r];
    }
    return {
      ...r,
      ...n
    };
  }(f, T);
  let j = function (e, t) {
    let r = {};
    let n = [{}];
    for (let a of e) {
      if (!a || !a.event) continue;
      for (let e in a.event) r[e] ? I(a.event, r, e) || (r[e] = oV) : r[e] = a.event[e];
      if (!a.actions) continue;
      let e = a.actions;
      var i = 0;
      for (let r of e) {
        for (let e in r) {
          i > n.length - 1 && n.push({});
          let a = n[i];
          a[e] ? S(r, a, e, t) || (a[e] = oV) : a[e] = r[e];
        }
        i++;
      }
    }
    return {
      interactionEvent: r,
      interactionActions: n
    };
  }(f, T);
  let U = new Set(s.map(e => {
    let t = _$$s(e);
    return t ? dI(t.nodeID) : "";
  }).filter(e => "" !== e));
  let B = a.filter(e => e.sourceNodeID && U.has(dI(e.sourceNodeID)));
  var G = [...B];
  let V = $$y4();
  if (V.length > 0) for (var v = 0; v < V.length; v++) {
    let e = V[v];
    for (var H = 0; H < e.interactions.length; H++) {
      let t = e.interactions[H];
      G.find(e => e.id === t.id) || G.push(t);
    }
  }
  return {
    makeUpdateSelectionPropertiesForActionIndex: L,
    updateSelectionProperties: L(0),
    makeUpdateMultipleDestinationNodesForActionIndex: t => function t(n) {
      let s = function (t, s, l) {
        let d = {};
        let u = [];
        a.forEach(e => {
          let r = k(e, n);
          let i = M(e, r);
          if (r && i && -1 !== Object.keys(t).indexOf(i) && sH(t[i])) {
            let d = sH(t[i]);
            if (d) {
              if (!e.actions) return;
              var a = [];
              let t = n[0];
              if (r) {
                if (n.length > 2) {
                  let r = e.actions[t];
                  let i = n[1];
                  if (r.conditionalActions) {
                    let t = r.conditionalActions[i];
                    let o = n[2];
                    let c = r.conditionalActions;
                    var s = {
                      condition: r.conditionalActions[i].condition,
                      actions: []
                    };
                    if (t.actions) {
                      let u = {
                        ...t.actions[o],
                        transitionNodeID: d
                      };
                      var l = [...t.actions];
                      l.splice(o, 1, u);
                      s.actions = l;
                      c[i] = s;
                      r.conditionalActions = c;
                      (a = [...e.actions]).splice(n[0], 1, r);
                    }
                  }
                } else {
                  let t = {
                    ...e.actions[n[0]],
                    transitionNodeID: d
                  };
                  (a = [...e.actions]).splice(n[0], 1, t);
                }
                u.push({
                  ...e,
                  actions: a
                });
              }
            }
          } else u.push(e);
        });
        e === J.NORMAL ? u = [...u, ...i] : e === J.INHERITED_INTERNAL && (u = [...r, ...u]);
        d.prototypeInteractions = u;
        Y5.updateSelectionProperties(d, {
          shouldCommit: s,
          overwrite: l
        });
      };
      s.appendActionIndex = function (e) {
        return t([...n, e]);
      };
      s.updateMultipleDestinationNodes = function (e, t, r) {
        return s;
      };
      return s;
    }([t]),
    updateMultipleDestinationNodes: (t, n, s) => {
      let l = {};
      let d = [];
      a.forEach(e => {
        let r = D(e);
        if (r && -1 !== Object.keys(t).indexOf(r) && sH(t[r])) {
          let n = sH(t[r]);
          if (n) {
            if (!e.actions) return;
            let t = e.actions.findIndex(e => "INTERNAL_NODE" === e.connectionType && "SWAP_STATE" === e.navigationType);
            if (-1 !== t) {
              let r = {
                ...e.actions[t],
                transitionNodeID: n
              };
              let i = [...e.actions];
              i.splice(t, 1, r);
              d.push({
                ...e,
                actions: i
              });
            }
          }
        } else d.push(e);
      });
      e === J.NORMAL ? d = [...d, ...i] : e === J.INHERITED_INTERNAL && (d = [...r, ...d]);
      l.prototypeInteractions = d;
      Y5.updateSelectionProperties(l, {
        shouldCommit: n,
        overwrite: s
      });
    },
    detailPropsMultipleActions: j,
    detailProps: F,
    interactionsOnSelectedNode: B,
    interactionsOnSelectedNodesAndComponents: G,
    selectedInteractions: f,
    mergedActions: b,
    differentLengthActions: E,
    selectedNoodleIds: s
  };
}
function I(e, t, r) {
  if ("keyTrigger" === r) {
    let n = e[r];
    let a = _W(t[r], void 0);
    return arraysEqual(n?.keyCodes || [], a?.keyCodes || []) && n?.triggerDevice === a?.triggerDevice;
  }
  return e[r] === t[r];
}
function S(e, t, r, n) {
  switch (r) {
    case "transitionNodeID":
      let i = e[r];
      let l = _W(t[r], void 0);
      return aI(i, l);
    case "targetVariable":
      let d = e[r];
      let c = t[r];
      if (!d && !c) return !0;
      if (d && c) {
        if ("id" in d && "id" in c) return d.id === c.id;
        if ("nodeFieldAlias" in d && "nodeFieldAlias" in c) {
          let e = d.nodeFieldAlias.stablePathToNode;
          let t = c.nodeFieldAlias.stablePathToNode;
          let r = e && 1 === e.length ? n.get(e[0]) : null;
          let i = t && 1 === t.length ? n.get(t[0]) : null;
          if (r && i && r.isState && i.isState && r.containingStateGroupId === i.containingStateGroupId) return Egt.getExplicitPropDefIDBinding(r.guid, d.nodeFieldAlias.indexOrKey) === Egt.getExplicitPropDefIDBinding(i.guid, c.nodeFieldAlias.indexOrKey);
          return c2(d.nodeFieldAlias, c.nodeFieldAlias);
        }
      }
      return !1;
    case "overlayRelativePosition":
      let p = e[r];
      let _ = _W(t[r], void 0);
      return p?.x === _?.x && p?.y === _?.y;
    case "easingType":
      let h = e[r];
      let g = _W(t[r], void 0);
      if ("CUSTOM_CUBIC" !== h || "CUSTOM_CUBIC" !== g) return h === g;
      return v(_W(e.easingFunction, void 0), _W(t.easingFunction, void 0));
    case "easingFunction":
      return v(e[r], _W(t[r], void 0));
    case "extraScrollOffset":
      let f = e[r];
      let E = _W(t[r], void 0);
      return f?.x === E?.x && f?.y === E?.y;
    case "targetVariableData":
      return j(e[r], t[r], n);
    case "conditionalActions":
      let y = e[r];
      let b = t[r];
      if (!hS(b)) return !1;
      if (!(y && b && 2 === y.length && 2 === b.length && y[0]?.condition && b[0]?.condition && y[0]?.actions && b[0]?.actions && y[1]?.actions && b[1]?.actions)) return c2(e[r], t[r]);
      {
        let e = j(y[0].condition, b[0].condition, n);
        let t = (e, t) => {
          if (e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++) for (let i in e[r]) if (!S(e[r], t[r], i, n)) return !1;
          return !0;
        };
        let r = y[0].actions;
        let i = b[0].actions;
        let a = r && i && t(r, i);
        let s = y[1].actions;
        let o = b[1].actions;
        let l = s && o && t(s, o);
        return e && a && l;
      }
    default:
      return e[r] === t[r];
  }
}
function v(e, t) {
  if (e === t) return !0;
  if (void 0 === e || void 0 === t || e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
let A = new Set(["interactionType", "interactionMaintained", "interactionDuration", "keyTrigger", "transitionTimeout", "mediaHitTime"]);
let x = new Set(["transitionNodeID", "transitionType", "transitionDuration", "easingType", "easingFunction", "transitionShouldSmartAnimate", "connectionType", "connectionURL", "targetVariable", "targetVariableData", "navigationType", "transitionPreserveScroll", "transitionResetVideoPosition", "openUrlInNewTab", "extraScrollOffset", "mediaAction", "mediaSkipToTime", "mediaSkipByAmount", "conditions", "conditionalActions", "transitionResetScrollPosition", "transitionResetInteractiveComponents", "targetVariableSetID", "targetVariableModeID", "targetVariableSetKey"]);
let N = new Set(["stateManagementVersion"]);
export function $$C1(e) {
  return e.mirror.selectionProperties.prototypeInteractions || [];
}
export function $$w6(e) {
  return e.mirror.selectionProperties.prototypeInheritedInternalInteractions || [];
}
export function $$O2(e) {
  return e.mirror.appModel.selectedInteractions;
}
export const Ay = $$T0;
export const Cy = $$C1;
export const DV = $$O2;
export const HS = $$b3;
export const R = $$y4;
export const a2 = $$E5;
export const n9 = $$w6;