import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { SecureLink } from "../figma_app/637027";
import { z } from "../905/284530";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { AC } from "../figma_app/777551";
import { Qi } from "../figma_app/559491";
import { showModalHandler } from "../905/156213";
import { getPluginVersion, getMissingEditorTypeError, generatePluginId } from "../figma_app/300692";
import { ResourceType } from "../figma_app/45218";
import { ManifestErrorType, ManifestEditorType } from "../figma_app/155287";
import { isNetworkAccessValidationError } from "../905/544659";
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
    [ResourceType.PLUGIN]: getI18nString("community.publishing.resource_id.plugin"),
    [ResourceType.WIDGET]: getI18nString("community.publishing.resource_id.widget")
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
  if (t && t.error && !$$D3(t.error) && !isNetworkAccessValidationError(t.error)) return jsxs(_$$A2, {
    label: m,
    children: [u, jsx(L, {
      localPlugin: t
    })]
  });
  let h = t?.manifest ?? getPluginVersion(a).manifest;
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
        label: getI18nString("community.publishing.editor_type"),
        children: jsx(M, {
          publishedPlugin: a,
          localPlugin: t
        })
      }), jsx(_$$A2, {
        label: getI18nString("community.publishing.network"),
        children: jsx(U, {
          manifest: h,
          resourceType: s
        })
      }), $$R0(h) && jsx(_$$A2, {
        label: getI18nString("community.publishing.documentAccess"),
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
      children: [jsx(TextWithTruncation, {
        children: renderI18nText("community.publishing.awaiting_review")
      }), jsx("span", {
        className: _$$s.w300.flexShrink1.$
      }), jsx(TextWithTruncation, {
        color: "secondary",
        children: renderI18nText("community.publishing.submitted_with_date", {
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
      label: getI18nString("general.learn_more"),
      href: "https://help.figma.com/hc/articles/12067637274519"
    },
    children: jsx("div", {
      "data-testid": "notApprovedPaymentsApiSellerBannerText",
      children: renderI18nText("community.publishing.cannot_use_payments_api_if_non_approved")
    })
  });
}
export function $$D3(e) {
  return e.type === ManifestErrorType.VALIDATE && e.text === getMissingEditorTypeError();
}
function L({
  localPlugin: e
}) {
  let t = useDispatch();
  return jsx(z, {
    variant: "danger",
    iconSrc: _$$A9,
    orientation: "horizontal",
    action: {
      onClick: () => {
        t(showModalHandler({
          type: K,
          data: {
            localPlugin: e
          }
        }));
      },
      label: getI18nString("universal_insert.see_details")
    },
    children: renderI18nText("community.publishing.failed_to_read_file", {
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
  let l = useDispatch();
  let c = async () => {
    if (!o) return;
    let e = await generatePluginId(i);
    l(Qi({
      publishedPlugins: [e],
      src: "generatePluginId"
    }));
    a(o.localFileId, {
      pendingPluginId: e.id
    });
  };
  return t ? jsx(Fragment, {
    children: jsx(TextWithTruncation, {
      children: t
    })
  }) : e ? jsx(_$$A, {
    suggestion: getI18nString("community.publishing.id_with_number", {
      pendingId: e
    }),
    instruction: jsx(TextWithTruncation, {
      color: "danger",
      children: renderI18nText("community.publishing.add_this_id_to_your_file", {
        filename: "manifest.json"
      })
    }),
    dataTestId: "idCodeSuggestion"
  }) : jsx(z, {
    variant: "danger",
    iconSrc: _$$A9,
    orientation: "horizontal",
    action: {
      label: getI18nString("community.publishing.generate_id"),
      onClick: c
    },
    children: renderI18nText("community.publishing.invalid_id_in_manifest", {
      filename: "manifest.json"
    })
  });
}
function M({
  localPlugin: e,
  publishedPlugin: t
}) {
  let i = e?.manifest?.editorType ?? getPluginVersion(t).manifest.editorType;
  return e && e.error && $$D3(e.error) || null == i ? jsx(_$$A, {
    suggestion: getI18nString("community.publishing.editor_type_figma"),
    instruction: getI18nString("community.publishing.please_add_this_to_your_manifest", {
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
  return jsx(AutoLayout, {
    spacing: 16,
    direction: "horizontal",
    horizontalAlignItems: "start",
    verticalAlignItems: "center",
    children: e.map(e => {
      let t = function (e) {
        switch (e) {
          case ManifestEditorType.FIGMA:
            return {
              svgSrc: _$$A5,
              label: getI18nString("community.publishing.for_design")
            };
          case ManifestEditorType.FIGJAM:
            return {
              svgSrc: _$$A4,
              label: getI18nString("community.publishing.for_figjam")
            };
          case ManifestEditorType.DEV:
          case ManifestEditorType.INSPECT:
            return {
              svgSrc: _$$A3,
              label: getI18nString("community.publishing.for_dev_mode")
            };
          case ManifestEditorType.SLIDES:
            return {
              svgSrc: _$$A8,
              label: getI18nString("community.publishing.for_slides")
            };
          case ManifestEditorType.BUZZ:
            return {
              svgSrc: _$$A7,
              label: getI18nString("community.publishing.for_buzz")
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
      return jsxs(AutoLayout, {
        spacing: 8,
        width: "hug-contents",
        direction: "horizontal",
        verticalAlignItems: "center",
        children: [jsx(SvgComponent, {
          className: _$$s.bRadius4.overflowHidden.$,
          svg: svgSrc,
          useOriginalSrcFills_DEPRECATED: !0
        }), jsx(TextWithTruncation, {
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
      isWidget: e === ResourceType.WIDGET
    }), i.allowedDomains.includes("*") && null == i.reasoning && jsx("div", {
      className: _$$s.mt8.$,
      children: jsx(z, {
        variant: "danger",
        iconSrc: _$$A9,
        orientation: "vertical",
        children: jsx(TextWithTruncation, {
          children: renderI18nText("community.publishing.allowed_domains_reasoning_not_specified")
        })
      })
    })]
  }) : jsx(_$$A, {
    suggestion: '"networkAccess": { "allowedDomains": [...] }',
    dataTestId: "networkAccessSuggestion",
    instruction: jsxs("div", {
      children: [jsx(TextWithTruncation, {
        color: "danger",
        children: renderI18nText(e === ResourceType.PLUGIN ? "community.publishing.plugin_missing_network_access" : "community.publishing.widget_missing_network_access", {
          filename: "manifest.json"
        })
      }), jsx(SecureLink, {
        href: "/plugin-docs/manifest/",
        trusted: !0,
        children: renderI18nText("general.learn_more")
      })]
    })
  });
}
export function $$B2() {
  return jsx(_$$A, {
    suggestion: '"documentAccess": "dynamic-page"',
    dataTestId: "documentAccessSuggestion",
    instruction: jsxs("div", {
      children: [jsx(TextWithTruncation, {
        color: "danger",
        children: renderI18nText("community.publishing.please_add_this_to_your_manifest_period", {
          filename: "manifest.json"
        })
      }), jsx(SecureLink, {
        href: "/plugin-docs/migrating-to-dynamic-loading/",
        trusted: !0,
        children: renderI18nText("general.learn_more")
      })]
    })
  });
}
export const $i = $$R0;
export const Ay = $$N1;
export const gG = $$B2;
export const ic = $$D3;