import { ic, J6 } from "../figma_app/617606";
import { ChatMessageType, Fullscreen } from "../figma_app/763686";
import { throwIf } from "../905/419236";
export function $$a1(e, t, n) {
  let a = ic(ChatMessageType.SYSTEM_MESSAGE, e.id, () => (throwIf(void 0 !== Fullscreen, "Fullscreen must be defined"), Fullscreen.generateUniqueID()));
  a.textContent = J6({
    type: "restore",
    codeSnapshot: t,
    plainText: "",
    title: n
  });
  return a;
}
export function $$l2(e, t, n, a) {
  let l = ic(ChatMessageType.SYSTEM_MESSAGE, e.id, () => (throwIf(void 0 !== Fullscreen, "Fullscreen must be defined"), Fullscreen.generateUniqueID()));
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
  let n = ic(ChatMessageType.SYSTEM_MESSAGE, e.id, () => (throwIf(void 0 !== Fullscreen, "Fullscreen must be defined"), Fullscreen.generateUniqueID()));
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