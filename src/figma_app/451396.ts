import { useMemo, useCallback } from "react";
import { processInstancesAndGenerateCode } from "../905/100887";
import { ServiceCategories } from "../905/165054";
import { Fullscreen } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { reportError } from "../905/11";
import { useSceneGraphSelector, usePlaygroundSceneGraph } from "../figma_app/722362";
import { useCurrentFileKey, useOpenFileLibraryKey } from "../figma_app/516028";
import { Vr } from "../figma_app/151869";
import { ph, Bn, Gl, Ji, kN } from "../figma_app/97042";
import { yT, Nv } from "../figma_app/478201";
import m from "../905/661768";
let $$g1 = atom(!1);
function f(e, t, r) {
  let n;
  let i = r.get(t.symbolId);
  if (!i) {
    reportError(ServiceCategories.DEVELOPER_TOOLS, Error("Cant find backing component of parent node " + t.symbolId));
    return;
  }
  let s = r.developerFriendlyIdFromGuid(e.guid);
  ph(i, r, t => {
    if (t.type === e.type && s.endsWith(`;${t.guid}`)) {
      n = t.name;
      return Bn.Stop;
    }
  }, !0);
  return n;
}
export function $$E0(e, t, r) {
  let a = Vr() ?? null;
  let d = useSceneGraphSelector();
  let _ = usePlaygroundSceneGraph();
  let f = Fullscreen.getPlaygroundNodeData();
  r && (a = (d = _).get(f?.playgroundGUID ?? ""));
  let E = !!getFeatureFlags().dt_code_connect_inline_instances;
  let y = useAtomWithSubscription($$g1);
  let I = useCurrentFileKey();
  let S = useOpenFileLibraryKey();
  let v = useMemo(() => b({
    node: a,
    scene: d,
    fileKey: I,
    openLibraryKey: S
  }), [I, S, d, a]);
  let A = useCallback((e, t) => T(d)(e, t), [d]);
  let x = useMemo(() => {
    if (e && a && v) return processInstancesAndGenerateCode({
      apiSource: m,
      template: e,
      nodeTreeToInject: v,
      instanceFigmadocs: t,
      inlineInstancesEnabled: E,
      breakInTemplateExecution: y,
      getInstanceFigmadocFromJSON: A
    });
  }, [e, a, v, t, E, y, A]);
  return yT(x);
}
export function $$y2({
  node: e,
  instanceFigmadocs: t,
  template: r,
  openLibraryKey: n,
  scene: a,
  fileKey: s
}) {
  let o = b({
    node: e,
    scene: a,
    fileKey: s,
    openLibraryKey: n
  });
  if (!r || !e || !o) return Promise.resolve(void 0);
  let l = processInstancesAndGenerateCode({
    apiSource: m,
    template: r,
    nodeTreeToInject: o,
    instanceFigmadocs: t,
    inlineInstancesEnabled: !0,
    breakInTemplateExecution: !1,
    getInstanceFigmadocFromJSON: T(a)
  });
  return Nv(l);
}
function b({
  node: e,
  scene: t,
  fileKey: r,
  openLibraryKey: n
}) {
  if (!e || !r) return null;
  let i = "SYMBOL" === e.type ? e.guid : e.symbolId;
  let a = {
    key: Gl(e, t, n) ?? void 0,
    type: "INSTANCE",
    name: e.name,
    guid: e.guid,
    symbolId: i,
    properties: Ji(e),
    children: []
  };
  for (let i of e.visibleChildren) {
    let e = t.get(i);
    e && function e(t, r, n, i, a, s) {
      let o = r;
      if ("INSTANCE" === t.type) {
        let e = f(t, r, n);
        let i = Gl(t, n, a);
        let l = Ji(t);
        let d = r.children.push({
          key: i ?? void 0,
          type: "INSTANCE",
          name: e ?? t.name,
          guid: t.guid,
          symbolId: t.symbolId,
          properties: l,
          children: [],
          path: s
        });
        o = r.children[d - 1];
      } else if ("TEXT" === t.type) {
        let e = f(t, r, n);
        r.children.push({
          type: "TEXT",
          guid: t.guid,
          name: e ?? t.name,
          textContent: t.characters,
          path: s
        });
      }
      let l = s.concat([t.name]);
      for (let r of t.visibleChildren) {
        let t = n.get(r);
        t && e(t, o, n, i, a, l);
      }
    }(e, a, t, r, n, []);
  }
  return a;
}
function T(e) {
  return function (t, r) {
    let n = e.get(r);
    return n && t ? kN(t, n) : null;
  };
}
export const Ur = $$E0;
export const cH = $$g1;
export const qZ = $$y2;
