import { useDebouncedCallback } from "use-debounce";
export function $$s0(e, r, n) {
  var s = void 0 === n ? {} : n;
  var o = s.leading;
  var a = void 0 === o || o;
  var h = s.trailing;
  var d = void 0 === h || h;
  return useDebouncedCallback(e, r, {
    maxWait: r,
    leading: a,
    trailing: d
  });
}
export const A = $$s0;
