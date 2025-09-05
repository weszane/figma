import { jsx, jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { connect } from "../vendor/514228";
import { t, tx } from "../905/303541";
import { Lo } from "../905/156213";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
import { jE, Vq } from "../figma_app/639088";
class u extends Component {
  constructor() {
    super(...arguments);
    this.onConfirm = () => {
      this.props.dispatch(Lo());
      this.props.onConfirmTransfer();
    };
  }
  render() {
    return jsx(yX, {
      destructive: !0,
      confirmationTitle: t("file_browser.modal.transfer_ownership_title"),
      size: "small",
      confirmText: t("file_browser.modal.transfer_ownership_cta"),
      onConfirm: this.onConfirm,
      popStack: !0,
      ...this.props,
      children: jsxs("div", {
        className: jE,
        children: [jsxs("span", {
          className: Vq,
          children: [tx("file_browser.modal.are_you_sure_to_transfer_ownership", {
            newOwnerName: this.props.newOwnerName,
            resourceName: this.props.resourceName
          }), "\xa0"]
        }), tx("file_browser.modal.cannot_undo_warning")]
      })
    });
  }
}
u.displayName = "ConfirmTransferOwnershipModal";
export let $$p0 = Ju(connect()(u), "ConfirmTransferOwnershipModal");
export const b = $$p0;