import { useCallback } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IAssertResource, UIVisibilitySetting, DesignWorkspace } from "../figma_app/763686";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { globalPerfTimer } from "../905/542194";
import { getFilteredFeatureFlags } from "../905/717445";
import { Rs } from "../figma_app/288654";
import { _I, U4 } from "../figma_app/473493";
import { Ym } from "../figma_app/806075";
import { W as _$$W } from "../905/200727";
import { d as _$$d } from "../905/692836";
import { t as _$$t, c as _$$c } from "../905/722657";
import { r as _$$r } from "../905/12476";
import { sf } from "../905/929976";
import { Y6 } from "../figma_app/91703";
import { IN, pM, KE } from "../905/116101";
import { b as _$$b } from "../905/985254";
import { E3 } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { setSelectedDevModePropertiesPanelTab, getSelectedDevModePropertiesPanelTab, setPropertiesPanelTab } from "../figma_app/741237";
import { tS } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { FileCanEdit } from "../figma_app/43951";
import { getPluginMetadata, getPluginVersion, isDevModePlugin } from "../figma_app/300692";
import { Nb, V_, Eg } from "../figma_app/841351";
import { FEditorType } from "../figma_app/53721";
import { lF } from "../figma_app/915202";
import { ManifestEditorType } from "../figma_app/155287";
import { cq } from "../905/794154";
import { s as _$$s } from "../figma_app/504088";
import { R as _$$R } from "../905/300969";
import { c as _$$c2 } from "../905/580030";
export function $$k0(e, t) {
  let r = useDispatch();
  let [k, M] = useAtomValueAndSetter(_$$R);
  let [F, j] = useAtomValueAndSetter(_$$c2);
  let U = tS() ?? "";
  let B = Rs(FileCanEdit, {
    key: U
  })?.data?.file?.hasPermission;
  let G = _I();
  let V = U4();
  let H = useAtomWithSubscription(_$$d)?.data;
  let [z, W] = useAtomValueAndSetter(_$$t);
  let K = useSelector(e => e.selectedView);
  let Y = useSelector(e => e.mirror.appModel.prototypeCanvasUiVisible);
  let $ = !selectCurrentUser();
  let X = E3();
  let q = X === FEditorType.DevHandoff;
  let J = X === FEditorType.Illustration;
  let Z = q ? "handoff" : J ? "illustration" : "design";
  let Q = useStore();
  let ee = _$$W();
  let {
    close
  } = cq();
  return useCallback(n => {
    if (M(!1), j(!1), $ || n === Z) return !1;
    if (close(), "handoff" === n) {
      let n;
      if (!V) return !1;
      globalPerfTimer.start("switch_to_inspect_mode.left_panel_tti");
      globalPerfTimer.start("switch_to_inspect_mode.right_panel_tti");
      let i = Q.getState();
      if (i.universalInsertModal.showing && (setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN), i.universalInsertModal.fdPreviewResource)) {
        let e = getPluginMetadata(i.universalInsertModal.fdPreviewResource.id, i.publishedPlugins);
        let t = getPluginVersion(e);
        isDevModePlugin(t) && (n = {
          id: i.universalInsertModal.fdPreviewResource.id,
          type: _$$s.PLUGIN
        });
      }
      r(sf({
        ...K,
        view: "fullscreen",
        editorType: FEditorType.DevHandoff
      }));
      "fullscreen" === K.view && K.compareVersionId && (r(Y6({
        mode: UIVisibilitySetting.KEEP_UI,
        type: lF.SPINNER
      })), r(Nb({
        id: K.compareVersionId
      })));
      Y && fullscreenValue.triggerAction("toggle-prototyping-info");
      n && r(IN({
        fdPreviewResource: n
      }));
      Ym(i, FEditorType.DevHandoff, e, t, ee);
      return !0;
    }
    if ("illustration" === n) {
      if (!getFilteredFeatureFlags().ce_il_root) return !1;
      globalPerfTimer.start("switch_to_illustration_mode.right_panel_tti");
      globalPerfTimer.start("switch_to_illustration_mode.toolbelt_animation");
      let n = Q.getState();
      r(sf({
        ...K,
        view: "fullscreen",
        editorType: FEditorType.Illustration
      }));
      r(_$$r);
      Ym(n, FEditorType.Illustration, e, t, ee);
      return !0;
    }
    {
      globalPerfTimer.start("switch_to_design_mode.toolbelt_animation");
      let n = Q.getState();
      if (getSelectedDevModePropertiesPanelTab()?.getCopy() === IAssertResource.PLUGIN && n.universalInsertModal.fdPreviewResource) {
        let e = getPluginMetadata(n.universalInsertModal.fdPreviewResource.id, n.publishedPlugins);
        let t = getPluginVersion(e);
        t?.manifest?.editorType?.includes(ManifestEditorType.FIGMA) && r(pM({
          id: n.universalInsertModal.fdPreviewResource.id,
          isWidget: !1
        }));
      }
      "fullscreen" === K.view && K.devModeFocusId && n.versionHistory.activeId && n.versionHistory.activeId !== V_ && r(Eg());
      r(sf({
        ...K,
        view: "fullscreen",
        editorType: FEditorType.Design,
        devModeFocusId: void 0,
        showDevModeVariablesTable: void 0
      }));
      r(KE());
      G || (H || r(_$$b({
        dev_mode_should_see_paywall_reminder: !0
      })), B || setPropertiesPanelTab(DesignWorkspace.INSPECT), W(_$$c.DEFAULT));
      Ym(Q.getState(), FEditorType.Design, e, t, ee);
      return !0;
    }
  }, [M, j, $, Z, V, Q, r, K, Y, e, t, ee, G, H, B, W, close]);
}
export const U = $$k0;