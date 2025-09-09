import { useMemo, useEffect } from "react";
import { LayoutTabType, HandoffBindingsCpp, AppStateTsApi, DesignGraphElements } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useSubscription } from "../figma_app/288654";
import { isDevModeFocusViewActive } from "../figma_app/544649";
import { m0 } from "../figma_app/976749";
import { p8, dH } from "../figma_app/722362";
import { useCurrentFileKey } from "../figma_app/516028";
import { FileCanViewAnnotations, FileCanEditAnnotations, FileCanViewAnnotationsMegadot } from "../figma_app/43951";
import { getObservableValue } from "../figma_app/84367";
export function $$_2() {
  let e = useCurrentFileKey();
  let t = useSubscription(FileCanViewAnnotations, {
    key: e || ""
  }, {
    enabled: !!e
  });
  return !!t.data?.file && "error" !== t.data.file.status && (t.data?.file?.data?.hasPermission ?? !1);
}
export function $$h1() {
  let e = useCurrentFileKey();
  let t = useSubscription(FileCanEditAnnotations, {
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
  let a = isDevModeFocusViewActive();
  return useMemo(() => r && (!e || t === LayoutTabType.DEV_HANDOFF) && !a, [e, t, r, a]);
}
export function $$g0() {
  let e = $$_2();
  let t = $$m4();
  let r = function () {
    let e = useCurrentFileKey();
    let t = useSubscription(FileCanViewAnnotationsMegadot, {
      key: e || ""
    }, {
      enabled: !!e
    });
    return !!t.data?.file && "error" !== t.data.file.status && (t.data?.file?.data?.hasPermission ?? !1);
  }();
  useEffect(() => {
    HandoffBindingsCpp && HandoffBindingsCpp.setAnnotationsPermissions(e, t, r);
  }, [e, t, r]);
}
export function $$f3() {
  let e = dH();
  let t = m0();
  let r = $$_2();
  let n = getObservableValue(AppStateTsApi?.uiState().showAnnotationsInDevMode, !0);
  let s = getObservableValue(AppStateTsApi?.uiState().alwaysExpandAnnotations, !0);
  let o = e === DesignGraphElements.ANNOTATE || e === DesignGraphElements.MEASURE;
  if (e === DesignGraphElements.DROPPER_COLOR) ;else if (t) {
    if (n || e === DesignGraphElements.ANNOTATE) return !0;
  } else if (r) {
    if (getFeatureFlags().dt_annotations_always_expand) {
      if (n || e === DesignGraphElements.ANNOTATE) return !0;
    } else if (s || o) return !0;
  }
  return !1;
}
export const J2 = $$g0;
export const L4 = $$h1;
export const LZ = $$_2;
export const iW = $$f3;
export const s9 = $$m4;