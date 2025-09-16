import _require from "../2824/40443";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogBody, DialogTitle } from "../figma_app/272243";
import { t as _$$t } from "../905/150656";
import { IconButton } from "../905/443068";
import { Checkbox } from "../905/274480";
import { k as _$$k } from "../905/443820";
import { Button } from "../905/521428";
import { R as _$$R } from "../905/621802";
import { q as _$$q } from "../905/838985";
import { W as _$$W } from "../9410/92046";
import { e as _$$e } from "../905/149844";
import { q as _$$q2 } from "../905/636218";
import { g as _$$g } from "../905/125190";
import { T as _$$T } from "../7021/675372";
import { V as _$$V } from "../905/802779";
import { X as _$$X } from "../905/736922";
import { getFeatureFlags } from "../905/601108";
import { atom, createLocalStorageAtom, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { n as _$$n } from "../draftjs_composer/589474";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { H8 } from "../905/590952";
import { uQ } from "../figma_app/311375";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { Fk } from "../figma_app/167249";
import { KindEnum } from "../905/129884";
import { wV } from "../figma_app/779965";
import { d as _$$d } from "../905/977713";
import { uQ as _$$uQ, Vr } from "../figma_app/151869";
import { getSingletonSceneGraph } from "../905/700578";
import { B as _$$B } from "../figma_app/821179";
import { P as _$$P } from "../3592/617429";
import { hB } from "../figma_app/609511";
import { Ay } from "../figma_app/432652";
import { xg, XT, Co, Yz } from "../figma_app/677646";
let I = atom(`- IMPORTANT: Do not refactor or modify the code, unless following a specific instruction from Figma or the user.
- Remove node-id attributes from the code
- Remove any data- attributes
- Try to rename the App function to something related to the content
- Give CSS class names sensible names
- If there are inline <svg> elements, extract them into separate React components in the same file, with sensible names. Do not modify the content of the SVG or try to add props.
- IMPORTANT: Do not extract any other elements to components or otherwise modify the code. Leave the code as-is unless the user instructs you otherwise.
- Remove the span with tracking-[0px] around the last character of text
- If the user supplies a Tailwind config, use the values from this instead of the raw custom values where appropriate`);
let B = createLocalStorageAtom("dt_mlcg_user_system_prompt", "");
let D = createLocalStorageAtom("dt_mlcg_figma_system_prompt_files", []);
let L = createLocalStorageAtom("dt_mlcg_user_system_prompt_files", []);
atom(!1);
let X = atom(!1);
let J = createContext(null);
function W({
  children: e,
  value: t
}) {
  return jsx(J.Provider, {
    value: t,
    children: e
  });
}
function U() {
  let e = useContext(J);
  if (!e) throw Error("useMultilayerCodegen must be used within a MultilayerCodegenProvider");
  return e;
}
async function q(e, t) {
  return await Ay.internal.streamText({
    ...t,
    messages: e
  });
}
let K = "claude-3-5-sonnet-20240620";
let Q = "anthropic";
let Z = createLocalStorageAtom("dt_mlcg_refactor_codegen_with_prompts", !0);
async function ee(e, t, s, n, r, o, i, a) {
  let {
    files
  } = await et(e, a, {
    convertToTailwindCSS: t
  });
  s && (l = await ei(files, [], n, r, o, i));
  return {
    files
  };
}
async function et(e, t, s) {
  let {
    displayFiles
  } = await es(e, t, s);
  let r = function (e) {
    let t = e.find(e => "index.tsx" === e.name && "string" == typeof e.contents)?.contents;
    return "string" == typeof t ? t : "";
  }(displayFiles);
  let o = displayFiles.find(e => "styles.css" === e.name)?.contents || "";
  if ("string" != typeof r || "string" != typeof o) throw Error("Failed to serialize node to React");
  return {
    files: [...displayFiles]
  };
}
async function es(e, t, n) {
  let {
    designToReact
  } = await Promise.all([]).then(_require);
  let o = {
    ...n,
    rootComponentName: n?.rootComponentName ?? "App",
    convertToTailwindCSS: n?.convertToTailwindCSS ?? !0,
    imports: t?.imports ?? [],
    domNodeToReactStr: e => {
      if (!t) return null;
      let s = e.attributes?.getNamedItem("id")?.value;
      if (!s) return null;
      let n = xg(s);
      if (!n) return null;
      let r = t.codeConnectForNodes?.get(n);
      return r ? r.code : null;
    }
  };
  let {
    files
  } = await designToReact(e, async e => {
    let t = await hB({
      compactDOM: !0
    });
    return await t.serializeHTML(e.guid);
  }, {
    ...o
  });
  return {
    displayFiles: await Promise.all(files.map(async e => ({
      ...e,
      contents: "string" == typeof e.contents ? await _$$P(e.contents, {
        parser: e.name.endsWith(".css") ? "css" : "typescript"
      }) : e.contents
    })))
  };
}
let en = `Return the updated code in the same format, with each file wrapped in a code block with its filename.

IMPORTANT: make sure to use this structure: \`\`\`tsx index.tsx
...
\`\`\``;
function er(e) {
  return e.map(e => `\`\`\`${e.name.split(".").pop()} ${e.name}
${e.contents}
\`\`\``).join("\n\n");
}
function eo(e, t) {
  let s = [...e.matchAll(XT)];
  if (!s.length) return;
  let n = s.map(e => {
    let t = Co(e[0]);
    return t ? {
      name: t.fileName,
      contents: t.code
    } : null;
  }).filter(e => null !== e);
  n.push(...(t ?? []).filter(e => !n.some(t => t.name === e.name)));
  return n;
}
async function ei(e, t, s, n, r, o) {
  let i = `You are an expert React developer working for Figma.
Your task is to update the provided code according to these instructions from Figma:
${s}

${r.length > 0 ? "You should also use these files as context:" : ""}
${r.map(e => `\`\`\`${e.name}
${e.contents}
\`\`\``).join("\n\n")}

