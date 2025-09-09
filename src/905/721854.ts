import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { y as _$$y } from "../905/175043";
import { h as _$$h } from "../905/207101";
import { e as _$$e } from "../905/280005";
import { Uz, xH } from "../905/63728";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { RK } from "../figma_app/815170";
import { JT } from "../905/913055";
import { Yh } from "../figma_app/357047";
import { Bf } from "../figma_app/249941";
import { cq } from "../905/794154";
import { ID, aK } from "../905/487011";
import { lc, dk } from "../905/278499";
import { r as _$$r } from "../905/189361";
import { B } from "../905/222272";
import { y as _$$y2 } from "../905/236825";
function E({
  aiTrackingContext: e,
  children: t,
  action: i,
  shouldAutoFocus: o
}) {
  let {
    close
  } = cq();
  let h = useDispatch();
  let g = useCallback(t => {
    e && ID({
      ...e,
      ...aK(t),
      interaction: lc.DISMISS
    });
    close();
  }, [e, close]);
  let f = useCallback(e => {
    _$$e(e) || h(RK({
      rawInput: e
    }));
  }, [h]);
  let E = i ? jsx(_$$r, {
    onAction: "custom" === i.type ? i.onPerform : () => f(i.url),
    iconPrefix: "custom" === i.type ? i.iconPrefix : void 0,
    variant: "secondary",
    children: "custom" === i.type ? i.label : renderI18nText("ai.learn_more")
  }) : null;
  return jsx(_$$y2, {
    dataTestId: "instruction",
    shouldAutoFocus: o,
    children: jsxs(B, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: [jsxs("div", {
        className: _$$s.flex.gap4.itemsCenter.$,
        children: [jsx(_$$y, {}), jsx("span", {
          className: _$$s.colorText.textBodyMediumStrong.$,
          children: t
        })]
      }), jsxs(B, {
        gap: 8,
        children: [E, jsx(_$$r, {
          onAction: g,
          variant: "secondary",
          shortcuts: [{
            key: Uz.ESCAPE
          }],
          recordingKey: "cancel-instruction",
          children: renderI18nText("ai.cancel")
        })]
      })]
    })
  });
}
export function $$x0({
  action: e,
  actionIcon: t,
  actionLabel: i,
  onPerform: l,
  aiTrackingContext: m,
  children: x,
  getCustomDisabledTextFromSelectedNodes: S,
  getCustomSelectedNodesAmount: w,
  instructionAction: C,
  customLayersIcon: T,
  shouldAutoFocus: k,
  customActionPrefix: R
}) {
  let N = JT();
  let P = useSelector(t => Yh(t.mirror.appModel, e));
  let {
    close
  } = cq();
  let D = useCallback(() => {
    m && ID({
      ...m,
      interaction: lc.DISMISS,
      interaction_type: dk.BUTTON_CLICK
    });
    close();
  }, [m, close]);
  let L = useCallback(e => {
    m && ID({
      ...m,
      ...aK(e),
      interaction: lc.EXECUTE
    });
    l();
  }, [m, l]);
  return (_$$h(() => {
    m && ID({
      ...m,
      interaction: lc.VIEW,
      interaction_type: dk.VIEW
    });
  }), P) ? jsx(_$$y2, {
    onDismiss: D,
    dataTestId: "instructionView",
    shouldAutoFocus: k,
    children: jsxs(B, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: [jsxs("div", {
        className: _$$s.flex.itemsCenter.gap4.$,
        children: [jsx("div", {
          className: _$$s.w24.h24.flex.itemsCenter.justifyCenter.$,
          children: N && 0 !== N.length ? T ? jsx("div", {
            style: {
              "--color-icon": "var(--color-icon-brand)"
            },
            className: _$$s.flex.justifyCenter.itemsCenter.$,
            children: T
          }) : 1 === N.length ? jsx("div", {
            style: sx.add({
              stroke: "var(--color-icon-brand)"
            }).$,
            children: jsx(Bf, {
              guid: N[0].guid,
              className: _$$s.flex.justifyCenter.itemsCenter.colorIconBrand.$
            })
          }) : jsx(_$$y, {
            style: {
              "--color-icon": "var(--color-icon-brand)"
            }
          }) : null
        }), jsx("span", {
          className: _$$s.textBodyMediumStrong.colorTextBrand.truncate.maxW150.$,
          children: function (e, t) {
            if (!e) return null;
            let i = t ? t(e) : e.length;
            return 0 === i ? null : 1 === i ? e[0].name : renderI18nText("ai.n_selected", {
              n: i
            });
          }(N, w)
        })]
      }), jsxs(B, {
        gap: 8,
        align: "center",
        children: [R, jsx(_$$r, {
          onAction: L,
          variant: "secondary",
          iconPrefix: t,
          recordingKey: "instructionView",
          shortcuts: [{
            key: Uz.ENTER,
            modifier: [xH.META]
          }],
          children: i
        })]
      })]
    })
  }) : N && S ? jsx(E, {
    aiTrackingContext: m,
    action: C,
    shouldAutoFocus: k,
    children: S(N) ?? x
  }) : jsx(E, {
    aiTrackingContext: m,
    action: C,
    shouldAutoFocus: k,
    children: x
  });
}
export const A = $$x0;
