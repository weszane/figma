import { jsx } from "react/jsx-runtime";
import { k } from "../905/443820";
import i from "classnames";
var n = i;
var o = (e => (e.Medium = "Medium", e.Large = "Large", e))(o || {});
export function $$l0(e) {
  let t;
  return e.isLoading ? jsx("div", {
    className: "tile_grid--loadingContainer--1gQIv",
    children: jsx(k, {
      htmlAttributes: {
        "data-testid": "loading-spinner"
      }
    })
  }) : !e.children || Array.isArray(e.children) && !e.children.length ? jsx("div", {
    className: "tile_grid--emptyContainer--y8P1H text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: e.emptyView
  }) : (t = "Large" === e.tileSize ? "tile_grid--gridLarge--EZC2-" : "tile_grid--gridMedium--fzult", jsx("div", {
    className: n()("tile_grid--gridContainer--cn4vx", e.containerClassName),
    children: jsx("div", {
      className: t,
      children: e.children
    })
  }));
}
export const X = $$l0;