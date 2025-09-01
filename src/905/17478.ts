import { _5 } from "../figma_app/181241";
export let $$r0 = new class {
  upsertUserFlagWithCount(e, t) {
    return _5.validate(({
      xr: i
    }) => i.put(`/api/user/flag/${e}`, {
      count: t
    }));
  }
  resetUserFlag(e) {
    return _5.validate(({
      xr: t
    }) => t.post("/api/user/flags", {
      flags: {
        [e]: !1
      }
    }));
  }
  setUserFlag(e, t) {
    return _5.validate(({
      xr: i
    }) => i.post("/api/user/flags", {
      flags: {
        [e]: t
      }
    }));
  }
}();
export const H = $$r0;