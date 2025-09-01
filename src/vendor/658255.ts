import { EmbedBlot, Scope } from "../vendor/73046";
import { A as _$$A } from "../vendor/909290";
class s extends EmbedBlot {
  static blotName = "cursor";
  static className = "ql-cursor";
  static tagName = "span";
  static CONTENTS = "\uFEFF";
  static value() {}
  constructor(t, e, r) {
    super(t, e);
    this.selection = r;
    this.textNode = document.createTextNode(s.CONTENTS);
    this.domNode.appendChild(this.textNode);
    this.savedLength = 0;
  }
  detach() {
    null != this.parent && this.parent.removeChild(this);
  }
  format(t, e) {
    if (0 !== this.savedLength) {
      super.format(t, e);
      return;
    }
    let r = this;
    let n = 0;
    for (; null != r && r.statics.scope !== Scope.BLOCK_BLOT;) {
      n += r.offset(r.parent);
      r = r.parent;
    }
    null != r && (this.savedLength = s.CONTENTS.length, r.optimize(), r.formatAt(n, s.CONTENTS.length, t, e), this.savedLength = 0);
  }
  index(t, e) {
    return t === this.textNode ? 0 : super.index(t, e);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove();
    this.parent = null;
  }
  restore() {
    let t;
    if (this.selection.composing || null == this.parent) return null;
    let e = this.selection.getNativeRange();
    for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    let r = this.prev instanceof _$$A ? this.prev : null;
    let i = r ? r.length() : 0;
    let l = this.next instanceof _$$A ? this.next : null;
    let o = l ? l.text : "";
    let {
      textNode
    } = this;
    let c = textNode.data.split(s.CONTENTS).join("");
    if (textNode.data = s.CONTENTS, r) {
      t = r;
      (c || l) && (r.insertAt(r.length(), c + o), l && l.remove());
    } else if (l) {
      t = l;
      l.insertAt(0, c);
    } else {
      let e = document.createTextNode(c);
      t = this.scroll.create(e);
      this.parent.insertBefore(t, this);
    }
    if (this.remove(), e) {
      let n = (t, e) => r && t === r.domNode ? e : t === textNode ? i + e - 1 : l && t === l.domNode ? i + c.length + e : null;
      let s = n(e.start.node, e.start.offset);
      let o = n(e.end.node, e.end.offset);
      if (null !== s && null !== o) return {
        startNode: t.domNode,
        startOffset: s,
        endNode: t.domNode,
        endOffset: o
      };
    }
    return null;
  }
  update(t, e) {
    if (t.some(t => "characterData" === t.type && t.target === this.textNode)) {
      let t = this.restore();
      t && (e.range = t);
    }
  }
  optimize(t) {
    super.optimize(t);
    let {
      parent
    } = this;
    for (; parent;) {
      if ("A" === parent.domNode.tagName) {
        this.savedLength = s.CONTENTS.length;
        parent.isolate(this.offset(parent), this.length()).unwrap();
        this.savedLength = 0;
        break;
      }
      e = parent.parent;
    }
  }
  value() {
    return "";
  }
}
export let $$l0 = s;
export const A = $$l0;