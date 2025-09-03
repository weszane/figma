import { useState, useContext, useCallback } from "react";
import { Z } from "../905/829242";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import o from "../vendor/267721";
import { Ay } from "../figma_app/432652";
import { vh } from "../905/296461";
import { x as _$$x } from "../9410/392104";
import { Gs, p0, aj } from "../figma_app/949105";
import { gC } from "../9410/483857";
import { sF } from "../figma_app/193952";
import { Y5 } from "../figma_app/455680";
var l = o;
function g(e) {
  return !!("SYMBOL" === e.type || e.isStateGroup || Gs(e));
}
async function _({
  components: e,
  clientLifecycleId: t
}) {
  let i = await Promise.all(e.map(async e => {
    let t = await gC(e);
    return {
      imageB64: t.base64,
      jsx: t.jsx,
      isStateGroup: e.isStateGroup
    };
  }));
  return (await Ay.design.firstDraftSuggestProps({
    requests: i
  }, sF({
    clientLifecycleId: t
  }))).responses.map((t, i) => {
    let r = e[i];
    return t && r ? {
      component: r,
      componentName: t.componentName,
      componentDescription: t.componentDescription,
      nodeIdsToPropertyNames: t.nodeIdsToPropertyNames.reduce((e, t) => (e[t.id] = t.propertyName, e), {})
    } : null;
  });
}
function x(e) {
  let t = e.component;
  if (g(t)) {
    if (t.name = e.componentName, Gs(t)) {
      let i = {
        componentPropertyDefinitions: [],
        componentPropertyReferences: {}
      };
      for (let [t, r] of Object.entries(e.nodeIdsToPropertyNames)) {
        let e = getSingletonSceneGraph().guidFromDeveloperFriendlyId(t);
        let n = getSingletonSceneGraph().get(e);
        n && "TEXT" === n.type && (i.componentPropertyDefinitions.push({
          name: r,
          type: "TEXT"
        }), i.componentPropertyReferences[t] = {
          characters: r
        });
      }
      p0(t, i);
      aj(t, e.componentDescription);
    } else for (let i of (t.description || (t.description = e.componentDescription), Object.keys(e.nodeIdsToPropertyNames))) {
      let r = getSingletonSceneGraph().get(i);
      if (!r || "TEXT" !== r.type || r.isInstanceSublayer) continue;
      let n = t.componentPropertyDefinitions();
      let a = r.componentPropertyReferences();
      if (a?.characters) continue;
      let o = e.nodeIdsToPropertyNames[i];
      let l = function (e, t) {
        for (let i in e) if ("VARIANT" !== e[i].type) {
          let e = i.split("#");
          if (e.slice(0, e.length - 1).join("#") === t) return i;
        } else if (i === t) return i;
        return null;
      }(n, o);
      l && n[l]?.type === "TEXT" || (l = t.addComponentPropertyDefinition(o, "TEXT", r.characters, void 0));
      r.setComponentPropertyReferences({
        ...r.componentPropertyReferences(),
        characters: l
      });
    }
  }
}
export function $$y0() {
  let [e, t] = useState({
    loaded: 0,
    total: 0
  });
  let i = useContext(_$$x);
  let o = i?.getSuggestedProps;
  return {
    submit: useCallback(async (e, i, r) => {
      let d = getSingletonSceneGraph().getCurrentPage()?.childrenNodes.find(e => "SECTION" === e.type && e.name === vh);
      let u = getSingletonSceneGraph().getCurrentPage()?.childrenNodes.find(e => "SECTION" === e.type && "Atoms" === e.name);
      if (0 === (r = r ?? [...(d?.childrenNodes ?? []), ...(u?.childrenNodes ?? [])]).length) return;
      let p = r.filter(g);
      for (let r of (t({
        loaded: 1,
        total: p.length
      }), l()(p, 30))) {
        let s = await Z(o ? o(r) : _({
          components: r,
          clientLifecycleId: e
        }), i);
        if (i.aborted) return;
        l7.user("apply-suggested-props", () => {
          for (let e of s) e && x(e);
        });
        t(e => ({
          loaded: Math.min(e.loaded + r.length, e.total),
          total: e.total
        }));
      }
      Y5.commit();
    }, [o]),
    progress: e
  };
}
export function $$b1() {
  return {
    submit: useCallback(_, []),
    apply: useCallback(e => {
      x(e);
      Y5.commit();
    }, [])
  };
}
export const iK = $$y0;
export const wP = $$b1;