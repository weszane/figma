import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useState, useEffect } from "react";
import { wA } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, nB } from "../figma_app/272243";
import { k as _$$k } from "../905/443820";
import { getSingletonSceneGraph } from "../905/700578";
import { eU, fp } from "../figma_app/27355";
import { H9 } from "../figma_app/930338";
import { t } from "../905/303541";
import { Lo, to } from "../905/156213";
import { Ju, ZU } from "../905/102752";
import { D } from "../6268/819008";
let f = eU({});
async function y(e) {
  let t = await e.loadImagesAndExport([{
    imageType: "PNG",
    contentsOnly: !0,
    useAbsoluteBounds: !1,
    colorProfile: "DOCUMENT"
  }]);
  return `data:image/png;base64,${H9(t)}`;
}
let _ = () => {
  let [e, t] = fp(f);
  return useCallback(async n => {
    let r = getSingletonSceneGraph();
    if (e[n]) return e[n];
    let i = r.get(n);
    if (!i) return;
    let s = await y(i);
    t(e => ({
      ...e,
      [n]: s
    }));
    return s;
  }, [e, t]);
};
let b = Ju(function (e) {
  let {
    importNodeGuid
  } = e;
  let [n, d] = useState(!0);
  let [x, g] = useState(!1);
  let [y, b] = useState(null);
  let [j] = fp(f);
  let v = _();
  let k = wA();
  let C = useCallback(async () => {
    g(!1);
    j[importNodeGuid] || d(!0);
    try {
      let e = await v(importNodeGuid);
      b(e || null);
      e || g(!0);
    } catch (e) {
      console.error("Error loading image:", e);
      g(!0);
    } finally {
      d(!1);
    }
  }, [importNodeGuid, v, j]);
  useEffect(() => {
    C();
  }, [C]);
  let E = hS({
    open: !0,
    onClose: () => (k(Lo()), !0)
  });
  return jsx(bL, {
    manager: E,
    width: "fit-content",
    height: "full",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: null
      }), jsx(nB, {
        scrolling: "none",
        padding: 0,
        children: jsx("div", {
          style: {
            width: "80vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
          },
          children: n ? jsx("div", {
            children: jsx(_$$k, {
              size: "lg"
            })
          }) : y ? jsx(D, {
            imageSrc: y,
            shouldZoomToStart: !1,
            shouldWheelPan: !0,
            enableZoomControls: !0,
            enableZoomKeyControls: !0,
            minZoomFactor: .01,
            maxZoomFactor: 10,
            crossOrigin: "use-credentials"
          }) : x ? jsx("div", {
            style: {
              textAlign: "center"
            },
            children: t("figmake.import_modal.error")
          }) : null
        })
      })]
    })
  });
}, "FigmakeImportModal", ZU.NO);
export function $$j0() {
  let e = wA();
  return t => e(to({
    type: b,
    data: {
      importNodeGuid: t
    }
  }));
}
export const N = $$j0;