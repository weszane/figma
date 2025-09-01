import { d4 } from "../vendor/514228";
import { B6, zy } from "../vendor/130505";
import { Ay } from "../905/612521";
import { sT } from "../figma_app/640564";
import { bP, IQ } from "../figma_app/600006";
import { UX } from "../figma_app/455722";
function d(e) {
  if (e && "searchSessionId" in e) return e.searchSessionId;
}
function c(e, t, r = !1) {
  if ("search" in e && e.search.sessionId && (sT() || t || r)) return e.search.sessionId;
}
export function $$u3(e, t = !1) {
  let r = !!B6(Ay.location.pathname, {
    path: [bP.path, IQ.path]
  });
  return d(Ay.location.state) || c(e, r, t);
}
export function $$p1(e = !1) {
  let t = d(zy().state);
  let r = !!UX();
  let a = d4(t => c(t, r, e));
  return t || a;
}
export function $$_0() {
  let e = !!UX();
  let t = !!sT();
  return d4(r => {
    if ("search" in r && r.search.queryId) return t || e ? r.search.queryId : void 0;
  }) ?? void 0;
}
export function $$h2(e) {
  let t = !!B6(Ay.location.pathname, {
    path: [bP.path, IQ.path]
  });
  let r = !!sT();
  if ("search" in e && e.search.queryId && (r || t)) return e.search.queryId || void 0;
}
export const BY = $$_0;
export const Jm = $$p1;
export const Ux = $$h2;
export const wr = $$u3;