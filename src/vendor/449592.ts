import { N } from "../vendor/791199";
import { useState } from "react";
let r = 0;
let i = new Map();
export function $$o0(e) {
  let [t, a] = useState();
  N(() => {
    if (!e) return;
    let t = i.get(e);
    if (t) a(t.element.id);else {
      let u = `react-aria-description-${r++}`;
      a(u);
      let n = document.createElement("div");
      n.id = u;
      n.style.display = "none";
      n.textContent = e;
      document.body.appendChild(n);
      t = {
        refCount: 0,
        element: n
      };
      i.set(e, t);
    }
    t.refCount++;
    return () => {
      t && 0 == --t.refCount && (t.element.remove(), i.$$delete(e));
    };
  }, [e]);
  return {
    "aria-describedby": e ? t : void 0
  };
}
export const I = $$o0;