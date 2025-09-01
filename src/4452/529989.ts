import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { md } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { b as _$$b } from "../905/985254";
import { Q } from "../9864/768691";
import { e as _$$e } from "../905/621515";
import { eS } from "../figma_app/33126";
import { NT, g5 } from "../figma_app/579169";
import { f as _$$f } from "../905/940356";
import { N } from "../figma_app/268271";
import { b as _$$b2 } from "../9864/543300";
import { d as _$$d } from "../905/14910";
import { pC } from "../905/98947";
import { j0N } from "../figma_app/6204";
export function $$v0(e) {
  let t = md(eS);
  let a = wA();
  let v = !!_$$f("not_gen_0");
  let b = md(NT);
  let y = md(g5);
  let j = md(pC);
  let {
    show,
    complete,
    isShowing
  } = _$$e({
    overlay: j0N,
    priority: N.HIGH_PRIORITY_MODAL
  }, [b, y, t]);
  let T = useCallback(() => {
    show({
      canShow: (e, t, a) => !j && function ({
        jobTitle: e,
        emailValidatedAt: t,
        isK12SSOOrg: a
      }) {
        return a ? !(e && ["student", "educator"].includes(e)) : !_$$d({
          jobTitle: e,
          emailValidatedAt: t
        });
      }({
        jobTitle: e,
        emailValidatedAt: t,
        isK12SSOOrg: a
      })
    });
  }, [show, j]);
  if (_$$h(() => {
    T();
  }), Q(isShowing), !isShowing) return null;
  let {
    trackingContextName,
    testId
  } = t.data ? {
    trackingContextName: "K12 Org Job Title Modal",
    testId: "NuxOnboardingOverlay-K12"
  } : v ? {
    trackingContextName: "Gen1 Welcome Modal",
    testId: "NuxOnboardingOverlay-Gen1"
  } : {
    trackingContextName: "Gen 0 NUX",
    testId: "NuxOnboardingOverlay-Gen0"
  };
  return jsx(_$$b2, {
    isGen1: v,
    trackingContextName,
    entryPoint: e.entryPoint,
    isShowing,
    dataTestId: testId,
    onOverlayClose: () => {
      a(_$$b({
        welcome_onboarded: !0
      }));
      complete();
    }
  });
}
export const NuxOnboardingOverlay = $$v0;