import { lQ } from "../905/934246";
import { getI18nString } from "../905/303541";
import { z } from "../905/905430";
import { IK } from "../figma_app/248118";
import { manifestContainsWidget } from "../figma_app/155287";
import { o0 } from "../905/12045";
import { qs, Im } from "../905/608145";
import { Nh, pI, bf, S3 } from "../figma_app/567902";
export function $$u2(e) {
  return "plugins-menu-item" === e.name && !!e.submenu && e.submenu.length > 0 && e.submenu.every(e => "plugins-menu-item" === e.name);
}
export function $$p0(e) {
  let {
    extension,
    canRun
  } = e;
  return extension.manifest.menu && extension.manifest.menu.length > 0 ? {
    type: "submenu",
    subtype: "manifest",
    name: extension.name,
    submenu: z(extension.manifest.menu, extension)
  } : {
    type: "run-menu-action",
    name: {
      type: "plugin-name",
      plugin: extension.name
    },
    menuAction: IK(extension),
    disabled: !canRun,
    isWidget: manifestContainsWidget(extension),
    path: []
  };
}
export const NG = $$p0;
export const UK = function e(t) {
  let {
    item,
    isReadOnly,
    extensionMenuProps,
    includeDisabled,
    isSubmenuChild,
    isItemSubmenu
  } = t;
  let _ = [];
  if ("run-menu-action" === item.type) {
    if (item.disabled && !includeDisabled) return _;
    if ("plugin-name" === item.name.type) {
      if (!extensionMenuProps.userCanViewPlugins) return _;
      let e = qs(item) ? getI18nString("widgets.insert_widget", {
        widgetName: item.name.plugin
      }) : item.name.plugin;
      let t = [...item.path, e];
      let n = ("run-installed-plugin" === item.menuAction.type || "run-local-plugin" === item.menuAction.type) && item.menuAction.parameterOnly;
      let a = {
        name: "plugins-menu-item",
        extensionSearchString: Nh(item, isSubmenuChild),
        itemPath: t,
        itemParameterArgs: o0(item.menuAction),
        callback: () => Im(extensionMenuProps, "quick-actions", item.menuAction),
        menuActionType: item.menuAction.type,
        pluginId: "run-installed-plugin" === item.menuAction.type || "insert-installed-widget" === item.menuAction.type ? item.menuAction.pluginId : void 0,
        pluginLocalFileId: "run-local-plugin" === item.menuAction.type || "insert-local-widget" === item.menuAction.type ? item.menuAction.localFileId : void 0,
        disabled: item.disabled,
        flags: ["edit"],
        parametersRequired: n
      };
      _.push(a);
    } else {
      if (isReadOnly && item.disabled) return _;
      let e = {
        name: item.name.key,
        callback: () => Im(extensionMenuProps, "filemenu", item.menuAction),
        disabled: item.disabled,
        iconType: item.iconType,
        property: item.property,
        propertyValue: item.propertyValue
      };
      _.push(e);
    }
  } else if ("submenu" === item.type) {
    if (pI() && !isSubmenuChild && "manifest" === item.subtype) {
      let t = {
        name: "plugins-menu-item",
        extensionSearchString: bf(item),
        itemPath: [item.name],
        callback: lQ,
        submenu: item.submenu.map(t => e({
          item: t,
          isReadOnly,
          extensionMenuProps,
          includeDisabled,
          isItemSubmenu: !0
        })).flat()
      };
      let i = S3(item);
      i && (t.menuActionType = i.menuAction.type, "pluginId" in i.menuAction && (t.pluginId = i.menuAction.pluginId), "localFileId" in i.menuAction && (t.pluginLocalFileId = i.menuAction.localFileId));
      _.push(t);
    }
    if (isItemSubmenu) return _;
    for (let t of item.submenu) {
      let r = e({
        item: t,
        isReadOnly,
        extensionMenuProps,
        includeDisabled,
        isSubmenuChild: !0
      });
      _.push(...r);
    }
  }
  return _;
};
export const YT = $$u2;