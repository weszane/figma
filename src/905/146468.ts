import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Button } from "../905/521428";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { TrackingProvider } from "../figma_app/831799";
import { defaultValidator } from "../figma_app/181241";
let c = new class {
  createResourceConnectionSharingGroupForLibrary(e) {
    return defaultValidator.validate(async ({
      xr: t
    }) => await t.post("/api/sharing_groups", {
      resource_type: "file",
      library_key: e.libraryKey,
      group_type: "resource_connection",
      group_id: e.resourceConnectionId,
      level: 100
    }));
  }
  deleteSharingGroupById(e) {
    return defaultValidator.validate(async ({
      xr: t
    }) => await t.del(`/api/sharing_groups/${e.sharingGroupId}`));
  }
}();
export function $$u0({
  resourceConnectionSharingGroupData: e,
  useLabel: t = !1
}) {
  let i = !!e.sharingGroupId;
  let d = useMemo(() => t ? i ? getI18nString("design_systems.libraries_modal.available_to_external_teams_in_connected_project") : getI18nString("design_systems.libraries_modal.unavailable_to_external_teams_in_connected_project") : null, [t, i]);
  return jsx(TrackingProvider, {
    name: "Library Subscription Toggle",
    children: jsxs("div", {
      className: cssBuilderInstance.flex.flexRow.itemsCenter.gap10.maxW250.$,
      children: [d && jsx("div", {
        className: cssBuilderInstance.colorTextSecondary.pb1.$,
        children: d
      }), jsx(Button, {
        variant: i ? "secondary" : "primary",
        onClick: () => {
          i && e.sharingGroupId ? c.deleteSharingGroupById({
            sharingGroupId: e.sharingGroupId
          }) : c.createResourceConnectionSharingGroupForLibrary({
            libraryKey: e.libraryKey,
            resourceConnectionId: e.resourceConnectionId
          });
        },
        children: i ? getI18nString("design_systems.libraries_modal.add_to_connected_project_toggle.remove") : getI18nString("design_systems.libraries_modal.add_to_connected_project_toggle.allow")
      })]
    })
  });
}
export const B = $$u0;