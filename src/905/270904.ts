import { useState, useEffect } from "react";
import { addEventlistenerWithCleanup } from "../905/955878";
import { A } from "../905/268204";
let s = {
  matches: !1,
  addEventListener: () => { },
  removeEventListener: () => { }
};
export function $$o0(e) {
  return A ? window.matchMedia(e) : s;
}
export function $$l1(e) {
  let [t, i] = useState(e.matches);
  useEffect(() => addEventlistenerWithCleanup(e, "change", e => i(e.matches)), [e]);
  return t;
}
export const D = $$o0;
export const U = $$l1;
