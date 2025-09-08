import { throwTypeError } from "../figma_app/465776";
import { clamp } from "../figma_app/492908";
import { isNullish } from "../figma_app/95419";
import { AppStateTsApi, VariableDataType, VariableResolvedDataType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import l from "../vendor/267721";
import c from "../vendor/223926";
import { parsePxNumber } from "../figma_app/783094";
import { getI18nString } from "../905/303541";
import { pP } from "../figma_app/328825";
import { uJ } from "../figma_app/646357";
import { Pw } from "../905/782020";
import { vdd, uj0 } from "../figma_app/27776";
var d = l;
var u = c;
let $$A3 = 8;
let y = parsePxNumber(vdd);
parsePxNumber(uj0);
export var $$b4 = (e => (e.ASSET_TYPE = "ASSET_TYPE", e.SECTION_HEADER = "SECTION_HEADER", e.HIERARCHY_PATH = "HIERARCHY_PATH", e.FILE_NAME = "FILE_NAME", e.SEPARATOR = "SEPARATOR", e.VARIABLES = "VARIABLES", e.STYLES = "STYLES", e.EXPRESSION = "EXPRESSION", e.COMPONENT_PROPS = "COMPONENT_PROPS", e.CMS_FIELDS = "CMS_FIELDS", e))($$b4 || {});
export function $$v0({
  variables: e,
  variableSets: t,
  layout: i
}) {
  let n = [];
  let r = u()(e, e => e.variableSetId);
  let a = t.filter(e => r[e.node_id] && r[e.node_id].length > 0);
  a.forEach(e => {
    let t = r[e.node_id];
    a.length > 1 && n.push({
      type: "SECTION_HEADER",
      name: e.name
    });
    let s = "list" === i ? 1 : 6;
    Pw(t).forEach(({
      name: t,
      variables: i
    }) => {
      0 !== i.length && (t.length > 0 && n.push({
        type: "HIERARCHY_PATH",
        name: t.split("/").slice(0, -1).join("/")
      }), d()(i, s).forEach(t => {
        n.push({
          type: "VARIABLES",
          items: t,
          variableSet: e
        });
      }));
    });
  });
  return n;
}
function I({
  styles: e,
  layout: t
}) {
  let i = [];
  let {
    sortedPrefixes,
    stylesByPrefix
  } = uJ(e);
  sortedPrefixes.forEach(e => {
    let n = stylesByPrefix[e];
    n && 0 !== n.length && (e.length > 0 && i.push({
      type: "HIERARCHY_PATH",
      name: e
    }), d()(n, "list" === t ? 1 : 6).forEach(e => {
      i.push({
        type: "STYLES",
        items: e
      });
    }));
  });
  return i;
}
export function $$E6({
  componentProps: e
}) {
  let t = [];
  if (0 === e.length) return t;
  let i = new Map();
  e.forEach(e => {
    let t = e.value.componentName;
    i.has(t) || i.set(t, []);
    i.get(t)?.push(e);
  });
  i.forEach((e, i) => {
    t.push({
      type: "SECTION_HEADER",
      name: getI18nString("proto.variable_picker.properties", {
        componentName: i
      })
    });
    e.forEach(e => {
      t.push({
        type: "COMPONENT_PROPS",
        items: [e]
      });
    });
  });
  return t.length > 1 ? t : [];
}
export function $$x8({
  collectionName: e,
  cmsFields: t,
  fieldTypes: i
}) {
  let n = t.map(e => {
    let t;
    let n = i.find(t => t.fieldType === e.value.fieldType && !isNullish(t.disabledReason));
    switch (n?.disabledReason) {
      case pP.DISABLED_FOR_INSTANCE_SUBLAYER_IN_CMS_LIST:
        t = getI18nString("variables.binding_ui.variable_dakota_tab_name.disabled_for_instance_sublayer_in_cms_list");
        break;
      case pP.DISABLED_FOR_INSTANCE_SUBLAYER:
        t = getI18nString("variables.binding_ui.variable_dakota_tab_name.disabled_for_instance_sublayer");
    }
    return {
      type: "CMS_FIELDS",
      item: e,
      disabled: !isNullish(n),
      tooltip: t
    };
  });
  return e ? [{
    type: "SECTION_HEADER",
    name: e
  }, ...n] : n;
}
function S(e, t, i, n, r) {
  let a = [];
  let s = $$v0({
    variables: t,
    variableSets: i,
    layout: n
  });
  s.length > 0 && (a.push({
    type: "SECTION_HEADER",
    name: e,
    secondaryText: r ? getI18nString("slides.properties_panel.variable_list.current_slide") : void 0
  }), a.push(...s));
  return a;
}
export function $$w14({
  variables: e,
  variableSets: t,
  styles: i,
  layout: n,
  isLocal: r,
  slideThemeId: a
}) {
  if (r) {
    let r = function (e, t) {
      let i = {
        unthemed: [],
        themed: {}
      };
      e.forEach(e => {
        let n = t.find(t => t.node_id === e.variableSetId);
        let r = e.node_id.replace("VariableID:", "");
        let a = AppStateTsApi.slideThemeLibBindings().themeIdForAsset(r);
        n && a ? (i.themed[a] || (i.themed[a] = {
          name: n.name,
          variables: []
        }), i.themed[a].variables.push(e)) : i.unthemed.push(e);
      });
      return i;
    }(e, t);
    return function (e, t, i, n, r) {
      let a = [...$$v0({
        variables: t.unthemed,
        variableSets: e,
        layout: n
      })];
      if (r && t.themed[r]) {
        let {
          name,
          variables
        } = t.themed[r];
        a.push(...S(name, variables, e, n, !0));
        Object.keys(t.themed).length > 1 && a.push({
          type: "SEPARATOR"
        });
      }
      Object.entries(t.themed).forEach(([t, {
        name: i,
        variables: s
      }]) => {
        t !== r && a.push(...S(i, s, e, n, !1));
      });
      let s = I({
        styles: i,
        layout: n
      });
      a.length > 0 && s.length > 0 && a.push({
        type: "ASSET_TYPE",
        name: getI18nString("fullscreen.properties_panel.styles"),
        tooltip: getI18nString("fullscreen.properties_panel.styles_description")
      });
      a.push(...s);
      return a;
    }(t, r, i, n, a);
  }
  let o = [];
  let l = $$v0({
    variables: e,
    variableSets: t,
    layout: n
  });
  let d = I({
    styles: i,
    layout: n
  });
  o.push(...l);
  l.length > 0 && d.length > 0 && o.push({
    type: "ASSET_TYPE",
    name: getI18nString("fullscreen.properties_panel.styles"),
    tooltip: getI18nString("fullscreen.properties_panel.styles_description")
  });
  o.push(...d);
  return o;
}
export function $$C5({
  variables: e,
  variableSets: t,
  styles: i,
  componentProps: n,
  layout: r,
  fileNamesByLibraryKey: a,
  openFileLibraryKey: s,
  collapsedLibraryKeys: l,
  slideThemeId: d
}) {
  let {
    localVariables,
    localVariableSets,
    localStyles,
    subscribedAssetsByLibraryKey
  } = function ({
    variables: e,
    variableSets: t,
    styles: i,
    openFileLibraryKey: n
  }) {
    let r = [];
    let a = [];
    let s = [];
    let o = {};
    function l(e) {
      o[e] || (o[e] = {
        variables: [],
        variableSets: [],
        styles: []
      });
    }
    e.forEach(e => {
      "LOCAL" === e.subscriptionStatus ? r.push(e) : (l(e.library_key), o[e.library_key].variables.push(e));
    });
    t.forEach(e => {
      "LOCAL" === e.subscriptionStatus ? a.push(e) : (l(e.library_key), o[e.library_key].variableSets.push(e));
    });
    i.forEach(e => {
      e.library_key === n ? s.push(e) : (l(e.library_key), o[e.library_key].styles.push(e));
    });
    return {
      localVariables: r,
      localVariableSets: a,
      localStyles: s,
      subscribedAssetsByLibraryKey: o
    };
  }({
    variables: e,
    variableSets: t,
    styles: i,
    openFileLibraryKey: s
  });
  let g = [$$w14({
    variables: localVariables,
    variableSets: localVariableSets,
    styles: localStyles,
    layout: r,
    isLocal: !0,
    slideThemeId: d
  }), ...Object.entries(a).map(([e, t]) => {
    let i = subscribedAssetsByLibraryKey[e];
    return function ({
      variables: e,
      variableSets: t,
      styles: i,
      fileName: n,
      libraryKey: a
    }) {
      let s = $$v0({
        variables: e,
        variableSets: t,
        layout: r
      });
      let d = I({
        styles: i,
        layout: r
      });
      let c = [...s];
      if (s.length > 0 && d.length > 0 && c.push({
        type: "ASSET_TYPE",
        name: getI18nString("fullscreen.properties_panel.styles"),
        tooltip: getI18nString("fullscreen.properties_panel.styles_description")
      }), c.push(...d), c.length > 0 && n) {
        let e = {
          type: "FILE_NAME",
          name: n,
          libraryKey: a
        };
        if (getFeatureFlags().dse_collapse_variable_and_style_libraries && a && l.has(a)) return [{
          ...e,
          collapsed: !0
        }];
        let t = s.filter(e => "SECTION_HEADER" === e.type);
        return t.length ? (t.forEach(e => {
          e.fileName = n;
        }), c) : [{
          ...e,
          collapsed: !1
        }, ...c];
      }
      return c;
    }({
      variables: i?.variables ?? [],
      variableSets: i?.variableSets ?? [],
      styles: i?.styles ?? [],
      fileName: t,
      libraryKey: e
    });
  })].filter(e => e.length > 0);
  let f = g.reduce((e, t, i) => (e.push(...t), i !== g.length - 1 && e.push({
    type: "SEPARATOR"
  }), e), []);
  let _ = $$E6({
    componentProps: n
  });
  let A = [..._];
  _.length > 0 && f.length > 0 && A.push({
    type: "SECTION_HEADER",
    name: getI18nString("variables.binding_ui.set_labels.variables_created_in_file")
  });
  A.push(...f);
  return A;
}
export function $$T10(e, t) {
  return e.findIndex(e => "items" in e && e.items.some(e => $$O12(e) === t));
}
export function $$k1({
  layout: e
}) {
  switch (e) {
    case "list":
      return 2 * y + 2 * $$A3;
    case "grid":
      return 72 + 2 * $$A3;
  }
}
export function $$R15({
  layout: e,
  listHeightPx: t
}) {
  switch (e) {
    case "list":
    case "grid":
      return clamp(t, $$k1({
        layout: e
      }), 288);
  }
}
export function $$N7(e, t) {
  switch (e.type) {
    case "ASSET_TYPE":
    case "SECTION_HEADER":
    case "HIERARCHY_PATH":
    case "FILE_NAME":
      return "list" === t ? y : 32;
    case "SEPARATOR":
      return 16;
    case "VARIABLES":
    case "STYLES":
    case "EXPRESSION":
    case "COMPONENT_PROPS":
      return "list" === t ? y : 36;
    case "CMS_FIELDS":
      return y;
    default:
      throwTypeError(e);
  }
}
export function $$P13(e, t) {
  switch (e.type) {
    case "ASSET_TYPE":
    case "SECTION_HEADER":
    case "HIERARCHY_PATH":
    case "FILE_NAME":
    case "SEPARATOR":
      return [e.type, t].join("-");
    case "EXPRESSION":
      return [e.type, t, e.expressionItem.type, e.expressionItem.name].join("-");
    case "COMPONENT_PROPS":
      let i = e.items.map(e => $$D9(e));
      return [e.type, t, i.join(",")].join("-");
    case "VARIABLES":
    case "STYLES":
      let r = e.items.map(e => e.node_id);
      return [e.type, t, r.join(",")].join("-");
    case "CMS_FIELDS":
      let a = e.item.value.id;
      return [e.type, t, a].join("-");
    default:
      throwTypeError(e);
  }
}
export function $$O12(e) {
  return e ? "COMPONENT_PROP" === e.type ? $$D9(e) : "CMS_FIELD" === e.type ? e.value.id : "FILE_NAME" === e.type ? e.libraryKey : "key" in e ? e.key : "node_id" in e ? e.node_id : void 0 : void 0;
}
export function $$D9(e) {
  return JSON.stringify(e.value.stablePath) + "-" + e.value.explicitDefId;
}
export function $$L11(e) {
  switch (e.varValue.type) {
    case VariableDataType.BOOLEAN:
      return e.varValue.value;
    case VariableDataType.TEXT_DATA:
      return e.varValue.value.characters;
    case VariableDataType.STRING:
    case VariableDataType.FLOAT:
      return e.varValue.value;
    default:
      throw Error("This function doesn't support this type of component prop.");
  }
}
export function $$F2(e, t, i) {
  return e.map(e => {
    let {
      varValue
    } = e;
    let r = varValue.type;
    if ([VariableDataType.BOOLEAN, VariableDataType.FLOAT, VariableDataType.STRING, VariableDataType.TEXT_DATA].includes(r)) {
      let n = [VariableDataType.TEXT_DATA, VariableDataType.STRING].includes(r) && (t?.includes(VariableResolvedDataType.STRING) || t?.includes(VariableResolvedDataType.TEXT_DATA));
      let a = r === VariableDataType.FLOAT && t?.includes(VariableResolvedDataType.FLOAT);
      let o = (n || a) && i !== VariableResolvedDataType.BOOLEAN;
      let l = r === VariableDataType.BOOLEAN && t?.includes(VariableResolvedDataType.BOOLEAN);
      if (void 0 === t || l || o) return {
        type: "COMPONENT_PROP",
        value: e
      };
    }
  }).flatMap(e => e ? [e] : []);
}
export const HK = $$v0;
export const Ih = $$k1;
export const LV = $$F2;
export const Vc = $$A3;
export const Yc = $$b4;
export const dC = $$C5;
export const dh = $$E6;
export const jx = $$N7;
export const kE = $$x8;
export const lC = $$D9;
export const oM = $$T10;
export const sr = $$L11;
export const tx = $$O12;
export const vu = $$P13;
export const w$ = $$w14;
export const w4 = $$R15;