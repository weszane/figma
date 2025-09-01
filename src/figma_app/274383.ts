import { createContext } from "react";
export function $$i2(e, t) {
  switch (t.type) {
    case "start click":
      return {
        ...e,
        shouldFinishClick: !0
      };
    case "start drag":
      return {
        ...e,
        draggedTool: t.tool
      };
    case "end drag":
      return {
        ...e,
        draggedTool: void 0
      };
    case "toggle drag cancellable":
      return {
        ...e,
        draggedToolCanCancel: !e.draggedToolCanCancel
      };
    case "cancel drag":
      return {
        ...e,
        draggedTool: void 0,
        shouldFinishClick: !1
      };
    case "end insert":
      return {
        ...e,
        shouldFinishClick: !1
      };
    default:
      return e;
  }
}
let $$a0 = {
  draggedTool: void 0,
  draggedToolCanCancel: !0,
  shouldFinishClick: !0
};
let $$s1 = createContext({
  state: $$a0,
  dispatch: () => null
});
export const Wp = $$a0;
export const nS = $$s1;
export const pw = $$i2;