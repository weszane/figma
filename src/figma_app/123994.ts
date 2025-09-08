import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useCallback, useEffect } from "react";
import { debounce } from "../905/915765";
import { BackgroundPattern } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { Pt } from "../figma_app/806412";
import { E as _$$E } from "../905/277716";
import { Point } from "../905/736624";
import { oW } from "../905/675859";
import { getI18nString } from "../905/303541";
import { mz } from "../figma_app/975811";
import { fullscreenValue } from "../figma_app/455680";
import { _G, Pv } from "../905/619652";
import { l6, c$ } from "../905/794875";
import { eD, SL, cT } from "../905/257620";
let E = {
  format: e => {
    switch (e) {
      case "PNG":
        return "PNG";
      case "JPEG":
        return "JPG";
      case "SVG":
        return "SVG";
      case "PDF":
        return "PDF";
      case "PDF Print":
        return "PDF Print";
    }
  }
};
let y = {
  format: e => {
    if ("MP4" === e) return "MP4 Video";
  }
};
let b = [{
  type: "CONTENT_SCALE",
  value: .5
}, {
  type: "CONTENT_SCALE",
  value: 1
}, {
  type: "CONTENT_SCALE",
  value: 2
}, {
  type: "CONTENT_SCALE",
  value: 3
}, {
  type: "CONTENT_SCALE",
  value: 4
}];
let T = new mz();
let I = l6;
let S = c$;
let v = l6;
let A = c$;
let x = l6;
let N = c$;
export function $$C3({
  videoType: e,
  setVideoType: t,
  dropdownShown: r,
  dispatch: i,
  ariaLabel: a
}) {
  return jsx(_$$E, {
    name: "export_video_type_select",
    children: jsx(v, {
      ariaLabel: a,
      disabled: !0,
      dispatch: i,
      dropdownClassName: eD,
      dropdownShown: r,
      formatter: y,
      id: "export-video-type",
      inputClassName: SL,
      onChange: e => t(e),
      onMouseDown: e => e.stopPropagation(),
      property: e,
      recordingKey: Pt("videoType"),
      children: jsx(A, {
        value: "MP4",
        recordingKey: Pt("videoType", "mp4")
      })
    })
  });
}
export function $$w0({
  imageType: e,
  setImageType: t,
  dropdownShown: r,
  dispatch: i,
  ariaLabel: a
}) {
  return jsx(_$$E, {
    name: "export_image_type_select",
    children: jsxs(I, {
      ariaLabel: a,
      dispatch: i,
      dropdownClassName: eD,
      dropdownShown: r,
      formatter: E,
      id: "export-image-type",
      inputClassName: SL,
      onChange: e => t(e),
      onMouseDown: e => e.stopPropagation(),
      property: e,
      recordingKey: Pt("imageType"),
      children: [jsx(S, {
        value: "PNG",
        recordingKey: Pt("imageType", "png")
      }), jsx(S, {
        value: "JPEG",
        recordingKey: Pt("imageType", "jpeg"),
        fullWidth: !0
      }), jsx(S, {
        value: "PDF",
        recordingKey: Pt("imageType", "pdf"),
        fullWidth: !0
      }), !!getFeatureFlags().buzz_print_export && jsx(S, {
        value: "PDF Print",
        recordingKey: Pt("imageType", "pdf_print"),
        fullWidth: !0
      })]
    })
  });
}
export function $$O2({
  imageType: e,
  constraint: t,
  setConstraint: r,
  dropdownShown: i,
  dispatch: a,
  ariaLabel: s
}) {
  let o = b.map((e, t) => jsx(N, {
    value: e,
    recordingKey: Pt("constraints", e.value),
    fullWidth: !0
  }, t));
  return jsx(_$$E, {
    name: "export_constraint_combo_box",
    children: jsx(x, {
      ariaLabel: s,
      disabled: "PDF" === e || "PDF Print" === e,
      dispatch: a,
      dropdownClassName: eD,
      dropdownShown: i,
      formatter: T,
      id: "export-constraint",
      inputClassName: SL,
      onChange: e => r(e),
      onMouseDown: e => e.stopPropagation(),
      property: t,
      recordingKey: Pt("contraint"),
      children: o
    })
  });
}
function R({
  thumbnail: e
}) {
  return jsx("div", {
    className: cT,
    children: jsx(oW, {
      src: e.src,
      width: e.displaySize.x,
      height: e.displaySize.y,
      style: {
        objectFit: "contain"
      },
      alt: getI18nString("cooper.toolbar.export_modal.preview_thumbnail_alt")
    })
  });
}
export function $$L1({
  panelWidth: e,
  panelHeight: t
}) {
  return jsx("div", {
    style: {
      width: `${e}px`,
      height: `${t ?? e}px`,
      borderRadius: "2px",
      backgroundColor: "var(--color-bg-secondary)",
      border: "1px solid var(--color-border)"
    }
  });
}
export let $$P4 = forwardRef(function ({
  selectedCooperFrameNodeId: e,
  panelWidth: t,
  panelHeight: r,
  colorProfile: o,
  hasBorder: l,
  renderPrintMarks: d
}, u) {
  let [p, _] = useState(null);
  let g = useCallback(() => {
    let n = new Point(t, r ?? t);
    let i = _G(n, e, !0, BackgroundPattern.CHECKERBOARD, !1, !1, !0, d);
    let a = null;
    i && i.pixels && i.pixelSize && i.displaySize && (a = {
      src: Pv(i.pixels, i.pixelSize, o),
      displaySize: i.displaySize
    });
    _(a);
  }, [o, r, t, e, d]);
  let f = debounce(() => g(), 1e3);
  let E = useCallback(() => {
    null !== e && f();
  }, [e, f]);
  useEffect(() => (fullscreenValue.fromFullscreen.on("pingSceneGraphEvent", E), g(), () => {
    fullscreenValue.fromFullscreen.removeListener("pingSceneGraphEvent", E);
    f.cancel();
  }), [d]);
  return jsx("div", {
    ref: u,
    style: {
      width: `${t}px`,
      height: `${r ?? t}px`,
      borderRadius: "2px",
      border: l ? "1px solid var(--color-border)" : "none"
    },
    children: p && jsx(R, {
      thumbnail: p
    })
  });
});
export const Hk = $$w0;
export const OL = $$L1;
export const fu = $$O2;
export const lK = $$C3;
export const pu = $$P4;