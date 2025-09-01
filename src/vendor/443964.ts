import { InlineBlot, EmbedBlot, Scope } from "../vendor/73046";
import { A as _$$A } from "../vendor/39298";
import { A as _$$A2 } from "../vendor/909290";
class l extends InlineBlot {
  static allowedChildren = [l, _$$A, EmbedBlot, _$$A2];
  static order = ["cursor", "inline", "link", "underline", "strike", "italic", "bold", "script", "code"];
  static compare(t, e) {
    let r = l.order.indexOf(t);
    let i = l.order.indexOf(e);
    return r >= 0 || i >= 0 ? r - i : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, r, n) {
    if (0 > l.compare(this.statics.blotName, r) && this.scroll.query(r, Scope.BLOT)) {
      let i = this.isolate(t, e);
      n && i.wrap(r, n);
    } else super.formatAt(t, e, r, n);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof l && l.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      let t = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(t);
      t.wrap(this);
    }
  }
}
export let $$o0 = l;
export const A = $$o0;