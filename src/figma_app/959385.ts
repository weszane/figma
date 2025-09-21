import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { IconButton } from "../905/443068";
import { C as _$$C } from "../905/520159";
import { N as _$$N } from "../905/301843";
import { W as _$$W } from "../905/865092";
import { useAtomWithSubscription } from "../figma_app/27355";
import { handleUrlAction } from "../905/280005";
import { R as _$$R } from "../figma_app/313269";
import { reportError } from "../905/11";
import { formatNumber } from "../figma_app/930338";
import { P as _$$P } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { x as _$$x } from "../905/868466";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { H8, Pf } from "../905/590952";
import { X as _$$X } from "../figma_app/514836";
import { S as _$$S } from "../figma_app/11182";
import { setupHyperlinkHandler } from "../figma_app/815170";
import { usePluginManifestById } from "../figma_app/844435";
import { manifestContainsWidget } from "../figma_app/155287";
import { KindEnum } from "../905/129884";
import { ox, ab } from "../figma_app/870683";
import { HW } from "../figma_app/632248";
import { z as _$$z } from "../905/654860";
import { cq } from "../905/794154";
import { m as _$$m } from "../figma_app/321561";
import { M$ } from "../figma_app/297822";
import { Sn } from "../905/946805";
import { t as _$$t2 } from "../905/605191";
import { R as _$$R2 } from "../905/240644";
import { n as _$$n } from "../905/895449";
import { k as _$$k } from "../905/341245";
import { t as _$$t3 } from "../905/572040";
import { kB } from "../figma_app/201703";
import { H5 } from "../905/235578";
import { D as _$$D } from "../figma_app/930185";
import { M6 } from "../figma_app/592180";
import { DS } from "../figma_app/467741";
import { Xq } from "../figma_app/254872";
import { o as _$$o } from "../figma_app/449363";
import { JT, Oy } from "../figma_app/930214";
import { C as _$$C2 } from "../905/481563";
import { A as _$$A } from "../6828/6507";
import { A as _$$A2 } from "../5724/693499";
function Z({
  augmentedExtension: e
}) {
  let {
    extension,
    publishedExtension
  } = e;
  let {
    pop
  } = cq();
  _$$z();
  let s = useRef(null);
  let {
    onAction,
    actionText
  } = _$$m({
    augmentedExtension: e,
    submenuRef: s,
    displayAboveTarget: !0
  });
  let d = H5.DETAILS;
  let c = _$$D({
    source: d,
    text: actionText,
    onAction,
    augmentedExtension: e,
    submenuRef: s,
    hideShortcutOnKeyboardFocus: !0
  });
  let u = DS(e);
  u && (u = M$(u, d));
  _$$k({
    primaryAction: c,
    tertiaryAction: u,
    actionLabel: !0,
    active: !0,
    target: null
  });
  let p = _$$x();
  let _ = HW - 48 - 41;
  let h = publishedExtension.unique_run_count;
  let m = publishedExtension.like_count;
  return jsxs(_$$n, {
    height: HW,
    width: p,
    dataTestId: "extension-details-view",
    children: [jsx(_$$t2, {}), jsx(ee, {
      extension,
      onGoBack: pop
    }), jsxs(_$$P, {
      height: _,
      className: cssBuilderInstance.px16.$,
      children: [jsx(et, {
        imgUrl: extension.redirect_cover_image_url,
        extensionName: extension.name
      }), jsx(er, {
        name: extension.name,
        numLikes: m,
        numRuns: h
      }), jsx(en, {
        publishedExtension
      }), jsx(ei, {
        description: extension.description
      })]
    }), jsx(Xq, {
      augmentedExtension: e
    })]
  });
}
function Q({
  augmentedExtension: e
}) {
  let t = useAtomWithSubscription(_$$t3);
  return jsx(M6, {
    numResults: 1,
    moduleFilters: t,
    children: jsx(Z, {
      augmentedExtension: e
    })
  });
}
function ee({
  extension: e,
  onGoBack: t
}) {
  let r = manifestContainsWidget(e);
  let s = r ? getI18nString("qa.extensions.widget") : getI18nString("qa.extensions.plugin");
  let u = e.plugin_id;
  let _ = function (e) {
    let t = useDispatch();
    let r = manifestContainsWidget(e) ? ox(e.plugin_id) : ab(e.plugin_id);
    return useCallback(() => {
      handleUrlAction(r) || t(setupHyperlinkHandler({
        rawInput: r
      }));
    }, [t, r]);
  }(e);
  let h = useDispatch();
  let m = useCallback(() => {
    h(_$$S({
      url: r ? ox(u) : ab(u),
      linkType: r ? "widget" : "plugin"
    }));
  }, [h, r, u]);
  return jsx("div", {
    className: cssBuilderInstance.p8.$,
    style: styleBuilderInstance.add({
      height: "48 px"
    }).$,
    children: jsxs("div", {
      className: cssBuilderInstance.flex.h32.px4.itemsCenter.justifyBetween.$,
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.flexRow.$,
        children: [jsx(IconButton, {
          onClick: t,
          "aria-label": getI18nString("qa.go_back"),
          children: jsx(_$$C, {})
        }), jsx("div", {
          className: cssBuilderInstance.pl8.colorText.textBodyLarge.$,
          children: s
        })]
      }), jsxs("div", {
        className: cssBuilderInstance.flex.flexRow.itemsCenter.gap8.$,
        children: [jsx(IconButton, {
          onClick: _,
          "aria-label": getI18nString("qa.extensions.open_in_community"),
          htmlAttributes: {
            "data-tooltip": getI18nString("qa.extensions.open_in_community"),
            "data-tooltip-type": KindEnum.TEXT
          },
          children: jsx(_$$N, {})
        }), jsx(IconButton, {
          onClick: m,
          "aria-label": getI18nString("qa.copy_link"),
          htmlAttributes: {
            "data-tooltip": getI18nString("qa.copy_link"),
            "data-tooltip-type": KindEnum.TEXT
          },
          children: jsx(_$$W, {})
        })]
      })]
    })
  });
}
function et({
  imgUrl: e,
  extensionName: t
}) {
  let r = _$$X(e);
  return jsx("div", {
    className: cssBuilderInstance.overflowHidden.bRadius5.mb12.$,
    style: styleBuilderInstance.add({
      aspectRatio: r ? "16/9" : "2/1",
      background: "var(--color-loading)"
    }).$,
    children: jsx("img", {
      src: e,
      className: cssBuilderInstance.hFull.wFull.eventsNone.$,
      style: styleBuilderInstance.add({
        objectFit: "cover"
      }).$,
      alt: `Thumbnail for ${t}`
    })
  });
}
function er({
  name: e,
  numLikes: t,
  numRuns: r
}) {
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexRow.justifyBetween.$,
    children: [jsx("div", {
      className: cssBuilderInstance.colorText.textHeadingMedium.$,
      children: e
    }), jsxs("div", {
      className: cssBuilderInstance.flex.flexRow.itemsCenter.gap8.colorTextSecondary.textBodyMedium.$,
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.flexRow.gap2.$,
        children: [jsx(SvgComponent, {
          svg: _$$A2,
          className: cssBuilderInstance.colorIconSecondary.$,
          style: styleBuilderInstance.add({
            margin: "3px"
          }).$
        }), jsx("div", {
          children: formatNumber(t)
        })]
      }), jsxs("div", {
        className: cssBuilderInstance.flex.flexRow.gap2.$,
        children: [jsx(SvgComponent, {
          svg: _$$A,
          className: cssBuilderInstance.mx2.colorIconSecondary.$
        }), jsx("div", {
          children: formatNumber(r)
        })]
      })]
    })]
  });
}
function en({
  publishedExtension: e
}) {
  if (!e) return null;
  let t = e.community_publishers?.accepted[0];
  if (!t) return null;
  let {
    img_url,
    name
  } = t;
  return jsxs("div", {
    className: cssBuilderInstance.pt4.flex.flexRow.itemsCenter.justifyBetween.colorTextSecondary.textBodyMedium.$,
    children: [jsxs("div", {
      className: cssBuilderInstance.flex.$,
      children: [jsx(H8, {
        user: {
          img_url,
          name
        },
        size: Pf.SMALL16
      }), jsx("div", {
        className: cssBuilderInstance.pl8.$,
        children: kB(e)
      })]
    }), jsx("div", {
      children: jsx(_$$o, {
        publishedExtension: e,
        showTooltip: !0
      })
    })]
  });
}
function ei({
  description: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.pt16.pb8.$,
    children: jsx(_$$R, {
      value: e,
      quillClassName: _$$C2,
      fallback: null,
      errorFallback: null
    })
  });
}
export function $$ea1({
  extension: e,
  preloadImage: t
}) {
  let {
    push
  } = cq();
  !function ({
    augmentedExtension: e,
    enabled: t
  }) {
    let r = useRef(null);
    if (!t || JT(e) || r.current) return;
    let {
      extension
    } = e;
    let a = new Image();
    a.src = extension.redirect_cover_image_url;
    r.current = a;
  }({
    augmentedExtension: e,
    enabled: t
  });
  return useCallback(() => {
    if (JT(e)) {
      reportError(_$$e.AI_FOR_PRODUCTION, Error("[Quick Actions] Trying to open details view for a local extension, which should not be possible."), {
        extra: {
          extensionId: e.extension.plugin_id,
          isWidget: manifestContainsWidget(e.extension),
          types: Array.from(e.types).toString()
        }
      });
      return;
    }
    if (!e.publishedExtension) {
      reportError(_$$e.AI_FOR_PRODUCTION, Error("[Quick Actions] Trying to open details view for an extension without a published extension, which should not be possible."), {
        extra: {
          extensionId: e.extension.plugin_id,
          isWidget: manifestContainsWidget(e.extension),
          types: Array.from(e.types).toString()
        }
      });
      return;
    }
    let t = {
      ...e,
      publishedExtension: e.publishedExtension
    };
    push({
      name: Sn.EXTENSION_DETAILS,
      module: jsx(Q, {
        augmentedExtension: t
      })
    }, {
      shouldResetSearchQuery: !1
    });
  }, [e, push]);
}
function es() {
  let {
    pop
  } = cq();
  useEffect(() => {
    pop();
  }, [pop]);
  return null;
}
export function $$eo0({
  extensionId: e,
  extensionType: t
}) {
  let r = usePluginManifestById(e, !0);
  let i = Oy();
  if (!r.loaded) return jsx(_$$R2, {});
  let a = r.plugin;
  if (!a) return jsx(es, {});
  let s = i(a, t);
  return JT(s) ? jsx(es, {}) : s.publishedExtension ? jsx(Q, {
    augmentedExtension: {
      ...s,
      publishedExtension: s.publishedExtension
    }
  }) : jsx(_$$R2, {});
}
export const C = $$eo0;
export const O = $$ea1;