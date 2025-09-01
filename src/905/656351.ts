import { useState, useEffect } from "react";
import { sx } from "../905/449184";
import { xK } from "../905/125218";
import { tS } from "../figma_app/516028";
import { TA } from "../905/372672";
export function $$l0(e, t) {
  let [i, l] = useState(!1);
  let d = TA();
  let [c] = useState(() => performance.now());
  let u = tS();
  let p = xK.loadID();
  useEffect(() => {
    l(!1);
  }, [p]);
  useEffect(() => {
    e((e, t) => {
      i || (sx(e, {
        start_time: c,
        end_time: performance.now(),
        file_key: u,
        user_id: d,
        load_id: p,
        ...t
      }), l(!0));
    });
  }, [...(t || []), c, i, p, u]);
}
export const t = $$l0;