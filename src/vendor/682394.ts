import { A as _$$A } from "../vendor/686439";
import { A as _$$A2 } from "../vendor/615247";
export let $$o0 = function (e, r, n) {
  var o = (e = e || {}).random || (e.rng || _$$A)();
  if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, r) {
    n = n || 0;
    for (var a = 0; a < 16; ++a) r[n + a] = o[a];
    return r;
  }
  return _$$A2(o);
};
export const A = $$o0;
