export let $$n0 = {
  codePointToLowerCase: e => e > 65535 ? e : String.fromCharCode(e).toLowerCase().charCodeAt(0),
  codePointToUpperCase: e => e > 65535 ? e : String.fromCharCode(e).toUpperCase().charCodeAt(0),
  stringToLowerCase: e => e.toLowerCase(),
  stringToUpperCase: e => e.toUpperCase(),
  setLocalStorage(e, t) {
    try {
      window.localStorage[e] = t;
    } catch (e) {}
  },
  getLocalStorage(e) {
    try {
      return window.localStorage[e];
    } catch (e) {
      return null;
    }
  },
  hasLocalStorage(e) {
    try {
      return e in window.localStorage;
    } catch (e) {
      return !1;
    }
  },
  clearLocalStorage(e) {
    try {
      window.localStorage.removeItem(e);
    } catch (e) {}
  },
  regexNew: e => new RegExp(e),
  regexSearch(e, t) {
    let i = e.exec(t);
    if (!i) return null;
    let n = i.shift();
    return {
      index: new TextEncoder().encode(t.slice(0, i.index)).length,
      match: n,
      subgroups: i
    };
  },
  regexFindAll(e, t) {
    let i;
    let n = RegExp(e.source, "g");
    let r = [];
    for (; i = n.exec(t);) r.push(i[0]);
    return r;
  },
  regexSplit: (e, t) => t.split(e),
  regexMatch: (e, t) => e.test(t),
  regexReplaceAll(e, t, i) {
    let n = RegExp(e.source, "g");
    return t.replace(n, i);
  },
  regexRemoveSpaces: e => e.replace(/\s+/g, "")
};
export const x = $$n0;