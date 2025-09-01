import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { E as _$$E } from "../905/632989";
import { s as _$$s } from "../cssbuilder/589278";
import { hx } from "../905/66449";
import { H } from "../905/348433";
import { D } from "../905/169680";
import { RU, hv, z_, wx, m_, i0 } from "../905/835035";
export function $$u0({
  header: e,
  subheader: t,
  thumbnailUrl: i,
  coverThumbnail: u,
  callToAction: p,
  secondaryCallToAction: m,
  onClick: h,
  name: g,
  kbPath: f
}) {
  let _ = null !== p;
  let {
    listItemButtonWidth
  } = H();
  let {
    setKeyboardNavigationElement,
    onClickWithFocus
  } = hx({
    path: f,
    column: 0,
    onClick: h,
    disabled: !h
  });
  let v = useRef(null);
  let [I, E] = useState(listItemButtonWidth);
  useEffect(() => {
    _ && v.current && E(v.current.offsetWidth);
  }, [_, m, p]);
  return jsxs("div", {
    className: _$$s.relative.$,
    "data-testid": "library-list-item-container",
    children: [jsxs(_$$E, {
      className: h ? RU : hv,
      onClick: h ? onClickWithFocus : void 0,
      "aria-label": g,
      ref: setKeyboardNavigationElement,
      disabled: !h,
      htmlAttributes: {
        "data-testid": "library-list-item"
      },
      children: [jsx(D, {
        thumbnailUrl: i,
        coverThumbnail: u,
        name: g
      }), jsxs("div", {
        className: z_,
        children: [jsx("span", {
          className: wx,
          children: e
        }), jsx("span", {
          className: m_,
          children: t
        })]
      }), _ && jsx("div", {
        style: {
          width: I
        }
      })]
    }), _ && jsxs("div", {
      className: i0,
      ref: v,
      children: [m, jsx("div", {
        style: {
          width: listItemButtonWidth
        },
        children: p
      })]
    })]
  });
}
export const V = $$u0;