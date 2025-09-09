import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useState, useRef, useEffect, useMemo, forwardRef } from "react";
import i from "../vendor/128080";
import { ZC } from "../figma_app/39751";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { Fj } from "../figma_app/594947";
import { sZ } from "../905/845253";
import { OrgIdpManagementPageView } from "../figma_app/43951";
import { z as _$$z } from "../469e6e40/221397";
import { useDispatch } from "react-redux";
import { $n } from "../905/521428";
import { J as _$$J } from "../905/129695";
import { xk } from "@stylexjs/stylex";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { Y as _$$Y } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { p as _$$p } from "../469e6e40/619494";
import { showModalHandler, hideModal, popModalStack } from "../905/156213";
import { a as _$$a } from "../469e6e40/234755";
import { E as _$$E2 } from "../905/632989";
import { a as _$$a2 } from "../905/964520";
import { oA as _$$oA } from "../905/663269";
import { Wi, JR } from "../figma_app/162641";
import { v as _$$v } from "../4452/562448";
import { b as _$$b } from "../4452/320061";
import { B as _$$B } from "../4452/541264";
import { iA, Hj } from "../905/682977";
import { l as _$$l } from "../905/479687";
import { O as _$$O } from "../3591/240710";
import { N as _$$N } from "../vendor/930821";
import { P as _$$P } from "../vendor/348225";
import { E as _$$E3 } from "../905/53857";
import { x as _$$x } from "../905/811596";
import { a as _$$a3 } from "../905/462280";
import { ServiceCategories as _$$e } from "../905/165054";
import { N as _$$N2 } from "../905/438674";
import { p as _$$p2 } from "../905/185998";
import { t as _$$t2 } from "../905/150656";
import { h as _$$h } from "../905/994594";
import { tH, H4 } from "../905/751457";
import { h1 } from "../905/986103";
import { l as _$$l2 } from "../469e6e40/229084";
import { m as _$$m } from "../4452/688074";
import { rp } from "../469e6e40/182832";
import { fu } from "../figma_app/831799";
import { S as _$$S, V as _$$V } from "../469e6e40/678381";
import { Ib } from "../905/129884";
import { i as _$$i } from "../469e6e40/651707";
import { Yy } from "../figma_app/59509";
import { Q as _$$Q } from "../905/363675";
var $$r = i;
function E(e) {
  let t = useDispatch();
  let a = useCallback(() => {
    _$$a.postOrgSamlConfig({
      org_id: e.org.id
    }).then(a => {
      let {
        data: {
          meta
        }
      } = a;
      t(showModalHandler({
        type: _$$p,
        data: {
          org: e.org,
          orgSamlConfig: meta,
          orgDomains: e.orgDomains
        }
      }));
    }).catch(e => {
      t(VisualBellActions.enqueue({
        message: e.message
      }));
    });
  }, [t, e.org, e.orgDomains]);
  return jsx("div", {
    className: "xh8yej3 x1kgkb76 xwxc41k",
    children: jsxs(_$$Y, {
      horizontalAlignItems: "space-between",
      verticalAlignItems: "center",
      direction: "horizontal",
      width: "100%",
      padding: {
        horizontal: 32
      },
      children: [jsx("span", {
        className: "x1ubm3qo x540y09 x578rrm x17evb6q xpyeu0a x1akne3o",
        children: renderI18nText("view_selectors.file_browser.org_idp_management")
      }), jsx($n, {
        onClick: a,
        variant: "primary",
        iconPrefix: jsx(_$$J, {}),
        children: jsx(_$$E, {
          children: renderI18nText("idp_management.add_idp")
        })
      })]
    })
  });
}
function C(e) {
  return e.map(e => ({
    id: e.id,
    domain: e.domain,
    verified_at: e.verifiedAt,
    org_saml_config_id: oA(e.orgSamlConfigId) || null
  }));
}
function F(e) {
  let t = useDispatch();
  let [a, i] = useState(!1);
  let [r, l] = useState(!1);
  let o = useRef(null);
  let d = async () => {
    try {
      await navigator.clipboard.writeText(e.text);
      i(!0);
      o.current && clearTimeout(o.current);
      let a = e.text;
      if (e.text.length > 40) {
        let t = e.text.slice(0, 20);
        let n = e.text.slice(-20);
        a = `${t}...${n}`;
      }
      t(VisualBellActions.enqueue({
        message: getI18nString("idp_management.text_copied", {
          copiedText: a
        })
      }));
      o.current = setTimeout(() => {
        i(!1);
      }, 2500);
    } catch (e) {
      console.error("Failed to copy to clipboard:", e);
    }
  };
  useEffect(() => () => {
    o.current && clearTimeout(o.current);
  }, []);
  return jsx("div", {
    onMouseEnter: () => l(!0),
    onMouseLeave: () => l(!1),
    className: "xh8yej3",
    children: jsxs(_$$E2, {
      onClick: t => {
        e.stopPropagation && t.stopPropagation();
        d();
      },
      className: "x78zum5 x6s0dn4 xg2d0mh x1n2onr6 x1ypdohk xeq5yr9 x193iq5w xjbqb8w",
      children: [jsx("span", {
        className: "xb3r6kr xlyipyv xuxw1ft xkz0k9k",
        children: e.text
      }), jsx("div", {
        className: "x15kz4h8",
        children: jsx(_$$N, {
          className: "x15kz4h8",
          children: r && jsx(_$$P.div, {
            className: "x78zum5 x6s0dn4 xl56j7k xg01cxk xzdg38j xbzrb6o",
            initial: {
              opacity: 0,
              scale: .8
            },
            animate: {
              opacity: 1,
              scale: 1
            },
            exit: {
              opacity: 0,
              scale: .8
            },
            transition: {
              duration: .15,
              ease: "easeOut"
            },
            children: jsx(_$$P.div, {
              initial: {
                scale: .8,
                opacity: 0
              },
              animate: {
                scale: 1,
                opacity: 1
              },
              transition: {
                duration: .15
              },
              children: a ? jsx(_$$l, {}) : jsx(_$$O, {})
            }, a ? "check" : "copy")
          })
        })
      })]
    })
  });
}
function G(e) {
  let {
    verified,
    domain
  } = e;
  let s = verified ? jsx(_$$x, {
    className: "x11vm0g5"
  }) : jsx(_$$a3, {
    className: "xe5c7bq"
  });
  return jsx(_$$E3, {
    variant: "inactiveFilled",
    size: "md",
    iconPrefix: s,
    children: jsx("span", {
      className: "x1akne3o xclx6tv x17akokd x1qxcl5b xno9bf3 x1betce5",
      children: domain
    })
  });
}
function es() {
  return jsx(Fragment, {
    children: "\u2014"
  });
}
let ei = e => !!e.idpEntityId && !!e.idpName && !!e.ssoUrl;
function er({
  isConfigured: e
}) {
  return e ? jsx(_$$E3, {
    variant: "successOutline",
    size: "md",
    children: getI18nString("idp_management.flyout.configured")
  }) : jsx(_$$E3, {
    variant: "warningOutline",
    size: "md",
    children: getI18nString("idp_management.flyout.unconfigured")
  });
}
function el(e) {
  let t = useDispatch();
  let {
    idpData,
    k12GoogleOrg,
    canOrgUseMultiIdpScim
  } = e;
  let l = eu();
  let o = useCallback(() => {
    t(_$$S({
      orgSamlConfigId: idpData.id
    }));
  }, [t, idpData.id]);
  let d = useCallback(() => {
    t(_$$V({
      orgSamlConfigId: idpData.id
    }));
  }, [t, idpData.id]);
  let c = useCallback(() => {
    t(showModalHandler({
      type: _$$l2(),
      data: {
        dispatch: t,
        onConfirm: () => {
          t(hideModal());
          d();
        },
        onCancel: () => {
          t(hideModal());
        }
      }
    }));
  }, [d, t]);
  let _ = idpData.spScimBearerTokenAt;
  let u = !!idpData.spScimBearerTokenAt;
  let m = !!idpData.idpName;
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xh8yej3 x98rzlu x2lwn1j xysyzu8",
    children: [jsxs("section", {
      ...xk(l ? e_.section : e_.sectionOld),
      children: [!l && jsxs("h3", {
        className: "x15cjxed x1xevgq6 x1lh6uom x45is6j x1bp5d4j x1akne3o x12sbs06 x78zum5 x1q0g3np x1nfngrj x1pha0wt",
        children: [jsx("span", {
          children: getI18nString("idp_management.flyout.identity_provider")
        }), !ei(idpData) && jsx(_$$E3, {
          variant: "warningOutline",
          size: "md",
          children: getI18nString("idp_management.flyout.unconfigured")
        })]
      }), jsxs("div", {
        className: "x78zum5 xdt5ytf x1excjyp",
        children: [jsxs("div", {
          className: "x78zum5 xdt5ytf xg2d0mh",
          children: [jsx("label", {
            className: "x1g2dr8m xkezfkh xiqqdae x14kxzw3 x1giz659 x1j61x8r x1akne3o",
            children: getI18nString("idp_management.flyout.type")
          }), jsx("div", {
            className: "xclx6tv x1qxcl5b x17akokd xno9bf3 x1betce5 x1akne3o",
            children: idpData.idpName || jsx(es, {})
          })]
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf xg2d0mh",
          children: [jsx("label", {
            className: "x1g2dr8m xkezfkh xiqqdae x14kxzw3 x1giz659 x1j61x8r x1akne3o",
            children: getI18nString("idp_management.flyout.entity_id")
          }), jsx("div", {
            className: "xclx6tv x1qxcl5b x17akokd xno9bf3 x1betce5 x1akne3o",
            children: idpData.idpEntityId ? jsx(F, {
              text: idpData.idpEntityId
            }) : jsx(es, {})
          })]
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf xg2d0mh",
          children: [jsx("label", {
            className: "x1g2dr8m xkezfkh xiqqdae x14kxzw3 x1giz659 x1j61x8r x1akne3o",
            children: getI18nString("idp_management.flyout.sso_url")
          }), jsx("div", {
            className: "xclx6tv x1qxcl5b x17akokd xno9bf3 x1betce5 x1akne3o",
            children: idpData.ssoUrl ? jsx(F, {
              text: idpData.ssoUrl
            }) : jsx(es, {})
          })]
        })]
      }), !l && jsxs("div", {
        className: "x78zum5 x6s0dn4 xclx6tv x17akokd x1qxcl5b xno9bf3 x1betce5 x1n0bwc9 xpgiz1h",
        children: [jsx("span", {
          children: getI18nString("idp_management.flyout.last_updated")
        }), jsx("span", {
          className: "x6xxxym",
          children: "\xb7"
        }), jsx("span", {
          children: idpData.lastUpdated || jsx(es, {})
        })]
      })]
    }), jsx("div", {
      ...xk(l ? e_.dividerNickname : e_.divider)
    }), jsxs("section", {
      ...xk(l ? e_.section : e_.sectionOld),
      children: [!l && jsx("h3", {
        className: "x15cjxed x1xevgq6 x1lh6uom x45is6j x1bp5d4j x1akne3o x12sbs06 x78zum5 x1q0g3np x1nfngrj x1pha0wt",
        children: getI18nString("idp_management.flyout.service_provider")
      }), jsxs("div", {
        className: "x78zum5 xdt5ytf x1excjyp",
        children: [jsxs("div", {
          className: "x78zum5 xdt5ytf xg2d0mh",
          children: [jsx("label", {
            className: "x1g2dr8m xkezfkh xiqqdae x14kxzw3 x1giz659 x1j61x8r x1akne3o",
            children: getI18nString("idp_management.flyout.tenant_id")
          }), jsx("div", {
            className: "xclx6tv x1qxcl5b x17akokd xno9bf3 x1betce5 x1akne3o",
            children: idpData.tenantId ? jsx(F, {
              text: idpData.tenantId
            }) : jsx(es, {})
          })]
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf xg2d0mh",
          children: [jsx("label", {
            className: "x1g2dr8m xkezfkh xiqqdae x14kxzw3 x1giz659 x1j61x8r x1akne3o",
            children: getI18nString("idp_management.flyout.entity_id")
          }), jsx("div", {
            className: "xclx6tv x1qxcl5b x17akokd xno9bf3 x1betce5 x1akne3o",
            children: idpData.spEntityId ? jsx(F, {
              text: idpData.spEntityId
            }) : jsx(es, {})
          })]
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf xg2d0mh",
          children: [jsx("label", {
            className: "x1g2dr8m xkezfkh xiqqdae x14kxzw3 x1giz659 x1j61x8r x1akne3o",
            children: getI18nString("idp_management.flyout.acs_url")
          }), jsx("div", {
            className: "xclx6tv x1qxcl5b x17akokd xno9bf3 x1betce5 x1akne3o",
            children: idpData.spAcsUrl ? jsx(F, {
              text: idpData.spAcsUrl
            }) : jsx(es, {})
          })]
        })]
      })]
    }), (m || k12GoogleOrg) && canOrgUseMultiIdpScim && jsxs(Fragment, {
      children: [jsx("div", {
        ...xk(l ? e_.dividerNickname : e_.divider)
      }), jsxs("section", {
        ...xk(l ? e_.section : e_.sectionOld),
        children: [(m || k12GoogleOrg) && u && jsx(_$$N2, {
          onClick: c,
          href: "#",
          trusted: !0,
          children: renderI18nText("org_settings.scim.revoke_token_access")
        }), _ && jsx("div", {
          className: "x78zum5 x6s0dn4 xclx6tv x17akokd x1qxcl5b xno9bf3 x1betce5 x1n0bwc9 x15r87gk",
          children: jsx("span", {
            children: renderI18nText("org_settings.scim.api_token_generated_at", {
              timestamp: jsx(h1, {
                date: _
              })
            })
          })
        }), (m || k12GoogleOrg) && !u && jsx(_$$N2, {
          onClick: o,
          href: "#",
          trusted: !0,
          children: renderI18nText("org_settings.scim.generate_api_token")
        })]
      })]
    })]
  });
}
function eo(e) {
  let {
    idpData,
    openEditConfigurationModal
  } = e;
  let [i, r] = useState("");
  let l = useMemo(() => idpData.domains.filter(e => e.domain.toLowerCase().includes(i.toLowerCase())), [idpData.domains, i]);
  return 0 === idpData.domains.length ? jsx(Fragment, {
    children: jsxs(_$$Y, {
      height: 720,
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      direction: "vertical",
      children: [jsx("span", {
        children: getI18nString("idp_management.flyout.no_domain_mappings_added")
      }), jsx($n, {
        variant: "secondary",
        onClick: openEditConfigurationModal,
        children: getI18nString("idp_management.flyout.add_domain_mapping")
      })]
    })
  }) : jsxs("div", {
    className: "x78zum5 xdt5ytf x13ruybi x1nfngrj",
    children: [jsx("div", {
      className: "x1wizv2a",
      children: jsxs(_$$p2.Root, {
        children: [jsx(_$$h, {
          className: "xmauxvm"
        }), jsx(_$$p2, {
          type: "search",
          placeholder: getI18nString("idp_management.flyout.search_domains"),
          "aria-label": getI18nString("idp_management.flyout.search_domains"),
          value: i,
          onChange: e => r(e)
        })]
      })
    }), jsx("div", {
      className: "x78zum5 xdt5ytf x127mb9d xf67zum",
      children: l.map(e => jsx(ed, {
        domain: e
      }, e.domain))
    })]
  });
}
function ed(e) {
  let {
    domain
  } = e;
  let [a, i] = useState(!1);
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x1vqgdyp x1wizv2a x19y5rnk xg2d0mh",
    onMouseEnter: () => i(!0),
    onMouseLeave: () => i(!1),
    children: [jsxs("div", {
      className: "x78zum5 x6s0dn4 xg2d0mh xh8yej3",
      children: [jsxs("div", {
        className: "x78zum5 x9f619 x5mp9sv x6s0dn4 x195vfkc x15p8utu",
        children: [domain.verified_at ? jsx(_$$x, {
          className: "x11vm0g5"
        }) : jsx(_$$a3, {
          className: "xe5c7bq"
        }), jsx("span", {
          className: "xclx6tv x1qxcl5b x17akokd xno9bf3 x1betce5 x1akne3o",
          children: domain.domain
        })]
      }), jsx("span", {
        className: "x5mp9sv x1wizv2a xclx6tv x1qxcl5b x17akokd xno9bf3 x1betce5 x1n0bwc9",
        children: getI18nString("idp_management.flyout.member_count", {
          count: domain.memberCount ?? 0
        })
      })]
    }), jsx("div", {
      className: "xt7fyls x6s0dn4 x78zum5 x13a6bvl"
    })]
  });
}
let ec = forwardRef((e, t) => jsx(tH, {
  boundaryKey: e.errorBoundaryKey,
  sentryTags: {
    area: _$$e.IAM
  },
  fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
  children: jsx(fu, {
    name: "IDP Management Flyout",
    enabled: e.open,
    properties: e.trackingProperties,
    children: jsx(_$$m.Root, {
      ref: t,
      open: e.open,
      onClose: e.onClose,
      children: e.children
    })
  })
}));
let e_ = {
  section: {
    padding: "x1yp8ece",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  sectionOld: {
    padding: "xzlf1m7",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  divider: {
    height: "xjm9jq1",
    backgroundColor: "xbpqucl",
    width: "xh8yej3",
    $$css: !0
  },
  dividerNickname: {
    height: "xjm9jq1",
    backgroundColor: "xbpqucl",
    width: "x14atkfc",
    marginLeft: "xnajj62",
    marginRight: "xvqcqsr",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  },
  footer: {
    display: "x78zum5",
    justifyContent: "x13a6bvl",
    gap: "x1nfngrj",
    rowGap: null,
    columnGap: null,
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderTop: "xdyg6lv",
    borderTopWidth: null,
    borderTopStyle: null,
    borderTopColor: null,
    backgroundColor: "x1yjdb4r",
    position: "x7wzq59",
    bottom: "x1ey2m1c",
    left: "xu96u03",
    right: "x3m8u43",
    insetInlineStart: null,
    insetInlineEnd: null,
    zIndex: "x1vjfegm",
    $$css: !0
  },
  footerLeftAligned: {
    display: "x78zum5",
    justifyContent: "x1nhvcw1",
    gap: "x1nfngrj",
    rowGap: null,
    columnGap: null,
    padding: "x1d26tx",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    backgroundColor: "x1yjdb4r",
    position: "x7wzq59",
    bottom: "x1ey2m1c",
    left: "xu96u03",
    right: "x3m8u43",
    insetInlineStart: null,
    insetInlineEnd: null,
    zIndex: "x1vjfegm",
    $$css: !0
  },
  tabStrip: {
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: "x1gcgh60",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  tabStripPreNickname: {
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  }
};
function eu() {
  let {
    getDynamicConfig
  } = Fj("multi_idp_nickname");
  return getDynamicConfig().get("enabled", !1);
}
let em = {
  Root: ec,
  Contents: function (e) {
    var t;
    let a = useDispatch();
    let [s, i, r] = _$$t2.useTabs({
      idp_details: !0,
      domain_mapping: !0
    });
    let l = eu();
    let o = () => {
      let t = {
        id: e.idpData.id,
        org_id: e.org.id,
        idp_entity_id: e.idpData.idpEntityId,
        idp_sso_target_url: e.idpData.ssoUrl,
        sp_acs_target_url: e.idpData.spAcsUrl,
        sp_entity_id: e.idpData.spEntityId,
        idp_name: e.idpData.idpName,
        sp_scim_bearer_token_at: e.idpData.spScimBearerTokenAt,
        has_scim_token: !!e.idpData.spScimBearerTokenAt,
        domains: e.idpData.domains
      };
      "idp_details" === r.activeTab ? a(showModalHandler({
        type: _$$p,
        data: {
          org: e.org,
          orgSamlConfig: t,
          orgDomains: e.orgDomains
        }
      })) : a(showModalHandler({
        type: _$$i,
        data: {
          orgDomains: e.orgDomains,
          orgSamlConfig: t,
          onContinue: (n, s) => {
            a(popModalStack());
            a(showModalHandler({
              type: rp,
              data: {
                domainMappings: n,
                domainsToUnmap: s,
                org: e.org,
                orgDomains: e.orgDomains,
                orgSamlConfig: t,
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
    };
    let d = "idp_details" === r.activeTab || e.idpData.domains.length > 0;
    let c = e.idpData.domains.length > 0 || ei(e.idpData) || e.numIdps <= 1;
    return jsx(_$$m.Contents, {
      children: jsxs("div", {
        className: "x78zum5 xdt5ytf xb3r6kr",
        children: [jsxs("div", {
          children: [jsx(_$$m.Header, {
            children: l ? jsxs("div", {
              className: "x78zum5 xdt5ytf x1cy8zhl xg2d0mh x5mp9sv x7o37l0 xjp8j0k x9f619",
              children: [jsxs("div", {
                className: "x78zum5 x1q0g3np x1nfngrj x6s0dn4",
                children: [jsx("h2", {
                  className: "x1ghz6dp x1717udv x1wtuluy x1vzchgk x123g5w4 xt5tia6 xyw1wl8 x1akne3o",
                  children: e.idpData.nickname || (t = e.idpData.tenantId, `IDP-${t}`)
                }), jsx(er, {
                  isConfigured: ei(e.idpData)
                })]
              }), jsxs("div", {
                className: "x78zum5 x6s0dn4 xclx6tv x17akokd x1qxcl5b xno9bf3 x1betce5 x1n0bwc9",
                children: [getI18nString("idp_management.flyout.last_updated"), " \xb7", " ", e.idpData.lastUpdated || jsx(es, {})]
              })]
            }) : jsx(_$$m.Title, {
              children: getI18nString("idp_management.flyout.edit_configuration")
            })
          }), jsx(_$$m.Header, {
            children: jsx("div", {
              ...xk(l ? e_.tabStrip : e_.tabStripPreNickname),
              children: jsxs(_$$t2.TabStrip, {
                manager: r,
                children: [jsx(_$$t2.Tab, {
                  ...s.idp_details,
                  children: getI18nString("idp_management.flyout.identity_provider")
                }), jsx(_$$t2.Tab, {
                  ...s.domain_mapping,
                  children: getI18nString("idp_management.flyout.domain_mapping")
                })]
              })
            })
          })]
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf xh8yej3 x98rzlu x2lwn1j xysyzu8",
          children: [jsx(_$$t2.TabPanel, {
            ...i.idp_details,
            children: jsx(el, {
              idpData: e.idpData,
              k12GoogleOrg: e.org.k12_google_org,
              canOrgUseMultiIdpScim: e.canOrgUseMultiIdpScim
            })
          }), jsx(_$$t2.TabPanel, {
            ...i.domain_mapping,
            children: jsx(eo, {
              idpData: e.idpData,
              openEditConfigurationModal: o
            })
          })]
        }), d && jsxs(Fragment, {
          children: [l && jsx("div", {
            className: "xjm9jq1 xbpqucl x14atkfc xnajj62 xvqcqsr"
          }), jsxs("div", {
            ...xk(l ? e_.footerLeftAligned : e_.footer),
            children: [jsx($n, {
              variant: "secondary",
              onClick: o,
              children: "idp_details" === r.activeTab ? getI18nString("idp_management.flyout.edit_idp") : getI18nString("idp_management.flyout.edit_domain_mapping")
            }), "idp_details" === r.activeTab && jsx($n, {
              variant: "destructiveSecondary",
              onClick: () => {
                _$$a.deleteOrgSamlConfig({
                  org_saml_config_id: e.idpData.id
                }).then(() => {
                  a(VisualBellActions.enqueue({
                    message: getI18nString("idp_management.flyout.idp_removed")
                  }));
                }).catch(e => {
                  a(VisualBellActions.enqueue({
                    message: e.message
                  }));
                });
              },
              disabled: c,
              htmlAttributes: c ? {
                "data-testid": "remove-idp-button",
                "data-tooltip": getI18nString("idp_management.flyout.disabled_remove_idp_tooltip"),
                "data-tooltip-type": Ib.TEXT
              } : {},
              children: getI18nString("idp_management.flyout.remove_idp")
            })]
          })]
        })]
      })
    });
  }
};
function ep() {
  return jsx(Fragment, {
    children: "\u2014"
  });
}
function eg({
  domains: e
}) {
  let t = e.slice(0, 2);
  let a = e.length - 2;
  return jsxs("div", {
    className: "x78zum5 xozqiw3 x1nfngrj xb3r6kr xlyipyv xuxw1ft",
    children: [t.map(e => jsx(G, {
      domain: e.domain,
      verified: null !== e.verified_at
    }, e.domain)), a > 0 && jsx("span", {
      className: "x9r1u3d x1akne3o x17akokd x1qxcl5b xno9bf3 x1betce5 xb3r6kr xlyipyv xuxw1ft",
      children: renderI18nText("idp_management.column_header.domains.overflow", {
        count: a
      })
    })]
  });
}
function eh(e) {
  let {
    item,
    isHighlighted,
    onHighlight
  } = e;
  let i = item.id;
  let r = ev();
  return jsxs(iA, {
    className: xk(ef.row, isHighlighted && ef.highlightedRow).className,
    onClick: () => {
      isHighlighted ? onHighlight?.(null) : onHighlight?.(i);
    },
    useAdminTableStyles: !0,
    dataTestId: "simple-table-row",
    children: [jsx("div", {
      className: xk(r ? ef.nicknameColumn : ef.tenantIdColumn).className,
      style: {
        marginRight: "0px"
      },
      children: r ? jsx(_$$E, {
        children: item.nickname
      }) : item.tenantId ? jsx(F, {
        text: item.tenantId,
        stopPropagation: !0
      }) : jsx(ep, {})
    }), jsx("div", {
      className: "x1f2tiqu x1wizv2a xdpxx8g xb3r6kr xlyipyv xuxw1ft",
      style: {
        marginRight: "0px"
      },
      children: item.idpName ? jsx(_$$E, {
        children: item.idpName
      }) : jsx(ep, {})
    }), jsx("div", {
      className: "x98rzlu xl06hdh xdpxx8g xb3r6kr xlyipyv xuxw1ft",
      style: {
        marginRight: "0px"
      },
      title: item.idpEntityId ?? void 0,
      children: item.idpEntityId ? jsx(_$$E, {
        children: item.idpEntityId
      }) : jsx(ep, {})
    }), jsx("div", {
      className: "x1i0uq9b xl06hdh xdpxx8g xb3r6kr xlyipyv xuxw1ft",
      style: {
        marginRight: "0px"
      },
      children: item.domains && item.domains.length ? jsx(eg, {
        domains: item.domains
      }) : jsx(ep, {})
    }), jsx("div", {
      className: "x10l6tqk x1xui8nh xwa60dl x1cb1t30 x78zum5 x6s0dn4 xl56j7k x1td3qas x5yr21d x1vjfegm",
      children: jsx(_$$E2, {
        className: "x19y5rnk xjbqb8w x1bldm2b x1277o0a x17gm1oc",
        children: jsx(_$$a2, {})
      })
    })]
  }, i);
}
function ex(e) {
  let t = ev();
  let a = e => {
    let a = 0;
    e < 2 ? a = 1 : e < 10 && (a = 1 - (e - 2 + 1) / 9);
    return jsx("div", {
      style: {
        opacity: a
      },
      "data-testid": "simple-table-loading-row",
      children: jsxs(iA, {
        className: "x9f619 x1n2onr6 x1akne3o xh8yej3 x1jo9wx5 xf7z5ut xsdox4t x1ypdohk x78zum5 x1i71x30 x6s0dn4 xclx6tv x17akokd x1qxcl5b xno9bf3 x1betce5",
        useAdminTableStyles: !0,
        dataTestId: "simple-table-loading-row",
        children: [jsx("div", {
          className: xk(t ? ef.nicknameColumn : ef.tenantIdColumn).className,
          children: jsx(Wi, {
            className: "x1kpxq89",
            animationType: JR.SHIMMER
          })
        }), jsx("div", {
          className: "x1f2tiqu x1wizv2a xdpxx8g xb3r6kr xlyipyv xuxw1ft",
          children: jsx(Wi, {
            className: "x1kpxq89",
            animationType: JR.SHIMMER
          })
        }), jsx("div", {
          className: "x98rzlu xl06hdh xdpxx8g xb3r6kr xlyipyv xuxw1ft",
          children: jsx(Wi, {
            className: "x1kpxq89",
            animationType: JR.SHIMMER
          })
        }), jsx("div", {
          className: "x1i0uq9b xl06hdh xdpxx8g xb3r6kr xlyipyv xuxw1ft",
          children: jsx(Wi, {
            className: "x1kpxq89",
            animationType: JR.SHIMMER
          })
        }), jsx("div", {
          className: "x10l6tqk x1xui8nh xwa60dl x1cb1t30 x78zum5 x6s0dn4 xl56j7k x1td3qas x5yr21d x1vjfegm"
        })]
      })
    }, e);
  };
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xylkp1l xov4vkd xh8yej3 x5yr21d x87ps6o x98rzlu x2lwn1j",
    ref: e.scrollContentRef,
    children: [jsx("div", {
      className: "x7wzq59 xhtitgo xylkp1l x1yjdb4r x1gcgh60 xbdeg4j x9f619",
      children: jsxs(Hj, {
        header: !0,
        useAdminTableStyles: !0,
        className: "xf7z5ut xxk0z11 x78zum5 x1i71x30 x6s0dn4 x1akne3o x1g2dr8m xiqqdae xkezfkh x14kxzw3 x1giz659",
        dataTestId: "simple-table-header-row",
        children: [jsx("div", {
          className: xk(t ? ef.nicknameColumn : ef.tenantIdColumn).className,
          style: {
            marginRight: "0px"
          },
          children: t ? getI18nString("idp_management.column_header.nickname") : getI18nString("idp_management.column_header.tenant_id")
        }), jsx("div", {
          className: "x1f2tiqu x1wizv2a xdpxx8g xb3r6kr xlyipyv xuxw1ft",
          style: {
            marginRight: "0px"
          },
          children: getI18nString("idp_management.column_header.type")
        }), jsx("div", {
          className: "x98rzlu xl06hdh xdpxx8g xb3r6kr xlyipyv xuxw1ft",
          style: {
            marginRight: "0px"
          },
          children: getI18nString("idp_management.column_header.entity_id")
        }), jsx("div", {
          className: "x1i0uq9b xl06hdh xdpxx8g xb3r6kr xlyipyv xuxw1ft",
          style: {
            marginRight: "0px"
          },
          children: getI18nString("idp_management.column_header.domains")
        })]
      })
    }), 0 === e.items.length && !e.isLoading && jsx("div", {
      className: "x1bpp3o7 x1gcgh60 xbdeg4j x9f619",
      children: jsx(_$$Y, {
        height: 200,
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        children: jsx(_$$E, {
          children: renderI18nText("idp_management.you_have_no_idps")
        })
      })
    }), jsx("div", {
      className: "x1odjw0f x98rzlu x2lwn1j x1n2onr6 x6ikm8r x78zum5 xdt5ytf x1gcgh60 xbdeg4j x9f619",
      style: {
        minWidth: 832
      },
      children: jsx("div", {
        className: "x1n2onr6",
        children: e.isLoading ? Array.from({
          length: 10
        }).map((e, t) => a(t)) : e.items.map(t => jsx(eh, {
          item: t,
          isHighlighted: t.id === e.highlightedItemKey,
          onHighlight: e.onHighlight
        }, t.id))
      })
    })]
  });
}
function eb(e) {
  let t = _$$B();
  let a = useRef(null);
  let i = useRef(null);
  let r = useMemo(() => "loaded" === e.loadingStatus ? (e.orgSamlConfigs || []).sort((e, t) => e.id > t.id ? -1 : 1).map(t => {
    var a;
    let n = C(t.orgDomains).map(t => {
      let a = e.orgDomains.find(e => e.domain === t.domain)?.memberCount || 0;
      return {
        ...t,
        memberCount: a
      };
    });
    let s = _$$oA(t.spScimBearerTokenAt);
    let i = _$$oA(t.nickname) || (a = t.id, `IDP-${a}`);
    return {
      id: t.id,
      tenantId: t.id,
      nickname: i,
      idpName: t.idpName,
      idpEntityId: t.idpEntityId,
      spEntityId: t.spEntityId,
      domains: n,
      ssoUrl: t.idpSsoTargetUrl,
      lastUpdated: t.updatedAt ? new Date(t.updatedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }) : null,
      spAcsUrl: t.spAcsUrl,
      spScimBearerTokenAt: s?.toISOString() ?? null
    };
  }) : [], [e.orgSamlConfigs, e.loadingStatus, e.orgDomains]);
  let {
    highlightedItem,
    setHighlightedItemId,
    clearHighlightedItemId
  } = _$$v(useCallback(e => r.find(t => t.id === e), [r]), {
    interactionConfig: [{
      ref: t,
      shouldClearHighlight: !0
    }, {
      ref: a,
      shouldClearHighlight: !1
    }, {
      ref: i,
      shouldClearHighlight: !1
    }],
    onHighlight: () => {
      a.current?.focus();
    },
    onClear: _$$b("IdpFlyout")
  });
  return jsxs(Fragment, {
    children: [jsx(ex, {
      highlightedItemKey: highlightedItem?.id ?? null,
      items: r,
      onHighlight: e => {
        null === e ? clearHighlightedItemId() : setHighlightedItemId(e);
      },
      isLoading: "loading" === e.loadingStatus,
      scrollContentRef: i
    }), "loaded" === e.loadingStatus && jsx(em.Root, {
      ref: a,
      open: !!highlightedItem,
      onClose: clearHighlightedItemId,
      errorBoundaryKey: "org_idp_management_flyout",
      trackingProperties: {
        source: "org_idp_management_table",
        idpId: highlightedItem?.id
      },
      children: highlightedItem && jsx(em.Contents, {
        idpData: highlightedItem,
        org: e.org,
        orgDomains: e.orgDomains,
        numIdps: e.orgSamlConfigs.length,
        canOrgUseMultiIdpScim: e.canOrgUseMultiIdpScim
      })
    })]
  });
}
function ev() {
  let {
    getDynamicConfig
  } = Fj("multi_idp_nickname");
  return getDynamicConfig().get("enabled", !1);
}
let ef = {
  nicknameColumn: {
    width: "x1oysuqx",
    padding: "xl06hdh",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    textAlign: "xdpxx8g",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "xlyipyv",
    whiteSpace: "xuxw1ft",
    $$css: !0
  },
  tenantIdColumn: {
    width: "x1oysuqx",
    padding: "xl06hdh",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    textAlign: "xdpxx8g",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "xlyipyv",
    whiteSpace: "xuxw1ft",
    $$css: !0
  },
  row: {
    boxSizing: "x9f619",
    position: "x1n2onr6",
    color: "x1akne3o",
    width: "xh8yej3",
    marginTop: "x1jo9wx5",
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    height: "xsdox4t",
    cursor: "x1ypdohk",
    display: "x78zum5",
    gap: "x1i71x30",
    rowGap: null,
    columnGap: null,
    alignItems: "x6s0dn4",
    fontFamily: "xclx6tv",
    fontSize: "x17akokd",
    fontWeight: "x1qxcl5b",
    lineHeight: "xno9bf3",
    letterSpacing: "x1betce5",
    $$css: !0
  },
  highlightedRow: {
    backgroundColor: "x30nh5c",
    $$css: !0
  }
};
let ew = e => jsx("span", {
  className: "x1g2dr8m xiqqdae xkezfkh x14kxzw3 x1giz659",
  children: e
});
function ek(e) {
  let {
    unmappedDomains
  } = e;
  let a = useMemo(() => 0 === unmappedDomains.length ? "" : 1 === unmappedDomains.length ? renderI18nText("idp_management.sso_only_warning_banner.description.one", {
    domain: ew(unmappedDomains[0]?.domain)
  }) : 2 === unmappedDomains.length ? renderI18nText("idp_management.sso_only_warning_banner.description.two", {
    firstDomain: ew(unmappedDomains[0]?.domain),
    secondDomain: ew(unmappedDomains[1]?.domain)
  }) : renderI18nText("idp_management.sso_only_warning_banner.description.many", {
    firstDomain: ew(unmappedDomains[0]?.domain),
    secondDomain: ew(unmappedDomains[1]?.domain),
    numOthers: unmappedDomains.length - 2
  }), [unmappedDomains]);
  return jsx("div", {
    className: "xh8yej3 x78zum5",
    children: jsx("div", {
      className: "x98rzlu x1vqgdyp x1cc5qun",
      children: jsx(Yy, {
        variant: "warn",
        children: jsx(_$$Q, {
          title: getI18nString("idp_management.sso_only_warning_banner.title"),
          children: a
        })
      })
    })
  });
}
export function $$eE0() {
  var e;
  let t = sZ();
  let a = Rs(OrgIdpManagementPageView, {
    orgId: t.id
  });
  let i = (e = a.data?.org ? oA(a.data.org) : null) ? {
    orgSamlConfigs: oA(e.orgSamlConfigs) || [],
    orgDomains: C(e.orgDomains || [])
  } : eC;
  let {
    orgDomains
  } = i;
  let p = orgDomains.filter(e => !e.org_saml_config_id);
  let g = useMemo(() => {
    let e = a.data?.org;
    return !!e && !!e.samlSsoOnlyAt && orgDomains.some(e => !e.org_saml_config_id);
  }, [a, orgDomains]);
  let [h, x] = useState([]);
  let b = $$eS1();
  let v = ZC(orgDomains);
  useEffect(() => {
    $$r()(v || [], orgDomains) || _$$z.getOrgDomainMemberCounts({
      org_id: t.id
    }).then(e => {
      let t = e.data.meta.member_counts || {};
      x(orgDomains.map(e => ({
        ...e,
        memberCount: t[e.id] || 0
      })));
    });
  }, [t.id, orgDomains, v]);
  return jsxs(Fragment, {
    children: [jsx(E, {
      org: t,
      orgDomains: h
    }), jsxs("div", {
      children: [g && jsx(ek, {
        unmappedDomains: p
      }), jsx(eb, {
        org: t,
        orgSamlConfigs: i.orgSamlConfigs,
        orgDomains: h,
        loadingStatus: a.status,
        canOrgUseMultiIdpScim: b
      })]
    })]
  });
}
let eC = {
  orgSamlConfigs: [],
  orgDomains: []
};
export function $$eS1() {
  let {
    getDynamicConfig
  } = Fj("multi_idp_scim");
  return getDynamicConfig().get("enabled", !1);
}
export const a = $$eE0;
export const r = $$eS1;