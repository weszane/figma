import { dayjs } from "../905/920142";
import { AR } from "../figma_app/327564";
export function $$a0(e, t, r) {
  return e.find(e => {
    let n = e.status === t;
    r && (n &&= r(e));
    return n;
  });
}
export function $$s5(e) {
  return !!e && 1 === e.quarter;
}
export function $$o1(e) {
  return !e.billing_mechanics || "legacy" === e.billing_mechanics;
}
export function $$l6(e) {
  return "upcoming" === e.status && !e.is_skipped_trueup && !!$$o1(e) && $$c11(e.due_at);
}
export function $$d7(e) {
  let t = $$a0(e, "upcoming");
  return !!t && $$l6(t);
}
export function $$c11(e) {
  return dayjs(e) < dayjs().add(14, "days");
}
export function $$u10(e, t) {
  return t && dayjs().isBefore(e);
}
export function $$p12(e) {
  return $$a0(e, "open", e => dayjs(e.past_due_at).isBefore(dayjs()));
}
export function $$_9(e) {
  let t = $$a0(e, "open");
  return !!t && dayjs(t.past_due_at) < dayjs();
}
export function $$h8(e) {
  return $$d7(e) || function (e) {
    let t = $$a0(e, "open");
    return !!t && dayjs() < dayjs(t.past_due_at);
  }(e) || $$_9(e);
}
export var $$m2 = (e => (e.BILLING_STATUS = "billing_status", e.TAX_ID_STATUS = "tax_id_status", e.DEV_MODE_SUGGESTED_UPGRADES = "dev_mode_suggested_upgrades", e))($$m2 || {});
export function $$g4(e) {
  if (0 === e.length) return null;
  let t = $$a0(e, "upcoming");
  return t ? 1 === t.quarter ? t.period_start_at : t.period_end_at : null;
}
export function $$f3(e, t) {
  return !!t && 1 === e.quarter && 0 === dayjs(e.period_start_at).diff(t, "days");
}
export function $$E13(e) {
  return "upcoming" === e.status || "locked" === e.status ? null : `${AR}${e.id}`;
}
export const C5 = $$a0;
export const D1 = $$o1;
export const EZ = $$m2;
export const UO = $$f3;
export const de = $$g4;
export const ev = $$s5;
export const go = $$l6;
export const hX = $$d7;
export const i0 = $$h8;
export const m3 = $$_9;
export const ss = $$u10;
export const tl = $$c11;
export const vY = $$p12;
export const xu = $$E13;