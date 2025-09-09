import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { O } from "../905/969533";
import { reportError } from "../905/11";
import { s as _$$s } from "../cssbuilder/589278";
import { sx } from "../905/941192";
import { oB, j7 } from "../905/929976";
import { z } from "../905/905430";
import { aS, Im } from "../905/608145";
import { c4 } from "../figma_app/805925";
import { Um } from "../905/848862";
import { hasLocalFileId } from "../figma_app/155287";
import { cq } from "../905/794154";
import { w0 } from "../figma_app/189990";
import { ms } from "../figma_app/38430";
let b = "EXTENSION_SUBMENU_DROPDOWN";
export function $$T4(e) {
  return !!(e.manifest.menu && e.manifest.menu.length > 0);
}
export function $$I2({
  augmentedExtension: e
}) {
  let {
    extension
  } = e;
  let r = Um();
  let i = $$S1(extension);
  let a = c4();
  let {
    close
  } = cq();
  let d = w0();
  if (!i || !extension || !extension.manifest || !extension.manifest.menu) return null;
  let c = z(extension.manifest.menu, extension).map(e => aS(e, e => () => {
    var t;
    Im(a, "quick-actions", e.menuAction);
    d(e, !0);
    ("run-installed-plugin" !== (t = e.menuAction).type && "run-local-plugin" !== t.type ? (reportError(_$$e.AI_FOR_PRODUCTION, Error("shouldSubmenuCloseQuickActions expected 'run-installed-plugin' or 'run-local-plugin'")), 1) : t.parameterOnly && t.parameterEntry) || close();
  }));
  return jsx(ms, {
    parentRect: r?.data.targetRect,
    displayAboveTarget: r?.data.displayAboveTarget,
    lean: "left",
    minWidth: 64,
    items: c
  });
}
export function $$S1(e) {
  let t = Um();
  return hasLocalFileId(e) ? t?.type === b && t?.data.extensionId === e.plugin_id && t?.data.localFileId === e.localFileId : t?.type === b && t?.data.extensionId === e.plugin_id && t?.data.localFileId === null;
}
export function $$v0({
  submenuIsShown: e,
  extension: t,
  displayAboveTarget: r
}) {
  let n = useDispatch();
  return useCallback(i => {
    if (e) n(oB()); else if (i) {
      let e = i.getBoundingClientRect();
      n(j7({
        type: b,
        data: {
          extensionId: t.plugin_id,
          localFileId: hasLocalFileId(t) ? t.localFileId : null,
          targetRect: e,
          displayAboveTarget: r
        }
      }));
    }
  }, [n, e, t, r]);
}
export function $$A3({
  augmentedExtension: e,
  submenuRef: t
}) {
  let {
    extension,
    canRun
  } = e;
  return $$T4(extension) && canRun ? jsx("span", {
    className: _$$s.bgTransparent.$,
    "data-testid": "submenu-button",
    ref: t,
    style: sx.add({
      marginLeft: "-8px"
    }).$,
    children: jsx(O, {})
  }) : null;
}
export const S3 = $$v0;
export const U4 = $$S1;
export const Xq = $$I2;
export const lM = $$A3;
export const q8 = $$T4;
