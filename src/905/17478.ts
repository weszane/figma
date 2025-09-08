import { defaultValidator } from "../figma_app/181241";
export let $$r0 = new class {
  upsertUserFlagWithCount(e, t) {
    return defaultValidator.validate(({
      xr: i
    }) => i.put(`/api/user/flag/${e}`, {
      count: t
    }));
  }
  resetUserFlag(e) {
    return defaultValidator.validate(({
      xr: t
    }) => t.post("/api/user/flags", {
      flags: {
        [e]: !1
      }
    }));
  }
  setUserFlag(e, t) {
    return defaultValidator.validate(({
      xr: i
    }) => i.post("/api/user/flags", {
      flags: {
        [e]: t
      }
    }));
  }
}();
export const H = $$r0;