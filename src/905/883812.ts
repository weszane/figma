import { throwTypeError } from "../figma_app/465776";
import { parsePxInt } from "../figma_app/783094";
import { b } from "../905/857767";
import { IZ, D$, rP, C3, Wn } from "../905/334362";
import { Rl, HU0 } from "../figma_app/27776";
let l = {
  [b.LibraryName]: new Map(),
  [b.HierarchyPathName]: new Map()
};
let d = new Map();
let c = {
  [b.LibraryName]: new Set(),
  [b.HierarchyPathName]: new Set()
};
let u = new Map();
export function $$p0(e, t, i) {
  if (e === b.LibraryName || e === b.HierarchyPathName) l[e].has(t) || c[e].add(t);else if (e === b.SlideThemeName) {
    if (d.get(t)?.has(i ?? "")) return;
    u.has(t) || u.set(t, new Set());
    u.get(t).add(i ?? "");
  }
}
export function $$m1() {
  let e = document.createElement("div");
  for (let t of [b.LibraryName, b.HierarchyPathName]) {
    for (let i of Array.from(c[t])) {
      let n = document.createElement("div");
      n.innerText = i;
      n.className = t === b.LibraryName ? IZ : D$;
      n.setAttribute("type", t);
      e.appendChild(n);
    }
    c[t].clear();
  }
  let t = new Map();
  for (let [i, n] of Array.from(u)) for (let r of Array.from(n)) {
    let n = function (e, t) {
      let i = document.createElement("div");
      i.className = rP;
      let n = document.createElement("div");
      if (n.innerText = e, n.className = C3, i.appendChild(n), t) {
        let e = document.createElement("div");
        e.innerText = t;
        e.className = Wn;
        i.appendChild(e);
      }
      return i;
    }(i, r);
    n.setAttribute("type", b.SlideThemeName);
    e.appendChild(n);
    t.has(i) || t.set(i, new Map());
    t.get(i).set(r, n);
  }
  u.clear();
  e.style.width = Rl;
  let i = document.body.appendChild(e);
  for (let e of i.children) {
    let t = e.getAttribute("type");
    (t === b.LibraryName || t === b.HierarchyPathName) && l[t].set(e.innerText, e.clientHeight);
  }
  for (let [e, i] of t.entries()) for (let [t, n] of (d.has(e) || d.set(e, new Map()), i.entries())) d.get(e).set(t, n.clientHeight);
  document.body.removeChild(i);
}
export function $$h2(e, t) {
  let i = 0;
  0 === t && (i += parsePxInt(HU0));
  t === e.length - 1 && (i += parsePxInt(HU0));
  let s = e[t];
  if (s.type === b.LibraryName) return i + (l[s.type].get(s.name) || 32);
  if (s.type === b.HierarchyPathName) return i + (l[b.HierarchyPathName].get(s.name) || 36);
  if (s.type === b.SlideThemeName) {
    let e = s.name;
    let t = s.secondaryText ?? "";
    return i + (d.get(e)?.get(t) || 32);
  }
  return s.type === b.StylesRow ? i + 32 : s.type === b.Separator ? i + 16 : void throwTypeError(s);
}
export const I = $$p0;
export const LB = $$m1;
export const kj = $$h2;