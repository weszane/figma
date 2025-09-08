import { createNoOpValidator } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.UserCommunicationPreferenceSchemaValidator = createNoOpValidator();
    this.UserCommunicationPreferenceSchemaValidatorOnUpdate = createNoOpValidator();
  }
  getUserCommunicationPreference(e) {
    return this.UserCommunicationPreferenceSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/user_communication_preference", {
      channel_type: e.channelType,
      policy_types_csv: e.policyTypesCsv
    }));
  }
  updateUserCommunicationPreference(e) {
    return this.UserCommunicationPreferenceSchemaValidatorOnUpdate.validate(async ({
      xr: t
    }) => await t.put("/api/user_communication_preference/single_policy", {
      channel_type: e.channelType,
      policy_type: e.policyType,
      policy_setting: e.policySetting
    }));
  }
  updateUserCommunicationChannelSetting(e) {
    return this.UserCommunicationPreferenceSchemaValidatorOnUpdate.validate(async ({
      xr: t
    }) => await t.post("/api/user_communication_preference/channel_policy", {
      channel_type: e.channelType,
      channel_setting: e.channelSetting
    }));
  }
}();
export const z = $$r0;