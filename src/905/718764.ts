import { jsx } from "react/jsx-runtime";
import { bk } from "../905/117474";
import { P } from "../905/536340";
export function $$s0(e) {
  return jsx("div", {
    className: P,
    ...e,
    onKeyDown(e) {
      if ("Tab" !== e.key) return;
      let t = e.currentTarget;
      let [i, n] = bk(t);
      if (i === n) {
        e.preventDefault();
        return;
      }
      let a = e.target;
      let s = !e.shiftKey;
      if (a !== i || s) {
        if (a !== n || !s) return;
        i.focus();
      } else n.focus();
      e.preventDefault();
    }
  });
}
$$s0.displayName = "TabLoop";
export const i = $$s0;