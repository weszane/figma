import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Hg } from "../figma_app/304955";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { Button } from "../905/521428";
import { FJ } from "../905/508367";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { TextWithTruncation } from "../905/984674";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrgId } from "../905/845253";
import { IT, gY } from "../905/713695";
import { getCurrentTeam } from "../figma_app/598018";
import { registerModal } from "../905/102752";
import { nc } from "../figma_app/570630";
import { TT, rY, lA } from "../figma_app/952035";
import { Yr } from "../figma_app/325912";
let I = createNoOpValidator();
let $$S0 = registerModal(function (e) {
  let t = useModalManager(e);
  let r = selectCurrentFile().key;
  let [E, S] = useState(null);
  let [v, A] = useState(null);
  let [x, N] = useState([]);
  let [C, w] = useState(null);
  let [O, R] = useState("");
  let [L, P] = useState("");
  let [D, k] = useState("");
  let [M, F] = IT(TT({
    fileKey: r
  }));
  let j = gY(rY);
  let U = lA(r);
  let B = M.data?.connectedProject;
  let G = "loaded" !== M.status;
  let V = U.authenticated;
  let H = !!U.isLoading;
  let [z, W] = useState(!1);
  let K = useCurrentUserOrgId();
  let Y = getCurrentTeam();
  useEffect(() => {
    G || H ? W(!0) : W(!1);
  }, [G, H]);
  let $ = async () => {
    try {
      W(!0);
      S(null);
      await XHR.del(`/api/integrations/supabase/${r}/authorization`);
      F.refetch();
    } catch (e) {
      S(`Failed to revoke authorization: ${e}`);
    } finally {
      W(!1);
    }
  };
  let X = async () => {
    try {
      W(!0);
      S(null);
      let e = Yr;
      K ? e += `?org_id=${encodeURIComponent(K)}` : Y?.id && (e += `?team_id=${encodeURIComponent(Y.id)}`);
      let t = FJ(e, "_blank");
      await new Promise(e => {
        window.addEventListener("message", r => {
          r.data && "child-redirect-complete" === r.data.type && (t?.close(), e(!0));
        });
      });
    } catch (e) {
      S("Failed to authorize oauth app");
    } finally {
      W(!1);
    }
  };
  useEffect(() => {
    (async () => {
      if (!H && V && !G && V && !B) try {
        R("Loading projects...");
        W(!0);
        let e = await I.validate(async ({
          xr: e
        }) => await e.get(`/api/integrations/supabase/${r}/existing_projects`));
        N(e.data.meta || []);
      } catch (e) {
        S(`Failed to fetch projects: ${e}`);
      } finally {
        W(!1);
        R("");
      }
    })();
  }, [B, G, V, H, r]);
  let q = async () => {
    if (!C) {
      S("Please select a project first");
      return;
    }
    try {
      W(!0);
      S(null);
      let e = x.find(e => e.id === C);
      if (!e) {
        S("Selected project not found");
        return;
      }
      await XHR.post(`/api/integrations/supabase/${r}/connect`, APIParameterUtils.toAPIParameters({
        supabase_project_id: e.id,
        supabase_org_id: e.organization_id
      }));
      await F.refetch();
    } catch (e) {
      S(`Failed to connect to project: ${e}`);
    } finally {
      W(!1);
    }
  };
  let J = async () => {
    try {
      W(!0);
      S(null);
      await j({
        fileKey: r
      });
    } catch (e) {
      S(`Failed to disconnect from project: ${e}`);
    } finally {
      W(!1);
    }
  };
  let Z = async () => {
    try {
      W(!0);
      S(null);
      A(null);
      let e = Hg(nc);
      let t = {};
      for (let [r, n] of Object.entries(e)) if (r.includes("/supabase/functions/server/")) {
        let e = r.split("/").pop();
        let i = n.sourceCode;
        e && i && (t[e] = i);
      }
      if (!t["index.tsx"]) {
        S("/supabase/functions/server/index.tsx not found");
        return;
      }
      await XHR.post(`/api/integrations/supabase/${r}/edge_functions/make-server/deploy`, {
        files: t
      });
      A("Deployed function - it may take a few seconds to spin up");
    } catch (e) {
      S(`Failed to publish edge function: ${e}`);
    } finally {
      W(!1);
    }
  };
  let Q = async () => {
    try {
      W(!0);
      S(null);
      A(null);
      await XHR.post(`/api/integrations/supabase/${r}/project/pause`);
      A("Paused project - you may need to refresh status to see updates");
    } catch (e) {
      S(`Failed to pause project: ${e}`);
    } finally {
      W(!1);
    }
  };
  let ee = async () => {
    try {
      W(!0);
      S(null);
      A(null);
      await XHR.post(`/api/integrations/supabase/${r}/project/restore`);
      A("Restored project - you may need to refresh status to see updates");
    } catch (e) {
      S(`Failed to restore project: ${e}`);
    } finally {
      W(!1);
    }
  };
  let et = async () => {
    try {
      if (W(!0), S(null), A(null), !L.trim()) {
        S("Secret name cannot be empty");
        return;
      }
      if (!D.trim()) {
        S("Secret value cannot be empty");
        return;
      }
      await XHR.post(`/api/integrations/supabase/${r}/secrets`, APIParameterUtils.toAPIParameters({
        secret_name: L,
        secret_value: D
      }));
      P("");
      k("");
      A("Secret added");
    } catch (e) {
      S(`Failed to add secret: ${e}`);
    } finally {
      W(!1);
    }
  };
  return jsx(ModalRootComponent, {
    manager: t,
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: "Supabase"
        })
      }), jsx(DialogBody, {
        children: jsxs("div", {
          style: {
            padding: "16px"
          },
          children: [E && jsx("div", {
            style: {
              marginBottom: "20px",
              padding: "12px",
              backgroundColor: "rgba(235, 87, 87, 0.1)",
              border: "1px solid rgba(235, 87, 87, 0.3)",
              borderRadius: "6px"
            },
            children: jsx(TextWithTruncation, {
              color: "danger",
              children: E
            })
          }), v && jsx("div", {
            style: {
              marginBottom: "20px",
              padding: "12px",
              backgroundColor: "rgba(39, 174, 96, 0.1)",
              border: "1px solid rgba(39, 174, 96, 0.3)",
              borderRadius: "6px"
            },
            children: jsx(TextWithTruncation, {
              color: "success",
              children: v
            })
          }), V ? jsxs(Fragment, {
            children: [B ? jsxs("div", {
              style: {
                marginBottom: "16px"
              },
              children: [jsxs("div", {
                style: {
                  padding: "12px",
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  borderRadius: "6px",
                  marginBottom: "12px"
                },
                children: [jsx("div", {
                  style: {
                    fontWeight: "bold",
                    marginBottom: "8px"
                  },
                  children: jsx(TextWithTruncation, {
                    children: `Connected: ${B.name}`
                  })
                }), jsx("div", {
                  style: {
                    fontSize: "12px",
                    color: "#666"
                  },
                  children: jsx(TextWithTruncation, {
                    children: `ID: ${B.id} \u2022 Status: ${B.status}`
                  })
                })]
              }), "ACTIVE_HEALTHY" === B.status && jsxs("div", {
                style: {
                  marginTop: "12px",
                  marginBottom: "12px",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: "4px",
                  padding: "12px",
                  backgroundColor: "rgba(0, 0, 0, 0.02)"
                },
                children: [jsx("div", {
                  style: {
                    fontSize: "13px",
                    marginBottom: "12px"
                  },
                  children: jsx(TextWithTruncation, {
                    children: "Add Secret"
                  })
                }), jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  },
                  children: [jsxs("div", {
                    children: [jsx("div", {
                      style: {
                        marginBottom: "4px",
                        fontSize: "12px",
                        color: "rgba(0, 0, 0, 0.6)"
                      },
                      children: jsx(TextWithTruncation, {
                        children: "Secret Name"
                      })
                    }), jsx("input", {
                      type: "text",
                      value: L,
                      onChange: e => P(e.target.value),
                      placeholder: "Enter secret name",
                      style: {
                        width: "95%",
                        padding: "6px 8px",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        fontSize: "13px",
                        outline: "none",
                        transition: "border-color 0.2s ease"
                      }
                    })]
                  }), jsxs("div", {
                    children: [jsx("div", {
                      style: {
                        marginBottom: "4px",
                        fontSize: "12px",
                        color: "rgba(0, 0, 0, 0.6)"
                      },
                      children: jsx(TextWithTruncation, {
                        children: "Secret Value"
                      })
                    }), jsx("input", {
                      type: "password",
                      value: D,
                      onChange: e => k(e.target.value),
                      placeholder: "Enter secret value",
                      style: {
                        width: "95%",
                        padding: "6px 8px",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        fontSize: "13px",
                        outline: "none",
                        transition: "border-color 0.2s ease"
                      }
                    })]
                  }), jsxs("div", {
                    style: {
                      alignSelf: "flex-start",
                      display: "flex",
                      gap: "10px"
                    },
                    children: [jsx(Button, {
                      variant: "secondary",
                      onClick: et,
                      disabled: z,
                      children: z ? "..." : "Add secret"
                    }), jsx(Button, {
                      variant: "secondary",
                      onClick: () => FJ(`https://supabase.com/dashboard/project/${B.id}/functions/secrets`),
                      disabled: z,
                      children: z ? "..." : "View secrets \u2197\uFE0F"
                    })]
                  })]
                })]
              })]
            }) : jsx("div", {
              style: {
                marginBottom: "16px"
              },
              children: O.length > 0 ? jsx(TextWithTruncation, {
                children: O
              }) : 0 === x.length ? jsx(TextWithTruncation, {
                children: "No projects available. Create a project in your Supabase dashboard first."
              }) : jsxs("div", {
                style: {
                  marginBottom: 16
                },
                children: [jsx("div", {
                  style: {
                    marginBottom: 8,
                    fontWeight: "bold"
                  },
                  children: jsx(TextWithTruncation, {
                    children: "Select a project to connect:"
                  })
                }), jsx("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    maxHeight: "200px",
                    overflowY: "auto",
                    padding: "8px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px"
                  },
                  children: x.map(e => jsxs("label", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "4px 0"
                    },
                    children: [jsx("input", {
                      type: "radio",
                      name: "project",
                      value: e.id,
                      checked: C === e.id,
                      onChange: () => w(e.id),
                      style: {
                        marginRight: 8
                      }
                    }), jsxs("div", {
                      children: [jsx("div", {
                        style: {
                          fontWeight: "bold"
                        },
                        children: jsx(TextWithTruncation, {
                          children: e.name
                        })
                      }), jsx("div", {
                        style: {
                          fontSize: "12px",
                          color: "#666"
                        },
                        children: jsx(TextWithTruncation, {
                          children: `ID: ${e.id} \u2022 Status: ${e.status}`
                        })
                      })]
                    })]
                  }, e.id))
                })]
              })
            }), jsxs("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                paddingTop: "16px"
              },
              children: [!B && jsx(Button, {
                variant: "primary",
                onClick: q,
                disabled: z || !C,
                children: z ? "..." : "Connect to selected project"
              }), jsxs("div", {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginTop: B ? "8px" : "0"
                },
                children: [B?.status === "ACTIVE_HEALTHY" && jsx(Button, {
                  variant: "primary",
                  onClick: Z,
                  disabled: z,
                  children: z ? "..." : "Deploy backend"
                }), B && jsx(Button, {
                  variant: "secondary",
                  onClick: () => FJ(`https://supabase.com/dashboard/project/${B.id}/functions/make-server-${r.substring(0, 5)}/logs`),
                  disabled: z,
                  children: z ? "..." : "Server logs \u2197\uFE0F"
                }), B && jsx(Button, {
                  variant: "secondary",
                  onClick: F.refetch,
                  disabled: z,
                  children: z ? "..." : "Refresh status"
                }), B?.status === "ACTIVE_HEALTHY" && jsx(Button, {
                  variant: "secondary",
                  onClick: Q,
                  disabled: z,
                  children: z ? "..." : "Pause"
                }), B?.status === "INACTIVE" && jsx(Button, {
                  variant: "secondary",
                  onClick: ee,
                  disabled: z,
                  children: z ? "..." : "Restore"
                }), B && jsx(Button, {
                  variant: "secondary",
                  onClick: J,
                  disabled: z,
                  children: z ? "..." : "Disconnect"
                })]
              }), V && jsx("div", {
                style: {
                  width: "100%",
                  marginTop: "12px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                  paddingTop: "12px"
                },
                children: jsx(Button, {
                  variant: "destructive",
                  onClick: $,
                  disabled: z,
                  children: z ? "..." : "Revoke Supabase authorization"
                })
              })]
            })]
          }) : jsx("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              padding: "16px 0"
            },
            children: jsx(Button, {
              variant: "primary",
              onClick: X,
              disabled: z,
              children: z ? "..." : "Authorize with Supabase"
            })
          })]
        })
      })]
    })
  });
}, "SupabaseDebugModal");
export const D = $$S0;