import { jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { TextWithTruncation } from "../905/984674";
import { DEFAULT_DESIGN_MODE_LABEL } from "../figma_app/806075";
import { getSelectedEditorType } from "../figma_app/976749";
import { E as _$$E2 } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { selectCurrentFile } from "../figma_app/516028";
import { FEditorType } from "../figma_app/53721";
import { N as _$$N } from "../figma_app/268271";
import { OnboardingModal } from "../905/425180";
import { RM } from "../figma_app/322845";
import { sY } from "../figma_app/29089";
import { PositioningStrategy } from "../905/748636";
import { oR } from "../figma_app/598952";
import { _v_ } from "../figma_app/6204";
import { Vc } from "../figma_app/658673";
import { yl } from "../figma_app/300024";
let S = sY;
let v = yl;
let $$A1 = "open-playground-file-onboarding-event";
function x() {
  let e = useSelector(e => e.selectedView);
  let t = jsx(TextWithTruncation, {
    fontWeight: "bold",
    children: renderI18nText("rcs.playground_file.ready_to_try")
  });
  return jsx("p", {
    style: styleBuilderInstance.add({
      animation: "none"
    }).$,
    children: e.isWidget ? renderI18nText("rcs.playground_file.ready_to_try.widget", {
      readyToTry: t
    }) : renderI18nText("rcs.playground_file.ready_to_try.plugin", {
      readyToTry: t
    })
  });
}
function N() {
  return jsx("div", {
    style: styleBuilderInstance.add({
      animation: "none"
    }).$,
    children: renderI18nText("rcs.playground_file.switch_devmode_to_design_description")
  });
}
let C = renderI18nText("rcs.playground_file.switch_devmode_to_design_title");
function w(e) {
  let t;
  let r;
  let i;
  let a;
  switch (e.fullscreenEditorType) {
    case FEditorType.DevHandoff:
      t = "Open Playground File Onboarding Nudge (DevMode)";
      r = oR;
      i = N;
      a = C;
      break;
    case FEditorType.Whiteboard:
      t = "Open Playground File Onboarding Nudge (FigJam)";
      r = v;
      i = x;
      break;
    case FEditorType.Design:
    default:
      t = "Open Playground File Onboarding Nudge (Figma)";
      r = S;
      i = x;
  }
  return jsx(OnboardingModal, {
    description: i(),
    disableHighlight: !0,
    emphasized: !0,
    isShowing: e.isShowing,
    onClose: e.onClose,
    shouldCenterArrow: PositioningStrategy.FALLBACK,
    targetKey: r,
    testId: "OpenPlaygroundFileOverlay",
    title: a,
    trackingContextName: t,
    width: 290
  });
}
export function $$O0() {
  let e = _$$e({
    overlay: _v_,
    priority: _$$N.SECONDARY_MODAL
  });
  let t = selectCurrentFile();
  let r = getSelectedEditorType();
  return (_$$E2(e.uniqueId, $$A1, () => {
    t?.canEdit && e.show();
  }), _$$E2(e.uniqueId, [Vc, "open-playground-file-click-event", "action_open_universal_insert_collage_modal", DEFAULT_DESIGN_MODE_LABEL], () => {
    e.complete();
  }), !t || RM()) ? null : jsx(w, {
    onClose: e.complete,
    fullscreenEditorType: r,
    isShowing: e.isShowing
  });
}
export const KX = $$O0;
export const zM = $$A1;