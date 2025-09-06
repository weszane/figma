import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useMemo, useState, useCallback } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { Ez5, lyf, xal } from "../figma_app/763686";
import { useAtomValueAndSetter } from "../figma_app/27355";
import l from "classnames";
import { U, hC } from "../figma_app/901889";
import { C as _$$C } from "../figma_app/974443";
import { ZC } from "../figma_app/39751";
import { r as _$$r } from "../905/520829";
import { wK } from "../905/407352";
import { l7 } from "../figma_app/88239";
import { i as _$$i } from "../figma_app/85949";
import { J } from "../905/445197";
import { UK } from "../figma_app/740163";
import { E as _$$E } from "../905/95280";
import { Z } from "../905/104740";
import { dh, $P } from "../figma_app/186343";
import { Ht } from "../figma_app/701001";
import { Fy } from "../figma_app/623300";
import { q5 } from "../figma_app/516028";
import { _6 } from "../figma_app/386952";
import { FFileType } from "../figma_app/191312";
import { ut, J2 } from "../figma_app/84367";
import { Jc, c0 } from "../0c62c2fd/239014";
import { qp } from "../figma_app/932601";
import { G } from "../0c62c2fd/181448";
import { _k, Uz, oP } from "../0c62c2fd/479340";
import { c as _$$c } from "../0c62c2fd/790868";
import { C as _$$C2 } from "../0c62c2fd/948780";
import { iZ, pf, Vi, IK, cJ, yF } from "../0c62c2fd/50742";
var d = l;
export function $$P2({
  pages: e,
  isReadOnly: t,
  onContextMenu: n,
  isComparingChanges: s,
  onPageSwitch: l,
  pageToNumChanges: d,
  shouldHighlightActivePage: u = !0,
  activePageShouldUseBrandColor: m,
  scrollContainer: x,
  shouldUseButtonRows: y
}) {
  let T = ut(Ez5?.currentPageState().requestedPageChange, "");
  let j = J2(Ez5.uiState().showInFileMemoryPercentage);
  let k = dh();
  let E = !wK();
  let I = U();
  let A = l7();
  let M = useRef(null);
  let P = Ht();
  let F = useSelector(e => e.versionHistory);
  let B = J2(UK().showGuids);
  let {
    selectedPageIds,
    handleMultiselectClick,
    cancelMultiselect
  } = _k(e);
  let {
    isReordering,
    reorderingPageIds,
    startReordering,
    cancelReordering,
    commitReordering,
    draggingState,
    updateDraggingState
  } = _$$C2(e);
  let {
    renamingPageId,
    startRenaming,
    cancelRenaming,
    commitRenaming,
    pendingPageName,
    setPendingPageName
  } = _$$c(e);
  let en = $$L1({
    pagesList: e,
    isComparingChanges: s
  });
  Uz({
    pagesList: e,
    isDisabled: t,
    selectedPageIds,
    startRenaming,
    cancelMultiselect,
    cancelReordering
  });
  useEffect(() => {
    let e = () => {
      cancelMultiselect();
      cancelReordering();
    };
    document.addEventListener("click", e);
    return () => document.removeEventListener("click", e);
  }, [cancelMultiselect, cancelReordering]);
  useEffect(() => {
    if (!isReordering) return;
    let e = e => {
      e.stopPropagation();
      t ? cancelReordering() : commitReordering();
    };
    document.addEventListener("mouseup", e);
    return () => document.removeEventListener("mouseup", e);
  }, [isReordering, t, cancelReordering, commitReordering]);
  _$$C(x?.getScrollContainer(), isReordering);
  let ea = (e, n) => {
    cancelReordering();
    t || _$$i(n) || oP(n) || (selectedPageIds.includes(e) ? startReordering(selectedPageIds) : (cancelMultiselect(), startReordering([e])));
  };
  let er = (e, n) => {
    isReordering && !t && (updateDraggingState(e, n), n.preventDefault(), n.stopPropagation());
  };
  let ei = (e, n) => {
    if (t || oP(n)) {
      cancelReordering();
      return;
    }
    commitReordering() && (n.preventDefault(), n.stopPropagation());
  };
  let eo = (e, n) => {
    n.stopPropagation();
    !t && handleMultiselectClick(e, n) || J(() => {
      A && I("Dev Mode Overview Page Clicked", {
        pageId: e
      });
      en(e);
      l?.(e);
    });
  };
  let es = ({
    nodeId: e,
    e: t,
    clientX: a,
    clientY: r
  }) => {
    t.preventDefault();
    t.stopPropagation();
    n({
      nodeId: e,
      clientX: a ?? t.clientX,
      clientY: r ?? t.clientY
    });
  };
  let el = e => {
    t || startRenaming(e);
  };
  let ed = e => {
    renamingPageId && (t || !e ? cancelRenaming() : commitRenaming());
  };
  let ec = e => !!u && (T ? e === T : e === k);
  let e_ = useMemo(() => e.some(t => t.pageType !== e[0].pageType), [e]);
  return jsx("div", {
    ref: M,
    children: e.map((t, n) => jsx("div", {
      children: jsx(D, {
        nodeId: t.nodeId,
        nodeName: t.name,
        isDivider: t.isDivider,
        isFirstRow: 0 === n,
        isLastRow: n === e.length - 1,
        draggingState,
        pagesListRef: M,
        previewSummaryEnabled: 0 === reorderingPageIds.length && !t.isDivider && renamingPageId !== t.nodeId,
        children: jsx(G, {
          activePageShouldUseBrandColor: m,
          hasMultiplePageTypes: e_,
          index: n,
          isActive: ec(t.nodeId),
          isComparingChanges: s,
          isDivider: t.isDivider,
          isOffline: E,
          isRenaming: renamingPageId === t.nodeId,
          nodeId: t.nodeId,
          nodeName: t.name,
          onClickCallback: eo,
          onContextMenuCallback: es,
          onMouseDownCallback: ea,
          onMouseMoveCallback: er,
          onMouseUpCallback: ei,
          pageToNumChanges: d,
          pageType: t.pageType,
          pagesList: e,
          renamingPagePendingName: renamingPageId === t.nodeId ? pendingPageName : null,
          reorderingPageGuids: reorderingPageIds,
          selectedPageGuids: selectedPageIds,
          setRenamingPagePendingName: setPendingPageName,
          shouldShowGuids: B,
          shouldUseButtonRow: y,
          showInFileMemoryPercentage: j,
          showMemoryUsage: P,
          startRenaming: el,
          stopRenaming: ed,
          versionHistory: F
        })
      })
    }, t.nodeId))
  });
}
function D({
  nodeId: e,
  nodeName: t,
  isDivider: n,
  isFirstRow: l,
  isLastRow: _,
  children: p,
  draggingState: g,
  pagesListRef: f,
  previewSummaryEnabled: h
}) {
  let b = useRef(null);
  let [x, y] = useState(!1);
  let v = useSelector(e => e.mirror.appModel.topLevelMode === lyf.HISTORY);
  let w = g && g.dragOverPageId === e ? "before" === g.insertPosition ? l ? iZ : pf : _ ? Vi : IK : null;
  let T = q5();
  let [k, C] = useAtomValueAndSetter(qp);
  let S = useMemo(() => T?.editorType === FFileType.WHITEBOARD && !v, [T?.editorType, v]);
  let N = useMemo(() => x && h && S, [x, h, S]);
  let O = Jc(S);
  let R = useMemo(() => O?.data?.[e], [e, O?.data]);
  let P = useMemo(() => k === _$$r.LOADING || "loading" === O.status, [k, O.status]);
  useEffect(() => {
    R?.created_at && C(_$$r.SUCCESS);
  }, [C, R?.created_at]);
  let D = hC();
  let L = ZC(S);
  useEffect(() => {
    !L && N && D("figjam_summary_preview.preview_shown", {
      previewPageId: e
    });
  }, [D, e, N, L]);
  return jsx(Fragment, {
    children: jsxs("div", {
      className: d()(cJ, w, {
        [yF]: n
      }),
      ref: b,
      onMouseEnter: () => y(!0),
      onMouseLeave: () => y(!1),
      "data-testid": "PagesRowWrapper",
      children: [p, x && h && S && jsx(c0, {
        "data-testid": "PageSummaryPreview",
        pagesListRef: f,
        pageRowRef: b,
        nodeId: e,
        nodeName: t,
        pageThumbnail: R,
        isLoading: P
      })]
    })
  });
}
export function $$L1({
  pagesList: e,
  isComparingChanges: t
}) {
  let n = Z("page_change_navigator_navigate");
  let a = _$$E();
  let s = U();
  let l = useDispatch();
  let d = _6();
  let _ = dh();
  let u = useSelector(e => e.versionHistory);
  return useCallback(r => $P(r, _, u, l, Fy(e, r) === xal.LOADED, s, n, a, t, d), [e, n, a, s, l, d, _, u, t]);
}
export function $$F0({
  pagesList: e,
  isComparingChanges: t,
  enabled: n = !0
}) {
  let a = Z("page_change_navigator_navigate");
  let s = _$$E();
  let l = U();
  let d = useDispatch();
  let _ = _6();
  let u = dh(n);
  let m = useSelector(e => e.versionHistory);
  return useCallback(async r => {
    n && (await $P(r, u, m, d, Fy(e, r) === xal.LOADED, l, a, s, t, _));
  }, [e, a, s, l, d, _, u, m, t, n]);
}
export const VS = $$F0;
export const bG = $$L1;
export const bU = $$P2;