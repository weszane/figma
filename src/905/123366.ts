import { atom } from "jotai";
export function $$r0(e) {
  let t = {
    past: [],
    present: e,
    future: []
  };
  let i = atom(t);
  let r = atom(e => e(i).present, (e, t, n) => {
    let {
      past,
      present
    } = e(i);
    n !== present && t(i, {
      past: past.concat(present),
      present: n,
      future: []
    });
  });
  return {
    valueAtom: r,
    undoAtom: atom(e => e(i).past.length > 0, (e, t) => {
      let {
        past,
        present,
        future
      } = e(i);
      past.length > 0 && t(i, {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present].concat(future)
      });
    }),
    redoAtom: atom(e => e(i).future.length > 0, (e, t) => {
      let {
        past,
        present,
        future
      } = e(i);
      future.length > 0 && t(i, {
        past: past.concat(present),
        present: future[0],
        future: future.slice(1)
      });
    }),
    historyAtom: atom(e => {
      let {
        past,
        present,
        future
      } = e(i);
      return past.concat(present).concat(future);
    }, (e, n) => n(i, t))
  };
}
export const x = $$r0;
