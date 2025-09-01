export class $$n0 {
  listeners = new Set();
  addListener(e) {
    this.listeners.add(e);
  }
  removeListener(e) {
    this.listeners.$$delete(e);
  }
  emit(e) {
    this.listeners.forEach(t => {
      try {
        t(e);
      } catch (e) {
        console.error(e);
      }
    });
  }
}
export const b = $$n0;