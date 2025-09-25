import { jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { ButtonPrimitive } from "../905/632989";
import { J } from "../905/125993";
import { D } from "../905/716990";
import { Fullscreen } from "../figma_app/763686";
import { generateRecordingKey } from "../figma_app/878298";
import { isInteractionPathCheck } from "../figma_app/897289";
import { ErrorBoundaryCrash } from "../905/751457";
import { getI18nString } from "../905/303541";
import { Fj } from "../figma_app/793429";
import { selectViewAction } from "../905/929976";
import { hideModalHandler, showModal } from "../905/156213";
import { isVsCodeEnvironment } from "../905/858738";
import { getSelectedView } from "../figma_app/386952";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { P } from "../905/647955";
import { VariableDetailModal, MatchingVariablesModal, StyleDetailModalWidth, ModalPadding, ModalWindowType, MatchingVariablesModalWidth, StyleDetailModal, VariableDetailModalWidth } from "../905/560959";
import { Zh, g_, _o } from "../905/729876";
function x({
  toggled: e,
  onClick: t,
  recordingKey: r
}) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "varDetails_inspectEntry",
    fallback: jsx(O, {}),
    team: ServiceCategories.DEVELOPER_TOOLS,
    sentryTags: {
      area: ServiceCategories.DEVELOPER_TOOLS
    },
    children: jsx(ButtonPrimitive, {
      "aria-label": getI18nString("dev_handoff.variables.details_button_aria_label"),
      onClick: t,
      className: e ? Zh : g_,
      "aria-pressed": e,
      recordingKey: r,
      htmlAttributes: {
        "data-tooltip": getI18nString("dev_handoff.variables.details_button_aria_label"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(J, {})
    })
  });
}
function N({
  toggled: e,
  matchingVars: t,
  onClick: r,
  recordingKey: i
}) {
  let a = t.ids.length;
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "suggestedVars_inspectEntry",
    fallback: jsx(O, {}),
    team: ServiceCategories.DEVELOPER_TOOLS,
    sentryTags: {
      area: ServiceCategories.DEVELOPER_TOOLS
    },
    children: jsx(ButtonPrimitive, {
      "aria-label": getI18nString("dev_handoff.code_panel.suggested_vars_tooltip", {
        count: a
      }),
      onClick: r,
      className: e ? Zh : g_,
      "aria-pressed": e,
      recordingKey: i,
      htmlAttributes: {
        "data-tooltip": getI18nString("dev_handoff.code_panel.suggested_vars_tooltip", {
          count: a
        }),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(D, {})
    })
  });
}
function C({
  toggled: e,
  onClick: t,
  recordingKey: r
}) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "styleDetails_inspectEntry",
    fallback: jsx(O, {}),
    team: ServiceCategories.DEVELOPER_TOOLS,
    sentryTags: {
      area: ServiceCategories.DEVELOPER_TOOLS
    },
    children: jsx(ButtonPrimitive, {
      "aria-label": getI18nString("dev_handoff.styles.details_button_aria_label"),
      onClick: t,
      className: e ? Zh : g_,
      "aria-pressed": e,
      recordingKey: r,
      htmlAttributes: {
        "data-tooltip": getI18nString("dev_handoff.styles.details_button_aria_label"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(J, {})
    })
  });
}
export function $$w2(e) {
  let t = useSelector(e => e.modalShown);
  let r = !!t && t.type === VariableDetailModal && t.data?.rowRef && t.data.rowRef.current === e?.current;
  let n = !!t && t.type === MatchingVariablesModal && t.data?.rowRef && t.data.rowRef.current === e?.current;
  return r || n;
}
function O() {
  return jsx("div", {
    className: _o
  });
}
export function $$R0({
  variableId: e,
  matchingVars: t,
  rowRef: r,
  rowRefForModalId: i,
  isHovered: a,
  recordingKey: s
}) {
  return jsx($$L1, {
    variableId: e,
    matchingVars: t,
    rowRef: r,
    rowRefForModalId: i,
    isHovered: a,
    recordingKey: s
  });
}
export function $$L1({
  variableId: e,
  matchingVars: t,
  styleId: r,
  styleNodeId: s,
  styleType: o,
  rowRef: l,
  rowRefForModalId: d,
  isHovered: _,
  recordingKey: h
}) {
  let {
    isDetailModalShownForRow,
    toggleDetailModal
  } = function (e, t, r) {
    let n = useDispatch();
    let s = useSelector(e => e.modalShown);
    let o = getSelectedView();
    let l = !!s && s.type === VariableDetailModal;
    let d = l && s.data.variableId === t && s.data.rowRef.current === (r?.current ?? e?.current) || !!o.variableIdForDetailsPanel && o.variableIdForDetailsPanel === t;
    return {
      toggleDetailModal: useCallback(i => {
        if (i.stopPropagation(), e?.current && t && "fullscreen" === o.view) {
          if (d) {
            isVsCodeEnvironment() ? n(selectViewAction({
              ...o,
              variableIdForDetailsPanel: void 0
            })) : n(hideModalHandler());
            return;
          }
          if (isVsCodeEnvironment()) n(selectViewAction({
            ...o,
            variableIdForDetailsPanel: t
          }));else {
            l && n(hideModalHandler());
            let i = calculatePickerPositionLeft(e?.current, StyleDetailModalWidth + ModalPadding);
            n(showModal({
              type: VariableDetailModal,
              data: {
                position: i,
                variableId: t,
                rowRef: r ?? e,
                entryPoint: ModalWindowType.Properties
              },
              optOutOfPrevModal: !0
            }));
          }
        }
      }, [n, l, d, e, r, o, t]),
      isDetailModalShownForRow: d
    };
  }(l, e, d);
  let {
    isMatchingVarsModalShownForRow,
    toggleMatchingVarsModal
  } = function (e, t, r) {
    let n = useDispatch();
    let s = useSelector(e => e.modalShown);
    let o = !!s && s.type === MatchingVariablesModal;
    let l = o && s.data?.rowRef && s.data.rowRef.current === (r?.current ?? e?.current);
    return {
      toggleMatchingVarsModal: useCallback(i => {
        if (i.stopPropagation(), !e?.current || !t) return;
        if (l) {
          n(hideModalHandler());
          return;
        }
        o && n(hideModalHandler());
        let a = calculatePickerPositionLeft(e?.current, MatchingVariablesModalWidth + ModalPadding);
        n(showModal({
          type: MatchingVariablesModal,
          data: {
            vars: t,
            position: a,
            rowRef: r ?? e,
            entryPoint: ModalWindowType.Properties
          },
          optOutOfPrevModal: !0
        }));
      }, [n, o, l, e, r, t]),
      isMatchingVarsModalShownForRow: l
    };
  }(l, t, d);
  let {
    isStyleDetailModalShownForRow,
    toggleStyleDetailModal
  } = function (e, t, r, n, s) {
    let o = useDispatch();
    let l = useSelector(e => e.modalShown);
    let d = getSelectedView();
    let u = !!l && l.type === StyleDetailModal;
    let p = u && l.data?.rowRef && l.data.rowRef.current === (s?.current ?? e?.current) || d.styleForDetailsPanel?.styleId === t;
    let {
      key,
      content_hash,
      style_type
    } = Fj(t) ?? {};
    let S = useMemo(() => key ? {
      key,
      version: content_hash
    } : void 0, [key, content_hash]);
    let A = useDeepEqualSceneValue((e, t) => t ? e?.getStyleNodeByRef(t)?.guid : void 0, S) ?? r;
    return {
      toggleStyleDetailModal: useCallback(r => {
        if (r.stopPropagation(), e?.current && t && A && n) {
          if (p) {
            isVsCodeEnvironment() ? o(selectViewAction({
              ...d,
              styleForDetailsPanel: void 0
            })) : o(hideModalHandler());
            return;
          }
          if (Fullscreen?.selectStyleByGuid(A), isVsCodeEnvironment()) o(selectViewAction({
            ...d,
            styleForDetailsPanel: {
              styleId: t,
              styleNodeId: A,
              styleType: style_type ?? n
            }
          }));else {
            u && o(hideModalHandler());
            let r = calculatePickerPositionLeft(e.current, VariableDetailModalWidth + ModalPadding);
            o(showModal({
              type: StyleDetailModal,
              data: {
                styleId: t,
                styleNodeId: A,
                styleType: style_type ?? n,
                position: r,
                rowRef: s ?? e
              },
              optOutOfPrevModal: !0
            }));
          }
        }
      }, [o, u, p, e, s, d, t, A, n, style_type]),
      isStyleDetailModalShownForRow: p
    };
  }(l, r, s, o, d);
  if (P()) return jsx(O, {});
  if (e && (_ || isDetailModalShownForRow || isInteractionPathCheck())) return jsx("div", {
    className: _o,
    children: jsx(x, {
      onClick: toggleDetailModal,
      toggled: isDetailModalShownForRow,
      recordingKey: generateRecordingKey(h, `details_entry.${e}`)
    })
  });
  if (s && o && (_ || isStyleDetailModalShownForRow || isInteractionPathCheck())) return jsx("div", {
    className: _o,
    children: jsx(C, {
      onClick: toggleStyleDetailModal,
      toggled: isStyleDetailModalShownForRow,
      recordingKey: generateRecordingKey(h, `styleDetails_entry.${s}`)
    })
  });
  let k = !!t && t.ids.length > 0;
  return !isVsCodeEnvironment() && !e && k && (_ || isMatchingVarsModalShownForRow || isInteractionPathCheck()) ? jsx("div", {
    className: _o,
    children: jsx(N, {
      onClick: toggleMatchingVarsModal,
      matchingVars: t,
      toggled: isMatchingVarsModalShownForRow,
      recordingKey: generateRecordingKey(h, `suggestions_entry.${t?.rawValue.value.toString()}`)
    })
  }) : jsx(O, {});
}
export const $Q = $$R0;
export const J3 = $$L1;
export const Yq = $$w2;