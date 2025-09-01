import { eD } from "../figma_app/876459";
import { WH, pB, g7 } from "../905/395919";
export function $$a0(e) {
  let t = {};
  e.forEach((e, r) => {
    t[r] = e;
  });
  return {
    layoutJSON: t,
    detectedLayoutsWeb: WH.map(t => {
      let r = Object.entries(t.list).map(([t, r]) => null == r ? !(t in e) : e.get(t) === r).filter(e => !e).length;
      return {
        name: t.name,
        isValid: 0 === r
      };
    }).filter(e => e.isValid).map(e => e.name)
  };
}
export async function $$s2(e) {
  try {
    let e = null;
    if (eD && (e = await eD.getKeyboardLayout()), !window.isSecureContext) return {
      detectedLayouts: [],
      layoutJSON: {},
      desktopLayout: e,
      errorMessage: "Not in secure context, no navigator.keyboard object"
    };
    if (window.top !== window.self) return {
      detectedLayouts: [],
      layoutJSON: {},
      desktopLayout: e,
      errorMessage: "Not in top-level browser context, navigator.keyboard not available"
    };
    let t = navigator.keyboard;
    if (!t || !t.getLayoutMap) return {
      detectedLayouts: [],
      layoutJSON: {},
      desktopLayout: e,
      errorMessage: "No keyboard in navigator object"
    };
    let r = await t.getLayoutMap();
    let {
      detectedLayoutsWeb,
      layoutJSON
    } = $$a0(r);
    return {
      desktopLayout: e,
      detectedLayouts: detectedLayoutsWeb,
      layoutJSON
    };
  } catch (e) {
    console.error("Keyboard layout detection logging failed:", e);
    return {
      detectedLayouts: [],
      layoutJSON: {},
      desktopLayout: null,
      errorMessage: "Unknown failure"
    };
  }
}
export function $$o1(e) {
  return (e.desktopLayout ? pB(e.desktopLayout) : null) || (1 === e.detectedLayouts.length && g7[e.detectedLayouts[0]] ? g7[e.detectedLayouts[0]] : null);
}
export const $$ = $$a0;
export const ZN = $$o1;
export const dO = $$s2;