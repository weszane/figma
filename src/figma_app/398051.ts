import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { B } from "../905/872019";
import { _ as _$$_ } from "../905/862468";
import { PrototypingTsApi, DesignWorkspace, ActionType } from "../figma_app/763686";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { KeyCodes, ModifierKeyCodes } from "../905/63728";
import { renderI18nText, getI18nString } from "../905/303541";
import { Tv } from "../figma_app/311375";
import { fullscreenValue } from "../figma_app/455680";
import { Ay } from "../905/281495";
import { getPropertiesPanelTab, setPropertiesPanelTab, replaceSelection } from "../figma_app/741237";
import { getObservableValue } from "../figma_app/84367";
import { Zh } from "../figma_app/2590";
import { Yh } from "../figma_app/357047";
import { d as _$$d } from "../figma_app/550089";
import { ft, sT, _U } from "../figma_app/365713";
import { d_, pD } from "../905/727576";
import { e as _$$e } from "../905/462154";
import { JT, Xy } from "../figma_app/632248";
import { RL, qy, cT, Ag, B3 } from "../figma_app/862289";
import { cq } from "../905/794154";
import { Sn } from "../905/946805";
import { $I } from "../figma_app/322845";
import { A as _$$A } from "../905/51743";
import { E as _$$E } from "../905/690713";
import { u as _$$u } from "../905/704456";
import { A as _$$A2 } from "../905/721854";
import { F as _$$F } from "../905/382217";
import { h as _$$h } from "../905/372422";
export function $$M1() {
  return jsx(_$$d, {
    children: jsx(j, {})
  });
}
function F(e) {
  return PrototypingTsApi.getMagicLinkSelectionInfo().selectedDisplayAmount;
}
function j() {
  let e = useDispatch();
  let t = RL(JT.MAGIC_LINK, _$$e);
  let {
    start,
    stop,
    state,
    aiTrackingContext
  } = t;
  let {
    close
  } = cq();
  let g = useRef(null);
  let b = getObservableValue(getPropertiesPanelTab(), DesignWorkspace.DESIGN);
  useEffect(() => {
    state === qy.INITIAL && null === g.current && (g.current = b, setPropertiesPanelTab(DesignWorkspace.PROTOTYPE));
  }, [state, b]);
  useEffect(() => () => {
    state === qy.INITIAL && null !== g.current && setPropertiesPanelTab(g.current);
  }, [state]);
  let T = Xr(d_);
  let C = Xr(pD);
  let w = useAtomWithSubscription(pD);
  let {
    selectedDisplayAmount,
    tlfAmount,
    onlyTopLevelNodesSelected,
    topLevelFrameIds
  } = PrototypingTsApi.getMagicLinkSelectionInfo();
  let G = !onlyTopLevelNodesSelected;
  switch (useEffect(() => {
    if (state === qy.RUNNING && G) {
      replaceSelection(topLevelFrameIds);
      C(renderI18nText("magic_link.running_and_selecting_top_level_frames"));
      let e = setTimeout(() => {
        C(renderI18nText("magic_link.running"));
      }, 1e3);
      return () => clearTimeout(e);
    }
  }, [C, G, state, topLevelFrameIds]), state) {
    case qy.INITIAL:
      return jsx(_$$A2, {
        action: JT.MAGIC_LINK,
        actionIcon: jsx(B, {}),
        actionLabel: renderI18nText("fullscreen_actions.quick_actions.add-interactions-v2"),
        onPerform: () => {
          g.current = null;
          start({});
        },
        getCustomDisabledTextFromSelectedNodes: t => {
          let r;
          let n;
          tlfAmount > 10 && (r = renderI18nText("magic_link.tlf_selection_too_large"), n = "Select 10 or fewer frames");
          n && e(Zh({
            name: "prototype.ai_magic_link_action_instruction",
            params: {
              instruction: n,
              numSelectedNodes: selectedDisplayAmount,
              numSelectedTlfs: tlfAmount
            }
          }));
          return r;
        },
        getCustomSelectedNodesAmount: F,
        aiTrackingContext,
        instructionAction: {
          type: "learn_more",
          url: Xy
        },
        children: renderI18nText("magic_link.select_a_few_top_level_frames")
      });
    case qy.RUNNING:
      T(!1);
      fullscreenValue.triggerAction("start-magic-link");
      return jsx(_$$F, {
        onCancel: () => {
          stop();
          close();
        },
        aiTrackingContext,
        children: w
      });
    case qy.DONE:
      return jsx(_$$h, {
        magicLinkOutput: t.result,
        aiTrackingContext
      });
    case qy.ERROR:
      if (fullscreenValue.triggerAction("end-magic-link"), t.error instanceof ft) {
        e(Zh({
          name: "prototype.ai_magic_link_custom_error",
          params: {
            error: "invalid_selection_from_generic_layers"
          }
        }));
        return jsx(U, {});
      }
      if (t.error instanceof sT) {
        e(Zh({
          name: "prototype.ai_magic_link_custom_error",
          params: {
            error: "no_interactions_generated"
          }
        }));
        return jsx(_$$u, {
          children: renderI18nText("magic_link.no_interactions_generated_general")
        });
      }
      if (t.error instanceof _U) {
        e(Zh({
          name: "prototype.ai_magic_link_custom_error",
          params: {
            error: "no_interactions_generated_existing_interactions"
          }
        }));
        return jsx(_$$u, {
          children: renderI18nText("magic_link.no_interactions_generated_existing_interactions")
        });
      }
      return jsx(_$$E, {
        error: t.error,
        aiTrackingContext
      });
    case qy.CANCELLED:
      fullscreenValue.triggerAction("end-magic-link");
      return null;
    default:
      throwTypeError(state);
  }
}
function U() {
  let e = Tv();
  return jsx(_$$u, {
    buttons: [{
      label: getI18nString("fullscreen.context_menu.auto_rename_layers"),
      onClick: () => {
        $I({
          moduleToOpen: {
            type: "custom",
            module: jsx(_$$A, {
              source: ActionType.MAGIC_LINK
            }),
            name: Sn.RENAME_LAYERS_TOAST,
            beforeModuleOpen: () => {
              cT(JT.MAGIC_LINK);
              Yh(debugState.getState().mirror.appModel, JT.AUTO_RENAME_LAYERS) && Ag(JT.AUTO_RENAME_LAYERS, Ay, {
                source: ActionType.MAGIC_LINK,
                overwriteNames: !1
              });
            }
          },
          trackingData: {
            source: "magic_link_rename_layers_suggestion_toast"
          }
        });
      },
      variant: "secondary",
      iconPrefix: jsx(_$$_, {}),
      shortcuts: [{
        key: KeyCodes.ENTER,
        modifier: [ModifierKeyCodes.META]
      }]
    }],
    children: renderI18nText(1 === e.length ? "magic_link.rename_layer_suggestion" : "magic_link.rename_layers_suggestion")
  });
}
export function $$B0(e) {
  let t = debugState.dispatch;
  let r = Yh(debugState.getState().mirror.appModel, JT.MAGIC_LINK);
  $I({
    moduleToOpen: {
      type: "custom",
      module: jsx($$M1, {}),
      name: Sn.MAGIC_LINK,
      beforeModuleOpen: () => {
        t(Zh({
          name: "prototype.ai_magic_link_entry_clicked",
          params: {
            source: "quick_actions_suggestion"
          }
        }));
        B3(JT.MAGIC_LINK);
        r && Ag(JT.MAGIC_LINK, _$$e, e);
      }
    },
    trackingData: {
      source: "prototype_magic_link_triggered"
    }
  });
}
export const g = $$B0;
export const p = $$M1;