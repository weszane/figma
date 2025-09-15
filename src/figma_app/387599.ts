import { useSelector } from "react-redux";
import { matchPath, useLocation } from "../vendor/130505";
import { customHistory } from "../905/612521";
import { parseSearchRoute } from "../figma_app/640564";
import { bP, IQ } from "../figma_app/600006";
import { UX } from "../figma_app/455722";
function d(e) {
  if (e && "searchSessionId" in e) return e.searchSessionId;
}
function c(e, t, r = !1) {
  if ("search" in e && e.search.sessionId && (parseSearchRoute() || t || r)) return e.search.sessionId;
}
export function $$u3(e, t = !1) {
  let r = !!matchPath(customHistory.location.pathname, {
    path: [bP.path, IQ.path]
  });
  return d(customHistory.location.state) || c(e, r, t);
}
export function $$p1(e = !1) {
  let t = d(useLocation().state);
  let r = !!UX();
  let a = useSelector(t => c(t, r, e));
  return t || a;
}
export function $$_0() {
  let e = !!UX();
  let t = !!parseSearchRoute();
  return useSelector(r => {
    if ("search" in r && r.search.queryId) return t || e ? r.search.queryId : void 0;
  }) ?? void 0;
}
export function $$h2(e) {
  let t = !!matchPath(customHistory.location.pathname, {
    path: [bP.path, IQ.path]
  });
  let r = !!parseSearchRoute();
  if ("search" in e && e.search.queryId && (r || t)) return e.search.queryId || void 0;
}
export const BY = $$_0;
export const Jm = $$p1;
export const Ux = $$h2;
export const wr = $$u3;