import { K } from "src/905/807535";
import { getI18nString } from "src/905/303541";
import { j } from "src/905/495564";
import { X } from "src/905/698965";
export class $$o0 {
  pathToSelectedView(e, t) {
    let {
      currentUserOrgId
    } = e;
    if (!currentUserOrgId) return null;
    if ("files" === t[1] && 2 === t.length) return {
      view: "org",
      orgId: currentUserOrgId,
      orgViewTab: X.HOME
    };
    if ("files" === t[1] && t.length >= 3) {
      let e = {
        view: "org",
        orgId: currentUserOrgId,
        orgViewTab: X.HOME
      };
      let r = K(X, t[2]);
      return r ? (e.orgViewTab = r, e) : null;
    }
    return null;
  }
  requireHistoryChange(e, t) {
    return "org" !== e.view || "org" !== t.view ? "org" === e.view != ("org" === t.view) : e.orgId !== t.orgId;
  }
  selectedViewName(e, t) {
    if ("org" !== e.view) return null;
    let {
      orgById
    } = t;
    let n = orgById[e.orgId];
    return e.orgViewTab === X.HOME ? n ? n.name : "" : e.orgViewTab === X.PLUGINS ? getI18nString("org_view.view_selector.plugins") : "Org";
  }
  selectedViewToPath(e, t) {
    if ("org" !== e.view) return null;
    let i = j(t);
    if (!i) return null;
    let n = `/files${i}`;
    e.orgViewTab && (n += `/${e.orgViewTab}`);
    t.user && (n += `?fuid=${t.user.id}`);
    return n;
  }
  selectedViewHasMissingResources(e, t) {
    return !1;
  }
}
export const G = $$o0;
