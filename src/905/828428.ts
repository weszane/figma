import { PropTypes } from "../905/816730";
import { InternalError } from "../905/845428";
function a(e, t) {
  let i = {
    ...t
  };
  e.forEach(e => {
    delete i[e];
  });
  return i;
}
let s = PropTypes.exact({
  vertical: PropTypes.$$float.isOptional,
  horizontal: PropTypes.$$float.isOptional
});
let o = PropTypes.exact({
  top: PropTypes.$$float.isOptional,
  left: PropTypes.$$float.isOptional,
  bottom: PropTypes.$$float.isOptional,
  right: PropTypes.$$float.isOptional
});
let l = PropTypes.oneOf([PropTypes.$$float, o, s]);
let d = PropTypes.oneOf([PropTypes.$$float, "fill-parent"]);
let c = PropTypes.oneOf([d, "hug-contents"]);
let u = PropTypes.$$float.isOptional;
let p = PropTypes.oneOf(["center", "start", "end"]);
let m = PropTypes.exact({
  horizontal: PropTypes.oneOf([PropTypes.$$float, "auto"]).isOptional,
  vertical: PropTypes.oneOf([PropTypes.$$float, "auto"]).isOptional
});
let h = {
  spacing: PropTypes.oneOf([PropTypes.$$float, "auto", m]).isOptional,
  padding: l.isOptional,
  direction: PropTypes.oneOf(["horizontal", "vertical"]).isOptional,
  horizontalAlignItems: p.isOptional,
  verticalAlignItems: PropTypes.oneOf([p, "baseline"]).isOptional,
  wrap: PropTypes.bool.isOptional
};
let g = {
  width: c.isOptional,
  height: c.isOptional
};
let f = PropTypes.oneOf([PropTypes.exact({
  type: "top",
  offset: PropTypes.$$float
}), PropTypes.exact({
  type: "bottom",
  offset: PropTypes.$$float
}), PropTypes.exact({
  type: "center",
  offset: PropTypes.$$float
}), PropTypes.exact({
  type: "top-bottom",
  topOffset: PropTypes.$$float,
  bottomOffset: PropTypes.$$float
}), PropTypes.exact({
  type: "vertical-scale",
  topOffsetPercent: PropTypes.$$float,
  bottomOffsetPercent: PropTypes.$$float
})]);
let _ = PropTypes.oneOf([PropTypes.exact({
  type: "left",
  offset: PropTypes.$$float
}), PropTypes.exact({
  type: "right",
  offset: PropTypes.$$float
}), PropTypes.exact({
  type: "center",
  offset: PropTypes.$$float
}), PropTypes.exact({
  type: "left-right",
  leftOffset: PropTypes.$$float,
  rightOffset: PropTypes.$$float
}), PropTypes.exact({
  type: "horizontal-scale",
  leftOffsetPercent: PropTypes.$$float,
  rightOffsetPercent: PropTypes.$$float
})]);
let A = PropTypes.oneOf(["visible", "hidden", "scroll"]);
let y = PropTypes.oneOf(["pass-through", "normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]);
let b = PropTypes.string;
let v = PropTypes.exact({
  r: PropTypes.$$float,
  g: PropTypes.$$float,
  b: PropTypes.$$float,
  a: PropTypes.$$float
});
let I = PropTypes.exact({
  x: PropTypes.$$float,
  y: PropTypes.$$float
});
let E = {
  x: PropTypes.oneOf([PropTypes.$$float, _]).isOptional,
  y: PropTypes.oneOf([PropTypes.$$float, f]).isOptional
};
let x = PropTypes.exact({
  type: "drop-shadow",
  color: PropTypes.oneOf([b, v]),
  offset: I,
  blur: PropTypes.$$float,
  blendMode: y.isOptional,
  spread: PropTypes.$$float.isOptional,
  visible: PropTypes.bool.isOptional,
  showShadowBehindNode: PropTypes.bool.isOptional
});
let S = PropTypes.exact({
  type: "inner-shadow",
  color: PropTypes.oneOf([b, v]),
  offset: I,
  blur: PropTypes.$$float,
  blendMode: y.isOptional,
  spread: PropTypes.$$float.isOptional,
  visible: PropTypes.bool.isOptional
});
let w = PropTypes.exact({
  type: PropTypes.oneOf(["layer-blur", "background-blur"]),
  blur: PropTypes.$$float,
  visible: PropTypes.bool.isOptional
});
let C = PropTypes.oneOf([x, S, w]);
let T = {
  blendMode: y.isOptional,
  opacity: PropTypes.$$float.isOptional,
  effect: PropTypes.oneOf([C, PropTypes.arrayOf(C)]).isOptional,
  ...E,
  name: PropTypes.string.isOptional,
  hidden: PropTypes.bool.isOptional
};
let k = {
  type: PropTypes.oneOf(["image", "solid", "gradient-linear", "gradient-radial", "gradient-angular", "gradient-diamond"]),
  blendMode: y.isOptional,
  visible: PropTypes.bool.isOptional,
  opacity: PropTypes.$$float.isOptional
};
let R = PropTypes.exact({
  ...k,
  type: "solid",
  color: PropTypes.oneOf([v, b])
});
let N = PropTypes.exact({
  position: PropTypes.$$float,
  color: v
});
let P = PropTypes.exact({
  ...k,
  type: PropTypes.oneOf(["gradient-linear", "gradient-radial", "gradient-angular", "gradient-diamond"]),
  gradientHandlePositions: PropTypes.arrayOf(I),
  gradientStops: PropTypes.arrayOf(N)
});
let O = PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.$$float));
let D = PropTypes.oneOf(["fill", "fit", "tile", "crop"]);
let L = PropTypes.exact({
  ...k,
  type: "image",
  src: PropTypes.string.isOptional,
  imageHash: PropTypes.string.isOptional,
  imageSize: PropTypes.exact({
    width: PropTypes.$$float,
    height: PropTypes.$$float
  }).isOptional,
  scaleMode: D.isOptional,
  imageTransform: O.isOptional,
  scalingFactor: PropTypes.$$float.isOptional,
  rotation: PropTypes.$$float.isOptional,
  imageRef: PropTypes.string.isOptional
});
let F = PropTypes.oneOf([R, P, L]);
let M = PropTypes.oneOf(["inside", "outside", "center"]);
let j = PropTypes.arrayOf(PropTypes.$$float.min(0));
let U = PropTypes.oneOf([P, R]);
let B = PropTypes.oneOf([b, v, U, PropTypes.arrayOf(U)]);
let V = PropTypes.oneOf([b, v, F, PropTypes.arrayOf(U)]);
let G = {
  fill: V.isOptional,
  stroke: B.isOptional,
  strokeWidth: PropTypes.$$float.isOptional,
  strokeAlign: M.isOptional,
  strokeDashPattern: j.isOptional
};
let z = {
  width: d.isOptional,
  height: d.isOptional
};
let H = {
  rotation: PropTypes.$$float.isOptional,
  flipVertical: PropTypes.bool.isOptional
};
let W = {
  cornerRadius: PropTypes.oneOf([PropTypes.$$float, PropTypes.exact({
    topLeft: PropTypes.$$float.isOptional,
    topRight: PropTypes.$$float.isOptional,
    bottomLeft: PropTypes.$$float.isOptional,
    bottomRight: PropTypes.$$float.isOptional
  })]).isOptional
};
let K = PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]);
let Y = PropTypes.oneOf(["thin", "extra-light", "light", "normal", "medium", "semi-bold", "bold", "extra-bold", "black"]);
let q = PropTypes.oneOf([K, Y]);
let $ = {
  fontFamily: PropTypes.string.isOptional,
  letterSpacing: PropTypes.oneOf([PropTypes.$$float, PropTypes.string]).isOptional,
  textDecoration: PropTypes.oneOf(["none", "strikethrough", "underline"]).isOptional,
  fontSize: PropTypes.$$float.isOptional,
  italic: PropTypes.bool.isOptional,
  textCase: PropTypes.oneOf(["upper", "lower", "title", "original", "small-caps", "small-caps-forced"]).isOptional,
  fontWeight: q.isOptional,
  fontPostScriptName: PropTypes.string.isOptional,
  href: PropTypes.string.isOptional,
  fill: PropTypes.oneOf([b, v, F, PropTypes.arrayOf(F)]).isOptional
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
  strokeCap: PropTypes.oneOf(["none", "round", "square", "arrow-lines", "arrow-equilateral"]).isOptional
};
let ee = {
  ...T,
  ...g,
  ...H,
  ...$,
  ...a(["fill"], G),
  paragraphIndent: PropTypes.$$float.isOptional,
  paragraphSpacing: PropTypes.$$float.isOptional,
  horizontalAlignText: PropTypes.oneOf(["left", "right", "center", "justified"]).isOptional,
  verticalAlignText: PropTypes.oneOf(["top", "center", "bottom"]).isOptional,
  lineHeight: PropTypes.oneOf([PropTypes.$$float, PropTypes.string, "auto"]).isOptional,
  truncate: PropTypes.oneOf([PropTypes.bool, PropTypes.integer]).isOptional
};
a(["fill"], X);
PropTypes.oneOf([PropTypes.string, L]);
let et = {
  ...a(["width", "height"], Z),
  ...h,
  ...g
};
let ei = PropTypes.oneOf([PropTypes.dictionaryOf(PropTypes.any), PropTypes.arrayOf(PropTypes.any), PropTypes.string, null, void 0]);
let en = {
  children: PropTypes.oneOf([ei, PropTypes.arrayOf(ei)]).isOptional
};
let er = {
  hoverStyle: PropTypes.exact({
    fill: V.isOptional,
    stroke: B.isOptional,
    opacity: PropTypes.$$float.isOptional
  }).isOptional
};
let ea = {
  ...T,
  onClick: PropTypes.any.isOptional,
  tooltip: PropTypes.string.isOptional,
  ...er,
  positioning: PropTypes.oneOf(["auto", "absolute"]).isOptional
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
  font: PropTypes.exact({
    family: PropTypes.string,
    style: PropTypes.string
  }).isOptional
});
export function $$el0(e) {
  let t = eo(e);
  return PropTypes.exact({
    ...t,
    children: PropTypes.any.isOptional
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
  return PropTypes.exact({
    ...t,
    placeholder: PropTypes.string.isOptional,
    onTextEditEnd: PropTypes.any,
    value: PropTypes.oneOf([PropTypes.string, null]),
    placeholderProps: PropTypes.exact(i).isOptional,
    inputFrameProps: r.isOptional,
    width: d.isOptional,
    inputBehavior: PropTypes.oneOf(["wrap", "truncate", "multiline"]).isOptional
  });
}
export function $$eu10(e) {
  return PropTypes.exact({
    ...en
  });
}
export function $$ep1(e) {
  return PropTypes.exact({
    ...ea,
    ...es,
    ...Z,
    ...en
  });
}
export function $$em3(e) {
  return PropTypes.exact({
    ...ea,
    ...es,
    ...et,
    ...en
  });
}
export function $$eh7(e) {
  return PropTypes.exact({
    ...ea,
    ...es,
    ...Q,
    arcData: PropTypes.exact({
      startingAngle: PropTypes.$$float,
      endingAngle: PropTypes.$$float,
      innerRadius: PropTypes.$$float.range(0, 1)
    }).isOptional
  });
}
export function $$eg9(e) {
  return PropTypes.exact({
    ...ea,
    ...es,
    ...X
  });
}
export function $$ef5(e) {
  return PropTypes.exact({
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
    src: PropTypes.string
  });
}
export function $$e_8(e) {
  return PropTypes.exact({
    ...ea,
    ...J
  });
}
let eA = {
  tooltip: PropTypes.string,
  propertyName: PropTypes.string
};
let ey = {
  selectedOption: PropTypes.string
};
let eb = PropTypes.exact({
  ...eA,
  itemType: "action",
  icon: PropTypes.string.isOptional
});
let ev = PropTypes.exact({
  ...eA,
  itemType: "toggle",
  icon: PropTypes.string.isOptional,
  isToggled: PropTypes.bool
});
let eI = PropTypes.exact({
  ...eA,
  itemType: "link",
  icon: PropTypes.oneOf([PropTypes.string, null]).isOptional,
  href: PropTypes.string
});
let eE = PropTypes.exact({
  itemType: "separator"
});
let ex = PropTypes.exact({
  option: PropTypes.string,
  tooltip: PropTypes.string
});
let eS = PropTypes.exact({
  ...eA,
  ...ey,
  itemType: "color-selector",
  options: PropTypes.arrayOf(ex)
});
let ew = PropTypes.exact({
  option: PropTypes.string,
  label: PropTypes.string
});
let eC = PropTypes.exact({
  ...eA,
  ...ey,
  itemType: "dropdown",
  options: PropTypes.arrayOf(ew)
});
let $$eT2 = PropTypes.arrayOf(PropTypes.oneOf([eb, eE, eS, eC, ev, eI]));
export function $$ek6(e, t) {
  "color-selector" === e.itemType ? function (e, t) {
    let i = e.options.map(e => e.option);
    let n = `usePropertyMenu.args[0][${t}]`;
    eR(e.options, e.selectedOption, t);
    let a = e => e.match("^#(?:[0-9a-fA-F]{3}){1,2}$");
    if (0 !== i.filter(e => !a(e)).length) throw new InternalError(`${n}.options do not have valid hexcode strings.`);
  }(e, t) : "dropdown" === e.itemType && eR(e.options, e.selectedOption, t);
}
function eR(e, t, i) {
  let n = `usePropertyMenu.args[0][${i}]`;
  let a = e.map(e => e.option);
  if (0 === a.length) throw new InternalError(`${n}.options is empty.`);
  if (new Set(a).size !== a.length) throw new InternalError(`${n}.options has duplicate values.`);
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