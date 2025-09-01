import { ServiceCategories as _$$e } from "../905/165054";
import { eD } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { Ay } from "../figma_app/778880";
import { $D } from "../905/11";
import { Lo } from "../905/714362";
import { nl } from "../figma_app/257275";
import { vh } from "../figma_app/181241";
import { Rq, wp } from "../905/283918";
import { V } from "../905/666831";
import { l9 } from "../905/145989";
import { B } from "../905/627729";
import { SB, hz, QC, fi } from "../905/461516";
let n;
let p = new class {
  constructor() {
    this.SpellCheckWordsSchemaValidator = vh();
  }
  getSpellCheckWords() {
    return this.SpellCheckWordsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/spell-check-words"));
  }
}();
export async function $$A7() {
  if (nl()) return [];
  try {
    let e = await p.getSpellCheckWords();
    if (200 === e.status) {
      let {
        words
      } = e.data.meta;
      return words.map((e) => e.word);
    }
  } catch (e) {}
  return [];
}
export async function $$y2() {
  try {
    let e = await fetch(SB);
    return (await e.text()).split("\n").filter((e) => e.length > 0);
  } catch (e) {}
  return [];
}
export function $$b6() {
  try {
    return B(debugState.getState().user?.name || "").filter((e) => e.text.length > 0).map((e) => e.text);
  } catch (e) {}
  return [];
}
let v = new class {
  constructor() {
    this._supportedLanguages = [];
    this._triedFetchingDesktopLanguages = !1;
  }
  addLanguages(e) {
    for (let t of e) {
      let e = t.replace("_", "-");
      "ars" === t && (e = "ar-SY");
      this._supportedLanguages.push(e);
    }
  }
  getSupportedLanguages() {
    return this._supportedLanguages;
  }
  supportsLanguage(e) {
    return !!this._supportedLanguages && this._supportedLanguages.includes(e);
  }
  async populateSupportedLanguages(e) {
    let t = [];
    let i = Ay.mac ? [hz] : [];
    switch (e) {
      case QC.DESKTOP:
        {
          if (!eD) {
            $D(_$$e.DESKTOP, Error("desktopApp is not defined, this should not happen as desktop spellcheck has already been initialized"));
            return;
          }
          let n = await eD.spellingGetLanguages();
          if (Lo("populateSupportedLanguages", "desktopLanguages", {
            type: typeof n,
            isArray: Array.isArray(n),
            isNull: null === n,
            isUndefined: void 0 === n
          }), void 0 === n) {
            if (!this._triedFetchingDesktopLanguages) {
              this._triedFetchingDesktopLanguages = !0;
              return this.populateSupportedLanguages(e);
            }
            n = [];
          }
          t = [...i, ...n];
          break;
        }
      case QC.AGENT:
        t = [...i, ...(await Rq())];
        break;
      default:
        t = Object.keys(fi);
    }
    this.addLanguages(t);
  }
}();
export function $$I0(e) {
  v.populateSupportedLanguages(e);
}
export function $$E1() {
  return v.getSupportedLanguages();
}
export function $$x3(e) {
  let t = l9(e);
  if (t && v.supportsLanguage(t)) return t;
  let i = function () {
    let e = navigator.languages;
    return void 0 !== e ? e[0] : navigator.language;
  }();
  return i && v.supportsLanguage(i) ? i : v.getSupportedLanguages()[0] ?? "en-US";
}
export async function $$S4() {
  n || (n = (await V()) ? QC.DESKTOP : !nl() && (await wp()) ? QC.AGENT : QC.HUNSPELL);
  return n;
}
export function $$w5() {
  return n;
}
export const fJ = $$I0;
export const LE = $$E1;
export const N_ = $$y2;
export const Ev = $$x3;
export const x5 = $$S4;
export const i3 = $$w5;
export const oz = $$b6;
export const LJ = $$A7;