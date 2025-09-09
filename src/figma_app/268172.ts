import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen, Command } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { generateUUIDv4 } from "../905/871474";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { O } from "../905/195092";
export let $$n1;
let h = "text-suggestions-dismiss-count";
class m {
  generateRequestId() {
    return generateUUIDv4();
  }
  generateSessionId() {
    return generateUUIDv4();
  }
  async getSuggestion(e, t, r, n) {
    let a;
    try {
      a = await O(e, t, r, n);
    } catch (e) {
      reportError(_$$e.AI_PRODUCTIVITY, e);
    }
    return {
      text: a?.text,
      inputTokens: a?.inputTokens,
      serializationLatencyMs: a?.serializationLatencyMs,
      requestLatencyMs: a?.requestLatencyMs
    };
  }
  onExplicitDismiss(e) {
    let t = g() + 1;
    if (t < 50) {
      localStorage.setItem(h, t.toString());
      return;
    }
    debugState.dispatch(VisualBellActions.enqueue({
      type: "text-suggestion-nudge",
      message: getI18nString("fullscreen.text_suggestion_nudge_message"),
      icon: VisualBellIcon.SPARKLE,
      button: {
        text: getI18nString("fullscreen.text_suggestion_nudge_turn_off"),
        action: () => {
          Fullscreen?.triggerActionEnum(Command.TOGGLE_TEXT_SUGGESTIONS_PREFERENCE, {});
        }
      }
    }));
    trackEventAnalytics("autosuggest_text.preference_nudge_shown", {
      sessionId: e
    });
    f(e);
  }
  onFullOrPartialAccept(e) {
    f(e);
  }
}
function g() {
  let e = Number(localStorage.getItem(h) ?? "0");
  return isNaN(e) ? 0 : e;
}
function f(e) {
  let t = g();
  localStorage.removeItem(h);
  t > 0 && trackEventAnalytics("autosuggest_text.dismiss_count_reset", {
    sessionId: e,
    dismiss_count: t
  });
}
export function $$E0() {
  $$n1 = new m();
}
export const $W = $$E0;
export const z5 = $$n1;