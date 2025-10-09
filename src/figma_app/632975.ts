import { useMemo } from "react";
import { VariablesBindings, VariableDataType, VariableResolvedDataType, OperationType } from "../figma_app/763686";
import { defaultSessionLocalIDString } from "../905/871411";
import { analyticsEventManager } from "../905/449184";
import { logWarning } from "../905/714362";
import { upsertSharedVariable } from "../figma_app/933328";
import { q } from "../905/113809";
import { o as _$$o } from "../905/609215";
import { getSortedLocalVariables, getSortedLocalVariableSets, getSubscribedVariablesResource } from "../figma_app/852050";
import { useOpenFileLibraryKey } from "../figma_app/516028";
import { A } from "../905/749030";
import { lC, sr, Yc, dC, HK } from "../905/820169";
import { qF } from "../905/943361";
import { useEffectiveThemeId } from "../figma_app/226737";
export function $$f14({
  highlightedItemID: e,
  variables: t,
  expressionItems: r,
  componentPropItems: n
}) {
  return e ? t.find(t => t.node_id === e) ?? n.find(t => lC(t) === e) ?? r.find(t => t.name === e) ?? null : null;
}
let $$E5 = new RegExp(/\+|-|\*|!|=|\/|&|\||>|<| /g);
let $$y33 = new RegExp(/\+|-|\*|!|=|\/|&&|\|\||>|</g);
let $$b16 = new RegExp(/\+|-|\*|\//g);
let $$T1 = new RegExp(/\+/g);
let $$I23 = new RegExp(/>|<|!/g);
let $$S24 = new RegExp(/>=|<=/g);
let $$v26 = new RegExp(/!=|==|(OR|or|Or)|>=|<=|&&|\|\|/g);
let $$A27 = new RegExp(/(AND|and|And)|(NOT|not|Not)/g);
let $$x32 = new RegExp(/"([^"]*)"/);
let $$N20 = new RegExp(/^[0-9.]*$/);
let $$C30 = new RegExp(/(AND|and|And)|(NOT|not|Not)|(OR|or|Or)|!=|==|&&|\|\|/);
let $$w21 = new RegExp(/\s*(true|false)\s*/i);
let $$O28 = new RegExp(/\(|\)/g);
export function $$R19(e) {
  return !!e && (!$$N20.test(e) || isNaN(Number(e)));
}
export function $$L22(e, t) {
  return e?.modes.find(e => e.id === t)?.name ?? "";
}
export function $$P11(e) {
  let [t, r] = e.split("$$$");
  return [t, r];
}
export function $$D15(e, t, r) {
  if (r.keepAliasId) return `${e}$$$${t}`;
  let n = r.variableIdToVariable(e);
  if (!n) return "{}";
  let i = r.variableCollectionIdToVariableCollection(n.variableSetId);
  if (!i) return "{}";
  let a = $$L22(i, t);
  return `{${n.name}$$$${a}}`;
}
export function $$k4(e) {
  let [t, r, n] = $$F9(e);
  if (!t || !r || !n) return [];
  if ("COMPONENT_PROP_ASSIGNMENTS" === r) {
    let e = $$M17(t, n);
    return e ? [t, r, n, e.varValue.resolvedType] : [];
  }
  logWarning("Invalid node field when parsing node field alias expression text", r);
  return [];
}
export function $$M17(e, t) {
  if (!e || 0 === e.length || !t) return;
  let r = VariablesBindings.getComponentPropForVariableAlias(e, t);
  if (0 !== Object.keys(r).length) return r;
}
export function $$F9(e) {
  let [t, r, n] = e.split("$$$");
  if (!t || !r || !n) return [[], "", ""];
  let [, i] = t.split("StablePathToNode:");
  let [, a] = r.split("NodeField:");
  let [, s] = n.split("IndexOrKey:");
  return i && a && s ? [JSON.parse(i), a, s] : [[], "", ""];
}
export function $$j18(e, t, r) {
  return "COMPONENT_PROP_ASSIGNMENTS" === t ? `StablePathToNode:${JSON.stringify(e)}$$$NodeField:${t}$$$IndexOrKey:${r}` : (logWarning("Invalid node field when parsing for node field alias", t), "");
}
export function $$U0(e) {
  if (e && e.varValue.type === VariableDataType.ALIAS) return VariablesBindings.getVariableResolvedValue(e.varValue.value, new Map());
  if (e && e.varValue.type === VariableDataType.NODE_FIELD_ALIAS) {
    let {
      stablePathToNode,
      indexOrKey
    } = e.varValue.value;
    let n = $$M17(stablePathToNode, indexOrKey);
    return n ? $$U0(n) : function (e) {
      switch (e.varValue.resolvedType) {
        case VariableResolvedDataType.STRING:
        case VariableResolvedDataType.TEXT_DATA:
          return {
            type: VariableDataType.STRING,
            resolvedType: VariableResolvedDataType.STRING,
            value: ""
          };
        case VariableResolvedDataType.BOOLEAN:
          return {
            type: VariableDataType.BOOLEAN,
            resolvedType: VariableResolvedDataType.BOOLEAN,
            value: !1
          };
        case VariableResolvedDataType.FLOAT:
          return {
            type: VariableDataType.FLOAT,
            resolvedType: VariableResolvedDataType.FLOAT,
            value: 0
          };
      }
    }(e);
  }
  let t = sr(e);
  switch (typeof t) {
    case "string":
      return {
        type: VariableDataType.STRING,
        resolvedType: VariableResolvedDataType.STRING,
        value: t
      };
    case "boolean":
      return {
        type: VariableDataType.BOOLEAN,
        resolvedType: VariableResolvedDataType.BOOLEAN,
        value: t
      };
    case "number":
      return {
        type: VariableDataType.FLOAT,
        resolvedType: VariableResolvedDataType.FLOAT,
        value: t
      };
  }
}
export function $$B25(e) {
  if (!e || !e.stablePathToNode || "COMPONENT_PROP_ASSIGNMENTS" !== e.nodeField || !e.indexOrKey) return;
  let t = $$M17(e.stablePathToNode, e.indexOrKey);
  if (t) return $$U0(t);
}
export function $$G7(e) {
  for (let t of e) {
    if (t.type === Yc.COMPONENT_PROPS) return lC(t.items[0]);
    if ("items" in t) return t.items[0].node_id;
    if ("expressionItem" in t) return t.expressionItem.name;
  }
  return null;
}
export function $$V3(e) {
  for (let t of e) if (t.type === Yc.COMPONENT_PROPS) return lC(t.items[0]);
  for (let t of e) if (t.type === Yc.VARIABLES) return t.items[0].node_id;
  for (let t of e) if (t.type === Yc.EXPRESSION && "LITERAL" === t.expressionItem.type) return t.expressionItem.name;
  return null;
}
export function $$H10(e) {
  return useMemo(() => e === VariableResolvedDataType.BOOLEAN ? [VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT] : e === VariableResolvedDataType.STRING ? [VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT] : [e], [e]);
}
export function $$z31(e, t, r, i) {
  let a = getSortedLocalVariables();
  let s = getSortedLocalVariableSets();
  let o = getSubscribedVariablesResource();
  let l = o.data?.libraryVariables;
  let d = o.data?.libraryVariableSets;
  let [c, f] = useMemo(() => "ALL_LIBRARIES" === r.type ? [[...a, ...(l ?? [])], [...s, ...(d ?? [])]] : "LOCAL_VARIABLES" === r.type ? [a, s] : [l ?? [], d ?? []], [r.type, a, l, s, d]);
  let E = useEffectiveThemeId();
  let y = useOpenFileLibraryKey();
  let b = A(null, null);
  let T = useMemo(() => {
    let e = {};
    b.forEach(t => {
      e[t.libraryKey] = t.fileName;
    });
    return e;
  }, [b]);
  let I = $$H10(t);
  let S = useMemo(() => c.filter(e => i?.includes(e.resolvedType) ?? I.includes(e.resolvedType)), [c, i, I]);
  let v = qF(S, e ?? "");
  return useMemo(() => null === e ? [] : e.length > 0 ? dC({
    variables: v,
    variableSets: f,
    styles: [],
    componentProps: [],
    layout: "list",
    fileNamesByLibraryKey: T,
    openFileLibraryKey: y,
    collapsedLibraryKeys: new Set(),
    slideThemeId: E
  }) : HK({
    variables: v,
    variableSets: f,
    layout: r.layout
  }), [e, v, f, T, y, r.layout, E]);
}
export async function $$W8(e, t) {
  let r = t.find(t => t.node_id === e.node_id);
  r && (await upsertSharedVariable(r));
}
export function $$K13(e) {
  let [t, r] = e.split(" %%% ");
  let [n, i] = t.split("$$$");
  return {
    variableId: n,
    modeId: i,
    resolvedType: r ? +r : null
  };
}
export function $$Y6(e, t) {
  e?.type === VariableDataType.EXPRESSION && e?.value.expressionFunction === OperationType.IS_TRUTHY && e.value.expressionArguments[0] && (e = e.value.expressionArguments[0]);
  e?.type === VariableDataType.EXPRESSION && e?.value.expressionFunction === OperationType.RESOLVE_VARIANT && e?.value.expressionArguments[0]?.type === VariableDataType.MAP && t && e.value.expressionArguments[0].value[t] && (e = e.value.expressionArguments[0].value[t]);
  e?.type === VariableDataType.EXPRESSION && e?.value.expressionFunction === OperationType.STRINGIFY && (e = e.value.expressionArguments[0]);
  return e;
}
export function $$$12(e) {
  return $$X29(e) ? {
    type: VariableDataType.STRING,
    resolvedType: VariableResolvedDataType.STRING,
    value: defaultSessionLocalIDString
  } : e === VariableResolvedDataType.BOOLEAN ? {
    type: VariableDataType.BOOLEAN,
    resolvedType: VariableResolvedDataType.BOOLEAN,
    value: !0
  } : e === VariableResolvedDataType.FLOAT ? {
    type: VariableDataType.FLOAT,
    resolvedType: VariableResolvedDataType.FLOAT,
    value: 0
  } : e === VariableResolvedDataType.JS_RUNTIME_ALIAS ? {
    type: VariableDataType.CMS_ALIAS,
    resolvedType: VariableResolvedDataType.JS_RUNTIME_ALIAS,
    value: {
      collectionId: "",
      fieldSchemaId: ""
    }
  } : null;
}
export function $$X29(e) {
  return e === VariableResolvedDataType.STRING || e === VariableResolvedDataType.TEXT_DATA;
}
export function $$q2(e, t, r, n) {
  let a = new _$$o(!0);
  let l = [];
  try {
    l = q(e);
  } catch {
    logWarning("could not tokenize expression for logging:", e);
  }
  let u = l.filter(e => "TOKEN_VARIABLE" === e.type || "TOKEN_VARIABLE_WITH_MODE" === e.type).map(e => {
    let [t, r] = $$P11(e.stringValue);
    let n = a.variableIdToVariable(t);
    return {
      collection_id: n?.variableSetId,
      variable_id: t,
      variable_type: n?.resolvedType,
      mode_id: r
    };
  });
  let p = Object.keys(VariableResolvedDataType)[Object.values(VariableResolvedDataType).indexOf(r)].toLowerCase();
  "float" !== p && "string" !== p && "boolean" !== p && (p = "invalid");
  let _ = {
    status: t,
    resolved_type: p,
    variable_data: JSON.stringify(u),
    entry: n
  };
  analyticsEventManager.trackDefinedEvent("prototype.expression_submit", _);
}
export const Cq = $$U0;
export const DE = $$T1;
export const EQ = $$q2;
export const HC = $$V3;
export const Hq = $$k4;
export const I0 = $$E5;
export const IQ = $$Y6;
export const J4 = $$G7;
export const N_ = $$W8;
export const Q6 = $$F9;
export const TL = $$H10;
export const Ub = $$P11;
export const Xx = $$$12;
export const Y_ = $$K13;
export const ZX = $$f14;
export const _z = $$D15;
export const a1 = $$b16;
export const aA = $$M17;
export const bU = $$j18;
export const d9 = $$R19;
export const dX = $$N20;
export const er = $$w21;
export const he = $$L22;
export const _$$if = $$I23;
export const kl = $$S24;
export const m9 = $$B25;
export const q2 = $$v26;
export const sO = $$A27;
export const tJ = $$O28;
export const tz = $$X29;
export const uX = $$C30;
export const wL = $$z31;
export const yZ = $$x32;
export const yy = $$y33;