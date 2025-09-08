import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$a0 = new class {
  constructor() {
    this.VariableSetDefaultModeSettingSchemaValidator = createNoOpValidator();
  }
  getDefaultModes(e) {
    return this.VariableSetDefaultModeSettingSchemaValidator.validate(({
      xr: t
    }) => "folderId" in e ? t.get("/api/variable_set_default_modes/" + e.folderId) : t.get("/api/variable_set_default_modes", APIParameterUtils.toAPIParameters(e)));
  }
  setDefaultMode(e) {
    return XHR.post("/api/variable_set_default_modes", APIParameterUtils.toAPIParameters(e));
  }
  deleteDefaultMode(e) {
    return XHR.del("/api/variable_set_default_modes", APIParameterUtils.toAPIParameters(e));
  }
}();
export const j = $$a0;