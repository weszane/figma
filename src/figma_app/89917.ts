import { jsx } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { tx } from "../905/303541";
import { sx } from "../905/941192";
import { E as _$$E } from "../905/984674";
import { L3 } from "../figma_app/806075";
import { E3 } from "../figma_app/976749";
import { E as _$$E2 } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { q5 } from "../figma_app/516028";
import { nT } from "../figma_app/53721";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { RM } from "../figma_app/322845";
import { sY } from "../figma_app/29089";
import { EL } from "../905/748636";
import { oR } from "../figma_app/598952";
import { _v_ } from "../figma_app/6204";
import { Vc } from "../figma_app/658673";
import { yl } from "../figma_app/300024";
let S = sY;
let v = yl;
let $$A1 = "open-playground-file-onboarding-event";
function x() {
  let e = useSelector(e => e.selectedView);
  let t = jsx(_$$E, {
    fontWeight: "bold",
    children: tx("rcs.playground_file.ready_to_try")
  });
  return jsx("p", {
    style: sx.add({
      animation: "none"
    }).$,
    children: e.isWidget ? tx("rcs.playground_file.ready_to_try.widget", {
      readyToTry: t
    }) : tx("rcs.playground_file.ready_to_try.plugin", {
      readyToTry: t
    })
  });
}
function N() {
  return jsx("div", {
    style: sx.add({
      animation: "none"
    }).$,
    children: tx("rcs.playground_file.switch_devmode_to_design_description")
  });
}
let C = tx("rcs.playground_file.switch_devmode_to_design_title");
function w(e) {
  let t;
  let r;
  let i;
  let a;
  switch (e.fullscreenEditorType) {
    case nT.DevHandoff:
      t = "Open Playground File Onboarding Nudge (DevMode)";
      r = oR;
      i = N;
      a = C;
      break;
    case nT.Whiteboard:
      t = "Open Playground File Onboarding Nudge (FigJam)";
      r = v;
      i = x;
      break;
    case nT.Design:
    default:
      t = "Open Playground File Onboarding Nudge (Figma)";
      r = S;
      i = x;
  }
  return jsx(rq, {
    description: i(),
    disableHighlight: !0,
    emphasized: !0,
    isShowing: e.isShowing,
    onClose: e.onClose,
    shouldCenterArrow: EL.FALLBACK,
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
  let t = q5();
  let r = E3();
  return (_$$E2(e.uniqueId, $$A1, () => {
    t?.canEdit && e.show();
  }), _$$E2(e.uniqueId, [Vc, "open-playground-file-click-event", "action_open_universal_insert_collage_modal", L3], () => {
    e.complete();
  }), !t || RM()) ? null : jsx(w, {
    onClose: e.complete,
    fullscreenEditorType: r,
    isShowing: e.isShowing
  });
}
export const KX = $$O0;
export const zM = $$A1;