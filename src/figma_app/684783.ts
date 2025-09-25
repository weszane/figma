import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useCallback, useEffect, useState, useRef, useMemo, PureComponent, createRef, Component } from "react";
import { parsePxInt } from "../figma_app/783094";
import { BrowserInfo } from "../figma_app/778880";
import { isSubscriptionActive } from "../figma_app/808294";
import { sW } from "../figma_app/49598";
import { TrackingProvider, TrackedButton } from "../figma_app/831799";
import { Cn } from "../905/862913";
import { t0 } from "../figma_app/198840";
import { FTemplateCategoryType } from "../figma_app/191312";
import { hasMonetizedResourceMetadata } from "../figma_app/45218";
import { PreviewMode } from "../figma_app/707808";
import { Ho } from "../figma_app/878651";
import { Dy } from "../figma_app/165422";
import { useDispatch, useSelector } from "react-redux";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { Point } from "../905/736624";
import { getCommunityResourcePayment } from "../figma_app/4253";
import { getViewerWidth } from "../figma_app/471982";
import { wB } from "../figma_app/12220";
import { lS } from "../figma_app/242565";
import { U3 } from "../figma_app/412189";
import { UG, _Q, qb, Jr, RL, Hs, fz } from "../figma_app/2590";
import { defaultViewportState } from "../figma_app/298911";
import { VL } from "../figma_app/112055";
import { handleExternalRedirect } from "../905/508367";
import { customHistory } from "../905/612521";
import { noop } from 'lodash-es';
import { IconButton } from "../905/443068";
import { ButtonPrimitive } from "../905/632989";
import { O as _$$O } from "../905/487602";
import { e as _$$e } from "../905/149844";
import { ms, rr, c$, wv } from "../figma_app/236327";
import { p as _$$p } from "../905/991924";
import { S as _$$S } from "../figma_app/420927";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { showDropdownIfNone } from "../figma_app/976345";
import { A as _$$A } from "../5132/237216";
import { UU } from "../figma_app/770088";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { KindEnum } from "../905/129884";
import { e0 } from "../905/696396";
import { j as _$$j } from "../905/834956";
import { H as _$$H } from "../905/404982";
import { v as _$$v } from "../905/293028";
import { m as _$$m } from "../905/80904";
import { O as _$$O2 } from "../905/365108";
import { V as _$$V } from "../905/604512";
import { getFeatureFlags } from "../905/601108";
import { atom } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import { hY } from "../figma_app/349969";
import { useViewer } from "../figma_app/632319";
import { registerTooltip } from "../905/524523";
import { Pz, Ac, GP, IK, Ti, Yu, Xl, Qd } from "../figma_app/292324";
import { A as _$$A2 } from "../6828/154709";
import { A as _$$A3 } from "../svg/64643";
import { A as _$$A4 } from "../svg/242499";
import { perfTimerFrameManagerBindings } from "../figma_app/763686";
import { kiwiCodec } from "../905/5147";
import { getInitialOptions } from "../figma_app/169182";
import { parseQuery } from "../905/634134";
import { Fe } from "../905/284552";
import { XHR } from "../905/910117";
import { xy, hJ } from "../figma_app/102712";
import { LoadTimeTracker } from "../figma_app/781115";
import { colorCSSManipulatorInstance } from "../905/989956";
import { fullscreenValue } from "../figma_app/455680";
import { r as _$$r, Q as _$$Q } from "../figma_app/661568";
import { M as _$$M } from "../905/197794";
import { o as _$$o } from "../figma_app/885533";
import { QtA } from "../figma_app/27776";
import { A as _$$A5 } from "../svg/645509";
import { A as _$$A6 } from "../svg/640328";
import { Zo } from "../figma_app/479760";
var n;
var R = (e => (e.SET_CANVAS_SPACE_CENTER = "SET_CANVAS_SPACE_CENTER", e.SET_CURRENT_PAGE_ID = "SET_CURRENT_PAGE_ID", e.ADJUST_ZOOM = "ADJUST_ZOOM", e.SET_ZOOM = "SET_ZOOM", e.RESET_ZOOM_TO_FIT_CANVAS_CONTENT = "RESET_ZOOM_TO_FIT_CANVAS_CONTENT", e.SET_COMMENT_MODE = "SET_COMMENT_MODE", e.SET_CURSOR_STYLE = "SET_CURSOR_STYLE", e.SET_SCROLL_TO_PAN = "SET_SCROLL_TO_PAN", e))(R || {});
registerTooltip("preload_success", function () {
  return jsxs("div", {
    className: cssBuilderInstance.pr8.$,
    children: [jsx("div", {
      className: cssBuilderInstance.colorTextTooltip.textBodyMediumStrong.$,
      children: getI18nString("proto.preload.loaded.tooltip.header")
    }), jsx("div", {
      className: cssBuilderInstance.colorTextTooltipSecondary.$,
      children: getI18nString("proto.preload.loaded.tooltip.body")
    })]
  });
});
registerTooltip("preload_error", function ({
  isSlides: e
}) {
  return jsxs("div", {
    className: cssBuilderInstance.pr8.$,
    children: [jsx("div", {
      className: cssBuilderInstance.colorTextTooltip.textBodyMediumStrong.$,
      children: e ? getI18nString("proto.preload.error.tooltip.header.slides") : getI18nString("proto.preload.error.tooltip.header")
    }), jsx("div", {
      className: cssBuilderInstance.colorTextTooltipSecondary.$,
      children: getI18nString("proto.preload.error.tooltip.body")
    })]
  });
}, e => ({
  isSlides: "true" === e.getAttribute("data-tooltip-slides")
}));
atom(!1);
atom("none");
atom(null);
var el = (e => (e.NO_INTERNET = "No internet", e.DOWNLOADS_STOPPED = "Downloads stopped", e.DOWNLOADS_INCOMPLETE = "Incomplete downloads", e))(el || {});
let ec = "PROTOTYPE_OPTIONS_MENU";
let eu = "hub_file_viewer--viewerWrapper--UE0XU";
let ep = "hub_file_viewer--verticalPadding---ZD3T";
let e_ = "hub_file_viewer--zoomDropdownKeyboardShortcut--uixb-";
let eh = "hub_file_viewer--embedZoomButton--WbXzY hub_file_viewer--_embedControl--g0n7j hub_file_viewer--_embedControlNoHover--npgKi text--fontPos11--2LvXf text--_fontBase--QdLsd";
let em = "hub_file_viewer--embedZoomButtonActive---nPXZ hub_file_viewer--embedZoomButton--WbXzY hub_file_viewer--_embedControl--g0n7j hub_file_viewer--_embedControlNoHover--npgKi text--fontPos11--2LvXf text--_fontBase--QdLsd";
let eg = "hub_file_viewer--caretContainer--KO0EL";
let ef = "hub_file_viewer--caret--LG-MD";
(e => {
  let t;
  e.BottomRightContainer = function ({
    children: e
  }) {
    return jsx("div", {
      className: "hub_file_viewer--bottomRightPosition--ZVkVG hub_file_viewer--styledEmbedButtonContainers--aydTr",
      children: e
    });
  };
  e.BottomLeftContainer = function ({
    children: e
  }) {
    return jsx("div", {
      className: "hub_file_viewer--bottomLeftPosition--250nh hub_file_viewer--styledEmbedButtonContainers--aydTr",
      children: e
    });
  };
  e.ButtonContainer = forwardRef(function ({
    children: e
  }, t) {
    return jsx("div", {
      ref: t,
      className: "hub_file_viewer--styledEmbedControlContainer--kgVLv hub_file_viewer--_embedControlContainer--NACFL hub_file_viewer--_embedControlContainerAnimated--QrVUJ",
      children: e
    });
  });
  e.Divider = function () {
    return jsx("div", {
      className: "hub_file_viewer--controlsDivider--2jOiv"
    });
  };
  e.FullscreenButton = function ({
    toggleFullscreen: e,
    isFullscreen: t
  }) {
    return jsx("div", {
      className: "hub_file_viewer--fullscreen--DzTCl hub_file_viewer--_embedControl--g0n7j hub_file_viewer--_embedControlNoHover--npgKi text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: jsx(SvgComponent, {
        svg: t ? _$$A4 : _$$A3,
        onClick: e,
        className: "hub_file_viewer--fullscreenIcon--gHWvt",
        title: t ? getI18nString("community.hub_file_viewer.collapse_file_preview") : getI18nString("community.hub_file_viewer.expand_file_preview"),
        ariaLabel: t ? getI18nString("community.hub_file_viewer.collapse_file_preview") : getI18nString("community.hub_file_viewer.expand_file_preview"),
        role: "img",
        dataTestId: "hub-file-viewer-fullscreen-icon"
      })
    });
  };
  e.GetFreePreviewButton = function (e) {
    let t = _$$A(e.hubFile, !0);
    return jsx(TrackingProvider, {
      name: e0.COMMUNITY_HUB_FILE_GET_FREE_PREVIEW_BUTTON,
      children: jsx(TrackedButton, {
        onClick: t,
        dataTestId: "community-get-free-preview-button",
        className: "hub_file_viewer--embedGetFreePreviewButton--sLwDl hub_file_viewer--_embedControl--g0n7j hub_file_viewer--_embedControlNoHover--npgKi text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: renderI18nText("community.buyer.get_free_preview")
      })
    });
  };
  let r = "HUB_FILE_EMBED_PAGES_BUTTON_DROPDOWN_TYPE";
  function n(e, t, r, n) {
    let i = useCallback(r => n => {
      n?.stopPropagation();
      trackEventAnalytics("Hub File Viewer Zoom In", {
        hubFileId: e,
        source: r
      });
      t(2, UG);
    }, [e, t]);
    return {
      adjustZoomInFactory: i,
      adjustZoomOutFactory: useCallback(r => n => {
        n?.stopPropagation();
        trackEventAnalytics("Hub File Viewer Zoom Out", {
          hubFileId: e,
          source: r
        });
        t(.5, UG);
      }, [e, t]),
      setZoomFactory: useCallback((t, n) => i => {
        i?.stopPropagation();
        trackEventAnalytics("Hub File Viewer Set Zoom", {
          hubFileId: e,
          scale: t,
          source: n
        });
        r(t, UG);
      }, [e, r]),
      resetZoomToFitCanvasContentFactory: useCallback(t => r => {
        r?.stopPropagation();
        trackEventAnalytics("Hub File Viewer Zoom To Fit", {
          hubFileId: e,
          source: t
        });
        n();
      }, [e, n])
    };
  }
  e.PagesButton = function (e) {
    let t = useDispatch();
    let n = useSelector(e => e.dropdownShown);
    let s = n?.type === r;
    let o = e.pages && e.pages.length > 1;
    if (useEffect(() => {
      o && setTimeout(() => {
        t(showDropdownIfNone({
          type: r
        }));
      }, 1e3);
    }, []), !o) return null;
    let l = e.pages.find(t => t.id === e.currentPageId);
    let d = l?.name || e.pages[0]?.name;
    let c = d ? jsx(Fragment, {
      children: renderI18nText("community.hub_file_viewer.page_name", {
        pageHeader: jsx("span", {
          className: "hub_file_viewer--dropdownPagePrefix--iDLhr",
          children: getI18nString("community.hub_file_viewer.page")
        }),
        pageName: d
      })
    }) : getI18nString("community.hub_file_viewer.pages");
    return jsxs("div", {
      className: s ? "hub_file_viewer--embedPagesButtonActive--BGGfi hub_file_viewer--embedPagesButton--WkwkA hub_file_viewer--_embedControl--g0n7j hub_file_viewer--_embedControlNoHover--npgKi text--fontPos11--2LvXf text--_fontBase--QdLsd" : "hub_file_viewer--embedPagesButton--WkwkA hub_file_viewer--_embedControl--g0n7j hub_file_viewer--_embedControlNoHover--npgKi text--fontPos11--2LvXf text--_fontBase--QdLsd",
      role: "button",
      tabIndex: 0,
      onClick: e => {
        if (e.stopPropagation(), s) {
          t(hideDropdownAction());
          return;
        }
        t(showDropdownThunk({
          type: r
        }));
      },
      onMouseDown: e => e.stopPropagation(),
      children: [jsx("div", {
        className: "hub_file_viewer--dropdownLabel--6dEeC ellipsis--ellipsis--Tjyfa",
        children: c
      }), jsx("div", {
        className: eg,
        children: jsx(SvgComponent, {
          svg: _$$A2,
          className: ef,
          title: getI18nString("community.hub_file_viewer.view_file_pages"),
          ariaLabel: getI18nString("community.hub_file_viewer.view_file_pages"),
          role: "img"
        })
      })]
    });
  };
  e.PagesDropdown = function (e) {
    let t = useDispatch();
    let n = useSelector(e => e.dropdownShown?.type === r);
    let a = {
      maxHeight: `${e.viewerHeight - 120}px`
    };
    let s = r => {
      r && (e.setCurrentPageId(r), t(UU()), trackEventAnalytics("Hub File Viewer Change Page", {
        hubFileId: e.hubFile.id,
        pageId: r
      }));
    };
    return n ? jsx(ms, {
      className: "hub_file_viewer--dropdownPages--2AxvQ hub_file_viewer--_dropdownElement--jYk1H hub_file_viewer--_embedControlContainer--NACFL hub_file_viewer--_embedControlContainerAnimated--QrVUJ ellipsis--ellipsis--Tjyfa",
      style: a,
      recordingKey: "hub_file_embed_pages_dropdown",
      children: e.pages.map(t => jsx(rr, {
        checked: e.currentPageId === t.id,
        onClick: e => {
          e.stopPropagation();
          s(t.id);
        },
        children: jsx("div", {
          className: "hub_file_viewer--dropdownOption--hbwuI ellipsis--ellipsis--Tjyfa",
          children: t.name
        })
      }, t.id))
    }) : null;
  };
  e.HubFileZoomButton = function (t) {
    let r = useDispatch();
    let a = useSelector(e => e.dropdownShown?.type === s);
    let {
      adjustZoomInFactory,
      adjustZoomOutFactory
    } = n(t.hubFile.id, t.adjustZoom, t.setZoom, t.resetZoomToFitCanvasContent);
    let d = Math.round(100 * t.currentZoomScale);
    let c = d.toString().length;
    return jsxs(Fragment, {
      children: [jsx(IconButton, {
        "aria-label": getI18nString("fullscreen_actions.zoom-out"),
        onClick: adjustZoomOutFactory("clickFromViewerButtons"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("fullscreen_actions.zoom-out")
        },
        children: jsx(_$$O, {})
      }), jsx(e.Divider, {}), jsxs("div", {
        className: a ? em : eh,
        style: {
          width: c < 3 ? "66px" : "82px"
        },
        role: "button",
        tabIndex: 0,
        onClick: e => {
          if (e.stopPropagation(), a) {
            r(hideDropdownAction());
            return;
          }
          r(showDropdownThunk({
            type: s
          }));
        },
        children: [renderI18nText("community.hub_file_viewer.zoom_percent", {
          zoomPercent: d
        }), jsx("div", {
          className: eg,
          children: jsx(SvgComponent, {
            svg: _$$A2,
            className: ef,
            title: getI18nString("community.hub_file_viewer.select_zoom_level"),
            ariaLabel: getI18nString("community.hub_file_viewer.select_zoom_level"),
            role: "img"
          })
        })]
      }), jsx(e.Divider, {}), jsx(IconButton, {
        "aria-label": getI18nString("fullscreen_actions.zoom-in"),
        onClick: adjustZoomInFactory("clickFromViewerButtons"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("fullscreen_actions.zoom-in")
        },
        children: jsx(_$$e, {})
      })]
    });
  };
  let s = "HUB_FILE_EMBED_ZOOM_BUTTON_DROPDOWN";
  (e => {
    e.clickFromDropdown = "clickFromDropdown";
    e.clickFromViewerButtons = "clickFromViewerButtons";
    e.keyboardShortcut = "keyboardShortcut";
    e.userInput = "userInput";
  })(t || (t = {}));
  e.HubFileZoomButtonDropdown = function ({
    hubFile: e,
    currentZoomScale: t,
    adjustZoom: r,
    setZoom: o,
    resetZoomToFitCanvasContent: l
  }) {
    let d = useDispatch();
    let {
      adjustZoomInFactory,
      adjustZoomOutFactory,
      setZoomFactory,
      resetZoomToFitCanvasContentFactory
    } = n(e.id, r, o, l);
    let h = useCallback(e => {
      document.activeElement instanceof HTMLInputElement || ("+" === e.key ? adjustZoomInFactory("keyboardShortcut")() : "-" === e.key ? adjustZoomOutFactory("keyboardShortcut")() : "0" === e.key ? setZoomFactory(1, "keyboardShortcut")() : "1" === e.key && resetZoomToFitCanvasContentFactory("keyboardShortcut")());
    }, [adjustZoomInFactory, adjustZoomOutFactory, resetZoomToFitCanvasContentFactory, setZoomFactory]);
    if (U3("keydown", h), !useSelector(e => e.dropdownShown?.type === s)) return null;
    let m = t => {
      t.endsWith("%") && (t = t.substr(0, t.length - 1));
      let r = -1;
      try {
        r = parseInt(t, 10);
      } catch (e) {}
      r > 0 && (trackEventAnalytics("Hub File Viewer User Input Zoom Set", {
        hubFileId: e.id,
        source: "userInput",
        scale: r / 100
      }), o(r / 100, UG));
    };
    return jsxs(ms, {
      className: "hub_file_viewer--dropdownZoom--Beepj hub_file_viewer--dropdownPrototypeZoom--5Lfor hub_file_viewer--_dropdownElement--jYk1H hub_file_viewer--_embedControlContainer--NACFL hub_file_viewer--_embedControlContainerAnimated--QrVUJ ellipsis--ellipsis--Tjyfa",
      recordingKey: "hub_file_embed_zoom_dropdown",
      children: [jsx(c$, {
        className: "hub_file_viewer--zoomInputContainer--1az4W",
        children: jsx(_$$p, {
          className: "hub_file_viewer--zoomInput--NzhHp",
          placeholderValue: `${Math.round(100 * t)}%`,
          submit: e => {
            m(e);
            d(hideDropdownAction());
          },
          cancel: noop
        })
      }), jsx(wv, {}), jsxs(c$, {
        onClick: adjustZoomInFactory("clickFromDropdown"),
        children: [renderI18nText("community.hub_file_viewer.zoom_in"), jsx(_$$S, {
          shortcut: "+",
          className: e_
        })]
      }), jsxs(c$, {
        onClick: adjustZoomOutFactory("clickFromDropdown"),
        children: [renderI18nText("community.hub_file_viewer.zoom_out"), jsx(_$$S, {
          shortcut: "-",
          className: e_
        })]
      }), jsxs(c$, {
        onClick: resetZoomToFitCanvasContentFactory("clickFromDropdown"),
        children: [renderI18nText("community.hub_file_viewer.zoom_to_fit"), jsx(_$$S, {
          shortcut: "1",
          className: e_
        })]
      }), jsx(c$, {
        onClick: setZoomFactory(.5, "clickFromDropdown"),
        children: renderI18nText("community.hub_file_viewer.zoom_to", {
          percent: "50%"
        })
      }), jsxs(c$, {
        onClick: setZoomFactory(1, "clickFromDropdown"),
        children: [renderI18nText("community.hub_file_viewer.zoom_to", {
          percent: "100%"
        }), jsx(_$$S, {
          shortcut: "0",
          className: e_
        })]
      }), jsx(c$, {
        onClick: setZoomFactory(2, "clickFromDropdown"),
        children: renderI18nText("community.hub_file_viewer.zoom_to", {
          percent: "200%"
        })
      })]
    });
  };
  e.PrototypeZoomButton = function (e) {
    let t = useDispatch();
    let r = useSelector(e => e.dropdownShown?.type === ec);
    let n = 1;
    e.viewer && (n = e.getCurrentZoomScale());
    return jsx(ButtonPrimitive, {
      className: cssBuilderInstance.bgTransparent.h100.$,
      onClick: e => {
        if (e.stopPropagation(), r) {
          t(hideDropdownAction());
          return;
        }
        t(showDropdownThunk({
          type: ec
        }));
      },
      children: jsxs("div", {
        className: r ? em : eh,
        children: [renderI18nText("community.hub_file_viewer.zoom_percent", {
          zoomPercent: Math.round(100 * n)
        }), jsx("div", {
          className: eg,
          children: jsx(SvgComponent, {
            svg: _$$A2,
            className: ef,
            title: getI18nString("community.hub_file_viewer.select_zoom_level"),
            ariaLabel: getI18nString("community.hub_file_viewer.select_zoom_level"),
            role: "img"
          })
        })]
      })
    });
  };
  e.PrototypeZoomDropdown = function (e) {
    let t = useDispatch();
    let r = useSelector(e => e.dropdownShown?.type === ec);
    let n = e.viewer.getPrototypeDeviceType();
    let s = _Q(n);
    let [o, l] = useState(() => e.initialScalingMode ?? {
      viewportScalingMode: qb(s),
      contentScalingMode: "fixed"
    });
    let d = useCallback(t => {
      let r = {
        ...o,
        ...t.scalingInfo
      };
      l(r);
      e.viewer?.setScalingMode(r);
    }, [e.viewer, o]);
    let c = useCallback(e => {
      if ("z" === e.key || "Z" === e.key) {
        if (document.activeElement instanceof HTMLInputElement) return;
        let r = Pz(n);
        let i = Ac(o, r);
        let a = r.findIndex(e => e.scalingOptionId === i);
        -1 === a ? a = e.shiftKey ? r.length - 1 : 0 : e.shiftKey ? 0 === a ? a = r.length - 1 : a-- : a === r.length - 1 ? a = 0 : a++;
        let s = r[a];
        d(s);
        t(VisualBellActions.clearAll());
        t(VisualBellActions.enqueue({
          message: getI18nString("community.hub_file_viewer.zoom", {
            percent: GP(s.scalingOptionId)
          })
        }));
      }
    }, [t, n, o, d]);
    return (U3("keydown", c), r) ? jsx(_$$j, {
      showPoint: !1,
      dispatch: t,
      onSelectItem: e => e.callback?.(),
      parentRect: e.targetRect,
      items: function (e, t, r, n, a, s, o) {
        let l = Pz(a, r);
        let d = Ac(t, l);
        let c = (l.findIndex(e => e.scalingOptionId === d) + 1) % l.length;
        let u = l[c];
        let p = r => function ({
          option: e,
          currentScalingInfo: t,
          scalingHandlerOverride: r,
          recordingKey: n,
          showShortcut: a,
          dispatch: s,
          isFooter: o
        }) {
          let l = Ac(t, [e]);
          return {
            displayText: GP(e.scalingOptionId, o),
            isChecked: l === e.scalingOptionId,
            callback: () => r ? r(e) : void s(Jr({
              ...e.scalingInfo,
              userInitiated: !0,
              source: "presentation"
            })),
            recordingKey: n,
            shortcut: a ? "Z" : void 0,
            icon: o ? void 0 : function (e) {
              switch (e) {
                case IK.FIT_TO_SCREEN:
                  return jsx(_$$H, {});
                case IK.FIT_WIDTH:
                  return jsx(_$$v, {});
                case IK.FILL_SCREEN:
                  return jsx(_$$m, {});
                case IK.ACTUAL_SIZE:
                  return jsx(_$$O2, {});
                case IK.RESPONSIVE:
                  return jsx(_$$V, {});
                default:
                  return;
              }
            }(e.scalingOptionId),
            unsetStrokeOnActiveOption: !0,
            name: e.scalingOptionId
          };
        }({
          dispatch: e,
          option: r,
          showShortcut: r.scalingOptionId === u.scalingOptionId,
          currentScalingInfo: t,
          scalingHandlerOverride: s,
          recordingKey: generateRecordingKey({
            recordingKey: n
          }, `option-${Ti(r.scalingOptionId)}`),
          isFooter: void 0
        });
        if (!(r !== Yu.DEFAULT && l.length >= 4)) return l.map(e => p(e));
        {
          let e = l.slice(0, 2).map(e => p(e));
          let t = l.slice(2).map(e => p(e));
          return [{
            disabled: !0,
            displayText: getI18nString("viewer.options_menu.recommended_scaling_options")
          }, ...e, {
            disabled: !0,
            displayText: getI18nString("viewer.options_menu.other_scaling_options")
          }, ...t];
        }
      }(t, o, Yu.DEFAULT, void 0, n, d),
      className: "hub_file_viewer--dropdownPrototypeZoom--5Lfor hub_file_viewer--_dropdownElement--jYk1H hub_file_viewer--_embedControlContainer--NACFL hub_file_viewer--_embedControlContainerAnimated--QrVUJ ellipsis--ellipsis--Tjyfa"
    }) : null;
  };
})(n || (n = {}));
let eT = e => {
  let t = useCallback((t, r = UG) => {
    e?.port1.postMessage({
      type: R.ADJUST_ZOOM,
      params: {
        scale: t,
        animationDuration: r
      }
    });
  }, [e]);
  let r = useCallback((t, r = UG) => {
    e?.port1.postMessage({
      type: R.SET_ZOOM,
      params: {
        scale: t,
        animationDuration: r
      }
    });
  }, [e]);
  return {
    adjustZoom: t,
    setZoom: r,
    setCurrentPageId: useCallback(t => {
      e?.port1.postMessage({
        type: R.SET_CURRENT_PAGE_ID,
        params: {
          currentPageId: t
        }
      });
    }, [e]),
    setCanvasSpaceCenter: useCallback((t, r = UG) => {
      e?.port1.postMessage({
        type: R.SET_CANVAS_SPACE_CENTER,
        params: {
          location: t,
          animationDuration: r
        }
      });
    }, [e]),
    resetZoomToFitCanvasContent: useCallback(() => {
      e?.port1.postMessage({
        type: R.RESET_ZOOM_TO_FIT_CANVAS_CONTENT
      });
    }, [e])
  };
};
let eI = e => {
  let [t, r] = useState(1);
  useEffect(() => {
    if (!e) return;
    let t = e => {
      e.data.viewerState?.viewport?.zoomScale && r(e.data.viewerState.viewport.zoomScale);
    };
    e.port1.addEventListener("message", t);
    e.port1.start();
    return () => e.port1.removeEventListener("message", t);
  }, [e]);
  return t;
};
let eS = (e, t) => {
  let r = useRef(defaultViewportState);
  let [n, i] = useState([]);
  let [s, o] = useState(VL);
  useEffect(() => {
    if (!t) return;
    let a = t => {
      t.viewport && (r.current = function (e, t) {
        let r = t.current?.getBoundingClientRect();
        return r ? {
          x: 0,
          y: 0,
          width: r.width,
          height: r.height,
          offsetX: e.offset.x,
          offsetY: e.offset.y,
          zoomScale: e.zoomScale,
          isPanning: !1,
          isZooming: !1
        } : defaultViewportState;
      }(t.viewport, e));
      t.pages && (0 === n.length && t.pages[0]?.id && o(t.pages[0].id), i(t.pages));
      t.currentPageId && o(t.currentPageId);
    };
    let s = e => {
      e.data.viewerState && a(e.data.viewerState);
    };
    t.port1.addEventListener("message", s);
    t.port1.start();
    return () => t.port1.removeEventListener("message", s);
  }, [e, t, n.length]);
  return useMemo(() => ({
    getViewportInfo: () => r.current,
    pages: n,
    currentPageId: s
  }), [n, s]);
};
let ev = (e, t) => {
  let {
    onMouseUp,
    onMouseDown,
    onMouseMove,
    onKeydown
  } = t;
  let o = useCallback(e => {
    if (e.data.canvasInteraction) {
      let t = e.data.canvasInteraction.type;
      let a = e.data.canvasInteraction.pt;
      "canvasMouseDown" === t ? onMouseDown(a) : "canvasMouseUp" === t ? onMouseUp(a) : ("canvasMouseDrag" === t || "canvasMouseMove" === t) && onMouseMove(a);
    } else e.data.keydown && onKeydown(e.data.keydown.key);
  }, [onMouseDown, onMouseMove, onMouseUp, onKeydown]);
  useEffect(() => (e?.port1.addEventListener("message", o), e?.port1.start(), () => e?.port1.removeEventListener("message", o)), [o, e?.port1]);
};
let eA = e => {
  let [t, r] = useState("auto");
  useEffect(() => {
    e && e.port1.postMessage({
      type: R.SET_CURSOR_STYLE,
      params: {
        cursorStyle: t
      }
    });
  }, [t, e]);
  return r;
};
function ex(e) {
  let {
    hubFile,
    onLoad,
    isFullscreen,
    showFullscreenComments,
    fixedSize
  } = e;
  let c = useDispatch();
  let [u, p] = useState(!1);
  let [g, f] = useState(!1);
  let x = useRef(null);
  let N = useRef(null);
  let {
    adjustZoom,
    setZoom,
    setCurrentPageId,
    setCanvasSpaceCenter,
    resetZoomToFitCanvasContent
  } = eT(N.current);
  let D = e.showFullscreenComments && e.isFullscreen;
  let {
    getViewportInfo,
    pages,
    currentPageId
  } = eS(x, N.current);
  useEffect(() => {
    N.current?.port1.postMessage({
      type: R.SET_COMMENT_MODE,
      params: {
        showFullscreenComments
      }
    });
  }, [showFullscreenComments]);
  let j = useCallback(() => {
    g || (N.current = new MessageChannel(), x.current?.contentWindow?.postMessage({
      type: "TRANSFER_MESSAGE_PORT"
    }, "*", [N.current.port2]), f(!0));
  }, [g, x]);
  let U = useCallback(e => {
    N.current?.port1.postMessage({
      type: R.SET_SCROLL_TO_PAN,
      params: {
        scrollToPan: e
      }
    });
  }, []);
  useEffect(() => {
    U(isFullscreen);
  }, [isFullscreen, U]);
  useEffect(() => {
    let e = e => {
      "LOAD_FINISHED" === e.data && (j(), U(!!isFullscreen), p(!0), onLoad?.());
    };
    window.addEventListener("message", e);
    return () => window.removeEventListener("message", e);
  }, [currentPageId, isFullscreen, setCanvasSpaceCenter, setCurrentPageId, U, getViewportInfo, onLoad, j]);
  let B = useCallback(t => {
    let r;
    t?.stopPropagation();
    trackEventAnalytics("Hub File Viewer Toggle Fullscreen", {
      hubFileId: e.hubFile.id,
      source: "click"
    });
    r = e.isFullscreen ? PreviewMode.DEFAULT : PreviewMode.FULLSCREEN;
    c(sW(r));
  }, [c, e.hubFile, e.isFullscreen]);
  let G = useRef(null);
  let V = useCallback(e => {
    G.current = e;
    D && lS.handleMouseDown(e.x, e.y);
  }, [D]);
  let H = eA(N.current);
  let z = useCallback(t => {
    D ? lS.handleMouseUp(t.x, t.y) : (!e.disableClickToExpand || !e.disableFullscreen) && G.current && Point.distance(t, G.current) < wB && !isFullscreen && B();
    G.current = null;
  }, [D, isFullscreen, B, e.disableClickToExpand, e.disableFullscreen]);
  let W = useCallback(e => {
    D && lS.handleMouseMove(e.x, e.y);
  }, [D]);
  let K = useCallback(e => {
    "Escape" === e && c(sW(PreviewMode.DEFAULT));
  }, [c]);
  let Y = useCallback(e => {
    K(e.key);
  }, [K]);
  ev(N.current, {
    onMouseUp: z,
    onMouseDown: V,
    onMouseMove: W,
    onKeydown: K
  });
  U3("keydown", Y);
  let $ = hubFile.viewer_mode === FTemplateCategoryType.PROTOTYPE;
  useEffect(() => {
    $ || H("grab");
  }, [$, H]);
  let X = $ ? `/community/file/${hubFile.id}/embed` : `/embed?embed_host=hub_file_detail_view&community_viewer=true&hub_file_id=${hubFile.id}&hide_ui=true`;
  let q = hasMonetizedResourceMetadata(hubFile);
  let J = getCommunityResourcePayment(hubFile);
  let Z = isSubscriptionActive(J);
  return jsxs("div", {
    className: "hub_file_viewer--iframeViewerAndSidebarContainer--8cmiH",
    children: [jsxs("div", {
      className: eu,
      children: [!$ && u && jsx(eN, {
        adjustZoom,
        commentsIsActive: showFullscreenComments,
        currentPageId,
        disableComments: e.disableComments,
        disableFullscreen: e.disableFullscreen,
        getViewportInfo,
        hubFile,
        iframeRef: x,
        isFreemiumPreview: q && !Z,
        isFullscreen,
        messageChannel: N.current,
        pages,
        resetZoomToFitCanvasContent,
        setCanvasSpaceCenter,
        setCurrentPageId,
        setZoom,
        toggleFullscreen: B
      }), jsx("iframe", {
        title: "Hub file iframe viewer",
        height: "100%",
        width: fixedSize ? "100%" : getViewerWidth(u),
        src: X,
        allowFullScreen: !0,
        ref: x
      })]
    }), jsx("div", {
      className: e.isFullscreen && e.showFullscreenComments ? "hub_file_viewer--commentsSidebarContainer--v3j6y" : "hub_file_viewer--commentsSidebarContainerHidden--enDq2 hub_file_viewer--commentsSidebarContainer--v3j6y"
    })]
  });
}
function eN(e) {
  let t = eI(e.messageChannel);
  return jsxs(Fragment, {
    children: [e.isFreemiumPreview ? jsx(n.BottomLeftContainer, {
      children: jsx(n.ButtonContainer, {
        children: jsx(n.GetFreePreviewButton, {
          hubFile: e.hubFile
        })
      })
    }) : jsxs(Fragment, {
      children: [jsx(n.PagesDropdown, {
        viewerHeight: e.getViewportInfo().height,
        pages: e.pages,
        hubFile: e.hubFile,
        currentPageId: e.currentPageId,
        setCurrentPageId: e.setCurrentPageId
      }), "whiteboard" !== e.hubFile.viewer_mode && e.pages.length > 1 && jsx(n.BottomLeftContainer, {
        children: jsx(n.ButtonContainer, {
          children: jsx(n.PagesButton, {
            pages: e.pages,
            currentPageId: e.currentPageId
          })
        })
      })]
    }), jsx(n.HubFileZoomButtonDropdown, {
      hubFile: e.hubFile,
      currentZoomScale: t,
      adjustZoom: e.adjustZoom,
      setZoom: e.setZoom,
      resetZoomToFitCanvasContent: e.resetZoomToFitCanvasContent
    }), jsxs(n.BottomRightContainer, {
      children: [jsx(n.ButtonContainer, {
        children: jsx(n.HubFileZoomButton, {
          hubFile: e.hubFile,
          adjustZoom: e.adjustZoom,
          setZoom: e.setZoom,
          resetZoomToFitCanvasContent: e.resetZoomToFitCanvasContent,
          currentZoomScale: t
        })
      }), !e.disableFullscreen && jsx(n.ButtonContainer, {
        children: jsx(n.FullscreenButton, {
          isFullscreen: e.isFullscreen,
          toggleFullscreen: e.toggleFullscreen
        })
      })]
    })]
  });
}
let ez = e => e ? {
  backgroundColor: colorCSSManipulatorInstance.format(e)
} : {};
function eW(e) {
  let t = useRef(new LoadTimeTracker()).current;
  let [r, n] = useState(null);
  let s = useViewer("PROTOTYPE", r, {
    workerURL: Fig.tsViewerWorkerURL,
    scrollToPan: e.isFullscreen,
    featureFlags: getFeatureFlags(),
    trackingSessionId: getInitialOptions().tracking_session_id || null,
    bowser: BrowserInfo,
    forceMobileOptimizations: null != parseQuery(customHistory.location.search)["mobile-optimizations"],
    deviceInfoByIdentifier: hY,
    trackAnalyticsEvent: trackEventAnalytics,
    definedAnalyticsHandler: analyticsEventManager,
    appTimerStart: e => {
      "rendererDraw" === e && t.handleDocumentRenderStart();
    },
    appTimerStop: e => {
      "rendererDraw" === e && t.handleDocumentRenderStop();
    },
    nextFrame: e => {
      perfTimerFrameManagerBindings?.nextFrame(e);
    },
    startProfile: (e, t) => perfTimerFrameManagerBindings?.startProfile(e, t) ?? !1,
    stopProfile(e, t) {
      perfTimerFrameManagerBindings?.stopProfile(e, t);
    },
    kiwiSchema: kiwiCodec
  }, !0);
  useEffect(() => {
    s && s.setShowHotspots(!0);
  }, [s]);
  let {
    currFrameIndex,
    numFrames,
    shouldShowFrameCounter,
    navigateBackwardEnabled,
    navigateForwardEnabled
  } = Xl(s);
  let {
    navigateForward,
    navigateBackward,
    restartPrototype
  } = Qd(s, null);
  return jsx(eK, {
    currFrameIndex,
    navigateBackwardEnabled,
    navigateForwardEnabled,
    numFrames,
    restartPrototype,
    setViewerElement: n,
    shouldShowFrameCounter,
    showNextFrame: navigateForward,
    showPreviousFrame: navigateBackward,
    viewer: s,
    viewerElement: r,
    viewerLoadTimeTracker: t,
    ...e
  });
}
class eK extends PureComponent {
  constructor(e) {
    super(e);
    this.hubViewerRef = createRef();
    this.fullscreenWidth = () => window.innerWidth - 2 * parsePxInt(QtA);
    this.zoomForFullscreenState = e => {
      let t = this.props.minimizedWidth ? this.fullscreenWidth() / this.props.minimizedWidth : Math.min(window.innerWidth / screen.width, window.innerHeight / screen.height);
      return e ? t : 1 / t;
    };
    this.handlePageChange = e => {
      this.setState({
        pages: e
      });
    };
    this.getCanvas = () => {
      if (this.props.viewerElement) {
        let e = this.props.viewerElement.getElementsByTagName("canvas");
        return 1 === e.length ? e[0] : null;
      }
      return null;
    };
    this._canvasRectToViewportInfo = (e, t) => ({
      x: 0 - (t?.x || 0),
      y: 0 - (t?.y || 0),
      width: e.width,
      height: e.height,
      offsetX: this.lastViewport && -this.lastViewport.offset.x,
      offsetY: this.lastViewport && -this.lastViewport.offset.y,
      zoomScale: this.lastViewport && this.lastViewport.zoomScale,
      isPanning: !1,
      isZooming: !1
    });
    this.getViewport = () => {
      let e = this.getCanvas();
      if (!e) return this._canvasRectToViewportInfo({
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
      let t = e.getBoundingClientRect();
      return this._canvasRectToViewportInfo(t, {
        x: -6,
        y: -6
      });
    };
    this.updateViewportInfoIfNecessary = () => {
      if (!this.lastViewport) return;
      let e = this.getViewport();
      fullscreenValue.viewport.trigger("onSetViewport", e);
    };
    this.handleViewportChange = e => {
      this.setState({
        zoomScale: e.zoomScale
      });
      this.lastViewport = e;
      this.updateViewportInfoIfNecessary();
    };
    this.handleDocumentIsLoaded = () => {
      this.props.viewerLoadTimeTracker.handleDocumentIsLoaded();
    };
    this.handleSceneDidCompleteInitialLoad = () => {
      if (!this.props.viewer) return;
      _$$r.logValue("viewerSceneDidCompleteInitialLoad", Math.round(performance.now()));
      this.props.viewerLoadTimeTracker.handleViewerLoaded();
      let e = parseQuery(customHistory.location.search)["node-id"];
      this.props.viewer.navigateToFrameAndCloseOverlays(e);
      let t = this.props.viewer.getPrototypeBackgroundColor();
      this.setBackgroundColor(t || _$$o);
      this.props.viewer.on("backgroundColorChange", this.setBackgroundColor);
      this.props.viewer.on("prototypeBackgroundColorChange", this.setBackgroundColor);
      let r = this.props.viewer.getPages();
      this.setState({
        pages: r
      });
      this.viewerLoadedTimeout = setTimeout(() => {
        this.props.onLoad && this.props.onLoad();
        this.setState({
          isLoaded: !0
        });
      }, 200);
      this.contextViewEventTimeout = setTimeout(() => {
        trackEventAnalytics("Context Viewed", {
          name: "hub-file-canvas-loaded"
        });
      }, 300);
    };
    this.bindEventsToViewer = e => {
      parseQuery(customHistory.location.search);
      this.setState({
        zoomBounds: e.getZoomBounds()
      });
      e.on("pagesChange", this.handlePageChange);
      e.on("viewportChanged", this.handleViewportChange);
      e.on("sceneDidCompleteInitialLoad", this.handleSceneDidCompleteInitialLoad);
      e.on("documentIsLoaded", this.handleDocumentIsLoaded);
      e.on("canvasResize", this.updateViewportInfoIfNecessary);
      e.on("urlClicked", handleExternalRedirect);
      e.on("loadVideoJsLib", async () => {
        await Fe().then(t => {
          e && e.injectVideoJsLib(t);
        });
      });
    };
    this.unbindEventsToViewer = () => {
      let e = this.props.viewer;
      e && (e.off("pagesChange", this.handlePageChange), e.off("viewportChanged", this.handleViewportChange), e.off("sceneDidCompleteInitialLoad", this.handleSceneDidCompleteInitialLoad), e.off("documentIsLoaded", this.handleDocumentIsLoaded), e.off("backgroundColorChange", this.setBackgroundColor), e.off("prototypeBackgroundColorChange", this.setBackgroundColor), e.off("canvasResize", this.updateViewportInfoIfNecessary), e.off("urlClicked", handleExternalRedirect), e.reset());
    };
    this.setBackgroundColor = e => {
      e && this.setState({
        backgroundColor: e
      });
    };
    this.handleKeyDown = e => {
      (this.state.isFocused || this.props.isFullscreen) && (RL(e) ? this.showPreviousFrame() : Hs(e) ? this.showNextFrame() : fz(e) && this.restartPrototype());
    };
    this.showNextFrame = () => {
      trackEventAnalytics("Hub File Viewer Show Next Frame", {
        hubFileId: this.props.hubFile.id,
        currentFrameIndex: this.props.currFrameIndex,
        source: "click"
      });
      this.props.showNextFrame();
    };
    this.showPreviousFrame = () => {
      trackEventAnalytics("Hub File Viewer Show Previous Frame", {
        hubFileId: this.props.hubFile.id,
        currentFrameIndex: this.props.currFrameIndex,
        source: "click"
      });
      this.props.showPreviousFrame();
    };
    this.restartPrototype = () => {
      trackEventAnalytics("Hub File Viewer Restart Prototype", {
        hubFileId: this.props.hubFile.id,
        currentFrameIndex: this.props.currFrameIndex,
        source: "click"
      });
      this.props.restartPrototype();
    };
    this.handleClick = e => {
      e.stopPropagation();
      this.setState({
        isFocused: !0
      });
    };
    this.handleExternalClick = e => {
      this.hubViewerRef && this.hubViewerRef.current && !this.hubViewerRef.current.contains(e.target) && this.setState({
        isFocused: !1
      });
    };
    this.getCurrentZoomScale = () => this.props.viewer?.viewport().zoomScale || 1;
    let t = getInitialOptions();
    this.state = {
      backgroundColor: t.background_color || null,
      fileName: t.name,
      zoomBounds: null,
      zoomScale: null,
      scalingMode: null,
      isFocused: !1,
      isLoaded: !1,
      pages: []
    };
    this.prototypeZoomButtonContainerRef = createRef();
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("click", this.handleExternalClick);
  }
  componentDidUpdate(e) {
    if (this.props.viewer && !e.viewer) {
      let e = this.props.viewer;
      try {
        XHR.crossOriginGetAny(this.props.hubFile.redirect_canvas_url, null, {
          responseType: "arraybuffer"
        }).then(({
          data: t
        }) => {
          this.bindEventsToViewer(e);
          _$$Q.setLoadTimeTracker(this.props.viewerLoadTimeTracker);
          e.loadFile({
            bytes: t,
            nodeId: "",
            startingPointNodeId: "",
            renderDots: "whiteboard" === this.props.hubFile.viewer_mode,
            imagePrefixURL: `/community/file/${this.props.hubFile.id}/image`,
            videoPrefixURL: `/api/community/files/${this.props.hubFile.id}/videos`,
            editorType: "DESIGN"
          }, _$$M);
          this.props.viewerLoadTimeTracker.handleAfterConnectTo({
            entry: "InAppCommunity",
            connectionType: "file",
            fullscreen: "Fullview-IC",
            logViewerWaiting: !1
          });
          let r = this.props.hubFile.scaling_mode;
          if (!r) {
            let t = e.getPrototypeDeviceType();
            let n = _Q(t);
            r = qb(n);
          }
          let n = {
            viewportScalingMode: r,
            contentScalingMode: "fixed"
          };
          e.setScalingMode(n);
          this.setState({
            scalingMode: n
          });
        });
      } catch (e) {
        console.error("Error loading hub file:", e);
        return e;
      }
    }
    e.isFullscreen !== this.props.isFullscreen && (this.props.viewer?.adjustZoom(this.zoomForFullscreenState(this.props.isFullscreen), .3), this.props.viewer?.setScrollToPan(this.props.isFullscreen));
  }
  componentWillUnmount() {
    clearInterval(this.contextViewEventTimeout);
    clearInterval(this.viewerLoadedTimeout);
    this.unbindEventsToViewer();
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("click", this.handleExternalClick);
  }
  render() {
    if (null === this.props.viewer) return null;
    let {
      backgroundColor,
      scalingMode
    } = this.state;
    let r = ez(backgroundColor);
    let a = scalingMode?.viewportScalingMode === "scale-down";
    return jsx("div", {
      className: "hub_file_viewer--viewerContainer--QMeJV",
      onClick: this.handleClick,
      ref: this.hubViewerRef,
      children: jsxs("div", {
        style: a ? r : {},
        className: eu,
        children: [a && jsx("div", {
          className: ep
        }), jsx("div", {
          className: "hub_file_viewer--viewer--bhvLZ",
          ref: this.props.setViewerElement
        }), this.props.viewer?.hasActiveScene() && jsx(Fragment, {
          children: jsx(n.BottomLeftContainer, {
            children: jsxs(n.ButtonContainer, {
              children: [jsx(xy, {
                onClick: this.restartPrototype,
                className: "hub_file_viewer--prototypeReplayButton--KoMtD hub_file_viewer--_embedControl--g0n7j hub_file_viewer--_embedControlNoHover--npgKi text--fontPos11--2LvXf text--_fontBase--QdLsd"
              }), jsx(n.Divider, {}), jsx(hJ, {
                backIcon: _$$A5,
                containerClassName: "hub_file_viewer--frameCounter--O1McS hub_file_viewer--_embedControlNoHover--npgKi text--fontPos11--2LvXf text--_fontBase--QdLsd",
                currentFrameIndex: this.props.currFrameIndex,
                frameCount: this.props.viewer.getNodesToShowInPrototype().length,
                frameCounterTextClassName: "hub_file_viewer--frameCounterText--iJ3Fz text--fontPos11--2LvXf text--_fontBase--QdLsd",
                navigateBackward: this.showPreviousFrame,
                navigateBackwardEnabled: this.props.navigateBackwardEnabled,
                navigateForward: this.showNextFrame,
                navigateForwardEnabled: this.props.navigateForwardEnabled,
                nextIcon: _$$A6,
                shouldShowFrameCounter: this.props.shouldShowFrameCounter
              })]
            })
          })
        }), this.props.viewer?.hasActiveScene() && jsxs(Fragment, {
          children: [this.props.viewer && jsx(n.HubFileZoomButtonDropdown, {
            hubFile: this.props.hubFile,
            currentZoomScale: this.getCurrentZoomScale(),
            adjustZoom: this.props.viewer.adjustZoom,
            setZoom: this.props.viewer.setZoom,
            resetZoomToFitCanvasContent: noop
          }), this.props.viewer?.hasActiveScene() && this.prototypeZoomButtonContainerRef.current && jsx(n.PrototypeZoomDropdown, {
            viewer: this.props.viewer,
            targetRect: this.prototypeZoomButtonContainerRef.current.getBoundingClientRect(),
            initialScalingMode: this.state.scalingMode
          }), jsxs(n.BottomRightContainer, {
            children: [jsx(n.ButtonContainer, {
              ref: this.prototypeZoomButtonContainerRef,
              children: this.props.viewer && jsx(n.PrototypeZoomButton, {
                viewer: this.props.viewer,
                getCurrentZoomScale: this.getCurrentZoomScale
              })
            }), !this.props.disableFullscreen && jsx("div", {
              style: {
                visibility: "hidden"
              },
              children: jsx(n.ButtonContainer, {
                children: jsx(n.FullscreenButton, {
                  toggleFullscreen: noop,
                  isFullscreen: !0
                })
              })
            })]
          })]
        }), a && jsx("div", {
          className: ep
        })]
      })
    });
  }
}
eK.displayName = "HubFilePrototypeViewer";
let e$ = parsePxInt(QtA);
var eX = (e => (e[e.MINIMIZED = 0] = "MINIMIZED", e[e.MINIMIZED_TO_FULLSCREEN = 1] = "MINIMIZED_TO_FULLSCREEN", e[e.FULLSCREEN = 2] = "FULLSCREEN", e[e.FULLSCREEN_TO_MINIMIZED = 3] = "FULLSCREEN_TO_MINIMIZED", e))(eX || {});
let eq = e => (e + 1) % 4;
export class $$eJ0 extends Component {
  constructor() {
    super(...arguments);
    this.containerRef = createRef();
    this.state = {
      embedLoaded: !1,
      fullscreenTransitionState: t0(this.props.fullscreenState) ? 2 : 0,
      showFullscreenComments: this.props.fullscreenState === PreviewMode.FULLSCREEN_WITH_COMMENTS
    };
    this.handleFullscreenTransition = (e, t) => {
      if (e !== t) {
        if (t0(e) !== t0(t)) {
          let e = eq(this.state.fullscreenTransitionState);
          let r = eq(e);
          this.setState({
            fullscreenTransitionState: e
          });
          setTimeout(() => {
            this.setState({
              fullscreenTransitionState: r,
              showFullscreenComments: !1
            });
            t === PreviewMode.FULLSCREEN_WITH_COMMENTS && setTimeout(() => {
              this.setState({
                showFullscreenComments: !0
              });
            }, 400);
          }, 10);
        } else t === PreviewMode.FULLSCREEN_WITH_COMMENTS ? this.setState({
          showFullscreenComments: !0
        }) : e === PreviewMode.FULLSCREEN_WITH_COMMENTS && this.setState({
          showFullscreenComments: !1
        });
      }
    };
    this.setFullscreenState = e => {
      this.props.dispatch(sW(e));
    };
    this.onViewerLoad = () => {
      this.state.embedLoaded || (this.setState({
        embedLoaded: !0
      }), parent.postMessage("LOAD_FINISHED", "*"));
    };
  }
  componentDidUpdate(e) {
    (e.hubFile.viewer_mode !== this.props.hubFile.viewer_mode || e.hubFile.scaling_mode !== this.props.hubFile.scaling_mode) && this.setState({
      embedLoaded: !1
    });
    e.fullscreenState !== this.props.fullscreenState && this.handleFullscreenTransition(e.fullscreenState, this.props.fullscreenState);
  }
  isInFullscreen() {
    return 2 === this.state.fullscreenTransitionState;
  }
  isPaidFigjamWithoutPurchase() {
    let e = hasMonetizedResourceMetadata(this.props.hubFile);
    let t = this.props.hubFile.community_resource_payment;
    let r = isSubscriptionActive(t);
    return this.props.hubFile.viewer_mode === FTemplateCategoryType.WHITEBOARD && e && !r;
  }
  getViewer() {
    return this.props.disableViewerForTest ? null : this.props.hubFile.viewer_mode === FTemplateCategoryType.PROTOTYPE ? jsx(eW, {
      hubFile: this.props.hubFile,
      onLoad: this.onViewerLoad,
      profileIdToAdminResourceAs: this.props.profileIdToAdminResourceAs,
      expandOnHover: !this.props.disableClickToExpand && this.state.fullscreenTransitionState < 2,
      isFullscreen: this.isInFullscreen(),
      minimizedWidth: this.containerRef.current?.offsetWidth,
      disableClickToExpand: this.props.disableClickToExpand,
      disableFullscreen: this.props.disableFullscreen
    }) : jsx(ex, {
      hubFile: this.props.hubFile,
      onLoad: this.onViewerLoad,
      isFullscreen: this.isInFullscreen(),
      showFullscreenComments: this.state.showFullscreenComments,
      disableComments: this.props.disableComments,
      disableClickToExpand: this.props.disableClickToExpand,
      disableFullscreen: this.props.disableFullscreen,
      profileIdToAdminResourceAs: this.props.profileIdToAdminResourceAs,
      fixedSize: this.props.fixedSize
    });
  }
  render() {
    let e = !!this.props.hubFile.thumbnail_is_set;
    let t = this.state.fullscreenTransitionState;
    let r = this.props.hubFile.viewer_mode === FTemplateCategoryType.WHITEBOARD;
    let n = this.containerRef.current?.getBoundingClientRect();
    let a = 1 === t ? {
      position: "fixed",
      top: n.top,
      left: n.left,
      right: window.innerWidth - n.right,
      bottom: window.innerHeight - n.bottom
    } : 3 === t ? {
      position: "absolute",
      top: -n.top + e$,
      left: -n.left + e$,
      right: -(window.innerWidth - e$ - n.right),
      bottom: -(window.innerHeight - e$ - n.bottom),
      zIndex: Zo
    } : {};
    let s = this.state.embedLoaded ? 2 === t ? BrowserInfo.safari ? "hub_file_detail_view--iframeContainerFullscreenSafari--x9JRk hub_file_detail_view--iframeContainerFullscreen--Itum1 hub_file_detail_view--iframeContainer---uQYN" : "hub_file_detail_view--iframeContainerFullscreen--Itum1 hub_file_detail_view--iframeContainer---uQYN" : "hub_file_detail_view--iframeContainer---uQYN" : "hub_file_detail_view--iframeContainerLoading--Uch-h hub_file_detail_view--iframeContainer---uQYN";
    let l = {
      height: "100%",
      visibility: this.state.embedLoaded ? "visible" : "hidden",
      display: "flex",
      flexDirection: "column"
    };
    return jsxs("div", {
      className: this.props.allowFullHeight ? "hub_file_detail_view--coverImageContainerFullHeight--99Bv7 hub_file_detail_view--coverImageContainer--3DphS detail_view--coverImageContainer--Yt17P" : "hub_file_detail_view--coverImageContainer--3DphS detail_view--coverImageContainer--Yt17P",
      ref: this.containerRef,
      children: [jsx("div", {
        className: this.isInFullscreen() ? "hub_file_detail_view--modalEmbedBackground--LTsNY" : "hub_file_detail_view--modalEmbedBackgroundHidden--Iqlhu hub_file_detail_view--modalEmbedBackground--LTsNY",
        onClick: () => this.setFullscreenState(PreviewMode.DEFAULT)
      }), jsx("div", {
        className: 0 === t ? "hub_file_detail_view--coverImageContainerMinimized--W9o-Q hub_file_detail_view--coverImageContainerStatic--KXE3R hub_file_detail_view--_embedFullscreenTransition--sMsEd" : 2 === t ? "hub_file_detail_view--coverImageContainerFullscreen--eSIBa hub_file_detail_view--coverImageContainerStatic--KXE3R hub_file_detail_view--_embedFullscreenTransition--sMsEd" : "",
        style: a,
        children: jsxs("div", {
          className: this.props.containerClassName || s,
          children: [jsx(TrackingProvider, {
            name: "Canvas Embed",
            children: jsx("div", {
              id: "HubFileViewerContainer",
              style: l,
              children: this.getViewer()
            })
          }), jsx("div", {
            className: this.state.embedLoaded ? "hub_file_detail_view--coverImageContainerHidden--hCY-H hub_file_detail_view--coverImageContainerShowing--ZnsLn" : "hub_file_detail_view--coverImageContainerShowing--ZnsLn",
            style: {
              backgroundColor: Cn(this.props.hubFile.client_meta)
            },
            children: jsx(Ho, {
              image: this.props.hubFile.thumbnail_url,
              isSet: e,
              isWhiteboard: r,
              backgroundColor: Cn(this.props.hubFile.client_meta),
              hubFileId: this.props.hubFile.id,
              alt: this.props.hubFile.versions[this.props.hubFile.current_hub_file_version_id].name,
              resizedThumbnailUrls: this.props.hubFile.resized_thumbnail_urls
            })
          }), jsx(Dy, {
            className: "hub_file_detail_view--iframeProgressBar--NZmiy",
            style: this.state.embedLoaded ? {
              visibility: "hidden"
            } : {}
          }, `${this.props.hubFile.viewer_mode}_${this.props.hubFile.scaling_mode}_progressBar`)]
        })
      })]
    });
  }
}
export const Z = $$eJ0;
