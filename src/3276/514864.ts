import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import i from "classnames";
import { A } from "../vendor/90566";
import { dG } from "../figma_app/753501";
var s = i;
function d(e) {
  return jsx("div", {
    "aria-selected": e.selected,
    "aria-label": e.label,
    id: e.id,
    onPointerOver: e.onHover,
    onPointerOut: e.onHoverOut,
    onMouseDown: dG,
    onMouseUp: e.onClick,
    role: e.role,
    children: e.displayText
  }, e.id);
}
export function $$c0({
  children: e,
  label: t,
  onSelect: n,
  initiallyNotSelected: i,
  renderer: l,
  autofocus: c,
  customClassName: m
}) {
  let u = useRef(null);
  let [p, h, f, _, g] = function ({
    children: e,
    onSelect: t,
    initiallyNotSelected: n
  }) {
    let o = useMemo(() => e.map(e => ({
      type: "value",
      value: e
    })), [e]);
    let [i, s] = useState(n ? -1 : 0);
    let [r, l] = useState([]);
    useEffect(() => {
      let e = r.map(e => o[e]?.value).filter(e => void 0 !== e);
      t?.(e);
    }, [o, r, t]);
    return [o, i, s, r, l];
  }({
    children: e,
    onSelect: n,
    initiallyNotSelected: i
  });
  let v = useMemo(() => {
    let e = "function" == typeof l && l || l.label;
    let t = "function" == typeof l && l || l.id || l.label;
    return {
      label: e,
      id: t,
      searchTerm: "function" == typeof l && l || l.searchTerm || l.label,
      renderDisplay: "function" == typeof l && l || l.renderDisplay || l.label,
      renderAccessibleItem: ("function" == typeof l ? void 0 : l.renderAccessibleItem) || d
    };
  }, [l]);
  let {
    onKeyDown,
    role,
    tabIndex,
    activeDescendant
  } = function ({
    cursor: e,
    model: t,
    render: n,
    setCursor: o,
    setSelection: i
  }) {
    let [s, l] = useState("");
    let d = A(() => {
      l("");
    }, 200);
    let c = useCallback(a => {
      switch (a.key) {
        case "ArrowUp":
          {
            let n = e;
            do n = Math.max(0, n - 1); while (n > 0 && "separator" === t[n].type);
            o(n);
            a.stopPropagation();
            a.preventDefault();
            break;
          }
        case "ArrowDown":
          {
            let n = e;
            do n = Math.min(t.length - 1, n + 1); while (n > 0 && "separator" === t[n].type);
            o(n);
            a.stopPropagation();
            a.preventDefault();
            break;
          }
        case "Home":
          o(0);
          a.stopPropagation();
          a.preventDefault();
          break;
        case "End":
          o(t.length - 1);
          a.stopPropagation();
          a.preventDefault();
          break;
        case " ":
        case "Enter":
          i([e]);
          a.stopPropagation();
          a.preventDefault();
          break;
        default:
          if (RegExp("^\\p{Alpha}$", "u").test(a.key)) {
            let e = s + a.key;
            let i = RegExp(`^${e}`, "iu");
            let r = t.findIndex(e => "value" === e.type && i.test(n.searchTerm(e.value)));
            r >= 0 && o(r);
            l(e);
            d();
            a.stopPropagation();
            a.preventDefault();
          }
      }
    }, [e, t, s, n, d, o, i]);
    let m = t[e];
    return {
      onKeyDown: c,
      role: "listbox",
      tabIndex: 0,
      activeDescendant: m?.type === "value" ? n.id(m.value) : void 0
    };
  }({
    cursor: h,
    model: p,
    render: v,
    setCursor: f,
    setSelection: g
  });
  useEffect(() => {
    c && u.current?.focus();
  }, [c]);
  return jsxs("div", {
    role,
    onKeyDown,
    className: s()("listbox--listbox--7TMgv", m),
    tabIndex,
    "aria-label": t,
    "aria-activedescendant": activeDescendant,
    ref: u,
    children: [...p.map((e, t) => {
      switch (e.type) {
        case "separator":
          return jsx("hr", {}, t);
        case "value":
          let n = h === t;
          let a = _.includes(t);
          let i = v.id(e.value);
          let s = v.label(e.value);
          let r = v.renderDisplay(e.value, {
            hasCursor: n,
            selected: a
          });
          return v.renderAccessibleItem({
            selected: a,
            hasCursor: n,
            onHover: e => {
              f(t);
              e.stopPropagation();
              e.preventDefault();
            },
            onHoverOut: e => {
              e.relatedTarget && (h === t && f(-1), e.stopPropagation(), e.preventDefault());
            },
            onClick: e => {
              f(t);
              g([t]);
              e.stopPropagation();
              e.preventDefault();
            },
            id: i,
            label: s,
            displayText: r,
            role: "option"
          });
      }
    })]
  });
}
export const W = $$c0;