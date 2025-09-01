import { atom } from "jotai";
import { atomWithDefault } from "../vendor/812047";
import { S } from "../905/142517";
import { H } from "../905/623391";
import { NC } from "../905/73481";
import { lQ } from "../905/934246";
export function $$d2(e, t, i, n) {
  let r = lQ;
  let {
    action,
    reducer
  } = $$c0(i, "init" in t ? t.init : n);
  return $$u3(H(t, t => {
    e()?.dispatch(action(t));
    r(t, "toRedux");
  }), reducer);
}
export function $$c0(e, t) {
  let i = NC(e);
  return {
    action: i,
    reducer: (e = t, n) => i.matches(n) ? n.payload : e
  };
}
export function $$u3(e, t) {
  e.reducer = t;
  return e;
}
export function $$p1(e, t, i) {
  return $$d2(e, atom(t), i);
}
export function $$m4(e, t, {
  notifyImmediate: i = !1
} = {}) {
  let n = S({
    get: () => {
      let i = e();
      if (!i) throw Error("Redux Store does not exist yet. Please create a store or make sure it's appropriately set.");
      return t(i.getState());
    },
    subscribe: t => {
      let n = e();
      if (!n) throw Error("Redux Store does not exist yet. Please create a store or make sure it's appropriately set.");
      return i && n.hasOwnProperty("subscribeImmediate") && "function" == typeof n.subscribeImmediate ? n.subscribeImmediate(() => t()) : n.subscribe(() => t());
    }
  });
  return Object.assign(atomWithDefault(e => e(n)), {
    getStore: e
  });
}
export const B5 = $$c0;
export const OX = $$p1;
export const Pj = $$d2;
export const S9 = $$u3;
export const bt = $$m4;
