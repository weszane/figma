import { Ay as _$$Ay } from "../vendor/224828";
import { A } from "../vendor/39298";
import { A as _$$A } from "../vendor/658255";
import { A as _$$A2 } from "../vendor/443964";
import { X, A as _$$A3 } from "../vendor/909290";
import { A as _$$A4 } from "../vendor/532378";
import { Ay as _$$Ay2 } from "../vendor/263336";
class u extends _$$A4 {
  static create(t) {
    let e = super.create(t);
    e.setAttribute("spellcheck", "false");
    return e;
  }
  code(t, e) {
    return this.children.map(t => 1 >= t.length() ? "" : t.domNode.innerText).join("\n").slice(t, t + e);
  }
  html(t, e) {
    return `<pre>
${X(this.code(t, e))}
</pre>`;
  }
}
export class $$h0 extends _$$Ay {
  static TAB = "  ";
  static register() {
    _$$Ay2.register(u);
  }
}
export class $$d1 extends _$$A2 {}
$$d1.blotName = "code";
$$d1.tagName = "CODE";
$$h0.blotName = "code-block";
$$h0.className = "ql-code-block";
$$h0.tagName = "DIV";
u.blotName = "code-block-container";
u.className = "ql-code-block-container";
u.tagName = "DIV";
u.allowedChildren = [$$h0];
$$h0.allowedChildren = [_$$A3, A, _$$A];
$$h0.requiredContainer = u;
export const Ay = $$h0;
export const Cy = $$d1;