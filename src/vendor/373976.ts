import { j } from "../vendor/840274";
import { I } from "../vendor/690096";
import { useMemo, useEffect } from "react";
import { b as _$$b } from "../vendor/391875";
import { i as _$$i } from "../vendor/246932";
import { i as _$$i2 } from "../vendor/333460";
import { u } from "../vendor/363976";
import { E as _$$E } from "../vendor/202506";
import { V } from "../vendor/806037";
import { l } from "../vendor/900808";
function a(e) {
  return useMemo(() => e.hooks.dropTarget(), [e]);
}
class g {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    let e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    e && this.disconnectDropTarget();
    let r = this.dropTarget;
    if (this.handlerId) {
      if (!r) {
        this.lastConnectedDropTarget = r;
        return;
      }
      e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = r, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, r, this.dropTargetOptions));
    }
  }
  receiveHandlerId(e) {
    e !== this.handlerId && (this.handlerId = e, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(e) {
    this.dropTargetOptionsInternal = e;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !_$$b(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(e) {
    this.hooks = _$$i2({
      dropTarget: (e, r) => {
        this.clearDropTarget();
        this.dropTargetOptions = r;
        _$$i(e) ? this.dropTargetRef = e : this.dropTargetNode = e;
        this.reconnect();
      }
    });
    this.handlerId = null;
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = e;
  }
}
function y(e) {
  let r = u();
  let n = useMemo(() => new g(r.getBackend()), [r]);
  _$$E(() => (n.dropTargetOptions = e || null, n.reconnect(), () => n.disconnectDropTarget()), [e]);
  return n;
}
let O = !1;
class x {
  receiveHandlerId(e) {
    this.targetId = e;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  canDrop() {
    if (!this.targetId) return !1;
    V(!O, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      O = !0;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      O = !1;
    }
  }
  isOver(e) {
    return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(e) {
    this.targetId = null;
    this.internalMonitor = e.getMonitor();
  }
}
function w() {
  let e = u();
  return useMemo(() => new x(e), [e]);
}
function _(e) {
  let {
    accept
  } = e;
  return useMemo(() => (V(null != e.accept, "accept must be defined"), Array.isArray(accept) ? accept : [accept]), [accept]);
}
class S {
  canDrop() {
    let e = this.spec;
    let r = this.monitor;
    return !e.canDrop || e.canDrop(r.getItem(), r);
  }
  hover() {
    let e = this.spec;
    let r = this.monitor;
    e.hover && e.hover(r.getItem(), r);
  }
  drop() {
    let e = this.spec;
    let r = this.monitor;
    if (e.drop) return e.drop(r.getItem(), r);
  }
  constructor(e, r) {
    this.spec = e;
    this.monitor = r;
  }
}
function E(e, r) {
  let n = useMemo(() => new S(e, r), [r]);
  useEffect(() => {
    n.spec = e;
  }, [e]);
  return n;
}
function A(e, r, n) {
  let i = u();
  let s = E(e, r);
  let o = _(e);
  _$$E(function () {
    let [e, a] = l(o, s, i);
    r.receiveHandlerId(e);
    n.receiveHandlerId(e);
    return a;
  }, [i, r, s, n, o.map(e => e.toString()).join("|")]);
}
export function $$C0(e, r) {
  let n = I(e, r);
  let o = w();
  let h = y(n.options);
  A(n, o, h);
  return [j(n.collect, o, h), a(h)];
}
export const H = $$C0;