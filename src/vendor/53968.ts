let i = ["error", "warn", "log", "info"];
let n = "warn";
function s(t) {
  if (n && i.indexOf(t) <= i.indexOf(n)) {
    for (e = $$arguments.length, r = Array(e > 1 ? e - 1 : 0), s = 1, void 0; s < e; s++) {
      var e;
      var r;
      var s;
      r[s - 1] = $$arguments[s];
    }
    console[t](...r);
  }
}
function l(t) {
  return i.reduce((e, r) => (e[r] = s.bind(console, r, t), e), {});
}
l.level = t => {
  n = t;
};
s.level = l.level;
export let $$o0 = l;
export const A = $$o0;