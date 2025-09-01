import { debounce } from "../905/915765";
import { atom } from "jotai";
import { atomWithDefault } from "../vendor/812047";
import { TQ } from "../905/657224";
import { y } from "../905/867679";
export function $$$$l1(e, t, {
  subscribeToChanges: i
} = {
    subscribeToChanges: !1
  }, {
    debounceTime: d,
    stringify: c = JSON.stringify,
    parse: u = JSON.parse
  } = {}) {
  function p() {
    let i = TQ();
    if (i) {
      let t = i.getItem(e);
      if (null != t) try {
        let e = u(t);
        if (void 0 !== e) return e;
      } catch (e) { }
    }
    return t;
  }
  let m = atomWithDefault(() => p());
  let h = (() => {
    let t = t => {
      let i = TQ();
      i && i.setItem(e, c(t));
    };
    return null == d ? t : debounce(t, d);
  })();
  let g = atom(e => e(m), (e, t, i) => {
    t(m, i);
    h(e(m));
  });
  return i ? y(g, ({
    setSelf: t
  }) => {
    let i = i => {
      i.key === e && t(() => p());
    };
    window.addEventListener("storage", i);
    return () => window.removeEventListener("storage", i);
  }) : g;
}
export function $$d0(e, t, i, n = {
  subscribeToChanges: !1
}, a = {}) {
  let s = $$$$l1(e, t, n, a);
  return atom(e => {
    let n = e(s);
    return i.safeParse(n).success ? n : t;
  }, (e, t, i) => t(s, i));
}
export const E = $$d0;
export const l = $$$$l1;
