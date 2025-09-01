import { A as _$$A } from "../vendor/443964";
export class $$n0 extends _$$A {
  static blotName = "link";
  static tagName = "A";
  static SANITIZED_URL = "about:blank";
  static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
  static create(t) {
    let e = super.create(t);
    e.setAttribute("href", this.sanitize(t));
    e.setAttribute("rel", "noopener noreferrer");
    e.setAttribute("target", "_blank");
    return e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return !function (t, e) {
      let r = document.createElement("a");
      r.href = t;
      let i = r.href.slice(0, r.href.indexOf(":"));
      return e.indexOf(i) > -1;
    }(t, this.PROTOCOL_WHITELIST) ? this.SANITIZED_URL : t;
  }
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("href", this.constructor.sanitize(e)) : super.format(t, e);
  }
}
export const A = $$n0;