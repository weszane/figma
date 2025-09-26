import { jsx } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomWithSubscription } from "../figma_app/27355";
import { postUserFlag } from "../905/985254";
import { E as _$$E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { wg, zo, pQ } from "../figma_app/101956";
import { t as _$$t, d2 } from "../figma_app/579169";
import { userFlagsAtom } from "../figma_app/545877";
import { mW, jj } from "../figma_app/797994";
import { isTeamFolderV2 } from "../figma_app/528509";
import { openFileAtom, useEditorType } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { MoveDraftsTeamData } from "../figma_app/43951";
import { isOnboardingComplete } from "../figma_app/242339";
import { N } from "../figma_app/268271";
import { qo } from "../905/696396";
import { OnboardingRenderFrame } from "../905/284399";
import { $ } from "../figma_app/108485";
import { hA } from "../figma_app/551322";
import { OverlayType } from "../figma_app/450829";
import { r4m } from "../figma_app/6204";
export let $$N1 = "Node Count Reached for Draft";
export function $$C0() {
  let e = useRef(!1);
  let t = useAtomWithSubscription(openFileAtom);
  let r = useAtomWithSubscription(wg);
  let C = useEditorType();
  let w = useAtomWithSubscription(zo);
  let O = isOnboardingComplete();
  let R = useAtomWithSubscription(pQ);
  let L = useAtomWithSubscription(_$$t);
  let P = useAtomWithSubscription(d2);
  let D = useAtomWithSubscription(userFlagsAtom);
  let k = useAtomWithSubscription($);
  let M = useAtomWithSubscription(MoveDraftsTeamData.Query({
    orgId: null
  }));
  let F = useDispatch();
  let j = _$$e({
    overlay: r4m,
    priority: N.SECONDARY_MODAL
  }, [L, R, w, P, D, M]);
  let U = useCallback(() => {
    let n = (() => {
      let e = getSingletonSceneGraph();
      let t = e?.getCurrentPage();
      return !!t && (!t.childCount || t.childrenAreAllGhosts);
    })();
    !r || e.current || k || n || j.show({
      canShow(e, r, n, i, a, s) {
        let o = 0 === (s?.currentUser?.teamEditRoles?.map(e => e.team) ?? []).filter(e => e && e.projects && !e.deletedAt && e.projects.length > 0).length;
        let d = !!t && isTeamFolderV2(t.project);
        let c = C === FFileType.WHITEBOARD && n || C === FFileType.DESIGN && O;
        return e && (r || d) && c && i === qo.PERSONAL && !o && !mW(a, "ran_move_drafts_nudge_v2_num_3") && (mW(a, "ran_move_drafts_nudge_v2_num_2") ? !jj(a, "ran_move_drafts_nudge_v2_num_2") && (F(postUserFlag({
          ran_move_drafts_nudge_v2_num_3: !0
        })), !0) : mW(a, "ran_move_drafts_nudge_v2_num_1") ? !jj(a, "ran_move_drafts_nudge_v2_num_1") && (F(postUserFlag({
          ran_move_drafts_nudge_v2_num_2: !0
        })), !0) : (F(postUserFlag({
          ran_move_drafts_nudge_v2_num_1: !0
        })), !0));
      },
      onShow() {
        e.current = !0;
      }
    });
  }, [C, O, r, F, k, t, j]);
  let B = useCallback(({
    dismissModal: e,
    onClickPrimaryCta: t
  }) => jsx(hA, {
    dismissModal: e,
    onClickPrimaryCta: t
  }), []);
  _$$E(j.uniqueId, $$N1, U);
  return jsx(OnboardingRenderFrame, {
    isShowing: j.isShowing,
    modalType: OverlayType.SELF_CONTAINED,
    trackingContextName: "Move Drafts Nudge - Team nudge",
    element: B,
    onClickPrimaryCta: () => {
      F(postUserFlag({
        ran_move_drafts_nudge_v2_num_3: !0
      }));
      j.complete();
    },
    onClose: j.complete,
    onManualDismiss: j.complete
  });
}
export const F = $$C0;
export const s = $$N1;
