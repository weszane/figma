import { um, atom, atomStoreManager } from "../figma_app/27355";
import { eventEmitterAtom } from "../905/502364";
import { getUserEvents } from "../905/337355";
import { b } from "../905/965432";
function o(e, t, i) {
  for (let n of t) e.addEventListener(n, i);
}
function l(e, t, i) {
  for (let n of t) e.removeEventListener(n, i);
}
let d = new Map();
export function $$c0(e, t) {
  let i = function (e, t) {
    if (d.has(e)) return null;
    let i = getUserEvents(t);
    let c = function (e) {
      let t = {
        currentState: e.start(),
        lastEvent: null,
        previousState: null
      };
      return um(t, (i, n) => {
        switch (n?.type) {
          case "RESET":
            return t;
          case "TRANSITION":
            return function (t, i) {
              let n = e.transition(t.currentState, i);
              return null != n ? {
                currentState: n,
                lastEvent: i,
                previousState: t.currentState
              } : t;
            }(i, n.payload.event);
          default:
            return i;
        }
      });
    }(t);
    let u = atom(e => e(c), (e, t) => t(c, {
      type: "RESET"
    }));
    let p = e => {
      let {
        id,
        properties
      } = "properties" in e ? e : {
        id: e.id,
        properties: void 0
      };
      if (!i.has(id)) return;
      let a = {
        id: b,
        type: id,
        properties: properties ?? {}
      };
      atomStoreManager.set(c, {
        type: "TRANSITION",
        payload: {
          event: a
        }
      });
    };
    o(atomStoreManager.get(eventEmitterAtom), i, p);
    d.set(e, {
      clear: () => {
        d.$$delete(e);
        l(atomStoreManager.get(eventEmitterAtom), i, p);
      },
      reset: () => {
        let e = atomStoreManager.get(eventEmitterAtom);
        l(e, i, p);
        o(e, i, p);
      }
    });
    return {
      machine: t,
      name: e,
      _atom: u
    };
  }(e, t);
  if (null == i) throw Error(`Registering state machine with name ${e} already in use`);
  return i;
}
export const rn = $$c0;