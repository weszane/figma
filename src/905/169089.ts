import { A } from "../905/202425";
export function $$r0(e) {
  switch (e?.input.type) {
    case "input-image":
      return {
        type: "image",
        name: e.input.imageFile.name,
        node: void 0
      };
    case "input-selection":
      if (A(e.input.node)) return {
        type: "image",
        name: e.input.name,
        node: void 0
      };
      return {
        type: "selection",
        name: e.input.name,
        node: e.input.node
      };
    default:
      return;
  }
}
export const s = $$r0;