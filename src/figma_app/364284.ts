import { setupEmbedWidget } from '../905/228274';
import { registerEmbedWidget, embedWidgetMenuActions } from '../905/256045';
import { getI18nString } from '../905/303541';
import { k } from '../905/403797';
import { V } from '../905/449599';
import { HP, Nd } from '../figma_app/274217';
let $$d2 = {
  [k.EMBED_WIDGET]: registerEmbedWidget,
  [k.LINK_PREVIEW_WIDGET]: Nd,
  [k.AI_SUMMARY_WIDGET]: V,
  [k.HTML_WIDGET]: setupEmbedWidget
};
let c = {
  [k.EMBED_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      [embedWidgetMenuActions.OPEN]: () => getI18nString('whiteboard.embeds.inline_menu.open_link'),
      [embedWidgetMenuActions.CONVERT_TO_TEXT]: () => getI18nString('whiteboard.embeds.inline_menu.change_back_to_text')
    }
  },
  [k.LINK_PREVIEW_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      [HP.OPEN]: () => getI18nString('whiteboard.embeds.inline_menu.open_link'),
      [HP.VERTICAL]: () => getI18nString('whiteboard.embeds.inline_menu.display_vertical'),
      [HP.HORIZONTAL]: () => getI18nString('whiteboard.embeds.inline_menu.display_horizontal'),
      [HP.CONVERT_TO_TEXT]: () => getI18nString('whiteboard.embeds.inline_menu.change_back_to_text')
    }
  },
  [k.AI_SUMMARY_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      '': function () {
        throw new Error('Function not implemented.');
      }
    }
  },
  [k.HTML_WIDGET]: {
    propertyMenuItemNameToI18nId: {
      '': function () {
        throw new Error('Function not implemented.');
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