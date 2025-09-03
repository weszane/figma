import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { uN } from "../figma_app/338442";
import { getSingletonSceneGraph } from "../905/700578";
import { Pt } from "../figma_app/806412";
import { Point } from "../905/736624";
import { t } from "../905/303541";
import { OE, O2 } from "../figma_app/164212";
import { an } from "../figma_app/626952";
import { c as _$$c } from "../figma_app/528598";
import { S } from "../905/459477";
import { _H } from "../figma_app/408883";
export function $$x0({
  guids: e,
  recordingKey: t,
  hideVariableBinding: n,
  entrypoint: d = "default",
  windowRef: x
}) {
  let g = _H();
  let {
    typedPropDefsExcludingHidden,
    assignmentValuesByDefId
  } = an(e, OE.ASSIGNMENT, !0);
  let [_, b] = useState(!1);
  return (useEffect(() => {
    b(!0);
  }, []), _) ? jsx("div", {
    className: "x87ps6o",
    children: jsx(_$$c, {
      assignmentValues: assignmentValuesByDefId,
      containerWidth: O2.RESIZABLE_SIDEBAR,
      entrypointForInstanceSwapPicker: S.InstancePickerEntrypoint.INSTANCE_SWAP_PROP_INSTANCE_PANEL,
      forBubbledProps: !1,
      getInstanceSwapPickerPosition: (e, t, n, o) => {
        let i = x?.current?.getBoundingClientRect();
        let r = e.getBoundingClientRect();
        return new Point(r.left - (i?.left ?? 0), r.top - (i?.top ?? 0) + r.height + 8);
      },
      guids: e,
      hideBindingButton: n,
      hideIcon: n,
      instanceSwapPickerIdPrefix: "code-editor" === d ? "code-editor-instance-swap-prop-assignment-picker-" : void 0,
      recordingKey: Pt(t, "propDefs", uN.TYPED),
      sceneGraph: getSingletonSceneGraph(),
      typedPropDefs: typedPropDefsExcludingHidden,
      viewOnly: g
    })
  }) : null;
}
export function $$g1() {
  return jsx("div", {
    className: "xh8yej3 x5yr21d xl56j7k x78zum5 x6s0dn4 x1n0bwc9 x2b8uid",
    children: t("sites.code_component.drawer.properties_empty_state")
  });
}
export const D = $$x0;
export const F = $$g1;