import { jsx } from "react/jsx-runtime";
import { Fz } from "../figma_app/106207";
import { fG } from "../figma_app/973927";
import { n as _$$n } from "../905/79930";
import { Vq, Rt } from "../figma_app/979658";
import { cX } from "../figma_app/920333";
import { S, N } from "../1291/885929";
import { sk } from "../1291/472727";
export function $$u0(e) {
  let {
    isInsertingTemplate
  } = Fz();
  let {
    tabManager,
    setPreviewResource
  } = cX();
  let m = Vq(tabManager.activeTab);
  let _ = fG();
  return jsx("div", {
    className: sk,
    children: e.templates.length ? e.templates.map(s => {
      let {
        primaryKey
      } = _(s);
      return jsx(S, {
        template: s,
        templateInsertionLocation: e.templateInsertionLocation,
        triggeredFrom: m,
        isInsertingTemplate: isInsertingTemplate(primaryKey),
        onClickTitle: s.type === _$$n.HubFile ? () => {
          setPreviewResource({
            id: s.template.id,
            type: Rt.TEMPLATES
          });
        } : void 0
      }, primaryKey);
    }) : jsx(N, {})
  });
}
$$u0.displayName = "BrowseTemplatesGrid";
export const g = $$u0;