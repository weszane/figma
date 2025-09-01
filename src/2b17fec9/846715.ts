import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, memo, useCallback, useEffect, useMemo, useContext, useRef, useReducer } from "react";
import { wA, d4 } from "../vendor/514228";
import { lQ } from "../905/934246";
import { U1 } from "../figma_app/343967";
import { NLJ, glU, lyf, cxo, V5h, VTL, m1T } from "../figma_app/763686";
import { md, fp, Xr } from "../figma_app/27355";
import c from "classnames";
import { parsePxInt } from "../figma_app/783094";
import { wY } from "../figma_app/708845";
import { l as _$$l } from "../905/745972";
import { Ay } from "../figma_app/778880";
import { X as _$$X } from "../figma_app/776368";
import { tH, H4 } from "../905/751457";
import { t as _$$t, tx as _$$tx } from "../905/303541";
import { Dm } from "../figma_app/8833";
import { fu } from "../figma_app/831799";
import { xn } from "../figma_app/644079";
import { C_ } from "../figma_app/290668";
import { LR, gR } from "../figma_app/120210";
import { XM } from "../905/486443";
import { aV, dH } from "../figma_app/722362";
import { BI } from "../figma_app/546509";
import { tS as _$$tS, q5 } from "../figma_app/516028";
import { FProductAccessType } from "../figma_app/191312";
import { wH } from "../figma_app/680166";
import { t as _$$t2 } from "../905/192333";
import { C as _$$C } from "../figma_app/859828";
import { $J, Z9, qv } from "../figma_app/634656";
import { O as _$$O, X as _$$X2 } from "../9410/435916";
import { AE, Yg } from "../9410/757252";
import { gT } from "../figma_app/822177";
import { fK, s2, HY, RZ } from "../figma_app/300024";
import { L as _$$L } from "../figma_app/634288";
import { m as _$$m } from "../2b17fec9/405130";
import { a as _$$a } from "../9410/510768";
import { w as _$$w } from "../figma_app/461518";
import { g as _$$g } from "../figma_app/391708";
import { z as _$$z } from "../figma_app/849005";
import { qW } from "../figma_app/27927";
import { Ao } from "../figma_app/751648";
import { $n } from "../905/521428";
import { a as _$$a2 } from "../905/948337";
import { s as _$$s } from "../cssbuilder/589278";
import { to as _$$to } from "../905/156213";
import { PE } from "../905/15667";
import { YG } from "../figma_app/186402";
import { FL, hv } from "../figma_app/544744";
import { p as _$$p } from "../9410/505291";
import { Q as _$$Q } from "../1250/220026";
import { V as _$$V } from "../905/355181";
import { c as _$$c } from "../905/370443";
import { kD, tS as _$$tS2 } from "../figma_app/622574";
import { b4 } from "../figma_app/106207";
import { vt } from "../905/862883";
import { RJ } from "../figma_app/869006";
import { _ as _$$_ } from "../905/410717";
import { n3, Tc } from "../905/797478";
import { Ib } from "../905/129884";
import { N as _$$N } from "../figma_app/57000";
import { hx, aQ, YB, lq, cG, wn } from "../figma_app/630194";
import { I as _$$I, J as _$$J } from "../figma_app/552397";
import { wB, jN, rX, UJ, OS, ej as _$$ej, Uf } from "../figma_app/801324";
import { Z as _$$Z } from "../figma_app/900567";
import { Lt, sD, fp as _$$fp, qG, Xn, wz, EY, cd, Mg, Bp, eB as _$$eB, gz, Sk, qf, z6, ac, r6, dk, tN, ZS, ph, s$, fT, cz, kl, Q$, o9, ES, Uq, iU, wF, zb, AT, HG, E$, Qs, i0, OA, z as _$$z2 } from "../figma_app/731560";
import { kf } from "../figma_app/391056";
import { A as _$$A } from "../svg/897148";
import { A as _$$A2 } from "../svg/366068";
import { sx } from "../905/941192";
import { S as _$$S } from "../figma_app/403368";
import { N as _$$N2, Q as _$$Q2 } from "../figma_app/287368";
import { uk, VQ, fn } from "../figma_app/580087";
import { oh, c5, Yg as _$$Yg } from "../905/526509";
import { nS, pw, Wp } from "../figma_app/274383";
import { q as _$$q } from "../9410/861323";
import { H as _$$H } from "../figma_app/7677";
import { t as _$$t3 } from "../figma_app/532797";
import { X as _$$X3 } from "../figma_app/668312";
import { f as _$$f } from "../905/809171";
import { Pt } from "../figma_app/806412";
import { F as _$$F } from "../figma_app/832508";
import { z as _$$z3 } from "../figma_app/47967";
import { N as _$$N3 } from "../figma_app/176280";
import { XS, Iy } from "../figma_app/95367";
import { kF } from "../figma_app/48566";
import { lW, uh } from "../figma_app/370763";
import { rM } from "../figma_app/241541";
import { wg } from "../figma_app/101956";
import { aE } from "../figma_app/433401";
import { a as _$$a3 } from "../2b17fec9/927391";
import { GI, qL } from "../905/125333";
import { F as _$$F2 } from "../905/989956";
import { eq as _$$eq, bm, vp } from "../figma_app/671837";
import { W as _$$W } from "../905/866915";
import { s as _$$s2 } from "../figma_app/30255";
import { XN, ti as _$$ti, Qw, br } from "../figma_app/937735";
import { B as _$$B } from "../figma_app/397954";
import { bu, ri, s3, sT } from "../figma_app/955650";
import { i as _$$i } from "../figma_app/109163";
import { xJ } from "../2b17fec9/446151";
import { l7 } from "../905/189185";
import { TS, AF, V_, zS, MV } from "../figma_app/153399";
import { k as _$$k } from "../905/545760";
import { bL } from "../905/575478";
import { q as _$$q2 } from "../905/932270";
import { getFeatureFlags } from "../905/601108";
import { H0 } from "../figma_app/191804";
import { Yv } from "../figma_app/616107";
import { Qv } from "../figma_app/967873";
import { s as _$$s3 } from "../figma_app/666387";
import { kk, cd as _$$cd } from "../figma_app/650460";
import { V as _$$V2 } from "../figma_app/177090";
import { KF } from "../figma_app/465776";
import { n6 } from "../9410/67768";
import { f7, az } from "../2b17fec9/523222";
import { s as _$$s4 } from "../2b17fec9/641273";
import { xI } from "../figma_app/355754";
import { Y5 } from "../figma_app/455680";
import { Yh } from "../figma_app/357047";
import { ejp, nnJ } from "../figma_app/27776";
var u = c;
function Q(e) {
  let t = wA();
  let [i, s] = useState(!0);
  let o = _$$tS();
  let l = FL();
  let {
    getPlanAndPlanUser,
    getIsEligibleForProvisionalAccess
  } = wH();
  let {
    plan,
    planUser
  } = getPlanAndPlanUser(FProductAccessType.WHITEBOARD);
  if (!i) return null;
  let h = e.shouldShowCurf ? jsx($n, {
    variant: "primary",
    onClick: () => {
      if (!planUser || !plan) return;
      let e = FProductAccessType.WHITEBOARD;
      t(_$$to({
        type: YG,
        data: {
          planParentId: plan.key.parentId,
          planTier: plan.tier,
          planUserPermission: planUser.permission,
          licenseType: e,
          fileKey: o ?? "",
          entryPoint: PE.CurfProvisionalAccessBanner,
          getIsEligibleForProvisionalAccess
        },
        showModalsBeneath: !0
      }));
    },
    children: _$$t("fullscreen.toolbar_banner.provisional_access.curf.cta")
  }) : void 0;
  return jsx(_$$p, {
    leftContent: {
      icon: jsx(_$$a2, {})
    },
    content: jsx("div", {
      children: jsx("span", {
        className: _$$s.textBodyLargeStrong.$,
        children: e.text
      })
    }),
    trackingContext: "Provisional Access DLT Banner",
    isFloatingBanner: !0,
    shouldHide: l,
    onClose: () => {
      s(!1);
    },
    rightContent: h,
    bannerType: "provisional_access"
  });
}
let eo = memo(function () {
  let e = aV();
  let t = kD();
  let i = b4();
  let r = q5();
  if (!_$$tS2() || e) return null;
  let a = {
    icon: jsx(_$$Q, {})
  };
  let s = t?.publishedByUser?.handle ? jsx("div", {
    children: _$$tx("whiteboard.delightful_toolbar.custom_template_banner.youre_viewing_a_team_template", {
      userName: jsx("b", {
        children: t?.publishedByUser.handle
      })
    })
  }) : _$$tx("whiteboard.delightful_toolbar.custom_template_banner.youre_viewing_a_template");
  return jsx(_$$p, {
    leftContent: a,
    content: s,
    rightContent: jsx(el, {
      onCopyClick: () => {
        t && r && i({
          templateIdentifier: {
            type: vt.TeamTemplate,
            file_key: t.fileKey
          },
          templateName: t.name
        });
      }
    }),
    trackingContext: "Custom Template Notice DLT Banner"
  });
});
function el(e) {
  return jsxs("div", {
    className: _$$s.flex.gap8.itemsCenter.mr6.$,
    children: [jsx(RJ, {
      viewOnly: !0,
      variant: "brand-secondary"
    }), jsx(_$$V, {
      onClick: e.onCopyClick,
      variant: "primary",
      trackingProperties: {
        trackingDescriptor: _$$c.USE_IN_NEW_FILE
      },
      children: _$$tx("whiteboard.delightful_toolbar.custom_template_banner.new_file_button")
    })]
  });
}
let eg = "select-and-hand";
let ej = {
  offsetX: -8,
  offsetY: 0
};
function eb() {
  let e = d4(e => e.mirror.appModel.currentTool === NLJ.SELECT);
  let t = LR();
  let i = useCallback(() => {
    t(!1);
    glU?.triggerActionInUserEditScope("set-tool-default-figjam", {
      source: fK
    });
  }, [t]);
  return jsx(_$$I, {
    ButtonLayout: _$$Z,
    className: Lt,
    "data-tooltip": "set-tool-default-desc-figjam",
    "data-tooltip-type": Ib.LOOKUP,
    hasOpenSubmenu: !1,
    isEnabledForViewers: !0,
    isSelected: e,
    onClick: i,
    recordingKey: hx("select"),
    toolType: "select",
    tooltipLocation: "left",
    tooltipOffset: ej,
    children: jsx(wB, {})
  });
}
function ey() {
  let e = d4(e => e.mirror.appModel.currentTool === NLJ.HAND);
  let t = LR();
  let i = useCallback(() => {
    t(!1);
    glU?.triggerActionInUserEditScope("set-tool-hand", {
      source: fK
    });
  }, [t]);
  return jsx(_$$I, {
    ButtonLayout: _$$Z,
    className: sD,
    "data-tooltip": "set-tool-hand",
    "data-tooltip-type": Ib.LOOKUP,
    hasOpenSubmenu: !1,
    isEnabledForViewers: !0,
    isSelected: e,
    onClick: i,
    onboardingKey: _$$N,
    recordingKey: hx("hand"),
    toolType: "hand",
    tooltipLocation: "left",
    tooltipOffset: ej,
    children: jsx(jN, {})
  });
}
function ev() {
  return jsxs("div", {
    className: _$$fp,
    "data-element-target": eg,
    children: [jsx(eb, {}), jsx(ey, {})]
  });
}
let eS = memo(function (e) {
  let {
    dltRef
  } = e;
  let i = aV();
  let [a, s] = useState(!0);
  useEffect(() => {
    let e = dltRef.current;
    if (!e) return;
    let i = e => {
      n3(e.target, Tc(eg)) || s(!0);
    };
    e.addEventListener("click", i);
    return () => e.removeEventListener("click", i);
  }, [dltRef]);
  let o = useMemo(() => ({
    icon: jsx(_$$_, {}),
    text: _$$t("whiteboard.delightful_toolbar.view_only")
  }), []);
  let l = useMemo(() => _$$tx("whiteboard.delightful_toolbar.version_history_banner_text", {
    selectIcon: jsx(kf, {
      icon: _$$A2
    }),
    handIcon: jsx(kf, {
      icon: _$$A
    })
  }), []);
  return i || !a ? null : jsx(_$$p, {
    leftContent: o,
    content: l,
    trackingContext: "Version history DLT Banner",
    onClose: () => s(!1)
  });
});
let eA = memo(function (e) {
  let {
    dltRef
  } = e;
  let i = aV();
  let [a, s] = useState(!0);
  let o = _$$N2() === _$$Q2.REQUEST_NEEDED;
  useEffect(() => {
    let e = dltRef.current;
    if (!e || o) return;
    let i = e => {
      n3(e.target, Tc(eg)) || s(!0);
    };
    e.addEventListener("click", i);
    return () => e.removeEventListener("click", i);
  }, [dltRef, o]);
  let l = useMemo(() => o ? {
    icon: jsx(_$$_, {})
  } : {
    icon: jsx(_$$_, {}),
    text: _$$t("whiteboard.delightful_toolbar.view_only")
  }, [o]);
  let [d, c, u] = function (e) {
    let [t, i] = useState(!1);
    let [n, a] = useState(!1);
    let [s, o] = useState(!1);
    useEffect(() => {
      if (!e) return;
      let t = setTimeout(() => {
        i(!0);
        setTimeout(() => i(!1), 200);
      }, 1e3);
      let n = setTimeout(() => {
        a(!0);
        setTimeout(() => a(!1), 200);
      }, 1100);
      let r = setTimeout(() => {
        o(!0);
        setTimeout(() => o(!1), 200);
      }, 1200);
      return () => {
        clearTimeout(t);
        clearTimeout(n);
        clearTimeout(r);
      };
    }, [e]);
    return [t, n, s];
  }(a);
  let p = _$$S();
  let h = !!q5()?.org?.figjamDisabledAt;
  let m = useMemo(() => p && h ? _$$tx("whiteboard.delightful_toolbar.view_only_banner_text_figjam_disabled_by_org_no_chat", {
    commentKey: jsx(uk, {
      isPressed: d
    }),
    emoteKey: jsx(VQ, {
      isPressed: c
    })
  }) : p ? o ? _$$tx("whiteboard.delightful_toolbar.view_only_banner_text_no_chat_in_exp", {
    commentKey: jsx(uk, {
      isPressed: d
    }),
    emoteKey: jsx(VQ, {
      isPressed: c
    })
  }) : _$$tx("whiteboard.delightful_toolbar.view_only_banner_text_no_chat", {
    commentKey: jsx(uk, {
      isPressed: d
    }),
    emoteKey: jsx(VQ, {
      isPressed: c
    })
  }) : h ? _$$tx("whiteboard.delightful_toolbar.view_only_banner_text_figjam_disabled_by_org", {
    commentKey: jsx(uk, {
      isPressed: d
    }),
    chatKey: jsx(fn, {
      isPressed: c
    }),
    emoteKey: jsx(VQ, {
      isPressed: u
    })
  }) : o ? _$$tx("whiteboard.delightful_toolbar.view_only_banner_text_in_exp", {
    commentKey: jsx(uk, {
      isPressed: d
    }),
    chatKey: jsx(fn, {
      isPressed: c
    }),
    emoteKey: jsx(VQ, {
      isPressed: u
    })
  }) : _$$tx("whiteboard.delightful_toolbar.view_only_banner_text", {
    commentKey: jsx(uk, {
      isPressed: d
    }),
    chatKey: jsx(fn, {
      isPressed: c
    }),
    emoteKey: jsx(VQ, {
      isPressed: u
    })
  }), [p, h, d, c, u, o]);
  let f = useMemo(() => jsx("div", {
    style: sx.add({
      margin: "0 5px"
    }).$,
    children: jsx(RJ, {
      viewOnly: !0,
      variant: "primary",
      recordingKey: "dltBannerViewPermission",
      hideViewOnlyText: !0
    })
  }), []);
  if (i || !a) return null;
  let _ = o ? () => {
    s(!1);
    e.onClose && e.onClose(!0);
  } : void 0;
  return jsx(_$$p, {
    leftContent: l,
    content: m,
    rightContent: f,
    trackingContext: "View-only DLT Banner",
    onClose: _,
    isFloatingBanner: o
  });
});
function eX() {
  let e = aV();
  let t = md(wg);
  let [i, a] = fp(gT);
  let s = _$$N2();
  return (useEffect(() => {
    !e && i && (t || s === _$$Q2.NO_REQUEST_NEEDED) && a(!1);
  }, [e, t, s, i, a]), e || t || s === _$$Q2.DATA_LOADING) ? jsx(Fragment, {}) : jsx("div", {
    className: i ? qG : Xn,
    children: jsx(XS, {
      "data-onboarding-key": aE,
      children: jsx(Iy, {
        children: jsx(kF, {
          editorTheme: "whiteboard",
          children: jsx(eq, {})
        })
      })
    })
  });
}
function eq() {
  let e = _$$a3();
  let {
    activeToolId,
    activateTool,
    topLevelMode,
    editModeType
  } = rM(lW);
  let s = topLevelMode === lyf.HISTORY;
  let o = uh();
  let d = _$$z3(editModeType);
  return jsxs(Fragment, {
    children: [d && jsxs(Fragment, {
      children: [jsx(_$$N3, {
        toolId: NLJ.SELECT,
        icon: jsx(_$$H, {}),
        onActivateTool: activateTool,
        activeToolId,
        tooltipText: _$$t("fullscreen_actions.set-tool-default"),
        tooltipShortcut: o(NLJ.SELECT)
      }), jsx(_$$N3, {
        toolId: NLJ.HAND,
        icon: jsx(_$$t3, {}),
        onActivateTool: activateTool,
        activeToolId,
        tooltipText: _$$t("fullscreen_actions.set-tool-hand"),
        tooltipShortcut: o(NLJ.HAND)
      })]
    }), !s && jsx(_$$N3, {
      toolId: NLJ.COMMENTS,
      icon: e > 0 ? jsx(_$$X3, {}) : jsx(_$$f, {}),
      onActivateTool: activateTool,
      activeToolId,
      recordingKey: Pt("toolbarView", "toolComment"),
      tooltipText: _$$t("fullscreen_actions.comment"),
      tooltipShortcut: o(NLJ.COMMENTS)
    }), jsx(_$$F, {})]
  });
}
let e9 = memo(function ({
  optimizeForCompactSize: e
}) {
  let [t, i] = fp(oh);
  let a = LR();
  let s = bu();
  let o = ri();
  let c = s3();
  let p = md(_$$B);
  let h = c && p === cxo.PENCIL_TOOL;
  let m = s || h;
  let [f, _] = useState(!1);
  let {
    paints
  } = md(GI);
  let [g, j] = useState(NLJ.VECTOR_PENCIL);
  let [, b] = useState(NLJ.VECTOR_PENCIL);
  let y = g === NLJ.VECTOR_PENCIL ? "set-tool-pencil" : g === NLJ.HIGHLIGHTER ? "set-tool-highlighter" : g === NLJ.ERASER ? "set-tool-eraser" : g === NLJ.WASHI_TAPE ? "set-tool-washi-tape" : "";
  useEffect(() => {
    o && o !== g && (b(g), j(o));
  }, [o, g, j, b]);
  let v = useCallback(() => {
    a(!1);
    s ? glU?.triggerActionInUserEditScope("set-tool-default", {
      source: fK
    }) : (glU?.triggerActionInUserEditScope(y, {
      source: fK
    }), i({
      type: "open",
      tool: "pencil"
    }));
  }, [i, s, y, a]);
  let {
    isHovered,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onTouchStart,
    onTouchEnd
  } = _$$W(v, !1, !1);
  let N = "set-tool-pencil" === y ? "set-tool-marker" : y;
  let A = _$$F2.format(paints?.[0]?.color);
  let O = jsx(_$$eq, {
    action: y
  });
  let k = hx("pencil");
  let R = hv();
  return jsxs(XN, {
    alignment: "LEFT",
    onMouseEnter: () => {
      "open" === t.state && "pencil" === t.tool || R || _(!0);
    },
    onMouseLeave: () => {
      _(!1);
    },
    children: [jsx(_$$ti, {
      isSelected: isHovered || m,
      explicitWidth: bm,
      shouldCenterContent: !0,
      noScaleAnimation: !0,
      children: jsx(_$$J, {
        className: wz,
        "data-tooltip": N,
        "data-tooltip-type": Ib.LOOKUP,
        hasOpenSubmenu: m,
        isHovered,
        isSelected: m,
        onClick: v,
        onMouseEnter,
        onMouseLeave,
        onMouseMove,
        onTouchEnd,
        onTouchStart,
        recordingKey: k,
        toolType: "pencil",
        tooltipOffset: {
          offsetX: void 0,
          offsetY: m ? -4 : -22
        },
        children: jsxs("div", {
          className: EY,
          children: [jsx("div", {
            className: u()(cd, {
              [Mg]: m
            }),
            children: jsx(vp, {
              action: y
            })
          }), jsx(_$$s2, {
            toolType: "pencil",
            color: A,
            isSelected: m,
            onTap: v,
            IconNoRef: O,
            canvasToSvgScale: 1,
            isHovered: isHovered || f,
            hoverOffsetAmount: "DRAWING"
          })]
        })
      })
    }), jsx(Qw, {
      isOpen: m,
      overflowChildren: !0,
      children: jsx(_$$i, {
        tool: g,
        isOpen: m,
        recordingKey: aQ,
        optimizeForCompactSize: e
      })
    })]
  });
});
function tu({
  recordingKey: e,
  isOpen: t
}) {
  let [i, a] = fp(qL);
  let [s, o] = useState(!1);
  let {
    openColorPalettePicker,
    closeColorPalettePicker
  } = $J(o);
  let p = _$$F2.format(i);
  useEffect(() => {
    closeColorPalettePicker();
  }, [t, closeColorPalettePicker]);
  let h = e => {
    a(e);
    glU?.triggerActionInUserEditScope("set-tool-sticky", {
      source: fK
    });
  };
  let m = e => {
    h(e);
    tp();
  };
  let f = Z9();
  let _ = f.type === Yv.CUSTOM;
  let x = TS("sticky");
  let j = _ ? f.variations.sticky : x;
  let b = md(Qv);
  let y = !!b;
  return jsx(Fragment, {
    children: jsxs(br, {
      shouldVerticallyCenter: !0,
      paddingRight: 8,
      paddingLeft: 8,
      children: [jsx(_$$V2, {
        loadingPaletteCircleCount: b
      }), !y && (getFeatureFlags().figjam_fpl_dlt_sticky_submenu ? jsx(bL, {
        onChange: e => {
          let t = H0(e);
          t && (h(t), tp());
        },
        legend: jsx(_$$q2, {
          children: _$$tx("whiteboard.stickies.color_selector.legend")
        }),
        children: jsx("div", {
          className: Bp,
          children: j.map((t, i) => {
            let r = _$$F2.format(t);
            let a = _ ? AF(i, "sticky") : V_(t, "sticky");
            return jsx(kk, {
              size: "medium",
              value: t,
              selectionState: r === p ? "selected" : "unselected",
              paletteType: "sticky",
              background: "light",
              tooltip: a,
              recordingKey: Pt(e, a)
            }, _$$F2.format(t) + "-" + i);
          })
        })
      }) : j.map((t, i) => {
        let r = _$$F2.format(t);
        let a = _ ? AF(i, "sticky") : V_(t, "sticky");
        return jsx(_$$cd, {
          size: "medium",
          value: t,
          selectionState: r === p ? "selected" : "unselected",
          paletteType: "sticky",
          background: "light",
          onClick: () => m(t),
          tooltip: a,
          recordingKey: Pt(e, a)
        }, _$$F2.format(t) + "-" + i);
      })), jsx(_$$s3, {
        colorPalettePickerState: {
          openColorPalettePicker,
          closeColorPalettePicker,
          isColorPalettePickerOpen: s
        },
        paletteType: "sticky",
        recordingKey: Pt(e || "color-palettes", "sticky") || "sticky",
        disabled: y,
        isInDltSubmenu: !0
      })]
    })
  });
}
let tp = () => {
  let e = {
    duration: 800,
    easing: "ease-out"
  };
  let t = {
    transform: "rotate(0) translate(0, 0)"
  };
  let i = [t, {
    transform: "translate(32px, 32px) rotate(5deg) translate(0, -8px) translate(-32px, -32px)",
    offset: .1
  }, {
    transform: "translate(32px, 32px) rotate(5deg) translate(0, -10px) translate(-32px, -32px)",
    offset: .35
  }, t, {
    transform: "translate(-32px, 32px) rotate(-3deg) translate(32px, -32px) "
  }, t, {
    transform: "translate(32px, 32px) rotate(1deg) translate(-32px, -32px) "
  }, t];
  [_$$eB, gz, Sk].forEach((t, n) => {
    document.getElementsByClassName(t)[0].parentElement?.animate(i, {
      ...e,
      ...{
        delay: 70 * n
      }
    });
  });
};
function th({
  toolbarIconScale: e
}) {
  let t = bu();
  let i = sT();
  let a = md(qL);
  let s = aV();
  let [o, c] = useState(!1);
  let [p, h] = useState(!1);
  let [m, f] = useState(_$$k.DEFAULT);
  let _ = 240 / rX;
  let x = zS(a, "sticky");
  let g = _$$F2.format(a);
  let j = s || !x ? "rgba(230, 230, 230, 1)" : MV(x, g);
  let {
    state
  } = useContext(nS);
  let [y, v] = fp(oh);
  let T = LR();
  let S = useCallback(() => {
    T(!1);
    i ? glU?.triggerActionInUserEditScope("set-tool-default", {
      source: fK
    }) : (glU?.triggerActionInUserEditScope("set-tool-sticky", {
      source: fK
    }), v({
      type: "open",
      tool: "sticky"
    }));
  }, [v, i, T]);
  let w = i || t || "open" === y.state && "shape" === y.tool;
  let {
    isHovered,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onTouchStart,
    onTouchEnd
  } = _$$W(S, w, !1);
  let R = useCallback((e, t) => {
    l7.user("drop-sticky-on-canvas", () => glU?.dropDiagramItemOntoCanvas(NLJ.STICKY, Math.round(e.x), Math.round(e.y), Math.round(t.x), Math.round(t.y), V5h.TOP_LEFT, VTL.NO));
    c(!1);
    h(!1);
    f(_$$k.DEFAULT);
  }, []);
  let M = useCallback(() => {
    c(!0);
    m === _$$k.DEFAULT && f(_$$k.INITIAL_DRAG_ON_DLT);
  }, []);
  useEffect(() => {
    if ("sticky" === state.draggedTool) {
      let e = !state.draggedToolCanCancel;
      m === _$$k.INITIAL_DRAG_ON_DLT ? e && f(_$$k.DRAG_ON_CANVAS) : m === _$$k.DRAG_ON_CANVAS ? e || f(_$$k.DRAG_RETURN_TO_DLT) : m === _$$k.DRAG_RETURN_TO_DLT && e && f(_$$k.DRAG_ON_CANVAS);
    } else state.draggedTool || f(_$$k.DEFAULT);
  }, [state, o, f, m]);
  let P = UJ;
  let U = useRef(null);
  return jsxs(XN, {
    alignment: "CENTER",
    innerRef: U,
    children: [jsx(_$$ti, {
      isSelected: isHovered || i,
      noScaleAnimation: !0,
      children: jsx(_$$J, {
        className: qf,
        "data-tooltip": "set-tool-sticky",
        "data-tooltip-type": Ib.LOOKUP,
        hasOpenSubmenu: i,
        isHovered,
        isSelected: i,
        onClick: S,
        onMouseEnter,
        onMouseLeave,
        onMouseMove,
        onTouchEnd,
        onTouchStart,
        onboardingKey: s2,
        recordingKey: hx("sticky"),
        toolType: "sticky",
        tooltipOffset: {
          offsetY: -26,
          offsetX: 10
        },
        children: jsxs("div", {
          className: u()(z6, ac),
          children: [jsx(_$$s2, {
            Icon: P,
            canvasToSvgScale: _,
            color: j,
            hoverOffsetAmount: "STICKY",
            isDragReversing: p,
            isHovered,
            isSelected: i,
            onDragEnd: R,
            onDragStart: M,
            onTap: S,
            stickyAnimationState: m,
            toolType: "sticky",
            toolbarIconScale: e
          }), jsx(P, {
            toolOrder: 2,
            color: j,
            toolbarIconScale: e,
            shouldAnimate: o,
            isReversing: p,
            stickyAnimationState: m
          }), jsx(P, {
            toolOrder: 3,
            color: j,
            toolbarIconScale: e,
            shouldAnimate: o,
            isReversing: p,
            stickyAnimationState: m
          }), jsx(P, {
            toolOrder: 4,
            color: j,
            toolbarIconScale: e,
            shouldAnimate: o,
            isReversing: p,
            stickyAnimationState: m
          })]
        })
      })
    }), jsx(Qw, {
      isOpen: i,
      fadedOut: isHovered,
      children: jsx(tu, {
        isOpen: i,
        recordingKey: hx("stickySubmenu")
      })
    })]
  });
}
let tg = memo(function () {
  let e = XM();
  let t = md(c5);
  let i = Xr(n6);
  let a = f7();
  KF(void 0 !== t, "There should be at least one collapsedStage threshold width less than our current container width.");
  let s = a.slice(0, t.numPrimaryTools);
  let o = e && void 0 === s.find(e => "stamp" === e.toolType);
  useEffect(() => {
    i(void 0 !== s.find(e => "quick-actions-v2" === e.toolType));
  }, [i, s]);
  return jsx(Fragment, {
    children: (t.numPrimaryTools > 0 || o) && jsxs("div", {
      className: r6,
      children: [s.map(({
        Component: e,
        toolType: t
      }) => jsx(e, {}, t)), o && jsx(_$$s4, {}, "stamp")]
    })
  });
});
function tb({
  isDisabled: e
}) {
  let t = xI();
  return jsx(_$$I, {
    ButtonLayout: _$$Z,
    className: dk,
    "data-tooltip": "straight-line",
    "data-tooltip-type": Ib.LOOKUP,
    hasOpenSubmenu: !1,
    isDisabled: e,
    isSelected: t,
    onClick: () => {
      glU?.triggerActionInUserEditScope("toggle-straight-pencil", {
        source: fK
      });
    },
    recordingKey: hx("straight-line"),
    testId: "delightful-toolbar-straight-line",
    toolType: "pencil",
    tooltipLocation: "left",
    children: jsx(OS, {})
  });
}
function tC() {
  let e = d4(e => Yh(e.mirror.appModel, "undo"));
  return jsx(_$$I, {
    ButtonLayout: _$$Z,
    className: tN,
    "data-tooltip": "undo",
    "data-tooltip-type": Ib.LOOKUP,
    hasOpenSubmenu: !1,
    isDisabled: !e,
    isSelected: !1,
    onClick: () => {
      Y5.triggerActionInUserEditScope("undo", {
        source: fK
      });
    },
    recordingKey: hx("undo"),
    testId: "delightful-toolbar-undo",
    toolType: "undo",
    tooltipLocation: "left",
    children: jsx(_$$ej, {})
  });
}
function tT() {
  let e = d4(e => Yh(e.mirror.appModel, "redo"));
  return jsx(_$$I, {
    ButtonLayout: _$$Z,
    className: ZS,
    "data-tooltip": "redo",
    "data-tooltip-type": Ib.LOOKUP,
    hasOpenSubmenu: !1,
    isDisabled: !e,
    isSelected: !1,
    onClick: () => {
      Y5.triggerActionInUserEditScope("redo", {
        source: fK
      });
    },
    recordingKey: hx("redo"),
    testId: "delightful-toolbar-redo",
    toolType: "redo",
    tooltipLocation: "left",
    children: jsx(Uf, {})
  });
}
function tE() {
  return jsxs("div", {
    className: _$$fp,
    children: [jsx(tC, {}), jsx(tT, {})]
  });
}
let tw = memo(function () {
  let e = d4(e => e.universalInsertModal.pinned);
  let t = q5();
  let i = t?.votingSessions;
  let [c, x] = useState("PRE");
  let I = useRef(null);
  let L = wY(I);
  let [k, F] = fp(c5);
  let H = XM();
  let [B, V] = fp(gT);
  let [W, z] = fp(oh);
  _$$m(gT);
  useEffect(() => {
    F(az(H).find(e => L ? L.width >= e.thresholdWidth : 0 >= e.thresholdWidth));
  }, [L, F, H]);
  "PRE" === c && L && x("ANIMATING");
  useEffect(() => {
    if ("ANIMATING" === c) {
      let e = setTimeout(() => x("POST"), YB);
      return () => clearTimeout(e);
    }
  }, [c, x]);
  qv();
  let Z = {
    marginBottom: xn(),
    marginLeft: 0,
    marginRight: 0
  };
  window.innerWidth < parsePxInt(ejp) && window.innerWidth > parsePxInt(nnJ) && e === _$$t2.PINNED_AND_DOCKED_LEFT && (Z.marginLeft = gR);
  (function () {
    let e = function () {
      let {
        windowInnerHeight
      } = _$$l();
      let t = Ao();
      if (!t) return;
      let i = t ? t.height + 16 : 0;
      return {
        x: t.x,
        y: windowInnerHeight - i,
        width: t.width,
        height: i
      };
    }();
    _$$X(e ? {
      id: "dlt",
      rect: e,
      direction: "up"
    } : void 0);
  })();
  let $ = lq();
  let [Y, X] = useReducer(pw, Wp);
  let q = useMemo(() => ({
    state: Y,
    dispatch: X
  }), [Y, X]);
  C_(I);
  let J = 414 >= (L?.width || 0);
  let Q = dH();
  let ee = d4(e => e.multiplayerEmoji.type);
  let et = AE();
  let ei = "closed" === W.state ? void 0 : W.tool;
  let en = useRef(ei);
  en.current = ei;
  let er = Yg();
  let ea = d4(e => e.mirror.appModel.activeCanvasEditModeType);
  useEffect(() => {
    Q === NLJ.SELECT || Q === NLJ.DROPPER_COLOR || _$$L(Q) && "pencil" === en.current || qW(Q) && "shape" === en.current || (Q === NLJ.CONNECTOR_ELBOWED || Q === NLJ.CONNECTOR_STRAIGHT || Q === NLJ.CONNECTOR_CURVED) && "shape" === en.current || Q === NLJ.STICKY && "sticky" === en.current || z({
      type: "close",
      source: _$$Yg.ToolSelected
    });
    Q === NLJ.SELECT && "pencil" === en.current && z({
      type: "close",
      source: _$$Yg.ToolSelected
    });
    "NONE" !== ee && z({
      type: "close",
      source: _$$Yg.ToolSelected
    });
    !qW(Q) && Q !== NLJ.CONNECTOR_ELBOWED && Q !== NLJ.CONNECTOR_STRAIGHT || er || "shape" === en.current || et || z({
      type: "open",
      tool: "shape"
    });
  }, [Q, J, ee, er, W, z, et]);
  useEffect(() => {
    let e = e => {
      "Escape" === e.key && ea !== m1T.TEXT && z({
        type: "close",
        source: _$$Yg.KeyboardEsc
      });
    };
    document.addEventListener("keydown", e);
    return () => {
      document.removeEventListener("keydown", e);
    };
  }, [ea, z]);
  useEffect(() => {
    let e = e => {
      !_$$L(Q) && I.current && e.target instanceof Element && !I.current.contains(e.target) && z({
        type: "close",
        source: _$$Yg.ClickOut
      });
    };
    document.addEventListener("pointerdown", e);
    return () => {
      document.removeEventListener("pointerdown", e);
    };
  }, [Q, z]);
  let es = d4(e => {
    let t = e.mirror.appModel.currentTool;
    return t !== NLJ.VECTOR_PENCIL && t !== NLJ.HIGHLIGHTER;
  });
  let eo = BI();
  let el = Ay.isIpad || Ay.isMeetDevice ? jsx(Fragment, {
    children: jsxs("div", {
      className: u()(ph, Dm),
      children: [jsx("div", {
        className: u()(s$, fT, {
          [cz]: !es
        }),
        children: jsx(tb, {
          isDisabled: es
        })
      }), eo?.shouldHideDLTUndoRedo && !Ay.isMeetDevice ? void 0 : jsx("div", {
        className: s$,
        children: jsx(tE, {})
      })]
    })
  }) : null;
  let ed = _$$C()?.setWhiteboardToolbeltNode || lQ;
  let ec = _$$C()?.setWhiteboardToolbeltContainerNode || lQ;
  let eu = CSS.supports && CSS.supports("overflow", "clip");
  let ep = U1(ed);
  let em = useRef(null);
  let ef = jsx("div", {
    id: HY,
    className: u()(kl, {
      [Q$]: !1
    }),
    ref: ep,
    role: "region",
    "aria-label": _$$t("whiteboard.delightful_toolbar.drawing_tools_label"),
    "data-onboarding-key": HY,
    "data-element-target": HY,
    "data-testid": HY,
    children: jsx("div", {
      className: u()(o9, {
        [ES]: eu
      }),
      children: jsx("div", {
        className: u()({
          [Uq]: !1
        }),
        onPointerDown: e => {},
        role: void 0,
        children: jsxs("div", {
          className: u()(iU, {
            [wF]: !1
          }),
          ref: em,
          children: [jsx(ev, {}), jsx(cG, {
            className: zb
          }), jsxs(wn, {
            children: [jsx(e9, {
              optimizeForCompactSize: !!J
            }), jsx(th, {
              toolbarIconScale: 1
            }), jsx(xJ, {
              optimizeForCompactSize: !!J
            })]
          }), jsx(cG, {}), jsx(tg, {}), (k?.numPrimaryTools !== 0 || H) && jsx(cG, {}), jsx(_$$q, {
            toolbarIconScale: 1
          })]
        })
      })
    })
  });
  let e_ = jsxs("div", {
    className: AT,
    ref: ec,
    children: [i && !B && jsx(tI, {
      toolbarContainerRef: I,
      onCloseForViewOnlyBanner: V
    }), jsx("div", {
      className: B ? Xn : qG,
      children: ef
    }), jsx(eX, {})]
  });
  let eg = d4(e => e.showingFileFooter);
  return jsx(fu, {
    name: RZ,
    children: jsxs(nS.Provider, {
      value: q,
      children: [el, jsx("div", {
        className: u()(HG, Dm, {
          [E$]: !1,
          [Qs]: eg,
          [i0]: "ANIMATING" === c && !$,
          [OA]: "POST" === c || $,
          [_$$z2]: $
        }),
        style: Z,
        ref: I,
        onFocusCapture: () => {
          I.current?.setAttribute("aria-hidden", "false");
        },
        children: e_
      })]
    })
  });
});
function tI(e) {
  let t = _$$w();
  let i = _$$z();
  let a = _$$g();
  let s = _$$a();
  let {
    getProvisionalAccessBanner
  } = wH();
  let l = getProvisionalAccessBanner(FProductAccessType.WHITEBOARD);
  return useMemo(() => s ? jsx(Q, {
    text: l?.text ?? "",
    shouldShowCurf: l?.shouldShowCurf
  }) : t ? jsx(eo, {}) : a ? jsx(eS, {
    dltRef: e.toolbarContainerRef
  }) : i ? jsx(eA, {
    dltRef: e.toolbarContainerRef,
    onClose: e.onCloseForViewOnlyBanner
  }) : _$$O() ? jsx(_$$X2, {}) : null, [t, a, i, s, l, e.toolbarContainerRef, e.onCloseForViewOnlyBanner]);
}
export function $$tL0() {
  return jsx(tH, {
    boundaryKey: "DelightfulToolbar",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(tw, {})
  });
}
export const DelightfulToolbarWithErrorBoundary = $$tL0;