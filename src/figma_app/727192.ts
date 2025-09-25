import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useMemo, createContext, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { X as _$$X } from "../905/736922";
import { findScrollableOrVisibleParent } from "../figma_app/387100";
import { useAtomValueAndSetter, atom } from "../figma_app/27355";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import u from "classnames";
import { n as _$$n } from "../vendor/547481";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { j } from "../905/296640";
import { selectWithShallowEqual } from "../905/103090";
import { isCommandEvent, KeyCodes, getModifierBitmask } from "../905/63728";
import { BrowserInfo } from "../figma_app/778880";
import { y as _$$y } from "../figma_app/404310";
import { Me } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { useDevModeFocusId } from "../figma_app/88239";
import { lW } from "../figma_app/11182";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { selectOpenFileKey } from "../figma_app/516028";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { FEditorType } from "../figma_app/53721";
import { KindEnum } from "../905/129884";
import { x as _$$x, Q } from "../905/346809";
import { zi } from "../figma_app/626177";
import { X as _$$X2 } from "../905/839893";
import { F7, YK, S4, Tq, WD, JY, mD, yr, Xx, ty, Pm, UE, Dn, _ as _$$_, k6, W0, QU, HH, Rp, fF } from "../905/966634";
var p = u;
function P({
  name: e,
  fileKey: t,
  border: r,
  children: i,
  hideHeader: a,
  noPadding: s,
  noBorder: o,
  isSubsection: d,
  fadedTitle: c,
  recordingKey: u,
  dataTestId: _,
  onClick: m
}) {
  let {
    selectedNodeId,
    selectedPageId,
    isMultiSelect,
    sceneGraph,
    editorType
  } = selectWithShallowEqual(e => {
    let t = Object.keys(e.mirror.sceneGraphSelection);
    return {
      selectedPageId: e.mirror.appModel.currentPage,
      selectedNodeId: t[0],
      isMultiSelect: t.length > 1,
      sceneGraph: e.mirror.sceneGraph,
      editorType: "fullscreen" !== e.selectedView.view ? FEditorType.Design : e.selectedView.editorType
    };
  });
  let A = !!useDevModeFocusId();
  let x = r => {
    e && trackEventAnalytics("inspection_panel_shortcut", {
      ...r,
      file_key: t,
      name: e,
      editor_type: editorType
    });
  };
  let C = r ? F7 : YK;
  a && (C = r ? S4 : Tq);
  d && !c ? C = p()(C, WD) : s && (C = JY);
  o && (C = p()(C, mD));
  return jsx(zi, {
    className: C,
    onKeyDown: e => {
      let t = !1;
      if (isCommandEvent(e) && e.keyCode === KeyCodes.C ? (t = !0, x({
        action: "copy"
      })) : isCommandEvent(e) && e.keyCode === KeyCodes.A ? (t = !0, x({
        action: "select_all"
      })) : BrowserInfo.mac ? "Meta" === e.key && (t = !0) : "Control" === e.key && (t = !0), (e.target?.type === "text" || e.target?.type === "textarea" || e.target?.tabIndex === 0) && (t = !0), t) ;else {
        let e = window.getSelection();
        if (!e) return;
        e.removeAllRanges();
      }
    },
    onDoubleClick: r => {
      if (e) {
        trackEventAnalytics("inspection_panel_dbl_clicked", {
          name: e,
          x: r.clientX,
          y: r.clientY,
          modifiers: getModifierBitmask(r),
          fileKey: t,
          editor_type: editorType
        });
        return !1;
      }
    },
    onClick: r => {
      let n;
      let i;
      if (e) {
        if (m?.(r), selectedNodeId && sceneGraph) try {
          let e = findScrollableOrVisibleParent(sceneGraph, selectedNodeId);
          n = e?.guid;
          i = e?.type;
        } catch {}
        trackEventAnalytics("inspection_panel_clicked", {
          name: e,
          x: r.clientX,
          y: r.clientY,
          modifiers: getModifierBitmask(r),
          fileKey: t,
          selectedPageId,
          selectedNodeId,
          topLevelFrameId: n,
          topLevelNodeType: i,
          isMultiSelect,
          editor_type: editorType,
          isDevModeFocusView: A
        });
        return !1;
      }
    },
    recordingKey: u,
    "data-testid": _,
    id: _,
    children: i
  });
}
let D = (e, t) => {
  let [r, n] = useState(!1);
  let a = useCallback(() => n(!0), [n]);
  let s = useCallback(() => n(!1), [n]);
  return useMemo(() => ({
    value: r ? e : t,
    eventHandlers: {
      onMouseOver: a,
      onMouseOut: s
    },
    isHovered: r
  }), [r, e, t, a, s]);
};
let k = (e, t) => {
  let [r, n] = useState(!1);
  let a = useCallback(() => n(!0), [n]);
  let s = useCallback(() => n(!1), [n]);
  return useMemo(() => [r ? e : t, {
    onMouseDown: a,
    onMouseUp: s
  }], [r, e, t, a, s]);
};
export function $$M4(e, t) {
  let {
    value,
    eventHandlers,
    isHovered
  } = D(t);
  let [s, o] = k(e);
  return useMemo(() => ({
    value: s || value,
    eventHandlers: {
      ...eventHandlers,
      ...o
    },
    isHovered
  }), [s, o, value, eventHandlers, isHovered]);
}
let F = createContext({});
export function $$j2(e, t) {
  let r = useContext(F);
  let n = useMemo(() => ({
    name: (t || r).recordingKey
  }), [t, r]);
  let a = j(e, n);
  return (t || r).recordingKey ? a : noop;
}
export function $$U1(e) {
  let {
    title,
    copyAllValue,
    additionalHeaders,
    collapsedHeaders,
    eventHandlers,
    isHovered,
    recordingKey,
    isCollapsedAtom = G,
    collapseEnabled = !1,
    hasCollapsibleContent = !0,
    titleAccessory,
    headerRef
  } = e;
  let I = $$j2("inspection_panel_copy_all_click", useContext(F));
  let A = useDispatch();
  let x = isDevHandoffEditorType();
  let N = useHandleMouseEvent(recordingKey, "click", useCallback(() => {
    if (!copyAllValue) return;
    let e = "string" == typeof copyAllValue ? copyAllValue : copyAllValue();
    e && (A(lW({
      stringToCopy: e,
      ignoreLineBreaks: !1
    })), I({
      value: e
    }));
  }, [I, A, copyAllValue]));
  let {
    ref,
    ...P
  } = _$$X2(title, isHovered);
  let D = useMemo(() => ({
    name: "Copy properties button",
    selectedAll: !1,
    source: "properties",
    title,
    isDevMode: x
  }), [x, title]);
  let [k, M] = useAtomValueAndSetter(isCollapsedAtom);
  let U = hasCollapsibleContent && collapseEnabled;
  let B = useCallback(() => {
    U && M?.(!k);
  }, [M, k, U]);
  let V = e.faded || !!M && !hasCollapsibleContent;
  let H = !collapseEnabled;
  let z = collapseEnabled && (k || !hasCollapsibleContent) && !!collapsedHeaders;
  let W = !collapseEnabled || !k;
  let {
    onMouseDown,
    onMouseUp
  } = function () {
    let e = useRef(-1);
    return {
      onMouseDown: useCallback(t => {
        t.timeStamp - e.current < 350 && t.stopPropagation();
      }, []),
      onMouseUp: useCallback(t => {
        e.current = t.timeStamp;
      }, [])
    };
  }();
  if (!title) return null;
  let $ = {
    faded: V,
    innerRef: ref,
    ...P,
    className: p()(yr, {
      [Xx]: e.thin || e.isSubsection,
      [ty]: z
    }),
    "data-onboarding-key": e.onboardingKey,
    "data-testid": "inspectPanelTitle",
    highlightOnHover: U && !e.faded,
    isPanelBodyCollapsedAtom: U ? isCollapsedAtom : null
  };
  let X = jsxs(Fragment, {
    children: [jsx("h3", {
      children: title
    }), titleAccessory, z && jsxs(Fragment, {
      children: [jsx("div", {
        className: Pm
      }), jsx("div", {
        className: UE,
        children: collapsedHeaders
      })]
    })]
  });
  return jsxs("div", {
    className: p()(Dn, {
      [_$$_]: e.snug || e.isSubsection,
      [k6]: x
    }),
    ref: headerRef,
    onMouseDownCapture: collapseEnabled ? onMouseDown : void 0,
    onMouseUpCapture: collapseEnabled ? onMouseUp : void 0,
    children: [U ? jsx(_$$x, {
      ...$,
      onClick: B,
      children: X
    }) : jsx(Q, {
      ...$,
      children: X
    }), !z && jsxs("div", {
      className: p()(W0, x && QU),
      children: [additionalHeaders, W && copyAllValue && !x && jsx(Me, {
        htmlAttributes: {
          ...eventHandlers,
          "data-tooltip": getI18nString("inspect_panel.copy"),
          "data-tooltip-type": KindEnum.TEXT
        },
        onClick: N,
        trackingProperties: D,
        "aria-label": getI18nString("inspect_panel.copy"),
        disabled: e.disableCopyAll,
        children: jsx(_$$X, {})
      })]
    }), H && e.children]
  });
}
let B = setupRemovableAtomFamily(() => atom({}));
let G = atom(() => !1, () => {});
export function $$V0(e, t = !1) {
  let r = function (e, t = !1) {
    let r = useMemo(() => e ? _$$n(300, !0, (t, r) => {
      t(B, t => (analyticsEventManager.trackDefinedEvent("dev_mode.inspect_panel.collapse", {
        panelKey: e,
        expanded: !r
      }), {
        ...t,
        [e]: r
      }));
    }) : noop, [e]);
    return useMemo(() => e ? atom(r => r(B)[e] ?? t, (e, t, n) => {
      r(t, n);
    }) : null, [e, r, t]);
  }(isDevHandoffEditorType() ? e : void 0, t);
  let n = !!r;
  return {
    collapsedInspectionPanelAtom: n ? r : G,
    collapseEnabled: n
  };
}
export function $$H5({
  isCollapsed: e,
  children: t,
  childrenWrapperClassname: r,
  bodyIsEmpty: i,
  ref: a
}) {
  return jsx("div", {
    className: p()(HH, e ? void 0 : r),
    ref: a,
    children: !e && !i && t
  });
}
export function $$z3(e) {
  let {
    bodyIsEmpty,
    children,
    title = "",
    copyAllValue,
    recordingKey,
    collapsiblePanelKey
  } = e;
  let p = useSelector(selectOpenFileKey);
  let _ = useMemo(() => `inspect:${recordingKey.toLowerCase()}`, [recordingKey]);
  let h = useMemo(() => ({
    recordingKey: `inspect:${recordingKey}`
  }), [recordingKey]);
  let {
    value,
    eventHandlers,
    isHovered
  } = $$M4(Rp, fF);
  let {
    collapsedInspectionPanelAtom,
    collapseEnabled
  } = $$V0(collapsiblePanelKey, e.defaultCollapsed);
  let [b] = useAtomValueAndSetter(collapsedInspectionPanelAtom);
  return jsx(P, {
    border: !0,
    dataTestId: `${recordingKey}-inspection-panel`,
    fadedTitle: e.fadedTitle,
    fileKey: p,
    hideHeader: e.hideHeader,
    isSubsection: e.isSubsection,
    name: _,
    noBorder: e.noBorder,
    noPadding: e.noPadding,
    onClick: e.onClick,
    recordingKey: generateRecordingKey(recordingKey, "panel"),
    children: jsxs(F.Provider, {
      value: h,
      children: [e.formattedHeader ?? (!0 !== e.hideHeader && jsx($$U1, {
        additionalHeaders: e.additionalHeaders,
        collapseEnabled,
        collapsedHeaders: e.collapsedHeaders,
        copyAllValue,
        disableCopyAll: e.disableCopyAll,
        eventHandlers,
        faded: e.fadedTitle,
        hasCollapsibleContent: !bodyIsEmpty,
        headerRef: e.headerRef,
        isCollapsedAtom: collapsedInspectionPanelAtom,
        isHovered,
        isSubsection: e.isSubsection,
        noPadding: e.noPadding,
        onboardingKey: e.headerOnboardingKey,
        recordingKey: generateRecordingKey(recordingKey, "header"),
        snug: e.snugTitle,
        thin: e.thinTitle || e.isSubsection,
        title,
        titleAccessory: e.titleAccessory,
        children: e.headerChildren
      })), jsx($$H5, {
        isCollapsed: b,
        bodyIsEmpty,
        childrenWrapperClassname: value,
        children
      })]
    })
  });
}
function W({
  value: e,
  extras: t,
  index: r,
  renderElement: n,
  isLast: i
}) {
  return n(e, t, r, i);
}
export function $$K6({
  limit: e,
  data: t,
  renderElement: r,
  extras: i
}) {
  let {
    visibleItems,
    showMoreButton
  } = _$$y({
    items: t,
    pageSize: e,
    shouldResetOnSelectionChange: !0
  });
  return jsxs(Fragment, {
    children: [visibleItems.map((e, t) => jsx(W, {
      value: e,
      extras: i,
      renderElement: r,
      index: t,
      isLast: t === visibleItems.length - 1
    }, t)), showMoreButton]
  });
}
export const QZ = $$V0;
export const SH = $$U1;
export const SV = $$j2;
export const VZ = $$z3;
export const ZQ = $$M4;
export const ln = $$H5;
export const x0 = $$K6;
