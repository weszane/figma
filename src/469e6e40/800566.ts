import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { b as _$$b, c as _$$c } from "../905/308099";
import { s as _$$s } from "../905/932270";
import { Label } from "../905/270045";
import { Checkbox } from "../905/274480";
import { IconButton } from "../905/443068";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { t as _$$t } from "../905/117577";
import { useSubscription } from "../figma_app/288654";
import { s as _$$s2 } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { WO } from "../469e6e40/418374";
import { popModalStack, showModalHandler } from "../905/156213";
import { yo } from "../figma_app/494261";
import { AllowlistSettingsModalView } from "../figma_app/43951";
import { registerModal } from "../905/102752";
var E = (e => (e.ALLOWLIST = "allowlist", e.PUBLIC = "public", e))(E || {});
class C {
  constructor(e) {
    this.extensionType = e;
  }
  getWhitelistEnforcedPayload(e) {
    return void 0 === e ? {} : "plugin" === this.extensionType ? {
      plugins_whitelist_enforced: "allowlist" === e
    } : {
      widgets_whitelist_enforced: "allowlist" === e
    };
  }
  getSuccessMessage(e) {
    if (e) return "plugin" === this.extensionType ? "allowlist" === e ? getI18nString("settings_tab.enable_plugin_approval_success") : getI18nString("settings_tab.disable_plugin_approval_success") : "allowlist" === e ? getI18nString("settings_tab.widget_admin_approval_enabled") : getI18nString("settings_tab.widget_admin_approval_disabled");
  }
  getInitialExtensionAllowed(e) {
    return "plugin" === this.extensionType ? !e.publicPluginsAllowed || e.pluginsWhitelistEnforced ? "allowlist" : "public" : !e.publicPluginsAllowed || e.widgetsWhitelistEnforced ? "allowlist" : "public";
  }
  getSettingsText() {
    let e = {
      title: getI18nString("resources_tab.approved_plugins.modal.plugin_approval"),
      permissionsText: getI18nString("resources_tab.approved_plugins.modal.org_members_can_use"),
      allRadioText: getI18nString("resources_tab.approved_plugins.modal.all_plugins"),
      approvedRadioText: getI18nString("resources_tab.approved_plugins.modal.approved_plugins_only"),
      requestCheckboxText: getI18nString("resources_tab.approved_plugins.modal.request_plugins")
    };
    let t = {
      title: getI18nString("resources_tab.approved_widgets.modal.widget_approval"),
      permissionsText: getI18nString("resources_tab.approved_plugins.modal.org_members_can_use"),
      allRadioText: getI18nString("resources_tab.approved_widgets.modal.all_widgets"),
      approvedRadioText: getI18nString("resources_tab.approved_widgets.modal.approved_widgets_only"),
      requestCheckboxText: getI18nString("resources_tab.approved_widgets.modal.request_widgets")
    };
    return "plugin" === this.extensionType ? e : t;
  }
  getExtensionRequestsAllowed(e) {
    return "plugin" === this.extensionType ? e.pluginRequestsAllowed : e.widgetRequestsAllowed;
  }
  getExtensionRequestAllowedPayload(e) {
    return void 0 === e ? {} : "plugin" === this.extensionType ? {
      plugin_requests_allowed: e
    } : {
      widget_requests_allowed: e
    };
  }
}
function S(e) {
  let {
    modalCopy,
    extensionsAllowed,
    setExtensionsAllowed,
    extensionRequestsAllowed,
    setExtensionRequestsAllowed
  } = e;
  return jsxs(Fragment, {
    children: [jsxs(_$$b, {
      value: extensionsAllowed,
      onChange: setExtensionsAllowed,
      legend: jsx(_$$s, {
        children: modalCopy.permissionsText
      }),
      children: [jsx(_$$c, {
        value: "public",
        "data-test-id": "all-radio-option",
        label: jsx(Label, {
          children: modalCopy.allRadioText
        })
      }), jsx(_$$c, {
        value: "allowlist",
        "data-test-id": "allowlist-radio-option",
        label: jsx(Label, {
          children: modalCopy.approvedRadioText
        })
      })]
    }), "allowlist" === extensionsAllowed && jsx("div", {
      className: _$$s2.flex.flexColumn.pt8.mt8.bt1.colorBorder.bSolid.$,
      children: jsx(Checkbox, {
        checked: extensionRequestsAllowed,
        label: jsx(Label, {
          children: modalCopy.requestCheckboxText
        }),
        onChange: setExtensionRequestsAllowed
      })
    })]
  });
}
function N({
  goBack: e,
  text: t
}) {
  return jsxs("div", {
    className: _$$s2.wFull.flex.itemsCenter.gap4.$,
    children: [jsx(IconButton, {
      "aria-label": getI18nString("general.go_back"),
      onClick: e,
      children: jsx(_$$t, {})
    }), jsx(TextWithTruncation, {
      truncate: !0,
      color: "default",
      children: t
    })]
  });
}
export let $$I0 = registerModal(function (e) {
  let {
    orgId,
    extensionType,
    hasBackButton
  } = e;
  let l = useModalManager(e);
  let o = useSubscription(AllowlistSettingsModalView, {
    orgId
  });
  let d = o.data?.org;
  let c = new C(extensionType);
  let g = c.getSettingsText();
  let x = useDispatch();
  let v = () => {
    hasBackButton && x(popModalStack());
    x(popModalStack());
  };
  let [k, E] = useState();
  let [I, T] = useState();
  if ("loading" === o.status || "errors" === o.status || !d) return null;
  let A = c.getInitialExtensionAllowed(d);
  let R = c.getExtensionRequestsAllowed(d);
  return jsx(ModalRootComponent, {
    manager: l,
    height: hasBackButton ? "fixed" : "dynamic",
    width: 320,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: hasBackButton ? jsx(N, {
            text: g.title,
            goBack: () => x(popModalStack())
          }) : g.title
        })
      }), jsx(DialogBody, {
        children: jsx(S, {
          modalCopy: g,
          extensionsAllowed: k ?? A,
          setExtensionsAllowed: E,
          extensionRequestsAllowed: I ?? R,
          setExtensionRequestsAllowed: T
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            onClick: v,
            variant: "secondary",
            children: getI18nString("general.cancel")
          }), jsx(Button, {
            onClick: () => {
              if (d.publicPluginsAllowed) {
                let e = {
                  ...c.getWhitelistEnforcedPayload(k),
                  ...c.getExtensionRequestAllowedPayload(I)
                };
                x(yo({
                  payload: e,
                  successMessage: c.getSuccessMessage(k ?? A)
                }));
                v();
              } else x(showModalHandler({
                type: WO,
                data: {
                  org: {
                    currentUserOrgId: orgId
                  },
                  extensionType
                }
              }));
            },
            variant: "primary",
            "data-test-id": "save-button",
            children: getI18nString("general.save")
          })]
        })
      })]
    })
  });
});
export const CW = $$I0;