import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useId } from "react";
import { d4 } from "../vendor/514228";
import { b as _$$b, bL, mc, r1, Q$, Ov, rm } from "../figma_app/860955";
import { z6, CU } from "../905/963340";
import { K as _$$K } from "../905/443068";
import { e as _$$e } from "../905/428849";
import { E as _$$E } from "../905/632989";
import { V as _$$V } from "../905/291719";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import h from "classnames";
import { y6, nS, Pt } from "../figma_app/806412";
import { x1 } from "../905/714362";
import { wv } from "../figma_app/236327";
import { t as _$$t } from "../905/303541";
import { A as _$$A } from "../905/482208";
import { VU } from "../905/625959";
import { LW, bs } from "../figma_app/553940";
import { Um } from "../905/848862";
import { nj } from "../figma_app/889655";
import { Ib } from "../905/129884";
import { Yh, TY, c1 } from "../figma_app/357047";
import { c as _$$c } from "../figma_app/740884";
import { oO } from "../figma_app/467440";
import { Cf, it } from "../905/504727";
import { TT } from "../905/114390";
import { MR, $0 } from "../figma_app/336720";
import { Zk, HK } from "../figma_app/29089";
import { M as _$$M } from "../figma_app/182591";
import { a1, by } from "../figma_app/23780";
import { fullHeightSidebarFlyoutButton, singleItem, fullHeightSidebarFlyout, flyoutDropdownShown, fullHeightSidebarFlyoutChevron, fullHeightSidebarFlyoutDropdownShown, largeDisplayDropdown, pointingDropdown } from "../figma_app/430407";
var m = h;
function M(e) {
  return `flyout-dropdown-${e}`;
}
let F = e => {
  switch (e) {
    case "move-flyout":
      return _$$t("fullscreen.flyout.move_tools");
    case "region-flyout":
      return _$$t("fullscreen.flyout.region_tools");
    case "pen-flyout":
      return _$$t("fullscreen.flyout.drawing_tools");
    case "shape-flyout":
      return _$$t("fullscreen.flyout.shape_tools");
    case "boolean-flyout":
      return _$$t("fullscreen.flyout.boolean_groups");
    case "styles-flyout":
      return _$$t("fullscreen.flyout.styles");
    case "symbol-flyout":
      return _$$t("fullscreen.flyout.components");
    case "prototype-view-flyout":
      return _$$t("fullscreen.flyout.prototype_view");
    case "slides-presentation-flyout":
      return _$$t("fullscreen.flyout.slides_presentation");
    default:
      return "";
  }
};
function j(e, t, r) {
  let i;
  let a;
  if ("currentTool" === e) {
    let e = LW(t);
    a = i = e?.ui3Icon || jsx(_$$V, {});
  } else {
    let e = bs(r);
    i = e?.ui3Icon || jsx(_$$V, {});
    a = bs(r)?.ui3FlyoutIcon ?? i;
  }
  return {
    ui3Icon: i,
    ui3FlyoutIcon: a
  };
}
function U(e, t) {
  return e && t ? e.action === t.action : !e && !t;
}
export function $$B1(e) {
  let {
    item,
    disabled,
    styleActiveItem,
    recordingKey
  } = e;
  let [c, u] = useState(null);
  let _ = Um();
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let E = useCallback(() => {
    u(null);
  }, []);
  useEffect(() => (y6(E), () => nS(E)));
  let y = (e, t) => {
    u(e);
    let r = e.actionOnFlyoutItemClick ?? e.action;
    VU.get(r, "toolbar")(t);
  };
  let b = d4(e => item.children.find(t => {
    if (Zk(t)) {
      let r = t.property && e.mirror.appModel[t.property] === t.propertyValue;
      let n = t.isActive && t.isActive(e);
      return r || n;
    }
    return !1;
  }), U);
  let I = d4(e => {
    let r = item.children.find(t => Zk(t) && Yh(e.mirror.appModel, t.action));
    return "symbol-flyout" === item.name ? r : b || (c && Yh(e.mirror.appModel, c.action) ? c : r);
  }, U);
  let v = d4(e => !!I && Yh(e.mirror.appModel, I.action));
  if (!I) return null;
  v || x1("FlyoutView", `Expected defaultItem with action ${I.action} to be enabled`);
  let A = _?.type === M(item.name);
  let N = !0;
  if (A) {
    for (let e of item.children) if (Zk(e) && (void 0 !== e.property || void 0 !== e.isActive)) {
      N = !1;
      break;
    }
  }
  if (item.name !== MR && getFeatureFlags().ui3p_flyout_menu_fpl_migration) {
    let e = new Map();
    item.children.forEach(t => {
      HK(t) || e.set(t.action, t);
    });
    let i = item.flyoutShowItemIcons || void 0 === item.flyoutShowItemIcons;
    return jsxs(bL, {
      manager,
      children: [jsx(V, {
        item,
        defaultItem: I,
        activeItem: b,
        disabled,
        recordingKey,
        styleActiveItem,
        getTriggerProps
      }), jsx(mc, {
        children: jsx(z6, {
          title: jsx(r1, {
            children: item.name
          }),
          value: I.action,
          onChange: (t, {
            event: r
          }) => y(e.get(t), r),
          recordingKey: Pt(recordingKey, "menu"),
          children: item.children.map((e, t) => HK(e) ? null : jsx(G, {
            item: e,
            showItemIcon: i
          }, t))
        })
      })]
    });
  }
  return jsxs(Fragment, {
    children: [jsx(V, {
      item,
      defaultItem: I,
      activeItem: b,
      disabled,
      recordingKey,
      styleActiveItem,
      getTriggerProps
    }), A && jsx(H, {
      item,
      onFlyoutItemClick: y,
      hideCheck: N,
      recordingKey
    })]
  });
}
function G(e) {
  let {
    item,
    showItemIcon
  } = e;
  let {
    icons,
    text,
    shortcutText
  } = z(item, showItemIcon);
  return jsxs(CU, {
    value: item.action,
    children: [jsx(Q$, {
      children: icons && icons.ui3FlyoutIcon
    }), text, jsx(Ov, {
      children: jsx(rm, {
        children: shortcutText
      })
    })]
  });
}
function V(e) {
  let {
    item,
    defaultItem,
    activeItem,
    disabled,
    styleActiveItem,
    getTriggerProps,
    recordingKey
  } = e;
  let h = item.children.length > 1;
  let f = Um();
  let E = f?.type === M(item.name);
  let y = useId();
  let b = !!activeItem && !TY(f) && !disabled && styleActiveItem;
  let I = defaultItem.text || $$Y0(defaultItem.action);
  let v = j(defaultItem.property, defaultItem.propertyValue, defaultItem.action);
  let C = Pt(recordingKey, "default", defaultItem.recordingKey);
  if (item.name === MR) return jsx($0, {
    item,
    defaultItem,
    dropdownKey: M(item.name),
    tooltipText: F(item.name),
    additionalDispatchData: {
      items: item.children
    },
    recordingKey,
    disabled
  });
  let w = null;
  return getFeatureFlags().ui3p_flyout_menu_fpl_migration ? (w = jsx(_$$K, {
    actionOnPointerDown: !0,
    "aria-label": I,
    "data-onboarding-key": item.onboardingKey,
    "data-testid": defaultItem.action,
    "data-tooltip": defaultItem.action,
    "data-tooltip-type": Ib.LOOKUP,
    htmlAttributes: {
      id: y
    },
    onClick: VU.get(defaultItem.action, "toolbar"),
    recordingKey: C,
    size: "lg",
    children: v.ui3FlyoutIcon
  }), h && (w = jsxs(_$$e, {
    "aria-label": F(item.name),
    children: [w, jsx(_$$e.Trigger, {
      recordingKey: Pt(recordingKey, "chevron"),
      size: "lg",
      ...getTriggerProps(),
      "aria-label": F(item.name)
    })]
  })), w) : (w = jsx(_$$E, {
    className: m()(fullHeightSidebarFlyoutButton, {
      [singleItem]: !h
    }),
    recordingKey: C,
    "aria-label": defaultItem.action,
    htmlAttributes: {
      "data-onboarding-key": defaultItem.onboardingKey
    },
    onClick: VU.get(defaultItem.action, "toolbar"),
    actionOnPointerDown: !0,
    children: v.ui3FlyoutIcon
  }), jsxs("div", {
    className: m()(fullHeightSidebarFlyout, _$$M(!0, b), {
      [flyoutDropdownShown]: E
    }),
    "data-tooltip-type": Ib.LOOKUP,
    "data-tooltip": defaultItem.action,
    "data-onboarding-key": item.onboardingKey,
    "data-testid": defaultItem.action,
    children: [w, h && jsx(_$$c, {
      additionalDispatchData: {
        items: item.children
      },
      className: m()(fullHeightSidebarFlyoutChevron, {
        [fullHeightSidebarFlyoutDropdownShown]: E
      }),
      dataOnboardingKey: item.name,
      dataTestId: `${item.name}-chevron`,
      dropdownKey: M(item.name),
      rcsHandlerId: "flyout_dropdown_opened",
      recordingKey,
      tooltipText: F(item.name)
    })]
  }));
}
function H(e) {
  let t = d4(e => e.dropdownShown);
  let r = md(oO);
  if (!t || !t.data?.targetRect) return jsx(Fragment, {});
  let i = e.item.flyoutShowItemIcons || void 0 === e.item.flyoutShowItemIcons;
  return jsx(Cf, {
    targetRect: "prototype-view-flyout" === e.item.name ? {
      top: t.data.targetRect.top,
      right: t.data.targetRect.right,
      bottom: t.data.targetRect.bottom + 4,
      left: t.data.targetRect.left - 91,
      width: t.data.targetRect.width,
      height: t.data.targetRect.height
    } : t.data.targetRect,
    className: e.item.largeDisplayMode ? largeDisplayDropdown : pointingDropdown,
    showPoint: !1,
    propagateCloseClick: !0,
    orientation: e.item.largeDisplayMode ? "horizontal" : "vertical",
    type: e.item.largeDisplayMode ? it.MATCH_BACKGROUND : it.DEFAULT,
    footer: e.item.footer,
    children: t.data?.items && t.data.items.map((t, a) => HK(t) ? jsx(wv, {}, a) : e.item.largeDisplayMode ? jsx(K, {
      item: t,
      simulatedHoverActionName: r,
      onFlyoutItemClick: e.onFlyoutItemClick,
      recordingKey: e.recordingKey
    }, a) : jsx(W, {
      item: t,
      showItemIcon: i,
      hideCheck: e.hideCheck,
      simulatedHoverActionName: r,
      onFlyoutItemClick: e.onFlyoutItemClick,
      recordingKey: e.recordingKey
    }, a))
  });
}
function z(e, t) {
  let r = d4(nj);
  let n = !!d4(t => Zk(e) && e.isActive && e.isActive(t));
  let {
    action,
    property,
    propertyValue,
    description
  } = e;
  let d = Yh(r, action);
  let c = void 0 !== propertyValue && r[property] === propertyValue;
  let u = t ? j(property, propertyValue, action) : null;
  return {
    isEnabled: d,
    isChecked: c || n,
    icons: u,
    text: e.text || $$Y0(action),
    shortcutText: c1(r.keyboardShortcuts, action),
    descriptionText: description ? $$Y0(description) : void 0
  };
}
function W({
  item: e,
  showItemIcon: t,
  hideCheck: r,
  simulatedHoverActionName: i,
  onFlyoutItemClick: a,
  recordingKey: s
}) {
  let {
    isEnabled,
    isChecked,
    icons,
    text,
    shortcutText
  } = z(e, t);
  return jsx(a1, {
    hideCheck: r,
    isChecked,
    isEnabled,
    onClick: getFeatureFlags().ce_flyout_pointer_up_enabled ? void 0 : t => {
      a(e, t);
    },
    onPointerUp: getFeatureFlags().ce_flyout_pointer_up_enabled ? t => {
      a(e, t);
    } : void 0,
    onboardingKey: e.onboardingKey,
    recordingKey: Pt(s, "flyout", e.recordingKey),
    shortcut: shortcutText,
    simulateHover: e.action === i,
    text,
    tooltip: TT.includes(e.action) ? e.action : void 0,
    children: icons ? icons.ui3Icon : null
  }, e.action);
}
function K({
  item: e,
  simulatedHoverActionName: t,
  onFlyoutItemClick: r,
  recordingKey: i
}) {
  let {
    isEnabled,
    isChecked,
    icons,
    text,
    shortcutText,
    descriptionText
  } = z(e, !0);
  return jsx(by, {
    description: descriptionText,
    isChecked,
    isEnabled,
    onPointerUp: t => r(e, t),
    onboardingKey: e.onboardingKey,
    recordingKey: Pt(i, "flyout", e.recordingKey),
    shortcut: shortcutText,
    simulateHover: e.action === t,
    text,
    tooltip: TT.includes(e.action) ? e.action : void 0,
    children: icons ? icons.ui3Icon : null
  }, e.action);
}
export function $$Y0(e) {
  try {
    return _$$A(e);
  } catch (t) {
    return _$$t(`fullscreen_actions.${e}`);
  }
}
export const Jg = $$Y0;
export const xn = $$B1;