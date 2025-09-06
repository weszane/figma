import _require from "@stylexjs/stylex";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { t as _$$t } from "../905/150656";
import { $n } from "../905/521428";
import { K } from "../905/443068";
import { T } from "../905/909590";
import { E } from "../905/53857";
import { bL, Y9, JU, UC } from "../figma_app/57171";
import { X } from "../905/736922";
import { _ } from "../905/263184";
import { A } from "../905/251970";
import { getSingletonSceneGraph } from "../905/700578";
import { Te } from "../vendor/813803";
import { T6 } from "../vendor/279343";
import { debugState } from "../905/407919";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { pj, el, bF, AY } from "../f2246930/170322";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (_require, 443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$b0({
  handleClosePanel: e
}) {
  let [t, l] = useState([]);
  let [c, d] = useState("");
  let m = useRef(null);
  let f = useCallback(() => {
    let e = getSingletonSceneGraph()?.getInternalCanvas()?.childrenNodes.find(e => "CODE_LIBRARY" === e.type);
    e && (l(e.chatMessages.map((t, l) => {
      let s = l > 0 ? e.chatMessages[l - 1] : null;
      return {
        ...t,
        latency: pj(t, s)
      };
    })), d(JSON.stringify(e.chatMessages, null, 2)));
  }, []);
  let b = useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(t));
    debugState.dispatch(F.enqueue({
      message: "[INTERNAL] Copied to clipboard",
      type: "figmake-scope-copy-success",
      icon: zX.CHECK,
      timeoutOverride: 3e3
    }));
  }, [t]);
  let [k, z, E] = _$$t.useTabs({
    LogMessages: !0,
    RawData: !0
  });
  useEffect(() => {
    f();
  }, [f]);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x5yr21d",
    children: [jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib x6s0dn4 xf7z5ut x193iq5w",
      children: [jsx("div", {
        className: "x1g2dr8m xiqqdae xkezfkh x1giz659 x14kxzw3 x1akne3o",
        children: "Figmake Scope [INTERNAL]"
      }), jsxs("div", {
        className: "x78zum5 x1q0g3np xg2d0mh",
        children: [jsx($n, {
          variant: "secondary",
          iconPrefix: jsx(X, {}),
          onClick: b,
          children: "Copy"
        }), jsx($n, {
          variant: "secondary",
          iconPrefix: jsx(_, {}),
          onClick: f,
          children: "Refresh"
        }), jsx(K, {
          "aria-label": getI18nString("general.close"),
          onClick: e,
          children: jsx(A, {})
        })]
      })]
    }), jsxs("div", {
      className: "x98rzlu x78zum5 xdt5ytf x2lwn1j x5yr21d x1odjw0f x1mh6rdz xg2d0mh",
      children: [jsxs(_$$t.TabStrip, {
        manager: E,
        children: [jsx(_$$t.Tab, {
          ...k.LogMessages,
          children: "Messages"
        }), jsx(_$$t.Tab, {
          ...k.RawData,
          children: "Raw Data"
        })]
      }), jsx(_$$t.TabPanel, {
        ...z.LogMessages,
        children: jsx("div", {
          style: {
            height: "100%",
            overflowY: "auto"
          },
          ref: m,
          children: jsx(N, {
            messages: t,
            parentRef: m
          })
        })
      }), jsx(_$$t.TabPanel, {
        ...z.RawData,
        height: "fill",
        children: jsx("div", {
          className: "x98rzlu x78zum5 xdt5ytf xf7z5ut x2lwn1j",
          children: jsx(T, {
            id: "raw-chat-messages",
            value: c,
            readOnly: !0,
            size: "lg",
            expandable: !0,
            className: "x98rzlu x2lwn1j"
          })
        })
      })]
    })]
  });
}
function N({
  messages: e,
  parentRef: t
}) {
  let l = Te({
    count: e.length,
    getScrollElement: () => t.current,
    estimateSize: () => 50,
    overscan: 5,
    measureElement: e => e.getBoundingClientRect().height,
    observeElementRect: T6
  });
  return jsx("div", {
    style: {
      height: `${l.getTotalSize()}px`,
      position: "relative"
    },
    children: l.getVirtualItems().map(t => {
      let n = e[t.index];
      return n ? jsx("div", {
        "data-index": t.index,
        ref: l.measureElement,
        style: {
          position: "absolute",
          top: t.start,
          left: 0,
          width: "100%"
        },
        children: jsx(k, {
          message: n
        })
      }, t.index) : null;
    })
  });
}
function k({
  message: e
}) {
  let t = JSON.stringify(e, null, 2);
  let [l, r] = useState(!1);
  let a = el(e);
  let i = bF(e);
  let o = AY(e);
  let u = 0 === e.type ? jsx("span", {
    className: "xju2f9n x117nqv4",
    children: getI18nString("figmake.scope.user_label")
  }) : jsx("span", {
    className: "x1prwzq3 x117nqv4",
    children: getI18nString("figmake.scope.llm_label")
  });
  let x = a.map(e => jsx(E, {
    children: e
  }, e));
  let h = i.map(e => jsxs(E, {
    children: [e.toolName, " ", e.result ? getI18nString("figmake.scope.tool_success") : getI18nString("figmake.scope.tool_failure")]
  }, e.toolName));
  let p = e.latency ? e.latency > 1e3 ? `[${e.latency / 1e3}s]` : `[${e.latency}ms]` : null;
  return jsx("div", {
    className: "x1bamp8i x192jxwq x1mh6rdz x1ah0xmj x1yjdb4r",
    children: jsxs(bL, {
      defaultOpen: l,
      setOpen: r,
      children: [jsx(Y9, {
        width: "fill",
        size: "md",
        children: jsx(JU, {
          size: "md",
          children: jsxs("span", {
            className: "x78zum5 x1q0g3np xg2d0mh xlyipyv xb3r6kr xuxw1ft x193iq5w",
            children: [p, u, e.id, " ", x, " ", h, " ", o]
          })
        })
      }), jsx(UC, {
        children: jsx("pre", {
          className: "xclx6tv x17akokd x1qxcl5b x1betce5 xno9bf3 x1akne3o x126k92a x1yn0g08 xysyzu8 x1phlbz0 x1hx0egp",
          children: t
        })
      })]
    })
  });
}
export const FigmakeScopeViewInner = $$b0;