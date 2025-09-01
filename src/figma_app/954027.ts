import { flushSync } from "../vendor/944059";
import { H } from "react-dom";
export function $$a0(e, t = document.createElement("div")) {
  let r = H(t);
  flushSync(() => {
    r.render(e);
  });
  return t.innerHTML;
}
export const F = $$a0;