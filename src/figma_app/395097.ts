import { jsx } from "react/jsx-runtime";
import { A } from "../905/64690";
import { E as _$$E } from "../905/400842";
import { K } from "../905/932976";
import { r } from "../905/34835";
import { l as _$$l } from "../905/12560";
import { K as _$$K } from "../905/80148";
import { C } from "../905/532961";
import { H } from "../905/810846";
import { A as _$$A } from "../905/995561";
import { X } from "../905/757382";
import { Z } from "../905/820849";
import { R } from "../905/982325";
import { y as _$$y } from "../905/624404";
import { l as _$$l2 } from "../905/489485";
import { x } from "../905/402740";
import { A as _$$A2 } from "../905/891805";
import { t } from "../905/303541";
import { gl } from "../905/216495";
var $$I4 = (e => (e.ALL = "All", e.TOP = "Top", e.BOTTOM = "Bottom", e.LEFT = "Left", e.RIGHT = "Right", e.CUSTOM = "Custom", e.MIXED = "Mixed", e))($$I4 || {});
var $$S3 = (e => (e.TOP = "Top", e.BOTTOM = "Bottom", e.LEFT = "Left", e.RIGHT = "Right", e))($$S3 || {});
let v = {
  Top: jsx(A, {}),
  Bottom: jsx(_$$E, {}),
  Left: jsx(K, {}),
  Right: jsx(r, {}),
  TopBottom: jsx(_$$l, {}),
  LeftRight: jsx(_$$K, {}),
  TopRight: jsx(C, {}),
  TopLeft: jsx(H, {}),
  BottomRight: jsx(_$$A, {}),
  BottomLeft: jsx(X, {}),
  TopBottomRight: jsx(Z, {}),
  TopLeftRight: jsx(R, {}),
  TopBottomLeft: jsx(_$$y, {}),
  BottomLeftRight: jsx(_$$l2, {}),
  TopBottomLeftRight: jsx(x, {})
};
export function $$A1(e) {
  switch (e) {
    case "Mixed":
      return t("fullscreen.properties_panel.borders.mixed");
    case "All":
      return t("fullscreen.properties_panel.borders.all");
    case "Top":
      return t("fullscreen.properties_panel.borders.top");
    case "Bottom":
      return t("fullscreen.properties_panel.borders.bottom");
    case "Left":
      return t("fullscreen.properties_panel.borders.left");
    case "Right":
      return t("fullscreen.properties_panel.borders.right");
    case "Custom":
      return t("fullscreen.properties_panel.borders.custom");
    default:
      return "";
  }
}
export function $$x2(e) {
  switch (e) {
    case "Mixed":
    case "All":
      return jsx(x, {});
    case "Top":
      return jsx(A, {});
    case "Bottom":
      return jsx(_$$E, {});
    case "Left":
      return jsx(K, {});
    case "Right":
      return jsx(r, {});
    case "Custom":
      return jsx(_$$A2, {});
  }
}
export function $$N0(e, t) {
  return gl(e) ? jsx(x, {}) : 0 === e.length ? ((null == t || "Custom" === t) && (t = "All"), $$x2(t)) : v[e.join("")];
}
export function $$C5(e) {
  switch (e) {
    case "All":
    case "Mixed":
      return "borderSharedWeight";
    case "Custom":
      return "strokeWeight";
    case "Top":
      return "borderTopWeight";
    case "Bottom":
      return "borderBottomWeight";
    case "Left":
      return "borderLeftWeight";
    case "Right":
      return "borderRightWeight";
  }
}
export const Fz = $$N0;
export const Uj = $$A1;
export const Ww = $$x2;
export const kF = $$S3;
export const om = $$I4;
export const ui = $$C5;