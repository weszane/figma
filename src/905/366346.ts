import { PanelType } from "../figma_app/763686";
import { SceneGraphUnavailableError } from "../figma_app/518682";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { customHistory } from "../905/612521";
import { serializeQuery } from "../905/634134";
import { buildUrlPath } from "../905/760074";
import { replaceColonWithDash } from "../905/691205";
export function $$p4(e, t) {
  (e = e ? e.slice(1) : "") && ("commentPreferences" === e ? t.showCommentPreferencesPicker = !0 : t.commentThreadId = e);
}
export function $$m8(e, t) {
  e["node-id"] && (t.nodeId = e["node-id"]);
  e["version-id"] && (t.versionId = e["version-id"]);
  e["try-plugin-id"] && (t.tryPluginId = e["try-plugin-id"]);
  e["try-plugin-version-id"] && (t.tryPluginVersionId = e["try-plugin-version-id"]);
  e["try-plugin-name"] && (t.tryPluginName = e["try-plugin-name"]);
  "1" === e["is-playground-file"] && (t.isPlaygroundFile = !0);
}
export function $$h7(e = !1) {
  return e ? `/test/eval/view${customHistory.location.search}` : `/test/interactions${customHistory.location.search}`;
}
export function $$g3(e, t, i, n, r, a = !1) {
  if (n) return buildUrlPath(n, r || null, e);
  let s = `/${e}/${t}`;
  a || (i ? s += `/${i}` : s += "/Untitled");
  return s;
}
export function $$f6(e, t) {
  t && isValidSessionLocalID(parseSessionLocalID(t)) && (e["node-id"] = replaceColonWithDash(t));
}
export function $$_2(e, t) {
  t && (e["version-id"] = t);
}
export function $$A9(e, t) {
  t && (e += `#${t}`);
  return e;
}
export function $$y10(e, t) {
  Object.keys(t).length > 0 && (e += `?${serializeQuery(t)}`);
  return e;
}
export function $$b0(e, t) {
  if (t && isValidSessionLocalID(parseSessionLocalID(t))) try {
    let i = getSingletonSceneGraph().get(t)?.type;
    i && ["CANVAS", "DOCUMENT"].includes(i || "") && (e.p = "f");
  } catch (e) {
    if (!(e instanceof SceneGraphUnavailableError)) throw e;
  }
}
export function $$v1(e) {
  switch (e) {
    case PanelType.CODE:
      return "code";
    case PanelType.DAKOTA:
      return "cms";
    case PanelType.SETTINGS:
      return "settings";
    case PanelType.FILE:
      return null;
  }
}
export function $$I5(e) {
  return "code" === e && (getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan) ? PanelType.CODE : "cms" === e && getFeatureFlags().dakota ? PanelType.DAKOTA : "settings" === e ? PanelType.SETTINGS : PanelType.FILE;
}
export const H_ = $$b0;
export const Hz = $$v1;
export const Wi = $$_2;
export const ZH = $$g3;
export const d8 = $$p4;
export const eE = $$I5;
export const gR = $$f6;
export const oU = $$h7;
export const qi = $$m8;
export const qr = $$A9;
export const sR = $$y10;