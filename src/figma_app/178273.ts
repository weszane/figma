import { atom, createRemovableAtomFamily, atomStoreManager } from "../figma_app/27355";
import { i as _$$i } from "../vendor/753650";
let a = atom({});
let $$s4 = createRemovableAtomFamily(e => atom(t => t(a)[e], (t, r, n) => {
  r(a, t => ({
    ...t,
    [e]: n
  }));
}));
let $$o0 = atom(e => Object.values(e(a)));
let $$l1 = atom(!1);
let $$d5 = atom({
  autoScroll: !1
});
export async function $$c2(e, t, r, o) {
  let {
    guid
  } = e;
  atomStoreManager.set($$d5, e => e.autoScroll ? {
    ...e,
    guid
  } : e);
  o || atomStoreManager.set($$l1, !0);
  await function (e, t) {
    let {
      guid: _guid,
      name
    } = e;
    let o = .03 * name.length;
    return new Promise(l => {
      _$$i(name.length, 0, {
        onUpdate: i => {
          !t.signal.aborted && e.isAlive && atomStoreManager.set($$s4(_guid), {
            guid: _guid,
            boundingBox: e.absoluteBoundingBox,
            state: "deleting",
            name: name.slice(0, Math.floor(i))
          });
        },
        duration: o,
        ease: "linear",
        onComplete: l
      });
    });
  }(e, r);
  await function (e, t, r) {
    let {
      guid: _guid2
    } = e;
    let o = .07 * t.length;
    return new Promise(l => {
      _$$i(0, t.length, {
        onUpdate: i => {
          !r.signal.aborted && e.isAlive && atomStoreManager.set($$s4(_guid2), {
            guid: _guid2,
            boundingBox: e.absoluteBoundingBox,
            state: "writing",
            name: t.slice(0, Math.floor(i))
          });
        },
        duration: o,
        ease: "linear",
        onComplete: l
      });
    });
  }(e, t, r);
  $$s4.remove(guid);
  atomStoreManager.set(a, e => {
    let t = {
      ...e
    };
    delete t[guid];
    return t;
  });
  o || atomStoreManager.set($$l1, !1);
}
export function $$u3() {
  $$s4.removeAll();
}
export const EO = $$o0;
export const aG = $$l1;
export const bK = $$c2;
export const oZ = $$u3;
export const r8 = $$s4;
export const uK = $$d5;