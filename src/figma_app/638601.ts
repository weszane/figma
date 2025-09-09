import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Command, DesignGraphElements } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { Ts } from "../905/194276";
import { showModalHandler } from "../905/156213";
import { x } from "../905/749159";
export function $$u0(e) {
  trackEventAnalytics("show_auth_for_logged_out_file", {
    actionType: function (e) {
      switch (e) {
        case Command.SET_TOOL_DEFAULT:
          return "SET_TOOL_DEFAULT";
        case Command.SET_TOOL_COMMENTS:
          return "SET_TOOL_COMMENTS";
        case Command.FOLLOW_PRESENTER:
          return "CLICK_SIDEBAR_AVATAR";
        case Command.ENTER_INSPECT_MODE:
          return "CLICK_SIDEBAR_PROPERTIES";
        case Command.SET_TOOL_DEFAULT_DEV_HANDOFF:
          return "CLICK_TOGGLE_DEV_MODE";
        case Command.PRESENT_AS_PROTOTYPE:
          return "CLICK_SIDEBAR_PROTOTYPE";
        case DesignGraphElements.COMMENTS:
          return "CLICK_TOOLBELT_COMMENTS";
        case DesignGraphElements.FRAME:
          return "CLICK_TOOLBELT_FRAME";
        case DesignGraphElements.SHAPE_RECTANGLE:
          return "CLICK_TOOLBELT_RECTANGLE";
        case DesignGraphElements.VECTOR_PEN:
          return "CLICK_TOOLBELT_PEN";
        case DesignGraphElements.TYPE:
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
  let e = useDispatch();
  return useCallback(t => {
    $$u0(t);
    e(Ts({
      origin: "signed_out_edit",
      redirectUrl: customHistory.location.pathname
    }));
    e(showModalHandler({
      type: x,
      data: {
        actionOrTool: t
      }
    }));
  }, [e]);
}
export const UK = $$u0;
export const WN = $$p1;
