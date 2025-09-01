import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { fu } from "../figma_app/831799";
import { E3 } from "../figma_app/976749";
import { p8 } from "../figma_app/722362";
import { C } from "../figma_app/198698";
import { om } from "../figma_app/465413";
export function $$c0({
  shouldDisplay: e,
  registerAsActive: t,
  bannerId: r,
  bannerContent: c,
  additionalTrackingProperties: u,
  dataTestId: p,
  location: _
}) {
  let h = p8("showUi");
  let [m, g] = useState(!1);
  let f = E3();
  if (useEffect(() => t(r), [t, r]), useEffect(() => {
    e && g(!1);
  }, [e]), !e || m || !h) return null;
  let E = {
    id: r,
    ...c
  };
  let y = {
    bannerId: om[r],
    bannerType: E.bannerType,
    bannerLocation: _,
    ...u
  };
  return jsx(fu, {
    name: "TopBanner",
    properties: y,
    children: jsx(C, {
      content: E,
      onDismiss: () => g(!0),
      editorType: f,
      dataTestId: p
    })
  });
}
export const f = $$c0;