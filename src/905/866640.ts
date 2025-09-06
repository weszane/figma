import { c2 } from "../905/382883";
import { logError } from "../905/714362";
import { p as _$$p } from "../905/167135";
import { n as _$$n } from "../905/347702";
import { pT } from "../905/544659";
import { MI } from "../905/757052";
export async function $$d0(e, t, i) {
  let a = {
    fonts: {},
    images: {}
  };
  let s = new Map();
  let o = null;
  let d = e();
  for (let c = 0; c < 20 && (function (e, t) {
    let i = e => {
      if (!e) return;
      let {
        children,
        fillSrc,
        textStyle
      } = e.renderMetaData;
      if (textStyle && (p(t, textStyle.style), textStyle.ranges.forEach(e => p(t, e.style))), fillSrc && !t.images.hasOwnProperty(fillSrc) && (t.images[fillSrc] = {
        hasLoaded: !1
      }), children) for (let e of MI(children)) i(e);
    };
    i(e);
  }(d.rootNode, a), (Object.values(a.fonts).some(({
    hasLoaded: e
  }) => !e) || Object.values(a.images).some(({
    hasLoaded: e
  }) => !e)) && (await m(a, s, t, i)), o = d, d = e(), !c2(o?.syncedState, d.syncedState)); c++) 19 === c && logError("resources", "Loading reconciliation resources reached max iterations");
  return {
    imgInfoMap: s,
    vRoot: d
  };
}
async function c(e, t, i) {
  try {
    let n = await $$u2(e, i);
    let r = t.createImage(n).hash;
    let {
      width,
      height
    } = (await Promise.all([$$g1(n)]))[0];
    return {
      hash: r,
      width,
      height
    };
  } catch (e) {
    t.logWarning("Unable to load image. See the warning below for more info.");
    t.logWarning(e);
  }
  return null;
}
export let $$u2 = _$$n(async (e, t) => {
  if (function (e) {
    try {
      let t = new URL(e);
      return "http:" === t.protocol || "https:" === t.protocol;
    } catch (e) {
      return !1;
    }
  }(e)) {
    if (!pT(e, t)) throw Error(`Image URL ${e} does not satisfy the allowedDomains specified in the manifest.json`);
    e = _$$p(e);
  }
  let i = await fetch(e);
  if (!i.ok) throw Error(`Unable to fetch image. Response status: ${i.status}`);
  return new Uint8Array(await i.arrayBuffer());
});
function p(e, t) {
  let {
    fontName
  } = t;
  if (!fontName) return;
  let n = `${fontName.family} ${fontName.style}`;
  e.fonts.hasOwnProperty(n) || (e.fonts[n] = {
    fontName,
    hasLoaded: !1
  });
}
async function m(e, t, i, n) {
  let r = async e => {
    let r = await c(e, i, n);
    r && t.set(e, r);
  };
  let a = Object.values(e.fonts).filter(({
    hasLoaded: e
  }) => !e).map(async e => {
    await i.loadFontAsync(e.fontName);
    e.hasLoaded = !0;
  });
  let s = Object.entries(e.images).filter(([, {
    hasLoaded: e
  }]) => !e).map(async ([e, t]) => {
    await r(e);
    t.hasLoaded = !0;
  });
  await Promise.all([...a, ...s]);
}
let h = e => {
  let t = "";
  [].slice.call(new Uint8Array(e)).forEach(e => t += String.fromCharCode(e));
  return window.btoa(t);
};
export function $$g1(e) {
  return new Promise(t => {
    let i = new Image();
    i.onload = () => {
      t({
        width: i.width,
        height: i.height
      });
    };
    let n = h(e);
    i.src = "data:image;base64," + n;
  });
}
export const qg = $$d0;
export const vX = $$g1;
export const xF = $$u2;