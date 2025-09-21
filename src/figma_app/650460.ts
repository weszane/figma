import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useCallback, useEffect } from "react";
import { c$ } from "../905/575478";
import { generateRecordingKey } from "../figma_app/878298";
import o from "classnames";
import { colorToRgbaString } from "../figma_app/191804";
import { RecordableDiv } from "../905/511649";
import { Point } from "../905/736624";
import { SvgComponent } from "../905/714743";
import { MediaQuerySvgComponent } from "../905/331623";
import { getI18nString } from "../905/303541";
import { jS, Pv } from "../905/619652";
import { KindEnum } from "../905/129884";
import { Cz } from "../figma_app/153399";
import { A as _$$A } from "../1617/954184";
import { A as _$$A2 } from "../1617/546131";
var l = o;
let E = "swatch--colorCircle--MdzUZ";
let y = "swatch--selected--B4IKr";
let b = "swatch--circleWrapper--grusN";
let T = "swatch--selectedCustomLight--cNeeq";
let I = "swatch--selectedCustomDark--Obz01";
let S = "swatch--swatch--qSnpF";
let v = "swatch--swatchBorderOnLightBackground--aPkrH";
let A = "swatch--swatchBorderOnDarkBackground--dOArC";
let x = "swatch--small--PX3Sv";
let N = "swatch--large--jAe-V";
let C = "swatch--xsmall--hPL9b";
let w = "swatch--circleContentBoxSizing--BTH3i";
export let $$L0 = forwardRef(({
  value: e,
  paletteType: t,
  background: r = "dark",
  size: i = "medium",
  selectionState: a = "unselected",
  swatchStyle: s,
  onClick: o,
  recordingKey: d,
  tooltip: u,
  role: p,
  ariaLabel: _,
  ariaSelected: h,
  shouldRenderCirclesWithContentBoxSizing: m = !1
}, O) => {
  let R;
  let L = null;
  Array.isArray(e) && e[1] && (L = jsx("div", {
    className: "swatch--secondarySwatch--l8c8G",
    style: {
      background: Cz(e[1], t, r)
    },
    "data-testid": "colorCircle"
  }));
  R = Array.isArray(e) ? e.length <= 2 && e[0] ? Cz(e[0], t, r) : "rgba(255, 255, 255, 1)" : Cz(e, t, r);
  return jsx("div", {
    ref: O,
    className: l()({
      [E]: !0,
      [y]: "selected" === a,
      [T]: "selected_custom" === a && "light" === r,
      [I]: "selected_custom" === a && "dark" === r,
      [N]: "large" === i,
      [x]: "small" === i,
      [C]: "xsmall" === i,
      [w]: m,
      "swatch--accessible--xtYuq": !!p
    }),
    ...(p ? {
      role: p,
      tabIndex: h ? 0 : -1,
      "aria-selected": h,
      "aria-label": _
    } : {}),
    children: jsxs("div", {
      className: b,
      children: [jsx(RecordableDiv, {
        className: l()(S, {
          [v]: "light" === r,
          [A]: "dark" === r
        }),
        style: {
          background: R,
          ...s
        },
        onClick: o,
        recordingKey: d,
        "data-tooltip-show-above": !0,
        "data-tooltip-type": u ? KindEnum.TEXT : void 0,
        "data-tooltip": u,
        "data-testid": "colorCircle",
        "data-clickable": !0
      }), L]
    })
  });
});
export function $$P1({
  value: e,
  paletteType: t,
  background: r = "dark",
  size: i = "medium",
  selectionState: s = "unselected",
  tooltip: o,
  ariaLabel: c
}) {
  return jsx("div", {
    className: l()({
      [E]: !0,
      [y]: "selected" === s,
      [T]: "selected_custom" === s && "light" === r,
      [I]: "selected_custom" === s && "dark" === r,
      [N]: "large" === i,
      [x]: "small" === i,
      [C]: "xsmall" === i
    }),
    children: jsx("div", {
      className: l()(b, "swatch--radioOptionCircleWrapper--1RS0M"),
      children: jsx(c$, {
        value: colorToRgbaString(e),
        "aria-label": c,
        htmlAttributes: {
          "data-tooltip": o,
          "data-tooltip-type": o ? KindEnum.TEXT : void 0,
          "data-tooltip-show-above": !0,
          "data-clickable": !0,
          "data-testid": "colorCircle"
        },
        children: jsx("div", {
          className: l()(S, {
            [v]: "light" === r,
            [A]: "dark" === r
          }),
          style: {
            background: Cz(e, t, r)
          }
        })
      })
    })
  });
}
export function $$D2({
  onClick: e,
  swatchStyle: t,
  recordingKey: r,
  shouldDisableDataTooltip: i,
  selectionState: a,
  size: o = "medium",
  shouldRenderCirclesWithContentBoxSizing: d = !1
}) {
  return jsx(RecordableDiv, {
    ...(i ? {} : {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("whiteboard.colors.custom"),
      "data-tooltip-show-above": !0
    }),
    className: l()({
      [E]: !0,
      [y]: "selected" === a,
      [N]: "large" === o,
      [x]: "small" === o,
      [C]: "xsmall" === o,
      [w]: d
    }),
    onClick: e,
    recordingKey: generateRecordingKey(r, "colorSelectorCustomOption"),
    children: jsx("div", {
      className: b,
      children: jsx(RecordableDiv, {
        className: l()("swatch--customSwatch---Nq7y swatch--swatch--qSnpF", A),
        style: t,
        "data-clickable": !0
      })
    })
  });
}
export function $$k5({
  value: e,
  onClick: t,
  onPointerUp: r,
  swatchStyle: i,
  tooltip: a,
  fallbackSvg: s,
  tooltipOffsetY: o,
  dataTestId: d,
  size: c
}) {
  return jsx("div", {
    className: l()(E, "large" === c && N),
    children: jsx("div", {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": a,
      "data-tooltip-offset-y": o,
      "data-tooltip-show-above": !0,
      className: b,
      children: jsx(MediaQuerySvgComponent, {
        svg: e,
        className: l()(S, A),
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...i
        },
        dataTestId: d,
        onClick: t,
        onPointerUp: r,
        fallbackSvg: s
      })
    })
  });
}
let $$M4 = forwardRef(({
  value: e,
  size: t = "medium",
  selectionState: r = "unselected",
  swatchStyle: i,
  onClick: a,
  onPointerUp: s,
  recordingKey: o,
  tooltip: d
}, u) => jsx("div", {
  ref: u,
  className: l()({
    [E]: !0,
    [y]: "selected" === r,
    [x]: "small" === t
  }),
  children: jsx("div", {
    className: b,
    children: jsx(RecordableDiv, {
      className: l()(S, A),
      style: {
        backgroundImage: `url(${e})`,
        backgroundSize: "auto 100%",
        ...i
      },
      onClick: a,
      onPointerUp: s,
      recordingKey: o,
      "data-tooltip-show-above": !0,
      "data-tooltip-type": d ? KindEnum.TEXT : void 0,
      "data-tooltip": d
    })
  })
}));
let $$F3 = forwardRef(({
  imagePaint: e,
  background: t,
  size: r = "medium",
  selectionState: a = "unselected",
  hovered: s,
  onClick: o,
  onMouseEnter: d,
  onMouseLeave: c,
  onPointerUp: _
}, f) => {
  let [E, y] = useState("");
  let b = useCallback(e => {
    let t = jS(e, new Point((e.originalImageWidth || 244) / (e.originalImageHeight || 244) * 244, 244), {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    });
    t && t.pixels && t.pixelSize && y(Pv(t.pixels, t.pixelSize));
  }, []);
  useEffect(() => {
    e && b(e);
  }, [e, b]);
  return jsxs("div", {
    style: {
      position: "relative"
    },
    onMouseEnter: d,
    onMouseLeave: c,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("whiteboard.delightful_toolbar.custom_upload"),
    "data-tooltip-show-above": !0,
    children: [jsx($$M4, {
      value: E,
      size: r,
      selectionState: a,
      onClick: o,
      onPointerUp: _,
      ref: f
    }), s && jsx("div", {
      className: "swatch--swatchOverlayContainer--0Ye8z",
      children: jsx(SvgComponent, {
        svg: _$$A,
        style: {
          fill: "dark" === t ? "white" : void 0
        },
        className: l()({
          "swatch--swatchOverlay--QA2QQ swatch--swatch--qSnpF": !0,
          "swatch--backgroundLight--ZkW6n": "light" === t,
          "swatch--backgroundDark--mMH1v": "dark" === t,
          [x]: "small" === r
        })
      })
    })]
  });
});
function j({
  children: e,
  numColumns: t = 4,
  ariaLabel: r,
  id: i
}) {
  return jsx("div", {
    className: "swatch--swatchGrid--y6deW",
    style: {
      "--columns": t
    },
    "aria-label": r,
    role: "listbox",
    id: i,
    "data-fullscreen-intercept": !0,
    children: e
  });
}
export function $$U7(e, t, r) {
  return function ({
    children: i
  }) {
    return jsx(j, {
      numColumns: e,
      ariaLabel: t,
      id: r,
      children: i
    });
  };
}
export function $$B6(e, t, r) {
  let i;
  return {
    swatchGrid: function ({
      children: e
    }) {
      return jsx(j, {
        numColumns: i,
        ariaLabel: t,
        id: r,
        children: e
      });
    },
    numColumns: i = e < 6 ? e : 6 === e ? 3 : e <= 8 ? 4 : 5
  };
}
export const cd = $$L0;
export const kk = $$P1;
export const ZI = $$D2;
export const YR = $$F3;
export const W1 = $$M4;
export const HL = $$k5;
export const lX = $$B6;
export const Wj = $$U7;
export const WW = _$$A;
export const xY = _$$A2;