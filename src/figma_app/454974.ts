import { jsx } from "react/jsx-runtime";
import { _YF } from "../figma_app/822011";
import { ActionType } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { openFileAtom } from "../figma_app/516028";
import { hasJubileePermissionForWhiteboard } from "../figma_app/251115";
import { JT } from "../figma_app/632248";
import { B3, Ag } from "../figma_app/862289";
import { Sn } from "../905/946805";
import { $I } from "../figma_app/322845";
import { A } from "../905/51743";
import { NB, jX, Ay } from "../905/281495";
export function $$f2(e, t = !1) {
  let r = [];
  t ? e.map(e => {
    let t = getSingletonSceneGraph().get(e);
    t && t.visible && 0 !== t.opacity && r.push(t);
  }) : e.forEach(e => {
    let t = getSingletonSceneGraph().get(e);
    t && t.visible && 0 !== t.opacity && function e(t, r) {
      if (t.visible && 0 !== t.opacity) for (let n of (r.push(t), t.childrenNodes ?? [])) e(n, r);
    }(t, r);
  });
  let n = r.length > NB;
  let i = [];
  r.map(e => {
    if (jX(e, !1)) return i.push(e.guid);
  });
  return {
    detectedUnnamedLayers: i.length > 0,
    exceedingLayerLimit: n,
    renamableNodeGuids: i
  };
}
export function $$E3(e) {
  let {
    detectedUnnamedLayers,
    exceedingLayerLimit,
    renamableNodeGuids
  } = $$f2(e);
  detectedUnnamedLayers && !exceedingLayerLimit && $I({
    moduleToOpen: {
      type: "custom",
      module: jsx(A, {
        source: ActionType.READY_FOR_DEV,
        numRenamableNodesForHandoff: renamableNodeGuids.length
      }),
      beforeModuleOpen: () => {
        B3(JT.AUTO_RENAME_LAYERS);
      },
      name: Sn.RENAME_LAYERS_TOAST
    },
    trackingData: {
      source: "ready_for_dev_auto_rename_layers"
    }
  });
}
export function $$y1({
  source: e,
  trackingDataSource: t
}) {
  $I({
    moduleToOpen: {
      type: "custom",
      module: jsx(A, {
        source: e
      }),
      beforeModuleOpen: () => {
        B3(JT.AUTO_RENAME_LAYERS);
        e !== ActionType.LAYERS_PANEL_OVERFLOW_MENU && Ag(JT.AUTO_RENAME_LAYERS, Ay, {
          source: e,
          overwriteNames: !1
        });
      },
      name: Sn.RENAME_LAYERS_TOAST
    },
    trackingData: {
      source: t
    }
  });
}
export function $$b0(e) {
  if (!hasJubileePermissionForWhiteboard()) return !1;
  let t = atomStoreManager.get(openFileAtom);
  if (!t?.canEdit || t.editorType !== _YF.DESIGN) return !1;
  switch (e) {
    case ActionType.READY_FOR_DEV:
      return !!getFeatureFlags().aip_rename_layers_ready_for_dev;
    case ActionType.EXPORT_FRAME:
    case ActionType.EXPORT_PICKER:
      return !!getFeatureFlags().ai_prod_rename_layers_dev_export;
    case ActionType.CREATE_COMPONENT:
    case ActionType.CREATE_FRAME:
    case ActionType.DRAW_FRAME_AROUND_NODES:
    case ActionType.STACK_SELECTION:
      return !!getFeatureFlags().ai_prod_rename_layers_moments;
    case ActionType.LAYERS_PANEL_ACTION_ROW:
      return !!getFeatureFlags().aip_lpe;
    case ActionType.LAYERS_PANEL_OVERFLOW_MENU:
      return !!getFeatureFlags().aip_lpe_overflow;
    default:
      return !1;
  }
}
export const A0 = $$b0;
export const Br = $$y1;
export const Mc = $$f2;
export const R4 = $$E3;
export const sq = function e(t) {
  if (!t.visible || 0 === t.opacity) return !1;
  if (jX(t, !1)) return !0;
  for (let r of t.childrenNodes ?? []) if (e(r)) return !0;
  return !1;
};