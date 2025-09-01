import { BlockBlot, LeafBlot, Scope, EmbedBlot, AttributorStore } from "../vendor/73046";
import n from "../vendor/308080";
import { A } from "../vendor/39298";
import { A as _$$A } from "../vendor/443964";
import { A as _$$A2 } from "../vendor/909290";
export class $$a0 extends BlockBlot {
  cache = {};
  delta() {
    null == this.cache.delta && (this.cache.delta = function (t) {
      let e = !($$arguments.length > 1) || void 0 === $$arguments[1] || $$arguments[1];
      return t.descendants(LeafBlot).reduce((t, r) => 0 === r.length() ? t : t.insert(r.value(), $$u1(r, {}, e)), new n()).insert("\n", $$u1(t));
    }(this));
    return this.cache.delta;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e);
    this.cache = {};
  }
  formatAt(t, e, r, n) {
    e <= 0 || (this.scroll.query(r, Scope.BLOCK) ? t + e === this.length() && this.format(r, n) : super.formatAt(t, Math.min(e, this.length() - t - 1), r, n), this.cache = {});
  }
  insertAt(t, e, r) {
    if (null != r) {
      super.insertAt(t, e, r);
      this.cache = {};
      return;
    }
    if (0 === e.length) return;
    let i = e.split("\n");
    let n = i.shift();
    n.length > 0 && (t < this.length() - 1 || null == this.children.tail ? super.insertAt(Math.min(t, this.length() - 1), n) : this.children.tail.insertAt(this.children.tail.length(), n), this.cache = {});
    let s = this;
    i.reduce((t, e) => ((s = s.split(t, !0)).insertAt(0, e), e.length), t + n.length);
  }
  insertBefore(t, e) {
    let {
      head
    } = this.children;
    super.insertBefore(t, e);
    head instanceof A && head.remove();
    this.cache = {};
  }
  length() {
    null == this.cache.length && (this.cache.length = super.length() + 1);
    return this.cache.length;
  }
  moveChildren(t, e) {
    super.moveChildren(t, e);
    this.cache = {};
  }
  optimize(t) {
    super.optimize(t);
    this.cache = {};
  }
  path(t) {
    return super.path(t, !0);
  }
  removeChild(t) {
    super.removeChild(t);
    this.cache = {};
  }
  split(t) {
    let e = $$arguments.length > 1 && void 0 !== $$arguments[1] && $$arguments[1];
    if (e && (0 === t || t >= this.length() - 1)) {
      let e = this.clone();
      return 0 === t ? (this.parent.insertBefore(e, this), this) : (this.parent.insertBefore(e, this.next), e);
    }
    let r = super.split(t, e);
    this.cache = {};
    return r;
  }
}
$$a0.blotName = "block";
$$a0.tagName = "P";
$$a0.defaultChild = A;
$$a0.allowedChildren = [A, _$$A, EmbedBlot, _$$A2];
export class $$c2 extends EmbedBlot {
  attach() {
    super.attach();
    this.attributes = new AttributorStore(this.domNode);
  }
  delta() {
    return new n().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t, e) {
    let r = this.scroll.query(t, Scope.BLOCK_ATTRIBUTE);
    null != r && this.attributes.attribute(r, e);
  }
  formatAt(t, e, r, i) {
    this.format(r, i);
  }
  insertAt(t, e, r) {
    if (null != r) {
      super.insertAt(t, e, r);
      return;
    }
    let i = e.split("\n");
    let n = i.pop();
    let s = i.map(t => {
      let e = this.scroll.create($$a0.blotName);
      e.insertAt(0, t);
      return e;
    });
    let l = this.split(t);
    s.forEach(t => {
      this.parent.insertBefore(t, l);
    });
    n && this.parent.insertBefore(this.scroll.create("text", n), l);
  }
}
export function $$u1(t) {
  let e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
  let r = !($$arguments.length > 2) || void 0 === $$arguments[2] || $$arguments[2];
  return null == t ? e : ("formats" in t && "function" == typeof t.formats && (e = {
    ...e,
    ...t.formats()
  }, r && delete e["code-token"]), null == t.parent || "scroll" === t.parent.statics.blotName || t.parent.statics.scope !== t.statics.scope) ? e : $$u1(t.parent, e, r);
}
$$c2.scope = Scope.BLOCK_BLOT;
export const Ay = $$a0;
export const Ji = $$u1;
export const zo = $$c2;