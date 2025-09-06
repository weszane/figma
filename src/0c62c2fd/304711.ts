import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { trackEventAnalytics } from "../905/449184";
import { gY } from "../figma_app/566371";
import { s as _$$s } from "../cssbuilder/589278";
import { s as _$$s2 } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { t as _$$t2 } from "../905/53773";
import { Q4 } from "../figma_app/199513";
import { CI } from "../figma_app/528509";
import { x as _$$x } from "../905/98916";
export function $$x0(e) {
  var t;
  let r = useDispatch();
  let x = hS(e);
  let b = gY(Q4);
  let v = _$$x(e.folder.id, !0);
  let y = jsx("span", {
    className: _$$s.fontBold.$,
    children: CI(e.folder)
  });
  let w = getI18nString("file_browser.delete_project.delete_project");
  let j = "loaded" !== v.status ? renderI18nText("file_browser.delete_project.generic_confirm_text_permanently_delete_folder", {
    folderName: y
  }) : 0 === (t = v.data) ? renderI18nText("file_browser.delete_project.zero_file_confirm_text_permanently_delete_folder", {
    folderName: y
  }) : renderI18nText("file_browser.delete_project.plural_files_confirm_text_permanently_delete_folder", {
    folderName: y,
    numFiles: _$$t2(t)
  });
  let T = "loaded" === v.status && 0 === v.data ? renderI18nText("file_browser.delete_project.once_deleted_this_project_can_no_longer_be_restored") : renderI18nText("file_browser.delete_project.once_deleted_this_project_and_its_files_can_no_longer_be_restored");
  return jsx(bL, {
    manager: x,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("file_browser.trash_project.delete_project_forever")
        })
      }), jsxs(nB, {
        children: [jsx("div", {
          className: _$$s.mb16.$,
          children: j
        }), jsx("div", {
          children: T
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: e.onClose,
            children: renderI18nText("modal.cancel")
          }), jsx($n, {
            variant: "destructive",
            onClick: () => {
              trackEventAnalytics("Folder Permanently Delete Confirmation Click", {
                folderId: e.folder.id,
                teamId: e.folder.teamId,
                orgId: e.folderOrgId
              });
              b({
                folderId: e.folder.id
              }).catch(() => {
                r(_$$s2.error(getI18nString("file_browser.api_folder.error_when_permanently_deleting_folder")));
              });
              e.onClose();
            },
            children: w
          })]
        })
      })]
    })
  });
}
export const FolderPermanentlyDeleteConfirmModal = $$x0;