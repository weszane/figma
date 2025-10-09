import { jsx } from "react/jsx-runtime";
import { createStore } from "../vendor/156872";
import { V as _$$V } from "../vendor/806037";
import { memo, useEffect } from "react";
import { M as _$$M } from "../vendor/786121";
var i;
function h(e, r, n) {
  return r.split(".").reduce((e, r) => e && e[r] ? e[r] : n || null, e);
}
function d(e, r) {
  return e.filter(e => e !== r);
}
function p(e) {
  return "object" == typeof e;
}
function g(e, r) {
  let n = new Map();
  let i = e => {
    n.set(e, n.has(e) ? n.get(e) + 1 : 1);
  };
  e.forEach(i);
  r.forEach(i);
  let s = [];
  n.forEach((e, r) => {
    1 === e && s.push(r);
  });
  return s;
}
function m(e, r) {
  return e.filter(e => r.indexOf(e) > -1);
}
let v = "dnd-core/INIT_COORDS";
let y = "dnd-core/BEGIN_DRAG";
let b = "dnd-core/PUBLISH_DRAG_SOURCE";
let O = "dnd-core/HOVER";
let x = "dnd-core/DROP";
let w = "dnd-core/END_DRAG";
function k(e, r) {
  return {
    type: v,
    payload: {
      sourceClientOffset: r || null,
      clientOffset: e || null
    }
  };
}
let _ = {
  type: v,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function S(e) {
  return function (r = [], n = {
    publishSource: !0
  }) {
    let {
      publishSource = !0,
      clientOffset,
      getSourceClientOffset
    } = n;
    let a = e.getMonitor();
    let h = e.getRegistry();
    e.dispatch(k(clientOffset));
    E(r, a, h);
    let d = T(r, a);
    if (null == d) {
      e.dispatch(_);
      return;
    }
    let p = null;
    if (clientOffset) {
      if (!getSourceClientOffset) throw Error("getSourceClientOffset must be defined");
      A(getSourceClientOffset);
      p = getSourceClientOffset(d);
    }
    e.dispatch(k(clientOffset, p));
    let g = h.getSource(d).beginDrag(a, d);
    if (null != g) {
      C(g);
      h.pinSource(d);
      return {
        type: y,
        payload: {
          itemType: h.getSourceType(d),
          item: g,
          sourceId: d,
          clientOffset: clientOffset || null,
          sourceClientOffset: p || null,
          isSourcePublic: !!publishSource
        }
      };
    }
  };
}
function E(e, r, n) {
  _$$V(!r.isDragging(), "Cannot call beginDrag while dragging.");
  e.forEach(function (e) {
    _$$V(n.getSource(e), "Expected sourceIds to be registered.");
  });
}
function A(e) {
  _$$V("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function C(e) {
  _$$V(p(e), "Item must be an object.");
}
function T(e, r) {
  let n = null;
  for (let i = e.length - 1; i >= 0; i--) if (r.canDragSource(e[i])) {
    n = e[i];
    break;
  }
  return n;
}
function I(e, r, n) {
  r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n;
  return e;
}
function P(e) {
  for (var r = 1; r < $$arguments.length; r++) {
    var n = null != $$arguments[r] ? $$arguments[r] : {};
    var i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable;
    })));
    i.forEach(function (r) {
      I(e, r, n[r]);
    });
  }
  return e;
}
function R(e) {
  return function (r = {}) {
    let n = e.getMonitor();
    let i = e.getRegistry();
    M(n);
    $(n).forEach((s, o) => {
      let a = {
        type: x,
        payload: {
          dropResult: P({}, r, D(s, o, i, n))
        }
      };
      e.dispatch(a);
    });
  };
}
function M(e) {
  _$$V(e.isDragging(), "Cannot call drop while not dragging.");
  _$$V(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function D(e, r, n, i) {
  let s = n.getTarget(e);
  let o = s ? s.drop(i, e) : void 0;
  N(o);
  void 0 === o && (o = 0 === r ? {} : i.getDropResult());
  return o;
}
function N(e) {
  _$$V(void 0 === e || p(e), "Drop result must either be an object or undefined.");
}
function $(e) {
  let r = e.getTargetIds().filter(e.canDropOnTarget, e);
  r.reverse();
  return r;
}
function L(e) {
  return function () {
    let r = e.getMonitor();
    let n = e.getRegistry();
    j(r);
    let i = r.getSourceId();
    null != i && (n.getSource(i, !0).endDrag(r, i), n.unpinSource());
    return {
      type: w
    };
  };
}
function j(e) {
  _$$V(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function z(e, r) {
  return null === r ? null === e : Array.isArray(e) ? e.some(e => e === r) : e === r;
}
function Z(e) {
  return function (r, {
    clientOffset: n
  } = {}) {
    F(r);
    let i = r.slice(0);
    let s = e.getMonitor();
    let o = e.getRegistry();
    $$Q(i, o, s.getItemType());
    U(i, s, o);
    V(i, s, o);
    return {
      type: O,
      payload: {
        targetIds: i,
        clientOffset: n || null
      }
    };
  };
}
function F(e) {
  _$$V(Array.isArray(e), "Expected targetIds to be an array.");
}
function U(e, r, n) {
  _$$V(r.isDragging(), "Cannot call hover while not dragging.");
  _$$V(!r.didDrop(), "Cannot call hover after drop.");
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    _$$V(e.lastIndexOf(i) === r, "Expected targetIds to be unique in the passed array.");
    let s = n.getTarget(i);
    _$$V(s, "Expected targetIds to be registered.");
  }
}
function $$Q(e, r, n) {
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i];
    z(r.getTargetType(s), n) || e.splice(i, 1);
  }
}
function V(e, r, n) {
  e.forEach(function (e) {
    n.getTarget(e).hover(r, e);
  });
}
function B(e) {
  return function () {
    if (e.getMonitor().isDragging()) return {
      type: b
    };
  };
}
function q(e) {
  return {
    beginDrag: S(e),
    publishDragSource: B(e),
    hover: Z(e),
    drop: R(e),
    endDrag: L(e)
  };
}
class W {
  receiveBackend(e) {
    this.backend = e;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    let e = this;
    let {
      dispatch
    } = this.store;
    function n(n) {
      return (...i) => {
        let s = n.apply(e, i);
        void 0 !== s && dispatch(s);
      };
    }
    let i = q(this);
    return Object.keys(i).reduce((e, r) => {
      let s = i[r];
      e[r] = n(s);
      return e;
    }, {});
  }
  dispatch(e) {
    this.store.dispatch(e);
  }
  constructor(e, r) {
    this.isSetUp = !1;
    this.handleRefCountChange = () => {
      let e = this.store.getState().refCount > 0;
      this.backend && (e && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !e && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    };
    this.store = e;
    this.monitor = r;
    e.subscribe(this.handleRefCountChange);
  }
}
function Y(e, r) {
  return {
    x: e.x + r.x,
    y: e.y + r.y
  };
}
function G(e, r) {
  return {
    x: e.x - r.x,
    y: e.y - r.y
  };
}
function X(e) {
  let {
    clientOffset,
    initialClientOffset,
    initialSourceClientOffset
  } = e;
  return clientOffset && initialClientOffset && initialSourceClientOffset ? G(Y(clientOffset, initialSourceClientOffset), initialClientOffset) : null;
}
function H(e) {
  let {
    clientOffset,
    initialClientOffset
  } = e;
  return clientOffset && initialClientOffset ? G(clientOffset, initialClientOffset) : null;
}
let K = [];
let J = [];
function ee(e, r) {
  return e !== K && (e === J || void 0 === r || m(r, e).length > 0);
}
K.__IS_NONE__ = !0;
J.__IS_ALL__ = !0;
class et {
  subscribeToStateChange(e, r = {}) {
    let {
      handlerIds
    } = r;
    _$$V("function" == typeof e, "listener must be a function.");
    _$$V(void 0 === handlerIds || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let i = this.store.getState().stateId;
    let s = () => {
      let r = this.store.getState();
      let s = r.stateId;
      try {
        s !== i && (s !== i + 1 || ee(r.dirtyHandlerIds, handlerIds)) && e();
      } finally {
        i = s;
      }
    };
    return this.store.subscribe(s);
  }
  subscribeToOffsetChange(e) {
    _$$V("function" == typeof e, "listener must be a function.");
    let r = this.store.getState().dragOffset;
    let n = () => {
      let n = this.store.getState().dragOffset;
      n !== r && (r = n, e());
    };
    return this.store.subscribe(n);
  }
  canDragSource(e) {
    if (!e) return !1;
    let r = this.registry.getSource(e);
    _$$V(r, `Expected to find a valid source. sourceId=${e}`);
    return !this.isDragging() && r.canDrag(this, e);
  }
  canDropOnTarget(e) {
    if (!e) return !1;
    let r = this.registry.getTarget(e);
    _$$V(r, `Expected to find a valid target. targetId=${e}`);
    return !(!this.isDragging() || this.didDrop()) && z(this.registry.getTargetType(e), this.getItemType()) && r.canDrop(this, e);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(e) {
    if (!e) return !1;
    let r = this.registry.getSource(e, !0);
    _$$V(r, `Expected to find a valid source. sourceId=${e}`);
    return !!(this.isDragging() && this.isSourcePublic()) && this.registry.getSourceType(e) === this.getItemType() && r.isDragging(this, e);
  }
  isOverTarget(e, r = {
    shallow: !1
  }) {
    if (!e) return !1;
    let {
      shallow
    } = r;
    if (!this.isDragging()) return !1;
    let i = this.registry.getTargetType(e);
    let s = this.getItemType();
    if (s && !z(i, s)) return !1;
    let o = this.getTargetIds();
    if (!o.length) return !1;
    let a = o.indexOf(e);
    return shallow ? a === o.length - 1 : a > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return !!this.store.getState().dragOperation.isSourcePublic;
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return X(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return H(this.store.getState().dragOffset);
  }
  constructor(e, r) {
    this.store = e;
    this.registry = r;
  }
}
let er = "undefined" != typeof global ? global : self;
let en = er.MutationObserver || er.WebKitMutationObserver;
function ei(e) {
  return function () {
    let r = setTimeout(i, 0);
    let n = setInterval(i, 50);
    function i() {
      clearTimeout(r);
      clearInterval(n);
      e();
    }
  };
}
function es(e) {
  let r = 1;
  let n = new en(e);
  let i = document.createTextNode("");
  n.observe(i, {
    characterData: !0
  });
  return function () {
    r = -r;
    i.data = r;
  };
}
let eo = "function" == typeof en ? es : ei;
class ea {
  enqueueTask(e) {
    let {
      queue,
      requestFlush
    } = this;
    queue.length || (requestFlush(), this.flushing = !0);
    queue[queue.length] = e;
  }
  constructor() {
    var _this = this;
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = !1;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      let {
        queue
      } = this;
      for (; this.index < queue.length;) {
        let r = this.index;
        if (this.index++, queue[r].call(), this.index > this.capacity) {
          for (function () {
            let r = 0;
            let n = queue.length - _this.index;
          }(); r < n; r++) queue[r] = queue[r + this.index];
          queue.length -= this.index;
          this.index = 0;
        }
      }
      queue.length = 0;
      this.index = 0;
      this.flushing = !1;
    };
    this.registerPendingError = e => {
      this.pendingErrors.push(e);
      this.requestErrorThrow();
    };
    this.requestFlush = eo(this.flush);
    this.requestErrorThrow = ei(() => {
      if (this.pendingErrors.length) throw this.pendingErrors.shift();
    });
  }
}
class el {
  call() {
    try {
      this.task && this.task();
    } catch (e) {
      this.onError(e);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(e, r) {
    this.onError = e;
    this.release = r;
    this.task = null;
  }
}
class eu {
  create(e) {
    let r = this.freeTasks;
    let n = r.length ? r.pop() : new el(this.onError, e => r[r.length] = e);
    n.task = e;
    return n;
  }
  constructor(e) {
    this.onError = e;
    this.freeTasks = [];
  }
}
let ec = new ea();
let eh = new eu(ec.registerPendingError);
function ed(e) {
  ec.enqueueTask(eh.create(e));
}
let ef = "dnd-core/ADD_SOURCE";
let ep = "dnd-core/ADD_TARGET";
let eg = "dnd-core/REMOVE_SOURCE";
let em = "dnd-core/REMOVE_TARGET";
function ev(e) {
  return {
    type: ef,
    payload: {
      sourceId: e
    }
  };
}
function ey(e) {
  return {
    type: ep,
    payload: {
      targetId: e
    }
  };
}
function eb(e) {
  return {
    type: eg,
    payload: {
      sourceId: e
    }
  };
}
function eO(e) {
  return {
    type: em,
    payload: {
      targetId: e
    }
  };
}
function ex(e) {
  _$$V("function" == typeof e.canDrag, "Expected canDrag to be a function.");
  _$$V("function" == typeof e.beginDrag, "Expected beginDrag to be a function.");
  _$$V("function" == typeof e.endDrag, "Expected endDrag to be a function.");
}
function ew(e) {
  _$$V("function" == typeof e.canDrop, "Expected canDrop to be a function.");
  _$$V("function" == typeof e.hover, "Expected hover to be a function.");
  _$$V("function" == typeof e.drop, "Expected beginDrag to be a function.");
}
function ek(e, r) {
  if (r && Array.isArray(e)) {
    e.forEach(e => ek(e, !1));
    return;
  }
  _$$V("string" == typeof e || "symbol" == typeof e, r ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
!function (e) {
  e.SOURCE = "SOURCE";
  e.TARGET = "TARGET";
}(i || (i = {}));
let e_ = 0;
function eS() {
  return e_++;
}
function eE(e) {
  let r = eS().toString();
  switch (e) {
    case i.SOURCE:
      return `S${r}`;
    case i.TARGET:
      return `T${r}`;
    default:
      throw Error(`Unknown Handler Role: ${e}`);
  }
}
function eA(e) {
  switch (e[0]) {
    case "S":
      return i.SOURCE;
    case "T":
      return i.TARGET;
    default:
      throw Error(`Cannot parse handler ID: ${e}`);
  }
}
function eC(e, r) {
  let n = e.entries();
  let i = !1;
  do {
    let {
      done,
      value: [, s]
    } = n.next();
    if (s === r) return !0;
    i = !!done;
  } while (!i);
  return !1;
}
class eT {
  addSource(e, r) {
    ek(e);
    ex(r);
    let n = this.addHandler(i.SOURCE, e, r);
    this.store.dispatch(ev(n));
    return n;
  }
  addTarget(e, r) {
    ek(e, !0);
    ew(r);
    let n = this.addHandler(i.TARGET, e, r);
    this.store.dispatch(ey(n));
    return n;
  }
  containsHandler(e) {
    return eC(this.dragSources, e) || eC(this.dropTargets, e);
  }
  getSource(e, r = !1) {
    _$$V(this.isSourceId(e), "Expected a valid source ID.");
    return r && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
  }
  getTarget(e) {
    _$$V(this.isTargetId(e), "Expected a valid target ID.");
    return this.dropTargets.get(e);
  }
  getSourceType(e) {
    _$$V(this.isSourceId(e), "Expected a valid source ID.");
    return this.types.get(e);
  }
  getTargetType(e) {
    _$$V(this.isTargetId(e), "Expected a valid target ID.");
    return this.types.get(e);
  }
  isSourceId(e) {
    return eA(e) === i.SOURCE;
  }
  isTargetId(e) {
    return eA(e) === i.TARGET;
  }
  removeSource(e) {
    _$$V(this.getSource(e), "Expected an existing source.");
    this.store.dispatch(eb(e));
    ed(() => {
      this.dragSources.$$delete(e);
      this.types.$$delete(e);
    });
  }
  removeTarget(e) {
    _$$V(this.getTarget(e), "Expected an existing target.");
    this.store.dispatch(eO(e));
    this.dropTargets.$$delete(e);
    this.types.$$delete(e);
  }
  pinSource(e) {
    let r = this.getSource(e);
    _$$V(r, "Expected an existing source.");
    this.pinnedSourceId = e;
    this.pinnedSource = r;
  }
  unpinSource() {
    _$$V(this.pinnedSource, "No source is pinned at the time.");
    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }
  addHandler(e, r, n) {
    let s = eE(e);
    this.types.set(s, r);
    e === i.SOURCE ? this.dragSources.set(s, n) : e === i.TARGET && this.dropTargets.set(s, n);
    return s;
  }
  constructor(e) {
    this.types = new Map();
    this.dragSources = new Map();
    this.dropTargets = new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = e;
  }
}
let eI = (e, r) => e === r;
function eP(e, r) {
  return !e && !r || !!e && !!r && e.x === r.x && e.y === r.y;
}
function eR(e, r, n = eI) {
  if (e.length !== r.length) return !1;
  for (let i = 0; i < e.length; ++i) if (!n(e[i], r[i])) return !1;
  return !0;
}
function eM(e = K, r) {
  switch (r.type) {
    case O:
      break;
    case ef:
    case ep:
    case em:
    case eg:
      return K;
    default:
      return J;
  }
  let {
    targetIds = [],
    prevTargetIds = []
  } = r.payload;
  let s = g(targetIds, prevTargetIds);
  if (!(s.length > 0 || !eR(targetIds, prevTargetIds))) return K;
  let o = prevTargetIds[prevTargetIds.length - 1];
  let a = targetIds[targetIds.length - 1];
  o !== a && (o && s.push(o), a && s.push(a));
  return s;
}
function eD(e, r, n) {
  r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n;
  return e;
}
function eN(e) {
  for (var r = 1; r < $$arguments.length; r++) {
    var n = null != $$arguments[r] ? $$arguments[r] : {};
    var i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable;
    })));
    i.forEach(function (r) {
      eD(e, r, n[r]);
    });
  }
  return e;
}
let e$ = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function eL(e = e$, r) {
  let {
    payload
  } = r;
  switch (r.type) {
    case v:
    case y:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case O:
      if (eP(e.clientOffset, payload.clientOffset)) return e;
      return eN({}, e, {
        clientOffset: payload.clientOffset
      });
    case w:
    case x:
      return e$;
    default:
      return e;
  }
}
function ej(e, r, n) {
  r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n;
  return e;
}
function ez(e) {
  for (var r = 1; r < $$arguments.length; r++) {
    var n = null != $$arguments[r] ? $$arguments[r] : {};
    var i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable;
    })));
    i.forEach(function (r) {
      ej(e, r, n[r]);
    });
  }
  return e;
}
let eZ = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function eF(e = eZ, r) {
  let {
    payload
  } = r;
  switch (r.type) {
    case y:
      return ez({}, e, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case b:
      return ez({}, e, {
        isSourcePublic: !0
      });
    case O:
      return ez({}, e, {
        targetIds: payload.targetIds
      });
    case em:
      if (-1 === e.targetIds.indexOf(payload.targetId)) return e;
      return ez({}, e, {
        targetIds: d(e.targetIds, payload.targetId)
      });
    case x:
      return ez({}, e, {
        dropResult: payload.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case w:
      return ez({}, e, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return e;
  }
}
function eU(e = 0, r) {
  switch (r.type) {
    case ef:
    case ep:
      return e + 1;
    case eg:
    case em:
      return e - 1;
    default:
      return e;
  }
}
function eQ(e = 0) {
  return e + 1;
}
function eV(e, r, n) {
  r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n;
  return e;
}
function eB(e) {
  for (var r = 1; r < $$arguments.length; r++) {
    var n = null != $$arguments[r] ? $$arguments[r] : {};
    var i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable;
    })));
    i.forEach(function (r) {
      eV(e, r, n[r]);
    });
  }
  return e;
}
function eq(e = {}, r) {
  return {
    dirtyHandlerIds: eM(e.dirtyHandlerIds, {
      type: r.type,
      payload: eB({}, r.payload, {
        prevTargetIds: h(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: eL(e.dragOffset, r),
    refCount: eU(e.refCount, r),
    dragOperation: eF(e.dragOperation, r),
    stateId: eQ(e.stateId)
  };
}
function eW(e, r, n = {}, i = !1) {
  let s = eY(i);
  let o = new et(s, new eT(s));
  let a = new W(s, o);
  let h = e(a, r, n);
  a.receiveBackend(h);
  return a;
}
function eY(e) {
  let r = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(eq, e && r && r({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function eH(e, r) {
  if (null == e) return {};
  var n;
  var i;
  var s = eK(e, r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++) {
      n = o[i];
      !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    }
  }
  return s;
}
function eK(e, r) {
  if (null == e) return {};
  var n;
  var i;
  var s = {};
  var o = Object.keys(e);
  for (i = 0; i < o.length; i++) {
    n = o[i];
    r.indexOf(n) >= 0 || (s[n] = e[n]);
  }
  return s;
}
let eJ = 0;
let e0 = Symbol.$$for("__REACT_DND_CONTEXT_INSTANCE__");
export var DndProvider = memo(function (e) {
  var {
    children
  } = e;
  let [n, i] = e2(eH(e, ["children"]));
  useEffect(() => {
    if (i) {
      let e = e3();
      ++eJ;
      return () => {
        0 == --eJ && (e[e0] = null);
      };
    }
  }, []);
  return jsx(_$$M.Provider, {
    value: n,
    children
  });
});
function e2(e) {
  return "manager" in e ? [{
    dragDropManager: e.manager
  }, !1] : [e5(e.backend, e.context, e.options, e.debugMode), !e.context];
}
function e5(e, r = e3(), n, i) {
  let s = r;
  s[e0] || (s[e0] = {
    dragDropManager: eW(e, r, n, i)
  });
  return s[e0];
}
function e3() {
  return "undefined" != typeof global ? global : window;
}
export const Q = DndProvider;
