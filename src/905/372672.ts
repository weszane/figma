import { useSelector } from "../vendor/514228";
export function $$r0() {
  return $$o3()?.created_at || null;
}
export function $$a2() {
  return $$o3()?.id || null;
}
export function $$s1() {
  return useSelector(e => e.user);
}
export function $$o3() {
  return useSelector(e => e.user);
}
export function $$l4(e) {
  return !!e.password_token || e.google_sso_only || e.saml_sso_only;
}
export const J$ = $$r0;
export const Pc = $$s1;
export const TA = $$a2;
export const iZ = $$o3;
export const pS = $$l4;