And these instructions from the user:
${n}

${o.length > 0 ? "You should also use these files as context:" : ""}
${o.map(e => `\`\`\`${e.name}
${e.contents}
\`\`\``).join("\n\n")}

${en}`;
  let a = (await q([{
    role: "system",
    content: i
  }, {
    role: "user",
    content: er(e)
  }], {
    provider: Q,
    model: K
  })).getReader();
  let l = "";
  for (;;) {
    let {
      done,
      value
    } = await a.read();
    if (done) break;
    l += value;
  }
  let c = eo(l, t);
  if (!c) throw Error("Failed to extract files from LLM response");
  return c;
}
let ea = [{
  label: "Refactor into a reusable component with props",
  type: "refactor_props"
}, {
  label: "Add another variant to this component",
  type: "add_variant"
}, {
  label: "Split code into smaller components",
  type: "split_component"
}];
export function $$el0(e) {
  let t = useModalManager(e);
  let s = function ({
    enabled: e,
    useTailwind: t
  }) {
    let [s, n] = useState(0);
    let [o, i] = useState([]);
    let [a, l] = useState(!1);
    let {
      codegenStatus
    } = function ({
      enabled: e,
      useTailwind: t,
      ignoreSelectedNodeChanges: s
    }) {
      let n = getFeatureFlags().dt_multi_node_code_connect;
      let o = _$$B();
      let i = _$$uQ();
      let [a, l] = useState(null);
      useEffect(() => {
        s && a || l(i);
      }, [i, s, a]);
      let [c, d] = useState({
        type: "none"
      });
      let p = useAtomWithSubscription(I);
      let u = useAtomWithSubscription(B);
      let m = useAtomWithSubscription(D);
      let f = useAtomWithSubscription(L);
      let h = useAtomWithSubscription(Z);
      let x = useRef(0);
      useEffect(() => {
        (async function () {
          var s;
          let r;
          if (!e || !a) {
            d({
              type: "none"
            });
            return;
          }
          let i = ++x.current;
          s = {
            type: "loading",
            message: "Generating code..."
          };
          i === x.current && d(s);
          let l = getSingletonSceneGraph().get(a);
          n && (r = await o(l));
          let {
            files
          } = await ee(l, t, h, p, u, m, f, r);
          if (i !== x.current) {
            Yz("Skipping generation because it was cancelled");
            return;
          }
          d({
            type: "success",
            files
          });
        })();
      }, [a, e, t, p, u, m, f, h, o, i, n]);
      return useMemo(() => ({
        codegenStatus: c
      }), [c]);
    }({
      enabled: e,
      useTailwind: t,
      ignoreSelectedNodeChanges: a
    });
    let [d, p] = useState(!1);
    let u = useRef(void 0);
    let m = useRef(void 0);
    let f = useRef(void 0);
    let h = function (e) {
      let {
        initialMessages,
        systemMessage
      } = e;
      let [n, o] = useState("");
      let [i, a] = useState(systemMessage ? [{
        role: "system",
        content: systemMessage
      }, ...(initialMessages || [])] : initialMessages || []);
      let [l, c] = useState(!1);
      let [d, p] = useState([]);
      let u = async (t, s) => {
        c(!0);
        o("");
        let r = {
          role: "user",
          content: t ?? n,
          hideFromUser: s?.hideFromUser
        };
        let l = [...i, r];
        a(e => [...e, r]);
        let d = l.filter(e => !1 !== e.sendToLlm);
        let p = (await q(d, e)).getReader();
        let u = {
          role: "assistant",
          content: ""
        };
        for (a(e => [...e, u]);;) {
          let {
            done,
            value
          } = await p.read();
          if (done) {
            e.onFinish?.();
            break;
          }
          u.content += value;
          e.onStream?.({
            currentContent: u.content,
            delta: value
          });
          a(e => [...e.slice(0, -1), u]);
        }
        c(!1);
      };
      let m = useCallback(e => {
        a(t => [...t, {
          role: "assistant",
          content: e,
          sendToLlm: !1
        }]);
      }, [a]);
      return {
        messages: i,
        setMessages: a,
        submitMessage: u,
        isLoading: l,
        input: n,
        setInput: o,
        addDummyAssistantMessage: m,
        setLastMessageActions: p,
        lastMessageActions: d
      };
    }({
      provider: Q,
      model: K,
      initialMessages: [],
      systemMessage: `You are an expert React developer. You are given code to iterate on per the user request.

