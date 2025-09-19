import { AppStateTsApi, Side, StrokeAlignment, SceneGraphHelpers } from "../figma_app/763686";
import { unpackToNormalizedRgb } from "../figma_app/273493";
import { r as _$$r } from "../905/249071";
import { M as _$$M } from "../905/512402";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { canvasGridAtom } from "../905/618447";
import { Bm, Z5, GJ, ZR } from "../905/430950";
export let $$p1 = 8;
export function $$m9(e, t, i, r, a) {
  let o = atomStoreManager.get(canvasGridAtom);
  if (g($$h4(o, r) || new _$$M(0, 0), e, t) && 0 !== o.length) return {
    mouse: "ADD_CHILD_AFTER_FINAL_ROW_HOVERED",
    canvasPos: e
  };
  let l = o?.length ? AppStateTsApi.canvasGrid().getClosestGridCoord(e, Side.RIGHT) : {
    row: 0,
    col: 0
  };
  if (-1 === l.row || -1 === l.col) return {
    mouse: "INACTIVE"
  };
  let u = $$E3(o, l.row, l.col, r);
  let m = AppStateTsApi.canvasGrid().rectForCoord(l, u, !0);
  let f = e.y >= m.origin.y && e.y <= m.origin.y + m.size.y;
  let _ = e.x >= m.origin.x && e.x <= m.origin.x + m.size.x;
  if (0 === o.length && f && _) return f && _ ? {
    mouse: "ADD_FIRST_CHILD_HOVERED"
  } : {
    mouse: "INACTIVE"
  };
  if (!f && !i) return function (e, t, i) {
    let r = atomStoreManager.get(canvasGridAtom);
    if (!r.length) return {
      mouse: "INACTIVE"
    };
    let a = AppStateTsApi.canvasGrid().rowContentBoundsInCanvas(0, !1);
    let s = a.origin.y + a.size.y;
    if (e.y < s - 300) return {
      mouse: "INACTIVE"
    };
    let o = e.y > s;
    for (let a = 0; a <= r.length; a++) {
      let r = AppStateTsApi.canvasGrid().rowContentBoundsInCanvas(a, !1);
      let l = r.origin.x - AppStateTsApi.canvasGrid().gridPadding();
      let d = r.origin.y;
      let c = r.size.x;
      if (e.x < l - 500 || e.x > l + c + 500) break;
      if (o && e.y < d) {
        let n = {
          x: l - $$p1,
          y: (s + d) / 2 + i
        };
        return {
          mouse: g(n, e, t) ? "ADD_ROW_DOT_HOVERED" : "ADD_ROW_DOT_NEARBY",
          canvasPos: n,
          row: a,
          rowWidth: c
        };
      }
      if (!(e.y > s)) break;
      s = d + r.size.y;
      o = e.y > s;
    }
    return {
      mouse: "INACTIVE"
    };
  }(e, t, a);
  if (o.length && l.row < o.length) {
    let r = o[l.row]?.length || 0;
    if (!i && !_ && l.col > 0 && l.col <= r) {
      let i = AppStateTsApi.canvasGrid().gridChildSpacing();
      let a = m.origin.y + m.size.y / 2;
      let s = {
        x: m.origin.x - i / 2,
        y: a
      };
      let o = g(s, e, t) ? "ADD_CHILD_DOT_HOVERED" : "ADD_CHILD_DOT_NEARBY";
      return l.col === r ? "ADD_CHILD_DOT_HOVERED" === o ? {
        mouse: "ADD_CHILD_AFTER_ROW_HOVERED",
        canvasPos: e,
        coord: l
      } : {
        mouse: "INACTIVE"
      } : {
        mouse: o,
        canvasPos: s,
        coord: l
      };
    }
  }
  return {
    mouse: "INACTIVE"
  };
}
export function $$h4(e, t) {
  if (!AppStateTsApi) return new _$$M(-1, -1);
  let i = AppStateTsApi.canvasGrid().rowContentBoundsInCanvas(e.length - 1, !1);
  let r = $$x8(e, e.length, t);
  let a = AppStateTsApi.canvasGrid().getRowGUID(e.length - 1) ?? defaultSessionLocalIDString;
  let d = !!getSingletonSceneGraph().get(a)?.isCanvasGridStateGroupRow;
  return new _$$M(i.origin.x + r.x / 2 + (d ? AppStateTsApi.canvasGrid().gridPadding() : 0), i.origin.y + i.size.y + AppStateTsApi.canvasGrid().gridRowSpacing() / 2 - (d ? AppStateTsApi.canvasGrid().gridPadding() / 2 : 0));
}
function g(e, t, i) {
  let n = _$$M.fromVectorD(i.canvasSpaceToViewportSpace(e));
  let r = _$$M.fromVectorD(i.canvasSpaceToViewportSpace(t));
  return 20 > n.distanceTo(r);
}
let f = e => [e.origin, {
  x: e.origin.x + e.size.x,
  y: e.origin.y
}, {
  x: e.origin.x + e.size.x,
  y: e.origin.y
}, {
  x: e.origin.x + e.size.x,
  y: e.origin.y + e.size.y
}, {
  x: e.origin.x + e.size.x,
  y: e.origin.y + e.size.y
}, {
  x: e.origin.x,
  y: e.origin.y + e.size.y
}, {
  x: e.origin.x,
  y: e.origin.y + e.size.y
}, e.origin];
export function $$_10(e, t, i, o, l, d = 0, c = !1, u = !1, p = !1) {
  if (!AppStateTsApi) return;
  let m = t.canvasSpaceToViewportSpace(e.origin);
  let h = {
    x: e.size.x * t.canvasScale(),
    y: e.size.y * t.canvasScale()
  };
  let g = 16 * t.canvasScale();
  let A = (AppStateTsApi.canvasGrid().gridPadding() || 0) * t.canvasScale();
  let y = {
    origin: c ? new _$$M(m.x + 10, m.y) : m,
    size: h
  };
  if (p || (i.fillRoundedRect(y, g, o), i.renderDashedLines(f(y), 8, 8, unpackToNormalizedRgb(l), 2)), c) {
    let e = AppStateTsApi.canvasGrid().rowContentBoundsInCanvas(d, !1);
    let r = t.canvasSpaceToViewportSpace(e.origin);
    let o = {
      x: e.size.x * t.canvasScale(),
      y: e.size.y * t.canvasScale()
    };
    let l = p ? o.x + 12 + A / 2 : o.x + y.size.x + A + 15;
    let c = new _$$r(new _$$M(r.x, r.y - .5), new _$$M(l, o.y));
    u ? i.strokeRoundedRect(c, 3, AppStateTsApi.getBgAssistiveHover(), 2, StrokeAlignment.CENTER) : i.strokeRoundedRectWithDash(c, 3, AppStateTsApi.getBgAssistiveHover(), 1, 10, 5, StrokeAlignment.INSIDE);
  }
}
export function $$A2(e, t, i) {
  let n = t.canvasSpaceToViewportSpace(e);
  let r = {
    x: n.x + Bm + 5 + 4.5,
    y: n.y - 4.12
  };
  i.renderWrappingIndicator(r);
}
export function $$y0(e, t, i, r = 0, a = !1) {
  AppStateTsApi && (a ? Z5(e, t, i, AppStateTsApi.getFSCanvasDefaultFill(), AppStateTsApi.getBgAssistiveHover(), r) : GJ(e, t, i, AppStateTsApi.getFSCanvasDefaultFill(), AppStateTsApi.getCanvasButton(), r));
}
export function $$b7(e, t, i, r = 0, a = !1) {
  AppStateTsApi && ZR(e, t, i, a ? AppStateTsApi.getBgAssistiveHover() : AppStateTsApi.getCanvasButton(), r);
}
export function $$v5(e, t) {
  return "INACTIVE" !== t && "ADD_CHILD_AFTER_ROW_HOVERED" !== t && "ADD_CHILD_AFTER_FINAL_ROW_HOVERED" !== t && !("ADD_CHILD_DOT_NEARBY" === e && "ADD_CHILD_DOT_HOVERED" === t || "ADD_ROW_DOT_NEARBY" === e && "ADD_ROW_DOT_HOVERED" === t) && !("ADD_CHILD_DOT_HOVERED" === e && "ADD_CHILD_DOT_NEARBY" === t || "ADD_ROW_DOT_HOVERED" === e && "ADD_ROW_DOT_NEARBY" === t) && "ADD_FIRST_CHILD_HOVERED" !== t && t !== e;
}
function I(e) {
  let t = SceneGraphHelpers.getNodeSize(e);
  return t ? {
    x: t.width,
    y: t.height
  } : (console.error("CanvasGridAddBehavior no node size returned for guid " + e), {
    x: 0,
    y: 0
  });
}
export function $$E3(e, t, i, n) {
  if (0 === e.length) return n;
  let r = e[t];
  if (!r) return n;
  let a = r[i - 1];
  if (!a) {
    let i = e[t - 1];
    return i ? $$E3(e, t - 1, i.length - 1, n) : n;
  }
  return I(a);
}
export function $$x8(e, t, i) {
  let n = $$S6(e, t);
  return n ? I(n) : i;
}
export function $$S6(e, t) {
  if (0 === e.length) return;
  let i = e[t - 1];
  if (!i) return;
  let n = i[0];
  if (n) return n;
}
export const $r = $$y0;
export const KV = $$p1;
export const M = $$A2;
export const PF = $$E3;
export const QQ = $$h4;
export const X1 = $$v5;
export const oq = $$S6;
export const qu = $$b7;
export const v2 = $$x8;
export const yh = $$m9;
export const zw = $$_10;