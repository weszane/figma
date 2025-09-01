import { jsx, jsxs } from "react/jsx-runtime";
import { fu } from "../figma_app/831799";
import { Gt } from "../905/275640";
import { KH } from "../figma_app/722362";
import { q5 } from "../figma_app/516028";
import { VF } from "../figma_app/679183";
import { e0 } from "../905/696396";
import { Q } from "../9314/475980";
import { Mw, ON } from "../3276/43946";
import { t as _$$t } from "../figma_app/440177";
import { A } from "../6020/852410";
export function $$g0({
  scrollContainer: e
}) {
  let t = q5();
  let s = KH();
  let g = Gt("prototypeStartingPointsInfo");
  let y = !g || g.length > 0;
  let m = 0 === Object.keys(s).length;
  let f = t?.canEdit;
  let b = jsx(VF, {
    isVisible: m && !f && y,
    children: () => jsx(A, {
      viewOnly: !0
    })
  });
  let x = jsx(VF, {
    isVisible: m,
    children: () => jsx(Q, {
      recordingKey: "code-local-styles",
      scrollContainer: e
    }, "code-local-styles")
  });
  return jsxs(fu, {
    name: e0.CODE_PANEL,
    children: [jsx(Mw, {
      panelName: ON.INSPECT
    }), jsx(_$$t, {
      recordingKey: "inspectionPanel",
      flowPanel: b,
      localStylesPanel: x
    }, "inspection-properties-panel")]
  });
}
export const q = $$g0;