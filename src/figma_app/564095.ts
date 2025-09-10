import { XHR } from "src/905/910117";
import { KH } from "src/figma_app/471982";
export function $$a1(e, t) {
  return !!e && !!e.plugin_publishers?.pending?.some(e => e.id === t);
}
export function $$s0(e, t) {
  return !!e && !!e.plugin_publishers?.accepted?.some(e => e.id === t);
}
export function $$o2(e, t) {
  return $$a1(e, t) || $$s0(e, t);
}
export async function $$l3(e, t) {
  let {
    data
  } = await XHR.post(`/api/${KH(e, {
    pluralized: !0
  })}/${e.id}/publisher_invites`, {
    emails: t
  });
  return {
    resource: data.meta.plugin,
    errors: data.meta.errors
  };
}
export const Ro = $$s0;
export const dN = $$a1;
export const jY = $$o2;
export const o0 = $$l3;
