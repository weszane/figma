import { F } from "../905/136718";
import { B } from "../905/113996";
import { L } from "../905/687364";
import { B as _$$B } from "../905/248554";
import { j } from "../905/971516";
import { z } from "../905/897942";
import { t } from "../905/367656";
var c = (e => (e[e.Break = 0] = "Break", e[e.SkipChildren = 1] = "SkipChildren", e))(c || {});
export var $$u1 = (e => (e[e.FIXED = 0] = "FIXED", e[e.FILL_PARENT = 1] = "FILL_PARENT", e[e.HUG_CONTENTS = 2] = "HUG_CONTENTS", e))($$u1 || {});
export function $$p6(e) {
  return e instanceof L || e instanceof j || e instanceof _$$B || e instanceof F;
}
export function $$m7(e) {
  return e instanceof z;
}
export function $$h5(e) {
  return e instanceof L || e instanceof F || e instanceof B || e instanceof _$$B;
}
export class $$g0 {
  constructor() {
    this.id = "unimplemented";
    this.name = "unimplemented";
    this.type = "unimplemented";
    this.layout = t.empty();
  }
  static from(e) {
    let t = new $$g0();
    t.type = e.type;
    t.name = e.name;
    t.id = e.id;
    return t;
  }
  isAutoLayout() {
    return !1;
  }
  isGrid() {
    return !1;
  }
  setName(e) {}
  getVariableValue(e) {
    return null;
  }
}
export function $$f2(e) {
  return e.layout.parent?.isAutoLayout() && "VERTICAL" === e.layout.parent.autoLayout.layoutMode ? $$_4(e) : $$A3(e);
}
export function $$_4(e) {
  if ((e.layout.parent?.isAutoLayout() || e.layout.parent?.isGrid()) && "ABSOLUTE" !== e.layout.layoutPositioning) {
    switch (e.layout.parent.autoLayout.layoutMode) {
      case "HORIZONTAL":
        if (1 === e.layout.layoutGrow) return 1;
        break;
      case "VERTICAL":
        if ("STRETCH" === e.layout.layoutAlign) return 1;
    }
    if (e.layout.parent?.isGrid() && 1 === e.layout.layoutGrow) return 1;
  }
  if ((e.isGrid() || e.isAutoLayout() && "HORIZONTAL" === e.autoLayout.layoutMode) && e.children.length > 0) switch (e.autoLayout.primaryAxisSizingMode) {
    case "AUTO":
      return 2;
    case "FIXED":
      return 0;
  }
  if (e.isAutoLayout() && "VERTICAL" === e.autoLayout.layoutMode && e.children.length > 0) switch (e.autoLayout.counterAxisSizingMode) {
    case "AUTO":
      return 2;
    case "FIXED":
      return 0;
  }
  return e instanceof z && "WIDTH_AND_HEIGHT" === e.textAutoResize ? 2 : 0;
}
export function $$A3(e) {
  if ((e.layout.parent?.isAutoLayout() || e.layout.parent?.isGrid()) && "ABSOLUTE" !== e.layout.layoutPositioning) {
    switch (e.layout.parent.autoLayout.layoutMode) {
      case "VERTICAL":
        if (1 === e.layout.layoutGrow) return 1;
        break;
      case "HORIZONTAL":
        if ("STRETCH" === e.layout.layoutAlign) return 1;
    }
    if (e.layout.parent?.isGrid() && 1 === e.layout.layoutGrow) return 1;
  }
  if (e.isAutoLayout() && "VERTICAL" === e.autoLayout.layoutMode && e.children.length > 0) switch (e.autoLayout.primaryAxisSizingMode) {
    case "AUTO":
      return 2;
    case "FIXED":
      return 0;
  }
  if ((e.isGrid() || e.isAutoLayout() && "HORIZONTAL" === e.autoLayout.layoutMode) && e.children.length > 0) switch (e.autoLayout.counterAxisSizingMode) {
    case "AUTO":
      return 2;
    case "FIXED":
      return 0;
  }
  return e instanceof z && ("WIDTH_AND_HEIGHT" === e.textAutoResize || "HEIGHT" === e.textAutoResize) ? 2 : 0;
}
export const J3 = $$g0;
export const XQ = $$u1;
export const fw = $$f2;
export const qn = $$A3;
export const BL = $$_4;
export const u_ = $$h5;
export const HW = $$p6;
export const KH = $$m7;