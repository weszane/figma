import { useMemo, useEffect } from "react";
import { m1T, w3z, Ez5, NLJ } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { Rs } from "../figma_app/288654";
import { Kv } from "../figma_app/544649";
import { m0 } from "../figma_app/976749";
import { p8, dH } from "../figma_app/722362";
import { tS } from "../figma_app/516028";
import { SQ7, Znl, XDd } from "../figma_app/43951";
import { ut } from "../figma_app/84367";
export function $$_2() {
  let e = tS();
  let t = Rs(SQ7, {
    key: e || ""
  }, {
    enabled: !!e
  });
  return !!t.data?.file && "error" !== t.data.file.status && (t.data?.file?.data?.hasPermission ?? !1);
}
export function $$h1() {
  let e = tS();
  let t = Rs(Znl, {
    key: e || ""
  }, {
    enabled: !!e
  });
  return !!t.data?.file && "error" !== t.data.file.status && (t.data?.file?.data?.hasPermission ?? !1);
}
export function $$m4() {
  let e = p8("isReadOnly");
  let t = p8("activeCanvasEditModeType");
  let r = $$h1();
  let a = Kv();
  return useMemo(() => r && (!e || t === m1T.DEV_HANDOFF) && !a, [e, t, r, a]);
}
export function $$g0() {
  let e = $$_2();
  let t = $$m4();
  let r = function () {
    let e = tS();
    let t = Rs(XDd, {
      key: e || ""
    }, {
      enabled: !!e
    });
    return !!t.data?.file && "error" !== t.data.file.status && (t.data?.file?.data?.hasPermission ?? !1);
  }();
  useEffect(() => {
    w3z && w3z.setAnnotationsPermissions(e, t, r);
  }, [e, t, r]);
}
export function $$f3() {
  let e = dH();
  let t = m0();
  let r = $$_2();
  let n = ut(Ez5?.uiState().showAnnotationsInDevMode, !0);
  let s = ut(Ez5?.uiState().alwaysExpandAnnotations, !0);
  let o = e === NLJ.ANNOTATE || e === NLJ.MEASURE;
  if (e === NLJ.DROPPER_COLOR) ;else if (t) {
    if (n || e === NLJ.ANNOTATE) return !0;
  } else if (r) {
    if (getFeatureFlags().dt_annotations_always_expand) {
      if (n || e === NLJ.ANNOTATE) return !0;
    } else if (s || o) return !0;
  }
  return !1;
}
export const J2 = $$g0;
export const L4 = $$h1;
export const LZ = $$_2;
export const iW = $$f3;
export const s9 = $$m4;