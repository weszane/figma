import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DesignGraphElements, Fullscreen } from "../figma_app/763686";
import { closeUniversalInsertModal, setUniversalInsertModalOpen } from "../905/116101";
import { logAndTrackCTA } from "../figma_app/314264";
import { IntegrationUtils } from "../figma_app/469876";
import { KindEnum } from "../905/129884";
import { hx } from "../figma_app/630194";
import { gd } from "../figma_app/837467";
import { I } from "../figma_app/552397";
import { lV, AZ, cN } from "../figma_app/801324";
import { fK, yl } from "../figma_app/300024";
import { Zh, vy, pN } from "../figma_app/731560";
export let $$f1 = "action_open_universal_insert_modal";
export function $$E0() {
  let e = useSelector(e => e.universalInsertModal.showing);
  let t = useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.NONE);
  let r = e && t;
  let E = useDispatch<AppDispatch>();
  let y = useCallback(() => {
    r ? (E(closeUniversalInsertModal()), Fullscreen?.triggerActionInUserEditScope("set-tool-default", {
      source: fK
    })) : (Fullscreen?.triggerActionInUserEditScope("clear-tool", {
      source: fK
    }), E(setUniversalInsertModalOpen({
      initialX: 0,
      initialY: 0
    })), logAndTrackCTA({
      source: fK
    }, $$f1));
  }, [E, r]);
  return jsx("div", {
    "data-element-target": "delightful-toolbar-universal-insert-button",
    className: Zh,
    children: jsx(I, {
      toolType: "universal-insert",
      recordingKey: hx("universal-insert"),
      isSelected: r,
      className: IntegrationUtils.isGoogleClassroomIntegration() ? vy : pN,
      onClick: y,
      "data-tooltip-type": KindEnum.LOOKUP,
      "data-tooltip": "browse-all-resources-dlt",
      hasOpenSubmenu: r,
      onboardingKey: yl,
      children: e => jsx(gd, {
        toolType: "universal-insert",
        inactiveIcon: jsx(lV, {}),
        hoveredIcon: jsx(AZ, {}),
        activeIcon: jsx(cN, {}),
        isSelected: r,
        isHovered: e
      })
    })
  });
}
export const Hm = $$E0;
export const Vc = $$f1;
