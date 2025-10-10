import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { EventShield } from "../905/821217";
import { DialogTriggerButton } from "../905/976845";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuGroupComp, MenuItemLead, MenuItemTrail, MenuSubText } from "../figma_app/860955";
import { z6, CU, H_ } from "../905/963340";
import { A as _$$A } from "../905/891805";
import { EditAction } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { BrowserInfo } from "../figma_app/778880";
import { generateRecordingKey } from "../figma_app/878298";
import { configAtom } from "../905/125333";
import { TextOptionComponent, SeparatorComponent, CheckableOptionComponent } from "../figma_app/236327";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { setCanvasSearchMode, toggleCanvasSearchCategoryFilter, switchCanvasSearchCategoryFilterExclusive, clearCanvasSearchCategoryFilters } from "../figma_app/712525";
import { getCurrentFileType } from "../figma_app/976749";
import { useDropdown } from "../905/848862";
import { useAppModelProperty } from "../figma_app/722362";
import { primaryNodeTypes, searchOptions, NodeType } from "../figma_app/421886";
import { KindEnum } from "../905/129884";
import { PointingDropdown } from "../905/504727";
import { useIsFullscreenSitesView } from "../905/561485";
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
  let d = useDispatch<AppDispatch>();
  let c = useDropdown("CANVAS_SEARCH_FILTER_DROPDOWN");
  let h = useRef(null);
  let y = useAppModelProperty("isReadOnly");
  let N = useAtomWithSubscription(configAtom);
  let A = useSelector(e => e.canvasSearch.filters);
  let L = useSelector(e => e.canvasSearch.mode);
  let R = "whiteboard" === getCurrentFileType();
  let D = useIsFullscreenSitesView();
  let F = useIsSelectedViewFullscreenCooper();
  let B = useMemo(() => {
    let e = y ? [] : [jsx(TextOptionComponent, {
      primaryText: getI18nString("canvas_search.search"),
      checked: L === EditAction.FIND,
      onClick: () => {
        d(setCanvasSearchMode(EditAction.FIND));
        c.hide();
      },
      recordingKey: generateRecordingKey(i, "settings.find")
    }, "find"), jsx(TextOptionComponent, {
      primaryText: getI18nString("canvas_search.replace"),
      checked: L === EditAction.REPLACE,
      onClick: () => {
        d(setCanvasSearchMode(EditAction.REPLACE));
        c.hide();
      },
      recordingKey: generateRecordingKey(i, "settings", "replace")
    }, "replace"), jsx(SeparatorComponent, {}, "sep1")];
    let t = (t, n = !1) => {
      let a = !!A[t];
      e.push(jsx(M, {
        option: t,
        checked: a,
        counts: N,
        onClick: e => {
          n || e.ctrlKey || BrowserInfo.mac && e.metaKey ? (d(toggleCanvasSearchCategoryFilter(t)), n && c.hide()) : (d(switchCanvasSearchCategoryFilterExclusive(t)), c.hide());
        },
        recordingKey: i
      }, t));
    };
    if (L === EditAction.FIND && !R && !F) {
      let n = !primaryNodeTypes.some(e => !!A[e]);
      let a = Object.values(N).reduce((e, t) => e + t, 0);
      e.push(jsx(P, {
        checked: n,
        icon: _$$A2,
        label: getI18nString("canvas_search.filter.all"),
        count: a,
        onClick: () => {
          d(clearCanvasSearchCategoryFilters());
          c.hide();
        },
        recordingKey: generateRecordingKey(i, "settings", "All")
      }));
      primaryNodeTypes.forEach(e => t(e));
      e.push(jsx(SeparatorComponent, {}, "sep2"));
    }
    searchOptions.forEach(e => t(e, !0));
    return e;
  }, [d, c, A, R, F, y, L, N, i]);
  useEffect(() => {
    y && L === EditAction.REPLACE && d(setCanvasSearchMode(EditAction.FIND));
  }, [d, y, L]);
  let U = h.current && jsx(PointingDropdown, {
    autofocusPrevElementOnEsc: !0,
    autofocusPrevElementOnSelect: !0,
    autofocusPrevElementOnTab: !1,
    hideDropdown: c.hide,
    lean: e,
    minWidth: t,
    options: B,
    propagateCloseClick: !0,
    recordingKey: generateRecordingKey(i, "settings"),
    showPoint: !0,
    targetRect: h.current.getBoundingClientRect()
  });
  return jsxs(EventShield, {
    eventListeners: ["onClick", "onMouseUp"],
    children: [jsx("div", {
      ref: h,
      children: jsx(DialogTriggerButton, {
        "aria-expanded": c.showing,
        onClick: () => c.toggle(),
        actionOnPointerDown: !0,
        "aria-label": getI18nString("canvas_search.settings"),
        recordingKey: generateRecordingKey(i, "settings"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
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
    recordingKey: generateRecordingKey(e, "settings", NodeType[e.option])
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
  return jsx(CheckableOptionComponent, {
    checked: e,
    onClick: a,
    recordingKey: o,
    buttonRef: s,
    children: jsxs("div", {
      className: wV,
      children: [t && jsx(SvgComponent, {
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
  let h = useDispatch<AppDispatch>();
  let f = useAppModelProperty("isReadOnly");
  let x = useAtomWithSubscription(configAtom);
  let y = useSelector(e => e.canvasSearch.filters);
  let C = useSelector(e => e.canvasSearch.mode);
  let {
    manager,
    getTriggerProps
  } = setupMenu({
    initialPosition: t
  });
  let I = e => {
    h(setCanvasSearchMode(e));
    manager.setOpen(!1);
  };
  let k = (e, t) => {
    e?.ctrlKey || e?.metaKey ? h(toggleCanvasSearchCategoryFilter(t)) : h(switchCanvasSearchCategoryFilterExclusive(t));
  };
  let A = e => {
    h(toggleCanvasSearchCategoryFilter(e));
  };
  let L = C === EditAction.FIND && i;
  useEffect(() => {
    f && C === EditAction.REPLACE && h(setCanvasSearchMode(EditAction.FIND));
  }, [h, f, C]);
  return jsx(EventShield, {
    eventListeners: ["onClick", "onMouseUp"],
    children: jsxs(MenuRootComp, {
      manager,
      children: [jsx(DialogTriggerButton, {
        "aria-label": getI18nString("canvas_search.settings"),
        recordingKey: generateRecordingKey(a, "settings"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("canvas_search.settings")
        },
        ...getTriggerProps(),
        children: jsx(_$$A, {})
      }), jsxs(MenuContainerComp, {
        children: [!f && jsx(Fragment, {
          children: jsxs(z6, {
            value: C.toString(),
            onChange: e => I(parseInt(e)),
            title: null,
            recordingKey: generateRecordingKey(a, "mode_change"),
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
        }), L && jsxs(MenuGroupComp, {
          children: [jsx(B, {
            recordingKey: generateRecordingKey(a, "settings", "All"),
            checked: !primaryNodeTypes.some(e => !!y[e]),
            onChange: () => {
              h(clearCanvasSearchCategoryFilters());
            },
            icon: _$$A2,
            label: getI18nString("canvas_search.filter.all"),
            count: Object.values(x).reduce((e, t) => e + t, 0),
            minWidth: e
          }), primaryNodeTypes.map(t => jsx(B, {
            recordingKey: generateRecordingKey(a, "settings", NodeType[t]),
            checked: !!y[t],
            onChange: e => k(e, t),
            icon: sW(t),
            label: p9(t),
            count: x[t],
            minWidth: e
          }, t))]
        }), jsx(MenuGroupComp, {
          children: searchOptions.map(e => jsx(B, {
            recordingKey: generateRecordingKey(a, "settings", NodeType[e]),
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
      children: [i && jsx(MenuItemLead, {
        children: jsx(SvgComponent, {
          className: H9,
          svg: i
        })
      }), n, !!a && jsx(MenuItemTrail, {
        children: jsx(MenuSubText, {
          "data-testid": generateRecordingKey(s, "count"),
          children: a
        })
      })]
    })
  });
}
export const I_ = $$L0;
export const Od = $$R1;