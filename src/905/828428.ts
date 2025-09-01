import { By } from "../905/816730";
import { o9 } from "../905/845428";
function a(e, t) {
  let i = {
    ...t
  };
  e.forEach(e => {
    delete i[e];
  });
  return i;
}
let s = By.exact({
  vertical: By.$$float.isOptional,
  horizontal: By.$$float.isOptional
});
let o = By.exact({
  top: By.$$float.isOptional,
  left: By.$$float.isOptional,
  bottom: By.$$float.isOptional,
  right: By.$$float.isOptional
});
let l = By.oneOf([By.$$float, o, s]);
let d = By.oneOf([By.$$float, "fill-parent"]);
let c = By.oneOf([d, "hug-contents"]);
let u = By.$$float.isOptional;
let p = By.oneOf(["center", "start", "end"]);
let m = By.exact({
  horizontal: By.oneOf([By.$$float, "auto"]).isOptional,
  vertical: By.oneOf([By.$$float, "auto"]).isOptional
});
let h = {
  spacing: By.oneOf([By.$$float, "auto", m]).isOptional,
  padding: l.isOptional,
  direction: By.oneOf(["horizontal", "vertical"]).isOptional,
  horizontalAlignItems: p.isOptional,
  verticalAlignItems: By.oneOf([p, "baseline"]).isOptional,
  wrap: By.bool.isOptional
};
let g = {
  width: c.isOptional,
  height: c.isOptional
};
let f = By.oneOf([By.exact({
  type: "top",
  offset: By.$$float
}), By.exact({
  type: "bottom",
  offset: By.$$float
}), By.exact({
  type: "center",
  offset: By.$$float
}), By.exact({
  type: "top-bottom",
  topOffset: By.$$float,
  bottomOffset: By.$$float
}), By.exact({
  type: "vertical-scale",
  topOffsetPercent: By.$$float,
  bottomOffsetPercent: By.$$float
})]);
let _ = By.oneOf([By.exact({
  type: "left",
  offset: By.$$float
}), By.exact({
  type: "right",
  offset: By.$$float
}), By.exact({
  type: "center",
  offset: By.$$float
}), By.exact({
  type: "left-right",
  leftOffset: By.$$float,
  rightOffset: By.$$float
}), By.exact({
  type: "horizontal-scale",
  leftOffsetPercent: By.$$float,
  rightOffsetPercent: By.$$float
})]);
let A = By.oneOf(["visible", "hidden", "scroll"]);
let y = By.oneOf(["pass-through", "normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]);
let b = By.string;
let v = By.exact({
  r: By.$$float,
  g: By.$$float,
  b: By.$$float,
  a: By.$$float
});
let I = By.exact({
  x: By.$$float,
  y: By.$$float
});
let E = {
  x: By.oneOf([By.$$float, _]).isOptional,
  y: By.oneOf([By.$$float, f]).isOptional
};
let x = By.exact({
  type: "drop-shadow",
  color: By.oneOf([b, v]),
  offset: I,
  blur: By.$$float,
  blendMode: y.isOptional,
  spread: By.$$float.isOptional,
  visible: By.bool.isOptional,
  showShadowBehindNode: By.bool.isOptional
});
let S = By.exact({
  type: "inner-shadow",
  color: By.oneOf([b, v]),
  offset: I,
  blur: By.$$float,
  blendMode: y.isOptional,
  spread: By.$$float.isOptional,
  visible: By.bool.isOptional
});
let w = By.exact({
  type: By.oneOf(["layer-blur", "background-blur"]),
  blur: By.$$float,
  visible: By.bool.isOptional
});
let C = By.oneOf([x, S, w]);
let T = {
  blendMode: y.isOptional,
  opacity: By.$$float.isOptional,
  effect: By.oneOf([C, By.arrayOf(C)]).isOptional,
  ...E,
  name: By.string.isOptional,
  hidden: By.bool.isOptional
};
let k = {
  type: By.oneOf(["image", "solid", "gradient-linear", "gradient-radial", "gradient-angular", "gradient-diamond"]),
  blendMode: y.isOptional,
  visible: By.bool.isOptional,
  opacity: By.$$float.isOptional
};
let R = By.exact({
  ...k,
  type: "solid",
  color: By.oneOf([v, b])
});
let N = By.exact({
  position: By.$$float,
  color: v
});
let P = By.exact({
  ...k,
  type: By.oneOf(["gradient-linear", "gradient-radial", "gradient-angular", "gradient-diamond"]),
  gradientHandlePositions: By.arrayOf(I),
  gradientStops: By.arrayOf(N)
});
let O = By.arrayOf(By.arrayOf(By.$$float));
let D = By.oneOf(["fill", "fit", "tile", "crop"]);
let L = By.exact({
  ...k,
  type: "image",
  src: By.string.isOptional,
  imageHash: By.string.isOptional,
  imageSize: By.exact({
    width: By.$$float,
    height: By.$$float
  }).isOptional,
  scaleMode: D.isOptional,
  imageTransform: O.isOptional,
  scalingFactor: By.$$float.isOptional,
  rotation: By.$$float.isOptional,
  imageRef: By.string.isOptional
});
let F = By.oneOf([R, P, L]);
let M = By.oneOf(["inside", "outside", "center"]);
let j = By.arrayOf(By.$$float.min(0));
let U = By.oneOf([P, R]);
let B = By.oneOf([b, v, U, By.arrayOf(U)]);
let V = By.oneOf([b, v, F, By.arrayOf(U)]);
let G = {
  fill: V.isOptional,
  stroke: B.isOptional,
  strokeWidth: By.$$float.isOptional,
  strokeAlign: M.isOptional,
  strokeDashPattern: j.isOptional
};
let z = {
  width: d.isOptional,
  height: d.isOptional
};
let H = {
  rotation: By.$$float.isOptional,
  flipVertical: By.bool.isOptional
};
let W = {
  cornerRadius: By.oneOf([By.$$float, By.exact({
    topLeft: By.$$float.isOptional,
    topRight: By.$$float.isOptional,
    bottomLeft: By.$$float.isOptional,
    bottomRight: By.$$float.isOptional
  })]).isOptional
};
let K = By.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]);
let Y = By.oneOf(["thin", "extra-light", "light", "normal", "medium", "semi-bold", "bold", "extra-bold", "black"]);
let q = By.oneOf([K, Y]);
let $ = {
  fontFamily: By.string.isOptional,
  letterSpacing: By.oneOf([By.$$float, By.string]).isOptional,
  textDecoration: By.oneOf(["none", "strikethrough", "underline"]).isOptional,
  fontSize: By.$$float.isOptional,
  italic: By.bool.isOptional,
  textCase: By.oneOf(["upper", "lower", "title", "original", "small-caps", "small-caps-forced"]).isOptional,
  fontWeight: q.isOptional,
  fontPostScriptName: By.string.isOptional,
  href: By.string.isOptional,
  fill: By.oneOf([b, v, F, By.arrayOf(F)]).isOptional
};
let Z = {
  ...T,
  ...G,
  width: d,
  height: d,
  ...H,
  ...W,
  overflow: A.isOptional
};
let X = {
  ...T,
  ...G,
  ...z,
  ...H,
  ...W
};
let Q = {
  ...T,
  ...G,
  ...H,
  ...z
};
let J = {
  ...T,
  ...H,
  ...a(["strokeAlign"], G),
  length: d.isOptional,
  strokeCap: By.oneOf(["none", "round", "square", "arrow-lines", "arrow-equilateral"]).isOptional
};
let ee = {
  ...T,
  ...g,
  ...H,
  ...$,
  ...a(["fill"], G),
  paragraphIndent: By.$$float.isOptional,
  paragraphSpacing: By.$$float.isOptional,
  horizontalAlignText: By.oneOf(["left", "right", "center", "justified"]).isOptional,
  verticalAlignText: By.oneOf(["top", "center", "bottom"]).isOptional,
  lineHeight: By.oneOf([By.$$float, By.string, "auto"]).isOptional,
  truncate: By.oneOf([By.bool, By.integer]).isOptional
};
a(["fill"], X);
By.oneOf([By.string, L]);
let et = {
  ...a(["width", "height"], Z),
  ...h,
  ...g
};
let ei = By.oneOf([By.dictionaryOf(By.any), By.arrayOf(By.any), By.string, null, void 0]);
let en = {
  children: By.oneOf([ei, By.arrayOf(ei)]).isOptional
};
let er = {
  hoverStyle: By.exact({
    fill: V.isOptional,
    stroke: B.isOptional,
    opacity: By.$$float.isOptional
  }).isOptional
};
let ea = {
  ...T,
  onClick: By.any.isOptional,
  tooltip: By.string.isOptional,
  ...er,
  positioning: By.oneOf(["auto", "absolute"]).isOptional
};
let es = {
  minWidth: u,
  minHeight: u,
  maxWidth: u,
  maxHeight: u
};
let eo = e => ({
  ...ea,
  ...es,
  ...ee,
  font: By.exact({
    family: By.string,
    style: By.string
  }).isOptional
});
export function $$el0(e) {
  let t = eo(e);
  return By.exact({
    ...t,
    children: By.any.isOptional
  });
}
let ed = e => ({
  ...a(["href"], $),
  ...er
});
export function $$ec4(e) {
  let t = a(["minWidth", "minHeight", "maxWidth", "maxHeight"], eo(e));
  let i = ed(e);
  let r = a(["width", "height"], $$em3(e));
  return By.exact({
    ...t,
    placeholder: By.string.isOptional,
    onTextEditEnd: By.any,
    value: By.oneOf([By.string, null]),
    placeholderProps: By.exact(i).isOptional,
    inputFrameProps: r.isOptional,
    width: d.isOptional,
    inputBehavior: By.oneOf(["wrap", "truncate", "multiline"]).isOptional
  });
}
export function $$eu10(e) {
  return By.exact({
    ...en
  });
}
export function $$ep1(e) {
  return By.exact({
    ...ea,
    ...es,
    ...Z,
    ...en
  });
}
export function $$em3(e) {
  return By.exact({
    ...ea,
    ...es,
    ...et,
    ...en
  });
}
export function $$eh7(e) {
  return By.exact({
    ...ea,
    ...es,
    ...Q,
    arcData: By.exact({
      startingAngle: By.$$float,
      endingAngle: By.$$float,
      innerRadius: By.$$float.range(0, 1)
    }).isOptional
  });
}
export function $$eg9(e) {
  return By.exact({
    ...ea,
    ...es,
    ...X
  });
}
export function $$ef5(e) {
  return By.exact({
    ...ea,
    ...es,
    ...function (e) {
      let t = {
        ...e
      };
      Object.keys(t).forEach(e => {
        "optional" !== t[e].type && (t[e] = t[e].isOptional);
      });
      return t;
    }(Z),
    src: By.string
  });
}
export function $$e_8(e) {
  return By.exact({
    ...ea,
    ...J
  });
}
let eA = {
  tooltip: By.string,
  propertyName: By.string
};
let ey = {
  selectedOption: By.string
};
let eb = By.exact({
  ...eA,
  itemType: "action",
  icon: By.string.isOptional
});
let ev = By.exact({
  ...eA,
  itemType: "toggle",
  icon: By.string.isOptional,
  isToggled: By.bool
});
let eI = By.exact({
  ...eA,
  itemType: "link",
  icon: By.oneOf([By.string, null]).isOptional,
  href: By.string
});
let eE = By.exact({
  itemType: "separator"
});
let ex = By.exact({
  option: By.string,
  tooltip: By.string
});
let eS = By.exact({
  ...eA,
  ...ey,
  itemType: "color-selector",
  options: By.arrayOf(ex)
});
let ew = By.exact({
  option: By.string,
  label: By.string
});
let eC = By.exact({
  ...eA,
  ...ey,
  itemType: "dropdown",
  options: By.arrayOf(ew)
});
let $$eT2 = By.arrayOf(By.oneOf([eb, eE, eS, eC, ev, eI]));
export function $$ek6(e, t) {
  "color-selector" === e.itemType ? function (e, t) {
    let i = e.options.map(e => e.option);
    let n = `usePropertyMenu.args[0][${t}]`;
    eR(e.options, e.selectedOption, t);
    let a = e => e.match("^#(?:[0-9a-fA-F]{3}){1,2}$");
    if (0 !== i.filter(e => !a(e)).length) throw new o9(`${n}.options do not have valid hexcode strings.`);
  }(e, t) : "dropdown" === e.itemType && eR(e.options, e.selectedOption, t);
}
function eR(e, t, i) {
  let n = `usePropertyMenu.args[0][${i}]`;
  let a = e.map(e => e.option);
  if (0 === a.length) throw new o9(`${n}.options is empty.`);
  if (new Set(a).size !== a.length) throw new o9(`${n}.options has duplicate values.`);
  a.includes(t) || console.warn(`${n}.selectedOption is not included in ${n}.options.`);
}
export const BR = $$el0;
export const Bb = $$ep1;
export const Ed = $$eT2;
export const L1 = $$em3;
export const L3 = $$ec4;
export const MQ = $$ef5;
export const OV = $$ek6;
export const QK = $$eh7;
export const gJ = $$e_8;
export const r8 = $$eg9;
export const yL = $$eu10;