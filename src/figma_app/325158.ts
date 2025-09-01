import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useState, useEffect } from "react";
import { d4 as _$$d, wA } from "../vendor/514228";
import { A as _$$A } from "../905/920165";
import { b as _$$b, bL, mc, r1, Ov, ME, wv } from "../figma_app/860955";
import { z6, CU } from "../905/963340";
import { T as _$$T } from "../905/256551";
import { R as _$$R } from "../905/649743";
import { g as _$$g } from "../905/125190";
import { J } from "../905/614223";
import { rrT, glU, m1T } from "../figma_app/763686";
import { s as _$$s } from "../905/583953";
import { getFeatureFlags } from "../905/601108";
import { generateRecordingKey } from "../figma_app/878298";
import { sx } from "../905/449184";
import { wv as _$$wv, c$ } from "../figma_app/236327";
import { B } from "../905/714743";
import { t as _$$t, tx } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { Y5 } from "../figma_app/455680";
import { hS, gl } from "../905/216495";
import { lJ, kl } from "../905/275640";
import { zk } from "../figma_app/198712";
import { V } from "../figma_app/144634";
import { j as _$$j } from "../figma_app/628249";
import { K0, $n, wv as _$$wv2, W1 } from "../figma_app/439493";
import { Fn, A3 } from "../figma_app/769101";
import { A as _$$A2 } from "../6828/191424";
import { A as _$$A3 } from "../svg/578434";
import { A as _$$A4 } from "../svg/583230";
import { A as _$$A5 } from "../svg/412173";
import { A as _$$A6 } from "../svg/441998";
import { A as _$$A7 } from "../svg/671712";
let c = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M7.5 3a.5.5 0 0 1 .5.5V16h8V8H9.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .5.5V16h3.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5V8H3.5a.5.5 0 0 1 0-1H7V3.5a.5.5 0 0 1 .5-.5m9 15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5",
      clipRule: "evenodd"
    })
  });
});
let u = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M18 4a2 2 0 0 1 1.99 1.796L20 6v12a2 2 0 0 1-1.796 1.99L18 20H6a2 2 0 0 1-1.99-1.796L4 18V6a2 2 0 0 1 2-2zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm12 13H6V6h12zM7 17h10V7H7z"
    })
  });
});
let h = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-.204-.01A2 2 0 0 1 4 18V6a2 2 0 0 1 1.796-1.99L6 4zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm9.5 7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5m-4-4a.5.5 0 0 1 0 1H9v2.5a.5.5 0 0 1-1 0v-3l.01-.1A.5.5 0 0 1 8.5 8z"
    })
  });
});
function U({
  paint: e,
  paintIndex: t
}) {
  let r = () => {
    Y5.updateAppModel({
      currentSelectedProperty: {
        type: rrT.FILL,
        indices: [t]
      }
    });
    let r = e.blendMode || "NORMAL";
    let n = e.opacity || 1;
    glU?.uploadPaintImage(r, n);
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(V, {
    variant: "button",
    tooltip: _$$t("whiteboard.inline_menu.replace_image"),
    ariaLabel: _$$t("whiteboard.inline_menu.replace_image"),
    onClick: r,
    recordingKey: "toolbarReplaceImage",
    children: jsx(_$$T, {})
  }) : jsx(K0, {
    tooltip: _$$t("whiteboard.inline_menu.replace_image"),
    svg: _$$A7,
    onClick: r,
    recordingKey: "toolbarReplaceImage"
  });
}
export function $$B2() {
  let e = _$$j();
  let t = _$$d(e => e.mirror.appModel.activeCanvasEditModeType);
  if (!e) return null;
  let {
    paint,
    paintIndex,
    onChange
  } = e;
  if (t === m1T.RASTER) return jsx(Y, {
    paint,
    onChange
  });
  let o = () => {
    Y5.triggerActionInUserEditScope("crop-image");
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(Fragment, {
    children: [jsx(U, {
      paint,
      paintIndex
    }), jsx(V, {
      variant: "button",
      tooltip: _$$t("whiteboard.inline_menu.crop_image"),
      ariaLabel: _$$t("whiteboard.inline_menu.crop_image"),
      onClick: o,
      recordingKey: "toolbarCrop",
      children: jsx(c, {})
    })]
  }) : jsxs(Fragment, {
    children: [jsx(U, {
      paint,
      paintIndex
    }), jsx(K0, {
      tooltip: _$$t("whiteboard.inline_menu.crop_image"),
      svg: _$$A4,
      onClick: o,
      recordingKey: "toolbarCrop"
    })]
  });
}
export function $$G12() {
  let [e, t] = lJ("imageHasNoStroke");
  return () => {
    t(!e);
    sx("figjam_image_border_change", {
      border: hS(e) ? e : "__mixed__"
    });
  };
}
export function $$V1() {
  let e = kl("imageHasNoStroke");
  let t = $$G12();
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(V, {
    variant: "toggle",
    tooltip: _$$t("whiteboard.inline_menu.image_border"),
    ariaLabel: _$$t("whiteboard.inline_menu.image_border"),
    checked: !e,
    offIcon: jsx(u, {}),
    onIcon: jsx(u, {}),
    onChange: t,
    recordingKey: "toolbarImageBorder"
  }) : jsx(K0, {
    tooltip: _$$t("whiteboard.inline_menu.image_border"),
    svg: _$$A6,
    active: e ? "NONE" : "LOUD",
    onClick: t,
    recordingKey: "toolbarImageBorder"
  });
}
export function $$H3(e = {}) {
  let t = e.setIsEditorOpen;
  let r = kl("accessibleLabel");
  return t ? getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(V, {
    variant: "button",
    tooltip: r ? _$$t("whiteboard.inline_menu.edit_image_description") : _$$t("whiteboard.inline_menu.add_image_description"),
    onClick: () => {
      t(!0);
    },
    recordingKey: "addImageDescription",
    dataTestId: "alt-text-button",
    children: tx("whiteboard.inline_menu.alt_text")
  }) : jsx($n, {
    tooltip: r ? _$$t("whiteboard.inline_menu.edit_image_description") : _$$t("whiteboard.inline_menu.add_image_description"),
    onClick: () => {
      t(!0);
    },
    recordingKey: "addImageDescription",
    buttonStyle: {
      width: "fit-content",
      borderLeft: "1px solid var(--light-bg-menu-secondary, #383838)"
    },
    buttonChildrenStyle: {
      width: "inherit",
      padding: "0 8px"
    },
    active: r ? "LOUD" : "NONE",
    children: jsx("span", {
      className: "image_controls--label--VF4Hv text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L",
      children: tx("whiteboard.inline_menu.alt_text")
    })
  }) : jsx(Fragment, {});
}
export function $$z6(e) {
  let t = e.transform;
  if (!t) return 0;
  let {
    m00,
    m01,
    m10,
    m11
  } = t;
  let s = Math.min(Math.sqrt(m00 * m00 + m01 * m01), Math.sqrt(m10 * m10 + m11 * m11));
  return 0 === s ? 0 : 1 / s;
}
export function $$W10() {
  let e = _$$j();
  return e ? $$z6(e.paint) : 0;
}
export function $$K7(e, t, r) {
  if (0 === r || 0 === t || !e.transform) return;
  let n = t / r;
  let i = _$$s.fromFigMatrix(e.transform);
  i.translate((1 - n) / 2, (1 - n) / 2);
  i.scale(n, n);
  return i.toFigMatrix();
}
function Y({
  paint: e,
  onChange: t
}) {
  let [r, o] = useState(1);
  let [l, d] = useState(3);
  let c = wA();
  let u = $$z6(e);
  useEffect(() => {
    u && (u < r && o(u), u > l && d(u));
  }, [r, l, u]);
  let h = () => {
    Y5.triggerActionInUserEditScope("rotate-image-90-clockwise");
    c(_$$F.enqueue({
      type: "image-rotated-feedback",
      message: _$$t("whiteboard.inline_menu.image_rotated_feedback"),
      role: "status",
      timeoutOverride: 500
    }));
  };
  let g = () => {
    Y5.triggerActionInUserEditScope("leave-edit-mode");
  };
  let f = (r, {
    commit: n
  }) => {
    let i = $$K7(e, u, r) ?? e.transform;
    t({
      ...e,
      transform: i
    }, n ? zk.YES : zk.NO);
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(J, {
    mode: "dark",
    children: [jsx("div", {
      className: "x2pejg6 xchqr0g",
      children: jsx(_$$A, {
        "aria-label": _$$t("whiteboard.inline_menu.scale_image"),
        value: u,
        min: r,
        max: l,
        step: .01,
        bigStep: .1,
        onChange: f
      })
    }), jsx(V, {
      variant: "button",
      tooltip: _$$t("whiteboard.inline_menu.rotate_image"),
      ariaLabel: _$$t("whiteboard.inline_menu.rotate_image"),
      onClick: h,
      recordingKey: "toolbarRotate",
      children: jsx(_$$R, {})
    }), jsx(ee, {}), jsx(_$$wv2, {}), jsx(V, {
      variant: "button",
      tooltip: _$$t("whiteboard.inline_menu.finish_image_editing"),
      ariaLabel: _$$t("whiteboard.inline_menu.finish_image_editing"),
      onClick: g,
      recordingKey: "toolbarStopCropping",
      children: jsx(_$$g, {})
    })]
  }) : jsxs(J, {
    mode: "dark",
    children: [jsx("div", {
      className: "x2pejg6 xchqr0g",
      children: jsx(_$$A, {
        "aria-label": _$$t("whiteboard.inline_menu.scale_image"),
        value: u,
        min: r,
        max: l,
        step: .01,
        bigStep: .1,
        onChange: f
      })
    }), jsx(K0, {
      svg: _$$A3,
      tooltip: _$$t("whiteboard.inline_menu.rotate_image"),
      onClick: h,
      recordingKey: "toolbarRotate"
    }), jsx(ee, {}), jsx(_$$wv2, {}), jsx(K0, {
      svg: _$$A2,
      tooltip: _$$t("whiteboard.inline_menu.finish_image_editing"),
      recordingKey: "toolbarStopCropping",
      onClick: g
    })]
  });
}
export let $$$0 = new Map([["Original", void 0], ["Custom", void 0], ["Square", 1], ["Circle", 1], ["Landscape", 4 / 3], ["Portrait", 3 / 4], ["Wide", 16 / 9]]);
export function $$X4(e) {
  switch (e) {
    case "Square":
    case "Circle":
      return "1:1";
    case "Landscape":
      return "4:3";
    case "Portrait":
      return "3:4";
    case "Wide":
      return "16:9";
  }
  return "";
}
export function $$q5(e) {
  switch (e) {
    case "Original":
      return _$$t("whiteboard.crop_presets.original");
    case "Custom":
      return _$$t("whiteboard.crop_presets.custom");
    case "Square":
      return _$$t("whiteboard.crop_presets.square");
    case "Circle":
      return _$$t("whiteboard.crop_presets.circle");
    case "Landscape":
      return _$$t("whiteboard.crop_presets.landscape");
    case "Portrait":
      return _$$t("whiteboard.crop_presets.portrait");
    case "Wide":
      return _$$t("whiteboard.crop_presets.wide");
  }
}
export function $$J9() {
  let e = kl("imageOriginalAspectRatio");
  let t = kl("imageAspectRatio");
  let r = kl("cornerRadius");
  let n = kl("width");
  let i = kl("height");
  if (!(!n || !i || gl(e) || gl(t) || gl(n) || gl(i))) return function (e, t, r) {
    if (t) {
      if (t === r) return "Original";
      for (let [r, n] of $$$0) if (n && .001 > Math.abs(t - n)) {
        if (e && "Square" === r) return "Circle";
        return r;
      }
      return "Custom";
    }
  }(!!r && !gl(r) && n === i && r >= n / 2, t, e);
}
export function $$Z8() {
  let e = _$$d(e => e.mirror.selectionProperties.whiteboardNumSelectedByType);
  return !!(1 === _$$d(e => e.mirror.selectionProperties.whiteboardNumSelected) && e && (1 === e.FRAME || 1 === e.RECTANGLE || 1 === e.ROUNDED_RECTANGLE));
}
export function $$Q11() {
  let e = $$J9();
  let t = kl("imageOriginalAspectRatio");
  return gl(t) ? null : r => {
    if (r !== e) {
      let e = function (e, t) {
        switch (e) {
          case "Original":
            return t;
          case "Custom":
            return;
          default:
            return $$$0.get(e);
        }
      }(r, t);
      e && Y5.updateSelectionProperties({
        imageAspectRatio: e,
        cornerRadius: "Circle" === r ? 65536 : 0
      }, {
        shouldCommit: zk.YES
      });
    }
  };
}
function ee() {
  let e = $$J9();
  let t = $$Z8();
  let r = $$Q11();
  let {
    getTriggerProps,
    manager
  } = _$$b();
  return e && r ? getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(bL, {
    manager,
    children: [jsx(V, {
      variant: "menu",
      tooltip: _$$t("whiteboard.inline_menu.aspect_ratio"),
      ariaLabel: _$$t("whiteboard.inline_menu.aspect_ratio"),
      getTriggerProps,
      recordingKey: "cropPresetsControl",
      children: jsx(h, {})
    }), jsx(mc, {
      children: jsx(z6, {
        title: jsx(r1, {
          children: _$$t("whiteboard.inline_menu.aspect_ratio")
        }),
        onChange: r,
        value: e,
        recordingKey: generateRecordingKey("cropPresetDropdown", "radioOptions"),
        children: Array.from($$$0.keys()).map(e => jsxs("div", {
          children: [jsxs(CU, {
            value: e,
            "aria-label": $$q5(e),
            disabled: "Circle" === e && !t,
            children: [$$q5(e), $$X4(e) && jsx(Ov, {
              children: jsx(ME, {
                children: $$X4(e)
              })
            })]
          }), "Custom" === e && jsx(wv, {})]
        }, e))
      })
    })]
  }) : jsx(Fn, {
    value: e,
    onChange: r,
    renderButton: ({
      onClick: e,
      ref: t,
      active: r
    }) => jsx(K0, {
      tooltip: _$$t("whiteboard.inline_menu.aspect_ratio"),
      active: r ? "NORMAL" : "NONE",
      svg: _$$A5,
      onPointerDown: e,
      ref: t,
      recordingKey: "cropPresetsControl",
      caret: "down"
    }),
    options: Array.from($$$0.keys()),
    renderOption: ({
      value: e,
      onClick: r,
      isSelected: i
    }) => jsxs("div", {
      children: [e && jsx(et, {
        cropName: $$q5(e),
        aspectRatio: $$X4(e),
        recordingKey: generateRecordingKey("cropPresetDropdown", e),
        disabled: "Circle" === e && !t,
        selected: i,
        onPointerUp: r
      }), "Custom" === e && jsx(_$$wv, {})]
    }, e),
    OptionWrapper: A3,
    PopoverWrapper: er
  }) : null;
}
function et(e) {
  return jsxs(c$, {
    recordingKey: e.recordingKey,
    onClick: e.onClick,
    onPointerUp: e.onPointerUp,
    className: "image_controls--overflowItem--N9HXJ",
    disabled: e.disabled,
    children: [jsxs("div", {
      className: "image_controls--overflowInner--7-ktg",
      children: [jsx("div", {
        className: "image_controls--iconContainer--1VyEZ",
        children: e.selected && jsx(B, {
          svg: _$$A2
        })
      }), e.cropName]
    }), jsx("div", {
      className: "image_controls--secondaryText--Lar5b",
      children: e.aspectRatio
    })]
  });
}
function er({
  children: e
}) {
  return jsx(W1, {
    children: jsx("div", {
      className: "image_controls--popoverWrapper--cabPu",
      children: e
    })
  });
}
export const Id = $$$0;
export const rT = $$V1;
export const AZ = $$B2;
export const Dz = $$H3;
export const d4 = $$X4;
export const Fk = $$q5;
export const KT = $$z6;
export const AO = $$K7;
export const Uq = $$Z8;
export const Mv = $$J9;
export const nB = $$W10;
export const te = $$Q11;
export const Xb = $$G12;