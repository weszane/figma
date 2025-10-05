import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useMemo, useRef, useState, useEffect, useCallback, Suspense } from "react";
import { assert } from "../figma_app/465776";
import { Button } from "../905/521428";
import { IconButton } from "../905/443068";
import { bL, l9, mc, c$, wv } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { LoadingSpinner } from "../905/443820";
import { ox } from "../905/163832";
import { bL as _$$bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { PopoverContext } from "../905/691059";
import { y7 } from "../figma_app/343967";
import { r as _$$r } from "../905/571562";
import { A as _$$A } from "../905/24328";
import { Fullscreen } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import { generateUUIDv4 } from "../905/871474";
import { c$ as _$$c$ } from "../figma_app/236327";
import { _ as _$$_ } from "../figma_app/658134";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { replaceSelection } from "../figma_app/741237";
import { useDropdown } from "../905/848862";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { Jz } from "../905/504727";
import { uh } from "../figma_app/410518";
import { uU } from "../figma_app/547638";
import { o as _$$o } from "../figma_app/478029";
import { r$, QG } from "../figma_app/798608";
import { Qy, _b } from "../figma_app/618665";
import { JZ } from "../figma_app/572363";
let g = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M6.5 6a.5.5 0 0 1 .5.5V7h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7v2.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 .5-.5m.5 9h10V8H7z"
    })
  });
});
let B = atom(async e => {
  let t = e(Qy);
  if (t) {
    let r = await e(uh);
    return r.length > 0 ? {
      [t]: r
    } : {};
  }
  return e(_$$o);
});
export function $$G2({
  title: e,
  description: t
}) {
  return jsxs("div", {
    className: "lint_error_modal--noErrors--yrO5N",
    children: [jsx(g, {}), jsxs("div", {
      className: "lint_error_modal--lintNoErrorsText--9EY-K",
      children: [jsx("div", {
        className: "lint_error_modal--header--SXufp",
        children: e
      }), jsx("div", {
        className: "lint_error_modal--body--F01se",
        children: t
      })]
    })]
  });
}
let V = e => {
  replaceSelection(e);
  Fullscreen.triggerAction("zoom-to-selection", void 0);
};
let H = (e, t) => {
  "function" == typeof e ? e() : (fullscreenValue.triggerActionInUserEditScope("sites-fix-issue", {
    fix: e,
    nodeIds: t
  }), V(t));
};
function z({
  recordingKey: e,
  error: t
}) {
  let r = useMemo(() => generateUUIDv4(), []);
  let {
    showing,
    hide,
    show
  } = useDropdown(r);
  let d = useRef(null);
  if (0 === t.recommendations.length) return null;
  if (1 === t.recommendations.length) {
    let r = t.recommendations[0];
    return jsx(Button, {
      recordingKey: generateRecordingKey(e, "fix"),
      onClick: () => H(r.action, t.nodeIds),
      variant: "secondary",
      children: r.label
    });
  }
  {
    let e = t.recommendations.map(({
      label: e,
      action: r
    }, i) => jsx(_$$c$, {
      onClick: () => {
        H(r, t.nodeIds);
        hide();
      },
      children: e
    }, i));
    return jsxs("div", {
      ref: d,
      children: [jsx(Button, {
        variant: "secondary",
        onClick: () => {
          showing ? hide() : show();
        },
        "aria-haspopup": "true",
        "aria-expanded": showing,
        children: jsxs("div", {
          className: "lint_error_modal--fixIssuesDropdownButton--vN-0U",
          children: [t.recommendationLabelOverride ?? getI18nString("sites.lint.fix-issue"), jsx(_$$r, {})]
        })
      }), showing && d.current && jsx(Jz, {
        options: e,
        hideDropdown: hide,
        autofocusPrevElementOnEsc: !0,
        autofocusPrevElementOnSelect: !0,
        autofocusPrevElementOnTab: !0,
        focusContainerOnMount: !0,
        targetRect: d.current.getBoundingClientRect(),
        showPoint: !1
      })]
    });
  }
}
function W({
  categories: e,
  error: t,
  recordingKey: r,
  showTargets: i
}) {
  let {
    label,
    icon
  } = e[t.category];
  let d = t.icon ?? icon;
  assert(!!d, "icon is required");
  return jsxs("div", {
    className: "lint_error_modal--lintErrorsItemRow--bwpl0",
    children: [jsxs("div", {
      className: "lint_error_modal--lintErrorsItemLeft--pM6B6",
      children: [jsx("div", {
        className: "lint_error_modal--iconContainer--fIwYm",
        children: d
      }), jsxs("div", {
        className: "lint_error_modal--lintContent--1OYXO",
        children: [jsxs("div", {
          className: "lint_error_modal--issueContent--j9ORI",
          children: [jsxs("div", {
            className: cssBuilderInstance.textBodyMediumStrong.$,
            children: [label, " \xb7 ", t.label]
          }), jsx("div", {
            className: cssBuilderInstance.colorTextSecondary.$,
            children: t.description
          })]
        }), jsx(z, {
          error: t,
          recordingKey: r
        })]
      })]
    }), i && jsx("div", {
      className: "lint_error_modal--errorTarget--kau97",
      children: jsx(IconButton, {
        "aria-label": getI18nString("sites.panel.sites_issues.select_nodes_with_issues"),
        onClick: () => V(t.nodeIds),
        htmlAttributes: {
          "data-tooltip": getI18nString("sites.panel.sites_issues.select_nodes_with_issues"),
          "data-tooltip-type": "text"
        },
        children: jsx(_$$A, {})
      })
    })]
  });
}
export function $$K1({
  recordingKey: e,
  lintingResults: t,
  onlyShowResponsiveSetGuids: r
}) {
  let a = getSingletonSceneGraph();
  let s = useAtomWithSubscription(_b)?.mode !== "fullscreen";
  let o = useMemo(uU, []);
  let [c, u] = useState("all");
  let p = useMemo(() => {
    let e = new Set();
    Object.values(t).forEach(t => {
      t.forEach(t => {
        e.add(t.category);
      });
    });
    return e;
  }, [t]);
  let _ = useMemo(() => {
    let e;
    for (let r of Object.values(t)) for (let t of r) if (void 0 === e) e = t.category;else if (e !== t.category) return !0;
    return !1;
  }, [t]);
  let h = useMemo(() => {
    if ("all" === c) return t;
    let e = {};
    Object.entries(t).forEach(([t, r]) => {
      let n = r.filter(e => e.category === c);
      n.length > 0 && (e[t] = n);
    });
    return e;
  }, [t, c]);
  useEffect(() => {
    "all" === c || p.has(c) || u("all");
  }, [c, p]);
  let m = useMemo(() => JZ(a.getCurrentPage()).map(({
    guid: e
  }) => {
    let t = h[e];
    return t ? [e, t] : void 0;
  }).filter(e => {
    if (!e) return !1;
    let t = e[0];
    return !r || r.includes(t);
  }), [a, h, r]);
  return 0 === Object.keys(h).length ? jsx($$G2, {
    title: getI18nString("sites.panel.sites_issues.no_issues.title"),
    description: getI18nString("sites.panel.sites_issues.no_issues.description")
  }) : jsxs("div", {
    className: "lint_error_modal--lintErrorsContent--qTrOy",
    children: [_ && jsx("div", {
      className: "lint_error_modal--filterContainer--NwWyY",
      children: jsxs(bL, {
        value: c,
        onChange: e => u(e),
        recordingKey: generateRecordingKey(e, "category-filter"),
        children: [jsx(l9, {
          label: jsx(HiddenLabel, {
            children: getI18nString("sites.panel.sites_issues.issue_type")
          }),
          children: "all" === c ? getI18nString("sites.panel.sites_issues.all_properties") : o[c].label
        }), jsxs(mc, {
          children: [jsx(c$, {
            value: "all",
            children: getI18nString("sites.panel.sites_issues.all_properties")
          }), jsx(wv, {}), Object.entries(o).filter(([e]) => p.has(e)).map(([e, {
            label: t
          }]) => jsx(c$, {
            value: e,
            children: t
          }, e))]
        })]
      })
    }), m.map(([t, r]) => {
      let i = a.get(t)?.name;
      let l = "/" === i ? getI18nString("sites.panel.home") : i;
      return jsxs("div", {
        children: [jsx("div", {
          className: "lint_error_modal--lintErrorLocation--lkNBw",
          children: jsx("div", {
            className: cssBuilderInstance.textBodyMediumStrong.$,
            children: l
          })
        }), jsx("div", {
          className: "lint_error_modal--lintErrorsList--kzsZc",
          children: r.map(t => jsx(W, {
            categories: o,
            error: t,
            recordingKey: generateRecordingKey(e, t.name),
            showTargets: s
          }, t.name))
        })]
      }, t);
    })]
  });
}
export function $$Y3() {
  return jsxs("div", {
    className: "lint_error_modal--lintErrorsFallbackContent--dG9tc lint_error_modal--lintErrorsContent--qTrOy",
    children: [jsx(LoadingSpinner, {}), jsx("span", {
      children: renderI18nText("sites.lint.looking-for-issues")
    })]
  });
}
function $(e) {
  let {
    onContentLoaded,
    onlyShowResponsiveSetGuids
  } = e;
  let a = useAtomWithSubscription(Qy) ? B : _$$o;
  let s = useAtomWithSubscription(a);
  useEffect(() => {
    onContentLoaded && onContentLoaded();
  }, [onContentLoaded]);
  return jsx($$K1, {
    recordingKey: "sites-lint-error-modal",
    lintingResults: s,
    onlyShowResponsiveSetGuids
  });
}
let $$X0 = registerModal(function ({
  open: e,
  onClose: t
}) {
  let [r, a] = useState(!1);
  let s = ox();
  let o = useRef(null);
  let l = useCallback(() => {
    a(!0);
  }, []);
  useEffect(() => {
    if (r && s && o.current) {
      let e = o.current;
      let t = window.innerHeight - e.offsetHeight - r$;
      let r = _$$_ + QG;
      s.setPosition({
        x: r,
        y: t
      });
    }
  }, [r, s]);
  let d = useRef(null);
  if (!e) return null;
  let c = jsx(_$$bL, {
    ref: o,
    manager: s,
    defaultPosition: {
      left: _$$_ + QG,
      bottom: r$
    },
    width: 344,
    maxHeight: 615,
    onClose: t,
    draggable: "anywhere",
    htmlAttributes: {
      "data-testid": "sites-lint-error-modal"
    },
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("sites.panel.sites_issues")
        })
      }), jsxs(DialogBody, {
        padding: 0,
        children: [jsx("div", {
          ref: d
        }), jsx(PopoverContext.Provider, {
          value: d,
          children: jsx(Suspense, {
            fallback: jsx($$Y3, {}),
            children: jsx($, {
              onContentLoaded: l
            })
          })
        })]
      })]
    })
  });
  return jsx(y7, {
    container: "#lint-error-container",
    children: c
  });
}, "LINT_ERROR_MODAL", ModalSupportsBackground.YES);
let $$q4 = createReduxSubscriptionAtomWithState(e => e.modalShown?.type === $$X0.type);
export const bA = $$X0;
export const F8 = $$K1;
export const tE = $$G2;
export const j$ = $$Y3;
export const oD = $$q4;