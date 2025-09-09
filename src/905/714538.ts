import { FontSourceType } from "../figma_app/763686";
import { addFontFamily } from "../905/240327";
import { Ts } from "../905/929976";
import { nN } from "../figma_app/91703";
import { X } from "../905/784599";
function l(e) {
  switch (e.source) {
    case FontSourceType.SHARED:
      return e.teamId ? 3 : 4;
    case FontSourceType.LOCAL:
      return 2;
    case FontSourceType.GOOGLE:
      return 1;
    default:
      return 0;
  }
}
export function $$d1(e) {
  let t;
  let i = -1;
  for (let [n, r] of Object.entries(e)) {
    let e = l(r);
    e > i && (i = e, t = n);
  }
  return t;
}
export function $$c0(e) {
  if (!e) return;
  let t = $$d1(e);
  if (void 0 !== t) return e[t];
}
export function $$u3(e) {
  let t = {};
  for (let i in e) for (let n in t[i] = t[i] || {}, e[i]) {
    let r = e[i][n].styles || {};
    for (let a in r) if (t[i][a]) {
      let r = t[i][a];
      let s = e[i][r];
      l(e[i][n]) > l(s) && (t[i][a] = n);
    } else t[i][a] = n;
  }
  return t;
}
let p = (e, t) => e.source === t.source && (e.source !== FontSourceType.SHARED || !!e.teamId == !!t.teamId && !!e.orgId == !!t.orgId);
function m(e) {
  return {
    weight: e.weight,
    stretch: e.stretch,
    italic: e.italic,
    postscript: e.postscript,
    sampleUrl: e.sampleUrl,
    previewUrl: e.previewUrl,
    id: e.id,
    variationAxes: e.variationAxes,
    modifiedAt: e.modifiedAt,
    userInstalled: e.userInstalled
  };
}
function h(e, t, i) {
  e[t] = {
    ...e[t]
  };
  e[t][i] && (e[t][i] = {
    ...e[t][i]
  }, e[t][i].styles = {
    ...e[t][i].styles
  });
}
function g(e, t) {
  let i = t.version || "";
  if ([t.family, i].reduce((e, t) => (e || {})[t], e)) {
    if (h(e, t.family, i), p(e[t.family][i], t)) {
      if (void 0 === t.variationAxes && e[t.family][i].styles[t.style] && void 0 !== e[t.family][i].styles[t.style].variationAxes) return;
      e[t.family][i].styles[t.style] = m(t);
      return;
    }
    if (!(l(t) > l(e[t.family][i]))) return;
    e[t.family][i] = {
      source: t.source,
      teamId: t.teamId,
      orgId: t.orgId,
      styles: {}
    };
  } else {
    e[t.family] = e[t.family] || {};
    e[t.family][i] = {
      source: t.source,
      teamId: t.teamId,
      orgId: t.orgId,
      styles: {}
    };
  }
  h(e, t.family, i);
  e[t.family][i].styles[t.style] = m(t);
}
export function $$f2(e = {}, t) {
  if (Ts.matches(t)) return Object.create(null);
  if (nN.matches(t)) {
    let i = {
      ...e
    };
    let n = new Set(t.payload.sources);
    for (let e in i) for (let t in i[e]) n.has(i[e][t].source) && (i[e] = {
      ...i[e]
    }, delete i[e][t], 0 === Object.keys(i[e]).length && delete i[e]);
    for (let e of [t.payload.localFontsList, t.payload.indexFontsList, t.payload.indexFakeFontsList, t.payload.sharedFontsList]) if (void 0 !== e) for (let t of e) {
      addFontFamily(t);
      g(i, t);
    }
    return i;
  }
  if (X.put.matches(t)) {
    let i = {
      ...e
    };
    g(i, t.payload.font);
    return i;
  }
  return e;
}
export const If = $$c0;
export const a = $$d1;
export const lG = $$f2;
export const pn = $$u3;