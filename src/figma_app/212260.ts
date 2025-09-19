import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkPrimitive } from "../figma_app/496441";
import { getFeatureFlags } from "../905/601108";
import l from "classnames";
import { R as _$$R } from "../figma_app/313269";
import { c$ } from "../figma_app/236327";
import { P as _$$P } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { JZ } from "../figma_app/696043";
import { af } from "../figma_app/559491";
import { showModalHandler, popModalStack } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { useLocalPluginsExcludingWidgets, useUserPublishedWidgets } from "../figma_app/844435";
import { isResourcePaymentFailed } from "../figma_app/86989";
import { j as _$$j } from "../905/813868";
import { gR } from "../figma_app/120210";
import { Um } from "../905/848862";
import { Kx } from "../figma_app/546509";
import { useIsLoading } from "../905/18797";
import { getPluginVersion } from "../figma_app/300692";
import { Vq } from "../figma_app/979658";
import { HubTypeEnum, hasMonetizedResourceMetadata } from "../figma_app/45218";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { r as _$$r } from "../905/319631";
import { Cf } from "../905/504727";
import { f as _$$f } from "../figma_app/58113";
import { cu } from "../figma_app/439332";
import { mS, zD } from "../figma_app/293326";
import { L as _$$L } from "../figma_app/520315";
import { cX, s3 } from "../figma_app/920333";
import { b as _$$b } from "../905/635568";
import { ConfirmationModal2 } from "../figma_app/918700";
import { tJ, VM, Mp, oQ, h_, P0, JX } from "../figma_app/269100";
import { A as _$$A } from "../svg/55550";
var d = l;
export function $$G2(e) {
  let t = useSelector(e => e.universalInsertModal);
  let r = e.id;
  let l = useSelector(e => e.publishedWidgets[r]);
  let m = isResourcePaymentFailed(l);
  let w = useDispatch();
  let j = Object.values(useLocalPluginsExcludingWidgets()).find(t => t.plugin_id === e.id);
  let G = !!useUserPublishedWidgets().find(t => t.id === e.id) && !j;
  let z = useSelector(e => e.dropdownShown?.data?.targetRect);
  let W = Um();
  let K = W?.type === $$H1 && W.data.widgetId === r;
  let Y = cX().tabManager;
  let $ = Vq(Y.activeTab);
  let X = Kx();
  let q = X?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os;
  useEffect(() => {
    l || w(af({
      id: r,
      resourceType: HubTypeEnum.WIDGET
    }));
  }, [r, w, l]);
  let J = _$$b();
  if (useIsLoading(af.loadingKeyForPayload({
    id: r,
    resourceType: HubTypeEnum.WIDGET
  })) && !l) return jsx(_$$L, {});
  if (!l) return null;
  let Z = getPluginVersion(l);
  return jsxs(TrackingProvider, {
    name: "detail",
    properties: {
      resourceId: e.id,
      isMonetized: hasMonetizedResourceMetadata(l),
      resourceType: HubTypeEnum.WIDGET,
      editorType: "figjam"
    },
    children: [jsx(_$$P, {
      height: mS(t.pinned, 500, s3, zD),
      children: jsxs("div", {
        className: tJ,
        children: [m && jsx(cu, {}), jsx("img", {
          className: d()(VM, Mp),
          src: Z.redirect_cover_image_url || "",
          alt: `${Z.name}`,
          width: gR,
          height: gR / 2
        }), jsx("div", {
          className: oQ,
          children: jsx(_$$f, {
            resource: l
          })
        }), jsx("div", {
          className: h_,
          children: jsx(_$$R, {
            fallback: null,
            errorFallback: null,
            value: Z.description
          })
        })]
      })
    }), !q && jsxs(LinkPrimitive, {
      newTab: !0,
      className: P0,
      href: `/community/widget/${r}`,
      trusted: !0,
      children: [jsx(SvgComponent, {
        svg: _$$A,
        className: JX
      }), renderI18nText("whiteboard.inserts.see_more_details_in_community")]
    }), K && z && jsxs(Cf, {
      targetRect: z,
      lean: "left",
      minWidth: 120,
      maxWidth: 190,
      disableDropdownScrollContainer: !0,
      propagateCloseClick: !0,
      children: [j?.error || G ? jsx(c$, {
        onClick: () => {
          j && j.error ? w(showModalHandler({
            type: _$$r,
            data: {
              error: j.error,
              dispatch: w,
              resourceType: HubTypeEnum.WIDGET
            },
            showModalsBeneath: !0
          })) : w(showModalHandler({
            type: $$V0,
            data: {
              dispatch: w
            },
            showModalsBeneath: !0
          }));
        },
        children: renderI18nText("whiteboard.inserts.in_development_version_error_dropdown")
      }) : jsx(c$, {
        onClick: () => {
          _$$j({
            pluginID: Z.plugin_id,
            widgetName: Z.name,
            pluginVersionID: "",
            triggeredFrom: $
          });
          J();
        },
        children: renderI18nText("whiteboard.inserts.in_development_version_dropdown")
      }), jsx(c$, {
        onClick: () => {
          _$$j({
            pluginID: Z.plugin_id,
            widgetName: Z.name,
            pluginVersionID: Z.id,
            triggeredFrom: $
          });
          J();
        },
        children: renderI18nText("whiteboard.inserts.published_version_dropdown")
      })]
    })]
  });
}
let $$V0 = registerModal(function ({
  dispatch: e
}) {
  return jsx(ConfirmationModal2, {
    cancelText: getI18nString("whiteboard.inserts.widget_development_error_modal_close"),
    confirmText: getI18nString("whiteboard.inserts.widget_development_import_manifest"),
    confirmationTitle: getI18nString("whiteboard.inserts.widget_development_error_modal_title"),
    content: getI18nString("whiteboard.inserts.widget_development_error_modal_description"),
    disableClickOutsideToHide: !0,
    hideCancel: !1,
    hideOnConfirm: !1,
    onConfirm: () => {
      e(JZ({
        resourceType: "widget"
      }));
      e(popModalStack());
    },
    popStack: !0,
    size: "small"
  });
}, "FigjamPublishedDevelopmentWidgetErrorModal", ModalSupportsBackground.YES);
let $$H1 = "DROPDOWN_TYPE_WIDGET_DETAIL_SUBMENU";
export const ak = $$V0;
export const cH = $$H1;
export const xl = $$G2;