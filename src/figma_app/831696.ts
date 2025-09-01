import { Im } from "../figma_app/493477";
import { X3B } from "../figma_app/763686";
import { fn, sH } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { Ay } from "../905/612521";
import { parseQuery, serializeQuery } from "../905/634134";
import { EO } from "../905/691205";
import { FFileType } from "../figma_app/191312";
export function $$u3(e, t, r, n, s) {
  let c = {};
  let u = parseQuery(Ay.location.search);
  for (let e in u) "" !== e && (c[e] = u[e]);
  e.scalingInfo?.viewportScalingMode && (c.scaling = e.scalingInfo.viewportScalingMode);
  e.scalingInfo?.contentScalingMode && (c["content-scaling"] = e.scalingInfo?.contentScalingMode);
  e.pageId && fn(sH(e.pageId)) && (c["page-id"] = e.pageId);
  e.nodeId && fn(sH(e.nodeId)) && (c["node-id"] = EO(e.nodeId));
  e.startingPointNodeId && fn(sH(e.startingPointNodeId)) && (c["starting-point-node-id"] = e.startingPointNodeId);
  t && r && (c["prev-plan-id"] = t, c["prev-plan-type"] = r);
  e.prevSelectedView && (c["prev-selected-view"] = e.prevSelectedView.view, "recentsAndSharing" === e.prevSelectedView.view ? c["prev-tab"] = e.prevSelectedView.tab : "folder" === e.prevSelectedView.view && (c["folder-id"] = e.prevSelectedView.folderId));
  e.share && (c.share = "1");
  e.disableDefaultKeyboardNav ? c["disable-default-keyboard-nav"] = "1" : delete c["disable-default-keyboard-nav"];
  e.hideUI ? c["hide-ui"] = "1" : delete c["hide-ui"];
  e.showProtoSidebar || void 0 === e.showProtoSidebar && X3B?.isViewerSidebarShownByDefault() ? c["show-proto-sidebar"] = "1" : delete c["show-proto-sidebar"];
  null == e.showHotspots || e.showHotspots ? delete c["hotspot-hints"] : c["hotspot-hints"] = "0";
  null == e.showDeviceFrame || e.showDeviceFrame ? delete c["device-frame"] : c["device-frame"] = "0";
  e.inlinePreview ? c["inline-viewer"] = "1" : delete c["inline-viewer"];
  e.versionId && (c["version-id"] = e.versionId);
  e.isAudienceViewPopout && (c.popout = !0);
  delete c.mode;
  delete c.fuid;
  n && (c.t = n);
  s && (c["open-popout"] = "true");
  return c;
}
export function $$p1(e, t, r) {
  var i;
  let a = $$u3(e, t, r);
  let o = [];
  (t || r) && (o.push("prev-plan-id"), o.push("prev-plan-type"));
  e.prevSelectedView && (o.push("prev-selected-view"), "recentsAndSharing" === e.prevSelectedView.view ? o.push("prev-tab") : "folder" === e.prevSelectedView.view && o.push("folder-id"));
  (getFeatureFlags().slides_pv_av_refresh ? !window.opener : e.isAudienceViewPopout) && o.push("popout");
  e.share && o.push("share");
  i = a;
  o.forEach(e => {
    delete i[e];
  });
  a = i;
  return Im(a) ? "" : `?${serializeQuery(a)}`;
}
export function $$_7(e, t, r, i, a) {
  let s = $$u3(e, t, r, i, a);
  return Im(s) ? "" : `?${serializeQuery(s)}`;
}
export function $$h2(e) {
  return e ? `#${encodeURIComponent(e)}` : "";
}
export function $$m5(e, t) {
  return t === FFileType.SLIDES ? e.replace(/proto/, "deck") : e;
}
export function $$g0(e) {
  if (!e) return !1;
  try {
    new URL(e);
  } catch (e) {
    return !1;
  }
  var t = window.location.origin;
  return e.startsWith(t + "/proto");
}
export function $$f4(e) {
  if (!$$g0(e)) return null;
  let t = e.match(/\/proto\/([^/]+)\/?/);
  return t ? t[1] : null;
}
export function $$E8(e) {
  try {
    let t = new URL(e).searchParams.get("node-id");
    if (!t) return null;
    let r = decodeURIComponent(t).replace("-", ":");
    if (!fn(sH(r))) return null;
    return r;
  } catch {
    return null;
  }
}
export function $$y6() {
  return `${window.location.origin}/proto/`;
}
export const Ik = $$g0;
export const LT = $$p1;
export const ZK = $$h2;
export const lD = $$u3;
export const pb = $$f4;
export const qI = $$m5;
export const qS = $$y6;
export const vp = $$_7;
export const zU = $$E8;