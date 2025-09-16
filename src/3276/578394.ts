import { CustomPosition } from "../figma_app/763686";
import { generateRecordingKey } from "../figma_app/878298";
import { getCurrentFileType } from "../figma_app/976749";
import { Fz } from "../figma_app/106207";
import { fG } from "../figma_app/973927";
import { t } from "../905/851577";
import { N } from "../905/645480";
import { p } from "../905/42189";
import { F5, oM } from "../905/192343";
export function $$u0(e) {
  let {
    insertTemplate
  } = Fz();
  let n = "whiteboard" === getCurrentFileType();
  let u = F5();
  let {
    primaryKey,
    imageUrl
  } = fG()(e.resource);
  let f = async a => {
    let {
      dropPosition,
      isClick
    } = a;
    n && oM({
      id: e.resource.template.id,
      type: p.TEMPLATES,
      source: e.triggeredFrom,
      options: {
        ...u,
        query: e.searchQuery
      }
    });
    return await insertTemplate({
      template: e.resource,
      templateInsertionDirection: isClick ? CustomPosition.RIGHT : CustomPosition.CUSTOM_POSITION,
      templateCustomPosition: isClick ? void 0 : dropPosition,
      triggeredFrom: e.triggeredFrom
    });
  };
  return t(e, {
    insertAction: f,
    dragPreviewPointerPosition: N.RELATIVE,
    getDragPreviewSrc: () => imageUrl || "",
    recordingKey: generateRecordingKey("template", primaryKey)
  });
}
export const B = $$u0;