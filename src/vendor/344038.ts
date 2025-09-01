export function $$u0(e) {
  if (function () {
    if (null == n) {
      n = !1;
      try {
        document.createElement("div").focus({
          get preventScroll() {
            n = !0;
            return !0;
          }
        });
      } catch {}
    }
    return n;
  }()) e.focus({
    preventScroll: !0
  });else {
    let t = function (e) {
      let t = e.parentNode;
      let a = [];
      let u = document.scrollingElement || document.documentElement;
      for (; t instanceof HTMLElement && t !== u;) {
        (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && a.push({
          element: t,
          scrollTop: t.scrollTop,
          scrollLeft: t.scrollLeft
        });
        t = t.parentNode;
      }
      u instanceof HTMLElement && a.push({
        element: u,
        scrollTop: u.scrollTop,
        scrollLeft: u.scrollLeft
      });
      return a;
    }(e);
    e.focus();
    (function (e) {
      for (let {
        element,
        scrollTop,
        scrollLeft
      } of e) {
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
      }
    })(t);
  }
}
let n = null;
export const e = $$u0;