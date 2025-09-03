import { lV } from "../figma_app/617606";
import { kv } from "../figma_app/735943";
import { mJ, RM } from "../figma_app/304955";
import { glU, mSn } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { Y5 } from "../figma_app/455680";
import { O } from "../905/273186";
export function $$x0(e, t, n, r) {
  return l7.ai("code-chat", () => {
    let l = mJ(t, n);
    let c = getSingletonSceneGraph();
    let d = e[l];
    let x = !1;
    if (!kv(d)) {
      let e = glU?.createNewCodeFile(l, r, null, !1);
      e && (d = c.get(e) || void 0, x = !0);
    }
    if (d) {
      e[l] = d;
      let t = O.get(d.guid);
      t && (t.hasSystemEdited = !0);
    }
    return {
      codeFile: d,
      created: x
    };
  });
}
export function $$m3(e) {
  0 !== e.length && l7.ai("remove-code-files", () => {
    e.forEach(e => {
      glU?.deleteCodeFile(e.guid);
    });
    Y5.commit();
  });
}
export function $$h2(e, t) {
  let n = getSingletonSceneGraph();
  if (e.isLayerLikeCodeNode) {
    let e = mSn?.getPrimaryCodeInstanceFromLayerLikeCodeFile(n.scene, t);
    if (e) {
      let t = n.get(e);
      if (t) return t;
    }
  } else {
    let e = mSn?.getCodeComponentsExportedFromFile(n.scene, t);
    if (e?.length === 1) {
      let t = n.get(e[0]);
      if (t) return t;
    }
  }
  return e;
}
export function $$g1(e, t) {
  return e === lV.FIGMAKE ? "" : getFeatureFlags().multi_file_code_layers || getFeatureFlags().bake_canvas ? RM(t.codeFileFullPathWithoutScheme) : "";
}
export const Ur = $$x0;
export const ei = $$g1;
export const nt = $$h2;
export const zK = $$m3;