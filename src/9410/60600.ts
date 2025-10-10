import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "../905/438674";
import { E as _$$E } from "../905/53857";
import { useSetAtom, useAtomWithSubscription } from "../figma_app/27355";
import { useSingleEffect } from "../905/791079";
import { buildUploadUrl } from "../figma_app/169182";
import { WAFImage } from "../905/675859";
import { renderI18nText, getI18nString } from "../905/303541";
import { isTemplateSearchEnabledAtomFamily } from "../figma_app/755939";
import { useSelectedAndFocusedNodeIds } from "../figma_app/334505";
import { selectViewAction } from "../905/929976";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { getVisibleTheme } from "../905/640017";
import { useEventForwarder } from "../905/453826";
import { useOverlay } from "../905/621515";
import { LZ } from "../figma_app/101956";
import { ModalPriority } from "../figma_app/268271";
import { ImageOverlayComponent } from "../905/129046";
import { _l } from "../figma_app/995208";
import { OnboardingModal } from "../905/425180";
import { ArrowPosition } from "../905/858282";
import { CooperModal, CooperBulkCreate, CooperInsertLockedTemplate, CooperPublishTemplatesOverview } from "../figma_app/6204";
import { useIsFullscreenReady } from "../figma_app/21029";
import { XF, WW, qA, Mt, D9 } from "../1250/182479";
export function $$N2() {
  let e = XF();
  let {
    show,
    isShowing,
    complete
  } = useOverlay({
    overlay: CooperModal,
    priority: ModalPriority.DEFAULT_MODAL
  });
  let m = useSetAtom(isTemplateSearchEnabledAtomFamily);
  let y = useDispatch<AppDispatch>();
  let E = useIsFullscreenReady();
  let w = useAtomWithSubscription(LZ);
  let S = () => {
    y?.(selectViewAction({
      view: "recentsAndSharing"
    }));
  };
  useEffect(() => {
    e || (show(), m(!1));
  }, [e, m, show]);
  let N = "dark" === getVisibleTheme();
  return w || !E ? null : jsx(_l, {
    description: jsx("span", {
      style: {
        whiteSpace: "pre-line"
      },
      children: jsx("span", {
        children: renderI18nText("cooper.onboarding.from_concept_to_creation_design", {
          learnMoreLink: jsx(Link, {
            newTab: !0,
            href: "https://help.figma.com/hc/articles/31271566667543",
            children: renderI18nText("cooper.onboarding.learn_more")
          })
        })
      })
    }),
    disclaimerFooter: jsx("span", {
      children: renderI18nText("cooper.onboarding.this_beta_is_a_free", {
        betaTermsLink: jsx(Link, {
          newTab: !0,
          href: "https://www.figma.com/product-specific-terms/",
          children: renderI18nText("cooper.onboarding.figma_beta_terms")
        })
      })
    }),
    isShowing,
    media: jsx(WAFImage, {
      src: buildUploadUrl(N ? "e612d68148023be0522bcd3b3251aaa6bb7c716d" : "31fcc873278da276aab06196bdcb7e377d28ab6e"),
      alt: getI18nString("cooper.onboarding.welcome.image_alt"),
      width: 332
    }),
    onClose: S,
    preventUserClose: !0,
    primaryCta: {
      type: "button",
      label: renderI18nText("cooper.onboarding.welcome.primary_cta"),
      onClick: () => {
        y?.(postUserFlag({
          [WW]: !0
        }));
        complete();
        m(!0);
      },
      ctaTrackingDescriptor: UpgradeAction.TRY_IT_OUT
    },
    secondaryCta: {
      type: "button",
      label: renderI18nText("cooper.onboarding.welcome.secondary_cta"),
      onClick: S,
      ctaTrackingDescriptor: UpgradeAction.CLOSE
    },
    title: jsxs("div", {
      className: "x78zum5 x6s0dn4 x1pulhmw",
      children: [renderI18nText("cooper.onboarding.meet_figma_buzz"), jsx("div", {
        className: "x78zum5 x2lah0s",
        children: jsx(_$$E, {
          variant: "brandOutline",
          size: "lg",
          children: renderI18nText("general.beta")
        })
      })]
    }),
    trackingContextName: "Slides Onboarding > Welcome"
  });
}
export function $$A0({
  hasMappings: e
}) {
  let {
    show,
    isShowing,
    complete
  } = useOverlay({
    overlay: CooperBulkCreate,
    priority: ModalPriority.DEFAULT_MODAL
  });
  let s = useSelectedAndFocusedNodeIds();
  let o = s.length ? s[0] : null;
  useSingleEffect(() => {
    show();
  });
  useEffect(() => {
    e && complete();
  }, [e, complete]);
  isShowing && !o && complete();
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.RIGHT_BODY,
    description: renderI18nText("cooper.onboarding.simply_select_text_or_an", {
      connectDataBold: jsx("p", {
        className: "x1xlr1w8",
        children: getI18nString("cooper.onboarding.connect_data_bold")
      }),
      spaceChar: jsx(Fragment, {
        children: "\xa0"
      })
    }),
    isCanvasNode: !0,
    isShowing,
    media: jsx(ImageOverlayComponent, {
      src: buildUploadUrl("3d9047607fffbfc98f0176cecba9d57fad7cac48"),
      alt: getI18nString("cooper.onboarding.bulk_create.image_alt"),
      aspectRatio: 240 / 135
    }),
    onClose: complete,
    onTargetLost: complete,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      onClick: complete,
      type: "button",
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    shouldDisableAnimation: !0,
    targetKey: o ?? "",
    title: renderI18nText("cooper.onboarding.select_a_text_or_image"),
    trackingContextName: "Slides Onboarding > Bulk Create Callout"
  });
}
export function $$O3() {
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = useOverlay({
    overlay: CooperInsertLockedTemplate,
    priority: ModalPriority.DEFAULT_MODAL
  });
  let a = useSelectedAndFocusedNodeIds();
  let s = a.length ? a[0] : null;
  isShowing && !s && complete();
  useEventForwarder(uniqueId, qA, () => {
    show();
  });
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.RIGHT_BODY,
    description: renderI18nText("cooper.onboarding.internal_templates_let_you_update", {
      lineBreak: jsxs(Fragment, {
        children: [jsx("br", {}), jsx("br", {})]
      })
    }),
    isCanvasNode: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    pointToLeftEdge: !0,
    pointToTopEdge: !0,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      onClick: complete,
      type: "button",
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    shouldDisableAnimation: !0,
    targetKey: s ?? "",
    title: renderI18nText("cooper.onboarding.edit_content_unlock_if_needed"),
    trackingContextName: "Slides Onboarding > Inserted Locked Template"
  });
}
export function $$L1() {
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = useOverlay({
    overlay: CooperPublishTemplatesOverview,
    priority: ModalPriority.DEFAULT_MODAL
  });
  useEventForwarder(uniqueId, Mt, () => {
    show();
  });
  return jsx(OnboardingModal, {
    arrowPadding: 8,
    description: renderI18nText("cooper.onboarding.templates_help_your_team_stay"),
    isShowing,
    media: jsx(ImageOverlayComponent, {
      src: buildUploadUrl("7c5445059896c65ae2098087f34d2f35cc5a8b20"),
      alt: getI18nString("cooper.onboarding.overlay_image_alt"),
      aspectRatio: 240 / 135
    }),
    onClose: complete,
    onTargetLost: complete,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      onClick: complete,
      type: "button",
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    targetKey: D9,
    title: renderI18nText("cooper.onboarding.publish_templates_to_your_team"),
    trackingContextName: "Slides Onboarding > Publishing Overview"
  });
}
export const AP = $$A0;
export const DG = $$L1;
export const O7 = $$N2;
export const QI = $$O3;