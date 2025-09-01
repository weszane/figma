import { jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { Ez5, CNR } from "../figma_app/763686";
import { AD } from "../905/871411";
import { UN } from "../905/700578";
import { eU } from "../figma_app/27355";
import { parsePxNumber } from "../figma_app/783094";
import { po } from "../9410/486658";
import { t as _$$t } from "../905/303541";
import { iT } from "../figma_app/74165";
import { a as _$$a } from "../9410/698287";
import { qw } from "../figma_app/740163";
import { ut } from "../figma_app/84367";
import { a as _$$a2 } from "../905/518538";
import { mW, qN } from "../905/123443";
import { rY } from "../figma_app/524655";
import { R as _$$R } from "../figma_app/294349";
import { LdP } from "../figma_app/27776";
let $$C1 = eU(new Map());
let v = parsePxNumber(LdP);
export function $$E0({
  children: e
}) {
  let t = ut(Ez5?.singleSlideView().isInFocusedNodeView, !1);
  let i = ut(Ez5?.canvasGrid().canvasGridArray, []);
  let l = rY(i);
  let d = useMemo(() => l.reduce((e, t, i) => (e.set(t, i), e), new Map()), [l]);
  let b = _$$a();
  let {
    isPropertiesPanelCollapsed
  } = iT();
  let E = qw();
  E = isPropertiesPanelCollapsed ? 0 : E;
  let T = useCallback((e) => {
    let t = e.comments[0]?.client_meta?.node_id;
    if (!t) return AD;
    let i = UN().get(t);
    return i ? i.containingSlideId : AD;
  }, []);
  let w = _$$R();
  let S = useMemo(() => {
    let e = [mW.RESOLVED, mW.YOURS];
    t && e.push(mW.CURRENT_SLIDE);
    return e;
  }, [t]);
  let j = useMemo(() => [qN.CREATION_DATE, qN.UNREAD, qN.SLIDE], []);
  let I = po();
  let k = useCallback((e) => {
    let t = T(e);
    let i = d.get(t);
    return void 0 !== i && t !== AD ? _$$t("comments.slide_number", {
      orderNum: i + 1
    }) : e.pageName;
  }, [T, d]);
  let N = useMemo(() => !!t, [t]);
  let A = useCallback((e) => {
    if (!t) return () => {};
    let i = T(e);
    return i !== AD ? () => {
      I(i);
    } : () => {
      Ez5?.singleSlideView().exitFocusedNodeViewAndLeavePanelsOpen();
    };
  }, [T, I, t]);
  let O = useMemo(() => ({
    slide: (e, t) => {
      let i = 1 / 0;
      let r = T(e);
      let n = T(t);
      let a = d.get(r) ?? i;
      let s = d.get(n) ?? i;
      if (a !== s) return a - s;
      {
        let i = e.comments[0]?.created_at;
        let r = t.comments[0]?.created_at;
        return i && r ? Date.parse(r) - Date.parse(i) : 0;
      }
    }
  }), [T, d]);
  let L = ut(Ez5?.editorPreferences().speakerNotesHeight, 0);
  let R = useMemo(() => {
    let e = 0;
    let i = 0;
    b && (e += v, i += E);
    t && (e += L + (CNR?.speakerNotesDragHandleHeight() ?? 0) + (CNR?.speakerNotesDragHandlePadding() ?? 0) * 3);
    return {
      maxHeightDelta: -e,
      minBottomMarginDelta: e,
      minLeftMarginDelta: 0,
      minRightMarginDelta: i
    };
  }, [t, E, b, L]);
  let D = useMemo(() => ({
    showNotificationSettings: !0,
    disableCommentsWhenHandToolEnabled: !0,
    repositionViewportOnCommentSelection: !0,
    disableZoomViewportOnCommentSelection: N,
    orphanedBy: "deleted_anchors",
    filterBy: "deleted_anchors",
    sidebarFilters: S,
    sidebarSorts: j,
    sidebarModesDisabled: !0,
    dockPositionAdjustment: w,
    commentDisabledPositionBellMessage: _$$t("comments.comments_can_only_be_placed_on_slides"),
    getParentName: k,
    getOnCommentSelect: A,
    sortComparatorOverrides: O,
    draggableModalBoundsAdjustment: R
  }), [N, S, j, w, k, A, O, R]);
  return jsx(_$$a2.Provider, {
    value: D,
    children: e
  });
}
export const Yz = $$E0;
export const Z7 = $$C1;