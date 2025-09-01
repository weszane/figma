import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, memo, useCallback } from "react";
import { d4 } from "../vendor/514228";
import { lQ } from "../905/934246";
import { E as _$$E } from "../905/658074";
import { W as _$$W } from "../figma_app/462192";
import { Egt, HV5, CXS, sAE, _0v, RN9, rXF } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { Pt } from "../figma_app/806412";
import { B as _$$B } from "../905/714743";
import { S as _$$S } from "../905/177206";
import { N as _$$N } from "../905/696319";
import { t as _$$t } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { UK, sT } from "../figma_app/740163";
import { hS, gl, SX } from "../905/216495";
import { lJ, kl } from "../905/275640";
import { Fk } from "../figma_app/167249";
import { Sh } from "../figma_app/889655";
import { Ib } from "../905/129884";
import { Ht, $j } from "../figma_app/178475";
import { sA } from "../figma_app/841644";
import { fn } from "../figma_app/811257";
import { iZ } from "../figma_app/473914";
import { M9 } from "../figma_app/492908";
import { fP, mc } from "../905/691059";
import { E as _$$E2 } from "../905/632989";
import { i as _$$i } from "../905/718764";
import { E as _$$E3 } from "../905/172252";
import T from "classnames";
import { M as _$$M } from "../figma_app/634148";
import { J2 } from "../figma_app/84367";
import { zk } from "../figma_app/198712";
import { hF, qE, QK } from "../figma_app/960598";
import { A as _$$A } from "../svg/904889";
import { A as _$$A2 } from "../svg/452687";
import { o as _$$o } from "../8826/796619";
import { wx, Wx, Y9 } from "../figma_app/409807";
import { A as _$$A3 } from "../svg/532224";
import { A as _$$A4 } from "../svg/217820";
import { A as _$$A5 } from "../svg/55819";
import { A as _$$A6 } from "../svg/504621";
var P = T;
let F = "grid_picker--cellVisual--SAtJ1";
let z = "grid_picker--textSecondary--cfg-p";
let G = "grid_picker--textDisabled--Yzb8u";
let U = (e = !1) => P()(F, {
  "grid_picker--cellVisualMixedSpan--VIczc": e
});
function W({
  recordingKey: e,
  disabled: t
}) {
  let [n, r] = useState(!1);
  let [a, o] = lJ("gridColumnCount");
  let [s, u] = lJ("gridRowCount");
  let g = a && hS(a) ? a : null;
  let m = s && hS(s) ? s : null;
  let _ = useRef(null);
  let v = Fk(e => {
    let t = e.getDirectlySelectedNodes();
    return 0 !== t.length && t.every(e => {
      if (!e) return !1;
      let t = "GRID" === e.stackMode;
      let n = 0 === e.childrenNodes.length;
      return t && n;
    });
  });
  let [C, S] = useState(null);
  let j = J2(UK().showPropertyLabels);
  let {
    getTriggerProps,
    getContainerProps
  } = fP({
    isOpen: n,
    onOpenChange(e) {
      r(e);
      e ? (Egt && Egt.clearGridTrackOrCellSelection(), S({
        mode: "hover",
        hoveredIndex: null
      }), g && m ? _.current = {
        cols: g,
        rows: m
      } : _.current = null) : (S(null), _.current = null);
    },
    type: "dialog",
    placement: "bottom-start",
    offset: {
      mainAxis: j ? -114 : -96,
      crossAxis: -12
    },
    softDismiss: !0
  });
  let I = (e, t) => {
    if (!v || null === e || null === t) return;
    let n = t >= 1 && t <= 100;
    if (!(e >= 1 && e <= 100) || !n) return;
    let l = e !== g;
    let i = t !== m;
    (l || i) && l7.user("grid-panel-empty-grid-immediate-resize", () => {
      l && o(e, zk.NO);
      i && u(t, zk.NO);
    });
  };
  let O = !a || !s || gl(a) || gl(s);
  let T = 0;
  let P = 0;
  !O && g && m ? (T = g > 10 ? 10 : g, P = m > 8 ? 8 : m) : O && (T = 2);
  let M = (e, t) => {
    S(n => {
      if (!n) return null;
      if ("hover" === n.mode) {
        let n = {
          mode: "input",
          intermediateCols: "cols" === e ? t : g,
          intermediateRows: "rows" === e ? t : m
        };
        I(n.intermediateCols, n.intermediateRows);
        return n;
      }
      if ("input" === n.mode) {
        let l = "cols" === e ? {
          ...n,
          intermediateCols: t
        } : {
          ...n,
          intermediateRows: t
        };
        I(l.intermediateCols, l.intermediateRows);
        return l;
      }
      return n;
    });
  };
  let K = (e, t) => {
    let n = null !== e && e >= 1 && e <= 100 && e !== g;
    let l = null !== t && t >= 1 && t <= 100 && t !== m;
    n || l ? l7.user("grid-panel-commit", () => {
      let i = n && !l ? zk.YES : zk.NO;
      getFeatureFlags().ce_tv_grid_reflow && C?.mode === "hover" ? HV5?.setDimensions(t, e) : (n && o(e, i), l && u(t, zk.YES));
    }) : l7.user("grid-panel-commit", () => {
      u(t, zk.YES);
    });
  };
  let V = (e, t) => {
    let n = "cols" === e ? m : g;
    C?.mode === "input" && (n = "cols" === e ? C.intermediateRows : C.intermediateCols);
    K("cols" === e ? t : n, "rows" === e ? t : n);
  };
  let D = () => {
    C?.mode === "hover" && S({
      intermediateCols: g,
      intermediateRows: m,
      mode: "input"
    });
  };
  return jsxs(Fragment, {
    children: [jsxs(_$$E2, {
      actionOnPointerDown: !0,
      ...getTriggerProps({
        className: "grid_picker--gridWidget--e47iU",
        style: {
          "--cols": T
        }
      }),
      recordingKey: Pt(e, "button"),
      disabled: t,
      children: [jsx("div", {
        className: "grid_picker--gridWidgetLabel--ceNc2",
        children: O ? _$$t("common.mixed") : jsxs("span", {
          className: t ? G : "",
          children: [String(g), jsxs("span", {
            className: t ? G : z,
            children: [" ", "\xd7", " "]
          }), String(m)]
        })
      }), O ? jsxs(Fragment, {
        children: [jsx("div", {
          className: U()
        }), jsx("div", {
          className: U(!0)
        }), jsx("div", {
          className: U()
        })]
      }) : M9(T * P, e => jsx("div", {
        className: F
      }, e))]
    }), n && jsx(mc, {
      ...getContainerProps({
        className: "grid_picker--gridWidgetPopover--U5ykN"
      }),
      onKeyDown: e => {
        if ("Escape" === e.key) {
          if (e.stopPropagation(), e.preventDefault(), v && _.current) {
            let e = _.current.cols;
            let t = _.current.rows;
            let n = g !== e;
            let l = m !== t;
            (n || l) && l7.user("grid-panel-revert-on-escape", () => {
              n && o(e, zk.NO);
              l && u(t, zk.NO);
            });
          }
          S(null);
          r(!1);
        }
        "Enter" === e.key && (S(null), r(!1));
      },
      children: jsxs(_$$i, {
        children: [jsx(q, {
          recordingKey: e,
          value: a,
          onIntermediateChange: e => M("cols", e),
          onCommit: e => V("cols", e),
          onClick: D
        }), jsx("span", {
          className: z,
          children: "\xd7"
        }), jsx(J, {
          recordingKey: e,
          value: s,
          onIntermediateChange: e => M("rows", e),
          onCommit: e => V("rows", e),
          onClick: D
        }), jsx(et, {
          gridState: C,
          setGridState: S,
          onReEnableHover: e => {
            S({
              mode: "hover",
              hoveredIndex: e
            });
          },
          handleGridSelectionResizeAndCommit: ({
            cols: e,
            rows: t
          }) => {
            C?.mode !== "input" && (K(e, t), r(!1));
          },
          recordingKey: Pt(e, "gridBoxes"),
          initialGridSize: _.current
        })]
      })
    })]
  });
}
function Y(e) {
  return jsx(W, {
    ...e
  });
}
function X(e, t) {
  setTimeout(() => {
    let n = e.target;
    if (n instanceof HTMLInputElement) {
      let e = n.value;
      let l = null;
      if ("" === e) l = null;else {
        let t = parseInt(e, 10);
        l = isNaN(t) ? null : t;
      }
      t(l);
    }
  }, 0);
}
class Q extends _$$M {
  constructor(e) {
    super();
    this.nodeField = e;
  }
  getValueForNode(e) {
    return e[this.nodeField] ?? 0;
  }
  setValueForNode(e, t) {
    l7.user("set-grid-track-count", () => {
      "gridRowCount" === this.nodeField ? e.setGridRowCount(t, !0) : "gridColumnCount" === this.nodeField && e.setGridColumnCount(t, !0);
    });
  }
}
let $ = new Q("gridRowCount");
let Z = new Q("gridColumnCount");
let q = memo(function ({
  recordingKey: e,
  value: t,
  onIntermediateChange: n,
  onCommit: i,
  onClick: r
}) {
  return jsx(Ht, {
    className: hF,
    "data-tooltip": _$$t("fullscreen.properties_panel.grid.number_of_columns"),
    "data-tooltip-type": Ib.TEXT,
    dataTestId: "grid-columns",
    dispatch: lQ,
    id: "grid-columns",
    inputClassName: qE,
    max: 100,
    min: 1,
    mixedMathHandler: Z,
    onClick: r,
    onKeyDown: e => {
      X(e, n);
    },
    onValueChange: (e, t) => {
      t ? i(e) : n(e);
    },
    recordingKey: Pt(e, "colInput"),
    value: t,
    children: jsx(_$$B, {
      svg: _$$A,
      className: QK
    })
  });
});
let J = memo(function ({
  recordingKey: e,
  value: t,
  onIntermediateChange: n,
  onCommit: i,
  onClick: r
}) {
  return jsx(Ht, {
    className: hF,
    "data-tooltip": _$$t("fullscreen.properties_panel.grid.number_of_rows"),
    "data-tooltip-type": Ib.TEXT,
    dataTestId: "grid-rows",
    dispatch: lQ,
    id: "grid-rows",
    inputClassName: qE,
    max: 100,
    min: 1,
    mixedMathHandler: $,
    onClick: r,
    onKeyDown: e => {
      X(e, n);
    },
    onValueChange: (e, t) => {
      t ? i(e) : n(e);
    },
    recordingKey: Pt(e, "rowInput"),
    value: t,
    children: jsx(_$$B, {
      svg: _$$A2,
      className: QK
    })
  });
});
function ee({
  recordingKey: e,
  index: t,
  cellRow: n,
  cellCol: i,
  isSelected: r,
  isPressed: a,
  isInitialSize: o,
  mode: s,
  onReEnableHover: c,
  onCommit: d
}) {
  let u = _$$t("fullscreen.properties_panel.grid.columns_and_rows", {
    cellCol: i,
    cellRow: n
  });
  let p = _$$t("fullscreen.properties_panel.grid.columns_x_rows", {
    cellCol: i,
    cellRow: n
  });
  return jsxs(_$$E2, {
    className: "grid_picker--gridCellButton--g7VBU",
    "data-idx": t,
    onClick: () => {
      "input" === s ? c(t) : "hover" === s && d({
        cols: i,
        rows: n
      });
    },
    recordingKey: e,
    "data-tooltip": p,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip-offset-y": 4,
    "data-tooltip-timeout-delay": 300,
    "aria-pressed": a,
    children: [jsx("div", {
      className: "grid_picker--gridCellWrapper--zGP-7",
      children: jsx("div", {
        className: P()("grid_picker--gridCell--UWlY2", {
          "grid_picker--selected--WcfBm": r,
          "grid_picker--initialSize--QDKhm": o
        })
      })
    }), jsx(_$$E3, {
      children: u
    })]
  });
}
let et = memo(function ({
  gridState: e,
  setGridState: t,
  onReEnableHover: n,
  handleGridSelectionResizeAndCommit: i,
  recordingKey: r,
  initialGridSize: a
}) {
  let o = e?.mode === "hover" && null !== e.hoveredIndex ? e.hoveredIndex % 12 : -1;
  let s = e?.mode === "hover" && null !== e.hoveredIndex ? Math.floor(e.hoveredIndex / 12) : -1;
  let c = n => {
    if (e?.mode !== "hover") return;
    let l = n.target.closest("button[data-idx]");
    if (l) {
      let n = l.getAttribute("data-idx");
      if (null !== n) {
        let l = parseInt(n);
        isNaN(l) || l === e.hoveredIndex || t(e => e?.mode === "hover" ? {
          ...e,
          hoveredIndex: l
        } : e);
      }
    }
  };
  return jsx("div", {
    className: "grid_picker--gridBoxes--WuMui",
    style: {
      "--cols": 12,
      "--rows": 8
    },
    onPointerOver: t => {
      e?.mode === "hover" && c(t);
    },
    onKeyDown: n => {
      let l = n.target.getAttribute("data-idx");
      if (!l) return;
      let r = parseInt(l);
      let a = r % 12;
      let o = Math.floor(r / 12);
      let s = o;
      let c = a;
      switch (n.code) {
        case "KeyK":
        case "ArrowUp":
          s = Math.max(o - 1, 0);
          break;
        case "KeyJ":
        case "ArrowDown":
          s = Math.min(o + 1, 7);
          break;
        case "KeyH":
        case "ArrowLeft":
          c = Math.max(a - 1, 0);
          break;
        case "KeyL":
        case "ArrowRight":
          c = Math.min(a + 1, 11);
          break;
        case "Home":
          c = 0;
          break;
        case "End":
          c = 11;
          break;
        case "PageUp":
          s = 0;
          break;
        case "PageDown":
          s = 7;
          break;
        case "KeyX":
          {
            let e = s;
            s = c;
            c = e;
            break;
          }
        case "Enter":
          if (e?.mode === "hover") {
            let e = Math.floor(r / 12);
            i({
              cols: r % 12 + 1,
              rows: e + 1
            });
          }
          n.preventDefault();
          n.stopPropagation();
          return;
        default:
          return;
      }
      n.stopPropagation();
      n.preventDefault();
      let d = 12 * s + c;
      t(e => e ? "hover" === e.mode ? {
        ...e,
        hoveredIndex: d
      } : "input" === e.mode ? {
        mode: "hover",
        hoveredIndex: d
      } : e : null);
      let u = n.currentTarget.querySelector(`[data-idx='${d}']`);
      u?.focus();
    },
    onFocusCapture: e => {
      let n = e.target;
      if (n instanceof HTMLButtonElement && n.hasAttribute("data-idx")) {
        let e = n.getAttribute("data-idx");
        if (null !== e) {
          let n = parseInt(e);
          isNaN(n) || t(e => e ? "hover" === e.mode && e.hoveredIndex !== n ? {
            ...e,
            hoveredIndex: n
          } : e : null);
        }
      }
    },
    children: M9(96, t => {
      let c;
      let d = t % 12;
      let u = Math.floor(t / 12);
      let p = !1;
      if (e?.mode === "input") {
        let {
          intermediateCols,
          intermediateRows
        } = e;
        let l = "number" == typeof intermediateCols && intermediateCols > 0;
        let i = "number" == typeof intermediateRows && intermediateRows > 0;
        c = l && i && d < intermediateCols && u < intermediateRows;
        p = l && i && d + 1 === intermediateCols && u + 1 === intermediateRows;
      } else {
        c = e?.hoveredIndex !== null && d <= o && u <= s;
        p = d === o && u === s;
      }
      let g = null !== a && d < a.cols && u < a.rows;
      return jsx(ee, {
        cellCol: d + 1,
        cellRow: u + 1,
        index: t,
        isInitialSize: g,
        isPressed: p,
        isSelected: c,
        mode: e?.mode || "hover",
        onCommit: i,
        onReEnableHover: n,
        recordingKey: Pt(r, u + 1, d + 1)
      }, t);
    })
  });
});
export function $$es1(e) {
  let t = d4(Sh);
  let n = 1 === t.length && t[0] ? t[0] : "";
  return Fk((t, n) => {
    let l = t.get(n);
    return l ? "PARENT" === e && l.isGrid ? n : "CHILD" === e && l.isGridChild ? n : null : null;
  }, n);
}
function ec({
  recordingKey: e
}) {
  let t = $$es1("CHILD");
  let n = Fk((e, t) => {
    if (!t) return null;
    let n = e.get(t);
    return n && n.isGridChild ? {
      rowAnchorIndex: n.gridRowAnchorIndex,
      columnAnchorIndex: n.gridColumnAnchorIndex,
      rowSpan: n.gridRowSpan,
      columnSpan: n.gridColumnSpan
    } : null;
  }, t);
  let r = useCallback((e, t) => {
    l7.user("grid-panel", () => {
      HV5 && t >= 0 && HV5.setTrackAnchor(e, t);
    });
  }, []);
  let o = useCallback((e, n) => {
    null !== t && l7.user("grid-panel", () => {
      let l = UN();
      let i = l.get(t);
      let r = i && i.parentGuid && l.get(i.parentGuid);
      i && r && n >= 1 && (e === CXS.ROW ? i.gridRowAnchorIndex + n <= r.gridRowCount && (i.gridRowSpan = n) : i.gridColumnAnchorIndex + n <= r.gridColumnCount && (i.gridColumnSpan = n));
    });
  }, [t]);
  return wx() ? null : t ? jsxs(Fragment, {
    children: [jsx(fn, {
      leftLabel: "Rows",
      rightLabel: "Columns",
      leftInput: jsx(Ht, {
        value: n?.rowAnchorIndex ?? void 0,
        onValueChange: e => r(CXS.ROW, e),
        recordingKey: Pt(e, "grid-rows"),
        id: "grid-rows",
        dispatch: lQ,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("fullscreen.properties_panel.grid.row_index"),
        children: jsx("span", {
          className: `${QK} svg`,
          children: _$$t("fullscreen.properties_panel.grid_panel.r")
        })
      }),
      rightInput: jsx(Ht, {
        value: n?.columnAnchorIndex ?? void 0,
        onValueChange: e => r(CXS.COLUMN, e),
        recordingKey: Pt(e, "grid-columns"),
        id: "grid-columns",
        dispatch: lQ,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("fullscreen.properties_panel.grid.column_index"),
        children: jsx("span", {
          className: `${QK} svg`,
          children: _$$t("fullscreen.properties_panel.grid_panel.c")
        })
      }),
      icon: null
    }), jsx(fn, {
      leftLabel: "Rows",
      rightLabel: "Columns",
      leftInput: jsx(Ht, {
        value: n?.rowSpan,
        onValueChange: e => o(CXS.ROW, e),
        recordingKey: Pt(e, "grid-rows"),
        id: "grid-rows",
        dispatch: lQ,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("fullscreen.properties_panel.grid.vertical_span"),
        children: jsx(_$$B, {
          svg: _$$A6,
          className: QK
        })
      }),
      rightInput: jsx(Ht, {
        value: n?.columnSpan,
        onValueChange: e => o(CXS.COLUMN, e),
        recordingKey: Pt(e, "grid-columns"),
        id: "grid-columns",
        dispatch: lQ,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("fullscreen.properties_panel.grid.horizontal_span"),
        children: jsx(_$$B, {
          svg: _$$A5,
          className: QK
        })
      }),
      icon: null
    })]
  }) : null;
}
function ed({
  recordingKey: e
}) {
  let t = Fk(e => {
    let t = e.getDirectlySelectedNodes();
    if (1 !== t.length) return null;
    let n = t[0];
    if (!n || !n.isGridChild || "ABSOLUTE" === n.stackPositioning) return null;
    let l = n.parentNode;
    if (!l || !l.isGrid) return null;
    let i = l.gridRowSizesInOrder[n.gridRowAnchorIndex];
    let r = l.gridColumnSizesInOrder[n.gridColumnAnchorIndex];
    return i && r ? {
      gridChildId: n.guid,
      rowSpan: n.gridRowSpan,
      columnSpan: n.gridColumnSpan,
      maxRowSpan: l.gridRowCount - n.gridRowAnchorIndex,
      maxColumnSpan: l.gridColumnCount - n.gridColumnAnchorIndex,
      rowSpanEnabled: i.maxSizing.type !== sAE.HUG,
      columnSpanEnabled: r.maxSizing.type !== sAE.HUG
    } : null;
  });
  let n = _$$S({
    min: 1,
    max: t?.maxColumnSpan
  });
  let r = _$$S({
    min: 1,
    max: t?.maxRowSpan
  });
  let a = useCallback((e, n, l) => {
    null !== t && null !== t.gridChildId && l7.user("grid-panel", () => {
      let i = UN().get(t.gridChildId);
      let r = i && i.parentNode;
      i && r && (i.setSpanAndUpdateChildPositions(e, n), l && Y5.triggerAction("commit"));
    });
  }, [t]);
  return t ? jsx(Fragment, {
    children: jsx(fn, {
      leftLabel: _$$t("fullscreen.properties_panel.grid.column_span"),
      rightLabel: _$$t("fullscreen.properties_panel.grid.row_span"),
      leftInput: jsx(_$$N, {
        "aria-label": _$$t("fullscreen.properties_panel.grid.column_span"),
        formatter: n,
        value: t.columnSpan,
        onChange: (e, {
          commit: t
        }) => {
          a(_0v.X, e, t);
        },
        disabled: !t.columnSpanEnabled,
        icon: jsx(_$$B, {
          svg: _$$A3,
          className: QK
        }),
        recordingKey: Pt(e, "gridColumnSpan"),
        "data-testid": "grid-column-span-input"
      }),
      rightInput: jsx(_$$N, {
        "aria-label": _$$t("fullscreen.properties_panel.grid.row_span"),
        formatter: r,
        value: t.rowSpan,
        onChange: (e, {
          commit: t
        }) => {
          a(_0v.Y, e, t);
        },
        disabled: !t.rowSpanEnabled,
        icon: jsx(_$$B, {
          svg: _$$A4,
          className: QK
        }),
        recordingKey: Pt(e, "gridRowSpan"),
        "data-testid": "grid-row-span-input"
      }),
      icon: null
    })
  }) : null;
}
export function $$eu0({
  recordingKey: e,
  isSelectionStackOrGrid: t
}) {
  return jsxs(Fragment, {
    children: [getFeatureFlags().ce_tv_grid_ga && jsx(ed, {
      recordingKey: e
    }), t && jsx(ep, {
      recordingKey: e
    }), getFeatureFlags().ce_tv_grid_experimental && jsx(ec, {
      recordingKey: e
    })]
  });
}
function ep({
  recordingKey: e
}) {
  let t = kl("isInstanceSelected");
  let n = kl("isNonEditableInstanceSublayerSelected");
  return "GRID" !== kl("stackMode") ? null : jsx(iZ, {
    leftLabel: _$$t("fullscreen.properties_panel.stack_panel.grid"),
    rightLabel: _$$t("fullscreen.properties_panel.section_autoLayout.label_gap"),
    leftInput: jsx(Y, {
      recordingKey: Pt(e, "gridPicker"),
      disabled: !!(t || n)
    }),
    topRightInput: jsx(eg, {
      recordingKey: Pt(e, "gridColumnSpacingControl")
    }),
    bottomRightInput: jsx(e_, {
      recordingKey: Pt(e, "gridRowSpacingControl")
    }),
    topIcon: jsx(_$$o, {
      recordingKey: Pt(e, "stackLayoutDetails")
    }),
    bottomIcon: null
  });
}
let eh = ["GRID_COLUMN_GAP"];
function eg({
  recordingKey: e
}) {
  let t = Wx();
  let n = Y9();
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = sT();
  let [u, h] = lJ("gridColumnGap");
  let g = useCallback((e, t) => {
    l7.user("grid-panel", () => {
      SX(e) || h(e, t);
    });
  }, [h]);
  let m = jsx($j, {
    bigNudgeAmount,
    "data-tooltip": _$$t("fullscreen.properties_panel.grid.gap_between_columns"),
    "data-tooltip-type": Ib.TEXT,
    dataTestId: "grid-col-spacing-control",
    dispatch: lQ,
    inputClassName: hF,
    isTokenizable: !0,
    noBorderOnHover: !0,
    onBlur: () => t(RN9.SPACING, !1),
    onFocus: () => t(RN9.SPACING, !0),
    onMouseEnter: () => n(RN9.SPACING, !0),
    onMouseLeave: () => n(RN9.SPACING, !1),
    onScrubBegin: () => t(RN9.SPACING, !0),
    onScrubEnd: () => t(RN9.SPACING, !1),
    onValueChange: g,
    recordingKey: e,
    smallNudgeAmount,
    value: u ?? 0,
    children: jsx(_$$E, {
      className: QK
    })
  });
  return getFeatureFlags().grid_gap_vars ? jsx(sA, {
    fields: eh,
    resolvedType: rXF.FLOAT,
    currentFieldValue: hS(u) ? u : void 0,
    children: m
  }) : m;
}
let em = ["GRID_ROW_GAP"];
function e_({
  recordingKey: e
}) {
  let t = Wx();
  let n = Y9();
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = sT();
  let [u, h] = lJ("gridRowGap");
  let g = useCallback((e, t) => {
    l7.user("grid-panel", () => {
      SX(e) || h(e, t);
    });
  }, [h]);
  let m = jsx($j, {
    bigNudgeAmount,
    "data-tooltip": _$$t("fullscreen.properties_panel.grid.gap_between_rows"),
    "data-tooltip-type": Ib.TEXT,
    dataTestId: "grid-row-spacing-control",
    dispatch: lQ,
    inputClassName: hF,
    isTokenizable: !0,
    noBorderOnHover: !0,
    onBlur: () => t(RN9.COUNTER_SPACING, !1),
    onFocus: () => t(RN9.COUNTER_SPACING, !0),
    onMouseEnter: () => n(RN9.COUNTER_SPACING, !0),
    onMouseLeave: () => n(RN9.COUNTER_SPACING, !1),
    onScrubBegin: () => t(RN9.COUNTER_SPACING, !0),
    onScrubEnd: () => t(RN9.COUNTER_SPACING, !1),
    onValueChange: g,
    recordingKey: e,
    smallNudgeAmount,
    value: u ?? 0,
    children: jsx(_$$W, {
      className: QK
    })
  });
  return getFeatureFlags().grid_gap_vars ? jsx(sA, {
    fields: em,
    resolvedType: rXF.FLOAT,
    currentFieldValue: hS(u) ? u : void 0,
    children: m
  }) : m;
}
export const tL = $$eu0;
export const pq = $$es1;