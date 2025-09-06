import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { q7, bL, mc, b as _$$b } from "../figma_app/860955";
import { getSingletonSceneGraph } from "../905/700578";
import { Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { Fk } from "../figma_app/167249";
import { QK, Ns, wy, kv } from "../figma_app/259678";
import { $W } from "../figma_app/325537";
import { i as _$$i } from "../905/661697";
import { glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getI18nString } from "../905/303541";
import { Q } from "../1156/755570";
import { p as _$$p } from "../905/786248";
import { Hg } from "../figma_app/304955";
import b from "../vendor/7508";
import { Y5 } from "../figma_app/455680";
import { nc } from "../figma_app/570630";
import { nU, Ql, w_ } from "../figma_app/779249";
import { r as _$$r } from "../905/571562";
import { R as _$$R } from "../905/621802";
import { e as _$$e } from "../905/295932";
import { G } from "../905/750789";
var v = b;
function E({
  path: e
}) {
  return jsx(q7, {
    onClick: () => {
      l7.user("create-new-code-file", () => {
        let t;
        let n = 0;
        let o = "new-file.tsx";
        let i = Hg(nc, e);
        for (;;) if (t = e ? e + "/" + o : o, `/${t}` in i) {
          n++;
          o = `new-file-${n}.tsx`;
        } else break;
        glU?.createNewCodeFile(t, "", "file_context_menu", !1);
        Y5.commit();
      });
    },
    children: getI18nString("figmake.filesystem.context_menu.create_new_file")
  });
}
function j({
  path: e
}) {
  return jsx(q7, {
    onClick: () => {
      navigator.clipboard.writeText(e);
    },
    children: getI18nString("figmake.filesystem.context_menu.copy_path")
  });
}
function N({
  node: e,
  disabled: t
}) {
  return jsx(q7, {
    onClick: () => {
      l7.user("delete-code-file", () => {
        glU?.deleteCodeFile(e.guid);
        glU?.commit();
      });
    },
    disabled: t,
    children: getI18nString("figmake.filesystem.context_menu.delete")
  });
}
function T(e) {
  let t = getSingletonSceneGraph();
  if (!t) return;
  let n = t.get(e.guid);
  if (n) return n.sourceCode;
}
function $$S({
  fileOrFolder: e
}) {
  return jsx(q7, {
    onClick: () => {
      let {
        name,
        blob
      } = function (e) {
        if ("file" === e.type) {
          let t = T(e);
          return {
            name: e.name,
            blob: new Blob([t || ""], {
              type: "text/plain"
            })
          };
        }
        {
          let t = new (v())();
          !function e(t, n, o) {
            if ("file" === n.type) {
              let e = T(n);
              if (!e) return;
              let {
                name: _name
              } = n;
              let r = n.codeFilePath ? n.codeFilePath.slice(o.length) + "/" : "";
              t.file(r + _name, new TextEncoder().encode(e));
            } else for (let i of n.children) e(t, i, o);
          }(t, e, e.path);
          let n = t.generate({
            type: "blob"
          });
          return {
            name: e.path.length > 0 ? e.path.split("/").pop() + ".zip" : "project.zip",
            blob: n
          };
        }
      }(e);
      let o = URL.createObjectURL(blob);
      let i = document.createElement("a");
      i.href = o;
      i.download = name;
      i.click();
      URL.revokeObjectURL(o);
    },
    children: getI18nString("figmake.filesystem.context_menu.download")
  });
}
function A({
  handleRename: e,
  disabled: t
}) {
  return jsx(q7, {
    onClick: e,
    htmlAttributes: {
      onPointerUp: e => e.preventDefault()
    },
    disabled: t,
    children: getI18nString("figmake.filesystem.context_menu.rename")
  });
}
function k({
  manager: e,
  file: t,
  handleRename: n
}) {
  let i = getSingletonSceneGraph().get(t.guid);
  let l = Q();
  return jsx(bL, {
    manager: e,
    children: jsxs(mc, {
      children: [jsx(j, {
        path: t.codeFilePath ? t.codeFilePath + "/" + t.name : t.name
      }), jsx($$S, {
        fileOrFolder: t
      }), jsx(A, {
        handleRename: n,
        disabled: QK(i, l)
      }), i && jsx(N, {
        node: i,
        disabled: QK(i, l)
      })]
    })
  });
}
let P = {
  fileItemLabel: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    padding: "x7qmaab",
    borderRadius: "x12oqio5",
    backgroundColor: "x1yjdb4r",
    color: "x1akne3o",
    "--color-icon": "xtlvio2",
    textAlign: "xdpxx8g",
    ":hover_backgroundColor": "x12tve8b",
    whiteSpace: "xuxw1ft",
    overflowX: "x6ikm8r",
    textOverflow: "xlyipyv",
    width: "xh8yej3",
    $$css: !0
  },
  fileItemLabelRenaming: {
    ":hover_backgroundColor": "x1xh66",
    $$css: !0
  },
  fileItemLabelActive: {
    backgroundColor: "xcr9a89",
    color: "x1akne3o",
    fontWeight: "x6xwguf",
    "--color-icon": "xtlvio2",
    ":hover_backgroundColor": "x14m9vh9",
    ":hover_color": "x1c5oinq",
    ":hover_--color-icon": "x1ydjwli",
    $$css: !0
  },
  disabled: {
    color: "xge78cn",
    backgroundColor: "x1yjdb4r",
    ":hover_backgroundColor": "xtlwphu",
    ":hover_color": "xl2twnd",
    $$css: !0
  }
};
function O({
  selectedNode: e,
  file: t,
  indentLevel: n,
  codeIsStreaming: d
}) {
  let c = useRef(null);
  let u = Q();
  let {
    getContextMenuTriggerProps,
    manager
  } = _$$b();
  let [v, I] = useState(!1);
  let C = getSingletonSceneGraph().get(t.guid);
  return jsxs("button", {
    "aria-label": getI18nString("figmake.filesystem.file.description", {
      name: t.name
    }),
    onClick: () => {
      let e = getSingletonSceneGraph().get(t.guid);
      e && nU(e);
    },
    className: "x10w6t97 x78zum5 x6s0dn4",
    disabled: d,
    ...getContextMenuTriggerProps(),
    children: [jsxs("div", {
      ...Ay.props(P.fileItemLabel, e?.guid !== t.guid || v ? void 0 : P.fileItemLabelActive, d ? P.disabled : void 0, v ? P.fileItemLabelRenaming : void 0),
      style: {
        paddingLeft: 8 + 16 * n
      },
      children: [jsx("span", {
        style: {
          flexShrink: 0,
          ...Ql(d)
        },
        children: jsx(_$$i, {})
      }), jsx(_$$p, {
        fileName: t.name,
        onChange: e => {
          I(!1);
          C && l7.user("edit-code-file-name", () => {
            C.setHasBeenManuallyRenamed(!0);
            C.name = e;
            glU?.commit();
          });
        },
        disabled: d,
        readOnly: QK(C, u),
        onFocus: () => I(!0),
        ref: c,
        path: t.codeFilePath
      })]
    }), getFeatureFlags().bake_context_menu && jsx(k, {
      manager,
      file: t,
      handleRename: () => c.current?.focus()
    })]
  }, t.guid);
}
function V({
  manager: e,
  folder: t,
  rootPath: n
}) {
  return jsx(bL, {
    manager: e,
    children: jsxs(mc, {
      children: [jsx(E, {
        path: (n ? n + "/" : "") + t.path.slice(1)
      }), jsx(j, {
        path: t.path.slice(1)
      }), jsx($$S, {
        fileOrFolder: t
      })]
    })
  });
}
let B = {
  folderItemLabel: {
    flex: "x98rzlu",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    gap: "x195vfkc",
    borderRadius: "x12oqio5",
    ":hover_backgroundColor": "x12tve8b",
    $$css: !0
  },
  disabled: {
    color: "xge78cn",
    backgroundColor: "x1yjdb4r",
    ":hover_backgroundColor": "xtlwphu",
    ":hover_color": "xl2twnd",
    $$css: !0
  }
};
function H({
  selectedNode: e,
  folder: t,
  indentLevel: n,
  codeIsStreaming: a,
  openFolderPaths: d,
  toggleFolder: c,
  rootPath: p
}) {
  let u = d.has(t.path);
  let {
    getContextMenuTriggerProps,
    manager
  } = _$$b();
  let x = useMemo(() => w_([...t.children]), [t.children]);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x195vfkc xkh2ocl",
    children: [jsxs("div", {
      className: "x10w6t97 x78zum5 x6s0dn4",
      children: [jsxs("button", {
        ...getContextMenuTriggerProps(),
        "aria-label": getI18nString("figmake.filesystem.folder.description", {
          name: t.name
        }),
        "aria-expanded": u,
        onClick: () => c(t.path),
        ...Ay.props(B.folderItemLabel, a ? B.disabled : void 0),
        disabled: a,
        children: [jsxs("div", {
          style: {
            paddingLeft: 16 * n,
            display: "flex",
            alignItems: "center",
            ...Ql(a)
          },
          children: [jsx("span", {
            style: {
              flexShrink: 0
            },
            children: u ? jsx(_$$r, {}) : jsx(_$$R, {})
          }), jsx("span", {
            style: {
              flexShrink: 0
            },
            children: jsx(_$$e, {})
          })]
        }), jsx(G, {
          text: t.name
        })]
      }), getFeatureFlags().bake_context_menu && jsx(V, {
        manager,
        folder: t,
        rootPath: p
      })]
    }), u ? x.map(t => "file" === t.type ? jsx(O, {
      selectedNode: e,
      file: t,
      indentLevel: n + 1,
      codeIsStreaming: a
    }, t.guid) : jsx(H, {
      selectedNode: e,
      folder: t,
      indentLevel: n + 1,
      codeIsStreaming: a,
      openFolderPaths: d,
      toggleFolder: c,
      rootPath: p
    }, t.name)) : null]
  });
}
function U({
  manager: e,
  rootPath: t,
  codeProject: n
}) {
  return jsx(bL, {
    manager: e,
    children: jsxs(mc, {
      children: [jsx(E, {
        path: t
      }), jsx($$S, {
        fileOrFolder: n
      })]
    })
  });
}
export function $$F0({
  selectedCodeFileNode: e,
  nodeWithChatMessages: t,
  rootPath: n
}) {
  let {
    getContextMenuTriggerProps,
    manager
  } = _$$b();
  let m = Fk((e, n) => Ns(e, n, t?.belongsToCodeLibrary?.guid), n);
  let [x, g] = useAtomValueAndSetter(wy);
  let y = useCallback(e => {
    g(t => {
      let n = new Set(t);
      n.has(e) ? n.$$delete(e) : n.add(e);
      return n;
    });
  }, [g]);
  let f = useCallback(() => {
    let e = m.children.find(e => "file" === e.type && "App.tsx" === e.name)?.guid;
    if (e || (e = m.children.find(e => "file" === e.type)?.guid), e) {
      let t = getSingletonSceneGraph().get(e);
      t && nU(t);
    }
  }, [m]);
  useEffect(() => {
    kv(e) || f();
  }, [e, m, f]);
  let _ = useMemo(() => w_([...m.children]), [m.children]);
  let b = function (e) {
    let {
      exchange
    } = $W(e?.guid);
    return Object.values(exchange?.fileUpdates ?? {}).length > 0;
  }(t);
  return jsxs("div", {
    className: "xysyzu8 x6ikm8r x1n2onr6 x5yr21d x2lah0s",
    ...getContextMenuTriggerProps(),
    children: [getFeatureFlags().bake_context_menu && jsx(U, {
      manager,
      rootPath: n,
      codeProject: m
    }), jsx("div", {
      className: "xdqdrvq x78zum5 xdt5ytf xlqzeqv x1qjc9v5 x1jnr06f",
      children: _.map(t => "file" === t.type ? jsx(O, {
        selectedNode: e,
        file: t,
        indentLevel: 0,
        codeIsStreaming: b
      }, t.guid) : jsx(H, {
        selectedNode: e,
        folder: t,
        indentLevel: 0,
        codeIsStreaming: b,
        openFolderPaths: x,
        toggleFolder: y,
        rootPath: n
      }, t.name))
    })]
  });
}
export const S = $$F0;