import { useMemo } from "react";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomWithSubscription, useSetAtom } from "../figma_app/27355";
import s from "../vendor/805353";
import { TW } from "../905/958097";
import { generateUUIDv4 } from "../905/871474";
import { getI18nString } from "../905/303541";
import { rb, Ov, uw, aW, iO, rg, jV, Ue } from "../figma_app/965653";
import { jD } from "../figma_app/407414";
var o = s;
let $$_1 = 3;
let $$h2 = 3;
let $$m4 = 1;
export function $$g0({
  selectedFixes: e,
  cachedFixes: t,
  violatingNodeId: r,
  type: s,
  scopes: o
}) {
  let {
    allVariableListItems,
    variableMap,
    localVariableSetIdToSet,
    libraryVariableSetIdToSet,
    localVariables,
    libraryVariables
  } = useAtomWithSubscription(rb({
    type: s,
    scopes: o
  }));
  let E = useMemo(() => r ? getSingletonSceneGraph().get(r) : null, [r]);
  let y = useMemo(() => function ({
    cachedFixes: e,
    variableMap: t,
    localVariableSetIdToSet: r,
    libraryVariableSetIdToSet: n
  }) {
    if (0 === e.length) return [];
    let i = [];
    for (let {
      variableId
    } of e) {
      let e = t[variableId];
      if (!e) continue;
      let s = e.variableSetId && (r[e.variableSetId] ?? n[e.variableSetId]);
      s && i.push({
        id: variableId,
        variable: e,
        type: "LIST",
        variableSet: s,
        isSuggestion: !0
      });
    }
    return i.length > 0 ? [{
      id: generateUUIDv4(),
      type: "LIST_HIERARCHY_PATH",
      label: getI18nString("design_linter.preview.suggested")
    }, ...i, {
      id: generateUUIDv4(),
      type: "LIST_SEPARATOR"
    }] : i;
  }({
    cachedFixes: t,
    variableMap,
    localVariableSetIdToSet,
    libraryVariableSetIdToSet
  }), [t, variableMap, localVariableSetIdToSet, libraryVariableSetIdToSet]);
  let b = useMemo(() => {
    if (!E) return {
      localVariables: {},
      libraryVariables: {}
    };
    try {
      return TW({
        node: E,
        resolvedType: s,
        localVariables,
        libraryVariableSetIdToSet,
        libraryVariables
      });
    } catch (e) {
      console.error("Failed to get resolved variables for node:", e);
      return {
        localVariables: {},
        libraryVariables: {}
      };
    }
  }, [E, s, localVariables, libraryVariableSetIdToSet, libraryVariables]);
  return useMemo(() => {
    if (!E) return {
      fixes: e,
      listItems: y,
      allResolvedVariables: b,
      variableMap
    };
    let t = function ({
      allVariableListItems: e,
      allResolvedVariables: t
    }) {
      let r = e.filter(e => "LIST" === e.type);
      if (0 === r.length) return [];
      let n = [];
      for (let e of r) {
        let {
          node_id
        } = e.variable;
        let i = t.libraryVariables[node_id]?.resolvedValue ?? t.localVariables[node_id]?.resolvedValue;
        i && n.push({
          variableId: node_id,
          resolvedValue: i
        });
      }
      return n;
    }({
      allVariableListItems,
      allResolvedVariables: b
    });
    return {
      fixes: 0 === e.length ? t : [...e, ...t],
      listItems: 0 === y.length ? allVariableListItems : [...y, ...allVariableListItems],
      allResolvedVariables: b,
      variableMap
    };
  }, [e, y, b, variableMap, E, allVariableListItems]);
}
export function $$f6({
  selectedStyles: e,
  cachedStyles: t
}) {
  let {
    listItems,
    allStyles
  } = useAtomWithSubscription(Ov);
  let s = useMemo(() => {
    let e = {};
    for (let t of allStyles) e[t.node_id] = t;
    return {
      styleNodeIdToStyle: e
    };
  }, [allStyles]);
  return useMemo(() => {
    let {
      styleNodeIdToStyle
    } = s;
    if (0 === t.length) return {
      listItems,
      allStyles: [...e, ...allStyles],
      styleNodeIdToStyle
    };
    let a = [];
    for (let e of t) {
      a.push({
        id: e.node_id,
        type: "TEXT_STYLE_LIST",
        style: e,
        isSuggestion: !0
      });
      styleNodeIdToStyle[e.node_id] = e;
    }
    return {
      listItems: [{
        id: generateUUIDv4(),
        type: "LIST_HIERARCHY_PATH",
        label: getI18nString("design_linter.preview.suggested")
      }, ...a, {
        id: generateUUIDv4(),
        type: "LIST_SEPARATOR"
      }, ...listItems],
      allStyles: 0 === e.length ? allStyles : [...e, ...allStyles],
      styleNodeIdToStyle
    };
  }, [e, t, listItems, allStyles, s]);
}
export function $$E3(e, t) {
  return useMemo(() => {
    if ("" === t) return e;
    let r = t.toLowerCase();
    let n = [];
    let i = null;
    let a = null;
    e.forEach(e => {
      "LIST_SECTION_HEADER" === e.type ? i = e : "LIST_HIERARCHY_PATH" === e.type ? a = e : ("LIST" === e.type || "TEXT_STYLE_LIST" === e.type) && ("LIST" === e.type && !e.isSuggestion && e.variable.name.toLowerCase().includes(r) || "TEXT_STYLE_LIST" === e.type && !e.isSuggestion && (e.style.name.toLowerCase().includes(r) || e.style.description?.toLowerCase().includes(r))) && (i && (n.push(i), i = null), a && (n.push(a), a = null), n.push(e));
    });
    return n;
  }, [e, t]);
}
export function $$y5() {
  let e = useSetAtom(uw);
  let t = useSetAtom(aW);
  let r = useSetAtom(iO);
  let i = useSetAtom(rg);
  let s = useSetAtom(jV);
  let l = useSetAtom(Ue);
  return useMemo(() => o()(() => {
    jD();
    e(null);
    t(!1);
    r(null);
    i(null);
    s(null);
    l(null);
  }, 100), [e, t, r, i, s, l]);
}
export const Dt = $$g0;
export const EN = $$_1;
export const OL = $$h2;
export const bV = $$E3;
export const lz = $$m4;
export const sf = $$y5;
export const td = $$f6;