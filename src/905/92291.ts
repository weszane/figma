import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { If } from "../figma_app/685921";
export let $$s0 = new class {
  constructor() {
    this.DeviceCodeSchemaValidator = createNoOpValidator();
  }
  shareFileToGoogleDevice(e) {
    return this.DeviceCodeSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/meet_device/share", APIParameterUtils.toAPIParameters(e)));
  }
  setClaimEmail(e) {
    return XHR.post(`/api/device_try_file_claim_emails/${e.fileKey}`, {
      email_address: e.emailAddress
    });
  }
  claimDeviceFile(e) {
    return If.validate(async ({
      xr: t
    }) => await t.put(`/api/device_try_files/${e.fileKey}/save`));
  }
  cleanupSession() {
    return XHR.post("/api/meet_device/cleanup");
  }
}();
export const L = $$s0;