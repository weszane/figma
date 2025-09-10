import { z } from "src/905/239603";
import { p } from "src/905/42189";
var $$a2 = (e => (e.ALL = "All", e.STICKERS_AND_COMPONENTS = "Stickers", e.TEMPLATES = "Templates", e.TEAM_TEMPLATES = "TeamTemplates", e.WIDGETS = "Widgets", e.PLUGINS = "Plugins", e.MORE = "More", e.ORG_FACE_STAMPS = "OrgFaceStamps", e))($$a2 || {});
export let $$s1 = z.enum(["universal-insert-figjam-all", "universal-insert-figjam-all-use-case", "universal-insert-figjam-templates", "universal-insert-figjam-stickers", "universal-insert-figjam-stickers-compact-view", "universal-insert-figjam-widgets", "universal-insert-figjam-plugins", "universal-insert-figjam-more", "universal-insert-figjam-collage", "universal-insert-figjam-all-whiteboard-tools"]);
export function $$o3(e) {
  switch (e) {
    case p.ALL:
      return "universal-insert-figjam-all";
    case p.TEMPLATES:
      return "universal-insert-figjam-templates";
    case p.STICKERS_AND_COMPONENTS:
      return "universal-insert-figjam-stickers";
    case p.WIDGETS:
      return "universal-insert-figjam-widgets";
    case p.PLUGINS:
      return "universal-insert-figjam-plugins";
    case p.MORE:
      return "universal-insert-figjam-more";
    case p.RECENTS_COLLAGE:
      return "universal-insert-figjam-collage";
    default:
      throw Error("Unhandled modal tab in convertModalTabToTrackingSource");
  }
}
export let $$l0 = "universal-insert-slides-all";
export const Du = $$l0;
export const MM = $$s1;
export const Rt = $$a2;
export const Vq = $$o3;
