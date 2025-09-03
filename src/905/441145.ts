export let observableState = (function () {
  let value: any = null
  let listeners = new Set<(value: any) => void>()

  return {
    get: () => value,
    set: (newValue: any) => {
      value = newValue
      listeners.forEach(listener => listener(value))
    },
    addListener: (listener: (value: any) => void) => {
      listeners.add(listener)
    },
    removeListener: (listener: (value: any) => void) => {
      listeners.delete(listener)
    },
  }
}())
export const Z = observableState
