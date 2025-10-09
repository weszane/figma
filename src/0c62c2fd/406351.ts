import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assertNotNullish } from "../figma_app/465776";
import { ServiceCategories } from "../905/165054";
import { flattenMessageMeta } from "../figma_app/819288";
import { useSubscription } from "../figma_app/288654";
import { reportError } from "../905/11";
import { FlashActions } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { popModalStack } from "../905/156213";
import { trackFileBrowserFileClick } from "../figma_app/314264";
import { fileEntityDataMapper } from "../905/943101";
import { AddWorkspacePinnedFileView } from "../figma_app/43951";
import { p as _$$p } from "../0c62c2fd/698840";
import { p as _$$p2, N as _$$N } from "../0c62c2fd/687448";
import { AH } from "../figma_app/147337";
export function $$y0({
  fileKey: e,
  source: t,
  open: r,
  onClose: n
}) {
  let _ = useDispatch<AppDispatch>();
  let y = _$$p2(getI18nString("file_browser.pinning.pin_modal.confirmation_bell"), "file-browser-workspace-add-pin");
  let j = useSubscription(AddWorkspacePinnedFileView, {
    fileKey: e
  });
  let T = function (e) {
    let [t, r] = useState(!1);
    let a = "loaded" === e.status && e.data.file && !e.data.file.canPinToWorkspace && e.data.file.canEdit;
    a && !t && r(!0);
    return a || t;
  }(j);
  if ("loaded" !== j.status) return null;
  let {
    file
  } = j.data;
  if (!file) {
    reportError(ServiceCategories.WAYFINDING, Error("AddPinModal unable to lookup file by ID"));
    _(popModalStack());
    return null;
  }
  let I = file.computedWorkspace?.workspace;
  if (!I) {
    reportError(ServiceCategories.WAYFINDING, Error("AddPinModal opened for file with no workspace"));
    _(popModalStack());
    return null;
  }
  let N = fileEntityDataMapper.toSinatra(file);
  let C = async e => {
    try {
      await _$$p.pinFile({
        resourceType: AH,
        resourceId: I.id,
        fileKey: file.key,
        description: e,
        shouldUpdatePermissions: T
      });
      trackFileBrowserFileClick("file_browser_file_pinned_to_resource", file, {
        resourceType: AH,
        resourceId: I.id,
        source: t,
        pinDescription: flattenMessageMeta(e)
      });
      y(I.id);
    } catch (e) {
      _(FlashActions.error(getI18nString("file_browser.pinning.pin_modal.error")));
      return e;
    }
  };
  let S = T ? jsx(w, {
    file,
    workspace: I
  }) : null;
  return jsx(_$$N, {
    title: getI18nString("file_browser.pinning.pin_modal.pin_file_to_workspace"),
    confirmText: getI18nString("file_browser.pinning.pin_file"),
    onSubmit: C,
    file: N,
    initialDescription: null,
    warningContent: S,
    open: r,
    onClose: n
  });
}
function w({
  file: e,
  workspace: t
}) {
  let r = e.parentOrgId;
  assertNotNullish(r);
  let s = useSelector(({
    orgById: e
  }) => e[r].name);
  return jsx(TextWithTruncation, {
    children: renderI18nText("file_browser.pinning.update_permissions.content", {
      workspaceName: t.name,
      permission: jsx(TextWithTruncation, {
        fontWeight: "bold",
        children: renderI18nText("file_browser.pinning.update_permissions.content.permission", {
          orgName: s
        })
      })
    })
  });
}
export const AddPinModal = $$y0;
