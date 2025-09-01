import { o9 } from "../905/845428";
export let $$r3 = e => "frame" === e.type || "inputframe" === e.type || "autolayout" === e.type;
export function $$a1(e, t, i) {
  if (!e) return;
  let n = e.renderMetaData.width;
  let a = e.renderMetaData.height;
  if ("number" == typeof n || "number" == typeof a) {
    $$r3(e) && ("number" == typeof n && ("horizontal" === e.renderMetaData.direction && t.writeProperty("primaryAxisSizingMode", "FIXED"), "vertical" === e.renderMetaData.direction && t.writeProperty("counterAxisSizingMode", "FIXED")), "number" == typeof a && ("horizontal" === e.renderMetaData.direction && t.writeProperty("counterAxisSizingMode", "FIXED"), "vertical" === e.renderMetaData.direction && t.writeProperty("primaryAxisSizingMode", "FIXED")));
    let i = "line" === e.type ? 0 : .01;
    t.resize("number" == typeof n ? n : t.getSize().width || .01, "number" == typeof a ? a : t.getSize().height || i);
  }
  try {
    "fill-parent" === n ? t.writeProperty("layoutSizingHorizontal", "FILL") : "hug-contents" === n && $$r3(e) && t.writeProperty("layoutSizingHorizontal", "HUG");
  } catch {
    "fill-parent" === n ? "HORIZONTAL" === i ? t.writeProperty("layoutGrow", 1) : "VERTICAL" === i && (t.writeProperty("layoutAlign", "STRETCH"), $$r3(e) && t.writeProperty("primaryAxisSizingMode", "FIXED")) : "hug-contents" === n && $$r3(e) && ("HORIZONTAL" === e.props.layoutMode ? t.writeProperty("primaryAxisSizingMode", "AUTO") : "VERTICAL" === e.props.layoutMode && t.writeProperty("counterAxisSizingMode", "AUTO"));
  }
  try {
    "fill-parent" === a ? t.writeProperty("layoutSizingVertical", "FILL") : "hug-contents" === a && $$r3(e) && t.writeProperty("layoutSizingVertical", "HUG");
  } catch {
    "fill-parent" === a ? "VERTICAL" === i ? t.writeProperty("layoutGrow", 1) : "HORIZONTAL" === i && (t.writeProperty("layoutAlign", "STRETCH"), $$r3(e) && t.writeProperty("primaryAxisSizingMode", "FIXED")) : "hug-contents" === a && $$r3(e) && ("HORIZONTAL" === e.props.layoutMode ? t.writeProperty("counterAxisSizingMode", "AUTO") : "VERTICAL" === e.props.layoutMode && t.writeProperty("primaryAxisSizingMode", "AUTO"));
  }
}
export function $$s0(e, t, i, r = !1) {
  let a;
  let o;
  let l;
  let d;
  let c;
  let u;
  if (!e) return;
  let {
    xConstraint,
    yConstraint
  } = e.renderMetaData.constraints ?? {};
  let h = {
    horizontal: "MIN",
    vertical: "MIN"
  };
  let g = () => (a || (a = t.getSize()), a);
  let f = () => (o || (o = i.getSize()), o);
  if (xConstraint) switch (xConstraint.type) {
    case "left":
      "number" == typeof xConstraint.offset && (c = xConstraint.offset);
      break;
    case "right":
      "number" == typeof xConstraint.offset && (h.horizontal = "MAX", c = f().width - xConstraint.offset - g().width);
      break;
    case "center":
      "number" == typeof xConstraint.offset && (h.horizontal = "CENTER", c = f().width / 2 - g().width / 2 + xConstraint.offset);
      break;
    case "left-right":
      "number" == typeof xConstraint.leftOffset && "number" == typeof xConstraint.rightOffset && (h.horizontal = "STRETCH", l = f().width - xConstraint.leftOffset - xConstraint.rightOffset, c = xConstraint.leftOffset);
      break;
    case "horizontal-scale":
      if ("number" == typeof xConstraint.leftOffsetPercent && "number" == typeof xConstraint.rightOffsetPercent) {
        if (!(0 <= xConstraint.leftOffsetPercent && xConstraint.leftOffsetPercent <= 100 && 0 <= xConstraint.rightOffsetPercent && xConstraint.rightOffsetPercent <= 100 && xConstraint.leftOffsetPercent + xConstraint.rightOffsetPercent <= 100)) throw new o9(`Invalid percentages left=${xConstraint.leftOffsetPercent}, right=${xConstraint.rightOffsetPercent}`);
        h.horizontal = "SCALE";
        let e = xConstraint.leftOffsetPercent + xConstraint.rightOffsetPercent;
        l = f().width * ((100 - e) / 100);
        c = f().width * xConstraint.leftOffsetPercent / 100;
      }
  }
  if (yConstraint) switch (yConstraint.type) {
    case "top":
      "number" == typeof yConstraint.offset && (u = yConstraint.offset);
      break;
    case "bottom":
      "number" == typeof yConstraint.offset && (h.vertical = "MAX", u = f().height - yConstraint.offset - g().height);
      break;
    case "center":
      "number" == typeof yConstraint.offset && (h.vertical = "CENTER", u = f().height / 2 - g().height / 2 + yConstraint.offset);
      break;
    case "top-bottom":
      "number" == typeof yConstraint.topOffset && "number" == typeof yConstraint.bottomOffset && (h.vertical = "STRETCH", d = f().height - yConstraint.topOffset - yConstraint.bottomOffset, u = yConstraint.topOffset);
      break;
    case "vertical-scale":
      if ("number" == typeof yConstraint.topOffsetPercent && "number" == typeof yConstraint.bottomOffsetPercent) {
        if (!(0 <= yConstraint.topOffsetPercent && yConstraint.topOffsetPercent <= 100 && 0 <= yConstraint.bottomOffsetPercent && yConstraint.bottomOffsetPercent <= 100 && yConstraint.topOffsetPercent + yConstraint.bottomOffsetPercent <= 100)) throw new o9(`Invalid percentages top=${yConstraint.topOffsetPercent}, bottom=${yConstraint.bottomOffsetPercent}`);
        h.vertical = "SCALE";
        let e = yConstraint.topOffsetPercent + yConstraint.bottomOffsetPercent;
        d = f().height * ((100 - e) / 100);
        u = f().height * yConstraint.topOffsetPercent / 100;
      }
  }
  void 0 !== c && t.writeProperty("x", c);
  void 0 !== u && t.writeProperty("y", u);
  (l || d) && t.resize(l ?? g().width, d ?? g().height);
  (r || "MIN" !== h.horizontal || "MIN" !== h.vertical) && t.writeProperty("constraints", h);
}
export const $T = $$s0;
export const BM = $$a1;
export const MI = function e(t, i = null) {
  let n = [];
  t.forEach(t => {
    t && (Array.isArray(t) ? (t.some(e => e && !Array.isArray(e) && null == e.renderMetaData.key) && i?.logWarning('Widget Warning: Each child in a list should have a unique "key" prop. Please check your widget code.'), n.push(...e(t, i))) : "fragment" === t.type ? n.push(...e(t.renderMetaData.children ?? [], i)) : n.push(t));
  });
  return n;
};
export const _L = $$r3;