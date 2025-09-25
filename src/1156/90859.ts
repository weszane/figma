import { jsx, jsxs } from "react/jsx-runtime";
import { lV, U1 } from "../figma_app/617606";
import { eB } from "../figma_app/178419";
import { assert } from "../figma_app/465776";
import { textDisplayConfig } from "../905/687265";
import { ChatMessageType } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { Ay } from "@stylexjs/stylex";
import { useAtomWithSubscription } from "../figma_app/27355";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { openFileAtom } from "../figma_app/516028";
import { wW } from "../figma_app/656450";
import { F as _$$F } from "../1156/295005";
import { useState } from "react";
import { ButtonPrimitive } from "../905/632989";
import { a as _$$a } from "../905/964520";
import { H } from "../905/999677";
import { L } from "../1156/365427";
import { q } from "../1156/200958";
import { E as _$$E2 } from "../figma_app/626557";
import { OL } from "../1156/31019";
import { A as _$$A } from "../b2835def/114344";
let k = {
  container: {
    display: "x78zum5",
    borderColor: "x7z60cl",
    borderRadius: "x9h44rk",
    borderWidth: "xmkeg23",
    borderStyle: "x1y0btm7",
    padding: "x153ncpu",
    lineHeight: "x1o2sk6j",
    flexDirection: "xdt5ytf",
    color: "x1n0bwc9",
    $$css: !0
  },
  caret: {
    "--color-icon": "xtc4nxu",
    transition: "x1bmturs",
    $$css: !0
  },
  caretExpanded: {
    transform: "x1iffjtl",
    $$css: !0
  }
};
function C({
  changes: e,
  startExpanded: t = !1,
  maxHeight: n,
  chatMessagesNodeGuid: s,
  featureType: a,
  allowIndividualFileRestore: l = !1
}) {
  let [o, c] = useState(t);
  let {
    defaultTypographyStyle
  } = L();
  let {
    restoreFile
  } = q({
    chatMessagesNodeGuid: s,
    featureType: a || lV.FIGMAKE
  });
  let h = l ? restoreFile : void 0;
  if (0 === e.length) return null;
  if (1 === e.length) {
    let t = e[0];
    return t ? jsx("div", {
      ...Ay.props(k.container, defaultTypographyStyle),
      style: n ? {
        maxHeight: n,
        overflowY: "auto"
      } : void 0,
      children: jsx(E, {
        change: t,
        getRestoreCallback: h
      })
    }) : null;
  }
  return jsxs("div", {
    ...Ay.props(k.container, defaultTypographyStyle),
    style: n ? {
      maxHeight: n,
      overflowY: "auto"
    } : void 0,
    children: [jsxs(ButtonPrimitive, {
      className: "x78zum5 x6s0dn4 x167g77z x1ypdohk x87ps6o x1qughib x1n0bwc9",
      onClick: () => c(!o),
      children: [jsx("span", {
        children: getI18nString("figmake.edits.edited_files", {
          fileCount: e.length
        })
      }), jsx("span", {
        ...Ay.props(k.caret, o && k.caretExpanded),
        children: jsx(_$$a, {})
      })]
    }), o && jsx("div", {
      className: "x78zum5 xdt5ytf x167g77z x1ib1h6n",
      children: e.map((e, t) => jsx(E, {
        change: e,
        getRestoreCallback: h
      }, `${e.path}-${t}`))
    })]
  });
}
function E({
  change: e,
  getRestoreCallback: t
}) {
  let n;
  let i = t?.(e.path);
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x167g77z x1qughib xjwf9q1",
    children: [jsx("span", {
      className: "x98rzlu xb3r6kr xlyipyv xuxw1ft",
      title: e.path,
      children: (n = e.path).split("/").pop() ?? n
    }), jsxs("span", {
      className: "x1jnr06f x78zum5 x6s0dn4",
      children: [e.addedLines > 0 && jsx("span", {
        className: "xq6u9c4",
        children: getI18nString("figmake.edits.lines_added", {
          count: e.addedLines
        })
      }), e.removedLines > 0 && jsx("span", {
        className: "x172n1ly",
        children: getI18nString("figmake.edits.lines_removed", {
          count: e.removedLines
        })
      }), i && jsx(ButtonPrimitive, {
        className: "xfawy5m x12oqio5 xet2fuk x1ypdohk x1n0bwc9 xjbqb8w x1gs6z28 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x12tve8b x1c5oinq",
        onClick: i,
        children: jsx(H, {
          className: "x1wt4b31 x1kky2od xlup9mm"
        })
      })]
    })]
  });
}
let A = {
  textBodyLarge: {
    ...textDisplayConfig.textBodyLarge,
    $$css: !0
  },
  textBodyLargeStrong: {
    ...textDisplayConfig.textBodyLargeStrong,
    $$css: !0
  }
};
export function $$T5({
  message: e,
  chatMessagesNodeGuid: t,
  systemMessageIndex: n,
  featureType: s,
  isMostRecent: l,
  trackingContext: c,
  title: u,
  layerDisplayName: x
}) {
  assert(e.type === ChatMessageType.SYSTEM_MESSAGE, "Message must be a system message");
  let {
    defaultTypographyStyle
  } = L();
  let g = U1(e.textContent || "");
  let f = g?.type === "restore" ? g?.codeSnapshot?.codeSnapshotKey : void 0;
  let {
    restoreVersion
  } = OL({
    codeSnapshotKey: f,
    chatMessagesNodeGuid: t,
    featureType: s,
    restoreToVersionTitle: u,
    ...c
  });
  let _ = jsx(_$$F, {
    type: "version",
    isCurrentVersion: l,
    versionNumber: n + 1,
    restoreVersion,
    chatMessagesNodeGuid: t,
    layerDisplayName: x,
    versionTitle: u
  });
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xou54vl",
    children: [jsx("div", {
      ...Ay.props(defaultTypographyStyle),
      children: getI18nString("figmake.chat.restoring_a_previous_version")
    }), _]
  });
}
export function $$I4({
  message: e,
  chatMessagesNodeGuid: t,
  systemMessageIndex: n,
  featureType: s,
  isMostRecent: l,
  trackingContext: c,
  title: u,
  layerDisplayName: x
}) {
  assert(e.type === ChatMessageType.SYSTEM_MESSAGE, "Message must be a system message");
  let {
    defaultTypographyStyle
  } = L();
  let g = U1(e.textContent || "");
  assert(g?.type === "manual_edit", "Message must be a manual edit system message");
  let {
    changedFiles,
    codeSnapshot
  } = g;
  let _ = codeSnapshot?.codeSnapshotKey;
  let b = u && getI18nString("figmake.chat.edited_version", {
    versionTitle: u
  });
  let {
    restoreVersion
  } = OL({
    codeSnapshotKey: _,
    chatMessagesNodeGuid: t,
    featureType: s,
    restoreToVersionTitle: b,
    ...c
  });
  let k = jsx(_$$F, {
    type: "version",
    isCurrentVersion: l,
    versionNumber: n + 1,
    restoreVersion,
    chatMessagesNodeGuid: t,
    layerDisplayName: x,
    versionTitle: b
  });
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xou54vl",
    children: [jsx("div", {
      ...Ay.props(defaultTypographyStyle),
      children: getI18nString("figmake.edits.manual_edit_message")
    }), jsx(C, {
      changes: changedFiles,
      startExpanded: !0,
      chatMessagesNodeGuid: t
    }), k]
  });
}
export let $$L2 = "in-progress-manual-edit";
export function $$z3({
  chatMessagesNodeGuid: e,
  featureType: t,
  codeFileChanges: n,
  layerDisplayName: i,
  versionNumber: a
}) {
  let {
    defaultTypographyStyle
  } = L();
  let {
    changedFiles,
    error,
    hasBaseline
  } = n;
  let f = getSingletonSceneGraph().get(e);
  let y = _$$E2(f);
  let _ = useAtomWithSubscription(openFileAtom);
  if (error || !hasBaseline || 0 === changedFiles.length) return null;
  let b = (y ? eB(y) : void 0) || _?.name;
  let v = b && getI18nString("figmake.chat.edited_version", {
    versionTitle: b
  });
  let k = async () => {};
  let E = jsx(_$$F, {
    type: "version",
    isCurrentVersion: !0,
    versionNumber: a + 1,
    restoreVersion: k,
    chatMessagesNodeGuid: e,
    layerDisplayName: i,
    versionTitle: v
  });
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xou54vl",
    children: [jsx("div", {
      ...Ay.props(defaultTypographyStyle),
      children: getI18nString("figmake.edits.manual_edit_message")
    }), jsx(C, {
      changes: changedFiles,
      startExpanded: !0,
      chatMessagesNodeGuid: e,
      featureType: t,
      allowIndividualFileRestore: !0
    }), E]
  });
}
export function $$M1() {
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xou54vl",
    children: [jsx("p", {
      ...Ay.props(A.textBodyLarge),
      children: getI18nString("figmake.duplicated_file_system_message")
    }), jsx(F, {})]
  });
}
export function $$R0({
  systemMessageContent: e
}) {
  let t = e.userId;
  let {
    user
  } = wW(t ?? null);
  let i = user?.handle;
  if (!e?.timestamp) return null;
  let s = new Date(e.timestamp);
  let a = getI18nString("figmake.chat_management.messages.chat_history_cleared_timestamp", {
    time: s.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }),
    date: s.toLocaleDateString([], {
      month: "long",
      day: "numeric",
      year: "numeric"
    })
  });
  return jsx("div", {
    className: "x78zum5 xdt5ytf xou54vl",
    children: jsx("div", {
      className: "x1n0bwc9 x1k4tb9n",
      children: getI18nString("figmake.chat_management.messages.chat_history_cleared", {
        timestamp: a
      }) + (i ? getI18nString("figmake.chat_management.messages.chat_history_cleared_user", {
        username: i
      }) : "")
    })
  });
}
function F() {
  return jsx("div", {
    className: "x78zum5 xdt5ytf x1cy8zhl x1jnr06f x9h44rk x1bamp8i x14pk0dq",
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
      children: [jsx("div", {
        className: "xvy4d1p xxk0z11 x78zum5 xl56j7k x6s0dn4",
        children: jsx(SvgComponent, {
          svg: _$$A,
          useOriginalSrcFills_DEPRECATED: !0,
          svgWidth: "14px",
          svgHeight: "14px"
        })
      }), jsx("p", {
        ...Ay.props(A.textBodyLargeStrong),
        children: getI18nString("figmake.supabase.duplicated_file.cta")
      })]
    })
  });
}
export const a_ = $$R0;
export const M_ = $$M1;
export const ct = $$L2;
export const Re = $$z3;
export const pr = $$I4;
export const V = $$T5;