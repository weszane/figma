import { registerModal } from "../905/102752";
import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { hE } from "../figma_app/272243";
import { N } from "../905/438674";
import { s_ } from "../905/17223";
import { $z } from "../figma_app/617427";
import { renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { BellId } from "../905/576487";
import { h as _$$h } from "../905/142086";
import { hideModal } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { getRepoByIdAlt } from "../905/760074";
import { selectCurrentFile } from "../figma_app/516028";
export let $$b0 = registerModal(function ({
  titleText: e,
  bodyText: t,
  ...i
}) {
  let b = useModalManager(i);
  let v = useDispatch();
  let I = useSelector(e => e.repos);
  let E = selectCurrentFile();
  let x = useCallback(e => {
    v(VisualBellActions.enqueue({
      type: "file-moved",
      i18n: {
        id: BellId.FILE_MOVE_FOLDER_BELL_ID,
        params: {
          text: e
        }
      }
    }));
  }, [v]);
  return jsxs(ModalRootComponent, {
    width: "sm",
    manager: b,
    children: [jsx(hE, {
      children: e
    }), jsx(s_, {
      dispatch: v
    }), t, jsx("div", {
      className: "upsell_modals--footerRow--barMd modal--buttonRow--o2A0S",
      children: jsxs("div", {
        className: "upsell_modals--rightAlignedButtons--Y-exM",
        children: [jsx($z, {
          variant: "secondary",
          onClick: () => {
            v(hideModal());
          },
          trackingProperties: {
            trackingDescriptor: _$$c.CANCEL
          },
          children: renderI18nText("upsell.shared.cancel")
        }), jsx("div", {
          className: "upsell_modals--confirmButton--Yk-OB modal--confirmButton--SNUDv",
          children: jsx(N.Button, {
            href: "#",
            onClick: () => {
              if (!E) return;
              let e = getRepoByIdAlt(E, I);
              _$$h({
                key: E.key,
                name: E.name,
                folder_id: E.folderId,
                team_id: E.teamId,
                editor_type: E.editorType,
                is_team_template: E.isTeamTemplate,
                is_published_site: E.isPublishedSite,
                parent_org_id: E.parentOrgId
              }, e, v, {
                handlesVisualBell: !0,
                callback: x
              });
            },
            children: renderI18nText("upsell.move_file_modes.move_to_team")
          })
        })]
      })
    })]
  });
}, "MoveFileProPlus");
export const Y = $$b0;