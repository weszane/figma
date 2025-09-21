import { jsxs, jsx } from "react/jsx-runtime";
import r from "classnames";
import { createLabel } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { fI } from "../figma_app/626177";
var a = r;
export function $$c0({
  children: e,
  label: t,
  labelId: i,
  htmlFor: r,
  subLabel: c,
  afterLabelContent: u,
  required: p,
  error: m,
  afterErrorContent: h,
  contentPlaceSelfOverride: g,
  disabled: f = !1
}) {
  return jsxs(fI, {
    className: "publish_modal_row--contentRowUI3--4rMQY plugin_publish_modal--contentRowUI3--U1FRw publish_modal--contentRowUI3--BzgV4 publish_modal--_rowUI3--NFLnG",
    children: [jsxs("div", {
      className: _$$s.font11.flex.flexRow.fontSemiBold.justifyBetween.$,
      style: styleBuilderInstance.add({
        gridColumn: "2 / 18"
      }).$,
      children: [jsxs("div", {
        className: _$$s.flex.flexColumn.$,
        children: [jsxs(createLabel, {
          className: a()(_$$s.flex.flexRow.$, {
            [_$$s.colorTextDisabled.$]: f
          }),
          id: i,
          htmlFor: r,
          children: [t, p && jsx("div", {
            className: "publish_modal_row--required--TgYnQ publish_modal--required--N3MPq",
            children: "*"
          })]
        }), jsx("span", {
          className: "publish_modal_row--lightText--y-koc publish_modal--lightText--fxpot text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: c
        })]
      }), u]
    }), jsxs("div", {
      style: styleBuilderInstance.add({
        gridColumn: "20 / 68",
        placeSelf: g || "stretch"
      }).$,
      children: [e, !!m && jsx("div", {
        className: "publish_modal_row--errorUI3--g3z6f",
        children: m
      }), h]
    })]
  });
}
export const A = $$c0;