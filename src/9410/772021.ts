import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { md, Rq, Xr } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { buildUploadUrl } from "../figma_app/169182";
import { tx } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { Sb } from "../figma_app/101956";
import { r1 } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { e0 } from "../905/696396";
import { y as _$$y } from "../905/129046";
import { rq } from "../905/425180";
import { F_ } from "../905/858282";
import { QLv, xiH } from "../figma_app/6204";
import { W1, qe, rM, RC } from "../figma_app/318123";
let $$b1 = "ai_generate_onboarding_key";
let $$C0 = "ai_new_file_modal_v2_onboarding_key";
let v = "has_seen_figjam_ai_modal_overlay";
let E = "has_seen_figjam_ai_toolbar_tooltip";
let T = r1(W1);
let w = r1(v);
let S = r1(E);
let j = r1("figjam_editor_onboarded");
export function $$I3() {
  let e = md(S);
  let t = md(qe);
  let i = md(rM);
  let s = _$$e({
    overlay: QLv,
    priority: N.HIGH_PRIORITY_MODAL
  }, [e]);
  useEffect(() => {
    let e = setTimeout(() => {
      s.show({
        canShow: e => !e && i && t
      });
    }, 1e3);
    return () => clearTimeout(e);
  }, [t, i, s]);
  return jsx(rq, {
    isShowing: s.isShowing,
    userFlagOnShow: E,
    targetKey: $$b1,
    onClose: s.complete,
    trackingContextName: e0.AI_TOPBAR_TOOLTIP,
    title: tx("whiteboard.ai_onboarding.ai_templates_toolbar.title"),
    description: tx("whiteboard.ai_onboarding.ai_templates_toolbar.description"),
    emphasized: !0
  });
}
export function $$k2({
  targetKey: e
}) {
  let t = md(Rq(Sb));
  let i = md(T);
  let n = md(w);
  let p = md(j);
  let b = Xr(RC);
  let C = _$$e({
    overlay: xiH,
    priority: N.HIGH_PRIORITY_MODAL
  }, [i, n, t, p]);
  _$$h(() => {
    C.show({
      canShow: (e, t, i, r) => !e && !t && !i && r
    });
  });
  let E = () => {
    C.complete();
    b(!0);
  };
  _$$h(() => () => {
    E();
  });
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: tx("whiteboard.ai_onboarding.new_file_modal.footer"),
    isShowing: C.isShowing,
    media: jsx(_$$y, {
      src: buildUploadUrl("b306123ab827a626d46db70bcc5a74e9e76feacf"),
      alt: "",
      aspectRatio: 301 / 154
    }),
    onClose: E,
    onTargetLost: E,
    primaryCta: {
      label: tx("rcs.got_it"),
      type: "button",
      onClick: E,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    targetKey: e,
    title: tx("whiteboard.ai_onboarding.new_file_modal.title"),
    trackingContextName: e0.AI_MODAL_ONBOARDING_TOOLTIP,
    userFlagOnShow: v
  });
}
export const AI = $$C0;
export const bX = $$b1;
export const i1 = $$k2;
export const vi = $$I3;