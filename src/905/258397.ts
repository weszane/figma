import { isNotNullish } from "../figma_app/95419";
export function $$r2(e) {
  return e.filter(Boolean).sort((e, t) => e.label.localeCompare(t.label));
}
export function $$a3(e, t) {
  return {
    ...e,
    children: $$r2([...t, ...e.children])
  };
}
export function $$s1(e, t) {
  return {
    label: e,
    value: t,
    children: [],
    expandByDefault: !1
  };
}
export function $$o4(e, t) {
  return {
    label: e,
    value: {
      type: "nonUserText",
      value: String(t)
    },
    children: [],
    expandByDefault: !1
  };
}
export function $$l0({
  label: e,
  value: t,
  list: i,
  generateChild: r,
  expandByDefault: a
}) {
  return {
    label: e,
    value: t ?? {
      type: "metadata",
      value: i.length
    },
    children: i.map((e, t) => r(`[${t}]`, e, t)).filter(isNotNullish),
    expandByDefault: a
  };
}
export function $$d5({
  label: e,
  value: t,
  object: i,
  generateChild: n,
  expandByDefault: a,
  showChildCount: s
}) {
  let o = $$r2(Object.entries(i).map(([e, t]) => n(e, t)));
  return {
    label: e,
    value: t || (s ? {
      type: "metadata",
      value: Object.keys(i).length
    } : 0 === o.length ? {
      type: "metadata",
      value: "empty object"
    } : void 0),
    children: o,
    expandByDefault: a
  };
}
export const $7 = $$l0;
export const B_ = $$s1;
export const QB = $$r2;
export const Sv = $$a3;
export const U1 = $$o4;
export const o8 = $$d5;