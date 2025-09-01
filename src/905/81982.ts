import r from "../vendor/377996";
import { A } from "../vendor/292399";
import { Lg, QJ } from "../figma_app/257275";
let n;
var a = r;
let l = 0;
export class $$d2 {
  constructor(e, t = {}) {
    this.options = {
      ...t,
      includeScore: !1
    };
    this.sourceList = e;
    this.fuse = new (a())(e, this.options);
  }
  set(e) {
    this.fuse = new (a())(e, this.options);
    this.sourceList = e;
  }
  list() {
    return [...this.sourceList];
  }
  search(e) {
    return this.fuse.search(e.trim());
  }
}
export class $$c0 {
  constructor(e, t = {}) {
    this.options = t;
    this.sourceList = e;
    this.fuse = new A(e, t);
  }
  set(e) {
    this.fuse = new A(e, this.options);
    this.sourceList = e;
  }
  list() {
    return [...this.sourceList];
  }
  search(e) {
    return this.fuse.search(e.trim());
  }
}
export class $$u3 {
  constructor(e = {}) {
    this.fuse = null;
    this.libraryId = l++;
    this.options = {
      ...e,
      includeScore: !0
    };
    this.sourceList = [];
  }
  set(e) {
    let t = m();
    if (t) {
      let i = {
        type: "INIT",
        list: e,
        libraryId: this.libraryId,
        options: this.options
      };
      t.postMessage(i);
    } else this.fuse = new (a())(e, this.options);
    this.sourceList = e;
  }
  list() {
    return [...this.sourceList];
  }
  search(e) {
    let t = m();
    return (e = e.trim(), t) ? new Promise(i => {
      let n = f(i);
      let r = {
        type: "SEARCH",
        libraryId: this.libraryId,
        pattern: e,
        messageId: n
      };
      t.postMessage(r);
    }) : this.fuse ? Promise.resolve(this.fuse.search(e)) : Promise.resolve([]);
  }
}
export class $$p1 {
  constructor({
    exactMatch: e,
    ...t
  } = {}) {
    this.fuse = null;
    this.libraryId = l++;
    this.exactMatch = e ?? !1;
    this.options = {
      ...t,
      useExtendedSearch: this.exactMatch
    };
  }
  set(e) {
    let t = m();
    if (t) {
      let i = {
        type: "INIT",
        list: e,
        libraryId: this.libraryId,
        options: this.options,
        newFuse: !0
      };
      t.postMessage(i);
    } else this.fuse = new A(e, this.options);
  }
  search(e) {
    let t = m();
    return ("string" == typeof e && (e = this.exactMatch ? `'"${e.trim()}"` : e.trim()), t) ? new Promise(i => {
      let n = f(i);
      let r = {
        type: "SEARCH",
        libraryId: this.libraryId,
        pattern: e,
        messageId: n,
        newFuse: !0
      };
      t.postMessage(r);
    }) : this.fuse ? Promise.resolve(this.fuse.search(e)) : Promise.resolve([]);
  }
  add(e) {
    let t = m();
    if (t) {
      let i = {
        type: "ADD",
        doc: e,
        libraryId: this.libraryId
      };
      t.postMessage(i);
    } else this.fuse?.add(e);
  }
  remove(e, t) {
    let i = m();
    if (i) {
      let n = t[e];
      let r = {
        type: "REMOVE",
        key: e,
        id: n,
        libraryId: this.libraryId
      };
      i.postMessage(r);
    } else this.fuse?.remove(i => i[e] === t[e]);
  }
  updateEntries(e, t, i) {
    let n = m();
    if (n) {
      let r = {
        type: "UPDATE",
        removeKey: e,
        removeList: t,
        addList: i,
        libraryId: this.libraryId
      };
      n.postMessage(r);
    } else {
      for (let i of t) this.fuse?.remove(t => t[e] === i);
      for (let e of i) this.fuse?.add(e);
    }
  }
  logIndex() {
    let e = m();
    if (e) {
      let t = {
        type: "LOG",
        libraryId: this.libraryId
      };
      e.postMessage(t);
    }
  }
}
function m() {
  if (!(Lg() || QJ())) {
    n || ((n = new Worker(Fig.librarySearchWorkerURL)).onmessage = e => {
      if ("SEARCH_RESULTS" === e.data.type) {
        let t = e.data.messageId;
        let i = g[t];
        i && (i(e.data.results), delete g[t]);
      }
    });
    return n;
  }
}
let h = 0;
let g = {};
function f(e) {
  let t = h++;
  g[t] = e;
  return t;
}
export const Bg = $$c0;
export const CN = $$p1;
export const Ef = $$d2;
export const KH = $$u3;