import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { useDelayedTrue } from "../905/815905";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, r1, nB } from "../figma_app/272243";
import { k } from "../905/443820";
import { sx } from "../905/941192";
import { popModalStack } from "../905/156213";
function p(e) {
  let t = hS({
    open: !0,
    onClose: () => {
      e.onClose();
    }
  });
  return jsx(bL, {
    height: e.height,
    manager: t,
    width: e.estimatedWidth,
    htmlAttributes: {
      id: e.id,
      "data-testid": "modal-loading-state"
    },
    children: jsxs(vo, {
      children: [e.title && jsx(Y9, {
        children: jsx(hE, {
          children: e.title
        })
      }), e.hiddenTitle && jsx(r1, {
        children: e.hiddenTitle
      }), jsx(nB, {
        children: jsx("div", {
          style: sx.flex.itemsCenter.justifyCenter.add({
            height: `${e.estimatedHeight}px`
          }).$,
          children: jsx(k, {})
        })
      })]
    })
  });
}
export function $$h0(e) {
  let t = useDispatch();
  let i = useDelayedTrue(100);
  let o = useCallback(() => {
    t(popModalStack());
  }, [t]);
  return i ? jsx(p, {
    ...e,
    onClose: o
  }) : null;
}
export const N = $$h0;