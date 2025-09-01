import { o as _$$o } from "../vendor/554273";
function n(e, t, a) {
  let u = "left" === a ? "offsetLeft" : "offsetTop";
  let n = 0;
  for (; t.offsetParent && (n += t[u], t.offsetParent !== e);) {
    if (t.offsetParent.contains(e)) {
      n -= e[u];
      break;
    }
    t = t.offsetParent;
  }
  return n;
}
export function $$r0(e, t) {
  if (e && document.contains(e)) {
    let l = document.scrollingElement || document.documentElement;
    if ("hidden" === window.getComputedStyle(l).overflow) for (let t of function (e, t) {
      let a = [];
      for (; e && e !== document.documentElement;) {
        _$$o(e, void 0) && a.push(e);
        e = e.parentElement;
      }
      return a;
    }(e)) !function (e, t) {
      let a = n(e, t, "left");
      let u = n(e, t, "top");
      let r = t.offsetWidth;
      let i = t.offsetHeight;
      let o = e.scrollLeft;
      let l = e.scrollTop;
      let {
        borderTopWidth,
        borderLeftWidth,
        scrollPaddingTop,
        scrollPaddingRight,
        scrollPaddingBottom,
        scrollPaddingLeft
      } = getComputedStyle(e);
      let f = o + parseInt(borderLeftWidth, 10);
      let p = l + parseInt(borderTopWidth, 10);
      let y = f + e.clientWidth;
      let g = p + e.clientHeight;
      let v = parseInt(scrollPaddingTop, 10) || 0;
      let b = parseInt(scrollPaddingBottom, 10) || 0;
      let E = parseInt(scrollPaddingRight, 10) || 0;
      let C = parseInt(scrollPaddingLeft, 10) || 0;
      a <= o + C ? o = a - parseInt(borderLeftWidth, 10) - C : a + r > y - E && (o += a + r - y + E);
      u <= p + v ? l = u - parseInt(borderTopWidth, 10) - v : u + i > g - b && (l += u + i - g + b);
      e.scrollLeft = o;
      e.scrollTop = l;
    }(t, e);else {
      var a;
      var r;
      var i;
      var o;
      let {
        left,
        top
      } = e.getBoundingClientRect();
      e?.scrollIntoView?.call(e, {
        block: "nearest"
      });
      let {
        left: _left,
        top: _top
      } = e.getBoundingClientRect();
      (Math.abs(left - _left) > 1 || Math.abs(top - _top) > 1) && (t?.containingElement?.scrollIntoView?.call(i, {
        block: "center",
        inline: "center"
      }), e.scrollIntoView?.call(e, {
        block: "nearest"
      }));
    }
  }
}
export const o = $$r0;