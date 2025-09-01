import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useCallback } from "react";
import { xb } from "../figma_app/465776";
import { _ as _$$_ } from "../905/862468";
import { k as _$$k } from "../905/727631";
import { uQ6, glU } from "../figma_app/763686";
import { Uz, xH } from "../905/63728";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t } from "../905/303541";
import { B as _$$B } from "../905/969273";
import { sZ } from "../figma_app/948389";
import { jX, Ay, NB, BT, tS, eJ } from "../905/281495";
import { I9 } from "../figma_app/151869";
import { JT, gj } from "../figma_app/632248";
import { pP, qy, RL, z8 } from "../figma_app/862289";
import { cq } from "../905/794154";
import { ID } from "../905/487011";
import { lc, dk, $J } from "../905/278499";
import { r as _$$r } from "../905/189361";
import { B as _$$B2 } from "../905/222272";
import { y as _$$y } from "../905/236825";
import { f as _$$f, E as _$$E } from "../905/690713";
import { u as _$$u } from "../905/704456";
import { A as _$$A } from "../905/721854";
import { is, Oq } from "../905/904596";
import { F } from "../905/382217";
import { J } from "../905/614223";
import { h as _$$h } from "../905/207101";
import { y as _$$y2 } from "../figma_app/13082";
function P({
  actionIcon: e,
  onPerform: t,
  onDismissAndClose: i,
  numRenamableNodes: a,
  aiTrackingContext: s,
  actionLabel: o
}) {
  let l = pP(JT.AUTO_RENAME_LAYERS);
  let p = I9();
  _$$h(() => {
    s && ID({
      ...s,
      interaction: lc.VIEW,
      interaction_type: dk.VIEW
    });
  });
  useEffect(() => {
    p && 0 !== p.length || l.state !== qy.INITIAL || i();
  }, [i, p, l.state]);
  return jsx(_$$y, {
    onDismiss: i,
    children: jsx(J, {
      brand: "dev-handoff",
      children: jsxs(_$$B2, {
        justify: "space-between",
        align: "center",
        fullWidth: !0,
        children: [jsxs("div", {
          className: _$$s.flex.itemsCenter.gap4.$,
          children: [jsx("div", {
            className: _$$s.w24.h24.flex.itemsCenter.justifyCenter.$,
            children: jsx("div", {
              style: {
                "--color-icon": "var(--color-icon-brand)"
              },
              className: _$$s.flex.justifyCenter.itemsCenter.$,
              children: e
            })
          }), jsx("span", {
            className: _$$s.textBodyMediumStrong.colorTextBrand.$,
            children: tx("auto_rename_layers.missing_n_layer_names", {
              n: a
            })
          }), jsx(_$$y2, {
            helpUrlVariant: JT.AUTO_RENAME_LAYERS
          })]
        }), jsx(_$$B2, {
          justify: "space-between",
          align: "center",
          gap: 8,
          children: jsx(_$$r, {
            onAction: t,
            variant: "secondary",
            recordingKey: "instructionView",
            shortcuts: [{
              key: Uz.ENTER,
              modifier: [xH.META]
            }],
            children: o
          })
        })]
      })
    })
  });
}
function O({
  nodes: e,
  onlyRenamable: t
}) {
  let i = 0;
  for (let n of e) {
    (!t || jX(n, !0)) && i++;
    "INSTANCE" !== n.type && (i += O({
      nodes: n.childrenNodes,
      onlyRenamable: t
    }));
  }
  return i;
}
export function $$D0(e) {
  let {
    source
  } = e;
  let i = RL(JT.AUTO_RENAME_LAYERS, Ay);
  let {
    start,
    stop,
    state,
    aiTrackingContext,
    tasks
  } = i;
  let {
    close,
    pop
  } = cq();
  let j = useCallback((e = !1) => {
    start({
      source,
      overwriteNames: e
    });
  }, [start, source]);
  let U = I9();
  let B = -1;
  let V = -1;
  state === qy.INITIAL && (B = O({
    nodes: U || [],
    onlyRenamable: !0
  }), V = O({
    nodes: U || []
  }));
  let G = useCallback(() => {
    aiTrackingContext && ID({
      ...aiTrackingContext,
      interaction: lc.DISMISS,
      interaction_type: dk.BUTTON_CLICK
    });
    pop();
  }, [aiTrackingContext, pop]);
  let z = useCallback(() => {
    G();
    close();
  }, [G, close]);
  switch (state) {
    case qy.INITIAL:
      if (source === uQ6.READY_FOR_DEV) return jsx(P, {
        actionIcon: jsx(_$$_, {}),
        actionLabel: tx("auto_rename_layers.rename_layers", {
          numLayers: e.numRenamableNodesForHandoff
        }),
        onPerform: () => j(!1),
        aiTrackingContext,
        onDismissAndClose: z,
        numRenamableNodes: e.numRenamableNodesForHandoff
      });
      if (U && U.length > 0) {
        if (0 === B) return jsx(_$$y, {
          children: jsxs(_$$B2, {
            justify: "space-between",
            align: "center",
            fullWidth: !0,
            children: [jsx("div", {
              className: _$$s.flex.itemsCenter.gap4.ml8.$,
              children: jsx("span", {
                className: _$$s.textBodyMediumStrong.truncate.maxW150.$,
                children: tx("auto_rename_layers.error.no_nameable_items")
              })
            }), jsx(_$$r, {
              onAction: G,
              variant: "secondary",
              shortcuts: [{
                key: Uz.ESCAPE
              }],
              recordingKey: "cancel-instruction",
              children: tx("ai.cancel")
            })]
          })
        });
        if (V > NB) return jsx(_$$y, {
          children: jsxs(_$$B2, {
            justify: "space-between",
            align: "center",
            fullWidth: !0,
            children: [jsxs("div", {
              className: _$$s.flex.itemsCenter.gap4.ml8.$,
              children: [jsx("span", {
                className: _$$s.textBodyMediumStrong.truncate.maxW150.$,
                children: tx("auto_rename_layers.too_many_layers_selected")
              }), jsx("span", {
                className: _$$s.textBodyMedium.colorTextSecondary.$,
                children: tx("auto_rename_layers.too_many_layers_count", {
                  selected: V,
                  limit: NB
                })
              })]
            }), jsx(_$$r, {
              onAction: G,
              variant: "secondary",
              shortcuts: [{
                key: Uz.ESCAPE
              }],
              recordingKey: "cancel-instruction",
              children: tx("ai.cancel")
            })]
          })
        });
      }
      return jsx(_$$A, {
        action: JT.AUTO_RENAME_LAYERS,
        actionIcon: jsx(_$$_, {}),
        actionLabel: tx("fullscreen_actions.quick_actions.name-all-layers"),
        onPerform: j,
        aiTrackingContext,
        instructionAction: {
          type: "learn_more",
          url: gj
        },
        getCustomSelectedNodesAmount: e => O({
          nodes: e
        }),
        customLayersIcon: jsx(_$$k, {}),
        children: tx("auto_rename_layers.select_some_layers")
      });
    case qy.RUNNING:
      return jsx(F, {
        secondaryMessage: tx("auto_rename_layers.progress", {
          completed: i.tasks.filter(e => e.state === z8.SUCCEEDED).length,
          total: i.tasks.length
        }),
        onCancel: () => {
          stop();
          close();
        },
        aiTrackingContext,
        children: tx("auto_rename_layers.running")
      });
    case qy.ERROR:
      {
        let e;
        let {
          error
        } = i;
        if (error instanceof BT) return jsx(_$$u, {
          buttons: [{
            label: t("auto_rename_layers.rename_anyway"),
            onClick: () => {
              j(!0);
            },
            variant: "secondary",
            shortcuts: [{
              key: Uz.ENTER,
              modifier: [xH.META]
            }]
          }],
          children: tx("auto_rename_layers.error.no_nameable_items")
        });
        if (error instanceof tS) return jsx(_$$u, {
          children: tx("ai.error.no_layers_selected")
        });
        let r = [{
          type: _$$f.TRY_AGAIN,
          callback: j
        }];
        let a = null;
        error instanceof eJ && (e = tx("auto_rename_layers.too_many_layers_selected"), a = tx("auto_rename_layers.too_many_layers_count", {
          selected: error.layerCount,
          limit: NB
        }), r = []);
        sZ(error) === _$$B.UNSAFE_OR_HARMFUL_CONTENT && (r = []);
        return jsx(_$$E, {
          error,
          buttons: r,
          customMessage: e,
          aiTrackingContext,
          secondaryMessage: a
        });
      }
    case qy.DONE:
      {
        let e = tasks.filter(e => e.state === z8.FAILED).length;
        let r = [{
          type: is.UNDO,
          callback: () => {
            glU.triggerActionInUserEditScope("undo", {});
            close();
          }
        }];
        e > 0 && r.push({
          type: is.TRY_AGAIN,
          callback: j
        });
        return jsx(Oq, {
          iterateOptions: r,
          aiTrackingContext: {
            ...aiTrackingContext,
            iteration_view_type: $J.DEFAULT_SUCCESS
          },
          completionString: source === uQ6.READY_FOR_DEV && tx("auto_rename_layers.renamed_n_layers", {
            n: tasks.filter(e => e.state === z8.SUCCEEDED).length
          }),
          targets: i.tasks.map(e => e.taskId),
          children: e > 0 && tx("auto_rename_layers.could_not_rename_all_layers", {
            count: e
          })
        });
      }
    case qy.CANCELLED:
      return jsx(Fragment, {});
    default:
      xb(state);
  }
}
export const A = $$D0;