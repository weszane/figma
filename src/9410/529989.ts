import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { jsx } from "react/jsx-runtime";
import { isAllowedToSeeNux } from "../905/14910";
import { pC } from "../905/98947";
import { useOverlay } from "../905/621515";
import { useSingleEffect } from "../905/791079";
import { selectUserFlag } from "../905/940356";
import { postUserFlag } from "../905/985254";
import { b as _$$b2 } from "../9864/543300";
import { Q } from "../9864/768691";
import { BaseNuxOnboardingOverlay } from "../figma_app/6204";
import { useAtomWithSubscription } from "../figma_app/27355";
import { hasK12GoogleOrgAtom } from "../figma_app/33126";
import { N } from "../figma_app/268271";
import { g5, NT } from "../figma_app/579169";
export function $$y0(e) {
  let t = useAtomWithSubscription(hasK12GoogleOrgAtom);
  let i = useDispatch<AppDispatch>();
  let y = !!selectUserFlag("not_gen_0");
  let b = useAtomWithSubscription(NT);
  let C = useAtomWithSubscription(g5);
  let v = useAtomWithSubscription(pC);
  let {
    show,
    complete,
    isShowing
  } = useOverlay({
    overlay: BaseNuxOnboardingOverlay,
    priority: N.HIGH_PRIORITY_MODAL
  }, [b, C, t]);
  let S = useCallback(() => {
    show({
      canShow: (e, t, i) => !v && function ({
        jobTitle: e,
        emailValidatedAt: t,
        isK12SSOOrg: i
      }) {
        return i ? !(e && ["student", "educator"].includes(e)) : !isAllowedToSeeNux({
          jobTitle: e,
          emailValidatedAt: t
        });
      }({
        jobTitle: e,
        emailValidatedAt: t,
        isK12SSOOrg: i
      })
    });
  }, [show, v]);
  if (useSingleEffect(() => {
    S();
  }), Q(isShowing), !isShowing) {
    return null;
  }
  let {
    trackingContextName,
    testId
  } = t.data ? {
    trackingContextName: "K12 Org Job Title Modal",
    testId: "NuxOnboardingOverlay-K12"
  } : y ? {
    trackingContextName: "Gen1 Welcome Modal",
    testId: "NuxOnboardingOverlay-Gen1"
  } : {
    trackingContextName: "Gen 0 NUX",
    testId: "NuxOnboardingOverlay-Gen0"
  };
  return jsx(_$$b2, {
    isGen1: y,
    trackingContextName,
    entryPoint: e.entryPoint,
    isShowing,
    dataTestId: testId,
    onOverlayClose: () => {
      i(postUserFlag({
        welcome_onboarded: !0
      }));
      complete();
    }
  });
}
export const NuxOnboardingOverlay = $$y0;