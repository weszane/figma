import { getResourceDataOrFallback } from "../905/723791";
import { mapVariableProperties, mapVariableSetProperties } from "../figma_app/349248";
export function $$a2(e, t) {
  let i = (e, i) => {
    let n = [];
    i?.forEach(i => {
      i.variables?.forEach(i => {
        n.push(mapVariableProperties(i, e, t));
      });
    });
    return n;
  };
  if ("team" === e.type && e.value?.status === "loaded") {
    let t = e.value.data.file;
    if (t) return i({
      type: "team",
      file: t
    }, t?.variableCollections);
  }
  if ("community" === e.type && e.value?.status === "loaded") {
    let t = getResourceDataOrFallback(e.value.data.communityLibraryByHubFileId);
    if (t) return i({
      type: "hubFile",
      file: {
        id: t.hubFileId,
        libraryKey: t.libraryKey
      }
    }, t?.variableCollections);
  }
  return [];
}
export function $$s3(e) {
  return e.sort((e, t) => e.sortPosition && t.sortPosition ? e.sortPosition > t.sortPosition ? 1 : -1 : e.sortPosition ? -1 : t.sortPosition ? 1 : e.name !== t.name ? e.name.localeCompare(t.name) : e.node_id > t.node_id ? 1 : -1);
}
export function $$o1(e) {
  let t = new Intl.Collator(void 0, {
    numeric: !0,
    sensitivity: "base"
  });
  return [...e].sort((e, i) => {
    let n = t.compare(e.name, i.name);
    return 0 !== n ? n : e.node_id > i.node_id ? 1 : -1;
  });
}
export function $$l4(e, t) {
  if ("team" === e.type && e.value?.status === "loaded") {
    let i = e.value.data.file;
    if (i && i.variableCollections) return $$s3(i.variableCollections.map(e => mapVariableSetProperties(e, {
      type: "team",
      file: i
    }, t)));
  }
  if ("community" === e.type && e.value?.status === "loaded") {
    let i = getResourceDataOrFallback(e.value.data.communityLibraryByHubFileId);
    if (i && i.variableCollections) return $$s3(i.variableCollections.map(e => mapVariableSetProperties(e, {
      type: "hubFile",
      file: {
        id: i.hubFileId,
        libraryKey: i.libraryKey
      }
    }, t)));
  }
  return [];
}
export function $$d0(e, t) {
  if ("loaded" !== e.status || !e.data.libraryKeyToFile) return [];
  let i = e.data.libraryKeyToFile;
  if (i.file) {
    let e = i.file;
    return (e.variableCollections ?? []).map(i => mapVariableSetProperties(i, {
      type: "team",
      file: e
    }, t));
  }
  if (!i.hubFile) return [];
  {
    let e = i.hubFile;
    return (getResourceDataOrFallback(e.variableCollections) ?? []).map(i => mapVariableSetProperties(i, {
      type: "hubFile",
      file: e
    }, t));
  }
}
export function $$c5(e, t) {
  if ("loaded" !== e.status || !e.data.libraryKeyToFile) return [];
  let i = e.data.libraryKeyToFile;
  if (i.hubFile) {
    let e = i.hubFile;
    let r = getResourceDataOrFallback(e.variableCollections) ?? [];
    return u({
      type: "hubFile",
      file: e
    }, r, t);
  }
  if (!i.file) return [];
  {
    let e = i.file;
    return u({
      type: "team",
      file: e
    }, e.variableCollections, t);
  }
}
function u(e, t, i) {
  return (t ?? []).flatMap(e => e?.variables ?? []).map(t => mapVariableProperties(t, e, i));
}
export const C$ = $$d0;
export const UO = $$o1;
export const cM = $$a2;
export const iw = $$s3;
export const kX = $$l4;
export const q0 = $$c5;