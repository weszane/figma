import { useMemo } from "react";
import { ImageToolsBindings, SceneGraphHelpers, AppStateTsApi, GridLayoutApi, Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { fullscreenValue } from "../figma_app/455680";
import { i2 } from "../905/913055";
import { KH } from "../figma_app/722362";
import { yesNoTrackingEnum } from "../figma_app/198712";
export let $$p2 = e => Uint8Array.from(e.match(/.{1,2}/g).map(e => parseInt(e, 16)));
export function $$_1() {
  let e = KH();
  return useMemo(() => !!e && !!ImageToolsBindings?.getGenerateImageTarget(), [e]);
}
export function $$h0({
  create: e,
  canvasGrid: t,
  selectTargetNode: r = !0,
  size: n = {
    x: 1024,
    y: 1024
  }
}) {
  let c;
  let _;
  let h = getSingletonSceneGraph();
  let m = h.getCurrentPage();
  if (!m) throw Error("Something went wrong");
  let g = i2();
  let f = t && t.length > 0;
  let E = SceneGraphHelpers?.hasGridCellSelection();
  let y = null;
  if (1 === g.length) {
    if ((c = g[0]) && !function (e) {
      let t = fullscreenValue.getViewportInfo();
      let r = t.width / t.zoomScale;
      let n = t.height / t.zoomScale;
      let i = t.offsetX - r / 2;
      let a = t.offsetX + r / 2;
      let s = t.offsetY - n / 2;
      let o = t.offsetY + n / 2;
      let d = e.absoluteBoundingBox;
      let c = d.x;
      let u = d.y;
      let p = d.x + d.w;
      let _ = d.y + d.h;
      return !(p > a) && !(_ > o) && !(c < i) && !(u < s);
    }(c) && (c = void 0), f) {
      if (c?.isOrInSlide) {
        let e = c.containingSlideId;
        y = h.get(e);
      } else c?.containingCooperFrame() && (y = c.containingCooperFrame());
    }
    ImageToolsBindings?.getGenerateImageTarget() || (c = void 0);
    c && c.isGrid && E && (_ = c, c = void 0);
  }
  permissionScopeHandler.user("generate image", () => {
    if (!c && e) {
      let e = fullscreenValue.getViewportInfo();
      if ((c = h.createNode("RECTANGLE")).size = n, c.x = e.offsetX - c.size.x / 2, c.y = e.offsetY - c.size.y / 2, f) {
        if (!y) {
          let {
            row = 0,
            col = 0
          } = AppStateTsApi?.canvasGrid()?.getClosestGridCoord({
            x: c.x,
            y: c.y
          }, null) ?? {};
          let n = Math.max(row, 0);
          let a = Math.max(col, 0);
          let s = t?.[n]?.[a];
          let o = s ? h.get(s) : null;
          o && !o.isInstance && (y = o);
        }
        if (y) {
          let e = function (e) {
            let t = e.absoluteBoundingBox;
            return {
              x: t.x + t.w / 2,
              y: t.y + t.h / 2
            };
          }(y);
          c.x = e.x - c.size.x / 2;
          c.y = e.y - c.size.y / 2;
        }
      }
      c.fills = [{
        type: "IMAGE",
        image: {
          hash: $$p2("7f12ea1300756f144a0fb5daaf68dbfc01103a46"),
          name: "Checker"
        },
        imageScaleMode: "FILL"
      }];
      let a = !1;
      E && _ && (a = !0 === GridLayoutApi?.insertGeneratedImageAtSelectedCell(_.guid, c.guid));
      a || m.appendChild(c);
      r && (m.setSelectionToSingleNode(c.guid), c.isGridChild || fullscreenValue.updateSelectionProperties({
        aspectRatioLockToggled: !0
      }, {
        shouldCommit: yesNoTrackingEnum.NO
      }));
      Fullscreen?.showSelectionOverlayImmediately();
    }
  });
  return c ?? null;
}
export const qq = $$h0;
export const u = $$_1;
export const xJ = $$p2;