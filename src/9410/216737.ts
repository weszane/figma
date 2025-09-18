import { Fullscreen } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { selectUserFlag } from "../905/940356";
export function $$o0({
  isReplay: e,
  props: t
}) {
  let i;
  let o;
  let l;
  let d;
  let c = selectUserFlag("cursor_bot_v2_make_show_me_primary_cta");
  let u = () => {
    t.onClickNext?.();
    Fullscreen.triggerActionInUserEditScope("set-tool-default", null);
  };
  let p = t.isFollowUp ? getI18nString("cursor_bot.got_it") : getI18nString("tooltips_plus_onboarding.next");
  let h = t.isFollowUp ? UpgradeAction.GOT_IT : UpgradeAction.NEXT;
  c ? (i = {
    ctaText: e ? getI18nString("cursor_bot.show_me_again") : getI18nString("cursor_bot.show_me"),
    ctaTrackingDescriptor: e ? UpgradeAction.SHOW_ME_AGAIN : UpgradeAction.SHOW_ME
  }, o = {
    ctaText: p,
    ctaTrackingDescriptor: h
  }, l = t.onClickShowMe, d = u) : (i = {
    ctaText: p,
    ctaTrackingDescriptor: h
  }, o = {
    ctaText: e ? getI18nString("cursor_bot.show_me_again") : getI18nString("cursor_bot.show_me"),
    ctaTrackingDescriptor: e ? UpgradeAction.SHOW_ME_AGAIN : UpgradeAction.SHOW_ME
  }, l = u, d = t.onClickShowMe);
  return {
    primaryCtaProps: i,
    secondaryCtaProps: o,
    onPrimaryCtaClick: l,
    onSecondaryCtaClick: d
  };
}
export const W = $$o0;