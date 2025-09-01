let i;
let s = e => {
  let r = [];
  for (let n = 0; n < e.length - 1; n++) {
    let i = e[n];
    let s = e[n + 1];
    void 0 === i && void 0 === s ? r.push(void 0) : void 0 !== i && void 0 !== s ? r.push([i, s]) : r.push(void 0 !== i ? [i, i] : [s, s]);
  }
  return r;
};
i = (e, r, n) => e + n * (r - e);
let $$o0 = e => {
  let r = s(e);
  return e => {
    let n = e * r.length;
    let s = e >= 1 ? r.length - 1 : Math.max(Math.floor(n), 0);
    let o = r[s];
    return void 0 === o ? void 0 : i(o[0], o[1], n - s);
  };
};
export const x = $$o0;