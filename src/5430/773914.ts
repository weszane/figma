import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { hasDesktopAPI } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { reportError } from "../905/11";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePopoverPrimitive, PopoverPrimitiveContainer, PopoverPrimitiveArrow } from "../905/691059";
import { K as _$$K } from "../905/443068";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { r as _$$r } from "../905/857502";
import { V as _$$V } from "../1577/311426";
import { UI3ConditionalWrapper } from "../905/341359";
import { eJ } from "../vendor/352483";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { o as _$$o } from "../905/160095";
import { getI18nString } from "../905/303541";
import { Jm, BY } from "../figma_app/387599";
import { y$ } from "../figma_app/835219";
import { lW, tv, DV } from "../figma_app/471982";
import { K2 } from "../figma_app/777551";
import { XW, qY, ws, zL, Vm, $9, o_, B2 } from "../figma_app/427318";
import { Z as _$$Z } from "../905/909123";
import { jT } from "../figma_app/354658";
import { Om, tv as _$$tv } from "../figma_app/979714";
import { showModalHandler, hideModalHandler } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { KindEnum } from "../905/129884";
import { e0 } from "../905/696396";
import { registerModal } from "../905/102752";
import { S as _$$S } from "../5430/743953";
import { Kj, bb, W6 } from "../7222/418961";
import { Rj, mk } from "../figma_app/999312";
import { X6 } from "../5430/28597";
import { Y as _$$Y } from "../5430/601486";
import { Q as _$$Q } from "../5430/117345";
import { Y as _$$Y2 } from "../5430/229344";
import { qG } from "../figma_app/701107";
import { vt } from "../figma_app/306946";
import { lx } from "../figma_app/558929";
import { jd } from "../figma_app/106207";
import { FFileType, FOrganizationLevelType } from "../figma_app/191312";
import { getCurrentPluginVersion, pluginMetadata } from "../figma_app/300692";
import { FEditorType } from "../figma_app/53721";
import { vt as _$$vt } from "../905/862883";
import { noop } from "../5430/262192";
import { H as _$$H } from "../5430/992445";
import { to as _$$to } from "../figma_app/764679";
import { H as _$$H2 } from "../905/548668";
let $ = (e, t, r) => {
  e(showModalHandler({
    type: Z,
    data: {
      resourceId: t,
      resourceType: r
    }
  }));
};
function z({
  rdpUrl: e
}) {
  let [t, r] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps,
    getArrowProps
  } = usePopoverPrimitive({
    type: "dialog",
    isOpen: t,
    onOpenChange: r,
    placement: "bottom"
  });
  return jsxs("div", {
    children: [jsx(_$$K, {
      ...getTriggerProps(),
      onClick: () => {
        lW(e);
        r(!0);
        setTimeout(() => r(!1), 2e3);
      },
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("file_browser.copy_link")
      },
      "aria-label": getI18nString("file_browser.copy_link"),
      children: jsx(_$$r, {})
    }), jsxs(PopoverPrimitiveContainer, {
      ...getContainerProps({
        style: void 0
      }),
      children: [jsx(PopoverPrimitiveArrow, {
        ...getArrowProps(),
        fill: "var(--color-bg-brand)"
      }), jsx("div", {
        children: getI18nString("file_permissions_modal.link_copied")
      })]
    })]
  });
}
function Q({
  dispatch: e,
  route: t,
  resourceId: r,
  resourceType: s,
  sharedRouteParams: n
}) {
  return jsx(_$$o, {
    href: t,
    newTab: !0,
    onClick: () => {
      t ? e(hideModalHandler()) : reportError(_$$e.COMMUNITY, Error("newTabButton: route is empty"), {
        extra: {
          sharedRouteParams: n
        }
      });
    },
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("file_browser.open_in_new_tab")
    },
    className: "lightbox_rdp--link--x0gtt lightbox_rdp--iconButton--kEwkm lightbox_rdp--baseIconButton--rtsxU",
    "aria-label": getI18nString("file_browser.open_in_new_tab"),
    trackingProperties: {
      ...Kj(s, r),
      trackingDescriptor: _$$c.OPEN_IN_NEW_TAB
    },
    children: jsx("span", {
      className: "lightbox_rdp--icon--imaRw",
      children: jsx(_$$V, {})
    })
  });
}
let Z = registerModal(function (e) {
  let t;
  let r;
  let s = useDispatch();
  let i = hasDesktopAPI();
  let [a, u] = useAtomValueAndSetter(_$$Q);
  let m = useRef(!1);
  let x = Om();
  let f = _$$tv() ?? void 0;
  let {
    resourceUrl,
    resourceId,
    resourceType,
    shouldUpdateUrl,
    open
  } = e;
  if (resourceUrl) {
    let e = tv(resourceUrl);
    t = e?.resourceId;
    r = e?.apiResourceType;
  }
  let Z = resourceId || t;
  let q = r || resourceType;
  let Y = x && q && Z ? new jT({
    ...x,
    apiResourceType: q,
    resourceId: Z
  }, f).href : "";
  let [X] = setupResourceAtomHandler(_$$Z({
    apiResourceType: q,
    id: Z
  }), {
    enabled: !!q && !!Z
  });
  let J = X.data;
  let K = J && XW(J) ? qY(J) : J;
  let ee = "";
  J && K && (ee = ws(J) ? J.rdp_url : DV(K));
  useEffect(() => {
    if (shouldUpdateUrl && open && Y && !m.current) {
      window.history.pushState(null, "", Y);
      return () => {
        m.current || window.history.back();
      };
    }
  }, [open, Y, shouldUpdateUrl]);
  useEffect(() => {
    if (!shouldUpdateUrl) return;
    let e = () => {
      let e = customHistory.location.pathname + customHistory.location.search;
      open && e !== Y && (m.current = !0, s(hideModalHandler()), bb(J?.id || "", q || ""));
    };
    if (open && Y) return customHistory.listen(() => {
      e();
    });
  }, [open, Y, s, J?.id, q, shouldUpdateUrl]);
  useEffect(() => {
    K && _$$S(s, K);
  }, [s, K]);
  let et = useModalManager({
    ...e,
    onClose: ({
      source: e
    }) => {
      "escape" === e && a ? u(!1) : (s(hideModalHandler()), bb(J?.id || "", q || ""));
    }
  });
  let er = eJ();
  let es = Jm();
  let ei = BY();
  let en = W6(q || "", Z || "", es, ei);
  let eo = J && zL(J);
  let ea = !i && jsx(Q, {
    dispatch: s,
    route: Y,
    resourceId: Z || "",
    resourceType: q,
    sharedRouteParams: x
  });
  return jsx(UI3ConditionalWrapper, {
    children: jsx(Rj.Provider, {
      value: mk.RESOURCE_HUB,
      children: jsx(TrackingProvider, {
        name: e0.RESOURCE_HUB_LIGHTBOX_RDP,
        properties: en,
        children: jsx(ModalRootComponent, {
          manager: et,
          width: 1048,
          height: "full",
          children: jsxs(vo, {
            children: [jsxs(Y9, {
              children: [jsx(hE, {
                children: J && K2(J)
              }), jsxs("div", {
                className: "x78zum5 x1v2ro7d x8x9d4c xnuq7ks",
                children: [jsx(z, {
                  rdpUrl: ee
                }), ea]
              })]
            }), jsx(nB, {
              children: J && K ? jsxs(Fragment, {
                children: [eo ? jsx(_$$Y, {
                  resource: J,
                  resourceContent: K
                }) : jsx(_$$Y2, {
                  resource: J,
                  resourceContent: K
                }), jsx(X6, {
                  resource: J,
                  resourceContent: K,
                  rdpImpressionId: er,
                  openLightboxRDP: $
                })]
              }) : jsx("div", {
                className: "x78zum5 xl56j7k x6s0dn4 xqt63rz",
                children: jsx(y$, {})
              })
            })]
          })
        })
      })
    }, "resource-hub-context")
  });
});
export function $$ea2(e, t) {
  let r = function (e, t) {
    if (!t) return null;
    if (!ws(e)) return new jT({
      ...t,
      apiResourceType: qG[Vm(e)],
      resourceId: e.id
    });
    {
      let r = tv(e.rdp_url);
      let s = r?.apiResourceType;
      let i = r?.resourceId;
      return s && i ? new jT({
        ...t,
        apiResourceType: s,
        resourceId: i
      }) : null;
    }
  }(e, t);
  if (!r) {
    reportError(_$$e.COMMUNITY, Error("ResourceHubResourceRoute is empty"), {
      extra: {
        resourceId: e.id,
        resourceType: Vm(e),
        sharedRouteParams: t
      }
    });
    return;
  }
  customHistory.redirect(r.href, "_blank");
}
export function $$el1(e, t, r) {
  let s = hasDesktopAPI();
  let i = r.openInNewTab && !s;
  let o = !r.openInNewTab && r.shouldUpdateUrl;
  if (i) {
    $$ea2(t, r.sharedRouteParams);
    return;
  }
  if (ws(t)) e(showModalHandler({
    type: Z,
    data: {
      resourceUrl: t.rdp_url,
      shouldUpdateUrl: o
    }
  }));else {
    var a;
    var l;
    a = t.id;
    l = qG[Vm(t)];
    e(showModalHandler({
      type: Z,
      data: {
        resourceId: a,
        resourceType: l,
        shouldUpdateUrl: o
      }
    }));
  }
}
export function $$ec3(e, t) {
  switch (t.editorType) {
    case FFileType.SLIDES:
      eu(t);
      break;
    case FFileType.COOPER:
      e_(t);
      break;
    case FFileType.WHITEBOARD:
      em(e, t);
      break;
    case FFileType.FIGMAKE:
      ep(e, t);
      break;
    case FFileType.DESIGN:
    case FFileType.SITES:
    case null:
      break;
    default:
      throwTypeError(t.editorType);
  }
}
export function $$ed0(e, t, r, n) {
  switch (t.resource_type) {
    case vt.PLUGIN:
    case vt.WIDGET:
      !function (e, t, r, s) {
        let n = $9(t);
        if (!n) {
          reportError(_$$e.COMMUNITY, Error("Plugin resource has no plugin"), {
            extra: {
              resourceId: t.id
            }
          });
          return;
        }
        if (!(s?.key.type === FOrganizationLevelType.ORG ? s.key.parentId : null)) {
          reportError(_$$e.COMMUNITY, Error("Internal extensions can only be used in an org"), {
            extra: {
              resourceId: t.id
            }
          });
          return;
        }
        let o = getCurrentPluginVersion(n) || pluginMetadata;
        let l = _$$H(r, s, o);
        let c = !!(o.playground_file_version_id || l === FEditorType.DevHandoff);
        _$$to(t.id, c ? "playground" : "new_file", l);
        e(lx({
          extension: n,
          fullscreenEditorType: l
        }));
      }(e, t, r, n);
      break;
    case vt.SLIDE_TEMPLATE:
      eu(t);
      break;
    case vt.FIGJAM_TEMPLATE:
      em(e, t);
      break;
    case vt.COOPER_TEMPLATE_FILE:
      e_(t);
      break;
    case vt.FIGMAKE_TEMPLATE:
      ep(e, t);
      break;
    case vt.UI_KIT:
    case vt.PROTOTYPE:
    case vt.DESIGN_TEMPLATE:
    case vt.SITE_TEMPLATE:
    case vt.COOPER_TEMPLATE_ASSET:
      break;
    default:
      throwTypeError(t.resource_type);
  }
}
function eu(e) {
  let t;
  let r = o_(e);
  if (r) t = e.libraryKey;else {
    let r = B2(e);
    t = r?.library_key;
  }
  if (t) {
    r ? noop.addResourceUse({
      templateId: e.id
    }) : noop.addResourceUse({
      resourceId: e.id
    });
    let s = _$$H2(FFileType.SLIDES, t);
    customHistory.redirect(s, "_blank");
  } else {
    let t = r ? void 0 : e.id;
    let s = r ? e.id : void 0;
    reportError(_$$e.COMMUNITY, Error("Slide template has no library key"), {
      extra: {
        resourceId: t,
        templateId: s
      }
    });
  }
}
function em(e, t) {
  let r;
  let s;
  let n = o_(t);
  if (n) {
    r = t.fileKey;
    s = t.name;
  } else {
    let e = B2(t);
    r = e?.file_key;
    s = e?.name;
  }
  if (r && s) {
    e(jd({
      templateIdentifier: {
        type: _$$vt.TeamTemplate,
        file_key: r
      },
      templateName: s,
      openInNewTab: !0
    }));
    n ? noop.addResourceUse({
      templateId: t.id
    }) : noop.addResourceUse({
      resourceId: t.id
    });
  } else {
    let e = n ? void 0 : t.id;
    let r = n ? t.id : void 0;
    reportError(_$$e.COMMUNITY, Error("FigJam template has no file key or name"), {
      extra: {
        resourceId: e,
        templateId: r
      }
    });
  }
}
function e_(e) {
  let t;
  let r = o_(e);
  if (r) t = e.libraryKey;else {
    let r = B2(e);
    t = r?.library_key;
  }
  if (t) {
    r ? noop.addResourceUse({
      templateId: e.id
    }) : noop.addResourceUse({
      resourceId: e.id
    });
    let s = _$$H2(FFileType.COOPER, t);
    customHistory.redirect(s, "_blank");
  } else {
    let t = r ? void 0 : e.id;
    let s = r ? e.id : void 0;
    reportError(_$$e.COMMUNITY, Error("Cooper template has no library key"), {
      extra: {
        resourceId: t,
        templateId: s
      }
    });
  }
}
function ep(e, t) {
  let r;
  let s;
  let n = o_(t);
  if (n) {
    r = t.fileKey;
    s = t.name;
  } else {
    let e = B2(t);
    r = e?.file_key;
    s = e?.name;
  }
  if (r && s) {
    e(jd({
      templateIdentifier: {
        type: _$$vt.TeamTemplate,
        file_key: r
      },
      templateName: s,
      openInNewTab: !0
    }));
    n ? noop.addResourceUse({
      templateId: t.id
    }) : noop.addResourceUse({
      resourceId: t.id
    });
  } else {
    let e = n ? void 0 : t.id;
    let r = n ? t.id : void 0;
    reportError(_$$e.COMMUNITY, Error("Figmake template has no file key or name"), {
      extra: {
        resourceId: e,
        templateId: r
      }
    });
  }
}
export const Gq = $$ed0;
export const FM = $$el1;
export const RL = $$ea2;
export const xb = $$ec3;