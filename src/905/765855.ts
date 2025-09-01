import { NC } from "../905/17179";
import { zr, Zj } from "../905/129884";
import { Wh } from "../905/968269";
import { Y } from "../905/696438";
import { nF } from "../905/350402";
let $$l5 = NC("TOOLTIP_SET_TARGET_REF");
let $$d2 = NC("TOOLTIP_UPDATE");
let c = nF((e, t) => {
  let i = e.getState();
  null !== i.tooltip.timeoutID && i.tooltip.timeoutID != t.tooltip.timeoutID && clearTimeout(i.tooltip.timeoutID);
  e.dispatch($$d2(t));
});
let $$u4 = nF(e => {
  let t = e.getState();
  e.dispatch(c({
    tooltip: {
      ...t.tooltip,
      timeoutID: null
    }
  }));
});
let $$p0 = nF((e, t) => {
  let i = e.getState();
  if (null === i.tooltip.timeoutID) {
    let n = setTimeout(() => {
      e.dispatch($$m3());
    }, t.timeoutDelay);
    e.dispatch(c({
      tooltip: {
        ...i.tooltip,
        timeoutID: n
      }
    }));
  }
});
let $$m3 = nF(e => {
  g(!1);
  e.dispatch(c({
    tooltip: {
      state: zr.NONE,
      position: Zj.BELOW,
      target: null,
      targetRect: void 0,
      timeoutID: null,
      interactive: !1
    }
  }));
});
let $$h1 = nF((e, t) => {
  g(!0);
  e.dispatch(c({
    tooltip: {
      state: zr.SHOWING,
      position: t.position,
      target: t.target,
      tipAlign: t.tipAlign,
      targetRect: t.targetRect,
      timeoutID: null,
      maxWidth: t.maxWidth,
      maxLines: t.maxLines,
      interactive: t.interactive,
      lightMode: t.lightMode,
      textAlign: t.textAlign,
      hideImmediately: t.hideImmediately,
      hideAfterDelay: t.hideAfterDelay
    }
  }));
});
function g(e) {
  Y.instance[Wh.INSPECT]?.updateState({
    stopPointerEvents: e
  });
  Y.instance[Wh.MODAL]?.updateState({
    stopPointerEvents: e
  });
}
export let $$f6 = nF((e, t) => {
  let i = setTimeout(() => {
    e.dispatch($$h1({
      target: t.target,
      targetRect: t.targetRect,
      position: t.position,
      tipAlign: t.tipAlign,
      maxWidth: t.maxWidth,
      maxLines: t.maxLines,
      interactive: t.interactive,
      lightMode: t.lightMode,
      textAlign: t.textAlign,
      hideImmediately: t.hideImmediately,
      hideAfterDelay: t.hideAfterDelay
    }));
  }, t.timeoutDelay);
  e.dispatch(c({
    tooltip: {
      state: zr.PENDING,
      position: t.position,
      tipAlign: t.tipAlign,
      target: t.target,
      targetRect: t.targetRect,
      timeoutID: i,
      maxWidth: t.maxWidth,
      maxLines: t.maxLines,
      interactive: t.interactive,
      lightMode: t.lightMode,
      textAlign: t.textAlign,
      hideImmediately: t.hideImmediately,
      hideAfterDelay: t.hideAfterDelay
    }
  }));
});
export const ac = $$p0;
export const eB = $$h1;
export const fW = $$d2;
export const jD = $$m3;
export const kA = $$u4;
export const pP = $$l5;
export const xE = $$f6;