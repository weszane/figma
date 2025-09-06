import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback, useRef } from "react";
import { useDispatch } from "../vendor/514228";
import { debug } from "../figma_app/465776";
import { Pt } from "../figma_app/806412";
import { E as _$$E } from "../905/277716";
import { k } from "../905/582200";
import { v as _$$v } from "../642/135773";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { Yr } from "../figma_app/8833";
import { z5 } from "../905/713722";
import { E7, gl, oV, hS } from "../905/216495";
import { Zr } from "../figma_app/678782";
import { kl, lJ } from "../905/275640";
import { cn } from "../905/959568";
import { Ao } from "../905/748636";
import { C } from "../642/180963";
import { Y } from "../6388/262412";
import { K } from "../6388/893524";
import { Y as _$$Y } from "../905/1768";
import { u as _$$u } from "../642/560546";
let I = `${Yr}-overlay`;
let T = {
  type: "SOLID",
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  opacity: .4,
  blendMode: "NORMAL",
  visible: !0
};
export function $$C0({
  rowRef: e,
  recordingKey: t
}) {
  let [l, s] = useState(!1);
  let [r, i] = useState(null);
  let d = useCallback(() => {
    l ? s(!1) : e.current && (i(cn(e.current, 240)), s(!0));
  }, [l, e]);
  let h = useRef(null);
  let p = useRef(null);
  _$$Y(() => s(!1), {
    closeOnEsc: !0,
    ignore: [h, p]
  });
  let f = kl("imageOverlayPaint");
  let y = E7(f ?? null) || T;
  return jsxs(Fragment, {
    children: [jsx(_$$E, {
      name: "slides_overlay_input",
      children: jsx(C, {
        isOpen: l,
        onClick: d,
        ref: h,
        recordingKey: t,
        "aria-label": getI18nString("slides.properties_panel.overlay"),
        children: jsxs("span", {
          className: _$$s.inlineFlex.gap6.pl4.ellipsis.noWrap.overflowHidden.$,
          children: [jsx(_$$v, {
            paint: y,
            colors: []
          }), renderI18nText("slides.properties_panel.overlay")]
        })
      })
    }), l && r && jsx("div", {
      ref: p,
      children: jsx(Ao, {
        title: getI18nString("slides.properties_panel.overlay"),
        headerSize: "small",
        initialPosition: r,
        initialWidth: 240,
        onClose: () => s(!1),
        autoflowHeight: !0,
        recordingKey: t,
        children: jsx("div", {
          className: _$$s.py12.pr8.$,
          children: jsx(N, {
            recordingKey: t
          })
        })
      })
    })]
  });
}
function N({
  recordingKey: e
}) {
  let t = useDispatch();
  let {
    canAddOverlay,
    overlayPaint,
    onOpacityChange,
    onPaintChange
  } = $$w1();
  let h = gl(overlayPaint) || overlayPaint && canAddOverlay;
  return jsxs(k, {
    name: "slides_overlay_controls",
    children: [jsx(K, {
      ariaLabel: getI18nString("slides.properties_panel.overlay.opacity_slider_aria_label"),
      bigStep: .1,
      max: 1,
      min: 0,
      numberInput: jsx(_$$E, {
        name: "slides_image_overlay_opacity_slider",
        children: jsx(Y, {
          "data-tooltip": getI18nString("fullscreen.scrubbable.opacity"),
          value: h ? oV : overlayPaint?.opacity || 0,
          onValueChange: onOpacityChange,
          dispatch: t
        })
      }),
      onChange: onOpacityChange,
      recordingKey: Pt(e, "opacity"),
      sliderTrackableName: "slides_image_overlay_opacity_slider",
      step: .01,
      value: h ? oV : overlayPaint?.opacity || 0
    }), jsx("div", {
      className: _$$s.pt8.pb4.pr8.pl16.$,
      children: jsx(_$$u, {
        paint: h ? oV : overlayPaint || T,
        onChange: onPaintChange,
        pickerId: I,
        inheritStyleKeyField: "inheritFillStyleKey",
        inheritStyleKey: void 0,
        inheritStyleName: void 0,
        inheritStyleId: void 0,
        recordingKey: Pt(e, "color"),
        hideCustomColorPickerFillTypeToggle: !1
      })
    })]
  });
}
export function $$w1() {
  let e = Zr("add-image-overlay");
  let [t, l] = lJ("imageOverlayPaint");
  return {
    canAddOverlay: e,
    overlayPaint: t,
    onOpacityChange: e => {
      debug(hS(t), "overlay paint should not be mixed");
      var o = {
        ...(t || T)
      };
      o.opacity = e;
      l(o);
    },
    onPaintChange: e => {
      debug(hS(t), "overlay paint should not be mixed");
      var o = {
        ...e
      };
      t && e.color && t.color && z5.format(e.color) !== z5.format(t.color) && (o.opacity = t.opacity);
      t || (o.opacity = .4);
      l(o);
    }
  };
}
export const P = $$C0;
export const g = $$w1;