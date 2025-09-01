import { jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useCallback, Component } from "react";
import { Ng, wA } from "../vendor/514228";
import { rr, Ay } from "../figma_app/778880";
import { t as _$$t } from "../905/303541";
import { d9 } from "../figma_app/740025";
import { W } from "../figma_app/4979";
import { md } from "../figma_app/27355";
import { az } from "../905/449184";
import { getInitialOptions } from "../figma_app/169182";
import { Uz } from "../905/63728";
import { useSprigWithSampling } from "../905/99656";
import { xD, Qv, Cp, IW, o_ } from "../figma_app/563413";
import { s as _$$s } from "../cssbuilder/589278";
import { W0, Z6, _z } from "../905/977218";
import { y as _$$y } from "../905/713563";
import { R } from "../905/186289";
import { BA } from "../905/61477";
import { G1 } from "../905/956371";
let I = (e, t) => "search" === e.view ? t.parameters.query : "";
let E = Ng((e, t) => ({
  isLoggedIn: !!e.user,
  searchQuery: I(e.selectedView, e.search),
  searchModelType: e.search.parameters.searchModelType,
  isFocused: void 0 !== t.isFocusedOverride ? t.isFocusedOverride : e.search.isFocused,
  selectedView: e.selectedView,
  currentOrgId: e.currentUserOrgId
}))(function (e) {
  useEffect(() => {
    az.trackDefinedEvent("search_experience.dead_code", {
      userId: getInitialOptions().user_data?.id,
      codeLocation: "search/views/search_bar.tsx"
    });
  }, []);
  let t = useMemo(() => e.query ?? e.searchQuery, [e.query, e.searchQuery]);
  let i = wA();
  let {
    onFocusOverride,
    onBlurOverride,
    onQueryChanged
  } = e;
  let {
    Sprig
  } = useSprigWithSampling();
  let E = _$$y(e.entryPoint, e.searchScope);
  let x = md(BA);
  let S = useCallback(() => {
    if (i(W0({
      entryPoint: e.entryPoint
    })), onFocusOverride) return onFocusOverride();
    i(Z6({
      isFocused: !0
    }));
  }, [i, e.entryPoint, onFocusOverride]);
  let w = useCallback(() => {
    if (onBlurOverride) return onBlurOverride();
    i(Z6({
      isFocused: !1,
      persistAnalyticsSession: x
    }));
  }, [i, onBlurOverride, x]);
  let C = useCallback(t => {
    onQueryChanged(t);
    e.disableSearchOnQueryChange || E(t, x, !1, !1);
  }, [onQueryChanged, E, x, e.disableSearchOnQueryChange]);
  let T = useCallback(i => {
    "file_browser" === e.entryPoint && Sprig("track", R);
    i.preventDefault();
    E(t, x, !0, !0);
    document.activeElement && rr && document.activeElement.blur();
  }, [e.entryPoint, E, t, x, Sprig]);
  let k = useCallback(() => {
    onQueryChanged("");
    i(_z({}));
    x && history.go(-1);
  }, [i, onQueryChanged, x]);
  useEffect(() => {
    let e = e => {
      e.keyCode === Uz.FORWARD_SLASH && document.activeElement?.tagName === "BODY" && S();
    };
    document.addEventListener("keydown", e);
    return () => {
      document.removeEventListener("keydown", e);
    };
  }, [S]);
  return jsx("form", {
    onSubmit: T,
    className: _$$s.wFull.$,
    children: e.useCommunityLandingStyles ? jsx(xD, {
      focusOnMount: x,
      query: t,
      clearSearch: k,
      onChange: C,
      placeholder: e.placeholder,
      onFocus: S,
      onBlur: w,
      isFocused: e.isFocused,
      onSubmit: T
    }) : e.isLoggedIn ? e.useSidebarStyles ? jsx(Qv, {
      className: Ay.mobile ? G1 : void 0,
      clearSearch: k,
      focusOnMount: x,
      hideXIcon: !1,
      isFocused: e.isFocused,
      onBlur: w,
      onChange: C,
      onFocus: S,
      onSubmit: T,
      placeholder: e.placeholder,
      query: t
    }) : e.useBrowseIANavBarStyles ? jsx(Cp, {
      className: Ay.mobile ? G1 : void 0,
      clearSearch: k,
      focusOnMount: x,
      hideXIcon: !1,
      isFocused: e.isFocused,
      onBlur: w,
      onChange: C,
      onFocus: S,
      onSubmit: T,
      placeholder: e.placeholder,
      query: t
    }) : jsx(IW, {
      className: Ay.mobile ? G1 : void 0,
      clearSearch: k,
      focusOnMount: x,
      hideXIcon: !1,
      isFocused: e.isFocused,
      onBlur: w,
      onChange: C,
      onFocus: S,
      onSubmit: T,
      placeholder: e.placeholder,
      query: t
    }) : jsx(o_, {
      className: Ay.mobile ? G1 : void 0,
      clearSearch: k,
      focusOnMount: x,
      isFocused: e.isFocused,
      onBlur: w,
      onChange: C,
      onFocus: S,
      onSubmit: T,
      placeholder: e.placeholder,
      query: t
    })
  });
});
class x extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      query: null
    };
  }
  render() {
    let e = "community" === this.props.searchScope ? _$$t("search.empty_state.search_placeholder_figma_community") : _$$t("search.empty_state.search_placeholder");
    let t = jsx("div", {
      className: "search_page_mobile_top_bar--searchBar--MTr-v",
      children: jsx(E, {
        query: this.state.query,
        onQueryChanged: e => this.setState({
          query: e
        }),
        searchScope: this.props.searchScope,
        entryPoint: this.props.isCommunity ? "community" : "file_browser",
        placeholder: e
      })
    });
    return Ay.mobile ? jsx("div", {
      className: "search_page_mobile_top_bar--mobileToolBarSpacerContainer--ma1sf",
      children: t
    }) : jsx(W, {
      tabs: null,
      center: t,
      centerFullWidth: !0
    });
  }
}
export let $$S0 = Ng(e => ({
  searchScope: e.search.parameters.searchScope,
  isCommunity: d9(e.selectedView)
}))(x);
export const o = $$S0;