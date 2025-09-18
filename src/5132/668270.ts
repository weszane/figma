import { subscribeAndAwaitData } from "../905/553831";
import { getResourceDataOrFallback } from "../905/723791";
import { logError } from "../905/714362";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { switchAccountAndNavigate } from "../figma_app/976345";
import { DeviceTryFileView } from "../figma_app/43951";
import { setupLoadingStateHandler } from "../905/696711";
import { Uy } from "../figma_app/685921";
import { L } from "../905/92291";
import { createOptimistThunk } from "../905/350402";
let $$f0 = createOptimistThunk(async (e, l, {
  loadingKey: i
}) => {
  let s = !1;
  try {
    s = !!getResourceDataOrFallback((await subscribeAndAwaitData(DeviceTryFileView, {
      fileKey: l.file_key
    })).deviceTryFile);
  } catch (e) {
    logError("claimFigJamTryFile", "Request failed for fetching LG DeviceTryFileView", e, {
      reportAsSentryError: !0
    });
  }
  try {
    let t;
    t = s ? L.claimDeviceFile({
      fileKey: l.file_key
    }) : Uy.claimTryFile({
      fileKey: l.file_key,
      folderId: l.folder_id
    });
    setupLoadingStateHandler(t, e, i);
    let {
      data
    } = await t;
    let {
      save_location,
      folder_name,
      org_id
    } = data.meta;
    let {
      user,
      currentUserOrgId,
      selectedView
    } = e.getState();
    let v = getI18nString("figjam_try.this_file_has_been_saved_to_drafts");
    if ("team" === save_location && folder_name && (v = getI18nString("figjam_try.this_file_has_been_saved_to_folder_name", {
      folder_name
    })), org_id && org_id !== currentUserOrgId && user) {
      let l = {
        userId: user.id,
        orgId: org_id
      };
      e.dispatch(switchAccountAndNavigate({
        workspace: l,
        view: selectedView
      }));
    }
    e.dispatch(VisualBellActions.enqueue({
      message: v
    }));
  } catch (l) {
    e.dispatch(FlashActions.error("Unable to save file. Please try again later."));
  }
});
let $$g1 = createOptimistThunk(async (e, {
  userName: l,
  file_key: i
}, {
  loadingKey: t
}) => {
  try {
    await XHR.put(`/api/try/file/${i}`, {
      name: getI18nString("figjam_try.default_filename", {
        userName: l
      })
    });
  } catch (e) {
    console.error(e);
  }
});
export const Q = $$f0;
export const S = $$g1;