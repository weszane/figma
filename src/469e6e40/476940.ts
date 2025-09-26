import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { EventShield } from "../905/821217";
import { useSingleEffect } from "../905/791079";
import { buildUploadUrl } from "../figma_app/169182";
import { renderI18nText, getI18nString } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { N } from "../figma_app/268271";
import { ImageOverlayComponent } from "../905/129046";
import { OnboardingModal } from "../905/425180";
import { NotModalType } from "../905/11928";
import { ArrowPosition } from "../905/748636";
import { d as _$$d } from "../905/811033";
import { iX } from "../905/415545";
import { ueY } from "../figma_app/6204";
import { n as _$$n } from "../905/347702";
import { qH, UU, ym, vH, fD, mk, V_ } from "../905/807385";
let j = _$$n(() => N.SECONDARY_MODAL);
let y = _$$n(() => _$$d.isBrowserNotificationSupported());
let w = _$$n(() => _$$d.isFirebaseInitialized());
export function $$k0({
  registrationOrigin: e,
  fixedPositionProps: t
}) {
  let {
    complete,
    isShowing,
    show
  } = _$$e({
    overlay: ueY,
    priority: j()
  });
  useSingleEffect(() => {
    (async () => {
      let e = await _$$d.getPermissionPreference();
      let t = w() && y() && "prompt" === e.state;
      show({
        canShow: () => t
      });
    })();
  });
  useEffect(() => {
    t?.setIsShowingOverlay?.(isShowing);
  }, [isShowing, t]);
  let k = () => {
    _$$d.requestPushNotifications(e);
  };
  let {
    calloutTitle,
    mediaPath,
    targetKey,
    arrowPosition
  } = function (e) {
    let t;
    let a;
    let n;
    let s;
    switch (e) {
      case iX.NEW_COMMENT:
        t = renderI18nText("browser_notifications.onboarding_overlay.title.replies");
        a = qH;
        n = UU;
        s = ArrowPosition.BOTTOM;
        break;
      case iX.COMMENT_REPLY:
        t = renderI18nText("browser_notifications.onboarding_overlay.title.replies");
        a = qH;
        n = ym;
        s = ArrowPosition.TOP_RIGHT;
        break;
      default:
        t = renderI18nText("browser_notifications.onboarding_overlay.title.activity");
        a = vH;
        n = fD;
        s = ArrowPosition.TOP_RIGHT;
    }
    return {
      calloutTitle: t,
      mediaPath: a,
      targetKey: n,
      arrowPosition: s
    };
  }(e);
  let I = {
    clickOutsideToHide: !0,
    description: renderI18nText("browser_notifications.onboarding_overlay.description"),
    disableHighlight: !0,
    forceUI3Theme: !0,
    isShowing,
    media: jsx(ImageOverlayComponent, {
      alt: getI18nString("browser_notifications.onboarding_overlay.media.alt"),
      aspectRatio: mk,
      src: buildUploadUrl(mediaPath)
    }),
    onClose: complete,
    primaryCta: {
      ctaTrackingDescriptor: UpgradeAction.NEXT,
      label: renderI18nText("browser_notifications.onboarding_overlay.primary_cta"),
      onClick: () => {
        k();
        complete();
      },
      type: "button"
    },
    secondaryCta: {
      ctaTrackingDescriptor: UpgradeAction.CLOSE,
      label: renderI18nText("browser_notifications.onboarding_overlay.secondary_cta"),
      onClick: complete,
      type: "button"
    },
    shouldHideArrow: !0,
    title: calloutTitle,
    trackingContextName: "Browser Notifications Onboarding",
    width: V_,
    zIndex: NotModalType.MODAL
  };
  return jsx(EventShield, {
    eventListeners: ["onClick", "onMouseDown"],
    children: t?.targetLocation ? jsx(OnboardingModal, {
      ...I,
      fixedPosition: !0,
      location: t.targetLocation,
      innerRef: t.innerRef
    }) : jsx(OnboardingModal, {
      ...I,
      arrowPosition,
      targetKey,
      zIndex: e === iX.NOTIFICATION_BELL ? NotModalType.NOTIFICATION_MODAL : void 0
    })
  });
}
export const ue = $$k0;