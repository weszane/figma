import { atom, um } from '../figma_app/27355';
let $$r0 = atom(null);
let $$$$a1 = um([], (e, t) => {
  switch (t.type) {
    case 'mount':
      return [...e, t?.uniqueOverlayId];
    case 'unmount':
      return e.filter(e => e !== t?.uniqueOverlayId);
  }
});
export const D = $$r0;
export const a = $$$$a1;