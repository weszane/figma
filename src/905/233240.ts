import { jsxs, jsx } from "react/jsx-runtime";
import r from "classnames";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { A } from "../5724/663128";
var a = r;
export function $$u0({
  hasTaxIdVerificationError: e
}) {
  return jsxs("div", {
    className: a()(cssBuilderInstance.flex.flexRow.itemsCenter.$, {
      [cssBuilderInstance.colorTextDanger.$]: e
    }),
    children: [renderI18nText("community.monetization.address"), jsx(SvgComponent, {
      svg: A,
      className: a()("tax_address_header--icon--fjFou", {
        "tax_address_header--iconError--mYxTg": e
      }),
      "data-tooltip": e ? getI18nString("community.monetization.tax_id_couldnt_be_verified") : getI18nString("community.monetization.your_address_is_used"),
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-max-width": 240,
      "data-tooltip-show-immediately": !0,
      "data-tooltip-hide-immediately": !0
    })]
  });
}
export const x = $$u0;