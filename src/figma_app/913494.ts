import { createContext } from "react";
import { noop } from 'lodash-es';
let a = {
  tonePosition: [0, 0],
  canResetTone: !1,
  setTonePosition: noop,
  setPositionAndRun: noop
};
let $$s0 = createContext(a);
export const u = $$s0;
