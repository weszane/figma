import { createNoOpValidator } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.IdleTimeoutPrecheckSchemaValidator = createNoOpValidator();
  }
  getIdleTimeoutPrecheck(e) {
    return this.IdleTimeoutPrecheckSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/idle_timeout_precheck", {
      fuid: e.fuid
    }));
  }
}();
export const N = $$r0;