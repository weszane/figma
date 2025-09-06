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
import { _YF, xal, h3O, kul, Ez5, glU, zIx } from "../figma_app/763686";
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
import { J2 } from "../figma_app/84367";
import { Fk } from "../figma_app/167249";
import { Ib } from "../905/129884";
import { l as _$$l2 } from "../0c62c2fd/624465";
import { Uz } from "../905/63728";
import { jr, W0 } from "../figma_app/896988";
import { ks } from "../figma_app/626177";
import { n6, vu, mB, oG, sl, sR, Pl, Dq, As, wH, iB, Nr, VQ, Sp, jE, Nz, YW, KE, q8, hi, VC } from "../0c62c2fd/214758";
import { A as _$$A2 } from "../6828/255111";
import { A as _$$A3 } from "../svg/871428";
var _ = g;
function R({
  value: e,
  setValue: t,
  recordingKey: i,
  isDisabled: a,
  stopRenaming: s
}) {
  let o = useRef(null);
  useEffect(() => {
    o.current?.select();
  }, []);
  let l = v_(i, "keydown", e => {
    if (e.keyCode === Uz.ESCAPE) {
      s(!1);
      e.stopPropagation();
    } else if (e.keyCode === Uz.ENTER) {
      e.preventDefault();
      s(!0);
    } else {
      if (e.keyCode !== Uz.TAB) {
        jr(e, W0.NO);
        return aH;
      }
      e.preventDefault();
      s(!0);
    }
  });
  let d = AF(i, "change", e => {
    a || t(e.currentTarget.value);
  });
  let c = iQ(i, "blur", () => {
    s(!0);
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
function F({
  editorType: e
}) {
  switch (e) {
    case _YF.DESIGN:
      return jsx(_$$k, {});
    case _YF.WHITEBOARD:
      return jsx(_$$B, {
        svg: _$$A3
      });
    case _YF.SLIDES:
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
    className: _()(n6, {
      [vu]: isActive
    }),
    children: jsx(F, {
      editorType: pageType
    })
  });
}
export function $$U1({
  pageType: e,
  hasMultiplePageTypes: t,
  nodeId: i,
  nodeName: o,
  isRenaming: l,
  startRenaming: d,
  stopRenaming: c,
  renamingPagePendingName: u,
  setRenamingPagePendingName: p,
  isActive: g,
  shouldShowGuids: j,
  onMouseDownCallback: A,
  onMouseUpCallback: O,
  onMouseMoveCallback: L,
  onClickCallback: P,
  reorderingPageGuids: F,
  selectedPageGuids: U,
  onContextMenuCallback: H,
  showMemoryUsage: z,
  showInFileMemoryPercentage: V,
  isOffline: W,
  isComparingChanges: Y,
  pageToNumChanges: J,
  versionHistory: q,
  isDivider: X,
  pagesList: Z,
  index: Q,
  activePageShouldUseBrandColor: $,
  shouldUseButtonRow: ee
}) {
  let et = useDispatch();
  let ei = "whiteboard" === lg();
  let [er, en] = useState(!1);
  let ea = useAtomWithSubscription(_$$l2);
  let es = useAtomWithSubscription(Yh);
  let eo = Fk((e, t, i) => getFeatureFlags().gate_memory_usage_computations && !i ? null : e.get(t)?.nodeMemoryUsage, i, V);
  let el = Fk((e, t, i) => getFeatureFlags().gate_memory_usage_computations && !i ? null : e.get(t)?.rootMemoryUsage, i, V);
  let ed = useMemo(() => Fy(Z, i) === xal.LOADED, [i, Z]);
  let ec = h3O.getSessionState() === kul.JOINED;
  let eu = useMemo(() => W && !ec && !ed && h3O.isIncrementalSession(), [W, ed, ec]);
  let ep = Pt("pagesPanel", "row", Q) || "";
  let eh = rf(ep, "contextmenu", e => {
    e.preventDefault();
    !eu && H && H({
      nodeId: i,
      e
    });
  });
  let em = rf(ep, "dblclick", () => {
    eu || l || d(i);
  });
  let ef = rf(ep, "click", e => {
    if (!X && !l) {
      if (eu) {
        et(_$$F.enqueue({
          type: "offline-page-switch",
          message: getI18nString("fullscreen.pages_panel.unavailable_offline")
        }));
        return;
      }
      P(i, e);
    }
  });
  let eg = useCallback(e => {
    eu || l || A(i, e);
  }, [l, i, A, eu]);
  let e_ = useCallback(e => {
    l || L(i, e);
  }, [l, i, L]);
  let ex = useCallback(e => {
    l || O(i, e);
  }, [l, i, O]);
  let ey = useCallback(() => isNullish(eo) || isNullish(el) ? "" : pr(eo, el, !0), [eo, el]);
  let eb = Y && J?.get(i) || 0;
  let eC = q?.activeId && "current_version" === q.activeId;
  let ev = z && V && !l && eC;
  let eE = !Y && !l;
  let eT = X && !g && !l;
  let ew = ei && !l && g && U?.length === 0;
  let eS = _()({
    [mB]: eT,
    [oG]: !eT,
    [sl]: g,
    [sR]: ew && er && ea,
    [Pl]: $,
    [Dq]: 0 === F.length && 0 === U.length,
    [As]: ee
  }, 0 !== F.length || 0 !== U.length ? U.includes(i) ? wH : F.includes(i) ? iB : 0 === F.length ? Dq : "" : "");
  let ej = useRef(null);
  let eI = useRef(!1);
  let ek = useCallback(e => {
    c(e);
    eI.current = !0;
  }, [c]);
  useLayoutEffect(() => {
    !l && eI.current && ej.current && (ej.current.focus(), eI.current = !1);
  }, [l]);
  let eN = l && jsx(R, {
    value: u || "",
    setValue: p,
    stopRenaming: ek,
    recordingKey: ep,
    isDisabled: eu
  });
  let eA = eu && !eT && jsx("div", {
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
  let eO = getFeatureFlags().version_diffing && Y && eb > 0 && jsx("div", {
    className: Sp,
    children: eb
  });
  let eL = ew && !t ? jsx(K, {
    accessibleLabel: ee ? getI18nString("fullscreen.pages_panel.page_row.more_actions", {
      pageName: o
    }) : void 0,
    onContextMenuCallback: H,
    nodeId: i,
    isMoreActionsActive: er,
    setIsMoreActionsActive: en,
    isPageContextMenuOpen: ea,
    shouldAbsolutePositionButton: ee
  }) : null;
  let eR = jsxs(Fragment, {
    children: [!ee && eN, eT ? jsx("span", {
      className: jE,
      "data-testid": "pageDivider"
    }) : !l && jsx("div", {
      className: Nz,
      children: jsx("span", {
        className: eu ? YW : KE,
        children: j ? `${o} (${i})` : o
      })
    }), jsxs("div", {
      className: q8,
      children: [eE && jsx($$G0, {
        pageGuid: i,
        fallback: jsx(B, {
          isActive: g,
          isDivider: X,
          pageType: e,
          hasMultiplePageTypes: t
        }),
        hideBackground: !0
      }), eA, ev && jsx("span", {
        className: eu ? hi : VC,
        dir: "auto",
        children: ey()
      }), eO, !ee && eL]
    })]
  });
  return ee ? l ? jsxs("div", {
    className: eS,
    "data-onboarding-key": es === i ? _$$$ : "",
    draggable: !1,
    onContextMenu: eh,
    children: [eN, jsxs("div", {
      className: q8,
      children: [eA, eO]
    })]
  }) : jsxs("div", {
    className: "pages_panel_row--pageRowContainer--oVnTb",
    children: [jsx("button", {
      ref: ej,
      "aria-current": g ? "page" : void 0,
      className: eS,
      "data-onboarding-key": es === i ? _$$$ : "",
      draggable: !1,
      onClick: ef,
      onContextMenu: eh,
      onDoubleClick: em,
      onMouseDown: eg,
      onMouseMove: e_,
      onMouseUp: ex,
      type: "button",
      children: eR
    }), eL]
  }) : jsx("div", {
    className: eS,
    "data-onboarding-key": es === i ? _$$$ : "",
    draggable: !1,
    onClick: ef,
    onContextMenu: eh,
    onDoubleClick: em,
    onMouseDown: eg,
    onMouseMove: e_,
    onMouseUp: ex,
    children: eR
  });
}
export function $$G0({
  pageGuid: e,
  margin: t,
  fallback: i = null,
  hideBackground: n = !1
}) {
  let a = J2(Ez5.currentSceneState().numReadyNodesByPage);
  let s = J2(Ez5.currentSceneState().numCompletedNodesByPage);
  let o = a.has(e) ? a.get(e) > 0 : glU.nodeStatusesOnPage(e).includes(zIx.BUILD);
  let l = s.has(e) ? s.get(e) > 0 : glU.nodeStatusesOnPage(e).includes(zIx.COMPLETED);
  return l && !o ? jsx(_$$g, {
    className: "pages_panel_row--pageCompleted--gzdWd",
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("dev_handoff.status.completed"),
    "data-testid": "pageCompletedIndicator"
  }) : o || l ? jsx(_$$O, {
    className: _()("pages_panel_row--pageReady--XaDiG", {
      "pages_panel_row--hideBackground--22Ike": n
    }),
    style: t ? {
      [t]: "8px"
    } : void 0,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("dev_handoff.tag.ready_to_build"),
    "data-testid": "pageReadyIndicator"
  }) : i;
}
function K({
  accessibleLabel: e,
  onContextMenuCallback: t,
  nodeId: i,
  isMoreActionsActive: a,
  isPageContextMenuOpen: s,
  setIsMoreActionsActive: l,
  shouldAbsolutePositionButton: d
}) {
  let c = useRef(null);
  useEffect(() => {
    s || l(!1);
  }, [s, l]);
  return jsx(_$$E, {
    ref: c,
    "aria-label": e,
    htmlAttributes: d ? void 0 : {
      onDoubleClick: e => e.stopPropagation()
    },
    onClick: e => {
      l(!0);
      let r = c.current?.getBoundingClientRect();
      r && t({
        nodeId: i,
        e,
        clientX: r.x + -4,
        clientY: r.y + r.height + 10
      });
    },
    className: _()("pages_panel_row--pageMoreActionsButton--5Rty9", {
      "pages_panel_row--pageMoreActionsButtonActive--2dmC-": a && s,
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
export const v = $$G0;
export const G = $$U1;