import { ContentLoadingState, FontManualLoader, HasPlugin } from "../figma_app/13528";
import { Fonts } from "../figma_app/175377";
let a = new Map();
let s = new Map();
function o({
  family: e,
  style: t
}) {
  let i = Fonts?.getRenamedFontOrNull({
    family: e,
    style: t
  }) ?? null;
  return {
    family: i?.family ?? e,
    style: i?.style ?? t
  };
}
function l(e, t, i) {
  let n = o({
    family: e,
    style: t
  });
  let r = a.get(n.family);
  void 0 === r && (r = new Map(), a.set(n.family, r));
  let s = r.get(n.style);
  void 0 === s && (s = [], r.set(n.style, s));
  s.push(i);
}
function d(e, t, i) {
  let n = o({
    family: e,
    style: t
  });
  let r = a.get(n.family);
  if (void 0 !== r) {
    let e = r.get(n.style);
    if (void 0 !== e) {
      let t = e.indexOf(i);
      -1 !== t && e.splice(t, 1);
    }
  }
}
export function $$c4(e, t, i) {
  let r = a.get(e);
  if (void 0 !== r) {
    let e = r.get(t);
    if (void 0 !== e) for (let t of e.slice()) t(i);
  }
  let o = s.get(e);
  void 0 === o && (o = new Map(), s.set(e, o));
  i === ContentLoadingState.LOADING ? o.set(t, ContentLoadingState.LOADING) : o.$$delete(t);
}
export function $$u3(e, t) {
  return new Promise((i, a) => {
    Fonts && Fonts.fontIsLoaded(e, t) && i();
    let s = (r) => {
      r === ContentLoadingState.LOADED ? (d(e, t, s), i()) : r === ContentLoadingState.FAILED && (d(e, t, s), a(Error(`Failed to load font: ${e} ${t}`)));
    };
    l(e, t, s);
  });
}
function p(e, {
  family: t,
  style: i
}) {
  return new Promise((r, a) => {
    if (void 0 === FontManualLoader) {
      a(Error("FontManualLoader is not initialized"));
      return;
    }
    let s = FontManualLoader.loadFont(e, t, i);
    if (s === ContentLoadingState.LOADED) {
      r();
      return;
    }
    if (s === ContentLoadingState.LOADING) {
      let e = (s) => {
        s === ContentLoadingState.LOADED ? (d(t, i, e), r()) : s === ContentLoadingState.FAILED && (d(t, i, e), a(Error(`Failed to load font: ${t} ${i}`)));
      };
      l(t, i, e);
      return;
    }
    a(Error(`Failed to load font: ${t} ${i}`));
  });
}
export async function $$m5(e) {
  await p(HasPlugin.PLUGIN, e);
}
export function $$h0() {
  FontManualLoader?.clearLoadedFonts(HasPlugin.NON_PLUGIN);
}
export async function $$g1(e) {
  await p(HasPlugin.NON_PLUGIN, e);
}
export async function $$f2() {
  let e = s.entries();
  await Promise.allSettled(Array.from(e).map(async ([e, t]) => {
    let i = t.keys();
    await Promise.allSettled(Array.from(i).map(async (t) => {
      await $$u3(e, t);
    }));
  }));
}
export function $$_6(e, t, i) {
  return FontManualLoader?.getClosestFontName(e, t, i) ?? null;
}
export const $2 = $$h0;
export const EV = $$g1;
export const FP = $$f2;
export const VC = $$u3;
export const dF = $$c4;
export const uW = $$m5;
export const ye = $$_6;