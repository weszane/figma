import { xN } from "../figma_app/492908";
var $$i4 = (e => (e.LIGHT = "light", e.DARK = "dark", e))($$i4 || {});
var a = (e => (e.DEFAULT = "default", e.BRAND = "brand", e))(a || {});
var $$s5 = (e => (e.BG = "bg", e.CONTENT = "content", e.BORDER = "border", e))($$s5 || {});
var o = (e => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.TERTIARY = "tertiary", e))(o || {});
let l = {
  bg: {
    primary: {
      light: {
        s: 1,
        l: .99,
        a: 1
      },
      dark: {
        s: .72,
        l: .03,
        a: 1
      }
    },
    secondary: {
      light: {
        s: .55,
        l: .32,
        a: .09
      },
      dark: {
        s: .4,
        l: .8,
        a: .12
      }
    },
    tertiary: {
      light: {
        s: .2,
        l: .13,
        a: .2
      },
      dark: {
        s: .2,
        l: .87,
        a: .3
      }
    }
  },
  content: {
    primary: {
      light: {
        s: .2,
        l: .13,
        a: 1
      },
      dark: {
        s: .2,
        l: .87,
        a: 1
      }
    },
    secondary: {
      light: {
        s: .4,
        l: .13,
        a: .62
      },
      dark: {
        s: .4,
        l: .87,
        a: .62
      }
    },
    tertiary: {
      light: {
        s: .4,
        l: .13,
        a: .4
      },
      dark: {
        s: .4,
        l: .87,
        a: .4
      }
    }
  },
  border: {
    primary: {
      light: {
        s: .2,
        l: .36,
        a: 1
      },
      dark: {
        s: .2,
        l: .64,
        a: 1
      }
    },
    secondary: {
      light: {
        s: .2,
        l: .36,
        a: .2
      },
      dark: {
        s: .2,
        l: .64,
        a: .2
      }
    },
    tertiary: {
      light: {
        s: .2,
        l: .36,
        a: .2
      },
      dark: {
        s: .2,
        l: .64,
        a: .2
      }
    }
  }
};
let d = ["VECTOR", "LINE"];
let c = ["RECTANGLE", "ROUNDED_RECTANGLE", "ELLIPSE", "REGULAR_POLYGON", "STAR"];
let u = {
  light: {
    l: .34,
    a: .16
  },
  dark: {
    l: .78,
    a: .2
  }
};
export function $$p1(e, t, r, i, a) {
  for (let s in l[t]) {
    let o = l[t][s][r];
    if (xN(e.l, o.l, .005) && (a || xN(e.a, o.a, .005))) return l[t][s][i];
  }
  if ("bg" === t && xN(e.l, u[r].l, .005) && xN(e.a, u[r].a, .005)) {
    let {
      l,
      a
    } = u[i];
    return {
      ...e,
      l,
      a
    };
  }
  return null;
}
export function $$_2(e, t) {
  let [r, n] = [l[t].primary.light.l, l[t].primary.dark.l].sort();
  return e > r + .01 && e < n - .01;
}
export function $$h3(e) {
  let [t, r] = [l[e].primary.light, l[e].primary.dark].sort((e, t) => e.l - t.l);
  return {
    darkSpec: t,
    lightSpec: r
  };
}
export const Dk = function e(t) {
  if ("TEXT" === t.type) return "content";
  if (d.includes(t.type)) return t.size.x < 3 || t.size.y < 3 ? "border" : "content";
  if (c.includes(t.type)) {
    if (t.size.x < 40 && t.size.y < 40 || t.size.x < 20 || t.size.y < 20) return "content";
  } else if ("BOOLEAN_OPERATION" === t.type && (t.size.x < 40 && t.size.y < 40 || t.name.toLowerCase().includes("icon")) && t.childrenNodes.some(t => "content" === e(t))) return "content";
  return "bg";
};
export const Pu = $$p1;
export const Yx = $$_2;
export const bh = $$h3;
export const lH = $$i4;
export const lg = $$s5;