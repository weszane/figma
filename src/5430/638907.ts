import { jsx, Fragment } from "react/jsx-runtime";
import { N as _$$N } from "../figma_app/469468";
import { AG } from "../figma_app/999312";
import { M } from "../5430/704379";
import { A } from "../5430/728674";
import { ws } from "../figma_app/427318";
import { L } from "../905/178090";
import { vt } from "../figma_app/306946";
import { Z_ } from "../figma_app/350203";
import { I0 } from "../figma_app/45218";
import { r as _$$r } from "../5430/743964";
import { T } from "../5430/126619";
import { fk } from "../5430/480225";
import { d8i, g8m } from "../figma_app/27776";
if (443 == require.j) {}
export function $$f0(e) {
  let t = AG();
  let r = _$$N(`(max-width: ${d8i})`);
  let f = _$$N(`(max-width: ${g8m})`);
  let {
    resourcesLoading,
    totalResources,
    filterState,
    numTilesPerRow,
    hasNextPage,
    trackResourceImpression,
    emptyResourceStateQuery,
    pluginRowLoadingCount,
    skipResourceLimit,
    customLoadingView
  } = e;
  let N = !resourcesLoading && 0 === totalResources.length;
  if (resourcesLoading && customLoadingView) return jsx(Fragment, {
    children: customLoadingView
  });
  let E = filterState.resourceType === L.BrowseResourceTypes.PLUGINS && (resourcesLoading || (totalResources ?? []).every(e => ws(e) ? e.resource_type === vt.PLUGIN : I0(e)));
  let S = [];
  if (E && (S = (totalResources ?? []).map(e => ws(e) ? e.content?.plugin : e).filter(e => void 0 !== e)), N) return jsx(fk, {
    resourceType: filterState.resourceType,
    query: emptyResourceStateQuery,
    view: filterState
  });
  if (E) return jsx(M, {
    plugins: S,
    onIntersectionChange: (e, t) => {
      t && trackResourceImpression(e);
    },
    isOrgTeamBrowsing: !1,
    isLoading: resourcesLoading,
    loadingRowCount: pluginRowLoadingCount
  });
  {
    let e = void 0 !== numTilesPerRow ? totalResources.slice(0, _$$r(totalResources.length, numTilesPerRow, hasNextPage)) : totalResources ?? [];
    return t ? jsx(T, {
      resources: e,
      isLoading: !customLoadingView && resourcesLoading,
      loadingTileCount: numTilesPerRow && numTilesPerRow * Z_
    }) : jsx(A, {
      resources: totalResources ?? [],
      maxGridDim: {
        cols: f ? 2 : r ? 3 : 4
      },
      mobileMaxGridDim: {
        cols: 1
      },
      onIntersectionChange: (e, t) => {
        t && trackResourceImpression(e);
      },
      isLoading: !customLoadingView && resourcesLoading,
      loadingTileCount: 8,
      skipResourceLimit
    });
  }
}
export const O = $$f0;