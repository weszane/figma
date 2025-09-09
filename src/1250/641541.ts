import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { b as _$$b, bL, mc, YJ, hE, Q$, Ov, q7 } from "../figma_app/860955";
import { E as _$$E } from "../905/632989";
import { z6, CU } from "../905/963340";
import { r as _$$r } from "../905/571562";
import { x as _$$x } from "../905/587214";
import { xk } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { getResourceDataOrFallback } from "../905/663269";
import p from "../vendor/116389";
import { selectWithShallowEqual } from "../905/103090";
import { g as _$$g } from "../1556/359896";
import { n as _$$n } from "../figma_app/3731";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { E as _$$E2 } from "../905/984674";
import { A as _$$A } from "../1250/724587";
import { b as _$$b2 } from "../905/985254";
import { hr } from "../905/352022";
import { vp, HE } from "../905/967587";
import { V as _$$V } from "../1250/329133";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { E as _$$E3 } from "../1556/957507";
import { w as _$$w } from "../figma_app/883622";
import { a as _$$a } from "../1250/599462";
import { g as _$$g2 } from "../1556/689749";
import { Uo } from "../1556/751556";
import { A as _$$A2 } from "../1250/278368";
import { g as _$$g3, K } from "../1250/166809";
import { Tb, OC, Fw } from "../1250/791136";
import { A as _$$A3 } from "../svg/254926";
import { A as _$$A4 } from "../svg/61813";
var g = p;
let L = "plan_switcher--planSwitcherRow--pzSwY";
export let $$$$U0 = "PLAN_SWITCHER_ONBOARDING_KEY";
export function $$G1() {
  let e = useDispatch();
  let t = useSelector(e => getPermissionsStateMemoized(e));
  let n = selectWithShallowEqual(e => vp(e.user, e.currentUserOrgId, e.currentTeamId));
  let o = useSelector(e => e.user);
  let s = useSelector(e => e.plans);
  let l = useTeamPlanFeatures();
  if (useEffect(() => {
    e(hr({
      loadedPlans: s
    }));
  }, []), !n || !o) return null;
  let d = jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 xb3r6kr",
    children: [jsx(_$$n, {
      size: 16,
      userId: n.userId,
      orgId: n.orgId,
      teamId: n.teamId,
      personalSpaceIcon: _$$A3,
      personalSpaceIcon1x: _$$A4
    }), jsx("div", {
      className: "x78zum5 x1q0g3np xet2fuk xb3r6kr",
      children: jsx(_$$E2, {
        fontSize: 13,
        fontWeight: "medium",
        color: "default",
        truncate: !0,
        children: HE(t, n)
      })
    })]
  });
  return _$$A2() ? jsx(W, {
    triggerContent: d,
    currentWorkspace: n,
    currentUser: o,
    planResult: l
  }) : jsx(z, {
    triggerContent: d,
    currentWorkspace: n,
    currentUser: o,
    planResult: l
  });
}
function W({
  triggerContent: e,
  currentWorkspace: t,
  currentUser: n,
  planResult: r
}) {
  let p = useDispatch();
  let {
    manager,
    getTriggerProps
  } = _$$b({
    config2025CuratorHacks: !0
  });
  let {
    menuGroups,
    onChange,
    onCreateTeam
  } = _$$g3({
    currentUser: n
  });
  let v = menuGroups.flatMap(e => e.items).find(e => e.isSelected)?.planId;
  let T = {
    ...manager,
    getFloatingProps: e => {
      let t = manager.getFloatingProps(e);
      return {
        ...t,
        style: {
          ...t?.style,
          minWidth: _$$g2 - 8
        }
      };
    }
  };
  Tb(manager);
  let j = useTeamPlanFeatures();
  let {
    isDraftsToMovePlan,
    dtmMigrationCompleted,
    starterTeamCreated,
    dtmMigrationPlanName,
    dtmPlanParentId,
    dtmPlanParentType
  } = _$$V(getResourceDataOrFallback(j.data) || void 0);
  let L = !isDraftsToMovePlan && dtmMigrationCompleted && getFeatureFlags().dtm_deprecation_post_migration_onboarding;
  return jsxs(bL, {
    manager: T,
    children: [jsxs($, {
      children: [jsxs(_$$E, {
        ...xk(V.menuTrigger, manager.isOpen && V.menuTriggerActive),
        ...getTriggerProps(),
        children: [e, jsx(_$$r, {
          className: "x2lah0s"
        })]
      }), "loaded" === r.status && jsx(_$$A, {
        workspace: t,
        planTier: r.data.tier
      })]
    }), jsxs(mc, {
      "data-onboarding-key": K,
      children: [jsx(z6, {
        title: null,
        onChange: e => {
          onChange(e);
        },
        value: v,
        children: menuGroups.map(e => jsx(YJ, {
          title: e.title ? jsx(hE, {
            children: e.title
          }) : null,
          children: e.items.map(e => jsxs(CU, {
            value: e.planId,
            children: [jsx(Q$, {
              children: e.icon
            }), H(e.displayText), e.badge ? jsx(Ov, {
              children: e.badge
            }) : null]
          }, e.planId))
        }, e.key))
      }), onCreateTeam ? jsxs(q7, {
        onClick: () => onCreateTeam(),
        children: [jsx(Q$, {
          children: jsx(_$$x, {})
        }), getI18nString("navbar.navbar.create_new")]
      }) : null]
    }), L && jsx(_$$a, {
      entryPoint: "plan_nav",
      planName: dtmMigrationPlanName,
      targetKey: $$$$U0,
      starterTeamCreated: starterTeamCreated ?? !1,
      isOrg: "org" === dtmPlanParentType,
      navigateToPlan: () => {
        dtmPlanParentId && q(dtmPlanParentId, p, onChange);
      }
    })]
  });
}
function z({
  triggerContent: e,
  currentWorkspace: t,
  currentUser: n,
  planResult: o
}) {
  let s = useDispatch();
  let l = useRef(null);
  let {
    open
  } = OC();
  let _ = useSelector(_$$E3(Fw));
  let {
    menuGroups,
    onChange,
    onCreateTeam
  } = _$$g3({
    currentUser: n
  });
  let v = e => {
    onChange(e);
  };
  let T = useTeamPlanFeatures();
  let {
    isDraftsToMovePlan,
    dtmMigrationCompleted,
    starterTeamCreated,
    dtmMigrationPlanName,
    dtmPlanParentId,
    dtmPlanParentType
  } = _$$V(getResourceDataOrFallback(T.data) || void 0);
  let B = !isDraftsToMovePlan && dtmMigrationCompleted && getFeatureFlags().dtm_deprecation_post_migration_onboarding;
  return jsxs(Fragment, {
    children: [jsxs($, {
      children: [jsx(_$$g, {
        isShowingDropdown: _,
        ref: l,
        onClick: open,
        children: e
      }), "loaded" === o.status && jsx(_$$A, {
        workspace: t,
        planTier: o.data.tier
      })]
    }), l.current && _ && jsx(Uo, {
      items: g()([...menuGroups.flatMap(e => [e.title && {
        displayText: e.title,
        className: _$$s.wFull.$,
        displayTextClassName: _$$s.colorTextMenuTertiary.$,
        disabled: !0
      }, ...e.items.map(e => ({
        displayText: e.displayText,
        itemBadgeV2: e.badge ?? void 0,
        icon: e.icon,
        isActive: e.isSelected,
        isChecked: e.isSelected,
        className: L,
        callback: () => v(e.planId)
      })), _$$w]), onCreateTeam && {
        displayText: getI18nString("navbar.navbar.create_new"),
        icon: jsx(_$$x, {
          className: "plan_switcher--icon--fiTgb"
        }),
        className: L,
        callback: () => onCreateTeam()
      }]),
      onSelectItem: e => e.callback?.(),
      parentRect: l.current.getBoundingClientRect(),
      dispatch: s,
      onboardingKey: K
    }), B && jsx(_$$a, {
      entryPoint: "plan_nav",
      planName: dtmMigrationPlanName,
      targetKey: $$$$U0,
      starterTeamCreated: starterTeamCreated ?? !1,
      isOrg: "org" === dtmPlanParentType,
      navigateToPlan: () => {
        dtmPlanParentId && q(dtmPlanParentId, s, onChange);
      }
    })]
  });
}
function $({
  children: e
}) {
  return jsx("div", {
    ...xk(getFeatureFlags().file_browser_sidebar_row_ui ? V.planSwitcherRedesign : V.planSwitcher),
    "data-onboarding-key": $$$$U0,
    children: e
  });
}
let q = (e, t, n) => {
  e && n(e, !0);
  t(_$$b2({
    switched_to_new_plan_from_dtm_deprecation_onboarding: !0
  }));
};
let V = {
  planSwitcher: {
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    alignItems: "x6s0dn4",
    justifyContent: "x1qughib",
    paddingLeft: "x6wrskw",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  planSwitcherRedesign: {
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    alignItems: "x6s0dn4",
    justifyContent: "x1qughib",
    paddingLeft: "x163pfp",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  menuTrigger: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    height: "x10w6t97",
    borderRadius: "x12oqio5",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    paddingLeft: "x6wrskw",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    ":hover_backgroundColor": "xv2f06h",
    ":focus-visible_outline": "x5hs570",
    ":focus-visible_outlineColor": null,
    ":focus-visible_outlineOffset": null,
    ":focus-visible_outlineStyle": null,
    ":focus-visible_outlineWidth": null,
    $$css: !0
  },
  menuTriggerActive: {
    backgroundColor: "x30nh5c",
    $$css: !0
  }
};
let H = e => jsx("div", {
  className: "xb3r6kr xlyipyv xuxw1ft xenbecp",
  children: e
});
export const U = $$$$U0;
export const b = $$G1;