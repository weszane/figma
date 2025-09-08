import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState, useMemo, useCallback, useLayoutEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { isNullish } from "../figma_app/95419";
import { E as _$$E } from "../905/632989";
import { k as _$$k } from "../905/381239";
import { l as _$$l } from "../905/241412";
import { g as _$$g } from "../905/125190";
import { O as _$$O } from "../905/501876";
import { A as _$$A } from "../905/215698";
import { WorkspaceType, DataLoadStatus, Multiplayer, SchemaJoinStatus, AppStateTsApi, Fullscreen, BuildStatus } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import g from "classnames";
import { v_, aH, AF, iQ, Pt, rf } from "../figma_app/806412";
import { B as _$$B } from "../905/714743";
import { getI18nString } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { Yh } from "../figma_app/888478";
import { $ as _$$$ } from "../0c62c2fd/637169";
import { lg } from "../figma_app/976749";
import { pr } from "../figma_app/952446";
import { Fy } from "../figma_app/623300";
import { getObservableOrFallback } from "../figma_app/84367";
import { Fk } from "../figma_app/167249";
import { Ib } from "../905/129884";
import { l as _$$l2 } from "../0c62c2fd/624465";
import { Uz } from "../905/63728";
import { jr, W0 } from "../figma_app/896988";
import { ks } from "../figma_app/626177";
import { n6, vu, mB, oG, sl, sR, Pl, Dq, As, wH, iB, Nr, VQ, Sp, jE, Nz, YW, KE, q8, hi, VC } from "../0c62c2fd/214758";
import { A as _$$A2 } from "../6828/255111";
import { A as _$$A3 } from "../svg/871428";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
var h = g;
function F({
  value: e,
  setValue: t,
  recordingKey: r,
  isDisabled: i,
  stopRenaming: n
}) {
  let o = useRef(null);
  useEffect(() => {
    o.current?.select();
  }, []);
  let l = v_(r, "keydown", e => {
    if (e.keyCode === Uz.ESCAPE) {
      n(!1);
      e.stopPropagation();
    } else if (e.keyCode === Uz.ENTER) {
      e.preventDefault();
      n(!0);
    } else {
      if (e.keyCode !== Uz.TAB) {
        jr(e, W0.NO);
        return aH;
      }
      e.preventDefault();
      n(!0);
    }
  });
  let d = AF(r, "change", e => {
    i || t(e.currentTarget.value);
  });
  let c = iQ(r, "blur", () => {
    n(!0);
  });
  return jsx(ks, {
    autoCapitalize: "off",
    autoCorrect: "off",
    autoFocus: !0,
    className: "page_rename_input--input--s2o7Q",
    innerRef: o,
    onBlur: c,
    onChange: d,
    onKeyDown: l,
    spellCheck: !1,
    value: e
  });
}
if (443 == require.j) {}
if (443 == require.j) {}
function M({
  editorType: e
}) {
  switch (e) {
    case WorkspaceType.DESIGN:
      return jsx(_$$k, {});
    case WorkspaceType.WHITEBOARD:
      return jsx(_$$B, {
        svg: _$$A3
      });
    case WorkspaceType.SLIDES:
      return jsx(_$$l, {});
    default:
      return null;
  }
}
function B(e) {
  let {
    isActive,
    isDivider,
    pageType,
    hasMultiplePageTypes
  } = e;
  return isDivider || !hasMultiplePageTypes ? null : jsx("div", {
    className: h()(n6, {
      [vu]: isActive
    }),
    children: jsx(M, {
      editorType: pageType
    })
  });
}
export function $$U1({
  pageType: e,
  hasMultiplePageTypes: t,
  nodeId: r,
  nodeName: o,
  isRenaming: l,
  startRenaming: d,
  stopRenaming: c,
  renamingPagePendingName: u,
  setRenamingPagePendingName: m,
  isActive: g,
  shouldShowGuids: N,
  onMouseDownCallback: R,
  onMouseUpCallback: A,
  onMouseMoveCallback: O,
  onClickCallback: D,
  reorderingPageGuids: M,
  selectedPageGuids: U,
  onContextMenuCallback: G,
  showMemoryUsage: V,
  showInFileMemoryPercentage: z,
  isOffline: H,
  isComparingChanges: K,
  pageToNumChanges: Y,
  versionHistory: J,
  isDivider: q,
  pagesList: X,
  index: Q,
  activePageShouldUseBrandColor: Z,
  shouldUseButtonRow: ee
}) {
  let et = useDispatch();
  let er = "whiteboard" === lg();
  let [ea, es] = useState(!1);
  let ei = useAtomWithSubscription(_$$l2);
  let en = useAtomWithSubscription(Yh);
  let eo = Fk((e, t, r) => getFeatureFlags().gate_memory_usage_computations && !r ? null : e.get(t)?.nodeMemoryUsage, r, z);
  let el = Fk((e, t, r) => getFeatureFlags().gate_memory_usage_computations && !r ? null : e.get(t)?.rootMemoryUsage, r, z);
  let ed = useMemo(() => Fy(X, r) === DataLoadStatus.LOADED, [r, X]);
  let ec = Multiplayer.getSessionState() === SchemaJoinStatus.JOINED;
  let eu = useMemo(() => H && !ec && !ed && Multiplayer.isIncrementalSession(), [H, ed, ec]);
  let em = Pt("pagesPanel", "row", Q) || "";
  let e_ = rf(em, "contextmenu", e => {
    e.preventDefault();
    !eu && G && G({
      nodeId: r,
      e
    });
  });
  let ep = rf(em, "dblclick", () => {
    eu || l || d(r);
  });
  let ef = rf(em, "click", e => {
    if (!q && !l) {
      if (eu) {
        et(_$$F.enqueue({
          type: "offline-page-switch",
          message: getI18nString("fullscreen.pages_panel.unavailable_offline")
        }));
        return;
      }
      D(r, e);
    }
  });
  let eg = useCallback(e => {
    eu || l || R(r, e);
  }, [l, r, R, eu]);
  let eh = useCallback(e => {
    l || O(r, e);
  }, [l, r, O]);
  let ex = useCallback(e => {
    l || A(r, e);
  }, [l, r, A]);
  let eb = useCallback(() => isNullish(eo) || isNullish(el) ? "" : pr(eo, el, !0), [eo, el]);
  let ev = K && Y?.get(r) || 0;
  let ey = J?.activeId && "current_version" === J.activeId;
  let ew = V && z && !l && ey;
  let ej = !K && !l;
  let eT = q && !g && !l;
  let eE = er && !l && g && U?.length === 0;
  let eI = h()({
    [mB]: eT,
    [oG]: !eT,
    [sl]: g,
    [sR]: eE && ea && ei,
    [Pl]: Z,
    [Dq]: 0 === M.length && 0 === U.length,
    [As]: ee
  }, 0 !== M.length || 0 !== U.length ? U.includes(r) ? wH : M.includes(r) ? iB : 0 === M.length ? Dq : "" : "");
  let eN = useRef(null);
  let eC = useRef(!1);
  let eS = useCallback(e => {
    c(e);
    eC.current = !0;
  }, [c]);
  useLayoutEffect(() => {
    !l && eC.current && eN.current && (eN.current.focus(), eC.current = !1);
  }, [l]);
  let ek = l && jsx(F, {
    value: u || "",
    setValue: m,
    stopRenaming: eS,
    recordingKey: em,
    isDisabled: eu
  });
  let eR = eu && !eT && jsx("div", {
    className: Nr,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("fullscreen.pages_panel.unavailable_offline"),
    "data-onboarding-key": "page-unavailable-offline",
    children: jsx(_$$B, {
      className: VQ,
      svg: _$$A2,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("fullscreen.pages_panel.unavailable_offline"),
      "data-onboarding-key": "page-unavailable-offline"
    })
  });
  let eA = getFeatureFlags().version_diffing && K && ev > 0 && jsx("div", {
    className: Sp,
    children: ev
  });
  let eO = eE && !t ? jsx($, {
    accessibleLabel: ee ? getI18nString("fullscreen.pages_panel.page_row.more_actions", {
      pageName: o
    }) : void 0,
    onContextMenuCallback: G,
    nodeId: r,
    isMoreActionsActive: ea,
    setIsMoreActionsActive: es,
    isPageContextMenuOpen: ei,
    shouldAbsolutePositionButton: ee
  }) : null;
  let eF = jsxs(Fragment, {
    children: [!ee && ek, eT ? jsx("span", {
      className: jE,
      "data-testid": "pageDivider"
    }) : !l && jsx("div", {
      className: Nz,
      children: jsx("span", {
        className: eu ? YW : KE,
        children: N ? `${o} (${r})` : o
      })
    }), jsxs("div", {
      className: q8,
      children: [ej && jsx($$W0, {
        pageGuid: r,
        fallback: jsx(B, {
          isActive: g,
          isDivider: q,
          pageType: e,
          hasMultiplePageTypes: t
        }),
        hideBackground: !0
      }), eR, ew && jsx("span", {
        className: eu ? hi : VC,
        dir: "auto",
        children: eb()
      }), eA, !ee && eO]
    })]
  });
  return ee ? l ? jsxs("div", {
    className: eI,
    "data-onboarding-key": en === r ? _$$$ : "",
    draggable: !1,
    onContextMenu: e_,
    children: [ek, jsxs("div", {
      className: q8,
      children: [eR, eA]
    })]
  }) : jsxs("div", {
    className: "pages_panel_row--pageRowContainer--oVnTb",
    children: [jsx("button", {
      ref: eN,
      "aria-current": g ? "page" : void 0,
      className: eI,
      "data-onboarding-key": en === r ? _$$$ : "",
      draggable: !1,
      onClick: ef,
      onContextMenu: e_,
      onDoubleClick: ep,
      onMouseDown: eg,
      onMouseMove: eh,
      onMouseUp: ex,
      type: "button",
      children: eF
    }), eO]
  }) : jsx("div", {
    className: eI,
    "data-onboarding-key": en === r ? _$$$ : "",
    draggable: !1,
    onClick: ef,
    onContextMenu: e_,
    onDoubleClick: ep,
    onMouseDown: eg,
    onMouseMove: eh,
    onMouseUp: ex,
    children: eF
  });
}
export function $$W0({
  pageGuid: e,
  margin: t,
  fallback: r = null,
  hideBackground: s = !1
}) {
  let i = getObservableOrFallback(AppStateTsApi.currentSceneState().numReadyNodesByPage);
  let n = getObservableOrFallback(AppStateTsApi.currentSceneState().numCompletedNodesByPage);
  let o = i.has(e) ? i.get(e) > 0 : Fullscreen.nodeStatusesOnPage(e).includes(BuildStatus.BUILD);
  let l = n.has(e) ? n.get(e) > 0 : Fullscreen.nodeStatusesOnPage(e).includes(BuildStatus.COMPLETED);
  return l && !o ? jsx(_$$g, {
    className: "pages_panel_row--pageCompleted--gzdWd",
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("dev_handoff.status.completed"),
    "data-testid": "pageCompletedIndicator"
  }) : o || l ? jsx(_$$O, {
    className: h()("pages_panel_row--pageReady--XaDiG", {
      "pages_panel_row--hideBackground--22Ike": s
    }),
    style: t ? {
      [t]: "8px"
    } : void 0,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("dev_handoff.tag.ready_to_build"),
    "data-testid": "pageReadyIndicator"
  }) : r;
}
function $({
  accessibleLabel: e,
  onContextMenuCallback: t,
  nodeId: r,
  isMoreActionsActive: i,
  isPageContextMenuOpen: n,
  setIsMoreActionsActive: l,
  shouldAbsolutePositionButton: d
}) {
  let c = useRef(null);
  useEffect(() => {
    n || l(!1);
  }, [n, l]);
  return jsx(_$$E, {
    ref: c,
    "aria-label": e,
    htmlAttributes: d ? void 0 : {
      onDoubleClick: e => e.stopPropagation()
    },
    onClick: e => {
      l(!0);
      let a = c.current?.getBoundingClientRect();
      a && t({
        nodeId: r,
        e,
        clientX: a.x + -4,
        clientY: a.y + a.height + 10
      });
    },
    className: h()("pages_panel_row--pageMoreActionsButton--5Rty9", {
      "pages_panel_row--pageMoreActionsButtonActive--2dmC-": i && n,
      "pages_panel_row--pageMoreActionsAbsolutePosition--S-xcp": d
    }),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("fullscreen.pages_panel.more_pages_actions"),
    "data-tooltip-show-above": !0,
    children: jsx(_$$A, {
      className: "pages_panel_row--pageMoreActionsIcon--kzZVn"
    })
  });
}
export const v = $$W0;
export const G = $$U1;