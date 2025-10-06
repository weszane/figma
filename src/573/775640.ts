import { jsx, jsxs } from "react/jsx-runtime";
import { TrackingProvider } from "../figma_app/831799";
import { useNonMixedSelectionPropertyValue } from "../905/275640";
import { useSceneGraphSelection } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { useCachedSubtree } from "../figma_app/679183";
import { TrackingKeyEnum } from "../905/696396";
import { Q } from "../9314/475980";
import { Mw, ON } from "../3276/43946";
import { t as _$$t } from "../figma_app/440177";
import { A } from "../6020/852410";
export function $$g0({
  scrollContainer: e
}) {
  let t = selectCurrentFile();
  let s = useSceneGraphSelection();
  let g = useNonMixedSelectionPropertyValue("prototypeStartingPointsInfo");
  let y = !g || g.length > 0;
  let m = 0 === Object.keys(s).length;
  let f = t?.canEdit;
  let b = jsx(useCachedSubtree, {
    isVisible: m && !f && y,
    children: () => jsx(A, {
      viewOnly: !0
    })
  });
  let x = jsx(useCachedSubtree, {
    isVisible: m,
    children: () => jsx(Q, {
      recordingKey: "code-local-styles",
      scrollContainer: e
    }, "code-local-styles")
  });
  return jsxs(TrackingProvider, {
    name: TrackingKeyEnum.CODE_PANEL,
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