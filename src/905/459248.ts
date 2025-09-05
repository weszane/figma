import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { E as _$$E } from "../905/632989";
import { S as _$$S } from "../905/274480";
import { J as _$$J } from "../905/270045";
import { $n, IK } from "../905/521428";
import { k as _$$k } from "../905/443820";
import { K as _$$K } from "../905/443068";
import { r as _$$r } from "../905/571562";
import { A as _$$A } from "../905/24328";
import { O as _$$O } from "../905/969533";
import { k as _$$k2 } from "../905/44647";
import { vhv, _em, vXe, t8O } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { fp } from "../figma_app/27355";
import v from "classnames";
import E from "../vendor/223926";
import S from "../vendor/128080";
import C from "../vendor/523035";
import { parsePxNumber } from "../figma_app/783094";
import { U as _$$U } from "../figma_app/901889";
import { h as _$$h } from "../905/207101";
import { Pt } from "../figma_app/806412";
import { $D } from "../905/11";
import { Lo } from "../905/714362";
import { bG } from "../905/149328";
import { Point } from "../905/736624";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { sx } from "../905/941192";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { oB, j7 } from "../905/929976";
import { sx as _$$sx, XE } from "../figma_app/91703";
import { fu } from "../figma_app/831799";
import { XE as _$$XE } from "../figma_app/976749";
import { J as _$$J2 } from "../905/445197";
import { Y5 } from "../figma_app/455680";
import { h_, Ie, qG, jb, _D, Cj } from "../905/291654";
import { Kk, Rt } from "../905/777093";
import { q as _$$q } from "../905/807667";
import { Um } from "../905/848862";
import { QR } from "../figma_app/623300";
import { Ib } from "../905/129884";
import { pn } from "../905/714538";
import { e0 as _$$e2 } from "../905/696396";
import { Ju, ZU } from "../905/102752";
import { ay } from "../figma_app/628987";
import { zz } from "../905/32188";
import { Ao } from "../905/748636";
import { cJ } from "../905/561485";
import { sO } from "../figma_app/21029";
import { R as _$$R } from "../905/256203";
import { sx as _$$sx2 } from "../905/449184";
import { x4 } from "../figma_app/211694";
import { K1 } from "../905/956994";
import { D as _$$D } from "../905/347702";
import { L as _$$L } from "../905/704296";
import { A as _$$A2 } from "../svg/619883";
import { Rs } from "../figma_app/288654";
import { Us } from "../figma_app/637027";
import { Bq } from "../figma_app/482142";
import { b as _$$b } from "../905/985254";
import { q5 } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { iZ } from "../905/372672";
import { f as _$$f } from "../905/940356";
import { TNJ } from "../figma_app/43951";
import { gg, Rk } from "../905/981217";
import { b as _$$b2 } from "../905/165519";
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
    className: _$$s.flex.gap8.itemsCenter.p8.colorBgSecondary.$,
    children: [jsx(_$$R, {
      className: _$$s.m2.colorIcon.$
    }), jsx("div", {
      className: _$$s.lh16.cursorDefault.$,
      children: _$$t("fullscreen.toolbar.missing_fonts_modal.google_only_banner.text")
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
        children: jsx(_$$K, {
          onClick: e.onClose,
          "aria-label": _$$t("general.close"),
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
  return (_$$h(() => {
    Kk() || _$$sx2("Missing Fonts Modal No Agent Banner Shown", {}, {
      forwardToDatadog: !0
    });
  }), Kk()) ? jsx(Fragment, {}) : jsx(ev, {
    icon: jsx(_$$B, {
      svg: _$$A2,
      className: "missing_fonts_modal_no_agent_banner--warningIcon--AfKIM"
    }),
    content: jsx(K1, {}),
    onClose: e.onDismiss
  });
}
function ej(e) {
  let t = useDispatch();
  let i = e.canAdminCurrentTeam ? tx("fullscreen.toolbar.missing_fonts_modal.org_upsell_banner.admin.text", {
    upgradeLink: jsx(Us, {
      onClick: () => {
        t(Bq({
          openInNewTab: !0,
          upsellSource: _$$b2.MISSING_FONTS_UPSELL
        }));
      },
      target: "_blank",
      trusted: !0,
      children: tx("fullscreen.toolbar.missing_fonts_modal.org_upsell_banner.admin.link")
    })
  }) : tx("fullscreen.toolbar.missing_fonts_modal.org_upsell_banner.nonadmin.text", {
    learnMoreLink: jsx(Us, {
      href: gg,
      target: "_blank",
      trusted: !0,
      children: tx("fullscreen.toolbar.missing_fonts_modal.org_upsell_banner.nonadmin.link")
    })
  });
  return jsx(ev, {
    icon: jsx(_$$B, {
      className: _$$s.m2.colorIcon.$,
      svg: _$$A3
    }),
    content: jsx("div", {
      children: i
    }),
    onClose: () => {
      t(_$$b({
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
        Lo("missing fonts", "setting scope to current page");
        r(vhv.CURRENT_PAGE);
      },
      checked: i === vhv.CURRENT_PAGE,
      children: tx("fullscreen.toolbar.missing_fonts_modal.current_page")
    }), jsx(MM, {
      onClick: () => {
        Lo("missing fonts", "setting scope to all pages");
        r(vhv.ALL_PAGES);
      },
      checked: i === vhv.ALL_PAGES,
      children: jsx("div", {
        children: tx("fullscreen.toolbar.missing_fonts_modal.all_pages")
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
export let $$eZ0 = Ju(function (e) {
  let {
    isSelectionBased,
    onClose,
    missingFonts
  } = e;
  let h = "missingFontsModal";
  let g = useDispatch();
  let f = Um();
  let v = useSelector(e => e.fonts);
  let E = _$$U();
  let [S, C] = useState();
  let T = sO();
  let k = cJ();
  let Z = useSelector(e => e.userFlags);
  let ee = useSelector(e => e.selectedView);
  let en = _$$XE(ee);
  _$$h(() => {
    E("missing_fonts_modal_opened", {
      missing_font_families: [...new Set(e.missingFonts.map(e => e.family))]
    });
    C(new Point(window.innerWidth / 2 - eW / 2, bG() + 12));
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
    let [g, f] = useState(n && !l ? vhv.CURRENT_SELECTION : vhv.CURRENT_PAGE);
    let [v, I] = fp(QR);
    useEffect(() => () => {
      I(!1);
      o(_$$F.dequeue({
        matchType: "missing-fonts-load-all-pages"
      }));
    }, [I, o]);
    let [E, x] = useState(null);
    useEffect(() => {
      getFeatureFlags().desktop_font_reload_on_focus_ux && x(null);
    }, [t]);
    useEffect(() => {
      g !== vhv.ALL_PAGES || E || (I(!0), o(_$$F.enqueue({
        type: "missing-fonts-load-all-pages",
        message: _$$t("fullscreen.toolbar.missing_fonts_modal.finding_missing_fonts"),
        error: !1,
        icon: zX.IMAGE_BACKED_SPINNER,
        delay: 1500
      })), _$$q(_em.MISSING_FONTS).then(() => {
        new Promise(e => {
          vXe.fontsAreLoading() ? $$eq2 = e : e();
        }).then(() => {
          let e = t8O.getMissingFontInfoFromAllPages();
          e && e.missingFonts ? x(e) : $D(_$$e.TEXT_AND_VECTOR, Error("Could not get missing fonts from all pages"));
          I(!1);
          o(_$$F.dequeue({
            matchType: "missing-fonts-load-all-pages"
          }));
        });
      }));
    }, [o, E, g, I]);
    let S = g === vhv.ALL_PAGES && E ? E : {
      missingFonts: t,
      counts: i
    };
    useEffect(() => {
      c(pn(e));
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
        l7.user("replace-missing-fonts", () => {
          if (t8O) {
            for (let e in u) {
              let t = u[e];
              t && eK(t.newName) && (t8O.replaceFontsInSelection([{
                replace: t.oldName,
                with: t.newName
              }], g), Y5.commit());
            }
            t8O.resetMissingFonts();
          }
        });
        let e = Object.values(u).map(e => e.oldName.family + ":" + e.newName.family);
        let t = "current_page";
        l && g === vhv.CURRENT_PAGE ? t = "current_selection_fallback" : g === vhv.CURRENT_SELECTION ? t = "current_selection" : g === vhv.ALL_PAGES && (t = "all_pages");
        o(_$$sx({
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
      Y5.selectMissingFontNodes(e, t, g);
    }, [g]);
    let k = useMemo(() => g === vhv.ALL_PAGES ? tx("fullscreen.toolbar.missing_fonts_modal.all_pages") : tx("fullscreen.toolbar.missing_fonts_modal.current_page"), [g]);
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
      $D(_$$e.EDITOR_USABILITY, Error(`Attempted to replace missing font ${JSON.stringify(a)} with family ${t} but was not available`));
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
      let a = h_(r?.family, v);
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
    Lo("missing fonts", "EULA agreed", {
      eula: e,
      fontsReplacedCount: i,
      totalMissingFonts: missingFontsInfoForCurrentScope.missingFonts.length
    });
    setReplacements(t);
  }, [replacements, setReplacements, missingFontsInfoForCurrentScope.missingFonts, v]);
  let eT = useCallback(() => {
    f && f.type === eB ? g(oB()) : g(j7({
      type: eB
    }));
  }, [g, f]);
  let [ek, eF] = useState({});
  let eM = useRef(null);
  let ej = function () {
    let e = _$$f("seen_missing_fonts_org_upsell_banner");
    let t = sZ() ?? null;
    let i = q5()?.team ?? null;
    let n = iZ();
    let r = cJ();
    let a = Rk({
      enabled: !r,
      user: n,
      hasCurrentTeam: !!i,
      hasCurrentOrg: !!t
    });
    let s = Rs(TNJ, {
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
    g(oB());
    g(XE());
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
      } = Ie(s, i, r);
      return eulaFonts.length === s.length && eulaFonts.every(e => qG(e.family, i, n));
    })(missingFontsInfoForCurrentScope, eE, v, Z, en) && (ez(), onClose());
  }, [ez, v, eE, missingFontsInfoForCurrentScope, onClose, Z, en]);
  let e0 = !T && eU.length > 1;
  if (!S) return null;
  let e1 = Object.keys(replacements).filter(e => eK(replacements[e].newName)).length > 0;
  return jsx(fu, {
    name: _$$e2.MISSING_FONTS_MODAL,
    children: jsxs(Ao, {
      initialPosition: S,
      container: eQ,
      containerProps: {
        upsellBannerInfo: ej
      },
      title: jsxs("div", {
        className: _$$s.flex.flexGrow1.ml8.$,
        children: [jsx("span", {
          className: _$$s.textBodyMediumStrong.flexGrow1.$,
          children: tx("fullscreen.toolbar.missing_fonts_modal.missing_font")
        }), jsx("span", {
          className: _$$s.textBodyMediumStrong.pl4.borderBox.$,
          style: sx.add({
            width: `calc(${ef} - 16px)`
          }).$,
          children: tx("fullscreen.toolbar.missing_fonts_modal.replacement")
        })]
      }),
      headerSize: "small",
      onClose,
      onDragStart: ez,
      children: [jsxs("div", {
        style: sx.add({
          width: Kyn
        }).$,
        children: [jsxs("div", {
          className: _$$s.flex.maxH300.flexColumn.overflowAuto.py4.$,
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
          }, e)), eE && missingFontsInfoForCurrentScope.missingFonts.some(e => !e.inSelection) && jsxs(_$$E, {
            className: I()(_$$s.flex.flexGrow1.itemsCenter.textBodyMedium.minH32.px12.colorTextSecondary.$, ey),
            onClick: () => {
              ex(!1);
              setScope(vhv.CURRENT_PAGE);
            },
            children: [jsx(_$$B, {
              svg: _$$A5,
              className: "missing_fonts_modal--overflowDotsIcon--nOli9"
            }), tx("fullscreen.toolbar.missing_fonts_modal.show_other_missing_fonts")]
          })]
        }), k && jsx("div", {
          className: _$$s.mt8.$,
          children: jsx(ec, {})
        })]
      }), jsxs("div", {
        className: _$$s.p12.flex.bt1.bSolid.colorBorder.$$if(e0 || eE, _$$s.justifyBetween, _$$s.justifyEnd).$,
        children: [eE && jsx(_$$S, {
          checked: scope === vhv.CURRENT_PAGE,
          onChange: () => setScope(scope === vhv.CURRENT_PAGE ? vhv.CURRENT_SELECTION : vhv.CURRENT_PAGE),
          label: jsx(_$$J, {
            children: tx("fullscreen.toolbar.missing_fonts_modal.replace_on_the_whole_page")
          })
        }), e0 && !eE && jsxs(Fragment, {
          children: [jsx($n, {
            onClick: eT,
            variant: "secondary",
            ref: eM,
            children: jsxs("div", {
              className: _$$s.inlineFlex.overflowHidden.itemsCenter.$,
              style: {
                marginRight: "-8px"
              },
              children: [currentScopeString, jsx(_$$r, {
                className: _$$s.mr0.$
              })]
            })
          }), jsx(eV, {
            dropdownShown: f,
            dropdownTriggerRef: eM,
            scope,
            setScope: e => {
              g(oB());
              setScope(e);
            }
          })]
        }), jsxs("div", {
          className: _$$s.flex.justifyEnd.$,
          children: [!e1 && jsx($n, {
            variant: "secondary",
            onClick: onClose,
            children: tx("fullscreen.toolbar.missing_fonts_modal.close")
          }), e1 && jsxs($n, {
            recordingKey: Pt(h, "replaceFonts"),
            disabled: !e1 || isReplacing || isLoadingMissingFonts,
            onClick: onApply,
            children: [jsx("span", {
              style: sx.$$if(isReplacing, sx.invisible).$,
              children: tx("fullscreen.toolbar.missing_fonts_modal.replace_fonts")
            }), isReplacing && jsx("span", {
              className: _$$s.absolute.leftHalf.topHalf.$,
              style: sx.add({
                "--color-icon": "var(--btn-color)",
                transform: "translate(-50%, -50%)"
              }).$,
              children: jsx(_$$k, {})
            })]
          })]
        })]
      })]
    })
  });
}, "MISSING_FONTS_MODAL", ZU.YES);
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
  let k = _$$XE(C);
  let R = jb(x.family, d, w) && !_D(x.family, k);
  let N = _$$t("fullscreen.toolbar.missing_fonts_modal.select_items_count_using_this_font", {
    numItems: T()(m.missingFonts.map((e, t) => e.family === x.family ? m.counts?.[t] : 0))
  });
  let O = useMemo(() => jsx("div", {
    className: "missing_fonts_modal--selectWithSameFamilyIcon--BvyA9",
    children: jsx(_$$K, {
      onClick: e => {
        e.stopPropagation();
        b(x?.family, m.missingFonts.filter(e => e.family === x?.family).map(e => e.style));
      },
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": N
      },
      "aria-label": N,
      recordingKey: Pt(t, "selectMissingFontObjects"),
      children: jsx(_$$A, {})
    })
  }), [N, x?.family, m.missingFonts, b, t]);
  let D = useCallback(async () => {
    let e = h_(x.family, d)?.eula;
    (await Cj(x.family, w, d, u, "missing_fonts_modal")) && e && v(e);
  }, [u, x.family, d, v, w]);
  return jsxs("div", {
    className: I()(_$$s.flex.itemsStretch.flexNone.$$if(s, _$$s.flexColumn, _$$s.itemsCenter).py4.px12.$, s ? "" : eb),
    children: [jsxs("div", {
      className: I()(_$$s.flex.flexGrow1.itemsCenter.textBodyMedium.minH32.$, eb),
      children: [jsxs(_$$E, {
        className: I()(_$$s.flex.flexGrow1.itemsCenter.alignLeft.textBodyMedium.minH32.$, ey, "missing_fonts_modal--fontFamilyRowButton--TTmK3"),
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
      className: _$$s.flex.flexColumn.pl16.$,
      children: e.map(e => {
        let r = i[eY(e)];
        let a = _$$t("fullscreen.toolbar.missing_fonts_modal.select_items_count_using_this_font", {
          numItems: m.counts?.[e.index] ?? 1
        });
        return jsxs("div", {
          className: I()(_$$s.flex.flexNone.$, "missing_fonts_modal--fontStyleRow--e8GDG"),
          children: [jsxs("div", {
            className: _$$s.flex.flexGrow1.itemsCenter.justifyBetween.$,
            children: [jsx("div", {
              className: _$$s.flex.itemsCenter.$,
              children: e.style
            }), jsx(_$$B, {
              svg: _$$A4,
              className: I()(e_, _$$s.mr8.$)
            })]
          }), jsxs("div", {
            className: I()("missing_fonts_modal--replacementRight--UxaN-", _$$s.gap8.$),
            children: [jsx("div", {
              style: sx.add({
                width: "224px"
              }).$,
              children: jsx(ay, {
                clearable: !0,
                customPlaceholder: _$$t("fullscreen.toolbar.missing_fonts_modal.select_font"),
                editingStyleGuid: void 0,
                fontFamily: r?.newName.family,
                fontPickerId: `MFM_FONT_PICKER_ID_${e.index}`,
                fonts: d,
                hideTypographyVariableOptions: !0,
                id: `missing-font-modal-font-family-${e.index}`,
                onChange: t => {
                  _(e.index, t, !0);
                },
                recordingKey: Pt(t, `${e.family}-${e.index}`),
                showPlaceholder: !1,
                variant: "button",
                versionsForStyles: A
              })
            }), jsx("div", {
              className: "missing_fonts_modal--fontStyle--5bvih",
              children: jsx(zz, {
                customPlaceholder: _$$t("fullscreen.toolbar.missing_fonts_modal.select_style"),
                enablePreview: !1,
                fontFamily: r?.newName.family,
                fontStyle: r?.newName?.style,
                fonts: d,
                hideTypographyVariableOptions: !0,
                id: `missing-font-style-${e.index}`,
                onChange: t => {
                  y(e.index, t);
                },
                recordingKey: Pt(t, `${e.family}-${e.style}`),
                showMissingIcon: !1,
                versionsForStyles: A
              })
            }), !E && jsx("div", {
              className: "missing_fonts_modal--selectWithSameStyleIcon--mXfcb",
              children: jsx(_$$K, {
                onClick: t => {
                  t.stopPropagation();
                  b(e.family, e.style);
                },
                htmlAttributes: {
                  "data-tooltip-type": Ib.TEXT,
                  "data-tooltip": a
                },
                "aria-label": a,
                recordingKey: Pt(t, "selectMissingFontObjects"),
                children: jsx(_$$A, {})
              })
            })]
          })]
        }, e.index);
      })
    }), !s && jsxs(Fragment, {
      children: [jsx(_$$B, {
        svg: _$$A4,
        className: I()(e_, _$$s.mr8.$)
      }), jsxs("div", {
        className: _$$s.flex.itemsCenter.gap8.minW0.$,
        style: sx.add({
          width: ef
        }).$,
        children: [S.length > 1 ? jsx(IK, {
          onClick: () => l(!s),
          variant: "secondary",
          children: jsx("div", {
            className: _$$s.inlineFlex.overflowHidden.wFull.itemsStart.$,
            children: _$$t("fullscreen.mixed")
          })
        }) : jsxs(Fragment, {
          children: [R && jsxs(Fragment, {
            children: [jsx($n, {
              onClick: D,
              children: _$$t("fullscreen.toolbar.missing_fonts_modal.enable_font")
            }), jsx("span", {
              className: "missing_fonts_modal--orText--5tZjH",
              children: _$$t("fullscreen.toolbar.missing_fonts_modal.or")
            })]
          }), jsx("div", {
            className: _$$s.flexAuto.minW0.$,
            children: jsx(ay, {
              clearable: !0,
              customPlaceholder: R ? _$$t("fullscreen.toolbar.missing_fonts_modal.select_font_replace") : _$$t("fullscreen.toolbar.missing_fonts_modal.select_font"),
              editingStyleGuid: void 0,
              fontFamily: i[eY(x)]?.newName.family,
              fontPickerId: `MFM_FONT_PICKER_ID_${x.index}`,
              fonts: d,
              hideTypographyVariableOptions: !0,
              id: `missing-font-modal-font-family-${x.index}`,
              onChange: e => {
                _(x.index, e, !1, () => l(!0));
              },
              recordingKey: Pt(t, `${x.family}-${x.index}`),
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
  let s = getFeatureFlags().ce_mfm_no_agent_banner && Rt() && !i && !t && !Kk();
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