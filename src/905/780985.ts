import { useState } from "react";
import { flushSync } from "src/vendor/944059";
import { w } from "src/905/937416";
export function $$s0(e, t, i) {
  let [s, l] = useState(!1);
  w([e, t, i], () => {
    let i = o(e.current);
    let n = o(t.current);
    flushSync(() => {
      l(i || n);
    });
  });
  return s;
}
function o(e) {
  return !!e && e.scrollHeight > e.clientHeight;
}
export const C = $$s0;
