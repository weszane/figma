import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { shuffle } from "../figma_app/656233";
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import { am } from "../figma_app/901889";
import { Ay } from "../figma_app/778880";
import { t as _$$t } from "../905/303541";
import { y } from "../figma_app/297957";
import { q5 } from "../figma_app/516028";
import { f6, Hn, xD, ri } from "../905/337179";
var l = o;
export function $$g2({
  index: e,
  userId: t
}) {
  let i = [{
    suggestionDisplay: _$$t("comments_suggestions.pending_user_invite_suggestions.take_a_look_here"),
    suggestionInsert: _$$t("comments_suggestions.pending_user_invite_suggestions.take_a_look_here"),
    suggestionsKey: "take_a_look_here"
  }, {
    suggestionDisplay: _$$t("comments_suggestions.pending_user_invite_suggestions.id_love_your_feedback_about"),
    suggestionInsert: _$$t("comments_suggestions.pending_user_invite_suggestions.insert_id_love_your_feedback_about"),
    suggestionsKey: "id_love_your_feedback"
  }, {
    suggestionDisplay: _$$t("comments_suggestions.pending_user_invite_suggestions.what_do_you_think"),
    suggestionInsert: _$$t("comments_suggestions.pending_user_invite_suggestions.what_do_you_think"),
    suggestionsKey: "what_do_you_think"
  }];
  return {
    type: "suggestions",
    suggestedComments: shuffle(i, parseInt(t, 10)),
    index: e
  };
}
export let $$f0 = 122;
export function $$_1(e) {
  let [t, i] = useState(!1);
  let a = q5()?.teamId;
  let o = y()({
    isDraftFile: !a,
    isMobile: Ay.isMobileBrowser,
    showExpAtMentionInvite: !!getFeatureFlags().show_at_mention_invited_users,
    isFigmaDesign: !0,
    inOrg: !1
  });
  let u = am();
  useEffect(() => {
    u("comments_suggestions_picker_opened");
  }, [u]);
  let g = f6(e);
  let f = e.typeahead.suggestedComments.map((r, a) => {
    let s = () => {
      e.setTypeahead({
        ...e.typeahead,
        index: a
      });
    };
    return jsx(Hn, {
      className: o ? "suggestions_picker--suggestionPills--F2U5D" : "suggestions_picker--suggestionPillsOneLine--lfIYI",
      selectedClassName: "suggestions_picker--suggestionPillsSelected--hAP3v",
      selected: e.typeahead.index === a,
      onPointerOver: () => {
        t && s();
      },
      onPointerDown: () => {
        i(!0);
        s();
      },
      onClick: () => {
        u("comments_suggestions_picker_selected_item", {
          commentSuggestion: r.suggestionsKey,
          commentSuggestionIndex: a + 1
        });
        e.onInsert();
      },
      children: r.suggestionDisplay
    }, `commentSuggestion ${r.suggestionDisplay}`);
  });
  return jsx(xD, {
    dispatchTypeahead: e.setTypeahead,
    typeahead: e.typeahead,
    className: l()({
      "suggestions_picker--suggestionPillsContainer--JskJh": o,
      "suggestions_picker--suggestionPillsOneLineContainer--ca6z2 suggestions_picker--suggestionPillsContainer--JskJh": !o,
      "suggestions_picker--suggestionPillsDown--xWgqm": e.direction === ri.DOWNWARDS,
      "suggestions_picker--suggestionPillsUp--hKeVe": e.direction === ri.UPWARDS
    }),
    onPointerMove: () => i(!0),
    onInsert: e.onInsert,
    onClear: e.onClear,
    isOneLineOfSuggestions: !o,
    trackEvent: u,
    ...g,
    children: f
  });
}
export const NS = $$f0;
export const Cs = $$_1;
export const tI = $$g2;