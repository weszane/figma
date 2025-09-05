import { jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { Rs } from "../figma_app/288654";
import { $D } from "../905/11";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { Lo } from "../905/156213";
import { fileEntityDataMapper } from "../905/943101";
import { FContainerKindType } from "../figma_app/191312";
import { vgO } from "../figma_app/43951";
import { p as _$$p } from "../0c62c2fd/698840";
import { p as _$$p2, N } from "../0c62c2fd/687448";
export function $$g0({
  pinnedFileId: e,
  open: t,
  onClose: r
}) {
  let g = useDispatch();
  let h = _$$p2(_$$t("file_browser.pinning.pin_modal.edit.confirmation_bell"), "file-browser-workspace-edit-pin");
  let x = Rs(vgO, {
    pinnedFileId: e
  });
  if ("loaded" !== x.status) return null;
  let {
    pinnedFile
  } = x.data;
  if (!pinnedFile) {
    $D(_$$e.WAYFINDING, Error("EditPinModal unable to lookup pinned file by ID"));
    g(Lo());
    return null;
  }
  if (pinnedFile.resourceType !== FContainerKindType.WORKSPACE) {
    $D(_$$e.WAYFINDING, Error("EditPinModal opened for pinned file with non-workspace resource type"), {
      extra: {
        resourceType: pinnedFile.resourceType
      }
    });
    g(Lo());
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
      g(_$$s.error(_$$t("file_browser.pinning.pin_modal.edit.error")));
      return e;
    }
  };
  let w = fileEntityDataMapper.toSinatra(pinnedFile.file);
  return jsx(N, {
    title: _$$t("file_browser.pinning.pin_modal.edit_pin_description"),
    confirmText: _$$t("file_browser.pinning.pin_modal.save"),
    onSubmit: y,
    file: w,
    initialDescription: pinnedFile.description,
    open: t,
    onClose: r
  });
}
export const EditPinModal = $$g0;