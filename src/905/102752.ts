import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import { trackEventAnalytics } from "../905/449184";
import { h } from "../905/207101";
import { H4 } from "../905/992467";
export function $$l0(e) {
  return {
    loading: () => null,
    error: H4.NONE,
    componentName: e
  };
}
let d = new Map();
export var $$c2 = (e => (e[e.NO = 0] = "NO", e[e.YES = 1] = "YES", e))($$c2 || {});
function u(e, t, i) {
  if (!t) throw Error("registerModal called for a component without a valid type");
  if (d.has(t)) throw Error(`a modal with type ${t} has already been registered`);
  d.set(t, {
    render: t => jsx(e, {
      ...t
    }),
    isLegacy: !1,
    supportsBackgroundVisible: 1 === i,
    preload: e?.preload
  });
  return {
    type: t
  };
}
export function $$p5(e) {
  let t = d.get(e);
  return t?.preload?.(!0);
}
let m = 0;
export function $$h1(e, t, i) {
  if ("string" == typeof t) return u(memo(function (i) {
    h(() => {
      trackEventAnalytics("modal_shown", {
        modal_id: t
      });
    });
    return jsx(e, {
      ...i
    });
  }), t, i);
  let o = `id:${e.displayName || m++}`;
  let l = memo(function (t) {
    h(() => {
      trackEventAnalytics("modal_shown", {
        modal_id: o
      });
    });
    return jsx(e, {
      ...t,
      _modalId: {
        type: o
      }
    });
  });
  l.preload = e.preload;
  return u(l, o, t?.supportsBackgroundVisible);
}
export function $$g4(e, t) {
  let i = {
    render: t,
    isLegacy: !0,
    supportsBackgroundVisible: !1,
    preload: t.preload
  };
  d.set(e, i);
  return e;
}
export function $$f3(e) {
  return d.get(e);
}
export const Ij = $$l0;
export const Ju = $$h1;
export const ZU = $$c2;
export const np = $$f3;
export const qK = $$g4;
export const xv = $$p5;