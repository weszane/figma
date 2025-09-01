import { sy } from "../figma_app/930338";
import { t } from "../905/303541";
export class $$a0 {
  pathToSelectedView(e, t) {
    return "files" === t[1] && "team" === t[2] && "restore" === t[5] ? {
      view: "teamRestore",
      teamId: t[3],
      teamName: t[4]
    } : null;
  }
  requireHistoryChange(e, t) {
    return "teamRestore" !== e.view || "teamRestore" !== t.view ? "teamRestore" === e.view != ("teamRestore" === t.view) : t.teamId !== e.teamId;
  }
  selectedViewToPath(e) {
    return "teamRestore" === e.view ? t("view_selectors.file_browser.restore_team") : null;
  }
  selectedViewName(e) {
    return "teamRestore" === e.view ? `/files/team/${e.teamId}/${sy(e.teamName)}/restore` : null;
  }
  selectedViewHasMissingResources(e, t) {
    return !1;
  }
}
export const m = $$a0;