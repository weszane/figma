import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, memo, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { rXF, plo, WXh, rrT, ibQ, FAf, lyf, Ez5, NLJ, Oin } from "../figma_app/763686";
import { renderI18nText, getI18nString } from "../905/303541";
import { AV, Gb } from "../figma_app/933328";
import { ED } from "../figma_app/504823";
import { T as _$$T } from "../905/858738";
import { s6, KH, p8 } from "../figma_app/722362";
import { BI } from "../figma_app/546509";
import { W as _$$W } from "../441/503702";
import { ut } from "../figma_app/84367";
import { Lk } from "../figma_app/122682";
import { mapFileTypeToEditorType, FEditorType } from "../figma_app/53721";
import { m as _$$m } from "../905/99004";
import { qh } from "../figma_app/990334";
import { A as _$$A } from "../9410/188255";
import { pO } from "../figma_app/42945";
import { J as _$$J } from "../642/485582";
import { G as _$$G } from "../9410/729166";
import { G as _$$G2, b as _$$b } from "../9410/59055";
import { _ as _$$_ } from "../441/351942";
import { c as _$$c } from "../9410/794676";
import { sk } from "../9410/973081";
import { qn, XI } from "../9410/793186";
import { v as _$$v } from "../9410/916286";
import { a as _$$a } from "../figma_app/502587";
import { Z as _$$Z } from "../573/287354";
import { X as _$$X } from "../1156/731676";
import { m as _$$m2 } from "../573/904271";
import { Nz, X5 } from "../9410/728210";
import { K as _$$K } from "../b2835def/230877";
import { n as _$$n } from "../573/512493";
import { Gx, Bu, Kt } from "../figma_app/156285";
import { l as _$$l } from "../9410/331071";
import { K as _$$K2 } from "../9410/280854";
import { J as _$$J2 } from "../9410/165619";
import { s as _$$s } from "../3682/764731";
import { getFeatureFlags } from "../905/601108";
import { useSprigWithSampling } from "../905/99656";
import { globalPerfTimer } from "../905/542194";
import { h as _$$h } from "../905/207101";
import { o as _$$o } from "../642/854123";
import { tZ } from "../figma_app/960196";
import { L as _$$L } from "../642/269105";
import { GV, S2, P5 } from "../figma_app/159296";
import { q as _$$q } from "../573/775640";
import { j as _$$j } from "../642/671529";
import { isEmptyObject } from "../figma_app/493477";
import { i as _$$i } from "../905/718764";
import { useAtomWithSubscription } from "../figma_app/27355";
import { logError } from "../905/714362";
import { getFalseValue, isInteractionPathCheck } from "../figma_app/897289";
import { zp } from "../figma_app/740025";
import { Ku } from "../figma_app/740163";
import { hS, BI as _$$BI, gl, E7, _W } from "../905/216495";
import { Em, rC } from "../figma_app/385874";
import { Gt, A5, kl, fC, pw, DQ } from "../905/275640";
import { Um } from "../905/848862";
import { Xo } from "../figma_app/482495";
import { iZ } from "../905/372672";
import { VF } from "../figma_app/679183";
import { BS } from "../642/202922";
import { Q as _$$Q } from "../9314/475980";
import { v as _$$v2 } from "../642/281455";
import { c as _$$c2 } from "../642/688711";
import { hD, LI } from "../figma_app/970285";
import { nl as _$$nl } from "../figma_app/359943";
import { _ as _$$_2 } from "../figma_app/645682";
import { Ay } from "../642/964720";
import { B as _$$B } from "../642/707257";
import { tT as _$$tT, z1, UA } from "../figma_app/580959";
import { C as _$$C } from "../642/776991";
import { Q as _$$Q2 } from "../1528/190444";
import { b as _$$b2 } from "../figma_app/203891";
import { sX, GR, F$, gc, B8, w5, tC as _$$tC } from "../figma_app/229710";
import { Dj, SQ, SJ, U4, tV as _$$tV, M0, Br, d6, GG, ww, P1, iP, NR } from "../figma_app/803054";
import { qh as _$$qh } from "../642/435480";
import { Cs, cU, Je, zq, U_, VR } from "../figma_app/938628";
import { _i } from "../figma_app/319440";
import { x as _$$x } from "../573/916234";
import { buildUploadUrl } from "../figma_app/169182";
import { e as _$$e } from "../905/621515";
import { N as _$$N } from "../figma_app/268271";
import { y as _$$y } from "../905/129046";
import { WZ } from "../905/893645";
import { F_ } from "../905/858282";
import { xT } from "../figma_app/195407";
import { v58 } from "../figma_app/6204";
import { dP, m9 } from "../figma_app/947348";
import { _ as _$$_3 } from "../642/896644";
import { N as _$$N2 } from "../905/720559";
import { RR } from "../figma_app/338442";
import { Pt } from "../figma_app/806412";
import { L as _$$L2 } from "../figma_app/884735";
import { sA } from "../figma_app/841644";
import { ei as _$$ei } from "../642/384859";
import { I_, qP, Rv, ZJ } from "../642/755347";
import { C as _$$C2 } from "../642/110459";
import { r as _$$r } from "../642/58913";
import { m as _$$m3 } from "../642/871982";
import { b as _$$b3 } from "../642/94505";
import { Zk } from "../figma_app/626177";
import { C as _$$C3 } from "../figma_app/531250";
import { K as _$$K3 } from "../642/473452";
import { j as _$$j2 } from "../642/595261";
import { Wv, r as _$$r2 } from "../figma_app/711157";
import { DE } from "../figma_app/811257";
import { wu } from "../1528/306300";
import { M as _$$M } from "../figma_app/339170";
import { AS, n4 } from "../figma_app/709323";
import { k as _$$k2 } from "../905/582200";
import { Vi, GI } from "../905/125333";
import { Y5 } from "../figma_app/455680";
import { b as _$$b4 } from "../figma_app/755529";
import { q5 } from "../figma_app/516028";
import { o3, nt } from "../905/226610";
import { Xd, W as _$$W2, zr } from "../figma_app/359164";
import { hl, Vb, i as _$$i2, xI, CL } from "../figma_app/722913";
import { yT } from "../figma_app/836943";
import { dD } from "../figma_app/941824";
import { K as _$$K4 } from "../905/443068";
import { f as _$$f } from "../905/167712";
import { f as _$$f2 } from "../905/335032";
import { W as _$$W3 } from "../905/63398";
import { Y as _$$Y } from "../905/701291";
import { a as _$$a2 } from "../905/612746";
import { n as _$$n2 } from "../905/540741";
import { Hr, sH } from "../905/871411";
import { W3 } from "../905/232641";
import { zk } from "../figma_app/198712";
import { i as _$$i3 } from "../905/382332";
import { eN as _$$eN } from "../905/331848";
import { K as _$$K5 } from "../905/532723";
import { k as _$$k3 } from "../905/988992";
import { lF } from "../figma_app/384713";
import { n as _$$n3 } from "../figma_app/908785";
import { K as _$$K6 } from "../figma_app/358450";
import { t as _$$t2 } from "../2b17fec9/172012";
import { u as _$$u } from "../441/357009";
import { _q, PA } from "../figma_app/957070";
let eL = "Draw Onboarding: properties panel";
function eN(e) {
  let {
    panelsShown
  } = e;
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: v58,
    priority: _$$N.DEFAULT_MODAL
  });
  useEffect(() => {
    panelsShown && show({
      canShow: () => getFeatureFlags().ce_il_onboarding ?? !1
    });
  }, [panelsShown, show]);
  let o = {
    arrowPadding: 4,
    arrowPosition: F_.RIGHT_BODY,
    clickOutsideToHide: !1,
    pointToLeftEdge: !0
  };
  let d = [{
    ...o,
    title: renderI18nText("draw.onboarding.properties_panel.effects.title"),
    description: renderI18nText("draw.onboarding.properties_panel.effects.description"),
    disableHighlight: !0,
    media: jsx(_$$y, {
      src: buildUploadUrl("6bebcf1164457af7594e55da15532cbfaddb693b"),
      alt: "",
      aspectRatio: 1920 / 1080
    }),
    targetKey: dP,
    trackingContextName: eL + " start",
    onStepShow: () => {
      let e = xT(dP);
      e && isShowing && e.scrollIntoView();
    },
    whenTargetLost: "complete"
  }, {
    ...o,
    title: renderI18nText("draw.onboarding.properties_panel.transform.title"),
    description: renderI18nText("draw.onboarding.properties_panel.transform.description"),
    highlightBlue: !0,
    targetKey: m9,
    trackingContextName: eL + " transform",
    onStepShow: () => {
      panelsShown || complete();
    },
    whenTargetLost: "complete"
  }];
  return jsx(WZ, {
    isShowing,
    steps: d,
    onComplete: complete
  });
}
let e6 = new _$$b3();
let e9 = memo(function (e) {
  let t = useRef(null);
  let {
    shown,
    enabled,
    visible,
    shouldShowPropPill,
    opacity,
    opacityInputRef,
    onOpacityChange,
    handleMirroring,
    isVectorEditMode
  } = I_();
  let {
    cornerRadiusEnabled,
    cornerControlIconButton,
    independentCornerControlEnabled,
    hideCornerSmoothing,
    cornerSmoothingPicker
  } = _$$ei({
    recordingKey: e.recordingKey,
    rowRef: t
  });
  return jsxs(Zk, {
    "data-testid": "illustration-appearance-panel",
    children: [jsx(Wv, {
      titleTx: renderI18nText("fullscreen.appearance_panel.appearance"),
      children: jsx(_$$M, {
        showLibrarySets: !1,
        recordingKey: "frameLevel"
      })
    }), jsx(DE, {
      input: jsx(sA, {
        currentFieldValue: hS(opacity) ? opacity : void 0,
        disabled: !1,
        fields: qP,
        fullHeight: !0,
        hasBindingContextMenu: !0,
        hideIcon: !0,
        inputRef: opacityInputRef,
        noBorder: !0,
        recordingKey: Pt(e, "layerOpacityInputWrapper"),
        resolvedType: rXF.FLOAT,
        children: jsx(AS, {
          ariaLabel: getI18nString("fullscreen.properties_panel.section_appearance.label_opacity"),
          dataTooltip: getI18nString("fullscreen.properties_panel.section_appearance.label_opacity"),
          disabled: !visible,
          forwardedRef: opacityInputRef,
          fullWidth: !0,
          icon: jsx(_$$N2, {}),
          isTokenizable: !0,
          mixedMathHandler: e6,
          onValueChange: onOpacityChange,
          value: opacity ?? 0
        })
      }),
      icon: jsx(_$$C2, {
        recordingKey: e.recordingKey,
        disabled: !0
      }),
      label: renderI18nText("fullscreen.properties_panel.section_appearance.label_opacity")
    }), cornerRadiusEnabled && jsx(DE, {
      ref: t,
      input: jsx(_$$C3, {
        recordingKey: e.recordingKey,
        useSliderInput: !0
      }),
      icon: cornerControlIconButton,
      label: renderI18nText("fullscreen.properties_panel.transform_panel.corner_radius")
    }), handleMirroring && isVectorEditMode && jsx(DE, {
      label: renderI18nText("fullscreen.properties_panel.section_vector.label_mirroring"),
      input: jsx(Cs, {
        handleMirroring,
        recordingKey: Pt(e, "mirroring")
      }),
      icon: null
    }), independentCornerControlEnabled && jsx(_$$j2, {
      hideVariableIcon: !0,
      recordingKey: Pt(e, "independentCornerRadius")
    }), jsx(_$$r, {
      id: Rv,
      blendModeSelectId: ZJ,
      recordingKey: e.recordingKey,
      showDefault: !0
    }), (shown.count || shown.starInnerScale) && jsx(cU, {
      countShown: shown.count,
      countDisabled: !enabled.count,
      starInnerScaleShown: shown.starInnerScale,
      starInnerScaleDisabled: !enabled.starInnerScale,
      recordingKey: e.recordingKey
    }), shown.arcData && jsx(Je, {
      arcDataDisabled: !enabled.arcData,
      recordingKey: e.recordingKey
    }), shouldShowPropPill && jsx(_$$L2, {
      nodeField: RR.VISIBLE,
      label: null
    }), jsx(wu, {
      showExplicitOnly: !0,
      recordingKey: "layerPanel-variableModeEntries"
    }), jsx(_$$m3, {}), cornerSmoothingPicker.showing && jsx(_$$K3, {
      defaultPosition: cornerSmoothingPicker.initialPosition,
      onClose: hideCornerSmoothing,
      recordingKey: Pt(e, "advanced")
    })]
  });
});
let tw = "illustration_stroke_panel--nestedPanel--9Ki9K";
let tj = "illustration_stroke_panel--secondaryHeader--NfF0G";
function tS(e) {
  Gx();
  let t = Bu();
  let i = Gt("strokeBrushGuid");
  let n = _$$BI(i);
  let s = A5("strokeBrushGuid");
  let o = A5("scatterStrokeSettings");
  let d = Kt();
  return jsxs(Zk, {
    className: tw,
    children: [jsx(_$$r2, {
      titleTx: jsx("div", {
        className: tj,
        children: getI18nString("fullscreen.properties_panel.brush")
      }),
      icon: jsx(_$$K4, {
        onClick: () => {
          s(Hr);
        },
        "aria-label": getI18nString("fullscreen.properties_panel.remove"),
        children: jsx(_$$f2, {})
      })
    }), jsx(DE, {
      input: jsx(_$$i3, {
        brushList: t,
        onChange: (e, t) => {
          let i = sH(e.guid);
          i && (e.type === plo.SCATTER && o(e.settings, zk.NO), s(i, t));
        },
        value: n ?? Hr,
        brushInputClassName: "illustration_stroke_panel--brushInputButton--r86UG",
        recordingKey: Pt(e.recordingKey, "brushDropdown"),
        positioningProps: {
          positionRelativeTo: e.strokePanelRef,
          align: {
            x: W3.BEFORE,
            y: W3.MAX
          }
        }
      }),
      label: null,
      icon: d === plo.STRETCH ? jsx(tk, {
        defaultStyleAtom: e.defaultStyleAtom
      }) : null
    }), d === plo.SCATTER && jsx(tC, {
      defaultStyleAtom: e.defaultStyleAtom,
      recordingKey: Pt(e.recordingKey, "scatterBrushSettings")
    })]
  });
}
function tk(e) {
  let {
    orientation,
    setOrientation
  } = hl(e.defaultStyleAtom);
  return jsx(_$$f, {
    onChange: e => setOrientation(e ? "FORWARD" : "REVERSE"),
    checked: "FORWARD" === orientation,
    "aria-label": getI18nString("fullscreen.properties_panel.direction"),
    onIcon: jsx(_$$W3, {}),
    offIcon: jsx(_$$W3, {})
  });
}
function tE({
  config: e,
  label: t,
  icon: i,
  SliderComponent: n,
  isQuadratic: s,
  recordingKey: l
}) {
  let a = _$$eN({
    min: e.min,
    max: e.sliderMax,
    decimalPlaces: 2
  });
  return jsx(DE, {
    label: t,
    icon: null,
    input: jsx(n, {
      ariaLabel: t,
      dataTooltip: t,
      fullWidth: !0,
      icon: i,
      inputMax: e.max,
      min: e.min,
      mixedMathHandler: e.mixedMathHandler,
      onValueChange: e.setValue,
      recordingKey: l,
      sliderMax: e.sliderMax,
      sliderValueTransform: s ? a : void 0,
      value: e.value
    })
  });
}
function tC(e) {
  return jsxs(Fragment, {
    children: [jsx(tE, {
      config: Vb("gap", e.defaultStyleAtom),
      label: getI18nString("fullscreen.properties_panel.gap"),
      icon: jsx(_$$Y, {}),
      SliderComponent: AS,
      isQuadratic: !0,
      recordingKey: Pt(e, "gap")
    }), jsx(tE, {
      config: Vb("sizeJitter", e.defaultStyleAtom),
      label: getI18nString("fullscreen.properties_panel.size_jitter"),
      icon: jsx(_$$a2, {}),
      SliderComponent: AS,
      isQuadratic: !0,
      recordingKey: Pt(e, "sizeJitter")
    }), jsx(tE, {
      config: Vb("angularJitter", e.defaultStyleAtom),
      label: getI18nString("fullscreen.properties_panel.angular_jitter"),
      icon: jsx(_$$n2, {}),
      SliderComponent: n4,
      recordingKey: Pt(e, "angularJitter")
    })]
  });
}
function tR(e) {
  let t = Xd();
  let {
    value,
    setValue,
    min,
    max,
    sliderMax
  } = _$$i2("frequency", e.defaultStyleAtom);
  let {
    value: _value,
    setValue: _setValue,
    min: _min,
    max: _max,
    sliderMax: _sliderMax
  } = _$$i2("wiggle", e.defaultStyleAtom);
  let {
    value: _value2,
    setValue: _setValue2,
    min: _min2,
    max: _max2,
    sliderMax: _sliderMax2
  } = _$$i2("smoothen", e.defaultStyleAtom);
  let v = _$$eN({
    min,
    max: sliderMax,
    decimalPlaces: 2
  });
  let y = _$$eN({
    min: _min,
    max: _sliderMax,
    decimalPlaces: 2
  });
  let b = _$$eN({
    min: _min2,
    max: _sliderMax2,
    decimalPlaces: 2
  });
  return jsxs(Zk, {
    className: tw,
    children: [jsx(_$$r2, {
      titleTx: jsx("div", {
        className: tj,
        children: getI18nString("fullscreen.properties_panel.dynamic")
      }),
      icon: jsx(_$$K4, {
        onClick: () => {
          t({
            dynamicStrokeSettings: lF
          });
        },
        "aria-label": getI18nString("fullscreen.properties_panel.remove"),
        children: jsx(_$$f2, {})
      })
    }), jsx(DE, {
      input: jsx(AS, {
        ariaLabel: getI18nString("fullscreen.properties_panel.interval"),
        dataTooltip: getI18nString("fullscreen.properties_panel.interval"),
        fullWidth: !0,
        icon: jsx(_$$Y, {}),
        inputMax: max,
        min,
        mixedMathHandler: new xI("interval"),
        onValueChange: setValue,
        recordingKey: Pt(e, "frequency"),
        sliderMax,
        sliderValueTransform: v,
        value
      }),
      icon: null,
      label: getI18nString("fullscreen.properties_panel.interval")
    }), jsx(DE, {
      input: jsx(AS, {
        ariaLabel: getI18nString("fullscreen.properties_panel.wiggle"),
        dataTooltip: getI18nString("fullscreen.properties_panel.wiggle"),
        fullWidth: !0,
        icon: jsx(_$$K5, {}),
        inputMax: _max,
        min: _min,
        mixedMathHandler: new xI("wiggle"),
        onValueChange: _setValue,
        recordingKey: Pt(e, "wiggle"),
        sliderMax: _sliderMax,
        sliderValueTransform: y,
        value: _value
      }),
      icon: null,
      label: getI18nString("fullscreen.properties_panel.wiggle")
    }), jsx(DE, {
      input: jsx(AS, {
        ariaLabel: getI18nString("fullscreen.properties_panel.smoothen"),
        dataTooltip: getI18nString("fullscreen.properties_panel.smoothen"),
        fullWidth: !0,
        icon: jsx(_$$k3, {}),
        inputMax: _max2,
        min: _min2,
        mixedMathHandler: new xI("smoothen"),
        onValueChange: _setValue2,
        recordingKey: Pt(e, "smoothen"),
        sliderMax: _sliderMax2,
        sliderValueTransform: b,
        value: _value2
      }),
      icon: null,
      label: getI18nString("fullscreen.properties_panel.smoothen")
    })]
  });
}
function tM(e) {
  let t = o3(nt.useGrid);
  let i = useRef(null);
  let a = _$$W2();
  let d = useDispatch();
  let u = Ku();
  let h = Um();
  let f = Xo();
  let {
    currentSelectedGradientStop,
    currentTool,
    activeCanvasEditModeType,
    currentSelectedProperty
  } = s6("currentSelectedGradientStop", "currentTool", "activeCanvasEditModeType", "currentSelectedProperty");
  let x = q5();
  let v = KH();
  let y = useSelector(e => e.library);
  let b = useSelector(e => e.pickerInStyleCreationShown);
  let w = useSelector(e => e.modalShown);
  let j = useSelector(e => e.stylePickerShown);
  let S = zr();
  let k = CL();
  let E = kl("strokePaints");
  let C = E && (gl(E) || E.length > 0);
  let A = E7(_$$b4("guid"));
  let I = yT({
    styleType: "FILL",
    inheritStyleKeyField: "inheritFillStyleKeyForStroke",
    selectedStyleGuid: A,
    dropdownShown: h,
    openFile: x,
    library: y,
    modalShown: w,
    sceneGraphSelection: v,
    stylePickerShown: j,
    inheritStyleKey: S.inheritStyleKey,
    inheritStyleID: S.inheritStyleID,
    dispatch: d,
    pickerShown: f
  });
  let T = useRef(null);
  return jsx(dD.Provider, {
    value: {
      useGrid: t
    },
    children: jsx(_$$k2, {
      name: "illustration_stroke_panel",
      children: jsxs(Zk, {
        "data-testid": "illustration-stroke-panel-id",
        ref: T,
        children: [jsx(_$$tT, {
          colorFormat: u,
          currentSelectedGradientStop,
          currentSelectedProperty,
          currentTool,
          onApplyStyle: (e, {
            fromSearch: t
          } = {}) => {
            d(AV({
              style: e,
              inheritStyleKeyField: "inheritFillStyleKeyForStroke",
              fromSearch: t
            }));
          },
          onChange: (e, t, i, r) => {
            Y5.updateSelectionProperties({
              strokePaints: e
            }, {
              shouldCommit: t,
              overwrite: r ?? WXh.ONLY_WHEN_NOT_EMPTY
            });
          },
          pickerInStyleCreationShown: b,
          recordingKey: Pt(e, "paintList"),
          selectedPropertyType: rrT.STROKE,
          variableScopes: z1,
          ...I,
          defaultColor: Em,
          dispatch: d,
          dropdownShown: h,
          editModeType: activeCanvasEditModeType,
          isPanelBodyCollapsedAtom: null,
          library: y,
          openFile: x,
          pickerShown: f
        }), a && jsx(_$$n3, {
          forwardedRef: i,
          recordingKey: e.recordingKey
        }), C && "Brush" === k && jsx(tS, {
          defaultStyleAtom: Vi,
          recordingKey: e.recordingKey,
          strokePanelRef: T
        }), C && "Dynamic" === k && jsx(tR, {
          defaultStyleAtom: GI,
          recordingKey: Pt(e, "dynamicStrokeControls")
        })]
      })
    })
  });
}
function tP({
  scrollContainer: e
}) {
  let t = useDispatch();
  let i = iZ();
  let n = Dj(i);
  let a = useAtomWithSubscription(_$$b2);
  let o = _$$qh();
  let d = SQ();
  let u = Ku();
  let h = Um();
  let f = Xo();
  let p = GV();
  let g = useSelector(e => e.mirror.sceneGraphSelection);
  let _ = useSelector(e => e.library);
  let x = useSelector(e => e.stylePickerListLayout);
  let v = useSelector(e => e.installedPluginVersions);
  let y = useSelector(e => e.localPlugins);
  let b = useSelector(e => e.modalShown);
  let w = useSelector(e => e.openFile);
  let j = useSelector(e => e.publishedPlugins);
  let S = useSelector(e => e.saveAsState);
  let k = zp();
  let E = hD();
  let C = kl("exportSettings");
  let {
    numSelected,
    stateGroupSelectionInfo
  } = fC("numSelected", "stateGroupSelectionInfo");
  let {
    areOnlyResponsiveSetsSelected,
    maskType
  } = pw("areOnlyResponsiveSetsSelected", "maskType");
  let {
    numSelected: _numSelected,
    pluginRelaunchData
  } = DQ("pluginRelaunchData", "numSelected");
  let P = p8("currentPage");
  let F = p8("currentSelectedProperty");
  let V = SJ();
  let D = U4(p);
  if ((isEmptyObject(p) || Object.keys(p).every(e => !p[parseInt(e)])) && !window.figmaPerfTesting && !getFalseValue() && !isInteractionPathCheck() && logError("PropertiesPanel", "Rendering illustration tab with no shownPropertiesPanels", {
    isEmpty: isEmptyObject(p),
    shouldRenderInspectTab: n
  }), p[ibQ.FRAME_PRESETS]) return jsx(_$$i, {
    children: jsx(VF, {
      isVisible: !0,
      children: () => jsx(_$$nl, {
        recordingKey: "framePresetPanel"
      }, "frame-presets")
    })
  });
  let K = d || D || _$$tV(p, stateGroupSelectionInfo) || p[ibQ.COMPONENT_ITEM] || M0(p);
  return jsxs(_$$i, {
    children: [jsx(eN, {
      panelsShown: p[ibQ.EFFECTS_ITEM] ?? !1
    }), jsx(_i, {
      recordingKey: "toolbarView",
      shouldShowComponentPropertiesPanel: _$$tV(p, stateGroupSelectionInfo),
      shouldShowInstancePanel: M0(p),
      shouldShowSlotPanel: Br(p),
      shouldShowVectorOperationPanel: d,
      shouldShowTransformModifiersPanel: D
    }), getFeatureFlags().react_scenegraph && jsx(VF, {
      isVisible: p[ibQ.JSX_ITEM],
      children: () => jsx(_$$_3, {})
    }), jsx(VF, {
      isVisible: d,
      children: () => jsx(_$$x, {
        recordingKey: "vectorOperationPanel",
        numSelected
      }, "vectorOperation")
    }), jsx(VF, {
      isVisible: D,
      children: () => jsx(sX, {}, "transformModifiers")
    }), jsx(VF, {
      isVisible: _$$tV(p, stateGroupSelectionInfo),
      children: () => jsx(BS, {
        recordingKey: "propsPanel"
      }, "componentProperties")
    }), jsx(VF, {
      isVisible: p[ibQ.COMPONENT_ITEM],
      children: () => jsx(_$$c2, {
        recordingKey: "componentPanel"
      }, "component")
    }), jsx(VF, {
      isVisible: M0(p),
      children: () => jsx(_$$_2, {
        recordingKey: "instancePanel"
      }, "instance")
    }), jsx(VF, {
      isVisible: d6(p) || p[ibQ.TRANSFORM_ITEM],
      children: () => jsx(zq, {
        recordingKey: "transformPanel",
        propertiesPanelState: a,
        openFileKey: w?.key || null,
        canEditConstraints: GG(p),
        onlyShowXYInputsRow: a === GR.DEFAULT_SIMPLIFIED || ((areOnlyResponsiveSetsSelected && hS(areOnlyResponsiveSetsSelected)) ?? !1),
        topPadding: K
      }, "transform")
    }), jsx(VF, {
      isVisible: p[ibQ.VECTOR_TRANSFORM_UNIFIED_ITEM],
      children: () => jsx(U_, {
        recordingKey: "transformPanel",
        openFileKey: w?.key || null,
        dispatch: t,
        dropdownShown: h
      }, "vector-transform")
    }), jsx(F$, {
      isVisible: p[ibQ.SCALE_ITEM]
    }), jsx(VF, {
      isVisible: p[ibQ.VECTOR_ITEM],
      children: () => jsx(VR, {
        isUI3: !0,
        recordingKey: "vectorTransformPanel",
        dispatch: t,
        dropdownShown: h
      }, "vector-transform")
    }), jsx(VF, {
      isVisible: p[ibQ.MASK_ITEM],
      children: () => jsx(_$$B, {
        recordingKey: "maskPanel",
        maskType
      }, "mask")
    }), jsx(VF, {
      isVisible: p[ibQ.LAYER_ITEM],
      children: () => jsx(e9, {
        recordingKey: "appearancePanel"
      })
    }), jsx(VF, {
      isVisible: p[ibQ.TYPE_ITEM],
      children: () => jsx(gc, {}, "type")
    }), jsx(VF, {
      isVisible: p[ibQ.CANVAS_ITEM],
      children: () => jsx(_$$v2, {
        colorFormat: u,
        defaultColor: rC,
        dispatch: t,
        dropdownShown: h,
        hasExports: !!C && _W(C, []).length > 0,
        library: _,
        modalShown: b,
        openFile: w,
        pickerShown: f,
        recordingKey: "canvasBackgroundPanel",
        sceneGraphSelection: g,
        setDefaultToolOnPickerOpen: !0
      }, "canvas-background")
    }), jsx(VF, {
      isVisible: p[ibQ.REMOVE_GROUP_BACKGROUND_ITEM],
      children: () => jsx(_$$C, {}, "remove-group-fill-stroke")
    }), jsx(VF, {
      isVisible: p[ibQ.FILL_ITEM],
      children: () => jsx(B8, {
        variableScopes: o
      }, "fill")
    }), jsx(VF, {
      isVisible: p[ibQ.STROKE_ITEM],
      children: () => jsx(tM, {
        recordingKey: "strokePanel"
      }, "stroke")
    }), jsx(VF, {
      isVisible: p[ibQ.EFFECTS_ITEM],
      children: () => jsx(w5, {}, "effects")
    }), jsx(VF, {
      isVisible: V,
      children: () => jsx(UA, {
        colorFormat: u,
        defaultColor: rC,
        dispatch: t,
        dropdownShown: h,
        library: _,
        openFile: w,
        pickerShown: f,
        recordingKey: "selectionPaintsPanel",
        sceneGraphSelection: g,
        stylePickerListLayout: x
      }, "selection-paints")
    }), jsx(VF, {
      isVisible: ww(p, g),
      children: () => jsx(_$$Q, {
        recordingKey: "local-styles",
        scrollContainer: e,
        setDefaultToolOnCreateStyle: !0
      }, "local-styles")
    }), jsx(VF, {
      isVisible: p[ibQ.GRIDS_ITEM],
      children: () => jsx(_$$tC, {}, "grids")
    }), jsx(VF, {
      isVisible: P1(p, w),
      children: () => jsx(LI, {
        currentPage: P,
        currentSelectedProperty: F,
        dispatch: t,
        dropdownShown: h,
        exportSettings: C,
        isSelectionRenamable: LI.isSelectionRenamable(Object.keys(g)),
        numSelected,
        openFile: w,
        panelWidth: iP,
        pickerShown: f,
        recordingKey: "exportsPanel",
        saveAsState: S,
        sceneGraphSelection: g,
        singleNodeName: E
      }, "export")
    }), jsx(VF, {
      isVisible: !NR(p),
      children: () => jsx(_$$Q2, {
        allSavedPlugins: v.plugins,
        dispatch: t,
        editorType: w?.editorType ? mapFileTypeToEditorType(w.editorType) : null,
        localPlugins: y,
        numSelected: _numSelected ?? 0,
        openFileKey: w?.key || null,
        orgEntity: k,
        pluginRelaunchData,
        publishedPlugins: j,
        recordingKey: "pluginPanel"
      }, "plugin")
    }), getFeatureFlags().jsx_debugging && jsx(Ay, {
      recordingKey: "jsxDebugPanel"
    })]
  });
}
function tF() {
  S2();
  let e = useCallback(e => e === FAf.DESIGN ? FAf.ILLUSTRATION : e, []);
  let t = P5({
    defaultTab: FAf.ILLUSTRATION,
    getActiveTab: e
  });
  let i = p8("topLevelMode");
  let s = p8("isReadOnly");
  let a = i === lyf.LAYOUT && !s && t === FAf.ILLUSTRATION;
  let o = t === FAf.COMMENT;
  let d = t === FAf.INSPECT;
  let u = null;
  return jsxs(_$$j, {
    recordingKey: "illustrationPropertiesPanel",
    activeTab: t,
    refMainScrollContainer: e => {
      u = e;
    },
    children: [a && jsx(tP, {
      scrollContainer: u
    }), d && jsx(_$$q, {
      scrollContainer: u
    }), o && jsx(_$$L, {})]
  });
}
let tV = memo(function () {
  _$$h(() => {
    globalPerfTimer.tryStop("switch_to_illustration_mode.right_panel_tti");
  });
  return jsxs(_$$o, {
    boundaryKey: "IllustrationPropertiesPanel",
    children: [jsx(tF, {}), jsx(tZ, {})]
  });
});
let tz = memo(({
  shouldShowDragAndDropBorder: e
}) => {
  let t = useSelector(e => e.progressBarState);
  let i = p8("loadingEmbeds");
  let k = ut(Ez5?.uiState().showCanvasSearch, !1);
  let A = Lk();
  let U = useRef(null);
  let q = useSelector(e => e.openFile);
  let G = q ? q.key : "";
  Gb(G);
  _$$W();
  _$$K2();
  qh();
  Gx();
  (function () {
    let {
      Sprig,
      sprigTrackWithSampling
    } = useSprigWithSampling();
    let i = useSelector(e => {
      if ("fullscreen" === e.selectedView.view) return e.selectedView.editorType;
    });
    useEffect(() => {
      i === FEditorType.Illustration && (Sprig("track", "enter_draw_editor_sampled_by_user_1_1"), sprigTrackWithSampling("enter_draw_editor_sampled_by_user_50_100", {
        samplingRateDenominator: 100,
        samplingRateNumerator: 50
      }));
    }, [Sprig, sprigTrackWithSampling, i]);
  })();
  (function () {
    let {
      Sprig
    } = useSprigWithSampling();
    let t = ut(Ez5?.drawToolsTrackingState().currentToolStrokeCount, 0);
    let i = useRef(!1);
    useEffect(() => {
      getFeatureFlags().ce_il_sprig_tracking && t >= 10 && !i.current && (Sprig("setAttribute", "is_freehand_user", !0), i.current = !0);
    }, [Sprig, t]);
  })();
  (function () {
    let {
      Sprig
    } = useSprigWithSampling();
    let t = ut(Ez5?.drawToolsTrackingState().addedTransform, !1);
    let i = useRef(!1);
    useEffect(() => {
      getFeatureFlags().ce_il_sprig_tracking && t && !i.current && (Sprig("setAttribute", "is_repeat_user", !0), i.current = !0);
    }, [Sprig, t]);
  })();
  (function () {
    let {
      Sprig
    } = useSprigWithSampling();
    let t = ut(Ez5?.drawToolsTrackingState().currentTool, NLJ.NONE);
    let i = ut(Ez5?.drawToolsTrackingState().isMultiVectorEditing, !1);
    let r = useRef(!1);
    useEffect(() => {
      let n = [NLJ.SHAPE_BUILDER, NLJ.VECTOR_LASSO];
      getFeatureFlags().ce_il_sprig_tracking && (n.includes(t) || i) && !r.current && (Sprig("setAttribute", "is_complex_shapes_user", !0), r.current = !0);
    }, [Sprig, t, i]);
  })();
  let Q = BI();
  let W = jsx(_$$m, {
    role: "region",
    "aria-label": getI18nString("fullscreen_actions.left_sidebar_label"),
    children: jsx(_$$m2, {})
  });
  return jsxs(_$$a, {
    children: [jsx(ED, {}), jsxs(sk, {
      children: [t.mode !== Oin.OFF && jsx("div", {
        className: _q
      }), jsxs(pO, {
        initialFilterState: {
          currentPage: !1
        },
        children: [i.map(e => jsx(_$$_, {
          nodeId: e
        }, `loading-embed-${e}`)), jsx(qn, {}), jsx(_$$u, {}), k && jsx(_$$n, {}), jsx(_$$G2, {}), jsx(_$$b, {}), jsx(_$$J2, {}), jsx(XI, {
          commentsDetailContainerRef: U
        }), jsx(_$$Z, {}), jsx(_$$X, {}), jsx(_$$J, {}), jsx(Nz, {}), jsx("div", {
          ref: U
        }), !_$$T() && W, jsx(_$$G, {
          children: jsxs(Fragment, {
            children: [jsx(tV, {}), !!Q?.shouldOptimizeForIpadApp && jsx(_$$K6, {}), !!Q?.shouldOptimizeForIpadApp && jsx(_$$t2, {})]
          })
        }), e && jsx(X5, {})]
      }), jsx(_$$A, {
        editorType: FEditorType.Illustration,
        openFile: q
      }), jsx(_$$l, {
        defaultViewTabsAvailable: !0,
        defaultViewAssetsTabVisible: !0
      })]
    }), A && jsx(_$$K, {
      className: PA,
      children: jsx(_$$s, {})
    })]
  });
});
export function $$tB0() {
  let [e, t] = useState(!1);
  return jsx(_$$c, {
    loadedCommentsProvider: !1,
    children: jsx(_$$v, {
      setShouldShowDragAndDropBorder: t,
      isDragTarget: !1,
      children: jsx(tz, {
        shouldShowDragAndDropBorder: e
      })
    })
  });
}
export const IllustrationView = $$tB0;