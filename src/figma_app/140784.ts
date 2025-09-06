import { useMemo, useCallback, useEffect } from "react";
import { MoD, Vzr } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager, useAtomValueAndSetter } from "../figma_app/27355";
import { c6 } from "../figma_app/659187";
import { Jr } from "../figma_app/624361";
import { Fk } from "../figma_app/167249";
var c = (e => (e.VALID = "valid", e.GENERATING = "generating", e.ERROR = "error", e))(c || {});
let u = atom({});
export function $$p0() {
  let e = atomStoreManager.get(u);
  for (let t of Object.getOwnPropertyNames(e)) e[t]?.state === "valid" && URL.revokeObjectURL(e[t].url);
  atomStoreManager.set(u, {});
}
export function $$_1({
  assetId: e,
  thumbnailVersion: t,
  scale: r,
  ...c
}) {
  let p = Fk((e, t) => {
    let r = t ? e?.get(t) : null;
    return r ? {
      width: r.size.x,
      height: r.size.y
    } : {
      width: 0,
      height: 0
    };
  }, e);
  let {
    imgStyle,
    width,
    height
  } = useMemo(() => {
    let e = getFeatureFlags().dt_insp_impr_assets && p.width > 2.5 * p.height;
    let t = getFeatureFlags().dt_insp_impr_assets && p.height > 2.5 * p.width;
    let {
      width: _width,
      height: _height
    } = e ? {
      height: c.height,
      width: p.width / p.height * c.height
    } : t ? {
      width: c.width,
      height: p.height / p.width * c.width
    } : {
      width: c.width,
      height: c.height
    };
    return {
      imgStyle: {
        maxWidth: _width / 2,
        maxHeight: _height / 2,
        transform: `scale(0.5, 0.5)${e || t ? ` translate(${e ? `calc(50% - ${_height / 4}px)` : "0"}, ${t ? `calc(50% - ${_width / 4}px)` : "0"})` : ""}`
      },
      width: _width,
      height: _height
    };
  }, [p.width, p.height, c.width, c.height]);
  let g = function ({
    assetId: e,
    width: t,
    height: r,
    scale: n
  }) {
    return `${e}-${t}x${r}@${n}x`;
  }({
    assetId: e,
    width,
    height,
    scale: r
  });
  let [f, E] = useAtomValueAndSetter(u);
  let y = f[g];
  let b = y?.state === "valid" ? y.url : void 0;
  let T = useCallback(e => {
    E(t => ({
      ...t,
      [g]: e
    }));
  }, [g, E]);
  let I = c6(e);
  return (useEffect(() => {
    let n = async () => {
      T({
        state: "generating",
        version: t
      });
      await Jr().loadAllImagesUnder([e], MoD.NON_ANIMATED_ONLY, "handoff.assetPreview");
      let [n, a] = Vzr.generateThumbnailForNode(e, width, height, r, {
        forceContentsOnly: !0
      });
      a.length > 0 && (y?.state === "valid" && URL.revokeObjectURL(y.url), T({
        state: "valid",
        url: URL.createObjectURL(new Blob([a])),
        version: t
      }));
    };
    let a = y?.state === "generating";
    let s = y?.state === "valid";
    let o = y?.version !== t;
    let d = y?.state === "error";
    a || s && (!o || d) || n().catch(e => {
      T({
        state: "error",
        version: t,
        error: e
      });
      console.error(e);
    });
  }, [e, height, r, width, g, t, b, y, T]), b) ? {
    url: b,
    backgroundStyle: I,
    imgStyle
  } : {
    backgroundStyle: I
  };
}
export const K = $$p0;
export const O = $$_1;