import { NC } from "../905/17179";
import { xv } from "../905/102752";
import { nF } from "../905/350402";
let s = nF(async (e, [t, i]) => (await i, e.dispatch($$c0(t))));
export function $$o8(e) {
  let t = {
    type: "string" == typeof e.type ? e.type : e.type.type,
    data: e.data || {},
    optOutOfPrevModal: e.optOutOfPrevModal,
    ...(e.showModalsBeneath && {
      showModalsBeneath: e.showModalsBeneath
    }),
    ...(e.prevModal && {
      prevModal: e.prevModal
    })
  };
  let i = xv(t.type);
  return i ? s([t, i]) : $$c0(t);
}
export function $$l1() {
  return $$u2();
}
export function $$d5(e) {
  return p({
    type: "string" == typeof e.type ? e.type : e.type.type,
    data: e.data || {},
    ...(e.showModalsBeneath && {
      showModalsBeneath: e.showModalsBeneath
    }),
    ...(e.prevModal && {
      prevModal: e.prevModal
    })
  });
}
let $$c0 = NC("SHOW_MODAL");
let $$u2 = NC("HIDE_MODAL");
let p = nF((e, t) => {
  e.getState().modalShown?.type === t.type ? e.dispatch($$u2()) : (e.getState().modalShown && e.dispatch($$u2()), e.dispatch($$c0(t)));
});
let $$m3 = NC("HIDE_SPECIFIC_MODAL");
let $$h7 = NC("UPDATE_MODAL");
let $$g4 = NC("POP_MODAL_STACK");
let $$f6 = NC("POP_PREV_MODAL");
export const $O = $$c0;
export const AS = $$l1;
export const Ce = $$u2;
export const ES = $$m3;
export const Lo = $$g4;
export const YK = $$d5;
export const aZ = $$f6;
export const hm = $$h7;
export const to = $$o8;