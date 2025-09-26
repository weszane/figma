import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useSingleEffect } from "../905/791079";
function s(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return null;
  let t = window.getComputedStyle(e);
  if ("none" === t.display || "hidden" === t.visibility) return null;
  let i = e.getBoundingClientRect();
  return 0 === i.width || 0 === i.height ? null : i;
}
function o({
  name: e,
  children: t,
  color: i,
  depth: o,
  getTooltipText: l
}) {
  let d = useRef(null);
  let c = useRef(null);
  let u = useRef(null);
  let p = () => {
    if (d.current) {
      var e;
      (e = d.current) && document.body.contains(e) && document.body.removeChild(e);
      d.current = null;
    }
  };
  useSingleEffect(() => p);
  useEffect(() => {
    if (!d.current) {
      let t = l();
      d.current = function ({
        name: e,
        color: t,
        depth: i,
        tooltipText: n
      }) {
        let r = document.createElement("div");
        r.setAttribute("id", "debug-overlay");
        r.style.cssText = `
    border: 2px ${t} solid;
    box-sizing: border-box;
    pointer-events: none;
    position: fixed;
    z-index: ${9900 + i};
  `;
        let a = document.createElement("div");
        a.innerText = e;
        a.setAttribute("title", n);
        a.style.cssText = `
    color: white;
    background-color: ${t};
    font-family: monospace;
    font-size: 10px;
    left: 0;
    pointer-events: all;
    right: 0;
    text-overlow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `;
        r.appendChild(a);
        document.body.appendChild(r);
        return r;
      }({
        name: e,
        color: i,
        depth: o,
        tooltipText: t
      });
    }
    let t = () => {
      if (!c.current || !u.current) throw Error("Before and after markers must be set");
      d.current ? (function ({
        beforeMarker: e,
        afterMarker: t,
        overlay: i
      }) {
        let n = function (e, t) {
          let i = function e(t, i) {
            if (!t || t === i) return null;
            let n = s(t);
            return n ? n : e(t.firstChild, i) || e(t.nextSibling, i);
          }(e.nextSibling, t);
          let n = function e(t, i) {
            if (!t || t === i) return null;
            let n = s(t);
            if (n) return n;
            if (t.nodeType === Node.ELEMENT_NODE) {
              let n = e(t.lastChild, i);
              if (n) return n;
            }
            return e(t.previousSibling, i);
          }(t.previousSibling, e);
          if (!i || !n) return null;
          let r = Math.min(i.left, n.left);
          let a = Math.max(i.right, n.right);
          let o = Math.min(i.top, n.top);
          return {
            left: r,
            top: o,
            width: a - r,
            height: Math.max(i.bottom, n.bottom) - o
          };
        }(e, t);
        if (!n) {
          i.style.display = "none";
          return;
        }
        let {
          left,
          top,
          width,
          height
        } = n;
        i.style.display = "block";
        i.style.left = `${left}px`;
        i.style.top = `${top}px`;
        i.style.width = `${width}px`;
        i.style.height = `${height}px`;
      }({
        beforeMarker: c.current,
        afterMarker: u.current,
        overlay: d.current
      }), requestAnimationFrame(t)) : p();
    };
    requestAnimationFrame(t);
  }, [e, i, o, l]);
  return jsxs(Fragment, {
    children: [jsx("div", {
      ref: c,
      style: {
        display: "none"
      }
    }), t, jsx("div", {
      ref: u,
      style: {
        display: "none"
      }
    })]
  });
}
export function $$l0({
  children: e,
  isDebugMode: t,
  ...i
}) {
  return t ? jsx(o, {
    ...i,
    children: e
  }) : e;
}
export const C = $$l0;