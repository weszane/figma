import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { noop } from 'lodash-es';
import { EventShield } from "../905/821217";
import { getI18nString } from "../905/303541";
import { H8 } from "../905/590952";
import { findFirstResult } from "../905/331038";
import { getValidationErrors } from "../905/113805";
import { unsetSymbol } from "../905/17894";
import { getFieldValueOrDefault, canSetFieldValue } from "../905/497882";
import { MAX_PUBLISHERS_PER_RESOURCE } from "../figma_app/740025";
import { jr } from "../figma_app/599979";
import { MH } from "../905/772425";
import { Ef } from "../905/81982";
import { d as _$$d } from "../905/44199";
import { P as _$$P } from "../905/392438";
import { FieldContainer } from "../905/567946";
let v = "cocreators_input--profilePrimaryText--AdeJZ autocomplete_permissions--name--62sCS ellipsis--ellipsis--Tjyfa";
let I = "cocreators_input--profileSecondaryText--lnXEv text--fontPos11--2LvXf text--_fontBase--QdLsd";
let E = new MH();
let x = e => {
  if (e && "validation" === e.type) switch (e.key) {
    case "COCREATORS_NOT_ALLOWED_FOR_PAID_RESOURCE":
      return getI18nString("community.publishing.there_can_only_be_one_creator_for_a_paid_resource");
    case "TOO_MANY_COCREATORS":
      return getI18nString("community.publishing.add_up_to_n_creators", {
        maxCreatorsPerResource: e.data.maxCocreators
      });
    case "AUTHOR_IS_INVALID_COCREATOR":
    case "DUPLICATE_COCREATORS":
    case "INVALID_COCREATORS":
      return;
    default:
      return throwTypeError(e);
  }
};
export function $$S0({
  cocreatorsFieldManager: e,
  touched: t,
  onTouched: i
}) {
  let {
    validCocreators
  } = e;
  let {
    authorField,
    publishRoleField,
    existingResourceContent
  } = e.deps;
  let I = !!publishRoleField;
  let S = getValidationErrors(e, !t);
  let k = findFirstResult(S, x);
  let [R, N] = useState({
    inputValue: "",
    tokens: getFieldValueOrDefault(e, []).map(e => ({
      content: e,
      state: _$$d.OK
    })),
    errorMessage: ""
  });
  let P = useRef(new Ef([], {
    keys: ["profile_handle", "name"],
    threshold: 0,
    tokenize: !0,
    matchAllTokens: !0
  }));
  let O = getFieldValueOrDefault(authorField, void 0);
  let D = useCallback(e => !R.tokens.map(e => e.content.id).includes(e.id) && !(O && jr(O) && e.primary_user_id === O.user_id), [R.tokens, O]);
  return (useEffect(() => {
    P.current.set(validCocreators.filter(D));
  }, [D, validCocreators, authorField]), useEffect(() => {
    let t = e.currentValue;
    t !== unsetSymbol && N(e => ({
      ...e,
      tokens: t.map(e => ({
        content: e,
        state: _$$d.OK
      }))
    }));
  }, [e.currentValue]), e.currentValue === unsetSymbol || I && !canSetFieldValue(e)) ? null : jsx(FieldContainer, {
    label: getI18nString("community.publishing.additional_contributors"),
    error: k,
    children: jsx(EventShield, {
      display: "contents",
      eventListeners: ["onKeyDown"],
      children: jsx("div", {
        className: "cocreators_input--autocompleteInput--lm1q7",
        children: jsx(_$$P, {
          autocomplete: R,
          onChange: t => {
            if (canSetFieldValue(e)) {
              let i = t.tokens.map(e => ({
                ...e.content,
                isPending: !existingResourceContent?.community_publishers.accepted.some(({
                  id: t
                }) => t === e.content.id)
              }));
              e.setValue(i);
            }
            i?.();
            N(t);
          },
          validateToken: noop,
          TokenComponent: w,
          EmptySearchResultComponent: I ? void 0 : T,
          SearchResultComponent: C,
          getSearchResults: e => {
            let t = e.inputValue.trim().toLowerCase().replace(/^@/, "");
            return I ? t ? E.search(t).then(e => e.filter(D)) : [] : P.current.search(t);
          },
          placeholder: getI18nString("community.publishing.give_up_to_n_creators_credit", {
            maxCreatorsPerResource: MAX_PUBLISHERS_PER_RESOURCE
          })
        })
      })
    })
  });
}
function w({
  token: e
}) {
  let {
    name,
    isPending
  } = e.content;
  return jsxs("div", {
    children: [name, " ", isPending && getI18nString("community.publish.pending")]
  });
}
function C({
  searchResult: e,
  isSelected: t
}) {
  return jsxs("div", {
    className: t ? "cocreators_input--profileRowSelected--ptknl autocomplete_permissions--contactRowSelected--xYJKX autocomplete_permissions--contactRow--DRMiv" : "cocreators_input--profileRow--Nxr-x autocomplete_permissions--contactRow--DRMiv",
    children: [e && jsx("div", {
      className: "cocreators_input--profileAvatar--u4iFV autocomplete_permissions--avatar--Hb2O-",
      children: jsx(H8, {
        user: e
      })
    }), jsxs("div", {
      children: [jsx("div", {
        className: v,
        children: e.name
      }), !!e.profile_handle && jsx("div", {
        className: I,
        children: `@${e.profile_handle}`
      })]
    })]
  });
}
function T() {
  return jsxs("div", {
    className: "cocreators_input--textRow--IEHo4",
    children: [jsx("div", {
      className: v,
      children: getI18nString("community.publishing.editor_or_viewer_not_found")
    }), jsx("div", {
      className: I,
      children: getI18nString("community.publishing.invite_creators_to_the_file_to_give_credit_creators_must_have_community_profiles")
    })]
  });
}
export const A = $$S0;