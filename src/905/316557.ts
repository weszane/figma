import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useCallback, useState, createRef, useRef, useMemo, memo, Fragment as _$$Fragment, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gZ, hE, HG, bL } from "../905/598775";
import { IK } from "../905/521428";
import { AppStateTsApi, Fullscreen, VariableDataType } from "../figma_app/763686";
import { permissionScopeHandler, scopeAwareFunction } from "../905/189185";
import { Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { createAtomWithEquality, atom, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { useMemoStable } from "../905/19536";
import h from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { D8, GG } from "../905/511649";
import { k as _$$k2 } from "../905/582200";
import { Point } from "../905/736624";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { isValidValue, isInvalidValue } from "../905/216495";
import { getObservableValue } from "../figma_app/84367";
import { Fk } from "../figma_app/167249";
import { cn, VZ } from "../905/959568";
import { UG } from "../figma_app/628987";
import { Ao } from "../905/748636";
import { lQ } from "../905/934246";
import { bL as _$$bL } from "../905/911410";
import { vo, Y9, hE as _$$hE, jk, nB } from "../figma_app/272243";
import { K as _$$K } from "../905/443068";
import { E as _$$E } from "../905/632989";
import { E as _$$E2 } from "../905/172252";
import { i as _$$i } from "../905/22844";
import { W as _$$W } from "../905/798224";
import { A as _$$A } from "../905/891805";
import { e as _$$e } from "../905/149844";
import { Ad } from "../figma_app/273493";
import { getSingletonSceneGraph } from "../905/700578";
import { A as _$$A2 } from "../vendor/850789";
import { trackEventAnalytics } from "../905/449184";
import { UE, J1 } from "../figma_app/191804";
import { ZC } from "../figma_app/39751";
import { u1, XE } from "../figma_app/91703";
import { sw, rk } from "../figma_app/914957";
import { Yr } from "../figma_app/8833";
import { F as _$$F } from "../905/989956";
import { bL as _$$bL2 } from "../figma_app/852050";
import { Wh } from "../figma_app/615482";
import { Ib } from "../905/129884";
import { q as _$$q } from "../figma_app/905311";
import { ks } from "../figma_app/626177";
import { bf } from "../figma_app/635062";
import { NQ, CK, rR } from "../figma_app/952764";
import { qm } from "../figma_app/78309";
import { jP, Ph } from "../figma_app/998161";
import { it } from "../figma_app/587612";
import { W as _$$W2 } from "../figma_app/940341";
import { TN, Dq, E_ } from "../figma_app/177697";
import { Xo, lK, UZ, k1, kO } from "../figma_app/687767";
import { B as _$$B } from "../905/118396";
import { KL, Z3 } from "../figma_app/450967";
import { o as _$$o } from "../905/821217";
import { d as _$$d } from "../905/976845";
import { O as _$$O } from "../905/969533";
import { pn } from "../905/714538";
import { A as _$$A3 } from "../905/536006";
import { y8 } from "../905/188169";
import { R4 } from "../figma_app/835688";
import { t as _$$t2 } from "../905/100946";
var g = h;
let ec = Wh(() => createAtomWithEquality(atom({})));
let eu = "slides.advancedEditThemeModal";
function ep({
  themeId: e,
  initialPosition: t,
  closePicker: i
}) {
  let a = useAtomWithSubscription(TN);
  useEffect(() => {
    a.includes(e) || i();
  }, [a, e, i]);
  return jsx("div", {
    "data-testid": generateRecordingKey(eu, e),
    children: jsx(_$$k2, {
      name: "slides_advanced_edit_theme_modal",
      children: jsx(_$$bL, {
        width: 280,
        defaultPosition: t,
        onClose: i,
        recordingKey: eu,
        children: jsxs(vo, {
          children: [jsxs(Y9, {
            children: [jsx(_$$hE, {
              children: jsx(eg, {
                themeId: e,
                recordingKey: eu
              })
            }), jsx(jk, {
              children: jsx(em, {
                themeId: e,
                recordingKey: eu,
                onClose: i
              })
            })]
          }), jsxs(nB, {
            padding: 0,
            children: [jsx(e_, {
              themeId: e,
              recordingKey: eu
            }), jsx(ex, {
              themeId: e,
              recordingKey: eu
            })]
          })]
        })
      })
    })
  });
}
function em({
  themeId: e,
  recordingKey: t,
  onClose: i
}) {
  let a = useAtomWithSubscription(TN).length;
  let s = AppStateTsApi?.slideThemeLibBindings().numSlidesUsingTheme(e) ?? 0;
  let o = !0;
  let c = getI18nString("slides.properties_panel.theme.remove_style_from_deck");
  1 === a ? (o = !1, c = getI18nString("slides.properties_panel.theme.cant_remove_only_style")) : s > 0 && (o = !1, c = getI18nString("slides.properties_panel.theme.cant_remove_used_style"));
  let u = useCallback(() => {
    permissionScopeHandler.user("delete-theme", () => {
      o && (AppStateTsApi.slideThemeLibBindings().deleteTheme(e), trackEventAnalytics("Theme Removed"), i());
    });
  }, [e, o, i]);
  let m = generateRecordingKey(t, "removeTheme");
  return jsx(_$$K, {
    htmlAttributes: {
      "data-tooltip": c,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-above": !0,
      "data-testid": m
    },
    "aria-label": c,
    onClick: u,
    recordingKey: m,
    disabled: !o,
    children: jsx(_$$i, {})
  });
}
let eh = "slides-edit-theme-name-screen-reader-instruction";
function eg({
  themeId: e,
  recordingKey: t
}) {
  let i = useAtomWithSubscription(Dq)[e];
  let [a, s] = useState(!1);
  return i ? a ? jsx(ef, {
    themeId: e,
    initialName: i,
    recordingKey: t,
    onFinish: () => s(!1)
  }) : jsxs(Fragment, {
    children: [jsx(_$$E, {
      className: "slides_edit_theme_modal--themeNameDisplay--i3HaU",
      onClick: () => s(!0),
      recordingKey: generateRecordingKey(t, "editThemeNameButton"),
      "aria-describedby": eh,
      children: i
    }), jsx(_$$E2, {
      id: eh,
      children: getI18nString("slides.properties_panel.theme.click_to_edit_theme_name")
    })]
  }) : null;
}
function ef({
  themeId: e,
  initialName: t,
  recordingKey: i,
  onFinish: a
}) {
  let [s, o] = useState(t);
  let c = useCallback(() => {
    s.trim().length > 0 && s !== t && permissionScopeHandler.user("rename-theme", () => AppStateTsApi?.slideThemeLibBindings().setThemeName(e, s));
    a();
  }, [s, t, e, a]);
  let u = useCallback(e => {
    o(e.target.value);
  }, []);
  let p = useCallback(e => {
    "Enter" === e.key ? c() : "Escape" === e.key && a();
  }, [c, a]);
  return jsx(ks, {
    autoComplete: "off",
    autoFocus: !0,
    className: "slides_edit_theme_modal--textInput--a8Tb-",
    delay: 50,
    id: "themeName",
    name: getI18nString("slides.properties_panel.theme.name_input_description"),
    onBlur: c,
    onChange: u,
    onKeyDown: p,
    placeholder: getI18nString("slides.properties_panel.theme.panel_title"),
    recordingKey: generateRecordingKey(i, "editThemeName"),
    value: s
  });
}
function e_({
  themeId: e,
  recordingKey: t
}) {
  let i = Xo(e).filter(e => !e.is_soft_deleted);
  let s = it();
  let o = useSelector(e => e.stylePickerShown);
  let [c, u] = useState(void 0);
  if (!i.length) return null;
  let p = scopeAwareFunction.user("slides-add-text-style", () => {
    if (!Fullscreen || !AppStateTsApi) return;
    let t = Fullscreen.createStyleWithoutSelection("inheritTextStyleKey", `Text style ${i.length + 1}`, "", !1);
    if (!t) return;
    let n = getSingletonSceneGraph().getStyleNodeByRef(t);
    n && (AppStateTsApi?.slideThemeLibBindings().addStyleToLocalTheme(n.guid, e), u(n.guid));
  });
  return jsxs(Fragment, {
    children: [jsx(ew, {}), jsxs("div", {
      className: _$$s.pt8.pb16.$,
      children: [jsx("p", {
        className: _$$s.pl16.pr8.pb8.$,
        children: jsx(eS, {
          sectionName: getI18nString("slides.properties_panel.text_styles"),
          buttonLabel: getI18nString("slides.properties_panel.theme.add_text_style_label"),
          onClickAdd: p
        })
      }), jsx(eA, {
        themeId: e,
        textStyles: i,
        textPreviewColor: s,
        isDragToReorderDisabled: o.isShown,
        newlyAddedStyleToEdit: c,
        recordingKey: t
      })]
    })]
  });
}
function eA({
  themeId: e,
  textStyles: t,
  textPreviewColor: i,
  isDragToReorderDisabled: a,
  newlyAddedStyleToEdit: s,
  recordingKey: o
}) {
  let c = function (e) {
    let t = useMemoStable(() => e.map(e => e.node_id), [e]);
    return Fk((e, t) => {
      let i = {};
      for (let n of t) {
        let t = e.get(n);
        t && (i[n] = {
          fontName: t.fontName.family,
          fontSize: t.fontSize
        });
      }
      return i;
    }, t);
  }(t);
  let u = _$$B();
  let [p, h] = useState([]);
  let g = useCallback(() => h([]), [h]);
  let f = useCallback((e, t, i) => {
    for (let n of e) permissionScopeHandler.user("reorder-slide-theme-style", () => {
      Fullscreen?.insertStyleBetween(n.node_id, t?.node_id || "", i?.node_id || "");
    });
  }, []);
  return jsx(_$$q, {
    listItems: t,
    selectedIndices: p,
    updateSelection: h,
    onDragEnd: g,
    onInsertItemsBetweenValues: f,
    isDragDisabled: a,
    renderListItem: (t, r, a, l, d, p, m) => {
      let h = c[t.node_id];
      return h ? jsx(ey, {
        enterEditModeOnMount: t.node_id === s,
        fontName: h.fontName,
        fontSize: h.fontSize,
        fontsAreLoadingChecker: u,
        isAnyOtherStyleBeingReordered: l,
        isBeingReordered: a,
        onMouseDown: d,
        onMouseMove: p,
        onMouseUp: m,
        previewColor: i,
        recordingKey: o,
        textStyle: t,
        themeId: e
      }, t.node_id) : null;
    }
  });
}
function ey({
  themeId: e,
  textStyle: t,
  previewColor: i,
  fontName: s,
  fontSize: o,
  fontsAreLoadingChecker: d,
  recordingKey: c,
  isBeingReordered: u,
  isAnyOtherStyleBeingReordered: p,
  enterEditModeOnMount: m,
  onMouseDown: h,
  onMouseUp: A,
  onMouseMove: y
}) {
  let b = useDispatch();
  let I = createRef();
  let E = bf(t);
  let {
    fontsAreLoading,
    checkFontsAreLoading
  } = d;
  let [C, T] = useState(!1);
  let k = ZC(C);
  Fk((e, t) => {
    let i = e.get(t);
    if (!i) return !1;
    let n = i.hasMissingFont;
    n && checkFontsAreLoading();
    T(n);
  }, t.node_id);
  useEffect(() => {
    let e = getSingletonSceneGraph().get(t.node_id);
    e && !fontsAreLoading && T(e.hasMissingFont);
  }, [t.node_id, T, fontsAreLoading]);
  let [R, N] = _$$A2(C, 200);
  useEffect(() => {
    (void 0 === k || k && !C) && N.flush();
  }, [k, C, N]);
  let P = useCallback(() => {
    if (E) b(sw());else if (R) Fullscreen?.findMissingFontsAndShowPopover();else if (I.current) {
      Fullscreen?.selectStyleByGuid(t.node_id);
      let e = I.current.getBoundingClientRect();
      b(rk({
        style: t,
        rowTop: e.y,
        rowLeft: e.x
      }));
    }
  }, [t, E, R, b, I]);
  let O = useRef(!1);
  useEffect(() => {
    m && !O.current && (P(), O.current = !0);
  }, [m, P]);
  useEffect(() => () => {
    b(sw());
  }, [b]);
  let D = generateRecordingKey(c, "textStyleRow", t.node_id);
  return jsx(D8, {
    "aria-controls": _$$W2,
    "aria-expanded": E,
    "aria-haspopup": "menu",
    "aria-label": getI18nString("slides.properties_panel.library_text_styles.text_label", {
      textStyleName: t.name,
      fontName: s,
      fontSize: o.toString()
    }),
    className: "slides_edit_theme_modal--textStyleInfoRow--DGFcG",
    "data-testid": D,
    forwardedRef: I,
    onClick: e => {
      P();
      e.stopPropagation();
    },
    onMouseDown: h,
    onMouseMove: y,
    onMouseUp: A,
    recordingKey: D,
    role: "button",
    tabIndex: 0,
    children: jsxs("div", {
      className: g()("slides_edit_theme_modal--textStyleInfoRowInner--RaGPu", {
        "slides_edit_theme_modal--selected--XTpFC": E,
        "slides_edit_theme_modal--ignoreHover--nYpyg": p && !u,
        "slides_edit_theme_modal--reorderHighlight--wAh7Z": u
      }),
      children: [jsx(ev, {
        themeId: e,
        styleId: t.node_id,
        previewColor: i
      }), R && jsx(_$$W, {}), jsx(eb, {
        fontName: s,
        fontSize: o
      })]
    })
  });
}
function eb({
  fontName: e,
  fontSize: t
}) {
  let i = e.length > 10 ? e : void 0;
  return jsxs("div", {
    className: _$$s.flex.gap2.textBodySmall.colorTextSecondary.flexGrow1.contentCenter.justifyEnd.alignRight.$,
    children: [jsx("p", {
      className: _$$s.noWrap.overflowHidden.ellipsis.$,
      style: {
        maxWidth: "10ch"
      },
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": i,
      children: e
    }), jsx("p", {
      children: "\xb7"
    }), jsx("p", {
      children: t
    })]
  });
}
function ev({
  themeId: e,
  styleId: t,
  previewColor: i
}) {
  let a = Fk((e, t) => e.get(t)?.name ?? "", e);
  let [s, o] = useAtomValueAndSetter(ec);
  let l = s[t];
  let d = useCallback(e => {
    o(i => {
      let n;
      let r = i[t];
      r && URL.revokeObjectURL(r.previewUrl);
      e && (n = {
        previewUrl: URL.createObjectURL(new Blob([e.preview])),
        previewHeight: e.previewHeight
      });
      return {
        ...i,
        [t]: n
      };
    });
  }, [o, t]);
  let c = useMemoStable(() => ({
    color: i,
    minHeight: KL.MIN_THEME_TEXT_STYLE_PREVIEW_HEIGHT,
    maxHeight: KL.MAX_THEME_TEXT_STYLE_PREVIEW_HEIGHT,
    maxWidth: 100
  }), [i]);
  Z3({
    themeId: e,
    styleId: t,
    options: c,
    onPreviewGenerated: d
  });
  return jsx(eI, {
    styleName: a,
    thumbnailUrl: l?.previewUrl,
    previewHeight: l?.previewHeight
  });
}
function eI({
  styleName: e,
  thumbnailUrl: t,
  previewHeight: i
}) {
  return t && i ? jsx("img", {
    style: {
      height: `${i}px`,
      objectFit: "contain"
    },
    src: t,
    draggable: !1,
    alt: e
  }) : jsx("div", {
    className: _$$s.fontMedium.colorText.$,
    children: e
  });
}
let eE = `${Yr}-advanced-theme-editing`;
function ex({
  themeId: e,
  recordingKey: t
}) {
  let i = lK(e);
  let s = UZ(e);
  let [o, c] = useAtomValueAndSetter(E_);
  let u = ZC(o);
  let m = function (e, t) {
    let i = _$$bL2(e?.varId ?? "", t);
    return i && i.type === VariableDataType.COLOR ? i : null;
  }(o, s);
  let h = useMemo(() => {
    if (o && m) return NQ(m.value);
  }, [o, m]);
  let g = useRef(null);
  let _ = useSelector(e => e.pickerShown && e.pickerShown.id === eE ? e.pickerShown : null);
  let {
    openColorPicker,
    closeColorPicker
  } = function (e, t) {
    let i = useDispatch();
    return {
      openColorPicker: useCallback(() => {
        if (e) return !1;
        if (t.current) {
          let {
            x,
            y
          } = cn(t.current, jP);
          i(u1({
            id: eE,
            initialX: x,
            initialY: y
          }));
          return !0;
        }
        return !1;
      }, [e, t, i]),
      closeColorPicker: useCallback(() => {
        i(XE());
      }, [i])
    };
  }(_, g);
  let [x, S] = useState(!1);
  let C = useCallback(e => {
    g.current && (c({
      varId: e,
      modeId: s
    }), openColorPicker());
  }, [g, s, c, openColorPicker]);
  let T = useCallback(() => {
    c(null);
    closeColorPicker();
  }, [c, closeColorPicker]);
  let R = useCallback(e => !!o && e.variableId === o.varId, [o]);
  let N = useCallback(e => {
    R(e) ? T() : C(e.variableId);
  }, [R, C, T]);
  let P = k1(e);
  let O = useCallback(() => {
    let e = permissionScopeHandler.user("slides-add-theme-color", () => {
      let e = UE;
      if (i.length > 0) {
        let t = i[i.length - 1]?.paint?.color;
        e = t ? Ad(t, 31) : e;
      }
      return P(e);
    });
    e && C(e);
  }, [C, i, P]);
  let D = CK();
  let L = rR(D);
  if (useEffect(() => {
    x && o?.varId !== u?.varId && (fullscreenValue.commit(), S(!1));
  }, [u, o, x]), useEffect(() => () => {
    c(null);
    closeColorPicker();
  }, [c, closeColorPicker]), !i.length) return null;
  let F = !!_ && !!h;
  return jsxs(Fragment, {
    children: [jsx(ew, {}), jsxs("div", {
      className: _$$s.pt8.pb16.$,
      children: [jsx("div", {
        className: _$$s.pl16.pr8.pb8.$,
        children: jsx(eS, {
          sectionName: getI18nString("slides.properties_panel.theme.colors"),
          buttonLabel: getI18nString("slides.properties_panel.theme.add_color_label"),
          onClickAdd: O
        })
      }), jsx("div", {
        className: _$$s.flex.flexWrap.gap4.pl12.pr12.$,
        ref: g,
        children: i.map(e => {
          let {
            paint,
            variableId,
            variableName
          } = e;
          let s = R(e) && F;
          return paint.color && paint.colorVar?.value?.alias?.guid && jsx(qm, {
            backgroundString: _$$F.format({
              ...paint.color,
              a: 1
            }),
            editIcon: jsx(_$$A, {}),
            isEditing: s,
            isSelected: s,
            onClick: lQ,
            onClickEdit: () => {
              N(e);
            },
            onContextMenu: lQ,
            opacity: paint.color.a,
            recordingKey: generateRecordingKey(t, "colorChit", variableId),
            showEditIcon: !0,
            tooltipText: variableName
          }, variableId);
        })
      }), _ && F && jsx(Ph, {
        paint: h,
        onChange: (e, t) => {
          L(e, t);
          S(!!t);
        },
        initialPosition: new Point(_.initialX, _.initialY),
        enableGradients: !1,
        hideCustomColorPickerFillTypeToggle: !0,
        onClose: T,
        inheritStyleKeyField: "inheritFillStyleKey"
      })]
    })]
  });
}
function eS({
  sectionName: e,
  buttonLabel: t,
  onClickAdd: i
}) {
  return jsxs("div", {
    className: _$$s.flex.justifyBetween.itemsCenter.$,
    children: [jsx("p", {
      className: _$$s.textBodyMediumStrong.alignLeft.$,
      children: e
    }), jsx(_$$K, {
      onClick: i,
      "aria-label": t,
      children: jsx(_$$e, {})
    })]
  });
}
function ew() {
  return jsx("div", {
    className: _$$s.h1.wFull.colorBgTertiary.$
  });
}
let ek = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "m17.291 16-.145.146-1 1a.5.5 0 0 0 .708.707l1-1 1-1a.5.5 0 0 0 0-.707l-2-2a.5.5 0 0 0-.708.707L17.292 15h-1.348a3.5 3.5 0 0 1-2.751-1.337l-.036-.045-.632.81A4.5 4.5 0 0 0 15.945 16zM9.975 9.574a4.5 4.5 0 0 0-3.42-1.575H5.5A.5.5 0 0 0 5.5 9h1.056a3.5 3.5 0 0 1 2.752 1.338l.035.045zm7.317-1.575-.146-.146-1-1a.5.5 0 0 1 .708-.707l1 1 1 1a.5.5 0 0 1 0 .707l-2 2a.5.5 0 1 1-.708-.707L17.292 9h-1.348a3.5 3.5 0 0 0-2.752 1.337l-3.097 3.943A4.5 4.5 0 0 1 6.555 16H5.5a.5.5 0 0 1 0-1.001h1.056a3.5 3.5 0 0 0 2.752-1.337l3.097-3.943a4.5 4.5 0 0 1 3.54-1.72z",
      clipRule: "evenodd"
    })
  });
});
function eL(e) {
  return 1 === e.r && 1 === e.g && 1 === e.b;
}
function eF({
  children: e
}) {
  return jsxs("div", {
    className: "x78zum5 x10w6t97 x1td3qas x192jxwq xb3r6kr x2lah0s x1n2onr6",
    children: [jsx("div", {
      className: "x10l6tqk x13vifvy xu96u03 x10w6t97 x1td3qas x47corl x192jxwq xehbxol x9f619"
    }), e]
  });
}
function eM({
  isDeletedTheme: e,
  colorsToRender: t,
  shuffleCallback: i,
  themeId: a,
  backgroundVars: o,
  name: l,
  width: d,
  usedFonts: u,
  fontItemMap: p,
  googleFontPreviews: m,
  onClickRow: h,
  onClickChitRegion: g,
  onClickEdit: f,
  isEditing: _,
  recordingKey: A
}) {
  let [y, b] = useState(!1);
  let [I, E] = useState(!1);
  let x = !!f;
  let S = !!g && (I || y);
  return jsxs("div", {
    onMouseEnter: () => b(!0),
    onMouseLeave: () => b(!1),
    onFocus: () => E(!0),
    onBlur: () => E(!1),
    children: [jsx(gZ, {
      className: "x78zum5 x6s0dn4 x1n2onr6 xn1qhxa x9f619 xh8yej3 x5yr21d",
      "data-onboarding-key": R4,
      children: jsx(hE, {
        className: "x78zum5 x6s0dn4 xh8yej3 x5yr21d",
        children: jsxs(_$$E, {
          className: "xh8yej3 x5yr21d",
          onClick: h,
          recordingKey: A,
          htmlAttributes: {
            id: "slide-theme-main-button"
          },
          children: [jsx(eF, {
            children: jsx(eB, {
              isDeletedTheme: e,
              colorsToRender: t,
              shuffleCallback: i,
              themeId: a,
              backgroundVars: o
            })
          }), jsxs("div", {
            ...Ay.props(eK.textDescription, x && eK.textDescriptionWithEditButton),
            children: [jsx(eV, {
              themeId: a,
              name: l,
              width: d,
              usedFonts: u,
              fontItemMap: p,
              googleFontPreviews: m
            }), !x && jsx(ez, {})]
          })]
        })
      })
    }), f && jsx(HG, {
      className: "x10l6tqk xwa60dl x3m8u43 x1cb1t30 x10w6t97 x1td3qas x78zum5 xb3r6kr x2lah0s x6s0dn4 xuhu7p5",
      children: jsx(eH, {
        onClickEdit: f,
        isEditing: _,
        showEditButton: _ || y || I,
        themeId: a
      })
    }), g && jsx(HG, {
      ...Ay.props(eK.chitFloatingRegion, eK.shuffleIconContainer, S && eK.shuffleIconContainerHover),
      children: jsx(_$$E, {
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("slides.properties_panel.theme.dropdown_tooltip")
        },
        "aria-label": getI18nString("slides.properties_panel.theme.dropdown_tooltip"),
        onClick: g,
        children: S && jsx(ek, {
          className: "slides_theme_preview_row--shuffleIconHoverColor--vVBe0"
        })
      })
    })]
  });
}
function ej({
  chit: e,
  description: t,
  rightItems: i,
  onHover: r
}) {
  return jsxs("div", {
    className: "slides_theme_preview_row--themePreview--WQMpU",
    "data-onboarding-key": R4,
    style: {
      padding: "7px"
    },
    onMouseEnter: () => r?.(!0),
    onMouseLeave: () => r?.(!1),
    children: [jsxs("div", {
      className: "x78zum5 x10w6t97 x1td3qas x192jxwq xb3r6kr x2lah0s x1n2onr6",
      children: [e, jsx("div", {
        className: _$$s.h32.w32.b1.radiusSmall.borderBox.absolute.top0.left0.eventsNone.$,
        style: {
          borderColor: "var(--color-bordertranslucent)"
        }
      })]
    }), t, i]
  });
}
function eU({
  width: e,
  onClick: t,
  recordingKey: i
}) {
  return getFeatureFlags().slides_a11y_template_styles ? jsx(gZ, {
    className: "x78zum5 x6s0dn4 x1n2onr6 xn1qhxa x9f619 xh8yej3 x5yr21d",
    "data-onboarding-key": R4,
    children: jsx(hE, {
      className: "x78zum5 x6s0dn4 xh8yej3 x5yr21d",
      children: jsxs(_$$E, {
        onClick: t,
        recordingKey: i,
        children: [jsx(eF, {}), jsxs("div", {
          className: "x78zum5 x6s0dn4 x1akne3o xb3r6kr x9f619 x1qughib",
          style: {
            marginLeft: "8px"
          },
          children: [jsx(eG, {
            name: getI18nString("slides.properties_panel.theme.mixed"),
            width: e
          }), jsx(ez, {})]
        })]
      })
    })
  }) : jsx(ej, {
    chit: null,
    description: jsx("div", {
      className: _$$s.ml8.flexGrow1.colorText.overflowHidden.$,
      children: jsx(eG, {
        name: getI18nString("slides.properties_panel.theme.mixed"),
        width: e
      })
    }),
    rightItems: jsx(ez, {})
  });
}
function eB({
  isDeletedTheme: e,
  colorsToRender: t,
  shuffleCallback: i,
  themeId: r,
  backgroundVars: a
}) {
  return e ? jsx("div", {
    className: "slides_theme_preview_row--diagonalLine--7UGbz"
  }) : jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.flex.h32.w32.$,
      children: t.map(e => jsx("div", {
        className: _$$s.h32.flexGrow1.$,
        style: {
          backgroundColor: e
        }
      }, e))
    }), !getFeatureFlags().slides_a11y_template_styles && i && jsx(_$$o, {
      eventListeners: ["onMouseDown"],
      children: jsx(_$$E, {
        className: "slides_theme_preview_row--shuffleIcon--o6GHd",
        onClick: () => i(r, Array.from(a)),
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("slides.properties_panel.theme.dropdown_tooltip")
        },
        children: jsx(ek, {})
      })
    })]
  });
}
function eV({
  themeId: e,
  name: t,
  width: i,
  usedFonts: a,
  fontItemMap: s,
  googleFontPreviews: o
}) {
  return kO(e) ? jsx("div", {
    className: _$$s.ml8.flexGrow1.colorTextSecondary.overflowHidden.$,
    children: getI18nString("slides.properties_panel.theme.dropdown_deleted_theme_name")
  }) : jsxs("div", {
    className: _$$s.ml8.flexGrow1.colorText.overflowHidden.$,
    children: [jsx(eG, {
      name: t || getI18nString("slides.properties_panel.theme.generic_theme_name"),
      width: i
    }), jsx("div", {
      className: "slides_theme_preview_row--fontPreview--GZAXr",
      children: Object.keys(a).slice(0, 2).map((e, t) => jsxs(_$$Fragment, {
        children: [s[e] ? jsx("div", {
          className: _$$s.block.$,
          children: jsx(_$$A3, {
            fontItem: s[e],
            setPreviewState: lQ,
            hasFetchedGoogleFontPreviews: !!o,
            fallbackClass: _$$s.font15.noWrap.$,
            fallbackUnloadedGooglePreview: !0
          })
        }, e) : jsx("div", {
          className: _$$s.block.font15.noWrap.$,
          children: e
        }), Object.keys(a).length > 1 && 0 === t && jsx("div", {
          className: _$$s.block.w8.minW8.font15.$,
          children: ","
        })]
      }, e))
    })]
  });
}
function eG({
  name: e,
  width: t
}) {
  return jsx("div", {
    className: _$$s.h16.fpl__textBodyMediumStrongFontWeight.overflowHidden.ellipsis.noWrap.$,
    style: {
      width: t ? `${t - 76}px` : "140px"
    },
    children: e || getI18nString("slides.properties_panel.theme.generic_theme_name")
  });
}
function ez() {
  return jsx("div", {
    className: _$$s.w12.$,
    children: jsx(_$$O, {})
  });
}
function eH({
  onClickEdit: e,
  isEditing: t,
  showEditButton: i,
  themeId: r
}) {
  return e && jsx("span", {
    className: i ? _$$s.visible.$ : _$$s.invisible.$,
    children: jsx(_$$d, {
      "aria-label": getI18nString("slides.properties_panel.theme.edit_template_style"),
      onClick: e,
      "aria-expanded": !!t,
      recordingKey: `slides.edit_theme_toggle.${r}`,
      children: jsx(_$$A, {})
    })
  });
}
let eW = memo(function ({
  themeId: e,
  name: t,
  fonts: i,
  googleFontPreviews: s,
  backgroundVars: o,
  isOption: l,
  shuffleCallback: d,
  width: c,
  onClickEdit: p,
  isEditing: h,
  onClickRow: g,
  onClickChitRegion: f,
  recordingKey: _
}) {
  let A = kO(e);
  let y = lK(e);
  let b = useMemoStable(() => y, [y]);
  let v = Xo(e);
  let I = useMemoStable(() => v.map(e => e.node_id), [v]);
  let [E, x] = useState(!1);
  let w = p && (E || h);
  let C = useMemoStable(() => {
    let e = b.map(e => o.has(e.variableId) ? e.paint.color : null).filter(e => !!e);
    let t = b.map(e => o.has(e.variableId) ? null : e.paint.color).filter(e => !!e);
    let i = [];
    let n = b.length;
    e = e.sort((e, t) => J1(t) - J1(e));
    let r = [];
    let a = new Set();
    for (let t = 0; t < e.length; t++) {
      let i = _$$F.format(e[t]);
      (0 === t || i !== _$$F.format(e[t - 1])) && (r.push(e[t]), a.add(i));
    }
    if ((e = r).length >= 3) return e.slice(0, 3).map(e => _$$F.format(e));
    n > 4 ? t = t.filter(e => !(0 === e.r && 0 === e.g && 0 === e.b) && !eL(e)) : n > 3 && (t = t.filter(e => !eL(e)));
    t = t.sort((e, t) => J1(t) - J1(e));
    for (let e = 0; e < t.length; e++) {
      let n = _$$F.format(t[e]);
      0 !== e && n === _$$F.format(t[e - 1]) || a.has(n) || i.push(t[e]);
    }
    if ((n = i.length + e.length) <= 3) return [...e, ...i].map(e => _$$F.format(e));
    let s = [];
    let l = 3 - e.length;
    if (1 === l) s.push(i[i.length - 1]);else for (let e = 0; e < l; e++) {
      let t = Math.floor(e / (l - 1) * (i.length - 1));
      s.push(i[t]);
    }
    return [...e, ...s].map(e => _$$F.format(e));
  }, [b, o]);
  let T = Fk((e, t) => {
    let n = {};
    for (let r of t) {
      let t = e.get(r);
      if (!t) continue;
      let a = t.fontName.family;
      n[a] = i[a];
    }
    return n;
  }, I);
  let k = useSelector(e => e?.selectedView);
  let R = useMemo(() => pn(T), [T]);
  let N = y8(T, R, !0, s, k);
  let P = {};
  for (let e of N) P[e.family] = e;
  return getFeatureFlags().slides_a11y_template_styles ? jsx(eM, {
    backgroundVars: o,
    colorsToRender: C,
    fontItemMap: P,
    googleFontPreviews: s,
    isDeletedTheme: A,
    isEditing: h,
    name: t,
    onClickChitRegion: f,
    onClickEdit: p,
    onClickRow: g,
    recordingKey: _,
    shuffleCallback: d,
    themeId: e,
    usedFonts: T,
    width: c
  }) : jsx(ej, {
    chit: jsx(eB, {
      isDeletedTheme: A,
      colorsToRender: C,
      shuffleCallback: d,
      themeId: e,
      backgroundVars: o
    }),
    description: jsx(eV, {
      themeId: e,
      name: t,
      width: c,
      usedFonts: T,
      fontItemMap: P,
      googleFontPreviews: s
    }),
    rightItems: l ? p && jsx(eH, {
      onClickEdit: p,
      isEditing: h,
      showEditButton: !!w,
      themeId: e
    }) : jsx(ez, {}),
    onHover: x
  });
});
let eK = {
  textDescription: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    color: "x1akne3o",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    boxSizing: "x9f619",
    justifyContent: "x1qughib",
    $$css: !0
  },
  textDescriptionWithEditButton: {
    paddingRight: "x8e5d8q",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  chitFloatingRegion: {
    position: "x10l6tqk",
    top: "x13vifvy",
    left: "xu96u03",
    insetInlineStart: null,
    insetInlineEnd: null,
    height: "x10w6t97",
    width: "x1td3qas",
    $$css: !0
  },
  shuffleIconContainer: {
    display: "x78zum5",
    inset: "x1xn771c",
    insetInline: null,
    insetInlineStart: null,
    insetInlineEnd: null,
    left: null,
    right: null,
    insetBlock: null,
    top: null,
    bottom: null,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    flexShrink: "x2lah0s",
    borderRadius: "x192jxwq",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    alignItems: "x6s0dn4",
    justifyContent: "xl56j7k",
    ":has(button:focus-visible)_outline": "xuhu7p5",
    ":has(button:focus-visible)_outlineColor": null,
    ":has(button:focus-visible)_outlineOffset": null,
    ":has(button:focus-visible)_outlineStyle": null,
    ":has(button:focus-visible)_outlineWidth": null,
    $$css: !0
  },
  shuffleIconContainerHover: {
    backgroundColor: "x1vc12gn",
    $$css: !0
  }
};
let eq = "theme_dropdown--dropdownItem--lZ5rA";
let e$ = "theme_dropdown--dropdownItemSelected--6i-gL";
let eZ = new Set();
export function $$eX0({
  selectedThemeId: e,
  onChange: t,
  onCreateNewTheme: i,
  allowShuffle: s,
  allowEditTheme: o,
  recordingKey: c
}) {
  let u = useAtomWithSubscription(TN);
  let [h, g] = useState("");
  let [_, v] = useState(!1);
  let [k, R] = useState(new Point(0, 0));
  let [N, P] = useState(!1);
  let O = useRef(null);
  let D = useRef(null);
  let L = useRef({});
  let [F, M] = useState(new Point(0, 0));
  let j = O.current?.getBoundingClientRect()?.width;
  let U = useCallback(() => {
    P(!1);
  }, [P]);
  let B = useCallback((e, t) => {
    let i = L.current[e] ?? O.current;
    i && (M(t(i, 280)), g(e), P(!0));
  }, [L, O]);
  let V = useCallback((e, t) => {
    N && h === e ? U() : B(e, t);
  }, [h, N, B, U]);
  let G = !useSelector(e => e.eyedropper);
  let z = useCallback(() => {
    (_ || N) && (U(), v(!1));
  }, [U, _, N]);
  let H = useCallback(e => {
    G && (e.target instanceof Node && (O.current && O.current.contains(e.target) || D.current && D.current.contains(e.target)) || z());
  }, [O, D, z, G]);
  useEffect(() => (window.addEventListener("mousedown", H), () => window.removeEventListener("mousedown", H)), [H]);
  let W = useCallback(() => {
    if (_) z();else if (O.current) {
      let {
        x,
        y
      } = VZ(O.current, j);
      R(new y.Mi(x, y + 4));
      v(!0);
    }
  }, [_, z, j]);
  let K = o ? (e, t) => {
    e.stopPropagation();
    V(t, (e, t) => {
      let {
        x,
        y
      } = cn(e, t);
      return new y.Mi(x - 8, y);
    });
  } : void 0;
  let Y = function ({
    selectedThemeId: e,
    itemWidth: t,
    previewRowRefCallback: i,
    isThemeBeingEdited: s,
    onPreviewRowClick: o,
    onPreviewRowEditClick: d,
    recordingKey: c
  }) {
    let u = useAtomWithSubscription(TN);
    let h = useAtomWithSubscription(Dq);
    let g = function () {
      let e = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []);
      let t = Fk((e, t) => {
        let i = {};
        for (let n of t) for (let t of n) {
          let n = e.get(t);
          if (!n) continue;
          let r = n.slideThemeId;
          i[r] || (i[r] = new Set());
          n.boundVariables.fills?.[0] && i[r]?.add(n.boundVariables.fills[0].id);
        }
        return i;
      }, e);
      return useMemoStable(() => t, [t]);
    }();
    let _ = useSelector(e => e.fonts);
    let A = UG();
    return useMemo(() => u.map(r => jsx(e0, {
      id: r,
      onPreviewRowClick: o,
      selectedThemeId: e,
      previewRowRefCallback: i,
      recordingKey: c,
      themeToBackgrounds: g,
      children: jsx(eW, {
        backgroundVars: g[r] ?? eZ,
        fonts: _,
        googleFontPreviews: A,
        isEditing: s(r),
        isOption: !0,
        name: h[r] ?? "",
        onClickEdit: d ? e => d(e, r) : void 0,
        onClickRow: () => o(r, Array.from(g[r] ?? eZ)),
        recordingKey: generateRecordingKey(c, "option", r),
        themeId: r,
        width: t
      })
    }, r)), [e, u, h, g, t, _, A, i, s, o, d, c]);
  }({
    selectedThemeId: e,
    itemWidth: j,
    previewRowRefCallback: (e, t) => {
      L.current[e] = t;
    },
    isThemeBeingEdited: e => N && h === e,
    onCreateNewThemeClick: scopeAwareFunction.user("create-new-slide-theme", () => {
      i();
      fullscreenValue.commit();
      z();
    }),
    onPreviewRowClick: (e, i) => {
      t(e, i);
      z();
    },
    onPreviewRowEditClick: K,
    recordingKey: c
  });
  let q = useCallback(() => {
    u.length > 0 && 1 === Y.length && e && isValidValue(e) ? V(e, (e, t) => {
      let {
        x,
        y
      } = VZ(e, t, !1);
      return new y.Mi(x, y + 4);
    }) : W();
  }, [u, e, Y, V, W]);
  return jsxs(Fragment, {
    children: [jsx(eQ, {
      themeId: e,
      width: j,
      ref: O,
      isActive: _,
      onClick: q,
      shuffleCallback: s && !_ ? t : void 0,
      recordingKey: c
    }), jsx(_$$k2, {
      name: "slides_theme_selector_dropdown",
      children: jsxs("div", {
        ref: D,
        children: [_ && jsx(Ao, {
          headerSize: "hidden",
          initialPosition: k,
          onClose: z,
          initialWidth: j,
          autoflowHeight: !0,
          contentContainerClassName: _$$s.p8.$,
          disableDragging: !0,
          children: jsx("div", {
            className: "theme_dropdown--dropdownContainer--Imk2n",
            children: 0 === Y.length ? jsx(eJ, {
              onCreateNewThemeClick: i,
              recordingKey: c
            }, "create_new_slide_theme_button") : Y
          })
        }), (!(Y.length > 1) || _) && N && jsx(ep, {
          themeId: h,
          closePicker: U,
          initialPosition: F,
          recordingKey: "slidesEditThemeModal"
        })]
      })
    })]
  });
}
let eQ = forwardRef((e, t) => {
  let {
    themeId,
    width,
    isActive,
    onClick,
    shuffleCallback,
    recordingKey
  } = e;
  let h = useSelector(e => e.fonts);
  let f = UG();
  let A = function (e) {
    let t = useAtomWithSubscription(Dq);
    return isInvalidValue(e) ? getI18nString("slides.properties_panel.theme.mixed") : t[e] || getI18nString("slides.properties_panel.theme.generic_theme_name");
  }(themeId);
  return getFeatureFlags().slides_a11y_template_styles ? jsx(bL, {
    ...Ay.props(e1.selectedRoot, isActive ? e1.active : e1.inactive),
    ref: t,
    "data-testid": "theme-picker-button",
    children: isInvalidValue(themeId) ? jsx(eU, {
      width,
      recordingKey,
      onClick
    }) : jsx(eW, {
      backgroundVars: eZ,
      fonts: h,
      googleFontPreviews: f,
      name: A,
      onClickChitRegion: isActive ? void 0 : () => shuffleCallback?.(themeId, Array.from(eZ)),
      onClickRow: onClick,
      recordingKey,
      shuffleCallback,
      themeId,
      width
    })
  }) : jsx(GG, {
    className: g()(_$$t2, _$$s.h48.flex.my8.wFull.radiusMedium.b1.colorBorder.borderBox.alignLeft.$$if(isActive, _$$s.colorBgSecondary, _$$s.colorBg).$),
    onMouseDown: e => {
      e.stopPropagation();
      onClick();
    },
    forwardedRef: t,
    dataTestId: "theme-picker-button",
    recordingKey,
    children: isInvalidValue(themeId) ? jsx(eU, {
      width,
      onClick,
      recordingKey
    }) : jsx(eW, {
      name: A,
      themeId,
      fonts: h,
      googleFontPreviews: f,
      backgroundVars: eZ,
      shuffleCallback,
      width
    })
  });
});
function eJ({
  onCreateNewThemeClick: e,
  recordingKey: t
}) {
  return jsx("div", {
    className: _$$s.p4.$,
    children: jsx(IK, {
      variant: "secondary",
      onClick: e,
      recordingKey: generateRecordingKey(t, "createThemeButton"),
      children: getI18nString("slides.properties_panel.theme.theme_dropdown.create_new_theme_button")
    })
  }, "create_new_slide_theme_button");
}
function e0({
  children: e,
  id: t,
  onPreviewRowClick: i,
  selectedThemeId: r,
  previewRowRefCallback: a,
  recordingKey: o,
  themeToBackgrounds: l
}) {
  return getFeatureFlags().slides_a11y_template_styles ? jsx(bL, {
    className: g()(eq, {
      [e$]: r === t
    }),
    ref: e => a(t, e),
    children: e
  }) : jsx(D8, {
    onClick: () => i(t, Array.from(l[t] || eZ)),
    className: g()(eq, {
      [e$]: r === t
    }),
    forwardedRef: e => a(t, e),
    recordingKey: generateRecordingKey(o, "option", t),
    children: e
  }, t);
}
eQ.displayName = "CurrentlySelectedSlidesThemePreviewRow";
let e1 = {
  selectedRoot: {
    display: "x78zum5",
    height: "xsdox4t",
    width: "xh8yej3",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    border: "x1bamp8i",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    textAlign: "xdpxx8g",
    ":has(#slide-theme-main-button:focus-visible)_outline": "x1i41eg0",
    ":has(#slide-theme-main-button:focus-visible)_outlineColor": null,
    ":has(#slide-theme-main-button:focus-visible)_outlineOffset": null,
    ":has(#slide-theme-main-button:focus-visible)_outlineStyle": null,
    ":has(#slide-theme-main-button:focus-visible)_outlineWidth": null,
    $$css: !0
  },
  active: {
    backgroundColor: "x1v8gsql",
    $$css: !0
  },
  inactive: {
    backgroundColor: "x1yjdb4r",
    $$css: !0
  }
};
export const n = $$eX0;