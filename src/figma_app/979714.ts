import { useMemo } from "react";
import { W5, zy } from "../vendor/130505";
import { parseQuerySimple } from "../905/634134";
import { S } from "../905/872825";
import { aV, nS, Ac } from "../figma_app/321395";
import { N$ } from "../figma_app/350203";
let d = "/files/:team(team)?/:id([0-9]+)";
let $$c3 = aV(d, "/resources");
export function $$u1(e) {
  return "teamId" in e ? {
    team: "team",
    id: e.teamId
  } : {
    id: e.orgId
  };
}
export function $$p0(e) {
  return "team" === e.team ? {
    teamId: e.id
  } : {
    orgId: e.id
  };
}
export function $$_5(e) {
  return {
    fuid: parseQuerySimple(e).fuid
  };
}
let h = class extends nS {};
Ac(h);
h.displayName = "ResourceHubHomeRoute";
h.path = aV($$c3, "/:tab(internal|community)");
h.serializeParams = e => ({
  ...$$u1(e),
  tab: e.tab
});
h.deserializeParams = e => ({
  ...$$p0(e),
  tab: S(e.tab, N$, N$.INTERNAL)
});
h.parseQueryString = $$_5;
export let $$m4 = h;
export function $$g2() {
  let e = W5(d);
  return useMemo(() => null === e ? null : $$p0(e.params), [e]);
}
export function $$f6() {
  let e = W5(d);
  let t = zy();
  return useMemo(() => null === e ? null : $$_5(t.search), [t.search, e]);
}
export const CS = $$p0;
export const FZ = $$u1;
export const Om = $$g2;
export const VR = $$c3;
export const au = $$m4;
export const p7 = $$_5;
export const tv = $$f6;