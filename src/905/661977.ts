export function $$n1(e) {
  let t = e.manifest?.codegenLanguages ?? [];
  return t.length > 0 ? t : [{
    value: "",
    label: ""
  }];
}
export function $$r0(e, t) {
  let i = $$n1(e);
  return i.find(e => e.value === t) ?? i[0];
}
export const X = $$r0;
export const m = $$n1;