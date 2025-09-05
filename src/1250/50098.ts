import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { Wk } from "../figma_app/272243";
import { WW } from "../905/521428";
import { Xr, fp } from "../figma_app/27355";
import { az } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { C8 } from "../figma_app/778880";
import { Kz, ks } from "../figma_app/637027";
import { B as _$$B } from "../905/714743";
import { t as _$$t, tx } from "../905/303541";
import { yJ } from "../figma_app/24841";
import { b as _$$b } from "../905/985254";
import { fu } from "../figma_app/831799";
import { e as _$$e } from "../905/621515";
import { Cu } from "../figma_app/314264";
import { Pc } from "../905/372672";
import { f as _$$f } from "../905/940356";
import { N as _$$N } from "../figma_app/268271";
import { M as _$$M } from "../905/152487";
import { bk, Q7, ZE } from "../905/98947";
import { pu } from "../7037/430062";
import { L as _$$L } from "../9864/861465";
import { m as _$$m } from "../9864/958952";
import { Xg } from "../7021/854265";
import { CAe } from "../figma_app/6204";
import { A as _$$A } from "../905/920142";
import { HB } from "../3973/538504";
import { sZ } from "../905/845253";
import { X$, YY } from "../figma_app/465071";
import { A as _$$A2 } from "../svg/831814";
let L = "Job Title Prompt";
export function $$F0({
  source: e
}) {
  let t = function () {
    let e = X$("useIsEligibleForJobTitleReprompt");
    let t = YY(e).unwrapOr(!1);
    let n = Pc();
    let a = sZ();
    let i = n.profile.job_title;
    let o = HB(i);
    return useCallback(() => !(a && a.k12_google_org || n.email.endsWith(".edu") || t || _$$A(n.email_validated_at).add(14, "day").isAfter(_$$A(Date.now()))) && (!i || ("something_else" === i ? !!_$$A(n.email_validated_at).isBefore(_$$A(new Date("2024-12-10"))) : "other" === o && (!a || !a.saml_sso_only))), [a, t, o, i, n.email, n.email_validated_at]);
  }();
  let n = Xr(bk);
  let i = Xr(Q7);
  let o = Pc().name;
  let s = !!_$$f("submitted_job_title_prompt_overlay");
  let {
    show,
    complete,
    isShowing
  } = _$$e({
    overlay: CAe,
    priority: _$$N.OVERRIDING_MODAL
  });
  return (_$$h(() => {
    C8() || window.matchMedia("(max-width: 840px)").matches || s || show({
      canShow: t,
      onShow: () => {
        n(pu.WHAT_DO_YOU_DO);
        i(o);
      }
    });
  }), isShowing) ? jsx(_$$M, {
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
  let u = useDispatch();
  let m = Pc();
  let y = m.id;
  let T = m.profile.job_title;
  let [j, k] = fp(ZE);
  let [C, N] = useState("");
  let {
    questionKey,
    options,
    questionTitle,
    questionSubtitle,
    getOptionDisplay
  } = Xg();
  let B = Array.from(options).toString();
  let U = hS({
    open: e,
    onClose: ({
      source: e
    }) => {
      Cu({
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
  return jsx(fu, {
    name: L,
    properties: {
      jobTitleList: B,
      source: n
    },
    children: jsx(bL, {
      manager: U,
      width: "fit-content",
      height: "fixed",
      children: jsx(Wk, {
        children: jsxs("div", {
          className: "job_title_prompt_overlay--container--Chyt7",
          children: [jsxs("div", {
            className: "job_title_prompt_overlay--leftContainer--J7Zlz",
            children: [jsx(_$$B, {
              svg: _$$A2,
              useOriginalSrcFills_DEPRECATED: !0,
              autosize: !0,
              height: "32px",
              width: "24px"
            }), jsx(Kz, {
              multiple: 3
            }), jsx("h1", {
              children: questionTitle
            }), jsx(Kz, {
              multiple: .5
            }), jsx("p", {
              className: "job_title_prompt_overlay--jobTitleSubheading--1t5Ue",
              children: questionSubtitle
            }), jsx(Kz, {
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
              endingOption: j.has("something_else") ? jsx(ks, {
                autoFocus: !0,
                dataTestId: "custom_job_title_input",
                className: "job_title_prompt_overlay--otherInput--aNBXq",
                placeholder: _$$t("user_onboarding_signals.v1.answer.other.placeholder"),
                value: C,
                onChange: e => N(e.currentTarget.value)
              }) : void 0
            }), jsx(Kz, {
              multiple: 3
            }), jsx("span", {
              className: "job_title_prompt_overlay--submitButton--uVeNa",
              children: jsx(WW, {
                variant: "primary",
                onClick: () => {
                  let [e] = j;
                  let t = e;
                  let n = "job_title_prompt_selection";
                  "something_else" === t && C.length > 0 && (t = C, n = "job_title_prompt_custom");
                  u(yJ({
                    user: {
                      id: y,
                      job_title: t,
                      job_title_source: n
                    },
                    userInitiated: !0
                  }));
                  az.trackDefinedEvent("activation.job_title_changed", {
                    newJobTitle: t,
                    prevJobTitle: T,
                    source: n,
                    jobTitleSeenList: B
                  });
                  Cu({
                    trackingContext: L,
                    text: "Submit Job Title",
                    jobTitle: t,
                    prevJobTitle: T,
                    jobTitleList: B
                  });
                  u(_$$b({
                    submitted_job_title_prompt_overlay: !0
                  }));
                  U.props.close({
                    source: "other"
                  });
                },
                disabled: 0 === j.size || G,
                children: tx("rcs.surveys.submit")
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