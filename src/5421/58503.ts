import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { A as _$$A } from "../905/251970";
import { setupThemeContext } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomValueAndSetter } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { KD } from "../figma_app/975811";
import { Um } from "../905/848862";
import { createTrackedAtom } from "../figma_app/615482";
import { FormattedInputVariant1 } from "../905/203369";
import { l6, c$ } from "../905/794875";
var g = (e => (e.ANDROID_COMPACT = "ANDROID_COMPACT", e.ANDROID_MEDIUM = "ANDROID_MEDIUM", e.CUSTOM = "CUSTOM", e.IPHONE_16 = "IPHONE_16", e.IPHONE_16_PRO = "IPHONE_16_PRO", e.IPHONE_16_PRO_MAX = "IPHONE_16_PRO_MAX", e.IPHONE_16_PLUS = "IPHONE_16_PLUS", e.IPHONE_SE = "IPHONE_SE", e))(g || {});
let $$y2 = {
  ANDROID_COMPACT: {
    width: 412,
    height: 917
  },
  ANDROID_MEDIUM: {
    width: 700,
    height: 840
  },
  CUSTOM: {
    width: void 0,
    height: void 0
  },
  IPHONE_16: {
    width: 393,
    height: 852
  },
  IPHONE_16_PRO: {
    width: 402,
    height: 874
  },
  IPHONE_16_PRO_MAX: {
    width: 440,
    height: 956
  },
  IPHONE_16_PLUS: {
    width: 430,
    height: 932
  },
  IPHONE_SE: {
    width: 320,
    height: 568
  }
};
let f = "IPHONE_16";
let $$_8 = createTrackedAtom(!1);
let b = createTrackedAtom(f);
let $$v5 = createTrackedAtom($$y2[f].height || 852);
let $$I10 = createTrackedAtom($$y2[f].width || 393);
let $$C9 = createTrackedAtom(1);
export function $$E0() {
  let e = Xr($$_8);
  let t = Xr(b);
  let n = Xr($$v5);
  let o = Xr($$I10);
  return useCallback(() => {
    e(!1);
    t(f);
    n($$y2[f].height || 852);
    o($$y2[f].width || 393);
  }, [e, t, n, o]);
}
let $$j6 = 320;
let $$N4 = 320;
let $$T1 = 3e3;
let $$S7 = 3e3;
export function $$A3() {
  let e = useDispatch();
  let [t, n] = useAtomValueAndSetter($$_8);
  let [h, g] = useAtomValueAndSetter($$v5);
  let [C, E] = useAtomValueAndSetter($$I10);
  let [A, w] = useAtomValueAndSetter(b);
  let k = Um();
  let P = jsx(_$$A, {
    className: "x52n8ys"
  });
  let O = useCallback(e => {
    e && g(Math.min(Math.max(e, $$j6), $$T1));
  }, [g]);
  let L = useCallback(e => {
    e && E(Math.min(Math.max(e, $$N4), $$S7));
  }, [E]);
  let D = useCallback(e => {
    w(e);
    let t = $$y2[e];
    L(t?.width);
    O(t?.height);
  }, [O, L, w]);
  if (useEffect(() => {
    C !== $$y2[A]?.width && D("CUSTOM");
  }, [A, C, D]), !getFeatureFlags().bake_mobile_preview || !t) return null;
  let R = {
    ANDROID_COMPACT: getI18nString("figmake.mobile_preview.options.android_compact"),
    ANDROID_MEDIUM: getI18nString("figmake.mobile_preview.options.android_medium"),
    CUSTOM: getI18nString("figmake.mobile_preview.options.custom"),
    IPHONE_16: getI18nString("figmake.mobile_preview.options.iphone_16"),
    IPHONE_16_PRO: getI18nString("figmake.mobile_preview.options.iphone_16_pro"),
    IPHONE_16_PRO_MAX: getI18nString("figmake.mobile_preview.options.iphone_16_pro_max"),
    IPHONE_16_PLUS: getI18nString("figmake.mobile_preview.options.iphone_16_plus"),
    IPHONE_SE: getI18nString("figmake.mobile_preview.options.iphone_se")
  };
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x1n2onr6 x1qughib xxk0z11 x1yjdb4r xso031l x1y0btm7 x7z60cl xe8ttls",
    children: [jsx("div", {
      className: "x78zum5 x6s0dn4 x1i9suas x1ncir08 x2lah0s",
      children: jsx(l6, {
        dispatch: e,
        dropdownAlignment: "left",
        dropdownShown: k,
        dropdownWidth: 240,
        formatter: {
          format: e => R[e ?? f]
        },
        id: "mobile-preview-option",
        neverConstrain: !0,
        onChange: e => {
          D(e);
        },
        openBelowTarget: !0,
        property: A ?? f,
        children: Object.entries($$y2).map(([e]) => {
          let t = $$y2[e].width;
          let n = $$y2[e].height;
          return jsx(c$, {
            value: e,
            selected: A === e,
            children: jsxs("div", {
              className: "x11r6d5e xh8yej3 x140o2bo",
              children: [jsx("div", {
                className: "x1n9xxwz xxymvpz xb3r6kr xlyipyv xuxw1ft xygnafs",
                children: R[e]
              }), t && n ? jsx(setupThemeContext, {
                mode: "dark",
                children: jsx("div", {
                  className: "x1n9xxwz xxymvpz x1hr2gdg x1n0bwc9 xuxw1ft",
                  children: getI18nString("figmake.mobile_preview.labels.aspect_ratio", {
                    width: t,
                    height: n
                  })
                })
              }) : null]
            })
          }, e);
        })
      })
    }), jsxs("div", {
      className: "x10l6tqk x1nrll8i xwa60dl x11lhmoz x78zum5 x167g77z x1vjfegm",
      children: [jsxs("div", {
        className: "x1n2onr6 x29ncy0 x1rg5ohu",
        children: [jsx("span", {
          className: "x10l6tqk xncym2f x19up5dg xwa60dl x1cb1t30 x52n8ys x47corl x1j6dyjg x1vjfegm",
          children: getI18nString("figmake.mobile_preview.labels.width")
        }), jsx(FormattedInputVariant1, {
          className: "xd3ty66 x1v8gsql xfj9a5l x1et26g5 x3sae66 x177gm3j xl0cjzi",
          property: C,
          formatter: new KD(),
          allowEmpty: !1,
          autoFocus: !1,
          disabled: !1,
          onChange: e => {
            L(e);
          }
        })]
      }), jsxs("div", {
        className: "x1n2onr6 x29ncy0 x1rg5ohu",
        children: [jsx("span", {
          className: "x10l6tqk xncym2f x19up5dg xwa60dl x1cb1t30 x52n8ys x47corl x1j6dyjg x1vjfegm",
          children: getI18nString("figmake.mobile_preview.labels.height")
        }), jsx(FormattedInputVariant1, {
          className: "xd3ty66 x1v8gsql xfj9a5l x1et26g5 x3sae66 x177gm3j xl0cjzi",
          property: h,
          formatter: new KD(),
          allowEmpty: !1,
          autoFocus: !1,
          disabled: !1,
          onChange: e => {
            O(e);
          }
        })]
      })]
    }), jsx("button", {
      className: "x78zum5 x6s0dn4 xl56j7k x1td3qas x10w6t97 x2lah0s xjbqb8w xv2f06h x12oqio5 x1t3whoi",
      onClick: () => n(!1),
      children: P
    })]
  });
}
export const $q = $$E0;
export const L9 = $$T1;
export const WW = $$y2;
export const Yd = $$A3;
export const Yh = $$N4;
export const dD = $$v5;
export const fw = $$j6;
export const g_ = $$S7;
export const gn = $$_8;
export const sH = $$C9;
export const u3 = $$I10;