import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { showModalHandler } from "../905/156213";
import { setupLoadingStateHandler } from "../905/696711";
import { L } from "../905/92291";
import { googleDeviceClaimSuccessModal } from "../905/20253";
import { createOptimistThunk } from "../905/350402";
let $$u1 = createOptimistThunk((e, {
  fileKey: t,
  emailAddress: r,
  isResentEmail: s,
  onSuccess: d
}, {
  loadingKey: c
}) => {
  let u = L.setClaimEmail({
    fileKey: t,
    emailAddress: r
  });
  setupLoadingStateHandler(u, e, c);
  u.then(() => {
    if (s) {
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("google_device_try_file_modal.resent_email.visual_bell")
      }));
      return;
    }
    d?.(r);
  }).catch(t => {
    if (t.data?.message === "Hit Claim Email Job timeout lock") {
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("google_device_try_file_modal.resent_email.email_resent")
      }));
      return;
    }
    e.dispatch(FlashActions.error(getI18nString("google_device_try_file_modal.enter_email.failed_to_send")));
  });
});
let $$p0 = createOptimistThunk((e, {
  fileKey: t
}, {
  loadingKey: r
}) => {
  let a = L.claimDeviceFile({
    fileKey: t
  });
  setupLoadingStateHandler(a, e, r);
  a.then(() => {
    e.dispatch(showModalHandler({
      type: googleDeviceClaimSuccessModal,
      data: {}
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(getI18nString("google_device_try_file.save_board.generic_error")));
  });
});
export const D = $$p0;
export const f = $$u1;