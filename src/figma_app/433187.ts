import { jsx } from "react/jsx-runtime";
import { useRef, memo, useCallback } from "react";
import { LC } from "../vendor/291472";
import { trackEventAnalytics } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { getInitialOptions } from "../figma_app/169182";
import { TabLoop, TabLoopDisplayAs } from "../905/64217";
import { getI18nString } from "../905/303541";
import { Dm } from "../figma_app/8833";
import { getBasicViewportRect } from "../figma_app/62612";
import { Cf, it } from "../905/504727";
import { Xr, qN, Fb } from "../905/235109";
export let $$m0 = "customElements" in window;
function g(e) {
  let t = useRef(null);
  _$$h(() => {
    new LC({
      ...e,
      ref: t,
      previewEmoji: " ",
      styleNonce: getInitialOptions().csp_nonce,
      i18n: {
        categories: {
          activity: getI18nString("emoji_mart.categories_activity"),
          flags: getI18nString("emoji_mart.categories_flags"),
          foods: getI18nString("emoji_mart.categories_foods"),
          frequent: getI18nString("emoji_mart.categories_frequent"),
          nature: getI18nString("emoji_mart.categories_nature"),
          objects: getI18nString("emoji_mart.categories_objects"),
          people: getI18nString("emoji_mart.categories_people"),
          places: getI18nString("emoji_mart.categories_places"),
          search: getI18nString("emoji_mart.categories_search"),
          symbols: getI18nString("emoji_mart.categories_symbols")
        },
        pick: "",
        search: getI18nString("emoji_mart.search"),
        search_will_update: getI18nString("general.search_will_update"),
        search_for_emojis: getI18nString("emoji_mart.search_for_emojis"),
        search_no_results: getI18nString("emoji_mart.search_no_results"),
        skins: {
          choose: getI18nString("emoji_mart.skins_choose"),
          1: getI18nString("emoji_mart.skins_1"),
          2: getI18nString("emoji_mart.skins_2"),
          3: getI18nString("emoji_mart.skins_3"),
          4: getI18nString("emoji_mart.skins_4"),
          5: getI18nString("emoji_mart.skins_5"),
          6: getI18nString("emoji_mart.skins_6")
        }
      }
    });
  });
  return jsx("div", {
    ref: t
  });
}
export let $$f1 = memo(e => {
  let {
    onInsert,
    onCancel,
    targetRect
  } = e;
  let o = getBasicViewportRect();
  let l = useCallback(e => {
    onInsert(e);
    trackEventAnalytics("emojiIndex.EmojiData Inserted");
  }, [onInsert]);
  let c = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);
  let m = useCallback(e => {
    c();
    e.stopPropagation();
  }, [c]);
  let f = targetRect.top > 405 + (o?.y || 0);
  let E = Xr;
  return jsx("div", {
    className: E,
    onMouseDown: m,
    children: jsx(Cf, {
      autofocusPrevOnDismount: !0,
      className: qN,
      disableDropdownScrollContainer: !0,
      displayAboveTarget: f,
      lean: e.lean,
      minLeftMargin: o?.x,
      minWidth: 334,
      propagateCloseClick: !0,
      targetRect,
      type: it.MATCH_BACKGROUND,
      children: jsx("div", {
        className: `${Fb} ${Dm}`,
        onClick: e => {
          e.stopPropagation();
        },
        children: jsx(TabLoop, {
          displayAs: TabLoopDisplayAs.Block,
          children: jsx(g, {
            set: "native",
            onEmojiSelect: l,
            autoFocus: !0,
            onEscapeKeydown: c
          })
        })
      })
    })
  });
});
export const Y = $$m0;
export const _ = $$f1;