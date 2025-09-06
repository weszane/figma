import { ServiceCategories as _$$e } from "../905/165054";
import { l7 } from "../905/189185";
import { reportError } from "../905/11";
let s = "syncedState";
let o = `${s}:`;
let l = "syncedMap";
let d = `${l}:`;
export function $$c3(e, t) {
  let i = $$u1(e, t);
  let n = $$_7(e, t);
  return {
    ...i,
    ...n
  };
}
export function $$u1(e, t) {
  let i = "current" === e ? t?.getWidgetSyncedState() : t?.renderedSyncedState;
  let r = {};
  try {
    for (let e of Object.keys(i)) if (e.startsWith(o)) {
      let t = JSON.parse(i[e]);
      r[e.substring(o.length)] = t;
    }
    return r;
  } catch (e) {
    reportError(_$$e.EXTENSIBILITY, Error(`Invalid syncedState for widgetID=${t.widgetId}: ${e}`));
  }
  return {};
}
export function $$p8(e, t, i) {
  if (t && Object.keys(t).length > 0) {
    let i = {
      ...$$u1("current", e),
      ...t
    };
    Object.keys(i).forEach(t => {
      $$h4(e, t, i[t]);
    });
  }
  i && Object.keys(i).length > 0 && Object.keys(i).forEach(t => {
    Object.keys($$A6("current", e, t)).forEach(i => {
      $$b10(e, t, i);
    });
    let n = i[t];
    Object.keys(n).forEach(i => {
      $$y2(e, t, i, n[i]);
    });
  });
}
function m(e, t, i) {
  let n = JSON.stringify(i);
  if (void 0 === n) throw Error(`Invalid syncedState value for widgetID=${e?.widgetId} name=${t} value=${i}`);
  return n;
}
export function $$h4(e, t, i) {
  l7.plugin("set-widget-synced-state", () => e?.setWidgetSyncedState(`${s}:${t}`, m(e, t, i)));
}
export function $$g5(e, t, i) {
  l7.plugin("set-initial-widget-synced-state", () => e?.setInitialWidgetSyncedState(`${s}:${t}`, m(e, t, i)));
}
export function $$f0(e) {
  l7.plugin("clear-widget-synced-state", () => e?.clearWidgetSyncedState());
}
export function $$_7(e, t) {
  let i = "current" === e ? t?.getWidgetSyncedState() : t?.renderedSyncedState;
  let r = {};
  let s = new Set();
  try {
    for (let n of Object.keys(i)) if (n.startsWith(d)) {
      let [, i] = n.split(":", 3);
      s.has(i) || (s.add(i), r[i] = $$A6(e, t, i));
    }
    return r;
  } catch (e) {
    reportError(_$$e.EXTENSIBILITY, Error(`Invalid syncedMap values for widgetID=${t.widgetId}: ${e}`));
  }
  return {};
}
export function $$A6(e, t, i) {
  let r = ("current" === e ? t?.getWidgetSyncedState() : t?.renderedSyncedState) || {};
  let s = `${l}:${i}:`;
  let o = s.length;
  let d = {};
  try {
    for (let e of Object.keys(r)) if (e.startsWith(s)) {
      let t = JSON.parse(r[e]);
      d[e.substring(o)] = t;
    }
    return d;
  } catch (e) {
    reportError(_$$e.EXTENSIBILITY, Error(`Invalid syncedMap for widgetID=${t?.widgetId}, name=${i}`));
  }
  return {};
}
export function $$y2(e, t, i, n) {
  if (void 0 === (n = JSON.stringify(n))) throw Error(`Invalid syncedMap value for widgetID=${e?.widgetId} name=${t} key=${i} value=${n}`);
  e?.setWidgetSyncedState(`${l}:${t}:${i}`, n);
}
export function $$b10(e, t, i) {
  e?.deleteWidgetSyncedState(`${l}:${t}:${i}`);
}
export function $$v9(e, t, i) {
  e && ($$f0(e), $$p8(e, t, i));
}
export const LX = $$f0;
export const MN = $$u1;
export const Oi = $$y2;
export const RL = $$c3;
export const Yp = $$h4;
export const _U = $$g5;
export const hu = $$A6;
export const oj = $$_7;
export const rJ = $$p8;
export const sH = $$v9;
export const vH = $$b10;