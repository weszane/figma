import { jsxs, jsx } from "react/jsx-runtime";
import { useSubscription } from "../figma_app/288654";
import { getI18nString, renderI18nText } from "../905/303541";
import { useCurrentUserOrgId } from "../905/845253";
import { WorkspacesDirectoryView } from "../figma_app/43951";
import { wM } from "../figma_app/329496";
import { useMemo, useCallback } from "react";
import { bL, gZ } from "../905/598775";
import { ButtonPrimitive } from "../905/632989";
import { e as _$$e } from "../905/916195";
import { textDisplayConfig } from "../905/687265";
import { stylex } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { useCurrentPrivilegedPlan, getParentOrgIdIfOrgLevel } from "../figma_app/465071";
import { getCurrentTeamId } from "../figma_app/598018";
import { SF } from "../905/55862";
import { w } from "../905/768636";
import { h5, yz } from "../905/42209";
import { p as _$$p } from "../905/895920";
let E = {
  leftSide: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    textOverflow: "xlyipyv",
    whiteSpace: "xuxw1ft",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    fontSize: "xfifm61",
    width: "xc5o50y",
    $$css: !0
  },
  leftSideUi3: {
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  },
  row: {
    display: "xrvj5dj",
    height: "xsdox4t",
    gridTemplateColumns: "x1j4phcj",
    alignItems: "x6s0dn4",
    paddingLeft: "x1k8dnhd",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    cursor: "xt0e3qv",
    width: "xh8yej3",
    justifyItems: "x1olij9z",
    boxSizing: "x9f619",
    ":hover_backgroundColor": "xv2f06h",
    ":hover_color": "x1c5oinq",
    $$css: !0
  },
  rowUi3: {
    height: "x1vqgdyp",
    borderBottom: "x1n5zjp5",
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    $$css: !0
  },
  rowBorder: {
    borderBottom: "x1n5zjp5",
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    $$css: !0
  }
};
function x({
  filter: e,
  count: t,
  handleLibrariesViewFilterChange: i,
  showBottomBorder: r
}) {
  let s = useCurrentPrivilegedPlan("FilterRow").unwrapOr(null);
  let o = getParentOrgIdIfOrgLevel(s);
  let l = s?.name;
  let m = getCurrentTeamId();
  let x = useMemo(() => SF(e, l), [e, l]);
  let S = useCallback(() => {
    trackEventAnalytics("CTA Clicked", {
      name: "Library Preference Modal Change filter",
      orgId: o,
      teamId: m,
      location: "org",
      filterType: e.type,
      workspaceId: "workspace" === e.type && e.id
    });
    i(e);
  }, [o, e, i, m]);
  return getFeatureFlags().dse_fpl_wave_2 ? jsxs(bL, {
    className: stylex.props(E.row, E.rowUi3, r && E.rowBorder).className,
    children: [jsx("div", {
      className: stylex.props(E.leftSide, E.leftSideUi3).className,
      children: x
    }), jsx("div", {
      className: "x78zum5 x1iyjqo2 x1akne3o",
      children: getI18nString("design_systems.libraries_modal.plural.num_library", {
        count: t
      })
    }), jsx(gZ, {
      className: "x78zum5 x1useyqa xdt5ytf x6s0dn4 x1ja3g5x x1epfdc",
      children: jsx(ButtonPrimitive, {
        "aria-label": getI18nString("design_systems.libraries_modal.plural.view_libraries_within", {
          count: t,
          filterDisplayName: x
        }),
        onClick: S,
        className: "x1mh6rdz x19y5rnk x5hs570 xy9f4xx",
        children: jsx(_$$e, {})
      })
    })]
  }) : jsxs(ButtonPrimitive, {
    className: "filter_row--rowWithBorder--SuTTQ filter_row--row--jgf08 file_row_styles--fileRowBase--USCNr file_row_styles--fileRowHover--WZeMw",
    onClick: S,
    children: [jsx(h5, {
      children: jsx("div", {
        className: cssBuilderInstance.truncate.ellipsis.textBodyMedium.$,
        children: x
      })
    }), jsx(yz, {
      children: getI18nString("design_systems.libraries_modal.plural.num_library", {
        count: t
      })
    }), jsx(w, {})]
  });
}
export function $$w0({
  libraryFiles: e,
  allLibrariesViewFilterStates: t,
  handleLibrariesViewFilterChange: i,
  showingDefaultSubscriptionsForUser: d,
  isSearching: c
}) {
  let u = useCurrentUserOrgId();
  let p = t?.find(e => "workspace" === e.type);
  let m = p && "workspace" === p.type && p.id;
  let h = useSubscription(WorkspacesDirectoryView, {
    orgId: u
  });
  let g = "loaded" !== h.status;
  let f = h.data?.org?.workspaces ?? [];
  let _ = g ? [] : [...f];
  let A = h.data?.currentUser?.baseOrgUser?.workspaceUsers;
  let y = A?.find(e => e?.isMainWorkspace)?.workspaceId;
  let {
    libraryCountByWorkspaceId,
    unassignedLibrariesCount,
    draftLibrariesCount
  } = wM(e);
  let E = !t?.some(e => "workspace" === e.type && e.id === y) && y && (libraryCountByWorkspaceId[y] ?? !1);
  let w = _.filter(e => e.id !== m && e.id !== y && (libraryCountByWorkspaceId[e.id] ?? 0) > 0);
  return 0 !== unassignedLibrariesCount || 0 !== draftLibrariesCount || 0 !== w.length || c || E ? jsxs("div", {
    className: "subscription_list_workspace_rows--teamSectionsWrapper--WPYUg",
    children: [jsx("div", {
      className: "subscription_list_workspace_rows--header--ry-qO",
      children: renderI18nText("design_systems.libraries_modal.workspaces")
    }), d && draftLibrariesCount > 0 && jsx(x, {
      filter: {
        type: "drafts"
      },
      count: draftLibrariesCount,
      handleLibrariesViewFilterChange: i,
      showBottomBorder: !0
    }), E && jsx(x, {
      filter: {
        type: "workspace",
        id: y,
        name: _.find(e => e.id === y)?.name ?? ""
      },
      count: libraryCountByWorkspaceId[y] ?? 0,
      handleLibrariesViewFilterChange: i,
      showBottomBorder: !0
    }, y), w.map((e, t) => jsx(x, {
      filter: {
        type: "workspace",
        id: e.id,
        name: e.name
      },
      count: libraryCountByWorkspaceId[e.id] ?? 0,
      handleLibrariesViewFilterChange: i,
      showBottomBorder: t === w.length - 1 && (draftLibrariesCount > 0 || unassignedLibrariesCount > 0)
    }, e.id)), !d && draftLibrariesCount > 0 && jsx(x, {
      filter: {
        type: "drafts"
      },
      count: draftLibrariesCount,
      handleLibrariesViewFilterChange: i,
      showBottomBorder: !1
    }), unassignedLibrariesCount > 0 && jsx(x, {
      filter: {
        type: "unassigned"
      },
      count: unassignedLibrariesCount,
      handleLibrariesViewFilterChange: i
    })]
  }) : jsx(_$$p, {
    onViewPresetsClicked: () => i({
      type: "presetLibraries"
    })
  });
}
export const A = $$w0;
