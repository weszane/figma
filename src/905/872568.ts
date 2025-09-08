import { getSingletonSceneGraph } from "../905/700578";
import { A } from "../905/970762";
import { Ye } from "../905/75000";
import { j3, hM } from "../905/581923";
import { Au } from "../905/327738";
import { Confirmation } from "../figma_app/763686";
import { c as _$$c } from "../905/94678";
export function $$c0(e, t, i, n = {}) {
  let s = Ye(t, {
    enableTsArrays: !1,
    exposeAllNestedInstances: n.exposeAllNestedInstances,
    bubbleInstanceSwapProps: !0
  });
  if (!s) throw Error(`Could not get typeInfo for component ${t}`);
  return A(e, s, i, {
    enableTsArrays: !1,
    exposeAllNestedInstances: n.exposeAllNestedInstances,
    bubbleInstanceSwapProps: !0
  });
}
export const R = $$c0;
export const Y = function e(t, i) {
  let r = getSingletonSceneGraph();
  if ("INSTANCE" !== t.type || !t.symbolId) throw Error(`Expected INSTANCE, got ${t.type} for node ${t.guid}`);
  let c = Ye(t.symbolId, {
    enableTsArrays: i.enableTsArrays,
    noTypeInfoCache: i.noTypeInfoCache,
    bubbleInstanceSwapProps: i.bubbleInstanceSwapProps,
    exposeAllNestedInstances: i.exposeAllNestedInstances
  });
  if (!c) throw Error(`Could not get typeInfo for component ${t.symbolId}`);
  let u = Au(t.guid, {
    types: ["INSTANCE"]
  });
  let p = {};
  u.forEach(e => {
    let t = e.componentPropertyReferences();
    "mainComponent" in t && (p[t.mainComponent] = e.visible);
  });
  let m = {};
  for (let [e, i] of Object.entries(t.componentProperties(Confirmation.YES))) m[j3(e)] = i;
  let h = {};
  function g({
    devFriendlyProp: e,
    value: t,
    defaultValue: n,
    componentProp: r
  }) {
    if (i.includeDefaultValues || void 0 === n || t !== n) {
      if ("ARRAY" === e.type) {
        if (i.enableTsArrays) {
          let i = h[e.key];
          let n = Array.isArray(i) ? i : [];
          h[e.key] = [...n, t];
        } else h[e.nonArrayKey] = t;
      } else i.includeVariables && r?.boundVariables?.value ? h[e.key] = r.boundVariables.value : h[e.key] = t;
    }
  }
  for (let n of c.parsedDefs) {
    var f;
    if ("DERIVED_BOOLEAN" === n.devFriendlyProp.type) continue;
    let a = "ARRAY" === (f = n.devFriendlyProp).type ? f.nonArrayKey : f.key;
    let s = m[a];
    let o = "SIMPLE_CHOICE" === n.devFriendlyProp.type ? n.devFriendlyProp.validOptions : void 0;
    switch (n.def.type) {
      case "BOOLEAN":
      case "TEXT":
      case "NUMBER":
        if (!s) continue;
        g({
          devFriendlyProp: n.devFriendlyProp,
          value: s.value,
          defaultValue: n.def.defaultValue,
          componentProp: s
        });
        break;
      case "INSTANCE_SWAP":
        if (!s) continue;
        if (o && "SIMPLE_CHOICE" === n.devFriendlyProp.type) {
          let e = _$$c(s.value);
          if (!e) throw Error("Could not find component for componentProp");
          if ("SYMBOL" === e.type) {
            let t = Object.values(e.variantProperties ?? {})[0];
            -1 !== o.indexOf(t) ? g({
              devFriendlyProp: n.devFriendlyProp,
              value: t
            }) : console.error(`Could not find ${t} in ${JSON.stringify(o)}`);
          }
        } else g({
          devFriendlyProp: n.devFriendlyProp,
          value: s.value,
          defaultValue: n.def.defaultValue
        });
        break;
      case "VARIANT":
        if (!s) continue;
        if (o && "SIMPLE_CHOICE" === n.devFriendlyProp.type) {
          let e = s.value;
          -1 !== o.indexOf(e) ? g({
            devFriendlyProp: n.devFriendlyProp,
            value: s.value
          }) : console.error(`Could not find ${e} in ${JSON.stringify(o)}`);
        } else g({
          devFriendlyProp: n.devFriendlyProp,
          value: s.value,
          defaultValue: n.def.defaultValue
        });
        break;
      case "GROUPED_INSTANCE_SWAP":
        if (!s || !i.includeCustomImageAndIconProps) continue;
        let l = m[a].value;
        if (i.includeDefaultValues || n.def.defaultValue !== l) {
          let e = r.get(l);
          if (!e) throw Error(`Could not find icon symbol ${l}`);
          if (!p[n.rawProp]) continue;
          let t = {
            description: e.name
          };
          g({
            devFriendlyProp: n.devFriendlyProp,
            value: t
          });
        }
        break;
      case "IMAGE":
        if (i.includeCustomImageAndIconProps) {
          let e = {
            id: "0"
          };
          g({
            devFriendlyProp: n.devFriendlyProp,
            value: e
          });
          continue;
        }
        let c = n.def.guidByParentComponentId[t.symbolId];
        if (c) {
          let e = r.get(c);
          let i = e?.getSublayerIdForInstanceOfSymbol(t.guid);
          if (i) {
            let e = r.get(i);
            let t = e && "fills" in e && e.fills.some(e => "IMAGE" === e.type) && "true" === e.getSharedPluginData("jsx", "isImage") && e.fills.find(e => "IMAGE" === e.type) && (e.getSharedPluginData("jsx", "description") || e.getSharedPluginData("jsx", "altText")) || null;
            t && g({
              devFriendlyProp: n.devFriendlyProp,
              value: {
                description: t
              }
            });
          }
        }
        break;
      case "NESTED_INSTANCE":
        let u = n.def.guidByParentComponentId[t.symbolId];
        if (!u) continue;
        let h = r.developerFriendlyIdFromGuid(t.guid);
        let _ = h.startsWith("I") ? `${h};` : `I${h};`;
        let A = `${_}${u}`;
        let y = r.guidFromDeveloperFriendlyId(A);
        let b = r.get(y);
        if (b) {
          let t = e(b, i);
          Object.keys(t).length > 0 && g({
            devFriendlyProp: n.devFriendlyProp,
            value: t
          });
        }
    }
  }
  if (i.enableTsArrays) for (let [e, t] of Object.entries(hM(Object.keys(h)))) for (let i of (h[e] = t.map(e => h[e]), t)) delete h[i];
  return h;
};