import { Ay } from "../vendor/224828";
import { A as _$$A } from "../vendor/532378";
import { Ay as _$$Ay } from "../vendor/263336";
class l extends _$$A {}
l.blotName = "list-container";
l.tagName = "OL";
export class $$o0 extends Ay {
  static create(t) {
    let e = super.create();
    e.setAttribute("data-list", t);
    return e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    _$$Ay.register(l);
  }
  constructor(t, e) {
    super(t, e);
    let r = e.ownerDocument.createElement("span");
    let i = r => {
      if (!t.isEnabled()) return;
      let i = this.statics.formats(e, t);
      "checked" === i ? (this.format("list", "unchecked"), r.preventDefault()) : "unchecked" === i && (this.format("list", "checked"), r.preventDefault());
    };
    r.addEventListener("mousedown", i);
    r.addEventListener("touchstart", i);
    this.attachUI(r);
  }
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e);
  }
}
$$o0.blotName = "list";
$$o0.tagName = "LI";
l.allowedChildren = [$$o0];
$$o0.requiredContainer = l;
export const A = $$o0;