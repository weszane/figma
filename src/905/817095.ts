import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { memo, useState, useMemo, useRef, useEffect, useReducer, useCallback } from "react";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogBody, DialogFooter, DialogActionStrip, DialogContents, DialogHeader, DialogTitle } from "../figma_app/272243";
import { getI18nString, renderI18nText } from "../905/303541";
import { liveStoreInstance, setupResourceAtomHandler } from "../905/713695";
import { StatsigAPI } from "../905/325034";
import { registerModal } from "../905/102752";
import { setupAutofocusHandler } from "../905/128376";
import { setupToggleButton } from "../905/167712";
import { Link } from "../905/438674";
import { Button } from "../905/521428";
import { $ } from "../905/953280";
import { Te } from "../vendor/813803";
import { getFeatureFlags, M as _$$M } from "../905/601108";
import { useDebounce } from 'use-debounce';
import { getFeatureFlagRulesExport, buildUploadUrl, getInitialOptions } from "../figma_app/169182";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { useDispatch } from "react-redux";
import { d as _$$d } from "../905/49800";
import { Label } from "../905/270045";
import { LoadingSpinner } from "../905/443820";
import { X as _$$X } from "../905/736922";
import { Z } from "../905/279476";
import { x as _$$x } from "../905/149501";
import { g as _$$g } from "../905/125190";
import { F as _$$F } from "../905/422355";
import { VisualBellActions } from "../905/302958";
import { KindEnum } from "../905/129884";
import { customHistory } from "../905/612521";
let D = memo(function (e) {
  let t = useDispatch<AppDispatch>();
  let i = getFeatureFlags()[e.flagName] ?? !1;
  let r = _$$F(e.flagName);
  let a = void 0 !== getFeatureFlagRulesExport()[r];
  return jsxs(Fragment, {
    children: [jsx(_$$d, {
      label: jsxs("div", {
        className: cssBuilderInstance.flex.justifyBetween.itemsCenter.$,
        children: [jsxs("div", {
          className: cssBuilderInstance.flex.itemsCenter.gap8.$,
          children: [jsx(Label, {
            children: e.flagName
          }), jsxs("div", {
            className: cssBuilderInstance.flex.itemsCenter.gap2.$,
            children: [jsx(Link, {
              newTab: !0,
              href: `https://console.statsig.com/5ETXMP5xDW3P7AMyQ14tey/gates/${encodeURIComponent(e.flagName)}`,
              children: jsx("img", {
                className: cssBuilderInstance.flex.$,
                src: buildUploadUrl("bf11a5c5f29b282039d94f59b56517aa288aa536"),
                alt: getI18nString("feature_flag_overrides.statsig_logo"),
                width: "16",
                height: "16"
              })
            }), jsx(_$$X, {
              className: cssBuilderInstance.cursorPointer.$,
              onClick: () => {
                navigator.clipboard.writeText(e.flagName);
                t(VisualBellActions.enqueue({
                  type: "feature-flag-copy-to-clipboard",
                  message: getI18nString("feature_flag_overrides.copied_to_clipboard", {
                    flagName: e.flagName
                  })
                }));
              },
              "data-tooltip": getI18nString("feature_flag_overrides.copy_to_clipboard"),
              "data-tooltip-type": KindEnum.TEXT
            }), !e.status && a && e.enabled !== i && jsx(Z, {
              className: cssBuilderInstance.cursorPointer.$,
              "data-tooltip": `This flag is ${i ? "enabled" : "disabled"} in the current tab, but ${e.enabled ? "enabled" : "disabled"} in statsig. Refresh the tab to apply the change.`,
              "data-tooltip-type": KindEnum.TEXT
            })]
          })]
        }), e.status ? jsxs("div", {
          className: cssBuilderInstance.flex.gap8.itemsCenter.$,
          children: ["pending" === e.status && jsx(_$$x, {
            "aria-label": getI18nString("feature_flag_overrides.pending_change")
          }), "loading" === e.status && jsx("div", {
            "data-testid": `${e.flagName}-loading-spinner`,
            children: jsx(LoadingSpinner, {})
          }), "success" === e.status && jsx(_$$g, {
            "aria-label": getI18nString("feature_flag_overrides.success")
          }), "error" === e.status && jsx(Z, {
            "aria-label": getI18nString("feature_flag_overrides.error")
          })]
        }) : null]
      }),
      checked: e.enabled,
      onChange: t => e.onToggle?.(e.flagName, t),
      children: e.flagDescription || "-"
    }, e.flagName), e.errorMessage && jsx("div", {
      className: cssBuilderInstance.colorBgDanger.bRadius4.$,
      children: jsx("div", {
        className: cssBuilderInstance.p8.colorTextOndanger.$,
        children: e.errorMessage
      })
    })]
  });
});
let L = (e, t, i) => {
  let n = i ? RegExp(t, "i") : null;
  return Object.keys(e).filter(e => n ? n.test(e) : e.toLowerCase().includes(t.toLowerCase())).sort();
};
function F(e) {
  let t = setupAutofocusHandler();
  let [i, a] = useState("");
  let [s] = useDebounce(i, 100);
  let [d, c] = useState(!1);
  let {
    currentFlagValues,
    pendingChanges,
    onFlagToggle,
    isLoading
  } = e;
  let w = useMemo(() => L(currentFlagValues, s, d), [currentFlagValues, s, d]);
  let C = 0 === s.length;
  let T = useRef(null);
  let k = Te({
    count: w.length,
    getScrollElement: () => T.current,
    estimateSize: () => 64,
    getItemKey: e => w[e],
    overscan: 10
  });
  let R = getFeatureFlags().fpl_window_scroll_container;
  let N = jsxs(Fragment, {
    children: [jsxs("div", {
      className: cssBuilderInstance.sticky.top0.zIndex1.colorBg.pt8.$,
      children: [renderI18nText("feature_flag_overrides.description"), jsxs("div", {
        className: cssBuilderInstance.flex.gap8.pt8.$,
        children: [jsx(BigTextInputForwardRef, {
          placeholder: getI18nString("feature_flag_overrides.search_feature_flags"),
          value: i,
          onChange: e => a(e.target.value),
          className: cssBuilderInstance.wFull.$,
          ref: t
        }), jsx(setupToggleButton, {
          onIcon: jsx(M, {}),
          offIcon: jsx(M, {}),
          variant: "highlighted",
          checked: d,
          onChange: c,
          "aria-label": getI18nString("feature_flag_overrides.regex_mode")
        })]
      })]
    }), isLoading && jsx("span", {
      children: renderI18nText("feature_flag_overrides.loading")
    }), !isLoading && C && jsx("span", {
      children: renderI18nText("feature_flag_overrides.loaded_feature_flags", {
        count: Object.keys(currentFlagValues).length
      })
    }), !isLoading && !C && jsx("div", {
      style: {
        height: `${k.getTotalSize()}px`,
        width: "100%",
        position: "relative"
      },
      children: k.getVirtualItems().map(t => jsx("div", {
        style: {
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: `${(e.flagDescriptions[w[t.index]] || "").length / 76 * 12}px`,
          transform: `translateY(${t.start}px)`
        },
        children: jsx(D, {
          flagName: w[t.index],
          flagDescription: e.flagDescriptions[w[t.index]],
          enabled: pendingChanges[t.key] ?? currentFlagValues[t.key],
          onToggle: onFlagToggle,
          status: void 0 !== pendingChanges[t.key] ? "pending" : void 0
        })
      }, t.key))
    })]
  });
  return jsxs(Fragment, {
    children: [jsx(DialogBody, {
      ref: T,
      padding: {
        top: 0
      },
      scrolling: R ? void 0 : "custom",
      className: R ? cssBuilderInstance.flex.flexColumn.gap8.$ : void 0,
      children: R ? N : jsx("div", {
        className: cssBuilderInstance.flex.flexColumn.gap8.$,
        children: N
      })
    }), jsx(DialogFooter, {
      children: jsxs(DialogActionStrip, {
        children: [jsx(Link.Button, {
          newTab: !0,
          variant: "secondary",
          iconPrefix: jsx($, {}),
          href: `https://go/statsig-override/${encodeURIComponent(getInitialOptions().user_data?.email || "")}`,
          children: renderI18nText("feature_flag_overrides.view_current_overrides")
        }), jsx(Button, {
          disabled: 0 === Object.keys(pendingChanges).length,
          onClick: e.onReviewChanges,
          children: renderI18nText("feature_flag_overrides.review_changes")
        })]
      })
    })]
  });
}
function M() {
  return jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "var(--color-icon)",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.012 2h.976v3.113l2.56-1.557.486.885L11.47 6l2.564 1.559-.485.885-2.561-1.557V10h-.976V6.887l-2.56 1.557-.486-.885L9.53 6 6.966 4.441l.485-.885 2.561 1.557V2zM2 10h4v4H2v-4z"
    })
  });
}
let U = (e, t, i) => i ? "loading" : t[e] ? t[e].status : "pending";
let B = (e, t) => {
  let i = t[e];
  return i?.status === "error" ? i.error : null;
};
function V(e) {
  let {
    pendingChanges
  } = e;
  let i = Object.keys(pendingChanges).sort();
  let [a, s] = useState(!1);
  let [d, u] = useState({});
  let p = e => {
    let i = {};
    e.success.forEach(e => {
      i[e] = {
        status: "success"
      };
    });
    e.errors ? Object.entries(e.errors).forEach(([e, t]) => {
      i[e] = {
        status: "error",
        error: t
      };
    }) : localStorage.setItem(_$$M, JSON.stringify({
      prevWindowFlags: window.INITIAL_OPTIONS.feature_flags,
      expiration: Date.now() + 6e5,
      flags: pendingChanges
    }));
    u(i);
  };
  let m = Object.keys(d).length > 0 && Object.values(d).every(e => "success" === e.status);
  let [h, f] = useState(30);
  useEffect(() => {
    if (m) {
      let e = setInterval(() => {
        f(t => (1 === t && clearInterval(e), t - 1));
      }, 1e3);
      return () => clearInterval(e);
    }
  }, [m]);
  useEffect(() => {
    0 === h && customHistory.reload("feature flag override refresh");
  }, [h]);
  return jsxs(Fragment, {
    children: [jsx(DialogBody, {
      children: jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.gap8.$,
        children: [m ? renderI18nText("feature_flag_overrides.waiting_for_changes_to_propagate") : renderI18nText("feature_flag_overrides.review_changes_description"), i.map(i => jsx(D, {
          flagName: i,
          flagDescription: e.flagDescriptions[i],
          enabled: pendingChanges[i],
          status: U(i, d, a),
          errorMessage: B(i, d)
        }, i))]
      })
    }), jsx(DialogFooter, {
      children: jsxs(DialogActionStrip, {
        children: [jsx(Button, {
          variant: "secondary",
          onClick: e.onBack,
          children: renderI18nText("feature_flag_overrides.back")
        }), jsx(Button, {
          disabled: a || m,
          onClick: () => {
            s(!0);
            StatsigAPI.postStatsigUpdateOverrides(pendingChanges).then(e => {
              s(!1);
              p(e.data.meta);
            }).catch(e => {
              s(!1);
              p(e.data.meta);
            });
          },
          children: m ? renderI18nText("feature_flag_overrides.reloading_in_seconds", {
            seconds: h
          }) : renderI18nText("feature_flag_overrides.confirm_changes")
        })]
      })
    })]
  });
}
var G = (e => (e[e.MAKE_CHANGES = 0] = "MAKE_CHANGES", e[e.REVIEW_CHANGES = 1] = "REVIEW_CHANGES", e))(G || {});
let z = liveStoreInstance.Query({
  fetch: async () => (await StatsigAPI.getStatsigFlagStatusForUser()).data.meta
});
let H = liveStoreInstance.Query({
  fetch: async () => (await StatsigAPI.getStatsigFlagDescriptions()).data.meta ?? {}
});
let $$W0 = registerModal(function (e) {
  let t = useModalManager(e);
  let [i, c] = setupResourceAtomHandler(z(null));
  let u = useMemo(() => i?.data ?? {}, [i]);
  let [p, m] = setupResourceAtomHandler(H(null));
  let h = p?.data ?? {};
  let [g, f] = useState(0);
  let [_, A] = useReducer((e, t) => {
    if (u[t.flagName] !== t.enabled) return {
      ...e,
      [t.flagName]: t.enabled
    };
    {
      let {
        [t.flagName]: i,
        ...n
      } = e;
      return n;
    }
  }, {});
  let y = useCallback((e, t) => A({
    flagName: e,
    enabled: t
  }), [A]);
  return jsx(ModalRootComponent, {
    manager: t,
    width: "lg",
    height: "dynamic",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("feature_flag_overrides.view_and_change_feature_flags")
        })
      }), 0 === g ? jsx(F, {
        isLoading: "loading" === i.status || "loading" === p.status,
        currentFlagValues: u,
        flagDescriptions: h,
        pendingChanges: _,
        onFlagToggle: y,
        onReviewChanges: () => f(1)
      }) : jsx(V, {
        pendingChanges: _,
        flagDescriptions: h,
        onBack: () => f(0)
      })]
    })
  });
}, "ChangeFeatureFlagsModal");
export const qf = $$W0;
