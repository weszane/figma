import { t } from "../905/303541";
export class $$r0 {
  pathToSelectedView(e, t, i, n) {
    return 2 === t.length && "try-figjam" === t[1] ? {
      view: "figjamTry"
    } : null;
  }
  selectedViewToPath(e) {
    return "figjamTry" !== e.view ? null : "/try-figjam";
  }
  requireHistoryChange(e, t) {
    return "figjamTry" === e.view != ("figjamTry" === t.view);
  }
  selectedViewName(e) {
    return "figjamTry" !== e.view ? null : t("view_selectors.file_browser.try_figjam.try_fig_jam");
  }
}
export const u = $$r0;