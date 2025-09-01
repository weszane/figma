import { A as _$$A } from "../vendor/53968";
import { Scope, LeafBlot } from "../vendor/73046";
import { A as _$$A2 } from "../vendor/783177";
import { A as _$$A3 } from "../vendor/503807";
import { A as _$$A4 } from "../vendor/505982";
let o = _$$A("quill:selection");
export class $$a1 {
  constructor(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : 0;
    this.index = t;
    this.length = e;
  }
}
function c(t, e) {
  try {
    e.parentNode;
  } catch (t) {
    return !1;
  }
  return t.contains(e);
}
export let $$u0 = class {
  constructor(t, e) {
    this.emitter = e;
    this.scroll = t;
    this.composing = !1;
    this.mouseDown = !1;
    this.root = this.scroll.domNode;
    this.cursor = this.scroll.create("cursor", this);
    this.savedRange = new $$a1(0, 0);
    this.lastRange = this.savedRange;
    this.lastNative = null;
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM("selectionchange", document, () => {
      this.mouseDown || this.composing || setTimeout(this.update.bind(this, _$$A4.sources.USER), 1);
    });
    this.emitter.on(_$$A4.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      let t = this.getNativeRange();
      null != t && t.start.node !== this.cursor.textNode && this.emitter.once(_$$A4.events.SCROLL_UPDATE, (e, r) => {
        try {
          this.root.contains(t.start.node) && this.root.contains(t.end.node) && this.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset);
          let i = r.some(t => "characterData" === t.type || "childList" === t.type || "attributes" === t.type && t.target === this.root);
          this.update(i ? _$$A4.sources.SILENT : e);
        } catch (t) {}
      });
    });
    this.emitter.on(_$$A4.events.SCROLL_OPTIMIZE, (t, e) => {
      if (e.range) {
        let {
          startNode,
          startOffset,
          endNode,
          endOffset
        } = e.range;
        this.setNativeRange(startNode, startOffset, endNode, endOffset);
        this.update(_$$A4.sources.SILENT);
      }
    });
    this.update(_$$A4.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(_$$A4.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    });
    this.emitter.on(_$$A4.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        let t = this.cursor.restore();
        t && setTimeout(() => {
          this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    });
    this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1;
      this.update(_$$A4.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(t, e) {
    this.scroll.update();
    let r = this.getNativeRange();
    if (!(null == r || !r.$$native.collapsed || this.scroll.query(t, Scope.BLOCK))) {
      if (r.start.node !== this.cursor.textNode) {
        let t = this.scroll.find(r.start.node, !1);
        if (null == t) return;
        if (t instanceof LeafBlot) {
          let e = t.split(r.start.offset);
          t.parent.insertBefore(this.cursor, e);
        } else t.insertBefore(this.cursor, r.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t, e);
      this.scroll.optimize();
      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
      this.update();
    }
  }
  getBounds(t) {
    let e;
    let r;
    let i = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : 0;
    let n = this.scroll.length();
    i = Math.min((t = Math.min(t, n - 1)) + i, n - 1) - t;
    let [s, l] = this.scroll.leaf(t);
    if (null == s) return null;
    if (i > 0 && l === s.length()) {
      let [e] = this.scroll.leaf(t + 1);
      if (e) {
        let [r] = this.scroll.line(t);
        let [i] = this.scroll.line(t + 1);
        r === i && (s = e, l = 0);
      }
    }
    [e, l] = s.position(l, !0);
    let o = document.createRange();
    if (i > 0) return (o.setStart(e, l), [s, l] = this.scroll.leaf(t + i), null == s) ? null : ([e, l] = s.position(l, !0), o.setEnd(e, l), o.getBoundingClientRect());
    let a = "left";
    if (e instanceof Text) {
      if (!e.data.length) return null;
      l < e.data.length ? (o.setStart(e, l), o.setEnd(e, l + 1)) : (o.setStart(e, l - 1), o.setEnd(e, l), a = "right");
      r = o.getBoundingClientRect();
    } else {
      if (!(s.domNode instanceof Element)) return null;
      r = s.domNode.getBoundingClientRect();
      l > 0 && (a = "right");
    }
    return {
      bottom: r.top + r.height,
      height: r.height,
      left: r[a],
      right: r[a],
      top: r.top,
      width: 0
    };
  }
  getNativeRange() {
    let t = document.getSelection();
    if (null == t || t.rangeCount <= 0) return null;
    let e = t.getRangeAt(0);
    if (null == e) return null;
    let r = this.normalizeNative(e);
    o.info("getNativeRange", r);
    return r;
  }
  getRange() {
    let t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected) return [null, null];
    let e = this.getNativeRange();
    return null == e ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || null != document.activeElement && c(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    let e = [[t.start.node, t.start.offset]];
    t.$$native.collapsed || e.push([t.end.node, t.end.offset]);
    let r = e.map(t => {
      let [e, r] = t;
      let n = this.scroll.find(e, !0);
      let s = n.offset(this.scroll);
      return 0 === r ? s : n instanceof LeafBlot ? s + n.index(e, r) : s + n.length();
    });
    let n = Math.min(Math.max(...r), this.scroll.length() - 1);
    let s = Math.min(n, ...r);
    return new $$a1(s, n - s);
  }
  normalizeNative(t) {
    if (!c(this.root, t.startContainer) || !t.collapsed && !c(this.root, t.endContainer)) return null;
    let e = {
      start: {
        node: t.startContainer,
        offset: t.startOffset
      },
      end: {
        node: t.endContainer,
        offset: t.endOffset
      },
      native: t
    };
    [e.start, e.end].forEach(t => {
      let {
        node,
        offset
      } = t;
      for (; !(node instanceof Text) && node.childNodes.length > 0;) if (node.childNodes.length > offset) {
        e = node.childNodes[offset];
        r = 0;
      } else if (node.childNodes.length === offset) (e = node.lastChild) instanceof Text ? r = node.data.length : r = node.childNodes.length > 0 ? node.childNodes.length : node.childNodes.length + 1;else break;
      t.node = node;
      t.offset = offset;
    });
    return e;
  }
  rangeToNative(t) {
    let e = this.scroll.length();
    let r = (t, r) => {
      t = Math.min(e - 1, t);
      let [i, n] = this.scroll.leaf(t);
      return i ? i.position(n, r) : [null, -1];
    };
    return [...r(t.index, !1), ...r(t.index + t.length, !0)];
  }
  setNativeRange(t, e) {
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : t;
    let i = $$arguments.length > 3 && void 0 !== $$arguments[3] ? $$arguments[3] : e;
    let n = $$arguments.length > 4 && void 0 !== $$arguments[4] && $$arguments[4];
    if (o.info("setNativeRange", t, e, r, i), null != t && (null == this.root.parentNode || null == t.parentNode || null == r.parentNode)) return;
    let s = document.getSelection();
    if (null != s) {
      if (null != t) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        let {
          native: _native
        } = this.getNativeRange() || {};
        if (null == _native || n || t !== _native.startContainer || e !== _native.startOffset || r !== _native.endContainer || i !== _native.endOffset) {
          t instanceof Element && "BR" === t.tagName && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode);
          r instanceof Element && "BR" === r.tagName && (i = Array.from(r.parentNode.childNodes).indexOf(r), r = r.parentNode);
          let n = document.createRange();
          n.setStart(t, e);
          n.setEnd(r, i);
          s.removeAllRanges();
          s.addRange(n);
        }
      } else {
        s.removeAllRanges();
        this.root.blur();
      }
    }
  }
  setRange(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] && $$arguments[1];
    let r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : _$$A4.sources.API;
    if ("string" == typeof e && (r = e, e = !1), o.info("setRange", t), null != t) {
      let r = this.rangeToNative(t);
      this.setNativeRange(...r, e);
    } else this.setNativeRange(null);
    this.update(r);
  }
  update() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : _$$A4.sources.USER;
    let e = this.lastRange;
    let [r, i] = this.getRange();
    if (this.lastRange = r, this.lastNative = i, null != this.lastRange && (this.savedRange = this.lastRange), !_$$A2(e, this.lastRange)) {
      if (!this.composing && null != i && i.$$native.collapsed && i.start.node !== this.cursor.textNode) {
        let t = this.cursor.restore();
        t && this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
      }
      let r = [_$$A4.events.SELECTION_CHANGE, _$$A3(this.lastRange), _$$A3(e), t];
      this.emitter.emit(_$$A4.events.EDITOR_CHANGE, ...r);
      t !== _$$A4.sources.SILENT && this.emitter.emit(...r);
    }
  }
};
export const A = $$u0;
export const Q = $$a1;