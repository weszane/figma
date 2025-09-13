import { createActionCreator } from '../905/73481';
import { StatusEnum, PositionEnum } from '../905/129884';
import { createOptimistThunk } from '../905/350402';
import { Y } from '../905/696438';
import { PluginIframeMode } from '../905/968269';
let $$l5 = createActionCreator('TOOLTIP_SET_TARGET_REF');
let $$d2 = createActionCreator('TOOLTIP_UPDATE');
let c = createOptimistThunk((e, t) => {
  let i = e.getState();
  i.tooltip.timeoutID !== null && i.tooltip.timeoutID != t.tooltip.timeoutID && clearTimeout(i.tooltip.timeoutID);
  e.dispatch($$d2(t));
});
let $$u4 = createOptimistThunk(e => {
  let t = e.getState();
  e.dispatch(c({
    tooltip: {
      ...t.tooltip,
      timeoutID: null
    }
  }));
});
let $$p0 = createOptimistThunk((e, t) => {
  let i = e.getState();
  if (i.tooltip.timeoutID === null) {
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
let $$m3 = createOptimistThunk(e => {
  g(!1);
  e.dispatch(c({
    tooltip: {
      state: StatusEnum.NONE,
      position: PositionEnum.BELOW,
      target: null,
      targetRect: void 0,
      timeoutID: null,
      interactive: !1
    }
  }));
});
let $$h1 = createOptimistThunk((e, t) => {
  g(!0);
  e.dispatch(c({
    tooltip: {
      state: StatusEnum.SHOWING,
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
  Y.instance[PluginIframeMode.INSPECT]?.updateState({
    stopPointerEvents: e
  });
  Y.instance[PluginIframeMode.MODAL]?.updateState({
    stopPointerEvents: e
  });
}
export let $$f6 = createOptimistThunk((e, t) => {
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
      state: StatusEnum.PENDING,
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