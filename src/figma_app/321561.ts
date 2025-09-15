import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { permissionScopeHandler } from "../905/189185";
import { getI18nString } from "../905/303541";
import { mG } from "../figma_app/15924";
import { getBuyOrSubscribeLabel } from "../figma_app/808294";
import { v as _$$v } from "../905/581647";
import { showModalHandler } from "../905/156213";
import { Q7 } from "../905/15667";
import { a as _$$a } from "../figma_app/453187";
import { Gt } from "../figma_app/248118";
import { V2 } from "../figma_app/844435";
import { EO, OY, gn, ej } from "../figma_app/86989";
import { RW } from "../figma_app/684168";
import { j } from "../905/813868";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { getUserId } from "../905/372672";
import { R as _$$R } from "../figma_app/612938";
import { ShelfViewType } from "../figma_app/45218";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { manifestContainsWidget } from "../figma_app/155287";
import { Kp } from "../figma_app/189990";
import { q8, U4, S3 } from "../figma_app/254872";
import { S as _$$S } from "../905/404161";
import { t as _$$t2 } from "../figma_app/198180";
import { cq } from "../905/794154";
export function $$O0({
  augmentedExtension: e,
  submenuRef: t,
  displayAboveTarget: r
}) {
  let {
    extension,
    publishedExtension,
    canRun,
    canRequest
  } = e;
  let D = useDispatch();
  let {
    close
  } = cq();
  let M = EO(publishedExtension);
  let F = OY(publishedExtension);
  let j = F && gn(publishedExtension);
  let U = Kp(e);
  let B = function (e) {
    let t = getUserId();
    let r = useSelector(e => e.authedActiveCommunityProfile);
    let a = ej(e);
    return useCallback(() => {
      if (!e) return;
      let n = ShelfViewType.QUICK_ACTIONS;
      mG(e, n, t, r?.id);
      a();
    }, [e, t, r, a]);
  }(publishedExtension);
  let G = useCallback(() => {
    D(_$$v({}));
  }, [D]);
  let V = Gt(extension.plugin_id, "quick-actions");
  let H = q8(extension);
  let z = U4(extension);
  let W = S3({
    submenuIsShown: z,
    extension,
    displayAboveTarget: r
  });
  let K = _$$t2(extension, H);
  let Y = V2();
  let $ = useCallback(() => {
    close();
    _$$R.instance.handleUpgrade(Q7.RUN_PLUGIN);
  }, [close]);
  let X = useCallback(() => {
    manifestContainsWidget(extension) ? permissionScopeHandler.user("insert-widget", () => R(extension)) : H && t ? W(t.current) : V();
    H || U();
    K() && close();
  }, [extension, H, t, U, K, W, V, close]);
  let q = selectCurrentFile();
  let J = RW();
  let Z = useCallback(() => {
    if (!q || !q.parentOrgId) return;
    let e = {
      extension: {
        pluginId: extension.plugin_id,
        iconUrl: extension.redirect_icon_url,
        name: extension.name
      },
      isWidget: manifestContainsWidget(extension),
      orgId: q.parentOrgId,
      workspaceDetails: J.loaded ? J.data : void 0,
      openedFrom: "editor",
      fullscreenEditorType: mapFileTypeToEditorType(q.editorType)
    };
    D(showModalHandler({
      type: _$$S,
      data: e
    }));
  }, [D, extension, q, J]);
  let Q = useCurrentUserOrg();
  let ee = _$$a(Q?.id, extension.plugin_id, J.loaded ? J.data?.workspaceId : void 0);
  return useMemo(() => {
    let e = publishedExtension?.monetized_resource_metadata;
    return M && !F && e ? Y ? {
      onAction: B,
      actionText: getBuyOrSubscribeLabel(e)
    } : {
      onAction: $,
      actionText: getBuyOrSubscribeLabel(e)
    } : M && j ? {
      onAction: G,
      actionText: getI18nString("qa.extensions.update_payment")
    } : canRun ? {
      onAction: X,
      actionText: getI18nString("qa.extensions.run")
    } : ee ? {
      onAction: () => {},
      actionText: getI18nString("qa.extensions.approval_pending")
    } : canRequest ? {
      onAction: Z,
      actionText: getI18nString("qa.extensions.request_approval")
    } : {
      onAction: () => {},
      actionText: ""
    };
  }, [M, F, publishedExtension, B, j, G, canRun, canRequest, ee, Z, X, $, Y]);
}
let R = e => {
  j({
    pluginID: e.plugin_id,
    widgetName: e.name,
    pluginVersionID: e.id,
    triggeredFrom: "quick-actions"
  });
};
export const m = $$O0;