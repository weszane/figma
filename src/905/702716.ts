import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { CY } from "../figma_app/637027";
import { z } from "../905/284530";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { Y } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { AC } from "../figma_app/777551";
import { Qi } from "../figma_app/559491";
import { to } from "../905/156213";
import { uF, Pl, ou } from "../figma_app/300692";
import { bD } from "../figma_app/45218";
import { ho, FW } from "../figma_app/155287";
import { jl } from "../905/544659";
import { A as _$$A } from "../905/552947";
import { A as _$$A2 } from "../905/794518";
import { u as _$$u } from "../905/952696";
import { K } from "../figma_app/364226";
import { A as _$$A3 } from "../6828/358654";
import { A as _$$A4 } from "../6041/34565";
import { A as _$$A5 } from "../6041/371978";
import { A as _$$A6 } from "../1617/264223";
import { A as _$$A7 } from "../1617/373063";
import { A as _$$A8 } from "../1617/326196";
import { A as _$$A9 } from "../svg/619883";
export function $$R0(e) {
  return !e?.documentAccess || e?.documentAccess !== "dynamic-page";
}
export function $$N1({
  errors: e,
  localPlugin: t,
  pendingPluginId: i,
  validPluginId: r,
  publishedPlugin: a,
  resourceType: s,
  updatePluginPublishingMetadata: o
}) {
  let c = {
    [bD.PLUGIN]: _$$t("community.publishing.resource_id.plugin"),
    [bD.WIDGET]: _$$t("community.publishing.resource_id.widget")
  };
  let u = AC(a) ? jsx("div", {
    className: _$$s.mb8.$,
    children: jsx(P, {
      submittedAt: a.created_at
    })
  }) : null;
  let m = c[s];
  if (e.notApprovedSeller) return jsxs(_$$A2, {
    label: m,
    children: [u, jsx(O, {})]
  });
  if (t && t.error && !$$D3(t.error) && !jl(t.error)) return jsxs(_$$A2, {
    label: m,
    children: [u, jsx(L, {
      localPlugin: t
    })]
  });
  let h = t?.manifest ?? uF(a).manifest;
  return jsx(Fragment, {
    children: jsxs(Fragment, {
      children: [jsxs(_$$A2, {
        label: m,
        children: [u, jsx(F, {
          pendingPluginId: i,
          validPluginId: r,
          updatePluginPublishingMetadata: o,
          resourceType: s,
          localPlugin: t
        })]
      }), jsx(_$$A2, {
        label: _$$t("community.publishing.editor_type"),
        children: jsx(M, {
          publishedPlugin: a,
          localPlugin: t
        })
      }), jsx(_$$A2, {
        label: _$$t("community.publishing.network"),
        children: jsx(U, {
          manifest: h,
          resourceType: s
        })
      }), $$R0(h) && jsx(_$$A2, {
        label: _$$t("community.publishing.documentAccess"),
        children: jsx($$B2, {})
      })]
    })
  });
}
function P({
  submittedAt: e
}) {
  return jsx(z, {
    iconSrc: _$$A6,
    variant: "brand",
    orientation: "horizontal",
    children: jsxs("div", {
      className: _$$s.flex.flexRowNoWrap.itemsCenter.justifyBetween.$,
      children: [jsx(_$$E, {
        children: tx("community.publishing.awaiting_review")
      }), jsx("span", {
        className: _$$s.w300.flexShrink1.$
      }), jsx(_$$E, {
        color: "secondary",
        children: tx("community.publishing.submitted_with_date", {
          date: new Date(e).toLocaleDateString()
        })
      })]
    })
  });
}
function O() {
  return jsx(z, {
    variant: "danger",
    iconSrc: _$$A9,
    orientation: "vertical",
    action: {
      label: _$$t("general.learn_more"),
      href: "https://help.figma.com/hc/articles/12067637274519"
    },
    children: jsx("div", {
      "data-testid": "notApprovedPaymentsApiSellerBannerText",
      children: tx("community.publishing.cannot_use_payments_api_if_non_approved")
    })
  });
}
export function $$D3(e) {
  return e.type === ho.VALIDATE && e.text === Pl();
}
function L({
  localPlugin: e
}) {
  let t = wA();
  return jsx(z, {
    variant: "danger",
    iconSrc: _$$A9,
    orientation: "horizontal",
    action: {
      onClick: () => {
        t(to({
          type: K,
          data: {
            localPlugin: e
          }
        }));
      },
      label: _$$t("universal_insert.see_details")
    },
    children: tx("community.publishing.failed_to_read_file", {
      filename: "manifest.json"
    })
  });
}
function F({
  pendingPluginId: e,
  validPluginId: t,
  resourceType: i,
  updatePluginPublishingMetadata: a,
  localPlugin: o
}) {
  let l = wA();
  let c = async () => {
    if (!o) return;
    let e = await ou(i);
    l(Qi({
      publishedPlugins: [e],
      src: "generatePluginId"
    }));
    a(o.localFileId, {
      pendingPluginId: e.id
    });
  };
  return t ? jsx(Fragment, {
    children: jsx(_$$E, {
      children: t
    })
  }) : e ? jsx(_$$A, {
    suggestion: _$$t("community.publishing.id_with_number", {
      pendingId: e
    }),
    instruction: jsx(_$$E, {
      color: "danger",
      children: tx("community.publishing.add_this_id_to_your_file", {
        filename: "manifest.json"
      })
    }),
    dataTestId: "idCodeSuggestion"
  }) : jsx(z, {
    variant: "danger",
    iconSrc: _$$A9,
    orientation: "horizontal",
    action: {
      label: _$$t("community.publishing.generate_id"),
      onClick: c
    },
    children: tx("community.publishing.invalid_id_in_manifest", {
      filename: "manifest.json"
    })
  });
}
function M({
  localPlugin: e,
  publishedPlugin: t
}) {
  let i = e?.manifest?.editorType ?? uF(t).manifest.editorType;
  return e && e.error && $$D3(e.error) || null == i ? jsx(_$$A, {
    suggestion: _$$t("community.publishing.editor_type_figma"),
    instruction: _$$t("community.publishing.please_add_this_to_your_manifest", {
      filename: "manifest.json"
    }),
    dataTestId: "editorTypeCodeSuggestion"
  }) : jsx(j, {
    editorType: i
  });
}
function j({
  editorType: e
}) {
  return jsx(Y, {
    spacing: 16,
    direction: "horizontal",
    horizontalAlignItems: "start",
    verticalAlignItems: "center",
    children: e.map(e => {
      let t = function (e) {
        switch (e) {
          case FW.FIGMA:
            return {
              svgSrc: _$$A5,
              label: _$$t("community.publishing.for_design")
            };
          case FW.FIGJAM:
            return {
              svgSrc: _$$A4,
              label: _$$t("community.publishing.for_figjam")
            };
          case FW.DEV:
          case FW.INSPECT:
            return {
              svgSrc: _$$A3,
              label: _$$t("community.publishing.for_dev_mode")
            };
          case FW.SLIDES:
            return {
              svgSrc: _$$A8,
              label: _$$t("community.publishing.for_slides")
            };
          case FW.BUZZ:
            return {
              svgSrc: _$$A7,
              label: _$$t("community.publishing.for_buzz")
            };
          default:
            return null;
        }
      }(e);
      if (!t) return null;
      let {
        svgSrc,
        label
      } = t;
      return jsxs(Y, {
        spacing: 8,
        width: "hug-contents",
        direction: "horizontal",
        verticalAlignItems: "center",
        children: [jsx(B, {
          className: _$$s.bRadius4.overflowHidden.$,
          svg: svgSrc,
          useOriginalSrcFills_DEPRECATED: !0
        }), jsx(_$$E, {
          children: label
        })]
      }, e);
    })
  });
}
function U({
  resourceType: e,
  manifest: t
}) {
  let i = t.networkAccess;
  return i ? jsxs(Fragment, {
    children: [jsx(_$$u, {
      networkAccess: i,
      isWidget: e === bD.WIDGET
    }), i.allowedDomains.includes("*") && null == i.reasoning && jsx("div", {
      className: _$$s.mt8.$,
      children: jsx(z, {
        variant: "danger",
        iconSrc: _$$A9,
        orientation: "vertical",
        children: jsx(_$$E, {
          children: tx("community.publishing.allowed_domains_reasoning_not_specified")
        })
      })
    })]
  }) : jsx(_$$A, {
    suggestion: '"networkAccess": { "allowedDomains": [...] }',
    dataTestId: "networkAccessSuggestion",
    instruction: jsxs("div", {
      children: [jsx(_$$E, {
        color: "danger",
        children: tx(e === bD.PLUGIN ? "community.publishing.plugin_missing_network_access" : "community.publishing.widget_missing_network_access", {
          filename: "manifest.json"
        })
      }), jsx(CY, {
        href: "/plugin-docs/manifest/",
        trusted: !0,
        children: tx("general.learn_more")
      })]
    })
  });
}
export function $$B2() {
  return jsx(_$$A, {
    suggestion: '"documentAccess": "dynamic-page"',
    dataTestId: "documentAccessSuggestion",
    instruction: jsxs("div", {
      children: [jsx(_$$E, {
        color: "danger",
        children: tx("community.publishing.please_add_this_to_your_manifest_period", {
          filename: "manifest.json"
        })
      }), jsx(CY, {
        href: "/plugin-docs/migrating-to-dynamic-loading/",
        trusted: !0,
        children: tx("general.learn_more")
      })]
    })
  });
}
export const $i = $$R0;
export const Ay = $$N1;
export const gG = $$B2;
export const ic = $$D3;