import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useId, useRef, useCallback, useMemo, useState, useEffect, memo, forwardRef, useContext } from "react";
import { useSelector } from "react-redux";
import { z as _$$z } from "../vendor/999105";
import { isNullish } from "../figma_app/95419";
import { ButtonWide } from "../905/521428";
import { d as _$$d } from "../905/976845";
import { S as _$$S } from "../905/720922";
import { D as _$$D } from "../905/716990";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter, Xr } from "../figma_app/27355";
import h from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { parsePxNumber } from "../figma_app/783094";
import { customHistory } from "../905/612521";
import { useSubscription } from "../figma_app/288654";
import { generateRecordingKey } from "../figma_app/878298";
import { k as _$$k2 } from "../905/582200";
import { Point } from "../905/736624";
import { LazyInputForwardRef } from "../905/408237";
import { P as _$$P } from "../905/347284";
import { ne } from "../figma_app/563413";
import { SvgComponent, V as _$$V } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { S as _$$S2 } from "../figma_app/552746";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout, Spacer } from "../905/470281";
import { hidePickerThunk, showPickerThunk } from "../figma_app/91703";
import { popModalStack, showModalHandler } from "../905/156213";
import { B as _$$B2 } from "../905/330741";
import { TrackingProvider } from "../figma_app/831799";
import { consumptionPaywallUtils } from "../905/224";
import { convertTeamToRaw } from "../905/628874";
import { Cj } from "../905/291654";
import { Kk, Rt } from "../905/777093";
import { G8, Qr, kF, Km, e2, HP, sp } from "../905/690539";
import { jB, Uh } from "../905/465941";
import { isInvalidValue } from "../905/216495";
import { SG } from "../figma_app/852050";
import { useAppModelProperty } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { selectCurrentUser } from "../905/372672";
import { FFileType } from "../figma_app/191312";
import { TeamCanAdmin } from "../figma_app/43951";
import { Rk, gg } from "../905/981217";
import { hasValidSubscription } from "../figma_app/345997";
import { UpsellModalType } from "../905/165519";
import { FeatureFlag } from "../905/652992";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { If } from "../905/714538";
import { cn } from "../905/959568";
import { e0 } from "../905/696396";
import { fI } from "../figma_app/626177";
import { We } from "../905/805224";
import { FormattedInputContext } from "../905/427409";
import { d9 } from "../905/579068";
import { Ao } from "../905/748636";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { O as _$$O, A as _$$A } from "../905/536006";
import { getSingletonSceneGraph } from "../905/700578";
import { useDebouncedCallback } from "use-debounce";
import { Uh as _$$Uh, K1, YQ } from "../905/956994";
import { R4, y8, jX, Z7, kh, oh } from "../905/188169";
import { k as _$$k3, P as _$$P2 } from "../905/437398";
import { Uw } from "../905/698759";
import { hS } from "../905/634218";
import { kaq, Ep1, bb$, oBL } from "../figma_app/27776";
import { Q as _$$Q } from "../905/249555";
import { A as _$$A3 } from "../6828/673039";
import { A as _$$A4 } from "../3850/824007";
import { A as _$$A5 } from "../5724/56519";
import { A as _$$A6 } from "../5724/768410";
import { A as _$$A7 } from "../1617/720598";
var g = h;
let eI = "font_picker--fontPickerItemRow--CJSty text--fontPos11--2LvXf text--_fontBase--QdLsd";
let eE = "font_picker--fauxFocused--DyvIs";
let ex = "font_picker--check--PVr-b";
let eS = "font_picker--badgeContainer--DR9NT";
let ew = "font_picker--newBadge--Q9mZi text--fontPos9--naThA text--_fontBase--QdLsd";
let eP = "font-set-dropdown";
let eO = parsePxNumber(kaq);
export function $$eD0({
  id: e,
  pickerId: t,
  dispatch: i,
  recordingKey: s,
  currentFont: o,
  onFontChange: l,
  pickerShown: d,
  fonts: c,
  versionsForStyles: u,
  selectedNodeIds: p,
  dropdown: m,
  googleFontPreviews: h,
  localFontAgentVersion: g,
  hideTypographyVariableOptions: f,
  selectedView: _,
  restrictedFontSet: A
}) {
  let y = useId();
  let b = useRef(null);
  let I = d?.id !== t;
  let x = useRef(null);
  let S = useCallback(() => {
    x.current?.focus();
  }, []);
  let w = useMemo(() => d ? new Point(d.initialX, d.initialY) : new Point(0, 0), [d]);
  let C = useSelector(e => e.variablePickerShown);
  let T = useCallback(() => {
    i(hidePickerThunk());
    i(_$$B2());
  }, [i]);
  let k = useCallback(() => {
    d?.modal && i(showPickerThunk({
      ...d,
      modal: !1
    }));
    S();
  }, [i, S, d]);
  let R = () => {
    C.isShown && i(_$$B2());
  };
  let P = SG(["FONT_FAMILY"]).data ?? [];
  return jsx(Ao, {
    ref: b,
    alwaysEnsureModalOnScreen: !0,
    dataTestId: generateRecordingKey(s, "draggableModal"),
    disableHeaderBottomBorder: !0,
    dragHeaderOnly: !0,
    hidden: I,
    id: e ?? y,
    initialPosition: w,
    initialWidth: eO,
    onClick: e => {
      e.stopPropagation();
      R();
    },
    onClose: T,
    onDragEnd: k,
    overflowHidden: !0,
    preventKeyboardFocus: I,
    recordingKey: generateRecordingKey(s, "draggableModal"),
    title: e => jsxs(Fragment, {
      children: [jsx("div", {
        className: "font_picker--pickerTitle--5gCK6 header_modal--headerModalTitle--32hFx",
        children: getI18nString("fullscreen.properties_panel.font_picker.title")
      }), jsxs("div", {
        className: hS,
        onKeyDown: eK,
        children: [!f && P.length > 0 && jsx(eH, {
          anchorElement: b?.current?.getEl(),
          currentFont: o,
          onFontFamilyBindingChange: T,
          onHidePicker: R,
          recordingKey: s
        }), e]
      })]
    }),
    children: jsx(eL, {
      currentFont: o,
      dispatch: i,
      dropdown: m,
      fonts: c,
      googleFontPreviews: h,
      hidden: I,
      localFontAgentVersion: g,
      onFontChange: l,
      pickerShown: d,
      recordingKey: s,
      restrictedFontSet: A,
      searchBarInputRef: x,
      selectedNodeIds: p,
      selectedView: _,
      versionsForStyles: u
    })
  });
}
function eL({
  id: e,
  dispatch: t,
  recordingKey: i,
  currentFont: o,
  onFontChange: d,
  pickerShown: u,
  fonts: h,
  versionsForStyles: y,
  selectedNodeIds: E,
  dropdown: x,
  googleFontPreviews: w,
  localFontAgentVersion: k,
  clearable: P,
  selectedView: F,
  hidden: B,
  searchBarInputRef: z,
  restrictedFontSet: H
}) {
  let ei = useId();
  let er = e ?? ei;
  let ea = useRef(null);
  let eo = useRef(null);
  let [el, ed] = useState("");
  let [ec, ep] = useState(!1);
  let [eg, eA] = useState(H ?? jB());
  let {
    selectedFontBeforePreviews,
    setSelectedFontBeforePreviews,
    isPreviewing,
    clearPreview,
    updatePreview
  } = function ({
    currentFont: e,
    onFontChange: t,
    disabled: i
  }) {
    let n = useRef(!1);
    let [a, s] = useState(null);
    useEffect(() => {
      n.current || ("string" == typeof e ? s(e) : s(null));
    }, [e, n]);
    let o = useDebouncedCallback(useCallback(e => {
      if (i) return;
      let r = getSingletonSceneGraph().getCurrentPage();
      !((r?.directlySelectedNodes?.length ?? 0) > 50) && e && (n.current || (n.current = !0), t(void 0, {
        fontFamily: e
      }, yesNoTrackingEnum.NO));
    }, [i, t]), 50);
    let l = useCallback(() => {
      if (o.cancel(), n.current) {
        n.current = !1;
        let e = "";
        "string" == typeof a && (e = a);
        t(void 0, {
          fontFamily: "",
          selectedFontFamily: e
        }, yesNoTrackingEnum.NO);
      }
    }, [t, a, o]);
    return {
      isPreviewing: n.current,
      selectedFontBeforePreviews: a,
      setSelectedFontBeforePreviews: s,
      clearPreview: l,
      updatePreview: o
    };
  }({
    currentFont: o,
    onFontChange: d,
    disabled: B
  });
  let eC = R4(k);
  let eT = void 0 !== w;
  let ek = y8(h, y, eC, w, F);
  let eR = jX(!!B, eg, selectedFontBeforePreviews);
  let eO = useMemo(() => G8(ek, eg, eR), [ek, eg, eR]);
  let eD = useCallback(() => {
    z.current?.focus();
  }, [z]);
  let eL = useCallback(() => {
    eD();
    z.current?.searchInput?.select();
  }, [eD, z]);
  let eU = Z7(eO, ek, el);
  let eV = useCurrentUserOrg() ?? null;
  let eG = selectCurrentFile()?.team ?? null;
  let eH = selectCurrentFile();
  let eW = selectCurrentUser();
  let eY = Rk({
    enabled: !B && (eg === Qr.SHARED_FONTS || x?.type === eP),
    user: eW,
    hasCurrentTeam: !!eG,
    hasCurrentOrg: !!eV
  });
  let eq = useCallback(e => {
    eA(e);
    Uh(e);
    trackEventAnalytics("font picker font set updated", {
      section: e
    });
  }, []);
  useEffect(() => {
    B || eg !== Qr.SHARED_FONTS || eV || eY || eq(Qr.ALL_FONTS);
  }, [B, eg, eV, eY, eq]);
  let e$ = _$$z({
    size: eU.length,
    parentRef: ea,
    estimateSize: useCallback(() => parsePxNumber(Ep1), []),
    overscan: 10
  });
  let eZ = useAppModelProperty("currentPage");
  let eX = u?.modal === !1;
  useEffect(() => {
    eX || ed("");
  }, [E, eX]);
  let eQ = useMemo(() => eU.findIndex(e => e.family === selectedFontBeforePreviews), [selectedFontBeforePreviews, eU]);
  useEffect(() => {
    B || eL();
  }, [B, eL]);
  let {
    searchQueryPlaceholderFontFamily,
    setSearchQueryPlaceholderFontFamily
  } = kh({
    isModalHidden: !!B,
    searchQuery: el,
    focusAndSelectSearchBar: eL,
    currentFont: o,
    isPreviewing,
    selectedFontBeforePreviews,
    selectedNodeIds: E
  });
  let e1 = useCallback(e => {
    ed(e);
    ep(!0);
    setSearchQueryPlaceholderFontFamily("");
    window.requestAnimationFrame(() => {
      ep(!1);
    });
  }, [setSearchQueryPlaceholderFontFamily]);
  let e2 = useCallback(() => {
    t(hidePickerThunk());
    t(_$$B2());
  }, [t]);
  let e5 = () => eo.current ? {
    id: Math.ceil(eo.current?.getScrollTop() / parsePxNumber(Ep1))
  } : null;
  let e4 = 0 === el.length && !H;
  let e3 = oh(e$, e4, {
    itemRowHeight: parseInt(Ep1),
    scrollContainerHeight: parseInt(bb$),
    fontSetRowHeight: parseInt(oBL)
  });
  let [e6, e7] = useAtomValueAndSetter(_$$k3);
  let e8 = useRef(null);
  useEffect(() => {
    el ? window.requestAnimationFrame(() => {
      e3(0);
      e7({
        id: 0
      });
    }) : window.requestAnimationFrame(() => {
      e8.current && (e$.scrollToOffset(e8.current.scrollTop), e8.current.fauxFocusIndex && e7({
        id: e8.current.fauxFocusIndex
      }));
    });
  }, [el]);
  useEffect(() => {
    e8.current = null;
    B || ed("");
  }, [B, selectedFontBeforePreviews, eg]);
  useEffect(() => {
    eX || el || (e8.current ? (e$.scrollToOffset(e8.current.scrollTop), e8.current.fauxFocusIndex && e7({
      id: e8.current.fauxFocusIndex
    })) : (e3(Math.max(eQ, 0)), e7({
      id: eQ
    })));
  }, [eQ, eX, B, eg, el, e8]);
  useEffect(() => {
    eD();
  }, [eD, E]);
  let e9 = useRef(!1);
  let te = useCallback(() => {
    e9.current = !1;
  }, []);
  let tt = useCallback(e => {
    eq(e);
    eD();
    e9.current = !0;
  }, [eD, eq]);
  let ti = useSelector(e => e.userFlags);
  let tn = useCallback(async (e, i = !0, n = !0) => {
    if (getFeatureFlags().dse_sf_pro_font && !(await Cj(e, ti, h, t, "font_picker"))) return;
    globalPerfTimer.start("update_text_node_font");
    clearPreview();
    setSelectedFontBeforePreviews(e ?? null);
    d(e, void 0, n ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
    let r = e ? h[e] : void 0;
    let a = If(r)?.source;
    trackEventAnalytics("font picker font selected", {
      pageId: eZ,
      nodeIds: E,
      section: eg,
      font: e,
      fontSource: a,
      fileKey: eH?.key,
      fileParentOrgId: eV?.id,
      fileTeamId: eG?.id
    });
    !eX && i ? t(hidePickerThunk()) : eX && eD();
    trackEventAnalytics("font picker font selected", {
      pageId: eZ,
      nodeIds: E,
      section: eg,
      font: e
    });
    !eX && i ? t(hidePickerThunk()) : eX && eD();
  }, [clearPreview, eV, eG, eH, setSelectedFontBeforePreviews, eg, t, eD, h, eX, d, eZ, E, ti]);
  let tr = useCallback(e => {
    if (e9.current = !0, "ArrowDown" === e.code || "ArrowDown" === e.key) {
      setSearchQueryPlaceholderFontFamily("");
      e7(e6 ? {
        id: Math.min(e6.id + 1, eU.length - 1),
        scrollIntoView: !0
      } : e5());
    } else if ("ArrowUp" === e.code || "ArrowUp" === e.key) {
      setSearchQueryPlaceholderFontFamily("");
      e7(e6 ? {
        id: Math.max(e6.id - 1, -1),
        scrollIntoView: !0
      } : e5());
    } else if ("Escape" === e.code || "Escape" === e.key) e2();else if ("Enter" === e.code || "Enter" === e.key) {
      let e = e6 && eU[e6?.id];
      e?.family && tn(e.family);
    }
    x && e.preventDefault();
  }, [x, eU, e6, tn]);
  useEffect(() => {
    let e = e6 && eU[e6?.id]?.family;
    e && e !== selectedFontBeforePreviews ? updatePreview(e) : clearPreview();
  }, [e6, eU, selectedFontBeforePreviews]);
  let ta = useCallback(e => {
    let t = document.getElementsByTagName("canvas")[0];
    e.target === t && clearPreview();
  }, [clearPreview]);
  let ts = useCallback(e => {
    !el && eo.current && (e8.current = {
      scrollTop: e,
      fauxFocusIndex: e6?.id
    });
  }, [el, e6]);
  useEffect(() => {
    if (!B) {
      window.addEventListener("mousedown", ta, !0);
      return () => {
        window.removeEventListener("mousedown", ta, !0);
      };
    }
    clearPreview();
  }, [clearPreview, B, ta]);
  let to = function ({
    dispatch: e
  }) {
    let t = selectCurrentFile()?.team ?? null;
    let i = useSubscription(TeamCanAdmin, {
      id: t?.id
    }, {
      enabled: !!t
    });
    return useCallback(() => {
      if (!t) return;
      let r = "loaded" === i.status && !!i.data.team?.hasPermission;
      let a = r ? void 0 : jsx(ez, {
        onClick: () => e(popModalStack())
      });
      e(showModalHandler({
        type: ConsumptionPaywallModalPlansPricing,
        data: {
          team: t,
          resource: FeatureFlag.SHARED_FONTS,
          editorType: FFileType.DESIGN,
          currentPlan: hasValidSubscription(convertTeamToRaw(t)) ? consumptionPaywallUtils.Plan.PRO : consumptionPaywallUtils.Plan.STARTER,
          upsellPlan: consumptionPaywallUtils.Plan.ORG,
          upsellSource: UpsellModalType.FONT_PICKER_UPSELL,
          hideUpsellPlanCta: !r,
          modalFooter: a
        }
      }));
    }, [e, t, i]);
  }({
    dispatch: t
  });
  return jsx(_$$k2, {
    name: "font_picker",
    children: jsxs(_$$S2.recordableDiv, {
      onKeyDown: tr,
      onMouseMove: te,
      recordingKey: i,
      dataTestId: "font-picker-wrapper-div",
      children: [jsx("div", {
        className: "font_picker--fontPickerSearchRow--cnskM",
        children: jsxs("div", {
          className: "font_picker--searchContainer--gbRUl",
          children: [jsx(SvgComponent, {
            svg: _$$A7,
            className: "font_picker--searchIcon--0a3sK"
          }), jsx(ej, {
            query: searchQueryPlaceholderFontFamily || el,
            recordingKey: generateRecordingKey(i, "search"),
            activeDescendant: e6 ? `${er}-${e6.id}` : void 0,
            controlsId: `${er}-fonts`,
            onClose: e2,
            onChange: e1,
            searchBarInputRef: z
          })]
        })
      }), !el && !H && jsx(fI, {
        className: "font_picker--fontPickerFontSetRow--euf4f",
        onKeyDown: eK,
        "data-onboarding-key": "font-picker-font-silo-menu-row",
        children: jsx(eF, {
          currentFontSet: eg,
          recordingKey: i,
          dispatch: t,
          onChange: tt,
          onCancel: eD,
          dropdownShown: x,
          currentOrg: eV,
          currentTeamName: eG?.name ?? null,
          showFontsUpsell: eY
        })
      }), jsx(_$$P, {
        ref: eo,
        onScroll: ts,
        scrollContainerRef: ea,
        height: parseInt(bb$) + (el ? parseInt(oBL) : 0),
        children: eU.length > 0 ? jsxs("div", {
          role: "listbox",
          id: `${er}-fonts`,
          "data-testid": "font-list-div",
          style: {
            height: e$.totalSize,
            position: "relative"
          },
          children: [ec ? jsx("div", {
            className: g()(eI, eE)
          }) : jsx("div", {
            className: "font_picker--fontPreviewLoadingRect--B2C9z",
            style: {
              height: `${parseInt(Ep1) * eU.length}px`,
              paddingLeft: "4px"
            },
            children: jsx(SvgComponent, {
              svg: _$$V(kF)
            })
          }), e$.virtualItems.map(e => {
            let t = eU[e.index];
            return t ? jsx(eM, {
              applyFont: tn,
              fontItem: t,
              fontPickerId: er,
              hasFetchedGoogleFontPreviews: eT,
              isMouseDisabled: e9,
              isSelected: selectedFontBeforePreviews === t.family,
              item: e,
              recordingKey: generateRecordingKey(i, t.family),
              total: eU.length
            }, Km(t)) : null;
          })]
        }) : jsx(eB, {
          searchQuery: el,
          currentFontSet: eg,
          showFontsUpsell: eY,
          orgName: eV?.name ?? null,
          onUpsellCtaClick: to
        })
      }), !!P && null != selectedFontBeforePreviews && jsx("div", {
        className: cssBuilderInstance.bt1.bSolid.colorBorder.p8.$,
        children: jsx(ButtonWide, {
          variant: "secondary",
          onClick: () => {
            tn(void 0, !0, !0);
          },
          iconPrefix: jsx(_$$S, {}),
          children: getI18nString("fullscreen.properties_panel.font_picker.clear_selection")
        })
      })]
    })
  });
}
function eF({
  currentFontSet: e,
  onChange: t,
  onCancel: i,
  recordingKey: r,
  dropdownShown: a,
  dispatch: s,
  currentOrg: o,
  currentTeamName: l,
  showFontsUpsell: d
}) {
  let c = a?.type === eP;
  let u = _$$Uh({
    hasCurrentOrg: !!o,
    showFontsUpsell: d,
    recordingKey: r
  });
  return jsx(TrackingProvider, {
    name: e0.FONT_PICK_FONT_SET_DROPDOWN,
    enabled: c,
    children: jsx("div", {
      className: "font_picker--fontSetDropdown--8aux5",
      children: jsx(e2, {
        ariaLabel: getI18nString("fullscreen.properties_panel.font_picker.font_set.all_fonts"),
        dispatch: s,
        dropdownShown: a,
        formatter: {
          format: e => {
            if (e === Qr.SHARED_FONTS) {
              if (o) return getI18nString("fullscreen.properties_panel.font_picker.font_set.shared_fonts.org", {
                orgName: o.name
              });
              if (d && l) return getI18nString("fullscreen.properties_panel.font_picker.font_set.shared_fonts.team", {
                teamName: l
              });
            }
            return getI18nString(`fullscreen.properties_panel.font_picker.font_set.${e}`);
          }
        },
        id: eP,
        inputClassName: "font_picker--fontPickerFontSetOption--fQ2Lu text--fontPos11--2LvXf text--_fontBase--QdLsd",
        onCancel: i,
        onChange: t,
        property: e,
        recordingKey: generateRecordingKey(r, "select"),
        children: u
      })
    })
  });
}
let eM = memo(function ({
  item: e,
  fontItem: t,
  fontPickerId: i,
  isSelected: a,
  hasFetchedGoogleFontPreviews: s,
  applyFont: o,
  recordingKey: l,
  isMouseDisabled: d,
  total: c
}) {
  let u = _$$P2(e.index);
  let h = Xr(_$$k3);
  let f = u?.id === e.index;
  let _ = f && u?.scrollIntoView;
  let A = useRef(null);
  useEffect(() => {
    f && _ && A.current?.scrollIntoView({
      block: "nearest"
    });
  }, [f, _]);
  let [y, b] = useState(_$$O.IS_LOADING);
  let v = useCallback(() => {
    d.current || h({
      id: e.index,
      scrollIntoView: !1
    });
  }, [d, h, e.index]);
  let I = useCallback(() => {
    d.current || h(null);
  }, [d, h]);
  let E = (e, t) => {
    e.stopPropagation();
    e.preventDefault();
    o(t);
  };
  let x = y === _$$O.LOADED || t.family.length > HP;
  let [S, w] = useState(!1);
  let T = useCallback(() => w(!0), []);
  let k = useCallback(() => w(!1), []);
  return jsxs(_$$S2.recordableButton, {
    "aria-posinset": e.index + 1,
    "aria-selected": a,
    "aria-setsize": c,
    className: g()(eI, {
      [eE]: (f || S) && y !== _$$O.IS_LOADING
    }),
    "data-family-name": `${t.family}`,
    "data-faux-focused": f,
    "data-idx": e.index,
    "data-tooltip": x ? t.family : void 0,
    "data-tooltip-hide-immediately": !0,
    "data-tooltip-show-right": !0,
    "data-tooltip-type": x ? KindEnum.TEXT : void 0,
    forwardedRef: A,
    id: `${i}-${e.index}`,
    onBlur: k,
    onClick: e => E(e, t.family),
    onFocus: T,
    onMouseEnter: v,
    onMouseLeave: I,
    recordingKey: l,
    role: "option",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      transform: `translateY(${e.start}px)`
    },
    tabIndex: -1,
    children: [a ? jsx(SvgComponent, {
      className: ex,
      svg: _$$A4,
      dataTestId: "font-picker-check-icon"
    }) : jsx("div", {
      className: ex
    }), jsx("div", {
      className: "font_picker--previewContainer--q3YXx",
      children: jsx(_$$A, {
        fontItem: t,
        setPreviewState: b,
        hasFetchedGoogleFontPreviews: s
      })
    }), jsx("span", {
      className: _$$Q,
      children: t.family
    }), getFeatureFlags().ce_show_gf_new_badge && Uw.has(t.previewPath) && y !== _$$O.IS_LOADING ? jsx("div", {
      className: eS,
      children: jsx("div", {
        className: ew,
        children: getI18nString("fullscreen.properties_panel.font_picker.new_font_badge")
      })
    }) : "", t.recentlyInstalled && y !== _$$O.IS_LOADING ? jsx("div", {
      className: eS,
      children: jsx("div", {
        className: ew,
        children: getI18nString("fullscreen.properties_panel.font_picker.new_font_badge")
      })
    }) : "", y === _$$O.IS_LOADING || f ? "" : jsx(SvgComponent, {
      className: "font_picker--fontPickerLoadingPreviewCover--h6OmW",
      svg: _$$V(sp)
    })]
  });
});
function ej({
  query: e,
  activeDescendant: t,
  controlsId: i,
  onChange: r,
  searchBarInputRef: a,
  onClose: s,
  recordingKey: o
}) {
  return jsx(eU, {
    ref: a,
    recordingKey: o,
    focusOnMount: !0,
    query: e,
    onChange: r,
    clearSearch: () => r(""),
    isKeyDownHandled: t => {
      if ("Escape" === t.code) {
        if ("" !== e) {
          r("");
          return !0;
        }
        s();
      } else ("ArrowUp" === t.code || "ArrowDown" === t.code) && t.preventDefault();
      return !0;
    },
    activeDescendant: t,
    controlsId: i
  });
}
let eU = forwardRef(({
  activeDescendant: e,
  controlsId: t,
  ...i
}, r) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onBlur,
    onSearchClick,
    onSearchKeyDown,
    onSearchChange
  } = ne(i, r);
  return jsx("div", {
    className: "font_picker--fontPickerSearchBar--xubKc",
    children: jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      "aria-activedescendant": e,
      "aria-controls": t,
      "aria-expanded": "true",
      className: "font_picker--fontPickerSearchBarInput--AcjY0",
      dataTestId: "font-picker-search-input",
      onBlur,
      onChange: onSearchChange,
      onKeyDown: onSearchKeyDown,
      onMouseDown: e => {
        onSearchClick();
        onMouseDown(e);
      },
      onMouseUp,
      placeholder: i.placeholder || getI18nString("fullscreen.properties_panel.font_picker.search_fonts"),
      role: "combobox",
      spellCheck: !1,
      value: i.query
    })
  });
});
function eB({
  searchQuery: e,
  currentFontSet: t,
  showFontsUpsell: i,
  orgName: r,
  onUpsellCtaClick: a
}) {
  let s = t === Qr.SHARED_FONTS;
  let o = t === Qr.USER_INSTALLED_FONTS;
  return getFeatureFlags().ce_fp_no_agent_message && o && !Kk() ? jsx("div", {
    "data-testid": "no-fonts-item-row",
    className: "font_picker--fontPickerNoAgentConnectionMessage--UekJN text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: Rt() ? jsx(K1, {}) : jsx(YQ, {})
  }) : e || !s ? jsx(eV, {
    searchQuery: e
  }) : jsx(eG, {
    showFontsUpsell: i,
    orgName: r,
    onUpsellCtaClick: a
  });
}
function eV({
  searchQuery: e
}) {
  return jsx("div", {
    "data-testid": "no-fonts-item-row",
    className: g()("font_picker--fontPickerNoFontsToShow--3Nnsz text--fontPos11--2LvXf text--_fontBase--QdLsd", {
      "font_picker--extraSearchPadding---PY3g": e
    }),
    children: e ? getI18nString("fullscreen.properties_panel.font_picker.no_search_results") : getI18nString("fullscreen.properties_panel.font_picker.no_fonts_in_current_set")
  });
}
function eG({
  showFontsUpsell: e,
  orgName: t,
  onUpsellCtaClick: i
}) {
  let r;
  let a = e ? _$$A3 : _$$A5;
  r = e ? getI18nString("fullscreen.properties_panel.font_picker.org_upsell") : t ? getI18nString("fullscreen.properties_panel.font_picker.no_shared_fonts_orgname", {
    orgName: t
  }) : getI18nString("fullscreen.properties_panel.font_picker.no_shared_fonts");
  let s = jsx($z, {
    variant: "secondary",
    innerText: "Learn more",
    onClick: () => {
      customHistory.unsafeRedirect(gg, "_blank");
    },
    children: getI18nString("fullscreen.properties_panel.font_picker.no_shared_fonts.cta")
  });
  let o = jsx($z, {
    variant: "primary",
    innerText: "Upgrade",
    onClick: i,
    children: getI18nString("fullscreen.properties_panel.font_picker.org_upsell.cta")
  });
  return jsxs(AutoLayout, {
    direction: "vertical",
    horizontalAlignItems: "center",
    padding: {
      top: 86,
      left: 16,
      right: 16
    },
    spacing: "12px",
    children: [jsx(SvgComponent, {
      className: cssBuilderInstance.colorIcon.$,
      svg: a
    }), jsx("p", {
      className: cssBuilderInstance.px4.alignCenter.$,
      children: r
    }), e ? o : s]
  });
}
function ez({
  onClick: e
}) {
  return jsxs(AutoLayout, {
    direction: "vertical",
    spacing: 24,
    padding: {
      top: 24
    },
    children: [jsx("div", {
      className: cssBuilderInstance.wFull.h2.colorBgTertiary.$
    }), jsxs(AutoLayout, {
      spacing: 8,
      verticalAlignItems: "center",
      children: [jsx(SvgComponent, {
        className: cssBuilderInstance.colorIcon.$,
        svg: _$$A6
      }), jsx("div", {
        children: renderI18nText("fullscreen.properties_panel.font_picker.org_consumption_modal.non_admin.text")
      }), jsx(Spacer, {}), jsx($z, {
        variant: "primary",
        onClick: e,
        children: renderI18nText("fullscreen.properties_panel.font_picker.org_consumption_modal.non_admin.cta")
      })]
    })]
  });
}
function eH({
  anchorElement: e,
  currentFont: t,
  recordingKey: i,
  onFontFamilyBindingChange: r,
  onHidePicker: a
}) {
  return jsx(We, {
    onChange: r,
    children: jsx(eW, {
      currentFieldValue: isNullish(t) || isInvalidValue(t) ? "" : t,
      initialPosition: e ? cn(e, d9) : new Point(0, 0),
      onHidePicker: a,
      recordingKey: generateRecordingKey(i, "variablePicker")
    })
  });
}
function eW({
  recordingKey: e,
  initialPosition: t,
  currentFieldValue: i,
  onHidePicker: a
}) {
  let s = useContext(FormattedInputContext);
  let o = useRef(null);
  let l = useCallback(() => {
    o.current && (s?.isShowingBindingUI ? a?.() : s?.showBindingUI(o.current, {
      currentFieldValue: i,
      initialPosition: t
    }));
  }, [i, t, a, s]);
  return jsx(_$$d, {
    ref: o,
    "aria-label": getI18nString("fullscreen.properties_panel.apply_variable"),
    "aria-expanded": !!s?.isShowingBindingUI,
    recordingKey: e,
    onClick: l,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("fullscreen.properties_panel.apply_variable")
    },
    children: jsx(_$$D, {})
  });
}
function eK(e) {
  "Enter" === e.key && e.stopPropagation();
}
export const Cn = $$eD0;