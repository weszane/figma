import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useEffect, useState } from "react";
import { jXp } from "../figma_app/763686";
import { rO } from "../905/535224";
import { XHR } from "../905/910117";
import { B, V } from "../905/714743";
import { fj, Aw } from "../905/690539";
import { q9 } from "../905/698759";
let u = "font_preview--scaledFontPreview--hDNAV";
let p = "font_preview--fontPreviewFallback--tsAoK ellipsis--ellipsis--Tjyfa text--fontPos15--IR8IB text--_fontBase--QdLsd";
export var $$m1 = (e => (e[e.IS_LOADING = 0] = "IS_LOADING", e[e.LOADED = 1] = "LOADED", e[e.NO_PREVIEW = 2] = "NO_PREVIEW", e))($$m1 || {});
let h = e => !e.startsWith("<svg") || e.includes('width="inf"') || e.includes('height="inf"') || e.includes('data-scale="inf"');
export function $$g0({
  fontItem: e,
  setPreviewState: t,
  hasFetchedGoogleFontPreviews: i,
  fallbackClass: s,
  fallbackUnloadedGooglePreview: o
}) {
  let m = q9() && e.previewPath;
  e.source === jXp.GOOGLE && !i && o && (m = !1);
  let g = useMemo(() => {
    if (!m) return jsx("p", {
      "aria-hidden": !0,
      className: s ?? p,
      children: e.family
    });
    switch (e.source) {
      case jXp.LOCAL:
      case jXp.SHARED:
        return jsx(_, {
          fontItem: e,
          setPreviewState: t,
          fallbackClass: s
        });
      case jXp.GOOGLE:
        if (i) {
          if (e.previewSVG && !h(e.previewSVG) && !fj(e.family)) return jsx(B, {
            className: u,
            svg: V(e.previewSVG)
          });
          return jsx("p", {
            "aria-hidden": !0,
            className: s ?? p,
            children: e.family
          });
        }
    }
    return jsx(Fragment, {});
  }, [m, e, i, t, s]);
  useEffect(() => {
    m ? e.source === jXp.GOOGLE && i && (e.previewSVG && !h(e.previewSVG) ? t(1) : t(2)) : t(2);
  }, [m, e.previewSVG, e.source, i, g, t]);
  return g;
}
let f = {};
function _({
  fontItem: e,
  setPreviewState: t,
  fallbackClass: i
}) {
  let [c, m] = useState();
  let [g, _] = useState(!1);
  useEffect(() => {
    if (!e.previewPath || fj(e.family)) {
      _(!0);
      return;
    }
    if (f[e.previewPath]) {
      t(1);
      return;
    }
    try {
      (e.source === jXp.LOCAL ? rO(e.previewPath, {
        raw: !0
      }) : XHR.crossOriginGet(e.previewPath, null, {
        raw: !0
      })).then(t => {
        let i = Aw(e.family, t.data);
        m(i);
        f[e.previewPath] = i;
      }).catch(() => { }).$$finally(() => {
        _(!0);
      });
    } catch (e) {
      _(!0);
    }
    return () => {
      m(void 0);
      _(!1);
      t(0);
    };
  }, [e, t]);
  let A = c && !h(c);
  return (useEffect(() => {
    g && (c && A ? t(1) : t(2));
  }, [c, g, A, t]), e.previewPath && f[e.previewPath]) ? jsx(B, {
    className: u,
    svg: V(f[e.previewPath])
  }) : g ? A ? jsx(B, {
    className: u,
    svg: V(c)
  }) : jsx("p", {
    className: i ?? p,
    children: e.family
  }) : jsx(Fragment, {});
}
export const A = $$g0;
export const O = $$m1; 
