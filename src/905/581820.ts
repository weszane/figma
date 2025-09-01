export const H = function e(t, i) {
  if (i instanceof Array) return i.reduce((t, i) => e(t, i), t);
  if ("UPDATE" !== i.type) throw Error(`Unexpected optimistic layer type ${i.type}`);
  return i.update(t);
};