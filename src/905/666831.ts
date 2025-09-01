import { eD } from "../figma_app/876459";
import { Lo } from "../905/714362";
import { r as _$$r, l } from "../905/927060";
export async function $$s0() {
  if (eD) {
    let e = await eD.spellingGetLanguages();
    Lo("Desktop app spellcheck support check", "spellingGetLanguages", {
      type: typeof e,
      isArray: Array.isArray(e),
      isNull: null === e,
      isUndefined: void 0 === e
    });
    return !!e;
  }
  return !1;
}
export class $$o1 {
  constructor() {
    this.name = "Desktop";
    this.language = "";
  }
  async initialize(e, t) {
    this.setLanguage(e);
    await eD.spellingIgnore(t || []);
  }
  async getSuggestionsForWord(e) {
    return await eD.spellingSuggest(e, this.language);
  }
  async spellCheckText(e) {
    let t = await eD.spellingCheckSpelling(e, this.language);
    return _$$r(e, t);
  }
  async setLanguage(e) {
    this.language = l(e);
    return !0;
  }
  async addWords(e) {
    await eD.spellingIgnore(e, this.language);
  }
}
export const V = $$s0;
export const f = $$o1;