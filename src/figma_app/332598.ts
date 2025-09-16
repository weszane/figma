import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterNotNullish } from "../figma_app/656233";
import { IconButton } from "../905/443068";
import { ScreenReaderOnly } from "../905/172252";
import { X } from "../905/736922";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import p from "classnames";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { Z } from "../905/189618";
import { d as _$$d } from "../905/86829";
import { Me } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { Spacer } from "../905/470281";
import { k as _$$k } from "../905/963262";
import { v4 } from "../figma_app/655139";
import { Z4, M$, NT, Q6 } from "../905/77776";
import { kt, j5, Gj } from "../figma_app/711907";
import { bv } from "../905/49095";
import { G6, P1 } from "../905/246310";
import { lW } from "../figma_app/11182";
import { showDropdownThunk } from "../905/929976";
import { Sl } from "../figma_app/8833";
import { KindEnum } from "../905/129884";
import { VZ } from "../figma_app/727192";
import { A as _$$A, x as _$$x } from "../905/141226";
import { IG, GM } from "../905/236606";
import { y as _$$y } from "../905/913030";
import { x4, BJ, L6, pG, wY, BA, eT, n8, vN, rq, R0, r9, Zh, Tw, S7, aW, jW, JM, fH, Cq, zB, p4, I$, Lo, ZP, _X, is, Eu, xP, fT, jJ, cH } from "../905/464604";
var _ = p;
let k = atom(!1);
let M = e => e.filter(e => !e.excludeFromCopy);
function F(e, t = {}) {
  return e.replace(Z4, "").replace(M$, "").replace(NT, "").replace(Q6, "").replace(G6, "").replace(P1, "").replace(_$$k, e => {
    let r = t[e];
    return r ? "INSTANCE" === r.type || "D2C" === r.type ? `/* ${r.name} */` : `/* ${r.message} */` : "/* unknown instance */";
  });
}
function j(e, t = {}) {
  return filterNotNullish(e.map(e => {
    let r = M(e.lines);
    return 0 === r.length ? null : F(kt(r, !0), t);
  })).join("\n\n");
}
export function $$U1({
  source: e,
  title: t,
  tooltip: r = getI18nString("inspect_panel.copy"),
  selectedAll: a,
  additionalTrackingProperties: s,
  onMouseEnter: o,
  onMouseLeave: d,
  ...u
}) {
  let p = v4();
  let _ = useMemo(() => ({
    name: "Copy code button",
    type: "code connect" !== e ? p.type : void 0,
    pluginId: "code connect" !== e ? p.id : void 0,
    selectedAll: a,
    source: e,
    title: t,
    isDevMode: !0,
    ...s
  }), [p.id, p.type, a, e, t, s]);
  return e ? jsx(Me, {
    ...u,
    "aria-label": u["aria-label"] ?? r,
    htmlAttributes: {
      "data-tooltip": r,
      "data-tooltip-type": KindEnum.TEXT,
      onMouseEnter: o,
      onMouseLeave: d
    },
    trackingProperties: _,
    children: jsx(X, {})
  }) : jsx(IconButton, {
    ...u,
    "aria-label": u["aria-label"] ?? r,
    htmlAttributes: {
      "data-tooltip": r,
      "data-tooltip-type": KindEnum.TEXT,
      onMouseEnter: o,
      onMouseLeave: d
    },
    children: jsx(X, {})
  });
}
export function $$B5({
  onClick: e,
  copyAllActionEnabled: t = !1,
  onMouseEnter: r,
  onMouseLeave: i,
  title: a,
  isCopyingAll: s = !1,
  additionalTrackingProperties: o
}) {
  let l = a ?? getI18nString("inspect_panel.copy_section_default_sectionname");
  let d = t ? getI18nString("inspect_panel.copy_section_with_shift", {
    sectionName: l
  }) : getI18nString("inspect_panel.copy_section", {
    sectionName: l
  });
  return jsx($$U1, {
    onClick: e,
    onMouseEnter: r,
    onMouseLeave: i,
    tooltip: d,
    source: "codegen",
    title: a,
    selectedAll: s,
    additionalTrackingProperties: o
  });
}
export function $$G4(e) {
  let {
    code,
    section,
    hasCodeDiff,
    collapseLongSections = !0,
    bottomPadding = !1,
    copyActionEnabled = !0,
    copyAllActionEnabled = !0,
    hideHints = !1,
    recordingKey,
    additionalHeaderActions = null,
    footerActions = null,
    type = "default",
    leftHeaderActions = null,
    hideHeader = !1,
    copyButtonContainer,
    additionalTrackingProperties,
    onInstancePillClick,
    includeMargin = !0
  } = e;
  section.collapseAfterIndex || (r = {
    ...section,
    collapseAfterIndex: 15
  });
  let M = useSelector(e => Object.keys(e.mirror.sceneGraphSelection)[0]);
  let F = useDispatch();
  let U = function (e, t) {
    let r = useDispatch();
    return IG(e.lines, e.language, e.pills, r, t);
  }(section, onInstancePillClick);
  let [G, Y] = useState(collapseLongSections);
  let [$, X] = useState(!1);
  let [q, J] = useAtomValueAndSetter(k);
  let Z = copyAllActionEnabled && q;
  useEffect(() => {
    Y(collapseLongSections);
  }, [M, collapseLongSections]);
  let Q = useMemo(() => G && section.collapseAfterIndex ? U.slice(0, section.collapseAfterIndex) : U, [U, section.collapseAfterIndex, G]);
  let ee = section.collapseAfterIndex ? U.length - section.collapseAfterIndex : 0;
  let et = useCallback(() => {
    if (!Z) return j([section], section.pills);
    {
      let e = code.reduce((e, t) => Object.assign(e, t.pills), {});
      return j(code, e);
    }
  }, [Z, section, code]);
  let er = useCallback(() => {
    let e = et();
    e && F(lW({
      stringToCopy: e,
      ignoreLineBreaks: !1
    }));
  }, [F, et]);
  let en = useHandleMouseEvent(generateRecordingKey(recordingKey, "copy"), "click", er);
  let ei = useCallback(() => {
    F(lW({
      stringToCopy: window.getSelection()?.toString() || et(),
      ignoreLineBreaks: !1
    }));
  }, [F, et]);
  let ea = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    let {
      clientX,
      clientY
    } = e;
    F(showDropdownThunk({
      type: Sl,
      data: {
        clientX,
        clientY,
        onCopyText: ei
      }
    }));
  }, [ei, F]);
  let es = useCallback(e => {
    copyAllActionEnabled && J(e.shiftKey);
    X(!0);
  }, [J, copyAllActionEnabled]);
  let eo = useHandleMouseEvent(generateRecordingKey(recordingKey, "copy"), "mouseenter", es);
  let el = useCallback(e => {
    J(!1);
    X(!1);
  }, [J]);
  let ed = useCallback(e => {
    J($ && copyAllActionEnabled && e.shiftKey);
  }, [$, J, copyAllActionEnabled]);
  useEffect(() => (document.addEventListener("keydown", ed), document.addEventListener("keyup", ed), () => {
    document.removeEventListener("keydown", ed);
    document.removeEventListener("keyup", ed);
  }), [ed]);
  let ec = function (e) {
    switch (e) {
      case "Modifier":
        return getI18nString("inspect_panel.code.modifier");
      case "Code":
        return getI18nString("inspect_panel.code.code");
      case "Style":
        return getI18nString("inspect_panel.code.style");
      case "Variables":
        return getI18nString("inspect_panel.code.variables");
      case "Layout":
        return getI18nString("inspect_panel.properties.layout");
      case "Position":
        return getI18nString("inspect_panel.code.position");
      case "Other":
        return getI18nString("inspect_panel.code.other");
      case "Typography":
        return getI18nString("inspect_panel.typography.title");
      default:
        return e;
    }
  }(section.name);
  let eu = $ || Z;
  let ep = useRef(null);
  let e_ = useMemo(() => function () {
    return jsx($$B5, {
      onClick: en,
      copyAllActionEnabled,
      onMouseEnter: eo,
      onMouseLeave: el,
      title: section.name,
      isCopyingAll: Z,
      additionalTrackingProperties
    });
  }, [en, copyAllActionEnabled, eo, el, section.name, Z, additionalTrackingProperties]);
  return jsxs(Fragment, {
    children: [copyButtonContainer && copyButtonContainer.current && copyActionEnabled && createPortal(jsx(e_, {}), copyButtonContainer.current), jsx(VZ, {
      hideHeader: !0,
      noPadding: !bottomPadding,
      noBorder: !0,
      recordingKey: `code:${section.name}`,
      children: jsx(GM.Provider, {
        value: {
          ref: ep
        },
        children: jsx($$K2, {
          content: jsx(H, {
            code: section,
            lines: Q,
            hideHints: hideHints || eu,
            hasCodeDiff,
            isCopyHighlightActive: eu,
            onInstancePillClick: e.onInstancePillClick
          }),
          footer: footerActions ? jsx(W, {
            type,
            children: footerActions
          }) : void 0,
          header: !hideHeader && jsx($$z0, {
            type,
            rowRef: ep,
            muted: section.isTextSegment,
            actions: jsxs(Fragment, {
              children: [additionalHeaderActions || jsx(Spacer, {}), copyActionEnabled && jsx(e_, {})]
            }),
            title: ec,
            leftActions: leftHeaderActions,
            titleAccessory: e.titleAccessory
          }),
          includeMargin,
          leftGutter: hasCodeDiff ? function (e, t = !1) {
            return jsx("div", {
              className: x4,
              children: e.map((e, r) => {
                let i = e.diff === j5.ADDED ? "+" : e.diff === j5.REMOVED ? "-" : null;
                return jsx("div", {
                  className: _()({
                    [BJ]: !0,
                    [L6]: !t && e.diff === j5.ADDED,
                    [pG]: !t && e.diff === j5.REMOVED,
                    [wY]: t && !e.excludeFromCopy
                  }),
                  "aria-hidden": !0,
                  children: t ? null : i
                }, r);
              })
            });
          }(Q, eu) : $$V3(Q, eu),
          onContextMenu: ea,
          onShowMore: () => Y(!1),
          shouldShowMore: G && ee > 0,
          showMoreLinesCount: ee,
          type
        })
      })
    })]
  });
}
export function $$V3(e, t = !1) {
  return jsx("div", {
    className: BA,
    children: e.map((e, r) => jsx("div", {
      className: _()(eT, {
        [wY]: t && !e.excludeFromCopy
      }),
      "aria-hidden": !0,
      children: r + 1
    }, r))
  });
}
function H({
  code: e,
  lines: t,
  hideHints: r,
  hasCodeDiff: a,
  isCopyHighlightActive: s = !1,
  onInstancePillClick: o
}) {
  let l = useCallback(e => {
    let t;
    let r = e.target;
    r.classList.contains("instance-pill") ? t = r : r.parentElement?.classList.contains("instance-pill") && (t = r.parentElement);
    t && o?.(t.getAttribute("data-id") || "");
  }, [o]);
  let c = ({
    index: i
  }) => {
    let o = t[i];
    let c = e.lines[i];
    if (!o || !c) return null;
    let u = 8 * Gj(o).length + 16 + 8;
    let p = F(c.code.toString(), e.pills);
    let h = a && (o.diff === j5.ADDED || o.diff === j5.REMOVED);
    let m = jsxs("span", {
      style: {
        display: "inline-block",
        paddingLeft: u,
        paddingRight: 8,
        textIndent: -16,
        flexGrow: 1
      },
      "data-testid": `${e.name}${i}`,
      onClick: l,
      children: [h && jsxs(ScreenReaderOnly, {
        children: [o.diff === j5.ADDED && getI18nString("dev_handoff.compare_changes.code_line.added_line", {
          line: p
        }), o.diff === j5.REMOVED && getI18nString("dev_handoff.compare_changes.code_line.removed_line", {
          line: p
        })]
      }), jsx("span", {
        "aria-hidden": h,
        tabIndex: -1,
        children: o.code
      })]
    }, "code");
    let g = o.hint;
    let f = void 0 !== g && g.type === bv.Tooltip ? jsx(_$$A, {
      hint: _$$x(g),
      hidden: r
    }) : null;
    let y = e.lines[i]?.diff;
    return jsxs("div", {
      className: _()({
        [n8]: !0,
        [vN]: y === j5.ADDED && !s,
        [rq]: y === j5.REMOVED && !s,
        [R0]: a && y !== j5.ADDED && y !== j5.REMOVED && !s,
        [r9]: a && y === j5.REMOVED && s,
        [wY]: s && !o?.excludeFromCopy
      }),
      children: [m, f]
    }, i);
  };
  return jsx("code", {
    className: _()(Zh, _$$y),
    "data-lang": e.language,
    style: {
      minWidth: "100%",
      whiteSpace: "normal"
    },
    children: t.map((e, t) => c({
      index: t
    }))
  });
}
export function $$z0({
  title: e,
  muted: t,
  actions: r,
  type: i,
  leftActions: a,
  rowRef: s,
  titleAccessory: o
}) {
  return jsx("div", {
    className: Tw,
    ref: s,
    children: jsxs("div", {
      className: _()({
        [S7]: !0,
        [aW]: "connected" === i,
        [jW]: "manual" === i,
        [JM]: "connected-playground" === i
      }),
      children: [a, jsx("h3", {
        className: t ? fH : Cq,
        "data-testid": "devHandoffFocusPanelTitle",
        children: e
      }), o, jsx("div", {
        className: zB,
        children: r
      })]
    })
  });
}
function W({
  children: e,
  type: t
}) {
  return jsx("div", {
    className: p4,
    children: jsx("div", {
      className: _()({
        [I$]: !0,
        [aW]: "connected" === t,
        [jW]: "manual" === t
      }),
      children: e
    })
  });
}
export function $$K2({
  header: e,
  content: t,
  leftGutter: r,
  footer: a,
  type: s,
  shouldShowMore: o,
  showMoreLinesCount: l,
  onShowMore: d,
  onContextMenu: c,
  copyHoverClassName: u,
  includeMargin: p = !0
}) {
  let [h, f] = useState(null);
  let y = h && h.value ? Lo : ZP;
  let b = useCallback(e => {
    f({
      value: e
    });
  }, []);
  let T = !!r;
  let I = !!a;
  let S = useRef(null);
  return jsxs("div", {
    className: _X,
    children: [e, jsxs("div", {
      className: _()(is, u, {
        [Eu]: T,
        [xP]: I,
        [aW]: "connected" === s,
        [jW]: "manual" === s,
        [fT]: p
      }),
      children: [T && r, jsxs("div", {
        className: jJ,
        children: [jsx(Z, {
          onCanScrollChanged: b,
          className: _()(y),
          scrollBarAlways: !0,
          childRef: S,
          children: jsx("div", {
            onContextMenu: c,
            style: {
              width: "fit-content",
              minWidth: "100%"
            },
            ref: S,
            children: t
          })
        }), o && jsx("div", {
          className: cH,
          children: jsx(_$$d, {
            label: getI18nString("dev_handoff.code.show_more", {
              count: l
            }),
            onClick: d
          })
        })]
      })]
    }), I && a]
  });
}
export const n2 = $$z0;
export const rZ = $$U1;
export const ue = $$K2;
export const vl = $$V3;
export const yT = $$G4;
export const zM = $$B5;