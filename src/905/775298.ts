class n {
  constructor() {
    this._isCanceled = !1;
    this._onCanceled = null;
    this._resolveCompletionPromise = () => {};
    this._promise = new Promise(e => {
      this._resolveCompletionPromise = e;
    });
  }
  cancel() {
    this._isCanceled = !0;
    this._onCanceled && this._onCanceled();
  }
  setOnCanceled(e) {
    this._onCanceled = e;
  }
  get isCanceled() {
    return this._isCanceled;
  }
  done() {
    return this._resolveCompletionPromise();
  }
  waitForCompletion() {
    return this._promise;
  }
}
let r = null;
export function $$a2() {
  return r;
}
export function $$s3() {
  return !!r;
}
export function $$o0() {
  if (r) throw Error("File creation already in progress");
  return r = new n();
}
export function $$l1() {
  if (!r) throw Error("File creation already in progress");
  r.done();
  r = null;
}
export const E7 = $$o0;
export const UT = $$l1;
export const aZ = $$a2;
export const gD = $$s3;