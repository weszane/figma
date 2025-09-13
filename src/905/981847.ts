import { jsxs, jsx } from "react/jsx-runtime";
import { k } from "../905/443820";
import a from "classnames";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { $K } from "../905/901964";
import { hr, RS, P3, zG, i3, ig, vi, nL, q_, ck, Xu, VO } from "../905/958668";
import { A } from "../svg/927263";
var s = a;
let p = e => e.height < 256 && e.width < 256;
let m = e => e.height / e.width > 2 || e.width / e.height > 2;
let h = e => e.width > e.height ? {
  width: 256,
  height: 128
} : {
  width: 128,
  height: 256
};
export function $$g1(e) {
  return jsxs("div", {
    className: s()(hr, e.isFigmake && RS),
    children: [jsx($$f0, {
      ...e
    }), jsx("button", {
      className: s()(P3, e.isFigmake && zG),
      onClick: () => e.onDelete(),
      children: jsx(SvgComponent, {
        svg: A,
        className: i3
      })
    })]
  });
}
export function $$f0(e) {
  let t = e.dimensions ?? void 0;
  let i = t && (p(t) ? t : m(t) ? h(t) : $K(t.width, t.height, 256));
  return jsxs("button", {
    className: s()(e.isSelected ? ig : vi, e.isFigmake && nL),
    onClick: () => {
      e.onClick(e.thumbnailUrl);
    },
    style: i && {
      width: `${i.width}px`,
      height: `${i.height}px`
    },
    onContextMenu: t => {
      e.onRightClick && e.onRightClick(t);
    },
    children: [e.showTemporaryPlaceholder ? jsx("div", {
      className: q_
    }) : jsx("img", {
      src: e.thumbnailUrl,
      crossOrigin: "use-credentials",
      alt: e.altText || getI18nString("comments.attachment_thumbnail_alt_text_default"),
      className: s()(q_, {
        [ck]: e.isFigmake && e.isUploading
      })
    }), jsxs("div", {
      className: e.overlayText || e.isUploading ? Xu : VO,
      children: [e.isUploading && jsx(k, {}), e.overlayText]
    })]
  });
}
export const M = $$f0;
export const v = $$g1;