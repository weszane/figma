import { F } from "../905/302958";
import { zT } from "../figma_app/107215";
import { A } from "../905/482208";
export function $$s0(e, t, i) {
  e(zT({
    ...t,
    versionId: i
  }));
  e(F.enqueue({
    type: "link_copied_to_clipboard",
    message: A("link-copied")
  }));
}
export const S = $$s0;