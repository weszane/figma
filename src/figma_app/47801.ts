import { jsx } from 'react/jsx-runtime';
import { y as _$$y } from '../905/129046';
import { h as _$$h } from '../905/207101';
import { renderI18nText } from '../905/303541';
import { UpgradeAction } from '../905/370443';
import { rq } from '../905/425180';
import { e as _$$e } from '../905/621515';
import { LQ8 } from '../figma_app/6204';
import { useAtomWithSubscription } from '../figma_app/27355';
import { buildUploadUrl } from '../figma_app/169182';
import { N } from '../figma_app/268271';
import { userFlagExistsAtomFamily } from '../figma_app/545877';
let m = 'connected_projects_usage_onboarded';
let g = userFlagExistsAtomFamily(m);
export function $$f0({
  projectUrl: e,
  onboardingKey: t,
  description: r,
  title: c,
  trackingContext: f,
  arrowPosition: E
}) {
  let y = useAtomWithSubscription(g);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: LQ8,
    priority: N.DEFAULT_MODAL
  }, [y]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(rq, {
    arrowPosition: E,
    clickOutsideToHide: !0,
    description: r,
    isShowing,
    media: jsx(_$$y, {
      src: buildUploadUrl('8f292b8398eee392b11219a292629559fbba77a6'),
      alt: 'Connected projects logo',
      aspectRatio: 376 / 122
    }),
    onClose: complete,
    primaryCta: {
      type: 'button',
      label: renderI18nText('general.got_it'),
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    secondaryCta: void 0 !== e ? {
      type: 'link',
      label: renderI18nText('resource_connection.view_project'),
      href: e,
      ctaTrackingDescriptor: UpgradeAction.VIEW_PROJECT
    } : void 0,
    targetKey: t,
    title: c,
    trackingContextName: f,
    userFlagOnShow: m,
    width: 240
  });
}
export const b = $$f0;