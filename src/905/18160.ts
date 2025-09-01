export function $$n0() {
  return {
    errors: [],
    guard(e) {
      try {
        e();
      } catch (e) {
        this.errors.push(e);
      }
    },
    async guardAsync(e) {
      try {
        await e();
      } catch (e) {
        this.errors.push(e);
      }
    }
  };
}
export const m = $$n0;