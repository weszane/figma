import * as stylex from "@stylexjs/stylex";
import { useCallback, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { FileRowLeft, FileRowRight } from "../905/42209";
import { getFilterDisplayName } from "../905/55862";
import { getI18nString, renderI18nText } from "../905/303541";
import { trackEventAnalytics } from "../905/449184";
import { bL, gZ } from "../905/598775";
import { getFeatureFlags } from "../905/601108";
import { ButtonPrimitive } from "../905/632989";
import { textDisplayConfig } from "../905/687265";
import { w } from "../905/768636";
import { useCurrentUserOrgId } from "../905/845253";
import { LibrariesEmptyState } from "../905/895920";
import { e as _$$e } from "../905/916195";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { WorkspacesDirectoryView } from "../figma_app/43951";
import { useSubscription } from "../figma_app/288654";
import { wM } from "../figma_app/329496";
import { getParentOrgIdIfOrgLevel, useCurrentPrivilegedPlan } from "../figma_app/465071";
import { getCurrentTeamId } from "../figma_app/598018";
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
    "display": "xrvj5dj",
    "height": "xsdox4t",
    "gridTemplateColumns": "x1j4phcj",
    "alignItems": "x6s0dn4",
    "paddingLeft": "x1k8dnhd",
    "paddingInlineStart": null,
    "paddingInlineEnd": null,
    "cursor": "xt0e3qv",
    "width": "xh8yej3",
    "justifyItems": "x1olij9z",
    "boxSizing": "x9f619",
    ":hover_backgroundColor": "xv2f06h",
    ":hover_color": "x1c5oinq",
    "$$css": !0
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
  let x = useMemo(() => getFilterDisplayName(e, l), [e, l]);
  let S = useCallback(() => {
    trackEventAnalytics("CTA Clicked", {
      name: "Library Preference Modal Change filter",
      orgId: o,
      teamId: m,
      location: "org",
      filterType: e.type,
      workspaceId: e.type === "workspace" && e.id
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
        "onClick": S,
        "className": "x1mh6rdz x19y5rnk x5hs570 xy9f4xx",
        "children": jsx(_$$e, {})
      })
    })]
  }) : jsxs(ButtonPrimitive, {
    className: "filter_row--rowWithBorder--SuTTQ filter_row--row--jgf08 file_row_styles--fileRowBase--USCNr file_row_styles--fileRowHover--WZeMw",
    onClick: S,
    children: [jsx(FileRowLeft, {
      children: jsx("div", {
        className: cssBuilderInstance.truncate.ellipsis.textBodyMedium.$,
        children: x
      })
    }), jsx(FileRowRight, {
      children: getI18nString("design_systems.libraries_modal.plural.num_library", {
        count: t
      })
    }), jsx(w, {})]
  });
}
export interface LibraryFilterRowProps {
  libraryFiles: any[];
  allLibrariesViewFilterStates: Array<{
    type: string;
    id?: string;
  }> | null;
  handleLibrariesViewFilterChange: (filter: any) => void;
  showingDefaultSubscriptionsForUser: boolean;
  isSearching: boolean;
}
interface WorkspaceFilter {
  type: "workspace";
  id: string;
  name: string;
}
interface DraftsFilter {
  type: "drafts";
}
interface UnassignedFilter {
  type: "unassigned";
}
interface PresetLibrariesFilter {
  type: "presetLibraries";
}
type FilterType = WorkspaceFilter | DraftsFilter | UnassignedFilter | PresetLibrariesFilter;

/**
 * Component that displays workspace filter rows for the libraries modal
 * @param props - LibraryFilterRowProps
 * @returns JSX element
 */
