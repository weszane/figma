import { A as _$$A } from "../vendor/820528";
import { A as _$$A2 } from "../vendor/446003";
export let $$s0 = function (t, e, r, s) {
  var l = !r;
  r || (r = {});
  for (o = -1, a = e.length, void 0; ++o < a;) {
    var o;
    var a;
    var c = e[o];
    var u = s ? s(r[c], t[c], c, r, t) : void 0;
    void 0 === u && (u = t[c]);
    l ? _$$A2(r, c, u) : _$$A(r, c, u);
  }
  return r;
};
export const A = $$s0;