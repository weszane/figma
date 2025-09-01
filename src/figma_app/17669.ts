import { xb } from "../figma_app/465776";
import { pu, x_, Fy, KF, y$, fx, u0, Cv as _$$Cv, sJ, UF, _L, hN, c, uZ, dP, dJ } from "../905/532366";
import { Hc, rR, G2, kG, kX } from "../figma_app/197743";
import { QW } from "../figma_app/941074";
export function $$o24(e, t, r) {
  let n = () => {
    let r = pu[e[1]] ?? Hc(e[1]) ?? 0;
    return t ? -1 * r : r;
  };
  switch (e[0]) {
    case "p":
      r.padding = {
        top: n(),
        bottom: n(),
        left: n(),
        right: n()
      };
      break;
    case "pt":
      r.padding = r.padding || {};
      r.padding.top = n();
      break;
    case "pb":
      r.padding = r.padding || {};
      r.padding.bottom = n();
      break;
    case "pl":
      r.padding = r.padding || {};
      r.padding.left = n();
      break;
    case "pr":
      r.padding = r.padding || {};
      r.padding.right = n();
      break;
    case "py":
      r.padding = r.padding || {};
      r.padding.top = n();
      r.padding.bottom = n();
      break;
    case "px":
      r.padding = r.padding || {};
      r.padding.left = n();
      r.padding.right = n();
  }
}
export function $$l11(e, t, r) {
  let n = () => {
    let r = pu[e[1]] ?? Hc(e[1]) ?? 0;
    return t ? -1 * r : r;
  };
  switch (e[0]) {
    case "m":
      r.margin = {
        top: n(),
        bottom: n(),
        left: n(),
        right: n()
      };
      break;
    case "mt":
      r.margin = r.margin || {};
      r.margin.top = n();
      break;
    case "mb":
      r.margin = r.margin || {};
      r.margin.bottom = n();
      break;
    case "ml":
      r.margin = r.padding || {};
      r.margin.left = n();
      break;
    case "mr":
      r.margin = r.margin || {};
      r.margin.right = n();
      break;
    case "my":
      r.margin = r.margin || {};
      r.margin.top = n();
      r.margin.bottom = n();
      break;
    case "mx":
      r.margin = r.margin || {};
      r.margin.left = n();
      r.margin.right = n();
  }
}
export function $$d26(e, t, r) {
  let n = () => {
    let r = e.length - 1;
    let n = pu[e[r]] ?? Hc(e[r]) ?? 0;
    return t ? -1 * n : n;
  };
  switch (e[0]) {
    case "top":
      r.y = {
        type: "top",
        offset: n()
      };
      break;
    case "left":
      r.x = {
        type: "left",
        offset: n()
      };
      break;
    case "bottom":
      r.y = {
        type: "bottom",
        offset: n()
      };
      break;
    case "right":
      r.x = {
        type: "right",
        offset: n()
      };
  }
}
export function $$c23(e, t) {
  if ("rounded" !== e[0]) return;
  let r = () => {
    let t = e.length - 1;
    return x_[e[t]] ?? Hc(e[t]) ?? 0;
  };
  if (1 === e.length) {
    t.cornerRadius = {
      topLeft: 4,
      topRight: 4,
      bottomLeft: 4,
      bottomRight: 4
    };
    return;
  }
  if (2 === e.length) {
    t.cornerRadius = {
      topLeft: r(),
      topRight: r(),
      bottomLeft: r(),
      bottomRight: r()
    };
    return;
  }
  switch (t.cornerRadius = t.cornerRadius || {}, e[1]) {
    case "t":
      t.cornerRadius.topLeft = r();
      t.cornerRadius.topRight = r();
      break;
    case "e":
    case "r":
      t.cornerRadius.bottomRight = r();
      t.cornerRadius.topRight = r();
      break;
    case "b":
      t.cornerRadius.bottomRight = r();
      t.cornerRadius.bottomLeft = r();
      break;
    case "s":
    case "l":
      t.cornerRadius.bottomLeft = r();
      t.cornerRadius.topLeft = r();
      break;
    case "ss":
    case "tl":
      t.cornerRadius.topLeft = r();
      break;
    case "se":
    case "tr":
      t.cornerRadius.topRight = r();
      break;
    case "es":
    case "bl":
      t.cornerRadius.bottomLeft = r();
      break;
    case "ee":
    case "br":
      t.cornerRadius.bottomRight = r();
  }
}
export function $$u13(e) {
  let t = e.slice(1).join(rR);
  if ("transparent" === t) return [];
  let r = t.split("/");
  let n = r[0];
  let o = r[1] ?? "";
  let l = Fy[n] ?? G2(n);
  if (!l || !l.match(/^#?[0-9a-f]{3,8}$/i)) return null;
  if (!o || !KF[o]) return l;
  let d = QW(l);
  d && KF[o] && (d.a = KF[o] ?? 1);
  return d;
}
export function $$p5(e, t, r) {
  let n = e[0];
  if ("bg" !== n && "text" !== n) return;
  let i = "bg" === n && "Text" !== r || "text" === n && ["Text", "Icon"].includes(r);
  if (r && !i) return;
  let a = $$u13(e);
  a && (t["Icon" === r ? "stroke" : "fill"] = a);
}
export function $$_27(e, t) {
  "opacity" === e[0] && (t.opacity = KF[e[1]] ?? kG(e[1]) ?? 1);
}
export function $$h0(e, t) {
  if ("flex" === e[0]) {
    switch (e[1]) {
      case "nowrap":
        t.wrap = !1;
        break;
      case "wrap":
        t.wrap = !0;
        break;
      case "row":
      case "row-reverse":
        t.direction = "horizontal";
        break;
      case "col":
      case "col-reverse":
        t.direction = "vertical";
    }
    return;
  }
}
export function $$m10(e, t, r) {
  if ("justify" === e[0]) {
    let n = "vertical" === t ? "verticalAlignItems" : "horizontalAlignItems";
    switch (e[1]) {
      case "start":
        r[n] = "start";
        break;
      case "end":
        r[n] = "end";
        break;
      case "center":
        r[n] = "center";
        break;
      case "between":
        r.spacing = "auto";
    }
  }
  if ("items" === e[0]) {
    let n = "vertical" === t ? "horizontalAlignItems" : "verticalAlignItems";
    switch (e[1]) {
      case "start":
        r[n] = "start";
        break;
      case "end":
        r[n] = "end";
        break;
      case "center":
        r[n] = "center";
        break;
      case "baseline":
        "horizontal" === t && (r[n] = "baseline");
    }
  }
}
export function $$g4(e, t, r) {
  let n = () => "full" === e[1] ? "fill-parent" : "fit" === e[1] ? "hug-contents" : pu[e[1]] ?? Hc(e[1]) ?? void 0;
  if ("w" === e[0]) {
    let e = n();
    void 0 !== e && ("Line" === r ? t.length = e : t.width = e);
    return;
  }
  if ("h" === e[0]) {
    let e = n();
    void 0 !== e && (t.height = e);
    return;
  }
}
export function $$f6(e, t) {
  let r = () => {
    let t = e.length - 1;
    return "max" === e[0] && "w" === e[1] && y$[e[t]] ? y$[e[t]] : pu[e[t]] ?? Hc(e[t]) ?? void 0;
  };
  if ("min" === e[0]) {
    if ("w" === e[1]) {
      let e = r();
      void 0 !== e && (t.minWidth = e);
      return;
    }
    if ("h" === e[1]) {
      let e = r();
      void 0 !== e && (t.minHeight = e);
      return;
    }
  }
  if ("max" === e[0]) {
    if ("w" === e[1]) {
      let e = r();
      void 0 !== e && (t.maxWidth = e);
      return;
    }
    if ("h" === e[1]) {
      let e = r();
      void 0 !== e && (t.maxHeight = e);
      return;
    }
  }
}
export function $$E19(e, t, r) {
  if ("Text" === r) return;
  let [n, i] = e;
  if ("border" !== n) return;
  let s = () => {
    "stroke" in t || (t.stroke = "#000000");
  };
  if (i) {
    let r = Number(i);
    let n = isNaN(r) ? Hc(i, 2) ?? 0 : r;
    if (n) {
      t.strokeWidth = n;
      s();
      return;
    }
    let o = $$u13(e);
    o && (t.stroke = o);
  } else {
    t.strokeWidth = 1;
    s();
    return;
  }
}
export function $$y18(e, t) {
  if ("text" === e[0]) {
    let r = (() => {
      let t = e.length - 1;
      return fx[e[t]] ?? Hc(e[t]);
    })();
    r && (t.fontSize = r);
  }
}
export function $$b12(e, t) {
  if ("leading" === e[0]) {
    let r = (() => {
      let t = e.length - 1;
      let r = u0[e[t]];
      if ("normal" === e[t]) return "auto";
      if (r) return `${(100 * r).toFixed(0)}%`;
      let n = _$$Cv[e[t]];
      if (n) return n;
      let s = Hc(e[t]);
      if (s) return s;
      let o = kX(e[t]);
      return o ? `${o.toFixed(0)}%` : null;
    })();
    r && (t.lineHeight = r);
  }
}
export function $$T1(e, t) {
  if ("font" === e[0]) {
    let r = (() => {
      let t = e.length - 1;
      return sJ[e[t]];
    })();
    r && (t.fontWeight = r);
  }
}
export function $$I3(e, t) {
  switch (e) {
    case "italic":
      t.italic = !0;
      break;
    case "not-italic":
      t.italic = !1;
      break;
    case "underline":
      t.textDecoration = "underline";
      break;
    case "linethrough":
      t.textDecoration = "strikethrough";
      break;
    case "uppercase":
      t.textCase = "upper";
      break;
    case "lowercase":
      t.textCase = "lower";
      break;
    case "capitalize":
      t.textCase = "title";
      break;
    case "normal-case":
      t.textCase = "original";
  }
}
export function $$S14(e, t) {
  if (e.startsWith("text-")) switch (e) {
    case "text-left":
      t.horizontalAlignText = "left";
      break;
    case "text-center":
      t.horizontalAlignText = "center";
      break;
    case "text-right":
      t.horizontalAlignText = "right";
      break;
    case "text-justify":
      t.horizontalAlignText = "justified";
  }
  if (e.startsWith("align-")) switch (e) {
    case "align-top":
      t.verticalAlignText = "top";
      break;
    case "align-middle":
      t.verticalAlignText = "center";
      break;
    case "align-bottom":
      t.verticalAlignText = "bottom";
  }
}
export function $$v2(e, t, r) {
  if ("gap" !== e[0]) return;
  let n = (() => {
    let r = e.length - 1;
    let n = pu[e[r]] ?? Hc(e[r]) ?? void 0;
    return void 0 === n ? n : t ? -1 * n : n;
  })();
  if (void 0 !== n) {
    if (2 === e.length) {
      r.spacing = {
        horizontal: n,
        vertical: n
      };
      return;
    }
    switch (r.spacing = r.spacing || {}, e[1]) {
      case "x":
        r.spacing.horizontal = n;
        break;
      case "y":
        r.spacing.vertical = n;
    }
  }
}
export function $$A7(e, t) {
  switch (e[0]) {
    case "block":
    case "inline-block":
    case "inline":
    case "flex":
    case "inline-flex":
    case "table":
    case "inline-table ":
    case "table-caption":
    case "table-cell ":
    case "table-column ":
    case "table-column-group ":
    case "table-footer-group ":
    case "table-header-group ":
    case "table-row-group":
    case "table-row":
    case "flow-root":
    case "grid":
    case "inline-grid":
    case "hidden":
    case "visible":
      t.hidden = -1 !== e.indexOf("hidden");
  }
}
export function $$x15(e) {
  return UF[e] || `[${e.toFixed(0)}px]`;
}
export function $$N8(e) {
  return _L[e] || `[${e.toFixed(0)}px]`;
}
export function $$C17(e) {
  return hN[e] || `[${e.toFixed(0)}]`;
}
export function $$w16(e) {
  let t = e.toLowerCase();
  let r = c[t];
  if (r) return r;
  if (/^#[0-9A-Fa-f]{3}$/.test(t)) {
    let e = "#" + t.slice(1).split("").map(e => e + e).join("");
    let r = c[e];
    if (r) return r;
  }
  return `[${t}]`;
}
export function $$O25(e, t) {
  let r = uZ[e];
  return !t?.alwaysUsePreciseValues && e >= 999 ? "-full" : "string" == typeof r ? r ? `-${r}` : "" : `-[${e.toFixed(0)}px]`;
}
export function $$R21(e, t) {
  switch (t) {
    case "PIXELS":
      {
        let t = dP[e];
        if (t) return t;
        return `[${e.toFixed(0)}px]`;
      }
    case "PERCENT":
      for (let [t, r] of Object.entries(u0)) if (Math.round(100 * r) === Math.round(e)) return t;
      return `[${e.toFixed(0)}%]`;
    default:
      xb(t);
  }
}
export function $$L20(e) {
  let t = parseFloat(e.toFixed(2)).toString();
  return ["0", "2", "4", "8"].includes(t) ? `${t}` : `[${t}px]`;
}
export function $$P9(e) {
  let t = parseFloat(e.toFixed(2));
  return dJ[t] || `[${t.toString()}]`;
}
export function $$D22(e, t) {
  return t < 0 ? `-${e}-${$$x15(-t)}` : `${e}-${$$x15(t)}`;
}
export const B9 = $$h0;
export const BM = $$T1;
export const Cv = $$v2;
export const Eu = $$I3;
export const Fg = $$g4;
export const Fm = $$p5;
export const Hg = $$f6;
export const IT = $$A7;
export const KY = $$N8;
export const Pm = $$P9;
export const Pw = $$m10;
export const W1 = $$l11;
export const bP = $$b12;
export const c1 = $$u13;
export const gW = $$S14;
export const h = $$x15;
export const iz = $$w16;
export const jd = $$C17;
export const k$ = $$y18;
export const km = $$E19;
export const qK = $$L20;
export const rt = $$R21;
export const s$ = $$D22;
export const t1 = $$c23;
export const v4 = $$o24;
export const v6 = $$O25;
export const vQ = $$d26;
export const vW = $$_27;