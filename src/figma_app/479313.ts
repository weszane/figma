import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { k } from "../905/44647";
import { O } from "../905/969533";
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import l from "classnames";
import { GG } from "../905/511649";
import { Kk, Sq, jA, MJ, RO } from "../905/127603";
var d = l;
export function $$p3(e) {
  let t = useMemo(() => atom(!0), []);
  let [r, n] = useAtomValueAndSetter(e || t);
  return useCallback(() => {
    e && n(!1);
  }, [e, n]);
}
export function $$_2({
  isPanelBodyCollapsedAtom: e
}) {
  let t = useMemo(() => atom(!0), []);
  let r = useAtomWithSubscription(e || t);
  return jsx("div", {
    className: d()(Kk, {
      [Sq]: null === e
    }),
    children: r ? jsx(k, {}) : jsx(O, {})
  });
}
export function $$h1({
  isPanelBodyCollapsedAtom: e,
  children: t,
  recordingKey: r
}) {
  return e ? jsx(m, {
    isPanelBodyCollapsedAtom: e,
    children: t,
    recordingKey: r
  }) : jsx(Fragment, {
    children: t
  });
}
function m({
  isPanelBodyCollapsedAtom: e,
  children: t,
  recordingKey: r
}) {
  let [i, a] = useAtomValueAndSetter(e);
  return jsx(GG, {
    className: d()(jA, {
      [MJ]: i
    }),
    onMouseDown: () => {
      a(!i);
    },
    recordingKey: r,
    children: t
  });
}
export function $$g0({
  isPanelBodyCollapsedAtom: e,
  children: t
}) {
  return e ? jsx(f, {
    isPanelBodyCollapsedAtom: e,
    children: t
  }) : jsx(Fragment, {
    children: t
  });
}
function f({
  isPanelBodyCollapsedAtom: e,
  children: t
}) {
  let r = useAtomWithSubscription(e);
  return jsx("div", {
    className: r ? RO : void 0,
    children: t
  });
}
export const JH = $$g0;
export const Tu = $$h1;
export const r2 = $$_2;
export const y5 = $$p3;