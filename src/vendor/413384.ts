import { Q } from '../vendor/166452'
import { f8 } from '../vendor/348210'
import { $ } from '../vendor/405198'
import { j } from '../vendor/637177'

export class MutationObserver extends Q {
  constructor(e, r) {
    super()
    this.client = e
    this.setOptions(r)
    this.bindMethods()
    this.updateResult()
  }

  bindMethods() {
    this.mutate = this.mutate.bind(this)
    this.reset = this.reset.bind(this)
  }

  setOptions(e) {
    let r = this.options
    this.options = this.client.defaultMutationOptions(e)
    f8(r, this.options) || this.client.getMutationCache().notify({
      type: 'observerOptionsUpdated',
      mutation: this.currentMutation,
      observer: this,
    })
  }

  onUnsubscribe() {
    if (!this.listeners.length) {
      let e
      (e = this.currentMutation) == null || e.removeObserver(this)
    }
  }

  onMutationUpdate(e) {
    this.updateResult()
    let r = {
      listeners: !0,
    }
    e.type === 'success' ? r.onSuccess = !0 : e.type === 'error' && (r.onError = !0)
    this.notify(r)
  }

  getCurrentResult() {
    return this.currentResult
  }

  reset() {
    this.currentMutation = void 0
    this.updateResult()
    this.notify({
      listeners: !0,
    })
  }

  mutate(e, r) {
    this.mutateOptions = r
    this.currentMutation && this.currentMutation.removeObserver(this)
    this.currentMutation = this.client.getMutationCache().build(this.client, {
      ...this.options,
      variables: void 0 !== e ? e : this.options.variables,
    })
    this.currentMutation.addObserver(this)
    return this.currentMutation.execute()
  }

  updateResult() {
    let e = this.currentMutation ? this.currentMutation.state : $()
    let r = {
      ...e,
      isLoading: e.status === 'loading',
      isSuccess: e.status === 'success',
      isError: e.status === 'error',
      isIdle: e.status === 'idle',
      mutate: this.mutate,
      reset: this.reset,
    }
    this.currentResult = r
  }

  notify(e) {
    j.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        let r
        let n
        let i
        let s
        let o
        let a
        let h
        let d
        e.onSuccess ? ((r = (n = this.mutateOptions).onSuccess) == null || r.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), (i = (s = this.mutateOptions).onSettled) == null || i.call(s, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && ((o = (a = this.mutateOptions).onError) == null || o.call(a, this.currentResult.error, this.currentResult.variables, this.currentResult.context), (h = (d = this.mutateOptions).onSettled) == null || h.call(d, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
      }
      e.listeners && this.listeners.forEach((e) => {
        e(this.currentResult)
      })
    })
  }
}
export const _ = MutationObserver
