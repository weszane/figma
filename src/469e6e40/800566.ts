import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { wA } from "../vendor/514228";
import { b as _$$b, c as _$$c } from "../905/308099";
import { s as _$$s } from "../905/932270";
import { J } from "../905/270045";
import { S as _$$S } from "../905/274480";
import { K } from "../905/443068";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { t as _$$t } from "../905/117577";
import { Rs } from "../figma_app/288654";
import { s as _$$s2 } from "../cssbuilder/589278";
import { t as _$$t2 } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { WO } from "../469e6e40/418374";
import { Lo, to } from "../905/156213";
import { yo } from "../figma_app/494261";
import { lgH } from "../figma_app/43951";
import { Ju } from "../905/102752";
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
    if (e) return "plugin" === this.extensionType ? "allowlist" === e ? _$$t2("settings_tab.enable_plugin_approval_success") : _$$t2("settings_tab.disable_plugin_approval_success") : "allowlist" === e ? _$$t2("settings_tab.widget_admin_approval_enabled") : _$$t2("settings_tab.widget_admin_approval_disabled");
  }
  getInitialExtensionAllowed(e) {
    return "plugin" === this.extensionType ? !e.publicPluginsAllowed || e.pluginsWhitelistEnforced ? "allowlist" : "public" : !e.publicPluginsAllowed || e.widgetsWhitelistEnforced ? "allowlist" : "public";
  }
  getSettingsText() {
    let e = {
      title: _$$t2("resources_tab.approved_plugins.modal.plugin_approval"),
      permissionsText: _$$t2("resources_tab.approved_plugins.modal.org_members_can_use"),
      allRadioText: _$$t2("resources_tab.approved_plugins.modal.all_plugins"),
      approvedRadioText: _$$t2("resources_tab.approved_plugins.modal.approved_plugins_only"),
      requestCheckboxText: _$$t2("resources_tab.approved_plugins.modal.request_plugins")
    };
    let t = {
      title: _$$t2("resources_tab.approved_widgets.modal.widget_approval"),
      permissionsText: _$$t2("resources_tab.approved_plugins.modal.org_members_can_use"),
      allRadioText: _$$t2("resources_tab.approved_widgets.modal.all_widgets"),
      approvedRadioText: _$$t2("resources_tab.approved_widgets.modal.approved_widgets_only"),
      requestCheckboxText: _$$t2("resources_tab.approved_widgets.modal.request_widgets")
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
        label: jsx(J, {
          children: modalCopy.allRadioText
        })
      }), jsx(_$$c, {
        value: "allowlist",
        "data-test-id": "allowlist-radio-option",
        label: jsx(J, {
          children: modalCopy.approvedRadioText
        })
      })]
    }), "allowlist" === extensionsAllowed && jsx("div", {
      className: _$$s2.flex.flexColumn.pt8.mt8.bt1.colorBorder.bSolid.$,
      children: jsx(_$$S, {
        checked: extensionRequestsAllowed,
        label: jsx(J, {
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
    children: [jsx(K, {
      "aria-label": _$$t2("general.go_back"),
      onClick: e,
      children: jsx(_$$t, {})
    }), jsx(_$$E, {
      truncate: !0,
      color: "default",
      children: t
    })]
  });
}
export let $$I0 = Ju(function (e) {
  let {
    orgId,
    extensionType,
    hasBackButton
  } = e;
  let l = hS(e);
  let o = Rs(lgH, {
    orgId
  });
  let d = o.data?.org;
  let c = new C(extensionType);
  let g = c.getSettingsText();
  let x = wA();
  let v = () => {
    hasBackButton && x(Lo());
    x(Lo());
  };
  let [k, E] = useState();
  let [I, T] = useState();
  if ("loading" === o.status || "errors" === o.status || !d) return null;
  let A = c.getInitialExtensionAllowed(d);
  let R = c.getExtensionRequestsAllowed(d);
  return jsx(bL, {
    manager: l,
    height: hasBackButton ? "fixed" : "dynamic",
    width: 320,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: hasBackButton ? jsx(N, {
            text: g.title,
            goBack: () => x(Lo())
          }) : g.title
        })
      }), jsx(nB, {
        children: jsx(S, {
          modalCopy: g,
          extensionsAllowed: k ?? A,
          setExtensionsAllowed: E,
          extensionRequestsAllowed: I ?? R,
          setExtensionRequestsAllowed: T
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: v,
            variant: "secondary",
            children: _$$t2("general.cancel")
          }), jsx($n, {
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
              } else x(to({
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
            children: _$$t2("general.save")
          })]
        })
      })]
    })
  });
});
export const CW = $$I0;