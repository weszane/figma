import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { decodeBase64 } from "../905/561685";
import { ServiceCategories as _$$e } from "../905/165054";
import { useModalManager } from "../905/437088";
import { N as _$$N } from "../905/438674";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Button } from "../905/521428";
import { K } from "../905/946258";
import { getFeatureFlags } from "../905/601108";
import { ET, qW } from "../905/623179";
import { Badge, BadgeColor, BadgeSize } from "../figma_app/919079";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { showModalHandler } from "../905/156213";
import { createNoOpValidator } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { registerModal } from "../905/102752";
import { A as _$$A } from "../6828/289931";
var x = (e => (e.LibraryPublish = "library_publish", e.CommentAttachment = "comment_attachment", e.Video = "video", e.ExtensionPublish = "extension_publish", e))(x || {});
var S = (e => (e.FontList = "font_list", e))(S || {});
var w = (e => (e[e.NONE = 0] = "NONE", e[e.NON_S3_RESPONSE = 1] = "NON_S3_RESPONSE", e[e.OTHER = 2] = "OTHER", e))(w || {});
let C = new class {
  constructor() {
    this.GetCheckPresignedPostNetworkCompatibility = createNoOpValidator();
  }
  getCheckPresignedPostNetworkCompatibility() {
    return this.GetCheckPresignedPostNetworkCompatibility.validate(({
      xr: e
    }) => e.get("/api/check_network_compatibility"));
  }
  checkFontListNetworkCompatibility(e) {
    return XHR.crossOriginHead(e, null, {
      headers: {
        "Content-Type": "application/octet-stream"
      },
      responseType: "arraybuffer",
      retryCount: 0
    });
  }
}();
let R = decodeBase64("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==");
let N = registerModal(function (e) {
  let t = useDispatch();
  let i = useModalManager(e);
  let a = jsxs(Fragment, {
    children: [jsx("span", {
      children: getI18nString("check_network_compatibility.description")
    }), jsx("br", {}), jsx("br", {}), jsx("span", {
      children: getI18nString("check_network_compatibility.description_cta")
    }), "\xa0", jsx(_$$N, {
      href: "https://help.figma.com/hc/articles/19424714305943-Adjust-firewall-settings",
      newTab: !0,
      style: sx.colorTextBrand.cursorPointer.my16.$,
      children: renderI18nText("check_network_compatibility.view_help_center")
    })]
  });
  let s = ({
    feature: e,
    url: i,
    error: r,
    type: a
  }) => jsxs("div", {
    style: sx.mb16.fontMedium.$,
    children: [jsxs("div", {
      style: sx.mb8.flex.justifyBetween.selectNone.$,
      children: [jsxs("div", {
        style: sx.flex.gap4.$,
        children: [(() => {
          switch (e) {
            case x.LibraryPublish:
              return renderI18nText("check_network_compatibility.feature.library_publish");
            case x.ExtensionPublish:
              return renderI18nText("check_network_compatibility.feature.extension_publish");
            case x.CommentAttachment:
              return renderI18nText("check_network_compatibility.feature.comment_attachment");
            case x.Video:
              return renderI18nText("check_network_compatibility.feature.video");
            case S.FontList:
              return renderI18nText("check_network_compatibility.feature.font_list");
          }
        })(), jsx(Badge, {
          text: a,
          color: BadgeColor.DEFAULT,
          size: BadgeSize.SMALL,
          subtle: !0
        })]
      }), jsx("div", {
        children: r === w.NONE ? jsx("div", {
          style: sx.colorTextSuccess.$,
          children: renderI18nText("check_network_compatibility.available")
        }) : jsx("div", {
          style: sx.colorTextDanger.$,
          children: renderI18nText("check_network_compatibility.blocked")
        })
      })]
    }), r === w.NON_S3_RESPONSE ? jsxs("div", {
      style: sx.p8.colorBgSecondary.colorTextSecondary.bRadius4.flex.justifyBetween.itemsCenter.$,
      children: [jsx("span", {
        style: sx.mr8.$,
        children: i
      }), jsx(SvgComponent, {
        svg: _$$A,
        className: "check_network_compatibility--copySvg--1lHmK",
        onClick: () => {
          navigator.clipboard.writeText(i).then(() => {
            t(VisualBellActions.enqueue({
              message: getI18nString("check_network_compatibility.copied_to_clipboard")
            }));
          });
        }
      })]
    }) : null]
  }, e);
  return jsx(ModalRootComponent, {
    manager: i,
    width: 360,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("check_network_compatibility.title")
        })
      }), jsxs(nB, {
        children: [jsx("div", {
          style: sx.mt8.mb16.selectNone.$,
          children: a
        }), e.results.map(e => s(e))]
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx(Button, {
            variant: "secondary",
            onClick: e.onClose,
            children: renderI18nText("check_network_compatibility.close")
          })
        })
      })]
    })
  });
}, "CheckNetworkCompatibilityModal");
let P = "CHECK_NETWORK_COMPATIBILITY_VISUAL_BELL_TYPE";
export function $$O1(e, t) {
  e(VisualBellActions.enqueue({
    message: t,
    button: {
      text: getI18nString("check_network_compatibility.error_bell.view_settings"),
      action: () => ($$D0(e), !0)
    },
    error: !0
  }));
}
export function $$D0(e) {
  e(VisualBellActions.dequeue({
    matchType: P
  }));
  e(VisualBellActions.enqueue({
    message: getI18nString("check_network_compatibility.checking_network_settings"),
    icon: VisualBellIcon.SPINNER,
    type: P
  }));
  C.getCheckPresignedPostNetworkCompatibility().then(async ({
    data: t
  }) => {
    let i = await Promise.all(t.meta.map(async ({
      url: e,
      fields: t,
      feature: i
    }) => {
      try {
        await ET(_$$e.SCENEGRAPH_AND_SYNC, "test", e, t, R, "image/png");
        return {
          url: e,
          fields: t,
          feature: i,
          error: w.NONE,
          type: "POST"
        };
      } catch (n) {
        return {
          url: e,
          fields: t,
          feature: i,
          error: n instanceof qW ? w.NON_S3_RESPONSE : w.OTHER,
          type: "POST"
        };
      }
    }));
    if (getFeatureFlags().ce_font_network_status_ui) {
      let e = K({
        format: "kiwi",
        shouldUseLocalFontIndex: !!getFeatureFlags().font_index_use_local,
        shouldUse250317Index: !!getFeatureFlags().font_index_250317
      });
      try {
        await C.checkFontListNetworkCompatibility(e);
        i.push({
          url: e,
          fields: {},
          feature: S.FontList,
          error: w.NONE,
          type: "GET"
        });
      } catch (t) {
        i.push({
          url: e,
          fields: {},
          feature: S.FontList,
          error: w.NON_S3_RESPONSE,
          type: "GET"
        });
      }
    }
    e(VisualBellActions.dequeue({
      matchType: P
    }));
    i.some(({
      error: e
    }) => e !== w.NONE) ? (VisualBellActions.dequeue({
      matchType: P
    }), e(showModalHandler({
      type: N,
      data: {
        results: i
      }
    }))) : e(VisualBellActions.enqueue({
      message: getI18nString("check_network_compatibility.network_settings_compatible")
    }));
  }).catch(() => {
    e(VisualBellActions.enqueue({
      message: getI18nString("check_network_compatibility.error"),
      error: !0
    }));
  });
}
export const x9 = $$D0;
export const MZ = $$O1;