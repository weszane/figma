let n = {
  canLoadImageResource: !0,
  canLoadFontResource: !0,
  isInPrototypeViewer: !1,
  appIsReadOnly: !1,
  appIsRecovery: !1,
  appCanRenderMultiplayerOrSelectionUI: !0,
  appCanRenderHyperlinkHoverUI: !0,
  appCanInteractWithWidgetEmbedsAndLinkPreviews: !0,
  appCanRenderScrollbars: !0,
  appCanRenderSceneGraphUI: !0,
  actionStateDisableUpdates: !1,
  onlyRenderTopLevelFrameOfSelection: !1,
  clickOnlyComments: !1,
  allowToggleCommentsWhenLoggedOut: !1,
  requireInteractionForFocus: !1,
  requestVariableMirroring: !0,
  requestAssetMirroring: !0
};
export function $$r1(e) {
  if ("function" == typeof e) {
    n = e(n);
    return;
  }
  n = e;
}
export function $$a0() {
  let e = {};
  for (let t of Object.keys(n)) e[t] = () => n[t];
  return e;
}
export const N = $$a0;
export const g = $$r1;