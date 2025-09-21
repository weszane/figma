import { jsx } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { oW } from "../905/675859";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getPluginUploadUrl } from "../figma_app/455620";
import { hasLocalFileId } from "../figma_app/155287";
import { A } from "../1617/853774";
export function $$p1({
  plugin: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.py4.flex.alignCenter.justifyCenter.$,
    children: hasLocalFileId(e) ? jsx(SvgComponent, {
      svg: A,
      className: cssBuilderInstance.colorIcon.$
    }) : jsx($$m0, {
      plugin: e,
      className: cssBuilderInstance.h16.w16.bRadius2.$
    })
  });
}
export let $$m0 = forwardRef(({
  plugin: e,
  ...t
}, i) => {
  let o = useSelector(e => e.theme?.visibleTheme);
  let l = useMemo(() => {
    let r = getPluginUploadUrl(e.plugin_id);
    return r ? jsx(oW, {
      ref: i,
      src: r,
      alt: `${e.name} icon`,
      ...t
    }) : null;
  }, [t, e.name, e.plugin_id, i]);
  let c = useMemo(() => jsx(oW, {
    ref: i,
    src: e.redirect_icon_url,
    alt: `${e.name} icon`,
    ...t
  }), [t, e.name, e.redirect_icon_url, i]);
  return "dark" === o && l ? l : c;
});
export const V = $$m0;
export const d = $$p1;