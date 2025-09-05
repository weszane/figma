import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from "react";
import { md } from "../figma_app/27355";
import { A } from "../vendor/90566";
import { parsePxNumber } from "../figma_app/783094";
import { t as _$$t } from "../905/303541";
import { AG } from "../figma_app/999312";
import { ms } from "../figma_app/209680";
import { E } from "../5430/741319";
import { D } from "../5430/253633";
import { v$ } from "../figma_app/455722";
import { Fm } from "../figma_app/275462";
import { PF } from "../figma_app/930386";
import { G } from "../5430/654859";
import { useDispatch } from "../vendor/514228";
import { B } from "../905/714743";
import { ky, Dy, Je } from "../figma_app/925970";
import { A as _$$A } from "../1617/586892";
import { h63 } from "../figma_app/27776";
function b({
  query: e,
  inSearchPath: t,
  onChange: r,
  onSubmit: n,
  inputPlaceholder: o
}) {
  let a = useRef(null);
  let c = useDispatch();
  let [d, u] = useState(!1);
  return jsxs("div", {
    className: "search_input_mobile--mobileSearchContainer--VsAJK text--fontPos13--xW8hS text--_fontBase--QdLsd",
    children: [jsx("button", {
      className: "search_input_mobile--searchIconButton--jvchC",
      onClick: () => {
        d ? c(ky()) : (a.current?.focus(), c(Dy({
          entryPoint: "community"
        })));
        u(!d);
      },
      children: jsx(B, {
        className: "search_input_mobile--searchIcon--ExTte",
        svg: _$$A
      })
    }), jsxs("div", {
      className: "search_input_mobile--searchInput--bt9OT",
      children: [jsx("input", {
        type: "text",
        value: e,
        spellCheck: !1,
        ref: a,
        placeholder: o ?? _$$t("community.search.search_community"),
        onChange: e => {
          let s = e.currentTarget.value;
          r(s);
          t && s && n(s);
        },
        onKeyDown: e => {
          let r = e.currentTarget.value.trim();
          "Enter" === e.key ? (e.preventDefault(), n(r), a.current?.blur(), t && !r ? c(ky()) : !t && r && c(Je({
            entryPoint: "community"
          }))) : "Escape" === e.key && a.current?.blur();
        },
        required: !0
      }), jsx("button", {
        className: "search_input_mobile--clearInputButton--cjPyc",
        onClick: e => {
          r("");
          e.preventDefault();
          a.current?.blur();
          e.currentTarget.blur();
        },
        children: "\xd7"
      })]
    })]
  });
}
export function $$w0({
  onSubmit: e,
  isMobile: t,
  dropdownSelector: r
}) {
  let f = AG();
  let y = v$();
  let g = !!y;
  let v = y?.search.query;
  let [w, C] = useState("");
  let L = md(E);
  let T = _$$t("community.search.placeholder");
  f && (T = Fm() ? _$$t("community.search.search_templates_and_tools") : _$$t("community.search.search_community_placeholder"));
  let I = A(e, t ? 600 : 400);
  let N = useCallback(() => {
    C("");
  }, []);
  if (useEffect(() => {
    g && v && C(v);
  }, [g]), useEffect(() => {
    g || N();
  }, [N, g]), L && !w) return null;
  if (t) return jsx(b, {
    onChange: C,
    onSubmit: I,
    query: w,
    inSearchPath: g,
    inputPlaceholder: T
  });
  {
    let e = !f && w && !g && window.innerWidth > 800 ? jsx(G, {
      query: w,
      clearSearchInput: N,
      context: PF.NAV,
      width: parsePxNumber(h63)
    }) : null;
    return jsx(ms, {
      preview: e,
      className: f ? "dropdown_search_input--resourceHubDropdown--QsSk6" : "dropdown_search_input--dropdown--fBh7I dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      disableRepositioning: !0,
      children: jsx(D, {
        className: f ? "dropdown_search_input--searchInputResourceHub--naUt2" : "dropdown_search_input--searchInput--ALtDK text--fontPos13--xW8hS text--_fontBase--QdLsd",
        closeIconClassName: f ? "dropdown_search_input--closeIconResourceHub--6OJqK" : "dropdown_search_input--closeIcon--Zfoh0",
        context: PF.NAV,
        dropdownSelector: r,
        inSearchPath: g,
        inputPlaceholder: T,
        onChange: C,
        onSubmit: I,
        query: w,
        searchIconClassName: f ? "dropdown_search_input--searchIconResourceHub--tFr0G" : "dropdown_search_input--searchIcon--edfC0"
      })
    });
  }
}
export const S = $$w0;