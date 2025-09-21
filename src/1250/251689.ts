import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import { throwTypeError } from "../figma_app/465776";
import { Button } from "../905/521428";
import { trackEventAnalytics } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { getInitialOptions } from "../figma_app/169182";
import { getI18nString } from "../905/303541";
import { TrackingProvider } from "../figma_app/831799";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { Tr } from "../1250/158057";
import { createPortal } from "react-dom";
import { l as _$$l } from "../905/479687";
import { LinkPrimitive } from "../figma_app/496441";
import { B as _$$B } from "../1250/314515";
import { T as _$$T } from "../7021/675372";
import { wo } from "../figma_app/753501";
import { useDispatch } from "react-redux";
import { CH, g4 } from "../figma_app/770359";
import { IconButton } from "../905/443068";
import { X } from "../905/736922";
import { lW } from "../figma_app/11182";
import { getVisibleTheme } from "../905/640017";
import { k as _$$k } from "../905/443820";
import { g as _$$g } from "../905/125190";
import { VisualBellActions } from "../905/302958";
import { UserAPIHandlers } from "../905/93362";
import { sy } from "../905/37362";
import { BannerFullWidth } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
function h({
  index: e,
  complete: t
}) {
  return t ? jsx(_$$l, {}) : jsx("span", {
    children: `${e + 1}.`
  });
}
let b = createContext({
  slotElement: null,
  onAction: null
});
let x = () => useContext(b);
function y({
  children: e
}) {
  let {
    slotElement
  } = x();
  return slotElement ? createPortal(e, slotElement) : null;
}
function v({
  title: e,
  description: t,
  component: n,
  index: i,
  complete: o,
  onAction: s,
  collapsed: l
}) {
  let [d, c] = useState(null);
  return jsxs("div", {
    className: "codebase_suggestions_onboarding_step--step--A9-C4",
    children: [jsxs("div", {
      className: "codebase_suggestions_onboarding_step--title--Dj0bf",
      children: [jsx(h, {
        complete: o,
        index: i
      }), jsxs("span", {
        children: [" ", e]
      })]
    }), !l && jsxs(Fragment, {
      children: [jsxs("div", {
        className: "codebase_suggestions_onboarding_step--description--5gqL9",
        children: [jsx("span", {
          children: t
        }), jsx("div", {
          ref: e => {
            e && c(e);
          }
        })]
      }), jsx(b.Provider, {
        value: {
          slotElement: d,
          onAction: s ?? null
        },
        children: n
      })]
    })]
  });
}
let E = "bookmarklet--icon--ovS-1";
function C({
  scriptInitOptions: e
}) {
  let t = e ? `
javascript:(function()%7Bfunction%20callback()%7BCodeConnect%3F.default%3F.init(%7B%20apiToken%3A%20%22${e.apiToken}%22%2C%20${e.planIdentifier.key}%3A%20%22${e.planIdentifier.value}%22${e.endpoint ? `%2C%20endpoint%3A%20%22${e.endpoint}%22` : ""},%20referrerUrl%3A%20%22${e.referrerUrl}%22%20%7D)%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fapi.figma.com%2Fcode-connect-scripts%2Ffigma-code-connect-inline.browser.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
` : "";
  let n = !e;
  return jsx("div", {
    className: "bookmarklet--bookmarklet--IqIwW",
    children: jsx(LinkPrimitive, {
      className: "bookmarklet--link--LNBaD",
      href: t,
      htmlAttributes: {
        draggable: !n,
        onDragStart: () => {
          trackEventAnalytics("Codebase Suggestions Setup Steps Bookmarklet Dragged");
        }
      },
      onClick: wo,
      style: {
        pointerEvents: n ? "none" : "auto",
        opacity: n ? .5 : 1
      },
      children: jsxs("div", {
        className: "bookmarklet--content--ig4ew",
        children: [jsx(_$$B, {
          className: E
        }), jsx(_$$T, {
          className: E
        }), jsx("p", {
          children: getI18nString("dev_handoff.codebase_suggestions.code_connect_bookmarklet_label")
        })]
      })
    })
  });
}
function M({
  code: e
}) {
  let t = getVisibleTheme();
  let n = useDispatch();
  let {
    onAction
  } = x();
  let i = getI18nString("dev_handoff.codebase_suggestions.onboarding_copy_to_clipboard");
  return jsxs("div", {
    className: "codebase_suggestions_onboarding_step--code--G71B9",
    children: [jsx(CH, {
      basicSetup: {
        lineNumbers: !1,
        foldGutter: !1,
        highlightActiveLine: !1
      },
      extensions: [g4],
      value: e,
      theme: "dark" === t ? "dark" : "light",
      readOnly: !0
    }), jsx(y, {
      children: jsx(IconButton, {
        onClick: () => {
          n(lW({
            stringToCopy: e
          }));
          onAction?.();
        },
        htmlAttributes: {
          "data-tooltip": i,
          "data-tooltip-type": "text"
        },
        "aria-label": i,
        children: jsx(X, {})
      })
    })]
  });
}
function U({
  chosenToken: e,
  onTokenGenerated: t,
  allowExistingToken: n
}) {
  let [l, d] = useState(!1);
  let _ = null !== e;
  let {
    onAction
  } = x();
  let m = useDispatch();
  let p = () => (d(!0), UserAPIHandlers.createDevToken({
    desc: "Code Connect",
    expiration: 7776e3,
    scopes: [sy.FILE_CODE_CONNECT_WRITE]
  }).then(e => e.data.meta).catch(() => {
    m(VisualBellActions.enqueue({
      message: "Failed to generate token, please try again later",
      error: !0
    }));
  }).finally(() => {
    d(!1);
  }));
  let g = async e => {
    switch (e) {
      case "generate-token":
        {
          let e = await p();
          trackEventAnalytics("Codebase Suggestions Setup Steps Token Generated", {
            type: "generate-token"
          });
          e && (t({
            type: "generate-token",
            token: e
          }), onAction?.());
          break;
        }
      case "use-existing-token":
        trackEventAnalytics("Codebase Suggestions Setup Steps Token Generated", {
          type: "use-existing-token"
        });
        t({
          type: "use-existing-token"
        });
        onAction?.();
        break;
      default:
        throwTypeError(e);
    }
  };
  return l ? jsxs("div", {
    className: "codebase_suggestions_onboarding_step--loading--bMSPa",
    children: [jsx(_$$k, {}), getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_generating_token")]
  }) : jsxs("div", {
    children: [jsxs("div", {
      className: "codebase_suggestions_onboarding_step--buttons--VXcCO",
      children: [jsx(Button, {
        variant: "secondary",
        onClick: () => g("generate-token"),
        disabled: _,
        iconPrefix: e?.type === "generate-token" ? jsx(_$$g, {}) : void 0,
        "data-tooltip": getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_generate_token_tooltip"),
        "data-tooltip-type": "text",
        children: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_generate_token")
      }), n && jsx(Button, {
        variant: "link",
        onClick: () => g("use-existing-token"),
        disabled: _,
        iconPrefix: e?.type === "use-existing-token" ? jsx(_$$g, {}) : void 0,
        children: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_existing_token")
      })]
    }), e?.type === "generate-token" && jsx("div", {
      className: "codebase_suggestions_onboarding_step--expiration--3eZb0",
      children: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_generated_token_expiration", {
        expiration: Math.floor(90)
      })
    })]
  });
}
function z() {
  return jsx(BannerFullWidth, {
    variant: "warn",
    children: jsx(BannerMessage, {
      children: getI18nString("dev_handoff.codebase_suggestions.keep_your_api_token_secure_by_storing_it_in_a_secret_manager_never_hard_code_it_into_your_source_code")
    })
  });
}
function $({
  onContinue: e
}) {
  return jsx("div", {
    className: "codebase_suggestions_onboarding_steps--continueButtonContainer--hX-IW",
    children: jsx(Button, {
      onClick: e,
      variant: "primary",
      children: getI18nString("dev_handoff.component_browser_onboarding.continue_button")
    })
  });
}
export function $$q0({
  installMethod: e,
  onContinue: t
}) {
  let [n, o] = useState(null);
  let [g, f] = useState(0);
  let [h, b] = useState(new Set());
  let x = function (e) {
    let t = useCurrentPublicPlan("useScriptInitOptions").unwrapOr(null);
    let n = t?.key;
    if (!e || !n) return null;
    let {
      type,
      parentId
    } = n;
    let o = (() => {
      switch (type) {
        case FOrganizationLevelType.ORG:
          return {
            key: "orgId",
            value: parentId || "YOUR_ORG_ID"
          };
        case FOrganizationLevelType.TEAM:
          return {
            key: "teamId",
            value: parentId || "YOUR_TEAM_ID"
          };
        case void 0:
          return {
            key: "orgId",
            value: "YOUR_ORG_ID"
          };
        default:
          throwTypeError(type);
      }
    })();
    let s = (() => {
      switch (getInitialOptions().cluster_name) {
        case "local":
          return "https://local.figma.engineering:8443/pixie";
        case "staging":
          return "https://api.staging.figma.com";
        default:
          return;
      }
    })();
    return {
      apiToken: function (e) {
        let t = e.type;
        switch (t) {
          case "generate-token":
            return e.token.token || "API_TOKEN_MISSING";
          case "use-existing-token":
            return "YOUR_API_TOKEN";
          default:
            throwTypeError(t);
        }
      }(e),
      planIdentifier: o,
      endpoint: s,
      referrerUrl: window.location.href
    };
  }(n);
  _$$h(() => {
    trackEventAnalytics("Codebase Suggestions Setup Steps Opened", {
      initialInstallMethod: e
    });
  });
  let y = x ? `import CodeConnect from "@figma/cc-alpha"
// Initialize the npm package
CodeConnect.init({
  apiToken: '${x.apiToken}',
  ${x.planIdentifier.key}: '${x.planIdentifier.value}',${x.endpoint ? `
  endpoint: '${x.endpoint}',` : ""}
  referrerUrl: '${x.referrerUrl}',
  enabled: currentEnv() === development
})

// Launch your app
React.render(<App>,..)` : "";
  let w = x ? `<script
  src="https://api.figma.com/code-connect-scripts/figma-code-connect-inline.browser.min.js"
  onload="CodeConnect?.default?.init({ apiToken: '${x.apiToken}', ${x.planIdentifier.key}:'${x.planIdentifier.value}'${x.endpoint ? `, endpoint: '${x.endpoint}'` : ""}, referrerUrl: '${x.referrerUrl}' })">
</script>` : "";
  let T = [{
    id: "npm-install",
    title: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_1_title"),
    description: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_1_description"),
    component: () => jsx(M, {
      code: "npm install --save @figma/cc-alpha"
    })
  }, {
    id: "generate-token",
    title: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_title"),
    description: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_description"),
    component: () => jsx(U, {
      chosenToken: n,
      onTokenGenerated: o,
      allowExistingToken: !0
    })
  }, {
    id: "insert-before-render",
    title: getI18nString("dev_handoff.codebase_suggestions.initalize_during_app_startup"),
    description: getI18nString("dev_handoff.codebase_suggestions.initialize_the_package_just_before_the_moment_where_your_app_starts_rendering_react"),
    component: () => jsx(M, {
      code: y
    }),
    dependsOn: ["generate-token"]
  }, {
    id: "test-connection",
    title: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_4_title"),
    description: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_4_description"),
    dependsOn: ["generate-token"]
  }, {
    id: "commit-to-codebase",
    title: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_5_title"),
    description: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_5_description"),
    component: () => jsxs(Fragment, {
      children: [jsx(z, {}), jsx($, {
        onContinue: t
      })]
    }),
    dependsOn: ["generate-token"]
  }];
  let j = [{
    id: "generate-token",
    title: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_title"),
    description: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_description"),
    component: () => jsx(U, {
      chosenToken: n,
      onTokenGenerated: o,
      allowExistingToken: !0
    })
  }, {
    id: "insert-into-header",
    title: getI18nString("dev_handoff.codebase_suggestions.insert_snippet_into_your_app_s_header"),
    description: getI18nString("dev_handoff.codebase_suggestions.insert_this_snippet_near_the_bottom_of_your_applications_head_tag"),
    component: () => jsx(M, {
      code: w
    }),
    dependsOn: ["generate-token"]
  }, {
    id: "test-connection",
    title: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_4_title"),
    description: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_4_description"),
    dependsOn: ["generate-token"]
  }, {
    id: "commit-to-codebase",
    title: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_5_title"),
    description: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_5_description"),
    component: () => jsxs(Fragment, {
      children: [jsx(z, {}), jsx($, {
        onContinue: t
      })]
    }),
    dependsOn: ["generate-token"]
  }];
  let k = [{
    id: "generate-token",
    title: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_title"),
    description: getI18nString("dev_handoff.codebase_suggestions.onboarding_step_2_description"),
    component: () => jsx(U, {
      chosenToken: n,
      onTokenGenerated: o
    })
  }, {
    id: "drag-bookmarklet",
    title: getI18nString("dev_handoff.codebase_suggestions.drag_the_bookmarklet_to_your_bookmarks_bar"),
    description: getI18nString("dev_handoff.codebase_suggestions.a_bookmarklet_is_like_a_magic_bookmark_that_when_clicked_runs_some_code_on_the_page_you_are_already_on"),
    component: () => jsx(C, {
      scriptInitOptions: x
    }),
    dependsOn: ["generate-token"]
  }, {
    id: "open-app-and-press-bookmarklet",
    title: getI18nString("dev_handoff.codebase_suggestions.navigate_to_your_app_and_click_the_bookmarklet"),
    description: getI18nString("dev_handoff.codebase_suggestions.open_your_app_in_the_browser_and_navigate_to_a_page_containing_components_you_would_like_to_ingest_click_the_bookmarklet_and_follow_the_prompts"),
    component: () => jsx($, {
      onContinue: t
    }),
    dependsOn: ["generate-token"]
  }];
  let E = (() => {
    switch (e) {
      case Tr.NPM:
        return T;
      case Tr.SNIPPET:
        return j;
      case Tr.BOOKMARKLET:
        return k;
      case null:
        return [];
      default:
        throwTypeError(e);
    }
  })();
  return jsx(TrackingProvider, {
    name: `Codebase Suggestions Onboarding Steps - ${e}`,
    children: jsx("div", {
      className: "codebase_suggestions_onboarding_steps--steps--EiS3Z",
      children: E.map((e, t) => jsx(v, {
        collapsed: (e.dependsOn || []).some(e => !h.has(e)),
        complete: g > t,
        index: t,
        title: e.title,
        description: e.description,
        component: e.component ? e.component() : void 0,
        onAction: () => function (e, t) {
          b(t => (t.add(e.id), t));
          let n = t + 1;
          n < g || f(n);
        }(e, t)
      }, t))
    })
  });
}
export const o = $$q0;
