import { jsx, Fragment } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { IconButton } from "../905/443068";
import { Button } from "../905/521428";
import { k } from "../905/443820";
import { LinkPrimitive } from "../figma_app/496441";
import { Link } from "../905/438674";
import { useSubscription } from "../figma_app/288654";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { aK } from "../figma_app/401069";
import { useCurrentFileKey } from "../figma_app/516028";
import { FileCanExport } from "../figma_app/43951";
import { KindEnum } from "../905/129884";
import { fileApiHandler } from "../figma_app/787550";
export function $$b7(e, t) {
  return `/file/${e}/image/${t}/download`;
}
export function $$T6(e) {
  let t;
  let r = e.animatedImage || e.image;
  "VIDEO" === e.type && e.video ? t = e.video.hash : r && r.hash && (t = r.hash);
  let n = "";
  t && (n = Array.from(t).map(e => (e < 16 ? "0" : "") + e.toString(16)).join(""));
  return n ?? null;
}
export async function $$I3({
  paint: e,
  fileKey: t
}) {
  if (!t || "VIDEO" !== e.type) return null;
  let r = $$T6(e);
  return r ? (await fileApiHandler.getVideosDownload({
    hexHash: r,
    fileKey: t
  })).data.meta.signed_url : null;
}
export function $$S2(e, t) {
  let r = window.URL.createObjectURL(e);
  let n = document.createElement("a");
  n.href = r;
  n.download = t;
  document.body.appendChild(n);
  n.click();
  document.body.removeChild(n);
  window.URL.revokeObjectURL(r);
}
export function $$v4(e) {
  return "VIDEO" === e.type ? "mp4" : null != e.animatedImage ? "gif" : "png";
}
export function $$A5(e) {
  let t = e.animatedImage || e.image;
  let r = "VIDEO" === e.type ? "video" : "image";
  return `${t && t.name || r}`;
}
export class $$x0 {
  format(e, t, r) {
    switch (e) {
      case "INNER_SHADOW":
        return getI18nString("inspect_panel.property.effect_inner_shadow");
      case "DROP_SHADOW":
        return getI18nString("inspect_panel.property.effect_drop_shadow");
      case "FOREGROUND_BLUR":
        if ("PROGRESSIVE" === t) return getI18nString("inspect_panel.property.effect_progressive_layer_blur");
        return getI18nString("inspect_panel.property.effect_layer_blur");
      case "BACKGROUND_BLUR":
        if ("PROGRESSIVE" === t) return getI18nString("inspect_panel.property.effect_progressive_background_blur");
        return getI18nString("inspect_panel.property.effect_background_blur");
      case "NOISE":
        switch (r) {
          case "MONOTONE":
            return getI18nString("inspect_panel.property.effect_mono_noise");
          case "DUOTONE":
            return getI18nString("inspect_panel.property.effect_duo_noise");
          case "MULTITONE":
            return getI18nString("inspect_panel.property.effect_multi_noise");
          default:
            return getI18nString("inspect_panel.property.effect_noise");
        }
      case "GRAIN":
        return getI18nString("inspect_panel.property.effect_texture");
      default:
        return;
    }
  }
}
function N({
  video: e,
  loadingChildren: t,
  children: r,
  variant: a = "text"
}) {
  let c = useCurrentFileKey() ?? "";
  let u = $$T6(e);
  let [p, m] = useState(!1);
  let f = useCallback(() => {
    u && (m(!0), fileApiHandler.getVideosDownload({
      hexHash: u,
      fileKey: c
    }).then(t => {
      fetch(t.data.meta.signed_url).then(e => e.blob()).then(t => {
        $$S2(t, `${$$A5(e)}.${$$v4(e)}`);
        setTimeout(() => m(!1), 1e3);
      }).catch(e => {
        reportError(ServiceCategories.DEVELOPER_TOOLS, e, {
          extra: {
            fileKey: c,
            hexHash: u
          }
        });
        m(!1);
      });
    }));
  }, [c, u, e]);
  if (!u) return jsx(Fragment, {
    children: r
  });
  let b = t ?? getI18nString("common.loading");
  return "icon" === a ? jsx(IconButton, {
    onClick: f,
    disabled: p,
    "aria-label": getI18nString("inspect_panel.images.download_with_type", {
      type: getI18nString("inspect_panel.images.download_type_video")
    }),
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("inspect_panel.images.download")
    },
    children: p ? b : r
  }) : jsx(Button, {
    variant: "link",
    onClick: f,
    disabled: p,
    iconPrefix: p ? jsx("div", {
      style: {
        marginRight: 4
      },
      children: jsx(k, {
        size: "sm"
      })
    }) : void 0,
    "aria-label": getI18nString("inspect_panel.images.download_with_type", {
      type: getI18nString("inspect_panel.images.download_type_video")
    }),
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("inspect_panel.images.download")
    },
    children: p ? b : r
  });
}
function C({
  image: e,
  children: t,
  variant: r = "text"
}) {
  let s = function ({
    paint: e,
    fileKey: t
  }) {
    if (!t || "VIDEO" === e.type) return null;
    let r = $$T6(e);
    return r ? $$b7(t, r) : null;
  }({
    paint: e,
    fileKey: useCurrentFileKey() ?? ""
  });
  let o = useDispatch();
  let l = useCallback(() => {
    o(aK());
  }, [o]);
  if (!s) return jsx(Fragment, {
    children: t
  });
  let d = `${$$A5(e)}.${$$v4(e)}`;
  return "icon" === r ? jsx(LinkPrimitive, {
    trusted: !0,
    href: s,
    download: d,
    onClick: l,
    "aria-label": getI18nString("inspect_panel.images.download_with_type", {
      type: getI18nString("inspect_panel.images.download_type_image")
    }),
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("inspect_panel.images.download")
    },
    className: "inspectors--downloadLinkButton--cqFWb",
    children: t
  }) : jsx(Link, {
    trusted: !0,
    href: s,
    download: d,
    onClick: l,
    "aria-label": getI18nString("inspect_panel.images.download_with_type", {
      type: getI18nString("inspect_panel.images.download_type_image")
    }),
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("inspect_panel.images.download")
    },
    children: t
  });
}
export function $$w1({
  image: e,
  loadingChildren: t,
  children: r,
  variant: i = "text"
}) {
  let a = useCurrentFileKey() ?? "";
  let s = useSubscription(FileCanExport, {
    key: a
  });
  return s.data?.file && "error" !== s.data.file.status && s.data?.file?.data?.hasPermission ? "VIDEO" === e.type && e.video ? jsx(N, {
    video: e,
    children: r,
    loadingChildren: t,
    variant: i
  }) : jsx(C, {
    image: e,
    children: r,
    loadingChildren: t,
    variant: i
  }) : jsx(Fragment, {
    children: r
  });
}
export const ck = $$x0;
export const iV = $$w1;
export const PE = $$S2;
export const w6 = $$I3;
export const x$ = $$v4;
export const Rh = $$A5;
export const W3 = $$T6;
export const Me = $$b7;
