import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogBody } from "../figma_app/272243";
import { k as _$$k } from "../905/443820";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { uint8ArrayToBase64 } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { popModalStack, showModalHandler } from "../905/156213";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { D } from "../6268/819008";
let f = atom({});
async function y(e) {
  let t = await e.loadImagesAndExport([{
    imageType: "PNG",
    contentsOnly: !0,
    useAbsoluteBounds: !1,
    colorProfile: "DOCUMENT"
  }]);
  return `data:image/png;base64,${uint8ArrayToBase64(t)}`;
}
let _ = () => {
  let [e, t] = useAtomValueAndSetter(f);
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
let b = registerModal(function (e) {
  let {
    importNodeGuid
  } = e;
  let [n, d] = useState(!0);
  let [x, g] = useState(!1);
  let [y, b] = useState(null);
  let [j] = useAtomValueAndSetter(f);
  let v = _();
  let k = useDispatch();
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
  let E = useModalManager({
    open: !0,
    onClose: () => (k(popModalStack()), !0)
  });
  return jsx(ModalRootComponent, {
    manager: E,
    width: "fit-content",
    height: "full",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: null
      }), jsx(DialogBody, {
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
            children: getI18nString("figmake.import_modal.error")
          }) : null
        })
      })]
    })
  });
}, "FigmakeImportModal", ModalSupportsBackground.NO);
export function $$j0() {
  let e = useDispatch();
  return t => e(showModalHandler({
    type: b,
    data: {
      importNodeGuid: t
    }
  }));
}
export const N = $$j0;