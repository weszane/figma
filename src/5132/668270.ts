import { subscribeAndAwaitData } from "../905/553831";
import { oA } from "../905/723791";
import { logError } from "../905/714362";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { _l } from "../figma_app/976345";
import { jmg } from "../figma_app/43951";
import { N } from "../905/696711";
import { Uy } from "../figma_app/685921";
import { L } from "../905/92291";
import { createOptimistThunk } from "../905/350402";
let $$f0 = createOptimistThunk(async (e, l, {
  loadingKey: i
}) => {
  let s = !1;
  try {
    s = !!oA((await subscribeAndAwaitData(jmg, {
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
    N(t, e, i);
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
      e.dispatch(_l({
        workspace: l,
        view: selectedView
      }));
    }
    e.dispatch(F.enqueue({
      message: v
    }));
  } catch (l) {
    e.dispatch(_$$s.error("Unable to save file. Please try again later."));
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