import { parseQuerySimple } from "../905/634134";
import { getI18nString } from "../905/303541";
export class $$a0 {
  pathToSelectedView(e, t, i, r) {
    return 2 === t.length && "report-abuse" === t[1] ? {
      view: "abuseReportForm",
      reportedContent: (i ? parseQuerySimple(i) : {}).reported_content
    } : null;
  }
  selectedViewToPath(e) {
    return "abuseReportForm" !== e.view ? null : "/report-abuse";
  }
  requireHistoryChange(e, t) {
    return "abuseReportForm" === e.view != ("abuseReportForm" === t.view);
  }
  selectedViewName(e) {
    return "abuseReportForm" !== e.view ? null : getI18nString("view_selectors.abuse_report_form.title");
  }
}
export const v = $$a0;
