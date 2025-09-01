import { jsx, Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { t as _$$t } from "../905/303541";
import { Pc } from "../figma_app/463500";
import { zi, iL } from "../905/824449";
import { C } from "../905/549861";
export let $$d0 = forwardRef((e, t) => jsx(C, {
  ...e,
  ref: t,
  propertyName: e.dsStyle ? Pc(e.dsStyle.name) : _$$t("design_systems.styles.custom"),
  propertyValues: [],
  visible: !0,
  previewElement: e.dsStyle ? jsx(zi, {
    dsStyle: e.dsStyle,
    size: iL.Large_illustration,
    displayAsDonut: e.displayAsDonut,
    anyNonFrameLikesSelected: e.anyNonFrameLikesSelected
  }) : jsx(Fragment, {}),
  isPaintStyleRow: e.dsStyle?.style_type === "FILL" || e.dsStyle?.style_type === "STROKE",
  isTextStyleRow: e.dsStyle?.style_type === "TEXT",
  isStyleRow: !0
}));
export const Z = $$d0;