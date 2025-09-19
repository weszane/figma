import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "../905/438674";
import { Button } from "../905/521428";
import { k } from "../905/443820";
import { copyTextToClipboard } from "../figma_app/623293";
import { getSupportEmail } from "../figma_app/169182";
import { T } from "../figma_app/257703";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { mW } from "../469e6e40/182832";
import { showModalHandler, popModalStack } from "../905/156213";
import { _g } from "../figma_app/336853";
import { Ct } from "../figma_app/736948";
import { registerModal } from "../905/102752";
import { OJ } from "../905/519092";
import { wz, Vq, tp, FK, jE, Yy } from "../469e6e40/442006";
function j(e) {
  let t = useDispatch();
  let a = useCallback(() => {
    t(showModalHandler({
      type: mW,
      data: {
        dispatch: t,
        org: e.org,
        orgDomains: e.orgDomains,
        orgSamlConfig: e.orgSamlConfig
      }
    }));
  }, [t, e.org, e.orgDomains, e.orgSamlConfig]);
  let o = useCallback((e, a) => {
    copyTextToClipboard(e).then(() => {
      t(VisualBellActions.enqueue({
        type: a,
        message: getI18nString("org_settings.sso.copied")
      }));
    });
  }, [t]);
  let b = useCallback(() => {
    let t = e.orgDomains.map(e => e.domain);
    return jsx("p", {
      className: wz,
      children: renderI18nText("org_settings.sso.domain_requirement", {
        domains: jsx(T, {
          formatType: "disjunction",
          children: t.map(e => jsx("span", {
            className: Vq,
            children: e
          }, e))
        }),
        contactSupport: jsx(Link, {
          href: `mailto:${getSupportEmail()}`,
          children: renderI18nText("org_settings.sso.contact_support")
        })
      })
    });
  }, [e.orgDomains]);
  let v = useCallback(() => {
    let t = e.orgSamlConfig;
    let a = document.queryCommandSupported("copy") && t && jsx("span", {
      style: {
        marginLeft: "20px"
      },
      children: jsx(Button, {
        variant: "link",
        onClick: () => o(t.id, "saml_tenant_id_copied_to_clipboard"),
        children: renderI18nText("org_settings.sso.copy")
      })
    });
    let s = [{
      rowName: getI18nString("org_settings.sso.tenant_id"),
      value: t.id,
      action: a
    }, {
      rowName: getI18nString("org_settings.sso.sp_entity_id"),
      value: t.sp_entity_id
    }, {
      rowName: getI18nString("org_settings.sso.sp_acs_url"),
      value: t.sp_acs_target_url
    }];
    return jsx("table", {
      className: tp,
      children: jsx("tbody", {
        children: s.map(e => jsxs("tr", {
          children: [jsx("th", {
            children: e.rowName
          }), jsxs("td", {
            children: [e.value || "Not configured", e.action]
          })]
        }, `row-${e.rowName}`))
      })
    });
  }, [o, e.orgSamlConfig]);
  let j = !!e.orgSamlConfig.idp_name;
  let y = useCallback(() => {
    let t = _g(e.org) === Ct.SAML;
    return jsx(Button, {
      disabled: t,
      onClick: a,
      children: j ? "Edit configuration" : "Configure SAML"
    });
  }, [j, a, e.org]);
  let w = useCallback(() => {
    let t = {
      okta: getI18nString("org_settings.sso.okta"),
      azure: getI18nString("org_settings.sso.azure"),
      onelogin: getI18nString("org_settings.sso.one_login"),
      other: getI18nString("org_settings.sso.other")
    };
    let a = getI18nString("org_settings.sso.not_configured");
    let s = e.orgSamlConfig.idp_name;
    let i = [{
      rowName: getI18nString("org_settings.sso.idp"),
      value: s && t[s] || s
    }, {
      rowName: getI18nString("org_settings.sso.idp_entity_id"),
      value: e.orgSamlConfig.idp_entity_id
    }, {
      rowName: getI18nString("org_settings.sso.idp_sso_url"),
      value: e.orgSamlConfig.idp_sso_target_url
    }];
    return jsxs("div", {
      children: [jsx("p", {
        className: FK,
        children: renderI18nText("org_settings.sso.your_configuration_details")
      }), jsx("table", {
        className: tp,
        children: jsx("tbody", {
          children: i.map(e => jsxs("tr", {
            children: [jsx("th", {
              children: e.rowName
            }), jsxs("td", {
              children: [e.value || a, e.action]
            })]
          }, `row-${e.rowName}`))
        })
      })]
    });
  }, [e.orgSamlConfig.idp_entity_id, e.orgSamlConfig.idp_name, e.orgSamlConfig.idp_sso_target_url]);
  return jsxs(Fragment, {
    children: [jsx("p", {
      className: wz,
      children: renderI18nText("org_settings.sso.saml_sso_description", {
        helpArticle: jsx(Link, {
          href: "https://help.figma.com/hc/articles/360040532333",
          newTab: !0,
          children: renderI18nText("org_settings.sso.help_article")
        })
      })
    }), jsxs("div", {
      children: [b(), v(), w(), !e.hideEditButton && y()]
    })]
  });
}
export let $$y0 = registerModal(function (e) {
  let t = useDispatch();
  let a = e.org;
  let s = e.orgSamlConfig;
  let r = e.orgDomains;
  let d = !s || 0 == r.length;
  let c = () => t(popModalStack());
  return jsx(OJ, {
    title: getI18nString("org_settings.sso.saml_sso"),
    onClose: c,
    maxWidth: 536,
    minWidth: 536,
    fixedTopDynamic: !0,
    children: jsxs("div", {
      className: jE,
      children: [d && jsx(k, {}), !d && jsxs(Fragment, {
        children: [jsx(j, {
          hideEditButton: !0,
          org: a,
          orgDomains: r,
          orgSamlConfig: s
        }), jsxs("div", {
          className: Yy,
          children: [jsx(Button, {
            variant: "secondary",
            onClick: () => {
              t(showModalHandler({
                type: mW,
                data: {
                  dispatch: t,
                  org: a,
                  orgDomains: r,
                  orgSamlConfig: s
                }
              }));
            },
            children: renderI18nText("org_settings.sso.edit_configuration")
          }), jsx(Button, {
            onClick: c,
            children: renderI18nText("org_settings.sso.done")
          })]
        })]
      })]
    })
  });
}, "VIEW_SAML_CONFIG_MODAL");
export const p = $$y0;