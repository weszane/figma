import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { ButtonSecondary } from "../figma_app/637027";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { a as _$$a } from "../figma_app/453187";
import { getCurrentWorkspaceInfo } from "../figma_app/684168";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { ExtensionRequestModal } from "../905/404161";
var $$p1 = (e => (e.FigJamPluginTile = "figjam_plugin_tile", e))($$p1 || {});
export function $$g0(e) {
  let t = useDispatch<AppDispatch>();
  let {
    version,
    isPlugin,
    variant
  } = e;
  let h = selectCurrentFile();
  let v = useCurrentUserOrg();
  let f = getCurrentWorkspaceInfo();
  let C = _$$a(v?.id, version.plugin_id, f.loaded ? f.data?.workspaceId : void 0);
  if (!h || !h.parentOrgId) return null;
  if (C) {
    let e = "figjam_plugin_tile" === variant ? renderI18nText("universal_insert.request") : renderI18nText("universal_insert.approval_pending");
    return jsx(ButtonSecondary, {
      disabled: !0,
      className: cssBuilderInstance.wFull.$,
      dataTestId: "request-button-approval-pending",
      children: e
    });
  }
  let j = {
    extension: {
      pluginId: version.plugin_id,
      iconUrl: version.redirect_icon_url,
      name: version.name
    },
    isWidget: !isPlugin,
    orgId: h.parentOrgId,
    workspaceDetails: f.loaded ? f.data : void 0,
    openedFrom: "editor",
    fullscreenEditorType: mapFileTypeToEditorType(h.editorType)
  };
  let y = "figjam_plugin_tile" === variant ? renderI18nText("universal_insert.request") : renderI18nText("universal_insert.request_approval");
  return jsx(ButtonSecondary, {
    onClick: () => {
      t(showModalHandler({
        type: ExtensionRequestModal,
        data: j
      }));
    },
    className: cssBuilderInstance.wFull.$,
    dataTestId: "request-button",
    children: y
  });
}
export const s = $$g0;
export const w = $$p1;
