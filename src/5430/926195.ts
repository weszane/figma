import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { createDuplicateTemplateHandler } from "../5132/642384";
import { WorkspaceSelectorModal } from "../905/456042";
import { getSearchSessionIdFromSelector } from "../figma_app/387599";
import { hideModalHandler, showModalHandler } from "../905/156213";
import { HI } from "../figma_app/173838";
import { selectCurrentUser } from "../905/372672";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { AppleEulaModal } from "../figma_app/856733";
export let $$p0 = registerModal(function ({
  hubFileId: e,
  inResourceHub: t,
  onUseHubFile: r,
  ...m
}) {
  let p = HI(e);
  let h = getSearchSessionIdFromSelector();
  let x = useDispatch<AppDispatch>();
  let f = selectCurrentUser();
  return p ? jsx(AppleEulaModal, {
    onAgree: () => {
      if (r) {
        x(hideModalHandler());
        r();
      } else {
        let e = createDuplicateTemplateHandler(e => {
          trackEventAnalytics("try_it_out_drafts_picker_menu_opened", {
            hubFileId: p.id,
            searchSessionId: h
          });
          x(showModalHandler({
            type: WorkspaceSelectorModal,
            data: {
              payload: e
            }
          }));
        }, {
          skipWorkspaceSelection: t,
          userId: f?.id
        });
        x(hideModalHandler());
        x(e({
          id: p.id,
          viewer_mode: p.viewerMode,
          monetized_resource_metadata: p.monetizedResourceMetadataId ? {
            id: p.monetizedResourceMetadataId
          } : void 0
        }));
      }
    },
    ...m
  }) : null;
}, "APPLE_EULA_MODAL_ON_USE_HUBFILE_TYPE", ModalSupportsBackground.YES);
export const F = $$p0;
