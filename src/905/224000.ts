import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useMemo, useCallback } from "react";
import a from "classnames";
import { WAFImage } from "../905/675859";
import { cssBuilderInstance } from "../cssbuilder/589278";
var s = a;
export function $$d0({
  thumbnailUrl: e,
  coverThumbnail: t,
  className: i,
  style: a,
  name: d
}) {
  let [c, u] = useState(e);
  let p = useMemo(() => {
    if (c) return `url(${c})`;
  }, [c]);
  let m = useCallback(() => {
    u(e);
  }, [e]);
  return jsxs(Fragment, {
    children: [jsx("div", {
      style: {
        backgroundImage: p,
        ...a
      },
      className: s()(i, t ? "library_modal_thumbnail--libraryModalCoverThumbnail--08sGL library_modal_thumbnail--libraryModalThumbnail--lPDXG" : "library_modal_thumbnail--libraryModalThumbnail--lPDXG"),
      role: "img",
      "aria-label": d
    }), e && jsx(WAFImage, {
      src: e,
      onLoad: m,
      className: cssBuilderInstance.hidden.$,
      alt: ""
    })]
  });
}
export const B = $$d0;