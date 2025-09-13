import { jsxs, jsx } from "react/jsx-runtime";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { A } from "../4711/623519";
export function $$o0() {
  return jsxs("div", {
    className: "dsa_pending_migration_container--pendingMigrationContainer---zKkr",
    children: [jsx(SvgComponent, {
      svg: A,
      className: "dsa_pending_migration_container--pendingMigrationIcon--ctbjp"
    }), jsx("div", {
      className: "dsa_pending_migration_container--pendingMigrationHeading--jCmnT text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: renderI18nText("design_systems.libraries_modal.dsa_undergoing_migration_heading")
    }), jsx("div", {
      children: renderI18nText("design_systems.libraries_modal.dsa_undergoing_migration_text")
    })]
  });
}
export const l = $$o0;