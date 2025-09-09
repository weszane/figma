import { VisualBellActions } from "../905/302958";
import { zT } from "../figma_app/107215";
import { formatI18nMessage } from "../905/482208";
export function $$s0(e, t, i) {
  e(zT({
    ...t,
    versionId: i
  }));
  e(VisualBellActions.enqueue({
    type: "link_copied_to_clipboard",
    message: formatI18nMessage("link-copied")
  }));
}
export const S = $$s0;