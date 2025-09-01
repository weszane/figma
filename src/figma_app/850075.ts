import { M4, IT } from "../905/713695";
import { Z } from "../905/939602";
let a = M4.Query({
  fetch: async () => (await Z.getDefaultLibraries({
    editorType: "cooper_shapes"
  })).data.meta
});
export function $$s1() {
  let [e] = IT(a({}));
  return e.data ? e.data?.components : [];
}
let o = M4.Query({
  fetch: async () => (await Z.getDefaultLibraries({
    editorType: "cooper_text"
  })).data.meta
});
export function $$l0() {
  let [e] = IT(o({}));
  return e.data ? e.data?.components : [];
}
export function $$d3() {
  $$s1();
  $$l0();
}
let c = M4.Query({
  fetch: async () => (await Z.getDefaultLibraryAttribution({
    editorType: "cooper"
  })).data.meta.library_key_to_attribution
});
export function $$u2(e) {
  let [t] = IT(c({
    enabled: e
  }));
  return t.data ? t.data : {};
}
export const Oj = $$l0;
export const bW = $$s1;
export const lW = $$u2;
export const rE = $$d3;