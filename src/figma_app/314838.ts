import { z } from "../905/239603";
import { YV, td } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { D } from "../905/412108";
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
    this.ColorPaletteSchemaValidator = YV("ColorPaletteSchemaValidator", D(o), null);
  }
  createColorPalette(e) {
    return this.ColorPaletteSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/color_palettes", td.toAPIParameters(e)));
  }
  updateColorPalette(e) {
    return this.ColorPaletteSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/color_palettes/${e.uuid}`, td.toAPIParameters(e)));
  }
  async deleteColorPalette(e) {
    await XHR.del(`/api/color_palettes/${e}`);
  }
  setUserColorPaletteOverrideForFile(e, t) {
    return XHR.post(`/api/files/${e}/color_palette`, td.toAPIParameters({
      colorPaletteUuid: t
    }));
  }
  async setTeamDefaultPalette(e, t) {
    await XHR.post(`/api/teams/${e}/default_color_palette`, td.toAPIParameters({
      colorPaletteUuid: t
    }));
  }
  async clearTeamDefaultPalette(e) {
    await XHR.del(`/api/teams/${e}/default_color_palette`);
  }
}();
export const v = $$l0; 
