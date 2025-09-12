import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
import { Uv } from "../figma_app/91703";
import { zK } from "../figma_app/913823";
import { sw } from "../figma_app/914957";
import { El } from "../figma_app/646357";
import { CX } from "../905/557338";
import { n as _$$n } from "../905/64411";
let $$u0 = createActionCreator("SHOW_INSTANCE_SWAP_PICKER");
let $$p1 = createActionCreator("HIDE_INSTANCE_SWAP_PICKER");
let $$m2 = createOptimistThunk((e, t) => {
  let i = e.getState();
  let {
    instanceSwapPickerShown
  } = i;
  let r = CX(i);
  let {
    id,
    initialPosition,
    modal,
    returnFocusToToggle
  } = t;
  instanceSwapPickerShown.isShown && instanceSwapPickerShown.id === id ? e.dispatch($$p1()) : initialPosition && (e.dispatch(zK()), r && !El("INVALID-FILE-KEY-SHOULD-BE-REMOVED", r) && e.dispatch(_$$n({
    libraryKey: r
  })), e.dispatch($$u0({
    id,
    initialX: initialPosition.x,
    initialY: initialPosition.y,
    modal: !!modal,
    returnFocusToToggle: !!returnFocusToToggle
  })), e.dispatch(Uv()), e.dispatch(sw()));
});
export const qX = $$u0;
export const vq = $$p1;
export const zE = $$m2;