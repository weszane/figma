import { bB } from "../905/776065";
import { oP } from "../905/209596";
import { P } from "../905/49602";
import { _ } from "../905/447176";
var $$n3;
function l(e, t, r, n, i, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    r(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, i);
}
function d(e, t, r) {
  t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r;
  return e;
}
function c(e) {
  for (var t = 1; t < $$arguments.length; t++) {
    var r = null != $$arguments[t] ? $$arguments[t] : {};
    var n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })));
    n.forEach(function (t) {
      d(e, t, r[t]);
    });
  }
  return e;
}
function u(e, t) {
  t = null != t ? t : {};
  Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function (e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n);
    }
    return r;
  }(Object(t)).forEach(function (r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
  });
  return e;
}
export class $$p2 extends Error {
  toString() {
    return "Error: Found loose node on page";
  }
  constructor(e) {
    super();
    d(this, "looseNodeInfo", void 0);
    this.name = "FoundLooseNodeOnPageError";
    this.looseNodeInfo = e;
  }
}
export function $$_1(e) {
  return "CANVAS" === e.type;
}
export function $$h11(e, t) {
  for (let r of t.children) {
    let t = $$m14(e, r);
    if (t) return t;
  }
  return null;
}
export function $$m14(e, t) {
  if (t.id === e) return t;
  if (!t.children) return null;
  for (let r of t.children) {
    let t = $$m14(e, r);
    if (t) return t;
  }
  return null;
}
export function $$g25(e, t) {
  let r = [e];
  for (; r.length > 0;) {
    let e = r.pop();
    t(e);
    e.children && r.push(...e.children);
  }
}
export function $$f18(e, t) {
  return E.apply(this, arguments);
}
function E() {
  var e;
  e = function* (e, t) {
    let r = [e];
    for (; r.length > 0;) {
      let e = r.pop();
      yield t(e);
      e.children && r.push(...e.children);
    }
  };
  return (E = function () {
    var t = this;
    var r = arguments;
    return new Promise(function (n, i) {
      var a = e.apply(t, r);
      function s(e) {
        l(a, n, i, s, o, "next", e);
      }
      function o(e) {
        l(a, n, i, s, o, "throw", e);
      }
      s(void 0);
    });
  }).apply(this, arguments);
}
export function $$y12(e, t) {
  if ($$_1(e.parentNode)) return;
  let r = e.parentNode;
  for (; r && "CANVAS" !== r.type && !("BREAK" === t(r) || $$_1(r.parentNode));) r = "parentNode" in r ? r.parentNode : void 0;
}
export function $$b4(e, t, {
  includeSelf: r
} = {
  includeSelf: !0
}) {
  let n = [];
  $$g25(e, i => {
    t(i) && (r || i !== e) && n.push(i);
  });
  return n;
}
function T(e) {
  var t;
  return u(c({}, e), {
    children: e.children?.map(T)
  });
}
function I(e, t, r) {
  if (e.id === t) return {
    parent: r,
    node: e
  };
  if (e.children) for (let r of e.children) {
    let n = I(r, t, e);
    if (n) return n;
  }
  return null;
}
export function $$S8(e, t) {
  let {
    parent,
    node
  } = I(e, t) || {};
  for (; parent && "CANVAS" !== parent.type && "SECTION" !== parent.type;) {
    var i;
    var a;
    n = parent;
    r = I(e, null !== (a = parent.id) && void 0 !== a ? a : "")?.parent;
  }
  return null != node ? node : e;
}
export function $$v7(e) {
  return "FRAME" === e.type || "INSTANCE" === e.type || "SYMBOL" === e.type;
}
export function $$A24(e) {
  var t;
  return ["GROUP", "BOOLEAN_OPERATION"].includes(null !== (t = e.type) && void 0 !== t ? t : "") || $$v7(e);
}
function x(e) {
  var t;
  return ["VECTOR", "BOOLEAN_OPERATION", "ELLIPSE", "STAR", "REGULAR_POLYGON", "RECTANGLE", "ROUNDED_RECTANGLE", "LINE"].includes(null !== (t = e.type) && void 0 !== t ? t : "");
}
export function $$N10(e) {
  return ["CANVAS", "SECTION"].includes(e.type);
}
export function $$C13(e) {
  var t;
  var r;
  return "FRAME" === e.type && (e.parentNode?.type === "CANVAS" || e.parentNode?.type === "SECTION");
}
export function $$w19(e) {
  if ($$A24(e) && e.children && e.children.length > 0) {
    let t = !0;
    for (let r of e.children) if (!("VECTOR" === r.type && bB(r.name))) {
      t = !1;
      break;
    }
    if (t) return !0;
  }
  return !1;
}
export function $$O27(e, t) {
  var r;
  let n = (null !== (r = e.parentNode.children) && void 0 !== r ? r : []).filter(t => t !== e);
  let i = [];
  for (let r of n) {
    if (r === e) continue;
    let n = {
      x: r.x,
      y: r.y,
      width: r.w,
      height: r.h
    };
    let s = {
      x: e.x,
      y: e.y,
      width: e.w,
      height: e.h
    };
    t ? oP(s, n) && i.push(r) : oP(n, s) && i.push(r);
  }
  return i;
}
export function $$R20(e) {
  return $$v7(e) && $$N10(e.parentNode);
}
!function (e) {
  e.CONTINUE = "CONTINUE";
  e.BREAK = "BREAK";
}($$n3 || ($$n3 = {}));
let L = ["CANVAS", "SECTION", "SLIDE_ROW"];
export function $$P6(e) {
  if (L.includes(e.parentNode.type) && $$R20(e)) return e;
  if ($$_1(e.parentNode)) throw new $$p2(e);
  return $$P6(e.parentNode);
}
function D(e) {
  return "TEXT" === e.type && !!e.characters && Number.isInteger(parseInt(e.characters));
}
export function $$k9(e) {
  if ($$_1(e.parentNode)) return !1;
  let t = $$P6(e);
  if (e.w >= t.w || e.h >= t.h || e.w < .01 || e.h < .01) return !1;
  if (x(e) || D(e)) return !0;
  if ($$A24(e) && e.children) {
    let t = !0;
    for (let r of e.children) if ("GROUP" === r.type) {
      if (!$$k9(r)) {
        t = !1;
        break;
      }
    } else if (!x(r) && !D(r)) {
      t = !1;
      break;
    }
    return t;
  }
  return !1;
}
export function $$M21(e) {
  let t = !0;
  e.visible || void 0 === e.visible || (t = !1);
  $$y12(e, e => e.visible || void 0 === e.visible ? "CONTINUE" : (t = !1, "BREAK"));
  return t;
}
export function $$F5(e) {
  return e.localID < 0 || e.sessionID < 0 ? null : `${e.sessionID}:${e.localID}`;
}
export function $$j22(e, t) {
  var r;
  let n = [];
  let i = e.interactions?.flatMap(r => {
    let i;
    if (!e.id || !r) return [];
    let a = function (e, t) {
      var r;
      if (e.isDeleted) return null;
      let n = e.actions?.find(e => "BACK" === e.connectionType || "CLOSE" === e.connectionType || "INTERNAL_NODE" === e.connectionType && e.transitionNodeID && ("NAVIGATE" === e.navigationType || "OVERLAY" === e.navigationType));
      if (!n) return null;
      let i = null;
      let a = n.connectionType;
      let s = n.navigationType;
      if ("BACK" === a || "CLOSE" === a) i = {
        buttonID: t,
        navigationType: a,
        destinationScreenID: null,
        score: 0,
        rationale: ""
      };else if ("INTERNAL_NODE" === a && ("NAVIGATE" === s || "OVERLAY" === s) && n.transitionNodeID) {
        let e = $$F5(n.transitionNodeID);
        if (!e) return null;
        i = {
          buttonID: t,
          navigationType: {
            NAVIGATE: "NAVIGATE",
            OVERLAY: "OPEN_POPUP"
          }[s],
          destinationScreenID: e,
          score: 10,
          rationale: "existing interaction"
        };
      }
      return i;
    }(r, e.id);
    if (!a) return [];
    let s = t ? t.get(a.buttonID) : a.buttonID;
    if (!s) return [];
    if (r.id && (i = $$F5(r.id)), !a.destinationScreenID) {
      i && n.push(i);
      return [{
        buttonID: s,
        navigationType: a.navigationType,
        destinationScreenID: null,
        score: 10,
        rationale: ""
      }];
    }
    {
      let e = t ? t.get(a.destinationScreenID) : a.destinationScreenID;
      return e ? (i && n.push(i), [{
        buttonID: s,
        navigationType: a.navigationType,
        destinationScreenID: e,
        score: 10,
        rationale: "existing interaction"
      }]) : [];
    }
  });
  return {
    interactionMappings: null != i ? i : [],
    interactionIds: n
  };
}
export function $$U23(e) {
  let t = e.children.map(e => function e(t) {
    var r;
    let {
      parentNode
    } = t;
    let i = function (e, t) {
      if (null == e) return {};
      var r;
      var n;
      var i = function (e, t) {
        if (null == e) return {};
        var r;
        var n;
        var i = {};
        var a = Object.keys(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          t.indexOf(r) >= 0 || (i[r] = e[r]);
        }
        return i;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) {
          r = a[n];
          !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        }
      }
      return i;
    }(t, ["parentNode"]);
    i.children = t.children?.map(e);
    return i;
  }(e));
  t.forEach(e => {
    $$g25(e, e => {
      if (e.children) for (let t of e.children) t.parentNode = e;
    });
  });
  let r = u(c({}, e), {
    children: t
  });
  r.children.forEach(e => {
    e.parentNode = r;
  });
  return r;
}
export function $$B15(e, t) {
  let r = null != e ? e : 0;
  let n = null != t ? t : 0;
  return 0 === r ? 0 : 0 === n ? null : r / n;
}
export const $V = function e(t, r) {
  return !$$_1(t.parentNode) && (t.parentNode === r || e(t.parentNode, r));
};
export const CB = $$_1;
export const FI = $$p2;
export const FZ = $$n3;
export const Fo = $$b4;
export const Gu = $$F5;
export const Id = $$P6;
export const JE = $$v7;
export const N6 = $$S8;
export const OS = $$k9;
export const Og = $$N10;
export const Sh = $$h11;
export const Si = $$y12;
export const TA = $$C13;
export const VL = $$m14;
export const Z = $$B15;
export const fN = function e(t) {
  if (!$$M21(t) || P(t) || _(t) || $$_1(t.parentNode) || t.w >= 128 || t.h >= 128 || t.w < .01 || t.h < .01 || t.w / t.h > 2 || t.h / t.w > 2) return !1;
  if ($$A24(t) && t.children) {
    let r = !0;
    for (let n of t.children) if ("GROUP" === n.type) {
      if (!e(n)) {
        r = !1;
        break;
      }
    } else if (!x(n) && !D(n)) {
      r = !1;
      break;
    }
    return r;
  }
  return !1;
};
export const fY = function e(t) {
  if ($$_1(t.parentNode)) return !1;
  let r = $$P6(t);
  if (t.w >= r.w || t.h >= r.h / 2 || t.w < .01 || t.h < .01) return !1;
  if ($$A24(t) && t.children) {
    if (1 === t.children.length) {
      let r = t.children[0];
      if (!1 === r.visible) return !1;
      if ("TEXT" === r.type || "FRAME" === r.type && r.children && 1 === r.children.length && e(r.children[0])) return !0;
    }
    if (t.children.length > 1 && t.children.length < 5) {
      for (let r of t.children) if (!1 !== r.visible && ("TEXT" !== r.type && "GROUP" !== r.type && "RECTANGLE" !== r.type && "ROUNDED_RECTANGLE" !== r.type && !$$k9(r) || "GROUP" === r.type && !e(r))) return !1;
      let r = !0;
      for (let e of t.children) if (!$$k9(e)) {
        r = !1;
        break;
      }
      return !r;
    }
  }
  return !1;
};
export const hb = $$f18;
export const j0 = $$w19;
export const nP = $$R20;
export const nf = $$M21;
export const rm = $$j22;
export const rq = $$U23;
export const u_ = $$A24;
export const ul = $$g25;
export const yM = function e(t, r) {
  if (t.children) for (let n of t.children) e(n, r);
  r(t);
};
export const yV = $$O27;