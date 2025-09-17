import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupAutofocusHandler } from "../905/128376";
import { analyticsEventManager } from "../905/449184";
import { normalizeJobRole, JOB_ROLE_KEYS, getJobRoleDisplayWithEducation } from "../3973/538504";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { ConfirmationModal } from "../905/441305";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { yJ } from "../figma_app/24841";
import { logAndTrackCTA } from "../figma_app/314264";
import { Um } from "../905/848862";
import { e0 } from "../905/696396";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { l6, c$ } from "../905/794875";
import { Lt } from "../figma_app/639088";
export let $$b0 = registerModal(function (e) {
  return jsx(I, {
    ...e
  });
}, "CHANGE_JOB_TITLE_MODAL", ModalSupportsBackground.YES);
function v(e) {
  return "other" === e || "something_else" === e;
}
function I(e) {
  let t = useDispatch();
  let i = useSelector(e => e.user);
  let _ = Um();
  let b = i.profile?.job_title ?? "";
  let I = "student" === b || "educator" === b ? b : normalizeJobRole(b);
  let E = "unknown" === I ? "other" : I;
  let [x, S] = useState(E);
  let w = v(b) ? "" : b;
  let [C, T] = useState(w);
  let k = JOB_ROLE_KEYS;
  let R = () => {
    let e = x;
    let n = "change_job_modal_selection";
    v(x) && C && (e = C, n = "change_job_modal_custom");
    t(yJ({
      user: {
        id: i.id,
        job_title: e,
        job_title_source: n
      },
      userInitiated: !0
    }));
    analyticsEventManager.trackDefinedEvent("activation.job_title_changed", {
      newJobTitle: e,
      prevJobTitle: b,
      source: n,
      jobTitleSeenList: k.toString()
    });
    logAndTrackCTA({
      trackingContext: e0.FILE_BROWSER,
      context: "job_title",
      text: "Change Role",
      jobTitle: e,
      prevJobTitle: E
    });
  };
  let N = setupAutofocusHandler();
  return jsxs(ConfirmationModal, {
    ...e,
    title: getI18nString("settings.account_settings.change_job_title_modal_title"),
    onConfirm: () => R(),
    confirmText: getI18nString("general.save"),
    children: [jsx(l6, {
      ariaLabel: getI18nString("settings.account_settings.change_job_title_link"),
      dispatch: t,
      dropdownShown: _,
      fill: !0,
      formatter: {
        format: getJobRoleDisplayWithEducation
      },
      id: "change-job-title-dropdown",
      inputClassName: Lt,
      inputRef: N,
      onChange: e => {
        S(e);
        T("");
      },
      property: x,
      children: k.map(e => jsx(c$, {
        value: e,
        children: getJobRoleDisplayWithEducation(e)
      }, e))
    }), v(x) && jsx(BigTextInputForwardRef, {
      id: "other-job-title-input",
      className: _$$s.wFull.mt10.$,
      value: C,
      placeholder: getI18nString("job-title.other.input-placeholder"),
      onChange: e => {
        T(e.currentTarget.value);
      }
    })]
  });
}
export const u = $$b0;