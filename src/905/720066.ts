import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { S } from "../905/539306";
import { mv, AR } from "../905/182534";
import { ky } from "../905/977218";
import { useCurrentUserOrgId } from "../905/845253";
import { getSelectedView } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { getCurrentTeam } from "../figma_app/598018";
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
  let s = useDispatch();
  let l = useSelector(e => e.search);
  let c = getSelectedView();
  let u = useSelector(e => S(e));
  return useCallback(n => {
    s(ky());
    i && m(i, t, e, n, l, c, u);
  }, [s, e, t, i, l, c, u]);
}
export function $$g1() {
  let e = useDispatch();
  let t = selectCurrentUser();
  let i = useCurrentUserOrgId();
  let p = getCurrentTeam()?.id;
  let h = useSelector(e => e.search);
  let g = getSelectedView();
  let f = useSelector(e => S(e));
  return useCallback((n, r, a) => {
    if (e(ky()), !a) return;
    let l = a.model;
    m(a, n, AR(l, t, i, p, g), r, h, g, f);
  }, [e, t, i, p, h, g, f]);
}
export const G = $$h0;
export const d = $$g1;