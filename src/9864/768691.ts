import { useState } from "react";
import { sx } from "../905/449184";
import { R } from "../905/165069";
export function $$l0(e) {
  let [r] = useState(() => Date.now());
  R(() => {
    let e = Date.now();
    sx("Time to Show NUX", {
      timeToShowNuxMs: e - r
    });
  }, e, e => e);
}
export const Q = $$l0;