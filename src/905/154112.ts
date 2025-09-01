import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PureComponent } from "react";
import { T } from "../figma_app/257703";
import { t, tx } from "../905/303541";
import { qK } from "../905/102752";
import { Of } from "../905/31837";
import { yX } from "../figma_app/918700";
import { jE } from "../figma_app/639088";
import { YQ, v_ } from "../figma_app/538002";
export let $$p0 = "confirm-org-guest-invite-modal";
qK($$p0, e => jsx(m, {
  ...e.modalShown.data,
  dispatch: e.dispatch
}));
class m extends PureComponent {
  render() {
    let {
      emails,
      orgName
    } = this.props;
    return jsx(yX, {
      confirmationTitle: t("permissions.confirm_guest_invite.share_externally"),
      confirmText: t("permissions.confirm_guest_invite.send_invite"),
      disableClickOutsideToHide: !0,
      onCancel: this.props.onCancel,
      onConfirm: this.props.onConfirm,
      popStack: this.props.popStack,
      size: "small",
      children: jsx(function () {
        return Of() ? jsx("div", {
          className: jE,
          children: jsxs(Fragment, {
            children: [tx("permissions.confirm_guest_invite.external_to_mfa_org_warning", {
              emails: jsx(T, {
                className: YQ,
                children: emails
              }),
              numEmails: emails.length,
              orgName
            }), jsx("br", {}), jsx("br", {}), tx("permissions.confirm_guest_invite.external_to_mfa_org_reminder_without_link")]
          })
        }) : jsx("div", {
          className: jE,
          children: jsx(Fragment, {
            children: tx("permissions.confirm_guest_invite.external_to_org_warning", {
              emails: jsx(T, {
                className: YQ,
                children: emails
              }),
              orgName,
              numEmails: emails.length,
              learnMore: jsx("a", {
                className: v_,
                target: "_blank",
                rel: "noopener",
                href: "https://help.figma.com/hc/articles/4420557314967-Members-versus-guests",
                children: tx("permissions.confirm_guest_invite.learn_more")
              })
            })
          })
        });
      }, {})
    });
  }
}
m.displayName = "ConfirmOrgGuestInviteModal";
export const F = $$p0;