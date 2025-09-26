import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { AppStateTsApi } from "../figma_app/763686";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { createLoadedState } from "../905/723791";
import { renderI18nText } from "../905/303541";
import { getObservableValue } from "../figma_app/84367";
import { WZ } from "../905/893645";
import { ArrowPosition } from "../905/858282";
import { xT } from "../figma_app/195407";
import { oh } from "../905/526509";
import { c8 } from "../2b17fec9/446151";
import { ke } from "../9410/757252";
let $$_2 = "figjam-shapes-sidebar-onboarding-key";
let $$x0 = "figjam-developer-shapes-onboarding-key";
let $$g1 = "figjam-more-shapes-onboarding-key";
export function $$j3({
  complete: e
}) {
  let [t, i] = useAtomValueAndSetter(oh);
  let j = getObservableValue(AppStateTsApi?.figjamState().isShapesSidebarOpen, !1);
  let b = createLoadedState({
    shapesSidebarOpen: j
  });
  let [y, v] = useState(!1);
  let [C, T] = useState(!1);
  let E = ke();
  useEffect(() => {
    C && !("open" === t.state && "shape" === t.tool) && e();
  }, [b, C, e, t]);
  return jsx(WZ, {
    isShowing: !0,
    steps: [{
      title: renderI18nText("whiteboard.ad_onboarding.shapes_sidebar.header"),
      description: renderI18nText("whiteboard.ad_onboarding.shapes_sidebar.body"),
      targetKey: $$_2,
      trackingContextName: "AD Onboarding > Shapes Sidebar",
      arrowPosition: ArrowPosition.LEFT_TITLE,
      whenTargetLost: "complete",
      highlightBlue: !0
    }, {
      title: renderI18nText("whiteboard.ad_onboarding.developer_shapes.header"),
      description: renderI18nText("whiteboard.ad_onboarding.developer_shapes.body"),
      targetKey: $$x0,
      trackingContextName: "AD Onboarding > Developer Shapes",
      arrowPosition: ArrowPosition.LEFT_TITLE,
      onStepShow: () => {
        y || v(!0);
        let e = xT($$x0);
        e && e.scrollIntoView();
      },
      whenTargetLost: "complete",
      disableHighlight: !0
    }, {
      title: renderI18nText("whiteboard.ad_onboarding.more_shapes_button.header"),
      description: renderI18nText("whiteboard.ad_onboarding.more_shapes_button.body"),
      targetKey: $$g1,
      trackingContextName: "AD Onboarding > More Shapes",
      onStepShow: () => {
        C || (E(), i({
          type: "open",
          tool: "shape"
        }), T(!0));
      },
      arrowPosition: ArrowPosition.LEFT_TITLE,
      whenTargetLost: "complete",
      highlightBlue: !0
    }],
    onComplete: e,
    userFlagOnShow: c8
  });
}
export const D8 = $$x0;
export const W2 = $$g1;
export const Zh = $$_2;
export const sD = $$j3;