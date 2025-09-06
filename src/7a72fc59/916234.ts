import { jsxs, jsx } from "react/jsx-runtime";
import { $n } from "../905/521428";
import { glU } from "../figma_app/763686";
import { Pt } from "../figma_app/806412";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { Zk } from "../figma_app/626177";
import { Ad } from "../figma_app/811257";
export function $$u0({
  recordingKey: e,
  numSelected: t
}) {
  let n = renderI18nText("fullscreen.properties_panel.vector_operation.update_text", {
    numNodes: t ?? 1
  });
  let u = renderI18nText("fullscreen.properties_panel.vector_operation.update_button");
  return jsxs(Zk, {
    children: [jsx("p", {
      className: _$$s.pl16.pr16.mb12.font11.$,
      children: n
    }), jsx(Ad, {
      label: null,
      input: jsx($n, {
        variant: "secondary",
        onClick: () => {
          glU.upgradeToLatestVectorOperationVersion();
        },
        recordingKey: Pt(e, "updateBoolean"),
        children: u
      })
    })]
  });
}
export const x = $$u0;