import { useMemo, useEffect } from "react";
import { o7 } from "../figma_app/471982";
import { fk, vb } from "../5430/823351";
import { zq } from "../figma_app/598412";
import { R5 } from "../figma_app/188671";
import { IT } from "../905/713695";
import { a as _$$a, z } from "../figma_app/601188";
import { GS } from "../5430/342380";
export let $$u0 = 50;
export function $$m1(e, t, r) {
  let {
    categorySlug,
    tagSlug
  } = e;
  let _ = useMemo(() => fk(t), [t]);
  let {
    trackResourceImpression,
    flushAndResetResourceImpressions
  } = GS({
    extraProperties: {
      sort: t.sort_by,
      resourceType: t.resource_type
    }
  });
  useEffect(() => {
    flushAndResetResourceImpressions();
  }, [categorySlug, flushAndResetResourceImpressions]);
  let x = zq();
  let [{
    data: f,
    status: y,
    hasNextPage: g,
    isFetchingNextPage: v
  }, {
    fetchNextPage: b
  }] = IT(_$$a.ResourcesPaginatedQuery({
    ...vb(_),
    caller: z.CATEGORY,
    pageSize: r,
    category: categorySlug,
    tags: tagSlug ? [tagSlug] : void 0,
    locale: x
  }));
  let [{
    data: j,
    status: w
  }] = IT(R5(categorySlug));
  let C = tagSlug || "loaded" !== w ? null : j;
  let L = (C?.shelf_content ?? []).filter(e => "viewer_mode" in e || "is_widget" in e);
  let T = useMemo(() => {
    let e = new Set(L.map(e => e.id));
    return (f ?? []).filter(t => !e.has(t.rdp_url.split("/").pop() ?? ""));
  }, [f, L]);
  let I = useMemo(() => o7(L, {
    editor_type: _.editorType,
    price: _.price,
    resourceType: _.resourceType
  }), [L, _.editorType, _.price, _.resourceType]);
  return {
    trackResourceImpression,
    filterState: _,
    totalResources: useMemo(() => [...I, ...T], [I, T]),
    status: "loading" === w || "loading" === y ? "loading" : "loaded",
    hasNextPage: g,
    isFetchingNextPage: v,
    fetchNextPage: b
  };
}
export const D = $$u0;
export const V = $$m1;