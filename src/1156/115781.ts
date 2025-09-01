import { W } from "../figma_app/304955";
import { zl } from "../figma_app/27355";
import { nM, NJ } from "../figma_app/570630";
export function $$a0(e, t, n) {
  let a = {
    rawUserMessage: e,
    attachments: []
  };
  if (t.length > 0 && t.forEach(e => {
    a.attachments.push({
      type: e.type,
      nodeGuid: e.guid,
      label: ""
    });
  }), n) {
    let e = zl.get(nM);
    let t = W(e, NJ, n[0].fullFilePath);
    a.attachments.push({
      type: "inspectedElement",
      nodeGuid: t?.guid || "",
      label: "",
      inspectedElementSources: n
    });
  }
  return a;
}
export const u = $$a0;