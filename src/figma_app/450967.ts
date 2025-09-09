import { useMemo, useEffect } from "react";
import { Z } from "../905/829242";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen, Fonts, AppStateTsApi } from "../figma_app/763686";
import { useMemoStable } from "../905/19536";
import { reportError } from "../905/11";
import { eY } from "../figma_app/722362";
import { Fk } from "../figma_app/167249";
import { Xo } from "../figma_app/687767";
import { B } from "../905/118396";
var $$n0;
export function $$m1({
  themeId: e,
  styleId: t,
  options: r,
  onPreviewGenerated: n
}) {
  let i = function (e) {
    let t = Fk((e, t) => {
      let r;
      let n = e.get(t);
      if (!n) return;
      let i = n.fontSize;
      let a = n.lineHeightOrMixed;
      if ("mixed" === a) r = i;else switch (a.units) {
        case "RAW":
          r = i * a.value;
          break;
        case "PIXELS":
          r = a.value;
          break;
        case "PERCENT":
          r = i * a.value / 100;
      }
      return {
        name: n.name,
        fontFamily: n.fontName.family,
        fontStyle: n.fontName.style,
        fontSize: i,
        lineHeight: r
      };
    }, e);
    return useMemoStable(() => t, [t]);
  }(t);
  $$g2({
    themeId: e,
    styleId: t,
    styleMetadata: i,
    options: r,
    onPreviewGenerated: n
  });
}
export function $$g2({
  themeId: e,
  styleId: t,
  styleMetadata: r,
  options: n,
  onPreviewGenerated: o
}) {
  let d = function ({
    themeId: e,
    minPreviewHeight: t,
    maxPreviewHeight: r,
    defaultPreviewHeight: n
  }) {
    let a = function (e) {
      let t = Xo(e);
      let r = eY();
      return useMemo(() => {
        let e = t.map(e => r.get(e.node_id)?.fontSize).filter(isNotNullish);
        if (e.length) return {
          min: Math.min(...e),
          max: Math.max(...e)
        };
      }, [t, r]);
    }(e);
    return useMemo(() => {
      if (!a) return new class {
        getPreviewHeight(e) {
          return n;
        }
      }();
      let {
        min,
        max
      } = a;
      return new class {
        getPreviewHeight(a) {
          let s = function (e, t, r, n, i) {
            if (!(e < t) && !(e > r) && !(n >= i) && !(t >= r)) return (e - t) / (r - t) * (i - n) + n;
          }(a, min, max, t, r);
          return s ? Math.round(s) : n;
        }
      }();
    }, [a, t, r, n]);
  }({
    themeId: e,
    minPreviewHeight: n.minHeight,
    maxPreviewHeight: n.maxHeight,
    defaultPreviewHeight: Math.round((n.minHeight + n.maxHeight) / 2)
  });
  let {
    fontsAreLoading,
    checkFontsAreLoading
  } = B();
  useEffect(() => {
    checkFontsAreLoading();
  }, [r, checkFontsAreLoading]);
  useEffect(() => {
    let e = new AbortController();
    (async () => {
      if (fontsAreLoading || !Fullscreen || !Fonts) return;
      if (!r || !Fonts.fontIsLoaded(r.fontFamily, r.fontStyle)) {
        o(null);
        return;
      }
      let i = d.getPreviewHeight(r.fontSize);
      let s = r.name;
      n.maxWidth && (s = Fullscreen.truncateText(r.fontFamily, i, r.lineHeight * (i / r.fontSize), n.maxWidth, 1, s));
      let u = await Z(f({
        styleId: t,
        textToRender: s,
        textColor: n.color,
        styleMetadata: r
      }), e.signal);
      if (!u) {
        o(null);
        return;
      }
      o({
        preview: u,
        previewHeight: i
      });
    })();
    return () => e.abort();
  }, [fontsAreLoading, t, r, n, d, o]);
}
(e => {
  e.MIN_THEME_TEXT_STYLE_PREVIEW_HEIGHT = 12;
  e.MAX_THEME_TEXT_STYLE_PREVIEW_HEIGHT = 22;
})($$n0 || ($$n0 = {}));
let f = async ({
  styleId: e,
  textToRender: t,
  textColor: r,
  styleMetadata: n,
  maxRetries: i = 5,
  delayMs: a = 200
}) => {
  let s = "";
  for (let o = 1; o <= i; o++) {
    if (!AppStateTsApi) return null;
    try {
      let i = AppStateTsApi.slideThemeStylePreview().generateTextPreview(e, t, r, n.fontFamily, n.fontStyle);
      if (i && i.length > 0) return i;
      s = "empty_buffer";
      await new Promise(e => setTimeout(e, a));
    } catch (e) {
      console.warn(`Text preview generation attempt ${o} failed:`, e);
      s = e.message;
      await new Promise(e => setTimeout(e, a));
    }
  }
  let d = Error("Text preview generation failed after all retry attempts");
  reportError(_$$e.SLIDES, d, {
    extra: {
      styleId: e,
      textToRender: t,
      styleMetadata: n,
      attempts: i,
      failureReason: s
    }
  });
  return null;
};
export const KL = $$n0;
export const Z3 = $$m1;
export const oS = $$g2;