export const A = function e(t) {
  if (null === t) return t;
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof Uint8Array) return new Uint8Array(t);
  if (t instanceof Array) {
    let i = [];
    t.forEach(e => {
      i.push(e);
    });
    return i.map(t => e(t));
  }
  if ("object" == typeof t) {
    let i = {
      ...t
    };
    Object.keys(i).forEach(t => {
      i[t] = e(i[t]);
    });
    return i;
  }
  return t;
};