export function $$n1(e) {
  return /figma\.(com|(engineering:(8080|8443)))$/.test(e);
}
export function $$r0(e) {
  return e.replace(":", "-");
}
export function $$a2(e) {
  return $$r0(e.replace("VariableID:", ""));
}
export const EO = $$r0;
export const F4 = $$n1;
export const Ml = $$a2;