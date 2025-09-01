import { useState, useEffect } from "react";
import { ux, NY, uW, Ok } from "../figma_app/851625";
export function $$a0(e, t) {
  let i = ux();
  let [a, s] = useState(i);
  useEffect(() => {
    let t = !1;
    e({
      reset: () => s(i)
    }).then(e => {
      t || s(NY(e));
    }, e => {
      t || s(uW(e));
    });
    return () => {
      t = !0;
    };
  }, t);
  return a;
}
export function $$s1(e, t) {
  let [i, a] = useState(Ok());
  useEffect(() => {
    let t = !1;
    e().then(e => {
      t || a(null == e ? Ok() : NY(e));
    }, e => {
      t || a(uW(e));
    });
    return () => {
      t = !0;
    };
  }, t);
  return i;
}
export const J = $$a0;
export const f = $$s1;