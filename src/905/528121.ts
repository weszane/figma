import { languageCodes } from "../905/816253";
let $$r1 = e => {
  switch (e) {
    case languageCodes.EN:
      return "English";
    case languageCodes.JA:
      return "\u65E5\u672C\u8A9E";
    case languageCodes.FR:
      return "Fran\xe7ais";
    case languageCodes.DE:
      return "Deutsch";
    case languageCodes.ES_ES:
      return "Espa\xf1ol (Espa\xf1a)";
    case languageCodes.ES_LA:
      return "Espa\xf1ol (Latinoam\xe9rica)";
    case languageCodes.KO_KR:
      return "\uD55C\uAD6D\uC5B4";
    case languageCodes.PT_BR:
      return "Portugu\xeas (Brasil)";
    case languageCodes.NL_NL:
      return "Nederlands";
    case languageCodes.PL_PL:
      return "Polski";
    case languageCodes.IT_IT:
      return "Italiano";
    case languageCodes.AAA:
      return "AAA (Pseudolocale: Figma \u2192 AAA)";
    case languageCodes.AAL:
      return "AAL (Pseudolocale: Figma \u2192 [~~\u1E1E\u012F\u012F\u011F\u1E43\u0105\u0105~~])";
    case languageCodes.DU_PS:
      return "Dummy (Partially Supported)";
    case languageCodes.DU_DS:
      return "Dummy (Developing Support)";
  }
};
let $$a0 = e => {
  switch (e) {
    case languageCodes.FR:
      return "i18n_fr";
    case languageCodes.DE:
      return "i18n_de";
    case languageCodes.NL_NL:
    case languageCodes.PL_PL:
    case languageCodes.IT_IT:
    case languageCodes.DU_PS:
      return;
    case languageCodes.DU_DS:
      return "i18n_du_ds";
  }
};
let $$s2 = {
  "es-la": "/es-la/comunidad",
  en: "/community",
  ja: "/ja-jp/community",
  "es-es": "/es-es/comunidad",
  "ko-kr": "/ko-kr/community",
  "pt-br": "/pt-br/comunidade"
};
export const Pu = $$a0;
export const Xo = $$r1;
export const jt = $$s2;