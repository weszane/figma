import { jsx } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString, renderI18nText } from "../905/303541";
import { E as _$$E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { r1 } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { h } from "../905/284399";
import { k } from "../905/391967";
import { q3 } from "../figma_app/450829";
import { qw_ } from "../figma_app/6204";
let $$h2 = "plugin-publish-invite-publishers-onboarding-event";
let $$m1 = "plugin-publish-invite-publishers-click-event";
let g = "seen_plugin_publish_invite_publishers_onboarding";
let f = r1(g);
let E = () => getI18nString("rcs.plugin_publish.work_with_other_developers");
function y() {
  return jsx("p", {
    children: renderI18nText("rcs.plugin_publish.if_anyone_helped")
  });
}
export function $$b0() {
  let e = useAtomWithSubscription(f);
  let t = _$$e({
    overlay: qw_,
    priority: N.SECONDARY_MODAL
  }, [e]);
  _$$E(t.uniqueId, $$h2, () => {
    t.show({
      canShow: e => !e
    });
  });
  _$$E(t.uniqueId, [$$m1, "Lost DOM Target"], () => {
    t.complete();
  });
  return jsx(h, {
    element: y,
    isShowing: t.isShowing,
    modalType: q3.ANNOUNCEMENT_POINTER,
    onClickPrimaryCta: t.complete,
    onClose: t.complete,
    onManualDismiss: t.complete,
    onboardingKey: k,
    title: E,
    trackingContextName: "Plugin Publish Invite Publishers Onboarding Modal",
    userFlagOnShow: g,
    width: 300
  });
}
export const Wk = $$b0;
export const oE = $$m1;
export const zK = $$h2;