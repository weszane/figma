import { hg } from "../figma_app/425489";
import { A as _$$A } from "../905/991888";
import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useState, useContext, useMemo, useEffect } from "react";
import { UIVisibilitySetting } from "../figma_app/763686";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import d from "classnames";
import { logWarning } from "../905/714362";
import { PN } from "../figma_app/897289";
import { zn, Ns } from "../figma_app/768070";
import { fullscreenValue } from "../figma_app/455680";
import { buildFileUrlInternal } from "../905/612685";
import { interactionTestAtom, removeRegistryEntry } from "../figma_app/617727";
import { FFileType } from "../figma_app/191312";
import { $z } from "../figma_app/297733";
import { ResizeDragContext } from "../905/208152";
import { z2 } from "../figma_app/165422";
import { Wc, VR, dS } from "../9410/855699";
var c = d;
let v = forwardRef(function ({
  pageId: e,
  openFileKey: t,
  closeInlinePreview: i,
  isOpen: d,
  iframeFocused: v,
  setIframeFocused: E,
  onIframeFocus: T,
  backgroundColorHex: w,
  scalingMode: S,
  contentScalingMode: j
}, I) {
  let k = Xr(hg);
  let [N, A] = useState(!1);
  let O = useAtomWithSubscription(interactionTestAtom);
  let {
    isResizing,
    isDragging
  } = useContext(ResizeDragContext);
  let D = useMemo(() => isResizing || isDragging || !v, [isResizing, isDragging, v]);
  let M = useMemo(() => isResizing || isDragging, [isResizing, isDragging]);
  useEffect(() => {
    _$$A.setDisableCloseWithShortcut(M);
  }, [M]);
  useEffect(() => {
    I.current && (d ? I.current.focus() : $z());
  }, [I, d]);
  useEffect(() => {
    let e = I.current;
    if (!e || N) return;
    let t = e => {
      let t = e.shiftKey && "Space" === e.code;
      let r = "Escape" === e.code;
      (t || r) && !M && i("keyboard");
    };
    try {
      e.contentWindow?.addEventListener("keydown", t);
      return () => {
        e && e.contentWindow?.removeEventListener("keydown", t);
      };
    } catch (e) {
      logWarning("inline_preview_iframe_component", "Failed to add keydown event listener", {
        message: e.message
      });
    }
  }, [I, N, M, i]);
  let P = t ? function (e, t, i, r, n) {
    let a = encodeURIComponent(buildFileUrlInternal({
      base: "proto",
      file: {
        key: e
      },
      nodeId: t
    }));
    let s = "&hide-ui=1&inline-viewer=1" + (r ? `&scaling=${r}` : "") + (n ? `&content-scaling=${n}` : "") + (i ? `&bg-color=${i}` : "");
    return `${location.origin}/embed?embed_host=inline-viewer&url=${a}${s}`;
  }(t, e, w, S, j) : "";
  if (useEffect(() => {
    if (!I.current) return;
    let e = _$$A.initialize(I.current, {
      closeInlinePreview: i,
      dispatch: k,
      onLoad: () => {
        A(!0);
      }
    });
    return () => {
      k({
        type: "RESET_INLINE_PREVIEW"
      });
      e();
      A(!1);
    };
  }, [i, k, e, I]), useEffect(() => {}, [P, e, O]), useEffect(() => {
    let e = I.current;
    if (!e) return;
    let t = () => {
      E(!1);
      fullscreenValue.triggerAction("inline-preview-iframe-focus-state-changed", {
        isFocused: !1
      });
    };
    e.contentWindow?.addEventListener("focus", T);
    e.contentWindow?.addEventListener("blur", t);
    return () => {
      e && (e.contentWindow?.removeEventListener("focus", T), e.contentWindow?.removeEventListener("blur", t));
    };
  }, [I, E, T]), useEffect(() => () => removeRegistryEntry("inline_prototype_viewer"), []), !t) return null;
  let F = "/test/interactions/proto?secondary=1&inline-viewer=1";
  zn && (F += "&rolloutFlags=1");
  Ns && (F += `&additional-ffs=${Ns}`);
  return jsxs("div", {
    className: Wc,
    children: [jsx("iframe", {
      ref: I,
      title: "Inline Preview",
      src: PN() ? F : P,
      className: c()(VR, D ? dS : null)
    }), !N && jsx(z2, {
      shouldNotOverflow: !0,
      isViewer: !0,
      editorType: FFileType.DESIGN,
      progressBarMode: UIVisibilitySetting.HIDE_UI
    })]
  });
});
let $$E0 = {
  overflowDropdownType: "INLINE_PREVIEW_OVERFLOW_DROPDOWN",
  stateAtom: hg,
  ViewerComponent: v,
  onBack: () => {
    _$$A.navigateBackward();
  },
  onForward: () => {
    _$$A.navigateForward();
  },
  onRestart: () => {
    _$$A.restartPrototype();
  },
  onFocus: () => !!_$$A.isIframeInitialized() && (_$$A.focus(), !0),
  onDismissOverflow: () => {
    _$$A.focus();
  }
};
export const e = $$E0;