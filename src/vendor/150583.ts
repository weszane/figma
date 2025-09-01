import { T } from "../vendor/570893";
import { O, B } from "../vendor/240444";
let $$r0 = ["debug", "info", "warn", "error", "log", "assert", "trace"];
let $$a1 = {};
export function $$o2(e) {
  if (!("console" in O)) return e();
  let n = O.console;
  let i = {};
  let t = Object.keys($$a1);
  t.forEach(e => {
    let t = $$a1[e];
    i[e] = n[e];
    n[e] = t;
  });
  try {
    return e();
  } finally {
    t.forEach(e => {
      n[e] = i[e];
    });
  }
}
export let $$u3 = B("logger", function () {
  let e = !1;
  let n = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e
  };
  T ? $$r0.forEach(i => {
    n[i] = (...n) => {
      e && $$o2(() => {
        O.console[i](`Sentry Logger [${i}]:`, ...n);
      });
    };
  }) : $$r0.forEach(e => {
    n[e] = () => void 0;
  });
  return n;
});
export const Ow = $$r0;
export const Z9 = $$a1;
export const pq = $$o2;
export const vF = $$u3;