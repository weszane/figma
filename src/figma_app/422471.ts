import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { atom, useAtomWithSubscription, Xr } from "../figma_app/27355";
import { b } from "../905/985254";
import { Fu } from "../figma_app/545877";
import { selectCurrentFile } from "../figma_app/516028";
let $$d1 = Fu("dev_handoff_has_seen_dev_mode");
let $$c3 = Fu("dev_handoff_has_seen_dev_mode_ga");
let $$u2 = atom(!1);
let $$p5 = Fu("dev_handoff_has_seen_dev_mode_paywall");
export function $$_4() {
  (function () {
    let e = useSelector(e => e.currentUserOrgId);
    let t = useSelector(e => e.currentTeamId);
    let r = selectCurrentFile()?.teamId || null;
    let o = useDispatch();
    let c = useAtomWithSubscription($$d1);
    let u = useRef(!1);
    useEffect(() => {
      u.current || "loaded" !== c.status || (u.current = !0, o(b({
        dev_handoff_has_seen_dev_mode: !0,
        dev_handoff_has_seen_dev_mode_ga: !0
      })));
    }, [c, o, e, t || r]);
  })();
  return null;
}
export function $$h0() {
  (function () {
    let e = useDispatch();
    let t = useAtomWithSubscription($$p5);
    let r = Xr($$u2);
    let o = useRef(!1);
    useEffect(() => {
      r(!0);
      o.current || "loaded" !== t.status || (o.current = !0, e(b({
        dev_handoff_has_seen_dev_mode_paywall: !0
      })));
    }, [t, e, r]);
  })();
  return null;
}
export const OM = $$h0;
export const Pt = $$d1;
export const YU = $$u2;
export const fC = $$c3;
export const uL = $$_4;
export const xJ = $$p5;