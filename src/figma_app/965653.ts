import { PropertyScope } from "../figma_app/763686";
import { atom, createRemovableAtomFamily } from "../figma_app/27355";
import a from "../vendor/128080";
import { v4, qp, mn, jq } from "../figma_app/761118";
import { generateUUIDv4 } from "../905/871474";
import { openFileLibraryKeyAtom } from "../figma_app/516028";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { uJ } from "../figma_app/646357";
import { $p } from "../figma_app/155728";
import { V } from "../905/693394";
import { b } from "../905/857767";
import { dC, Yc } from "../905/820169";
import { uk } from "../figma_app/216057";
var s = a;
let f = setupRemovableAtomFamily(() => atom(null));
let $$E3 = setupRemovableAtomFamily(() => atom(e => e(f), (e, t, r) => {
  t(f, r);
}));
let $$y6 = setupRemovableAtomFamily(() => atom(null));
let $$b4 = setupRemovableAtomFamily(() => atom(null));
let $$T1 = atom(null);
let $$I2 = atom(!1);
let $$S7 = atom(null);
let $$v5 = createRemovableAtomFamily(e => atom(t => {
  let {
    libraryVariables
  } = t(v4);
  let i = t(qp) ? t(uk) : [];
  let {
    localVariableSets,
    libraryVariableSets
  } = t(mn);
  let c = t($p) ?? [];
  let u = {};
  i.forEach(t => {
    "LOCAL" === t.subscriptionStatus && t.resolvedType === e.type && (u[t.node_id] = t);
  });
  libraryVariables.forEach(t => {
    "LIBRARY" === t.subscriptionStatus && t.resolvedType === e.type && (u[t.node_id] = t);
  });
  let _ = {};
  c.forEach(e => {
    _[e.libraryKey] = e.name;
  });
  let h = Object.values(u).filter(t => t.resolvedType === e.type).filter(t => t.scopes.some(t => e.scopes.includes(t) || t === PropertyScope.ALL_SCOPES));
  return {
    allVariableListItems: dC({
      variables: h,
      variableSets: [...Object.values(localVariableSets), ...Object.values(libraryVariableSets)],
      styles: [],
      componentProps: [],
      layout: "list",
      fileNamesByLibraryKey: _,
      openFileLibraryKey: t(openFileLibraryKeyAtom),
      collapsedLibraryKeys: new Set(),
      slideThemeId: null
    }).reduce((e, t) => {
      switch (t.type) {
        case Yc.VARIABLES:
          let r = t.items[0];
          let n = t.variableSet;
          r && n && e.push({
            id: r.node_id,
            variable: r,
            type: "LIST",
            variableSet: n,
            isSuggestion: !1
          });
          break;
        case Yc.SEPARATOR:
          e.push({
            id: generateUUIDv4(),
            type: "LIST_SEPARATOR"
          });
          break;
        case Yc.FILE_NAME:
          e.push({
            id: generateUUIDv4(),
            type: "LIST_SECTION_HEADER",
            name: t.name
          });
          break;
        case Yc.SECTION_HEADER:
          e.push({
            id: generateUUIDv4(),
            type: "LIST_SECTION_HEADER",
            name: t.name,
            fileName: t.fileName,
            secondaryText: t.secondaryText
          });
          break;
        case Yc.HIERARCHY_PATH:
          e.push({
            id: generateUUIDv4(),
            type: "LIST_HIERARCHY_PATH",
            label: t.name
          });
      }
      return e;
    }, []),
    variableMap: u,
    localVariableSetIdToSet: localVariableSets,
    libraryVariableSetIdToSet: libraryVariableSets,
    localVariables: i,
    libraryVariables
  };
}), (e, t) => s()(e.type, t.type) && s()(e.scopes, t.scopes));
let $$A0 = atom(e => {
  let {
    subscribedStylesByFileKey,
    localStyles
  } = e(jq);
  let n = new V(!0);
  if (localStyles) {
    let {
      sortedPrefixes,
      stylesByPrefix
    } = uJ(localStyles.styles);
    n.addLibraryStyleItemsToResult(sortedPrefixes, stylesByPrefix, localStyles.fileKey, localStyles.libraryKey);
  }
  for (let [e, r] of Object.entries(subscribedStylesByFileKey)) {
    let {
      sortedPrefixes,
      stylesByPrefix
    } = uJ(r.styles);
    n.addLibraryStyleItemsToResult(sortedPrefixes, stylesByPrefix, e, r.libraryKey, r.fileName);
  }
  return function (e) {
    let t = [];
    return {
      listItems: e.reduce((e, r) => {
        switch (r.type) {
          case b.StylesRow:
            {
              let n = r.styles[0];
              if (!n) break;
              let {
                node_id
              } = n;
              e.push({
                id: node_id,
                type: "TEXT_STYLE_LIST",
                style: n,
                isSuggestion: !1
              });
              t.push(n);
              break;
            }
          case b.Separator:
            e.push({
              id: generateUUIDv4(),
              type: "LIST_SEPARATOR"
            });
            break;
          case b.LibraryName:
            e.push({
              id: generateUUIDv4(),
              type: "LIST_SECTION_HEADER",
              name: r.name
            });
            break;
          case b.HierarchyPathName:
            e.push({
              id: generateUUIDv4(),
              type: "LIST_HIERARCHY_PATH",
              label: r.name
            });
        }
        return e;
      }, []),
      allStyles: t
    };
  }(n.getResult());
});
export const Ov = $$A0;
export const Ue = $$T1;
export const aW = $$I2;
export const iO = $$E3;
export const jV = $$b4;
export const rb = $$v5;
export const rg = $$y6;
export const uw = $$S7;