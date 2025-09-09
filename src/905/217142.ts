import { jsx } from "react/jsx-runtime";
import { useMemo, useId } from "react";
import { useDispatch } from "react-redux";
import { customHistory } from "../905/612521";
import { getI18nString } from "../905/303541";
import { s as _$$s } from "../905/328136";
import { B } from "../905/759157";
import { r as _$$r } from "../figma_app/896657";
import { le } from "../figma_app/11182";
import { showModalHandler } from "../905/156213";
import { Ro } from "../figma_app/564095";
import { BK } from "../905/848862";
import { sZ } from "../905/845253";
import { getUserId } from "../905/372672";
import { FMemberRoleType } from "../figma_app/191312";
import { useCurrentPlanUser, checkOrgUserPermission } from "../figma_app/465071";
import { w as _$$w } from "../figma_app/883622";
import { k2 } from "../figma_app/10554";
import { KM } from "../figma_app/224019";
import { YW, ho } from "../figma_app/870683";
import { H } from "../figma_app/441663";
import { j } from "../905/834956";
export function $$S2() {
  let e = getUserId();
  let t = sZ();
  let i = useCurrentPlanUser("useCanAdminOrgQuery");
  return useMemo(() => i.transform(i => !!t && !!e && checkOrgUserPermission(i, FMemberRoleType.ADMIN)), [i, t, e]);
}
export function $$w0() {
  let e = useId();
  return BK(`ORG_ADMIN_RESOURCE_DROPDOWN_${e}`);
}
export function $$C1(e) {
  let {
    publishedResource,
    targetRect
  } = e.dropdownData;
  let r = useDispatch();
  let h = getUserId();
  let g = $$S2();
  let _ = _$$s();
  let A = B();
  if (!targetRect) return null;
  let w = e => {
    e?.stopPropagation();
    r(showModalHandler({
      type: H,
      data: {
        plugin: publishedResource
      },
      showModalsBeneath: !0
    }));
  };
  let C = [KM.PERMISSIONS];
  let T = [];
  e.isFromDropdownButton || (T.push({
    displayText: getI18nString("general.open"),
    callback: (e, i, n, r) => {
      publishedResource.is_widget ? _(publishedResource, r) : A(publishedResource, r);
    }
  }), T.push({
    displayText: getI18nString("file_browser.open_in_new_tab"),
    callback: (e, i, n, r) => {
      publishedResource.is_widget ? customHistory.redirect(YW(publishedResource.id), "_blank") : customHistory.redirect(ho(publishedResource.id), "_blank");
    }
  }), T.push(_$$w));
  g.unwrapOr(!1) && ((Ro(publishedResource, h ?? "") || publishedResource.creator.id === h) && (C.push(KM.PUBLISH), T.push({
    displayText: publishedResource.is_widget ? getI18nString("community.plugins.edit_resource_details.widget") : getI18nString("community.plugins.edit_resource_details.plugin"),
    callback: (e, t, i, n) => k(KM.PUBLISH, n)
  })), T.push({
    displayText: getI18nString("universal_insert.manage_permissions"),
    callback: (e, t, i, n) => {
      k(KM.PERMISSIONS, n);
    }
  }), e.isFromDropdownButton && T.push(_$$w), T.push({
    displayText: getI18nString("community.resource.unpublish"),
    callback: (e, t, i, n) => w(n)
  }));
  e.isFromDropdownButton || T.push(_$$w, {
    displayText: getI18nString("file_browser.copy_link"),
    callback: (e, i, n, a) => {
      publishedResource.is_widget ? r(le({
        view: "communityHub",
        subView: "widget",
        widgetId: publishedResource.id
      })) : r(le({
        view: "communityHub",
        subView: "plugin",
        publishedPluginId: publishedResource.id
      }));
    }
  });
  let k = (e, i) => {
    i?.stopPropagation();
    r(_$$r({
      publishedPluginId: publishedResource?.id,
      initialTab: e,
      entryPoint: k2.ADMIN,
      initialAllowedTabs: C
    }));
  };
  return jsx(j, {
    autofocusPrevOnDismount: !0,
    dispatch: r,
    hidePointWhenContentOffScreen: !0,
    items: T,
    lean: e.isFromDropdownButton ? "left" : "right",
    onSelectItem: (e, t) => e.callback?.("", {}, r, t),
    parentRect: targetRect,
    rootAndSubmenuMaxWidth: 190,
    rootAndSubmenuMinWidth: 120,
    shouldUsePortal: !0,
    showPoint: !!e.isFromDropdownButton
  });
}
export const Di = $$w0;
export const ii = $$C1;
export const j_ = $$S2;