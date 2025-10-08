import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { atom, useAtomWithSubscription, Xr } from "../figma_app/27355";
import { useSingleEffect } from "../905/791079";
import { postUserFlag } from "../905/985254";
import { e as _$$e } from "../905/621515";
import { A as _$$A } from "../905/956262";
import { N as _$$N } from "../905/482239";
import { zo, pQ } from "../figma_app/101956";
import { d2, t as _$$t } from "../figma_app/579169";
import { userFlagExistsAtomFamily, userFlagsAtom } from "../figma_app/545877";
import { jj } from "../figma_app/797994";
import { isTeamFolderV2 } from "../figma_app/528509";
import { openFileAtom, useEditorType } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { isOnboardingComplete } from "../figma_app/242339";
import { N as _$$N2 } from "../figma_app/268271";
import { OrgPersonal } from "../905/696396";
import { U } from "../905/455766";
import { OnboardingRenderFrame } from "../905/284399";
import { yP, Iy } from "../figma_app/551322";
import { OverlayType } from "../figma_app/450829";
import { MoveDraftsNudge } from "../figma_app/6204";
let $$x0 = atom(!1);
let N = () => new Date(Date.now() - 1e4);
let C = "Move Drafts Nudge -";
let w = userFlagExistsAtomFamily("dismissed_move_drafts_nudge");
export function $$O1() {
  let e = useAtomWithSubscription(openFileAtom);
  let t = useAtomWithSubscription(d2);
  let r = useAtomWithSubscription(userFlagsAtom);
  let O = useEditorType();
  let R = useAtomWithSubscription(zo);
  let L = isOnboardingComplete();
  let P = useAtomWithSubscription(pQ);
  let D = useAtomWithSubscription(_$$t);
  let k = useAtomWithSubscription(_$$N);
  let M = useAtomWithSubscription(w);
  let F = Xr($$x0);
  let j = _$$e({
    overlay: MoveDraftsNudge,
    priority: _$$N2.SECONDARY_MODAL
  }, [k, t, r, P, D, R, M]);
  let {
    currentStep,
    next
  } = _$$A({
    numSteps: 2,
    onComplete: j.complete
  });
  let G = useDispatch();
  useSingleEffect(() => {
    null != e && e.canEdit && e.createdAt > N() && j.show({
      canShow: (t, r, n, i, a, s, l) => {
        let d = !!e && isTeamFolderV2(e.project);
        let c = O === FFileType.WHITEBOARD && s || O === FFileType.DESIGN && L;
        return r === OrgPersonal.PERSONAL && c && (i || d) && !jj(n, "ran_move_drafts_nudge_machine") && (G(postUserFlag({
          ran_move_drafts_nudge_machine: !0
        })), !0) && !l && !!a && !!t;
      },
      onShow: () => {
        F(!0);
      }
    });
  });
  return jsxs(U, {
    currentStep,
    isShowing: j.isShowing,
    children: [jsx(OnboardingRenderFrame, {
      isShowing: j.isShowing,
      modalType: OverlayType.SELF_CONTAINED,
      trackingContextName: `${C} Main nudge`,
      element: yP,
      onClickPrimaryCta: next,
      onManualDismiss: j.complete,
      testId: "move_drafts_main_nudge",
      onClose: j.complete
    }), jsx(OnboardingRenderFrame, {
      isShowing: j.isShowing,
      modalType: OverlayType.SELF_CONTAINED,
      trackingContextName: `${C} Dropdown highlight`,
      element: Iy,
      onClickPrimaryCta: next,
      onManualDismiss: j.complete,
      onClose: j.complete
    })]
  });
}
export const $ = $$x0;
export const A = $$O1;