import { useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { S } from "../905/539306";
import { mv, AR } from "../905/182534";
import { ky } from "../905/977218";
import { dq } from "../905/845253";
import { _6 } from "../figma_app/386952";
import { iZ } from "../905/372672";
import { ol } from "../figma_app/598018";
import { vj } from "../905/574958";
function m(e, t, i, n, r, a, o) {
  let l = mv(e);
  new vj.Analytics(r, {
    position: t,
    resource_id: l,
    resource_type: e.search_model_type.toString(),
    matched_queries: e.matched_queries,
    result: e
  }, {
    plan: o
  }).click(e.search_model_type, a, {
    action: n,
    target: i
  });
}
export function $$h0(e, t, i) {
  let s = wA();
  let l = d4(e => e.search);
  let c = _6();
  let u = d4(e => S(e));
  return useCallback(n => {
    s(ky());
    i && m(i, t, e, n, l, c, u);
  }, [s, e, t, i, l, c, u]);
}
export function $$g1() {
  let e = wA();
  let t = iZ();
  let i = dq();
  let p = ol()?.id;
  let h = d4(e => e.search);
  let g = _6();
  let f = d4(e => S(e));
  return useCallback((n, r, a) => {
    if (e(ky()), !a) return;
    let l = a.model;
    m(a, n, AR(l, t, i, p, g), r, h, g, f);
  }, [e, t, i, p, h, g, f]);
}
export const G = $$h0;
export const d = $$g1;