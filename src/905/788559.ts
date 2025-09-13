import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../905/521428";
import { K } from "../905/443068";
import { y as _$$y } from "../905/37128";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager, useAtomValueAndSetter } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { useHandleFocusEvent, generateRecordingKey } from "../figma_app/878298";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { showModalHandler, hideModal } from "../905/156213";
import { JT } from "../figma_app/632248";
import { uZ, i9 } from "../905/487011";
import { EM, s7, Cb } from "../905/278499";
import { B as _$$B } from "../905/222272";
import { Label } from "../905/270045";
import { isCommandEvent } from "../905/63728";
import { Point } from "../905/736624";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { registerModal } from "../905/102752";
import { Ao } from "../905/748636";
let d = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M8.5 6c.657 0 1.213.423 1.416 1.012l4.979-.711a2.5 2.5 0 0 1 2.74 1.73l1.053 3.372A2 2 0 0 1 16.78 14h-2.175c.248.621.396 1.295.396 2a2 2 0 1 1-4 0c0-.35-.195-.867-.664-1.336a2.6 2.6 0 0 0-.537-.415A1.5 1.5 0 0 1 8.501 15h-1A1.5 1.5 0 0 1 6 13.5v-6l.008-.153A1.5 1.5 0 0 1 7.5 6zm8.18 2.328a1.5 1.5 0 0 0-1.644-1.037L10 8.011v5.22c.365.163.724.407 1.043.726.613.613.957 1.372.957 2.043a1 1 0 1 0 2 0c0-.563-.118-1.112-.325-1.629L13.127 13h3.652a1 1 0 0 0 .955-1.299zM7.5 7a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"
    })
  });
});
let C = "feedback_modal--label--YyRBR";
let T = registerModal(function (e) {
  let {
    aiTrackingContext,
    additionalFeedbackCallback,
    onClose,
    onSubmitted
  } = e;
  let [l, d] = useState("");
  let c = useRef(null);
  let u = useCallback(() => {
    l.length && (uZ({
      ...aiTrackingContext,
      additional_feedback_view_type: EM.FREE_TEXT,
      feedback: l
    }), additionalFeedbackCallback && additionalFeedbackCallback(EM.FREE_TEXT, l), onClose(), onSubmitted());
  }, [aiTrackingContext, additionalFeedbackCallback, onClose, onSubmitted, l]);
  let p = useHandleFocusEvent(e.recordingKey, "submit", e => {
    e.preventDefault();
    u();
  });
  let h = useCallback(e => {
    "Enter" === e.key && isCommandEvent(e) && !e.altKey && !e.shiftKey && (e.preventDefault(), e.stopPropagation(), u());
  }, [u]);
  return jsx(Ao, {
    title: getI18nString("qa.additional_feedback"),
    initialWidth: 320,
    dragHeaderOnly: !0,
    onClose,
    ref: c,
    recordingKey: generateRecordingKey(e.recordingKey, "modal"),
    initialPosition: new Point(window.innerWidth / 2 - 20, window.innerHeight / 2 - 10),
    zIndex: aiTrackingContext.action === JT.CODE_CHAT ? 10 : void 0,
    children: jsxs("form", {
      className: "feedback_modal--modal--RI3dg",
      onSubmit: p,
      children: [jsx(Label, {
        className: C,
        children: renderI18nText("qa.how_was_your_experience")
      }), jsx(BigTextInputForwardRef, {
        className: "feedback_modal--textInput---aNOT feedback_modal--textArea--8FsjK",
        placeholder: getI18nString("qa.submit_feedback_placeholder"),
        type: "textarea",
        autoFocus: !0,
        value: l,
        recordingKey: generateRecordingKey(e.recordingKey, "textArea"),
        onChange: e => d(e.target.value),
        onKeyDown: h,
        maxLength: 1e3
      }), jsx(Label, {
        className: [C, "feedback_modal--secondary--llXoR"].join(" "),
        children: renderI18nText("qa.we_use_this_to_improve")
      }), jsx(_$$B, {
        justify: "end",
        children: jsx(Button, {
          type: "submit",
          disabled: !l.length,
          children: getI18nString("qa.submit_feedback")
        })
      })]
    })
  });
}, "ACTIONS_FEEDBACK_MODAL");
let $$k = "feedback_view--feedbackButton--oPE56";
let R = "feedback_view--feedbackButtonWrapper--Zp7L1";
let N = [JT.FIRST_DRAFT, JT.FIRST_DRAFT_MAKE_CHANGES];
let P = "actionsFeedbackButton";
let O = atom({
  selectedFeedback: null,
  shouldShowAdditionalFeedback: !1
});
export function $$D1() {
  atomStoreManager.set(O, {
    selectedFeedback: null,
    shouldShowAdditionalFeedback: !1
  });
}
export function $$L0({
  aiTrackingContext: e,
  rateOutputStrOverride: t,
  sentimentFeedbackCallback: i,
  additionalFeedbackCallback: _,
  hideInitialText: v,
  externalFeedbackState: I,
  setExternalFeedbackState: E,
  thumbsUpLabel: x,
  thumbsDownLabel: S
}) {
  let [w, C] = useAtomValueAndSetter(O);
  let D = I && E ? I : w;
  let L = useCallback(e => {
    let t = e(D);
    I && E ? E(t) : C(e);
  }, [D, E, I, C]);
  let F = useDispatch();
  let M = useRef(null);
  let j = t => {
    M && M.current?.focus();
    i9({
      ...e,
      sentiment_feedback_view_type: s7.THUMB_RATING,
      positive_feedback: "positive" === t,
      feedback: "positive" === t ? Cb.POSITIVE : Cb.NEGATIVE
    });
    i && i(s7.THUMB_RATING, t);
    N.includes(e.action) && trackEventAnalytics("First Draft: Feedback", {
      clientLifecycleId: e.clientLifecycleId,
      file_key: e.file_key,
      intent: t
    }, {
      batchRequest: !0
    });
    L(e => ({
      ...e,
      selectedFeedback: t,
      shouldShowAdditionalFeedback: !0
    }));
  };
  let U = D.selectedFeedback ? _$$s.flex1.textBodyMedium.$ : _$$s.colorTextSecondary.textBodyMedium.flex1.$;
  let B = useSelector(e => !!e.modalShown && e.modalShown.type === T.type);
  let V = D.selectedFeedback || !v;
  return jsx("div", {
    className: _$$s.pl4.flex.$,
    ref: M,
    tabIndex: -1,
    children: jsxs(_$$B, {
      fullWidth: !0,
      align: "center",
      children: [V && jsx(_$$B, {
        fullWidth: !0,
        justify: "space-between",
        children: D.selectedFeedback && D.shouldShowAdditionalFeedback && getFeatureFlags().qa_user_additional_feedback ? jsx("div", {
          className: _$$s.ml4.textBodyMedium.$,
          children: jsx(Button, {
            variant: "link",
            onClick: () => {
              F(showModalHandler({
                type: T,
                data: {
                  aiTrackingContext: e,
                  recordingKey: generateRecordingKey(P, "additionalFeedback"),
                  onClose: () => {
                    F(hideModal());
                    M && M.current?.focus();
                  },
                  onSubmitted: () => {
                    L(e => ({
                      ...e,
                      shouldShowAdditionalFeedback: !1
                    }));
                  },
                  additionalFeedbackCallback: _
                }
              }));
            },
            recordingKey: generateRecordingKey(P, "additionalFeedback"),
            disabled: B,
            children: renderI18nText("qa.additional_feedback")
          })
        }) : jsx("span", {
          className: U,
          children: D.selectedFeedback ? getI18nString("qa.feeback_thank_you") : t || getI18nString("qa.rate_output")
        })
      }), jsx("div", {
        className: _$$s.minH24.$,
        children: !D.selectedFeedback && jsxs(_$$B, {
          gap: 4,
          children: [jsx("div", {
            className: R,
            children: jsx(K, {
              recordingKey: generateRecordingKey(P, "thumbsUp"),
              "aria-label": x ?? getI18nString("qa.thumbs_up"),
              onClick: () => j("positive"),
              children: jsx(_$$y, {
                className: $$k
              })
            })
          }), jsx("div", {
            className: R,
            children: jsx(K, {
              recordingKey: generateRecordingKey(P, "thumbsDown"),
              "aria-label": S ?? getI18nString("qa.thumbs_down"),
              onClick: () => j("negative"),
              children: jsx(d, {
                className: $$k
              })
            })
          })]
        })
      })]
    })
  });
}
export const z = $$L0;
export const k = $$D1;