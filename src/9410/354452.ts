import { useState, useRef, useEffect } from "react";
import { n3, IA } from "../905/859698";
import { StylesBindings, EyedropperBindings, Fullscreen, SelectionPaintHelpers } from "../figma_app/763686";
import { scopeAwareFunction, permissionScopeHandler } from "../905/189185";
import { defaultSessionLocalIDString } from "../905/871411";
import { GP } from "../figma_app/15927";
import { trackEventAnalytics } from "../905/449184";
import { fullscreenValue } from "../figma_app/455680";
export function $$$$u0({
  inheritStyleKeyField: e,
  initialStyleCreationPaint: t,
  isCreatingFromSelection: i,
  trackingOptions: u,
  shouldUseEyedropperStyleCreationFlow: p
}) {
  let [h, m] = useState(null);
  let f = useRef(!1);
  let g = scopeAwareFunction.user("create-style", () => {
    if (f.current = !0, h) {
      let {
        key,
        version
      } = h;
      let i = StylesBindings.getSoftDeletedStyleNodeId(key, version);
      fullscreenValue.restoreSoftDeletedNode(i);
      trackEventAnalytics("Style Created", {
        styleType: u.styleType,
        styleKey: h.key,
        styleVersion: h.version
      });
      return i;
    }
  });
  useEffect(() => {
    let r = permissionScopeHandler.system("create-soft-deleted-style", () => function ({
      initialStyleCreationPaint: e,
      isCreatingFromSelection: t,
      inheritStyleKeyField: i,
      shouldUseEyedropperStyleCreationFlow: r
    }) {
      if (r) return EyedropperBindings.createSoftDeletedStyleForEyedropper();
      if (!e) return Fullscreen.createSoftDeletedStyle(i, "", "", t);
      {
        let t = GP(e);
        return SelectionPaintHelpers.createSoftDeletedStyleFromPaintData(t, "");
      }
    }({
      initialStyleCreationPaint: t,
      inheritStyleKeyField: e,
      isCreatingFromSelection: i,
      shouldUseEyedropperStyleCreationFlow: p
    }));
    if (!r) {
      m(null);
      return;
    }
    m(r);
    return () => {
      Fullscreen.selectStyle(n3.INVALID, IA.INVALID);
      permissionScopeHandler.system("style-creation-cleanup", () => {
        if (r && !f.current) {
          let t = StylesBindings.getSoftDeletedStyleNodeId(r.key, r.version);
          Fullscreen.applyStyleToSelection(e, defaultSessionLocalIDString, !0);
          Fullscreen.hardDeleteSoftDeletedNode(t);
        }
      });
    };
  }, [t, e, i, p]);
  return {
    styleRef: h,
    createStyle: g
  };
}
export const u = $$$$u0;