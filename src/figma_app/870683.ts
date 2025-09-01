import { Tg, Xu, Uo } from "../figma_app/354658";
export function $$i1(e, t) {
  return new Tg({
    resourceId: e,
    urlSlug: t
  }).href;
}
export function $$a6(e, t) {
  return new Xu({
    apiResourceType: Uo.PLUGIN,
    resourceId: e,
    urlSlug: t
  }).href;
}
export function $$s2(e, t) {
  return new Xu({
    apiResourceType: Uo.WIDGET,
    resourceId: e,
    urlSlug: t
  }).href;
}
export function $$o4(e, t) {
  return new URL($$a6(e, t), location.href).href;
}
export function $$l7(e, t) {
  return new URL($$s2(e, t), location.href).href;
}
export function $$d5(e, t) {
  return new URL($$i1(e, t), location.href).href;
}
export function $$c0() {
  return new URL("/community/plugin/pluginID", location.href).href;
}
export function $$u3(e) {
  let t = e.match(/\/community\/plugin\/([^/]+)/);
  return t ? t[1] : null;
}
export const Nz = $$c0;
export const X$ = $$i1;
export const YW = $$s2;
export const Yp = $$u3;
export const ab = $$o4;
export const cU = $$d5;
export const ho = $$a6;
export const ox = $$l7;