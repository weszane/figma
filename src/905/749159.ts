import { registerLegacyModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { i as _$$i } from "../905/718764";
import { Command, DesignGraphElements } from "../figma_app/763686";
import { truncate } from "../figma_app/930338";
import { AuthFlowStep } from "../905/862321";
import { a as _$$a } from "../905/105502";
import { Ob } from "../905/191560";
import { getI18nString } from "../905/303541";
import { popModalStack } from "../905/156213";
import { k } from "../figma_app/564183";
export let $$f0 = registerLegacyModal(_$$a, e => {
  let t = e.modalShown;
  let i = e.openFile;
  let r = t.data && t.data.headerText;
  let a = t.data && t.data.subtitle;
  let s = t.data && t.data.disableHiding;
  let o = t.data && t.data.id;
  let l = t?.data?.actionOrTool;
  return jsx(_, {
    fileName: i?.name || null,
    headerText: r,
    subtitle: a,
    disableHiding: s,
    auth: e.auth,
    dispatch: e.dispatch,
    id: o,
    actionOrTool: l
  });
});
function _({
  subtitle: e,
  fileName: t,
  headerText: i,
  auth: u,
  dispatch: f,
  disableHiding: _,
  id: A,
  actionOrTool: y
}) {
  let b = k();
  let v = useModalManager({
    open: !0,
    onClose: () => f(popModalStack()),
    preventUserClose: _
  });
  return jsx(ModalRootComponent, {
    manager: v,
    width: 420,
    height: "dynamic",
    children: jsx(vo, {
      children: jsxs(nB, {
        children: [jsx("div", {
          className: "auth_modal--modal--bVDTe"
        }), jsx(_$$i, {
          children: jsx(Ob, {
            id: A ?? "auth-view-modal",
            auth: u,
            modal: !0,
            header: (() => {
              if (y && b) switch (y) {
                case Command.SET_TOOL_DEFAULT:
                case DesignGraphElements.FRAME:
                case DesignGraphElements.SHAPE_RECTANGLE:
                case DesignGraphElements.VECTOR_PEN:
                case DesignGraphElements.TYPE:
                  return getI18nString("auth.sign_up_to_edit");
                case "SELECT_COMMENT_SIDEBAR":
                case "COMMENT_PIN_CLICK":
                case Command.SET_TOOL_COMMENTS:
                case DesignGraphElements.COMMENTS:
                  return getI18nString("auth.sign_up_to_comment");
                case Command.FOLLOW_PRESENTER:
                  return getI18nString("auth.sign_up_to_use_multiplayer_tools");
                case Command.ENTER_INSPECT_MODE:
                case Command.SET_TOOL_DEFAULT_DEV_HANDOFF:
                  return getI18nString("auth.sign_up_to_use_inspection_tools");
                default:
                  return getI18nString("auth.sign_up_for_figma");
              }
              return i || (u.formState === AuthFlowStep.SIGN_IN || u.formState === AuthFlowStep.VERIFY_HUMAN && u.prevForm === AuthFlowStep.SIGN_IN || u.formState === AuthFlowStep.TWO_FACTOR ? t ? getI18nString("auth.log_in_to_collaborate_on_display_name", {
                displayName: `"${truncate(t, 30)}"`
              }) : getI18nString("auth.log_in_to_collaborate_on_this_file") : t ? getI18nString("auth.create_an_account_to_collaborate_on_display_name", {
                displayName: `"${truncate(t, 30)}"`
              }) : getI18nString("auth.create_an_account_to_collaborate_on_this_file"));
            })(),
            subtitle: e,
            fromLoggedOutDesignFile: b
          })
        })]
      })
    })
  });
}
export const x = $$f0;