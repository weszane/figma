import { useState, useCallback, useRef, useEffect, useLayoutEffect } from "react";
import { mov } from "../figma_app/763686";
import { q } from "../905/924253";
import { J } from "../905/633914";
import { H } from "../905/561433";
export function $$l2(e) {
  return mov?.isAlive(e.handle) ?? !1;
}
let d = new Set();
function c(e) {
  d.has(e) || (d.add(e), H());
}
export function $$u3(e, {
  onChangeImmediate: t,
  onChangeDeferred: r
}) {
  let n = e.subscribeFromJs(() => {
    t?.();
    r && c(r);
  });
  return () => {
    if (r && d.$$delete(r), e instanceof Object) $$l2(e) && e.unsubscribeFromJs(n);else try {
      e.unsubscribeFromJs(n);
    } catch (e) {}
  };
}
export function $$p1() {
  if (0 === d.size) return;
  let e = new Set(d);
  for (let t of (d = new Set(), e)) t();
}
let _ = 0;
let h = Symbol("EMPTY_OBSERVABLE");
export function $$m0(e) {
  return $$g4(e, h);
}
export function $$g4(e, t) {
  q();
  let [r, i] = useState(0);
  let s = useCallback(() => {
    i(++_);
  }, []);
  let o = useRef(h);
  let d = () => {
    o.current = h;
  };
  useEffect(() => {
    if (!e || !$$l2(e)) return;
    let t = $$u3(e, {
      onChangeImmediate: d,
      onChangeDeferred: s
    });
    let r = e.getCopy();
    o.current !== r && (d(), c(s));
    return t;
  }, [e, s]);
  o.current === h && e && $$l2(e) && (o.current = e.getCopy());
  return o.current === h ? t : o.current;
}
export function $$f5(e, t) {
  q();
  let [r, i, o] = J(h);
  useLayoutEffect(() => {
    if (!e || !$$l2(e)) return;
    let t = $$u3(e, {
      onChangeImmediate: () => {
        $$l2(e) && o(e.getCopy());
      }
    });
    let n = e.getCopy();
    r.current !== n && o(n);
    return t;
  }, [e, r, o]);
  return i === h ? t : i;
}
export const J2 = $$m0;
export const TG = $$p1;
export const _n = $$l2;
export const lu = $$u3;
export const ut = $$g4;
export const xB = $$f5;