let $$n4 = "auto";
let $$r2 = "https://figma.com/figma-spell-check-dictionaries/brand-words_9ee8fe6ad8a6c77912d1a4a3b425ea24.txt.gz";
let $$a3 = {
  "en-US": {
    dicURL: "https://figma.com/figma-spell-check-dictionaries/en_US_87b793e804079be9980473b9e9f4e75b.dic.gz",
    affURL: "https://figma.com/figma-spell-check-dictionaries/en_US_eaae9bae63b305440b412a48e1653a26.aff.gz"
  },
  "en-GB": {
    dicURL: "https://figma.com/figma-spell-check-dictionaries/en_GB_729537dc2b007c0e2b4fb1804516d703.dic.gz",
    affURL: "https://figma.com/figma-spell-check-dictionaries/en_GB_e8f2d38522a8a4ccf48dc814b4926a77.aff.gz"
  },
  "en-CA": {
    dicURL: "https://figma.com/figma-spell-check-dictionaries/en_CA_4c0d7bf95c46a2dfb12c10e48d2177c2.dic.gz",
    affURL: "https://figma.com/figma-spell-check-dictionaries/en_CA_eaae9bae63b305440b412a48e1653a26.aff.gz"
  },
  ru: {
    dicURL: "https://figma.com/figma-spell-check-dictionaries/ru_RU_4a8ee657162e6bde9ce7cbd8b4245459.dic.gz",
    affURL: "https://figma.com/figma-spell-check-dictionaries/ru_RU_f6c36a57e345fcdf76f8dccf598434c2.aff.gz"
  }
};
export function $$s5(e) {
  return Object.keys($$a3).includes(e) ? $$a3[e] : $$a3[0];
}
async function o(e) {
  await new Promise(t => setTimeout(t, e));
}
export async function $$l0(e, t = 500, i = 5e3) {
  let n = performance.now();
  for (; e();) if (await o(t), performance.now() - n >= i) throw Error("max sleep time reached");
}
export var $$d1 = (e => (e[e.DESKTOP = 0] = "DESKTOP", e[e.AGENT = 1] = "AGENT", e[e.HUNSPELL = 2] = "HUNSPELL", e))($$d1 || {});
export const LR = $$l0;
export const QC = $$d1;
export const SB = $$r2;
export const fi = $$a3;
export const hz = $$n4;
export const iW = $$s5;