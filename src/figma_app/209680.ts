import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useLayoutEffect } from "react";
import a from "classnames";
import { c2 } from "../figma_app/243213";
import { captureMessage } from "../905/11";
var s = a;
let d = "dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd";
let c = "dropdown--dropdownContents--BqcL5";
let u = "dropdown--dropdownValue--9lJPW";
let p = "dropdown--dropdownPreview--3Ox9k";
let _ = "dropdown--label--cIJtO";
let h = (e, t) => {
  let r = Array(e.length);
  e.forEach((e, n) => {
    if (t?.[n]) r[n] = t[n];else if (Array.isArray(e)) {
      let t = e.find(e => e.checked);
      t ? r[n] = t.key : r[n] = e[0].key;
    } else {
      r[n] = {};
      Object.entries(e).find(([e, t]) => {
        t.checked && (r[n][e] = !0);
      });
    }
  });
  return r;
};
let m = (() => {
  let e = [];
  ["scroll", "resize"].forEach(t => {
    window.addEventListener(t, () => {
      e = e.filter(e => g(e.el, !1, e.initialHPosition, e.initialVPosition));
    });
  });
  return {
    set: (t, r, n) => {
      e.push({
        el: t,
        initialHPosition: r,
        initialVPosition: n
      });
    }
  };
})();
let g = (e, t = !1, r, n) => {
  if (!e || !("true" === e.parentNode.getAttribute("show-dropdown") || e.parentNode === document.activeElement || e.parentNode?.firstChild === document.activeElement || e === document.activeElement) && !t) return !1;
  if (e.parentNode instanceof HTMLElement && "true" === e.parentNode.getAttribute("data-disable-repositioning")) return !0;
  e.setAttribute("data-v-position", n || "below");
  e.setAttribute("data-h-position", "");
  let i = e.getBoundingClientRect();
  i.bottom > window.innerHeight - 20 ? e.setAttribute("data-v-position", "above") : i.top < 20 && e.setAttribute("data-v-position", "below");
  i.right > window.innerWidth - 100 ? e.setAttribute("data-h-position", "right") : i.left < 20 ? e.setAttribute("data-h-position", "left") : e.getAttribute("data-h-position") !== r && c2(e, "data-h-position", r);
  return !0;
};
export function $$f0({
  children: e,
  preview: t,
  className: r,
  horizontalPosition: a,
  disableRepositioning: s
}) {
  let o = useRef(null);
  return jsxs("div", {
    className: r || d,
    tabIndex: 0,
    "data-disable-repositioning": s,
    onFocus: () => {
      m.set(o.current, a);
      s || g(o.current, !0, a);
    },
    children: [e, jsx("button", {
      className: "dropdown--mobileBackground--WSE2Z",
      onClick: e => document.activeElement?.blur()
    }), jsx("div", {
      className: c,
      "data-v-position": "below",
      "data-h-position": a || "",
      ref: o,
      children: t
    })]
  });
}
export function $$E1({
  children: e,
  preview: t,
  className: r,
  dropdownClassName: a,
  horizontalPosition: o,
  verticalPosition: l,
  disableRepositioning: u,
  borderRadius: p,
  allowHoverOnDropdownContents: _ = !0
}) {
  let h = useRef(null);
  let [f, E] = useState(!1);
  let [y, b] = useState(0);
  let T = e => {
    window.innerWidth < 500 || (b(setTimeout(() => {
      let t = h.current;
      t && t.parentNode && (t.parentNode.setAttribute("show-dropdown", e + ""), !1 === e ? setTimeout(() => {
        E(e);
      }, 150) : (m.set(t, o, l), E(e)));
    }, 150)), clearTimeout(y));
  };
  useLayoutEffect(() => {
    f && !u && g(h.current, !0, o, l);
  }, [f]);
  return jsxs("div", {
    className: r || d,
    "show-dropdown": "false",
    onMouseEnter: () => T(!0),
    onMouseLeave: () => T(!1),
    tabIndex: 0,
    "data-disable-repositioning": u,
    "data-hover-dropdown": !0,
    children: [jsx("div", {
      onMouseLeave: _ ? void 0 : () => T(!1),
      children: e
    }), jsx("div", {
      className: s()(c, a),
      style: p ? {
        borderRadius: `${p}px`
      } : {},
      "data-v-position": l || "below",
      "data-h-position": o || "",
      ref: h,
      "data-dropdown-contents": !0,
      children: f && t
    })]
  });
}
function y({
  show: e
}) {
  return jsx("svg", {
    className: e ? "dropdown--showCheckmark--td6Ke" : "",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "var(--color-icon-menu)",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2069 5.2073L7.70694 10.7073L6.99983 11.4144L6.29272 10.7073L3.29272 7.7073L4.70694 6.29309L6.99983 8.58598L11.7927 3.79309L13.2069 5.2073Z"
    })
  });
}
function b({
  optionGroup: e,
  value: t,
  onSelect: r
}) {
  let i;
  i = Array.isArray(e) ? e.map(({
    key: e,
    label: i
  }) => jsxs("div", {
    role: "button",
    onKeyDown: e => {
      13 === e.keyCode && e.target.click();
    },
    onClick: () => {
      document.activeElement.blur();
      r(e);
    },
    className: u,
    "data-key": e,
    tabIndex: 0,
    children: [jsx(y, {
      show: t === e
    }), jsx("div", {
      className: _,
      children: i
    })]
  }, e)) : Object.entries(e).map(([e, i]) => jsxs("div", {
    role: "button",
    onKeyDown: e => {
      13 === e.keyCode && e.target.click();
    },
    onClick: () => {
      document.activeElement.blur();
      r(e);
    },
    className: u,
    "data-key": e,
    tabIndex: 0,
    children: [jsx(y, {
      show: !0 === t[e]
    }), jsx("div", {
      className: _,
      children: i.label
    })]
  }, e));
  return jsx(Fragment, {
    children: i
  });
}
function T({
  label: e,
  additionalClassName: t,
  onClick: r,
  dataOnboardingKey: i
}) {
  return jsxs("div", {
    role: "button",
    tabIndex: 0,
    className: s()(p, t),
    onMouseDown: e => {
      document.activeElement?.matches(`.${p.replace(/\s/g, ".")}`) && (document.activeElement.blur(), e.preventDefault());
    },
    onClick: r,
    "data-onboarding-key": i,
    children: [jsx("div", {
      className: _,
      children: e
    }), jsx("svg", {
      width: "10",
      height: "7",
      viewBox: "0 0 10 7",
      fill: "none",
      children: jsx("path", {
        d: "M1 1L5 5L9 1",
        stroke: "var(--color-text)",
        strokeWidth: "1.5"
      })
    })]
  });
}
export function $$I2({
  name: e,
  options: t,
  onUpdate: r,
  onClick: i,
  initialValues: a,
  adtlClassName: o,
  dataOnboardingKey: d
}) {
  let c = h(t, a);
  let u = t[0].find(e => e.key === c[0])?.label;
  u || (captureMessage("SelectDropdown: current value removed"), r([t[0][0].key]), u = t[0][0].label);
  return jsx($$f0, {
    className: s()(o || "dropdown--selectDropdown--Lqj6J dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd"),
    preview: jsxs(Fragment, {
      children: [jsx("div", {
        className: "dropdown--mobileDropdownHeader--mEjUR",
        children: jsx("b", {
          children: e
        })
      }), t.map((e, i) => jsxs("div", {
        children: [jsx(b, {
          optionGroup: e,
          value: c[i],
          onSelect: t => {
            let n = [...c];
            if (Array.isArray(e)) n[i] = t;else {
              let e = n[i];
              n[i] = {
                ...e,
                [t]: !e[t]
              };
            }
            r(n);
          }
        }), i < t.length - 1 && jsx("hr", {
          className: "dropdown--optionGroupDivider--tmhsB"
        })]
      }, i + "-group"))]
    }),
    children: jsx(T, {
      onClick: i,
      dataOnboardingKey: d,
      label: u
    })
  });
}
export function $$S3({
  preview: e,
  children: t
}) {
  return jsx($$E1, {
    className: "dropdown--tooltip--Sh4Vu dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd",
    preview: e,
    horizontalPosition: "center",
    children: t
  });
}
export const ms = $$f0;
export const So = $$E1;
export const A5 = $$I2;
export const m_ = $$S3;