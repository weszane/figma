import { D } from "../905/347702";
import { useOpenFileObjectWithSinatraType } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { f } from "../905/940356";
export function $$o0(e) {
  let t = selectCurrentUser();
  let r = useOpenFileObjectWithSinatraType({
    useSinatraType: !0
  });
  return $$l3(t?.id, r, e);
}
export let $$l3 = D((e, t, r) => null != e && null != t && function (e, t) {
  return !!e && !!e.track_tags && !e.trashed_at && !e.deleted_at && !!e.is_template && t.includes(e.track_tags.figma_basics_experiment);
}(t, r) && e === t.creator_id);
export var $$d1 = (e => (e.PROPERTIES_PANEL_TITLE = "properties-panel-title", e.SCRUBBABLE_CONTROL = "scrubbable-control", e.PAINT_PANEL_ROW = "paint-panel-row", e.TEXT_PANEL = "text-panel", e))($$d1 || {});
export function $$c2(e, t) {
  return e + "-" + t.toLowerCase().replace(" ", "-");
}
export function $$u6() {
  let e = f("editor_onboarded");
  let t = f("figma_basics_tooltips_onboarding");
  let r = f("no_figma_basics_tooltips_onboarding");
  return $$h5({
    editor_onboarded: e,
    figma_basics_tooltips_onboarding: t,
    no_figma_basics_tooltips_onboarding: r,
    cursor_bot_v2__basics_onboarded: f("cursor_bot_v2__basics_onboarded"),
    cursor_bot_v2__no_basics_onboarded: f("cursor_bot_v2__no_basics_onboarded"),
    seen_starting_points_tooltips_onboarding: f("seen_starting_points_tooltips_onboarding")
  });
}
export function $$p4() {
  let e = f("editor_onboarded");
  return $$h5({
    editor_onboarded: e,
    figma_basics_tooltips_onboarding: f("figma_basics_tooltips_onboarding"),
    no_figma_basics_tooltips_onboarding: f("no_figma_basics_tooltips_onboarding"),
    seen_starting_points_tooltips_onboarding: f("seen_starting_points_tooltips_onboarding")
  });
}
export function $$_7(e) {
  let t = !!f("cursor_bot_v2__basics_onboarded");
  let r = !!f("cursor_bot_v2__no_basics_onboarded");
  return t || !e && r;
}
export function $$h5(e) {
  return !!(e.editor_onboarded || e.figma_basics_tooltips_onboarding || e.no_figma_basics_tooltips_onboarding || e.cursor_bot_v2__basics_onboarded || e.cursor_bot_v2__no_basics_onboarded || e.seen_starting_points_tooltips_onboarding);
}
export const Ai = $$o0;
export const D8 = $$d1;
export const Lh = $$c2;
export const WO = $$l3;
export const Y3 = $$p4;
export const _q = $$h5;
export const jO = $$u6;
export const jm = $$_7;