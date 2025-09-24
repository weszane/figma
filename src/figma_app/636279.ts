import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { updateModal } from "../905/156213";
import { MH, dM } from "../figma_app/803787";
import { selectComponentAssetsMap, selectStateGroupAssetsMap } from "../figma_app/645694";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { useComponentFlyoutModal, COMPONENT_FLYOUT_MODAL_TYPE } from "../figma_app/608944";
export function $$u0(e, t, r) {
  let o = useDispatch();
  let l = useSelector(e => e.modalShown);
  let {
    isFlyoutOpen,
    updateFlyoutProps
  } = useComponentFlyoutModal();
  return useCallback(() => {
    if (getFeatureFlags().dse_fpl_wave_2) isFlyoutOpen && updateFlyoutProps({
      asset: e,
      sectionPosition: t,
      sectionNameForTracking: r
    });else {
      if (l?.type !== COMPONENT_FLYOUT_MODAL_TYPE || !l?.data) return;
      o(updateModal({
        data: {
          ...l?.data,
          asset: e,
          sectionPosition: t,
          sectionNameForTracking: r
        },
        type: COMPONENT_FLYOUT_MODAL_TYPE
      }));
    }
  }, [isFlyoutOpen, updateFlyoutProps, e, t, r, l?.type, l?.data, o]);
}
export function $$p1(e) {
  let t = useSelector(selectComponentAssetsMap);
  let r = useSelector(selectStateGroupAssetsMap);
  let n = useSelector(MH);
  let a = useSelector(dM);
  if (e.type === PrimaryWorkflowEnum.COMPONENT) {
    let r = e.isLocal ? n[e.node_id] : e.component_key ? t[e.component_key] : void 0;
    return !!r && r.content_hash !== e.content_hash;
  }
  if (e.type === PrimaryWorkflowEnum.STATE_GROUP) {
    let t = e.isLocal ? a[e.node_id] : e.key ? r[e.key] : void 0;
    return !!t && t.version !== e.version;
  }
  return !1;
}
export const J = $$u0;
export const S = $$p1;