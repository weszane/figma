import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { rcl, NLJ } from "../figma_app/763686";
import { sx } from "../905/449184";
import { Ay } from "../905/612521";
import { Ts } from "../905/194276";
import { to } from "../905/156213";
import { x } from "../905/749159";
export function $$u0(e) {
  sx("show_auth_for_logged_out_file", {
    actionType: function (e) {
      switch (e) {
        case rcl.SET_TOOL_DEFAULT:
          return "SET_TOOL_DEFAULT";
        case rcl.SET_TOOL_COMMENTS:
          return "SET_TOOL_COMMENTS";
        case rcl.FOLLOW_PRESENTER:
          return "CLICK_SIDEBAR_AVATAR";
        case rcl.ENTER_INSPECT_MODE:
          return "CLICK_SIDEBAR_PROPERTIES";
        case rcl.SET_TOOL_DEFAULT_DEV_HANDOFF:
          return "CLICK_TOGGLE_DEV_MODE";
        case rcl.PRESENT_AS_PROTOTYPE:
          return "CLICK_SIDEBAR_PROTOTYPE";
        case NLJ.COMMENTS:
          return "CLICK_TOOLBELT_COMMENTS";
        case NLJ.FRAME:
          return "CLICK_TOOLBELT_FRAME";
        case NLJ.SHAPE_RECTANGLE:
          return "CLICK_TOOLBELT_RECTANGLE";
        case NLJ.VECTOR_PEN:
          return "CLICK_TOOLBELT_PEN";
        case NLJ.TYPE:
          return "CLICK_TOOLBELT_TEXT";
        case "SELECT_COMMENT_SIDEBAR":
          return "SELECT_COMMENT_SIDEBAR";
        case "TOOLGROUP_CHEVRON":
          return "TOOLGROUP_CHEVRON";
        case "SHARE_BUTTON":
          return "SHARE_BUTTON";
        case "GOOGLE_SSO_BUTTON":
          return "GOOGLE_SSO_BUTTON";
        case "SIGN_UP_BUTTON_BANNER":
          return "SIGN_UP_BUTTON_BANNER";
        case "QUICK_ACTIONS_TOOL":
          return "QUICK_ACTIONS_TOOL";
        case "SIGN_UP_CTA_COMMENTS_PANEL":
          return "SIGN_UP_CTA_COMMENTS_PANEL";
        case "COMPONENT_INSERT":
          return "COMPONENT_INSERT";
        case "LEFT_PANEL_FILE_NAME_CHEVRON":
          return "LEFT_PANEL_FILE_NAME_CHEVRON";
        case "LEFT_PANEL_FIGMA_LOGO":
          return "LEFT_PANEL_FIGMA_LOGO";
        case "COMMENT_PIN_CLICK":
          return "COMMENT_PIN_CLICK";
        default:
          return "UNKNOWN_ACTION";
      }
    }(e)
  });
}
export function $$p1() {
  let e = wA();
  return useCallback(t => {
    $$u0(t);
    e(Ts({
      origin: "signed_out_edit",
      redirectUrl: Ay.location.pathname
    }));
    e(to({
      type: x,
      data: {
        actionOrTool: t
      }
    }));
  }, [e]);
}
export const UK = $$u0;
export const WN = $$p1;