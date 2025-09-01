export class $$i1 {
  constructor(e) {
    this.onFirstSubscribe = e;
    this.observers = [];
  }
  subscribe(e) {
    this.observers.push(e);
    1 === this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0);
    return {
      unsubscribe: () => {
        this.observers = this.observers.filter(r => e !== r);
        !this.observers.length && this.onLastUnsubscribe && this.onLastUnsubscribe();
      }
    };
  }
  notify(e) {
    this.observers.forEach(r => r(e));
  }
}
export function $$s0(...e) {
  return new $$i1(r => {
    let n = e.map(e => e.subscribe(e => r.notify(e)));
    return () => n.forEach(e => e.unsubscribe());
  });
}
export const F = $$s0;
export const c = $$i1;