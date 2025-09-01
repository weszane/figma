class n {
  constructor(e) {
    this._resolve = () => {};
    this._reject = () => {};
    this.requestId = e;
    this.promise = new Promise((e, t) => {
      this._resolve = e;
      this._reject = t;
    });
  }
  getRequestId() {
    return this.requestId;
  }
  getPromise() {
    return this.promise;
  }
  resolve(e) {
    this._resolve(e);
  }
  reject(e) {
    this._reject(e);
  }
  cancel() {
    null !== a && a.cancelThumbnailRequest(this.requestId);
  }
}
class r {
  constructor() {
    this.nextRequestId = 0;
    this.requestMap = new Map();
  }
  resolveThumbnailRequest(e, t) {
    if (0 !== e && this.requestMap.has(e)) {
      let i = this.requestMap.get(e);
      this.requestMap.$$delete(e);
      i?.resolve(t);
    }
  }
  rejectThumbnailRequest(e, t) {
    if (e && this.requestMap.has(e)) {
      let i = this.requestMap.get(e);
      this.requestMap.$$delete(e);
      i?.reject(t);
    }
  }
  cancelThumbnailRequest(e) {
    if (e && this.requestMap.has(e)) {
      let t = this.requestMap.get(e);
      this.requestMap.$$delete(e);
      t?.reject("canceled");
    }
  }
  createRequest() {
    let e = ++this.nextRequestId;
    let t = new n(e);
    this.requestMap.set(e, t);
    return t;
  }
}
let a = null;
export function $$s0() {
  null === a && (a = new r());
  return a;
}
export const Db = $$s0;