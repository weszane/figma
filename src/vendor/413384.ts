import { $ } from "../vendor/405198";
import { j } from "../vendor/637177";
import { Q } from "../vendor/166452";
import { f8 } from "../vendor/348210";
export class $$h0 extends Q {
  constructor(e, r) {
    super();
    this.client = e;
    this.setOptions(r);
    this.bindMethods();
    this.updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    let r = this.options;
    this.options = this.client.defaultMutationOptions(e);
    f8(r, this.options) || this.client.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.currentMutation,
      observer: this
    });
  }
  onUnsubscribe() {
    if (!this.listeners.length) {
      var e;
      null == (e = this.currentMutation) || e.removeObserver(this);
    }
  }
  onMutationUpdate(e) {
    this.updateResult();
    let r = {
      listeners: !0
    };
    "success" === e.type ? r.onSuccess = !0 : "error" === e.type && (r.onError = !0);
    this.notify(r);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    this.currentMutation = void 0;
    this.updateResult();
    this.notify({
      listeners: !0
    });
  }
  mutate(e, r) {
    this.mutateOptions = r;
    this.currentMutation && this.currentMutation.removeObserver(this);
    this.currentMutation = this.client.getMutationCache().build(this.client, {
      ...this.options,
      variables: void 0 !== e ? e : this.options.variables
    });
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  }
  updateResult() {
    let e = this.currentMutation ? this.currentMutation.state : $();
    let r = {
      ...e,
      isLoading: "loading" === e.status,
      isSuccess: "success" === e.status,
      isError: "error" === e.status,
      isIdle: "idle" === e.status,
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = r;
  }
  notify(e) {
    j.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        var r;
        var n;
        var i;
        var s;
        var o;
        var a;
        var h;
        var d;
        e.onSuccess ? (null == (r = (n = this.mutateOptions).onSuccess) || r.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (i = (s = this.mutateOptions).onSettled) || i.call(s, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (o = (a = this.mutateOptions).onError) || o.call(a, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (h = (d = this.mutateOptions).onSettled) || h.call(d, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context));
      }
      e.listeners && this.listeners.forEach(e => {
        e(this.currentResult);
      });
    });
  }
}
export const _ = $$h0;