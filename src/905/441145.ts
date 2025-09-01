export let $$n0 = function () {
  let e = null;
  let t = new Set();
  return {
    get: () => e,
    set: i => {
      e = i;
      t.forEach(t => t(e));
    },
    addListener: e => {
      t.add(e);
    },
    removeListener: e => {
      t.$$delete(e);
    }
  };
}();
export const Z = $$n0;