# Conversation style
- Respond with short, concise messages.
- Do not respond with markdown.

# Writing Code
- When writing code, begin with the codeblock, the file type, and the name of the file you are editing (e.g. \`\`\`tsx index.tsx...).
- Write all of the code in a single file
- Always output all of the original code. Do not output placeholders like /* ... rest of the CSS remains unchanged ... */, it's very important to keep the original code.
- If a file is not updated, do not include it in the response.
- Always end the code with an export default statement
- Always include React imports. Do not include any other imports.
- Use the original code's CSS styles and formatting as much as possible
- Always include an example usage of the component in the code.

${en}

<example>
\`\`\`tsx index.tsx
import React from 'react'

function Button() {
  return <button>Click me</button>
}

function App() {
  return <Button />
}

export default App
\`\`\`
\`\`\`css styles.css
.button {
  background-color: blue;
}
\`\`\`
</example>
`,
      onStream: ({
        currentContent: e
      }) => {
        let t;
        p(!0);
        let r = f.current ?? o[s];
        let a = eo(e, r?.files);
        if (!a) return;
        m.current ? t = m.current : (r = o[s], t = {
          type: "success",
          files: []
        }, i(e => [...e, t]), n(e => e + 1));
        let l = {
          type: "success",
          files: a
        };
        i(e => [...e.slice(0, -1), l]);
      },
      onFinish: () => {
        p(!1);
        f.current = o[s];
        m.current = void 0;
      }
    });
    useEffect(() => {
      "success" === codegenStatus.type && (i(e => 0 === e.length ? [codegenStatus] : [...e.slice(0, -1), codegenStatus]), n(e => 0 === e ? 0 : e + 1));
    }, [codegenStatus]);
    let {
      addDummyAssistantMessage
    } = h;
    useEffect(() => {
      "success" === codegenStatus.type && 0 === o.length && addDummyAssistantMessage("Basic code for your selection has been generated. You can iterate on this code with chat or in the editor, or perform common actions automatically:");
    }, [codegenStatus.type, o, addDummyAssistantMessage]);
    let g = useCallback((e, t) => {
      i(n => {
        let r = n[s];
        if (!r) return n;
        let o = r.files.map(s => s.name === t ? {
          ...s,
          contents: e
        } : s);
        return [...n.slice(0, s), {
          ...r,
          files: o
        }, ...n.slice(s + 1)];
      });
    }, [s]);
    return {
      ...h,
      isLoading: h.isLoading || "loading" === codegenStatus.type || 0 === o.length,
      codegen: o[s] ?? null,
      submitMessage: (e, t) => {
        let n = e ?? h.input;
        let r = o[s];
        if (!r) return Promise.resolve();
        let i = er(r.files);
        let a = i !== u.current;
        u.current = i;
        let l = `
    ${n}

    ${a ? i : ""}
    `;
        h.submitMessage(l, t);
        return Promise.resolve();
      },
      editCurrentVersion: g,
      isStreaming: d,
      setIgnoreSelectedNodeChanges: l
    };
  }({
    enabled: !0,
    useTailwind: !1
  });
  let [l, c] = useState(0);
  let [d, p] = useState(400);
  let [u, m] = useState(500);
  let [f, h] = useAtomValueAndSetter(X);
  let x = useRef(null);
  return (useEffect(() => {
    if (!x.current || !x.current.children[0]) return;
    let e = x.current.children[0];
    f ? e.style.top = "110vh" : e.style.top = "0";
  }, [f]), getFeatureFlags().dt_multi_node) ? jsx(W, {
    value: {
      manager: t,
      selectedFileIndex: l,
      setSelectedFileIndex: c,
      chatPanelWidth: d,
      setChatPanelWidth: p,
      codePanelWidth: u,
      setCodePanelWidth: m,
      chat: s
    },
    children: jsx("div", {
      ref: x,
      children: jsx(ModalRootComponent, {
        manager: t,
        width: 1300,
        children: jsxs(DialogContents, {
          children: [jsx(DialogHeader, {
            children: jsx("div", {
              role: "button",
              tabIndex: 0,
              onClick: () => {
                h(!1);
              },
              className: _$$s.cursorPointer.wFull.$,
              children: jsx(ec, {})
            })
          }), jsx(DialogBody, {
            padding: 0,
            scrolling: "none",
            children: jsxs(eA, {
              children: [jsx(ed, {}), jsx(ev, {}), jsx(ek, {})]
            })
          })]
        })
      })
    })
  }) : null;
}
function ec() {
  let e = selectCurrentFile()?.name || getI18nString("dev_handoff.dev_handoff_view_selector.untitled");
  let t = uQ();
  let s = Fk((e, t) => e?.get(t ?? "")?.name, t);
  return jsx(DialogTitle, {
    children: jsxs("div", {
      className: _$$s.flex.itemsCenter.fontSemiBold.$,
      children: [e, jsx(_$$R, {}), jsx(_$$q, {}), s]
    })
  });
}
function ed() {
  let {
    chatPanelWidth,
    setChatPanelWidth
  } = U();
  return jsx(wV, {
    size: chatPanelWidth,
    defaultSize: 300,
    onResize: e => setChatPanelWidth(Math.min(e, 400)),
    side: "right",
    className: _$$s.relative.flex.flexColumn.minW200.$,
    children: jsx("div", {
      className: _$$s.flex.flexColumn.flex1.hFull.overflowYScroll.bSolid.colorBorder.br1.$,
      children: jsx(ep, {})
    })
  });
}
function ep() {
  let [e, t, s] = _$$t.useTabs({
    chat: !0,
    prompts: !0
  }, {
    defaultActive: "chat"
  });
  return jsxs("section", {
    className: _$$s.flex.flexColumn.flexGrow1.p4.$,
    children: [jsxs(_$$t.TabStrip, {
      manager: s,
      children: [jsx(_$$t.Tab, {
        ...e.chat,
        children: getI18nString("dev_handoff.mc.chat")
      }), jsx(_$$t.Tab, {
        ...e.prompts,
        children: getI18nString("dev_handoff.mc.prompts")
      })]
    }), jsx(_$$t.TabPanel, {
      ...t.chat,
      height: "fill",
      children: jsx(eu, {})
    }), jsx(_$$t.TabPanel, {
      ...t.prompts,
      height: "fill",
      children: jsx(em, {})
    })]
  });
}
function eu() {
  let {
    messages,
    input,
    setInput,
    submitMessage,
    setLastMessageActions
  } = U().chat;
  let a = useRef(null);
  let l = () => {
    a.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  useEffect(() => {
    l();
  }, [messages]);
  useEffect(() => {
    setLastMessageActions(ea);
  }, [setLastMessageActions]);
  return jsxs("div", {
    className: _$$s.hFull.flex.flexColumn.flex1.itemsStretch.justifyCenter.overflowYScroll.$,
    children: [jsxs("div", {
      className: _$$s.flex.flexColumn.flexGrow1.$,
      children: [messages.map((t, s) => jsx(eb, {
        message: t,
        isLastMessage: s === messages.length - 1
      }, s)), jsx("div", {
        ref: a
      }), " "]
    }), jsx("form", {
      onSubmit: e => {
        e.preventDefault();
        submitMessage(input);
      },
      children: jsxs("div", {
        className: _$$s.flex.flexShrink0.bRadius8.m8.overflowHidden.bSolid.colorBorder.b1.$,
        style: {
          position: "sticky",
          bottom: 0
        },
        children: [jsx("textarea", {
          className: _$$s.flexGrow1.resizeNone.minH64.flex.p8.$,
          placeholder: getI18nString("dev_handoff.mc.chat_placeholder"),
          onChange: e => {
            setInput(e.target.value);
          },
          value: input,
          onKeyDown: e => {
            "Enter" !== e.key || e.shiftKey || (e.preventDefault(), submitMessage(input));
          }
        }), jsx("div", {
          className: _$$s.absolute.$,
          style: {
            right: 8,
            bottom: 8
          },
          children: jsx(IconButton, {
            type: "submit",
            "aria-label": getI18nString("dev_handoff.mc.chat_send"),
            children: jsx(_$$W, {})
          })
        })]
      })
    })]
  });
}
function em() {
  let [e, t] = useAtomValueAndSetter(Z);
  let [s, o] = useAtomValueAndSetter(I);
  let [i, a] = useAtomValueAndSetter(B);
  let [l, c] = useAtomValueAndSetter(D);
  let [p, u] = useAtomValueAndSetter(L);
  let [m, f] = useState(s);
  let [h, x] = useState(i);
  let [g, y] = useState(l);
  let [b, v] = useState(p);
  return jsxs("div", {
    className: _$$s.flex.flexColumn.hFull.borderBox.gap16.p16.$,
    children: [jsx("div", {
      className: _$$s.flex.flexRow.gap8.$,
      children: jsx(Checkbox, {
        checked: e,
        onChange: () => t(!e),
        label: jsx("label", {
          className: _$$s.fontSemiBold.$,
          children: getI18nString("dev_handoff.mc.refactor_with_prompts")
        })
      })
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.flexGrow1.gap8.$,
      children: [jsx("label", {
        className: _$$s.fontSemiBold.$,
        children: getI18nString("dev_handoff.mc.figma_system_prompt")
      }), jsx("textarea", {
        className: _$$s.flexGrow1.resizeNone.minH64.flex.p8.$,
        placeholder: getI18nString("dev_handoff.mc.figma_system_prompt_placeholder"),
        value: m,
        onChange: e => f(e.target.value)
      }), jsx(ef, {
        files: g,
        setFiles: y
      })]
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.flexGrow1.gap8.$,
      children: [jsx("label", {
        className: _$$s.fontSemiBold.$,
        children: getI18nString("dev_handoff.mc.user_system_prompt")
      }), jsx("textarea", {
        className: _$$s.flexGrow1.resizeNone.minH64.flex.p8.$,
        placeholder: getI18nString("dev_handoff.mc.user_system_prompt_placeholder"),
        value: h,
        onChange: e => x(e.target.value)
      }), jsx(ef, {
        files: b,
        setFiles: v
      })]
    }), jsx("button", {
      className: _$$s.flex.itemsCenter.justifyCenter.p8.bSolid.colorBorder.b1.bRadius8.colorBgHover.$,
      onClick: () => {
        o(m);
        a(h);
        c(g);
        u(b);
      },
      children: getI18nString("dev_handoff.mc.regenerate")
    })]
  });
}
function ef({
  files: e,
  setFiles: t
}) {
  let s = useRef(null);
  return jsxs("div", {
    className: _$$s.flex.flexRow.gap8.$,
    children: [jsx(_$$n, {
      svgAltText: getI18nString("dev_handoff.mc.upload_file"),
      acceptedFileTypes: "*",
      isDisabled: !1,
      inputRef: s,
      inputId: "dt_mlcg_file_upload",
      onFileInputChange: function (e) {
        return () => {
          let s = e.current?.files;
          s && 0 !== s.length && (Array.from(s).forEach(e => {
            let s = new FileReader();
            s.onload = s => {
              let n = s.target?.result;
              if (n) try {
                t(t => [...t, {
                  name: e.name,
                  contents: n
                }]);
              } catch (e) {
                console.error("Error uploading file", e);
              }
            };
            s.readAsText(e);
          }), e.current && (e.current.value = ""));
        };
      },
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("dev_handoff.mc.upload_file"),
      children: jsx(_$$e, {})
    }), jsx("div", {
      className: _$$s.flex.flexRow.gap8.overflowAuto.$,
      children: e.map((e, s) => jsxs("div", {
        className: _$$s.flex.flexRow.gap4.itemsCenter.pl8.colorBgMenu.radiusMedium.flexShrink0.$,
        children: [e.name, " ", jsx("div", {
          role: "button",
          tabIndex: 0,
          className: _$$s.cursorPointer.$,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("dev_handoff.mc.remove_file"),
          onClick: () => t(e => e.filter((e, t) => t !== s)),
          children: jsx(_$$q2, {})
        })]
      }, s))
    })]
  });
}
function eh({
  children: e
}) {
  return jsx("div", {
    className: _$$s.flex.flexColumn.p8.$,
    children: jsx("div", {
      className: _$$s.flex.flexRow.itemsEnd.gap8.$,
      children: e
    })
  });
}
function ex({
  children: e
}) {
  return jsx("div", {
    className: _$$s.flex.flexColumn.py14.px16.bSolid.colorBorder.b1.preWrap.$,
    style: {
      borderRadius: "24px 24px 24px 5px"
    },
    children: e
  });
}
function eg({
  children: e
}) {
  return jsx("div", {
    className: _$$s.flex.flexColumn.gap8.mt8.$,
    children: e
  });
}
function ey({
  label: e,
  onClick: t
}) {
  return jsx(Button, {
    onClick: t,
    variant: "secondary",
    "aria-label": e,
    children: e
  });
}
function eb({
  message: e,
  isLastMessage: t
}) {
  let {
    chat
  } = U();
  let r = function (e) {
    let t = e.content.split(XT);
    return jsx(Fragment, {
      children: t.map((t, s) => {
        if (t.startsWith("```")) {
          if ("assistant" !== e.role) return null;
          let r = Co(t);
          return r ? r.isComplete ? jsxs("div", {
            className: _$$s.flex.flexRow.bRadius8.p4.bSolid.colorBorder.b1.itemsCenter.my8.$,
            children: [jsx(_$$g, {}), jsx("span", {
              className: _$$s.fontSemiBold.$,
              children: r.fileName
            })]
          }, s) : jsxs("div", {
            className: _$$s.flex.flexRow.bRadius8.p4.bSolid.colorBorder.b1.itemsCenter.my8.$,
            children: [jsx(_$$k, {}), jsx("span", {
              className: _$$s.fontSemiBold.$,
              children: r.fileName
            })]
          }, s) : null;
        }
        return t.trim() ? jsx("div", {
          children: t.trim()
        }, s) : null;
      })
    });
  }(e);
  let o = selectCurrentUser();
  let i = function () {
    let {
      chat: _chat
    } = U();
    let t = Vr();
    let s = useAtomWithSubscription(Z);
    let n = useAtomWithSubscription(I);
    let r = useAtomWithSubscription(B);
    let o = useAtomWithSubscription(D);
    let i = useAtomWithSubscription(L);
    let [, a] = useAtomValueAndSetter(X);
    return async function (l) {
      if ("refactor_props" === l.type) {
        _chat.setLastMessageActions([{
          label: "Refactor",
          type: "do_refactor_props"
        }, {
          label: "Cancel",
          type: "cancel_refactor_props"
        }]);
        _chat.addDummyAssistantMessage("Planning how to refactor...");
        _chat.submitMessage(`Your task is to refactor this component to be reusable with React props.
Only refactor the top level component.
Only create props for things which users are likely to want to change, e.g. strings.
Don't create props for CSS classnames or other design elements unless the user asks you to or there are clear examples in the code.

First of all, describe to the user which props you are going to create. Be succinct. Tell the user they can add, remove or modify the props you describe by asking you to do so.

The user will then reply, if they ask you to make changes to the props then describe the new props.

Once the user asks you to proceed, reply with the refactored code.`, {
          hideFromUser: !0
        });
      } else if ("do_refactor_props" === l.type) {
        _chat.submitMessage("Go ahead and refactor", {
          hideFromUser: !0
        });
        _chat.setLastMessageActions(ea);
      } else if ("cancel_refactor_props" === l.type) {
        _chat.submitMessage("Do not refactor the code. Exit this refactoring flow and go back to waiting for regular user input.", {
          hideFromUser: !0
        });
        _chat.setLastMessageActions(ea);
      } else if ("split_component" === l.type) {
        _chat.setLastMessageActions([{
          label: "Split Component",
          type: "do_split_component"
        }, {
          label: "Cancel",
          type: "cancel_split_component"
        }]);
        _chat.addDummyAssistantMessage("Planning how to split this component...");
        _chat.submitMessage(`Your task is to split this component into smaller components.
If there are identical or very similar repeated elements, split these into reusable components with props. Only do this if the differences are easy to identify, it's better to leave them as is if you are unsure.

First of all, describe to the user which components you are going to create. Be succinct. Tell the user they can add, remove or modify the components you describe by asking you to do so.

The user will then reply, if they ask you to make changes to the components then describe the new components.

Once the user asks you to proceed, reply with the split components.`, {
          hideFromUser: !0
        });
      } else if ("do_split_component" === l.type) {
        _chat.submitMessage("Go ahead and split the component", {
          hideFromUser: !0
        });
        _chat.setLastMessageActions(ea);
      } else if ("cancel_split_component" === l.type) {
        _chat.submitMessage("Do not split the component. Exit this splitting flow and go back to waiting for regular user input.", {
          hideFromUser: !0
        });
        _chat.setLastMessageActions(ea);
      } else if ("add_variant" === l.type) {
        _chat.addDummyAssistantMessage("Select the variant you want to add on the canvas and press Continue when you are ready");
        _chat.setIgnoreSelectedNodeChanges(!0);
        _chat.setLastMessageActions([{
          label: "Show Canvas",
          type: "show_canvas"
        }, {
          label: "Continue",
          type: "continue_add_variant"
        }, {
          label: "Cancel",
          type: "cancel_add_variant"
        }]);
      } else if ("show_canvas" === l.type) a(!0);else if ("continue_add_variant" === l.type) {
        if (_chat.setLastMessageActions([]), _chat.addDummyAssistantMessage("Please wait..."), !t) return;
        let {
          files
        } = await ee(t, !1, s, n, r, o, i);
        let l = files[0];
        if (!l) return;
        _chat.submitMessage(`Your task is to update this component to support a new variant.
You will be given the code for the new variant. You should compare this to the existing code and add any props and logic necessary to support the new variant.

First of all, describe to the user what changes you are going to make. Be succinct. Tell the user they can add, remove or modify the changes you describe by asking you to do so.

The user will then reply, if they ask you to make changes then describe the new changes.

Once the user asks you to proceed, reply with the updated code.

Here is the code for the new variant:
${l.contents}`, {
          hideFromUser: !0
        });
        _chat.setLastMessageActions([{
          label: "Create Variant",
          type: "do_add_variant"
        }, {
          label: "Cancel",
          type: "cancel_add_variant"
        }]);
      } else "do_add_variant" === l.type ? (_chat.submitMessage("Go ahead and add the variant", {
        hideFromUser: !0
      }), _chat.setLastMessageActions(ea)) : "cancel_add_variant" === l.type && (_chat.submitMessage("Do not add the variant. Exit this adding flow and go back to waiting for regular user input.", {
        hideFromUser: !0
      }), _chat.setLastMessageActions(ea));
    };
  }();
  if (!r || !o || e.hideFromUser) return null;
  if ("user" === e.role) return jsxs(eh, {
    children: [jsx(H8, {
      user: o
    }), jsx(ex, {
      children: r
    })]
  });
  if ("assistant" === e.role) {
    let e = t && !chat.isStreaming ? chat.lastMessageActions : [];
    return jsxs(eh, {
      children: [jsx("div", {
        className: _$$s.bRadiusFull.bSolid.colorBorder.b1.$,
        children: jsx(_$$T, {})
      }), jsxs(ex, {
        children: [r, e.length > 0 && jsx(eg, {
          children: e.map(e => jsx(ey, {
            label: e.label,
            onClick: () => i(e)
          }, e.label))
        })]
      })]
    });
  }
  return null;
}
function ev() {
  let {
    codePanelWidth,
    setCodePanelWidth
  } = U();
  return jsx(wV, {
    size: codePanelWidth,
    defaultSize: 500,
    onResize: e => setCodePanelWidth(Math.min(Math.max(e, 200), 500)),
    side: "right",
    className: _$$s.relative.minW200.$,
    children: jsxs("div", {
      className: _$$s.flex.flexColumn.flex1.hAuto.$,
      children: [jsx(eS, {}), jsx(e_, {})]
    })
  });
}
function eS() {
  return jsxs("div", {
    className: _$$s.flex.justifyBetween.p8.$,
    children: [jsx(ew, {}), jsx(ej, {})]
  });
}
function ew() {
  return jsxs("div", {
    className: _$$s.flex.itemsCenter.$,
    children: [jsx(_$$V, {}), getI18nString("dev_handoff.mc.simple_components")]
  });
}
function ej() {
  let {
    chat,
    selectedFileIndex
  } = U();
  let s = chat.codegen?.files[selectedFileIndex]?.contents;
  return jsx(IconButton, {
    disabled: chat.isLoading || !s,
    "aria-label": getI18nString("dev_handoff.mc.copy"),
    onClick: () => {
      s && navigator.clipboard.writeText(s);
    },
    children: jsx(_$$X, {})
  });
}
function e_() {
  return jsx("div", {
    className: _$$s.flex.flex1.itemsStretch.$,
    children: jsx(eE, {})
  });
}
function eE() {
  let {
    chat,
    selectedFileIndex,
    setSelectedFileIndex
  } = U();
  return jsx("div", {
    className: _$$s.flexColumn.colorBorder.bSolid.bt1.itemsStretch.flex1.$,
    children: jsxs(Fragment, {
      children: [jsx(eC, {
        files: chat.codegen?.files ?? [],
        selectedFileIndex,
        setSelectedFileIndex
      }), jsx(e$, {
        code: chat.codegen?.files[selectedFileIndex]?.contents || ""
      })]
    })
  });
}
function eC({
  files: e,
  selectedFileIndex: t,
  setSelectedFileIndex: s
}) {
  let r = e.map(e => e.name);
  return jsx("div", {
    className: _$$s.flex.colorBgSecondary.$,
    children: r.map((e, r) => jsx(eN, {
      active: r === t,
      index: r,
      onClick: () => s(r),
      children: e
    }, e))
  });
}
function eN({
  children: e,
  active: t,
  index: s,
  onClick: r
}) {
  return jsx("button", {
    className: _$$s.flex.p8.gap10.colorBorder.bSolid.$$if(t, _$$s.colorBg, _$$s.colorBgSecondary).$$if(0 !== s, _$$s.bl1).$,
    onClick: r,
    children: e
  });
}
function e$({
  code: e
}) {
  let {
    codePanelWidth,
    chat,
    selectedFileIndex
  } = U();
  let i = useCallback(() => e, [e]);
  let a = chat.codegen?.files[selectedFileIndex]?.name || "index.tsx";
  return jsx("div", {
    className: _$$s.$$if(chat.isLoading, _$$s.opacity0_5).$,
    children: jsx(_$$d, {
      editable: !chat.isLoading,
      initialText: i,
      fileName: "code.tsx",
      fullHeight: !0,
      maxHeight: "565px",
      width: `${codePanelWidth}px`,
      onChange: e => {
        chat.editCurrentVersion(e, a);
      }
    }, a)
  });
}
function ek() {
  let {
    codePanelWidth,
    chatPanelWidth
  } = U();
  return jsx("div", {
    className: _$$s.flex.flexColumn.flex1.hAuto.bSolid.colorBorder.bl1.$,
    style: {
      width: 1300 - codePanelWidth - chatPanelWidth
    },
    children: jsx(eT, {})
  });
}
function eT() {
  return jsxs("div", {
    className: _$$s.relative.flex.justifyCenter.p8.$,
    children: [jsx("div", {
      className: _$$s.absolute.top0.bottom0.flex.itemsCenter.fontSemiBold.$,
      style: {
        left: 8
      },
      children: getI18nString("dev_handoff.mc.preview")
    }), jsx(eF, {})]
  });
}
function eF() {
  let [e, t, s] = _$$t.useTabs({
    sideBySide: !1,
    overlay: !0,
    diff: !1
  }, {
    defaultActive: "overlay"
  });
  return jsxs("section", {
    children: [jsxs(_$$t.TabStrip, {
      manager: s,
      children: [jsx(_$$t.Tab, {
        ...e.sideBySide,
        children: getI18nString("dev_handoff.mc.side_by_side")
      }), jsx(_$$t.Tab, {
        ...e.overlay,
        children: getI18nString("dev_handoff.mc.overlay")
      }), jsx(_$$t.Tab, {
        ...e.diff,
        children: getI18nString("dev_handoff.mc.diff")
      })]
    }), jsx(_$$t.TabPanel, {
      ...t.sideBySide,
      children: null
    }), jsx(_$$t.TabPanel, {
      ...t.overlay,
      children: null
    }), jsx(_$$t.TabPanel, {
      ...t.diff,
      children: null
    })]
  });
}
function eA({
  children: e
}) {
  return jsx("div", {
    className: _$$s.flex.wFull.hFull.$,
    style: {
      minHeight: 700
    },
    children: e
  });
}
export const _$$default = $$el0;