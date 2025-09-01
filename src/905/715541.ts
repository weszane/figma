import _require from "../vendor/112457";
import { LR, iW } from "../905/461516";
import { B } from "../905/627729";
let n;
let r;
var o = (e => (e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.LOADING = 1] = "LOADING", e[e.FINISHED = 2] = "FINISHED", e))(o || {});
let l = 0;
async function d(e) {
  1 === l ? await LR(() => 2 !== l, 50) : (n || (l = 1, n = e || (await _require).loadModule), l = 2);
  return n;
}
async function c(e, t) {
  let i = await fetch(t);
  let n = new Uint8Array(await i.arrayBuffer());
  let r = t.split("/");
  return e.mountBuffer(n, r[r.length - 1]);
}
async function u(e, t, i) {
  let n = await e();
  let [r, a] = await Promise.all([c(n, t), c(n, i)]);
  return n.create(r, a);
}
async function p(e, t) {
  let i = iW(t);
  return await u(e, i.affURL, i.dicURL);
}
let m = null;
let h = null;
let g = !1;
async function f(e) {
  if (await LR(() => !!g && (!g || null === m) || (g = !0, !1)), h !== e && _(), null === m) {
    let t = await d();
    m = await p(t, e);
    h = e;
  }
  return m;
}
function _() {
  m?.dispose();
  m = null;
  h = null;
  g = !1;
}
async function A(e, t) {
  let i = await f(e);
  for (let e of t) i?.addWord(e);
}
async function y(e, t) {
  let i = await f(t);
  let n = B(e);
  let r = [];
  for (let e of n) !i || e.skipSpellCheck || i.spell(e.text) || r.push({
    start: e.index,
    end: e.index + e.text.length
  });
  return r;
}
async function b(e, t) {
  let i = await f(t);
  return i?.suggest(e) || [];
}
async function v(e, t) {
  let i = await f(t);
  for (let t of e) i?.addWord(t);
}
export function $$I1() {
  r || ((r = new Worker(Fig.spellCheckWorkerURL)).onmessage = e => {
    if ("SPELL_CHECK_RESULT" === e.data.type) {
      let t = e.data.messageId;
      let i = x[t];
      i && (i(e.data.results), delete x[t]);
    }
  });
  return r;
}
let E = 0;
let x = {};
function S(e, t) {
  return new Promise(i => {
    let n = function (e) {
      let t = E++;
      x[t] = e;
      return t;
    }(i);
    e.postMessage({
      ...t,
      messageId: n
    });
  });
}
export class $$w0 {
  constructor() {
    this.name = "Hunspell";
    this.language = "";
  }
  async initialize(e, t) {
    this.language = e;
    let i = await $$I1();
    i ? await S(i, {
      type: "INIT",
      userIgnoreWords: t,
      language: e
    }) : await A(e, t);
  }
  async getSuggestionsForWord(e) {
    let t = await $$I1();
    return t ? await S(t, {
      type: "GET_SUGGESTIONS",
      word: e,
      language: this.language
    }) : await b(e, this.language);
  }
  async spellCheckText(e) {
    let t = await $$I1();
    return t ? await S(t, {
      type: "CHECK_SPELLING",
      text: e,
      language: this.language
    }) : await y(e, this.language);
  }
  async setLanguage(e) {
    this.language = e;
    let t = await $$I1();
    t ? await S(t, {
      type: "SET_LANGUAGE",
      language: e
    }) : (_(), f(e));
    return Promise.resolve(!0);
  }
  async addWords(e) {
    let t = await $$I1();
    t ? await S(t, {
      type: "ADD_WORDS",
      words: e,
      language: this.language
    }) : await v(e, this.language);
  }
}
export const mz = $$w0;
export const jk = $$I1;