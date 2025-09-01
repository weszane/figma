export class $$i0 {
  constructor() {
    this.listeners = [];
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    this.listeners.push(e);
    this.onSubscribe();
    return () => {
      this.listeners = this.listeners.filter(r => r !== e);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
export const Q = $$i0;