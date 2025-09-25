import { jsx } from "react/jsx-runtime";
import { ImageSourceType } from "../905/585727";
import { R } from "../905/531474";
import { permissionScopeHandler } from "../905/189185";
import { getI18nString } from "../905/303541";
import { cortexAPI } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { processImageWithThumbnail } from "../figma_app/624361";
import { b, $ } from "../905/776478";
import { fetchImageAsByteArray } from "../905/866640";
import { k4 } from "../figma_app/878113";
import { generateShimmerOverlay } from "../905/929620";
import { Vm, ks } from "../figma_app/838407";
export let $$g0 = async ({
  params: e,
  abortController: t,
  clientLifecycleId: r
}) => {
  let {
    nodes,
    modelType
  } = e;
  nodes.map(e => {
    Vm(e.guid, jsx(generateShimmerOverlay, {
      borderRadiusStyle: b(e)
    }));
  });
  await Promise.allSettled(nodes.map(e => $$f2({
    node: e,
    modelType,
    clientLifecycleId: r,
    abortController: t
  }).finally(() => ks(e.guid)))).finally(() => nodes.map(e => ks(e.guid)));
};
export async function $$f2({
  node: e,
  modelType: t,
  clientLifecycleId: r,
  abortController: n
}) {
  let a = await k4(e);
  if (!a) throw Error("Failed to get jsx for node");
  if (!n.signal.aborted && e.isAlive) try {
    let s = {
      ..._$$Ay(),
      clientLifecycleId: r
    };
    let {
      description,
      image
    } = await cortexAPI.design.imagesFill({
      id: e.guid,
      width: e.size.x,
      height: e.size.y,
      jsx: a,
      modelType: t
    }, s);
    if (n.signal.aborted || !e.isAlive) return;
    await E({
      node: e,
      name: description,
      url: image,
      scaleMode: t === ImageSourceType.UNSPLASH ? "FILL" : void 0,
      abortController: n
    });
  } catch (t) {
    await E({
      node: e,
      name: getI18nString("ai_image_tools.blocked"),
      url: $,
      scaleMode: "FIT",
      backgroundFill: {
        type: "SOLID",
        color: {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        },
        visible: !0,
        opacity: 1,
        blendMode: "NORMAL"
      },
      abortController: n
    });
  }
}
async function E({
  node: e,
  name: t,
  url: r,
  scaleMode: n,
  backgroundFill: i,
  abortController: o
}) {
  let l = await fetchImageAsByteArray(r, ["*"]);
  let d = await processImageWithThumbnail(l, "image/png", t);
  !o.signal.aborted && e.isAlive && permissionScopeHandler.ai("editor-ai-fill-image", () => {
    let r = R(e);
    if (!r) throw Error("Failed to get topmost visible image fill");
    let s = [...e.fills];
    e.insertImageInFillPaint(d);
    let o = e.fills[s.length];
    if (!o) throw Error("Failed to get image fill");
    o.imageScaleMode = n ?? r.imageScaleMode;
    let l = i ? [i, o] : [o];
    e.fills = s.flatMap(e => e === r ? l : [e]);
    e.name = t;
  });
}
export function $$y1(e) {
  return e.reduce((e, t) => (e.push(...function e(t) {
    if (!t || !t.visible) return [];
    let r = [];
    R(t) && r.push(t);
    t.childrenNodes.forEach(t => {
      R(t) ? r.push(t) : t.childrenNodes && t.visible && r.push(...e(t));
    });
    return r;
  }(t)), e), []);
}
export const F1 = $$g0;
export const LJ = $$y1;
export const xS = $$f2;