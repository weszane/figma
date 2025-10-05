import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useId } from "react";
import { Label } from "../905/270045";
import { v } from "../905/442517";
import { clickableBaseLinkTracked } from "../figma_app/637027";
import { ny } from "../figma_app/819458";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { WithTrackedPopupButtonPrimitive } from "../figma_app/617427";
import { renderI18nText } from "../905/303541";
import { getI18nState } from "../figma_app/363242";
import { q } from "../905/749058";
import { UX } from "../figma_app/481749";
import { KindEnum } from "../905/129884";
import { uW, Gf, Kk, IT, uk, px, h_, XI, OW, xm, RU, B6, Pe, qp } from "../469e6e40/615314";
import { A } from "../6828/865061";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$v1(e) {
  return e.nullForEmptySettings && 0 === e.settings.length ? null : jsxs("section", {
    "data-testid": `settings-section-${e.title}`,
    className: e.sectionClass ? e.sectionClass : uW,
    children: [jsxs("h2", {
      className: e.headerClass ? e.headerClass : Gf,
      children: [e.icon && jsx(SvgComponent, {
        className: Kk,
        svg: e.icon
      }), jsx("div", {
        children: e.title
      }), e.badge && jsx("span", {
        className: cssBuilderInstance.inlineFlex.ml8.$,
        children: e.badge
      })]
    }), jsxs("ul", {
      className: IT,
      children: [e.description, e.settings.map((t, a) => jsxs("li", {
        children: [t, a < e.settings.length - 1 && jsx("div", {
          className: uk
        })]
      }, t.props.label + "-" + a))]
    })]
  }, e.title);
}
function f(e) {
  return jsxs("div", {
    className: px,
    children: [jsx("div", {
      children: e.label
    }), jsx("div", {
      className: e.descriptionClassName || h_,
      children: e.description
    })]
  });
}
export function $$j4(e) {
  let {
    onClick
  } = e;
  let a = q(UX, !0);
  let i = useCallback(() => {
    onClick();
    a();
  }, [a, onClick]);
  let r = jsxs(Fragment, {
    children: [jsx(f, {
      label: e.label,
      description: e.description
    }), jsxs("div", {
      className: XI,
      children: [jsx("div", {
        children: e.currentValue
      }), jsx(SvgComponent, {
        className: OW,
        svg: A
      })]
    })]
  });
  return e.disabled ? jsx("div", {
    className: xm,
    "data-testid": e.testId,
    children: r
  }) : jsx(WithTrackedPopupButtonPrimitive, {
    className: RU,
    innerText: e.label,
    onClick: i,
    "data-testid": e.testId,
    "aria-label": e.label,
    trackingProperties: e.trackingProperties,
    children: r
  });
}
export function $$y3(e) {
  return jsx("div", {
    className: B6,
    children: jsx(f, {
      label: e.label,
      description: e.description
    })
  });
}
export function $$w0(e) {
  return jsxs("div", {
    className: Pe,
    children: [jsx(f, {
      label: e.label,
      description: e.description
    }), jsx("div", {
      className: qp,
      "data-tooltip": e.contactSupportTooltipCopy ?? "admin-support@figma.com",
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-show-above": !0,
      children: jsx(clickableBaseLinkTracked, {
        trackingEventName: e.label,
        onClick: () => {
          let t = getI18nState()?.getPrimaryLocale(!1);
          ny({
            name: e.user.name,
            email: e.user.email
          }, {
            ticketForms: ["account"],
            fields: [{
              id: "subject",
              value: e.label
            }, {
              id: 0x8e810a50a97,
              value: e.tag || ""
            }],
            suppressAnswerBot: !0,
            locale: t
          });
        },
        trusted: !0,
        children: e.contactSupportCopy ?? renderI18nText("settings_tab.contact_support")
      })
    })]
  });
}
export function $$k2(e) {
  let {
    onToggle,
    sprigOverride
  } = e;
  let l = useId();
  let o = q(UX, !0);
  let d = useCallback(e => {
    onToggle(e);
    sprigOverride ? sprigOverride() : o();
  }, [o, onToggle, sprigOverride]);
  return jsxs("div", {
    className: Pe,
    "data-testid": e.testId,
    children: [jsxs("div", {
      className: "x78zum5 xdt5ytf x1db2dqx",
      children: [jsx(Label, {
        htmlFor: l,
        children: e.label
      }), jsx("span", {
        className: "x1n0bwc9",
        children: e.description
      })]
    }), jsx(v, {
      htmlAttributes: e.tooltipText ? {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": e.tooltipText,
        "data-tooltip-timeout-delay": 50,
        "data-tooltip-show-above": !0,
        "data-tooltip-tip-align-right": !0
      } : {},
      id: l,
      disabled: e.disabled,
      checked: e.isActive,
      onChange: d
    })]
  });
}
export const Ke = $$w0;
export const Kz = $$v1;
export const T_ = $$k2;
export const bX = $$y3;
export const x8 = $$j4;