import { useRef, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { oU } from "../figma_app/273493";
import { daH, DV9 } from "../figma_app/763686";
import { Xr } from "../figma_app/27355";
import { tK, DA } from "../figma_app/191804";
import { Eg } from "../figma_app/583114";
import { ZC } from "../figma_app/39751";
import { WB } from "../905/761735";
import { IT } from "../figma_app/566371";
import { GI, IZ, ez, lC, U9, qL } from "../905/125333";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { tS } from "../figma_app/516028";
import { nD6 } from "../figma_app/43951";
import { _ as _$$_ } from "../905/613917";
import { canViewTeam } from "../figma_app/642025";
import { cD } from "../figma_app/598018";
import { fJ, Yv } from "../figma_app/616107";
import { v as _$$v } from "../figma_app/314838";
import { D } from "../905/347702";
import { XQ, Dq, n6, ns, T7, E$ } from "../figma_app/285009";
import { zS, Ku, BV, Qe } from "../figma_app/153399";
import { Qv, $R, zd, Ze } from "../figma_app/967873";
export function $$N2() {
  let e = tS();
  let t = useDispatch();
  let r = Xr(Qv);
  return (n, i, a) => {
    e && (r(i), WB().optimisticallyUpdate({}, _$$v.setUserColorPaletteOverrideForFile(e, n)).catch(e => {
      console.error(e);
      a || t(F.enqueue({
        message: _$$t("fullscreen.color_palette.apply_palette_failure")
      }));
    }).$$finally(() => {
      r(0);
    }));
  };
}
export function $$C4() {
  let e = tS() || "";
  let [t] = IT(nD6({
    fileKey: e
  }), {
    enabled: !!e
  });
  let r = t.data?.file;
  if ("loaded" === t.status && r && r.defaultColorPaletteData?.colorPalette) return r.defaultColorPaletteData.colorPalette;
}
export let $$w7 = D(() => {
  let e = tS();
  let [t] = IT(nD6({
    fileKey: e || ""
  }), {
    enabled: !!e
  });
  let {
    loadedPaletteVariations,
    loadedColorPalette
  } = function (e) {
    let t = useRef();
    let {
      uuid,
      palette
    } = function (e) {
      let t = {
        uuid: fJ,
        palette: void 0
      };
      let r = e.data?.file;
      if ("loaded" !== e.status || !r) return t;
      if (r.userColorPaletteOverrideData) {
        let e = r.userColorPaletteOverrideData.colorPaletteUuid;
        if (e === fJ) return t;
        if (r.userColorPaletteOverrideData.colorPalette) return {
          uuid: e,
          palette: r.userColorPaletteOverrideData.colorPalette
        };
      }
      return r.defaultColorPaletteData?.colorPalette ? {
        uuid: r.defaultColorPaletteData.colorPaletteUuid,
        palette: r.defaultColorPaletteData.colorPalette
      } : t;
    }(e);
    t.current = palette;
    let a = palette?.baseColors.join(":") || "";
    return useMemo(() => {
      let n;
      let i;
      let s = t.current;
      "loaded" === e.status && s && uuid !== fJ && (n = $$R1(a.split(":")), i = Eg(n));
      return {
        loadedPaletteVariations: i,
        loadedColorPalette: s
      };
    }, [uuid, a, e.status]);
  }(t);
  let a = Xr($R);
  return (useEffect(() => {
    a(loadedPaletteVariations);
  }, [loadedPaletteVariations, a]), loadedColorPalette && loadedPaletteVariations) ? {
    type: Yv.CUSTOM,
    variations: loadedPaletteVariations,
    uuid: loadedColorPalette.uuid,
    name: loadedColorPalette.name,
    isTeamDefault: loadedColorPalette.isTeamDefault
  } : {
    type: Yv.DEFAULT,
    uuid: fJ
  };
});
function O(e) {
  return null !== e;
}
export function $$R1(e) {
  return e.map(e => tK(e)).filter(O);
}
export function $$L8(e, t) {
  let r = $$w7();
  return !!e && (r.type === Yv.CUSTOM ? 0 > r.variations[t].findIndex(t => DA(e, t)) : zS(e, t) === daH.CUSTOM);
}
export function $$P6(e, t) {
  return e && t;
}
export function $$D3() {
  let e = cD();
  let t = useSelector(t => _$$_(e, t));
  let r = useSelector(t => e && canViewTeam(e, t));
  return !!(t?.org_id && r);
}
export function $$k5(e, t) {
  return e && t;
}
export function $$M9() {
  let e = $$w7();
  let t = ZC(e.uuid);
  let r = e.type === Yv.CUSTOM ? zd(e) : null;
  let i = Xr(GI);
  let l = Xr(IZ);
  let d = Xr(ez);
  let u = Xr(lC);
  let p = Xr(U9);
  let h = Xr(qL);
  useEffect(() => {
    e.uuid !== t && (e.type === Yv.DEFAULT ? void 0 !== t && (i({
      paints: XQ
    }), l({
      paints: Dq
    }), d(n6), u(ns), p(T7), h(function () {
      let e = Math.floor(Math.random() * Ku().length);
      return BV(Ku()[e], "sticky") || E$();
    }()), DV9.setSectionToolColor(oU(function () {
      let e = Math.floor(Math.random() * Qe().length);
      return BV(Qe()[e], "baseLight") || BV(daH.BLUE_LIGHT, "baseLight");
    }()))) : r && (i({
      paints: [{
        type: "SOLID",
        color: r.pencilColor
      }]
    }), l({
      paints: [{
        type: "SOLID",
        color: r.highlighterColor
      }]
    }), d(r.shapeColor), h(r.stickyColor), DV9.setSectionToolColor(oU(r.sectionColor))));
  }, [e, t, r, i, l, d, u, p, h]);
}
export function $$F0(e) {
  let t = Xr(Ze);
  return {
    closeColorPalettePicker: useCallback((r = !1) => {
      r ? t(!0) : e(!1);
    }, [t, e]),
    openColorPalettePicker: useCallback(() => {
      e(!0);
    }, [e])
  };
}
export const $J = $$F0;
export const $v = $$R1;
export const Bw = $$N2;
export const US = $$D3;
export const VR = $$C4;
export const WR = $$k5;
export const X8 = $$P6;
export const Z9 = $$w7;
export const iN = $$L8;
export const qv = $$M9;