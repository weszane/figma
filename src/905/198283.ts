import { debounce } from "../905/915765";
let r = Symbol("unset");
export function $$a0(e, t, i = 200, s = !1) {
  let o = r;
  let l = debounce(() => {
    o !== r && (e(o), o = r);
  }, i, s);
  let d = function (e) {
    o = o === r ? e : t(o, e);
    l();
  };
  d.cancel = () => {
    l.cancel();
    o = r;
  };
  d.flush = () => {
    l.flush();
    o = r;
  };
  return d;
}
export const e = $$a0;