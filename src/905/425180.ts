import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect, useCallback } from "react";
import { UI3ConditionalWrapper } from "../905/341359";
import s from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { TrackingProvider } from "../figma_app/831799";
import { M } from "../905/152487";
import { F_ } from "../905/748636";
import { Ay, gm } from "../figma_app/419216";
import { eP } from "../figma_app/195407";
import { x } from "../figma_app/849451";
import { b as _$$b } from "../figma_app/199304";
import { j } from "../figma_app/928756";
import { l as _$$l } from "../figma_app/826369";
import { M as _$$M } from "../figma_app/826981";
import { R } from "../905/11928";
import { P, h as _$$h } from "../figma_app/546366";
var o = s;
function I(e) {
  let t = useRef(null);
  let i = e.innerRef ?? t;
  return jsx(w, {
    ...e,
    innerRef: i
  });
}
function E(e) {
  let [t, i] = useState(0);
  let a = e.width ?? 240;
  let [s, o] = useState({
    top: window.innerHeight / 2 - t / 2,
    left: window.innerWidth / 2 - a / 2
  });
  let l = useRef(null);
  let d = l.current?.clientHeight;
  useEffect(() => {
    let e = () => {
      d && o({
        top: window.innerHeight / 2 - d / 2,
        left: window.innerWidth / 2 - a / 2
      });
    };
    d && (i(d), e());
    window.addEventListener("resize", e);
    return () => window.removeEventListener("resize", e);
  }, [d, a]);
  j(() => e.onClose("escape_button_pressed"));
  let c = e.isCanvasNode ? Ay : eP;
  let u = useRef(null);
  let g = c({
    targetKey: e.targetKey,
    height: t,
    width: a,
    topPadding: 4 + (e.arrowPadding ?? 0),
    alignPointerToLeft: e.pointToLeftEdge,
    alignPointerToTop: e.pointToTopEdge,
    shouldCenterArrow: e.shouldCenterArrow,
    arrowPosition: e.arrowPosition ?? F_.TOP,
    onTargetLost: e.onTargetLost,
    pointerOffsetOverride: e.pointerOffsetOverride
  });
  g && (u.current = g);
  let f = e.shouldRepositionOnTargetLost ?? !0;
  g || f || (g = u.current);
  return jsx(w, {
    ...e,
    location: g ? {
      left: g.left,
      top: g.top,
      pointerPosition: g.pointerPosition,
      pointerOffset: g.pointerOffset
    } : {
      left: s.left,
      top: s.top
    },
    targetKey: e.targetKey,
    innerRef: l
  });
}
export function $$x0(e) {
  let {
    forceUI3Theme = !1
  } = e;
  return e.fixedPosition ? jsx(UI3ConditionalWrapper, {
    disabled: !forceUI3Theme,
    children: jsx(I, {
      ...e
    })
  }) : jsx(UI3ConditionalWrapper, {
    disabled: !forceUI3Theme,
    children: jsx(E, {
      ...e
    })
  });
}
let S = {
  [R.MODAL]: cssBuilderInstance.zIndexModal,
  [R.SECONDARY_MODAL]: cssBuilderInstance.zIndexSecondaryModal,
  [R.TERTIARY_MODAL]: cssBuilderInstance.zIndexTertiaryModal,
  [R.UNSET]: cssBuilderInstance,
  [R.NOTIFICATION_MODAL]: cssBuilderInstance
};
function w(e) {
  let {
    location,
    onClose,
    zIndex = R.SECONDARY_MODAL
  } = e;
  let s = cssBuilderInstance.fixed.borderBox.bRadius2.pb16.pl16.pr16.fontInter.flex.flexColumn.match(zIndex, S).$$if(!!e.media, cssBuilderInstance.pt12, cssBuilderInstance.pt16).$;
  let u = e.width ?? 240;
  let p = styleBuilderInstance.$$if(e.emphasized, styleBuilderInstance.colorBgBrand.colorTextOnbrand, styleBuilderInstance.colorBg.colorText).$$if(e.isTooltip, styleBuilderInstance.colorBgTooltip.colorTextTooltip).add({
    width: `${u}px`,
    boxShadow: "var(--elevation-400-menu-panel)",
    left: `${location.left}px`,
    top: `${location.top}px`
  }).$;
  let h = e.clickOutsideToHide ?? (void 0 === e.primaryCta && void 0 === e.secondaryCta);
  let _ = useCallback(() => onClose("clicked_outside"), [onClose]);
  _$$l(h, e.innerRef, _);
  return jsxs(TrackingProvider, {
    name: e.trackingContextName,
    properties: e.trackingProperties,
    children: [!e.disableHighlight && e.targetKey && jsx(x, {
      target: e.targetKey,
      isBrandColor: e.highlightBlue
    }), jsxs(_$$M, {
      isTooltip: e.isTooltip,
      className: o()(s, P, {
        [_$$h]: e.zIndex === R.NOTIFICATION_MODAL
      }),
      style: p,
      ref: e.innerRef,
      shouldDisableAnimation: e.shouldDisableAnimation,
      children: [void 0 !== location.pointerPosition && !e.shouldHideArrow && jsx(gm, {
        arrowPosition: location.pointerPosition,
        arrowOffset: location.pointerOffset,
        modalColor: p.backgroundColor
      }), jsx(_$$b, {
        ...e
      })]
    })]
  });
}
export function $$C1(e) {
  return jsx(M, {
    isShowing: e.isShowing,
    userFlagOnShow: e.userFlagOnShow,
    testId: e.testId,
    forceEditorTheme: e.forceEditorTheme,
    children: jsx($$x0, {
      ...e
    })
  });
}
export const on = $$x0;
export const rq = $$C1;