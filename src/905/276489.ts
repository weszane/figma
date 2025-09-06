import { createElement } from "react";
import { throwTypeError } from "../figma_app/465776";
import { debugState } from "../905/407919";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { e as _$$e } from "../905/58247";
import { Ag } from "../905/235578";
import { C } from "../figma_app/959385";
export const q = function e(t, i) {
  switch (t.type) {
    case "run-menu-action":
      {
        let e = "set-text-review-plugin" === t.menuAction.type;
        switch (t.name.type) {
          case "string-key":
            return {
              name: t.name.key,
              callback: i(t.menuAction),
              disabled: t.disabled,
              property: t.property,
              propertyValue: t.propertyValue,
              hideForQuickCommand: e
            };
          case "plugin-name-string":
            return {
              name: t.name.key,
              args: {
                extensionName: t.name.plugin
              },
              callback: i(t.menuAction),
              hideForQuickCommand: e
            };
          case "plugin-name":
            return {
              name: "plugins-menu-item",
              args: {
                extensionName: t.name.plugin
              },
              callback: i(t.menuAction),
              disabled: t.disabled,
              checked: t.checked,
              visuallyDisabledWithSelection: t.requiresPurchase && t.pluginId ? () => {
                var e;
                var i;
                e = !!t.isWidget;
                i = t.pluginId;
                return void debugState.dispatch(F.enqueue({
                  message: e ? getI18nString("community.buyer.paid_widgets_cannot_be_added_to_the_canvas_before_purchase") : getI18nString("community.buyer.paid_plugins_cannot_be_run_before_purchase"),
                  error: !0,
                  button: {
                    text: getI18nString("community.buyer.buy"),
                    action: () => {
                      i && _$$e({
                        id: i,
                        isWidget: e,
                        source: "extension-requires-purchase"
                      }, createElement(C, {
                        extensionId: i,
                        extensionType: Ag.COMMUNITY
                      }));
                    }
                  },
                  type: e ? "widget_requires_payment" : "plugin_requires_payment"
                }));
              } : void 0,
              rightText: t.rightText,
              hideForQuickCommand: e
            };
          default:
            return throwTypeError(t.name);
        }
      }
    case "separator":
      return {
        separator: !0
      };
    case "header":
      return {
        header: !0,
        name: t.name
      };
    case "submenu":
      {
        let n = [];
        t.submenu.forEach(t => {
          n.push(e(t, i));
        });
        return {
          name: "labeled-menu-item",
          args: {
            label: t.name
          },
          children: n
        };
      }
    default:
      throwTypeError(t);
  }
};