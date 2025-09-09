import { A } from "../905/920142";
import { AccessLevelEnum } from "../905/557142";
export function $$a4(e) {
  return e && !!e.student_validated_at;
}
export function $$s9(e, t) {
  if (!e) return 1 / 0;
  let r = Math.ceil(A(e).diff(A(), "days", !0));
  return r > 12 ? 1 / 0 : r <= 0 ? t ? 1 : 0 : r;
}
export function $$o3(e, t) {
  return {
    hasGracePeriod: !!(e && t in e),
    isInValidGracePeriod: $$c8(e, t) > 0
  };
}
let l = (e, t) => Math.ceil(A(e[t].createdAt).add(7, "days").diff(A(), "days", !0));
export function $$d10(e, t) {
  if (!e || !e[t]?.createdAt) return new Date();
  let r = new Date();
  r.setDate(e[t]?.createdAt?.getDate() + 7);
  return r;
}
export function $$c8(e, t) {
  return e && e[t] ? l(e, t) : 0;
}
export function $$u1(e) {
  if (!e) return 0;
  let t = 1 / 0;
  for (let r in e) {
    let n = l(e, r);
    n > 0 && n < t && (t = n);
  }
  return t === 1 / 0 ? 0 : t;
}
export function $$p5(e, t) {
  let r = function (e) {
    let t = e && Object.keys(e).length > 0;
    let r = !1;
    for (let t in e) 0 >= l(e, t) && (r = !0);
    return {
      hasGracePeriod: !!t,
      isInValidGracePeriod: $$u1(e) > 0,
      isInExpiredGracePeriod: r
    };
  }(e);
  if (t || !r.hasGracePeriod) return {
    showReminder: !1,
    showAccessRestricted: !1
  };
  let n = !!r.isInExpiredGracePeriod;
  return {
    showReminder: r.isInValidGracePeriod && !n,
    showAccessRestricted: n
  };
}
export function $$_0(e, t, r, n) {
  let i = $$o3(e, r);
  if (t || !n || !i.hasGracePeriod) return {
    showReminder: !1,
    showAccessRestricted: !1
  };
  let a = i.isInValidGracePeriod;
  return {
    showReminder: a,
    showAccessRestricted: !a
  };
}
export function $$h6(e, t, r) {
  return !!r?.student_team && t[r.id]?.[e]?.level === AccessLevelEnum.OWNER;
}
export function $$m2(e, t, r) {
  for (let n in t) {
    let a = t[n][e];
    if (r?.student_team && a?.level >= AccessLevelEnum.EDITOR) return !0;
  }
  return !1;
}
export function $$g7(e, t, r) {
  return !!r?.student_team && t[r.id]?.[e]?.level >= AccessLevelEnum.EDITOR;
}
export const GU = $$_0;
export const Me = $$u1;
export const QS = $$m2;
export const SH = $$o3;
export const cn = $$a4;
export const df = $$p5;
export const eB = $$h6;
export const hP = $$g7;
export const qS = $$c8;
export const x$ = $$s9;
export const zR = $$d10;