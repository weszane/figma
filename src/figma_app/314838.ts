import { z } from "../905/239603";
import { createMetaValidator, APIParameterUtils } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
import { convertSinatraModel } from "../905/412108";
let o = z.object({
  id: z.string(),
  name: z.string().nullable(),
  creatorId: z.string(),
  teamId: z.string(),
  baseColors: z.array(z.string()),
  uuid: z.string().uuid(),
  isTeamDefault: z.boolean()
});
let $$l0 = new class {
  constructor() {
    this.ColorPaletteSchemaValidator = createMetaValidator("ColorPaletteSchemaValidator", convertSinatraModel(o), null);
  }
  createColorPalette(e) {
    return this.ColorPaletteSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/color_palettes", APIParameterUtils.toAPIParameters(e)));
  }
  updateColorPalette(e) {
    return this.ColorPaletteSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/color_palettes/${e.uuid}`, APIParameterUtils.toAPIParameters(e)));
  }
  async deleteColorPalette(e) {
    await sendWithRetry.del(`/api/color_palettes/${e}`);
  }
  setUserColorPaletteOverrideForFile(e, t) {
    return sendWithRetry.post(`/api/files/${e}/color_palette`, APIParameterUtils.toAPIParameters({
      colorPaletteUuid: t
    }));
  }
  async setTeamDefaultPalette(e, t) {
    await sendWithRetry.post(`/api/teams/${e}/default_color_palette`, APIParameterUtils.toAPIParameters({
      colorPaletteUuid: t
    }));
  }
  async clearTeamDefaultPalette(e) {
    await sendWithRetry.del(`/api/teams/${e}/default_color_palette`);
  }
}();
export const v = $$l0;
