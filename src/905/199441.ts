export function $$n0(e) {
  let t = e;
  let i = [];
  return {
    set: e => {
      t = e;
      i.forEach(e => {
        e(t);
      });
    },
    get: () => t,
    subscribe: e => i.push(e),
    unsubscribe: e => {
      i = i.filter(t => t !== e);
    }
  };
}
export const _ = $$n0;