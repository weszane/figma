import { V } from "../vendor/806037";
import { j } from "../vendor/840274";
import { I } from "../vendor/690096";
import { useMemo, useEffect } from "react";
import { b as _$$b } from "../vendor/391875";
import { i as _$$i } from "../vendor/246932";
import { i as _$$i2 } from "../vendor/333460";
import { u } from "../vendor/363976";
import { E as _$$E } from "../vendor/202506";
import { V as _$$V } from "../vendor/900808";
function h(e) {
  return useMemo(() => e.hooks.dragSource(), [e]);
}
function d(e) {
  return useMemo(() => e.hooks.dragPreview(), [e]);
}
class v {
  receiveHandlerId(e) {
    this.handlerId !== e && (this.handlerId = e, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(e) {
    this.dragSourceOptionsInternal = e;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(e) {
    this.dragPreviewOptionsInternal = e;
  }
  reconnect() {
    let e = this.reconnectDragSource();
    this.reconnectDragPreview(e);
  }
  reconnectDragSource() {
    let e = this.dragSource;
    let r = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    r && this.disconnectDragSource();
    this.handlerId && (e ? r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)) : this.lastConnectedDragSource = e);
    return r;
  }
  reconnectDragPreview(e = !1) {
    let r = this.dragPreview;
    let n = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (n && this.disconnectDragPreview(), this.handlerId) {
      if (!r) {
        this.lastConnectedDragPreview = r;
        return;
      }
      n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !_$$b(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !_$$b(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(e) {
    this.hooks = _$$i2({
      dragSource: (e, r) => {
        this.clearDragSource();
        this.dragSourceOptions = r || null;
        _$$i(e) ? this.dragSourceRef = e : this.dragSourceNode = e;
        this.reconnectDragSource();
      },
      dragPreview: (e, r) => {
        this.clearDragPreview();
        this.dragPreviewOptions = r || null;
        _$$i(e) ? this.dragPreviewRef = e : this.dragPreviewNode = e;
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = e;
  }
}
function O(e, r) {
  let n = u();
  let i = useMemo(() => new v(n.getBackend()), [n]);
  _$$E(() => (i.dragSourceOptions = e || null, i.reconnect(), () => i.disconnectDragSource()), [i, e]);
  _$$E(() => (i.dragPreviewOptions = r || null, i.reconnect(), () => i.disconnectDragPreview()), [i, r]);
  return i;
}
let x = !1;
let w = !1;
class k {
  receiveHandlerId(e) {
    this.sourceId = e;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    V(!x, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      x = !0;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      x = !1;
    }
  }
  isDragging() {
    if (!this.sourceId) return !1;
    V(!w, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      w = !0;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      w = !1;
    }
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  isDraggingSource(e) {
    return this.internalMonitor.isDraggingSource(e);
  }
  isOverTarget(e, r) {
    return this.internalMonitor.isOverTarget(e, r);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(e) {
    return this.internalMonitor.subscribeToOffsetChange(e);
  }
  canDragSource(e) {
    return this.internalMonitor.canDragSource(e);
  }
  canDropOnTarget(e) {
    return this.internalMonitor.canDropOnTarget(e);
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
    this.sourceId = null;
    this.internalMonitor = e.getMonitor();
  }
}
function _() {
  let e = u();
  return useMemo(() => new k(e), [e]);
}
class E {
  beginDrag() {
    let e = this.spec;
    let r = this.monitor;
    let n = null;
    return null != (n = "object" == typeof e.item ? e.item : "function" == typeof e.item ? e.item(r) : {}) ? n : null;
  }
  canDrag() {
    let e = this.spec;
    let r = this.monitor;
    return "boolean" == typeof e.canDrag ? e.canDrag : "function" != typeof e.canDrag || e.canDrag(r);
  }
  isDragging(e, r) {
    let n = this.spec;
    let i = this.monitor;
    let {
      isDragging
    } = n;
    return isDragging ? isDragging(i) : r === e.getSourceId();
  }
  endDrag() {
    let e = this.spec;
    let r = this.monitor;
    let n = this.connector;
    let {
      end
    } = e;
    end && end(r.getItem(), r);
    n.reconnect();
  }
  constructor(e, r, n) {
    this.spec = e;
    this.monitor = r;
    this.connector = n;
  }
}
function A(e, r, n) {
  let i = useMemo(() => new E(e, r, n), [r, n]);
  useEffect(() => {
    i.spec = e;
  }, [e]);
  return i;
}
function C(e) {
  return useMemo(() => {
    let r = e.type;
    V(null != r, "spec.type must be defined");
    return r;
  }, [e]);
}
function T(e, r, n) {
  let i = u();
  let s = A(e, r, n);
  let o = C(e);
  _$$E(function () {
    if (null != o) {
      let [e, a] = _$$V(o, s, i);
      r.receiveHandlerId(e);
      n.receiveHandlerId(e);
      return a;
    }
  }, [i, r, n, s, o]);
}
export function $$I0(e, r) {
  let n = I(e, r);
  V(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  let a = _();
  let p = O(n.options, n.previewOptions);
  T(n, a, p);
  return [j(n.collect, a, p), h(p), d(p)];
}
export const i = $$I0;