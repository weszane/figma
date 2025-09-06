import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import { m4, H5 } from "../figma_app/617606";
import { K } from "../905/443068";
import { k as _$$k } from "../905/443820";
import { _ as _$$_ } from "../905/410717";
import { A as _$$A } from "../905/126947";
import { H } from "../905/999677";
import { Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { N as _$$N } from "../vendor/930821";
import { P } from "../vendor/348225";
import { N as _$$N2 } from "../1156/461005";
import { getI18nString } from "../905/303541";
import { O as _$$O } from "../figma_app/184628";
import { Oc } from "../figma_app/552876";
import { $W } from "../figma_app/325537";
import { N as _$$N3, l as _$$l } from "../1156/676968";
import { L } from "../1156/365427";
function k() {
  return jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-label": getI18nString("figmake.code_chat.live_dot_aria_label"),
    children: [jsx("path", {
      d: "M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z",
      fill: "#14AE5C"
    }), jsx("path", {
      d: "M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",
      stroke: "white",
      strokeOpacity: "0.6",
      strokeWidth: "2"
    })]
  });
}
let C = {
  artifactContainer: {
    display: "x78zum5",
    borderColor: "x7z60cl",
    borderRadius: "x9h44rk",
    borderWidth: "xmkeg23",
    borderStyle: "x1y0btm7",
    padding: "x153ncpu",
    lineHeight: "x1o2sk6j",
    $$css: !0
  },
  inProgress: {
    color: "x1akne3o",
    $$css: !0
  }
};
function E({
  toolCall: e
}) {
  return jsx(S, {
    icon: "view_tool" === e.toolName ? jsx(_$$_, {}) : null,
    text: function (e) {
      let t = _$$N3(e);
      switch (e.toolName) {
        case "view_tool":
          if (t) return getI18nString("figmake.tool_call.viewing", {
            file: t
          });
          break;
        case "write_tool":
        case "fast_apply_tool":
        case "str_replace_editor":
        case "edit_tool":
          if (t) return getI18nString("figmake.tool_call.writing", {
            file: t
          });
      }
      return getI18nString("figmake.chat.working");
    }(e)
  });
}
function S({
  text: e,
  icon: t
}) {
  return jsxs("div", {
    className: "x78zum5 x1n0bwc9 x193iq5w x1q0g3np x6s0dn4",
    children: [jsx("div", {
      className: "x78zum5 x2lah0s",
      children: t
    }), jsx("span", {
      className: "x78zum5 x1iog12x x12lumcd xb3r6kr xlyipyv xuxw1ft",
      children: jsx(_$$N2, {
        children: e ?? ""
      })
    })]
  });
}
function N({
  children: e,
  isInProgress: t,
  isCurrentVersion: n
}) {
  let {
    artifactTypographyStyle,
    artifactActiveTypographyStyle
  } = L();
  return jsx("div", {
    "aria-current": n ? "true" : void 0,
    ...Ay.props(C.artifactContainer, n ? artifactActiveTypographyStyle : artifactTypographyStyle, t ? C.inProgress : void 0),
    children: e
  });
}
export function $$w0(e) {
  let {
    chatMessagesNodeGuid,
    layerDisplayName,
    type
  } = e;
  let u = useAtomWithSubscription(_$$l(chatMessagesNodeGuid));
  let {
    exchange
  } = $W(chatMessagesNodeGuid);
  let C = Oc();
  let w = "progress" === e.type && e.showCodeStreaming && exchange ? function (e) {
    if (!(e && e.messages.length > 0)) return;
    let t = e?.messages[e.messages.length - 1];
    for (let e of t?.toolCalls ?? []) {
      let t = m4(e);
      if (t) return t;
    }
    let n = H5(t?.textContent || "");
    let r = e.fileUpdates[e.fileUpdates.length - 1];
    return n.code ? n.code : r ? r.contents : void 0;
  }(exchange) : void 0;
  useEffect(() => {
    w && "progress" === e.type && e.scrollToBottom();
  }, [w, e]);
  let A = "version" === type && e.isCurrentVersion;
  let T = "version" === type ? e.versionNumber : 0;
  let I = "version" === type ? e.versionTitle : void 0;
  let L = "version" === type ? e.restoreVersion : void 0;
  let z = getFeatureFlags().bake_version_titles && C;
  let M = useMemo(() => "progress" === type ? null : "version" === type ? z && I ? jsxs("div", {
    className: "x78zum5 xdt5ytf",
    children: [jsx("h3", {
      className: "x6xwguf",
      children: I
    }), jsx("div", {
      className: "x1yuz8eb",
      children: getI18nString("figmake.chat.artifact.version", {
        version: T
      })
    })]
  }) : A ? getI18nString("figmake.chat.artifact.latest_version") : getI18nString("figmake.chat.artifact.version", {
    version: T
  }) : null, [type, A, I, T, z]);
  let R = null;
  R = u?.type === "toolCall" ? jsx(E, {
    toolCall: u
  }) : u?.type === "code" ? jsx(S, {
    icon: jsx(_$$A, {}),
    text: getI18nString("figmake.tool_call.writing", {
      file: layerDisplayName ?? u.fullFilePath
    })
  }) : u?.type === "editedFiles" ? jsx(S, {
    icon: jsx(_$$A, {}),
    text: getI18nString("figmake.tool_call.editing", {
      file: u.files.join(", ")
    })
  }) : jsx("div", {
    className: "x78zum5 x1q0g3np x1n0bwc9 x193iq5w x6s0dn4",
    children: jsx(_$$N2, {
      children: getI18nString("figmake.chat.working")
    })
  });
  let F = _$$N3(u);
  let O = "progress" === type ? null : L ? jsx(K, {
    "aria-label": getI18nString("figmake.chat.artifact.restore"),
    "aria-description": getI18nString("figmake.chat.artifact.aria_restore_description", {
      version: T,
      title: I || ""
    }),
    onClick: L,
    children: jsx(H, {})
  }) : null;
  let D = "progress" === type ? jsx(_$$k, {}) : A ? jsx(k, {}) : O;
  return jsx(N, {
    isInProgress: "progress" === type,
    isCurrentVersion: A,
    children: jsxs("div", {
      className: "x78zum5 xdt5ytf xh8yej3",
      children: [jsxs("div", {
        className: "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3",
        children: [jsx("div", {
          className: "x78zum5 x845mor xb3r6kr xlyipyv xuxw1ft xeuugli",
          title: F ?? "",
          children: "progress" === type ? R : M
        }), jsx("div", {
          className: "x78zum5 x6s0dn4 xet2fuk x2lah0s",
          children: D
        })]
      }), jsx(_$$N, {
        children: !!w && jsxs(P.div, {
          initial: {
            height: 0,
            opacity: 0
          },
          animate: {
            height: 128,
            opacity: 1
          },
          exit: {
            height: 0,
            opacity: 0
          },
          transition: {
            duration: .3,
            ease: "easeInOut"
          },
          className: "x78zum5 x1n2onr6 x47corl xdt5ytf x1cy8zhl xh8yej3 xb3r6kr",
          children: [jsx(P.div, {
            className: "x10l6tqk x13vifvy xu96u03 x3m8u43 x1vqgdyp x1vjfegm xu4a7ya"
          }), jsx(_$$O, {
            code: w,
            fileName: layerDisplayName ?? "",
            fullHeight: !0,
            maxHeight: "128px",
            onlyShowCode: !0
          })]
        })
      })]
    })
  });
}
export const F = $$w0;