export function LibraryFilterRows({
  libraryFiles,
  allLibrariesViewFilterStates,
  handleLibrariesViewFilterChange,
  showingDefaultSubscriptionsForUser,
  isSearching
}: LibraryFilterRowProps) {
  const currentOrgId = useCurrentUserOrgId();

  // Find the current workspace filter if it exists
  const currentWorkspaceFilter = allLibrariesViewFilterStates?.find(filter => filter.type === "workspace");
  const currentWorkspaceId = currentWorkspaceFilter && currentWorkspaceFilter.type === "workspace" && currentWorkspaceFilter.id;

  // Fetch workspaces data
  const workspacesSubscription = useSubscription(WorkspacesDirectoryView, {
    orgId: currentOrgId
  });
  const isWorkspacesLoading = workspacesSubscription.status !== "loaded";
  const workspacesData = workspacesSubscription.data?.org?.workspaces ?? [];
  const availableWorkspaces = isWorkspacesLoading ? [] : [...workspacesData];

  // Get user's main workspace
  const workspaceUsers = workspacesSubscription.data?.currentUser?.baseOrgUser?.workspaceUsers;
  const mainWorkspaceId = workspaceUsers?.find(user => user?.isMainWorkspace)?.workspaceId;

  // Calculate library counts
  const {
    libraryCountByWorkspaceId,
    unassignedLibrariesCount,
    draftLibrariesCount
  } = wM(libraryFiles);

  // Check if we should show the main workspace
  const shouldShowMainWorkspace = !allLibrariesViewFilterStates?.some(filter => filter.type === "workspace" && filter.id === mainWorkspaceId) && mainWorkspaceId && (libraryCountByWorkspaceId[mainWorkspaceId] ?? false);

  // Filter workspaces to show (excluding current and main, and only those with libraries)
  const filteredWorkspaces = availableWorkspaces.filter(workspace => workspace.id !== currentWorkspaceId && workspace.id !== mainWorkspaceId && (libraryCountByWorkspaceId[workspace.id] ?? 0) > 0);

  // Determine if we should render the workspace section
  const shouldRenderWorkspaceSection = unassignedLibrariesCount !== 0 || draftLibrariesCount !== 0 || filteredWorkspaces.length !== 0 || isSearching || shouldShowMainWorkspace;
  if (shouldRenderWorkspaceSection) {
    return jsxs("div", {
      className: "subscription_list_workspace_rows--teamSectionsWrapper--WPYUg",
      children: [
      // Header
      jsx("div", {
        className: "subscription_list_workspace_rows--header--ry-qO",
        children: renderI18nText("design_systems.libraries_modal.workspaces")
      }),
      // Drafts section (shown when showing default subscriptions)
      showingDefaultSubscriptionsForUser && draftLibrariesCount > 0 && jsx(x, {
        filter: {
          type: "drafts"
        },
        count: draftLibrariesCount,
        handleLibrariesViewFilterChange,
        showBottomBorder: true
      }),
      // Main workspace section
      shouldShowMainWorkspace && jsx(x, {
        filter: {
          type: "workspace",
          id: mainWorkspaceId,
          name: availableWorkspaces.find(ws => ws.id === mainWorkspaceId)?.name ?? ""
        },
        count: libraryCountByWorkspaceId[mainWorkspaceId] ?? 0,
        handleLibrariesViewFilterChange,
        showBottomBorder: true
      }, mainWorkspaceId),
      // Other workspaces
      filteredWorkspaces.map((workspace, index) => jsx(x, {
        filter: {
          type: "workspace",
          id: workspace.id,
          name: workspace.name
        },
        count: libraryCountByWorkspaceId[workspace.id] ?? 0,
        handleLibrariesViewFilterChange,
        showBottomBorder: index === filteredWorkspaces.length - 1 && (draftLibrariesCount > 0 || unassignedLibrariesCount > 0)
      }, workspace.id)),
      // Drafts section (shown when not showing default subscriptions)
      !showingDefaultSubscriptionsForUser && draftLibrariesCount > 0 && jsx(x, {
        filter: {
          type: "drafts"
        },
        count: draftLibrariesCount,
        handleLibrariesViewFilterChange,
        showBottomBorder: false
      }),
      // Unassigned libraries section
      unassignedLibrariesCount > 0 && jsx(x, {
        filter: {
          type: "unassigned"
        },
        count: unassignedLibrariesCount,
        handleLibrariesViewFilterChange
      })]
    });
  }

  // Fallback when no workspaces/libraries to show
  return jsx(LibrariesEmptyState, {
    onViewPresetsClicked: () => handleLibrariesViewFilterChange({
      type: "presetLibraries"
    })
  });
}

// Export with original name for backward compatibility
export const $$w0 = LibraryFilterRows;
export const A = LibraryFilterRows;