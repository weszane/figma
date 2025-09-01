import { m$ } from "../905/170103";
import { Lb } from "../905/131414";
import { ul } from "../figma_app/262240";
import { Gm } from "../905/499389";
import { CA } from "../905/456599";
var $$n1;
var $$r2;
function c(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function u(e) {
  return function () {
    var t = this;
    var i = arguments;
    return new Promise(function (n, r) {
      var a = e.apply(t, i);
      function s(e) {
        c(a, n, r, s, o, "next", e);
      }
      function o(e) {
        c(a, n, r, s, o, "throw", e);
      }
      s(void 0);
    });
  };
}
!function (e) {
  e.BACK_BUTTON = "back";
  e.LEFT_ARROW = "left arrow";
  e.LEFT_CHEVRON = "left chevron";
  e.CLOSE = "close icon";
  e.EXIT = "exit icon";
  e.X = "x icon";
}($$n1 || ($$n1 = {}));
(function (e) {
  e.DOWN_ARROW = "down arrow";
  e.DOWN_CHEVRON = "down chevron";
  e.RIGHT_ARROW = "right arrow";
  e.RIGHT_CHEVRON = "right chevron";
  e.UP_ARROW = "up arrow";
  e.UP_CHEVRON = "up chevron";
})($$r2 || ($$r2 = {}));
let $$p0 = "checkerboard pattern";
let m = ["back", "left arrow", "left chevron", "close icon", "exit icon", "x icon", "down arrow", "down chevron", "right arrow", "right chevron", "up arrow", "up chevron", $$p0, "play button", "pause button", "stop button", "heart icon", "settings icon", "cogwheel", "home icon", "search icon", "library icon", "computer icon", "plus sign", "minus sign", "menu icon", "horizontal bars", "person icon", "person", "credit card", "bar chart", "bookmark", "speech bubble", "share icon", "calendar", "location pin", "pen", "profile icon", "image placeholder", "cart icon", "star", "checkmark", "harddrive icon", "file icon", "company logo", "google", "facebook", "instagram", "twitter", "trashcan", "ticket icon", "bell icon", "shopping bag", "money"];
export function $$h3(e) {
  return g.apply(this, arguments);
}
function g() {
  return (g = u(function* (e) {
    let t = new Map();
    for (let i of e) ul(i, e => {
      e.isPredictedIcon && e.base64 && t.set(e.id, e.base64);
    });
    return yield function (e, t) {
      return f.apply(this, arguments);
    }(t, m);
  })).apply(this, arguments);
}
function f() {
  return (f = u(function* (e, t) {
    let i = CA();
    let n = new Map();
    let r = m$(i, t, t, "text", n, Gm);
    let o = new Map();
    yield function (e, t, i, n) {
      return _.apply(this, arguments);
    }(e, i, o, r);
    return function (e, t) {
      let i = new Map();
      for (let [n, r] of e) {
        let e = [];
        for (let [i, n] of t) {
          let t = Lb(r, n);
          e.push({
            class: i,
            similarity: t
          });
        }
        e.sort((e, t) => t.similarity - e.similarity);
        i.set(n, e);
      }
      return i;
    }(o, n);
  })).apply(this, arguments);
}
function _() {
  return (_ = u(function* (e, t, i, n) {
    let r = 0;
    let s = [];
    let o = Array.from(e.keys());
    for (; r < o.length;) {
      let n = r + 16;
      let d = o.slice(r, n);
      let c = d.map(t => e.get(t));
      let u = m$(t, d, c, "image", i, Gm);
      s.push(u);
      r = n;
    }
    s.push(n);
    yield Promise.all(s);
  })).apply(this, arguments);
}
export const KE = $$p0;
export const nq = $$n1;
export const v$ = $$r2;
export const wU = $$h3;