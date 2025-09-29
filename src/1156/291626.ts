import { jsx, jsxs } from "react/jsx-runtime";
import { stylex } from "@stylexjs/stylex";
import { w4, y1 } from "../905/445814";
import { yh } from "../9410/974031";
import { useSceneGraphSelector } from "../figma_app/722362";
import { v, M } from "../905/981847";
import { useRemoveAttachment, isAttachmentLoaded } from "../figma_app/119420";
import { N } from "../1156/229926";
let u = {
  attachmentWrapper: {
    position: "x1n2onr6",
    $$css: !0
  },
  hideChildFileIconOnHover: {
    "--xvxo1p6": "xyymrbi xhxs2qp",
    $$css: !0
  },
  attachmentFileTypeIconWrapper: {
    position: "x10l6tqk",
    top: "xndqk7f",
    right: "x1pzoy33",
    insetInlineStart: null,
    insetInlineEnd: null,
    opacity: "x1lw2822",
    pointerEvents: "x47corl",
    $$css: !0
  }
};
export function $$x0({
  attachment: e,
  clearAttachment: t
}) {
  let n = N();
  let i = useRemoveAttachment();
  if ("error" === e.status) return null;
  if (!isAttachmentLoaded(e)) return jsx(m, {
    onClear: () => i(e)
  });
  let s = "success" === e.status ? e.type : null;
  return jsx($$h1, {
    pastedDesignNodeId: e.nodeGuid,
    loading: "loading" === e.status,
    onClear: () => {
      e.nodeGuid && t(e);
    },
    onClick: e => {
      n(e);
    },
    attachmentType: s
  });
}
function m({
  onClear: e
}) {
  let t = {
    thumbnailUrl: "",
    altText: "Attached design from Figma",
    onClick: () => {},
    dimensions: {
      width: 64,
      height: 64
    },
    isFigmake: !0
  };
  return e ? jsx(v, {
    ...t,
    isUploading: !0,
    showTemporaryPlaceholder: !0,
    onDelete: e
  }) : jsx(M, {
    ...t,
    isUploading: !0,
    showTemporaryPlaceholder: !0
  });
}
export function $$h1({
  pastedDesignNodeId: e,
  loading: t,
  onClear: n,
  onClick: s,
  attachmentType: c
}) {
  let d = useSceneGraphSelector().get(e);
  let x = yh({
    nodeId: d?.guid || "",
    width: 512,
    height: 512,
    shouldSkip: !d,
    regenerateAfterImagesLoaded: !0,
    reason: "figmake_pasted_design.thumbnail",
    version: d?.editInfo?.lastEditedAt || ""
  });
  if (!x) return jsx(m, {});
  let h = 64 / (x.displaySize.x / x.displaySize.y);
  let p = {
    thumbnailUrl: x.src,
    altText: "Attached design from Figma",
    onClick: () => s?.(e),
    dimensions: {
      width: 64,
      height: h
    },
    isFigmake: !0
  };
  return jsxs("div", {
    style: {
      width: 64,
      height: h
    },
    ...stylex.props(u.attachmentWrapper, n && u.hideChildFileIconOnHover),
    children: [n ? jsx(v, {
      ...p,
      onDelete: n,
      isUploading: t
    }) : jsx(M, {
      ...p,
      isUploading: t
    }), "FIGMA_NODE" === c && jsx(g, {})]
  });
}
function g() {
  return jsx("div", {
    ...stylex.props(u.attachmentFileTypeIconWrapper),
    children: jsx(w4, {
      size: 16,
      type: y1.DESIGN
    })
  });
}
export const V = $$x0;
export const s = $$h1;
