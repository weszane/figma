import s, { createContext, version, forwardRef, useContext, useRef, useState, useImperativeHandle, useLayoutEffect, useCallback, useMemo, createElement, Fragment, memo, useEffect, Component } from "react";
import { YR0, oY$, ujB, hv8, dQD, JJT, T2p, OPU, vBt, PFX, MwW, BEv, _oP, Hky, bUh, Rlq, ifX, AR_, m20, Aag, cBy, QSI, Udn, pA9, s1r, XQb, zsR, c1h, Ug$, Y6t, Cf3, Dii, dbY, TiQ, pow } from "../vendor/166087";
import { flushSync, createPortal } from "../vendor/944059";
var n = createContext({});
var l = (e, t, i, s) => {
  let r;
  let o;
  if (!e || e.componentFromFramework || t.isDestroyed()) return;
  let n = e.newAgStackInstance();
  let l = !1;
  n.then(e => {
    if (l) {
      t.destroyBean(e);
      return;
    }
    o = (r = e).getGui();
    i.appendChild(o);
    a(s, r);
  });
  return () => {
    l = !0;
    r && (o?.parentElement?.removeChild(o), t.destroyBean(r), s && a(s, void 0));
  };
};
var a = (e, t) => {
  e && (e instanceof Function ? e(t) : e.current = t);
};
var d = (...e) => e.filter(e => null != e && "" !== e).join(" ");
var h = class e {
  constructor(...e) {
    this.classesMap = {};
    e.forEach(e => {
      this.classesMap[e] = !0;
    });
  }
  setClass(t, i) {
    if (!!this.classesMap[t] == i) return this;
    let s = new e();
    s.classesMap = {
      ...this.classesMap
    };
    s.classesMap[t] = i;
    return s;
  }
  toString() {
    return Object.keys(this.classesMap).filter(e => this.classesMap[e]).join(" ");
  }
};
var u = e => "function" == typeof e && !(e.prototype && e.prototype.isReactComponent) || "object" == typeof e && e.$$typeof === ("function" == typeof Symbol && Symbol.$$for ? Symbol.$$for("react.memo") : 60115);
var c = version?.split(".")[0];
var g = "16" === c || "17" === c;
var p = !1;
var m = (e, t) => {
  g || !e || p ? t() : flushSync(t);
};
function f(e, t, i) {
  if (null == t || null == e) return t;
  if (e === t || 0 === t.length && 0 === e.length) return e;
  if (i || 0 === e.length && t.length > 0 || e.length > 0 && 0 === t.length) return t;
  let s = [];
  let r = [];
  let o = new Map();
  let n = new Map();
  for (let e = 0; e < t.length; e++) {
    let i = t[e];
    n.set(i.instanceId, i);
  }
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    o.set(i.instanceId, i);
    n.has(i.instanceId) && s.push(i);
  }
  for (let e = 0; e < t.length; e++) {
    let i = t[e];
    let s = i.instanceId;
    o.has(s) || r.push(i);
  }
  return s.length === e.length && 0 === r.length ? e : 0 === s.length && r.length === t.length ? t : 0 === s.length ? r : 0 === r.length ? s : [...s, ...r];
}
var C = forwardRef((e, t) => {
  let {
    registry,
    context
  } = useContext(n);
  let a = useRef(null);
  let d = useRef(null);
  let u = useRef(null);
  let c = useRef(null);
  let g = useRef(null);
  let p = useRef();
  let [m, f] = useState();
  let [w, v] = useState();
  let [b, y] = useState();
  let [S, R] = useState(() => new h());
  let [D, x] = useState(() => new h("ag-hidden"));
  let [P, E] = useState(() => new h("ag-hidden"));
  let [F, A] = useState(() => new h("ag-invisible"));
  useImperativeHandle(t, () => ({
    refresh: () => !1
  }));
  useLayoutEffect(() => l(m, context, d.current), [m]);
  let k = useCallback(t => {
    if (a.current = t, !t) {
      p.current = context.destroyBean(p.current);
      return;
    }
    let s = registry.createDynamicBean("groupCellRendererCtrl", !0);
    s && (p.current = context.createBean(s), p.current.init({
      setInnerRenderer: (e, t) => {
        f(e);
        y(t);
      },
      setChildCount: e => v(e),
      addOrRemoveCssClass: (e, t) => R(i => i.setClass(e, t)),
      setContractedDisplayed: e => E(t => t.setClass("ag-hidden", !e)),
      setExpandedDisplayed: e => x(t => t.setClass("ag-hidden", !e)),
      setCheckboxVisible: e => A(t => t.setClass("ag-invisible", !e))
    }, t, u.current, c.current, g.current, C, e));
  }, []);
  let M = useMemo(() => `ag-cell-wrapper ${S.toString()}`, [S]);
  let T = useMemo(() => `ag-group-expanded ${D.toString()}`, [D]);
  let I = useMemo(() => `ag-group-contracted ${P.toString()}`, [P]);
  let L = useMemo(() => `ag-group-checkbox ${F.toString()}`, [F]);
  let O = m && m.componentFromFramework;
  let G = O ? m.componentClass : void 0;
  let H = null == m && null != b;
  let N = YR0(b, !0);
  return createElement("span", {
    className: M,
    ref: k,
    ...(e.colDef ? {} : {
      role: p.current?.getCellAriaRole()
    })
  }, createElement("span", {
    className: T,
    ref: c
  }), createElement("span", {
    className: I,
    ref: g
  }), createElement("span", {
    className: L,
    ref: u
  }), createElement("span", {
    className: "ag-group-value",
    ref: d
  }, H && createElement(Fragment, null, N), O && createElement(G, {
    ...m.params
  })), createElement("span", {
    className: "ag-group-child-count"
  }, w));
});
var w = createContext({
  setMethods: () => {}
});
var v = memo(e => {
  let {
    initialProps,
    addUpdateCallback,
    CustomComponentClass,
    setMethods
  } = e;
  let [{
    key: n,
    ...l
  }, a] = useState(initialProps);
  useEffect(() => {
    addUpdateCallback(e => a(e));
  }, []);
  return createElement(w.Provider, {
    value: {
      setMethods
    }
  }, createElement(CustomComponentClass, {
    key: n,
    ...l
  }));
});
var b = 0;
function y() {
  return `agPortalKey_${++b}`;
}
var S = class {
  constructor(e, t, i, s) {
    this.portal = null;
    this.oldPortal = null;
    this.reactComponent = e;
    this.portalManager = t;
    this.componentType = i;
    this.suppressFallbackMethods = !!s;
    this.statelessComponent = this.isStateless(this.reactComponent);
    this.key = y();
    this.portalKey = y();
    this.instanceCreated = this.isStatelessComponent() ? oY$.resolve(!1) : new oY$(e => {
      this.resolveInstanceCreated = e;
    });
  }
  getGui() {
    return this.eParentElement;
  }
  getRootElement() {
    return this.eParentElement.firstChild;
  }
  destroy() {
    this.componentInstance && "function" == typeof this.componentInstance.destroy && this.componentInstance.destroy();
    let e = this.portal;
    e && this.portalManager.destroyPortal(e);
  }
  createParentElement(e) {
    let t = this.portalManager.getComponentWrappingElement();
    let i = document.createElement(t || "div");
    i.classList.add("ag-react-container");
    e.reactContainer = i;
    return i;
  }
  statelessComponentRendered() {
    return this.eParentElement.childElementCount > 0 || this.eParentElement.childNodes.length > 0;
  }
  getFrameworkComponentInstance() {
    return this.componentInstance;
  }
  isStatelessComponent() {
    return this.statelessComponent;
  }
  getReactComponentName() {
    return this.reactComponent.name;
  }
  getMemoType() {
    return this.hasSymbol() ? Symbol.$$for("react.memo") : 60115;
  }
  hasSymbol() {
    return "function" == typeof Symbol && Symbol.$$for;
  }
  isStateless(e) {
    return "function" == typeof e && !(e.prototype && e.prototype.isReactComponent) || "object" == typeof e && e.$$typeof === this.getMemoType();
  }
  hasMethod(e) {
    let t = this.getFrameworkComponentInstance();
    return !!t && null != t[e] || this.fallbackMethodAvailable(e);
  }
  callMethod(e, t) {
    let i = this.getFrameworkComponentInstance();
    if (this.isStatelessComponent()) return this.fallbackMethod(e, t && t[0] ? t[0] : {});
    if (!i) {
      setTimeout(() => this.callMethod(e, t));
      return;
    }
    let s = i[e];
    return s ? s.apply(i, t) : this.fallbackMethodAvailable(e) ? this.fallbackMethod(e, t && t[0] ? t[0] : {}) : void 0;
  }
  addMethod(e, t) {
    this[e] = t;
  }
  init(e) {
    this.eParentElement = this.createParentElement(e);
    this.createOrUpdatePortal(e);
    return new oY$(e => this.createReactComponent(e));
  }
  createOrUpdatePortal(e) {
    this.isStatelessComponent() || (this.ref = e => {
      this.componentInstance = e;
      this.resolveInstanceCreated?.(!0);
      this.resolveInstanceCreated = void 0;
    }, e.ref = this.ref);
    this.reactElement = this.createElement(this.reactComponent, {
      ...e,
      key: this.key
    });
    this.portal = createPortal(this.reactElement, this.eParentElement, this.portalKey);
  }
  createElement(e, t) {
    return createElement(e, t);
  }
  createReactComponent(e) {
    this.portalManager.mountReactPortal(this.portal, this, e);
  }
  rendered() {
    return this.isStatelessComponent() && this.statelessComponentRendered() || !!(!this.isStatelessComponent() && this.getFrameworkComponentInstance());
  }
  refreshComponent(e) {
    this.oldPortal = this.portal;
    this.createOrUpdatePortal(e);
    this.portalManager.updateReactPortal(this.oldPortal, this.portal);
  }
  fallbackMethod(e, t) {
    let i = this[`${e}Component`];
    if (!this.suppressFallbackMethods && i) return i.bind(this)(t);
  }
  fallbackMethodAvailable(e) {
    return !this.suppressFallbackMethods && !!this[`${e}Component`];
  }
};
function R(e, t, i) {
  e.forEach(e => {
    let s = t[e];
    s && (i[e] = s);
  });
}
var D = class extends S {
  constructor() {
    super(...arguments);
    this.awaitUpdateCallback = new oY$(e => {
      this.resolveUpdateCallback = e;
    });
    this.wrapperComponent = v;
  }
  init(e) {
    this.sourceParams = e;
    return super.init(this.getProps());
  }
  addMethod() {}
  getInstance() {
    return this.instanceCreated.then(() => this.componentInstance);
  }
  getFrameworkComponentInstance() {
    return this;
  }
  createElement(e, t) {
    return super.createElement(this.wrapperComponent, {
      initialProps: t,
      CustomComponentClass: e,
      setMethods: e => this.setMethods(e),
      addUpdateCallback: e => {
        this.updateCallback = () => (e(this.getProps()), new oY$(e => {
          setTimeout(() => {
            e();
          });
        }));
        this.resolveUpdateCallback();
      }
    });
  }
  setMethods(e) {
    this.providedMethods = e;
    R(this.getOptionalMethods(), this.providedMethods, this);
  }
  getOptionalMethods() {
    return [];
  }
  getProps() {
    return {
      ...this.sourceParams,
      key: this.key,
      ref: this.ref
    };
  }
  refreshProps() {
    return this.updateCallback ? this.updateCallback() : new oY$(e => this.awaitUpdateCallback.then(() => {
      this.updateCallback().then(() => e());
    }));
  }
};
var x = class extends D {
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
    return !0;
  }
};
var P = class extends D {
  constructor() {
    super(...arguments);
    this.date = null;
    this.onDateChange = e => this.updateDate(e);
  }
  getDate() {
    return this.date;
  }
  setDate(e) {
    this.date = e;
    this.refreshProps();
  }
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
  }
  getOptionalMethods() {
    return ["afterGuiAttached", "setInputPlaceholder", "setInputAriaLabel", "setDisabled"];
  }
  updateDate(e) {
    this.setDate(e);
    this.sourceParams.onDateChanged();
  }
  getProps() {
    let e = super.getProps();
    e.date = this.date;
    e.onDateChange = this.onDateChange;
    delete e.onDateChanged;
    return e;
  }
};
var E = class extends D {
  constructor() {
    super(...arguments);
    this.label = "";
    this.icon = null;
    this.shake = !1;
  }
  setIcon(e, t) {
    this.icon = e;
    this.shake = t;
    this.refreshProps();
  }
  setLabel(e) {
    this.label = e;
    this.refreshProps();
  }
  getProps() {
    let e = super.getProps();
    let {
      label,
      icon,
      shake
    } = this;
    e.label = label;
    e.icon = icon;
    e.shake = shake;
    return e;
  }
};
var F = class extends D {
  constructor() {
    super(...arguments);
    this.model = null;
    this.onModelChange = e => this.updateModel(e);
    this.onUiChange = () => this.sourceParams.filterModifiedCallback();
    this.expectingNewMethods = !0;
    this.hasBeenActive = !1;
    this.awaitSetMethodsCallback = new oY$(e => {
      this.resolveSetMethodsCallback = e;
    });
  }
  isFilterActive() {
    return null != this.model;
  }
  doesFilterPass(e) {
    return this.providedMethods.doesFilterPass(e);
  }
  getModel() {
    return this.model;
  }
  setModel(e) {
    this.expectingNewMethods = !0;
    this.model = e;
    this.hasBeenActive || (this.hasBeenActive = this.isFilterActive());
    return this.refreshProps();
  }
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
    return !0;
  }
  afterGuiAttached(e) {
    let t = this.providedMethods;
    t ? t.afterGuiAttached?.(e) : this.awaitSetMethodsCallback.then(() => this.providedMethods?.afterGuiAttached?.(e));
  }
  getOptionalMethods() {
    return ["afterGuiAttached", "afterGuiDetached", "onNewRowsLoaded", "getModelAsString", "onAnyFilterChanged"];
  }
  setMethods(e) {
    !1 === this.expectingNewMethods && this.hasBeenActive && this.providedMethods?.doesFilterPass !== e?.doesFilterPass && setTimeout(() => {
      this.sourceParams.filterChangedCallback();
    });
    this.expectingNewMethods = !1;
    super.setMethods(e);
    this.resolveSetMethodsCallback();
  }
  updateModel(e) {
    this.setModel(e).then(() => this.sourceParams.filterChangedCallback());
  }
  getProps() {
    let e = super.getProps();
    e.model = this.model;
    e.onModelChange = this.onModelChange;
    e.onUiChange = this.onUiChange;
    delete e.filterChangedCallback;
    delete e.filterModifiedCallback;
    return e;
  }
};
function A(e, t) {
  e.parentFilterInstance(i => {
    (i.setModel(t) || oY$.resolve()).then(() => {
      e.filterParams.filterChangedCallback();
    });
  });
}
var k = class {
  constructor(e, t) {
    this.floatingFilterParams = e;
    this.refreshProps = t;
    this.model = null;
    this.onModelChange = e => this.updateModel(e);
  }
  getProps() {
    return {
      ...this.floatingFilterParams,
      model: this.model,
      onModelChange: this.onModelChange
    };
  }
  onParentModelChanged(e) {
    this.model = e;
    this.refreshProps();
  }
  refresh(e) {
    this.floatingFilterParams = e;
    this.refreshProps();
  }
  setMethods(e) {
    R(this.getOptionalMethods(), e, this);
  }
  getOptionalMethods() {
    return ["afterGuiAttached"];
  }
  updateModel(e) {
    this.model = e;
    this.refreshProps();
    A(this.floatingFilterParams, e);
  }
};
var M = class extends D {
  constructor() {
    super(...arguments);
    this.model = null;
    this.onModelChange = e => this.updateModel(e);
  }
  onParentModelChanged(e) {
    this.model = e;
    this.refreshProps();
  }
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
  }
  getOptionalMethods() {
    return ["afterGuiAttached"];
  }
  updateModel(e) {
    this.model = e;
    this.refreshProps();
    A(this.sourceParams, e);
  }
  getProps() {
    let e = super.getProps();
    e.model = this.model;
    e.onModelChange = this.onModelChange;
    return e;
  }
};
var T = class extends D {
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
    return !0;
  }
};
var I = class extends D {
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
  }
};
var L = class extends D {
  constructor() {
    super(...arguments);
    this.active = !1;
    this.expanded = !1;
    this.onActiveChange = e => this.updateActive(e);
  }
  setActive(e) {
    this.awaitSetActive(e);
  }
  setExpanded(e) {
    this.expanded = e;
    this.refreshProps();
  }
  getOptionalMethods() {
    return ["select", "configureDefaults"];
  }
  awaitSetActive(e) {
    this.active = e;
    return this.refreshProps();
  }
  updateActive(e) {
    let t = this.awaitSetActive(e);
    e && t.then(() => this.sourceParams.onItemActivated());
  }
  getProps() {
    let e = super.getProps();
    e.active = this.active;
    e.expanded = this.expanded;
    e.onActiveChange = this.onActiveChange;
    delete e.onItemActivated;
    return e;
  }
};
var O = class extends D {
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
  }
};
var G = class extends D {
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
    return !0;
  }
};
var H = class extends D {
  constructor() {
    super(...arguments);
    this.onStateChange = e => this.updateState(e);
  }
  refresh(e) {
    this.sourceParams = e;
    this.refreshProps();
    return !0;
  }
  getState() {
    return this.state;
  }
  updateState(e) {
    this.state = e;
    this.refreshProps();
    this.sourceParams.onStateUpdated();
  }
  getProps() {
    let e = super.getProps();
    e.state = this.state;
    e.onStateChange = this.onStateChange;
    return e;
  }
};
function N() {
  ujB(231);
}
var B = class {
  constructor(e, t, i) {
    this.destroyed = !1;
    this.portals = [];
    this.hasPendingPortalUpdate = !1;
    this.wrappingElement = t || "div";
    this.refresher = e;
    this.maxComponentCreationTimeMs = i || 1e3;
  }
  getPortals() {
    return this.portals;
  }
  destroy() {
    this.destroyed = !0;
  }
  destroyPortal(e) {
    this.portals = this.portals.filter(t => t !== e);
    this.batchUpdate();
  }
  getComponentWrappingElement() {
    return this.wrappingElement;
  }
  mountReactPortal(e, t, i) {
    this.portals = [...this.portals, e];
    this.waitForInstance(t, i);
    this.batchUpdate();
  }
  updateReactPortal(e, t) {
    this.portals[this.portals.indexOf(e)] = t;
    this.batchUpdate();
  }
  batchUpdate() {
    this.hasPendingPortalUpdate || (setTimeout(() => {
      this.destroyed || (this.refresher(), this.hasPendingPortalUpdate = !1);
    }), this.hasPendingPortalUpdate = !0);
  }
  waitForInstance(e, t, i = Date.now()) {
    if (this.destroyed) {
      t(null);
      return;
    }
    if (e.rendered()) t(e);else {
      if (Date.now() - i >= this.maxComponentCreationTimeMs && !this.hasPendingPortalUpdate) return;
      window.setTimeout(() => {
        this.waitForInstance(e, t, i);
      });
    }
  }
};
var V = memo(({
  ctrl: e
}) => {
  let t = e.isAlive();
  let {
    context
  } = useContext(n);
  let o = t ? e.column.getColId() : void 0;
  let [a, d] = useState();
  let [h, c] = useState();
  let g = useRef();
  let p = useRef(null);
  let m = useRef(null);
  let f = useRef(null);
  let C = useRef();
  let w = useRef();
  t && !w.current && (w.current = new hv8(() => p.current));
  let v = useCallback(s => {
    if (p.current = s, g.current = s ? context.createBean(new dQD()) : context.destroyBean(g.current), !s || !t) return;
    e.setComp({
      setWidth: e => {
        p.current && (p.current.style.width = e);
      },
      addOrRemoveCssClass: (e, t) => w.current.addOrRemoveCssClass(e, t),
      setUserStyles: e => c(e),
      setAriaSort: e => {
        p.current && (e ? JJT(p.current, e) : T2p(p.current));
      },
      setUserCompDetails: e => d(e),
      getUserCompInstance: () => C.current || void 0
    }, s, m.current, f.current, g.current);
    let o = e.getSelectAllGui();
    o && (m.current?.insertAdjacentElement("afterend", o), g.current.addDestroyFunc(() => o.remove()));
  }, []);
  useLayoutEffect(() => l(a, context, f.current, C), [a]);
  useEffect(() => {
    e.setDragSource(p.current);
  }, [a]);
  let b = useMemo(() => !!(a?.componentFromFramework && u(a.componentClass)), [a]);
  let y = a && a.componentFromFramework;
  let S = a && a.componentClass;
  return createElement("div", {
    ref: v,
    style: h,
    className: "ag-header-cell",
    "col-id": o,
    role: "columnheader"
  }, createElement("div", {
    ref: m,
    className: "ag-header-cell-resize",
    role: "presentation"
  }), createElement("div", {
    ref: f,
    className: "ag-header-cell-comp-wrapper",
    role: "presentation"
  }, y && b && createElement(S, {
    ...a.params
  }), y && !b && createElement(S, {
    ...a.params,
    ref: C
  })));
});
var W = memo(({
  ctrl: e
}) => {
  let {
    context,
    gos
  } = useContext(n);
  let [o, a] = useState();
  let [d, c] = useState(() => new h("ag-header-cell", "ag-floating-filter"));
  let [g, p] = useState(() => new h());
  let [m, f] = useState(() => new h("ag-floating-filter-button", "ag-hidden"));
  let [C, v] = useState("false");
  let [b, y] = useState();
  let [, S] = useState(1);
  let R = useRef();
  let D = useRef(null);
  let x = useRef(null);
  let P = useRef(null);
  let E = useRef(null);
  let F = useRef();
  let A = useRef();
  let M = e => {
    null != e && F.current && F.current(e);
  };
  let T = useCallback(i => {
    D.current = i;
    R.current = i ? context.createBean(new dQD()) : context.destroyBean(R.current);
    i && (A.current = new oY$(e => {
      F.current = e;
    }), e.setComp({
      addOrRemoveCssClass: (e, t) => c(i => i.setClass(e, t)),
      setUserStyles: e => a(e),
      addOrRemoveBodyCssClass: (e, t) => p(i => i.setClass(e, t)),
      setButtonWrapperDisplayed: e => {
        f(t => t.setClass("ag-hidden", !e));
        v(e ? "false" : "true");
      },
      setWidth: e => {
        D.current && (D.current.style.width = e);
      },
      setCompDetails: e => y(e),
      getFloatingFilterComp: () => A.current ? A.current : null,
      setMenuIcon: e => E.current?.appendChild(e)
    }, i, E.current, x.current, R.current));
  }, []);
  useLayoutEffect(() => l(b, context, x.current, M), [b]);
  let I = useMemo(() => d.toString(), [d]);
  let L = useMemo(() => g.toString(), [g]);
  let O = useMemo(() => m.toString(), [m]);
  let G = useMemo(() => !!(b && b.componentFromFramework && u(b.componentClass)), [b]);
  let H = useMemo(() => gos.get("reactiveCustomComponents"), []);
  let B = useMemo(() => {
    if (b) {
      if (H) {
        let e = new k(b.params, () => S(e => e + 1));
        M(e);
        return e;
      }
      b.componentFromFramework && N();
    }
  }, [b]);
  let V = B?.getProps();
  let W = b && b.componentFromFramework;
  let z = b && b.componentClass;
  return createElement("div", {
    ref: T,
    style: o,
    className: I,
    role: "gridcell"
  }, createElement("div", {
    ref: x,
    className: L,
    role: "presentation"
  }, W && !H && createElement(z, {
    ...b.params,
    ref: G ? () => {} : M
  }), W && H && createElement(w.Provider, {
    value: {
      setMethods: e => B.setMethods(e)
    }
  }, createElement(z, {
    ...V
  }))), createElement("div", {
    ref: P,
    "aria-hidden": C,
    className: O,
    role: "presentation"
  }, createElement("button", {
    ref: E,
    type: "button",
    className: "ag-button ag-floating-filter-button-button",
    tabIndex: -1
  })));
});
var z = memo(({
  ctrl: e
}) => {
  let {
    context
  } = useContext(n);
  let [i, o] = useState();
  let [a, d] = useState(() => new h());
  let [c, g] = useState(() => new h());
  let [p, m] = useState("false");
  let [f, C] = useState();
  let [w, v] = useState();
  let b = useMemo(() => e.column.getUniqueId(), []);
  let y = useRef();
  let S = useRef(null);
  let R = useRef(null);
  let D = useRef(null);
  let x = useRef();
  let P = useCallback(i => {
    S.current = i;
    y.current = i ? context.createBean(new dQD()) : context.destroyBean(y.current);
    i && e.setComp({
      setWidth: e => {
        S.current && (S.current.style.width = e);
      },
      addOrRemoveCssClass: (e, t) => d(i => i.setClass(e, t)),
      setUserStyles: e => o(e),
      setHeaderWrapperHidden: e => {
        let t = D.current;
        t && (e ? t.style.setProperty("display", "none") : t.style.removeProperty("display"));
      },
      setHeaderWrapperMaxHeight: e => {
        let t = D.current;
        t && (null != e ? t.style.setProperty("max-height", `${e}px`) : t.style.removeProperty("max-height"), t.classList.toggle("ag-header-cell-comp-wrapper-limited-height", null != e));
      },
      setUserCompDetails: e => v(e),
      setResizableDisplayed: e => {
        g(t => t.setClass("ag-hidden", !e));
        m(e ? "false" : "true");
      },
      setAriaExpanded: e => C(e),
      getUserCompInstance: () => x.current || void 0
    }, i, R.current, D.current, y.current);
  }, []);
  useLayoutEffect(() => l(w, context, D.current), [w]);
  useEffect(() => {
    S.current && e.setDragSource(S.current);
  }, [w]);
  let E = useMemo(() => !!(w?.componentFromFramework && u(w.componentClass)), [w]);
  let F = useMemo(() => "ag-header-group-cell " + a.toString(), [a]);
  let A = useMemo(() => "ag-header-cell-resize " + c.toString(), [c]);
  let k = w && w.componentFromFramework;
  let M = w && w.componentClass;
  return createElement("div", {
    ref: P,
    style: i,
    className: F,
    "col-id": b,
    role: "columnheader",
    "aria-expanded": f
  }, createElement("div", {
    ref: D,
    className: "ag-header-cell-comp-wrapper",
    role: "presentation"
  }, k && E && createElement(M, {
    ...w.params
  }), k && !E && createElement(M, {
    ...w.params,
    ref: x
  })), createElement("div", {
    ref: R,
    "aria-hidden": p,
    className: A
  }));
});
var U = memo(({
  ctrl: e
}) => {
  let {
    context
  } = useContext(n);
  let {
    topOffset,
    rowHeight
  } = useMemo(() => e.getTopAndHeight(), []);
  let l = e.getAriaRowIndex();
  let a = e.headerRowClass;
  let [d, h] = useState(() => rowHeight + "px");
  let [u, c] = useState(() => topOffset + "px");
  let g = useRef(null);
  let p = useRef(null);
  let [C, w] = useState(() => e.getHeaderCtrls());
  let v = useRef();
  let b = useRef(null);
  let y = useCallback(i => {
    b.current = i;
    v.current = i ? context.createBean(new dQD()) : context.destroyBean(v.current);
    i && e.setComp({
      setHeight: e => h(e),
      setTop: e => c(e),
      setHeaderCtrls: (e, t, i) => {
        p.current = g.current;
        g.current = e;
        let s = f(p.current, e, t);
        s !== p.current && m(i, () => w(s));
      },
      setWidth: e => {
        b.current && (b.current.style.width = e);
      }
    }, v.current, !1);
  }, []);
  let S = useMemo(() => ({
    height: d,
    top: u
  }), [d, u]);
  let R = useCallback(t => {
    switch (e.type) {
      case "group":
        return createElement(z, {
          ctrl: t,
          key: t.instanceId
        });
      case "filter":
        return createElement(W, {
          ctrl: t,
          key: t.instanceId
        });
      default:
        return createElement(V, {
          ctrl: t,
          key: t.instanceId
        });
    }
  }, []);
  return createElement("div", {
    ref: y,
    className: a,
    role: "row",
    style: S,
    "aria-rowindex": l
  }, C.map(R));
});
var $ = memo(({
  pinned: e
}) => {
  let [t, i] = useState(!0);
  let [o, l] = useState([]);
  let {
    context
  } = useContext(n);
  let d = useRef(null);
  let h = useRef(null);
  let u = useRef();
  let c = "left" === e;
  let g = "right" === e;
  let p = useCallback(t => {
    d.current = t;
    u.current = t ? context.createBean(new OPU(e)) : context.destroyBean(u.current);
    t && u.current.setComp({
      setDisplayed: i,
      setCtrls: e => l(e),
      setCenterWidth: e => {
        h.current && (h.current.style.width = e);
      },
      setViewportScrollLeft: e => {
        d.current && (d.current.scrollLeft = e);
      },
      setPinnedContainerWidth: e => {
        d.current && (d.current.style.width = e, d.current.style.minWidth = e, d.current.style.maxWidth = e);
      }
    }, d.current);
  }, []);
  let m = t ? "" : "ag-hidden";
  let f = () => o.map(e => createElement(U, {
    ctrl: e,
    key: e.instanceId
  }));
  return createElement(Fragment, null, c && createElement("div", {
    ref: p,
    className: "ag-pinned-left-header " + m,
    "aria-hidden": !t,
    role: "rowgroup"
  }, f()), g && createElement("div", {
    ref: p,
    className: "ag-pinned-right-header " + m,
    "aria-hidden": !t,
    role: "rowgroup"
  }, f()), !c && !g && createElement("div", {
    ref: p,
    className: "ag-header-viewport " + m,
    role: "presentation"
  }, createElement("div", {
    ref: h,
    className: "ag-header-container",
    role: "rowgroup"
  }, f())));
});
var K = memo(() => {
  let [e, t] = useState(() => new h());
  let [i, o] = useState();
  let {
    context
  } = useContext(n);
  let a = useRef(null);
  let d = useRef();
  let u = useCallback(e => {
    a.current = e;
    d.current = e ? context.createBean(new vBt()) : context.destroyBean(d.current);
    e && d.current.setComp({
      addOrRemoveCssClass: (e, i) => t(t => t.setClass(e, i)),
      setHeightAndMinHeight: e => o(e)
    }, e, e);
  }, []);
  let c = useMemo(() => "ag-header " + e.toString(), [e]);
  let g = useMemo(() => ({
    height: i,
    minHeight: i
  }), [i]);
  return createElement("div", {
    ref: u,
    className: c,
    style: g,
    role: "presentation"
  }, createElement($, {
    pinned: "left"
  }), createElement($, {
    pinned: null
  }), createElement($, {
    pinned: "right"
  }));
});
var _ = (e, t) => {
  useEffect(() => {
    let i = t.current;
    if (i) {
      let t = i.parentElement;
      if (t) {
        let s = document.createComment(e);
        t.insertBefore(s, i);
        return () => {
          t.removeChild(s);
        };
      }
    }
  }, [e]);
};
var j = class {
  constructor(e, t) {
    this.cellEditorParams = e;
    this.refreshProps = t;
    this.instanceCreated = new oY$(e => {
      this.resolveInstanceCreated = e;
    });
    this.onValueChange = e => this.updateValue(e);
    this.value = e.value;
  }
  getProps() {
    return {
      ...this.cellEditorParams,
      initialValue: this.cellEditorParams.value,
      value: this.value,
      onValueChange: this.onValueChange
    };
  }
  getValue() {
    return this.value;
  }
  refresh(e) {
    this.cellEditorParams = e;
    this.refreshProps();
  }
  setMethods(e) {
    R(this.getOptionalMethods(), e, this);
  }
  getInstance() {
    return this.instanceCreated.then(() => this.componentInstance);
  }
  setRef(e) {
    this.componentInstance = e;
    this.resolveInstanceCreated?.();
    this.resolveInstanceCreated = void 0;
  }
  getOptionalMethods() {
    return ["isCancelBeforeStart", "isCancelAfterEnd", "focusIn", "focusOut", "afterGuiAttached"];
  }
  updateValue(e) {
    this.value = e;
    this.refreshProps();
  }
};
var q = e => {
  let t = useRef(e);
  let i = useRef();
  let r = useRef(!1);
  let o = useRef(!1);
  let [, n] = useState(0);
  r.current && (o.current = !0);
  useEffect(() => (r.current || (i.current = t.current(), r.current = !0), n(e => e + 1), () => {
    o.current && i.current?.();
  }), []);
};
var Y = memo(e => {
  let [t, i] = useState();
  let {
    context,
    popupSvc,
    localeSvc,
    gos,
    editSvc
  } = useContext(n);
  q(() => {
    let {
      editDetails,
      cellCtrl,
      eParentCell
    } = e;
    let {
      compDetails
    } = t;
    let c = gos.get("stopEditingWhenCellsLoseFocus");
    let g = context.createBean(editSvc.createPopupEditorWrapper(compDetails.params));
    let p = g.getGui();
    if (e.jsChildComp) {
      let t = e.jsChildComp.getGui();
      t && p.appendChild(t);
    }
    let {
      column,
      rowNode
    } = s;
    let C = {
      column,
      rowNode,
      type: "popupCellEditor",
      eventSource: eParentCell,
      ePopup: p,
      position: editDetails.popupPosition,
      keepWithinBounds: !0
    };
    let w = popupSvc?.positionPopupByComponent.bind(popupSvc, C);
    let v = PFX(localeSvc);
    let b = popupSvc?.addPopup({
      modal: c,
      eChild: p,
      closeOnEsc: !0,
      closedCallback: () => {
        cellCtrl.onPopupEditorClosed();
      },
      anchorToElement: eParentCell,
      positionCallback: w,
      ariaLabel: v("ariaLabelCellEditor", "Cell Editor")
    });
    let y = b ? b.hideFunc : void 0;
    i(g);
    e.jsChildComp?.afterGuiAttached?.();
    return () => {
      y?.();
      context.destroyBean(g);
    };
  });
  return createElement(Fragment, null, t && e.wrappedContent && createPortal(e.wrappedContent, t.getGui()));
});
var J = (e, t, i, r, o, l) => {
  let {
    context
  } = useContext(n);
  let d = useCallback(() => {
    let e = o.current;
    if (!e) return;
    let t = e.getGui();
    t && t.parentElement && t.parentElement.removeChild(t);
    context.destroyBean(e);
    o.current = void 0;
  }, []);
  useEffect(() => {
    let s = null != e;
    let r = e?.compDetails && !e.compDetails.componentFromFramework;
    let n = t && null == i;
    if (!(s && r && !n)) {
      d();
      return;
    }
    let a = e.compDetails;
    if (o.current) {
      let t = o.current;
      let i = !!(null != t.refresh && !1 == e.force) && t.refresh(a.params);
      if (!0 === i || void 0 === i) return;
      d();
    }
    a.newAgStackInstance().then(e => {
      if (!e) return;
      let s = e.getGui();
      s && ((t ? i : l.current).appendChild(s), o.current = e);
    });
  }, [e, t, r]);
  useEffect(() => d, []);
};
var Z = (e, t, i) => {
  let {
    compProxy
  } = e;
  i(compProxy);
  let o = compProxy.getProps();
  let n = u(t);
  return createElement(w.Provider, {
    value: {
      setMethods: e => compProxy.setMethods(e)
    }
  }, n ? createElement(t, {
    ...o
  }) : createElement(t, {
    ...o,
    ref: e => compProxy.setRef(e)
  }));
};
var X = (e, t, i) => {
  let r = e.compProxy;
  return createElement(Fragment, null, r ? Z(e, t, i) : createElement(t, {
    ...e.compDetails.params,
    ref: i
  }));
};
var Q = (e, t, i, r, o) => {
  let n = e.compDetails;
  let l = n.componentClass;
  let a = n.componentFromFramework && !e.popup;
  let d = n.componentFromFramework && e.popup;
  let h = !n.componentFromFramework && e.popup;
  return createElement(Fragment, null, a && X(e, l, t), d && createElement(Y, {
    editDetails: e,
    cellCtrl: r,
    eParentCell: i,
    wrappedContent: X(e, l, t)
  }), h && o && createElement(Y, {
    editDetails: e,
    cellCtrl: r,
    eParentCell: i,
    jsChildComp: o
  }));
};
var ee = (e, t, i, r, o, n, l) => {
  let {
    compDetails,
    value
  } = e;
  let h = !compDetails;
  let u = compDetails && compDetails.componentFromFramework;
  let c = compDetails && compDetails.componentClass;
  let g = value?.toString ? value.toString() : value;
  let p = () => createElement(Fragment, null, h && createElement(Fragment, null, g), u && !n && createElement(c, {
    ...compDetails.params,
    key: t,
    ref: r
  }), u && n && createElement(c, {
    ...compDetails.params,
    key: t
  }));
  return createElement(Fragment, null, o ? createElement("span", {
    role: "presentation",
    id: `cell-${i}`,
    className: "ag-cell-value",
    ref: l
  }, p()) : p());
};
var et = memo(({
  cellCtrl: e,
  printLayout: t,
  editingRow: i
}) => {
  let {
    context
  } = useContext(n);
  let {
    colIdSanitised,
    instanceId
  } = e;
  let d = useRef();
  let [h, c] = useState(() => e.isCellRenderer() ? void 0 : {
    compDetails: void 0,
    value: e.getValueToDisplay(),
    force: !1
  });
  let [g, p] = useState();
  let [m, f] = useState(1);
  let [C, w] = useState();
  let [v, b] = useState(!1);
  let [y, S] = useState(!1);
  let [R, D] = useState(!1);
  let [x, P] = useState();
  let E = useMemo(() => e.isForceWrapper(), [e]);
  let F = useMemo(() => e.getCellAriaRole(), [e]);
  let A = useRef(null);
  let k = useRef(null);
  let M = useRef(null);
  let T = useRef();
  let I = useRef();
  let L = useRef();
  let O = useRef([]);
  let G = useRef();
  let [H, B] = useState(0);
  let V = useCallback(e => {
    G.current = e;
    B(e => e + 1);
  }, []);
  let W = null != h && (v || R || y);
  let z = E || W;
  let U = useCallback(t => {
    if (I.current = t, t) {
      let i = t.isCancelBeforeStart && t.isCancelBeforeStart();
      setTimeout(() => {
        i ? (e.stopEditing(!0), e.focusCell(!0)) : e.cellEditorAttached();
      });
    }
  }, [e]);
  let $ = useRef();
  $.current || ($.current = new hv8(() => A.current));
  J(h, z, G.current, H, T, A);
  let K = useRef();
  useLayoutEffect(() => {
    let e = K.current;
    if (K.current = h, null == e || null == e.compDetails || null == h || null == h.compDetails) return;
    let t = e.compDetails;
    let i = h.compDetails;
    t.componentClass == i.componentClass && M.current?.refresh != null && !0 != M.current.refresh(i.params) && f(e => e + 1);
  }, [h]);
  useLayoutEffect(() => {
    if (!(g && !g.compDetails.componentFromFramework)) return;
    let e = g.compDetails;
    let t = !0 === g.popup;
    let i = e.newAgStackInstance();
    i.then(e => {
      if (!e) return;
      let i = e.getGui();
      if (U(e), !t) {
        let t = (E ? L : A).current;
        t?.appendChild(i);
        e.afterGuiAttached && e.afterGuiAttached();
      }
      P(e);
    });
    return () => {
      i.then(e => {
        let t = e.getGui();
        context.destroyBean(e);
        U(void 0);
        P(void 0);
        t?.parentElement?.removeChild(t);
      });
    };
  }, [g]);
  let _ = useCallback(t => {
    if (L.current = t, !t) {
      O.current.forEach(e => e());
      O.current = [];
      return;
    }
    let i = e => {
      if (e) {
        let i = e.getGui();
        t.insertAdjacentElement("afterbegin", i);
        O.current.push(() => {
          context.destroyBean(e);
          MwW(i);
        });
      }
      return e;
    };
    v && i(e.createSelectionCheckbox());
    R && i(e.createDndSource());
    y && i(e.createRowDragComp());
  }, [e, context, R, y, v]);
  let q = useCallback(() => {
    let s = !e.isCellSpanning() || k.current;
    let n = A.current;
    if (d.current = n ? context.createBean(new dQD()) : context.destroyBean(d.current), !n || !s || !e) return;
    let l = L.current || void 0;
    e.setComp({
      addOrRemoveCssClass: (e, t) => $.current.addOrRemoveCssClass(e, t),
      setUserStyles: e => w(e),
      getFocusableElement: () => A.current,
      setIncludeSelection: e => b(e),
      setIncludeRowDrag: e => S(e),
      setIncludeDndSource: e => D(e),
      getCellEditor: () => I.current || null,
      getCellRenderer: () => M.current ?? T.current,
      getParentOfValue: () => G.current ?? L.current ?? A.current,
      setRenderDetails: (e, t, i) => {
        c(s => s?.compDetails !== e || s?.value !== t || s?.force !== i ? {
          value: t,
          compDetails: e,
          force: i
        } : s);
      },
      setEditDetails: (e, t, i, s) => {
        if (e) {
          let r;
          s ? r = new j(e.params, () => f(e => e + 1)) : e.componentFromFramework && N();
          p({
            compDetails: e,
            popup: t,
            popupPosition: i,
            compProxy: r
          });
          t || c(void 0);
        } else p(e => {
          e?.compProxy && (I.current = void 0);
        });
      }
    }, n, k.current ?? void 0, l, t, i, d.current);
  }, []);
  let Y = useCallback(e => {
    A.current = e;
    q();
  }, []);
  let Z = useCallback(e => {
    k.current = e;
    q();
  }, []);
  let X = useMemo(() => !!(h?.compDetails?.componentFromFramework && u(h.compDetails.componentClass)), [h]);
  useLayoutEffect(() => {
    A.current && ($.current.addOrRemoveCssClass("ag-cell-value", !z), $.current.addOrRemoveCssClass("ag-cell-inline-editing", !!g && !g.popup), $.current.addOrRemoveCssClass("ag-cell-popup-editing", !!g && !!g.popup), $.current.addOrRemoveCssClass("ag-cell-not-inline-editing", !g || !!g.popup), e.setInlineEditingCss(), e.shouldRestoreFocus() && !e.editing && A.current.focus({
      preventScroll: !0
    }));
  });
  let et = () => createElement(Fragment, null, null != h && ee(h, m, instanceId, M, z, X, V), null != g && Q(g, U, A.current, e, x));
  let ei = useCallback(() => e.onFocusOut(), []);
  let es = () => createElement("div", {
    ref: Y,
    style: C,
    role: F,
    "col-id": colIdSanitised,
    onBlur: ei
  }, z ? createElement("div", {
    className: "ag-cell-wrapper",
    role: "presentation",
    ref: _
  }, et()) : et());
  return e.isCellSpanning() ? createElement("div", {
    ref: Z,
    className: "ag-spanned-cell-wrapper",
    role: "presentation"
  }, es()) : es();
});
var ei = memo(({
  rowCtrl: e,
  containerType: t
}) => {
  let {
    context,
    gos
  } = useContext(n);
  let a = useRef();
  let d = useRef(e.getDomOrder());
  let h = e.isFullWidth();
  let c = e.rowNode.displayed;
  let [g, p] = useState(() => c ? e.rowNode.getRowIndexString() : null);
  let [C, w] = useState(() => e.rowId);
  let [v, b] = useState(() => e.businessKey);
  let [y, S] = useState(() => e.rowStyles);
  let R = useRef(null);
  let D = useRef(null);
  let [x, P] = useState(() => null);
  let [E, F] = useState();
  let [A, k] = useState(() => c ? e.getInitialRowTop(t) : void 0);
  let [M, T] = useState(() => c ? e.getInitialTransform(t) : void 0);
  let I = useRef(null);
  let L = useRef();
  let O = useRef(!1);
  let [G, H] = useState(0);
  useEffect(() => {
    if (O.current || !E || G > 10) return;
    let t = I.current?.firstChild;
    t ? (e.setupDetailRowAutoHeight(t), O.current = !0) : H(e => e + 1);
  }, [E, G]);
  let N = useRef();
  N.current || (N.current = new hv8(() => I.current));
  let B = useCallback(s => {
    if (I.current = s, a.current = s ? context.createBean(new dQD()) : context.destroyBean(a.current), !s) {
      e.unsetComp(t);
      return;
    }
    e.isAlive() && e.setComp({
      setTop: k,
      setTransform: T,
      addOrRemoveCssClass: (e, t) => N.current.addOrRemoveCssClass(e, t),
      setDomOrder: e => d.current = e,
      setRowIndex: p,
      setRowId: w,
      setRowBusinessKey: b,
      setUserStyles: S,
      setCellCtrls: (e, t) => {
        D.current = R.current;
        R.current = e;
        let i = f(D.current, e, d.current);
        i !== D.current && m(t, () => P(i));
      },
      showFullWidth: e => F(e),
      getFullWidthCellRenderer: () => L.current,
      refreshFullWidth: e => $.current ? (F(t => ({
        ...t,
        params: e()
      })), !0) : !!L.current && !!L.current.refresh && L.current.refresh(e())
    }, s, t, a.current);
  }, []);
  useLayoutEffect(() => l(E, context, I.current, L), [E]);
  let V = useMemo(() => {
    let e = {
      top: A,
      transform: M
    };
    Object.assign(e, y);
    return e;
  }, [A, M, y]);
  let W = h && E?.componentFromFramework;
  let z = !h && null != x;
  let U = useMemo(() => !!(E?.componentFromFramework && u(E.componentClass)), [E]);
  let $ = useRef(!1);
  useEffect(() => {
    $.current = U && !!E && !!gos.get("reactiveCustomComponents");
  }, [U, E]);
  return createElement("div", {
    ref: B,
    role: "row",
    style: V,
    "row-index": g,
    "row-id": C,
    "row-business-key": v
  }, z && x?.map(t => createElement(et, {
    cellCtrl: t,
    editingRow: e.editing,
    printLayout: e.printLayout,
    key: t.instanceId
  })), W && (() => {
    let e = E.componentClass;
    return createElement(Fragment, null, U ? createElement(e, {
      ...E.params
    }) : createElement(e, {
      ...E.params,
      ref: L
    }));
  })());
});
var es = memo(({
  name: e
}) => {
  let {
    context,
    gos
  } = useContext(n);
  let o = useMemo(() => BEv(e), [e]);
  let l = useRef(null);
  let a = useRef(null);
  let h = useRef(null);
  let u = useRef([]);
  let c = useRef([]);
  let [g, p] = useState(() => []);
  let C = !!gos.get("enableCellSpan") && !!o.getSpannedRowCtrls;
  let w = useRef([]);
  let v = useRef([]);
  let [b, y] = useState(() => []);
  let S = useRef(!1);
  let R = useRef();
  let D = useMemo(() => d("ag-viewport", _oP(e)), [e]);
  let x = useMemo(() => d(Hky(e)), [e]);
  let P = useMemo(() => d("ag-spanning-container", bUh(e)), [e]);
  let E = "center" === o.type || C;
  _(" AG Row Container " + e + " ", E ? l : a);
  let F = useCallback(() => {
    let e = !E || null != l.current;
    let t = null != a.current;
    let i = !C || null != h.current;
    return e && t && i;
  }, []);
  let A = useCallback(() => null == l.current && null == a.current && null == h.current, []);
  let k = useCallback(() => {
    if (A() && (R.current = context.destroyBean(R.current)), F()) {
      let i = e => {
        let t = f(c.current, u.current, S.current);
        t !== c.current && (c.current = t, m(e, () => p(t)));
      };
      let s = e => {
        let t = f(v.current, w.current, S.current);
        t !== v.current && (v.current = t, m(e, () => y(t)));
      };
      R.current = context.createBean(new Rlq(e));
      R.current.setComp({
        setHorizontalScroll: e => {
          l.current && (l.current.scrollLeft = e);
        },
        setViewportHeight: e => {
          l.current && (l.current.style.height = e);
        },
        setRowCtrls: ({
          rowCtrls: e,
          useFlushSync: t
        }) => {
          let s = !!t && u.current.length > 0 && e.length > 0;
          u.current = e;
          i(s);
        },
        setSpannedRowCtrls: (e, t) => {
          let i = !!t && w.current.length > 0 && e.length > 0;
          w.current = e;
          s(i);
        },
        setDomOrder: e => {
          S.current != e && (S.current = e, i(!1));
        },
        setContainerWidth: e => {
          a.current && (a.current.style.width = e);
        },
        setOffsetTop: e => {
          a.current && (a.current.style.transform = `translateY(${e})`);
        }
      }, a.current, h.current ?? void 0, l.current);
    }
  }, [F, A]);
  let M = useCallback(e => {
    a.current = e;
    k();
  }, [k]);
  let T = useCallback(e => {
    h.current = e;
    k();
  }, [k]);
  let I = useCallback(e => {
    l.current = e;
    k();
  }, [k]);
  let L = () => createElement("div", {
    className: x,
    ref: M,
    role: "rowgroup"
  }, g.map(e => createElement(ei, {
    rowCtrl: e,
    containerType: o.type,
    key: e.instanceId
  })));
  return E ? createElement("div", {
    className: D,
    ref: I,
    role: "presentation"
  }, L(), C && createElement("div", {
    className: P,
    ref: T,
    role: "rowgroup"
  }, b.map(e => createElement(ei, {
    rowCtrl: e,
    containerType: o.type,
    key: e.instanceId
  })))) : L();
});
var er = memo(() => {
  let e = useContext(n);
  let {
    context,
    overlays
  } = e;
  let [o, l] = useState("");
  let [a, h] = useState(0);
  let [u, c] = useState(0);
  let [g, p] = useState("0px");
  let [m, f] = useState("0px");
  let [C, w] = useState("100%");
  let [v, b] = useState("0px");
  let [y, S] = useState("0px");
  let [R, D] = useState("100%");
  let [x, P] = useState("");
  let [E, F] = useState("");
  let [A, k] = useState(null);
  let [M, T] = useState("");
  let [I, L] = useState(null);
  let [O, G] = useState("ag-layout-normal");
  let H = useRef();
  H.current || (H.current = new hv8(() => N.current));
  let N = useRef(null);
  let B = useRef(null);
  let V = useRef(null);
  let W = useRef(null);
  let z = useRef(null);
  let U = useRef(null);
  let $ = useRef(null);
  let j = useRef([]);
  let q = useRef([]);
  _(" AG Grid Body ", N);
  _(" AG Pinned Top ", B);
  _(" AG Sticky Top ", V);
  _(" AG Middle ", U);
  _(" AG Pinned Bottom ", $);
  let Y = useCallback(s => {
    if (N.current = s, !s) {
      j.current = context.destroyBeans(j.current);
      q.current.forEach(e => e());
      q.current = [];
      return;
    }
    if (!context) return;
    let o = (e, t) => {
      e.appendChild(t);
      q.current.push(() => e.removeChild(t));
    };
    let n = e => {
      let i = context.createBean(new e());
      j.current.push(i);
      return i;
    };
    let a = (e, t, i) => {
      o(e, document.createComment(i));
      o(e, n(t).getGui());
    };
    a(s, ifX, " AG Fake Horizontal Scroll ");
    let d = overlays?.getOverlayWrapperCompClass();
    d && a(s, d, " AG Overlay Wrapper ");
    z.current && a(z.current, AR_, " AG Fake Vertical Scroll ");
    let u = context.createBean(new m20());
    j.current.push(u);
    u.setComp({
      setRowAnimationCssOnBodyViewport: l,
      setColumnCount: e => {
        N.current && Aag(N.current, e);
      },
      setRowCount: e => {
        N.current && cBy(N.current, e);
      },
      setTopHeight: h,
      setBottomHeight: c,
      setStickyTopHeight: p,
      setStickyTopTop: f,
      setStickyTopWidth: w,
      setTopDisplay: P,
      setBottomDisplay: F,
      setColumnMovingCss: (e, t) => H.current.addOrRemoveCssClass(e, t),
      updateLayoutClasses: G,
      setAlwaysVerticalScrollClass: k,
      setPinnedTopBottomOverflowY: T,
      setCellSelectableCss: (e, t) => L(t ? e : null),
      setBodyViewportWidth: e => {
        U.current && (U.current.style.width = e);
      },
      registerBodyViewportResizeListener: t => {
        if (U.current) {
          let i = QSI(e, U.current, t);
          q.current.push(() => i());
        }
      },
      setStickyBottomHeight: b,
      setStickyBottomBottom: S,
      setStickyBottomWidth: D,
      setGridRootRole: e => s.setAttribute("role", e)
    }, s, U.current, B.current, $.current, V.current, W.current);
  }, []);
  let J = useMemo(() => d("ag-root", "ag-unselectable", O), [O]);
  let Z = useMemo(() => d("ag-body-viewport", o, O, A, I), [o, O, A, I]);
  let X = useMemo(() => d("ag-body", O), [O]);
  let Q = useMemo(() => d("ag-floating-top", I), [I]);
  let ee = useMemo(() => d("ag-sticky-top", I), [I]);
  let et = useMemo(() => d("ag-sticky-bottom", "0px" === v ? "ag-hidden" : null, I), [I, v]);
  let ei = useMemo(() => d("ag-floating-bottom", I), [I]);
  let er = useMemo(() => ({
    height: a,
    minHeight: a,
    display: x,
    overflowY: M
  }), [a, x, M]);
  let eo = useMemo(() => ({
    height: g,
    top: m,
    width: C
  }), [g, m, C]);
  let en = useMemo(() => ({
    height: v,
    bottom: y,
    width: R
  }), [v, y, R]);
  let el = useMemo(() => ({
    height: u,
    minHeight: u,
    display: E,
    overflowY: M
  }), [u, E, M]);
  let ea = e => createElement(es, {
    name: e,
    key: `${e}-container`
  });
  let ed = ({
    section: e,
    children: t,
    className: i,
    style: r
  }) => createElement("div", {
    ref: e,
    className: i,
    role: "presentation",
    style: r
  }, t.map(ea));
  return createElement("div", {
    ref: Y,
    className: J
  }, createElement(K, null), ed({
    section: B,
    className: Q,
    style: er,
    children: ["topLeft", "topCenter", "topRight", "topFullWidth"]
  }), createElement("div", {
    className: X,
    ref: z,
    role: "presentation"
  }, ed({
    section: U,
    className: Z,
    children: ["left", "center", "right", "fullWidth"]
  })), ed({
    section: V,
    className: ee,
    style: eo,
    children: ["stickyTopLeft", "stickyTopCenter", "stickyTopRight", "stickyTopFullWidth"]
  }), ed({
    section: W,
    className: et,
    style: en,
    children: ["stickyBottomLeft", "stickyBottomCenter", "stickyBottomRight", "stickyBottomFullWidth"]
  }), ed({
    section: $,
    className: ei,
    style: el,
    children: ["bottomLeft", "bottomCenter", "bottomRight", "bottomFullWidth"]
  }));
});
var eo = forwardRef((e, t) => {
  let {
    children,
    eFocusableElement,
    onTabKeyDown,
    gridCtrl,
    forceFocusOutWhenTabGuardsAreEmpty,
    isEmpty
  } = e;
  let {
    context
  } = useContext(n);
  let c = useRef(null);
  let g = useRef(null);
  let p = useRef();
  let m = e => {
    let t = null == e ? void 0 : parseInt(e, 10).toString();
    [c, g].forEach(e => {
      void 0 === t ? e.current?.removeAttribute("tabindex") : e.current?.setAttribute("tabindex", t);
    });
  };
  useImperativeHandle(t, () => ({
    forceFocusOutOfContainer(e) {
      p.current?.forceFocusOutOfContainer(e);
    }
  }));
  let f = useCallback(() => {
    let e = c.current;
    let t = g.current;
    if (!e && !t) {
      p.current = context.destroyBean(p.current);
      return;
    }
    e && t && (p.current = context.createBean(new Udn({
      comp: {
        setTabIndex: m
      },
      eTopGuard: e,
      eBottomGuard: t,
      eFocusableElement,
      onTabKeyDown,
      forceFocusOutWhenTabGuardsAreEmpty,
      focusInnerElement: e => gridCtrl.focusInnerElement(e),
      isEmpty
    })));
  }, []);
  let C = useCallback(e => {
    c.current = e;
    f();
  }, [f]);
  let w = useCallback(e => {
    g.current = e;
    f();
  }, [f]);
  let v = e => {
    let t = "top" === e ? pA9.TAB_GUARD_TOP : pA9.TAB_GUARD_BOTTOM;
    return createElement("div", {
      className: `${pA9.TAB_GUARD} ${t}`,
      role: "presentation",
      ref: "top" === e ? C : w
    });
  };
  return createElement(Fragment, null, v("top"), children, v("bottom"));
});
var en = memo(eo);
var el = memo(({
  context: e
}) => {
  let [t, i] = useState("");
  let [o, l] = useState("");
  let [a, h] = useState(null);
  let [u, c] = useState(null);
  let [g, p] = useState(!1);
  let [m, f] = useState();
  let C = useRef();
  let w = useRef(null);
  let v = useRef();
  let [b, y] = useState(null);
  let S = useRef(() => void 0);
  let R = useRef();
  let D = useRef([]);
  let x = useCallback(() => void 0, []);
  let P = useMemo(() => e.isDestroyed() ? null : e.getBeans(), [e]);
  _(" AG Grid ", w);
  let E = useCallback(t => {
    if (w.current = t, C.current = t ? e.createBean(new s1r()) : e.destroyBean(C.current), !t || e.isDestroyed()) return;
    let s = C.current;
    S.current = s.focusInnerElement.bind(s);
    s.setComp({
      destroyGridUi: () => {},
      setRtlClass: i,
      forceFocusOutOfContainer: e => {
        if (!e && R.current?.isDisplayed()) {
          R.current.forceFocusOutOfContainer(e);
          return;
        }
        v.current?.forceFocusOutOfContainer(e);
      },
      updateLayoutClasses: l,
      getFocusableContainers: () => {
        let e = [];
        let t = w.current?.querySelector(".ag-root");
        t && e.push({
          getGui: () => t
        });
        D.current.forEach(t => {
          t.isDisplayed() && e.push(t);
        });
        return e;
      },
      setCursor: h,
      setUserSelect: c
    }, t, t);
    p(!0);
  }, []);
  useEffect(() => {
    let t = C.current;
    let i = w.current;
    if (!m || !P || !t || !b || !i) return;
    let s = [];
    let {
      watermarkSelector,
      paginationSelector,
      sideBarSelector,
      statusBarSelector,
      gridHeaderDropZonesSelector
    } = t.getOptionalSelectors();
    let d = [];
    if (gridHeaderDropZonesSelector) {
      let t = e.createBean(new gridHeaderDropZonesSelector.component());
      let r = t.getGui();
      i.insertAdjacentElement("afterbegin", r);
      d.push(r);
      s.push(t);
    }
    if (sideBarSelector) {
      let t = e.createBean(new sideBarSelector.component());
      let i = t.getGui();
      let r = b.querySelector(".ag-tab-guard-bottom");
      r && (r.insertAdjacentElement("beforebegin", i), d.push(i));
      s.push(t);
      D.current.push(t);
    }
    let h = t => {
      let r = e.createBean(new t());
      let o = r.getGui();
      i.insertAdjacentElement("beforeend", o);
      d.push(o);
      s.push(r);
      return r;
    };
    if (statusBarSelector && h(statusBarSelector.component), paginationSelector) {
      let e = h(paginationSelector.component);
      R.current = e;
      D.current.push(e);
    }
    watermarkSelector && h(watermarkSelector.component);
    return () => {
      e.destroyBeans(s);
      d.forEach(e => {
        e.parentElement?.removeChild(e);
      });
    };
  }, [m, b, P]);
  let F = useMemo(() => d("ag-root-wrapper", t, o), [t, o]);
  let A = useMemo(() => d("ag-root-wrapper-body", "ag-focus-managed", o), [o]);
  let k = useMemo(() => ({
    userSelect: null != u ? u : "",
    WebkitUserSelect: null != u ? u : "",
    cursor: null != a ? a : ""
  }), [u, a]);
  let M = useCallback(e => {
    v.current = e;
    f(null !== e);
  }, []);
  let T = useCallback(() => !C.current?.isFocusable(), []);
  return createElement("div", {
    ref: E,
    className: F,
    style: k,
    role: "presentation"
  }, createElement("div", {
    className: A,
    ref: y,
    role: "presentation"
  }, g && b && P && createElement(n.Provider, {
    value: P
  }, createElement(en, {
    ref: M,
    eFocusableElement: b,
    onTabKeyDown: x,
    gridCtrl: C.current,
    forceFocusOutWhenTabGuardsAreEmpty: !0,
    isEmpty: T
  }, createElement(er, null)))));
});
var ea = class extends XQb {
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc;
  }
  areHeaderCellsRendered() {
    return this.ctrlsSvc.getHeaderRowContainerCtrls().every(e => e.getAllCtrls().every(e => e.areCellsRendered()));
  }
};
var ed = new Set(["gridOptions", "modules", "containerStyle", "className", "setGridApi", "componentWrappingElement", "maxComponentCreationTimeMs", "children"]);
var eh = e => {
  let t = useRef();
  let i = useRef(null);
  let o = useRef(null);
  let n = useRef([]);
  let l = useRef([]);
  let a = useRef(e);
  let d = useRef();
  let h = useRef();
  let u = useRef(!1);
  let [c, g] = useState(void 0);
  let [, p] = useState(0);
  let m = useCallback(s => {
    if (i.current = s, !s) {
      n.current.forEach(e => e());
      n.current.length = 0;
      return;
    }
    let a = e.modules || [];
    o.current || (o.current = new B(() => p(e => e + 1), e.componentWrappingElement, e.maxComponentCreationTimeMs), n.current.push(() => {
      o.current?.destroy();
      o.current = null;
    }));
    let c = zsR(e.gridOptions, e, Object.keys(e).filter(e => !ed.has(e)));
    let m = new eg(() => {
      if (u.current) {
        let e = () => d.current?.shouldQueueUpdates() ? void 0 : l.current.shift();
        let t = e();
        for (; t;) {
          t();
          t = e();
        }
      }
    });
    d.current = m;
    let f = new ea();
    let C = {
      providedBeanInstances: {
        frameworkCompWrapper: new eu(o.current, c.reactiveCustomComponents ?? c1h("reactiveCustomComponents") ?? !0),
        renderStatus: f
      },
      modules: a,
      frameworkOverrides: m,
      setThemeOnGridDiv: !0
    };
    let w = new Ug$();
    c.gridId ?? (c.gridId = h.current);
    t.current = w.create(s, c, i => {
      g(i);
      i.createBean(f);
      n.current.push(() => {
        i.destroy();
      });
      i.getBean("ctrlsSvc").whenReady({
        addDestroyFunc: e => {
          n.current.push(e);
        }
      }, () => {
        if (i.isDestroyed()) return;
        let s = t.current;
        s && e.setGridApi?.(s);
      });
    }, e => {
      e.getBean("ctrlsSvc").whenReady({
        addDestroyFunc: e => {
          n.current.push(e);
        }
      }, () => {
        l.current.forEach(e => e());
        l.current.length = 0;
        u.current = !0;
      });
    }, C);
    n.current.push(() => {
      t.current = void 0;
    });
    t.current && (h.current = t.current.getGridId());
  }, []);
  let f = useMemo(() => ({
    height: "100%",
    ...(e.containerStyle || {})
  }), [e.containerStyle]);
  let C = useCallback(e => {
    u.current && !d.current?.shouldQueueUpdates() ? e() : l.current.push(e);
  }, []);
  useEffect(() => {
    let i = function (e, t) {
      let i = {};
      Object.keys(t).forEach(s => {
        if (ed.has(s)) return;
        let r = t[s];
        e[s] !== r && (i[s] = r);
      });
      return i;
    }(a.current, e);
    a.current = e;
    C(() => {
      t.current && Y6t(i, t.current);
    });
  }, [e]);
  return createElement("div", {
    style: f,
    className: e.className,
    ref: m
  }, c && !c.isDestroyed() ? createElement(el, {
    context: c
  }) : null, o.current?.getPortals() ?? null);
};
var eu = class extends Cf3 {
  constructor(e, t) {
    super();
    this.parent = e;
    this.reactiveCustomComponents = t;
  }
  createWrapper(e, t) {
    if (this.reactiveCustomComponents) {
      let i = (e => {
        switch (e) {
          case "filter":
            return F;
          case "floatingFilterComponent":
            return M;
          case "dateComponent":
            return P;
          case "dragAndDropImageComponent":
            return E;
          case "loadingOverlayComponent":
            return I;
          case "noRowsOverlayComponent":
            return O;
          case "statusPanel":
            return G;
          case "toolPanel":
            return H;
          case "menuItem":
            return L;
          case "cellRenderer":
            return x;
          case "innerHeaderComponent":
            return T;
        }
      })(t.name);
      if (i) return new i(e, this.parent, t);
    } else switch (t.name) {
      case "filter":
      case "floatingFilterComponent":
      case "dateComponent":
      case "dragAndDropImageComponent":
      case "loadingOverlayComponent":
      case "noRowsOverlayComponent":
      case "statusPanel":
      case "toolPanel":
      case "menuItem":
      case "cellRenderer":
        N();
    }
    let i = !t.cellRenderer && "toolPanel" !== t.name;
    return new S(e, this.parent, t, i);
  }
};
var ec = forwardRef((e, t) => {
  let i = useContext(n);
  let {
    registry,
    context,
    gos,
    rowModel
  } = i;
  let [u, c] = useState(() => new h());
  let [g, p] = useState(() => new h());
  let [m, f] = useState();
  let [C, w] = useState();
  let v = useRef();
  let b = useRef(null);
  let y = useRef();
  let S = useMemo(() => Dii(e.api.getGridId(), m?.rowModelType ?? "clientSide"), [e]);
  let R = useMemo(() => u.toString() + " ag-details-row", [u]);
  let D = useMemo(() => g.toString() + " ag-details-grid", [g]);
  t && useImperativeHandle(t, () => ({
    refresh: () => v.current?.refresh() ?? !1
  }));
  e.template && ujB(230);
  let x = useCallback(t => {
    if (b.current = t, !t) {
      v.current = context.destroyBean(v.current);
      y.current?.();
      return;
    }
    let s = registry.createDynamicBean("detailCellRendererCtrl", !0);
    if (s && (context.createBean(s), s.init({
      addOrRemoveCssClass: (e, t) => c(i => i.setClass(e, t)),
      addOrRemoveDetailGridCssClass: (e, t) => p(i => i.setClass(e, t)),
      setDetailGrid: e => f(e),
      setRowData: e => w(e),
      getGui: () => b.current
    }, e), v.current = s, gos.get("detailRowAutoHeight"))) {
      let s = () => {
        if (null == b.current) return;
        let t = b.current.clientHeight;
        null != t && t > 0 && setTimeout(() => {
          e.node.setRowHeight(t);
          (dbY(gos, rowModel) || TiQ(gos, rowModel)) && rowModel.onRowHeightChanged();
        }, 0);
      };
      y.current = QSI(i, t, s);
      s();
    }
  }, []);
  let P = useCallback(e => {
    v.current?.registerDetailWithMaster(e);
  }, []);
  return createElement("div", {
    className: R,
    ref: x
  }, m && createElement(eh, {
    className: D,
    ...m,
    modules: S,
    rowData: C,
    setGridApi: P
  }));
});
var eg = class extends pow {
  constructor(e) {
    super("react");
    this.processQueuedUpdates = e;
    this.queueUpdates = !1;
    this.frameworkComponents = {
      agGroupCellRenderer: C,
      agGroupRowRenderer: C,
      agDetailCellRenderer: ec
    };
    this.wrapIncoming = (e, t) => "ensureVisible" === t ? (p || setTimeout(() => p = !1, 0), p = !0, e()) : e();
    this.renderingEngine = "react";
  }
  frameworkComponent(e) {
    return this.frameworkComponents[e];
  }
  isFrameworkComponent(e) {
    if (!e) return !1;
    let t = e.prototype;
    return !(t && "getGui" in t);
  }
  getLockOnRefresh() {
    this.queueUpdates = !0;
  }
  releaseLockOnRefresh() {
    this.queueUpdates = !1;
    this.processQueuedUpdates();
  }
  shouldQueueUpdates() {
    return this.queueUpdates;
  }
  runWhenReadyAsync() {
    return "19" === c;
  }
};
var $$ep0 = class extends Component {
  constructor() {
    super(...arguments);
    this.apiListeners = [];
    this.setGridApi = e => {
      this.api = e;
      this.apiListeners.forEach(t => t(e));
    };
  }
  registerApiListener(e) {
    this.apiListeners.push(e);
  }
  componentWillUnmount() {
    this.apiListeners.length = 0;
  }
  render() {
    return createElement(eh, {
      ...this.props,
      setGridApi: this.setGridApi
    });
  }
};
export const W6 = $$ep0;