import { useMemo } from "react";
import { sortByWithOptions, sortByPropertyWithOptions } from "../figma_app/656233";
import { selectWithShallowEqual } from "../905/103090";
import { getComponentBreadcrumbs, memoizedProcessComponentsAndStateGroups, processLocalComponents, getFullComponentBreadcrumbs } from "../figma_app/80990";
import { Nz } from "../figma_app/915774";
import { X0, th } from "../figma_app/646357";
import { V } from "../905/726668";
import { getBasename } from "../905/309735";
import { He } from "../figma_app/155728";
import { $1, oV } from "../figma_app/76115";
import { VL } from "../figma_app/112055";
import { N } from "../905/281143";
var $$g5 = (e => (e[e.SUBPATHS_FIRST = 0] = "SUBPATHS_FIRST", e[e.COMPONENTS_FIRST = 1] = "COMPONENTS_FIRST", e))($$g5 || {});
let f = e => {
  let t = [];
  for (let i of e) "LEAF" === i.type ? t.push(i) : t.push(...f(i.children));
  return t;
};
let _ = (e, t, i) => {
  if (0 === e.length) return [];
  let n = {
    subpaths: Object.create(null),
    items: []
  };
  for (let t of e) {
    let i = getComponentBreadcrumbs(t, e);
    let r = n;
    for (let e of i) {
      r.subpaths[e] || (r.subpaths[e] = {
        subpaths: Object.create(null),
        items: []
      });
      r = r.subpaths[e];
    }
    r.items.push(t);
  }
  let a = e => {
    let i = [];
    for (let t of e.items) i.push({
      type: "LEAF",
      displayText: getBasename(t.name),
      item: t,
      id: t.library_key + t.node_id
    });
    for (let t in e.subpaths) i.push({
      type: "SUBPATH",
      displayText: t,
      children: a(e.subpaths[t]),
      id: t
    });
    sortByWithOptions(i, e => `${"SUBPATH" === e.type ? t : ~t + 2}-${e.displayText}`, {
      useExpensiveNaturalComparison: !0
    });
    return i;
  };
  let o = a(n);
  return i ? f(o) : o;
};
function A(e, t, i) {
  let n = {};
  let a = {};
  let s = [];
  for (let t of e) {
    let e = t.containing_frame?.pageId;
    let i = t.containing_frame?.pageName?.trim() || t.containing_frame?.pageName;
    if (!e || !i) {
      s.push(t);
      continue;
    }
    n.hasOwnProperty(i) ? n[i].push(t) : n[i] = [t];
    a[e] = i;
  }
  if (s.length > 0) {
    let e = Object.keys(n);
    let t = null;
    1 === e.length ? t = n[e[0]] || null : a[VL] && (t = n[a[VL]] || null);
    null !== t && t.push(...s);
  }
  let o = [];
  for (let [e, r] of Object.entries(n)) {
    if (1 === Object.keys(n).length) return _(r, t, i);
    let a = {
      type: "SUBPATH",
      displayText: e || "",
      children: _(r, t, i),
      id: e || ""
    };
    o.push(a);
  }
  sortByPropertyWithOptions(o, "displayText", {
    useExpensiveNaturalComparison: !0
  });
  return o;
}
export function $$y1(e, t, i) {
  return A(X0(memoizedProcessComponentsAndStateGroups(e)), t, i);
}
export function $$b6({
  libraryKeyBackingSelectedItems: e,
  order: t,
  libraryMetadataMap: i,
  flattenSubpaths: r
}) {
  let {
    subscribedFileDataByLibraryKey,
    hubFilesByLibraryKey
  } = N();
  let {
    library,
    openFile
  } = selectWithShallowEqual(e => ({
    library: e.library,
    openFile: e.openFile
  }));
  let g = function (e, t, i, r, a) {
    let {
      libraryKeyToSubscribedItems
    } = $1({
      library: e,
      fileDataByLibraryKey: t
    });
    let {
      libraryKeyToSubscribedItems: _libraryKeyToSubscribedItems
    } = oV({
      library: e,
      hubFilesByLibraryKey: i
    });
    return useMemo(() => {
      let t = {
        ...libraryKeyToSubscribedItems,
        ..._libraryKeyToSubscribedItems
      };
      if (null != a && a !== r?.libraryKey && !(a in t)) {
        let i = th(e.publishedByLibraryKey.components);
        let n = th(e.publishedByLibraryKey.stateGroups);
        let r = i[a] ?? {};
        let o = n[a] ?? {};
        t[a] = [...Object.values(processLocalComponents(r)), ...Object.values(o)];
      }
      return t;
    }, [libraryKeyToSubscribedItems, _libraryKeyToSubscribedItems, a, r?.libraryKey, e.publishedByLibraryKey.components, e.publishedByLibraryKey.stateGroups]);
  }(library, subscribedFileDataByLibraryKey, hubFilesByLibraryKey, openFile, e);
  let f = useMemo(() => function (e, t, i, n) {
    let r = Object.keys(e).sort((e, i) => {
      let n = t[e]?.name ?? "";
      let r = t[i]?.name ?? "";
      return n.localeCompare(r);
    });
    let a = {};
    for (let s of r) {
      let r = e[s];
      t[s]?.isHubFile && (r = r.filter(e => !Nz(e, {
        isPreset: !0
      })));
      a[s] = A(r, i, n);
    }
    return a;
  }(g, i, t, r), [r, i, t, g]);
  return useMemo(() => ({
    publishedLibraryItemsByLibraryKey: g,
    rootDrilldownItemsByLibraryKey: f
  }), [g, f]);
}
export function $$v2(e) {
  return {
    type: "LEAF",
    item: e,
    displayText: e.name,
    id: e.library_key + e.node_id
  };
}
export var $$I4 = (e => (e.SELECT = "SELECT", e.DESELECT = "DESELECT", e))($$I4 || {});
export function $$E8(e, t) {
  return {
    "data-tooltip": t?.hideName ? e.description?.trim() : `${getBasename(e.name)}

${e.description}`.trim(),
    "data-tooltip-text-left": null != e.description,
    "data-tooltip-max-width": 240
  };
}
export function $$x3(e, t) {
  let i;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    let a = getFullComponentBreadcrumbs(r, t);
    if (!i) {
      i = a;
      continue;
    }
    i.length > a.length && (i = i.slice(0, a.length));
    for (let e = 0; e < a.length; e++) if (i[e] !== a[e]) {
      i = i.slice(0, e);
      break;
    }
    if (0 === i.length) return [];
  }
  return i ?? [];
}
export function $$S0(e) {
  if ("LEAF" === e.type) return e.item;
  {
    let t = [...e.children];
    for (; t.length > 0;) {
      let e = t.shift();
      if ("LEAF" === e.type) return e.item;
      t.push(...e.children);
    }
  }
  return null;
}
export function $$w7(e) {
  let t = He();
  let i = useMemo(() => e ? [...t, e] : [...t], [e, t]);
  let r = V(i);
  return useMemo(() => ({
    libraryMetadataLoading: "loading" === r.status,
    libraryMetadataMap: r?.data ?? {}
  }), [r?.data, r.status]);
}
export const Bx = $$S0;
export const Dr = $$y1;
export const Kk = $$v2;
export const OK = $$x3;
export const Wu = $$I4;
export const Wx = $$g5;
export const Xx = $$b6;
export const jB = $$w7;
export const pf = $$E8;