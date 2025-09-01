import { vh } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.FollowsSchemaValidator = vh();
  }
  getFollows(e) {
    return this.FollowsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/follows/${e.authorId}`));
  }
}();
export const L = $$r0;