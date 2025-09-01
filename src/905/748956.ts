import { t as _$$t } from "../905/303541";
var r = (e => (e[e.NONE = 0] = "NONE", e[e.DECREASED = 1] = "DECREASED", e[e.INCREASED = 2] = "INCREASED", e))(r || {});
var a = (e => (e[e.NONE = 0] = "NONE", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN", e[e.RIGHT = 4] = "RIGHT", e[e.LEFT = 8] = "LEFT", e[e.UP_RIGHT = 5] = "UP_RIGHT", e[e.UP_LEFT = 9] = "UP_LEFT", e[e.DOWN_RIGHT = 6] = "DOWN_RIGHT", e[e.DOWN_LEFT = 10] = "DOWN_LEFT", e))(a || {});
var s = (e => (e[e.NONE = 0] = "NONE", e[e.HORIZONTAL = 1] = "HORIZONTAL", e[e.VERTICAL = 2] = "VERTICAL", e[e.BOTH = 3] = "BOTH", e))(s || {});
function o(e) {
  switch (e) {
    case 1:
      return _$$t("fullscreen.accessibility.node_resize_decrease");
    case 2:
      return _$$t("fullscreen.accessibility.node_resize_increase");
    default:
      return _$$t("fullscreen.accessibility.node_resize_none");
  }
}
export function $$l0(e, t) {
  let i;
  let r;
  let a;
  let s = 0;
  let l = 0;
  let d = 0;
  switch (0 !== e.x && (s |= 1, l = e.x > 0 ? 2 : 1), 0 !== e.y && (s |= 2, d = e.y > 0 ? 2 : 1), s) {
    case 0:
      return;
    case 1:
      i = _$$t("fullscreen.accessibility.node_resize_horizontal");
      r = o(l);
      a = Math.abs(e.x);
      break;
    case 2:
      i = _$$t("fullscreen.accessibility.node_resize_vertical");
      r = o(d);
      a = Math.abs(e.y);
      break;
    default:
      let c = Math.abs(e.x);
      let u = o(l);
      let p = Math.abs(e.y);
      let m = o(d);
      return _$$t("fullscreen.accessibility.node_resize_bidirectional", {
        nodeType: t,
        resizedComparisonX: u,
        nodeResizeXDelta: _$$t("fullscreen.accessibility.node_unit", {
          numUnits: c
        }),
        resizedComparisonY: m,
        nodeResizeYDelta: _$$t("fullscreen.accessibility.node_unit", {
          numUnits: p
        })
      });
  }
  return _$$t("fullscreen.accessibility.node_resize_unidirectional", {
    nodeType: t,
    nodeSizeDelta: a,
    resizeComparison: r,
    nodeDirection: i
  });
}
export function $$d2(e, t) {
  let i;
  let r;
  let a = 0;
  switch (e.x > 0 ? a |= 4 : e.x < 0 && (a |= 8), e.y < 0 ? a |= 1 : e.y > 0 && (a |= 2), a) {
    case 0:
      return;
    case 1:
      i = _$$t("fullscreen.accessibility.node_movement_up");
      r = Math.abs(e.y);
      break;
    case 2:
      i = _$$t("fullscreen.accessibility.node_movement_down");
      r = Math.abs(e.y);
      break;
    case 4:
      i = _$$t("fullscreen.accessibility.node_movement_right");
      r = Math.abs(e.x);
      break;
    case 8:
      i = _$$t("fullscreen.accessibility.node_movement_left");
      r = Math.abs(e.x);
      break;
    default:
      let s = (4 & a) == 4 ? _$$t("fullscreen.accessibility.node_movement_right") : _$$t("fullscreen.accessibility.node_movement_left");
      let o = Math.abs(e.x);
      let l = (1 & a) == 1 ? _$$t("fullscreen.accessibility.node_movement_up") : _$$t("fullscreen.accessibility.node_movement_down");
      let d = Math.abs(e.y);
      return _$$t("fullscreen.accessibility.node_movement_bidirectional", {
        nodeType: t,
        nodePositionXDelta: _$$t("fullscreen.accessibility.node_unit", {
          numUnits: o
        }),
        nodeDirectionX: s,
        nodePositionYDelta: _$$t("fullscreen.accessibility.node_unit", {
          numUnits: d
        }),
        nodeDirectionY: l
      });
  }
  return _$$t("fullscreen.accessibility.node_movement_unidirectional", {
    nodeType: t,
    nodePositionDelta: r,
    nodeDirection: i
  });
}
export function $$c1(e, t, i, n) {
  return e > 0 ? t() : e < -0 ? i() : n?.();
}
export const IA = $$l0;
export const nC = $$c1;
export const vS = $$d2;