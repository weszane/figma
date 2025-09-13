import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { J } from "../905/799737";
import { K } from "../905/443068";
import { wi, jk, vo, Y9, nB } from "../figma_app/272243";
import { Button } from "../905/521428";
import { t } from "../905/117577";
import { N as _$$N } from "../905/865305";
import { B } from "../905/950875";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { getI18nString } from "../905/303541";
import { z } from "../6268/891724";
import { OG, kt, FS } from "../1250/340571";
import { iE } from "../1200/67174";
import { o as _$$o } from "../6268/77352";
import { T_ } from "../6268/886268";
import { gP } from "../6268/693700";
import { e as _$$e } from "../1250/871209";
import { useOpenFileLibraryKey } from "../figma_app/516028";
import { gn, DD, KB, I7, O } from "../9410/43961";
function C({
  activeRowKey: e,
  canAccessLibrary: n,
  dropdownFilter: t,
  filteredComponents: i,
  inputRefs: r,
  onActiveRowChange: l,
  onComponentChanged: a,
  onConfirmConnection: d,
  onConfirmSuggestion: c,
  onDeleteMapping: u,
  onFileChanged: p,
  onIgnoreMapping: f,
  onMoreActionsMenuItemClick: _,
  onSelectComponent: m,
  onValueChange: w,
  openFileLibraryKey: x,
  queryStatus: b,
  searchQuery: v,
  suggestions: y,
  searchSessionId: k,
  entrypoint: C
}) {
  let N = trackDefinedFileEventWithStore();
  let S = _$$l(x ?? "");
  useEffect(() => {
    N("component_browser.in_context.window_seen");
  }, [N]);
  return jsx(gP, {
    activeRowKey: e,
    bulkSuggestions: y,
    columns: ["design", "decorator", "file", "actions"],
    data: i,
    dropdownFilter: t,
    entrypoint: C,
    inputRefs: r,
    isLoading: "loading" === n || "loading" === b,
    isLoadingSuggestions: !1,
    libraryKey: S,
    location: "in_context_list_view",
    onActiveRowChange: l,
    onComponentChanged: a,
    onConfirmConnection: d,
    onConfirmSuggestion: c,
    onFileChanged: p,
    onMoreActionsMenuItemClick: _,
    onSelectComponent: m,
    onValueChange: w,
    onlyShowActionsOnHover: !0,
    searchQuery: v,
    searchSessionId: k,
    showExpandChevron: !1,
    showLibraryNames: !0,
    showTableHeader: !1,
    spacing: "compact"
  });
}
function N({
  displayedComponent: e,
  inputRefs: n,
  onActiveRowChange: t,
  onComponentChanged: o,
  onConfirmConnection: i,
  onConfirmSuggestion: r,
  onDeleteMapping: l,
  onFileChanged: a,
  onIgnoreMapping: d,
  onSelectComponent: c,
  onValueChange: u,
  openFileLibraryKey: p,
  searchSessionId: g,
  entrypoint: f
}) {
  let _ = _$$l(p ?? "");
  let w = OG(_);
  let b = w?.selectedRepositories[0]?.id;
  return jsx(_$$o, {
    data: e,
    entrypoint: f,
    inputRefs: n,
    isLoadingSuggestions: !1,
    isWindowed: !0,
    onActiveRowChange: t,
    onClose: () => c(null),
    onComponentChanged: o,
    onConfirmConnection: i,
    onConfirmSuggestion: r,
    onDeleteMapping: l,
    onFileChanged: a,
    onIgnoreMapping: d,
    onValueChange: u,
    repositoryId: b,
    searchSessionId: g,
    sourceIndex: e?.sourceIndex
  });
}
var S = (e => (e.list = "list", e.detail = "detail", e))(S || {});
export function $$A1({
  componentCounts: e,
  dropdownFilter: n,
  setDropdownFilter: t
}) {
  return jsxs("div", {
    className: gn,
    children: [jsx(J, {
      className: DD,
      children: getI18nString("dev_handoff.component_browser.title")
    }), jsx(z, {
      componentCounts: e,
      dropdownFilter: n,
      setDropdownFilter: t
    })]
  });
}
export function $$B0({
  onSelectComponent: e
}) {
  return jsx("div", {
    className: gn,
    children: jsx(K, {
      "aria-label": getI18nString("dev_handoff.component_browser.close_component_browser"),
      onClick: () => e(null),
      children: jsx(t, {})
    })
  });
}
function E({
  onBulkConfirmSuggestions: e,
  suggestionsAvailableComponents: n,
  filteredComponents: t,
  suggestions: o,
  dropdownFilter: i,
  setDropdownFilter: r,
  githubStatus: d,
  entrypoint: h
}) {
  let g = _$$e();
  let _ = getFeatureFlags().dt_component_browser_bulk_mapping && n.length > 0 ? "bulk_suggestions" : d === kt.NotSetup ? "github" : null;
  return "bulk_suggestions" === _ ? jsxs(wi, {
    children: [jsxs("div", {
      className: KB,
      children: [jsx(_$$N, {}), jsx("span", {
        children: getI18nString("dev_handoff.component_browser.possible_matches", {
          count: n.length
        })
      })]
    }), jsx(jk, {
      children: jsx(Button, {
        variant: "secondary",
        onClick: () => {
          e({
            selectedComponents: t,
            bulkSuggestions: o,
            trackingProps: {
              location: "in_context_list_view",
              source: "ai_codebase_suggestion",
              entrypoint: h
            }
          });
          ("suggestionsAvailable" === i || "notConnected" === i) && r("connected");
        },
        children: getI18nString("dev_handoff.component_browser.confirm_all_matches")
      })
    })]
  }) : "github" === _ ? jsxs(wi, {
    children: [jsxs("div", {
      className: I7,
      children: [jsx(B, {}), getI18nString("dev_handoff.component_browser.github_footer_cta")]
    }), jsx(jk, {
      children: jsx(Button, {
        variant: "primary",
        onClick: () => g(),
        children: getI18nString("dev_handoff.component_browser.settings.connect_github")
      })
    })]
  }) : null;
}
export function $$I2({
  entrypoint: e
}) {
  let n = FS();
  let [t, i] = useState(void 0);
  let r = e => {
    i(e?.assetKey);
  };
  let {
    activeRowKey,
    displayedComponent,
    inputRefs,
    status,
    onFileChanged,
    onComponentChanged,
    onActiveRowChange,
    onConfirmConnection,
    onConfirmSuggestion,
    onBulkConfirmSuggestions,
    onValueChange,
    onMoreActionsMenuItemClick,
    onDeleteMapping,
    onIgnoreMapping,
    filteredComponents,
    searchQuery,
    dropdownFilter,
    setDropdownFilter,
    componentCounts,
    suggestions,
    suggestionsAvailableComponents,
    searchSessionId
  } = iE({
    defaultFilter: "notConnected",
    componentKey: t,
    entrypoint: e
  });
  let P = useOpenFileLibraryKey();
  let W = P ?? _$$l("");
  let z = T_(W ?? _$$l(""));
  return "list" == (displayedComponent && !0 === z ? "detail" : "list") ? jsxs(vo, {
    children: [jsx(Y9, {
      children: jsx($$A1, {
        componentCounts,
        dropdownFilter,
        setDropdownFilter
      })
    }), jsx(nB, {
      padding: 0,
      className: O,
      children: jsx(C, {
        activeRowKey,
        canAccessLibrary: z,
        dropdownFilter,
        entrypoint: e,
        filteredComponents,
        inputRefs,
        onActiveRowChange,
        onComponentChanged,
        onConfirmConnection,
        onConfirmSuggestion,
        onDeleteMapping,
        onFileChanged,
        onIgnoreMapping,
        onMoreActionsMenuItemClick,
        onSelectComponent: r,
        onValueChange,
        openFileLibraryKey: P,
        queryStatus: status,
        searchQuery,
        searchSessionId,
        suggestions
      })
    }), jsx(E, {
      onBulkConfirmSuggestions,
      suggestionsAvailableComponents,
      filteredComponents,
      suggestions,
      dropdownFilter,
      setDropdownFilter,
      githubStatus: n,
      entrypoint: e
    })]
  }) : displayedComponent ? jsxs(vo, {
    children: [jsx(Y9, {
      children: jsx($$B0, {
        onSelectComponent: r
      })
    }), jsx(nB, {
      padding: 0,
      className: O,
      children: jsx(N, {
        displayedComponent,
        entrypoint: e,
        inputRefs,
        onActiveRowChange,
        onComponentChanged,
        onConfirmConnection,
        onConfirmSuggestion,
        onDeleteMapping,
        onFileChanged,
        onIgnoreMapping,
        onSelectComponent: r,
        onValueChange,
        openFileLibraryKey: P,
        searchSessionId
      })
    }), jsx(E, {
      onBulkConfirmSuggestions,
      suggestionsAvailableComponents,
      filteredComponents,
      suggestions,
      dropdownFilter,
      setDropdownFilter,
      githubStatus: n,
      entrypoint: e
    })]
  }) : null;
}
export const ComponentBrowserWindowDetailHeader = $$B0;
export const ComponentBrowserWindowListHeader = $$A1;
export const _$$default = $$I2;