import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef, useMemo } from "react";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter } from "../figma_app/27355";
import s from "classnames";
import { tH } from "../905/751457";
import { s4, Dm } from "../figma_app/8833";
import { eE, a4, tM } from "../905/149196";
import { wh } from "../figma_app/347406";
var l = s;
var $$m1 = (e => (e.FILE_BROWSER = "file_browser", e))($$m1 || {});
export function $$p0({
  entryPoint: e
}) {
  return jsx(tH, {
    boundaryKey: "figment-debugger",
    fallback: jsx("div", {}),
    children: jsx(g, {
      entryPoint: e
    })
  });
}
function g({
  entryPoint: e
}) {
  let [t, n] = useAtomValueAndSetter(eE);
  useEffect(() => {
    n(!!wh());
  }, []);
  return t && getFeatureFlags().figment_debugger ? jsx("div", {
    className: l()("file_browser" === e ? "figment_debugger--fileBrowserContainer--KNMPr figment_debugger--container--4qsMx" : "figment_debugger--container--4qsMx", s4, Dm),
    children: jsx(f, {})
  }) : null;
}
function f() {
  let [e, t] = useAtomValueAndSetter(a4);
  let [n, i] = useState([]);
  let s = useRef(null);
  let l = s.current && s.current.value.length > 0;
  let d = l ? n : e;
  return jsxs("div", {
    className: "figment_debugger--mainWrapper--Tty8t",
    tabIndex: 0,
    "data-fullscreen-intercept": !0,
    children: [jsx(h, {
      children: jsx("input", {
        ref: s,
        placeholder: "\u{1F50E} Event name",
        className: "figment_debugger--searchBar--uECKp",
        onInput: t => {
          let n = t.target.value.toLowerCase();
          n.length < 3 && i([]);
          i(e.filter(e => e.requestJson.event.toLowerCase().includes(n)));
        }
      })
    }), jsx(h, {
      children: jsx("button", {
        onClick: () => {
          t("clear");
        },
        children: "[clear]"
      })
    }), l && jsx(h, {
      children: "Showing " + d.length + " of " + e.length + " most recent events"
    }), d.map(e => jsx(b, {
      req: e
    }, e.requestJson.figment_debugger_uuid))]
  });
}
function h(e) {
  return jsx("div", {
    className: "figment_debugger--sectionWrapper--Zr0-r",
    "data-fullscreen-intercept": !0,
    children: e.children
  });
}
function b({
  req: e
}) {
  let [t, n] = useState(!1);
  let [i, o] = useState(!1);
  let s = e.requestJson;
  let l = useMemo(() => t && null != s.properties ? Object.entries(s.properties).map(([e, t]) => jsxs("div", {
    children: [e, ": ", JSON.stringify(t)]
  }, e)) : [], [s, t]);
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: "figment_debugger--logrow--dxWpW",
      tabIndex: 0,
      role: "button",
      onClick: () => {
        n(!t);
        o(!1);
      },
      "data-fullscreen-intercept": !0,
      children: [jsx("span", {
        children: t ? "\uFF0D" : "\uFF0B"
      }), "\xa0", jsx("span", {
        children: e.networkState === tM.SUCCESS ? "\u{1F49A}" : e.networkState === tM.FAILURE ? "\u{1F494}" : "\u{1F9E1}"
      }), "\xa0", jsx("span", {
        className: "figment_debugger--timestamp--BaHtN",
        children: s.sentAt.slice(11, 16)
      }), "\xa0", s.event]
    }), t && jsxs("div", {
      className: "figment_debugger--propertiesWrapper--hZGnc",
      children: [jsx("div", {
        className: "figment_debugger--propertiesButtonsRow--ZL1rH",
        children: jsxs("button", {
          onClick: () => {
            navigator.clipboard.writeText(JSON.stringify(e.requestJson.properties));
            o(!0);
          },
          children: ["[", i ? "copied" : "copy", "]"]
        })
      }), l]
    })]
  });
}
export const G = $$p0;
export const Q = $$m1;