import { debugState } from "../905/407919";
import { initializeWidgetAllowlist } from "../905/837497";
import { a8 } from "../figma_app/559491";
import { gI } from "../figma_app/399472";
import { findProfile } from "../figma_app/740025";
import { isLoaded } from "../905/18797";
import { isWidget } from "../figma_app/45218";
import { getWidgetAllowListKey, hasLocalFileId, PluginInstallStatus } from "../figma_app/155287";
import { $u, Hr, E2 } from "../905/257019";
async function p(e) {
  let {
    loadingState,
    user,
    authedProfilesById,
    openFile
  } = debugState.getState();
  let d = findProfile({
    authedProfilesById,
    userId: user?.id
  });
  let u = openFile?.key ?? null;
  let p = getWidgetAllowListKey(e, u);
  isLoaded(loadingState, p) || (await debugState.dispatch(initializeWidgetAllowlist({
    orgId: e,
    profileId: d?.id
  })));
}
async function m(e) {
  let {
    loadingState
  } = debugState.getState();
  isLoaded(loadingState, a8.loadingKeyForPayload(e)) || (await debugState.dispatch(gI()));
}
export function $$h2(e, t) {
  if (hasLocalFileId(e)) return !1;
  let {
    publishedWidgets
  } = debugState.getState();
  let r = publishedWidgets[e.plugin_id];
  return !!r && $u(r, t);
}
async function g(e, t) {
  await Promise.all([p(t), m(t)]);
  return {
    isWhitelisted: debugState.getState().whitelistedWidgets?.[e.plugin_id],
    isOrgPrivate: $$h2(e, t)
  };
}
export async function $$f3(e, t) {
  let i = t && !!t.widgets_whitelist_enforced;
  if (t && i) {
    if (!e) return PluginInstallStatus.PLUGIN_NOT_ORG_APPROVED;
    let {
      isWhitelisted,
      isOrgPrivate
    } = await g(e, t.id);
    if (!isOrgPrivate && !isWhitelisted) return PluginInstallStatus.PLUGIN_NOT_ORG_APPROVED;
  }
  return PluginInstallStatus.PLUGIN_INSTALLABLE;
}
export async function $$_1(e, t) {
  return isWidget(e) ? await Hr.canRunExtensionInsideOrg(e, t) : await E2.canRunExtensionInsideOrg(e, t);
}
export function $$A0(e, t) {
  return isWidget(e) ? t.widget_requests_allowed : t.plugin_requests_allowed;
}
export const VT = $$A0;
export const hb = $$_1;
export const s7 = $$h2;
export const y8 = $$f3;