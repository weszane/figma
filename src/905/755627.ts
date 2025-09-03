import { defaultLanguage } from "../905/816253";
import { throwTypeError } from "../figma_app/465776";
import { M7s } from "../figma_app/763686";
import { $$default } from "../vendor/73080";
import { x1 } from "../905/714362";
import { Kg } from "../905/71";
export let $$n1;
function c(e) {
  return !isNaN(e.getTime());
}
class u {
  renderPlaceholder(e, t, i) {
    return function (e, t, i) {
      var n;
      var u;
      var p;
      let m = (n = e) === M7s.DATE ? "date" : n === M7s.TIME ? "time" : n === M7s.NUMBER ? "number" : n === M7s.TEXT ? "text" : void throwTypeError(n);
      if ("text" === m) return i;
      let h = defaultLanguage;
      let g = `{parsedPlaceholder, ${m}, ${t}}`;
      u = e;
      p = i;
      let f = u === M7s.DATE ? function (e) {
        let t = new Date(e + "T00:00:00");
        return c(t) ? t : new Date(0);
      }(p) : u === M7s.TIME ? function (e) {
        let t = new Date(new Date().toDateString() + " " + e);
        return c(t) ? t : new Date(0);
      }(p) : u === M7s.NUMBER ? Number(p) : u === M7s.TEXT ? p : void throwTypeError(u);
      try {
        let n = new $$default(g, h).format({
          parsedPlaceholder: f
        });
        if (!Kg(n)) {
          x1("renderPlaceholderImpl", "Result is not a string", {
            formatType: e,
            formatPattern: t,
            value: i,
            result: n
          }, {
            reportAsSentryError: !0
          });
          return "";
        }
        return n;
      } catch (e) {
        return "";
      }
    }(e, t, i);
  }
}
export function $$p0() {
  $$n1 = new u();
}
export const L6 = $$p0;
export const Bm = $$n1;