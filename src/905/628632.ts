import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { autocompleteSet } from "../905/748726";
import { getUserId } from "../905/372672";
import { hp, bp } from "../905/913057";
import { KindEnum } from "../905/129884";
import { UE, Ej, o8, Io, dK } from "../905/70359";
import { A } from "../5724/142155";
export function $$g0({
  orgId: e,
  teamId: t,
  disabled: i,
  contacts: n,
  user: a,
  roles: s,
  autocompleteTokens: o
}) {
  let [l, d] = useState(null);
  useEffect(() => {
    if (i) {
      d(null);
      return;
    }
    let n = !1;
    (async () => {
      let i = await hp(e || null, t);
      n || d(i);
    })();
    return () => {
      n = !0;
    };
  }, [i, e, t]);
  return {
    sharingSuggestions: l,
    sharingSuggestionIdsToExclude: useMemo(() => {
      let e = new Set();
      if (i) return e;
      for (let t of (e.add(a.id), s)) t.user.id && e.add(t.user.id);
      for (let t of o) t.content.id && e.add(t.content.id);
      return e;
    }, [i, a.id, s, o]),
    sharingSuggestionEmailsToExclude: useMemo(() => {
      if (i) return new Set();
      let e = bp(n, a, s);
      for (let t of o) {
        let i = "string" == typeof t.content ? t.content.trim() : t.content.email;
        e.add(i);
      }
      return e;
    }, [i, s, o, n, a])
  };
}
export function $$f1(e) {
  let t = useDispatch<AppDispatch>();
  let i = useMemo(() => {
    let t = new Set();
    e.autocomplete.tokens.forEach(e => t.add(e.content.id));
    return t;
  }, [e.autocomplete.tokens]);
  let u = getUserId();
  let g = (n, r) => {
    let a = e.searchResultToken(n);
    i.has(a.content.id) || (t(autocompleteSet({
      ...e.autocomplete,
      tokens: e.autocomplete.tokens.concat(a),
      inputValue: ""
    })), trackEventAnalytics("affco_contacts_result_clicked", {
      position: r + 1,
      rank: n.rank,
      resource_type: e.resourceType,
      resource_id: e.resourceId,
      user_id: u,
      chosen_user_id: n.id
    }));
  };
  let f = useMemo(() => void 0 === e.suggestions ? null : e.suggestions.filter(({
    id: t
  }) => !e.idsToExclude?.has(t)).filter(({
    email: t
  }) => !!t && !e.emailsToExclude?.has(t)).slice(0, 3), [e.suggestions, e.idsToExclude, e.emailsToExclude]);
  let _ = useRef(null);
  return null === f ? jsx("div", {
    className: UE,
    children: Array.from([,,,]).map((e, t) => jsxs("div", {
      className: Ej,
      children: [jsx("div", {
        className: o8
      }), " "]
    }, `loading-suggestion-${t}`))
  }) : 0 === f.length ? null : jsx("div", {
    role: "toolbar",
    className: UE,
    ref: _,
    onKeyDown: e => {
      if (e.target instanceof HTMLDivElement && "Enter" === e.key) {
        if (!_.current || !_.current.contains(e.target)) return;
        let t = e.target.getAttribute("data-suggestion-idx");
        if (null == t) return;
        let i = parseInt(t);
        f && f[i] && g(f[i], i);
      }
    },
    children: f.map((e, t) => jsxs("div", {
      role: "button",
      tabIndex: 0,
      onClick: () => g(e, t),
      className: Io,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": e.email,
      "data-suggestion-idx": t,
      "aria-label": getI18nString("permissions_modal.suggestions.invite_user", {
        userEmail: e.email
      }),
      children: [jsx(SvgComponent, {
        svg: A
      }), jsx("span", {
        className: dK,
        children: e.handle
      })]
    }, e.id))
  });
}
export const $ = $$g0;
export const t = $$f1;
