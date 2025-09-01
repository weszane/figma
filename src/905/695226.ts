import { useRef } from "react";
import { y } from "../905/987614";
import { SI } from "../905/705398";
import { fh, c7 } from "../905/914656";
export function $$$$o0(e) {
  let t = useRef(0);
  return function (i) {
    if (e?.(i), "mouse" !== i.pointerType) return;
    let n = i.target;
    if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return;
    let o = SI(i.currentTarget);
    if (!o || (o.focus(), n instanceof HTMLButtonElement)) return;
    o.setPointerCapture(i.pointerId);
    o.setAttribute("data-faux-focus", "");
    setTimeout(() => {
      o.focus();
      o.removeAttribute("data-faux-focus");
    });
    0 > y(n, o) ? fh(o) : c7(o);
    let l = Date.now();
    l - t.current < 500 && o.select();
    t.current = l;
  };
}
export const o = $$$$o0;