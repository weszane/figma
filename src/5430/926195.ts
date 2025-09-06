import { jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { trackEventAnalytics } from "../905/449184";
import { gE } from "../5132/642384";
import { _ as _$$_ } from "../905/456042";
import { Jm } from "../figma_app/387599";
import { AS, to } from "../905/156213";
import { HI } from "../figma_app/173838";
import { iZ } from "../905/372672";
import { Ju, ZU } from "../905/102752";
import { x as _$$x } from "../figma_app/856733";
export let $$p0 = Ju(function ({
  hubFileId: e,
  inResourceHub: t,
  onUseHubFile: r,
  ...m
}) {
  let p = HI(e);
  let h = Jm();
  let x = useDispatch();
  let f = iZ();
  return p ? jsx(_$$x, {
    onAgree: () => {
      if (r) {
        x(AS());
        r();
      } else {
        let e = gE(e => {
          trackEventAnalytics("try_it_out_drafts_picker_menu_opened", {
            hubFileId: p.id,
            searchSessionId: h
          });
          x(to({
            type: _$$_,
            data: {
              payload: e
            }
          }));
        }, {
          skipWorkspaceSelection: t,
          userId: f?.id
        });
        x(AS());
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
}, "APPLE_EULA_MODAL_ON_USE_HUBFILE_TYPE", ZU.YES);
export const F = $$p0;