import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useRef, useEffect, useImperativeHandle, useMemo, useId } from "react";
import { noop } from 'lodash-es';
import s from "classnames";
import { useDebouncedCallback } from "use-debounce";
import { trackEventAnalytics } from "../905/449184";
import { parseEmailList } from "../figma_app/416935";
import { H as _$$H } from "../905/620380";
import { useLatestRef } from "../figma_app/922077";
import { LazyInputForwardRef } from "../905/408237";
import { S as _$$S } from "../figma_app/552746";
import { useTracking } from "../figma_app/831799";
import { baseErrorSeverity } from "../905/44199";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { A as _$$A2 } from "../svg/545021";
var o = s;
let y = "autocomplete_input--autocompleteResults--Y0sCg overflow--overflowYAuto--nfK38 overflow--momentumScroll--qtsu7";
function v(e) {
  let t;
  t = e.token.state === baseErrorSeverity.ERROR ? e.isSelected ? "autocomplete_input--tokenErrorSelected--Q96wR autocomplete_input--tokenSelected--tjZz0 autocomplete_input--token--wJ-t7 autocomplete_input--tokenPadding---bs7d" : "autocomplete_input--tokenError--Y9Gyi autocomplete_input--token--wJ-t7 autocomplete_input--tokenPadding---bs7d" : e.isSelected ? "autocomplete_input--tokenSelected--tjZz0 autocomplete_input--token--wJ-t7 autocomplete_input--tokenPadding---bs7d" : "autocomplete_input--token--wJ-t7 autocomplete_input--tokenPadding---bs7d";
  return jsxs("div", {
    role: "group",
    className: o()(t, e.tokenClassName),
    onPointerDown: t => {
      t.stopPropagation();
      e.onSelect(e.index);
    },
    onClick: e => e.stopPropagation,
    children: [e.children, jsx("div", {
      role: "button",
      tabIndex: 0,
      "data-testid": `autocomplete-token-${e.index}`,
      className: "autocomplete_input--x--v1lTk",
      onClick: t => {
        t.stopPropagation();
        e.onDelete(e.index);
      },
      "aria-label": getI18nString("folder_permissions_modal.email_inprogress_invite_remove"),
      children: jsx(SvgComponent, {
        svg: _$$A2,
        ariaHidden: !0
      })
    })]
  });
}
export var $$I1 = (e => (e.RESULTS_FETCHED = "results_fetched", e.TOKEN_ADDED = "token_added", e.INPUT_BLURRED = "input_blurred", e.ESCAPE_PRESSED = "escape_pressed", e))($$I1 || {});
export function $$E0({
  id: e,
  autocomplete: t,
  validateToken: i,
  newTokenKeyCodes: s = ["Tab", "Enter", ",", ";"],
  addTokenOnInputBlur: _ = !1,
  renderOptions: A,
  getSearchResults: b,
  getTokenForSearchResultOverride: I,
  onSelectSearchResultOverride: E,
  TokenComponent: S,
  SearchResultComponent: w,
  SearchResultHeaderComponent: C,
  EmptySearchResultComponent: T,
  SearchResultCTA: k,
  onChange: R,
  onSubmit: N,
  onLifecycleEvent: P,
  focusInputRef: O,
  containerClassName: D,
  inputWrapperClassName: L,
  tokenClassName: F,
  autocompleteResultsClassName: M,
  autocompleteResultsStyling: j,
  fixedAutocompleteResults: U,
  autoFocus: B = !1,
  autoScrollSearchResultsIntoView: V,
  autoSelectFirstSearchResult: G = !0,
  unselectSearchResultOnPointerOut: z = !1,
  placeholder: H,
  persistentLabel: W,
  onboardingKey: K,
  useContainerForWidth: Y,
  validateTokensAsEmail: q
}) {
  let $ = useLatestRef(t.tokens.length);
  let [Z, X] = useState(null);
  let [Q, J] = useState(null);
  let [ee, et] = useState(!1);
  let ei = function (e, t, i) {
    let n = _$$H(i);
    let [a, s] = useState([]);
    let o = useCallback(e => {
      s(e);
      n.current?.(e);
    }, [n]);
    let d = useRef();
    let c = useCallback(() => {
      if (!t) return;
      let i = t(e);
      i instanceof Promise ? (d.current = i, i.then(e => {
        d.current === i && o(e);
      })) : (d.current = void 0, o(i));
    }, [e, t, o]);
    let p = useDebouncedCallback(c, 200);
    useEffect(() => {
      d.current ? p() : c();
    }, [e.inputValue, p, c]);
    return a;
  }(t, b, e => {
    P?.({
      eventType: "results_fetched",
      autocomplete: t,
      searchResults: e,
      selectedSearchResultIndex: Q,
      selectedTokenIndex: Z
    });
  });
  let en = useCallback(e => {
    P?.({
      eventType: e,
      autocomplete: t,
      searchResults: ei,
      selectedSearchResultIndex: Q,
      selectedTokenIndex: Z
    });
  }, [t, P, ei, Q, Z]);
  let er = useRef(null);
  let ea = useRef(null);
  let es = useRef(null);
  let eo = useRef(null);
  let {
    properties,
    name
  } = useTracking();
  let ec = useCallback(e => {
    R({
      ...t,
      inputValue: e
    });
    X(null);
    G && J(0);
  }, [G, t, R]);
  let eu = useCallback(e => {
    et(!0);
    ea.current?.focus(e);
    name && trackEventAnalytics("Autocomplete Input Focused", {
      ...properties,
      trackingContext: name
    });
  }, [properties, name]);
  useImperativeHandle(O, () => eu, [eu]);
  useEffect(() => {
    B && eu();
  }, [B, eu]);
  let ep = useCallback(() => {
    et(!1);
    ea.current?.blur();
  }, []);
  useEffect(() => {
    "" === t.inputValue && J(null);
  }, [t.inputValue]);
  useEffect(() => {
    void 0 !== $ && t.tokens.length !== $ && null === Z && eu();
  }, [t.tokens.length, eu, $, Z]);
  let em = useCallback(() => {
    X(null !== Z && Z < t.tokens.length - 1 ? Z + 1 : null);
  }, [t.tokens.length, Z]);
  let eh = useCallback(() => {
    if (null === Z) t.tokens.length && X(t.tokens.length - 1);else {
      let e = Math.max(0, Z - 1);
      e !== Z && X(e);
    }
  }, [t.tokens.length, Z]);
  let eg = useCallback(e => {
    let i = t.tokens.slice(0, e).concat(t.tokens.slice(e + 1));
    R({
      ...t,
      tokens: i
    });
  }, [t, R]);
  let ef = useCallback(() => {
    if (!ei || 0 === ei.length) return;
    let e = null === Q ? 0 : Q + 1;
    let t = Math.min(ei.length - 1, e);
    if (t !== Q && (J(t), eo.current && es.current)) {
      let e = eo.current.getBoundingClientRect();
      let t = es.current.getBoundingClientRect();
      e.bottom > t.bottom - e.height && eo.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }, [ei, Q]);
  let e_ = useCallback(() => {
    let e = Math.max(0, (Q || 0) - 1);
    if (e !== Q && (J(e), eo.current && es.current)) {
      let e = eo.current.getBoundingClientRect();
      let t = es.current.getBoundingClientRect();
      e.top < t.top + e.height && eo.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }, [Q]);
  let eA = useCallback(e => {
    R({
      ...t,
      tokens: t.tokens.concat(e),
      inputValue: ""
    });
    en("token_added");
  }, [t, en, R]);
  let ey = useCallback(e => {
    let i = t.tokens.slice(0, e).concat(t.tokens.slice(e + 1));
    let n = Z;
    0 === i.length ? n = null : n === e && (n = Math.max(0, n - 1));
    X(n);
    eg(e);
  }, [t.tokens, eg, Z]);
  let eb = useMemo(() => I ?? (e => ({
    state: baseErrorSeverity.OK,
    content: e
  })), [I]);
  let ev = useCallback(e => {
    if (q && "email" in e && "string" == typeof e.email) {
      let n = i(e.email, t.tokens);
      n && eA([n]);
    } else eA([eb(e)]);
  }, [eA, eb, i, q, t.tokens]);
  let eI = useCallback(() => {
    let e = null === Q ? void 0 : ei[Q];
    if (e) {
      if (e.disabled) return;
      ev(e);
    } else {
      let e = t.inputValue.trim();
      if (e) {
        let n = i(e, t.tokens);
        n && eA([n]);
      }
    }
  }, [eA, t.inputValue, t.tokens, ei, Q, ev, i]);
  let eE = useMemo(() => E ?? (e => {
    ev(e);
  }), [ev, E]);
  let ex = (() => {
    let e = null === Z;
    let t = ei.length > 0 && !!w;
    return ee && e && (t || !!k);
  })();
  let eS = _$$H(V);
  useEffect(() => {
    ex && eS.current && es.current?.scrollIntoView(eS.current);
  }, [eS, ex]);
  let ew = "" === t.inputValue || ee;
  let eC = t.errorMessage ? "autocomplete_input--inputWrapperError--1IuX3 autocomplete_input--inputWrapper--NAFMt" : ee ? "autocomplete_input--inputWrapperFocused--PAR4O autocomplete_input--inputWrapper--NAFMt" : "" !== t.inputValue && 0 === t.tokens.length ? "autocomplete_input--inputWrapperNotEmptyNoToken--H009x autocomplete_input--inputWrapper--NAFMt" : "" === t.inputValue ? "autocomplete_input--inputWrapperEmpty--tsXdD autocomplete_input--inputWrapper--NAFMt" : "autocomplete_input--inputWrapper--NAFMt";
  let eT = {
    width: er.current?.getBoundingClientRect().width
  };
  let ek = useId();
  let eR = e || ek;
  let eN = useId();
  return jsxs(Fragment, {
    children: [jsxs(_$$S.div, {
      className: o()(eC, L),
      role: "group",
      onClick: () => eu(),
      ref: er,
      tabIndex: -1,
      onKeyDown: e => {
        let i = ea.current;
        switch (e.key) {
          case "Backspace":
            null !== Z ? (e.preventDefault(), ey(Z)) : t.tokens.length && i && i === document.activeElement && 0 === i.selectionStart && 0 === i.selectionEnd && (e.preventDefault(), er.current?.focus(), eh());
            break;
          case "Delete":
            null !== Z && (e.preventDefault(), ey(Z));
            break;
          case "ArrowLeft":
            i && (i !== document.activeElement || 0 === i.selectionStart && 0 === i.selectionEnd) && (er.current?.focus(), eh());
            break;
          case "ArrowRight":
            i && t.tokens.length && Z === t.tokens.length - 1 && (i.focus(), e.preventDefault());
            em();
            break;
          case "ArrowDown":
            e.preventDefault();
            ef();
            break;
          case "ArrowUp":
            e.preventDefault();
            e_();
            break;
          case "Escape":
            en("escape_pressed");
            ee && (e.stopPropagation(), ep(), er.current?.focus());
        }
      },
      children: [jsxs("div", {
        className: o()(D, ew ? "autocomplete_input--containerEmptyOrFocused--aUm-i autocomplete_input--container--24h5S" : "autocomplete_input--container--24h5S"),
        "data-onboarding-key": K,
        children: [W && jsx("label", {
          className: "autocomplete_input--persistentLabel--ntCSr",
          children: W
        }), t.tokens.map((e, t) => jsx(v, {
          index: t,
          token: e,
          isSelected: Z === t,
          onSelect: X,
          onDelete: ey,
          tokenClassName: F,
          children: jsx(S, {
            token: e
          })
        }, `token-${t}`)), jsx(LazyInputForwardRef, {
          ref: ea,
          "aria-activedescendant": ex && null !== Q ? x(eR, Q) : void 0,
          "aria-autocomplete": t.tokens.length ? "list" : void 0,
          "aria-controls": eN,
          "aria-expanded": ex,
          "aria-label": H,
          className: ew ? "autocomplete_input--inputEmptyOrFocused--9giGA autocomplete_input--input--1J8Bs autocomplete_input--tokenPadding---bs7d" : "autocomplete_input--input--1J8Bs autocomplete_input--tokenPadding---bs7d",
          "data-testid": "autocomplete-input",
          id: eR,
          onBlur: e => {
            if (es.current?.contains(e.relatedTarget)) {
              e.preventDefault();
              ea.current?.focus();
              return;
            }
            et(!1);
            en("input_blurred");
            _ && t.inputValue.trim().length > 0 && eI();
          },
          onChange: e => {
            let n = e.currentTarget.value;
            /[;,\n]/.test(n) ? eA(parseEmailList(n).reduce((e, n) => {
              let r = i(n, t.tokens);
              return r ? e.concat([r]) : e;
            }, [])) : ec(n);
          },
          onFocus: () => {
            X(null);
            et(!0);
          },
          onKeyDown: e => {
            if ("Tab" !== e.key || t.inputValue) {
              if (-1 !== s.indexOf(e.key)) {
                if (e.preventDefault(), null != Q || t.inputValue) {
                  if (eI(), E && null != Q) {
                    let e = ei[Q];
                    e && E(e);
                  }
                } else "Enter" === e.key && N && N();
              } else "Escape" === e.key && t.inputValue && (ec(""), e.stopPropagation());
            }
          },
          placeholder: t.tokens.length > 0 ? void 0 : H,
          role: "combobox",
          value: t.inputValue
        }, `input-${t.tokens.length}`)]
      }), A?.()]
    }), ex && jsxs("div", {
      className: o()(y, M, {
        "autocomplete_input--fixedResults--iOats": U
      }),
      style: Y ? {
        ...j,
        ...eT
      } : j,
      ref: es,
      id: eN,
      role: "listbox",
      children: [w && jsxs(Fragment, {
        children: [C && jsx(C, {}), ei.map((e, t) => jsx("div", {
          ref: t === Q ? eo : null,
          id: x(eR, t),
          role: "option",
          tabIndex: -1,
          onPointerMove: () => {
            J(t);
          },
          onPointerOut: z ? () => {
            J(null);
          } : void 0,
          "aria-selected": t === Q,
          onClick: e.disabled ? noop : () => eE(e),
          children: jsx(w, {
            searchResult: e,
            isSelected: t === Q
          })
        }, `search-result-${e.id || t}`))]
      }), k && jsx(k, {
        onMouseOver: () => {
          J(null);
        }
      })]
    }), !Z && 0 === ei.length && t.inputValue.length > 0 && T && jsx("div", {
      className: o()(y, M),
      style: j,
      ref: es,
      children: jsx(T, {})
    })]
  });
}
function x(e, t) {
  return `${e}-option-${t}`;
}
export const P = $$E0;
export const D = $$I1;