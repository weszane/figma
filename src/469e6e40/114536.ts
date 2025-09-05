import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback, forwardRef } from "react";
import { useDispatch } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { g as _$$g } from "../figma_app/638694";
import { r as _$$r } from "../905/398386";
import { sf } from "../905/929976";
import { FPlanFeatureType, FOrganizationLevelType } from "../figma_app/191312";
import { T5, px, j_, S2, H3 } from "../figma_app/465071";
import { o0 } from "../905/844131";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { s as _$$s } from "../cssbuilder/589278";
import { Y as _$$Y } from "../905/830372";
import { lOi, E5L, Jwi } from "../figma_app/43951";
import { z as _$$z } from "../469e6e40/221397";
import { hK } from "../figma_app/211706";
import { b as _$$b } from "../905/946806";
import { a as _$$a } from "../905/964520";
import { Ph } from "../figma_app/637027";
import { ny } from "../figma_app/819458";
import { tx, t as _$$t } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { to } from "../905/156213";
import { Pc } from "../905/372672";
import { Ib } from "../905/129884";
import { lQ } from "../905/934246";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { F as _$$F } from "../905/302958";
import { Eh } from "../figma_app/617654";
import { Ju } from "../905/102752";
import { l as _$$l } from "../469e6e40/774192";
import { J as _$$J } from "../905/129695";
import { a as _$$a2 } from "../905/5627";
import { Dk } from "../figma_app/623293";
import { zX } from "../905/576487";
import { d as _$$d } from "../905/44199";
import { e as _$$e2 } from "../905/393279";
import { wv } from "../figma_app/860955";
import { x as _$$x } from "../905/811596";
import { a as _$$a3 } from "../905/462280";
import er from "classnames";
import { IU } from "../figma_app/421401";
import { Wi, JR } from "../figma_app/162641";
import { p as _$$p } from "../469e6e40/348454";
import { v as _$$v } from "../4452/562448";
import { b as _$$b2 } from "../4452/320061";
import { B as _$$B } from "../4452/541264";
import { tT, oA as _$$oA } from "../905/663269";
import { A as _$$A } from "../vendor/90566";
import { zE } from "../figma_app/919079";
import { tH, H4 } from "../905/751457";
import { y2 } from "../figma_app/563413";
import { Bk, MI } from "../figma_app/845611";
import { m as _$$m } from "../4452/688074";
import { fu } from "../figma_app/831799";
import { az } from "../figma_app/805373";
import { Cj } from "../905/270084";
import { z as _$$z2 } from "../figma_app/369596";
import { Um } from "../905/848862";
import { cd, zx, VU } from "../4452/650793";
import { qc } from "../figma_app/858013";
import { CT } from "../figma_app/736948";
import { oi } from "../figma_app/527041";
function D() {
  return jsx("a", {
    target: "_blank",
    rel: "noopener",
    className: _$$s.colorTextBrand.cursorPointer.$,
    href: "https://help.figma.com/hc/articles/360045953273",
    children: jsx(_$$E, {
      children: tx("general.learn_more")
    })
  });
}
let F = Ju(function (e) {
  let t = hS(e);
  let a = useDispatch();
  let [r, l] = useState(!1);
  let [o, d] = useState(!1);
  let c = T5("DomainCaptureModal").unwrapOr(null);
  let u = c?.name;
  let m = async () => {
    d(!0);
    try {
      await Eh.setDomainCapture({
        org_id: e.orgId
      });
      a(_$$F.enqueue({
        message: _$$t("domain_management.domain_capture_modal.success_message")
      }));
      e.onClose();
    } catch (e) {
      e.data?.reason && 422 === e.status ? "domains_unverified" === e.data.reason ? a(_$$F.enqueue({
        message: _$$t("domain_management.domain_capture.some_domains_unverified"),
        error: !0,
        onDismiss: lQ
      })) : "domain_in_use" === e.data.reason ? a(_$$F.enqueue({
        message: _$$t("domain_management.domain_capture.domain_in_use", {
          orgName: u || ""
        }),
        error: !0,
        onDismiss: lQ
      })) : a(_$$F.enqueue({
        message: _$$t("domain_management.domain_capture.error_enabling"),
        error: !0,
        onDismiss: lQ
      })) : a(_$$F.enqueue({
        message: _$$t("domain_management.domain_capture.error_enabling"),
        error: !0,
        onDismiss: lQ
      }));
      d(!1);
    }
  };
  return jsx(bL, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: jsx(_$$E, {
            children: tx("domain_management.domain_capture_modal.title")
          })
        })
      }), jsxs(nB, {
        children: [jsx(hK, {
          height: 8
        }), jsx(_$$Y, {
          verticalAlignItems: "center",
          horizontalAlignItems: "start",
          direction: "vertical",
          spacing: 16,
          children: jsxs(_$$Y, {
            direction: "horizontal",
            spacing: 16,
            children: [jsxs(_$$Y, {
              direction: "vertical",
              children: [jsx(_$$E, {
                fontWeight: "bold",
                children: tx("domain_management.domain_capture_modal.body_title")
              }), jsx(_$$E, {
                children: tx("domain_management.domain_capture_modal.body", {
                  orgName: e.orgName,
                  learnMoreLink: jsx(D, {})
                })
              })]
            }), jsx(_$$l, {
              dataTestId: "domain-capture-toggle",
              on: r,
              onChange: () => l(!r)
            })]
          })
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: e.onClose,
            variant: "secondary",
            children: jsx(_$$E, {
              children: tx("domain_management.domain_capture_modal.cancel_button")
            })
          }), jsx($n, {
            disabled: !r || o,
            onClick: m,
            variant: "primary",
            children: jsx(_$$E, {
              children: tx("domain_management.domain_capture_modal.save_button")
            })
          })]
        })
      })]
    })
  });
}, "DOMAIN_CAPTURE_MODAL");
let q = "org_domain_management_page_view--domainList--RqkFA";
function $(e) {
  let t = !e.enabled && !e.allDomainsVerified;
  let a = useDispatch();
  let s = Pc();
  let r = !e.enabled && e.allDomainsVerified ? "button" : "div";
  return jsx(r, {
    onClick: "button" === r ? () => {
      a(to({
        type: F,
        data: {
          orgId: e.orgId,
          orgName: e.orgName
        }
      }));
    } : void 0,
    className: _$$s.b1.bRadius8.colorBorder.p16.wFull.borderBox.bgTransparent.$,
    children: jsxs(_$$Y, {
      direction: "horizontal",
      verticalAlignItems: "center",
      horizontalAlignItems: "space-between",
      children: [jsxs(_$$Y, {
        direction: "vertical",
        horizontalAlignItems: "start",
        spacing: 0,
        children: [e.enabled ? jsxs(_$$Y, {
          direction: "horizontal",
          verticalAlignItems: "center",
          horizontalAlignItems: "start",
          spacing: 4,
          children: [jsx(_$$E, {
            color: "default",
            children: tx("domain_management.domain_capture.enabled_label")
          }), jsx(_$$E, {
            color: "success",
            children: tx("domain_management.domain_capture.enabled_status")
          })]
        }) : jsx(_$$E, {
          color: "default",
          children: tx("domain_management.domain_capture.label")
        }), "loaded" === e.loadingStatus && jsx("span", {
          className: _$$s.alignLeft.$,
          children: e.enabled ? jsx(_$$E, {
            color: "secondary",
            children: tx("domain_management.domain_capture.domain_capture_enabled_body", {
              learnMoreLink: jsx(D, {})
            })
          }) : e.allDomainsVerified ? jsxs(_$$E, {
            color: "secondary",
            children: [tx("domain_management.domain_capture.all_domains_verified_body", {
              learnMoreLink: jsx(D, {})
            }), " "]
          }) : jsx(_$$E, {
            color: "secondary",
            children: tx("domain_management.domain_capture.some_domains_verified_body", {
              learnMoreLink: jsx(D, {})
            })
          })
        })]
      }), e.enabled && jsx("div", {
        className: "org_domain_management_page_view--contactSupport---Trie",
        "data-tooltip": _$$t("domain_management.domain_capture.support_email"),
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip-show-above": !0,
        "data-tooltip-width": 152,
        children: jsx(Ph, {
          trackingEventName: _$$t("domain_management.domain_capture.disable_domain_capture"),
          onClick: () => {
            ny({
              name: s.name,
              email: s.email
            }, {
              ticketForms: ["account"],
              fields: [{
                id: "subject",
                value: _$$t("domain_management.domain_capture.disable_domain_capture")
              }, {
                id: 0x8e810a50a97,
                value: ""
              }],
              suppressAnswerBot: !0
            });
          },
          trusted: !0,
          children: tx("settings_tab.contact_support")
        })
      }), !e.enabled && jsxs(_$$Y, {
        direction: "horizontal",
        verticalAlignItems: "center",
        horizontalAlignItems: "end",
        spacing: 0,
        children: [jsx(_$$E, {
          color: e.allDomainsVerified ? "default" : "secondary",
          children: tx("settings_tab.disabled")
        }), t && jsx(_$$b, {
          style: {
            "--color-icon": "var(--color-icon-secondary)"
          },
          "data-tooltip": _$$t("domain_management.domain_capture.info_tooltip_text"),
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip-width": 152,
          "data-tooltip-show-immediately": !0
        }), jsx(_$$a, {
          style: e.allDomainsVerified ? {} : {
            "--color-icon": "var(--color-icon-secondary)"
          }
        })]
      })]
    })
  });
}
function V(e) {
  let t = useDispatch();
  let a = useRef(null);
  let [r, l] = useState(!1);
  useEffect(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  return jsx("div", {
    className: _$$s.colorBgHover.minH32.wFull.$,
    children: jsxs(_$$Y, {
      cornerRadius: 2,
      padding: 8,
      direction: "vertical",
      children: [jsx("span", {
        className: _$$s.breakWord.$,
        children: jsx(_$$E, {
          fontFamily: "monospace",
          children: e.dnsToken
        })
      }), jsx($n, {
        onClick: () => {
          r || Dk(e.dnsToken).then(() => {
            l(!0);
            null === a.current && (a.current = setTimeout(() => {
              l(!1);
              a.current = null;
            }, 2e3));
          }).catch(() => {
            t(_$$F.enqueue({
              type: "copy-dns-token-failed",
              message: _$$t("domain_management.dns_token.failed_to_copy"),
              error: !0,
              onDismiss: lQ
            }));
          });
        },
        variant: "link",
        children: jsxs(_$$Y, {
          spacing: 0,
          direction: "horizontal",
          children: [jsx(_$$a2, {
            style: {
              "--color-icon": "var(--color-icon-brand)"
            }
          }), jsx(_$$E, {
            fontWeight: "regular",
            color: "brand",
            children: r ? tx("domain_management.dns_token.copied") : tx("domain_management.dns_token.copy")
          })]
        })
      })]
    })
  });
}
function H(e) {
  return jsx("ul", {
    className: q,
    children: e.domains.sort().map(e => jsx("li", {
      children: jsx(_$$E, {
        children: e
      })
    }, e))
  });
}
let Y = Ju(function (e) {
  let t = hS(e);
  return jsx(bL, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: jsx(_$$E, {
            children: tx("VERIFY" === e.actionType ? "domain_management.error_modal.header_verifying" : "domain_management.error_modal.header_adding", {
              domainCount: e.failedDomains.length
            })
          })
        })
      }), jsxs(nB, {
        children: [jsx(hK, {
          height: 8
        }), jsxs(_$$Y, {
          verticalAlignItems: "center",
          horizontalAlignItems: "start",
          direction: "vertical",
          spacing: 16,
          children: [jsx(_$$E, {
            children: (() => {
              switch (e.actionType) {
                case "ADD":
                default:
                  return tx("domain_management.error_modal.body_adding", {
                    domainCount: e.failedDomains.length
                  });
                case "VERIFY":
                  return tx("domain_management.error_modal.body_verifying", {
                    domainCount: e.failedDomains.length
                  });
                case "DOMAIN_CAPTURE":
                case "DOMAIN_CAPTURED_DOMAINS":
                  return tx("domain_management.error_modal.body_domain_capture", {
                    domainCount: e.failedDomains.length
                  });
                case "RESOURCE_CONNECTED_DOMAINS":
                  return tx("domain_management.error_modal.body_resource_connected_domains", {
                    domainCount: e.failedDomains.length
                  });
              }
            })()
          }), jsx(H, {
            domains: e.failedDomains
          })]
        })]
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
            onClick: e.onClose,
            variant: "secondary",
            children: jsx(_$$E, {
              children: tx("domain_management.error_modal.got_it_button")
            })
          })
        })
      })]
    })
  });
}, "DOMAIN_ERRORS_MODAL");
function J(e, t, a, n) {
  let s = useDispatch();
  return function () {
    let i = a ? "VERIFY" : "ADD";
    let r = t.length;
    let l = t.join(",");
    0 !== r && (s(_$$F.enqueue({
      message: a ? _$$t("domain_management.verifying_domains", {
        domainCount: r
      }) : _$$t("domain_management.adding_domains", {
        domainCount: r
      }),
      type: "self-serve-domain-management",
      timeoutOverride: 1 / 0,
      icon: zX.SPINNER
    })), n({
      org_id: e,
      domains: l
    }).then(e => {
      s(_$$F.dequeue({
        matchType: "self-serve-domain-management"
      }));
      let {
        data: {
          meta: {
            invalid_domains,
            unverified_domains,
            domain_captured_domains,
            resource_connected_domains
          }
        }
      } = e;
      let o = invalid_domains.concat(unverified_domains).concat(resource_connected_domains || []).sort();
      0 === o.length ? s(_$$F.enqueue({
        message: a ? _$$t("domain_management.successfully_verified_domains", {
          domainCount: r
        }) : _$$t("domain_management.successfully_added_domains", {
          domainCount: r
        })
      })) : unverified_domains.length > 0 ? s(to({
        type: Y,
        data: {
          failedDomains: o,
          actionType: a ? "VERIFY" : "ADD"
        }
      })) : (domain_captured_domains || []).length > 0 ? s(to({
        type: Y,
        data: {
          failedDomains: domain_captured_domains || [],
          actionType: "DOMAIN_CAPTURED_DOMAINS"
        }
      })) : (resource_connected_domains || []).length > 0 ? s(to({
        type: Y,
        data: {
          failedDomains: resource_connected_domains || [],
          actionType: "RESOURCE_CONNECTED_DOMAINS"
        }
      })) : s(to({
        type: Y,
        data: {
          failedDomains: invalid_domains,
          actionType: a ? "DOMAIN_CAPTURE" : "ADD"
        }
      }));
    }).catch(() => {
      s(_$$F.dequeue({
        matchType: "self-serve-domain-management"
      }));
      s(to({
        type: Y,
        data: {
          failedDomains: t,
          actionType: i
        }
      }));
    }));
  };
}
let Q = Ju(function (e) {
  var t;
  var a;
  var r;
  let l = hS(e);
  let o = useDispatch();
  let [d, _] = useState({
    inputValue: "",
    tokens: [],
    errorMessage: ""
  });
  r = e.orgId;
  t = d.tokens.map(({
    content: e
  }) => e);
  a = e.currentDomains;
  let u = J(r, Array.from(new Set(t)).filter(e => !a.includes(e)), e.domainsRequireVerification, _$$z.postOrgDomains);
  let m = d.tokens.some(({
    errorMessage: e
  }) => !!e);
  return jsx(bL, {
    manager: l,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: jsx(_$$E, {
            children: tx("domain_management.add_domain_modal.title")
          })
        })
      }), jsxs(nB, {
        children: [jsx(hK, {
          height: 8
        }), jsxs(_$$Y, {
          verticalAlignItems: "center",
          horizontalAlignItems: "start",
          direction: "vertical",
          spacing: 16,
          children: [e.domainsRequireVerification ? jsx(et, {
            dnsToken: e.dnsToken
          }) : jsx(_$$E, {
            children: tx("domain_management.add_domain_modal.body_text")
          }), jsx("div", {
            className: _$$s.wFull.$,
            children: jsx(_$$e2, {
              TokenComponent: ee,
              addOnBlur: !0,
              autocomplete: d,
              dispatch: o,
              dropdownShown: null,
              inviteLevel: FPlanFeatureType.FULL,
              multiLineForm: !0,
              onAutocompleteChange: e => {
                let t = e.tokens.find(({
                  errorMessage: e
                }) => !!e)?.errorMessage ?? "";
                _({
                  ...e,
                  errorMessage: t
                });
              },
              placeholderText: _$$t("domain_management.add_domain_modal.input_placeholder_text"),
              tokenClassName: "org_domain_management_page_view--removeHardcodedHeight--PF-ox",
              validateToken: e => null === e.match(Z) ? {
                state: _$$d.ERROR,
                content: e,
                errorMessage: _$$t("domain_management.error_domain_is_invalid")
              } : {
                state: _$$d.OK,
                content: e
              }
            })
          })]
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: e.onClose,
            variant: "secondary",
            children: jsx(_$$E, {
              children: tx("domain_management.modals_shared.cancel_button")
            })
          }), jsx($n, {
            disabled: 0 === d.tokens.length || m,
            onClick: () => {
              u();
              e.onClose();
            },
            variant: "primary",
            children: jsx(_$$E, {
              children: e.domainsRequireVerification ? tx("domain_management.add_domain_modal.confirm_button_dc_enabled") : tx("domain_management.add_domain_modal.confirm_button")
            })
          })]
        })
      })]
    })
  });
}, "ADD_DOMAIN_MODAL");
let Z = /^\b([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\b$/;
function ee(e) {
  return jsx("span", {
    className: _$$s.breakWord.$,
    children: jsx(_$$E, {
      children: e.token.content
    })
  });
}
function et(e) {
  return jsxs(_$$Y, {
    direction: "vertical",
    spacing: 16,
    children: [jsxs(_$$Y, {
      direction: "vertical",
      children: [jsx(_$$E, {
        fontWeight: "bold",
        children: tx("domain_management.modals_shared.update_dns_record_header")
      }), jsx(_$$E, {
        children: tx("domain_management.add_domain_modal.update_dns_record_sub_text", {
          learnMoreLink: jsx(D, {})
        })
      })]
    }), jsx(V, {
      dnsToken: e.dnsToken
    }), jsxs(_$$Y, {
      direction: "vertical",
      children: [jsx(_$$E, {
        fontWeight: "bold",
        children: tx("domain_management.add_domain_modal.next_add_domains_header")
      }), jsx(_$$E, {
        children: tx("domain_management.add_domain_modal.next_add_domains_sub_text")
      })]
    })]
  });
}
function ea(e) {
  let t = useDispatch();
  let a = useCallback(() => {
    t(to({
      type: Q,
      data: {
        domainCaptureEnabled: e.domainCaptureEnabled,
        orgId: e.orgId,
        dnsToken: e.dnsToken,
        currentDomains: e.currentDomains,
        domainsRequireVerification: e.domainsRequireVerification
      }
    }));
  }, [t, e.domainCaptureEnabled, e.orgId, e.dnsToken, e.currentDomains, e.domainsRequireVerification]);
  return jsx("div", {
    className: _$$s.bSolid.colorBorder.bb1.px32.mb16.pb24.$,
    children: jsxs(_$$Y, {
      horizontalAlignItems: "space-between",
      verticalAlignItems: "center",
      direction: "horizontal",
      children: [jsx(_$$E, {
        fontSize: 24,
        children: tx("domain_management.domain", {
          domainCount: 2
        })
      }), jsx($n, {
        onClick: a,
        variant: "primary",
        iconPrefix: jsx(_$$J, {}),
        children: jsx(_$$E, {
          children: tx("domain_management.domain", {
            domainCount: 1
          })
        })
      })]
    })
  });
}
var el = er;
function ek({
  domainId: e,
  orgId: t,
  domainCaptureEnabled: a
}) {
  let [r, l] = useState("");
  let [o, d] = useState(new Set());
  let c = useDispatch();
  let _ = Rs(lOi, {
    domainId: e,
    orgId: t,
    searchQuery: r,
    firstPageSize: null
  });
  let u = "loaded" === _.status;
  let p = u && _.data?.unclaimedDomainUsers?.status === tT.Loaded && !!_.data?.unclaimedDomainUsers?.data?.isLoadingNextPage;
  let b = u && _.data?.unclaimedDomainUsers?.status === tT.Loaded && !!_.data?.unclaimedDomainUsers?.data?.hasNextPage();
  let v = a ? [] : function (e, t) {
    if (!e) return [];
    let a = [];
    e.forEach(e => {
      t?.has(e.userId) || a.push({
        id: e.userId,
        handle: e.user?.handle ?? null,
        email: e.user?.email ?? null,
        imgUrl: e.user?.imgUrl ?? null,
        status: e.status ?? null
      });
    });
    return a;
  }(_$$oA(_.data?.unclaimedDomainUsers) ?? null, o);
  let f = [{
    name: _$$t("domain_insights.unclaimed_users.columns.name"),
    className: "domain_flyout--avatarColumn--q8Rns domain_flyout--column---t1PD admin_settings_page--membersColumn--E3seT table--column--974RA",
    cellComponent: ({
      handle: e,
      email: t,
      imgUrl: a,
      id: s,
      status: i
    }) => {
      let r = e || t || _$$t("domain_insights.unclaimed_users.no_name");
      let l = "removed" === i ? {
        color: zE.DEFAULT,
        text: _$$t("domain_insights.unclaimed_users.removed")
      } : void 0;
      return jsx(az, {
        entity: {
          id: s,
          name: r,
          email: t || void 0,
          imgUrl: a
        },
        badge: l,
        size: 24,
        showTooltip: !0,
        includeUserEmailAddress: !0,
        defaultText: "\u2013"
      });
    }
  }];
  let j = _$$A(l, 300);
  let y = jsx(y2, {
    styleOverrides: {
      width: "100%",
      marginTop: "0px",
      marginBottom: "8px"
    },
    onChange: e => j(Bk(e)),
    query: r,
    clearSearch: () => l(""),
    placeholder: _$$t("domain_insights.unclaimed_users.search.placeholder"),
    maxInputLength: MI
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.p16.pb8.flex.flexColumn.$,
      children: y
    }), jsx(Cj, {
      actionBar: function (e) {
        let a = e.map(e => e.id);
        let s = () => {
          d(new Set([...o, ...a]));
          c(_$$F.enqueue({
            message: _$$t("domain_insights.unclaimed_users.adding_users", {
              userCount: a.length
            }),
            type: "domain-insights"
          }));
        };
        return jsx(Fragment, {
          children: jsx(IU, {
            label: _$$t("domain_insights.unclaimed_users.add_users", {
              count: e.length
            }),
            onClick: () => {
              Eh.addDomainUsers({
                currentOrgId: t,
                userIds: a
              }).then(() => {
                s();
              }).catch(() => {});
            }
          })
        });
      },
      columns: f,
      emptyContent: jsx(_$$Y, {
        height: 200,
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        children: jsx(_$$E, {
          children: tx("domain_insights.unclaimed_users.no_unclaimed_users")
        })
      }),
      getItemKey: e => e.id,
      hasNewScrollContext: !0,
      hideHeader: !0,
      isLoading: (!u || p || b) && !a,
      itemTypeContext: {
        itemType: "org_domain",
        getSelectedCountString: e => _$$t("domain_insights.unclaimed_users.selected_user_count", {
          numSelected: e
        })
      },
      items: v,
      minContentWidth: 456,
      onFetchMore: b ? () => {
        u && !p && b && !a && _.data?.unclaimedDomainUsers?.status === tT.Loaded && _.data.unclaimedDomainUsers.data.loadNext(100);
      } : void 0,
      onSetSortState: lQ,
      scrollContainerInnerClassName: "domain_flyout--removeHorizontalPadding--32jx6",
      selectAllDisabled: !0,
      sortState: {
        columnName: "",
        isReversed: !1
      },
      styleOverrideClassNames: {
        row: "domain_flyout--row--W6vAA"
      }
    })]
  });
}
function eE({
  orgId: e,
  orgName: t
}) {
  let a = useDispatch();
  return jsx("button", {
    onClick: () => {
      a(to({
        type: F,
        data: {
          orgId: e,
          orgName: t
        }
      }));
    },
    className: _$$s.bgNone.colorTextBrand.cursorPointer.$,
    children: jsx(_$$E, {
      children: tx("domain_insights.unclaimed_users.enable_domain_capture")
    })
  });
}
function eC({
  orgId: e,
  orgName: t,
  domainCaptureEnabled: a,
  allDomainsVerified: s
}) {
  return jsxs("div", {
    children: [jsx("div", {
      className: _$$s.textBodyMedium.p16.$,
      children: jsx(_$$E, {
        color: "default",
        children: tx("domain_insights.unclaimed_users.description")
      })
    }), !a && jsxs("div", {
      className: _$$s.bRadius4.colorBgBrandTertiary.pb12.pt8.pl8.ml16.mr16.$,
      children: [s && jsxs(_$$Y, {
        direction: "horizontal",
        verticalAlignItems: "start",
        children: [jsx("span", {
          className: _$$s.ml2.p0.$,
          children: jsx(_$$b, {})
        }), jsx("span", {
          className: _$$s.pt4.$,
          children: jsx(_$$E, {
            color: "default",
            children: tx("domain_insights.unclaimed_users.domain_capture_notice", {
              enableDomainCaptureLink: jsx(eE, {
                orgId: e,
                orgName: t
              })
            })
          })
        })]
      }), !s && jsxs(_$$Y, {
        direction: "vertical",
        spacing: 0,
        children: [jsxs(_$$Y, {
          direction: "horizontal",
          verticalAlignItems: "center",
          spacing: "5px",
          children: [jsx("span", {
            className: _$$s.ml2.$,
            children: jsx(_$$b, {})
          }), jsx(_$$E, {
            color: "default",
            fontWeight: "bold",
            children: tx("domain_insights.unclaimed_users.verify_domains_note")
          })]
        }), jsx("span", {
          className: _$$s.ml32.mr16.$,
          children: jsx(_$$E, {
            color: "default",
            children: tx("domain_insights.unclaimed_users.verify_domains_note_body")
          })
        })]
      })]
    })]
  });
}
let eS = {
  Root: forwardRef((e, t) => jsx(tH, {
    boundaryKey: e.errorBoundaryKey,
    sentryTags: {
      area: _$$e.SCALE
    },
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(fu, {
      name: "Domain Flyout User Insights",
      enabled: e.open,
      properties: e.trackingProperties,
      children: jsx(_$$m.Root, {
        ref: t,
        open: e.open,
        onClose: e.onClose,
        children: e.children
      })
    })
  })),
  Contents: function (e) {
    return jsxs(_$$m.Contents, {
      children: [jsx(_$$m.Header, {
        children: jsx(_$$m.Title, {
          children: _$$t("domain_insights.manage_unclaimed_domain_users")
        })
      }), jsx(eC, {
        orgId: e.orgId,
        orgName: e.orgName,
        domainCaptureEnabled: e.domainCaptureEnabled,
        allDomainsVerified: e.allDomainsVerified
      }), jsx(ek, {
        domainId: e.domainId,
        orgId: e.orgId,
        domainCaptureEnabled: e.domainCaptureEnabled
      })]
    });
  }
};
let eO = Ju(function (e) {
  let t = useDispatch();
  let [a, r] = useState(!1);
  let l = hS(e);
  let o = async () => {
    r(!0);
    try {
      await _$$z.removeOrgDomains({
        org_id: e.orgId,
        domain_ids: e.domainIds
      });
      t(_$$F.enqueue({
        message: _$$t("domain_management.remove_domain_modal.confirmation_message", {
          domainCount: e.domainIds.length
        })
      }));
      e.onClose();
    } catch (e) {
      400 === e.status ? t(_$$F.enqueue({
        message: _$$t("domain_management.remove_domain_modal.attempted_domain_removal"),
        error: !0,
        onDismiss: lQ
      })) : t(_$$F.enqueue({
        message: _$$t("domain_management.remove_domain_modal.error_removing_domain"),
        error: !0,
        onDismiss: lQ
      }));
      r(!1);
    }
  };
  let d = Rs(E5L, {
    orgId: e.orgId,
    domainIds: e.domainIds
  });
  let c = "loading" === d.status || d.data?.domainOrgAdminsToRemove?.status !== tT.Loaded;
  let _ = "loaded" === d.status && d.data?.domainOrgAdminsToRemove && d.data?.domainOrgAdminsToRemove?.status === tT.Loaded && d.data?.domainOrgAdminsToRemove.data ? d.data?.domainOrgAdminsToRemove.data : [];
  return jsx(bL, {
    manager: l,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: jsx(_$$E, {
            fontWeight: "bold",
            children: tx("domain_management.remove_domain_modal.modal_body_title", {
              domainCount: e.domainIds.length
            })
          })
        })
      }), jsxs(nB, {
        children: [jsx(hK, {
          height: 8
        }), jsx(_$$Y, {
          verticalAlignItems: "center",
          horizontalAlignItems: "start",
          direction: "vertical",
          spacing: 0,
          children: e.mfaRequired === CT.GUESTS || e.mfaRequired === CT.ALL_USERS ? jsx(_$$E, {
            children: _.length > 0 ? tx("domain_management.remove_domain_modal.body_text_with_mfa_with_warning", {
              domainCount: e.domainIds.length
            }) : tx("domain_management.remove_domain_modal.modal_body_text_with_mfa", {
              domainCount: e.domainIds.length
            })
          }) : jsx(_$$E, {
            children: _.length > 0 ? tx("domain_management.remove_domain_modal.body_text_with_warning", {
              domainCount: e.domainIds.length
            }) : tx("domain_management.remove_domain_modal.modal_body_text", {
              domainCount: e.domainIds.length
            })
          })
        }), jsx(hK, {
          height: 8
        }), jsx(_$$Y, {
          verticalAlignItems: "center",
          horizontalAlignItems: "start",
          direction: "vertical",
          spacing: 16,
          children: c ? jsx(qc, {}) : jsx("ul", {
            className: q,
            children: _.map(e => jsx("li", {
              children: jsx(_$$E, {
                children: tx("domain_management.remove_domain_modal.org_admin_info", {
                  name: e.user?.name,
                  email: e.user?.email
                })
              })
            }, e.id))
          })
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: e.onClose,
            variant: "secondary",
            children: jsx(_$$E, {
              children: tx("domain_management.remove_domain_modal.cancel_button")
            })
          }), jsx($n, {
            disabled: a || c,
            onClick: o,
            variant: "destructive",
            children: jsx(_$$E, {
              children: tx("domain_management.remove_domain_modal.remove_button")
            })
          })]
        })
      })]
    })
  });
}, "REMOVE_DOMAIN_MODAL");
let eL = Ju(function (e) {
  let t = hS(e);
  let a = function (e, t) {
    let a = _$$z.verifyOrgDomains;
    return J(e, t.map(({
      domain: e
    }) => e), !0, a);
  }(e.orgId, e.domains);
  return jsx(bL, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("domain_management.verify_domain")
        })
      }), jsxs(nB, {
        children: [jsx(hK, {
          height: 8
        }), jsxs(_$$Y, {
          verticalAlignItems: "center",
          horizontalAlignItems: "start",
          direction: "vertical",
          spacing: 16,
          children: [jsxs(_$$Y, {
            direction: "vertical",
            spacing: 0,
            children: [jsx(_$$E, {
              fontWeight: "bold",
              children: tx("domain_management.modals_shared.update_dns_record_header")
            }), tx("domain_management.verify_domain_modal.body", {
              learnMoreLink: jsx(D, {})
            })]
          }), jsx(V, {
            dnsToken: e.dnsToken
          }), e.domains.length > 1 && jsxs(_$$Y, {
            direction: "vertical",
            spacing: 8,
            children: [jsx(_$$E, {
              color: "secondary",
              children: tx("domain_management.domain", {
                domainCount: e.domains.length
              })
            }), jsx(H, {
              domains: e.domains.map(({
                domain: e
              }) => e)
            })]
          })]
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: e.onClose,
            variant: "secondary",
            children: tx("domain_management.modals_shared.cancel_button")
          }), jsx($n, {
            onClick: () => {
              a();
              e.onVerify && e.onVerify();
              e.onClose();
            },
            variant: "primary",
            children: tx("domain_management.verify_domain_modal.confirm_button")
          })]
        })
      })]
    })
  });
}, "VERIFY_DOMAIN_MODAL");
let eM = "DomainFlyout";
function eP(e) {
  let t = Um();
  let a = useDispatch();
  let r = _$$B();
  let l = useRef(null);
  let o = useRef(null);
  let {
    highlightedItem,
    setHighlightedItemId,
    clearHighlightedItemId
  } = _$$v(useCallback(t => e.orgDomains.find(e => e.id === t), [e.orgDomains]), {
    interactionConfig: [{
      ref: r,
      shouldClearHighlight: !0
    }, {
      ref: l,
      shouldClearHighlight: !1
    }, {
      ref: o,
      shouldClearHighlight: !1
    }],
    onHighlight: () => {
      l.current?.focus();
    },
    onClear: _$$b2(eM)
  });
  return jsxs(Fragment, {
    children: [jsx(_$$Y, {
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      children: function (e) {
        switch (e.loadingStatus) {
          case "loading":
          case "loaded":
            return jsx(e$, {
              allDomainsVerified: e.allDomainsVerified,
              clearHighlightedItemId: e.clearHighlightedItemId,
              dispatch: e.dispatch,
              dnsToken: e.dnsToken,
              domainCaptureEnabled: e.domainCaptureEnabled,
              dropdownShown: e.dropdownShown,
              highlightedItem: e.highlightedItem,
              loadingStatus: e.loadingStatus,
              mfaRequired: e.mfaRequired,
              onVerify: e.onVerify,
              orgDomains: e.orgDomains,
              orgId: e.orgId,
              orgName: e.orgName,
              scrollContentRef: e.scrollContentRef,
              setHighlightedItemId: e.setHighlightedItemId
            });
          case "errors":
          case "disabled":
            return jsx(eU, {});
        }
      }({
        ...e,
        dispatch: a,
        dropdownShown: t,
        highlightedItem,
        setHighlightedItemId,
        clearHighlightedItemId,
        scrollContentRef: o
      })
    }), jsx(eS.Root, {
      open: !!highlightedItem,
      onClose: clearHighlightedItemId,
      errorBoundaryKey: eM,
      trackingProperties: {
        orgId: e.orgId,
        domainId: highlightedItem?.id
      },
      ref: l,
      children: highlightedItem && jsx(eS.Contents, {
        domainId: highlightedItem.id,
        orgId: e.orgId,
        orgName: e.orgName,
        domainCaptureEnabled: e.domainCaptureEnabled,
        allDomainsVerified: e.allDomainsVerified
      })
    })]
  });
}
function eU() {
  return jsx(_$$Y, {
    height: 200,
    verticalAlignItems: "center",
    horizontalAlignItems: "center",
    children: jsx(_$$E, {
      children: tx("domain_management.error_fetching_domains")
    })
  });
}
function eF({
  orgId: e,
  orgDomain: t,
  dnsToken: a,
  onVerify: s
}) {
  let r = useDispatch();
  return jsx(cd, {
    children: !t.verifiedAt && jsx($n, {
      onClick: n => {
        n.stopPropagation();
        r(to({
          type: eL,
          data: {
            domains: [t],
            orgId: e,
            dnsToken: a,
            onVerify: s
          }
        }));
      },
      variant: "primary",
      disabled: !!t.verifiedAt,
      children: tx("domain_management.verify_domain_pluralizable", {
        domainCount: 1
      })
    })
  });
}
function eq({
  orgId: e,
  orgDomain: t,
  mfaRequired: a,
  setHighlightedItemId: r
}) {
  let l = useDispatch();
  let o = useCallback(() => {
    l(to({
      type: eO,
      data: {
        domainIds: [t.id],
        mfaRequired: a,
        orgId: e
      }
    }));
  }, [l, t.id, e, a]);
  let d = useCallback(() => {
    Dk(t.domain).then(() => {
      l(_$$F.enqueue({
        type: "copy-org-domain",
        message: _$$t("domain_management.copy_domains.success", {
          domainCount: 1
        })
      }));
    }).catch(() => {
      l(_$$F.enqueue({
        type: "copy-org-domain-failed",
        message: _$$t("domain_management.copy_domains.failed_to_copy"),
        error: !0,
        onDismiss: lQ
      }));
    });
  }, [l, t.domain]);
  return jsxs(zx, {
    children: [t.verifiedAt && jsx(_$$p, {
      onClick: () => r(t.id),
      children: _$$t("domain_management.manage_domains.label")
    }), jsx(_$$p, {
      onClick: d,
      children: _$$t("domain_management.copy_domains.label", {
        domainCount: 1
      })
    }), jsx(wv, {}), jsx(_$$p, {
      onClick: o,
      children: _$$t("domain_management.remove_domain")
    })]
  });
}
function e$(e) {
  let t = [{
    name: _$$t("domain_management.column_header.name"),
    className: _$$s.flex1.$,
    cellComponent: e => jsx(_$$E, {
      children: e.domain
    }),
    getSortValue: e => e.domain
  }, {
    name: _$$t("domain_management.column_header.status"),
    className: _$$s.flex1.$,
    cellComponent: t => function (e, t, a, s, i) {
      let r = e.verifiedAt ? jsx(_$$x, {
        style: {
          "--color-icon": "var(--color-icon-handoff)"
        }
      }) : jsx(_$$a3, {
        style: {
          "--color-icon": "var(--color-icon-tertiary)"
        }
      });
      let l = e.verifiedAt ? jsx(_$$E, {
        children: tx("domain_management.domain_verified")
      }) : jsx("button", {
        className: el()("org_domain_management_page_view--unverifiedHover--9SaqO", _$$s.colorTextTertiary.bgTransparent.$),
        onClick: n => {
          n.stopPropagation();
          s(to({
            type: eL,
            data: {
              domains: [e],
              orgId: t,
              dnsToken: a,
              onVerify: i
            }
          }));
        },
        children: tx("domain_management.domain_unverified")
      });
      return jsxs(_$$Y, {
        direction: "horizontal",
        verticalAlignItems: "center",
        spacing: 4,
        children: [jsx("span", {
          className: _$$s.ml2.$,
          children: r
        }), l]
      });
    }(t, e.orgId, e.dnsToken, e.dispatch, e.onVerify),
    getSortValue: e => e.verifiedAt ? "Verified" : "Unverified"
  }, {
    name: _$$t("domain_management.column_header.unclaimed_users"),
    nameElement: function () {
      let e = jsx(_$$E, {
        color: "default",
        children: _$$t("domain_management.column_header.unclaimed_users")
      });
      return jsxs(_$$Y, {
        direction: "horizontal",
        verticalAlignItems: "center",
        spacing: 4,
        children: [e, jsx("span", {
          className: _$$s.ml2.$,
          children: jsx(_$$b, {
            "data-tooltip": _$$t("domain_management.column_header.unclaimed_users_tooltip"),
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip-width": 152,
            "data-tooltip-show-immediately": !0
          })
        })]
      });
    }(),
    className: _$$s.flex1.$,
    cellComponent: e => e.verifiedAt ? void 0 !== e.unclaimedUserCount ? jsx(_$$E, {
      children: tx("domain_management.unclaimed_user_count", {
        userCount: e.unclaimedUserCount ?? 0
      })
    }) : jsx(Wi, {
      className: _$$s.h12.$,
      animationType: JR.SHIMMER
    }) : jsx(_$$E, {
      color: "tertiary",
      children: tx("domain_management.requires_verification")
    })
  }];
  let a = [...(e.orgDomains.some(e => !e.verifiedAt) ? [{
    name: "verify-domain",
    className: _$$s.minW200.alignRight.$,
    cellComponent: t => jsx(eF, {
      orgId: e.orgId,
      orgDomain: t,
      dnsToken: e.dnsToken,
      onVerify: e.onVerify
    })
  }] : []), {
    name: "menu-cell",
    className: oi,
    cellComponent: t => jsx(eq, {
      orgId: e.orgId,
      orgDomain: t,
      mfaRequired: e.mfaRequired,
      setHighlightedItemId: e.setHighlightedItemId
    })
  }, VU];
  let [i, r, l] = _$$z2({
    columnName: _$$t("domain_management.column_header.name"),
    isReversed: !1
  }, e.orgDomains, t);
  let o = useCallback(() => {
    var t;
    var a;
    var s;
    var i;
    var r;
    t = e.orgId;
    a = e.dnsToken;
    s = e.dispatch;
    i = e.mfaRequired;
    r = e.onVerify;
    return function (e) {
      let l = e.filter(({
        verifiedAt: e
      }) => !e);
      return jsxs(Fragment, {
        children: [l.length > 0 && jsx(IU, {
          disabled: 0 === l.length,
          label: _$$t("domain_management.verify_domain_pluralizable", {
            domainCount: e.length
          }),
          onClick: () => {
            s(to({
              type: eL,
              data: {
                domains: l,
                orgId: t,
                dnsToken: a,
                onVerify: r
              }
            }));
          }
        }), jsx(IU, {
          label: _$$t("domain_management.copy_domains.label", {
            domainCount: e.length
          }),
          onClick: () => {
            Dk(e.map(({
              domain: e
            }) => e).join("; ")).then(() => {
              s(_$$F.enqueue({
                type: "copy-org-domain",
                message: _$$t("domain_management.copy_domains.success", {
                  domainCount: e.length
                })
              }));
            }).catch(() => {
              s(_$$F.enqueue({
                type: "copy-org-domain-failed",
                message: _$$t("domain_management.copy_domains.failed_to_copy"),
                error: !0,
                onDismiss: lQ
              }));
            });
          }
        }), jsx(IU, {
          label: _$$t("domain_management.remove_domain"),
          onClick: () => {
            s(to({
              type: eO,
              data: {
                domainIds: e.map(({
                  id: e
                }) => e),
                orgId: t,
                mfaRequired: i
              }
            }));
          }
        })]
      });
    };
  }, [e.orgId, e.dnsToken, e.dispatch, e.mfaRequired, e.onVerify]);
  return jsx(Cj, {
    actionBar: o(),
    columns: t,
    emptyContent: jsx(_$$Y, {
      height: 200,
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      children: jsx(_$$E, {
        children: tx("domain_management.you_have_no_domains")
      })
    }),
    getItemKey: e => e.id,
    highlightState: {
      itemKey: e.highlightedItem?.id ?? null,
      setItemKey: e.setHighlightedItemId
    },
    isLoading: "loading" === e.loadingStatus,
    itemTypeContext: {
      itemType: "org_domain",
      getSelectedCountString: e => _$$t("multi_select_list.selected_count_domain", {
        numSelected: e
      })
    },
    items: l,
    minContentWidth: 832,
    onRowClick: t => {
      t.id === e.highlightedItem?.id ? e.clearHighlightedItemId() : e.setHighlightedItemId(t.id);
    },
    onSetSortState: r,
    rightActionColumns: a,
    scrollContainerInnerClassName: "org_domain_management_page_view--removeHorizontalPadding--6s60T",
    scrollContentRef: e.scrollContentRef,
    sortState: i,
    styleOverrideClassNames: {
      row: "org_domain_management_page_view--row--tJp2a",
      selectedRow: "org_domain_management_page_view--selectedRow--32BrU"
    }
  });
}
function eB(e) {
  var t;
  var a;
  let i = Rs(Jwi, {
    orgId: e.orgId
  });
  let [r, l] = useState("");
  let [o, d] = useState({});
  let [c, _] = useState(0);
  let u = (t = i.data?.org ? oA(i.data.org) : null) ? {
    domainCaptureEnabled: !!t.domainCapture,
    allDomainsVerified: !((a = t.orgDomains).length < 1) && a.every(e => !!e.verifiedAt),
    orgDomains: t.orgDomains,
    mfaRequired: t.mfaRequired,
    domainsRequireVerification: t.domainsRequireVerification
  } : eG;
  useEffect(() => {
    _$$z.requestDnsToken({
      org_id: e.orgId
    }).then(e => {
      l(e.data.meta.dns_record);
    });
  }, [e.orgId]);
  useEffect(() => {
    _$$z.getUnclaimedDomainUserCounts({
      org_id: e.orgId
    }).then(e => {
      d(e.data.meta.org_domains_unclaimed_user_counts);
    });
  }, [e.orgId, c]);
  let f = u.orgDomains.map(e => ({
    ...e,
    unclaimedUserCount: o[e.id]
  }));
  return jsxs(Fragment, {
    children: [jsx(ea, {
      orgId: e.orgId,
      domainCaptureEnabled: u.domainCaptureEnabled,
      domainsRequireVerification: u.domainsRequireVerification,
      dnsToken: r,
      currentDomains: u.orgDomains.map(({
        domain: e
      }) => e)
    }), jsx("div", {
      className: _$$s.px32.$,
      children: jsxs(_$$Y, {
        spacing: 0,
        direction: "vertical",
        children: [jsx($, {
          loadingStatus: i.status,
          enabled: u.domainCaptureEnabled,
          allDomainsVerified: u.allDomainsVerified,
          orgId: e.orgId,
          orgName: e.orgName
        }), jsx(hK, {
          height: 16
        }), jsx(eP, {
          loadingStatus: i.status,
          orgDomains: f,
          orgId: e.orgId,
          orgName: e.orgName,
          dnsToken: r,
          mfaRequired: u.mfaRequired,
          domainCaptureEnabled: u.domainCaptureEnabled,
          allDomainsVerified: u.allDomainsVerified,
          onVerify: () => _(c + 1)
        })]
      })
    })]
  });
}
let eG = {
  allDomainsVerified: !1,
  domainCaptureEnabled: !1,
  orgDomains: [],
  mfaRequired: null,
  domainsRequireVerification: !1
};
export function $$ez0() {
  let e = useDispatch();
  let t = px();
  let a = j_(t).unwrapOr(!1);
  let m = S2().unwrapOr(null);
  let p = H3(m);
  let g = m?.name;
  let h = m?.key.type === FOrganizationLevelType.ORG;
  return (useEffect(() => {
    a && h || e(sf(o0));
  }, [e, a, h]), p && g) ? jsx(_$$r, {
    containerClass: "org_domain_management_page_view--fileBrowserContentContainer--1aYu8",
    scrollableContainerClass: "org_domain_management_page_view--fileBrowserScrollableContainer--PSb8-",
    content: jsx(eB, {
      orgId: p,
      orgName: g
    }),
    toolbar: jsx(_$$g, {}),
    errorBoundaryConfig: {
      figmaTeam: _$$e.SCALE,
      boundaryKeySuffix: "OrgDomainManagementPageView"
    }
  }) : null;
}
export const OrgDomainManagementPageView = $$ez0;