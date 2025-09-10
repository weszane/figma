import { serializeQuery } from "../905/634134";
import { getI18nString } from "../905/303541";
export class $$a0 {
  pathToSelectedView(e, t, i, n) {
    return 2 === t.length && "desktop_new_tab" === t[1] ? {
      view: "desktopNewTab"
    } : null;
  }
  selectedViewToPath(e, t) {
    if ("desktopNewTab" !== e.view) return null;
    let i = {};
    t.user && (i.fuid = t.user.id);
    t.currentUserOrgId && (i.org_id = t.currentUserOrgId);
    t.currentTeamId && (i.team_id = t.currentTeamId);
    return `/desktop_new_tab?${serializeQuery(i)}`;
  }
  requireHistoryChange(e, t) {
    return "desktopNewTab" === e.view != ("desktopNewTab" === t.view);
  }
  selectedViewName(e) {
    return "desktopNewTab" !== e.view ? null : getI18nString("desktop_new_tab.tab_title");
  }
}
export const i = $$a0;
