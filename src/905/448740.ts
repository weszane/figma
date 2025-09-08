import { getCurrentPluginVersion } from "../figma_app/300692";
import { xQ } from "../figma_app/45218";
import { ManifestEditorType } from "../figma_app/155287";
import { jl } from "../905/544659";
import { ic } from "../905/702716";
export function $$l2(e, t, i, n) {
  let r = i?.manifest?.id;
  if (r) {
    let i = e[r] || t[r];
    if (i) return i;
  }
  if (n) {
    let i = e[n] || t[n] || null;
    if (i) return i;
  }
}
export function $$d10({
  existingExtension: e,
  localExtension: t
}) {
  return !!(xQ(e) || t?.manifest.containsWidget);
}
export function $$c6(e, t) {
  return e ? e.manifest : t ? getCurrentPluginVersion(t)?.manifest : void 0;
}
export function $$u9(e, t) {
  return $$c6(e, t)?.editorType;
}
export function $$p1(e) {
  return !e?.versions || 0 === Object.keys(e.versions).length;
}
export function $$m3(e) {
  return !!e?.monetized_resource_metadata?.price;
}
export function $$h5(e) {
  return "dynamic-page" !== e.manifest.documentAccess;
}
export function $$g4(e, t) {
  return !!e?.manifest?.permissions?.includes("payments") || !!t?.monetized_resource_metadata?.has_freemium_code;
}
export var $$f7 = (e => (e.INVALID_ID = "invalid_id", e.PAYMENTS_API = "payments_api", e.PROPOSED_API = "proposed_api", e.INSPECT_EDITOR_TYPE = "inspect_editor_type", e.DOCUMENT_ACCESS = "document_access", e.INVALID_MANIFEST = "invalid_manifest", e.MISSING_EDITOR_TYPE = "missing_editor_type", e.MISSING_NETWORK_REASONING = "missing_network_reasoning", e))($$f7 || {});
export function $$_0(e, t, i) {
  return e ? t?.id ? e?.manifest?.permissions?.includes("payments") && (!function (e, t) {
    if ($$p1(e)) return !0;
    let i = e?.creator.id;
    return !!i && i === t.id;
  }(t, i) || !i.stripe_account_status) ? "payments_api" : e?.manifest?.enableProposedApi ? "proposed_api" : e.manifest.editorType?.includes(ManifestEditorType.INSPECT) ? "inspect_editor_type" : $$h5(e) && (e.manifest.containsWidget || $$p1(t) || t && getCurrentPluginVersion(t)?.manifest?.documentAccess === "dynamic-page") ? "document_access" : e.error ? ic(e.error) ? "missing_editor_type" : jl(e.error) ? "missing_network_reasoning" : "invalid_manifest" : null : "invalid_id" : null;
}
export function $$A8({
  existingExtension: e,
  localExtension: t
}) {
  return `update_${t ? t?.localFileId : `${e?.id}_${e?.current_plugin_version_id}`}`;
}
export const EX = $$_0;
export const Fh = $$p1;
export const Gl = $$l2;
export const J9 = $$m3;
export const Kc = $$g4;
export const Rc = $$h5;
export const Vq = $$c6;
export const Wh = $$f7;
export const bo = $$A8;
export const nT = $$u9;
export const p4 = $$d10;