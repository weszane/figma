import { createNoOpValidator } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.SongsSchemaValidator = createNoOpValidator();
    this.ActiveSchemaValidator = createNoOpValidator();
  }
  getSongs() {
    return this.SongsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/songs"));
  }
  getActive(e) {
    return this.ActiveSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/songs/active/${e.songID}`));
  }
}();
export const N = $$r0;