import { V } from "../vendor/524215";
import { _0, TV } from "../vendor/271535";
import { VI } from "../vendor/187488";
import { M } from "../vendor/644572";
import { E as _$$E } from "../vendor/476615";
function a() {
  let e = !1;
  let r = new Set();
  let n = {
    subscribe: e => (r.add(e), () => void r.$$delete(e)),
    start(n, o) {
      V(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      let a = [];
      r.forEach(e => {
        a.push(_0(e, n, {
          transitionOverride: o
        }));
      });
      return Promise.all(a);
    },
    set: n => (V(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), r.forEach(e => {
      VI(e, n);
    })),
    stop() {
      r.forEach(e => {
        TV(e);
      });
    },
    mount: () => (e = !0, () => {
      e = !1;
      n.stop();
    })
  };
  return n;
}
export function $$p1() {
  let e = M(a);
  _$$E(e.mount, []);
  return e;
}
export let $$g0 = $$p1;
export const s = $$g0;
export const E = $$p1;