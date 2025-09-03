import { UN } from "../905/700578";
import { c as _$$c } from "../905/94678";
import { throwTypeError } from "../figma_app/465776";
import { J, O as _$$O } from "../905/223510";
import { ep, GN, Hd, L_, rB, j3, WG, _j, _e, go, fy, R0, Vv, O7, QJ, hM, xb as _$$xb, Ho, bi } from "../905/581923";
import { C as _$$C, $x, vR, VV, yu, Se, vh, iR } from "../905/926939";
import { lKz, XJn, Egt } from "../figma_app/763686";
import { k4, Uk } from "../905/327738";
let u = "CustomImage";
let $$p3 = `\
type ${u} = {
  // always use the string "0"
  id: string
};`;
let $$m0 = {
  typeName: "string"
};
let $$h7 = {
  typeName: "boolean"
};
let g = {
  typeName: "React.ReactNode"
};
let $$f6 = {
  typeName: u,
  referencedTypes: [{
    type: "IMAGE"
  }]
};
function _({
  component: e,
  parsedDefs: t
}, i) {
  let n = [];
  let r = [];
  for (let e of ep(t, i)) {
    e.typeRepr.referencedTypes && r.push(...e.typeRepr.referencedTypes);
    let t = GN(e, void 0, i);
    let a = Hd(e, i);
    t && a && n.push(`${t}: ${a}`);
  }
  return {
    typeName: L_(e.name),
    typeDefBody: `{${n.join("; ")}}`,
    prefixComments: function (e, t) {
      let i = [];
      for (let n of ep(e, t)) {
        let r = n.devFriendlyProp;
        if ("ARRAY" === r.type && t.enableTsArrays) {
          let t = 0;
          let n = 0;
          for (let i of e) "ARRAY" === i.devFriendlyProp.type && i.devFriendlyProp.key === r.key && (t++, !i.isOptional && n++);
          t === n ? i.push(`@param ${r.key} - Specify ${t} items`) : i.push(`@param ${r.key} - Specify between ${n} and ${t} items`);
        }
      }
      return i;
    }(t, i),
    referencedTypes: r
  };
}
function A({
  component: e,
  rawProp: t,
  seenNestedVariant: i
}, n) {
  let r = $$I1(e, n, i);
  let a = r.propsTypeRepr.typeName;
  let {
    omit,
    pick
  } = rB(t);
  if (r.parsedDefs.length > 5 && pick && pick.length <= 2) return {
    typeName: _({
      component: e,
      parsedDefs: ep(r.parsedDefs, n).filter(e => !(omit && omit.includes(j3(e.rawProp))) && (!pick || !!pick.includes(j3(e.rawProp))))
    }, n).typeDefBody ?? "{}",
    referencedTypes: [{
      type: "COMPONENT_INLINED",
      componentId: r.componentId
    }]
  };
  if (omit) {
    let e = [];
    for (let t of ep(r.parsedDefs, n)) "key" in t.devFriendlyProp && omit.includes(j3(t.rawProp)) && e.push(t.devFriendlyProp.key);
    let t = e.map(e => `"${e}"`).join(" | ");
    a = `Omit<${a}, ${t}>`;
  }
  if (pick) {
    let e = [];
    for (let t of ep(r.parsedDefs, n)) "key" in t.devFriendlyProp && pick.includes(j3(t.rawProp)) && e.push(t.devFriendlyProp.key);
    let t = e.map(e => `"${e}"`).join(" | ");
    a = `Pick<${a}, ${t}>`;
  }
  return {
    typeName: a,
    referencedTypes: [{
      type: "COMPONENT",
      componentId: r.componentId
    }]
  };
}
let y = {};
let b = {};
export function $$v2() {
  y = {};
  b = {};
}
export function $$I1(e, t, i) {
  try {
    if (!y[(e = e.isState ? e.parentNode : e).guid] || t.noTypeInfoCache) {
      let n = E(e, t, i);
      y[e.guid] = n;
      b[n.key] = n;
    }
    return y[e.guid];
  } catch (e) {
    throw e;
  }
}
function E(e, t, i) {
  let r = WG(e.name);
  let u = function (e, t, i) {
    let r = function (e, t) {
      let i = e.componentPropertyDefinitions(lKz.YES);
      let r = Object.keys(i);
      r.reverse();
      let a = [];
      for (let e of r) {
        let r = i[e];
        if ("INSTANCE_SWAP" === r.type) {
          let i = UN().get(r.defaultValue);
          if (i && "SYMBOL" === i.type) {
            if ("Slot" === i.name) {
              a.push({
                rawProp: e,
                def: {
                  type: "SLOT"
                }
              });
              continue;
            }
            if (i.isSubscribedAsset) {
              a.push({
                rawProp: e,
                def: {
                  type: "GROUPED_INSTANCE_SWAP",
                  defaultValue: i.guid,
                  groupName: i.isIconLikeContainer ? _$$C : $x
                }
              });
              continue;
            }
            {
              let n = $$I1(i, t);
              let r = vR(n);
              if (r) {
                a.push({
                  rawProp: e,
                  def: {
                    type: "GROUPED_INSTANCE_SWAP",
                    defaultValue: i.guid,
                    groupName: r
                  }
                });
                continue;
              }
            }
          }
        }
        a.push({
          rawProp: e,
          def: r
        });
      }
      let s = _j(e);
      for (let [e, t] of Object.entries(_e(s, "IMAGE"))) {
        let i = {};
        for (let [e, n] of Object.entries(t.tagsByParentComponentId)) {
          i[e] = {
            background: "normal"
          };
          "true" === n.transparent && (i[e].background = "transparent");
          "true" === n.segment && (i[e].background = "segment");
          n.desc && (i[e].desc = n.desc);
          n.prompt && (i[e].prompt = n.prompt);
        }
        a.push({
          rawProp: e,
          def: {
            type: "IMAGE",
            guidByParentComponentId: t.guidByParentComponentId,
            tagsByParentComponentId: i
          }
        });
      }
      let u = k4(e.guid).filter(e => !(e.isInstanceSublayer || !e.isBubbled && !t.exposeAllNestedInstances || e.componentPropertyReferences()?.mainComponent && !t.bubbleInstanceSwapProps));
      for (let [e, i] of Object.entries(_e(u, "NESTED_INSTANCE"))) {
        let r = i.componentIdOrNull;
        if (!r) continue;
        let s = {};
        for (let [e, a] of Object.entries(i.tagsByParentComponentId)) {
          s[e] = {};
          let i = {};
          if (a.fixed) {
            let o = UN().get(r);
            if (o) {
              let n = $$I1(o, t);
              let r = a.fixed?.split(",").map(e => e.trim()) ?? [];
              for (let e of n.parsedDefs) if ("key" in e.devFriendlyProp && "VARIANT" === e.def.type) {
                let t = e.devFriendlyProp.key;
                ("true" === a.fixed || r.includes(t)) && (i[t] = !0);
              }
              s[e].fixedVariantProperties = i;
            }
          }
        }
        let o = {
          type: "NESTED_INSTANCE",
          componentId: r,
          tagsByParentComponentId: s,
          guidByParentComponentId: i.guidByParentComponentId
        };
        a.push({
          rawProp: e,
          def: o
        });
      }
      let p = {};
      for (let e of a) {
        if (p[e.rawProp]) {
          console.error("Unexpected repeated rawProp value", {
            rawProp: e.rawProp
          });
          continue;
        }
        p[e.rawProp] = e;
      }
      return p;
    }(e, t);
    for (let e of go(r)) for (let t = 0; t < e.length; t++) {
      let i = e[t];
      i.usagePropOverride = fy({
        index: t,
        rawProp: i.rawProp
      });
    }
    let s = {};
    let u = {};
    let p = {};
    let _ = {};
    let y = new Set();
    let v = i ?? new Map();
    for (let [i, c] of Object.entries(r)) {
      let r = j3(c.usagePropOverride ?? i);
      y.has(r) && (r = R0({
        usageProp: r,
        usedUsageProps: y
      }));
      let I = c.def;
      if ("NESTED_INSTANCE" === I.type && (v.get(I.componentId) ?? 0) >= 25) continue;
      if (e.isStateGroup && "NESTED_INSTANCE" === I.type) {
        let t = v.get(e.guid) ?? 0;
        v.set(e.guid, t + 1);
      }
      let E = function ({
        component: e,
        rawProp: t,
        definition: i,
        seenNestedVariant: r
      }, s) {
        switch (i.type) {
          case "TEXT":
            return $$m0;
          case "BOOLEAN":
            return $$h7;
          case "NUMBER":
            break;
          case "SLOT":
            return g;
          case "IMAGE":
            return $$f6;
          case "VARIANT":
            return {
              typeName: i.variantOptions?.map(e => `"${e}"`).join(" | ") ?? "null"
            };
          case "GROUPED_INSTANCE_SWAP":
            return {
              typeName: VV(i.groupName),
              typeDefBody: "{description: string}",
              prefixComments: ["@param description - Specify a 1 sentence description"]
            };
          case "INSTANCE_SWAP":
            {
              if (i.preferredValues && 0 !== i.preferredValues.length && i.preferredValues.length < 10) {
                let n = Vv({
                  component: e,
                  rawProp: t
                });
                let r = [];
                let a = [];
                for (let e of i.preferredValues) {
                  let t = function (e, t) {
                    if (b[e] && !t.noTypeInfoCache) return b[e];
                    let i = XJn.getComponentByAssetKey(e) || XJn.getStateGroupByAssetKey(e);
                    return i ? $$S4(i, t) : null;
                  }(e.key, s);
                  t && (r.push(t.jsxName), a.push({
                    type: "COMPONENT_JSX",
                    componentId: t.componentId
                  }));
                }
                if (0 !== r.length) return {
                  typeName: n,
                  typeDefBody: `ReactElement<any, ${r.join(" | ")}>`,
                  referencedTypes: a
                };
              }
              let a = UN().get(i.defaultValue);
              if (a && "SYMBOL" === a.type) return A({
                component: a,
                rawProp: t,
                seenNestedVariant: r
              }, s);
              break;
            }
          case "NESTED_INSTANCE":
            {
              let e = i.componentId;
              let a = UN().get(e);
              if (a && ("SYMBOL" === a.type || a.isStateGroup)) return A({
                component: a,
                rawProp: t,
                seenNestedVariant: r
              }, s);
              break;
            }
          default:
            throwTypeError(i);
        }
        return null;
      }({
        component: e,
        rawProp: i,
        definition: I,
        seenNestedVariant: v
      }, t);
      if (E) {
        y.add(r);
        p[i] = r;
        let e = E.typeName;
        _[e] = _[e] || [];
        _[e].push(r);
        let t = {
          def: I,
          devFriendlyProp: function ({
            usageProp: e,
            rawProp: t,
            definition: i
          }) {
            let r = {
              key: e
            };
            let s = j3(t);
            switch (s !== e && (r.originalKey = s), i.type) {
              case "VARIANT":
                return {
                  type: "SIMPLE_CHOICE",
                  validOptions: i.variantOptions ?? [],
                  valueType: "STRING",
                  ...r
                };
              case "INSTANCE_SWAP":
              case "NESTED_INSTANCE":
              case "SLOT":
                return {
                  type: "SIMPLE",
                  valueType: "OBJECT",
                  ...r
                };
              case "BOOLEAN":
                return {
                  type: "SIMPLE",
                  valueType: "BOOLEAN",
                  ...r
                };
              case "TEXT":
                return {
                  type: "SIMPLE",
                  valueType: "STRING",
                  ...r
                };
              case "NUMBER":
                return {
                  type: "SIMPLE",
                  valueType: "UNKNOWN",
                  ...r
                };
              case "IMAGE":
                return {
                  type: "IMAGE",
                  valueType: "OBJECT",
                  ...r
                };
              case "GROUPED_INSTANCE_SWAP":
                {
                  let e = UN().get(i.defaultValue);
                  if (!e || "SYMBOL" !== e.type) return {
                    type: "SIMPLE",
                    valueType: "UNKNOWN",
                    ...r
                  };
                  return {
                    type: "GROUPED_INSTANCE_SWAP",
                    groupName: i.groupName,
                    valueType: "OBJECT",
                    ...r
                  };
                }
              default:
                throwTypeError(i);
            }
          }({
            usageProp: r,
            rawProp: i,
            definition: I
          }),
          componentId: O7(I),
          isOptional: QJ(i),
          rawProp: i,
          typeRepr: E
        };
        u[i] = t;
        s[r] = t;
      }
    }
    for (let e of Object.values(_)) for (let [t, i] of Object.entries(hM(e))) if (_$$xb(i.map(e => s[e]))) for (let e = 0; e < i.length; e++) {
      let n = i[e];
      let r = s[n].devFriendlyProp;
      let a = {
        type: "ARRAY",
        key: t,
        index: e,
        nonArrayKey: "key" in r ? r.key : "",
        valueType: r.valueType
      };
      "originalKey" in r && (a.originalKey = r.originalKey);
      s[n].devFriendlyProp = a;
    }
    let E = Object.keys(s);
    let x = [];
    let w = {};
    for (let e of E) {
      let t = s[e].devFriendlyProp;
      if ("DERIVED_BOOLEAN" !== t.type) switch (t.type) {
        case "SIMPLE":
        case "SIMPLE_CHOICE":
        case "IMAGE":
        case "GROUPED_INSTANCE_SWAP":
          w[e] = t;
          break;
        case "ARRAY":
          w[e] = t;
          w[t.key] = {
            type: "SIMPLE",
            key: t.key,
            valueType: t.valueType
          };
          break;
        default:
          throwTypeError(t);
      }
    }
    for (let e of E) {
      let t = s[e];
      if ("SIMPLE" === t.devFriendlyProp.type) {
        let i = "Visible";
        if (e.endsWith(i)) {
          let n = e.slice(0, -i.length);
          n && w[n] && (t.devFriendlyProp = {
            type: "DERIVED_BOOLEAN",
            valueType: "BOOLEAN",
            devFriendlyProp: w[n]
          });
        }
      }
      x.push(t);
    }
    return x.sort(Ho);
  }(e, t, i);
  let y = _({
    component: e,
    parsedDefs: u
  }, t);
  let v = `type ${r} = React.FC<${y.typeDefBody ?? "{}"}>`;
  let E = yu(e.guid);
  let w = Se(E, vh);
  let C = iR(E);
  let T = e.isIconLikeContainer;
  let k = w ? J.BUILDING_BLOCK : C ? J.GROUPED_COMPONENT : T ? J.GROUPED_COMPONENT : J.NONE;
  let R = w ? vh : C ?? (T ? "Icon" : "");
  let N = Uk(e);
  let P = "SYMBOL" === e.type ? e.guid : e.defaultVariant?.guid ?? "";
  let O = k === J.GROUPED_COMPONENT ? Egt.getAssetKeyForPublish(P) : Egt.getAssetKeyForPublish(e.guid);
  let D = e.componentPropertyDefinitions(lKz.YES);
  return {
    componentId: e.guid,
    name: e.name,
    defaultNodeId: P,
    jsxName: r,
    componentGroupPath: E,
    groupName: R,
    componentType: k,
    defs: D,
    parsedDefs: u,
    prefixTypes: function (e, t) {
      let i = {};
      let r = (e, t) => {
        e in i && (e = R0({
          usageProp: e,
          usedUsageProps: new Set(Object.keys(i))
        }));
        i[e] = t;
      };
      for (let i of ep(e, t)) {
        let e = i.devFriendlyProp;
        if ("DERIVED_BOOLEAN" === e.type || "ARRAY" === e.type && 0 !== e.index) continue;
        !function (e, t, i, r) {
          if (t.referencedTypes) for (let s of t.referencedTypes) switch (s.type) {
            case "IMAGE":
              i(e, $$p3);
              break;
            case "COMPONENT_JSX":
              {
                let t = UN().get(s.componentId);
                if (t) {
                  let n = $$I1(t, r);
                  for (let [t, r] of Object.entries(n.prefixTypes)) i(`${e}${bi(t)}`, r);
                  i(e, n.typeStr);
                }
                break;
              }
            case "COMPONENT_INLINED":
            case "COMPONENT":
              {
                let t = UN().get(s.componentId);
                if (t) {
                  let n = $$I1(t, r);
                  for (let [t, r] of Object.entries(n.prefixTypes)) i(`${e}${bi(t)}`, r);
                  if ("COMPONENT" === s.type) {
                    let t = x(n.propsTypeRepr);
                    t && i(e, t);
                  }
                }
                break;
              }
            default:
              throwTypeError(s);
          }
        }(e.key, i.typeRepr, r, t);
        let s = x(i.typeRepr);
        if (s) {
          r(e.key, s);
          continue;
        }
      }
      return i;
    }(u, t),
    prefixComments: y.prefixComments ?? [],
    typeStr: v,
    propsTypeRepr: y,
    description: e.description,
    key: O,
    version: N,
    typeInfoVersion: _$$O
  };
}
function x(e) {
  let t = [];
  if (e.typeDefBody) {
    if (e.prefixComments?.length) {
      for (let i of (t.push("/**"), e.prefixComments)) t.push(` * ${i}`);
      t.push(" */");
    }
    t.push(`type ${e.typeName} = ${e.typeDefBody};`);
    return t.join("\n");
  }
  return null;
}
export function $$S4(e, t) {
  let i = _$$c(e);
  return i ? i.isState ? $$I1(i.parentNode, t) : $$I1(i, t) : null;
}
export function $$w5(e, t) {
  let i = _$$c(e);
  return i ? i.isState ? E(i.parentNode, t) : E(i, t) : null;
}
export const NU = $$m0;
export const NY = $$I1;
export const UY = $$v2;
export const Vk = $$p3;
export const Ye = $$S4;
export const Z1 = $$w5;
export const dX = $$f6;
export const oo = $$h7;