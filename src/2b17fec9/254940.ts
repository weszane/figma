import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { nR } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { a as _$$a } from "../figma_app/453187";
import { RW } from "../figma_app/684168";
import { selectCurrentFile } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { S } from "../905/404161";
var $$f1 = (e => (e.FigJamPluginTile = "figjam_plugin_tile", e))($$f1 || {});
export function $$_0(e) {
  let t = useDispatch();
  let {
    version,
    isPlugin,
    variant
  } = e;
  let x = selectCurrentFile();
  let g = sZ();
  let j = RW();
  let b = _$$a(g?.id, version.plugin_id, j.loaded ? j.data?.workspaceId : void 0);
  if (!x || !x.parentOrgId) return null;
  if (b) {
    let e = "figjam_plugin_tile" === variant ? renderI18nText("universal_insert.request") : renderI18nText("universal_insert.approval_pending");
    return jsx(nR, {
      disabled: !0,
      className: _$$s.wFull.$,
      dataTestId: "request-button-approval-pending",
      children: e
    });
  }
  let y = {
    extension: {
      pluginId: version.plugin_id,
      iconUrl: version.redirect_icon_url,
      name: version.name
    },
    isWidget: !isPlugin,
    orgId: x.parentOrgId,
    workspaceDetails: j.loaded ? j.data : void 0,
    openedFrom: "editor",
    fullscreenEditorType: mapFileTypeToEditorType(x.editorType)
  };
  let v = "figjam_plugin_tile" === variant ? renderI18nText("universal_insert.request") : renderI18nText("universal_insert.request_approval");
  return jsx(nR, {
    onClick: () => {
      t(showModalHandler({
        type: S,
        data: y
      }));
    },
    className: _$$s.wFull.$,
    dataTestId: "request-button",
    children: v
  });
}
export const s = $$_0;
export const w = $$f1;