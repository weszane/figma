import { c as _$$c } from "../905/94678";
import { Ye } from "../905/75000";
import { throwTypeError } from "../figma_app/465776";
import { id } from "../905/648693";
import { Lq } from "../905/926939";
import { wn } from "../905/581923";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
function c(e, t) {
  if ("string" == typeof e && 1 === t.parsedDefs.length) {
    let i = t.parsedDefs[0].devFriendlyProp;
    if ("key" in i) return {
      [i.key]: e
    };
  }
  return e;
}
function u(e, t) {
  if ("object" == typeof e) {
    if (t in e) return e[t];
    for (let [i, n] of Object.entries(e)) if (i.toLowerCase() === t.toLowerCase()) return n;
  }
}
export const A = function e(t, i, p, m) {
  let h = {
    componentProps: {},
    componentPropsNested: {},
    nestedInstancesVisibility: {},
    sharedPluginData: {
      ...t?.sharedPluginData
    }
  };
  let g = {};
  for (let _ of i.parsedDefs) {
    let A = function e(t, i) {
      let n;
      if ("object" == typeof t) {
        switch (i.type) {
          case "SIMPLE":
          case "IMAGE":
          case "GROUPED_INSTANCE_SWAP":
            t && (n = u(t, i.key));
            break;
          case "SIMPLE_CHOICE":
            if (t && i.key in t) {
              let e = u(t, i.key);
              i.validOptions.includes(e) && (n = e);
            }
            break;
          case "DERIVED_BOOLEAN":
            n = !!e(t, i.devFriendlyProp);
            break;
          case "ARRAY":
            if (t) {
              let e = u(t, i.key);
              Array.isArray(e) && (n = e[i.index]);
              void 0 === n && (n = u(t, i.nonArrayKey));
              void 0 === n && 0 === i.index && i.originalKey && (n = u(t, i.originalKey));
            }
            break;
          default:
            throwTypeError(i);
        }
        if (void 0 === n) return n;
        switch (i.valueType) {
          case "BOOLEAN":
            if ("boolean" == typeof n) break;
            return;
          case "STRING":
            if ("string" == typeof n || "object" == typeof n && n?.type === "JSXExpressionContainer") break;
            return;
        }
        return n;
      }
    }(t, _.devFriendlyProp);
    let y = void 0 === A;
    if ("ARRAY" === _.devFriendlyProp.type || "GROUPED_INSTANCE_SWAP" === _.def.type || "NESTED_INSTANCE" === _.def.type && _.isOptional) for (let e of wn(i.componentId, _, m)) h.nestedInstancesVisibility[e] = !y;
    if (!y) switch (_.def.type) {
      case "NESTED_INSTANCE":
        {
          let t = Ye(_.def.componentId, m);
          if (t) {
            if (A = c(A, t), "ARRAY" === _.devFriendlyProp.type) {
              let e = _.devFriendlyProp.key;
              if (0 === _.devFriendlyProp.index) {
                g[e] = {};
                let t = new Set();
                for (let e of Object.values(_.def.tagsByParentComponentId)) for (let i of Object.keys(e.fixedVariantProperties ?? {})) t.add(i);
                for (let i of t) g[e][i] = u(A, i);
              } else A = {
                ...A,
                ...g[e]
              };
            }
            let n = e(A, t, p, m);
            for (let e of wn(i.componentId, _, m)) h.componentPropsNested[e] = n;
          }
          break;
        }
      case "BOOLEAN":
      case "VARIANT":
      case "TEXT":
        h.componentProps[_.rawProp] = A;
        break;
      case "NUMBER":
      case "SLOT":
        break;
      case "INSTANCE_SWAP":
        {
          var f;
          if ("string" == typeof (f = A) && isValidSessionLocalID(parseSessionLocalID(f))) {
            h.componentProps[_.rawProp] = A;
            break;
          }
          if (id(A)) {
            let t = p(A.type);
            if (t) {
              let n = t.defaultNodeId;
              let r = e({
                ...A.props,
                children: A.children
              }, t, p, m);
              for (let e of wn(i.componentId, _, m)) {
                h.componentProps[_.rawProp] = n;
                h.componentPropsNested[e] = r;
              }
              break;
            }
          }
          let t = _$$c(_.def.defaultValue);
          let a = Ye(_.def.defaultValue, {
            enableTsArrays: !1
          });
          if (t && a) {
            let n = c(A, a);
            let r = [];
            if (t.parentNode?.isStateGroup) {
              for (let e of t.parentNode.reversedChildrenNodes) if ("SYMBOL" === e.type) {
                let t = e.variantProperties();
                if (t && Object.entries(t).some(([e, t]) => n[e] === t) && Object.entries(t).every(([e, t]) => !(e in n) || n[e] === t)) {
                  r = Object.keys(t);
                  h.componentProps[_.rawProp] = e.guid;
                  break;
                }
              }
            }
            if ("object" == typeof n) {
              let t = Object.fromEntries(Object.entries(n).filter(([e, t]) => !r.includes(e)));
              if (0 !== Object.keys(t).length) {
                let n = e(t, a, p, m);
                for (let e of wn(i.componentId, _, m)) h.componentPropsNested[e] = n;
              }
            } else "string" == typeof n && (h.componentProps[_.rawProp] = n);
          }
          break;
        }
      case "GROUPED_INSTANCE_SWAP":
        {
          let e = _$$c(_.def.defaultValue);
          if (e && "SYMBOL" === e.type) {
            let t = !1;
            let i = "object" == typeof A ? A?.type ?? A?.description : "";
            if (i) {
              let n = Lq(_.def.groupName, e, i);
              if (n) {
                t = !0;
                h.componentProps[_.rawProp] = n;
                break;
              }
            }
            if (!t) {
              let e = A?.description ?? A?.type ?? "";
              e && (h.sharedPluginData[_.rawProp] = e);
            }
          }
          break;
        }
      case "IMAGE":
        h.sharedPluginData[_.rawProp] = A?.id ?? A?.description ?? A?.alt ?? "";
        break;
      default:
        throwTypeError(_.def);
    }
  }
  return h;
};