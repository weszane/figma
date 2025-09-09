import { shuffle } from "../figma_app/656233";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { eS } from "../figma_app/33126";
import { f } from "../905/940356";
import { useCurrentPublicPlan, useIsOrgOrEnterprisePlan } from "../figma_app/465071";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
let c = atom(() => ({
  questionKey: "what_do_you_do_k12_v1",
  options: new Set(shuffle(["student", "educator"])),
  getOptionDisplay: h
}));
let u = atom(() => {
  let e = shuffle(["developer", "designer", "marketer", "product_manager", "research", "ux_writing", "data_analytics"]);
  e.push("something_else");
  return {
    questionKey: "what_do_you_do_org_ent_v1",
    options: new Set(e),
    getOptionDisplay: h
  };
});
let m = atom(() => {
  let e = shuffle(["developer", "designer", "marketer", "product_manager", "research", "ux_writing", "data_analytics", "student", "educator"]);
  e.push("something_else");
  return {
    questionKey: "what_do_you_do_free_pro_v1",
    options: new Set(e),
    getOptionDisplay: h
  };
});
function _() {
  let e = useAtomWithSubscription(u);
  let t = useAtomWithSubscription(m);
  let a = useCurrentPublicPlan("useWhatDoYouDoV3");
  let {
    questionKey,
    options,
    getOptionDisplay
  } = useIsOrgOrEnterprisePlan(a).unwrapOr(!1) ? e : t;
  return {
    questionKey,
    options,
    questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.what_do_you_do"),
    getOptionDisplay
  };
}
export function $$p1() {
  let {
    questionKey,
    options
  } = _();
  return {
    questionKey,
    options,
    questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.unlock_a_better_figma_experience"),
    questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.tell_us_what_you_do_so_we_deliver_tailored_experience"),
    getOptionDisplay: h
  };
}
function h(e) {
  switch (e) {
    case "developer":
      return getI18nString("auth.extra-info.job-type.software-development");
    case "designer":
      return getI18nString("auth.extra-info.job-type.design");
    case "product_manager":
      return getI18nString("auth.extra-info.job-type.product-management");
    case "marketer":
      return getI18nString("auth.extra-info.job-type.marketing");
    case "research":
      return getI18nString("user_onboarding_signals.v1.answer.research");
    case "ux_writing":
      return getI18nString("user_onboarding_signals.v1.answer.ux_writing");
    case "data_analytics":
      return getI18nString("user_onboarding_signals.v1.answer.data_analytics");
    case "educator":
      return getI18nString("user_onboarding_signals.answer.educator");
    case "student":
      return getI18nString("user_onboarding_signals.answer.student");
    case "something_else":
      return getI18nString("user_onboarding_signals.v2.answer.other");
  }
}
function g() {
  let {
    questionKey,
    options,
    getOptionDisplay
  } = _();
  return {
    questionKey,
    options,
    questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.what_do_you_do_for_work"),
    questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.if_youre_multi_talented_pick_what_you_do_most_often"),
    getOptionDisplay
  };
}
let x = atom(() => {
  let e = shuffle(["student", "educator"]);
  e.push("something_else");
  return {
    questionKey: "what_do_you_do_school_v1",
    options: new Set(e),
    getOptionDisplay: h
  };
});
function b() {
  let {
    questionKey,
    options,
    getOptionDisplay
  } = _();
  return {
    questionKey,
    options,
    questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.which_role_best_describes_you"),
    questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.if_youre_multi_talented_pick_what_you_do_most_often"),
    getOptionDisplay
  };
}
export function $$f0(e) {
  let t = useIsSelectedFigmakeFullscreen();
  let a = useAtomWithSubscription(eS);
  let s = f("not_gen_0");
  let u = function () {
    let {
      questionKey,
      options,
      getOptionDisplay
    } = useAtomWithSubscription(c);
    return {
      questionKey,
      options,
      questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.what_best_describes_you"),
      getOptionDisplay
    };
  }();
  let m = function (e) {
    let t = g();
    let a = function () {
      let {
        questionKey,
        options,
        getOptionDisplay
      } = useAtomWithSubscription(x);
      return {
        questionKey,
        options,
        questionTitle: getI18nString("new_user_experience.user_onboarding_signals.question.whats_your_role_at_school"),
        questionSubtitle: getI18nString("new_user_experience.user_onboarding_signals.description.this_helps_us_know_what_tips_and_resources_to_share_with_you"),
        getOptionDisplay
      };
    }();
    let s = b();
    switch (e) {
      case "work":
        return t;
      case "school":
        return a;
      default:
        return s;
    }
  }(e);
  let _ = function () {
    let e = g();
    let t = b();
    let a = useCurrentPublicPlan("useWhatDoYouDoGen1");
    return useIsOrgOrEnterprisePlan(a).unwrapOr(!1) ? e : t;
  }();
  return a.data ? u : s && !t ? _ : m;
}
export const CR = $$f0;
export const Xg = $$p1;