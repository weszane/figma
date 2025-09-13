import { useAtomWithSubscription, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { qB } from "../905/862321";
import { openFileKeyAtom } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { DeviceTryFileView } from "../figma_app/43951";
import { D as _$$D } from "../905/347702";
import { B } from "../figma_app/659940";
let $$_0 = _$$D(() => {
  let e = useAtomWithSubscription(openFileKeyAtom);
  return useSubscription(DeviceTryFileView, {
    fileKey: e || ""
  }, {
    enabled: !!e
  });
});
let h = atom(!1);
export function $$m1() {
  let e = debugState.getState().selectedView;
  let t = e?.view === "fullscreen" ? e.claim : null;
  let r = B();
  let a = selectCurrentUser();
  let l = $$_0();
  let [c, u] = useAtomValueAndSetter(h);
  if ("loaded" !== l.status) return () => {};
  if (getResourceDataOrFallback(l.data?.deviceTryFile) && e && t && !a && !c) {
    if ("signup" === t) return () => {
      u(!0);
      r({
        origin: "google_hardware_claim_file",
        formState: qB.SIGN_UP
      });
    };
    if ("login" === t) return () => {
      u(!0);
      r({
        origin: "google_hardware_claim_file",
        formState: qB.SIGN_IN
      });
    };
  }
  return () => {};
}
export const s = $$_0;
export const v = $$m1;