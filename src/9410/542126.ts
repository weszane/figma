import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useMemo, useEffect } from "react";
import { createPortal } from "../vendor/944059";
import { useDispatch, useSelector } from "../vendor/514228";
import { o as _$$o } from "../905/821217";
import { d as _$$d } from "../905/976845";
import { b as _$$b, bL, mc, YJ, Q$, Ov, ME } from "../figma_app/860955";
import { z6, CU, H_ } from "../905/963340";
import { A as _$$A } from "../905/891805";
import { EditAction } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { BrowserInfo } from "../figma_app/778880";
import { Pt } from "../figma_app/806412";
import { yo } from "../905/125333";
import { y0, wv, MM } from "../figma_app/236327";
import { B as _$$B } from "../905/714743";
import { getI18nString } from "../905/303541";
import { to } from "../figma_app/828186";
import { sV, DI, zx, dY } from "../figma_app/712525";
import { lg } from "../figma_app/976749";
import { BK } from "../905/848862";
import { p8 } from "../figma_app/722362";
import { b4, _V, kM } from "../figma_app/421886";
import { Ib } from "../905/129884";
import { Jz } from "../905/504727";
import { cJ } from "../905/561485";
import { sW, p9 } from "../figma_app/463678";
import { wV, H9, ed, t1 } from "../9410/763216";
import { A as _$$A2 } from "../svg/7980";
var $$L0 = (e => (e.LEFT = "left", e.RIGHT = "right", e.CENTER = "center", e))($$L0 || {});
export function $$R1({
  lean: e,
  minWidth: t,
  shouldShowSearchCategories: i,
  recordingKey: n
}) {
  if (!getFeatureFlags().eu_fpl_migration_search_settings_menu) return jsx(D, {
    lean: e,
    minWidth: t,
    recordingKey: n
  });
  {
    let a = (e => {
      switch (e) {
        case "left":
          return "bottom-end";
        case "right":
        default:
          return "bottom-start";
        case "center":
          return "bottom";
      }
    })(e);
    return jsx(F, {
      minWidth: t,
      placement: a,
      shouldShowSearchCategories: i,
      recordingKey: n
    });
  }
}
function D({
  lean: e,
  minWidth: t,
  recordingKey: i
}) {
  let d = useDispatch();
  let c = BK("CANVAS_SEARCH_FILTER_DROPDOWN");
  let h = useRef(null);
  let y = p8("isReadOnly");
  let N = useAtomWithSubscription(yo);
  let A = useSelector(e => e.canvasSearch.filters);
  let L = useSelector(e => e.canvasSearch.mode);
  let R = "whiteboard" === lg();
  let D = cJ();
  let F = to();
  let B = useMemo(() => {
    let e = y ? [] : [jsx(y0, {
      primaryText: getI18nString("canvas_search.search"),
      checked: L === EditAction.FIND,
      onClick: () => {
        d(sV(EditAction.FIND));
        c.hide();
      },
      recordingKey: Pt(i, "settings.find")
    }, "find"), jsx(y0, {
      primaryText: getI18nString("canvas_search.replace"),
      checked: L === EditAction.REPLACE,
      onClick: () => {
        d(sV(EditAction.REPLACE));
        c.hide();
      },
      recordingKey: Pt(i, "settings", "replace")
    }, "replace"), jsx(wv, {}, "sep1")];
    let t = (t, n = !1) => {
      let a = !!A[t];
      e.push(jsx(M, {
        option: t,
        checked: a,
        counts: N,
        onClick: e => {
          n || e.ctrlKey || BrowserInfo.mac && e.metaKey ? (d(DI(t)), n && c.hide()) : (d(zx(t)), c.hide());
        },
        recordingKey: i
      }, t));
    };
    if (L === EditAction.FIND && !R && !F) {
      let n = !b4.some(e => !!A[e]);
      let a = Object.values(N).reduce((e, t) => e + t, 0);
      e.push(jsx(P, {
        checked: n,
        icon: _$$A2,
        label: getI18nString("canvas_search.filter.all"),
        count: a,
        onClick: () => {
          d(dY());
          c.hide();
        },
        recordingKey: Pt(i, "settings", "All")
      }));
      b4.forEach(e => t(e));
      e.push(jsx(wv, {}, "sep2"));
    }
    _V.forEach(e => t(e, !0));
    return e;
  }, [d, c, A, R, F, y, L, N, i]);
  useEffect(() => {
    y && L === EditAction.REPLACE && d(sV(EditAction.FIND));
  }, [d, y, L]);
  let U = h.current && jsx(Jz, {
    autofocusPrevElementOnEsc: !0,
    autofocusPrevElementOnSelect: !0,
    autofocusPrevElementOnTab: !1,
    hideDropdown: c.hide,
    lean: e,
    minWidth: t,
    options: B,
    propagateCloseClick: !0,
    recordingKey: Pt(i, "settings"),
    showPoint: !0,
    targetRect: h.current.getBoundingClientRect()
  });
  return jsxs(_$$o, {
    eventListeners: ["onClick", "onMouseUp"],
    children: [jsx("div", {
      ref: h,
      children: jsx(_$$d, {
        "aria-expanded": c.showing,
        onClick: () => c.toggle(),
        actionOnPointerDown: !0,
        "aria-label": getI18nString("canvas_search.settings"),
        recordingKey: Pt(i, "settings"),
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("canvas_search.settings")
        },
        children: jsx(_$$A, {})
      })
    }), c.showing && (D || F ? createPortal(U, document.body) : U)]
  });
}
function M(e) {
  let t = e.counts[e.option];
  let i = sW(e.option);
  let n = p9(e.option);
  return jsx(P, {
    checked: e.checked,
    icon: i,
    label: n,
    count: t,
    onClick: e.onClick,
    buttonRef: e.buttonRef,
    recordingKey: Pt(e, "settings", kM[e.option])
  });
}
function P({
  checked: e,
  icon: t,
  label: i,
  count: n,
  onClick: a,
  buttonRef: s,
  recordingKey: o
}) {
  return jsx(MM, {
    checked: e,
    onClick: a,
    recordingKey: o,
    buttonRef: s,
    children: jsxs("div", {
      className: wV,
      children: [t && jsx(_$$B, {
        className: H9,
        svg: t
      }), jsx("span", {
        className: ed,
        children: i
      }), !!n && jsx("span", {
        className: t1,
        children: n
      })]
    })
  });
}
function F({
  minWidth: e,
  placement: t,
  shouldShowSearchCategories: i,
  recordingKey: a
}) {
  let h = useDispatch();
  let f = p8("isReadOnly");
  let x = useAtomWithSubscription(yo);
  let y = useSelector(e => e.canvasSearch.filters);
  let C = useSelector(e => e.canvasSearch.mode);
  let {
    manager,
    getTriggerProps
  } = _$$b({
    initialPosition: t
  });
  let I = e => {
    h(sV(e));
    manager.setOpen(!1);
  };
  let k = (e, t) => {
    e?.ctrlKey || e?.metaKey ? h(DI(t)) : h(zx(t));
  };
  let A = e => {
    h(DI(e));
  };
  let L = C === EditAction.FIND && i;
  useEffect(() => {
    f && C === EditAction.REPLACE && h(sV(EditAction.FIND));
  }, [h, f, C]);
  return jsx(_$$o, {
    eventListeners: ["onClick", "onMouseUp"],
    children: jsxs(bL, {
      manager,
      children: [jsx(_$$d, {
        "aria-label": getI18nString("canvas_search.settings"),
        recordingKey: Pt(a, "settings"),
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("canvas_search.settings")
        },
        ...getTriggerProps(),
        children: jsx(_$$A, {})
      }), jsxs(mc, {
        children: [!f && jsx(Fragment, {
          children: jsxs(z6, {
            value: C.toString(),
            onChange: e => I(parseInt(e)),
            title: null,
            recordingKey: Pt(a, "mode_change"),
            children: [jsx(CU, {
              value: EditAction.FIND.toString(),
              children: jsx("span", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  ...(e ? {
                    minWidth: `${e}px`
                  } : {})
                },
                children: getI18nString("canvas_search.search")
              })
            }, "find"), jsx(CU, {
              value: EditAction.REPLACE.toString(),
              children: jsx("span", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  ...(e ? {
                    minWidth: `${e}px`
                  } : {})
                },
                children: getI18nString("canvas_search.replace")
              })
            }, "replace")]
          })
        }), L && jsxs(YJ, {
          children: [jsx(B, {
            recordingKey: Pt(a, "settings", "All"),
            checked: !b4.some(e => !!y[e]),
            onChange: () => {
              h(dY());
            },
            icon: _$$A2,
            label: getI18nString("canvas_search.filter.all"),
            count: Object.values(x).reduce((e, t) => e + t, 0),
            minWidth: e
          }), b4.map(t => jsx(B, {
            recordingKey: Pt(a, "settings", kM[t]),
            checked: !!y[t],
            onChange: e => k(e, t),
            icon: sW(t),
            label: p9(t),
            count: x[t],
            minWidth: e
          }, t))]
        }), jsx(YJ, {
          children: _V.map(e => jsx(B, {
            recordingKey: Pt(a, "settings", kM[e]),
            checked: !!y[e],
            onChange: () => A(e),
            icon: sW(e),
            label: p9(e)
          }, e))
        })]
      })]
    })
  });
}
function B({
  checked: e,
  onChange: t,
  icon: i,
  label: n,
  count: a,
  recordingKey: s,
  minWidth: o
}) {
  return jsx(H_, {
    recordingKey: s,
    checked: e,
    onChange: (e, i) => {
      t(i?.event);
    },
    children: jsxs("span", {
      style: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        ...(o ? {
          minWidth: `${o}px`
        } : {})
      },
      children: [i && jsx(Q$, {
        children: jsx(_$$B, {
          className: H9,
          svg: i
        })
      }), n, !!a && jsx(Ov, {
        children: jsx(ME, {
          "data-testid": Pt(s, "count"),
          children: a
        })
      })]
    })
  });
}
export const I_ = $$L0;
export const Od = $$R1;