import { DesignGraphElements } from "../figma_app/763686";
function i() {
  return new Date(Date.now() - 6e4);
}
export function $$a2(e) {
  return null !== e && e.createdAt > i();
}
export function $$s3(e) {
  return [DesignGraphElements.NONE, DesignGraphElements.SELECT].includes(e);
}
export function $$o1(e, t) {
  return t === e?.creatorId;
}
export function $$l0(e) {
  return !!e && e.createdAt > i();
}
export const SS = $$l0;
export const Uj = $$o1;
export const ZQ = $$a2;
export const zP = $$s3;