import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { Button } from "../905/521428";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { openWindow } from "../905/508367";
import { F as _$$F } from "../905/422355";
import { TextWithTruncation } from "../905/984674";
import { Ay } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { openFileKeyAtom } from "../figma_app/516028";
export let $$y0 = registerModal(function (e) {
  let t = useModalManager(e);
  let [r, y] = useState(!1);
  let [b, T] = useState(!1);
  let [I, S] = useState(!1);
  let [v, A] = useState(null);
  let [x, N] = useState(null);
  let [C, w] = useState(null);
  let [O, R] = useState(!1);
  let [L, P] = useState(!1);
  let D = atomStoreManager.get(openFileKeyAtom);
  let k = D ? _$$F(D) : "";
  let M = async () => {
    try {
      y(!0);
      A(null);
      N(null);
      let e = getSingletonSceneGraph().getInternalCanvas();
      if (!e) {
        A("No internal canvas found");
        return;
      }
      let t = {};
      for (let r of e.childrenNodes) if (r.isCodeFile && !r.isSoftDeleted) {
        let e = r.codeFileFullPathWithoutScheme;
        let n = r.sourceCode;
        e && n && (t[e] = n);
      }
      if (0 === Object.keys(t).length) {
        A("No code files found to upload");
        return;
      }
      if (!atomStoreManager.get(openFileKeyAtom)) {
        A("No open file key found");
        return;
      }
      let r = t["App.tsx"] || t["/App.tsx"] || "";
      if (!r) {
        let e = Object.entries(t).find(([e]) => e.endsWith(".tsx") || e.endsWith(".ts"));
        r = e?.[1] || "";
      }
      let n = await fetch("/api/foundry/upload-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          files: t,
          mainComponent: r,
          fileKeyHash: k
        })
      });
      if (n.ok) {
        let e = await n.json();
        w({
          ...e,
          preview_url: "https://local.figma.engineering:8443/foundry/preview"
        });
        N("Successfully uploaded code to local foundry");
      } else {
        let e = await n.text();
        A(`Failed to upload code to local foundry: ${n.status} - ${e}`);
      }
    } catch (e) {
      A(`Error uploading code to local foundry: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      y(!1);
    }
  };
  let F = async () => {
    try {
      T(!0);
      A(null);
      N(null);
      w(null);
      let e = await Ay.foundry.sandbox({
        fileKeyHash: k,
        forceProvision: O
      }, _$$Ay());
      w(e);
      N("Successfully fetched sandbox");
    } catch (e) {
      A(`Error listing nimbus sandboxes: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      T(!1);
    }
  };
  let j = async () => {
    try {
      S(!0);
      A(null);
      N(null);
      let e = getSingletonSceneGraph().getInternalCanvas();
      if (!atomStoreManager.get(openFileKeyAtom)) {
        A("No open file key found");
        return;
      }
      if (!e) {
        A("No internal canvas found");
        return;
      }
      let t = {};
      for (let r of e.childrenNodes) if (r.isCodeFile && !r.isSoftDeleted) {
        let e = r.codeFileFullPathWithoutScheme;
        let n = r.sourceCode;
        e && n && (t[e] = n);
      }
      if (0 === Object.keys(t).length) {
        A("No code files found to upload");
        return;
      }
      let r = t["App.tsx"] || t["/App.tsx"] || "";
      if (!r) {
        let e = Object.entries(t).find(([e]) => e.endsWith(".tsx") || e.endsWith(".ts"));
        r = e?.[1] || "";
      }
      let n = await Ay.foundry.uploadCode({
        files: t,
        mainComponent: r,
        fileKeyHash: k,
        forceProvision: O
      }, _$$Ay());
      w(n);
      N(`Successfully uploaded code to nimbus foundry sandbox (ID: ${n.id})`);
    } catch (e) {
      A(`Error uploading code to nimbus foundry: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      S(!1);
    }
  };
  let U = async () => {
    P(!0);
    A(null);
    N(null);
    try {
      let e = C?.urls?.controller;
      if (!e) throw Error("No controller URL available. Please create a sandbox first.");
      let t = new URL("/api/cortex/foundry/ping", window.location.origin);
      t.searchParams.append("controllerUrl", e);
      let r = await fetch(t.toString());
      if (!r.ok) {
        let e = await r.text();
        throw Error(`Ping failed: ${e}`);
      }
      let n = await r.json();
      N(`Ping successful! Response: ${JSON.stringify(n)}`);
    } catch (e) {
      A(`Error pinging nimbus sandbox: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      P(!1);
    }
  };
  return jsx(ModalRootComponent, {
    manager: t,
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: "Foundry"
        })
      }), jsx(DialogBody, {
        children: jsxs("div", {
          style: {
            padding: "16px"
          },
          children: [v && jsx("div", {
            style: {
              marginBottom: "20px",
              padding: "12px",
              backgroundColor: "rgba(235, 87, 87, 0.1)",
              border: "1px solid rgba(235, 87, 87, 0.3)",
              borderRadius: "6px"
            },
            children: jsx(TextWithTruncation, {
              color: "danger",
              children: v
            })
          }), x && jsx("div", {
            style: {
              marginBottom: "20px",
              padding: "12px",
              backgroundColor: "rgba(39, 174, 96, 0.1)",
              border: "1px solid rgba(39, 174, 96, 0.3)",
              borderRadius: "6px"
            },
            children: jsx(TextWithTruncation, {
              color: "success",
              children: x
            })
          }), jsxs("div", {
            style: {
              marginBottom: "20px",
              padding: "12px",
              backgroundColor: "rgba(13, 153, 255, 0.1)",
              border: "1px solid rgba(13, 153, 255, 0.3)",
              borderRadius: "6px"
            },
            children: [jsx("div", {
              style: {
                fontWeight: "bold",
                marginBottom: "4px",
                fontSize: "14px"
              },
              children: jsx(TextWithTruncation, {
                children: "md5(file_key):"
              })
            }), jsx("div", {
              style: {
                fontFamily: "monospace",
                fontSize: "12px",
                color: "#666"
              },
              children: jsx(TextWithTruncation, {
                children: k || "No file key available"
              })
            })]
          }), jsxs("div", {
            style: {
              marginTop: "20px",
              padding: "16px",
              backgroundColor: "rgba(75, 0, 130, 0.05)",
              border: "1px solid rgba(75, 0, 130, 0.2)",
              borderRadius: "8px"
            },
            children: [jsx("div", {
              style: {
                fontWeight: "bold",
                marginBottom: "16px",
                fontSize: "16px"
              },
              children: jsx(TextWithTruncation, {
                children: "Nimbus Foundry"
              })
            }), jsx("div", {
              style: {
                marginBottom: "16px"
              },
              children: jsx(Checkbox, {
                checked: O,
                onChange: e => R(e),
                label: jsx(Label, {
                  children: "Force provision new sandbox"
                })
              })
            }), jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12
              },
              children: [jsx("div", {
                style: {
                  width: 320
                },
                children: jsx(Button, {
                  variant: "primary",
                  onClick: j,
                  disabled: I,
                  children: I ? "Uploading..." : "Upload Code to Nimbus Foundry"
                })
              }), jsx("div", {
                style: {
                  width: 320
                },
                children: jsx(Button, {
                  variant: "secondary",
                  onClick: F,
                  disabled: b,
                  children: b ? "Loading..." : "Get Nimbus Sandbox"
                })
              }), jsx("div", {
                style: {
                  width: 320
                },
                children: jsx(Button, {
                  variant: "secondary",
                  onClick: U,
                  disabled: L || !C?.urls?.controller,
                  children: L ? "Pinging..." : "Ping Nimbus Sandbox"
                })
              })]
            })]
          }), jsxs("div", {
            style: {
              marginTop: "20px",
              padding: "16px",
              backgroundColor: "rgba(34, 139, 34, 0.05)",
              border: "1px solid rgba(34, 139, 34, 0.2)",
              borderRadius: "8px"
            },
            children: [jsx("div", {
              style: {
                fontWeight: "bold",
                marginBottom: "16px",
                fontSize: "16px"
              },
              children: jsx(TextWithTruncation, {
                children: "Devbox Foundry"
              })
            }), jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12
              },
              children: [jsx("div", {
                style: {
                  width: 320
                },
                children: jsx(Button, {
                  variant: "primary",
                  onClick: M,
                  disabled: r,
                  children: r ? "Uploading..." : "Upload Code to Devbox Foundry"
                })
              }), jsx("div", {
                style: {
                  width: 320
                },
                children: jsx(Button, {
                  variant: "secondary",
                  onClick: () => openWindow("/foundry/preview", "_blank"),
                  children: "Open Foundry Preview"
                })
              })]
            })]
          }), C && jsxs("div", {
            style: {
              marginTop: "20px",
              padding: "12px",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "6px"
            },
            children: [jsx("div", {
              style: {
                fontWeight: "bold",
                marginBottom: "8px"
              },
              children: "API Response:"
            }), C.preview_url && jsxs("div", {
              style: {
                marginBottom: "12px"
              },
              children: [jsx("div", {
                style: {
                  fontWeight: "bold",
                  marginBottom: "4px"
                },
                children: "Preview URL:"
              }), jsx("a", {
                href: C.preview_url,
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  color: "#0d99ff",
                  textDecoration: "underline"
                },
                children: C.preview_url
              })]
            }), jsx("pre", {
              style: {
                fontSize: "12px",
                overflow: "auto",
                margin: 0
              },
              children: JSON.stringify(C, null, 2)
            })]
          })]
        })
      })]
    })
  });
}, "FoundryDebugModal");
export const O = $$y0;