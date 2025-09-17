import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Component, useMemo, createContext, useContext } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { N } from "../905/438674";
import { Button } from "../905/521428";
import { setupThemeContext } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { reportError, SeverityLevel } from "../905/11";
import { getI18nString, renderI18nText } from "../905/303541";
import { getI18nState } from "../figma_app/363242";
let n;
let g = Symbol("Default");
let $$f1 = {
  DEFAULT_FULL_PAGE: g,
  NONE_I_KNOW_WHAT_IM_DOING: Symbol("None")
};
export function $$_3(e, t) {
  if (t) {
    e.stack += "\n\nReact stack:" + t.componentStack;
    let i = Error("React component stack where the error occurred");
    i.stack = t.componentStack;
    e.cause = i;
  }
}
function A(e) {
  return e?.message?.includes("The node to be removed is not a child of this node");
}
let y = class e extends Component {
  constructor(e) {
    super(e);
    this.resetErrorState = () => {
      this.setState({
        hasError: !1,
        isGoogleTranslateError: !1,
        error: void 0
      });
    };
    this.state = {
      hasError: !1,
      isGoogleTranslateError: !1
    };
  }
  static getDerivedStateFromError(e) {
    return {
      hasError: !0,
      isGoogleTranslateError: A(e),
      error: e
    };
  }
  componentDidCatch(t, i) {
    $$_3(t, i);
    try {
      this.props.onError?.();
    } catch (e) {}
    let n = this.props.fallback === $$f1.DEFAULT_FULL_PAGE;
    let r = A(t);
    let a = reportError(this.props.team || _$$e.UNOWNED, t, {
      tags: {
        react: !0,
        errorBoundary: this.props.boundaryKey,
        ...this.props.sentryTags,
        ...(n || this.props.severity === SeverityLevel.Critical ? {
          severity: SeverityLevel.Critical
        } : {})
      }
    });
    n && !e.reportedHardCrash && (e.reportedHardCrash = !0, r ? trackEventAnalytics("js_extension_dom_crash", {
      errorBoundary: this.props.boundaryKey
    }, {
      forwardToDatadog: !0
    }) : trackEventAnalytics("js_hard_crash", {
      errorBoundary: this.props.boundaryKey,
      errorMessage: t?.message
    }, {
      forwardToDatadog: !0
    }));
    this.sentryID = a;
  }
  render() {
    if (this.state.hasError) {
      console.log("Rendering error: " + this.state.error);
      console.log("Boundary key: " + this.props.boundaryKey);
      let e = null;
      e = this.props.fallback === g ? jsx($$I2, {
        sentryId: this.sentryID,
        isGoogleTranslateError: this.state.isGoogleTranslateError
      }) : this.props.fallback === $$f1.NONE_I_KNOW_WHAT_IM_DOING ? null : "function" == typeof this.props.fallback ? this.props.fallback(() => this.resetErrorState()) : this.props.fallback;
      return jsx(x, {
        error: this.state.error,
        children: e
      });
    }
    return this.props.children;
  }
};
y.reportedHardCrash = !1;
let $$b0 = y;
let v = {
  title: "Something went wrong",
  descriptionP1: "Our team is looking into it now. If reloading the page doesn't work, check our ",
  statusPage: "status page",
  descriptionP2: " for updates",
  googleTranslateDescription: "This is likely due to a Chrome Extension, such as Google Translate. Try disabling Chrome Extensions and refresh the page",
  reload: "Reload"
};
export function $$I2(e) {
  let t = useMemo(() => {
    let e = document.body.style.colorScheme;
    return e && "dark" === e ? "dark" : "light";
  }, []);
  let i = useMemo(() => {
    try {
      let e = getI18nState(!1);
      return e?.initialized && !!getI18nString("general.root_error_boundary_title");
    } catch (e) {
      return !1;
    }
  }, []);
  let n = e.isGoogleTranslateError && getFeatureFlags().error_boundary_google_translate;
  return jsx(setupThemeContext, {
    mode: t,
    children: jsx("div", {
      className: "error_boundary--rootErrorBoundary--AMgla",
      children: jsxs("div", {
        className: "error_boundary--errorBoundaryCenterContent--ItmDw",
        children: [jsx("h1", {
          className: "error_boundary--errorBoundaryTitle--zgx1h text--fontPos22--4H4Fc text--_fontBase--QdLsd",
          children: i ? renderI18nText("general.root_error_boundary_title") : v.title
        }), jsx("div", {
          className: "error_boundary--errorBoundaryDescription--iC-21 text--fontPos15--IR8IB text--_fontBase--QdLsd",
          children: n ? i ? renderI18nText("general.root_error_boundary_google_translate_description") : v.googleTranslateDescription : i ? renderI18nText("general.root_error_boundary_description", {
            status_page: jsx(N, {
              trusted: !0,
              href: "https://status.figma.com",
              children: renderI18nText("general.root_error_boundary_status_page")
            })
          }) : jsxs(Fragment, {
            children: [jsx("span", {
              children: v.descriptionP1
            }), jsx(N, {
              trusted: !0,
              href: "https://status.figma.com",
              children: v.statusPage
            }), jsx("span", {
              children: v.descriptionP2
            })]
          })
        }), jsx("div", {
          className: "error_boundary--errorBoundaryButtonContainer--LEutz",
          children: jsx(Button, {
            variant: "primary",
            onClick: () => location.reload(),
            children: i ? renderI18nText("general.root_error_boundary_refresh") : v.reload
          })
        }), e.sentryId && jsxs("div", {
          className: "error_boundary--errorBoundaryErrorId--Xso5v text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: ["Error ID: ", e.sentryId]
        })]
      })
    })
  });
}
function E() {
  return n ??= createContext({});
}
function x(e) {
  let t = E();
  let {
    error,
    children
  } = e;
  let s = useMemo(() => ({
    error
  }), [error]);
  return jsx(t.Provider, {
    value: s,
    children
  });
}
export function $$S4() {
  let e = E();
  return useContext(e);
}
export const tH = $$b0;
export const H4 = $$f1;
export const S1 = $$I2;
export const As = $$_3;
export const Hb = $$S4;