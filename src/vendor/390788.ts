let e = 18 === new Uint8Array(new Uint32Array([0x12345678]).buffer)[0];
let r = (t, e, r) => {
  let n = t[e];
  t[e] = t[r];
  t[r] = n;
};
let n = t => {
  let e = t.length;
  for (let n = 0; n < e; n += 4) {
    r(t, n, n + 3);
    r(t, n + 1, n + 2);
  }
};
module.exports = {
  swap32LE: t => {
    e && n(t);
  }
};