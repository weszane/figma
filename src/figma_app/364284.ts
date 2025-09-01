import { t } from "../905/303541";
import { u } from "../905/228274";
import { V } from "../905/449599";
import { g, w } from "../905/256045";
import { Nd, HP } from "../figma_app/274217";
import { k } from "../905/403797";
let $$d2 = {
  [k.EMBED_WIDGET]: g,
  [k.LINK_PREVIEW_WIDGET]: Nd,
  [k.AI_SUMMARY_WIDGET]: V,
  [k.HTML_WIDGET]: u
};
let c = {
  [k.EMBED_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      [w.OPEN]: () => t("whiteboard.embeds.inline_menu.open_link"),
      [w.CONVERT_TO_TEXT]: () => t("whiteboard.embeds.inline_menu.change_back_to_text")
    }
  },
  [k.LINK_PREVIEW_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      [HP.OPEN]: () => t("whiteboard.embeds.inline_menu.open_link"),
      [HP.VERTICAL]: () => t("whiteboard.embeds.inline_menu.display_vertical"),
      [HP.HORIZONTAL]: () => t("whiteboard.embeds.inline_menu.display_horizontal"),
      [HP.CONVERT_TO_TEXT]: () => t("whiteboard.embeds.inline_menu.change_back_to_text")
    }
  },
  [k.AI_SUMMARY_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      "": function () {
        throw Error("Function not implemented.");
      }
    }
  },
  [k.HTML_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      "": function () {
        throw Error("Function not implemented.");
      }
    }
  }
};
export function $$u0(e) {
  return !!k[e];
}
export function $$p1(e, t) {
  let r = c[e];
  if (r.propertyMenuItemNameToI18nId[t]) return r.propertyMenuItemNameToI18nId[t]();
}
export const Vi = $$u0;
export const kZ = $$p1;
export const uE = $$d2;