import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { fileSelectedShareModalTab } from "../figma_app/91703";
import { ShareAction } from "../figma_app/707808";
export function $$l0() {
  let e = useDispatch();
  return useCallback(t => {
    e(fileSelectedShareModalTab({
      view: t
    }));
    trackEventAnalytics("File Permissions Modal Tab Clicked", {
      tabName: d[t]
    });
  }, [e]);
}
let d = {
  [ShareAction.INVITE]: "Invite",
  [ShareAction.PUBLISH_COMMUNITY]: "Publish community",
  [ShareAction.PUBLISH_TEMPLATE]: "Publish template",
  [ShareAction.COLLABORATORS]: "Collaborators",
  [ShareAction.EMBED_CODE]: "Embed code",
  [ShareAction.SHARE_SETTINGS]: "Share settings",
  [ShareAction.FOLDER_MEMBERS]: "Folder members",
  [ShareAction.SHARE_GOOGLE_DEVICE_DISCLAIMER]: "Share google device disclaimer",
  [ShareAction.SHARE_TO_GOOGLE_CLASSROOM]: "Share to google classroom",
  [ShareAction.CONNECTED_PROJECT_USERS]: "Connected project users",
  [ShareAction.UPDATE_SEAT]: "Update seat"
};
export const o = $$l0;