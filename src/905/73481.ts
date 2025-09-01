import { BEGIN } from 'redux-optimist';
import { F } from '../905/842794';
import { Lg } from '../figma_app/897289';
let s = Object.create(null);
export function $$o2(e) {
  let t = e;
  let i = 0;
  for (; s[t];) {
    t = `${e}_${i}`;
    i += 1;
  }
  s[t] = !0;
  return t;
}
export function $$l1(e) {
  let t = $$o2(e);
  let i = (e = {}) => ({
    type: t,
    payload: e
  });
  i.matches = e => e.type === t;
  Lg() && (i._uniqueType = t);
  return i;
}
export function $$d0(e, t, i) {
  let a = $$o2(e);
  let s = e => i ? i(e) : a;
  let l = e => {
    let i = s(e);
    return (s, o, l) => {
      let d = F();
      let c = t({
        dispatch: s,
        getState: o
      }, e, {
        loadingKey: i,
        optimistId: d,
        ...l
      });
      s({
        type: a,
        payload: e,
        optimist: {
          type: BEGIN,
          id: d
        }
      });
      return c;
    };
  };
  l.matches = e => e.type === a;
  l.loadingKeyForPayload = s;
  return l;
}
export const MM = $$d0;
export const NC = $$l1;
export const T4 = $$o2;