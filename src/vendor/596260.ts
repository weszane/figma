import { EmbedBlot } from "../vendor/73046";
import { A as _$$A } from "../vendor/909290";
class s extends EmbedBlot {
  constructor(t, e) {
    super(t, e);
    this.contentNode = document.createElement("span");
    this.contentNode.setAttribute("contenteditable", "false");
    Array.from(this.domNode.childNodes).forEach(t => {
      this.contentNode.appendChild(t);
    });
    this.leftGuard = document.createTextNode("\uFEFF");
    this.rightGuard = document.createTextNode("\uFEFF");
    this.domNode.appendChild(this.leftGuard);
    this.domNode.appendChild(this.contentNode);
    this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e;
    let r = null;
    let i = t.data.split("\uFEFF").join("");
    if (t === this.leftGuard) {
      if (this.prev instanceof _$$A) {
        let t = this.prev.length();
        this.prev.insertAt(t, i);
        r = {
          startNode: this.prev.domNode,
          startOffset: t + i.length
        };
      } else {
        e = document.createTextNode(i);
        this.parent.insertBefore(this.scroll.create(e), this);
        r = {
          startNode: e,
          startOffset: i.length
        };
      }
    } else t === this.rightGuard && (this.next instanceof _$$A ? (this.next.insertAt(0, i), r = {
      startNode: this.next.domNode,
      startOffset: i.length
    }) : (e = document.createTextNode(i), this.parent.insertBefore(this.scroll.create(e), this.next), r = {
      startNode: e,
      startOffset: i.length
    }));
    t.data = "\uFEFF";
    return r;
  }
  update(t, e) {
    t.forEach(t => {
      if ("characterData" === t.type && (t.target === this.leftGuard || t.target === this.rightGuard)) {
        let r = this.restore(t.target);
        r && (e.range = r);
      }
    });
  }
}
export let $$l0 = s;
export const A = $$l0;