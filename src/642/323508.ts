import { Op, nr, rn } from "../figma_app/903573";
import { WD4 } from "../figma_app/6204";
let i = Op({
  initial: "ready_to_show",
  states: [{
    id: "ready_to_show",
    transitions: [nr("curator_content_shown", "no_figma_basics_onboarding_was_shown_in_current_session", {
      condition: ({
        event: e
      }) => e.properties.shown === WD4.id
    })]
  }, {
    id: "no_figma_basics_onboarding_was_shown_in_current_session",
    terminal: !0
  }]
});
let $$l0 = rn("track_no_figma_basics_onboarding_shown", i);
export const j = $$l0;