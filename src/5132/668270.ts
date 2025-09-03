import { subscribeAndAwaitData } from "../905/553831";
import { oA } from "../905/723791";
import { x1 } from "../905/714362";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { _l } from "../figma_app/976345";
import { jmg } from "../figma_app/43951";
import { N } from "../905/696711";
import { Uy } from "../figma_app/685921";
import { L } from "../905/92291";
import { nF } from "../905/350402";
let $$f0 = nF(async (e, l, {
  loadingKey: i
}) => {
  let s = !1;
  try {
    s = !!oA((await subscribeAndAwaitData(jmg, {
      fileKey: l.file_key
    })).deviceTryFile);
  } catch (e) {
    x1("claimFigJamTryFile", "Request failed for fetching LG DeviceTryFileView", e, {
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
    let v = _$$t("figjam_try.this_file_has_been_saved_to_drafts");
    if ("team" === save_location && folder_name && (v = _$$t("figjam_try.this_file_has_been_saved_to_folder_name", {
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
let $$g1 = nF(async (e, {
  userName: l,
  file_key: i
}, {
  loadingKey: t
}) => {
  try {
    await XHR.put(`/api/try/file/${i}`, {
      name: _$$t("figjam_try.default_filename", {
        userName: l
      })
    });
  } catch (e) {
    console.error(e);
  }
});
export const Q = $$f0;
export const S = $$g1;