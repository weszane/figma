import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogCustomContents } from "../figma_app/272243";
import { ButtonLarge } from "../905/521428";
import { Xr, useAtomValueAndSetter } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { useSingleEffect } from "../905/791079";
import { getIsAndroidOrIphoneNotFigmaMobile } from "../figma_app/778880";
import { Spacing, BigTextInputForwardRef } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { putUserAction } from "../figma_app/24841";
import { postUserFlag } from "../905/985254";
import { TrackingProvider } from "../figma_app/831799";
import { e as _$$e } from "../905/621515";
import { logAndTrackCTA } from "../figma_app/314264";
import { selectUser } from "../905/372672";
import { selectUserFlag } from "../905/940356";
import { N as _$$N } from "../figma_app/268271";
import { OnboardingSequence } from "../905/152487";
import { bk, Q7, ZE } from "../905/98947";
import { pu } from "../7037/430062";
import { L as _$$L } from "../9864/861465";
import { m as _$$m } from "../9864/958952";
import { Xg } from "../7021/854265";
import { JobTitlePromptOverlay } from "../figma_app/6204";
import { dayjs } from "../905/920142";
import { normalizeJobRole } from "../3973/538504";
import { useCurrentUserOrg } from "../905/845253";
import { useCurrentPublicPlan, useIsStarterPlan } from "../figma_app/465071";
import { A as _$$A2 } from "../svg/831814";
let L = "Job Title Prompt";
export function $$F0({
  source: e
}) {
  let t = function () {
    let e = useCurrentPublicPlan("useIsEligibleForJobTitleReprompt");
    let t = useIsStarterPlan(e).unwrapOr(!1);
    let n = selectUser();
    let a = useCurrentUserOrg();
    let i = n.profile.job_title;
    let o = normalizeJobRole(i);
    return useCallback(() => !(a && a.k12_google_org || n.email.endsWith(".edu") || t || dayjs(n.email_validated_at).add(14, "day").isAfter(dayjs(Date.now()))) && (!i || ("something_else" === i ? !!dayjs(n.email_validated_at).isBefore(dayjs(new Date("2024-12-10"))) : "other" === o && (!a || !a.saml_sso_only))), [a, t, o, i, n.email, n.email_validated_at]);
  }();
  let n = Xr(bk);
  let i = Xr(Q7);
  let o = selectUser().name;
  let s = !!selectUserFlag("submitted_job_title_prompt_overlay");
  let {
    show,
    complete,
    isShowing
  } = _$$e({
    overlay: JobTitlePromptOverlay,
    priority: _$$N.OVERRIDING_MODAL
  });
  return (useSingleEffect(() => {
    getIsAndroidOrIphoneNotFigmaMobile() || window.matchMedia("(max-width: 840px)").matches || s || show({
      canShow: t,
      onShow: () => {
        n(pu.WHAT_DO_YOU_DO);
        i(o);
      }
    });
  }), isShowing) ? jsx(OnboardingSequence, {
    testId: "job-title-prompt-overlay",
    isShowing,
    children: jsx(B, {
      isShowing,
      dismissModal: complete,
      overlaySource: e
    })
  }) : null;
}
function B({
  isShowing: e,
  dismissModal: t,
  overlaySource: n
}) {
  let u = useDispatch<AppDispatch>();
  let m = selectUser();
  let y = m.id;
  let T = m.profile.job_title;
  let [j, k] = useAtomValueAndSetter(ZE);
  let [C, N] = useState("");
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = Xg();
  let B = Array.from(options).toString();
  let U = useModalManager({
    open: e,
    onClose: ({
      source: e
    }) => {
      logAndTrackCTA({
        trackingContext: L,
        text: "Dismiss Job Title Prompt",
        source: e,
        view: n,
        jobTitleList: B
      });
      t();
    }
  });
  let G = j.has("something_else") && !C;
  return jsx(TrackingProvider, {
    name: L,
    properties: {
      jobTitleList: B,
      source: n
    },
    children: jsx(ModalRootComponent, {
      manager: U,
      width: "fit-content",
      height: "fixed",
      children: jsx(DialogCustomContents, {
        children: jsxs("div", {
          className: "job_title_prompt_overlay--container--Chyt7",
          children: [jsxs("div", {
            className: "job_title_prompt_overlay--leftContainer--J7Zlz",
            children: [jsx(SvgComponent, {
              svg: _$$A2,
              useOriginalSrcFills_DEPRECATED: !0,
              autosize: !0,
              height: "32px",
              width: "24px"
            }), jsx(Spacing, {
              multiple: 3
            }), jsx("h1", {
              children: questionTitle
            }), jsx(Spacing, {
              multiple: .5
            }), jsx("p", {
              className: "job_title_prompt_overlay--jobTitleSubheading--1t5Ue",
              children: questionSubtitle
            }), jsx(Spacing, {
              multiple: 3
            }), jsx(_$$L, {
              isSingleSelect: !0,
              questionKey,
              options,
              selectedOptions: j,
              onItemsChange: k,
              answerButtonClassName: "job_title_prompt_overlay--jobTitleAnswerButton--p1bfZ",
              containerClassName: "job_title_prompt_overlay--jobTitleOptions--k9zbw",
              getOptionDisplay,
              endingOption: j.has("something_else") ? jsx(BigTextInputForwardRef, {
                autoFocus: !0,
                dataTestId: "custom_job_title_input",
                className: "job_title_prompt_overlay--otherInput--aNBXq",
                placeholder: getI18nString("user_onboarding_signals.v1.answer.other.placeholder"),
                value: C,
                onChange: e => N(e.currentTarget.value)
              }) : void 0
            }), jsx(Spacing, {
              multiple: 3
            }), jsx("span", {
              className: "job_title_prompt_overlay--submitButton--uVeNa",
              children: jsx(ButtonLarge, {
                variant: "primary",
                onClick: () => {
                  let [e] = j;
                  let t = e;
                  let n = "job_title_prompt_selection";
                  "something_else" === t && C.length > 0 && (t = C, n = "job_title_prompt_custom");
                  u(putUserAction({
                    user: {
                      id: y,
                      job_title: t,
                      job_title_source: n
                    },
                    userInitiated: !0
                  }));
                  analyticsEventManager.trackDefinedEvent("activation.job_title_changed", {
                    newJobTitle: t,
                    prevJobTitle: T,
                    source: n,
                    jobTitleSeenList: B
                  });
                  logAndTrackCTA({
                    trackingContext: L,
                    text: "Submit Job Title",
                    jobTitle: t,
                    prevJobTitle: T,
                    jobTitleList: B
                  });
                  u(postUserFlag({
                    submitted_job_title_prompt_overlay: !0
                  }));
                  U.props.close({
                    source: "other"
                  });
                },
                disabled: 0 === j.size || G,
                children: renderI18nText("rcs.surveys.submit")
              })
            })]
          }), jsx("div", {
            className: "job_title_prompt_overlay--rightContainer--Fa6gK",
            children: jsx(_$$m, {
              isInModal: !0
            })
          })]
        })
      })
    })
  });
}
export const C = $$F0;
