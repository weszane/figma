import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { AG } from "../figma_app/999312";
import { O } from "../5430/638907";
import { D } from "../5430/769256";
export function $$l0({
  category: e,
  categoryPageData: t,
  numTilesPerRow: r
}) {
  let l = AG();
  let c = useRef(null);
  let d = e.url_slug;
  let {
    trackResourceImpression,
    filterState,
    totalResources,
    status,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = t;
  let y = e?.selected_tag;
  let g = y?.meta_title || e?.meta_title;
  useEffect(() => {
    g && (document.title = g + " | Figma");
  }, [g]);
  return jsxs("div", {
    ref: c,
    children: [jsx(O, {
      resourcesLoading: "loading" === status,
      totalResources,
      filterState,
      numTilesPerRow: r,
      hasNextPage: !!hasNextPage,
      trackResourceImpression,
      emptyResourceStateQuery: y?.text ? y.text : d
    }), hasNextPage && jsx(D, {
      useInfiniteScroll: l,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage,
      containerRef: c
    })]
  });
}
export const e = $$l0;