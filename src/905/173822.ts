import { jsx, jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { connect } from "react-redux";
import { getI18nString, renderI18nText } from "../905/303541";
import { popModalStack } from "../905/156213";
import { registerModal } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
import { jE, Vq } from "../figma_app/639088";
class u extends Component {
  constructor() {
    super(...arguments);
    this.onConfirm = () => {
      this.props.dispatch(popModalStack());
      this.props.onConfirmTransfer();
    };
  }
  render() {
    return jsx(ConfirmationModal2, {
      destructive: !0,
      confirmationTitle: getI18nString("file_browser.modal.transfer_ownership_title"),
      size: "small",
      confirmText: getI18nString("file_browser.modal.transfer_ownership_cta"),
      onConfirm: this.onConfirm,
      popStack: !0,
      ...this.props,
      children: jsxs("div", {
        className: jE,
        children: [jsxs("span", {
          className: Vq,
          children: [renderI18nText("file_browser.modal.are_you_sure_to_transfer_ownership", {
            newOwnerName: this.props.newOwnerName,
            resourceName: this.props.resourceName
          }), "\xa0"]
        }), renderI18nText("file_browser.modal.cannot_undo_warning")]
      })
    });
  }
}
u.displayName = "ConfirmTransferOwnershipModal";
export let $$p0 = registerModal(connect()(u), "ConfirmTransferOwnershipModal");
export const b = $$p0;
