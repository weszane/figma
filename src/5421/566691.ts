import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useRef } from "react";
import { IconButton } from "../905/443068";
import { Tabs } from "../905/150656";
import { S } from "../905/711470";
import { i as _$$i } from "../905/708784";
import { L } from "../905/704296";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { G } from "../figma_app/318030";
import u from "classnames";
import { n as _$$n } from "../vendor/547481";
import { P as _$$P } from "../905/347284";
import { getI18nString, renderI18nText } from "../905/303541";
import { DefinitionAssignment } from "../figma_app/164212";
import { useComponentPropDefinitions } from "../figma_app/626952";
import { Ve } from "../figma_app/812915";
import { PM, ZO } from "../1156/108847";
import { Cb, Vo, rO, YD } from "../figma_app/690664";
import { F, D } from "../5421/592431";
import { jT, S4 } from "../figma_app/302802";
var h = u;
let E = "devtools_code_console--tabPanelScrollContainer--BVJaw";
function j() {
  let [e] = jT();
  let [t] = PM();
  let n = useAtomWithSubscription(Cb);
  let r = useMemo(() => (e ?? []).concat(t.map(e => {
    let t = parseInt(e.timestamp);
    return {
      type: "error",
      phase: S4.RUNTIME,
      message: `[Supabase] ${e.event_message}`,
      timestamp: isNaN(t) ? 0 : t
    };
  })).filter(e => e.message.includes(n)).sort((e, t) => e.timestamp - t.timestamp), [e, n, t]);
  let [a, l] = useState(r);
  let s = useMemo(() => _$$n(20, e => {
    l(e);
  }), []);
  return (useEffect(() => {
    s(r);
  }, [s, r]), a) ? jsx("div", {
    tabIndex: -1,
    children: a.map((e, t) => jsxs("div", {
      children: [0 !== t && jsx(A, {}), jsx(w, {
        consoleMessage: e
      })]
    }, t))
  }) : null;
}
function N({
  value: e,
  onChange: t
}) {
  let n = useRef(null);
  return jsxs("label", {
    className: "devtools_code_console--filter--Txqal",
    children: [jsx(S, {
      className: "devtools_code_console--filterIcon--X3LB-"
    }), jsx("input", {
      className: "devtools_code_console--filterInput--FzveZ",
      type: "text",
      value: e,
      onChange: e => t(e.target.value),
      ref: n,
      placeholder: getI18nString("sites.code_component.console.filter")
    })]
  });
}
function T() {
  let [e, t] = jT();
  let [n, i] = useAtomValueAndSetter(Cb);
  return jsxs(Fragment, {
    children: [jsx(N, {
      value: n,
      onChange: i
    }), jsx("div", {}), jsx(IconButton, {
      "aria-label": getI18nString("sites.code_component.console.clear"),
      htmlAttributes: {
        "data-tooltip": getI18nString("sites.code_component.console.clear"),
        "data-tooltip-type": "text"
      },
      onClick: () => {
        t([]);
        ZO();
      },
      children: jsx(_$$i, {})
    })]
  });
}
export function $$S0({
  codeSelectionToRender: e,
  windowRef: t,
  showPropertiesTab: n = !0
}) {
  let [l, s] = useAtomValueAndSetter(Vo);
  let [u, h] = useAtomValueAndSetter(rO);
  let [m, b] = useState(void 0);
  useEffect(() => {
    let e = () => {
      t?.current && b(.4 * t.current.clientHeight);
    };
    e();
    let n = new ResizeObserver(e);
    t?.current && n.observe(t.current);
    return () => {
      n.disconnect();
    };
  }, [t]);
  let [C, N, S] = Tabs.useManagedTabs({
    properties: n,
    console: !0
  }, l, e => s(e));
  let {
    figmakeInFullscreen
  } = Ve();
  let w = n ? getI18nString("sites.code_component.drawer.hide") : getI18nString("sites.code_component.drawer.hide_console_only");
  let [k, P] = useAtomValueAndSetter(YD);
  let O = e ? "instance" === e.type ? e.allCodeInstanceNodeIds : [e.codeInstanceNode.guid] : [];
  let {
    assignmentValuesByDefId
  } = useComponentPropDefinitions(O, DefinitionAssignment.ASSIGNMENT, !0);
  return jsx(Fragment, {
    children: k && !figmakeInFullscreen && jsxs(G, {
      className: "devtools_code_console--panel--yn97N",
      side: "top",
      maxSize: m,
      onDragEnd: e => {
        h(e);
      },
      minSize: 80,
      defaultSize: u,
      children: [jsxs("div", {
        className: "devtools_code_console--headerRow--2O6aI",
        children: [jsx("div", {
          className: "devtools_code_console--headerRowTabs--Qo6UD",
          children: jsxs(Tabs.TabStrip, {
            manager: S,
            children: [jsx(Tabs.Tab, {
              ...C.properties,
              children: renderI18nText("sites.code_component.properties")
            }), jsx(Tabs.Tab, {
              ...C.console,
              children: renderI18nText("sites.code_component.console")
            })]
          })
        }), jsxs("div", {
          className: "devtools_code_console--headerRowIcons--fc3Yi",
          children: ["console" === S.activeTab && jsx(T, {}), jsx(IconButton, {
            "aria-label": w,
            htmlAttributes: {
              "data-tooltip": w,
              "data-tooltip-type": "text"
            },
            onClick: () => {
              P(!1);
            },
            children: jsx(L, {})
          })]
        })]
      }), jsxs("div", {
        className: "devtools_code_console--tabPanelContainer--w2g7B",
        children: [0 === Object.keys(assignmentValuesByDefId).length ? jsx(Tabs.TabPanel, {
          ...N.properties,
          height: "fill",
          children: jsx(F, {})
        }) : jsx(Tabs.TabPanel, {
          ...N.properties,
          height: "fill",
          children: jsx(_$$P, {
            className: E,
            useBottomPinning: !0,
            children: jsx(D, {
              guids: O,
              hideVariableBinding: e?.type === "behavior",
              recordingKey: "codeWindowPropertiesPanel",
              entrypoint: "code-editor",
              windowRef: t
            })
          })
        }), jsx(Tabs.TabPanel, {
          ...N.console,
          height: "fill",
          children: jsx(_$$P, {
            className: E,
            useBottomPinning: !0,
            children: jsx(j, {})
          })
        })]
      })]
    })
  });
}
function A() {
  return jsx("div", {
    className: "xjm9jq1 xhv1u6h x176lpz5"
  });
}
function w({
  consoleMessage: e
}) {
  let t = e.message;
  "error" === e.type ? t = `\u274C ${t}` : "warn" === e.type && (t = `\u26A0\uFE0F ${t}`);
  return jsx("div", {
    className: h()("devtools_code_console--consoleMessage--I8RCD", {
      "devtools_code_console--error--5Un3V": "error" === e.type,
      "devtools_code_console--warn--LVB3K": "warn" === e.type
    }),
    "data-testid": "console-message",
    children: t
  });
}
export const _ = $$S0;