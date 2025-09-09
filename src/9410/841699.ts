import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { O as _$$O } from "../905/501876";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import l from "classnames";
import { lt } from "../905/511649";
import { Ex, vj, zE } from "../figma_app/919079";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { useCanAccessDevModeEntryPoint, useCanUseDevModeDemoFile } from "../figma_app/473493";
import { d as _$$d, cR, hv } from "../figma_app/715641";
import { h as _$$h } from "../905/207101";
import { l7, X0, U0, ZI, Xd } from "../figma_app/88239";
import { c as _$$c } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { N as _$$N } from "../figma_app/268271";
import { nT, o5 } from "../figma_app/433401";
import { rq } from "../905/425180";
import { F_ } from "../905/858282";
import { xjb } from "../figma_app/6204";
import { j7 } from "../905/929976";
import { bx } from "../figma_app/8833";
import { ow } from "../figma_app/976749";
import { n as _$$n } from "../figma_app/848232";
import { Np } from "../figma_app/193867";
import { Ib } from "../905/129884";
import { p as _$$p } from "../figma_app/353099";
import { y as _$$y } from "../9410/598921";
var d = l;
function w({
  devFocusedOnboarding: e
}) {
  let t = l7();
  let i = useDispatch();
  let n = useAtomWithSubscription(_$$d);
  let s = useAtomWithSubscription(cR);
  let l = useAtomWithSubscription(hv)?.data;
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: xjb,
    priority: _$$N.DEFAULT_MODAL
  });
  _$$h(() => {
    t && !l && nT(i);
    !t && !l && (n || s) && show();
  });
  let p = {
    label: renderI18nText("dev_handoff.workflows.overview.onboarding.primary_cta"),
    type: "button",
    onClick: complete,
    ctaTrackingDescriptor: _$$c.GOT_IT
  };
  let m = {
    label: renderI18nText("dev_handoff.workflows.overview.onboarding.secondary_cta"),
    type: "link",
    href: "https://help.figma.com/hc/articles/23918228264855",
    ctaTrackingDescriptor: _$$c.LEARN_MORE
  };
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: n ? renderI18nText("dev_handoff.workflows.overview.onboarding.first_rfd.description") : e ? renderI18nText("dev_handoff.workflows.overview.onboarding.has_rfd.dev_mode.description") : renderI18nText("dev_handoff.workflows.overview.onboarding.has_rfd.design.description"),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    primaryCta: p,
    secondaryCta: m,
    targetKey: o5,
    title: n ? renderI18nText("dev_handoff.workflows.overview.onboarding.first_rfd.title") : renderI18nText("dev_handoff.workflows.overview.onboarding.has_rfd.title"),
    trackingContextName: "Dev Mode Overview Onboarding"
  });
}
let R = "overview_entry--isSelected--E6mSl";
export function $$D0({
  count: e,
  isInTab: t,
  isActive: i
}) {
  return jsx(Ex, {
    className: d()("overview_entry--countBadge---5UQw", t && "overview_entry--isInTab--J7wAV", i && _$$s.colorText.$),
    text: `${e}`,
    size: vj.SMALL,
    color: zE.DEFAULT,
    subtle: !0
  });
}
export function $$M1({
  devFocusedOnboarding: e
}) {
  let t = X0();
  let i = !useCanAccessDevModeEntryPoint();
  let l = useDispatch();
  let u = U0();
  let p = useSelector(e => i ? void 0 : Np(e, u));
  let g = l7();
  let x = ZI();
  let y = useAtomWithSubscription(hv)?.data;
  let [b, v] = useAtomValueAndSetter(cR);
  let E = useCanUseDevModeDemoFile();
  let T = useAtomWithSubscription(_$$d);
  let M = ow();
  let P = _$$n();
  let F = Xd();
  let B = useCallback(e => {
    if (e.stopPropagation(), e.preventDefault(), i) return;
    let {
      clientX,
      clientY
    } = e;
    l(j7({
      type: bx,
      data: {
        clientX,
        clientY
      }
    }));
  }, [i, l]);
  return !t || M ? null : 0 === x ? null : (g || y || b || T || v(!0), jsxs(_$$y, {
    autoHeight: !0,
    withBorder: !0,
    children: [jsx(lt, {
      className: d()("overview_entry--entryRow--l-Ofr", g && R, i && "overview_entry--isDisabled--OAHeM"),
      onClick: function (e) {
        e.preventDefault();
        F();
      },
      onContextMenu: B,
      href: p,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": i ? getI18nString("dev_handoff.paywall.org_not_member_hint") : void 0,
      "data-tooltip-text-left": !0,
      recordingKey: "dev_handoff.workflows.overview_entry",
      children: jsxs("div", {
        className: d()("overview_entry--entryRowInner--fPECV", g && R),
        children: [jsxs("div", {
          className: "overview_entry--leftSide--0zNy- text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: [jsx(_$$O, {
            className: "overview_entry--readyIcon--QwDeG"
          }), renderI18nText("dev_handoff.workflows.overview.title")]
        }), jsx("div", {
          "data-onboarding-key": o5,
          children: jsx($$D0, {
            count: x
          })
        })]
      })
    }), !E && !P && jsx(_$$p, {
      children: jsx(w, {
        devFocusedOnboarding: e
      })
    })]
  }));
}
export const s = $$D0;
export const $ = $$M1;