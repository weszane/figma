import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { _Z } from "../figma_app/819288";
import { useSubscription } from "../figma_app/288654";
import { reportError } from "../905/11";
import { R } from "../905/441305";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { E9 } from "../figma_app/314264";
import { getUserId } from "../905/372672";
import { FContainerKindType } from "../figma_app/191312";
import { DeleteWorkspacePinnedFileView } from "../figma_app/43951";
import { p as _$$p } from "../0c62c2fd/698840";
import { p as _$$p2 } from "../0c62c2fd/687448";
export function $$b0({
  pinnedFileId: e,
  open: t,
  onClose: r
}) {
  let b = getUserId();
  let v = useDispatch();
  let y = _$$p2(getI18nString("file_browser.pinning.delete_pin_modal.confirmation_bell"), "file-browser-workspace-delete-pin");
  let [w, j] = useState(!1);
  let T = useSubscription(DeleteWorkspacePinnedFileView, {
    pinnedFileId: e
  });
  if ("loaded" !== T.status) return null;
  let {
    pinnedFile
  } = T.data;
  if (!pinnedFile) {
    reportError(_$$e.WAYFINDING, Error("DeletePinModal unable to lookup pinned file by ID"));
    r();
    return null;
  }
  if (pinnedFile.resourceType !== FContainerKindType.WORKSPACE) {
    reportError(_$$e.WAYFINDING, Error("DeletePinModal opened for pinned file with non-workspace resource type"), {
      extra: {
        resourceType: pinnedFile.resourceType
      }
    });
    r();
    return null;
  }
  let I = async t => {
    t.preventDefault();
    try {
      j(!0);
      await _$$p.deletePin({
        pinnedFileId: e
      });
      E9("file_browser_file_unpinned_from_resource", pinnedFile.file, {
        resourceId: pinnedFile.resourceId,
        resourceType: pinnedFile.resourceType,
        isPinCreator: pinnedFile.creator?.id === b,
        pinDescription: _Z(pinnedFile.description)
      });
      y(pinnedFile.resourceId);
      r();
    } catch (e) {
      v(FlashActions.error(getI18nString("file_browser.pinning.delete_pin_modal.error")));
    } finally {
      j(!1);
    }
  };
  return jsx(R, {
    title: getI18nString("file_browser.pinning.delete_pin_modal.header"),
    confirmText: getI18nString("file_browser.pinning.delete_pin_modal.confirm"),
    onConfirm: I,
    destructive: !0,
    isLoading: w,
    open: t,
    onClose: r,
    children: getI18nString("file_browser.pinning.delete_pin_modal.content")
  });
}
export const DeletePinModal = $$b0;