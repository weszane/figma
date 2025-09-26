import { jsx } from "react/jsx-runtime";
import { useRef, useMemo, useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import s from "classnames";
import { parsePxInt } from "../figma_app/783094";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { TrackingProvider } from "../figma_app/831799";
import { OnboardingSequence } from "../905/152487";
import { b as _$$b } from "../figma_app/199304";
import { j } from "../figma_app/928756";
import { l as _$$l } from "../figma_app/826369";
import { M as _$$M } from "../figma_app/826981";
import { Ui3PositionType } from "../905/11928";
import { helpWidgetSizePlusMargin, designToolbarHeight } from "../figma_app/786175";
import { P } from "../figma_app/546366";
var o = s;
let b = e => {
  switch (e) {
    case Ui3PositionType.BOTTOM_RIGHT:
      return {
        bottom: "24px",
        right: helpWidgetSizePlusMargin
      };
    case Ui3PositionType.CENTER:
      return {
        top: "50%",
        left: "50%"
      };
    case Ui3PositionType.EDITOR_TOP_LEFT:
      return {
        top: `${parsePxInt(designToolbarHeight) + 12}px`,
        left: "calc(var(--left-panel-width) + 12px)"
      };
    case Ui3PositionType.UI3_EDITOR_TOP_LEFT:
      return {
        top: "calc(var(--editor-banner-height) + 12px)",
        left: "calc(var(--left-panel-width) + 24px)"
      };
    default:
      throwTypeError(e);
  }
};
function v(e) {
  let {
    onClose
  } = e;
  let i = useRef(null);
  let a = useMemo(() => b(e.position), [e.position]);
  j(() => e.onClose("escape_button_pressed"));
  let s = e.clickOutsideToHide ?? (void 0 === e.primaryCta && void 0 === e.secondaryCta);
  let l = useCallback(() => onClose("clicked_outside"), [onClose]);
  _$$l(s, i, l);
  let p = cssBuilderInstance.fixed.borderBox.bRadius2.pb16.pl16.pr16.zIndexSecondaryModal.fontInter.flex.flexColumn.if(e.emphasized, cssBuilderInstance.colorBgBrand.colorTextOnbrand, cssBuilderInstance.colorBg.colorText).if(!!e.media, cssBuilderInstance.pt12, cssBuilderInstance.pt16).$;
  let A = styleBuilderInstance.add({
    width: `${e.width ?? 300}px`,
    boxShadow: "var(--elevation-400-menu-panel)",
    ...a
  }).$;
  return jsx(TrackingProvider, {
    name: e.trackingContextName,
    properties: e.trackingProperties,
    children: jsx(_$$M, {
      className: o()(p, P),
      style: A,
      ref: i,
      transformString: e.position === Ui3PositionType.CENTER ? "translate(-50%, -50%)" : void 0,
      children: jsx(_$$b, {
        ...e
      })
    })
  });
}
export function $$I0(e) {
  return jsx(OnboardingSequence, {
    isShowing: e.isShowing,
    userFlagOnShow: e.userFlagOnShow,
    testId: e.testId,
    forceEditorTheme: e.forceEditorTheme,
    children: jsx(v, {
      ...e
    })
  });
}
export const X = $$I0;
