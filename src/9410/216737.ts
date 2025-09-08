import { Fullscreen } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { f } from "../905/940356";
export function $$o0({
  isReplay: e,
  props: t
}) {
  let i;
  let o;
  let l;
  let d;
  let c = f("cursor_bot_v2_make_show_me_primary_cta");
  let u = () => {
    t.onClickNext?.();
    Fullscreen.triggerActionInUserEditScope("set-tool-default", null);
  };
  let p = t.isFollowUp ? getI18nString("cursor_bot.got_it") : getI18nString("tooltips_plus_onboarding.next");
  let h = t.isFollowUp ? _$$c.GOT_IT : _$$c.NEXT;
  c ? (i = {
    ctaText: e ? getI18nString("cursor_bot.show_me_again") : getI18nString("cursor_bot.show_me"),
    ctaTrackingDescriptor: e ? _$$c.SHOW_ME_AGAIN : _$$c.SHOW_ME
  }, o = {
    ctaText: p,
    ctaTrackingDescriptor: h
  }, l = t.onClickShowMe, d = u) : (i = {
    ctaText: p,
    ctaTrackingDescriptor: h
  }, o = {
    ctaText: e ? getI18nString("cursor_bot.show_me_again") : getI18nString("cursor_bot.show_me"),
    ctaTrackingDescriptor: e ? _$$c.SHOW_ME_AGAIN : _$$c.SHOW_ME
  }, l = u, d = t.onClickShowMe);
  return {
    primaryCtaProps: i,
    secondaryCtaProps: o,
    onPrimaryCtaClick: l,
    onSecondaryCtaClick: d
  };
}
export const W = $$o0;