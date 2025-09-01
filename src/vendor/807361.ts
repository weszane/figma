import { A as _$$A } from "../vendor/471459";
import { A as _$$A2 } from "../vendor/842922";
export let $$s0 = function (t) {
  if (!_$$A2(t)) return !1;
  var e = _$$A(t);
  return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
};
export const A = $$s0;