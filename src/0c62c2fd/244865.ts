import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { h as _$$h } from "../905/207101";
import { buildUploadUrl } from "../figma_app/169182";
import { tx } from "../905/303541";
import { S } from "../0c62c2fd/596856";
import { $ } from "../figma_app/61705";
import { Np } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { DP } from "../905/640017";
import { e as _$$e } from "../905/621515";
import { FFileType } from "../figma_app/191312";
import { N as _$$N } from "../figma_app/268271";
import { w as _$$w } from "../905/129046";
import { rq } from "../905/425180";
import { CBZ, qiY, TUm } from "../figma_app/6204";
import { O } from "../0c62c2fd/621155";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { A as _$$A } from "../905/920142";
import { r1 } from "../figma_app/545877";
import { eC } from "../905/539601";
import { E as _$$E } from "../0c62c2fd/358013";
let N = r1("has_created_figma_make_file");
export function $$C0({
  newFileFrom: e
}) {
  let t = function () {
    let e = _$$E();
    let t = getFeatureFlags().marketing_promo_modal_figmake_launch;
    let r = md(eC(CBZ.lifecycle));
    let a = md(N);
    let s = md(eC(qiY.lifecycle));
    return resourceUtils.all([e, r, a, s]).transform(([e, r, a, s]) => {
      if (t) {
        if (!r.lifecycleState || 0 === r.lifecycleState.count) return !1;
        let e = new Date(r.lifecycleState.updatedAt);
        if (_$$A(e).isAfter(_$$A().subtract(14, "day"))) return !1;
      }
      return !(a || (s.lifecycleState?.count ?? 0) > 0 && _$$A(s.lifecycleState?.updatedAt).isAfter(_$$A().subtract(3, "day"))) && e;
    });
  }();
  let r = Np();
  let T = "dark" === DP();
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: TUm,
    priority: _$$N.SECONDARY_MODAL,
    experiment: {
      check: r,
      predicate: e => e,
      postCheck: () => !0
    }
  }, [t]);
  let R = $({
    isDraftsFolder: !0,
    editorType: FFileType.FIGMAKE,
    newFileFrom: e,
    contextClicked: "make_file_creation_tooltip"
  });
  _$$h(() => {
    show({
      canShow: e => e
    });
  });
  let A = S();
  useEffect(() => {
    A && complete();
  }, [A, complete]);
  return jsx(rq, {
    clickOutsideToHide: !0,
    description: tx("file_browser.make_file_creation_promos.description"),
    disableHighlight: !1,
    forceEditorTheme: "seascape",
    isShowing,
    media: jsx(_$$w, {
      src: buildUploadUrl(T ? "1a369818117cc7e77826ee246da5938968f29e43" : "fcba05f6d2193657ef692fedecfcdf36b4eae871"),
      aspectRatio: 726 / 540
    }),
    onClose: complete,
    primaryCta: {
      label: tx("file_browser.make_file_creation_promos.cta"),
      type: "button",
      onClick: R,
      ctaTrackingDescriptor: _$$c.TRY_FIGMA_MAKE
    },
    targetKey: O,
    title: tx("file_browser.make_file_creation_promos.title"),
    trackingContextName: "Figma Make File Creation Tooltip"
  });
}
export const MakeFileCreationTooltip = $$C0;