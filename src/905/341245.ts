import { useId, useCallback, useRef, useEffect } from "react";
import { Xr } from "../figma_app/27355";
import { KeyCodes } from "../905/63728";
import { TT, Bw } from "../figma_app/604494";
import { TH } from "../figma_app/171177";
export function $$l1({
  primaryAction: e,
  secondaryAction: t,
  tertiaryAction: i,
  focusAction: a,
  active: o,
  actionLabel: l = !0,
  target: c
}) {
  let u = useId();
  let p = Xr(TT);
  let m = Xr(Bw);
  let h = useCallback(() => {
    e?.onAction?.({
      shortcut: null,
      target: c
    });
  }, [c, e]);
  $$d0({
    action: e,
    target: c,
    active: o
  });
  $$d0({
    action: t,
    target: c,
    active: o
  });
  $$d0({
    action: i,
    target: c,
    active: o
  });
  let g = useCallback(() => {
    m(e => {
      let t = {
        ...e
      };
      delete t[u];
      return t;
    });
  }, [u, m]);
  let f = useRef(!1);
  useEffect(() => {
    o && !f.current && a?.onAction && a.onAction({
      shortcut: null,
      target: c
    });
    f.current = o;
  }, [o, a, c]);
  useEffect(() => (o ? (p(u), m(n => ({
    ...n,
    [u]: {
      primaryAction: e,
      secondaryAction: t,
      tertiaryAction: i,
      label: l,
      target: c
    }
  }))) : g(), () => {
    g();
  }), [o, l, u, c, e, g, t, i, a, m, p]);
  return {
    onClickCallback: h
  };
}
export function $$d0({
  action: e,
  target: t,
  active: i
}) {
  TH(e?.shortcuts ?? [{
    key: KeyCodes.ENTER
  }], (i, n) => {
    e && e.onAction && (e.allowDefault || i.preventDefault(), e.onAction({
      shortcut: n,
      target: t
    }));
  }, !!e?.onAction && i);
}
export const I = $$d0;
export const k = $$l1;