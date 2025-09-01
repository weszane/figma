let n;
let r;
function a(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class s {
  bounds() {
    return n.bounds(this.handle);
  }
  getHash() {
    return n.getHash(this.handle);
  }
  isRect() {
    return n.isRect(this.handle);
  }
  loopBlinnCompile() {
    return n.loopBlinnCompile(this.handle);
  }
  constructor(e) {
    a(this, "handle", void 0);
    this.handle = e;
  }
}
class o extends s {
  constructor(e) {
    super(e);
    a(this, "handle", void 0);
    this.handle = e;
  }
}
export function $$l1(e) {
  n = e.UniquePath_Internal;
  globalThis.UniquePath = s;
  globalThis.MutableUniquePath = o;
  r = e.UniquePathHelpers;
}
export function $$d0() {
  return {
    uniquePathHelpers: r,
    uniquePath_Internal: n
  };
}
export const KO = $$d0;
export const LQ = $$l1;