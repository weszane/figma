import { sx } from "../905/449184";
import { $j } from "../vendor/715708";
async function a() {
  return !!(await window.PublicKeyCredential?.isConditionalMediationAvailable?.());
}
export async function $$s0(e) {
  sx("passkey_support", {
    flow: e,
    supports_webauthn: $j(),
    supports_mediation: await a()
  }, {
    batchRequest: !1
  });
}
export const p = $$s0;