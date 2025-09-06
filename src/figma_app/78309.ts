import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { bL } from "../905/911410";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { K as _$$K } from "../905/443068";
import { E as _$$E } from "../905/632989";
import { A as _$$A } from "../905/891805";
import { e as _$$e } from "../905/149844";
import { k as _$$k } from "../905/888808";
import { Ad, Vm } from "../figma_app/273493";
import { nc } from "../905/189185";
import { aI } from "../905/871411";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { useHandleMouseEvent } from "../figma_app/878298";
import E from "classnames";
import { UE } from "../figma_app/191804";
import { buildUploadUrl } from "../figma_app/169182";
import { Pt } from "../figma_app/806412";
import { isInteractionPathCheck } from "../figma_app/897289";
import { E as _$$E2 } from "../905/277716";
import { k as _$$k2 } from "../905/582200";
import { Point } from "../905/736624";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { XE } from "../figma_app/91703";
import { kX } from "../figma_app/8833";
import { F as _$$F } from "../905/989956";
import { z5 } from "../905/713722";
import { hS } from "../905/216495";
import { BK } from "../905/848862";
import { Ib } from "../905/129884";
import { cn } from "../905/959568";
import { E_ } from "../figma_app/177697";
import { UZ, lK, k1, kO, nE } from "../figma_app/687767";
import { s1 } from "../figma_app/226737";
import { jj, eE, rR } from "../figma_app/952764";
import { jP, Ph } from "../figma_app/998161";
import { k8, wH, Lq, Sn, Qo, Le, f$ } from "../figma_app/887835";
var y = E;
let H = buildUploadUrl("bdf32fe13fe9a9be5b40c3de4a18572f14c9a1eb");
let $$z1 = 240;
export function $$W0({
  paint: e,
  onChange: t,
  onClose: r,
  pickerShown: l,
  hideCustomColorPickerFillTypeToggle: d,
  inheritStyleKeyField: c
}) {
  let u = useDispatch();
  let p = "slidesColorPicker";
  let _ = s1();
  let h = UZ(_);
  let [m, f] = useState(!1);
  let [E, y] = useState(new Point(0, 0));
  let b = jj(e);
  let T = useRef(null);
  let I = useCallback(() => {
    if (T.current) {
      let {
        x,
        y
      } = cn(T.current, jP);
      y(new x.Mi(x, y));
      f(!0);
      b();
    } else console.error("colorsWrapperRef.current is null");
  }, [T, b]);
  let [S, v] = useAtomValueAndSetter(E_);
  useEffect(() => () => {
    v(null);
  }, [v]);
  let N = useCallback(e => {
    v({
      varId: e,
      modeId: h
    });
    I();
  }, [I, h, v]);
  let O = useCallback(() => {
    v(null);
    f(!1);
  }, [v]);
  let R = !!S;
  let L = eE(e);
  let P = rR(t);
  return jsxs(_$$k2, {
    name: "slides_color_picker",
    children: [(R || !m) && jsx(bL, {
      width: $$z1,
      defaultPosition: {
        x: l.initialX,
        y: l.initialY
      },
      onClose: () => {
        v(null);
        r();
      },
      recordingKey: p,
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: getI18nString("slides.properties_panel.fill")
          })
        }), jsx(nB, {
          padding: 0,
          children: jsxs("div", {
            ref: T,
            children: [jsx(K, {
              paint: e,
              openCustomColorPicker: I,
              startEditingThemeColor: N,
              stopEditingThemeColor: O,
              onPaintChange: t,
              closeColorPicker: r,
              recordingKey: p
            }), jsx($, {
              paint: e,
              onPaintChange: t,
              onClickColorChit: e => {
                P(e);
                R || r();
              },
              onClickAddColor: () => {
                O();
                I();
              },
              isEditingTheme: R,
              recordingKey: p
            })]
          })
        })]
      })
    }), m && L && jsx(Ph, {
      paint: L,
      onChange: P,
      onClose: () => {
        v(null);
        f(!1);
        R || u(XE());
      },
      initialPosition: R ? E : new Point(l.initialX, l.initialY),
      enableGradients: !S,
      hideCustomColorPickerFillTypeToggle: d,
      inheritStyleKeyField: c
    })]
  });
}
function K({
  paint: e,
  openCustomColorPicker: t,
  startEditingThemeColor: r,
  stopEditingThemeColor: i,
  onPaintChange: a,
  closeColorPicker: s,
  recordingKey: o
}) {
  let l = BK(kX);
  let d = s1();
  let u = UZ(d);
  let p = lK(d);
  let [f, E] = useAtomValueAndSetter(E_);
  let y = !!f;
  let T = k1(d);
  let S = nc.user("slides-add-theme-color", () => {
    let r = T(function (e, t) {
      if (hS(e) && e.color) return e.color;
      let r = UE;
      if (t.length > 0) {
        let e = t[t.length - 1].paint.color;
        e && (r = Ad(e, 31));
      }
      return r;
    }(e, p));
    r && (E({
      varId: r,
      modeId: u
    }), t());
  });
  let A = (t, r) => {
    y ? r || (i(), a({
      ...e,
      ...t,
      type: "SOLID"
    })) : (a({
      ...e,
      ...t,
      type: "SOLID"
    }), s());
  };
  let x = e => {
    y ? i() : r(e);
  };
  let N = (t, n) => {
    t.stopPropagation();
    t.preventDefault();
    let {
      clientX,
      clientY
    } = t;
    l.show({
      data: {
        clientX,
        clientY,
        targetItem: {
          type: "THEME_COLOR",
          variableId: n,
          onEdit: () => r(n)
        },
        paint: e,
        onPaintChange: a
      }
    });
  };
  return jsx(X, {
    title: getI18nString("slides.properties_panel.color_picker.theme_colors"),
    rightControl: jsx(Y, {
      onClick: S,
      recordingKey: Pt(o, "addThemeColor")
    }),
    removeBottomPadding: 0 === p.length,
    showBottomBorder: !0,
    children: jsx(_$$E2, {
      name: "slides_theme_colors",
      children: p.map(({
        paint: t,
        variableId: r,
        variableName: i
      }) => {
        let a = t.colorVar?.value?.alias?.guid;
        let s = y ? !!f && r === f.varId : aI(a, e?.colorVar?.value?.alias?.guid);
        let l = jsx(_$$A, {});
        return t.color && a ? jsx($$q2, {
          backgroundString: _$$F.format({
            ...t.color,
            a: 1
          }),
          editIcon: l,
          isEditing: y && s,
          isSelected: s,
          onClick: () => A(t, s),
          onClickEdit: () => x(r),
          onContextMenu: e => N(e, r),
          opacity: t.color.a,
          recordingKey: Pt(o, "themeColors", r.replace("VariableID:", "")),
          showEditIcon: s,
          tooltipText: i
        }, r) : null;
      })
    })
  });
}
function Y({
  onClick: e,
  recordingKey: t
}) {
  let r = s1();
  let i = kO(r);
  return jsx(_$$K, {
    "aria-label": getI18nString("slides.properties_panel.color_picker.add_template_color_tooltip"),
    onClick: e,
    recordingKey: t,
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("slides.properties_panel.color_picker.add_template_color_tooltip")
    },
    disabled: i,
    children: jsx(_$$e, {})
  });
}
function $({
  paint: e,
  onPaintChange: t,
  onClickColorChit: r,
  onClickAddColor: a,
  isEditingTheme: s,
  recordingKey: o
}) {
  let l = BK(kX);
  let [c, u] = useState(!1);
  let h = s1();
  let [m, g] = useState(nE(h));
  let f = c ? m : m.slice(0, 17);
  let E = !c && m.length > 17;
  let y = useCallback((r, n) => {
    if (r.color) {
      n.stopPropagation();
      n.preventDefault();
      let {
        clientX,
        clientY
      } = n;
      l.show({
        data: {
          clientX,
          clientY,
          targetItem: {
            type: "DOCUMENT_COLOR",
            documentColor: r.color
          },
          paint: e,
          onPaintChange: (e, n) => {
            t(e, n);
            g(m.filter(e => e !== r));
          }
        }
      });
    }
  }, [l, e, t, m]);
  return jsxs(X, {
    title: getI18nString("slides.properties_panel.color_picker.document_colors"),
    removeBottomPadding: E,
    children: [jsx(_$$E2, {
      name: "slides_add_custom_color",
      children: jsx("div", {
        className: _$$s.flex.justifyCenter.itemsCenter.w32.h32.$,
        children: jsx(_$$E, {
          htmlAttributes: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("slides.properties_panel.color_picker.add_color_aria_label")
          },
          className: _$$s.w24.h24.$,
          "aria-label": getI18nString("slides.properties_panel.color_picker.add_color_aria_label"),
          onClick: a,
          recordingKey: Pt(o, "addColor"),
          children: jsx("img", {
            src: H,
            alt: "",
            className: _$$s.w24.h24.$
          })
        })
      })
    }), jsxs(_$$E2, {
      name: "slides_document_colors",
      children: [f.map((t, i) => jsx($$q2, {
        backgroundString: _$$F.format(t.color),
        tooltipText: z5.format(t.color),
        tooltipSubtext: t.opacity && 1 !== t.opacity ? `${(100 * t.opacity).toFixed(0)}%` : void 0,
        opacity: t.opacity,
        onClick: () => r(t),
        onContextMenu: e => y(t, e),
        isSelected: !s && Vm(t.color, e?.color) && t.opacity === e?.opacity,
        recordingKey: Pt(o, "documentColor", _$$F.format(t.color))
      }, i)), E && jsx(_$$E, {
        className: _$$s.wFull.h32.flex.itemsCenter.justifyCenter.$,
        onClick: () => u(!0),
        recordingKey: Pt(o, "documentColors", "more"),
        children: jsx(_$$k, {})
      })]
    })]
  });
}
function X({
  title: e,
  rightControl: t,
  removeBottomPadding: r,
  showBottomBorder: i,
  children: a
}) {
  return jsxs("div", {
    className: _$$s.pl12.pr8.$$if(i, _$$s.bb1.bSolid.colorBorder).$$if(!r, _$$s.pb12).$,
    children: [jsxs("div", {
      className: _$$s.h40.pl4.flex.justifyBetween.itemsCenter.$,
      children: [jsx("div", {
        className: _$$s.textBodyMedium.colorTextSecondary.$,
        children: e
      }), t]
    }), jsx("div", {
      className: _$$s.flex.flexWrap.gap4.$,
      children: a
    })]
  });
}
export function $$q2({
  backgroundString: e,
  opacity: t,
  tooltipText: r,
  tooltipSubtext: i,
  onClick: a,
  onContextMenu: s,
  isSelected: o,
  editIcon: l,
  showEditIcon: c,
  isEditing: u,
  onClickEdit: p,
  recordingKey: _
}) {
  let h = useHandleMouseEvent(_, "contextmenu", e => {
    s && s(e);
  });
  return jsxs("div", {
    className: y()(k8, {
      [wH]: o
    }),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip-show-above": !0,
    "data-tooltip": r,
    "data-tooltip-subtext": i,
    "data-tooltip-text-inline": !0,
    "data-testid": _,
    children: [l && c && p && jsx(_$$E, {
      className: y()(Lq, {
        [Sn]: u,
        [Qo]: isInteractionPathCheck()
      }),
      onClick: e => {
        if (isInteractionPathCheck()) p();else {
          let t = e.currentTarget.getBoundingClientRect();
          let r = t.width / 2;
          let n = t.left + r;
          let i = t.top + r;
          Math.pow(e.clientX - n, 2) + Math.pow(e.clientY - i, 2) <= r * r && p();
        }
      },
      recordingKey: Pt(_, "edit"),
      children: l
    }), jsxs(_$$E, {
      htmlAttributes: {
        onContextMenu: h
      },
      onClick: a,
      className: _$$s.w24.h24.relative.$,
      recordingKey: _,
      "aria-label": e,
      children: [jsx("div", {
        className: Le,
        style: {
          background: e
        }
      }), jsx("div", {
        className: f$,
        style: {
          opacity: void 0 !== t ? 1 - t : 0
        }
      })]
    })]
  });
}
export const GY = $$W0;
export const pg = $$z1;
export const qm = $$q2;