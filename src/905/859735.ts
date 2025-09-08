import { createNoOpValidator } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.SetPreferenceSchemaValidator = createNoOpValidator();
  }
  setPreferenceValue(e) {
    return this.SetPreferenceSchemaValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/user_preferences/${e.key}`, {
      value: e.value
    }));
  }
}();
export const e = $$r0;