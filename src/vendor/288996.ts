import { U } from "../vendor/885230";
import { o5, rm, KU } from "../vendor/325489";
import { fj, qO, Vu } from "../vendor/882763";
import { O } from "../vendor/240444";
import { li } from "../vendor/650703";
export function $$u0(e, n) {
  return o5().captureException(e, li(n));
}
export function $$l8(e, n) {
  let i = "string" == typeof n ? n : void 0;
  let t = "string" != typeof n ? {
    captureContext: n
  } : void 0;
  return o5().captureMessage(e, i, t);
}
export function $$d7(e, n) {
  return o5().captureEvent(e, n);
}
export function $$s6(e, n) {
  rm().setContext(e, n);
}
export function $$c4(e) {
  rm().setTags(e);
}
export function $$h3(e, n) {
  rm().setTag(e, n);
}
export function $$p5(e) {
  rm().setUser(e);
}
export function $$g1(e) {
  let n = KU();
  let i = rm();
  let o = o5();
  let {
    release,
    environment = U
  } = n && n.getOptions() || {};
  let {
    userAgent
  } = O.navigator || {};
  let s = fj({
    release,
    environment,
    user: o.getUser() || i.getUser(),
    ...(userAgent && {
      userAgent
    }),
    ...e
  });
  let c = i.getSession();
  c && "ok" === c.status && qO(c, {
    status: "exited"
  });
  m();
  i.setSession(s);
  o.setSession(s);
  return s;
}
function m() {
  let e = rm();
  let n = o5();
  let i = n.getSession() || e.getSession();
  i && Vu(i);
  _();
  e.setSession();
  n.setSession();
}
function _() {
  let e = rm();
  let n = o5();
  let i = KU();
  let t = n.getSession() || e.getSession();
  t && i && i.captureSession(t);
}
export function $$b2(e = !1) {
  if (e) {
    m();
    return;
  }
  _();
}
export const Cp = $$u0;
export const J0 = $$g1;
export const J5 = $$b2;
export const NA = $$h3;
export const Wt = $$c4;
export const gV = $$p5;
export const o = $$s6;
export const r = $$d7;
export const wd = $$l8;