import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { to } from "../905/156213";
import { N } from "../905/696711";
import { L } from "../905/92291";
import { $ } from "../905/20253";
import { nF } from "../905/350402";
let $$u1 = nF((e, {
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
  N(u, e, c);
  u.then(() => {
    if (s) {
      e.dispatch(F.enqueue({
        message: _$$t("google_device_try_file_modal.resent_email.visual_bell")
      }));
      return;
    }
    d?.(r);
  }).catch(t => {
    if (t.data?.message === "Hit Claim Email Job timeout lock") {
      e.dispatch(F.enqueue({
        message: _$$t("google_device_try_file_modal.resent_email.email_resent")
      }));
      return;
    }
    e.dispatch(_$$s.error(_$$t("google_device_try_file_modal.enter_email.failed_to_send")));
  });
});
let $$p0 = nF((e, {
  fileKey: t
}, {
  loadingKey: r
}) => {
  let a = L.claimDeviceFile({
    fileKey: t
  });
  N(a, e, r);
  a.then(() => {
    e.dispatch(to({
      type: $,
      data: {}
    }));
  }).catch(t => {
    e.dispatch(_$$s.error(_$$t("google_device_try_file.save_board.generic_error")));
  });
});
export const D = $$p0;
export const f = $$u1; 
