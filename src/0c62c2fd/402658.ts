import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { hS } from "../905/437088";
import { nB, vo, Y9, hE, wi, jk } from "../figma_app/272243";
import { k } from "../905/443820";
import { bL } from "../905/38914";
import { setupAutofocusHandler } from "../905/128376";
import { $n } from "../905/521428";
import { trackEventAnalytics } from "../905/449184";
import { gY } from "../figma_app/566371";
import { _ as _$$_, S } from "../figma_app/490799";
import { s as _$$s } from "../cssbuilder/589278";
import { s as _$$s2 } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { cm } from "../figma_app/544879";
import { t as _$$t2 } from "../905/53773";
import { hideModal } from "../905/156213";
import { Ct } from "../figma_app/199513";
import { CI } from "../figma_app/528509";
import { N } from "../905/98916";
export function $$T0(e) {
  let {
    folder
  } = e;
  let r = hS(e);
  let s = N(folder.id);
  let i = "loaded" === s.status ? jsx(E, {
    ...e,
    numFiles: s.data.fileCount,
    hasPublishedSite: s.data.publishedSiteCount > 0
  }) : jsx(nB, {
    padding: {
      top: "1rem",
      bottom: "1rem"
    },
    children: jsx("div", {
      className: _$$s.flex.justifyCenter.$,
      "data-testid": "loading-spinner-container",
      children: jsx(k, {})
    })
  });
  return jsx(bL, {
    manager: r,
    width: "lg",
    height: "fixed",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("file_browser.trash_project.move_project_to_trash")
        })
      }), i]
    })
  });
}
function E(e) {
  let t = useDispatch();
  let r = setupAutofocusHandler();
  let {
    folder,
    numFiles,
    hasPublishedSite
  } = e;
  let j = jsx("span", {
    className: _$$s.fontBold.$,
    children: renderI18nText("file_browser.tool_bar.trash")
  });
  let T = (e => {
    switch (e) {
      case 0:
        return getI18nString("file_browser.trash_project.generic_confirm_label");
      case 1:
        return getI18nString("file_browser.trash_project.one_file_confirm_label");
      default:
        return getI18nString("file_browser.trash_project.plural_files_confirm_label", {
          numFiles: _$$t2(e)
        });
    }
  })(numFiles);
  let E = jsx("span", {
    className: _$$s.fontBold.$,
    children: CI(folder)
  });
  let I = (e => {
    switch (e) {
      case 0:
        return renderI18nText("file_browser.trash_project.zero_file_confirm_text_trash_folder", {
          folderName: E
        });
      case 1:
        return renderI18nText("file_browser.trash_project.one_file_confirm_text_trash_folder", {
          folderName: E
        });
      default:
        return renderI18nText("file_browser.trash_project.plural_files_confirm_text_trash_folder", {
          folderName: E,
          numFiles: _$$t2(e)
        });
    }
  })(numFiles);
  let N = gY(Ct);
  let C = e => {
    trackEventAnalytics("Folder Trash Confirmation Click", {
      folderId: e.id,
      teamId: e.teamId,
      orgId: e.orgId
    });
    N({
      folderId: e.id
    }).catch(() => {
      t(_$$s2.error(getI18nString("file_browser.api_folder.error_when_moving_to_trash")));
    });
    t(hideModal());
  };
  return jsxs(Fragment, {
    children: [jsxs(nB, {
      children: [e.folderState && jsx("div", {
        className: _$$s.mb12.$,
        children: jsx(_$$_, {
          dataTestId: "trash-folder-warning-banner",
          color: S.ERROR,
          text: (e => {
            switch (e) {
              case cm.PENDING_ASSET_TRANSFER:
                return renderI18nText("file_browser.trash_project.warning.pending_asset_transfer");
              case cm.PENDING_RESOURCE_CONNECTION:
                return renderI18nText("file_browser.trash_project.warning.pending_resource_connection");
              case cm.ACTIVE_RESOURCE_CONNECTION:
                return renderI18nText("file_browser.trash_project.warning.active_resource_connection");
              default:
                throwTypeError(e);
            }
          })(e.folderState)
        })
      }), jsx("div", {
        className: _$$s.mb12.$,
        children: I
      }), hasPublishedSite && jsx("div", {
        className: _$$s.mb12.$,
        children: renderI18nText("file_browser.trash_project.published_site_warning")
      }), jsx("div", {
        children: renderI18nText("file_browser.trash_project.description_restore", {
          trashStyled: j
        })
      })]
    }), jsx(wi, {
      children: jsxs(jk, {
        children: [jsx($n, {
          variant: "secondary",
          onClick: () => {
            e.onClose();
          },
          ref: r,
          children: getI18nString("modal.cancel")
        }), jsx($n, {
          variant: "destructive",
          onClick: () => C(folder),
          children: T
        })]
      })
    })]
  });
}
export const FolderTrashConfirmModal = $$T0;