import { jsx, Fragment } from "react/jsx-runtime";
import { usePrefersMediaQuery } from "../figma_app/469468";
import { AG } from "../figma_app/999312";
import { M } from "../5430/704379";
import { A } from "../5430/728674";
import { hasResourceType } from "../figma_app/427318";
import { ResourceTypes } from "../905/178090";
import { ResourceTypeEnum } from "../figma_app/306946";
import { MAX_BANNER_CLICKS } from "../figma_app/350203";
import { isPlugin } from "../figma_app/45218";
import { r as _$$r } from "../5430/743964";
import { T } from "../5430/126619";
import { fk } from "../5430/480225";
import { d8i, g8m } from "../figma_app/27776";
if (443 == require.j) {}
export function $$f0(e) {
  let t = AG();
  let r = usePrefersMediaQuery(`(max-width: ${d8i})`);
  let f = usePrefersMediaQuery(`(max-width: ${g8m})`);
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
  let E = filterState.resourceType === ResourceTypes.BrowseResourceTypes.PLUGINS && (resourcesLoading || (totalResources ?? []).every(e => hasResourceType(e) ? e.resource_type === ResourceTypeEnum.PLUGIN : isPlugin(e)));
  let S = [];
  if (E && (S = (totalResources ?? []).map(e => hasResourceType(e) ? e.content?.plugin : e).filter(e => void 0 !== e)), N) return jsx(fk, {
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
      loadingTileCount: numTilesPerRow && numTilesPerRow * MAX_BANNER_CLICKS
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