import { v4 } from "../figma_app/655139";
import { gB } from "../905/294543";
import { V0 } from "../figma_app/755395";
import { $h, OQ } from "../905/191741";
import { isCodegenSupportedForLanguage, getCodeExtensionPreferences } from "../figma_app/120227";
import { q } from "../figma_app/644226";
export function $$d0() {
  let [e, t] = $h();
  let i = isCodegenSupportedForLanguage();
  let d = q();
  let c = getCodeExtensionPreferences();
  let u = v4();
  let p = gB();
  let m = V0({
    codeLanguage: u,
    onChange: p
  });
  let h = OQ;
  return {
    inspectionMode: h.find(t => t === e) || h[0],
    setInspectionMode: t,
    supportsAlternativeUnits: i,
    preferenceOptions: d,
    preferences: c,
    codeLanguageApi: m,
    inspectionModes: h
  };
}
export const Q = $$d0;