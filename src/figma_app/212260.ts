import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { _ as _$$_ } from "../figma_app/496441";
import { getFeatureFlags } from "../905/601108";
import l from "classnames";
import { R as _$$R } from "../figma_app/313269";
import { c$ } from "../figma_app/236327";
import { P as _$$P } from "../905/347284";
import { B as _$$B } from "../905/714743";
import { tx, t } from "../905/303541";
import { JZ } from "../figma_app/696043";
import { af } from "../figma_app/559491";
import { to, Lo } from "../905/156213";
import { fu } from "../figma_app/831799";
import { yQ, bh } from "../figma_app/844435";
import { gn } from "../figma_app/86989";
import { j as _$$j } from "../905/813868";
import { gR } from "../figma_app/120210";
import { Um } from "../905/848862";
import { Kx } from "../figma_app/546509";
import { oh } from "../905/18797";
import { uF } from "../figma_app/300692";
import { Vq } from "../figma_app/979658";
import { bD, m3 } from "../figma_app/45218";
import { Ju, ZU } from "../905/102752";
import { r as _$$r } from "../905/319631";
import { Cf } from "../905/504727";
import { f as _$$f } from "../figma_app/58113";
import { cu } from "../figma_app/439332";
import { mS, zD } from "../figma_app/293326";
import { L as _$$L } from "../figma_app/520315";
import { cX, s3 } from "../figma_app/920333";
import { b as _$$b } from "../905/635568";
import { yX } from "../figma_app/918700";
import { tJ, VM, Mp, oQ, h_, P0, JX } from "../figma_app/269100";
import { A as _$$A } from "../svg/55550";
var d = l;
export function $$G2(e) {
  let t = useSelector(e => e.universalInsertModal);
  let r = e.id;
  let l = useSelector(e => e.publishedWidgets[r]);
  let m = gn(l);
  let w = useDispatch();
  let j = Object.values(yQ()).find(t => t.plugin_id === e.id);
  let G = !!bh().find(t => t.id === e.id) && !j;
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
      resourceType: bD.WIDGET
    }));
  }, [r, w, l]);
  let J = _$$b();
  if (oh(af.loadingKeyForPayload({
    id: r,
    resourceType: bD.WIDGET
  })) && !l) return jsx(_$$L, {});
  if (!l) return null;
  let Z = uF(l);
  return jsxs(fu, {
    name: "detail",
    properties: {
      resourceId: e.id,
      isMonetized: m3(l),
      resourceType: bD.WIDGET,
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
    }), !q && jsxs(_$$_, {
      newTab: !0,
      className: P0,
      href: `/community/widget/${r}`,
      trusted: !0,
      children: [jsx(_$$B, {
        svg: _$$A,
        className: JX
      }), tx("whiteboard.inserts.see_more_details_in_community")]
    }), K && z && jsxs(Cf, {
      targetRect: z,
      lean: "left",
      minWidth: 120,
      maxWidth: 190,
      disableDropdownScrollContainer: !0,
      propagateCloseClick: !0,
      children: [j?.error || G ? jsx(c$, {
        onClick: () => {
          j && j.error ? w(to({
            type: _$$r,
            data: {
              error: j.error,
              dispatch: w,
              resourceType: bD.WIDGET
            },
            showModalsBeneath: !0
          })) : w(to({
            type: $$V0,
            data: {
              dispatch: w
            },
            showModalsBeneath: !0
          }));
        },
        children: tx("whiteboard.inserts.in_development_version_error_dropdown")
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
        children: tx("whiteboard.inserts.in_development_version_dropdown")
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
        children: tx("whiteboard.inserts.published_version_dropdown")
      })]
    })]
  });
}
let $$V0 = Ju(function ({
  dispatch: e
}) {
  return jsx(yX, {
    cancelText: t("whiteboard.inserts.widget_development_error_modal_close"),
    confirmText: t("whiteboard.inserts.widget_development_import_manifest"),
    confirmationTitle: t("whiteboard.inserts.widget_development_error_modal_title"),
    content: t("whiteboard.inserts.widget_development_error_modal_description"),
    disableClickOutsideToHide: !0,
    hideCancel: !1,
    hideOnConfirm: !1,
    onConfirm: () => {
      e(JZ({
        resourceType: "widget"
      }));
      e(Lo());
    },
    popStack: !0,
    size: "small"
  });
}, "FigjamPublishedDevelopmentWidgetErrorModal", ZU.YES);
let $$H1 = "DROPDOWN_TYPE_WIDGET_DETAIL_SUBMENU";
export const ak = $$V0;
export const cH = $$H1;
export const xl = $$G2;