import { Ay as _$$Ay } from "../vendor/263336";
import { Ay as _$$Ay2, zo, Ji } from "../vendor/224828";
import { A as _$$A } from "../vendor/39298";
import { A as _$$A2 } from "../vendor/532378";
import { A as _$$A3 } from "../vendor/658255";
import { A as _$$A4 } from "../vendor/596260";
import { A as _$$A5 } from "../vendor/443964";
import { ScrollBlot, Scope, LeafBlot, ContainerBlot, ParentBlot } from "../vendor/73046";
import $$h0, { AttributeMap, Op } from "../vendor/308080";
import { A as _$$A6 } from "../vendor/505982";
import { A as _$$A7 } from "../vendor/909290";
import { Ay as _$$Ay3 } from "../vendor/937019";
import { A as _$$A8 } from "../vendor/648916";
import { Xo, Ay as _$$Ay4 } from "../vendor/554865";
function f(t) {
  return t instanceof _$$Ay2 || t instanceof zo;
}
function p(t) {
  return "function" == typeof t.updateContent;
}
class g extends ScrollBlot {
  static blotName = "scroll";
  static className = "ql-editor";
  static tagName = "DIV";
  static defaultChild = _$$Ay2;
  static allowedChildren = [_$$Ay2, zo, _$$A2];
  constructor(t, e, r) {
    let {
      emitter
    } = r;
    super(t, e);
    this.emitter = emitter;
    this.batch = !1;
    this.optimize();
    this.enable();
    this.domNode.addEventListener("dragstart", t => this.handleDragStart(t));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    let t = this.batch;
    this.batch = !1;
    this.update(t);
  }
  emitMount(t) {
    this.emitter.emit(_$$A6.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(_$$A6.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(_$$A6.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    let [r, i] = this.line(t);
    let [l] = this.line(t + e);
    if (super.deleteAt(t, e), null != l && r !== l && i > 0) {
      if (r instanceof zo || l instanceof zo) {
        this.optimize();
        return;
      }
      let t = l.children.head instanceof _$$A ? null : l.children.head;
      r.moveChildren(l, t);
      r.remove();
    }
    this.optimize();
  }
  enable() {
    let t = !($$arguments.length > 0) || void 0 === $$arguments[0] || $$arguments[0];
    this.domNode.setAttribute("contenteditable", t ? "true" : "false");
  }
  formatAt(t, e, r, i) {
    super.formatAt(t, e, r, i);
    this.optimize();
  }
  insertAt(t, e, r) {
    if (t >= this.length()) {
      if (null == r || null == this.scroll.query(e, Scope.BLOCK)) {
        let t = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(t);
        null == r && e.endsWith("\n") ? t.insertAt(0, e.slice(0, -1), r) : t.insertAt(0, e, r);
      } else {
        let t = this.scroll.create(e, r);
        this.appendChild(t);
      }
    } else super.insertAt(t, e, r);
    this.optimize();
  }
  insertBefore(t, e) {
    if (t.statics.scope === Scope.INLINE_BLOT) {
      let r = this.scroll.create(this.statics.defaultChild.blotName);
      r.appendChild(t);
      super.insertBefore(r, e);
    } else super.insertBefore(t, e);
  }
  insertContents(t, e) {
    let r = this.deltaToRenderBlocks(e.concat(new $$h0().insert("\n")));
    let i = r.pop();
    if (null == i) return;
    this.batchStart();
    let s = r.shift();
    if (s) {
      let e = "block" === s.type && (0 === s.delta.length() || !this.descendant(zo, t)[0] && t < this.length());
      let r = "block" === s.type ? s.delta : new $$h0().insert({
        [s.key]: s.value
      });
      m(this, t, r);
      let i = "block" === s.type ? 1 : 0;
      let l = t + r.length() + i;
      e && this.insertAt(l - 1, "\n");
      let o = Ji(this.line(t)[0]);
      let a = AttributeMap.diff(o, s.attributes) || {};
      Object.keys(a).forEach(t => {
        this.formatAt(l - 1, 1, t, a[t]);
      });
      t = l;
    }
    let [l, o] = this.children.find(t);
    r.length && (l && (l = l.split(o), o = 0), r.forEach(t => {
      if ("block" === t.type) m(this.createBlock(t.attributes, l || void 0), 0, t.delta);else {
        let e = this.create(t.key, t.value);
        this.insertBefore(e, l || void 0);
        Object.keys(t.attributes).forEach(r => {
          e.format(r, t.attributes[r]);
        });
      }
    }));
    "block" === i.type && i.delta.length() && m(this, l ? l.offset(l.scroll) + o : this.length(), i.delta);
    this.batchEnd();
    this.optimize();
  }
  isEnabled() {
    return "true" === this.domNode.getAttribute("contenteditable");
  }
  leaf(t) {
    let e = this.path(t).pop();
    if (!e) return [null, -1];
    let [r, i] = e;
    return r instanceof LeafBlot ? [r, i] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(f, t);
  }
  lines() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : 0;
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : Number.MAX_VALUE;
    let r = (t, e, i) => {
      let n = [];
      let s = i;
      t.children.forEachAt(e, i, (t, e, i) => {
        f(t) ? n.push(t) : t instanceof ContainerBlot && (n = n.concat(r(t, e, s)));
        s -= i;
      });
      return n;
    };
    return r(this, t, e);
  }
  optimize() {
    let t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : [];
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
    !this.batch && (super.optimize(t, e), t.length > 0 && this.emitter.emit(_$$A6.events.SCROLL_OPTIMIZE, t, e));
  }
  path(t) {
    return super.path(t).slice(1);
  }
  remove() {}
  update(t) {
    if (this.batch) {
      Array.isArray(t) && (this.batch = this.batch.concat(t));
      return;
    }
    let e = _$$A6.sources.USER;
    "string" == typeof t && (e = t);
    Array.isArray(t) || (t = this.observer.takeRecords());
    (t = t.filter(t => {
      let {
        target
      } = t;
      let r = this.find(target, !0);
      return r && !p(r);
    })).length > 0 && this.emitter.emit(_$$A6.events.SCROLL_BEFORE_UPDATE, e, t);
    super.update(t.concat([]));
    t.length > 0 && this.emitter.emit(_$$A6.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, r) {
    let [i] = this.descendant(t => t instanceof zo, t);
    i && i.statics.blotName === e && p(i) && i.updateContent(r);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    let e = [];
    let r = new $$h0();
    t.forEach(t => {
      let i = t?.insert;
      if (i) {
        if ("string" == typeof i) {
          let n = i.split("\n");
          n.slice(0, -1).forEach(i => {
            r.insert(i, t.attributes);
            e.push({
              type: "block",
              delta: r,
              attributes: t.attributes ?? {}
            });
            r = new $$h0();
          });
          let s = n[n.length - 1];
          s && r.insert(s, t.attributes);
        } else {
          let n = Object.keys(i)[0];
          if (!n) return;
          this.query(n, Scope.INLINE) ? r.push(t) : (r.length() && e.push({
            type: "block",
            delta: r,
            attributes: {}
          }), r = new $$h0(), e.push({
            type: "blockEmbed",
            key: n,
            value: i[n],
            attributes: t.attributes ?? {}
          }));
        }
      }
    });
    r.length() && e.push({
      type: "block",
      delta: r,
      attributes: {}
    });
    return e;
  }
  createBlock(t, e) {
    let r;
    let i = {};
    Object.entries(t).forEach(t => {
      let [e, n] = t;
      null != this.query(e, Scope.BLOCK & Scope.BLOT) ? r = e : i[e] = n;
    });
    let n = this.create(r || this.statics.defaultChild.blotName, r ? t[r] : void 0);
    this.insertBefore(n, e || void 0);
    let s = n.length();
    Object.entries(i).forEach(t => {
      let [e, r] = t;
      n.formatAt(0, s, e, r);
    });
    return n;
  }
}
function m(t, e, r) {
  r.reduce((e, r) => {
    let i = Op.length(r);
    let s = r.attributes || {};
    if (null != r.insert) {
      if ("string" == typeof r.insert) {
        let i = r.insert;
        t.insertAt(e, i);
        let [l] = t.descendant(LeafBlot, e);
        let o = Ji(l);
        s = AttributeMap.diff(o, s) || {};
      } else if ("object" == typeof r.insert) {
        let i = Object.keys(r.insert)[0];
        if (null == i) return e;
        if (t.insertAt(e, i, r.insert[i]), null != t.scroll.query(i, Scope.INLINE)) {
          let [r] = t.descendant(LeafBlot, e);
          let i = Ji(r);
          s = AttributeMap.diff(i, s) || {};
        }
      }
    }
    Object.keys(s).forEach(r => {
      t.formatAt(e, i, r, s[r]);
    });
    return e + i;
  }, e);
}
class A extends _$$A8 {
  static DEFAULTS = {
    delay: 1e3,
    maxStack: 100,
    userOnly: !1
  };
  lastRecorded = 0;
  ignoreChange = !1;
  stack = {
    undo: [],
    redo: []
  };
  currentRange = null;
  constructor(t, e) {
    super(t, e);
    this.quill.on(_$$Ay.events.EDITOR_CHANGE, (t, e, r, n) => {
      t === _$$Ay.events.SELECTION_CHANGE ? e && n !== _$$Ay.sources.SILENT && (this.currentRange = e) : t === _$$Ay.events.TEXT_CHANGE && (this.ignoreChange || (this.options.userOnly && n !== _$$Ay.sources.USER ? this.transform(e) : this.record(e, r)), this.currentRange = N(this.currentRange, e));
    });
    this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this));
    this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this));
    /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this));
    this.quill.root.addEventListener("beforeinput", t => {
      "historyUndo" === t.inputType ? (this.undo(), t.preventDefault()) : "historyRedo" === t.inputType && (this.redo(), t.preventDefault());
    });
  }
  change(t, e) {
    if (0 === this.stack[t].length) return;
    let r = this.stack[t].pop();
    if (!r) return;
    let n = this.quill.getContents();
    let s = r.delta.invert(n);
    this.stack[e].push({
      delta: s,
      range: N(r.range, s)
    });
    this.lastRecorded = 0;
    this.ignoreChange = !0;
    this.quill.updateContents(r.delta, _$$Ay.sources.USER);
    this.ignoreChange = !1;
    this.restoreSelection(r);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(t, e) {
    if (0 === t.ops.length) return;
    this.stack.redo = [];
    let r = t.invert(e);
    let i = this.currentRange;
    let n = Date.now();
    if (this.lastRecorded + this.options.delay > n && this.stack.undo.length > 0) {
      let t = this.stack.undo.pop();
      t && (r = r.compose(t.delta), i = t.range);
    } else this.lastRecorded = n;
    0 !== r.length() && (this.stack.undo.push({
      delta: r,
      range: i
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(t) {
    x(this.stack.undo, t);
    x(this.stack.redo, t);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(t) {
    if (t.range) this.quill.setSelection(t.range, _$$Ay.sources.USER);else {
      let e = function (t, e) {
        let r = e.reduce((t, e) => t + (e.$$delete || 0), 0);
        let i = e.length() - r;
        (function (t, e) {
          let r = e.ops[e.ops.length - 1];
          return null != r && (null != r.insert ? "string" == typeof r.insert && r.insert.endsWith("\n") : null != r.attributes && Object.keys(r.attributes).some(e => null != t.query(e, Scope.BLOCK)));
        })(t, e) && (i -= 1);
        return i;
      }(this.quill.scroll, t.delta);
      this.quill.setSelection(e, _$$Ay.sources.USER);
    }
  }
}
function x(t, e) {
  let r = e;
  for (let e = t.length - 1; e >= 0; e -= 1) {
    let i = t[e];
    t[e] = {
      delta: r.transform(i.delta, !0),
      range: i.range && N(i.range, r)
    };
    r = i.delta.transform(r);
    0 === t[e].delta.length() && t.splice(e, 1);
  }
}
function N(t, e) {
  if (!t) return t;
  let r = e.transformPosition(t.index);
  return {
    index: r,
    length: e.transformPosition(t.index + t.length) - r
  };
}
class w extends _$$A8 {
  constructor(t, e) {
    super(t, e);
    t.root.addEventListener("drop", e => {
      e.preventDefault();
      let r = null;
      if (document.caretRangeFromPoint) r = document.caretRangeFromPoint(e.clientX, e.clientY);else if (document.caretPositionFromPoint) {
        let t = document.caretPositionFromPoint(e.clientX, e.clientY);
        (r = document.createRange()).setStart(t.offsetNode, t.offset);
        r.setEnd(t.offsetNode, t.offset);
      }
      let i = r && t.selection.normalizeNative(r);
      if (i) {
        let r = t.selection.normalizedToRange(i);
        e.dataTransfer?.files && this.upload(r, e.dataTransfer.files);
      }
    });
  }
  upload(t, e) {
    let r = [];
    Array.from(e).forEach(t => {
      t && this.options.mimetypes?.includes(t.type) && r.push(t);
    });
    r.length > 0 && this.options.handler.call(this, t, r);
  }
}
w.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(t, e) {
    this.quill.scroll.query("image") && Promise.all(e.map(t => new Promise(e => {
      let r = new FileReader();
      r.onload = () => {
        e(r.result);
      };
      r.readAsDataURL(t);
    }))).then(e => {
      let r = e.reduce((t, e) => t.insert({
        image: e
      }), new $$h0().retain(t.index).$$delete(t.length));
      this.quill.updateContents(r, _$$A6.sources.USER);
      this.quill.setSelection(t.index + e.length, _$$A6.sources.SILENT);
    });
  }
};
let k = ["insertText", "insertReplacementText"];
class q extends _$$A8 {
  constructor(t, e) {
    super(t, e);
    t.root.addEventListener("beforeinput", t => {
      this.handleBeforeInput(t);
    });
    /Android/i.test(navigator.userAgent) || t.on(_$$Ay.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    Xo({
      range: t,
      quill: this.quill
    });
  }
  replaceText(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : "";
    if (0 === t.length) return !1;
    if (e) {
      let r = this.quill.getFormat(t.index, 1);
      this.deleteRange(t);
      this.quill.updateContents(new $$h0().retain(t.index).insert(e, r), _$$Ay.sources.USER);
    } else this.deleteRange(t);
    this.quill.setSelection(t.index + e.length, 0, _$$Ay.sources.SILENT);
    return !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !k.includes(t.inputType)) return;
    let e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || !0 === e.collapsed) return;
    let r = "string" == typeof t.data ? t.data : t.dataTransfer?.types.includes("text/plain") ? t.dataTransfer.getData("text/plain") : null;
    if (null == r) return;
    let i = this.quill.selection.normalizeNative(e);
    let n = i ? this.quill.selection.normalizedToRange(i) : null;
    n && this.replaceText(n, r) && t.preventDefault();
  }
  handleCompositionStart() {
    let t = this.quill.getSelection();
    t && this.replaceText(t);
  }
}
let _ = /Mac/i.test(navigator.platform);
let L = t => "ArrowLeft" === t.key || "ArrowRight" === t.key || "ArrowUp" === t.key || "ArrowDown" === t.key || "Home" === t.key || !!_ && "a" === t.key && !0 === t.ctrlKey;
class O extends _$$A8 {
  isListening = !1;
  selectionChangeDeadline = 0;
  constructor(t, e) {
    super(t, e);
    this.handleArrowKeys();
    this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(t, e) {
        let {
          line,
          event
        } = e;
        if (!(line instanceof ParentBlot) || !line.uiNode) return !0;
        let s = "rtl" === getComputedStyle(line.domNode).direction;
        return !!s && "ArrowRight" !== event.key || !s && "ArrowLeft" !== event.key || (this.quill.setSelection(t.index - 1, t.length + (event.shiftKey ? 1 : 0), _$$Ay.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", t => {
      !t.defaultPrevented && L(t) && this.ensureListeningToSelectionChange();
    });
  }
  ensureListeningToSelectionChange() {
    this.selectionChangeDeadline = Date.now() + 100;
    this.isListening || (this.isListening = !0, document.addEventListener("selectionchange", () => {
      this.isListening = !1;
      Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    }, {
      once: !0
    }));
  }
  handleSelectionChange() {
    let t = document.getSelection();
    if (!t) return;
    let e = t.getRangeAt(0);
    if (!0 !== e.collapsed || 0 !== e.startOffset) return;
    let r = this.quill.scroll.find(e.startContainer);
    if (!(r instanceof ParentBlot) || !r.uiNode) return;
    let i = document.createRange();
    i.setStartAfter(r.uiNode);
    i.setEndAfter(r.uiNode);
    t.removeAllRanges();
    t.addRange(i);
  }
}
_$$Ay.register({
  "blots/block": _$$Ay2,
  "blots/block/embed": zo,
  "blots/break": _$$A,
  "blots/container": _$$A2,
  "blots/cursor": _$$A3,
  "blots/embed": _$$A4,
  "blots/inline": _$$A5,
  "blots/scroll": g,
  "blots/text": _$$A7,
  "modules/clipboard": _$$Ay3,
  "modules/history": A,
  "modules/keyboard": _$$Ay4,
  "modules/uploader": w,
  "modules/input": q,
  "modules/uiNode": O
});
export let $$S1 = _$$Ay;
export const Ru = $$h0;
export const Ay = $$S1;