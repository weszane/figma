import { jsx } from "react/jsx-runtime";
import { trackEventAnalytics } from "../905/449184";
import { ListFormatter } from "../figma_app/257703";
import { getI18nString, renderI18nText } from "../905/303541";
import { selectCurrentFile } from "../figma_app/516028";
import { W5, bF } from "../figma_app/120294";
let $$d1 = "audio-paywall-key";
let $$c2 = (() => {
  let e = !0;
  let t = !1;
  return i => {
    t || setTimeout(() => {
      i > 0 && e ? (e = !1, trackEventAnalytics("Context Viewed", {
        name: "join-call-with-others"
      })) : e || 0 !== i || (t = !0, trackEventAnalytics("Context Viewed", {
        name: "should-close-open-audio-nux"
      }));
    }, 200);
  };
})();
export function $$u0() {
  let e;
  let t = selectCurrentFile();
  let {
    userIdsInCall
  } = W5(t?.key || null);
  let n = bF(userIdsInCall, t?.key || null).map(e => e.name);
  e = n.length > 3 ? [...n.slice(0, 2), getI18nString("collaboration.voice.n_others", {
    numUsers: n.length - 2
  })] : n;
  let d = jsx(ListFormatter, {
    children: e
  });
  return renderI18nText("collaboration.voice.are_talking_in_this_file", {
    numVoiceUsers: e.length,
    voiceUserNames: d,
    joinText: jsx("b", {
      children: renderI18nText("collaboration.voice.join_lower")
    })
  });
}
export const OS = $$u0;
export const _2 = $$d1;
export const w$ = $$c2;