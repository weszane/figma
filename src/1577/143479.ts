import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { b as _$$b, q7, bL, mc } from "../figma_app/860955";
import { K } from "../905/443068";
import { PopoverOutlet } from "../905/691059";
import { ButtonPrimitive } from "../905/632989";
import { I } from "../905/932503";
import { UI3ConditionalWrapper } from "../905/341359";
import { getFeatureFlags } from "../905/601108";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { hideDropdownAction } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { logAndTrackCTA } from "../figma_app/314264";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { selectTeams } from "../905/338617";
import { gN } from "../figma_app/273118";
import { OrganizationType } from "../905/833838";
import { KindEnum } from "../905/129884";
import { s as _$$s, c as _$$c } from "../905/744710";
import { A as _$$A } from "../6828/364616";
import { A as _$$A2 } from "../3850/824007";
let C = "notifs_plan_filter--boldTitle--ZUcpT";
let N = "notifs_plan_filter--planFilterContainer--E2TSh";
let A = "notifs_plan_filter--autoTruncate--gl9us ellipsis--ellipsis--Tjyfa";
export let $$I0 = "ALL_PLANS_FILTER";
export function $$R1(e) {
  let {
    currentPlanFilter,
    onPlanFilterUpdate
  } = e;
  let R = useDispatch();
  let E = selectCurrentFile();
  let D = useRef(null);
  let F = !!getFeatureFlags().limited_plan_spaces;
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let B = selectCurrentUser();
  let S = useSelector(e => F ? e.plans : B ? e.authedUsers.byId[B.id]?.plans : null);
  let O = useSelector(selectTeams);
  let q = useSelector(e => e.orgById);
  let U = () => {
    R(hideDropdownAction());
    logAndTrackCTA({
      userId: B?.id,
      fileKey: E?.key,
      eventName: "Notification Settings Button Clicked"
    });
    R(showModalHandler({
      type: _$$s,
      data: {
        tab: _$$c.NOTIFICATIONS
      }
    }));
  };
  if (!B || !S || S.length <= 1) return jsxs("div", {
    className: N,
    children: [jsx("h1", {
      className: C,
      children: getI18nString("user_notification.all_notifications")
    }), e.displaySettings && S?.length === 1 && jsx(K, {
      "aria-label": getI18nString("user_notifications.settings"),
      htmlAttributes: {
        "data-dropdown-tooltip": getI18nString("user_notifications.settings"),
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip-show-above": !0
      },
      onClick: U,
      children: jsx(I, {})
    })]
  });
  let H = S.map(e => e.plan_id);
  H.unshift($$I0);
  let z = (e, t) => e === $$I0 ? getI18nString("user_notification.all_notifications") : t[e];
  let V = S.reduce((e, t) => {
    if (F && "plan_type" in t) {
      let i = "";
      if (t.plan_type === OrganizationType.ORG) {
        let e = q[t.plan_id];
        i = e?.name ?? i;
      } else {
        let e = O[t.plan_id];
        i = e?.name ?? i;
      }
      e[t.plan_id] = i;
    } else "name" in t && (e[t.plan_id] = t.name);
    return e;
  }, {});
  let Q = (e, t) => {
    e.stopPropagation();
    onPlanFilterUpdate(t);
  };
  let $ = H.map(e => jsxs(q7, {
    onClick: t => {
      Q(t, e);
    },
    children: [e === currentPlanFilter && jsx("span", {
      className: "notifs_plan_filter--fillMenu--Ar-HO",
      children: jsx(SvgComponent, {
        svg: _$$A2
      })
    }), jsx("span", {
      className: `${e === currentPlanFilter ? "notifs_plan_filter--planNameChecked--dbvr9" : "notifs_plan_filter--planNameUnchecked--J40CF"} ${A}`,
      children: z(e, V)
    })]
  }, e));
  return jsxs("div", {
    className: N,
    ref: D,
    children: [jsx(PopoverOutlet, {
      children: jsxs(bL, {
        manager,
        children: [jsxs(ButtonPrimitive, {
          "aria-label": getI18nString("user_notifications.notif_filter_label", {
            planName: z(currentPlanFilter, V)
          }),
          className: "notifs_plan_filter--dropdownButton--hQgHc",
          ...getTriggerProps(),
          children: [jsx("span", {
            className: [C, A].join(" "),
            children: gN(z(currentPlanFilter, V), 35)
          }), jsx(SvgComponent, {
            svg: _$$A,
            className: "notifs_plan_filter--chevronIcon--0Rqnp"
          })]
        }), jsx(UI3ConditionalWrapper, {
          children: jsx(mc, {
            children: $
          })
        })]
      })
    }), e.displaySettings && jsx(K, {
      "aria-label": getI18nString("user_notifications.settings"),
      htmlAttributes: {
        "data-dropdown-tooltip": getI18nString("user_notifications.settings"),
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip-show-above": !0
      },
      onClick: U,
      children: jsx(I, {})
    })]
  });
}
export const a = $$I0;
export const j = $$R1;