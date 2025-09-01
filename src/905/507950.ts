import n from "../vendor/635";
import { Ay } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { n as _$$n } from "../905/347702";
import { Cj, XJ, fk, jM, zs, PE, VG } from "../905/23253";
var r = n;
let $$d1 = ({
  params: e,
  clientLifecycleId: t
}) => u({
  params: e,
  clientLifecycleId: t,
  bypassMaxUpscaleCheck: !0
});
let $$c0 = ({
  params: e,
  clientLifecycleId: t
}) => u({
  params: e,
  clientLifecycleId: t
});
let u = _$$n(async ({
  params: e,
  clientLifecycleId: t,
  bypassMaxUpscaleCheck: i
}) => await Cj({
  name: "upscale_image",
  ...e,
  suffix: "[Upscaled]",
  action: async ({
    hash: e,
    nodes: n,
    isBatch: o
  }) => {
    let d = r()(n.map(t => {
      let n = XJ({
        node: t,
        hash: e
      });
      if (void 0 === n.originalImageWidth || void 0 === n.originalImageHeight) throw new fk("Image dimensions are not available", {
        reportToSentry: !0
      });
      return function ({
        imageDimensions: e,
        nodeDimensions: t,
        bypassMaxUpscaleCheck: i,
        imageScaleMode: n,
        imageRotation: r
      }) {
        let {
          width,
          height
        } = e;
        let o = r && r % 180 != 0;
        let d = o ? t.height : t.width;
        let c = o ? t.width : t.height;
        if (width > 2048 || height > 2048) throw new jM("Image is too large to upscale");
        if (width < 16 || height < 16) throw new zs("Image is too small to upscale");
        let u = function ({
          imageWidth: e,
          imageHeight: t,
          nodeWidth: i,
          nodeHeight: n,
          bypassMaxUpscaleCheck: r,
          imageScaleMode: a
        }) {
          if ("TILE" === a || r) return 2;
          if (e >= 4 * i && t >= 4 * n) throw new PE("Image has already been upscaled to 4x node size");
          let s = e < 2 * i || t < 2 * n ? 2 : 4;
          return Math.max(s * i / e, s * n / t);
        }({
          imageWidth: width,
          imageHeight: height,
          nodeWidth: d,
          nodeHeight: c,
          bypassMaxUpscaleCheck: i,
          imageScaleMode: n
        });
        let {
          width: _width,
          height: _height
        } = function ({
          width: e,
          height: t
        }) {
          let i = Math.min(4096 / e, 4096 / t, 1);
          return {
            width: e * i,
            height: t * i
          };
        }({
          width: width * u,
          height: height * u
        });
        return {
          width: Math.round(_width),
          height: Math.round(_height)
        };
      }({
        imageScaleMode: n.imageScaleMode,
        imageRotation: n.rotation,
        imageDimensions: {
          width: n.originalImageWidth,
          height: n.originalImageHeight
        },
        nodeDimensions: {
          width: t.absoluteBoundingBox.w,
          height: t.absoluteBoundingBox.h
        },
        bypassMaxUpscaleCheck: i || o
      });
    }), ({
      width: e,
      height: t
    }) => e * t);
    if (!n[0] || !d) throw new fk("No nodes found", {
      reportToSentry: !0
    });
    let c = await VG(XJ({
      node: n[0],
      hash: e
    }));
    return (await Ay.design.upscaleClipdrop({
      image_url: c,
      ...d
    }, {
      ..._$$Ay(),
      clientLifecycleId: t
    })).base64_image;
  },
  modifyPaint: e => {
    "TILE" === e.imageScaleMode && e.scale && (e.scale /= 2);
  }
}));
export const r6 = $$c0;
export const sj = $$d1;