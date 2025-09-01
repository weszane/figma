import _require from "../5973/625973";
async function n() {
  return await Promise.all([]).then(_require);
}
export async function $$i4(e, t = {
  includeIDs: !1
}) {
  return (await n()).serializeJSX(e, t);
}
export async function $$a1(e, t = {
  includeIDs: !1
}) {
  let r = await n();
  return await r.deserializeJSX(e, t);
}
export async function $$s0(e) {
  let t = await n();
  return await t.reconcileJSX(e);
}
export async function $$o3(e) {
  let t = await n();
  return await t.reconcileJSXElement(e);
}
export async function $$l2(e, t, r) {
  return (await n()).getReactFunctionComponentDefinition(e, t, r);
}
export const Go = $$s0;
export const LZ = $$a1;
export const gZ = $$l2;
export const m = $$o3;
export const oy = $$i4;