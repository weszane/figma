import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { useSubscription } from "../figma_app/288654";
import { reportError } from "../905/11";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { popModalStack } from "../905/156213";
import { fileEntityDataMapper } from "../905/943101";
import { FContainerKindType } from "../figma_app/191312";
import { EditWorkspacePinnedFileView } from "../figma_app/43951";
import { p as _$$p } from "../0c62c2fd/698840";
import { p as _$$p2, N } from "../0c62c2fd/687448";
export function $$g0({
  pinnedFileId: e,
  open: t,
  onClose: r
}) {
  let g = useDispatch();
  let h = _$$p2(getI18nString("file_browser.pinning.pin_modal.edit.confirmation_bell"), "file-browser-workspace-edit-pin");
  let x = useSubscription(EditWorkspacePinnedFileView, {
    pinnedFileId: e
  });
  if ("loaded" !== x.status) return null;
  let {
    pinnedFile
  } = x.data;
  if (!pinnedFile) {
    reportError(_$$e.WAYFINDING, Error("EditPinModal unable to lookup pinned file by ID"));
    g(popModalStack());
    return null;
  }
  if (pinnedFile.resourceType !== FContainerKindType.WORKSPACE) {
    reportError(_$$e.WAYFINDING, Error("EditPinModal opened for pinned file with non-workspace resource type"), {
      extra: {
        resourceType: pinnedFile.resourceType
      }
    });
    g(popModalStack());
    return null;
  }
  let v = pinnedFile.resourceId;
  let y = async t => {
    try {
      await _$$p.updatePin({
        pinnedFileId: e,
        description: t
      });
      h(v);
    } catch (e) {
      g(FlashActions.error(getI18nString("file_browser.pinning.pin_modal.edit.error")));
      return e;
    }
  };
  let w = fileEntityDataMapper.toSinatra(pinnedFile.file);
  return jsx(N, {
    title: getI18nString("file_browser.pinning.pin_modal.edit_pin_description"),
    confirmText: getI18nString("file_browser.pinning.pin_modal.save"),
    onSubmit: y,
    file: w,
    initialDescription: pinnedFile.description,
    open: t,
    onClose: r
  });
}
export const EditPinModal = $$g0;