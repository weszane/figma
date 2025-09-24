import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect, useState, useMemo, useRef, useCallback, memo, useLayoutEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { y as _$$y } from "../905/725962";
import { getThemeContextOrDefault } from "../905/158740";
import { getFeatureFlags } from "../905/601108";
import { getStorage, localStorageRef } from "../905/657224";
import { usePreventBrowserKeydown } from "../figma_app/347146";
import { Tf } from "../905/280919";
import { ji } from "../figma_app/814196";
import { ModifierKeyCodes, isExactModifier } from "../905/63728";
import { BrowserInfo, isIpadDevice } from "../figma_app/778880";
import { selectWithShallowEqual } from "../905/103090";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { k as _$$k2 } from "../905/582200";
import { useErrorBoundaryContext, ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { subscribeDevModePermissions, useCanUseDevModeDemoFile } from "../figma_app/473493";
import { oQ } from "../figma_app/332085";
import { recentlyUsedQuickCommands, trackFileEventThunk } from "../figma_app/91703";
import { syncRecentPluginsThunk, syncRecentFaceStampsThunk, syncRecentWhiteboardToolsThunk, syncRecentWidgetsThunk } from "../figma_app/147952";
import { NX } from "../figma_app/568591";
import { TrackingProvider, wrapWithTracking } from "../figma_app/831799";
import { useMappedEditorTypeA } from "../905/808775";
import { useDebouncedCallback } from "use-debounce";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { getSelectedEditorType } from "../figma_app/976749";
import { trackFileEvent, mapEditorTypeToProductType, getFileEditInfo } from "../figma_app/314264";
import { i as _$$i } from "../1250/937941";
import { Cn, e_ as _$$e_ } from "../figma_app/936061";
import { y as _$$y2 } from "../905/320282";
import { wG } from "../figma_app/504823";
import { detachMultiplayer } from "../905/346794";
import { fullscreenPerfManager } from "../905/125218";
import { debounce } from "../905/915765";
import { desktopAPIInstance } from "../figma_app/876459";
import { $0 } from "../905/944871";
import { wX } from "../905/964786";
import { useCanPerformAction, useCanRunExtensions, isEditorTypeSupported, useFilteredDedupedRecentlyUsedPlugins, useInstalledPluginsAndWidgets, useFilteredWidgets, useDedupedRecentlyUsedWidgets, usePluginedWidgets } from "../figma_app/844435";
import { h as _$$h } from "../9410/146161";
import { gN, SH } from "../figma_app/790714";
import { y4 } from "../figma_app/298277";
import { XS } from "../figma_app/178752";
import { selectCurrentFile, useFullscreenViewFile } from "../figma_app/516028";
import { useCurrentUserOrgId, useCurrentUserOrg } from "../905/845253";
import { selectCurrentUser, getUserId } from "../905/372672";
import { resetTrackedAtoms } from "../figma_app/615482";
import { KeyboardLayout, SchemaJoinStatus, Multiplayer, FullscreenPerfInfo, CorePerfInfo, AppStateTsApi, Fullscreen } from "../figma_app/763686";
import { As, CZ, rd, v7 } from "../figma_app/475303";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { FU } from "../905/26824";
import { postUserFlag } from "../905/985254";
import { fullscreenValue } from "../figma_app/455680";
import { $$, ZN } from "../figma_app/781852";
import { pB } from "../905/395919";
import { getSelectedFile } from "../905/766303";
import { ud } from "../905/862913";
import { isLoaded } from "../905/18797";
import { subscribedSymbolsFromLoadedPagesSelector, subscribedStateGroupsFromLoadedPagesSelector } from "../figma_app/141508";
import { useSubscribedLibraryFileKeys, useSubscribedLibraryKeys } from "../figma_app/155728";
import { M as _$$M } from "../905/540025";
import { generateRetrievingSubscribedComponentsKey } from "../905/92359";
import { YG, Wg } from "../905/921418";
import { liveStoreInstance } from "../905/713695";
import { x as _$$x2 } from "../figma_app/612938";
import { useInitializeLeftPanelTab } from "../figma_app/457074";
import { RECENT_PLUGINS_FIGMA_DESIGN, RECENT_PLUGINS_FIGJAM, RECENT_PLUGINS_SLIDES, RECENT_WIDGETS_FIGMA_DESIGN, RECENT_WIDGETS_FIGJAM, RECENT_FACE_STAMPS_FIGJAM, RECENT_WHITEBOARD_TOOLS_FIGJAM } from "../figma_app/190980";
import { DW } from "../figma_app/578011";
import { FEditorType, mapEditorTypeToStringWithObfuscated } from "../figma_app/53721";
import { getSession } from "../905/574958";
import { e0 as _$$e } from "../905/696396";
import { L as _$$L } from "../905/92291";
import { atom, useAtomWithSubscription, atomStoreManager, Xr } from "../figma_app/27355";
import eO from "../vendor/879378";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { useSubscription } from "../figma_app/288654";
import { FileByKey } from "../figma_app/43951";
import { getFileKeyFromSelectedView } from "../figma_app/193867";
import { K as _$$K } from "../905/12775";
import { M as _$$M2 } from "../figma_app/333189";
import { Button } from "../905/521428";
import eY from "classnames";
import { w as _$$w } from "../figma_app/922802";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { H as _$$H } from "../905/444904";
import { customHistory } from "../905/612521";
import { AUTH_INIT } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { Ob } from "../905/191560";
import { u as _$$u } from "../905/684425";
import { Ji } from "../905/739314";
import { d as _$$d } from "../905/241150";
import { MemoryWarningModal } from "../figma_app/453508";
import { useLatestRef } from "../figma_app/922077";
import { S as _$$S } from "../5132/668270";
import { showModal, showModalHandler } from "../905/156213";
import { updateWorkshopUserName, setMultiplayerName } from "../figma_app/107215";
import { useCurrentFileWorkshopModeStatus } from "../figma_app/789";
import { QL } from "../905/609392";
import { isUIHiddenOrLocked } from "../905/868547";
import { generateAnonymouseName } from "../905/301652";
import { AuthModal } from "../905/749159";
import { IconButton } from "../905/443068";
import { C as _$$C } from "../905/866991";
import { A as _$$A2 } from "../905/251970";
import { yl } from "../figma_app/639088";
import { e as _$$e2 } from "../figma_app/630744";
import { v6, kO } from "../figma_app/442916";
import { ox } from "../figma_app/197286";
import { Wz } from "../figma_app/211694";
import { u as _$$u2 } from "../905/14084";
import { base64ToUint8Array } from "../figma_app/930338";
import { Yk } from "../figma_app/644079";
import { getAutosaveManagerInstance } from "../figma_app/840917";
import { useAppModelProperty, useCurrentTool } from "../figma_app/722362";
import { BI, m0 as _$$m, pt, Ef } from "../figma_app/546509";
import { Yh } from "../figma_app/357047";
import { getSingletonSceneGraph } from "../905/700578";
import { getResourceDataOrFallback } from "../905/419236";
import { trackFileEventWithUser } from "../figma_app/901889";
import { au } from "../figma_app/124493";
import { rE, CQ } from "../figma_app/186343";
import { C3 } from "../figma_app/587765";
import { Kd } from "../figma_app/121043";
import { Qs } from "../905/992395";
import { Fn, OO } from "../figma_app/913518";
import { _ as _$$_ } from "../figma_app/91620";
import { R as _$$R2 } from "../figma_app/400938";
import { a as _$$a } from "../figma_app/683763";
import { lj, wu } from "../figma_app/1722";
import { pK, S0, Jm, Jh } from "../figma_app/287316";
import { sO } from "../figma_app/21029";
import { v2 } from "../figma_app/164260";
import { n as _$$n } from "../905/347702";
import { P as _$$P } from "../9410/208213";
import { R as _$$R3 } from "../figma_app/501766";
import { u as _$$u3 } from "../9410/126479";
import { OQ } from "../figma_app/991591";
import { rH } from "../figma_app/49598";
import { _J } from "../figma_app/378195";
import { x4 as _$$x4 } from "../figma_app/913823";
import { nz, Yx } from "../figma_app/933328";
import { fullscreenCrashStateAtom } from "../figma_app/276445";
import { N as _$$N } from "../figma_app/115586";
import { getMemoryUsage } from "../figma_app/527873";
import { DI } from "../figma_app/557318";
import { WR } from "../figma_app/109130";
import { setupJubileePermission } from "../figma_app/251115";
import { y1 } from "../figma_app/318590";
import { Ky, RS } from "../9410/793186";
import { FC, Wc } from "../figma_app/957070";
import { jS } from "../figma_app/197432";
import { getSidebarSplitPosition, getPropertiesPanelSplitPosition, getDevHandoffInspectSplitPosition } from "../figma_app/740163";
let f = new Set(["-", "="]);
let g = new Set(["-", "=", "f", "o", "p", "r", "s"]);
function _(e) {
  if (!g.has(e.key)) return;
  let t = BrowserInfo.mac ? ModifierKeyCodes.META : ModifierKeyCodes.CONTROL;
  isExactModifier(e, t) ? e.target instanceof Element && e.target.matches(".cm-content") || e.preventDefault() : f.has(e.key) && (t |= ModifierKeyCodes.SHIFT, isExactModifier(e, t) && e.preventDefault());
}
let W = debounce((e, t) => {
  desktopAPIInstance.updateFullscreenMenuState({
    pluginMenuData: e,
    widgetMenuData: t
  });
}, 250);
let el = "keyboard-layout-preference";
let ed = (e, t, i) => {
  t && e(FU({
    tab: t
  }));
  i || fullscreenValue.triggerAction("toggle-keyboard-shortcuts");
};
let ec = (e, t, i, r) => {
  e(postUserFlag({
    keyboard_manual_supported_bell: !0
  }));
  e(VisualBellActions.enqueue({
    message: getI18nString("keyboard_settings.new_keyboard_name_keyboard_shortcuts_are_available", {
      newKeyboardName: As(t)
    }),
    button: {
      text: getI18nString("keyboard_settings.update_keyboard_shortcuts"),
      action: () => ed(e, "layout", r)
    },
    type: el,
    onDismiss: () => {
      e(postUserFlag({
        keyboard_manual_supported_bell: !0
      }));
    },
    timeoutOverride: 2e4
  }));
  CZ({
    layout: i,
    detectedLayout: t,
    eventName: "manual_supported_keyboard_detected"
  });
};
let eu = (e, t, i) => {
  e(postUserFlag({
    keyboard_generic_supported_first_bell: !0
  }));
  e(VisualBellActions.enqueue({
    message: getI18nString("keyboard_settings.new_keyboard_name_keyboard_shortcuts_are_now_available", {
      newKeyboardName: As(t)
    }),
    button: {
      text: getI18nString("keyboard_settings.enable_and_show_new_shortcuts"),
      action: () => {
        ed(e, "layout", i);
        rd({
          layout: t
        });
      }
    },
    type: el,
    onDismiss: () => {}
  }));
  CZ({
    layout: KeyboardLayout.UNKNOWN,
    detectedLayout: t,
    eventName: "first_generic_detected_supported_keyboard"
  });
};
async function ep(e, t) {
  if (!desktopAPIInstance) return null;
  let i = await desktopAPIInstance.getKeyboardLayout();
  if (!i) return null;
  if (t === i) return i;
  let r = pB(i);
  let n = v7();
  r === n || e(r, n, i, null != t);
  return i;
}
async function eh(e, t) {
  if (!window.isSecureContext || window.top !== window.self) return null;
  let i = navigator.keyboard;
  if (!i || !i.getLayoutMap) return null;
  let r = await i.getLayoutMap();
  if (function (e, t) {
    for (let [i, r] of e) if (t?.get(i) !== r) return !1;
    return !0;
  }(r, t)) return t;
  let {
    layoutJSON,
    detectedLayoutsWeb
  } = $$(r);
  let s = ZN({
    layoutJSON,
    detectedLayouts: detectedLayoutsWeb,
    desktopLayout: null
  });
  let o = v7();
  s === o || e(s, o, JSON.stringify(layoutJSON), null != t);
  return r;
}
var eL = eO;
var eR = (e => (e.NOT_INITIALIZED = "not_initialized", e.ACTIVE_FIRST_TIME = "active_first_time", e.ACTIVE_AFTER_IDLE = "active_after_idle", e.IDLE_DUE_TO_INACTIVITY = "idle_due_to_inactivity", e.IDLE_DUE_TO_TAB_SWITCH = "idle_due_to_tab_switch", e))(eR || {});
let eM = atom(eR.NOT_INITIALIZED);
let eP = createReduxSubscriptionAtomWithState(e => ({
  state: e,
  fileKey: e.openFile?.key
}));
let eF = [eR.ACTIVE_AFTER_IDLE, eR.ACTIVE_FIRST_TIME];
let eB = atom(null, (e, t, i) => {
  let {
    state,
    fileKey
  } = e(eP);
  let a = e(eM);
  if ((a && eF.includes(a) ? "start" : "end") != (i && eF.includes(i) ? "start" : "end")) {
    let e = "";
    switch (i) {
      case eR.ACTIVE_AFTER_IDLE:
      case eR.ACTIVE_FIRST_TIME:
        e = "active";
        break;
      case eR.IDLE_DUE_TO_INACTIVITY:
      case eR.IDLE_DUE_TO_TAB_SWITCH:
        e = "inactive";
        break;
      default:
        e = "non-initialized";
    }
    trackFileEvent("active_time_spent_event", fileKey, state, {
      currentState: e,
      activeState: i
    }, {
      forwardToDatadog: !0,
      batchRequest: !1
    });
  }
  t(eM, i);
});
let eU = ["mousemove", "mousedown", "keydown", "touchstart", "touchmove", "wheel"];
var eJ = eY;
function e4(e) {
  let t = useDispatch();
  let i = useSelector(e => e.auth);
  useEffect(() => {
    t(AUTH_INIT({
      origin: "request_permissions_entry",
      redirectUrl: customHistory.location.pathname,
      formState: AuthFlowStep.ACCOUNT_PICKER,
      accountPickerData: e.accountPickerData
    }));
  }, [t, e.accountPickerData]);
  return jsxs(_$$u, {
    useOriginalSrcFills: !0,
    onBackClick: () => {
      i.formState === AuthFlowStep.ACCOUNT_PICKER ? e.closeAuth() : t(AUTH_INIT({
        origin: "request_permissions_entry",
        redirectUrl: customHistory.location.pathname,
        formState: AuthFlowStep.ACCOUNT_PICKER,
        accountPickerData: e.accountPickerData
      }));
    },
    children: [jsx("div", {
      className: "request_permissions_app--authViewContainer--1XJOG",
      children: jsx(Ob, {
        id: "request-permissions-app",
        modal: !0,
        auth: i
      })
    }), jsx(_$$d, {
      children: jsx(Ji, {})
    })]
  });
}
function e6(e) {
  let t = (useSelector(e => e.authedUsers) ?? {}).byId ?? {};
  let i = e.authedUsers ?? Object.values(t);
  let [s, o] = useState(!1);
  return jsx(_$$w, {
    children: s ? jsx(e4, {
      accountPickerData: {
        authed_users: i,
        authed_user_access_reason: {},
        destination_name: getI18nString("mfa_required_modal.account_switcher.destination")
      },
      closeAuth: () => {
        o(!1);
      }
    }) : jsx(_$$H, {
      org: e.org,
      switchAccountsSection: jsx(function () {
        let e = selectCurrentUser();
        return !e || desktopAPIInstance ? null : jsx("div", {
          className: eJ()(cssBuilderInstance.mt24.$, "mfa_required--secondaryText--eCIsl"),
          children: renderI18nText("mfa_required_modal.account_switcher.text", {
            userEmail: e.email,
            link: jsx(Button, {
              variant: "link",
              onClick: () => {
                o(!0);
              },
              children: renderI18nText("mfa_required_modal.account_switcher.switch_accounts")
            })
          })
        });
      }, {}),
      fileKey: e.fileKey
    })
  });
}
function tu(e) {
  let {
    onDismiss
  } = e;
  return jsx(TrackingProvider, {
    name: "Workshop Expired File Banner",
    children: jsxs("div", {
      className: `workshop_expiry_footer--banner--ELf7G ${yl}`,
      children: [jsxs("div", {
        className: "workshop_expiry_footer--bannerContent--w2Lw1",
        children: [jsx("div", {
          className: "workshop_expiry_footer--icon--mM-A8",
          children: jsx(_$$C, {})
        }), jsx("div", {
          className: "workshop_expiry_footer--textContent--TN7cv",
          children: jsx("span", {
            className: "workshop_expiry_footer--title--cmlOu text--fontPos13Whyte--VhWqH text--_fontBaseWhyte--efAjI",
            children: renderI18nText("whiteboard.open_sessions.expiry_banner_title")
          })
        })]
      }), jsx(IconButton, {
        onClick: onDismiss,
        "aria-label": getI18nString("general.close"),
        children: jsx(_$$A2, {})
      })]
    })
  });
}
function tm(e) {
  let {
    onWorkshopExpired
  } = e;
  !function () {
    let e = useDispatch();
    let t = selectCurrentUser();
    let i = !t;
    let r = useCurrentFileWorkshopModeStatus();
    let s = r.enabled;
    let o = r.enabled ? r.id : null;
    let l = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED);
    let c = useSelector(e => e.progressBarState.mode);
    let u = selectCurrentFile()?.isTryFile;
    let p = QL("name");
    useEffect(() => {
      i && u && o && p && l && e(updateWorkshopUserName({
        name: p
      }));
    }, [i, u, p, o, e, l]);
    let h = useMemo(() => {
      if (!t || null == o) return !1;
      if (u) return !0;
      let e = getStorage();
      try {
        return e.get(v6(o)).includes(t.email);
      } catch (e) {
        return !1;
      }
    }, [t, o, u]);
    let m = t?.email;
    useEffect(() => {
      m && o && u && kO(o, m);
    }, [m, o, u]);
    let f = useFullscreenViewFile();
    useEffect(() => {
      if (s && !isUIHiddenOrLocked(c) && "loaded" === f.status) {
        let t = localStorage.getItem(generateAnonymouseName(o));
        i ? t ? setMultiplayerName(t) : e(showModal({
          type: _$$e2
        })) : f.data?.canEdit || h || e(showModal({
          type: _$$e2
        }));
      }
    }, [e, i, s, o, c, h, f]);
    let g = selectCurrentFile();
    let _ = g?.key;
    let x = g?.name;
    useEffect(() => {
      if (s && !isUIHiddenOrLocked(c) && i && u && _ && x === getI18nString("fullscreen.fullscreen_view_selector.untitled")) {
        let t = localStorage.getItem(generateAnonymouseName(o));
        t && e(_$$S({
          userName: t,
          file_key: _
        }));
      }
    }, [s, c, o, i, u, _, x, e]);
  }();
  let {
    showEditFileFooter,
    dismissEditFileFooter
  } = function (e) {
    let [t, i] = useState(!1);
    let r = useDispatch();
    let s = selectCurrentUser();
    let o = selectCurrentFile();
    let l = o?.name;
    let d = !s;
    let {
      userCanEditFile
    } = useMemo(() => d ? {
      userCanEditFile: !1,
      userCanSeeEditButton: !1
    } : o ? {
      userCanEditFile: o.canEdit
    } : {
      userCanEditFile: !1,
      userCanSeeEditButton: !1
    }, [d, o]);
    let u = useCurrentFileWorkshopModeStatus();
    let p = u.enabled;
    let h = useLatestRef(p);
    let m = u.enabled ? u.until.valueOf() : null;
    let f = useRef(null);
    let g = useCallback(() => {
      if (!d) {
        Multiplayer?.reconnect(!1);
        userCanEditFile || i(!0);
        return;
      }
      r(AUTH_INIT({
        origin: "logged_out_footer",
        formState: AuthFlowStep.SIGN_UP,
        redirectUrl: customHistory.location.pathname
      }));
      r(showModalHandler({
        type: AuthModal,
        data: {
          headerText: getI18nString("whiteboard.open_sessions.expiry_modal_title", {
            file_name: l || ""
          }),
          subtitle: getI18nString("whiteboard.open_sessions.expiry_modal_subtext"),
          disableHiding: !0
        }
      }));
      e();
    }, [r, e, d, userCanEditFile, l]);
    useEffect(() => {
      if (p && m) {
        let e = Math.max(m - Date.now(), 0);
        f.current = setTimeout(() => {
          f.current = null;
          g();
        }, e);
      }
      return () => {
        f.current && clearTimeout(f.current);
      };
    }, [r, p, m, g]);
    useEffect(() => {
      null != h && p !== h && (p ? Multiplayer?.reconnect(!1) : (f.current && clearTimeout(f.current), g()));
    }, [r, p, h, g]);
    return {
      showEditFileFooter: t,
      dismissEditFileFooter: useCallback(() => {
        i(!1);
      }, [])
    };
  }(onWorkshopExpired);
  return showEditFileFooter ? jsx(tu, {
    onDismiss: dismissEditFileFooter
  }) : null;
}
let t5 = memo(({
  children: e
}) => {
  let t = useSelector(e => e.openFile);
  let i = t ? t.key : "";
  let s = t?.parentOrgId || "";
  let o = useRef(null);
  let d = useDispatch();
  let c = useAtomWithSubscription(fullscreenCrashStateAtom);
  let u = useSelector(e => e.openFile?.canEdit ?? !1);
  let p = useAppModelProperty("isReadOnly");
  let h = useCurrentUserOrgId();
  let f = getSelectedEditorType();
  let g = useLatestRef(f);
  f !== g && g && d(recentlyUsedQuickCommands([]));
  setupJubileePermission(i, s);
  OQ(i);
  y1(i);
  WR();
  nz();
  _$$N();
  Ky();
  useEffect(() => {
    let e = () => {
      window.scrollTo({
        left: document.body.scrollLeft,
        top: document.body.scrollTop,
        behavior: "smooth"
      });
    };
    window.scrollTo(0, 0);
    isIpadDevice && document.addEventListener("focusout", e);
    document.documentElement.classList.add(FC);
    document.body.classList.add(Wc);
    d(_J());
    let t = window.FigmaMobile;
    t && (t._get_memory_stats = () => {
      let e = FullscreenPerfInfo?.getImageMemory();
      let t = FullscreenPerfInfo?.getHeapMemoryBreakdown();
      var i = {
        coreJsBufferMemory: CorePerfInfo?.getJsBufferMemory() || 0,
        coreLocalMaxUsedHeapMemory: CorePerfInfo?.getLocalMaxUsedHeapMemory() || 0,
        coreMaxUsedHeapMemory: CorePerfInfo?.getMaxUsedHeapMemory() || 0,
        coreTotalUsedHeapMemory: CorePerfInfo?.getTotalUsedHeapMemory() || 0,
        fullscreenCompressedImages: e?.compressedImages ?? 0,
        fullscreenUncompressedImagesArrayBuffers: e?.uncompressedArrayBuffer ?? 0,
        fullscreenUncompressedImagesImageBitmap: e?.uncompressedImageBitmap ?? 0
      };
      let r = CorePerfInfo?.getMemStatsSummary() ?? void 0;
      if (r) {
        let e = n(t?.mem_pool_current) || 0;
        let i = n(t?.font_files_current) || 0;
        let a = n(t?.unique_paths_current) || 0;
        let s = n(t?.vector_networks_current) || 0;
        r.application = {
          memPool: {
            total: e
          },
          fontFiles: {
            total: i
          },
          uniquePaths: {
            total: a
          },
          vectorNetworks: {
            total: s
          }
        };
      }
      function n(e) {
        return "number" == typeof e ? e : parseInt(e);
      }
      return {
        metadata: JSON.parse(JSON.stringify(i)),
        reservedWasmMemory: getMemoryUsage() || 0,
        rendererGpuMemory: n(FullscreenPerfInfo?.getRendererGpuMemory()) || 0,
        rendererBreakdown: function (e) {
          return {
            textures: n(e.textures),
            vertexBuffers: n(e.vertexBuffers),
            renderBuffers: n(e.renderBuffers),
            uniformBuffers: n(e.uniformBuffers)
          };
        }(FullscreenPerfInfo?.getRendererMemoryBreakdown()) ?? void 0,
        memStats: r
      };
    });
    return () => {
      isIpadDevice && document.removeEventListener("focusout", e);
      document.body.classList.remove(Wc);
      document.documentElement.classList.remove(FC);
    };
  }, [d]);
  useEffect(() => {
    t && !o.current && (d(Yx({})), t && !p ? t?.canEdit && d(rH({
      fileKey: t.key
    })) : getFeatureFlags().ce_new_missing_fonts_logging && DI(), o.current = t);
  }, [d, p, t]);
  useEffect(() => {
    RS(d, t?.key, h);
  }, [d, h, t?.key, f]);
  useEffect(() => {
    desktopAPIInstance && desktopAPIInstance.setEditFilePermissions(u);
  }, [u]);
  let _ = useRef(null);
  let x = useRef(null);
  return (useEffect(() => {
    t && (null === _.current || !_.current) && d(_$$x4());
    t && _.current && t.key !== _.current && d(_$$x4());
    x.current && f !== x.current && d(_$$x4());
    x.current = f;
    _.current = t?.key;
  }, [d, t, f]), "ok" !== c) ? null : jsx(Fragment, {
    children: e
  });
});
let t7 = () => {
  "hidden" === document.visibilityState && (localStorageRef?.clear(), _$$L.cleanupSession());
};
export function $$t80({
  children: e,
  loadedCommentsProvider: t = !0
}) {
  useEffect(() => {
    getFeatureFlags().datadog_rum_fullscreen ? Tf.enableEventSending({
      allowResourceTracking: !fullscreenPerfManager.isColdBoot
    }) : Tf.disableEventSendingUnlessDebugEnabled();
  }, []);
  let i = useDispatch();
  let d = selectCurrentFile();
  subscribeDevModePermissions(d?.key ?? "");
  liveStoreInstance.Folder.useValue(d?.folderId);
  let h = useSelector(e => e.selectedView.editorType);
  let [f, g] = useState(!1);
  let x = getThemeContextOrDefault();
  let C = sO();
  let S = useCanUseDevModeDemoFile();
  let j = useCallback(() => {
    jS();
    g(!0);
  }, []);
  let R = function ({
    onCanvasExpired: e
  }) {
    let t = useSelector(e => getFileKeyFromSelectedView(e.selectedView));
    let i = getUserId();
    let r = useCurrentUserOrgId();
    let [s, o] = useState(!1);
    let d = _$$K();
    let c = useSubscription(FileByKey, {
      fileKey: t ?? ""
    }, {
      enabled: !!t
    });
    let u = "loaded" === c.status && c.data.file?.canRead !== !0;
    let p = "loaded" === c.status && c.data.file?.canRead === !0;
    useLayoutEffect(() => {
      d && u && (o(!0), e());
    }, [d, u, e]);
    useEffect(() => {
      d && p && analyticsEventManager.trackDefinedEvent("mfa.file_access_without_restriction", {
        orgId: r ?? void 0,
        userId: i ?? void 0,
        fileKey: t ?? void 0
      });
    }, [d, p, r, i, t]);
    return !!getFeatureFlags().mfa_for_guests && s;
  }({
    onCanvasExpired: j
  });
  let B = useSelector(e => e.mergingStatus);
  useEffect(() => {
    if (getFeatureFlags().ce_suppress_browser_keys) {
      document.addEventListener("keydown", _, !0);
      return () => void document.removeEventListener("keydown", _, !0);
    }
  }, []);
  (function () {
    let e = useRef();
    let t = useRef();
    let i = useDispatch();
    let r = useSelector(e => e.userFlags);
    let s = useSelector(e => !!e.user);
    let o = function (e, t) {
      let i = useSelector(e => e.mirror.appModel.showKeyboardShortcuts);
      let r = useSelector(e => e.user?.created_at);
      let s = useMemo(() => {
        let e = new Date("2022-11-14").getTime();
        return null != r && new Date(r).getTime() >= e;
      }, [r]);
      return useCallback((r, n, a, o) => {
        t.keyboard_user_first_detection || o || !s ? r !== KeyboardLayout.US_QWERTY || o || n !== KeyboardLayout.UNKNOWN ? r && n !== KeyboardLayout.UNKNOWN ? t.keyboard_manual_supported_bell || ec(e, r, n, i) : r && n === KeyboardLayout.UNKNOWN ? t.keyboard_generic_supported_first_bell || eu(e, r, i) : CZ({
          layout: n,
          detectedLayoutStr: a ?? void 0,
          eventName: "keyboard_change_no_bell"
        }) : CZ({
          layout: r,
          eventName: "ignore_us_qwerty"
        }) : (e(postUserFlag({
          keyboard_user_first_detection: !0
        })), r && (rd({
          layout: r
        }), CZ({
          layout: r,
          eventName: "auto_set_new_user_layout"
        })));
      }, [e, t, i, s]);
    }(i, r);
    let l = useCallback(async () => {
      if (s) {
        if (desktopAPIInstance) {
          let t = await ep(o, e.current ?? null);
          e.current = t;
        } else {
          let e = await eh(o, t.current ?? null);
          t.current = e;
        }
      }
    }, [o, s]);
    useEffect(() => {
      fullscreenValue.isReady() ? l() : fullscreenValue.onReady().then(() => setTimeout(l, 500));
    }, []);
  })();
  XS();
  (function () {
    let e = useStore();
    let t = useSelector(getSelectedFile);
    let i = useSelector(subscribedSymbolsFromLoadedPagesSelector);
    let r = useSelector(subscribedStateGroupsFromLoadedPagesSelector);
    let s = useSelector(e => e.library.publishedByLibraryKey);
    let o = selectCurrentFile();
    let l = useSelector(e => e.fileVersion);
    let d = useSelector(e => e.loadingState);
    let c = useSelector(e => e.library.local);
    let u = useSelector(e => e.library.assetsPanelSearch.shouldSearchDefaultLibraries);
    let p = ud();
    let h = useSelector(e => e.folders);
    let m = useSubscribedLibraryFileKeys();
    let f = useSubscribedLibraryKeys();
    let g = useSelector(e => e.library.assetsPanelSearch.query);
    let _ = useSelector(e => e.library.assetsPanelSearch.searchOptions);
    let x = isLoaded(d, generateRetrievingSubscribedComponentsKey(o?.key || ""));
    let y = _$$M();
    useEffect(() => {
      t && YG.sourcesDidChange();
    }, [t, i, r, s, c, u, p, h]);
    useEffect(() => {
      Wg(e.getState(), {
        ignoreLoadingState: y
      }) && YG.queryDidChange(e);
    }, [e, g, y]);
    useEffect(() => {
      Wg(e.getState(), {
        ignoreLoadingState: y
      }) && YG.searchOptionsDidChange(e);
    }, [e, _, y]);
    useEffect(() => {
      Wg(e.getState(), {
        ignoreLoadingState: y
      }) && YG.subscriptionsDidChange(e, m, f);
    }, [e, x, m, f, o, l, d, y]);
  })();
  ji();
  gN();
  desktopAPIInstance && function () {
    let e = useCanPerformAction();
    let t = useCanRunExtensions();
    let i = isEditorTypeSupported();
    let r = useSelector(e => e.mirror.appModel.isReadOnly);
    let s = useSelector(e => e.openFile);
    let o = useSelector(e => e.localPlugins);
    let l = getSelectedEditorType();
    let d = useFilteredDedupedRecentlyUsedPlugins();
    let c = useSelector(e => e.installedPluginVersions.plugins);
    let u = useSelector(e => e.mirror.selectedStyleProperties?.selectedWidgetInfo);
    let p = useSelector(e => e.mirror.appModel.activeTextReviewPlugin);
    let h = useSelector(e => e.publishedPlugins);
    let m = useSelector(e => e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null);
    let f = useInstalledPluginsAndWidgets();
    let g = f.orgPlugins;
    let _ = f.orgWidgets;
    let x = _$$h("plugin");
    let y = _$$h("widget");
    let b = useFilteredWidgets();
    let C = useDedupedRecentlyUsedWidgets();
    let v = usePluginedWidgets();
    let E = null != SH();
    useEffect(() => {
      let n = {
        isReadOnly: r,
        userCanViewPlugins: e,
        openFile: s,
        publishedPlugins: h,
        localExtensions: o,
        allSavedPlugins: c,
        recentlyUsedPlugins: d,
        org: m,
        editorType: l,
        widgetSelectionInfo: u,
        hideRecentsHeader: !0,
        activeTextReviewPlugin: p,
        orgSavedPlugins: g,
        orgSavedWidgets: _,
        orgPrivatePlugins: x,
        orgPrivateWidgets: y,
        savedWidgetVersions: b,
        recentlyUsedWidgets: C,
        publishedWidgets: v,
        userCanViewWidgets: i,
        userCanRunExtensions: t
      };
      W($0(n), wX(n));
    }, [r, e, s, h, c, d, o, m, l, u, p, f, g, _, x, y, b, C, v, E, i, t]);
  }();
  _$$x2();
  (function () {
    let e = getSelectedEditorType();
    let t = useCallback(() => {
      trackEventAnalytics("display_redline", {
        source: "keyboard_shortcut",
        mode: e
      });
    }, [e]);
    let i = useDebouncedCallback(t, 1e3, {
      leading: !0,
      trailing: !1
    });
    let r = useSelector(e => e.usedKeyboardShortcuts["measure-to-selection"] || 0);
    let s = useRef(r);
    useEffect(() => {
      s.current !== r && (s.current = r, i());
    }, [r, i]);
  })();
  (function () {
    let e = getSidebarSplitPosition();
    let t = getPropertiesPanelSplitPosition();
    let i = getDevHandoffInspectSplitPosition();
    let r = document.documentElement.style;
    useLayoutEffect(() => {
      r.setProperty("--left-panel-width", `${e}px`);
      getFeatureFlags().properties_panel_resize_lag_fix && (r.setProperty("--properties-panel-width", `${t}px`), r.setProperty("--dev-handoff-panel-width", `${i}px`));
    }, [e, t, i, r]);
  })();
  selectExperimentConfigHook("exp_aa_test_fullscreen_view").getConfig();
  (function () {
    let e = useDispatch();
    let t = _$$_();
    let i = BI();
    let [r, s] = useState(!1);
    let o = useSelector(e => e.multiplayer);
    let l = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED);
    !function () {
      let e = selectCurrentFile();
      let t = window.FigmaMobile;
      let i = rE();
      let r = C3();
      let s = useDispatch();
      let o = trackFileEventWithUser();
      let l = r ? getResourceDataOrFallback(r.pageNodeId) : void 0;
      useEffect(() => {
        t && (t._select_page = async e => {
          l === e && s(au({}));
          await getSingletonSceneGraph().setCurrentPageAsync(e);
        });
      }, [s, t, l]);
      useEffect(() => {
        t && (t._rename_page = (t, i) => {
          CQ({
            openFile: e,
            pageId: t,
            newName: i,
            trackRenamePage: () => o("page_commit_rename", {
              nodeId: t
            }, {
              forwardToDatadog: !0
            })
          });
        });
      }, [t, e, o]);
      useEffect(() => {
        t && (t._delete_page = e => {
          fullscreenValue.triggerActionInUserEditScope("page-delete", {
            args: {
              nodeId: e
            }
          });
          fullscreenValue.commit();
        });
      }, [t]);
      useEffect(() => {
        t && (t._create_page = () => {
          i(null);
        });
      }, [t, i]);
    }();
    let d = useCallback(t => {
      Multiplayer?.observeUser(t);
      o && o.observingSessionID !== t && o.sessionID !== t && e(postUserFlag({
        aware_of_observation_mode: !0
      }));
    }, [o, e]);
    useEffect(() => {
      t && !r && i?.shouldOptimizeForIpadApp && l && !AppStateTsApi?.defaultToolIsHandSelect() && (s(!0), fullscreenValue.triggerAction("set-tool-hand", null));
    }, [t, i, r, s, l]);
    let c = useSelector(({
      mirror: {
        appModel: e
      }
    }) => e.showUi);
    useEffect(() => {
      i?.updateUIVisible && i.updateUIVisible(c);
    }, [i, c]);
    let u = _$$m();
    useEffect(() => {
      u && (u._try_to_flush_autosave = async () => {
        let e = getAutosaveManagerInstance();
        if (e) {
          let t = e.session();
          t && (await t.tryToFlushAutosave());
        }
      });
    }, [u]);
    let p = Kd();
    useEffect(() => {
      i?.updateSaveStatus && (p ? l ? i.updateSaveStatus(_$$a.SAVING) : i.updateSaveStatus(_$$a.PAUSED) : i.updateSaveStatus(_$$a.SAVED));
    }, [i, p, l]);
    let h = useSelector(e => Yh(e.mirror.appModel, "undo"));
    let m = useSelector(e => Yh(e.mirror.appModel, "redo"));
    useEffect(() => {
      if (i?.updateUndoEnabled && i.updateUndoEnabled(h), i?.updateRedoEnabled && i.updateRedoEnabled(m), u) {
        let t = t => {
          e(VisualBellActions.dequeue({
            matchType: "undo_redo_gesture"
          }));
          e(VisualBellActions.enqueue({
            message: t,
            type: "undo_redo_gesture",
            timeoutOverride: 750
          }));
        };
        u._trigger_undo = () => {
          h && (fullscreenValue.triggerActionInUserEditScope("undo"), t(getI18nString("fullscreen_actions.undo")));
        };
        u._trigger_redo = () => {
          m && (fullscreenValue.triggerActionInUserEditScope("redo"), t(getI18nString("fullscreen_actions.redo")));
        };
      }
    }, [i, e, h, m, u]);
    let f = pt();
    useEffect(() => {
      f && (f._set_ui_visibility = e => {
        e !== c && fullscreenValue.triggerAction("toggle-ui");
      });
    }, [f, c]);
    let g = Yk();
    useEffect(() => {
      i?.updateDLTHeight && i.updateDLTHeight(g);
    }, [g, i]);
    let _ = useCurrentTool();
    let x = pK(_);
    let y = Ef();
    let b = useSelector(e => e.mirror?.appModel.isReadOnly);
    useEffect(() => {
      x && !b && (y?.nativeToolbarUpdateActiveTool?.(x), y?.nativeToolbarUpdateMultiselectActive?.("MULTISELECT" === x));
    }, [y, x, b]);
    let [C, v] = useState("ERASER");
    let [E, T] = useState("PENCIL");
    useEffect(() => {
      !b && x && S0(x) && x !== C && (T(C), v(x));
    }, [x, C, v, T, b]);
    useEffect(() => {
      f && (f._switch_to_eraser = function () {
        if (b) return {
          success: !1,
          error: lj.READ_ONLY_FILE,
          currentTool: "NONE"
        };
        if ("ERASER" !== C) {
          Jm("set-tool-eraser");
          return {
            success: !0,
            error: null,
            currentTool: "ERASER"
          };
        }
        {
          let e = Jh.get(E);
          e && Jm(e);
          return {
            success: !0,
            error: null,
            currentTool: E
          };
        }
      }, f._switch_to_previous_drawing_tool = function () {
        if (b) return {
          success: !1,
          error: lj.READ_ONLY_FILE,
          currentTool: "NONE"
        };
        let e = Jh.get(E);
        e && Jm(e);
        return {
          success: !0,
          error: null,
          currentTool: E
        };
      });
    }, [b, x, E, C, f]);
    useEffect(() => {
      u && (u._observe_user = e => {
        d(e);
      });
    }, [u, d]);
    u && (u._update_context_menu_visibility = e => {
      Fullscreen?.updateNativeContextMenuVisibility(e);
    }, u._override_document_visibility_state = _$$R2, u._set_allow_draw_with_touch = e => {
      Fullscreen?.setAllowDrawWithTouch(e);
    }, u._unlock_all_objects = () => {
      fullscreenValue.triggerActionInUserEditScope("unlock-all");
    }, u._zoom_reset = () => {
      fullscreenValue.triggerActionInUserEditScope("zoom-reset");
    }, u._zoom_to_fit = () => {
      fullscreenValue.triggerActionInUserEditScope("zoom-to-fit");
    }, u._present = () => {
      Multiplayer?.startPresenting();
    }, u._find_in_file = () => {
      fullscreenValue.triggerActionInUserEditScope("canvas-search");
    }, u._copy = () => {
      fullscreenValue.triggerActionInUserEditScope("copy");
    }, u._cut = () => {
      fullscreenValue.triggerActionInUserEditScope("cut");
    }, u._paste = () => {
      fullscreenValue.triggerActionInUserEditScope("paste");
    }, u._add_media = e => {
      let t = e.map(e => {
        let {
          encoded_data,
          mime_type
        } = e;
        return new Blob([base64ToUint8Array(encoded_data)], {
          type: mime_type
        });
      });
      let i = fullscreenValue.fileArrayToString(t);
      Fullscreen?.handleOpenFromJsonString(i, wu.MOBILE_NATIVE_NAVBAR);
    }, u._get_zoom_scale = () => Fullscreen?.getViewportZoomScale() ?? 1);
    f && (f._open_timer = () => {
      atomStoreManager.set(Qs, {
        type: "OPEN"
      });
      trackEventAnalytics(Fn.OPEN, {
        source: OO.IPAD_MENU
      });
    }, f._close_timer = () => {
      atomStoreManager.set(Qs, {
        type: "CLOSE"
      });
    }, f._activate_multiselect_mode = () => {
      Jm("set-tool-multiselect");
    }, f._deactivate_multiselect_mode = () => {
      Jm("set-tool-default");
    });
  })();
  useInitializeLeftPanelTab();
  usePreventBrowserKeydown();
  (function () {
    let e = useDispatch();
    let [t, i] = Wz("nux_seat_selection_show_confirmation", null);
    useEffect(() => {
      t && ("autoApproved" in t && "seatType" in t && e(showModalHandler({
        type: _$$u2,
        data: {
          ...t
        }
      })), i(null));
    }, [t, e, i]);
  })();
  _$$i();
  useEffect(() => resetTrackedAtoms, []);
  DW();
  useEffect(() => (h === FEditorType.Whiteboard && BrowserInfo.isMeetDevice && "undefined" != typeof document && document.addEventListener("visibilitychange", t7), () => {
    document.removeEventListener("visibilitychange", t7);
  }), [h]);
  let Y = useMappedEditorTypeA();
  useEffect(() => {
    if (Y) {
      i(syncRecentPluginsThunk({
        storeInRecentsKey: Y
      }));
      h === FEditorType.Whiteboard && (i(syncRecentFaceStampsThunk({
        storeInRecentsKey: Y
      })), i(syncRecentWhiteboardToolsThunk({
        storeInRecentsKey: Y
      })));
      h !== FEditorType.DevHandoff && i(syncRecentWidgetsThunk({
        storeInRecentsKey: Y
      }));
      window.addEventListener("storage", e, !1);
      return () => {
        window.removeEventListener("storage", e, !1);
      };
    }
    function e(e) {
      switch (e.key) {
        case RECENT_PLUGINS_FIGMA_DESIGN:
        case RECENT_PLUGINS_FIGJAM:
        case RECENT_PLUGINS_SLIDES:
          i(syncRecentPluginsThunk({
            storeInRecentsKey: Y
          }));
          break;
        case RECENT_WIDGETS_FIGMA_DESIGN:
        case RECENT_WIDGETS_FIGJAM:
          i(syncRecentWidgetsThunk({
            storeInRecentsKey: Y
          }));
          break;
        case RECENT_FACE_STAMPS_FIGJAM:
          i(syncRecentFaceStampsThunk({
            storeInRecentsKey: Y
          }));
          break;
        case RECENT_WHITEBOARD_TOOLS_FIGJAM:
          i(syncRecentWhiteboardToolsThunk({
            storeInRecentsKey: Y
          }));
      }
    }
  }, [i, h, Y]);
  let er = getUserId();
  useEffect(() => {
    er && i(oQ());
  }, [i, er]);
  useEffect(() => {
    S && detachMultiplayer();
  }, [S]);
  (function () {
    let e = Xr(eB);
    useEffect(() => {
      let t;
      let i = () => {
        clearTimeout(t);
        t = setTimeout(() => {
          e(eR.IDLE_DUE_TO_INACTIVITY);
        }, 6e4);
      };
      let r = () => {
        i();
        e(eR.ACTIVE_AFTER_IDLE);
      };
      let n = eL()(r, 500, {
        trailing: !1,
        leading: !0
      });
      let a = () => {
        try {
          "visible" === document.visibilityState ? r() : e(eR.IDLE_DUE_TO_TAB_SWITCH);
        } catch (e) {
          console.error("Failed to update visibility state", e);
          return e;
        }
      };
      e(eR.ACTIVE_FIRST_TIME);
      eU.forEach(e => {
        document.addEventListener(e, n);
      });
      document.addEventListener("visibilitychange", a);
      i();
      return () => {
        eU.forEach(e => {
          document.removeEventListener(e, n);
        });
        document.removeEventListener("visibilitychange", a);
        clearTimeout(t);
      };
    }, [e, 6e4]);
  })();
  useEffect(() => {
    let e = e => {
      if (B === _$$y.MERGING) {
        e.returnValue = "A merge operation is in progress. Closing the window could result in data loss or corruption; please wait until the operation completes.";
        e.preventDefault();
        i(trackFileEventThunk({
          name: "Unload During Merge Warning Shown"
        }));
        return !1;
      }
    };
    let t = () => {
      B === _$$y.MERGING && i(trackFileEventThunk({
        name: "Page Closed During Merge"
      }));
    };
    window.addEventListener("beforeunload", e);
    window.addEventListener("unload", t);
    return () => {
      window.removeEventListener("beforeunload", e);
      window.removeEventListener("unload", t);
    };
  }, [B, i]);
  let es = useRef(!1);
  useEffect(() => {
    d?.key && !es.current && (es.current = !0, _$$y2.startTimer(d.key, getSession()));
  }, [d?.key]);
  let eo = getFeatureFlags().figjam_toolbelt_in_page_view;
  let el = jsxs(Fragment, {
    children: [jsx(t9, {
      file: d,
      loadedCommentsProvider: t,
      onCanvasExpired: j,
      children: e
    }), !eo && jsx(_$$u3, {})]
  });
  return jsx(_$$k2, {
    name: "editor",
    alsoTrack: () => ({
      editorType: mapEditorTypeToStringWithObfuscated(h),
      productType: mapEditorTypeToProductType(h),
      uiVersion: x.version,
      fileKey: d?.key || "",
      slideView: C ? atomStoreManager.get(v2) ? "ssv" : "grid" : void 0
    }),
    trackImpressions: !1,
    children: jsx(wG, {
      children: jsxs(Fragment, {
        children: [!f && el, !f && jsx(tm, {
          onWorkshopExpired: j
        }), R && jsx(ie, {
          file: d
        })]
      })
    })
  });
}
function t9({
  children: e,
  file: t,
  loadedCommentsProvider: i,
  onCanvasExpired: n
}) {
  let s = useSelector(e => e.userStateLoaded);
  let o = useSelector(e => e.mirror.appModel.isInitialized);
  let l = selectWithShallowEqual(e => e.comments);
  let {
    anchorPositions,
    boundingBoxPositions,
    DEPRECATED_updateWatchedNodeIds,
    updateWatchedStablePaths
  } = Cn();
  let h = _$$e_();
  let m = getUserId();
  ox({
    file: t,
    onCanvasExpired: n
  });
  let f = function () {
    let {
      error
    } = useErrorBoundaryContext();
    return !!(error instanceof Error && error.message.includes("Out of memory"));
  }();
  let g = jsx(_$$R3, {
    children: jsx(_$$P, {
      children: jsx(ErrorBoundaryCrash, {
        boundaryKey: "InAppPage",
        fallback: f ? jsx(MemoryWarningModal, {}) : errorBoundaryFallbackTypes.DEFAULT_FULL_PAGE,
        hasCustomWASMBuild: y4,
        children: jsx(t5, {
          children: e
        })
      })
    })
  });
  return wrapWithTracking(i ? jsx(NX, {
    userId: m,
    file: t,
    orgId: t?.parentOrgId ?? null,
    activeId: l.activeThread?.id || null,
    anchorPositions,
    boundingBoxPositions,
    DEPRECATED_updateWatchedNodeIds,
    updateWatchedStablePaths,
    getPageIdsForNodes: h,
    children: g
  }) : g, _$$e.EDITOR, null != t ? getFileEditInfo(t) : {}, null != t && s && o);
}
function ie({
  file: e
}) {
  let t = useCurrentUserOrg();
  return useSelector(e => e.modalShown?.type === _$$M2) || !t ? null : jsx(e6, {
    org: t,
    fileKey: e?.key
  });
}
_$$n(() => {});
export const c = $$t80;