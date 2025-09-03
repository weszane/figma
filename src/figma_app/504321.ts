import { throwTypeError } from "../figma_app/465776";
export function $$i1(e) {
  return `.${e.className.replace(/([ .#,:\[\]()])/g, "\\$1")} { ${e.cssRules.map(e => `${e.property}: ${e.value};`).join(" ")} }`;
}
export function $$a4({
  existingClassNames: e,
  classToStyles: t,
  classToAdd: r
}) {
  let n = e.split(/\s+/).filter(Boolean);
  let i = new Set();
  for (let e of r.cssRules) if (e.propertiesExpandedFromShorthand.length > 0) for (let t of e.propertiesExpandedFromShorthand) i.add(t);else i.add(e.property);
  let a = null;
  let s = [];
  for (let e of n) {
    let r = t.get(e);
    if (!r) {
      s.push(e);
      continue;
    }
    switch (function (e, t) {
      let r = 0;
      for (let n of Object.keys(e.styles)) t.has(n) && (r += 1);
      return 0 === r ? "no_overlap" : r === Object.keys(e.styles).length ? "new_class_entirely_replaces" : "new_class_partially_replaces";
    }(r, i)) {
      case "no_overlap":
        s.push(e);
        break;
      case "new_class_entirely_replaces":
        "tailwind" === r.type ? a = s.length : (s.push(e), a = null);
        break;
      case "new_class_partially_replaces":
        s.push(e);
        a = null;
    }
  }
  null === a ? s.push(r.className) : s.splice(a, 0, r.className);
  return s.join(" ");
}
export function $$s3({
  classNames: e,
  classToStyles: t,
  propertiesToReset: r
}) {
  for (let n of e.split(/\s+/).filter(Boolean)) {
    let e = t.get(n);
    if (e && "tailwind" === e.type) {
      for (let t of Object.keys(e.styles)) if (r.includes(t)) return !0;
    }
  }
  return !1;
}
export function $$o2({
  existingClassNames: e,
  classToStyles: t,
  propertiesToReset: r
}) {
  let n = new Set(r);
  let i = e.split(/\s+/).filter(Boolean);
  let a = [];
  for (let e of i) {
    let r = t.get(e);
    if (!r || "tailwind" !== r.type) {
      a.push(e);
      continue;
    }
    let i = !1;
    for (let e of Object.keys(r.styles)) if (n.has(e)) {
      i = !0;
      break;
    }
    i || a.push(e);
  }
  return a.join(" ");
}
export function $$l0(e) {
  if (!e.editingInfo.definitelyHasNoStyleAttribute) return !1;
  switch (e.editingInfo.classNameAttribute.type) {
    case "static":
    case "not-set":
      return !0;
    case "dynamic":
    case "dynamic-identifier":
    case "unknown":
      return !1;
    default:
      throwTypeError(e.editingInfo.classNameAttribute);
  }
}
export const $5 = $$l0;
export const L_ = $$i1;
export const Lh = $$o2;
export const Rg = $$s3;
export const t8 = $$a4;