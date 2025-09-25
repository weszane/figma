import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { noop } from 'lodash-es';
import l from "../vendor/805353";
import { xj, Cz } from "../figma_app/851625";
import { J } from "../905/931050";
import { n as _$$n } from "../figma_app/741211";
import { useTeamPlanPublicInfo, getParentOrgIdIfOrgLevel } from "../figma_app/465071";
import { ColumnName, DefaultFilters } from "../figma_app/967319";
import { P } from "../905/392438";
import { Ro } from "../figma_app/805373";
var o = l;
let h = "org_user_autocomplete_input--input--qCS2T";
function x(e) {
  return jsx("div", {
    children: e.token.content.user.handle
  });
}
function b(e) {
  let {
    user
  } = e.searchResult;
  return jsxs("div", {
    className: e.isSelected ? "org_user_autocomplete_input--orgUserRowSelected--kp8sB autocomplete_permissions--contactRowSelected--xYJKX autocomplete_permissions--contactRow--DRMiv" : "org_user_autocomplete_input--orgUserRow--vLZng autocomplete_permissions--contactRow--DRMiv",
    children: [jsx(Ro, {
      className: "org_user_autocomplete_input--orgUserAvatar--80gdH autocomplete_permissions--avatar--Hb2O-",
      entity: user
    }), jsxs("div", {
      children: [jsx("div", {
        className: "org_user_autocomplete_input--name--Xsqh3 autocomplete_permissions--name--62sCS ellipsis--ellipsis--Tjyfa",
        children: user.handle
      }), user.email && jsx("div", {
        className: "org_user_autocomplete_input--email--AiLWY autocomplete_permissions--email--HCICx ellipsis--ellipsis--Tjyfa",
        children: user.email
      })]
    })]
  });
}
let v = {
  columnName: ColumnName.SEARCH_SCORE,
  isReversed: !1
};
let f = {
  ...DefaultFilters,
  permissionFilter: "true_member"
};
export function $$j0(e) {
  let t = useDispatch();
  let a = useTeamPlanPublicInfo().unwrapOr(null);
  let l = getParentOrgIdIfOrgLevel(a);
  let [m, g] = useState([]);
  let j = o()(t => {
    e.onAutocompleteChange(t);
  }, 300);
  let y = J(() => "" !== e.autocomplete.inputValue && l ? _$$n(t, l, {
    searchQuery: e.autocomplete.inputValue,
    sort: v,
    filter: f,
    minimalFields: !0
  }) : Promise.resolve({
    users: [],
    newCursor: null,
    totalUserCount: 0
  }), [e.autocomplete.inputValue, t, l]);
  useEffect(() => {
    xj(y) && g(() => {
      let t = e.autocomplete.tokens.map(e => e.content.id);
      return Cz(y)?.users.map(e => e).filter(e => !t.includes(e.id)) ?? [];
    });
  }, [e.autocomplete.tokens, y]);
  return jsx(P, {
    SearchResultComponent: b,
    TokenComponent: x,
    autocomplete: e.autocomplete,
    autocompleteResultsClassName: "org_user_autocomplete_input--autocompleteResults--LGiHk",
    containerClassName: h,
    getSearchResults: () => m,
    inputWrapperClassName: h,
    onChange: j,
    placeholder: e.placeholder,
    validateToken: noop
  });
}
export const g = $$j0;
