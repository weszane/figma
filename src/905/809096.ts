import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useDelayedTrue } from "../905/815905";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogHiddenTitle, DialogBody } from "../figma_app/272243";
import { LoadingSpinner } from "../905/443820";
import { styleBuilderInstance } from "../905/941192";
import { popModalStack } from "../905/156213";
function p(e) {
  let t = useModalManager({
    open: !0,
    onClose: () => {
      e.onClose();
    }
  });
  return jsx(ModalRootComponent, {
    height: e.height,
    manager: t,
    width: e.estimatedWidth,
    htmlAttributes: {
      id: e.id,
      "data-testid": "modal-loading-state"
    },
    children: jsxs(DialogContents, {
      children: [e.title && jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: e.title
        })
      }), e.hiddenTitle && jsx(DialogHiddenTitle, {
        children: e.hiddenTitle
      }), jsx(DialogBody, {
        children: jsx("div", {
          style: styleBuilderInstance.flex.itemsCenter.justifyCenter.add({
            height: `${e.estimatedHeight}px`
          }).$,
          children: jsx(LoadingSpinner, {})
        })
      })]
    })
  });
}
export function $$h0(e) {
  let t = useDispatch<AppDispatch>();
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
