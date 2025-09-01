import { languageCodes } from "../905/816253";
import { jt } from "../905/528121";
import { xb } from "../figma_app/465776";
import { Ay } from "../905/612521";
import { parseQuery } from "../905/634134";
import { UI } from "../figma_app/471982";
import { wl, MU } from "../figma_app/640564";
import { p as _$$p } from "../905/428660";
import { K2 } from "../figma_app/777551";
import { bL } from "../905/934145";
import { Uo } from "../figma_app/354658";
import { Tb, _O, E2 } from "../figma_app/350203";
import { M3 } from "../figma_app/198840";
import { my, Rd } from "../figma_app/300692";
import { U6, ou, g3 } from "../figma_app/707808";
import { z4, P5 } from "../figma_app/175992";
export class $$y0 {
  pathToSelectedView(e, t, i) {
    let a = {
      view: "communityHub"
    };
    let s = [...t];
    let l = Object.keys(jt).find(e => {
      let i = jt[e];
      return i && t.join("/").startsWith(i);
    });
    if (l && l !== languageCodes.EN && (t = t.slice(3)).unshift("", "community"), "community" === t[1]) {
      let e = i ? parseQuery(i) : {};
      if ("seller" === t[2]) return {
        view: "communityHub",
        subView: "monetizationRedirectView",
        interstitialType: U6.ONBOARDING,
        redirectUrl: e.redirect_url
      };
      if ("file" === t[2] && t[3] && t.length > 4 && "embed" === t[t.length - 1]) return {
        ...a,
        subView: "hubFileEmbed",
        hubFileId: t[3]
      };
      if (["file", "plugin", "widget"].indexOf(t[2]) > -1 && t[3]) {
        let [n, r] = [t[2], t[3]];
        let a = e.comment;
        let s = _$$p(n, r);
        let o = new URLSearchParams(i);
        let l = {
          ...s,
          triggerCheckout: o.get(Tb) ?? null,
          triggerFreemiumPreview: o.get(_O) === E2,
          commentThreadId: a,
          rating: e.rating
        };
        if ("file" === t[2]) {
          let t = e.preview;
          t && (l.fullscreenState = t);
        }
        return l;
      }
      if ("iframe_modal" === t[2]) {
        let e = ou.ACCOUNT_SETTINGS;
        let i = t[t.length - 1];
        "settings" === i ? e = ou.ACCOUNT_SETTINGS : "publish" === i && (e = ou.UNIVERSAL_PUBLISHING);
        return {
          view: "modalInIFrame",
          modalInIFrameType: e
        };
      }
      return "collections" === t[2] ? {
        view: "communityHub",
        subView: "searchAndBrowse",
        data: void 0
      } : "templates" === t[2] && t[3] ? {
        view: "communityHub",
        subView: "searchAndBrowse",
        data: void 0
      } : {
        view: "communityHub",
        subView: "searchAndBrowse",
        data: wl(s.join("/"), i)
      };
    }
    if (t[1]?.startsWith("@")) {
      let i = t[1].slice(1)?.toLowerCase();
      let {
        user
      } = e;
      if (!i) return null;
      let r = t[2];
      r === g3.METRICS && z4(user?.stripe_account_status) < z4(P5.ACCEPTED) && (r = g3.RESOURCES);
      return {
        ...a,
        subView: "handle",
        handle: i,
        profileTab: r
      };
    }
    return null;
  }
  requireHistoryChange(e, t) {
    return "communityHub" !== e.view || "communityHub" !== t.view ? "communityHub" === e.view != ("communityHub" === t.view) : "handle" === e.subView && "handle" === t.subView ? e.handle !== t.handle || e.profileTab !== t.profileTab : "plugin" === e.subView && "plugin" === t.subView ? e.publishedPluginId !== t.publishedPluginId : "widget" === e.subView && "widget" === t.subView ? e.widgetId !== t.widgetId : "hubFile" === e.subView && "hubFile" === t.subView ? e.hubFileId !== t.hubFileId : e.subView !== t.subView;
  }
  selectedViewName(e, t) {
    if ("communityHub" !== e.view) return null;
    if ("plugin" === e.subView) {
      let i = my(e.publishedPluginId, t.publishedPlugins);
      return K2(i);
    }
    if ("widget" === e.subView) {
      let i = Rd(e.widgetId, t.publishedWidgets);
      return K2(i);
    }
    if ("hubFile" === e.subView) {
      let i = M3(e.hubFileId, t.hubFiles);
      return K2(i);
    }
    if ("hubFileEmbed" === e.subView) return "Community";
    if ("handle" === e.subView) return `@${e.handle}`;
    if ("searchAndBrowse" === e.subView) return "Community";
    if ("monetizationRedirectView" === e.subView) return "Stripe onboarding complete";
    xb(e);
  }
  selectedViewToPath(e, t) {
    if ("modalInIFrame" === e.view) return `/community/iframe_modal/${e.modalInIFrameType}`;
    if ("communityHub" !== e.view) return null;
    if ("monetizationRedirectView" === e.subView && e.interstitialType === U6.ONBOARDING) return "/community/seller/onboarding/completed";
    if ("plugin" === e.subView || "widget" === e.subView) {
      let i = this.selectedViewName(e, t);
      let n = UI({
        path: e.subView,
        id: "plugin" === e.subView ? e.publishedPluginId : e.widgetId,
        name: i
      });
      null !== e.triggerCheckout && void 0 !== e.triggerCheckout && (n += "?checkout=" + e.triggerCheckout);
      e.commentThreadId && (n += `${-1 === n.indexOf("?") ? "?" : "&"}comment=${e.commentThreadId}`);
      e.rating && (n += `${-1 === n.indexOf("?") ? "?" : "&"}rating=${e.rating}`);
      return n;
    }
    if ("hubFile" === e.subView) {
      let n = {};
      e.commentThreadId && (n.comment = e.commentThreadId);
      e.fullscreenState && (n.preview = e.fullscreenState);
      null !== e.triggerCheckout && void 0 !== e.triggerCheckout && (n[Tb] = e.triggerCheckout);
      e.triggerFreemiumPreview && (n[_O] = E2);
      e.rating && (n.rating = e.rating);
      let r = this.selectedViewName(e, t);
      var i = UI({
        path: Uo.FILE,
        id: e.hubFileId,
        name: r
      });
      let a = new URLSearchParams(n).toString();
      return i + `${a && `?${a}`}`;
    }
    return "hubFileEmbed" === e.subView ? `/community/file/${e.hubFileId}/embed` : "handle" === e.subView ? bL(e.handle, e.profileTab, t.user) : "searchAndBrowse" === e.subView ? e.data ? MU(e.data) : Ay.location.pathname : "/community";
  }
}
export const B = $$y0;