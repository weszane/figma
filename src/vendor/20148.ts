import { Rj } from "../vendor/839991";
var $$i1;
!function (e) {
  e.TRACK_INTAKE_REQUESTS = "track_intake_requests";
  e.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql";
}($$i1 || ($$i1 = {}));
let o = new Set();
export function $$a0(e) {
  Array.isArray(e) && h(e.filter(e => Rj($$i1, e)));
}
function h(e) {
  e.forEach(e => {
    o.add(e);
  });
}
export function $$d3(e) {
  return o.has(e);
}
export function $$p2() {
  return o;
}
export const Aq = $$a0;
export const R9 = $$i1;
export const q7 = $$p2;
export const sr = $$d3;