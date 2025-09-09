import { F } from "../1250/368860";
import { w } from "../905/433065";
import { W } from "../905/569454";
import { M } from "../1250/358700";
import { getI18nString } from "../905/303541";
import { selectCurrentFile } from "../figma_app/516028";
import { kw } from "../1250/729732";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$c3() {
  return {
    all: getI18nString("dev_handoff.component_browser.all_published"),
    connected: getI18nString("dev_handoff.component_browser.connected"),
    notConnected: getI18nString("dev_handoff.component_browser.not_connected_to_code"),
    ignored: getI18nString("dev_handoff.component_browser.no_code_equivalent_filter"),
    suggestionsAvailable: getI18nString("dev_handoff.component_browser.suggestions_available")
  };
}
export function $$_0() {
  return {
    all: F,
    notConnected: w,
    connected: W,
    ignored: M
  };
}
export function $$u2() {
  let e = selectCurrentFile();
  let [t, n] = e?.plan?.id?.split("::") ?? [];
  return {
    planType: t,
    planId: n
  };
}
export function $$m1() {
  let e = selectCurrentFile();
  let t = kw(e?.key ?? null);
  if ("loaded" === t.status) return t.data.planKey;
}
export const P8 = $$_0;
export const jI = $$m1;
export const jb = $$u2;
export const sD = $$c3;