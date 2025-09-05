import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { sx } from "../905/449184";
import { M3 } from "../figma_app/91703";
import { A5 } from "../figma_app/707808";
export function $$l0() {
  let e = useDispatch();
  return useCallback(t => {
    e(M3({
      view: t
    }));
    sx("File Permissions Modal Tab Clicked", {
      tabName: d[t]
    });
  }, [e]);
}
let d = {
  [A5.INVITE]: "Invite",
  [A5.PUBLISH_COMMUNITY]: "Publish community",
  [A5.PUBLISH_TEMPLATE]: "Publish template",
  [A5.COLLABORATORS]: "Collaborators",
  [A5.EMBED_CODE]: "Embed code",
  [A5.SHARE_SETTINGS]: "Share settings",
  [A5.FOLDER_MEMBERS]: "Folder members",
  [A5.SHARE_GOOGLE_DEVICE_DISCLAIMER]: "Share google device disclaimer",
  [A5.SHARE_TO_GOOGLE_CLASSROOM]: "Share to google classroom",
  [A5.CONNECTED_PROJECT_USERS]: "Connected project users",
  [A5.UPDATE_SEAT]: "Update seat"
};
export const o = $$l0;