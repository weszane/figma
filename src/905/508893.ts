import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useLayoutEffect, useState, useMemo, useCallback, useEffect } from "react";
import { deepEqual } from "../905/382883";
import { clamp } from "../figma_app/492908";
import o from "classnames";
import { useDebounce } from 'use-debounce';
import { colorToRgbaString, parseColor, getThemeBackgroundColor } from "../figma_app/191804";
import { useLatestRef } from "../figma_app/922077";
import { useWindowDimensions } from "../905/745972";
import { LoadingSpinner } from "../figma_app/858013";
import { getI18nString } from "../905/303541";
import { getVisibleTheme } from "../905/640017";
import { Z as _$$Z } from "../905/823863";
import { o as _$$o } from "../905/237202";
import { p as _$$p } from "../figma_app/378458";
import { useDispatch } from "react-redux";
import { r as _$$r } from "../figma_app/67145";
import { Dm } from "../figma_app/8833";
import { useDropdownState, useDropdown } from "../905/848862";
import { KindEnum } from "../905/129884";
import { l6, c$, uQ } from "../905/794875";
import { ZE } from "../figma_app/932285";
import { wv, $n } from "../figma_app/439493";
import { T1 } from "../figma_app/90441";
import { D9, oO, ZS } from "../figma_app/639798";
import { noop } from 'lodash-es';
import { EventShield } from "../905/821217";
import { _ as _$$_ } from "../905/569825";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { L as _$$L } from "../figma_app/942671";
import { q as _$$q } from "../figma_app/57000";
import { p as _$$p2 } from "../905/927118";
import { K0 } from "../figma_app/778125";
import { sH, VH, QO, Sn, LY, vu, cm, FH, sy, FE } from "../905/709864";
import { A as _$$A2 } from "../svg/149444";
import { A as _$$A3 } from "../svg/259951";
import { A as _$$A4 } from "../svg/428204";
import { A as _$$A5 } from "../svg/212295";
var l = o;
var k = (e => (e.ActualSize = "Actual Size", e.Default = "Default", e.Fit = "Fit to Screen", e.FitWidth = "Fit Width", e.FillScreen = "Fill Screen", e))(k || {});
let R = {
  "Actual Size": () => getI18nString("fig_feed.zoom_pan_preset.actual_size"),
  Default: () => getI18nString("fig_feed.zoom_pan_preset.default"),
  "Fit to Screen": () => getI18nString("viewer.options_menu.fit_to_screen"),
  "Fill Screen": () => getI18nString("viewer.options_menu.fill_screen"),
  "Fit Width": () => getI18nString("viewer.options_menu.fit_width")
};
let N = Object.keys(k);
let P = "Default";
let O = l6;
let D = c$;
let L = {
  format: e => e in k ? R[k[e]]() : getI18nString("fig_feed.zoom_pan_preset.custom")
};
function F({
  reportWidth: e,
  inputProps: t
}) {
  let i = useRef(null);
  let a = t.property;
  useLayoutEffect(() => {
    let t = i.current;
    t && e(a, t.getBoundingClientRect().width);
    return () => e(a, void 0);
  }, [i, a, e]);
  return jsx("div", {
    className: D9,
    "aria-hidden": !0,
    children: jsx(uQ, {
      ...t,
      containerClassName: l()(t.containerClassName, oO),
      ref: i
    })
  });
}
function M({
  reportWidth: e,
  value: t,
  optionProps: i
}) {
  let a = useRef(null);
  useLayoutEffect(() => {
    let i = a.current;
    i && e(t, i.getBoundingClientRect().width);
    return () => e(t, void 0);
  }, [a, t, e]);
  return jsx("div", {
    className: D9,
    "aria-hidden": !0,
    children: jsx(D, {
      ...i,
      additionalStylesClassName: l()(i.additionalStylesClassName, ZS),
      forwardedRef: a
    })
  });
}
function j(e) {
  let [t, i] = useState(void 0);
  let [a, s] = useState(void 0);
  let o = useDispatch<AppDispatch>();
  let l = useDropdownState();
  let d = useMemo(() => ({
    inputClassName: "edit_preview_toolbar--input--FPZy0 text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L",
    formatter: L
  }), []);
  let c = useMemo(() => jsx(_$$r, {
    setMaxWidth: i,
    render: ({
      reportWidthOfValue: e
    }) => jsx(Fragment, {
      children: N.map(t => jsx(F, {
        reportWidth: e,
        inputProps: {
          ...d,
          property: t
        }
      }, t))
    })
  }), [d]);
  let u = useMemo(() => jsx(_$$r, {
    setMaxWidth: s,
    render: ({
      reportWidthOfValue: e
    }) => jsx(Fragment, {
      children: N.map(t => jsx(M, {
        value: t,
        reportWidth: e,
        optionProps: {
          height: 32,
          value: t,
          formattedValue: L.format(t)
        }
      }, t))
    })
  }), []);
  return jsxs("div", {
    className: "edit_preview_toolbar--zoomPanPresetSelectorContainer--45Nn2",
    "data-tooltip-show-above": !0,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("fig_feed.zoom_pan_preset.tooltip"),
    children: [u, c, jsx(O, {
      ...d,
      ariaLabel: getI18nString("fig_feed.zoom_pan_preset.tooltip"),
      blurOnChange: !0,
      chevronClassName: "edit_preview_toolbar--chevron--zjsKc",
      dispatch: o,
      dropdownAlignment: "right",
      dropdownClassName: Dm,
      dropdownShown: l,
      dropdownWidth: a,
      id: `feedZoomPanPresetControl:${e.id}`,
      inputWidth: t,
      onChange: t => {
        e.setZoomPanPreset(t);
      },
      preventHiddenInput: "always",
      property: e.value,
      recordingKey: "feedZoomPanPreset",
      role: "combobox",
      targetDomNode: document.body,
      children: N.map(e => jsx(D, {
        value: e,
        fullWidth: !0
      }, e))
    })]
  });
}
function U({
  id: e,
  backgroundColor: t,
  setBackgroundColor: i,
  zoomPanPreset: r,
  setZoomPanPreset: a,
  onResetCallback: s,
  applyToAllCallback: o
}) {
  let d = !(r in k);
  return jsxs("div", {
    className: "edit_preview_toolbar--editPreviewToolbar--Gvlyc",
    children: [jsx(ZE, {
      buttonCaretType: "down",
      buttonSize: "small",
      dropperDisabled: !0,
      inlineButtonTooltip: getI18nString("fig_feed.background_color.tooltip"),
      onColorChange: i,
      onlyShowCustomColorPopover: !0,
      optionSize: "medium",
      paletteType: "base",
      positionX: () => 0,
      positionY: (e, t) => T1(e, t, 4),
      recordingKey: "teamFeedEditablePreviewBackgroundColorControl",
      value: t
    }), jsx(wv, {}), jsx(j, {
      id: e,
      value: r,
      setZoomPanPreset: a
    }), !!o && jsxs(Fragment, {
      children: [jsx(wv, {}), jsx($n, {
        tooltip: getI18nString("fig_feed.apply_to_all.tooltip"),
        tooltipMaxWidth: 200,
        caret: "none",
        onClick: async () => {
          await o();
        },
        disabled: d,
        recordingKey: "teamFeedResetPreview",
        children: jsx("span", {
          className: l()({
            "edit_preview_toolbar--buttonDisabled--hE0Am": d
          }),
          children: getI18nString("fig_feed.apply_to_all")
        })
      })]
    }), s && jsxs(Fragment, {
      children: [jsx(wv, {}), jsx($n, {
        tooltip: getI18nString("fig_feed.reset.tooltip"),
        tooltipMaxWidth: 200,
        caret: "none",
        onClick: s,
        recordingKey: "teamFeedResetPreview",
        children: jsx("span", {
          children: getI18nString("fig_feed.reset")
        })
      })]
    })]
  });
}
function J({
  recordingKey: e,
  currentZoom: t,
  Dropdown: i,
  ...a
}) {
  let s = useRef(null);
  let o = useDropdown(a.dropdownId);
  let [d, c] = useState(null);
  let u = useCallback(() => {
    c(s?.current?.getBoundingClientRect() || null);
  }, [s]);
  useEffect(() => (u(), _$$_.addListener(u), window.addEventListener("resize", u), () => {
    _$$_.removeListener(u);
    window.removeEventListener("resize", u);
  }), [u]);
  let p = useCallback(() => {
    u();
    o.toggle({
      hasOwnEscKeyHandler: !1
    });
  }, [o, u]);
  let m = useHandleMouseEvent(generateRecordingKey(e, "zoomButton"), "click", p);
  let g = o.showing && d && jsx(i, {
    targetRect: d,
    showingZoomDropdown: o.showing,
    toggleZoomMenu: o.toggle,
    recordingKey: e
  });
  let f = !("canZoomIn" in a) || a.canZoomIn;
  let _ = !("canZoomOut" in a) || a.canZoomOut;
  let A = "onZoomIn" in a ? a.onZoomIn : noop;
  let y = "onZoomOut" in a ? a.onZoomOut : noop;
  return jsx("div", {
    className: sH,
    children: jsx(EventShield, {
      eventListeners: ["onClick"],
      children: jsxs("div", {
        className: VH,
        children: [jsx(K0, {
          recordingKey: generateRecordingKey(e, "zoomOutButton"),
          className: l()({
            [QO]: !0,
            [Sn]: _
          }),
          svg: _$$A2,
          fallbackSvg: _$$A3,
          disabled: !_,
          onClick: y,
          "data-tooltip-type": KindEnum.LOOKUP,
          "data-tooltip": "zoom-out"
        }), jsxs(_$$L, {
          ariaLabel: getI18nString("fullscreen.zoom_menu.zoom_view_options"),
          onClick: m,
          selected: o.showing,
          className: l()(LY, o.showing && vu),
          onboardingKey: _$$q,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("fullscreen.zoom_menu.zoom_view_options"),
          children: [jsx("div", {
            className: cm,
            "data-testid": "zoom-amount",
            ref: s,
            children: function () {
              let e = Math.round(t);
              return e.toString().length < 5 ? `${e}%` : `${e}`;
            }()
          }), jsx("div", {
            className: FH,
            ref: s,
            children: jsx(_$$p2, {
              showingDropdown: o.showing
            })
          })]
        }), g, jsx(K0, {
          recordingKey: generateRecordingKey(e, "zoomInButton"),
          className: l()({
            [sy]: !0,
            [Sn]: f
          }),
          svg: _$$A4,
          fallbackSvg: _$$A5,
          disabled: !f,
          onClick: A,
          "data-tooltip-type": KindEnum.LOOKUP,
          "data-tooltip": "zoom-in"
        })]
      })
    })
  });
}
let ee = {
  width: 2048,
  height: 1152
};
let $$et0 = 16 / 9;
let ei = (e, t) => e && t ? _$$o(e.x, t.x) && _$$o(e.y, t.y) && _$$o(e.zoom, t.zoom) : e === t;
function en(e, t, i) {
  return ei(e ?? null, t ?? null) && deepEqual(e?.backgroundColor, t?.backgroundColor) && (i?.skipCheckRatio || _$$o(e?.ratio ?? -1, t?.ratio ?? -1)) && e?.preset === t?.preset;
}
function er(e = .02, t = 4) {
  return function (i, n) {
    return clamp(e / n, i, t / n);
  };
}
function ea(e, t) {
  return {
    ...e,
    x: clamp(t.right, e.x, t.left),
    y: clamp(t.bottom, e.y, t.top)
  };
}
function es(e, t, i, n) {
  let r = ee.height / e;
  return {
    ...t,
    ratio: r,
    backgroundColor: i,
    preset: n
  };
}
let eo = (e, t) => {
  let {
    zoom,
    x,
    y,
    ratio
  } = t;
  let s = zoom * ratio;
  return {
    x: x * ratio,
    y: y * ratio,
    width: e.width * s,
    height: e.height * s
  };
};
let el = (e, t, i) => {
  let n = document.createElement("canvas");
  let r = n.getContext("2d");
  n.width = ee.width;
  n.height = ee.height;
  r.fillStyle = colorToRgbaString(i ?? parseColor(getThemeBackgroundColor("light")));
  r.fillRect(0, 0, n.width, n.height);
  r.drawImage(n, 0, 0);
  let a = (n.width - t.width) / 2;
  let s = (n.height - t.height) / 2;
  r.drawImage(e, a + t.x, s + t.y, t.width, t.height);
  return n.toDataURL("image/jpeg", .92);
};
function ed(e, t) {
  let i = er(e, t);
  return (e, t, n, r) => {
    let {
      width,
      height
    } = e;
    let {
      width: _width,
      height: _height
    } = t;
    let d = k[n];
    let c = _height / height;
    let u = _width / width;
    let p = {
      x: 0,
      y: 0
    };
    let m = 1;
    switch (d) {
      case k.ActualSize:
        m = 1;
        break;
      case k.Default:
        m = Math.abs(width / height - $$et0) > .01 ? i(Math.min((_height - 32) / height, (_width - 32) / width, 1), r) : i(Math.min(c, u, 1), r);
        break;
      case k.Fit:
        m = i(Math.min(c, u, 1), r);
        break;
      case k.FillScreen:
        m = i(Math.min(c, u), r);
        break;
      case k.FitWidth:
        let h = height * (m = i(Math.min(u, 1), r));
        m < 1 && h > _height && (p.y = (h - _height) / 2);
    }
    return {
      ...p,
      zoom: m
    };
  };
}
export function $$ec1(e) {
  let {
    handleImageLoad
  } = e;
  let i = e.imageScale || 4;
  let {
    showEditPreviewControls,
    setContentPreview,
    enableZoomControls,
    minZoomFactor,
    maxZoomFactor
  } = e;
  let A = er(minZoomFactor, maxZoomFactor);
  let y = ed(minZoomFactor, maxZoomFactor);
  let [b, v] = useState(!1);
  let [I, E] = useState(!1);
  let x = useRef(null);
  let S = useRef(null);
  let w = useRef(!1);
  let [C, T] = useState(null);
  let [R, O] = useState(!1);
  let [D, L] = useState(!1);
  let [F, M] = useState(!1);
  let [j, B] = useState(null);
  let [V, G] = useState(null);
  let [z, H] = useState(null);
  let [W, K] = useState(null);
  let [Y, q] = useState(null);
  let $ = useRef(null);
  let [Z, X] = useState(null);
  let Q = getVisibleTheme();
  let J = e.initialSnapshotState?.backgroundColor ?? e.pageBackgroundColor ?? parseColor(getThemeBackgroundColor(Q));
  let [ee, et] = useState(J);
  let ec = useRef();
  let {
    windowInnerHeight,
    windowInnerWidth
  } = useWindowDimensions();
  useEffect(() => {
    $.current && X({
      width: $.current.offsetWidth,
      height: $.current.offsetHeight
    });
  }, [windowInnerHeight, windowInnerWidth, $]);
  let [eg, ef] = useState(null);
  useEffect(() => {
    if (null === x.current) return;
    let e = x.current.getBoundingClientRect();
    S.current = {
      width: e.width,
      height: e.height
    };
    eg?.zoom && G({
      top: e.height + 200 / eg.zoom,
      bottom: -(e.height + 200 / eg.zoom),
      left: e.width + 200 / eg.zoom,
      right: -(e.width + 200 / eg.zoom)
    });
  }, [eg?.zoom]);
  let e_ = getI18nString("fig_feed.zoom_pan_preset.custom");
  let [eA, ey] = useState(e.initialSnapshotState?.preset);
  let eb = useRef({});
  let ev = useCallback(() => {
    x.current && x.current?.complete && Z && N.forEach(e => {
      eb.current[e] = y({
        width: x.current.offsetWidth,
        height: x.current.offsetHeight
      }, Z, e, i);
    });
  }, [i, Z, y]);
  useEffect(() => {
    ev();
  }, [Z, ev]);
  useEffect(() => {
    eA && eA in eb.current && ef(eb.current[eA]);
  }, [eA]);
  useEffect(() => {
    let e = Object.values(eb.current);
    eg && e.length > 0 && e.every(e => !ei(e, eg)) && ey(e_);
  }, [eg, e_]);
  let eI = (e, t) => {
    if (null === Z) return;
    let {
      width
    } = Z;
    10 >= Math.abs(width / 2 - (t + e / 2)) ? H("center") : 10 >= Math.abs(t) ? H("left") : 10 >= Math.abs(width - (t + e)) ? H("right") : H(null);
  };
  let eE = (e, t) => {
    if (null === Z) return;
    let {
      height
    } = Z;
    10 >= Math.abs(height / 2 - (t + e / 2)) ? K("center") : 10 >= Math.abs(t) ? K("top") : 10 >= Math.abs(height - (t + e)) ? K("bottom") : K(null);
  };
  useEffect(() => {
    I || q(null);
  }, [I]);
  useEffect(() => {
    e.enableSnapToGuidelines && !D && (null !== W || null !== z) && (ef(e => {
      if (!e || !Z || !V || null === S.current) return null;
      let t = e.x;
      "left" === z ? t = S.current.width / 2 - Z.width / 2 : "center" === z ? t = 0 : "right" === z && (t = Z.width / 2 - S.current.width / 2);
      let i = e.y;
      "top" === W ? i = S.current.height / 2 - Z.height / 2 : "center" === W ? i = 0 : "bottom" === W && (i = Z.height / 2 - S.current.height / 2);
      return ea({
        ...e,
        x: t,
        y: i
      }, V);
    }), K(null), H(null));
  }, [e.enableSnapToGuidelines, D, Z, V, W, z, i]);
  let ex = useCallback(e => {
    e.preventDefault();
    L(!1);
    B(null);
  }, [L, B]);
  let eS = useCallback(t => {
    if (V) {
      if (t.ctrlKey || t.metaKey) {
        t.stopPropagation();
        t.preventDefault();
        ef(n => {
          if (!n) return null;
          if (!e.showEditPreviewControls && Z && x.current) {
            let e = _$$Z(t, b);
            let r = A(n.zoom * e, i);
            let a = {
              x: t.offsetX,
              y: t.offsetY
            };
            let s = {
              x: Z.width / 2,
              y: Z.height / 2
            };
            let o = {
              x: s.x + n.x,
              y: s.y + n.y
            };
            let l = {
              x: (a.x - o.x) * (1 - r / n.zoom),
              y: (a.y - o.y) * (1 - r / n.zoom)
            };
            let d = {
              x: n.x + l.x,
              y: n.y + l.y
            };
            return ea({
              x: d.x,
              y: d.y,
              zoom: r
            }, V);
          }
          {
            let e = t.deltaY / 500;
            let r = n.x;
            let a = n.y;
            let s = n.zoom;
            let o = A(s - e, i);
            let l = t.offsetX;
            let d = t.offsetY;
            if (Z) {
              let e = Z.width;
              let t = Z.height;
              let i = l - e / 2;
              let c = d - t / 2;
              let u = (i - n.x) / s;
              let p = (c - n.y) / s;
              r = -u * o + i;
              a = -p * o + c;
            }
            return ea({
              x: r,
              y: a,
              zoom: o
            }, V);
          }
        });
        return !1;
      }
      e.shouldWheelPan && (t.stopPropagation(), t.preventDefault(), ef(n => {
        if (!n) return n;
        let r = e.showEditPreviewControls ? 2 : 1;
        return ea({
          zoom: A(n.zoom, i),
          x: n.x - t.deltaX / r,
          y: n.y - t.deltaY / r
        }, V);
      }));
    }
  }, [V, e.shouldWheelPan, e.showEditPreviewControls, Z, b, i, A]);
  let ew = useCallback(e => {
    if (e.ctrlKey && v(!0), e.shiftKey && E(!0), !V) return;
    let t = e => {
      ef(t => {
        if (!t) return null;
        let n = A(eu(t.zoom, e), i);
        return ea({
          x: t.x,
          y: t.y,
          zoom: n
        }, V);
      });
    };
    (e.metaKey || e.ctrlKey) && ("+" === e.key || "=" === e.key) ? (e.preventDefault(), t(!1)) : (e.metaKey || e.ctrlKey) && ("_" === e.key || "-" === e.key) ? (e.preventDefault(), t(!0)) : (e.shiftKey || e.metaKey) && "0" === e.key || ")" === e.key ? (e.preventDefault(), ef(e => e ? ea({
      x: 0,
      y: 0,
      zoom: 1 / i
    }, V) : null)) : (e.shiftKey && "1" === e.key || "!" === e.key) && (e.preventDefault(), ef(e => e ? ea({
      x: 0,
      y: 0,
      zoom: A(Math.min(Z.width / x.current.offsetWidth, Z.height / x.current.offsetHeight), i)
    }, V) : null));
  }, [V, i, A, Z]);
  let eC = e => {
    e.ctrlKey && v(!1);
    E(!1);
  };
  useEffect(() => {
    if (e.enableZoomKeyControls) {
      document.addEventListener("keydown", ew);
      document.addEventListener("keyup", eC);
      return () => {
        document.removeEventListener("keydown", ew);
        document.removeEventListener("keyup", eC);
      };
    }
  }, [e.enableZoomKeyControls, ew]);
  let eT = useCallback(n => {
    if (handleImageLoad && n && handleImageLoad(n), !w.current && x.current && Z) {
      ev();
      w.current = !0;
      let t = x.current.offsetHeight;
      let n = x.current.offsetWidth;
      let r = Z.height - 20;
      let s = Z.width - 20;
      let o = y({
        width: n,
        height: t
      }, {
        width: s,
        height: r
      }, P, i);
      let l = n > t;
      let d = o.zoom;
      let c = 0;
      let u = 0;
      if (d < .75 / i) {
        let e = Math.min(r / t, 1);
        let a = Math.min(s / n, 1);
        l && d < e ? c = (n * (d = A(e, i)) - s) / 2 : !l && d < a && (u = (t * (d = A(a, i)) - r) / 2);
      }
      if (G({
        top: t + 200,
        bottom: -(t + 200),
        left: n + 200,
        right: -(n + 200)
      }), T({
        x: c,
        y: u,
        zoom: d
      }), e.initialSnapshotState) {
        e.initialSnapshotState.preset && e.initialSnapshotState.preset in k ? (ec.current = {
          ...e.initialSnapshotState,
          ...eb.current[e.initialSnapshotState.preset]
        }, ey(e.initialSnapshotState.preset)) : (ec.current = e.initialSnapshotState, ey(e_));
        ec.current && ef(ec.current);
      } else {
        let e;
        showEditPreviewControls && (o = y({
          width: n,
          height: t
        }, Z, e = P, i), ey(e));
        ec.current = es(Z.height, o, ee, e);
        ef(ec.current);
      }
    }
  }, [10, i, Z, e.initialSnapshotState, eb, ee, showEditPreviewControls, e_, ev, y, A, handleImageLoad]);
  useEffect(() => {
    x.current?.complete && eT();
  }, [eT]);
  useEffect(() => {
    w.current = !1;
  }, [e.imageSrc]);
  useEffect(() => {
    C && e.shouldZoomToStart && ef(C);
  }, [e.shouldZoomToStart, C]);
  useEffect(() => (document.addEventListener("mouseup", ex), () => {
    document.removeEventListener("mouseup", ex);
  }), [ex]);
  useEffect(() => {
    let e = $.current;
    if (e && R) {
      e.addEventListener("wheel", eS, {
        capture: !0,
        passive: !1
      });
      return () => e.removeEventListener("wheel", eS, {
        capture: !0
      });
    }
  }, [eS, R]);
  let ek = {};
  if (eg) {
    let e = `scale(${eg.zoom})`;
    let t = `${eg.x}px`;
    let i = `${eg.y}px`;
    let n = `translate(${t}, ${i})`;
    ek = {
      transform: `${n} ${e}`
    };
  } else ek = {
    transform: `scale(${1 / i})`
  };
  let [eR] = useDebounce(eg, 200, {
    leading: !0
  });
  let eN = useMemo(() => eR && Z && showEditPreviewControls ? es(Z.height, eR, ee, eA && eA in k ? eA : void 0) : void 0, [eA, eR, ee, Z, showEditPreviewControls]);
  let eP = useLatestRef(eN);
  useEffect(() => {
    async function t(e, t) {
      if (!e.complete) {
        var i;
        await (i = e.src, new Promise((t, n) => {
          e.onload = () => t(e);
          e.onerror = n;
          e.src = i;
        }));
      }
      let n = function (e, t) {
        let i = eo(e, t);
        return el(e, i, t.backgroundColor);
      }(e, t);
      setContentPreview?.(n, t);
    }
    x.current && eN && (void 0 === eP ? !en(eN, e.initialSnapshotState, {
      skipCheckRatio: !0
    }) : !en(eN, eP)) && (x.current.crossOrigin = "anonymous", t(x.current, eN));
  }, [eN, eP, e.initialSnapshotState, setContentPreview]);
  useEffect(() => {
    en(eP, eN) && e.initialSnapshotState && !en(e.initialSnapshotState, eN) && (e.initialSnapshotState?.preset && ey(e.initialSnapshotState.preset), et(e.initialSnapshotState.backgroundColor));
  }, [e.initialSnapshotState, eN, eP]);
  let eO = useMemo(() => {
    if (!showEditPreviewControls || !eA || !Z) return null;
    {
      let t = e.applyToAllCallback ? () => e.applyToAllCallback(Z) : void 0;
      return jsx(U, {
        id: e.imageSrc,
        backgroundColor: ee,
        setBackgroundColor: et,
        zoomPanPreset: eA,
        setZoomPanPreset: ey,
        onResetCallback: e.disableReset ? void 0 : () => {
          let t = e.resetSnapshotState ?? ec.current;
          if (t) {
            let e = t.preset;
            e ? ey(e) : (ef(t), ey(e_));
            et(t.backgroundColor);
          }
        },
        applyToAllCallback: t
      });
    }
  }, [e.disableReset, e.imageSrc, ee, eA, showEditPreviewControls, e.resetSnapshotState, e_, Z, e.applyToAllCallback]);
  let eD = useMemo(() => {
    let e = {
      position: "absolute",
      width: "100%",
      height: "100%",
      boxSizing: "border-box"
    };
    let t = e;
    let i = e;
    let n = "1px solid red";
    "left" === z ? t = {
      ...e,
      borderLeft: n
    } : "right" === z ? t = {
      ...e,
      borderRight: n
    } : "center" === z && (t = {
      ...e,
      borderRight: n,
      transform: "translateX(-50%)"
    });
    "top" === W ? i = {
      ...e,
      borderTop: n
    } : "bottom" === W ? i = {
      ...e,
      borderBottom: n
    } : "center" === W && (i = {
      ...e,
      borderBottom: n,
      transform: "translateY(-50%)"
    });
    return {
      verticalGuidelineStyles: t,
      horizontalGuidelineStyles: i
    };
  }, [z, W]);
  return jsxs("div", {
    className: "feed_post_zoom_pan--zoomPanContainer--zUqcL",
    style: {
      backgroundColor: colorToRgbaString(ee)
    },
    children: [jsxs("div", {
      className: "feed_post_zoom_pan--guidelineLayer--p6ik- feed_post_zoom_pan--zoomPanInteractionLayer--8w-cl",
      children: [jsx("div", {
        style: eD.verticalGuidelineStyles
      }), jsx("div", {
        style: eD.horizontalGuidelineStyles
      })]
    }), jsx("div", {
      style: ek,
      children: jsx("img", {
        className: "feed_post_zoom_pan--transformedImage--hjQSb",
        style: {
          visibility: eg && w ? "visible" : "hidden",
          border: e.enableSnapToGuidelines && D ? "1px solid red" : "none"
        },
        ref: x,
        src: e.imageSrc,
        crossOrigin: e.crossOrigin,
        alt: getI18nString("fig_feed.thumbnail_alt_text"),
        onLoad: eT
      })
    }), jsx("div", {
      style: {
        display: eg ? "none" : "block"
      },
      children: jsx(LoadingSpinner, {})
    }), jsx("div", {
      className: "feed_post_zoom_pan--zoomPanInteractionLayer--8w-cl",
      style: {
        cursor: D ? "grabbing" : "grab"
      },
      ref: $,
      onClick: e => {
        F && (e.stopPropagation(), M(!1));
      },
      onMouseUp: ex,
      onMouseDown: e => {
        eg && (e.preventDefault(), L(!0), B({
          x: e.clientX - eg.x,
          y: e.clientY - eg.y
        }));
      },
      onMouseMove: t => {
        if (O(!0), D && j && eg && V) {
          t.stopPropagation();
          M(!0);
          e.enableSnapToGuidelines && null !== S.current && null !== Z && (eI(S.current.width, eg.x + Z.width / 2 - S.current.width / 2), eE(S.current.height, eg.y + Z.height / 2 - S.current.height / 2));
          let i = t.clientX - j.x;
          let n = t.clientY - j.y;
          if (e.enableSnapToGuidelines && I) {
            let e = Y;
            if (null === Y) {
              let t = Math.abs(i - eg.x);
              let r = Math.abs(n - eg.y);
              t > r ? e = "horizontal" : r > t && (e = "vertical");
              q(e);
            }
            "horizontal" === e ? n = eg.y : "vertical" === e && (i = eg.x);
          }
          ef(ea({
            x: i,
            y: n,
            zoom: eg.zoom
          }, V));
        }
      },
      onContextMenu: t => {
        e.onContextMenu && e.onContextMenu(t);
      }
    }), showEditPreviewControls && eO, enableZoomControls && jsx(ep, {
      position: eg,
      setPosition: ef,
      boundLimits: V,
      interactionOverlayDims: Z,
      imageRef: x,
      imageScale: i,
      minZoomFactor,
      maxZoomFactor
    })]
  });
}
function eu(e, t) {
  return Math.pow(2, Math.round(Math.log(e * (t ? .5 : 2)) / Math.log(2)));
}
function ep({
  position: e,
  setPosition: t,
  boundLimits: i,
  interactionOverlayDims: a,
  imageRef: s,
  imageScale: o,
  minZoomFactor: d,
  maxZoomFactor: c
}) {
  let [u, p] = useState(!0);
  let [m, h] = useState(!0);
  let g = er(d, c);
  let f = ed(d, c);
  let _ = useCallback(() => {
    if (!e || !i) return;
    let n = eu(e.zoom, !1);
    let r = ea({
      ...e,
      zoom: g(n, o)
    }, i);
    t(r);
    p(n === r.zoom);
    h(!0);
  }, [i, o, e, t, g]);
  let y = useCallback(() => {
    if (!e || !i) return;
    let n = eu(e.zoom, !0);
    let r = ea({
      ...e,
      zoom: g(n, o)
    }, i);
    t(r);
    h(n === r.zoom);
    p(!0);
  }, [i, o, e, t, g]);
  let b = useCallback(n => {
    if (!e || !a || !i) return;
    let r = {
      ...e
    };
    switch (n) {
      case "ZOOM_IN":
        return _();
      case "ZOOM_OUT":
        return y();
      case "ZOOM_TO_FIT":
        r = f({
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        }, a, "Fit", o);
        break;
      case "ZOOM_TO_50":
        r.zoom = .5 / o;
        break;
      case "ZOOM_TO_100":
        r.zoom = 1 / o;
        break;
      case "ZOOM_TO_200":
        r.zoom = 2 / o;
    }
    t(ea(r, i));
  }, [i, s, o, a, _, y, e, t, f]);
  let v = useCallback(n => {
    e && i && t(ea({
      ...e,
      zoom: g(n / o / 100, o)
    }, i));
  }, [i, o, e, t, g]);
  let I = useMemo(() => [{
    type: "ZOOM_IN",
    disabled: !u
  }, {
    type: "ZOOM_OUT",
    disabled: !m
  }, {
    type: "ZOOM_TO_FIT"
  }, {
    type: "ZOOM_TO_50"
  }, {
    type: "ZOOM_TO_100"
  }, {
    type: "ZOOM_TO_200"
  }], [u, m]);
  let E = (e?.zoom ?? 1) * 100 * o;
  return jsx("div", {
    className: l()(FE, "feed_post_zoom_pan--zoomControls--8PqPP feed_post_detail_modal--contentOverlayPill--1jsoj"),
    children: jsx(J, {
      canZoomIn: u,
      canZoomOut: m,
      onZoomIn: _,
      onZoomOut: y,
      currentZoom: E,
      Dropdown: function (e) {
        return jsx(_$$p, {
          targetRect: e.targetRect,
          showingZoomDropdown: e.showingZoomDropdown,
          toggleZoomMenu: e.toggleZoomMenu,
          allowCodegenOptions: !1,
          currentZoom: E,
          dropdownItems: I,
          onSelectDropdownItem: b,
          onSubmitCustomZoom: v,
          displayAboveTarget: !0
        });
      },
      dropdownId: "feed-zoom-input-dropdown"
    })
  });
}
export const dp = $$et0;
export const DH = $$ec1;
