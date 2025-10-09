import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createRef } from "react";
import { useDispatch } from "react-redux";
import { parsePxInt } from "../figma_app/783094";
import { gw, rr, wv, ru } from "../figma_app/236327";
import { V } from "../figma_app/312987";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { In } from "../905/672640";
import { TrackedDiv, TrackingProvider } from "../figma_app/831799";
import { RCSMessageType } from "../905/135526";
import { useDropdownState } from "../905/848862";
import { RG } from "../figma_app/684446";
import { FAccessLevelType } from "../figma_app/191312";
import { KindEnum } from "../905/129884";
import { g1 } from "../905/504727";
import { sI } from "../figma_app/527041";
import { km, hX } from "../905/701417";
let T = "shared_table--batchActionsSelector--kLQaP";
let I = "shared_table--whiteChevron--7a7Po";
let S = parsePxInt(km);
let v = parsePxInt(hX);
let A = "BATCH_CHANGE_LICENSE_GROUP_DROPDOWN";
let x = "BATCH_CHANGE_WORKSPACE_DROPDOWN";
export function $$N3(e) {
  return jsx(TrackedDiv, {
    className: e.disabled ? "shared_table--optionDisabled--OhX66 shared_table--_optionBase--z8wdT shared_table--_disabled--EkV7j" : "shared_table--option--hw4Sr shared_table--_optionBase--z8wdT",
    onClick: e.onClick,
    trackingProperties: e.trackingProperties,
    disabled: e.disabled,
    ...(e.tooltip ? {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": e.tooltip,
      "data-tooltip-show-above": !0
    } : {}),
    children: e.label
  });
}
export function $$C2(e) {
  let t = e.dropdownShown?.type === e.dropdownType;
  let r = getI18nString("multi_select_list.filter_default");
  let i = null === e.selectedValue ? r : e.getDisplayText(e.selectedValue);
  let a = e.hideDefaultOption ? e.values.length * S : (e.values.length + 1) * S + v;
  return jsxs(V, {
    dispatch: e.dispatch,
    type: e.dropdownType,
    showingDropdown: t,
    children: [jsx("div", {
      "data-onboarding-key": e["data-onboarding-key"],
      className: cssBuilderInstance.maxW200.ellipsis.overflowHidden.$,
      children: e.getSelectedDisplayText ? jsx("span", {
        className: cssBuilderInstance.noWrap.$,
        children: e.getSelectedDisplayText(e.selectedValue)
      }) : jsxs(Fragment, {
        children: [jsxs("span", {
          className: cssBuilderInstance.noWrap.$,
          children: [e.label, ":"]
        }), " ", jsx("span", {
          className: cssBuilderInstance.noWrap.$,
          children: i
        })]
      })
    }), t && jsx(gw, {
      stopScrollPropagation: !0,
      dispatch: e.dispatch,
      className: sI,
      style: e.dropdownShown.data.position,
      children: jsxs(g1, {
        maxDropdownHeight: e => Math.round(.5 * e),
        dropdownChildrenHeight: a,
        children: [!e.hideDefaultOption && jsxs(Fragment, {
          children: [jsx(rr, {
            checked: null === e.selectedValue,
            onClick: () => e.updateFilter(null),
            trackingProperties: {
              filterType: e.dropdownType
            },
            children: r
          }), jsx(wv, {})]
        }), e.values.map(t => jsx(ru, {
          checked: e.selectedValue === t,
          onClick: () => e.updateFilter(t),
          primaryText: e.getDisplayText(t),
          secondaryText: null === e.selectedValue && e.getCount ? e.getCount(t).toString() : "",
          trackingProperties: {
            filterType: e.dropdownType,
            text: e.getDisplayText(t)
          }
        }, e.getDisplayText(t)))]
      })
    })]
  });
}
export var $$w5 = (e => (e.NONE = "NONE", e.UNASSIGNED = "UNASSIGNED", e.WORKSPACE = "WORKSPACE", e))($$w5 || {});
function O(e) {
  let t = useDispatch<AppDispatch>();
  let r = useDropdownState();
  let s = createRef();
  let l = 0;
  let d = e.workspaces.map(t => {
    let r = "WORKSPACE" === e.selectedWorkspace.type && e.selectedWorkspace.workspaceId === t.id;
    return jsx(rr, {
      checked: r,
      onClick: r ? void 0 : () => e.onChange(t),
      children: t.name
    }, t.id);
  });
  l += S * d.length;
  d.push(jsx(wv, {}, "separator"));
  l += v;
  let c = "UNASSIGNED" === e.selectedWorkspace.type;
  d.push(jsx(rr, {
    checked: c,
    onClick: c ? void 0 : () => e.onChange(null),
    children: c ? "Unassigned" : "Unassign"
  }, ""));
  l += S;
  let u = jsx(g1, {
    maxDropdownHeight: e => Math.round(.8 * e),
    dropdownChildrenHeight: l,
    ref: s,
    children: d
  });
  return jsx(gw, {
    dispatch: t,
    className: "shared_table--batchActionsSelectorDropdown--FTtYq",
    style: r.data.position,
    children: u
  });
}
export function $$R0(e) {
  let t = useDispatch<AppDispatch>();
  let r = useDropdownState();
  if (!RG() || 0 === e.licenseGroups.length) return null;
  let i = r?.type === A;
  return jsxs(TrackingProvider, {
    name: "Change billing group",
    trackingTargets: RCSMessageType.NONE,
    children: [i && jsx(O, {
      workspaces: e.licenseGroups,
      selectedWorkspace: e.selectedLicenseGroup,
      onChange: e.onChange
    }), jsx(V, {
      className: T,
      dispatch: t,
      showingDropdown: i,
      type: A,
      chevronClassName: I,
      children: renderI18nText("members_table.batch_actions_menu.change_billing_group")
    })]
  });
}
export function $$L1(e) {
  let t = useDispatch<AppDispatch>();
  let r = useDropdownState();
  if (0 === e.workspaces.length) return null;
  let i = r?.type === x;
  return jsxs(TrackingProvider, {
    name: "Change Workspace",
    trackingTargets: RCSMessageType.NONE,
    children: [i && jsx(O, {
      workspaces: e.workspaces,
      selectedWorkspace: e.selectedWorkspace,
      onChange: e.onChange
    }), jsx(V, {
      className: T,
      dispatch: t,
      showingDropdown: i,
      type: x,
      chevronClassName: I,
      children: renderI18nText("members_table.batch_actions_menu.change_workspace")
    })]
  });
}
export function $$P4({
  orgAccess: e
}) {
  return e === FAccessLevelType.PRIVATE || e === FAccessLevelType.SECRET ? jsx("div", {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": e === FAccessLevelType.PRIVATE ? getI18nString("teams_table.closed_team_tooltip_header") : getI18nString("teams_table.secret_team_tooltip_header"),
    "data-tooltip-subtext": e === FAccessLevelType.PRIVATE ? getI18nString("teams_table.closed_team_tooltip_subtitle") : getI18nString("teams_table.secret_team_tooltip_subtitle"),
    "data-tooltip-show-above": !0,
    "data-tooltip-timeout-delay": 500,
    "data-tooltip-max-width": 300,
    children: jsx(In, {
      icon: "lock-16"
    })
  }) : null;
}
export const IV = $$R0;
export const Vq = $$L1;
export const bv = $$C2;
export const IU = $$N3;
export const HL = $$P4;
export const uw = $$w5;
