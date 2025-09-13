import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import { Fullscreen } from "../figma_app/763686";
import l from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { sx as _$$sx } from "../905/941192";
import { RK } from "../figma_app/815170";
import { Dm, Uu } from "../figma_app/8833";
import { lg } from "../figma_app/976749";
import { PluginModalTypeEnum } from "../figma_app/671547";
import { fullscreenValue } from "../figma_app/455680";
import { F4 } from "../905/691205";
import { FFileType } from "../figma_app/191312";
import { UA } from "../905/250387";
import { F as _$$F } from "../905/162860";
import { Qq, bl, Ae, Yg, FI, ln, vk, ho, Kk, hc, Ef, i1, lY, yF, u6, kL, kz, YL } from "../figma_app/12182";
import { A as _$$A } from "../1617/353951";
import { A as _$$A2 } from "../1617/801573";
import { A as _$$A3 } from "../svg/333261";
import { A as _$$A4 } from "../svg/666535";
import { A as _$$A5 } from "../svg/335158";
import { A as _$$A6 } from "../svg/690738";
import { A as _$$A7 } from "../svg/843926";
import { A as _$$A8 } from "../svg/517886";
import { A as _$$A9 } from "../svg/811174";
import { A as _$$A0 } from "../svg/268295";
import { A as _$$A1 } from "../svg/51002";
var d = l;
function M(e) {
  let t;
  let r;
  let i;
  let o = useDispatch();
  let l = t => {
    o(RK({
      rawInput: e.urlString,
      event: t
    }));
    e.immediatelyDismissHyperlinkPopup && e.immediatelyDismissHyperlinkPopup();
  };
  let g = t => {
    e.data.type === _$$F.MAILTO || e.data.type === _$$F.TEL ? UA(o, e.data.url.pathname, "HyperlinkPopup") : console.error("We don't yet enable copy for other hyperlinks");
    e.immediatelyDismissHyperlinkPopup && e.immediatelyDismissHyperlinkPopup();
    t.stopPropagation();
  };
  let f = t => {
    e.immediatelyDismissHyperlinkPopup && e.immediatelyDismissHyperlinkPopup();
    e.showHyperlinkEditor();
    trackEventAnalytics("Show Hyperlink Editor", {
      source: "HyperlinkPopup"
    });
    t.stopPropagation();
  };
  let y = () => {
    (e.data.type === _$$F.GENERIC || e.data.type === _$$F.FIGMA_FILE || e.data.type === _$$F.FIGMA_PROTOTYPE || e.data.type === _$$F.FIGMA_VERSION) && e.getLinkMetadata && o(e.getLinkMetadata({
      clipboardText: e.data.url.toString(),
      url: e.data.url.toString(),
      isTextIframe: !1,
      entrypoint: PluginModalTypeEnum.MODAL
    }));
  };
  let M = t => {
    e.data.type === _$$F.MAILTO || e.data.type === _$$F.TEL ? g(t) : l(t);
  };
  let {
    data
  } = e;
  switch (data.type) {
    case _$$F.GENERIC:
    case _$$F.FIGMA_FILE:
    case _$$F.FIGMA_PROTOTYPE:
    case _$$F.FIGMA_VERSION:
      let j = data.url.host.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/, "");
      let U = data.url.pathname + data.url.search + data.url.hash;
      let B = U.split(/\//);
      let G = "design" === B[1] || "board" === B[1] || "proto" === B[1];
      let V = "board" === B[1];
      switch (data.type) {
        case _$$F.GENERIC:
          r = _$$A6;
          break;
        case _$$F.FIGMA_FILE:
        case _$$F.FIGMA_VERSION:
          r = G ? V ? _$$A : _$$A3 : _$$A6;
          break;
        case _$$F.FIGMA_PROTOTYPE:
          r = _$$A0;
      }
      if (F4(data.url.host) && G && B[2] && B[3]) {
        let e = data.url.pathname.split(/\//)[3];
        if (e) try {
          i = decodeURI(e).replace(/-/g, " ");
        } catch (e) {}
      }
      t = i ? jsx("div", {
        className: Qq,
        children: i
      }) : jsxs(Fragment, {
        children: [jsx("div", {
          className: bl,
          children: j
        }), U && "/" !== U && jsx("div", {
          className: Ae,
          children: U
        })]
      });
      break;
    case _$$F.PAGE:
      r = _$$A4;
      t = jsx("div", {
        className: Qq,
        children: data.text
      });
      break;
    case _$$F.FRAME:
      let H = data.text;
      r = _$$A5;
      H && e.editorType === FFileType.SITES && (r = _$$A9, "/" === H && (H = getI18nString("sites.panel.home"), r = _$$A7));
      t = jsxs(Fragment, {
        children: [jsx("div", {
          className: Qq,
          children: H
        }), data.secondaryText && jsxs("div", {
          className: Yg,
          children: [jsx(SvgComponent, {
            className: FI,
            svg: _$$A2
          }), data.secondaryText]
        })]
      });
      break;
    case _$$F.INVALID:
      r = _$$A6;
      t = jsx("div", {
        className: Qq,
        children: renderI18nText("hyperlink.invalid_link", {
          link: data.urlString
        })
      });
      break;
    case _$$F.MISSING:
    case _$$F.NOT_LOADED:
      r = _$$A6;
      t = jsx("div", {
        className: Qq,
        children: data.text
      });
      break;
    case _$$F.MAILTO:
      t = jsx("div", {
        className: Ae,
        children: data.url.pathname
      });
      r = _$$A8;
      break;
    case _$$F.TEL:
      r = _$$A1;
      t = jsx("div", {
        className: Ae,
        children: data.url.pathname
      });
  }
  let z = e.canEdit;
  let W = e.canEdit && (data.type === _$$F.GENERIC || data.type === _$$F.FIGMA_FILE || data.type === _$$F.FIGMA_VERSION || data.type === _$$F.FIGMA_PROTOTYPE);
  let K = function () {
    switch (e.data.type) {
      case _$$F.GENERIC:
      case _$$F.FIGMA_FILE:
      case _$$F.FIGMA_PROTOTYPE:
        return getI18nString("hyperlink.prefix.open");
      case _$$F.FIGMA_VERSION:
        return getI18nString("hyperlink.prefix.open_past_version");
      case _$$F.PAGE:
      case _$$F.FRAME:
        return getI18nString("hyperlink.prefix.go_to");
      case _$$F.MAILTO:
      case _$$F.TEL:
        return getI18nString("hyperlink.prefix.email");
      case _$$F.INVALID:
      case _$$F.MISSING:
      case _$$F.NOT_LOADED:
        return null;
    }
  }();
  let Y = (() => {
    switch (e.data.type) {
      case _$$F.MAILTO:
        return getI18nString("hyperlink.send_mail");
      case _$$F.TEL:
        return getI18nString("hyperlink.call_telephone");
      default:
        return null;
    }
  })();
  let $ = jsxs(Fragment, {
    children: [K ? jsxs("span", {
      className: ln,
      children: [K, " "]
    }) : null, t]
  });
  let X = (t, i) => jsxs(ButtonPrimitive, {
    className: d()({
      [vk]: t,
      [ho]: !t
    }),
    onClick: M,
    recordingKey: e.recordingKey,
    children: [t && jsx(SvgComponent, {
      className: Kk,
      style: _$$sx.$$if(r === _$$A, _$$sx.add({
        transform: "rotate(90deg)"
      })).$,
      svg: r
    }), i]
  });
  let q = jsx(ButtonPrimitive, {
    className: `${ho} ${vk}`,
    recordingKey: generateRecordingKey(e, "secondaryButton"),
    onClick: l,
    children: Y
  });
  let J = (t, r) => jsxs(ButtonPrimitive, {
    className: d()({
      [hc]: !t,
      [Ef]: t,
      [vk]: t
    }),
    onClick: f,
    "data-testid": "hyperlink.edit",
    recordingKey: generateRecordingKey(e, "editHyperlinkPopup"),
    children: [t && jsxs(Fragment, {
      children: [jsx(SvgComponent, {
        className: Kk,
        svg: _$$A6
      }), jsx("div", {
        className: d()(ln, i1),
        children: renderI18nText("hyperlink.edit")
      })]
    }), r]
  });
  return jsx("div", {
    className: lY,
    onMouseEnter: () => {
      e.onMouseEnter && e.onMouseEnter();
    },
    children: (() => {
      switch (e.editorType) {
        case FFileType.SITES:
          return jsx(Fragment, {
            children: X(!0, $)
          });
        case FFileType.WHITEBOARD:
          return jsxs(Fragment, {
            children: [X(!0, $), z && jsxs(Fragment, {
              children: [jsx("div", {
                className: yF
              }), J(!1, renderI18nText("hyperlink.edit"))]
            }), W && jsxs(Fragment, {
              children: [jsx("div", {
                className: yF
              }), jsx(ButtonPrimitive, {
                className: hc,
                recordingKey: generateRecordingKey(e, "unfurlHyperlinkPopup"),
                onClick: y,
                htmlAttributes: {
                  "data-testid": "hyperlink.preview"
                },
                children: renderI18nText("hyperlink.create_preview")
              })]
            })]
          });
        default:
          return jsxs(Fragment, {
            children: [X(!0, $), Y && jsxs(Fragment, {
              children: [jsx("div", {
                className: yF
              }), q]
            }), z && jsxs(Fragment, {
              children: [jsx("div", {
                className: yF
              }), J(!1, renderI18nText("hyperlink.edit"))]
            })]
          });
      }
    })()
  });
}
let F = ({
  size: e,
  mouse: t,
  position: r,
  forceToBottom: n
}) => {
  let i;
  let a;
  let s;
  let o = fullscreenValue.getViewportInfo();
  e.x < 300 ? i = r.x : (i = t.x) < r.x - e.x / 2 ? i = r.x - e.x / 2 : i > r.x + e.x / 2 && (i = r.x + e.x / 2);
  ((a = r.y) < 50 || n) && (a + e.y > o.height - 50 ? a = t.y : (a += e.y, s = u6));
  let l = {
    top: Math.round(a + o.y),
    left: Math.round(i + o.x),
    transform: "translateX(-50%)"
  };
  let d = {
    left: "50%"
  };
  if (o.width >= 800) {
    if (i <= 200) {
      let e = Math.max(i, 20);
      let t = 1 - (e - 20) / 180;
      let r = 50 + -50 * t;
      l.left = Math.round(e + o.x);
      l.transform = `translateX(${-r}%)`;
      d.left = `calc(${r}% + 20px * ${t})`;
    } else if (i > o.width - 200) {
      let e = Math.min(i, o.width - 20);
      let t = 1 - (o.width - 20 - e) / 180;
      let r = 50 + 50 * t;
      l.left = Math.round(e + o.x);
      l.transform = `translateX(${-r}%)`;
      d.left = `calc(${r}% - 20px * ${t})`;
    }
  }
  return {
    divStyle: l,
    tooltipStyle: d,
    verticalAlignmentStyle: s
  };
};
export function $$j0(e) {
  let {
    data,
    editorType,
    urlString,
    canEdit,
    onMouseEnter,
    immediatelyDismissHyperlinkPopup,
    getLinkMetadata,
    showHyperlinkEditor
  } = e;
  return jsx(M, {
    data,
    editorType,
    urlString,
    canEdit,
    recordingKey: "hyperlinkPopup",
    onMouseEnter,
    immediatelyDismissHyperlinkPopup,
    getLinkMetadata,
    showHyperlinkEditor
  });
}
export function $$U1(e) {
  let {
    getLinkMetadata
  } = e;
  let r = useSelector(e => e.hyperlinkPopup);
  let s = useSelector(e => e.mirror.appModel.isReadOnly);
  let l = lg();
  let d = useCallback(() => {
    r && Fullscreen.showHyperlinkEditor(r.position.x, r.position.y + r.size.y / 2, r.guid);
  }, [r]);
  if (!r) return null;
  let {
    divStyle,
    tooltipStyle,
    verticalAlignmentStyle
  } = F({
    size: r.size,
    mouse: r.mouse,
    position: r.position,
    forceToBottom: "whiteboard" === l
  });
  return jsx("div", {
    className: kL,
    style: divStyle,
    children: jsxs("div", {
      className: `${kz} ${verticalAlignmentStyle} ${Dm} ${Uu}`,
      children: [jsx($$j0, {
        data: r.data,
        editorType: l,
        urlString: r.urlString,
        canEdit: !s && !r.locked,
        onMouseEnter: Fullscreen.stopDismissingHyperlinkPopup,
        immediatelyDismissHyperlinkPopup: Fullscreen.immediatelyDismissHyperlinkPopup,
        getLinkMetadata,
        showHyperlinkEditor: d
      }), jsx("div", {
        className: YL,
        style: tooltipStyle
      })]
    })
  });
}
export const Ec = $$j0;
export const pq = $$U1;
