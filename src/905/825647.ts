import { useDispatch } from "react-redux";
import { getCurrentTemplate, getPublishTemplateStatus, PublishTemplateStatusEnum, canPublishTemplate } from "../figma_app/622574";
import { selectCurrentFile } from "../figma_app/516028";
import { x } from "../905/619833";
import { i$, YM } from "../905/122282";
import { YW } from "../figma_app/553488";
export function $$d0() {
  let e = !!getCurrentTemplate();
  let t = getPublishTemplateStatus();
  let i = selectCurrentFile();
  let d = useDispatch<AppDispatch>();
  return {
    openCooperPublishFlow: async n => {
      if (i) {
        if (!e && (await YW(i))) {
          i$(d);
          return;
        }
        t === PublishTemplateStatusEnum.FILE_IN_DRAFTS ? x({
          file: {
            key: i.key,
            name: i.name,
            folder_id: i.folderId,
            team_id: i.teamId,
            editor_type: i.editorType,
            parent_org_id: i.parentOrgId
          },
          dispatch: d
        }) : canPublishTemplate(t) && YM(d, i.key, i.editorType, n);
      }
    }
  };
}
export const t = $$d0;