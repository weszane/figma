import { useState, useRef, useEffect } from "react";
import { n3, IA } from "../905/859698";
import { Pt4, OmW, glU, Osy } from "../figma_app/763686";
import { nc, l7 } from "../905/189185";
import { AD } from "../905/871411";
import { GP } from "../figma_app/15927";
import { sx } from "../905/449184";
import { Y5 } from "../figma_app/455680";
export function $$$$u0({
  inheritStyleKeyField: e,
  initialStyleCreationPaint: t,
  isCreatingFromSelection: i,
  trackingOptions: u,
  shouldUseEyedropperStyleCreationFlow: p
}) {
  let [h, m] = useState(null);
  let f = useRef(!1);
  let g = nc.user("create-style", () => {
    if (f.current = !0, h) {
      let {
        key,
        version
      } = h;
      let i = Pt4.getSoftDeletedStyleNodeId(key, version);
      Y5.restoreSoftDeletedNode(i);
      sx("Style Created", {
        styleType: u.styleType,
        styleKey: h.key,
        styleVersion: h.version
      });
      return i;
    }
  });
  useEffect(() => {
    let r = l7.system("create-soft-deleted-style", () => function ({
      initialStyleCreationPaint: e,
      isCreatingFromSelection: t,
      inheritStyleKeyField: i,
      shouldUseEyedropperStyleCreationFlow: r
    }) {
      if (r) return OmW.createSoftDeletedStyleForEyedropper();
      if (!e) return glU.createSoftDeletedStyle(i, "", "", t);
      {
        let t = GP(e);
        return Osy.createSoftDeletedStyleFromPaintData(t, "");
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
      glU.selectStyle(n3.INVALID, IA.INVALID);
      l7.system("style-creation-cleanup", () => {
        if (r && !f.current) {
          let t = Pt4.getSoftDeletedStyleNodeId(r.key, r.version);
          glU.applyStyleToSelection(e, AD, !0);
          glU.hardDeleteSoftDeletedNode(t);
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