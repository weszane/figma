import { dR } from "../905/508367";
import { eD } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { Xb } from "../figma_app/778880";
import { XHR } from "../905/910117";
import { nT } from "../figma_app/53721";
async function d(e) {
  let t = {
    org_id: e.orgId,
    user_id: e.userId,
    team_id: e.teamId
  };
  try {
    let i = await XHR.post(`/api/${e.isWidget ? "widgets" : "plugins"}/${e.pluginId}/${e.pluginVersionId}/copy_playground_file`, t);
    return i?.data.meta.url;
  } catch (e) {
    return null;
  }
}
export async function $$c0(e, t, i, o) {
  let c;
  let u = e.fileKey ? `/file/${e.fileKey}` : "/file/new";
  e.isPlaygroundFile && (u = (c = await d({
    pluginVersionId: e.tryPluginVersionId,
    pluginId: e.tryPluginId,
    isWidget: !!e.isWidget,
    orgId: t,
    teamId: i,
    userId: o
  })) || u);
  let p = {
    "try-plugin-id": e.tryPluginId,
    "try-plugin-version-id": e.tryPluginVersionId,
    "try-plugin-name": e.tryPluginName,
    "is-widget": e.isWidget ? "1" : "0",
    "is-playground-file": e.isPlaygroundFile && c ? "1" : "0"
  };
  switch (e.fileKey && (p["try-plugin-file-key"] = e.fileKey), e.fullscreenEditorType) {
    case nT.Design:
      p.mode = "design";
      p.type = "design";
      break;
    case nT.DevHandoff:
      p.mode = "dev";
      p.type = "design";
      break;
    case nT.Whiteboard:
      p.type = "whiteboard";
      break;
    case nT.Slides:
      p.type = "slides";
      break;
    case nT.Cooper:
      p.type = "cooper";
  }
  e.fuid && (p.fuid = e.fuid);
  e.tryPluginEditorType && (p["try-plugin-editor-type"] = e.tryPluginEditorType);
  eD && (p["time-opened"] = Date.now().toString());
  let m = dR(u, p);
  Ay.redirect(m, Xb ? void 0 : "_blank");
}
export const j = $$c0;