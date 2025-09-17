import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { languageCodes } from "../905/816253";
import { IconButton } from "../905/443068";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { l as _$$l } from "../905/479687";
import { O } from "../3591/240710";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { getI18nString, renderI18nText } from "../905/303541";
import { getI18nState } from "../figma_app/363242";
import { decodeZeroWidth } from "../figma_app/195123";
export let $$m0 = atom(!1);
function g(e) {
  let [t, r] = useState({});
  function u(e) {
    let [t, r] = useState(!1);
    return jsxs("div", {
      className: "x78zum5 xdt5ytf x167g77z x1yrfp1h x1qkzr96 xur7f20",
      children: [jsxs("div", {
        className: "x78zum5 x1qughib x6s0dn4",
        children: [jsx("div", {
          className: "xmjk8bn xuxw1ft xb3r6kr xlyipyv",
          children: e.id
        }), jsx(IconButton, {
          "aria-label": getI18nString("string_inspector.copy_id"),
          onClick: () => {
            navigator.clipboard.writeText(e.id);
            r(!0);
            setTimeout(() => {
              r(!1);
            }, 1e3);
          },
          children: t ? jsx(_$$l, {}) : jsx(O, {})
        })]
      }), jsx("div", {
        className: "x163pfp xf1qegu xv1l7n4",
        children: e.string
      })]
    });
  }
  useEffect(() => {
    let e = e => {
      let t;
      let r = /([\u200B\u200C]{8})+/g;
      let n = [];
      let i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null);
      for (; t = i.nextNode();) if (t.textContent) {
        let e = t.textContent.match(r);
        e && e.map(e => {
          n.push(decodeZeroWidth(e));
        });
      }
      return n;
    };
    let t = t => {
      let n = e(t.target).map(e => ({
        id: e,
        string: getI18nState()?.getDictionary(languageCodes.EN)?.entries[e]?.string || ""
      }));
      if (n.length > 0) {
        let e = {};
        for (let t of n) e[t.id] = t.string;
        r(e);
      }
    };
    document.addEventListener("click", t, {
      capture: !0
    });
    return () => {
      document.removeEventListener("click", t, {
        capture: !0
      });
    };
  }, []);
  return jsx(bL, {
    width: 400,
    onClose: ({
      source: t
    }) => {
      "outside" !== t && e.onClose();
    },
    defaultPosition: {
      top: 16,
      right: 16
    },
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("string_inspector.string_inspector")
        })
      }), jsx(DialogBody, {
        children: jsxs("div", {
          className: "x78zum5 xdt5ytf xou54vl x1l90r2v",
          children: [jsx("div", {
            children: renderI18nText("string_inspector.click_on_an_element_to_inspect_its_strings")
          }), Object.entries(t).map(([e, t]) => jsx(u, {
            id: e,
            string: t
          }, e))]
        })
      })]
    })
  });
}
export function $$f1() {
  let [e, t] = useAtomValueAndSetter($$m0);
  return e ? jsx(g, {
    onClose: () => t(!1)
  }) : null;
}
export const H = $$m0;
export const x = $$f1;