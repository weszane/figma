import { HorizontalAlignment, VerticalAlignment } from "../figma_app/763686";
import { unpackToNormalizedRgb } from "../figma_app/273493";
import { FontWeight, AppStateTsApi, SceneGraphHelpers } from "../figma_app/13528";
import { Rectangle } from "../905/249071";
import { Vector2D } from "../905/512402";
import { atomStoreManager } from "../figma_app/27355";
import { nodeGridAtom } from "../905/618447";
import { isSlideRowOrStateGroup } from "../figma_app/396464";
export let $$u5 = 5;
function p(e, t, r) {
  e && (e.overlayTransform.m02 !== t || e.overlayTransform.m12 !== r) && (e.overlayTransform = {
    ...e.overlayTransform,
    m02: t,
    m12: r
  });
}
export function $$_2(e, t, r) {
  e && (e.relativeTransform.m02 !== t || e.relativeTransform.m12 !== r) && (e.relativeTransform = {
    ...e.relativeTransform,
    m02: t,
    m12: r
  });
}
export function $$h0({
  row: e,
  x: t = 0,
  y: r = 0,
  isStateGroupRowAllowed: n = !1
}) {
  let i = atomStoreManager.get(nodeGridAtom)[e];
  if (i && i.length > 0) {
    let e = i[0]?.node?.parentNode;
    e && isSlideRowOrStateGroup(e, n) && p(e, t, r);
    i.forEach(e => {
      e.node?.parentNode?.type === "MODULE" && p(e.node.parentNode, t, r);
    });
  }
}
export function $$m4(e, t, r, n, i) {
  let l = new Vector2D(4, 4);
  let d = e.measureText(t, FontWeight.MEDIUM);
  let c = e.measureText(r, FontWeight.MEDIUM);
  let u = 2 * l.x + 13 + 5 + d.x + c.x + (n ? 20 : 0);
  let p = i.origin.x - l.x;
  let _ = new Rectangle(new Vector2D(p, i.origin.y - 8 - l.y - 1), new Vector2D(u, 25));
  let h = new Vector2D(i.origin.x + 13 + 5, i.origin.y);
  let m = new Vector2D(h.x + d.x, h.y);
  let g = null;
  let f = null;
  n && (g = new Rectangle(new Vector2D(m.x + c.x + 4, h.y - 8 - 1), new Vector2D(16, 16)), f = new Vector2D(g.origin.x + 8, g.origin.y - l.y - 1));
  return {
    backgroundBoxRect: _,
    titleOrigin: h,
    variantsOrigin: m,
    errorIconRect: g,
    errorTooltipOrigin: f
  };
}
export function $$g1(e, t, r = !1, n = 0) {
  if (!AppStateTsApi || !SceneGraphHelpers) return null;
  let i = AppStateTsApi.canvasGrid().getRowGUID(t);
  let l = SceneGraphHelpers.getBoundsForNode(i);
  if (!l) return null;
  let d = AppStateTsApi.canvasGrid().rowContentBoundsInCanvas(t, !r);
  let c = r ? 0 : AppStateTsApi.canvasGrid().gridPadding();
  let u = d.origin.x + c;
  let p = d.origin.y;
  let _ = Vector2D.fromVectorD(e.canvasSpaceToViewportSpace({
    x: u,
    y: p
  }));
  _.y += n;
  let h = e.canvasScale() * l.width;
  return new Rectangle(_, new Vector2D(h, 1));
}
export function $$f3(e, t, r, l, d, c = !0) {
  if (!AppStateTsApi) return;
  let {
    backgroundBoxRect,
    titleOrigin,
    variantsOrigin,
    errorIconRect
  } = $$m4(e, l, r, d, t);
  (function (e, t, r) {
    if (!AppStateTsApi) return;
    let n = new Vector2D(4, 4);
    e.fillRect(new Rectangle(new Vector2D(t.origin.x - n.x / 2, t.origin.y + 8 - 2), new Vector2D(4, 25)), AppStateTsApi?.getFSCanvasDefaultFill());
    e.fillRect(new Rectangle(new Vector2D(r.right() - 1, t.origin.y - 2), new Vector2D(25, 4)), AppStateTsApi.getFSCanvasDefaultFill());
  })(e, t, backgroundBoxRect);
  e.fillRoundedRect(backgroundBoxRect, 5, c ? AppStateTsApi.getBgAssistiveHover() : AppStateTsApi.getFSCanvasDefaultFill());
  e.renderTemplateFillIcon(new Vector2D(t.origin.x, t.origin.y - 8 + .5), c ? AppStateTsApi.getBgFS() : AppStateTsApi.getBgAssistiveHover());
  (function (e, t, r, s, o, l = !1) {
    let d = l ? AppStateTsApi?.getFSCanvasDefaultFill() : AppStateTsApi?.getBgAssistiveHover();
    d && (e.fillTextWithFontWeight(t, r, FontWeight.MEDIUM, unpackToNormalizedRgb(d), HorizontalAlignment.LEFT, VerticalAlignment.CENTER, 0), e.fillTextWithFontWeight(s, o, FontWeight.NORMAL, unpackToNormalizedRgb(d), HorizontalAlignment.LEFT, VerticalAlignment.CENTER, 0));
  })(e, titleOrigin, l, variantsOrigin, r, c);
  errorIconRect && e.renderTemplateInfoIcon(errorIconRect.origin, AppStateTsApi.getBgAssistiveHover(), AppStateTsApi.getBuzzBgSelected());
}
export const $j = $$h0;
export const Ds = $$g1;
export const HH = $$_2;
export const iZ = $$f3;
export const vo = $$m4;
export const xC = $$u5;