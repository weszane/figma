import { jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { setupThemeContext } from "../905/614223";
import { textDisplayConfig } from "../905/687265";
import { stylex } from "@stylexjs/stylex";
import { logger } from "../905/651849";
import { LoadingRenderer } from "../905/211326";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { WithTrackedPopupButtonPrimitive, WithTrackedButtonLarge, WithTrackedButton, WithTrackedButtonLargeWide } from "../figma_app/617427";
import { TrackedLinkButton } from "../905/160095";
let m = {
  white: {
    alignItems: "x6s0dn4",
    backgroundColor: "x1yjdb4r",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    color: "x1akne3o",
    display: "x78zum5",
    justifyContent: "xl56j7k",
    minHeight: "x4wtjwi",
    padding: "xf67zum",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  }
};
export function $$h0(e) {
  let t;
  let {
    defaultVariant,
    ctaButtonMeta,
    large
  } = e;
  let g = jsx(LoadingRenderer, {
    isLoading: !!ctaButtonMeta.isLoading,
    className: cssBuilderInstance.flex.alignCenter.$,
    children: () => ctaButtonMeta.label
  });
  let f = e.ctaButtonMeta.variantOverride || defaultVariant;
  if ("custom" === f) {
    let i = e.ctaButtonMeta.customVariantStyles || [];
    t = function (e) {
      return jsx(WithTrackedPopupButtonPrimitive, {
        ...e,
        ...stylex.props(i),
        children: e.children
      });
    };
  } else if ("white" === f) t = function (e) {
    return jsx(setupThemeContext, {
      mode: "light",
      children: jsx(WithTrackedPopupButtonPrimitive, {
        ...e,
        ...stylex.props(m.white),
        children: e.children
      })
    });
  };else {
    if (large && "button" === ctaButtonMeta.type) return jsx(WithTrackedButtonLarge, {
      variant: "primary-large-wide" === f ? "primary" : f,
      onClick: ctaButtonMeta.onClick,
      trackingProperties: {
        trackingDescriptor: ctaButtonMeta.ctaTrackingDescriptor,
        ...ctaButtonMeta.trackingProperties
      },
      disabled: ctaButtonMeta.disabled ?? ctaButtonMeta.isLoading,
      htmlAttributes: {
        ...ctaButtonMeta.tooltipProperties,
        "data-testid": ctaButtonMeta.dataTestId
      },
      children: g
    });
    t = large ? WithTrackedButtonLarge : WithTrackedButton;
  }
  switch (f) {
    case "custom":
    case "white":
    case "primary":
      let _ = {
        trackingProperties: {
          trackingDescriptor: ctaButtonMeta.ctaTrackingDescriptor,
          ...ctaButtonMeta.trackingProperties
        },
        disabled: ctaButtonMeta.disabled ?? ctaButtonMeta.isLoading,
        htmlAttributes: {
          ...ctaButtonMeta.tooltipProperties,
          "data-testid": ctaButtonMeta.dataTestId
        }
      };
      switch (ctaButtonMeta.type) {
        case "button":
          return jsx(t, {
            onClick: ctaButtonMeta.onClick,
            variant: e.emphasized ? "secondary" : "primary",
            ..._,
            children: g
          });
        case "text":
          return jsx(WithTrackedButton, {
            variant: "ghost",
            onClick: ctaButtonMeta.onClick,
            ..._,
            children: g
          });
        case "link":
          return jsx(TrackedLinkButton, {
            href: ctaButtonMeta.href,
            newTab: !0,
            variant: e.emphasized ? "secondary" : "primary",
            size: large ? "lg" : "md",
            ..._,
            children: g
          });
        default:
          throwTypeError(ctaButtonMeta);
      }
    case "primary-large-wide":
      if ("button" !== ctaButtonMeta.type) {
        logger.warn(`[FeatureEducation] CTAButton with variant 'primary-large-wide' is not implemented for type '${ctaButtonMeta.type}'`);
        return null;
      }
      return jsx(WithTrackedButtonLargeWide, {
        variant: "primary",
        onClick: ctaButtonMeta.onClick,
        disabled: ctaButtonMeta.disabled ?? ctaButtonMeta.isLoading,
        htmlAttributes: {
          ...ctaButtonMeta.tooltipProperties,
          "data-testid": ctaButtonMeta.dataTestId
        },
        children: g
      });
    case "secondary":
      let A = {
        trackingProperties: {
          trackingDescriptor: ctaButtonMeta.ctaTrackingDescriptor,
          ...ctaButtonMeta.trackingProperties
        },
        disabled: ctaButtonMeta.disabled ?? ctaButtonMeta.isLoading,
        htmlAttributes: {
          ...ctaButtonMeta.tooltipProperties,
          "data-testid": ctaButtonMeta.dataTestId
        }
      };
      switch (ctaButtonMeta.type) {
        case "text":
          return jsx(t, {
            variant: "ghost",
            onClick: ctaButtonMeta.onClick,
            ...A,
            children: g
          });
        case "button":
          return jsx(t, {
            variant: e.emphasized ? "ghost" : "secondary",
            onClick: ctaButtonMeta.onClick,
            ...A,
            children: g
          });
        case "link":
          return jsx(TrackedLinkButton, {
            variant: e.emphasized ? "ghost" : "secondary",
            href: ctaButtonMeta.href,
            newTab: !0,
            size: large ? "lg" : "md",
            ...A,
            children: g
          });
        default:
          throwTypeError(ctaButtonMeta);
      }
    default:
      throwTypeError(f);
  }
}
export const F = $$h0;