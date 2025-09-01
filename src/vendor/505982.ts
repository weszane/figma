import { A as _$$A } from "../vendor/53968";
import i from "../vendor/125307";
import { A as _$$A2 } from "../vendor/241794";
let s = _$$A("quill:events");
["selectionchange", "mousedown", "mouseup", "click"].forEach(t => {
  document.addEventListener(t, function () {
    for (t = $$arguments.length, e = Array(t), r = 0, void 0; r < t; r++) {
      var t;
      var e;
      var r;
      e[r] = $$arguments[r];
    }
    Array.from(document.querySelectorAll(".ql-container")).forEach(t => {
      let r = _$$A2.get(t);
      r && r.emitter && r.emitter.handleDOM(...e);
    });
  });
});
export let $$l0 = class extends i {
  static events = {
    EDITOR_CHANGE: "editor-change",
    SCROLL_BEFORE_UPDATE: "scroll-before-update",
    SCROLL_BLOT_MOUNT: "scroll-blot-mount",
    SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
    SCROLL_OPTIMIZE: "scroll-optimize",
    SCROLL_UPDATE: "scroll-update",
    SCROLL_EMBED_UPDATE: "scroll-embed-update",
    SELECTION_CHANGE: "selection-change",
    TEXT_CHANGE: "text-change",
    COMPOSITION_BEFORE_START: "composition-before-start",
    COMPOSITION_START: "composition-start",
    COMPOSITION_BEFORE_END: "composition-before-end",
    COMPOSITION_END: "composition-end"
  };
  static sources = {
    API: "api",
    SILENT: "silent",
    USER: "user"
  };
  constructor() {
    super();
    this.domListeners = {};
    this.on("error", s.error);
  }
  emit() {
    for (t = $$arguments.length, e = Array(t), r = 0, void 0; r < t; r++) {
      var t;
      var e;
      var r;
      e[r] = $$arguments[r];
    }
    s.log.call(s, ...e);
    return super.emit(...e);
  }
  handleDOM(t) {
    for (e = $$arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1, void 0; i < e; i++) {
      var e;
      var r;
      var i;
      r[i - 1] = $$arguments[i];
    }
    (this.domListeners[t.type] || []).forEach(e => {
      let {
        node,
        handler
      } = e;
      (t.target === node || node.contains(t.target)) && handler(t, ...r);
    });
  }
  listenDOM(t, e, r) {
    this.domListeners[t] || (this.domListeners[t] = []);
    this.domListeners[t].push({
      node: e,
      handler: r
    });
  }
};
export const A = $$l0;