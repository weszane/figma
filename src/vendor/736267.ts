import { $ } from "../vendor/349319";
import { B } from "../vendor/907558";
function s(e) {
  let r = "";
  let n = "";
  let i = "";
  let s = "";
  e.length > 5 ? (r = e.substring(1, 3), n = e.substring(3, 5), i = e.substring(5, 7), s = e.substring(7, 9)) : (r = e.substring(1, 2), n = e.substring(2, 3), i = e.substring(3, 4), s = e.substring(4, 5), r += r, n += n, i += i, s += s);
  return {
    red: parseInt(r, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
export let $$o0 = {
  test: $("#"),
  parse: s,
  transform: B.transform
};
export const u = $$o0;