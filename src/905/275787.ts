import { jsx } from "react/jsx-runtime";
import { memo, useMemo, useCallback } from "react";
import { createPortal } from "../vendor/944059";
import { useSelector } from "../vendor/514228";
import { isNotNullish, isNullish } from "../figma_app/95419";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { ms, c$ } from "../figma_app/236327";
import { renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { d1 } from "../905/766303";
import { b as _$$b } from "../905/217163";
import { ud } from "../905/862913";
import { Fk } from "../figma_app/167249";
import { JA } from "../figma_app/608944";
import { n as _$$n } from "../905/186638";
var $$y0 = (e => (e.ASSETS_PANEL = "library-item-tile-context-menu-for-assets-panel", e.LIBRARY_MODAL = "library-item-tile-context-menu-for-library-modal", e.ACTIONS_ASSETS = "library-item-tile-context-menu-for-actions-assets", e))($$y0 || {});
let b = e => "library-item-tile-context-menu-for-assets-panel" === e || "library-item-tile-context-menu-for-library-modal" === e || "library-item-tile-context-menu-for-actions-assets" === e;
let v = ms;
let I = c$;
let $$E1 = memo(({
  dropdownShown: e,
  hideForLocalComponents: t,
  hidePublishingForLocalComponents: i,
  onOpenFlyout: l,
  onJumpToLocalComponent: d,
  selectedView: c,
  usePortal: f
}) => {
  let {
    isFlyoutOpen
  } = JA();
  let E = useSelector(e => e.library.defaultPublished.libraryKeys);
  let S = ud();
  let w = useMemo(() => d1({
    fileByKey: S,
    selectedView: c
  }), [S, c]);
  let C = b(e?.type) ? e.data.component : null;
  let T = _$$n(C);
  let k = _$$b({
    libraryKey: C?.library_key,
    nodeId: C?.node_id,
    mainComponent: !0
  });
  let R = null != k.data;
  let N = C?.library_key === w?.library_key;
  let P = useMemo(() => !!(!b(e?.type) || !w || N && t || C && E.includes(C?.library_key)) || !N && !R, [R, w, E, e?.type, t, N, C]);
  let O = useMemo(() => C && N && !i ? jsx(x, {
    localNodeId: C.node_id
  }, `togglePublishable-${C.node_id}`) : null, [i, N, C]);
  let D = useMemo(() => {
    let e = renderI18nText("design_systems.assets_panel.go_to_main");
    return N && C ? d ? jsx(I, {
      onClick: () => d?.(C.node_id),
      recordingKey: "libraryItemTileContextMenu.goToMain",
      children: e
    }, "goToMainLocal") : null : k.data?.type === "team" ? jsx(I, {
      href: k.data.link,
      target: "_blank",
      children: e
    }, "goToMainSubscribed") : null;
  }, [N, C, d, k.data]);
  let L = useMemo(() => l && C ? jsx(I, {
    disabled: isFlyoutOpen && T,
    onClick: () => l(C, e?.data?.sectionPosition, e?.data?.sectionNameForTracking),
    children: renderI18nText("design_systems.assets_panel.view_details")
  }, "openFlyout") : null, [l, C, isFlyoutOpen, T, e?.data?.sectionPosition, e?.data?.sectionNameForTracking]);
  let F = useMemo(() => P ? null : [O, D, L].filter(isNotNullish), [D, L, O, P]);
  if (!F || 0 === F.length) return null;
  let M = jsx(v, {
    style: sx.add(e?.data?.position).add(sx.fixed).$,
    children: F
  });
  return f ? createPortal(M, document.body) : M;
});
function x({
  localNodeId: e
}) {
  let t = Fk(t => {
    let i = t.get(e);
    return i ? i.isStateGroup ? i.isPublishable : i.isSymbolPublishable : null;
  }, e);
  let i = useCallback(() => {
    let i = getSingletonSceneGraph().get(e);
    if (!i) return null;
    l7.user("toggle-publishability", () => {
      i.isStateGroup ? i.isPublishable = !t : i.isLooseComponent && (i.isSymbolPublishable = !t);
    });
  }, [e, t]);
  return isNullish(t) ? null : jsx(I, {
    onClick: i,
    children: t ? renderI18nText("design_systems.publishing_modal.hide_when_publishing") : renderI18nText("design_systems.publishing_modal.show_when_publishing")
  }, "togglePublishableOption");
}
export const K = $$y0;
export const h = $$E1;