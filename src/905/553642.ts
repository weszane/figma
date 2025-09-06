import { getI18nString } from "../905/303541";
import { getI18nState } from "../figma_app/363242";
import { UK } from "../figma_app/740163";
import { jI } from "../figma_app/506364";
import { LE, i3, Ev, x5 } from "../905/543054";
import { up, Up } from "../905/145989";
import { hz, QC } from "../905/461516";
export function $$c1() {
  return {
    action: "toggle-spell-check",
    flags: ["design", "whiteboard", "slides"],
    propertyValue: !0,
    property: UK().spellCheckPreference
  };
}
export function $$u0() {
  let e = LE();
  let t = getI18nState().getPrimaryLocale(!1);
  let i = Intl && Intl.DisplayNames ? new Intl.DisplayNames(getI18nState().getPrimaryLocale(!1), {
    type: "language",
    languageDisplay: "standard"
  }) : void 0;
  let c = e => {
    if (e === hz) return getI18nString("spell_check.auto_detect_language_display_text");
    try {
      return i && i.of(e) || e;
    } catch (e) {}
    return e;
  };
  e.sort((e, i) => e === hz ? -1 : i === hz ? 1 : c(e).localeCompare(c(i), t || "en"));
  return e.map(e => ({
    recordingKey: `spell-check-dictionary-option-${e}`,
    action: "redo-spell-checking",
    displayText: c(e),
    args: {
      language: c(e)
    },
    hideForQuickCommand: !0,
    flags: ["!desktop_os_menu"],
    get checked() {
      let t = i3();
      let i = void 0 !== t ? t : QC.HUNSPELL;
      let n = up(i);
      return UK().spellCheckPreference.getCopy() && Ev(n) === e;
    },
    callback: async () => {
      let t = await x5();
      let i = up(t);
      Up(i, e);
      await jI(e);
    }
  }));
}
export const A = $$u0;
export const x = $$c1;