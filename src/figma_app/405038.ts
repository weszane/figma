import { Nz } from "../905/417232";
import { isInvalidValue } from "../905/216495";
function a(e, t) {
  return void 0 === e && void 0 === t || void 0 !== e && void 0 !== t && JSON.stringify(e) === JSON.stringify(t);
}
export class $$s0 {
  constructor(e) {
    this.path = e;
  }
  equals(e) {
    return JSON.stringify(this.path) === JSON.stringify(e);
  }
  isConditional() {
    return 3 === this.path.length;
  }
}
function o(e, t) {
  if (0 === t.path.length) return;
  let r = t.path[0];
  if (e.length > r) {
    let n = e[r];
    if (3 === t.path.length && "CONDITIONAL" === n.connectionType && n.conditionalActions) {
      let e = t.path[1];
      let r = t.path[2];
      if (n.conditionalActions.length > e) {
        let t = n.conditionalActions[e];
        if (t.actions && t.actions?.length > r) return t.actions[r];
      }
    }
    return n;
  }
}
export function $$l2(e) {
  return void 0 !== e.ifStatement && void 0 !== e.action;
}
export function $$d1(e, t, r, d, c) {
  if (0 === e.length || !d || !c) return {
    newActions: void 0,
    newExpandedRows: void 0
  };
  let {
    action,
    actionIndexPath
  } = d;
  let _ = $$l2(action);
  if (_ && isInvalidValue(action) || a(action, o(e, t)) && actionIndexPath.equals(t.path)) return {
    newActions: void 0,
    newExpandedRows: void 0
  };
  let h = o(e, t);
  if (!h) return {
    newActions: void 0,
    newExpandedRows: void 0
  };
  let m = d.action;
  if (_ && "CONDITIONAL" === h.connectionType) return {
    newActions: void 0,
    newExpandedRows: void 0
  };
  if (!_ && c === Nz.INSIDE && "CONDITIONAL" === m.connectionType) return function (e, t, r, n, i, o) {
    if (!t || !i || !o || "CONDITIONAL" !== i.connectionType || "CONDITIONAL" === t.connectionType) return {
      newActions: void 0,
      newExpandedRows: void 0
    };
    var l = [];
    var d = [];
    var c = [];
    var u = 0;
    var p = 0;
    for (let h of e) {
      if (a(i, h) && o.path[0] === u && "CONDITIONAL" === h.connectionType) {
        if (h.conditionalActions) {
          for (let e of h.conditionalActions) if (e.actions && void 0 !== e.actions.find(e => e === t)) return {
            newActions: void 0,
            newExpandedRows: void 0
          };
        }
        if (!h.conditionalActions) {
          var _ = {
            actions: []
          };
          h.conditionalActions = [_];
        }
        h.conditionalActions[0].actions ? (h.conditionalActions[0].actions.push(t), c.push(new $$s0([p, 0, h.conditionalActions[0].actions.length - 1]))) : (h.conditionalActions[0].actions = [t], c.push(new $$s0([p, 0, 0])));
        d.push(new $$s0([p]));
        p++;
      }
      (!a(t, h) || !r.equals([u])) && (l.push(h), n.find(e => e.equals([u])) && d.push(new $$s0([p])), p++);
      u++;
    }
    return {
      newActions: l,
      newExpandedRows: d,
      newSelectedActionIndex: c.length ? c[0] : void 0
    };
  }(e, h, t, r, m, actionIndexPath);
  for (g = [], f = [], E = [], y = 0, b = 0, T = !1, I = 0, void 0; I < e.length; I++) {
    var g;
    var f;
    var E;
    var y;
    var b;
    var T;
    var I;
    let i = e[I];
    var S = a(action, i) && actionIndexPath.equals([I]) && !T;
    if (_ && action.action) {
      let e = [I, action.ifStatement ? 0 : 1, 0];
      S = a(action.action, i) && actionIndexPath.equals(e) && !T;
    }
    let o = t.equals([I]);
    if (!o && "CONDITIONAL" === i.connectionType) {
      if (i.conditionalActions) {
        var v = [];
        let e = 1 === t.path.length && t.path[0] < I ? I - 1 : I;
        for (var A = 0; A < i.conditionalActions?.length; A++) {
          var x = {};
          let r = i.conditionalActions[A];
          if (r.actions && r.actions.length > 0) {
            for (N = [], C = 0, w = 0, void 0; w < r.actions?.length; w++) {
              var N;
              var C;
              var w;
              let i = r.actions[w];
              if (a(action, i) && actionIndexPath.equals([I, A, w])) {
                if ("CONDITIONAL" === h.connectionType) return {
                  newActions: void 0,
                  newExpandedRows: void 0
                };
                c === Nz.AFTER ? (N.push(i), C++, N.push(h), f.push(new $$s0([e, A, C]))) : c === Nz.BEFORE && (N.push(h), f.push(new $$s0([e, A, C])), N.push(i), C++);
                T = !0;
              } else !t.equals([I, A, w]) && (N.push(i), C++);
            }
            x.actions = N;
            x.condition = r.condition;
          } else if (_ && S && (action.ifStatement && 0 === A || !action.ifStatement && 1 === A)) {
            if ("CONDITIONAL" === h.connectionType) return {
              newActions: void 0,
              newExpandedRows: void 0
            };
            f.push(new $$s0([e, A, 0]));
            x.actions = [h];
            x.condition = action.ifStatement ? r.condition : void 0;
            T = !0;
          } else x = r;
          v.push(x);
        }
        if (_ && !action.ifStatement && S && v.length <= 1) {
          var O = {
            actions: action.ifStatement ? [] : [h]
          };
          v.push(O);
          T = !0;
        }
        i.conditionalActions = v;
      } else if (_) {
        var R = {
          actions: action.ifStatement ? [h] : []
        };
        var O = {
          actions: action.ifStatement ? [] : [h]
        };
        i.conditionalActions = [R, O];
        T = !0;
      }
    }
    S && !T ? (c === Nz.AFTER ? (r.find(e => e.equals([I])) && E.push(new $$s0([b])), g.push(i), b++, g.push(h), f.push(new $$s0([y + 1])), b++) : c === Nz.BEFORE && (g.push(h), f.push(new $$s0([y])), b++, r.find(e => e.equals([I])) && E.push(new $$s0([b])), g.push(i), b++), T = !0) : !o && (y++, r.find(e => e.equals([I])) && E.push(new $$s0([b])), g.push(i), b++);
  }
  return {
    newActions: g,
    newExpandedRows: E,
    newSelectedActionIndex: f.length ? f[0] : void 0
  };
}
export const Op = $$s0;
export const Vp = $$d1;
export const qQ = $$l2;