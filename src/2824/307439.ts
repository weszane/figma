import { u } from "../2824/462801";
import { e as _$$e } from "../2824/94639";
if (443 == require.j) {}
if (443 == require.j) {}
let a = () => ({
  name: "singleTextNode",
  description: "When we see a single text child in an element, we use auto-layout to position the text node within the parent element, translating flexbox and text-align properties to the corresponding auto-layout properties.",
  onPostVisit(e, t, i, a) {
    if (1 !== t.nodeType || 1 !== a.length || 3 !== a[0].element.nodeType) return;
    let n = a[0].node;
    u(i, t);
    _$$e(i, t);
    let o = "flex" === t.styles.display;
    n.stackChildPrimaryGrow = o ? 0 : 1;
    n.textAutoResize = o ? "WIDTH_AND_HEIGHT" : "HEIGHT";
    i.appendChild(n);
    return [{
      ctx: e,
      element: t,
      node: i
    }];
  }
});
let $$n0 = () => [a()];
export const b = $$n0;