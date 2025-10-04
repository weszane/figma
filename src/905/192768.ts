import _require2 from "../0c62c2fd/621339";
import _require from "../0c62c2fd/621339";
import { jsx } from "react/jsx-runtime";
import { FileBrowser } from "../905/658244";
import { createModalConfig, registerLegacyModal } from "../905/102752";
let s = !1;
let o = "team-admin-downgrade-survey";
export function $$$$l1() {
  if (!s) {
    let e = FileBrowser.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.DowngradeSurveyModalAdmin), createModalConfig("DowngradeSurveyModalAdmin"));
    registerLegacyModal(o, () => jsx(e, {}));
    s = !0;
  }
  return o;
}
let d = !1;
let c = "leave-team-downgrade-survey";
export function $$u0() {
  if (!d) {
    let e = FileBrowser.createLazyComponent(() => Promise.all([]).then(_require2).then(e => e.DowngradeSurveyModalLeaveTeam), createModalConfig("DowngradeSurveyModalLeaveTeam"));
    registerLegacyModal(c, () => jsx(e, {}));
    d = !0;
  }
  return c;
}
export const P = $$u0;
export const l = $$$$l1;