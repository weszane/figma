import { jsx } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { oW } from "../905/675859";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { sA } from "../figma_app/455620";
import { ZQ } from "../figma_app/155287";
import { A } from "../1617/853774";
export function $$p1({
  plugin: e
}) {
  return jsx("div", {
    className: _$$s.py4.flex.alignCenter.justifyCenter.$,
    children: ZQ(e) ? jsx(B, {
      svg: A,
      className: _$$s.colorIcon.$
    }) : jsx($$m0, {
      plugin: e,
      className: _$$s.h16.w16.bRadius2.$
    })
  });
}
export let $$m0 = forwardRef(({
  plugin: e,
  ...t
}, i) => {
  let o = useSelector(e => e.theme?.visibleTheme);
  let l = useMemo(() => {
    let r = sA(e.plugin_id);
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