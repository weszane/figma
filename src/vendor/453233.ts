export const h = function e(n, i, t = 2) {
  if (!i || "object" != typeof i || t <= 0) return i;
  if (n && i && 0 === Object.keys(i).length) return n;
  let f = {
    ...n
  };
  for (let n in i) Object.prototype.hasOwnProperty.call(i, n) && (f[n] = e(f[n], i[n], t - 1));
  return f;
};