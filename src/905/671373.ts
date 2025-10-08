import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { captionsInstallProgress } from "../905/989765";
import { MK } from "../figma_app/120529";
import { registerModal } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
class d extends Component {
  render() {
    let e = "Error downloading captions";
    let t = "Please try again";
    switch (this.props.installProgress) {
      case MK.DISK_ERROR:
        e = "Error downloading speech files";
        t = "There isn\u2019t enough space on your device for us to download the initial set up files for closed captions, or you don\u2019t have permission to write to the disk of this device. Please resolve and then try again.";
        break;
      case MK.NETWORK_ERROR:
        e = "Error downloading speech files";
        t = "Network error encountered while setting up captions. Please check your connection and try again.";
    }
    return jsx(ConfirmationModal2, {
      confirmationTitle: e,
      content: t,
      onConfirm: () => {
        this.props.dispatch(captionsInstallProgress(0));
      },
      confirmText: "Ok",
      hideCancel: !0
    });
  }
}
export let $$c0 = registerModal(d, "VoiceCaptionDownloadFailedModal");
export const L = $$c0;