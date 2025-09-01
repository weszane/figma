import { p as _$$p } from "../vendor/378995";
import { gX } from "../vendor/630853";
import { yP, gw, tR } from "../vendor/857147";
import { tB, Xj } from "../vendor/969425";
import { B } from "../vendor/731692";
import { J } from "../vendor/944490";
import { useState } from "react";
var u = {};
u = {
  "ar-AE": {
    rangeOverflow: e => `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
    rangeReversed: `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621} \u{64A}\u{62C}\u{628} \u{623}\u{646} \u{64A}\u{643}\u{648}\u{646} \u{642}\u{628}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}.`,
    rangeUnderflow: e => `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
    unavailableDate: `\u{627}\u{644}\u{628}\u{64A}\u{627}\u{646}\u{627}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}\u{629} \u{63A}\u{64A}\u{631} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`
  },
  "bg-BG": {
    rangeOverflow: e => `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
    rangeReversed: `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} \u{43F}\u{440}\u{435}\u{434}\u{438} \u{43A}\u{440}\u{430}\u{439}\u{43D}\u{430}\u{442}\u{430}.`,
    rangeUnderflow: e => `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
    unavailableDate: `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435} \u{435} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430}.`
  },
  "cs-CZ": {
    rangeOverflow: e => `Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
    rangeReversed: `Datum zah\xe1jen\xed mus\xed p\u{159}edch\xe1zet datu ukon\u{10D}en\xed.`,
    rangeUnderflow: e => `Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
    unavailableDate: `Vybran\xe9 datum nen\xed k dispozici.`
  },
  "da-DK": {
    rangeOverflow: e => `V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,
    rangeReversed: `Startdatoen skal v\xe6re f\xf8r slutdatoen.`,
    rangeUnderflow: e => `V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,
    unavailableDate: `Den valgte dato er ikke tilg\xe6ngelig.`
  },
  "de-DE": {
    rangeOverflow: e => `Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,
    rangeReversed: "Das Startdatum muss vor dem Enddatum liegen.",
    rangeUnderflow: e => `Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,
    unavailableDate: `Das ausgew\xe4hlte Datum ist nicht verf\xfcgbar.`
  },
  "el-GR": {
    rangeOverflow: e => `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
    rangeReversed: `\u{397} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3C0}\u{3C1}\u{3B9}\u{3BD} \u{3B1}\u{3C0}\u{3CC} \u{3C4}\u{3B7}\u{3BD} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}.`,
    rangeUnderflow: e => `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
    unavailableDate: `\u{397} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3B4}\u{3B5}\u{3BD} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7}.`
  },
  "en-US": {
    rangeUnderflow: e => `Value must be ${e.minValue} or later.`,
    rangeOverflow: e => `Value must be ${e.maxValue} or earlier.`,
    rangeReversed: "Start date must be before end date.",
    unavailableDate: "Selected date unavailable."
  },
  "es-ES": {
    rangeOverflow: e => `El valor debe ser ${e.maxValue} o anterior.`,
    rangeReversed: `La fecha de inicio debe ser anterior a la fecha de finalizaci\xf3n.`,
    rangeUnderflow: e => `El valor debe ser ${e.minValue} o posterior.`,
    unavailableDate: "Fecha seleccionada no disponible."
  },
  "et-EE": {
    rangeOverflow: e => `V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,
    rangeReversed: `Alguskuup\xe4ev peab olema enne l\xf5ppkuup\xe4eva.`,
    rangeUnderflow: e => `V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,
    unavailableDate: `Valitud kuup\xe4ev pole saadaval.`
  },
  "fi-FI": {
    rangeOverflow: e => `Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,
    rangeReversed: `Aloitusp\xe4iv\xe4n on oltava ennen lopetusp\xe4iv\xe4\xe4.`,
    rangeUnderflow: e => `Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
    unavailableDate: `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4 ei ole k\xe4ytett\xe4viss\xe4.`
  },
  "fr-FR": {
    rangeOverflow: e => `La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,
    rangeReversed: `La date de d\xe9but doit \xeatre ant\xe9rieure \xe0 la date de fin.`,
    rangeUnderflow: e => `La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,
    unavailableDate: `La date s\xe9lectionn\xe9e n\u{2019}est pas disponible.`
  },
  "he-IL": {
    rangeOverflow: e => `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
    rangeReversed: `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} \u{5DC}\u{5E4}\u{5E0}\u{5D9} \u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E1}\u{5D9}\u{5D5}\u{5DD}.`,
    rangeUnderflow: e => `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
    unavailableDate: `\u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E0}\u{5D1}\u{5D7}\u{5E8} \u{5D0}\u{5D9}\u{5E0}\u{5D5} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`
  },
  "hr-HR": {
    rangeOverflow: e => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
    rangeReversed: `Datum po\u{10D}etka mora biti prije datuma zavr\u{161}etka.`,
    rangeUnderflow: e => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
    unavailableDate: "Odabrani datum nije dostupan."
  },
  "hu-HU": {
    rangeOverflow: e => `Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,
    rangeReversed: `A kezd\u{151} d\xe1tumnak a befejez\u{151} d\xe1tumn\xe1l kor\xe1bbinak kell lennie.`,
    rangeUnderflow: e => `Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
    unavailableDate: `A kiv\xe1lasztott d\xe1tum nem \xe9rhet\u{151} el.`
  },
  "it-IT": {
    rangeOverflow: e => `Il valore deve essere ${e.maxValue} o precedente.`,
    rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
    rangeUnderflow: e => `Il valore deve essere ${e.minValue} o successivo.`,
    unavailableDate: "Data selezionata non disponibile."
  },
  "ja-JP": {
    rangeOverflow: e => `\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    rangeReversed: `\u{958B}\u{59CB}\u{65E5}\u{306F}\u{7D42}\u{4E86}\u{65E5}\u{3088}\u{308A}\u{524D}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    rangeUnderflow: e => `\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    unavailableDate: `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8}\u{306F}\u{4F7F}\u{7528}\u{3067}\u{304D}\u{307E}\u{305B}\u{3093}\u{3002}`
  },
  "ko-KR": {
    rangeOverflow: e => `\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    rangeReversed: `\u{C2DC}\u{C791}\u{C77C}\u{C740} \u{C885}\u{B8CC}\u{C77C} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    rangeUnderflow: e => `\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{C0C1}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    unavailableDate: `\u{C120}\u{D0DD}\u{D55C} \u{B0A0}\u{C9DC}\u{B97C} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}.`
  },
  "lt-LT": {
    rangeOverflow: e => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,
    rangeReversed: `Prad\u{17E}ios data turi b\u{16B}ti ankstesn\u{117} nei pabaigos data.`,
    rangeUnderflow: e => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,
    unavailableDate: "Pasirinkta data nepasiekiama."
  },
  "lv-LV": {
    rangeOverflow: e => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,
    rangeReversed: `S\u{101}kuma datumam ir j\u{101}b\u{16B}t pirms beigu datuma.`,
    rangeUnderflow: e => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,
    unavailableDate: `Atlas\u{12B}tais datums nav pieejams.`
  },
  "nb-NO": {
    rangeOverflow: e => `Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,
    rangeReversed: `Startdatoen m\xe5 v\xe6re f\xf8r sluttdatoen.`,
    rangeUnderflow: e => `Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,
    unavailableDate: "Valgt dato utilgjengelig."
  },
  "nl-NL": {
    rangeOverflow: e => `Waarde moet ${e.maxValue} of eerder zijn.`,
    rangeReversed: "De startdatum moet voor de einddatum liggen.",
    rangeUnderflow: e => `Waarde moet ${e.minValue} of later zijn.`,
    unavailableDate: "Geselecteerde datum niet beschikbaar."
  },
  "pl-PL": {
    rangeOverflow: e => `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
    rangeReversed: `Data rozpocz\u{119}cia musi by\u{107} wcze\u{15B}niejsza ni\u{17C} data zako\u{144}czenia.`,
    rangeUnderflow: e => `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
    unavailableDate: `Wybrana data jest niedost\u{119}pna.`
  },
  "pt-BR": {
    rangeOverflow: e => `O valor deve ser ${e.maxValue} ou anterior.`,
    rangeReversed: `A data inicial deve ser anterior \xe0 data final.`,
    rangeUnderflow: e => `O valor deve ser ${e.minValue} ou posterior.`,
    unavailableDate: `Data selecionada indispon\xedvel.`
  },
  "pt-PT": {
    rangeOverflow: e => `O valor tem de ser ${e.maxValue} ou anterior.`,
    rangeReversed: `A data de in\xedcio deve ser anterior \xe0 data de fim.`,
    rangeUnderflow: e => `O valor tem de ser ${e.minValue} ou posterior.`,
    unavailableDate: `Data selecionada indispon\xedvel.`
  },
  "ro-RO": {
    rangeOverflow: e => `Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,
    rangeReversed: `Data de \xeenceput trebuie s\u{103} fie anterioar\u{103} datei de sf\xe2r\u{219}it.`,
    rangeUnderflow: e => `Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,
    unavailableDate: `Data selectat\u{103} nu este disponibil\u{103}.`
  },
  "ru-RU": {
    rangeOverflow: e => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,
    rangeReversed: `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{430} \u{43F}\u{440}\u{435}\u{434}\u{448}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{434}\u{430}\u{442}\u{435} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}.`,
    rangeUnderflow: e => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,
    unavailableDate: `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`
  },
  "sk-SK": {
    rangeOverflow: e => `Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,
    rangeReversed: `D\xe1tum za\u{10D}iatku mus\xed by\u{165} skor\u{161}\xed ako d\xe1tum konca.`,
    rangeUnderflow: e => `Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,
    unavailableDate: `Vybrat\xfd d\xe1tum je nedostupn\xfd.`
  },
  "sl-SI": {
    rangeOverflow: e => `Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,
    rangeReversed: `Za\u{10D}etni datum mora biti pred kon\u{10D}nim datumom.`,
    rangeUnderflow: e => `Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,
    unavailableDate: "Izbrani datum ni na voljo."
  },
  "sr-SP": {
    rangeOverflow: e => `Vrednost mora da bude ${e.maxValue} ili starija.`,
    rangeReversed: `Datum po\u{10D}etka mora biti pre datuma zavr\u{161}etka.`,
    rangeUnderflow: e => `Vrednost mora da bude ${e.minValue} ili novija.`,
    unavailableDate: "Izabrani datum nije dostupan."
  },
  "sv-SE": {
    rangeOverflow: e => `V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,
    rangeReversed: `Startdatumet m\xe5ste vara f\xf6re slutdatumet.`,
    rangeUnderflow: e => `V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,
    unavailableDate: `Det valda datumet \xe4r inte tillg\xe4ngligt.`
  },
  "tr-TR": {
    rangeOverflow: e => `De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
    rangeReversed: `Ba\u{15F}lang\u{131}\xe7 tarihi biti\u{15F} tarihinden \xf6nce olmal\u{131}d\u{131}r.`,
    rangeUnderflow: e => `De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
    unavailableDate: `Se\xe7ilen tarih kullan\u{131}lam\u{131}yor.`
  },
  "uk-UA": {
    rangeOverflow: e => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,
    rangeReversed: `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443} \u{43C}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{434}\u{443}\u{432}\u{430}\u{442}\u{438} \u{434}\u{430}\u{442}\u{456} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}.`,
    rangeUnderflow: e => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,
    unavailableDate: `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`
  },
  "zh-CN": {
    rangeOverflow: e => `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
    rangeReversed: `\u{5F00}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{987B}\u{65E9}\u{4E8E}\u{7ED3}\u{675F}\u{65E5}\u{671F}\u{3002}`,
    rangeUnderflow: e => `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
    unavailableDate: `\u{6240}\u{9009}\u{65E5}\u{671F}\u{4E0D}\u{53EF}\u{7528}\u{3002}`
  },
  "zh-TW": {
    rangeOverflow: e => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
    rangeReversed: `\u{958B}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{9808}\u{5728}\u{7D50}\u{675F}\u{65E5}\u{671F}\u{4E4B}\u{524D}\u{3002}`,
    rangeUnderflow: e => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
    unavailableDate: `\u{6240}\u{9078}\u{65E5}\u{671F}\u{7121}\u{6CD5}\u{4F7F}\u{7528}\u{3002}`
  }
};
let c = new B(function (e) {
  return e && e.__esModule ? e.$$default : e;
}(u));
export function $$m4(e, t, a, u, r) {
  let i = null != e && null != a && e.compare(a) > 0;
  let o = null != e && null != t && 0 > e.compare(t);
  let d = null != e && u?.(e) || !1;
  let m = i || o || d;
  let h = [];
  if (m) {
    let e = "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
    let u = (0, B).getGlobalDictionaryForPackage("@react-stately/datepicker") || c;
    let m = new J(e, u);
    let D = new _$$p(e, $$f2({}, r));
    let p = D.resolvedOptions().timeZone;
    o && null != t && h.push(m.format("rangeUnderflow", {
      minValue: D.format(t.toDate(p))
    }));
    i && null != a && h.push(m.format("rangeOverflow", {
      maxValue: D.format(a.toDate(p))
    }));
    d && h.push(m.format("unavailableDate"));
  }
  return {
    isInvalid: m,
    validationErrors: h,
    validationDetails: {
      badInput: d,
      customError: !1,
      patternMismatch: !1,
      rangeOverflow: i,
      rangeUnderflow: o,
      stepMismatch: !1,
      tooLong: !1,
      tooShort: !1,
      typeMismatch: !1,
      valueMissing: !1,
      valid: !m
    }
  };
}
let h = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
};
let D = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
export function $$f2(e, t) {
  var a;
  e = {
    ...(t.shouldForceLeadingZeros ? D : h),
    ...e
  };
  let u = t.granularity || "minute";
  let n = Object.keys(e);
  let r = n.indexOf(null !== (a = t.maxGranularity) && void 0 !== a ? a : "year");
  r < 0 && (r = 0);
  let i = n.indexOf(u);
  if (i < 0 && (i = 2), r > i) throw Error("maxGranularity must be greater than granularity");
  let o = n.slice(r, i + 1).reduce((t, a) => (t[a] = e[a], t), {});
  null != t.hourCycle && (o.hour12 = 12 === t.hourCycle);
  o.timeZone = t.timeZone || "UTC";
  ("hour" === u || "minute" === u || "second" === u) && t.timeZone && !t.hideTimeZone && (o.timeZoneName = "short");
  t.showEra && 0 === r && (o.era = "short");
  return o;
}
export function $$p3(e) {
  return e && "hour" in e ? e : new gX();
}
export function $$y0(e, t) {
  return null === e ? null : e ? yP(e, t) : void 0;
}
export function $$g1(e, t, a, u) {
  if (e) return $$y0(e, a);
  let n = yP(tB(null != u ? u : Xj()).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), a);
  return "year" === t || "month" === t || "day" === t ? gw(n) : u ? n : tR(n);
}
export function $$v5(e, t) {
  let a = e && "timeZone" in e ? e.timeZone : void 0;
  let u = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
  let [n, r] = useState([u, a]);
  e && (n[0] !== u || n[1] !== a) && r([u, a]);
  t || (t = e ? u : n[0]);
  return [t, e ? a : n[1]];
}
export const nf = $$y0;
export const o_ = $$g1;
export const id = $$f2;
export const $l = $$p3;
export const nz = $$m4;
export const bf = $$v5;