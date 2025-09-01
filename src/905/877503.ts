export function $$n0(e) {
  let t = e.nodeName.toLowerCase();
  let i = null !== e.getAttribute("tabindex");
  return "-1" !== e.getAttribute("tabindex") && !!((/^(input|select|textarea|button)$/.test(t) ? !e.disabled : "a" === t && e.href || i) && !function (e) {
    if (!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)) return !1;
    let t = getComputedStyle(e).visibility;
    for (; "inherit" === t;) t = getComputedStyle(e = e.parentElement).visibility;
    return "hidden" === t;
  }(e));
}
export const B = $$n0;