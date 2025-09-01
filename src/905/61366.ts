import { sx } from "../905/449184";
import { debugState } from "../905/407919";
import { Ay } from "../figma_app/778880";
import { nF } from "../905/350402";
import { b } from "../905/985254";
let l = Ay.isIpad || Ay.isIpadNative;
function d() {
  return l ? "hide_figjam_templates_picker" : "hide_figjam_starter_kit";
}
export function $$c0() {
  let e = d();
  return !!debugState && !!debugState.getState().userFlags[e];
}
export let $$u1 = nF((e, t) => {
  var i;
  let { userFlag = d(), hide, triggeredFrom } = t;
  let { dispatch } = e;
  let c = e.getState().openFile?.key || null;
  dispatch(
    b({
      [userFlag]: hide,
    }),
  );
  i = {
    fileKey: c,
    setting: userFlag,
    value: hide,
    triggeredFrom,
  };
  sx("templates_preference_updated", i);
});
export const J = $$c0;
export const x = $$u1;
