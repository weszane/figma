import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { IconButton } from "../905/443068";
import { Button } from "../905/521428";
import { x as _$$x } from "../905/811596";
import { a as _$$a } from "../905/462280";
import { C } from "../905/520159";
import { xk } from "@stylexjs/stylex";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { d as _$$d } from "../905/44199";
import { registerModal } from "../905/102752";
import { e as _$$e } from "../905/393279";
let $$j0 = registerModal(function (e) {
  let t = useModalManager(e);
  let a = useDispatch();
  let [v, j] = useState({
    inputValue: "",
    tokens: (e.orgSamlConfig.domains || []).map(e => ({
      state: _$$d.OK,
      content: e
    })),
    errorMessage: ""
  });
  let w = t => {
    let a = e.orgDomains.find(e => e.domain === t);
    return !!a?.verified_at;
  };
  return jsx(ModalRootComponent, {
    manager: t,
    width: 536,
    height: "dynamic",
    children: jsxs(DialogContents, {
      children: [jsxs(DialogHeader, {
        children: [e.onBack && jsx(IconButton, {
          onClick: e.onBack,
          "aria-label": getI18nString("general.back"),
          children: jsx(C, {})
        }), jsx(DialogTitle, {
          children: jsx(TextWithTruncation, {
            children: renderI18nText("idp_management.domain_mapping_modal.title")
          })
        })]
      }), jsx(DialogBody, {
        padding: {
          top: "1rem",
          bottom: "1rem"
        },
        children: jsxs(AutoLayout, {
          direction: "vertical",
          spacing: 16,
          verticalAlignItems: "start",
          horizontalAlignItems: "start",
          width: "100%",
          children: [jsx(TextWithTruncation, {
            children: renderI18nText("idp_management.domain_mapping_modal.description")
          }), jsx(TextWithTruncation, {
            children: renderI18nText("idp_management.domain_mapping_modal.choose_domains")
          }), jsx("div", {
            className: "xh8yej3",
            children: jsx(_$$e, {
              SearchResultComponent: function ({
                searchResult: t,
                isSelected: a
              }) {
                let s = !!t.verified_at;
                let i = !!t.org_saml_config_id && t.org_saml_config_id !== e.orgSamlConfig.id;
                let r = s ? jsx(_$$x, {
                  style: {
                    "--color-icon": "var(--color-icon-success)"
                  }
                }) : jsx(_$$a, {
                  style: {
                    "--color-icon": "var(--color-icon-tertiary)"
                  }
                });
                return jsxs("div", {
                  className: xk(y.domainSearchResult, a && y.domainSearchResultSelected).className,
                  children: [jsx("span", {
                    className: "x78zum5 x6s0dn4 x2lah0s",
                    children: r
                  }), jsx(TextWithTruncation, {
                    children: t.domain
                  }), i && jsx("span", {
                    className: "x8x9d4c x1n0bwc9",
                    children: getI18nString("idp_management.mapped")
                  })]
                });
              },
              TokenComponent: function ({
                token: e
              }) {
                let t = "string" == typeof e.content ? e.content : e.content.domain;
                let a = w(t) ? jsx(_$$x, {
                  style: {
                    "--color-icon": "var(--color-icon-success)"
                  }
                }) : jsx(_$$a, {
                  style: {
                    "--color-icon": "var(--color-icon-tertiary)"
                  }
                });
                return jsxs("div", {
                  className: "x78zum5 x6s0dn4 xg2d0mh xlup9mm xip9h3s x1ldx8e",
                  children: [e.state !== _$$d.ERROR && jsx("span", {
                    className: "x78zum5 x6s0dn4 x14ju556",
                    children: a
                  }), jsx(TextWithTruncation, {
                    children: t
                  })]
                });
              },
              autocomplete: v,
              dispatch: a,
              dropdownShown: null,
              fixedAutocompleteResults: !0,
              getSearchResults: t => {
                let a = t.inputValue.toLowerCase();
                let n = t.tokens.map(e => e.content.domain);
                return "" === a ? e.orgDomains : e.orgDomains.filter(e => {
                  let t = "" === a || e.domain.toLowerCase().includes(a);
                  let s = !n.includes(e.domain);
                  return t && s;
                });
              },
              hideDropdownOnEmpty: !1,
              multiLineForm: !1,
              onAutocompleteChange: e => {
                j(e);
              },
              placeholderText: getI18nString("idp_management.domain_mapping_modal.placeholder"),
              searchResultToken: e => ({
                state: _$$d.OK,
                content: e
              }),
              useContainerRefForWidth: !0,
              validateToken: t => {
                let a = e.orgDomains.find(e => e.domain === t);
                return a ? {
                  state: _$$d.OK,
                  content: a
                } : {
                  state: _$$d.ERROR,
                  content: {
                    domain: t,
                    id: "",
                    verified_at: null
                  },
                  errorMessage: getI18nString("domain_management.error_domain_is_invalid")
                };
              }
            })
          })]
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [e.onBack && jsx(Button, {
            onClick: e.onBack,
            variant: "secondary",
            children: jsx(TextWithTruncation, {
              children: renderI18nText("idp_management.domain_mapping_modal.cancel")
            })
          }), jsx(Button, {
            onClick: () => {
              let t = v.tokens.map(e => e.content.id).filter(e => !!e);
              let a = {
                [e.orgSamlConfig.id]: t
              };
              let n = e.orgSamlConfig.domains?.filter(e => !t.includes(e.id)).map(e => e.id);
              e.onContinue(a, n || []);
            },
            variant: "primary",
            children: jsx(TextWithTruncation, {
              children: renderI18nText("general.continue")
            })
          })]
        })
      })]
    })
  });
}, "DOMAIN_MAPPING_MODAL");
let y = {
  domainSearchResult: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    gap: "x1nfngrj",
    rowGap: null,
    columnGap: null,
    padding: "xf67zum",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    cursor: "x1ypdohk",
    backgroundColor: "x1yjdb4r",
    borderRadius: "x192jxwq",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    height: "x10w6t97",
    ":hover_backgroundColor": "xv2f06h",
    $$css: !0
  },
  domainSearchResultSelected: {
    backgroundColor: "x30nh5c",
    $$css: !0
  }
};
export const i = $$j0;