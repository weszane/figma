import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState, memo, useRef, useMemo } from "react";
import { d4 } from "../vendor/514228";
import { qE } from "../figma_app/492908";
import { O as _$$O } from "../905/969533";
import { k as _$$k } from "../905/44647";
import { Ez5, xae, nQ7, CNR } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { xk } from "@stylexjs/stylex";
import h from "classnames";
import { l } from "../6388/697965";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { Te } from "../1250/12342";
import { Y5 } from "../figma_app/455680";
import { UK } from "../figma_app/740163";
import { hq, i as _$$i } from "../figma_app/741237";
import { aV, p8 } from "../figma_app/722362";
import { ut } from "../figma_app/84367";
import { Fk } from "../figma_app/167249";
import { EA } from "../9410/499229";
import { f as _$$f } from "../1528/716387";
import { P as _$$P } from "../3271/828600";
import { $ as _$$$ } from "../figma_app/644304";
import { d as _$$d } from "../3682/659785";
import { n as _$$n } from "../1528/289390";
import { Q as _$$Q } from "../9410/629866";
import { cT, n0, GQ, _4, Ye, vr } from "../figma_app/32128";
import { X as _$$X } from "../642/183469";
import { o as _$$o } from "../642/343724";
import { wV } from "../figma_app/779965";
import { Jb } from "../figma_app/224338";
import { V as _$$V } from "../9410/312268";
import { rY } from "../figma_app/524655";
import { debugState } from "../905/407919";
import { F as _$$F } from "../905/680873";
import { $ as _$$$2 } from "../9410/841699";
import { ds, Cu } from "../figma_app/314264";
import { tS, q5 } from "../figma_app/516028";
import { QU } from "../1250/559338";
import { g as _$$g } from "../642/216228";
import { A as _$$A } from "../9410/103334";
import { R as _$$R } from "../9410/515820";
import { BN } from "../573/404275";
import { I as _$$I } from "../573/606770";
import { g as _$$g2 } from "../9410/153133";
import { d as _$$d2 } from "../9410/162990";
import { m as _$$m } from "../9410/532216";
import { n as _$$n2 } from "../9410/783801";
import { _ as _$$_ } from "../1528/446737";
import { En } from "../9410/28424";
import { J as _$$J } from "../9410/617561";
import { s as _$$s2 } from "../9410/760762";
import { xG, n8 } from "../figma_app/121043";
import { bL, c$ } from "../905/867927";
import { q as _$$q } from "../905/932270";
import { O as _$$O2 } from "../905/666679";
import { B as _$$B } from "../905/714743";
import { sx } from "../905/941192";
import { b_ } from "../figma_app/835688";
import { A as _$$A2 } from "../svg/910906";
import { R as _$$R2 } from "../9410/430547";
var p = h;
function X() {
  return !ut(Ez5?.uiState().showCanvasSearch, !1);
}
function Z() {
  let e = "pagesPanel";
  let t = cT();
  let l = n0();
  let r = X();
  let i = GQ(200, 306);
  let a = d4(e => t ? xae.LAYERS : e.leftPanel.activeTab);
  let c = _$$g2({
    pagesList: l
  });
  let u = _4();
  let x = tS();
  let {
    height,
    setHeight,
    isOpen,
    setIsOpen
  } = _$$d2({
    defaultIsOpen: !0
  });
  let m = _$$F(isOpen);
  let v = useCallback(() => {
    let e = !m.current;
    ds("pages_panel_open_toggle", x, debugState.getState(), {
      isPagesOpen: e
    }, {
      forwardToDatadog: !0
    });
    setIsOpen(e);
  }, [x, m, setIsOpen]);
  let [b,, j] = BN(a, e);
  return jsxs(_$$A, {
    isFullHeight: !r,
    children: [jsx(_$$$2, {}), !t && jsx(_$$I, {
      activeTab: a,
      onCanvasSearch: u,
      recordingKey: e,
      tabManager: j,
      tabPropsMap: b
    }), x && jsx(QU, {
      fileKey: x
    }), a === xae.LAYERS && jsx(_$$R, {
      isReadOnly: t,
      isOpen,
      onToggle: v,
      height,
      onHeightChange: setHeight,
      pages: l,
      onPageContextMenu: c,
      onCanvasSearch: u
    }), a === xae.ASSETS && !t && jsx(_$$g, {
      width: i
    })]
  });
}
function ep() {
  let e = ut(Ez5?.singleSlideView().isInFocusedNodeView, !0);
  let t = tS();
  let l = useCallback(e => {
    "GRID" === e ? (Y5.triggerAction("exit-focus-view"), Cu({
      trackingContext: "grid_view_toggle",
      productType: "slides",
      fileKey: t
    })) : (Y5.triggerAction("enter-focus-view"), Cu({
      trackingContext: "single_slide_view_toggle",
      productType: "slides",
      fileKey: t
    }));
  }, [t]);
  return jsx("div", {
    style: sx.add({
      width: "64px"
    }).$,
    children: jsxs(bL, {
      legend: jsx(_$$q, {
        children: _$$t("slides.toolbar.view_mode")
      }),
      value: e ? "SSV" : "GRID",
      onChange: l,
      recordingKey: "slideViewToggle",
      children: [jsx(c$, {
        value: "SSV",
        "aria-label": _$$t("slides.toolbar.single_slide_view_toggle"),
        icon: jsx(ef, {
          isSelected: e
        }),
        htmlAttributes: {
          "data-tooltip-shortcut-key": "toggle-grid-focus-view"
        }
      }), jsx(c$, {
        value: "GRID",
        "aria-label": _$$t("slides.toolbar.grid_view_toggle"),
        icon: jsx(eg, {
          isSelected: !e
        }),
        htmlAttributes: {
          "data-onboarding-key": b_,
          "data-tooltip-shortcut-key": "toggle-grid-focus-view"
        }
      })]
    })
  });
}
function eg({
  isSelected: e
}) {
  let t = e ? _$$s.colorIcon.$ : _$$s.colorIconSecondary.$;
  return jsx(_$$B, {
    className: t,
    svg: _$$A2
  });
}
function ef({
  isSelected: e
}) {
  let t = e ? _$$s.colorIcon.$ : _$$s.colorIconSecondary.$;
  return jsx(_$$O2, {
    className: t
  });
}
let ev = "slides_left_panel_island--fileControls--5YIoW";
let eb = "slides_left_panel_island--rightSection--XFjHm";
function ej() {
  let e = Ye();
  let t = aV();
  let l = d4(e => e.mirror.appModel.showUi);
  return !t && l ? jsxs(_$$_, {
    isCollapsed: e,
    minWidth: 200,
    children: [jsx(xG, {}), e ? jsx(ey, {}) : jsx(e_, {})]
  }) : null;
}
function ey() {
  let e = q5();
  return d4(e => e.isRenaming) ? jsx("div", {
    className: p()(eb, "slides_left_panel_island--renaming--PguET"),
    children: jsx("div", {
      className: ev,
      children: jsx(_$$n2, {})
    })
  }) : jsxs("div", {
    className: eb,
    children: [jsxs("div", {
      className: ev,
      children: [jsx(_$$n2, {}), e && jsx(_$$s2, {
        openFile: e
      }), jsx(_$$m, {})]
    }), jsx(n8, {}), jsxs("div", {
      className: "slides_left_panel_island--slidesControls--FqiTO",
      children: [jsx(_$$R2, {}), jsx(ep, {})]
    })]
  });
}
function e_() {
  return jsxs("div", {
    className: eb,
    children: [jsx(n8, {}), jsx(En, {}), jsx(_$$J, {}), jsx(ep, {})]
  });
}
function eE({
  ref: e
}) {
  useEffect(() => {
    let t = t => {
      let l = !!e.current && t.target instanceof Node && e.current.contains(t.target);
      Ez5?.singleSlideView().isCarouselFocused.set(l);
    };
    window.addEventListener("click", t);
    return () => window.removeEventListener("click", t);
  }, [e]);
}
function eS(e, t) {
  let [l, o] = useState(t);
  useEffect(() => {
    function l() {
      o(e.current?.clientHeight || t);
    }
    window.addEventListener("resize", l);
    return () => {
      window.removeEventListener("resize", l);
    };
  }, [t, e]);
  return l;
}
export let $$eI2 = memo(function () {
  let e = p8("isReadOnly");
  let t = useRef(null);
  let l = useRef(null);
  eE({
    ref: t
  });
  let s = Te();
  let i = GQ(200, 306);
  let [a, c] = useState(() => UK().slidesLayersPanelHeight.getCopy());
  let [u, h] = useState(() => UK().slidesLayersPanelExpanded.getCopy());
  let p = ut(Ez5?.interopToolMode(), nQ7.SELF);
  let g = ut(Ez5?.uiState().showCanvasSearch, !1);
  let m = X();
  let b = p === nQ7.DESIGN && !g;
  let y = u && b;
  let S = s && !y && !g;
  useEffect(() => {
    UK().slidesLayersPanelHeight.set(a);
    UK().slidesLayersPanelExpanded.set(u);
  }, [a, u]);
  let C = Jb() ?? null;
  let k = eS(t, window.innerHeight);
  let B = eS(l, 95);
  let z = CNR?.singleSlideThumbnailPadding() ?? 0;
  let O = Ye();
  return jsxs(_$$Q, {
    ref: t,
    children: [jsx($$eA0, {
      guid: C
    }), O ? jsx(ej, {}) : jsxs(_$$$, {
      defaultWidth: 200,
      minWidth: 200,
      maxWidth: 306,
      children: [jsxs("div", {
        ref: l,
        ...xk(ek.leftPanelHeaderContainer, g && ek.leftPanelHeaderContainerSearchActive),
        children: [jsx(ej, {}), jsx(_$$n, {}), !O && jsx(_$$d, {}), g && jsx("div", {
          className: "x1iyjqo2 xysyzu8",
          children: jsx(EA.Provider, {
            value: !0,
            children: jsx(_$$f, {
              showFilter: !0
            })
          })
        })]
      }), S && jsx(Z, {}), m && jsx(wV, {
        size: k - B - a,
        side: "bottom",
        onResize: e => {
          c(qE(k - B - e, 40, k - B));
        },
        disableResizing: !y,
        unsetSizeWhenDisabled: !0,
        className: _$$s.relative.flex.flexColumn.$$if(!y, _$$s.flex1.overflowHidden).$,
        children: jsx(eC, {
          padding: z,
          isReadOnly: e
        })
      }), b && jsx($$eN1, {
        isLayersPanelExpanded: u,
        onToggleExpanded: () => h(e => !e),
        constrainedSidebarWidth: i,
        guid: C
      })]
    })]
  });
});
export function $$eT3() {
  let e = useRef(null);
  eE({
    ref: e
  });
  let t = GQ(200, 306);
  let l = ut(Ez5?.uiState().showCanvasSearch, !1);
  let s = useRef(null);
  let i = eS(e, window.innerHeight);
  let a = eS(s, 95);
  let c = CNR?.singleSlideThumbnailPadding() ?? 0;
  let u = p8("isReadOnly");
  let x = ut(Ez5?.interopToolMode(), nQ7.SELF) === nQ7.DESIGN;
  let h = ut(Ez5?.singleSlideView().isInFocusedNodeView, !0);
  let p = X() && h;
  let [g, m] = useState(() => UK().slidesLayersPanelHeight.getCopy());
  let v = Jb();
  let b = x && h && v;
  let y = Ye();
  return jsx(_$$Q, {
    ref: e,
    children: y ? jsx(ej, {}) : jsxs(_$$$, {
      defaultWidth: 200,
      minWidth: 200,
      maxWidth: 306,
      children: [jsxs("div", {
        ref: s,
        children: [jsx(ej, {}), jsx(_$$n, {}), jsx(_$$d, {}), l && jsx(EA.Provider, {
          value: !0,
          children: jsx(_$$f, {
            showFilter: !0
          })
        })]
      }), p && jsx(wV, {
        size: i - a - (b ? g : 0),
        side: "bottom",
        onResize: e => {
          m(qE(i - a - e, 40, i - a));
        },
        disableResizing: !1,
        unsetSizeWhenDisabled: !0,
        className: _$$s.relative.flex.flexColumn.$$if(!1, _$$s.flex1.overflowHidden).$,
        children: jsx(eC, {
          padding: c,
          isReadOnly: u
        })
      }), x && !h && jsx(eB, {
        width: t,
        height: i - a
      }), b && jsx($$eN1, {
        isLayersPanelExpanded: !0,
        constrainedSidebarWidth: t,
        guid: v,
        onToggleExpanded: void 0
      })]
    })
  });
}
function eC({
  padding: e,
  isReadOnly: t
}) {
  return jsxs(Fragment, {
    children: [t ? null : jsx("div", {
      className: _$$s.wFull.flex.gap8.py8.bb1.colorBorder.bSolid.borderBox.$,
      style: {
        paddingLeft: `${e}px`,
        paddingRight: `${e}px`
      },
      children: jsx(_$$V, {
        recordingKey: "ssvCarousel"
      })
    }), jsx(l, {})]
  });
}
export function $$eN1({
  isLayersPanelExpanded: e,
  onToggleExpanded: t,
  constrainedSidebarWidth: l,
  guid: n
}) {
  return jsxs("div", {
    className: eL(_$$s.flex.flexColumn.overflowHidden.relative.colorBg.$$if(e, _$$s.flexGrow1).$),
    style: {
      marginBottom: "-1px"
    },
    children: [jsx("div", {
      className: _$$s.h0.wFull.bb1.bSolid.colorBorder.$
    }), jsx("button", {
      className: _$$s.relative.flex.h40.itemsCenter.flexShrink0.$,
      onClick: () => t?.(),
      children: jsxs("div", {
        className: _$$s.flex.itemsCenter.$,
        children: [null != t && (e ? jsx(_$$O, {}) : jsx(_$$k, {})), jsx("span", {
          ...xk(null == t && ew.indentedHeader),
          children: tx("fullscreen.pages_panel.layers_tab")
        })]
      })
    }), e ? jsx(eR, {
      width: l,
      guid: n
    }) : null]
  });
}
let ew = {
  indentedHeader: {
    marginLeft: "xq1n1xh",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  }
};
function eR({
  width: e,
  guid: t
}) {
  let l = p8("isReadOnly");
  let r = p8("currentPage");
  let [i, a] = useState(null);
  let d = d4(e => e.versionHistory);
  let u = Fk((e, t) => {
    let l = e.get(t);
    return l ? {
      guid: l.guid,
      children: l.uiOrderedChildren
    } : null;
  }, t);
  let x = useCallback(e => {
    l || (a(e), hq(e));
  }, [l]);
  useEffect(() => {
    let e = ({
      nodeId: e
    }) => {
      x(e);
    };
    Y5.fromFullscreen.on("startRenamingNode", e);
    return () => {
      Y5.fromFullscreen.removeListener("startRenamingNode", e);
    };
  }, [x]);
  return jsx(_$$X, {
    currentPage: r,
    isReadOnly: l,
    renamingGuid: i,
    startRenaming: x,
    stopRenaming: function (e, t, o) {
      l || (i && e && (l7.user("set-node-name", () => _$$i(i, t || "")), Y5.commit()), a(null));
    },
    thumbnailGuid: null,
    topNodeProperties: u,
    versionHistory: d,
    width: e
  }, t || "no-node");
}
export function $$eA0({
  guid: e
}) {
  let t = Ye();
  let l = aV();
  let r = ut(Ez5?.interopToolMode(), nQ7.SELF);
  let i = d4(e => e.mirror.appModel.showUi);
  let [a, c] = useState(230);
  return t && !l && r === nQ7.DESIGN && i ? jsx(_$$P, {
    onSizeChange: c,
    bottom: 0,
    left: 0,
    hide: !e,
    children: jsx("div", {
      className: eL(_$$s.hFull.$),
      children: jsx(eR, {
        guid: e,
        width: a
      })
    })
  }) : null;
}
function eL(...e) {
  return p()(...e, "leftPanelBody");
}
let ek = {
  leftPanelHeaderContainer: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    $$css: !0
  },
  leftPanelHeaderContainerSearchActive: {
    height: "x5yr21d",
    $$css: !0
  }
};
function eB({
  width: e,
  height: t
}) {
  let l = p8("isReadOnly");
  let r = p8("currentPage");
  let [i, a] = useState(null);
  let x = d4(e => e.versionHistory);
  let h = ut(Ez5?.canvasGrid().canvasGridArray, [[]]);
  let p = rY(h);
  let g = Fk((e, t) => {
    let l = e.get(t);
    return l?.childrenGuids.filter(t => e.get(t)?.type !== "SLIDE_GRID") ?? [];
  }, r);
  let m = useMemo(() => ({
    guid: r,
    children: [...p, ...g]
  }), [r, p, g]);
  let v = useCallback(e => {
    if (l) return;
    let t = getSingletonSceneGraph().get(e);
    t && "SLIDE" !== t.type && (a(e), hq(e));
  }, [l]);
  useEffect(() => {
    let e = ({
      nodeId: e
    }) => {
      v(e);
    };
    Y5.fromFullscreen.on("startRenamingNode", e);
    return () => {
      Y5.fromFullscreen.removeListener("startRenamingNode", e);
    };
  }, [v]);
  let {
    isLayersOpen,
    toggleLayersAction
  } = vr();
  return jsx("div", {
    className: eL(_$$s.bt1.colorBorder.bSolid.borderBox.$),
    style: {
      height: t
    },
    children: jsx(_$$o, {
      currentPage: r,
      isLayersOpen,
      isReadOnly: l,
      onToggleLayers: toggleLayersAction,
      renamingGuid: i,
      startRenaming: v,
      stopRenaming: function (e, t, o) {
        l || (i && e && (l7.user("set-node-name", () => _$$i(i, t || "")), Y5.commit()), a(null));
      },
      topNodeProperties: m,
      versionHistory: x,
      width: e
    })
  });
}
export const Zc = $$eA0;
export const Hg = $$eN1;
export const SG = $$eI2;
export const K = $$eT3;