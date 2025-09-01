import { ic, J6 } from "../figma_app/617606";
import { K$p, glU } from "../figma_app/763686";
import { throwIf } from "../905/419236";
export function $$a1(e, t, n) {
  let a = ic(K$p.SYSTEM_MESSAGE, e.id, () => (throwIf(void 0 !== glU, "Fullscreen must be defined"), glU.generateUniqueID()));
  a.textContent = J6({
    type: "restore",
    codeSnapshot: t,
    plainText: "",
    title: n
  });
  return a;
}
export function $$l2(e, t, n, a) {
  let l = ic(K$p.SYSTEM_MESSAGE, e.id, () => (throwIf(void 0 !== glU, "Fullscreen must be defined"), glU.generateUniqueID()));
  l.textContent = J6({
    type: "manual_edit",
    changedFiles: t,
    codeSnapshot: n,
    plainText: "",
    title: a
  });
  return l;
}
export function $$o0(e, t) {
  let n = ic(K$p.SYSTEM_MESSAGE, e.id, () => (throwIf(void 0 !== glU, "Fullscreen must be defined"), glU.generateUniqueID()));
  n.textContent = J6({
    type: "duplicated_file",
    fileKeyHash: t,
    plainText: ""
  });
  return n;
}
export const IO = $$o0;
export const Zi = $$a1;
export const xD = $$l2;