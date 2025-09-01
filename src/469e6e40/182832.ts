import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PureComponent, useState, Fragment as _$$Fragment } from "react";
import { $y } from "../figma_app/59509";
import { Q } from "../905/363675";
import { Uz } from "../905/63728";
import { XHR } from "../905/910117";
import { ks, nR, $$ } from "../figma_app/637027";
import { z, Z } from "../905/306088";
import { kt } from "../figma_app/858013";
import { t as _$$t, tx } from "../905/303541";
import { i as _$$i } from "../469e6e40/651707";
import { Ce, to, Lo } from "../905/156213";
import { hZ } from "../figma_app/342125";
import { a as _$$a } from "../469e6e40/234755";
import { Ju, qK } from "../905/102752";
import { d as _$$d } from "../figma_app/121794";
import { OJ } from "../905/519092";
let f = "configure_saml--section--UuOAE";
let j = "configure_saml--lastSection--VU5e3";
let y = "configure_saml--h2--52Mn9";
let w = "configure_saml--idpMetadataUrlInput--NHut7";
let k = "configure_saml--idpMetadata--Mx-jC";
function E() {
  return [{
    value: "okta",
    text: _$$t("org_settings.sso.okta"),
    placeholder: "https://example.okta.com/app/abc123/sso/saml/metadata"
  }, {
    value: "azure",
    text: _$$t("org_settings.sso.microsoft_azure_active_directory"),
    placeholder: "https://login.microsoftonline.com/fedcba09-8765-4321-abcd-ef1234567890/federationmetadata/2007-06/federationmetadata.xml?appid=567890ab-cdef-1234-5678-90abcdef1234"
  }, {
    value: "google",
    text: _$$t("org_settings.sso.google_workspace"),
    placeholder: ""
  }, {
    value: "onelogin",
    text: _$$t("org_settings.sso.one_login"),
    placeholder: "https://app.onelogin.com/saml/metadata/123-abc-456a-bcd4-789abc"
  }, {
    value: "other",
    text: _$$t("org_settings.sso.other"),
    placeholder: ""
  }];
}
function C(e) {
  return e && Object.keys(e).length > 0;
}
class S extends PureComponent {
  constructor(e) {
    super(e);
    this.onIdpNameChange = e => {
      this.setState({
        idp_name: e
      });
    };
    this.onIdpMetadataUrlChange = e => {
      this.setState({
        idp_metadata_url: e.currentTarget.value
      });
    };
    this.onIdpSSOEntityIDChange = e => {
      this.setState({
        idp_entity_id: e.currentTarget.value
      });
    };
    this.onIdpSSOTargetURLChange = e => {
      this.setState({
        idp_sso_target_url: e.currentTarget.value
      });
    };
    this.onCertificateChange = e => {
      let t = e.target.files ? e.target.files[0] : null;
      this.setState({
        certificate: t
      });
    };
    this.onCancel = () => {
      this.props.dispatch(Ce());
    };
    this.onConfirm = () => {
      this.props.org?.can_use_multi_idp ? this.props.dispatch(to({
        type: _$$i,
        data: {
          orgDomains: this.props.orgDomains,
          orgSamlConfig: this.props.orgSamlConfig,
          onContinue: (e, t) => {
            this.props.dispatch(Lo());
            this.props.dispatch(to({
              type: $$T0,
              data: {
                certificate: this.state.certificate,
                idp_entity_id: this.state.idp_entity_id,
                idp_name: this.state.idp_name,
                idp_metadata_url: this.state.idp_metadata_url,
                idp_sso_target_url: this.state.idp_sso_target_url,
                domainMappings: e,
                domainsToUnmap: t,
                org: this.props.org,
                orgDomains: this.props.orgDomains,
                orgSamlConfig: this.props.orgSamlConfig
              }
            }));
          },
          onBack: () => {
            this.props.dispatch(Lo());
          }
        }
      })) : this.props.dispatch(to({
        type: $$T0,
        data: {
          certificate: this.state.certificate,
          idp_entity_id: this.state.idp_entity_id,
          idp_name: this.state.idp_name,
          idp_metadata_url: this.state.idp_metadata_url,
          idp_sso_target_url: this.state.idp_sso_target_url,
          domainMappings: {},
          org: this.props.org,
          orgDomains: this.props.orgDomains,
          orgSamlConfig: this.props.orgSamlConfig
        }
      }));
    };
    this.onKeyDown = e => {
      e.keyCode === Uz.ENTER && (e.preventDefault(), this.onConfirm());
    };
    this.state = {
      certificate: null,
      idp_entity_id: "",
      idp_metadata_url: e.idp_metadata_url || "",
      idp_name: e.idp_name || null,
      idp_sso_target_url: ""
    };
  }
  render() {
    let e;
    e = "other" === this.state.idp_name || "google" === this.state.idp_name ? !this.state.idp_sso_target_url || !this.state.certificate || !this.state.idp_entity_id : !this.state.idp_metadata_url;
    let t = (E().find(e => e.value === this.state.idp_name) || E()[0]).placeholder;
    let a = "google" === this.state.idp_name ? "https://accounts.google.com/o/saml2/idp?idpid=123abc" : "https://idp.com/saml/metadata/abc123";
    let s = "google" === this.state.idp_name ? "https://accounts.google.com/o/saml2?idpid=123abc" : "https://sso.idp.com/abc123/saml2";
    return jsx(OJ, {
      title: _$$t("org_settings.sso.configure_saml_sso"),
      maxWidth: 459,
      onClose: this.onCancel,
      fixedTopDynamic: !0,
      children: jsxs("div", {
        className: "configure_saml--container--I-eq0 configure_saml--baseContainer--1WzcF",
        children: [jsx("div", {
          children: tx("org_settings.sso.saml_single_sign_on", {
            helpArticle: jsx("a", {
              className: "configure_saml--blueLink--v0lyt blue_link--blueLink--9rlnd",
              href: "https://help.figma.com/hc/articles/360040532333",
              target: "_blank",
              rel: "noopener",
              children: tx("org_settings.sso.help_article")
            })
          })
        }), jsxs("div", {
          children: [jsx("div", {
            className: y,
            children: tx("org_settings.sso.identity_provider_id_p")
          }), jsx(z, {
            className: "configure_saml--radioGroup--GhzVi",
            value: this.state.idp_name,
            onChange: this.onIdpNameChange,
            children: E().map(e => jsx(Z, {
              value: e.value,
              children: e.text
            }, e.value))
          })]
        }), jsxs("div", {
          className: f,
          children: [("other" === this.state.idp_name || "google" === this.state.idp_name) && jsxs(Fragment, {
            children: [jsx("div", {
              className: y,
              children: tx("org_settings.sso.idp_entity_id")
            }), jsx(ks, {
              type: "url",
              className: w,
              placeholder: `${a}`,
              onChange: this.onIdpSSOEntityIDChange,
              value: this.state.idp_entity_id,
              onKeyDown: this.onKeyDown
            }), jsx("div", {
              className: y,
              children: tx("org_settings.sso.idp_sso_target_url")
            }), jsx(ks, {
              type: "url",
              className: w,
              placeholder: `${s}`,
              onChange: this.onIdpSSOTargetURLChange,
              value: this.state.idp_sso_target_url,
              onKeyDown: this.onKeyDown
            }), jsx("div", {
              className: y,
              children: tx("org_settings.sso.signing_certificate")
            }), jsx("input", {
              type: "file",
              onChange: this.onCertificateChange
            })]
          }), this.state.idp_name && "other" !== this.state.idp_name && "google" !== this.state.idp_name && jsxs(Fragment, {
            children: [jsx("div", {
              className: y,
              children: tx("org_settings.sso.id_p_metadata_url")
            }), jsx(ks, {
              type: "url",
              className: w,
              placeholder: `Eg: ${t}`,
              onChange: this.onIdpMetadataUrlChange,
              value: this.state.idp_metadata_url,
              onKeyDown: this.onKeyDown
            })]
          })]
        }), this.props.error && jsx("div", {
          className: f,
          children: jsx("div", {
            className: "configure_saml--error--z3-uD",
            children: this.props.error
          })
        }), jsxs("div", {
          className: "configure_saml--buttonBox--c1x8J",
          children: [jsx(nR, {
            onClick: () => this.props.dispatch(Lo()),
            children: tx("modal.cancel")
          }), jsx($$, {
            disabled: e,
            onClick: this.onConfirm,
            children: this.props.org?.can_use_multi_idp ? tx("general.continue") : tx("org_settings.sso.review")
          })]
        })]
      })
    });
  }
}
S.displayName = "ConfigureSAMLModal";
let N = e => e.reduce((e, t, a) => 0 === a ? [t] : [...e, ", ", t], []);
let $$I1 = Ju(S, "EDIT_SAML_CONFIG_MODAL");
let $$T0 = "CONFIGURE_SAML_CONFIRMATION_MODAL";
function A(e) {
  var t;
  var a;
  var l;
  var d;
  let [c, x] = useState(!1);
  t = e.idp_name;
  a = e.idp_sso_target_url;
  l = e.idp_entity_id;
  d = e.idp_metadata_url;
  let f = "other" === t || "google" === t ? !!a || !!l : !!t && !!d;
  let w = () => {
    e.dispatch(Ce());
  };
  let S = t => {
    e.org.can_use_multi_idp ? _$$a.putOrgSamlConfig({
      org_saml_config_id: e.orgSamlConfig.id,
      certificate: t,
      idp_entity_id: e.idp_entity_id,
      idp_name: e.idp_name,
      metadata_url: e.idp_metadata_url,
      org_id: e.currentUserOrgId,
      sso_target_url: e.idp_sso_target_url,
      domain_mappings: e.domainMappings || {},
      domains_to_unmap: e.domainsToUnmap || []
    }).then(() => {
      x(!1);
      w();
    }).catch(t => {
      x(!1);
      f ? e.dispatch(to({
        type: $$I1,
        data: {
          dispatch: e.dispatch,
          idp_name: e.idp_name || void 0,
          idp_metadata_url: e.idp_metadata_url || void 0,
          error: t.data?.message || _$$t("org_settings.sso.an_error_occurred_while_configuring_saml_sso"),
          org: e.org,
          orgDomains: e.orgDomains,
          orgSamlConfig: e.orgSamlConfig
        }
      })) : C(e.domainMappings) && e.dispatch(to({
        type: _$$i,
        data: {
          orgDomains: e.orgDomains,
          orgSamlConfig: e.orgSamlConfig,
          onContinue: (t, a) => {
            e.dispatch(Lo());
            e.dispatch(to({
              type: $$T0,
              data: {
                domainMappings: t,
                domainsToUnmap: a,
                org: e.org,
                orgDomains: e.orgDomains,
                orgSamlConfig: e.orgSamlConfig,
                certificate: null,
                idp_entity_id: null,
                idp_name: null,
                idp_metadata_url: null,
                idp_sso_target_url: null
              }
            }));
          }
        }
      }));
    }) : XHR.post("/api/org_saml_config", {
      certificate: t,
      idp_entity_id: e.idp_entity_id,
      idp_name: e.idp_name,
      metadata_url: e.idp_metadata_url,
      org_id: e.currentUserOrgId,
      sso_target_url: e.idp_sso_target_url
    }).then(t => {
      x(!1);
      e.dispatch(hZ({
        orgSamlConfig: t.data.meta
      }));
      w();
    }).catch(t => {
      x(!1);
      e.dispatch(to({
        type: $$I1,
        data: {
          dispatch: e.dispatch,
          idp_name: e.idp_name,
          idp_metadata_url: e.idp_metadata_url,
          error: t.data?.message || _$$t("org_settings.sso.an_error_occurred_while_configuring_saml_sso"),
          org: e.org,
          orgDomains: e.orgDomains,
          orgSamlConfig: e.orgSamlConfig
        }
      }));
    });
  };
  let A = E().reduce((e, t) => (e[t.value] = t.text, e), {});
  let R = t => {
    let a = e => jsx("span", {
      className: "x1g2dr8m xiqqdae xkezfkh x14kxzw3 x1giz659",
      children: e
    });
    return 0 === t.length ? "" : e.org.saml_sso_only ? 1 === t.length ? tx("idp_management.unmapped_domains_warning.sso_only_description.one", {
      domain: a(t[0])
    }) : 2 === t.length ? tx("idp_management.unmapped_domains_warning.sso_only_description.two", {
      firstDomain: a(t[0]),
      secondDomain: a(t[1])
    }) : tx("idp_management.unmapped_domains_warning.sso_only_description.many", {
      firstDomain: a(t[0]),
      secondDomain: a(t[1]),
      numOthers: t.length - 2
    }) : 1 === t.length ? tx("idp_management.unmapped_domains_warning.description.one", {
      domain: a(t[0])
    }) : 2 === t.length ? tx("idp_management.unmapped_domains_warning.description.two", {
      firstDomain: a(t[0]),
      secondDomain: a(t[1])
    }) : tx("idp_management.unmapped_domains_warning.description.many", {
      firstDomain: a(t[0]),
      secondDomain: a(t[1]),
      numOthers: t.length - 2
    });
  };
  return jsxs(OJ, {
    title: _$$t("org_settings.sso.configure_saml_sso"),
    maxWidth: 459,
    onClose: w,
    disableClickOutsideToHide: c,
    isCloseHidden: c,
    fixedTopDynamic: !0,
    children: [jsxs("div", {
      className: "configure_saml--baseContainer--1WzcF",
      children: [jsx("div", {
        children: tx("org_settings.sso.please_review_the_information_you_entered")
      }), f && e.idp_name && jsxs(Fragment, {
        children: [jsx("div", {
          className: y,
          children: tx("org_settings.sso.identity_provider_id_p")
        }), jsx("div", {
          className: k,
          children: A[e.idp_name]
        }), jsxs("div", {
          className: e.org.can_use_multi_idp ? "" : j,
          children: [("other" === e.idp_name || "google" === e.idp_name) && jsxs(Fragment, {
            children: [jsx("div", {
              className: y,
              children: tx("org_settings.sso.idp_entity_id")
            }), jsx("div", {
              className: k,
              children: e.idp_entity_id
            }), jsx("div", {
              className: y,
              children: tx("org_settings.sso.idp_sso_url")
            }), jsx("div", {
              className: k,
              children: e.idp_sso_target_url
            }), jsx("div", {
              className: y,
              children: tx("org_settings.sso.signing_certificate")
            }), jsx("div", {
              className: k,
              children: e.certificate.name
            })]
          }), "other" !== e.idp_name && "google" !== e.idp_name && jsxs(Fragment, {
            children: [jsx("div", {
              className: y,
              children: tx("org_settings.sso.id_p_metadata_url")
            }), jsx("div", {
              className: k,
              children: e.idp_metadata_url
            })]
          })]
        })]
      }), C(e.domainMappings) && (() => {
        if (e.org.can_use_multi_idp) {
          let t = e.domainMappings?.[e.orgSamlConfig.id] || [];
          let a = N(t.map(t => {
            let a = e.orgDomains.find(e => e.id === t);
            let i = a ? a.domain : t;
            let r = a && a.org_saml_config_id && a.org_saml_config_id !== e.orgSamlConfig.id;
            return jsxs(_$$Fragment, {
              children: [i, r && jsxs("span", {
                className: "configure_saml--remappedLabel--mMlqG",
                children: [" ", _$$t("idp_management.remapped_label")]
              })]
            }, t);
          }));
          let l = e.orgDomains.filter(a => a.org_saml_config_id === e.orgSamlConfig.id && -1 === t.indexOf(a.id));
          let o = R(l.map(e => e.domain));
          let d = l.reduce((e, t) => e + (t.memberCount || 0), 0);
          return jsxs(Fragment, {
            children: [jsxs("div", {
              className: l.length > 0 ? "" : j,
              children: [jsx("div", {
                className: y,
                children: tx("idp_management.mapped_domains")
              }), jsx("div", {
                className: k,
                children: 0 === t.length ? tx("idp_management.no_mapped_domains") : a
              })]
            }), l.length > 0 && jsxs(Fragment, {
              children: [jsx("div", {
                className: y,
                children: tx("idp_management.unmapped_domains")
              }), jsx("div", {
                className: k,
                children: l.map(e => e.domain).join(", ")
              }), d > 0 && jsx("div", {
                className: "configure_saml--bannerContainer--8wuvK",
                children: jsx($y, {
                  variant: "warn",
                  children: jsx(Q, {
                    title: tx("idp_management.unmapped_domains_warning.title", {
                      membersCount: d
                    }),
                    children: jsx("span", {
                      className: "xclx6tv x17akokd x1qxcl5b xno9bf3 x1betce5",
                      children: o
                    })
                  })
                })
              })]
            })]
          });
        }
        return null;
      })()]
    }), c && jsx("div", {
      className: "configure_saml--spinnerContainer--O2wX0",
      children: jsx(kt, {})
    }), !c && jsx(_$$d, {
      onConfirm: () => {
        if (x(!0), "other" === e.idp_name || "google" === e.idp_name) {
          let t = new FileReader();
          t.addEventListener("load", () => {
            S(t.result);
          });
          t.readAsText(e.certificate);
        } else S(null);
      },
      onCancel: () => {
        e.dispatch(Lo());
        e.dispatch(Lo());
        f ? e.dispatch(to({
          type: $$I1,
          data: {
            dispatch: e.dispatch,
            idp_name: e.idp_name || void 0,
            idp_metadata_url: e.idp_metadata_url || void 0,
            org: e.org,
            orgDomains: e.orgDomains,
            orgSamlConfig: e.orgSamlConfig
          }
        })) : C(e.domainMappings) && e.dispatch(to({
          type: _$$i,
          data: {
            orgDomains: e.orgDomains,
            orgSamlConfig: e.orgSamlConfig,
            onContinue: (t, a) => {
              e.dispatch(Lo());
              e.dispatch(to({
                type: $$T0,
                data: {
                  domainMappings: t,
                  domainsToUnmap: a,
                  org: e.org,
                  orgDomains: e.orgDomains,
                  orgSamlConfig: e.orgSamlConfig,
                  certificate: null,
                  idp_entity_id: null,
                  idp_name: null,
                  idp_metadata_url: null,
                  idp_sso_target_url: null
                }
              }));
            }
          }
        }));
      },
      confirmButtonText: _$$t("org_settings.sso.configure_saml_sso"),
      cancelButtonText: _$$t("org_settings.sso.edit"),
      children: jsx("div", {
        children: tx("org_settings.sso.this_information_is_correct")
      })
    })]
  });
}
qK($$T0, e => jsx(A, {
  dispatch: e.dispatch,
  currentUserOrgId: e.currentUserOrgId,
  ...e.modalShown.data
}));
export const rp = $$T0;
export const mW = $$I1; 
