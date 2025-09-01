let i;
let s = "?";
export function $$o0(e) {
  var r;
  var n;
  let i = [];
  let o = k(e, "stack");
  let a = String(e);
  if (o && o.startsWith(a) && (o = o.slice(a.length)), o && o.split("\n").forEach(e => {
    let r = g(e) || v(e) || b(e) || w(e);
    r && (!r.func && r.line && (r.func = s), i.push(r));
  }), i.length > 0 && C() && e instanceof Error) {
    let o = [];
    let a = e;
    for (; (a = Object.getPrototypeOf(a)) && A(a);) {
      let e = a.constructor?.name || s;
      o.push(e);
    }
    for (let e = o.length - 1; e >= 0 && i[0]?.func === o[e]; e--) i.shift();
  }
  return {
    message: k(e, "message"),
    name: k(e, "name"),
    stack: i
  };
}
let a = "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)";
let $$h = "(?::(\\d+))";
let d = RegExp(`^\\s*at (.*?) ?\\(${a}${$$h}?${$$h}?\\)?\\s*$`, "i");
let p = RegExp(`\\((\\S*)${$$h}${$$h}\\)`);
function g(e) {
  let r = d.exec(e);
  if (!r) return;
  let n = r[2] && 0 === r[2].indexOf("native");
  let i = r[2] && 0 === r[2].indexOf("eval");
  let o = p.exec(r[2]);
  i && o && (r[2] = o[1], r[3] = o[2], r[4] = o[3]);
  return {
    args: n ? [r[2]] : [],
    column: r[4] ? +r[4] : void 0,
    func: r[1] || s,
    line: r[3] ? +r[3] : void 0,
    url: n ? void 0 : r[2]
  };
}
let m = RegExp(`^\\s*at ?${a}${$$h}?${$$h}??\\s*$`, "i");
function v(e) {
  let r = m.exec(e);
  if (r) return {
    args: [],
    column: r[3] ? +r[3] : void 0,
    func: s,
    line: r[2] ? +r[2] : void 0,
    url: r[1]
  };
}
let y = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function b(e) {
  let r = y.exec(e);
  if (r) return {
    args: [],
    column: r[4] ? +r[4] : void 0,
    func: r[1] || s,
    line: +r[3],
    url: r[2]
  };
}
let O = /^\s*(.*?)(?:\((.*?)\))?(?:(?:(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle|\[wasm code\])(?::(\d+))?(?::(\d+))?)|@)\s*$/i;
let x = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function w(e) {
  let r = O.exec(e);
  if (!r) return;
  let n = r[3] && r[3].indexOf(" > eval") > -1;
  let i = x.exec(r[3]);
  n && i && (r[3] = i[1], r[4] = i[2], r[5] = void 0);
  return {
    args: r[2] ? r[2].split(",") : [],
    column: r[5] ? +r[5] : void 0,
    func: r[1] || s,
    line: r[4] ? +r[4] : void 0,
    url: r[3]
  };
}
function k(e, r) {
  if ("object" != typeof e || !e || !(r in e)) return;
  let n = e[r];
  return "string" == typeof n ? n : void 0;
}
export function $$_1(e, r, n, i) {
  if (void 0 === r) return;
  let {
    name,
    message
  } = E(e);
  return {
    name,
    message,
    stack: [{
      url: r,
      column: i,
      line: n
    }]
  };
}
let S = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
function E(e) {
  let r;
  let n;
  "[object String]" === {}.toString.call(e) && ([, r, n] = S.exec(e));
  return {
    name: r,
    message: n
  };
}
function A(e) {
  return String(e.constructor).startsWith("class ");
}
function C() {
  if (void 0 !== i) return i;
  class e extends Error {
    constructor() {
      super();
      this.name = "Error";
    }
  }
  let [r, n] = [e, Error].map(e => new e());
  return i = A(Object.getPrototypeOf(r)) && n.stack !== r.stack;
}
export const T = $$o0;
export const h = $$_1;