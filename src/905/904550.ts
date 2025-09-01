import { sU, Lz, NZ, Pe, Z9 } from "../figma_app/770359";
import { A as _$$A } from "../905/866368";
export class $$a0 {
  constructor() {
    this.handlers = [];
  }
  register(e) {
    this.handlers.push(e);
  }
  unregister(e) {
    let t = this.handlers.indexOf(e);
    -1 !== t && this.handlers.splice(t, 1);
  }
  setHighlightText(e, t, i) {
    for (let n of this.handlers) n.setHighlightText(e, t, i);
  }
}
class s extends _$$A {
  constructor(e, t) {
    super(t);
    this.trigger = e;
    this.editorView = t;
    this.findText = "";
    this.originalPositions = [];
    this.replaceText = "";
    this.decorationsField = sU.define({
      create: () => this.decorations,
      update: (e, t) => this.decorations,
      provide: e => Lz.decorations.from(e)
    });
    e.register(this);
    this.decorations = NZ.none;
  }
  setHighlightText(e, t, i) {
    let r = this.editorView.state.doc.toString();
    if (!this.replaceText) {
      this.findText = e;
      let t = 0;
      for (this.originalPositions = []; -1 !== (t = r.indexOf(this.findText, t));) {
        this.originalPositions.push(t);
        t += this.findText.length;
      }
    }
    let a = [];
    let s = [];
    if (t) {
      let e = this.replaceText ? this.replaceText.length : this.findText.length;
      let i = this.replaceText ? this.originalPositions.map((e, t) => e + (this.replaceText.length - this.findText.length) * t) : this.originalPositions;
      for (let n = 0; n < i.length; n++) {
        let r = i[n];
        s.push(r + (t.length - e) * n);
        a.push({
          from: r,
          to: r + e,
          insert: t
        });
      }
      this.replaceText = t;
    }
    let o = -1;
    let d = [];
    if (this.replaceText) {
      for (let e of s) d.push(NZ.mark({
        class: "cm-replaced-text" + (i ? "-done" : "")
      }).range(e, e + this.replaceText.length));
      o = a.reduce((e, t) => Math.max(e, t.to), 0);
    } else for (let e of this.originalPositions) {
      d.push(NZ.mark({
        class: "cm-highlighted-text"
      }).range(e, e + this.findText.length));
      o = Math.max(o, e + this.findText.length);
    }
    let c = o < 0 ? void 0 : this.editorView.state.doc.lineAt(o).from;
    this.decorations = NZ.set(d);
    this.editorView.dispatch({
      changes: a,
      effects: [l.of(!0)]
    });
    c && this.isAutoScrollAllowed({
      checkNearBottom: !1
    }) && requestAnimationFrame(() => {
      let e = this.editorView.scrollDOM;
      let t = this.editorView.domAtPos(c);
      if (t.node) {
        let i = t.node.offsetTop || 0;
        e.scrollTop = i;
      }
    });
  }
  destroy() {
    this.trigger.unregister(this);
  }
}
let o = Lz.baseTheme({
  ".cm-highlighted-text": {
    backgroundColor: "#ff000033"
  },
  ".cm-replaced-text": {
    backgroundColor: "#00ff0033"
  },
  ".cm-replaced-text-done": {
    backgroundColor: "#00ff0033",
    animation: "fadeOutGreenHighlight 1s ease-out forwards"
  },
  "@keyframes fadeOutGreenHighlight": {
    from: {
      backgroundColor: "#00ff0033"
    },
    to: {
      backgroundColor: "transparent"
    }
  }
});
let l = Pe.define();
export function $$d1(e) {
  return Z9.define(t => new s(e, t), {
    decorations: e => e.decorations,
    provide: () => [o]
  });
}
export const A = $$a0;
export const a = $$d1;