import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo, useState, useRef, useImperativeHandle, useCallback } from "react";
import { o as _$$o } from "../905/821217";
import s from "classnames";
import { formatNumber } from "../figma_app/930338";
import { getI18nString, renderI18nText } from "../905/303541";
import { U } from "../905/331038";
import { w as _$$w } from "../905/113805";
import { Lz } from "../905/497882";
import { HE, eL } from "../figma_app/740025";
import { d as _$$d } from "../905/44199";
import { C as _$$C } from "../905/180";
import { P } from "../905/392438";
import { A } from "../905/567946";
var o = s;
export function $$A2(e, t = []) {
  if (e && "exception" !== e.type) switch (e.key) {
    case "TOO_MANY_TAGS":
      {
        let {
          maxTags
        } = e.data;
        return getI18nString(t.length > 0 ? "community.publishing.you_can_add_up_to_n_custom_tags_error" : "community.publishing.select_up_to_n_tags_error", {
          maxTagsPerResource: maxTags
        });
      }
    case "DUPLICATE_TAGS":
      {
        let {
          duplicateTagIndices,
          allTags
        } = e.data;
        return getI18nString("community.publishing.tag_is_repeated_more_than_once", {
          tag: allTags[duplicateTagIndices[0]]
        });
      }
    case "INVALID_TAGS":
      {
        let {
          invalidTagIndicesAndReasons
        } = e.data;
        return invalidTagIndicesAndReasons[0][1];
      }
  }
}
let $$y0 = forwardRef(function ({
  tagsV1Field: e,
  validV2Tags: t = [],
  touched: i,
  onTouched: s,
  autoFocusAutocompleteInput: l,
  autoScrollAutocompleteResultsIntoView: _,
  autocompleteInputContainerClassName: y
}, b) {
  let E = Lz(e, []);
  let x = _$$w(e, !i);
  let S = U(x, $$A2, t);
  let [w, C] = useMemo(() => {
    let e = new Set();
    let t = new Set();
    for (let i of x) if ("validation" === i.type) switch (i.key) {
      case "DUPLICATE_TAGS":
        {
          let {
            duplicateTagIndices,
            allTags
          } = i.data;
          for (let i of duplicateTagIndices) e.add(allTags[i]);
          break;
        }
      case "INVALID_TAGS":
        {
          let {
            invalidTagIndicesAndReasons,
            allTags
          } = i.data;
          for (let [i, r] of invalidTagIndicesAndReasons) t.add(allTags[i]);
        }
    }
    return [e, t];
  }, [x]);
  let [T, k] = useState("");
  let R = useMemo(() => ({
    inputValue: T,
    tokens: E.map((e, t) => ({
      state: w.has(e) && E.indexOf(e) !== t || C.has(e) ? _$$d.ERROR : _$$d.OK,
      content: {
        text: e
      }
    })),
    errorMessage: S ?? ""
  }), [E, w, S, T, C]);
  let N = useRef(null);
  useImperativeHandle(b, () => ({
    focus: e => {
      N.current?.(e);
    }
  }), []);
  return jsx(_$$o, {
    display: "contents",
    eventListeners: ["onKeyDown"],
    children: jsx("div", {
      className: o()("tags_v1_input--autocompleteInputContainer--juv0q", y),
      children: jsx(P, {
        SearchResultComponent: I,
        TokenComponent: v,
        autoFocus: l,
        autoScrollSearchResultsIntoView: _,
        autoSelectFirstSearchResult: !1,
        autocomplete: R,
        autocompleteResultsClassName: "tags_v1_input--searchResultsContainer--LSBf-",
        focusInputRef: N,
        getSearchResults: useCallback(async e => e.inputValue ? (await _$$C.getTagsAutocomplete({
          existingTags: E.join(","),
          tagPrefix: e.inputValue
        })).data.meta.map(({
          query_text: t,
          count: i
        }) => ({
          id: t,
          searchedPrefix: e.inputValue,
          text: t,
          count: i
        })) : [], [E]),
        newTokenKeyCodes: HE,
        onChange: t => {
          s?.();
          k(t.inputValue);
          let i = t.tokens.map(e => e.content.text);
          e.setValue?.(i);
        },
        placeholder: getI18nString(t.length > 0 ? "community.publishing.add_up_to_n_more_tags" : "community.publishing.add_up_to_n_tags", {
          maxTagsPerResource: eL
        }),
        unselectSearchResultOnPointerOut: !0,
        validateToken: t => {
          k("");
          e.setValue?.([...E, t]);
        }
      })
    })
  });
});
let $$b1 = forwardRef(function ({
  tagsV1Field: e,
  touched: t,
  onTouched: i,
  autoScrollAutocompleteResultsIntoView: r,
  PublishModalRowComponent: a = A,
  autocompleteInputContainerClassName: s
}, o) {
  let l = _$$w(e, !t);
  let p = U(l, $$A2);
  return jsx(a, {
    label: getI18nString("community.publishing.tags"),
    error: p,
    children: jsx($$y0, {
      ref: o,
      tagsV1Field: e,
      touched: t,
      onTouched: i,
      autoScrollAutocompleteResultsIntoView: r,
      autocompleteInputContainerClassName: s
    })
  });
});
function v({
  token: e
}) {
  return jsx("div", {
    children: e.content.text
  });
}
function I({
  searchResult: e,
  isSelected: t
}) {
  return jsxs("div", {
    className: o()("tags_v1_input--searchResultContainer--lG5hF", {
      "tags_v1_input--selected--Kk4s-": t
    }),
    children: [jsxs("div", {
      children: [jsx("strong", {
        children: e.searchedPrefix
      }), e.text.slice(e.searchedPrefix.length)]
    }), jsx("div", {
      children: renderI18nText("community.publishing.number_of_resources", {
        num: formatNumber(e.count)
      })
    })]
  });
}
export const Hs = $$y0;
export const Yv = $$b1;
export const lN = $$A2;