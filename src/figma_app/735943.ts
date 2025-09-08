import { getSingletonSceneGraph } from "../905/700578";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
function s(e) {
  if (e) {
    e.startsWith("/") && (e = e.slice(1));
    e.endsWith("/") && (e = e.slice(0, -1));
    return e;
  }
}
export function $$o3(e, t) {
  return s(e) === s(t);
}
export function $$l4(e) {
  return !!(e && e.isCodeFile && !e.isSoftDeleted && e.codeFilePath?.toString() !== ".figma_internal");
}
let $$d0 = "Attributions.md";
let $$c2 = `/${$$d0}`;
export function $$u1(e, t, r, s) {
  return permissionScopeHandler.ai("code-chat", () => {
    let a = getSingletonSceneGraph();
    let o = e[t];
    let d = !1;
    if (!$$l4(o)) {
      let e = Fullscreen?.createNewCodeFile(t, r, null, !1);
      e && (o = a.get(e) || void 0, d = !0);
    }
    o && (e[t] = o, s(o));
    return {
      codeFile: o,
      created: d
    };
  });
}
export const SE = $$d0;
export const Ur = $$u1;
export const e = $$c2;
export const iD = $$o3;
export const kv = $$l4;