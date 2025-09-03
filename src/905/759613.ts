import { jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { J } from "../905/614223";
import { g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { k } from "../905/651849";
import { x } from "../905/211326";
import { s as _$$s } from "../cssbuilder/589278";
import { e6, c as _$$c, $z, lR } from "../figma_app/617427";
import { pW } from "../905/160095";
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
    ...g.textBodyMedium,
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
  let g = jsx(x, {
    isLoading: !!ctaButtonMeta.isLoading,
    className: _$$s.flex.alignCenter.$,
    children: () => ctaButtonMeta.label
  });
  let f = e.ctaButtonMeta.variantOverride || defaultVariant;
  if ("custom" === f) {
    let i = e.ctaButtonMeta.customVariantStyles || [];
    t = function (e) {
      return jsx(e6, {
        ...e,
        ...Ay.props(i),
        children: e.children
      });
    };
  } else if ("white" === f) t = function (e) {
    return jsx(J, {
      mode: "light",
      children: jsx(e6, {
        ...e,
        ...Ay.props(m.white),
        children: e.children
      })
    });
  };else {
    if (large && "button" === ctaButtonMeta.type) return jsx(_$$c, {
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
    t = large ? _$$c : $z;
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
          return jsx($z, {
            variant: "ghost",
            onClick: ctaButtonMeta.onClick,
            ..._,
            children: g
          });
        case "link":
          return jsx(pW, {
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
        k.warn(`[FeatureEducation] CTAButton with variant 'primary-large-wide' is not implemented for type '${ctaButtonMeta.type}'`);
        return null;
      }
      return jsx(lR, {
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
          return jsx(pW, {
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