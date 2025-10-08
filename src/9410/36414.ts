import { throwTypeError } from "../figma_app/465776";
import { buildUploadUrl } from "../figma_app/169182";
import { F } from "../figma_app/954027";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { getCurrentFileType } from "../figma_app/976749";
import { TabCategory } from "../905/42189";
import { F5, oM } from "../905/192343";
import { t as _$$t } from "../905/851577";
import { N } from "../905/645480";
import { V7 } from "../9410/139332";
export function $$m0(e) {
  switch (e) {
    case "Table":
      return buildUploadUrl("ac41ded88c50f0359c02ec3927394b7b33e210b6");
    case "CodeBlock":
      return buildUploadUrl("8a035152916712353b045f442c2c6c5879ef3e17");
    case "MindMap":
      return buildUploadUrl("1dd4c6f9e1fbf269895ee58e7be79d9f9ee79b9e");
    default:
      return "";
  }
}
export function $$f1(e) {
  switch (e) {
    case "Table":
      return getI18nString("whiteboard.inserts.table_title");
    case "CodeBlock":
      return getI18nString("whiteboard.inserts.code_block_title");
    case "MindMap":
      return getI18nString("whiteboard.inserts.mind_map_title");
    case "Text":
      return getI18nString("whiteboard.inserts.text_title");
    case "Section":
      return getI18nString("whiteboard.inserts.section_title");
    default:
      throwTypeError(e);
  }
}
export function $$g2(e) {
  let t = "whiteboard" === getCurrentFileType();
  let i = F5();
  let r = V7(e.resource);
  let n = async n => (e.insertAction(n), t && oM({
    type: TabCategory.MORE,
    id: r,
    source: e.triggeredFrom,
    options: {
      ...i,
      query: e.searchQuery
    }
  }), await Promise.resolve());
  return _$$t(e, {
    insertAction: n,
    dragPreviewPointerPosition: N.CENTERED,
    getDragPreviewSrc: e.icon ? () => "data:image/svg+xml;utf8," + F(e.icon) : () => $$m0(e.resource),
    recordingKey: generateRecordingKey(e.triggeredFrom, "whiteboardResource", r)
  });
}
export const AE = $$m0;
export const E = $$f1;
export const Ik = $$g2;