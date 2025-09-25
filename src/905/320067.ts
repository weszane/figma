import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { trackEventAnalytics } from "../905/449184";
import { WAFImage } from "../905/675859";
import { XHR } from "../905/910117";
async function l(e) {
  try {
    await XHR.post("/api/images/retry_resize", e);
  } catch (e) {}
}
export function $$d0(e) {
  let [t, i] = useState(!0);
  return jsx(WAFImage, {
    sizes: e.sizes,
    srcSet: e.srcSet,
    src: e.src,
    onError: ({
      target: n
    }) => {
      t && (i(!1), function (e, t) {
        let i = new URL(e.src);
        let n = function (e) {
          if (!e.includes("resized")) return null;
          let t = e.split("/");
          let i = t[t.length - 2];
          return i ? i.split("x")[0] : null;
        }(e.currentSrc);
        if (n) {
          let r = {
            size: n,
            path: i.pathname.substring(1),
            image_type: t
          };
          trackEventAnalytics("retry_image_resizing", {
            currentSrc: e.currentSrc,
            size: r.size,
            path: r.path
          });
          l(r);
        }
        e.srcset = e.src;
      }(n, e.image_type));
    },
    alt: e.alt,
    className: e.className,
    ...e.imageProps
  });
}
export const c = $$d0;