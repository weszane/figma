import { logger } from "../905/651849";
import { C } from "../905/237873";
import { H, e as _$$e } from "../figma_app/324237";
import { Z } from "../905/942203";
import { k as _$$k } from "../905/22009";
import { L } from "../905/178090";
import { J5, iB } from "../figma_app/805898";
import { zs, pJ } from "../figma_app/773663";
export function $$u6(e, t) {
  return $$h5(e, t) || J5(e, t) || function (e, t) {
    let r = decodeURIComponent(e || location.pathname);
    if (!g.test(r) || f.test(r) || E.test(r)) return;
    let n = ("/" === r[0] ? r.slice(1) : r).split("/");
    let o = {
      resourceType: void 0,
      tags: [],
      editor_type: void 0,
      sort_by: H(),
      price: C.ALL,
      category: null,
      creators: Z.ALL
    };
    for (let e = 0; e < b.length && 0 !== n.length; e++) {
      let t = b[e](n, o);
      t && t[0] && (n = t[1], o = {
        ...o,
        ...t[0]
      });
    }
    let {
      editorType,
      resourceType
    } = zs(o.editor_type, o.resourceType);
    o.editor_type = editorType;
    o.resourceType = resourceType;
    let u = new URLSearchParams(location.search);
    let p = (() => {
      let e = u.get("creators");
      return e && e === Z.FOLLOWING ? e : o.creators;
    })();
    return {
      ...o,
      creators: p
    };
  }(e);
}
export function $$p1(e) {
  return "query" in e ? $$m2(e) : "category" in e && null !== e.category ? iB(e) : function (e) {
    let t = "/community";
    e.tags?.length && (t += `/tag/${e.tags.join(",")}`);
    let {
      editorType,
      resourceType
    } = zs(e.editor_type, e.resourceType);
    e.editor_type !== editorType ? e.resourceType = zs(e.editor_type).resourceType : e.resourceType !== resourceType && (e.resourceType = resourceType);
    e.resourceType !== L.BrowseResourceTypes.MIXED && (t += `/${e.resourceType}`);
    zs(e.editor_type, e.resourceType).editorType !== _$$k.Editors.ALL && (t += `/${e.editor_type}`);
    e.price && C.FOR_URL_SLUG.indexOf(e.price) > -1 && (t += `/${e.price}`);
    e.creators === Z.FIGMA_PARTNER && (t += `/${e.creators}`);
    e.sort_by && e.sort_by !== H() && (e.sort_by === _$$e.Browse.PUBLISHED_AT ? t += "/new" : e.sort_by === _$$e.Browse.POPULAR && (t += "/trending"));
    T[t] && (t = T[t]);
    let d = {};
    e.creators === Z.FOLLOWING && (d.creators = e.creators);
    let u = Object.keys(d).length > 0 ? new URLSearchParams(d).toString() : void 0;
    u && (t += `?${u}`);
    return t;
  }(e);
}
let _ = /^\/community\/search$/;
export function $$h5(e, t) {
  if (!(e ||= location.pathname).match(_)) return null;
  let r = new URLSearchParams(t ||= location.search);
  let n = r.get("query");
  if (!n) return null;
  let o = r.get("resource_type");
  if (!o) return null;
  let l = r.get("sort_by") || _$$e.Search.RELEVANCY;
  let d = zs(r.get("editor_type") ?? void 0, o).editorType;
  return {
    resourceType: o,
    sort_by: l,
    editor_type: d,
    query: n,
    price: r.get("price") || C.ALL,
    creators: (() => {
      let e = r.get("creators");
      return Z.isSearchType(e) ? e : Z.ALL;
    })()
  };
}
export function $$m2(e) {
  let t = new URLSearchParams({
    resource_type: e.resourceType,
    sort_by: e.sort_by,
    query: e.query,
    editor_type: zs(e.editor_type, e.resourceType).editorType,
    price: e.price,
    creators: e.creators && Z.isSearchType(e.creators) ? e.creators : Z.ALL
  }).toString();
  return `/community/search?${t}`;
}
let g = /^\/community/;
let f = /^\/community\/collections?\/?/;
let E = /^\/community\/(file|plugin|widget)\//;
var y = (e => (e.NEW = "new", e.POPULAR = "popular", e.TRENDING = "trending", e.TAG = "tag", e.COMMUNITY = "community", e))(y || {});
let b = [function (e) {
  return "community" === e[0] && [{}, e.slice(1)];
}, function (e) {
  return "tag" === e[0] && !!e[1] && [{
    tags: e[1].split(",")
  }, e.slice(2)];
}, function (e) {
  let t = e[0];
  return Object.values(L.BrowseResourceTypes).indexOf(t) > -1 && [{
    resourceType: t
  }, e.slice(1)];
}, function (e, t) {
  let r = e[0];
  return Object.values(_$$k.Editors).indexOf(r) > -1 && [{
    editor_type: zs(r, t.resourceType).editorType
  }, e.slice(1)];
}, function (e) {
  let t = e[0];
  return C.FOR_URL_SLUG.indexOf(t) > -1 && [{
    price: t
  }, e.slice(1)];
}, function (e) {
  let t = e[0];
  return t === Z.FIGMA_PARTNER && [{
    creators: t
  }, e.slice(1)];
}, function (e) {
  let t = null;
  "new" === e[0] && (t = _$$e.Browse.PUBLISHED_AT);
  "popular" === e[0] && (t = _$$e.Browse.ALL_TIME);
  "trending" === e[0] && (t = _$$e.Browse.POPULAR);
  return !!t && [{
    sort_by: t
  }, e.slice(1)];
}];
let T = {
  "/community/mixed": "/community"
};
export function $$I0() {
  let e = pJ();
  return {
    resourceType: e.resourceType,
    sort_by: H(),
    editor_type: e.editorType,
    price: C.ALL,
    tags: [],
    category: null,
    creators: Z.ALL
  };
}
export let $$S4 = (() => {
  let e = pJ();
  return {
    resourceType: e.resourceType,
    sort_by: _$$e.Search.RELEVANCY,
    editor_type: e.editorType,
    price: C.ALL,
    creators: Z.ALL
  };
})();
export function $$v3(e) {
  return /\/community\/(file|plugin|widget)\/\d+/.test(e) ? {
    reactRouterHandled: !0,
    subView: "resourcePage"
  } : /^\/@/.test(e) ? {
    reactRouterHandled: !0,
    subView: "handle"
  } : /\/community*/.test(e) ? {
    reactRouterHandled: !0,
    subView: "searchAndBrowse"
  } : (logger.warn(`If this is firing, it means you're trying to use logged-out Community routing on a non-Community URL.
url: ${e}`), {
    reactRouterHandled: !1,
    subView: !1
  });
}
export const Gu = $$I0;
export const MU = $$p1;
export const Mc = $$m2;
export const gV = $$v3;
export const qd = $$S4;
export const sT = $$h5;
export const wl = $$u6;
