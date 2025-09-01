import s from "../vendor/128080";
import { dA, ud } from "../905/513035";
import { N_ } from "../905/332483";
var i = s;
let $$r4 = 1;
let $$l3 = 1;
export function $$d5(e, t) {
  let a = {};
  for (let s of Object.keys(e)) {
    let i = e[s] || "";
    t.includes(s) && dA(i) && (a[s] = i);
  }
  return a;
}
export function $$c2(e, t, a) {
  return {
    minimumPaidSeats: 1,
    defaultAdditionalSeatType: ud.EXPERT,
    selectedTeamIds: [e],
    selectedUserSeatTypes: t,
    additionalSeatCounts: a
  };
}
export function $$u7(e, t, a) {
  return {
    minimumPaidSeats: 1,
    defaultAdditionalSeatType: ud.EXPERT,
    selectedTeamIds: e,
    selectedUserSeatTypes: t,
    additionalSeatCounts: a
  };
}
function m(e) {
  return {
    type: "error",
    message: e
  };
}
function _(e) {
  return {
    type: "success",
    value: e
  };
}
export function $$p6(e, t) {
  var a;
  var s;
  var i;
  switch (t.type) {
    case "changeSeatType":
      a = t.userId;
      s = t.seatType;
      return a in e.selectedUserSeatTypes ? _({
        ...e,
        selectedUserSeatTypes: {
          ...e.selectedUserSeatTypes,
          [a]: s
        }
      }) : m(`Tried to change seat for not-present user ${a}`);
    case "setAdditionalSeats":
      return Object.values(i = t.additionalSeatCounts).some(e => e < 0) ? m("Blocked attempt to set negative additional seats") : _({
        ...e,
        additionalSeatCounts: i
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
  let t = new Set(N_.toArray());
  let a = new Set(Object.keys(e));
  return !(!i()(t, a) || Object.values(e).find(e => Number.isNaN(e) || e < 0));
}
export const $$ = $$h0;
export const Ed = $$g1;
export const MZ = $$c2;
export const WQ = $$l3;
export const f8 = $$r4;
export const md = $$d5;
export const n5 = $$p6;
export const wh = $$u7;