import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { wA, d4 } from "../vendor/514228";
import { IK } from "../905/521428";
import { QOV } from "../figma_app/763686";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t } from "../905/303541";
import { fu } from "../figma_app/831799";
import { Cu } from "../figma_app/314264";
import { f4 } from "../figma_app/722362";
import { q5 } from "../figma_app/516028";
import { Fk } from "../figma_app/167249";
import { d as _$$d } from "../figma_app/444297";
import { A } from "../905/556276";
import { fx, PF } from "../figma_app/657972";
import { Ad } from "../figma_app/811257";
export function $$y0() {
  let [e, t] = useState(!1);
  let r = wA();
  let y = q5();
  let b = d4(e => e.fileVersion);
  let T = _$$d();
  let I = Fk(e => e.getDirectlySelectedNodes().some(e => "SYMBOL" === e.type));
  let S = A();
  f4(() => {
    t(!1);
  });
  let v = d4(e => e.mirror.appModel.activeUserAction);
  return (useEffect(() => {
    v === QOV.RESIZING && t(!0);
  }, [v]), !T || !S.length || I || e) ? null : jsx(fu, {
    name: "Slides conversion properties panel entrypoint",
    children: jsx(Ad, {
      appendedClassName: _$$s.pt4.$,
      label: null,
      input: jsx(IK, {
        variant: "secondary",
        onClick: () => {
          Cu({
            trackingContext: "Slides conversion properties panel entrypoint",
            name: "slides_conversion_properties_panel_entrypoint"
          });
          fx(y, b, !0).then(e => {
            PF(r, e);
          });
        },
        children: _$$t("slides.general.copy_to_figma_slides")
      })
    })
  });
}
export const W = $$y0;