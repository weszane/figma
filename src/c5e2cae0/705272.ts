import s from "../vendor/128080";
import { isValidAccessType, ProductAccessTypeEnum } from "../905/513035";
import { collaboratorSet } from "../905/332483";
var r = s;
let $$n4 = 1;
let $$d3 = 1;
export function $$o5(e, t) {
  let a = {};
  for (let s of Object.keys(e)) {
    let r = e[s] || "";
    t.includes(s) && isValidAccessType(r) && (a[s] = r);
  }
  return a;
}
export function $$c2(e, t, a) {
  return {
    minimumPaidSeats: 1,
    defaultAdditionalSeatType: ProductAccessTypeEnum.EXPERT,
    selectedTeamIds: [e],
    selectedUserSeatTypes: t,
    additionalSeatCounts: a
  };
}
export function $$m7(e, t, a) {
  return {
    minimumPaidSeats: 1,
    defaultAdditionalSeatType: ProductAccessTypeEnum.EXPERT,
    selectedTeamIds: e,
    selectedUserSeatTypes: t,
    additionalSeatCounts: a
  };
}
function _(e) {
  return {
    type: "error",
    message: e
  };
}
function u(e) {
  return {
    type: "success",
    value: e
  };
}
export function $$p6(e, t) {
  var a;
  var s;
  var r;
  switch (t.type) {
    case "changeSeatType":
      a = t.userId;
      s = t.seatType;
      return a in e.selectedUserSeatTypes ? u({
        ...e,
        selectedUserSeatTypes: {
          ...e.selectedUserSeatTypes,
          [a]: s
        }
      }) : _(`Tried to change seat for not-present user ${a}`);
    case "setAdditionalSeats":
      return Object.values(r = t.additionalSeatCounts).some(e => e < 0) ? _("Blocked attempt to set negative additional seats") : u({
        ...e,
        additionalSeatCounts: r
      });
  }
}
export function $$h0(e, t, a) {
  return {
    ...e,
    [t]: Math.max(0, (e[t] || 0) + a)
  };
}
export function $$g1(e) {
  let t = new Set(collaboratorSet.toArray());
  let a = new Set(Object.keys(e));
  return !(!r()(t, a) || Object.values(e).find(e => Number.isNaN(e) || e < 0));
}
export const $$ = $$h0;
export const Ed = $$g1;
export const MZ = $$c2;
export const WQ = $$d3;
export const f8 = $$n4;
export const md = $$o5;
export const n5 = $$p6;
export const wh = $$m7;