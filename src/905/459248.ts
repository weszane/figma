import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { ButtonPrimitive } from "../905/632989";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { Button, ButtonWide } from "../905/521428";
import { LoadingSpinner } from "../905/443820";
import { IconButton } from "../905/443068";
import { r as _$$r } from "../905/571562";
import { A as _$$A } from "../905/24328";
import { O as _$$O } from "../905/969533";
import { k as _$$k2 } from "../905/44647";
import { PageSelectionType, PluginModalType, Fonts, FontHelpers } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter } from "../figma_app/27355";
import v from "classnames";
import E from "../vendor/223926";
import S from "../vendor/128080";
import C from "../vendor/523035";
import { parsePxNumber } from "../figma_app/783094";
import { trackFileEventWithStore } from "../figma_app/901889";
import { useSingleEffect } from "../905/791079";
import { generateRecordingKey } from "../figma_app/878298";
import { reportError } from "../905/11";
import { logInfo } from "../905/714362";
import { getThemePx } from "../905/149328";
import { Point } from "../905/736624";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { trackFileEventThunk, hidePickerThunk } from "../figma_app/91703";
import { TrackingProvider } from "../figma_app/831799";
import { getEditorTypeFromView } from "../figma_app/976749";
import { J as _$$J2 } from "../905/445197";
import { fullscreenValue } from "../figma_app/455680";
import { getEulaConfigIfGoogleFont, splitFontsByEula, hasAcceptedEula, requiresEula, isEditorTypeExcluded, maybeShowEulaModal } from "../905/291654";
import { areFontsInitializedCheck, isAgentDetected } from "../905/777093";
import { handleLoadAllPagesWithVersionCheck } from "../905/807667";
import { useDropdownState } from "../905/848862";
import { fontLoadingAtom } from "../figma_app/623300";
import { KindEnum } from "../905/129884";
import { getFontStyleMapping } from "../905/714538";
import { e0 as _$$e2 } from "../905/696396";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { ay } from "../figma_app/628987";
import { zz } from "../905/32188";
import { DraggableModalManager } from "../905/748636";
import { useIsFullscreenSitesView } from "../905/561485";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { R as _$$R } from "../905/256203";
import { trackEventAnalytics } from "../905/449184";
import { x4 } from "../figma_app/211694";
import { K1 } from "../905/956994";
import { D as _$$D } from "../905/347702";
import { L as _$$L } from "../905/704296";
import { A as _$$A2 } from "../svg/619883";
import { useSubscription } from "../figma_app/288654";
import { linkWithTracking } from "../figma_app/637027";
import { startOrgUpgradeFlowThunk } from "../figma_app/482142";
import { postUserFlag } from "../905/985254";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { selectCurrentUser } from "../905/372672";
import { selectUserFlag } from "../905/940356";
import { TeamCanAdmin } from "../figma_app/43951";
import { gg, Rk } from "../905/981217";
import { UpsellModalType } from "../905/165519";
import { A as _$$A3 } from "../6828/673039";
import { ms, MM } from "../figma_app/236327";
import { Kyn } from "../figma_app/27776";
import { A as _$$A4 } from "../6828/555288";
import { A as _$$A5 } from "../2854/630701";
var I = v;
var x = E;
var w = S;
var T = C;
function ec() {
  return jsxs("div", {
    className: cssBuilderInstance.flex.gap8.itemsCenter.p8.colorBgSecondary.$,
    children: [jsx(_$$R, {
      className: cssBuilderInstance.m2.colorIcon.$
    }), jsx("div", {
      className: cssBuilderInstance.lh16.cursorDefault.$,
      children: getI18nString("fullscreen.toolbar.missing_fonts_modal.google_only_banner.text")
    })]
  });
}
let ef = "328px";
let e_ = "missing_fonts_modal--missingFontIconText--Q32XK";
let eA = "missing_fonts_modal--chevronIcon--3S5Qb";
let ey = "missing_fonts_modal--expandFontFamilyRowButton--2VsbZ";
let eb = "missing_fonts_modal--fontFamilyTopRow--lpoRI";
function ev(e) {
  return jsx("div", {
    className: "missing_fonts_modal--secondaryModal--Url6l modal--modalShadow--d-rJf",
    "data-testid": "secondary-banner-modal",
    children: jsxs("div", {
      className: "missing_fonts_modal_secondary_banner_modal--container--NBP05",
      children: [e.icon, jsx("div", {
        className: "missing_fonts_modal_secondary_banner_modal--bodyText--2HnuY",
        children: e.content
      }), jsx("div", {
        className: "missing_fonts_modal_secondary_banner_modal--closeButtonContainer--1Wt9U",
        children: jsx(IconButton, {
          onClick: e.onClose,
          "aria-label": getI18nString("general.close"),
          "data-testid": "modal-close-button",
          children: jsx(_$$L, {})
        })
      })]
    })
  });
}
let eE = "agent-disconnected-banner-dismissed-timestamp";
let ex = _$$D(() => {
  let e = x4?.getItem(eE);
  if ("string" == typeof e && !isNaN(parseInt(e))) return parseInt(e);
});
function eS(e) {
  return (useSingleEffect(() => {
    areFontsInitializedCheck() || trackEventAnalytics("Missing Fonts Modal No Agent Banner Shown", {}, {
      forwardToDatadog: !0
    });
  }), areFontsInitializedCheck()) ? jsx(Fragment, {}) : jsx(ev, {
    icon: jsx(SvgComponent, {
      svg: _$$A2,
      className: "missing_fonts_modal_no_agent_banner--warningIcon--AfKIM"
    }),
    content: jsx(K1, {}),
    onClose: e.onDismiss
  });
}
function ej(e) {
  let t = useDispatch();
  let i = e.canAdminCurrentTeam ? renderI18nText("fullscreen.toolbar.missing_fonts_modal.org_upsell_banner.admin.text", {
    upgradeLink: jsx(linkWithTracking, {
      onClick: () => {
        t(startOrgUpgradeFlowThunk({
          openInNewTab: !0,
          upsellSource: UpsellModalType.MISSING_FONTS_UPSELL
        }));
      },
      target: "_blank",
      trusted: !0,
      children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.org_upsell_banner.admin.link")
    })
  }) : renderI18nText("fullscreen.toolbar.missing_fonts_modal.org_upsell_banner.nonadmin.text", {
    learnMoreLink: jsx(linkWithTracking, {
      href: gg,
      target: "_blank",
      trusted: !0,
      children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.org_upsell_banner.nonadmin.link")
    })
  });
  return jsx(ev, {
    icon: jsx(SvgComponent, {
      className: cssBuilderInstance.m2.colorIcon.$,
      svg: _$$A3
    }),
    content: jsx("div", {
      children: i
    }),
    onClose: () => {
      t(postUserFlag({
        seen_missing_fonts_org_upsell_banner: !0
      }));
    }
  });
}
let eB = "MISSING_FONTS_SCOPE_DROPDOWN";
function eV({
  dropdownShown: e,
  dropdownTriggerRef: t,
  scope: i,
  setScope: r
}) {
  if (!e || e.type !== eB || !t.current) return null;
  let a = t.current.getBoundingClientRect();
  return jsxs(ms, {
    positionFixed: !0,
    style: {
      left: a.left,
      top: a.top
    },
    children: [jsx(MM, {
      onClick: () => {
        logInfo("missing fonts", "setting scope to current page");
        r(PageSelectionType.CURRENT_PAGE);
      },
      checked: i === PageSelectionType.CURRENT_PAGE,
      children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.current_page")
    }), jsx(MM, {
      onClick: () => {
        logInfo("missing fonts", "setting scope to all pages");
        r(PageSelectionType.ALL_PAGES);
      },
      checked: i === PageSelectionType.ALL_PAGES,
      children: jsx("div", {
        children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.all_pages")
      })
    })]
  });
}
let eW = parsePxNumber(Kyn);
function eK(e) {
  return void 0 !== e.style && void 0 !== e.version;
}
function eY(e) {
  return `${e.family}	${e.style}	${e.version}`;
}
export let $$eq2 = null;
export function $$e$1() {
  $$eq2 = null;
}
export let $$eZ0 = registerModal(function (e) {
  let {
    isSelectionBased,
    onClose,
    missingFonts
  } = e;
  let h = "missingFontsModal";
  let g = useDispatch();
  let f = useDropdownState();
  let v = useSelector(e => e.fonts);
  let E = trackFileEventWithStore();
  let [S, C] = useState();
  let T = useIsFullscreenSlidesView();
  let k = useIsFullscreenSitesView();
  let Z = useSelector(e => e.userFlags);
  let ee = useSelector(e => e.selectedView);
  let en = getEditorTypeFromView(ee);
  useSingleEffect(() => {
    E("missing_fonts_modal_opened", {
      missing_font_families: [...new Set(e.missingFonts.map(e => e.family))]
    });
    C(new Point(window.innerWidth / 2 - eW / 2, getThemePx() + 12));
  });
  let er = useMemo(() => isSelectionBased && 0 === missingFonts.filter(e => e.inSelection).length, [isSelectionBased, missingFonts]);
  let {
    scope,
    missingFontsInfoForCurrentScope,
    setScope,
    currentScopeString,
    isReplacing,
    setReplacements,
    replacements,
    onApply,
    onFontStyleChange,
    onSelectSameMissingFont,
    versionsForStyles,
    isLoadingMissingFonts
  } = function ({
    fonts: e,
    missingFonts: t,
    counts: i,
    isSelectionBased: n,
    onClose: a,
    dispatch: o,
    isSelectionBasedFallback: l
  }) {
    let [d, c] = useState({});
    let [u, p] = useState({});
    let [m, h] = useState(!1);
    let [g, f] = useState(n && !l ? PageSelectionType.CURRENT_SELECTION : PageSelectionType.CURRENT_PAGE);
    let [v, I] = useAtomValueAndSetter(fontLoadingAtom);
    useEffect(() => () => {
      I(!1);
      o(VisualBellActions.dequeue({
        matchType: "missing-fonts-load-all-pages"
      }));
    }, [I, o]);
    let [E, x] = useState(null);
    useEffect(() => {
      getFeatureFlags().desktop_font_reload_on_focus_ux && x(null);
    }, [t]);
    useEffect(() => {
      g !== PageSelectionType.ALL_PAGES || E || (I(!0), o(VisualBellActions.enqueue({
        type: "missing-fonts-load-all-pages",
        message: getI18nString("fullscreen.toolbar.missing_fonts_modal.finding_missing_fonts"),
        error: !1,
        icon: VisualBellIcon.IMAGE_BACKED_SPINNER,
        delay: 1500
      })), handleLoadAllPagesWithVersionCheck(PluginModalType.MISSING_FONTS).then(() => {
        new Promise(e => {
          Fonts.fontsAreLoading() ? $$eq2 = e : e();
        }).then(() => {
          let e = FontHelpers.getMissingFontInfoFromAllPages();
          e && e.missingFonts ? x(e) : reportError(ServiceCategories.TEXT_AND_VECTOR, Error("Could not get missing fonts from all pages"));
          I(!1);
          o(VisualBellActions.dequeue({
            matchType: "missing-fonts-load-all-pages"
          }));
        });
      }));
    }, [o, E, g, I]);
    let S = g === PageSelectionType.ALL_PAGES && E ? E : {
      missingFonts: t,
      counts: i
    };
    useEffect(() => {
      c(getFontStyleMapping(e));
    }, [c, e]);
    let w = useCallback((e, t) => {
      let i = {
        ...u
      };
      let n = S.missingFonts[e];
      let r = i[eY(n)];
      let a = r ? r.newName.family : n.family;
      let s = d[a][t];
      i[eY(n)] = {
        oldName: n,
        newName: {
          family: a,
          style: t,
          version: s
        }
      };
      p(i);
    }, [S.missingFonts, u, d]);
    let C = useCallback(() => {
      h(!0);
      _$$J2(() => {
        permissionScopeHandler.user("replace-missing-fonts", () => {
          if (FontHelpers) {
            for (let e in u) {
              let t = u[e];
              t && eK(t.newName) && (FontHelpers.replaceFontsInSelection([{
                replace: t.oldName,
                with: t.newName
              }], g), fullscreenValue.commit());
            }
            FontHelpers.resetMissingFonts();
          }
        });
        let e = Object.values(u).map(e => e.oldName.family + ":" + e.newName.family);
        let t = "current_page";
        l && g === PageSelectionType.CURRENT_PAGE ? t = "current_selection_fallback" : g === PageSelectionType.CURRENT_SELECTION ? t = "current_selection" : g === PageSelectionType.ALL_PAGES && (t = "all_pages");
        o(trackFileEventThunk({
          name: "missing_fonts_replaced",
          params: {
            replaced_font_families: e,
            scope: t
          }
        }));
        h(!1);
        a();
      });
    }, [o, a, u, g, l]);
    let T = useCallback((e, t) => {
      fullscreenValue.selectMissingFontNodes(e, t, g);
    }, [g]);
    let k = useMemo(() => g === PageSelectionType.ALL_PAGES ? renderI18nText("fullscreen.toolbar.missing_fonts_modal.all_pages") : renderI18nText("fullscreen.toolbar.missing_fonts_modal.current_page"), [g]);
    return {
      scope: g,
      missingFontsInfoForCurrentScope: S,
      setScope: f,
      currentScopeString: k,
      isReplacing: m,
      setReplacements: p,
      replacements: u,
      onApply: C,
      onFontStyleChange: w,
      onSelectSameMissingFont: T,
      versionsForStyles: d,
      isLoadingMissingFonts: v
    };
  }({
    ...e,
    isSelectionBasedFallback: er,
    fonts: v,
    dispatch: g
  });
  let [eE, ex] = useState(isSelectionBased && !er);
  let eS = useCallback((e, t, i, n) => {
    let r = {
      ...replacements
    };
    let a = missingFontsInfoForCurrentScope.missingFonts[e];
    if (!a) return;
    if (t && null == versionsForStyles[t]) {
      reportError(ServiceCategories.EDITOR_USABILITY, Error(`Attempted to replace missing font ${JSON.stringify(a)} with family ${t} but was not available`));
      return;
    }
    let o = null;
    let l = i ? [a] : missingFontsInfoForCurrentScope.missingFonts.filter(e => e.family === a.family).filter(e => !eE || e.inSelection);
    let d = !1;
    for (let e of l) if (null == t) delete r[eY(e)];else {
      let i = versionsForStyles[t];
      o = function (e, t) {
        let i = ["ITALIC", "OBLIQUE"];
        let n = t.replace(" ", "").toLocaleUpperCase();
        for (let t of Object.keys(e)) {
          let r = t.replace(" ", "").toLocaleUpperCase();
          if (r === n || i.includes(r) && i.includes(n)) return {
            style: t,
            version: e[t]
          };
        }
        return null;
      }(i, e.style);
      d ||= null == o;
      let n = 1 === Object.keys(i).length ? Object.keys(i)[0] : void 0;
      null == o && void 0 !== n && void 0 === Object.values(r).find(e => e.newName.family === t && e.newName.style === n) && (o = {
        style: n,
        version: i[n]
      });
      r[eY(e)] = {
        oldName: e,
        newName: {
          ...o,
          family: t
        }
      };
    }
    setReplacements(r);
    d && n && n();
  }, [setReplacements, missingFontsInfoForCurrentScope.missingFonts, replacements, versionsForStyles, eE]);
  let eC = useCallback(e => {
    let t = {
      ...replacements
    };
    let i = 0;
    for (let n = 0; n < missingFontsInfoForCurrentScope.missingFonts.length; n++) {
      let r = missingFontsInfoForCurrentScope.missingFonts[n];
      if (!r) continue;
      let a = getEulaConfigIfGoogleFont(r?.family, v);
      if (!a) continue;
      let s = !!replacements[eY(r)];
      a.eula === e && !s && (t[eY(r)] = {
        oldName: r,
        newName: {
          family: r.family,
          style: r.style,
          version: r.version
        }
      }, i++);
    }
    logInfo("missing fonts", "EULA agreed", {
      eula: e,
      fontsReplacedCount: i,
      totalMissingFonts: missingFontsInfoForCurrentScope.missingFonts.length
    });
    setReplacements(t);
  }, [replacements, setReplacements, missingFontsInfoForCurrentScope.missingFonts, v]);
  let eT = useCallback(() => {
    f && f.type === eB ? g(hideDropdownAction()) : g(showDropdownThunk({
      type: eB
    }));
  }, [g, f]);
  let [ek, eF] = useState({});
  let eM = useRef(null);
  let ej = function () {
    let e = selectUserFlag("seen_missing_fonts_org_upsell_banner");
    let t = useCurrentUserOrg() ?? null;
    let i = selectCurrentFile()?.team ?? null;
    let n = selectCurrentUser();
    let r = useIsFullscreenSitesView();
    let a = Rk({
      enabled: !r,
      user: n,
      hasCurrentTeam: !!i,
      hasCurrentOrg: !!t
    });
    let s = useSubscription(TeamCanAdmin, {
      id: i?.id
    }, {
      enabled: !!i
    });
    if (a && !e && "loaded" === s.status) return {
      canAdminCurrentTeam: "loaded" === s.status && !!s.data.team?.hasPermission
    };
  }();
  let eU = useSelector(e => e.mirror.appModel.pagesList);
  let ez = useCallback(function () {
    g(hideDropdownAction());
    g(hidePickerThunk());
  }, [g]);
  let e$ = useSelector(e => e.mirror.sceneGraphSelection);
  let [eZ, eJ] = useState();
  useEffect(() => {
    eE && eJ(e => {
      let t = new Set(Object.keys(e$));
      return e ? w()(e, t) ? e : void (ez(), onClose()) : t;
    });
  }, [e$, eE, eJ, onClose, ez]);
  useEffect(() => {
    (function (e, t, i, n, r) {
      let a = e.missingFonts;
      let s = t ? a.filter(e => e.inSelection) : a;
      let {
        eulaFonts
      } = splitFontsByEula(s, i, r);
      return eulaFonts.length === s.length && eulaFonts.every(e => hasAcceptedEula(e.family, i, n));
    })(missingFontsInfoForCurrentScope, eE, v, Z, en) && (ez(), onClose());
  }, [ez, v, eE, missingFontsInfoForCurrentScope, onClose, Z, en]);
  let e0 = !T && eU.length > 1;
  if (!S) return null;
  let e1 = Object.keys(replacements).filter(e => eK(replacements[e].newName)).length > 0;
  return jsx(TrackingProvider, {
    name: _$$e2.MISSING_FONTS_MODAL,
    children: jsxs(DraggableModalManager, {
      initialPosition: S,
      container: eQ,
      containerProps: {
        upsellBannerInfo: ej
      },
      title: jsxs("div", {
        className: cssBuilderInstance.flex.flexGrow1.ml8.$,
        children: [jsx("span", {
          className: cssBuilderInstance.textBodyMediumStrong.flexGrow1.$,
          children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.missing_font")
        }), jsx("span", {
          className: cssBuilderInstance.textBodyMediumStrong.pl4.borderBox.$,
          style: styleBuilderInstance.add({
            width: `calc(${ef} - 16px)`
          }).$,
          children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.replacement")
        })]
      }),
      headerSize: "small",
      onClose,
      onDragStart: ez,
      children: [jsxs("div", {
        style: styleBuilderInstance.add({
          width: Kyn
        }).$,
        children: [jsxs("div", {
          className: cssBuilderInstance.flex.maxH300.flexColumn.overflowAuto.py4.$,
          children: [Object.entries(x()(missingFontsInfoForCurrentScope.missingFonts.map((e, t) => ({
            ...e,
            index: t
          })).filter(e => !eE || e.inSelection), "family")).map(([e, t]) => jsx(eX, {
            dispatch: g,
            fonts: v,
            isRowExpanded: !!ek[e],
            isSelectionBased: !!eE,
            missingFontsInGroup: t,
            missingFontsInfoForCurrentScope,
            onEulaAgreed: eC,
            onFontFamilyChange: eS,
            onFontStyleChange,
            onSelectSameMissingFont,
            recordingKey: h,
            replacements,
            setRowExpanded: t => {
              ez();
              eF({
                ...ek,
                [e]: t
              });
            },
            versionsForStyles
          }, e)), eE && missingFontsInfoForCurrentScope.missingFonts.some(e => !e.inSelection) && jsxs(ButtonPrimitive, {
            className: I()(cssBuilderInstance.flex.flexGrow1.itemsCenter.textBodyMedium.minH32.px12.colorTextSecondary.$, ey),
            onClick: () => {
              ex(!1);
              setScope(PageSelectionType.CURRENT_PAGE);
            },
            children: [jsx(SvgComponent, {
              svg: _$$A5,
              className: "missing_fonts_modal--overflowDotsIcon--nOli9"
            }), renderI18nText("fullscreen.toolbar.missing_fonts_modal.show_other_missing_fonts")]
          })]
        }), k && jsx("div", {
          className: cssBuilderInstance.mt8.$,
          children: jsx(ec, {})
        })]
      }), jsxs("div", {
        className: cssBuilderInstance.p12.flex.bt1.bSolid.colorBorder.if(e0 || eE, cssBuilderInstance.justifyBetween, cssBuilderInstance.justifyEnd).$,
        children: [eE && jsx(Checkbox, {
          checked: scope === PageSelectionType.CURRENT_PAGE,
          onChange: () => setScope(scope === PageSelectionType.CURRENT_PAGE ? PageSelectionType.CURRENT_SELECTION : PageSelectionType.CURRENT_PAGE),
          label: jsx(Label, {
            children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.replace_on_the_whole_page")
          })
        }), e0 && !eE && jsxs(Fragment, {
          children: [jsx(Button, {
            onClick: eT,
            variant: "secondary",
            ref: eM,
            children: jsxs("div", {
              className: cssBuilderInstance.inlineFlex.overflowHidden.itemsCenter.$,
              style: {
                marginRight: "-8px"
              },
              children: [currentScopeString, jsx(_$$r, {
                className: cssBuilderInstance.mr0.$
              })]
            })
          }), jsx(eV, {
            dropdownShown: f,
            dropdownTriggerRef: eM,
            scope,
            setScope: e => {
              g(hideDropdownAction());
              setScope(e);
            }
          })]
        }), jsxs("div", {
          className: cssBuilderInstance.flex.justifyEnd.$,
          children: [!e1 && jsx(Button, {
            variant: "secondary",
            onClick: onClose,
            children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.close")
          }), e1 && jsxs(Button, {
            recordingKey: generateRecordingKey(h, "replaceFonts"),
            disabled: !e1 || isReplacing || isLoadingMissingFonts,
            onClick: onApply,
            children: [jsx("span", {
              style: styleBuilderInstance.if(isReplacing, styleBuilderInstance.invisible).$,
              children: renderI18nText("fullscreen.toolbar.missing_fonts_modal.replace_fonts")
            }), isReplacing && jsx("span", {
              className: cssBuilderInstance.absolute.leftHalf.topHalf.$,
              style: styleBuilderInstance.add({
                "--color-icon": "var(--btn-color)",
                transform: "translate(-50%, -50%)"
              }).$,
              children: jsx(LoadingSpinner, {})
            })]
          })]
        })]
      })]
    })
  });
}, "MISSING_FONTS_MODAL", ModalSupportsBackground.YES);
function eX({
  missingFontsInGroup: e,
  recordingKey: t,
  replacements: i,
  isRowExpanded: s,
  setRowExpanded: l,
  fonts: d,
  dispatch: u,
  missingFontsInfoForCurrentScope: m,
  onFontFamilyChange: _,
  versionsForStyles: A,
  onFontStyleChange: y,
  onSelectSameMissingFont: b,
  onEulaAgreed: v,
  isSelectionBased: E
}) {
  let x = e[0];
  let S = [...new Set(e.map(e => i[eY(e)]?.newName.family))];
  let w = useSelector(e => e.userFlags);
  let C = useSelector(e => e.selectedView);
  let k = getEditorTypeFromView(C);
  let R = requiresEula(x.family, d, w) && !isEditorTypeExcluded(x.family, k);
  let N = getI18nString("fullscreen.toolbar.missing_fonts_modal.select_items_count_using_this_font", {
    numItems: T()(m.missingFonts.map((e, t) => e.family === x.family ? m.counts?.[t] : 0))
  });
  let O = useMemo(() => jsx("div", {
    className: "missing_fonts_modal--selectWithSameFamilyIcon--BvyA9",
    children: jsx(IconButton, {
      onClick: e => {
        e.stopPropagation();
        b(x?.family, m.missingFonts.filter(e => e.family === x?.family).map(e => e.style));
      },
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": N
      },
      "aria-label": N,
      recordingKey: generateRecordingKey(t, "selectMissingFontObjects"),
      children: jsx(_$$A, {})
    })
  }), [N, x?.family, m.missingFonts, b, t]);
  let D = useCallback(async () => {
    let e = getEulaConfigIfGoogleFont(x.family, d)?.eula;
    (await maybeShowEulaModal(x.family, w, d, u, "missing_fonts_modal")) && e && v(e);
  }, [u, x.family, d, v, w]);
  return jsxs("div", {
    className: I()(cssBuilderInstance.flex.itemsStretch.flexNone.if(s, cssBuilderInstance.flexColumn, cssBuilderInstance.itemsCenter).py4.px12.$, s ? "" : eb),
    children: [jsxs("div", {
      className: I()(cssBuilderInstance.flex.flexGrow1.itemsCenter.textBodyMedium.minH32.$, eb),
      children: [jsxs(ButtonPrimitive, {
        className: I()(cssBuilderInstance.flex.flexGrow1.itemsCenter.alignLeft.textBodyMedium.minH32.$, ey, "missing_fonts_modal--fontFamilyRowButton--TTmK3"),
        onClick: () => {
          l(!s);
        },
        children: [s ? jsx(_$$O, {
          className: eA
        }) : jsx(_$$k2, {
          className: eA
        }), x.family]
      }), s && !E && O]
    }), s && jsx("div", {
      className: cssBuilderInstance.flex.flexColumn.pl16.$,
      children: e.map(e => {
        let r = i[eY(e)];
        let a = getI18nString("fullscreen.toolbar.missing_fonts_modal.select_items_count_using_this_font", {
          numItems: m.counts?.[e.index] ?? 1
        });
        return jsxs("div", {
          className: I()(cssBuilderInstance.flex.flexNone.$, "missing_fonts_modal--fontStyleRow--e8GDG"),
          children: [jsxs("div", {
            className: cssBuilderInstance.flex.flexGrow1.itemsCenter.justifyBetween.$,
            children: [jsx("div", {
              className: cssBuilderInstance.flex.itemsCenter.$,
              children: e.style
            }), jsx(SvgComponent, {
              svg: _$$A4,
              className: I()(e_, cssBuilderInstance.mr8.$)
            })]
          }), jsxs("div", {
            className: I()("missing_fonts_modal--replacementRight--UxaN-", cssBuilderInstance.gap8.$),
            children: [jsx("div", {
              style: styleBuilderInstance.add({
                width: "224px"
              }).$,
              children: jsx(ay, {
                clearable: !0,
                customPlaceholder: getI18nString("fullscreen.toolbar.missing_fonts_modal.select_font"),
                editingStyleGuid: void 0,
                fontFamily: r?.newName.family,
                fontPickerId: `MFM_FONT_PICKER_ID_${e.index}`,
                fonts: d,
                hideTypographyVariableOptions: !0,
                id: `missing-font-modal-font-family-${e.index}`,
                onChange: t => {
                  _(e.index, t, !0);
                },
                recordingKey: generateRecordingKey(t, `${e.family}-${e.index}`),
                showPlaceholder: !1,
                variant: "button",
                versionsForStyles: A
              })
            }), jsx("div", {
              className: "missing_fonts_modal--fontStyle--5bvih",
              children: jsx(zz, {
                customPlaceholder: getI18nString("fullscreen.toolbar.missing_fonts_modal.select_style"),
                enablePreview: !1,
                fontFamily: r?.newName.family,
                fontStyle: r?.newName?.style,
                fonts: d,
                hideTypographyVariableOptions: !0,
                id: `missing-font-style-${e.index}`,
                onChange: t => {
                  y(e.index, t);
                },
                recordingKey: generateRecordingKey(t, `${e.family}-${e.style}`),
                showMissingIcon: !1,
                versionsForStyles: A
              })
            }), !E && jsx("div", {
              className: "missing_fonts_modal--selectWithSameStyleIcon--mXfcb",
              children: jsx(IconButton, {
                onClick: t => {
                  t.stopPropagation();
                  b(e.family, e.style);
                },
                htmlAttributes: {
                  "data-tooltip-type": KindEnum.TEXT,
                  "data-tooltip": a
                },
                "aria-label": a,
                recordingKey: generateRecordingKey(t, "selectMissingFontObjects"),
                children: jsx(_$$A, {})
              })
            })]
          })]
        }, e.index);
      })
    }), !s && jsxs(Fragment, {
      children: [jsx(SvgComponent, {
        svg: _$$A4,
        className: I()(e_, cssBuilderInstance.mr8.$)
      }), jsxs("div", {
        className: cssBuilderInstance.flex.itemsCenter.gap8.minW0.$,
        style: styleBuilderInstance.add({
          width: ef
        }).$,
        children: [S.length > 1 ? jsx(ButtonWide, {
          onClick: () => l(!s),
          variant: "secondary",
          children: jsx("div", {
            className: cssBuilderInstance.inlineFlex.overflowHidden.wFull.itemsStart.$,
            children: getI18nString("fullscreen.mixed")
          })
        }) : jsxs(Fragment, {
          children: [R && jsxs(Fragment, {
            children: [jsx(Button, {
              onClick: D,
              children: getI18nString("fullscreen.toolbar.missing_fonts_modal.enable_font")
            }), jsx("span", {
              className: "missing_fonts_modal--orText--5tZjH",
              children: getI18nString("fullscreen.toolbar.missing_fonts_modal.or")
            })]
          }), jsx("div", {
            className: cssBuilderInstance.flexAuto.minW0.$,
            children: jsx(ay, {
              clearable: !0,
              customPlaceholder: R ? getI18nString("fullscreen.toolbar.missing_fonts_modal.select_font_replace") : getI18nString("fullscreen.toolbar.missing_fonts_modal.select_font"),
              editingStyleGuid: void 0,
              fontFamily: i[eY(x)]?.newName.family,
              fontPickerId: `MFM_FONT_PICKER_ID_${x.index}`,
              fonts: d,
              hideTypographyVariableOptions: !0,
              id: `missing-font-modal-font-family-${x.index}`,
              onChange: e => {
                _(x.index, e, !1, () => l(!0));
              },
              recordingKey: generateRecordingKey(t, `${x.family}-${x.index}`),
              showPlaceholder: !1,
              variant: "button",
              versionsForStyles: A
            })
          })]
        }), !E && O]
      })]
    })]
  });
}
function eQ(e) {
  let t = "number" == typeof ex() && ex() > Date.now() / 1e3 - 604800;
  let [i, a] = useState(!1);
  let s = getFeatureFlags().ce_mfm_no_agent_banner && isAgentDetected() && !i && !t && !areFontsInitializedCheck();
  return jsxs(Fragment, {
    children: [e.children, s && jsx(eS, {
      onDismiss: () => {
        var e;
        a(!0);
        e = Date.now() / 1e3;
        x4?.setItem(eE, String(e));
      }
    }), !s && !i && e.upsellBannerInfo && jsx(ej, {
      canAdminCurrentTeam: e.upsellBannerInfo.canAdminCurrentTeam
    })]
  });
}
export const CM = $$eZ0;
export const Yv = $$e$1;
export const xL = $$eq2;