import { useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { aH, Qv } from "../905/959312";
import { sY, Ju, kB } from "../905/955878";
import { ar } from "../905/117474";
import { F } from "../905/658036";
import { QT, _L, Hl, iL, Fi, R2 } from "../905/687992";
import { A } from "../vendor/723372";
import { f5 } from "../905/914656";
function l(e, t) {
  ar(e) && (t?.select ? t.select(e) : e.select());
}
function c(e, t, i) {
  if (t && QT(e) && e.getSelection) {
    let {
      start,
      end
    } = e.getSelection(i.value, t);
    i.setSelectionRange(start, end);
    return !0;
  }
  return !1;
}
let m = function (...e) {
  return (t, i) => {
    let r = useRef({});
    for (let n of (i && Object.assign(r.current, i), e)) t = n(t, r.current);
    return t;
  };
}(({
  ref: e,
  formatter: t,
  value: i,
  onChange: s,
  onChangeRestricted: o,
  onKeyDown: l,
  ...u
}, p) => {
  let m = useRef(null);
  useEffect(() => {
    p && (p.select = e => {
      if (m.current) {
        let i = m.current;
        if (m.current = null, c(t, i, e)) return;
      }
      if (t.defaultSelection) {
        let {
          start,
          end
        } = t.defaultSelection(e.value);
        e.setSelectionRange(start, end);
      } else e.select();
    });
  }, [p, t]);
  let h = t.format(i);
  let g = n => {
    if (sY(n, l) || !QT(t)) return aH;
    switch (n.key) {
      case "ArrowUp":
      case "ArrowDown":
        {
          let r = e.current;
          let a = n.shiftKey;
          let l = "ArrowDown" === n.key ? -1 : 1;
          let u = _L(t, r);
          p?.commit?.();
          let h = e => Hl(t, e, l, {
            big: a,
            incrementTargets: u
          });
          let g = r.value;
          let f = iL(t, g, i, "nudge", n);
          if (!f) break;
          if (f.callback) {
            f.callback(e => h(e).value, {
              commit: !0
            });
            break;
          }
          let _ = f.value;
          let A = h(_);
          Fi(t, _, A.value) || s(A.value, "nudge");
          A.value !== A.preClamped && o?.(A.preClamped, {
            value: A.value
          });
          m.current = u;
          c(t, u, r);
          break;
        }
      default:
        return aH;
    }
    Ju(n);
  };
  let f = Qv(g, {
    eventName: "keydown",
    recordingKey: p?.recordingKey
  }, [g]);
  return {
    ...u,
    ref: e,
    value: h,
    onChange: n => {
      let r = iL(t, n, i, "change", null);
      if (r) {
        if (r.callback) r.callback(e => R2(t, n, e).value, {
          commit: !0
        });else {
          if (r.value === i) ;else {
            s(r.value, "change");
            return;
          }
          r.value !== r.parsedValue && o?.(r.parsedValue, {
            value: r.value
          });
        }
      }
      e.current.value = h;
    },
    onKeyDown: f
  };
}, ({
  ref: e,
  value: t,
  onChange: i,
  onKeyDown: d,
  onBlur: c,
  ...u
}, p) => {
  let m = useRef(!1);
  let h = Qv(i, {
    eventName: "commit",
    recordingKey: p?.recordingKey
  }, [i]);
  let g = useCallback(() => {
    let i = e.current;
    if (i && ar(i) && l(i, p), !m.current) return;
    let n = i.value;
    n !== t && (i.value = t, h?.(n));
    m.current = !1;
  }, [p, h, e, t]);
  useEffect(() => {
    p && (p.commit = g);
  }, [p, g]);
  useLayoutEffect(() => {
    let i = e.current;
    !m.current && (i.value = t ?? "", ar(i) && l(i, p));
  }, [t]);
  return {
    ...u,
    ref: e,
    defaultValue: t,
    onKeyDown(e) {
      if (sY(e, d)) return;
      let i = e.currentTarget;
      switch (e.code) {
        case "Enter":
          i.blur();
          break;
        case "Escape":
          if (!m.current) return;
          m.current = !1;
          i.value = t ?? "";
          l(i, p);
          break;
        case "KeyZ":
          F(e) && !m.current && kB(e);
          return;
        default:
          return;
      }
      Ju(e);
    },
    onBlur(e) {
      c?.(e);
      g();
    },
    onChange() {
      m.current = !0;
    }
  };
}, ({
  onPointerDown: e,
  onFocus: t,
  onClick: i,
  className: r,
  ...s
}, o) => {
  let d = useRef(!1);
  return {
    ...s,
    onPointerDown(t) {
      e?.(t);
      d.current = !1;
    },
    onFocus(e) {
      t?.(e);
      d.current = !0;
    },
    onClick(e) {
      let t = d.current;
      if (d.current = !1, sY(e, i)) return;
      let n = e.currentTarget;
      !t || f5(n) || l(n, o);
    },
    className: A(r, "inputs__text__FIVwi")
  };
});
export function $$h0({
  value: e,
  formatter: t,
  onChange: i,
  recordingKey: a,
  id: s,
  "aria-label": o,
  htmlAttributes: l,
  ...d
}) {
  let c = Qv((e, t) => d.disabled ? aH : (i(e, t), t.commit && "change" !== t.source && "nudge" !== t.source) ? void 0 : aH, {
    eventName: "change",
    recordingKey: a
  }, [i, d.disabled]);
  let u = useRef(null);
  let p = m({
    ...d,
    ...l,
    ref: u,
    value: e,
    formatter: t,
    onChange: (e, t) => c(e, {
      commit: !0,
      source: t
    })
  }, {
    recordingKey: a
  });
  return {
    value: e,
    formatter: t,
    onChange: c,
    onChangeRestricted: d.onChangeRestricted,
    getStringValue: () => u.current.value,
    inputProps: {
      id: s,
      "aria-label": o,
      ...p
    }
  };
}
export let $$g1 = $$h0;
export const E = $$h0;
export const N = $$g1;