import { atom } from 'jotai';
import { createFileBehaviorAtom, FileChangeBehaviorEnum } from '../905/508457';
let $$a0 = atom({
  isVideoNodeHovered: !1,
  pointerDownOnVideo: !1
});
let $$s2 = createFileBehaviorAtom(null, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let $$o1 = atom({});
export const H = $$a0;
export const oe = $$o1;
export const vE = $$s2;