import { A as _$$A } from "../vendor/842922";
import { A as _$$A2 } from "../vendor/463450";
import { A as _$$A3 } from "../vendor/728272";
var n = Object.create;
var s = function () {
  function t() {}
  return function (e) {
    if (!_$$A(e)) return {};
    if (n) return n(e);
    t.prototype = e;
    var r = new t();
    t.prototype = void 0;
    return r;
  };
}();
export let $$a0 = function (t) {
  return "function" != typeof t.constructor || _$$A3(t) ? {} : s(_$$A2(t));
};
export const A = $$a0;