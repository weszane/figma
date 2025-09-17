import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useAtomWithSubscription, Rq, Xr } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { buildUploadUrl } from "../figma_app/169182";
import { renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { Sb } from "../figma_app/101956";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
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
let T = userFlagExistsAtomFamily(W1);
let w = userFlagExistsAtomFamily(v);
let S = userFlagExistsAtomFamily(E);
let j = userFlagExistsAtomFamily("figjam_editor_onboarded");
export function $$I3() {
  let e = useAtomWithSubscription(S);
  let t = useAtomWithSubscription(qe);
  let i = useAtomWithSubscription(rM);
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
    title: renderI18nText("whiteboard.ai_onboarding.ai_templates_toolbar.title"),
    description: renderI18nText("whiteboard.ai_onboarding.ai_templates_toolbar.description"),
    emphasized: !0
  });
}
export function $$k2({
  targetKey: e
}) {
  let t = useAtomWithSubscription(Rq(Sb));
  let i = useAtomWithSubscription(T);
  let n = useAtomWithSubscription(w);
  let p = useAtomWithSubscription(j);
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
    description: renderI18nText("whiteboard.ai_onboarding.new_file_modal.footer"),
    isShowing: C.isShowing,
    media: jsx(_$$y, {
      src: buildUploadUrl("b306123ab827a626d46db70bcc5a74e9e76feacf"),
      alt: "",
      aspectRatio: 301 / 154
    }),
    onClose: E,
    onTargetLost: E,
    primaryCta: {
      label: renderI18nText("rcs.got_it"),
      type: "button",
      onClick: E,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    targetKey: e,
    title: renderI18nText("whiteboard.ai_onboarding.new_file_modal.title"),
    trackingContextName: e0.AI_MODAL_ONBOARDING_TOOLTIP,
    userFlagOnShow: v
  });
}
export const AI = $$C0;
export const bX = $$b1;
export const i1 = $$k2;
export const vi = $$I3;