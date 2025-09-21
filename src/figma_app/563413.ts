import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useImperativeHandle, useState, useRef, useEffect, forwardRef } from "react";
import { IconButton } from "../905/443068";
import { D } from "../905/555681";
import { h as _$$h } from "../905/994594";
import { f as _$$f } from "../905/54715";
import { A as _$$A } from "../905/251970";
import { getFeatureFlags } from "../905/601108";
import u from "classnames";
import { analyticsEventManager } from "../905/449184";
import { h as _$$h2 } from "../905/207101";
import { useLatestRef } from "../figma_app/922077";
import { M } from "../figma_app/648761";
import { getInitialOptions } from "../figma_app/169182";
import { KeyCodes } from "../905/63728";
import { useHandleChangeEvent, useHandleKeyboardEvent, useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { LazyInputForwardRef } from "../905/408237";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { In } from "../905/672640";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { jr, W0 } from "../figma_app/896988";
import { KindEnum } from "../905/129884";
import { vq, rk, qc, mn, $7, W1, p3, Rt, mh, Gh, r3, nP, lm, sb, vs, Ck, HD, RT, qX, Cs, nk, CC, Vl, ZG, MU, uD, ax, JU, Qm, S_, nA, tL, i3 } from "../905/956371";
import { A as _$$A2 } from "../5724/415132";
import { A as _$$A3 } from "../1617/187124";
import { A as _$$A4 } from "../1617/720598";
var p = u;
export function $$P7(e, t) {
  let r = useCallback(e => {
    setTimeout(() => {
      b.current && (b.current.focus(), e && b.current.select());
    }, 0);
  }, []);
  let n = useCallback(() => {
    b.current && b.current.blur();
  }, []);
  let a = useCallback(() => {
    b.current && b.current.select();
  }, []);
  useImperativeHandle(t, () => ({
    focus: r,
    blur: n,
    select: a,
    searchInput: b.current
  }));
  let [s, o] = useState(!1);
  let [l, d] = useState(!1);
  let [c, u] = useState(void 0);
  let {
    onFocus,
    onClick
  } = e;
  let g = useCallback(() => {
    onFocus && onFocus();
    d(!0);
  }, [onFocus]);
  let f = useRef(!1);
  let b = useRef(null);
  let T = useCallback(e => {
    f.current = document.activeElement !== e.target;
  }, []);
  let I = useCallback(() => {
    f.current && (b.current?.select(), g());
  }, [g]);
  let S = useCallback(() => {
    e.onBlur && e.onBlur();
    d(!1);
  }, [e]);
  let v = useHandleChangeEvent(e.recordingKey, "change", t => {
    let r = t.target;
    e.onChange(r.value);
  });
  let A = useHandleKeyboardEvent(e.recordingKey, "keydown", t => {
    if (!(e.isKeyDownHandled && e.isKeyDownHandled(t))) {
      if (" " === t.key && t.stopPropagation(), t.keyCode === KeyCodes.ESCAPE) {
        b.current?.blur();
        return;
      }
      jr(t, W0.NO);
    }
  });
  let x = useCallback((e = !1) => {
    e && o(!0);
    r();
    onClick && onClick();
  }, [r, onClick]);
  let C = useHandleMouseEvent(e.recordingKey, "click", t => {
    t.stopPropagation();
    e.clearSearch();
    o(!1);
    r();
  });
  let w = useHandleKeyboardEvent(e.recordingKey + ".clear", "keydown", t => {
    t.stopPropagation();
    e.clearSearch();
    o(!1);
    r();
  });
  let O = useLatestRef(e.isFocused);
  useEffect(() => {
    O || !0 !== e.isFocused ? !0 === O && !1 === e.isFocused && n() : r();
  }, [n, r, O, e.isFocused]);
  _$$h2(() => {
    e.focusOnMount && b.current && (b.current.focus(), g());
    e.selectTextOnMount && b.current && b.current.select();
  });
  return {
    loggedOutSearchBarActivated: s,
    inputFocused: l,
    placeholderWidth: c,
    setPlaceholderWidth: u,
    searchInputRef: b,
    onMouseDown: T,
    onMouseUp: I,
    onSearchClick: x,
    onClearSearchClick: C,
    onClearSearchKeyDown: w,
    onFocus,
    onBlur: S,
    onClick,
    onSearchKeyDown: A,
    onSearchChange: v
  };
}
let $$D1 = forwardRef((e, t) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onClearSearchClick,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = $$P7(e, t);
  let _ = isDevHandoffEditorType();
  let h = _ ? vq : rk;
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: `${h} ${e.className || ""}`,
    children: [e.withUI3Icon ? jsx(_$$h, {
      className: e.iconClassName
    }) : jsx(SvgComponent, {
      className: e.iconClassName ?? qc,
      svg: _$$A2
    }), jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: mn,
      dataTestId: "search-bar-input",
      disabled: e.disabled,
      maxInputLength: e.maxInputLength,
      onBlur,
      onChange: onSearchChange,
      onClick,
      onFocus,
      onKeyDown: onSearchKeyDown,
      onMouseDown,
      onMouseUp,
      placeholder: e.placeholder || getI18nString("general.search"),
      spellCheck: !1,
      style: styleBuilderInstance.$$if(e.hasTransparentBackground, styleBuilderInstance.add({
        background: "transparent"
      })).$$if(_ || e.smallFont, styleBuilderInstance.textBodyMedium).$,
      value: e.query
    }), jsx(z, {
      query: e.query,
      hideXIcon: !!e.hideXIcon,
      withSmallXIcon: !!e.withSmallXIcon,
      onClearSearchClick,
      customClearSearchIcon: e.customClearSearchIcon,
      customContainerClassName: e.customClearSearchContainerClassName
    })]
  });
});
let $$k4 = forwardRef((e, t) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onClearSearchClick,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = $$P7(e, t);
  let p = isDevHandoffEditorType();
  let _ = p ? vq : rk;
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: `${_} ${e.className || ""}`,
    children: [jsx("button", {
      onClick: e.onBack,
      className: _$$s.colorBgSecondary.$,
      children: jsx(In, {
        icon: "chevron-left-32"
      })
    }), jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: mn,
      dataTestId: "search-bar-input",
      disabled: e.disabled,
      maxInputLength: e.maxInputLength,
      onBlur,
      onChange: onSearchChange,
      onClick,
      onFocus,
      onKeyDown: onSearchKeyDown,
      onMouseDown,
      onMouseUp,
      placeholder: e.placeholder || getI18nString("general.search"),
      spellCheck: !1,
      style: styleBuilderInstance.$$if(e.hasTransparentBackground, styleBuilderInstance.add({
        background: "transparent"
      })).$$if(p || e.smallFont, styleBuilderInstance.textBodyMedium).$,
      value: e.query
    }), jsx(z, {
      query: e.query,
      hideXIcon: !!e.hideXIcon,
      withSmallXIcon: !!e.withSmallXIcon,
      onClearSearchClick
    })]
  });
});
let $$M6 = forwardRef((e, t) => {
  let r = M(t);
  return jsx("div", {
    className: $7,
    onMouseDown: () => r.current?.focus(),
    children: jsx($$D1, {
      ...e,
      smallFont: !0,
      hasTransparentBackground: !0,
      className: p()(_$$s.wFull.$, e.className),
      ref: r
    })
  });
});
let $$F0 = forwardRef((e, t) => {
  let {
    inputFocused,
    placeholderWidth,
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onClearSearchClick,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = $$P7(e, t);
  let h = e.placeholder || getI18nString("general.search");
  let m = `${e.className || ""} ${W1}`;
  let g = e.query.length > 0 ? p3 : Rt;
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: m,
    onMouseDown: e => {
      onMouseDown(e);
      e.target.matches("input") || e.preventDefault();
    },
    onMouseUp,
    children: [jsx(SvgComponent, {
      className: mh,
      svg: _$$A2
    }), jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: g,
      onBlur,
      onChange: onSearchChange,
      onClick,
      onFocus,
      onKeyDown: onSearchKeyDown,
      placeholder: h,
      spellCheck: !1,
      style: {
        width: inputFocused ? void 0 : placeholderWidth
      },
      value: e.query
    }), jsx(z, {
      query: e.query,
      hideXIcon: !!e.hideXIcon,
      withSmallXIcon: !!e.withSmallXIcon,
      onClearSearchClick
    })]
  });
});
let $$j3 = forwardRef((e, t) => {
  let {
    inputFocused,
    placeholderWidth,
    setPlaceholderWidth,
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onClearSearchClick,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = $$P7(e, t);
  useEffect(() => {
    analyticsEventManager.trackDefinedEvent("search_experience.dead_code", {
      userId: getInitialOptions().user_data?.id,
      codeLocation: "SidebarSearchBar"
    });
  }, []);
  let E = e.placeholder || getI18nString("general.search");
  let y = `${e.className || ""} ${Gh}`;
  let T = e.query.length > 0 ? r3 : nP;
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: y,
    onMouseDown: e => {
      onMouseDown(e);
      e.target.matches("input") || e.preventDefault();
    },
    onMouseUp,
    children: [jsx(In, {
      icon: "search-32"
    }), jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: T,
      onBlur,
      onChange: onSearchChange,
      onClick,
      onFocus,
      onKeyDown: onSearchKeyDown,
      placeholder: E,
      spellCheck: !1,
      style: {
        width: inputFocused ? void 0 : placeholderWidth
      },
      value: e.query
    }), jsx("div", {
      className: lm,
      ref: e => setPlaceholderWidth(Math.max(50, e?.getBoundingClientRect().width)),
      children: E
    }), jsx(z, {
      query: e.query,
      hideXIcon: !!e.hideXIcon,
      withSmallXIcon: !!e.withSmallXIcon,
      onClearSearchClick
    })]
  });
});
let $$U9 = forwardRef((e, t) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = $$P7(e, t);
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: sb,
    children: [jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: vs,
      onBlur,
      onChange: onSearchChange,
      onClick,
      onFocus,
      onKeyDown: onSearchKeyDown,
      onMouseDown,
      onMouseUp,
      placeholder: e.placeholder || getI18nString("general.search"),
      spellCheck: !1,
      value: e.query
    }), jsx(SvgComponent, {
      className: Ck,
      svg: _$$A3,
      onClick: e.onSubmit
    })]
  });
});
let $$B2 = forwardRef((e, t) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onClearSearchClick,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = $$P7(e, t);
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: p()(e.className || HD, {
      [RT]: !e.extraSpacing,
      [qX]: e.extraSpacing,
      [Cs]: e.hideSearchIcon
    }),
    children: [!e.hideSearchIcon && jsx(SvgComponent, {
      svg: _$$A4,
      className: nk
    }), jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: e.query ? CC : Vl,
      dataTestId: e.dataTestId,
      onBlur,
      onChange: onSearchChange,
      onClick,
      onFocus,
      onKeyDown: onSearchKeyDown,
      onMouseDown,
      onMouseUp,
      placeholder: e.placeholder || getI18nString("design_systems.publishing_modal.search_placeholder"),
      spellCheck: !1,
      value: e.query
    }), jsx(z, {
      hideXIcon: e.hideXIcon,
      query: e.query,
      onClearSearchClick,
      recordingKey: generateRecordingKey(e, "closeX")
    })]
  });
});
let $$G5 = forwardRef((e, t) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onClearSearchClick,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = $$P7(e, t);
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: `${ZG} ${e.className || ""}`,
    children: [jsx(SvgComponent, {
      svg: _$$A4,
      className: MU
    }), jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: uD,
      onBlur,
      onChange: onSearchChange,
      onClick,
      onFocus,
      onKeyDown: onSearchKeyDown,
      onMouseDown,
      onMouseUp,
      placeholder: e.placeholder || getI18nString("general.search"),
      spellCheck: !1,
      style: e.hasTransparentBackground ? {
        background: "transparent"
      } : void 0,
      value: e.query
    }), jsx(z, {
      hideXIcon: e.hideXIcon,
      query: e.query,
      onClearSearchClick,
      recordingKey: generateRecordingKey(e, "clearSearch")
    })]
  });
});
let $$V8 = forwardRef((e, t) => {
  let {
    loggedOutSearchBarActivated,
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onSearchClick,
    onClearSearchClick,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = $$P7(e, t);
  useEffect(() => {
    analyticsEventManager.trackDefinedEvent("search_experience.dead_code", {
      userId: getInitialOptions().user_data?.id,
      codeLocation: "LoggedOutSearchBar"
    });
  }, []);
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: `${ax} ${e.className || ""}`,
    children: [!loggedOutSearchBarActivated && !e.query && jsx("div", {
      className: JU,
      onClick: () => onSearchClick(!0),
      children: jsx(SvgComponent, {
        className: Qm,
        svg: _$$A3
      })
    }), (loggedOutSearchBarActivated || !!e.query) && jsxs("div", {
      className: S_,
      children: [jsx(LazyInputForwardRef, {
        ref: searchInputRef,
        autoFocus: !0,
        className: nA,
        onBlur,
        onChange: onSearchChange,
        onClick,
        onFocus,
        onKeyDown: onSearchKeyDown,
        onMouseDown,
        onMouseUp,
        placeholder: e.placeholder || getI18nString("general.search"),
        spellCheck: !1,
        value: e.query
      }), jsx(z, {
        hideXIcon: !1,
        query: e.query,
        onClearSearchClick
      })]
    })]
  });
});
let $$H10 = forwardRef((e, t) => {
  let r = M(t);
  return getFeatureFlags().fpl_search_input ? jsx("div", {
    style: {
      width: 248,
      ...e.styleOverrides
    },
    children: jsx(D.Lazy, {
      "aria-label": e.placeholder,
      htmlAttributes: {
        maxLength: e.maxInputLength
      },
      onChange: e.onChange,
      placeholder: e.placeholder,
      size: "md",
      value: e.query
    })
  }) : jsx("div", {
    className: tL,
    style: e.styleOverrides,
    onMouseDown: () => r.current?.focus(),
    children: jsx($$D1, {
      onChange: e.onChange,
      focusOnMount: !1,
      query: e.query,
      clearSearch: e.clearSearch,
      placeholder: e.placeholder,
      maxInputLength: e.maxInputLength,
      smallFont: !0,
      className: _$$s.wFull.$,
      ref: r
    })
  });
});
function z({
  query: e,
  hideXIcon: t,
  withSmallXIcon: r = !1,
  onClearSearchClick: i,
  recordingKey: s,
  customClearSearchIcon: o,
  customContainerClassName: c
}) {
  return !e || t ? null : jsx("div", {
    className: p()(i3, c),
    children: jsx(IconButton, {
      onClick: i,
      "aria-label": getI18nString("search.search_bar.clear"),
      recordingKey: s,
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("search.search_bar.clear"),
        "data-testid": "clearSearchButton"
      },
      children: o || (r ? jsx(_$$f, {}) : jsx(_$$A, {}))
    })
  });
}
export const Cp = $$F0;
export const IW = $$D1;
export const Lp = $$B2;
export const Qv = $$j3;
export const RE = $$k4;
export const jq = $$G5;
export const kq = $$M6;
export const ne = $$P7;
export const o_ = $$V8;
export const xD = $$U9;
export const y2 = $$H10;