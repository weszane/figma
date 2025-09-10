import { ServiceCategories } from "src/905/165054";
import { z } from "src/905/239603";
import { reportError } from "src/905/11";
import { gP } from "src/figma_app/594947";
var $$o2 = (e => (e.GROUP_3 = "GROUP_3", e.GROUP_4 = "GROUP_4", e.GROUP_6 = "GROUP_6", e.GROUP_7 = "GROUP_7", e))($$o2 || {});
var $$l5 = (e => (e.GROUP_1 = "GROUP_1", e.GROUP_2 = "GROUP_2", e.GROUP_3 = "GROUP_3", e))($$l5 || {});
let d = {
  redux_deprecation: ServiceCategories.FRONTEND_PLATFORM,
  migrate_team_data_to_livegraph: ServiceCategories.SCALE,
  test_config: ServiceCategories.FRONTEND_PLATFORM
};
let c = z.enum(["passthrough", "shadowread", "cutover"]);
export function $$u4(e, t) {
  let r = m(e, t);
  return "shadowread" === r || "cutover" === r;
}
export function $$p1(e, t) {
  return "cutover" === m(e, t);
}
export function $$_3(e) {
  return $$u4("redux_deprecation", e);
}
export function $$h0(e) {
  return $$p1("redux_deprecation", e);
}
function m(e, t) {
  let r = gP(e).get(t, "passthrough");
  let {
    success,
    data
  } = c.safeParse(r);
  return success ? data : (reportError(d[e], Error(`Invalid value for configGroup ${t}: ${r}`)), "passthrough");
}
export const DQ = $$h0;
export const If = $$p1;
export const Pw = $$o2;
export const _X = $$_3;
export const pw = $$u4;
export const wv = $$l5;
