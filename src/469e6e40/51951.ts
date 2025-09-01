import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { $n } from "../905/521428";
import { Dk } from "../figma_app/623293";
import { t as _$$t, tx } from "../905/303541";
import { F } from "../905/302958";
import { l as _$$l } from "../figma_app/121794";
import { Sh, Vq } from "../469e6e40/442006";
if (443 == require.j) {}
export function $$_0(e) {
  let t = e.dispatch;
  let a = useCallback(e => {
    Dk(e).then(() => {
      t(F.enqueue({
        type: "scim_api_token_copied_to_clipboard",
        message: _$$t("org_settings.sso.copied")
      }));
    });
  }, [t]);
  if (e.provisioningApiToken) {
    let s;
    return jsx(_$$l, {
      disableClickOutsideToHide: !0,
      dispatch: t,
      onConfirm: e.onConfirm,
      onHide: e.onCancel,
      buttonText: _$$t("modal.close"),
      title: _$$t("org_settings.scim.your_provisioning_api_token"),
      hideCancelButton: !0,
      checkboxText: jsx("div", {
        children: tx("org_settings.scim.i_understand_that_this_is_the_only_time_i_will_see_this_token")
      }),
      children: jsxs("div", {
        className: Sh,
        children: [jsx("span", {
          children: e.provisioningApiToken
        }), (s = e.provisioningApiToken, document.queryCommandSupported("copy") && jsx("span", {
          children: jsx($n, {
            variant: "link",
            onClick: () => a(s),
            children: tx("org_settings.sso.copy")
          })
        }))]
      })
    });
  }
  return jsx(_$$l, {
    dispatch: t,
    onConfirm: e.onConfirm,
    onHide: e.onCancel,
    buttonText: _$$t("org_settings.scim.revoke_access"),
    title: _$$t("org_settings.scim.revoke_token_access_title"),
    size: "small",
    checkboxText: jsx("div", {
      children: tx("org_settings.scim.revoke_token_confirmation", {
        willBeDenied: jsx("span", {
          className: Vq,
          children: tx("org_settings.scim.will_be_denied")
        })
      })
    })
  });
}
export const ProvisioningApiTokenModal = $$_0;