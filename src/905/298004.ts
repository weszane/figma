import { Op, nr } from "../figma_app/903573";
export let $$r0 = e => Op({
  initial: "await_reset",
  states: [{
    id: "await_reset",
    transitions: [nr("Reset Onboarding", "reset")]
  }, {
    id: "reset",
    transitions: [nr("curator_content_shown", "await_reset", {
      condition: ({
        event: t
      }) => t.properties.shown === e.id
    })]
  }]
});
export const R = $$r0;