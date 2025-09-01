var o;
let a = ["@charset", "@font-face", "@import", "@keyframes"];
let n = !1;
let l = {};
let i = e => ["-" === e[0] ? "-" : "", "-" === e[0] ? e.slice(1) : e];
let s = e => {
  e = e.replace(/\s/g, "_");
  for (let t = 1; t < e.length; t) {
    let r = e[t];
    "_" === r && r === e[t - 1] ? e = e.slice(0, t) + e.slice(t + 1) : t++;
  }
  return e;
};
let d = (e, t = !1) => /^\s*#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\s*$|^\s*rgb\(\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*\)\s*$|^\s*rgba\(\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d*(\.\d+)?)\s*\)\s*$|^\s*hsl\(\s*(\d+)\s*,\s*(\d*(\.\d+)?%)\s*,\s*(\d*(\.\d+)?%)\)\s*$|^\s*hsla\((\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*(\d*(\.\d+)?)\)\s*$/i.test(e) || ["initial", "inherit", "currentColor", "currentcolor", "transparent", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"].includes(e) || t && /^\s*linear-gradient\([\w\W]+?\)\s*$/.test(e);
let c = e => e.length > 0 || ["em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "in", "pt", "pc", "px", "min-content", "max-content", "fit-content", "deg", "grad", "rad", "turn", "ms", "s", "Hz", "kHz", "%", "length", "inherit", "thick", "medium", "thin", "initial", "auto"].includes(e.replace(/[.\d\s-]/g, "")) || /^[-.\d]+$/.test(e.trim()) || /^var\(.+\)$/.test(e);
!function (e) {
  e.auto = "auto";
  e.vh = "100vh";
  e.vw = "100vw";
}(o || (o = {}));
let m = (e, t = []) => {
  /^\d+\.[1-9]{2,}%$/.test(e) && (e = `${Number(e.slice(0, -1)).toFixed(6).replace(/(\.[1-9]{2})\d+/, "$1")}%`);
  let r = {
    auto: "auto",
    "50%": "1/2",
    "33.33%": "1/3",
    "66.66%": "2/3",
    "25%": "1/4",
    "75%": "3/4",
    "20%": "1/5",
    "40%": "2/5",
    "60%": "3/5",
    "80%": "4/5",
    "16.66%": "1/6",
    "83.33%": "5/6",
    "8.33%": "1/12",
    "41.66%": "5/12",
    "58.33%": "7/12",
    "91.66%": "11/12",
    "100%": "full",
    "100vw": "screen",
    "100vh": "screen",
    "min-content": "min",
    "max-content": "max"
  };
  t.forEach(e => {
    delete r[e];
  });
  return r[e];
};
let u = e => ({
  "0px": "0",
  "1px": "px",
  "0.125rem": "0.5",
  "0.25rem": "1",
  "0.375rem": "1.5",
  "0.5rem": "2",
  "0.625rem": "2.5",
  "0.75rem": "3",
  "0.875rem": "3.5",
  "1rem": "4",
  "1.25rem": "5",
  "1.5rem": "6",
  "1.75rem": "7",
  "2rem": "8",
  "2.25rem": "9",
  "2.5rem": "10",
  "2.75rem": "11",
  "3rem": "12",
  "3.5rem": "14",
  "4rem": "16",
  "5rem": "20",
  "6rem": "24",
  "7rem": "28",
  "8rem": "32",
  "9rem": "36",
  "10rem": "40",
  "11rem": "44",
  "12rem": "48",
  "13rem": "52",
  "14rem": "56",
  "15rem": "60",
  "16rem": "64",
  "18rem": "72",
  "20rem": "80",
  "24rem": "96"
})[e];
let p = e => ({
  "0px": "-none",
  "0.125rem": "-sm",
  "0.25rem": "null",
  "0.375rem": "-md",
  "0.5rem": "-lg",
  "0.75rem": "-xl",
  "1rem": "-2xl",
  "1.5rem": "-3xl",
  "9999px": "-full"
})[e];
let f = e => ({
  "blur(0)": "blur-none",
  "blur(4px)": "blur-sm",
  "blur(8px)": "blur",
  "blur(12px)": "blur-md",
  "blur(16px)": "blur-lg",
  "blur(24px)": "blur-xl",
  "blur(40px)": "blur-2xl",
  "blur(64px)": "blur-3xl",
  "brightness(0)": "brightness-0",
  "brightness(.5)": "brightness-50",
  "brightness(.75)": "brightness-75",
  "brightness(.9)": "brightness-90",
  "brightness(.95)": "brightness-95",
  "brightness(1)": "brightness-100",
  "brightness(1.05)": "brightness-105",
  "brightness(1.1)": "brightness-110",
  "brightness(1.25)": "brightness-125",
  "brightness(1.5)": "brightness-150",
  "brightness(2)": "brightness-200",
  "contrast(0)": "contrast-0",
  "contrast(.5)": "contrast-50",
  "contrast(.75)": "contrast-75",
  "contrast(1)": "contrast-100",
  "contrast(1.25)": "contrast-125",
  "contrast(1.5)": "contrast-150",
  "contrast(2)": "contrast-200",
  "drop-shadow(0 1px 1px rgba(0,0,0,0.05))": "drop-shadow-sm",
  "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))": "drop-shadow",
  "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))": "drop-shadow-md",
  "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))": "drop-shadow-lg",
  "drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))": "drop-shadow-xl",
  "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))": "drop-shadow-2xl",
  "drop-shadow(0 0 #0000)": "drop-shadow-none",
  "grayscale(0)": "grayscale-0",
  "grayscale(1)": "grayscale",
  "hue-rotate(-180deg)": "-hue-rotate-180",
  "hue-rotate(-90deg)": "-hue-rotate-90",
  "hue-rotate(-60deg)": "-hue-rotate-60",
  "hue-rotate(-30deg)": "-hue-rotate-30",
  "hue-rotate(-15deg)": "-hue-rotate-15",
  "hue-rotate(0deg)": "hue-rotate-0",
  "hue-rotate(15deg)": "hue-rotate-15",
  "hue-rotate(30deg)": "hue-rotate-30",
  "hue-rotate(60deg)": "hue-rotate-60",
  "hue-rotate(90deg)": "hue-rotate-90",
  "hue-rotate(180deg)": "hue-rotate-180",
  "invert(0)": "invert-0",
  "invert(1)": "invert",
  "saturate(0)": "saturate-0",
  "saturate(.5)": "saturate-50",
  "saturate(1)": "saturate-100",
  "saturate(1.5)": "saturate-150",
  "saturate(2)": "saturate-200",
  "sepia(0)": "sepia-0",
  "sepia(1)": "sepia"
})[e];
let b = new Map([["align-content", {
  center: "content-center",
  "flex-start": "content-start",
  "flex-end": "content-end",
  "space-between": "content-between",
  "space-around": "content-around",
  "space-evenly": "content-evenly"
}], ["align-items", {
  "flex-start": "items-start",
  "flex-end": "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch"
}], ["align-self", {
  auto: "self-auto",
  "flex-start": "self-start",
  "flex-end": "self-end",
  center: "self-center",
  stretch: "self-stretch",
  baseline: "self-baseline"
}], ["all", {
  initial: "[all:initial]",
  inherit: "[all:inherit]",
  unset: "[all:unset]"
}], ["animation", e => {
  var t;
  return null !== (t = {
    none: "animate-none"
  }[e]) && void 0 !== t ? t : `animate-[${s(e)}]`;
}], ["animation-delay", e => `[animation-delay:${s(e)}]`], ["animation-direction", e => `[animation-direction:${s(e)}]`], ["animation-duration", e => `[animation-duration:${s(e)}]`], ["animation-fill-mode", e => `[animation-fill-mode:${s(e)}]`], ["animation-iteration-count", e => `[animation-iteration-count:${s(e)}]`], ["animation-name", e => `[animation-name:${s(e)}]`], ["animation-play-state", e => `[animation-play-state:${s(e)}]`], ["animation-timing-function", e => `[animation-timing-function:${s(e)}]`], ["appearance", e => {
  var t;
  return null !== (t = {
    none: "appearance-none"
  }[e]) && void 0 !== t ? t : `[appearance:${s(e)}]`;
}], ["aspect-ratio", e => `[aspect-ratio:${s(e)}]`], ["backdrop-filter", e => {
  let t = {
    none: "backdrop-filter-none"
  }[e];
  if (t) return t;
  let r = {
    blur: e => {
      var t;
      var r;
      return `backdrop-blur-${null !== (r = l["backdrop-blur"]?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    brightness: e => {
      var t;
      var r;
      return `backdrop-brightness-${null !== (r = l["backdrop-brightness"]?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    contrast: e => {
      var t;
      var r;
      return `backdrop-contrast-${null !== (r = l["backdrop-contrast"]?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    grayscale: e => {
      var t;
      var r;
      return `backdrop-grayscale-${null !== (r = l["backdrop-grayscale"]?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    "hue-rotate": e => {
      var t;
      var r;
      let o = i(e);
      return `${o[0]}backdrop-hue-rotate-${null !== (r = l["backdrop-grayscale"]?.[o[1]]) && void 0 !== r ? r : `[${o[1]}]`}`;
    },
    invert: e => {
      var t;
      var r;
      return `backdrop-invert-${null !== (r = l["backdrop-invert"]?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    opacity: e => {
      var t;
      var r;
      return `backdrop-opacity-${null !== (r = l["backdrop-opacity"]?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    saturate: e => {
      var t;
      var r;
      return `backdrop-saturate-${null !== (r = l["backdrop-saturate"]?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    sepia: e => {
      var t;
      var r;
      return `backdrop-sepia-${null !== (r = l["backdrop-sepia"]?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    }
  };
  let o = s(e).replace(/\(.+?\)/g, e => e.replace(/_/g, "")).split(")_").map(e => `${e})`);
  o[o.length - 1] = o[o.length - 1].slice(0, -1);
  let a = !0;
  let d = o.map(e => {
    var t;
    let o = !1;
    let l = "";
    n && (l = null !== (t = f(e) || {
      "opacity(0)": "backdrop-opacity-0",
      "opacity(0.05)": "backdrop-opacity-5",
      "opacity(0.1)": "backdrop-opacity-10",
      "opacity(0.2)": "backdrop-opacity-20",
      "opacity(0.25)": "backdrop-opacity-25",
      "opacity(0.3)": "backdrop-opacity-30",
      "opacity(0.4)": "backdrop-opacity-40",
      "opacity(0.5)": "backdrop-opacity-50",
      "opacity(0.6)": "backdrop-opacity-60",
      "opacity(0.7)": "backdrop-opacity-70",
      "opacity(0.75)": "backdrop-opacity-75",
      "opacity(0.8)": "backdrop-opacity-80",
      "opacity(0.9)": "backdrop-opacity-90",
      "opacity(0.95)": "backdrop-opacity-95",
      "opacity(1)": "backdrop-opacity-100"
    }[e]) && void 0 !== t ? t : "").length > 0 && (l = l.startsWith("backdrop-opacity") ? l : `backdrop-${l}`, o = !0);
    l = l.length > 0 ? l : e.replace(/^([a-zA-Z0-9_-]+)\((.+?)\)$/, (e, t, n) => {
      var l;
      var i;
      o = !0;
      return null !== (i = r[t]?.call(r, n)) && void 0 !== i ? i : a = !1;
    });
    return o ? l : "";
  });
  return a ? `backdrop-filter ${[...new Set(d)].join(" ")}` : `[backdrop-filter:${s(e)}]`;
}], ["backface-visibility", {
  visible: "[backface-visibility:visible]",
  hidden: "[backface-visibility:hidden]"
}], ["background", e => {
  var t;
  return null !== (t = Object.assign(Object.assign(Object.assign({}, b.get("background-attachment")), b.get("background-repeat")), {
    transparent: "bg-transparent",
    currentColor: "bg-current",
    currentcolor: "bg-current",
    none: "bg-none",
    bottom: "bg-bottom",
    center: "bg-center",
    left: "bg-left",
    "left bottom": "bg-left-bottom",
    "left top": "bg-left-top",
    right: "bg-right",
    "right bottom": "bg-right-bottom",
    "right top": "bg-right-top",
    top: "bg-top",
    auto: "bg-auto",
    cover: "bg-cover",
    contain: "bg-contain"
  })[e]) && void 0 !== t ? t : `bg-[${s(e)}]`;
}], ["background-attachment", {
  fixed: "bg-fixed",
  local: "bg-local",
  scroll: "bg-scroll"
}], ["background-blend-mode", {
  normal: "bg-blend-normal",
  multiply: "bg-blend-multiply",
  screen: "bg-blend-screen",
  overlay: "bg-blend-overlay",
  darken: "bg-blend-darken",
  lighten: "bg-blend-lighten",
  "color-dodge": "bg-blend-color-dodge",
  "color-burn": "bg-blend-color-burn",
  "hard-light": "bg-blend-hard-light",
  "soft-light": "bg-blend-soft-light",
  difference: "bg-blend-difference",
  exclusion: "bg-blend-exclusion",
  hue: "bg-blend-hue",
  saturation: "bg-blend-saturation",
  color: "bg-blend-color",
  luminosity: "bg-blend-luminosity"
}], ["background-clip", {
  "border-box": "bg-clip-border",
  "padding-box": "bg-clip-padding",
  "content-box": "bg-clip-content",
  text: "bg-clip-text"
}], ["background-color", e => {
  var t;
  return null !== (t = {
    transparent: "bg-transparent",
    currentColor: "bg-current",
    currentcolor: "bg-current"
  }[e]) && void 0 !== t ? t : d(e, !0) ? `bg-[${s(e)}]` : "";
}], ["background-image", e => {
  var t;
  return null !== (t = {
    none: "bg-none"
  }[e]) && void 0 !== t ? t : `bg-[${s(e)}]`;
}], ["background-origin", {
  "border-box": "bg-origin-border",
  "padding-box": "bg-origin-padding",
  "content-box": "bg-origin-content"
}], ["background-position", e => {
  var t;
  return null !== (t = {
    bottom: "bg-bottom",
    center: "bg-center",
    left: "bg-left",
    "left bottom": "bg-left-bottom",
    "left top": "bg-left-top",
    right: "bg-right",
    "right bottom": "bg-right-bottom",
    "right top": "bg-right-top",
    top: "bg-top"
  }[e]) && void 0 !== t ? t : `bg-[${s(e)}]`;
}], ["background-repeat", {
  repeat: "bg-repeat",
  "no-repeat": "bg-no-repeat",
  "repeat-x": "bg-repeat-x",
  "repeat-y": "bg-repeat-y",
  round: "bg-repeat-round",
  space: "bg-repeat-space"
}], ["background-size", e => {
  var t;
  return null !== (t = {
    auto: "bg-auto",
    cover: "bg-cover",
    contain: "bg-contain"
  }[e]) && void 0 !== t ? t : `[background-size:${s(e)}]`;
}], ["border", e => (e = e.replace(/\(.+?\)/, e => e.replace(/\s/g, ""))).split(" ").filter(e => "" !== e).map(t => {
  var r;
  var o;
  var a;
  return c(t) || d(t) ? null !== (o = null !== (r = {
    transparent: "border-transparent",
    currentColor: "border-current",
    currentcolor: "border-current"
  }[e]) && void 0 !== r ? r : b.get("border-style")[t]) && void 0 !== o ? o : `border-[${t}]` : null !== (a = b.get("border-style")[t]) && void 0 !== a ? a : "";
}).filter(e => "" !== e).join(" ")], ["border-bottom", e => `[border-bottom:${s(e)}]`], ["border-bottom-color", e => d(e, !0) ? `[border-bottom-color:${s(e)}]` : ""], ["border-bottom-left-radius", e => {
  var t;
  return null !== (t = {
    0: "rounded-bl-none",
    "0px": "rounded-bl-none"
  }[e]) && void 0 !== t ? t : c(e) ? `rounded-bl${(n && p(e) || `-[${s(e)}]`).replace(/null$/, "")}` : "";
}], ["border-bottom-right-radius", e => {
  var t;
  return null !== (t = {
    0: "rounded-br-none",
    "0px": "rounded-br-none"
  }[e]) && void 0 !== t ? t : c(e) ? `rounded-br${(n && p(e) || `-[${s(e)}]`).replace(/null$/, "")}` : "";
}], ["border-bottom-style", e => b.get("border-style")[e] ? `[border-bottom-style:${e}]` : ""], ["border-bottom-width", e => c(e) ? `border-b-[${s(e)}]` : ""], ["border-collapse", {
  collapse: "border-collapse",
  separate: "border-separate"
}], ["border-color", e => {
  var t;
  return null !== (t = {
    transparent: "border-transparent",
    currentColor: "border-current",
    currentcolor: "border-current"
  }[e]) && void 0 !== t ? t : d(e) ? `border-[${s(e)}]` : "";
}], ["border-image", e => `[border-image:${s(e)}]`], ["border-image-outset", e => `[border-image-outset:${s(e)}]`], ["border-image-repeat", e => `[border-image-repeat:${s(e)}]`], ["border-image-slice", e => `[border-image-slice:${s(e)}]`], ["border-image-source", e => `[border-image-source:${s(e)}]`], ["border-image-width", e => c(e) ? `[border-image-width:${s(e)}]` : ""], ["border-left", e => `[border-left:${s(e)}]`], ["border-left-color", e => d(e, !0) ? `[border-left-color:${s(e)}]` : ""], ["border-left-style", e => b.get("border-style")[e] ? `[border-left-style:${e}]` : ""], ["border-left-width", e => c(e) ? `border-l-[${s(e)}]` : ""], ["border-radius", e => {
  let t = {
    0: "rounded-none",
    "0px": "rounded-none"
  }[e];
  if (t) return t;
  if (e.includes("/")) return `rounded-[${s(e)}]`;
  let r = e.split(" ").filter(e => "" !== e);
  return r.filter(e => !c(e)).length > 0 ? "" : 1 === (r = r.map(e => (n && p(e) || `-[${e}]`).replace(/null$/, ""))).length ? `rounded${r[0]}` : 2 === r.length ? `rounded-tl${r[0]} rounded-br${r[0]} rounded-tr${r[1]} rounded-bl${r[1]}` : 3 === r.length ? `rounded-tl${r[0]} rounded-br${r[2]} rounded-tr${r[1]} rounded-bl${r[1]}` : 4 === r.length ? `rounded-tl${r[0]} rounded-br${r[2]} rounded-tr${r[1]} rounded-bl${r[3]}` : "";
}], ["border-right", e => `[border-right:${s(e)}]`], ["border-right-color", e => d(e, !0) ? `[border-right-color:${s(e)}]` : ""], ["border-right-style", e => b.get("border-style")[e] ? `[border-right-style:${e}]` : ""], ["border-right-width", e => c(e) ? `border-r-[${s(e)}]` : ""], ["border-spacing", e => c(e) ? `[border-spacing:${s(e)}]` : ""], ["border-style", {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double",
  none: "border-none"
}], ["border-top", e => `[border-top:${s(e)}]`], ["border-top-color", e => d(e, !0) ? `[border-top-color:${s(e)}]` : ""], ["border-top-left-radius", e => {
  var t;
  return null !== (t = {
    0: "rounded-tl-none",
    "0px": "rounded-tl-none"
  }[e]) && void 0 !== t ? t : c(e) ? `rounded-tl${(n && p(e) || `-[${s(e)}]`).replace(/null$/, "")}` : "";
}], ["border-top-right-radius", e => {
  var t;
  return null !== (t = {
    0: "rounded-tr-none",
    "0px": "rounded-tr-none"
  }[e]) && void 0 !== t ? t : c(e) ? `rounded-tr${(n && p(e) || `-[${s(e)}]`).replace(/null$/, "")}` : "";
}], ["border-top-style", e => b.get("border-style")[e] ? `[border-top-style:${e}]` : ""], ["border-top-width", e => c(e) ? `border-t-[${s(e)}]` : ""], ["border-width", e => c(e) ? `border-[${s(e)}]` : ""], ["bottom", e => {
  let t = i(e);
  return c(e) ? `${t[0]}bottom-${m(t[1], [o.vw, o.vh]) || `[${t[1]}]`}` : "";
}], ["box-align", {
  initial: "[box-align:initial]",
  start: "[box-align:inherit]",
  end: "[box-align:unset]",
  center: "[box-align:unset]",
  baseline: "[box-align:unset]",
  stretch: "[box-align:unset]"
}], ["box-decoration-break", {
  slice: "decoration-slice",
  clone: "decoration-clone"
}], ["box-direction", {
  initial: "[box-direction:initial]",
  normal: "[box-direction:normal]",
  reverse: "[box-direction:reverse]",
  inherit: "[box-direction:inherit]"
}], ["box-flex", e => `[box-flex:${s(e)}]`], ["box-flex-group", e => `[box-flex-group:${s(e)}]`], ["box-lines", {
  single: "[box-lines:single]",
  multiple: "[box-lines:multiple]",
  initial: "[box-lines:initial]"
}], ["box-ordinal-group", e => `[box-ordinal-group:${s(e)}]`], ["box-orient", {
  horizontal: "[box-orient:horizontal]",
  vertical: "[box-orient:vertical]",
  "inline-axis": "[box-orient:inline-axis]",
  "block-axis": "[box-orient:block-axis]",
  inherit: "[box-orient:inherit]",
  initial: "[box-orient:initial]"
}], ["box-pack", {
  start: "[box-pack:start]",
  end: "[box-pack:end]",
  center: "[box-pack:center]",
  justify: "[box-pack:justify]",
  initial: "[box-pack:initial]"
}], ["box-shadow", e => `[box-shadow:${s(e)}]`], ["box-sizing", {
  "border-box": "box-border",
  "content-box": "box-content"
}], ["caption-side", {
  top: "[caption-side:top]",
  bottom: "[caption-side:bottom]",
  inherit: "[caption-side:inherit]",
  initial: "[caption-side:initial]"
}], ["clear", {
  left: "clear-left",
  right: "clear-right",
  both: "clear-both",
  none: "clear-none"
}], ["clip", e => `[clip:${s(e)}]`], ["clip-path", e => `[clip-path:${s(e)}]`], ["color", e => {
  var t;
  return null !== (t = {
    transparent: "text-transparent",
    currentColor: "text-current",
    currentcolor: "text-current"
  }[e]) && void 0 !== t ? t : d(e, !0) ? `text-[${s(e)}]` : "";
}], ["color-scheme", e => `[color-scheme:${s(e)}]`], ["column-count", e => `[column-count:${s(e)}]`], ["column-fill", {
  balance: "[column-fill:balance]",
  auto: "[column-fill:auto]",
  initial: "[column-fill:initial]"
}], ["column-gap", e => {
  var t;
  return null !== (t = {
    0: "gap-x-0"
  }[e]) && void 0 !== t ? t : c(e) ? `gap-x-[${e}]` : "";
}], ["column-rule", e => `[column-rule:${s(e)}]`], ["column-rule-color", e => d(e, !0) ? `[column-rule-color:${s(e)}]` : ""], ["column-rule-style", {
  none: "[column-rule-style:none]",
  hidden: "[column-rule-style:hidden]",
  dotted: "[column-rule-style:dotted]",
  dashed: "[column-rule-style:dashed]",
  solid: "[column-rule-style:solid]",
  double: "[column-rule-style:double]",
  groove: "[column-rule-style:groove]",
  ridge: "[column-rule-style:ridge]",
  inset: "[column-rule-style:inset]",
  outset: "[column-rule-style:outset]",
  initial: "[column-rule-style:initial]"
}], ["column-rule-width", e => c(e) ? `[column-rule-width:${e}]` : ""], ["column-span", e => `[column-span:${s(e)}]`], ["column-width", e => c(e) ? `[column-width:${e}]` : ""], ["columns", e => `[columns:${s(e)}]`], ["contain-intrinsic-size", e => `[contain-intrinsic-size:${s(e)}]`], ["content", e => `content-[${s(e)}]`], ["content-visibility", e => `[content-visibility:${s(e)}]`], ["counter-increment", e => `[content-increment:${s(e)}]`], ["counter-reset", e => `[counter-reset:${s(e)}]`], ["counter-set", e => `[counter-set:${s(e)}]`], ["cursor", {
  auto: "cursor-auto",
  default: "cursor-default",
  pointer: "cursor-pointer",
  wait: "cursor-wait",
  text: "cursor-text",
  move: "cursor-move",
  help: "cursor-help",
  "not-allowed": "cursor-not-allowed"
}], ["direction", {
  ltr: "[direction:ltr]",
  rtl: "[direction:rtl]",
  inherit: "[direction:inherit]",
  initial: "[direction:initial]"
}], ["display", {
  block: "block",
  "inline-block": "inline-block",
  inline: "inline",
  flex: "flex",
  "inline-flex": "inline-flex",
  table: "table",
  "inline-table": "inline-table",
  "table-caption": "table-caption",
  "table-cell": "table-cell",
  "table-column": "table-column",
  "table-column-group": "table-column-group",
  "table-footer-group": "table-footer-group",
  "table-header-group": "table-header-group",
  "table-row-group": "table-row-group",
  "table-row": "table-row",
  "flow-root": "flow-root",
  grid: "grid",
  "inline-grid": "inline-grid",
  contents: "contents",
  "list-item": "list-item",
  none: "hidden"
}], ["empty-cells", {
  hide: "[empty-cells:hide]",
  show: "[empty-cells:show]",
  inherit: "[empty-cells:inherit]",
  initial: "[empty-cells:initial]"
}], ["fill", e => {
  var t;
  return null !== (t = {
    currentColor: "fill-current",
    currentcolor: "fill-current"
  }[e]) && void 0 !== t ? t : d(e, !0) ? `fill-[${s(e)}]` : "";
}], ["filter", e => {
  let t = {
    none: "filter-none"
  }[e];
  if (t) return t;
  let r = {
    blur: e => {
      var t;
      var r;
      return `blur-${null !== (r = l.blur?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    brightness: e => {
      var t;
      var r;
      return `brightness-${null !== (r = l.brightness?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    contrast: e => {
      var t;
      var r;
      return `contrast-${null !== (r = l.contrast?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    grayscale: e => {
      var t;
      var r;
      return `grayscale-${null !== (r = l.grayscale?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    "hue-rotate": e => {
      var t;
      var r;
      let o = i(e);
      return `${o[0]}hue-rotate-${null !== (r = l.grayscale?.[o[1]]) && void 0 !== r ? r : `[${o[1]}]`}`;
    },
    invert: e => {
      var t;
      var r;
      return `invert-${null !== (r = l.invert?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    saturate: e => {
      var t;
      var r;
      return `saturate-${null !== (r = l.saturate?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    },
    sepia: e => {
      var t;
      var r;
      return `sepia-${null !== (r = l.sepia?.[e]) && void 0 !== r ? r : `[${e}]`}`;
    }
  };
  let o = s(e).replace(/\(.+?\)/g, e => e.replace(/_/g, "")).split(")_").map(e => `${e})`);
  o[o.length - 1] = o[o.length - 1].slice(0, -1);
  let a = !0;
  let d = o.map(e => {
    var t;
    let o = !1;
    let l = "";
    n && (l = null !== (t = f(e)) && void 0 !== t ? t : "").length > 0 && (o = !0);
    l = l.length > 0 ? l : e.replace(/^([a-zA-Z0-9_-]+)\((.+?)\)$/, (e, t, n) => {
      var l;
      var i;
      o = !0;
      return null !== (i = r[t]?.call(r, n)) && void 0 !== i ? i : a = !1;
    });
    return o ? l : "";
  });
  return a ? `filter ${[...new Set(d)].join(" ")}` : `[filter:${s(e)}]`;
}], ["flex", e => {
  var t;
  return null !== (t = {
    "1 1 0%": "flex-1",
    "1 1 auto": "flex-auto",
    "0 1 auto": "flex-initial",
    none: "flex-none"
  }[e]) && void 0 !== t ? t : `flex-[${s(e)}]`;
}], ["flex-basis", e => c(e) ? `[flex-basis:${e}]` : ""], ["flex-direction", {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse"
}], ["flex-flow", e => `[flex-flow:${s(e)}]`], ["flex-grow", e => {
  var t;
  return c(e) ? null !== (t = {
    0: "flex-grow-0",
    1: "flex-grow"
  }[e]) && void 0 !== t ? t : `flex-grow-[${e}]` : "";
}], ["flex-shrink", e => {
  var t;
  return c(e) ? null !== (t = {
    0: "flex-shrink-0",
    1: "flex-shrink"
  }[e]) && void 0 !== t ? t : `flex-shrink-[${e}]` : "";
}], ["flex-wrap", {
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
  nowrap: "flex-nowrap"
}], ["float", {
  right: "float-right",
  left: "float-left",
  none: "float-none"
}], ["font", e => `[font:${s(e)}]`], ["font-family", e => `font-[${s(e)}]`], ["font-size", e => c(e) ? `text-[${e}]` : ""], ["font-size-adjust", e => c(e) ? `[font-size-adjust:${e}]` : ""], ["-webkit-font-smoothing", {
  antialiased: "antialiased",
  auto: "subpixel-antialiased"
}], ["-moz-osx-font-smoothing", {
  grayscale: "antialiased",
  auto: "subpixel-antialiased"
}], ["font-stretch", {
  wider: "[font-stretch:wider]",
  narrower: "[font-stretch:narrower]",
  "ultra-condensed": "[font-stretch:ultra-condensed]",
  "extra-condensed": "[font-stretch:extra-condensed]",
  condensed: "[font-stretch:condensed]",
  "semi-condensed": "[font-stretch:semi-condensed]",
  normal: "[font-stretch:normal]",
  "semi-expanded": "[font-stretch:semi-expanded]",
  expanded: "[font-stretch:expanded]",
  "extra-expanded": "[font-stretch:extra-expanded]",
  "ultra-expanded": "[font-stretch:ultra-expanded]",
  inherit: "[font-stretch:inherit]",
  initial: "[font-stretch:initial]"
}], ["font-style", {
  italic: "italic",
  normal: "not-italic"
}], ["font-variant", {
  normal: "[font-variant:normal]",
  "small-caps": "[font-variant:small-caps]",
  inherit: "[font-variant:inherit]",
  initial: "[font-variant:initial]"
}], ["font-variant-numeric", {
  normal: "normal-nums",
  ordinal: "ordinal",
  "slashed-zero": "slashed-zero",
  "lining-nums": "lining-nums",
  "oldstyle-nums": "oldstyle-nums",
  "proportional-nums": "proportional-nums",
  "tabular-nums": "tabular-nums",
  "diagonal-fractions": "diagonal-fractions",
  "stacked-fractions": "stacked-fractions"
}], ["font-variation-settings", e => `[font-variation-settings:${s(e)}]`], ["font-weight", e => c(e) ? `font-[${e}]` : ""], ["gap", e => {
  var t;
  return null !== (t = {
    0: "gap-0"
  }[e]) && void 0 !== t ? t : c(e) ? `gap-[${e}]` : "";
}], ["grid", e => `[grid:${s(e)}]`], ["grid-area", e => `[grid-area:${s(e)}]`], ["grid-auto-columns", e => {
  var t;
  return null !== (t = {
    auto: "auto-cols-auto",
    "min-content": "auto-cols-min",
    "max-content": "auto-cols-max",
    "minmax(0, 1fr)": "auto-cols-fr"
  }[e]) && void 0 !== t ? t : `auto-cols-[${s(e)}]`;
}], ["grid-auto-flow", e => {
  var t;
  return null !== (t = {
    row: "grid-flow-row",
    column: "grid-flow-col",
    row_dense: "grid-flow-row-dense",
    column_dense: "grid-flow-col-dense"
  }[s(e)]) && void 0 !== t ? t : "";
}], ["grid-auto-rows", e => {
  var t;
  return null !== (t = {
    auto: "auto-rows-auto",
    "min-content": "auto-rows-min",
    "max-content": "auto-rows-max",
    "minmax(0, 1fr)": "auto-rows-fr"
  }[e]) && void 0 !== t ? t : `auto-rows-[${s(e)}]`;
}], ["grid-column", e => {
  var t;
  return null !== (t = {
    auto: "col-auto",
    "span 1 / span 1": "col-span-1",
    "span 2 / span 2": "col-span-2",
    "span 3 / span 3": "col-span-3",
    "span 4 / span 4": "col-span-4",
    "span 5 / span 5": "col-span-5",
    "span 6 / span 6": "col-span-6",
    "span 7 / span 7": "col-span-7",
    "span 8 / span 8": "col-span-8",
    "span 9 / span 9": "col-span-9",
    "span 10 / span 10": "col-span-10",
    "span 11 / span 11": "col-span-11",
    "span 12 / span 12": "col-span-12",
    "1 / -1": "col-span-full"
  }[e]) && void 0 !== t ? t : `col-[${s(e)}]`;
}], ["grid-column-end", e => {
  var t;
  return null !== (t = {
    1: "col-end-1",
    2: "col-end-2",
    3: "col-end-3",
    4: "col-end-4",
    5: "col-end-5",
    6: "col-end-6",
    7: "col-end-7",
    8: "col-end-8",
    9: "col-end-9",
    10: "col-end-10",
    11: "col-end-11",
    12: "col-end-12",
    13: "col-end-13",
    auto: "col-end-auto"
  }[e]) && void 0 !== t ? t : `col-end-[${s(e)}]`;
}], ["grid-column-gap", e => {
  var t;
  return null !== (t = {
    0: "gap-x-0"
  }[e]) && void 0 !== t ? t : c(e) ? `gap-x-[${e}]` : "";
}], ["grid-column-start", e => {
  var t;
  return null !== (t = {
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
    5: "col-start-5",
    6: "col-start-6",
    7: "col-start-7",
    8: "col-start-8",
    9: "col-start-9",
    10: "col-start-10",
    11: "col-start-11",
    12: "col-start-12",
    13: "col-start-13",
    auto: "col-start-auto"
  }[e]) && void 0 !== t ? t : `col-start-[${s(e)}]`;
}], ["grid-gap", e => {
  var t;
  return null !== (t = {
    0: "gap-0"
  }[e]) && void 0 !== t ? t : c(e) ? `gap-[${e}]` : "";
}], ["grid-row", e => {
  var t;
  return null !== (t = {
    auto: "row-auto",
    "span 1 / span 1": "row-span-1",
    "span 2 / span 2": "row-span-2",
    "span 3 / span 3": "row-span-3",
    "span 4 / span 4": "row-span-4",
    "span 5 / span 5": "row-span-5",
    "span 6 / span 6": "row-span-6",
    "1 / -1": "row-span-full"
  }[e]) && void 0 !== t ? t : `row-[${s(e)}]`;
}], ["grid-row-end", e => {
  var t;
  return null !== (t = {
    1: "row-end-1",
    2: "row-end-2",
    3: "row-end-3",
    4: "row-end-4",
    5: "row-end-5",
    6: "row-end-6",
    7: "row-end-7",
    auto: "row-end-auto"
  }[e]) && void 0 !== t ? t : `row-end-[${s(e)}]`;
}], ["grid-row-gap", e => {
  var t;
  return null !== (t = {
    0: "gap-y-0"
  }[e]) && void 0 !== t ? t : c(e) ? `gap-y-[${e}]` : "";
}], ["grid-row-start", e => {
  var t;
  return null !== (t = {
    1: "row-start-1",
    2: "row-start-2",
    3: "row-start-3",
    4: "row-start-4",
    5: "row-start-5",
    6: "row-start-6",
    7: "row-start-7",
    auto: "row-start-auto"
  }[e]) && void 0 !== t ? t : `row-start-[${s(e)}]`;
}], ["grid-rows", e => `[grid-rows:${s(e)}]`], ["grid-template", e => `[grid-template:${s(e)}]`], ["grid-template-areas", e => `[grid-template-areas:${s(e)}]`], ["grid-template-columns", e => {
  var t;
  return null !== (t = {
    "repeat(1,minmax(0,1fr))": "grid-cols-1",
    "repeat(2,minmax(0,1fr))": "grid-cols-2",
    "repeat(3,minmax(0,1fr))": "grid-cols-3",
    "repeat(4,minmax(0,1fr))": "grid-cols-4",
    "repeat(5,minmax(0,1fr))": "grid-cols-5",
    "repeat(6,minmax(0,1fr))": "grid-cols-6",
    "repeat(7,minmax(0,1fr))": "grid-cols-7",
    "repeat(8,minmax(0,1fr))": "grid-cols-8",
    "repeat(9,minmax(0,1fr))": "grid-cols-9",
    "repeat(10,minmax(0,1fr))": "grid-cols-10",
    "repeat(11,minmax(0,1fr))": "grid-cols-11",
    "repeat(12,minmax(0,1fr))": "grid-cols-12",
    none: "grid-cols-none"
  }[s(e).replace(/_/g, "")]) && void 0 !== t ? t : `grid-cols-[${s(e)}]`;
}], ["grid-template-rows", e => {
  var t;
  return null !== (t = {
    "repeat(1,minmax(0,1fr))": "grid-rows-1",
    "repeat(2,minmax(0,1fr))": "grid-rows-2",
    "repeat(3,minmax(0,1fr))": "grid-rows-3",
    "repeat(4,minmax(0,1fr))": "grid-rows-4",
    "repeat(5,minmax(0,1fr))": "grid-rows-5",
    "repeat(6,minmax(0,1fr))": "grid-rows-6",
    none: "grid-rows-none"
  }[s(e).replace(/_/g, "")]) && void 0 !== t ? t : `grid-rows-[${s(e)}]`;
}], ["hanging-punctuation", {
  none: "[hanging-punctuation:none]",
  first: "[hanging-punctuation:first]",
  last: "[hanging-punctuation:last]",
  "allow-end": "[hanging-punctuation:allow-end]",
  "force-end": "[hanging-punctuation:force-end]",
  initial: "[hanging-punctuation:initial]"
}], ["height", e => c(e) ? `h-${n && u(e) || m(e, [o.vw]) || `[${e}]`}` : ""], ["icon", e => `[icon:${s(e)}]`], ["image-orientation", e => `[image-orientation:${s(e)}]`], ["justify-content", {
  "flex-start": "justify-start",
  "flex-end": "justify-end",
  center: "justify-center",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly"
}], ["justify-items", {
  start: "justify-items-start",
  end: "justify-items-end",
  center: "justify-items-center",
  stretch: "justify-items-stretch"
}], ["justify-self", {
  auto: "justify-self-auto",
  start: "justify-self-start",
  end: "justify-self-end",
  center: "justify-self-center",
  stretch: "justify-self-stretch"
}], ["left", e => {
  let t = i(e);
  return c(e) ? `${t[0]}left-${m(t[1], [o.vw, o.vh]) || `[${t[1]}]`}` : "";
}], ["letter-spacing", e => {
  var t;
  return null !== (t = {
    "-0.05em": "tracking-tighter",
    "-0.025em": "tracking-tight",
    "0em": "tracking-normal",
    "0.025em": "tracking-wide",
    "0.05em": "tracking-wider",
    "0.1em": "tracking-widest"
  }[e]) && void 0 !== t ? t : c(e) ? `tracking-[${e}]` : "";
}], ["line-height", e => {
  var t;
  return null !== (t = {
    1: "leading-none",
    2: "leading-loose",
    "1.25": "leading-tight",
    "1.375": "leading-snug",
    "1.5": "leading-normal",
    "1.625": "leading-relaxed"
  }[e]) && void 0 !== t ? t : c(e) ? `leading-[${e}]` : "";
}], ["list-style", e => `[list-style:${s(e)}]`], ["list-style-image", e => `[list-style-image:${s(e)}]`], ["list-style-position", e => {
  var t;
  return null !== (t = {
    inside: "list-inside",
    outside: "list-outside"
  }[e]) && void 0 !== t ? t : `[list-style-position:${s(e)}]`;
}], ["list-style-type", e => {
  var t;
  return null !== (t = {
    none: "list-none",
    disc: "list-disc",
    decimal: "list-decimal"
  }[e]) && void 0 !== t ? t : `list-[${s(e)}]`;
}], ["logical-height", e => c(e) ? `[logical-height:${e}]` : ""], ["logical-width", e => c(e) ? `[logical-width:${e}]` : ""], ["isolation", {
  isolate: "isolate",
  auto: "isolation-auto"
}], ["margin", e => {
  let t = (e => {
    let t = {
      0: "m_0",
      "0px": "m_0",
      auto: "m_auto"
    }[e];
    if (t) return t;
    let r = e.split(" ").filter(e => "" !== e);
    return r.filter(e => !c(e)).length > 0 ? "" : 1 === (r = n ? r.map(e => {
      var t;
      return null !== (t = u(e)) && void 0 !== t ? t : `[${e}]`;
    }) : r.map(e => `[${e}]`)).length || 1 === new Set(r).size ? `m_${r[0]}` : 2 === r.length ? `mx_${r[1]} my_${r[0]}` : 3 === r.length ? r[0] === r[2] ? `mx_${r[1]} my_${r[0]}` : `mt_${r[0]} mx_${r[1]} mb_${r[2]}` : 4 === r.length ? r[0] === r[2] ? r[1] === r[3] ? `mx_${r[1]} my_${r[0]}` : `ml_${r[3]} mr_${r[1]} my_${r[0]}` : r[1] === r[3] ? r[0] === r[2] ? `mx_${r[1]} my_${r[0]}` : `ml_${r[3]} mr_${r[1]} my_${r[0]}` : `mt_${r[0]} mr_${r[1]} mb_${r[2]} ml_${r[3]}` : "";
  })(e);
  return "" === t ? "" : t.split(" ").map(e => e.includes("-") ? `-${e.replace("-", "").replace("_", "-")}` : e.replace("_", "-")).join(" ");
}], ["margin-bottom", e => {
  var t;
  let r = i(e);
  return null !== (t = {
    0: "mb-0",
    "0px": "mb-0",
    auto: "mb-auto"
  }[e]) && void 0 !== t ? t : c(e) ? `${r[0]}mb-${n && u(r[1]) || `[${r[1]}]`}` : "";
}], ["margin-left", e => {
  var t;
  let r = i(e);
  return null !== (t = {
    0: "ml-0",
    "0px": "ml-0",
    auto: "ml-auto"
  }[e]) && void 0 !== t ? t : c(e) ? `${r[0]}ml-${n && u(r[1]) || `[${r[1]}]`}` : "";
}], ["margin-right", e => {
  var t;
  let r = i(e);
  return null !== (t = {
    0: "mr-0",
    "0px": "mr-0",
    auto: "mr-auto"
  }[e]) && void 0 !== t ? t : c(e) ? `${r[0]}mr-${n && u(r[1]) || `[${r[1]}]`}` : "";
}], ["margin-top", e => {
  var t;
  let r = i(e);
  return null !== (t = {
    0: "mt-0",
    "0px": "mt-0",
    auto: "mt-auto"
  }[e]) && void 0 !== t ? t : c(e) ? `${r[0]}mt-${n && u(r[1]) || `[${r[1]}]`}` : "";
}], ["mask", e => `[mask:${s(e)}]`], ["mask-clip", e => `[mask-clip:${s(e)}]`], ["mask-composite", e => `[mask-composite:${s(e)}]`], ["mask-image", e => `[mask-image:${s(e)}]`], ["mask-origin", e => `[mask-origin:${s(e)}]`], ["mask-position", e => `[mask-position:${s(e)}]`], ["mask-repeat", e => `[mask-repeat:${s(e)}]`], ["mask-size", e => `[mask-size:${s(e)}]`], ["max-height", e => {
  var t;
  return c(e) ? null !== (t = {
    "0px": "max-h-0",
    "100%": "max-h-full",
    "100vh": "max-h-screen"
  }[e]) && void 0 !== t ? t : `max-h-[${e}]` : "";
}], ["max-width", e => {
  var t;
  return c(e) ? null !== (t = {
    none: "max-w-none",
    "100%": "max-w-full",
    "min-content": "max-w-min",
    "max-content": "max-w-max"
  }[e]) && void 0 !== t ? t : `max-w-[${e}]` : "";
}], ["min-height", e => {
  var t;
  return c(e) ? null !== (t = {
    "0px": "min-h-0",
    "100%": "min-h-full",
    "100vh": "min-h-screen"
  }[e]) && void 0 !== t ? t : `min-h-[${e}]` : "";
}], ["min-width", e => {
  var t;
  return c(e) ? null !== (t = {
    "0px": "min-w-0",
    "100%": "min-w-full",
    "min-content": "min-w-min",
    "max-content": "min-w-max"
  }[e]) && void 0 !== t ? t : `min-w-[${e}]` : "";
}], ["mix-blend-mode", {
  normal: "mix-blend-normal",
  multiply: "mix-blend-multiply",
  screen: "mix-blend-screen",
  overlay: "mix-blend-overlay",
  darken: "mix-blend-darken",
  lighten: "mix-blend-lighten",
  "color-dodge": "mix-blend-color-dodge",
  "color-burn": "mix-blend-color-burn",
  "hard-light": "mix-blend-hard-light",
  "soft-light": "mix-blend-soft-light",
  difference: "mix-blend-difference",
  exclusion: "mix-blend-exclusion",
  hue: "mix-blend-hue",
  saturation: "mix-blend-saturation",
  color: "mix-blend-color",
  luminosity: "mix-blend-luminosity"
}], ["nav-down", e => `[nav-down:${s(e)}]`], ["nav-index", e => c(e) ? `[nav-index:${e}]` : ""], ["nav-left", e => c(e) ? `[nav-left:${e}]` : ""], ["nav-right", e => c(e) ? `[nav-right:${e}]` : ""], ["nav-up", e => c(e) ? `[nav-up:${e}]` : ""], ["object-fit", {
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  none: "object-none",
  "scale-down": "object-scale-down"
}], ["object-position", e => {
  var t;
  return null !== (t = {
    bottom: "object-bottom",
    center: "object-center",
    left: "object-left",
    left_bottom: "object-left-bottom",
    left_top: "object-left-top",
    right: "object-right",
    right_bottom: "object-right-bottom",
    right_top: "object-right-top",
    top: "object-top"
  }[s(e)]) && void 0 !== t ? t : "";
}], ["opacity", e => {
  var t;
  return null !== (t = {
    0: "opacity-0",
    1: "opacity-100",
    "0.05": "opacity-5",
    "0.1": "opacity-10",
    "0.2": "opacity-20",
    "0.25": "opacity-25",
    "0.3": "opacity-30",
    "0.4": "opacity-40",
    "0.5": "opacity-50",
    "0.6": "opacity-60",
    "0.7": "opacity-70",
    "0.75": "opacity-75",
    "0.8": "opacity-80",
    "0.9": "opacity-90",
    "0.95": "opacity-95"
  }[e]) && void 0 !== t ? t : c(e) ? `opacity-[${e}]` : "";
}], ["order", e => {
  var t;
  return null !== (t = {
    0: "order-none",
    1: "order-1",
    2: "order-2",
    3: "order-3",
    4: "order-4",
    5: "order-5",
    6: "order-6",
    7: "order-7",
    8: "order-8",
    9: "order-9",
    10: "order-10",
    11: "order-11",
    12: "order-12",
    9999: "order-last",
    "-9999": "order-first"
  }[e]) && void 0 !== t ? t : c(e) ? `order-[${e}]` : "";
}], ["outline", e => `outline-[${s(e)}]`], ["outline-color", e => d(e, !0) ? `outline-[${s(e)}]` : ""], ["outline-offset", e => c(e) ? `outline-offset-[${e}]` : ""], ["outline-style", {
  none: "outline-[none]",
  dotted: "outline-dotted",
  dashed: "outline-dashed",
  solid: "[outline-style:solid]",
  double: "outline-double",
  groove: "[outline-style:groove]",
  ridge: "[outline-style:ridge]",
  inset: "[outline-style:inset]",
  outset: "[outline-style:outset]"
}], ["outline-width", e => c(e) ? `outline-[${e}]` : ""], ["overflow", {
  auto: "overflow-auto",
  hidden: "overflow-hidden",
  visible: "overflow-visible",
  scroll: "overflow-scroll"
}], ["overflow-anchor", e => `[overflow-anchor:${s(e)}]`], ["overflow-wrap", e => {
  var t;
  return null !== (t = {
    "break-word": "break-words"
  }[e]) && void 0 !== t ? t : `[overflow-wrap:${s(e)}]`;
}], ["overflow-x", {
  auto: "overflow-x-auto",
  hidden: "overflow-x-hidden",
  visible: "overflow-x-visible",
  scroll: "overflow-x-scroll"
}], ["overflow-y", {
  auto: "overflow-y-auto",
  hidden: "overflow-y-hidden",
  visible: "overflow-y-visible",
  scroll: "overflow-y-scroll"
}], ["overscroll-behavior", {
  auto: "overscroll-auto",
  contain: "overscroll-contain",
  none: "overscroll-none"
}], ["overscroll-behavior-x", {
  auto: "overscroll-x-auto",
  contain: "overscroll-x-contain",
  none: "overscroll-x-none"
}], ["overscroll-behavior-y", {
  auto: "overscroll-y-auto",
  contain: "overscroll-y-contain",
  none: "overscroll-y-none"
}], ["padding", e => {
  let t = {
    0: "p-0",
    "0px": "p-0"
  }[e];
  if (t) return t;
  let r = e.split(" ").filter(e => "" !== e);
  return r.filter(e => !c(e)).length > 0 ? "" : 1 === (r = n ? r.map(e => {
    var t;
    return null !== (t = u(e)) && void 0 !== t ? t : `[${e}]`;
  }) : r.map(e => `[${e}]`)).length || 1 === new Set(r).size ? `p-${r[0]}` : 2 === r.length ? `px-${r[1]} py-${r[0]}` : 3 === r.length ? r[0] === r[2] ? `px-${r[1]} py-${r[0]}` : `pt-${r[0]} px-${r[1]} pb-${r[2]}` : 4 === r.length ? r[0] === r[2] ? r[1] === r[3] ? `px-${r[1]} py-${r[0]}` : `pl-${r[3]} pr-${r[1]} py-${r[0]}` : r[1] === r[3] ? r[0] === r[2] ? `px-${r[1]} py-${r[0]}` : `pl-${r[3]} pr-${r[1]} py-${r[0]}` : `pt-${r[0]} pr-${r[1]} pb-${r[2]} pl-${r[3]}` : "";
}], ["padding-bottom", e => {
  var t;
  return null !== (t = {
    0: "pb-0",
    "0px": "pb-0"
  }[e]) && void 0 !== t ? t : c(e) ? `pb-${n && u(e) || `[${e}]`}` : "";
}], ["padding-left", e => {
  var t;
  return null !== (t = {
    0: "pl-0",
    "0px": "pl-0"
  }[e]) && void 0 !== t ? t : c(e) ? `pl-${n && u(e) || `[${e}]`}` : "";
}], ["padding-right", e => {
  var t;
  return null !== (t = {
    0: "pr-0",
    "0px": "pr-0"
  }[e]) && void 0 !== t ? t : c(e) ? `pr-${n && u(e) || `[${e}]`}` : "";
}], ["padding-top", e => {
  var t;
  return null !== (t = {
    0: "pt-0",
    "0px": "pt-0"
  }[e]) && void 0 !== t ? t : c(e) ? `pt-${n && u(e) || `[${e}]`}` : "";
}], ["page-break-after", {
  auto: "[page-break-after:auto]",
  always: "[page-break-after:always]",
  avoid: "[page-break-after:avoid]",
  left: "[page-break-after:left]",
  right: "[page-break-after:right]",
  inherit: "[page-break-after:inherit]",
  initial: "[page-break-after:initial]"
}], ["page-break-before", {
  auto: "[page-break-before:auto]",
  always: "[page-break-before:always]",
  avoid: "[page-break-before:avoid]",
  left: "[page-break-before:left]",
  right: "[page-break-before:right]",
  inherit: "[page-break-before:inherit]",
  initial: "[page-break-before:initial]"
}], ["page-break-inside", {
  auto: "[page-break-inside:auto]",
  avoid: "[page-break-inside:avoid]",
  inherit: "[page-break-inside:inherit]",
  initial: "[page-break-inside:initial]"
}], ["perspective", e => c(e) ? `[perspective:${e}]` : ""], ["perspective-origin", e => `[perspective-origin:${s(e)}]`], ["place-content", {
  center: "place-content-center",
  start: "place-content-start",
  end: "place-content-end",
  "space-between": "place-content-between",
  "space-around": "place-content-around",
  "space-evenly": "place-content-evenly",
  stretch: "place-content-stretch"
}], ["place-items", {
  start: "place-items-start",
  end: "place-items-end",
  center: "place-items-center",
  stretch: "place-items-stretch"
}], ["place-self", {
  auto: "place-self-auto",
  start: "place-self-start",
  end: "place-self-end",
  center: "place-self-center",
  stretch: "place-self-stretch"
}], ["pointer-events", {
  none: "pointer-events-none",
  auto: "pointer-events-auto"
}], ["position", {
  static: "static",
  fixed: "fixed",
  absolute: "absolute",
  relative: "relative",
  sticky: "sticky"
}], ["punctuation-trim", {
  none: "[punctuation-trim:none]",
  start: "[punctuation-trim:start]",
  end: "[punctuation-trim:end]",
  "allow-end": "[punctuation-trim:allow-end]",
  adjacent: "[punctuation-trim:adjacent]",
  initial: "[punctuation-trim:initial]"
}], ["quotes", e => `[quotes:${s(e)}]`], ["resize", {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
}], ["right", e => {
  let t = i(e);
  return c(e) ? `${t[0]}right-${m(t[1], [o.vw, o.vh]) || `[${t[1]}]`}` : "";
}], ["rotate", e => `[rotate:${s(e)}]`], ["row-gap", e => {
  var t;
  return null !== (t = {
    0: "gap-y-0"
  }[e]) && void 0 !== t ? t : c(e) ? `gap-y-[${e}]` : "";
}], ["scroll-snap-align", e => `[scroll-snap-align:${s(e)}]`], ["scroll-snap-stop", e => `[scroll-snap-stop:${s(e)}]`], ["scroll-snap-type", e => `[scroll-snap-type:${s(e)}]`], ["scrollbar-width", e => c(e) ? `[scrollbar-width:${e}]` : ""], ["shape-image-threshold", e => `[shape-image-threshold:${s(e)}]`], ["shape-margin", e => `[shape-margin:${s(e)}]`], ["shape-outside", e => `[shape-outside:${s(e)}]`], ["stroke", e => {
  var t;
  return null !== (t = {
    currentColor: "stroke-current",
    currentcolor: "stroke-current"
  }[e]) && void 0 !== t ? t : d(e, !0) ? `stroke-[${s(e)}]` : "";
}], ["stroke-width", e => c(e) ? `stroke-[${e}]` : ""], ["tab-size", e => c(e) ? `[tab-size:${e}]` : ""], ["table-layout", {
  auto: "table-auto",
  fixed: "table-fixed"
}], ["target", e => `[target:${s(e)}]`], ["target-name", e => `[target-name:${s(e)}]`], ["target-new", {
  window: "[target-new:window]",
  tab: "[target-new:tab]",
  none: "[target-new:none]",
  initial: "[target-new:initial]"
}], ["target-position", {
  above: "[target-position:above]",
  behind: "[target-position:behind]",
  front: "[target-position:front]",
  back: "[target-position:back]",
  initial: "[target-position:initial]"
}], ["text-align", {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify"
}], ["text-align-last", {
  auto: "[text-align-last:auto]",
  left: "[text-align-last:left]",
  right: "[text-align-last:right]",
  center: "[text-align-last:center]",
  justify: "[text-align-last:justify]",
  start: "[text-align-last:start]",
  end: "[text-align-last:end]",
  initial: "[text-align-last:initial]",
  inherit: "[text-align-last:inherit]"
}], ["text-decoration", {
  underline: "underline",
  "line-through": "line-through",
  none: "no-underline"
}], ["text-decoration-color", e => d(e, !0) ? `[text-decoration-color:${s(e)}]` : ""], ["text-decoration-line", {
  none: "[text-decoration-line:none]",
  underline: "[text-decoration-line:underline]",
  overline: "[text-decoration-line:overline]",
  "line-through": "[text-decoration-line:line-through]",
  initial: "[text-decoration-line:initial]",
  inherit: "[text-decoration-line:inherit]"
}], ["text-decoration-skip-ink", e => `[text-decoration-skip-ink:${s(e)}]`], ["text-decoration-style", {
  solid: "[text-decoration-style:solid]",
  double: "[text-decoration-style:double]",
  dotted: "[text-decoration-style:dotted]",
  dashed: "[text-decoration-style:dashed]",
  wavy: "[text-decoration-style:wavy]",
  initial: "[text-decoration-style:initial]",
  inherit: "[text-decoration-style:inherit]"
}], ["text-emphasis-color", e => d(e, !0) ? `[text-emphasis-color:${s(e)}]` : ""], ["text-emphasis-position", e => `[text-emphasis-position:${s(e)}]`], ["text-emphasis-style", e => `[text-emphasis-style:${s(e)}]`], ["text-indent", e => c(e) ? `[text-indent:${e}]` : ""], ["text-justify", {
  auto: "[text-justify:auto]",
  none: "[text-justify:none]",
  "inter-word": "[text-justify:inter-word]",
  "inter-ideograph": "[text-justify:inter-ideograph]",
  "inter-cluster": "[text-justify:inter-cluster]",
  distribute: "[text-justify:distribute]",
  kashida: "[text-justify:kashida]",
  initial: "[text-justify:initial]"
}], ["text-orientation", e => `[text-orientation:${s(e)}]`], ["text-outline", e => `[text-outline:${s(e)}]`], ["text-overflow", e => {
  var t;
  return null !== (t = {
    ellipsis: "overflow-ellipsis",
    clip: "overflow-clip"
  }[e]) && void 0 !== t ? t : `[text-overflow:${s(e)}]`;
}], ["text-shadow", e => `[text-shadow:${s(e)}]`], ["text-transform", {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  none: "normal-case"
}], ["text-underline-offset", e => `[text-underline-offset:${s(e)}]`], ["text-underline-position", e => `[text-underline-position:${s(e)}]`], ["text-wrap", {
  normal: "[text-wrap:normal]",
  none: "[text-wrap:none]",
  unrestricted: "[text-wrap:unrestricted]",
  suppress: "[text-wrap:suppress]",
  initial: "[text-wrap:initial]"
}], ["top", e => {
  let t = i(e);
  return c(e) ? `${t[0]}top-${m(t[1], [o.vw, o.vh]) || `[${t[1]}]`}` : "";
}], ["transform", e => {
  let t = {
    none: "transform-none"
  }[e];
  if (t) return t;
  let r = {
    0: "0",
    1: "100",
    ".5": "50",
    ".75": "75",
    ".9": "90",
    ".95": "95",
    "1.05": "105",
    "1.1": "110",
    "1.25": "125",
    "1.5": "150"
  };
  let o = {
    "0deg": "0",
    "1deg": "1",
    "2deg": "2",
    "3deg": "3",
    "6deg": "6",
    "12deg": "12",
    "45deg": "45",
    "90deg": "90",
    "180deg": "180"
  };
  let a = {
    "0deg": "0",
    "1deg": "1",
    "2deg": "2",
    "3deg": "3",
    "6deg": "6",
    "12deg": "12"
  };
  let d = {
    "0px": "0",
    "1px": "px",
    "0.125rem": "0.5",
    "0.25rem": "1",
    "0.375rem": "1.5",
    "0.5rem": "2",
    "0.625rem": "2.5",
    "0.75rem": "3",
    "0.875rem": "3.5",
    "1rem": "4",
    "1.25rem": "5",
    "1.5rem": "6",
    "1.75rem": "7",
    "2rem": "8",
    "2.25rem": "9",
    "2.5rem": "10",
    "2.75rem": "11",
    "3rem": "12",
    "3.5rem": "14",
    "4rem": "16",
    "5rem": "20",
    "6rem": "24",
    "7rem": "28",
    "8rem": "32",
    "9rem": "36",
    "10rem": "40",
    "11rem": "44",
    "12rem": "48",
    "13rem": "52",
    "14rem": "56",
    "15rem": "60",
    "16rem": "64",
    "18rem": "72",
    "20rem": "80",
    "24rem": "96",
    "50%": "1/2",
    "33.33%": "1/3",
    "66.66%": "2/3",
    "25%": "1/4",
    "75%": "3/4",
    "100%": "full"
  };
  let c = {
    scale: e => {
      var t;
      let o = e.split(",");
      return 3 === o.length ? void 0 : o[0] === o[1] || 1 === o.length ? `scale-${l.scale?.[o[0]] || n && r[o[0]] || `[${o[0]}]`}` : o.map((e, t) => {
        var o;
        return `scale-${0 === t ? "x" : "y"}-${l.scale?.[e] || n && r[e] || `[${e}]`}`;
      }).join(" ");
    },
    scaleX: e => {
      var t;
      return `scale-x-${l.scale?.[e] || n && r[e] || `[${e}]`}`;
    },
    scaleY: e => {
      var t;
      return `scale-y-${l.scale?.[e] || n && r[e] || `[${e}]`}`;
    },
    rotate: e => {
      var t;
      var r;
      let a = e.split(",");
      if (a.length > 1) {
        if (3 === a.length && ["0", "0deg"].findIndex(e => e === a[0]) > -1 && ["0", "0deg"].findIndex(e => e === a[1]) > -1) {
          let e = i(a[2]);
          return `${e[0]}rotate-${l.rotate?.[e[1]] || n && o[e[1]] || `[${e[1]}]`}`;
        }
        return;
      }
      let s = i(a[0]);
      return `${s[0]}rotate-${l.rotate?.[s[1]] || n && o[s[1]] || `[${s[1]}]`}`;
    },
    rotateZ: e => {
      var t;
      let r = i(e);
      return `${r[0]}rotate-${l.rotate?.[r[1]] || n && o[r[1]] || `[${r[1]}]`}`;
    },
    translate: e => {
      let t = e.split(",");
      if (3 !== t.length) return t.map((e, t) => {
        var r;
        let o = i(e);
        /^\d+\.[1-9]{2,}%$/.test(o[1]) && (o[1] = `${Number(o[1].slice(0, -1)).toFixed(6).replace(/(\.[1-9]{2})\d+/, "$1")}%`);
        return `${o[0]}translate-${0 === t ? "x" : "y"}-${l.translate?.[o[1]] || n && d[o[1]] || `[${o[1]}]`}`;
      }).join(" ");
    },
    translateX: e => {
      var t;
      let r = i(e);
      /^\d+\.[1-9]{2,}%$/.test(r[1]) && (r[1] = `${Number(r[1].slice(0, -1)).toFixed(6).replace(/(\.[1-9]{2})\d+/, "$1")}%`);
      return `${r[0]}translate-x-${l.translate?.[r[1]] || n && d[r[1]] || `[${r[1]}]`}`;
    },
    translateY: e => {
      var t;
      let r = i(e);
      /^\d+\.[1-9]{2,}%$/.test(r[1]) && (r[1] = `${Number(r[1].slice(0, -1)).toFixed(6).replace(/(\.[1-9]{2})\d+/, "$1")}%`);
      return `${r[0]}translate-y-${l.translate?.[r[1]] || n && d[r[1]] || `[${r[1]}]`}`;
    },
    skew: e => {
      let t = e.split(",");
      if (3 !== t.length) return t.map((e, t) => {
        var r;
        let o = i(e);
        return `${o[0]}skew-${0 === t ? "x" : "y"}-${l.skew?.[o[1]] || n && a[o[1]] || `[${o[1]}]`}`;
      }).join(" ");
    },
    skewX: e => {
      var t;
      let r = i(e);
      return `${r[0]}skew-x-${l.skew?.[r[1]] || n && a[r[1]] || `[${r[1]}]`}`;
    },
    skewY: e => {
      var t;
      let r = i(e);
      return `${r[0]}skew-y-${l.skew?.[r[1]] || n && a[r[1]] || `[${r[1]}]`}`;
    }
  };
  let m = s(e).replace(/\(.+?\)/g, e => e.replace(/_/g, "")).split(")_").map(e => `${e})`);
  m[m.length - 1] = m[m.length - 1].slice(0, -1);
  let u = !0;
  let p = m.map(e => {
    let t = !1;
    let r = e.replace(/^([a-zA-Z0-9_-]+)\((.+?)\)$/, (e, r, o) => {
      var a;
      var n;
      t = !0;
      let l = null !== (n = c[r]?.call(c, o)) && void 0 !== n ? n : u = !1;
      return "string" == typeof l ? l : "";
    });
    return t ? r : "";
  });
  return u ? `${[...new Set(p)].join(" ")}` : `[transform:${s(e)}]`;
}], ["transform-origin", e => {
  var t;
  return null !== (t = {
    center: "origin-center",
    top: "origin-top",
    top_right: "origin-top-right",
    right: "origin-right",
    bottom_right: "origin-bottom-right",
    bottom: "origin-bottom",
    bottom_left: "origin-bottom-left",
    left: "origin-left",
    top_left: "origin-top-left"
  }[s(e)]) && void 0 !== t ? t : `origin-[${s(e)}]`;
}], ["transform-style", {
  flat: "[transform-style:flat]",
  "preserve-3d": "[transform-style:preserve-3d]",
  initial: "[transform-style:initial]"
}], ["transition", e => "none" === e ? "transition-none" : `[transition:${s(e)}]`], ["transition-delay", e => {
  var t;
  return null !== (t = {
    "75ms": "delay-75",
    "100ms": "delay-100",
    "150ms": "delay-150",
    "200ms": "delay-200",
    "300ms": "delay-300",
    "500ms": "delay-500",
    "700ms": "delay-700",
    "1000ms": "delay-1000"
  }[e = e.replace(/^([.\d]+)s$/, (e, t) => `${(1e3 * t).toFixed(6).replace(/\.?0+$/, "")}ms`)]) && void 0 !== t ? t : /^[.\d]+[ms]{1,2}$/.test(e) ? `delay-[${s(e)}]` : "";
}], ["transition-duration", e => {
  var t;
  return null !== (t = {
    "75ms": "duration-75",
    "100ms": "duration-100",
    "150ms": "duration-150",
    "200ms": "duration-200",
    "300ms": "duration-300",
    "500ms": "duration-500",
    "700ms": "duration-700",
    "1000ms": "duration-1000"
  }[e = e.replace(/^([.\d]+)s$/, (e, t) => `${(1e3 * t).toFixed(6).replace(/\.?0+$/, "")}ms`)]) && void 0 !== t ? t : /^[.\d]+[ms]{1,2}$/.test(e) ? `duration-[${s(e)}]` : "";
}], ["transition-property", e => `[transition-property:${s(e)}]`], ["transition-timing-function", e => {
  var t;
  return null !== (t = {
    linear: "ease-linear",
    "cubic-bezier(0.4,0,1,1)": "ease-in",
    "cubic-bezier(0,0,0.2,1)": "ease-out",
    "cubic-bezier(0.4,0,0.2,1)": "ease-in-out",
    ease: "ease-[ease]",
    "ease-in": "ease-in",
    "ease-out": "ease-out",
    "ease-in-out": "ease-in-out"
  }[e = e.replace(/\s/g, "")]) && void 0 !== t ? t : e.startsWith("cubic-bezier") ? `ease-[${s(e)}]` : "";
}], ["unicode-bidi", {
  normal: "[unicode-bidi:normal]",
  embed: "[unicode-bidi:embed]",
  "bidi-override": "[unicode-bidi:bidi-override]",
  initial: "[unicode-bidi:initial]",
  inherit: "[unicode-bidi:inherit]"
}], ["user-select", {
  none: "select-none",
  text: "select-text",
  all: "select-all",
  auto: "select-auto"
}], ["vertical-align", {
  baseline: "align-baseline",
  top: "align-top",
  middle: "align-middle",
  bottom: "align-bottom",
  "text-top": "align-text-top",
  "text-bottom": "align-text-bottom"
}], ["visibility", {
  visible: "visible",
  hidden: "invisible"
}], ["white-space", {
  normal: "whitespace-normal",
  nowrap: "whitespace-nowrap",
  pre: "whitespace-pre",
  "pre-line": "whitespace-pre-line",
  "pre-wrap": "whitespace-pre-wrap"
}], ["width", e => c(e) ? `w-${n && u(e) || m(e, [o.vh]) || `[${e}]`}` : ""], ["word-break", {
  "break-all": "break-all",
  normal: "[word-break:normal]",
  "keep-all": "[word-break:keep-all]",
  initial: "[word-break:initial]"
}], ["word-spacing", e => c(e) ? `[word-spacing:${e}]` : ""], ["word-wrap", {
  normal: "[word-wrap:normal]",
  "break-word": "[word-wrap:break-word]",
  initial: "[word-wrap:initial]"
}], ["writing-mode", e => `[writing-mode:${s(e)}]`], ["z-index", e => {
  var t;
  return null !== (t = {
    0: "z-0",
    10: "z-10",
    20: "z-20",
    30: "z-30",
    40: "z-40",
    50: "z-50",
    auto: "z-auto"
  }[e]) && void 0 !== t ? t : "number" == typeof e ? `z-[${e}]` : "";
}]]);
let g = e => {
  e = e.replace(/[\n\r]/g, "").trim();
  let t = [];
  let r = 0;
  let o = !0;
  let a = 0;
  for (let n = 0; n < e.length; n++) {
    let l = e[n];
    if (["{", "}"].includes(l)) {
      if ("{" === l) 0 == a++ ? o = !1 : t[r][o ? "selectorName" : "cssCode"] += l;else if (0 == --a) {
        let e = t[r].cssCode;
        "string" == typeof e && e.includes("{") && (t[r].cssCode = g(e));
        r++;
        o = !0;
      } else t[r][o ? "selectorName" : "cssCode"] += l;
    } else {
      t[r] || (t[r] = {
        selectorName: "",
        cssCode: ""
      });
      t[r][o ? "selectorName" : "cssCode"] += l;
    }
  }
  return t.map(e => ({
    selectorName: e.selectorName.trim(),
    cssCode: "string" == typeof e.cssCode ? e.cssCode.trim() : e.cssCode
  }));
};
let h = {
  "@media(min-width:640px)": "sm",
  "@media(min-width:768px)": "md",
  "@media(min-width:1024px)": "lg",
  "@media(min-width:1280px)": "xl",
  "@media(min-width:1536px)": "2xl",
  "@media_not_all_and(min-width:640px)": "max-sm",
  "@media_not_all_and(min-width:768px)": "max-md",
  "@media_not_all_and(min-width:1024px)": "max-lg",
  "@media_not_all_and(min-width:1280px)": "max-xl",
  "@media_not_all_and(min-width:1536px)": "max-2xl"
};
let x = {
  top: {
    "0px": "top-0",
    "1px": "top-px",
    "0.125rem": "top-0.5",
    "0.25rem": "top-1",
    "0.375rem": "top-1.5",
    "0.5rem": "top-2",
    "0.625rem": "top-2.5",
    "0.75rem": "top-3",
    "0.875rem": "top-3.5",
    "1rem": "top-4",
    "1.25rem": "top-5",
    "1.5rem": "top-6",
    "1.75rem": "top-7",
    "2rem": "top-8",
    "2.25rem": "top-9",
    "2.5rem": "top-10",
    "2.75rem": "top-11",
    "3rem": "top-12",
    "3.5rem": "top-14",
    "4rem": "top-16",
    "5rem": "top-20",
    "6rem": "top-24",
    "7rem": "top-28",
    "8rem": "top-32",
    "9rem": "top-36",
    "10rem": "top-40",
    "11rem": "top-44",
    "12rem": "top-48",
    "13rem": "top-52",
    "14rem": "top-56",
    "15rem": "top-60",
    "16rem": "top-64",
    "18rem": "top-72",
    "20rem": "top-80",
    "24rem": "top-96",
    auto: "top-auto",
    "50%": "top-2/4",
    "33.333333%": "top-1/3",
    "66.666667%": "top-2/3",
    "25%": "top-1/4",
    "75%": "top-3/4",
    "100%": "top-full",
    "-1px": "-top-px",
    "-0.125rem": "-top-0.5",
    "-0.25rem": "-top-1",
    "-0.375rem": "-top-1.5",
    "-0.5rem": "-top-2",
    "-0.625rem": "-top-2.5",
    "-0.75rem": "-top-3",
    "-0.875rem": "-top-3.5",
    "-1rem": "-top-4",
    "-1.25rem": "-top-5",
    "-1.5rem": "-top-6",
    "-1.75rem": "-top-7",
    "-2rem": "-top-8",
    "-2.25rem": "-top-9",
    "-2.5rem": "-top-10",
    "-2.75rem": "-top-11",
    "-3rem": "-top-12",
    "-3.5rem": "-top-14",
    "-4rem": "-top-16",
    "-5rem": "-top-20",
    "-6rem": "-top-24",
    "-7rem": "-top-28",
    "-8rem": "-top-32",
    "-9rem": "-top-36",
    "-10rem": "-top-40",
    "-11rem": "-top-44",
    "-12rem": "-top-48",
    "-13rem": "-top-52",
    "-14rem": "-top-56",
    "-15rem": "-top-60",
    "-16rem": "-top-64",
    "-18rem": "-top-72",
    "-20rem": "-top-80",
    "-24rem": "-top-96",
    "-50%": "-top-2/4",
    "-33.333333%": "-top-1/3",
    "-66.666667%": "-top-2/3",
    "-25%": "-top-1/4",
    "-75%": "-top-3/4",
    "-100%": "-top-full"
  },
  bottom: {
    "0px": "bottom-0",
    "1px": "bottom-px",
    "0.125rem": "bottom-0.5",
    "0.25rem": "bottom-1",
    "0.375rem": "bottom-1.5",
    "0.5rem": "bottom-2",
    "0.625rem": "bottom-2.5",
    "0.75rem": "bottom-3",
    "0.875rem": "bottom-3.5",
    "1rem": "bottom-4",
    "1.25rem": "bottom-5",
    "1.5rem": "bottom-6",
    "1.75rem": "bottom-7",
    "2rem": "bottom-8",
    "2.25rem": "bottom-9",
    "2.5rem": "bottom-10",
    "2.75rem": "bottom-11",
    "3rem": "bottom-12",
    "3.5rem": "bottom-14",
    "4rem": "bottom-16",
    "5rem": "bottom-20",
    "6rem": "bottom-24",
    "7rem": "bottom-28",
    "8rem": "bottom-32",
    "9rem": "bottom-36",
    "10rem": "bottom-40",
    "11rem": "bottom-44",
    "12rem": "bottom-48",
    "13rem": "bottom-52",
    "14rem": "bottom-56",
    "15rem": "bottom-60",
    "16rem": "bottom-64",
    "18rem": "bottom-72",
    "20rem": "bottom-80",
    "24rem": "bottom-96",
    auto: "bottom-auto",
    "50%": "bottom-2/4",
    "33.333333%": "bottom-1/3",
    "66.666667%": "bottom-2/3",
    "25%": "bottom-1/4",
    "75%": "bottom-3/4",
    "100%": "bottom-full",
    "-1px": "-bottom-px",
    "-0.125rem": "-bottom-0.5",
    "-0.25rem": "-bottom-1",
    "-0.375rem": "-bottom-1.5",
    "-0.5rem": "-bottom-2",
    "-0.625rem": "-bottom-2.5",
    "-0.75rem": "-bottom-3",
    "-0.875rem": "-bottom-3.5",
    "-1rem": "-bottom-4",
    "-1.25rem": "-bottom-5",
    "-1.5rem": "-bottom-6",
    "-1.75rem": "-bottom-7",
    "-2rem": "-bottom-8",
    "-2.25rem": "-bottom-9",
    "-2.5rem": "-bottom-10",
    "-2.75rem": "-bottom-11",
    "-3rem": "-bottom-12",
    "-3.5rem": "-bottom-14",
    "-4rem": "-bottom-16",
    "-5rem": "-bottom-20",
    "-6rem": "-bottom-24",
    "-7rem": "-bottom-28",
    "-8rem": "-bottom-32",
    "-9rem": "-bottom-36",
    "-10rem": "-bottom-40",
    "-11rem": "-bottom-44",
    "-12rem": "-bottom-48",
    "-13rem": "-bottom-52",
    "-14rem": "-bottom-56",
    "-15rem": "-bottom-60",
    "-16rem": "-bottom-64",
    "-18rem": "-bottom-72",
    "-20rem": "-bottom-80",
    "-24rem": "-bottom-96",
    "-50%": "-bottom-2/4",
    "-33.333333%": "-bottom-1/3",
    "-66.666667%": "-bottom-2/3",
    "-25%": "-bottom-1/4",
    "-75%": "-bottom-3/4",
    "-100%": "-bottom-full"
  },
  left: {
    "0px": "left-0",
    "1px": "left-px",
    "0.125rem": "left-0.5",
    "0.25rem": "left-1",
    "0.375rem": "left-1.5",
    "0.5rem": "left-2",
    "0.625rem": "left-2.5",
    "0.75rem": "left-3",
    "0.875rem": "left-3.5",
    "1rem": "left-4",
    "1.25rem": "left-5",
    "1.5rem": "left-6",
    "1.75rem": "left-7",
    "2rem": "left-8",
    "2.25rem": "left-9",
    "2.5rem": "left-10",
    "2.75rem": "left-11",
    "3rem": "left-12",
    "3.5rem": "left-14",
    "4rem": "left-16",
    "5rem": "left-20",
    "6rem": "left-24",
    "7rem": "left-28",
    "8rem": "left-32",
    "9rem": "left-36",
    "10rem": "left-40",
    "11rem": "left-44",
    "12rem": "left-48",
    "13rem": "left-52",
    "14rem": "left-56",
    "15rem": "left-60",
    "16rem": "left-64",
    "18rem": "left-72",
    "20rem": "left-80",
    "24rem": "left-96",
    auto: "left-auto",
    "50%": "left-2/4",
    "33.333333%": "left-1/3",
    "66.666667%": "left-2/3",
    "25%": "left-1/4",
    "75%": "left-3/4",
    "100%": "left-full",
    "-1px": "-left-px",
    "-0.125rem": "-left-0.5",
    "-0.25rem": "-left-1",
    "-0.375rem": "-left-1.5",
    "-0.5rem": "-left-2",
    "-0.625rem": "-left-2.5",
    "-0.75rem": "-left-3",
    "-0.875rem": "-left-3.5",
    "-1rem": "-left-4",
    "-1.25rem": "-left-5",
    "-1.5rem": "-left-6",
    "-1.75rem": "-left-7",
    "-2rem": "-left-8",
    "-2.25rem": "-left-9",
    "-2.5rem": "-left-10",
    "-2.75rem": "-left-11",
    "-3rem": "-left-12",
    "-3.5rem": "-left-14",
    "-4rem": "-left-16",
    "-5rem": "-left-20",
    "-6rem": "-left-24",
    "-7rem": "-left-28",
    "-8rem": "-left-32",
    "-9rem": "-left-36",
    "-10rem": "-left-40",
    "-11rem": "-left-44",
    "-12rem": "-left-48",
    "-13rem": "-left-52",
    "-14rem": "-left-56",
    "-15rem": "-left-60",
    "-16rem": "-left-64",
    "-18rem": "-left-72",
    "-20rem": "-left-80",
    "-24rem": "-left-96",
    "-50%": "-left-2/4",
    "-33.333333%": "-left-1/3",
    "-66.666667%": "-left-2/3",
    "-25%": "-left-1/4",
    "-75%": "-left-3/4",
    "-100%": "-left-full"
  },
  right: {
    "0px": "right-0",
    "1px": "right-px",
    "0.125rem": "right-0.5",
    "0.25rem": "right-1",
    "0.375rem": "right-1.5",
    "0.5rem": "right-2",
    "0.625rem": "right-2.5",
    "0.75rem": "right-3",
    "0.875rem": "right-3.5",
    "1rem": "right-4",
    "1.25rem": "right-5",
    "1.5rem": "right-6",
    "1.75rem": "right-7",
    "2rem": "right-8",
    "2.25rem": "right-9",
    "2.5rem": "right-10",
    "2.75rem": "right-11",
    "3rem": "right-12",
    "3.5rem": "right-14",
    "4rem": "right-16",
    "5rem": "right-20",
    "6rem": "right-24",
    "7rem": "right-28",
    "8rem": "right-32",
    "9rem": "right-36",
    "10rem": "right-40",
    "11rem": "right-44",
    "12rem": "right-48",
    "13rem": "right-52",
    "14rem": "right-56",
    "15rem": "right-60",
    "16rem": "right-64",
    "18rem": "right-72",
    "20rem": "right-80",
    "24rem": "right-96",
    auto: "right-auto",
    "50%": "right-2/4",
    "33.333333%": "right-1/3",
    "66.666667%": "right-2/3",
    "25%": "right-1/4",
    "75%": "right-3/4",
    "100%": "right-full",
    "-1px": "-right-px",
    "-0.125rem": "-right-0.5",
    "-0.25rem": "-right-1",
    "-0.375rem": "-right-1.5",
    "-0.5rem": "-right-2",
    "-0.625rem": "-right-2.5",
    "-0.75rem": "-right-3",
    "-0.875rem": "-right-3.5",
    "-1rem": "-right-4",
    "-1.25rem": "-right-5",
    "-1.5rem": "-right-6",
    "-1.75rem": "-right-7",
    "-2rem": "-right-8",
    "-2.25rem": "-right-9",
    "-2.5rem": "-right-10",
    "-2.75rem": "-right-11",
    "-3rem": "-right-12",
    "-3.5rem": "-right-14",
    "-4rem": "-right-16",
    "-5rem": "-right-20",
    "-6rem": "-right-24",
    "-7rem": "-right-28",
    "-8rem": "-right-32",
    "-9rem": "-right-36",
    "-10rem": "-right-40",
    "-11rem": "-right-44",
    "-12rem": "-right-48",
    "-13rem": "-right-52",
    "-14rem": "-right-56",
    "-15rem": "-right-60",
    "-16rem": "-right-64",
    "-18rem": "-right-72",
    "-20rem": "-right-80",
    "-24rem": "-right-96",
    "-50%": "-right-2/4",
    "-33.333333%": "-right-1/3",
    "-66.666667%": "-right-2/3",
    "-25%": "-right-1/4",
    "-75%": "-right-3/4",
    "-100%": "-right-full"
  },
  gap: {
    "0px": "gap-0",
    "0.125rem": "gap-0.5",
    "0.25rem": "gap-1",
    "0.375rem": "gap-1.5",
    "0.5rem": "gap-2",
    "0.625rem": "gap-2.5",
    "0.75rem": "gap-3",
    "0.875rem": "gap-3.5",
    "1rem": "gap-4",
    "1.25rem": "gap-5",
    "1.5rem": "gap-6",
    "1.75rem": "gap-7",
    "2rem": "gap-8",
    "2.25rem": "gap-9",
    "2.5rem": "gap-10",
    "2.75rem": "gap-11",
    "3rem": "gap-12",
    "3.5rem": "gap-14",
    "4rem": "gap-16",
    "5rem": "gap-20",
    "6rem": "gap-24",
    "7rem": "gap-28",
    "8rem": "gap-32",
    "9rem": "gap-36",
    "10rem": "gap-40",
    "11rem": "gap-44",
    "12rem": "gap-48",
    "13rem": "gap-52",
    "14rem": "gap-56",
    "15rem": "gap-60",
    "16rem": "gap-64",
    "18rem": "gap-72",
    "20rem": "gap-80",
    "24rem": "gap-96"
  },
  "column-gap": {
    "0px": "gap-x-0",
    "1px": "gap-x-px",
    "0.125rem": "gap-x-0.5",
    "0.25rem": "gap-x-1",
    "0.375rem": "gap-x-1.5",
    "0.5rem": "gap-x-2",
    "0.625rem": "gap-x-2.5",
    "0.75rem": "gap-x-3",
    "0.875rem": "gap-x-3.5",
    "1rem": "gap-x-4",
    "1.25rem": "gap-x-5",
    "1.5rem": "gap-x-6",
    "1.75rem": "gap-x-7",
    "2rem": "gap-x-8",
    "2.25rem": "gap-x-9",
    "2.5rem": "gap-x-10",
    "2.75rem": "gap-x-11",
    "3rem": "gap-x-12",
    "3.5rem": "gap-x-14",
    "4rem": "gap-x-16",
    "5rem": "gap-x-20",
    "6rem": "gap-x-24",
    "7rem": "gap-x-28",
    "8rem": "gap-x-32",
    "9rem": "gap-x-36",
    "10rem": "gap-x-40",
    "11rem": "gap-x-44",
    "12rem": "gap-x-48",
    "13rem": "gap-x-52",
    "14rem": "gap-x-56",
    "15rem": "gap-x-60",
    "16rem": "gap-x-64",
    "18rem": "gap-x-72",
    "20rem": "gap-x-80",
    "24rem": "gap-x-96"
  },
  "row-gap": {
    "0px": "gap-y-0",
    "1px": "gap-y-px",
    "0.125rem": "gap-y-0.5",
    "0.25rem": "gap-y-1",
    "0.375rem": "gap-y-1.5",
    "0.5rem": "gap-y-2",
    "0.625rem": "gap-y-2.5",
    "0.75rem": "gap-y-3",
    "0.875rem": "gap-y-3.5",
    "1rem": "gap-y-4",
    "1.25rem": "gap-y-5",
    "1.5rem": "gap-y-6",
    "1.75rem": "gap-y-7",
    "2rem": "gap-y-8",
    "2.25rem": "gap-y-9",
    "2.5rem": "gap-y-10",
    "2.75rem": "gap-y-11",
    "3rem": "gap-y-12",
    "3.5rem": "gap-y-14",
    "4rem": "gap-y-16",
    "5rem": "gap-y-20",
    "6rem": "gap-y-24",
    "7rem": "gap-y-28",
    "8rem": "gap-y-32",
    "9rem": "gap-y-36",
    "10rem": "gap-y-40",
    "11rem": "gap-y-44",
    "12rem": "gap-y-48",
    "13rem": "gap-y-52",
    "14rem": "gap-y-56",
    "15rem": "gap-y-60",
    "16rem": "gap-y-64",
    "18rem": "gap-y-72",
    "20rem": "gap-y-80",
    "24rem": "gap-y-96"
  },
  "max-width": {
    "0rem": "max-w-0",
    "20rem": "max-w-xs",
    "24rem": "max-w-sm",
    "28rem": "max-w-md",
    "32rem": "max-w-lg",
    "36rem": "max-w-xl",
    "42rem": "max-w-2xl",
    "48rem": "max-w-3xl",
    "56rem": "max-w-4xl",
    "64rem": "max-w-5xl",
    "72rem": "max-w-6xl",
    "80rem": "max-w-7xl",
    "65ch": "max-w-prose",
    "640px": "max-w-screen-sm",
    "768px": "max-w-screen-md",
    "1024px": "max-w-screen-lg",
    "1280px": "max-w-screen-xl",
    "1536px": "max-w-screen-2xl"
  },
  "max-height": {
    "1px": "max-h-px",
    "0.125rem": "max-h-0.5",
    "0.25rem": "max-h-1",
    "0.375rem": "max-h-1.5",
    "0.5rem": "max-h-2",
    "0.625rem": "max-h-2.5",
    "0.75rem": "max-h-3",
    "0.875rem": "max-h-3.5",
    "1rem": "max-h-4",
    "1.25rem": "max-h-5",
    "1.5rem": "max-h-6",
    "1.75rem": "max-h-7",
    "2rem": "max-h-8",
    "2.25rem": "max-h-9",
    "2.5rem": "max-h-10",
    "2.75rem": "max-h-11",
    "3rem": "max-h-12",
    "3.5rem": "max-h-14",
    "4rem": "max-h-16",
    "5rem": "max-h-20",
    "6rem": "max-h-24",
    "7rem": "max-h-28",
    "8rem": "max-h-32",
    "9rem": "max-h-36",
    "10rem": "max-h-40",
    "11rem": "max-h-44",
    "12rem": "max-h-48",
    "13rem": "max-h-52",
    "14rem": "max-h-56",
    "15rem": "max-h-60",
    "16rem": "max-h-64",
    "18rem": "max-h-72",
    "20rem": "max-h-80",
    "24rem": "max-h-96"
  },
  "font-family": {
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"': "font-sans",
    'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif': "font-serif",
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace': "font-mono"
  },
  "font-weight": {
    100: "font-thin",
    200: "font-extralight",
    300: "font-light",
    400: "font-normal",
    500: "font-medium",
    600: "font-semibold",
    700: "font-bold",
    800: "font-extrabold",
    900: "font-black",
    normal: "font-normal",
    bold: "font-bold"
  },
  "line-height": {
    1: "leading-none",
    2: "leading-loose",
    ".75rem": "leading-3",
    "1rem": "leading-4",
    "1.25rem": "leading-5",
    "1.5rem": "leading-6",
    "1.75rem": "leading-7",
    "2rem": "leading-8",
    "2.25rem": "leading-9",
    "2.5rem": "leading-10",
    "1.25": "leading-tight",
    "1.375": "leading-snug",
    "1.5": "leading-normal",
    "1.625": "leading-relaxed"
  },
  "border-width": {
    "0px": "border-0",
    "2px": "border-2",
    "4px": "border-4",
    "8px": "border-8",
    "1px": "border"
  },
  "border-top-width": {
    "0px": "border-t-0",
    "2px": "border-t-2",
    "4px": "border-t-4",
    "8px": "border-t-8",
    "1px": "border-t"
  },
  "border-right-width": {
    "0px": "border-r-0",
    "2px": "border-r-2",
    "4px": "border-r-4",
    "8px": "border-r-8",
    "1px": "border-r"
  },
  "border-bottom-width": {
    "0px": "border-b-0",
    "2px": "border-b-2",
    "4px": "border-b-4",
    "8px": "border-b-8",
    "1px": "border-b"
  },
  "border-left-width": {
    "0px": "border-l-0",
    "2px": "border-l-2",
    "4px": "border-l-4",
    "8px": "border-l-8",
    "1px": "border-l"
  },
  transition: {
    "all 150ms cubic-bezier(0.4, 0, 0.2, 1)": "transition-all",
    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1)": "transition",
    "background-color, border-color, color, fill, stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)": "transition-colors",
    "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)": "transition-opacity",
    "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)": "transition-shadow",
    "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)": "transition-transform"
  }
};
let v = (e, t = "", r) => {
  if ("string" != typeof e.cssCode) return null;
  let o = e.cssCode.split(";").filter(e => "" !== e).map(o => {
    var a;
    var n;
    var l;
    var i;
    var s;
    var d;
    var c;
    var m;
    let u = "";
    let p = "";
    for (let e = 0; e < o.length; e++) {
      let t = o[e];
      if (":" !== t) u += t;else {
        p = o.slice(e + 1, o.length).trim();
        break;
      }
    }
    let f = b.get(u.trim());
    let g = !1;
    p.includes("!important") && (p = p.replace("!important", "").trim(), g = !0);
    let h = "";
    if ("initial" === p || "inherit" === p ? h = `[${u.trim()}:${p}]` : (r.customTheme = null !== (a = r.customTheme) && void 0 !== a ? a : {}, h = "function" == typeof f ? r.customTheme[u.trim()]?.[p] || r.useAllDefaultValues && x[u.trim()]?.[p] || f(p) : r.customTheme[u.trim()]?.[p] || r.useAllDefaultValues && x[u.trim()]?.[p] || (null !== (d = f?.[p]) && void 0 !== d ? d : "")), (null !== (m = r.prefix?.length) && void 0 !== m ? m : 0) > 0 && (h = h.split(" ").map(e => `${"-" === e[0] ? "-" : ""}${r.prefix}${e.replace(/^-/, "")}`).join(" ")), g) {
      let e = e => e = "[" === e[0] && "]" === e[e.length - 1] ? `${e.slice(0, -1)}!important]` : `!${e}`;
      h.includes(" ") && 0 === ["backdrop-filter", "filter", "transform"].filter(e => h.startsWith(e)).length ? h = h.split(" ").map(t => e(t)).join(" ") : h.length > 0 && (h = e(h));
    }
    e.selectorName.endsWith(":hover") && h.length > 0 ? h = ["backdrop-filter", "filter", "transform"].filter(e => h.startsWith(e)).length > 0 ? `hover:${h}` : h.split(" ").map(e => `hover:${e}`).join(" ") : e.selectorName.endsWith(":focus") && h.length > 0 ? h = ["backdrop-filter", "filter", "transform"].filter(e => h.startsWith(e)).length > 0 ? `focus:${h}` : h.split(" ").map(e => `focus:${e}`).join(" ") : e.selectorName.endsWith(":active") && h.length > 0 ? h = ["backdrop-filter", "filter", "transform"].filter(e => h.startsWith(e)).length > 0 ? `active:${h}` : h.split(" ").map(e => `active:${e}`).join(" ") : e.selectorName.endsWith("::before") && h.length > 0 ? h = ["backdrop-filter", "filter", "transform"].filter(e => h.startsWith(e)).length > 0 ? `before:${h}` : h.split(" ").map(e => `before:${e}`).join(" ") : e.selectorName.endsWith("::after") && h.length > 0 && (h = ["backdrop-filter", "filter", "transform"].filter(e => h.startsWith(e)).length > 0 ? `after:${h}` : h.split(" ").map(e => `after:${e}`).join(" "));
    t.length > 0 && (h = ["backdrop-filter", "filter", "transform"].filter(e => h.startsWith(e)).length > 0 ? `${t}:${h}` : h.split(" ").map(e => `${t}:${e}`).join(" "));
    return h;
  }).filter(e => "" !== e);
  return {
    selectorName: e.selectorName,
    resultVal: [...new Set(o)].join(" ")
  };
};
let w = {
  prefix: "",
  useAllDefaultValues: !0,
  customTheme: {}
};
let $$y0 = (e, t = w) => {
  var r;
  var o;
  if (a.map(t => e.includes(t)).filter(e => e).length > 0) return {
    code: "SyntaxError",
    data: []
  };
  n = null !== (r = t.useAllDefaultValues) && void 0 !== r ? r : w.useAllDefaultValues;
  l = null !== (o = t.customTheme) && void 0 !== o ? o : w.customTheme;
  let i = [];
  g(e).map(e => "string" == typeof e.cssCode ? v(e, "", t) : e.selectorName.includes("@media") ? e.cssCode.map(r => {
    var o;
    let a = s(e.selectorName.replace(/\(.+\)/g, e => e.replace(/\s/g, "")).replace(/\s+\(/g, "("));
    let n = v(r, l.media?.[e.selectorName] || t.useAllDefaultValues && h[a] || `[${a}]`, t);
    return n ? {
      selectorName: `${e.selectorName}-->${n.selectorName}`,
      resultVal: n.resultVal
    } : null;
  }) : null).filter(e => null !== e).forEach(e => {
    Array.isArray(e) ? i.push(...e) : i.push(e);
  });
  return {
    code: "OK",
    data: i
  };
};
export const xR = $$y0;