import { xw, TU } from "../905/585727";
import { ImageToolsBindings } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { s as _$$s } from "../905/583953";
import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { ds } from "../figma_app/314264";
import { Ay } from "../figma_app/432652";
import { Ay as _$$Ay, sZ } from "../figma_app/948389";
import { fk } from "../905/23253";
import { JT } from "../figma_app/632248";
export function $$h3(e) {
  if (getFeatureFlags().aip_make_images_one_request_only) return 1;
  switch (e) {
    case JT.EDIT_IMAGE:
      return 3;
    case JT.GENERATE_IMAGE:
      return 4;
  }
}
export let $$g1 = async ({
  abortController: e,
  params: {
    prompt: t,
    images: i,
    onImageSuccess: r,
    onImageFailed: a,
    dimensions: s,
    modelType: h,
    action: g,
    numGenerations: f = 1
  },
  clientLifecycleId: _
}) => {
  let A;
  let y = debugState.getState();
  let b = performance.now();
  let v = {};
  switch (g) {
    case JT.GENERATE_IMAGE:
      A = "image_gen";
      break;
    case JT.EDIT_IMAGE:
      A = "image_edit";
  }
  ds(`${A}_started`, y.openFile?.key, y, {});
  let I = 0;
  let E = [...Array(f)].map(async () => {
    try {
      var l;
      var m;
      let a;
      let d = {
        ..._$$Ay(),
        clientLifecycleId: _
      };
      if (i.length > 0) {
        if (h === xw.GPT_4O_IMAGE && (h = TU.OPENAI_GPT_IMAGE_1), h && (l = h, !Object.values(TU).includes(l))) throw new fk("Invalid edit image model type", {
          reportToSentry: !0
        });
        a = (await Ay.design.imagesEdit({
          ...(getFeatureFlags().aip_attach_reference_image ? {
            image_urls: i
          } : {
            image_url: i[0]
          }),
          prompt: t,
          targetWidth: s.width,
          targetHeight: s.height,
          modelType: h
        }, d)).base64_image;
      } else {
        if (h && (m = h, !Object.values(xw).includes(m))) throw new fk("Invalid make image model type", {
          reportToSentry: !0
        });
        let e = await Ay.design.generateImages({
          prompt: t,
          negativePrompt: "blurry, bad",
          cfgScale: 8,
          seed: Math.floor(1e4 * Math.random()),
          height: s.height,
          width: s.width,
          numImages: 1,
          modelType: h
        }, d);
        if (!e.images[0]) throw new fk("Generate image did not return an image", {
          reportToSentry: !0
        });
        a = e.images[0];
      }
      if (e.signal.aborted) return;
      r(a);
      void 0 === v.time_to_first_response && (v.time_to_first_response = performance.now() - b);
    } catch (e) {
      if (I++, ds(`${A}_failed`, y.openFile?.key, y, {
        error: e,
        reason: sZ(e)
      }), a(), I === f) throw e;
    }
  });
  let x = new Promise(t => {
    e.signal.addEventListener("abort", t);
  });
  await Promise.race([Promise.all(E), x]);
  v.completion_time = performance.now() - b;
  ds(`${A}_complete`, y.openFile?.key, y, {
    ...v
  });
};
export function $$f0({
  node: e,
  image: t,
  fillIndex: i,
  componentPropDefId: n,
  originalFill: r,
  action: o
}) {
  let l;
  e.isAlive && (l = n ? "image prop generation" : o === JT.EDIT_IMAGE ? "image edit" : "image generation", permissionScopeHandler.ai(l, () => {
    if (n) {
      e.setImageInPropAssignment(t, n);
      return;
    }
    let a = [...e.fills];
    let o = void 0 !== i && i >= 0 && i < a.length;
    if (e.insertImageInFillPaint(t), o) {
      let t = e.fills[a.length];
      t && (r && (t.imageScaleMode = r.imageScaleMode, t.rotation = r.rotation, t.scale = r.scale, t.opacity = r.opacity, t.blendMode = r.blendMode, t.transform = function (e, t) {
        let i;
        let n;
        if (!e.transform || !e.originalImageWidth || !e.originalImageHeight || !t.originalImageWidth || !t.originalImageHeight) return _$$s.identity().toFigMatrix();
        let r = _$$s.fromFigMatrix(e.transform);
        let {
          x: _x,
          y: _y
        } = r.toScale();
        let l = e.originalImageWidth / e.originalImageHeight;
        let d = t.originalImageWidth / t.originalImageHeight;
        let c = Math.sqrt(_x * _x * l / d);
        let u = Math.sqrt(_y * _y * d / l);
        r.scale(c / _x, u / _y);
        let {
          x,
          y
        } = r.offset();
        i = 1e-4 > Math.abs(1 - _x) ? 1e-4 > Math.abs(x) ? (1 - c) / 2 : x * c : x * (1 - c) / (1 - _x);
        n = 1e-4 > Math.abs(1 - _y) ? 1e-4 > Math.abs(y) ? (1 - u) / 2 : y * u : y * (1 - u) / (1 - _y);
        r.translate(i - x, n - y);
        return r.toFigMatrix();
      }(r, t)), a[i] = t, e.fills = a);
    }
  }));
}
export function $$_6() {
  if (!ImageToolsBindings) return;
  let e = ImageToolsBindings.getEditImageTarget();
  if (e && null !== e.fillIndex) return {
    guid: e.guid,
    fillIndex: e.fillIndex
  };
}
export function $$A2() {
  if (!ImageToolsBindings) return;
  let e = ImageToolsBindings.getGenerateImageTarget();
  return e ? null !== e.fillIndex ? {
    guid: e.guid,
    fillIndex: e.fillIndex
  } : e.componentPropDefId ? {
    guid: e.guid,
    componentPropDefId: e.componentPropDefId
  } : {
    guid: e.guid
  } : void 0;
}
export function $$y4(e) {
  return ImageToolsBindings?.isEditImageTargetValid(v(e)) ?? !1;
}
export function $$b5(e) {
  return ImageToolsBindings?.isGenerateImageTargetValid(v(e)) ?? !1;
}
function v(e) {
  return "componentPropDefId" in e ? {
    guid: e.guid,
    fillIndex: null,
    componentPropDefId: e.componentPropDefId
  } : "fillIndex" in e ? {
    guid: e.guid,
    fillIndex: e.fillIndex ?? null,
    componentPropDefId: null
  } : {
    guid: e.guid,
    fillIndex: null,
    componentPropDefId: null
  };
}
export const Xo = $$f0;
export const cb = $$g1;
export const eQ = $$A2;
export const is = $$h3;
export const pN = $$y4;
export const ui = $$b5;
export const vj = $$_6;