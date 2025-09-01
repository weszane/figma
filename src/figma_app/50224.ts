import { getComponentInfoById, cleanComponentPropNameForUsage, groupByCommonPrefixSorted, getInstanceIdsForDef, toCamelCase, IMAGE_NAME_FORMAT } from "../figma_app/664063";
import { Ed } from "../figma_app/774411";
import { xb } from "../figma_app/465776";
import { c as _$$c } from "../905/94678";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { LW } from "../figma_app/846140";
import { vR, So, Kp, PJ, Au, uN, g5 } from "../figma_app/193952";
import { CT, uG, BH, C5, S3 } from "../905/375497";
import { d as _$$d } from "../905/680937";
import { f as _$$f } from "../905/911785";
function m(e) {
  return e.classPropName ?? "className";
}
function g(e) {
  if ("INSTANCE" === e.type && e.symbolId) {
    let t = getComponentInfoById(e.symbolId, {
      enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
    });
    if (t?.jsxName) return t.jsxName;
  }
  let t = e.getSharedPluginData("jsx", "type");
  return t && "HStack" !== t && "VStack" !== t ? t : null;
}
function f(e, t) {
  let r = {};
  if (!t.skipNodeIds && (!t.skipNodeIdsWithoutType || g(e)) && (r.id = UN().developerFriendlyIdFromGuid(e.guid)), t.includeName && (r.name = e.name), t.includeType && !("INSTANCE" === e.type && !t.detachInstances)) {
    let t = g(e);
    t && (r.type = t);
  }
  if ("DEFINITION" === t.componentUsageOrDefinition && t.componentDefinitionTypeInfo) {
    let n = e.componentPropertyReferences();
    if (n && "visible" in n) {
      let e = n.visible;
      let i = t.componentDefinitionTypeInfo.parsedDefs.find(t => t.rawProp === e);
      i && (r.visible = `{${b(i.devFriendlyProp)}}`);
    }
  }
  return r;
}
let E = ["SYMBOL", "INSTANCE", "FRAME", "GROUP", "SECTION", "RECTANGLE", "ELLIPSE", "LINE"];
function y(e, t) {
  let r = f(e, t);
  r.type = e.type;
  let n = Ed(e, {
    ...LW,
    position: !0,
    size: !0
  });
  n.length && (r[m(t)] = n.join(" "));
  return `<Unhandled ${_$$d(r)} />`;
}
function b(e) {
  let t = "DERIVED_BOOLEAN" === e.type ? e.devFriendlyProp : e;
  let r = t.key;
  if ("index" in t) {
    if (!getFeatureFlags().first_draft_ts_arrays) return t.nonArrayKey;
    r += `[${t.index}]`;
  }
  return "DERIVED_BOOLEAN" === e.type ? `!!${r}` : r;
}
export function $$T1(e, t) {
  if ("INSTANCE" !== e.type) throw Error(`Expected INSTANCE, got ${e.type} for node ${e.guid}`);
  if (!e.symbolId) throw Error(`INSTANCE has no symbolId ${e.guid}`);
  let r = getComponentInfoById(e.symbolId, {
    enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
  });
  if (!r) throw Error(`Could not get typeInfo for component ${e.symbolId}`);
  let a = f(e, t);
  if (!t.skipClassNames) {
    let r = Ed(e, {
      ...LW,
      position: !0
    });
    r.length && (a[m(t)] = r.join(" "));
  }
  let o = vR(r);
  if (o && e.symbolId) {
    let t = So(e.symbolId, "SYMBOL");
    Object.assign(a, Kp(o, t));
    return `<${PJ(o)} ${_$$d(a)}/>`;
  }
  Object.assign(a, function e(t, r, i) {
    if (!t.symbolId) return {};
    let a = !!getFeatureFlags().first_draft_ts_arrays;
    let o = getComponentInfoById(t.symbolId, {
      enableTsArrays: a
    });
    if (!o) throw Error(`Could not find mainComponent for node ${t.guid}`);
    if (!UN().get(t.symbolId)) throw Error(`Could not find symbol ${t.symbolId} for node ${t.guid}`);
    let c = Au(t.guid, ["INSTANCE"]);
    let p = {};
    c.forEach(e => {
      let t = e.componentPropertyReferences();
      "mainComponent" in t && (p[t.mainComponent] = e.visible);
    });
    let _ = {};
    for (let [e, r] of Object.entries(t.componentProperties())) _[cleanComponentPropNameForUsage(e)] = r;
    let h = {};
    let m = {};
    for (let e of o.parsedDefs) {
      if ("DERIVED_BOOLEAN" === e.devFriendlyProp.type) continue;
      let n = "ARRAY" === e.devFriendlyProp.type ? e.devFriendlyProp.nonArrayKey : e.devFriendlyProp.key;
      if (n in _) {
        if ("SIMPLE" === e.devFriendlyProp.type) {
          let t = _[n].value;
          (r || e.def.defaultValue !== t) && (m[n] = t);
          continue;
        }
        if ("SIMPLE_CHOICE" === e.devFriendlyProp.type) {
          let t = e.devFriendlyProp.validOptions;
          if ("INSTANCE_SWAP" === e.def.type) {
            let e = _$$c(_[n].value);
            if (!e) throw Error("Could not find component for componentProp");
            if ("SYMBOL" === e.type) {
              let r = Object.values(e.variantProperties ?? {})[0];
              -1 !== t.indexOf(r) ? m[n] = r : console.error(`Could not find ${r} in ${JSON.stringify(t)}`);
            }
            continue;
          }
          if ("VARIANT" === e.def.type) {
            let e = _[n].value;
            -1 !== t.indexOf(e) ? m[n] = e : console.error(`Could not find ${e} in ${JSON.stringify(t)}`);
          }
        }
        if ("GROUPED_INSTANCE_SWAP" === e.def.type && i) {
          let t = _[n].value;
          if (r || e.def.defaultValue !== t) {
            let r = UN().get(t);
            if (!r) throw Error(`Could not find icon symbol ${t}`);
            if (!p[e.rawProp]) continue;
            let i = {
              description: r.name
            };
            a && "ARRAY" === e.devFriendlyProp.type ? m[e.devFriendlyProp.key] = [...(m[e.devFriendlyProp.key] ?? []), i] : m[n] = i;
          }
        }
      }
      if ("IMAGE" === e.def.type) {
        if (i) {
          m[n] = {
            id: "0"
          };
          continue;
        }
        let r = e.def.guidByParentComponentId[t.symbolId];
        if (r) {
          let e = uN(t.guid, r);
          if (e) {
            let t = UN().get(e);
            let r = t ? x(t) : null;
            r && (m[n] = {
              description: r
            });
          }
        }
      } else if ("NESTED_INSTANCE" === e.def.type) for (let t of Object.values(e.def.guidByParentComponentId)) h[t] = e;
    }
    let g = UN().developerFriendlyIdFromGuid(t.guid);
    let f = g.startsWith("I") ? `${g};` : `I${g};`;
    for (let s of g5(t.guid)) {
      let t = UN().developerFriendlyIdFromGuid(s.guid).replace(f, "").split(";");
      let o = t[0];
      if (o && 1 === t.length && s.isBubbled && s.symbolId) {
        let t = e(s, r, i);
        if (Object.keys(t).length) {
          let e = h[o];
          e && "key" in e.devFriendlyProp ? "ARRAY" === e.devFriendlyProp.type ? a ? m[e.devFriendlyProp.key] = [...(m[e.devFriendlyProp.key] ?? []), t] : m[e.devFriendlyProp.nonArrayKey] = t : m[e.devFriendlyProp.key] = t : m[cleanComponentPropNameForUsage(s.name)] = t;
        }
      }
    }
    if (a) for (let [e, t] of Object.entries(groupByCommonPrefixSorted(Object.keys(m)))) for (let r of (m[e] = t.map(e => m[e]), t)) delete m[r];
    return m;
  }(e, t.includeDefaultValues ?? !1, t.includeCustomImageAndIconProps ?? !1));
  let p = "";
  if ("DEFINITION" === t.componentUsageOrDefinition && t.componentDefinitionTypeInfo) {
    let i = e.componentPropertyReferences().mainComponent;
    let s = t.componentDefinitionTypeInfo.parsedDefs.find(r => {
      if (e.isBubbled && "NESTED_INSTANCE" === r.def.type) {
        for (let i of getInstanceIdsForDef(t.componentDefinitionTypeInfo?.componentId ?? "", r)) if (i === e.guid) return !0;
      }
      return !!i && r.rawProp === i;
    });
    if (s) {
      if ("SLOT" === s.def.type) return `{${b(s.devFriendlyProp)}}`;
      if (1 === r.parsedDefs.length) {
        let e = r.parsedDefs[0].devFriendlyProp.key;
        e in a ? a[e] = `{${b(s.devFriendlyProp)} ?? ${JSON.stringify(a[e])}}` : a[e] = `{${b(s.devFriendlyProp)}}`;
      } else p = `{...${b(s.devFriendlyProp)}}`;
    }
  }
  return `<${[r.jsxName, _$$d(a), p].filter(Boolean).join(" ")} />`;
}
export function $$I3(e, t) {
  return function (e, t = {}, r = {
    includePropsType: !1
  }, i) {
    if (!("SYMBOL" === e.type || e.isStateGroup)) throw Error(`Expected SYMBOL or isStateGroup, got: ${e.type}`);
    let s = i ?? getComponentInfoById(e.guid, {
      enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
    });
    if (!s) throw Error(`Could not find typeInfo for node: ${e.guid}`);
    let l = Object.values(s.prefixTypes);
    let c = {
      ...t,
      componentUsageOrDefinition: "DEFINITION",
      componentDefinitionTypeInfo: s
    };
    let _ = new _$$f();
    let m = s.parsedDefs.map(e => "DERIVED_BOOLEAN" === e.devFriendlyProp.type ? "" : "SIMPLE_CHOICE" === e.devFriendlyProp.type ? "VARIANT" === e.def.type && "defaultValue" in e.def ? `${e.devFriendlyProp.key} = ${JSON.stringify(e.def.defaultValue)}` : e.devFriendlyProp.key : "GROUPED_INSTANCE_SWAP" === e.devFriendlyProp.type || "IMAGE" === e.devFriendlyProp.type ? e.devFriendlyProp.key : "SIMPLE" === e.devFriendlyProp.type ? "defaultValue" in e.def ? `${e.devFriendlyProp.key} = ${JSON.stringify(e.def.defaultValue)}` : e.devFriendlyProp.key : "ARRAY" === e.devFriendlyProp.type ? getFeatureFlags().first_draft_ts_arrays ? 0 !== e.devFriendlyProp.index ? "" : e.devFriendlyProp.key : e.devFriendlyProp.nonArrayKey : void xb(e.devFriendlyProp)).filter(Boolean);
    if (r.includePropsType ? (m.length > 0 && s.propsTypeRepr.typeDefBody && (_.append(`type ${s.jsxName}Props = `), _.append(CT(s.propsTypeRepr.typeDefBody)), _.newline()), _.append(`function ${s.jsxName}(`), m.length > 0 && (_.append(`{ ${m.join(", ")} }`), _.append(`: ${s.jsxName}Props`)), _.append(") {")) : (_.append(`const ${s.jsxName}: React.FC<${s.propsTypeRepr.typeDefBody ?? "{}"}> = (`), m.length > 0 && _.append(`{${m.join(", ")}}`), _.append(") => {")), _.newline(), "SYMBOL" === e.type) {
      _.append(c.formatJSX ? uG(S(e, c)) : `  return ${S(e, c)}`);
      _.newline();
      _.append("}");
    } else if (e.isStateGroup) {
      let t = !0;
      if (getFeatureFlags().first_draft_serialize_all_variants) {
        for (let r of Au(e.guid, ["COMPONENT"])) {
          if ("SYMBOL" !== r.type) continue;
          let e = r.variantProperties();
          e && (t && c.formatJSX && _.append(BH), t || _.append(" else "), _.append("if ("), _.append(Object.entries(e).map(([e, t]) => `${toCamelCase(e)} === ${JSON.stringify(t)}`).join(" && ")), _.append(") {"), c.formatJSX ? (_.newline(), _.append(C5(uG(S(r, c)), BH)), _.newline(), _.append(`${BH}}`)) : (_.append(`    return ${S(r, c)}`), _.newline(), _.append("}")), t = !1);
        }
        c.formatJSX ? (_.newline(), _.append(`${BH}return null`)) : _.append("  return null;");
      } else {
        let t = e.defaultVariant ? e.defaultVariant : null;
        t ? _.append(c.formatJSX ? uG(S(t, c)) : `  return ${S(t, c)}`) : _.append("return null");
      }
      _.newline();
      _.append("}");
    }
    return {
      nodeId: e.guid,
      prefixTypes: c.formatJSX ? l.map(e => S3(e)) : l,
      jsxStr: _.toString()
    };
  }(e, {
    skipNodeIds: !0,
    autoLayoutTagName: "div",
    frameTagName: "div",
    tailwindOptions: {
      size: !0,
      position: !0,
      flex: !0,
      radius: !1,
      color: !1,
      typography: !1
    },
    formatJSX: !0
  }, {
    includePropsType: !0
  }, t);
}
function S(e, t) {
  if ("SYMBOL" !== e.type) throw Error(`Unexpected node type: ${e.type}`);
  return $$v0(e, {
    ...t,
    parentComponentId: e.guid,
    tailwindOptions: t.tailwindOptions ? {
      ...t.tailwindOptions,
      position: !1
    } : {
      position: !1
    }
  }) || "null";
}
export function $$v0(e, t) {
  if (!1 === e.visible) return null;
  let r = {
    indent: "",
    ...t
  };
  let a = [];
  switch (e.type) {
    case "INSTANCE":
    case "SYMBOL":
    case "SECTION":
    case "GROUP":
    case "FRAME":
      {
        if ("INSTANCE" === e.type && !r.detachInstances) {
          a.push(`${r.indent}${$$T1(e, r)}`);
          break;
        }
        if ("SYMBOL" === e.type && "DEFINITION" !== r.componentUsageOrDefinition) {
          a.push(`${r.indent}${function (e, t) {
            if ("SYMBOL" !== e.type) throw Error(`Expected SYMBOL, got ${e.type} for node ${e.guid}`);
            let r = f(e, t);
            let i = getComponentInfoById(e.guid, {
              enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
            });
            if (!i) throw Error(`Could not find typeInfo for component: ${e.guid}`);
            r.name = i.jsxName;
            "variantProperties" in e && Object.assign(r, e.variantProperties);
            return `<ComponentType ${_$$d(r)} />`;
          }(e, r)}`);
          break;
        }
        let [t, s, o] = function (e, t) {
          if (-1 === E.indexOf(e.type)) throw Error(`Unexpected parent node type ${e.type} for node ${e.guid}`);
          let r = f(e, t);
          let a = x(e);
          a && (r.description = a);
          let s = IMAGE_NAME_FORMAT.test(e.name);
          let o = e.fills.some(e => "IMAGE" === e.type);
          let l = !!a || s || o;
          let d = Ed(e, t.tailwindOptions);
          d.length && (r[m(t)] = d.join(" "));
          let c = function (e, t, r, n) {
            if (-1 === E.indexOf(e.type)) throw Error(`Unexpected parent node type ${e.type} for node ${e.guid}`);
            switch (e.type) {
              case "SYMBOL":
              case "INSTANCE":
              case "FRAME":
              case "GROUP":
                if (r) return "Image";
                return t ? n.autoLayoutTagName ?? "AutoLayout" : n.frameTagName ?? "Frame";
              case "SECTION":
                return "Section";
              default:
                return "UNKNOWN";
            }
          }(e, -1 !== d.indexOf("flex"), l, t);
          if (l && "DEFINITION" === t.componentUsageOrDefinition && t.componentDefinitionTypeInfo && t.parentComponentId) {
            let n = t.componentDefinitionTypeInfo;
            let i = t.parentComponentId;
            let a = n.parsedDefs.find(t => "IMAGE" === t.def.type && t.def.guidByParentComponentId[i] === e.guid);
            if (a) {
              let e = `{...${b(a.devFriendlyProp)}}`;
              return [`<${c} ${_$$d(r)} ${e}>`, `<${c} ${_$$d(r)} ${e} />`, `</${c}>`];
            }
          }
          return [`<${c} ${_$$d(r)}>`, `<${c} ${_$$d(r)} />`, `</${c}>`];
        }(e, r);
        let l = e.childrenNodes.map(e => $$v0(e, {
          ...r,
          tailwindOptions: {
            ...r.tailwindOptions,
            position: !0
          },
          indent: r.formatJSX ? r.indent + BH : r.indent
        }));
        if (l.length && l.some(e => e)) {
          for (let e of (a.push(`${r.indent}${t}`), l)) e && a.push(e);
          a.push(`${r.indent}${o}`);
        } else a.push(`${r.indent}${s}`);
        break;
      }
    case "TEXT":
      a.push(`${r.indent}${function (e, t) {
        if ("TEXT" !== e.type) throw Error(`Expected TEXT, got ${e.type} for node ${e.guid}`);
        let r = f(e, t);
        let a = Ed(e, t.tailwindOptions);
        if (a.length && (r[m(t)] = a.join(" ")), "DEFINITION" === t.componentUsageOrDefinition) {
          let i = e.componentPropertyReferences();
          if (i && "characters" in i) {
            let e = i.characters;
            let a = t.componentDefinitionTypeInfo && t.componentDefinitionTypeInfo.parsedDefs.find(t => t.rawProp === e);
            let s = a ? b(a.devFriendlyProp) : cleanComponentPropNameForUsage(e);
            return `<Text ${_$$d(r)}>{${s}}</Text>`;
          }
        }
        let s = e.characters && e.characters.includes('"') ? `{${JSON.stringify(e.characters)}}` : e.characters ?? "";
        return `<Text ${_$$d(r)}>${s}</Text>`;
      }(e, r)}`);
      break;
    case "RECTANGLE":
    case "ROUNDED_RECTANGLE":
    case "LINE":
    case "ELLIPSE":
      a.push(`${r.indent}${function (e, t) {
        if (!("ELLIPSE" === e.type || "RECTANGLE" === e.type || "ROUNDED_RECTANGLE" === e.type || "LINE" === e.type)) throw Error(`Unexpected standalone node type ${e.type} for node ${e.guid}. Expected ELLIPSE, RECTANGLE, or LINE`);
        let r = f(e, t);
        let n = Ed(e, t.tailwindOptions);
        switch (n.length && (r[m(t)] = n.join(" ")), e.type) {
          case "ELLIPSE":
            return `<Ellipse ${_$$d(r)}/>`;
          case "ROUNDED_RECTANGLE":
          case "RECTANGLE":
            return `<Rectangle ${_$$d(r)}/>`;
          case "LINE":
            return `<Line ${_$$d(r)}/>`;
          default:
            return y(e, t);
        }
      }(e, r)}`);
      break;
    default:
      a.push(`${r.indent}${y(e, r)}`);
  }
  return a.length > 0 ? r.formatJSX ? a.join("\n") : a.join("") : null;
}
export function $$A2({
  nodeIds: e,
  options: t
}) {
  let r = UN();
  let n = e.map(e => r.get(e)).filter(e => e && "DOCUMENT" !== e.type && "CANVAS" !== e.type);
  if (0 === n.length) return {};
  let i = n.map(e => $$v0(e, t));
  return {
    jsxStr: 1 === i.length ? i[0] : ["<Selection>", ...i, "</Selection>"].join("\n"),
    jsxDefinitionInfo: []
  };
}
function x(e) {
  return "fills" in e && e.fills.some(e => "IMAGE" === e.type) && "true" === e.getSharedPluginData("jsx", "isImage") && e.fills.find(e => "IMAGE" === e.type) && (e.getSharedPluginData("jsx", "description") || e.getSharedPluginData("jsx", "altText")) || null;
}
export const Py = $$v0;
export const RI = $$T1;
export const YJ = $$A2;
export const gZ = $$I3;