import { sortByPropertyWithOptions } from "../figma_app/656233";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { NX, k9 } from "../figma_app/777207";
import { gO, dS, Nz } from "../figma_app/915774";
import { isTemplateAsset, isPrimaryWorkflowType } from "../figma_app/646357";
import { l as _$$l } from "../905/997221";
import { splitPath } from "../905/309735";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { TY } from "../figma_app/76115";
export function $$_4(e, t) {
  let r = {};
  let n = {};
  let i = [];
  e.forEach(e => {
    let a = t(e);
    if (!a) return;
    let s = a.containing_frame;
    if (s?.pageId) {
      let t = s.pageId;
      let i = s.pageName || "";
      n[t] = i;
      r[t] = r[t] || [];
      r[t].push(e);
    } else i.push(e);
  });
  return {
    itemsByPageId: r,
    pageNamesByPageId: n,
    itemsWithoutPage: i
  };
}
export let $$h2 = "0:1";
export function $$m3(e, t, r, n) {
  if (0 !== r.length) {
    if (1 === Object.keys(e).length && 1 === Object.keys(t).length) {
      let t = Object.keys(e)[0];
      e[t].push(...r);
      r.splice(0, r.length);
    } else t[$$h2] && e[$$h2] ? (e[$$h2].push(...r), r.splice(0, r.length)) : n && (t[$$h2] || (t[$$h2] = "Page 1"), e[$$h2] = [...r], r.splice(0, r.length));
  }
}
function g(e, t, r, n, i) {
  let a = [];
  let s = new Map();
  for (let i of e) {
    t && (i.flattenedPath = t.concat(i.name || "").join(" / "));
    r && (i.breadcrumbPath = function (e, t) {
      let r = [...e];
      if (t && t.length && e && e.length) {
        let n = e.length - t.length;
        for (let i = t.length - 1; i >= 0; --i) i + n < e.length && e[i + n] === t[i] && r.pop();
      }
      return r.length > 0 ? r.join(" / ") + " /" : "";
    }(r, t));
    n && (i.stickyHeaderTokens = n.concat(i.name || ""));
    s.has(i.name || "") ? (i.subtrees && i.subtrees.length && s.get(i.name || "")?.subtrees.push(...i.subtrees), i.items && i.items.length && s.get(i.name || "")?.items.push(...i.items)) : s.set(i.name || "", i);
  }
  for (let e of s.values()) {
    let s = t;
    let l = r;
    let d = n.concat(e.name || "");
    let c = new Set();
    for (let t of e.subtrees) c.add(t.name);
    l = l.concat(e.name || "");
    "PAGE" !== e.type && (0 === e.items.length && 1 === c.size ? (e.skipElementsInRendering = !0, s = s.concat(e.name || "")) : s = []);
    e.subtrees = g(e.subtrees, s, l, d, {
      isPreset: i?.isPreset ?? !1
    });
    gO(e.subtrees, {
      sortFn: e => e.name,
      priorityFn: e => dS(e.name, {
        isPreset: i?.isPreset ?? !1
      })
    });
    a.push(e);
  }
  return a;
}
function f(e, t, r) {
  gO(t, {
    sortFn: e => e.name,
    priorityFn: e => Nz(e, {
      isPreset: r?.isPreset ?? !1
    })
  });
  let n = Object.create(null);
  for (let r of t) {
    let t = splitPath(r.name);
    let i = "";
    for (let a = 0; a < t.length; a++) {
      let s;
      let o = t[a];
      let l = i;
      let d = a < t.length - 1;
      if (i += o + (d ? "/" : ""), s = n[l] ? n[l] : e, d && !n[i]) {
        let e = {
          type: "NAME_GROUP",
          name: o,
          key: o,
          items: [],
          subtrees: []
        };
        n[i] = e;
        s.subtrees.push(e);
      }
      d || s.items.push(r);
    }
  }
}
function E(e, t, r) {
  let n = {};
  let a = [];
  let s = [];
  let o = {};
  for (let e of t) if (getFeatureFlags().dse_templates_proto && e.type === PrimaryWorkflowEnum.COMPONENT && isTemplateAsset(e)) a.push(e);else if (isPrimaryWorkflowType(e) && e.containing_frame?.nodeId && "" !== e.containing_frame.name) {
    let t = e.containing_frame.nodeId;
    n[t] = n[t] || [];
    n[t].push(e);
    o[t] = e.containing_frame;
  } else s.push(e);
  if (getFeatureFlags().dse_templates_proto && a.length > 0) {
    let t = {
      type: "NAME_GROUP",
      name: "Templates",
      key: `${e.key}-${T}`,
      items: [],
      subtrees: []
    };
    e.subtrees.push(t);
    f(t, a, {
      isPreset: r?.isPreset ?? !1
    });
  }
  let d = Object.keys(n).length;
  if (d > 0 || 1 === d && s.length) {
    for (let t in n) {
      let i = o[t];
      let a = n[t];
      let s = {
        type: "NAME_GROUP",
        name: i.name || "",
        key: t,
        items: [],
        subtrees: []
      };
      e.subtrees.push(s);
      f(s, a, {
        isPreset: r?.isPreset ?? !1
      });
    }
    f(e, s, {
      isPreset: r?.isPreset ?? !1
    });
  } else f(e, getFeatureFlags().dse_templates_proto ? t.filter(e => !isTemplateAsset(e)) : t, {
    isPreset: r?.isPreset ?? !1
  });
}
function y(e, t, r) {
  let {
    itemsByPageId,
    pageNamesByPageId,
    itemsWithoutPage
  } = $$_4(t, e => e.type === PrimaryWorkflowEnum.COMPONENT || e.type === PrimaryWorkflowEnum.STATE_GROUP || e.type === PrimaryWorkflowEnum.MODULE ? e : null);
  $$m3(itemsByPageId, pageNamesByPageId, itemsWithoutPage);
  let s = Object.keys(itemsByPageId);
  if (gO(s, {
    sortFn: e => pageNamesByPageId[e],
    priorityFn: e => dS(pageNamesByPageId[e], {
      isPreset: r?.isPreset ?? !1
    })
  }), s.length > 1 || 1 === s.length && itemsWithoutPage.length) {
    for (let t of s) {
      let a = {
        type: "PAGE",
        name: pageNamesByPageId[t],
        key: t,
        items: [],
        subtrees: []
      };
      e.subtrees.push(a);
      E(a, itemsByPageId[t], {
        isPreset: r?.isPreset ?? !1
      });
    }
    E(e, itemsWithoutPage, {
      isPreset: r?.isPreset ?? !1
    });
  } else E(e, t, {
    isPreset: r?.isPreset ?? !1
  });
  e.subtrees = g(e.subtrees, [], [], e.name ? [e.name] : [], {
    isPreset: r?.isPreset ?? !1
  });
  gO(e.subtrees, {
    sortFn: e => e.name.trim(),
    priorityFn: e => dS(e.name.trim(), {
      isPreset: r?.isPreset ?? !1
    })
  });
}
export function $$b0({
  localLibraryItemsInfo: e,
  subscribedItemsInfo: t,
  subscribedCommunityItemsInfo: r,
  defaultSubscribedItemsInfo: i,
  canPublish: o,
  approvedLibraryKeysByResourceType: l
}) {
  let c = {
    items: [],
    subtrees: []
  };
  let u = {};
  let _ = {};
  let {
    libraryKeyToSubscribedItems,
    subscribedFiles
  } = t;
  let f = [...subscribedFiles];
  let b = function (e, t, r, n) {
    let {
      allItems,
      privateItems,
      numPublished
    } = t;
    let l = numPublished > 0 && r;
    let d = l && privateItems.length > 0;
    let c = function (e, t) {
      let {
        allItems: _allItems,
        publishedItems,
        privateItems: _privateItems,
        numPublished: _numPublished
      } = e;
      return _numPublished > 0 && t && _privateItems.length > 0 ? publishedItems : _allItems;
    }(t, r);
    let u = {
      items: [],
      subtrees: [],
      key: "localComponents",
      name: allItems.length > 0 ? getI18nString("design_systems.assets_panel.created_in_this_file") : "",
      type: "FILE",
      sectionNameForTracking: 0 === n ? "Local components" : "Local templates",
      isFilePublished: l,
      stickyHeaderTokens: []
    };
    if (e.subtrees.push(u), !d && TY(c) ? (E(u, c), u.subtrees = g(u.subtrees, [], [], u.name ? [u.name] : [])) : y(u, c), d) {
      let e = {
        items: [],
        subtrees: [],
        key: "privateToThisFile",
        name: getI18nString("design_systems.assets_panel.hidden"),
        type: "PAGE",
        sectionNameForTracking: 0 === n ? "Local private components" : "Local private templates",
        isFilePublished: l,
        stickyHeaderTokens: []
      };
      y(e, privateItems);
      u.subtrees.push(e);
    }
    return u;
  }(c, e, o, 0);
  let T = i.fileKeyToSubscribedItems;
  for (let e of i.subscribedFiles) {
    let t = e.key;
    let r = _$$l(e);
    let n = {
      items: [],
      subtrees: [],
      key: `defaultLibrary:${t}`,
      name: getI18nString("design_systems.assets_panel.created_by_figma"),
      type: "FILE",
      isFilePublished: !0,
      sectionNameForTracking: "Default libraries",
      subscribedLibraryKey: _$$l(e)
    };
    y(n, T[t]);
    c.subtrees.push(n);
    u[t] = n;
    r && (_[t] = r);
  }
  for (let e of (sortByPropertyWithOptions(f, "name"), NX(l) && k9({
    libraries: f,
    approvedLibraryKeysByResourceType: l
  }), f)) {
    let t = e.key;
    let r = _$$l(e);
    let n = {
      items: [],
      subtrees: [],
      key: `subscribedComponents:${t}`,
      name: e.name,
      type: "FILE",
      isFilePublished: !0,
      sectionNameForTracking: "Subscribed libraries",
      subscribedLibraryKey: _$$l(e)
    };
    r && libraryKeyToSubscribedItems[r] && y(n, libraryKeyToSubscribedItems[r]);
    u[t] = n;
    c.subtrees.push(n);
    r && (_[t] = r);
  }
  if (r) {
    let {
      libraryKeyToSubscribedItems,
      subscribedHubFiles
    } = r;
    for (let r of subscribedHubFiles) {
      let t = r.id;
      let n = {
        items: [],
        subtrees: [],
        key: `subscribedCommunityComponents:${t}`,
        name: r.versions[r.current_hub_file_version_id].name,
        type: "FILE",
        isFilePublished: !0,
        sectionNameForTracking: "Subscribed community libraries",
        subscribedLibraryKey: r.library_key
      };
      r.library_key && y(n, libraryKeyToSubscribedItems[r.library_key], {
        isPreset: !0
      });
      c.subtrees.push(n);
      u[t] = n;
      r.library_key && (_[t] = r.library_key);
    }
  }
  return {
    tree: c,
    localSubtree: b,
    subscribedFileSubtrees: u,
    fileKeyToLibraryKey: _
  };
}
let T = "template-subtree";
export function $$I1(e) {
  return "NAME_GROUP" === e.type && e.key.includes(T);
}
var S = (e => (e[e.COMPONENT = 0] = "COMPONENT", e[e.TEMPLATE = 1] = "TEMPLATE", e))(S || {});
export const Nx = $$b0;
export const Qe = $$I1;
export const VL = $$h2;
export const fM = $$m3;
export const tz = $$_4;