var s;
var r;
var o;
var n;
var l;
var a;
var d;
var h;
var u;
var c;
var g;
var p = class {
  constructor() {
    this.allSyncListeners = new Map();
    this.allAsyncListeners = new Map();
    this.globalSyncListeners = new Set();
    this.globalAsyncListeners = new Set();
    this.asyncFunctionsQueue = [];
    this.scheduled = !1;
    this.firedEvents = {};
  }
  setFrameworkOverrides(e) {
    this.frameworkOverrides = e;
  }
  getListeners(e, t, i) {
    let s = t ? this.allAsyncListeners : this.allSyncListeners;
    let r = s.get(e);
    !r && i && (r = new Set(), s.set(e, r));
    return r;
  }
  noRegisteredListenersExist() {
    return 0 === this.allSyncListeners.size && 0 === this.allAsyncListeners.size && 0 === this.globalSyncListeners.size && 0 === this.globalAsyncListeners.size;
  }
  addEventListener(e, t, i = !1) {
    this.getListeners(e, i, !0).add(t);
  }
  removeEventListener(e, t, i = !1) {
    let s = this.getListeners(e, i, !1);
    s && (s.$$delete(t), 0 === s.size && (i ? this.allAsyncListeners : this.allSyncListeners).$$delete(e));
  }
  addGlobalListener(e, t = !1) {
    (t ? this.globalAsyncListeners : this.globalSyncListeners).add(e);
  }
  removeGlobalListener(e, t = !1) {
    (t ? this.globalAsyncListeners : this.globalSyncListeners).$$delete(e);
  }
  dispatchEvent(e) {
    this.dispatchToListeners(e, !0);
    this.dispatchToListeners(e, !1);
    this.firedEvents[e.type] = !0;
  }
  dispatchEventOnce(e) {
    this.firedEvents[e.type] || this.dispatchEvent(e);
  }
  dispatchToListeners(e, t) {
    let i = e.type;
    if (t && "event" in e) {
      let t = e.event;
      t instanceof Event && (e.eventPath = t.composedPath());
    }
    let s = this.getListeners(i, t, !1) ?? new Set();
    let r = new Set(s);
    r.size > 0 && r.forEach(i => {
      if (!s.has(i)) return;
      let r = this.frameworkOverrides ? () => this.frameworkOverrides.wrapIncoming(() => i(e)) : () => i(e);
      t ? this.dispatchAsync(r) : r();
    });
    new Set(t ? this.globalAsyncListeners : this.globalSyncListeners).forEach(s => {
      let r = this.frameworkOverrides ? () => this.frameworkOverrides.wrapIncoming(() => s(i, e)) : () => s(i, e);
      t ? this.dispatchAsync(r) : r();
    });
  }
  dispatchAsync(e) {
    if (this.asyncFunctionsQueue.push(e), !this.scheduled) {
      let e = () => {
        window.setTimeout(this.flushAsyncQueue.bind(this), 0);
      };
      this.frameworkOverrides ? this.frameworkOverrides.wrapIncoming(e) : e();
      this.scheduled = !0;
    }
  }
  flushAsyncQueue() {
    this.scheduled = !1;
    let e = this.asyncFunctionsQueue.slice();
    this.asyncFunctionsQueue = [];
    e.forEach(e => e());
  }
};
function m(e, t) {
  return t;
}
export function $$f13(e) {
  return e?.getLocaleTextFunc() ?? m;
}
function C(e, t, i) {
  null == i || "string" == typeof i && "" == i ? v(e, t) : w(e, t, i);
}
function w(e, t, i) {
  e.setAttribute(`aria-${t}`, i.toString());
}
function v(e, t) {
  e.removeAttribute(`aria-${t}`);
}
function b(e, t) {
  t ? e.setAttribute("role", t) : e.removeAttribute("role");
}
function y(e, t) {
  C(e, "label", t);
}
function S(e, t) {
  C(e, "labelledby", t);
}
function R(e, t) {
  C(e, "hidden", t);
}
function D(e, t) {
  w(e, "expanded", t);
}
export function $$x31(e, t) {
  w(e, "rowcount", t);
}
function P(e, t) {
  w(e, "rowindex", t);
}
export function $$E2(e, t) {
  w(e, "colcount", t);
}
function F(e, t) {
  w(e, "colindex", t);
}
export function $$A10(e, t) {
  w(e, "sort", t);
}
export function $$k17(e) {
  v(e, "sort");
}
function M(e, t) {
  C(e, "selected", t);
}
function T(e, t) {
  return void 0 === t ? e("ariaIndeterminate", "indeterminate") : !0 === t ? e("ariaChecked", "checked") : e("ariaUnchecked", "unchecked");
}
function I() {
  void 0 === s && (s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  return s;
}
function L() {
  if (void 0 === r) {
    let e = window;
    r = !!e.chrome && (!!e.chrome.webstore || !!e.chrome.runtime) || /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  }
  return r;
}
function O() {
  void 0 === o && (o = /(firefox)/i.test(navigator.userAgent));
  return o;
}
function G() {
  void 0 === n && (n = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
  return n;
}
function H() {
  void 0 === l && (l = /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1);
  return l;
}
function N(e) {
  if (!e) return null;
  let t = e.tabIndex;
  let i = e.getAttribute("tabIndex");
  return -1 !== t || null !== i && ("" !== i || O()) ? t.toString() : null;
}
function B() {
  let e = document.body;
  let t = document.createElement("div");
  t.style.width = t.style.height = "100px";
  t.style.opacity = "0";
  t.style.overflow = "scroll";
  t.style.msOverflowStyle = "scrollbar";
  t.style.position = "absolute";
  e.appendChild(t);
  let i = t.offsetWidth - t.clientWidth;
  0 === i && 0 === t.clientWidth && (i = null);
  t.parentNode && t.parentNode.removeChild(t);
  null != i && (d = i, a = 0 === i);
}
function V() {
  null == a && B();
  return a;
}
var W = "[disabled], .ag-disabled:not(.ag-button), .ag-disabled *";
function z(e) {
  let t = Element.prototype.matches || Element.prototype.msMatchesSelector;
  let i = t.call(e, "input, select, button, textarea");
  let s = t.call(e, W);
  let r = er(e);
  return i && !s && r;
}
function U(e, t, i = {}) {
  let {
    skipAriaHidden
  } = i;
  e.classList.toggle("ag-hidden", !t);
  skipAriaHidden || R(e, !t);
}
function $(e, t) {
  let i = "disabled";
  let s = t ? e => e.setAttribute(i, "") : e => e.removeAttribute(i);
  s(e);
  em(e.querySelectorAll("input"), e => s(e));
}
function K(e, t, i) {
  let s = 0;
  for (; e;) {
    if (e.classList.contains(t)) return !0;
    if (e = e.parentElement, "number" == typeof i) {
      if (++s > i) break;
    } else if (e === i) break;
  }
  return !1;
}
function _(e) {
  let {
    height,
    width,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    boxSizing
  } = window.getComputedStyle(e);
  return {
    height: parseFloat(height || "0"),
    width: parseFloat(width || "0"),
    borderTopWidth: parseFloat(borderTopWidth || "0"),
    borderRightWidth: parseFloat(borderRightWidth || "0"),
    borderBottomWidth: parseFloat(borderBottomWidth || "0"),
    borderLeftWidth: parseFloat(borderLeftWidth || "0"),
    paddingTop: parseFloat(paddingTop || "0"),
    paddingRight: parseFloat(paddingRight || "0"),
    paddingBottom: parseFloat(paddingBottom || "0"),
    paddingLeft: parseFloat(paddingLeft || "0"),
    marginTop: parseFloat(marginTop || "0"),
    marginRight: parseFloat(marginRight || "0"),
    marginBottom: parseFloat(marginBottom || "0"),
    marginLeft: parseFloat(marginLeft || "0"),
    boxSizing
  };
}
function j(e) {
  let t = _(e);
  return "border-box" === t.boxSizing ? t.height - t.paddingTop - t.paddingBottom : t.height;
}
function q(e) {
  let t = _(e);
  return "border-box" === t.boxSizing ? t.width - t.paddingLeft - t.paddingRight : t.width;
}
function Y(e) {
  let {
    height,
    marginBottom,
    marginTop
  } = _(e);
  return Math.floor(height + marginBottom + marginTop);
}
function J(e) {
  let {
    width,
    marginLeft,
    marginRight
  } = _(e);
  return Math.floor(width + marginLeft + marginRight);
}
function Z(e) {
  let t = e.getBoundingClientRect();
  let {
    borderTopWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth
  } = _(e);
  return {
    top: t.top + (borderTopWidth || 0),
    left: t.left + (borderLeftWidth || 0),
    right: t.right + (borderRightWidth || 0),
    bottom: t.bottom + (borderBottomWidth || 0)
  };
}
function X() {
  if ("boolean" == typeof u) return u;
  let e = document.createElement("div");
  e.style.direction = "rtl";
  e.style.width = "1px";
  e.style.height = "1px";
  e.style.position = "fixed";
  e.style.top = "0px";
  e.style.overflow = "hidden";
  e.dir = "rtl";
  e.innerHTML = `<div style="width: 2px">
            <span style="display: inline-block; width: 1px"></span>
            <span style="display: inline-block; width: 1px"></span>
        </div>`;
  document.body.appendChild(e);
  e.scrollLeft = 1;
  u = 0 === Math.floor(e.scrollLeft);
  document.body.removeChild(e);
  return u;
}
function Q(e, t) {
  let i = e.scrollLeft;
  t && (i = Math.abs(i), L() && !X() && (i = e.scrollWidth - e.getBoundingClientRect().width - i));
  return i;
}
function ee(e, t, i) {
  i && (X() ? t *= -1 : (I() || L()) && (t = e.scrollWidth - e.getBoundingClientRect().width - t));
  e.scrollLeft = t;
}
function et(e) {
  for (; e && e.firstChild;) e.removeChild(e.firstChild);
}
export function $$ei11(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function es(e) {
  return !!e.offsetParent;
}
function er(e) {
  return e.checkVisibility ? e.checkVisibility({
    checkVisibilityCSS: !0
  }) : !(!es(e) || "visible" !== window.getComputedStyle(e).visibility);
}
function eo(e) {
  let t = document.createElement("div");
  t.innerHTML = (e || "").trim();
  return t.firstChild;
}
function en(e, t, i) {
  (!i || i.nextSibling !== t) && (e.firstChild ? i ? i.nextSibling ? e.insertBefore(t, i.nextSibling) : e.appendChild(t) : e.firstChild && e.firstChild !== t && e.insertAdjacentElement("afterbegin", t) : e.appendChild(t));
}
function el(e, t) {
  for (let i = 0; i < t.length; i++) {
    let s = t[i];
    let r = e.children[i];
    r !== s && e.insertBefore(s, r);
  }
}
function ea(e, t) {
  if (t) for (let i of Object.keys(t)) {
    let s = t[i];
    if (!i || !i.length || null == s) continue;
    let r = i.replace(/[A-Z]/g, e => `-${e.toLocaleLowerCase()}`);
    let o = s.toString();
    let n = o.replace(/\s*!important/g, "");
    let l = n.length != o.length ? "important" : void 0;
    e.style.setProperty(r, n, l);
  }
}
function ed(e, t) {
  "flex" === t ? (e.style.removeProperty("width"), e.style.removeProperty("minWidth"), e.style.removeProperty("maxWidth"), e.style.flex = "1 1 auto") : eh(e, t);
}
function eh(e, t) {
  t = ec(t);
  e.style.width = t.toString();
  e.style.maxWidth = t.toString();
  e.style.minWidth = t.toString();
}
function eu(e, t) {
  t = ec(t);
  e.style.height = t.toString();
  e.style.maxHeight = t.toString();
  e.style.minHeight = t.toString();
}
function ec(e) {
  return "number" == typeof e ? `${e}px` : e;
}
function eg(e) {
  return e instanceof Node || e instanceof HTMLElement;
}
function ep(e, t, i) {
  null == i || "" === i ? e.removeAttribute(t) : e.setAttribute(t, i.toString());
}
function em(e, t) {
  if (null != e) for (let i = 0; i < e.length; i++) t(e[i]);
}
export function $$ef15(e, t, i) {
  let s = e2(e).ResizeObserver;
  let r = s ? new s(i) : null;
  r?.observe(t);
  return () => r?.disconnect();
}
function eC(e) {
  return null == e || "" === e ? null : e;
}
function ew(e) {
  return null != e && "" !== e;
}
function ev(e) {
  return !ew(e);
}
function eb(e) {
  return null != e && "function" == typeof e.toString ? e.toString() : null;
}
function ey(e, t) {
  return (e ? JSON.stringify(e) : null) === (t ? JSON.stringify(t) : null);
}
var eS = "https://www.ag-grid.com";
var eR = {};
function eD(e, t) {
  eR[t] || (e(), eR[t] = !0);
}
function ex(e, t, ...i) {
  e.get("debug") && console.log("AG Grid: " + t, ...i);
}
function eP(e, ...t) {
  eD(() => console.warn("AG Grid: " + e, ...t), e + t?.join(""));
}
function eE(e, ...t) {
  eD(() => console.error("AG Grid: " + e, ...t), e + t?.join(""));
}
var eF = [];
var eA = !1;
function ek(e) {
  eF.push(e);
  eA || (eA = !0, window.setTimeout(() => {
    let e = eF.slice();
    eF.length = 0;
    eA = !1;
    e.forEach(e => e());
  }, 0));
}
function eM(e, t, i) {
  let s;
  return function (...r) {
    let o = this;
    window.clearTimeout(s);
    s = window.setTimeout(function () {
      e.isAlive() && t.apply(o, r);
    }, i);
  };
}
function eT(e, t) {
  let i = 0;
  return function (...s) {
    let r = new Date().getTime();
    r - i < t || (i = r, e.apply(this, s));
  };
}
var eI = "33.1.1";
var eL = "_version_";
var eO = `${eS}/javascript-data-grid`;
function eG(e, t, i) {
  return void 0 ?? [eV(e, t, i)];
}
function eH(e, t, i, s) {
  e(`error #${t}`, ...eG(t, i, s));
}
function eN(e) {
  return void 0 === e ? "undefined" : e;
}
function eB(e, t) {
  return `${e}?${t.toString()}`;
}
var eV = (e, t, i) => {
  let s = function (e, t) {
    let i = new URLSearchParams();
    if (i.append(eL, eI), t) for (let e of Object.keys(t)) i.append(e, function (e) {
      let t = e;
      e instanceof Error ? t = e.toString() : "object" == typeof e && (t = function (e) {
        if (!e) return String(e);
        let t = {};
        for (let i of Object.keys(e)) "object" != typeof e[i] && "function" != typeof e[i] && (t[i] = e[i]);
        return JSON.stringify(t);
      }(e));
      return t;
    }(t[e]));
    let s = `${eO}/errors/${e}`;
    let r = eB(s, i);
    return r.length <= 2e3 ? r : function (e, t, i) {
      let s = Array.from(t.entries()).sort((e, t) => t[1].length - e[1].length);
      let r = eB(e, t);
      for (let [i, o] of s) {
        if (i === eL) continue;
        let s = r.length - 2e3;
        if (s <= 0) break;
        let n = s + 3;
        let l = o.length - n > 100 ? o.slice(0, o.length - n) + "..." : o.slice(0, 100) + "...";
        t.set(i, l);
        r = eB(e, t);
      }
      return r;
    }(s, i, 0);
  }(e, t);
  return `${i ? i + " \n" : ""}Visit ${s}${i ? "" : " \n  Alternatively register the ValidationModule to see the full message in the console."}`;
};
export function $$eW42(...e) {
  eH(eP, e[0], e[1]);
}
function ez(...e) {
  eH(eE, e[0], e[1]);
}
function eU(...e) {
  return function (e, t) {
    let i = t[0];
    return `error #${i} ` + eG(i, t[1], e).join(" ");
  }(void 0, e);
}
function e$(e, t) {
  return e.get("rowModelType") === t;
}
export function $$eK33(e, t) {
  return e$(e, "clientSide");
}
export function $$e_18(e, t) {
  return e$(e, "serverSide");
}
function ej(e, t) {
  return e.get("domLayout") === t;
}
function eq(e) {
  return void 0 !== th(e);
}
function eY(e) {
  return "function" == typeof e.get("getRowHeight");
}
function eJ(e, t, i = !1, s) {
  let {
    gos,
    environment
  } = e;
  if (null == s && (s = environment.getDefaultRowHeight()), eY(gos)) {
    if (i) return {
      height: s,
      estimated: !0
    };
    let e = {
      node: t,
      data: t.data
    };
    let o = gos.getCallback("getRowHeight")(e);
    if (eX(o)) {
      0 === o && $$eW42(23);
      return {
        height: Math.max(1, o),
        estimated: !1
      };
    }
  }
  if (t.detail && gos.get("masterDetail")) return function (e) {
    if (e.get("detailRowAutoHeight")) return {
      height: 1,
      estimated: !1
    };
    let t = e.get("detailRowHeight");
    return eX(t) ? {
      height: t,
      estimated: !1
    } : {
      height: 300,
      estimated: !1
    };
  }(gos);
  let n = gos.get("rowHeight");
  return {
    height: n && eX(n) ? n : s,
    estimated: !1
  };
}
function eZ(e) {
  let {
    environment,
    gos
  } = e;
  let s = gos.get("rowHeight");
  if (!s || ev(s)) return environment.getDefaultRowHeight();
  let r = environment.refreshRowHeightVariable();
  return -1 !== r ? r : ($$eW42(24), environment.getDefaultRowHeight());
}
function eX(e) {
  return !isNaN(e) && "number" == typeof e && isFinite(e);
}
function eQ(e, t, i) {
  let s = t[e.getDomDataKey()];
  return s ? s[i] : void 0;
}
function e0(e, t, i, s) {
  let r = e.getDomDataKey();
  let o = t[r];
  ev(o) && (o = {}, t[r] = o);
  o[i] = s;
}
function e1(e) {
  let {
    gos,
    eGridDiv
  } = e;
  let s = null;
  let r = gos.get("getDocument");
  return (r && ew(r) ? s = r() : eGridDiv && (s = eGridDiv.ownerDocument), s && ew(s)) ? s : document;
}
function e2(e) {
  return e1(e).defaultView || window;
}
function e5(e) {
  return e.eGridDiv.getRootNode();
}
function e3(e) {
  return e5(e).activeElement;
}
function e6(e) {
  let t = null;
  let i = null;
  try {
    t = e1(e).fullscreenElement;
  } catch (e) {} finally {
    t || (t = e5(e));
    let s = t.querySelector("body");
    s ? i = s : t instanceof ShadowRoot ? i = t : t instanceof Document ? i = t?.documentElement : i = t;
  }
  return i;
}
function e4(e) {
  let t = e1(e);
  let i = e3(e);
  return null === i || i === t.body;
}
function e8(e) {
  return !e.get("ensureDomOrder") && e.get("animateRows");
}
function e7(e) {
  return !(e.get("paginateChildRows") || e.get("groupHideOpenParents") || ej(e, "print"));
}
function e9(e) {
  let t = e.get("autoGroupColumnDef");
  return !t?.comparator && !e.get("treeData");
}
function te(e) {
  let t = e.get("groupAggFiltering");
  return "function" == typeof t ? e.getCallback("groupAggFiltering") : !0 === t ? () => !0 : void 0;
}
function tt(e, t) {
  return !t && "groupRows" === e.get("groupDisplayType");
}
function ti(e) {
  let t = e.getCallback("getRowId");
  return void 0 === t ? t : e => {
    let i = t(e);
    "string" != typeof i && ($$eW42(25, {
      id: i
    }), i = String(i));
    return i;
  };
}
function ts(e) {
  return e?.checkboxes ?? !0;
}
function tr(e) {
  return e?.mode === "multiRow" && (e.headerCheckbox ?? !0);
}
function to(e) {
  if ("object" == typeof e) return e.checkboxLocation ?? "selectionColumn";
}
function tn(e) {
  return e?.hideDisabledCheckboxes ?? !1;
}
function tl(e) {
  let t = e.get("cellSelection");
  return void 0 !== t ? !!t : e.get("enableRangeSelection");
}
function ta(e) {
  let t = e.get("rowSelection") ?? "single";
  if ("string" == typeof t) {
    let t = e.get("suppressRowClickSelection");
    let i = e.get("suppressRowDeselection");
    return (!t || !i) && (t ? "enableDeselection" : !i || "enableSelection");
  }
  return ("singleRow" === t.mode || "multiRow" === t.mode) && (t.enableClickSelection ?? !1);
}
function td(e) {
  let t = e.get("rowSelection");
  return "string" == typeof t ? e.get("isRowSelectable") : t?.isRowSelectable;
}
function th(e) {
  let t = "beanName" in e && "gos" === e.beanName ? e.get("rowSelection") : e.rowSelection;
  if ("string" == typeof t) switch (t) {
    case "multiple":
      return "multiRow";
    case "single":
      return "singleRow";
    default:
      return;
  }
  switch (t?.mode) {
    case "multiRow":
    case "singleRow":
      return t.mode;
    default:
      return;
  }
}
function tu(e) {
  return "multiRow" === th(e);
}
function tc(e) {
  let t = e.get("rowSelection");
  if ("string" == typeof t) {
    let t = e.get("groupSelectsChildren");
    let i = e.get("groupSelectsFiltered");
    return t && i ? "filteredDescendants" : t ? "descendants" : "self";
  }
  return t?.mode === "multiRow" ? t.groupSelects : void 0;
}
function tg(e, t = !0) {
  let i = e.get("rowSelection");
  return "object" != typeof i ? t ? "all" : void 0 : "multiRow" === i.mode ? i.selectAll : "all";
}
function tp(e) {
  let t = tc(e);
  return "descendants" === t || "filteredDescendants" === t;
}
function tm(e) {
  let t = e.get("rowSelection");
  return "object" == typeof t && t.masterSelects || "self";
}
function tf(e) {
  return e.isModuleRegistered("SetFilter") && !e.get("suppressSetFilterByDefault");
}
function tC(e) {
  return "legacy" === e.get("columnMenu");
}
function tw(e) {
  return !e || e.length < 2 ? e : "on" + e[0].toUpperCase() + e.substring(1);
}
export function $$tv44(e, t, i) {
  "object" != typeof e && (e = {});
  let s = {
    ...e
  };
  i.forEach(e => {
    let i = t[e];
    void 0 !== i && (s[e] = i);
  });
  return s;
}
export function $$tb24(e, t) {
  if (!e) return;
  let i = {};
  let s = !1;
  if (Object.keys(e).forEach(t => {
    i[t] = e[t];
    s = !0;
  }), !s) return;
  t.dispatchEvent({
    type: "gridOptionsChanged",
    options: i
  });
  let r = {
    type: "componentStateChanged",
    ...i
  };
  t.dispatchEvent(r);
}
function ty(e, t) {
  return e.addGridCommonParams(t);
}
var tS = "__ag_Grid_Stop_Propagation";
var tR = ["touchstart", "touchend", "touchmove", "touchcancel", "scroll"];
var tD = ["wheel"];
var tx = {};
function tP(e) {
  e[tS] = !0;
}
function tE(e) {
  return !0 === e[tS];
}
var tF = (() => {
  let e = {
    select: "input",
    change: "input",
    submit: "form",
    reset: "form",
    error: "img",
    load: "img",
    abort: "img"
  };
  return t => {
    if ("boolean" == typeof tx[t]) return tx[t];
    let i = document.createElement(e[t] || "div");
    return tx[t = "on" + t] = t in i;
  };
})();
function tA(e, t, i) {
  let s = t;
  for (; s;) {
    let t = eQ(e, s, i);
    if (t) return t;
    s = s.parentElement;
  }
  return null;
}
var tk = e => {
  let t = tR.includes(e);
  let i = tD.includes(e);
  return !!t || !i && void 0;
};
var $$tM23 = class {
  constructor() {
    this.destroyFunctions = [];
    this.destroyed = !1;
    this.__v_skip = !0;
    this.propertyListenerId = 0;
    this.lastChangeSetIdLookup = {};
    this.isAlive = () => !this.destroyed;
  }
  preWireBeans(e) {
    this.beans = e;
    this.stubContext = e.context;
    this.eventSvc = e.eventSvc;
    this.gos = e.gos;
  }
  destroy() {
    let {
      destroyFunctions
    } = this;
    for (let t = 0; t < destroyFunctions.length; t++) destroyFunctions[t]();
    destroyFunctions.length = 0;
    this.destroyed = !0;
    this.dispatchLocalEvent({
      type: "destroyed"
    });
  }
  addEventListener(e, t, i) {
    this.localEventService || (this.localEventService = new p());
    this.localEventService.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    this.localEventService?.removeEventListener(e, t, i);
  }
  dispatchLocalEvent(e) {
    this.localEventService?.dispatchEvent(e);
  }
  addManagedElementListeners(e, t) {
    return this._setupListeners(e, t);
  }
  addManagedEventListeners(e) {
    return this._setupListeners(this.eventSvc, e);
  }
  addManagedListeners(e, t) {
    return this._setupListeners(e, t);
  }
  _setupListeners(e, t) {
    let i = [];
    for (let s of Object.keys(t)) {
      let r = t[s];
      r && i.push(this._setupListener(e, s, r));
    }
    return i;
  }
  _setupListener(e, t, i) {
    let s;
    return this.destroyed ? () => null : (void 0 !== e.__addEventListener ? (e.__addEventListener(t, i), s = () => (e.__removeEventListener(t, i), null)) : (e instanceof HTMLElement ? function (e, t, i, s) {
      let r;
      let o = tk(i);
      null != o && (r = {
        passive: o
      });
      e && e.addEventListener && e.addEventListener(t, i, s, r);
    }(this.beans.frameworkOverrides, e, t, i) : e.addEventListener(t, i), s = () => (e.removeEventListener(t, i), null)), this.destroyFunctions.push(s), () => (s(), this.destroyFunctions = this.destroyFunctions.filter(e => e !== s), null));
  }
  setupGridOptionListener(e, t) {
    let {
      gos
    } = this;
    gos.addPropertyEventListener(e, t);
    let s = () => (gos.removePropertyEventListener(e, t), null);
    this.destroyFunctions.push(s);
    return () => (s(), this.destroyFunctions = this.destroyFunctions.filter(e => e !== s), null);
  }
  addManagedPropertyListener(e, t) {
    return this.destroyed ? () => null : this.setupGridOptionListener(e, t);
  }
  addManagedPropertyListeners(e, t) {
    if (this.destroyed) return;
    let i = e.join("-") + this.propertyListenerId++;
    let s = e => {
      if (e.changeSet) {
        if (e.changeSet && e.changeSet.id === this.lastChangeSetIdLookup[i]) return;
        this.lastChangeSetIdLookup[i] = e.changeSet.id;
      }
      t({
        type: "gridPropertyChanged",
        changeSet: e.changeSet,
        source: e.source
      });
    };
    e.forEach(e => this.setupGridOptionListener(e, s));
  }
  getLocaleTextFunc() {
    return $$f13(this.beans.localeSvc);
  }
  addDestroyFunc(e) {
    this.isAlive() ? this.destroyFunctions.push(e) : e();
  }
  createOptionalManagedBean(e, t) {
    return e ? this.createManagedBean(e, t) : void 0;
  }
  createManagedBean(e, t) {
    let i = this.createBean(e, t);
    this.addDestroyFunc(this.destroyBean.bind(this, e, t));
    return i;
  }
  createBean(e, t, i) {
    return (t || this.stubContext).createBean(e, i);
  }
  destroyBean(e, t) {
    return (t || this.stubContext).destroyBean(e);
  }
  destroyBeans(e, t) {
    return (t || this.stubContext).destroyBeans(e);
  }
};
var tT = new Set(["__proto__", "constructor", "prototype"]);
function tI(e, t, i = !0, s = !1) {
  ew(t) && function (e, t) {
    if (null != e) {
      if (Array.isArray(e)) {
        for (let i = 0; i < e.length; i++) t(i.toString(), e[i]);
        return;
      }
      for (let i of Object.keys(e)) t(i, e[i]);
    }
  }(t, (t, r) => {
    if (tT.has(t)) return;
    let o = e[t];
    o !== r && (s && null == o && null != r && "object" == typeof r && r.constructor === Object && (o = {}, e[t] = o), tO(r) && tO(o) && !Array.isArray(o) ? tI(o, r, i, s) : (i || void 0 !== r) && (e[t] = r));
  });
}
function tL(e, t, i) {
  if (!t || !e) return;
  if (!i) return e[t];
  let s = t.split(".");
  let r = e;
  for (let e = 0; e < s.length; e++) {
    if (null == r) return;
    r = r[s[e]];
  }
  return r;
}
function tO(e) {
  return "object" == typeof e && null !== e;
}
var tG = /[&<>"']/g;
var tH = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
export function $$tN25(e, t) {
  if (null == e) return null;
  let i = e.toString().toString();
  return t ? i : i.replace(tG, e => tH[e]);
}
var tB = {
  resizable: !0,
  sortable: !0
};
var tV = 0;
function tW(e) {
  return e instanceof tz;
}
var tz = class extends $$tM23 {
  constructor(e, t, i, s) {
    super();
    this.colDef = e;
    this.userProvidedColDef = t;
    this.colId = i;
    this.primary = s;
    this.isColumn = !0;
    this.instanceId = tV++;
    this.autoHeaderHeight = null;
    this.moving = !1;
    this.menuVisible = !1;
    this.lastLeftPinned = !1;
    this.firstRightPinned = !1;
    this.filterActive = !1;
    this.colEventSvc = new p();
    this.tooltipEnabled = !1;
    this.rowGroupActive = !1;
    this.pivotActive = !1;
    this.aggregationActive = !1;
    this.flex = null;
    this.colIdSanitised = $$tN25(i);
  }
  destroy() {
    super.destroy();
    this.beans.rowSpanSvc?.deregister(this);
  }
  getInstanceId() {
    return this.instanceId;
  }
  setState() {
    let {
      colDef,
      beans: {
        sortSvc,
        pinnedCols,
        colFlex
      }
    } = this;
    sortSvc?.initCol(this);
    let r = colDef.hide;
    void 0 !== r ? this.visible = !r : this.visible = !colDef.initialHide;
    pinnedCols?.initCol(this);
    colFlex?.initCol(this);
  }
  setColDef(e, t, i) {
    let s = e.spanRows !== this.colDef.spanRows;
    this.colDef = e;
    this.userProvidedColDef = t;
    this.initMinAndMaxWidths();
    this.initDotNotation();
    this.initTooltip();
    s && (this.beans.rowSpanSvc?.deregister(this), this.initRowSpan());
    this.dispatchColEvent("colDefChanged", i);
  }
  getUserProvidedColDef() {
    return this.userProvidedColDef;
  }
  getParent() {
    return this.parent;
  }
  getOriginalParent() {
    return this.originalParent;
  }
  postConstruct() {
    this.setState();
    this.initMinAndMaxWidths();
    this.resetActualWidth("gridInitializing");
    this.initDotNotation();
    this.initTooltip();
    this.initRowSpan();
  }
  initDotNotation() {
    let {
      gos,
      colDef: {
        field,
        tooltipField
      }
    } = this;
    let s = gos.get("suppressFieldDotNotation");
    this.fieldContainsDots = ew(field) && field.indexOf(".") >= 0 && !s;
    this.tooltipFieldContainsDots = ew(tooltipField) && tooltipField.indexOf(".") >= 0 && !s;
  }
  initMinAndMaxWidths() {
    let e = this.colDef;
    this.minWidth = e.minWidth ?? this.beans.environment.getDefaultColumnMinWidth();
    this.maxWidth = e.maxWidth ?? Number.MAX_SAFE_INTEGER;
  }
  initTooltip() {
    this.beans.tooltipSvc?.initCol(this);
  }
  initRowSpan() {
    this.colDef.spanRows && this.beans.rowSpanSvc?.register(this);
  }
  resetActualWidth(e) {
    let t = this.calculateColInitialWidth(this.colDef);
    this.setActualWidth(t, e, !0);
  }
  calculateColInitialWidth(e) {
    let t = e.width;
    let i = e.initialWidth;
    return Math.max(Math.min(null != t ? t : null != i ? i : 200, this.maxWidth), this.minWidth);
  }
  isEmptyGroup() {
    return !1;
  }
  isRowGroupDisplayed(e) {
    return this.beans.showRowGroupCols?.isRowGroupDisplayed(this, e) ?? !1;
  }
  isPrimary() {
    return this.primary;
  }
  isFilterAllowed() {
    return !!this.colDef.filter;
  }
  isFieldContainsDots() {
    return this.fieldContainsDots;
  }
  isTooltipEnabled() {
    return this.tooltipEnabled;
  }
  isTooltipFieldContainsDots() {
    return this.tooltipFieldContainsDots;
  }
  getHighlighted() {
    return this.highlighted;
  }
  __addEventListener(e, t) {
    this.colEventSvc.addEventListener(e, t);
  }
  __removeEventListener(e, t) {
    this.colEventSvc.removeEventListener(e, t);
  }
  addEventListener(e, t) {
    this.frameworkEventListenerService = this.beans.frameworkOverrides.createLocalEventListenerWrapper?.(this.frameworkEventListenerService, this.colEventSvc);
    let i = this.frameworkEventListenerService?.wrap(t) ?? t;
    this.colEventSvc.addEventListener(e, i);
  }
  removeEventListener(e, t) {
    let i = this.frameworkEventListenerService?.unwrap(t) ?? t;
    this.colEventSvc.removeEventListener(e, i);
  }
  createColumnFunctionCallbackParams(e) {
    return ty(this.gos, {
      node: e,
      data: e.data,
      column: this,
      colDef: this.colDef
    });
  }
  isSuppressNavigable(e) {
    return this.beans.cellNavigation?.isSuppressNavigable(this, e) ?? !1;
  }
  isCellEditable(e) {
    return this.beans.editSvc?.isCellEditable(this, e) ?? !1;
  }
  isSuppressFillHandle() {
    return !!this.colDef.suppressFillHandle;
  }
  isAutoHeight() {
    return !!this.colDef.autoHeight;
  }
  isAutoHeaderHeight() {
    return !!this.colDef.autoHeaderHeight;
  }
  isRowDrag(e) {
    return this.isColumnFunc(e, this.colDef.rowDrag);
  }
  isDndSource(e) {
    return this.isColumnFunc(e, this.colDef.dndSource);
  }
  isCellCheckboxSelection(e) {
    return this.beans.selectionSvc?.isCellCheckboxSelection(this, e) ?? !1;
  }
  isSuppressPaste(e) {
    return this.isColumnFunc(e, this.colDef?.suppressPaste ?? null);
  }
  isResizable() {
    return !!this.getColDefValue("resizable");
  }
  getColDefValue(e) {
    return this.colDef[e] ?? tB[e];
  }
  isColumnFunc(e, t) {
    return "boolean" == typeof t ? t : "function" == typeof t && t(this.createColumnFunctionCallbackParams(e));
  }
  createColumnEvent(e, t) {
    return ty(this.gos, {
      type: e,
      column: this,
      columns: [this],
      source: t
    });
  }
  isMoving() {
    return this.moving;
  }
  getSort() {
    return this.sort;
  }
  isSortable() {
    return !!this.getColDefValue("sortable");
  }
  isSortAscending() {
    return "asc" === this.sort;
  }
  isSortDescending() {
    return "desc" === this.sort;
  }
  isSortNone() {
    return ev(this.sort);
  }
  isSorting() {
    return ew(this.sort);
  }
  getSortIndex() {
    return this.sortIndex;
  }
  isMenuVisible() {
    return this.menuVisible;
  }
  getAggFunc() {
    return this.aggFunc;
  }
  getLeft() {
    return this.left;
  }
  getOldLeft() {
    return this.oldLeft;
  }
  getRight() {
    return this.left + this.actualWidth;
  }
  setLeft(e, t) {
    this.oldLeft = this.left;
    this.left !== e && (this.left = e, this.dispatchColEvent("leftChanged", t));
  }
  isFilterActive() {
    return this.filterActive;
  }
  isHovered() {
    $$eW42(261);
    return !!this.beans.colHover?.isHovered(this);
  }
  setFirstRightPinned(e, t) {
    this.firstRightPinned !== e && (this.firstRightPinned = e, this.dispatchColEvent("firstRightPinnedChanged", t));
  }
  setLastLeftPinned(e, t) {
    this.lastLeftPinned !== e && (this.lastLeftPinned = e, this.dispatchColEvent("lastLeftPinnedChanged", t));
  }
  isFirstRightPinned() {
    return this.firstRightPinned;
  }
  isLastLeftPinned() {
    return this.lastLeftPinned;
  }
  isPinned() {
    return "left" === this.pinned || "right" === this.pinned;
  }
  isPinnedLeft() {
    return "left" === this.pinned;
  }
  isPinnedRight() {
    return "right" === this.pinned;
  }
  getPinned() {
    return this.pinned;
  }
  setVisible(e, t) {
    let i = !0 === e;
    this.visible !== i && (this.visible = i, this.dispatchColEvent("visibleChanged", t));
    this.dispatchStateUpdatedEvent("hide");
  }
  isVisible() {
    return this.visible;
  }
  isSpanHeaderHeight() {
    return !this.getColDef().suppressSpanHeaderHeight;
  }
  getColumnGroupPaddingInfo() {
    let e = this.getParent();
    if (!e || !e.isPadding()) return {
      numberOfParents: 0,
      isSpanningTotal: !1
    };
    let t = e.getPaddingLevel() + 1;
    let i = !0;
    for (; e;) {
      if (!e.isPadding()) {
        i = !1;
        break;
      }
      e = e.getParent();
    }
    return {
      numberOfParents: t,
      isSpanningTotal: i
    };
  }
  getColDef() {
    return this.colDef;
  }
  getDefinition() {
    return this.colDef;
  }
  getColumnGroupShow() {
    return this.colDef.columnGroupShow;
  }
  getColId() {
    return this.colId;
  }
  getId() {
    return this.colId;
  }
  getUniqueId() {
    return this.colId;
  }
  getActualWidth() {
    return this.actualWidth;
  }
  getAutoHeaderHeight() {
    return this.autoHeaderHeight;
  }
  setAutoHeaderHeight(e) {
    let t = e !== this.autoHeaderHeight;
    this.autoHeaderHeight = e;
    return t;
  }
  createBaseColDefParams(e) {
    return ty(this.gos, {
      node: e,
      data: e.data,
      colDef: this.colDef,
      column: this
    });
  }
  getColSpan(e) {
    if (ev(this.colDef.colSpan)) return 1;
    let t = this.createBaseColDefParams(e);
    return Math.max(this.colDef.colSpan(t), 1);
  }
  getRowSpan(e) {
    if (ev(this.colDef.rowSpan)) return 1;
    let t = this.createBaseColDefParams(e);
    return Math.max(this.colDef.rowSpan(t), 1);
  }
  setActualWidth(e, t, i = !1) {
    e = Math.min(e = Math.max(e, this.minWidth), this.maxWidth);
    this.actualWidth === e || (this.actualWidth = e, null != this.flex && "flex" !== t && "gridInitializing" !== t && (this.flex = null), i || this.fireColumnWidthChangedEvent(t));
    this.dispatchStateUpdatedEvent("width");
  }
  fireColumnWidthChangedEvent(e) {
    this.dispatchColEvent("widthChanged", e);
  }
  isGreaterThanMax(e) {
    return e > this.maxWidth;
  }
  getMinWidth() {
    return this.minWidth;
  }
  getMaxWidth() {
    return this.maxWidth;
  }
  getFlex() {
    return this.flex;
  }
  isRowGroupActive() {
    return this.rowGroupActive;
  }
  isPivotActive() {
    return this.pivotActive;
  }
  isAnyFunctionActive() {
    return this.isPivotActive() || this.isRowGroupActive() || this.isValueActive();
  }
  isAnyFunctionAllowed() {
    return this.isAllowPivot() || this.isAllowRowGroup() || this.isAllowValue();
  }
  isValueActive() {
    return this.aggregationActive;
  }
  isAllowPivot() {
    return !0 === this.colDef.enablePivot;
  }
  isAllowValue() {
    return !0 === this.colDef.enableValue;
  }
  isAllowRowGroup() {
    return !0 === this.colDef.enableRowGroup;
  }
  dispatchColEvent(e, t, i) {
    let s = this.createColumnEvent(e, t);
    i && tI(s, i);
    this.colEventSvc.dispatchEvent(s);
  }
  dispatchStateUpdatedEvent(e) {
    this.colEventSvc.dispatchEvent({
      type: "columnStateUpdated",
      key: e
    });
  }
};
function tU(e) {
  return e instanceof t$;
}
var t$ = class extends $$tM23 {
  constructor(e, t, i, s) {
    super();
    this.colGroupDef = e;
    this.groupId = t;
    this.padding = i;
    this.level = s;
    this.isColumn = !1;
    this.expandable = !1;
    this.instanceId = tV++;
    this.expandableListenerRemoveCallback = null;
    this.expanded = !!e?.openByDefault;
  }
  destroy() {
    this.expandableListenerRemoveCallback && this.reset(null, void 0);
    super.destroy();
  }
  reset(e, t) {
    this.colGroupDef = e;
    this.level = t;
    this.originalParent = null;
    this.expandableListenerRemoveCallback && this.expandableListenerRemoveCallback();
    this.children = void 0;
    this.expandable = void 0;
  }
  getInstanceId() {
    return this.instanceId;
  }
  getOriginalParent() {
    return this.originalParent;
  }
  getLevel() {
    return this.level;
  }
  isVisible() {
    return !!this.children && this.children.some(e => e.isVisible());
  }
  isPadding() {
    return this.padding;
  }
  setExpanded(e) {
    this.expanded = void 0 !== e && e;
    this.dispatchLocalEvent({
      type: "expandedChanged"
    });
  }
  isExpandable() {
    return this.expandable;
  }
  isExpanded() {
    return this.expanded;
  }
  getGroupId() {
    return this.groupId;
  }
  getId() {
    return this.getGroupId();
  }
  setChildren(e) {
    this.children = e;
  }
  getChildren() {
    return this.children;
  }
  getColGroupDef() {
    return this.colGroupDef;
  }
  getLeafColumns() {
    let e = [];
    this.addLeafColumns(e);
    return e;
  }
  addLeafColumns(e) {
    this.children && this.children.forEach(t => {
      tW(t) ? e.push(t) : tU(t) && t.addLeafColumns(e);
    });
  }
  getColumnGroupShow() {
    let e = this.colGroupDef;
    if (e) return e.columnGroupShow;
  }
  setupExpandable() {
    this.setExpandable();
    this.expandableListenerRemoveCallback && this.expandableListenerRemoveCallback();
    let e = this.onColumnVisibilityChanged.bind(this);
    this.getLeafColumns().forEach(t => t.__addEventListener("visibleChanged", e));
    this.expandableListenerRemoveCallback = () => {
      this.getLeafColumns().forEach(t => t.__removeEventListener("visibleChanged", e));
      this.expandableListenerRemoveCallback = null;
    };
  }
  setExpandable() {
    if (this.isPadding()) return;
    let e = !1;
    let t = !1;
    let i = !1;
    let s = this.findChildrenRemovingPadding();
    for (function () {
      let r = 0;
      let o = s.length;
    }(); r < o; r++) {
      let o = s[r];
      if (!o.isVisible()) continue;
      let n = o.getColumnGroupShow();
      "open" === n ? (e = !0, i = !0) : "closed" === n ? (t = !0, i = !0) : (e = !0, t = !0);
    }
    let r = e && t && i;
    this.expandable !== r && (this.expandable = r, this.dispatchLocalEvent({
      type: "expandableChanged"
    }));
  }
  findChildrenRemovingPadding() {
    let e = [];
    let t = i => {
      i.forEach(i => {
        tU(i) && i.isPadding() ? t(i.children) : e.push(i);
      });
    };
    t(this.children);
    return e;
  }
  onColumnVisibilityChanged() {
    this.setExpandable();
  }
};
var tK = {
  numericColumn: {
    headerClass: "ag-right-aligned-header",
    cellClass: "ag-right-aligned-cell"
  },
  rightAligned: {
    headerClass: "ag-right-aligned-header",
    cellClass: "ag-right-aligned-cell"
  }
};
var t_ = class {
  constructor() {
    this.existingKeys = {};
  }
  addExistingKeys(e) {
    for (let t = 0; t < e.length; t++) this.existingKeys[e[t]] = !0;
  }
  getUniqueKey(e, t) {
    e = eb(e);
    let i = 0;
    for (;;) {
      let s = e ?? t;
      if (s ? 0 !== i && (s += "_" + i) : s = i, !this.existingKeys[s]) {
        this.existingKeys[s] = !0;
        return String(s);
      }
      i++;
    }
  }
};
var tj = Object.freeze([]);
function tq(e) {
  if (e?.length) return e[e.length - 1];
}
function tY(e, t, i) {
  return null == e && null == t || null != e && null != t && e.length === t.length && e.every((e, s) => i ? i(e, t[s]) : t[s] === e);
}
function tJ(e, t) {
  let i = e.indexOf(t);
  i >= 0 && e.splice(i, 1);
}
function tZ(e, t, i) {
  for (let i = 0; i < t.length; i++) tJ(e, t[i]);
  for (let s = t.length - 1; s >= 0; s--) e.splice(i, 0, t[s]);
}
var tX = "ag-Grid-AutoColumn";
var tQ = "ag-Grid-SelectionColumn";
function t0(e) {
  let t = [];
  let i = e => {
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      tW(r) ? t.push(r) : tU(r) && i(r.getChildren());
    }
  };
  i(e);
  return t;
}
function t1(e) {
  return e.reduce((e, t) => e + t.getActualWidth(), 0);
}
function t2(e, t, i) {
  let s = {};
  if (!t) return;
  is(null, t, e => {
    s[e.getInstanceId()] = e;
  });
  i && is(null, i, e => {
    s[e.getInstanceId()] = null;
  });
  let r = Object.values(s).filter(e => null != e);
  e.context.destroyBeans(r);
}
function t5(e) {
  return e.getId().startsWith(tX);
}
function t3(e) {
  let t = "string" == typeof e ? e : "getColId" in e ? e.getColId() : e.colId;
  return t?.startsWith(tQ) ?? !1;
}
function t6(e) {
  let t = "string" == typeof e ? e : "getColId" in e ? e.getColId() : e.colId;
  return t?.startsWith("ag-Grid-RowNumbersColumn") ?? !1;
}
function t4(e) {
  let t = [];
  e instanceof Array ? t = e : "string" == typeof e && (t = e.split(","));
  return t;
}
function t8(e) {
  return "gridOptionsUpdated" === e ? "gridOptionsChanged" : e;
}
function t7(e, t) {
  let i = e === t;
  let s = e.getColDef() === t;
  let r = e.getColId() == t;
  return i || s || r;
}
var t9 = (e, t) => (i, s) => {
  let r = {
    value1: void 0,
    value2: void 0
  };
  let o = !1;
  e && (void 0 !== e[i] && (r.value1 = e[i], o = !0), ew(s) && void 0 !== e[s] && (r.value2 = e[s], o = !0));
  !o && t && (void 0 !== t[i] && (r.value1 = t[i]), ew(s) && void 0 !== t[s] && (r.value2 = t[s]));
  return r;
};
function ie(e, t, i, s, r, o, n, l) {
  if (!t) return [];
  let {
    colGroupSvc
  } = e;
  let d = Array(t.length);
  for (let h = 0; h < d.length; h++) {
    let u = t[h];
    colGroupSvc && void 0 !== u.children ? d[h] = colGroupSvc.createProvidedColumnGroup(s, u, i, r, o, n, l) : d[h] = function (e, t, i, s, r, o) {
      let n = function (e, t) {
        if (t) for (let i = 0; i < t.length; i++) {
          let s = t[i].getUserProvidedColDef();
          if (s) {
            if (null != e.colId) {
              if (t[i].getId() === e.colId) return {
                idx: i,
                column: t[i]
              };
              continue;
            }
            if (null != e.field) {
              if (s.field === e.field) return {
                idx: i,
                column: t[i]
              };
              continue;
            }
            if (s === e) return {
              idx: i,
              column: t[i]
            };
          }
        }
      }(i, s);
      n && s?.splice(n.idx, 1);
      let l = n?.column;
      if (l) {
        let t = ii(e, i, l.getColId());
        l.setColDef(t, i, o);
        (function (e, t, i, s) {
          it(e, t, i.hide, i.sort, i.sortIndex, i.pinned, i.flex, s);
          let r = t.getFlex();
          if (null == r || !(r > 0)) {
            if (null != i.width) t.setActualWidth(i.width, s);else {
              let e = t.getActualWidth();
              t.setActualWidth(e, s);
            }
          }
        })(e, l, t, o);
      } else {
        let s = r.getUniqueKey(i.colId, i.field);
        l = new tz(ii(e, i, s), i, s, t);
        e.context.createBean(l);
      }
      e.dataTypeSvc?.addColumnListeners(l);
      return l;
    }(e, s, u, r, o, l);
  }
  return d;
}
function it(e, t, i, s, r, o, n, l) {
  let {
    sortSvc,
    pinnedCols,
    colFlex
  } = e;
  void 0 !== i && t.setVisible(!i, l);
  sortSvc && (sortSvc.updateColSort(t, s, l), void 0 !== r && sortSvc.setColSortIndex(t, r));
  void 0 !== o && pinnedCols?.setColPinned(t, o);
  void 0 !== n && colFlex?.setColFlex(t, n);
}
function ii(e, t, i, s) {
  let {
    gos,
    dataTypeSvc,
    validation
  } = e;
  let l = {};
  tI(l, gos.get("defaultColDef"), !1, !0);
  let a = function (e, t, i, s) {
    let r = e.dataTypeSvc?.updateColDefAndGetColumnType(t, i, s);
    let o = i.type ?? r ?? t.type;
    t.type = o;
    return o ? t4(o) : void 0;
  }(e, l, t, i);
  a && function (e, t, i) {
    if (!t.length) return;
    let s = Object.assign({}, tK);
    let r = e.gos.get("columnTypes") || {};
    for (let e of Object.keys(r)) {
      let t = r[e];
      e in s ? $$eW42(34, {
        key: e
      }) : (t.type && $$eW42(35), s[e] = t);
    }
    t.forEach(e => {
      let t = s[e.trim()];
      t ? tI(i, t, !1, !0) : $$eW42(36, {
        t: e
      });
    });
  }(e, a, l);
  tI(l, t, !1, !0);
  let d = gos.get("autoGroupColumnDef");
  let h = e9(gos);
  t.rowGroup && d && h && tI(l, {
    sort: d.sort,
    initialSort: d.initialSort
  }, !1, !0);
  dataTypeSvc?.validateColDef(l);
  validation?.validateColDef(l, i, s);
  return l;
}
function is(e, t, i) {
  if (t) for (let s = 0; s < t.length; s++) {
    let r = t[s];
    tU(r) && is(r, r.getChildren(), i);
    i(r, e);
  }
}
function ir(e, t) {
  let i = [];
  let s = [];
  let r = [];
  return (e.forEach(e => {
    let t = e.getColDef().lockPosition;
    "right" === t ? r.push(e) : "left" === t || !0 === t ? i.push(e) : s.push(e);
  }), t.get("enableRtl")) ? [...r, ...s, ...i] : [...i, ...s, ...r];
}
function io(e, t) {
  let i = !0;
  is(null, t, t => {
    if (!tU(t)) return;
    let s = t.getColGroupDef();
    if (!(s && s.marryChildren)) return;
    let r = [];
    t.getLeafColumns().forEach(t => {
      let i = e.indexOf(t);
      r.push(i);
    });
    Math.max.apply(Math, r) - Math.min.apply(Math, r) > t.getLeafColumns().length - 1 && (i = !1);
  });
  return i;
}
function il(e, t) {
  if (!e || 0 == e.length) return;
  let i = t(e[0]);
  for (let s = 1; s < e.length; s++) if (i !== t(e[s])) return;
  return i;
}
function ia(e, t, i) {
  if (!t.length) return;
  let s = 1 === t.length ? t[0] : null;
  let r = il(t, e => e.getPinned());
  e.dispatchEvent({
    type: "columnPinned",
    pinned: null != r ? r : null,
    columns: t,
    column: s,
    source: i
  });
}
function id(e, t, i, s, r = null) {
  t?.length && e.dispatchEvent({
    type: "columnResized",
    columns: t,
    column: 1 === t.length ? t[0] : null,
    flexColumns: r,
    finished: i,
    source: s
  });
}
function ih(e, t, i) {
  let {
    colModel,
    rowGroupColsSvc,
    pivotColsSvc,
    autoColSvc,
    selectionColSvc,
    colAnimation,
    visibleCols,
    pivotResultCols,
    environment,
    valueColsSvc,
    eventSvc,
    gos
  } = e;
  let m = colModel.getColDefCols() || [];
  if (!m?.length) return !1;
  if (t?.state && !t.state.forEach) {
    $$eW42(32);
    return !1;
  }
  let f = (s, n, l, a, d) => {
    if (!s) return;
    let h = t9(n, t.defaultState);
    let g = h("flex").value1;
    if (it(e, s, h("hide").value1, h("sort").value1, h("sortIndex").value1, h("pinned").value1, g, i), null == g) {
      let e = h("width").value1;
      if (null != e) {
        let t = s.getColDef().minWidth ?? environment.getDefaultColumnMinWidth();
        null != t && e >= t && s.setActualWidth(e, i);
      }
    }
    !d && s.isPrimary() && (valueColsSvc?.syncColumnWithState(s, i, h), rowGroupColsSvc?.syncColumnWithState(s, i, h, l), pivotColsSvc?.syncColumnWithState(s, i, h, a));
  };
  let C = (a, h, u) => {
    let c = iu(e, i);
    let m = h.slice();
    let C = {};
    let w = {};
    let v = [];
    let b = [];
    let y = [];
    let S = 0;
    let R = rowGroupColsSvc?.columns.slice() ?? [];
    let D = pivotColsSvc?.columns.slice() ?? [];
    a.forEach(e => {
      let t = e.colId;
      if (t.startsWith(tX)) {
        v.push(e);
        y.push(e);
        return;
      }
      if (t3(t)) {
        b.push(e);
        y.push(e);
        return;
      }
      let i = u(t);
      i ? (f(i, e, C, w, !1), tJ(m, i)) : (y.push(e), S += 1);
    });
    let x = e => f(e, null, C, w, !1);
    m.forEach(x);
    rowGroupColsSvc?.sortColumns(ip.bind(rowGroupColsSvc, C, R));
    pivotColsSvc?.sortColumns(ip.bind(pivotColsSvc, w, D));
    colModel.refreshCols(!1);
    let P = (e, t, i = []) => {
      t.forEach(t => {
        let s = e(t.colId);
        tJ(i, s);
        f(s, t, null, null, !0);
      });
      i.forEach(x);
    };
    P(e => autoColSvc?.getColumn(e) ?? null, v, autoColSvc?.getColumns()?.slice());
    P(e => selectionColSvc?.getColumn(e) ?? null, b, selectionColSvc?.getColumns()?.slice());
    (function (e, t, i) {
      if (!e.applyOrder || !e.state) return;
      let s = [];
      e.state.forEach(e => {
        null != e.colId && s.push(e.colId);
      });
      (function (e, t, i, s) {
        if (null == e) return;
        let r = [];
        let o = {};
        t.forEach(t => {
          if (o[t]) return;
          let i = e.map[t];
          i && (r.push(i), o[t] = !0);
        });
        let n = 0;
        if (e.list.forEach(e => {
          let t = e.getColId();
          null == o[t] && (t.startsWith(tX) ? r.splice(n++, 0, e) : r.push(e));
        }), !io(r = ir(r, s), i.getColTree())) {
          $$eW42(39);
          return;
        }
        e.list = r;
      })(t.cols, s, t, i);
    })(t, colModel, gos);
    visibleCols.refresh(i);
    eventSvc.dispatchEvent({
      type: "columnEverythingChanged",
      source: i
    });
    c();
    return {
      unmatchedAndAutoStates: y,
      unmatchedCount: S
    };
  };
  colAnimation?.start();
  let {
    unmatchedAndAutoStates,
    unmatchedCount
  } = C(t.state || [], m, e => colModel.getColDefCol(e));
  (unmatchedAndAutoStates.length > 0 || ew(t.defaultState)) && (v = C(unmatchedAndAutoStates, pivotResultCols?.getPivotResultCols()?.list ?? [], e => pivotResultCols?.getPivotResultCol(e) ?? null).unmatchedCount);
  colAnimation?.finish();
  return 0 === unmatchedCount;
}
function iu(e, t) {
  let {
    rowGroupColsSvc,
    pivotColsSvc,
    valueColsSvc,
    colModel,
    sortSvc,
    eventSvc
  } = e;
  let a = {
    rowGroupColumns: rowGroupColsSvc?.columns.slice() ?? [],
    pivotColumns: pivotColsSvc?.columns.slice() ?? [],
    valueColumns: valueColsSvc?.columns.slice() ?? []
  };
  let d = ic(e);
  let h = {};
  d.forEach(e => {
    h[e.colId] = e;
  });
  return () => {
    let r = colModel.getAllCols();
    let u = (e, i, s, r) => {
      if (tY(i.map(r), s.map(r))) return;
      let o = new Set(i);
      s.forEach(e => {
        o.$$delete(e) || o.add(e);
      });
      let n = [...o];
      eventSvc.dispatchEvent({
        type: e,
        columns: n,
        column: 1 === n.length ? n[0] : null,
        source: t
      });
    };
    let c = e => {
      let t = [];
      r.forEach(i => {
        let s = h[i.getColId()];
        s && e(s, i) && t.push(i);
      });
      return t;
    };
    let g = e => e.getColId();
    u("columnRowGroupChanged", a.rowGroupColumns, rowGroupColsSvc?.columns ?? [], g);
    u("columnPivotChanged", a.pivotColumns, pivotColsSvc?.columns ?? [], g);
    let p = c((e, t) => {
      let i = null != e.aggFunc;
      let s = i != t.isValueActive();
      let r = i && e.aggFunc != t.getAggFunc();
      return s || r;
    });
    p.length > 0 && function (e, t, i, s) {
      e.dispatchEvent({
        type: t,
        columns: i,
        column: i && 1 == i.length ? i[0] : null,
        source: s
      });
    }(eventSvc, "columnValueChanged", p, t);
    id(eventSvc, c((e, t) => e.width != t.getActualWidth()), !0, t);
    ia(eventSvc, c((e, t) => e.pinned != t.getPinned()), t);
    (function (e, t, i) {
      if (!t.length) return;
      let s = 1 === t.length ? t[0] : null;
      let r = il(t, e => e.isVisible());
      e.dispatchEvent({
        type: "columnVisible",
        visible: r,
        columns: t,
        column: s,
        source: i
      });
    })(eventSvc, c((e, t) => e.hide == t.isVisible()), t);
    let m = c((e, t) => e.sort != t.getSort() || e.sortIndex != t.getSortIndex());
    m.length > 0 && sortSvc?.dispatchSortChangedEvents(t, m);
    (function (e, t, i, s, r) {
      let o = {};
      t.forEach(e => o[e.colId] = e);
      let n = {};
      e.forEach(e => {
        o[e.colId] && (n[e.colId] = !0);
      });
      let l = e.filter(e => n[e.colId]);
      let a = t.filter(e => n[e.colId]);
      let d = [];
      a.forEach((e, t) => {
        let i = l && l[t];
        if (i && i.colId !== e.colId) {
          let e = s.getCol(i.colId);
          e && d.push(e);
        }
      });
      d.length && r.dispatchEvent({
        type: "columnMoved",
        columns: d,
        column: 1 === d.length ? d[0] : null,
        finished: !0,
        source: i
      });
    })(d, ic(e), t, colModel, eventSvc);
  };
}
function ic(e) {
  let {
    colModel,
    rowGroupColsSvc,
    pivotColsSvc
  } = e;
  if (ev(colModel.getColDefCols()) || !colModel.isAlive()) return [];
  let r = colModel.getAllCols();
  let o = rowGroupColsSvc?.columns;
  let n = pivotColsSvc?.columns;
  let l = e => {
    let t = e.isRowGroupActive() && o ? o.indexOf(e) : null;
    let i = e.isPivotActive() && n ? n.indexOf(e) : null;
    let s = e.isValueActive() ? e.getAggFunc() : null;
    let r = null != e.getSort() ? e.getSort() : null;
    let l = null != e.getSortIndex() ? e.getSortIndex() : null;
    return {
      colId: e.getColId(),
      width: e.getActualWidth(),
      hide: !e.isVisible(),
      pinned: e.getPinned(),
      sort: r,
      sortIndex: l,
      aggFunc: s,
      rowGroup: e.isRowGroupActive(),
      rowGroupIndex: t,
      pivot: e.isPivotActive(),
      pivotIndex: i,
      flex: e.getFlex() ?? null
    };
  };
  let a = r.map(e => l(e));
  let d = new Map(colModel.getCols().map((e, t) => [e.getColId(), t]));
  a.sort((e, t) => (d.has(e.colId) ? d.get(e.colId) : -1) - (d.has(t.colId) ? d.get(t.colId) : -1));
  return a;
}
function ig(e) {
  let t = (e, t) => null != e ? e : null != t ? t : null;
  let i = e.getColDef();
  let s = t(i.sort, i.initialSort);
  let r = t(i.sortIndex, i.initialSortIndex);
  let o = t(i.hide, i.initialHide);
  let n = t(i.pinned, i.initialPinned);
  let l = t(i.width, i.initialWidth);
  let a = t(i.flex, i.initialFlex);
  let d = t(i.rowGroupIndex, i.initialRowGroupIndex);
  let h = t(i.rowGroup, i.initialRowGroup);
  null == d && (null == h || !1 == h) && (d = null, h = null);
  let u = t(i.pivotIndex, i.initialPivotIndex);
  let c = t(i.pivot, i.initialPivot);
  null == u && (null == c || !1 == c) && (u = null, c = null);
  let g = t(i.aggFunc, i.initialAggFunc);
  return {
    colId: e.getColId(),
    sort: s,
    sortIndex: r,
    hide: o,
    pinned: n,
    width: l,
    flex: a,
    rowGroup: h,
    rowGroupIndex: d,
    pivot: c,
    pivotIndex: u,
    aggFunc: g
  };
}
var ip = (e, t, i, s) => {
  let r = e[i.getId()];
  let o = e[s.getId()];
  let n = null != r;
  let l = null != o;
  if (n && l) return r - o;
  if (n) return -1;
  if (l) return 1;
  let a = t.indexOf(i);
  let d = t.indexOf(s);
  let h = a >= 0;
  return h && d >= 0 ? a - d : h ? -1 : 1;
};
var im = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colModel";
    this.pivotMode = !1;
    this.ready = !1;
    this.changeEventsDispatching = !1;
  }
  postConstruct() {
    this.pivotMode = this.gos.get("pivotMode");
    this.addManagedPropertyListeners(["groupDisplayType", "treeData", "treeDataDisplayType", "groupHideOpenParents"], e => this.refreshAll(t8(e.source)));
    this.addManagedPropertyListeners(["defaultColDef", "defaultColGroupDef", "columnTypes", "suppressFieldDotNotation"], this.recreateColumnDefs.bind(this));
    this.addManagedPropertyListener("pivotMode", e => this.setPivotMode(this.gos.get("pivotMode"), t8(e.source)));
  }
  createColsFromColDefs(e) {
    let {
      beans
    } = this;
    let {
      valueCache,
      colAutosize,
      rowGroupColsSvc,
      pivotColsSvc,
      valueColsSvc,
      visibleCols,
      colViewport,
      eventSvc
    } = t;
    let h = this.colDefs ? iu(beans, e) : void 0;
    valueCache?.expire();
    let u = this.colDefCols?.list;
    let c = this.colDefCols?.tree;
    let g = function (e, t = null, i, s, r) {
      let o = new t_();
      let {
        existingCols,
        existingGroups,
        existingColKeys
      } = function (e) {
        let t = [];
        let i = [];
        let s = [];
        e && is(null, e, e => {
          tU(e) ? i.push(e) : (s.push(e.getId()), t.push(e));
        });
        return {
          existingCols: t,
          existingGroups: i,
          existingColKeys: s
        };
      }(s);
      o.addExistingKeys(existingColKeys);
      let d = ie(e, t, 0, i, existingCols, o, existingGroups, r);
      let {
        colGroupSvc
      } = e;
      let u = colGroupSvc?.findMaxDepth(d, 0) ?? 0;
      let c = colGroupSvc ? colGroupSvc.balanceColumnTree(d, 0, u, o) : d;
      is(null, c, (e, t) => {
        tU(e) && e.setupExpandable();
        e.originalParent = t;
      });
      return {
        columnTree: c,
        treeDept: u
      };
    }(beans, this.colDefs, !0, c, e);
    t2(beans, this.colDefCols?.tree, g.columnTree);
    let p = g.columnTree;
    let m = g.treeDept;
    let f = t0(p);
    let C = {};
    f.forEach(e => C[e.getId()] = e);
    this.colDefCols = {
      tree: p,
      treeDepth: m,
      list: f,
      map: C
    };
    rowGroupColsSvc?.extractCols(e, u);
    pivotColsSvc?.extractCols(e, u);
    valueColsSvc?.extractCols(e, u);
    this.ready = !0;
    this.refreshCols(!0);
    visibleCols.refresh(e);
    colViewport.checkViewportColumns();
    eventSvc.dispatchEvent({
      type: "columnEverythingChanged",
      source: e
    });
    h && (this.changeEventsDispatching = !0, h(), this.changeEventsDispatching = !1);
    eventSvc.dispatchEvent({
      type: "newColumnsLoaded",
      source: e
    });
    "gridInitializing" === e && colAutosize?.applyAutosizeStrategy();
  }
  refreshCols(e) {
    var t;
    if (!this.colDefCols) return;
    let i = this.cols?.tree;
    this.saveColOrder();
    let {
      autoColSvc,
      selectionColSvc,
      rowNumbersSvc,
      quickFilter,
      pivotResultCols,
      showRowGroupCols,
      rowAutoHeight,
      visibleCols,
      colViewport,
      eventSvc
    } = this.beans;
    let g = this.selectCols(pivotResultCols, this.colDefCols);
    this.createColumnsForService([autoColSvc, selectionColSvc, rowNumbersSvc], g);
    t = this.gos;
    let p = this.showingPivotResult ? !t.get("enableStrictPivotColumnOrder") : t.get("maintainColumnOrder");
    (!e || p) && this.restoreColOrder(g);
    this.positionLockedCols(g);
    showRowGroupCols?.refresh();
    quickFilter?.refreshCols();
    this.setColSpanActive();
    rowAutoHeight?.setAutoHeightActive(g);
    visibleCols.clear();
    colViewport.clear();
    tY(i, this.cols.tree) || eventSvc.dispatchEvent({
      type: "gridColumnsChanged"
    });
  }
  createColumnsForService(e, t) {
    for (let i of e) i && (i.createColumns(t, e => {
      this.lastOrder = e(this.lastOrder);
      this.lastPivotOrder = e(this.lastPivotOrder);
    }), i.addColumns(t));
  }
  selectCols(e, t) {
    let i = e?.getPivotResultCols() ?? null;
    this.showingPivotResult = null != i;
    let {
      map,
      list,
      tree,
      treeDepth
    } = i ?? t;
    this.cols = {
      list: list.slice(),
      map: {
        ...map
      },
      tree: tree.slice(),
      treeDepth
    };
    i && !i.list.some(e => this.cols?.map[e.getColId()] !== void 0) && (this.lastPivotOrder = null);
    return this.cols;
  }
  getColsToShow() {
    if (!this.cols) return [];
    let e = this.isPivotMode() && !this.showingPivotResult;
    let t = this.beans.valueColsSvc?.columns;
    return this.cols.list.filter(i => {
      let s = t5(i);
      if (!e) return s || i.isVisible();
      {
        let e = t?.includes(i);
        return s || e;
      }
    });
  }
  refreshAll(e) {
    this.ready && (this.refreshCols(!1), this.beans.visibleCols.refresh(e));
  }
  setColsVisible(e, t = !1, i) {
    ih(this.beans, {
      state: e.map(e => ({
        colId: "string" == typeof e ? e : e.getColId(),
        hide: !t
      }))
    }, i);
  }
  restoreColOrder(e) {
    let t = this.showingPivotResult ? this.lastPivotOrder : this.lastOrder;
    if (!t) return;
    let i = new Map(t.map((e, t) => [e, t]));
    if (!e.list.some(e => i.has(e))) return;
    let s = new Map(e.list.map(e => [e, !0]));
    let r = t.filter(e => s.has(e));
    let o = new Map(r.map(e => [e, !0]));
    let n = e.list.filter(e => !o.has(e));
    let l = r.slice();
    n.forEach(e => {
      let t = e.getOriginalParent();
      if (!t) {
        l.push(e);
        return;
      }
      let i = [];
      for (; !i.length && t;) {
        t.getLeafColumns().forEach(e => {
          let t = l.indexOf(e) >= 0;
          let s = 0 > i.indexOf(e);
          t && s && i.push(e);
        });
        t = t.getOriginalParent();
      }
      if (!i.length) {
        l.push(e);
        return;
      }
      let s = Math.max(...i.map(e => l.indexOf(e)));
      l.splice(s + 1, 0, e);
    });
    e.list = l;
  }
  positionLockedCols(e) {
    e.list = ir(e.list, this.gos);
  }
  saveColOrder() {
    this.showingPivotResult ? this.lastPivotOrder = this.cols?.list ?? null : this.lastOrder = this.cols?.list ?? null;
  }
  getColumnDefs() {
    return this.colDefCols ? this.beans.colDefFactory?.getColumnDefs(this.colDefCols.list, this.showingPivotResult, this.lastOrder, this.cols?.list ?? []) : void 0;
  }
  setColSpanActive() {
    this.colSpanActive = !!this.cols?.list.some(e => null != e.getColDef().colSpan);
  }
  isPivotMode() {
    return this.pivotMode;
  }
  setPivotMode(e, t) {
    if (e === this.pivotMode || (this.pivotMode = e, !this.ready)) return;
    this.refreshCols(!1);
    let {
      visibleCols,
      eventSvc
    } = this.beans;
    visibleCols.refresh(t);
    eventSvc.dispatchEvent({
      type: "columnPivotModeChanged"
    });
  }
  isPivotActive() {
    let e = this.beans.pivotColsSvc?.columns;
    return this.pivotMode && !!e?.length;
  }
  recreateColumnDefs(e) {
    if (!this.cols) return;
    this.beans.autoColSvc?.updateColumns(e);
    let t = t8(e.source);
    this.createColsFromColDefs(t);
  }
  setColumnDefs(e, t) {
    this.colDefs = e;
    this.createColsFromColDefs(t);
  }
  destroy() {
    t2(this.beans, this.colDefCols?.tree);
    super.destroy();
  }
  getColTree() {
    return this.cols?.tree ?? [];
  }
  getColDefColTree() {
    return this.colDefCols?.tree ?? [];
  }
  getColDefCols() {
    return this.colDefCols?.list ?? null;
  }
  getCols() {
    return this.cols?.list ?? [];
  }
  getAllCols() {
    let {
      pivotResultCols,
      autoColSvc,
      selectionColSvc
    } = this.beans;
    let s = pivotResultCols?.getPivotResultCols()?.list;
    return [this.colDefCols?.list ?? [], autoColSvc?.columns?.list ?? [], selectionColSvc?.columns?.list ?? [], s ?? []].flat();
  }
  getColsForKeys(e) {
    return e ? e.map(e => this.getCol(e)).filter(e => null != e) : [];
  }
  getColDefCol(e) {
    return this.colDefCols?.list ? this.getColFromCollection(e, this.colDefCols) : null;
  }
  getCol(e) {
    return null == e ? null : this.getColFromCollection(e, this.cols);
  }
  getColFromCollection(e, t) {
    if (null == t) return null;
    let {
      map,
      list
    } = t;
    if ("string" == typeof e && map[e]) return map[e];
    for (let t = 0; t < list.length; t++) if (t7(list[t], e)) return list[t];
    return this.beans.autoColSvc?.getColumn(e) ?? this.beans.selectionColSvc?.getColumn(e) ?? null;
  }
};
var iC = class {
  constructor() {
    this.existingIds = {};
  }
  getInstanceIdForKey(e) {
    let t;
    let i = this.existingIds[e];
    t = "number" != typeof i ? 0 : i + 1;
    this.existingIds[e] = t;
    return t;
  }
};
var $$iw32 = class extends $$tM23 {};
function iv(e, t, i) {
  i && e.addDestroyFunc(() => t.destroyBean(i));
  return i ?? e;
}
var $$ib34 = class {
  constructor(e) {
    this.cssClassStates = {};
    this.getGui = e;
  }
  addCssClass(e) {
    this.addOrRemoveCssClass(e, !0);
  }
  removeCssClass(e) {
    this.addOrRemoveCssClass(e, !1);
  }
  containsCssClass(e) {
    let t = this.getGui();
    return !!t && t.classList.contains(e);
  }
  addOrRemoveCssClass(e, t) {
    if (e) {
      if (e.indexOf(" ") >= 0) {
        let i = (e || "").split(" ");
        if (i.length > 1) {
          i.forEach(e => this.addOrRemoveCssClass(e, t));
          return;
        }
      }
      if (this.cssClassStates[e] !== t && e.length) {
        let i = this.getGui();
        i && i.classList.toggle(e, t);
        this.cssClassStates[e] = t;
      }
    }
  }
};
var iy = 0;
var iS = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.suppressDataRefValidation = !1;
    this.displayed = !0;
    this.visible = !0;
    this.compId = iy++;
    this.cssClassManager = new $$ib34(() => this.eGui);
    this.componentSelectors = new Map((t ?? []).map(e => [e.selector, e]));
    e && this.setTemplate(e);
  }
  preConstruct() {
    this.wireTemplate(this.getGui());
    let e = "component-" + Object.getPrototypeOf(this)?.constructor?.name;
    this.css?.forEach(t => this.beans.environment.addGlobalCSS(t, e));
  }
  wireTemplate(e, t) {
    e && this.gos && (this.applyElementsToComponent(e), this.createChildComponentsFromTags(e, t));
  }
  getCompId() {
    return this.compId;
  }
  getDataRefAttribute(e) {
    return e.getAttribute ? e.getAttribute("data-ref") : null;
  }
  applyElementsToComponent(e, t, i, s = null) {
    if (void 0 === t && (t = this.getDataRefAttribute(e)), t) {
      let r = this[t];
      if (null === r) this[t] = s ?? e;else {
        let e = i && i[t];
        if (!this.suppressDataRefValidation && !e) throw Error(`data-ref: ${t} on ${this.constructor.name} with ${r}`);
      }
    }
  }
  createChildComponentsFromTags(e, t) {
    (function (e) {
      if (null == e) return [];
      let t = [];
      em(e, e => t.push(e));
      return t;
    })(e.childNodes).forEach(i => {
      if (!(i instanceof HTMLElement)) return;
      let s = this.createComponentFromElement(i, e => {
        e.getGui() && this.copyAttributesFromNode(i, e.getGui());
      }, t);
      if (s) {
        if (s.addItems && i.children.length) {
          this.createChildComponentsFromTags(i, t);
          let e = Array.prototype.slice.call(i.children);
          s.addItems(e);
        }
        this.swapComponentForNode(s, e, i);
      } else i.childNodes && this.createChildComponentsFromTags(i, t);
    });
  }
  createComponentFromElement(e, t, i) {
    let s = e.nodeName;
    let r = this.getDataRefAttribute(e);
    let o = 0 === s.indexOf("AG-");
    let n = o ? this.componentSelectors.get(s) : null;
    let l = null;
    if (n) {
      let e = i && r ? i[r] : void 0;
      (l = new n.component(e)).setParentComponent(this);
      this.createBean(l, null, t);
    } else if (o) throw Error(`selector: ${s}`);
    this.applyElementsToComponent(e, r, i, l);
    return l;
  }
  copyAttributesFromNode(e, t) {
    !function (e, t) {
      if (e) for (let i = 0; i < e.length; i++) {
        let s = e[i];
        t(s.name, s.value);
      }
    }(e.attributes, (e, i) => t.setAttribute(e, i));
  }
  swapComponentForNode(e, t, i) {
    let s = e.getGui();
    t.replaceChild(s, i);
    t.insertBefore(document.createComment(i.nodeName), s);
    this.addDestroyFunc(this.destroyBean.bind(this, e));
  }
  activateTabIndex(e) {
    let t = this.gos.get("tabIndex");
    e || (e = []);
    e.length || e.push(this.getGui());
    e.forEach(e => e.setAttribute("tabindex", t.toString()));
  }
  setTemplate(e, t, i) {
    let s = eo(e);
    this.setTemplateFromElement(s, t, i);
  }
  setTemplateFromElement(e, t, i, s = !1) {
    if (this.eGui = e, this.suppressDataRefValidation = s, t) for (let e = 0; e < t.length; e++) {
      let i = t[e];
      this.componentSelectors.set(i.selector, i);
    }
    this.wireTemplate(e, i);
  }
  getGui() {
    return this.eGui;
  }
  getFocusableElement() {
    return this.eGui;
  }
  getAriaElement() {
    return this.getFocusableElement();
  }
  setParentComponent(e) {
    this.parentComponent = e;
  }
  getParentComponent() {
    return this.parentComponent;
  }
  setGui(e) {
    this.eGui = e;
  }
  queryForHtmlElement(e) {
    return this.eGui.querySelector(e);
  }
  getContainerAndElement(e, t) {
    let i = t;
    return null == e ? null : (i || (i = this.eGui), eg(e)) ? {
      element: e,
      parent: i
    } : {
      element: e.getGui(),
      parent: i
    };
  }
  prependChild(e, t) {
    let {
      element,
      parent
    } = this.getContainerAndElement(e, t) || {};
    element && parent && parent.insertAdjacentElement("afterbegin", element);
  }
  appendChild(e, t) {
    let {
      element,
      parent
    } = this.getContainerAndElement(e, t) || {};
    element && parent && parent.appendChild(element);
  }
  isDisplayed() {
    return this.displayed;
  }
  setVisible(e, t = {}) {
    if (e !== this.visible) {
      this.visible = e;
      let {
        skipAriaHidden
      } = t;
      !function (e, t, i = {}) {
        let {
          skipAriaHidden: _skipAriaHidden
        } = i;
        e.classList.toggle("ag-invisible", !t);
        _skipAriaHidden || R(e, !t);
      }(this.eGui, e, {
        skipAriaHidden
      });
    }
  }
  setDisplayed(e, t = {}) {
    if (e !== this.displayed) {
      this.displayed = e;
      let {
        skipAriaHidden
      } = t;
      U(this.eGui, e, {
        skipAriaHidden
      });
      let s = {
        type: "displayChanged",
        visible: this.displayed
      };
      this.dispatchLocalEvent(s);
    }
  }
  destroy() {
    this.parentComponent && (this.parentComponent = void 0);
    super.destroy();
  }
  addGuiEventListener(e, t, i) {
    this.eGui.addEventListener(e, t, i);
    this.addDestroyFunc(() => this.eGui.removeEventListener(e, t));
  }
  addCssClass(e) {
    this.cssClassManager.addCssClass(e);
  }
  removeCssClass(e) {
    this.cssClassManager.removeCssClass(e);
  }
  containsCssClass(e) {
    return this.cssClassManager.containsCssClass(e);
  }
  addOrRemoveCssClass(e, t) {
    this.cssClassManager.addOrRemoveCssClass(e, t);
  }
  registerCSS(e) {
    this.css || (this.css = []);
    this.css.push(e);
  }
};
var $$iR37 = class e {
  constructor(e) {
    this.status = 0;
    this.resolution = null;
    this.waiters = [];
    e(e => this.onDone(e), e => this.onReject(e));
  }
  static all(t) {
    return t.length ? new e(e => {
      let i = t.length;
      let s = Array(i);
      t.forEach((t, r) => {
        t.then(t => {
          s[r] = t;
          0 == --i && e(s);
        });
      });
    }) : e.resolve();
  }
  static resolve(t = null) {
    return new e(e => e(t));
  }
  then(t) {
    return new e(e => {
      1 === this.status ? e(t(this.resolution)) : this.waiters.push(i => e(t(i)));
    });
  }
  onDone(e) {
    this.status = 1;
    this.resolution = e;
    this.waiters.forEach(t => t(e));
  }
  onReject(e) {}
};
function iD(e, t, i, s) {
  let r;
  let o;
  let n;
  let l;
  let a;
  let d;
  let {
    name
  } = i;
  if (t) {
    let i = t[name + "Selector"];
    let u = i ? i(s) : null;
    let c = t => {
      "string" == typeof t ? r = t : null != t && !0 !== t && (e.isFrameworkComponent(t) ? n = t : o = t);
    };
    u ? (c(u.component), l = u.params, a = u.popup, d = u.popupPosition) : c(t[name]);
  }
  return {
    compName: r,
    jsComp: o,
    fwComp: n,
    paramsFromSelector: l,
    popupFromSelector: a,
    popupPositionFromSelector: d
  };
}
var ix = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "userCompFactory";
  }
  wireBeans(e) {
    this.agCompUtils = e.agCompUtils;
    this.registry = e.registry;
    this.frameworkCompWrapper = e.frameworkCompWrapper;
    this.gridOptions = e.gridOptions;
  }
  getCompDetailsFromGridOptions(e, t, i, s = !1) {
    return this.getCompDetails(this.gridOptions, e, t, i, s);
  }
  getCompDetails(e, t, i, s, r = !1) {
    var o;
    let n;
    let {
      name,
      cellRenderer
    } = t;
    let {
      compName,
      jsComp,
      fwComp,
      paramsFromSelector,
      popupFromSelector,
      popupPositionFromSelector
    } = iD(this.beans.frameworkOverrides, e, t, s);
    let m = e => {
      let t = this.registry.getUserComponent(name, e);
      t && (h = t.componentFromFramework ? void 0 : t.component, u = t.componentFromFramework ? t.component : void 0, n = t.params);
    };
    if (null != compName && m(compName), null == jsComp && null == fwComp && null != i && m(i), jsComp && cellRenderer && !((o = jsComp) && o.prototype && "getGui" in o.prototype) && (h = this.agCompUtils?.adaptFunction(t, jsComp)), !jsComp && !fwComp) {
      let {
        validation
      } = this.beans;
      r && (compName !== i || !i) ? compName ? validation?.isProvidedUserComp(compName) || ez(50, {
        compName
      }) : i ? validation || ez(260, {
        ...this.gos.getModuleErrorParams(),
        propName: name,
        compName: i
      }) : ez(216, {
        name
      }) : i && !validation && ez(146, {
        comp: i
      });
      return;
    }
    let f = this.mergeParams(e, t, s, paramsFromSelector, n);
    let C = null == jsComp;
    let w = jsComp ?? fwComp;
    return {
      componentFromFramework: C,
      componentClass: w,
      params: f,
      type: t,
      popupFromSelector,
      popupPositionFromSelector,
      newAgStackInstance: () => this.newAgStackInstance(w, C, f, t)
    };
  }
  newAgStackInstance(e, t, i, s) {
    let r;
    r = t ? this.frameworkCompWrapper.wrap(e, s.mandatoryMethods, s.optionalMethods, s) : new e();
    this.createBean(r);
    let o = r.init?.(i);
    return o?.then(() => r);
  }
  mergeParams(e, t, i, s = null, r) {
    let o = {
      ...i,
      ...r
    };
    let n = e && e[t.name + "Params"];
    "function" == typeof n ? tI(o, n(i)) : "object" == typeof n && tI(o, n);
    tI(o, s);
    return o;
  }
};
var iP = {
  name: "dateComponent",
  mandatoryMethods: ["getDate", "setDate"],
  optionalMethods: ["afterGuiAttached", "setInputPlaceholder", "setInputAriaLabel", "setDisabled", "refresh"]
};
var iE = {
  name: "dragAndDropImageComponent",
  mandatoryMethods: ["setIcon", "setLabel"]
};
var iF = {
  name: "headerComponent",
  optionalMethods: ["refresh"]
};
var iA = {
  name: "innerHeaderComponent"
};
var ik = {
  name: "innerHeaderGroupComponent"
};
var iM = {
  name: "headerGroupComponent"
};
var iT = {
  name: "cellRenderer",
  optionalMethods: ["refresh", "afterGuiAttached"],
  cellRenderer: !0
};
var iI = {
  name: "loadingCellRenderer",
  cellRenderer: !0
};
var iL = {
  name: "cellEditor",
  mandatoryMethods: ["getValue"],
  optionalMethods: ["isPopup", "isCancelBeforeStart", "isCancelAfterEnd", "getPopupPosition", "focusIn", "focusOut", "afterGuiAttached", "refresh"]
};
var iO = {
  name: "loadingOverlayComponent",
  optionalMethods: ["refresh"]
};
var iG = {
  name: "noRowsOverlayComponent",
  optionalMethods: ["refresh"]
};
var iH = {
  name: "tooltipComponent"
};
var iN = {
  name: "filter",
  mandatoryMethods: ["isFilterActive", "doesFilterPass", "getModel", "setModel"],
  optionalMethods: ["afterGuiAttached", "afterGuiDetached", "onNewRowsLoaded", "getModelAsString", "onFloatingFilterChanged", "onAnyFilterChanged", "refresh"]
};
var iB = {
  name: "floatingFilterComponent",
  mandatoryMethods: ["onParentModelChanged"],
  optionalMethods: ["afterGuiAttached", "refresh"]
};
var iV = {
  name: "fullWidthCellRenderer",
  optionalMethods: ["refresh", "afterGuiAttached"],
  cellRenderer: !0
};
var iW = {
  name: "loadingCellRenderer",
  cellRenderer: !0
};
var iz = {
  name: "groupRowRenderer",
  optionalMethods: ["afterGuiAttached"],
  cellRenderer: !0
};
var iU = {
  name: "detailCellRenderer",
  optionalMethods: ["refresh"],
  cellRenderer: !0
};
function i$(e, t, i) {
  return e.getCompDetails(t, iL, "agCellEditor", i, !0);
}
function iK(e) {
  return null != e && null != e.getFrameworkComponentInstance ? e.getFrameworkComponentInstance() : e;
}
var i_ = new Set();
var ij = {};
var iq = {};
var iY = !1;
function iJ(e, t) {
  let i;
  !function (e) {
    c || (c = e.version);
    let t = e => `You are using incompatible versions of AG Grid modules. Major and minor versions should always match across modules. ${e} Please update all modules to the same version.`;
    if (e.version ? !function (e) {
      let [t, i] = e.version.split(".") || [];
      let [s, r] = c.split(".") || [];
      return t === s && i === r;
    }(e) && eE(t(`'${e.moduleName}' is version ${e.version} but the other modules are version ${c}.`)) : eE(t(`'${e.moduleName}' is incompatible.`)), e.validate) {
      let t = e.validate();
      t.isValid || eE(`${t.message}`);
    }
  }(e);
  let s = e.rowModels ?? ["all"];
  i_.add(e);
  void 0 !== t ? (iY = !0, void 0 === iq[t] && (iq[t] = {}), i = iq[t]) : i = ij;
  s.forEach(t => {
    void 0 === i[t] && (i[t] = {});
    i[t][e.moduleName] = e;
  });
  e.dependsOn && e.dependsOn.forEach(e => iJ(e, t));
}
function iZ(e, t, i) {
  let s = i => !!ij[i]?.[e] || !!iq[t]?.[i]?.[e];
  return s(i) || s("all");
}
export function $$iX5(e, t) {
  let i = iq[e] ?? {};
  return [...Object.values(i.all ?? {}), ...Object.values(i[t] ?? {})];
}
var $$iQ41 = class {
  static register(e) {
    iJ(e, void 0);
  }
  static registerModules(e) {
    e.forEach(e => iJ(e, void 0));
  }
};
var i0 = class {
  constructor(e) {
    if (this.beans = {}, this.createdBeans = [], this.destroyed = !1, !e || !e.beanClasses) return;
    this.beanDestroyComparator = e.beanDestroyComparator;
    this.init(e);
  }
  init(e) {
    for (let t of Object.keys(e.providedBeanInstances)) this.beans[t] = e.providedBeanInstances[t];
    e.beanClasses.forEach(e => {
      let t = new e();
      t.beanName ? this.beans[t.beanName] = t : console.error(`Bean ${e.name} is missing beanName`);
      this.createdBeans.push(t);
    });
    e.derivedBeans?.forEach(e => {
      let {
        beanName,
        bean
      } = e(this);
      this.beans[beanName] = bean;
      this.createdBeans.push(bean);
    });
    e.beanInitComparator && this.createdBeans.sort(e.beanInitComparator);
    this.initBeans(this.createdBeans);
  }
  getBeanInstances() {
    return Object.values(this.beans);
  }
  createBean(e, t) {
    if (!e) throw Error("null bean");
    this.initBeans([e], t);
    return e;
  }
  initBeans(e, t) {
    e.forEach(e => {
      e.preWireBeans?.(this.beans);
      e.wireBeans?.(this.beans);
    });
    e.forEach(e => e.preConstruct?.());
    t && e.forEach(t);
    e.forEach(e => e.postConstruct?.());
  }
  getBeans() {
    return this.beans;
  }
  getBean(e) {
    return this.beans[e];
  }
  destroy() {
    if (this.destroyed) return;
    this.destroyed = !0;
    let e = this.getBeanInstances();
    this.beanDestroyComparator && e.sort(this.beanDestroyComparator);
    this.destroyBeans(e);
    this.beans = {};
    this.createdBeans = [];
  }
  destroyBean(e) {
    e?.destroy?.();
  }
  destroyBeans(e) {
    if (e) for (let t = 0; t < e.length; t++) this.destroyBean(e[t]);
    return [];
  }
  isDestroyed() {
    return this.destroyed;
  }
};
var i1 = class extends i0 {
  init(e) {
    this.gridId = e.gridId;
    this.beans.context = this;
    this.destroyCallback = e.destroyCallback;
    super.init(e);
  }
  destroy() {
    var e;
    super.destroy();
    e = this.gridId;
    delete iq[e];
    this.destroyCallback?.();
  }
  getGridId() {
    return this.gridId;
  }
};
function i2(e, t, i, s) {
  var r;
  var o;
  var n;
  var l;
  var a;
  let d;
  return ev(e) ? [] : (r = e.headerClass, o = e, n = t, l = i, a = s, ev(r) ? [] : "string" == typeof (d = "function" == typeof r ? r(ty(n, {
    colDef: o,
    column: l,
    columnGroup: a
  })) : r) ? [d] : Array.isArray(d) ? [...d] : []);
}
function i5(e, t, i) {
  e.addOrRemoveCssClass("ag-column-first", i.isColAtEdge(t, "first"));
  e.addOrRemoveCssClass("ag-column-last", i.isColAtEdge(t, "last"));
}
function i3(e, t) {
  let i = e2(e);
  i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.webkitRequestAnimationFrame ? i.webkitRequestAnimationFrame(t) : i.setTimeout(t, 0);
}
var i6 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "animationFrameSvc";
    this.createTasksP1 = {
      list: [],
      sorted: !1
    };
    this.createTasksP2 = {
      list: [],
      sorted: !1
    };
    this.destroyTasks = [];
    this.ticking = !1;
    this.scrollGoingDown = !0;
    this.lastPage = 0;
    this.lastScrollTop = 0;
    this.taskCount = 0;
    this.cancelledTasks = new Set();
  }
  setScrollTop(e) {
    let {
      gos,
      pagination
    } = this.beans;
    let s = gos.get("pagination");
    if (this.scrollGoingDown = e >= this.lastScrollTop, s && 0 === e) {
      let e = pagination?.getCurrentPage() ?? 0;
      e !== this.lastPage && (this.lastPage = e, this.scrollGoingDown = !0);
    }
    this.lastScrollTop = e;
  }
  postConstruct() {
    this.active = !this.gos.get("suppressAnimationFrame");
  }
  verifyAnimationFrameOn(e) {
    !1 === this.active && $$eW42(92, {
      methodName: e
    });
  }
  createTask(e, t, i) {
    this.verifyAnimationFrameOn(i);
    let s = {
      task: e,
      index: t,
      createOrder: ++this.taskCount
    };
    this.addTaskToList(this[i], s);
    this.schedule();
  }
  cancelTask(e) {
    this.cancelledTasks.add(e);
  }
  addTaskToList(e, t) {
    e.list.push(t);
    e.sorted = !1;
  }
  sortTaskList(e) {
    if (e.sorted) return;
    let t = this.scrollGoingDown ? 1 : -1;
    e.list.sort((e, i) => e.index !== i.index ? t * (i.index - e.index) : i.createOrder - e.createOrder);
    e.sorted = !0;
  }
  addDestroyTask(e) {
    this.verifyAnimationFrameOn("createTasksP3");
    this.destroyTasks.push(e);
    this.schedule();
  }
  executeFrame(e) {
    this.verifyAnimationFrameOn("executeFrame");
    let t = this.createTasksP1;
    let i = t.list;
    let s = this.createTasksP2;
    let r = s.list;
    let o = this.destroyTasks;
    let n = new Date().getTime();
    let l = new Date().getTime() - n;
    let a = e <= 0;
    let d = this.beans.ctrlsSvc.getScrollFeature();
    for (; a || l < e;) {
      if (!d.scrollGridIfNeeded()) {
        let e;
        if (i.length) {
          this.sortTaskList(t);
          e = i.pop().task;
        } else if (r.length) {
          this.sortTaskList(s);
          e = r.pop().task;
        } else if (o.length) e = o.pop();else {
          this.cancelledTasks.clear();
          break;
        }
        this.cancelledTasks.has(e) || e();
      }
      l = new Date().getTime() - n;
    }
    i.length || r.length || o.length ? this.requestFrame() : this.ticking = !1;
  }
  flushAllFrames() {
    this.active && this.executeFrame(-1);
  }
  schedule() {
    this.active && (this.ticking || (this.ticking = !0, this.requestFrame()));
  }
  requestFrame() {
    let e = this.executeFrame.bind(this, 60);
    i3(this.beans, e);
  }
  isQueueEmpty() {
    return !this.ticking;
  }
};
var i4 = {
  BACKSPACE: "Backspace",
  TAB: "Tab",
  ENTER: "Enter",
  ESCAPE: "Escape",
  SPACE: " ",
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
  DELETE: "Delete",
  F2: "F2",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  PAGE_HOME: "Home",
  PAGE_END: "End",
  A: "KeyA",
  C: "KeyC",
  D: "KeyD",
  V: "KeyV",
  X: "KeyX",
  Y: "KeyY",
  Z: "KeyZ"
};
var i8 = !1;
var i7 = 0;
function i9(e) {
  let t = i8;
  let i = "keydown" === e.type;
  i && (e.ctrlKey || e.metaKey || e.altKey) || t === i || (i8 = i);
}
function se(e, t, i = !1) {
  let s = W;
  t && (s += ", " + t);
  i && (s += ', [tabindex="-1"]');
  let r = Array.prototype.slice.apply(e.querySelectorAll("[tabindex], input, select, button, textarea, [href]")).filter(e => er(e));
  let o = Array.prototype.slice.apply(e.querySelectorAll(s));
  return o.length ? r.filter(e => -1 === o.indexOf(e)) : r;
}
function st(e, t = !1, i = !1, s = !1) {
  let r = se(e, s ? ".ag-tab-guard" : null, i);
  let o = t ? tq(r) : r[0];
  return !!o && (o.focus({
    preventScroll: !0
  }), !0);
}
function si(e, t, i, s) {
  let r = se(t, i ? ':not([tabindex="-1"])' : null);
  let o = e3(e);
  let n = (i ? r.findIndex(e => e.contains(o)) : r.indexOf(o)) + (s ? -1 : 1);
  return n < 0 || n >= r.length ? null : r[n];
}
function ss(e, t = 5) {
  let i = 0;
  for (; e && null === N(e) && ++i <= t;) e = e.parentElement;
  return null === N(e) ? null : e;
}
function sr(e) {
  return e.gos.get("suppressHeaderFocus") || !!e.overlays?.isExclusive();
}
function so(e) {
  return e.gos.get("suppressCellFocus") || !!e.overlays?.isExclusive();
}
function sn(e, t, i = !1) {
  let s = e.ctrlsSvc.get("gridCtrl");
  return !!(!i && s.focusNextInnerContainer(t)) || (!i && (t || s.isDetailGrid()) || s.forceFocusOutOfContainer(t), !1);
}
var sl = class extends $$tM23 {
  constructor(e, t, i, s) {
    super();
    this.cellCtrl = e;
    this.rowNode = i;
    this.rowCtrl = s;
    this.beans = t;
  }
  init() {
    this.eGui = this.cellCtrl.eGui;
  }
  onKeyDown(e) {
    let t = e.key;
    switch (t) {
      case i4.ENTER:
        this.onEnterKeyDown(e);
        break;
      case i4.F2:
        this.onF2KeyDown(e);
        break;
      case i4.ESCAPE:
        this.onEscapeKeyDown(e);
        break;
      case i4.TAB:
        this.onTabKeyDown(e);
        break;
      case i4.BACKSPACE:
      case i4.DELETE:
        this.onBackspaceOrDeleteKeyDown(t, e);
        break;
      case i4.DOWN:
      case i4.UP:
      case i4.RIGHT:
      case i4.LEFT:
        this.onNavigationKeyDown(e, t);
    }
  }
  onNavigationKeyDown(e, t) {
    if (!this.cellCtrl.editing) {
      if (e.shiftKey && this.cellCtrl.isRangeSelectionEnabled()) this.onShiftRangeSelect(e);else {
        let i = this.cellCtrl.getFocusedCellPosition();
        this.beans.navigation?.navigateToNextCell(e, t, i, !0);
      }
      e.preventDefault();
    }
  }
  onShiftRangeSelect(e) {
    let {
      rangeSvc,
      navigation
    } = this.beans;
    if (!rangeSvc) return;
    let s = rangeSvc.extendLatestRangeInDirection(e);
    s && navigation?.ensureCellVisible(s);
  }
  onTabKeyDown(e) {
    this.beans.navigation?.onTabKeyDown(this.cellCtrl, e);
  }
  onBackspaceOrDeleteKeyDown(e, t) {
    let {
      cellCtrl,
      beans,
      rowNode
    } = this;
    let {
      gos,
      rangeSvc,
      eventSvc
    } = s;
    if (!cellCtrl.editing) {
      if (eventSvc.dispatchEvent({
        type: "keyShortcutChangedCellStart"
      }), function (e, t = !1) {
        return e === i4.DELETE || !t && e === i4.BACKSPACE && G();
      }(e, gos.get("enableCellEditingOnBackspace"))) {
        if (rangeSvc && tl(gos)) rangeSvc.clearCellRangeCellValues({
          dispatchWrapperEvents: !0,
          wrapperEventSource: "deleteKey"
        });else if (cellCtrl.isCellEditable()) {
          let {
            column
          } = i;
          let t = this.beans.valueSvc.getDeleteValue(column, rowNode);
          rowNode.setDataValue(column, t, "cellClear");
        }
      } else beans.editSvc?.startRowOrCellEdit(cellCtrl, e, t);
      eventSvc.dispatchEvent({
        type: "keyShortcutChangedCellEnd"
      });
    }
  }
  onEnterKeyDown(e) {
    let {
      cellCtrl,
      beans
    } = this;
    if (cellCtrl.editing || this.rowCtrl.editing) cellCtrl.stopEditingAndFocus(!1, e.shiftKey);else if (beans.gos.get("enterNavigatesVertically")) {
      let s = e.shiftKey ? i4.UP : i4.DOWN;
      beans.navigation?.navigateToNextCell(null, s, cellCtrl.cellPosition, !1);
    } else {
      beans.editSvc?.startRowOrCellEdit(cellCtrl, i4.ENTER, e);
      cellCtrl.editing && e.preventDefault();
    }
  }
  onF2KeyDown(e) {
    let {
      cellCtrl,
      beans
    } = this;
    cellCtrl.editing || beans.editSvc?.startRowOrCellEdit(cellCtrl, i4.F2, e);
  }
  onEscapeKeyDown(e) {
    let {
      cellCtrl,
      beans
    } = this;
    cellCtrl.editing && (beans.editSvc?.stopRowOrCellEdit(cellCtrl, !0), cellCtrl.focusCell(!0));
  }
  processCharacter(e) {
    if (e.target !== this.eGui || this.cellCtrl.editing) return;
    let t = e.key;
    t === i4.SPACE ? this.onSpaceKeyDown(e) : this.beans.editSvc?.startRowOrCellEdit(this.cellCtrl, t, e) && e.preventDefault();
  }
  onSpaceKeyDown(e) {
    let {
      gos
    } = this.beans;
    !this.cellCtrl.editing && eq(gos) && this.beans.selectionSvc?.handleSelectionEvent(e, this.rowNode, "spaceKey");
    e.preventDefault();
  }
  destroy() {
    super.destroy();
  }
};
var sa = class extends $$tM23 {
  constructor(e, t, i) {
    super();
    this.cellCtrl = e;
    this.column = i;
    this.beans = t;
  }
  onMouseEvent(e, t) {
    if (!tE(t)) switch (e) {
      case "click":
        this.onCellClicked(t);
        break;
      case "mousedown":
      case "touchstart":
        this.onMouseDown(t);
        break;
      case "dblclick":
        this.onCellDoubleClicked(t);
        break;
      case "mouseout":
        this.onMouseOut(t);
        break;
      case "mouseover":
        this.onMouseOver(t);
    }
  }
  onCellClicked(e) {
    if (this.beans.touchSvc?.handleCellDoubleClick(this, e)) return;
    let {
      eventSvc,
      rangeSvc,
      gos,
      editSvc
    } = this.beans;
    let o = e.ctrlKey || e.metaKey;
    rangeSvc && o && rangeSvc.getCellRangeCount(this.cellCtrl.cellPosition) > 1 && rangeSvc.intersectLastRange(!0);
    let n = this.cellCtrl.createEvent(e, "cellClicked");
    eventSvc.dispatchEvent(n);
    let l = this.column.getColDef();
    l.onCellClicked && window.setTimeout(() => {
      this.beans.frameworkOverrides.wrapOutgoing(() => {
        l.onCellClicked(n);
      });
    }, 0);
    (gos.get("singleClickEdit") || l.singleClickEdit) && !gos.get("suppressClickEdit") && !(e.shiftKey && rangeSvc?.getCellRanges().length != 0) && editSvc?.startRowOrCellEdit(this.cellCtrl, void 0, e);
  }
  onCellDoubleClicked(e) {
    let {
      column,
      beans,
      cellCtrl
    } = this;
    let {
      eventSvc,
      frameworkOverrides,
      gos,
      editSvc
    } = i;
    let a = column.getColDef();
    let d = cellCtrl.createEvent(e, "cellDoubleClicked");
    eventSvc.dispatchEvent(d);
    "function" == typeof a.onCellDoubleClicked && window.setTimeout(() => {
      frameworkOverrides.wrapOutgoing(() => {
        a.onCellDoubleClicked(d);
      });
    }, 0);
    gos.get("singleClickEdit") || gos.get("suppressClickEdit") || editSvc?.startRowOrCellEdit(cellCtrl, null, e);
  }
  onMouseDown(e) {
    let {
      ctrlKey,
      metaKey,
      shiftKey
    } = e;
    let r = e.target;
    let {
      cellCtrl,
      beans
    } = this;
    let {
      eventSvc,
      rangeSvc,
      rowNumbersSvc,
      focusSvc,
      gos
    } = n;
    if (this.isRightClickInExistingRange(e)) return;
    let c = rangeSvc && !rangeSvc.isEmpty();
    let g = this.containsWidget(r);
    let {
      cellPosition
    } = o;
    let m = t6(cellPosition.column);
    if (rowNumbersSvc && m && !rowNumbersSvc.handleMouseDownOnCell(cellPosition, e)) {
      rangeSvc && e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
    if (!shiftKey || !c) {
      let t = gos.get("enableCellTextSelection") && e.defaultPrevented;
      let i = (I() || t) && !cellCtrl.editing && !z(r) && !g;
      cellCtrl.focusCell(i);
    }
    if (shiftKey && c && !focusSvc.isCellFocused(cellPosition)) {
      e.preventDefault();
      let t = focusSvc.getFocusedCell();
      if (t) {
        let {
          column,
          rowIndex,
          rowPinned
        } = t;
        let r = beans.rowRenderer.getRowByPosition({
          rowIndex,
          rowPinned
        });
        let o = r?.getCellCtrl(column);
        o?.editing && o.stopEditing();
        focusSvc.setFocusedCell({
          column,
          rowIndex,
          rowPinned,
          forceBrowserFocus: !0,
          preventScrollOnBrowserFocus: !0
        });
      }
    }
    g || (rangeSvc && (m && e.preventDefault(), shiftKey ? rangeSvc.extendLatestRangeToCell(cellPosition) : rangeSvc.setRangeToCell(cellPosition, ctrlKey || metaKey)), eventSvc.dispatchEvent(this.cellCtrl.createEvent(e, "cellMouseDown")));
  }
  isRightClickInExistingRange(e) {
    let {
      rangeSvc
    } = this.beans;
    if (rangeSvc) {
      let i = rangeSvc.isCellInAnyRange(this.cellCtrl.cellPosition);
      let s = 2 === e.button || e.ctrlKey && this.beans.gos.get("allowContextMenuWithControlKey");
      if (i && s) return !0;
    }
    return !1;
  }
  containsWidget(e) {
    return K(e, "ag-selection-checkbox", 3) || K(e, "ag-drag-handle", 3);
  }
  onMouseOut(e) {
    if (this.mouseStayingInsideCell(e)) return;
    let {
      eventSvc,
      colHover
    } = this.beans;
    eventSvc.dispatchEvent(this.cellCtrl.createEvent(e, "cellMouseOut"));
    colHover?.clearMouseOver();
  }
  onMouseOver(e) {
    if (this.mouseStayingInsideCell(e)) return;
    let {
      eventSvc,
      colHover
    } = this.beans;
    eventSvc.dispatchEvent(this.cellCtrl.createEvent(e, "cellMouseOver"));
    colHover?.setMouseOver([this.column]);
  }
  mouseStayingInsideCell(e) {
    if (!e.target || !e.relatedTarget) return !1;
    let t = this.cellCtrl.eGui;
    let i = t.contains(e.target);
    let s = t.contains(e.relatedTarget);
    return i && s;
  }
  destroy() {
    super.destroy();
  }
};
var sd = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.cellCtrl = e;
    this.beans = t;
    this.column = e.column;
    this.rowNode = e.rowNode;
  }
  setupRowSpan() {
    this.rowSpan = this.column.getRowSpan(this.rowNode);
    this.addManagedListeners(this.beans.eventSvc, {
      newColumnsLoaded: () => this.onNewColumnsLoaded()
    });
  }
  init() {
    this.eSetLeft = this.cellCtrl.getRootElement();
    this.eContent = this.cellCtrl.eGui;
    let e = this.cellCtrl.getCellSpan();
    e || (this.setupColSpan(), this.setupRowSpan());
    this.onLeftChanged();
    this.onWidthChanged();
    e || this._legacyApplyRowSpan();
    e && (this.refreshSpanHeight(e), this.addManagedListeners(this.beans.eventSvc, {
      modelUpdated: this.refreshSpanHeight.bind(this, e),
      recalculateRowBounds: this.refreshSpanHeight.bind(this, e)
    }));
  }
  refreshSpanHeight(e) {
    let t = e.getCellHeight();
    null != t && (this.eContent.style.height = `${t}px`);
  }
  onNewColumnsLoaded() {
    let e = this.column.getRowSpan(this.rowNode);
    this.rowSpan !== e && (this.rowSpan = e, this._legacyApplyRowSpan(!0));
  }
  onDisplayColumnsChanged() {
    let e = this.getColSpanningList();
    tY(this.colsSpanning, e) || (this.colsSpanning = e, this.onWidthChanged(), this.onLeftChanged());
  }
  setupColSpan() {
    null != this.column.getColDef().colSpan && (this.colsSpanning = this.getColSpanningList(), this.addManagedListeners(this.beans.eventSvc, {
      displayedColumnsChanged: this.onDisplayColumnsChanged.bind(this),
      displayedColumnsWidthChanged: this.onWidthChanged.bind(this)
    }));
  }
  onWidthChanged() {
    if (!this.eContent) return;
    let e = this.getCellWidth();
    this.eContent.style.width = `${e}px`;
  }
  getCellWidth() {
    return this.colsSpanning ? this.colsSpanning.reduce((e, t) => e + t.getActualWidth(), 0) : this.column.getActualWidth();
  }
  getColSpanningList() {
    let {
      column,
      rowNode
    } = this;
    let i = column.getColSpan(rowNode);
    let s = [];
    if (1 === i) s.push(column);else {
      let t = e;
      let r = column.getPinned();
      for (let e = 0; t && e < i && (s.push(t), !(!(t = this.beans.visibleCols.getColAfter(t)) || ev(t)) && r === t.getPinned()); e++);
    }
    return s;
  }
  onLeftChanged() {
    if (!this.eSetLeft) return;
    let e = this.modifyLeftForPrintLayout(this.getCellLeft());
    this.eSetLeft.style.left = e + "px";
  }
  getCellLeft() {
    return (this.beans.gos.get("enableRtl") && this.colsSpanning ? tq(this.colsSpanning) : this.column).getLeft();
  }
  modifyLeftForPrintLayout(e) {
    if (!this.cellCtrl.printLayout || "left" === this.column.getPinned()) return e;
    let {
      visibleCols
    } = this.beans;
    let i = visibleCols.getColsLeftWidth();
    return "right" === this.column.getPinned() ? i + visibleCols.bodyWidth + (e || 0) : i + (e || 0);
  }
  _legacyApplyRowSpan(e) {
    if (1 === this.rowSpan && !e) return;
    let t = eZ(this.beans) * this.rowSpan;
    this.eContent.style.height = `${t}px`;
    this.eContent.style.zIndex = "1";
  }
  destroy() {
    super.destroy();
  }
};
var sh = "cellCtrl";
var su = 0;
var sc = class extends $$tM23 {
  constructor(e, t, i, s) {
    super();
    this.column = e;
    this.rowNode = t;
    this.rowCtrl = s;
    this.rangeFeature = void 0;
    this.positionFeature = void 0;
    this.customStyleFeature = void 0;
    this.tooltipFeature = void 0;
    this.mouseListener = void 0;
    this.keyboardListener = void 0;
    this.suppressRefreshCell = !1;
    this.onCompAttachedFuncs = [];
    this.onEditorAttachedFuncs = [];
    this.beans = i;
    let {
      colId,
      colIdSanitised
    } = e;
    this.instanceId = colId + "-" + su++;
    this.colIdSanitised = colIdSanitised;
    this.createCellPosition();
    this.updateAndFormatValue(!1);
  }
  shouldRestoreFocus() {
    return this.beans.focusSvc.shouldRestoreFocus(this.cellPosition);
  }
  onFocusOut() {
    this.beans.focusSvc.clearRestoreFocus();
  }
  addFeatures() {
    let {
      beans
    } = this;
    this.positionFeature = new sd(this, beans);
    this.customStyleFeature = beans.cellStyles?.createCellCustomStyleFeature(this, beans);
    this.mouseListener = new sa(this, beans, this.column);
    this.keyboardListener = new sl(this, beans, this.rowNode, this.rowCtrl);
    this.column.isTooltipEnabled() && this.enableTooltipFeature();
    let {
      rangeSvc
    } = beans;
    rangeSvc && tl(beans.gos) && (this.rangeFeature = rangeSvc.createCellRangeFeature(beans, this));
  }
  isCellSpanning() {
    return !1;
  }
  getCellSpan() {}
  removeFeatures() {
    let e = this.beans.context;
    this.positionFeature = e.destroyBean(this.positionFeature);
    this.customStyleFeature = e.destroyBean(this.customStyleFeature);
    this.mouseListener = e.destroyBean(this.mouseListener);
    this.keyboardListener = e.destroyBean(this.keyboardListener);
    this.rangeFeature = e.destroyBean(this.rangeFeature);
    this.disableTooltipFeature();
  }
  enableTooltipFeature(e, t) {
    this.tooltipFeature = this.beans.tooltipSvc?.enableCellTooltipFeature(this, e, t);
  }
  disableTooltipFeature() {
    this.tooltipFeature = this.beans.context.destroyBean(this.tooltipFeature);
  }
  setComp(e, t, i, s, r, o, n) {
    this.comp = e;
    this.eGui = t;
    this.printLayout = r;
    n ?? (n = this);
    this.addDomData(n);
    this.addFeatures();
    n.addDestroyFunc(() => this.removeFeatures());
    this.onSuppressCellFocusChanged(this.beans.gos.get("suppressCellFocus"));
    this.onCellFocused(this.focusEventToRestore);
    this.applyStaticCssClasses();
    this.setWrapText();
    this.onFirstRightPinnedChanged();
    this.onLastLeftPinnedChanged();
    this.onColumnHover();
    this.setupControlComps();
    this.setupAutoHeight(s, n);
    this.refreshFirstAndLastStyles();
    this.refreshAriaColIndex();
    this.positionFeature?.init();
    this.customStyleFeature?.setComp(e);
    this.tooltipFeature?.refreshTooltip();
    this.keyboardListener?.init();
    this.rangeFeature?.setComp(e);
    o && this.isCellEditable() ? this.beans.editSvc?.startEditing(this) : this.showValue(!1, !0);
    this.onCompAttachedFuncs.length && (this.onCompAttachedFuncs.forEach(e => e()), this.onCompAttachedFuncs = []);
  }
  setupAutoHeight(e, t) {
    this.isAutoHeight = this.beans.rowAutoHeight?.setupCellAutoHeight(this, e, t) ?? !1;
  }
  getCellAriaRole() {
    return this.column.getColDef().cellAriaRole ?? "gridcell";
  }
  isCellRenderer() {
    let e = this.column.getColDef();
    return null != e.cellRenderer || null != e.cellRendererSelector;
  }
  getValueToDisplay() {
    return this.valueFormatted ?? this.value;
  }
  showValue(e, t) {
    var i;
    var s;
    let r;
    let {
      beans,
      column,
      rowNode,
      rangeFeature
    } = this;
    let {
      userCompFactory
    } = o;
    let h = this.getValueToDisplay();
    if (rowNode.stub && rowNode.groupData?.[column.getId()] == null) {
      let e = this.createCellRendererParams();
      i = column.getColDef();
      r = userCompFactory.getCompDetails(i, iI, "agSkeletonCellRenderer", e, !0);
    } else if (this.isCellRenderer()) {
      let e = this.createCellRendererParams();
      s = column.getColDef();
      r = userCompFactory.getCompDetails(s, iT, void 0, e);
    }
    this.comp.setRenderDetails(r, h, e);
    !t && rangeFeature && i3(beans, () => rangeFeature?.refreshHandle());
  }
  setupControlComps() {
    let e = this.column.getColDef();
    this.includeSelection = this.isIncludeControl(this.isCheckboxSelection(e));
    this.includeRowDrag = this.isIncludeControl(e.rowDrag);
    this.includeDndSource = this.isIncludeControl(e.dndSource);
    this.comp.setIncludeSelection(this.includeSelection);
    this.comp.setIncludeDndSource(this.includeDndSource);
    this.comp.setIncludeRowDrag(this.includeRowDrag);
  }
  isForceWrapper() {
    return this.beans.gos.get("enableCellTextSelection") || this.column.isAutoHeight();
  }
  isIncludeControl(e) {
    return !(null != this.rowNode.rowPinned) && ("function" == typeof e || !0 === e);
  }
  isCheckboxSelection(e) {
    let {
      rowSelection
    } = this.beans.gridOptions;
    return e.checkboxSelection || t3(this.column) && rowSelection && "string" != typeof rowSelection && ts(rowSelection);
  }
  refreshShouldDestroy() {
    let e = this.column.getColDef();
    let t = this.includeSelection != this.isIncludeControl(this.isCheckboxSelection(e));
    let i = this.includeRowDrag != this.isIncludeControl(e.rowDrag);
    let s = this.includeDndSource != this.isIncludeControl(e.dndSource);
    let r = this.isAutoHeight != this.column.isAutoHeight();
    return t || i || s || r;
  }
  onPopupEditorClosed() {
    this.editing && this.stopEditingAndFocus();
  }
  stopEditing(e = !1) {
    return this.beans.editSvc?.stopEditing(this, e) ?? !1;
  }
  createCellRendererParams() {
    let {
      value,
      valueFormatted,
      column,
      rowNode,
      comp,
      eGui,
      beans: {
        valueSvc,
        gos
      }
    } = this;
    return ty(gos, {
      value,
      valueFormatted,
      getValue: () => valueSvc.getValueForDisplay(column, rowNode),
      setValue: e => valueSvc.setValue(rowNode, column, e),
      formatValue: this.formatValue.bind(this),
      data: rowNode.data,
      node: rowNode,
      pinned: column.getPinned(),
      colDef: column.getColDef(),
      column,
      refreshCell: this.refreshCell.bind(this),
      eGridCell: eGui,
      eParentOfValue: comp.getParentOfValue(),
      registerRowDragger: (e, t, i, s) => this.registerRowDragger(e, t, s),
      setTooltip: (e, t) => {
        gos.assertModuleRegistered("Tooltip", 3);
        this.tooltipFeature && this.disableTooltipFeature();
        this.enableTooltipFeature(e, t);
        this.tooltipFeature?.refreshTooltip();
      }
    });
  }
  onCellChanged(e) {
    e.column === this.column && this.refreshCell({});
  }
  refreshOrDestroyCell(e) {
    this.refreshShouldDestroy() ? this.rowCtrl?.recreateCell(this) : this.refreshCell(e);
  }
  refreshCell(e) {
    if (this.suppressRefreshCell || this.editing) return;
    let t = this.column.getColDef();
    let i = null != e && !!e.newData;
    let s = null != e && !!e.suppressFlash;
    let r = null == t.field && null == t.valueGetter && null == t.showRowGroup;
    let o = e && e.forceRefresh || r || i;
    let n = !!this.comp;
    let l = this.updateAndFormatValue(n);
    if (n) {
      if (o || l) {
        this.showValue(i, !1);
        let e = this.beans.filterManager?.isSuppressFlashingCellsBecauseFiltering();
        s || e || !t.enableCellChangeFlash || this.beans.cellFlashSvc?.flashCell(this);
        this.customStyleFeature?.applyUserStyles();
        this.customStyleFeature?.applyClassesFromColDef();
      }
      this.tooltipFeature?.refreshTooltip();
      this.customStyleFeature?.applyCellClassRules();
    }
  }
  stopEditingAndFocus(e = !1, t = !1) {
    this.beans.editSvc?.stopEditingAndFocus(this, e, t);
  }
  isCellEditable() {
    return this.column.isCellEditable(this.rowNode);
  }
  formatValue(e) {
    return this.callValueFormatter(e) ?? e;
  }
  callValueFormatter(e) {
    return this.beans.valueSvc.formatValue(this.column, this.rowNode, e);
  }
  updateAndFormatValue(e) {
    let t = this.value;
    let i = this.valueFormatted;
    this.value = this.beans.valueSvc.getValueForDisplay(this.column, this.rowNode);
    this.valueFormatted = this.callValueFormatter(this.value);
    return !e || !this.valuesAreEqual(t, this.value) || this.valueFormatted != i;
  }
  valuesAreEqual(e, t) {
    let i = this.column.getColDef();
    return i.equals ? i.equals(e, t) : e === t;
  }
  addDomData(e) {
    let t = this.eGui;
    e0(this.beans.gos, t, sh, this);
    e.addDestroyFunc(() => e0(this.beans.gos, t, sh, null));
  }
  createEvent(e, t) {
    let {
      rowNode,
      column,
      value,
      beans
    } = this;
    return ty(beans.gos, {
      type: t,
      node: rowNode,
      data: rowNode.data,
      value,
      column,
      colDef: column.getColDef(),
      rowPinned: rowNode.rowPinned,
      event: e,
      rowIndex: rowNode.rowIndex
    });
  }
  processCharacter(e) {
    this.keyboardListener?.processCharacter(e);
  }
  onKeyDown(e) {
    this.keyboardListener?.onKeyDown(e);
  }
  onMouseEvent(e, t) {
    this.mouseListener?.onMouseEvent(e, t);
  }
  getColSpanningList() {
    return this.positionFeature.getColSpanningList();
  }
  onLeftChanged() {
    this.comp && this.positionFeature?.onLeftChanged();
  }
  onDisplayedColumnsChanged() {
    this.eGui && (this.refreshAriaColIndex(), this.refreshFirstAndLastStyles());
  }
  refreshFirstAndLastStyles() {
    let {
      comp,
      column,
      beans
    } = this;
    i5(comp, column, beans.visibleCols);
  }
  refreshAriaColIndex() {
    let e = this.beans.visibleCols.getAriaColIndex(this.column);
    F(this.eGui, e);
  }
  onWidthChanged() {
    return this.positionFeature?.onWidthChanged();
  }
  getRowPosition() {
    let {
      rowIndex,
      rowPinned
    } = this.cellPosition;
    return {
      rowIndex,
      rowPinned
    };
  }
  updateRangeBordersIfRangeCount() {
    this.comp && this.rangeFeature?.updateRangeBordersIfRangeCount();
  }
  onCellSelectionChanged() {
    this.comp && this.rangeFeature?.onCellSelectionChanged();
  }
  isRangeSelectionEnabled() {
    return null != this.rangeFeature;
  }
  focusCell(e = !1) {
    this.beans.focusSvc.setFocusedCell({
      ...this.getFocusedCellPosition(),
      forceBrowserFocus: e
    });
  }
  onRowIndexChanged() {
    this.createCellPosition();
    this.onCellFocused();
    this.rangeFeature?.onCellSelectionChanged();
  }
  onSuppressCellFocusChanged(e) {
    let t = this.eGui;
    t && (t6(this.column) && (e = !0), ep(t, "tabindex", e ? void 0 : -1));
  }
  onFirstRightPinnedChanged() {
    if (!this.comp) return;
    let e = this.column.isFirstRightPinned();
    this.comp.addOrRemoveCssClass("ag-cell-first-right-pinned", e);
  }
  onLastLeftPinnedChanged() {
    if (!this.comp) return;
    let e = this.column.isLastLeftPinned();
    this.comp.addOrRemoveCssClass("ag-cell-last-left-pinned", e);
  }
  isCellFocused() {
    return this.beans.focusSvc.isCellFocused(this.cellPosition);
  }
  onCellFocused(e) {
    let {
      beans
    } = this;
    if (so(beans)) return;
    let i = this.isCellFocused();
    if (!this.comp) {
      i && e?.forceBrowserFocus && (this.focusEventToRestore = e);
      return;
    }
    if (this.focusEventToRestore = void 0, this.comp.addOrRemoveCssClass("ag-cell-focus", i), i && e && e.forceBrowserFocus) {
      let t = this.comp.getFocusableElement();
      if (this.editing) {
        let e = se(t, null, !0);
        e.length && (t = e[0]);
      }
      t.focus({
        preventScroll: !!e.preventScrollOnBrowserFocus
      });
    }
    let s = "fullRow" === beans.gos.get("editType");
    i || s || !this.editing || beans.editSvc?.stopRowOrCellEdit(this);
    i && this.rowCtrl.announceDescription();
  }
  createCellPosition() {
    let {
      rowIndex,
      rowPinned
    } = this.rowNode;
    this.cellPosition = {
      rowIndex,
      rowPinned: eC(rowPinned),
      column: this.column
    };
  }
  setInlineEditingCss() {
    this.beans.editSvc?.setInlineEditingCss(this.rowCtrl);
  }
  applyStaticCssClasses() {
    let {
      comp
    } = this;
    comp.addOrRemoveCssClass("ag-cell", !0);
    comp.addOrRemoveCssClass("ag-cell-not-inline-editing", !0);
    let t = !0 == this.column.isAutoHeight();
    comp.addOrRemoveCssClass("ag-cell-auto-height", t);
    comp.addOrRemoveCssClass("ag-cell-normal-height", !t);
  }
  onColumnHover() {
    this.beans.colHover?.onCellColumnHover(this.column, this.comp);
  }
  onColDefChanged() {
    this.comp && (this.column.isTooltipEnabled() ? (this.disableTooltipFeature(), this.enableTooltipFeature()) : this.disableTooltipFeature(), this.setWrapText(), this.editing ? this.beans.editSvc?.handleColDefChanged(this) : this.refreshOrDestroyCell({
      forceRefresh: !0,
      suppressFlash: !0
    }));
  }
  setWrapText() {
    let e = !0 == this.column.getColDef().wrapText;
    this.comp.addOrRemoveCssClass("ag-cell-wrap-text", e);
  }
  dispatchCellContextMenuEvent(e) {
    let t = this.column.getColDef();
    let i = this.createEvent(e, "cellContextMenu");
    let {
      beans
    } = this;
    beans.eventSvc.dispatchEvent(i);
    t.onCellContextMenu && window.setTimeout(() => {
      beans.frameworkOverrides.wrapOutgoing(() => {
        t.onCellContextMenu(i);
      });
    }, 0);
  }
  getCellRenderer() {
    return this.comp?.getCellRenderer() ?? null;
  }
  destroy() {
    this.onCompAttachedFuncs = [];
    this.onEditorAttachedFuncs = [];
    super.destroy();
  }
  createSelectionCheckbox() {
    let e = this.beans.selectionSvc?.createCheckboxSelectionComponent();
    if (e) {
      this.beans.context.createBean(e);
      e.init({
        rowNode: this.rowNode,
        column: this.column
      });
      return e;
    }
  }
  createDndSource() {
    let e = this.beans.registry.createDynamicBean("dndSourceComp", !1, this.rowNode, this.column, this.eGui);
    e && this.beans.context.createBean(e);
    return e;
  }
  registerRowDragger(e, t, i) {
    if (this.customRowDragComp) {
      this.customRowDragComp.setDragElement(e, t);
      return;
    }
    let s = this.createRowDragComp(e, t, i);
    s && (this.customRowDragComp = s, this.addDestroyFunc(() => {
      this.beans.context.destroyBean(s);
      this.customRowDragComp = null;
    }));
  }
  createRowDragComp(e, t, i) {
    let s = this.beans.rowDragSvc?.createRowDragCompForCell(this.rowNode, this.column, () => this.value, e, t, i);
    if (s) {
      this.beans.context.createBean(s);
      return s;
    }
  }
  cellEditorAttached() {
    this.onEditorAttachedFuncs.forEach(e => e());
    this.onEditorAttachedFuncs = [];
  }
  setFocusedCellPosition(e) {}
  getFocusedCellPosition() {
    return this.cellPosition;
  }
  refreshAriaRowIndex() {}
  getRootElement() {
    return this.eGui;
  }
};
var sg = "__ag_grid_instance";
function sp(e, t) {
  t[sg] = e.gridInstanceId;
}
function sm(e, t) {
  return sf(e, t.target);
}
function sf(e, t) {
  let i = t;
  for (; i;) {
    let t = i[sg];
    if (ew(t)) return t === e.gridInstanceId;
    i = i.parentElement;
  }
  return !1;
}
function sC(e, t) {
  let i;
  let s;
  let r = ej(e.gos, "normal");
  if (null != t.clientX || null != t.clientY ? (i = t.clientX, s = t.clientY) : (i = t.x, s = t.y), r) {
    let t = e.ctrlsSvc.getScrollFeature();
    let r = t.getVScrollPosition();
    i += t.getHScrollPosition().left;
    s += r.top;
  }
  return {
    x: i,
    y: s
  };
}
var sw = (e => (e[e.ToolPanel = 0] = "ToolPanel", e[e.HeaderCell = 1] = "HeaderCell", e[e.RowDrag = 2] = "RowDrag", e[e.ChartPanel = 3] = "ChartPanel", e[e.AdvancedFilterBuilder = 4] = "AdvancedFilterBuilder", e))(sw || {});
var sv = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "dragAndDrop";
    this.dragSourceAndParamsList = [];
    this.dropTargets = [];
  }
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc;
    this.dragSvc = e.dragSvc;
    this.environment = e.environment;
    this.userCompFactory = e.userCompFactory;
  }
  addDragSource(e, t = !1) {
    let i = {
      eElement: e.eElement,
      dragStartPixels: e.dragStartPixels,
      onDragStart: this.onDragStart.bind(this, e),
      onDragStop: this.onDragStop.bind(this),
      onDragging: this.onDragging.bind(this),
      onDragCancel: this.onDragCancel.bind(this),
      includeTouch: t
    };
    this.dragSourceAndParamsList.push({
      params: i,
      dragSource: e
    });
    this.dragSvc.addDragSource(i);
  }
  getDragAndDropImageComponent() {
    let {
      dragAndDropImageComp
    } = this;
    return dragAndDropImageComp && dragAndDropImageComp.comp ? dragAndDropImageComp.comp : null;
  }
  removeDragSource(e) {
    let {
      dragSourceAndParamsList,
      dragSvc
    } = this;
    let s = dragSourceAndParamsList.find(t => t.dragSource === e);
    s && (dragSvc.removeDragSource(s.params), tJ(dragSourceAndParamsList, s));
  }
  destroy() {
    let {
      dragSourceAndParamsList,
      dragSvc,
      dropTargets
    } = this;
    dragSourceAndParamsList.forEach(e => dragSvc.removeDragSource(e.params));
    dragSourceAndParamsList.length = 0;
    dropTargets.length = 0;
    this.clearDragAndDropProperties();
    super.destroy();
  }
  nudge() {
    this.dragging && this.onDragging(this.eventLastTime, !0);
  }
  onDragStart(e, t) {
    this.dragging = !0;
    this.dragSource = e;
    this.eventLastTime = t;
    this.dragItem = e.getDragItem();
    e.onDragStarted?.();
    this.createDragAndDropImageComponent();
  }
  onDragStop(e) {
    this.dragSource?.onDragStopped?.();
    let {
      lastDropTarget
    } = this;
    if (lastDropTarget?.onDragStop) {
      let i = this.createDropTargetEvent(lastDropTarget, e, null, null, !1);
      lastDropTarget.onDragStop(i);
    }
    this.clearDragAndDropProperties();
  }
  onDragCancel() {
    let {
      dragSource,
      lastDropTarget
    } = this;
    dragSource?.onDragCancelled?.();
    lastDropTarget?.onDragCancel && lastDropTarget.onDragCancel(this.createDropTargetEvent(lastDropTarget, this.eventLastTime, null, null, !1));
    this.clearDragAndDropProperties();
  }
  clearDragAndDropProperties() {
    this.eventLastTime = null;
    this.dragging = !1;
    this.lastDropTarget = void 0;
    this.dragItem = null;
    this.dragSource = null;
    this.removeDragAndDropImageComponent();
  }
  onDragging(e, t = !1) {
    let i = this.getHorizontalDirection(e);
    let s = this.getVerticalDirection(e);
    this.eventLastTime = e;
    this.positionDragAndDropImageComp(e);
    let r = this.dropTargets.filter(t => this.isMouseOnDropTarget(e, t));
    let o = this.findCurrentDropTarget(e, r);
    let {
      lastDropTarget,
      dragSource,
      dragAndDropImageComp,
      dragItem
    } = this;
    if (o !== lastDropTarget) {
      if (this.leaveLastTargetIfExists(e, i, s, t), null !== lastDropTarget && null === o && dragSource?.onGridExit?.(dragItem), null === lastDropTarget && null !== o && dragSource?.onGridEnter?.(dragItem), this.enterDragTargetIfExists(o, e, i, s, t), o && dragAndDropImageComp) {
        let {
          comp,
          promise
        } = dragAndDropImageComp;
        comp ? comp.setIcon(o.getIconName ? o.getIconName() : null, !1) : promise.then(e => {
          e && e.setIcon(o.getIconName ? o.getIconName() : null, !1);
        });
      }
      this.lastDropTarget = o;
    } else if (o && o.onDragging) {
      let r = this.createDropTargetEvent(o, e, i, s, t);
      o.onDragging(r);
    }
  }
  getAllContainersFromDropTarget(e) {
    let t = e.getSecondaryContainers ? e.getSecondaryContainers() : null;
    let i = [[e.getContainer()]];
    return t ? i.concat(t) : i;
  }
  isMouseOnDropTarget(e, t) {
    let i = this.getAllContainersFromDropTarget(t);
    let s = !1;
    let r = (e, t) => {
      for (let i of t) {
        let {
          width,
          height,
          left,
          right,
          top,
          bottom
        } = i.getBoundingClientRect();
        if (0 === width || 0 === height) return !1;
        let a = e.clientX >= left && e.clientX < right;
        let d = e.clientY >= top && e.clientY < bottom;
        if (!a || !d) return !1;
      }
      return !0;
    };
    for (let t of i) if (r(e, t)) {
      s = !0;
      break;
    }
    let {
      eElement,
      type
    } = this.dragSource;
    return (!t.targetContainsSource || !!t.getContainer().contains(eElement)) && s && t.isInterestedIn(type, eElement);
  }
  findCurrentDropTarget(e, t) {
    let i = t.length;
    if (0 === i) return null;
    if (1 === i) return t[0];
    for (let i of e5(this.beans).elementsFromPoint(e.clientX, e.clientY)) for (let e of t) if (-1 !== this.getAllContainersFromDropTarget(e).flatMap(e => e).indexOf(i)) return e;
    return null;
  }
  enterDragTargetIfExists(e, t, i, s, r) {
    if (e && e.onDragEnter) {
      let o = this.createDropTargetEvent(e, t, i, s, r);
      e.onDragEnter(o);
    }
  }
  leaveLastTargetIfExists(e, t, i, s) {
    let {
      lastDropTarget
    } = this;
    if (!lastDropTarget) return;
    if (lastDropTarget.onDragLeave) {
      let o = this.createDropTargetEvent(lastDropTarget, e, t, i, s);
      lastDropTarget.onDragLeave(o);
    }
    let o = this.getDragAndDropImageComponent();
    o && o.setIcon(null, !1);
  }
  addDropTarget(e) {
    this.dropTargets.push(e);
  }
  removeDropTarget(e) {
    this.dropTargets = this.dropTargets.filter(t => t.getContainer() !== e.getContainer());
  }
  hasExternalDropZones() {
    return this.dropTargets.some(e => e.external);
  }
  findExternalZone(e) {
    return this.dropTargets.filter(e => e.external).find(t => t.getContainer() === e.getContainer()) || null;
  }
  isDropZoneWithinThisGrid(e) {
    let t = this.ctrlsSvc.getGridBodyCtrl().eGridBody;
    let {
      dropZoneTarget
    } = e;
    return t.contains(dropZoneTarget);
  }
  getHorizontalDirection(e) {
    let t = this.eventLastTime?.clientX;
    let i = e.clientX;
    return t === i ? null : t > i ? "left" : "right";
  }
  getVerticalDirection(e) {
    let t = this.eventLastTime?.clientY;
    let i = e.clientY;
    return t === i ? null : t > i ? "up" : "down";
  }
  createDropTargetEvent(e, t, i, s, r) {
    let o = e.getContainer();
    let n = o.getBoundingClientRect();
    let {
      dragItem,
      dragSource,
      gos
    } = this;
    let h = t.clientX - n.left;
    let u = t.clientY - n.top;
    return ty(gos, {
      event: t,
      x: h,
      y: u,
      vDirection: s,
      hDirection: i,
      dragSource,
      fromNudge: r,
      dragItem,
      dropZoneTarget: o
    });
  }
  positionDragAndDropImageComp(e) {
    let t = this.getDragAndDropImageComponent();
    t && function (e, t, i) {
      let s = e.getBoundingClientRect().height;
      let r = function (e) {
        let t = e6(e);
        return t?.clientWidth ?? (window.innerHeight || -1);
      }(i) - 2;
      let o = function (e) {
        let t = e6(e);
        return t?.clientHeight ?? (window.innerHeight || -1);
      }(i) - 2;
      if (!e.offsetParent) return;
      let n = Z(e.offsetParent);
      let {
        clientY,
        clientX
      } = t;
      let d = clientY - n.top - s / 2;
      let h = clientX - n.left - 10;
      let u = e1(i);
      let c = u.defaultView || window;
      let g = c.pageYOffset || u.documentElement.scrollTop;
      let p = c.pageXOffset || u.documentElement.scrollLeft;
      r > 0 && h + e.clientWidth > r + p && (h = r + p - e.clientWidth);
      h < 0 && (h = 0);
      o > 0 && d + e.clientHeight > o + g && (d = o + g - e.clientHeight);
      d < 0 && (d = 0);
      e.style.left = `${h}px`;
      e.style.top = `${d}px`;
    }(t.getGui(), e, this.beans);
  }
  removeDragAndDropImageComponent() {
    let {
      dragAndDropImageComp
    } = this;
    if (dragAndDropImageComp) {
      let {
        comp
      } = dragAndDropImageComp;
      if (comp) {
        let e = comp.getGui();
        this.dragAndDropImageParent?.removeChild(e);
        this.destroyBean(comp);
      }
    }
    this.dragAndDropImageComp = null;
  }
  createDragAndDropImageComponent() {
    var e;
    let {
      dragSource,
      gos,
      userCompFactory
    } = this;
    if (!dragSource) return;
    e = ty(gos, {
      dragSource
    });
    let r = userCompFactory.getCompDetailsFromGridOptions(iE, "agDragAndDropImage", e, !0);
    if (!r) return;
    let o = r.newAgStackInstance();
    this.dragAndDropImageComp = {
      promise: o
    };
    o.then(e => {
      e && this.isAlive() && (this.processDragAndDropImageComponent(e), this.dragAndDropImageComp.comp = e);
    });
  }
  processDragAndDropImageComponent(e) {
    let {
      dragSource,
      environment
    } = this;
    if (!dragSource) return;
    let s = e.getGui();
    s.style.setProperty("position", "absolute");
    s.style.setProperty("z-index", "9999");
    sp(this.gos, s);
    environment.applyThemeClasses(s);
    e.setIcon(null, !1);
    let {
      dragItemName
    } = dragSource;
    "function" == typeof dragItemName && (r = dragItemName());
    e.setLabel(dragItemName || "");
    s.style.top = "20px";
    s.style.left = "20px";
    let o = e6(this.beans);
    this.dragAndDropImageParent = o;
    o ? o.appendChild(s) : $$eW42(54);
  }
  registerGridDropTarget(e, t) {
    let i = {
      getContainer: e,
      isInterestedIn: e => 1 === e || 0 === e,
      getIconName: () => "notAllowed"
    };
    this.addDropTarget(i);
    t.addDestroyFunc(() => this.removeDropTarget(i));
  }
};
var sb = class {
  constructor(e) {
    this.tickingInterval = null;
    this.onScrollCallback = null;
    this.scrollContainer = e.scrollContainer;
    this.scrollHorizontally = -1 !== e.scrollAxis.indexOf("x");
    this.scrollVertically = -1 !== e.scrollAxis.indexOf("y");
    this.scrollByTick = null != e.scrollByTick ? e.scrollByTick : 20;
    e.onScrollCallback && (this.onScrollCallback = e.onScrollCallback);
    this.scrollVertically && (this.getVerticalPosition = e.getVerticalPosition, this.setVerticalPosition = e.setVerticalPosition);
    this.scrollHorizontally && (this.getHorizontalPosition = e.getHorizontalPosition, this.setHorizontalPosition = e.setHorizontalPosition);
    this.shouldSkipVerticalScroll = e.shouldSkipVerticalScroll || (() => !1);
    this.shouldSkipHorizontalScroll = e.shouldSkipHorizontalScroll || (() => !1);
  }
  check(e, t = !1) {
    let i = t || this.shouldSkipVerticalScroll();
    if (i && this.shouldSkipHorizontalScroll()) return;
    let s = this.scrollContainer.getBoundingClientRect();
    let r = this.scrollByTick;
    this.tickLeft = e.clientX < s.left + r;
    this.tickRight = e.clientX > s.right - r;
    this.tickUp = e.clientY < s.top + r && !i;
    this.tickDown = e.clientY > s.bottom - r && !i;
    this.tickLeft || this.tickRight || this.tickUp || this.tickDown ? this.ensureTickingStarted() : this.ensureCleared();
  }
  ensureTickingStarted() {
    null === this.tickingInterval && (this.tickingInterval = window.setInterval(this.doTick.bind(this), 100), this.tickCount = 0);
  }
  doTick() {
    this.tickCount++;
    let e = this.tickCount > 20 ? 200 : this.tickCount > 10 ? 80 : 40;
    if (this.scrollVertically) {
      let t = this.getVerticalPosition();
      this.tickUp && this.setVerticalPosition(t - e);
      this.tickDown && this.setVerticalPosition(t + e);
    }
    if (this.scrollHorizontally) {
      let t = this.getHorizontalPosition();
      this.tickLeft && this.setHorizontalPosition(t - e);
      this.tickRight && this.setHorizontalPosition(t + e);
    }
    this.onScrollCallback && this.onScrollCallback();
  }
  ensureCleared() {
    this.tickingInterval && (window.clearInterval(this.tickingInterval), this.tickingInterval = null);
  }
};
function sy(e, t) {
  let i = e.column === t.column;
  let s = e.rowPinned === t.rowPinned;
  let r = e.rowIndex === t.rowIndex;
  return i && s && r;
}
function sS(e, t) {
  switch (t.rowPinned) {
    case "top":
      return e.pinnedRowModel?.getPinnedTopRow(t.rowIndex);
    case "bottom":
      return e.pinnedRowModel?.getPinnedBottomRow(t.rowIndex);
    default:
      return e.rowModel.getRow(t.rowIndex);
  }
}
function sR(e, t) {
  let i = e.spannedRowRenderer?.getCellByPosition(t);
  if (i) return i;
  let s = e.rowRenderer.getRowByPosition(t);
  return s ? s.getCellCtrl(t.column) : null;
}
var sD = class extends $$tM23 {
  constructor(e) {
    super();
    this.eContainer = e;
  }
  postConstruct() {
    let {
      rowModel,
      gos,
      ctrlsSvc
    } = this.beans;
    $$eK33(gos, rowModel) && (this.clientSideRowModel = rowModel);
    ctrlsSvc.whenReady(this, e => {
      let t = e.gridBodyCtrl;
      this.autoScrollService = new sb({
        scrollContainer: t.eBodyViewport,
        scrollAxis: "y",
        getVerticalPosition: () => t.scrollFeature.getVScrollPosition().top,
        setVerticalPosition: e => t.scrollFeature.setVerticalScrollPosition(e),
        onScrollCallback: () => {
          this.onDragging(this.lastDraggingEvent);
        }
      });
    });
  }
  getContainer() {
    return this.eContainer;
  }
  isInterestedIn(e) {
    return 2 === e;
  }
  getIconName() {
    return this.gos.get("rowDragManaged") && this.shouldPreventRowMove() ? "notAllowed" : "move";
  }
  shouldPreventRowMove() {
    let {
      rowGroupColsSvc,
      filterManager,
      sortSvc
    } = this.beans;
    return !!((rowGroupColsSvc?.columns ?? []).length || filterManager?.isAnyFilterPresent() || sortSvc?.isSortActive());
  }
  getRowNodes(e) {
    if (!this.isFromThisGrid(e)) return e.dragItem.rowNodes || [];
    let t = e.dragItem.rowNode;
    if (this.gos.get("rowDragMultiRow")) {
      let e = [...(this.beans.selectionSvc?.getSelectedNodes() ?? [])].sort((e, t) => null == e.rowIndex || null == t.rowIndex ? 0 : this.getRowIndexNumber(e) - this.getRowIndexNumber(t));
      if (-1 !== e.indexOf(t)) return e;
    }
    return [t];
  }
  onDragEnter(e) {
    e.dragItem.rowNodes = this.getRowNodes(e);
    this.dispatchGridEvent("rowDragEnter", e);
    this.getRowNodes(e).forEach(e => {
      this.setRowNodeDragging(e, !0);
    });
    this.onEnterOrDragging(e);
  }
  onDragging(e) {
    this.onEnterOrDragging(e);
  }
  isFromThisGrid(e) {
    let {
      dragSourceDomDataKey
    } = e.dragSource;
    return dragSourceDomDataKey === this.gos.getDomDataKey();
  }
  onEnterOrDragging(e) {
    this.dispatchGridEvent("rowDragMove", e);
    this.lastDraggingEvent = e;
    let t = sC(this.beans, e).y;
    this.gos.get("rowDragManaged") && this.doManagedDrag(e, t);
    this.autoScrollService.check(e.event);
  }
  doManagedDrag(e, t) {
    let {
      dragAndDrop,
      gos
    } = this.beans;
    let r = this.isFromThisGrid(e);
    let o = gos.get("rowDragManaged");
    let n = e.dragItem.rowNodes;
    !(o && this.shouldPreventRowMove()) && (gos.get("suppressMoveWhenRowDragging") || !r ? dragAndDrop.isDropZoneWithinThisGrid(e) && this.clientSideRowModel.highlightRowAtPixel(n[0], t) : this.moveRows(n, t));
  }
  getRowIndexNumber(e) {
    return parseInt(tq(e.getRowIndexString().split("-")), 10);
  }
  moveRowAndClearHighlight(e) {
    let t = this.clientSideRowModel;
    let i = t.getLastHighlightedRowNode();
    let s = i && "Below" === i.highlighted;
    let r = sC(this.beans, e).y;
    let o = e.dragItem.rowNodes;
    let n = s ? 1 : 0;
    if (this.isFromThisGrid(e)) {
      o.forEach(e => {
        e.rowTop < r && (n -= 1);
      });
      this.moveRows(o, r, n);
    } else {
      let e = ti(this.gos);
      let i = t.getRowIndexAtPixel(r) + 1;
      "Above" === t.getHighlightPosition(r) && i--;
      t.updateRowData({
        add: o.filter(i => !t.getRowNode(e?.({
          data: i.data,
          level: 0,
          rowPinned: i.rowPinned
        }) ?? i.data.id)).map(e => e.data),
        addIndex: i
      });
    }
    this.clearRowHighlight();
  }
  clearRowHighlight() {
    this.clientSideRowModel.highlightRowAtPixel(null);
  }
  moveRows(e, t, i = 0) {
    let s = this.beans.focusSvc;
    let r = s.getFocusedCell();
    let o = r && sR(this.beans, r);
    this.clientSideRowModel.ensureRowsAtPixel(e, t, i) && (o ? o.focusCell() : s.clearFocusedCell());
  }
  addRowDropZone(e) {
    if (!e.getContainer()) {
      $$eW42(55);
      return;
    }
    let t = this.beans.dragAndDrop;
    if (t.findExternalZone(e)) {
      $$eW42(56);
      return;
    }
    let i = {
      getContainer: e.getContainer
    };
    e.fromGrid ? i = e : (e.onDragEnter && (i.onDragEnter = t => {
      e.onDragEnter(this.draggingToRowDragEvent("rowDragEnter", t));
    }), e.onDragLeave && (i.onDragLeave = t => {
      e.onDragLeave(this.draggingToRowDragEvent("rowDragLeave", t));
    }), e.onDragging && (i.onDragging = t => {
      e.onDragging(this.draggingToRowDragEvent("rowDragMove", t));
    }), e.onDragStop && (i.onDragStop = t => {
      e.onDragStop(this.draggingToRowDragEvent("rowDragEnd", t));
    }), e.onDragCancel && (i.onDragCancel = t => {
      e.onDragCancel(this.draggingToRowDragEvent("rowDragCancel", t));
    }));
    let s = {
      isInterestedIn: e => 2 === e,
      getIconName: () => "move",
      external: !0,
      ...i
    };
    t.addDropTarget(s);
    this.addDestroyFunc(() => t.removeDropTarget(s));
  }
  getRowDropZone(e) {
    let t = this.getContainer.bind(this);
    let i = this.onDragEnter.bind(this);
    let s = this.onDragLeave.bind(this);
    let r = this.onDragging.bind(this);
    let o = this.onDragStop.bind(this);
    let n = this.onDragCancel.bind(this);
    return e ? {
      getContainer: t,
      onDragEnter: e.onDragEnter ? t => {
        i(t);
        e.onDragEnter(this.draggingToRowDragEvent("rowDragEnter", t));
      } : i,
      onDragLeave: e.onDragLeave ? t => {
        s(t);
        e.onDragLeave(this.draggingToRowDragEvent("rowDragLeave", t));
      } : s,
      onDragging: e.onDragging ? t => {
        r(t);
        e.onDragging(this.draggingToRowDragEvent("rowDragMove", t));
      } : r,
      onDragStop: e.onDragStop ? t => {
        o(t);
        e.onDragStop(this.draggingToRowDragEvent("rowDragEnd", t));
      } : o,
      onDragCancel: e.onDragCancel ? t => {
        n(t);
        e.onDragCancel(this.draggingToRowDragEvent("rowDragCancel", t));
      } : n,
      fromGrid: !0
    } : {
      getContainer: t,
      onDragEnter: i,
      onDragLeave: s,
      onDragging: r,
      onDragStop: o,
      onDragCancel: n,
      fromGrid: !0
    };
  }
  draggingToRowDragEvent(e, t) {
    let i;
    let s = this.beans;
    let {
      pageBounds,
      rowModel,
      gos
    } = s;
    let l = sC(s, t).y;
    let a = l > pageBounds.getCurrentPageHeight();
    let d = -1;
    a || (d = rowModel.getRowIndexAtPixel(l), i = rowModel.getRow(d));
    return ty(gos, {
      type: e,
      event: t.event,
      node: t.dragItem.rowNode,
      nodes: t.dragItem.rowNodes,
      overIndex: d,
      overNode: i,
      y: l,
      vDirection: t.vDirection
    });
  }
  dispatchGridEvent(e, t) {
    let i = this.draggingToRowDragEvent(e, t);
    this.eventSvc.dispatchEvent(i);
  }
  onDragLeave(e) {
    this.dispatchGridEvent("rowDragLeave", e);
    this.stopDragging(e);
    this.gos.get("rowDragManaged") && this.clearRowHighlight();
  }
  onDragStop(e) {
    this.dispatchGridEvent("rowDragEnd", e);
    this.stopDragging(e);
    let {
      dragAndDrop,
      gos
    } = this.beans;
    gos.get("rowDragManaged") && (gos.get("suppressMoveWhenRowDragging") || !this.isFromThisGrid(e)) && dragAndDrop.isDropZoneWithinThisGrid(e) && this.moveRowAndClearHighlight(e);
  }
  onDragCancel(e) {
    this.dispatchGridEvent("rowDragCancel", e);
    this.stopDragging(e);
    let {
      dragAndDrop,
      gos
    } = this.beans;
    gos.get("rowDragManaged") && (gos.get("suppressMoveWhenRowDragging") || !this.isFromThisGrid(e)) && dragAndDrop.isDropZoneWithinThisGrid(e) && this.clearRowHighlight();
  }
  stopDragging(e) {
    this.autoScrollService.ensureCleared();
    this.getRowNodes(e).forEach(e => {
      this.setRowNodeDragging(e, !1);
    });
  }
  setRowNodeDragging(e, t) {
    e.dragging !== t && (e.dragging = t, e.dispatchRowEvent("draggingChanged"));
  }
};
function sx(e, t, i) {
  return 0 !== i && Math.max(Math.abs(e.clientX - t.clientX), Math.abs(e.clientY - t.clientY)) <= i;
}
var sP = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "dragSvc";
    this.dragEndFunctions = [];
    this.dragSources = [];
  }
  destroy() {
    let {
      dragSources
    } = this;
    dragSources.forEach(this.removeListener.bind(this));
    dragSources.length = 0;
    super.destroy();
  }
  removeListener(e) {
    let t = e.dragSource.eElement;
    let i = e.mouseDownListener;
    if (t.removeEventListener("mousedown", i), e.touchEnabled) {
      let i = e.touchStartListener;
      t.removeEventListener("touchstart", i, {
        passive: !0
      });
    }
  }
  removeDragSource(e) {
    let {
      dragSources
    } = this;
    let i = dragSources.find(t => t.dragSource === e);
    i && (this.removeListener(i), tJ(dragSources, i));
  }
  addDragSource(e) {
    let t = this.onMouseDown.bind(this, e);
    let {
      eElement,
      includeTouch,
      stopPropagationForTouch
    } = e;
    eElement.addEventListener("mousedown", t);
    let o = null;
    let n = this.gos.get("suppressTouch");
    includeTouch && !n && (o = t => {
      z(t.target) || (stopPropagationForTouch && t.stopPropagation(), this.onTouchStart(e, t));
    }, eElement.addEventListener("touchstart", o, {
      passive: !1
    }));
    this.dragSources.push({
      dragSource: e,
      mouseDownListener: t,
      touchStartListener: o,
      touchEnabled: !!includeTouch
    });
  }
  onTouchStart(e, t) {
    this.currentDragParams = e;
    this.dragging = !1;
    let i = t.touches[0];
    this.touchLastTime = i;
    this.touchStart = i;
    let s = t => this.onTouchUp(t, e.eElement);
    let r = t.target;
    let o = [{
      target: e5(this.beans),
      type: "touchmove",
      listener: e => {
        e.cancelable && e.preventDefault();
      },
      options: {
        passive: !1
      }
    }, {
      target: r,
      type: "touchmove",
      listener: t => this.onTouchMove(t, e.eElement),
      options: {
        passive: !0
      }
    }, {
      target: r,
      type: "touchend",
      listener: s,
      options: {
        passive: !0
      }
    }, {
      target: r,
      type: "touchcancel",
      listener: s,
      options: {
        passive: !0
      }
    }];
    this.addTemporaryEvents(o);
    0 === e.dragStartPixels && this.onCommonMove(i, this.touchStart, e.eElement);
  }
  onMouseDown(e, t) {
    if (e.skipMouseEvent && e.skipMouseEvent(t) || t._alreadyProcessedByDragService || (t._alreadyProcessedByDragService = !0, 0 !== t.button)) return;
    this.shouldPreventMouseEvent(t) && t.preventDefault();
    this.currentDragParams = e;
    this.dragging = !1;
    this.mouseStartEvent = t;
    this.startTarget = t.target;
    let i = e5(this.beans);
    let s = [{
      target: i,
      type: "mousemove",
      listener: t => this.onMouseMove(t, e.eElement)
    }, {
      target: i,
      type: "mouseup",
      listener: t => this.onMouseUp(t, e.eElement)
    }, {
      target: i,
      type: "contextmenu",
      listener: e => e.preventDefault()
    }, {
      target: i,
      type: "keydown",
      listener: t => {
        t.key === i4.ESCAPE && this.cancelDrag(e.eElement);
      }
    }];
    this.addTemporaryEvents(s);
    0 === e.dragStartPixels && this.onMouseMove(t, e.eElement);
  }
  addTemporaryEvents(e) {
    e.forEach(e => {
      let {
        target,
        type,
        listener,
        options
      } = e;
      target.addEventListener(type, listener, options);
    });
    this.dragEndFunctions.push(() => {
      e.forEach(e => {
        let {
          target,
          type,
          listener,
          options
        } = e;
        target.removeEventListener(type, listener, options);
      });
    });
  }
  isEventNearStartEvent(e, t) {
    let {
      dragStartPixels
    } = this.currentDragParams;
    return sx(e, t, ew(dragStartPixels) ? dragStartPixels : 4);
  }
  getFirstActiveTouch(e) {
    for (let t = 0; t < e.length; t++) if (e[t].identifier === this.touchStart.identifier) return e[t];
    return null;
  }
  onCommonMove(e, t, i) {
    if (!this.dragging) {
      if (this.isEventNearStartEvent(e, t)) return;
      if (this.dragging = !0, this.eventSvc.dispatchEvent({
        type: "dragStarted",
        target: i
      }), this.currentDragParams.onDragStart(t), !this.currentDragParams) {
        this.dragging = !1;
        return;
      }
      this.currentDragParams.onDragging(t);
    }
    this.currentDragParams?.onDragging(e);
  }
  onTouchMove(e, t) {
    let i = this.getFirstActiveTouch(e.touches);
    i && this.onCommonMove(i, this.touchStart, t);
  }
  onMouseMove(e, t) {
    if (I()) {
      let e = e1(this.beans);
      e.getSelection()?.removeAllRanges();
    }
    this.shouldPreventMouseEvent(e) && e.preventDefault();
    this.onCommonMove(e, this.mouseStartEvent, t);
  }
  shouldPreventMouseEvent(e) {
    let {
      gos
    } = this;
    let i = gos.get("enableCellTextSelection");
    let s = "mousemove" === e.type;
    return i && s && e.cancelable && sm(gos, e) && !(e => {
      let t = e.target;
      let i = t?.tagName.toLocaleLowerCase();
      return !!i?.match("^a$|textarea|input|select|button");
    })(e);
  }
  onTouchUp(e, t) {
    let i = this.getFirstActiveTouch(e.changedTouches);
    i || (i = this.touchLastTime);
    this.onUpCommon(i, t);
  }
  onMouseUp(e, t) {
    this.onUpCommon(e, t);
  }
  onUpCommon(e, t) {
    this.dragging && (this.dragging = !1, this.currentDragParams.onDragStop(e), this.eventSvc.dispatchEvent({
      type: "dragStopped",
      target: t
    }));
    this.resetDragProperties();
  }
  cancelDrag(e) {
    this.eventSvc.dispatchEvent({
      type: "dragCancelled",
      target: e
    });
    this.currentDragParams?.onDragCancel?.();
    this.resetDragProperties();
  }
  resetDragProperties() {
    this.mouseStartEvent = null;
    this.startTarget = null;
    this.touchStart = null;
    this.touchLastTime = null;
    this.currentDragParams = null;
    let {
      dragEndFunctions
    } = this;
    dragEndFunctions.forEach(e => e());
    dragEndFunctions.length = 0;
  }
};
function sE(e) {
  return e instanceof sF;
}
var sF = class extends $$tM23 {
  constructor(e, t, i, s) {
    super();
    this.providedColumnGroup = e;
    this.groupId = t;
    this.partId = i;
    this.pinned = s;
    this.isColumn = !1;
    this.displayedChildren = [];
    this.autoHeaderHeight = null;
    this.parent = null;
  }
  reset() {
    this.parent = null;
    this.children = null;
    this.displayedChildren = null;
  }
  getParent() {
    return this.parent;
  }
  getUniqueId() {
    return this.groupId + "_" + this.partId;
  }
  isEmptyGroup() {
    return 0 === this.displayedChildren.length;
  }
  isMoving() {
    let e = this.getProvidedColumnGroup().getLeafColumns();
    return !!e && 0 !== e.length && e.every(e => e.isMoving());
  }
  checkLeft() {
    if (this.displayedChildren.forEach(e => {
      sE(e) && e.checkLeft();
    }), this.displayedChildren.length > 0) {
      if (this.gos.get("enableRtl")) {
        let e = tq(this.displayedChildren).getLeft();
        this.setLeft(e);
      } else {
        let e = this.displayedChildren[0].getLeft();
        this.setLeft(e);
      }
    } else this.setLeft(null);
  }
  getLeft() {
    return this.left;
  }
  getOldLeft() {
    return this.oldLeft;
  }
  setLeft(e) {
    this.oldLeft = this.left;
    this.left !== e && (this.left = e, this.dispatchLocalEvent({
      type: "leftChanged"
    }));
  }
  getPinned() {
    return this.pinned;
  }
  getGroupId() {
    return this.groupId;
  }
  getPartId() {
    return this.partId;
  }
  getActualWidth() {
    let e = 0;
    this.displayedChildren?.forEach(t => {
      e += t.getActualWidth();
    });
    return e;
  }
  isResizable() {
    if (!this.displayedChildren) return !1;
    let e = !1;
    this.displayedChildren.forEach(t => {
      t.isResizable() && (e = !0);
    });
    return e;
  }
  getMinWidth() {
    let e = 0;
    this.displayedChildren.forEach(t => {
      e += t.getMinWidth();
    });
    return e;
  }
  addChild(e) {
    this.children || (this.children = []);
    this.children.push(e);
  }
  getDisplayedChildren() {
    return this.displayedChildren;
  }
  getLeafColumns() {
    let e = [];
    this.addLeafColumns(e);
    return e;
  }
  getDisplayedLeafColumns() {
    let e = [];
    this.addDisplayedLeafColumns(e);
    return e;
  }
  getDefinition() {
    return this.providedColumnGroup.getColGroupDef();
  }
  getColGroupDef() {
    return this.providedColumnGroup.getColGroupDef();
  }
  isPadding() {
    return this.providedColumnGroup.isPadding();
  }
  isExpandable() {
    return this.providedColumnGroup.isExpandable();
  }
  isExpanded() {
    return this.providedColumnGroup.isExpanded();
  }
  setExpanded(e) {
    this.providedColumnGroup.setExpanded(e);
  }
  isAutoHeaderHeight() {
    return !!this.getColGroupDef()?.autoHeaderHeight;
  }
  getAutoHeaderHeight() {
    return this.autoHeaderHeight;
  }
  setAutoHeaderHeight(e) {
    let t = e !== this.autoHeaderHeight;
    this.autoHeaderHeight = e;
    return t;
  }
  addDisplayedLeafColumns(e) {
    this.displayedChildren.forEach(t => {
      tW(t) ? e.push(t) : sE(t) && t.addDisplayedLeafColumns(e);
    });
  }
  addLeafColumns(e) {
    this.children.forEach(t => {
      tW(t) ? e.push(t) : sE(t) && t.addLeafColumns(e);
    });
  }
  getChildren() {
    return this.children;
  }
  getColumnGroupShow() {
    return this.providedColumnGroup.getColumnGroupShow();
  }
  getProvidedColumnGroup() {
    return this.providedColumnGroup;
  }
  getPaddingLevel() {
    let e = this.getParent();
    return this.isPadding() && e && e.isPadding() ? 1 + e.getPaddingLevel() : 0;
  }
  calculateDisplayedColumns() {
    this.displayedChildren = [];
    let e = this;
    for (; null != e && e.isPadding();) e = e.getParent();
    if (!(e && e.getProvidedColumnGroup().isExpandable())) {
      this.displayedChildren = this.children;
      this.dispatchLocalEvent({
        type: "displayedChildrenChanged"
      });
      return;
    }
    this.children.forEach(t => {
      if (!sE(t) || t.displayedChildren && t.displayedChildren.length) switch (t.getColumnGroupShow()) {
        case "open":
          e.getProvidedColumnGroup().isExpanded() && this.displayedChildren.push(t);
          break;
        case "closed":
          e.getProvidedColumnGroup().isExpanded() || this.displayedChildren.push(t);
          break;
        default:
          this.displayedChildren.push(t);
      }
    });
    this.dispatchLocalEvent({
      type: "displayedChildrenChanged"
    });
  }
};
var sA = "row-group-";
var sk = 0;
var sM = class {
  constructor(e) {
    this.master = !1;
    this.detail = void 0;
    this.rowIndex = null;
    this.key = null;
    this.sourceRowIndex = -1;
    this.childrenMapped = {};
    this.treeNode = null;
    this.treeNodeFlags = 0;
    this.displayed = !1;
    this.rowTop = null;
    this.oldRowTop = null;
    this.selectable = !0;
    this.__objectId = sk++;
    this.alreadyRendered = !1;
    this.highlighted = null;
    this.hovered = !1;
    this.__selected = !1;
    this.beans = e;
  }
  setData(e) {
    this.setDataCommon(e, !1);
  }
  updateData(e) {
    this.setDataCommon(e, !0);
  }
  setDataCommon(e, t) {
    let {
      valueCache,
      selectionSvc,
      rowSpanSvc
    } = this.beans;
    let o = this.data;
    this.data = e;
    valueCache?.onDataChanged();
    this.updateDataOnDetailNode();
    selectionSvc?.updateRowSelectable(this);
    this.resetQuickFilterAggregateText();
    let n = this.createDataChangedEvent(e, o, t);
    this.__localEventService?.dispatchEvent(n);
    rowSpanSvc?.onRowDataUpdated(this);
  }
  updateDataOnDetailNode() {
    this.detailNode && (this.detailNode.data = this.data);
  }
  createDataChangedEvent(e, t, i) {
    return {
      type: "dataChanged",
      node: this,
      oldData: t,
      newData: e,
      update: i
    };
  }
  getRowIndexString() {
    return null == this.rowIndex ? (ez(13), null) : "top" === this.rowPinned ? "t-" + this.rowIndex : "bottom" === this.rowPinned ? "b-" + this.rowIndex : this.rowIndex.toString();
  }
  setDataAndId(e, t) {
    let {
      selectionSvc
    } = this.beans;
    let s = selectionSvc?.createDaemonNode?.(this);
    let r = this.data;
    this.data = e;
    this.updateDataOnDetailNode();
    this.setId(t);
    selectionSvc && (selectionSvc.updateRowSelectable(this), selectionSvc.syncInRowNode(this, s));
    let o = this.createDataChangedEvent(e, r, !1);
    this.__localEventService?.dispatchEvent(o);
  }
  setId(e) {
    let t = ti(this.beans.gos);
    if (t) {
      if (this.data) {
        let e = this.parent?.getRoute() ?? [];
        this.id = t({
          data: this.data,
          parentKeys: e.length > 0 ? e : void 0,
          level: this.level,
          rowPinned: this.rowPinned
        });
        this.id.startsWith(sA) && ez(14, {
          groupPrefix: sA
        });
      } else this.id = void 0;
    } else this.id = e;
  }
  setRowTop(e) {
    this.oldRowTop = this.rowTop;
    this.rowTop !== e && (this.rowTop = e, this.dispatchRowEvent("topChanged"), this.setDisplayed(null !== e));
  }
  clearRowTopAndRowIndex() {
    this.oldRowTop = null;
    this.setRowTop(null);
    this.setRowIndex(null);
  }
  setHovered(e) {
    this.hovered = e;
  }
  isHovered() {
    return this.hovered;
  }
  setRowHeight(e, t = !1) {
    this.rowHeight = e;
    this.rowHeightEstimated = t;
    this.dispatchRowEvent("heightChanged");
  }
  setExpanded(e, t, i) {
    this.beans.expansionSvc?.setExpanded(this, e, t, i);
  }
  setDataValue(e, t, i) {
    let {
      colModel,
      valueSvc,
      gos,
      selectionSvc,
      rowSpanSvc
    } = this.beans;
    let a = "string" != typeof e ? e : colModel.getCol(e) ?? colModel.getColDefCol(e);
    if (!a) return !1;
    let d = valueSvc.getValueForDisplay(a, this);
    if (gos.get("readOnlyEdit")) {
      let {
        beans: {
          eventSvc
        },
        data,
        rowIndex,
        rowPinned
      } = this;
      eventSvc.dispatchEvent({
        type: "cellEditRequest",
        event: null,
        rowIndex,
        rowPinned,
        column: a,
        colDef: a.colDef,
        data,
        node: this,
        oldValue: d,
        newValue: t,
        value: t,
        source: i
      });
      return !1;
    }
    let h = valueSvc.setValue(this, a, t, i);
    this.dispatchCellChangedEvent(a, t, d);
    selectionSvc?.updateRowSelectable(this);
    rowSpanSvc?.onRowDataUpdated(this);
    return h;
  }
  updateHasChildren() {
    let e = this.group && !this.footer || this.childrenAfterGroup && this.childrenAfterGroup.length > 0;
    let {
      rowChildrenSvc
    } = this.beans;
    rowChildrenSvc && (e = rowChildrenSvc.getHasChildrenValue(this));
    e !== this.__hasChildren && (this.__hasChildren = !!e, this.dispatchRowEvent("hasChildrenChanged"));
  }
  hasChildren() {
    null == this.__hasChildren && this.updateHasChildren();
    return this.__hasChildren;
  }
  dispatchCellChangedEvent(e, t, i) {
    this.__localEventService?.dispatchEvent({
      type: "cellChanged",
      node: this,
      column: e,
      newValue: t,
      oldValue: i
    });
  }
  resetQuickFilterAggregateText() {
    this.quickFilterAggregateText = null;
  }
  isExpandable() {
    return this.beans.expansionSvc?.isExpandable(this) ?? !1;
  }
  isSelected() {
    return this.footer ? this.sibling.isSelected() : this.__selected;
  }
  depthFirstSearch(e) {
    this.childrenAfterGroup?.forEach(t => t.depthFirstSearch(e));
    e(this);
  }
  dispatchRowEvent(e) {
    this.__localEventService?.dispatchEvent({
      type: e,
      node: this
    });
  }
  setSelected(e, t = !1, i = "api") {
    this.beans.selectionSvc?.setNodesSelected({
      nodes: [this],
      newValue: e,
      clearSelection: t,
      source: i
    });
  }
  isRowPinned() {
    return !!this.rowPinned;
  }
  __addEventListener(e, t) {
    this.__localEventService || (this.__localEventService = new p());
    this.__localEventService.addEventListener(e, t);
  }
  __removeEventListener(e, t) {
    this.removeLocalListener(e, t);
  }
  addEventListener(e, t) {
    this.beans.validation?.checkRowEvents(e);
    this.__localEventService || (this.__localEventService = new p());
    this.frameworkEventListenerService = this.beans.frameworkOverrides.createLocalEventListenerWrapper?.(this.frameworkEventListenerService, this.__localEventService);
    let i = this.frameworkEventListenerService?.wrap(t) ?? t;
    this.__localEventService.addEventListener(e, i);
  }
  removeEventListener(e, t) {
    let i = this.frameworkEventListenerService?.unwrap(t) ?? t;
    this.removeLocalListener(e, i);
  }
  removeLocalListener(e, t) {
    this.__localEventService?.removeEventListener(e, t);
    this.__localEventService?.noRegisteredListenersExist() && (this.__localEventService = null);
  }
  isFullWidthCell() {
    if ($$eW42(61), this.detail) return !0;
    let e = this.beans.gos.getCallback("isFullWidthRow");
    return !!e && e({
      rowNode: this
    });
  }
  getRoute() {
    if (-1 === this.level) return [];
    if (null == this.key) return;
    let e = [];
    let t = this;
    for (; t && null != t.key;) {
      e.push(t.key);
      t = t.parent;
    }
    return e.reverse();
  }
  setFirstChild(e) {
    this.firstChild !== e && (this.firstChild = e, this.dispatchRowEvent("firstChildChanged"));
  }
  setDisplayed(e) {
    this.displayed !== e && (this.displayed = e, this.dispatchRowEvent("displayedChanged"));
  }
  setRowIndex(e) {
    this.rowIndex !== e && (this.rowIndex = e, this.dispatchRowEvent("rowIndexChanged"));
  }
  setAllChildrenCount(e) {
    this.allChildrenCount !== e && (this.allChildrenCount = e, this.dispatchRowEvent("allChildrenCountChanged"));
  }
  setUiLevel(e) {
    this.uiLevel !== e && (this.uiLevel = e, this.dispatchRowEvent("uiLevelChanged"));
  }
};
var sT = class extends iS {
  constructor(e, t) {
    super('<div class="ag-filter"></div>');
    this.column = e;
    this.source = t;
    this.filterWrapper = null;
  }
  postConstruct() {
    this.createFilter(!0);
    this.addManagedEventListeners({
      filterDestroyed: this.onFilterDestroyed.bind(this)
    });
  }
  hasFilter() {
    return !!this.filterWrapper;
  }
  getFilter() {
    return this.filterWrapper?.filterPromise ?? null;
  }
  afterInit() {
    return this.filterWrapper?.filterPromise?.then(() => {}) ?? $$iR37.resolve();
  }
  afterGuiAttached(e) {
    this.filterWrapper?.filterPromise?.then(t => {
      t?.afterGuiAttached?.(e);
    });
  }
  afterGuiDetached() {
    this.filterWrapper?.filterPromise?.then(e => {
      e?.afterGuiDetached?.();
    });
  }
  createFilter(e) {
    let {
      column,
      source
    } = this;
    this.filterWrapper = this.beans.filterManager?.getOrCreateFilterWrapper(column) ?? null;
    this.filterWrapper?.filterPromise && this.filterWrapper.filterPromise.then(s => {
      let r = s.getGui();
      ew(r) || $$eW42(69, {
        guiFromFilter: r
      });
      this.appendChild(r);
      e && this.eventSvc.dispatchEvent({
        type: "filterOpened",
        column,
        source,
        eGui: this.getGui()
      });
    });
  }
  onFilterDestroyed(e) {
    ("api" === e.source || "paramsUpdated" === e.source) && e.column.getId() === this.column.getId() && this.beans.colModel.getColDefCol(this.column) && (et(this.getGui()), this.createFilter());
  }
  destroy() {
    this.filterWrapper = null;
    super.destroy();
  }
};
var sI = "ag-resizer-wrapper";
var sL = (e, t) => `<div data-ref="${e}Resizer" class="ag-resizer ag-resizer-${t}"></div>`;
var sO = `<div class="${sI}">
        ${sL("eTopLeft", "topLeft")}
        ${sL("eTop", "top")}
        ${sL("eTopRight", "topRight")}
        ${sL("eRight", "right")}
        ${sL("eBottomRight", "bottomRight")}
        ${sL("eBottom", "bottom")}
        ${sL("eBottomLeft", "bottomLeft")}
        ${sL("eLeft", "left")}
    </div>`;
var sG = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.element = e;
    this.dragStartPosition = {
      x: 0,
      y: 0
    };
    this.position = {
      x: 0,
      y: 0
    };
    this.lastSize = {
      width: -1,
      height: -1
    };
    this.positioned = !1;
    this.resizersAdded = !1;
    this.resizeListeners = [];
    this.boundaryEl = null;
    this.isResizing = !1;
    this.isMoving = !1;
    this.resizable = {};
    this.movable = !1;
    this.currentResizer = null;
    this.config = Object.assign({}, {
      popup: !1
    }, t);
  }
  wireBeans(e) {
    this.popupSvc = e.popupSvc;
    this.dragSvc = e.dragSvc;
  }
  center() {
    let {
      clientHeight,
      clientWidth
    } = this.offsetParent;
    let i = clientWidth / 2 - this.getWidth() / 2;
    let s = clientHeight / 2 - this.getHeight() / 2;
    this.offsetElement(i, s);
  }
  initialisePosition() {
    if (this.positioned) return;
    let {
      centered,
      forcePopupParentAsOffsetParent,
      minWidth,
      width,
      minHeight,
      height,
      x,
      y
    } = this.config;
    this.offsetParent || this.setOffsetParent();
    let a = 0;
    let d = 0;
    let h = er(this.element);
    if (h) {
      let e = this.findBoundaryElement();
      let t = window.getComputedStyle(e);
      if (null != t.minWidth) {
        let i = e.offsetWidth - this.element.offsetWidth;
        d = parseInt(t.minWidth, 10) - i;
      }
      if (null != t.minHeight) {
        let i = e.offsetHeight - this.element.offsetHeight;
        a = parseInt(t.minHeight, 10) - i;
      }
    }
    if (this.minHeight = minHeight || a, this.minWidth = minWidth || d, width && this.setWidth(width), height && this.setHeight(height), width && height || this.refreshSize(), centered) this.center();else if (x || y) this.offsetElement(x, y);else if (h && forcePopupParentAsOffsetParent) {
      let e = this.boundaryEl;
      let t = !0;
      if (e || (e = this.findBoundaryElement(), t = !1), e) {
        let i = parseFloat(e.style.top);
        let s = parseFloat(e.style.left);
        t ? this.offsetElement(isNaN(s) ? 0 : s, isNaN(i) ? 0 : i) : this.setPosition(s, i);
      }
    }
    this.positioned = !!this.offsetParent;
  }
  isPositioned() {
    return this.positioned;
  }
  getPosition() {
    return this.position;
  }
  setMovable(e, t) {
    if (!this.config.popup || e === this.movable) return;
    this.movable = e;
    let i = this.moveElementDragListener || {
      eElement: t,
      onDragStart: this.onMoveStart.bind(this),
      onDragging: this.onMove.bind(this),
      onDragStop: this.onMoveEnd.bind(this)
    };
    e ? (this.dragSvc?.addDragSource(i), this.moveElementDragListener = i) : (this.dragSvc?.removeDragSource(i), this.moveElementDragListener = void 0);
  }
  setResizable(e) {
    if (this.clearResizeListeners(), e ? this.addResizers() : this.removeResizers(), "boolean" == typeof e) {
      if (!1 === e) return;
      e = {
        topLeft: e,
        top: e,
        topRight: e,
        right: e,
        bottomRight: e,
        bottom: e,
        bottomLeft: e,
        left: e
      };
    }
    Object.keys(e).forEach(t => {
      let i = !!e[t];
      let s = this.getResizerElement(t);
      let r = {
        dragStartPixels: 0,
        eElement: s,
        onDragStart: e => this.onResizeStart(e, t),
        onDragging: this.onResize.bind(this),
        onDragStop: e => this.onResizeEnd(e, t)
      };
      !i && (this.isAlive() || i) || (i ? (this.dragSvc?.addDragSource(r), this.resizeListeners.push(r), s.style.pointerEvents = "all") : s.style.pointerEvents = "none", this.resizable[t] = i);
    });
  }
  removeSizeFromEl() {
    this.element.style.removeProperty("height");
    this.element.style.removeProperty("width");
    this.element.style.removeProperty("flex");
  }
  restoreLastSize() {
    this.element.style.flex = "0 0 auto";
    let {
      height,
      width
    } = this.lastSize;
    -1 !== width && (this.element.style.width = `${width}px`);
    -1 !== height && (this.element.style.height = `${height}px`);
  }
  getHeight() {
    return this.element.offsetHeight;
  }
  setHeight(e) {
    let {
      popup
    } = this.config;
    let i = this.element;
    let s = !1;
    if ("string" == typeof e && -1 !== e.indexOf("%")) {
      eu(i, e);
      e = Y(i);
      s = !0;
    } else if (e = Math.max(this.minHeight, e), this.positioned) {
      let t = this.getAvailableHeight();
      t && e > t && (e = t);
    }
    this.getHeight() !== e && (s ? (i.style.maxHeight = "unset", i.style.minHeight = "unset") : popup ? eu(i, e) : (i.style.height = `${e}px`, i.style.flex = "0 0 auto", this.lastSize.height = "number" == typeof e ? e : parseFloat(e)));
  }
  getAvailableHeight() {
    let {
      popup,
      forcePopupParentAsOffsetParent
    } = this.config;
    this.positioned || this.initialisePosition();
    let {
      clientHeight
    } = this.offsetParent;
    if (!clientHeight) return null;
    let s = this.element.getBoundingClientRect();
    let r = this.offsetParent.getBoundingClientRect();
    let o = popup ? this.position.y : s.top;
    let n = popup ? 0 : r.top;
    let l = 0;
    if (forcePopupParentAsOffsetParent) {
      let e = this.element.parentElement;
      if (e) {
        let {
          bottom
        } = e.getBoundingClientRect();
        l = bottom - s.bottom;
      }
    }
    return clientHeight + n - o - l;
  }
  getWidth() {
    return this.element.offsetWidth;
  }
  setWidth(e) {
    let t = this.element;
    let {
      popup
    } = this.config;
    let s = !1;
    if ("string" == typeof e && -1 !== e.indexOf("%")) {
      eh(t, e);
      e = J(t);
      s = !0;
    } else if (this.positioned) {
      e = Math.max(this.minWidth, e);
      let {
        clientWidth
      } = this.offsetParent;
      let s = popup ? this.position.x : this.element.getBoundingClientRect().left;
      clientWidth && e + s > clientWidth && (e = clientWidth - s);
    }
    this.getWidth() !== e && (s ? (t.style.maxWidth = "unset", t.style.minWidth = "unset") : this.config.popup ? eh(t, e) : (t.style.width = `${e}px`, t.style.flex = " unset", this.lastSize.width = "number" == typeof e ? e : parseFloat(e)));
  }
  offsetElement(e = 0, t = 0) {
    let {
      forcePopupParentAsOffsetParent
    } = this.config;
    let s = forcePopupParentAsOffsetParent ? this.boundaryEl : this.element;
    s && (this.popupSvc?.positionPopup({
      ePopup: s,
      keepWithinBounds: !0,
      skipObserver: this.movable || this.isResizable(),
      updatePosition: () => ({
        x: e,
        y: t
      })
    }), this.setPosition(parseFloat(s.style.left), parseFloat(s.style.top)));
  }
  constrainSizeToAvailableHeight(e) {
    this.config.forcePopupParentAsOffsetParent && (e && this.popupSvc ? this.resizeObserverSubscriber = $$ef15(this.beans, this.popupSvc?.getPopupParent(), () => {
      let e = this.getAvailableHeight();
      this.element.style.setProperty("max-height", `${e}px`);
    }) : (this.element.style.removeProperty("max-height"), this.resizeObserverSubscriber && (this.resizeObserverSubscriber(), this.resizeObserverSubscriber = void 0)));
  }
  setPosition(e, t) {
    this.position.x = e;
    this.position.y = t;
  }
  updateDragStartPosition(e, t) {
    this.dragStartPosition = {
      x: e,
      y: t
    };
  }
  calculateMouseMovement(e) {
    let {
      e: _e,
      isLeft,
      isTop,
      anywhereWithin,
      topBuffer
    } = e;
    let n = _e.clientX - this.dragStartPosition.x;
    let l = _e.clientY - this.dragStartPosition.y;
    return {
      movementX: this.shouldSkipX(_e, !!isLeft, !!anywhereWithin, n) ? 0 : n,
      movementY: this.shouldSkipY(_e, !!isTop, topBuffer, l) ? 0 : l
    };
  }
  shouldSkipX(e, t, i, s) {
    let r = this.element.getBoundingClientRect();
    let o = this.offsetParent.getBoundingClientRect();
    let n = this.boundaryEl.getBoundingClientRect();
    let l = this.config.popup ? this.position.x : r.left;
    let a = l <= 0 && o.left >= e.clientX || o.right <= e.clientX && o.right <= n.right;
    return !!a || (a = t ? s < 0 && e.clientX > l + o.left || s > 0 && e.clientX < l + o.left : i ? s < 0 && e.clientX > n.right || s > 0 && e.clientX < l + o.left : s < 0 && e.clientX > n.right || s > 0 && e.clientX < n.right);
  }
  shouldSkipY(e, t, i = 0, s) {
    let r = this.element.getBoundingClientRect();
    let o = this.offsetParent.getBoundingClientRect();
    let n = this.boundaryEl.getBoundingClientRect();
    let l = this.config.popup ? this.position.y : r.top;
    let a = l <= 0 && o.top >= e.clientY || o.bottom <= e.clientY && o.bottom <= n.bottom;
    return !!a || (a = t ? s < 0 && e.clientY > l + o.top + i || s > 0 && e.clientY < l + o.top : s < 0 && e.clientY > n.bottom || s > 0 && e.clientY < n.bottom);
  }
  createResizeMap() {
    let e = this.element;
    this.resizerMap = {
      topLeft: {
        element: e.querySelector("[data-ref=eTopLeftResizer]")
      },
      top: {
        element: e.querySelector("[data-ref=eTopResizer]")
      },
      topRight: {
        element: e.querySelector("[data-ref=eTopRightResizer]")
      },
      right: {
        element: e.querySelector("[data-ref=eRightResizer]")
      },
      bottomRight: {
        element: e.querySelector("[data-ref=eBottomRightResizer]")
      },
      bottom: {
        element: e.querySelector("[data-ref=eBottomResizer]")
      },
      bottomLeft: {
        element: e.querySelector("[data-ref=eBottomLeftResizer]")
      },
      left: {
        element: e.querySelector("[data-ref=eLeftResizer]")
      }
    };
  }
  addResizers() {
    if (this.resizersAdded) return;
    let e = this.element;
    if (!e) return;
    let t = new DOMParser().parseFromString(sO, "text/html").body;
    e.appendChild(t.firstChild);
    this.createResizeMap();
    this.resizersAdded = !0;
  }
  removeResizers() {
    this.resizerMap = void 0;
    let e = this.element.querySelector(`.${sI}`);
    e && this.element.removeChild(e);
    this.resizersAdded = !1;
  }
  getResizerElement(e) {
    return this.resizerMap[e].element;
  }
  onResizeStart(e, t) {
    this.boundaryEl = this.findBoundaryElement();
    this.positioned || this.initialisePosition();
    this.currentResizer = {
      isTop: !!t.match(/top/i),
      isRight: !!t.match(/right/i),
      isBottom: !!t.match(/bottom/i),
      isLeft: !!t.match(/left/i)
    };
    this.element.classList.add("ag-resizing");
    this.resizerMap[t].element.classList.add("ag-active");
    let {
      popup,
      forcePopupParentAsOffsetParent
    } = this.config;
    popup || forcePopupParentAsOffsetParent || this.applySizeToSiblings(this.currentResizer.isBottom || this.currentResizer.isTop);
    this.isResizing = !0;
    this.updateDragStartPosition(e.clientX, e.clientY);
  }
  getSiblings() {
    let e = this.element.parentElement;
    return e ? Array.prototype.slice.call(e.children).filter(e => !e.classList.contains("ag-hidden")) : null;
  }
  getMinSizeOfSiblings() {
    let e = this.getSiblings() || [];
    let t = 0;
    let i = 0;
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      let o = !!r.style.flex && "0 0 auto" !== r.style.flex;
      if (r === this.element) continue;
      let n = this.minHeight || 0;
      let l = this.minWidth || 0;
      if (o) {
        let e = window.getComputedStyle(r);
        e.minHeight && (n = parseInt(e.minHeight, 10));
        e.minWidth && (l = parseInt(e.minWidth, 10));
      } else {
        n = r.offsetHeight;
        l = r.offsetWidth;
      }
      t += n;
      i += l;
    }
    return {
      height: t,
      width: i
    };
  }
  applySizeToSiblings(e) {
    let t = null;
    let i = this.getSiblings();
    if (i) {
      for (let s = 0; s < i.length; s++) {
        let r = i[s];
        r !== t && (e ? r.style.height = `${r.offsetHeight}px` : r.style.width = `${r.offsetWidth}px`, r.style.flex = "0 0 auto", r === this.element && (t = i[s + 1]));
      }
      t && (t.style.removeProperty("height"), t.style.removeProperty("min-height"), t.style.removeProperty("max-height"), t.style.flex = "1 1 auto");
    }
  }
  isResizable() {
    return Object.values(this.resizable).some(e => e);
  }
  onResize(e) {
    if (!this.isResizing || !this.currentResizer) return;
    let {
      popup,
      forcePopupParentAsOffsetParent
    } = this.config;
    let {
      isTop,
      isRight,
      isBottom,
      isLeft
    } = this.currentResizer;
    let l = isRight || isLeft;
    let a = isBottom || isTop;
    let {
      movementX,
      movementY
    } = this.calculateMouseMovement({
      e,
      isLeft,
      isTop
    });
    let u = this.position.x;
    let c = this.position.y;
    let g = 0;
    let p = 0;
    if (l && movementX) {
      let e = isLeft ? -1 : 1;
      let t = this.getWidth();
      let i = t + movementX * e;
      let s = !1;
      isLeft && (u + (g = t - i) <= 0 || i <= this.minWidth) && (s = !0, g = 0);
      s || this.setWidth(i);
    }
    if (a && movementY) {
      let e = isTop ? -1 : 1;
      let t = this.getHeight();
      let i = t + movementY * e;
      let r = !1;
      isTop ? (c + (p = t - i) <= 0 || i <= this.minHeight) && (r = !0, p = 0) : !this.config.popup && !this.config.forcePopupParentAsOffsetParent && t < i && this.getMinSizeOfSiblings().height + i > this.element.parentElement.offsetHeight && (r = !0);
      r || this.setHeight(i);
    }
    this.updateDragStartPosition(e.clientX, e.clientY);
    ((popup || forcePopupParentAsOffsetParent) && g || p) && this.offsetElement(u + g, c + p);
  }
  onResizeEnd(e, t) {
    this.isResizing = !1;
    this.currentResizer = null;
    this.boundaryEl = null;
    this.element.classList.remove("ag-resizing");
    this.resizerMap[t].element.classList.remove("ag-active");
    this.dispatchLocalEvent({
      type: "resize"
    });
  }
  refreshSize() {
    let e = this.element;
    this.config.popup && (this.config.width || this.setWidth(e.offsetWidth), this.config.height || this.setHeight(e.offsetHeight));
  }
  onMoveStart(e) {
    this.boundaryEl = this.findBoundaryElement();
    this.positioned || this.initialisePosition();
    this.isMoving = !0;
    this.element.classList.add("ag-moving");
    this.updateDragStartPosition(e.clientX, e.clientY);
  }
  onMove(e) {
    let t;
    if (!this.isMoving) return;
    let {
      x,
      y
    } = this.position;
    this.config.calculateTopBuffer && (t = this.config.calculateTopBuffer());
    let {
      movementX,
      movementY
    } = this.calculateMouseMovement({
      e,
      isTop: !0,
      anywhereWithin: !0,
      topBuffer: t
    });
    this.offsetElement(x + movementX, y + movementY);
    this.updateDragStartPosition(e.clientX, e.clientY);
  }
  onMoveEnd() {
    this.isMoving = !1;
    this.boundaryEl = null;
    this.element.classList.remove("ag-moving");
  }
  setOffsetParent() {
    this.config.forcePopupParentAsOffsetParent && this.popupSvc ? this.offsetParent = this.popupSvc.getPopupParent() : this.offsetParent = this.element.offsetParent;
  }
  findBoundaryElement() {
    let e = this.element;
    for (; e;) {
      if ("static" !== window.getComputedStyle(e).position) return e;
      e = e.parentElement;
    }
    return this.element;
  }
  clearResizeListeners() {
    for (; this.resizeListeners.length;) {
      let e = this.resizeListeners.pop();
      this.dragSvc?.removeDragSource(e);
    }
  }
  destroy() {
    super.destroy();
    this.moveElementDragListener && this.dragSvc?.removeDragSource(this.moveElementDragListener);
    this.constrainSizeToAvailableHeight(!1);
    this.clearResizeListeners();
    this.removeResizers();
  }
};
var sH = class extends $$tM23 {
  constructor(e, t = {}) {
    super();
    this.eFocusable = e;
    this.callbacks = t;
    this.callbacks = {
      shouldStopEventPropagation: () => !1,
      onTabKeyDown: e => {
        if (e.defaultPrevented) return;
        let t = si(this.beans, this.eFocusable, !1, e.shiftKey);
        t && (t.focus(), e.preventDefault());
      },
      ...t
    };
  }
  postConstruct() {
    let {
      eFocusable,
      callbacks: {
        onFocusIn,
        onFocusOut
      }
    } = this;
    eFocusable.classList.add("ag-focus-managed");
    this.addKeyDownListeners(eFocusable);
    onFocusIn && this.addManagedElementListeners(eFocusable, {
      focusin: onFocusIn
    });
    onFocusOut && this.addManagedElementListeners(eFocusable, {
      focusout: onFocusOut
    });
  }
  addKeyDownListeners(e) {
    this.addManagedElementListeners(e, {
      keydown: e => {
        if (e.defaultPrevented || tE(e)) return;
        let {
          callbacks
        } = this;
        if (callbacks.shouldStopEventPropagation(e)) {
          tP(e);
          return;
        }
        e.key === i4.TAB ? callbacks.onTabKeyDown(e) : callbacks.handleKeyDown && callbacks.handleKeyDown(e);
      }
    });
  }
};
var sN = {
  applyFilter: "Apply",
  clearFilter: "Clear",
  resetFilter: "Reset",
  cancelFilter: "Cancel",
  textFilter: "Text Filter",
  numberFilter: "Number Filter",
  dateFilter: "Date Filter",
  setFilter: "Set Filter",
  filterOoo: "Filter...",
  empty: "Choose one",
  equals: "Equals",
  notEqual: "Does not equal",
  lessThan: "Less than",
  greaterThan: "Greater than",
  inRange: "Between",
  inRangeStart: "From",
  inRangeEnd: "To",
  lessThanOrEqual: "Less than or equal to",
  greaterThanOrEqual: "Greater than or equal to",
  contains: "Contains",
  notContains: "Does not contain",
  startsWith: "Begins with",
  endsWith: "Ends with",
  blank: "Blank",
  notBlank: "Not blank",
  before: "Before",
  after: "After",
  andCondition: "AND",
  orCondition: "OR",
  dateFormatOoo: "yyyy-mm-dd"
};
function sB(e, t) {
  let {
    debounceMs
  } = e;
  return sV(e) ? (null != debounceMs && $$eW42(71), 0) : debounceMs ?? t;
}
function sV(e) {
  return (e.buttons?.indexOf("apply") ?? -1) >= 0;
}
var sW = class extends iS {
  constructor(e) {
    super();
    this.filterNameKey = e;
    this.applyActive = !1;
    this.hidePopup = null;
    this.debouncePending = !1;
    this.appliedModel = null;
    this.eFilterBody = null;
    this.buttonListeners = [];
    this.defaultDebounceMs = 0;
  }
  postConstruct() {
    this.resetTemplate();
    this.createManagedBean(new sH(this.getFocusableElement(), {
      handleKeyDown: this.handleKeyDown.bind(this)
    }));
    this.positionableFeature = new sG(this.getPositionableElement(), {
      forcePopupParentAsOffsetParent: !0
    });
    this.createBean(this.positionableFeature);
  }
  handleKeyDown(e) {}
  getFilterTitle() {
    return this.translate(this.filterNameKey);
  }
  isFilterActive() {
    return !!this.appliedModel;
  }
  resetTemplate(e) {
    let t = this.getGui();
    t && t.removeEventListener("submit", this.onFormSubmit);
    let i = `
            <form class="ag-filter-wrapper">
                <div class="ag-filter-body-wrapper ag-${this.getCssIdentifier()}-body-wrapper" data-ref="eFilterBody">
                    ${this.createBodyTemplate()}
                </div>
            </form>`;
    this.setTemplate(i, this.getAgComponents(), e);
    t = this.getGui();
    t?.addEventListener("submit", this.onFormSubmit);
  }
  isReadOnly() {
    return !!this.params.readOnly;
  }
  init(e) {
    this.setParams(e);
    this.resetUiToDefaults(!0).then(() => {
      this.updateUiVisibility();
      this.setupOnBtApplyDebounce();
    });
  }
  setParams(e) {
    this.params = e;
    this.applyActive = sV(e);
    this.resetButtonsPanel(e);
  }
  updateParams(e) {
    this.params = e;
    this.applyActive = sV(e);
    this.resetUiToActiveModel(this.getModel(), () => {
      this.updateUiVisibility();
      this.setupOnBtApplyDebounce();
    });
  }
  resetButtonsPanel(e, t) {
    let {
      buttons,
      readOnly
    } = t ?? {};
    let {
      buttons: _buttons,
      readOnly: _readOnly
    } = e;
    if (readOnly === _readOnly && ey(buttons, _buttons)) return;
    let n = _buttons && _buttons.length > 0 && !this.isReadOnly();
    if (this.eButtonsPanel ? (et(this.eButtonsPanel), this.buttonListeners.forEach(e => e()), this.buttonListeners = []) : n && (this.eButtonsPanel = document.createElement("div"), this.eButtonsPanel.classList.add("ag-filter-apply-panel")), !n) {
      this.eButtonsPanel && $$ei11(this.eButtonsPanel);
      return;
    }
    let l = document.createDocumentFragment();
    let a = e => {
      let t;
      let i = e ? this.translate(`${e}Filter`) : void 0;
      switch (e) {
        case "apply":
          t = e => this.onBtApply(!1, !1, e);
          break;
        case "clear":
          t = () => this.onBtClear();
          break;
        case "reset":
          t = () => this.onBtReset();
          break;
        case "cancel":
          t = e => {
            this.onBtCancel(e);
          };
          break;
        default:
          $$eW42(75);
          return;
      }
      let s = eo(`<button
                    type="${"apply" === e ? "submit" : "button"}"
                    data-ref="${e}FilterButton"
                    class="ag-button ag-standard-button ag-filter-apply-panel-button"
                >${i}
                </button>`);
      this.buttonListeners.push(...this.addManagedElementListeners(s, {
        click: t
      }));
      l.append(s);
    };
    _buttons.forEach(e => a(e));
    this.eButtonsPanel.append(l);
    this.getGui().appendChild(this.eButtonsPanel);
  }
  setupOnBtApplyDebounce() {
    let e = sB(this.params, this.defaultDebounceMs);
    let t = eM(this, this.checkApplyDebounce.bind(this), e);
    this.onBtApplyDebounce = () => {
      this.debouncePending = !0;
      t();
    };
  }
  checkApplyDebounce() {
    this.debouncePending && (this.debouncePending = !1, this.onBtApply());
  }
  getModel() {
    return this.appliedModel ?? null;
  }
  setModel(e) {
    return (null != e ? this.setModelIntoUi(e) : this.resetUiToDefaults()).then(() => {
      this.updateUiVisibility();
      this.applyModel("api");
    });
  }
  onBtCancel(e) {
    this.resetUiToActiveModel(this.getModel(), () => {
      this.handleCancelEnd(e);
    });
  }
  handleCancelEnd(e) {
    this.params.closeOnApply && this.close(e);
  }
  resetUiToActiveModel(e, t) {
    let i = () => {
      this.onUiChanged(!1, "prevent");
      t?.();
    };
    null != e ? this.setModelIntoUi(e).then(i) : this.resetUiToDefaults().then(i);
  }
  onBtClear() {
    this.resetUiToDefaults().then(() => this.onUiChanged());
  }
  onBtReset() {
    this.onBtClear();
    this.onBtApply();
  }
  applyModel(e = "api") {
    let t = this.getModelFromUi();
    if (!this.isModelValid(t)) return !1;
    let i = this.appliedModel;
    this.appliedModel = t;
    return !this.areModelsEqual(i, t);
  }
  isModelValid(e) {
    return !0;
  }
  onFormSubmit(e) {
    e.preventDefault();
  }
  onBtApply(e = !1, t = !1, i) {
    i && i.preventDefault();
    this.applyModel(t ? "rowDataUpdated" : "ui") && this.params.filterChangedCallback({
      afterFloatingFilter: e,
      afterDataChange: t,
      source: "columnFilter"
    });
    let {
      closeOnApply
    } = this.params;
    closeOnApply && this.applyActive && !e && !t && this.close(i);
  }
  onNewRowsLoaded() {}
  close(e) {
    let t;
    if (!this.hidePopup) return;
    let i = e && e.key;
    ("Enter" === i || "Space" === i) && (t = {
      keyboardEvent: e
    });
    this.hidePopup(t);
    this.hidePopup = null;
  }
  onUiChanged(e = !1, t) {
    if (this.updateUiVisibility(), this.params.filterModifiedCallback(), this.applyActive && !this.isReadOnly()) {
      let e = this.isModelValid(this.getModelFromUi());
      let t = this.queryForHtmlElement('[data-ref="applyFilterButton"]');
      t && $(t, !e);
    }
    e && !t || "immediately" === t ? this.onBtApply(e) : (this.applyActive || t) && "debounce" !== t || this.onBtApplyDebounce();
  }
  afterGuiAttached(e) {
    e && (this.hidePopup = e.hidePopup);
    this.refreshFilterResizer(e?.container);
  }
  refreshFilterResizer(e) {
    let {
      positionableFeature,
      gos
    } = this;
    positionableFeature && "toolPanel" !== e && ("floatingFilter" === e || "columnFilter" === e ? (positionableFeature.restoreLastSize(), positionableFeature.setResizable(gos.get("enableRtl") ? {
      bottom: !0,
      bottomLeft: !0,
      left: !0
    } : {
      bottom: !0,
      bottomRight: !0,
      right: !0
    })) : (positionableFeature.removeSizeFromEl(), positionableFeature.setResizable(!1)), positionableFeature.constrainSizeToAvailableHeight(!0));
  }
  afterGuiDetached() {
    this.checkApplyDebounce();
    this.positionableFeature?.constrainSizeToAvailableHeight(!1);
  }
  refresh(e) {
    let t = this.params;
    this.params = e;
    this.resetButtonsPanel(e, t);
    return !0;
  }
  destroy() {
    let e = this.getGui();
    e && e.removeEventListener("submit", this.onFormSubmit);
    this.hidePopup = null;
    this.positionableFeature && (this.positionableFeature = this.destroyBean(this.positionableFeature));
    this.appliedModel = null;
    super.destroy();
  }
  translate(e) {
    return this.getLocaleTextFunc()(e, sN[e]);
  }
  getCellValue(e) {
    return this.params.getValue(e);
  }
  getPositionableElement() {
    return this.eFilterBody;
  }
};
var sz = {
  AUTO_HEIGHT: "ag-layout-auto-height",
  NORMAL: "ag-layout-normal",
  PRINT: "ag-layout-print"
};
var sU = class extends $$tM23 {
  constructor(e) {
    super();
    this.view = e;
  }
  postConstruct() {
    this.addManagedPropertyListener("domLayout", this.updateLayoutClasses.bind(this));
    this.updateLayoutClasses();
  }
  updateLayoutClasses() {
    let e = this.gos.get("domLayout");
    let t = {
      autoHeight: "autoHeight" === e,
      normal: "normal" === e,
      print: "print" === e
    };
    let i = t.autoHeight ? sz.AUTO_HEIGHT : t.print ? sz.PRINT : sz.NORMAL;
    this.view.updateLayoutClasses(i, t);
  }
};
var s$ = "Viewport";
var sK = "fakeVScrollComp";
var s_ = ["fakeHScrollComp", "centerHeader", "topCenter", "bottomCenter", "stickyTopCenter", "stickyBottomCenter"];
var sj = class extends $$tM23 {
  constructor(e) {
    super();
    this.lastScrollSource = [null, null];
    this.scrollLeft = -1;
    this.nextScrollTop = -1;
    this.scrollTop = -1;
    this.lastOffsetHeight = -1;
    this.lastScrollTop = -1;
    this.scrollTimer = 0;
    this.needsRefreshedScrollPosition = !0;
    this.eBodyViewport = e;
    this.resetLastHScrollDebounced = eM(this, () => this.lastScrollSource[1] = null, 150);
    this.resetLastVScrollDebounced = eM(this, () => this.lastScrollSource[0] = null, 150);
  }
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc;
    this.animationFrameSvc = e.animationFrameSvc;
    this.visibleCols = e.visibleCols;
  }
  destroy() {
    super.destroy();
    window.clearTimeout(this.scrollTimer);
  }
  postConstruct() {
    this.enableRtl = this.gos.get("enableRtl");
    let e = this.requireUpdatedScrollPosition.bind(this);
    this.addManagedEventListeners({
      displayedColumnsWidthChanged: this.onDisplayedColumnsWidthChanged.bind(this),
      gridSizeChanged: e
    });
    this.addManagedElementListeners(this.eBodyViewport, {
      scroll: e
    });
    this.ctrlsSvc.whenReady(this, e => {
      this.centerRowsCtrl = e.center;
      this.onDisplayedColumnsWidthChanged();
      this.addScrollListener();
    });
  }
  requireUpdatedScrollPosition() {
    this.needsRefreshedScrollPosition = !0;
  }
  addScrollListener() {
    this.addHorizontalScrollListeners();
    this.addVerticalScrollListeners();
  }
  addHorizontalScrollListeners() {
    for (let e of (this.addManagedElementListeners(this.centerRowsCtrl.eViewport, {
      scroll: this.onHScroll.bind(this, s$)
    }), s_)) {
      let t = this.ctrlsSvc.get(e);
      this.registerScrollPartner(t, this.onHScroll.bind(this, e));
    }
  }
  addVerticalScrollListeners() {
    let e = this.ctrlsSvc.get("fakeVScrollComp");
    let t = this.gos.get("debounceVerticalScrollbar");
    let i = t ? eM(this, this.onVScroll.bind(this, s$), 100) : this.onVScroll.bind(this, s$);
    let s = t ? eM(this, this.onVScroll.bind(this, sK), 100) : this.onVScroll.bind(this, sK);
    this.addManagedElementListeners(this.eBodyViewport, {
      scroll: i
    });
    this.registerScrollPartner(e, s);
  }
  registerScrollPartner(e, t) {
    e.onScrollCallback(t);
  }
  onDisplayedColumnsWidthChanged() {
    this.enableRtl && this.horizontallyScrollHeaderCenterAndFloatingCenter();
  }
  horizontallyScrollHeaderCenterAndFloatingCenter(e) {
    null != this.centerRowsCtrl && (void 0 === e && (e = this.centerRowsCtrl.getCenterViewportScrollLeft()), this.setScrollLeftForAllContainersExceptCurrent(Math.abs(e)));
  }
  setScrollLeftForAllContainersExceptCurrent(e) {
    for (let t of [...s_, s$]) this.lastScrollSource[1] !== t && ee(this.getViewportForSource(t), e, this.enableRtl);
  }
  getViewportForSource(e) {
    return e === s$ ? this.centerRowsCtrl.eViewport : this.ctrlsSvc.get(e).eViewport;
  }
  isControllingScroll(e, t) {
    return null == this.lastScrollSource[t] ? (0 === t ? this.lastScrollSource[0] = e : this.lastScrollSource[1] = e, !0) : this.lastScrollSource[t] === e;
  }
  onHScroll(e) {
    if (!this.isControllingScroll(e, 1)) return;
    let {
      scrollLeft
    } = this.centerRowsCtrl.eViewport;
    if (this.shouldBlockScrollUpdate(1, scrollLeft, !0)) return;
    let i = Q(this.getViewportForSource(e), this.enableRtl);
    this.doHorizontalScroll(i);
    this.resetLastHScrollDebounced();
  }
  onVScroll(e) {
    let t;
    if (!this.isControllingScroll(e, 0) || (t = e === s$ ? this.eBodyViewport.scrollTop : this.ctrlsSvc.get("fakeVScrollComp").getScrollPosition(), this.shouldBlockScrollUpdate(0, t, !0))) return;
    let {
      animationFrameSvc
    } = this;
    animationFrameSvc?.setScrollTop(t);
    this.nextScrollTop = t;
    e === s$ ? this.ctrlsSvc.get("fakeVScrollComp").setScrollPosition(t) : this.eBodyViewport.scrollTop = t;
    !animationFrameSvc || this.gos.get("suppressAnimationFrame") ? this.scrollGridIfNeeded(!0) : animationFrameSvc.schedule();
    this.resetLastVScrollDebounced();
  }
  doHorizontalScroll(e) {
    let t = this.ctrlsSvc.get("fakeHScrollComp").getScrollPosition();
    (this.scrollLeft !== e || e !== t) && (this.scrollLeft = e, this.fireScrollEvent(1), this.horizontallyScrollHeaderCenterAndFloatingCenter(e), this.centerRowsCtrl.onHorizontalViewportChanged(!0));
  }
  fireScrollEvent(e) {
    let t = {
      type: "bodyScroll",
      direction: 1 === e ? "horizontal" : "vertical",
      left: this.scrollLeft,
      top: this.scrollTop
    };
    this.eventSvc.dispatchEvent(t);
    window.clearTimeout(this.scrollTimer);
    this.scrollTimer = window.setTimeout(() => {
      this.scrollTimer = 0;
      this.eventSvc.dispatchEvent({
        ...t,
        type: "bodyScrollEnd"
      });
    }, 150);
  }
  shouldBlockScrollUpdate(e, t, i = !1) {
    return (!i || !!H()) && (0 === e ? this.shouldBlockVerticalScroll(t) : this.shouldBlockHorizontalScroll(t));
  }
  shouldBlockVerticalScroll(e) {
    let t = j(this.eBodyViewport);
    let {
      scrollHeight
    } = this.eBodyViewport;
    return e < 0 || e + t > scrollHeight;
  }
  shouldBlockHorizontalScroll(e) {
    let t = this.centerRowsCtrl.getCenterWidth();
    let {
      scrollWidth
    } = this.centerRowsCtrl.eViewport;
    if (this.enableRtl && X()) {
      if (e > 0) return !0;
    } else if (e < 0) return !0;
    return Math.abs(e) + t > scrollWidth;
  }
  redrawRowsAfterScroll() {
    this.fireScrollEvent(0);
  }
  checkScrollLeft() {
    this.scrollLeft !== this.centerRowsCtrl.getCenterViewportScrollLeft() && this.onHScroll(s$);
  }
  scrollGridIfNeeded(e = !1) {
    let t = this.scrollTop != this.nextScrollTop;
    t && (this.scrollTop = this.nextScrollTop, e && this.requireUpdatedScrollPosition(), this.redrawRowsAfterScroll());
    return t;
  }
  setHorizontalScrollPosition(e, t = !1) {
    let i = this.centerRowsCtrl.eViewport.scrollWidth - this.centerRowsCtrl.getCenterWidth();
    !t && this.shouldBlockScrollUpdate(1, e) && (e = this.enableRtl && X() ? e > 0 ? 0 : i : Math.min(Math.max(e, 0), i));
    ee(this.centerRowsCtrl.eViewport, Math.abs(e), this.enableRtl);
    this.doHorizontalScroll(e);
  }
  setVerticalScrollPosition(e) {
    this.requireUpdatedScrollPosition();
    this.eBodyViewport.scrollTop = e;
  }
  getVScrollPosition() {
    if (!this.needsRefreshedScrollPosition) {
      let {
        lastOffsetHeight,
        lastScrollTop
      } = this;
      return {
        top: lastScrollTop,
        bottom: lastScrollTop + lastOffsetHeight
      };
    }
    this.needsRefreshedScrollPosition = !1;
    let {
      scrollTop,
      offsetHeight
    } = this.eBodyViewport;
    this.lastScrollTop = scrollTop;
    this.lastOffsetHeight = offsetHeight;
    return {
      top: scrollTop,
      bottom: scrollTop + offsetHeight
    };
  }
  getApproximateVScollPosition() {
    return this.lastScrollTop >= 0 && this.lastOffsetHeight >= 0 ? {
      top: this.scrollTop,
      bottom: this.scrollTop + this.lastOffsetHeight
    } : this.getVScrollPosition();
  }
  getHScrollPosition() {
    return this.centerRowsCtrl.getHScrollPosition();
  }
  isHorizontalScrollShowing() {
    return this.centerRowsCtrl.isHorizontalScrollShowing();
  }
  scrollHorizontally(e) {
    let t = this.centerRowsCtrl.eViewport.scrollLeft;
    this.setHorizontalScrollPosition(t + e);
    return this.centerRowsCtrl.eViewport.scrollLeft - t;
  }
  scrollToTop() {
    this.eBodyViewport.scrollTop = 0;
  }
  ensureNodeVisible(e, t = null) {
    let {
      rowModel
    } = this.beans;
    let s = rowModel.getRowCount();
    let r = -1;
    for (let t = 0; t < s; t++) {
      let s = rowModel.getRow(t);
      if ("function" == typeof e) {
        if (s && e(s)) {
          r = t;
          break;
        }
      } else if (e === s || e === s.data) {
        r = t;
        break;
      }
    }
    r >= 0 && this.ensureIndexVisible(r, t);
  }
  ensureIndexVisible(e, t) {
    if (ej(this.gos, "print")) return;
    let {
      rowModel
    } = this.beans;
    let s = rowModel.getRowCount();
    if ("number" != typeof e || e < 0 || e >= s) {
      $$eW42(88, {
        index: e
      });
      return;
    }
    let r = this.gos.get("pagination") && !this.gos.get("suppressPaginationPanel");
    let {
      frameworkOverrides,
      pagination,
      pageBounds,
      rowContainerHeight,
      rowRenderer
    } = this.beans;
    frameworkOverrides.wrapIncoming(() => {
      let s;
      r || pagination?.goToPageWithIndex(e);
      let o = this.ctrlsSvc.getGridBodyCtrl();
      let h = o.stickyTopHeight;
      let u = o.stickyBottomHeight;
      let c = rowModel.getRow(e);
      do {
        let e = c.rowTop;
        let i = c.rowHeight;
        let r = pageBounds.getPixelOffset();
        let o = c.rowTop - r;
        let n = o + c.rowHeight;
        let g = this.getVScrollPosition();
        let p = rowContainerHeight.divStretchOffset;
        let m = g.top + p;
        let f = g.bottom + p;
        let C = f - m;
        let w = rowContainerHeight.getScrollPositionForPixel(o);
        let v = rowContainerHeight.getScrollPositionForPixel(n - C);
        let b = Math.min((w + v) / 2, o);
        let y = m + h > o;
        let S = f - u < n;
        let R = null;
        "top" === t ? R = w : "bottom" === t ? R = v : "middle" === t ? R = b : y ? R = w - h : S && (R = v + u);
        null !== R && (this.setVerticalScrollPosition(R), rowRenderer.redraw({
          afterScroll: !0
        }));
        s = e !== c.rowTop || i !== c.rowHeight;
      } while (s);
      this.animationFrameSvc?.flushAllFrames();
    });
  }
  ensureColumnVisible(e, t = "auto") {
    let {
      colModel,
      frameworkOverrides
    } = this.beans;
    let r = colModel.getCol(e);
    if (!r || r.isPinned() || !this.visibleCols.isColDisplayed(r)) return;
    let o = this.getPositionedHorizontalScroll(r, t);
    frameworkOverrides.wrapIncoming(() => {
      null !== o && this.centerRowsCtrl.setCenterViewportScrollLeft(o);
      this.centerRowsCtrl.onHorizontalViewportChanged();
      this.animationFrameSvc?.flushAllFrames();
    });
  }
  getPositionedHorizontalScroll(e, t) {
    let {
      columnBeforeStart,
      columnAfterEnd
    } = this.isColumnOutsideViewport(e);
    let r = this.centerRowsCtrl.getCenterWidth() < e.getActualWidth();
    let o = this.centerRowsCtrl.getCenterWidth();
    let n = this.enableRtl;
    let l = (n ? columnBeforeStart : columnAfterEnd) || r;
    let a = n ? columnAfterEnd : columnBeforeStart;
    "auto" !== t && (l = "start" === t, a = "end" === t);
    let d = "middle" === t;
    if (l || a || d) {
      let {
        colLeft,
        colMiddle,
        colRight
      } = this.getColumnBounds(e);
      return d ? colMiddle - o / 2 : l ? n ? colRight : colLeft : n ? colLeft - o : colRight - o;
    }
    return null;
  }
  isColumnOutsideViewport(e) {
    let {
      start,
      end
    } = this.getViewportBounds();
    let {
      colLeft,
      colRight
    } = this.getColumnBounds(e);
    let o = this.enableRtl;
    return {
      columnBeforeStart: o ? start > colRight : end < colRight,
      columnAfterEnd: o ? end < colLeft : start > colLeft
    };
  }
  getColumnBounds(e) {
    let t = this.enableRtl;
    let i = this.visibleCols.bodyWidth;
    let s = e.getActualWidth();
    let r = e.getLeft();
    let o = t ? -1 : 1;
    let n = t ? i - r : r;
    return {
      colLeft: n,
      colMiddle: n + s / 2 * o,
      colRight: n + s * o
    };
  }
  getViewportBounds() {
    let e = this.centerRowsCtrl.getCenterWidth();
    let t = this.centerRowsCtrl.getCenterViewportScrollLeft();
    return {
      start: t,
      end: e + t,
      width: e
    };
  }
};
var sq = class extends $$tM23 {
  constructor(e, t = !1) {
    super();
    this.callback = e;
    this.addSpacer = t;
  }
  postConstruct() {
    let e = this.setWidth.bind(this);
    this.addManagedPropertyListener("domLayout", e);
    this.addManagedEventListeners({
      columnContainerWidthChanged: e,
      displayedColumnsChanged: e,
      leftPinnedWidthChanged: e
    });
    this.addSpacer && this.addManagedEventListeners({
      rightPinnedWidthChanged: e,
      scrollVisibilityChanged: e,
      scrollbarWidthChanged: e
    });
    this.setWidth();
  }
  setWidth() {
    let e;
    let t = ej(this.gos, "print");
    let {
      visibleCols,
      scrollVisibleSvc
    } = this.beans;
    let r = visibleCols.bodyWidth;
    let o = visibleCols.getColsLeftWidth();
    let n = visibleCols.getDisplayedColumnsRightWidth();
    t ? e = r + o + n : (e = r, this.addSpacer && 0 === (this.gos.get("enableRtl") ? o : n) && scrollVisibleSvc.verticalScrollShowing && (e += scrollVisibleSvc.getScrollbarWidth()));
    this.callback(e);
  }
};
var sY = class extends $$tM23 {
  constructor(e) {
    super();
    this.centerContainerCtrl = e;
  }
  wireBeans(e) {
    this.scrollVisibleSvc = e.scrollVisibleSvc;
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, e => {
      this.gridBodyCtrl = e.gridBodyCtrl;
      this.listenForResize();
    });
    this.addManagedEventListeners({
      scrollbarWidthChanged: this.onScrollbarWidthChanged.bind(this)
    });
    this.addManagedPropertyListeners(["alwaysShowHorizontalScroll", "alwaysShowVerticalScroll"], () => {
      this.checkViewportAndScrolls();
    });
  }
  listenForResize() {
    let {
      beans,
      centerContainerCtrl,
      gridBodyCtrl
    } = this;
    let s = () => {
      i3(beans, () => {
        this.onCenterViewportResized();
      });
    };
    centerContainerCtrl.registerViewportResizeListener(s);
    gridBodyCtrl.registerBodyViewportResizeListener(s);
  }
  onScrollbarWidthChanged() {
    this.checkViewportAndScrolls();
  }
  onCenterViewportResized() {
    if (this.scrollVisibleSvc.updateScrollGap(), this.centerContainerCtrl.isViewportInTheDOMTree()) {
      let {
        pinnedCols,
        colFlex
      } = this.beans;
      pinnedCols?.keepPinnedColumnsNarrowerThanViewport();
      this.checkViewportAndScrolls();
      let i = this.centerContainerCtrl.getCenterWidth();
      i !== this.centerWidth && (this.centerWidth = i, colFlex?.refreshFlexedColumns({
        viewportWidth: this.centerWidth,
        updateBodyWidths: !0,
        fireResizedEvent: !0
      }));
    } else this.bodyHeight = 0;
  }
  checkViewportAndScrolls() {
    this.updateScrollVisibleService();
    this.checkBodyHeight();
    this.onHorizontalViewportChanged();
    this.gridBodyCtrl.scrollFeature.checkScrollLeft();
  }
  getBodyHeight() {
    return this.bodyHeight;
  }
  checkBodyHeight() {
    let e = j(this.gridBodyCtrl.eBodyViewport);
    this.bodyHeight !== e && (this.bodyHeight = e, this.eventSvc.dispatchEvent({
      type: "bodyHeightChanged"
    }));
  }
  updateScrollVisibleService() {
    this.updateScrollVisibleServiceImpl();
    setTimeout(this.updateScrollVisibleServiceImpl.bind(this), 500);
  }
  updateScrollVisibleServiceImpl() {
    let e = {
      horizontalScrollShowing: this.centerContainerCtrl.isHorizontalScrollShowing(),
      verticalScrollShowing: this.gridBodyCtrl.isVerticalScrollShowing()
    };
    this.scrollVisibleSvc.setScrollsVisible(e);
  }
  onHorizontalViewportChanged() {
    let e = this.centerContainerCtrl.getCenterWidth();
    let t = this.centerContainerCtrl.getViewportScrollLeft();
    this.beans.colViewport.setScrollPosition(e, t);
  }
};
function sJ(e, t, i, s, r, o) {
  if (null == i && null == t) return;
  let n = {};
  let l = {};
  let a = (e, t) => {
    e.split(" ").forEach(e => {
      "" != e.trim() && t(e);
    });
  };
  if (i) {
    let t = Object.keys(i);
    for (let r = 0; r < t.length; r++) {
      let o;
      let d = t[r];
      let h = i[d];
      "string" == typeof h ? o = !e || e.evaluate(h, s) : "function" == typeof h && (o = h(s));
      a(d, e => {
        o ? n[e] = !0 : l[e] = !0;
      });
    }
  }
  t && o && Object.keys(t).forEach(e => a(e, e => {
    n[e] || (l[e] = !0);
  }));
  o && Object.keys(l).forEach(o);
  Object.keys(n).forEach(r);
}
function sZ(e) {
  if (e.group) return e.level;
  let t = e.parent;
  return t ? t.level + 1 : 0;
}
var sX = 0;
var sQ = "renderedRow";
var s0 = class extends $$tM23 {
  constructor(e, t, i, s, r) {
    super();
    this.rowNode = e;
    this.useAnimationFrameForCreate = s;
    this.printLayout = r;
    this.allRowGuis = [];
    this.active = !0;
    this.centerCellCtrls = {
      list: [],
      map: {}
    };
    this.leftCellCtrls = {
      list: [],
      map: {}
    };
    this.rightCellCtrls = {
      list: [],
      map: {}
    };
    this.slideInAnimation = {
      left: !1,
      center: !1,
      right: !1,
      fullWidth: !1
    };
    this.fadeInAnimation = {
      left: !1,
      center: !1,
      right: !1,
      fullWidth: !1
    };
    this.rowDragComps = [];
    this.lastMouseDownOnDragger = !1;
    this.emptyStyle = {};
    this.updateColumnListsPending = !1;
    this.rowId = null;
    this.businessKey = null;
    this.beans = t;
    this.gos = t.gos;
    this.paginationPage = t.pagination?.getCurrentPage() ?? 0;
    this.suppressRowTransform = this.gos.get("suppressRowTransform");
    this.instanceId = e.id + "-" + sX++;
    this.rowId = $$tN25(e.id);
    this.initRowBusinessKey();
    this.rowFocused = t.focusSvc.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned);
    this.rowLevel = sZ(this.rowNode);
    this.setRowType();
    this.setAnimateFlags(i);
    this.rowStyles = this.processStylesFromGridOptions();
    this.addListeners();
  }
  initRowBusinessKey() {
    this.businessKeyForNodeFunc = this.gos.get("getBusinessKeyForNode");
    this.updateRowBusinessKey();
  }
  updateRowBusinessKey() {
    if ("function" != typeof this.businessKeyForNodeFunc) return;
    let e = this.businessKeyForNodeFunc(this.rowNode);
    this.businessKey = $$tN25(e);
  }
  updateGui(e, t) {
    "left" === e ? this.leftGui = t : "right" === e ? this.rightGui = t : "fullWidth" === e ? this.fullWidthGui = t : this.centerGui = t;
  }
  setComp(e, t, i, s) {
    let r = {
      rowComp: e,
      element: t,
      containerType: i,
      compBean: s = iv(this, this.beans.context, s)
    };
    this.allRowGuis.push(r);
    this.updateGui(i, r);
    this.initialiseRowComp(r);
    "FullWidthLoading" === this.rowType || this.rowNode.stub || this.rowNode.rowPinned || this.beans.rowRenderer.dispatchFirstDataRenderedEvent();
  }
  unsetComp(e) {
    this.allRowGuis = this.allRowGuis.filter(t => t.containerType !== e);
    this.updateGui(e, void 0);
  }
  isCacheable() {
    return "FullWidthDetail" === this.rowType && this.gos.get("keepDetailRows");
  }
  setCached(e) {
    let t = e ? "none" : "";
    this.allRowGuis.forEach(e => e.element.style.display = t);
  }
  initialiseRowComp(e) {
    let t = this.gos;
    this.onSuppressCellFocusChanged(this.beans.gos.get("suppressCellFocus"));
    this.listenOnDomOrder(e);
    this.onRowHeightChanged(e);
    this.updateRowIndexes(e);
    this.setFocusedClasses(e);
    this.setStylesFromGridOptions(!1, e);
    eq(t) && this.rowNode.selectable && this.onRowSelected(e);
    this.updateColumnLists(!this.useAnimationFrameForCreate);
    let i = e.rowComp;
    this.getInitialRowClasses(e.containerType).forEach(e => i.addOrRemoveCssClass(e, !0));
    this.executeSlideAndFadeAnimations(e);
    this.rowNode.group && D(e.element, !0 == this.rowNode.expanded);
    this.setRowCompRowId(i);
    this.setRowCompRowBusinessKey(i);
    e0(t, e.element, sQ, this);
    e.compBean.addDestroyFunc(() => e0(t, e.element, sQ, null));
    this.useAnimationFrameForCreate ? this.beans.animationFrameSvc.createTask(this.addHoverFunctionality.bind(this, e), this.rowNode.rowIndex, "createTasksP2") : this.addHoverFunctionality(e);
    this.isFullWidth() && this.setupFullWidth(e);
    t.get("rowDragEntireRow") && this.addRowDraggerToRow(e);
    this.useAnimationFrameForCreate && this.beans.animationFrameSvc.addDestroyTask(() => {
      this.isAlive() && e.rowComp.addOrRemoveCssClass("ag-after-created", !0);
    });
    this.executeProcessRowPostCreateFunc();
  }
  setRowCompRowBusinessKey(e) {
    null != this.businessKey && e.setRowBusinessKey(this.businessKey);
  }
  setRowCompRowId(e) {
    let t = $$tN25(this.rowNode.id);
    this.rowId = t;
    null != t && e.setRowId(t);
  }
  executeSlideAndFadeAnimations(e) {
    let {
      containerType
    } = e;
    this.slideInAnimation[containerType] && (ek(() => {
      this.onTopChanged();
    }), this.slideInAnimation[containerType] = !1);
    this.fadeInAnimation[containerType] && (ek(() => {
      e.rowComp.addOrRemoveCssClass("ag-opacity-zero", !1);
    }), this.fadeInAnimation[containerType] = !1);
  }
  addRowDraggerToRow(e) {
    let t = this.beans.rowDragSvc?.createRowDragCompForRow(this.rowNode, e.element);
    if (!t) return;
    let i = this.createBean(t, this.beans.context);
    this.rowDragComps.push(i);
    e.compBean.addDestroyFunc(() => {
      this.rowDragComps = this.rowDragComps.filter(e => e !== i);
      this.destroyBean(i, this.beans.context);
    });
  }
  setupFullWidth(e) {
    let t = this.getPinnedForContainer(e.containerType);
    let i = this.createFullWidthCompDetails(e.element, t);
    e.rowComp.showFullWidth(i);
  }
  getFullWidthCellRenderers() {
    return this.gos.get("embedFullWidthRows") ? this.allRowGuis.map(e => e?.rowComp?.getFullWidthCellRenderer()) : [this.fullWidthGui?.rowComp?.getFullWidthCellRenderer()];
  }
  executeProcessRowPostCreateFunc() {
    let e = this.gos.getCallback("processRowPostCreate");
    e && this.areAllContainersReady() && e({
      eRow: this.centerGui.element,
      ePinnedLeftRow: this.leftGui ? this.leftGui.element : void 0,
      ePinnedRightRow: this.rightGui ? this.rightGui.element : void 0,
      node: this.rowNode,
      rowIndex: this.rowNode.rowIndex,
      addRenderedRowListener: this.addEventListener.bind(this)
    });
  }
  areAllContainersReady() {
    let {
      leftGui,
      centerGui,
      rightGui,
      beans: {
        visibleCols
      }
    } = this;
    let r = !!leftGui || !visibleCols.isPinningLeft();
    let o = !!rightGui || !visibleCols.isPinningRight();
    return r && !!centerGui && o;
  }
  isNodeFullWidthCell() {
    if (this.rowNode.detail) return !0;
    let e = this.beans.gos.getCallback("isFullWidthRow");
    return !!e && e({
      rowNode: this.rowNode
    });
  }
  setRowType() {
    let e = this.rowNode.stub && !this.gos.get("suppressServerSideFullWidthLoadingRow") && !this.gos.get("groupHideOpenParents");
    let t = this.isNodeFullWidthCell();
    let i = this.gos.get("masterDetail") && this.rowNode.detail;
    let s = this.beans.colModel.isPivotMode();
    let r = !!this.rowNode.group && !this.rowNode.footer && tt(this.gos, s);
    e ? this.rowType = "FullWidthLoading" : i ? this.rowType = "FullWidthDetail" : t ? this.rowType = "FullWidth" : r ? this.rowType = "FullWidthGroup" : this.rowType = "Normal";
  }
  updateColumnLists(e = !1, t = !1) {
    if (this.isFullWidth()) return;
    let {
      animationFrameSvc
    } = this.beans;
    if (!animationFrameSvc || e || this.gos.get("suppressAnimationFrame") || this.printLayout) {
      this.updateColumnListsImpl(t);
      return;
    }
    this.updateColumnListsPending || (animationFrameSvc.createTask(() => {
      this.active && this.updateColumnListsImpl(!0);
    }, this.rowNode.rowIndex, "createTasksP1"), this.updateColumnListsPending = !0);
  }
  getNewCellCtrl(e) {
    if (!this.beans.rowSpanSvc?.isCellSpanning(e, this.rowNode)) return new sc(e, this.rowNode, this.beans, this);
  }
  shouldRecreateCellCtrl(e) {
    return !!this.beans.rowSpanSvc?.isCellSpanning(e.column, this.rowNode);
  }
  createCellCtrls(e, t, i = null) {
    let s = {
      list: [],
      map: {}
    };
    let r = (e, t, i) => {
      null != i ? s.list.splice(i, 0, t) : s.list.push(t);
      s.map[e] = t;
    };
    let o = [];
    for (let i of t) {
      let t = i.getInstanceId();
      let s = e.map[t];
      s && this.shouldRecreateCellCtrl(s) && (s.destroy(), s = void 0);
      s || (s = this.getNewCellCtrl(i));
      s && r(t, s);
    }
    for (let t of e.list) {
      let e = t.column.getInstanceId();
      null == s.map[e] && (this.isCellEligibleToBeRemoved(t, i) ? t.destroy() : o.push([e, t]));
    }
    if (o.length) for (let [e, t] of o) {
      let i = s.list.findIndex(e => e.column.getLeft() > t.column.getLeft());
      r(e, t, -1 === i ? void 0 : Math.max(i - 1, 0));
    }
    return s;
  }
  updateColumnListsImpl(e) {
    this.updateColumnListsPending = !1;
    this.createAllCellCtrls();
    this.setCellCtrls(e);
  }
  setCellCtrls(e) {
    this.allRowGuis.forEach(t => {
      let i = this.getCellCtrlsForContainer(t.containerType);
      t.rowComp.setCellCtrls(i, e);
    });
  }
  getCellCtrlsForContainer(e) {
    switch (e) {
      case "left":
        return this.leftCellCtrls.list;
      case "right":
        return this.rightCellCtrls.list;
      case "fullWidth":
        return [];
      case "center":
        return this.centerCellCtrls.list;
    }
  }
  createAllCellCtrls() {
    let e = this.beans.colViewport;
    let t = this.beans.visibleCols;
    if (this.printLayout) {
      this.centerCellCtrls = this.createCellCtrls(this.centerCellCtrls, t.allCols);
      this.leftCellCtrls = {
        list: [],
        map: {}
      };
      this.rightCellCtrls = {
        list: [],
        map: {}
      };
    } else {
      let i = e.getColsWithinViewport(this.rowNode);
      this.centerCellCtrls = this.createCellCtrls(this.centerCellCtrls, i);
      let s = t.getLeftColsForRow(this.rowNode);
      this.leftCellCtrls = this.createCellCtrls(this.leftCellCtrls, s, "left");
      let r = t.getRightColsForRow(this.rowNode);
      this.rightCellCtrls = this.createCellCtrls(this.rightCellCtrls, r, "right");
    }
  }
  isCellEligibleToBeRemoved(e, t) {
    let {
      column
    } = e;
    if (column.getPinned() != t) return !0;
    let {
      editing,
      cellPosition
    } = e;
    let {
      focusSvc,
      visibleCols
    } = this.beans;
    let l = focusSvc.isCellFocused(cellPosition);
    return !editing && !l || !(visibleCols.allCols.indexOf(column) >= 0);
  }
  getDomOrder() {
    return this.gos.get("ensureDomOrder") || ej(this.gos, "print");
  }
  listenOnDomOrder(e) {
    e.compBean.addManagedPropertyListeners(["domLayout", "ensureDomOrder"], () => {
      e.rowComp.setDomOrder(this.getDomOrder());
    });
  }
  setAnimateFlags(e) {
    if (this.rowNode.sticky || !e) return;
    let t = ew(this.rowNode.oldRowTop);
    let {
      visibleCols
    } = this.beans;
    let s = visibleCols.isPinningLeft();
    let r = visibleCols.isPinningRight();
    if (t) {
      let {
        slideInAnimation
      } = this;
      if (this.isFullWidth() && !this.gos.get("embedFullWidthRows")) {
        slideInAnimation.fullWidth = !0;
        return;
      }
      slideInAnimation.center = !0;
      slideInAnimation.left = s;
      slideInAnimation.right = r;
    } else {
      let {
        fadeInAnimation
      } = this;
      if (this.isFullWidth() && !this.gos.get("embedFullWidthRows")) {
        fadeInAnimation.fullWidth = !0;
        return;
      }
      fadeInAnimation.center = !0;
      fadeInAnimation.left = s;
      fadeInAnimation.right = r;
    }
  }
  isFullWidth() {
    return "Normal" !== this.rowType;
  }
  refreshFullWidth() {
    let e = (e, t) => !e || e.rowComp.refreshFullWidth(() => this.createFullWidthCompDetails(e.element, t).params);
    let t = e(this.fullWidthGui, null);
    let i = e(this.centerGui, null);
    let s = e(this.leftGui, "left");
    let r = e(this.rightGui, "right");
    return t && i && s && r;
  }
  addListeners() {
    this.addManagedListeners(this.rowNode, {
      heightChanged: () => this.onRowHeightChanged(),
      rowSelected: () => this.onRowSelected(),
      rowIndexChanged: this.onRowIndexChanged.bind(this),
      topChanged: this.onTopChanged.bind(this),
      ...(this.beans.expansionSvc?.getRowExpandedListeners(this) ?? {})
    });
    this.rowNode.detail && this.addManagedListeners(this.rowNode.parent, {
      dataChanged: this.onRowNodeDataChanged.bind(this)
    });
    this.addManagedListeners(this.rowNode, {
      dataChanged: this.onRowNodeDataChanged.bind(this),
      cellChanged: this.postProcessCss.bind(this),
      rowHighlightChanged: this.onRowNodeHighlightChanged.bind(this),
      draggingChanged: this.postProcessRowDragging.bind(this),
      uiLevelChanged: this.onUiLevelChanged.bind(this)
    });
    this.addManagedListeners(this.beans.eventSvc, {
      paginationPixelOffsetChanged: this.onPaginationPixelOffsetChanged.bind(this),
      heightScaleChanged: this.onTopChanged.bind(this),
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this),
      virtualColumnsChanged: this.onVirtualColumnsChanged.bind(this),
      cellFocused: this.onCellFocusChanged.bind(this),
      cellFocusCleared: this.onCellFocusChanged.bind(this),
      paginationChanged: this.onPaginationChanged.bind(this),
      modelUpdated: this.refreshFirstAndLastRowStyles.bind(this),
      columnMoved: () => this.updateColumnLists()
    });
    this.beans.rowSpanSvc && this.addManagedListeners(this.beans.rowSpanSvc, {
      spannedCellsUpdated: ({
        pinned: e
      }) => {
        (!e || this.rowNode.rowPinned) && this.updateColumnLists();
      }
    });
    this.addDestroyFunc(() => {
      this.rowDragComps = this.destroyBeans(this.rowDragComps, this.beans.context);
      this.tooltipFeature = this.destroyBean(this.tooltipFeature, this.beans.context);
    });
    this.addManagedPropertyListeners(["rowStyle", "getRowStyle", "rowClass", "getRowClass", "rowClassRules"], this.postProcessCss.bind(this));
    this.addManagedPropertyListener("rowDragEntireRow", () => {
      if (this.gos.get("rowDragEntireRow")) {
        this.allRowGuis.forEach(e => {
          this.addRowDraggerToRow(e);
        });
        return;
      }
      this.rowDragComps = this.destroyBeans(this.rowDragComps, this.beans.context);
    });
    this.addListenersForCellComps();
  }
  addListenersForCellComps() {
    this.addManagedListeners(this.rowNode, {
      rowIndexChanged: () => {
        this.getAllCellCtrls().forEach(e => e.onRowIndexChanged());
      },
      cellChanged: e => {
        this.getAllCellCtrls().forEach(t => t.onCellChanged(e));
      }
    });
  }
  onRowNodeDataChanged(e) {
    if (this.isFullWidth() !== !!this.isNodeFullWidthCell()) {
      this.beans.rowRenderer.redrawRow(this.rowNode);
      return;
    }
    if (this.isFullWidth()) {
      this.refreshFullWidth() || this.beans.rowRenderer.redrawRow(this.rowNode);
      return;
    }
    this.getAllCellCtrls().forEach(t => t.refreshCell({
      suppressFlash: !e.update,
      newData: !e.update
    }));
    this.allRowGuis.forEach(e => {
      this.setRowCompRowId(e.rowComp);
      this.updateRowBusinessKey();
      this.setRowCompRowBusinessKey(e.rowComp);
    });
    this.onRowSelected();
    this.postProcessCss();
  }
  postProcessCss() {
    this.setStylesFromGridOptions(!0);
    this.postProcessClassesFromGridOptions();
    this.postProcessRowClassRules();
    this.postProcessRowDragging();
  }
  onRowNodeHighlightChanged() {
    let e = this.rowNode.highlighted;
    this.allRowGuis.forEach(t => {
      t.rowComp.addOrRemoveCssClass("ag-row-highlight-above", "Above" === e);
      t.rowComp.addOrRemoveCssClass("ag-row-highlight-below", "Below" === e);
    });
  }
  postProcessRowDragging() {
    let e = this.rowNode.dragging;
    this.allRowGuis.forEach(t => t.rowComp.addOrRemoveCssClass("ag-row-dragging", e));
  }
  verifyCells() {
    this.onDisplayedColumnsChanged();
  }
  onDisplayedColumnsChanged() {
    this.updateColumnLists(!0);
    this.beans.rowAutoHeight?.requestCheckAutoHeight();
  }
  onVirtualColumnsChanged() {
    this.updateColumnLists(!1, !0);
  }
  getRowPosition() {
    return {
      rowPinned: eC(this.rowNode.rowPinned),
      rowIndex: this.rowNode.rowIndex
    };
  }
  onKeyboardNavigate(e) {
    let t = this.findFullWidthInfoForEvent(e);
    if (!t) return;
    let {
      rowGui,
      column
    } = t;
    if (rowGui.element !== e.target) return;
    let r = this.rowNode;
    let {
      focusSvc,
      navigation
    } = this.beans;
    let l = focusSvc.getFocusedCell();
    let a = {
      rowIndex: r.rowIndex,
      rowPinned: r.rowPinned,
      column: l?.column ?? column
    };
    navigation?.navigateToNextCell(e, e.key, a, !0);
    e.preventDefault();
  }
  onTabKeyDown(e) {
    if (e.defaultPrevented || tE(e)) return;
    let t = this.allRowGuis.find(t => t.element.contains(e.target));
    let i = t ? t.element : null;
    let s = i === e.target;
    let r = e3(this.beans);
    let o = !1;
    i && r && (o = i.contains(r) && r.classList.contains("ag-cell"));
    let n = null;
    s || o || (n = si(this.beans, i, !1, e.shiftKey));
    (this.isFullWidth() && s || !n) && this.beans.navigation?.onTabKeyDown(this, e);
  }
  getFullWidthElement() {
    return this.fullWidthGui ? this.fullWidthGui.element : null;
  }
  getRowYPosition() {
    let e = this.allRowGuis.find(e => er(e.element))?.element;
    return e ? e.getBoundingClientRect().top : 0;
  }
  onSuppressCellFocusChanged(e) {
    let t = this.isFullWidth() && e ? void 0 : -1;
    this.allRowGuis.forEach(e => {
      ep(e.element, "tabindex", t);
    });
  }
  onFullWidthRowFocused(e) {
    let t = this.rowNode;
    let i = !!e && this.isFullWidth() && e.rowIndex === t.rowIndex && e.rowPinned == t.rowPinned;
    let s = this.fullWidthGui ? this.fullWidthGui.element : this.centerGui?.element;
    s && (s.classList.toggle("ag-full-width-focus", i), i && e?.forceBrowserFocus && s.focus({
      preventScroll: !0
    }));
  }
  recreateCell(e) {
    this.centerCellCtrls = this.removeCellCtrl(this.centerCellCtrls, e);
    this.leftCellCtrls = this.removeCellCtrl(this.leftCellCtrls, e);
    this.rightCellCtrls = this.removeCellCtrl(this.rightCellCtrls, e);
    e.destroy();
    this.updateColumnLists();
  }
  removeCellCtrl(e, t) {
    let i = {
      list: [],
      map: {}
    };
    e.list.forEach(e => {
      e !== t && (i.list.push(e), i.map[e.column.getInstanceId()] = e);
    });
    return i;
  }
  onMouseEvent(e, t) {
    switch (e) {
      case "dblclick":
        this.onRowDblClick(t);
        break;
      case "click":
        this.onRowClick(t);
        break;
      case "touchstart":
      case "mousedown":
        this.onRowMouseDown(t);
    }
  }
  createRowEvent(e, t) {
    let {
      rowNode
    } = this;
    return ty(this.gos, {
      type: e,
      node: rowNode,
      data: rowNode.data,
      rowIndex: rowNode.rowIndex,
      rowPinned: rowNode.rowPinned,
      event: t
    });
  }
  createRowEventWithSource(e, t) {
    let i = this.createRowEvent(e, t);
    i.source = this;
    return i;
  }
  onRowDblClick(e) {
    tE(e) || this.beans.eventSvc.dispatchEvent(this.createRowEventWithSource("rowDoubleClicked", e));
  }
  findFullWidthInfoForEvent(e) {
    if (!e) return;
    let t = this.findFullWidthRowGui(e.target);
    let i = this.getColumnForFullWidth(t);
    if (t && i) return {
      rowGui: t,
      column: i
    };
  }
  findFullWidthRowGui(e) {
    return this.allRowGuis.find(t => t.element.contains(e));
  }
  getColumnForFullWidth(e) {
    let {
      visibleCols
    } = this.beans;
    switch (e?.containerType) {
      case "center":
        return visibleCols.centerCols[0];
      case "left":
        return visibleCols.leftCols[0];
      case "right":
        return visibleCols.rightCols[0];
      default:
        return visibleCols.allCols[0];
    }
  }
  onRowMouseDown(e) {
    if (this.lastMouseDownOnDragger = K(e.target, "ag-row-drag", 3), !this.isFullWidth()) return;
    let t = this.rowNode;
    let {
      rangeSvc,
      focusSvc
    } = this.beans;
    rangeSvc?.removeAllCellRanges();
    let r = this.findFullWidthInfoForEvent(e);
    if (!r) return;
    let {
      rowGui,
      column
    } = r;
    let l = rowGui.element;
    let a = e.target;
    let d = e.defaultPrevented || I();
    l && l.contains(a) && z(a) && (d = !1);
    focusSvc.setFocusedCell({
      rowIndex: t.rowIndex,
      column,
      rowPinned: t.rowPinned,
      forceBrowserFocus: d
    });
  }
  onRowClick(e) {
    if (tE(e) || this.lastMouseDownOnDragger) return;
    let {
      eventSvc,
      selectionSvc
    } = this.beans;
    eventSvc.dispatchEvent(this.createRowEventWithSource("rowClicked", e));
    selectionSvc?.handleSelectionEvent(e, this.rowNode, "rowClicked");
  }
  setupDetailRowAutoHeight(e) {
    "FullWidthDetail" === this.rowType && this.beans.masterDetailSvc?.setupDetailRowAutoHeight(this, e);
  }
  createFullWidthCompDetails(e, t) {
    let {
      gos,
      rowNode
    } = this;
    let r = ty(gos, {
      fullWidth: !0,
      data: rowNode.data,
      node: rowNode,
      value: rowNode.key,
      valueFormatted: rowNode.key,
      eGridCell: e,
      eParentOfValue: e,
      pinned: t,
      addRenderedRowListener: this.addEventListener.bind(this),
      registerRowDragger: (e, t, i, s) => this.addFullWidthRowDragging(e, t, i, s),
      setTooltip: (e, t) => {
        gos.assertModuleRegistered("Tooltip", 3);
        this.refreshRowTooltip(e, t);
      }
    });
    let o = this.beans.userCompFactory;
    switch (this.rowType) {
      case "FullWidthDetail":
        return o.getCompDetailsFromGridOptions(iU, "agDetailCellRenderer", r, !0);
      case "FullWidthGroup":
        return o.getCompDetailsFromGridOptions(iz, "agGroupRowRenderer", r, !0);
      case "FullWidthLoading":
        return o.getCompDetailsFromGridOptions(iW, "agLoadingCellRenderer", r, !0);
      default:
        return o.getCompDetailsFromGridOptions(iV, void 0, r, !0);
    }
  }
  refreshRowTooltip(e, t) {
    this.fullWidthGui && (this.tooltipFeature = this.beans.tooltipSvc?.refreshRowTooltip(this.tooltipFeature, this, e, t));
  }
  addFullWidthRowDragging(e, t, i = "", s) {
    let {
      rowDragSvc,
      context
    } = this.beans;
    if (!rowDragSvc || !this.isFullWidth()) return;
    let n = rowDragSvc.createRowDragComp(() => i, this.rowNode, void 0, e, t, s);
    this.createBean(n, context);
    this.addDestroyFunc(() => {
      this.destroyBean(n, context);
    });
  }
  onUiLevelChanged() {
    let e = sZ(this.rowNode);
    if (this.rowLevel != e) {
      let t = "ag-row-level-" + e;
      let i = "ag-row-level-" + this.rowLevel;
      this.allRowGuis.forEach(e => {
        e.rowComp.addOrRemoveCssClass(t, !0);
        e.rowComp.addOrRemoveCssClass(i, !1);
      });
    }
    this.rowLevel = e;
  }
  isFirstRowOnPage() {
    return this.rowNode.rowIndex === this.beans.pageBounds.getFirstRow();
  }
  isLastRowOnPage() {
    return this.rowNode.rowIndex === this.beans.pageBounds.getLastRow();
  }
  refreshFirstAndLastRowStyles() {
    let e = this.isFirstRowOnPage();
    let t = this.isLastRowOnPage();
    this.firstRowOnPage !== e && (this.firstRowOnPage = e, this.allRowGuis.forEach(t => t.rowComp.addOrRemoveCssClass("ag-row-first", e)));
    this.lastRowOnPage !== t && (this.lastRowOnPage = t, this.allRowGuis.forEach(e => e.rowComp.addOrRemoveCssClass("ag-row-last", t)));
  }
  getAllCellCtrls() {
    return 0 === this.leftCellCtrls.list.length && 0 === this.rightCellCtrls.list.length ? this.centerCellCtrls.list : [...this.centerCellCtrls.list, ...this.leftCellCtrls.list, ...this.rightCellCtrls.list];
  }
  postProcessClassesFromGridOptions() {
    let e = [];
    this.beans.rowStyleSvc?.processClassesFromGridOptions(e, this.rowNode);
    e.length && e.forEach(e => {
      this.allRowGuis.forEach(t => t.rowComp.addOrRemoveCssClass(e, !0));
    });
  }
  postProcessRowClassRules() {
    this.beans.rowStyleSvc?.processRowClassRules(this.rowNode, e => {
      this.allRowGuis.forEach(t => t.rowComp.addOrRemoveCssClass(e, !0));
    }, e => {
      this.allRowGuis.forEach(t => t.rowComp.addOrRemoveCssClass(e, !1));
    });
  }
  setStylesFromGridOptions(e, t) {
    e && (this.rowStyles = this.processStylesFromGridOptions());
    this.forEachGui(t, e => e.rowComp.setUserStyles(this.rowStyles));
  }
  getPinnedForContainer(e) {
    return "left" === e || "right" === e ? e : null;
  }
  getInitialRowClasses(e) {
    let t = this.getPinnedForContainer(e);
    let i = this.isFullWidth();
    let {
      rowNode,
      beans
    } = this;
    let o = [];
    o.push("ag-row");
    o.push(this.rowFocused ? "ag-row-focus" : "ag-row-no-focus");
    this.fadeInAnimation[e] && o.push("ag-opacity-zero");
    o.push(rowNode.rowIndex % 2 == 0 ? "ag-row-even" : "ag-row-odd");
    rowNode.isRowPinned() && o.push("ag-row-pinned");
    rowNode.isSelected() && o.push("ag-row-selected");
    rowNode.footer && o.push("ag-row-footer");
    o.push("ag-row-level-" + this.rowLevel);
    rowNode.stub && o.push("ag-row-loading");
    i && o.push("ag-full-width-row");
    beans.expansionSvc?.addExpandedCss(o, rowNode);
    rowNode.dragging && o.push("ag-row-dragging");
    let {
      rowStyleSvc
    } = beans;
    rowStyleSvc && (rowStyleSvc.processClassesFromGridOptions(o, rowNode), rowStyleSvc.preProcessRowClassRules(o, rowNode));
    o.push(this.printLayout ? "ag-row-position-relative" : "ag-row-position-absolute");
    this.isFirstRowOnPage() && o.push("ag-row-first");
    this.isLastRowOnPage() && o.push("ag-row-last");
    i && ("left" === t && o.push("ag-cell-last-left-pinned"), "right" === t && o.push("ag-cell-first-right-pinned"));
    return o;
  }
  processStylesFromGridOptions() {
    return this.beans.rowStyleSvc?.processStylesFromGridOptions(this.rowNode) ?? this.emptyStyle;
  }
  onRowSelected(e) {
    this.beans.selectionSvc?.onRowCtrlSelected(this, e => {
      (e === this.centerGui || e === this.fullWidthGui) && this.announceDescription();
    }, e);
  }
  announceDescription() {
    this.beans.selectionSvc?.announceAriaRowSelection(this.rowNode);
  }
  addHoverFunctionality(e) {
    if (!this.active) return;
    let {
      element,
      compBean
    } = e;
    let {
      rowNode,
      beans,
      gos
    } = this;
    compBean.addManagedListeners(element, {
      mouseenter: () => rowNode.dispatchRowEvent("mouseEnter"),
      mouseleave: () => rowNode.dispatchRowEvent("mouseLeave")
    });
    compBean.addManagedListeners(rowNode, {
      mouseEnter: () => {
        beans.dragSvc?.dragging || gos.get("suppressRowHoverHighlight") || (element.classList.add("ag-row-hover"), rowNode.setHovered(!0));
      },
      mouseLeave: () => {
        this.resetHoveredStatus(element);
      }
    });
  }
  resetHoveredStatus(e) {
    for (let t of e ? [e] : this.allRowGuis.map(e => e.element)) t.classList.remove("ag-row-hover");
    this.rowNode.setHovered(!1);
  }
  roundRowTopToBounds(e) {
    let t = this.beans.ctrlsSvc.getScrollFeature().getApproximateVScollPosition();
    return Math.min(Math.max(this.applyPaginationOffset(t.top, !0) - 100, e), this.applyPaginationOffset(t.bottom, !0) + 100);
  }
  forEachGui(e, t) {
    e ? t(e) : this.allRowGuis.forEach(t);
  }
  onRowHeightChanged(e) {
    if (null == this.rowNode.rowHeight) return;
    let t = this.rowNode.rowHeight;
    let i = this.beans.environment.getDefaultRowHeight();
    let s = eY(this.gos) ? eJ(this.beans, this.rowNode).height : void 0;
    let r = s ? `${Math.min(i, s) - 2}px` : void 0;
    this.forEachGui(e, e => {
      e.element.style.height = `${t}px`;
      r && e.element.style.setProperty("--ag-line-height", r);
    });
  }
  destroyFirstPass(e = !1) {
    this.active = !1;
    let {
      rowNode
    } = this;
    if (!e && e8(this.gos) && !rowNode.sticky) {
      if (null != rowNode.rowTop) {
        let e = this.roundRowTopToBounds(rowNode.rowTop);
        this.setRowTop(e);
      } else this.allRowGuis.forEach(e => e.rowComp.addOrRemoveCssClass("ag-opacity-zero", !0));
    }
    rowNode.setHovered(!1);
    let i = this.createRowEvent("virtualRowRemoved");
    this.dispatchLocalEvent(i);
    this.beans.eventSvc.dispatchEvent(i);
    super.destroy();
  }
  destroySecondPass() {
    this.allRowGuis.length = 0;
    this.beans.editSvc?.stopRowEditing(this);
    let e = e => (e.list.forEach(e => e.destroy()), {
      list: [],
      map: {}
    });
    this.centerCellCtrls = e(this.centerCellCtrls);
    this.leftCellCtrls = e(this.leftCellCtrls);
    this.rightCellCtrls = e(this.rightCellCtrls);
  }
  setFocusedClasses(e) {
    this.forEachGui(e, e => {
      e.rowComp.addOrRemoveCssClass("ag-row-focus", this.rowFocused);
      e.rowComp.addOrRemoveCssClass("ag-row-no-focus", !this.rowFocused);
    });
  }
  onCellFocusChanged() {
    let {
      focusSvc,
      editSvc
    } = this.beans;
    let i = focusSvc.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned);
    i !== this.rowFocused && (this.rowFocused = i, this.setFocusedClasses());
    !i && this.editing && editSvc?.stopRowEditing(this, !1);
  }
  onPaginationChanged() {
    let e = this.beans.pagination?.getCurrentPage() ?? 0;
    this.paginationPage !== e && (this.paginationPage = e, this.onTopChanged());
    this.refreshFirstAndLastRowStyles();
  }
  onTopChanged() {
    this.setRowTop(this.rowNode.rowTop);
  }
  onPaginationPixelOffsetChanged() {
    this.onTopChanged();
  }
  applyPaginationOffset(e, t = !1) {
    return this.rowNode.isRowPinned() || this.rowNode.sticky ? e : e + this.beans.pageBounds.getPixelOffset() * (t ? 1 : -1);
  }
  setRowTop(e) {
    if (!this.printLayout && ew(e)) {
      let t = this.applyPaginationOffset(e);
      let i = this.rowNode.isRowPinned() || this.rowNode.sticky ? t : this.beans.rowContainerHeight.getRealPixelPosition(t);
      let s = `${i}px`;
      this.setRowTopStyle(s);
    }
  }
  getInitialRowTop(e) {
    return this.suppressRowTransform ? this.getInitialRowTopShared(e) : void 0;
  }
  getInitialTransform(e) {
    return this.suppressRowTransform ? void 0 : `translateY(${this.getInitialRowTopShared(e)})`;
  }
  getInitialRowTopShared(e) {
    let t;
    if (this.printLayout) return "";
    let i = this.rowNode;
    if (i.sticky) t = i.stickyRowTop;else {
      let s = this.slideInAnimation[e] ? this.roundRowTopToBounds(i.oldRowTop) : i.rowTop;
      let r = this.applyPaginationOffset(s);
      t = i.isRowPinned() ? r : this.beans.rowContainerHeight.getRealPixelPosition(r);
    }
    return t + "px";
  }
  setRowTopStyle(e) {
    this.allRowGuis.forEach(t => this.suppressRowTransform ? t.rowComp.setTop(e) : t.rowComp.setTransform(`translateY(${e})`));
  }
  getCellCtrl(e, t = !1) {
    let i = null;
    this.getAllCellCtrls().forEach(t => {
      t.column == e && (i = t);
    });
    null != i || t || this.getAllCellCtrls().forEach(t => {
      t.getColSpanningList().indexOf(e) >= 0 && (i = t);
    });
    return i;
  }
  onRowIndexChanged() {
    null != this.rowNode.rowIndex && (this.onCellFocusChanged(), this.updateRowIndexes(), this.postProcessCss());
  }
  updateRowIndexes(e) {
    let t = this.rowNode.getRowIndexString();
    if (null === t) return;
    let i = (this.beans.ctrlsSvc.getHeaderRowContainerCtrl()?.getRowCount() ?? 0) + (this.beans.filterManager?.getHeaderRowCount() ?? 0);
    let s = this.rowNode.rowIndex % 2 == 0;
    let r = i + this.rowNode.rowIndex + 1;
    this.forEachGui(e, e => {
      e.rowComp.setRowIndex(t);
      e.rowComp.addOrRemoveCssClass("ag-row-even", s);
      e.rowComp.addOrRemoveCssClass("ag-row-odd", !s);
      P(e.element, r);
    });
  }
};
function s1(e) {
  return !e.altKey && !e.ctrlKey && !e.metaKey && e.key?.length === 1;
}
function s2(e, t, i, s, r) {
  let o = s ? s.getColDef().suppressKeyboardEvent : void 0;
  if (!o) return !1;
  let n = ty(e, {
    event: t,
    editing: r,
    column: s,
    node: i,
    data: i.data,
    colDef: s.getColDef()
  });
  return !!(o && o(n));
}
var s5 = class extends $$tM23 {
  constructor(e) {
    super();
    this.element = e;
  }
  postConstruct() {
    this.addKeyboardListeners();
    this.addMouseListeners();
    this.beans.touchSvc?.mockRowContextMenu(this);
  }
  addKeyboardListeners() {
    let e = "keydown";
    let t = this.processKeyboardEvent.bind(this, e);
    this.addManagedElementListeners(this.element, {
      [e]: t
    });
  }
  addMouseListeners() {
    ["dblclick", "contextmenu", "mouseover", "mouseout", "click", tF("touchstart") ? "touchstart" : "mousedown"].forEach(e => {
      let t = this.processMouseEvent.bind(this, e);
      this.addManagedElementListeners(this.element, {
        [e]: t
      });
    });
  }
  processMouseEvent(e, t) {
    if (!sm(this.gos, t) || tE(t)) return;
    let {
      cellCtrl,
      rowCtrl
    } = this.getControlsForEventTarget(t.target);
    "contextmenu" === e ? (cellCtrl?.column && cellCtrl.dispatchCellContextMenuEvent(t), this.beans.contextMenuSvc?.handleContextMenuMouseEvent(t, void 0, rowCtrl, cellCtrl)) : (cellCtrl && cellCtrl.onMouseEvent(e, t), rowCtrl && rowCtrl.onMouseEvent(e, t));
  }
  getControlsForEventTarget(e) {
    let {
      gos
    } = this;
    return {
      cellCtrl: tA(gos, e, sh),
      rowCtrl: tA(gos, e, sQ)
    };
  }
  processKeyboardEvent(e, t) {
    let {
      cellCtrl,
      rowCtrl
    } = this.getControlsForEventTarget(t.target);
    !t.defaultPrevented && (cellCtrl ? this.processCellKeyboardEvent(cellCtrl, e, t) : rowCtrl && rowCtrl.isFullWidth() && this.processFullWidthRowKeyboardEvent(rowCtrl, e, t));
  }
  processCellKeyboardEvent(e, t, i) {
    let {
      rowNode,
      column,
      editing
    } = e;
    !s2(this.gos, i, rowNode, column, editing) && "keydown" === t && (!editing && this.beans.navigation?.handlePageScrollingKey(i) || e.onKeyDown(i), this.doGridOperations(i, e.editing), s1(i) && e.processCharacter(i));
    "keydown" === t && this.eventSvc.dispatchEvent(e.createEvent(i, "cellKeyDown"));
  }
  processFullWidthRowKeyboardEvent(e, t, i) {
    let {
      rowNode
    } = e;
    let {
      focusSvc,
      navigation
    } = this.beans;
    let n = focusSvc.getFocusedCell();
    let l = n && n.column;
    if (!s2(this.gos, i, rowNode, l, !1)) {
      let s = i.key;
      if ("keydown" === t) switch (s) {
        case i4.PAGE_HOME:
        case i4.PAGE_END:
        case i4.PAGE_UP:
        case i4.PAGE_DOWN:
          navigation?.handlePageScrollingKey(i, !0);
          break;
        case i4.UP:
        case i4.DOWN:
          e.onKeyboardNavigate(i);
          break;
        case i4.TAB:
          e.onTabKeyDown(i);
      }
    }
    "keydown" === t && this.eventSvc.dispatchEvent(e.createRowEvent("cellKeyDown", i));
  }
  doGridOperations(e, t) {
    if (!e.ctrlKey && !e.metaKey || t || !sm(this.gos, e)) return;
    let i = function (e) {
      let t;
      let {
        keyCode
      } = e;
      switch (keyCode) {
        case 65:
          t = i4.A;
          break;
        case 67:
          t = i4.C;
          break;
        case 86:
          t = i4.V;
          break;
        case 68:
          t = i4.D;
          break;
        case 90:
          t = i4.Z;
          break;
        case 89:
          t = i4.Y;
          break;
        default:
          t = e.code;
      }
      return t;
    }(e);
    let {
      clipboardSvc,
      undoRedo
    } = this.beans;
    return i === i4.A ? this.onCtrlAndA(e) : i === i4.C ? this.onCtrlAndC(clipboardSvc, e) : i === i4.D ? this.onCtrlAndD(clipboardSvc, e) : i === i4.V ? this.onCtrlAndV(clipboardSvc, e) : i === i4.X ? this.onCtrlAndX(clipboardSvc, e) : i === i4.Y ? this.onCtrlAndY(undoRedo) : i === i4.Z ? this.onCtrlAndZ(undoRedo, e) : void 0;
  }
  onCtrlAndA(e) {
    let {
      beans: {
        rowModel,
        rangeSvc,
        selectionSvc
      },
      gos
    } = this;
    rangeSvc && tl(gos) && rowModel.isRowsToRender() ? function (e) {
      let t;
      let i;
      let {
        pinnedRowModel,
        rowModel: _rowModel
      } = e;
      let [o, n] = [pinnedRowModel?.isEmpty("top") ?? !0, pinnedRowModel?.isEmpty("bottom") ?? !0];
      n ? (t = null, i = _rowModel.getRowCount() - 1) : (t = "bottom", i = pinnedRowModel?.getPinnedBottomRowCount() ?? -1);
      let {
        visibleCols,
        rangeSvc: _rangeSvc
      } = e;
      let d = visibleCols.allCols;
      _rangeSvc && d?.length && _rangeSvc.setCellRange({
        rowStartIndex: 0,
        rowStartPinned: o ? null : "top",
        rowEndIndex: i,
        rowEndPinned: t
      });
    }(this.beans) : selectionSvc && selectionSvc?.selectAllRowNodes({
      source: "keyboardSelectAll",
      selectAll: tg(gos)
    });
    e.preventDefault();
  }
  onCtrlAndC(e, t) {
    if (!e || this.gos.get("enableCellTextSelection")) return;
    let {
      cellCtrl,
      rowCtrl
    } = this.getControlsForEventTarget(t.target);
    cellCtrl?.editing || rowCtrl?.editing || (t.preventDefault(), e.copyToClipboard());
  }
  onCtrlAndX(e, t) {
    if (!e || this.gos.get("enableCellTextSelection") || this.gos.get("suppressCutToClipboard")) return;
    let {
      cellCtrl,
      rowCtrl
    } = this.getControlsForEventTarget(t.target);
    cellCtrl?.editing || rowCtrl?.editing || (t.preventDefault(), e.cutToClipboard(void 0, "ui"));
  }
  onCtrlAndV(e, t) {
    let {
      cellCtrl,
      rowCtrl
    } = this.getControlsForEventTarget(t.target);
    cellCtrl?.editing || rowCtrl?.editing || !e || this.gos.get("suppressClipboardPaste") || e.pasteFromClipboard();
  }
  onCtrlAndD(e, t) {
    e && !this.gos.get("suppressClipboardPaste") && e.copyRangeDown();
    t.preventDefault();
  }
  onCtrlAndZ(e, t) {
    this.gos.get("undoRedoCellEditing") && e && (t.preventDefault(), t.shiftKey ? e.redo("ui") : e.undo("ui"));
  }
  onCtrlAndY(e) {
    e?.redo("ui");
  }
};
var s3 = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.eContainer = e;
    this.eViewport = t;
  }
  postConstruct() {
    this.addManagedEventListeners({
      rowContainerHeightChanged: this.onHeightChanged.bind(this, this.beans.rowContainerHeight)
    });
  }
  onHeightChanged(e) {
    let t = e.uiContainerHeight;
    let i = null != t ? `${t}px` : "";
    this.eContainer.style.height = i;
    this.eViewport && (this.eViewport.style.height = i);
  }
};
var s6 = e => e.topRowCtrls;
var s4 = e => e.getStickyTopRowCtrls();
var s8 = e => e.getStickyBottomRowCtrls();
var s7 = e => e.bottomRowCtrls;
var s9 = e => e.allRowCtrls;
var re = e => e.getCtrls("top");
var rt = e => e.getCtrls("center");
var ri = e => e.getCtrls("bottom");
var rs = {
  center: {
    type: "center",
    name: "center-cols",
    getRowCtrls: s9,
    getSpannedRowCtrls: rt
  },
  left: {
    type: "left",
    name: "pinned-left-cols",
    pinnedType: "left",
    getRowCtrls: s9,
    getSpannedRowCtrls: rt
  },
  right: {
    type: "right",
    name: "pinned-right-cols",
    pinnedType: "right",
    getRowCtrls: s9,
    getSpannedRowCtrls: rt
  },
  fullWidth: {
    type: "fullWidth",
    name: "full-width",
    fullWidth: !0,
    getRowCtrls: s9
  },
  topCenter: {
    type: "center",
    name: "floating-top",
    getRowCtrls: s6,
    getSpannedRowCtrls: re
  },
  topLeft: {
    type: "left",
    name: "pinned-left-floating",
    container: "ag-pinned-left-floating-top",
    pinnedType: "left",
    getRowCtrls: s6,
    getSpannedRowCtrls: re
  },
  topRight: {
    type: "right",
    name: "pinned-right-floating",
    container: "ag-pinned-right-floating-top",
    pinnedType: "right",
    getRowCtrls: s6,
    getSpannedRowCtrls: re
  },
  topFullWidth: {
    type: "fullWidth",
    name: "floating-top-full-width",
    fullWidth: !0,
    getRowCtrls: s6
  },
  stickyTopCenter: {
    type: "center",
    name: "sticky-top",
    getRowCtrls: s4
  },
  stickyTopLeft: {
    type: "left",
    name: "pinned-left-sticky-top",
    container: "ag-pinned-left-sticky-top",
    pinnedType: "left",
    getRowCtrls: s4
  },
  stickyTopRight: {
    type: "right",
    name: "pinned-right-sticky-top",
    container: "ag-pinned-right-sticky-top",
    pinnedType: "right",
    getRowCtrls: s4
  },
  stickyTopFullWidth: {
    type: "fullWidth",
    name: "sticky-top-full-width",
    fullWidth: !0,
    getRowCtrls: s4
  },
  stickyBottomCenter: {
    type: "center",
    name: "sticky-bottom",
    getRowCtrls: s8
  },
  stickyBottomLeft: {
    type: "left",
    name: "pinned-left-sticky-bottom",
    container: "ag-pinned-left-sticky-bottom",
    pinnedType: "left",
    getRowCtrls: s8
  },
  stickyBottomRight: {
    type: "right",
    name: "pinned-right-sticky-bottom",
    container: "ag-pinned-right-sticky-bottom",
    pinnedType: "right",
    getRowCtrls: s8
  },
  stickyBottomFullWidth: {
    type: "fullWidth",
    name: "sticky-bottom-full-width",
    fullWidth: !0,
    getRowCtrls: s8
  },
  bottomCenter: {
    type: "center",
    name: "floating-bottom",
    getRowCtrls: s7,
    getSpannedRowCtrls: ri
  },
  bottomLeft: {
    type: "left",
    name: "pinned-left-floating-bottom",
    container: "ag-pinned-left-floating-bottom",
    pinnedType: "left",
    getRowCtrls: s7,
    getSpannedRowCtrls: ri
  },
  bottomRight: {
    type: "right",
    name: "pinned-right-floating-bottom",
    container: "ag-pinned-right-floating-bottom",
    pinnedType: "right",
    getRowCtrls: s7,
    getSpannedRowCtrls: ri
  },
  bottomFullWidth: {
    type: "fullWidth",
    name: "floating-bottom-full-width",
    fullWidth: !0,
    getRowCtrls: s7
  }
};
export function $$rr28(e) {
  let t = rs[e];
  return `ag-${t.name}-viewport`;
}
export function $$ro8(e) {
  let t = rs[e];
  return t.container ?? `ag-${t.name}-container`;
}
export function $$rn29(e) {
  let t = rs[e];
  return `ag-${t.name}-spanned-cells-container`;
}
export function $$rl3(e) {
  return rs[e];
}
var ra = ["center", "left", "right", "fullWidth"];
var rd = ["stickyTopCenter", "stickyBottomCenter", "center", "topCenter", "bottomCenter"];
var rh = ["left", "bottomLeft", "topLeft", "stickyTopLeft", "stickyBottomLeft"];
var ru = ["right", "bottomRight", "topRight", "stickyTopRight", "stickyBottomRight"];
var rc = ["stickyTopCenter", "stickyTopLeft", "stickyTopRight"];
var rg = ["stickyBottomCenter", "stickyBottomLeft", "stickyBottomRight"];
var rp = [...rc, "stickyTopFullWidth", ...rg, "stickyBottomFullWidth"];
var rm = ["topCenter", "topLeft", "topRight", "bottomCenter", "bottomLeft", "bottomRight", "center", "left", "right", ...rc, ...rg];
var $$rf16 = class extends $$tM23 {
  constructor(e) {
    super();
    this.name = e;
    this.visible = !0;
    this.EMPTY_CTRLS = [];
    this.options = rs[e];
  }
  postConstruct() {
    this.enableRtl = this.gos.get("enableRtl");
    this.forContainers(["center"], () => {
      this.viewportSizeFeature = this.createManagedBean(new sY(this));
      this.addManagedEventListeners({
        stickyTopOffsetChanged: this.onStickyTopOffsetChanged.bind(this)
      });
    });
  }
  onStickyTopOffsetChanged(e) {
    this.comp.setOffsetTop(`${e.offset}px`);
  }
  registerWithCtrlsService() {
    this.options.fullWidth || this.beans.ctrlsSvc.register(this.name, this);
  }
  forContainers(e, t) {
    e.indexOf(this.name) >= 0 && t();
  }
  setComp(e, t, i, s) {
    this.comp = e;
    this.eContainer = t;
    this.eSpannedContainer = i;
    this.eViewport = s;
    this.createManagedBean(new s5(this.eViewport ?? this.eContainer));
    this.addPreventScrollWhileDragging();
    this.listenOnDomOrder();
    let {
      pinnedCols,
      rangeSvc
    } = this.beans;
    let n = () => this.onPinnedWidthChanged();
    this.forContainers(rh, () => {
      this.pinnedWidthFeature = this.createOptionalManagedBean(pinnedCols?.createPinnedWidthFeature(!0, this.eContainer, this.eSpannedContainer));
      this.addManagedEventListeners({
        leftPinnedWidthChanged: n
      });
    });
    this.forContainers(ru, () => {
      this.pinnedWidthFeature = this.createOptionalManagedBean(pinnedCols?.createPinnedWidthFeature(!1, this.eContainer, this.eSpannedContainer));
      this.addManagedEventListeners({
        rightPinnedWidthChanged: n
      });
    });
    this.forContainers(ra, () => this.createManagedBean(new s3(this.eContainer, "center" === this.name ? s : void 0)));
    rangeSvc && this.forContainers(rm, () => this.createManagedBean(rangeSvc.createDragListenerFeature(this.eContainer)));
    this.forContainers(rd, () => this.createManagedBean(new sq(e => this.comp.setContainerWidth(`${e}px`))));
    this.visible = this.isContainerVisible();
    this.addListeners();
    this.registerWithCtrlsService();
  }
  onScrollCallback(e) {
    this.addManagedElementListeners(this.eViewport, {
      scroll: e
    });
  }
  addListeners() {
    let {
      spannedRowRenderer,
      gos
    } = this.beans;
    this.addManagedEventListeners({
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this),
      displayedColumnsWidthChanged: this.onDisplayedColumnsChanged.bind(this),
      displayedRowsChanged: e => this.onDisplayedRowsChanged(e.afterScroll)
    });
    this.onDisplayedColumnsChanged();
    this.onDisplayedRowsChanged();
    spannedRowRenderer && this.options.getSpannedRowCtrls && gos.get("enableCellSpan") && this.addManagedListeners(spannedRowRenderer, {
      spannedRowsUpdated: () => {
        let t = this.options.getSpannedRowCtrls(spannedRowRenderer);
        t && this.comp.setSpannedRowCtrls(t, !1);
      }
    });
  }
  listenOnDomOrder() {
    if (rp.indexOf(this.name) >= 0) {
      this.comp.setDomOrder(!0);
      return;
    }
    let e = () => {
      let e = this.gos.get("ensureDomOrder");
      let t = ej(this.gos, "print");
      this.comp.setDomOrder(e || t);
    };
    this.addManagedPropertyListener("domLayout", e);
    e();
  }
  onDisplayedColumnsChanged() {
    this.forContainers(["center"], () => this.onHorizontalViewportChanged());
  }
  addPreventScrollWhileDragging() {
    let {
      dragSvc
    } = this.beans;
    if (!dragSvc) return;
    let t = t => {
      dragSvc.dragging && t.cancelable && t.preventDefault();
    };
    this.eContainer.addEventListener("touchmove", t, {
      passive: !1
    });
    this.addDestroyFunc(() => this.eContainer.removeEventListener("touchmove", t));
  }
  onHorizontalViewportChanged(e = !1) {
    let t = this.getCenterWidth();
    let i = this.getCenterViewportScrollLeft();
    this.beans.colViewport.setScrollPosition(t, i, e);
  }
  hasHorizontalScrollGap() {
    return this.eContainer.clientWidth - this.eViewport.clientWidth < 0;
  }
  hasVerticalScrollGap() {
    return this.eContainer.clientHeight - this.eViewport.clientHeight < 0;
  }
  getCenterWidth() {
    return q(this.eViewport);
  }
  getCenterViewportScrollLeft() {
    return Q(this.eViewport, this.enableRtl);
  }
  registerViewportResizeListener(e) {
    let t = $$ef15(this.beans, this.eViewport, e);
    this.addDestroyFunc(() => t());
  }
  isViewportInTheDOMTree() {
    return es(this.eViewport);
  }
  getViewportScrollLeft() {
    return Q(this.eViewport, this.enableRtl);
  }
  isHorizontalScrollShowing() {
    var e;
    return this.gos.get("alwaysShowHorizontalScroll") || (e = this.eViewport).clientWidth < e.scrollWidth;
  }
  setHorizontalScroll(e) {
    this.comp.setHorizontalScroll(e);
  }
  getHScrollPosition() {
    return {
      left: this.eViewport.scrollLeft,
      right: this.eViewport.scrollLeft + this.eViewport.offsetWidth
    };
  }
  setCenterViewportScrollLeft(e) {
    ee(this.eViewport, e, this.enableRtl);
  }
  isContainerVisible() {
    return !(null != this.options.pinnedType) || !!this.pinnedWidthFeature && this.pinnedWidthFeature.getWidth() > 0;
  }
  onPinnedWidthChanged() {
    let e = this.isContainerVisible();
    this.visible != e && (this.visible = e, this.onDisplayedRowsChanged());
  }
  onDisplayedRowsChanged(e = !1) {
    let t = this.options.getRowCtrls(this.beans.rowRenderer);
    if (!this.visible || 0 === t.length) {
      this.comp.setRowCtrls({
        rowCtrls: this.EMPTY_CTRLS
      });
      return;
    }
    let i = ej(this.gos, "print");
    let s = this.gos.get("embedFullWidthRows") || i;
    let r = t.filter(e => {
      let t = e.isFullWidth();
      return this.options.fullWidth ? !s && t : s || !t;
    });
    this.comp.setRowCtrls({
      rowCtrls: r,
      useFlushSync: e
    });
  }
};
var rC = "ag-force-vertical-scroll";
var $$rw36 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.stickyTopHeight = 0;
    this.stickyBottomHeight = 0;
  }
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc;
    this.colModel = e.colModel;
    this.scrollVisibleSvc = e.scrollVisibleSvc;
    this.pinnedRowModel = e.pinnedRowModel;
    this.filterManager = e.filterManager;
    this.rowGroupColsSvc = e.rowGroupColsSvc;
  }
  setComp(e, t, i, s, r, o, n) {
    this.comp = e;
    this.eGridBody = t;
    this.eBodyViewport = i;
    this.eTop = s;
    this.eBottom = r;
    this.eStickyTop = o;
    this.eStickyBottom = n;
    this.eCenterColsViewport = i.querySelector(`.${$$rr28("center")}`);
    this.eFullWidthContainer = i.querySelector(`.${$$ro8("fullWidth")}`);
    this.eStickyTopFullWidthContainer = o.querySelector(`.${$$ro8("stickyTopFullWidth")}`);
    this.eStickyBottomFullWidthContainer = n.querySelector(`.${$$ro8("stickyBottomFullWidth")}`);
    this.setCellTextSelection(this.gos.get("enableCellTextSelection"));
    this.addManagedPropertyListener("enableCellTextSelection", e => this.setCellTextSelection(e.currentValue));
    this.createManagedBean(new sU(this.comp));
    this.scrollFeature = this.createManagedBean(new sj(this.eBodyViewport));
    this.beans.rowDragSvc?.setupRowDrag(this.eBodyViewport, this);
    this.setupRowAnimationCssClass();
    this.addEventListeners();
    this.addFocusListeners([s, i, r, o, n]);
    this.setGridRootRole();
    this.onGridColumnsChanged();
    this.addBodyViewportListener();
    this.setFloatingHeights();
    this.disableBrowserDragging();
    this.addStopEditingWhenGridLosesFocus();
    this.updateScrollingClasses();
    this.filterManager?.setupAdvFilterHeaderComp(s);
    this.ctrlsSvc.register("gridBodyCtrl", this);
  }
  addEventListeners() {
    let e = this.setFloatingHeights.bind(this);
    let t = this.setGridRootRole.bind(this);
    this.addManagedEventListeners({
      gridColumnsChanged: this.onGridColumnsChanged.bind(this),
      scrollVisibilityChanged: this.onScrollVisibilityChanged.bind(this),
      scrollGapChanged: this.updateScrollingClasses.bind(this),
      pinnedRowDataChanged: e,
      pinnedHeightChanged: e,
      headerHeightChanged: this.setStickyTopOffsetTop.bind(this),
      columnRowGroupChanged: t,
      columnPivotChanged: t
    });
    this.addManagedPropertyListener("treeData", t);
  }
  onGridColumnsChanged() {
    let e = this.beans.colModel.getCols();
    this.comp.setColumnCount(e.length);
  }
  onScrollVisibilityChanged() {
    let {
      scrollVisibleSvc
    } = this;
    let t = scrollVisibleSvc.verticalScrollShowing;
    this.setVerticalScrollPaddingVisible(t);
    this.setStickyWidth(t);
    this.setStickyBottomOffsetBottom();
    let i = t && scrollVisibleSvc.getScrollbarWidth() || 0;
    let s = V() ? 16 : 0;
    let r = `calc(100% + ${i + s}px)`;
    i3(this.beans, () => this.comp.setBodyViewportWidth(r));
    this.updateScrollingClasses();
  }
  setGridRootRole() {
    let {
      rowGroupColsSvc,
      colModel
    } = this;
    let i = this.gos.get("treeData");
    if (!i) {
      let s = colModel.isPivotMode();
      i = (rowGroupColsSvc ? rowGroupColsSvc.columns.length : 0) >= (s ? 2 : 1);
    }
    this.comp.setGridRootRole(i ? "treegrid" : "grid");
  }
  addFocusListeners(e) {
    e.forEach(e => {
      this.addManagedElementListeners(e, {
        focusin: t => {
          let {
            target
          } = t;
          let s = K(target, "ag-root", e);
          e.classList.toggle("ag-has-focus", !s);
        },
        focusout: t => {
          let {
            target,
            relatedTarget
          } = t;
          let r = e.contains(relatedTarget);
          let o = K(relatedTarget, "ag-root", e);
          K(target, "ag-root", e) || r && !o || e.classList.remove("ag-has-focus");
        }
      });
    });
  }
  setColumnMovingCss(e) {
    this.comp.setColumnMovingCss("ag-column-moving", e);
  }
  setCellTextSelection(e = !1) {
    this.comp.setCellSelectableCss("ag-selectable", e);
  }
  updateScrollingClasses() {
    let {
      eGridBody: {
        classList
      },
      scrollVisibleSvc
    } = this;
    classList.toggle("ag-body-vertical-content-no-gap", !scrollVisibleSvc.verticalScrollGap);
    classList.toggle("ag-body-horizontal-content-no-gap", !scrollVisibleSvc.horizontalScrollGap);
  }
  disableBrowserDragging() {
    this.addManagedElementListeners(this.eGridBody, {
      dragstart: e => {
        if (e.target instanceof HTMLImageElement) {
          e.preventDefault();
          return !1;
        }
      }
    });
  }
  addStopEditingWhenGridLosesFocus() {
    this.beans.editSvc?.addStopEditingWhenGridLosesFocus([this.eBodyViewport, this.eBottom, this.eTop, this.eStickyTop, this.eStickyBottom]);
  }
  updateRowCount() {
    let e = (this.ctrlsSvc.getHeaderRowContainerCtrl()?.getRowCount() ?? 0) + (this.filterManager?.getHeaderRowCount() ?? 0);
    let {
      rowModel
    } = this.beans;
    let i = rowModel.isLastRowIndexKnown() ? rowModel.getRowCount() : -1;
    this.comp.setRowCount(-1 === i ? -1 : e + i);
  }
  registerBodyViewportResizeListener(e) {
    this.comp.registerBodyViewportResizeListener(e);
  }
  setVerticalScrollPaddingVisible(e) {
    this.comp.setPinnedTopBottomOverflowY(e ? "scroll" : "hidden");
  }
  isVerticalScrollShowing() {
    var e;
    let t = this.gos.get("alwaysShowVerticalScroll");
    let i = ej(this.gos, "normal");
    this.comp.setAlwaysVerticalScrollClass(t ? rC : null, t);
    return t || i && (e = this.eBodyViewport).clientHeight < e.scrollHeight;
  }
  setupRowAnimationCssClass() {
    let {
      rowContainerHeight,
      environment
    } = this.beans;
    let i = environment.sizesMeasured;
    let s = () => {
      let t = i && e8(this.gos) && !rowContainerHeight.stretching;
      this.comp.setRowAnimationCssOnBodyViewport(t ? "ag-row-animation" : "ag-row-no-animation", t);
    };
    s();
    this.addManagedEventListeners({
      heightScaleChanged: s
    });
    this.addManagedPropertyListener("animateRows", s);
    this.addManagedEventListeners({
      gridStylesChanged: () => {
        !i && environment.sizesMeasured && (i = !0, s());
      }
    });
  }
  addBodyViewportListener() {
    let {
      popupSvc,
      touchSvc
    } = this.beans;
    let i = this.onBodyViewportContextMenu.bind(this);
    this.addManagedElementListeners(this.eBodyViewport, {
      contextmenu: i
    });
    touchSvc?.mockBodyContextMenu(this, i);
    this.addManagedElementListeners(this.eBodyViewport, {
      wheel: this.onBodyViewportWheel.bind(this, popupSvc)
    });
    this.addManagedElementListeners(this.eStickyTop, {
      wheel: this.onStickyWheel.bind(this)
    });
    this.addManagedElementListeners(this.eStickyBottom, {
      wheel: this.onStickyWheel.bind(this)
    });
    this.addFullWidthContainerWheelListener();
  }
  addFullWidthContainerWheelListener() {
    this.addManagedElementListeners(this.eFullWidthContainer, {
      wheel: e => this.onFullWidthContainerWheel(e)
    });
  }
  onFullWidthContainerWheel(e) {
    let {
      deltaX,
      deltaY,
      shiftKey
    } = e;
    (shiftKey || Math.abs(deltaX) > Math.abs(deltaY)) && sm(this.gos, e) && this.scrollGridBodyToMatchEvent(e);
  }
  onStickyWheel(e) {
    let {
      deltaX,
      deltaY,
      shiftKey
    } = e;
    let r = shiftKey || Math.abs(deltaX) > Math.abs(deltaY);
    let o = e.target;
    r ? (this.eStickyTopFullWidthContainer.contains(o) || this.eStickyBottomFullWidthContainer.contains(o)) && this.scrollGridBodyToMatchEvent(e) : (e.preventDefault(), this.scrollVertically(deltaY));
  }
  scrollGridBodyToMatchEvent(e) {
    let {
      deltaX,
      deltaY
    } = e;
    e.preventDefault();
    this.eCenterColsViewport.scrollBy({
      left: deltaX || deltaY
    });
  }
  onBodyViewportContextMenu(e, t, i) {
    if (!e && !i) return;
    this.gos.get("preventDefaultOnContextMenu") && (e || i).preventDefault();
    let {
      target
    } = e || t;
    (target === this.eBodyViewport || target === this.ctrlsSvc.get("center").eViewport) && this.beans.contextMenuSvc?.showContextMenu({
      mouseEvent: e,
      touchEvent: i,
      value: null,
      anchorToElement: this.eGridBody,
      source: "ui"
    });
  }
  onBodyViewportWheel(e, t) {
    this.gos.get("suppressScrollWhenPopupsAreOpen") && e?.hasAnchoredPopup() && t.preventDefault();
  }
  scrollVertically(e) {
    let t = this.eBodyViewport.scrollTop;
    this.scrollFeature.setVerticalScrollPosition(t + e);
    return this.eBodyViewport.scrollTop - t;
  }
  setFloatingHeights() {
    let {
      pinnedRowModel
    } = this;
    let t = pinnedRowModel?.getPinnedTopTotalHeight() ?? 0;
    let i = pinnedRowModel?.getPinnedBottomTotalHeight() ?? 0;
    this.comp.setTopHeight(t);
    this.comp.setBottomHeight(i);
    this.comp.setTopDisplay(t ? "inherit" : "none");
    this.comp.setBottomDisplay(i ? "inherit" : "none");
    this.setStickyTopOffsetTop();
    this.setStickyBottomOffsetBottom();
  }
  setStickyTopHeight(e = 0) {
    this.comp.setStickyTopHeight(`${e}px`);
    this.stickyTopHeight = e;
  }
  setStickyBottomHeight(e = 0) {
    this.comp.setStickyBottomHeight(`${e}px`);
    this.stickyBottomHeight = e;
  }
  setStickyWidth(e) {
    if (e) {
      let e = this.scrollVisibleSvc.getScrollbarWidth();
      this.comp.setStickyTopWidth(`calc(100% - ${e}px)`);
      this.comp.setStickyBottomWidth(`calc(100% - ${e}px)`);
    } else {
      this.comp.setStickyTopWidth("100%");
      this.comp.setStickyBottomWidth("100%");
    }
  }
  setStickyTopOffsetTop() {
    let e = this.ctrlsSvc.get("gridHeaderCtrl").headerHeight + (this.filterManager?.getHeaderHeight() ?? 0);
    let t = this.pinnedRowModel?.getPinnedTopTotalHeight() ?? 0;
    let i = 0;
    e > 0 && (i += e);
    t > 0 && (i += t);
    i > 0 && (i += 1);
    this.comp.setStickyTopTop(`${i}px`);
  }
  setStickyBottomOffsetBottom() {
    let {
      pinnedRowModel,
      scrollVisibleSvc,
      comp
    } = this;
    let s = pinnedRowModel?.getPinnedBottomTotalHeight() ?? 0;
    let r = scrollVisibleSvc.horizontalScrollShowing && scrollVisibleSvc.getScrollbarWidth() || 0;
    comp.setStickyBottomBottom(`${s + r}px`);
  }
};
var rv = class extends iS {
  constructor(e, t) {
    super();
    this.direction = t;
    this.eViewport = null;
    this.eContainer = null;
    this.hideTimeout = 0;
    this.setTemplate(e);
  }
  postConstruct() {
    this.addManagedEventListeners({
      scrollVisibilityChanged: this.onScrollVisibilityChanged.bind(this)
    });
    this.onScrollVisibilityChanged();
    this.addOrRemoveCssClass("ag-apple-scrollbar", G() || H());
  }
  destroy() {
    super.destroy();
    window.clearTimeout(this.hideTimeout);
  }
  initialiseInvisibleScrollbar() {
    void 0 === this.invisibleScrollbar && (this.invisibleScrollbar = V(), this.invisibleScrollbar && (this.hideAndShowInvisibleScrollAsNeeded(), this.addActiveListenerToggles()));
  }
  addActiveListenerToggles() {
    let e = this.getGui();
    let t = () => this.addOrRemoveCssClass("ag-scrollbar-active", !0);
    let i = () => this.addOrRemoveCssClass("ag-scrollbar-active", !1);
    this.addManagedListeners(e, {
      mouseenter: t,
      mousedown: t,
      touchstart: t,
      mouseleave: i,
      touchend: i
    });
  }
  onScrollVisibilityChanged() {
    void 0 === this.invisibleScrollbar && this.initialiseInvisibleScrollbar();
    i3(this.beans, () => this.setScrollVisible());
  }
  hideAndShowInvisibleScrollAsNeeded() {
    this.addManagedEventListeners({
      bodyScroll: e => {
        e.direction === this.direction && (this.hideTimeout && (window.clearTimeout(this.hideTimeout), this.hideTimeout = 0), this.addOrRemoveCssClass("ag-scrollbar-scrolling", !0));
      },
      bodyScrollEnd: () => {
        this.hideTimeout = window.setTimeout(() => {
          this.addOrRemoveCssClass("ag-scrollbar-scrolling", !1);
          this.hideTimeout = 0;
        }, 400);
      }
    });
  }
  attemptSettingScrollPosition(e) {
    let t = this.eViewport;
    !function (e, t, i = 100, s) {
      let r = new Date().getTime();
      let o = null;
      let n = !1;
      let l = () => {
        let s = new Date().getTime() - r > i;
        (e() || s) && (t(), n = !0, null != o && (window.clearInterval(o), o = null));
      };
      l();
      n || (o = window.setInterval(l, 10));
    }(() => er(t), () => this.setScrollPosition(e), 100);
  }
  onScrollCallback(e) {
    this.addManagedElementListeners(this.eViewport, {
      scroll: e
    });
  }
};
var $$rb35 = class extends rv {
  constructor() {
    super(`<div class="ag-body-horizontal-scroll" aria-hidden="true">
            <div class="ag-horizontal-left-spacer" data-ref="eLeftSpacer"></div>
            <div class="ag-body-horizontal-scroll-viewport" data-ref="eViewport">
                <div class="ag-body-horizontal-scroll-container" data-ref="eContainer"></div>
            </div>
            <div class="ag-horizontal-right-spacer" data-ref="eRightSpacer"></div>
        </div>`, "horizontal");
    this.eLeftSpacer = null;
    this.eRightSpacer = null;
    this.setScrollVisibleDebounce = 0;
  }
  wireBeans(e) {
    this.visibleCols = e.visibleCols;
    this.scrollVisibleSvc = e.scrollVisibleSvc;
  }
  postConstruct() {
    super.postConstruct();
    let e = this.setFakeHScrollSpacerWidths.bind(this);
    this.addManagedEventListeners({
      displayedColumnsChanged: e,
      displayedColumnsWidthChanged: e,
      pinnedRowDataChanged: this.refreshCompBottom.bind(this)
    });
    this.addManagedPropertyListener("domLayout", e);
    this.beans.ctrlsSvc.register("fakeHScrollComp", this);
    this.createManagedBean(new sq(e => this.eContainer.style.width = `${e}px`));
    this.addManagedPropertyListeners(["suppressHorizontalScroll"], this.onScrollVisibilityChanged.bind(this));
  }
  destroy() {
    window.clearTimeout(this.setScrollVisibleDebounce);
    super.destroy();
  }
  initialiseInvisibleScrollbar() {
    void 0 === this.invisibleScrollbar && (this.enableRtl = this.gos.get("enableRtl"), super.initialiseInvisibleScrollbar(), this.invisibleScrollbar && this.refreshCompBottom());
  }
  refreshCompBottom() {
    if (!this.invisibleScrollbar) return;
    let e = this.beans.pinnedRowModel?.getPinnedBottomTotalHeight() ?? 0;
    this.getGui().style.bottom = `${e}px`;
  }
  onScrollVisibilityChanged() {
    super.onScrollVisibilityChanged();
    this.setFakeHScrollSpacerWidths();
  }
  setFakeHScrollSpacerWidths() {
    let e = this.scrollVisibleSvc.verticalScrollShowing;
    let t = this.visibleCols.getDisplayedColumnsRightWidth();
    let i = !this.enableRtl && e;
    let s = this.scrollVisibleSvc.getScrollbarWidth();
    i && (t += s);
    eh(this.eRightSpacer, t);
    this.eRightSpacer.classList.toggle("ag-scroller-corner", t <= s);
    let r = this.visibleCols.getColsLeftWidth();
    this.enableRtl && e && (r += s);
    eh(this.eLeftSpacer, r);
    this.eLeftSpacer.classList.toggle("ag-scroller-corner", r <= s);
  }
  setScrollVisible() {
    let e = this.scrollVisibleSvc.horizontalScrollShowing;
    let t = this.invisibleScrollbar;
    let i = this.gos.get("suppressHorizontalScroll");
    let s = e && this.scrollVisibleSvc.getScrollbarWidth() || 0;
    let r = 0 === s && t ? 16 : s;
    let o = i ? 0 : r;
    let n = () => {
      this.setScrollVisibleDebounce = 0;
      this.addOrRemoveCssClass("ag-scrollbar-invisible", t);
      eu(this.getGui(), o);
      eu(this.eViewport, o);
      eu(this.eContainer, o);
      this.setDisplayed(e, {
        skipAriaHidden: !0
      });
    };
    window.clearTimeout(this.setScrollVisibleDebounce);
    e ? this.setScrollVisibleDebounce = window.setTimeout(n, 100) : n();
  }
  getScrollPosition() {
    return Q(this.eViewport, this.enableRtl);
  }
  setScrollPosition(e) {
    er(this.eViewport) || this.attemptSettingScrollPosition(e);
    ee(this.eViewport, e, this.enableRtl);
  }
};
var ry = {
  selector: "AG-FAKE-HORIZONTAL-SCROLL",
  component: $$rb35
};
var $$rS1 = class extends rv {
  constructor() {
    super(`<div class="ag-body-vertical-scroll" aria-hidden="true">
            <div class="ag-body-vertical-scroll-viewport" data-ref="eViewport">
                <div class="ag-body-vertical-scroll-container" data-ref="eContainer"></div>
            </div>
        </div>`, "vertical");
  }
  postConstruct() {
    super.postConstruct();
    this.createManagedBean(new s3(this.eContainer));
    let {
      ctrlsSvc
    } = this.beans;
    ctrlsSvc.register("fakeVScrollComp", this);
    this.addManagedEventListeners({
      rowContainerHeightChanged: this.onRowContainerHeightChanged.bind(this, ctrlsSvc)
    });
  }
  setScrollVisible() {
    let {
      scrollVisibleSvc
    } = this.beans;
    let t = scrollVisibleSvc.verticalScrollShowing;
    let i = this.invisibleScrollbar;
    let s = t && scrollVisibleSvc.getScrollbarWidth() || 0;
    let r = 0 === s && i ? 16 : s;
    this.addOrRemoveCssClass("ag-scrollbar-invisible", i);
    eh(this.getGui(), r);
    eh(this.eViewport, r);
    eh(this.eContainer, r);
    this.setDisplayed(t, {
      skipAriaHidden: !0
    });
  }
  onRowContainerHeightChanged(e) {
    let t = e.getGridBodyCtrl().eBodyViewport;
    let i = this.getScrollPosition();
    let s = t.scrollTop;
    i != s && this.setScrollPosition(s, !0);
  }
  getScrollPosition() {
    return this.eViewport.scrollTop;
  }
  setScrollPosition(e, t) {
    t || er(this.eViewport) || this.attemptSettingScrollPosition(e);
    this.eViewport.scrollTop = e;
  }
};
var rR = {
  selector: "AG-FAKE-VERTICAL-SCROLL",
  component: $$rS1
};
function rD(e) {
  return e.ctrlsSvc.getHeaderRowContainerCtrl()?.getRowCount() ?? 0;
}
function rx(e) {
  let t = [];
  for (let i of e.ctrlsSvc.getHeaderRowContainerCtrls()) {
    if (!i) continue;
    let s = i.getGroupRowCount() || 0;
    for (let r = 0; r < s; r++) {
      let s = i.getGroupRowCtrlAtIndex(r);
      let o = t[r];
      if (s) {
        let i = function (e, t) {
          let i = e.colModel.isPivotMode() ? e.gos.get("pivotGroupHeaderHeight") ?? rA(e) : rA(e);
          let s = 0;
          for (let e of t.getHeaderCtrls()) {
            let {
              column
            } = e;
            if (column.isAutoHeaderHeight()) {
              let e = column.getAutoHeaderHeight();
              null != e && e > s && (s = e);
            }
          }
          return Math.max(i, s);
        }(e, s);
        (null == o || i > o) && (t[r] = i);
      }
    }
  }
  return t;
}
function rP(e) {
  return Math.max(e.colModel.isPivotMode() ? e.gos.get("pivotHeaderHeight") ?? rE(e) : rE(e), ...e.visibleCols.allCols.filter(e => e.isAutoHeaderHeight()).map(e => e.getAutoHeaderHeight() || 0));
}
function rE(e) {
  return e.gos.get("headerHeight") ?? e.environment.getDefaultHeaderHeight();
}
function rF(e) {
  return e.gos.get("floatingFiltersHeight") ?? rE(e);
}
function rA(e) {
  return e.gos.get("groupHeaderHeight") ?? rE(e);
}
var $$rk43 = class extends $$tM23 {
  setComp(e, t, i) {
    this.comp = e;
    this.eGui = t;
    let {
      beans
    } = this;
    let {
      headerNavigation,
      touchSvc,
      ctrlsSvc
    } = s;
    headerNavigation && this.createManagedBean(new sH(i, {
      onTabKeyDown: this.onTabKeyDown.bind(this),
      handleKeyDown: this.handleKeyDown.bind(this),
      onFocusOut: this.onFocusOut.bind(this)
    }));
    this.addManagedEventListeners({
      columnPivotModeChanged: this.onPivotModeChanged.bind(this, beans),
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this, beans)
    });
    this.onPivotModeChanged(beans);
    this.setupHeaderHeight();
    let l = this.onHeaderContextMenu.bind(this);
    this.addManagedElementListeners(this.eGui, {
      contextmenu: l
    });
    touchSvc?.mockHeaderContextMenu(this, l);
    ctrlsSvc.register("gridHeaderCtrl", this);
  }
  setupHeaderHeight() {
    let e = this.setHeaderHeight.bind(this);
    e();
    this.addManagedPropertyListeners(["headerHeight", "pivotHeaderHeight", "groupHeaderHeight", "pivotGroupHeaderHeight", "floatingFiltersHeight"], e);
    this.addManagedEventListeners({
      displayedColumnsChanged: e,
      columnHeaderHeightChanged: e,
      columnGroupHeaderHeightChanged: () => i3(this.beans, () => e()),
      gridStylesChanged: e,
      advancedFilterEnabledChanged: e
    });
  }
  setHeaderHeight() {
    let {
      beans
    } = this;
    let t = 0;
    let i = rx(beans).reduce((e, t) => e + t, 0);
    let s = rP(beans);
    if (beans.filterManager?.hasFloatingFilters() && (t += rF(beans)), t += i, t += s, this.headerHeight === t) return;
    this.headerHeight = t;
    let r = `${t + 1}px`;
    this.comp.setHeightAndMinHeight(r);
    this.eventSvc.dispatchEvent({
      type: "headerHeightChanged"
    });
  }
  onPivotModeChanged(e) {
    let t = e.colModel.isPivotMode();
    this.comp.addOrRemoveCssClass("ag-pivot-on", t);
    this.comp.addOrRemoveCssClass("ag-pivot-off", !t);
  }
  onDisplayedColumnsChanged(e) {
    let t = e.visibleCols.allCols.some(e => e.isSpanHeaderHeight());
    this.comp.addOrRemoveCssClass("ag-header-allow-overflow", t);
  }
  onTabKeyDown(e) {
    let t = this.gos.get("enableRtl");
    let i = e.shiftKey;
    let {
      beans
    } = this;
    let {
      headerNavigation,
      focusSvc
    } = s;
    (headerNavigation.navigateHorizontally(i !== t ? "LEFT" : "RIGHT", !0, e) || !i && focusSvc.focusOverlay(!1) || sn(beans, i, !0)) && e.preventDefault();
  }
  handleKeyDown(e) {
    let t = null;
    let {
      headerNavigation
    } = this.beans;
    switch (e.key) {
      case i4.LEFT:
        t = "LEFT";
      case i4.RIGHT:
        ew(t) || (t = "RIGHT");
        headerNavigation.navigateHorizontally(t, !1, e) && e.preventDefault();
        break;
      case i4.UP:
        t = "UP";
      case i4.DOWN:
        ew(t) || (t = "DOWN");
        headerNavigation.navigateVertically(t, null, e) && e.preventDefault();
        break;
      default:
        return;
    }
  }
  onFocusOut(e) {
    let {
      relatedTarget
    } = e;
    let {
      eGui,
      beans
    } = this;
    !(!relatedTarget && eGui.contains(e3(beans))) && (eGui.contains(relatedTarget) || (beans.focusSvc.focusedHeader = null));
  }
  onHeaderContextMenu(e, t, i) {
    let {
      menuSvc,
      ctrlsSvc
    } = this.beans;
    if (!e && !i || !menuSvc?.isHeaderContextMenuEnabled()) return;
    let {
      target
    } = e ?? t;
    (target === this.eGui || target === ctrlsSvc.getHeaderRowContainerCtrl()?.eViewport) && menuSvc.showHeaderContextMenu(void 0, e, i);
  }
};
var rM = class extends iS {
  constructor(e, t) {
    super(e);
    this.ctrl = t;
  }
  getCtrl() {
    return this.ctrl;
  }
};
var rT = class extends rM {
  constructor(e) {
    super(`<div class="ag-header-cell" role="columnheader">
            <div data-ref="eResize" class="ag-header-cell-resize" role="presentation"></div>
            <div data-ref="eHeaderCompWrapper" class="ag-header-cell-comp-wrapper" role="presentation"></div>
        </div>`, e);
    this.eResize = null;
    this.eHeaderCompWrapper = null;
    this.headerCompVersion = 0;
  }
  postConstruct() {
    var e;
    var t;
    let i = this.getGui();
    e = "col-id";
    null != (t = this.ctrl.column.getColId()) && "" != t ? i.setAttribute(e, t) : i.removeAttribute(e);
    this.ctrl.setComp({
      setWidth: e => i.style.width = e,
      addOrRemoveCssClass: (e, t) => this.addOrRemoveCssClass(e, t),
      setUserStyles: e => ea(i, e),
      setAriaSort: e => e ? $$A10(i, e) : $$k17(i),
      setUserCompDetails: e => this.setUserCompDetails(e),
      getUserCompInstance: () => this.headerComp
    }, this.getGui(), this.eResize, this.eHeaderCompWrapper, void 0);
    let s = this.ctrl.getSelectAllGui();
    s && this.eResize.insertAdjacentElement("afterend", s);
  }
  destroy() {
    this.destroyHeaderComp();
    super.destroy();
  }
  destroyHeaderComp() {
    this.headerComp && (this.eHeaderCompWrapper.removeChild(this.headerCompGui), this.headerComp = this.destroyBean(this.headerComp), this.headerCompGui = void 0);
  }
  setUserCompDetails(e) {
    this.headerCompVersion++;
    let t = this.headerCompVersion;
    e.newAgStackInstance().then(e => this.afterCompCreated(t, e));
  }
  afterCompCreated(e, t) {
    if (e != this.headerCompVersion || !this.isAlive()) {
      this.destroyBean(t);
      return;
    }
    this.destroyHeaderComp();
    this.headerComp = t;
    this.headerCompGui = t.getGui();
    this.eHeaderCompWrapper.appendChild(this.headerCompGui);
    this.ctrl.setDragSource(this.getGui());
  }
};
var rI = class extends rM {
  constructor(e) {
    super(`<div class="ag-header-group-cell" role="columnheader">
            <div data-ref="eHeaderCompWrapper" class="ag-header-cell-comp-wrapper" role="presentation"></div>
            <div data-ref="eResize" class="ag-header-cell-resize" role="presentation"></div>
        </div>`, e);
    this.eResize = null;
    this.eHeaderCompWrapper = null;
  }
  postConstruct() {
    let e = this.getGui();
    let t = (t, i) => void 0 != i ? e.setAttribute(t, i) : e.removeAttribute(t);
    e.setAttribute("col-id", this.ctrl.column.getUniqueId());
    this.ctrl.setComp({
      addOrRemoveCssClass: (e, t) => this.addOrRemoveCssClass(e, t),
      setUserStyles: t => ea(e, t),
      setHeaderWrapperHidden: e => {
        e ? this.eHeaderCompWrapper.style.setProperty("display", "none") : this.eHeaderCompWrapper.style.removeProperty("display");
      },
      setHeaderWrapperMaxHeight: e => {
        null != e ? this.eHeaderCompWrapper.style.setProperty("max-height", `${e}px`) : this.eHeaderCompWrapper.style.removeProperty("max-height");
        this.eHeaderCompWrapper.classList.toggle("ag-header-cell-comp-wrapper-limited-height", null != e);
      },
      setResizableDisplayed: e => U(this.eResize, e),
      setWidth: t => e.style.width = t,
      setAriaExpanded: e => t("aria-expanded", e),
      setUserCompDetails: e => this.setUserCompDetails(e),
      getUserCompInstance: () => this.headerGroupComp
    }, e, this.eResize, this.eHeaderCompWrapper, void 0);
  }
  setUserCompDetails(e) {
    e.newAgStackInstance().then(e => this.afterHeaderCompCreated(e));
  }
  afterHeaderCompCreated(e) {
    let t = () => this.destroyBean(e);
    if (!this.isAlive()) {
      t();
      return;
    }
    let i = this.getGui();
    let s = e.getGui();
    this.eHeaderCompWrapper.appendChild(s);
    this.addDestroyFunc(t);
    this.headerGroupComp = e;
    this.ctrl.setDragSource(i);
  }
  addOrRemoveHeaderWrapperStyle(e, t) {
    let {
      eHeaderCompWrapper
    } = this;
    t ? eHeaderCompWrapper.style.setProperty(e, t) : eHeaderCompWrapper.style.removeProperty(e);
  }
};
var rL = class extends rM {
  constructor(e) {
    super(`<div class="ag-header-cell ag-floating-filter" role="gridcell">
            <div data-ref="eFloatingFilterBody" role="presentation"></div>
            <div class="ag-floating-filter-button ag-hidden" data-ref="eButtonWrapper" role="presentation">
                <button type="button" class="ag-button ag-floating-filter-button-button" data-ref="eButtonShowMainFilter" tabindex="-1"></button>
            </div>
        </div>`, e);
    this.eFloatingFilterBody = null;
    this.eButtonWrapper = null;
    this.eButtonShowMainFilter = null;
  }
  postConstruct() {
    let e = this.getGui();
    this.ctrl.setComp({
      addOrRemoveCssClass: (e, t) => this.addOrRemoveCssClass(e, t),
      setUserStyles: t => ea(e, t),
      addOrRemoveBodyCssClass: (e, t) => this.eFloatingFilterBody.classList.toggle(e, t),
      setButtonWrapperDisplayed: e => U(this.eButtonWrapper, e),
      setCompDetails: e => this.setCompDetails(e),
      getFloatingFilterComp: () => this.compPromise,
      setWidth: t => e.style.width = t,
      setMenuIcon: e => this.eButtonShowMainFilter.appendChild(e)
    }, e, this.eButtonShowMainFilter, this.eFloatingFilterBody, void 0);
  }
  setCompDetails(e) {
    if (!e) {
      this.destroyFloatingFilterComp();
      this.compPromise = null;
      return;
    }
    this.compPromise = e.newAgStackInstance();
    this.compPromise.then(e => this.afterCompCreated(e));
  }
  destroy() {
    this.destroyFloatingFilterComp();
    super.destroy();
  }
  destroyFloatingFilterComp() {
    this.floatingFilterComp && (this.eFloatingFilterBody.removeChild(this.floatingFilterComp.getGui()), this.floatingFilterComp = this.destroyBean(this.floatingFilterComp));
  }
  afterCompCreated(e) {
    if (e) {
      if (!this.isAlive()) {
        this.destroyBean(e);
        return;
      }
      this.destroyFloatingFilterComp();
      this.floatingFilterComp = e;
      this.eFloatingFilterBody.appendChild(e.getGui());
      e.afterGuiAttached && e.afterGuiAttached();
    }
  }
};
var rO = class extends iS {
  constructor(e) {
    super();
    this.ctrl = e;
    this.headerComps = {};
    this.setTemplate(`<div class="${this.ctrl.headerRowClass}" role="row"></div>`);
  }
  postConstruct() {
    P(this.getGui(), this.ctrl.getAriaRowIndex());
    this.ctrl.setComp({
      setHeight: e => this.getGui().style.height = e,
      setTop: e => this.getGui().style.top = e,
      setHeaderCtrls: (e, t) => this.setHeaderCtrls(e, t),
      setWidth: e => this.getGui().style.width = e
    }, void 0);
  }
  destroy() {
    this.setHeaderCtrls([], !1);
    super.destroy();
  }
  setHeaderCtrls(e, t) {
    if (!this.isAlive()) return;
    let i = this.headerComps;
    if (this.headerComps = {}, e.forEach(e => {
      let t = e.instanceId;
      let s = i[t];
      delete i[t];
      null == s && (s = this.createHeaderComp(e), this.getGui().appendChild(s.getGui()));
      this.headerComps[t] = s;
    }), Object.values(i).forEach(e => {
      this.getGui().removeChild(e.getGui());
      this.destroyBean(e);
    }), t) {
      let e = Object.values(this.headerComps);
      e.sort((e, t) => e.getCtrl().column.getLeft() - t.getCtrl().column.getLeft());
      let t = e.map(e => e.getGui());
      el(this.getGui(), t);
    }
  }
  createHeaderComp(e) {
    let t;
    switch (this.ctrl.type) {
      case "group":
        t = new rI(e);
        break;
      case "filter":
        t = new rL(e);
        break;
      default:
        t = new rT(e);
    }
    this.createBean(t);
    t.setParentComponent(this);
    return t;
  }
};
var rG = class extends $$tM23 {
  constructor(e, t, i, s) {
    super();
    this.columnOrGroup = e;
    this.eCell = t;
    this.colsSpanning = s;
    this.columnOrGroup = e;
    this.ariaEl = t.querySelector("[role=columnheader]") || t;
    this.beans = i;
  }
  setColsSpanning(e) {
    this.colsSpanning = e;
    this.onLeftChanged();
  }
  getColumnOrGroup() {
    let {
      beans,
      colsSpanning
    } = this;
    return beans.gos.get("enableRtl") && colsSpanning ? tq(colsSpanning) : this.columnOrGroup;
  }
  postConstruct() {
    let e = this.onLeftChanged.bind(this);
    this.addManagedListeners(this.columnOrGroup, {
      leftChanged: e
    });
    this.setLeftFirstTime();
    this.addManagedEventListeners({
      displayedColumnsWidthChanged: e
    });
    this.addManagedPropertyListener("domLayout", e);
  }
  setLeftFirstTime() {
    let {
      gos,
      colAnimation
    } = this.beans;
    let i = gos.get("suppressColumnMoveAnimation");
    let s = ew(this.columnOrGroup.getOldLeft());
    colAnimation?.isActive() && s && !i ? this.animateInLeft() : this.onLeftChanged();
  }
  animateInLeft() {
    let e = this.getColumnOrGroup();
    let t = this.modifyLeftForPrintLayout(e, e.getOldLeft());
    let i = this.modifyLeftForPrintLayout(e, e.getLeft());
    this.setLeft(t);
    this.actualLeft = i;
    this.beans.colAnimation.executeNextVMTurn(() => {
      this.actualLeft === i && this.setLeft(i);
    });
  }
  onLeftChanged() {
    let e = this.getColumnOrGroup();
    let t = e.getLeft();
    this.actualLeft = this.modifyLeftForPrintLayout(e, t);
    this.setLeft(this.actualLeft);
  }
  modifyLeftForPrintLayout(e, t) {
    let {
      gos,
      visibleCols
    } = this.beans;
    if (!ej(gos, "print") || "left" === e.getPinned()) return t;
    let r = visibleCols.getColsLeftWidth();
    return "right" === e.getPinned() ? r + visibleCols.bodyWidth + t : r + t;
  }
  setLeft(e) {
    if (ew(e) && (this.eCell.style.left = `${e}px`), sE(this.columnOrGroup)) {
      let e = this.columnOrGroup.getLeafColumns();
      e.length && e.length > 1 && w(this.ariaEl, "colspan", e.length);
    }
  }
};
var rH = 0;
var rN = "headerCtrl";
var rB = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.column = e;
    this.rowCtrl = t;
    this.resizeToggleTimeout = 0;
    this.resizeMultiplier = 1;
    this.resizeFeature = null;
    this.lastFocusEvent = null;
    this.dragSource = null;
    this.instanceId = e.getUniqueId() + "-" + rH++;
  }
  postConstruct() {
    let e = this.refreshTabIndex.bind(this);
    this.addManagedPropertyListeners(["suppressHeaderFocus"], e);
    this.addManagedEventListeners({
      overlayExclusiveChanged: e
    });
  }
  shouldStopEventPropagation(e) {
    let {
      headerRowIndex,
      column
    } = this.beans.focusSvc.focusedHeader;
    let s = column.getDefinition();
    let r = s && s.suppressHeaderKeyboardEvent;
    return !!ew(r) && !!r(ty(this.gos, {
      colDef: s,
      column,
      headerRowIndex,
      event: e
    }));
  }
  getWrapperHasFocus() {
    return e3(this.beans) === this.eGui;
  }
  setGui(e, t) {
    this.eGui = e;
    this.addDomData(t);
    t.addManagedListeners(this.beans.eventSvc, {
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this)
    });
    t.addManagedElementListeners(this.eGui, {
      focus: this.onGuiFocus.bind(this)
    });
    this.onDisplayedColumnsChanged();
    this.refreshTabIndex();
  }
  refreshHeaderStyles() {
    let e;
    let t = this.column.getDefinition();
    if (!t) return;
    let {
      headerStyle
    } = t;
    (e = "function" == typeof headerStyle ? headerStyle(this.getHeaderClassParams()) : headerStyle) && this.comp.setUserStyles(e);
  }
  onGuiFocus() {
    this.eventSvc.dispatchEvent({
      type: "headerFocused",
      column: this.column
    });
  }
  setupAutoHeight(e) {
    let t;
    let {
      wrapperElement,
      checkMeasuringCallback,
      compBean
    } = e;
    let {
      beans
    } = this;
    let n = e => {
      if (!this.isAlive() || !compBean.isAlive()) return;
      let {
        paddingTop,
        paddingBottom,
        borderBottomWidth,
        borderTopWidth
      } = _(this.eGui);
      let d = wrapperElement.offsetHeight + (paddingTop + paddingBottom + borderBottomWidth + borderTopWidth);
      if (e < 5) {
        let t = e1(beans);
        let s = !t || !t.contains(wrapperElement);
        let r = 0 == d;
        if (s || r) {
          i3(beans, () => n(e + 1));
          return;
        }
      }
      this.setColHeaderHeight(this.column, d);
    };
    let l = !1;
    let a = () => {
      let e = this.column.isAutoHeaderHeight();
      e && !l && d();
      !e && l && h();
    };
    let d = () => {
      l = !0;
      n(0);
      this.comp.addOrRemoveCssClass("ag-header-cell-auto-height", !0);
      t = $$ef15(this.beans, wrapperElement, () => n(0));
    };
    let h = () => {
      l = !1;
      t && t();
      this.comp.addOrRemoveCssClass("ag-header-cell-auto-height", !1);
      t = void 0;
    };
    a();
    compBean.addDestroyFunc(() => h());
    compBean.addManagedListeners(this.column, {
      widthChanged: () => l && n(0)
    });
    compBean.addManagedEventListeners({
      sortChanged: () => {
        l && window.setTimeout(() => n(0));
      }
    });
    checkMeasuringCallback && checkMeasuringCallback(a);
  }
  onDisplayedColumnsChanged() {
    let {
      comp,
      column,
      beans,
      eGui
    } = this;
    comp && column && eGui && (i5(comp, column, beans.visibleCols), F(eGui, beans.visibleCols.getAriaColIndex(column)));
  }
  addResizeAndMoveKeyboardListeners(e) {
    e.addManagedListeners(this.eGui, {
      keydown: this.onGuiKeyDown.bind(this),
      keyup: this.onGuiKeyUp.bind(this)
    });
  }
  refreshTabIndex() {
    let e = sr(this.beans);
    this.eGui && ep(this.eGui, "tabindex", e ? null : "-1");
  }
  onGuiKeyDown(e) {
    let t = e3(this.beans);
    let i = e.key === i4.LEFT || e.key === i4.RIGHT;
    if (this.isResizing && (e.preventDefault(), e.stopImmediatePropagation()), t !== this.eGui || !e.shiftKey && !e.altKey || ((this.isResizing || i) && (e.preventDefault(), e.stopImmediatePropagation()), !i)) return;
    let s = e.key === i4.LEFT !== this.gos.get("enableRtl");
    if (e.altKey) {
      this.isResizing = !0;
      this.resizeMultiplier += 1;
      let t = this.getViewportAdjustedResizeDiff(e);
      this.resizeHeader(t, e.shiftKey);
      this.resizeFeature?.toggleColumnResizing(!0);
    } else this.moveHeader(s ? "left" : "right");
  }
  moveHeader(e) {
    this.beans.colMoves?.moveHeader(e, this.eGui, this.column, this.rowCtrl.pinned, this);
  }
  getViewportAdjustedResizeDiff(e) {
    let t = this.getResizeDiff(e);
    let {
      pinnedCols
    } = this.beans;
    return pinnedCols ? pinnedCols.getHeaderResizeDiff(t, this.column) : t;
  }
  getResizeDiff(e) {
    let {
      gos,
      column
    } = this;
    let s = e.key === i4.LEFT !== gos.get("enableRtl");
    let r = column.getPinned();
    let o = gos.get("enableRtl");
    r && o !== ("right" === r) && (s = !s);
    return (s ? -1 : 1) * this.resizeMultiplier;
  }
  onGuiKeyUp() {
    this.isResizing && (this.resizeToggleTimeout && (window.clearTimeout(this.resizeToggleTimeout), this.resizeToggleTimeout = 0), this.isResizing = !1, this.resizeMultiplier = 1, this.resizeToggleTimeout = window.setTimeout(() => {
      this.resizeFeature?.toggleColumnResizing(!1);
    }, 150));
  }
  handleKeyDown(e) {
    let t = this.getWrapperHasFocus();
    switch (e.key) {
      case i4.PAGE_DOWN:
      case i4.PAGE_UP:
      case i4.PAGE_HOME:
      case i4.PAGE_END:
        t && e.preventDefault();
    }
  }
  addDomData(e) {
    let {
      eGui,
      gos
    } = this;
    e0(gos, eGui, rN, this);
    e.addDestroyFunc(() => e0(gos, eGui, rN, null));
  }
  focus(e) {
    let {
      eGui
    } = this;
    return !!eGui && (this.lastFocusEvent = e || null, eGui.focus(), !0);
  }
  focusThis() {
    this.beans.focusSvc.focusedHeader = {
      headerRowIndex: this.rowCtrl.rowIndex,
      column: this.column
    };
  }
  removeDragSource() {
    this.dragSource && (this.beans.dragAndDrop?.removeDragSource(this.dragSource), this.dragSource = null);
  }
  handleContextMenuMouseEvent(e, t, i) {
    let s = e ?? t;
    let {
      menuSvc,
      gos
    } = this.beans;
    gos.get("preventDefaultOnContextMenu") && s.preventDefault();
    menuSvc?.isHeaderContextMenuEnabled(i) && menuSvc.showHeaderContextMenu(i, e, t);
    this.dispatchColumnMouseEvent("columnHeaderContextMenu", i);
  }
  dispatchColumnMouseEvent(e, t) {
    this.eventSvc.dispatchEvent({
      type: e,
      column: t
    });
  }
  setColHeaderHeight(e, t) {
    if (!e.setAutoHeaderHeight(t)) return;
    let {
      eventSvc
    } = this;
    e.isColumn ? eventSvc.dispatchEvent({
      type: "columnHeaderHeightChanged",
      column: e,
      columns: [e],
      source: "autosizeColumnHeaderHeight"
    }) : eventSvc.dispatchEvent({
      type: "columnGroupHeaderHeightChanged",
      columnGroup: e,
      source: "autosizeColumnGroupHeaderHeight"
    });
  }
  clearComponent() {
    this.removeDragSource();
    this.resizeFeature = null;
    this.comp = null;
    this.eGui = null;
  }
  destroy() {
    super.destroy();
    this.column = null;
    this.lastFocusEvent = null;
    this.rowCtrl = null;
  }
};
var rV = class extends rB {
  constructor() {
    super(...arguments);
    this.refreshFunctions = {};
    this.userHeaderClasses = new Set();
    this.ariaDescriptionProperties = new Map();
  }
  setComp(e, t, i, s, r) {
    this.comp = e;
    let {
      rowCtrl,
      column,
      beans
    } = this;
    let {
      colResize,
      context,
      colHover,
      rangeSvc
    } = l;
    let c = iv(this, context, r);
    this.setGui(t, c);
    this.updateState();
    this.setupWidth(c);
    this.setupMovingCss(c);
    this.setupMenuClass(c);
    this.setupSortableClass(c);
    this.setupWrapTextClass();
    this.refreshSpanHeaderHeight();
    this.setupAutoHeight({
      wrapperElement: s,
      checkMeasuringCallback: e => this.setRefreshFunction("measuring", e),
      compBean: c
    });
    this.addColumnHoverListener(c);
    this.setupFilterClass(c);
    this.setupStylesFromColDef();
    this.setupClassesFromColDef();
    this.setupTooltip();
    this.addActiveHeaderMouseListeners(c);
    this.setupSelectAll(c);
    this.setupUserComp();
    this.refreshAria();
    colResize ? this.resizeFeature = c.createManagedBean(colResize.createResizeFeature(rowCtrl.pinned, column, i, e, this)) : U(i, !1);
    colHover?.createHoverFeature(c, [column], t);
    rangeSvc?.createRangeHighlightFeature(c, column, e);
    c.createManagedBean(new rG(column, t, beans));
    c.createManagedBean(new sH(t, {
      shouldStopEventPropagation: e => this.shouldStopEventPropagation(e),
      onTabKeyDown: () => null,
      handleKeyDown: this.handleKeyDown.bind(this),
      onFocusIn: this.onFocusIn.bind(this),
      onFocusOut: this.onFocusOut.bind(this)
    }));
    this.addResizeAndMoveKeyboardListeners(c);
    c.addManagedPropertyListeners(["suppressMovableColumns", "suppressMenuHide", "suppressAggFuncInHeader", "enableAdvancedFilter"], () => this.refresh());
    c.addManagedListeners(column, {
      colDefChanged: () => this.refresh()
    });
    c.addManagedListeners(column, {
      headerHighlightChanged: this.onHeaderHighlightChanged.bind(this)
    });
    let g = () => this.checkDisplayName();
    c.addManagedEventListeners({
      columnValueChanged: g,
      columnRowGroupChanged: g,
      columnPivotChanged: g,
      headerHeightChanged: this.onHeaderHeightChanged.bind(this)
    });
    c.addDestroyFunc(() => {
      this.refreshFunctions = {};
      this.selectAllFeature = null;
      this.dragSourceElement = void 0;
      this.userCompDetails = null;
      this.userHeaderClasses.clear();
      this.ariaDescriptionProperties.clear();
      this.clearComponent();
    });
  }
  resizeHeader(e, t) {
    this.beans.colResize?.resizeHeader(this.column, e, t);
  }
  getHeaderClassParams() {
    let {
      column,
      beans
    } = this;
    let i = column.colDef;
    return ty(beans.gos, {
      colDef: i,
      column,
      floatingFilter: !1
    });
  }
  setupUserComp() {
    let e = this.lookupUserCompDetails();
    e && this.setCompDetails(e);
  }
  setCompDetails(e) {
    this.userCompDetails = e;
    this.comp.setUserCompDetails(e);
  }
  lookupUserCompDetails() {
    let e = this.createParams();
    let t = this.column.getColDef();
    return this.beans.userCompFactory.getCompDetails(t, iF, "agColumnHeader", e);
  }
  createParams() {
    let {
      menuSvc,
      sortSvc,
      colFilter,
      gos
    } = this.beans;
    return ty(gos, {
      column: this.column,
      displayName: this.displayName,
      enableSorting: this.column.isSortable(),
      enableMenu: this.menuEnabled,
      enableFilterButton: this.openFilterEnabled && !!menuSvc?.isHeaderFilterButtonEnabled(this.column),
      enableFilterIcon: !!colFilter && (!this.openFilterEnabled || tC(this.gos)),
      showColumnMenu: (t, i) => {
        menuSvc?.showColumnMenu({
          column: this.column,
          buttonElement: t,
          positionBy: "button",
          onClosedCallback: i
        });
      },
      showColumnMenuAfterMouseClick: (t, i) => {
        menuSvc?.showColumnMenu({
          column: this.column,
          mouseEvent: t,
          positionBy: "mouse",
          onClosedCallback: i
        });
      },
      showFilter: t => {
        menuSvc?.showFilterMenu({
          column: this.column,
          buttonElement: t,
          containerType: "columnFilter",
          positionBy: "button"
        });
      },
      progressSort: e => {
        sortSvc?.progressSort(this.column, !!e, "uiColumnSorted");
      },
      setSort: (e, i) => {
        sortSvc?.setSortForColumn(this.column, e, !!i, "uiColumnSorted");
      },
      eGridHeader: this.eGui,
      setTooltip: (e, t) => {
        gos.assertModuleRegistered("Tooltip", 3);
        this.setupTooltip(e, t);
      }
    });
  }
  setupSelectAll(e) {
    let {
      selectionSvc
    } = this.beans;
    selectionSvc && (this.selectAllFeature = e.createManagedBean(selectionSvc.createSelectAllFeature(this.column)), this.selectAllFeature.setComp(this));
  }
  getSelectAllGui() {
    return this.selectAllFeature?.getCheckboxGui();
  }
  handleKeyDown(e) {
    super.handleKeyDown(e);
    e.key === i4.SPACE && this.selectAllFeature?.onSpaceKeyDown(e);
    e.key === i4.ENTER && this.onEnterKeyDown(e);
    e.key === i4.DOWN && e.altKey && this.showMenuOnKeyPress(e, !1);
  }
  onEnterKeyDown(e) {
    e.ctrlKey || e.metaKey ? this.showMenuOnKeyPress(e, !0) : this.sortable && this.beans.sortSvc?.progressSort(this.column, e.shiftKey, "uiColumnSorted");
  }
  showMenuOnKeyPress(e, t) {
    let i = this.comp.getUserCompInstance();
    rW(i) && i.onMenuKeyboardShortcut(t) && e.preventDefault();
  }
  onFocusIn(e) {
    this.eGui.contains(e.relatedTarget) || (this.focusThis(), this.announceAriaDescription());
    i8 && this.setActiveHeader(!0);
  }
  onFocusOut(e) {
    this.eGui.contains(e.relatedTarget) || this.setActiveHeader(!1);
  }
  setupTooltip(e, t) {
    this.tooltipFeature = this.beans.tooltipSvc?.setupHeaderTooltip(this.tooltipFeature, this, e, t);
  }
  setupStylesFromColDef() {
    this.setRefreshFunction("headerStyles", this.refreshHeaderStyles.bind(this));
    this.refreshHeaderStyles();
  }
  setupClassesFromColDef() {
    let e = () => {
      let e = i2(this.column.getColDef(), this.gos, this.column, null);
      let t = this.userHeaderClasses;
      this.userHeaderClasses = new Set(e);
      e.forEach(e => {
        t.has(e) ? t.$$delete(e) : this.comp.addOrRemoveCssClass(e, !0);
      });
      t.forEach(e => this.comp.addOrRemoveCssClass(e, !1));
    };
    this.setRefreshFunction("headerClasses", e);
    e();
  }
  setDragSource(e) {
    this.dragSourceElement = e;
    this.removeDragSource();
    e && this.draggable && (this.dragSource = this.beans.colMoves?.setDragSourceForHeader(e, this.column, this.displayName) ?? null);
  }
  updateState() {
    let {
      menuSvc
    } = this.beans;
    this.menuEnabled = !!menuSvc?.isColumnMenuInHeaderEnabled(this.column);
    this.openFilterEnabled = !!menuSvc?.isFilterMenuInHeaderEnabled(this.column);
    this.sortable = this.column.isSortable();
    this.displayName = this.calculateDisplayName();
    this.draggable = this.workOutDraggable();
  }
  setRefreshFunction(e, t) {
    this.refreshFunctions[e] = t;
  }
  refresh() {
    this.updateState();
    this.refreshHeaderComp();
    this.refreshAria();
    Object.values(this.refreshFunctions).forEach(e => e());
  }
  refreshHeaderComp() {
    let e = this.lookupUserCompDetails();
    e && (null != this.comp.getUserCompInstance() && this.userCompDetails.componentClass == e.componentClass && this.attemptHeaderCompRefresh(e.params) ? this.setDragSource(this.dragSourceElement) : this.setCompDetails(e));
  }
  attemptHeaderCompRefresh(e) {
    let t = this.comp.getUserCompInstance();
    return !!t && !!t.refresh && t.refresh(e);
  }
  calculateDisplayName() {
    return this.beans.colNames.getDisplayNameForColumn(this.column, "header", !0);
  }
  checkDisplayName() {
    this.displayName !== this.calculateDisplayName() && this.refresh();
  }
  workOutDraggable() {
    let e = this.column.getColDef();
    return !!(!this.gos.get("suppressMovableColumns") && !e.suppressMovable && !e.lockPosition) || !!e.enableRowGroup || !!e.enablePivot;
  }
  setupWidth(e) {
    let t = () => {
      let e = this.column.getActualWidth();
      this.comp.setWidth(`${e}px`);
    };
    e.addManagedListeners(this.column, {
      widthChanged: t
    });
    t();
  }
  setupMovingCss(e) {
    let t = () => {
      this.comp.addOrRemoveCssClass("ag-header-cell-moving", this.column.isMoving());
    };
    e.addManagedListeners(this.column, {
      movingChanged: t
    });
    t();
  }
  setupMenuClass(e) {
    let t = () => {
      this.comp?.addOrRemoveCssClass("ag-column-menu-visible", this.column.isMenuVisible());
    };
    e.addManagedListeners(this.column, {
      menuVisibleChanged: t
    });
    t();
  }
  setupSortableClass(e) {
    let t = () => {
      this.comp.addOrRemoveCssClass("ag-header-cell-sortable", !!this.sortable);
    };
    t();
    this.setRefreshFunction("updateSortable", t);
    e.addManagedEventListeners({
      sortChanged: this.refreshAriaSort.bind(this)
    });
  }
  setupFilterClass(e) {
    let t = () => {
      let e = this.column.isFilterActive();
      this.comp.addOrRemoveCssClass("ag-header-cell-filtered", e);
      this.refreshAria();
    };
    e.addManagedListeners(this.column, {
      filterActiveChanged: t
    });
    t();
  }
  setupWrapTextClass() {
    let e = () => {
      let e = !!this.column.getColDef().wrapHeaderText;
      this.comp.addOrRemoveCssClass("ag-header-cell-wrap-text", e);
    };
    e();
    this.setRefreshFunction("wrapText", e);
  }
  onHeaderHighlightChanged() {
    let e = this.column.getHighlighted();
    this.comp.addOrRemoveCssClass("ag-header-highlight-before", 0 === e);
    this.comp.addOrRemoveCssClass("ag-header-highlight-after", 1 === e);
  }
  onDisplayedColumnsChanged() {
    super.onDisplayedColumnsChanged();
    this.isAlive() && this.onHeaderHeightChanged();
  }
  onHeaderHeightChanged() {
    this.refreshSpanHeaderHeight();
  }
  refreshSpanHeaderHeight() {
    let {
      eGui,
      column,
      comp,
      beans
    } = this;
    let r = rx(this.beans);
    let o = 0 === r.reduce((e, t) => e += t, 0);
    if (comp.addOrRemoveCssClass("ag-header-parent-hidden", o), !column.isSpanHeaderHeight()) {
      eGui.style.removeProperty("top");
      eGui.style.removeProperty("height");
      comp.addOrRemoveCssClass("ag-header-span-height", !1);
      comp.addOrRemoveCssClass("ag-header-span-total", !1);
      return;
    }
    let {
      numberOfParents,
      isSpanningTotal
    } = this.column.getColumnGroupPaddingInfo();
    comp.addOrRemoveCssClass("ag-header-span-height", numberOfParents > 0);
    let a = rP(beans);
    if (0 === numberOfParents) {
      comp.addOrRemoveCssClass("ag-header-span-total", !1);
      eGui.style.setProperty("top", "0px");
      eGui.style.setProperty("height", `${a}px`);
      return;
    }
    comp.addOrRemoveCssClass("ag-header-span-total", isSpanningTotal);
    let d = 0;
    for (let e = 0; e < numberOfParents; e++) d += r[r.length - 1 - e];
    eGui.style.setProperty("top", `${-d}px`);
    eGui.style.setProperty("height", `${a + d}px`);
  }
  refreshAriaSort() {
    if (this.sortable) {
      let e = this.getLocaleTextFunc();
      let t = this.beans.sortSvc?.getDisplaySortForColumn(this.column) || null;
      this.comp.setAriaSort("asc" === t ? "ascending" : "desc" === t ? "descending" : "mixed" === t ? "other" : "none");
      this.setAriaDescriptionProperty("sort", e("ariaSortableColumn", "Press ENTER to sort"));
    } else {
      this.comp.setAriaSort();
      this.setAriaDescriptionProperty("sort", null);
    }
  }
  refreshAriaMenu() {
    if (this.menuEnabled) {
      let e = this.getLocaleTextFunc();
      this.setAriaDescriptionProperty("menu", e("ariaMenuColumn", "Press ALT DOWN to open column menu"));
    } else this.setAriaDescriptionProperty("menu", null);
  }
  refreshAriaFilterButton() {
    if (this.openFilterEnabled && !tC(this.gos)) {
      let e = this.getLocaleTextFunc();
      this.setAriaDescriptionProperty("filterButton", e("ariaFilterColumn", "Press CTRL ENTER to open filter"));
    } else this.setAriaDescriptionProperty("filterButton", null);
  }
  refreshAriaFiltered() {
    let e = this.getLocaleTextFunc();
    this.column.isFilterActive() ? this.setAriaDescriptionProperty("filter", e("ariaColumnFiltered", "Column Filtered")) : this.setAriaDescriptionProperty("filter", null);
  }
  setAriaDescriptionProperty(e, t) {
    null != t ? this.ariaDescriptionProperties.set(e, t) : this.ariaDescriptionProperties.$$delete(e);
  }
  announceAriaDescription() {
    if (!this.eGui.contains(e3(this.beans))) return;
    let e = Array.from(this.ariaDescriptionProperties.keys()).sort((e, t) => "filter" === e ? -1 : t.charCodeAt(0) - e.charCodeAt(0)).map(e => this.ariaDescriptionProperties.get(e)).join(". ");
    this.beans.ariaAnnounce?.announceValue(e, "columnHeader");
  }
  refreshAria() {
    this.refreshAriaSort();
    this.refreshAriaMenu();
    this.refreshAriaFilterButton();
    this.refreshAriaFiltered();
  }
  addColumnHoverListener(e) {
    this.beans.colHover?.addHeaderColumnHoverListener(e, this.comp, this.column);
  }
  addActiveHeaderMouseListeners(e) {
    let t = e => this.handleMouseOverChange("mouseenter" === e.type);
    e.addManagedListeners(this.eGui, {
      mouseenter: t,
      mouseleave: t,
      click: () => {
        this.setActiveHeader(!0);
        this.dispatchColumnMouseEvent("columnHeaderClicked", this.column);
      },
      contextmenu: e => this.handleContextMenuMouseEvent(e, void 0, this.column)
    });
  }
  handleMouseOverChange(e) {
    this.setActiveHeader(e);
    this.eventSvc.dispatchEvent({
      type: e ? "columnHeaderMouseOver" : "columnHeaderMouseLeave",
      column: this.column
    });
  }
  setActiveHeader(e) {
    this.comp.addOrRemoveCssClass("ag-header-active", e);
  }
  getAnchorElementForMenu(e) {
    let t = this.comp.getUserCompInstance();
    return rW(t) ? t.getAnchorElementForMenu(e) : this.eGui;
  }
  destroy() {
    this.tooltipFeature = this.destroyBean(this.tooltipFeature);
    super.destroy();
  }
};
function rW(e) {
  return "function" == typeof e.getAnchorElementForMenu && "function" == typeof e.onMenuKeyboardShortcut;
}
var rz = 0;
var rU = class extends $$tM23 {
  constructor(e, t, i) {
    super();
    this.rowIndex = e;
    this.pinned = t;
    this.type = i;
    this.instanceId = rz++;
    this.headerRowClass = `ag-header-row ${"group" == i ? "ag-header-row-column-group" : "filter" == i ? "ag-header-row-column-filter" : "ag-header-row-column"}`;
  }
  postConstruct() {
    this.isPrintLayout = ej(this.gos, "print");
    this.isEnsureDomOrder = this.gos.get("ensureDomOrder");
  }
  areCellsRendered() {
    return !!this.comp && this.getHeaderCellCtrls().every(e => null != e.eGui);
  }
  setComp(e, t, i = !0) {
    this.comp = e;
    t = iv(this, this.beans.context, t);
    i && (this.onRowHeightChanged(), this.onVirtualColumnsChanged());
    this.setWidth();
    this.addEventListeners(t);
  }
  getAriaRowIndex() {
    return this.rowIndex + 1;
  }
  addEventListeners(e) {
    let t = this.onRowHeightChanged.bind(this);
    let i = this.onDisplayedColumnsChanged.bind(this);
    e.addManagedEventListeners({
      columnResized: this.setWidth.bind(this),
      displayedColumnsChanged: i,
      virtualColumnsChanged: e => this.onVirtualColumnsChanged(e.afterScroll),
      columnGroupHeaderHeightChanged: t,
      columnHeaderHeightChanged: t,
      gridStylesChanged: t,
      advancedFilterEnabledChanged: t
    });
    e.addManagedPropertyListener("domLayout", i);
    e.addManagedPropertyListener("ensureDomOrder", e => this.isEnsureDomOrder = e.currentValue);
    e.addManagedPropertyListeners(["headerHeight", "pivotHeaderHeight", "groupHeaderHeight", "pivotGroupHeaderHeight", "floatingFiltersHeight"], t);
  }
  getHeaderCellCtrl(e) {
    if (this.headerCellCtrls) {
      for (let t of this.headerCellCtrls.values()) if (t.column === e) return t;
    }
  }
  onDisplayedColumnsChanged() {
    this.isPrintLayout = ej(this.gos, "print");
    this.onVirtualColumnsChanged();
    this.setWidth();
    this.onRowHeightChanged();
  }
  setWidth() {
    let e = this.getWidthForRow();
    this.comp.setWidth(`${e}px`);
  }
  getWidthForRow() {
    let {
      visibleCols
    } = this.beans;
    return this.isPrintLayout ? null != this.pinned ? 0 : visibleCols.getContainerWidth("right") + visibleCols.getContainerWidth("left") + visibleCols.getContainerWidth(null) : visibleCols.getContainerWidth(this.pinned);
  }
  onRowHeightChanged() {
    let {
      topOffset,
      rowHeight
    } = this.getTopAndHeight();
    this.comp.setTop(topOffset + "px");
    this.comp.setHeight(rowHeight + "px");
  }
  getTopAndHeight() {
    let {
      filterManager
    } = this.beans;
    let t = [];
    let i = rx(this.beans);
    let s = rP(this.beans);
    t.push(...i);
    t.push(s);
    filterManager?.hasFloatingFilters() && t.push(rF(this.beans));
    let r = 0;
    for (let e = 0; e < this.rowIndex; e++) r += t[e];
    return {
      topOffset: r,
      rowHeight: t[this.rowIndex]
    };
  }
  onVirtualColumnsChanged(e = !1) {
    let t = this.getHeaderCtrls();
    let i = this.isEnsureDomOrder || this.isPrintLayout;
    this.comp.setHeaderCtrls(t, i, e);
  }
  getHeaderCtrls() {
    let e = this.headerCellCtrls;
    for (let t of (this.headerCellCtrls = new Map(), this.getColumnsInViewport())) this.recycleAndCreateHeaderCtrls(t, e);
    let t = e => {
      let {
        focusSvc,
        visibleCols
      } = this.beans;
      return !!focusSvc.isHeaderWrapperFocused(e) && visibleCols.isVisible(e.column);
    };
    if (e) for (let [i, s] of e) t(s) ? this.headerCellCtrls.set(i, s) : this.destroyBean(s);
    return this.getHeaderCellCtrls();
  }
  getHeaderCellCtrls() {
    return Array.from(this.headerCellCtrls?.values() ?? []);
  }
  recycleAndCreateHeaderCtrls(e, t) {
    let i;
    if (!this.headerCellCtrls || e.isEmptyGroup()) return;
    let s = e.getUniqueId();
    if (t && (i = t.get(s), t.$$delete(s)), i && i.column != e && (this.destroyBean(i), i = void 0), null == i) switch (this.type) {
      case "filter":
        i = this.createBean(this.beans.registry.createDynamicBean("headerFilterCellCtrl", !0, e, this));
        break;
      case "group":
        i = this.createBean(this.beans.registry.createDynamicBean("headerGroupCellCtrl", !0, e, this));
        break;
      default:
        i = this.createBean(new rV(e, this));
    }
    this.headerCellCtrls.set(s, i);
  }
  getColumnsInViewport() {
    return this.isPrintLayout ? this.getColumnsInViewportPrintLayout() : this.getColumnsInViewportNormalLayout();
  }
  getColumnsInViewportPrintLayout() {
    if (null != this.pinned) return [];
    let e = [];
    let t = this.getActualDepth();
    let {
      colViewport
    } = this.beans;
    ["left", null, "right"].forEach(s => {
      let r = colViewport.getHeadersToRender(s, t);
      e = e.concat(r);
    });
    return e;
  }
  getActualDepth() {
    return "filter" == this.type ? this.rowIndex - 1 : this.rowIndex;
  }
  getColumnsInViewportNormalLayout() {
    return this.beans.colViewport.getHeadersToRender(this.pinned, this.getActualDepth());
  }
  findHeaderCellCtrl(e) {
    if (!this.headerCellCtrls) return;
    let t = this.getHeaderCellCtrls();
    return "function" == typeof e ? t.find(e) : t.find(t => t.column == e);
  }
  focusHeader(e, t) {
    let i = this.findHeaderCellCtrl(e);
    return !!i && i.focus(t);
  }
  destroy() {
    this.headerCellCtrls?.forEach(e => {
      this.destroyBean(e);
    });
    this.headerCellCtrls = void 0;
    super.destroy();
  }
};
var $$r$12 = class extends $$tM23 {
  constructor(e) {
    super();
    this.pinned = e;
    this.hidden = !1;
    this.includeFloatingFilter = !1;
    this.groupsRowCtrls = [];
  }
  setComp(e, t) {
    this.comp = e;
    this.eViewport = t;
    let {
      pinnedCols,
      ctrlsSvc,
      colModel,
      colMoves,
      filterManager
    } = this.beans;
    this.setupCenterWidth();
    pinnedCols?.setupHeaderPinnedWidth(this);
    this.setupDragAndDrop(colMoves, this.eViewport);
    let l = this.onDisplayedColumnsChanged.bind(this, filterManager);
    this.addManagedEventListeners({
      gridColumnsChanged: this.onGridColumnsChanged.bind(this),
      displayedColumnsChanged: l,
      advancedFilterEnabledChanged: l
    });
    let a = `${"string" == typeof this.pinned ? this.pinned : "center"}Header`;
    ctrlsSvc.register(a, this);
    colModel.ready && this.refresh();
  }
  getAllCtrls() {
    let e = [...this.groupsRowCtrls];
    this.columnsRowCtrl && e.push(this.columnsRowCtrl);
    this.filtersRowCtrl && e.push(this.filtersRowCtrl);
    return e;
  }
  refresh(e = !1) {
    let {
      focusSvc,
      colModel,
      filterManager
    } = this.beans;
    let r = 0;
    let o = focusSvc.getFocusHeaderToUseAfterRefresh();
    (() => {
      let e = (colModel.cols ? colModel.cols.treeDepth + 1 : -1) - 1;
      this.groupsRowCtrls = this.destroyBeans(this.groupsRowCtrls);
      for (let t = 0; t < e; t++) {
        let e = this.createBean(new rU(r++, this.pinned, "group"));
        this.groupsRowCtrls.push(e);
      }
    })();
    (() => {
      let t = r++;
      let i = !this.hidden && (null == this.columnsRowCtrl || !e || this.columnsRowCtrl.rowIndex !== t);
      (i || this.hidden) && (this.columnsRowCtrl = this.destroyBean(this.columnsRowCtrl));
      i && (this.columnsRowCtrl = this.createBean(new rU(t, this.pinned, "column")));
    })();
    (() => {
      this.includeFloatingFilter = !!filterManager?.hasFloatingFilters() && !this.hidden;
      let t = () => {
        this.filtersRowCtrl = this.destroyBean(this.filtersRowCtrl);
      };
      if (!this.includeFloatingFilter) {
        t();
        return;
      }
      let i = r++;
      if (this.filtersRowCtrl) {
        let s = this.filtersRowCtrl.rowIndex !== i;
        (!e || s) && t();
      }
      this.filtersRowCtrl || (this.filtersRowCtrl = this.createBean(new rU(i, this.pinned, "filter")));
    })();
    let n = this.getAllCtrls();
    this.comp.setCtrls(n);
    this.restoreFocusOnHeader(focusSvc, o);
  }
  getHeaderCtrlForColumn(e) {
    if (tW(e)) return this.columnsRowCtrl?.getHeaderCellCtrl(e);
    if (0 !== this.groupsRowCtrls.length) for (let t = 0; t < this.groupsRowCtrls.length; t++) {
      let i = this.groupsRowCtrls[t].getHeaderCellCtrl(e);
      if (i) return i;
    }
  }
  getHtmlElementForColumnHeader(e) {
    return this.getHeaderCtrlForColumn(e)?.eGui ?? null;
  }
  getRowType(e) {
    return this.getAllCtrls()[e]?.type;
  }
  focusHeader(e, t, i) {
    let s = this.getAllCtrls()[e];
    return !!s && s.focusHeader(t, i);
  }
  getGroupRowCount() {
    return this.groupsRowCtrls.length;
  }
  getGroupRowCtrlAtIndex(e) {
    return this.groupsRowCtrls[e];
  }
  getRowCount() {
    return this.groupsRowCtrls.length + (this.columnsRowCtrl ? 1 : 0) + (this.filtersRowCtrl ? 1 : 0);
  }
  setHorizontalScroll(e) {
    this.comp.setViewportScrollLeft(e);
  }
  onScrollCallback(e) {
    this.addManagedElementListeners(this.eViewport, {
      scroll: e
    });
  }
  destroy() {
    this.filtersRowCtrl = this.destroyBean(this.filtersRowCtrl);
    this.columnsRowCtrl = this.destroyBean(this.columnsRowCtrl);
    this.groupsRowCtrls = this.destroyBeans(this.groupsRowCtrls);
    super.destroy();
  }
  setupDragAndDrop(e, t) {
    let i = e?.createBodyDropTarget(this.pinned, t);
    i && this.createManagedBean(i);
  }
  restoreFocusOnHeader(e, t) {
    if (!t) return;
    let {
      column
    } = t;
    column.getPinned() == this.pinned && e.focusHeaderPosition({
      headerPosition: t
    });
  }
  onGridColumnsChanged() {
    this.refresh(!0);
  }
  onDisplayedColumnsChanged(e) {
    let t = !!e?.hasFloatingFilters() && !this.hidden;
    this.includeFloatingFilter !== t && this.refresh(!0);
  }
  setupCenterWidth() {
    null == this.pinned && this.createManagedBean(new sq(e => this.comp.setCenterWidth(`${e}px`), !0));
  }
};
function rK(e, t, i) {
  e.menuVisible !== t && (e.menuVisible = t, e.dispatchColEvent("menuVisibleChanged", i));
}
var r_ = class extends iS {
  constructor() {
    super();
  }
};
var rj = class extends r_ {
  init() {
    let e = eC(this.gos.get("overlayLoadingTemplate")?.trim());
    if (this.setTemplate(e ?? '<span aria-live="polite" aria-atomic="true" class="ag-overlay-loading-center"></span>'), !e) {
      let e = this.getLocaleTextFunc();
      setTimeout(() => {
        this.getGui().textContent = e("loadingOoo", "Loading...");
      });
    }
  }
};
var rq = class extends r_ {
  init() {
    let e = eC(this.gos.get("overlayNoRowsTemplate")?.trim());
    if (this.setTemplate(e ?? '<span class="ag-overlay-no-rows-center"></span>'), !e) {
      let e = this.getLocaleTextFunc();
      setTimeout(() => {
        this.getGui().textContent = e("noRowsToShow", "No Rows To Show");
      });
    }
  }
};
function rY(e, t, i) {
  let s = null;
  "smallDown" === e ? $$eW42(262) : "smallLeft" === e ? $$eW42(263) : "smallRight" === e && $$eW42(264);
  let r = i && i.getColDef().icons;
  if (r && (s = r[e]), t.gos && !s) {
    let i = t.gos.get("icons");
    i && (s = i[e]);
  }
  if (s) {
    let t;
    if ("function" == typeof s) t = s();else if ("string" == typeof s) t = s;else {
      $$eW42(38, {
        iconName: e
      });
      return;
    }
    return "string" == typeof t ? eo(t) : eg(t) ? t : void $$eW42(133, {
      iconName: e
    });
  }
  {
    let i = document.createElement("span");
    let s = t.registry.getIcon(e);
    s || t.validation?.validateIcon(e);
    let r = s ?? e;
    i.setAttribute("class", `ag-icon ag-icon-${r}`);
    i.setAttribute("unselectable", "on");
    b(i, "presentation");
    return i;
  }
}
var rJ = class extends iS {
  constructor() {
    super();
    this.dragSource = null;
    this.eIcon = null;
    this.eLabel = null;
    this.registerCSS(".ag-dnd-ghost{align-items:center;background-color:var(--ag-drag-and-drop-image-background-color);border:var(--ag-drag-and-drop-image-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-drag-and-drop-image-shadow);color:var(--ag-text-color);cursor:move;display:flex;font-weight:500;gap:var(--ag-cell-widget-spacing);height:var(--ag-header-height);overflow:hidden;padding-left:var(--ag-cell-horizontal-padding);padding-right:var(--ag-cell-horizontal-padding);text-overflow:ellipsis;transform:translateY(calc(var(--ag-spacing)*2));white-space:nowrap}");
  }
  postConstruct() {
    let e = e => function (e, t, i) {
      let s = rY(e, t, null);
      if (s) {
        let {
          className
        } = s;
        if ("string" == typeof className && className.indexOf("ag-icon") > -1 || "object" == typeof className && className["ag-icon"]) return s;
      }
      let r = document.createElement("span");
      r.appendChild(s);
      return r;
    }(e, this.beans, 0);
    this.dropIconMap = {
      pinned: e("columnMovePin"),
      hide: e("columnMoveHide"),
      move: e("columnMoveMove"),
      left: e("columnMoveLeft"),
      right: e("columnMoveRight"),
      group: e("columnMoveGroup"),
      aggregate: e("columnMoveValue"),
      pivot: e("columnMovePivot"),
      notAllowed: e("dropNotAllowed")
    };
  }
  init(e) {
    this.dragSource = e.dragSource;
    this.setTemplate(`<div class="ag-dnd-ghost ag-unselectable">
                <span data-ref="eIcon" class="ag-dnd-ghost-icon ag-shake-left-to-right"></span>
                <div data-ref="eLabel" class="ag-dnd-ghost-label"></div>
            </div>`);
  }
  destroy() {
    this.dragSource = null;
    super.destroy();
  }
  setIcon(e, t) {
    let {
      eIcon,
      dragSource,
      dropIconMap,
      gos
    } = this;
    et(eIcon);
    let n = null;
    e || (e = dragSource?.getDefaultIconName ? dragSource.getDefaultIconName() : "notAllowed");
    n = dropIconMap[e];
    eIcon.classList.toggle("ag-shake-left-to-right", t);
    !(n === dropIconMap.hide && gos.get("suppressDragLeaveHidesColumns")) && n && eIcon.appendChild(n);
  }
  setLabel(e) {
    this.eLabel.textContent = e;
  }
};
var rZ = class extends iS {
  constructor(e, t, i) {
    super(t, i);
    this.labelSeparator = "";
    this.labelAlignment = "left";
    this.disabled = !1;
    this.label = "";
    this.config = e || {};
    this.registerCSS(".ag-label{white-space:nowrap}:where(.ag-ltr) .ag-label{margin-right:var(--ag-spacing)}:where(.ag-rtl) .ag-label{margin-left:var(--ag-spacing)}:where(.ag-label-align-right) .ag-label{order:1}:where(.ag-ltr) :where(.ag-label-align-right) .ag-label{margin-left:var(--ag-spacing)}:where(.ag-rtl) :where(.ag-label-align-right) .ag-label{margin-right:var(--ag-spacing)}.ag-label-align-right>*{flex:none}.ag-label-align-top{align-items:flex-start;flex-direction:column;>*{align-self:stretch}}.ag-label-ellipsis{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(.ag-label-align-top) .ag-label{margin-bottom:calc(var(--ag-spacing)*.5)}");
  }
  postConstruct() {
    this.addCssClass("ag-labeled");
    this.eLabel.classList.add("ag-label");
    let {
      labelSeparator,
      label,
      labelWidth,
      labelAlignment,
      disabled
    } = this.config;
    null != disabled && this.setDisabled(disabled);
    null != labelSeparator && this.setLabelSeparator(labelSeparator);
    null != label && this.setLabel(label);
    null != labelWidth && this.setLabelWidth(labelWidth);
    this.setLabelAlignment(labelAlignment || this.labelAlignment);
    this.refreshLabel();
  }
  refreshLabel() {
    let {
      label,
      eLabel
    } = this;
    et(eLabel);
    "string" == typeof label ? eLabel.innerText = label + this.labelSeparator : label && eLabel.appendChild(label);
    "" === label ? (U(eLabel, !1), b(eLabel, "presentation")) : (U(eLabel, !0), b(eLabel, null));
  }
  setLabelSeparator(e) {
    this.labelSeparator === e || (this.labelSeparator = e, null != this.label && this.refreshLabel());
    return this;
  }
  getLabelId() {
    let e = this.eLabel;
    e.id = e.id || `ag-${this.getCompId()}-label`;
    return e.id;
  }
  getLabel() {
    return this.label;
  }
  setLabel(e) {
    this.label === e || (this.label = e, this.refreshLabel());
    return this;
  }
  setLabelAlignment(e) {
    let t = this.getGui().classList;
    t.toggle("ag-label-align-left", "left" === e);
    t.toggle("ag-label-align-right", "right" === e);
    t.toggle("ag-label-align-top", "top" === e);
    return this;
  }
  setLabelEllipsis(e) {
    this.eLabel.classList.toggle("ag-label-ellipsis", e);
    return this;
  }
  setLabelWidth(e) {
    null == this.label || ed(this.eLabel, e);
    return this;
  }
  setDisabled(e) {
    e = !!e;
    let t = this.getGui();
    $(t, e);
    t.classList.toggle("ag-disabled", e);
    this.disabled = e;
    return this;
  }
  isDisabled() {
    return !!this.disabled;
  }
};
var rX = class extends rZ {
  constructor(e, t, i, s) {
    super(e, t, i);
    this.className = s;
  }
  postConstruct() {
    super.postConstruct();
    let {
      width,
      value,
      onValueChange
    } = this.config;
    null != width && this.setWidth(width);
    null != value && this.setValue(value);
    null != onValueChange && this.onValueChange(onValueChange);
    this.className && this.addCssClass(this.className);
    this.refreshAriaLabelledBy();
  }
  setLabel(e) {
    super.setLabel(e);
    this.refreshAriaLabelledBy();
    return this;
  }
  refreshAriaLabelledBy() {
    let e = this.getAriaElement();
    let t = this.getLabelId();
    let i = this.getLabel();
    null == i || "" == i || null !== e.getAttribute("aria-label") ? S(e, "") : S(e, t ?? "");
  }
  setAriaLabel(e) {
    y(this.getAriaElement(), e);
    this.refreshAriaLabelledBy();
    return this;
  }
  onValueChange(e) {
    this.addManagedListeners(this, {
      fieldValueChanged: () => e(this.getValue())
    });
    return this;
  }
  getWidth() {
    return this.getGui().clientWidth;
  }
  setWidth(e) {
    eh(this.getGui(), e);
    return this;
  }
  getPreviousValue() {
    return this.previousValue;
  }
  getValue() {
    return this.value;
  }
  setValue(e, t) {
    this.value === e || (this.previousValue = this.value, this.value = e, t || this.dispatchLocalEvent({
      type: "fieldValueChanged"
    }));
    return this;
  }
};
var rQ = class extends rX {
  constructor(e, t, i = "text", s = "input") {
    super(e, e?.template ?? `
            <div role="presentation">
                <div data-ref="eLabel" class="ag-input-field-label"></div>
                <div data-ref="eWrapper" class="ag-wrapper ag-input-wrapper" role="presentation">
                    <${s} data-ref="eInput" class="ag-input-field-input"></${s}>
                </div>
            </div>`, [], t);
    this.inputType = i;
    this.displayFieldTag = s;
    this.eLabel = null;
    this.eWrapper = null;
    this.eInput = null;
  }
  postConstruct() {
    super.postConstruct();
    this.setInputType();
    let {
      eLabel,
      eWrapper,
      eInput,
      className
    } = this;
    eLabel.classList.add(`${className}-label`);
    eWrapper.classList.add(`${className}-input-wrapper`);
    eInput.classList.add(`${className}-input`);
    this.addCssClass("ag-input-field");
    eInput.id = eInput.id || `ag-${this.getCompId()}-input`;
    let {
      inputName,
      inputWidth
    } = this.config;
    null != inputName && this.setInputName(inputName);
    null != inputWidth && this.setInputWidth(inputWidth);
    this.addInputListeners();
    this.activateTabIndex([eInput]);
  }
  addInputListeners() {
    this.addManagedElementListeners(this.eInput, {
      input: e => this.setValue(e.target.value)
    });
  }
  setInputType() {
    "input" === this.displayFieldTag && this.eInput.setAttribute("type", this.inputType);
  }
  getInputElement() {
    return this.eInput;
  }
  setInputWidth(e) {
    ed(this.eWrapper, e);
    return this;
  }
  setInputName(e) {
    this.getInputElement().setAttribute("name", e);
    return this;
  }
  getFocusableElement() {
    return this.eInput;
  }
  setMaxLength(e) {
    this.eInput.maxLength = e;
    return this;
  }
  setInputPlaceholder(e) {
    ep(this.eInput, "placeholder", e);
    return this;
  }
  setInputAriaLabel(e) {
    y(this.eInput, e);
    this.refreshAriaLabelledBy();
    return this;
  }
  setDisabled(e) {
    $(this.eInput, e);
    return super.setDisabled(e);
  }
  setAutoComplete(e) {
    !0 === e ? ep(this.eInput, "autocomplete", null) : ep(this.eInput, "autocomplete", "string" == typeof e ? e : "off");
    return this;
  }
};
var r0 = class extends rQ {
  constructor(e, t = "ag-checkbox", i = "checkbox") {
    super(e, t, i);
    this.labelAlignment = "right";
    this.selected = !1;
    this.readOnly = !1;
    this.passive = !1;
  }
  postConstruct() {
    super.postConstruct();
    let {
      readOnly,
      passive
    } = this.config;
    "boolean" == typeof readOnly && this.setReadOnly(readOnly);
    "boolean" == typeof passive && this.setPassive(passive);
  }
  addInputListeners() {
    this.addManagedElementListeners(this.eInput, {
      click: this.onCheckboxClick.bind(this)
    });
    this.addManagedElementListeners(this.eLabel, {
      click: this.toggle.bind(this)
    });
  }
  getNextValue() {
    return void 0 === this.selected || !this.selected;
  }
  setPassive(e) {
    this.passive = e;
  }
  isReadOnly() {
    return this.readOnly;
  }
  setReadOnly(e) {
    this.eWrapper.classList.toggle("ag-disabled", e);
    this.eInput.disabled = e;
    this.readOnly = e;
  }
  setDisabled(e) {
    this.eWrapper.classList.toggle("ag-disabled", e);
    return super.setDisabled(e);
  }
  toggle() {
    if (this.eInput.disabled) return;
    let e = this.isSelected();
    let t = this.getNextValue();
    this.passive ? this.dispatchChange(t, e) : this.setValue(t);
  }
  getValue() {
    return this.isSelected();
  }
  setValue(e, t) {
    this.refreshSelectedClass(e);
    this.setSelected(e, t);
    return this;
  }
  setName(e) {
    this.getInputElement().name = e;
    return this;
  }
  isSelected() {
    return this.selected;
  }
  setSelected(e, t) {
    if (this.isSelected() === e) return;
    this.previousValue = this.isSelected();
    e = this.selected = "boolean" == typeof e ? e : void 0;
    let i = this.eInput;
    i.checked = e;
    i.indeterminate = void 0 === e;
    t || this.dispatchChange(this.selected, this.previousValue);
  }
  dispatchChange(e, t, i) {
    this.dispatchLocalEvent({
      type: "fieldValueChanged",
      selected: e,
      previousValue: t,
      event: i
    });
    let s = this.getInputElement();
    this.eventSvc.dispatchEvent({
      type: "checkboxChanged",
      id: s.id,
      name: s.name,
      selected: e,
      previousValue: t
    });
  }
  onCheckboxClick(e) {
    if (this.passive || this.eInput.disabled) return;
    let t = this.isSelected();
    let i = this.selected = e.target.checked;
    this.refreshSelectedClass(i);
    this.dispatchChange(i, t, e);
  }
  refreshSelectedClass(e) {
    let t = this.eWrapper.classList;
    t.toggle("ag-checked", !0 === e);
    t.toggle("ag-indeterminate", null == e);
  }
};
var r1 = {
  selector: "AG-CHECKBOX",
  component: r0
};
var r2 = class extends iS {
  constructor() {
    super(`
            <div class="ag-cell-wrapper ag-checkbox-cell" role="presentation">
                <ag-checkbox role="presentation" data-ref="eCheckbox"></ag-checkbox>
            </div>`, [r1]);
    this.eCheckbox = null;
    this.registerCSS(".ag-checkbox-cell{height:100%}");
  }
  init(e) {
    this.refresh(e);
    let {
      eCheckbox,
      beans
    } = this;
    let s = eCheckbox.getInputElement();
    s.setAttribute("tabindex", "-1");
    C(s, "live", "polite");
    this.addManagedListeners(s, {
      click: e => {
        if (tP(e), eCheckbox.isDisabled()) return;
        let i = eCheckbox.getValue();
        this.onCheckboxChanged(i);
      },
      dblclick: e => {
        tP(e);
      }
    });
    this.addManagedElementListeners(e.eGridCell, {
      keydown: s => {
        if (s.key === i4.SPACE && !eCheckbox.isDisabled()) {
          e.eGridCell === e3(beans) && eCheckbox.toggle();
          let r = eCheckbox.getValue();
          this.onCheckboxChanged(r);
          s.preventDefault();
        }
      }
    });
  }
  refresh(e) {
    this.params = e;
    this.updateCheckbox(e);
    return !0;
  }
  updateCheckbox(e) {
    let t;
    let i = !0;
    let {
      value,
      column,
      node
    } = e;
    if (node.group && column) {
      if ("boolean" == typeof value) t = value;else {
        let e = column.getColId();
        e.startsWith(tX) ? t = null == value || "" === value ? void 0 : "true" === value : node.aggData && void 0 !== node.aggData[e] ? t = value ?? void 0 : i = !1;
      }
    } else t = value ?? void 0;
    let {
      eCheckbox
    } = this;
    if (!i) {
      eCheckbox.setDisplayed(!1);
      return;
    }
    eCheckbox.setValue(t);
    let l = e.disabled ?? !column?.isCellEditable(node);
    eCheckbox.setDisabled(l);
    let a = this.getLocaleTextFunc();
    let d = T(a, t);
    let h = l ? d : `${a("ariaToggleCellValue", "Press SPACE to toggle cell value")} (${d})`;
    eCheckbox.setInputAriaLabel(h);
  }
  onCheckboxChanged(e) {
    let {
      eventSvc,
      params
    } = this;
    let {
      column,
      node,
      value
    } = i;
    let n = {
      column,
      colDef: column.getColDef(),
      data: node.data,
      node,
      rowIndex: node.rowIndex,
      rowPinned: node.rowPinned,
      value
    };
    eventSvc.dispatchEvent({
      type: "cellEditingStarted",
      ...n
    });
    let l = node.setDataValue(column, e, "edit");
    eventSvc.dispatchEvent({
      type: "cellEditingStopped",
      ...n,
      oldValue: value,
      newValue: e,
      valueChanged: l
    });
    l || this.updateCheckbox(params);
  }
};
var r5 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.nextId = 0;
    this.allNodesMap = {};
    this.rootNode = null;
  }
  get treeData() {
    return !1;
  }
  getRowNode(e) {
    return this.allNodesMap[e];
  }
  extractRowData() {
    return this.rootNode?.allLeafChildren?.map(e => e.data);
  }
  activate(e) {
    this.rootNode = e;
    e.group = !0;
    e.level = -1;
    e.id = "ROOT_NODE_ID";
    e.allLeafChildren = [];
    e.childrenAfterGroup = [];
    e.childrenAfterSort = [];
    e.childrenAfterAggFilter = [];
    e.childrenAfterFilter = [];
    this.updateRootSiblingArrays(e);
  }
  deactivate() {
    this.rootNode && (this.allNodesMap = {}, this.rootNode = null);
  }
  destroy() {
    super.destroy();
    this.allNodesMap = {};
    this.rootNode = null;
  }
  setNewRowData(e) {
    let t = this.rootNode;
    t && (this.dispatchRowDataUpdateStartedEvent(e), t.childrenAfterFilter = null, t.childrenAfterGroup = null, t.childrenAfterAggFilter = null, t.childrenAfterSort = null, t.childrenMapped = null, t.updateHasChildren(), this.allNodesMap = {}, this.nextId = 0, this.loadNewRowData(e), this.updateRootSiblingArrays(t));
  }
  updateRootSiblingArrays(e) {
    let t = e.sibling;
    t && (t.childrenAfterFilter = e.childrenAfterFilter, t.childrenAfterGroup = e.childrenAfterGroup, t.childrenAfterAggFilter = e.childrenAfterAggFilter, t.childrenAfterSort = e.childrenAfterSort, t.childrenMapped = e.childrenMapped, t.allLeafChildren = e.allLeafChildren);
  }
  loadNewRowData(e) {
    this.rootNode.allLeafChildren = e?.map((e, t) => this.createRowNode(e, t)) ?? [];
  }
  setImmutableRowData(e, t) {
    let i = ti(this.gos);
    let s = !this.gos.get("suppressMaintainUnsortedOrder");
    let r = e.changedRowNodes;
    let o = new Set();
    let n = this.rootNode;
    let l = n.allLeafChildren;
    let a = l.length;
    let d = !1;
    let h = !1;
    let u = !1;
    let c = !1;
    for (function () {
      let e = 0;
      let n = -1;
      let l = t.length;
    }(); e < l; e++) {
      let l = t[e];
      let a = this.getRowNode(i({
        data: l,
        level: 0
      }));
      if (a) {
        if (s) {
          let e = a.sourceRowIndex;
          c || (c = e <= n || d);
          n = e;
        }
        a.data !== l && (u = !0, a.updateData(l), r.update(a));
      } else {
        d = !0;
        a = this.createRowNode(l, -1);
        r.add(a);
      }
      o.add(a);
    }
    let g = [];
    for (let e = 0; e < a; e++) {
      let t = l[e];
      o.has(t) || (h = !0, t.isSelected() && g.push(t), this.rowNodeDeleted(t), r.remove(t));
    }
    if (d || h || c) {
      let t = Array(o.size);
      let i = 0;
      if (!s) for (let e = 0; e < a; ++e) {
        let s = l[e];
        o.$$delete(s) && (s.sourceRowIndex = i, t[i++] = s);
      }
      for (let e of o) {
        e.sourceRowIndex = i;
        t[i++] = e;
      }
      n.allLeafChildren = t;
      let r = n.sibling;
      r && (r.allLeafChildren = t);
      e.rowNodesOrderChanged || (e.rowNodesOrderChanged = c);
    }
    (d || h || c || u) && (this.deselectNodes(g), e.rowDataUpdated = !0);
  }
  rowNodeDeleted(e) {
    e.clearRowTopAndRowIndex();
    let t = e.id;
    let i = this.allNodesMap;
    i[t] === e && delete i[t];
  }
  updateRowData(e, t) {
    this.dispatchRowDataUpdateStartedEvent(e.add);
    let i = {
      changedRowNodes: t,
      rowNodeTransaction: {
        remove: [],
        update: [],
        add: []
      },
      rowsInserted: !1
    };
    let s = [];
    let r = ti(this.gos);
    this.executeRemove(r, e, i, s);
    this.executeUpdate(r, e, i, s);
    this.executeAdd(e, i);
    this.deselectNodes(s);
    return i;
  }
  executeAdd(e, t) {
    let i = e.add;
    if (!i?.length) return;
    let s = this.rootNode.allLeafChildren;
    let r = s.length;
    if ("number" == typeof e.addIndex && (r = this.sanitizeAddIndex(e.addIndex)) > 0 && this.gos.get("treeData") && this.gos.get("getDataPath")) for (let e = 0; e < s.length; e++) {
      let t = s[e];
      if (t?.rowIndex == r - 1) {
        r = e + 1;
        break;
      }
    }
    let o = i.length;
    let n = t.changedRowNodes;
    let l = Array(o);
    for (let e = 0; e < o; e++) {
      let t = this.createRowNode(i[e], r + e);
      n.add(t);
      l[e] = t;
    }
    let a = this.rootNode;
    if (r < s.length) {
      let e = s.slice(0, r);
      let i = s.slice(r, s.length);
      let o = e.length + l.length;
      for (function () {
        let e = 0;
        let t = i.length;
      }(); e < t; ++e) i[e].sourceRowIndex = o + e;
      s = [...e, ...l, ...i];
      t.rowsInserted = !0;
    } else s = s.concat(l);
    a.allLeafChildren = s;
    let d = a.sibling;
    d && (d.allLeafChildren = s);
    t.rowNodeTransaction.add = l;
  }
  executeRemove(e, t, {
    changedRowNodes: i,
    rowNodeTransaction: s
  }, r) {
    let {
      remove
    } = t;
    if (!remove?.length) return;
    let n = {};
    remove.forEach(t => {
      let o = this.lookupRowNode(e, t);
      o && (o.isSelected() && r.push(o), o.clearRowTopAndRowIndex(), n[o.id] = !0, delete this.allNodesMap[o.id], s.remove.push(o), i.remove(o));
    });
    let l = this.rootNode;
    l.allLeafChildren = l.allLeafChildren?.filter(e => !n[e.id]) ?? null;
    l.allLeafChildren?.forEach((e, t) => {
      e.sourceRowIndex = t;
    });
    let a = l.sibling;
    a && (a.allLeafChildren = l.allLeafChildren);
  }
  executeUpdate(e, t, {
    changedRowNodes: i,
    rowNodeTransaction: s
  }, r) {
    let {
      update
    } = t;
    update?.length && update.forEach(t => {
      let o = this.lookupRowNode(e, t);
      o && (o.updateData(t), !o.selectable && o.isSelected() && r.push(o), s.update.push(o), i.update(o));
    });
  }
  dispatchRowDataUpdateStartedEvent(e) {
    this.eventSvc.dispatchEvent({
      type: "rowDataUpdateStarted",
      firstRowData: e?.length ? e[0] : null
    });
  }
  deselectNodes(e) {
    let t = "rowDataChanged";
    let i = this.beans.selectionSvc;
    let s = e.length > 0;
    s && i?.setNodesSelected({
      newValue: !1,
      nodes: e,
      suppressFinishActions: !0,
      source: t
    });
    i?.updateGroupsFromChildrenSelections?.(t);
    s && this.eventSvc.dispatchEvent({
      type: "selectionChanged",
      source: t
    });
  }
  sanitizeAddIndex(e) {
    let t = this.rootNode.allLeafChildren?.length ?? 0;
    return e < 0 || e >= t || Number.isNaN(e) ? t : Math.ceil(e);
  }
  createRowNode(e, t) {
    let i = new sM(this.beans);
    i.parent = this.rootNode;
    i.level = 0;
    i.group = !1;
    i.expanded = !1;
    i.sourceRowIndex = t;
    i.setDataAndId(e, String(this.nextId));
    this.allNodesMap[i.id] && $$eW42(2, {
      nodeId: i.id
    });
    this.allNodesMap[i.id] = i;
    this.nextId++;
    return i;
  }
  lookupRowNode(e, t) {
    let i;
    if (e) {
      let s = e({
        data: t,
        level: 0
      });
      if (!(i = this.allNodesMap[s])) {
        ez(4, {
          id: s
        });
        return null;
      }
    } else if (!(i = this.rootNode?.allLeafChildren?.find(e => e.data === t))) {
      ez(5, {
        data: t
      });
      return null;
    }
    return i || null;
  }
};
var r3 = (e => (e.Applied = "Applied", e.StoreNotFound = "StoreNotFound", e.StoreLoading = "StoreLoading", e.StoreWaitingToLoad = "StoreWaitingToLoad", e.StoreLoadingFailed = "StoreLoadingFailed", e.StoreWrongType = "StoreWrongType", e.Cancelled = "Cancelled", e.StoreNotStarted = "StoreNotStarted", e))(r3 || {});
var r6 = class extends iS {
  constructor() {
    super(`
            <div class="ag-selection-checkbox" role="presentation">
                <ag-checkbox role="presentation" data-ref="eCheckbox"></ag-checkbox>
            </div>`, [r1]);
    this.eCheckbox = null;
  }
  postConstruct() {
    this.eCheckbox.setPassive(!0);
  }
  getCheckboxId() {
    return this.eCheckbox.getInputElement().id;
  }
  onDataChanged() {
    this.onSelectionChanged();
  }
  onSelectableChanged() {
    this.showOrHideSelect();
  }
  onSelectionChanged() {
    let e = this.getLocaleTextFunc();
    let {
      rowNode,
      eCheckbox
    } = this;
    let s = rowNode.isSelected();
    let r = T(e, s);
    let [o, n] = rowNode.selectable ? ["ariaRowToggleSelection", "Press Space to toggle row selection"] : ["ariaRowSelectionDisabled", "Row Selection is disabled for this row"];
    let l = e(o, n);
    eCheckbox.setValue(s, !0);
    eCheckbox.setInputAriaLabel(`${l} (${r})`);
  }
  init(e) {
    if (this.rowNode = e.rowNode, this.column = e.column, this.overrides = e.overrides, this.onSelectionChanged(), this.addManagedListeners(this.eCheckbox.getInputElement(), {
      dblclick: tP,
      click: e => {
        tP(e);
        this.beans.selectionSvc?.handleSelectionEvent(e, this.rowNode, "checkboxSelected");
      }
    }), this.addManagedListeners(this.rowNode, {
      rowSelected: this.onSelectionChanged.bind(this),
      dataChanged: this.onDataChanged.bind(this),
      selectableChanged: this.onSelectableChanged.bind(this)
    }), this.addManagedPropertyListener("rowSelection", ({
      currentValue: e,
      previousValue: t
    }) => {
      ("object" == typeof e ? tn(e) : void 0) !== ("object" == typeof t ? tn(t) : void 0) && this.onSelectableChanged();
    }), td(this.gos) || "function" == typeof this.getIsVisible()) {
      let e = this.showOrHideSelect.bind(this);
      this.addManagedEventListeners({
        displayedColumnsChanged: e
      });
      this.addManagedListeners(this.rowNode, {
        dataChanged: e,
        cellChanged: e
      });
      this.showOrHideSelect();
    }
    this.eCheckbox.getInputElement().setAttribute("tabindex", "-1");
  }
  showOrHideSelect() {
    let {
      column,
      rowNode,
      overrides,
      gos
    } = this;
    let r = rowNode.selectable;
    let o = this.getIsVisible();
    if (r) {
      if ("function" == typeof o) {
        let s = overrides?.callbackParams;
        if (column) {
          let i = column.createColumnFunctionCallbackParams(rowNode);
          r = o({
            ...s,
            ...i
          });
        } else r = o({
          ...s,
          node: rowNode,
          data: rowNode.data
        });
      } else r = o ?? !1;
    }
    let n = gos.get("rowSelection");
    if (n && "string" != typeof n ? !tn(n) : column?.getColDef().showDisabledCheckboxes) {
      this.eCheckbox.setDisabled(!r);
      this.setVisible(!0);
      this.setDisplayed(!0);
      return;
    }
    if (overrides?.removeHidden) {
      this.setDisplayed(r);
      return;
    }
    this.setVisible(r);
  }
  getIsVisible() {
    let e = this.overrides;
    if (e) return e.isVisible;
    let t = this.gos.get("rowSelection");
    return t && "string" != typeof t ? ts(t) : this.column?.getColDef()?.checkboxSelection;
  }
};
var r4 = class {
  constructor(e) {
    this.rowModel = e;
    this.selectAll = !1;
    this.rootId = null;
    this.endId = null;
    this.cachedRange = [];
  }
  reset() {
    this.rootId = null;
    this.endId = null;
    this.cachedRange.length = 0;
  }
  setRoot(e) {
    this.rootId = e.id;
    this.endId = null;
    this.cachedRange.length = 0;
  }
  setEndRange(e) {
    this.endId = e.id;
    this.cachedRange.length = 0;
  }
  getRange() {
    if (0 === this.cachedRange.length) {
      let e = this.getRoot();
      let t = this.getEnd();
      if (null == e || null == t) return this.cachedRange;
      this.cachedRange = this.rowModel.getNodesInRangeForSelection(e, t) ?? [];
    }
    return this.cachedRange;
  }
  isInRange(e) {
    return null !== this.rootId && this.getRange().some(t => t.id === e.id);
  }
  getRoot(e) {
    return this.rootId ? this.rowModel.getRowNode(this.rootId) ?? null : e ? (this.setRoot(e), e) : null;
  }
  getEnd() {
    return this.endId ? this.rowModel.getRowNode(this.endId) ?? null : null;
  }
  truncate(e) {
    let t = this.getRange();
    if (0 === t.length) return {
      keep: [],
      discard: []
    };
    let i = t[0].id === this.rootId;
    let s = t.findIndex(t => t.id === e.id);
    if (!(s > -1)) return {
      keep: t,
      discard: []
    };
    {
      let r = t.slice(0, s);
      let o = t.slice(s + 1);
      this.setEndRange(e);
      return i ? {
        keep: r,
        discard: o
      } : {
        keep: o,
        discard: r
      };
    }
  }
  extend(e, t = !1) {
    let i = this.getRoot();
    if (null == i) {
      let i = this.getRange().slice();
      t && e.depthFirstSearch(e => !e.group && i.push(e));
      i.push(e);
      this.setRoot(e);
      return {
        keep: i,
        discard: []
      };
    }
    let s = this.rowModel.getNodesInRangeForSelection(i, e);
    if (!s) {
      this.setRoot(e);
      return {
        keep: [e],
        discard: []
      };
    }
    if (s.find(e => e.id === this.endId)) {
      this.setEndRange(e);
      return {
        keep: this.getRange(),
        discard: []
      };
    }
    {
      let t = this.getRange().slice();
      this.setEndRange(e);
      return {
        keep: this.getRange(),
        discard: t
      };
    }
  }
};
var r8 = class extends $$tM23 {
  constructor(e) {
    super();
    this.column = e;
    this.cbSelectAllVisible = !1;
    this.processingEventFromCheckbox = !1;
  }
  onSpaceKeyDown(e) {
    let t = this.cbSelectAll;
    t.isDisplayed() && !t.getGui().contains(e3(this.beans)) && (e.preventDefault(), t.setValue(!t.getValue()));
  }
  getCheckboxGui() {
    return this.cbSelectAll.getGui();
  }
  setComp(e) {
    this.headerCellCtrl = e;
    let t = this.createManagedBean(new r0());
    this.cbSelectAll = t;
    t.addCssClass("ag-header-select-all");
    b(t.getGui(), "presentation");
    this.showOrHideSelectAll();
    this.addManagedEventListeners({
      newColumnsLoaded: () => this.showOrHideSelectAll(),
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this),
      selectionChanged: this.onSelectionChanged.bind(this),
      paginationChanged: this.onSelectionChanged.bind(this),
      modelUpdated: this.onModelChanged.bind(this)
    });
    this.addManagedPropertyListener("rowSelection", ({
      currentValue: e,
      previousValue: t
    }) => {
      let i = e => "string" != typeof e && e && "singleRow" !== e.mode ? e.selectAll : void 0;
      i(e) !== i(t) && this.showOrHideSelectAll();
    });
    this.addManagedListeners(t, {
      fieldValueChanged: this.onCbSelectAll.bind(this)
    });
    t.getInputElement().setAttribute("tabindex", "-1");
    this.refreshSelectAllLabel();
  }
  onDisplayedColumnsChanged(e) {
    this.isAlive() && this.showOrHideSelectAll("uiColumnMoved" === e.source);
  }
  showOrHideSelectAll(e = !1) {
    let t = this.isCheckboxSelection();
    this.cbSelectAllVisible = t;
    this.cbSelectAll.setDisplayed(t);
    t && (this.checkRightRowModelType("selectAllCheckbox"), this.checkSelectionType("selectAllCheckbox"), this.updateStateOfCheckbox());
    this.refreshSelectAllLabel(e);
  }
  onModelChanged() {
    this.cbSelectAllVisible && this.updateStateOfCheckbox();
  }
  onSelectionChanged() {
    this.cbSelectAllVisible && this.updateStateOfCheckbox();
  }
  updateStateOfCheckbox() {
    if (this.processingEventFromCheckbox) return;
    this.processingEventFromCheckbox = !0;
    let e = this.getSelectAllMode();
    let t = this.beans.selectionSvc;
    let i = this.cbSelectAll;
    let s = t.getSelectAllState(e);
    i.setValue(s);
    let r = t.hasNodesToSelect(e);
    i.setDisabled(!r);
    this.refreshSelectAllLabel();
    this.processingEventFromCheckbox = !1;
  }
  refreshSelectAllLabel(e = !1) {
    let t = this.getLocaleTextFunc();
    let {
      headerCellCtrl,
      cbSelectAll,
      cbSelectAllVisible
    } = this;
    let o = cbSelectAll.getValue() ? t("ariaChecked", "checked") : t("ariaUnchecked", "unchecked");
    let n = t("ariaRowSelectAll", "Press Space to toggle all rows selection");
    headerCellCtrl.setAriaDescriptionProperty("selectAll", cbSelectAllVisible ? `${n} (${o})` : null);
    cbSelectAll.setInputAriaLabel(t("ariaHeaderSelection", "Column with Header Selection"));
    e || headerCellCtrl.announceAriaDescription();
  }
  checkSelectionType(e) {
    return !!tu(this.gos) || ($$eW42(128, {
      feature: e
    }), !1);
  }
  checkRightRowModelType(e) {
    let {
      gos,
      rowModel
    } = this.beans;
    return !!($$eK33(gos) || $$e_18(gos)) || ($$eW42(129, {
      feature: e,
      rowModel: rowModel.getType()
    }), !1);
  }
  onCbSelectAll() {
    if (this.processingEventFromCheckbox || !this.cbSelectAllVisible) return;
    let e = this.cbSelectAll.getValue();
    let t = this.getSelectAllMode();
    let i = "uiSelectAll";
    "currentPage" === t ? i = "uiSelectAllCurrentPage" : "filtered" === t && (i = "uiSelectAllFiltered");
    let s = {
      source: i,
      selectAll: t
    };
    let r = this.beans.selectionSvc;
    e ? r.selectAllRowNodes(s) : r.deselectAllRowNodes(s);
  }
  isCheckboxSelection() {
    let {
      column,
      gos,
      beans
    } = this;
    let s = gos.get("rowSelection");
    let r = column.getColDef();
    let {
      headerCheckboxSelection
    } = r;
    let n = !1;
    let l = "object" == typeof s;
    if (l) {
      let t = t3(column);
      let r = t5(column);
      ("autoGroupColumn" === to(s) && r || t && beans.selectionColSvc?.isSelectionColumnEnabled()) && (n = tr(s));
    } else n = "function" == typeof headerCheckboxSelection ? headerCheckboxSelection(ty(gos, {
      column,
      colDef: r
    })) : !!headerCheckboxSelection;
    let a = l ? "headerCheckbox" : "headerCheckboxSelection";
    return n && this.checkRightRowModelType(a) && this.checkSelectionType(a);
  }
  getSelectAllMode() {
    let e = tg(this.gos, !1);
    if (e) return e;
    let {
      headerCheckboxSelectionCurrentPageOnly,
      headerCheckboxSelectionFilteredOnly
    } = this.column.getColDef();
    return headerCheckboxSelectionCurrentPageOnly ? "currentPage" : headerCheckboxSelectionFilteredOnly ? "filtered" : "all";
  }
};
var r7 = class extends $$tM23 {
  postConstruct() {
    let {
      gos,
      beans
    } = this;
    this.selectionCtx = new r4(beans.rowModel);
    this.addManagedPropertyListeners(["isRowSelectable", "rowSelection"], () => {
      let t = td(gos);
      t !== this.isRowSelectable && (this.isRowSelectable = t, this.updateSelectable());
    });
    this.isRowSelectable = td(gos);
  }
  destroy() {
    super.destroy();
    this.selectionCtx.reset();
  }
  createCheckboxSelectionComponent() {
    return new r6();
  }
  createSelectAllFeature(e) {
    return new r8(e);
  }
  isMultiSelect() {
    return tu(this.gos);
  }
  onRowCtrlSelected(e, t, i) {
    let s = !!e.rowNode.isSelected();
    e.forEachGui(i, e => {
      e.rowComp.addOrRemoveCssClass("ag-row-selected", s);
      let i = e.element;
      M(i, s);
      i.contains(e3(this.beans)) && t(e);
    });
  }
  announceAriaRowSelection(e) {
    if (this.isRowSelectionBlocked(e)) return;
    let t = e.isSelected();
    if (!e.selectable) return;
    let i = this.getLocaleTextFunc()(t ? "ariaRowDeselect" : "ariaRowSelect", `Press SPACE to ${t ? "deselect" : "select"} this row`);
    this.beans.ariaAnnounce?.announceValue(i, "rowSelection");
  }
  dispatchSelectionChanged(e) {
    this.eventSvc.dispatchEvent({
      type: "selectionChanged",
      source: e
    });
  }
  isRowSelectionBlocked(e) {
    return !e.selectable || !!e.rowPinned || !eq(this.gos);
  }
  updateRowSelectable(e, t) {
    let i = this.isRowSelectable?.(e) ?? !0;
    this.setRowSelectable(e, i, t);
    return i;
  }
  setRowSelectable(e, t, i) {
    if (e.selectable !== t && (e.selectable = t, e.dispatchRowEvent("selectableChanged"), !i)) {
      if (tp(this.gos)) {
        let t = this.calculateSelectedFromChildren(e);
        this.setNodesSelected({
          nodes: [e],
          newValue: t ?? !1,
          source: "selectableChanged"
        });
        return;
      }
      e.isSelected() && !e.selectable && this.setNodesSelected({
        nodes: [e],
        newValue: !1,
        source: "selectableChanged"
      });
    }
  }
  calculateSelectedFromChildren(e) {
    let t = !1;
    let i = !1;
    if (!e.childrenAfterGroup?.length) return e.selectable ? e.__selected : null;
    for (let s = 0; s < e.childrenAfterGroup.length; s++) {
      let r = e.childrenAfterGroup[s];
      let o = r.isSelected();
      if (!r.selectable) {
        let e = this.calculateSelectedFromChildren(r);
        if (null === e) continue;
        o = e;
      }
      switch (o) {
        case !0:
          t = !0;
          break;
        case !1:
          i = !0;
          break;
        default:
          return;
      }
    }
    return t && i ? void 0 : !!t || !i && (e.selectable ? e.__selected : null);
  }
  selectRowNode(e, t, i, s = "api") {
    let r = !e.selectable && t;
    let o = e.__selected === t;
    if (r || o) return !1;
    e.__selected = t;
    e.dispatchRowEvent("rowSelected");
    let n = e.sibling;
    n && n.footer && n.__localEventService && n.dispatchRowEvent("rowSelected");
    this.eventSvc.dispatchEvent({
      ...ty(this.gos, {
        type: "rowSelected",
        node: e,
        data: e.data,
        rowIndex: e.rowIndex,
        rowPinned: e.rowPinned
      }),
      event: i || null,
      source: s
    });
    return !0;
  }
  isCellCheckboxSelection(e, t) {
    let i = this.gos.get("rowSelection");
    if (!i || "string" == typeof i) return e.isColumnFunc(t, e.colDef.checkboxSelection);
    {
      let s = t3(e) && ts(i);
      return e.isColumnFunc(t, s);
    }
  }
  inferNodeSelections(e, t, i, s) {
    let {
      gos,
      selectionCtx
    } = this;
    let n = e.isSelected();
    let l = tp(gos);
    let a = function (e) {
      let t = ta(e);
      return !0 === t || "enableSelection" === t;
    }(gos);
    let d = function (e) {
      let t = ta(e);
      return !0 === t || "enableDeselection" === t;
    }(gos);
    let h = this.isMultiSelect();
    let u = "rowClicked" === s;
    if (u && l && e.group || u && !(a || d)) return null;
    if (t && i && h) {
      let t = selectionCtx.getRoot();
      if (!t) return null;
      if (!t.isSelected()) return {
        select: [],
        deselect: selectionCtx.extend(e, l).keep,
        reset: !1
      };
      {
        let t = selectionCtx.isInRange(e) ? selectionCtx.truncate(e) : selectionCtx.extend(e, l);
        return {
          deselect: t.discard,
          select: t.keep,
          reset: !1
        };
      }
    }
    if (t && h) {
      let t = selectionCtx.selectAll ? this.beans.rowModel.getRow(0) : void 0;
      let i = selectionCtx.getRoot(t);
      let s = selectionCtx.isInRange(e) ? selectionCtx.truncate(e) : selectionCtx.extend(e, l);
      return {
        select: s.keep,
        deselect: s.discard,
        reset: selectionCtx.selectAll || !!(i && !i.isSelected())
      };
    }
    if (i) return (selectionCtx.setRoot(e), u && n && !d) ? null : {
      node: e,
      newValue: !n,
      clearSelection: !h
    };
    {
      selectionCtx.setRoot(e);
      let t = function (e) {
        let t = e.get("rowSelection");
        return "string" == typeof t ? e.get("rowMultiSelectWithClick") : t?.enableSelectionWithoutKeys ?? !1;
      }(gos);
      let i = "filteredDescendants" === tc(gos);
      let s = u && (!t || !a);
      if (i && void 0 === n && $$eK33(gos)) return {
        node: e,
        newValue: !1,
        clearSelection: !h || s
      };
      if (u) {
        let i = n ? !t : a;
        return (i !== n || s) && (!i || a) && (i || d) ? {
          node: e,
          newValue: i,
          clearSelection: !h || s
        } : null;
      }
      return {
        node: e,
        newValue: !n,
        clearSelection: !h || s
      };
    }
  }
};
var r9 = class extends r0 {
  constructor(e) {
    super(e, "ag-radio-button", "radio");
  }
  isSelected() {
    return this.eInput.checked;
  }
  toggle() {
    !this.eInput.disabled && (this.isSelected() || this.setValue(!0));
  }
  addInputListeners() {
    super.addInputListeners();
    this.addManagedEventListeners({
      checkboxChanged: this.onChange.bind(this)
    });
  }
  onChange(e) {
    let t = this.eInput;
    e.selected && e.name && t.name && t.name === e.name && e.id && t.id !== e.id && this.setValue(!1, !0);
  }
};
var oe = class extends rQ {
  constructor(e, t = "ag-text-field", i = "text") {
    super(e, t, i);
  }
  postConstruct() {
    super.postConstruct();
    this.config.allowedCharPattern && this.preventDisallowedCharacters();
  }
  setValue(e, t) {
    let i = this.eInput;
    i.value !== e && (i.value = ew(e) ? e : "");
    return super.setValue(e, t);
  }
  setStartValue(e) {
    this.setValue(e, !0);
  }
  preventDisallowedCharacters() {
    let e = RegExp(`[${this.config.allowedCharPattern}]`);
    this.addManagedListeners(this.eInput, {
      keydown: t => {
        s1(t) && t.key && !e.test(t.key) && t.preventDefault();
      },
      paste: t => {
        let i = t.clipboardData?.getData("text");
        i && i.split("").some(t => !e.test(t)) && t.preventDefault();
      }
    });
  }
};
var ot = {
  selector: "AG-INPUT-TEXT-FIELD",
  component: oe
};
var oi = class extends oe {
  constructor(e) {
    super(e, "ag-number-field", "number");
  }
  postConstruct() {
    super.postConstruct();
    let e = this.eInput;
    this.addManagedListeners(e, {
      blur: () => {
        let t = parseFloat(e.value);
        let i = isNaN(t) ? "" : this.normalizeValue(t.toString());
        this.value !== i && this.setValue(i);
      },
      wheel: this.onWheel.bind(this)
    });
    e.step = "any";
    let {
      precision,
      min,
      max,
      step
    } = this.config;
    "number" == typeof precision && this.setPrecision(precision);
    "number" == typeof min && this.setMin(min);
    "number" == typeof max && this.setMax(max);
    "number" == typeof step && this.setStep(step);
  }
  onWheel(e) {
    e3(this.beans) === this.eInput && e.preventDefault();
  }
  normalizeValue(e) {
    if ("" === e) return "";
    null != this.precision && (e = this.adjustPrecision(e));
    let t = parseFloat(e);
    let {
      min,
      max
    } = this;
    null != min && t < min ? e = min.toString() : null != max && t > max && (e = max.toString());
    return e;
  }
  adjustPrecision(e, t) {
    let i = this.precision;
    if (null == i) return e;
    if (t) return parseFloat(parseFloat(e).toFixed(i)).toString();
    let s = String(e).split(".");
    if (s.length > 1) {
      if (s[1].length <= i) return e;
      if (i > 0) return `${s[0]}.${s[1].slice(0, i)}`;
    }
    return s[0];
  }
  setMin(e) {
    this.min === e || (this.min = e, ep(this.eInput, "min", e));
    return this;
  }
  setMax(e) {
    this.max === e || (this.max = e, ep(this.eInput, "max", e));
    return this;
  }
  setPrecision(e) {
    this.precision = e;
    return this;
  }
  setStep(e) {
    this.step === e || (this.step = e, ep(this.eInput, "step", e));
    return this;
  }
  setValue(e, t) {
    return this.setValueOrInputValue(e => super.setValue(e, t), () => this, e);
  }
  setStartValue(e) {
    return this.setValueOrInputValue(e => super.setValue(e, !0), e => {
      this.eInput.value = e;
    }, e);
  }
  setValueOrInputValue(e, t, i) {
    if (ew(i)) {
      let s = this.isScientificNotation(i);
      if (s && this.eInput.validity.valid) return e(i);
      if (!s) {
        i = this.adjustPrecision(i);
        let e = this.normalizeValue(i);
        s = i != e;
      }
      if (s) return t(i);
    }
    return e(i);
  }
  getValue() {
    let e = this.eInput;
    if (!e.validity.valid) return;
    let t = e.value;
    return this.isScientificNotation(t) ? this.adjustPrecision(t, !0) : super.getValue();
  }
  isScientificNotation(e) {
    return "string" == typeof e && e.includes("e");
  }
};
function os(e, t) {
  return e.toString().padStart(t, "0");
}
function or(e, t = !0, i = "-") {
  if (!e) return null;
  let s = [e.getFullYear(), e.getMonth() + 1, e.getDate()].map(e => os(e, 2)).join(i);
  t && (s += " " + [e.getHours(), e.getMinutes(), e.getSeconds()].map(e => os(e, 2)).join(":"));
  return s;
}
var oo = e => {
  if (e > 3 && e < 21) return "th";
  switch (e % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
  }
  return "th";
};
function on(e, t = "YYYY-MM-DD") {
  let i = os(e.getFullYear(), 4);
  let s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let r = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let o = {
    YYYY: () => i.slice(i.length - 4, i.length),
    YY: () => i.slice(i.length - 2, i.length),
    Y: () => `${e.getFullYear()}`,
    MMMM: () => s[e.getMonth()],
    MMM: () => s[e.getMonth()].slice(0, 3),
    MM: () => os(e.getMonth() + 1, 2),
    Mo: () => `${e.getMonth() + 1}${oo(e.getMonth() + 1)}`,
    M: () => `${e.getMonth() + 1}`,
    Do: () => `${e.getDate()}${oo(e.getDate())}`,
    DD: () => os(e.getDate(), 2),
    D: () => `${e.getDate()}`,
    dddd: () => r[e.getDay()],
    ddd: () => r[e.getDay()].slice(0, 3),
    dd: () => r[e.getDay()].slice(0, 2),
    do: () => `${e.getDay()}${oo(e.getDay())}`,
    d: () => `${e.getDay()}`
  };
  let n = RegExp(Object.keys(o).join("|"), "g");
  return t.replace(n, e => e in o ? o[e]() : e);
}
function ol(e) {
  if (!e) return null;
  let [t, i] = e.split(" ");
  if (!t) return null;
  let s = t.split("-").map(e => parseInt(e, 10));
  if (3 !== s.filter(e => !isNaN(e)).length) return null;
  let [r, o, n] = s;
  let l = new Date(r, o - 1, n);
  if (l.getFullYear() !== r || l.getMonth() !== o - 1 || l.getDate() !== n) return null;
  if (!i || "00:00:00" === i) return l;
  let [a, d, h] = i.split(":").map(e => parseInt(e, 10));
  a >= 0 && a < 24 && l.setHours(a);
  d >= 0 && d < 60 && l.setMinutes(d);
  h >= 0 && h < 60 && l.setSeconds(h);
  return l;
}
var oa = !1;
var od = class extends iS {
  constructor(e = "default", t = !1) {
    super(`<div class="ag-list ag-${e}-list" role="listbox"></div>`);
    this.cssIdentifier = e;
    this.unFocusable = t;
    this.activeClass = "ag-active-item";
    this.options = [];
    this.itemEls = [];
  }
  postConstruct() {
    let e = this.getGui();
    this.addManagedElementListeners(e, {
      mouseleave: () => this.clearHighlighted()
    });
    this.unFocusable || this.addManagedElementListeners(e, {
      keydown: this.handleKeyDown.bind(this)
    });
  }
  handleKeyDown(e) {
    let t = e.key;
    switch (t) {
      case i4.ENTER:
        if (this.highlightedEl) {
          let e = this.itemEls.indexOf(this.highlightedEl);
          this.setValueByIndex(e);
        } else this.setValue(this.getValue());
        break;
      case i4.DOWN:
      case i4.UP:
        e.preventDefault();
        this.navigate(t);
        break;
      case i4.PAGE_DOWN:
      case i4.PAGE_UP:
      case i4.PAGE_HOME:
      case i4.PAGE_END:
        e.preventDefault();
        this.navigateToPage(t);
    }
  }
  navigate(e) {
    let t;
    let i = e === i4.DOWN;
    let {
      itemEls,
      highlightedEl
    } = this;
    if (highlightedEl) {
      let e = itemEls.indexOf(highlightedEl) + (i ? 1 : -1);
      e = Math.min(Math.max(e, 0), itemEls.length - 1);
      t = itemEls[e];
    } else t = itemEls[i ? 0 : itemEls.length - 1];
    this.highlightItem(t);
  }
  navigateToPage(e) {
    let {
      itemEls,
      highlightedEl
    } = this;
    if (!highlightedEl || 0 === itemEls.length) return;
    let s = itemEls.indexOf(highlightedEl);
    let r = this.options.length - 1;
    let o = itemEls[0].clientHeight;
    let n = Math.floor(this.getGui().clientHeight / o);
    let l = -1;
    e === i4.PAGE_HOME ? l = 0 : e === i4.PAGE_END ? l = r : e === i4.PAGE_DOWN ? l = Math.min(s + n, r) : e === i4.PAGE_UP && (l = Math.max(s - n, 0));
    -1 !== l && this.highlightItem(itemEls[l]);
  }
  addOptions(e) {
    e.forEach(e => this.addOption(e));
    return this;
  }
  addOption(e) {
    let {
      value,
      text
    } = e;
    let s = text || value;
    this.options.push({
      value,
      text: s
    });
    this.renderOption(value, s);
    this.updateIndices();
    return this;
  }
  clearOptions() {
    this.options = [];
    this.reset(!0);
    this.itemEls.forEach(e => {
      $$ei11(e);
    });
    this.itemEls = [];
  }
  updateIndices() {
    let e = this.getGui().querySelectorAll(".ag-list-item");
    e.forEach((t, i) => {
      w(t, "posinset", i + 1);
      w(t, "setsize", e.length);
    });
  }
  renderOption(e, t) {
    let i = e1(this.beans);
    let s = i.createElement("div");
    b(s, "option");
    s.classList.add("ag-list-item", `ag-${this.cssIdentifier}-list-item`);
    let r = i.createElement("span");
    s.appendChild(r);
    r.textContent = t;
    this.unFocusable || (s.tabIndex = -1);
    this.itemEls.push(s);
    this.addManagedListeners(s, {
      mouseover: () => this.highlightItem(s),
      mousedown: t => {
        t.preventDefault();
        t.stopPropagation();
        this.setValue(e);
      }
    });
    this.createOptionalManagedBean(this.beans.registry.createDynamicBean("tooltipFeature", !1, {
      getTooltipValue: () => t,
      getGui: () => s,
      getLocation: () => "UNKNOWN",
      shouldDisplayTooltip: () => r.scrollWidth > r.clientWidth
    }));
    this.getGui().appendChild(s);
  }
  setValue(e, t) {
    if (this.value === e) {
      this.fireItemSelected();
      return this;
    }
    if (null == e) {
      this.reset(t);
      return this;
    }
    let i = this.options.findIndex(t => t.value === e);
    if (-1 !== i) {
      let e = this.options[i];
      this.value = e.value;
      this.displayValue = e.text;
      this.highlightItem(this.itemEls[i]);
      t || this.fireChangeEvent();
    }
    return this;
  }
  setValueByIndex(e) {
    return this.setValue(this.options[e].value);
  }
  getValue() {
    return this.value;
  }
  getDisplayValue() {
    return this.displayValue;
  }
  refreshHighlighted() {
    this.clearHighlighted();
    let e = this.options.findIndex(e => e.value === this.value);
    -1 !== e && this.highlightItem(this.itemEls[e]);
  }
  reset(e) {
    this.value = null;
    this.displayValue = null;
    this.clearHighlighted();
    e || this.fireChangeEvent();
  }
  highlightItem(e) {
    if (!er(e)) return;
    this.clearHighlighted();
    this.highlightedEl = e;
    e.classList.add(this.activeClass);
    M(e, !0);
    let {
      scrollTop,
      clientHeight
    } = this.getGui();
    let {
      offsetTop,
      offsetHeight
    } = e;
    (offsetTop + offsetHeight > scrollTop + clientHeight || offsetTop < scrollTop) && e.scrollIntoView({
      block: "nearest"
    });
    this.unFocusable || e.focus();
  }
  clearHighlighted() {
    let e = this.highlightedEl;
    e && er(e) && (e.classList.remove(this.activeClass), M(e, !1), this.highlightedEl = null);
  }
  fireChangeEvent() {
    this.dispatchLocalEvent({
      type: "fieldValueChanged"
    });
    this.fireItemSelected();
  }
  fireItemSelected() {
    this.dispatchLocalEvent({
      type: "selectedItem"
    });
  }
};
var oh = class extends rX {
  constructor(e) {
    if (super(e, e?.template || `
            <div class="ag-picker-field" role="presentation">
                <div data-ref="eLabel"></div>
                <div data-ref="eWrapper" class="ag-wrapper ag-picker-field-wrapper ag-picker-collapsed">
                    <div data-ref="eDisplayField" class="ag-picker-field-display"></div>
                    <div data-ref="eIcon" class="ag-picker-field-icon" aria-hidden="true"></div>
                </div>
            </div>`, e?.agComponents || [], e?.className), this.isPickerDisplayed = !1, this.skipClick = !1, this.pickerGap = 4, this.hideCurrentPicker = null, this.eLabel = null, this.eWrapper = null, this.eDisplayField = null, this.eIcon = null, this.registerCSS(".ag-picker-field-display{flex:1 1 auto}.ag-picker-field{align-items:center;display:flex}.ag-picker-field-icon{border:0;cursor:pointer;display:flex;margin:0;padding:0}.ag-picker-field-wrapper{background-color:var(--ag-picker-button-background-color);border:var(--ag-picker-button-border);border-radius:5px;min-height:max(var(--ag-list-item-height),calc(var(--ag-spacing)*4));overflow:hidden;&:disabled{opacity:.5}&.ag-picker-has-focus,&:focus-within{background-color:var(--ag-picker-button-focus-background-color);border:var(--ag-picker-button-focus-border);box-shadow:var(--ag-focus-shadow)}}"), this.ariaRole = e?.ariaRole, this.onPickerFocusIn = this.onPickerFocusIn.bind(this), this.onPickerFocusOut = this.onPickerFocusOut.bind(this), !e) return;
    let {
      pickerGap,
      maxPickerHeight,
      variableWidth,
      minPickerWidth,
      maxPickerWidth
    } = e;
    null != pickerGap && (this.pickerGap = pickerGap);
    this.variableWidth = !!variableWidth;
    null != maxPickerHeight && this.setPickerMaxHeight(maxPickerHeight);
    null != minPickerWidth && this.setPickerMinWidth(minPickerWidth);
    null != maxPickerWidth && this.setPickerMaxWidth(maxPickerWidth);
  }
  postConstruct() {
    super.postConstruct();
    this.setupAria();
    let e = `ag-${this.getCompId()}-display`;
    this.eDisplayField.setAttribute("id", e);
    let t = this.getAriaElement();
    this.addManagedElementListeners(t, {
      keydown: this.onKeyDown.bind(this)
    });
    this.addManagedElementListeners(this.eLabel, {
      mousedown: this.onLabelOrWrapperMouseDown.bind(this)
    });
    this.addManagedElementListeners(this.eWrapper, {
      mousedown: this.onLabelOrWrapperMouseDown.bind(this)
    });
    let {
      pickerIcon,
      inputWidth
    } = this.config;
    if (pickerIcon) {
      let e = rY(pickerIcon, this.beans);
      e && this.eIcon.appendChild(e);
    }
    null != inputWidth && this.setInputWidth(inputWidth);
  }
  setupAria() {
    let e = this.getAriaElement();
    e.setAttribute("tabindex", this.gos.get("tabIndex").toString());
    D(e, !1);
    this.ariaRole && b(e, this.ariaRole);
  }
  onLabelOrWrapperMouseDown(e) {
    if (e) {
      let t = this.getFocusableElement();
      if (t !== this.eWrapper && e?.target === t) return;
      e.preventDefault();
      this.getFocusableElement().focus();
    }
    if (this.skipClick) {
      this.skipClick = !1;
      return;
    }
    this.isDisabled() || (this.isPickerDisplayed ? this.hidePicker() : this.showPicker());
  }
  onKeyDown(e) {
    switch (e.key) {
      case i4.UP:
      case i4.DOWN:
      case i4.ENTER:
      case i4.SPACE:
        e.preventDefault();
        this.onLabelOrWrapperMouseDown();
        break;
      case i4.ESCAPE:
        this.isPickerDisplayed && (e.preventDefault(), e.stopPropagation(), this.hideCurrentPicker && this.hideCurrentPicker());
    }
  }
  showPicker() {
    this.isPickerDisplayed = !0;
    this.pickerComponent || (this.pickerComponent = this.createPickerComponent());
    let e = this.pickerComponent.getGui();
    e.addEventListener("focusin", this.onPickerFocusIn);
    e.addEventListener("focusout", this.onPickerFocusOut);
    this.hideCurrentPicker = this.renderAndPositionPicker();
    this.toggleExpandedStyles(!0);
  }
  renderAndPositionPicker() {
    let e = this.pickerComponent.getGui();
    this.gos.get("suppressScrollWhenPopupsAreOpen") || ([this.destroyMouseWheelFunc] = this.addManagedEventListeners({
      bodyScroll: () => {
        this.hidePicker();
      }
    }));
    let t = this.getLocaleTextFunc();
    let {
      config: {
        pickerAriaLabelKey,
        pickerAriaLabelValue,
        modalPicker = !0
      },
      maxPickerHeight,
      minPickerWidth,
      maxPickerWidth,
      variableWidth,
      beans,
      eWrapper
    } = this;
    let u = {
      modal: modalPicker,
      eChild: e,
      closeOnEsc: !0,
      closedCallback: () => {
        let e = e4(beans);
        this.beforeHidePicker();
        e && this.isAlive() && this.getFocusableElement().focus();
      },
      ariaLabel: t(pickerAriaLabelKey, pickerAriaLabelValue),
      anchorToElement: eWrapper
    };
    e.style.position = "absolute";
    let c = beans.popupSvc;
    let g = c.addPopup(u);
    variableWidth ? (minPickerWidth && (e.style.minWidth = minPickerWidth), e.style.width = ec(J(eWrapper)), maxPickerWidth && (e.style.maxWidth = maxPickerWidth)) : ed(e, maxPickerWidth ?? J(eWrapper));
    let p = maxPickerHeight ?? `${j(c.getPopupParent())}px`;
    e.style.setProperty("max-height", p);
    this.alignPickerToComponent();
    return g.hideFunc;
  }
  alignPickerToComponent() {
    if (!this.pickerComponent) return;
    let {
      pickerGap,
      config: {
        pickerType
      },
      beans: {
        popupSvc,
        gos
      },
      eWrapper,
      pickerComponent
    } = this;
    let n = gos.get("enableRtl") ? "right" : "left";
    popupSvc.positionPopupByComponent({
      type: pickerType,
      eventSource: eWrapper,
      ePopup: pickerComponent.getGui(),
      position: "under",
      alignSide: n,
      keepWithinBounds: !0,
      nudgeY: pickerGap
    });
  }
  beforeHidePicker() {
    this.destroyMouseWheelFunc && (this.destroyMouseWheelFunc(), this.destroyMouseWheelFunc = void 0);
    this.toggleExpandedStyles(!1);
    let e = this.pickerComponent.getGui();
    e.removeEventListener("focusin", this.onPickerFocusIn);
    e.removeEventListener("focusout", this.onPickerFocusOut);
    this.isPickerDisplayed = !1;
    this.pickerComponent = void 0;
    this.hideCurrentPicker = null;
  }
  toggleExpandedStyles(e) {
    if (!this.isAlive()) return;
    D(this.getAriaElement(), e);
    let t = this.eWrapper.classList;
    t.toggle("ag-picker-expanded", e);
    t.toggle("ag-picker-collapsed", !e);
  }
  onPickerFocusIn() {
    this.togglePickerHasFocus(!0);
  }
  onPickerFocusOut(e) {
    this.pickerComponent?.getGui().contains(e.relatedTarget) || this.togglePickerHasFocus(!1);
  }
  togglePickerHasFocus(e) {
    this.pickerComponent && this.eWrapper.classList.toggle("ag-picker-has-focus", e);
  }
  hidePicker() {
    this.hideCurrentPicker?.();
  }
  setInputWidth(e) {
    ed(this.eWrapper, e);
    return this;
  }
  getFocusableElement() {
    return this.eWrapper;
  }
  setPickerGap(e) {
    this.pickerGap = e;
    return this;
  }
  setPickerMinWidth(e) {
    "number" == typeof e && (e = `${e}px`);
    this.minPickerWidth = e;
    return this;
  }
  setPickerMaxWidth(e) {
    "number" == typeof e && (e = `${e}px`);
    this.maxPickerWidth = e;
    return this;
  }
  setPickerMaxHeight(e) {
    "number" == typeof e && (e = `${e}px`);
    this.maxPickerHeight = e;
    return this;
  }
  destroy() {
    this.hidePicker();
    super.destroy();
  }
};
var ou = class extends oh {
  constructor(e) {
    super({
      pickerAriaLabelKey: "ariaLabelSelectField",
      pickerAriaLabelValue: "Select Field",
      pickerType: "ag-list",
      className: "ag-select",
      pickerIcon: "selectOpen",
      ariaRole: "combobox",
      ...e
    });
    this.registerCSS(".ag-select{align-items:center;display:flex;&.ag-disabled{opacity:.5}}:where(.ag-select){.ag-picker-field-wrapper{cursor:default}&.ag-disabled .ag-picker-field-wrapper:focus{box-shadow:none}&:not(.ag-cell-editor,.ag-label-align-top){min-height:var(--ag-list-item-height)}.ag-picker-field-display{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ag-picker-field-icon{align-items:center;display:flex}}:where(.ag-ltr) :where(.ag-select){.ag-picker-field-wrapper{padding-left:calc(var(--ag-cell-horizontal-padding)/2);padding-right:var(--ag-spacing)}}:where(.ag-rtl) :where(.ag-select){.ag-picker-field-wrapper{padding-left:var(--ag-spacing);padding-right:calc(var(--ag-cell-horizontal-padding)/2)}}");
  }
  postConstruct() {
    var e;
    this.tooltipFeature = this.createOptionalManagedBean(this.beans.registry.createDynamicBean("tooltipFeature", !1, {
      shouldDisplayTooltip: (e = () => this.eDisplayField, () => {
        let t = e();
        return !t || t.scrollWidth > t.clientWidth;
      }),
      getGui: () => this.getGui()
    }));
    super.postConstruct();
    this.createListComponent();
    this.eWrapper.tabIndex = this.gos.get("tabIndex");
    let {
      options,
      value,
      placeholder
    } = this.config;
    null != options && this.addOptions(options);
    null != value && this.setValue(value, !0);
    placeholder && null == value && (this.eDisplayField.textContent = placeholder);
    this.addManagedElementListeners(this.eWrapper, {
      focusout: this.onWrapperFocusOut.bind(this)
    });
  }
  onWrapperFocusOut(e) {
    this.eWrapper.contains(e.relatedTarget) || this.hidePicker();
  }
  createListComponent() {
    var e;
    let t = this.createBean(new od("select", !0));
    this.listComponent = t;
    t.setParentComponent(this);
    let i = t.getAriaElement();
    let s = `ag-select-list-${t.getCompId()}`;
    i.setAttribute("id", s);
    C(e = this.getAriaElement(), "controls", i.id);
    S(i, e.id);
    t.addManagedElementListeners(t.getGui(), {
      mousedown: e => {
        e?.preventDefault();
      }
    });
    t.addManagedListeners(t, {
      selectedItem: () => {
        this.hidePicker();
        this.dispatchLocalEvent({
          type: "selectedItem"
        });
      },
      fieldValueChanged: () => {
        this.listComponent && (this.setValue(this.listComponent.getValue(), !1, !0), this.hidePicker());
      }
    });
  }
  createPickerComponent() {
    return this.listComponent;
  }
  onKeyDown(e) {
    let {
      key
    } = e;
    switch (key === i4.TAB && this.hidePicker(), key) {
      case i4.ENTER:
      case i4.UP:
      case i4.DOWN:
      case i4.PAGE_UP:
      case i4.PAGE_DOWN:
      case i4.PAGE_HOME:
      case i4.PAGE_END:
        e.preventDefault();
        this.isPickerDisplayed ? this.listComponent?.handleKeyDown(e) : super.onKeyDown(e);
        break;
      case i4.ESCAPE:
        super.onKeyDown(e);
        break;
      case i4.SPACE:
        this.isPickerDisplayed ? e.preventDefault() : super.onKeyDown(e);
    }
  }
  showPicker() {
    let e = this.listComponent;
    e && (super.showPicker(), e.refreshHighlighted());
  }
  addOptions(e) {
    e.forEach(e => this.addOption(e));
    return this;
  }
  addOption(e) {
    this.listComponent.addOption(e);
    return this;
  }
  clearOptions() {
    this.listComponent?.clearOptions();
    return this;
  }
  setValue(e, t, i) {
    let {
      listComponent,
      config: {
        placeholder
      },
      eDisplayField,
      tooltipFeature
    } = this;
    if (this.value === e || !listComponent || (i || listComponent.setValue(e, !0), listComponent.getValue() === this.getValue())) return this;
    let l = listComponent.getDisplayValue();
    null == l && placeholder && (l = placeholder);
    eDisplayField.textContent = l;
    tooltipFeature?.setTooltipAndRefresh(l ?? null);
    return super.setValue(e, t);
  }
  destroy() {
    this.listComponent = this.destroyBean(this.listComponent);
    super.destroy();
  }
};
var $$oc38 = {
  TAB_GUARD: "ag-tab-guard",
  TAB_GUARD_TOP: "ag-tab-guard-top",
  TAB_GUARD_BOTTOM: "ag-tab-guard-bottom"
};
var $$og19 = class extends $$tM23 {
  constructor(e) {
    super();
    this.skipTabGuardFocus = !1;
    this.forcingFocusOut = !1;
    this.allowFocus = !1;
    let {
      comp,
      eTopGuard,
      eBottomGuard,
      focusTrapActive,
      forceFocusOutWhenTabGuardsAreEmpty,
      isFocusableContainer,
      focusInnerElement,
      onFocusIn,
      onFocusOut,
      shouldStopEventPropagation,
      onTabKeyDown,
      handleKeyDown,
      isEmpty,
      eFocusableElement
    } = e;
    this.comp = comp;
    this.eTopGuard = eTopGuard;
    this.eBottomGuard = eBottomGuard;
    this.providedFocusInnerElement = focusInnerElement;
    this.eFocusableElement = eFocusableElement;
    this.focusTrapActive = !!focusTrapActive;
    this.forceFocusOutWhenTabGuardsAreEmpty = !!forceFocusOutWhenTabGuardsAreEmpty;
    this.isFocusableContainer = !!isFocusableContainer;
    this.providedFocusIn = onFocusIn;
    this.providedFocusOut = onFocusOut;
    this.providedShouldStopEventPropagation = shouldStopEventPropagation;
    this.providedOnTabKeyDown = onTabKeyDown;
    this.providedHandleKeyDown = handleKeyDown;
    this.providedIsEmpty = isEmpty;
  }
  postConstruct() {
    this.createManagedBean(new sH(this.eFocusableElement, {
      shouldStopEventPropagation: () => this.shouldStopEventPropagation(),
      onTabKeyDown: e => this.onTabKeyDown(e),
      handleKeyDown: e => this.handleKeyDown(e),
      onFocusIn: e => this.onFocusIn(e),
      onFocusOut: e => this.onFocusOut(e)
    }));
    this.activateTabGuards();
    [this.eTopGuard, this.eBottomGuard].forEach(e => this.addManagedElementListeners(e, {
      focus: this.onFocus.bind(this)
    }));
  }
  handleKeyDown(e) {
    this.providedHandleKeyDown && this.providedHandleKeyDown(e);
  }
  tabGuardsAreActive() {
    return !!this.eTopGuard && this.eTopGuard.hasAttribute("tabIndex");
  }
  shouldStopEventPropagation() {
    return !!this.providedShouldStopEventPropagation && this.providedShouldStopEventPropagation();
  }
  activateTabGuards() {
    if (this.forcingFocusOut) return;
    let e = this.gos.get("tabIndex");
    this.comp.setTabIndex(e.toString());
  }
  deactivateTabGuards() {
    this.comp.setTabIndex();
  }
  onFocus(e) {
    if (this.isFocusableContainer && !this.eFocusableElement.contains(e.relatedTarget) && !this.allowFocus) {
      this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
      return;
    }
    if (this.skipTabGuardFocus) {
      this.skipTabGuardFocus = !1;
      return;
    }
    if (this.forceFocusOutWhenTabGuardsAreEmpty && (this.providedIsEmpty ? this.providedIsEmpty() : 0 === se(this.eFocusableElement, ".ag-tab-guard").length)) {
      this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
      return;
    }
    if (this.isFocusableContainer && this.eFocusableElement.contains(e.relatedTarget)) return;
    let t = e.target === this.eBottomGuard;
    (this.providedFocusInnerElement ? this.providedFocusInnerElement(t) : this.focusInnerElement(t)) || !this.forceFocusOutWhenTabGuardsAreEmpty || this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
  }
  findNextElementOutsideAndFocus(e) {
    let t;
    let i;
    let s = se(e1(this.beans).body, null, !0);
    let r = s.indexOf(e ? this.eTopGuard : this.eBottomGuard);
    if (-1 === r) return;
    e ? (t = 0, i = r) : (t = r + 1, i = s.length);
    let o = s.slice(t, i);
    let n = this.gos.get("tabIndex");
    o.sort((e, t) => {
      let i = parseInt(e.getAttribute("tabindex") || "0");
      let s = parseInt(t.getAttribute("tabindex") || "0");
      return s === n ? 1 : i === n ? -1 : 0 === i ? 1 : 0 === s ? -1 : i - s;
    });
    o[e ? o.length - 1 : 0]?.focus();
  }
  onFocusIn(e) {
    this.focusTrapActive || this.forcingFocusOut || (this.providedFocusIn && this.providedFocusIn(e), this.isFocusableContainer || this.deactivateTabGuards());
  }
  onFocusOut(e) {
    !this.focusTrapActive && (this.providedFocusOut && this.providedFocusOut(e), this.eFocusableElement.contains(e.relatedTarget) || this.activateTabGuards());
  }
  onTabKeyDown(e) {
    if (this.providedOnTabKeyDown) {
      this.providedOnTabKeyDown(e);
      return;
    }
    if (this.focusTrapActive || e.defaultPrevented) return;
    let t = this.tabGuardsAreActive();
    t && this.deactivateTabGuards();
    let i = this.getNextFocusableElement(e.shiftKey);
    t && setTimeout(() => this.activateTabGuards(), 0);
    i && (i.focus(), e.preventDefault());
  }
  focusInnerElement(e = !1) {
    let t = se(this.eFocusableElement);
    this.tabGuardsAreActive() && (t.splice(0, 1), t.splice(t.length - 1, 1));
    return !!t.length && (t[e ? t.length - 1 : 0].focus({
      preventScroll: !0
    }), !0);
  }
  getNextFocusableElement(e) {
    return si(this.beans, this.eFocusableElement, !1, e);
  }
  forceFocusOutOfContainer(e = !1) {
    if (this.forcingFocusOut) return;
    let t = e ? this.eTopGuard : this.eBottomGuard;
    this.activateTabGuards();
    this.skipTabGuardFocus = !0;
    this.forcingFocusOut = !0;
    t.focus();
    window.setTimeout(() => {
      this.forcingFocusOut = !1;
      this.activateTabGuards();
    });
  }
  isTabGuard(e, t) {
    return e === this.eTopGuard && !t || e === this.eBottomGuard && (t ?? !0);
  }
  setAllowFocus(e) {
    this.allowFocus = e;
  }
};
var op = class extends $$tM23 {
  constructor(e) {
    super();
    this.comp = e;
  }
  initialiseTabGuard(e) {
    this.eTopGuard = this.createTabGuard("top");
    this.eBottomGuard = this.createTabGuard("bottom");
    this.eFocusableElement = this.comp.getFocusableElement();
    let {
      eTopGuard,
      eBottomGuard,
      eFocusableElement
    } = this;
    let r = [eTopGuard, eBottomGuard];
    this.addTabGuards(eTopGuard, eBottomGuard);
    let {
      focusTrapActive = !1,
      onFocusIn,
      onFocusOut,
      focusInnerElement,
      handleKeyDown,
      onTabKeyDown,
      shouldStopEventPropagation,
      isEmpty,
      forceFocusOutWhenTabGuardsAreEmpty,
      isFocusableContainer
    } = e;
    this.tabGuardCtrl = this.createManagedBean(new $$og19({
      comp: {
        setTabIndex: e => {
          r.forEach(t => null != e ? t.setAttribute("tabindex", e) : t.removeAttribute("tabindex"));
        }
      },
      focusTrapActive,
      eTopGuard,
      eBottomGuard,
      eFocusableElement,
      onFocusIn,
      onFocusOut,
      focusInnerElement,
      handleKeyDown,
      onTabKeyDown,
      shouldStopEventPropagation,
      isEmpty,
      forceFocusOutWhenTabGuardsAreEmpty,
      isFocusableContainer
    }));
  }
  getTabGuardCtrl() {
    return this.tabGuardCtrl;
  }
  createTabGuard(e) {
    let t = e1(this.beans).createElement("div");
    let i = "top" === e ? $$oc38.TAB_GUARD_TOP : $$oc38.TAB_GUARD_BOTTOM;
    t.classList.add($$oc38.TAB_GUARD, i);
    b(t, "presentation");
    return t;
  }
  addTabGuards(e, t) {
    let i = this.eFocusableElement;
    i.insertAdjacentElement("afterbegin", e);
    i.insertAdjacentElement("beforeend", t);
  }
  removeAllChildrenExceptTabGuards() {
    let e = [this.eTopGuard, this.eBottomGuard];
    et(this.comp.getFocusableElement());
    this.addTabGuards(...e);
  }
  forceFocusOutOfContainer(e = !1) {
    this.tabGuardCtrl.forceFocusOutOfContainer(e);
  }
  appendChild(e, t, i) {
    eg(t) || (t = t.getGui());
    let {
      eBottomGuard
    } = this;
    eBottomGuard ? eBottomGuard.insertAdjacentElement("beforebegin", t) : e(t, i);
  }
  destroy() {
    let {
      eFocusableElement,
      eTopGuard,
      eBottomGuard
    } = this;
    eFocusableElement.removeChild(eTopGuard);
    eFocusableElement.removeChild(eBottomGuard);
    super.destroy();
  }
};
var om = class extends iS {
  initialiseTabGuard(e) {
    this.tabGuardFeature = this.createManagedBean(new op(this));
    this.tabGuardFeature.initialiseTabGuard(e);
  }
  forceFocusOutOfContainer(e = !1) {
    this.tabGuardFeature.forceFocusOutOfContainer(e);
  }
  appendChild(e, t) {
    this.tabGuardFeature.appendChild(super.appendChild.bind(this), e, t);
  }
};
var of = class extends iS {
  isPopup() {
    return !0;
  }
  setParentComponent(e) {
    e.addCssClass("ag-has-popup");
    super.setParentComponent(e);
  }
  destroy() {
    let e = this.parentComponent;
    e && e.isAlive() && e.getGui().classList.remove("ag-has-popup");
    super.destroy();
  }
};
var oC = class {
  constructor(e, t = !1) {
    this.DOUBLE_TAP_MILLIS = 500;
    this.destroyFuncs = [];
    this.touching = !1;
    this.localEventService = new p();
    this.preventMouseClick = t;
    let i = this.onTouchStart.bind(this);
    let s = this.onTouchMove.bind(this);
    let r = this.onTouchEnd.bind(this);
    e.addEventListener("touchstart", i, {
      passive: !0
    });
    e.addEventListener("touchmove", s, {
      passive: !0
    });
    e.addEventListener("touchend", r, {
      passive: !1
    });
    this.destroyFuncs.push(() => {
      e.removeEventListener("touchstart", i, {
        passive: !0
      });
      e.removeEventListener("touchmove", s, {
        passive: !0
      });
      e.removeEventListener("touchend", r, {
        passive: !1
      });
    });
  }
  getActiveTouch(e) {
    for (let t = 0; t < e.length; t++) if (e[t].identifier === this.touchStart.identifier) return e[t];
    return null;
  }
  addEventListener(e, t) {
    this.localEventService.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    this.localEventService.removeEventListener(e, t);
  }
  onTouchStart(e) {
    if (this.touching) return;
    this.touchStart = e.touches[0];
    this.touching = !0;
    this.moved = !1;
    let t = this.touchStart;
    window.setTimeout(() => {
      let i = this.touchStart === t;
      if (this.touching && i && !this.moved) {
        this.moved = !0;
        let t = {
          type: "longTap",
          touchStart: this.touchStart,
          touchEvent: e
        };
        this.localEventService.dispatchEvent(t);
      }
    }, 500);
  }
  onTouchMove(e) {
    if (!this.touching) return;
    let t = this.getActiveTouch(e.touches);
    t && (sx(t, this.touchStart, 4) || (this.moved = !0));
  }
  onTouchEnd(e) {
    if (this.touching) {
      if (!this.moved) {
        let e = {
          type: "tap",
          touchStart: this.touchStart
        };
        this.localEventService.dispatchEvent(e);
        this.checkForDoubleTap();
      }
      this.preventMouseClick && e.cancelable && e.preventDefault();
      this.touching = !1;
    }
  }
  checkForDoubleTap() {
    let e = new Date().getTime();
    if (this.lastTapTime && this.lastTapTime > 0) {
      if (e - this.lastTapTime > this.DOUBLE_TAP_MILLIS) {
        let e = {
          type: "doubleTap",
          touchStart: this.touchStart
        };
        this.localEventService.dispatchEvent(e);
        this.lastTapTime = null;
      } else this.lastTapTime = e;
    } else this.lastTapTime = e;
  }
  destroy() {
    this.destroyFuncs.forEach(e => e());
  }
};
var ow = (e => (e[e.VALUE = 0] = "VALUE", e[e.DIMENSION = 1] = "DIMENSION", e))(ow || {});
var $$ov39 = class {
  constructor(e = "javascript") {
    this.frameworkName = e;
    this.renderingEngine = "vanilla";
    this.wrapIncoming = e => e();
    this.wrapOutgoing = e => e();
    this.baseDocLink = `${eS}/${this.frameworkName}-data-grid`;
    eO = this.baseDocLink;
  }
  setInterval(e, t) {
    return new $$iR37(i => {
      i(window.setInterval(e, t));
    });
  }
  addEventListener(e, t, i, s) {
    let r = {};
    if ("object" == typeof s ? r = s : "boolean" == typeof s && (r = {
      capture: s
    }), null == r.passive) {
      let e = tk(t);
      null != e && (r.passive = e);
    }
    e.addEventListener(t, i, r);
  }
  frameworkComponent(e) {
    return null;
  }
  isFrameworkComponent(e) {
    return !1;
  }
  getDocLink(e) {
    return `${this.baseDocLink}${e ? `/${e}` : ""}`;
  }
};
function ob(e) {
  return {
    beanName: "gridApi",
    bean: e.getBean("apiFunctionSvc").api
  };
}
var oy = Object.fromEntries(["licenseManager", "environment", "eventSvc", "gos", "paginationAutoPageSizeSvc", "apiFunctionSvc", "gridApi", "registry", "agCompUtils", "userCompFactory", "rowContainerHeight", "horizontalResizeSvc", "localeSvc", "pinnedRowModel", "dragSvc", "colGroupSvc", "visibleCols", "popupSvc", "selectionSvc", "colFilter", "quickFilter", "filterManager", "colModel", "headerNavigation", "pageBounds", "pagination", "rowSpanSvc", "pageBoundsListener", "stickyRowSvc", "rowRenderer", "expressionSvc", "alignedGridsSvc", "navigation", "valueCache", "valueSvc", "autoWidthCalc", "filterMenuFactory", "dragAndDrop", "focusSvc", "cellNavigation", "cellStyles", "scrollVisibleSvc", "sortSvc", "colHover", "colAnimation", "autoColSvc", "selectionColSvc", "changeDetectionSvc", "animationFrameSvc", "undoRedo", "colDefFactory", "rowStyleSvc", "rowNodeBlockLoader", "rowNodeSorter", "ctrlsSvc", "pinnedCols", "dataTypeSvc", "syncSvc", "overlays", "stateSvc", "expansionSvc", "apiEventSvc", "ariaAnnounce", "menuSvc", "colMoves", "colAutosize", "colFlex", "colResize", "pivotColsSvc", "valueColsSvc", "rowGroupColsSvc", "funcColsSvc", "colNames", "colViewport", "pivotResultCols", "showRowGroupCols", "validation"].map((e, t) => [e, t]));
function oS(e, t) {
  return ((e.beanName ? oy[e.beanName] : void 0) ?? Number.MAX_SAFE_INTEGER) - ((t.beanName ? oy[t.beanName] : void 0) ?? Number.MAX_SAFE_INTEGER);
}
function oR(e, t) {
  return e?.beanName === "gridDestroySvc" ? -1 : 0;
}
var oD = `<div class="ag-header-viewport" role="presentation">
        <div class="ag-header-container" data-ref="eCenterContainer" role="rowgroup"></div>
    </div>`;
var ox = class extends iS {
  constructor(e) {
    super();
    this.eCenterContainer = null;
    this.headerRowComps = {};
    this.rowCompsList = [];
    this.pinned = e;
  }
  postConstruct() {
    this.selectAndSetTemplate();
    this.createManagedBean(new $$r$12(this.pinned)).setComp({
      setDisplayed: e => this.setDisplayed(e),
      setCtrls: e => this.setCtrls(e),
      setCenterWidth: e => this.eCenterContainer.style.width = e,
      setViewportScrollLeft: e => this.getGui().scrollLeft = e,
      setPinnedContainerWidth: e => {
        let t = this.getGui();
        t.style.width = e;
        t.style.maxWidth = e;
        t.style.minWidth = e;
      }
    }, this.getGui());
  }
  selectAndSetTemplate() {
    let e = "left" == this.pinned;
    let t = "right" == this.pinned;
    this.setTemplate(e ? '<div class="ag-pinned-left-header" role="rowgroup"></div>' : t ? '<div class="ag-pinned-right-header" role="rowgroup"></div>' : oD);
    this.eRowContainer = null !== this.eCenterContainer ? this.eCenterContainer : this.getGui();
  }
  destroy() {
    this.setCtrls([]);
    super.destroy();
  }
  destroyRowComp(e) {
    this.destroyBean(e);
    this.eRowContainer.removeChild(e.getGui());
  }
  setCtrls(e) {
    let t;
    let i = this.headerRowComps;
    this.headerRowComps = {};
    this.rowCompsList = [];
    let s = e => {
      let i = e.getGui();
      i.parentElement != this.eRowContainer && this.eRowContainer.appendChild(i);
      t && en(this.eRowContainer, i, t);
      t = i;
    };
    e.forEach(e => {
      let t = e.instanceId;
      let r = i[t];
      delete i[t];
      let o = r || this.createBean(new rO(e));
      this.headerRowComps[t] = o;
      this.rowCompsList.push(o);
      s(o);
    });
    Object.values(i).forEach(e => this.destroyRowComp(e));
  }
};
var oP = {
  selector: "AG-HEADER-ROOT",
  component: class extends iS {
    constructor() {
      super('<div class="ag-header" role="presentation"/>');
    }
    postConstruct() {
      this.createManagedBean(new $$rk43()).setComp({
        addOrRemoveCssClass: (e, t) => this.addOrRemoveCssClass(e, t),
        setHeightAndMinHeight: e => {
          this.getGui().style.height = e;
          this.getGui().style.minHeight = e;
        }
      }, this.getGui(), this.getFocusableElement());
      let e = e => {
        this.createManagedBean(e);
        this.appendChild(e);
      };
      e(new ox("left"));
      e(new ox(null));
      e(new ox("right"));
    }
  }
};
var oE = class extends iS {
  constructor(e, t, i, s, r) {
    let o;
    super();
    this.cellCtrl = t;
    this.rendererVersion = 0;
    this.editorVersion = 0;
    this.beans = e;
    this.column = t.column;
    this.rowNode = t.rowNode;
    this.eRow = s;
    let n = document.createElement("div");
    n.setAttribute("comp-id", `${this.getCompId()}`);
    this.eCell = n;
    t.isCellSpanning() ? ((o = document.createElement("div")).className = "ag-spanned-cell-wrapper", o.appendChild(n), b(o, "presentation"), this.setTemplateFromElement(o)) : this.setTemplateFromElement(n);
    this.cellCssClassManager = new $$ib34(() => n);
    this.forceWrapper = t.isForceWrapper();
    this.refreshWrapper(!1);
    b(n, t.getCellAriaRole());
    n.setAttribute("col-id", t.colIdSanitised);
    t.setComp({
      addOrRemoveCssClass: (e, t) => this.cellCssClassManager.addOrRemoveCssClass(e, t),
      setUserStyles: e => ea(n, e),
      getFocusableElement: () => n,
      setIncludeSelection: e => this.includeSelection = e,
      setIncludeRowDrag: e => this.includeRowDrag = e,
      setIncludeDndSource: e => this.includeDndSource = e,
      setRenderDetails: (e, t, i) => this.setRenderDetails(e, t, i),
      setEditDetails: (e, t, i) => this.setEditDetails(e, t, i),
      getCellEditor: () => this.cellEditor || null,
      getCellRenderer: () => this.cellRenderer || null,
      getParentOfValue: () => this.getParentOfValue()
    }, n, o, this.eCellWrapper, i, r, void 0);
  }
  getParentOfValue() {
    return this.eCellValue ? this.eCellValue : this.eCellWrapper ? this.eCellWrapper : this.eCell;
  }
  setRenderDetails(e, t, i) {
    if (this.cellEditor && !this.cellEditorPopupWrapper) return;
    this.firstRender = null == this.firstRender;
    let s = this.refreshWrapper(!1);
    this.refreshEditStyles(!1);
    e ? !(i || s) && this.refreshCellRenderer(e) || (this.destroyRenderer(), this.createCellRendererInstance(e)) : (this.destroyRenderer(), this.insertValueWithoutCellRenderer(t));
  }
  setEditDetails(e, t, i) {
    e ? this.createCellEditorInstance(e, t, i) : this.destroyEditor();
  }
  removeControls() {
    this.checkboxSelectionComp = this.beans.context.destroyBean(this.checkboxSelectionComp);
    this.dndSourceComp = this.beans.context.destroyBean(this.dndSourceComp);
    this.rowDraggingComp = this.beans.context.destroyBean(this.rowDraggingComp);
  }
  refreshWrapper(e) {
    let t = this.includeRowDrag || this.includeDndSource || this.includeSelection;
    let i = t || this.forceWrapper;
    let s = i && null == this.eCellWrapper;
    if (s) {
      let e = document.createElement("div");
      e.setAttribute("role", "presentation");
      e.setAttribute("class", "ag-cell-wrapper");
      this.eCellWrapper = e;
      this.eCell.appendChild(this.eCellWrapper);
    }
    let r = !i && null != this.eCellWrapper;
    r && ($$ei11(this.eCellWrapper), this.eCellWrapper = void 0);
    this.cellCssClassManager.addOrRemoveCssClass("ag-cell-value", !i);
    let o = !e && i;
    let n = o && null == this.eCellValue;
    if (n) {
      let e = document.createElement("span");
      e.setAttribute("role", "presentation");
      e.setAttribute("class", "ag-cell-value");
      this.eCellValue = e;
      this.eCellWrapper.appendChild(this.eCellValue);
    }
    let l = !o && null != this.eCellValue;
    l && ($$ei11(this.eCellValue), this.eCellValue = void 0);
    let a = s || r || n || l;
    a && this.removeControls();
    !e && t && this.addControls();
    return a;
  }
  addControls() {
    this.includeRowDrag && null == this.rowDraggingComp && (this.rowDraggingComp = this.cellCtrl.createRowDragComp(), this.rowDraggingComp && this.eCellWrapper.insertBefore(this.rowDraggingComp.getGui(), this.eCellValue));
    this.includeDndSource && null == this.dndSourceComp && (this.dndSourceComp = this.cellCtrl.createDndSource(), this.dndSourceComp && this.eCellWrapper.insertBefore(this.dndSourceComp.getGui(), this.eCellValue));
    this.includeSelection && null == this.checkboxSelectionComp && (this.checkboxSelectionComp = this.cellCtrl.createSelectionCheckbox(), this.checkboxSelectionComp && this.eCellWrapper.insertBefore(this.checkboxSelectionComp.getGui(), this.eCellValue));
  }
  createCellEditorInstance(e, t, i) {
    let s = this.editorVersion;
    let r = e.newAgStackInstance();
    let {
      params
    } = e;
    r.then(e => this.afterCellEditorCreated(s, e, params, t, i));
    ev(this.cellEditor) && params.cellStartedEdit && this.cellCtrl.focusCell(!0);
  }
  insertValueWithoutCellRenderer(e) {
    let t = this.getParentOfValue();
    et(t);
    let i = null != e ? $$tN25(e, !0) : null;
    null != i && (t.textContent = i);
  }
  destroyEditorAndRenderer() {
    this.destroyRenderer();
    this.destroyEditor();
  }
  destroyRenderer() {
    let {
      context
    } = this.beans;
    this.cellRenderer = context.destroyBean(this.cellRenderer);
    $$ei11(this.cellRendererGui);
    this.cellRendererGui = null;
    this.rendererVersion++;
  }
  destroyEditor() {
    let {
      context
    } = this.beans;
    this.hideEditorPopup && this.hideEditorPopup();
    this.hideEditorPopup = void 0;
    this.cellEditor = context.destroyBean(this.cellEditor);
    this.cellEditorPopupWrapper = context.destroyBean(this.cellEditorPopupWrapper);
    $$ei11(this.cellEditorGui);
    this.cellEditorGui = null;
    this.editorVersion++;
  }
  refreshCellRenderer(e) {
    if (null == this.cellRenderer || null == this.cellRenderer.refresh || this.cellRendererClass !== e.componentClass) return !1;
    let t = this.cellRenderer.refresh(e.params);
    return !0 === t || void 0 === t;
  }
  createCellRendererInstance(e) {
    let t = !this.beans.gos.get("suppressAnimationFrame") && this.beans.animationFrameSvc;
    let i = this.rendererVersion;
    let {
      componentClass
    } = e;
    let r = () => {
      if (this.rendererVersion !== i || !this.isAlive()) return;
      let t = e.newAgStackInstance();
      let r = this.afterCellRendererCreated.bind(this, i, componentClass);
      t && t.then(r);
    };
    t && this.firstRender ? this.beans.animationFrameSvc.createTask(r, this.rowNode.rowIndex, "createTasksP2") : r();
  }
  afterCellRendererCreated(e, t, i) {
    if (!this.isAlive() || e !== this.rendererVersion) {
      this.beans.context.destroyBean(i);
      return;
    }
    if (this.cellRenderer = i, this.cellRendererClass = t, this.cellRendererGui = this.cellRenderer.getGui(), null != this.cellRendererGui) {
      let e = this.getParentOfValue();
      et(e);
      e.appendChild(this.cellRendererGui);
    }
  }
  afterCellEditorCreated(e, t, i, s, r) {
    if (e !== this.editorVersion) {
      this.beans.context.destroyBean(t);
      return;
    }
    if (t.isCancelBeforeStart && t.isCancelBeforeStart()) {
      this.beans.context.destroyBean(t);
      this.cellCtrl.stopEditing(!0);
      return;
    }
    if (!t.getGui) {
      $$eW42(97, {
        colId: this.column.getId()
      });
      this.beans.context.destroyBean(t);
      return;
    }
    this.cellEditor = t;
    this.cellEditorGui = t.getGui();
    let o = s || void 0 !== t.isPopup && t.isPopup();
    o ? this.addPopupCellEditor(i, r) : this.addInCellEditor();
    this.refreshEditStyles(!0, o);
    t.afterGuiAttached && t.afterGuiAttached();
    this.cellCtrl.cellEditorAttached();
  }
  refreshEditStyles(e, t) {
    let {
      cellCssClassManager
    } = this;
    cellCssClassManager.addOrRemoveCssClass("ag-cell-inline-editing", e && !t);
    cellCssClassManager.addOrRemoveCssClass("ag-cell-popup-editing", e && !!t);
    cellCssClassManager.addOrRemoveCssClass("ag-cell-not-inline-editing", !e || !!t);
    this.cellCtrl.setInlineEditingCss();
  }
  addInCellEditor() {
    let {
      eCell
    } = this;
    eCell.contains(e3(this.beans)) && eCell.focus();
    this.destroyRenderer();
    this.refreshWrapper(!0);
    this.clearParentOfValue();
    this.cellEditorGui && this.getParentOfValue().appendChild(this.cellEditorGui);
  }
  addPopupCellEditor(e, t) {
    "fullRow" === this.beans.gos.get("editType") && $$eW42(98);
    let i = this.cellEditor;
    this.cellEditorPopupWrapper = this.beans.context.createBean(this.beans.editSvc.createPopupEditorWrapper(e));
    let s = this.cellEditorPopupWrapper.getGui();
    this.cellEditorGui && s.appendChild(this.cellEditorGui);
    let r = this.beans.popupSvc;
    let o = this.beans.gos.get("stopEditingWhenCellsLoseFocus");
    let n = null != t ? t : i.getPopupPosition?.() ?? "over";
    let l = this.beans.gos.get("enableRtl");
    let a = {
      ePopup: s,
      column: this.column,
      rowNode: this.rowNode,
      type: "popupCellEditor",
      eventSource: this.eCell,
      position: n,
      alignSide: l ? "right" : "left",
      keepWithinBounds: !0
    };
    let d = r.positionPopupByComponent.bind(r, a);
    let h = $$f13(this.beans.localeSvc);
    let u = r.addPopup({
      modal: o,
      eChild: s,
      closeOnEsc: !0,
      closedCallback: () => {
        this.cellCtrl.onPopupEditorClosed();
      },
      anchorToElement: this.eCell,
      positionCallback: d,
      ariaLabel: h("ariaLabelCellEditor", "Cell Editor")
    });
    u && (this.hideEditorPopup = u.hideFunc);
  }
  detach() {
    this.eRow.removeChild(this.getGui());
  }
  destroy() {
    this.cellCtrl.stopEditing();
    this.destroyEditorAndRenderer();
    this.removeControls();
    super.destroy();
  }
  clearParentOfValue() {
    let {
      eCell
    } = this;
    eCell.contains(e3(this.beans)) && eCell.focus({
      preventScroll: !0
    });
    et(this.getParentOfValue());
  }
};
var oF = class extends iS {
  constructor(e, t, i) {
    super();
    this.cellComps = {};
    this.beans = t;
    this.rowCtrl = e;
    let s = document.createElement("div");
    s.setAttribute("comp-id", `${this.getCompId()}`);
    s.setAttribute("style", this.getInitialStyle(i));
    this.setTemplateFromElement(s);
    let r = this.getGui();
    let o = r.style;
    this.domOrder = this.rowCtrl.getDomOrder();
    b(r, "row");
    e.setComp({
      setDomOrder: e => this.domOrder = e,
      setCellCtrls: e => this.setCellCtrls(e),
      showFullWidth: e => this.showFullWidth(e),
      getFullWidthCellRenderer: () => this.fullWidthCellRenderer,
      addOrRemoveCssClass: (e, t) => this.addOrRemoveCssClass(e, t),
      setUserStyles: e => ea(r, e),
      setTop: e => o.top = e,
      setTransform: e => o.transform = e,
      setRowIndex: e => r.setAttribute("row-index", e),
      setRowId: e => r.setAttribute("row-id", e),
      setRowBusinessKey: e => r.setAttribute("row-business-key", e),
      refreshFullWidth: e => this.fullWidthCellRenderer?.refresh?.(e()) ?? !1
    }, this.getGui(), i, void 0);
    this.addDestroyFunc(() => {
      e.unsetComp(i);
    });
  }
  getInitialStyle(e) {
    let t = this.rowCtrl.getInitialTransform(e);
    return t ? `transform: ${t}` : `top: ${this.rowCtrl.getInitialRowTop(e)}`;
  }
  showFullWidth(e) {
    e.newAgStackInstance().then(e => {
      if (this.isAlive()) {
        let t = e.getGui();
        this.getGui().appendChild(t);
        this.rowCtrl.setupDetailRowAutoHeight(t);
        this.setFullWidthRowComp(e);
      } else this.beans.context.destroyBean(e);
    });
  }
  setCellCtrls(e) {
    let t = Object.assign({}, this.cellComps);
    e.forEach(e => {
      let i = e.instanceId;
      null == this.cellComps[i] ? this.newCellComp(e) : t[i] = null;
    });
    this.destroyCells(Object.values(t));
    this.ensureDomOrder(e);
  }
  ensureDomOrder(e) {
    if (!this.domOrder) return;
    let t = [];
    e.forEach(e => {
      let i = this.cellComps[e.instanceId];
      i && t.push(i.getGui());
    });
    el(this.getGui(), t);
  }
  newCellComp(e) {
    let t = new oE(this.beans, e, this.rowCtrl.printLayout, this.getGui(), this.rowCtrl.editing);
    this.cellComps[e.instanceId] = t;
    this.getGui().appendChild(t.getGui());
  }
  destroy() {
    super.destroy();
    this.destroyCells(Object.values(this.cellComps));
  }
  setFullWidthRowComp(e) {
    this.fullWidthCellRenderer = e;
    this.addDestroyFunc(() => {
      this.fullWidthCellRenderer = this.beans.context.destroyBean(this.fullWidthCellRenderer);
    });
  }
  destroyCells(e) {
    e.forEach(e => {
      if (!e) return;
      let t = e.cellCtrl.instanceId;
      this.cellComps[t] === e && (e.detach(), e.destroy(), this.cellComps[t] = null);
    });
  }
};
var oA = {
  selector: "AG-ROW-CONTAINER",
  component: class extends iS {
    constructor(e) {
      super();
      this.eViewport = null;
      this.eContainer = null;
      this.eSpannedContainer = null;
      this.rowCompsNoSpan = {};
      this.rowCompsWithSpan = {};
      this.name = e?.name;
      this.options = rs[this.name];
    }
    postConstruct() {
      this.setTemplate(function (e, t, i) {
        let s = !!i.gos.get("enableCellSpan") && !!t.getSpannedRowCtrls;
        let r = $$ro8(e);
        let o = `<div class="${r}" data-ref="eContainer" role="rowgroup"></div>`;
        if ("center" === t.type || s) {
          let t = $$rn29(e);
          let i = $$rr28(e);
          let r = `<div class="ag-spanning-container ${t}" data-ref="eSpannedContainer" role="rowgroup"></div>`;
          return `<div class="ag-viewport ${i}" data-ref="eViewport" role="presentation">
                ${o}
                ${s ? r : ""}
            </div>`;
        }
        return o;
      }(this.name, this.options, this.beans));
      this.createManagedBean(new $$rf16(this.name)).setComp({
        setHorizontalScroll: e => this.eViewport.scrollLeft = e,
        setViewportHeight: e => this.eViewport.style.height = e,
        setRowCtrls: ({
          rowCtrls: e
        }) => this.setRowCtrls(e),
        setSpannedRowCtrls: e => this.setRowCtrls(e, !0),
        setDomOrder: e => {
          this.domOrder = e;
        },
        setContainerWidth: e => {
          this.eContainer.style.width = e;
          this.eSpannedContainer && (this.eSpannedContainer.style.width = e);
        },
        setOffsetTop: e => {
          let t = `translateY(${e})`;
          this.eContainer.style.transform = t;
          this.eSpannedContainer && (this.eSpannedContainer.style.transform = t);
        }
      }, this.eContainer, this.eSpannedContainer, this.eViewport);
    }
    destroy() {
      this.setRowCtrls([]);
      this.setRowCtrls([], !0);
      super.destroy();
      this.lastPlacedElement = null;
    }
    setRowCtrls(e, t) {
      let {
        beans,
        options
      } = this;
      let r = t ? this.eSpannedContainer : this.eContainer;
      let o = t ? {
        ...this.rowCompsWithSpan
      } : {
        ...this.rowCompsNoSpan
      };
      let n = {};
      t ? this.rowCompsWithSpan = n : this.rowCompsNoSpan = n;
      this.lastPlacedElement = null;
      let l = [];
      for (let t of e) {
        let e;
        let r = t.instanceId;
        let a = o[r];
        if (a) {
          e = a;
          delete o[r];
        } else {
          if (!t.rowNode.displayed) continue;
          e = new oF(t, beans, options.type);
        }
        n[r] = e;
        l.push([e, !a]);
      }
      this.removeOldRows(Object.values(o), r);
      this.addRowNodes(l, r);
    }
    addRowNodes(e, t) {
      let {
        domOrder
      } = this;
      for (let [s, r] of e) {
        let e = s.getGui();
        domOrder ? this.ensureDomOrder(e, t) : r && t.appendChild(e);
      }
    }
    removeOldRows(e, t) {
      for (let i of e) {
        t.removeChild(i.getGui());
        i.destroy();
      }
    }
    ensureDomOrder(e, t) {
      en(t, e, this.lastPlacedElement);
      this.lastPlacedElement = e;
    }
  }
};
function ok(e, t) {
  return t.map(t => {
    let i = `e${t[0].toUpperCase() + t.substring(1)}RowContainer`;
    e[i] = {
      name: t
    };
    return `<ag-row-container name="${t}" data-ref="${i}"></ag-row-container>`;
  }).join("");
}
var $$oM40 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.additionalFocusableContainers = new Set();
  }
  setComp(e, t, i) {
    this.view = e;
    this.eGridHostDiv = t;
    this.eGui = i;
    this.eGui.setAttribute("grid-id", this.beans.context.getGridId());
    let {
      dragAndDrop,
      ctrlsSvc
    } = this.beans;
    dragAndDrop?.registerGridDropTarget(() => this.eGui, this);
    sp(this.gos, t);
    this.createManagedBean(new sU(this.view));
    this.view.setRtlClass(this.gos.get("enableRtl") ? "ag-rtl" : "ag-ltr");
    let o = $$ef15(this.beans, this.eGridHostDiv, this.onGridSizeChanged.bind(this));
    this.addDestroyFunc(() => o());
    ctrlsSvc.register("gridCtrl", this);
  }
  isDetailGrid() {
    let e = ss(this.getGui());
    return e?.getAttribute("row-id")?.startsWith("detail") || !1;
  }
  getOptionalSelectors() {
    let e = this.beans;
    return {
      paginationSelector: e.pagination?.getPaginationSelector(),
      gridHeaderDropZonesSelector: e.registry.getSelector("AG-GRID-HEADER-DROP-ZONES"),
      sideBarSelector: e.sideBar?.getSelector(),
      statusBarSelector: e.registry?.getSelector("AG-STATUS-BAR"),
      watermarkSelector: e.licenseManager?.getWatermarkSelector()
    };
  }
  onGridSizeChanged() {
    this.eventSvc.dispatchEvent({
      type: "gridSizeChanged",
      clientWidth: this.eGridHostDiv.clientWidth,
      clientHeight: this.eGridHostDiv.clientHeight
    });
  }
  destroyGridUi() {
    this.view.destroyGridUi();
  }
  getGui() {
    return this.eGui;
  }
  setResizeCursor(e) {
    this.view.setCursor(e ? "ew-resize" : null);
  }
  disableUserSelect(e) {
    this.view.setUserSelect(e ? "none" : null);
  }
  focusNextInnerContainer(e) {
    let t = this.getFocusableContainers();
    let {
      indexWithFocus,
      nextIndex
    } = this.getNextFocusableIndex(t, e);
    if (nextIndex < 0 || nextIndex >= t.length) return !1;
    if (0 === nextIndex) {
      if (indexWithFocus > 0) {
        let {
          visibleCols,
          focusSvc
        } = this.beans;
        let i = tq(visibleCols.allCols);
        if (focusSvc.focusGridView({
          column: i,
          backwards: !0
        })) return !0;
      }
      return !1;
    }
    return this.focusContainer(t[nextIndex], e);
  }
  focusInnerElement(e) {
    let t = this.gos.getCallback("focusGridInnerElement");
    if (t && t({
      fromBottom: !!e
    })) return !0;
    let i = this.getFocusableContainers();
    let {
      focusSvc,
      visibleCols
    } = this.beans;
    let o = visibleCols.allCols;
    if (e) {
      if (i.length > 1) return this.focusContainer(tq(i), e);
      let t = tq(o);
      if (focusSvc.focusGridView({
        column: t,
        backwards: e
      })) return !0;
    }
    if (0 === this.gos.get("headerHeight") || sr(this.beans)) {
      if (focusSvc.focusGridView({
        column: o[0],
        backwards: e
      })) return !0;
      for (let t = 1; t < i.length; t++) if (st(i[t].getGui(), e)) return !0;
      return !1;
    }
    return focusSvc.focusFirstHeader();
  }
  forceFocusOutOfContainer(e = !1) {
    this.view.forceFocusOutOfContainer(e);
  }
  addFocusableContainer(e) {
    this.additionalFocusableContainers.add(e);
  }
  removeFocusableContainer(e) {
    this.additionalFocusableContainers.$$delete(e);
  }
  allowFocusForNextCoreContainer(e) {
    let t = this.view.getFocusableContainers();
    let {
      nextIndex,
      indexWithFocus
    } = this.getNextFocusableIndex(t, e);
    if (-1 === indexWithFocus || nextIndex < 0 || nextIndex >= t.length) return;
    let r = t[nextIndex];
    r.setAllowFocus?.(!0);
    setTimeout(() => {
      r.setAllowFocus?.(!1);
    });
  }
  isFocusable() {
    let e = this.beans;
    return !so(e) || !sr(e) || !!e.sideBar?.comp?.isDisplayed();
  }
  getNextFocusableIndex(e, t) {
    let i = e3(this.beans);
    let s = e.findIndex(e => e.getGui().contains(i));
    return {
      indexWithFocus: s,
      nextIndex: s + (t ? -1 : 1)
    };
  }
  focusContainer(e, t) {
    e.setAllowFocus?.(!0);
    let i = st(e.getGui(), t, !1, !0);
    e.setAllowFocus?.(!1);
    return i;
  }
  getFocusableContainers() {
    return [...this.view.getFocusableContainers(), ...this.additionalFocusableContainers];
  }
  destroy() {
    this.additionalFocusableContainers.clear();
    super.destroy();
  }
};
var oT = (e, t) => {
  for (let i of Object.keys(t)) t[i] = e;
  return t;
};
var oI = {
  dispatchEvent: "CommunityCore",
  ...oT("CommunityCore", {
    destroy: 0,
    getGridId: 0,
    getGridOption: 0,
    isDestroyed: 0,
    setGridOption: 0,
    updateGridOptions: 0
  }),
  ...oT("GridState", {
    getState: 0
  }),
  ...oT("SharedRowSelection", {
    setNodesSelected: 0,
    selectAll: 0,
    deselectAll: 0,
    selectAllFiltered: 0,
    deselectAllFiltered: 0,
    selectAllOnCurrentPage: 0,
    deselectAllOnCurrentPage: 0,
    getSelectedNodes: 0,
    getSelectedRows: 0
  }),
  ...oT("RowApi", {
    redrawRows: 0,
    setRowNodeExpanded: 0,
    getRowNode: 0,
    addRenderedRowListener: 0,
    getRenderedNodes: 0,
    forEachNode: 0,
    getFirstDisplayedRowIndex: 0,
    getLastDisplayedRowIndex: 0,
    getDisplayedRowAtIndex: 0,
    getDisplayedRowCount: 0
  }),
  ...oT("ScrollApi", {
    getVerticalPixelRange: 0,
    getHorizontalPixelRange: 0,
    ensureColumnVisible: 0,
    ensureIndexVisible: 0,
    ensureNodeVisible: 0
  }),
  ...oT("KeyboardNavigation", {
    getFocusedCell: 0,
    clearFocusedCell: 0,
    setFocusedCell: 0,
    tabToNextCell: 0,
    tabToPreviousCell: 0,
    setFocusedHeader: 0
  }),
  ...oT("EventApi", {
    addEventListener: 0,
    addGlobalListener: 0,
    removeEventListener: 0,
    removeGlobalListener: 0
  }),
  ...oT("ValueCache", {
    expireValueCache: 0
  }),
  ...oT("CellApi", {
    getCellValue: 0
  }),
  ...oT("SharedMenu", {
    showColumnMenu: 0,
    hidePopupMenu: 0
  }),
  ...oT("Sort", {
    onSortChanged: 0
  }),
  ...oT("PinnedRow", {
    getPinnedTopRowCount: 0,
    getPinnedBottomRowCount: 0,
    getPinnedTopRow: 0,
    getPinnedBottomRow: 0
  }),
  ...oT("Overlay", {
    showLoadingOverlay: 0,
    showNoRowsOverlay: 0,
    hideOverlay: 0
  }),
  ...oT("RenderApi", {
    setGridAriaProperty: 0,
    refreshCells: 0,
    refreshHeader: 0,
    isAnimationFrameQueueEmpty: 0,
    flushAllAnimationFrames: 0,
    getSizesForCurrentTheme: 0,
    getCellRendererInstances: 0
  }),
  ...oT("HighlightChanges", {
    flashCells: 0
  }),
  ...oT("RowDrag", {
    addRowDropZone: 0,
    removeRowDropZone: 0,
    getRowDropZoneParams: 0
  }),
  ...oT("ColumnApi", {
    getColumnDefs: 0,
    getColumnDef: 0,
    getDisplayNameForColumn: 0,
    getColumn: 0,
    getColumns: 0,
    applyColumnState: 0,
    getColumnState: 0,
    resetColumnState: 0,
    isPinning: 0,
    isPinningLeft: 0,
    isPinningRight: 0,
    getDisplayedColAfter: 0,
    getDisplayedColBefore: 0,
    setColumnsVisible: 0,
    setColumnsPinned: 0,
    getAllGridColumns: 0,
    getDisplayedLeftColumns: 0,
    getDisplayedCenterColumns: 0,
    getDisplayedRightColumns: 0,
    getAllDisplayedColumns: 0,
    getAllDisplayedVirtualColumns: 0
  }),
  ...oT("ColumnAutoSize", {
    sizeColumnsToFit: 0,
    autoSizeColumns: 0,
    autoSizeAllColumns: 0
  }),
  ...oT("ColumnGroup", {
    setColumnGroupOpened: 0,
    getColumnGroup: 0,
    getProvidedColumnGroup: 0,
    getDisplayNameForColumnGroup: 0,
    getColumnGroupState: 0,
    setColumnGroupState: 0,
    resetColumnGroupState: 0,
    getLeftDisplayedColumnGroups: 0,
    getCenterDisplayedColumnGroups: 0,
    getRightDisplayedColumnGroups: 0,
    getAllDisplayedColumnGroups: 0
  }),
  ...oT("ColumnMove", {
    moveColumnByIndex: 0,
    moveColumns: 0
  }),
  ...oT("ColumnResize", {
    setColumnWidths: 0
  }),
  ...oT("ColumnHover", {
    isColumnHovered: 0
  }),
  ...oT("EditCore", {
    getCellEditorInstances: 0,
    getEditingCells: 0,
    stopEditing: 0,
    startEditingCell: 0
  }),
  ...oT("UndoRedoEdit", {
    undoCellEditing: 0,
    redoCellEditing: 0,
    getCurrentUndoSize: 0,
    getCurrentRedoSize: 0
  }),
  ...oT("FilterCore", {
    isAnyFilterPresent: 0,
    onFilterChanged: 0
  }),
  ...oT("ColumnFilter", {
    isColumnFilterPresent: 0,
    getColumnFilterInstance: 0,
    destroyFilter: 0,
    setFilterModel: 0,
    getFilterModel: 0,
    getColumnFilterModel: 0,
    setColumnFilterModel: 0,
    showColumnFilter: 0
  }),
  ...oT("QuickFilter", {
    isQuickFilterPresent: 0,
    getQuickFilter: 0,
    resetQuickFilter: 0
  }),
  ...oT("Pagination", {
    paginationIsLastPageFound: 0,
    paginationGetPageSize: 0,
    paginationGetCurrentPage: 0,
    paginationGetTotalPages: 0,
    paginationGetRowCount: 0,
    paginationGoToNextPage: 0,
    paginationGoToPreviousPage: 0,
    paginationGoToFirstPage: 0,
    paginationGoToLastPage: 0,
    paginationGoToPage: 0
  }),
  ...oT("CsrmSsrmSharedApi", {
    expandAll: 0,
    collapseAll: 0,
    onRowHeightChanged: 0
  }),
  ...oT("SsrmInfiniteSharedApi", {
    setRowCount: 0,
    getCacheBlockState: 0,
    isLastRowIndexKnown: 0
  }),
  ...oT("ClientSideRowModelApi", {
    onGroupExpandedOrCollapsed: 0,
    refreshClientSideRowModel: 0,
    isRowDataEmpty: 0,
    forEachLeafNode: 0,
    forEachNodeAfterFilter: 0,
    forEachNodeAfterFilterAndSort: 0,
    resetRowHeights: 0,
    applyTransaction: 0,
    applyTransactionAsync: 0,
    flushAsyncTransactions: 0,
    getBestCostNodeSelection: 0
  }),
  ...oT("CsvExport", {
    getDataAsCsv: 0,
    exportDataAsCsv: 0
  }),
  ...oT("InfiniteRowModel", {
    refreshInfiniteCache: 0,
    purgeInfiniteCache: 0,
    getInfiniteRowCount: 0
  }),
  ...oT("AdvancedFilter", {
    getAdvancedFilterModel: 0,
    setAdvancedFilterModel: 0,
    showAdvancedFilterBuilder: 0,
    hideAdvancedFilterBuilder: 0
  }),
  ...oT("IntegratedCharts", {
    getChartModels: 0,
    getChartRef: 0,
    getChartImageDataURL: 0,
    downloadChart: 0,
    openChartToolPanel: 0,
    closeChartToolPanel: 0,
    createRangeChart: 0,
    createPivotChart: 0,
    createCrossFilterChart: 0,
    updateChart: 0,
    restoreChart: 0
  }),
  ...oT("Clipboard", {
    copyToClipboard: 0,
    cutToClipboard: 0,
    copySelectedRowsToClipboard: 0,
    copySelectedRangeToClipboard: 0,
    copySelectedRangeDown: 0,
    pasteFromClipboard: 0
  }),
  ...oT("ExcelExport", {
    getDataAsExcel: 0,
    exportDataAsExcel: 0,
    getSheetDataForExcel: 0,
    getMultipleSheetsAsExcel: 0,
    exportMultipleSheetsAsExcel: 0
  }),
  ...oT("SharedMasterDetail", {
    addDetailGridInfo: 0,
    removeDetailGridInfo: 0,
    getDetailGridInfo: 0,
    forEachDetailGridInfo: 0
  }),
  ...oT("ContextMenu", {
    showContextMenu: 0
  }),
  ...oT("ColumnMenu", {
    showColumnChooser: 0,
    hideColumnChooser: 0
  }),
  ...oT("CellSelection", {
    getCellRanges: 0,
    addCellRange: 0,
    clearRangeSelection: 0,
    clearCellSelection: 0
  }),
  ...oT("SharedRowGrouping", {
    setRowGroupColumns: 0,
    removeRowGroupColumns: 0,
    addRowGroupColumns: 0,
    getRowGroupColumns: 0,
    moveRowGroupColumn: 0
  }),
  ...oT("SharedAggregation", {
    addAggFuncs: 0,
    clearAggFuncs: 0,
    setColumnAggFunc: 0
  }),
  ...oT("SharedPivot", {
    isPivotMode: 0,
    getPivotResultColumn: 0,
    setValueColumns: 0,
    getValueColumns: 0,
    removeValueColumns: 0,
    addValueColumns: 0,
    setPivotColumns: 0,
    removePivotColumns: 0,
    addPivotColumns: 0,
    getPivotColumns: 0,
    setPivotResultColumns: 0,
    getPivotResultColumns: 0
  }),
  ...oT("ServerSideRowModelApi", {
    getServerSideSelectionState: 0,
    setServerSideSelectionState: 0,
    applyServerSideTransaction: 0,
    applyServerSideTransactionAsync: 0,
    applyServerSideRowData: 0,
    retryServerSideLoads: 0,
    flushServerSideAsyncTransactions: 0,
    refreshServerSide: 0,
    getServerSideGroupLevelState: 0
  }),
  ...oT("SideBar", {
    isSideBarVisible: 0,
    setSideBarVisible: 0,
    setSideBarPosition: 0,
    openToolPanel: 0,
    closeToolPanel: 0,
    getOpenedToolPanel: 0,
    refreshToolPanel: 0,
    isToolPanelShowing: 0,
    getToolPanelInstance: 0,
    getSideBar: 0
  }),
  ...oT("StatusBar", {
    getStatusPanel: 0
  })
};
var oL = {
  isDestroyed: () => !0,
  destroy() {},
  preConstruct() {},
  postConstruct() {},
  preWireBeans() {},
  wireBeans() {}
};
var oO = (e, t) => e.eventSvc.dispatchEvent(t);
var oG = class {};
Reflect.defineProperty(oG, "name", {
  value: "GridApi"
});
var oH = class extends $$tM23 {
  constructor() {
    super();
    this.beanName = "apiFunctionSvc";
    this.api = new oG();
    this.fns = {
      ...oL,
      dispatchEvent: oO
    };
    this.preDestroyLink = "";
    let {
      api
    } = this;
    for (let t of Object.keys(oI)) api[t] = this.makeApi(t)[t];
  }
  postConstruct() {
    this.preDestroyLink = this.beans.frameworkOverrides.getDocLink("grid-lifecycle/#grid-pre-destroyed");
  }
  addFunction(e, t) {
    let {
      fns,
      beans
    } = this;
    fns !== oL && (fns[e] = beans?.validation?.validateApiFunction(e, t) ?? t);
  }
  makeApi(e) {
    return {
      [e]: (...t) => {
        let {
          beans,
          fns: {
            [e]: e
          }
        } = this;
        return e ? e(beans, ...t) : this.apiNotFound(e);
      }
    };
  }
  apiNotFound(e) {
    let {
      beans,
      gos,
      preDestroyLink
    } = this;
    if (beans) {
      let t = oI[e];
      gos.assertModuleRegistered(t, `api.${e}`) && $$eW42(27, {
        fnName: e,
        module: t
      });
    } else $$eW42(26, {
      fnName: e,
      preDestroyLink
    });
  }
  destroy() {
    super.destroy();
    this.fns = oL;
    this.beans = null;
  }
};
function oN(e, t) {
  e.gos.updateGridOptions({
    options: t
  });
}
var oB = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "horizontalResizeSvc";
  }
  addResizeBar(e) {
    let t = {
      dragStartPixels: e.dragStartPixels || 0,
      eElement: e.eResizeBar,
      onDragStart: this.onDragStart.bind(this, e),
      onDragStop: this.onDragStop.bind(this, e),
      onDragging: this.onDragging.bind(this, e),
      onDragCancel: this.onDragStop.bind(this, e),
      includeTouch: !0,
      stopPropagationForTouch: !0
    };
    let {
      dragSvc
    } = this.beans;
    dragSvc.addDragSource(t);
    return () => dragSvc.removeDragSource(t);
  }
  onDragStart(e, t) {
    this.dragStartX = t.clientX;
    this.setResizeIcons();
    let i = t instanceof MouseEvent && !0 === t.shiftKey;
    e.onResizeStart(i);
  }
  setResizeIcons() {
    let e = this.beans.ctrlsSvc.get("gridCtrl");
    e.setResizeCursor(!0);
    e.disableUserSelect(!0);
  }
  onDragStop(e) {
    e.onResizeEnd(this.resizeAmount);
    this.resetIcons();
  }
  resetIcons() {
    let e = this.beans.ctrlsSvc.get("gridCtrl");
    e.setResizeCursor(!1);
    e.disableUserSelect(!1);
  }
  onDragging(e, t) {
    this.resizeAmount = t.clientX - this.dragStartX;
    e.onResizing(this.resizeAmount);
  }
};
var oV = class extends iS {
  constructor(e, t, i, s, r, o) {
    super();
    this.cellValueFn = e;
    this.rowNode = t;
    this.column = i;
    this.customGui = s;
    this.dragStartPixels = r;
    this.suppressVisibilityChange = o;
    this.dragSource = null;
  }
  isCustomGui() {
    return null != this.customGui;
  }
  postConstruct() {
    let {
      beans,
      rowNode,
      column,
      gos
    } = this;
    if (this.customGui ? this.setDragElement(this.customGui, this.dragStartPixels) : (this.setTemplate('<div class="ag-drag-handle ag-row-drag" aria-hidden="true"></div>'), this.getGui().appendChild(rY("rowDrag", beans, null)), this.addDragSource()), !this.suppressVisibilityChange) {
      let e = gos.get("rowDragManaged") ? new oU(this, rowNode, column) : new oz(this, rowNode, column);
      this.createManagedBean(e, this.beans.context);
    }
  }
  setDragElement(e, t) {
    this.setTemplateFromElement(e, void 0, void 0, !0);
    this.addDragSource(t);
  }
  getSelectedNodes() {
    let e = this.rowNode;
    if (!this.gos.get("rowDragMultiRow")) return [e];
    let t = this.beans.selectionSvc?.getSelectedNodes() ?? [];
    return -1 !== t.indexOf(e) ? t : [e];
  }
  getDragItem() {
    let {
      column,
      rowNode
    } = this;
    return {
      rowNode,
      rowNodes: this.getSelectedNodes(),
      columns: column ? [column] : void 0,
      defaultTextValue: this.cellValueFn()
    };
  }
  getRowDragText(e) {
    if (e) {
      let t = e.getColDef();
      if (t.rowDragText) return t.rowDragText;
    }
    return this.gos.get("rowDragText");
  }
  addDragSource(e = 4) {
    this.dragSource && this.removeDragSource();
    let t = this.getGui();
    this.gos.get("enableCellTextSelection") && (this.removeMouseDownListener(), this.mouseDownListener = this.addManagedElementListeners(t, {
      mousedown: e => {
        e?.preventDefault();
      }
    })[0]);
    let i = this.getLocaleTextFunc();
    this.dragSource = {
      type: 2,
      eElement: t,
      dragItemName: () => {
        let e = this.getDragItem();
        let t = e.rowNodes?.length || 1;
        let s = this.getRowDragText(this.column);
        return s ? s(e, t) : 1 === t ? this.cellValueFn() : `${t} ${i("rowDragRows", "rows")}`;
      },
      getDragItem: () => this.getDragItem(),
      dragStartPixels: e,
      dragSourceDomDataKey: this.gos.getDomDataKey()
    };
    this.beans.dragAndDrop.addDragSource(this.dragSource, !0);
  }
  destroy() {
    this.removeDragSource();
    this.removeMouseDownListener();
    super.destroy();
  }
  removeDragSource() {
    this.dragSource && (this.beans.dragAndDrop.removeDragSource(this.dragSource), this.dragSource = null);
  }
  removeMouseDownListener() {
    this.mouseDownListener && (this.mouseDownListener(), this.mouseDownListener = void 0);
  }
};
var oW = class extends $$tM23 {
  constructor(e, t, i) {
    super();
    this.parent = e;
    this.rowNode = t;
    this.column = i;
  }
  setDisplayedOrVisible(e) {
    let t = {
      skipAriaHidden: !0
    };
    if (e) this.parent.setDisplayed(!1, t);else {
      let e = !0;
      let i = !1;
      let {
        column,
        rowNode,
        parent
      } = this;
      column && (e = column.isRowDrag(rowNode) || parent.isCustomGui(), i = "function" == typeof column.getColDef().rowDrag);
      i ? (parent.setDisplayed(!0, t), parent.setVisible(e, t)) : (parent.setDisplayed(e, t), parent.setVisible(!0, t));
    }
  }
};
var oz = class extends oW {
  postConstruct() {
    this.addManagedPropertyListener("suppressRowDrag", this.onSuppressRowDrag.bind(this));
    let e = this.workOutVisibility.bind(this);
    this.addManagedListeners(this.rowNode, {
      dataChanged: e,
      cellChanged: e
    });
    this.addManagedListeners(this.beans.eventSvc, {
      newColumnsLoaded: e
    });
    this.workOutVisibility();
  }
  onSuppressRowDrag() {
    this.workOutVisibility();
  }
  workOutVisibility() {
    let e = this.gos.get("suppressRowDrag");
    this.setDisplayedOrVisible(e);
  }
};
var oU = class extends oW {
  postConstruct() {
    let e = this.workOutVisibility.bind(this);
    this.addManagedListeners(this.beans.eventSvc, {
      sortChanged: e,
      filterChanged: e,
      columnRowGroupChanged: e,
      newColumnsLoaded: e
    });
    this.addManagedListeners(this.rowNode, {
      dataChanged: e,
      cellChanged: e
    });
    this.addManagedPropertyListener("suppressRowDrag", this.onSuppressRowDrag.bind(this));
    this.workOutVisibility();
  }
  onSuppressRowDrag() {
    this.workOutVisibility();
  }
  workOutVisibility() {
    let {
      rowDragSvc,
      dragAndDrop,
      gos
    } = this.beans;
    let s = rowDragSvc.rowDragFeature;
    let r = s && s.shouldPreventRowMove();
    let o = gos.get("suppressRowDrag");
    let n = dragAndDrop.hasExternalDropZones();
    this.setDisplayedOrVisible(r && !n || o);
  }
};
var o$ = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "rowDragSvc";
  }
  setupRowDrag(e, t) {
    let i = t.createManagedBean(new sD(e));
    let s = this.beans.dragAndDrop;
    s.addDropTarget(i);
    t.addDestroyFunc(() => s.removeDropTarget(i));
    this.rowDragFeature = i;
  }
  createRowDragComp(e, t, i, s, r, o) {
    return new oV(e, t, i, s, r, o);
  }
  createRowDragCompForRow(e, t) {
    if (tl(this.gos)) return;
    let i = this.getLocaleTextFunc();
    return this.createRowDragComp(() => `1 ${i("rowDragRow", "row")}`, e, void 0, t, void 0, !0);
  }
  createRowDragCompForCell(e, t, i, s, r, o) {
    let n = this.gos;
    if (!(n.get("rowDragManaged") && (!$$eK33(n) || n.get("pagination")))) return this.createRowDragComp(i, e, t, s, r, o);
  }
};
var oK = {
  moduleName: "Drag",
  version: eI,
  beans: [sP]
};
var o_ = {
  moduleName: "SharedDragAndDrop",
  version: eI,
  beans: [sv],
  dependsOn: [oK],
  userComponents: {
    agDragAndDropImage: rJ
  },
  icons: {
    columnMovePin: "pin",
    columnMoveHide: "eye-slash",
    columnMoveMove: "arrows",
    columnMoveLeft: "left",
    columnMoveRight: "right",
    columnMoveGroup: "group",
    columnMoveValue: "aggregation",
    columnMovePivot: "pivot",
    dropNotAllowed: "not-allowed",
    rowDrag: "grip"
  }
};
var $$oj27 = {
  moduleName: "RowDrag",
  version: eI,
  beans: [o$],
  apiFunctions: {
    addRowDropZone: function (e, t) {
      e.rowDragSvc?.rowDragFeature?.addRowDropZone(t);
    },
    removeRowDropZone: function (e, t) {
      let i = e.dragAndDrop?.findExternalZone(t);
      i && e.dragAndDrop?.removeDropTarget(i);
    },
    getRowDropZoneParams: function (e, t) {
      return e.rowDragSvc?.rowDragFeature?.getRowDropZone(t);
    }
  },
  dependsOn: [o_]
};
var oq = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colAnimation";
    this.executeNextFuncs = [];
    this.executeLaterFuncs = [];
    this.active = !1;
    this.activeNext = !1;
    this.suppressAnimation = !1;
    this.animationThreadCount = 0;
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, e => this.gridBodyCtrl = e.gridBodyCtrl);
  }
  isActive() {
    return this.active && !this.suppressAnimation;
  }
  setSuppressAnimation(e) {
    this.suppressAnimation = e;
  }
  start() {
    if (this.active) return;
    let {
      gos
    } = this;
    gos.get("suppressColumnMoveAnimation") || gos.get("enableRtl") || (this.ensureAnimationCssClassPresent(), this.active = !0, this.activeNext = !0);
  }
  finish() {
    this.active && this.flush(() => this.activeNext = !1, () => this.active = !1);
  }
  executeNextVMTurn(e) {
    this.activeNext ? this.executeNextFuncs.push(e) : e();
  }
  executeLaterVMTurn(e) {
    this.active ? this.executeLaterFuncs.push(e) : e();
  }
  ensureAnimationCssClassPresent() {
    this.animationThreadCount++;
    let e = this.animationThreadCount;
    let {
      gridBodyCtrl
    } = this;
    gridBodyCtrl.setColumnMovingCss(!0);
    this.executeLaterFuncs.push(() => {
      this.animationThreadCount === e && gridBodyCtrl.setColumnMovingCss(!1);
    });
  }
  flush(e, t) {
    let {
      executeNextFuncs,
      executeLaterFuncs
    } = this;
    if (0 === executeNextFuncs.length && 0 === executeLaterFuncs.length) {
      e();
      t();
      return;
    }
    let r = e => {
      for (; e.length;) {
        let t = e.pop();
        t && t();
      }
    };
    this.beans.frameworkOverrides.wrapIncoming(() => {
      window.setTimeout(() => {
        e();
        r(executeNextFuncs);
      }, 0);
      window.setTimeout(() => {
        t();
        r(executeLaterFuncs);
      }, 200);
    });
  }
};
var oY = class extends $$tM23 {
  constructor(e) {
    super();
    this.pinned = e;
    this.columnsToAggregate = [];
    this.columnsToGroup = [];
    this.columnsToPivot = [];
  }
  onDragEnter(e) {
    if (this.clearColumnsList(), this.gos.get("functionsReadOnly")) return;
    let t = e.dragItem.columns;
    t && t.forEach(e => {
      !(!e.isPrimary() || e.isAnyFunctionActive()) && (e.isAllowValue() ? this.columnsToAggregate.push(e) : e.isAllowRowGroup() ? this.columnsToGroup.push(e) : e.isAllowPivot() && this.columnsToPivot.push(e));
    });
  }
  getIconName() {
    return this.columnsToAggregate.length + this.columnsToGroup.length + this.columnsToPivot.length > 0 ? this.pinned ? "pinned" : "move" : null;
  }
  onDragLeave(e) {
    this.clearColumnsList();
  }
  clearColumnsList() {
    this.columnsToAggregate.length = 0;
    this.columnsToGroup.length = 0;
    this.columnsToPivot.length = 0;
  }
  onDragging(e) {}
  onDragStop(e) {
    let {
      valueColsSvc,
      rowGroupColsSvc,
      pivotColsSvc
    } = this.beans;
    this.columnsToAggregate.length > 0 && valueColsSvc?.addColumns(this.columnsToAggregate, "toolPanelDragAndDrop");
    this.columnsToGroup.length > 0 && rowGroupColsSvc?.addColumns(this.columnsToGroup, "toolPanelDragAndDrop");
    this.columnsToPivot.length > 0 && pivotColsSvc?.addColumns(this.columnsToPivot, "toolPanelDragAndDrop");
  }
  onDragCancel() {
    this.clearColumnsList();
  }
};
function oJ(e) {
  var t;
  let {
    isFromHeader,
    fromLeft,
    xPosition,
    fromEnter,
    fakeEvent,
    pinned,
    gos,
    colModel,
    colMoves,
    visibleCols
  } = e;
  let {
    allMovingColumns
  } = e;
  if (isFromHeader) {
    let e = [];
    allMovingColumns.forEach(t => {
      let i = null;
      let s = t.getParent();
      for (; null != s && 1 === s.getDisplayedLeafColumns().length;) {
        i = s;
        s = s.getParent();
      }
      null != i ? (i.getColGroupDef()?.marryChildren ? i.getProvidedColumnGroup().getLeafColumns() : i.getLeafColumns()).forEach(t => {
        e.includes(t) || e.push(t);
      }) : e.includes(t) || e.push(t);
    });
    c = e;
  }
  let g = allMovingColumns.slice();
  t = colModel.getCols();
  !g || g.length <= 1 || g.filter(e => 0 > t.indexOf(e)).length > 0 || g.sort((e, i) => t.indexOf(e) - t.indexOf(i));
  let p = function (e) {
    let t;
    let {
      movingCols,
      draggingRight,
      xPosition: _xPosition,
      pinned: _pinned,
      gos: _gos,
      colModel: _colModel,
      visibleCols: _visibleCols
    } = e;
    if (_gos.get("suppressMovableColumns") || movingCols.some(e => e.getColDef().suppressMovable)) return [];
    let d = function (e, t) {
      switch (t) {
        case "left":
          return e.leftCols;
        case "right":
          return e.rightCols;
        default:
          return e.centerCols;
      }
    }(_visibleCols, _pinned);
    let h = _colModel.getCols();
    let u = d.filter(e => movingCols.includes(e));
    let c = d.filter(e => !movingCols.includes(e));
    let g = h.filter(e => !movingCols.includes(e));
    let p = 0;
    let m = _xPosition;
    if (draggingRight) {
      let e = 0;
      u.forEach(t => e += t.getActualWidth());
      m -= e;
    }
    if (m > 0) {
      for (let e = 0; e < c.length && !((m -= c[e].getActualWidth()) < 0); e++) p++;
      draggingRight && p++;
    }
    if (p > 0) {
      let e = c[p - 1];
      t = g.indexOf(e) + 1;
    } else -1 === (t = g.indexOf(c[0])) && (t = 0);
    let f = [t];
    let C = (e, t) => e - t;
    if (draggingRight) {
      let e = t + 1;
      let i = h.length - 1;
      for (; e <= i;) {
        f.push(e);
        e++;
      }
      f.sort(C);
    } else {
      let e = t;
      let i = h.length - 1;
      let s = h[e];
      for (; e <= i && 0 > d.indexOf(s);) {
        e++;
        f.push(e);
        s = h[e];
      }
      for (e = t - 1; e >= 0;) {
        f.push(e);
        e--;
      }
      f.sort(C).reverse();
    }
    return f;
  }({
    movingCols: g,
    draggingRight: fromLeft,
    xPosition,
    pinned,
    gos,
    colModel,
    visibleCols
  });
  let m = function (e, t) {
    let i = t.getCols();
    let s = e.map(e => i.indexOf(e)).sort((e, t) => e - t);
    let r = s[0];
    return tq(s) - r != s.length - 1 ? null : r;
  }(g, colModel);
  if (0 === p.length) return;
  let f = p[0];
  let C = null !== m && !fromEnter;
  if (isFromHeader && (C = null !== m), C && !fakeEvent && (!fromLeft && f >= m || fromLeft && f <= m)) return;
  let w = visibleCols.allCols;
  let v = [];
  let b = null;
  for (let e = 0; e < p.length; e++) {
    let t = p[e];
    let i = colMoves.getProposedColumnOrder(g, t);
    if (!colMoves.doesOrderPassRules(i)) continue;
    let s = i.filter(e => w.includes(e));
    if (null === b) b = s;else if (!tY(s, b)) break;
    let r = function (e) {
      function t(e) {
        let t = [];
        let i = e.getOriginalParent();
        for (; null != i;) {
          t.push(i);
          i = i.getOriginalParent();
        }
        return t;
      }
      let i = 0;
      for (let s = 0; s < e.length - 1; s++) {
        let r = t(e[s]);
        let o = t(e[s + 1]);
        [r, o] = r.length > o.length ? [r, o] : [o, r];
        r.forEach(e => {
          -1 === o.indexOf(e) && i++;
        });
      }
      return i;
    }(i);
    v.push({
      move: t,
      fragCount: r
    });
  }
  if (0 === v.length) return;
  v.sort((e, t) => e.fragCount - t.fragCount);
  let y = v[0].move;
  if (!(y > colModel.getCols().length - allMovingColumns.length)) return {
    columns: allMovingColumns,
    toIndex: y
  };
}
function oZ(e) {
  let {
    columns,
    toIndex
  } = oJ(e) || {};
  let {
    finished,
    colMoves
  } = e;
  return columns && null != toIndex ? (colMoves.moveColumns(columns, toIndex, "uiColumnMoved", finished), finished ? null : {
    columns,
    toIndex
  }) : null;
}
function oX(e) {
  let {
    pinned,
    fromKeyboard,
    gos,
    ctrlsSvc,
    useHeaderRow,
    skipScrollPadding
  } = e;
  let l = ctrlsSvc.getHeaderRowContainerCtrl(pinned)?.eViewport;
  let {
    x
  } = e;
  return l ? (fromKeyboard && (a -= l.getBoundingClientRect().left), gos.get("enableRtl") && (useHeaderRow && (l = l.querySelector(".ag-header-row")), a = l.clientWidth - x), null != pinned || skipScrollPadding || (a += ctrlsSvc.get("center").getCenterViewportScrollLeft()), x) : 0;
}
function oQ(e, t) {
  for (let i of e) {
    i.moving = t;
    i.dispatchColEvent("movingChanged", "uiColumnMoved");
  }
}
var o0 = class extends $$tM23 {
  constructor(e) {
    super();
    this.pinned = e;
    this.needToMoveLeft = !1;
    this.needToMoveRight = !1;
    this.lastMovedInfo = null;
    this.isCenterContainer = !ew(e);
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, e => {
      this.gridBodyCon = e.gridBodyCtrl;
    });
  }
  getIconName() {
    let {
      pinned,
      lastDraggingEvent
    } = this;
    for (let i of lastDraggingEvent?.dragItem.columns ?? []) {
      let t = i.getPinned();
      if (i.getColDef().lockPinned) {
        if (t == pinned) return "move";
        continue;
      }
      if (t === pinned || !pinned) return "move";
      if (!t && pinned) return "pinned";
    }
    return "notAllowed";
  }
  onDragEnter(e) {
    let t = e.dragItem;
    let i = t.columns;
    if (0 === e.dragSource.type) this.setColumnsVisible(i, !0, "uiColumnDragged");else {
      let e = t.visibleState;
      let s = (i || []).filter(t => e[t.getId()]);
      this.setColumnsVisible(s, !0, "uiColumnDragged");
    }
    this.gos.get("suppressMoveWhenColumnDragging") || this.attemptToPinColumns(i, this.pinned);
    this.onDragging(e, !0, !0);
  }
  onDragging(e = this.lastDraggingEvent, t = !1, i = !1, s = !1) {
    let {
      gos,
      ctrlsSvc
    } = this.beans;
    let n = gos.get("suppressMoveWhenColumnDragging");
    if (s && !n) {
      this.finishColumnMoving();
      return;
    }
    if (this.lastDraggingEvent = e, !e || !s && ev(e.hDirection)) return;
    let l = oX({
      x: e.x,
      pinned: this.pinned,
      gos,
      ctrlsSvc
    });
    t || this.checkCenterForScrolling(l);
    n ? this.handleColumnDragWhileSuppressingMovement(e, t, i, l, s) : this.handleColumnDragWhileAllowingMovement(e, t, i, l, s);
  }
  onDragLeave() {
    this.ensureIntervalCleared();
    this.clearHighlighted();
    this.lastMovedInfo = null;
  }
  onDragStop() {
    this.onDragging(this.lastDraggingEvent, !1, !0, !0);
    this.ensureIntervalCleared();
    this.lastMovedInfo = null;
  }
  onDragCancel() {
    this.clearHighlighted();
    this.ensureIntervalCleared();
    this.lastMovedInfo = null;
  }
  setColumnsVisible(e, t, i) {
    if (!e) return;
    let s = e.filter(e => !e.getColDef().lockVisible);
    this.beans.colModel.setColsVisible(s, t, i);
  }
  finishColumnMoving() {
    this.clearHighlighted();
    let e = this.lastMovedInfo;
    if (!e) return;
    let {
      columns,
      toIndex
    } = e;
    this.beans.colMoves.moveColumns(columns, toIndex, "uiColumnMoved", !0);
  }
  handleColumnDragWhileSuppressingMovement(e, t, i, s, r) {
    let o = this.getAllMovingColumns(e, !0);
    if (r) {
      let e = this.isAttemptingToPin(o);
      e && this.attemptToPinColumns(o, void 0, !0);
      let {
        fromLeft,
        xPosition
      } = this.getNormalisedXPositionInfo(o, e) || {};
      if (null == fromLeft || null == xPosition) {
        this.finishColumnMoving();
        return;
      }
      this.moveColumnsAfterHighlight({
        allMovingColumns: o,
        xPosition,
        fromEnter: t,
        fakeEvent: i,
        fromLeft
      });
    } else {
      if (!this.beans.dragAndDrop.isDropZoneWithinThisGrid(e)) return;
      this.highlightHoveredColumn(o, s);
    }
  }
  handleColumnDragWhileAllowingMovement(e, t, i, s, r) {
    let o = this.getAllMovingColumns(e);
    let n = "right" === this.normaliseDirection(e.hDirection);
    let l = 1 === e.dragSource.type;
    let a = oZ({
      ...this.getMoveColumnParams({
        allMovingColumns: o,
        isFromHeader: l,
        xPosition: s,
        fromLeft: n,
        fromEnter: t,
        fakeEvent: i
      }),
      finished: r
    });
    a && (this.lastMovedInfo = a);
  }
  getAllMovingColumns(e, t = !1) {
    let i = e.dragSource.getDragItem();
    let s = null;
    return (t && (s = i.columnsInSplit) || (s = i.columns), s) ? s.filter(e => !e.getColDef().lockPinned || e.getPinned() == this.pinned) : [];
  }
  getMoveColumnParams(e) {
    let {
      allMovingColumns,
      isFromHeader,
      xPosition,
      fromLeft,
      fromEnter,
      fakeEvent
    } = e;
    let {
      gos,
      colModel,
      colMoves,
      visibleCols
    } = this.beans;
    return {
      allMovingColumns,
      isFromHeader,
      fromLeft,
      xPosition,
      pinned: this.pinned,
      fromEnter,
      fakeEvent,
      gos,
      colModel,
      colMoves,
      visibleCols
    };
  }
  highlightHoveredColumn(e, t) {
    let i;
    let {
      gos,
      colModel
    } = this.beans;
    let o = gos.get("enableRtl");
    let n = colModel.getCols().filter(e => e.isVisible() && e.getPinned() === this.pinned);
    let l = null;
    let a = null;
    let d = null;
    for (let e of n) {
      if (a = e.getActualWidth(), null != (l = this.getNormalisedColumnLeft(e, 0, o))) {
        let i = l + a;
        if (l <= t && i >= t) {
          d = e;
          break;
        }
      }
      l = null;
      a = null;
    }
    if (d) -1 !== e.indexOf(d) && (d = null);else {
      for (let e = n.length - 1; e >= 0; e--) {
        let t = n[e];
        let i = n[e].getParent();
        if (!i) {
          d = t;
          break;
        }
        let s = i?.getDisplayedLeafColumns();
        if (s.length) {
          d = tq(s);
          break;
        }
      }
      if (!d) return;
      l = this.getNormalisedColumnLeft(d, 0, o);
      a = d.getActualWidth();
    }
    this.lastHighlightedColumn?.column !== d && this.clearHighlighted();
    null != d && null != l && null != a && (o1(d, i = t - l < a / 2 !== o ? 0 : 1), this.lastHighlightedColumn = {
      column: d,
      position: i
    });
  }
  getNormalisedXPositionInfo(e, t) {
    let {
      gos,
      visibleCols
    } = this.beans;
    let r = gos.get("enableRtl");
    let {
      firstMovingCol,
      column,
      position
    } = this.getColumnMoveAndTargetInfo(e, t, r);
    if (!firstMovingCol || !column || null == position) return;
    let a = visibleCols.allCols;
    let d = a.indexOf(firstMovingCol);
    let h = a.indexOf(column);
    let u = 0 === position !== r;
    let c = d < h || d === h && !u;
    let g = 0;
    if (u ? c && (g -= 1) : c || (g += 1), h + g === d) return;
    let p = a[h + g];
    if (p) return {
      fromLeft: c,
      xPosition: this.getNormalisedColumnLeft(p, 20, r)
    };
  }
  getColumnMoveAndTargetInfo(e, t, i) {
    let s = this.lastHighlightedColumn || {};
    let {
      firstMovingCol,
      lastMovingCol
    } = function (e) {
      let t;
      let i;
      let s = e.length;
      for (let r = 0; r < s; r++) {
        if (!t) {
          let i = e[r];
          null != i.getLeft() && (t = i);
        }
        if (!i) {
          let t = e[s - 1 - r];
          null != t.getLeft() && (i = t);
        }
        if (t && i) break;
      }
      return {
        firstMovingCol: t,
        lastMovingCol: i
      };
    }(e);
    if (!firstMovingCol || !lastMovingCol || s.column || !t) return {
      firstMovingCol,
      ...s
    };
    let n = "left" === this.getPinDirection();
    return {
      firstMovingCol,
      position: n ? 1 : 0,
      column: n !== i ? firstMovingCol : lastMovingCol
    };
  }
  normaliseDirection(e) {
    if (this.gos.get("enableRtl")) switch (e) {
      case "left":
        return "right";
      case "right":
        return "left";
    }
    return e;
  }
  getNormalisedColumnLeft(e, t, i) {
    let {
      gos,
      ctrlsSvc
    } = this.beans;
    let o = e.getLeft();
    if (null == o) return null;
    let n = e.getActualWidth();
    return oX({
      x: i ? o + n - t : o + t,
      pinned: e.getPinned(),
      useHeaderRow: i,
      skipScrollPadding: !0,
      gos,
      ctrlsSvc
    });
  }
  isAttemptingToPin(e) {
    let t = this.needToMoveLeft || this.needToMoveRight;
    let i = this.failedMoveAttempts > 7;
    return t && i || e.some(e => e.getPinned() !== this.pinned);
  }
  moveColumnsAfterHighlight(e) {
    let {
      allMovingColumns,
      xPosition,
      fromEnter,
      fakeEvent,
      fromLeft
    } = e;
    let {
      columns,
      toIndex
    } = oJ(this.getMoveColumnParams({
      allMovingColumns,
      isFromHeader: !0,
      xPosition,
      fromLeft,
      fromEnter,
      fakeEvent
    })) || {};
    columns && null != toIndex && (this.lastMovedInfo = {
      columns,
      toIndex
    });
    this.finishColumnMoving();
  }
  clearHighlighted() {
    let {
      lastHighlightedColumn
    } = this;
    lastHighlightedColumn && (o1(lastHighlightedColumn.column, null), this.lastHighlightedColumn = null);
  }
  checkCenterForScrolling(e) {
    let t;
    let i;
    if (!this.isCenterContainer) return;
    let s = this.beans.ctrlsSvc.get("center");
    let r = s.getCenterViewportScrollLeft();
    let o = r + s.getCenterWidth();
    this.gos.get("enableRtl") ? (t = e < r + 50, i = e > o - 50) : (i = e < r + 50, t = e > o - 50);
    this.needToMoveRight = t;
    this.needToMoveLeft = i;
    i || t ? this.ensureIntervalStarted() : this.ensureIntervalCleared();
  }
  ensureIntervalStarted() {
    this.movingIntervalId || (this.intervalCount = 0, this.failedMoveAttempts = 0, this.movingIntervalId = window.setInterval(this.moveInterval.bind(this), 100), this.beans.dragAndDrop.getDragAndDropImageComponent()?.setIcon(this.needToMoveLeft ? "left" : "right", !0));
  }
  ensureIntervalCleared() {
    this.movingIntervalId && (window.clearInterval(this.movingIntervalId), this.movingIntervalId = null, this.failedMoveAttempts = 0, this.beans.dragAndDrop.getDragAndDropImageComponent()?.setIcon(this.getIconName(), !1));
  }
  moveInterval() {
    let e;
    this.intervalCount++;
    (e = 10 + 5 * this.intervalCount) > 100 && (e = 100);
    let t = null;
    let i = this.gridBodyCon.scrollFeature;
    if (this.needToMoveLeft ? t = i.scrollHorizontally(-e) : this.needToMoveRight && (t = i.scrollHorizontally(e)), 0 !== t) {
      this.onDragging(this.lastDraggingEvent);
      this.failedMoveAttempts = 0;
    } else {
      this.failedMoveAttempts++;
      let {
        pinnedCols,
        dragAndDrop,
        gos
      } = this.beans;
      if (this.failedMoveAttempts <= 8 || !pinnedCols) return;
      if (dragAndDrop.getDragAndDropImageComponent()?.setIcon("pinned", !1), !gos.get("suppressMoveWhenColumnDragging")) {
        let e = this.lastDraggingEvent?.dragItem.columns;
        this.attemptToPinColumns(e, void 0, !0);
      }
    }
  }
  getPinDirection() {
    return this.needToMoveLeft || "left" === this.pinned ? "left" : this.needToMoveRight || "right" === this.pinned ? "right" : void 0;
  }
  attemptToPinColumns(e, t, i = !1) {
    let s = (e || []).filter(e => !e.getColDef().lockPinned);
    if (!s.length) return 0;
    i && (t = this.getPinDirection());
    let {
      pinnedCols,
      dragAndDrop
    } = this.beans;
    pinnedCols?.setColsPinned(s, t, "uiColumnDragged");
    i && dragAndDrop.nudge();
    return s.length;
  }
  destroy() {
    super.destroy();
    this.lastDraggingEvent = null;
    this.clearHighlighted();
    this.lastMovedInfo = null;
  }
};
function o1(e, t) {
  e.highlighted !== t && (e.highlighted = t, e.dispatchColEvent("headerHighlightChanged", "uiColumnMoved"));
}
var o2 = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.pinned = e;
    this.eContainer = t;
  }
  postConstruct() {
    let {
      ctrlsSvc,
      dragAndDrop
    } = this.beans;
    let i = this.pinned;
    ctrlsSvc.whenReady(this, e => {
      let t;
      let s = e.gridBodyCtrl.eBodyViewport;
      switch (i) {
        case "left":
          t = [[s, e.left.eContainer], [e.bottomLeft.eContainer], [e.topLeft.eContainer]];
          break;
        case "right":
          t = [[s, e.right.eContainer], [e.bottomRight.eContainer], [e.topRight.eContainer]];
          break;
        default:
          t = [[s, e.center.eViewport], [e.bottomCenter.eViewport], [e.topCenter.eViewport]];
      }
      this.eSecondaryContainers = t;
    });
    this.moveColumnFeature = this.createManagedBean(new o0(i));
    this.bodyDropPivotTarget = this.createManagedBean(new oY(i));
    dragAndDrop.addDropTarget(this);
    this.addDestroyFunc(() => dragAndDrop.removeDropTarget(this));
  }
  isInterestedIn(e) {
    return 1 === e || 0 === e && this.gos.get("allowDragFromColumnsToolPanel");
  }
  getSecondaryContainers() {
    return this.eSecondaryContainers;
  }
  getContainer() {
    return this.eContainer;
  }
  getIconName() {
    return this.currentDropListener.getIconName();
  }
  isDropColumnInPivotMode(e) {
    return this.beans.colModel.isPivotMode() && 0 === e.dragSource.type;
  }
  onDragEnter(e) {
    this.currentDropListener = this.isDropColumnInPivotMode(e) ? this.bodyDropPivotTarget : this.moveColumnFeature;
    this.currentDropListener.onDragEnter(e);
  }
  onDragLeave(e) {
    this.currentDropListener.onDragLeave(e);
  }
  onDragging(e) {
    this.currentDropListener.onDragging(e);
  }
  onDragStop(e) {
    this.currentDropListener.onDragStop(e);
  }
  onDragCancel() {
    this.currentDropListener.onDragCancel();
  }
};
var o5 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colMoves";
  }
  moveColumnByIndex(e, t, i) {
    let s = this.beans.colModel.getCols();
    if (!s) return;
    let r = s[e];
    this.moveColumns([r], t, i);
  }
  moveColumns(e, t, i, s = !0) {
    let {
      colModel,
      colAnimation,
      visibleCols,
      eventSvc
    } = this.beans;
    let a = colModel.getCols();
    if (!a) return;
    if (t > a.length - e.length) {
      $$eW42(30, {
        toIndex: t
      });
      return;
    }
    colAnimation?.start();
    let d = colModel.getColsForKeys(e);
    this.doesMovePassRules(d, t) && (tZ(colModel.getCols(), d, t), visibleCols.refresh(i), eventSvc.dispatchEvent({
      type: "columnMoved",
      columns: d,
      column: 1 === d.length ? d[0] : null,
      toIndex: t,
      finished: s,
      source: i
    }));
    colAnimation?.finish();
  }
  doesMovePassRules(e, t) {
    let i = this.getProposedColumnOrder(e, t);
    return this.doesOrderPassRules(i);
  }
  doesOrderPassRules(e) {
    let {
      colModel,
      gos
    } = this.beans;
    return !!io(e, colModel.getColTree()) && !!(e => {
      let t = e => e ? "left" === e || !0 === e ? -1 : 1 : 0;
      let s = gos.get("enableRtl");
      let r = s ? 1 : -1;
      let o = !0;
      e.forEach(e => {
        let i = t(e.getColDef().lockPosition);
        s ? i > r && (o = !1) : i < r && (o = !1);
        r = i;
      });
      return o;
    })(e);
  }
  getProposedColumnOrder(e, t) {
    let i = this.beans.colModel.getCols().slice();
    tZ(i, e, t);
    return i;
  }
  createBodyDropTarget(e, t) {
    return new o2(e, t);
  }
  moveHeader(e, t, i, s, r) {
    let o;
    let {
      ctrlsSvc,
      gos,
      colModel,
      visibleCols,
      focusSvc
    } = this.beans;
    let u = t.getBoundingClientRect();
    let c = u.left;
    let g = sE(i);
    let p = g ? u.width : i.getActualWidth();
    let m = "left" === e !== gos.get("enableRtl");
    let f = oX({
      x: m ? c - 20 : c + p + 20,
      pinned: s,
      fromKeyboard: !0,
      gos,
      ctrlsSvc
    });
    let C = focusSvc.focusedHeader;
    if (oZ({
      allMovingColumns: g ? i.getLeafColumns() : [i],
      isFromHeader: !0,
      fromLeft: "right" === e,
      xPosition: f,
      pinned: s,
      fromEnter: !1,
      fakeEvent: !1,
      gos,
      colModel,
      colMoves: this,
      visibleCols,
      finished: !0
    }), g) {
      let e = i.getDisplayedLeafColumns();
      o = m ? e[0] : tq(e);
    } else o = i;
    if (ctrlsSvc.getScrollFeature().ensureColumnVisible(o, "auto"), (!r.isAlive() || gos.get("ensureDomOrder")) && C) {
      let e;
      if (g) {
        let t = i.getGroupId();
        let s = i.getLeafColumns();
        if (!s.length) return;
        let r = s[0].getParent();
        if (!r) return;
        e = function (e, t) {
          for (; e;) {
            if (e.getGroupId() === t) return e;
            e = e.getParent();
          }
        }(r, t);
      } else e = i;
      e && focusSvc.focusHeaderPosition({
        headerPosition: {
          ...C,
          column: e
        }
      });
    }
  }
  setDragSourceForHeader(e, t, i) {
    let {
      gos,
      colModel,
      dragAndDrop,
      visibleCols
    } = this.beans;
    let l = !gos.get("suppressDragLeaveHidesColumns");
    let a = sE(t);
    let d = a ? t.getProvidedColumnGroup().getLeafColumns() : [t];
    let h = {
      type: 1,
      eElement: e,
      getDefaultIconName: () => l ? "hide" : "notAllowed",
      getDragItem: a ? () => function (e, t) {
        let i = e.getProvidedColumnGroup().getLeafColumns();
        let s = {};
        i.forEach(e => s[e.getId()] = e.isVisible());
        let r = [];
        t.forEach(e => {
          i.indexOf(e) >= 0 && (r.push(e), tJ(i, e));
        });
        i.forEach(e => r.push(e));
        let o = [];
        let n = e.getLeafColumns();
        for (let e of r) -1 !== n.indexOf(e) && o.push(e);
        return {
          columns: r,
          columnsInSplit: o,
          visibleState: s
        };
      }(t, visibleCols.allCols) : () => function (e) {
        let t = {};
        t[e.getId()] = e.isVisible();
        return {
          columns: [e],
          visibleState: t
        };
      }(t),
      dragItemName: i,
      onDragStarted: () => {
        l = !gos.get("suppressDragLeaveHidesColumns");
        oQ(d, !0);
      },
      onDragStopped: () => oQ(d, !1),
      onDragCancelled: () => oQ(d, !1),
      onGridEnter: e => {
        if (l) {
          let {
            columns = [],
            visibleState
          } = e ?? {};
          let s = a ? e => !visibleState || visibleState[e.getColId()] : () => !0;
          let o = columns.filter(e => !e.getColDef().lockVisible && s(e));
          colModel.setColsVisible(o, !0, "uiColumnMoved");
        }
      },
      onGridExit: e => {
        if (l) {
          let t = e?.columns?.filter(e => !e.getColDef().lockVisible) || [];
          colModel.setColsVisible(t, !1, "uiColumnMoved");
        }
      }
    };
    dragAndDrop.addDragSource(h, !0);
    return h;
  }
};
var o3 = class extends $$tM23 {
  constructor(e, t, i, s) {
    super();
    this.comp = e;
    this.eResize = t;
    this.pinned = i;
    this.columnGroup = s;
  }
  postConstruct() {
    if (!this.columnGroup.isResizable()) {
      this.comp.setResizableDisplayed(!1);
      return;
    }
    let {
      horizontalResizeSvc,
      gos,
      colAutosize
    } = this.beans;
    let s = horizontalResizeSvc.addResizeBar({
      eResizeBar: this.eResize,
      onResizeStart: this.onResizeStart.bind(this),
      onResizing: this.onResizing.bind(this, !1),
      onResizeEnd: this.onResizing.bind(this, !0)
    });
    this.addDestroyFunc(s);
    !gos.get("suppressAutoSize") && colAutosize && this.addDestroyFunc(colAutosize.addColumnGroupResize(this.eResize, this.columnGroup, () => this.resizeLeafColumnsToFit("uiColumnResized")));
  }
  onResizeStart(e) {
    let {
      columnsToResize,
      resizeStartWidth,
      resizeRatios,
      groupAfterColumns,
      groupAfterStartWidth,
      groupAfterRatios
    } = this.getInitialValues(e);
    this.resizeCols = columnsToResize;
    this.resizeStartWidth = resizeStartWidth;
    this.resizeRatios = resizeRatios;
    this.resizeTakeFromCols = groupAfterColumns;
    this.resizeTakeFromStartWidth = groupAfterStartWidth;
    this.resizeTakeFromRatios = groupAfterRatios;
    this.toggleColumnResizing(!0);
  }
  onResizing(e, t, i = "uiColumnResized") {
    let s = this.normaliseDragChange(t);
    let r = this.resizeStartWidth + s;
    this.resizeColumnsFromLocalValues(r, i, e);
  }
  getInitialValues(e) {
    let t = e => e.reduce((e, t) => e + t.getActualWidth(), 0);
    let i = (e, t) => e.map(e => e.getActualWidth() / t);
    let s = this.getColumnsToResize();
    let r = t(s);
    let o = i(s, r);
    let n = {
      columnsToResize: s,
      resizeStartWidth: r,
      resizeRatios: o
    };
    let l = null;
    if (e && (l = this.beans.colGroupSvc?.getGroupAtDirection(this.columnGroup, "After") ?? null), l) {
      let e = l.getDisplayedLeafColumns();
      let s = n.groupAfterColumns = e.filter(e => e.isResizable());
      let r = n.groupAfterStartWidth = t(s);
      n.groupAfterRatios = i(s, r);
    } else {
      n.groupAfterColumns = void 0;
      n.groupAfterStartWidth = void 0;
      n.groupAfterRatios = void 0;
    }
    return n;
  }
  resizeLeafColumnsToFit(e) {
    let t = this.beans.autoWidthCalc.getPreferredWidthForColumnGroup(this.columnGroup);
    let i = this.getInitialValues();
    t > i.resizeStartWidth && this.resizeColumns(i, t, e, !0);
  }
  resizeColumnsFromLocalValues(e, t, i = !0) {
    if (!this.resizeCols || !this.resizeRatios) return;
    let s = {
      columnsToResize: this.resizeCols,
      resizeStartWidth: this.resizeStartWidth,
      resizeRatios: this.resizeRatios,
      groupAfterColumns: this.resizeTakeFromCols,
      groupAfterStartWidth: this.resizeTakeFromStartWidth,
      groupAfterRatios: this.resizeTakeFromRatios
    };
    this.resizeColumns(s, e, t, i);
  }
  resizeColumns(e, t, i, s = !0) {
    let {
      columnsToResize,
      resizeStartWidth,
      resizeRatios,
      groupAfterColumns,
      groupAfterStartWidth,
      groupAfterRatios
    } = e;
    let h = [];
    if (h.push({
      columns: columnsToResize,
      ratios: resizeRatios,
      width: t
    }), groupAfterColumns) {
      let e = t - resizeStartWidth;
      h.push({
        columns: groupAfterColumns,
        ratios: groupAfterRatios,
        width: groupAfterStartWidth - e
      });
    }
    this.beans.colResize?.resizeColumnSets({
      resizeSets: h,
      finished: s,
      source: i
    });
    s && this.toggleColumnResizing(!1);
  }
  toggleColumnResizing(e) {
    this.comp.addOrRemoveCssClass("ag-column-resizing", e);
  }
  getColumnsToResize() {
    return this.columnGroup.getDisplayedLeafColumns().filter(e => e.isResizable());
  }
  normaliseDragChange(e) {
    let t = e;
    this.gos.get("enableRtl") ? "left" !== this.pinned && (t *= -1) : "right" === this.pinned && (t *= -1);
    return t;
  }
  destroy() {
    super.destroy();
    this.resizeCols = void 0;
    this.resizeRatios = void 0;
    this.resizeTakeFromCols = void 0;
    this.resizeTakeFromRatios = void 0;
  }
};
var o6 = class extends $$tM23 {
  constructor(e, t, i, s, r) {
    super();
    this.pinned = e;
    this.column = t;
    this.eResize = i;
    this.comp = s;
    this.ctrl = r;
  }
  postConstruct() {
    let e;
    let t;
    let i = [];
    let s = () => {
      if (U(this.eResize, e), !e) return;
      let {
        horizontalResizeSvc,
        colAutosize
      } = this.beans;
      let o = horizontalResizeSvc.addResizeBar({
        eResizeBar: this.eResize,
        onResizeStart: this.onResizeStart.bind(this),
        onResizing: this.onResizing.bind(this, !1),
        onResizeEnd: this.onResizing.bind(this, !0)
      });
      i.push(o);
      t && colAutosize && i.push(colAutosize.addColumnAutosize(this.eResize, this.column));
    };
    let r = () => {
      i.forEach(e => e());
      i.length = 0;
    };
    let o = () => {
      let i = this.column.isResizable();
      let o = !this.gos.get("suppressAutoSize") && !this.column.getColDef().suppressAutoSize;
      (i !== e || o !== t) && (e = i, t = o, r(), s());
    };
    o();
    this.addDestroyFunc(r);
    this.ctrl.setRefreshFunction("resize", o);
  }
  onResizing(e, t) {
    let {
      column,
      lastResizeAmount,
      resizeStartWidth,
      beans
    } = this;
    let n = this.normaliseResizeAmount(t);
    let {
      pinnedCols,
      ctrlsSvc,
      colResize
    } = o;
    if (!(this.column.getPinned() && (pinnedCols?.leftWidth ?? 0) + (pinnedCols?.rightWidth ?? 0) + (n - lastResizeAmount) > q(ctrlsSvc.getGridBodyCtrl().eBodyViewport) - 50)) {
      this.lastResizeAmount = n;
      colResize?.setColumnWidths([{
        key: column,
        newWidth: resizeStartWidth + n
      }], this.resizeWithShiftKey, e, "uiColumnResized");
      e && this.toggleColumnResizing(!1);
    }
  }
  onResizeStart(e) {
    this.resizeStartWidth = this.column.getActualWidth();
    this.lastResizeAmount = 0;
    this.resizeWithShiftKey = e;
    this.toggleColumnResizing(!0);
  }
  toggleColumnResizing(e) {
    this.comp.addOrRemoveCssClass("ag-column-resizing", e);
  }
  normaliseResizeAmount(e) {
    let t = e;
    let i = "left" !== this.pinned;
    let s = "right" === this.pinned;
    this.gos.get("enableRtl") ? i && (t *= -1) : s && (t *= -1);
    return t;
  }
};
var o4 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colResize";
  }
  setColumnWidths(e, t, i, s) {
    let r = [];
    let {
      colModel,
      gos,
      visibleCols
    } = this.beans;
    e.forEach(e => {
      let i = colModel.getColDefCol(e.key) || colModel.getCol(e.key);
      if (i && (r.push({
        width: e.newWidth,
        ratios: [1],
        columns: [i]
      }), "shift" === gos.get("colResizeDefault") && (t = !t), t)) {
        let t = visibleCols.getColAfter(i);
        if (!t) return;
        let s = i.getActualWidth() - e.newWidth;
        let o = t.getActualWidth() + s;
        r.push({
          width: o,
          ratios: [1],
          columns: [t]
        });
      }
    });
    0 !== r.length && this.resizeColumnSets({
      resizeSets: r,
      finished: i,
      source: s
    });
  }
  resizeColumnSets(e) {
    let {
      resizeSets,
      finished,
      source
    } = e;
    if (!(!resizeSets || resizeSets.every(e => function (e) {
      let {
        columns,
        width
      } = e;
      let s = 0;
      let r = 0;
      let o = !0;
      columns.forEach(e => {
        let t = e.getMinWidth();
        s += t || 0;
        let i = e.getMaxWidth();
        i > 0 ? r += i : o = !1;
      });
      let n = width >= s;
      let l = !o || width <= r;
      return n && l;
    }(e)))) {
      if (finished) {
        let e = resizeSets && resizeSets.length > 0 ? resizeSets[0].columns : null;
        id(this.eventSvc, e, finished, source);
      }
      return;
    }
    let r = [];
    let o = [];
    resizeSets.forEach(e => {
      let {
        width,
        columns,
        ratios
      } = e;
      let l = {};
      let a = {};
      columns.forEach(e => o.push(e));
      let d = !0;
      let h = 0;
      for (; d;) {
        if (++h > 1e3) {
          ez(31);
          break;
        }
        d = !1;
        let e = [];
        let s = 0;
        let r = t;
        columns.forEach((t, i) => {
          if (a[t.getId()]) r -= l[t.getId()];else {
            e.push(t);
            let r = ratios[i];
            s += r;
          }
        });
        let o = 1 / s;
        e.forEach((i, s) => {
          let h;
          s === e.length - 1 ? h = r : (h = Math.round(ratios[s] * width * o), r -= h);
          let u = i.getMinWidth();
          let c = i.getMaxWidth();
          h < u ? (h = u, a[i.getId()] = !0, d = !0) : c > 0 && h > c && (h = c, a[i.getId()] = !0, d = !0);
          l[i.getId()] = h;
        });
      }
      columns.forEach(e => {
        let t = l[e.getId()];
        e.getActualWidth() !== t && (e.setActualWidth(t, source), r.push(e));
      });
    });
    let n = r.length > 0;
    let l = [];
    if (n) {
      let {
        colFlex,
        visibleCols,
        colViewport
      } = this.beans;
      l = colFlex?.refreshFlexedColumns({
        resizingCols: o,
        skipSetLeft: !0
      }) ?? [];
      visibleCols.setLeftValues(source);
      visibleCols.updateBodyWidths();
      colViewport.checkViewportColumns();
    }
    let a = o.concat(l);
    (n || finished) && id(this.eventSvc, a, finished, source, l);
  }
  resizeHeader(e, t, i) {
    if (!e.isResizable()) return;
    let s = Math.min(Math.max(e.getActualWidth() + t, e.getMinWidth()), e.getMaxWidth());
    this.setColumnWidths([{
      key: e,
      newWidth: s
    }], i, !0, "uiColumnResized");
  }
  createResizeFeature(e, t, i, s, r) {
    return new o6(e, t, i, s, r);
  }
  createGroupResizeFeature(e, t, i, s) {
    return new o3(e, t, i, s);
  }
};
var o8 = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.removeChildListenersFuncs = [];
    this.columnGroup = t;
    this.comp = e;
  }
  postConstruct() {
    this.addListenersToChildrenColumns();
    this.addManagedListeners(this.columnGroup, {
      displayedChildrenChanged: this.onDisplayedChildrenChanged.bind(this)
    });
    this.onWidthChanged();
    this.addDestroyFunc(this.removeListenersOnChildrenColumns.bind(this));
  }
  addListenersToChildrenColumns() {
    this.removeListenersOnChildrenColumns();
    let e = this.onWidthChanged.bind(this);
    this.columnGroup.getLeafColumns().forEach(t => {
      t.__addEventListener("widthChanged", e);
      t.__addEventListener("visibleChanged", e);
      this.removeChildListenersFuncs.push(() => {
        t.__removeEventListener("widthChanged", e);
        t.__removeEventListener("visibleChanged", e);
      });
    });
  }
  removeListenersOnChildrenColumns() {
    this.removeChildListenersFuncs.forEach(e => e());
    this.removeChildListenersFuncs = [];
  }
  onDisplayedChildrenChanged() {
    this.addListenersToChildrenColumns();
    this.onWidthChanged();
  }
  onWidthChanged() {
    let e = this.columnGroup.getActualWidth();
    this.comp.setWidth(`${e}px`);
    this.comp.addOrRemoveCssClass("ag-hidden", 0 === e);
  }
};
var o7 = class extends rB {
  constructor() {
    super(...arguments);
    this.onSuppressColMoveChange = () => {
      !this.isAlive() || this.isSuppressMoving() ? this.removeDragSource() : this.dragSource || this.setDragSource(this.eGui);
    };
  }
  setComp(e, t, i, s, r) {
    let {
      column,
      beans
    } = this;
    let {
      context,
      colNames,
      colHover,
      rangeSvc,
      colResize
    } = n;
    this.comp = e;
    r = iv(this, context, r);
    this.setGui(t, r);
    this.displayName = colNames.getDisplayNameForColumnGroup(column, "header");
    this.refreshHeaderStyles();
    this.addClasses();
    this.setupMovingCss(r);
    this.setupExpandable(r);
    this.setupTooltip();
    this.setupAutoHeight({
      wrapperElement: s,
      compBean: r
    });
    this.setupUserComp();
    this.addHeaderMouseListeners(r);
    this.addManagedPropertyListener("groupHeaderHeight", this.refreshMaxHeaderHeight.bind(this));
    this.refreshMaxHeaderHeight();
    let c = this.rowCtrl.pinned;
    let g = column.getProvidedColumnGroup().getLeafColumns();
    colHover?.createHoverFeature(r, g, t);
    rangeSvc?.createRangeHighlightFeature(r, column, e);
    r.createManagedBean(new rG(column, t, beans));
    r.createManagedBean(new o8(e, column));
    colResize ? this.resizeFeature = r.createManagedBean(colResize.createGroupResizeFeature(e, i, c, column)) : e.setResizableDisplayed(!1);
    r.createManagedBean(new sH(t, {
      shouldStopEventPropagation: this.shouldStopEventPropagation.bind(this),
      onTabKeyDown: () => void 0,
      handleKeyDown: this.handleKeyDown.bind(this),
      onFocusIn: this.onFocusIn.bind(this)
    }));
    this.addHighlightListeners(r, g);
    r.addManagedPropertyListener("suppressMovableColumns", this.onSuppressColMoveChange);
    this.addResizeAndMoveKeyboardListeners(r);
    r.addDestroyFunc(() => this.clearComponent());
  }
  getHeaderClassParams() {
    let {
      column,
      beans
    } = this;
    let i = column.getDefinition();
    return ty(beans.gos, {
      colDef: i,
      columnGroup: column,
      floatingFilter: !1
    });
  }
  refreshMaxHeaderHeight() {
    let {
      gos,
      comp
    } = this;
    let i = gos.get("groupHeaderHeight");
    null != i ? 0 === i ? comp.setHeaderWrapperHidden(!0) : comp.setHeaderWrapperMaxHeight(i) : (comp.setHeaderWrapperHidden(!1), comp.setHeaderWrapperMaxHeight(null));
  }
  addHighlightListeners(e, t) {
    if (this.beans.gos.get("suppressMoveWhenColumnDragging")) for (let i of t) e.addManagedListeners(i, {
      headerHighlightChanged: this.onLeafColumnHighlightChanged.bind(this, i)
    });
  }
  onLeafColumnHighlightChanged(e) {
    let t = this.column.getDisplayedLeafColumns();
    let i = t[0] === e;
    let s = tq(t) === e;
    if (!i && !s) return;
    let r = e.getHighlighted();
    let o = !!this.rowCtrl.findHeaderCellCtrl(e => e.column.isMoving());
    let n = !1;
    let l = !1;
    if (o) {
      let e = this.beans.gos.get("enableRtl");
      let t = 1 === r;
      let o = 0 === r;
      i && (e ? l = t : n = o);
      s && (e ? n = o : l = t);
    }
    this.comp.addOrRemoveCssClass("ag-header-highlight-before", n);
    this.comp.addOrRemoveCssClass("ag-header-highlight-after", l);
  }
  resizeHeader(e, t) {
    let {
      resizeFeature
    } = this;
    if (!resizeFeature) return;
    let s = resizeFeature.getInitialValues(t);
    resizeFeature.resizeColumns(s, s.resizeStartWidth + e, "uiColumnResized", !0);
  }
  resizeLeafColumnsToFit(e) {
    this.resizeFeature?.resizeLeafColumnsToFit(e);
  }
  setupUserComp() {
    let {
      colGroupSvc,
      userCompFactory,
      gos
    } = this.beans;
    let s = function (e, t) {
      let i = t.columnGroup.getColGroupDef();
      return e.getCompDetails(i, iM, "agColumnGroupHeader", t);
    }(userCompFactory, ty(gos, {
      displayName: this.displayName,
      columnGroup: this.column,
      setExpanded: t => {
        colGroupSvc.setColumnGroupOpened(this.column.getProvidedColumnGroup(), t, "gridInitializing");
      },
      setTooltip: (e, t) => {
        gos.assertModuleRegistered("Tooltip", 3);
        this.setupTooltip(e, t);
      }
    }));
    s && this.comp.setUserCompDetails(s);
  }
  addHeaderMouseListeners(e) {
    let t = e => this.handleMouseOverChange("mouseenter" === e.type);
    e.addManagedListeners(this.eGui, {
      mouseenter: t,
      mouseleave: t,
      click: () => this.dispatchColumnMouseEvent("columnHeaderClicked", this.column.getProvidedColumnGroup()),
      contextmenu: e => this.handleContextMenuMouseEvent(e, void 0, this.column.getProvidedColumnGroup())
    });
  }
  handleMouseOverChange(e) {
    this.eventSvc.dispatchEvent({
      type: e ? "columnHeaderMouseOver" : "columnHeaderMouseLeave",
      column: this.column.getProvidedColumnGroup()
    });
  }
  setupTooltip(e, t) {
    this.tooltipFeature = this.beans.tooltipSvc?.setupHeaderGroupTooltip(this.tooltipFeature, this, e, t);
  }
  setupExpandable(e) {
    let t = this.column.getProvidedColumnGroup();
    this.refreshExpanded();
    let i = this.refreshExpanded.bind(this);
    e.addManagedListeners(t, {
      expandedChanged: i,
      expandableChanged: i
    });
  }
  refreshExpanded() {
    let {
      column
    } = this;
    this.expandable = column.isExpandable();
    let t = column.isExpanded();
    this.expandable ? this.comp.setAriaExpanded(t ? "true" : "false") : this.comp.setAriaExpanded(void 0);
    this.refreshHeaderStyles();
  }
  addClasses() {
    let {
      column
    } = this;
    let t = column.getColGroupDef();
    let i = i2(t, this.gos, null, column);
    column.isPadding() ? (i.push("ag-header-group-cell-no-group"), column.getLeafColumns().every(e => e.isSpanHeaderHeight()) && i.push("ag-header-span-height")) : (i.push("ag-header-group-cell-with-group"), t?.wrapHeaderText && i.push("ag-header-cell-wrap-text"));
    i.forEach(e => this.comp.addOrRemoveCssClass(e, !0));
  }
  setupMovingCss(e) {
    let {
      column
    } = this;
    let i = column.getProvidedColumnGroup().getLeafColumns();
    let s = () => this.comp.addOrRemoveCssClass("ag-header-cell-moving", column.isMoving());
    i.forEach(t => {
      e.addManagedListeners(t, {
        movingChanged: s
      });
    });
    s();
  }
  onFocusIn(e) {
    this.eGui.contains(e.relatedTarget) || this.focusThis();
  }
  handleKeyDown(e) {
    super.handleKeyDown(e);
    let t = this.getWrapperHasFocus();
    if (this.expandable && t && e.key === i4.ENTER) {
      let e = this.column;
      let t = !e.isExpanded();
      this.beans.colGroupSvc.setColumnGroupOpened(e.getProvidedColumnGroup(), t, "uiColumnExpanded");
    }
  }
  setDragSource(e) {
    !(!this.isAlive() || this.isSuppressMoving()) && (this.removeDragSource(), e && (this.dragSource = this.beans.colMoves?.setDragSourceForHeader(e, this.column, this.displayName) ?? null));
  }
  isSuppressMoving() {
    return this.gos.get("suppressMovableColumns") || this.column.getLeafColumns().some(e => e.getColDef().suppressMovable || e.getColDef().lockPosition);
  }
  destroy() {
    this.tooltipFeature = this.destroyBean(this.tooltipFeature);
    super.destroy();
  }
};
var o9 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "visibleCols";
    this.colsAndGroupsMap = {};
    this.leftCols = [];
    this.rightCols = [];
    this.centerCols = [];
    this.allCols = [];
    this.bodyWidth = 0;
    this.leftWidth = 0;
    this.rightWidth = 0;
    this.isBodyWidthDirty = !0;
  }
  refresh(e, t = !1) {
    let {
      colModel,
      colGroupSvc,
      colViewport
    } = this.beans;
    t || this.buildTrees(colModel, colGroupSvc);
    colGroupSvc?.updateOpenClosedVisibility();
    let o = nt(this.treeLeft);
    this.leftCols = o;
    this.centerCols = nt(this.treeCenter);
    let n = nt(this.treeRight);
    this.rightCols = n;
    this.joinColsAriaOrder(colModel);
    this.joinCols();
    this.setLeftValues(e);
    this.autoHeightCols = this.allCols.filter(e => e.isAutoHeight());
    this.beans.colFlex?.refreshFlexedColumns();
    this.updateBodyWidths();
    colViewport.checkViewportColumns(!1);
    this.setFirstRightAndLastLeftPinned(colModel, o, n, e);
    this.eventSvc.dispatchEvent({
      type: "displayedColumnsChanged",
      source: e
    });
  }
  updateBodyWidths() {
    let e = t1(this.centerCols);
    let t = t1(this.leftCols);
    let i = t1(this.rightCols);
    this.isBodyWidthDirty = this.bodyWidth !== e;
    (this.bodyWidth !== e || this.leftWidth !== t || this.rightWidth !== i) && (this.bodyWidth = e, this.leftWidth = t, this.rightWidth = i, this.eventSvc.dispatchEvent({
      type: "columnContainerWidthChanged"
    }), this.eventSvc.dispatchEvent({
      type: "displayedColumnsWidthChanged"
    }));
  }
  setLeftValues(e) {
    this.setLeftValuesOfCols(e);
    this.setLeftValuesOfGroups();
  }
  setFirstRightAndLastLeftPinned(e, t, i, s) {
    let r;
    let o;
    this.gos.get("enableRtl") ? (r = t ? t[0] : null, o = i ? tq(i) : null) : (r = t ? tq(t) : null, o = i ? i[0] : null);
    e.getCols().forEach(e => {
      e.setLastLeftPinned(e === r, s);
      e.setFirstRightPinned(e === o, s);
    });
  }
  buildTrees(e, t) {
    let i = e.getColsToShow();
    let s = i.filter(e => "left" == e.getPinned());
    let r = i.filter(e => "right" == e.getPinned());
    let o = i.filter(e => "left" != e.getPinned() && "right" != e.getPinned());
    let n = new iC();
    let l = e => t ? t.createColumnGroups(e) : e.columns;
    this.treeLeft = l({
      columns: s,
      idCreator: n,
      pinned: "left",
      oldDisplayedGroups: this.treeLeft
    });
    this.treeRight = l({
      columns: r,
      idCreator: n,
      pinned: "right",
      oldDisplayedGroups: this.treeRight
    });
    this.treeCenter = l({
      columns: o,
      idCreator: n,
      pinned: null,
      oldDisplayedGroups: this.treeCenter
    });
    this.updateColsAndGroupsMap();
  }
  clear() {
    this.leftCols = [];
    this.rightCols = [];
    this.centerCols = [];
    this.allCols = [];
    this.ariaOrderColumns = [];
  }
  joinColsAriaOrder(e) {
    let t = e.getCols();
    let i = [];
    let s = [];
    let r = [];
    for (let e of t) {
      let t = e.getPinned();
      t ? !0 === t || "left" === t ? i.push(e) : r.push(e) : s.push(e);
    }
    this.ariaOrderColumns = i.concat(s).concat(r);
  }
  getAriaColIndex(e) {
    let t;
    t = sE(e) ? e.getLeafColumns()[0] : e;
    return this.ariaOrderColumns.indexOf(t) + 1;
  }
  setLeftValuesOfGroups() {
    [this.treeLeft, this.treeRight, this.treeCenter].forEach(e => {
      e.forEach(e => {
        sE(e) && e.checkLeft();
      });
    });
  }
  setLeftValuesOfCols(e) {
    let {
      colModel
    } = this.beans;
    if (!colModel.getColDefCols()) return;
    let i = colModel.getCols().slice(0);
    let s = this.gos.get("enableRtl");
    [this.leftCols, this.rightCols, this.centerCols].forEach(t => {
      if (s) {
        let i = t1(t);
        t.forEach(t => {
          i -= t.getActualWidth();
          t.setLeft(i, e);
        });
      } else {
        let i = 0;
        t.forEach(t => {
          t.setLeft(i, e);
          i += t.getActualWidth();
        });
      }
      !function (e, t) {
        for (let i = 0; i < t.length; i++) {
          let s = e.indexOf(t[i]);
          s >= 0 && (e[s] = e[e.length - 1], e.pop());
        }
      }(i, t);
    });
    i.forEach(t => {
      t.setLeft(null, e);
    });
  }
  joinCols() {
    this.gos.get("enableRtl") ? this.allCols = this.rightCols.concat(this.centerCols).concat(this.leftCols) : this.allCols = this.leftCols.concat(this.centerCols).concat(this.rightCols);
  }
  getAllTrees() {
    return this.treeLeft && this.treeRight && this.treeCenter ? this.treeLeft.concat(this.treeCenter).concat(this.treeRight) : null;
  }
  isColDisplayed(e) {
    return this.allCols.indexOf(e) >= 0;
  }
  getLeftColsForRow(e) {
    let {
      leftCols,
      beans: {
        colModel
      }
    } = this;
    return colModel.colSpanActive ? this.getColsForRow(e, leftCols) : leftCols;
  }
  getRightColsForRow(e) {
    let {
      rightCols,
      beans: {
        colModel
      }
    } = this;
    return colModel.colSpanActive ? this.getColsForRow(e, rightCols) : rightCols;
  }
  getColsForRow(e, t, i, s) {
    let r = [];
    let o = null;
    for (let n = 0; n < t.length; n++) {
      let l;
      let a = t[n];
      let d = t.length - n;
      let h = Math.min(a.getColSpan(e), d);
      let u = [a];
      if (h > 1) {
        let e = h - 1;
        for (let i = 1; i <= e; i++) u.push(t[n + i]);
        n += e;
      }
      i ? (l = !1, u.forEach(e => {
        i(e) && (l = !0);
      })) : l = !0;
      l && (0 === r.length && o && s && s(a) && r.push(o), r.push(a));
      o = a;
    }
    return r;
  }
  getContainerWidth(e) {
    switch (e) {
      case "left":
        return this.leftWidth;
      case "right":
        return this.rightWidth;
      default:
        return this.bodyWidth;
    }
  }
  getColBefore(e) {
    let t = this.allCols;
    let i = t.indexOf(e);
    return i > 0 ? t[i - 1] : null;
  }
  isPinningLeft() {
    return this.leftCols.length > 0;
  }
  isPinningRight() {
    return this.rightCols.length > 0;
  }
  updateColsAndGroupsMap() {
    this.colsAndGroupsMap = {};
    let e = e => {
      this.colsAndGroupsMap[e.getUniqueId()] = e;
    };
    ne(this.treeCenter, !1, e);
    ne(this.treeLeft, !1, e);
    ne(this.treeRight, !1, e);
  }
  isVisible(e) {
    return this.colsAndGroupsMap[e.getUniqueId()] === e;
  }
  getFirstColumn() {
    let e = this.gos.get("enableRtl");
    let t = ["leftCols", "centerCols", "rightCols"];
    e && t.reverse();
    for (let i = 0; i < t.length; i++) {
      let s = this[t[i]];
      if (s.length) return e ? tq(s) : s[0];
    }
    return null;
  }
  getColAfter(e) {
    let t = this.allCols;
    let i = t.indexOf(e);
    return i < t.length - 1 ? t[i + 1] : null;
  }
  getColsLeftWidth() {
    return t1(this.leftCols);
  }
  getDisplayedColumnsRightWidth() {
    return t1(this.rightCols);
  }
  isColAtEdge(e, t) {
    let i;
    let s = this.allCols;
    if (!s.length) return !1;
    let r = "first" === t;
    if (sE(e)) {
      let t = e.getDisplayedLeafColumns();
      if (!t.length) return !1;
      i = r ? t[0] : tq(t);
    } else i = e;
    return (r ? s[0] : tq(s)) === i;
  }
};
function ne(e, t, i) {
  if (e) for (let s = 0; s < e.length; s++) {
    let r = e[s];
    sE(r) && ne(t ? r.getDisplayedChildren() : r.getChildren(), t, i);
    i(r);
  }
}
function nt(e) {
  let t = [];
  ne(e, !0, e => {
    tW(e) && t.push(e);
  });
  return t;
}
var ni = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colGroupSvc";
  }
  getColumnGroupState() {
    let e = [];
    is(null, this.beans.colModel.getColTree(), t => {
      tU(t) && e.push({
        groupId: t.getGroupId(),
        open: t.isExpanded()
      });
    });
    return e;
  }
  resetColumnGroupState(e) {
    let t = this.beans.colModel.getColDefColTree();
    if (!t) return;
    let i = [];
    is(null, t, e => {
      if (tU(e)) {
        let t = e.getColGroupDef();
        let s = {
          groupId: e.getGroupId(),
          open: t ? t.openByDefault : void 0
        };
        i.push(s);
      }
    });
    this.setColumnGroupState(i, e);
  }
  setColumnGroupState(e, t) {
    let {
      colModel,
      colAnimation,
      visibleCols,
      eventSvc
    } = this.beans;
    if (!colModel.getColTree().length) return;
    colAnimation?.start();
    let n = [];
    e.forEach(e => {
      let t = e.groupId;
      let i = e.open;
      let s = this.getProvidedColGroup(t);
      s && s.isExpanded() !== i && (s.setExpanded(i), n.push(s));
    });
    visibleCols.refresh(t, !0);
    n.length && eventSvc.dispatchEvent({
      type: "columnGroupOpened",
      columnGroup: 1 === n.length ? n[0] : void 0,
      columnGroups: n
    });
    colAnimation?.finish();
  }
  setColumnGroupOpened(e, t, i) {
    let s;
    s = tU(e) ? e.getId() : e || "";
    this.setColumnGroupState([{
      groupId: s,
      open: t
    }], i);
  }
  getProvidedColGroup(e) {
    let t = null;
    is(null, this.beans.colModel.getColTree(), i => {
      tU(i) && i.getId() === e && (t = i);
    });
    return t;
  }
  getGroupAtDirection(e, t) {
    let i = e.getProvidedColumnGroup().getLevel() + e.getPaddingLevel();
    let s = e.getDisplayedLeafColumns();
    let r = "After" === t ? tq(s) : s[0];
    let o = `getCol${t}`;
    for (;;) {
      let t = this.beans.visibleCols[o](r);
      if (!t) return null;
      let s = this.getColGroupAtLevel(t, i);
      if (s !== e) return s;
    }
  }
  getColGroupAtLevel(e, t) {
    let i = e.getParent();
    for (; !(i.getProvidedColumnGroup().getLevel() + i.getPaddingLevel() <= t);) i = i.getParent();
    return i;
  }
  updateOpenClosedVisibility() {
    ne(this.beans.visibleCols.getAllTrees(), !1, e => {
      sE(e) && e.calculateDisplayedColumns();
    });
  }
  getColumnGroup(e, t) {
    if (!e) return null;
    if (sE(e)) return e;
    let i = this.beans.visibleCols.getAllTrees();
    let s = "number" == typeof t;
    let r = null;
    ne(i, !1, i => {
      sE(i) && (s ? e === i.getGroupId() && t === i.getPartId() : e === i.getGroupId()) && (r = i);
    });
    return r;
  }
  createColumnGroups(e) {
    let {
      columns,
      idCreator,
      pinned,
      oldDisplayedGroups,
      isStandaloneStructure
    } = e;
    let n = this.mapOldGroupsById(oldDisplayedGroups);
    let l = [];
    let a = t;
    for (; a.length;) {
      let e = a;
      a = [];
      let t = 0;
      let r = r => {
        let d = t;
        t = r;
        let h = e[d];
        let u = (sE(h) ? h.getProvidedColumnGroup() : h).getOriginalParent();
        if (null == u) {
          for (let t = d; t < r; t++) l.push(e[t]);
          return;
        }
        let c = this.createColumnGroup(u, idCreator, n, pinned, isStandaloneStructure);
        for (let t = d; t < r; t++) c.addChild(e[t]);
        a.push(c);
      };
      for (let i = 1; i < e.length; i++) {
        let s = e[i];
        let o = (sE(s) ? s.getProvidedColumnGroup() : s).getOriginalParent();
        let n = e[t];
        o !== (sE(n) ? n.getProvidedColumnGroup() : n).getOriginalParent() && r(i);
      }
      t < e.length && r(e.length);
    }
    isStandaloneStructure || this.setupParentsIntoCols(l, null);
    return l;
  }
  createProvidedColumnGroup(e, t, i, s, r, o, n) {
    let l = r.getUniqueKey(t.groupId || null, null);
    let a = this.createMergedColGroupDef(t, l);
    let d = new t$(a, l, !1, i);
    this.createBean(d);
    let h = this.findExistingGroup(t, o);
    h && o.splice(h.idx, 1);
    let u = h?.group;
    u && d.setExpanded(u.isExpanded());
    let c = ie(this.beans, a.children, i + 1, e, s, r, o, n);
    d.setChildren(c);
    return d;
  }
  balanceColumnTree(e, t, i, s) {
    let r = [];
    for (let o = 0; o < e.length; o++) {
      let n = e[o];
      if (tU(n)) {
        let e = this.balanceColumnTree(n.getChildren(), t + 1, i, s);
        n.setChildren(e);
        r.push(n);
      } else {
        let o;
        let l;
        for (let e = i - 1; e >= t; e--) {
          let e = s.getUniqueKey(null, null);
          let i = new t$(this.createMergedColGroupDef(null, e), e, !0, t);
          this.createBean(i);
          l && l.setChildren([i]);
          l = i;
          o || (o = l);
        }
        if (o && l) {
          if (r.push(o), e.some(e => tU(e))) {
            l.setChildren([n]);
            continue;
          }
          l.setChildren(e);
          break;
        }
        r.push(n);
      }
    }
    return r;
  }
  findDepth(e) {
    let t = 0;
    let i = e;
    for (; i && i[0] && tU(i[0]);) {
      t++;
      i = i[0].getChildren();
    }
    return t;
  }
  findMaxDepth(e, t) {
    let i = t;
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (tU(r)) {
        let e = this.findMaxDepth(r.getChildren(), t + 1);
        i < e && (i = e);
      }
    }
    return i;
  }
  balanceTreeForAutoCols(e, t) {
    let i = [];
    e.forEach(e => {
      let s = e;
      for (let i = t - 1; i >= 0; i--) {
        let t = new t$(null, `FAKE_PATH_${e.getId()}}_${i}`, !0, i);
        this.createBean(t);
        t.setChildren([s]);
        s.originalParent = t;
        s = t;
      }
      0 === t && (e.originalParent = null);
      i.push(s);
    });
    return i;
  }
  createMergedColGroupDef(e, t) {
    let i = {};
    let {
      gos,
      validation
    } = this.beans;
    Object.assign(i, gos.get("defaultColGroupDef"));
    Object.assign(i, e);
    validation?.validateColDef(i, t);
    return i;
  }
  findExistingGroup(e, t) {
    if (null != e.groupId) for (let i = 0; i < t.length; i++) {
      let s = t[i];
      if (s.getColGroupDef() && s.getId() === e.groupId) return {
        idx: i,
        group: s
      };
    }
  }
  createColumnGroup(e, t, i, s, r) {
    let o = e.getGroupId();
    let n = t.getInstanceIdForKey(o);
    let l = i[o + "_" + n];
    l && l.getProvidedColumnGroup() !== e && (l = null);
    ew(l) ? l.reset() : (l = new sF(e, o, n, s), r || this.createBean(l));
    return l;
  }
  mapOldGroupsById(e) {
    let t = {};
    let i = e => {
      e.forEach(e => {
        sE(e) && (t[e.getUniqueId()] = e, i(e.getChildren()));
      });
    };
    e && i(e);
    return t;
  }
  setupParentsIntoCols(e, t) {
    e.forEach(e => {
      e.parent = t;
      sE(e) && this.setupParentsIntoCols(e.getChildren(), e);
    });
  }
};
function ns(e, t) {
  if (!e) return;
  let i = {};
  Object.keys(e).forEach(s => {
    if (t && t.indexOf(s) >= 0 || tT.has(s)) return;
    let r = e[s];
    "object" == typeof r && null !== r && r.constructor === Object ? i[s] = ns(r) : i[s] = r;
  });
  return i;
}
var nr = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colDefFactory";
  }
  wireBeans(e) {
    this.rowGroupColsSvc = e.rowGroupColsSvc;
    this.pivotColsSvc = e.pivotColsSvc;
  }
  getColumnDefs(e, t, i, s) {
    let r = e.slice();
    t ? r.sort((e, t) => i.indexOf(e) - i.indexOf(t)) : i && r.sort((e, t) => s.indexOf(e) - s.indexOf(t));
    let o = this.rowGroupColsSvc?.columns;
    let n = this.pivotColsSvc?.columns;
    return this.buildColumnDefs(r, o, n);
  }
  buildColumnDefs(e, t = [], i = []) {
    let s = [];
    let r = {};
    e.forEach(e => {
      let o = this.createDefFromColumn(e, t, i);
      let n = !0;
      let l = o;
      let a = e.getOriginalParent();
      let d = null;
      for (; a;) {
        let e = null;
        if (a.isPadding()) {
          a = a.getOriginalParent();
          continue;
        }
        let t = r[a.getGroupId()];
        if (t) {
          t.children.push(l);
          n = !1;
          break;
        }
        if ((e = this.createDefFromGroup(a)) && (e.children = [l], r[e.groupId] = e, l = e, a = a.getOriginalParent()), null != a && d === a) {
          n = !1;
          break;
        }
        d = a;
      }
      n && s.push(l);
    });
    return s;
  }
  createDefFromGroup(e) {
    let t = ns(e.getColGroupDef(), ["children"]);
    t && (t.groupId = e.getGroupId());
    return t;
  }
  createDefFromColumn(e, t, i) {
    let s = ns(e.getColDef());
    s.colId = e.getColId();
    s.width = e.getActualWidth();
    s.rowGroup = e.isRowGroupActive();
    s.rowGroupIndex = e.isRowGroupActive() ? t.indexOf(e) : null;
    s.pivot = e.isPivotActive();
    s.pivotIndex = e.isPivotActive() ? i.indexOf(e) : null;
    s.aggFunc = e.isValueActive() ? e.getAggFunc() : null;
    s.hide = !e.isVisible() || void 0;
    s.pinned = e.isPinned() ? e.getPinned() : null;
    s.sort = e.getSort() ? e.getSort() : null;
    s.sortIndex = null != e.getSortIndex() ? e.getSortIndex() : null;
    return s;
  }
};
var no = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colFlex";
  }
  refreshFlexedColumns(e = {}) {
    let t = e.source ?? "flex";
    null != e.viewportWidth && (this.flexViewportWidth = e.viewportWidth);
    let i = this.flexViewportWidth;
    if (!i) return [];
    let {
      visibleCols
    } = this.beans;
    let r = visibleCols.centerCols;
    let o = -1;
    if (e.resizingCols) {
      let t = new Set(e.resizingCols);
      for (let e = r.length - 1; e >= 0; e--) if (t.has(r[e])) {
        o = e;
        break;
      }
    }
    let n = !1;
    let l = r.map((e, t) => {
      let i = e.getFlex();
      let s = null != i && i > 0 && t > o;
      n || (n = s);
      return {
        col: e,
        isFlex: s,
        flex: Math.max(0, i ?? 0),
        initialSize: e.getActualWidth(),
        min: e.getMinWidth(),
        max: e.getMaxWidth(),
        targetSize: 0
      };
    });
    if (!n) return [];
    let a = l.length;
    let d = l.reduce((e, t) => e + t.flex, 0);
    let h = i;
    let u = (e, i) => {
      e.frozenSize = i;
      e.col.setActualWidth(i, t);
      h -= i;
      d -= e.flex;
      a -= 1;
    };
    let c = e => null != e.frozenSize;
    for (let e of l) e.isFlex || u(e, e.initialSize);
    for (; a > 0;) {
      let e;
      let t = Math.round(d < 1 ? h * d : h);
      let i = 0;
      let s = 0;
      for (let r of l) {
        if (c(r)) continue;
        e = r;
        let o = Math.round((s += t * (r.flex / d)) - i);
        r.targetSize = o;
        i += o;
      }
      e && (e.targetSize += t - i);
      let r = 0;
      for (let e of l) {
        if (c(e)) continue;
        let t = e.targetSize;
        let i = Math.min(Math.max(t, e.min), e.max);
        r += i - t;
        e.violationType = i === t ? void 0 : i < t ? "max" : "min";
        e.targetSize = i;
      }
      let o = 0 === r ? "all" : r > 0 ? "min" : "max";
      for (let e of l) c(e) || "all" !== o && e.violationType !== o || u(e, e.targetSize);
    }
    e.skipSetLeft || visibleCols.setLeftValues(t);
    e.updateBodyWidths && visibleCols.updateBodyWidths();
    let g = l.filter(e => e.isFlex && !e.violationType).map(e => e.col);
    if (e.fireResizedEvent) {
      let e = l.filter(e => e.initialSize !== e.frozenSize).map(e => e.col);
      let i = l.filter(e => e.flex).map(e => e.col);
      id(this.eventSvc, e, !0, t, i);
    }
    return g;
  }
  initCol(e) {
    let {
      flex,
      initialFlex
    } = e.colDef;
    void 0 !== flex ? e.flex = flex : void 0 !== initialFlex && (e.flex = initialFlex);
  }
  setColFlex(e, t) {
    e.flex = t ?? null;
    e.dispatchStateUpdatedEvent("flex");
  }
};
var nn = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "dataTypeSvc";
    this.dataTypeDefinitions = {};
    this.isPendingInference = !1;
    this.isColumnTypeOverrideInDataTypeDefinitions = !1;
    this.columnStateUpdatesPendingInference = {};
    this.columnStateUpdateListenerDestroyFuncs = [];
  }
  wireBeans(e) {
    this.colModel = e.colModel;
  }
  postConstruct() {
    this.processDataTypeDefinitions();
    this.addManagedPropertyListener("dataTypeDefinitions", e => {
      this.processDataTypeDefinitions();
      this.colModel.recreateColumnDefs(e);
    });
  }
  processDataTypeDefinitions() {
    let e = this.getDefaultDataTypes();
    let t = {};
    this.dataTypeDefinitions = t;
    let i = {};
    this.formatValueFuncs = i;
    let s = e => t => {
      let {
        column,
        node,
        value
      } = t;
      let o = column.getColDef().valueFormatter;
      o === e.groupSafeValueFormatter && (o = e.valueFormatter);
      return this.beans.valueSvc.formatValue(column, node, value, o);
    };
    for (let r of Object.keys(e)) {
      let o = e[r];
      let n = {
        ...o,
        groupSafeValueFormatter: nd(o, this.gos)
      };
      t[r] = n;
      i[r] = s(n);
    }
    let r = this.gos.get("dataTypeDefinitions") ?? {};
    let o = {};
    for (let n of (this.dataTypeMatchers = o, Object.keys(r))) {
      let l = r[n];
      let a = this.processDataTypeDefinition(l, r, [n], e);
      a && (t[n] = a, l.dataTypeMatcher && (o[n] = l.dataTypeMatcher), i[n] = s(a));
    }
    this.checkObjectValueHandlers(e);
    ["dateString", "text", "number", "boolean", "date"].forEach(t => {
      let i = o[t];
      i && delete o[t];
      o[t] = i ?? e[t].dataTypeMatcher;
    });
  }
  processDataTypeDefinition(e, t, i, s) {
    let r;
    let o = e.extendsDataType;
    if (e.columnTypes && (this.isColumnTypeOverrideInDataTypeDefinitions = !0), e.extendsDataType === e.baseDataType) {
      let i = s[o];
      let n = t[o];
      if (i && n && (i = n), !na(e, i, o)) return;
      r = nl(i, e);
    } else {
      if (i.includes(o)) {
        $$eW42(44);
        return;
      }
      let n = t[o];
      if (!na(e, n, o)) return;
      let l = this.processDataTypeDefinition(n, t, [...i, o], s);
      if (!l) return;
      r = nl(l, e);
    }
    return {
      ...r,
      groupSafeValueFormatter: nd(r, this.gos)
    };
  }
  updateColDefAndGetColumnType(e, t, i) {
    let {
      cellDataType
    } = t;
    let {
      field
    } = t;
    if (void 0 === cellDataType && (s = e.cellDataType), (null == cellDataType || !0 === cellDataType) && (s = !!this.canInferCellDataType(e, t) && this.inferCellDataType(field, i)), !cellDataType) {
      e.cellDataType = !1;
      return;
    }
    let o = this.dataTypeDefinitions[cellDataType];
    if (!o) {
      $$eW42(47, {
        cellDataType
      });
      return;
    }
    e.cellDataType = cellDataType;
    o.groupSafeValueFormatter && (e.valueFormatter = o.groupSafeValueFormatter);
    o.valueParser && (e.valueParser = o.valueParser);
    o.suppressDefaultProperties || this.setColDefPropertiesForBaseDataType(e, cellDataType, o, i);
    return o.columnTypes;
  }
  addColumnListeners(e) {
    if (!this.isPendingInference) return;
    let t = this.columnStateUpdatesPendingInference[e.getColId()];
    if (!t) return;
    let i = e => {
      t.add(e.key);
    };
    e.__addEventListener("columnStateUpdated", i);
    this.columnStateUpdateListenerDestroyFuncs.push(() => e.__removeEventListener("columnStateUpdated", i));
  }
  canInferCellDataType(e, t) {
    let {
      gos
    } = this;
    if (!$$eK33(gos)) return !1;
    let s = {
      cellRenderer: !0,
      valueGetter: !0,
      valueParser: !0,
      refData: !0
    };
    if (nh(t, s)) return !1;
    let r = t.type;
    if (r) {
      let e = gos.get("columnTypes") ?? {};
      if (t4(r).some(t => {
        let i = e[t.trim()];
        return i && nh(i, s);
      })) return !1;
    }
    return !nh(e, s);
  }
  inferCellDataType(e, t) {
    let i;
    if (!e) return;
    let s = this.getInitialData();
    if (s) {
      let t = e.indexOf(".") >= 0 && !this.gos.get("suppressFieldDotNotation");
      i = tL(s, e, t);
    } else this.initWaitForRowData(t);
    if (null != i) return Object.keys(this.dataTypeMatchers).find(e => this.dataTypeMatchers[e](i)) ?? "object";
  }
  getInitialData() {
    let e = this.gos.get("rowData");
    if (e?.length) return e[0];
    if (this.initialData) return this.initialData;
    {
      let e = this.beans.rowModel.rootNode?.allLeafChildren;
      if (e?.length) return e[0].data;
    }
    return null;
  }
  initWaitForRowData(e) {
    if (this.columnStateUpdatesPendingInference[e] = new Set(), this.isPendingInference) return;
    this.isPendingInference = !0;
    let t = this.isColumnTypeOverrideInDataTypeDefinitions;
    let {
      colAutosize,
      eventSvc
    } = this.beans;
    t && colAutosize && (colAutosize.shouldQueueResizeOperations = !0);
    let [r] = this.addManagedEventListeners({
      rowDataUpdateStarted: e => {
        let {
          firstRowData
        } = e;
        firstRowData && (r?.(), this.isPendingInference = !1, this.processColumnsPendingInference(firstRowData, t), this.columnStateUpdatesPendingInference = {}, t && colAutosize?.processResizeOperations(), eventSvc.dispatchEvent({
          type: "dataTypesInferred"
        }));
      }
    });
  }
  processColumnsPendingInference(e, t) {
    this.initialData = e;
    let i = [];
    this.destroyColumnStateUpdateListeners();
    let s = {};
    let r = {};
    for (let e of Object.keys(this.columnStateUpdatesPendingInference)) {
      let o = this.columnStateUpdatesPendingInference[e];
      let n = this.colModel.getCol(e);
      if (!n) return;
      let l = n.getColDef();
      if (!this.resetColDefIntoCol(n, "cellDataTypeInferred")) return;
      let a = n.getColDef();
      if (t && a.type && a.type !== l.type) {
        let t = function (e, t) {
          let i = ig(e);
          t.forEach(e => {
            delete i[e];
            "rowGroup" === e ? delete i.rowGroupIndex : "pivot" === e && delete i.pivotIndex;
          });
          return i;
        }(n, o);
        t.rowGroup && null == t.rowGroupIndex && (s[e] = t);
        t.pivot && null == t.pivotIndex && (r[e] = t);
        i.push(t);
      }
    }
    t && i.push(...this.generateColumnStateForRowGroupAndPivotIndexes(s, r));
    i.length && ih(this.beans, {
      state: i
    }, "cellDataTypeInferred");
    this.initialData = null;
  }
  generateColumnStateForRowGroupAndPivotIndexes(e, t) {
    let i = {};
    let {
      rowGroupColsSvc,
      pivotColsSvc
    } = this.beans;
    rowGroupColsSvc?.restoreColumnOrder(i, e);
    pivotColsSvc?.restoreColumnOrder(i, t);
    return Object.values(i);
  }
  resetColDefIntoCol(e, t) {
    let i = e.getUserProvidedColDef();
    if (!i) return !1;
    let s = ii(this.beans, i, e.getColId());
    e.setColDef(s, i, t);
    return !0;
  }
  checkObjectValueHandlers(e) {
    let t = this.dataTypeDefinitions.object;
    let i = e.object;
    this.hasObjectValueParser = t.valueParser !== i.valueParser;
    this.hasObjectValueFormatter = t.valueFormatter !== i.valueFormatter;
  }
  getDateStringTypeDefinition(e) {
    let {
      dateString
    } = this.dataTypeDefinitions;
    return e ? this.getDataTypeDefinition(e) ?? dateString : dateString;
  }
  getDateParserFunction(e) {
    return this.getDateStringTypeDefinition(e).dateParser;
  }
  getDateFormatterFunction(e) {
    return this.getDateStringTypeDefinition(e).dateFormatter;
  }
  getDataTypeDefinition(e) {
    let t = e.getColDef();
    if (t.cellDataType) return this.dataTypeDefinitions[t.cellDataType];
  }
  getBaseDataType(e) {
    return this.getDataTypeDefinition(e)?.baseDataType;
  }
  checkType(e, t) {
    if (null == t) return !0;
    let i = this.getDataTypeDefinition(e)?.dataTypeMatcher;
    return !i || i(t);
  }
  validateColDef(e) {
    let t = e => $$eW42(48, {
      property: e
    });
    if ("object" === e.cellDataType) {
      let {
        object
      } = this.dataTypeDefinitions;
      e.valueFormatter !== object.groupSafeValueFormatter || this.hasObjectValueFormatter || t("Formatter");
      e.editable && e.valueParser === object.valueParser && !this.hasObjectValueParser && t("Parser");
    }
  }
  getFormatValue(e) {
    return this.formatValueFuncs[e];
  }
  isColPendingInference(e) {
    return this.isPendingInference && !!this.columnStateUpdatesPendingInference[e];
  }
  setColDefPropertiesForBaseDataType(e, t, i, s) {
    let r = this.formatValueFuncs[t];
    switch (i.baseDataType) {
      case "number":
        e.cellEditor = "agNumberCellEditor";
        break;
      case "boolean":
        e.cellEditor = "agCheckboxCellEditor";
        e.cellRenderer = "agCheckboxCellRenderer";
        e.suppressKeyboardEvent = e => !!e.colDef.editable && e.event.key === i4.SPACE;
        break;
      case "date":
        e.cellEditor = "agDateCellEditor";
        e.keyCreator = r;
        break;
      case "dateString":
        e.cellEditor = "agDateStringCellEditor";
        e.keyCreator = r;
        break;
      case "object":
        e.cellEditorParams = {
          useFormatter: !0
        };
        e.comparator = (e, t) => {
          let i = this.colModel.getColDefCol(s);
          let o = i?.getColDef();
          if (!i || !o) return 0;
          let n = null == e ? "" : r({
            column: i,
            node: null,
            value: e
          });
          let l = null == t ? "" : r({
            column: i,
            node: null,
            value: t
          });
          return n === l ? 0 : n > l ? 1 : -1;
        };
        e.keyCreator = r;
    }
    this.beans.filterManager?.setColDefPropertiesForDataType(e, i, r);
  }
  getDefaultDataTypes() {
    let e = e => !!e.match("^\\d{4}-\\d{2}-\\d{2}$");
    let t = this.getLocaleTextFunc();
    return {
      number: {
        baseDataType: "number",
        valueParser: e => e.newValue?.trim?.() === "" ? null : Number(e.newValue),
        valueFormatter: e => null == e.value ? "" : "number" != typeof e.value || isNaN(e.value) ? t("invalidNumber", "Invalid Number") : String(e.value),
        dataTypeMatcher: e => "number" == typeof e
      },
      text: {
        baseDataType: "text",
        valueParser: e => "" === e.newValue ? null : eb(e.newValue),
        dataTypeMatcher: e => "string" == typeof e
      },
      boolean: {
        baseDataType: "boolean",
        valueParser: e => null == e.newValue ? e.newValue : e.newValue?.trim?.() === "" ? null : "true" === String(e.newValue).toLowerCase(),
        valueFormatter: e => null == e.value ? "" : String(e.value),
        dataTypeMatcher: e => "boolean" == typeof e
      },
      date: {
        baseDataType: "date",
        valueParser: e => ol(null == e.newValue ? null : String(e.newValue)),
        valueFormatter: e => null == e.value ? "" : !(e.value instanceof Date) || isNaN(e.value.getTime()) ? t("invalidDate", "Invalid Date") : or(e.value, !1) ?? "",
        dataTypeMatcher: e => e instanceof Date
      },
      dateString: {
        baseDataType: "dateString",
        dateParser: e => ol(e) ?? void 0,
        dateFormatter: e => or(e ?? null, !1) ?? void 0,
        valueParser: t => e(String(t.newValue)) ? t.newValue : null,
        valueFormatter: t => e(String(t.value)) ? t.value : "",
        dataTypeMatcher: t => "string" == typeof t && e(t)
      },
      object: {
        baseDataType: "object",
        valueParser: () => null,
        valueFormatter: e => eb(e.value) ?? ""
      }
    };
  }
  destroyColumnStateUpdateListeners() {
    this.columnStateUpdateListenerDestroyFuncs.forEach(e => e());
    this.columnStateUpdateListenerDestroyFuncs = [];
  }
  destroy() {
    this.dataTypeDefinitions = {};
    this.dataTypeMatchers = {};
    this.formatValueFuncs = {};
    this.columnStateUpdatesPendingInference = {};
    this.destroyColumnStateUpdateListeners();
    super.destroy();
  }
};
function nl(e, t) {
  let i = {
    ...e,
    ...t
  };
  e.columnTypes && t.columnTypes && t.appendColumnTypes && (i.columnTypes = [...t4(e.columnTypes), ...t4(t.columnTypes)]);
  return i;
}
function na(e, t, i) {
  return t ? t.baseDataType === e.baseDataType || ($$eW42(46), !1) : ($$eW42(45, {
    parentCellDataType: i
  }), !1);
}
function nd(e, t) {
  if (e.valueFormatter) return i => {
    if (i.node?.group) {
      let s = (i.colDef.pivotValueColumn ?? i.column).getAggFunc();
      if (s) {
        if ("first" === s || "last" === s) return e.valueFormatter(i);
        if ("number" === e.baseDataType && "count" !== s) {
          if ("number" == typeof i.value) return e.valueFormatter(i);
          if ("object" == typeof i.value) {
            if (!i.value) return;
            if ("toNumber" in i.value) return e.valueFormatter({
              ...i,
              value: i.value.toNumber()
            });
            if ("value" in i.value) return e.valueFormatter({
              ...i,
              value: i.value.value
            });
          }
        }
        return;
      }
      if ("groupRows" === t.get("groupDisplayType") && !t.get("treeData")) return;
    } else if (t.get("groupHideOpenParents") && i.column.isRowGroupActive() && "string" == typeof i.value && !e.dataTypeMatcher?.(i.value)) return;
    return e.valueFormatter(i);
  };
}
function nh(e, t) {
  return [["cellRenderer", "agSparklineCellRenderer"], ["valueGetter", void 0], ["valueParser", void 0], ["refData", void 0]].some(([i, s]) => function (e, t, i, s) {
    if (!t[i]) return !1;
    let r = e[i];
    return null === r ? (t[i] = !1, !1) : void 0 === s ? !!r : r === s;
  }(e, t, i, s));
}
var $$nu7 = {
  moduleName: "ColumnApi",
  version: eI,
  beans: [nr],
  apiFunctions: {
    getColumnDef: function (e, t) {
      let i = e.colModel.getColDefCol(t);
      return i ? i.getColDef() : null;
    },
    getDisplayNameForColumn: function (e, t, i) {
      return e.colNames.getDisplayNameForColumn(t, i) || "";
    },
    getColumn: function (e, t) {
      return e.colModel.getColDefCol(t);
    },
    getColumns: function (e) {
      return e.colModel.getColDefCols();
    },
    applyColumnState: function (e, t) {
      return ih(e, t, "api");
    },
    getColumnState: function (e) {
      return ic(e);
    },
    resetColumnState: function (e) {
      !function (e, t) {
        let {
          colModel,
          autoColSvc
        } = e;
        let r = colModel.getColDefCols();
        if (!r?.length) return;
        let o = t0(colModel.getColDefColTree());
        let n = [];
        let l = 1e3;
        let a = 1e3;
        let d = [];
        let h = autoColSvc?.getColumns();
        h && (d = d.concat(h));
        o && (d = d.concat(o));
        d.forEach(e => {
          let t = ig(e);
          ev(t.rowGroupIndex) && t.rowGroup && (t.rowGroupIndex = l++);
          ev(t.pivotIndex) && t.pivot && (t.pivotIndex = a++);
          n.push(t);
        });
        ih(e, {
          state: n,
          applyOrder: !0
        }, "api");
      }(e, 0);
    },
    isPinning: function (e) {
      return e.visibleCols.isPinningLeft() || e.visibleCols.isPinningRight();
    },
    isPinningLeft: function (e) {
      return e.visibleCols.isPinningLeft();
    },
    isPinningRight: function (e) {
      return e.visibleCols.isPinningRight();
    },
    getDisplayedColAfter: function (e, t) {
      return e.visibleCols.getColAfter(t);
    },
    getDisplayedColBefore: function (e, t) {
      return e.visibleCols.getColBefore(t);
    },
    setColumnsVisible: function (e, t, i) {
      e.colModel.setColsVisible(t, i, "api");
    },
    setColumnsPinned: function (e, t, i) {
      e.pinnedCols?.setColsPinned(t, i, "api");
    },
    getAllGridColumns: function (e) {
      return e.colModel.getCols();
    },
    getDisplayedLeftColumns: function (e) {
      return e.visibleCols.leftCols;
    },
    getDisplayedCenterColumns: function (e) {
      return e.visibleCols.centerCols;
    },
    getDisplayedRightColumns: function (e) {
      return e.visibleCols.rightCols;
    },
    getAllDisplayedColumns: function (e) {
      return e.visibleCols.allCols;
    },
    getAllDisplayedVirtualColumns: function (e) {
      return e.colViewport.getViewportColumns();
    },
    getColumnDefs: function (e) {
      return e.colModel.getColumnDefs();
    }
  }
};
var nc = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colNames";
  }
  getDisplayNameForColumn(e, t, i = !1) {
    if (!e) return null;
    let s = this.getHeaderName(e.getColDef(), e, null, null, t);
    let {
      aggColNameSvc
    } = this.beans;
    return i && aggColNameSvc ? aggColNameSvc.getHeaderName(e, s) : s;
  }
  getDisplayNameForProvidedColumnGroup(e, t, i) {
    let s = t?.getColGroupDef();
    return s ? this.getHeaderName(s, null, e, t, i) : null;
  }
  getDisplayNameForColumnGroup(e, t) {
    return this.getDisplayNameForProvidedColumnGroup(e, e.getProvidedColumnGroup(), t);
  }
  getHeaderName(e, t, i, s, r) {
    let o = e.headerValueGetter;
    if (o) {
      let n = ty(this.gos, {
        colDef: e,
        column: t,
        columnGroup: i,
        providedColumnGroup: s,
        location: r
      });
      if ("function" == typeof o) return o(n);
      if ("string" == typeof o) return this.beans.expressionSvc?.evaluate(o, n) ?? null;
    } else if (null != e.headerName) return e.headerName;else if (e.field) {
      var n;
      return (n = e.field) && null != n ? n.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z])([a-z])/g, "$1 $2$3").replace(/\./g, " ").split(" ").map(e => e.substring(0, 1).toUpperCase() + (e.length > 1 ? e.substring(1, e.length) : "")).join(" ") : null;
    }
    return "";
  }
};
var ng = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "colViewport";
    this.colsWithinViewport = [];
    this.headerColsWithinViewport = [];
    this.colsWithinViewportHash = "";
    this.rowsOfHeadersToRenderLeft = {};
    this.rowsOfHeadersToRenderRight = {};
    this.rowsOfHeadersToRenderCenter = {};
  }
  wireBeans(e) {
    this.visibleCols = e.visibleCols;
    this.colModel = e.colModel;
  }
  postConstruct() {
    this.suppressColumnVirtualisation = this.gos.get("suppressColumnVirtualisation");
  }
  setScrollPosition(e, t, i = !1) {
    let {
      visibleCols
    } = this;
    let r = visibleCols.isBodyWidthDirty;
    if (e !== this.scrollWidth || t !== this.scrollPosition || r) {
      if (this.scrollWidth = e, this.scrollPosition = t, visibleCols.isBodyWidthDirty = !0, this.gos.get("enableRtl")) {
        let i = visibleCols.bodyWidth;
        this.viewportLeft = i - t - e;
        this.viewportRight = i - t;
      } else {
        this.viewportLeft = t;
        this.viewportRight = e + t;
      }
      this.colModel.ready && this.checkViewportColumns(i);
    }
  }
  getHeadersToRender(e, t) {
    let i;
    switch (e) {
      case "left":
        i = this.rowsOfHeadersToRenderLeft[t];
        break;
      case "right":
        i = this.rowsOfHeadersToRenderRight[t];
        break;
      default:
        i = this.rowsOfHeadersToRenderCenter[t];
    }
    return i || [];
  }
  extractViewportColumns() {
    let e = this.visibleCols.centerCols;
    this.isColumnVirtualisationSuppressed() ? (this.colsWithinViewport = e, this.headerColsWithinViewport = e) : (this.colsWithinViewport = e.filter(this.isColumnInRowViewport.bind(this)), this.headerColsWithinViewport = e.filter(this.isColumnInHeaderViewport.bind(this)));
  }
  isColumnVirtualisationSuppressed() {
    return this.suppressColumnVirtualisation || 0 === this.viewportRight;
  }
  clear(e) {
    this.rowsOfHeadersToRenderLeft = {};
    this.rowsOfHeadersToRenderRight = {};
    this.rowsOfHeadersToRenderCenter = {};
    e || (this.colsWithinViewportHash = "");
  }
  isColumnInHeaderViewport(e) {
    return !!(e.isAutoHeaderHeight() || function (e) {
      for (; e;) {
        if (e.isAutoHeaderHeight()) return !0;
        e = e.getParent();
      }
      return !1;
    }(e)) || this.isColumnInRowViewport(e);
  }
  isColumnInRowViewport(e) {
    if (e.isAutoHeight()) return !0;
    let t = e.getLeft() || 0;
    let i = t + e.getActualWidth();
    let s = this.viewportLeft - 200;
    let r = this.viewportRight + 200;
    return !(t < s && i < s) && !(t > r && i > r);
  }
  getViewportColumns() {
    let {
      leftCols,
      rightCols
    } = this.visibleCols;
    return this.colsWithinViewport.concat(leftCols).concat(rightCols);
  }
  getColsWithinViewport(e) {
    if (!this.colModel.colSpanActive) return this.colsWithinViewport;
    let t = this.isColumnVirtualisationSuppressed() ? void 0 : this.isColumnInRowViewport.bind(this);
    let {
      visibleCols
    } = this;
    let s = visibleCols.centerCols;
    return visibleCols.getColsForRow(e, s, t, e => {
      let t = e.getLeft();
      return ew(t) && t > this.viewportLeft;
    });
  }
  checkViewportColumns(e = !1) {
    this.extractViewport() && this.eventSvc.dispatchEvent({
      type: "virtualColumnsChanged",
      afterScroll: e
    });
  }
  calculateHeaderRows() {
    this.clear(!0);
    let e = {};
    let {
      leftCols,
      rightCols,
      treeLeft,
      treeRight,
      treeCenter
    } = this.visibleCols;
    this.headerColsWithinViewport.concat(leftCols).concat(rightCols).forEach(t => e[t.getId()] = !0);
    let n = (t, i, s) => {
      let r = !1;
      for (let o = 0; o < t.length; o++) {
        let l = t[o];
        let a = !1;
        if (tW(l)) a = !0 === e[l.getId()];else {
          let e = l.getDisplayedChildren();
          e && (a = n(e, i, s + 1));
        }
        a && (r = !0, i[s] || (i[s] = []), i[s].push(l));
      }
      return r;
    };
    n(treeLeft, this.rowsOfHeadersToRenderLeft, 0);
    n(treeRight, this.rowsOfHeadersToRenderRight, 0);
    n(treeCenter, this.rowsOfHeadersToRenderCenter, 0);
  }
  extractViewport() {
    this.extractViewportColumns();
    let e = this.getViewportColumns().map(e => `${e.getId()}-${e.getPinned() || "normal"}`).join("#");
    let t = this.colsWithinViewportHash !== e;
    t && (this.colsWithinViewportHash = e, this.calculateHeaderRows());
    return t;
  }
};
var np = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "agCompUtils";
  }
  adaptFunction(e, t) {
    return e.cellRenderer ? class {
      refresh() {
        return !1;
      }
      getGui() {
        return this.eGui;
      }
      init(e) {
        let i = t(e);
        let s = typeof i;
        if ("string" === s || "number" === s || "boolean" === s) {
          this.eGui = eo("<span>" + i + "</span>");
          return;
        }
        if (null == i) {
          this.eGui = eo("<span></span>");
          return;
        }
        this.eGui = i;
      }
    } : null;
  }
};
var nm = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "registry";
    this.agGridDefaults = {};
    this.agGridDefaultParams = {};
    this.jsComps = {};
    this.dynamicBeans = {};
    this.selectors = {};
    this.icons = {};
  }
  postConstruct() {
    let e = this.gos.get("components");
    if (null != e) for (let t of Object.keys(e)) this.jsComps[t] = e[t];
  }
  registerModule(e) {
    let {
      icons,
      userComponents,
      dynamicBeans,
      selectors
    } = e;
    if (userComponents) {
      let e = (e, t, i) => {
        this.agGridDefaults[e] = t;
        i && (this.agGridDefaultParams[e] = i);
      };
      for (let t of Object.keys(userComponents)) {
        let s = userComponents[t];
        "object" == typeof s ? e(t, s.classImp, s.params) : e(t, s);
      }
    }
    if (dynamicBeans) for (let e of Object.keys(dynamicBeans)) this.dynamicBeans[e] = dynamicBeans[e];
    if (selectors?.forEach(e => {
      this.selectors[e.selector] = e;
    }), icons) for (let e of Object.keys(icons)) this.icons[e] = icons[e];
  }
  getUserComponent(e, t) {
    let i = (e, t, i) => ({
      componentFromFramework: t,
      component: e,
      params: i
    });
    let {
      frameworkOverrides
    } = this.beans;
    let r = frameworkOverrides.frameworkComponent(t, this.gos.get("components"));
    if (null != r) return i(r, !0);
    let o = this.jsComps[t];
    if (o) {
      let e = frameworkOverrides.isFrameworkComponent(o);
      return i(o, e);
    }
    let n = this.agGridDefaults[t];
    return n ? i(n, !1, this.agGridDefaultParams[t]) : (this.beans.validation?.missingUserComponent(e, t, this.agGridDefaults, this.jsComps), null);
  }
  createDynamicBean(e, t, ...i) {
    let s = this.dynamicBeans[e];
    if (null == s) {
      if (t) throw Error(eU(256));
      return;
    }
    return new s(...i);
  }
  getSelector(e) {
    return this.selectors[e];
  }
  getIcon(e) {
    return this.icons[e];
  }
};
var nf = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "ctrlsSvc";
    this.params = {};
    this.ready = !1;
    this.readyCallbacks = [];
  }
  postConstruct() {
    this.addEventListener("ready", () => {
      this.updateReady();
      this.ready && (this.readyCallbacks.forEach(e => e(this.params)), this.readyCallbacks.length = 0);
    }, this.beans.frameworkOverrides.runWhenReadyAsync?.() ?? !1);
  }
  updateReady() {
    let e = Object.values(this.params);
    this.ready = 23 === e.length && e.every(e => e?.isAlive() ?? !1);
  }
  whenReady(e, t) {
    this.ready ? t(this.params) : this.readyCallbacks.push(t);
    e.addDestroyFunc(() => {
      let e = this.readyCallbacks.indexOf(t);
      e >= 0 && this.readyCallbacks.splice(e, 1);
    });
  }
  register(e, t) {
    this.params[e] = t;
    this.updateReady();
    this.ready && this.dispatchLocalEvent({
      type: "ready"
    });
    t.addDestroyFunc(() => {
      this.updateReady();
    });
  }
  get(e) {
    return this.params[e];
  }
  getGridBodyCtrl() {
    return this.params.gridBodyCtrl;
  }
  getHeaderRowContainerCtrls() {
    let {
      leftHeader,
      centerHeader,
      rightHeader
    } = this.params;
    return [leftHeader, rightHeader, centerHeader];
  }
  getHeaderRowContainerCtrl(e) {
    let t = this.params;
    switch (e) {
      case "left":
        return t.leftHeader;
      case "right":
        return t.rightHeader;
      default:
        return t.centerHeader;
    }
  }
  getScrollFeature() {
    return this.getGridBodyCtrl().scrollFeature;
  }
};
var nC = "object" != typeof window || !window?.document?.fonts?.forEach;
var nw = new WeakMap();
var nv = (e, t, i, s, r) => {
  let o;
  if (nC || nX) return;
  s && (e = `@layer ${CSS.escape(s)} { ${e} }`);
  let n = nw.get(t);
  if (n || (n = [], nw.set(t, n)), n.find(t => t.css === e)) return;
  let l = document.createElement("style");
  l.dataset.agGlobalCss = i;
  l.textContent = e;
  let a = {
    css: e,
    el: l,
    priority: r
  };
  for (let e of n) {
    if (e.priority > r) break;
    o = e;
  }
  if (o) {
    o.el.insertAdjacentElement("afterend", l);
    let e = n.indexOf(o);
    n.splice(e + 1, 0, a);
  } else {
    t.insertBefore(l, t.querySelector(":not(title, meta)"));
    n.push(a);
  }
};
var nb = (e, t) => {
  nv(':where(.ag-root-wrapper,.ag-popup,.ag-dnd-ghost,.ag-chart),:where(.ag-root-wrapper,.ag-popup,.ag-dnd-ghost,.ag-chart) :where([class^=ag-]){box-sizing:border-box;&:after,&:before{box-sizing:border-box}&:where(div,span,label):focus-visible{box-shadow:inset var(--ag-focus-shadow);outline:none}}:where(.ag-root-wrapper,.ag-popup,.ag-dnd-ghost,.ag-chart) :where([class^=ag-]) ::-ms-clear{display:none}.ag-aria-description-container{border:0;z-index:9999;clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.ag-hidden{display:none!important}.ag-invisible{visibility:hidden!important}.ag-unselectable{-webkit-user-select:none;-moz-user-select:none;user-select:none}.ag-selectable{-webkit-user-select:text;-moz-user-select:text;user-select:text}.ag-tab-guard{display:block;height:0;position:absolute;width:0}:where(.ag-virtual-list-viewport) .ag-tab-guard{position:sticky}.ag-tab-guard-top{top:1px}.ag-tab-guard-bottom{bottom:1px}.ag-shake-left-to-right{animation-direction:alternate;animation-duration:.2s;animation-iteration-count:infinite;animation-name:ag-shake-left-to-right}@keyframes ag-shake-left-to-right{0%{padding-left:6px;padding-right:2px}to{padding-left:2px;padding-right:6px}}.ag-body-horizontal-scroll-viewport,.ag-body-vertical-scroll-viewport,.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport,.ag-virtual-list-viewport{flex:1 1 auto;height:100%;min-width:0;overflow:hidden;position:relative}.ag-viewport{position:relative}.ag-spanning-container{position:absolute;top:0;z-index:1}.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{overflow-x:auto;-ms-overflow-style:none!important;scrollbar-width:none!important;&::-webkit-scrollbar{display:none!important}}.ag-body-viewport{display:flex;overflow-x:hidden;&:where(.ag-layout-normal){overflow-y:auto;-webkit-overflow-scrolling:touch}}.ag-sticky-bottom-container,.ag-sticky-top-container{min-height:1px}.ag-center-cols-viewport{min-height:100%;width:100%}.ag-body-horizontal-scroll-viewport{overflow-x:scroll}.ag-body-vertical-scroll-viewport{overflow-y:scroll}.ag-virtual-list-viewport{overflow:auto;width:100%}.ag-body-container,.ag-body-horizontal-scroll-container,.ag-body-vertical-scroll-container,.ag-center-cols-container,.ag-floating-bottom-container,.ag-floating-bottom-full-width-container,.ag-floating-top-container,.ag-full-width-container,.ag-header-container,.ag-pinned-left-cols-container,.ag-pinned-right-cols-container,.ag-sticky-bottom-container,.ag-sticky-top-container,.ag-virtual-list-container{position:relative}.ag-floating-bottom-container,.ag-floating-top-container,.ag-header-container,.ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top,.ag-sticky-bottom-container,.ag-sticky-top-container{height:100%;white-space:nowrap}.ag-center-cols-container,.ag-pinned-right-cols-container{display:block}.ag-body-horizontal-scroll-container{height:100%}.ag-body-vertical-scroll-container{width:100%}.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container,.ag-full-width-container,.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{pointer-events:none;position:absolute;top:0}:where(.ag-ltr) .ag-floating-bottom-full-width-container,:where(.ag-ltr) .ag-floating-top-full-width-container,:where(.ag-ltr) .ag-full-width-container,:where(.ag-ltr) .ag-sticky-bottom-full-width-container,:where(.ag-ltr) .ag-sticky-top-full-width-container{left:0}:where(.ag-rtl) .ag-floating-bottom-full-width-container,:where(.ag-rtl) .ag-floating-top-full-width-container,:where(.ag-rtl) .ag-full-width-container,:where(.ag-rtl) .ag-sticky-bottom-full-width-container,:where(.ag-rtl) .ag-sticky-top-full-width-container{right:0}.ag-full-width-container{width:100%}.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container{display:inline-block;height:100%;overflow:hidden;width:100%}.ag-virtual-list-container{overflow:hidden}.ag-body{display:flex;flex:1 1 auto;flex-direction:row!important;min-height:0;position:relative}.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:flex;min-height:0;min-width:0;position:relative;&:where(.ag-scrollbar-invisible){bottom:0;position:absolute;&:where(.ag-apple-scrollbar){opacity:0;transition:opacity .4s;visibility:hidden;&:where(.ag-scrollbar-scrolling,.ag-scrollbar-active){opacity:1;visibility:visible}}}}.ag-body-horizontal-scroll{width:100%;&:where(.ag-scrollbar-invisible){left:0;right:0}}.ag-body-vertical-scroll{height:100%;&:where(.ag-scrollbar-invisible){top:0;z-index:10}}:where(.ag-ltr) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){right:0}}:where(.ag-rtl) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){left:0}}.ag-force-vertical-scroll{overflow-y:scroll!important}.ag-horizontal-left-spacer,.ag-horizontal-right-spacer{height:100%;min-width:0;overflow-x:scroll;&:where(.ag-scroller-corner){overflow-x:hidden}}:where(.ag-row-animation) .ag-row{transition:transform .4s,top .4s,opacity .2s;&:where(.ag-after-created){transition:transform .4s,top .4s,height .4s,opacity .2s}}:where(.ag-row-no-animation) .ag-row{transition:none}.ag-row-loading{align-items:center;display:flex}.ag-row-position-absolute{position:absolute}.ag-row-position-relative{position:relative}.ag-full-width-row{overflow:hidden;pointer-events:all}.ag-row-inline-editing{z-index:1}.ag-row-dragging{z-index:2}.ag-stub-cell{align-items:center;display:flex}.ag-cell{display:inline-block;height:100%;position:absolute;white-space:nowrap;&:focus-visible{box-shadow:none}}.ag-cell-value{flex:1 1 auto}.ag-cell-value,.ag-group-value{overflow:hidden;text-overflow:ellipsis}.ag-cell-wrap-text{white-space:normal;word-break:break-word}:where(.ag-cell) .ag-icon{display:inline-block;vertical-align:middle}.ag-floating-top{border-bottom:var(--ag-pinned-row-border)}.ag-floating-bottom,.ag-floating-top{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}.ag-floating-bottom{border-top:var(--ag-pinned-row-border)}.ag-sticky-bottom,.ag-sticky-top{background-color:var(--ag-background-color);display:flex;height:0;overflow:hidden;position:absolute;width:100%;z-index:1}.ag-opacity-zero{opacity:0!important}.ag-cell-label-container{align-items:center;display:flex;flex-direction:row-reverse;height:100%;justify-content:space-between;width:100%}:where(.ag-right-aligned-header){.ag-cell-label-container{flex-direction:row}.ag-header-cell-text{text-align:end}}.ag-column-group-icons{display:block;>*{cursor:pointer}}:where(.ag-ltr){direction:ltr;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row}}:where(.ag-rtl){direction:rtl;text-align:right;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row-reverse}.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{display:block}}:where(.ag-rtl){.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{transform:rotate(180deg)}}:where(.ag-rtl){.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{transform:rotate(-180deg)}}.ag-measurement-container{height:0;overflow:hidden;visibility:hidden;width:0}.ag-measurement-element-border{display:inline-block;&:before{border-left:var(--ag-internal-measurement-border);content:"";display:block}}.ag-group{position:relative;width:100%}.ag-group-title-bar{align-items:center;display:flex;padding:var(--ag-spacing)}.ag-group-title{display:inline;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(.ag-group-title-bar) .ag-group-title{cursor:default}.ag-group-toolbar{align-items:center;display:flex;padding:var(--ag-spacing)}.ag-group-container{display:flex}.ag-disabled .ag-group-container{pointer-events:none}.ag-disabled-group-container,.ag-disabled-group-title-bar{opacity:.5}.ag-group-container-horizontal{flex-flow:row wrap}.ag-group-container-vertical{flex-direction:column}.ag-group-title-bar-icon{cursor:pointer;flex:none}:where(.ag-ltr) .ag-group-title-bar-icon{margin-right:var(--ag-spacing)}:where(.ag-rtl) .ag-group-title-bar-icon{margin-left:var(--ag-spacing)}:where(.ag-group-item-alignment-stretch) .ag-group-item{align-items:stretch}:where(.ag-group-item-alignment-start) .ag-group-item{align-items:flex-start}:where(.ag-group-item-alignment-end) .ag-group-item{align-items:flex-end}.ag-popup-child{top:0;z-index:5;&:where(:not(.ag-tooltip-custom)){box-shadow:var(--ag-popup-shadow)}}.ag-popup-editor{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ag-large-text-input{display:block}:where(.ag-ltr) .ag-row:not(.ag-row-level-0) .ag-pivot-leaf-group{margin-left:var(--ag-row-group-indent-size)}:where(.ag-rtl) .ag-row:not(.ag-row-level-0) .ag-pivot-leaf-group{margin-right:var(--ag-row-group-indent-size)}:where(.ag-ltr) .ag-row-group-leaf-indent{margin-left:calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))}:where(.ag-rtl) .ag-row-group-leaf-indent{margin-right:calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))}.ag-value-change-delta{padding:0 2px}.ag-value-change-delta-up{color:var(--ag-value-change-delta-up-color)}.ag-value-change-delta-down{color:var(--ag-value-change-delta-down-color)}.ag-value-change-value{background-color:transparent;border-radius:1px;padding-left:1px;padding-right:1px;transition:background-color 1s}.ag-value-change-value-highlight{background-color:var(--ag-value-change-value-highlight-background-color);transition:background-color .1s}.ag-cell-data-changed{background-color:var(--ag-value-change-value-highlight-background-color)!important}.ag-cell-data-changed-animation{background-color:transparent}.ag-cell-highlight{background-color:var(--ag-range-selection-highlight-color)!important}.ag-row,.ag-spanned-row{color:var(--ag-cell-text-color);font-family:var(--ag-cell-font-family);font-size:var(--ag-data-font-size);white-space:nowrap;--ag-internal-content-line-height:calc(min(var(--ag-row-height), var(--ag-line-height, 1000px)) - var(--ag-internal-row-border-width, 1px) - 2px)}.ag-row{background-color:var(--ag-background-color);border-bottom:var(--ag-row-border);height:var(--ag-row-height);width:100%}:where(.ag-body-vertical-content-no-gap>div>div>div,.ag-body-vertical-content-no-gap>div>div>div>div)>.ag-row-last{border-bottom-color:transparent}.ag-sticky-bottom{border-top:var(--ag-row-border);box-sizing:content-box!important}.ag-group-contracted,.ag-group-expanded{cursor:pointer}.ag-cell,.ag-full-width-row .ag-cell-wrapper.ag-row-group{border:1px solid transparent;line-height:var(--ag-internal-content-line-height);-webkit-font-smoothing:subpixel-antialiased}:where(.ag-ltr) .ag-cell{border-right:var(--ag-column-border)}:where(.ag-rtl) .ag-cell{border-left:var(--ag-column-border)}.ag-spanned-cell-wrapper{background-color:var(--ag-background-color);position:absolute}.ag-spanned-cell-wrapper>.ag-spanned-cell{display:block;position:relative}:where(.ag-ltr) :where(.ag-body-horizontal-content-no-gap) .ag-column-last{border-right-color:transparent}:where(.ag-rtl) :where(.ag-body-horizontal-content-no-gap) .ag-column-last{border-left-color:transparent}.ag-cell-wrapper{align-items:center;display:flex;>:where(:not(.ag-cell-value,.ag-group-value)){align-items:center;display:flex;height:var(--ag-internal-content-line-height)}&:where(.ag-row-group){align-items:flex-start}:where(.ag-full-width-row) &:where(.ag-row-group){align-items:center;height:100%}}:where(.ag-ltr) .ag-cell-wrapper{padding-left:calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))}:where(.ag-rtl) .ag-cell-wrapper{padding-right:calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))}:where(.ag-cell-wrap-text:not(.ag-cell-auto-height)) .ag-cell-wrapper{align-items:normal;height:100%;:where(.ag-cell-value){height:100%}}:where(.ag-ltr) .ag-row>.ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}:where(.ag-rtl) .ag-row>.ag-cell-wrapper.ag-row-group{padding-right:calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}.ag-cell-focus:not(.ag-cell-range-selected):focus-within,.ag-cell-range-single-cell,.ag-cell-range-single-cell.ag-cell-range-handle,.ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),.ag-context-menu-open .ag-full-width-row.ag-row-focus .ag-cell-wrapper.ag-row-group,.ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group{border:1px solid;border-color:var(--ag-range-selection-border-color);border-style:var(--ag-range-selection-border-style);outline:initial}.ag-full-width-row.ag-row-focus:focus{box-shadow:none}:where(.ag-ltr) .ag-group-contracted,:where(.ag-ltr) .ag-group-expanded,:where(.ag-ltr) .ag-row-drag,:where(.ag-ltr) .ag-selection-checkbox{margin-right:var(--ag-cell-widget-spacing)}:where(.ag-rtl) .ag-group-contracted,:where(.ag-rtl) .ag-group-expanded,:where(.ag-rtl) .ag-row-drag,:where(.ag-rtl) .ag-selection-checkbox{margin-left:var(--ag-cell-widget-spacing)}:where(.ag-ltr) .ag-group-child-count{margin-left:3px}:where(.ag-rtl) .ag-group-child-count{margin-right:3px}.ag-row-highlight-above:after,.ag-row-highlight-below:after{background-color:var(--ag-range-selection-border-color);content:"";height:1px;position:absolute;width:calc(100% - 1px)}:where(.ag-ltr) .ag-row-highlight-above:after,:where(.ag-ltr) .ag-row-highlight-below:after{left:1px}:where(.ag-rtl) .ag-row-highlight-above:after,:where(.ag-rtl) .ag-row-highlight-below:after{right:1px}.ag-row-highlight-above:after{top:0}.ag-row-highlight-below:after{bottom:0}.ag-row-odd{background-color:var(--ag-odd-row-background-color)}.ag-row-selected:before{background-color:var(--ag-selected-row-background-color);content:"";display:block;inset:0;pointer-events:none;position:absolute}.ag-row-hover.ag-full-width-row.ag-row-group:before,.ag-row-hover:not(.ag-full-width-row):before{background-color:var(--ag-row-hover-color);content:"";display:block;inset:0;pointer-events:none;position:absolute}.ag-row-hover.ag-row-selected:before{background-color:var(--ag-row-hover-color);background-image:linear-gradient(var(--ag-selected-row-background-color),var(--ag-selected-row-background-color))}.ag-row-hover.ag-full-width-row.ag-row-group>*{position:relative}.ag-column-hover{background-color:var(--ag-column-hover-color)}.ag-header-range-highlight{background-color:var(--ag-range-header-highlight-color)}.ag-right-aligned-cell{font-variant-numeric:tabular-nums}:where(.ag-ltr) .ag-right-aligned-cell{text-align:right}:where(.ag-rtl) .ag-right-aligned-cell{text-align:left}.ag-right-aligned-cell .ag-cell-value,.ag-right-aligned-cell .ag-group-value{margin-left:auto}:where(.ag-ltr) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-ltr) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level));padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}:where(.ag-rtl) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-rtl) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px);padding-right:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}.ag-row>.ag-cell-wrapper{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px);padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}.ag-row-dragging{cursor:move;opacity:.5}.ag-details-row{background-color:var(--ag-background-color);padding:calc(var(--ag-spacing)*3.75)}.ag-layout-auto-height,.ag-layout-print{.ag-center-cols-container,.ag-center-cols-viewport{min-height:150px}}.ag-overlay-loading-wrapper{background-color:var(--ag-modal-overlay-background-color)}.ag-skeleton-container{align-content:center;height:100%;width:100%}.ag-skeleton-effect{animation:ag-skeleton-loading 1.5s ease-in-out .5s infinite;background-color:var(--ag-row-loading-skeleton-effect-color);border-radius:.25rem;height:1em;width:100%}:where(.ag-ltr) .ag-right-aligned-cell .ag-skeleton-effect{margin-left:auto}:where(.ag-rtl) .ag-right-aligned-cell .ag-skeleton-effect{margin-right:auto}@keyframes ag-skeleton-loading{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.ag-loading{align-items:center;display:flex;height:100%}:where(.ag-ltr) .ag-loading{padding-left:var(--ag-cell-horizontal-padding)}:where(.ag-rtl) .ag-loading{padding-right:var(--ag-cell-horizontal-padding)}:where(.ag-ltr) .ag-loading-icon{padding-right:var(--ag-cell-widget-spacing)}:where(.ag-rtl) .ag-loading-icon{padding-left:var(--ag-cell-widget-spacing)}.ag-icon-loading{animation-duration:1s;animation-iteration-count:infinite;animation-name:spin;animation-timing-function:linear}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ag-input-wrapper,.ag-picker-field-wrapper{align-items:center;display:flex;flex:1 1 auto;line-height:normal;position:relative}.ag-input-field{align-items:center;display:flex;flex-direction:row}.ag-input-field-input:where(:not([type=checkbox],[type=radio])){flex:1 1 auto;min-width:0;width:100%}.ag-header{background-color:var(--ag-header-background-color);border-bottom:var(--ag-header-row-border);color:var(--ag-header-text-color);display:flex;font-family:var(--ag-header-font-family);font-size:var(--ag-header-font-size);font-weight:var(--ag-header-font-weight);overflow:hidden;white-space:nowrap;width:100%}.ag-header-row{height:var(--ag-header-height);position:absolute}.ag-floating-filter-button-button,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,:where(.ag-header-cell-sortable) .ag-header-cell-label{cursor:pointer}:where(.ag-ltr) .ag-header-expand-icon{margin-left:4px}:where(.ag-rtl) .ag-header-expand-icon{margin-right:4px}.ag-header-row:where(:not(:first-child)){:where(.ag-header-cell:not(.ag-header-span-height.ag-header-span-total,.ag-header-parent-hidden),.ag-header-group-cell.ag-header-group-cell-with-group){border-top:var(--ag-header-row-border)}}.ag-header-row:where(:not(.ag-header-row-column-group)){overflow:hidden}:where(.ag-header.ag-header-allow-overflow) .ag-header-row{overflow:visible}.ag-header-cell{display:inline-flex;overflow:hidden}.ag-header-group-cell{contain:paint;display:flex}.ag-header-cell,.ag-header-group-cell{align-items:center;gap:var(--ag-cell-widget-spacing);height:100%;padding:0 var(--ag-cell-horizontal-padding);position:absolute}@property --ag-internal-moving-color{syntax:"<color>";inherits:false;initial-value:transparent}@property --ag-internal-hover-color{syntax:"<color>";inherits:false;initial-value:transparent}.ag-header-cell:where(:not(.ag-floating-filter)),.ag-header-group-cell{&:before{background-image:linear-gradient(var(--ag-internal-hover-color),var(--ag-internal-hover-color)),linear-gradient(var(--ag-internal-moving-color),var(--ag-internal-moving-color));content:"";inset:0;position:absolute;--ag-internal-moving-color:transparent;--ag-internal-hover-color:transparent;transition:--ag-internal-moving-color var(--ag-header-cell-background-transition-duration),--ag-internal-hover-color var(--ag-header-cell-background-transition-duration)}&:where(:hover):before{--ag-internal-hover-color:var(--ag-header-cell-hover-background-color)}&:where(.ag-header-cell-moving):before{--ag-internal-moving-color:var(--ag-header-cell-moving-background-color);--ag-internal-hover-color:var(--ag-header-cell-hover-background-color)}}:where(.ag-header-cell:not(.ag-floating-filter) *,.ag-header-group-cell *){position:relative;z-index:1}.ag-header-cell-menu-button:where(:not(.ag-header-menu-always-show)){opacity:0;transition:opacity .2s}.ag-header-cell-filter-button,:where(.ag-header-cell.ag-header-active) .ag-header-cell-menu-button{opacity:1}.ag-header-cell-label,.ag-header-group-cell-label{align-items:center;align-self:stretch;display:flex;flex:1 1 auto;overflow:hidden;padding:5px 0}:where(.ag-ltr) .ag-sort-indicator-icon{padding-left:var(--ag-spacing)}:where(.ag-rtl) .ag-sort-indicator-icon{padding-right:var(--ag-spacing)}.ag-header-cell-label{text-overflow:ellipsis}.ag-header-group-cell-label.ag-sticky-label{flex:none;max-width:100%;overflow:visible;position:sticky}:where(.ag-ltr) .ag-header-group-cell-label.ag-sticky-label{left:var(--ag-cell-horizontal-padding)}:where(.ag-rtl) .ag-header-group-cell-label.ag-sticky-label{right:var(--ag-cell-horizontal-padding)}.ag-header-cell-text,.ag-header-group-text{overflow:hidden;text-overflow:ellipsis}.ag-header-cell-text{word-break:break-word}.ag-header-cell-comp-wrapper{width:100%}:where(.ag-header-group-cell) .ag-header-cell-comp-wrapper{display:flex}:where(.ag-header-cell:not(.ag-header-cell-auto-height)) .ag-header-cell-comp-wrapper{align-items:center;display:flex;height:100%}.ag-header-cell-wrap-text .ag-header-cell-comp-wrapper{white-space:normal}.ag-header-cell-comp-wrapper-limited-height>*{overflow:hidden}:where(.ag-right-aligned-header) .ag-header-cell-label{flex-direction:row-reverse}:where(.ag-ltr) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-label-icon,.ag-header-menu-icon{margin-left:var(--ag-spacing)}}:where(.ag-rtl) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-label-icon,.ag-header-menu-icon{margin-right:var(--ag-spacing)}}:where(.ag-ltr) :where(.ag-header-cell.ag-right-aligned-header){.ag-header-label-icon,.ag-header-menu-icon{margin-right:var(--ag-spacing)}}:where(.ag-rtl) :where(.ag-header-cell.ag-right-aligned-header){.ag-header-label-icon,.ag-header-menu-icon{margin-left:var(--ag-spacing)}}.ag-header-cell:after,.ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{content:"";height:var(--ag-header-column-border-height);position:absolute;top:calc(50% - var(--ag-header-column-border-height)*.5);z-index:1}:where(.ag-ltr) .ag-header-cell:after,:where(.ag-ltr) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-right:var(--ag-header-column-border);right:0}:where(.ag-rtl) .ag-header-cell:after,:where(.ag-rtl) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-left:var(--ag-header-column-border);left:0}.ag-header-highlight-after:after,.ag-header-highlight-before:after{background-color:var(--ag-accent-color);content:"";height:100%;position:absolute;width:1px}:where(.ag-ltr) .ag-header-highlight-before:after{left:0}:where(.ag-rtl) .ag-header-highlight-before:after{right:0}:where(.ag-ltr) .ag-header-highlight-after:after{right:0;:where(.ag-pinned-left-header) &{right:1px}}:where(.ag-rtl) .ag-header-highlight-after:after{left:0;:where(.ag-pinned-left-header) &{left:1px}}.ag-header-cell-resize{align-items:center;cursor:ew-resize;display:flex;height:100%;position:absolute;top:0;width:8px;z-index:2;&:after{background-color:var(--ag-header-column-resize-handle-color);content:"";height:var(--ag-header-column-resize-handle-height);position:absolute;top:calc(50% - var(--ag-header-column-resize-handle-height)*.5);width:var(--ag-header-column-resize-handle-width);z-index:1}}:where(.ag-ltr) .ag-header-cell-resize{right:-3px;&:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}}:where(.ag-rtl) .ag-header-cell-resize{left:-3px;&:after{right:calc(50% - var(--ag-header-column-resize-handle-width))}}:where(.ag-header-cell.ag-header-span-height) .ag-header-cell-resize:after{height:calc(100% - var(--ag-spacing)*4);top:calc(var(--ag-spacing)*2)}.ag-header-group-cell-no-group:where(.ag-header-span-height){display:none}.ag-sort-indicator-container{display:flex;gap:var(--ag-spacing)}.ag-layout-print{&.ag-body{display:block;height:unset}&.ag-root-wrapper{display:inline-block}.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:none}&.ag-force-vertical-scroll{overflow-y:visible!important}}@media print{.ag-root-wrapper.ag-layout-print{display:table;.ag-body-horizontal-scroll-viewport,.ag-body-viewport,.ag-center-cols-container,.ag-center-cols-viewport,.ag-root,.ag-root-wrapper-body,.ag-virtual-list-viewport{display:block!important;height:auto!important;overflow:hidden!important}.ag-cell,.ag-row{-moz-column-break-inside:avoid;break-inside:avoid}}}ag-grid,ag-grid-angular{display:block}.ag-chart,.ag-dnd-ghost,.ag-popup,.ag-root-wrapper{cursor:default;line-height:normal;white-space:normal;-webkit-font-smoothing:antialiased;background-color:var(--ag-background-color);color:var(--ag-text-color);color-scheme:var(--ag-browser-color-scheme);font-family:var(--ag-font-family);font-size:var(--ag-font-size);--ag-indentation-level:0}.ag-root-wrapper{border:var(--ag-wrapper-border);border-radius:var(--ag-wrapper-border-radius);display:flex;flex-direction:column;overflow:hidden;position:relative;&.ag-layout-normal{height:100%}}.ag-root-wrapper-body{display:flex;flex-direction:row;&.ag-layout-normal{flex:1 1 auto;height:0;min-height:0}}.ag-root{display:flex;flex-direction:column;position:relative;&.ag-layout-auto-height,&.ag-layout-normal{flex:1 1 auto;overflow:hidden;width:0}&.ag-layout-normal{height:100%}}.ag-drag-handle{color:var(--ag-drag-handle-color);cursor:grab}.ag-list-item,.ag-virtual-list-item{height:var(--ag-list-item-height)}.ag-virtual-list-item{position:absolute;width:100%}.ag-select-list{background-color:var(--ag-picker-list-background-color);border:var(--ag-picker-list-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-dropdown-shadow);overflow:hidden auto}.ag-list-item{align-items:center;display:flex;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&.ag-active-item{background-color:var(--ag-row-hover-color)}}.ag-select-list-item{cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none;:where(span){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}:where(.ag-ltr) .ag-select-list-item{padding-left:calc(var(--ag-cell-horizontal-padding)/2)}:where(.ag-rtl) .ag-select-list-item{padding-right:calc(var(--ag-cell-horizontal-padding)/2)}.ag-list-item-hovered:after{background-color:var(--ag-accent-color);content:"";height:1px;left:0;position:absolute;right:0}.ag-item-highlight-top:after{top:0}.ag-item-highlight-bottom:after{bottom:0}:where(.ag-icon):before{align-items:center;background-color:currentcolor;color:inherit;content:"";display:flex;font-family:inherit;font-size:var(--ag-icon-size);font-style:normal;font-variant:normal;height:var(--ag-icon-size);justify-content:center;line-height:var(--ag-icon-size);-webkit-mask-size:contain;mask-size:contain;text-transform:none;width:var(--ag-icon-size)}.ag-icon{background-position:50%;background-repeat:no-repeat;background-size:contain;color:var(--ag-icon-color);display:block;height:var(--ag-icon-size);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--ag-icon-size)}.ag-column-select-column-group-readonly,.ag-column-select-column-readonly,.ag-disabled,[disabled]{.ag-icon{opacity:.5}&.ag-icon-grip{opacity:.35}}.ag-column-select-column-readonly{&.ag-icon-grip,.ag-icon-grip{opacity:.35}}.ag-chart-menu-icon,.ag-chart-settings-next,.ag-chart-settings-prev,.ag-column-group-icons,.ag-column-select-header-icon,.ag-filter-toolpanel-expand,.ag-floating-filter-button-button,.ag-group-title-bar-icon,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,.ag-panel-title-bar-button-icon,.ag-set-filter-group-icons,:where(.ag-group-contracted) .ag-icon,:where(.ag-group-expanded) .ag-icon{background-color:var(--ag-icon-button-background-color);border-radius:var(--ag-icon-button-border-radius);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-background-color);color:var(--ag-icon-button-color);&:hover{background-color:var(--ag-icon-button-hover-background-color);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-hover-background-color);color:var(--ag-icon-button-hover-color)}}.ag-filter-active{background-image:linear-gradient(var(--ag-icon-button-active-background-color),var(--ag-icon-button-active-background-color));border-radius:1px;outline:solid var(--ag-icon-button-background-spread) var(--ag-icon-button-active-background-color);position:relative;&:after{background-color:var(--ag-accent-color);border-radius:50%;content:"";height:6px;position:absolute;top:-1px;width:6px}:where(.ag-icon-filter){clip-path:path("M8,0C8,4.415 11.585,8 16,8L16,16L0,16L0,0L8,0Z");color:var(--ag-icon-button-active-color)}}:where(.ag-ltr) .ag-filter-active{&:after{right:-1px}}:where(.ag-rtl) .ag-filter-active{&:after{left:-1px}}.ag-menu{background-color:var(--ag-menu-background-color);border:var(--ag-menu-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-menu-shadow);color:var(--ag-menu-text-color);max-height:100%;overflow-y:auto}.ag-menu,.ag-resizer{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ag-resizer{pointer-events:none;z-index:1}:where(.ag-resizer){&.ag-resizer-topLeft{cursor:nwse-resize;height:5px;left:0;top:0;width:5px}&.ag-resizer-top{cursor:ns-resize;height:5px;left:5px;right:5px;top:0}&.ag-resizer-topRight{cursor:nesw-resize;height:5px;right:0;top:0;width:5px}&.ag-resizer-right{bottom:5px;cursor:ew-resize;right:0;top:5px;width:5px}&.ag-resizer-bottomRight{bottom:0;cursor:nwse-resize;height:5px;right:0;width:5px}&.ag-resizer-bottom{bottom:0;cursor:ns-resize;height:5px;left:5px;right:5px}&.ag-resizer-bottomLeft{bottom:0;cursor:nesw-resize;height:5px;left:0;width:5px}&.ag-resizer-left{bottom:5px;cursor:ew-resize;left:0;top:5px;width:5px}}', e, "core", t, 0);
  Array.from(new Set(i_)).sort((e, t) => e.moduleName.localeCompare(t.moduleName)).forEach(i => i.css?.forEach(s => nv(s, e, `module-${i.moduleName}`, t, 0)));
};
var ny = new Set();
var nS = e => {
  ny.add(e);
};
var nR = e => {
  if (ny.$$delete(e), 0 === ny.size) for (let e of (nw = new WeakMap(), document.head.querySelectorAll("style[data-ag-global-css]"))) e.remove();
};
var nD = e => new nE(e);
var nx = "$default";
var nP = 0;
var nE = class {
  constructor({
    feature: e,
    params: t,
    modeParams: i = {},
    css: s,
    cssImports: r
  }) {
    this.feature = e;
    this.css = s;
    this.cssImports = r;
    this.modeParams = {
      [nx]: {
        ...(i[nx] ?? {}),
        ...(t ?? {})
      },
      ...i
    };
  }
  use(e, t) {
    let i = this._inject;
    if (null == i) {
      let {
        css
      } = this;
      if (css) {
        let t = `ag-theme-${this.feature ?? "part"}-${++nP}`;
        for (let i of ("function" == typeof css && (e = css()), e = `:where(.${t}) {
${css}
}
`, this.cssImports ?? [])) e = `@import url(${JSON.stringify(i)});
${css}`;
        i = {
          css,
          class: t
        };
      } else i = !1;
      this._inject = i;
    }
    i && e && nv(i.css, e, i.$$class, t, 1);
    return !!i && i.$$class;
  }
};
var nF = e => e.replace(/[A-Z]/g, e => `-${e}`).toLowerCase();
var nA = e => `--ag-${nF(e)}`;
var nk = e => `var(${nA(e)})`;
var nM = (e, t, i) => Math.max(t, Math.min(i, e));
var nT = e => ({
  ref: "accentColor",
  mix: e
});
var nI = e => ({
  ref: "foregroundColor",
  mix: e
});
var nL = e => ({
  ref: "foregroundColor",
  mix: e,
  onto: "backgroundColor"
});
var nO = {
  ref: "backgroundColor"
};
var nG = {
  ref: "foregroundColor"
};
var nH = {
  ref: "accentColor"
};
var nN = {
  backgroundColor: "#fff",
  foregroundColor: "#181d1f",
  borderColor: nI(.15),
  chromeBackgroundColor: nL(.02),
  browserColorScheme: "light"
};
var nB = {
  ...nN,
  textColor: nG,
  accentColor: "#2196f3",
  invalidColor: "#e02525",
  wrapperBorder: !0,
  rowBorder: !0,
  headerRowBorder: !0,
  footerRowBorder: {
    ref: "rowBorder"
  },
  columnBorder: {
    style: "solid",
    width: 1,
    color: "transparent"
  },
  headerColumnBorder: !1,
  headerColumnBorderHeight: "100%",
  pinnedColumnBorder: !0,
  pinnedRowBorder: !0,
  sidePanelBorder: !0,
  sideBarPanelWidth: 250,
  sideBarBackgroundColor: {
    ref: "chromeBackgroundColor"
  },
  sideButtonBarBackgroundColor: {
    ref: "sideBarBackgroundColor"
  },
  sideButtonBarTopPadding: 0,
  sideButtonSelectedUnderlineWidth: 2,
  sideButtonSelectedUnderlineColor: "transparent",
  sideButtonSelectedUnderlineTransitionDuration: 0,
  sideButtonBackgroundColor: "transparent",
  sideButtonTextColor: {
    ref: "textColor"
  },
  sideButtonHoverBackgroundColor: {
    ref: "sideButtonBackgroundColor"
  },
  sideButtonHoverTextColor: {
    ref: "sideButtonTextColor"
  },
  sideButtonSelectedBackgroundColor: nO,
  sideButtonSelectedTextColor: {
    ref: "sideButtonTextColor"
  },
  sideButtonBorder: "solid 1px transparent",
  sideButtonSelectedBorder: !0,
  sideButtonLeftPadding: {
    ref: "spacing"
  },
  sideButtonRightPadding: {
    ref: "spacing"
  },
  sideButtonVerticalPadding: {
    calc: "spacing * 3"
  },
  fontFamily: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "sans-serif"],
  headerBackgroundColor: {
    ref: "chromeBackgroundColor"
  },
  headerFontFamily: {
    ref: "fontFamily"
  },
  cellFontFamily: {
    ref: "fontFamily"
  },
  headerFontWeight: 500,
  headerFontSize: {
    ref: "fontSize"
  },
  dataFontSize: {
    ref: "fontSize"
  },
  headerTextColor: {
    ref: "textColor"
  },
  headerCellHoverBackgroundColor: "transparent",
  headerCellMovingBackgroundColor: {
    ref: "headerCellHoverBackgroundColor"
  },
  headerCellBackgroundTransitionDuration: "0.2s",
  cellTextColor: {
    ref: "textColor"
  },
  subtleTextColor: {
    ref: "textColor",
    mix: .5
  },
  rangeSelectionBorderStyle: "solid",
  rangeSelectionBorderColor: nH,
  rangeSelectionBackgroundColor: nT(.2),
  rangeSelectionChartBackgroundColor: "#0058FF1A",
  rangeSelectionChartCategoryBackgroundColor: "#00FF841A",
  rangeSelectionHighlightColor: nT(.5),
  rangeHeaderHighlightColor: {
    ref: "foregroundColor",
    mix: .08,
    onto: "headerBackgroundColor"
  },
  rowNumbersSelectedColor: nT(.5),
  rowHoverColor: nT(.08),
  columnHoverColor: nT(.05),
  selectedRowBackgroundColor: nT(.12),
  modalOverlayBackgroundColor: {
    ref: "backgroundColor",
    mix: .66
  },
  oddRowBackgroundColor: nO,
  borderRadius: 4,
  wrapperBorderRadius: 8,
  cellHorizontalPadding: {
    calc: "spacing * 2 * cellHorizontalPaddingScale"
  },
  cellWidgetSpacing: {
    calc: "spacing * 1.5"
  },
  cellHorizontalPaddingScale: 1,
  rowGroupIndentSize: {
    calc: "cellWidgetSpacing + iconSize"
  },
  valueChangeDeltaUpColor: "#43a047",
  valueChangeDeltaDownColor: "#e53935",
  valueChangeValueHighlightBackgroundColor: "#16a08580",
  spacing: 8,
  fontSize: 14,
  rowHeight: {
    calc: "max(iconSize, dataFontSize) + spacing * 3.25 * rowVerticalPaddingScale"
  },
  rowVerticalPaddingScale: 1,
  headerHeight: {
    calc: "max(iconSize, dataFontSize) + spacing * 4 * headerVerticalPaddingScale"
  },
  headerVerticalPaddingScale: 1,
  popupShadow: "0 0 16px #00000026",
  cardShadow: "0 1px 4px 1px #00000018",
  dropdownShadow: {
    ref: "cardShadow"
  },
  dragAndDropImageBackgroundColor: nO,
  dragAndDropImageBorder: !0,
  dragAndDropImageShadow: {
    ref: "popupShadow"
  },
  dragHandleColor: nI(.7),
  focusShadow: {
    spread: 3,
    color: nT(.5)
  },
  headerColumnResizeHandleHeight: "30%",
  headerColumnResizeHandleWidth: 2,
  headerColumnResizeHandleColor: {
    ref: "borderColor"
  },
  widgetContainerHorizontalPadding: {
    calc: "spacing * 1.5"
  },
  widgetContainerVerticalPadding: {
    calc: "spacing * 1.5"
  },
  widgetHorizontalSpacing: {
    calc: "spacing * 1.5"
  },
  widgetVerticalSpacing: {
    ref: "spacing"
  },
  listItemHeight: {
    calc: "max(iconSize, dataFontSize) + widgetVerticalSpacing"
  },
  iconSize: 16,
  iconColor: "inherit",
  iconButtonColor: {
    ref: "iconColor"
  },
  iconButtonBackgroundColor: "transparent",
  iconButtonBackgroundSpread: 4,
  iconButtonBorderRadius: 1,
  iconButtonHoverColor: {
    ref: "iconButtonColor"
  },
  iconButtonHoverBackgroundColor: nI(.1),
  iconButtonActiveColor: nH,
  iconButtonActiveBackgroundColor: nT(.28),
  iconButtonActiveIndicatorColor: nH,
  toggleButtonWidth: 28,
  toggleButtonHeight: 18,
  toggleButtonOnBackgroundColor: nH,
  toggleButtonOffBackgroundColor: nL(.3),
  toggleButtonSwitchBackgroundColor: nO,
  toggleButtonSwitchInset: 2,
  menuBorder: {
    color: nI(.2)
  },
  menuBackgroundColor: nL(.03),
  menuTextColor: nL(.95),
  menuShadow: {
    ref: "popupShadow"
  },
  menuSeparatorColor: {
    ref: "borderColor"
  },
  setFilterIndentSize: {
    ref: "iconSize"
  },
  chartMenuPanelWidth: 260,
  chartMenuLabelColor: nI(.8),
  dialogShadow: {
    ref: "popupShadow"
  },
  cellEditingBorder: {
    color: nH
  },
  cellEditingShadow: {
    ref: "cardShadow"
  },
  dialogBorder: {
    color: nI(.2)
  },
  panelBackgroundColor: nO,
  panelTitleBarBackgroundColor: {
    ref: "headerBackgroundColor"
  },
  panelTitleBarIconColor: {
    ref: "headerTextColor"
  },
  panelTitleBarTextColor: {
    ref: "headerTextColor"
  },
  panelTitleBarFontWeight: {
    ref: "headerFontWeight"
  },
  panelTitleBarBorder: !0,
  columnSelectIndentSize: {
    ref: "iconSize"
  },
  toolPanelSeparatorBorder: !0,
  tooltipBackgroundColor: {
    ref: "chromeBackgroundColor"
  },
  tooltipTextColor: {
    ref: "textColor"
  },
  tooltipBorder: !0,
  columnDropCellBackgroundColor: nI(.07),
  columnDropCellTextColor: {
    ref: "textColor"
  },
  columnDropCellDragHandleColor: {
    ref: "textColor"
  },
  columnDropCellBorder: {
    color: nI(.13)
  },
  selectCellBackgroundColor: nI(.07),
  selectCellBorder: {
    color: nI(.13)
  },
  advancedFilterBuilderButtonBarBorder: !0,
  advancedFilterBuilderIndentSize: {
    calc: "spacing * 2 + iconSize"
  },
  advancedFilterBuilderJoinPillColor: "#f08e8d",
  advancedFilterBuilderColumnPillColor: "#a6e194",
  advancedFilterBuilderOptionPillColor: "#f3c08b",
  advancedFilterBuilderValuePillColor: "#85c0e4",
  filterToolPanelGroupIndent: {
    ref: "spacing"
  },
  rowLoadingSkeletonEffectColor: nI(.15),
  statusBarLabelColor: nG,
  statusBarLabelFontWeight: 500,
  statusBarValueColor: nG,
  statusBarValueFontWeight: 500
};
var nV = nD({
  feature: "buttonStyle",
  params: {
    buttonTextColor: "inherit",
    buttonFontWeight: "normal",
    buttonBackgroundColor: "transparent",
    buttonBorder: !1,
    buttonBorderRadius: {
      ref: "borderRadius"
    },
    buttonHorizontalPadding: {
      calc: "spacing * 2"
    },
    buttonVerticalPadding: {
      ref: "spacing"
    },
    buttonHoverTextColor: {
      ref: "buttonTextColor"
    },
    buttonHoverBackgroundColor: {
      ref: "buttonBackgroundColor"
    },
    buttonHoverBorder: {
      ref: "buttonBorder"
    },
    buttonActiveTextColor: {
      ref: "buttonHoverTextColor"
    },
    buttonActiveBackgroundColor: {
      ref: "buttonHoverBackgroundColor"
    },
    buttonActiveBorder: {
      ref: "buttonHoverBorder"
    },
    buttonDisabledTextColor: {
      ref: "inputDisabledTextColor"
    },
    buttonDisabledBackgroundColor: {
      ref: "inputDisabledBackgroundColor"
    },
    buttonDisabledBorder: {
      ref: "inputDisabledBorder"
    },
    buttonBackgroundColor: nO,
    buttonBorder: !0,
    buttonHoverBackgroundColor: {
      ref: "rowHoverColor"
    },
    buttonActiveBorder: {
      color: nH
    }
  },
  css: ":where(.ag-button){background:none;border:none;color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0;text-indent:inherit;text-shadow:inherit;text-transform:inherit;word-spacing:inherit;&:disabled{cursor:default}&:focus-visible{box-shadow:var(--ag-focus-shadow);outline:none}}.ag-standard-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--ag-button-background-color);border:var(--ag-button-border);border-radius:var(--ag-button-border-radius);color:var(--ag-button-text-color);cursor:pointer;font-weight:var(--ag-button-font-weight);padding:var(--ag-button-vertical-padding) var(--ag-button-horizontal-padding);&:hover{background-color:var(--ag-button-hover-background-color);border:var(--ag-button-hover-border);color:var(--ag-button-hover-text-color)}&:active{background-color:var(--ag-button-active-background-color);border:var(--ag-button-active-border);color:var(--ag-button-active-text-color)}&:disabled{background-color:var(--ag-button-disabled-background-color);border:var(--ag-button-disabled-border);color:var(--ag-button-disabled-text-color)}}"
});
var nW = nD({
  feature: "columnDropStyle",
  css: ".ag-column-drop-vertical-empty-message{align-items:center;border:1px dashed;border-color:var(--ag-border-color);display:flex;inset:0;justify-content:center;margin:calc(var(--ag-spacing)*1.5) calc(var(--ag-spacing)*2);overflow:hidden;padding:calc(var(--ag-spacing)*2);position:absolute}"
});
var nz = ["colorScheme", "color", "length", "scale", "borderStyle", "border", "shadow", "image", "fontFamily", "fontWeight", "duration"];
var nU = (e => {
  let t = new Map();
  return i => (t.has(i) || t.set(i, e(i)), t.get(i));
})(e => (e = e.toLowerCase(), nz.find(t => e.endsWith(t.toLowerCase())) ?? "length"));
var n$ = e => "object" == typeof e && e?.ref ? nk(e.ref) : "string" == typeof e ? e : "number" == typeof e && String(e);
var nK = e => {
  if ("string" == typeof e) return e;
  if (e && "ref" in e) {
    let t = nk(e.ref);
    if (null == e.mix) return t;
    let i = e.onto ? nk(e.onto) : "transparent";
    return `color-mix(in srgb, ${i}, ${t} ${nM(100 * e.mix, 0, 100)}%)`;
  }
  return !1;
};
var n_ = e => {
  if ("string" == typeof e) return e;
  if ("number" == typeof e) return `${e}px`;
  if (e && "calc" in e) {
    let t = e.calc.replace(/ ?[*/+] ?/g, " $& ");
    return `calc(${t.replace(/-?\b[a-z][a-z0-9]*\b(?![-(])/gi, e => "-" === e[0] ? e : ` ${nk(e)} `)})`;
  }
  return !!e && "ref" in e && nk(e.ref);
};
var nj = e => "string" == typeof e ? e : e && "googleFont" in e ? nj(e.googleFont) : e && "ref" in e ? nk(e.ref) : !!Array.isArray(e) && e.map(e => ("object" == typeof e && "googleFont" in e && (e = e.googleFont), nq(e))).join(", ");
var nq = e => /^[\w-]+$|\w\(/.test(e) ? e : JSON.stringify(e);
var nY = e => "string" == typeof e ? e : e && "url" in e ? `url(${JSON.stringify(e.url)})` : e && "svg" in e ? nY({
  url: `data:image/svg+xml,${encodeURIComponent(e.svg)}`
}) : !!e && "ref" in e && nk(e.ref);
var nJ = {
  color: nK,
  colorScheme: n$,
  length: n_,
  scale: n$,
  border: (e, t) => "string" == typeof e ? e : !0 === e ? "solid 1px var(--ag-border-color)" : !1 === e ? "columnBorder" === t ? "solid 1px transparent" : "none" : e && "ref" in e ? nk(e.ref) : n$(e.style ?? "solid") + " " + n_(e.width ?? 1) + " " + nK(e.color ?? {
    ref: "borderColor"
  }),
  borderStyle: n$,
  shadow: e => "string" == typeof e ? e : !1 === e ? "none" : e && "ref" in e ? nk(e.ref) : [n_(e.offsetX ?? 0), n_(e.offsetY ?? 0), n_(e.radius ?? 0), n_(e.spread ?? 0), nK(e.color ?? {
    ref: "foregroundColor"
  })].join(" "),
  image: nY,
  fontFamily: nj,
  fontWeight: n$,
  duration: (e, t) => "string" == typeof e ? e : "number" == typeof e ? (e >= 10 && ez(104, {
    value: e,
    param: t
  }), `${e}s`) : !!e && "ref" in e && nk(e.ref)
};
var nZ = (e, t) => nJ[nU(e)](t, e);
var nX = !1;
var nQ = class e {
  constructor(e = []) {
    this.parts = e;
  }
  withPart(t) {
    return ("function" == typeof t && (t = t()), t instanceof nE) ? new e([...this.parts, t]) : (eH(eE, 259, {
      part: t
    }, "Invalid part"), this);
  }
  withoutPart(e) {
    return this.withPart(nD({
      feature: e
    }));
  }
  withParams(e, t = nx) {
    return this.withPart(nD({
      modeParams: {
        [t]: e
      }
    }));
  }
  _startUse({
    styleContainer: e,
    cssLayer: t,
    loadThemeGoogleFonts: i
  }) {
    if (nC || nX) return;
    n5();
    nb(e, t);
    let s = n1(this);
    if (s.length > 0) for (let e of s) i && n6(e);
    for (let i of this.parts) i.use(e, t);
  }
  _getCssClass() {
    return nX ? "ag-theme-quartz" : this._cssClassCache ?? (this._cssClassCache = n0(this.parts).map(e => e.use(void 0, void 0)).filter(Boolean).join(" "));
  }
  _getModeParams() {
    let e = this._paramsCache;
    if (!e) {
      let t = {
        [nx]: {
          ...nB
        }
      };
      for (let e of n0(this.parts)) for (let i of Object.keys(e.modeParams)) {
        let s = e.modeParams[i];
        if (s) {
          let e = t[i] ?? (t[i] = {});
          let r = new Set();
          for (let t of Object.keys(s)) {
            let i = s[t];
            void 0 !== i && (e[t] = i, r.add(t));
          }
          if (i === nx) for (let e of Object.keys(t)) {
            let i = t[e];
            if (e !== nx) for (let e of r) delete i[e];
          }
        }
      }
      this._paramsCache = e = t;
    }
    return e;
  }
  _getPerGridCss(e) {
    let t = "##SELECTOR##";
    let i = this._paramsCssCache;
    if (!i) {
      let e = "";
      let s = "";
      let r = this._getModeParams();
      for (let t of Object.keys(r)) {
        let i = r[t];
        if (t !== nx) {
          let i = "object" == typeof CSS ? CSS.escape(t) : t;
          let r = `:where([data-ag-theme-mode="${i}"]) & {
`;
          e += r;
          s += r;
        }
        for (let t of Object.keys(i).sort()) {
          let r = i[t];
          let o = nZ(t, r);
          if (!1 === o) ez(107, {
            key: t,
            value: r
          });else {
            let i = nA(t);
            let r = i.replace("--ag-", "--ag-inherited-");
            e += `	${i}: var(${r}, ${o});
`;
            s += `	${r}: var(${i});
`;
          }
        }
        t !== nx && (e += "}\n", s += "}\n");
      }
      let o = `${t} {
${e}}
`;
      o += `:has(> ${t}):not(${t}) {
${s}}
`;
      this._paramsCssCache = i = o;
    }
    return i.replaceAll(t, `:where(.${e})`);
  }
};
var n0 = e => {
  let t = new Map();
  for (let i of e) t.set(i.feature, i);
  let i = [];
  for (let s of e) s.feature && t.get(s.feature) !== s || i.push(s);
  return i;
};
var n1 = e => {
  let t = new Set();
  let i = e => {
    if (Array.isArray(e)) e.forEach(i);else {
      let i = e?.googleFont;
      "string" == typeof i && t.add(i);
    }
  };
  Object.values(e._getModeParams()).flatMap(e => Object.values(e)).forEach(i);
  return Array.from(t).sort();
};
var n2 = !1;
var n5 = () => {
  if (!n2) for (let e of (n2 = !0, Array.from(document.head.querySelectorAll('style[data-ag-scope="legacy"]')))) e.remove();
};
var n3 = new Set();
var n6 = async e => {
  n3.add(e);
  nv(`@import url('https://${n4}/css2?family=${encodeURIComponent(e)}:wght@100;200;300;400;500;600;700;800;900&display=swap');
`, document.head, `googleFont:${e}`, void 0, 0);
};
var n4 = "fonts.googleapis.com";
var n8 = nD({
  feature: "checkboxStyle",
  params: {
    checkboxBorderWidth: 1,
    checkboxBorderRadius: {
      ref: "borderRadius"
    },
    checkboxUncheckedBackgroundColor: nO,
    checkboxUncheckedBorderColor: nL(.3),
    checkboxCheckedBackgroundColor: nH,
    checkboxCheckedBorderColor: {
      ref: "checkboxCheckedBackgroundColor"
    },
    checkboxCheckedShapeImage: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M1 3.5 3.5 6l5-5"/></svg>'
    },
    checkboxCheckedShapeColor: nO,
    checkboxIndeterminateBackgroundColor: nL(.3),
    checkboxIndeterminateBorderColor: {
      ref: "checkboxIndeterminateBackgroundColor"
    },
    checkboxIndeterminateShapeImage: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none"><rect width="10" height="2" fill="#000" rx="1"/></svg>'
    },
    checkboxIndeterminateShapeColor: nO,
    radioCheckedShapeImage: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><circle cx="3" cy="3" r="3" fill="#000"/></svg>'
    }
  },
  css: '.ag-checkbox-input-wrapper,.ag-radio-button-input-wrapper{background-color:var(--ag-checkbox-unchecked-background-color);border:solid var(--ag-checkbox-border-width) var(--ag-checkbox-unchecked-border-color);flex:none;height:var(--ag-icon-size);position:relative;width:var(--ag-icon-size);:where(input){-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:block;height:var(--ag-icon-size);margin:0;opacity:0;width:var(--ag-icon-size)}&:after{content:"";display:block;inset:0;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;pointer-events:none;position:absolute}&:where(.ag-checked){background-color:var(--ag-checkbox-checked-background-color);border-color:var(--ag-checkbox-checked-border-color);&:after{background-color:var(--ag-checkbox-checked-shape-color)}}&:where(:focus-within,:active){box-shadow:var(--ag-focus-shadow)}&:where(.ag-disabled){filter:grayscale();opacity:.5}}.ag-checkbox-input-wrapper{border-radius:var(--ag-checkbox-border-radius);&:where(.ag-checked):after{-webkit-mask-image:var(--ag-checkbox-checked-shape-image);mask-image:var(--ag-checkbox-checked-shape-image)}&:where(.ag-indeterminate){background-color:var(--ag-checkbox-indeterminate-background-color);border-color:var(--ag-checkbox-indeterminate-border-color);&:after{background-color:var(--ag-checkbox-indeterminate-shape-color);-webkit-mask-image:var(--ag-checkbox-indeterminate-shape-image);mask-image:var(--ag-checkbox-indeterminate-shape-image)}}}.ag-radio-button-input-wrapper{border-radius:100%;&:where(.ag-checked):after{-webkit-mask-image:var(--ag-radio-checked-shape-image);mask-image:var(--ag-radio-checked-shape-image)}}'
});
var n7 = () => ({
  ...nN,
  backgroundColor: "hsl(217, 0%, 17%)",
  foregroundColor: "#FFF",
  chromeBackgroundColor: nL(.05),
  rowHoverColor: nT(.15),
  selectedRowBackgroundColor: nT(.2),
  menuBackgroundColor: nL(.1),
  browserColorScheme: "dark",
  popupShadow: "0 0px 20px #000A",
  cardShadow: "0 1px 4px 1px #000A",
  advancedFilterBuilderJoinPillColor: "#7a3a37",
  advancedFilterBuilderColumnPillColor: "#355f2d",
  advancedFilterBuilderOptionPillColor: "#5a3168",
  advancedFilterBuilderValuePillColor: "#374c86",
  checkboxUncheckedBorderColor: nL(.4),
  toggleButtonOffBackgroundColor: nL(.4)
});
var n9 = nD({
  feature: "colorScheme",
  params: nN,
  modeParams: {
    light: nN,
    dark: n7(),
    "dark-blue": {
      ...n7(),
      backgroundColor: "#1f2836"
    }
  }
});
var le = {
  aggregation: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
  arrows: '<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/>',
  asc: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  cancel: '<path d="m18 6-12 12"/><path d="m6 6 12 12"/>',
  chart: '<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>',
  "color-picker": '<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/>',
  columns: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>',
  contracted: '<path d="m9 18 6-6-6-6"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  cross: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  csv: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/>',
  cut: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  desc: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  down: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  excel: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/>',
  expanded: '<path d="m15 18-6-6 6-6"/>',
  "eye-slash": '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  filter: '<path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/>',
  first: '<path d="m17 18-6-6 6-6"/><path d="M7 6v12"/>',
  group: '<path d="M16 12H3"/><path d="M16 18H3"/><path d="M10 6H3"/><path d="M21 18V8a2 2 0 0 0-2-2h-5"/><path d="m16 8-2-2 2-2"/>',
  last: '<path d="m7 18 6-6-6-6"/><path d="M17 6v12"/>',
  left: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  linked: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>',
  loading: '<line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/>',
  maximize: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  "menu-alt": '<circle cx="12" cy="5" r="0.75" fill="#D9D9D9"/><circle cx="12" cy="12" r="0.75" fill="#D9D9D9"/><circle cx="12" cy="19" r="0.75" fill="#D9D9D9"/>',
  minimize: '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/>',
  minus: '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>',
  next: '<path d="m9 18 6-6-6-6"/>',
  none: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
  "not-allowed": '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  paste: '<path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"/><path d="m17 10 4 4-4 4"/>',
  pin: '<line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>',
  pivot: '<path d="M15 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/>',
  plus: '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>',
  previous: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  save: '<path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/>',
  "small-left": '<path d="m15 18-6-6 6-6"/>',
  "small-right": '<path d="m9 18 6-6-6-6"/>',
  tick: '<path d="M20 6 9 17l-5-5"/>',
  "tree-closed": '<path d="m9 18 6-6-6-6"/>',
  "tree-indeterminate": '<path d="M5 12h14"/>',
  "tree-open": '<path d="m6 9 6 6 6-6"/>',
  unlinked: '<path d="M9 17H7A5 5 0 0 1 7 7"/><path d="M15 7h2a5 5 0 0 1 4 8"/><line x1="8" x2="12" y1="12" y2="12"/><line x1="2" x2="22" y1="2" y2="22"/>',
  up: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  grip: '<circle cx="5" cy="8" r="0.5"/><circle cx="12" cy="8" r="0.5"/><circle cx="19" cy="8" r="0.5"/><circle cx="5" cy="16" r="0.5"/><circle cx="12" cy="16" r="0.5"/><circle cx="19" cy="16" r="0.5"/><g stroke="none" fill="currentColor"><circle cx="5" cy="8" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="19" cy="8" r="1"/><circle cx="5" cy="16" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="19" cy="16" r="1"/></g>',
  settings: '<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>'
};
var lt = {
  "small-down": '<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="black" stroke="none" viewBox="0 0 32 32"><path d="M7.334 10.667 16 21.334l8.667-10.667H7.334Z"/></svg>',
  "small-up": '<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="black" stroke="none" viewBox="0 0 32 32"><path d="M7.334 21.333 16 10.666l8.667 10.667H7.334Z"/></svg>'
};
var li = (e = {}) => {
  let t = "";
  for (let i of [...Object.keys(le), ...Object.keys(lt)]) {
    let s = ls(i, e.strokeWidth);
    t += `.ag-icon-${i}::before { mask-image: url('data:image/svg+xml,${encodeURIComponent(s)}'); }
`;
  }
  return t;
};
var ls = (e, t = 1.5) => {
  let i = lt[e];
  if (i) return i;
  let s = le[e];
  if (!s) throw Error(`Missing icon data for ${e}`);
  return `<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-width="${t}" viewBox="0 0 24 24"><style>* { vector-effect: non-scaling-stroke; }</style>` + s + "</svg>";
};
var lr = ((e = {}) => nD({
  feature: "iconSet",
  css: () => li(e)
}))();
var lo = nD({
  feature: "inputStyle",
  params: {
    inputBackgroundColor: "transparent",
    inputBorder: !1,
    inputBorderRadius: 0,
    inputTextColor: {
      ref: "textColor"
    },
    inputPlaceholderTextColor: {
      ref: "inputTextColor",
      mix: .5
    },
    inputPaddingStart: 0,
    inputHeight: {
      calc: "max(iconSize, fontSize) + spacing * 2"
    },
    inputFocusBackgroundColor: {
      ref: "inputBackgroundColor"
    },
    inputFocusBorder: {
      ref: "inputBorder"
    },
    inputFocusShadow: "none",
    inputFocusTextColor: {
      ref: "inputTextColor"
    },
    inputDisabledBackgroundColor: {
      ref: "inputBackgroundColor"
    },
    inputDisabledBorder: {
      ref: "inputBorder"
    },
    inputDisabledTextColor: {
      ref: "inputTextColor"
    },
    inputInvalidBackgroundColor: {
      ref: "inputBackgroundColor"
    },
    inputInvalidBorder: {
      ref: "inputBorder"
    },
    inputInvalidTextColor: {
      ref: "inputTextColor"
    },
    inputIconColor: {
      ref: "inputTextColor"
    },
    pickerButtonBorder: !1,
    pickerButtonFocusBorder: {
      ref: "inputFocusBorder"
    },
    pickerButtonBackgroundColor: {
      ref: "backgroundColor"
    },
    pickerButtonFocusBackgroundColor: {
      ref: "backgroundColor"
    },
    pickerListBorder: !1,
    pickerListBackgroundColor: {
      ref: "backgroundColor"
    },
    inputBackgroundColor: nO,
    inputBorder: !0,
    inputBorderRadius: {
      ref: "borderRadius"
    },
    inputPaddingStart: {
      ref: "spacing"
    },
    inputFocusBorder: {
      color: nH
    },
    inputFocusShadow: {
      ref: "focusShadow"
    },
    inputDisabledBackgroundColor: nL(.06),
    inputDisabledTextColor: {
      ref: "textColor",
      mix: .5
    },
    inputInvalidBorder: {
      color: {
        ref: "invalidColor"
      }
    },
    pickerButtonBorder: !0,
    pickerListBorder: !0
  },
  css: () => ':where(.ag-input-field-input[type=number]:not(.ag-number-field-input-stepper)){-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}}:where(input.ag-input-field-input:not([type]),input.ag-input-field-input[type=text],input.ag-input-field-input[type=number],input.ag-input-field-input[type=tel],input.ag-input-field-input[type=date],input.ag-input-field-input[type=datetime-local],textarea.ag-input-field-input){background-color:var(--ag-input-background-color);border:var(--ag-input-border);border-radius:var(--ag-input-border-radius);color:var(--ag-input-text-color);font-family:inherit;font-size:inherit;line-height:inherit;margin:0;min-height:var(--ag-input-height);padding:0;&:where(:disabled){background-color:var(--ag-input-disabled-background-color);border:var(--ag-input-disabled-border);color:var(--ag-input-disabled-text-color)}&:where(:focus){background-color:var(--ag-input-focus-background-color);border:var(--ag-input-focus-border);box-shadow:var(--ag-input-focus-shadow);color:var(--ag-input-focus-text-color);outline:none}&:where(:invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}&:where(.invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}&::-moz-placeholder{color:var(--ag-input-placeholder-text-color)}&::placeholder{color:var(--ag-input-placeholder-text-color)}}:where(.ag-ltr) :where(input.ag-input-field-input:not([type]),input.ag-input-field-input[type=text],input.ag-input-field-input[type=number],input.ag-input-field-input[type=tel],input.ag-input-field-input[type=date],input.ag-input-field-input[type=datetime-local],textarea.ag-input-field-input){padding-left:var(--ag-input-padding-start)}:where(.ag-rtl) :where(input.ag-input-field-input:not([type]),input.ag-input-field-input[type=text],input.ag-input-field-input[type=number],input.ag-input-field-input[type=tel],input.ag-input-field-input[type=date],input.ag-input-field-input[type=datetime-local],textarea.ag-input-field-input){padding-right:var(--ag-input-padding-start)}:where(.ag-column-select-header-filter-wrapper,.ag-filter-toolpanel-search,.ag-mini-filter,.ag-filter-filter){.ag-input-wrapper:before{background-color:currentcolor;color:var(--ag-input-icon-color);content:"";display:block;height:12px;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==");mask-image:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;opacity:.5;position:absolute;width:12px}}:where(.ag-ltr) :where(.ag-column-select-header-filter-wrapper,.ag-filter-toolpanel-search,.ag-mini-filter,.ag-filter-filter){.ag-input-wrapper:before{margin-left:var(--ag-spacing)}.ag-number-field-input,.ag-text-field-input{padding-left:calc(var(--ag-spacing)*1.5 + 12px)}}:where(.ag-rtl) :where(.ag-column-select-header-filter-wrapper,.ag-filter-toolpanel-search,.ag-mini-filter,.ag-filter-filter){.ag-input-wrapper:before{margin-right:var(--ag-spacing)}.ag-number-field-input,.ag-text-field-input{padding-right:calc(var(--ag-spacing)*1.5 + 12px)}}:where(input.ag-input-field-input:not([type]),input.ag-input-field-input[type=text],input.ag-input-field-input[type=number],input.ag-input-field-input[type=tel],input.ag-input-field-input[type=date],input.ag-input-field-input[type=datetime-local],textarea.ag-input-field-input){&:focus{box-shadow:var(--ag-focus-shadow)}}'
});
var ln = nD({
  feature: "tabStyle",
  params: {
    tabBarBackgroundColor: "transparent",
    tabBarHorizontalPadding: 0,
    tabBarTopPadding: 0,
    tabBackgroundColor: "transparent",
    tabTextColor: {
      ref: "textColor"
    },
    tabHorizontalPadding: {
      ref: "spacing"
    },
    tabTopPadding: {
      ref: "spacing"
    },
    tabBottomPadding: {
      ref: "spacing"
    },
    tabSpacing: "0",
    tabHoverBackgroundColor: {
      ref: "tabBackgroundColor"
    },
    tabHoverTextColor: {
      ref: "tabTextColor"
    },
    tabSelectedBackgroundColor: {
      ref: "tabBackgroundColor"
    },
    tabSelectedTextColor: {
      ref: "tabTextColor"
    },
    tabSelectedBorderWidth: 1,
    tabSelectedBorderColor: "transparent",
    tabSelectedUnderlineColor: "transparent",
    tabSelectedUnderlineWidth: 0,
    tabSelectedUnderlineTransitionDuration: 0,
    tabBarBorder: !1,
    tabBarBorder: !0,
    tabBarBackgroundColor: nI(.05),
    tabTextColor: {
      ref: "textColor",
      mix: .7
    },
    tabSelectedTextColor: {
      ref: "textColor"
    },
    tabHoverTextColor: {
      ref: "textColor"
    },
    tabSelectedBorderColor: {
      ref: "borderColor"
    },
    tabSelectedBackgroundColor: nO
  },
  css: '.ag-tabs-header{background-color:var(--ag-tab-bar-background-color);border-bottom:var(--ag-tab-bar-border);display:flex;flex:1;gap:var(--ag-tab-spacing);padding:var(--ag-tab-bar-top-padding) var(--ag-tab-bar-horizontal-padding) 0}.ag-tabs-header-wrapper{display:flex}.ag-tabs-close-button-wrapper{align-items:center;border:0;display:flex;padding:var(--ag-spacing)}:where(.ag-ltr) .ag-tabs-close-button-wrapper{border-right:1px solid var(--ag-border-color)}:where(.ag-rtl) .ag-tabs-close-button-wrapper{border-left:1px solid var(--ag-border-color)}.ag-tabs-close-button{background-color:unset;border:0;cursor:pointer;padding:0}.ag-tab{align-items:center;background-color:var(--ag-tab-background-color);border-left:var(--ag-tab-selected-border-width) solid transparent;border-right:var(--ag-tab-selected-border-width) solid transparent;color:var(--ag-tab-text-color);cursor:pointer;display:flex;flex:1;justify-content:center;padding:var(--ag-tab-top-padding) var(--ag-tab-horizontal-padding) var(--ag-tab-bottom-padding);position:relative;&:hover{background-color:var(--ag-tab-hover-background-color);color:var(--ag-tab-hover-text-color)}&.ag-tab-selected{background-color:var(--ag-tab-selected-background-color);color:var(--ag-tab-selected-text-color)}&:after{background-color:var(--ag-tab-selected-underline-color);bottom:0;content:"";display:block;height:var(--ag-tab-selected-underline-width);left:0;opacity:0;position:absolute;right:0;transition:opacity var(--ag-tab-selected-underline-transition-duration)}&.ag-tab-selected:after{opacity:1}}:where(.ag-ltr) .ag-tab{&.ag-tab-selected{&:where(:not(:first-of-type)){border-left-color:var(--ag-tab-selected-border-color)}&:where(:not(:last-of-type)){border-right-color:var(--ag-tab-selected-border-color)}}}:where(.ag-rtl) .ag-tab{&.ag-tab-selected{&:where(:not(:first-of-type)){border-right-color:var(--ag-tab-selected-border-color)}&:where(:not(:last-of-type)){border-left-color:var(--ag-tab-selected-border-color)}}}'
});
var ll = new nQ().withPart(nV).withPart(nW).withPart(n8).withPart(n9).withPart(lr).withPart(ln).withPart(lo).withPart(nW).withParams({
  fontFamily: [{
    googleFont: "IBM Plex Sans"
  }, "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu"]
});
var la = {
  cssName: "--ag-row-height",
  changeKey: "rowHeightChanged",
  defaultValue: 42
};
var ld = {
  cssName: "--ag-header-height",
  changeKey: "headerHeightChanged",
  defaultValue: 48
};
var lh = {
  cssName: "--ag-list-item-height",
  changeKey: "listItemHeightChanged",
  defaultValue: 24
};
var lu = {
  cssName: "--ag-row-border",
  changeKey: "rowBorderWidthChanged",
  defaultValue: 1,
  border: !0
};
var lc = 0;
var lg = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "environment";
    this.sizeEls = new Map();
    this.lastKnownValues = new Map();
    this.sizesMeasured = !1;
    this.paramsClass = `ag-theme-params-${++lc}`;
    this.globalCSS = [];
  }
  wireBeans(e) {
    let {
      eGridDiv,
      gridOptions
    } = e;
    this.eGridDiv = eGridDiv;
    this.eStyleContainer = gridOptions.themeStyleContainer ?? (eGridDiv.getRootNode() === document ? document.head : eGridDiv);
    this.cssLayer = gridOptions.themeCssLayer;
  }
  postConstruct() {
    this.addManagedPropertyListener("theme", () => this.handleThemeGridOptionChange());
    this.handleThemeGridOptionChange();
    this.addManagedPropertyListener("rowHeight", () => this.refreshRowHeightVariable());
    this.getSizeEl(la);
    this.getSizeEl(ld);
    this.getSizeEl(lh);
    this.getSizeEl(lu);
    this.refreshRowBorderWidthVariable();
    this.addDestroyFunc(() => nR(this));
    this.mutationObserver = new MutationObserver(() => {
      this.fireGridStylesChangedEvent("themeChanged");
    });
    this.addDestroyFunc(() => this.mutationObserver.disconnect());
  }
  getDefaultRowHeight() {
    return this.getCSSVariablePixelValue(la);
  }
  getDefaultHeaderHeight() {
    return this.getCSSVariablePixelValue(ld);
  }
  getDefaultColumnMinWidth() {
    return Math.min(36, this.getDefaultRowHeight());
  }
  getDefaultListItemHeight() {
    return this.getCSSVariablePixelValue(lh);
  }
  getRowBorderWidth() {
    return this.getCSSVariablePixelValue(lu);
  }
  applyThemeClasses(e) {
    let {
      gridTheme
    } = this;
    let i = "";
    if (gridTheme) i = `${this.paramsClass} ${gridTheme._getCssClass()}`;else {
      this.mutationObserver.disconnect();
      let e = this.eGridDiv;
      for (; e;) {
        let t = !1;
        for (let s of Array.from(e.classList)) s.startsWith("ag-theme-") && (t = !0, i = i ? `${i} ${s}` : s);
        t && this.mutationObserver.observe(e, {
          attributes: !0,
          attributeFilter: ["class"]
        });
        e = e.parentElement;
      }
    }
    for (let t of Array.from(e.classList)) t.startsWith("ag-theme-") && e.classList.remove(t);
    if (i) {
      let t = e.className;
      e.className = t + (t ? " " : "") + i;
    }
  }
  refreshRowHeightVariable() {
    let {
      eGridDiv
    } = this;
    let t = eGridDiv.style.getPropertyValue("--ag-line-height").trim();
    let i = this.gos.get("rowHeight");
    if (null == i || isNaN(i) || !isFinite(i)) {
      null !== t && eGridDiv.style.setProperty("--ag-line-height", null);
      return -1;
    }
    let s = `${i}px`;
    return t != s ? (eGridDiv.style.setProperty("--ag-line-height", s), i) : "" != t ? parseFloat(t) : -1;
  }
  addGlobalCSS(e, t) {
    this.gridTheme ? nv(e, this.eStyleContainer, t, this.cssLayer, 0) : this.globalCSS.push([e, t]);
  }
  getCSSVariablePixelValue(e) {
    let t = this.lastKnownValues.get(e);
    if (null != t) return t;
    let i = this.measureSizeEl(e);
    return "detached" === i || "no-styles" === i ? e.defaultValue : (this.lastKnownValues.set(e, i), i);
  }
  measureSizeEl(e) {
    let t = this.getSizeEl(e);
    if (null == t.offsetParent) return "detached";
    let i = t.offsetWidth;
    return i === lp ? "no-styles" : (this.sizesMeasured = !0, i);
  }
  getMeasurementContainer() {
    let e = this.eMeasurementContainer;
    e || ((e = this.eMeasurementContainer = document.createElement("div")).className = "ag-measurement-container", this.eGridDiv.appendChild(e));
    return e;
  }
  getSizeEl(e) {
    let t = this.sizeEls.get(e);
    if (t) return t;
    let i = this.getMeasurementContainer();
    t = document.createElement("div");
    let {
      border
    } = e;
    border ? (t.className = "ag-measurement-element-border", t.style.setProperty("--ag-internal-measurement-border", `var(${e.cssName}, solid ${lp}px`)) : t.style.width = `var(${e.cssName}, ${lp}px)`;
    i.appendChild(t);
    this.sizeEls.set(e, t);
    let r = this.measureSizeEl(e);
    "no-styles" === r && $$eW42(9, {
      variable: e
    });
    let o = $$ef15(this.beans, t, () => {
      let t = this.measureSizeEl(e);
      "detached" !== t && "no-styles" !== t && (this.lastKnownValues.set(e, t), t !== r && (r = t, this.fireGridStylesChangedEvent(e.changeKey)));
    });
    this.addDestroyFunc(() => o());
    return t;
  }
  fireGridStylesChangedEvent(e) {
    "rowBorderWidthChanged" === e && this.refreshRowBorderWidthVariable();
    this.eventSvc.dispatchEvent({
      type: "gridStylesChanged",
      [e]: !0
    });
  }
  refreshRowBorderWidthVariable() {
    let e = this.getCSSVariablePixelValue(lu);
    this.eGridDiv.style.setProperty("--ag-internal-row-border-width", `${e}px`);
  }
  handleThemeGridOptionChange() {
    let e;
    let {
      gos,
      eGridDiv,
      globalCSS,
      gridTheme
    } = this;
    let o = gos.get("theme");
    if ("legacy" === o) e = void 0;else {
      let t = o ?? ll;
      t instanceof nQ ? e = t : ez(240, {
        theme: t
      });
    }
    if (e !== gridTheme) {
      if (e) {
        for (let [e, t] of (nS(this), nb(this.eStyleContainer, this.cssLayer), globalCSS)) nv(e, this.eStyleContainer, t, this.cssLayer, 0);
        globalCSS.length = 0;
      }
      this.gridTheme = e;
      e?._startUse({
        loadThemeGoogleFonts: gos.get("loadThemeGoogleFonts"),
        styleContainer: this.eStyleContainer,
        cssLayer: this.cssLayer
      });
      let r = this.eParamsStyle;
      r || (r = this.eParamsStyle = document.createElement("style"), eGridDiv.appendChild(r));
      nC || (r.textContent = e?._getPerGridCss(this.paramsClass) || "");
      this.applyThemeClasses(eGridDiv);
      this.fireGridStylesChangedEvent("themeChanged");
    }
    e && getComputedStyle(this.getMeasurementContainer()).getPropertyValue("--ag-legacy-styles-loaded") && (o ? ez(106) : ez(239));
  }
};
var lp = 15538;
var lm = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "eventSvc";
    this.globalEventService = new p();
  }
  postConstruct() {
    let {
      globalListener,
      globalSyncListener
    } = this.beans;
    globalListener && this.addGlobalListener(globalListener, !0);
    globalSyncListener && this.addGlobalListener(globalSyncListener, !1);
  }
  addEventListener(e, t, i) {
    this.globalEventService.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    this.globalEventService.removeEventListener(e, t, i);
  }
  addGlobalListener(e, t = !1) {
    this.globalEventService.addGlobalListener(e, t);
  }
  removeGlobalListener(e, t = !1) {
    this.globalEventService.removeGlobalListener(e, t);
  }
  dispatchLocalEvent() {}
  dispatchEvent(e) {
    this.globalEventService.dispatchEvent(ty(this.gos, e));
  }
  dispatchEventOnce(e) {
    this.globalEventService.dispatchEventOnce(ty(this.gos, e));
  }
};
function lf(e) {
  return !!e && e.getLeafColumns().some(e => e.isSpanHeaderHeight());
}
function lC(e, t) {
  let i;
  if (sE(e) && lf(e) && e.isPadding()) {
    let s = i = e.getLeafColumns()[0];
    for (; s !== e;) {
      t++;
      s = s.getParent();
    }
  }
  return {
    column: i || e,
    headerRowIndex: t
  };
}
var lw = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "headerNavigation";
    this.currentHeaderRowWithoutSpan = -1;
  }
  postConstruct() {
    let e = this.beans;
    e.ctrlsSvc.whenReady(this, e => {
      this.gridBodyCon = e.gridBodyCtrl;
    });
    let t = e1(e);
    this.addManagedElementListeners(t, {
      mousedown: () => {
        this.currentHeaderRowWithoutSpan = -1;
      }
    });
  }
  getHeaderPositionForColumn(e, t) {
    let i;
    let {
      colModel,
      colGroupSvc,
      ctrlsSvc
    } = this.beans;
    if ("string" == typeof e ? (i = colModel.getCol(e)) || (i = colGroupSvc?.getColumnGroup(e) ?? null) : i = e, !i) return null;
    let n = ctrlsSvc.getHeaderRowContainerCtrl();
    let l = "filter" === tq(n?.getAllCtrls() || []).type;
    let a = rD(this.beans) - 1;
    let d = -1;
    let h = i;
    for (; h;) {
      d++;
      h = h.getParent();
    }
    let u = d;
    t && l && u === a - 1 && u++;
    return -1 === u ? null : {
      headerRowIndex: u,
      column: i
    };
  }
  navigateVertically(e, t, i) {
    let s = this.beans.focusSvc;
    if (t || (t = s.focusedHeader), !t) return !1;
    let {
      headerRowIndex
    } = t;
    let o = t.column;
    let n = rD(this.beans);
    let l = this.getHeaderRowType(headerRowIndex);
    let {
      headerRowIndex: _headerRowIndex,
      column,
      headerRowIndexWithoutSpan
    } = "UP" === e ? function (e, t, i) {
      let s = "filter" === e ? t : t.getParent();
      let r = i - 1;
      let o = r;
      if ("column" === e && lf(t.getParent())) {
        for (; s && s.isPadding();) {
          s = s.getParent();
          r--;
        }
        o = r;
        r < 0 && (s = t, r = i, o = void 0);
      }
      return {
        column: s,
        headerRowIndex: r,
        headerRowIndexWithoutSpan: o
      };
    }(l, o, headerRowIndex) : function (e, t, i, s = "After") {
      let r = t;
      let o = i + 1;
      let n = o;
      if ("group" === e) {
        let e = t.getDisplayedLeafColumns();
        let i = "After" === s ? e[0] : tq(e);
        let n = [];
        let l = i;
        for (; l.getParent() !== t;) {
          l = l.getParent();
          n.push(l);
        }
        if (r = i, i.isSpanHeaderHeight()) for (let e = n.length - 1; e >= 0; e--) {
          let t = n[e];
          if (!t.isPadding()) {
            r = t;
            break;
          }
          o++;
        } else (r = tq(n)) || (r = i);
      }
      return {
        column: r,
        headerRowIndex: o,
        headerRowIndexWithoutSpan: n
      };
    }(l, o, headerRowIndex);
    let u = !1;
    _headerRowIndex < 0 && (a = 0, d = o, u = !0);
    _headerRowIndex >= n ? (a = -1, this.currentHeaderRowWithoutSpan = -1) : void 0 !== headerRowIndexWithoutSpan && (this.currentHeaderRowWithoutSpan = headerRowIndexWithoutSpan);
    return (!!u || !!column) && s.focusHeaderPosition({
      headerPosition: {
        headerRowIndex: _headerRowIndex,
        column
      },
      allowUserOverride: !0,
      event: i
    });
  }
  navigateHorizontally(e, t = !1, i) {
    let s;
    let r;
    let {
      focusSvc,
      gos
    } = this.beans;
    let l = focusSvc.focusedHeader;
    if (-1 !== this.currentHeaderRowWithoutSpan ? l.headerRowIndex = this.currentHeaderRowWithoutSpan : this.currentHeaderRowWithoutSpan = l.headerRowIndex, r = "LEFT" === e !== gos.get("enableRtl") ? "Before" : "After", (s = this.findHeader(l, r)) || !t) return focusSvc.focusHeaderPosition({
      headerPosition: s,
      direction: r,
      fromTab: t,
      allowUserOverride: !0,
      event: i
    });
    if (t) {
      let e = gos.getCallback("tabToNextHeader");
      if (e) return focusSvc.focusHeaderPositionFromUserFunc({
        userFunc: e,
        headerPosition: s,
        direction: r
      });
    }
    return this.focusNextHeaderRow(l, r, i);
  }
  focusNextHeaderRow(e, t, i) {
    let s;
    let r = e.headerRowIndex;
    let o = null;
    let n = this.beans;
    if ("Before" === t ? r > 0 && (s = r - 1, this.currentHeaderRowWithoutSpan -= 1, o = this.findColAtEdgeForHeaderRow(s, "end")) : (s = r + 1, this.currentHeaderRowWithoutSpan < rD(n) ? this.currentHeaderRowWithoutSpan += 1 : this.currentHeaderRowWithoutSpan = -1, o = this.findColAtEdgeForHeaderRow(s, "start")), !o) return !1;
    let {
      column,
      headerRowIndex
    } = lC(o.column, o?.headerRowIndex);
    return n.focusSvc.focusHeaderPosition({
      headerPosition: {
        column,
        headerRowIndex
      },
      direction: t,
      fromTab: !0,
      allowUserOverride: !0,
      event: i
    });
  }
  scrollToColumn(e, t = "After") {
    let i;
    if (!e.getPinned()) {
      if (sE(e)) {
        let s = e.getDisplayedLeafColumns();
        i = "Before" === t ? tq(s) : s[0];
      } else i = e;
      this.gridBodyCon.scrollFeature.ensureColumnVisible(i);
    }
  }
  findHeader(e, t) {
    let i;
    let {
      colGroupSvc,
      visibleCols
    } = this.beans;
    if (!(i = sE(e.column) ? colGroupSvc?.getGroupAtDirection(e.column, t) ?? void 0 : visibleCols[`getCol${t}`](e.column))) return;
    let {
      headerRowIndex
    } = e;
    if ("filter" !== this.getHeaderRowType(headerRowIndex)) {
      let e = [i];
      for (; i.getParent();) e.push(i = i.getParent());
      i = e[Math.max(0, e.length - 1 - headerRowIndex)];
    }
    let {
      column,
      headerRowIndex: _headerRowIndex2
    } = lC(i, headerRowIndex);
    return {
      column,
      headerRowIndex: _headerRowIndex2
    };
  }
  getHeaderRowType(e) {
    let t = this.beans.ctrlsSvc.getHeaderRowContainerCtrl();
    if (t) return t.getRowType(e);
  }
  findColAtEdgeForHeaderRow(e, t) {
    let {
      visibleCols,
      ctrlsSvc,
      colGroupSvc
    } = this.beans;
    let o = visibleCols.allCols;
    let n = o["start" === t ? 0 : o.length - 1];
    if (!n) return;
    let l = ctrlsSvc.getHeaderRowContainerCtrl(n.getPinned());
    let a = l?.getRowType(e);
    if ("group" == a) {
      let t = colGroupSvc?.getColGroupAtLevel(n, e);
      return {
        headerRowIndex: e,
        column: t
      };
    }
    return {
      headerRowIndex: null == a ? -1 : e,
      column: n
    };
  }
};
var lv = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "focusSvc";
  }
  wireBeans(e) {
    this.colModel = e.colModel;
    this.visibleCols = e.visibleCols;
    this.rowRenderer = e.rowRenderer;
    this.navigation = e.navigation;
    this.filterManager = e.filterManager;
    this.overlays = e.overlays;
  }
  postConstruct() {
    let e = this.clearFocusedCell.bind(this);
    this.addManagedEventListeners({
      columnPivotModeChanged: e,
      newColumnsLoaded: this.onColumnEverythingChanged.bind(this),
      columnGroupOpened: e,
      columnRowGroupChanged: e
    });
    this.addDestroyFunc(function (e) {
      let t = e1(e);
      i7 > 0 || (t.addEventListener("keydown", i9), t.addEventListener("mousedown", i9));
      i7++;
      return () => {
        --i7 > 0 || (t.removeEventListener("keydown", i9), t.removeEventListener("mousedown", i9));
      };
    }(this.beans));
  }
  onColumnEverythingChanged() {
    if (!this.focusedCell) return;
    let e = this.focusedCell.column;
    let t = this.colModel.getCol(e.getId());
    e !== t && this.clearFocusedCell();
  }
  getFocusCellToUseAfterRefresh() {
    return this.gos.get("suppressFocusAfterRefresh") || !this.focusedCell || this.isDomDataMissingInHierarchy(e3(this.beans), sQ) ? null : this.focusedCell;
  }
  getFocusHeaderToUseAfterRefresh() {
    return this.gos.get("suppressFocusAfterRefresh") || !this.focusedHeader || this.isDomDataMissingInHierarchy(e3(this.beans), rN) ? null : this.focusedHeader;
  }
  isDomDataMissingInHierarchy(e, t) {
    let i = e;
    for (; i;) {
      if (eQ(this.gos, i, t)) return !1;
      i = i.parentNode;
    }
    return !0;
  }
  getFocusedCell() {
    return this.focusedCell;
  }
  shouldRestoreFocus(e) {
    return !!this.isCellRestoreFocused(e) && (setTimeout(() => {
      this.restoredFocusedCell = null;
    }, 0), !0);
  }
  clearRestoreFocus() {
    this.restoredFocusedCell = null;
    this.awaitRestoreFocusedCell = !1;
  }
  restoreFocusedCell(e, t) {
    this.awaitRestoreFocusedCell = !0;
    setTimeout(() => {
      this.awaitRestoreFocusedCell && (this.setRestoreFocusedCell(e), t());
    });
  }
  isCellRestoreFocused(e) {
    return null != this.restoredFocusedCell && ("cellSpan" in e ? e.doesSpanContain(this.restoredFocusedCell) : sy(e, this.restoredFocusedCell));
  }
  setRestoreFocusedCell(e) {
    "react" === this.beans.frameworkOverrides.renderingEngine && (this.restoredFocusedCell = e);
  }
  getFocusEventParams(e) {
    let {
      rowIndex,
      rowPinned,
      column
    } = e;
    let r = {
      rowIndex,
      rowPinned,
      column,
      isFullWidthCell: !1
    };
    let o = this.rowRenderer.getRowByPosition({
      rowIndex,
      rowPinned
    });
    o && (r.isFullWidthCell = o.isFullWidth());
    return r;
  }
  clearFocusedCell() {
    if (this.restoredFocusedCell = null, null == this.focusedCell) return;
    let e = this.getFocusEventParams(this.focusedCell);
    this.focusedCell = null;
    this.eventSvc.dispatchEvent({
      type: "cellFocusCleared",
      ...e
    });
  }
  setFocusedCell(e) {
    let {
      column,
      rowIndex,
      rowPinned,
      forceBrowserFocus = !1,
      preventScrollOnBrowserFocus = !1
    } = e;
    let n = this.colModel.getCol(column);
    if (!n) {
      this.focusedCell = null;
      return;
    }
    this.focusedCell = {
      rowIndex,
      rowPinned: eC(rowPinned),
      column: n
    };
    this.eventSvc.dispatchEvent({
      type: "cellFocused",
      ...this.getFocusEventParams(this.focusedCell),
      forceBrowserFocus,
      preventScrollOnBrowserFocus
    });
  }
  isCellFocused(e) {
    return null != this.focusedCell && sy(e, this.focusedCell);
  }
  isRowNodeFocused(e) {
    return this.isRowFocused(e.rowIndex, e.rowPinned);
  }
  isHeaderWrapperFocused(e) {
    if (null == this.focusedHeader) return !1;
    let {
      column,
      rowCtrl: {
        rowIndex,
        pinned
      }
    } = e;
    let {
      column: _column,
      headerRowIndex
    } = this.focusedHeader;
    return column === _column && rowIndex === headerRowIndex && pinned == _column.getPinned();
  }
  focusHeaderPosition(e) {
    if (sr(this.beans)) return !1;
    let {
      direction,
      fromTab,
      allowUserOverride,
      event,
      fromCell,
      rowWithoutSpanValue
    } = e;
    let {
      headerPosition
    } = e;
    if (fromCell && this.filterManager?.isAdvFilterHeaderActive()) return this.focusAdvancedFilter(headerPosition);
    if (allowUserOverride) {
      let e = this.focusedHeader;
      let s = rD(this.beans);
      if (fromTab) {
        let i = this.gos.getCallback("tabToNextHeader");
        i && (l = this.getHeaderPositionFromUserFunc({
          userFunc: i,
          direction,
          currentPosition: e,
          headerPosition,
          headerRowCount: s
        }));
      } else {
        let t = this.gos.getCallback("navigateToNextHeader");
        t && event && (l = t({
          key: event.key,
          previousHeaderPosition: e,
          nextHeaderPosition: headerPosition,
          headerRowCount: s,
          event
        }));
      }
    }
    return !!headerPosition && this.focusProvidedHeaderPosition({
      headerPosition,
      direction,
      event,
      fromCell,
      rowWithoutSpanValue
    });
  }
  focusHeaderPositionFromUserFunc(e) {
    if (sr(this.beans)) return !1;
    let {
      userFunc,
      headerPosition,
      direction,
      event
    } = e;
    let o = this.focusedHeader;
    let n = rD(this.beans);
    let l = this.getHeaderPositionFromUserFunc({
      userFunc,
      direction,
      currentPosition: o,
      headerPosition,
      headerRowCount: n
    });
    return !!l && this.focusProvidedHeaderPosition({
      headerPosition: l,
      direction,
      event
    });
  }
  getHeaderPositionFromUserFunc(e) {
    let {
      userFunc,
      direction,
      currentPosition,
      headerPosition,
      headerRowCount
    } = e;
    let n = userFunc({
      backwards: "Before" === direction,
      previousHeaderPosition: currentPosition,
      nextHeaderPosition: headerPosition,
      headerRowCount
    });
    return !0 === n ? currentPosition : !1 === n ? null : n;
  }
  focusProvidedHeaderPosition(e) {
    let {
      headerPosition,
      direction,
      fromCell,
      rowWithoutSpanValue,
      event
    } = e;
    let {
      column,
      headerRowIndex
    } = t;
    let {
      filterManager,
      ctrlsSvc,
      headerNavigation
    } = this.beans;
    if (-1 === headerRowIndex) return filterManager?.isAdvFilterHeaderActive() ? this.focusAdvancedFilter(headerPosition) : this.focusGridView({
      column,
      event
    });
    headerNavigation?.scrollToColumn(column, direction);
    let u = ctrlsSvc.getHeaderRowContainerCtrl(column.getPinned());
    let c = u?.focusHeader(headerPosition.headerRowIndex, column, event) || !1;
    headerNavigation && c && (null != rowWithoutSpanValue || fromCell) && (headerNavigation.currentHeaderRowWithoutSpan = rowWithoutSpanValue ?? -1);
    return c;
  }
  focusFirstHeader() {
    if (this.overlays?.isExclusive() && this.focusOverlay()) return !0;
    let e = this.visibleCols.allCols[0];
    if (!e) return !1;
    let {
      colGroupSvc
    } = this.beans;
    colGroupSvc && e.getParent() && (e = colGroupSvc.getColGroupAtLevel(e, 0));
    let i = lC(e, 0);
    return this.focusHeaderPosition({
      headerPosition: i,
      rowWithoutSpanValue: 0
    });
  }
  focusLastHeader(e) {
    if (this.overlays?.isExclusive() && this.focusOverlay(!0)) return !0;
    let t = rD(this.beans) - 1;
    let i = tq(this.visibleCols.allCols);
    return this.focusHeaderPosition({
      headerPosition: {
        headerRowIndex: t,
        column: i
      },
      rowWithoutSpanValue: -1,
      event: e
    });
  }
  focusPreviousFromFirstCell(e) {
    return this.filterManager?.isAdvFilterHeaderActive() ? this.focusAdvancedFilter(null) : this.focusLastHeader(e);
  }
  isAnyCellFocused() {
    return !!this.focusedCell;
  }
  isRowFocused(e, t) {
    return null != this.focusedCell && this.focusedCell.rowIndex === e && this.focusedCell.rowPinned === eC(t);
  }
  focusOverlay(e) {
    let t = this.overlays?.isVisible() && this.overlays.eWrapper?.getGui();
    return !!t && st(t, e);
  }
  focusGridView(e) {
    let {
      backwards = !1,
      canFocusOverlay = !0,
      event
    } = e;
    if (this.overlays?.isExclusive()) return canFocusOverlay && this.focusOverlay(backwards);
    if (so(this.beans)) return backwards && !sr(this.beans) ? this.focusLastHeader() : !!(canFocusOverlay && this.focusOverlay(backwards)) || !backwards && sn(this.beans, backwards);
    let r = backwards ? function (e) {
      let t;
      let i = null;
      let {
        pinnedRowModel,
        pageBounds
      } = e;
      let o = pinnedRowModel?.getPinnedBottomRowCount();
      let n = pinnedRowModel?.getPinnedTopRowCount();
      o ? (i = "bottom", t = o - 1) : e.rowModel.getRowCount() ? (i = null, t = pageBounds.getLastRow()) : n && (i = "top", t = n - 1);
      return void 0 === t ? null : {
        rowIndex: t,
        rowPinned: i
      };
    }(this.beans) : function (e) {
      let t;
      let i = 0;
      let {
        pinnedRowModel,
        rowModel,
        pageBounds
      } = e;
      pinnedRowModel?.getPinnedTopRowCount() ? t = "top" : rowModel.getRowCount() ? (t = null, i = pageBounds.getFirstRow()) : pinnedRowModel?.getPinnedBottomRowCount() && (t = "bottom");
      return void 0 === t ? null : {
        rowIndex: i,
        rowPinned: t
      };
    }(this.beans);
    if (r) {
      let i = e.column ?? this.focusedHeader?.column;
      let {
        rowIndex,
        rowPinned
      } = r;
      let l = sS(this.beans, r);
      if (!i || !l || null == rowIndex) return !1;
      if (i.isSuppressNavigable(l)) {
        let e;
        let t = this.gos.get("enableRtl");
        e = event && event.key !== i4.TAB ? event.key : t ? i4.LEFT : i4.RIGHT;
        this.beans.navigation?.navigateToNextCell(null, e, {
          rowIndex,
          column: i,
          rowPinned: rowPinned || null
        }, !0);
        return !0;
      }
      if (this.navigation?.ensureCellVisible({
        rowIndex,
        column: i,
        rowPinned
      }), backwards) {
        let e = this.rowRenderer.getRowByPosition(r);
        if (e?.isFullWidth() && this.navigation?.tryToFocusFullWidthRow(r, backwards)) return !0;
      }
      this.setFocusedCell({
        rowIndex,
        column: i,
        rowPinned: eC(rowPinned),
        forceBrowserFocus: !0
      });
      this.beans.rangeSvc?.setRangeToCell({
        rowIndex,
        rowPinned,
        column: i
      });
      return !0;
    }
    return !!(canFocusOverlay && this.focusOverlay(backwards) || backwards && this.focusLastHeader());
  }
  focusAdvancedFilter(e) {
    this.advFilterFocusColumn = e?.column;
    return this.beans.advancedFilter?.getCtrl().focusHeaderComp() ?? !1;
  }
  focusNextFromAdvancedFilter(e, t) {
    let i = (t ? void 0 : this.advFilterFocusColumn) ?? this.visibleCols.allCols?.[0];
    return e ? this.focusHeaderPosition({
      headerPosition: {
        column: i,
        headerRowIndex: rD(this.beans) - 1
      }
    }) : this.focusGridView({
      column: i
    });
  }
  clearAdvancedFilterColumn() {
    this.advFilterFocusColumn = void 0;
  }
};
var lb = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "scrollVisibleSvc";
  }
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc;
    this.colAnimation = e.colAnimation;
  }
  postConstruct() {
    this.getScrollbarWidth();
    this.addManagedEventListeners({
      displayedColumnsChanged: this.updateScrollVisible.bind(this),
      displayedColumnsWidthChanged: this.updateScrollVisible.bind(this)
    });
  }
  updateScrollVisible() {
    let {
      colAnimation
    } = this;
    colAnimation?.isActive() ? colAnimation.executeLaterVMTurn(() => {
      colAnimation.executeLaterVMTurn(() => this.updateScrollVisibleImpl());
    }) : this.updateScrollVisibleImpl();
  }
  updateScrollVisibleImpl() {
    let e = this.ctrlsSvc.get("center");
    if (!e || this.colAnimation?.isActive()) return;
    let t = {
      horizontalScrollShowing: e.isHorizontalScrollShowing(),
      verticalScrollShowing: this.verticalScrollShowing
    };
    this.setScrollsVisible(t);
    this.updateScrollGap();
  }
  updateScrollGap() {
    let e = this.ctrlsSvc.get("center");
    let t = e.hasHorizontalScrollGap();
    let i = e.hasVerticalScrollGap();
    (this.horizontalScrollGap !== t || this.verticalScrollGap !== i) && (this.horizontalScrollGap = t, this.verticalScrollGap = i, this.eventSvc.dispatchEvent({
      type: "scrollGapChanged"
    }));
  }
  setScrollsVisible(e) {
    (this.horizontalScrollShowing !== e.horizontalScrollShowing || this.verticalScrollShowing !== e.verticalScrollShowing) && (this.horizontalScrollShowing = e.horizontalScrollShowing, this.verticalScrollShowing = e.verticalScrollShowing, this.eventSvc.dispatchEvent({
      type: "scrollVisibilityChanged"
    }));
  }
  getScrollbarWidth() {
    if (null == this.scrollbarWidth) {
      let e = this.gos.get("scrollbarWidth");
      let t = "number" == typeof e && e >= 0 ? e : (null == d && B(), d);
      null != t && (this.scrollbarWidth = t, this.eventSvc.dispatchEvent({
        type: "scrollbarWidthChanged"
      }));
    }
    return this.scrollbarWidth;
  }
};
var ly = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "gridDestroySvc";
    this.destroyCalled = !1;
  }
  destroy() {
    if (this.destroyCalled) return;
    let {
      stateSvc,
      ctrlsSvc,
      context
    } = this.beans;
    this.eventSvc.dispatchEvent({
      type: "gridPreDestroyed",
      state: stateSvc?.getState() ?? {}
    });
    this.destroyCalled = !0;
    ctrlsSvc.get("gridCtrl")?.destroyGridUi();
    context.destroy();
    super.destroy();
  }
};
var lS = new Set(["gridPreDestroyed", "fillStart", "pasteStart"]);
var lR = {
  suppressContextMenu: !1,
  preventDefaultOnContextMenu: !1,
  allowContextMenuWithControlKey: !1,
  suppressMenuHide: !0,
  enableBrowserTooltips: !1,
  tooltipTrigger: "hover",
  tooltipShowDelay: 2e3,
  tooltipHideDelay: 1e4,
  tooltipMouseTrack: !1,
  tooltipShowMode: "standard",
  tooltipInteraction: !1,
  copyHeadersToClipboard: !1,
  copyGroupHeadersToClipboard: !1,
  clipboardDelimiter: "	",
  suppressCopyRowsToClipboard: !1,
  suppressCopySingleCellRanges: !1,
  suppressLastEmptyLineOnPaste: !1,
  suppressClipboardPaste: !1,
  suppressClipboardApi: !1,
  suppressCutToClipboard: !1,
  maintainColumnOrder: !1,
  enableStrictPivotColumnOrder: !1,
  suppressFieldDotNotation: !1,
  allowDragFromColumnsToolPanel: !1,
  suppressMovableColumns: !1,
  suppressColumnMoveAnimation: !1,
  suppressMoveWhenColumnDragging: !1,
  suppressDragLeaveHidesColumns: !1,
  suppressRowGroupHidesColumns: !1,
  suppressAutoSize: !1,
  autoSizePadding: 20,
  skipHeaderOnAutoSize: !1,
  singleClickEdit: !1,
  suppressClickEdit: !1,
  readOnlyEdit: !1,
  stopEditingWhenCellsLoseFocus: !1,
  enterNavigatesVertically: !1,
  enterNavigatesVerticallyAfterEdit: !1,
  enableCellEditingOnBackspace: !1,
  undoRedoCellEditing: !1,
  undoRedoCellEditingLimit: 10,
  suppressCsvExport: !1,
  suppressExcelExport: !1,
  cacheQuickFilter: !1,
  includeHiddenColumnsInQuickFilter: !1,
  excludeChildrenWhenTreeDataFiltering: !1,
  enableAdvancedFilter: !1,
  includeHiddenColumnsInAdvancedFilter: !1,
  enableCharts: !1,
  masterDetail: !1,
  keepDetailRows: !1,
  keepDetailRowsCount: 10,
  detailRowAutoHeight: !1,
  tabIndex: 0,
  rowBuffer: 10,
  valueCache: !1,
  valueCacheNeverExpires: !1,
  enableCellExpressions: !1,
  suppressTouch: !1,
  suppressFocusAfterRefresh: !1,
  suppressBrowserResizeObserver: !1,
  suppressPropertyNamesCheck: !1,
  suppressChangeDetection: !1,
  debug: !1,
  suppressLoadingOverlay: !1,
  suppressNoRowsOverlay: !1,
  pagination: !1,
  paginationPageSize: 100,
  paginationPageSizeSelector: !0,
  paginationAutoPageSize: !1,
  paginateChildRows: !1,
  suppressPaginationPanel: !1,
  pivotMode: !1,
  pivotPanelShow: "never",
  pivotDefaultExpanded: 0,
  pivotSuppressAutoColumn: !1,
  suppressExpandablePivotGroups: !1,
  functionsReadOnly: !1,
  suppressAggFuncInHeader: !1,
  alwaysAggregateAtRootLevel: !1,
  aggregateOnlyChangedColumns: !1,
  suppressAggFilteredOnly: !1,
  removePivotHeaderRowWhenSingleValueColumn: !1,
  animateRows: !0,
  cellFlashDuration: 500,
  cellFadeDuration: 1e3,
  allowShowChangeAfterFilter: !1,
  domLayout: "normal",
  ensureDomOrder: !1,
  enableRtl: !1,
  suppressColumnVirtualisation: !1,
  suppressMaxRenderedRowRestriction: !1,
  suppressRowVirtualisation: !1,
  rowDragManaged: !1,
  suppressRowDrag: !1,
  suppressMoveWhenRowDragging: !1,
  rowDragEntireRow: !1,
  rowDragMultiRow: !1,
  embedFullWidthRows: !1,
  groupDisplayType: "singleColumn",
  groupDefaultExpanded: 0,
  groupMaintainOrder: !1,
  groupSelectsChildren: !1,
  groupSuppressBlankHeader: !1,
  groupSelectsFiltered: !1,
  showOpenedGroup: !1,
  groupRemoveSingleChildren: !1,
  groupRemoveLowestSingleChildren: !1,
  groupHideOpenParents: !1,
  groupAllowUnbalanced: !1,
  rowGroupPanelShow: "never",
  suppressMakeColumnVisibleAfterUnGroup: !1,
  treeData: !1,
  rowGroupPanelSuppressSort: !1,
  suppressGroupRowsSticky: !1,
  rowModelType: "clientSide",
  asyncTransactionWaitMillis: 50,
  suppressModelUpdateAfterUpdateTransaction: !1,
  cacheOverflowSize: 1,
  infiniteInitialRowCount: 1,
  serverSideInitialRowCount: 1,
  cacheBlockSize: 100,
  maxBlocksInCache: -1,
  maxConcurrentDatasourceRequests: 2,
  blockLoadDebounceMillis: 0,
  purgeClosedRowNodes: !1,
  serverSideSortAllLevels: !1,
  serverSideOnlyRefreshFilteredGroups: !1,
  serverSidePivotResultFieldSeparator: "_",
  viewportRowModelPageSize: 5,
  viewportRowModelBufferSize: 5,
  alwaysShowHorizontalScroll: !1,
  alwaysShowVerticalScroll: !1,
  debounceVerticalScrollbar: !1,
  suppressHorizontalScroll: !1,
  suppressScrollOnNewData: !1,
  suppressScrollWhenPopupsAreOpen: !1,
  suppressAnimationFrame: !1,
  suppressMiddleClickScrolls: !1,
  suppressPreventDefaultOnMouseWheel: !1,
  rowMultiSelectWithClick: !1,
  suppressRowDeselection: !1,
  suppressRowClickSelection: !1,
  suppressCellFocus: !1,
  suppressHeaderFocus: !1,
  suppressMultiRangeSelection: !1,
  enableCellTextSelection: !1,
  enableRangeSelection: !1,
  enableRangeHandle: !1,
  enableFillHandle: !1,
  fillHandleDirection: "xy",
  suppressClearOnFillReduction: !1,
  accentedSort: !1,
  unSortIcon: !1,
  suppressMultiSort: !1,
  alwaysMultiSort: !1,
  suppressMaintainUnsortedOrder: !1,
  suppressRowHoverHighlight: !1,
  suppressRowTransform: !1,
  columnHoverHighlight: !1,
  deltaSort: !1,
  enableGroupEdit: !1,
  groupLockGroupColumns: 0,
  serverSideEnableClientSideSort: !1,
  suppressServerSideFullWidthLoadingRow: !1,
  pivotMaxGeneratedColumns: -1,
  columnMenu: "new",
  reactiveCustomComponents: !0,
  suppressSetFilterByDefault: !1,
  rowNumbers: !1
};
var lD = 0;
var lx = 0;
var lP = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "gos";
    this.domDataKey = "__AG_" + Math.random().toString();
    this.gridInstanceId = lx++;
    this.propEventSvc = new p();
    this.globalEventHandlerFactory = e => (t, i) => {
      if (!this.isAlive()) return;
      let s = lS.has(t);
      if (s && !e || !s && e) return;
      let r = tw(t);
      let o = this.gridOptions[r];
      "function" == typeof o && this.beans.frameworkOverrides.wrapOutgoing(() => {
        o(i);
      });
    };
  }
  wireBeans(e) {
    this.gridOptions = e.gridOptions;
    this.validation = e.validation;
    this.api = e.gridApi;
    this.gridId = e.context.getGridId();
  }
  get gridOptionsContext() {
    return this.gridOptions.context;
  }
  postConstruct() {
    this.eventSvc.addGlobalListener(this.globalEventHandlerFactory().bind(this), !0);
    this.eventSvc.addGlobalListener(this.globalEventHandlerFactory(!0).bind(this), !1);
    this.propEventSvc.setFrameworkOverrides(this.beans.frameworkOverrides);
    this.addManagedEventListeners({
      gridOptionsChanged: ({
        options: e
      }) => {
        this.updateGridOptions({
          options: e,
          force: !0,
          source: "gridOptionsUpdated"
        });
      }
    });
  }
  get(e) {
    return this.gridOptions[e] ?? lR[e];
  }
  getCallback(e) {
    return this.mergeGridCommonParams(this.gridOptions[e]);
  }
  exists(e) {
    return ew(this.gridOptions[e]);
  }
  mergeGridCommonParams(e) {
    return e ? t => e(this.addGridCommonParams(t)) : e;
  }
  updateGridOptions({
    options: e,
    force: t,
    source: i = "api"
  }) {
    let s = {
      id: lD++,
      properties: []
    };
    let r = [];
    let {
      gridOptions,
      validation
    } = this;
    for (let l of Object.keys(e)) {
      let a = e[l];
      validation?.warnOnInitialPropertyUpdate(i, l);
      let d = t || "object" == typeof a && "api" === i;
      let h = gridOptions[l];
      if (d || h !== a) {
        gridOptions[l] = a;
        let e = {
          type: l,
          currentValue: a,
          previousValue: h,
          changeSet: s,
          source: i
        };
        r.push(e);
      }
    }
    validation?.processGridOptions(this.gridOptions);
    s.properties = r.map(e => e.type);
    r.forEach(e => {
      ex(this, `Updated property ${e.type} from`, e.previousValue, " to ", e.currentValue);
      this.propEventSvc.dispatchEvent(e);
    });
  }
  addPropertyEventListener(e, t) {
    this.propEventSvc.addEventListener(e, t);
  }
  removePropertyEventListener(e, t) {
    this.propEventSvc.removeEventListener(e, t);
  }
  getDomDataKey() {
    return this.domDataKey;
  }
  addGridCommonParams(e) {
    e.api = this.api;
    e.context = this.gridOptionsContext;
    return e;
  }
  assertModuleRegistered(e, t) {
    let i = Array.isArray(e) ? e.some(e => this.isModuleRegistered(e)) : this.isModuleRegistered(e);
    i || ez(200, {
      ...this.getModuleErrorParams(),
      moduleName: e,
      reasonOrId: t
    });
    return i;
  }
  getModuleErrorParams() {
    return {
      gridId: this.gridId,
      gridScoped: iY,
      rowModelType: this.get("rowModelType"),
      isUmd: !1
    };
  }
  isModuleRegistered(e) {
    return iZ(e, this.gridId, this.get("rowModelType"));
  }
};
var lE = class extends iS {
  constructor() {
    super(...arguments);
    this.eFilter = null;
    this.eFilterButton = null;
    this.eSortIndicator = null;
    this.eMenu = null;
    this.eLabel = null;
    this.eText = null;
    this.eSortOrder = null;
    this.eSortAsc = null;
    this.eSortDesc = null;
    this.eSortMixed = null;
    this.eSortNone = null;
    this.isLoadingInnerComponent = !1;
  }
  refresh(e) {
    let t = this.params;
    this.params = e;
    return this.workOutTemplate() == this.currentTemplate && this.workOutShowMenu() == this.currentShowMenu && e.enableSorting == this.currentSort && (null == this.currentSuppressMenuHide || this.shouldSuppressMenuHide() == this.currentSuppressMenuHide) && t.enableFilterButton == e.enableFilterButton && t.enableFilterIcon == e.enableFilterIcon && (this.innerHeaderComponent ? this.innerHeaderComponent.refresh?.(e) : this.setDisplayName(e), !0);
  }
  workOutTemplate() {
    var e;
    let {
      params,
      beans
    } = this;
    let s = params.template ?? (e = !!beans.sortSvc, `<div class="ag-cell-label-container" role="presentation">
        <span data-ref="eMenu" class="ag-header-icon ag-header-cell-menu-button" aria-hidden="true"></span>
        <span data-ref="eFilterButton" class="ag-header-icon ag-header-cell-filter-button" aria-hidden="true"></span>
        <div data-ref="eLabel" class="ag-header-cell-label" role="presentation">
            <span data-ref="eText" class="ag-header-cell-text"></span>
            <span data-ref="eFilter" class="ag-header-icon ag-header-label-icon ag-filter-icon" aria-hidden="true"></span>
            ${e ? '<ag-sort-indicator data-ref="eSortIndicator"></ag-sort-indicator>' : ""}
        </div>
    </div>`);
    return s?.trim ? s.trim() : s;
  }
  init(e) {
    this.params = e;
    let {
      sortSvc,
      touchSvc,
      rowNumbersSvc,
      userCompFactory
    } = this.beans;
    this.currentTemplate = this.workOutTemplate();
    this.setTemplate(this.currentTemplate, sortSvc ? [sortSvc.getSortIndicatorSelector()] : void 0);
    touchSvc?.setupForHeader(this);
    this.setMenu();
    this.setupSort();
    rowNumbersSvc?.setupForHeader(this);
    this.setupFilterIcon();
    this.setupFilterButton();
    this.workOutInnerHeaderComponent(userCompFactory, e);
    this.setDisplayName(e);
  }
  workOutInnerHeaderComponent(e, t) {
    let i = e.getCompDetails(t, iA, void 0, t);
    i && (this.isLoadingInnerComponent = !0, i.newAgStackInstance().then(e => {
      this.isLoadingInnerComponent = !1;
      e && (this.isAlive() ? (this.innerHeaderComponent = e, this.eText.appendChild(e.getGui())) : this.destroyBean(e));
    }));
  }
  setDisplayName(e) {
    let {
      displayName
    } = e;
    let i = this.currentDisplayName;
    if (this.currentDisplayName = displayName, i === displayName || this.innerHeaderComponent || this.isLoadingInnerComponent) return;
    let s = $$tN25(displayName, !0);
    this.eText.textContent = s;
  }
  addInIcon(e, t, i) {
    if (null == t) return;
    let s = rY(e, this.beans, i);
    s && t.appendChild(s);
  }
  workOutShowMenu() {
    return this.params.enableMenu && !!this.beans.menuSvc?.isHeaderMenuButtonEnabled();
  }
  shouldSuppressMenuHide() {
    return !!this.beans.menuSvc?.isHeaderMenuButtonAlwaysShowEnabled();
  }
  setMenu() {
    if (!this.eMenu) return;
    if (this.currentShowMenu = this.workOutShowMenu(), !this.currentShowMenu) {
      $$ei11(this.eMenu);
      this.eMenu = void 0;
      return;
    }
    let {
      gos,
      eMenu,
      params
    } = this;
    let s = tC(gos);
    this.addInIcon(s ? "menu" : "menuAlt", eMenu, params.column);
    eMenu.classList.toggle("ag-header-menu-icon", !s);
    let r = this.shouldSuppressMenuHide();
    this.currentSuppressMenuHide = r;
    this.addManagedElementListeners(eMenu, {
      click: () => this.showColumnMenu(this.eMenu)
    });
    this.toggleMenuAlwaysShow(r);
  }
  toggleMenuAlwaysShow(e) {
    this.eMenu?.classList.toggle("ag-header-menu-always-show", e);
  }
  showColumnMenu(e) {
    let {
      currentSuppressMenuHide,
      params
    } = this;
    currentSuppressMenuHide || this.toggleMenuAlwaysShow(!0);
    params.showColumnMenu(e, () => {
      currentSuppressMenuHide || this.toggleMenuAlwaysShow(!1);
    });
  }
  onMenuKeyboardShortcut(e) {
    let {
      params,
      gos,
      beans,
      eMenu,
      eFilterButton
    } = this;
    let n = params.column;
    let l = tC(gos);
    if (e && !l) {
      if (beans.menuSvc?.isFilterMenuInHeaderEnabled(n)) {
        params.showFilter(eFilterButton ?? eMenu ?? this.getGui());
        return !0;
      }
    } else if (params.enableMenu) {
      this.showColumnMenu(eMenu ?? eFilterButton ?? this.getGui());
      return !0;
    }
    return !1;
  }
  setupSort() {
    let {
      sortSvc
    } = this.beans;
    if (!sortSvc) return;
    let {
      enableSorting,
      column
    } = this.params;
    if (this.currentSort = enableSorting, !this.eSortIndicator) {
      this.eSortIndicator = this.createBean(sortSvc.createSortIndicator(!0));
      let {
        eSortIndicator,
        eSortOrder,
        eSortAsc,
        eSortDesc,
        eSortMixed,
        eSortNone
      } = this;
      eSortIndicator.attachCustomElements(eSortOrder, eSortAsc, eSortDesc, eSortMixed, eSortNone);
    }
    this.eSortIndicator.setupSort(column);
    this.currentSort && sortSvc.setupHeader(this, column, this.eLabel);
  }
  setupFilterIcon() {
    let {
      eFilter,
      params
    } = this;
    eFilter && this.configureFilter(params.enableFilterIcon, eFilter, this.onFilterChangedIcon.bind(this), "filterActive");
  }
  setupFilterButton() {
    let {
      eFilterButton,
      params
    } = this;
    eFilterButton && (this.configureFilter(params.enableFilterButton, eFilterButton, this.onFilterChangedButton.bind(this), "filter") ? this.addManagedElementListeners(eFilterButton, {
      click: () => params.showFilter(eFilterButton)
    }) : this.eFilterButton = void 0);
  }
  configureFilter(e, t, i, s) {
    if (!e) {
      $$ei11(t);
      return !1;
    }
    let r = this.params.column;
    this.addInIcon(s, t, r);
    this.addManagedListeners(r, {
      filterChanged: i
    });
    i();
    return !0;
  }
  onFilterChangedIcon() {
    let e = this.params.column.isFilterActive();
    U(this.eFilter, e, {
      skipAriaHidden: !0
    });
  }
  onFilterChangedButton() {
    let e = this.params.column.isFilterActive();
    this.eFilterButton.classList.toggle("ag-filter-active", e);
  }
  getAnchorElementForMenu(e) {
    let {
      eFilterButton,
      eMenu
    } = this;
    return e ? eFilterButton ?? eMenu ?? this.getGui() : eMenu ?? eFilterButton ?? this.getGui();
  }
  destroy() {
    super.destroy();
    this.innerHeaderComponent && (this.destroyBean(this.innerHeaderComponent), this.innerHeaderComponent = void 0);
  }
};
var lF = class extends iS {
  constructor() {
    super(`<div class="ag-header-group-cell-label" role="presentation">
            <span data-ref="agLabel" class="ag-header-group-text" role="presentation"></span>
            <span data-ref="agOpened" class="ag-header-icon ag-header-expand-icon ag-header-expand-icon-expanded"></span>
            <span data-ref="agClosed" class="ag-header-icon ag-header-expand-icon ag-header-expand-icon-collapsed"></span>
        </div>`);
    this.agOpened = null;
    this.agClosed = null;
    this.agLabel = null;
    this.isLoadingInnerComponent = !1;
  }
  init(e) {
    let {
      userCompFactory
    } = this.beans;
    this.params = e;
    this.checkWarnings();
    this.workOutInnerHeaderGroupComponent(userCompFactory, e);
    this.setupLabel(e);
    this.addGroupExpandIcon(e);
    this.setupExpandIcons();
  }
  checkWarnings() {
    this.params.template && $$eW42(89);
  }
  workOutInnerHeaderGroupComponent(e, t) {
    let i = e.getCompDetails(t, ik, void 0, t);
    i && (this.isLoadingInnerComponent = !0, i.newAgStackInstance().then(e => {
      this.isLoadingInnerComponent = !1;
      e && (this.isAlive() ? (this.innerHeaderGroupComponent = e, this.agLabel.appendChild(e.getGui())) : this.destroyBean(e));
    }));
  }
  setupExpandIcons() {
    let {
      agOpened,
      agClosed,
      params: {
        columnGroup
      },
      beans
    } = this;
    this.addInIcon("columnGroupOpened", agOpened);
    this.addInIcon("columnGroupClosed", agClosed);
    let r = e => {
      if (tE(e)) return;
      let t = !columnGroup.isExpanded();
      beans.colGroupSvc.setColumnGroupOpened(columnGroup.getProvidedColumnGroup(), t, "uiColumnExpanded");
    };
    this.addTouchAndClickListeners(beans, agClosed, r);
    this.addTouchAndClickListeners(beans, agOpened, r);
    let o = e => {
      tP(e);
    };
    this.addManagedElementListeners(agClosed, {
      dblclick: o
    });
    this.addManagedElementListeners(agOpened, {
      dblclick: o
    });
    this.addManagedElementListeners(this.getGui(), {
      dblclick: r
    });
    this.updateIconVisibility();
    let n = columnGroup.getProvidedColumnGroup();
    let l = this.updateIconVisibility.bind(this);
    this.addManagedListeners(n, {
      expandedChanged: l,
      expandableChanged: l
    });
  }
  addTouchAndClickListeners(e, t, i) {
    e.touchSvc?.setupForHeaderGroup(this, t, i);
    this.addManagedElementListeners(t, {
      click: i
    });
  }
  updateIconVisibility() {
    let {
      agOpened,
      agClosed,
      params: {
        columnGroup
      }
    } = this;
    if (columnGroup.isExpandable()) {
      let s = columnGroup.isExpanded();
      U(agOpened, s);
      U(agClosed, !s);
    } else {
      U(agOpened, !1);
      U(agClosed, !1);
    }
  }
  addInIcon(e, t) {
    let i = rY(e, this.beans, null);
    i && t.appendChild(i);
  }
  addGroupExpandIcon(e) {
    if (!e.columnGroup.isExpandable()) {
      let {
        agOpened,
        agClosed
      } = this;
      U(agOpened, !1);
      U(agClosed, !1);
      return;
    }
  }
  setupLabel(e) {
    let {
      displayName,
      columnGroup
    } = e;
    let s = this.innerHeaderGroupComponent || this.isLoadingInnerComponent;
    if (ew(displayName) && !s) {
      let e = $$tN25(displayName, !0);
      this.agLabel.textContent = e;
    }
    this.addOrRemoveCssClass("ag-sticky-label", !columnGroup.getColGroupDef()?.suppressStickyLabel);
  }
  destroy() {
    super.destroy();
    this.innerHeaderGroupComponent && (this.destroyBean(this.innerHeaderGroupComponent), this.innerHeaderGroupComponent = void 0);
  }
};
var lA = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "touchSvc";
  }
  mockBodyContextMenu(e, t) {
    this.mockContextMenu(e, e.eBodyViewport, t);
  }
  mockHeaderContextMenu(e, t) {
    this.mockContextMenu(e, e.eGui, t);
  }
  mockRowContextMenu(e) {
    H() && this.mockContextMenu(e, e.element, (t, i, s) => {
      let {
        rowCtrl,
        cellCtrl
      } = e.getControlsForEventTarget(s?.target ?? null);
      cellCtrl?.column && cellCtrl.dispatchCellContextMenuEvent(s ?? null);
      this.beans.contextMenuSvc?.handleContextMenuMouseEvent(void 0, s, rowCtrl, cellCtrl);
    });
  }
  handleCellDoubleClick(e, t) {
    return !!(() => {
      if (!H() || tF("dblclick")) return !1;
      let t = new Date().getTime();
      let i = t - e.lastIPadMouseClickEvent < 200;
      e.lastIPadMouseClickEvent = t;
      return i;
    })() && (e.onCellDoubleClicked(t), t.preventDefault(), !0);
  }
  setupForHeader(e) {
    let {
      gos,
      sortSvc
    } = this.beans;
    if (gos.get("suppressTouch")) return;
    let {
      params,
      eMenu,
      eFilterButton
    } = e;
    let n = new oC(e.getGui(), !0);
    let l = e.shouldSuppressMenuHide();
    let a = l && ew(eMenu);
    let d = a ? new oC(eMenu, !0) : n;
    if (params.enableMenu && e.addManagedListeners(d, {
      [a ? "tap" : "longTap"]: e => params.showColumnMenuAfterMouseClick(e.touchStart)
    }), params.enableSorting && e.addManagedListeners(n, {
      tap: e => {
        let t = e.touchStart.target;
        l && (eMenu?.contains(t) || eFilterButton?.contains(t)) || sortSvc?.progressSort(params.column, !1, "uiColumnSorted");
      }
    }), params.enableFilterButton && eFilterButton) {
      let t = new oC(eFilterButton, !0);
      e.addManagedListeners(t, {
        tap: () => params.showFilter(eFilterButton)
      });
      e.addDestroyFunc(() => t.destroy());
    }
    e.addDestroyFunc(() => n.destroy());
    a && e.addDestroyFunc(() => d.destroy());
  }
  setupForHeaderGroup(e, t, i) {
    let s = new oC(t, !0);
    e.addManagedListeners(s, {
      tap: i
    });
    e.addDestroyFunc(() => s.destroy());
  }
  mockContextMenu(e, t, i) {
    if (!H()) return;
    let s = new oC(t);
    e.addManagedListeners(s, {
      longTap: e => {
        i(void 0, e.touchStart, e.touchEvent);
      }
    });
    e.addDestroyFunc(() => s.destroy());
  }
};
var lk = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "cellNavigation";
  }
  wireBeans(e) {
    this.rowSpanSvc = e.rowSpanSvc;
  }
  getNextCellToFocus(e, t, i = !1) {
    return i ? this.getNextCellToFocusWithCtrlPressed(e, t) : this.getNextCellToFocusWithoutCtrlPressed(e, t);
  }
  getNextCellToFocusWithCtrlPressed(e, t) {
    let i;
    let s;
    let r = e === i4.UP;
    let o = e === i4.DOWN;
    let n = e === i4.LEFT;
    let {
      pageBounds,
      gos,
      visibleCols
    } = this.beans;
    if (r || o) {
      s = r ? pageBounds.getFirstRow() : pageBounds.getLastRow();
      i = t.column;
    } else {
      let e = gos.get("enableRtl");
      s = t.rowIndex;
      i = (n !== e ? visibleCols.allCols : [...visibleCols.allCols].reverse()).find(e => this.isCellGoodToFocusOn({
        rowIndex: s,
        rowPinned: null,
        column: e
      }));
    }
    return i ? {
      rowIndex: s,
      rowPinned: null,
      column: i
    } : null;
  }
  getNextCellToFocusWithoutCtrlPressed(e, t) {
    let i = t;
    let s = !1;
    for (; !s;) {
      switch (e) {
        case i4.UP:
          i = this.getCellAbove(i);
          break;
        case i4.DOWN:
          i = this.getCellBelow(i);
          break;
        case i4.RIGHT:
          i = this.gos.get("enableRtl") ? this.getCellToLeft(i) : this.getCellToRight(i);
          break;
        case i4.LEFT:
          i = this.gos.get("enableRtl") ? this.getCellToRight(i) : this.getCellToLeft(i);
          break;
        default:
          i = null;
          $$eW42(8, {
            key: e
          });
      }
      s = !i || this.isCellGoodToFocusOn(i);
    }
    return i;
  }
  isCellGoodToFocusOn(e) {
    let t;
    let i = e.column;
    let {
      pinnedRowModel,
      rowModel
    } = this.beans;
    switch (e.rowPinned) {
      case "top":
        t = pinnedRowModel?.getPinnedTopRow(e.rowIndex);
        break;
      case "bottom":
        t = pinnedRowModel?.getPinnedBottomRow(e.rowIndex);
        break;
      default:
        t = rowModel.getRow(e.rowIndex);
    }
    return !!t && !this.isSuppressNavigable(i, t);
  }
  getCellToLeft(e) {
    if (!e) return null;
    let t = this.beans.visibleCols.getColBefore(e.column);
    return t ? {
      rowIndex: e.rowIndex,
      column: t,
      rowPinned: e.rowPinned
    } : null;
  }
  getCellToRight(e) {
    if (!e) return null;
    let t = this.beans.visibleCols.getColAfter(e.column);
    return t ? {
      rowIndex: e.rowIndex,
      column: t,
      rowPinned: e.rowPinned
    } : null;
  }
  getRowBelow(e) {
    let t = e.rowIndex;
    let i = e.rowPinned;
    let s = !1;
    let {
      pageBounds,
      pinnedRowModel,
      rowModel
    } = this.beans;
    if (this.isLastRowInContainer(e)) switch (i) {
      case "bottom":
        return null;
      case "top":
        if (rowModel.isRowsToRender()) return {
          rowIndex: pageBounds.getFirstRow(),
          rowPinned: null
        };
        if (pinnedRowModel?.isRowsToRender("bottom")) return {
          rowIndex: 0,
          rowPinned: "bottom"
        };
        return null;
      default:
        if (pinnedRowModel?.isRowsToRender("bottom")) return {
          rowIndex: 0,
          rowPinned: "bottom"
        };
        return null;
    } else i && (s = !0);
    let l = rowModel.getRow(e.rowIndex);
    return (s ? void 0 : this.getNextStickyPosition(l)) || {
      rowIndex: t + 1,
      rowPinned: i
    };
  }
  getNextStickyPosition(e, t) {
    let {
      gos,
      rowRenderer
    } = this.beans;
    if (!e7(gos) || !e || !e.sticky) return;
    let r = rowRenderer.getStickyTopRowCtrls().some(t => t.rowNode.rowIndex === e.rowIndex);
    let o = [];
    let n = (o = r ? [...rowRenderer.getStickyTopRowCtrls()].sort((e, t) => e.rowNode.rowIndex - t.rowNode.rowIndex) : [...rowRenderer.getStickyBottomRowCtrls()].sort((e, t) => t.rowNode.rowIndex - e.rowNode.rowIndex)).findIndex(t => t.rowNode.rowIndex === e.rowIndex);
    let l = o[n + (t ? -1 : 1)];
    if (l) return {
      rowIndex: l.rowNode.rowIndex,
      rowPinned: null
    };
  }
  getCellBelow(e) {
    if (!e) return null;
    let t = this.rowSpanSvc?.getCellEnd(e) ?? e;
    let i = this.getRowBelow(t);
    return i ? {
      rowIndex: i.rowIndex,
      column: e.column,
      rowPinned: i.rowPinned
    } : null;
  }
  isLastRowInContainer(e) {
    let t = e.rowPinned;
    let i = e.rowIndex;
    let {
      pinnedRowModel,
      pageBounds
    } = this.beans;
    return "top" === t ? (pinnedRowModel?.getPinnedTopRowCount() ?? -1) <= i : "bottom" === t ? (pinnedRowModel?.getPinnedBottomRowCount() ?? -1) <= i : pageBounds.getLastRow() <= i;
  }
  getRowAbove(e) {
    let t = e.rowIndex;
    let i = e.rowPinned;
    let {
      pageBounds,
      pinnedRowModel,
      rowModel
    } = this.beans;
    let n = i ? 0 === t : t === pageBounds.getFirstRow();
    let l = !1;
    let a = () => ({
      rowIndex: pinnedRowModel?.getPinnedTopRowCount() ?? -1,
      rowPinned: "top"
    });
    if (n) return "top" === i ? null : i && rowModel.isRowsToRender() ? {
      rowIndex: pageBounds.getLastRow(),
      rowPinned: null
    } : pinnedRowModel?.isRowsToRender("top") ? a() : null;
    i && (l = !0);
    let d = rowModel.getRow(e.rowIndex);
    return (l ? void 0 : this.getNextStickyPosition(d, !0)) || {
      rowIndex: t - 1,
      rowPinned: i
    };
  }
  getCellAbove(e) {
    if (!e) return null;
    let t = this.rowSpanSvc?.getCellStart(e) ?? e;
    let i = this.getRowAbove({
      rowIndex: t.rowIndex,
      rowPinned: t.rowPinned
    });
    return i ? {
      rowIndex: i.rowIndex,
      column: e.column,
      rowPinned: i.rowPinned
    } : null;
  }
  getNextTabbedCell(e, t) {
    return t ? this.getNextTabbedCellBackwards(e) : this.getNextTabbedCellForwards(e);
  }
  getNextTabbedCellForwards(e) {
    let {
      visibleCols,
      pagination
    } = this.beans;
    let s = visibleCols.allCols;
    let r = e.rowIndex;
    let o = e.rowPinned;
    let n = visibleCols.getColAfter(e.column);
    if (!n) {
      n = s[0];
      let t = this.getRowBelow(e);
      if (ev(t) || !t.rowPinned && !(pagination?.isRowInPage(t) ?? !0)) return null;
      r = t ? t.rowIndex : null;
      o = t ? t.rowPinned : null;
    }
    return {
      rowIndex: r,
      column: n,
      rowPinned: o
    };
  }
  getNextTabbedCellBackwards(e) {
    let {
      visibleCols,
      pagination
    } = this.beans;
    let s = visibleCols.allCols;
    let r = e.rowIndex;
    let o = e.rowPinned;
    let n = visibleCols.getColBefore(e.column);
    if (!n) {
      n = tq(s);
      let t = this.getRowAbove({
        rowIndex: e.rowIndex,
        rowPinned: e.rowPinned
      });
      if (ev(t) || !t.rowPinned && !(pagination?.isRowInPage(t) ?? !0)) return null;
      r = t ? t.rowIndex : null;
      o = t ? t.rowPinned : null;
    }
    return {
      rowIndex: r,
      column: n,
      rowPinned: o
    };
  }
  isSuppressNavigable(e, t) {
    let {
      suppressNavigable
    } = e.colDef;
    return "boolean" == typeof suppressNavigable ? suppressNavigable : "function" == typeof suppressNavigable && suppressNavigable(e.createColumnFunctionCallbackParams(t));
  }
};
var lM = class extends $$tM23 {
  constructor() {
    super();
    this.beanName = "navigation";
    this.onPageDown = eT(this.onPageDown, 100);
    this.onPageUp = eT(this.onPageUp, 100);
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, e => {
      this.gridBodyCon = e.gridBodyCtrl;
    });
  }
  handlePageScrollingKey(e, t = !1) {
    var i;
    let s = e.key;
    let r = e.altKey;
    let o = e.ctrlKey || e.metaKey;
    let n = !!this.beans.rangeSvc && e.shiftKey;
    i = this.gos;
    let l = tA(i, e.target, sh)?.getFocusedCellPosition() ?? null;
    let a = !1;
    switch (s) {
      case i4.PAGE_HOME:
      case i4.PAGE_END:
        o || r || (this.onHomeOrEndKey(s), a = !0);
        break;
      case i4.LEFT:
      case i4.RIGHT:
      case i4.UP:
      case i4.DOWN:
        if (!l) return !1;
        !o || r || n || (this.onCtrlUpDownLeftRight(s, l), a = !0);
        break;
      case i4.PAGE_DOWN:
      case i4.PAGE_UP:
        o || r || (a = this.handlePageUpDown(s, l, t));
    }
    a && e.preventDefault();
    return a;
  }
  handlePageUpDown(e, t, i) {
    i && (t = this.beans.focusSvc.getFocusedCell());
    return !!t && (e === i4.PAGE_UP ? this.onPageUp(t) : this.onPageDown(t), !0);
  }
  navigateTo(e) {
    let {
      scrollIndex,
      scrollType,
      scrollColumn,
      focusIndex,
      focusColumn
    } = e;
    let {
      scrollFeature
    } = this.gridBodyCon;
    ew(scrollColumn) && !scrollColumn.isPinned() && scrollFeature.ensureColumnVisible(scrollColumn);
    ew(scrollIndex) && scrollFeature.ensureIndexVisible(scrollIndex, scrollType);
    e.isAsync || scrollFeature.ensureIndexVisible(focusIndex);
    let {
      focusSvc,
      rangeSvc
    } = this.beans;
    focusSvc.setFocusedCell({
      rowIndex: focusIndex,
      column: focusColumn,
      rowPinned: null,
      forceBrowserFocus: !0
    });
    rangeSvc?.setRangeToCell({
      rowIndex: focusIndex,
      rowPinned: null,
      column: focusColumn
    });
  }
  onPageDown(e) {
    let t = this.beans;
    let i = lT(t);
    let s = this.getViewportHeight();
    let {
      pageBounds,
      rowModel,
      rowAutoHeight
    } = t;
    let l = pageBounds.getPixelOffset();
    let a = i.top + s;
    let d = rowModel.getRowIndexAtPixel(a + l);
    rowAutoHeight?.active ? this.navigateToNextPageWithAutoHeight(e, d) : this.navigateToNextPage(e, d);
  }
  onPageUp(e) {
    let t = this.beans;
    let i = lT(t);
    let {
      pageBounds,
      rowModel,
      rowAutoHeight
    } = t;
    let n = pageBounds.getPixelOffset();
    let l = i.top;
    let a = rowModel.getRowIndexAtPixel(l + n);
    rowAutoHeight?.active ? this.navigateToNextPageWithAutoHeight(e, a, !0) : this.navigateToNextPage(e, a, !0);
  }
  navigateToNextPage(e, t, i = !1) {
    let s;
    let {
      pageBounds,
      rowModel
    } = this.beans;
    let n = this.getViewportHeight();
    let l = pageBounds.getFirstRow();
    let a = pageBounds.getLastRow();
    let d = pageBounds.getPixelOffset();
    let h = rowModel.getRow(e.rowIndex);
    let u = i ? h?.rowHeight - n - d : n - d;
    let c = h?.rowTop + u;
    let g = rowModel.getRowIndexAtPixel(c + d);
    g === e.rowIndex && (t = g = e.rowIndex + (i ? -1 : 1));
    i ? (s = "bottom", g < l && (g = l), t < l && (t = l)) : (s = "top", g > a && (g = a), t > a && (t = a));
    this.isRowTallerThanView(rowModel.getRow(g)) && (t = g, s = "top");
    this.navigateTo({
      scrollIndex: t,
      scrollType: s,
      scrollColumn: null,
      focusIndex: g,
      focusColumn: e.column
    });
  }
  navigateToNextPageWithAutoHeight(e, t, i = !1) {
    this.navigateTo({
      scrollIndex: t,
      scrollType: i ? "bottom" : "top",
      scrollColumn: null,
      focusIndex: t,
      focusColumn: e.column
    });
    setTimeout(() => {
      let s = this.getNextFocusIndexForAutoHeight(e, i);
      this.navigateTo({
        scrollIndex: t,
        scrollType: i ? "bottom" : "top",
        scrollColumn: null,
        focusIndex: s,
        focusColumn: e.column,
        isAsync: !0
      });
    }, 50);
  }
  getNextFocusIndexForAutoHeight(e, t = !1) {
    let i = t ? -1 : 1;
    let s = this.getViewportHeight();
    let {
      pageBounds,
      rowModel
    } = this.beans;
    let n = pageBounds.getLastRow();
    let l = 0;
    let a = e.rowIndex;
    for (; a >= 0 && a <= n;) {
      let e = rowModel.getRow(a);
      if (e) {
        let t = e.rowHeight ?? 0;
        if (l + t > s) break;
        l += t;
      }
      a += i;
    }
    return Math.max(0, Math.min(a, n));
  }
  getViewportHeight() {
    let e = this.beans;
    let t = lT(e);
    let i = this.beans.scrollVisibleSvc.getScrollbarWidth();
    let s = t.bottom - t.top;
    e.ctrlsSvc.get("center").isHorizontalScrollShowing() && (s -= i);
    return s;
  }
  isRowTallerThanView(e) {
    if (!e) return !1;
    let t = e.rowHeight;
    return "number" == typeof t && t > this.getViewportHeight();
  }
  onCtrlUpDownLeftRight(e, t) {
    let i = this.beans.cellNavigation.getNextCellToFocus(e, t, !0);
    let {
      rowIndex
    } = i;
    let r = i.column;
    this.navigateTo({
      scrollIndex: rowIndex,
      scrollType: null,
      scrollColumn: r,
      focusIndex: rowIndex,
      focusColumn: r
    });
  }
  onHomeOrEndKey(e) {
    let t = e === i4.PAGE_HOME;
    let {
      visibleCols,
      pageBounds,
      rowModel
    } = this.beans;
    let o = visibleCols.allCols;
    let n = t ? pageBounds.getFirstRow() : pageBounds.getLastRow();
    let l = rowModel.getRow(n);
    if (!l) return;
    let a = (t ? o : [...o].reverse()).find(e => !e.isSuppressNavigable(l));
    a && this.navigateTo({
      scrollIndex: n,
      scrollType: null,
      scrollColumn: a,
      focusIndex: n,
      focusColumn: a
    });
  }
  onTabKeyDown(e, t) {
    let i = t.shiftKey;
    let s = this.tabToNextCellCommon(e, i, t);
    let r = this.beans;
    let {
      ctrlsSvc,
      pageBounds,
      focusSvc,
      gos
    } = r;
    if (!1 !== s) {
      s ? t.preventDefault() : null === s && ctrlsSvc.get("gridCtrl").allowFocusForNextCoreContainer(i);
      return;
    }
    if (i) {
      let {
        rowIndex,
        rowPinned
      } = e.getRowPosition();
      (rowPinned ? 0 === rowIndex : rowIndex === pageBounds.getFirstRow()) && (0 === gos.get("headerHeight") || sr(r) ? sn(r, !0, !0) : (t.preventDefault(), focusSvc.focusPreviousFromFirstCell(t)));
    } else {
      e instanceof sc && e.focusCell(!0);
      (!i && focusSvc.focusOverlay(!1) || sn(r, i)) && t.preventDefault();
    }
  }
  tabToNextCell(e, t) {
    let i = this.beans;
    let {
      focusSvc,
      rowRenderer
    } = i;
    let o = focusSvc.getFocusedCell();
    if (!o) return !1;
    let n = sR(i, o);
    return !!(n || (n = rowRenderer.getRowByPosition(o)) && n.isFullWidth()) && !!this.tabToNextCellCommon(n, e, t);
  }
  tabToNextCellCommon(e, t, i) {
    let s;
    let r = e.editing;
    if (!r && e instanceof sc) {
      let t = e.rowCtrl;
      t && (r = t.editing);
    }
    return null === (s = r ? "fullRow" === this.gos.get("editType") ? this.moveToNextEditingRow(e, t, i) : this.moveToNextEditingCell(e, t, i) : this.moveToNextCellNotEditing(e, t)) ? s : s || !!this.beans.focusSvc.focusedHeader;
  }
  moveToNextEditingCell(e, t, i = null) {
    let s = e.cellPosition;
    e.eGui.focus();
    e.stopEditing();
    let r = this.findNextCellToFocusOn(s, t, !0);
    return !1 === r ? null : null != r && (this.beans.editSvc?.startEditing(r, null, !0, i), r.focusCell(!1), !0);
  }
  moveToNextEditingRow(e, t, i = null) {
    let s = e.cellPosition;
    let r = this.findNextCellToFocusOn(s, t, !0);
    if (!1 === r) return null;
    if (null == r) return !1;
    let o = r.cellPosition;
    let n = this.isCellEditable(s);
    let l = this.isCellEditable(o);
    let a = o && s.rowIndex === o.rowIndex && s.rowPinned === o.rowPinned;
    let {
      editSvc,
      rowEditSvc
    } = this.beans;
    if (n && editSvc?.setFocusOutOnEditor(e), !a) {
      let t = e.rowCtrl;
      editSvc?.stopRowEditing(t);
      let s = r.rowCtrl;
      rowEditSvc?.startEditing(s, void 0, void 0, i);
    }
    l ? (editSvc?.setFocusInOnEditor(r), r.focusCell()) : r.focusCell(!0);
    return !0;
  }
  moveToNextCellNotEditing(e, t) {
    let i;
    let s = this.beans.visibleCols.allCols;
    i = e instanceof s0 ? {
      ...e.getRowPosition(),
      column: t ? s[0] : tq(s)
    } : e.getFocusedCellPosition();
    let r = this.findNextCellToFocusOn(i, t, !1);
    if (!1 === r) return null;
    if (r instanceof sc) r.focusCell(!0);else if (r) return this.tryToFocusFullWidthRow(r.getRowPosition(), t);
    return ew(r);
  }
  findNextCellToFocusOn(e, t, i) {
    let s = e;
    let r = this.beans;
    let {
      cellNavigation,
      gos,
      focusSvc,
      rowRenderer,
      rangeSvc
    } = r;
    for (;;) {
      e !== s && (e = s);
      t || (s = this.getLastCellOfColSpan(s));
      s = cellNavigation.getNextTabbedCell(s, t);
      let h = gos.getCallback("tabToNextCell");
      if (ew(h)) {
        let r = h({
          backwards: t,
          editing: i,
          previousCellPosition: e,
          nextCellPosition: s || null
        });
        if (!0 === r) s = e;else {
          if (!1 === r) return !1;
          s = {
            rowIndex: r.rowIndex,
            column: r.column,
            rowPinned: r.rowPinned
          };
        }
      }
      if (!s) return null;
      if (s.rowIndex < 0) {
        let e = rD(r);
        focusSvc.focusHeaderPosition({
          headerPosition: {
            headerRowIndex: e + s.rowIndex,
            column: s.column
          },
          fromCell: !0
        });
        return null;
      }
      let u = "fullRow" === gos.get("editType");
      if (i && !u && !this.isCellEditable(s)) continue;
      this.ensureCellVisible(s);
      let c = sR(r, s);
      if (!c) {
        let e = rowRenderer.getRowByPosition(s);
        if (!e || !e.isFullWidth() || i) continue;
        return e;
      }
      if (!cellNavigation.isSuppressNavigable(c.column, c.rowNode)) {
        c.setFocusedCellPosition(s);
        rangeSvc?.setRangeToCell(s);
        return c;
      }
    }
  }
  isCellEditable(e) {
    let t = this.lookupRowNodeForCell(e);
    return !!t && e.column.isCellEditable(t);
  }
  lookupRowNodeForCell({
    rowIndex: e,
    rowPinned: t
  }) {
    let {
      pinnedRowModel,
      rowModel
    } = this.beans;
    return "top" === t ? pinnedRowModel?.getPinnedTopRow(e) : "bottom" === t ? pinnedRowModel?.getPinnedBottomRow(e) : rowModel.getRow(e);
  }
  navigateToNextCell(e, t, i, s) {
    let r = i;
    let o = !1;
    let n = this.beans;
    let {
      cellNavigation,
      focusSvc,
      gos
    } = n;
    for (; r && (r === i || !this.isValidNavigateCell(r));) {
      gos.get("enableRtl") ? t === i4.LEFT && (r = this.getLastCellOfColSpan(r)) : t === i4.RIGHT && (r = this.getLastCellOfColSpan(r));
      o = ev(r = cellNavigation.getNextCellToFocus(t, r));
    }
    if (o && e && e.key === i4.UP && (r = {
      rowIndex: -1,
      rowPinned: null,
      column: i.column
    }), s) {
      let s = gos.getCallback("navigateToNextCell");
      if (ew(s)) {
        let o = s({
          key: t,
          previousCellPosition: i,
          nextCellPosition: r || null,
          event: e
        });
        r = ew(o) ? {
          rowPinned: o.rowPinned,
          rowIndex: o.rowIndex,
          column: o.column
        } : null;
      }
    }
    if (!r) return;
    if (r.rowIndex < 0) {
      let t = rD(n);
      focusSvc.focusHeaderPosition({
        headerPosition: {
          headerRowIndex: t + r.rowIndex,
          column: i.column
        },
        event: e || void 0,
        fromCell: !0
      });
      return;
    }
    let h = this.getNormalisedPosition(r);
    h ? this.focusPosition(h) : this.tryToFocusFullWidthRow(r);
  }
  getNormalisedPosition(e) {
    if (this.beans.spannedRowRenderer?.getCellByPosition(e)) return e;
    this.ensureCellVisible(e);
    let t = sR(this.beans, e);
    return t ? (e = t.getFocusedCellPosition(), this.ensureCellVisible(e), e) : null;
  }
  tryToFocusFullWidthRow(e, t) {
    let {
      visibleCols,
      rowRenderer,
      focusSvc,
      eventSvc
    } = this.beans;
    let n = visibleCols.allCols;
    let l = rowRenderer.getRowByPosition(e);
    if (!l || !l.isFullWidth()) return !1;
    let a = focusSvc.getFocusedCell();
    let d = {
      rowIndex: e.rowIndex,
      rowPinned: e.rowPinned,
      column: e.column || (t ? tq(n) : n[0])
    };
    this.focusPosition(d);
    let h = t;
    eventSvc.dispatchEvent({
      type: "fullWidthRowFocused",
      rowIndex: d.rowIndex,
      rowPinned: d.rowPinned,
      column: d.column,
      isFullWidthCell: !0,
      fromBelow: h
    });
    return !0;
  }
  focusPosition(e) {
    let {
      focusSvc,
      rangeSvc
    } = this.beans;
    focusSvc.setFocusedCell({
      rowIndex: e.rowIndex,
      column: e.column,
      rowPinned: e.rowPinned,
      forceBrowserFocus: !0
    });
    rangeSvc?.setRangeToCell(e);
  }
  isValidNavigateCell(e) {
    return !!sS(this.beans, e);
  }
  getLastCellOfColSpan(e) {
    let t = sR(this.beans, e);
    if (!t) return e;
    let i = t.getColSpanningList();
    return 1 === i.length ? e : {
      rowIndex: e.rowIndex,
      column: tq(i),
      rowPinned: e.rowPinned
    };
  }
  ensureCellVisible(e) {
    let t = e7(this.gos);
    let i = this.beans.rowModel.getRow(e.rowIndex);
    let s = t && i?.sticky;
    let {
      scrollFeature
    } = this.gridBodyCon;
    !s && ev(e.rowPinned) && scrollFeature.ensureIndexVisible(e.rowIndex);
    e.column.isPinned() || scrollFeature.ensureColumnVisible(e.column);
  }
};
function lT(e) {
  return e.ctrlsSvc.getScrollFeature().getVScrollPosition();
}
var lI = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "pageBoundsListener";
  }
  postConstruct() {
    this.addManagedEventListeners({
      modelUpdated: this.onModelUpdated.bind(this),
      recalculateRowBounds: this.calculatePages.bind(this)
    });
    this.onModelUpdated();
  }
  onModelUpdated(e) {
    this.calculatePages();
    this.eventSvc.dispatchEvent({
      type: "paginationChanged",
      animate: e?.animate ?? !1,
      newData: e?.newData ?? !1,
      newPage: e?.newPage ?? !1,
      newPageSize: e?.newPageSize ?? !1,
      keepRenderedRows: e?.keepRenderedRows ?? !1
    });
  }
  calculatePages() {
    let {
      pageBounds,
      pagination,
      rowModel
    } = this.beans;
    pagination ? pagination.calculatePages() : pageBounds.calculateBounds(0, rowModel.getRowCount() - 1);
  }
};
var lL = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "pageBounds";
    this.pixelOffset = 0;
  }
  getFirstRow() {
    return this.topRowBounds?.rowIndex ?? -1;
  }
  getLastRow() {
    return this.bottomRowBounds?.rowIndex ?? -1;
  }
  getCurrentPageHeight() {
    let {
      topRowBounds,
      bottomRowBounds
    } = this;
    return topRowBounds && bottomRowBounds ? Math.max(bottomRowBounds.rowTop + bottomRowBounds.rowHeight - topRowBounds.rowTop, 0) : 0;
  }
  getCurrentPagePixelRange() {
    let {
      topRowBounds,
      bottomRowBounds
    } = this;
    return {
      pageFirstPixel: topRowBounds?.rowTop ?? 0,
      pageLastPixel: bottomRowBounds ? bottomRowBounds.rowTop + bottomRowBounds.rowHeight : 0
    };
  }
  calculateBounds(e, t) {
    let {
      rowModel
    } = this.beans;
    let s = rowModel.getRowBounds(e);
    s && (s.rowIndex = e);
    this.topRowBounds = s;
    let r = rowModel.getRowBounds(t);
    r && (r.rowIndex = t);
    this.bottomRowBounds = r;
    this.calculatePixelOffset();
  }
  getPixelOffset() {
    return this.pixelOffset;
  }
  calculatePixelOffset() {
    let e = this.topRowBounds?.rowTop ?? 0;
    this.pixelOffset !== e && (this.pixelOffset = e, this.eventSvc.dispatchEvent({
      type: "paginationPixelOffsetChanged"
    }));
  }
};
var lO = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.isLeft = e;
    this.elements = t;
    this.getWidth = e ? () => this.beans.pinnedCols.leftWidth : () => this.beans.pinnedCols.rightWidth;
  }
  postConstruct() {
    this.addManagedEventListeners({
      [`${this.isLeft ? "left" : "right"}PinnedWidthChanged`]: this.onPinnedWidthChanged.bind(this)
    });
  }
  onPinnedWidthChanged() {
    let e = this.getWidth();
    let t = e > 0;
    for (let i of this.elements) i && (U(i, t), eh(i, e));
  }
};
var lG = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "pinnedCols";
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, e => {
      this.gridBodyCtrl = e.gridBodyCtrl;
    });
    let e = this.checkContainerWidths.bind(this);
    this.addManagedEventListeners({
      displayedColumnsChanged: e,
      displayedColumnsWidthChanged: e
    });
    this.addManagedPropertyListener("domLayout", e);
  }
  checkContainerWidths() {
    let {
      gos,
      visibleCols,
      eventSvc
    } = this.beans;
    let s = ej(gos, "print");
    let r = s ? 0 : visibleCols.getColsLeftWidth();
    let o = s ? 0 : visibleCols.getDisplayedColumnsRightWidth();
    r != this.leftWidth && (this.leftWidth = r, eventSvc.dispatchEvent({
      type: "leftPinnedWidthChanged"
    }));
    o != this.rightWidth && (this.rightWidth = o, eventSvc.dispatchEvent({
      type: "rightPinnedWidthChanged"
    }));
  }
  keepPinnedColumnsNarrowerThanViewport() {
    let e = q(this.gridBodyCtrl.eBodyViewport);
    if (e <= 50) return;
    let t = this.getPinnedColumnsOverflowingViewport(e - 50);
    let i = this.gos.getCallback("processUnpinnedColumns");
    let {
      columns,
      hasLockedPinned
    } = t;
    let o = s;
    (o.length || hasLockedPinned) && (i && (o = i({
      columns: o,
      viewportWidth: e
    })), o && o.length && (o = o.filter(e => !t6(e)), this.setColsPinned(o, null, "viewportSizeFeature")));
  }
  createPinnedWidthFeature(e, ...t) {
    return new lO(e, t);
  }
  setColsPinned(e, t, i) {
    let s;
    let {
      colModel,
      colAnimation,
      visibleCols,
      gos
    } = this.beans;
    if (!colModel.cols || !e?.length) return;
    if (ej(gos, "print")) {
      $$eW42(37);
      return;
    }
    colAnimation?.start();
    s = !0 === t || "left" === t ? "left" : "right" === t ? "right" : null;
    let a = [];
    e.forEach(e => {
      if (!e) return;
      let t = colModel.getCol(e);
      t && t.getPinned() !== s && (this.setColPinned(t, s), a.push(t));
    });
    a.length && (visibleCols.refresh(i), ia(this.eventSvc, a, i));
    colAnimation?.finish();
  }
  initCol(e) {
    let {
      pinned,
      initialPinned
    } = e.colDef;
    void 0 !== pinned ? this.setColPinned(e, pinned) : this.setColPinned(e, initialPinned);
  }
  setColPinned(e, t) {
    !0 === t || "left" === t ? e.pinned = "left" : "right" === t ? e.pinned = "right" : e.pinned = null;
    e.dispatchStateUpdatedEvent("pinned");
  }
  setupHeaderPinnedWidth(e) {
    let {
      scrollVisibleSvc
    } = this.beans;
    if (null == e.pinned) return;
    let i = "left" === e.pinned;
    let s = "right" === e.pinned;
    e.hidden = !0;
    let r = () => {
      let r = i ? this.leftWidth : this.rightWidth;
      if (null == r) return;
      let o = 0 == r;
      let n = e.hidden !== o;
      let l = this.gos.get("enableRtl");
      let a = scrollVisibleSvc.getScrollbarWidth();
      let d = scrollVisibleSvc.verticalScrollShowing && (l && i || !l && s);
      e.comp.setPinnedContainerWidth(`${d ? r + a : r}px`);
      e.comp.setDisplayed(!o);
      n && (e.hidden = o, e.refresh());
    };
    e.addManagedEventListeners({
      leftPinnedWidthChanged: r,
      rightPinnedWidthChanged: r,
      scrollVisibilityChanged: r,
      scrollbarWidthChanged: r
    });
  }
  getHeaderResizeDiff(e, t) {
    if (t.getPinned()) {
      let {
        leftWidth,
        rightWidth
      } = this;
      let s = q(this.beans.ctrlsSvc.getGridBodyCtrl().eBodyViewport) - 50;
      if (leftWidth + rightWidth + e > s) {
        if (!(s > leftWidth + rightWidth)) return 0;
        e = s - leftWidth - rightWidth;
      }
    }
    return e;
  }
  getPinnedColumnsOverflowingViewport(e) {
    let t = (this.rightWidth ?? 0) + (this.leftWidth ?? 0);
    let i = !1;
    if (t < e) return {
      columns: [],
      hasLockedPinned: i
    };
    let {
      visibleCols
    } = this.beans;
    let r = [...visibleCols.leftCols];
    let o = [...visibleCols.rightCols];
    let n = 0;
    let l = 0;
    let a = [];
    let d = t - 0 - e;
    for (; (l < r.length || n < o.length) && d > 0;) {
      if (n < o.length) {
        let e = o[n++];
        if (e.colDef.lockPinned) {
          i = !0;
          continue;
        }
        d -= e.getActualWidth();
        a.push(e);
      }
      if (l < r.length && d > 0) {
        let e = r[l++];
        if (e.colDef.lockPinned) {
          i = !0;
          continue;
        }
        d -= e.getActualWidth();
        a.push(e);
      }
    }
    return {
      columns: a,
      hasLockedPinned: i
    };
  }
};
var lH = class extends $$tM23 {
  constructor() {
    super();
    this.beanName = "ariaAnnounce";
    this.descriptionContainer = null;
    this.pendingAnnouncements = new Map();
    this.lastAnnouncement = "";
    this.updateAnnouncement = eM(this, this.updateAnnouncement.bind(this), 200);
  }
  postConstruct() {
    let e = this.beans;
    let t = e1(e);
    let i = this.descriptionContainer = t.createElement("div");
    i.classList.add("ag-aria-description-container");
    C(i, "live", "polite");
    C(i, "relevant", "additions text");
    C(i, "atomic", !0);
    e.eGridDiv.appendChild(i);
  }
  announceValue(e, t) {
    this.pendingAnnouncements.set(t, e);
    this.updateAnnouncement();
  }
  updateAnnouncement() {
    if (!this.descriptionContainer) return;
    let e = Array.from(this.pendingAnnouncements.values()).join(". ");
    this.pendingAnnouncements.clear();
    this.descriptionContainer.textContent = "";
    setTimeout(() => {
      if (this.isAlive() && this.descriptionContainer) {
        let t = e;
        this.lastAnnouncement === t && (t = `${t}.`);
        this.lastAnnouncement = t;
        this.descriptionContainer.textContent = t;
      }
    }, 50);
  }
  destroy() {
    super.destroy();
    let {
      descriptionContainer
    } = this;
    descriptionContainer && (et(descriptionContainer), descriptionContainer.parentElement?.removeChild(descriptionContainer));
    this.descriptionContainer = null;
    this.pendingAnnouncements.clear();
  }
};
var lN = class extends iS {
  constructor() {
    super(`
            <div class="ag-overlay" role="presentation">
                <div class="ag-overlay-panel" role="presentation">
                    <div class="ag-overlay-wrapper" data-ref="eOverlayWrapper" role="presentation"></div>
                </div>
            </div>`);
    this.eOverlayWrapper = null;
    this.activePromise = null;
    this.activeOverlay = null;
    this.updateListenerDestroyFunc = null;
    this.activeCssClass = null;
    this.elToFocusAfter = null;
    this.registerCSS(".ag-overlay{inset:0;pointer-events:none;position:absolute;z-index:2}.ag-overlay-panel,.ag-overlay-wrapper{display:flex;height:100%;width:100%}.ag-overlay-wrapper{align-items:center;flex:none;justify-content:center;text-align:center}.ag-overlay-loading-wrapper{pointer-events:all}.ag-overlay-loading-center{background:var(--ag-background-color);border:1px solid var(--ag-border-color);border-radius:var(--ag-border-radius);box-shadow:var(--ag-popup-shadow);padding:var(--ag-spacing)}");
  }
  handleKeyDown(e) {
    if (e.key !== i4.TAB || e.defaultPrevented || tE(e)) return;
    let t = this.beans;
    if (!si(t, this.eOverlayWrapper, !1, e.shiftKey)) (e.shiftKey ? t.focusSvc.focusGridView({
      column: tq(t.visibleCols.allCols),
      backwards: !0,
      canFocusOverlay: !1
    }) : sn(t, !1)) && e.preventDefault();
  }
  updateLayoutClasses(e, t) {
    let i = this.eOverlayWrapper.classList;
    let {
      AUTO_HEIGHT,
      NORMAL,
      PRINT
    } = sz;
    i.toggle(AUTO_HEIGHT, t.autoHeight);
    i.toggle(NORMAL, t.normal);
    i.toggle(PRINT, t.print);
  }
  postConstruct() {
    this.createManagedBean(new sU(this));
    this.setDisplayed(!1, {
      skipAriaHidden: !0
    });
    this.beans.overlays.setOverlayWrapperComp(this);
    this.addManagedElementListeners(this.getFocusableElement(), {
      keydown: this.handleKeyDown.bind(this)
    });
  }
  setWrapperTypeClass(e) {
    let t = this.eOverlayWrapper.classList;
    this.activeCssClass && t.toggle(this.activeCssClass, !1);
    this.activeCssClass = e;
    t.toggle(e, !0);
  }
  showOverlay(e, t, i, s) {
    if (this.setWrapperTypeClass(t), this.destroyActiveOverlay(), this.elToFocusAfter = null, this.activePromise = e, e) {
      if (this.setDisplayed(!0, {
        skipAriaHidden: !0
      }), i && this.isGridFocused()) {
        let e = e3(this.beans);
        e && !e4(this.beans) && (this.elToFocusAfter = e);
      }
      e.then(t => {
        if (this.activePromise !== e) {
          this.activeOverlay !== t && (this.destroyBean(t), t = null);
          return;
        }
        if (this.activePromise = null, t) {
          if (this.activeOverlay !== t && (this.eOverlayWrapper.appendChild(t.getGui()), this.activeOverlay = t, s)) {
            let e = t;
            this.updateListenerDestroyFunc = this.addManagedPropertyListener(s, ({
              currentValue: t
            }) => {
              e.refresh?.(ty(this.gos, {
                ...(t ?? {})
              }));
            });
          }
          i && this.isGridFocused() && st(this.eOverlayWrapper);
        }
      });
    }
  }
  updateOverlayWrapperPaddingTop(e) {
    this.eOverlayWrapper.style.setProperty("padding-top", `${e}px`);
  }
  destroyActiveOverlay() {
    this.activePromise = null;
    let e = this.activeOverlay;
    if (!e) return;
    let t = this.elToFocusAfter;
    this.activeOverlay = null;
    this.elToFocusAfter = null;
    t && !this.isGridFocused() && (t = null);
    let i = this.updateListenerDestroyFunc;
    i && (i(), this.updateListenerDestroyFunc = null);
    this.destroyBean(e);
    et(this.eOverlayWrapper);
    t?.focus?.({
      preventScroll: !0
    });
  }
  hideOverlay() {
    this.destroyActiveOverlay();
    this.setDisplayed(!1, {
      skipAriaHidden: !0
    });
  }
  isGridFocused() {
    let e = e3(this.beans);
    return !!e && this.beans.eGridDiv.contains(e);
  }
  destroy() {
    this.elToFocusAfter = null;
    this.destroyActiveOverlay();
    this.beans.overlays.setOverlayWrapperComp(void 0);
    super.destroy();
  }
};
var lB = {
  selector: "AG-OVERLAY-WRAPPER",
  component: lN
};
var lV = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "overlays";
    this.state = 0;
    this.showInitialOverlay = !0;
    this.wrapperPadding = 0;
  }
  postConstruct() {
    this.isClientSide = $$eK33(this.gos);
    this.isServerSide = !this.isClientSide && $$e_18(this.gos);
    let e = () => this.updateOverlayVisibility();
    this.addManagedEventListeners({
      newColumnsLoaded: e,
      rowDataUpdated: e,
      gridSizeChanged: this.refreshWrapperPadding.bind(this),
      rowCountReady: () => {
        this.showInitialOverlay = !1;
        this.updateOverlayVisibility();
      }
    });
    this.addManagedPropertyListener("loading", e);
  }
  setOverlayWrapperComp(e) {
    this.eWrapper = e;
    this.updateOverlayVisibility();
  }
  isVisible() {
    return 0 !== this.state && !!this.eWrapper;
  }
  isExclusive() {
    return 1 === this.state && !!this.eWrapper;
  }
  showLoadingOverlay() {
    this.showInitialOverlay = !1;
    let e = this.gos;
    let t = e.get("loading");
    !t && (void 0 !== t || e.get("suppressLoadingOverlay")) || this.doShowLoadingOverlay();
  }
  showNoRowsOverlay() {
    this.showInitialOverlay = !1;
    let e = this.gos;
    e.get("loading") || e.get("suppressNoRowsOverlay") || this.doShowNoRowsOverlay();
  }
  hideOverlay() {
    if (this.showInitialOverlay = !1, this.gos.get("loading")) {
      $$eW42(99);
      return;
    }
    this.doHideOverlay();
  }
  getOverlayWrapperSelector() {
    return lB;
  }
  getOverlayWrapperCompClass() {
    return lN;
  }
  updateOverlayVisibility() {
    if (!this.eWrapper) {
      this.state = 0;
      return;
    }
    let {
      state,
      isClientSide,
      isServerSide,
      beans: {
        gos,
        colModel,
        rowModel
      }
    } = this;
    let n = this.gos.get("loading");
    void 0 !== n && (this.showInitialOverlay = !1);
    this.showInitialOverlay && void 0 === n && !gos.get("suppressLoadingOverlay") && (n = !gos.get("columnDefs") || !colModel.ready || !gos.get("rowData") && isClientSide);
    n ? 1 !== state && this.doShowLoadingOverlay() : (this.showInitialOverlay = !1, isClientSide && rowModel.isEmpty() && !gos.get("suppressNoRowsOverlay") ? 2 !== state && this.doShowNoRowsOverlay() : 1 !== state && (isServerSide || 0 === state) || this.doHideOverlay());
  }
  doShowLoadingOverlay() {
    var e;
    var t;
    this.eWrapper && (this.state = 1, this.showOverlay((e = this.beans.userCompFactory, t = ty(this.gos, {}), e.getCompDetailsFromGridOptions(iO, "agLoadingOverlay", t, !0)), "ag-overlay-loading-wrapper", "loadingOverlayComponentParams"), this.updateExclusive());
  }
  doShowNoRowsOverlay() {
    var e;
    var t;
    this.eWrapper && (this.state = 2, this.showOverlay((e = this.beans.userCompFactory, t = ty(this.gos, {}), e.getCompDetailsFromGridOptions(iG, "agNoRowsOverlay", t, !0)), "ag-overlay-no-rows-wrapper", "noRowsOverlayComponentParams"), this.updateExclusive());
  }
  doHideOverlay() {
    this.eWrapper && (this.state = 0, this.eWrapper.hideOverlay(), this.updateExclusive());
  }
  showOverlay(e, t, i) {
    let s = e?.newAgStackInstance() ?? null;
    this.eWrapper?.showOverlay(s, t, this.isExclusive(), i);
    this.refreshWrapperPadding();
  }
  updateExclusive() {
    let e = this.exclusive;
    this.exclusive = this.isExclusive();
    this.exclusive !== e && this.eventSvc.dispatchEvent({
      type: "overlayExclusiveChanged"
    });
  }
  refreshWrapperPadding() {
    let e = this.eWrapper;
    if (!e) return;
    let t = 0;
    if (2 === this.state) {
      let e = this.beans.ctrlsSvc.get("gridHeaderCtrl");
      t = e?.headerHeight || 0;
    } else 0 !== this.wrapperPadding && (t = 0);
    this.wrapperPadding !== t && (this.wrapperPadding = t, e.updateOverlayWrapperPaddingTop(t));
  }
};
var lW = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "rowContainerHeight";
    this.scrollY = 0;
    this.uiBodyHeight = 0;
  }
  postConstruct() {
    this.addManagedEventListeners({
      bodyHeightChanged: this.updateOffset.bind(this)
    });
    this.maxDivHeight = function () {
      if (void 0 !== h) return h;
      if (!document.body) return -1;
      let e = 1e6;
      let t = O() ? 6e6 : 1e9;
      let i = document.createElement("div");
      for (document.body.appendChild(i);;) {
        let s = 2 * e;
        if (i.style.height = s + "px", s > t || i.clientHeight !== s) break;
        e = s;
      }
      document.body.removeChild(i);
      h = e;
      return e;
    }();
    ex(this.gos, "RowContainerHeightService - maxDivHeight = " + this.maxDivHeight);
  }
  updateOffset() {
    if (!this.stretching) return;
    let e = this.beans.ctrlsSvc.getScrollFeature().getVScrollPosition().top;
    let t = this.getUiBodyHeight();
    (e !== this.scrollY || t !== this.uiBodyHeight) && (this.scrollY = e, this.uiBodyHeight = t, this.calculateOffset());
  }
  calculateOffset() {
    this.setUiContainerHeight(this.maxDivHeight);
    this.pixelsToShave = this.modelHeight - this.uiContainerHeight;
    this.maxScrollY = this.uiContainerHeight - this.uiBodyHeight;
    let e = this.scrollY / this.maxScrollY;
    let t = e * this.pixelsToShave;
    ex(this.gos, `RowContainerHeightService - Div Stretch Offset = ${t} (${this.pixelsToShave} * ${e})`);
    this.setDivStretchOffset(t);
  }
  setUiContainerHeight(e) {
    e !== this.uiContainerHeight && (this.uiContainerHeight = e, this.eventSvc.dispatchEvent({
      type: "rowContainerHeightChanged"
    }));
  }
  clearOffset() {
    this.setUiContainerHeight(this.modelHeight);
    this.pixelsToShave = 0;
    this.setDivStretchOffset(0);
  }
  setDivStretchOffset(e) {
    let t = "number" == typeof e ? Math.floor(e) : null;
    this.divStretchOffset !== t && (this.divStretchOffset = t, this.eventSvc.dispatchEvent({
      type: "heightScaleChanged"
    }));
  }
  setModelHeight(e) {
    this.modelHeight = e;
    this.stretching = null != e && this.maxDivHeight > 0 && e > this.maxDivHeight;
    this.stretching ? this.calculateOffset() : this.clearOffset();
  }
  getRealPixelPosition(e) {
    return e - this.divStretchOffset;
  }
  getUiBodyHeight() {
    let e = this.beans.ctrlsSvc.getScrollFeature().getVScrollPosition();
    return e.bottom - e.top;
  }
  getScrollPositionForPixel(e) {
    if (this.pixelsToShave <= 0) return e;
    let t = this.modelHeight - this.getUiBodyHeight();
    return this.maxScrollY * (e / t);
  }
};
var lz = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "rowRenderer";
    this.destroyFuncsForColumnListeners = [];
    this.rowCtrlsByRowIndex = {};
    this.zombieRowCtrls = {};
    this.allRowCtrls = [];
    this.topRowCtrls = [];
    this.bottomRowCtrls = [];
    this.refreshInProgress = !1;
    this.dataFirstRenderedFired = !1;
    this.setupRangeSelectionListeners = () => {
      let e = () => {
        this.getAllCellCtrls().forEach(e => e.onCellSelectionChanged());
      };
      let t = () => {
        this.getAllCellCtrls().forEach(e => e.updateRangeBordersIfRangeCount());
      };
      let i = () => {
        this.eventSvc.addEventListener("cellSelectionChanged", e);
        this.eventSvc.addEventListener("columnMoved", t);
        this.eventSvc.addEventListener("columnPinned", t);
        this.eventSvc.addEventListener("columnVisible", t);
      };
      let s = () => {
        this.eventSvc.removeEventListener("cellSelectionChanged", e);
        this.eventSvc.removeEventListener("columnMoved", t);
        this.eventSvc.removeEventListener("columnPinned", t);
        this.eventSvc.removeEventListener("columnVisible", t);
      };
      this.addDestroyFunc(() => s());
      this.addManagedPropertyListeners(["enableRangeSelection", "cellSelection"], () => {
        tl(this.gos) ? i() : s();
      });
      tl(this.gos) && i();
    };
  }
  wireBeans(e) {
    this.pageBounds = e.pageBounds;
    this.colModel = e.colModel;
    this.pinnedRowModel = e.pinnedRowModel;
    this.rowModel = e.rowModel;
    this.focusSvc = e.focusSvc;
    this.rowContainerHeight = e.rowContainerHeight;
    this.ctrlsSvc = e.ctrlsSvc;
  }
  postConstruct() {
    this.ctrlsSvc.whenReady(this, e => {
      this.gridBodyCtrl = e.gridBodyCtrl;
      this.initialise();
    });
  }
  initialise() {
    this.addManagedEventListeners({
      paginationChanged: this.onPageLoaded.bind(this),
      pinnedRowDataChanged: this.onPinnedRowDataChanged.bind(this),
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this),
      bodyScroll: this.onBodyScroll.bind(this),
      bodyHeightChanged: this.redraw.bind(this, {})
    });
    this.addManagedPropertyListeners(["domLayout", "embedFullWidthRows"], () => this.onDomLayoutChanged());
    this.addManagedPropertyListeners(["suppressMaxRenderedRowRestriction", "rowBuffer"], () => this.redraw());
    this.addManagedPropertyListener("suppressCellFocus", e => this.onSuppressCellFocusChanged(e.currentValue));
    this.addManagedPropertyListeners(["groupSuppressBlankHeader", "getBusinessKeyForNode", "fullWidthCellRenderer", "fullWidthCellRendererParams", "suppressStickyTotalRow", "groupRowRenderer", "groupRowRendererParams", "loadingCellRenderer", "loadingCellRendererParams", "detailCellRenderer", "detailCellRendererParams", "enableRangeSelection", "enableCellTextSelection"], () => this.redrawRows());
    this.addManagedPropertyListener("cellSelection", ({
      currentValue: e,
      previousValue: t
    }) => {
      (!t && e || t && !e) && this.redrawRows();
    });
    let {
      stickyRowSvc,
      gos
    } = this.beans;
    if (stickyRowSvc) this.stickyRowFeature = stickyRowSvc.createStickyRowFeature(this, this.createRowCon.bind(this), this.destroyRowCtrls.bind(this));else {
      let e = this.gridBodyCtrl;
      e.setStickyTopHeight(0);
      e.setStickyBottomHeight(0);
    }
    this.registerCellEventListeners();
    this.initialiseCache();
    this.printLayout = ej(gos, "print");
    this.embedFullWidthRows = this.printLayout || gos.get("embedFullWidthRows");
    this.redrawAfterModelUpdate();
  }
  initialiseCache() {
    if (this.gos.get("keepDetailRows")) {
      let e = this.getKeepDetailRowsCount();
      this.cachedRowCtrls = new lU(null != e ? e : 3);
    }
  }
  getKeepDetailRowsCount() {
    return this.gos.get("keepDetailRowsCount");
  }
  getStickyTopRowCtrls() {
    return this.stickyRowFeature?.stickyTopRowCtrls ?? [];
  }
  getStickyBottomRowCtrls() {
    return this.stickyRowFeature?.stickyBottomRowCtrls ?? [];
  }
  updateAllRowCtrls() {
    let e = Object.values(this.rowCtrlsByRowIndex);
    let t = Object.values(this.zombieRowCtrls);
    let i = this.cachedRowCtrls?.getEntries() ?? [];
    t.length > 0 || i.length > 0 ? this.allRowCtrls = [...e, ...t, ...i] : this.allRowCtrls = e;
  }
  onCellFocusChanged(e) {
    this.getAllCellCtrls().forEach(t => t.onCellFocused(e));
    this.getFullWidthRowCtrls().forEach(t => t.onFullWidthRowFocused(e));
  }
  onSuppressCellFocusChanged(e) {
    this.getAllCellCtrls().forEach(t => t.onSuppressCellFocusChanged(e));
    this.getFullWidthRowCtrls().forEach(t => t.onSuppressCellFocusChanged(e));
  }
  registerCellEventListeners() {
    this.addManagedEventListeners({
      cellFocused: e => {
        this.onCellFocusChanged(e);
      },
      cellFocusCleared: () => this.onCellFocusChanged(),
      flashCells: e => {
        let {
          cellFlashSvc
        } = this.beans;
        cellFlashSvc && this.getAllCellCtrls().forEach(i => cellFlashSvc.onFlashCells(i, e));
      },
      columnHoverChanged: () => {
        this.getAllCellCtrls().forEach(e => e.onColumnHover());
      },
      displayedColumnsChanged: () => {
        this.getAllCellCtrls().forEach(e => e.onDisplayedColumnsChanged());
      },
      displayedColumnsWidthChanged: () => {
        this.printLayout && this.getAllCellCtrls().forEach(e => e.onLeftChanged());
      }
    });
    this.setupRangeSelectionListeners();
    this.refreshListenersToColumnsForCellComps();
    this.addManagedEventListeners({
      gridColumnsChanged: this.refreshListenersToColumnsForCellComps.bind(this)
    });
    this.addDestroyFunc(this.removeGridColumnListeners.bind(this));
  }
  removeGridColumnListeners() {
    this.destroyFuncsForColumnListeners.forEach(e => e());
    this.destroyFuncsForColumnListeners.length = 0;
  }
  refreshListenersToColumnsForCellComps() {
    this.removeGridColumnListeners();
    this.colModel.getCols().forEach(e => {
      let t = t => {
        this.getAllCellCtrls().forEach(i => {
          i.column === e && t(i);
        });
      };
      let i = () => {
        t(e => e.onLeftChanged());
      };
      let s = () => {
        t(e => e.onWidthChanged());
      };
      let r = () => {
        t(e => e.onFirstRightPinnedChanged());
      };
      let o = () => {
        t(e => e.onLastLeftPinnedChanged());
      };
      let n = () => {
        t(e => e.onColDefChanged());
      };
      e.__addEventListener("leftChanged", i);
      e.__addEventListener("widthChanged", s);
      e.__addEventListener("firstRightPinnedChanged", r);
      e.__addEventListener("lastLeftPinnedChanged", o);
      e.__addEventListener("colDefChanged", n);
      this.destroyFuncsForColumnListeners.push(() => {
        e.__removeEventListener("leftChanged", i);
        e.__removeEventListener("widthChanged", s);
        e.__removeEventListener("firstRightPinnedChanged", r);
        e.__removeEventListener("lastLeftPinnedChanged", o);
        e.__removeEventListener("colDefChanged", n);
      });
    });
  }
  onDomLayoutChanged() {
    let e = ej(this.gos, "print");
    let t = e || this.gos.get("embedFullWidthRows");
    let i = t !== this.embedFullWidthRows || this.printLayout !== e;
    this.printLayout = e;
    this.embedFullWidthRows = t;
    i && this.redrawAfterModelUpdate({
      domLayoutChanged: !0
    });
  }
  datasourceChanged() {
    this.firstRenderedRow = 0;
    this.lastRenderedRow = -1;
    let e = Object.keys(this.rowCtrlsByRowIndex);
    this.removeRowCtrls(e);
  }
  onPageLoaded(e) {
    let t = {
      recycleRows: e.keepRenderedRows,
      animate: e.animate,
      newData: e.newData,
      newPage: e.newPage,
      onlyBody: !0
    };
    this.redrawAfterModelUpdate(t);
  }
  getAllCellsNotSpanningForColumn(e) {
    let t = [];
    this.getAllRowCtrls().forEach(i => {
      let s = i.getCellCtrl(e, !0)?.eGui;
      s && t.push(s);
    });
    return t;
  }
  refreshFloatingRowComps() {
    this.refreshFloatingRows(this.topRowCtrls, "top");
    this.refreshFloatingRows(this.bottomRowCtrls, "bottom");
  }
  refreshFloatingRows(e, t) {
    let {
      pinnedRowModel,
      beans,
      printLayout
    } = this;
    let o = Object.fromEntries(e.map(e => [e.rowNode.id, e]));
    pinnedRowModel?.forEachPinnedRow(t, (n, l) => {
      let a = e[l];
      a && void 0 === pinnedRowModel.getPinnedRowById(a.rowNode.id, t) && (a.destroyFirstPass(), a.destroySecondPass());
      n.id in o ? (e[l] = o[n.id], delete o[n.id]) : e[l] = new s0(n, beans, !1, !1, printLayout);
    });
    let n = ("top" === t ? pinnedRowModel?.getPinnedTopRowCount() : pinnedRowModel?.getPinnedBottomRowCount()) ?? 0;
    e.length = n;
  }
  onPinnedRowDataChanged() {
    this.redrawAfterModelUpdate({
      recycleRows: !0
    });
  }
  redrawRow(e, t = !1) {
    if (e.sticky) this.stickyRowFeature?.refreshStickyNode(e);else if (this.cachedRowCtrls?.has(e)) {
      this.cachedRowCtrls.removeRow(e);
      return;
    } else {
      let t = t => {
        let i = t[e.rowIndex];
        i && i.rowNode === e && (i.destroyFirstPass(), i.destroySecondPass(), t[e.rowIndex] = this.createRowCon(e, !1, !1));
      };
      switch (e.rowPinned) {
        case "top":
          t(this.topRowCtrls);
          break;
        case "bottom":
          t(this.bottomRowCtrls);
          break;
        default:
          t(this.rowCtrlsByRowIndex);
          this.updateAllRowCtrls();
      }
    }
    t || this.dispatchDisplayedRowsChanged(!1);
  }
  redrawRows(e) {
    if (null != e) {
      e?.forEach(e => this.redrawRow(e, !0));
      this.dispatchDisplayedRowsChanged(!1);
      return;
    }
    this.redrawAfterModelUpdate();
  }
  getCellToRestoreFocusToAfterRefresh(e) {
    let t = e?.suppressKeepFocus ? null : this.focusSvc.getFocusCellToUseAfterRefresh();
    if (null == t) return null;
    let i = e3(this.beans);
    let s = eQ(this.gos, i, sh);
    let r = eQ(this.gos, i, sQ);
    return s || r ? t : null;
  }
  redrawAfterModelUpdate(e = {}) {
    this.getLockOnRefresh();
    let t = this.getCellToRestoreFocusToAfterRefresh(e);
    this.updateContainerHeights();
    this.scrollToTopIfNewData(e);
    let i = !e.domLayoutChanged && !!e.recycleRows;
    let s = e.animate && e8(this.gos);
    let r = i ? this.getRowsToRecycle() : null;
    i || this.removeAllRowComps();
    this.workOutFirstAndLastRowsToRender();
    let {
      stickyRowFeature
    } = this;
    if (stickyRowFeature) {
      stickyRowFeature.checkStickyRows();
      let e = stickyRowFeature.extraTopHeight + stickyRowFeature.extraBottomHeight;
      e && this.updateContainerHeights(e);
    }
    this.recycleRows(r, s);
    this.gridBodyCtrl.updateRowCount();
    e.onlyBody || this.refreshFloatingRowComps();
    this.dispatchDisplayedRowsChanged();
    null != t && this.restoreFocusedCell(t);
    this.releaseLockOnRefresh();
  }
  scrollToTopIfNewData(e) {
    let t = e.newData || e.newPage;
    let i = this.gos.get("suppressScrollOnNewData");
    t && !i && (this.gridBodyCtrl.scrollFeature.scrollToTop(), this.stickyRowFeature?.resetOffsets());
  }
  updateContainerHeights(e = 0) {
    let {
      rowContainerHeight
    } = this;
    if (this.printLayout) {
      rowContainerHeight.setModelHeight(null);
      return;
    }
    let i = this.pageBounds.getCurrentPageHeight();
    0 === i && (i = 1);
    rowContainerHeight.setModelHeight(i + e);
  }
  getLockOnRefresh() {
    if (this.refreshInProgress) throw Error(eU(252));
    this.refreshInProgress = !0;
    this.beans.frameworkOverrides.getLockOnRefresh?.();
  }
  releaseLockOnRefresh() {
    this.refreshInProgress = !1;
    this.beans.frameworkOverrides.releaseLockOnRefresh?.();
  }
  isRefreshInProgress() {
    return this.refreshInProgress;
  }
  restoreFocusedCell(e) {
    e && this.focusSvc.restoreFocusedCell(e, () => {
      this.onCellFocusChanged(ty(this.gos, {
        rowIndex: e.rowIndex,
        column: e.column,
        rowPinned: e.rowPinned,
        forceBrowserFocus: !0,
        preventScrollOnBrowserFocus: !0,
        type: "cellFocused"
      }));
    });
  }
  getAllCellCtrls() {
    let e = [];
    let t = this.getAllRowCtrls();
    let i = t.length;
    for (let s = 0; s < i; s++) {
      let i = t[s].getAllCellCtrls();
      let r = i.length;
      for (let t = 0; t < r; t++) e.push(i[t]);
    }
    return e;
  }
  getAllRowCtrls() {
    let {
      spannedRowRenderer
    } = this.beans;
    let t = this.getStickyTopRowCtrls();
    let i = this.getStickyBottomRowCtrls();
    return [...this.topRowCtrls, ...this.bottomRowCtrls, ...t, ...i, ...(spannedRowRenderer?.getCtrls("top") ?? []), ...(spannedRowRenderer?.getCtrls("bottom") ?? []), ...(spannedRowRenderer?.getCtrls("center") ?? []), ...Object.values(this.rowCtrlsByRowIndex)];
  }
  addRenderedRowListener(e, t, i) {
    let s = this.rowCtrlsByRowIndex[t];
    s && s.addEventListener(e, i);
  }
  refreshCells(e = {}) {
    let t = {
      forceRefresh: e.force,
      newData: !1,
      suppressFlash: e.suppressFlash
    };
    for (let i of this.getCellCtrls(e.rowNodes, e.columns)) i.refreshOrDestroyCell(t);
    this.refreshFullWidth(e.rowNodes);
  }
  refreshFullWidth(e) {
    if (!e) return;
    let t = null;
    for (let i of (this.stickyRowFeature && (t = this.getCellToRestoreFocusToAfterRefresh() || null), this.getRowCtrls(e))) i.isFullWidth() && (i.refreshFullWidth() || this.redrawRow(i.rowNode, !0));
    this.dispatchDisplayedRowsChanged(!1);
    t && this.restoreFocusedCell(t);
  }
  getRowCtrls(e) {
    let t = l$(e);
    let i = this.getAllRowCtrls();
    return e && t ? i.filter(e => lK(e.rowNode, t)) : i;
  }
  getCellCtrls(e, t) {
    let i;
    ew(t) && (i = {}, t.forEach(e => {
      let t = this.colModel.getCol(e);
      ew(t) && (i[t.getId()] = !0);
    }));
    let s = [];
    this.getRowCtrls(e).forEach(e => {
      e.getAllCellCtrls().forEach(e => {
        let t = e.column.getId();
        (!i || i[t]) && s.push(e);
      });
    });
    return s;
  }
  destroy() {
    this.removeAllRowComps(!0);
    super.destroy();
  }
  removeAllRowComps(e = !1) {
    let t = Object.keys(this.rowCtrlsByRowIndex);
    this.removeRowCtrls(t, e);
    this.stickyRowFeature?.destroyStickyCtrls();
  }
  getRowsToRecycle() {
    let e = [];
    for (let t of Object.keys(this.rowCtrlsByRowIndex)) null == this.rowCtrlsByRowIndex[t].rowNode.id && e.push(t);
    this.removeRowCtrls(e);
    let t = {};
    for (let e of Object.values(this.rowCtrlsByRowIndex)) t[e.rowNode.id] = e;
    this.rowCtrlsByRowIndex = {};
    return t;
  }
  removeRowCtrls(e, t = !1) {
    e.forEach(e => {
      let i = this.rowCtrlsByRowIndex[e];
      i && (i.destroyFirstPass(t), i.destroySecondPass());
      delete this.rowCtrlsByRowIndex[e];
    });
  }
  onBodyScroll(e) {
    "vertical" === e.direction && this.redraw({
      afterScroll: !0
    });
  }
  redraw(e = {}) {
    let t;
    let {
      afterScroll
    } = e;
    let s = this.stickyRowFeature;
    s && (t = this.getCellToRestoreFocusToAfterRefresh() || void 0);
    let r = this.firstRenderedRow;
    let o = this.lastRenderedRow;
    this.workOutFirstAndLastRowsToRender();
    let n = !1;
    if (s) {
      n = s.checkStickyRows();
      let e = s.extraTopHeight + s.extraBottomHeight;
      e && this.updateContainerHeights(e);
    }
    let l = this.firstRenderedRow !== r || this.lastRenderedRow !== o;
    if ((!afterScroll || n || l) && (this.getLockOnRefresh(), this.recycleRows(null, !1, afterScroll), this.releaseLockOnRefresh(), this.dispatchDisplayedRowsChanged(afterScroll && !n), null != t)) {
      let e = this.getCellToRestoreFocusToAfterRefresh();
      null != t && null == e && (this.beans.animationFrameSvc?.flushAllFrames(), this.restoreFocusedCell(t));
    }
  }
  removeRowCompsNotToDraw(e, t) {
    let i = {};
    e.forEach(e => i[e] = !0);
    let s = Object.keys(this.rowCtrlsByRowIndex).filter(e => !i[e]);
    this.removeRowCtrls(s, t);
  }
  calculateIndexesToDraw(e) {
    let t = [];
    for (let e = this.firstRenderedRow; e <= this.lastRenderedRow; e++) t.push(e);
    let i = e => {
      let i = e.rowNode.rowIndex;
      null != i && (i < this.firstRenderedRow || i > this.lastRenderedRow) && this.doNotUnVirtualiseRow(e) && t.push(i);
    };
    for (let e of Object.values(this.rowCtrlsByRowIndex)) i(e);
    if (e) for (let t of Object.values(e)) i(t);
    t.sort((e, t) => e - t);
    let s = [];
    for (let e = 0; e < t.length; e++) {
      let i = t[e];
      let r = this.rowModel.getRow(i);
      r && !r.sticky && s.push(i);
    }
    return s;
  }
  recycleRows(e, t = !1, i = !1) {
    let s = this.calculateIndexesToDraw(e);
    (this.printLayout || i) && (t = !1);
    this.removeRowCompsNotToDraw(s, !t);
    let r = [];
    if (s.forEach(s => {
      let o = this.createOrUpdateRowCtrl(s, e, t, i);
      ew(o) && r.push(o);
    }), e) {
      let {
        animationFrameSvc
      } = this.beans;
      animationFrameSvc && i && !this.gos.get("suppressAnimationFrame") && !this.printLayout ? animationFrameSvc.addDestroyTask(() => {
        this.destroyRowCtrls(e, t);
        this.updateAllRowCtrls();
        this.dispatchDisplayedRowsChanged();
      }) : this.destroyRowCtrls(e, t);
    }
    this.updateAllRowCtrls();
  }
  dispatchDisplayedRowsChanged(e = !1) {
    this.eventSvc.dispatchEvent({
      type: "displayedRowsChanged",
      afterScroll: e
    });
  }
  onDisplayedColumnsChanged() {
    let {
      visibleCols
    } = this.beans;
    let t = visibleCols.isPinningLeft();
    let i = visibleCols.isPinningRight();
    (this.pinningLeft !== t || i !== this.pinningRight) && (this.pinningLeft = t, this.pinningRight = i, this.embedFullWidthRows && this.redrawFullWidthEmbeddedRows());
  }
  redrawFullWidthEmbeddedRows() {
    let e = [];
    this.getFullWidthRowCtrls().forEach(t => {
      let i = t.rowNode.rowIndex;
      e.push(i.toString());
    });
    this.refreshFloatingRowComps();
    this.removeRowCtrls(e);
    this.redraw({
      afterScroll: !0
    });
  }
  getFullWidthRowCtrls(e) {
    let t = l$(e);
    return this.getAllRowCtrls().filter(e => {
      if (!e.isFullWidth()) return !1;
      let i = e.rowNode;
      return !!(null == t || lK(i, t));
    });
  }
  createOrUpdateRowCtrl(e, t, i, s) {
    let r;
    let o = this.rowCtrlsByRowIndex[e];
    if (!o && ew(r = this.rowModel.getRow(e)) && ew(t) && t[r.id] && r.alreadyRendered && (o = t[r.id], t[r.id] = null), !o) {
      if (r || (r = this.rowModel.getRow(e)), !ew(r)) return;
      o = this.createRowCon(r, i, s);
    }
    r && (r.alreadyRendered = !0);
    this.rowCtrlsByRowIndex[e] = o;
    return o;
  }
  destroyRowCtrls(e, t) {
    let i = [];
    if (e) {
      for (let s of Object.values(e)) if (s) {
        if (this.cachedRowCtrls && s.isCacheable()) {
          this.cachedRowCtrls.addRow(s);
          continue;
        }
        if (s.destroyFirstPass(!t), t) {
          let e = s.instanceId;
          this.zombieRowCtrls[e] = s;
          i.push(() => {
            s.destroySecondPass();
            delete this.zombieRowCtrls[e];
          });
        } else s.destroySecondPass();
      }
    }
    t && (i.push(() => {
      this.updateAllRowCtrls();
      this.dispatchDisplayedRowsChanged();
    }), window.setTimeout(() => i.forEach(e => e()), 400));
  }
  getRowBuffer() {
    return this.gos.get("rowBuffer");
  }
  getRowBufferInPixels() {
    return this.getRowBuffer() * eZ(this.beans);
  }
  workOutFirstAndLastRowsToRender() {
    let e;
    let t;
    let {
      rowContainerHeight,
      pageBounds,
      rowModel
    } = this;
    if (rowContainerHeight.updateOffset(), rowModel.isRowsToRender()) {
      if (this.printLayout) {
        this.beans.environment.refreshRowHeightVariable();
        e = pageBounds.getFirstRow();
        t = pageBounds.getLastRow();
      } else {
        let o;
        let n;
        let l = this.getRowBufferInPixels();
        let a = this.ctrlsSvc.getScrollFeature();
        let d = this.gos.get("suppressRowVirtualisation");
        let h = !1;
        do {
          let e = pageBounds.getPixelOffset();
          let {
            pageFirstPixel,
            pageLastPixel
          } = pageBounds.getCurrentPagePixelRange();
          let u = rowContainerHeight.divStretchOffset;
          let c = a.getVScrollPosition();
          let g = c.top;
          let p = c.bottom;
          d ? (o = pageFirstPixel + u, n = pageLastPixel + u) : (o = Math.max(g + e - l, pageFirstPixel) + u, n = Math.min(p + e + l, pageLastPixel) + u);
          this.firstVisibleVPixel = Math.max(g + e, pageFirstPixel) + u;
          this.lastVisibleVPixel = Math.min(p + e, pageLastPixel) + u;
          h = this.ensureAllRowsInRangeHaveHeightsCalculated(o, n);
        } while (h);
        let u = rowModel.getRowIndexAtPixel(o);
        let c = rowModel.getRowIndexAtPixel(n);
        let g = pageBounds.getFirstRow();
        let p = pageBounds.getLastRow();
        u < g && (u = g);
        c > p && (c = p);
        e = u;
        t = c;
      }
    } else {
      e = 0;
      t = -1;
    }
    let o = ej(this.gos, "normal");
    let n = this.gos.get("suppressMaxRenderedRowRestriction");
    let l = Math.max(this.getRowBuffer(), 500);
    o && !n && t - e > l && (t = e + l);
    let a = e !== this.firstRenderedRow;
    let d = t !== this.lastRenderedRow;
    (a || d) && (this.firstRenderedRow = e, this.lastRenderedRow = t, this.eventSvc.dispatchEvent({
      type: "viewportChanged",
      firstRow: e,
      lastRow: t
    }));
  }
  dispatchFirstDataRenderedEvent() {
    this.dataFirstRenderedFired || (this.dataFirstRenderedFired = !0, i3(this.beans, () => {
      this.beans.eventSvc.dispatchEvent({
        type: "firstDataRendered",
        firstRow: this.firstRenderedRow,
        lastRow: this.lastRenderedRow
      });
    }));
  }
  ensureAllRowsInRangeHaveHeightsCalculated(e, t) {
    let i = this.pinnedRowModel?.ensureRowHeightsValid();
    let s = this.stickyRowFeature?.ensureRowHeightsValid();
    let {
      pageBounds,
      rowModel
    } = this;
    let n = rowModel.ensureRowHeightsValid(e, t, pageBounds.getFirstRow(), pageBounds.getLastRow());
    (n || s) && this.eventSvc.dispatchEvent({
      type: "recalculateRowBounds"
    });
    return (!!s || !!n || !!i) && (this.updateContainerHeights(), !0);
  }
  doNotUnVirtualiseRow(e) {
    let t = e.rowNode;
    let i = this.focusSvc.isRowNodeFocused(t);
    let s = e.editing;
    let r = t.detail;
    return (!!i || !!s || !!r) && !!this.isRowPresent(t);
  }
  isRowPresent(e) {
    return !!this.rowModel.isRowPresent(e) && (this.beans.pagination?.isRowPresent(e) ?? !0);
  }
  createRowCon(e, t, i) {
    let s = this.cachedRowCtrls?.getRow(e) ?? null;
    if (s) return s;
    let r = this.gos.get("suppressAnimationFrame");
    let o = i && !r && !this.printLayout && !!this.beans.animationFrameSvc;
    return new s0(e, this.beans, t, o, this.printLayout);
  }
  getRenderedNodes() {
    let e = Object.values(this.rowCtrlsByRowIndex).map(e => e.rowNode);
    return [...this.getStickyTopRowCtrls().map(e => e.rowNode), ...e, ...this.getStickyBottomRowCtrls().map(e => e.rowNode)];
  }
  getRowByPosition(e) {
    let t;
    let {
      rowIndex
    } = e;
    switch (e.rowPinned) {
      case "top":
        t = this.topRowCtrls[rowIndex];
        break;
      case "bottom":
        t = this.bottomRowCtrls[rowIndex];
        break;
      default:
        (t = this.rowCtrlsByRowIndex[rowIndex]) || (t = this.getStickyTopRowCtrls().find(e => e.rowNode.rowIndex === rowIndex) || null) || (t = this.getStickyBottomRowCtrls().find(e => e.rowNode.rowIndex === rowIndex) || null);
    }
    return t;
  }
  isRangeInRenderedViewport(e, t) {
    if (null == e || null == t) return !1;
    let i = e > this.lastRenderedRow;
    return !(t < this.firstRenderedRow) && !i;
  }
};
var lU = class {
  constructor(e) {
    this.entriesMap = {};
    this.entriesList = [];
    this.maxCount = e;
  }
  addRow(e) {
    if (this.entriesMap[e.rowNode.id] = e, this.entriesList.push(e), e.setCached(!0), this.entriesList.length > this.maxCount) {
      let e = this.entriesList[0];
      e.destroyFirstPass();
      e.destroySecondPass();
      this.removeFromCache(e);
    }
  }
  getRow(e) {
    if (null == e || null == e.id) return null;
    let t = this.entriesMap[e.id];
    return t ? (this.removeFromCache(t), t.setCached(!1), t.rowNode != e ? null : t) : null;
  }
  has(e) {
    return null != this.entriesMap[e.id];
  }
  removeRow(e) {
    let t = e.id;
    let i = this.entriesMap[t];
    delete this.entriesMap[t];
    tJ(this.entriesList, i);
  }
  removeFromCache(e) {
    let t = e.rowNode.id;
    delete this.entriesMap[t];
    tJ(this.entriesList, e);
  }
  getEntries() {
    return this.entriesList;
  }
};
function l$(e) {
  if (!e) return;
  let t = {
    top: {},
    bottom: {},
    normal: {}
  };
  e.forEach(e => {
    let i = e.id;
    switch (e.rowPinned) {
      case "top":
        t.top[i] = e;
        break;
      case "bottom":
        t.bottom[i] = e;
        break;
      default:
        t.normal[i] = e;
    }
  });
  return t;
}
function lK(e, t) {
  let i = e.id;
  switch (e.rowPinned) {
    case "top":
      return null != t.top[i];
    case "bottom":
      return null != t.bottom[i];
    default:
      return null != t.normal[i];
  }
}
var l_ = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "rowNodeSorter";
  }
  postConstruct() {
    let {
      gos
    } = this;
    this.isAccentedSort = gos.get("accentedSort");
    this.primaryColumnsSortGroups = e9(gos);
    this.addManagedPropertyListener("accentedSort", e => this.isAccentedSort = e.currentValue);
    this.addManagedPropertyListener("autoGroupColumnDef", () => this.primaryColumnsSortGroups = e9(gos));
  }
  doFullSort(e, t) {
    let i = e.map((e, t) => ({
      currentPos: t,
      rowNode: e
    }));
    i.sort(this.compareRowNodes.bind(this, t));
    return i.map(e => e.rowNode);
  }
  compareRowNodes(e, t, i) {
    let s = t.rowNode;
    let r = i.rowNode;
    for (function () {
      let t = 0;
      let i = e.length;
    }(); t < i; t++) {
      let i;
      let o = e[t];
      let n = "desc" === o.sort;
      let l = this.getValue(s, o.column);
      let a = this.getValue(r, o.column);
      let d = this.getComparator(o, s);
      if (!isNaN(i = d ? d(l, a, s, r, n) : function (e, t, i = !1) {
        var s;
        var r;
        var o;
        var n;
        let l = null == e;
        let a = null == t;
        if (e && e.toNumber && (e = e.toNumber()), t && t.toNumber && (t = t.toNumber()), l && a) return 0;
        if (l) return -1;
        if (a) return 1;
        if ("string" != typeof e || !i) return (s = e) > (r = t) ? 1 : s < r ? -1 : 0;
        try {
          return e.localeCompare(t);
        } catch (i) {
          return (o = e) > (n = t) ? 1 : o < n ? -1 : 0;
        }
      }(l, a, this.isAccentedSort)) && 0 !== i) return "asc" === o.sort ? i : -1 * i;
    }
    return t.currentPos - i.currentPos;
  }
  getComparator(e, t) {
    let i = e.column;
    let s = i.getColDef().comparator;
    if (null != s) return s;
    if (!i.getColDef().showRowGroup) return;
    let r = !t.group && i.getColDef().field;
    if (!r) return;
    let o = this.beans.colModel.getColDefCol(r);
    if (o) return o.getColDef().comparator;
  }
  getValue(e, t) {
    let {
      valueSvc,
      colModel,
      showRowGroupCols,
      gos
    } = this.beans;
    if (!this.primaryColumnsSortGroups) return valueSvc.getValue(t, e, !1);
    if (e.rowGroupColumn === t) {
      if (tt(gos, colModel.isPivotActive())) {
        let s = e.allLeafChildren?.[0];
        return s ? valueSvc.getValue(t, s, !1) : void 0;
      }
      let n = showRowGroupCols?.getShowRowGroupCol(t.getId());
      if (!n) return;
      return e.groupData?.[n.getId()];
    }
    if (!e.group || !t.getColDef().showRowGroup) return valueSvc.getValue(t, e, !1);
  }
};
function lj(e, t) {
  return `<span data-ref="eSort${e}" class="ag-sort-indicator-icon ag-sort-${t} ag-hidden" aria-hidden="true"></span>`;
}
var lq = `<span class="ag-sort-indicator-container">
        ${lj("Order", "order")}
        ${lj("Asc", "ascending-icon")}
        ${lj("Desc", "descending-icon")}
        ${lj("Mixed", "mixed-icon")}
        ${lj("None", "none-icon")}
    </span>`;
var lY = class extends iS {
  constructor(e) {
    super();
    this.eSortOrder = null;
    this.eSortAsc = null;
    this.eSortDesc = null;
    this.eSortMixed = null;
    this.eSortNone = null;
    e || this.setTemplate(lq);
  }
  attachCustomElements(e, t, i, s, r) {
    this.eSortOrder = e;
    this.eSortAsc = t;
    this.eSortDesc = i;
    this.eSortMixed = s;
    this.eSortNone = r;
  }
  setupSort(e, t = !1) {
    if (this.column = e, this.suppressOrder = t, this.setupMultiSortIndicator(), !e.isSortable() && !e.getColDef().showRowGroup) return;
    this.addInIcon("sortAscending", this.eSortAsc, e);
    this.addInIcon("sortDescending", this.eSortDesc, e);
    this.addInIcon("sortUnSort", this.eSortNone, e);
    let i = this.updateIcons.bind(this);
    let s = this.onSortChanged.bind(this);
    this.addManagedPropertyListener("unSortIcon", i);
    this.addManagedEventListeners({
      newColumnsLoaded: i,
      sortChanged: s,
      columnRowGroupChanged: s
    });
    this.onSortChanged();
  }
  addInIcon(e, t, i) {
    if (null == t) return;
    let s = rY(e, this.beans, i);
    s && t.appendChild(s);
  }
  onSortChanged() {
    this.updateIcons();
    this.suppressOrder || this.updateSortOrder();
  }
  updateIcons() {
    let {
      eSortAsc,
      eSortDesc,
      eSortNone,
      column,
      gos,
      beans
    } = this;
    let n = beans.sortSvc.getDisplaySortForColumn(column);
    eSortAsc && U(eSortAsc, "asc" === n, {
      skipAriaHidden: !0
    });
    eSortDesc && U(eSortDesc, "desc" === n, {
      skipAriaHidden: !0
    });
    eSortNone && U(eSortNone, !(!column.getColDef().unSortIcon && !gos.get("unSortIcon")) && null == n, {
      skipAriaHidden: !0
    });
  }
  setupMultiSortIndicator() {
    let {
      eSortMixed,
      column,
      gos
    } = this;
    this.addInIcon("sortUnSort", eSortMixed, column);
    let s = column.getColDef().showRowGroup;
    e9(gos) && s && (this.addManagedEventListeners({
      sortChanged: this.updateMultiSortIndicator.bind(this),
      columnRowGroupChanged: this.updateMultiSortIndicator.bind(this)
    }), this.updateMultiSortIndicator());
  }
  updateMultiSortIndicator() {
    let {
      eSortMixed,
      beans,
      column
    } = this;
    eSortMixed && U(eSortMixed, "mixed" === beans.sortSvc.getDisplaySortForColumn(column), {
      skipAriaHidden: !0
    });
  }
  updateSortOrder() {
    let {
      eSortOrder,
      column,
      beans: {
        sortSvc
      }
    } = this;
    if (!eSortOrder) return;
    let s = sortSvc.getColumnsWithSortingOrdered();
    let r = sortSvc.getDisplaySortIndexForColumn(column) ?? -1;
    let o = s.some(e => sortSvc.getDisplaySortIndexForColumn(e) ?? !1);
    U(eSortOrder, r >= 0 && o, {
      skipAriaHidden: !0
    });
    r >= 0 ? eSortOrder.textContent = (r + 1).toString() : et(eSortOrder);
  }
};
var lJ = {
  selector: "AG-SORT-INDICATOR",
  component: lY
};
var lZ = ["asc", "desc", null];
var lX = {
  moduleName: "Sort",
  version: eI,
  beans: [class extends $$tM23 {
    constructor() {
      super(...arguments);
      this.beanName = "sortSvc";
    }
    progressSort(e, t, i) {
      let s = this.getNextSortDirection(e);
      this.setSortForColumn(e, s, t, i);
    }
    progressSortFromEvent(e, t) {
      let i = "ctrl" === this.gos.get("multiSortKey") ? t.ctrlKey || t.metaKey : t.shiftKey;
      this.progressSort(e, i, "uiColumnSorted");
    }
    setSortForColumn(e, t, i, s) {
      "asc" !== t && "desc" !== t && (t = null);
      let {
        gos,
        showRowGroupCols
      } = this.beans;
      let n = e9(gos);
      let l = [e];
      if (n && e.getColDef().showRowGroup) {
        let t = showRowGroupCols?.getSourceColumnsForGroupColumn?.(e);
        let i = t?.filter(e => e.isSortable());
        i && (l = [e, ...i]);
      }
      l.forEach(e => this.setColSort(e, t, s));
      let a = (i || gos.get("alwaysMultiSort")) && !gos.get("suppressMultiSort");
      let d = [];
      if (!a) {
        let e = this.clearSortBarTheseColumns(l, s);
        d.push(...e);
      }
      this.updateSortIndex(e);
      d.push(...l);
      this.dispatchSortChangedEvents(s, d);
    }
    updateSortIndex(e) {
      let {
        gos,
        colModel,
        showRowGroupCols
      } = this.beans;
      let r = e9(gos);
      let o = showRowGroupCols?.getShowRowGroupCol(e.getId());
      let n = r && o || e;
      let l = this.getColumnsWithSortingOrdered();
      colModel.getAllCols().forEach(e => this.setColSortIndex(e, null));
      let a = l.filter(e => (!r || !e.getColDef().showRowGroup) && e !== n);
      (n.getSort() ? [...a, n] : a).forEach((e, t) => this.setColSortIndex(e, t));
    }
    onSortChanged(e, t) {
      this.dispatchSortChangedEvents(e, t);
    }
    isSortActive() {
      let e = this.beans.colModel.getAllCols().filter(e => !!e.getSort());
      return e && e.length > 0;
    }
    dispatchSortChangedEvents(e, t) {
      let i = {
        type: "sortChanged",
        source: e
      };
      t && (i.columns = t);
      this.eventSvc.dispatchEvent(i);
    }
    clearSortBarTheseColumns(e, t) {
      let i = [];
      this.beans.colModel.getAllCols().forEach(s => {
        e.includes(s) || (s.getSort() && i.push(s), this.setColSort(s, void 0, t));
      });
      return i;
    }
    getNextSortDirection(e) {
      let t = e.getColDef().sortingOrder ?? this.gos.get("sortingOrder") ?? lZ;
      let i = t.indexOf(e.getSort());
      let s = i == t.length - 1;
      return i < 0 || s ? t[0] : t[i + 1];
    }
    getIndexedSortMap() {
      let {
        gos,
        colModel,
        showRowGroupCols,
        rowGroupColsSvc
      } = this.beans;
      let r = colModel.getAllCols().filter(e => !!e.getSort());
      if (colModel.isPivotMode()) {
        let t = e9(gos);
        r = r.filter(e => {
          let s = !!e.getAggFunc();
          let r = !e.isPrimary();
          let o = t ? showRowGroupCols?.getShowRowGroupCol(e.getId()) : e.getColDef().showRowGroup;
          return s || r || o;
        });
      }
      let o = rowGroupColsSvc?.columns.filter(e => !!e.getSort()) ?? [];
      let n = {};
      r.forEach((e, t) => n[e.getId()] = t);
      r.sort((e, t) => {
        let i = e.getSortIndex();
        let s = t.getSortIndex();
        return null != i && null != s ? i - s : null == i && null == s ? n[e.getId()] > n[t.getId()] ? 1 : -1 : null == s ? -1 : 1;
      });
      let l = e9(gos) && !!o.length;
      l && (r = [...new Set(r.map(e => showRowGroupCols?.getShowRowGroupCol(e.getId()) ?? e))]);
      let a = new Map();
      r.forEach((e, t) => a.set(e, t));
      l && o.forEach(e => {
        let t = showRowGroupCols.getShowRowGroupCol(e.getId());
        a.set(e, a.get(t));
      });
      return a;
    }
    getColumnsWithSortingOrdered() {
      return [...this.getIndexedSortMap().entries()].sort(([e, t], [i, s]) => t - s).map(([e]) => e);
    }
    getSortModel() {
      return this.getColumnsWithSortingOrdered().filter(e => e.getSort()).map(e => ({
        sort: e.getSort(),
        colId: e.getId()
      }));
    }
    getSortOptions() {
      return this.getColumnsWithSortingOrdered().filter(e => e.getSort()).map(e => ({
        sort: e.getSort(),
        column: e
      }));
    }
    canColumnDisplayMixedSort(e) {
      let t = e9(this.gos);
      let i = !!e.getColDef().showRowGroup;
      return t && i;
    }
    getDisplaySortForColumn(e) {
      let t = this.beans.showRowGroupCols?.getSourceColumnsForGroupColumn(e);
      if (!this.canColumnDisplayMixedSort(e) || !t?.length) return e.getSort();
      let i = null != e.getColDef().field || e.getColDef().valueGetter ? [e, ...t] : t;
      let s = i[0].getSort();
      return i.every(e => e.getSort() == s) ? s : "mixed";
    }
    getDisplaySortIndexForColumn(e) {
      return this.getIndexedSortMap().get(e);
    }
    setupHeader(e, t, i) {
      let s = 0;
      e.addManagedListeners(t, {
        movingChanged: () => {
          s = new Date().getTime();
        }
      });
      i && e.addManagedElementListeners(i, {
        click: e => {
          let i = t.isMoving();
          let r = new Date().getTime() - s < 50;
          i || r || this.progressSortFromEvent(t, e);
        }
      });
      let r = () => {
        let i = t.getSort();
        if (e.addOrRemoveCssClass("ag-header-cell-sorted-asc", "asc" === i), e.addOrRemoveCssClass("ag-header-cell-sorted-desc", "desc" === i), e.addOrRemoveCssClass("ag-header-cell-sorted-none", !i), t.getColDef().showRowGroup) {
          let i = this.beans.showRowGroupCols?.getSourceColumnsForGroupColumn(t);
          let s = i?.every(e => t.getSort() == e.getSort());
          e.addOrRemoveCssClass("ag-header-cell-sorted-mixed", !s);
        }
      };
      e.addManagedEventListeners({
        sortChanged: r,
        columnRowGroupChanged: r
      });
    }
    initCol(e) {
      let {
        sort,
        initialSort,
        sortIndex,
        initialSortIndex
      } = e.colDef;
      void 0 !== sort ? ("asc" === sort || "desc" === sort) && (e.sort = sort) : ("asc" === initialSort || "desc" === initialSort) && (e.sort = initialSort);
      void 0 !== sortIndex ? null !== sortIndex && (e.sortIndex = sortIndex) : null !== initialSortIndex && (e.sortIndex = initialSortIndex);
    }
    updateColSort(e, t, i) {
      void 0 !== t && ("desc" === t || "asc" === t ? this.setColSort(e, t, i) : this.setColSort(e, void 0, i));
    }
    setColSort(e, t, i) {
      e.sort !== t && (e.sort = t, e.dispatchColEvent("sortChanged", i));
      e.dispatchStateUpdatedEvent("sort");
    }
    setColSortIndex(e, t) {
      e.sortIndex = t;
      e.dispatchStateUpdatedEvent("sortIndex");
    }
    createSortIndicator(e) {
      return new lY(e);
    }
    getSortIndicatorSelector() {
      return lJ;
    }
  }, l_],
  apiFunctions: {
    onSortChanged: function (e) {
      e.sortSvc?.onSortChanged("api");
    }
  },
  userComponents: {
    agSortIndicator: lY
  },
  icons: {
    sortAscending: "asc",
    sortDescending: "desc",
    sortUnSort: "none"
  }
};
var lQ = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "syncSvc";
    this.waitingForColumns = !1;
  }
  postConstruct() {
    this.addManagedPropertyListener("columnDefs", e => this.setColumnDefs(e));
  }
  start() {
    this.beans.ctrlsSvc.whenReady(this, () => {
      let e = this.gos.get("columnDefs");
      e ? this.setColumnsAndData(e) : this.waitingForColumns = !0;
      this.gridReady();
    });
  }
  setColumnsAndData(e) {
    let {
      colModel,
      rowModel
    } = this.beans;
    colModel.setColumnDefs(e ?? [], "gridInitializing");
    rowModel.start();
  }
  gridReady() {
    let {
      eventSvc,
      gos
    } = this;
    eventSvc.dispatchEvent({
      type: "gridReady"
    });
    ex(gos, `initialised successfully, enterprise = ${gos.isModuleRegistered("EnterpriseCore")}`);
  }
  setColumnDefs(e) {
    let t = this.gos.get("columnDefs");
    if (t) {
      if (this.waitingForColumns) {
        this.waitingForColumns = !1;
        this.setColumnsAndData(t);
        return;
      }
      this.beans.colModel.setColumnDefs(t, t8(e.source));
    }
  }
};
var l0 = class {
  constructor(e, t) {
    this.active = !0;
    this.nodeIdsToColumns = {};
    this.mapToItems = {};
    this.keepingColumns = e;
    this.pathRoot = {
      rowNode: t,
      children: null
    };
    this.mapToItems[t.id] = this.pathRoot;
  }
  depthFirstSearchChangedPath(e, t) {
    let {
      rowNode,
      children
    } = e;
    if (children) for (let e = 0; e < children.length; ++e) this.depthFirstSearchChangedPath(children[e], t);
    t(rowNode);
  }
  depthFirstSearchEverything(e, t, i) {
    let s = e.childrenAfterGroup;
    if (s) for (function () {
      let e = 0;
      let r = s.length;
    }(); e < r; ++e) {
      let r = s[e];
      r.childrenAfterGroup ? this.depthFirstSearchEverything(r, t, i) : i && t(r);
    }
    t(e);
  }
  forEachChangedNodeDepthFirst(e, t = !1, i = !1) {
    this.active && !i ? this.depthFirstSearchChangedPath(this.pathRoot, e) : this.depthFirstSearchEverything(this.pathRoot.rowNode, e, t);
  }
  executeFromRootNode(e) {
    e(this.pathRoot.rowNode);
  }
  createPathItems(e) {
    let t = e;
    let i = 0;
    for (; !this.mapToItems[t.id];) {
      let e = {
        rowNode: t,
        children: null
      };
      this.mapToItems[t.id] = e;
      i++;
      t = t.parent;
    }
    return i;
  }
  populateColumnsMap(e, t) {
    if (!this.keepingColumns || !t) return;
    let i = e;
    for (; i;) {
      this.nodeIdsToColumns[i.id] || (this.nodeIdsToColumns[i.id] = {});
      t.forEach(e => this.nodeIdsToColumns[i.id][e.getId()] = !0);
      i = i.parent;
    }
  }
  linkPathItems(e, t) {
    let i = e;
    for (let e = 0; e < t; e++) {
      let e = this.mapToItems[i.id];
      let t = this.mapToItems[i.parent.id];
      t.children || (t.children = []);
      t.children.push(e);
      i = i.parent;
    }
  }
  addParentNode(e, t) {
    if (!e || e.isRowPinned()) return;
    let i = this.createPathItems(e);
    this.linkPathItems(e, i);
    this.populateColumnsMap(e, t);
  }
  canSkip(e) {
    return this.active && !this.mapToItems[e.id];
  }
  getValueColumnsForNode(e, t) {
    if (!this.keepingColumns) return t;
    let i = this.nodeIdsToColumns[e.id];
    return t.filter(e => i[e.getId()]);
  }
  getNotValueColumnsForNode(e, t) {
    if (!this.keepingColumns) return null;
    let i = this.nodeIdsToColumns[e.id];
    return t.filter(e => !i[e.getId()]);
  }
};
var l1 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "changeDetectionSvc";
    this.clientSideRowModel = null;
  }
  postConstruct() {
    let {
      gos,
      rowModel
    } = this.beans;
    $$eK33(gos, rowModel) && (this.clientSideRowModel = rowModel);
    this.addManagedEventListeners({
      cellValueChanged: this.onCellValueChanged.bind(this)
    });
  }
  onCellValueChanged(e) {
    let {
      gos,
      rowRenderer
    } = this.beans;
    if ("paste" === e.source || gos.get("suppressChangeDetection")) return;
    let s = e.node;
    let r = [s];
    let o = this.clientSideRowModel;
    let n = o?.rootNode;
    if (n && !s.isRowPinned()) {
      let i = new l0(gos.get("aggregateOnlyChangedColumns"), n);
      i.addParentNode(s.parent, [e.column]);
      o.doAggregate(i);
      i.forEachChangedNodeDepthFirst(e => {
        r.push(e);
      });
    }
    rowRenderer.refreshCells({
      rowNodes: r
    });
  }
};
var l2 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "expressionSvc";
    this.cache = {};
  }
  evaluate(e, t) {
    if ("string" == typeof e) return this.evaluateExpression(e, t);
    ez(15, {
      expression: e
    });
  }
  evaluateExpression(e, t) {
    try {
      return this.createExpressionFunction(e)(t.value, t.context, t.oldValue, t.newValue, t.value, t.node, t.data, t.colDef, t.rowIndex, t.api, t.getValue, t.column, t.columnGroup);
    } catch (i) {
      ez(16, {
        expression: e,
        params: t,
        e: i
      });
      return null;
    }
  }
  createExpressionFunction(e) {
    let t = this.cache;
    if (t[e]) return t[e];
    let i = Function("x, ctx, oldValue, newValue, value, node, data, colDef, rowIndex, api, getValue, column, columnGroup", this.createFunctionBody(e));
    t[e] = i;
    return i;
  }
  createFunctionBody(e) {
    return e.indexOf("return") >= 0 ? e : "return " + e + ";";
  }
};
var l5 = {
  moduleName: "CommunityCore",
  version: eI,
  beans: [ly, oH, nm, ix, lW, o9, lm, lP, im, lL, lI, lz, class extends $$tM23 {
    constructor() {
      super(...arguments);
      this.beanName = "valueSvc";
      this.initialised = !1;
      this.isSsrm = !1;
    }
    wireBeans(e) {
      this.expressionSvc = e.expressionSvc;
      this.colModel = e.colModel;
      this.valueCache = e.valueCache;
      this.dataTypeSvc = e.dataTypeSvc;
    }
    postConstruct() {
      this.initialised || this.init();
    }
    init() {
      this.executeValueGetter = this.valueCache ? this.executeValueGetterWithValueCache.bind(this) : this.executeValueGetterWithoutValueCache.bind(this);
      this.isSsrm = $$e_18(this.gos);
      this.cellExpressions = this.gos.get("enableCellExpressions");
      this.isTreeData = this.gos.get("treeData");
      this.initialised = !0;
      let e = e => this.callColumnCellValueChangedHandler(e);
      this.eventSvc.addEventListener("cellValueChanged", e, !0);
      this.addDestroyFunc(() => this.eventSvc.removeEventListener("cellValueChanged", e, !0));
      this.addManagedPropertyListener("treeData", e => this.isTreeData = e.currentValue);
    }
    getValueForDisplay(e, t) {
      let i = t.leafGroup && this.colModel.isPivotMode();
      let s = t.group && t.expanded && !t.footer && !i;
      let r = this.gos.get("groupSuppressBlankHeader");
      if (!s || r) return this.getValue(e, t);
      let o = !1;
      let n = this.gos.get("groupTotalRow");
      o = "function" != typeof n ? !!n : !!this.gos.getCallback("groupTotalRow")({
        node: this
      });
      let l = s && o;
      return this.getValue(e, t, l);
    }
    getValue(e, t, i = !1) {
      let s;
      if (this.initialised || this.init(), !t) return;
      let r = e.getColDef();
      let o = r.field;
      let n = e.getColId();
      let l = t.data;
      let a = t.groupData && void 0 !== t.groupData[n];
      let d = !i && t.aggData && void 0 !== t.aggData[n];
      let h = this.isSsrm && i && !!e.getColDef().aggFunc;
      let u = this.isSsrm && t.footer && t.field && (!0 === e.getColDef().showRowGroup || e.getColDef().showRowGroup === t.field);
      if (this.isTreeData && d ? s = t.aggData[n] : this.isTreeData && r.valueGetter ? s = this.executeValueGetter(r.valueGetter, l, e, t) : this.isTreeData && o && l ? s = tL(l, o, e.isFieldContainsDots()) : a ? s = t.groupData[n] : d ? s = t.aggData[n] : r.valueGetter ? s = this.executeValueGetter(r.valueGetter, l, e, t) : u ? s = tL(l, t.field, e.isFieldContainsDots()) : o && l && !h && (s = tL(l, o, e.isFieldContainsDots())), this.cellExpressions && "string" == typeof s && 0 === s.indexOf("=")) {
        let i = s.substring(1);
        s = this.executeValueGetter(i, l, e, t);
      }
      if (null == s) {
        let i = this.getOpenedGroup(t, e);
        if (null != i) return i;
      }
      return s;
    }
    parseValue(e, t, i, s) {
      let r = e.getColDef();
      let o = r.valueParser;
      if (ew(o)) {
        let n = ty(this.gos, {
          node: t,
          data: t?.data,
          oldValue: s,
          newValue: i,
          colDef: r,
          column: e
        });
        return "function" == typeof o ? o(n) : this.expressionSvc?.evaluate(o, n);
      }
      return i;
    }
    getDeleteValue(e, t) {
      return ew(e.getColDef().valueParser) ? this.parseValue(e, t, "", this.getValueForDisplay(e, t)) ?? null : null;
    }
    formatValue(e, t, i, s, r = !0) {
      let o;
      let n = null;
      let l = e.getColDef();
      if (s ? o = s : r && (o = l.valueFormatter), o) {
        let s = ty(this.gos, {
          value: i,
          node: t,
          data: t ? t.data : null,
          colDef: l,
          column: e
        });
        n = "function" == typeof o ? o(s) : this.expressionSvc ? this.expressionSvc.evaluate(o, s) : null;
      } else if (l.refData) return l.refData[i] || "";
      null == n && Array.isArray(i) && (n = i.join(", "));
      return n;
    }
    getOpenedGroup(e, t) {
      if (!this.gos.get("showOpenedGroup") || !t.getColDef().showRowGroup) return;
      let i = t.getColDef().showRowGroup;
      let s = e.parent;
      for (; null != s;) {
        if (s.rowGroupColumn && (!0 === i || i === s.rowGroupColumn.getColId())) return s.key;
        s = s.parent;
      }
    }
    setValue(e, t, i, s) {
      let r;
      let o = this.colModel.getColDefCol(t);
      if (!e || !o) return !1;
      ev(e.data) && (e.data = {});
      let {
        field,
        valueSetter
      } = o.getColDef();
      if (ev(field) && ev(valueSetter)) {
        $$eW42(17);
        return !1;
      }
      if (this.dataTypeSvc && !this.dataTypeSvc.checkType(o, i)) {
        $$eW42(135);
        return !1;
      }
      let a = ty(this.gos, {
        node: e,
        data: e.data,
        oldValue: this.getValue(o, e),
        newValue: i,
        colDef: o.getColDef(),
        column: o
      });
      if (a.newValue = i, void 0 === (r = ew(valueSetter) ? "function" == typeof valueSetter ? valueSetter(a) : this.expressionSvc?.evaluate(valueSetter, a) : this.setValueUsingField(e.data, field, i, o.isFieldContainsDots())) && (r = !0), !r) return !1;
      e.resetQuickFilterAggregateText();
      this.valueCache?.onDataChanged();
      let d = this.getValue(o, e);
      this.eventSvc.dispatchEvent({
        type: "cellValueChanged",
        event: null,
        rowIndex: e.rowIndex,
        rowPinned: e.rowPinned,
        column: a.column,
        colDef: a.colDef,
        data: e.data,
        node: e,
        oldValue: a.oldValue,
        newValue: d,
        value: d,
        source: s
      });
      return !0;
    }
    callColumnCellValueChangedHandler(e) {
      let t = e.colDef.onCellValueChanged;
      "function" == typeof t && this.beans.frameworkOverrides.wrapOutgoing(() => {
        t({
          node: e.node,
          data: e.data,
          oldValue: e.oldValue,
          newValue: e.newValue,
          colDef: e.colDef,
          column: e.column,
          api: e.api,
          context: e.context
        });
      });
    }
    setValueUsingField(e, t, i, s) {
      if (!t) return !1;
      let r = !1;
      if (s) {
        let s = t.split(".");
        let o = e;
        for (; s.length > 0 && o;) {
          let e = s.shift();
          0 === s.length ? (r = o[e] === i) || (o[e] = i) : o = o[e];
        }
      } else (r = e[t] === i) || (e[t] = i);
      return !r;
    }
    executeValueGetterWithValueCache(e, t, i, s) {
      let r = i.getColId();
      let o = this.valueCache.getValue(s, r);
      if (void 0 !== o) return o;
      let n = this.executeValueGetterWithoutValueCache(e, t, i, s);
      this.valueCache.setValue(s, r, n);
      return n;
    }
    executeValueGetterWithoutValueCache(e, t, i, s) {
      let r = ty(this.gos, {
        data: t,
        node: s,
        column: i,
        colDef: i.getColDef(),
        getValue: this.getValueCallback.bind(this, s)
      });
      return "function" == typeof e ? e(r) : this.expressionSvc?.evaluate(e, r);
    }
    getValueCallback(e, t) {
      let i = this.colModel.getColDefCol(t);
      return i ? this.getValue(i, e) : null;
    }
    getKeyForNode(e, t) {
      let i = this.getValue(e, t);
      let s = e.getColDef().keyCreator;
      let r = i;
      s && (r = s(ty(this.gos, {
        value: i,
        colDef: e.getColDef(),
        column: e,
        node: t,
        data: t.data
      })));
      "string" == typeof r || null == r || "[object Object]" === (r = String(r)) && $$eW42(121);
      return r;
    }
  }, lv, lg, lb, nf, lQ, nc, ng],
  icons: {
    selectOpen: "small-down",
    smallDown: "small-down",
    colorPicker: "color-picker",
    smallUp: "small-up",
    checkboxChecked: "small-up",
    checkboxIndeterminate: "checkbox-indeterminate",
    checkboxUnchecked: "checkbox-unchecked",
    radioButtonOn: "radio-button-on",
    radioButtonOff: "radio-button-off",
    smallLeft: "small-left",
    smallRight: "small-right"
  },
  apiFunctions: {
    getGridId: function (e) {
      return e.context.getGridId();
    },
    destroy: function (e) {
      e.gridDestroySvc.destroy();
    },
    isDestroyed: function (e) {
      return e.gridDestroySvc.destroyCalled;
    },
    getGridOption: function (e, t) {
      return e.gos.get(t);
    },
    setGridOption: function (e, t, i) {
      oN(e, {
        [t]: i
      });
    },
    updateGridOptions: oN
  },
  dependsOn: [{
    moduleName: "DataType",
    version: eI,
    beans: [nn],
    dependsOn: [{
      moduleName: "CheckboxCellRenderer",
      version: eI,
      userComponents: {
        agCheckboxCellRenderer: r2
      }
    }]
  }, {
    moduleName: "ColumnMove",
    version: eI,
    beans: [o5, oq],
    apiFunctions: {
      moveColumnByIndex: function (e, t, i) {
        e.colMoves?.moveColumnByIndex(t, i, "api");
      },
      moveColumns: function (e, t, i) {
        e.colMoves?.moveColumns(t, i, "api");
      }
    },
    dependsOn: [o_],
    css: [":where(.ag-ltr) :where(.ag-column-moving){.ag-cell,.ag-header-cell,.ag-spanned-cell-wrapper{transition:left .2s}.ag-header-group-cell{transition:left .2s,width .2s}}:where(.ag-rtl) :where(.ag-column-moving){.ag-cell,.ag-header-cell,.ag-spanned-cell-wrapper{transition:right .2s}.ag-header-group-cell{transition:right .2s,width .2s}}"]
  }, {
    moduleName: "ColumnResize",
    version: eI,
    beans: [o4],
    apiFunctions: {
      setColumnWidths: function (e, t, i = !0, s = "api") {
        e.colResize?.setColumnWidths(t, !1, i, s);
      }
    },
    dependsOn: [{
      moduleName: "HorizontalResize",
      version: eI,
      beans: [oB],
      dependsOn: [oK]
    }, {
      moduleName: "AutoWidth",
      version: eI,
      beans: [class extends $$tM23 {
        constructor() {
          super(...arguments);
          this.beanName = "autoWidthCalc";
        }
        postConstruct() {
          this.beans.ctrlsSvc.whenReady(this, e => {
            this.centerRowContainerCtrl = e.center;
          });
        }
        getPreferredWidthForColumn(e, t) {
          let i = this.getHeaderCellForColumn(e);
          if (!i) return -1;
          let s = this.beans.rowRenderer.getAllCellsNotSpanningForColumn(e);
          t || s.push(i);
          return this.getPreferredWidthForElements(s);
        }
        getPreferredWidthForColumnGroup(e) {
          let t = this.getHeaderCellForColumn(e);
          return t ? this.getPreferredWidthForElements([t]) : -1;
        }
        getPreferredWidthForElements(e, t) {
          let i = document.createElement("form");
          i.style.position = "fixed";
          let s = this.centerRowContainerCtrl.eContainer;
          e.forEach(e => this.cloneItemIntoDummy(e, i));
          s.appendChild(i);
          let r = i.offsetWidth;
          s.removeChild(i);
          return r + (t = t ?? this.gos.get("autoSizePadding"));
        }
        getHeaderCellForColumn(e) {
          let t = null;
          this.beans.ctrlsSvc.getHeaderRowContainerCtrls().forEach(i => {
            let s = i.getHtmlElementForColumnHeader(e);
            null != s && (t = s);
          });
          return t;
        }
        cloneItemIntoDummy(e, t) {
          let i = e.cloneNode(!0);
          i.style.width = "";
          i.style.position = "static";
          i.style.left = "";
          let s = document.createElement("div");
          let r = s.classList;
          ["ag-header-cell", "ag-header-group-cell"].some(e => i.classList.contains(e)) ? (r.add("ag-header", "ag-header-row"), s.style.position = "static") : r.add("ag-row");
          let o = e.parentElement;
          for (; o;) {
            if (["ag-header-row", "ag-row"].some(e => o.classList.contains(e))) {
              for (let e = 0; e < o.classList.length; e++) {
                let t = o.classList[e];
                "ag-row-position-absolute" != t && r.add(t);
              }
              break;
            }
            o = o.parentElement;
          }
          s.appendChild(i);
          t.appendChild(s);
        }
      }]
    }]
  }, lX, {
    moduleName: "ColumnHeaderComp",
    version: eI,
    userComponents: {
      agColumnHeader: lE
    },
    icons: {
      menu: "menu",
      menuAlt: "menu-alt"
    }
  }, {
    moduleName: "ColumnGroup",
    version: eI,
    dynamicBeans: {
      headerGroupCellCtrl: o7
    },
    beans: [ni],
    apiFunctions: {
      getAllDisplayedColumnGroups: function (e) {
        return e.visibleCols.getAllTrees();
      },
      getCenterDisplayedColumnGroups: function (e) {
        return e.visibleCols.treeCenter;
      },
      getColumnGroup: function (e, t, i) {
        return e.colGroupSvc?.getColumnGroup(t, i) ?? null;
      },
      getColumnGroupState: function (e) {
        return e.colGroupSvc?.getColumnGroupState() ?? [];
      },
      getDisplayNameForColumnGroup: function (e, t, i) {
        return e.colNames.getDisplayNameForColumnGroup(t, i) || "";
      },
      getLeftDisplayedColumnGroups: function (e) {
        return e.visibleCols.treeLeft;
      },
      getProvidedColumnGroup: function (e, t) {
        return e.colGroupSvc?.getProvidedColGroup(t) ?? null;
      },
      getRightDisplayedColumnGroups: function (e) {
        return e.visibleCols.treeRight;
      },
      resetColumnGroupState: function (e) {
        e.colGroupSvc?.resetColumnGroupState("api");
      },
      setColumnGroupOpened: function (e, t, i) {
        e.colGroupSvc?.setColumnGroupOpened(t, i, "api");
      },
      setColumnGroupState: function (e, t) {
        e.colGroupSvc?.setColumnGroupState(t, "api");
      }
    }
  }, {
    moduleName: "ColumnGroupHeaderComp",
    version: eI,
    userComponents: {
      agColumnGroupHeader: lF
    },
    icons: {
      columnGroupOpened: "expanded",
      columnGroupClosed: "contracted"
    }
  }, {
    moduleName: "Overlay",
    version: eI,
    userComponents: {
      agLoadingOverlay: rj,
      agNoRowsOverlay: rq
    },
    apiFunctions: {
      showLoadingOverlay: function (e) {
        e.overlays?.showLoadingOverlay();
      },
      showNoRowsOverlay: function (e) {
        e.overlays?.showNoRowsOverlay();
      },
      hideOverlay: function (e) {
        e.overlays?.hideOverlay();
      }
    },
    beans: [lV]
  }, {
    moduleName: "ChangeDetection",
    version: eI,
    beans: [l1]
  }, {
    moduleName: "AnimationFrame",
    version: eI,
    beans: [i6]
  }, {
    moduleName: "KeyboardNavigation",
    version: eI,
    beans: [lM, lk, lw],
    apiFunctions: {
      getFocusedCell: function (e) {
        return e.focusSvc.getFocusedCell();
      },
      clearFocusedCell: function (e) {
        return e.focusSvc.clearFocusedCell();
      },
      setFocusedCell: function (e, t, i, s) {
        e.focusSvc.setFocusedCell({
          rowIndex: t,
          column: i,
          rowPinned: s,
          forceBrowserFocus: !0
        });
      },
      setFocusedHeader: function (e, t, i = !1) {
        let s = e.headerNavigation?.getHeaderPositionForColumn(t, i);
        s && e.focusSvc.focusHeaderPosition({
          headerPosition: s
        });
      },
      tabToNextCell: function (e, t) {
        return e.navigation?.tabToNextCell(!1, t) ?? !1;
      },
      tabToPreviousCell: function (e, t) {
        return e.navigation?.tabToNextCell(!0, t) ?? !1;
      }
    }
  }, {
    moduleName: "PinnedColumn",
    version: eI,
    beans: [lG],
    css: [".ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top{min-width:0;overflow:hidden;position:relative}.ag-pinned-left-sticky-top,.ag-pinned-right-sticky-top{height:100%;overflow:hidden;position:relative}.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{height:100%;overflow:hidden;width:100%}.ag-pinned-left-header,.ag-pinned-right-header{display:inline-block;height:100%;overflow:hidden;position:relative}.ag-body-horizontal-scroll:not(.ag-scrollbar-invisible){.ag-horizontal-left-spacer:not(.ag-scroller-corner){border-right:var(--ag-pinned-column-border)}.ag-horizontal-right-spacer:not(.ag-scroller-corner){border-left:var(--ag-pinned-column-border)}}.ag-pinned-right-header{border-left:var(--ag-pinned-column-border)}.ag-pinned-left-header{border-right:var(--ag-pinned-column-border)}.ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left,.ag-cell-range-single-cell,.ag-cell-focus:not(.ag-cell-range-selected):focus-within){border-left:var(--ag-pinned-column-border)}.ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right,.ag-cell-range-single-cell,.ag-cell-focus:not(.ag-cell-range-selected):focus-within){border-right:var(--ag-pinned-column-border)}.ag-pinned-left-header .ag-header-cell-resize:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}.ag-pinned-right-header .ag-header-cell-resize:after{left:50%}.ag-pinned-left-header .ag-header-cell-resize{right:-3px}.ag-pinned-right-header .ag-header-cell-resize{left:-3px}"]
  }, {
    moduleName: "Aria",
    version: eI,
    beans: [lH]
  }, {
    moduleName: "Touch",
    version: eI,
    beans: [lA]
  }, {
    moduleName: "CellRendererFunction",
    version: eI,
    beans: [np]
  }, {
    moduleName: "ColumnFlex",
    version: eI,
    beans: [no]
  }, {
    moduleName: "Expression",
    version: eI,
    beans: [l2]
  }]
};
var l3 = class e {
  static applyGlobalGridOptions(t) {
    if (!e.gridOptions) return {
      ...t
    };
    let i = {};
    tI(i, e.gridOptions, !0, !0);
    "deep" === e.mergeStrategy ? tI(i, t, !0, !0) : i = {
      ...i,
      ...t
    };
    e.gridOptions.context && (i.context = e.gridOptions.context);
    t.context && ("deep" === e.mergeStrategy && i.context && tI(t.context, i.context, !0, !0), i.context = t.context);
    return i;
  }
};
export function $$l630(e) {
  return l3.gridOptions?.[e];
}
l3.gridOptions = void 0;
l3.mergeStrategy = "shallow";
var l4 = 1;
var $$l820 = class {
  create(e, t, i, s, r, o) {
    let n = l3.applyGlobalGridOptions(t);
    let l = n.gridId ?? String(l4++);
    let a = n.rowModelType ?? "clientSide";
    let d = this.getRegisteredModules(r, l, a);
    let h = this.createBeansList(a, d, l);
    let u = this.createProvidedBeans(e, n, r);
    if (!h) return;
    let c = new i1({
      providedBeanInstances: u,
      beanClasses: h,
      gridId: l,
      beanInitComparator: oS,
      beanDestroyComparator: oR,
      derivedBeans: [ob],
      destroyCallback: o
    });
    this.registerModuleFeatures(c, d);
    i(c);
    c.getBean("syncSvc").start();
    s && s(c);
    return c.getBean("gridApi");
  }
  getRegisteredModules(e, t, i) {
    iJ(l5, void 0);
    e?.modules?.forEach(e => iJ(e, t));
    return function (e, t) {
      let i = iq[e] ?? {};
      return [...Object.values(ij.all ?? {}), ...Object.values(i.all ?? {}), ...Object.values(ij[t] ?? {}), ...Object.values(i[t] ?? {})];
    }(t, i);
  }
  registerModuleFeatures(e, t) {
    let i = e.getBean("registry");
    let s = e.getBean("apiFunctionSvc");
    t.forEach(e => {
      i.registerModule(e);
      let t = e.apiFunctions;
      t && Object.keys(t).forEach(e => {
        s?.addFunction(e, t[e]);
      });
    });
  }
  createProvidedBeans(e, t, i) {
    let s = i ? i.frameworkOverrides : null;
    ev(s) && (s = new $$ov39());
    let r = {
      gridOptions: t,
      eGridDiv: e,
      globalListener: i ? i.globalListener : null,
      globalSyncListener: i ? i.globalSyncListener : null,
      frameworkOverrides: s
    };
    i && i.providedBeanInstances && Object.assign(r, i.providedBeanInstances);
    return r;
  }
  createBeansList(e, t, i) {
    let s = {
      clientSide: "ClientSideRowModel",
      infinite: "InfiniteRowModel",
      serverSide: "ServerSideRowModel",
      viewport: "ViewportRowModel"
    }[e];
    if (!s) {
      eH(eE, 201, {
        rowModelType: e
      }, `Unknown rowModelType ${e}.`);
      return;
    }
    if (!iZ(s, i, e)) {
      eH(eE, 200, {
        reasonOrId: `rowModelType = '${e}'`,
        moduleName: s,
        gridScoped: iY,
        gridId: i,
        rowModelType: e
      }, `Missing module ${s}Module for rowModelType ${e}. 
If upgrading from before v33, see ${eO}/upgrading-to-ag-grid-33/#changes-to-modules/`);
      return;
    }
    let r = new Set();
    t.forEach(e => e.beans?.forEach(e => r.add(e)));
    return Array.from(r);
  }
};
var l7 = ["columnEverythingChanged", "newColumnsLoaded", "columnPivotModeChanged", "pivotMaxColumnsExceeded", "columnRowGroupChanged", "expandOrCollapseAll", "columnPivotChanged", "gridColumnsChanged", "columnValueChanged", "columnMoved", "columnVisible", "columnPinned", "columnGroupOpened", "columnResized", "displayedColumnsChanged", "virtualColumnsChanged", "columnHeaderMouseOver", "columnHeaderMouseLeave", "columnHeaderClicked", "columnHeaderContextMenu", "asyncTransactionsFlushed", "rowGroupOpened", "rowDataUpdated", "pinnedRowDataChanged", "rangeSelectionChanged", "cellSelectionChanged", "chartCreated", "chartRangeSelectionChanged", "chartOptionsChanged", "chartDestroyed", "toolPanelVisibleChanged", "toolPanelSizeChanged", "modelUpdated", "cutStart", "cutEnd", "pasteStart", "pasteEnd", "fillStart", "fillEnd", "cellSelectionDeleteStart", "cellSelectionDeleteEnd", "rangeDeleteStart", "rangeDeleteEnd", "undoStarted", "undoEnded", "redoStarted", "redoEnded", "cellClicked", "cellDoubleClicked", "cellMouseDown", "cellContextMenu", "cellValueChanged", "cellEditRequest", "rowValueChanged", "headerFocused", "cellFocused", "rowSelected", "selectionChanged", "tooltipShow", "tooltipHide", "cellKeyDown", "cellMouseOver", "cellMouseOut", "filterChanged", "filterModified", "filterOpened", "advancedFilterBuilderVisibleChanged", "sortChanged", "virtualRowRemoved", "rowClicked", "rowDoubleClicked", "gridReady", "gridPreDestroyed", "gridSizeChanged", "viewportChanged", "firstDataRendered", "dragStarted", "dragStopped", "dragCancelled", "rowEditingStarted", "rowEditingStopped", "cellEditingStarted", "cellEditingStopped", "bodyScroll", "bodyScrollEnd", "paginationChanged", "componentStateChanged", "storeRefreshed", "stateUpdated", "columnMenuVisibleChanged", "contextMenuVisibleChanged", "rowDragEnter", "rowDragMove", "rowDragLeave", "rowDragEnd", "rowDragCancel", "scrollbarWidthChanged", "keyShortcutChangedCellStart", "keyShortcutChangedCellEnd", "pinnedHeightChanged", "cellFocusCleared", "fullWidthRowFocused", "checkboxChanged", "heightScaleChanged", "suppressMovableColumns", "suppressMenuHide", "suppressFieldDotNotation", "columnPanelItemDragStart", "columnPanelItemDragEnd", "bodyHeightChanged", "columnContainerWidthChanged", "displayedColumnsWidthChanged", "scrollVisibilityChanged", "scrollGapChanged", "columnHoverChanged", "flashCells", "paginationPixelOffsetChanged", "displayedRowsChanged", "leftPinnedWidthChanged", "rightPinnedWidthChanged", "rowContainerHeightChanged", "headerHeightChanged", "columnGroupHeaderHeightChanged", "columnHeaderHeightChanged", "gridStylesChanged", "storeUpdated", "filterDestroyed", "rowDataUpdateStarted", "rowCountReady", "advancedFilterEnabledChanged", "dataTypesInferred", "fieldValueChanged", "fieldPickerValueSelected", "richSelectListRowSelected", "sideBarUpdated", "alignedGridScroll", "alignedGridColumn", "gridOptionsChanged", "chartTitleEdit", "recalculateRowBounds", "stickyTopOffsetChanged", "overlayExclusiveChanged", "beforeRefreshModel"];
var l9 = ["rowHeight", "detailRowHeight", "rowBuffer", "headerHeight", "groupHeaderHeight", "groupLockGroupColumns", "floatingFiltersHeight", "pivotHeaderHeight", "pivotGroupHeaderHeight", "groupDefaultExpanded", "pivotDefaultExpanded", "viewportRowModelPageSize", "viewportRowModelBufferSize", "autoSizePadding", "maxBlocksInCache", "maxConcurrentDatasourceRequests", "tooltipShowDelay", "tooltipHideDelay", "cacheOverflowSize", "paginationPageSize", "cacheBlockSize", "infiniteInitialRowCount", "serverSideInitialRowCount", "scrollbarWidth", "asyncTransactionWaitMillis", "blockLoadDebounceMillis", "keepDetailRowsCount", "undoRedoCellEditingLimit", "cellFlashDuration", "cellFadeDuration", "tabIndex", "pivotMaxGeneratedColumns"];
var ae = ["loadThemeGoogleFonts", "suppressMakeColumnVisibleAfterUnGroup", "suppressRowClickSelection", "suppressCellFocus", "suppressHeaderFocus", "suppressHorizontalScroll", "groupSelectsChildren", "alwaysShowHorizontalScroll", "alwaysShowVerticalScroll", "debug", "enableBrowserTooltips", "enableCellExpressions", "groupSuppressBlankHeader", "suppressMenuHide", "suppressRowDeselection", "unSortIcon", "suppressMultiSort", "alwaysMultiSort", "singleClickEdit", "suppressLoadingOverlay", "suppressNoRowsOverlay", "suppressAutoSize", "skipHeaderOnAutoSize", "suppressColumnMoveAnimation", "suppressMoveWhenColumnDragging", "suppressMovableColumns", "suppressFieldDotNotation", "enableRangeSelection", "enableRangeHandle", "enableFillHandle", "suppressClearOnFillReduction", "deltaSort", "suppressTouch", "allowContextMenuWithControlKey", "suppressContextMenu", "suppressDragLeaveHidesColumns", "suppressRowGroupHidesColumns", "suppressMiddleClickScrolls", "suppressPreventDefaultOnMouseWheel", "suppressCopyRowsToClipboard", "copyHeadersToClipboard", "copyGroupHeadersToClipboard", "pivotMode", "suppressAggFuncInHeader", "suppressColumnVirtualisation", "alwaysAggregateAtRootLevel", "suppressFocusAfterRefresh", "functionsReadOnly", "animateRows", "groupSelectsFiltered", "groupRemoveSingleChildren", "groupRemoveLowestSingleChildren", "enableRtl", "enableCellSpan", "suppressClickEdit", "rowDragEntireRow", "rowDragManaged", "suppressRowDrag", "suppressMoveWhenRowDragging", "rowDragMultiRow", "enableGroupEdit", "embedFullWidthRows", "suppressPaginationPanel", "groupHideOpenParents", "groupAllowUnbalanced", "pagination", "paginationAutoPageSize", "suppressScrollOnNewData", "suppressScrollWhenPopupsAreOpen", "purgeClosedRowNodes", "cacheQuickFilter", "includeHiddenColumnsInQuickFilter", "ensureDomOrder", "accentedSort", "suppressChangeDetection", "valueCache", "valueCacheNeverExpires", "aggregateOnlyChangedColumns", "suppressAnimationFrame", "suppressExcelExport", "suppressCsvExport", "includeHiddenColumnsInAdvancedFilter", "suppressMultiRangeSelection", "enterNavigatesVerticallyAfterEdit", "enterNavigatesVertically", "suppressPropertyNamesCheck", "rowMultiSelectWithClick", "suppressRowHoverHighlight", "suppressRowTransform", "suppressClipboardPaste", "suppressLastEmptyLineOnPaste", "enableCharts", "suppressMaintainUnsortedOrder", "enableCellTextSelection", "suppressBrowserResizeObserver", "suppressMaxRenderedRowRestriction", "excludeChildrenWhenTreeDataFiltering", "tooltipMouseTrack", "tooltipInteraction", "keepDetailRows", "paginateChildRows", "preventDefaultOnContextMenu", "undoRedoCellEditing", "allowDragFromColumnsToolPanel", "pivotSuppressAutoColumn", "suppressExpandablePivotGroups", "debounceVerticalScrollbar", "detailRowAutoHeight", "serverSideSortAllLevels", "serverSideEnableClientSideSort", "serverSideOnlyRefreshFilteredGroups", "suppressAggFilteredOnly", "showOpenedGroup", "suppressClipboardApi", "suppressModelUpdateAfterUpdateTransaction", "stopEditingWhenCellsLoseFocus", "groupMaintainOrder", "columnHoverHighlight", "readOnlyEdit", "suppressRowVirtualisation", "enableCellEditingOnBackspace", "resetRowDataOnUpdate", "removePivotHeaderRowWhenSingleValueColumn", "suppressCopySingleCellRanges", "suppressGroupRowsSticky", "suppressCutToClipboard", "rowGroupPanelSuppressSort", "allowShowChangeAfterFilter", "enableAdvancedFilter", "masterDetail", "treeData", "reactiveCustomComponents", "applyQuickFilterBeforePivotOrAgg", "suppressServerSideFullWidthLoadingRow", "suppressAdvancedFilterEval", "loading", "maintainColumnOrder", "enableStrictPivotColumnOrder", "suppressSetFilterByDefault"];
var at = ["sortingOrder", "alignedGrids", "rowData", "columnDefs", "excelStyles", "pinnedTopRowData", "pinnedBottomRowData", "chartThemes", "rowClass", "paginationPageSizeSelector", "components", "rowStyle", "context", "autoGroupColumnDef", "localeText", "icons", "datasource", "dragAndDropImageComponentParams", "serverSideDatasource", "viewportDatasource", "groupRowRendererParams", "aggFuncs", "fullWidthCellRendererParams", "defaultColGroupDef", "defaultColDef", "defaultCsvExportParams", "defaultExcelExportParams", "columnTypes", "rowClassRules", "detailCellRendererParams", "loadingCellRendererParams", "loadingOverlayComponentParams", "noRowsOverlayComponentParams", "popupParent", "themeStyleContainer", "statusBar", "chartThemeOverrides", "customChartThemes", "chartToolPanelsDef", "dataTypeDefinitions", "advancedFilterParent", "advancedFilterBuilderParams", "initialState", "autoSizeStrategy", "selectionColumnDef", "overlayLoadingTemplate", "overlayNoRowsTemplate", "gridId", "quickFilterText", "rowModelType", "editType", "domLayout", "clipboardDelimiter", "rowGroupPanelShow", "multiSortKey", "pivotColumnGroupTotals", "pivotRowTotals", "pivotPanelShow", "fillHandleDirection", "groupDisplayType", "treeDataDisplayType", "treeDataChildrenField", "colResizeDefault", "tooltipTrigger", "serverSidePivotResultFieldSeparator", "columnMenu", "tooltipShowMode", "grandTotalRow", "themeCssLayer", ...l9, "doesExternalFilterPass", "processPivotResultColDef", "processPivotResultColGroupDef", "getBusinessKeyForNode", "isRowSelectable", "rowDragText", "groupRowRenderer", "dragAndDropImageComponent", "fullWidthCellRenderer", "loadingCellRenderer", "loadingOverlayComponent", "noRowsOverlayComponent", "detailCellRenderer", "quickFilterParser", "quickFilterMatcher", "getLocaleText", "isExternalFilterPresent", "getRowHeight", "getRowClass", "getRowStyle", "getContextMenuItems", "getMainMenuItems", "processRowPostCreate", "processCellForClipboard", "getGroupRowAgg", "isFullWidthRow", "sendToClipboard", "focusGridInnerElement", "navigateToNextHeader", "tabToNextHeader", "navigateToNextCell", "tabToNextCell", "processCellFromClipboard", "getDocument", "postProcessPopup", "getChildCount", "getDataPath", "isRowMaster", "postSortRows", "processHeaderForClipboard", "processUnpinnedColumns", "processGroupHeaderForClipboard", "paginationNumberFormatter", "processDataFromClipboard", "getServerSideGroupKey", "isServerSideGroup", "createChartContainer", "getChartToolbarItems", "fillOperation", "isApplyServerSideTransaction", "getServerSideGroupLevelParams", "isServerSideGroupOpenByDefault", "isGroupOpenByDefault", "initialGroupOrderComparator", "loadingCellRendererSelector", "getRowId", "chartMenuItems", "groupTotalRow", "alwaysPassFilter", ...ae, "cellSelection", "sideBar", "rowNumbers", "suppressGroupChangesColumnVisibility", "groupAggFiltering", "suppressStickyTotalRow", "groupHideParentOfSingleChild", "theme", "rowSelection"];
var $$ai4 = class {
  wrap(e, t, i, s) {
    let r = this.createWrapper(e, s);
    t?.forEach(e => {
      this.createMethod(r, e, !0);
    });
    i?.forEach(e => {
      this.createMethod(r, e, !1);
    });
    return r;
  }
  createMethod(e, t, i) {
    e.addMethod(t, this.createMethodProxy(e, t, i));
  }
  createMethodProxy(e, t, i) {
    return function () {
      return e.hasMethod(t) ? e.callMethod(t, arguments) : (i && $$eW42(49, {
        methodName: t
      }), null);
    };
  }
};
var as = class {
  constructor(e) {
    this.groupColumns = [];
    let {
      colModel,
      rowGroupColsSvc,
      colNames,
      valueSvc,
      gos,
      processCellCallback,
      processHeaderCallback,
      processGroupHeaderCallback,
      processRowGroupCallback
    } = e;
    this.colModel = colModel;
    this.rowGroupColsSvc = rowGroupColsSvc;
    this.colNames = colNames;
    this.valueSvc = valueSvc;
    this.gos = gos;
    this.processCellCallback = processCellCallback;
    this.processHeaderCallback = processHeaderCallback;
    this.processGroupHeaderCallback = processGroupHeaderCallback;
    this.processRowGroupCallback = processRowGroupCallback;
  }
  prepare(e) {
    this.groupColumns = e.filter(e => !!e.getColDef().showRowGroup);
  }
  extractHeaderValue(e) {
    return this.getHeaderName(this.processHeaderCallback, e) ?? "";
  }
  extractRowCellValue(e, t, i, s, r) {
    let o = (!this.gos.get("groupHideOpenParents") || r.footer) && this.shouldRenderGroupSummaryCell(r, e, t) ? this.createValueForGroupNode(e, r) : this.valueSvc.getValue(e, r);
    return this.processCell({
      accumulatedRowIndex: i,
      rowNode: r,
      column: e,
      value: o,
      processCellCallback: this.processCellCallback,
      type: s
    });
  }
  shouldRenderGroupSummaryCell(e, t, i) {
    if (!(e.group && !this.gos.get("treeData"))) return !1;
    if (-1 !== this.groupColumns.indexOf(t)) {
      if (e.groupData?.[t.getId()] !== void 0 || $$e_18(this.gos) && e.group) return !0;
      if (e.footer && -1 === e.level) {
        let e = t.getColDef();
        return null == e || !0 === e.showRowGroup || e.showRowGroup === this.rowGroupColsSvc?.columns[0].getId();
      }
    }
    let s = tt(this.gos, this.colModel.isPivotMode());
    return 0 === i && s;
  }
  getHeaderName(e, t) {
    return e ? e(ty(this.gos, {
      column: t
    })) : this.colNames.getDisplayNameForColumn(t, "csv", !0);
  }
  createValueForGroupNode(e, t) {
    var i;
    if (this.processRowGroupCallback) return this.processRowGroupCallback(ty(this.gos, {
      column: e,
      node: t
    }));
    let s = this.gos.get("treeData");
    let r = t => {
      if (s) return t.key;
      let i = t.groupData?.[e.getId()];
      return i && t.rowGroupColumn && !1 !== t.rowGroupColumn.getColDef().useValueFormatterForExport ? this.valueSvc.formatValue(t.rowGroupColumn, t, i) ?? i : i;
    };
    let o = t.footer;
    let n = [r(t)];
    if (!((i = this.gos).exists("groupDisplayType") ? "multipleColumns" === i.get("groupDisplayType") : i.get("groupHideOpenParents"))) for (; t.parent;) n.push(r(t = t.parent));
    let l = n.reverse().join(" -> ");
    return o ? `Total ${l}` : l;
  }
  processCell(e) {
    let {
      accumulatedRowIndex,
      rowNode,
      column,
      value,
      processCellCallback,
      type
    } = e;
    return processCellCallback ? {
      value: processCellCallback(ty(this.gos, {
        accumulatedRowIndex,
        column,
        node: rowNode,
        value,
        type,
        parseValue: e => this.valueSvc.parseValue(column, rowNode, e, this.valueSvc.getValue(column, rowNode)),
        formatValue: e => this.valueSvc.formatValue(column, rowNode, e) ?? e
      })) ?? ""
    } : !1 !== column.getColDef().useValueFormatterForExport ? {
      value: value ?? "",
      valueFormatted: this.valueSvc.formatValue(column, rowNode, value)
    } : {
      value: value ?? ""
    };
  }
};
var ar = "clientSide";
var ao = "serverSide";
var an = "infinite";
var al = {
  AdvancedFilter: 1,
  AllEnterprise: 1,
  CellSelection: 1,
  Clipboard: 1,
  ColumnMenu: 1,
  ColumnsToolPanel: 1,
  ContextMenu: 1,
  ExcelExport: 1,
  FiltersToolPanel: 1,
  GridCharts: 1,
  IntegratedCharts: 1,
  GroupFilter: 1,
  MasterDetail: 1,
  Menu: 1,
  MultiFilter: 1,
  Pivot: 1,
  RangeSelection: 1,
  RichSelect: 1,
  RowNumbers: 1,
  RowGrouping: 1,
  RowGroupingPanel: 1,
  ServerSideRowModelApi: 1,
  ServerSideRowModel: 1,
  SetFilter: 1,
  SideBar: 1,
  Sparklines: 1,
  StatusBar: 1,
  TreeData: 1,
  ViewportRowModel: 1
};
var aa = ["TextFilter", "NumberFilter", "DateFilter", "SetFilter", "MultiFilter", "GroupFilter", "CustomFilter"];
var ad = {
  EditCore: ["TextEditor", "NumberEditor", "DateEditor", "CheckboxEditor", "LargeTextEditor", "SelectEditor", "RichSelect", "CustomEditor"],
  CheckboxCellRenderer: ["AllCommunity"],
  ClientSideRowModelHierarchy: ["RowGrouping", "Pivot", "TreeData"],
  ColumnFilter: aa,
  ColumnGroupHeaderComp: ["AllCommunity"],
  ColumnGroup: ["AllCommunity"],
  ColumnHeaderComp: ["AllCommunity"],
  ColumnMove: ["AllCommunity"],
  ColumnResize: ["AllCommunity"],
  CommunityCore: ["AllCommunity"],
  CsrmSsrmSharedApi: ["ClientSideRowModelApi", "ServerSideRowModelApi"],
  EnterpriseCore: ["AllEnterprise"],
  FilterCore: [...aa, "QuickFilter", "ExternalFilter", "AdvancedFilter"],
  GroupCellRenderer: ["RowGrouping", "Pivot", "TreeData", "MasterDetail", "ServerSideRowModel"],
  KeyboardNavigation: ["AllCommunity"],
  LoadingCellRenderer: ["ServerSideRowModel"],
  MenuCore: ["ColumnMenu", "ContextMenu"],
  MenuItem: ["ColumnMenu", "ContextMenu", "MultiFilter", "IntegratedCharts", "ColumnsToolPanel"],
  Overlay: ["AllCommunity"],
  PinnedColumn: ["AllCommunity"],
  SharedAggregation: ["RowGrouping", "Pivot", "TreeData", "ServerSideRowModel"],
  SharedDragAndDrop: ["AllCommunity"],
  SharedMasterDetail: ["MasterDetail", "ServerSideRowModel"],
  SharedMenu: [...aa, "ColumnMenu", "ContextMenu"],
  SharedPivot: ["Pivot", "ServerSideRowModel"],
  SharedRowGrouping: ["RowGrouping", "ServerSideRowModel"],
  SharedRowSelection: ["RowSelection", "ServerSideRowModel"],
  SkeletonCellRenderer: ["ServerSideRowModel"],
  Sort: ["AllCommunity"],
  SsrmInfiniteSharedApi: ["InfiniteRowModel", "ServerSideRowModelApi"],
  SharedTreeData: ["TreeData", "ServerSideRowModel"]
};
var ah = {
  InfiniteRowModel: "infinite",
  ClientSideRowModelApi: "clientSide",
  ClientSideRowModel: "clientSide",
  ServerSideRowModelApi: "serverSide",
  ServerSideRowModel: "serverSide",
  ViewportRowModel: "viewport"
};
var au = {
  agSetColumnFilter: "SetFilter",
  agSetColumnFloatingFilter: "SetFilter",
  agMultiColumnFilter: "MultiFilter",
  agMultiColumnFloatingFilter: "MultiFilter",
  agGroupColumnFilter: "GroupFilter",
  agGroupColumnFloatingFilter: "GroupFilter",
  agGroupCellRenderer: "GroupCellRenderer",
  agGroupRowRenderer: "GroupCellRenderer",
  agRichSelect: "RichSelect",
  agRichSelectCellEditor: "RichSelect",
  agDetailCellRenderer: "SharedMasterDetail",
  agSparklineCellRenderer: "Sparklines",
  agDragAndDropImage: "SharedDragAndDrop",
  agColumnHeader: "ColumnHeaderComp",
  agColumnGroupHeader: "ColumnGroupHeaderComp",
  agSortIndicator: "Sort",
  agAnimateShowChangeCellRenderer: "HighlightChanges",
  agAnimateSlideCellRenderer: "HighlightChanges",
  agLoadingCellRenderer: "LoadingCellRenderer",
  agSkeletonCellRenderer: "SkeletonCellRenderer",
  agCheckboxCellRenderer: "CheckboxCellRenderer",
  agLoadingOverlay: "Overlay",
  agNoRowsOverlay: "Overlay",
  agTooltipComponent: "Tooltip",
  agReadOnlyFloatingFilter: "CustomFilter",
  agTextColumnFilter: "TextFilter",
  agNumberColumnFilter: "NumberFilter",
  agDateColumnFilter: "DateFilter",
  agDateInput: "DateFilter",
  agTextColumnFloatingFilter: "TextFilter",
  agNumberColumnFloatingFilter: "NumberFilter",
  agDateColumnFloatingFilter: "DateFilter",
  agCellEditor: "TextEditor",
  agSelectCellEditor: "SelectEditor",
  agTextCellEditor: "TextEditor",
  agNumberCellEditor: "NumberEditor",
  agDateCellEditor: "DateEditor",
  agDateStringCellEditor: "DateEditor",
  agCheckboxCellEditor: "CheckboxEditor",
  agLargeTextCellEditor: "LargeTextEditor",
  agMenuItem: "MenuItem",
  agColumnsToolPanel: "ColumnsToolPanel",
  agFiltersToolPanel: "FiltersToolPanel",
  agAggregationComponent: "StatusBar",
  agSelectedRowCountComponent: "StatusBar",
  agTotalRowCountComponent: "StatusBar",
  agFilteredRowCountComponent: "StatusBar",
  agTotalAndFilteredRowCountComponent: "StatusBar"
};
var ac = e => {
  let t = e.map(e => `import { ${ag(e)} } from '${al[e] ? "ag-grid-enterprise" : "ag-grid-community"}';`);
  e.some(e => "IntegratedCharts" === e || "Sparklines" === e) && t.push("import { AgChartsEnterpriseModule } from 'ag-charts-enterprise';");
  return `import { ModuleRegistry } from 'ag-grid-community'; 
${t.join(" \n")} 

ModuleRegistry.registerModules([ ${e.map(e => ag(e, !0)).join(", ")} ]); 

For more info see: ${eO}/modules/`;
};
function ag(e, t = !1) {
  return t && ("IntegratedCharts" === e || "Sparklines" === e) ? `${e}Module.with(AgChartsEnterpriseModule)` : `${e}Module`;
}
var ap = ({
  reasonOrId: e,
  moduleName: t,
  gridScoped: i,
  gridId: s,
  rowModelType: r,
  additionalText: o,
  isUmd: n
}) => {
  let l = function (e, t) {
    let i = [];
    (Array.isArray(e) ? e : [e]).forEach(e => {
      let s = ad[e];
      s ? s.forEach(e => {
        let s = ah[e];
        s && s !== t || i.push(e);
      }) : i.push(e);
    });
    return i;
  }(t, r);
  let a = "string" == typeof e ? e : aC[e];
  if (n) return function (e, t) {
    let i = t.filter(e => "IntegratedCharts" === e || "Sparklines" === e);
    let s = "";
    !globalThis?.agCharts && i.length > 0 ? s = `Unable to use ${e} as either the ag-charts-community or ag-charts-enterprise script needs to be included alongside ag-grid-enterprise.
` : t.some(e => al[e]) && (s += `Unable to use ${e} as that requires the ag-grid-enterprise script to be included.
`);
    return s;
  }(a, l);
  let d = l.filter(e => "IntegratedCharts" === e || "Sparklines" === e);
  let h = d.length > 0 ? `${d.map(e => ag(e)).join()} must be initialised with an AG Charts module. One of 'AgChartsCommunityModule' / 'AgChartsEnterpriseModule'.` : "";
  let u = `Unable to use ${a} as ${l.length > 1 ? "one of " + l.map(e => ag(e)).join(", ") : ag(l[0])} is not registered${i ? " for gridId: " + s : ""}. ${h} Check if you have registered the module:
`;
  return `${u}
${ac(l)}` + (o ? ` 

${o}` : "");
};
var am = e => `${e} must be initialised with an AG Charts module. One of 'AgChartsCommunityModule' / 'AgChartsEnterpriseModule'.

import { AgChartsEnterpriseModule } from 'ag-charts-enterprise';
import { ModuleRegistry } from 'ag-grid-community';
import { ${e} } from 'ag-grid-enterprise';
    
ModuleRegistry.registerModules([${e}.with(AgChartsEnterpriseModule)]);
    `;
var af = e => `AG Grid: Unable to use the Clipboard API (navigator.clipboard.${e}()). The reason why it could not be used has been logged in the previous line. For this reason the grid has defaulted to using a workaround which doesn't perform as well. Either fix why Clipboard API is blocked, OR stop this message from appearing by setting grid property suppressClipboardApi=true (which will default the grid to using the workaround rather than the API.`;
var aC = {
  1: "Charting Aggregation",
  2: "pivotResultFields",
  3: "setTooltip"
};
var aw = () => ({
  checkboxSelection: {
    version: "32.2",
    message: "Use `rowSelection.checkboxes` in `GridOptions` instead."
  },
  headerCheckboxSelection: {
    version: "32.2",
    message: "Use `rowSelection.headerCheckbox = true` in `GridOptions` instead."
  },
  headerCheckboxSelectionFilteredOnly: {
    version: "32.2",
    message: 'Use `rowSelection.selectAll = "filtered"` in `GridOptions` instead.'
  },
  headerCheckboxSelectionCurrentPageOnly: {
    version: "32.2",
    message: 'Use `rowSelection.selectAll = "currentPage"` in `GridOptions` instead.'
  },
  showDisabledCheckboxes: {
    version: "32.2",
    message: "Use `rowSelection.hideDisabledCheckboxes = true` in `GridOptions` instead."
  }
});
var av = () => ({
  aggFunc: {
    module: "SharedAggregation"
  },
  autoHeight: {
    supportedRowModels: ["clientSide", "serverSide"],
    module: "RowAutoHeight"
  },
  cellClass: {
    module: "CellStyle"
  },
  cellClassRules: {
    module: "CellStyle"
  },
  cellEditor: ({
    cellEditor: e,
    editable: t
  }) => {
    if (!t) return null;
    if ("string" == typeof e) {
      let t = au[e];
      if (t) return {
        module: t
      };
    }
    return {
      module: "CustomEditor"
    };
  },
  cellRenderer: ({
    cellRenderer: e
  }) => {
    if ("string" != typeof e) return null;
    let t = au[e];
    return t ? {
      module: t
    } : null;
  },
  cellRendererParams: {
    validate: e => (null != e.rowGroup || null != e.rowGroupIndex || "agGroupCellRenderer" === e.cellRenderer) && "checkbox" in e.cellRendererParams ? 'Since v33.0, `cellRendererParams.checkbox` has been deprecated. Use `rowSelection.checkboxLocation = "autoGroupColumn"` instead.' : null
  },
  cellStyle: {
    module: "CellStyle"
  },
  children: () => aS(),
  columnChooserParams: {
    module: "ColumnMenu"
  },
  contextMenuItems: {
    module: "ContextMenu"
  },
  dndSource: {
    module: "DragAndDrop"
  },
  dndSourceOnRowDrag: {
    module: "DragAndDrop"
  },
  editable: ({
    editable: e,
    cellEditor: t
  }) => e && !t ? {
    module: "TextEditor"
  } : null,
  enableCellChangeFlash: {
    module: "HighlightChanges"
  },
  enablePivot: {
    module: "SharedPivot"
  },
  enableRowGroup: {
    module: "SharedRowGrouping"
  },
  enableValue: {
    module: "SharedAggregation"
  },
  filter: ({
    filter: e
  }) => {
    if (e && "string" != typeof e && "boolean" != typeof e) return {
      module: "CustomFilter"
    };
    if ("string" == typeof e) {
      let t = au[e];
      if (t) return {
        module: t
      };
    }
    return {
      module: "ColumnFilter"
    };
  },
  floatingFilter: {
    module: "ColumnFilter"
  },
  headerCheckboxSelection: {
    supportedRowModels: ["clientSide", "serverSide"],
    validate: (e, {
      rowSelection: t
    }) => "multiple" === t ? null : "headerCheckboxSelection is only supported with rowSelection=multiple"
  },
  headerCheckboxSelectionCurrentPageOnly: {
    supportedRowModels: ["clientSide"],
    validate: (e, {
      rowSelection: t
    }) => "multiple" === t ? null : "headerCheckboxSelectionCurrentPageOnly is only supported with rowSelection=multiple"
  },
  headerCheckboxSelectionFilteredOnly: {
    supportedRowModels: ["clientSide"],
    validate: (e, {
      rowSelection: t
    }) => "multiple" === t ? null : "headerCheckboxSelectionFilteredOnly is only supported with rowSelection=multiple"
  },
  headerTooltip: {
    module: "Tooltip"
  },
  headerValueGetter: {
    validate: e => {
      let t = e.headerValueGetter;
      return "function" == typeof t || "string" == typeof t ? null : "headerValueGetter must be a function or a valid string expression";
    }
  },
  icons: {
    validate: ({
      icons: e
    }) => {
      if (e) {
        if (e.smallDown) return eU(262);
        if (e.smallLeft) return eU(263);
        if (e.smallRight) return eU(264);
      }
      return null;
    }
  },
  mainMenuItems: {
    module: "ColumnMenu"
  },
  menuTabs: e => {
    let t = ["columnsMenuTab", "generalMenuTab"];
    return e.menuTabs?.some(e => t.includes(e)) ? {
      module: "ColumnMenu"
    } : null;
  },
  pivot: {
    module: "SharedPivot"
  },
  pivotIndex: {
    module: "SharedPivot"
  },
  rowDrag: {
    module: "RowDrag"
  },
  rowGroup: {
    module: "SharedRowGrouping"
  },
  rowGroupIndex: {
    module: "SharedRowGrouping"
  },
  sortingOrder: {
    validate: e => {
      let t = e.sortingOrder;
      if (Array.isArray(t) && t.length > 0) {
        let e = t.filter(e => !lZ.includes(e));
        if (e.length > 0) return `sortingOrder must be an array with elements from [${lZ.map(eN).join()}], currently it includes [${e.map(eN).join()}]`;
      } else if (!Array.isArray(t) || t.length <= 0) return `sortingOrder must be an array with at least one element, currently it's ${t}`;
      return null;
    }
  },
  tooltipField: {
    module: "Tooltip"
  },
  tooltipValueGetter: {
    module: "Tooltip"
  },
  type: {
    validate: e => {
      let t = e.type;
      return t instanceof Array ? t.some(e => "string" != typeof e) ? "if colDef.type is supplied an array it should be of type 'string[]'" : null : "string" == typeof t ? null : "colDef.type should be of type 'string' | 'string[]'";
    }
  },
  rowSpan: {
    validate: (e, {
      suppressRowTransform: t
    }) => t ? null : "colDef.rowSpan requires suppressRowTransform to be enabled."
  },
  spanRows: {
    module: "CellSpan",
    dependencies: {
      editable: {
        required: [!1, void 0]
      },
      rowDrag: {
        required: [!1, void 0]
      },
      colSpan: {
        required: [!1, void 0]
      },
      rowSpan: {
        required: [!1, void 0]
      }
    },
    validate: (e, {
      rowSelection: t,
      cellSelection: i,
      suppressRowTransform: s,
      enableCellSpan: r,
      pagination: o,
      rowDragEntireRow: n,
      enableCellTextSelection: l
    }) => "object" == typeof t && t?.mode === "singleRow" && t?.enableClickSelection ? "colDef.spanRows is not supported with rowSelection.clickSelection" : i ? "colDef.spanRows is not supported with cellSelection." : s ? "colDef.spanRows is not supported with suppressRowTransform." : r ? o ? "colDef.spanRows is not supported with pagination." : n ? "colDef.spanRows is not supported with rowDragEntireRow." : l ? "colDef.spanRows is not supported with enableCellTextSelection." : null : "colDef.spanRows requires enableCellSpan to be enabled."
  }
});
var ab = {
  headerName: void 0,
  columnGroupShow: void 0,
  headerStyle: void 0,
  headerClass: void 0,
  toolPanelClass: void 0,
  headerValueGetter: void 0,
  pivotKeys: void 0,
  groupId: void 0,
  colId: void 0,
  sort: void 0,
  initialSort: void 0,
  field: void 0,
  type: void 0,
  cellDataType: void 0,
  tooltipComponent: void 0,
  tooltipField: void 0,
  headerTooltip: void 0,
  cellClass: void 0,
  showRowGroup: void 0,
  filter: void 0,
  initialAggFunc: void 0,
  defaultAggFunc: void 0,
  aggFunc: void 0,
  pinned: void 0,
  initialPinned: void 0,
  chartDataType: void 0,
  cellAriaRole: void 0,
  cellEditorPopupPosition: void 0,
  headerGroupComponent: void 0,
  headerGroupComponentParams: void 0,
  cellStyle: void 0,
  cellRenderer: void 0,
  cellRendererParams: void 0,
  cellEditor: void 0,
  cellEditorParams: void 0,
  filterParams: void 0,
  pivotValueColumn: void 0,
  headerComponent: void 0,
  headerComponentParams: void 0,
  floatingFilterComponent: void 0,
  floatingFilterComponentParams: void 0,
  tooltipComponentParams: void 0,
  refData: void 0,
  columnChooserParams: void 0,
  children: void 0,
  sortingOrder: void 0,
  allowedAggFuncs: void 0,
  menuTabs: void 0,
  pivotTotalColumnIds: void 0,
  cellClassRules: void 0,
  icons: void 0,
  sortIndex: void 0,
  initialSortIndex: void 0,
  flex: void 0,
  initialFlex: void 0,
  width: void 0,
  initialWidth: void 0,
  minWidth: void 0,
  maxWidth: void 0,
  rowGroupIndex: void 0,
  initialRowGroupIndex: void 0,
  pivotIndex: void 0,
  initialPivotIndex: void 0,
  suppressColumnsToolPanel: void 0,
  suppressFiltersToolPanel: void 0,
  openByDefault: void 0,
  marryChildren: void 0,
  suppressStickyLabel: void 0,
  hide: void 0,
  initialHide: void 0,
  rowGroup: void 0,
  initialRowGroup: void 0,
  pivot: void 0,
  initialPivot: void 0,
  checkboxSelection: void 0,
  showDisabledCheckboxes: void 0,
  headerCheckboxSelection: void 0,
  headerCheckboxSelectionFilteredOnly: void 0,
  headerCheckboxSelectionCurrentPageOnly: void 0,
  suppressHeaderMenuButton: void 0,
  suppressMovable: void 0,
  lockPosition: void 0,
  lockVisible: void 0,
  lockPinned: void 0,
  unSortIcon: void 0,
  suppressSizeToFit: void 0,
  suppressAutoSize: void 0,
  enableRowGroup: void 0,
  enablePivot: void 0,
  enableValue: void 0,
  editable: void 0,
  suppressPaste: void 0,
  suppressNavigable: void 0,
  enableCellChangeFlash: void 0,
  rowDrag: void 0,
  dndSource: void 0,
  autoHeight: void 0,
  wrapText: void 0,
  sortable: void 0,
  resizable: void 0,
  singleClickEdit: void 0,
  floatingFilter: void 0,
  cellEditorPopup: void 0,
  suppressFillHandle: void 0,
  wrapHeaderText: void 0,
  autoHeaderHeight: void 0,
  dndSourceOnRowDrag: void 0,
  valueGetter: void 0,
  valueSetter: void 0,
  filterValueGetter: void 0,
  keyCreator: void 0,
  valueFormatter: void 0,
  valueParser: void 0,
  comparator: void 0,
  equals: void 0,
  pivotComparator: void 0,
  suppressKeyboardEvent: void 0,
  suppressHeaderKeyboardEvent: void 0,
  colSpan: void 0,
  rowSpan: void 0,
  spanRows: void 0,
  getQuickFilterText: void 0,
  onCellValueChanged: void 0,
  onCellClicked: void 0,
  onCellDoubleClicked: void 0,
  onCellContextMenu: void 0,
  rowDragText: void 0,
  tooltipValueGetter: void 0,
  cellRendererSelector: void 0,
  cellEditorSelector: void 0,
  suppressSpanHeaderHeight: void 0,
  useValueFormatterForExport: void 0,
  useValueParserForImport: void 0,
  mainMenuItems: void 0,
  contextMenuItems: void 0,
  suppressFloatingFilterButton: void 0,
  suppressHeaderFilterButton: void 0,
  suppressHeaderContextMenu: void 0,
  loadingCellRenderer: void 0,
  loadingCellRendererParams: void 0,
  loadingCellRendererSelector: void 0,
  context: void 0
};
var ay = () => Object.keys(ab);
var aS = () => ({
  objectName: "colDef",
  allProperties: ay(),
  docsUrl: "column-properties/",
  deprecations: aw(),
  validations: av()
});
var aR = () => ({
  suppressLoadingOverlay: {
    version: "32",
    message: "Use `loading`=false instead."
  },
  enableFillHandle: {
    version: "32.2",
    message: "Use `cellSelection.handle` instead."
  },
  enableRangeHandle: {
    version: "32.2",
    message: "Use `cellSelection.handle` instead."
  },
  enableRangeSelection: {
    version: "32.2",
    message: "Use `cellSelection = true` instead."
  },
  suppressMultiRangeSelection: {
    version: "32.2",
    message: "Use `cellSelection.suppressMultiRanges` instead."
  },
  suppressClearOnFillReduction: {
    version: "32.2",
    message: "Use `cellSelection.handle.suppressClearOnFillReduction` instead."
  },
  fillHandleDirection: {
    version: "32.2",
    message: "Use `cellSelection.handle.direction` instead."
  },
  fillOperation: {
    version: "32.2",
    message: "Use `cellSelection.handle.setFillValue` instead."
  },
  suppressRowClickSelection: {
    version: "32.2",
    message: "Use `rowSelection.enableClickSelection` instead."
  },
  suppressRowDeselection: {
    version: "32.2",
    message: "Use `rowSelection.enableClickSelection` instead."
  },
  rowMultiSelectWithClick: {
    version: "32.2",
    message: "Use `rowSelection.enableSelectionWithoutKeys` instead."
  },
  groupSelectsChildren: {
    version: "32.2",
    message: 'Use `rowSelection.groupSelects = "descendants"` instead.'
  },
  groupSelectsFiltered: {
    version: "32.2",
    message: 'Use `rowSelection.groupSelects = "filteredDescendants"` instead.'
  },
  isRowSelectable: {
    version: "32.2",
    message: "Use `selectionOptions.isRowSelectable` instead."
  },
  suppressCopySingleCellRanges: {
    version: "32.2",
    message: "Use `rowSelection.copySelectedRows` instead."
  },
  suppressCopyRowsToClipboard: {
    version: "32.2",
    message: "Use `rowSelection.copySelectedRows` instead."
  },
  onRangeSelectionChanged: {
    version: "32.2",
    message: "Use `onCellSelectionChanged` instead."
  },
  onRangeDeleteStart: {
    version: "32.2",
    message: "Use `onCellSelectionDeleteStart` instead."
  },
  onRangeDeleteEnd: {
    version: "32.2",
    message: "Use `onCellSelectionDeleteEnd` instead."
  },
  suppressBrowserResizeObserver: {
    version: "32.2",
    message: "The grid always uses the browser's ResizeObserver, this grid option has no effect."
  },
  onColumnEverythingChanged: {
    version: "32.2",
    message: "Either use `onDisplayedColumnsChanged` which is fired at the same time, or use one of the more specific column events."
  },
  groupRemoveSingleChildren: {
    version: "33",
    message: "Use `groupHideParentOfSingleChild` instead."
  },
  groupRemoveLowestSingleChildren: {
    version: "33",
    message: 'Use `groupHideParentOfSingleChild: "leafGroupsOnly"` instead.'
  },
  suppressRowGroupHidesColumns: {
    version: "33",
    message: 'Use `suppressGroupChangesColumnVisibility: "suppressHideOnGroup"` instead.'
  },
  suppressMakeColumnVisibleAfterUnGroup: {
    version: "33",
    message: 'Use `suppressGroupChangesColumnVisibility: "suppressShowOnUngroup"` instead.'
  },
  unSortIcon: {
    version: "33",
    message: "Use `defaultColDef.unSortIcon` instead."
  },
  sortingOrder: {
    version: "33",
    message: "Use `defaultColDef.sortingOrder` instead."
  },
  suppressPropertyNamesCheck: {
    version: "33",
    message: "`gridOptions` and `columnDefs` both have a `context` property that should be used for arbitrary user data. This means that column definitions and gridOptions should only contain valid properties making this property redundant."
  }
});
function aD(e, t, i, s = Number.MAX_VALUE) {
  return "number" == typeof t || null == t ? null == t || t >= i && t <= s ? null : s === Number.MAX_VALUE ? `${e}: value should be greater than or equal to ${i}` : `${e}: value should be between ${i} and ${s}` : `${e}: value should be a number`;
}
var ax = () => {
  let e = {};
  ae.forEach(t => {
    e[t] = {
      expectedType: "boolean"
    };
  });
  l9.forEach(t => {
    e[t] = {
      expectedType: "number"
    };
  });
  tI(e, {
    alignedGrids: {
      module: "AlignedGrids"
    },
    allowContextMenuWithControlKey: {
      module: "ContextMenu"
    },
    autoSizePadding: {
      validate: ({
        autoSizePadding: e
      }) => aD("autoSizePadding", e, 0)
    },
    autoSizeStrategy: {
      module: "ColumnAutoSize"
    },
    cacheBlockSize: {
      supportedRowModels: ["serverSide", "infinite"],
      validate: ({
        cacheBlockSize: e
      }) => aD("cacheBlockSize", e, 1)
    },
    cacheOverflowSize: {
      validate: ({
        cacheOverflowSize: e
      }) => aD("cacheOverflowSize", e, 1)
    },
    cellSelection: {
      module: "CellSelection"
    },
    columnHoverHighlight: {
      module: "ColumnHover"
    },
    datasource: {
      supportedRowModels: ["infinite"],
      module: "InfiniteRowModel"
    },
    doesExternalFilterPass: {
      module: "ExternalFilter"
    },
    domLayout: {
      validate: e => {
        let t = e.domLayout;
        let i = ["autoHeight", "normal", "print"];
        return t && !i.includes(t) ? `domLayout must be one of [${i.join()}], currently it's ${t}` : null;
      }
    },
    editType: {
      module: "EditCore"
    },
    enableAdvancedFilter: {
      module: "AdvancedFilter"
    },
    enableCharts: {
      module: "IntegratedCharts"
    },
    enableFillHandle: {
      dependencies: {
        enableRangeSelection: {
          required: [!0]
        }
      }
    },
    enableRangeHandle: {
      dependencies: {
        enableRangeSelection: {
          required: [!0]
        }
      }
    },
    enableRangeSelection: {
      module: "CellSelection",
      dependencies: {
        rowDragEntireRow: {
          required: [!1, void 0]
        }
      }
    },
    rowNumbers: {
      module: "RowNumbers"
    },
    getContextMenuItems: {
      module: "ContextMenu"
    },
    getLocaleText: {
      module: "Locale"
    },
    getMainMenuItems: {
      module: "ColumnMenu"
    },
    getRowClass: {
      module: "RowStyle"
    },
    getRowStyle: {
      module: "RowStyle"
    },
    grandTotalRow: {
      module: "SharedRowGrouping"
    },
    groupDefaultExpanded: {
      supportedRowModels: ["clientSide"]
    },
    groupHideOpenParents: {
      supportedRowModels: ["clientSide", "serverSide"],
      dependencies: {
        groupTotalRow: {
          required: [void 0, "bottom"]
        },
        treeData: {
          required: [void 0, !1],
          reason: "Tree Data has values at the group level so it doesn't make sense to hide them."
        }
      }
    },
    groupHideParentOfSingleChild: {
      dependencies: {
        groupHideOpenParents: {
          required: [void 0, !1]
        }
      }
    },
    groupRemoveLowestSingleChildren: {
      dependencies: {
        groupHideOpenParents: {
          required: [void 0, !1]
        },
        groupRemoveSingleChildren: {
          required: [void 0, !1]
        }
      }
    },
    groupRemoveSingleChildren: {
      dependencies: {
        groupHideOpenParents: {
          required: [void 0, !1]
        },
        groupRemoveLowestSingleChildren: {
          required: [void 0, !1]
        }
      }
    },
    groupSelectsChildren: {
      dependencies: {
        rowSelection: {
          required: ["multiple"]
        }
      }
    },
    icons: {
      validate: ({
        icons: e
      }) => {
        if (e) {
          if (e.smallDown) return eU(262);
          if (e.smallLeft) return eU(263);
          if (e.smallRight) return eU(264);
        }
        return null;
      }
    },
    infiniteInitialRowCount: {
      validate: ({
        infiniteInitialRowCount: e
      }) => aD("infiniteInitialRowCount", e, 1)
    },
    initialGroupOrderComparator: {
      supportedRowModels: ["clientSide"]
    },
    initialState: {
      module: "GridState"
    },
    isExternalFilterPresent: {
      module: "ExternalFilter"
    },
    keepDetailRowsCount: {
      validate: ({
        keepDetailRowsCount: e
      }) => aD("keepDetailRowsCount", e, 1)
    },
    localeText: {
      module: "Locale"
    },
    masterDetail: {
      module: "SharedMasterDetail"
    },
    pagination: {
      module: "Pagination"
    },
    paginationPageSize: {
      validate: ({
        paginationPageSize: e
      }) => aD("paginationPageSize", e, 1)
    },
    paginationPageSizeSelector: {
      validate: e => {
        let t = e.paginationPageSizeSelector;
        return "boolean" == typeof t || null == t ? null : t.length ? null : `'paginationPageSizeSelector' cannot be an empty array.
                    If you want to hide the page size selector, set paginationPageSizeSelector to false.`;
      }
    },
    pinnedTopRowData: {
      module: "PinnedRow"
    },
    pinnedBottomRowData: {
      module: "PinnedRow"
    },
    pivotMode: {
      dependencies: {
        treeData: {
          required: [!1, void 0],
          reason: "Pivot Mode is not supported with Tree Data."
        }
      },
      module: "SharedPivot"
    },
    pivotPanelShow: {
      module: "RowGroupingPanel"
    },
    quickFilterText: {
      supportedRowModels: ["clientSide"],
      module: "QuickFilter"
    },
    rowBuffer: {
      validate: ({
        rowBuffer: e
      }) => aD("rowBuffer", e, 0)
    },
    rowClass: {
      validate: e => "function" == typeof e.rowClass ? "rowClass should not be a function, please use getRowClass instead" : null,
      module: "RowStyle"
    },
    rowClassRules: {
      module: "RowStyle"
    },
    rowData: {
      supportedRowModels: ["clientSide"],
      module: "ClientSideRowModel"
    },
    rowDragManaged: {
      supportedRowModels: ["clientSide"],
      dependencies: {
        treeData: {
          required: [!1, void 0]
        },
        pagination: {
          required: [!1, void 0]
        }
      },
      module: "RowDrag"
    },
    rowGroupPanelShow: {
      module: "RowGroupingPanel"
    },
    rowSelection: {
      validate: ({
        rowSelection: e
      }) => e && "string" == typeof e ? 'As of version 32.2.1, using `rowSelection` with the values "single" or "multiple" has been deprecated. Use the object value instead.' : e && "object" != typeof e ? "Expected `RowSelectionOptions` object for the `rowSelection` property." : e && "multiRow" !== e.mode && "singleRow" !== e.mode ? `Selection mode "${e.mode}" is invalid. Use one of 'singleRow' or 'multiRow'.` : null,
      module: "SharedRowSelection"
    },
    rowStyle: {
      validate: e => {
        let t = e.rowStyle;
        return t && "function" == typeof t ? "rowStyle should be an object of key/value styles, not be a function, use getRowStyle() instead" : null;
      },
      module: "RowStyle"
    },
    serverSideDatasource: {
      supportedRowModels: ["serverSide"],
      module: "ServerSideRowModel"
    },
    serverSideInitialRowCount: {
      supportedRowModels: ["serverSide"],
      validate: ({
        serverSideInitialRowCount: e
      }) => aD("serverSideInitialRowCount", e, 1)
    },
    serverSideOnlyRefreshFilteredGroups: {
      supportedRowModels: ["serverSide"]
    },
    serverSideSortAllLevels: {
      supportedRowModels: ["serverSide"]
    },
    sideBar: {
      module: "SideBar"
    },
    sortingOrder: {
      validate: e => {
        let t = e.sortingOrder;
        if (Array.isArray(t) && t.length > 0) {
          let e = t.filter(e => !lZ.includes(e));
          if (e.length > 0) return `sortingOrder must be an array with elements from [${lZ.map(eN).join()}], currently it includes [${e.map(eN).join()}]`;
        } else if (!Array.isArray(t) || t.length <= 0) return `sortingOrder must be an array with at least one element, currently it's ${t}`;
        return null;
      }
    },
    statusBar: {
      module: "StatusBar"
    },
    tooltipHideDelay: {
      validate: e => e.tooltipHideDelay && e.tooltipHideDelay < 0 ? "tooltipHideDelay should not be lower than 0" : null
    },
    tooltipShowDelay: {
      validate: e => e.tooltipShowDelay && e.tooltipShowDelay < 0 ? "tooltipShowDelay should not be lower than 0" : null
    },
    treeData: {
      supportedRowModels: ["clientSide", "serverSide"],
      module: "SharedTreeData",
      validate: e => {
        let t = e.rowModelType ?? "clientSide";
        switch (t) {
          case "clientSide":
            {
              let {
                treeDataChildrenField,
                getDataPath
              } = e;
              if (!treeDataChildrenField && !getDataPath) return "treeData requires either 'treeDataChildrenField' or 'getDataPath' in the clientSide row model.";
              if (treeDataChildrenField && getDataPath) return "Cannot use both 'treeDataChildrenField' and 'getDataPath' at the same time.";
              break;
            }
          case "serverSide":
            {
              let i = `treeData requires 'isServerSideGroup' and 'getServerSideGroupKey' in the ${t} row model.`;
              return e.isServerSideGroup && e.getServerSideGroupKey ? null : i;
            }
        }
        return null;
      }
    },
    treeDataChildrenField: {
      module: "SharedTreeData"
    },
    undoRedoCellEditing: {
      module: "UndoRedoEdit"
    },
    valueCache: {
      module: "ValueCache"
    },
    viewportDatasource: {
      supportedRowModels: ["viewport"],
      module: "ViewportRowModel"
    },
    viewportRowModelBufferSize: {
      validate: ({
        viewportRowModelBufferSize: e
      }) => aD("viewportRowModelBufferSize", e, 0)
    },
    viewportRowModelPageSize: {
      validate: ({
        viewportRowModelPageSize: e
      }) => aD("viewportRowModelPageSize", e, 1)
    },
    rowDragEntireRow: {
      dependencies: {
        cellSelection: {
          required: [void 0]
        }
      }
    },
    enableCellSpan: {
      module: "CellSpan"
    }
  });
  return e;
};
function aP(e) {
  e.sibling && (e.sibling.childrenAfterFilter = e.childrenAfterFilter);
}
var aE = 0;
var aF = {
  january: "January",
  february: "February",
  march: "March",
  april: "April",
  may: "May",
  june: "June",
  july: "July",
  august: "August",
  september: "September",
  october: "October",
  november: "November",
  december: "December"
};
var aA = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function ak(e, t) {
  return null == e ? -1 : null == t ? 1 : parseFloat(e) - parseFloat(t);
}
function aM(e, t) {
  return e ? new $$iR37(i => {
    e.then(e => {
      "function" != typeof e.setModel && ($$eW42(65), i());
      (e.setModel(t) || $$iR37.resolve()).then(() => i());
    });
  }) : $$iR37.resolve();
}
function aT(e) {
  return "agGroupColumnFilter" === e.getColDef().filter;
}
function aI(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
var aL = class {
  constructor() {
    this.customFilterOptions = {};
  }
  init(e, t) {
    this.filterOptions = e.filterOptions || t;
    this.mapCustomOptions();
    this.selectDefaultItem(e);
  }
  mapCustomOptions() {
    let {
      filterOptions
    } = this;
    filterOptions && filterOptions.forEach(t => {
      if ("string" != typeof t) {
        if (![["displayKey"], ["displayName"], ["predicate", "test"]].every(e => !!e.some(e => null != t[e]) || ($$eW42(72, {
          keys: e
        }), !1))) {
          this.filterOptions = filterOptions.filter(e => e === t) || [];
          return;
        }
        this.customFilterOptions[t.displayKey] = t;
      }
    });
  }
  selectDefaultItem(e) {
    let {
      filterOptions
    } = this;
    if (e.defaultOption) this.defaultOption = e.defaultOption;else if (filterOptions.length >= 1) {
      let e = filterOptions[0];
      "string" == typeof e ? this.defaultOption = e : e.displayKey ? this.defaultOption = e.displayKey : $$eW42(73);
    } else $$eW42(74);
  }
  getCustomOption(e) {
    return this.customFilterOptions[e];
  }
};
function aO(e, t, i) {
  return null == i ? e.splice(t) : e.splice(t, i);
}
function aG(e) {
  return null == e || "string" == typeof e && 0 === e.trim().length;
}
var aH = class extends sW {
  constructor() {
    super(...arguments);
    this.eTypes = [];
    this.eJoinOperatorPanels = [];
    this.eJoinOperatorsAnd = [];
    this.eJoinOperatorsOr = [];
    this.eConditionBodies = [];
    this.listener = () => this.onUiChanged();
    this.lastUiCompletePosition = null;
    this.joinOperatorId = 0;
  }
  getNumberOfInputs(e) {
    let t = this.optionsFactory.getCustomOption(e);
    if (t) {
      let {
        numberOfInputs
      } = t;
      return null != numberOfInputs ? numberOfInputs : 1;
    }
    return e && ["empty", "notBlank", "blank"].indexOf(e) >= 0 ? 0 : "inRange" === e ? 2 : 1;
  }
  onFloatingFilterChanged(e, t) {
    this.setTypeFromFloatingFilter(e);
    this.setValueFromFloatingFilter(t);
    this.onUiChanged(!0);
  }
  setTypeFromFloatingFilter(e) {
    this.eTypes.forEach((t, i) => {
      let s = 0 === i ? e : this.optionsFactory.defaultOption;
      t.setValue(s, !0);
    });
  }
  getModelFromUi() {
    let e = this.getUiCompleteConditions();
    return 0 === e.length ? null : this.maxNumConditions > 1 && e.length > 1 ? {
      filterType: this.filterType,
      operator: this.getJoinOperator(),
      conditions: e
    } : e[0];
  }
  getConditionTypes() {
    return this.eTypes.map(e => e.getValue());
  }
  getConditionType(e) {
    return this.eTypes[e].getValue();
  }
  getJoinOperator() {
    let {
      eJoinOperatorsOr,
      defaultJoinOperator
    } = this;
    return 0 === eJoinOperatorsOr.length ? defaultJoinOperator : !0 === eJoinOperatorsOr[0].getValue() ? "OR" : "AND";
  }
  areModelsEqual(e, t) {
    if (!e && !t) return !0;
    if (!e && t || e && !t) return !1;
    let i = !e.operator;
    let s = !t.operator;
    return (!!i || !s) && (!i || !!s) && (i ? this.areSimpleModelsEqual(e, t) : e.operator === t.operator && tY(e.conditions, t.conditions, (e, t) => this.areSimpleModelsEqual(e, t)));
  }
  shouldRefresh(e) {
    let t = this.getModel();
    let i = t ? t.conditions ?? [t] : null;
    let s = e.filterOptions?.map(e => "string" == typeof e ? e : e.displayKey) ?? this.getDefaultFilterOptions();
    return !!(!i || i.every(e => void 0 !== s.find(t => t === e.type))) && ("number" != typeof e.maxNumConditions || !i || !(i.length > e.maxNumConditions));
  }
  refresh(e) {
    return !!(this.shouldRefresh(e) && super.refresh(e)) && (this.setParams(e), this.removeConditionsAndOperators(0), this.createOption(), this.setModel(this.getModel()), !0);
  }
  setModelIntoUi(e) {
    if (e.operator) {
      var t;
      var i;
      let s;
      let r = e.conditions;
      null == r && (r = [], $$eW42(77));
      t = r;
      i = this.maxNumConditions;
      (s = t.length) > i && (t.splice(i), $$eW42(78), s = i);
      let o = s;
      let n = this.getNumConditions();
      if (o < n) this.removeConditionsAndOperators(o);else if (o > n) for (let e = n; e < o; e++) {
        this.createJoinOperatorPanel();
        this.createOption();
      }
      let l = "OR" === e.operator;
      this.eJoinOperatorsAnd.forEach(e => e.setValue(!l, !0));
      this.eJoinOperatorsOr.forEach(e => e.setValue(l, !0));
      r.forEach((e, t) => {
        this.eTypes[t].setValue(e.type, !0);
        this.setConditionIntoUi(e, t);
      });
    } else {
      this.getNumConditions() > 1 && this.removeConditionsAndOperators(1);
      this.eTypes[0].setValue(e.type, !0);
      this.setConditionIntoUi(e, 0);
    }
    this.lastUiCompletePosition = this.getNumConditions() - 1;
    this.createMissingConditionsAndOperators();
    this.onUiChanged();
    return $$iR37.resolve();
  }
  doesFilterPass(e) {
    let t = this.getModel();
    if (null == t) return !0;
    let {
      operator
    } = t;
    let s = [];
    operator ? s.push(...(t.conditions ?? [])) : s.push(t);
    return s[operator && "OR" === operator ? "some" : "every"](t => this.individualConditionPasses(e, t));
  }
  setParams(e) {
    var t;
    super.setParams(e);
    this.setNumConditions(e);
    this.defaultJoinOperator = "AND" === (t = e.defaultJoinOperator) || "OR" === t ? t : "AND";
    this.filterPlaceholder = e.filterPlaceholder;
    this.optionsFactory = new aL();
    this.optionsFactory.init(e, this.getDefaultFilterOptions());
    this.createFilterListOptions();
    this.createOption();
    this.createMissingConditionsAndOperators();
    this.isReadOnly() && this.eFilterBody.setAttribute("tabindex", "-1");
  }
  setNumConditions(e) {
    let t = e.maxNumConditions ?? 2;
    t < 1 && ($$eW42(79), t = 1);
    this.maxNumConditions = t;
    let i = e.numAlwaysVisibleConditions ?? 1;
    i < 1 && ($$eW42(80), i = 1);
    i > t && ($$eW42(81), i = t);
    this.numAlwaysVisibleConditions = i;
  }
  createOption() {
    let e = this.createManagedBean(new ou());
    this.eTypes.push(e);
    e.addCssClass("ag-filter-select");
    this.eFilterBody.appendChild(e.getGui());
    let t = this.createValueElement();
    this.eConditionBodies.push(t);
    this.eFilterBody.appendChild(t);
    this.putOptionsIntoDropdown(e);
    this.resetType(e);
    let i = this.getNumConditions() - 1;
    this.forEachPositionInput(i, e => this.resetInput(e));
    this.addChangedListeners(e, i);
  }
  createJoinOperatorPanel() {
    let e = document.createElement("div");
    this.eJoinOperatorPanels.push(e);
    e.classList.add("ag-filter-condition");
    let t = this.createJoinOperator(this.eJoinOperatorsAnd, e, "and");
    let i = this.createJoinOperator(this.eJoinOperatorsOr, e, "or");
    this.eFilterBody.appendChild(e);
    let s = this.eJoinOperatorPanels.length - 1;
    let r = this.joinOperatorId++;
    this.resetJoinOperatorAnd(t, s, r);
    this.resetJoinOperatorOr(i, s, r);
    this.isReadOnly() || (t.onValueChange(this.listener), i.onValueChange(this.listener));
  }
  createJoinOperator(e, t, i) {
    let s = this.createManagedBean(new r9());
    e.push(s);
    let r = "ag-filter-condition-operator";
    s.addCssClass(r);
    s.addCssClass(`${r}-${i}`);
    t.appendChild(s.getGui());
    return s;
  }
  createFilterListOptions() {
    this.filterListOptions = this.optionsFactory.filterOptions.map(e => "string" == typeof e ? this.createBoilerplateListOption(e) : this.createCustomListOption(e));
  }
  putOptionsIntoDropdown(e) {
    let {
      filterListOptions
    } = this;
    filterListOptions.forEach(t => {
      e.addOption(t);
    });
    e.setDisabled(filterListOptions.length <= 1);
  }
  createBoilerplateListOption(e) {
    return {
      value: e,
      text: this.translate(e)
    };
  }
  createCustomListOption(e) {
    let {
      displayKey
    } = e;
    let i = this.optionsFactory.getCustomOption(e.displayKey);
    return {
      value: displayKey,
      text: i ? this.getLocaleTextFunc()(i.displayKey, i.displayName) : this.translate(displayKey)
    };
  }
  createBodyTemplate() {
    return "";
  }
  getAgComponents() {
    return [];
  }
  getCssIdentifier() {
    return "simple-filter";
  }
  updateUiVisibility() {
    let e = this.getJoinOperator();
    this.updateNumConditions();
    this.updateConditionStatusesAndValues(this.lastUiCompletePosition, e);
  }
  updateNumConditions() {
    let e = -1;
    let t = !0;
    for (let i = 0; i < this.getNumConditions(); i++) this.isConditionUiComplete(i) ? e = i : t = !1;
    if (this.shouldAddNewConditionAtEnd(t)) {
      this.createJoinOperatorPanel();
      this.createOption();
    } else {
      let t = this.lastUiCompletePosition ?? this.getNumConditions() - 2;
      if (e < t) {
        this.removeConditionsAndOperators(t + 1);
        let i = e + 1;
        let s = t - i;
        s > 0 && this.removeConditionsAndOperators(i, s);
        this.createMissingConditionsAndOperators();
      }
    }
    this.lastUiCompletePosition = e;
  }
  updateConditionStatusesAndValues(e, t) {
    this.eTypes.forEach((t, i) => {
      let s = this.isConditionDisabled(i, e);
      t.setDisabled(s || this.filterListOptions.length <= 1);
      1 === i && ($(this.eJoinOperatorPanels[0], s), this.eJoinOperatorsAnd[0].setDisabled(s), this.eJoinOperatorsOr[0].setDisabled(s));
    });
    this.eConditionBodies.forEach((e, t) => {
      U(e, this.isConditionBodyVisible(t));
    });
    let i = (t ?? this.getJoinOperator()) === "OR";
    this.eJoinOperatorsAnd.forEach(e => {
      e.setValue(!i, !0);
    });
    this.eJoinOperatorsOr.forEach(e => {
      e.setValue(i, !0);
    });
    this.forEachInput((t, i, s, r) => {
      this.setElementDisplayed(t, i < r);
      this.setElementDisabled(t, this.isConditionDisabled(s, e));
    });
    this.resetPlaceholder();
  }
  shouldAddNewConditionAtEnd(e) {
    return e && this.getNumConditions() < this.maxNumConditions && !this.isReadOnly();
  }
  removeConditionsAndOperators(e, t) {
    if (e >= this.getNumConditions()) return;
    let {
      eTypes,
      eConditionBodies,
      eJoinOperatorPanels,
      eJoinOperatorsAnd,
      eJoinOperatorsOr
    } = this;
    this.removeComponents(eTypes, e, t);
    this.removeElements(eConditionBodies, e, t);
    this.removeValueElements(e, t);
    let l = Math.max(e - 1, 0);
    this.removeElements(eJoinOperatorPanels, l, t);
    this.removeComponents(eJoinOperatorsAnd, l, t);
    this.removeComponents(eJoinOperatorsOr, l, t);
  }
  removeElements(e, t, i) {
    aO(e, t, i).forEach(e => $$ei11(e));
  }
  removeComponents(e, t, i) {
    aO(e, t, i).forEach(e => {
      $$ei11(e.getGui());
      this.destroyBean(e);
    });
  }
  afterGuiAttached(e) {
    if (super.afterGuiAttached(e), this.resetPlaceholder(), !e?.suppressFocus) {
      let e;
      let {
        eFilterBody,
        eTypes
      } = this;
      if (!this.isReadOnly()) {
        let t = this.getInputs(0)[0];
        e = t instanceof rQ && this.isConditionBodyVisible(0) ? t.getInputElement() : eTypes[0]?.getFocusableElement();
      }
      (e ?? eFilterBody).focus({
        preventScroll: !0
      });
    }
  }
  afterGuiDetached() {
    super.afterGuiDetached();
    let e = this.getModel();
    this.resetUiToActiveModel(e);
    let t = -1;
    let i = -1;
    let s = !1;
    let r = this.getJoinOperator();
    for (let e = this.getNumConditions() - 1; e >= 0; e--) if (this.isConditionUiComplete(e)) -1 === t && (t = e, i = e);else {
      let r = e >= this.numAlwaysVisibleConditions && !this.isConditionUiComplete(e - 1);
      let o = e < t;
      (r || o) && (this.removeConditionsAndOperators(e, 1), s = !0, o && i--);
    }
    let o = !1;
    this.getNumConditions() < this.numAlwaysVisibleConditions && (this.createMissingConditionsAndOperators(), o = !0);
    this.shouldAddNewConditionAtEnd(i === this.getNumConditions() - 1) && (this.createJoinOperatorPanel(), this.createOption(), o = !0);
    o && this.updateConditionStatusesAndValues(i, r);
    s && this.updateJoinOperatorsDisabled();
    this.lastUiCompletePosition = i;
  }
  getPlaceholderText(e, t) {
    let i = this.translate(e);
    if ("function" == typeof this.filterPlaceholder) {
      let e = this.eTypes[t].getValue();
      let s = this.translate(e);
      i = this.filterPlaceholder({
        filterOptionKey: e,
        filterOption: s,
        placeholder: i
      });
    } else "string" == typeof this.filterPlaceholder && (i = this.filterPlaceholder);
    return i;
  }
  resetPlaceholder() {
    let e = this.getLocaleTextFunc();
    this.forEachInput((t, i, s, r) => {
      if (!(t instanceof rQ)) return;
      let o = 0 === i && r > 1 ? e("ariaFilterFromValue", "Filter from value") : 0 === i ? e("ariaFilterValue", "Filter Value") : e("ariaFilterToValue", "Filter to Value");
      t.setInputPlaceholder(this.getPlaceholderText(0 === i && r > 1 ? "inRangeStart" : 0 === i ? "filterOoo" : "inRangeEnd", s));
      t.setInputAriaLabel(o);
    });
  }
  setElementValue(e, t, i) {
    e instanceof rQ && e.setValue(null != t ? String(t) : null, !0);
  }
  setElementDisplayed(e, t) {
    e instanceof iS && U(e.getGui(), t);
  }
  setElementDisabled(e, t) {
    e instanceof iS && $(e.getGui(), t);
  }
  attachElementOnChange(e, t) {
    e instanceof rQ && e.onValueChange(t);
  }
  forEachInput(e) {
    this.getConditionTypes().forEach((t, i) => {
      this.forEachPositionTypeInput(i, t, e);
    });
  }
  forEachPositionInput(e, t) {
    let i = this.getConditionType(e);
    this.forEachPositionTypeInput(e, i, t);
  }
  forEachPositionTypeInput(e, t, i) {
    let s = this.getNumberOfInputs(t);
    let r = this.getInputs(e);
    for (let t = 0; t < r.length; t++) {
      let o = r[t];
      null != o && i(o, t, e, s);
    }
  }
  isConditionDisabled(e, t) {
    return !!this.isReadOnly() || 0 !== e && e > t + 1;
  }
  isConditionBodyVisible(e) {
    let t = this.getConditionType(e);
    return this.getNumberOfInputs(t) > 0;
  }
  isConditionUiComplete(e) {
    return !(e >= this.getNumConditions() || "empty" === this.getConditionType(e) || this.getValues(e).some(e => null == e));
  }
  getNumConditions() {
    return this.eTypes.length;
  }
  getUiCompleteConditions() {
    let e = [];
    for (let t = 0; t < this.getNumConditions(); t++) this.isConditionUiComplete(t) && e.push(this.createCondition(t));
    return e;
  }
  createMissingConditionsAndOperators() {
    if (!this.isReadOnly()) for (let e = this.getNumConditions(); e < this.numAlwaysVisibleConditions; e++) {
      this.createJoinOperatorPanel();
      this.createOption();
    }
  }
  resetUiToDefaults(e) {
    this.removeConditionsAndOperators(this.isReadOnly() ? 1 : this.numAlwaysVisibleConditions);
    this.eTypes.forEach(e => this.resetType(e));
    this.eJoinOperatorsAnd.forEach((e, t) => this.resetJoinOperatorAnd(e, t, this.joinOperatorId + t));
    this.eJoinOperatorsOr.forEach((e, t) => this.resetJoinOperatorOr(e, t, this.joinOperatorId + t));
    this.joinOperatorId++;
    this.forEachInput(e => this.resetInput(e));
    this.resetPlaceholder();
    this.createMissingConditionsAndOperators();
    this.lastUiCompletePosition = null;
    e || this.onUiChanged();
    return $$iR37.resolve();
  }
  resetType(e) {
    let t = this.getLocaleTextFunc()("ariaFilteringOperator", "Filtering operator");
    e.setValue(this.optionsFactory.defaultOption, !0).setAriaLabel(t).setDisabled(this.isReadOnly() || this.filterListOptions.length <= 1);
  }
  resetJoinOperatorAnd(e, t, i) {
    this.resetJoinOperator(e, t, "AND" === this.defaultJoinOperator, this.translate("andCondition"), i);
  }
  resetJoinOperatorOr(e, t, i) {
    this.resetJoinOperator(e, t, "OR" === this.defaultJoinOperator, this.translate("orCondition"), i);
  }
  resetJoinOperator(e, t, i, s, r) {
    this.updateJoinOperatorDisabled(e.setValue(i, !0).setName(`ag-simple-filter-and-or-${this.getCompId()}-${r}`).setLabel(s), t);
  }
  updateJoinOperatorsDisabled() {
    let e = (e, t) => this.updateJoinOperatorDisabled(e, t);
    this.eJoinOperatorsAnd.forEach(e);
    this.eJoinOperatorsOr.forEach(e);
  }
  updateJoinOperatorDisabled(e, t) {
    e.setDisabled(this.isReadOnly() || t > 0);
  }
  resetInput(e) {
    this.setElementValue(e, null);
    this.setElementDisabled(e, this.isReadOnly());
  }
  setConditionIntoUi(e, t) {
    let i = this.mapValuesFromModel(e);
    this.forEachInput((e, s, r) => {
      r === t && this.setElementValue(e, null != i[s] ? i[s] : null);
    });
  }
  setValueFromFloatingFilter(e) {
    this.forEachInput((t, i, s) => {
      this.setElementValue(t, 0 === i && 0 === s ? e : null, !0);
    });
  }
  addChangedListeners(e, t) {
    this.isReadOnly() || (e.onValueChange(this.listener), this.forEachPositionInput(t, e => {
      this.attachElementOnChange(e, this.listener);
    }));
  }
  individualConditionPasses(e, t) {
    let i = this.getCellValue(e.node);
    let s = this.mapValuesFromModel(t);
    let r = function (e, t, i) {
      if (null == e) return;
      let {
        predicate
      } = e;
      if (null != predicate && !t.some(e => null == e)) return predicate(t, i);
    }(this.optionsFactory.getCustomOption(t.type), s, i);
    return null != r ? r : null == i ? this.evaluateNullValue(t.type) : this.evaluateNonNullValue(s, i, t, e);
  }
  hasInvalidInputs() {
    return !1;
  }
};
var aN = class {
  constructor(e, t, i) {
    this.getLocaleTextFunc = e;
    this.optionsFactory = t;
    this.valueFormatter = i;
  }
  getModelAsString(e) {
    if (!e) return null;
    let t = null != e.operator;
    let i = this.getLocaleTextFunc();
    if (t) {
      let t = (e.conditions ?? []).map(e => this.getModelAsString(e));
      let s = "AND" === e.operator ? "andCondition" : "orCondition";
      return t.join(` ${i(s, sN[s])} `);
    }
    if ("blank" === e.type || "notBlank" === e.type) return i(e.type, e.type);
    {
      let t = this.optionsFactory.getCustomOption(e.type);
      let {
        displayKey,
        displayName,
        numberOfInputs
      } = t || {};
      return displayKey && displayName && 0 === numberOfInputs ? (i(displayKey, displayName), displayName) : this.conditionToString(e, t);
    }
  }
  updateParams(e) {
    this.optionsFactory = e.optionsFactory;
  }
  formatValue(e) {
    let t = this.valueFormatter;
    return t ? t(e ?? null) ?? "" : String(e);
  }
};
var aB = class extends iS {
  constructor() {
    super(...arguments);
    this.defaultDebounceMs = 0;
  }
  setLastTypeFromModel(e) {
    let t;
    if (!e) {
      this.lastType = this.optionsFactory.defaultOption;
      return;
    }
    t = e.operator ? e.conditions[0] : e;
    this.lastType = t.type;
  }
  canWeEditAfterModelFromParentFilter(e) {
    return e ? !e.operator && this.isTypeEditable(e.type) : this.isTypeEditable(this.lastType);
  }
  init(e) {
    this.setSimpleParams(e, !1);
  }
  setSimpleParams(e, t = !0) {
    let i = new aL();
    this.optionsFactory = i;
    i.init(e.filterParams, this.getDefaultOptions());
    let s = i.defaultOption;
    t || (this.lastType = s);
    this.readOnly = !!e.filterParams.readOnly;
    let r = this.isTypeEditable(s);
    this.setEditable(r);
  }
  refresh(e) {
    this.setSimpleParams(e);
  }
  hasSingleInput(e) {
    let t = this.optionsFactory.getCustomOption(e)?.numberOfInputs;
    return null == t || 1 == t;
  }
  isTypeEditable(e) {
    return !!e && !this.readOnly && this.hasSingleInput(e) && 0 > ["inRange", "empty", "blank", "notBlank"].indexOf(e);
  }
  getAriaLabel(e) {
    let t = this.beans.colNames.getDisplayNameForColumn(e.column, "header", !0);
    return `${t} ${this.getLocaleTextFunc()("ariaFilterInput", "Filter Input")}`;
  }
};
var aV = class {
  constructor(e) {
    this.cellValueChanges = e;
  }
};
var aW = class extends of {
  constructor(e) {
    super(`
            <div class="ag-cell-edit-wrapper">
                ${e.getTemplate()}
            </div>`, e.getAgComponents());
    this.cellEditorInput = e;
    this.eInput = null;
  }
  init(e) {
    let t;
    this.params = e;
    let {
      cellStartedEdit,
      eventKey,
      suppressPreventDefault
    } = e;
    let o = this.eInput;
    this.cellEditorInput.init(o, e);
    let n = !0;
    cellStartedEdit ? (this.focusAfterAttached = !0, eventKey === i4.BACKSPACE || eventKey === i4.DELETE ? t = "" : eventKey && 1 === eventKey.length ? suppressPreventDefault ? n = !1 : t = eventKey : (t = this.cellEditorInput.getStartValue(), eventKey !== i4.F2 && (this.highlightAllOnFocus = !0))) : (this.focusAfterAttached = !1, t = this.cellEditorInput.getStartValue());
    n && null != t && o.setStartValue(t);
    this.addManagedElementListeners(o.getGui(), {
      keydown: e => {
        let {
          key
        } = e;
        (key === i4.PAGE_UP || key === i4.PAGE_DOWN) && e.preventDefault();
      }
    });
  }
  afterGuiAttached() {
    let e = this.getLocaleTextFunc();
    let t = this.eInput;
    if (t.setInputAriaLabel(e("ariaInputEditor", "Input Editor")), !this.focusAfterAttached) return;
    I() || t.getFocusableElement().focus();
    let i = t.getInputElement();
    this.highlightAllOnFocus ? i.select() : this.cellEditorInput.setCaret?.();
  }
  focusIn() {
    let e = this.eInput;
    let t = e.getFocusableElement();
    let i = e.getInputElement();
    t.focus();
    i.select();
  }
  getValue() {
    return this.cellEditorInput.getValue();
  }
  isPopup() {
    return !1;
  }
};
var az = class {
  getTemplate() {
    return '<ag-input-text-field class="ag-cell-editor" data-ref="eInput"></ag-input-text-field>';
  }
  getAgComponents() {
    return [ot];
  }
  init(e, t) {
    this.eInput = e;
    this.params = t;
    let i = t.maxLength;
    null != i && e.setMaxLength(i);
  }
  getValue() {
    let {
      eInput,
      params
    } = this;
    let i = eInput.getValue();
    return ew(i) || ew(params.value) ? params.parseValue(i) : params.value;
  }
  getStartValue() {
    let e = this.params;
    return e.useFormatter || e.column.getColDef().refData ? e.formatValue(e.value) : e.value;
  }
  setCaret() {
    let e = this.eInput;
    let t = e.getValue();
    let i = ew(t) && t.length || 0;
    i && e.getInputElement().setSelectionRange(i, i);
  }
};
var aU = class extends aW {
  constructor() {
    super(new az());
  }
};
var a$ = class extends of {
  constructor(e) {
    super('<div class="ag-popup-editor" tabindex="-1"/>');
    this.params = e;
  }
  postConstruct() {
    e0(this.gos, this.getGui(), "popupEditorWrapper", !0);
    this.addKeyDownListener();
  }
  addKeyDownListener() {
    let e = this.getGui();
    let t = this.params;
    this.addManagedElementListeners(e, {
      keydown: e => {
        s2(this.gos, e, t.node, t.column, !0) || t.onKeyDown(e);
      }
    });
  }
};
function aK(e, t, i) {
  e.editCompDetails = i;
  e.editing !== t && (e.editing = t);
}
var a_ = {
  moduleName: "EditCore",
  version: eI,
  beans: [class extends $$tM23 {
    constructor() {
      super(...arguments);
      this.beanName = "editSvc";
    }
    startEditing(e, t = null, i = !1, s = null) {
      if (!e.isCellEditable() || e.editing) return !0;
      if (!e.comp) {
        e.onCompAttachedFuncs.push(() => {
          this.startEditing(e, t, i, s);
        });
        return !0;
      }
      let r = this.createCellEditorParams(e, t, i);
      let o = e.column.getColDef();
      let n = i$(this.beans.userCompFactory, o, r);
      let l = n?.popupFromSelector != null ? n.popupFromSelector : !!o.cellEditorPopup;
      let a = n?.popupPositionFromSelector != null ? n.popupPositionFromSelector : o.cellEditorPopupPosition;
      aK(e, !0, n);
      e.comp.setEditDetails(n, l, a, this.gos.get("reactiveCustomComponents"));
      this.eventSvc.dispatchEvent(e.createEvent(s, "cellEditingStarted"));
      return !n?.params?.suppressPreventDefault;
    }
    stopEditing(e, t = !1) {
      if (e.onEditorAttachedFuncs = [], !e.editing) return !1;
      let {
        comp,
        column,
        rowNode
      } = e;
      let {
        newValue,
        newValueExists
      } = function (e, t) {
        let i = {
          newValueExists: !1
        };
        if (e) return i;
        let s = t.getCellEditor();
        return !s || s.isCancelAfterEnd && s.isCancelAfterEnd() ? i : {
          newValue: s.getValue(),
          newValueExists: !0
        };
      }(t, comp);
      let l = this.beans.valueSvc.getValueForDisplay(column, rowNode);
      let a = !1;
      newValueExists && (a = function (e, t, i, s, r) {
        if (i === t) return !1;
        e.suppressRefreshCell = !0;
        let o = s.setDataValue(r, i, "edit");
        e.suppressRefreshCell = !1;
        return o;
      }(e, l, newValue, rowNode, column));
      aK(e, !1, void 0);
      comp.setEditDetails();
      e.updateAndFormatValue(!1);
      e.refreshCell({
        forceRefresh: !0,
        suppressFlash: !0
      });
      this.eventSvc.dispatchEvent({
        ...e.createEvent(null, "cellEditingStopped"),
        oldValue: l,
        newValue,
        valueChanged: a
      });
      return a;
    }
    handleColDefChanged(e) {
      let t = e.comp?.getCellEditor();
      if (t?.refresh) {
        let {
          eventKey,
          cellStartedEdit
        } = e.editCompDetails.params;
        let r = this.createCellEditorParams(e, eventKey, cellStartedEdit);
        let o = e.column.getColDef();
        let n = i$(this.beans.userCompFactory, o, r);
        t.refresh(n.params);
      }
    }
    setFocusOutOnEditor(e) {
      if (!e.editing) return;
      let t = e.comp.getCellEditor();
      t && t.focusOut && t.focusOut();
    }
    setFocusInOnEditor(e) {
      if (!e.editing) return;
      let t = e.comp;
      let i = t.getCellEditor();
      i?.focusIn ? i.focusIn() : (e.focusCell(!0), e.onEditorAttachedFuncs.push(() => t.getCellEditor()?.focusIn?.()));
    }
    stopEditingAndFocus(e, t = !1, i = !1) {
      this.stopRowOrCellEdit(e);
      e.focusCell(!0);
      t || this.navigateAfterEdit(i, e.cellPosition);
    }
    createPopupEditorWrapper(e) {
      return new a$(e);
    }
    stopAllEditing(e = !1) {
      this.beans.rowRenderer.getAllRowCtrls().forEach(t => this.stopRowEditing(t, e));
    }
    stopRowEditing(e, t = !1) {
      if (e.stoppingRowEdit) return;
      let i = e.getAllCellCtrls();
      let s = e.editing;
      e.stoppingRowEdit = !0;
      let r = !1;
      for (let e of i) {
        let i = e.stopEditing(t);
        s && !t && !r && i && (r = !0);
      }
      r && this.eventSvc.dispatchEvent(e.createRowEvent("rowValueChanged"));
      s && this.beans.rowEditSvc?.setEditing(e, !1);
      e.stoppingRowEdit = !1;
    }
    addStopEditingWhenGridLosesFocus(e) {
      if (!this.gos.get("stopEditingWhenCellsLoseFocus")) return;
      let t = t => {
        let i = t.relatedTarget;
        if (null === N(i)) {
          this.stopAllEditing();
          return;
        }
        let s = e.some(e => e.contains(i)) && sf(this.gos, i);
        if (!s) {
          let e = this.beans.popupSvc;
          s = !!e && (e.getActivePopups().some(e => e.contains(i)) || e.isElementWithinCustomPopup(i));
        }
        s || this.stopAllEditing();
      };
      e.forEach(e => this.addManagedElementListeners(e, {
        focusout: t
      }));
    }
    setInlineEditingCss(e) {
      let t = e.editing || e.getAllCellCtrls().some(e => e.editing);
      e.forEachGui(void 0, e => {
        e.rowComp.addOrRemoveCssClass("ag-row-inline-editing", t);
        e.rowComp.addOrRemoveCssClass("ag-row-not-inline-editing", !t);
      });
    }
    isCellEditable(e, t) {
      if (t.group) {
        if (this.gos.get("treeData")) {
          if (!t.data && !this.gos.get("enableGroupEdit")) return !1;
        } else if (!this.gos.get("enableGroupEdit")) return !1;
      }
      return e.isColumnFunc(t, e.colDef.editable);
    }
    startRowOrCellEdit(e, t, i = null) {
      return e.comp ? "fullRow" === this.gos.get("editType") ? this.beans.rowEditSvc?.startEditing(e.rowCtrl, t, e) ?? !0 : this.startEditing(e, t, !0, i) : (e.onCompAttachedFuncs.push(() => {
        this.startRowOrCellEdit(e, t, i);
      }), !0);
    }
    stopRowOrCellEdit(e, t = !1) {
      "fullRow" === this.gos.get("editType") ? this.stopRowEditing(e.rowCtrl, t) : this.stopEditing(e, t);
    }
    createCellEditorParams(e, t, i) {
      let {
        column,
        rowNode,
        cellPosition: {
          rowIndex
        }
      } = e;
      let {
        valueSvc,
        gos
      } = this.beans;
      return ty(gos, {
        value: valueSvc.getValueForDisplay(column, rowNode),
        eventKey: t,
        column,
        colDef: column.getColDef(),
        rowIndex,
        node: rowNode,
        data: rowNode.data,
        cellStartedEdit: i,
        onKeyDown: e.onKeyDown.bind(e),
        stopEditing: e.stopEditingAndFocus.bind(e),
        eGridCell: e.eGui,
        parseValue: t => valueSvc.parseValue(column, rowNode, t, e.value),
        formatValue: e.formatValue.bind(e)
      });
    }
    navigateAfterEdit(e, t) {
      if (this.gos.get("enterNavigatesVerticallyAfterEdit")) {
        let i = e ? i4.UP : i4.DOWN;
        this.beans.navigation?.navigateToNextCell(null, i, t, !1);
      }
    }
  }, class extends $$tM23 {
    constructor() {
      super(...arguments);
      this.beanName = "rowEditSvc";
    }
    startEditing(e, t = null, i = null, s = null) {
      if (e.editing) return !0;
      let r = !0;
      let o = !1;
      let {
        editSvc
      } = this.beans;
      e.getAllCellCtrls().forEach(e => {
        let l = e === i;
        l ? r = editSvc?.startEditing(e, t, l, s) ?? !0 : editSvc?.startEditing(e, null, l, s);
        o || (o = e.editing);
      });
      o && this.setEditing(e, !0);
      return r;
    }
    setEditing(e, t) {
      e.editing = t;
      e.forEachGui(void 0, e => e.rowComp.addOrRemoveCssClass("ag-row-editing", t));
      let i = t ? e.createRowEvent("rowEditingStarted") : e.createRowEvent("rowEditingStopped");
      this.eventSvc.dispatchEvent(i);
    }
  }],
  apiFunctions: {
    getCellEditorInstances: function (e, t = {}) {
      let i = [];
      e.rowRenderer.getCellCtrls(t.rowNodes, t.columns).forEach(e => {
        let t = e.comp?.getCellEditor();
        t && i.push(iK(t));
      });
      return i;
    },
    getEditingCells: function (e) {
      let t = [];
      e.rowRenderer.getAllCellCtrls().forEach(e => {
        if (e.editing) {
          let {
            cellPosition
          } = e;
          t.push(cellPosition);
        }
      });
      return t;
    },
    stopEditing: function (e, t = !1) {
      e.editSvc?.stopAllEditing(t);
    },
    startEditingCell: function (e, t) {
      let i = e.colModel.getCol(t.colKey);
      if (!i) {
        $$eW42(12, {
          colKey: t.colKey
        });
        return;
      }
      let s = {
        rowIndex: t.rowIndex,
        rowPinned: t.rowPinned || null,
        column: i
      };
      null == t.rowPinned && function (e, t, i) {
        e.frameworkOverrides.wrapIncoming(() => e.ctrlsSvc.getScrollFeature().ensureIndexVisible(t, void 0), "ensureVisible");
      }(e, t.rowIndex);
      (function (e, t, i = "auto") {
        e.frameworkOverrides.wrapIncoming(() => e.ctrlsSvc.getScrollFeature().ensureColumnVisible(t, i), "ensureVisible");
      })(e, t.colKey);
      let r = sR(e, s);
      if (!r) return;
      let {
        focusSvc,
        gos,
        editSvc
      } = e;
      let a = gos.get("stopEditingWhenCellsLoseFocus") && (() => {
        let t = e3(e);
        let i = r.eGui;
        return t !== i && !!i?.contains(t);
      })();
      (a || !focusSvc.isCellFocused(s)) && focusSvc.setFocusedCell({
        ...s,
        forceBrowserFocus: a,
        preventScrollOnBrowserFocus: !0
      });
      editSvc?.startRowOrCellEdit(r, t.key);
    }
  },
  dependsOn: [{
    moduleName: "Popup",
    version: eI,
    beans: [class extends $$tM23 {
      constructor() {
        super(...arguments);
        this.beanName = "popupSvc";
        this.popupList = [];
      }
      postConstruct() {
        this.beans.ctrlsSvc.whenReady(this, e => {
          this.gridCtrl = e.gridCtrl;
        });
        this.addManagedEventListeners({
          gridStylesChanged: this.handleThemeChange.bind(this)
        });
      }
      getPopupParent() {
        return this.gos.get("popupParent") || this.gridCtrl.getGui();
      }
      positionPopupForMenu(e) {
        let {
          eventSource,
          ePopup,
          column,
          node,
          event
        } = e;
        let n = eventSource.getBoundingClientRect();
        let l = this.getParentRect();
        this.setAlignedTo(eventSource, ePopup);
        let a = !1;
        this.positionPopup({
          ePopup,
          keepWithinBounds: !0,
          updatePosition: () => {
            let e;
            let t = this.keepXYWithinBounds(ePopup, n.top - l.top, 0);
            let s = ePopup.clientWidth > 0 ? ePopup.clientWidth : 200;
            a || (ePopup.style.minWidth = `${s}px`, a = !0);
            let r = l.right - l.left - s;
            this.gos.get("enableRtl") ? ((e = d()) < 0 && (e = o(), this.setAlignedStyles(ePopup, "left")), e > r && (e = 0, this.setAlignedStyles(ePopup, "right"))) : ((e = o()) > r && (e = d(), this.setAlignedStyles(ePopup, "right")), e < 0 && (e = 0, this.setAlignedStyles(ePopup, "left")));
            return {
              x: e,
              y: t
            };
            function o() {
              return n.right - l.left - 2;
            }
            function d() {
              return n.left - l.left - s;
            }
          },
          postProcessCallback: () => this.callPostProcessPopup("subMenu", ePopup, eventSource, event instanceof MouseEvent ? event : void 0, column, node)
        });
      }
      positionPopupUnderMouseEvent(e) {
        let {
          ePopup,
          nudgeX,
          nudgeY,
          skipObserver
        } = e;
        this.positionPopup({
          ePopup,
          nudgeX,
          nudgeY,
          keepWithinBounds: !0,
          skipObserver,
          updatePosition: () => this.calculatePointerAlign(e.mouseEvent),
          postProcessCallback: () => this.callPostProcessPopup(e.type, e.ePopup, null, e.mouseEvent, e.column, e.rowNode)
        });
      }
      calculatePointerAlign(e) {
        let t = this.getParentRect();
        return {
          x: e.clientX - t.left,
          y: e.clientY - t.top
        };
      }
      positionPopupByComponent(e) {
        let {
          ePopup,
          nudgeX,
          nudgeY,
          keepWithinBounds,
          eventSource,
          alignSide = "left",
          position = "over",
          column,
          rowNode,
          type
        } = e;
        let u = eventSource.getBoundingClientRect();
        let c = this.getParentRect();
        this.setAlignedTo(eventSource, ePopup);
        this.positionPopup({
          ePopup,
          nudgeX,
          nudgeY,
          keepWithinBounds,
          updatePosition: () => {
            let i;
            let r = u.left - c.left;
            "right" === alignSide && (r -= ePopup.offsetWidth - u.width);
            "over" === position ? (i = u.top - c.top, this.setAlignedStyles(ePopup, "over")) : (this.setAlignedStyles(ePopup, "under"), i = "under" === this.shouldRenderUnderOrAbove(ePopup, u, c, e.nudgeY || 0) ? u.top - c.top + u.height : u.top - ePopup.offsetHeight - 2 * (nudgeY || 0) - c.top);
            return {
              x: r,
              y: i
            };
          },
          postProcessCallback: () => this.callPostProcessPopup(type, ePopup, eventSource, null, column, rowNode)
        });
      }
      shouldRenderUnderOrAbove(e, t, i, s) {
        let r = i.bottom - t.bottom;
        let o = t.top - i.top;
        let n = e.offsetHeight + s;
        return r > n ? "under" : o > n || o > r ? "above" : "under";
      }
      setAlignedStyles(e, t) {
        let i = this.getPopupIndex(e);
        if (-1 === i) return;
        let {
          alignedToElement
        } = this.popupList[i];
        alignedToElement && (["right", "left", "over", "above", "under"].forEach(t => {
          alignedToElement.classList.remove(`ag-has-popup-positioned-${t}`);
          e.classList.remove(`ag-popup-positioned-${t}`);
        }), t && (alignedToElement.classList.add(`ag-has-popup-positioned-${t}`), e.classList.add(`ag-popup-positioned-${t}`)));
      }
      setAlignedTo(e, t) {
        let i = this.getPopupIndex(t);
        -1 !== i && (this.popupList[i].alignedToElement = e);
      }
      callPostProcessPopup(e, t, i, s, r, o) {
        let n = this.gos.getCallback("postProcessPopup");
        n && n({
          column: r,
          rowNode: o,
          ePopup: t,
          type: e,
          eventSource: i,
          mouseEvent: s
        });
      }
      positionPopup(e) {
        let {
          ePopup,
          keepWithinBounds,
          nudgeX,
          nudgeY,
          skipObserver,
          updatePosition
        } = e;
        let l = {
          width: 0,
          height: 0
        };
        let a = (o = !1) => {
          let {
            x,
            y
          } = updatePosition();
          (!o || ePopup.clientWidth !== l.width || ePopup.clientHeight !== l.height) && (l.width = ePopup.clientWidth, l.height = ePopup.clientHeight, nudgeX && (a += nudgeX), nudgeY && (d += nudgeY), keepWithinBounds && (a = this.keepXYWithinBounds(ePopup, x, 1), d = this.keepXYWithinBounds(ePopup, y, 0)), ePopup.style.left = `${x}px`, ePopup.style.top = `${y}px`, e.postProcessCallback && e.postProcessCallback());
        };
        if (a(), !skipObserver) {
          let e = $$ef15(this.beans, ePopup, () => a(!0));
          setTimeout(() => e(), 200);
        }
      }
      getActivePopups() {
        return this.popupList.map(e => e.element);
      }
      getParentRect() {
        let e = e1(this.beans);
        let t = this.getPopupParent();
        t === e.body ? t = e.documentElement : "static" === getComputedStyle(t).position && (t = t.offsetParent);
        return Z(t);
      }
      keepXYWithinBounds(e, t, i) {
        let s = 0 === i;
        let r = s ? "top" : "left";
        let o = e1(this.beans);
        let n = o.documentElement;
        let l = this.getPopupParent();
        let a = e.getBoundingClientRect();
        let d = l.getBoundingClientRect();
        let h = o.documentElement.getBoundingClientRect();
        let u = l === o.body;
        let c = Math.ceil(a[s ? "height" : "width"]);
        let g = u ? (s ? Y : J)(n) + n[s ? "scrollTop" : "scrollLeft"] : l[s ? "clientHeight" : "clientWidth"];
        u && (g -= Math.abs(h[r] - d[r]));
        return Math.min(Math.max(t, 0), Math.abs(g - c));
      }
      addPopup(e) {
        let t = e1(this.beans);
        let {
          eChild,
          ariaLabel,
          alwaysOnTop,
          positionCallback,
          anchorToElement
        } = e;
        if (!t) {
          $$eW42(122);
          return {
            hideFunc: () => {}
          };
        }
        let l = this.getPopupIndex(eChild);
        if (-1 !== l) return {
          hideFunc: this.popupList[l].hideFunc
        };
        this.initialisePopupPosition(eChild);
        let a = this.createPopupWrapper(eChild, ariaLabel, !!alwaysOnTop);
        let d = this.addEventListenersToPopup({
          ...e,
          wrapperEl: a
        });
        positionCallback && positionCallback();
        this.addPopupToPopupList(eChild, a, d, anchorToElement);
        return {
          hideFunc: d
        };
      }
      initialisePopupPosition(e) {
        let t = this.getPopupParent().getBoundingClientRect();
        ew(e.style.top) || (e.style.top = `${-1 * t.top}px`);
        ew(e.style.left) || (e.style.left = `${-1 * t.left}px`);
      }
      createPopupWrapper(e, t, i) {
        let s = this.getPopupParent();
        let r = document.createElement("div");
        let {
          environment,
          gos
        } = this.beans;
        environment.applyThemeClasses(r);
        r.classList.add("ag-popup");
        e.classList.add(gos.get("enableRtl") ? "ag-rtl" : "ag-ltr", "ag-popup-child");
        e.hasAttribute("role") || b(e, "dialog");
        y(e, t);
        r.appendChild(e);
        s.appendChild(r);
        i ? this.setAlwaysOnTop(e, !0) : this.bringPopupToFront(e);
        return r;
      }
      handleThemeChange(e) {
        if (e.themeChanged) {
          let e = this.beans.environment;
          for (let t of this.popupList) e.applyThemeClasses(t.wrapper);
        }
      }
      addEventListenersToPopup(e) {
        let t = this.beans;
        let i = e1(t);
        let s = this.getPopupParent();
        let {
          wrapperEl,
          eChild,
          closedCallback,
          afterGuiAttached,
          closeOnEsc,
          modal
        } = e;
        let h = !1;
        let u = e => {
          wrapperEl.contains(e3(t)) && (e.key !== i4.ESCAPE || tE(e) || p({
            keyboardEvent: e
          }));
        };
        let c = e => p({
          mouseEvent: e
        });
        let g = e => p({
          touchEvent: e
        });
        let p = (e = {}) => {
          let {
            mouseEvent,
            touchEvent,
            keyboardEvent,
            forceHide
          } = e;
          !forceHide && (this.isEventFromCurrentPopup({
            mouseEvent,
            touchEvent
          }, eChild) || h) || (h = !0, s.removeChild(wrapperEl), i.removeEventListener("keydown", u), i.removeEventListener("mousedown", c), i.removeEventListener("touchstart", g), i.removeEventListener("contextmenu", c), this.eventSvc.removeEventListener("dragStarted", c), closedCallback && closedCallback(mouseEvent || touchEvent || keyboardEvent), this.removePopupFromPopupList(eChild));
        };
        afterGuiAttached && afterGuiAttached({
          hidePopup: p
        });
        window.setTimeout(() => {
          closeOnEsc && i.addEventListener("keydown", u);
          modal && (i.addEventListener("mousedown", c), this.eventSvc.addEventListener("dragStarted", c), i.addEventListener("touchstart", g), i.addEventListener("contextmenu", c));
        }, 0);
        return p;
      }
      addPopupToPopupList(e, t, i, s) {
        this.popupList.push({
          element: e,
          wrapper: t,
          hideFunc: i,
          instanceId: aE++,
          isAnchored: !!s
        });
        s && this.setPopupPositionRelatedToElement(e, s);
      }
      getPopupIndex(e) {
        return this.popupList.findIndex(t => t.element === e);
      }
      setPopupPositionRelatedToElement(e, t) {
        let i = this.getPopupIndex(e);
        if (-1 === i) return;
        let s = this.popupList[i];
        if (s.stopAnchoringPromise && s.stopAnchoringPromise.then(e => e && e()), s.stopAnchoringPromise = void 0, s.isAnchored = !1, !t) return;
        let r = this.keepPopupPositionedRelativeTo({
          element: t,
          ePopup: e,
          hidePopup: s.hideFunc
        });
        s.stopAnchoringPromise = r;
        s.isAnchored = !0;
        return r;
      }
      removePopupFromPopupList(e) {
        this.setAlignedStyles(e, null);
        this.setPopupPositionRelatedToElement(e, null);
        this.popupList = this.popupList.filter(t => t.element !== e);
      }
      keepPopupPositionedRelativeTo(e) {
        let t = this.getPopupParent();
        let i = t.getBoundingClientRect();
        let {
          element,
          ePopup
        } = e;
        let o = element.getBoundingClientRect();
        let n = e => parseInt(e.substring(0, e.length - 1), 10);
        let l = (e, t) => {
          let s = i[e] - o[e];
          let l = n(ePopup.style[e]);
          return {
            initialDiff: s,
            lastDiff: s,
            initial: l,
            last: l,
            direction: t
          };
        };
        let a = l("top", 0);
        let d = l("left", 1);
        let h = this.beans.frameworkOverrides;
        return new $$iR37(i => {
          h.wrapIncoming(() => {
            h.setInterval(() => {
              let i = t.getBoundingClientRect();
              let o = element.getBoundingClientRect();
              if (0 == o.top && 0 == o.left && 0 == o.height && 0 == o.width) {
                e.hidePopup();
                return;
              }
              let l = (e, t) => {
                let s = n(ePopup.style[t]);
                e.last !== s && (e.initial = s, e.last = s);
                let l = i[t] - o[t];
                if (l != e.lastDiff) {
                  let i = this.keepXYWithinBounds(ePopup, e.initial + e.initialDiff - l, e.direction);
                  ePopup.style[t] = `${i}px`;
                  e.last = i;
                }
                e.lastDiff = l;
              };
              l(a, "top");
              l(d, "left");
            }, 200).then(e => {
              i(() => {
                null != e && window.clearInterval(e);
              });
            });
          }, "popupPositioning");
        });
      }
      hasAnchoredPopup() {
        return this.popupList.some(e => e.isAnchored);
      }
      isEventFromCurrentPopup(e, t) {
        let {
          mouseEvent,
          touchEvent
        } = e;
        let r = mouseEvent || touchEvent;
        if (!r) return !1;
        let o = this.getPopupIndex(t);
        if (-1 === o) return !1;
        for (let e = o; e < this.popupList.length; e++) {
          var n;
          if (n = this.popupList[e].element, r && n && (r.path ? r.path : r.composedPath ? r.composedPath() : function (e) {
            let t = [];
            let i = e.target;
            for (; i;) {
              t.push(i);
              i = i.parentElement;
            }
            return t;
          }(r)).indexOf(n) >= 0) return !0;
        }
        return this.isElementWithinCustomPopup(r.target);
      }
      isElementWithinCustomPopup(e) {
        let t = e1(this.beans);
        for (; e && e !== t.body;) {
          if (e.classList.contains("ag-custom-component-popup") || null === e.parentElement) return !0;
          e = e.parentElement;
        }
        return !1;
      }
      getWrapper(e) {
        for (; !e.classList.contains("ag-popup") && e.parentElement;) e = e.parentElement;
        return e.classList.contains("ag-popup") ? e : null;
      }
      setAlwaysOnTop(e, t) {
        let i = this.getWrapper(e);
        i && (i.classList.toggle("ag-always-on-top", !!t), t && this.bringPopupToFront(i));
      }
      bringPopupToFront(e) {
        let t = this.getPopupParent();
        let i = Array.prototype.slice.call(t.querySelectorAll(".ag-popup"));
        let s = i.length;
        let r = this.getWrapper(e);
        if (!r || s <= 1 || !t.contains(e)) return;
        let o = [];
        let n = [];
        for (let e of i) e !== r && (e.classList.contains("ag-always-on-top") ? n.push(e) : o.push(e));
        let l = [];
        let a = n.length;
        let d = r.classList.contains("ag-always-on-top") || !a ? [...o, ...n, r] : [...o, r, ...n];
        for (let e = 0; e <= s; e++) {
          let s = d[e];
          i[e] !== d[e] && s !== r && (s.querySelectorAll("div").forEach(e => {
            0 !== e.scrollTop && l.push([e, e.scrollTop]);
          }), 0 === e ? t.insertAdjacentElement("afterbegin", s) : d[e - 1].insertAdjacentElement("afterend", s));
        }
        for (; l.length;) {
          let e = l.pop();
          e[0].scrollTop = e[1];
        }
      }
    }]
  }],
  css: [".ag-cell-inline-editing{border:var(--ag-cell-editing-border)!important;border-radius:var(--ag-border-radius);box-shadow:var(--ag-cell-editing-shadow);padding:0;z-index:1;.ag-cell-edit-wrapper,.ag-cell-editor,.ag-cell-wrapper,:where(.ag-cell-editor) .ag-input-field-input,:where(.ag-cell-editor) .ag-wrapper{height:100%;line-height:normal;width:100%}}:where(.ag-popup-editor) .ag-large-text{background-color:var(--ag-background-color);border-radius:var(--ag-border-radius);box-shadow:var(--ag-dropdown-shadow);padding:0}.ag-large-text-input{height:auto;padding:var(--ag-cell-horizontal-padding)}:where(.ag-rtl .ag-large-text-input) textarea{resize:none}:where(.ag-ltr) .ag-checkbox-edit{padding-left:var(--ag-cell-horizontal-padding)}:where(.ag-rtl) .ag-checkbox-edit{padding-right:var(--ag-cell-horizontal-padding)}"]
};
var $$aj0 = {
  moduleName: "TextEditor",
  version: eI,
  userComponents: {
    agCellEditor: aU,
    agTextCellEditor: aU
  },
  dependsOn: [a_]
};
var $$aq21 = {
  moduleName: "CustomEditor",
  version: eI,
  dependsOn: [a_]
};
var aY = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "selectionColSvc";
  }
  postConstruct() {
    this.addManagedPropertyListener("rowSelection", e => {
      this.onSelectionOptionsChanged(e.currentValue, e.previousValue, t8(e.source));
    });
    this.addManagedPropertyListener("selectionColumnDef", this.updateColumns.bind(this));
  }
  addColumns(e) {
    let t = this.columns;
    null != t && (e.list = t.list.concat(e.list), e.tree = t.tree.concat(e.tree), e.map = {}, e.list.forEach(t => e.map[t.getId()] = t));
  }
  createColumns(e, t) {
    let i = e.treeDepth;
    let s = this.columns?.treeDepth ?? -1;
    let r = this.generateSelectionCols();
    if (tY(r, this.columns?.list ?? [], (e, t) => e.getColId() === t.getColId()) && s == i) return;
    (() => {
      t2(this.beans, this.columns?.tree);
      this.columns = null;
    })();
    let {
      colGroupSvc
    } = this.beans;
    let n = colGroupSvc?.findDepth(e.tree) ?? 0;
    let l = colGroupSvc?.balanceTreeForAutoCols(r, n) ?? [];
    this.columns = {
      list: r,
      tree: l,
      treeDepth: n,
      map: {}
    };
    t(e => e ? [...r, ...e.filter(e => !t3(e))] : null);
  }
  updateColumns(e) {
    let t = t8(e.source);
    let i = e.currentValue;
    this.columns?.list.forEach(e => {
      let s = this.createSelectionColDef(i);
      e.setColDef(s, null, t);
      ih(this.beans, {
        state: [{
          colId: e.getColId(),
          ...s
        }]
      }, t);
    });
  }
  getColumn(e) {
    return this.columns?.list.find(t => t7(t, e)) ?? null;
  }
  getColumns() {
    return this.columns?.list ?? null;
  }
  isSelectionColumnEnabled() {
    let {
      gos,
      beans
    } = this;
    let i = gos.get("rowSelection");
    if ("object" != typeof i || !eq(gos)) return !1;
    let s = (beans.autoColSvc?.getColumns()?.length ?? 0) > 0;
    if ("autoGroupColumn" === i.checkboxLocation && s) return !1;
    let r = !!ts(i);
    let o = tr(i);
    return r || o;
  }
  createSelectionColDef(e) {
    let {
      gos
    } = this.beans;
    let i = e ?? gos.get("selectionColumnDef");
    let s = gos.get("enableRtl");
    let {
      rowSpan,
      spanRows,
      ...n
    } = i ?? {};
    return {
      width: 50,
      resizable: !1,
      suppressHeaderMenuButton: !0,
      sortable: !1,
      suppressMovable: !0,
      lockPosition: s ? "right" : "left",
      comparator(e, t, i, s) {
        let r = i.isSelected();
        return r === s.isSelected() ? 0 : r ? 1 : -1;
      },
      editable: !1,
      suppressFillHandle: !0,
      pinned: null,
      ...n,
      colId: tQ
    };
  }
  generateSelectionCols() {
    if (!this.isSelectionColumnEnabled()) return [];
    let e = this.createSelectionColDef();
    let t = e.colId;
    this.beans.validation?.validateColDef(e, t, !0);
    let i = new tz(e, null, t, !1);
    this.createBean(i);
    return [i];
  }
  onSelectionOptionsChanged(e, t, i) {
    let s = t && "string" != typeof t ? ts(t) : void 0;
    let r = e && "string" != typeof e ? ts(e) : void 0;
    let o = t && "string" != typeof t ? tr(t) : void 0;
    let n = e && "string" != typeof e ? tr(e) : void 0;
    let l = to(e);
    let a = to(t);
    (s !== r || o !== n || l !== a) && this.beans.colModel.refreshAll(i);
  }
  destroy() {
    t2(this.beans, this.columns?.tree);
    super.destroy();
  }
  refreshVisibility(e) {
    if (!this.isSelectionColumnEnabled()) return;
    let t = this.beans;
    let i = t.visibleCols.getAllTrees() ?? [];
    if (0 !== i.length) {
      if (!i.some(aJ)) {
        let i = ic(t).find(e => t3(e.colId));
        i && ih(t, {
          state: [{
            colId: i.colId,
            hide: !i.hide
          }]
        }, e);
      }
      if (1 === i.length) {
        let s = function e(t) {
          if (t.isColumn) return t3(t) ? t : null;
          for (let i of t.getChildren() ?? []) {
            let t = e(i);
            if (t) return t;
          }
          return null;
        }(i[0]);
        if (!s) return;
        ih(t, {
          state: [{
            colId: s.getColId(),
            hide: !0
          }]
        }, e);
      }
    }
  }
};
var aJ = e => e.isColumn ? t3(e) : e.getChildren()?.some(aJ) ?? !1;
function aZ(e) {
  return e.footer ? e.sibling : e;
}
function aX(e, t) {
  return (0 !== e || 0 !== t) && (e > 0 && t > 0 ? void 0 : e > 0);
}
var $$aQ22 = {
  moduleName: "RowSelection",
  version: eI,
  rowModels: ["clientSide", "infinite", "viewport"],
  beans: [class extends r7 {
    constructor() {
      super(...arguments);
      this.beanName = "selectionSvc";
      this.selectedNodes = new Map();
      this.detailSelection = new Map();
      this.masterSelectsDetail = !1;
    }
    postConstruct() {
      super.postConstruct();
      let {
        gos
      } = this;
      this.mode = th(gos);
      this.groupSelectsDescendants = tp(gos);
      this.groupSelectsFiltered = "filteredDescendants" === tc(gos);
      this.masterSelectsDetail = "detail" === tm(gos);
      this.addManagedPropertyListeners(["groupSelectsChildren", "groupSelectsFiltered", "rowSelection"], () => {
        let t = tp(gos);
        let i = th(gos);
        let s = "filteredDescendants" === tc(gos);
        this.masterSelectsDetail = "detail" === tm(gos);
        (t !== this.groupSelectsDescendants || s !== this.groupSelectsFiltered || i !== this.mode) && (this.deselectAllRowNodes({
          source: "api"
        }), this.groupSelectsDescendants = t, this.groupSelectsFiltered = s, this.mode = i);
      });
      this.addManagedEventListeners({
        rowSelected: this.onRowSelected.bind(this)
      });
    }
    destroy() {
      super.destroy();
      this.resetNodes();
    }
    handleSelectionEvent(e, t, i) {
      if (this.isRowSelectionBlocked(t)) return 0;
      let s = this.inferNodeSelections(t, e.shiftKey, e.metaKey || e.ctrlKey, i);
      return null == s ? 0 : (this.selectionCtx.selectAll = !1, "select" in s) ? (s.reset ? this.resetNodes() : this.selectRange(s.deselect, !1, i), this.selectRange(s.select, !0, i)) : this.setNodesSelected({
        nodes: [s.node],
        newValue: s.newValue,
        clearSelection: s.clearSelection,
        event: e,
        source: i
      });
    }
    setNodesSelected({
      newValue: e,
      clearSelection: t,
      suppressFinishActions: i,
      nodes: s,
      event: r,
      source: o
    }) {
      if (!eq(this.gos) && e) {
        $$eW42(132);
        return 0;
      }
      if (0 === s.length) return 0;
      if (s.length > 1 && !this.isMultiSelect()) {
        $$eW42(130);
        return 0;
      }
      let n = 0;
      for (let t = 0; t < s.length; t++) {
        let i = aZ(s[t]);
        let l = this.groupSelectsFiltered && i.group;
        if (i.rowPinned) {
          $$eW42(59);
          continue;
        }
        if (void 0 === i.id) {
          $$eW42(60);
          continue;
        }
        !l && this.selectRowNode(i, e, r, o) && (this.detailSelection.$$delete(i.id), n++);
        this.groupSelectsDescendants && i.childrenAfterGroup?.length && (n += this.selectChildren(i, e, o));
      }
      !i && (e && (t || !this.isMultiSelect()) && (n += this.clearOtherNodes(aZ(s[0]), o)), n > 0 && (this.updateGroupsFromChildrenSelections(o), this.dispatchSelectionChanged(o)));
      return n;
    }
    selectRange(e, t, i) {
      let s = 0;
      e.forEach(e => {
        (!e.group || !this.groupSelectsDescendants) && this.selectRowNode(e, t, void 0, i) && s++;
      });
      s > 0 && (this.updateGroupsFromChildrenSelections(i), this.dispatchSelectionChanged(i));
      return s;
    }
    selectChildren(e, t, i) {
      let s = this.groupSelectsFiltered ? e.childrenAfterAggFilter : e.childrenAfterGroup;
      return s ? this.setNodesSelected({
        newValue: t,
        clearSelection: !1,
        suppressFinishActions: !0,
        source: i,
        nodes: s
      }) : 0;
    }
    getSelectedNodes() {
      return Array.from(this.selectedNodes.values());
    }
    getSelectedRows() {
      let e = [];
      this.selectedNodes.forEach(t => e.push(t.data));
      return e;
    }
    getSelectionCount() {
      return this.selectedNodes.size;
    }
    filterFromSelection(e) {
      let t = new Map();
      this.selectedNodes.forEach((i, s) => {
        e(i) && t.set(s, i);
      });
      this.selectedNodes = t;
    }
    updateGroupsFromChildrenSelections(e, t) {
      if (!this.groupSelectsDescendants) return !1;
      let {
        gos,
        rowModel
      } = this.beans;
      if (!$$eK33(gos, rowModel)) return !1;
      let r = rowModel.rootNode;
      if (!r) return !1;
      t || ((t = new l0(!0, r)).active = !1);
      let o = !1;
      t.forEachChangedNodeDepthFirst(t => {
        if (t !== r) {
          let i = this.calculateSelectedFromChildren(t);
          o = this.selectRowNode(t, null !== i && i, void 0, e) || o;
        }
      });
      return o;
    }
    clearOtherNodes(e, t) {
      let i = new Map();
      let s = 0;
      this.selectedNodes.forEach(r => {
        if (r && r.id !== e.id) {
          let e = this.selectedNodes.get(r.id);
          s += this.setNodesSelected({
            nodes: [e],
            newValue: !1,
            clearSelection: !1,
            suppressFinishActions: !0,
            source: t
          });
          this.groupSelectsDescendants && r.parent && i.set(r.parent.id, r.parent);
        }
      });
      i.forEach(e => {
        let i = this.calculateSelectedFromChildren(e);
        this.selectRowNode(e, null !== i && i, void 0, t);
      });
      return s;
    }
    onRowSelected(e) {
      let t = e.node;
      this.groupSelectsDescendants && t.group || (t.isSelected() ? this.selectedNodes.set(t.id, t) : this.selectedNodes.$$delete(t.id));
    }
    syncInRowNode(e, t) {
      this.syncInOldRowNode(e, t);
      this.syncInNewRowNode(e);
    }
    createDaemonNode(e) {
      if (!e.id) return;
      let t = new sM(this.beans);
      t.id = e.id;
      t.data = e.data;
      t.__daemon = !0;
      t.__selected = e.__selected;
      t.level = e.level;
      return t;
    }
    syncInOldRowNode(e, t) {
      t && e.id !== t.id && this.selectedNodes.get(t.id) == e && this.selectedNodes.set(t.id, t);
    }
    syncInNewRowNode(e) {
      this.selectedNodes.has(e.id) ? (e.__selected = !0, this.selectedNodes.set(e.id, e)) : e.__selected = !1;
    }
    reset(e) {
      let t = this.getSelectionCount();
      this.resetNodes();
      t && this.dispatchSelectionChanged(e);
    }
    resetNodes() {
      this.selectedNodes.forEach(e => {
        this.selectRowNode(e, !1);
      });
      this.selectedNodes.clear();
    }
    getBestCostNodeSelection() {
      let {
        gos,
        rowModel
      } = this.beans;
      if (!$$eK33(gos, rowModel)) return;
      let i = rowModel.getTopLevelNodes();
      if (null === i) return;
      let s = [];
      !function e(t) {
        for (function () {
          let i = 0;
          let r = t.length;
        }(); i < r; i++) {
          let r = t[i];
          r.isSelected() ? s.push(r) : r.group && r.childrenAfterGroup && e(r.childrenAfterGroup);
        }
      }(i);
      return s;
    }
    isEmpty() {
      return 0 === this.getSelectionCount();
    }
    deselectAllRowNodes({
      source: e,
      selectAll: t
    }) {
      let i = $$eK33(this.gos);
      let s = !1;
      let r = t => {
        let i = this.selectRowNode(aZ(t), !1, void 0, e);
        s || (s = i);
      };
      if ("currentPage" === t || "filtered" === t) {
        if (!i) {
          ez(102);
          return;
        }
        this.getNodesToSelect(t).forEach(r);
      } else {
        this.selectedNodes.forEach(r);
        this.reset(e);
      }
      if (this.selectionCtx.selectAll = !1, i && this.groupSelectsDescendants) {
        let t = this.updateGroupsFromChildrenSelections(e);
        s || (s = t);
      }
      s && this.dispatchSelectionChanged(e);
    }
    getSelectedCounts(e) {
      let t = 0;
      let i = 0;
      this.getNodesToSelect(e).forEach(e => {
        (!this.groupSelectsDescendants || !e.group) && (e.isSelected() ? t++ : e.selectable && i++);
      });
      return {
        selectedCount: t,
        notSelectedCount: i
      };
    }
    getSelectAllState(e) {
      let {
        selectedCount,
        notSelectedCount
      } = this.getSelectedCounts(e);
      return aX(selectedCount, notSelectedCount) ?? null;
    }
    hasNodesToSelect(e) {
      return this.getNodesToSelect(e).filter(e => e.selectable).length > 0;
    }
    getNodesToSelect(e) {
      if (!this.canSelectAll()) return [];
      let t = [];
      if ("currentPage" === e) {
        this.forEachNodeOnPage(e => {
          if (!e.group) {
            t.push(e);
            return;
          }
          if (!e.expanded && !e.footer) {
            let i = e => {
              t.push(e);
              e.childrenAfterFilter?.length && e.childrenAfterFilter.forEach(i);
            };
            i(e);
            return;
          }
          this.groupSelectsDescendants || t.push(e);
        });
        return t;
      }
      let i = this.beans.rowModel;
      "filtered" === e ? i.forEachNodeAfterFilter(e => {
        t.push(e);
      }) : i.forEachNode(e => {
        t.push(e);
      });
      return t;
    }
    forEachNodeOnPage(e) {
      let {
        pageBounds,
        rowModel
      } = this.beans;
      let s = pageBounds.getFirstRow();
      let r = pageBounds.getLastRow();
      for (let t = s; t <= r; t++) {
        let s = rowModel.getRow(t);
        s && e(s);
      }
    }
    selectAllRowNodes(e) {
      let {
        gos,
        selectionCtx
      } = this;
      if (!eq(gos)) {
        $$eW42(132);
        return;
      }
      if ("string" != typeof gos.get("rowSelection") && !tu(gos)) {
        $$eW42(130);
        return;
      }
      if (!this.canSelectAll()) return;
      let {
        source,
        selectAll
      } = e;
      let o = !1;
      if (this.getNodesToSelect(selectAll).forEach(e => {
        let t = this.selectRowNode(aZ(e), !0, void 0, source);
        o || (o = t);
      }), selectionCtx.selectAll = !0, $$eK33(gos) && this.groupSelectsDescendants) {
        let e = this.updateGroupsFromChildrenSelections(source);
        o || (o = e);
      }
      o && this.dispatchSelectionChanged(source);
    }
    getSelectionState() {
      let e = [];
      this.selectedNodes.forEach(t => {
        t?.id && e.push(t.id);
      });
      return e.length ? e : null;
    }
    setSelectionState(e, t) {
      if (!Array.isArray(e)) {
        ez(103);
        return;
      }
      let i = new Set(e);
      let s = [];
      this.beans.rowModel.forEachNode(e => {
        i.has(e.id) && s.push(e);
      });
      this.setNodesSelected({
        newValue: !0,
        nodes: s,
        source: t
      });
    }
    canSelectAll() {
      let {
        gos,
        rowModel
      } = this.beans;
      return !!$$eK33(gos) || (ez(100, {
        rowModelType: rowModel.getType()
      }), !1);
    }
    updateSelectable(e) {
      let {
        gos,
        rowModel
      } = this.beans;
      if (!eq(gos)) return;
      let s = "selectableChanged";
      let r = void 0 !== e;
      let o = $$eK33(gos) && this.groupSelectsDescendants;
      let n = [];
      let l = e => {
        if (!r || e.group) {
          if (o && e.group) {
            let t = e.childrenAfterGroup?.some(e => e.selectable) ?? !1;
            this.setRowSelectable(e, t, !0);
            return;
          }
          !this.updateRowSelectable(e, !0) && e.isSelected() && n.push(e);
        }
      };
      if (o) {
        if (void 0 === e) {
          let t = rowModel.rootNode;
          e = t ? new l0(!1, t) : void 0;
        }
        e?.forEachChangedNodeDepthFirst(l, !r, !r);
      } else rowModel.forEachNode(l);
      n.length && this.setNodesSelected({
        nodes: n,
        newValue: !1,
        source: s
      });
      !r && o && this.updateGroupsFromChildrenSelections?.(s);
    }
    updateSelectableAfterGrouping(e) {
      this.updateSelectable(e);
      this.groupSelectsDescendants && this.updateGroupsFromChildrenSelections?.("rowGroupChanged", e) && this.dispatchSelectionChanged("rowGroupChanged");
    }
    refreshMasterNodeState(e, t) {
      let i;
      let s;
      if (!this.masterSelectsDetail) return;
      let r = e.detailNode?.detailGridInfo?.api;
      if (!r) return;
      i = 0;
      s = 0;
      r.forEachNode(e => {
        e.isSelected() ? i++ : e.selectable && s++;
      });
      let o = aX(i, s);
      if (e.isSelected() !== o && this.selectRowNode(e, o, t, "masterDetail") && this.dispatchSelectionChanged("masterDetail"), !o) {
        let t = this.detailSelection.get(e.id) ?? new Set();
        for (let e of r.getSelectedNodes()) t.add(e.id);
        this.detailSelection.set(e.id, t);
      }
    }
    setDetailSelectionState(e, t, i) {
      if (this.masterSelectsDetail) {
        if (!tu(t)) {
          $$eW42(269);
          return;
        }
        switch (e.isSelected()) {
          case !0:
            i.selectAll();
            break;
          case !1:
            i.deselectAll();
            break;
          case void 0:
            {
              let t = this.detailSelection.get(e.id);
              if (t) {
                let e = [];
                for (let s of t) {
                  let t = i.getRowNode(s);
                  t && e.push(t);
                }
                i.setNodesSelected({
                  nodes: e,
                  newValue: !0,
                  source: "masterDetail"
                });
              }
            }
        }
      }
    }
  }],
  dependsOn: [{
    moduleName: "SharedRowSelection",
    version: eI,
    beans: [aY],
    apiFunctions: {
      setNodesSelected: function (e, t) {
        if (!t.nodes.every(e => e.rowPinned ? ($$eW42(59), !1) : void 0 !== e.id || ($$eW42(60), !1))) return;
        let {
          nodes,
          source,
          newValue
        } = t;
        e.selectionSvc?.setNodesSelected({
          nodes,
          source: source ?? "api",
          newValue
        });
      },
      selectAll: function (e, t, i = "apiSelectAll") {
        e.selectionSvc?.selectAllRowNodes({
          source: i,
          selectAll: t
        });
      },
      deselectAll: function (e, t, i = "apiSelectAll") {
        e.selectionSvc?.deselectAllRowNodes({
          source: i,
          selectAll: t
        });
      },
      selectAllFiltered: function (e, t = "apiSelectAllFiltered") {
        e.selectionSvc?.selectAllRowNodes({
          source: t,
          selectAll: "filtered"
        });
      },
      deselectAllFiltered: function (e, t = "apiSelectAllFiltered") {
        e.selectionSvc?.deselectAllRowNodes({
          source: t,
          selectAll: "filtered"
        });
      },
      selectAllOnCurrentPage: function (e, t = "apiSelectAllCurrentPage") {
        e.selectionSvc?.selectAllRowNodes({
          source: t,
          selectAll: "currentPage"
        });
      },
      deselectAllOnCurrentPage: function (e, t = "apiSelectAllCurrentPage") {
        e.selectionSvc?.deselectAllRowNodes({
          source: t,
          selectAll: "currentPage"
        });
      },
      getSelectedNodes: function (e) {
        return e.selectionSvc?.getSelectedNodes() ?? [];
      },
      getSelectedRows: function (e) {
        return e.selectionSvc?.getSelectedRows() ?? [];
      }
    }
  }]
};
var a0 = class extends r5 {
  constructor() {
    super(...arguments);
    this.beanName = "csrmNodeSvc";
  }
};
var a1 = class {
  constructor() {
    this.removals = new Set();
    this.updates = new Set();
    this.adds = new Set();
  }
  remove(e) {
    this.adds.$$delete(e) || (this.updates.$$delete(e), this.removals.add(e));
  }
  update(e) {
    this.adds.has(e) || this.updates.add(e);
  }
  add(e) {
    this.adds.add(e);
  }
};
function a2(e) {
  e.sibling && (e.sibling.childrenAfterSort = e.childrenAfterSort);
  (function (e) {
    if (ev(e.childrenAfterSort)) return;
    let t = e.childrenAfterSort;
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      let r = 0 === i;
      let o = i === e.childrenAfterSort.length - 1;
      s.setFirstChild(r);
      s.lastChild !== o && (s.lastChild = o, s.dispatchRowEvent("lastChildChanged"));
      s.childIndex !== i && (s.childIndex = i, s.dispatchRowEvent("childIndexChanged"));
    }
  })(e);
}
var a5 = class extends $$tM23 {
  constructor() {
    super(...arguments);
    this.beanName = "sortStage";
    this.refreshProps = new Set(["postSortRows", "groupDisplayType", "accentedSort"]);
    this.step = "sort";
  }
  execute(e) {
    let t = this.beans;
    let i = t.sortSvc.getSortOptions();
    let s = ew(i) && i.length > 0;
    let r = s && !!e.changedRowNodes && this.gos.get("deltaSort");
    let o = i.some(({
      column: e
    }) => e9(t.gos) ? e.isPrimary() && e.isRowGroupActive() : !!e.getColDef().showRowGroup);
    this.sort(t, i, s, r, e.changedRowNodes, e.changedPath, o);
  }
  sort(e, t, i, s, r, o, n) {
    let {
      gos,
      colModel,
      rowGroupColsSvc,
      groupHideOpenParentsSvc,
      rowNodeSorter
    } = e;
    let c = gos.get("groupMaintainOrder");
    let g = colModel.getCols().some(e => e.isRowGroupActive());
    let p = colModel.isPivotMode();
    let m = gos.getCallback("postSortRows");
    o?.forEachChangedNodeDepthFirst(e => {
      let l;
      groupHideOpenParentsSvc?.pullDownGroupDataForHideOpenParents(e.childrenAfterAggFilter, !0);
      let a = p && e.leafGroup;
      if (c && g && !e.leafGroup && !n) {
        let t = rowGroupColsSvc?.columns?.[e.level + 1];
        let i = t?.getSort() === null;
        let s = e.childrenAfterAggFilter.slice(0);
        if (e.childrenAfterSort && !i) {
          let t = {};
          e.childrenAfterSort.forEach((e, i) => {
            t[e.id] = i;
          });
          s.sort((e, i) => (t[e.id] ?? 0) - (t[i.id] ?? 0));
        }
        l = s;
      } else l = !i || a ? e.childrenAfterAggFilter.slice(0) : s && r ? function (e, t, i, s, r) {
        let o = t.childrenAfterAggFilter;
        let n = t.childrenAfterSort;
        if (!n) return e.doFullSort(o, r);
        let l = new Set();
        let a = [];
        let {
          updates,
          adds
        } = i;
        for (function () {
          let e = 0;
          let t = o.length;
        }(); e < t; ++e) {
          let t = o[e];
          updates.has(t) || adds.has(t) || s && !s.canSkip(t) ? a.push({
            currentPos: a.length,
            rowNode: t
          }) : l.add(t.id);
        }
        let u = n.filter(e => l.has(e.id)).map((e, t) => ({
          currentPos: t,
          rowNode: e
        }));
        a.sort((t, i) => e.compareRowNodes(r, t, i));
        return function (e, t, i, s) {
          let r = [];
          let o = 0;
          let n = 0;
          let l = i.length;
          let a = s.length;
          for (; o < l && n < a;) {
            let l;
            let a = i[o];
            let d = s[n];
            0 > e.compareRowNodes(t, a, d) ? (l = a, ++o) : (l = d, ++n);
            r.push(l.rowNode);
          }
          for (; o < l;) r.push(i[o++].rowNode);
          for (; n < a;) r.push(s[n++].rowNode);
          return r;
        }(e, r, a, u);
      }(rowNodeSorter, e, r, o, t) : rowNodeSorter.doFullSort(e.childrenAfterAggFilter, t);
      e.childrenAfterSort = l;
      a2(e);
      m && m({
        nodes: e.childrenAfterSort
      });
    });
  }
};
var $$a314 = {
  moduleName: "ClientSideRowModel",
  version: eI,
  rowModels: ["clientSide"],
  beans: [a0, class extends $$tM23 {
    constructor() {
      super(...arguments);
      this.beanName = "rowModel";
      this.rootNode = null;
      this.rowsToDisplay = [];
      this.started = !1;
      this.isRefreshingModel = !1;
      this.rowNodesCountReady = !1;
      this.rowCountReady = !1;
      this.onRowHeightChanged_debounced = eM(this, this.onRowHeightChanged.bind(this), 100);
    }
    wireBeans(e) {
      this.colModel = e.colModel;
      this.valueCache = e.valueCache;
      this.filterStage = e.filterStage;
      this.sortStage = e.sortStage;
      this.flattenStage = e.flattenStage;
      this.groupStage = e.groupStage;
      this.aggStage = e.aggStage;
      this.pivotStage = e.pivotStage;
      this.filterAggStage = e.filterAggStage;
    }
    postConstruct() {
      this.orderedStages = [this.groupStage, this.filterStage, this.pivotStage, this.aggStage, this.sortStage, this.filterAggStage, this.flattenStage].filter(e => !!e);
      let e = this.refreshModel.bind(this, {
        step: "group"
      });
      let t = this.refreshModel.bind(this, {
        step: "group",
        afterColumnsChanged: !0,
        keepRenderedRows: !0,
        animate: !this.gos.get("suppressAnimationFrame")
      });
      this.addManagedEventListeners({
        newColumnsLoaded: t,
        columnRowGroupChanged: e,
        columnValueChanged: this.onValueChanged.bind(this),
        columnPivotChanged: this.refreshModel.bind(this, {
          step: "pivot"
        }),
        filterChanged: this.onFilterChanged.bind(this),
        sortChanged: this.onSortChanged.bind(this),
        columnPivotModeChanged: e,
        gridStylesChanged: this.onGridStylesChanges.bind(this),
        gridReady: this.onGridReady.bind(this)
      });
      this.addPropertyListeners();
      this.rootNode = new sM(this.beans);
      let i = this.getNewNodeManager();
      this.nodeManager = i;
      i.activate(this.rootNode);
    }
    getNewNodeManager() {
      let e;
      let {
        gos,
        beans
      } = this;
      gos.get("treeData") && (e = gos.get("treeDataChildrenField") ? beans.csrmChildrenTreeNodeSvc : beans.csrmPathTreeNodeSvc);
      return e ?? beans.csrmNodeSvc;
    }
    addPropertyListeners() {
      let e = ["treeData", "treeDataChildrenField", ...this.orderedStages.flatMap(({
        refreshProps: e
      }) => [...e])];
      this.addManagedPropertyListeners(e, e => {
        let t = e.changeSet?.properties;
        t && this.onPropChange(t);
      });
      this.addManagedPropertyListener("rowData", () => this.onPropChange(["rowData"]));
      this.addManagedPropertyListener("rowHeight", () => this.resetRowHeights());
    }
    start() {
      this.started = !0;
      this.rowNodesCountReady ? this.refreshModel({
        step: "group",
        rowDataUpdated: !0,
        newData: !0
      }) : this.setInitialData();
    }
    setInitialData() {
      this.gos.get("rowData") && this.onPropChange(["rowData"]);
    }
    ensureRowHeightsValid(e, t, i, s) {
      let r;
      let o = !1;
      do {
        r = !1;
        let n = this.getRowIndexAtPixel(e);
        let l = this.getRowIndexAtPixel(t);
        let a = Math.max(n, i);
        let d = Math.min(l, s);
        for (let e = a; e <= d; e++) {
          let t = this.getRow(e);
          if (t.rowHeightEstimated) {
            let e = eJ(this.beans, t);
            t.setRowHeight(e.height);
            r = !0;
            o = !0;
          }
        }
        r && this.setRowTopAndRowIndex();
      } while (r);
      return o;
    }
    onPropChange(e) {
      let t;
      if (!this.rootNode) return;
      let i = this.gos;
      let s = new Set(e);
      let r = {
        step: "nothing",
        changedProps: s
      };
      let o = s.has("rowData");
      let n = s.has("treeData");
      let l = this.nodeManager;
      let a = this.getNewNodeManager();
      let d = l !== a || s.has("treeDataChildrenField") && i.get("treeData");
      if (n && (r.step = "group"), (d || o) && null != (t = i.get("rowData")) && !Array.isArray(t) && (t = null, $$eW42(1)), d && (o || (t = l?.extractRowData() ?? t), l !== a && (l?.deactivate(), this.nodeManager = a), a.activate(this.rootNode)), t && (!d && !this.isEmpty() && t.length > 0 && i.exists("getRowId") && !i.get("resetRowDataOnUpdate") ? (r.keepRenderedRows = !0, r.animate = !this.gos.get("suppressAnimationFrame"), r.changedRowNodes = new a1(), a.setImmutableRowData(r, t)) : (r.rowDataUpdated = !0, r.newData = !0, this.beans.selectionSvc?.reset("rowDataChanged"), this.rowNodesCountReady = !0, a.setNewRowData(t))), r.rowDataUpdated) r.step = "group";else if ("nothing" === r.step) {
        for (let {
          refreshProps,
          step
        } of this.orderedStages) if (e.some(e => refreshProps.has(e))) {
          r.step = step;
          break;
        }
      }
      "nothing" !== r.step && this.refreshModel(r);
    }
    setRowTopAndRowIndex() {
      let {
        beans
      } = this;
      let t = beans.environment.getDefaultRowHeight();
      let i = 0;
      let s = new Set();
      let r = ej(this.gos, "normal");
      let o = this.rowsToDisplay;
      for (function () {
        let n = 0;
        let l = o.length;
      }(); n < l; ++n) {
        let l = o[n];
        if (null != l.id && s.add(l.id), null == l.rowHeight) {
          let i = eJ(beans, l, r, t);
          l.setRowHeight(i.height, i.estimated);
        }
        l.setRowTop(i);
        l.setRowIndex(n);
        i += l.rowHeight;
      }
      return s;
    }
    clearRowTopAndRowIndex(e, t) {
      let i = e.active;
      let s = e => {
        e && null != e.id && !t.has(e.id) && e.clearRowTopAndRowIndex();
      };
      let r = e => {
        if (null !== e && (s(e), s(e.detailNode), s(e.sibling), e.hasChildren() && e.childrenAfterGroup)) {
          let t = -1 == e.level;
          (!i || t || e.expanded) && e.childrenAfterGroup.forEach(r);
        }
      };
      r(this.rootNode);
    }
    ensureRowsAtPixel(e, t, i = 0) {
      let s = this.getRowIndexAtPixel(t);
      let r = this.getRow(s);
      let o = !this.gos.get("suppressAnimationFrame");
      if (r === e[0]) return !1;
      let n = this.rootNode?.allLeafChildren;
      return !!n && (e.forEach(e => {
        tJ(n, e);
      }), e.forEach((e, t) => {
        n.splice(Math.max(s + i, 0) + t, 0, e);
      }), e.forEach((e, t) => {
        e.sourceRowIndex = t;
      }), this.refreshModel({
        step: "group",
        keepRenderedRows: !0,
        animate: o,
        rowNodesOrderChanged: !0
      }), !0);
    }
    highlightRowAtPixel(e, t) {
      let i = null != t ? this.getRowIndexAtPixel(t) : null;
      let s = null != i ? this.getRow(i) : null;
      if (!s || !e || null == t) {
        this.clearHighlightedRow();
        return;
      }
      let r = this.getHighlightPosition(t, s);
      let o = this.isHighlightingCurrentPosition(e, s, r);
      let n = null != this.lastHighlightedRow && this.lastHighlightedRow !== s;
      (o || n) && (this.clearHighlightedRow(), o) || (this.setRowNodeHighlighted(s, r), this.lastHighlightedRow = s);
    }
    setRowNodeHighlighted(e, t) {
      e.highlighted !== t && (e.highlighted = t, e.dispatchRowEvent("rowHighlightChanged"));
    }
    getHighlightPosition(e, t) {
      if (!t) {
        let i = this.getRowIndexAtPixel(e);
        if (!(t = this.getRow(i || 0))) return "Below";
      }
      let {
        rowTop,
        rowHeight
      } = t;
      return e - rowTop < rowHeight / 2 ? "Above" : "Below";
    }
    getLastHighlightedRowNode() {
      return this.lastHighlightedRow;
    }
    isHighlightingCurrentPosition(e, t, i) {
      return e === t || this.getRow(t.rowIndex + ("Above" === i ? -1 : 1)) === e;
    }
    clearHighlightedRow() {
      this.lastHighlightedRow && (this.setRowNodeHighlighted(this.lastHighlightedRow, null), this.lastHighlightedRow = null);
    }
    isLastRowIndexKnown() {
      return !0;
    }
    getRowCount() {
      return this.rowsToDisplay ? this.rowsToDisplay.length : 0;
    }
    getTopLevelRowCount() {
      let e = this.rootNode;
      if (!e || 0 === this.rowsToDisplay.length) return 0;
      if (this.rowsToDisplay && this.rowsToDisplay[0] === e) return 1;
      let t = e.childrenAfterAggFilter;
      let i = e.sibling ? 1 : 0;
      return (t ? t.length : 0) + i;
    }
    getTopLevelRowDisplayedIndex(e) {
      let {
        rootNode,
        rowsToDisplay
      } = this;
      if (!rootNode || !rowsToDisplay.length || rowsToDisplay[0] === rootNode) return e;
      let {
        childrenAfterSort
      } = rootNode;
      let r = e => {
        let t = childrenAfterSort[e];
        if (this.gos.get("groupHideOpenParents")) for (; t.expanded && t.childrenAfterSort && t.childrenAfterSort.length > 0;) t = t.childrenAfterSort[0];
        return t.rowIndex;
      };
      let {
        footerSvc
      } = this.beans;
      return footerSvc ? footerSvc.getTopDisplayIndex(rowsToDisplay, e, childrenAfterSort, r) : r(e);
    }
    getRowBounds(e) {
      let t = this.rowsToDisplay[e];
      return t ? {
        rowTop: t.rowTop,
        rowHeight: t.rowHeight
      } : null;
    }
    onRowGroupOpened() {
      let e = e8(this.gos);
      this.refreshModel({
        step: "map",
        keepRenderedRows: !0,
        animate: e
      });
    }
    onFilterChanged(e) {
      if (e.afterDataChange) return;
      let t = e8(this.gos);
      let i = 0 === e.columns.length || e.columns.some(e => e.isPrimary());
      this.refreshModel({
        step: i ? "filter" : "filter_aggregates",
        keepRenderedRows: !0,
        animate: t
      });
    }
    onSortChanged() {
      let e = e8(this.gos);
      this.refreshModel({
        step: "sort",
        keepRenderedRows: !0,
        animate: e
      });
    }
    getType() {
      return "clientSide";
    }
    onValueChanged() {
      this.refreshModel({
        step: this.colModel.isPivotActive() ? "pivot" : "aggregate"
      });
    }
    createChangePath(e) {
      let t = new l0(!1, this.rootNode);
      e || (t.active = !1);
      return t;
    }
    isSuppressModelUpdateAfterUpdateTransaction(e) {
      if (!this.gos.get("suppressModelUpdateAfterUpdateTransaction")) return !1;
      let {
        changedRowNodes,
        newData,
        rowDataUpdated
      } = e;
      return !!changedRowNodes && !newData && !!rowDataUpdated && !changedRowNodes.removals.size && !changedRowNodes.adds.size;
    }
    refreshModel(e) {
      if (!this.rootNode) return;
      let t = e.changedPath ?? (e.changedPath = this.createChangePath(!e.newData && !!e.rowDataUpdated));
      if (this.nodeManager.refreshModel?.(e, this.started), this.eventSvc.dispatchEvent({
        type: "beforeRefreshModel",
        params: e
      }), !this.started || (e.rowDataUpdated && this.eventSvc.dispatchEvent({
        type: "rowDataUpdated"
      }), this.isRefreshingModel || this.colModel.changeEventsDispatching || this.isSuppressModelUpdateAfterUpdateTransaction(e))) return;
      switch (this.isRefreshingModel = !0, e.step) {
        case "group":
          this.doRowGrouping(e.changedRowNodes, t, !!e.rowNodesOrderChanged, !!e.afterColumnsChanged);
        case "filter":
          this.doFilter(t);
        case "pivot":
          this.doPivot(t);
        case "aggregate":
          this.doAggregate(t);
        case "filter_aggregates":
          this.doFilterAggregates(t);
        case "sort":
          this.doSort(e.changedRowNodes, t);
        case "map":
          this.doRowsToDisplay();
      }
      let i = this.setRowTopAndRowIndex();
      this.clearRowTopAndRowIndex(t, i);
      this.isRefreshingModel = !1;
      this.eventSvc.dispatchEvent({
        type: "modelUpdated",
        animate: e.animate,
        keepRenderedRows: e.keepRenderedRows,
        newData: e.newData,
        newPage: !1,
        keepUndoRedoStack: e.keepUndoRedoStack
      });
    }
    isEmpty() {
      return !this.rootNode?.allLeafChildren?.length || !this.colModel?.ready;
    }
    isRowsToRender() {
      return this.rowsToDisplay.length > 0;
    }
    getNodesInRangeForSelection(e, t) {
      let i = !1;
      let s = !1;
      let r = [];
      let o = tp(this.gos);
      this.forEachNodeAfterFilterAndSort(n => {
        if (!s) {
          if (i && (n === t || n === e) && (s = !0, n.group && o)) {
            r.push(...n.allLeafChildren);
            return;
          }
          if (!i) {
            if (n !== t && n !== e) return;
            i = !0;
          }
          if (!n.group || !o) {
            r.push(n);
            return;
          }
        }
      });
      return r;
    }
    getTopLevelNodes() {
      return this.rootNode?.childrenAfterGroup ?? null;
    }
    getRow(e) {
      return this.rowsToDisplay[e];
    }
    isRowPresent(e) {
      return this.rowsToDisplay.indexOf(e) >= 0;
    }
    getRowIndexAtPixel(e) {
      let t = this.rowsToDisplay;
      if (this.isEmpty() || 0 === t.length) return -1;
      let i = 0;
      let s = t.length - 1;
      if (e <= 0) return 0;
      if (tq(t).rowTop <= e) return t.length - 1;
      let r = -1;
      let o = -1;
      for (;;) {
        let n = Math.floor((i + s) / 2);
        let l = t[n];
        if (this.isRowInPixel(l, e) || (l.rowTop < e ? i = n + 1 : l.rowTop > e && (s = n - 1), r === i && o === s)) return n;
        r = i;
        o = s;
      }
    }
    isRowInPixel(e, t) {
      let i = e.rowTop;
      let s = e.rowTop + e.rowHeight;
      return i <= t && s > t;
    }
    forEachLeafNode(e) {
      this.rootNode?.allLeafChildren?.forEach((t, i) => e(t, i));
    }
    forEachNode(e, t = !1) {
      this.depthFirstSearchRowNodes(e, t);
    }
    forEachDisplayedNode(e) {
      this.rowsToDisplay.forEach(e);
    }
    forEachNodeAfterFilter(e, t = !1) {
      this.depthFirstSearchRowNodes(e, t, e => e.childrenAfterAggFilter);
    }
    forEachNodeAfterFilterAndSort(e, t = !1) {
      this.depthFirstSearchRowNodes(e, t, e => e.childrenAfterSort);
    }
    forEachPivotNode(e, t = !1, i = !1) {
      let s = i ? "childrenAfterSort" : "childrenAfterGroup";
      this.depthFirstSearchRowNodes(e, t, e => e.leafGroup ? null : e[s]);
    }
    depthFirstSearchRowNodes(e, t = !1, i = e => e.childrenAfterGroup, s = this.rootNode, r = 0) {
      let o = r;
      if (!s) return o;
      let n = s === this.rootNode;
      n || e(s, o++);
      let {
        footerSvc
      } = this.beans;
      if (s.hasChildren() && !s.footer) {
        let r = i(s);
        if (r) {
          for (let a of (o = footerSvc?.addTotalRows(o, s, e, t, n, "top") ?? o, r)) o = this.depthFirstSearchRowNodes(e, t, i, a, o);
          return footerSvc?.addTotalRows(o, s, e, t, n, "bottom") ?? o;
        }
      }
      return o;
    }
    doAggregate(e) {
      let t = this.rootNode;
      t && this.aggStage?.execute({
        rowNode: t,
        changedPath: e
      });
    }
    doFilterAggregates(e) {
      let t = this.rootNode;
      this.filterAggStage ? this.filterAggStage.execute({
        rowNode: t,
        changedPath: e
      }) : t.childrenAfterAggFilter = t.childrenAfterFilter;
    }
    doSort(e, t) {
      let {
        groupHideOpenParentsSvc
      } = this.beans;
      this.sortStage ? this.sortStage.execute({
        rowNode: this.rootNode,
        changedRowNodes: e,
        changedPath: t
      }) : t.forEachChangedNodeDepthFirst(e => {
        groupHideOpenParentsSvc?.pullDownGroupDataForHideOpenParents(e.childrenAfterAggFilter, !0);
        e.childrenAfterSort = e.childrenAfterAggFilter.slice(0);
        a2(e);
      });
      groupHideOpenParentsSvc?.updateGroupDataForHideOpenParents(t);
    }
    doRowGrouping(e, t, i, s) {
      let r = this.nodeManager.treeData;
      let o = this.rootNode;
      if (!r) {
        let r = this.groupStage;
        if (r) r.execute({
          rowNode: o,
          changedPath: t,
          changedRowNodes: e,
          rowNodesOrderChanged: i,
          afterColumnsChanged: s
        });else {
          let e = o.sibling;
          o.childrenAfterGroup = o.allLeafChildren;
          e && (e.childrenAfterGroup = o.childrenAfterGroup);
          o.updateHasChildren();
        }
      }
      this.rowNodesCountReady && (this.rowCountReady = !0, this.eventSvc.dispatchEventOnce({
        type: "rowCountReady"
      }));
    }
    doFilter(e) {
      this.filterStage ? this.filterStage.execute({
        rowNode: this.rootNode,
        changedPath: e
      }) : e.forEachChangedNodeDepthFirst(e => {
        e.childrenAfterFilter = e.childrenAfterGroup;
        aP(e);
      }, !0);
    }
    doPivot(e) {
      this.pivotStage?.execute({
        rowNode: this.rootNode,
        changedPath: e
      });
    }
    getRowNode(e) {
      if ("string" == typeof e && 0 == e.indexOf(sA)) {
        let t;
        this.forEachNode(i => {
          i.id === e && (t = i);
        });
        return t;
      }
      return this.nodeManager.getRowNode(e);
    }
    batchUpdateRowData(e, t) {
      if (null == this.applyAsyncTransactionsTimeout) {
        this.rowDataTransactionBatch = [];
        let e = this.gos.get("asyncTransactionWaitMillis");
        this.applyAsyncTransactionsTimeout = window.setTimeout(() => {
          this.isAlive() && this.executeBatchUpdateRowData();
        }, e);
      }
      this.rowDataTransactionBatch.push({
        rowDataTransaction: e,
        callback: t
      });
    }
    flushAsyncTransactions() {
      null != this.applyAsyncTransactionsTimeout && (clearTimeout(this.applyAsyncTransactionsTimeout), this.executeBatchUpdateRowData());
    }
    executeBatchUpdateRowData() {
      this.valueCache?.onDataChanged();
      let e = [];
      let t = [];
      let i = new a1();
      let s = !1;
      this.rowDataTransactionBatch?.forEach(r => {
        this.rowNodesCountReady = !0;
        let {
          rowNodeTransaction,
          rowsInserted
        } = this.nodeManager.updateRowData(r.rowDataTransaction, i);
        rowsInserted && (s = !0);
        t.push(rowNodeTransaction);
        r.callback && e.push(r.callback.bind(null, rowNodeTransaction));
      });
      this.commitTransactions(s, i);
      e.length > 0 && window.setTimeout(() => {
        e.forEach(e => e());
      }, 0);
      t.length > 0 && this.eventSvc.dispatchEvent({
        type: "asyncTransactionsFlushed",
        results: t
      });
      this.rowDataTransactionBatch = null;
      this.applyAsyncTransactionsTimeout = void 0;
    }
    updateRowData(e) {
      this.valueCache?.onDataChanged();
      this.rowNodesCountReady = !0;
      let t = new a1();
      let {
        rowNodeTransaction,
        rowsInserted
      } = this.nodeManager.updateRowData(e, t);
      this.commitTransactions(rowsInserted, t);
      return rowNodeTransaction;
    }
    commitTransactions(e, t) {
      this.refreshModel({
        step: "group",
        rowDataUpdated: !0,
        rowNodesOrderChanged: e,
        keepRenderedRows: !0,
        animate: !this.gos.get("suppressAnimationFrame"),
        changedRowNodes: t,
        changedPath: this.createChangePath(!0)
      });
    }
    doRowsToDisplay() {
      let e;
      let {
        flattenStage,
        rootNode
      } = this;
      if (flattenStage) e = flattenStage.execute({
        rowNode: rootNode
      });else for (let t of e = rootNode?.childrenAfterSort ?? []) t.setUiLevel(0);
      this.rowsToDisplay = e;
    }
    onRowHeightChanged() {
      this.refreshModel({
        step: "map",
        keepRenderedRows: !0,
        keepUndoRedoStack: !0
      });
    }
    resetRowHeights() {
      let e = this.rootNode;
      if (!e) return;
      let t = this.resetRowHeightsForAllRowNodes();
      e.setRowHeight(e.rowHeight, !0);
      e.sibling && e.sibling.setRowHeight(e.sibling.rowHeight, !0);
      t && this.onRowHeightChanged();
    }
    resetRowHeightsForAllRowNodes() {
      let e = !1;
      this.forEachNode(t => {
        t.setRowHeight(t.rowHeight, !0);
        let i = t.detailNode;
        i && i.setRowHeight(i.rowHeight, !0);
        t.sibling && t.sibling.setRowHeight(t.sibling.rowHeight, !0);
        e = !0;
      });
      return e;
    }
    onGridStylesChanges(e) {
      e.rowHeightChanged && !this.beans.rowAutoHeight?.active && this.resetRowHeights();
    }
    onGridReady() {
      this.started || this.setInitialData();
    }
    isRowDataLoaded() {
      return this.rowCountReady;
    }
    destroy() {
      super.destroy();
      this.clearHighlightedRow();
      this.started = !1;
      this.rootNode = null;
      this.nodeManager = null;
      this.rowDataTransactionBatch = null;
      this.lastHighlightedRow = null;
      this.orderedStages = tj;
      this.rowsToDisplay = tj;
    }
    onRowHeightChangedDebounced() {
      this.onRowHeightChanged_debounced();
    }
  }, a5],
  dependsOn: [lX]
};
var a6 = class extends $$tM23 {
  constructor(e, t, i) {
    super();
    this.id = e;
    this.parentCache = t;
    this.params = i;
    this.state = "needsLoading";
    this.version = 0;
    this.startRow = e * i.blockSize;
    this.endRow = this.startRow + i.blockSize;
  }
  load() {
    this.state = "loading";
    this.loadFromDatasource();
  }
  setStateWaitingToLoad() {
    this.version++;
    this.state = "needsLoading";
  }
  pageLoadFailed(e) {
    this.isRequestMostRecentAndLive(e) && (this.state = "failed");
    this.dispatchLocalEvent({
      type: "loadComplete"
    });
  }
  pageLoaded(e, t, i) {
    this.successCommon(e, {
      rowData: t,
      rowCount: i
    });
  }
  isRequestMostRecentAndLive(e) {
    let t = e === this.version;
    let i = this.isAlive();
    return t && i;
  }
  successCommon(e, t) {
    this.dispatchLocalEvent({
      type: "loadComplete"
    });
    this.isRequestMostRecentAndLive(e) && (this.state = "loaded", this.processServerResult(t));
  }
  postConstruct() {
    this.rowNodes = [];
    let {
      params: {
        blockSize,
        rowHeight
      },
      startRow,
      beans,
      rowNodes
    } = this;
    for (let o = 0; o < blockSize; o++) {
      let e = startRow + o;
      let n = new sM(beans);
      n.setRowHeight(rowHeight);
      n.uiLevel = 0;
      n.setRowIndex(e);
      n.setRowTop(rowHeight * e);
      rowNodes.push(n);
    }
  }
  getBlockStateJson() {
    let {
      id,
      startRow,
      endRow,
      state
    } = this;
    return {
      id: "" + id,
      state: {
        blockNumber: id,
        startRow,
        endRow,
        pageStatus: state
      }
    };
  }
  setDataAndId(e, t, i) {
    ew(t) ? e.setDataAndId(t, i.toString()) : e.setDataAndId(void 0, void 0);
  }
  loadFromDatasource() {
    let e = this.createLoadParams();
    if (ev(this.params.datasource.getRows)) {
      $$eW42(90);
      return;
    }
    window.setTimeout(() => {
      this.params.datasource.getRows(e);
    }, 0);
  }
  createLoadParams() {
    let {
      startRow,
      endRow,
      version,
      params: {
        sortModel,
        filterModel
      },
      gos
    } = this;
    return {
      startRow,
      endRow,
      successCallback: this.pageLoaded.bind(this, version),
      failCallback: this.pageLoadFailed.bind(this, version),
      sortModel,
      filterModel,
      context: ty(gos, {}).context
    };
  }
  forEachNode(e, t, i) {
    this.rowNodes.forEach((s, r) => {
      this.startRow + r < i && e(s, t.value++);
    });
  }
  getRow(e, t = !1) {
    t || (this.lastAccessed = this.params.lastAccessedSequence.value++);
    let i = e - this.startRow;
    return this.rowNodes[i];
  }
  processServerResult(e) {
    let {
      rowNodes,
      beans
    } = this;
    rowNodes.forEach((s, r) => {
      let o = e.rowData ? e.rowData[r] : void 0;
      !s.id && s.alreadyRendered && o && (rowNodes[r] = new sM(beans), rowNodes[r].setRowIndex(s.rowIndex), rowNodes[r].setRowTop(s.rowTop), rowNodes[r].setRowHeight(s.rowHeight), s.clearRowTopAndRowIndex());
      this.setDataAndId(rowNodes[r], o, this.startRow + r);
    });
    let s = null != e.rowCount && e.rowCount >= 0 ? e.rowCount : void 0;
    this.parentCache.pageLoaded(this, s);
  }
  destroy() {
    this.rowNodes.forEach(e => {
      e.clearRowTopAndRowIndex();
    });
    super.destroy();
  }
};
var a4 = "paginationPageSizeSelector";
var a8 = {
  selector: "AG-PAGE-SIZE-SELECTOR",
  component: class extends iS {
    constructor() {
      super('<span class="ag-paging-page-size"></span>');
      this.hasEmptyOption = !1;
      this.handlePageSizeItemSelected = () => {
        if (!this.selectPageSizeComp) return;
        let e = this.selectPageSizeComp.getValue();
        if (!e) return;
        let t = Number(e);
        isNaN(t) || t < 1 || t === this.pagination.getPageSize() || (this.pagination.setPageSize(t, "pageSizeSelector"), this.hasEmptyOption && this.toggleSelectDisplay(!0), this.selectPageSizeComp.getFocusableElement().focus());
      };
    }
    wireBeans(e) {
      this.pagination = e.pagination;
    }
    postConstruct() {
      this.addManagedPropertyListener(a4, () => {
        this.onPageSizeSelectorValuesChange();
      });
      this.addManagedEventListeners({
        paginationChanged: e => this.handlePaginationChanged(e)
      });
    }
    handlePaginationChanged(e) {
      if (!this.selectPageSizeComp || !e?.newPageSize) return;
      let t = this.pagination.getPageSize();
      this.getPageSizeSelectorValues().includes(t) ? this.selectPageSizeComp.setValue(t.toString()) : this.hasEmptyOption ? this.selectPageSizeComp.setValue("") : this.toggleSelectDisplay(!0);
    }
    toggleSelectDisplay(e) {
      if (this.selectPageSizeComp && !e && this.reset(), e && (this.reloadPageSizesSelector(), !this.selectPageSizeComp)) return;
    }
    reset() {
      et(this.getGui());
      this.selectPageSizeComp && (this.selectPageSizeComp = this.destroyBean(this.selectPageSizeComp));
    }
    onPageSizeSelectorValuesChange() {
      this.selectPageSizeComp && this.shouldShowPageSizeSelector() && this.reloadPageSizesSelector();
    }
    shouldShowPageSizeSelector() {
      return this.gos.get("pagination") && !this.gos.get("suppressPaginationPanel") && !this.gos.get("paginationAutoPageSize") && !1 !== this.gos.get(a4);
    }
    reloadPageSizesSelector() {
      let e = this.getPageSizeSelectorValues();
      let t = this.pagination.getPageSize();
      let i = !t || !e.includes(t);
      if (i) {
        let i = this.gos.exists("paginationPageSize");
        let s = !0 !== this.gos.get(a4);
        $$eW42(94, {
          pageSizeSet: i,
          pageSizesSet: s,
          pageSizeOptions: e,
          paginationPageSizeOption: t
        });
        s || $$eW42(95, {
          paginationPageSizeOption: t,
          paginationPageSizeSelector: a4
        });
        e.unshift("");
      }
      let s = String(i ? "" : t);
      this.selectPageSizeComp ? (tY(this.pageSizeOptions, e) || (this.selectPageSizeComp.clearOptions().addOptions(this.createPageSizeSelectOptions(e)), this.pageSizeOptions = e), this.selectPageSizeComp.setValue(s, !0)) : this.createPageSizeSelectorComp(e, s);
      this.hasEmptyOption = i;
    }
    createPageSizeSelectOptions(e) {
      return e.map(e => ({
        value: String(e)
      }));
    }
    createPageSizeSelectorComp(e, t) {
      let i = this.getLocaleTextFunc();
      let s = i("pageSizeSelectorLabel", "Page Size:");
      let r = i("ariaPageSizeSelectorLabel", "Page Size");
      this.selectPageSizeComp = this.createManagedBean(new ou()).addOptions(this.createPageSizeSelectOptions(e)).setValue(t).setAriaLabel(r).setLabel(s).onValueChange(() => this.handlePageSizeItemSelected());
      this.appendChild(this.selectPageSizeComp);
    }
    getPageSizeSelectorValues() {
      let e = this.gos.get(a4);
      return Array.isArray(e) && e?.length ? [...e].sort((e, t) => e - t) : [20, 50, 100];
    }
    destroy() {
      this.toggleSelectDisplay(!1);
      super.destroy();
    }
  }
};
var $$a76 = {
  moduleName: "RowApi",
  version: eI,
  apiFunctions: {
    redrawRows: function (e, t = {}) {
      let i = t ? t.rowNodes : void 0;
      e.frameworkOverrides.wrapIncoming(() => e.rowRenderer.redrawRows(i));
    },
    setRowNodeExpanded: function e(t, i, s, r, o) {
      i && (r && i.parent && -1 !== i.parent.level && e(t, i.parent, s, r, o), i.setExpanded(s, void 0, o));
    },
    getRowNode: function (e, t) {
      return e.rowModel.getRowNode(t);
    },
    addRenderedRowListener: function (e, t, i, s) {
      e.rowRenderer.addRenderedRowListener(t, i, s);
    },
    getRenderedNodes: function (e) {
      return e.rowRenderer.getRenderedNodes();
    },
    forEachNode: function (e, t, i) {
      e.rowModel.forEachNode(t, i);
    },
    getFirstDisplayedRowIndex: function (e) {
      return e.rowRenderer.firstRenderedRow;
    },
    getLastDisplayedRowIndex: function (e) {
      return e.rowRenderer.lastRenderedRow;
    },
    getDisplayedRowAtIndex: function (e, t) {
      return e.rowModel.getRow(t);
    },
    getDisplayedRowCount: function (e) {
      return e.rowModel.getRowCount();
    }
  }
};
var $$a926 = {
  moduleName: "RenderApi",
  version: eI,
  apiFunctions: {
    setGridAriaProperty: function (e, t, i) {
      if (!t) return;
      let s = e.ctrlsSvc.getGridBodyCtrl().eGridBody;
      let r = `aria-${t}`;
      null === i ? s.removeAttribute(r) : s.setAttribute(r, i);
    },
    refreshCells: function (e, t = {}) {
      e.frameworkOverrides.wrapIncoming(() => e.rowRenderer.refreshCells(t));
    },
    refreshHeader: function (e) {
      e.frameworkOverrides.wrapIncoming(() => e.ctrlsSvc.getHeaderRowContainerCtrls().forEach(e => e.refresh()));
    },
    isAnimationFrameQueueEmpty: function (e) {
      return e.animationFrameSvc?.isQueueEmpty() ?? !0;
    },
    flushAllAnimationFrames: function (e) {
      e.animationFrameSvc?.flushAllFrames();
    },
    getSizesForCurrentTheme: function (e) {
      return {
        rowHeight: eZ(e),
        headerHeight: rE(e)
      };
    },
    getCellRendererInstances: function (e, t = {}) {
      let i = [];
      if (e.rowRenderer.getCellCtrls(t.rowNodes, t.columns).forEach(e => {
        let t = e.getCellRenderer();
        null != t && i.push(iK(t));
      }), t.columns?.length) return i;
      let s = [];
      let r = l$(t.rowNodes);
      e.rowRenderer.getAllRowCtrls().forEach(e => {
        if (r && !lK(e.rowNode, r) || !e.isFullWidth()) return;
        let t = e.getFullWidthCellRenderers();
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          null != i && s.push(iK(i));
        }
      });
      return [...s, ...i];
    }
  }
};
function de(e, t) {
  return e.cache[t];
}
var dt = class extends sc {
  constructor(e, t, i) {
    super(e.col, e.firstNode, i, t);
    this.cellSpan = e;
    this.SPANNED_CELL_CSS_CLASS = "ag-spanned-cell";
  }
  setComp(e, t, i, s, r, o, n) {
    this.eWrapper = i;
    super.setComp(e, t, i, s, r, o, n);
    this.setAriaRowSpan();
    this.refreshAriaRowIndex();
  }
  isCellSpanning() {
    return !0;
  }
  getCellSpan() {
    return this.cellSpan;
  }
  refreshAriaRowIndex() {
    null != this.rowNode.rowIndex && P(this.eGui, this.rowNode.rowIndex);
  }
  setAriaRowSpan() {
    w(this.eGui, "rowspan", this.cellSpan.spannedNodes.size);
  }
  shouldRestoreFocus() {
    return this.beans.focusSvc.shouldRestoreFocus(this.cellSpan);
  }
  onFocusOut() {
    this.focusedCellPosition = void 0;
    super.onFocusOut();
  }
  setFocusedCellPosition(e) {
    this.focusedCellPosition = e;
  }
  getFocusedCellPosition() {
    return this.focusedCellPosition ?? this.cellPosition;
  }
  isCellFocused() {
    let e = this.beans.focusSvc.getFocusedCell();
    return !!e && this.cellSpan.doesSpanContain(e);
  }
  applyStaticCssClasses() {
    super.applyStaticCssClasses();
    this.comp.addOrRemoveCssClass(this.SPANNED_CELL_CSS_CLASS, !0);
  }
  onCellFocused(e) {
    let {
      beans
    } = this;
    if (so(beans)) {
      this.focusedCellPosition = void 0;
      return;
    }
    let i = this.isCellFocused();
    i || (this.focusedCellPosition = void 0);
    e && i && (this.focusedCellPosition = {
      rowIndex: e.rowIndex,
      rowPinned: e.rowPinned,
      column: e.column
    });
    super.onCellFocused(e);
  }
  getRootElement() {
    return this.eWrapper;
  }
};
var di = e => e ?? "center";
var ds = class {
  constructor(e, t) {
    this.col = e;
    this.firstNode = t;
    this.cellSpan = !0;
    this.spannedNodes = new Set();
    this.addSpannedNode(t);
  }
  addSpannedNode(e) {
    this.spannedNodes.add(e);
    this.lastNode = e;
  }
  getLastNode() {
    return this.lastNode;
  }
  getCellHeight() {
    return this.lastNode.rowTop + this.lastNode.rowHeight - this.firstNode.rowTop - 1;
  }
  doesSpanContain(e) {
    return e.column === this.col && e.rowPinned == this.firstNode.rowPinned && this.firstNode.rowIndex <= e.rowIndex && e.rowIndex <= this.lastNode.rowIndex;
  }
  getLastNodeAutoHeight() {
    let e = this.firstNode.__autoHeights?.[this.col.getColId()];
    if (null == e) return;
    let t = 0;
    this.spannedNodes.forEach(e => {
      e !== this.lastNode && (t += e.rowHeight);
    });
    return e - t;
  }
};
var dr = class extends $$tM23 {
  constructor(e, t) {
    super();
    this.cellCtrl = e;
    this.staticClasses = [];
    this.beans = t;
    this.column = e.column;
  }
  setComp(e) {
    this.cellComp = e;
    this.applyUserStyles();
    this.applyCellClassRules();
    this.applyClassesFromColDef();
  }
  applyCellClassRules() {
    let {
      column,
      cellComp
    } = this;
    let i = column.colDef;
    let s = i.cellClassRules;
    let r = this.getCellClassParams(column, i);
    sJ(this.beans.expressionSvc, s === this.cellClassRules ? void 0 : this.cellClassRules, s, r, e => cellComp.addOrRemoveCssClass(e, !0), e => cellComp.addOrRemoveCssClass(e, !1));
    this.cellClassRules = s;
  }
  applyUserStyles() {
    let e;
    let t = this.column;
    let i = t.colDef;
    let s = i.cellStyle;
    s && (e = "function" == typeof s ? s(this.getCellClassParams(t, i)) : s) && this.cellComp.setUserStyles(e);
  }
  applyClassesFromColDef() {
    let {
      column,
      cellComp
    } = this;
    let i = column.colDef;
    let s = this.getCellClassParams(column, i);
    this.staticClasses.forEach(e => cellComp.addOrRemoveCssClass(e, !1));
    let r = this.beans.cellStyles.getStaticCellClasses(i, s);
    this.staticClasses = r;
    r.forEach(e => cellComp.addOrRemoveCssClass(e, !0));
  }
  getCellClassParams(e, t) {
    let {
      value,
      rowNode
    } = this.cellCtrl;
    return ty(this.beans.gos, {
      value,
      data: rowNode.data,
      node: rowNode,
      colDef: t,
      column: e,
      rowIndex: rowNode.rowIndex
    });
  }
};
var $$dn9 = {
  moduleName: "CellStyle",
  version: eI,
  beans: [class extends $$tM23 {
    constructor() {
      super(...arguments);
      this.beanName = "cellStyles";
    }
    processAllCellClasses(e, t, i, s) {
      sJ(this.beans.expressionSvc, void 0, e.cellClassRules, t, i, s);
      this.processStaticCellClasses(e, t, i);
    }
    getStaticCellClasses(e, t) {
      let i;
      let {
        cellClass
      } = e;
      return cellClass ? ("string" == typeof (i = "function" == typeof cellClass ? cellClass(t) : cellClass) && (i = [i]), i || []) : [];
    }
    createCellCustomStyleFeature(e, t) {
      return new dr(e, t);
    }
    processStaticCellClasses(e, t, i) {
      this.getStaticCellClasses(e, t).forEach(e => {
        i(e);
      });
    }
  }]
};
export const $I9 = $$aj0;
export const AR_ = $$rS1;
export const Aag = $$E2;
export const BEv = $$rl3;
export const Cf3 = $$ai4;
export const Dii = $$iX5;
export const FUS = $$a76;
export const H18 = $$nu7;
export const Hky = $$ro8;
export const Iws = $$dn9;
export const JJT = $$A10;
export const MwW = $$ei11;
export const OPU = $$r$12;
export const PFX = $$f13;
export const Q90 = $$a314;
export const QSI = $$ef15;
export const Rlq = $$rf16;
export const T2p = $$k17;
export const TiQ = $$e_18;
export const Udn = $$og19;
export const Ug$ = $$l820;
export const VZy = $$aq21;
export const XG7 = $$aQ22;
export const XQb = $$tM23;
export const Y6t = $$tb24;
export const YR0 = $$tN25;
export const ZDV = $$a926;
export const ZyC = $$oj27;
export const _oP = $$rr28;
export const bUh = $$rn29;
export const c1h = $$l630;
export const cBy = $$x31;
export const dQD = $$iw32;
export const dbY = $$eK33;
export const hv8 = $$ib34;
export const ifX = $$rb35;
export const m20 = $$rw36;
export const oY$ = $$iR37;
export const pA9 = $$oc38;
export const pow = $$ov39;
export const s1r = $$oM40;
export const syG = $$iQ41;
export const ujB = $$eW42;
export const vBt = $$rk43;
export const zsR = $$tv44;