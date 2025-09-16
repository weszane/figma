import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { k as _$$k } from "../905/443820";
import { ButtonPrimitive } from "../905/632989";
import { Button } from "../905/521428";
import { e } from "../905/149844";
import { g as _$$g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { useAtomWithSubscription, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { h1 } from "../905/986103";
import { getI18nString, renderI18nText } from "../905/303541";
import { useCurrentFileKey } from "../figma_app/516028";
import { liveStoreInstance } from "../905/713695";
import { R as _$$R } from "../905/943003";
import { uF } from "../1156/418246";
import { TL, mS, YY, tE, Lz } from "../figma_app/791586";
import { Kj } from "../1156/201513";
import { h5 } from "../1156/717481";
import { ZH, AW, oT } from "../1156/250784";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { IconButton } from "../905/443068";
import { N as _$$N } from "../905/438674";
import { b as _$$b, c as _$$c } from "../905/308099";
import { Label } from "../905/270045";
import { C as _$$C } from "../905/520159";
import { showModalHandler } from "../905/156213";
import { registerModal } from "../905/102752";
import { kz } from "../figma_app/72338";
import { lV, cG, mj } from "../1156/395731";
import { Z as _$$Z } from "../1156/98576";
import { GO, TT, YF } from "../figma_app/952035";
import { l4 } from "../1156/929233";
import { $X, Sy } from "../figma_app/325912";
import { S as _$$S } from "../1156/720801";
function q({
  activeProjects: e,
  projectIdToPause: t,
  setProjectIdToPause: n
}) {
  let i = useAtomWithSubscription(kz);
  return jsx(_$$b, {
    legend: jsx("p", {
      ...Ay.props(U.textBodyMediumStrong),
      children: getI18nString("figmake.settings.pause_project.radio.label")
    }),
    value: t,
    onChange: n,
    readonly: !!i,
    children: e.map(e => jsx(_$$c, {
      value: e.id,
      label: jsx(Label, {
        children: jsx($, {
          project: e
        })
      })
    }, e.id))
  });
}
function $({
  project: e
}) {
  return jsxs("div", {
    children: [jsx("p", {
      ...Ay.props(U.textBodyMediumStrong),
      children: e.name
    }), jsx("p", {
      ...Ay.props(U.textBodyMediumSecondary),
      children: renderI18nText("figmake.settings.pause_project.created", {
        timestamp: jsx(h1, {
          date: e.created_at
        })
      })
    })]
  }, e.id);
}
function P({
  props: e,
  projectIdToPause: t
}) {
  let n = useCurrentFileKey();
  let [i, s] = useAtomValueAndSetter(kz);
  let l = h5({
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    trackingContext: e.trackingContext,
    source: e.source
  });
  let o = async () => {
    if (!n) {
      console.error("No open file key found");
      return;
    }
    if (!t) {
      console.error("No selected project found");
      return;
    }
    s(t);
    try {
      await _$$R.pauseProject({
        fileKey: n,
        projectId: t
      });
      let r = setInterval(async () => {
        let i = await liveStoreInstance.fetch(GO({
          fileKey: n,
          projectId: t
        }), {
          policy: "networkOnly"
        });
        i?.status.toLowerCase() === TL.INACTIVE && (e.onClose(), clearInterval(r), l4(), s(null), e.connectToExistingProject ? e.connectToExistingProject() : l());
      }, 2e3);
    } catch (e) {
      s(null);
      ZH(e);
    }
  };
  return i ? jsxs(Fragment, {
    children: [jsx("p", {
      ...Ay.props(U.textBodyMediumSecondary),
      children: getI18nString("figmake.supabase.pausing_project.subtitle")
    }), jsx(Button, {
      variant: "secondary",
      onClick: () => e.onClose(),
      disabled: !0,
      children: getI18nString("figmake.pause_project_modal.button.cancel")
    }), jsx(lV, {
      variant: "destructive",
      children: getI18nString("figmake.pause_project_modal.button.loading")
    })]
  }) : jsxs(Fragment, {
    children: [jsx(Button, {
      variant: "secondary",
      onClick: () => e.onClose(),
      children: getI18nString("figmake.pause_project_modal.button.cancel")
    }), jsx(Button, {
      variant: "destructive",
      onClick: o,
      disabled: !t,
      children: getI18nString("figmake.pause_project_modal.button.submit")
    })]
  });
}
let U = {
  textBodyMediumStrong: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  textBodyMediumSecondary: {
    ..._$$g.textBodyMedium,
    color: "x1n0bwc9",
    $$css: !0
  }
};
let G = registerModal(function (e) {
  let t = useModalManager({
    ...e
  });
  let {
    organization
  } = mS();
  let {
    activeProjects
  } = YY();
  let s = useDispatch();
  let a = !!e.toolCallId && !!e.toolName;
  let [l, o] = useState(void 0);
  return jsx(ModalRootComponent, {
    manager: t,
    width: 394,
    children: jsxs(vo, {
      children: [jsxs(Y9, {
        children: [a && jsx(IconButton, {
          "aria-label": getI18nString("figmake.supabase.pause_project_modal.back"),
          onClick: () => {
            e.onClose();
            s(showModalHandler({
              type: _$$Z,
              data: {
                toolCallId: e.toolCallId,
                toolName: e.toolName,
                trackingContext: e.trackingContext,
                source: e.source
              },
              showModalsBeneath: !0
            }));
          },
          children: jsx(_$$C, {})
        }), jsx(hE, {
          children: getI18nString("figmake.pause_project_modal.title")
        })]
      }), jsx(nB, {
        scrolling: "none",
        children: jsxs("div", {
          className: "x78zum5 xdt5ytf xou54vl",
          children: [jsx("div", {
            children: renderI18nText("figmake.pause_project_modal.body_with_link", {
              upgradeLink: jsx(_$$N, {
                href: $X(organization?.id || ""),
                newTab: !0,
                children: getI18nString("figmake.pause_project_modal.upgrade_link")
              })
            })
          }), jsx(q, {
            activeProjects,
            projectIdToPause: l,
            setProjectIdToPause: o
          })]
        })
      }), jsx(wi, {
        children: jsx(jk, {
          className: "x78zum5 x1q0g3np x13a6bvl x167g77z xhxeiv9 xh8yej3 x9f619",
          children: jsx(P, {
            props: e,
            projectIdToPause: l
          })
        })
      })]
    })
  });
}, "PauseProjectModal");
function H({
  toolCallId: e,
  toolName: t,
  connectToExistingProject: n,
  trackingContext: r,
  source: i
}) {
  let s = useDispatch();
  return () => s(showModalHandler({
    type: G,
    data: {
      toolCallId: e,
      toolName: t,
      connectToExistingProject: n,
      trackingContext: r,
      source: i
    },
    showModalsBeneath: !0
  }));
}
let W = {
  textBodyMedium: {
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
let V = registerModal(function (e) {
  let t = useModalManager(e);
  let n = h5({
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    trackingContext: e.trackingContext,
    source: e.source
  });
  return jsx(ModalRootComponent, {
    manager: t,
    width: 386,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("figmake.supabase_cost_warning_modal.title")
        })
      }), jsx(nB, {
        children: jsx("div", {
          children: jsxs("p", {
            ...Ay.props(W.textBodyMedium),
            children: [getI18nString("figmake.supabase_cost_warning_modal.body"), " ", jsx(_$$N, {
              href: Sy,
              newTab: !0,
              children: getI18nString("general.learn_more")
            })]
          })
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          className: "x78zum5 x1q0g3np x13a6bvl x167g77z xhxeiv9 xh8yej3 x9f619",
          children: [jsx(Button, {
            variant: "secondary",
            onClick: e.onClose,
            children: getI18nString("figmake.supabase.cancel")
          }), jsx(Button, {
            variant: "destructive",
            onClick: () => {
              e.onClose();
              n();
            },
            children: getI18nString("figmake.supabase_cost_warning_modal.submit")
          })]
        })
      })]
    })
  });
}, "SupabaseCostWarningModal");
export function $$X0({
  onSubmit: e,
  toolCallId: t,
  toolName: n,
  trackingContext: a,
  source: l
}) {
  let {
    existingProjects,
    isLoading
  } = tE();
  let u = function ({
    onSubmit: e,
    toolCallId: t,
    toolName: n,
    trackingContext: r,
    source: i
  }) {
    let {
      needsToPauseProject
    } = Lz();
    let a = h5({
      toolCallId: t,
      toolName: n,
      trackingContext: r,
      source: i
    });
    let l = H({
      toolCallId: t,
      toolName: n,
      trackingContext: r,
      source: i
    });
    let o = function ({
      toolCallId: e,
      toolName: t,
      trackingContext: n,
      source: r
    }) {
      let i = useDispatch();
      return () => i(showModalHandler({
        type: V,
        data: {
          toolCallId: e,
          toolName: t,
          trackingContext: n,
          source: r
        },
        showModalsBeneath: !0
      }));
    }({
      toolCallId: t,
      toolName: n,
      trackingContext: r,
      source: i
    });
    let c = function () {
      let {
        organization
      } = mS();
      return organization?.plan !== "free";
    }();
    return () => {
      if (e && e(), c) {
        o();
        return;
      }
      if (needsToPauseProject) {
        l();
        return;
      }
      a();
    };
  }({
    onSubmit: e,
    toolCallId: t,
    toolName: n,
    trackingContext: a,
    source: l
  });
  if (isLoading) return jsx(_$$k, {});
  let x = existingProjects.filter(e => e.status.toLowerCase() !== TL.REMOVED);
  return jsxs("div", {
    children: [jsx(ButtonPrimitive, {
      "aria-label": getI18nString("figmake.settings.connect_existing_project.create_project.button"),
      onClick: u,
      children: jsxs("div", {
        className: "x78zum5 x1q0g3np x6s0dn4 x1v2ro7d",
        children: [jsx(Z, {}), jsx("p", {
          ...Ay.props(Q.textBodyMediumStrong),
          children: getI18nString("figmake.settings.connect_existing_project.create_project.button")
        })]
      })
    }), jsx("div", {
      className: "xyamay9 x1l90r2v",
      children: jsx(cG, {})
    }), jsx("div", {
      className: "x78zum5 xdt5ytf xou54vl xl56j7k x1cy8zhl",
      children: x.map(i => jsx(Y, {
        project: i,
        onSubmit: e,
        toolCallId: t,
        toolName: n,
        trackingContext: a,
        source: l
      }, i.id))
    })]
  });
}
function Y({
  project: e,
  onSubmit: t,
  toolCallId: n,
  toolName: i,
  trackingContext: s,
  source: l
}) {
  let o = e.status.toLowerCase() === TL.INACTIVE || e.status.toLowerCase() === TL.PAUSING;
  let b = function ({
    onSubmit: e,
    project: t,
    isPaused: n,
    toolCallId: r,
    toolName: i,
    source: s,
    trackingContext: a
  }) {
    let {
      needsToPauseProject
    } = Lz();
    let o = useCurrentFileKey();
    let {
      organization
    } = mS();
    let x = organization?.id;
    let [, m] = setupResourceAtomHandler(TT({
      fileKey: o
    }));
    let [, b] = setupResourceAtomHandler(YF({
      fileKey: o
    }));
    let v = _$$S();
    let k = Xr(Kj);
    let C = async () => {
      if (!o || !x) {
        console.error("No open file key or organization ID found");
        return;
      }
      e && e();
      k({
        project: t,
        state: "connecting"
      });
      try {
        await _$$R.connectFile({
          fileKey: o,
          supabaseProjectId: t.id,
          supabaseOrgId: x
        });
      } catch (e) {
        AW(e);
        k(null);
      }
      if (uF(a || {
        persistentEntityId: "",
        clientLifecycleId: ""
      }, s, o, "existing"), await m.refetch(), n) {
        try {
          await _$$R.restoreFile({
            fileKey: o
          });
        } catch (e) {
          oT(e);
          k(null);
        }
        E();
      } else S();
    };
    let E = () => {
      let e = setInterval(async () => {
        let t = await liveStoreInstance.fetch(TT({
          fileKey: o
        }), {
          policy: "networkOnly"
        });
        t?.connectedProject?.status.toLowerCase() === TL.ACTIVE_HEALTHY && (clearInterval(e), S(), b.refetch());
      }, 2e3);
    };
    let S = () => {
      k(null);
      r && i && v({
        toolCallId: r,
        toolName: i,
        toolResult: {
          success: !0,
          message: "Connected to Supabase."
        }
      });
    };
    let N = H({
      toolCallId: r,
      toolName: i,
      connectToExistingProject: C,
      trackingContext: a,
      source: s
    });
    return async () => {
      n && needsToPauseProject ? (e && e(), N()) : await C();
    };
  }({
    project: e,
    isPaused: o,
    onSubmit: t,
    toolCallId: n,
    toolName: i,
    trackingContext: s,
    source: l
  });
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x1v2ro7d xh8yej3",
    children: [jsx(mj, {
      variant: "existing_project",
      inactive: o
    }), jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib x6s0dn4 x1v2ro7d xh8yej3",
      children: [jsxs("div", {
        className: "x78zum5 xdt5ytf x1cy8zhl",
        children: [jsx("p", {
          ...Ay.props(Q.textBodyMediumStrong),
          children: e.name
        }), jsxs("div", {
          className: "x78zum5 x1q0g3np x1cy8zhl x1jnr06f",
          children: [jsx(J, {
            isPaused: o
          }), jsx("span", {
            children: "\xb7"
          }), jsx("span", {
            ...Ay.props(Q.textBodyMediumSecondary),
            children: renderI18nText("figmake.settings.pause_project.created", {
              timestamp: jsx(h1, {
                date: e.created_at
              })
            })
          })]
        })]
      }), jsx(Button, {
        variant: "secondary",
        onClick: b,
        children: getI18nString("figmake.settings.connect_existing_project.project.button")
      })]
    })]
  }, e.id);
}
function J({
  isPaused: e
}) {
  return e ? jsx("span", {
    ...Ay.props(Q.textBodyMediumSecondaryStrong),
    children: getI18nString("figmake.settings.connect_existing_project.status.project.paused")
  }) : jsx("span", {
    ...Ay.props(Q.textBodyMediumSuccessStrong),
    children: getI18nString("figmake.settings.connect_existing_project.status.project.active")
  });
}
function Z() {
  return jsx("div", {
    className: "x78zum5 x1td3qas x10w6t97 xfawy5m xl56j7k x6s0dn4 x1sxf85j x6ce33m",
    children: jsx(e, {})
  });
}
let Q = {
  textBodyMediumSecondary: {
    ..._$$g.textBodyMedium,
    color: "x1n0bwc9",
    $$css: !0
  },
  textBodyMediumSecondaryStrong: {
    ..._$$g.textBodyMediumStrong,
    color: "x1n0bwc9",
    $$css: !0
  },
  textBodyMediumSuccessStrong: {
    ..._$$g.textBodyMediumStrong,
    color: "xq6u9c4",
    $$css: !0
  },
  textBodyMediumStrong: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  }
};
export const K = $$X0;