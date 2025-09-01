import { rO, vH } from "../905/535224";
import { r as _$$r, l } from "../905/927060";
export async function $$a0() {
  try {
    let {
      data
    } = await rO("/spelling/get-languages");
    if (Array.isArray(data.result)) return data.result;
  } catch (e) {}
  return [];
}
async function s(e, t) {
  0 !== e.length && (await vH("/spelling/ignore-words", {
    words: e,
    language: t
  }, "application/json"));
}
async function o() {
  try {
    let {
      data
    } = await rO("/spelling/get-languages");
    if (Array.isArray(data.result)) return !0;
  } catch (e) {}
  return !1;
}
export async function $$l2() {
  return !!(await o());
}
export class $$d1 {
  constructor() {
    this.name = "agent";
    this.language = "";
  }
  async initialize(e, t) {
    this.setLanguage(e);
    return await s(t, this.language);
  }
  async spellCheckText(e) {
    let {
      data
    } = await vH("/spelling/check", {
      text: e,
      language: this.language
    }, "application/json");
    return Array.isArray(data.result) ? _$$r(e, data.result) : [];
  }
  async getSuggestionsForWord(e) {
    let {
      data
    } = await vH("/spelling/suggest", {
      text: e,
      language: this.language
    }, "application/json");
    return !!Array.isArray(data.result) && data.result;
  }
  async setLanguage(e) {
    this.language = l(e);
    return !0;
  }
  async addWords(e) {
    return await s(e, this.language);
  }
}
export const Rq = $$a0;
export const UV = $$d1;
export const wp = $$l2;