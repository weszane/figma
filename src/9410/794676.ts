import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect, useState, useMemo, useRef, useCallback, memo, useLayoutEffect } from "react";
import { wA, d4, Pj } from "../vendor/514228";
import { y as _$$y } from "../905/725962";
import { DP } from "../905/158740";
import { getFeatureFlags } from "../905/601108";
import { DN, x4 } from "../905/657224";
import { fp } from "../figma_app/347146";
import { Tf } from "../905/280919";
import { ji } from "../figma_app/814196";
import { xH, vN } from "../905/63728";
import { Ay, XN } from "../figma_app/778880";
import { R as _$$R } from "../905/103090";
import { I7 } from "../figma_app/594947";
import { k as _$$k2 } from "../905/582200";
import { Hb, tH as _$$tH, H4 } from "../905/751457";
import { lF, xo } from "../figma_app/473493";
import { oQ } from "../figma_app/332085";
import { PQ, sx } from "../figma_app/91703";
import { HQ, gr, vZ, aF } from "../figma_app/147952";
import { NX } from "../figma_app/568591";
import { fu, T8 } from "../figma_app/831799";
import { o as _$$o } from "../905/808775";
import { A as _$$A } from "../vendor/90566";
import { az, sx as _$$sx } from "../905/449184";
import { E3 } from "../figma_app/976749";
import { ds, Dc, oP } from "../figma_app/314264";
import { i as _$$i } from "../1250/937941";
import { Cn, e_ as _$$e_ } from "../figma_app/936061";
import { y as _$$y2 } from "../905/320282";
import { wG } from "../figma_app/504823";
import { K7 } from "../905/346794";
import { xK } from "../905/125218";
import { debounce } from "../905/915765";
import { eD as _$$eD } from "../figma_app/876459";
import { $0 } from "../905/944871";
import { wX } from "../905/964786";
import { x as _$$x, V2, QZ, op, Be, NU, qr, ZT } from "../figma_app/844435";
import { h as _$$h } from "../9410/146161";
import { gN, SH } from "../figma_app/790714";
import { y4 } from "../figma_app/298277";
import { XS } from "../figma_app/178752";
import { q5, MY } from "../figma_app/516028";
import { dq, sZ } from "../905/845253";
import { iZ, TA } from "../905/372672";
import { Bc } from "../figma_app/615482";
import { aTn, kul, h3O, P2e, hMR, Ez5, glU } from "../figma_app/763686";
import { As, CZ, rd, v7 } from "../figma_app/475303";
import { t as _$$t, tx as _$$tx } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { FU } from "../905/26824";
import { b as _$$b } from "../905/985254";
import { Y5 } from "../figma_app/455680";
import { $$, ZN } from "../figma_app/781852";
import { pB } from "../905/395919";
import { d1 } from "../905/766303";
import { ud } from "../905/862913";
import { D2 } from "../905/18797";
import { m0, No } from "../figma_app/141508";
import { l6, He } from "../figma_app/155728";
import { M as _$$M } from "../905/540025";
import { yD } from "../905/92359";
import { YG, Wg } from "../905/921418";
import { M4 } from "../905/713695";
import { x as _$$x2 } from "../figma_app/612938";
import { a4 } from "../figma_app/457074";
import { vY, S7, a7, YN, xk, SO, JG } from "../figma_app/190980";
import { DW } from "../figma_app/578011";
import { nT, Bu } from "../figma_app/53721";
import { lM } from "../905/574958";
import { e0 as _$$e } from "../905/696396";
import { L as _$$L } from "../905/92291";
import { eU as _$$eU, md, zl, Xr } from "../figma_app/27355";
import eO from "../vendor/879378";
import { bt } from "../905/270322";
import { Rs } from "../figma_app/288654";
import { NSA } from "../figma_app/43951";
import { U2 } from "../figma_app/193867";
import { K as _$$K } from "../905/12775";
import { M as _$$M2 } from "../figma_app/333189";
import { $n } from "../905/521428";
import eY from "classnames";
import { w as _$$w } from "../figma_app/922802";
import { s as _$$s2 } from "../cssbuilder/589278";
import { H as _$$H } from "../905/444904";
import { Ay as _$$Ay } from "../905/612521";
import { Ts } from "../905/194276";
import { qB } from "../905/862321";
import { Ob } from "../905/191560";
import { u as _$$u } from "../905/684425";
import { Ji } from "../905/739314";
import { d as _$$d } from "../905/241150";
import { PG } from "../figma_app/453508";
import { ZC } from "../figma_app/39751";
import { S as _$$S } from "../5132/668270";
import { $O, to as _$$to } from "../905/156213";
import { cq, QA } from "../figma_app/107215";
import { nF } from "../figma_app/789";
import { QL } from "../905/609392";
import { T as _$$T } from "../905/868547";
import { K as _$$K2 } from "../905/301652";
import { x as _$$x3 } from "../905/749159";
import { K as _$$K3 } from "../905/443068";
import { C as _$$C } from "../905/866991";
import { A as _$$A2 } from "../905/251970";
import { yl } from "../figma_app/639088";
import { e as _$$e2 } from "../figma_app/630744";
import { v6, kO } from "../figma_app/442916";
import { ox } from "../figma_app/197286";
import { Wz } from "../figma_app/211694";
import { u as _$$u2 } from "../905/14084";
import { Vs } from "../figma_app/930338";
import { Yk } from "../figma_app/644079";
import { ZG } from "../figma_app/840917";
import { p8, dH } from "../figma_app/722362";
import { BI, m0 as _$$m, pt, Ef } from "../figma_app/546509";
import { Yh } from "../figma_app/357047";
import { getSingletonSceneGraph } from "../905/700578";
import { getResourceDataOrFallback } from "../905/419236";
import { am } from "../figma_app/901889";
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
import { h as _$$h2 } from "../figma_app/276445";
import { N as _$$N } from "../figma_app/115586";
import { le } from "../figma_app/527873";
import { DI } from "../figma_app/557318";
import { WR } from "../figma_app/109130";
import { G_ } from "../figma_app/251115";
import { y1 } from "../figma_app/318590";
import { Ky, RS } from "../9410/793186";
import { FC, Wc } from "../figma_app/957070";
import { jS } from "../figma_app/197432";
import { dP, qw, UX } from "../figma_app/740163";
let f = new Set(["-", "="]);
let g = new Set(["-", "=", "f", "o", "p", "r", "s"]);
function _(e) {
  if (!g.has(e.key)) return;
  let t = Ay.mac ? xH.META : xH.CONTROL;
  vN(e, t) ? e.target instanceof Element && e.target.matches(".cm-content") || e.preventDefault() : f.has(e.key) && (t |= xH.SHIFT, vN(e, t) && e.preventDefault());
}
let W = debounce((e, t) => {
  _$$eD.updateFullscreenMenuState({
    pluginMenuData: e,
    widgetMenuData: t
  });
}, 250);
let el = "keyboard-layout-preference";
let ed = (e, t, i) => {
  t && e(FU({
    tab: t
  }));
  i || Y5.triggerAction("toggle-keyboard-shortcuts");
};
let ec = (e, t, i, r) => {
  e(_$$b({
    keyboard_manual_supported_bell: !0
  }));
  e(_$$F.enqueue({
    message: _$$t("keyboard_settings.new_keyboard_name_keyboard_shortcuts_are_available", {
      newKeyboardName: As(t)
    }),
    button: {
      text: _$$t("keyboard_settings.update_keyboard_shortcuts"),
      action: () => ed(e, "layout", r)
    },
    type: el,
    onDismiss: () => {
      e(_$$b({
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
  e(_$$b({
    keyboard_generic_supported_first_bell: !0
  }));
  e(_$$F.enqueue({
    message: _$$t("keyboard_settings.new_keyboard_name_keyboard_shortcuts_are_now_available", {
      newKeyboardName: As(t)
    }),
    button: {
      text: _$$t("keyboard_settings.enable_and_show_new_shortcuts"),
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
    layout: aTn.UNKNOWN,
    detectedLayout: t,
    eventName: "first_generic_detected_supported_keyboard"
  });
};
async function ep(e, t) {
  if (!_$$eD) return null;
  let i = await _$$eD.getKeyboardLayout();
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
let eM = _$$eU(eR.NOT_INITIALIZED);
let eP = bt(e => ({
  state: e,
  fileKey: e.openFile?.key
}));
let eF = [eR.ACTIVE_AFTER_IDLE, eR.ACTIVE_FIRST_TIME];
let eB = _$$eU(null, (e, t, i) => {
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
    ds("active_time_spent_event", fileKey, state, {
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
  let t = wA();
  let i = d4(e => e.auth);
  useEffect(() => {
    t(Ts({
      origin: "request_permissions_entry",
      redirectUrl: _$$Ay.location.pathname,
      formState: qB.ACCOUNT_PICKER,
      accountPickerData: e.accountPickerData
    }));
  }, [t, e.accountPickerData]);
  return jsxs(_$$u, {
    useOriginalSrcFills: !0,
    onBackClick: () => {
      i.formState === qB.ACCOUNT_PICKER ? e.closeAuth() : t(Ts({
        origin: "request_permissions_entry",
        redirectUrl: _$$Ay.location.pathname,
        formState: qB.ACCOUNT_PICKER,
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
  let t = (d4(e => e.authedUsers) ?? {}).byId ?? {};
  let i = e.authedUsers ?? Object.values(t);
  let [s, o] = useState(!1);
  return jsx(_$$w, {
    children: s ? jsx(e4, {
      accountPickerData: {
        authed_users: i,
        authed_user_access_reason: {},
        destination_name: _$$t("mfa_required_modal.account_switcher.destination")
      },
      closeAuth: () => {
        o(!1);
      }
    }) : jsx(_$$H, {
      org: e.org,
      switchAccountsSection: jsx(function () {
        let e = iZ();
        return !e || _$$eD ? null : jsx("div", {
          className: eJ()(_$$s2.mt24.$, "mfa_required--secondaryText--eCIsl"),
          children: _$$tx("mfa_required_modal.account_switcher.text", {
            userEmail: e.email,
            link: jsx($n, {
              variant: "link",
              onClick: () => {
                o(!0);
              },
              children: _$$tx("mfa_required_modal.account_switcher.switch_accounts")
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
  return jsx(fu, {
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
            children: _$$tx("whiteboard.open_sessions.expiry_banner_title")
          })
        })]
      }), jsx(_$$K3, {
        onClick: onDismiss,
        "aria-label": _$$t("general.close"),
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
    let e = wA();
    let t = iZ();
    let i = !t;
    let r = nF();
    let s = r.enabled;
    let o = r.enabled ? r.id : null;
    let l = d4(e => e.mirror.appModel.multiplayerSessionState === kul.JOINED);
    let c = d4(e => e.progressBarState.mode);
    let u = q5()?.isTryFile;
    let p = QL("name");
    useEffect(() => {
      i && u && o && p && l && e(cq({
        name: p
      }));
    }, [i, u, p, o, e, l]);
    let h = useMemo(() => {
      if (!t || null == o) return !1;
      if (u) return !0;
      let e = DN();
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
    let f = MY();
    useEffect(() => {
      if (s && !_$$T(c) && "loaded" === f.status) {
        let t = localStorage.getItem(_$$K2(o));
        i ? t ? QA(t) : e($O({
          type: _$$e2
        })) : f.data?.canEdit || h || e($O({
          type: _$$e2
        }));
      }
    }, [e, i, s, o, c, h, f]);
    let g = q5();
    let _ = g?.key;
    let x = g?.name;
    useEffect(() => {
      if (s && !_$$T(c) && i && u && _ && x === _$$t("fullscreen.fullscreen_view_selector.untitled")) {
        let t = localStorage.getItem(_$$K2(o));
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
    let r = wA();
    let s = iZ();
    let o = q5();
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
    let u = nF();
    let p = u.enabled;
    let h = ZC(p);
    let m = u.enabled ? u.until.valueOf() : null;
    let f = useRef(null);
    let g = useCallback(() => {
      if (!d) {
        h3O?.reconnect(!1);
        userCanEditFile || i(!0);
        return;
      }
      r(Ts({
        origin: "logged_out_footer",
        formState: qB.SIGN_UP,
        redirectUrl: _$$Ay.location.pathname
      }));
      r(_$$to({
        type: _$$x3,
        data: {
          headerText: _$$t("whiteboard.open_sessions.expiry_modal_title", {
            file_name: l || ""
          }),
          subtitle: _$$t("whiteboard.open_sessions.expiry_modal_subtext"),
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
      null != h && p !== h && (p ? h3O?.reconnect(!1) : (f.current && clearTimeout(f.current), g()));
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
  let t = d4(e => e.openFile);
  let i = t ? t.key : "";
  let s = t?.parentOrgId || "";
  let o = useRef(null);
  let d = wA();
  let c = md(_$$h2);
  let u = d4(e => e.openFile?.canEdit ?? !1);
  let p = p8("isReadOnly");
  let h = dq();
  let f = E3();
  let g = ZC(f);
  f !== g && g && d(PQ([]));
  G_(i, s);
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
    XN && document.addEventListener("focusout", e);
    document.documentElement.classList.add(FC);
    document.body.classList.add(Wc);
    d(_J());
    let t = window.FigmaMobile;
    t && (t._get_memory_stats = () => {
      let e = P2e?.getImageMemory();
      let t = P2e?.getHeapMemoryBreakdown();
      var i = {
        coreJsBufferMemory: hMR?.getJsBufferMemory() || 0,
        coreLocalMaxUsedHeapMemory: hMR?.getLocalMaxUsedHeapMemory() || 0,
        coreMaxUsedHeapMemory: hMR?.getMaxUsedHeapMemory() || 0,
        coreTotalUsedHeapMemory: hMR?.getTotalUsedHeapMemory() || 0,
        fullscreenCompressedImages: e?.compressedImages ?? 0,
        fullscreenUncompressedImagesArrayBuffers: e?.uncompressedArrayBuffer ?? 0,
        fullscreenUncompressedImagesImageBitmap: e?.uncompressedImageBitmap ?? 0
      };
      let r = hMR?.getMemStatsSummary() ?? void 0;
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
        reservedWasmMemory: le() || 0,
        rendererGpuMemory: n(P2e?.getRendererGpuMemory()) || 0,
        rendererBreakdown: function (e) {
          return {
            textures: n(e.textures),
            vertexBuffers: n(e.vertexBuffers),
            renderBuffers: n(e.renderBuffers),
            uniformBuffers: n(e.uniformBuffers)
          };
        }(P2e?.getRendererMemoryBreakdown()) ?? void 0,
        memStats: r
      };
    });
    return () => {
      XN && document.removeEventListener("focusout", e);
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
    _$$eD && _$$eD.setEditFilePermissions(u);
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
  "hidden" === document.visibilityState && (x4?.clear(), _$$L.cleanupSession());
};
export function $$t80({
  children: e,
  loadedCommentsProvider: t = !0
}) {
  useEffect(() => {
    getFeatureFlags().datadog_rum_fullscreen ? Tf.enableEventSending({
      allowResourceTracking: !xK.isColdBoot
    }) : Tf.disableEventSendingUnlessDebugEnabled();
  }, []);
  let i = wA();
  let d = q5();
  lF(d?.key ?? "");
  M4.Folder.useValue(d?.folderId);
  let h = d4(e => e.selectedView.editorType);
  let [f, g] = useState(!1);
  let x = DP();
  let C = sO();
  let S = xo();
  let j = useCallback(() => {
    jS();
    g(!0);
  }, []);
  let R = function ({
    onCanvasExpired: e
  }) {
    let t = d4(e => U2(e.selectedView));
    let i = TA();
    let r = dq();
    let [s, o] = useState(!1);
    let d = _$$K();
    let c = Rs(NSA, {
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
      d && p && az.trackDefinedEvent("mfa.file_access_without_restriction", {
        orgId: r ?? void 0,
        userId: i ?? void 0,
        fileKey: t ?? void 0
      });
    }, [d, p, r, i, t]);
    return !!getFeatureFlags().mfa_for_guests && s;
  }({
    onCanvasExpired: j
  });
  let B = d4(e => e.mergingStatus);
  useEffect(() => {
    if (getFeatureFlags().ce_suppress_browser_keys) {
      document.addEventListener("keydown", _, !0);
      return () => void document.removeEventListener("keydown", _, !0);
    }
  }, []);
  (function () {
    let e = useRef();
    let t = useRef();
    let i = wA();
    let r = d4(e => e.userFlags);
    let s = d4(e => !!e.user);
    let o = function (e, t) {
      let i = d4(e => e.mirror.appModel.showKeyboardShortcuts);
      let r = d4(e => e.user?.created_at);
      let s = useMemo(() => {
        let e = new Date("2022-11-14").getTime();
        return null != r && new Date(r).getTime() >= e;
      }, [r]);
      return useCallback((r, n, a, o) => {
        t.keyboard_user_first_detection || o || !s ? r !== aTn.US_QWERTY || o || n !== aTn.UNKNOWN ? r && n !== aTn.UNKNOWN ? t.keyboard_manual_supported_bell || ec(e, r, n, i) : r && n === aTn.UNKNOWN ? t.keyboard_generic_supported_first_bell || eu(e, r, i) : CZ({
          layout: n,
          detectedLayoutStr: a ?? void 0,
          eventName: "keyboard_change_no_bell"
        }) : CZ({
          layout: r,
          eventName: "ignore_us_qwerty"
        }) : (e(_$$b({
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
        if (_$$eD) {
          let t = await ep(o, e.current ?? null);
          e.current = t;
        } else {
          let e = await eh(o, t.current ?? null);
          t.current = e;
        }
      }
    }, [o, s]);
    useEffect(() => {
      Y5.isReady() ? l() : Y5.onReady().then(() => setTimeout(l, 500));
    }, []);
  })();
  XS();
  (function () {
    let e = Pj();
    let t = d4(d1);
    let i = d4(m0);
    let r = d4(No);
    let s = d4(e => e.library.publishedByLibraryKey);
    let o = q5();
    let l = d4(e => e.fileVersion);
    let d = d4(e => e.loadingState);
    let c = d4(e => e.library.local);
    let u = d4(e => e.library.assetsPanelSearch.shouldSearchDefaultLibraries);
    let p = ud();
    let h = d4(e => e.folders);
    let m = l6();
    let f = He();
    let g = d4(e => e.library.assetsPanelSearch.query);
    let _ = d4(e => e.library.assetsPanelSearch.searchOptions);
    let x = D2(d, yD(o?.key || ""));
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
  _$$eD && function () {
    let e = _$$x();
    let t = V2();
    let i = QZ();
    let r = d4(e => e.mirror.appModel.isReadOnly);
    let s = d4(e => e.openFile);
    let o = d4(e => e.localPlugins);
    let l = E3();
    let d = op();
    let c = d4(e => e.installedPluginVersions.plugins);
    let u = d4(e => e.mirror.selectedStyleProperties?.selectedWidgetInfo);
    let p = d4(e => e.mirror.appModel.activeTextReviewPlugin);
    let h = d4(e => e.publishedPlugins);
    let m = d4(e => e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null);
    let f = Be();
    let g = f.orgPlugins;
    let _ = f.orgWidgets;
    let x = _$$h("plugin");
    let y = _$$h("widget");
    let b = NU();
    let C = qr();
    let v = ZT();
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
    let e = E3();
    let t = useCallback(() => {
      _$$sx("display_redline", {
        source: "keyboard_shortcut",
        mode: e
      });
    }, [e]);
    let i = _$$A(t, 1e3, {
      leading: !0,
      trailing: !1
    });
    let r = d4(e => e.usedKeyboardShortcuts["measure-to-selection"] || 0);
    let s = useRef(r);
    useEffect(() => {
      s.current !== r && (s.current = r, i());
    }, [r, i]);
  })();
  (function () {
    let e = dP();
    let t = qw();
    let i = UX();
    let r = document.documentElement.style;
    useLayoutEffect(() => {
      r.setProperty("--left-panel-width", `${e}px`);
      getFeatureFlags().properties_panel_resize_lag_fix && (r.setProperty("--properties-panel-width", `${t}px`), r.setProperty("--dev-handoff-panel-width", `${i}px`));
    }, [e, t, i, r]);
  })();
  I7("exp_aa_test_fullscreen_view").getConfig();
  (function () {
    let e = wA();
    let t = _$$_();
    let i = BI();
    let [r, s] = useState(!1);
    let o = d4(e => e.multiplayer);
    let l = d4(e => e.mirror.appModel.multiplayerSessionState === kul.JOINED);
    !function () {
      let e = q5();
      let t = window.FigmaMobile;
      let i = rE();
      let r = C3();
      let s = wA();
      let o = am();
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
          Y5.triggerActionInUserEditScope("page-delete", {
            args: {
              nodeId: e
            }
          });
          Y5.commit();
        });
      }, [t]);
      useEffect(() => {
        t && (t._create_page = () => {
          i(null);
        });
      }, [t, i]);
    }();
    let d = useCallback(t => {
      h3O?.observeUser(t);
      o && o.observingSessionID !== t && o.sessionID !== t && e(_$$b({
        aware_of_observation_mode: !0
      }));
    }, [o, e]);
    useEffect(() => {
      t && !r && i?.shouldOptimizeForIpadApp && l && !Ez5?.defaultToolIsHandSelect() && (s(!0), Y5.triggerAction("set-tool-hand", null));
    }, [t, i, r, s, l]);
    let c = d4(({
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
        let e = ZG();
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
    let h = d4(e => Yh(e.mirror.appModel, "undo"));
    let m = d4(e => Yh(e.mirror.appModel, "redo"));
    useEffect(() => {
      if (i?.updateUndoEnabled && i.updateUndoEnabled(h), i?.updateRedoEnabled && i.updateRedoEnabled(m), u) {
        let t = t => {
          e(_$$F.dequeue({
            matchType: "undo_redo_gesture"
          }));
          e(_$$F.enqueue({
            message: t,
            type: "undo_redo_gesture",
            timeoutOverride: 750
          }));
        };
        u._trigger_undo = () => {
          h && (Y5.triggerActionInUserEditScope("undo"), t(_$$t("fullscreen_actions.undo")));
        };
        u._trigger_redo = () => {
          m && (Y5.triggerActionInUserEditScope("redo"), t(_$$t("fullscreen_actions.redo")));
        };
      }
    }, [i, e, h, m, u]);
    let f = pt();
    useEffect(() => {
      f && (f._set_ui_visibility = e => {
        e !== c && Y5.triggerAction("toggle-ui");
      });
    }, [f, c]);
    let g = Yk();
    useEffect(() => {
      i?.updateDLTHeight && i.updateDLTHeight(g);
    }, [g, i]);
    let _ = dH();
    let x = pK(_);
    let y = Ef();
    let b = d4(e => e.mirror?.appModel.isReadOnly);
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
      glU?.updateNativeContextMenuVisibility(e);
    }, u._override_document_visibility_state = _$$R2, u._set_allow_draw_with_touch = e => {
      glU?.setAllowDrawWithTouch(e);
    }, u._unlock_all_objects = () => {
      Y5.triggerActionInUserEditScope("unlock-all");
    }, u._zoom_reset = () => {
      Y5.triggerActionInUserEditScope("zoom-reset");
    }, u._zoom_to_fit = () => {
      Y5.triggerActionInUserEditScope("zoom-to-fit");
    }, u._present = () => {
      h3O?.startPresenting();
    }, u._find_in_file = () => {
      Y5.triggerActionInUserEditScope("canvas-search");
    }, u._copy = () => {
      Y5.triggerActionInUserEditScope("copy");
    }, u._cut = () => {
      Y5.triggerActionInUserEditScope("cut");
    }, u._paste = () => {
      Y5.triggerActionInUserEditScope("paste");
    }, u._add_media = e => {
      let t = e.map(e => {
        let {
          encoded_data,
          mime_type
        } = e;
        return new Blob([Vs(encoded_data)], {
          type: mime_type
        });
      });
      let i = Y5.fileArrayToString(t);
      glU?.handleOpenFromJsonString(i, wu.MOBILE_NATIVE_NAVBAR);
    }, u._get_zoom_scale = () => glU?.getViewportZoomScale() ?? 1);
    f && (f._open_timer = () => {
      zl.set(Qs, {
        type: "OPEN"
      });
      _$$sx(Fn.OPEN, {
        source: OO.IPAD_MENU
      });
    }, f._close_timer = () => {
      zl.set(Qs, {
        type: "CLOSE"
      });
    }, f._activate_multiselect_mode = () => {
      Jm("set-tool-multiselect");
    }, f._deactivate_multiselect_mode = () => {
      Jm("set-tool-default");
    });
  })();
  a4();
  fp();
  (function () {
    let e = wA();
    let [t, i] = Wz("nux_seat_selection_show_confirmation", null);
    useEffect(() => {
      t && ("autoApproved" in t && "seatType" in t && e(_$$to({
        type: _$$u2,
        data: {
          ...t
        }
      })), i(null));
    }, [t, e, i]);
  })();
  _$$i();
  useEffect(() => Bc, []);
  DW();
  useEffect(() => (h === nT.Whiteboard && Ay.isMeetDevice && "undefined" != typeof document && document.addEventListener("visibilitychange", t7), () => {
    document.removeEventListener("visibilitychange", t7);
  }), [h]);
  let Y = _$$o();
  useEffect(() => {
    if (Y) {
      i(HQ({
        storeInRecentsKey: Y
      }));
      h === nT.Whiteboard && (i(gr({
        storeInRecentsKey: Y
      })), i(vZ({
        storeInRecentsKey: Y
      })));
      h !== nT.DevHandoff && i(aF({
        storeInRecentsKey: Y
      }));
      window.addEventListener("storage", e, !1);
      return () => {
        window.removeEventListener("storage", e, !1);
      };
    }
    function e(e) {
      switch (e.key) {
        case vY:
        case S7:
        case a7:
          i(HQ({
            storeInRecentsKey: Y
          }));
          break;
        case YN:
        case xk:
          i(aF({
            storeInRecentsKey: Y
          }));
          break;
        case SO:
          i(gr({
            storeInRecentsKey: Y
          }));
          break;
        case JG:
          i(vZ({
            storeInRecentsKey: Y
          }));
      }
    }
  }, [i, h, Y]);
  let er = TA();
  useEffect(() => {
    er && i(oQ());
  }, [i, er]);
  useEffect(() => {
    S && K7();
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
        i(sx({
          name: "Unload During Merge Warning Shown"
        }));
        return !1;
      }
    };
    let t = () => {
      B === _$$y.MERGING && i(sx({
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
    d?.key && !es.current && (es.current = !0, _$$y2.startTimer(d.key, lM()));
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
      editorType: Bu(h),
      productType: Dc(h),
      uiVersion: x.version,
      fileKey: d?.key || "",
      slideView: C ? zl.get(v2) ? "ssv" : "grid" : void 0
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
  let s = d4(e => e.userStateLoaded);
  let o = d4(e => e.mirror.appModel.isInitialized);
  let l = _$$R(e => e.comments);
  let {
    anchorPositions,
    boundingBoxPositions,
    DEPRECATED_updateWatchedNodeIds,
    updateWatchedStablePaths
  } = Cn();
  let h = _$$e_();
  let m = TA();
  ox({
    file: t,
    onCanvasExpired: n
  });
  let f = function () {
    let {
      error
    } = Hb();
    return !!(error instanceof Error && error.message.includes("Out of memory"));
  }();
  let g = jsx(_$$R3, {
    children: jsx(_$$P, {
      children: jsx(_$$tH, {
        boundaryKey: "InAppPage",
        fallback: f ? jsx(PG, {}) : H4.DEFAULT_FULL_PAGE,
        hasCustomWASMBuild: y4,
        children: jsx(t5, {
          children: e
        })
      })
    })
  });
  return T8(i ? jsx(NX, {
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
  }) : g, _$$e.EDITOR, null != t ? oP(t) : {}, null != t && s && o);
}
function ie({
  file: e
}) {
  let t = sZ();
  return d4(e => e.modalShown?.type === _$$M2) || !t ? null : jsx(e6, {
    org: t,
    fileKey: e?.key
  });
}
_$$n(() => {});
export const c = $$t80;