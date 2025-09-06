import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { debounce } from "../905/915765";
import { ServiceCategories as _$$e } from "../905/165054";
import { E as _$$E } from "../905/632989";
import { bL, l9, mc, c$ } from "../905/493196";
import { h as _$$h } from "../905/270045";
import { a as _$$a } from "../905/462280";
import { j0r, NVY } from "../figma_app/763686";
import _ from "classnames";
import { b as _$$b } from "../figma_app/517135";
import { reportError } from "../905/11";
import { renderI18nText, getI18nString } from "../905/303541";
import { v4 } from "../figma_app/655139";
import { G as _$$G, X as _$$X } from "../figma_app/521331";
import { Fj } from "../figma_app/793429";
import { Q } from "../905/217916";
import { rb } from "../905/711212";
import { ro } from "../figma_app/451499";
import { m0 } from "../figma_app/976749";
import { Ku, UK } from "../figma_app/740163";
import { gl } from "../905/216495";
import { eY } from "../figma_app/722362";
import { Gp } from "../figma_app/646357";
import { QH } from "../905/405710";
import { Fk } from "../figma_app/167249";
import { e_ as _$$e_ } from "../figma_app/803787";
import { $u } from "../figma_app/889655";
import { AT } from "../figma_app/633080";
import { J as _$$J } from "../905/225412";
import { X as _$$X2 } from "../905/839893";
import { F as _$$F } from "../figma_app/284426";
import { Ig, dc, rP } from "../figma_app/155647";
import { q as _$$q } from "../905/296913";
import { s as _$$s2 } from "../figma_app/268276";
import { P as _$$P } from "../905/907246";
import { zi } from "../905/824449";
import { _B, QT } from "../figma_app/152690";
import { Ku as _$$Ku } from "../figma_app/481279";
import { uV, rb as _$$rb, pF, jY, uQ, T4 } from "../figma_app/151869";
import { x0, VZ, SV } from "../figma_app/727192";
import { _p, Cm, d1 } from "../figma_app/826998";
import { As, Om, mL, LK, bE, DQ, ab, $f, zz, Bx, vQ, it, n as _$$n, UU, y4, Gz as _$$Gz, Ul, VB, yW, K5, cZ, fz, lF, $ as _$$$, ZM } from "../figma_app/651425";
import { q as _$$q2, x as _$$x } from "../figma_app/777660";
var h = _;
let $ = e => Number(e).toLocaleString("en", {
  style: "percent",
  maximumFractionDigits: 2
});
function X(e) {
  let {
    value
  } = e;
  let r = void 0 !== value && (e.showOpaque || 1 !== value);
  let i = $(value);
  return jsx(Fragment, {
    children: r && jsx("span", {
      className: As,
      children: i
    })
  });
}
let J = new Set(["SOLID", "GRADIENT_ANGULAR", "GRADIENT_DIAMOND", "GRADIENT_LINEAR", "GRADIENT_RADIAL"]);
let Z = new ro();
export function $$Q0(e) {
  let t = m0();
  let {
    blendMode,
    onError
  } = e;
  let a = gl(blendMode) || "string" == typeof blendMode;
  return (blendMode && !a && (console.error(TypeError(`Expected mixed | string | undefined, got ${typeof blendMode}`)), onError && onError(blendMode), r = void 0), !blendMode || ["NORMAL", "PASS_THROUGH"].includes(blendMode)) ? null : t && !e.layout ? jsx(_p, {
    className: Om,
    copyValue: blendMode.toLowerCase(),
    copyName: "mix-blend-mode",
    disableDetailModalEntry: !0,
    children: jsx("span", {
      className: mL,
      children: renderI18nText("inspect_panel.colors.blend_mode", {
        blendMode: Z.format(blendMode)
      })
    })
  }) : jsx(_p, {
    indent: e.indent,
    className: e.className,
    name: getI18nString("inspect_panel.colors.blend"),
    value: Z.format(blendMode),
    copyName: "mix-blend-mode"
  });
}
export function $$ee4({
  onClick: e,
  color: t,
  value: r,
  labelRef: i,
  pillClassName: a,
  htmlAttributes: s,
  disableHover: o
}) {
  let d = jsxs(Fragment, {
    children: [jsx(_$$J, {
      color: t,
      forceNonInteractive: !0
    }), jsx("div", {
      ref: i,
      className: LK,
      children: r
    })]
  });
  let c = h()(bE, !o && DQ, a);
  return e ? jsx(_$$E, {
    className: c,
    onClick: e,
    htmlAttributes: s,
    children: d
  }) : jsx("div", {
    className: c,
    children: d
  });
}
function et({
  paint: e,
  color: t,
  valueFormatter: r,
  matchingVars: a,
  indent: s,
  hideBlendMode: l,
  disableDetailModalEntry: d,
  onMouseEnter: c,
  onMouseLeave: u
}) {
  let p = Ku();
  let _ = {
    ...t,
    a: t?.a ?? e.opacity ?? 1
  };
  let {
    value,
    copyValue
  } = _$$G(_, p, r);
  let E = Cm(copyValue, "color");
  let b = useCallback(() => {
    E?.();
  }, [E]);
  let {
    ref,
    ...I
  } = _$$X2(value);
  let S = {
    ...I,
    onMouseEnter: c,
    onMouseLeave: u
  };
  return jsxs("div", {
    className: ab,
    "data-testid": "inspectMultilineColorRow",
    children: [jsx(_p, {
      className: h()($f, s && zz),
      disableDetailModalEntry: d,
      matchingVars: a,
      copyValue: null,
      children: jsx($$ee4, {
        color: _,
        value,
        onClick: b,
        labelRef: ref,
        htmlAttributes: S
      })
    }), !l && jsx($$Q0, {
      className: eS(),
      blendMode: e.blendMode,
      onError: t => {
        let r = TypeError(`Expected string | undefined, got ${typeof t}`);
        console.error(r);
        reportError(_$$e.DEVELOPER_TOOLS, r, {
          extra: {
            type: typeof t,
            value: t,
            source: "RawColorUI3",
            props: {
              paint: e
            }
          }
        });
      }
    })]
  });
}
function er({
  variable: e,
  color: t
}) {
  return e?.subscriptionStatus === "LOCAL" && e?.isSoftDeleted ? jsx(_$$a, {
    "aria-label": getI18nString("variables.variable_was_deleted"),
    className: Bx
  }) : jsx(_$$P, {
    children: jsx(_$$J, {
      color: t,
      forceNonInteractive: !0
    })
  });
}
export function $$en5({
  color: e,
  variable: t,
  label: r,
  onClick: i,
  shouldStretch: a,
  selected: s
}) {
  let o = !1 === s;
  return jsx(_$$s2, {
    styleIcon: jsx(er, {
      color: e,
      variable: t
    }),
    styleName: r,
    styleDescription: t?.description,
    onClick: i,
    disableHover: o,
    shouldStretch: a,
    selected: s,
    hasFocus: s
  });
}
function ei({
  id: e,
  variable: t,
  color: r,
  paint: a,
  indent: s,
  hideBlendMode: l,
  disableDetailModalEntry: d,
  onMouseEnter: c,
  onMouseLeave: u
}) {
  let p = uV(t) ?? "";
  let _ = Cm(p, "color-variable");
  let m = useCallback(() => {
    _?.();
  }, [_]);
  let f = {
    ...r,
    a: r?.a ?? a.opacity ?? 1
  };
  return jsxs("div", {
    className: ab,
    "data-testid": "inspectMultilineColorRow",
    onMouseEnter: c,
    onMouseLeave: u,
    children: [jsx(_p, {
      className: h()(vQ, s && it),
      variableId: e,
      disableDetailModalEntry: d,
      copyValue: null,
      children: jsx($$en5, {
        color: f,
        variable: t,
        label: p,
        onClick: m
      })
    }), !l && jsx($$Q0, {
      className: eS(),
      blendMode: a.blendMode,
      onError: e => {
        let r = TypeError(`Expected string | undefined, got ${typeof e}`);
        console.error(r);
        reportError(_$$e.DEVELOPER_TOOLS, r, {
          extra: {
            type: typeof e,
            value: e,
            source: "VariableValue",
            props: {
              paint: a,
              variable: t
            }
          }
        });
      }
    })]
  });
}
function ea(e) {
  let {
    isInStyle,
    rows
  } = e;
  return jsxs("div", {
    className: _$$n,
    "data-testid": "inspectMultilineColorRow",
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    children: [jsx(d1, {
      className: h()({
        [UU]: isInStyle
      }, y4),
      label: e.styleName,
      defaultLabel: e.defaultStyleName,
      isVariable: e.isVariable,
      variableId: e.variableId,
      disableDetailModalEntry: e.disableDetailModalEntry,
      children: jsx(_$$J, {
        className: _$$Gz,
        paint: e.paint,
        tooltip: e.description
      })
    }), jsx($$Q0, {
      className: eS({
        isInStyle
      }),
      indent: !0,
      blendMode: e.paint.blendMode,
      onError: t => {
        let r = TypeError(`Expected string | undefined, got ${typeof t}`);
        console.error(r);
        reportError(_$$e.DEVELOPER_TOOLS, r, {
          extra: {
            type: typeof t,
            value: t,
            source: "MultiLinePaintValue",
            props: e
          }
        });
      }
    }), rows]
  });
}
function es(e) {
  let t = m0();
  let {
    format
  } = e;
  let {
    paint,
    valueFormatter
  } = e.formattableColor;
  let s = _B(paint);
  let {
    variable,
    variableDisplayName,
    matchingVars
  } = e.formattableColor.variable ?? s;
  if (!paint.color) return null;
  let c = {
    ...paint.color,
    a: paint.opacity ?? 1
  };
  let u = variable?.id ?? variable?.node_id;
  if (t) return variable ? jsx(ei, {
    id: u,
    variable,
    color: c,
    paint,
    indent: e.isInStyle,
    disableDetailModalEntry: e.disableDetailModalEntry,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave
  }) : jsx(et, {
    paint: e.formattableColor.paint,
    color: c,
    valueFormatter: e.formattableColor.valueFormatter,
    indent: e.isInStyle,
    disableDetailModalEntry: e.disableDetailModalEntry,
    matchingVars,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave
  });
  if (variable) {
    let r = jsx(eo, {
      format: e.format,
      valueFormatter,
      color: c,
      isInStyle: e.isInStyle
    });
    return jsx(ea, {
      paint,
      styleName: variableDisplayName,
      isVariable: !0,
      variableId: u,
      isInStyle: e.isInStyle,
      rows: t ? void 0 : r,
      disableDetailModalEntry: e.disableDetailModalEntry,
      onMouseEnter: e.onMouseEnter,
      onMouseLeave: e.onMouseLeave
    });
  }
  let p = _$$q2(c, format, valueFormatter);
  return jsxs(_p, {
    className: eS({
      format,
      isInStyle: e.isInStyle
    }),
    copyValue: p.copyValue,
    matchingVars,
    disableDetailModalEntry: e.disableDetailModalEntry,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    children: [jsx(_$$J, {
      className: _$$Gz,
      paint
    }), jsx("span", {
      className: As,
      "data-testid": "inspectColorRow",
      children: p.value
    }), _$$x.has(e.format) && jsx(X, {
      value: c.a
    })]
  });
}
function eo(e) {
  let t = _$$q2(e.color, e.format, e.valueFormatter);
  return jsxs(_p, {
    className: eS({
      format: e.format,
      isInGradient: e.isInGradient,
      isInStyle: e.isInStyle
    }),
    copyValue: t.copyValue,
    variableId: e.variableId,
    matchingVars: e.matchingVars,
    disableDetailModalEntry: e.disableDetailModalEntry,
    children: [jsx("div", {}), jsx("span", {
      className: As,
      children: t.value
    }), _$$x.has(e.format) && jsx(X, {
      value: e.color.a,
      showOpaque: e.alwaysShowOpacity || !1
    })]
  });
}
function el(e) {
  let t = m0();
  let {
    encodedPaint,
    paint,
    valueFormatter,
    typeFormatter
  } = e.formattableColor;
  let o = paint.stopsVar?.length ? paint.stopsVar : paint.stops;
  let l = jsx(Fragment, {
    children: o?.map((t, s) => jsx(ev, {
      paint,
      encodedPaint,
      format: e.format,
      gradientStop: t,
      isInStyle: e.isInStyle,
      opacity: paint.opacity ?? 1,
      valueFormatter,
      disableDetailModalEntry: e.disableDetailModalEntry
    }, s))
  });
  if (t) {
    let t = paint.opacity && 1 !== paint.opacity ? ` \xb7 ${(100 * paint.opacity).toLocaleString("en", {
      maximumFractionDigits: 2
    })}%` : null;
    return jsxs("div", {
      className: ab,
      "data-testid": "inspectMultilineColorRow",
      children: [jsxs(_p, {
        className: h()($f, bE, Ul),
        disableDetailModalEntry: e.disableDetailModalEntry,
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        children: [jsx(_$$J, {
          paint
        }), renderI18nText("inspect_panel.colors.gradient", {
          gradientType: typeFormatter(paint.type)
        }), t]
      }), jsx($$Q0, {
        className: eS(),
        indent: !0,
        blendMode: paint.blendMode
      }), l]
    });
  }
  return jsx(ea, {
    paint,
    defaultStyleName: getI18nString("inspect_panel.colors.gradient", {
      gradientType: typeFormatter(paint.type)
    }),
    isInStyle: e.isInStyle,
    rows: l,
    disableDetailModalEntry: e.disableDetailModalEntry,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave
  });
}
export function $$ed2(e) {
  let {
    formattableColor
  } = e;
  switch (formattableColor.paint.type) {
    case "SOLID":
      return jsx(es, {
        ...e
      });
    case "GRADIENT_LINEAR":
    case "GRADIENT_RADIAL":
    case "GRADIENT_DIAMOND":
    case "GRADIENT_ANGULAR":
      return jsx(el, {
        ...e
      });
    default:
      return null;
  }
}
export function $$ec9(e) {
  return e.visible && e.type && J.has(e.type);
}
export function $$eu10() {
  let e = useSelector(e => e.mirror.selectionProperties.fillPaints);
  let t = _$$rb();
  let r = useMemo(() => !e || gl(e) ? [] : e, [e]);
  let n = pF(e => _$$b(e.mirror.selectionProperties, "inheritFillStyleKey"));
  let s = useSelector(_$$e_);
  let o = useSelector(e => e.mirror.selectionProperties.inheritFillStyleKey);
  let l = useSelector(e => e.mirror.selectionProperties.styleIdForFill);
  let d = Fk((e, t) => t ? e.getStyleNodeByRef(t)?.guid : void 0, l?.assetRef);
  let c = t && _$$Ku(t);
  let u = Ig();
  let _ = o ? Gp(o, d ? [d] : [], s) : void 0;
  let h = r.filter($$ec9).map(e => dc(e, u, c || j0r.ALL_FILLS));
  return _ && n ? [rP(n, _, h)] : h;
}
export function $$ep11() {
  let e = useSelector(e => e.mirror.selectionProperties.textDecorationFillPaints);
  let t = useSelector(e => e.mirror.selectionProperties.textDecoration);
  let r = useMemo(() => "UNDERLINE" !== t || !e || gl(e) ? [] : e, [t, e]);
  let n = Ig();
  return r.filter($$ec9).map(e => dc(e, n, j0r.TEXT_FILL));
}
let e_ = () => {
  let e = jY();
  let t = uQ();
  let r = Q();
  let n = v4();
  let s = m0();
  let o = useSelector(e => $u(e) > 1 ? e.mirror.selectionPaints.paints : e.mirror.selectionPaints.paintsDirectlyOnSingleNode);
  let l = Ig();
  let d = useMemo(() => o.filter(e => $$ec9(e.paint)).map(e => dc(e.paint, l)), [o, l]);
  let c = useSelector(e => $u(e) > 1 ? e.mirror.selectionPaints.styles : e.mirror.selectionPaints.stylesDirectlyOnSingleNode);
  let u = useSelector(_$$e_);
  let p = useMemo(() => {
    let t = c.map(e => ({
      ds: Gp(e.styleKey, e.styleGUIDs, u),
      name: e.styleName
    }));
    let r = [];
    t.forEach(({
      ds: t,
      name: n
    }) => {
      if (!t) return;
      let i = t.kind === AT.SUBSCRIBED_WITHOUT_LIBRARY ? {
        ...t.value,
        style_type: "FILL"
      } : t.value;
      let a = e => e.filter($$ec9).map(e => dc(e, l));
      let s = QH(i);
      if (s && "FILL" === s.type) r.push(rP(n, t, a(s.fillPaints)));else {
        let i = e.get(t.value.node_id);
        i && r.push(rP(n, t, a(i.fills)));
      }
    });
    return r;
  }, [c, u, e, l]);
  return useMemo(() => {
    let e = [...p, ...d];
    return QT(e, t, r.inspectionMode, n, s);
  }, [p, d, t, r.inspectionMode, n, s]);
};
let eh = (e, t) => e.type === _$$q.STYLE ? jsx($$eg7, {
  color: e,
  format: t.format
}) : jsx(em, {
  color: e,
  format: t.format
});
function em(e) {
  return jsx($$ed2, {
    format: e.format,
    formattableColor: e.color,
    disableDetailModalEntry: e.disableDetailModalEntry
  });
}
export function $$eg7(e) {
  let t = useDispatch();
  let r = m0();
  let o = Fj(e.color.dsStyle.value.key);
  let l = e.color.dsStyle.kind;
  let d = e.color.dsStyle.value.node_id;
  let c = useMemo(() => debounce(() => {
    d && t(rb({
      styleNodeId: d,
      styleKind: l
    }));
  }), [t, l, d]);
  useEffect(c, [c]);
  let u = e.color.name;
  let p = Cm(u, "color style");
  let _ = useCallback(() => {
    p?.();
  }, [p]);
  let m = e.color.dsStyle.value;
  return (l === AT.SUBSCRIBED_WITHOUT_LIBRARY && (m.style_type = "FILL", m.node_id = d), r) ? jsx(_p, {
    className: h()(VB, vQ),
    styleId: e.color.dsStyle.value.key,
    styleNodeId: e.color.dsStyle.value.node_id,
    styleType: m.style_type,
    disableDetailModalEntry: e.disableDetailModalEntry,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    dataTestId: "styleNameRow",
    children: jsx(_$$s2, {
      styleIcon: jsx(zi, {
        dsStyle: m,
        disableTooltip: !0
      }),
      styleName: e.color.name,
      styleDescription: o?.description,
      onClick: _
    })
  }) : jsxs(Fragment, {
    children: [jsxs(_p, {
      className: VB,
      copyValue: e.color.name,
      dataTestId: "styleNameRow",
      onMouseEnter: e.onMouseEnter,
      onMouseLeave: e.onMouseLeave,
      children: [jsx(zi, {
        dsStyle: m,
        hideNameInTooltip: !0
      }), jsx(_p, {
        className: yW,
        value: e.color.name
      })]
    }), !r && e.color.paints.map(t => jsx("div", {
      "data-testid": "stylePaintRow",
      children: jsx($$ed2, {
        format: e.format,
        formattableColor: t,
        isInStyle: !0
      })
    }, t.encodedPaint))]
  });
}
export function $$ef8(e) {
  let t = Ku();
  let r = e.formattableColors;
  let a = useMemo(() => ({
    format: t
  }), [t]);
  return jsx(x0, {
    limit: 5,
    data: r,
    renderElement: eh,
    extras: a
  });
}
export function $$eE6({
  hideBorder: e,
  noPadding: t,
  isSubsection: r
}) {
  let i = m0();
  let a = uQ();
  let s = eY().get(a ?? "")?.type;
  let o = $$eu10();
  let l = $$ep11();
  let d = Q();
  let c = v4();
  let u = "TEXT" === s ? [...o, ...l] : o;
  let p = QT(u, a, d.inspectionMode, c, i);
  let _ = Ku();
  let h = T4.useCopyAllColors(p, _);
  return p.length < 1 ? null : jsx(VZ, {
    title: i ? "TEXT" === s ? getI18nString("dev_handoff.inspect_panel.fills.text") : getI18nString("dev_handoff.inspect_panel.fills.background") : getI18nString("inspect_panel.colors.title"),
    additionalHeaders: i ? void 0 : jsx($$eI1, {}),
    copyAllValue: i ? void 0 : h,
    recordingKey: "colors",
    noBorder: e,
    fadedTitle: i,
    snugTitle: i,
    noPadding: t,
    isSubsection: r,
    children: jsx($$ef8, {
      formattableColors: p
    })
  });
}
export function $$ey3() {
  let e = e_();
  let t = Ku();
  let r = T4.useCopyAllColors(e, t);
  return e.length < 1 ? null : jsx(VZ, {
    title: getI18nString("inspect_panel.colors.title"),
    additionalHeaders: jsx($$eI1, {}),
    copyAllValue: r,
    recordingKey: "colors",
    children: jsx($$ef8, {
      formattableColors: e
    })
  });
}
let eb = [NVY.HEX, NVY.RGB, NVY.HSL, NVY.HSB, NVY.UIColor];
let eT = [NVY.HEX, NVY.RGB, NVY.CSS, NVY.HSL, NVY.HSB];
export function $$eI1() {
  let e = Ku();
  let t = m0();
  let r = SV("inspection_panel_color_format_change");
  let a = useCallback(e => {
    UK().colorFormat.set(+e);
    r({
      value: _$$F.format(+e)
    });
  }, [r]);
  return jsxs(bL, {
    value: e.toString(),
    onChange: a,
    children: [jsx(l9, {
      width: "fill",
      label: jsx(_$$h, {
        children: _$$F.format(e)
      })
    }), jsx(mc, {
      children: (t ? eb : eT).map(e => jsx(c$, {
        value: e.toString(),
        children: _$$F.format(e)
      }, e))
    })]
  });
}
function eS(e = {}) {
  let {
    format = NVY.HEX,
    isInGradient,
    isInStyle
  } = e;
  let i = K5;
  let a = format === NVY.HEX ? "" : cZ;
  let s = isInStyle ? UU : void 0;
  let o = isInGradient ? fz : void 0;
  return h()(i, a, o, s);
}
function ev(e) {
  let t = m0();
  let {
    gradientStop,
    paint,
    encodedPaint,
    format,
    isInStyle,
    opacity,
    valueFormatter
  } = e;
  let {
    color
  } = r;
  let {
    copyValue,
    isVariableRow,
    valueWithoutOpacity,
    variable,
    variableDisplayName
  } = _$$X({
    ...e.gradientStop,
    encodedPaint,
    valueFormatter
  });
  let f = h()({
    [lF]: !0,
    [_$$$]: isVariableRow,
    [ZM]: isInStyle
  });
  let E = jsx(_$$J, {
    className: _$$Gz,
    color,
    opacity
  });
  return t ? variable ? jsx(ei, {
    id: variable.node_id,
    variable,
    color,
    paint,
    disableDetailModalEntry: e.disableDetailModalEntry,
    indent: !0,
    hideBlendMode: !0
  }) : jsx(et, {
    paint,
    color,
    valueFormatter,
    indent: !0,
    hideBlendMode: !0
  }) : isVariableRow ? jsxs("div", {
    className: _$$n,
    children: [jsx(d1, {
      className: h()(f, y4),
      isVariable: !0,
      variableId: variable.node_id,
      label: variableDisplayName,
      disableDetailModalEntry: e.disableDetailModalEntry,
      children: E
    }), (!t || !e.isInStyle) && jsx(eo, {
      alwaysShowOpacity: !0,
      format: e.format,
      valueFormatter,
      color,
      isInGradient: !0,
      isInStyle: e.isInStyle,
      disableDetailModalEntry: e.disableDetailModalEntry
    })]
  }) : jsxs(_p, {
    className: h()(eS({
      format
    }), f),
    copyValue,
    children: [E, jsx("span", {
      className: As,
      "data-testid": "inspectColorRow",
      children: valueWithoutOpacity
    }), _$$x.has(e.format) && jsx(X, {
      value: color.a
    })]
  });
}
export const aj = $$Q0;
export const Af = $$eI1;
export const DP = $$ed2;
export const x5 = $$ey3;
export const rh = $$ee4;
export const np = $$en5;
export const ZN = $$eE6;
export const Gz = $$eg7;
export const nu = $$ef8;
export const bm = $$ec9;
export const SG = $$eu10;
export const VS = $$ep11;