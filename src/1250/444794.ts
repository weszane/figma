import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { k as _$$k } from "../905/443820";
import { E as _$$E } from "../905/632989";
import { $n, IK } from "../905/521428";
import { N as _$$N } from "../905/438674";
import { Q } from "../1250/220026";
import { q } from "../905/838985";
import { _ as _$$_ } from "../905/563242";
import { e as _$$e } from "../905/149844";
import { g as _$$g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import { useAtomWithSubscription } from "../figma_app/27355";
import f from "classnames";
import { FJ } from "../905/508367";
import { oW } from "../905/675859";
import { Qp, JR, Wi } from "../figma_app/162641";
import { A as _$$A } from "../905/615098";
import { F as _$$F } from "../905/171275";
import { s as _$$s } from "../cssbuilder/589278";
import { e6 } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { Q as _$$Q } from "../905/978641";
import { ce, Lm, U_, mF } from "../figma_app/755939";
import { c as _$$c } from "../905/370443";
import { T5 as _$$T } from "../figma_app/465071";
import { Ib } from "../905/129884";
import { zA, o6, VU } from "../1250/322393";
var h = f;
let O = "cooper_template_ui--tile--jISg-";
let R = "cooper_template_ui--detailTileContainer--jd6Lz";
let M = "cooper_template_ui--detailTile--9845k";
let P = "cooper_template_ui--hoverOverlayTarget--p--MK";
let D = "cooper_template_ui--rowMargin--swZAo";
let L = "cooper_template_ui--rowContainer--XSWCI";
let F = "cooper_template_ui--rowIconContainer--2MsQm";
let B = "cooper_template_ui--rowMetadataContainer--za0YG";
let U = "cooper_template_ui--rowMetadataTitle--iceIC";
let $$G0 = "https://help.figma.com/hc/articles/31271693614487";
let W = {
  image: e => [{
    objectFit: "x19kjcj4",
    height: null == e ? null : "x1f5funs",
    $$css: !0
  }, {
    "--height": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(e)
  }]
};
export function $$z1() {
  return jsx("div", {
    className: _$$s.flexColumn.alignCenter.pt32.pb16.$,
    children: jsx("div", {
      className: _$$s.mxAuto.w24.h24.$,
      children: jsx(_$$k, {})
    })
  });
}
let $ = "cooper-tile-id";
export function $$q8({
  name: e,
  label: t,
  thumbnailUrl: n,
  additionalThumbnailUrls: r,
  onClick: i,
  libraryKey: s,
  truncateHoverText: l = !1
}) {
  let {
    numComponents
  } = zA(s);
  let c = numComponents > 0 ? l ? getI18nString("cooper.templates.view_n_templates_short", {
    numTemplates: numComponents
  }) : getI18nString("cooper.templates.view_n_templates", {
    numTemplates: numComponents
  }) : l ? getI18nString("cooper.templates.view") : getI18nString("cooper.templates.view_templates");
  return jsx(_$$E, {
    onClick: i,
    htmlAttributes: {
      "data-testid": `templateDetailTile.${e}`
    },
    className: P,
    children: jsxs("div", {
      className: R,
      children: [jsxs("div", {
        className: M,
        children: [n && r && r.length > 0 ? jsx("div", {
          className: "cooper_template_ui--thumbnailContainer--OH-6w",
          children: jsx(_$$A, {
            thumbnailUrl: n,
            additionalThumbnailUrls: r || [],
            thumbnailType: _$$F.COOPER,
            noBorder: !0
          })
        }) : jsx("div", {
          className: _$$s.flex.justifyCenter.itemsCenter.overflowHidden.wFull.hFull.$,
          children: jsx(_$$Q, {
            src: n || void 0,
            alt: e,
            draggable: !1,
            imageStyle: W.image("100%"),
            loading: "lazy",
            crossOrigin: "use-credentials",
            fadeInOnLoad: !0
          })
        }), jsx(ea, {
          variant: "view",
          buttonText: c,
          ariaLabel: e
        })]
      }), jsx(et, {
        title: e,
        subtitle: t
      })]
    })
  });
}
export function $$V10() {
  return jsxs("div", {
    className: "cooper_template_ui--detailTilePlaceholderContainer--bq545",
    children: [jsx("div", {
      className: O,
      children: jsx("div", {
        className: _$$s.flex.justifyCenter.itemsCenter.overflowHidden.wFull.hFull.$,
        children: jsx(Qp, {
          className: "cooper_template_ui--tilePlaceholderImage--AwOc0",
          animationType: JR.LIGHT_SHIMMER,
          primary: !0
        })
      })
    }), jsxs("div", {
      className: "cooper_template_ui--tilePlaceholderMetadataContainer--JDVbm",
      children: [jsx("div", {
        style: {
          display: "table-row"
        },
        children: jsx(Wi, {
          className: "cooper_template_ui--tilePlaceholderTitle--z-TuN",
          animationType: JR.LIGHT_SHIMMER
        })
      }), jsx("div", {
        style: {
          display: "table-row"
        },
        children: jsx(Wi, {
          className: "cooper_template_ui--tilePlaceholderSubtitle--UslXp",
          animationType: JR.LIGHT_SHIMMER
        })
      })]
    })]
  });
}
export function $$H7({
  name: e,
  thumbnailUrl: t,
  onPointerDown: n,
  isAboveFold: i = !1,
  dimensions: o,
  assetTypeName: s,
  hasVideo: l = !1
}) {
  let [d, c] = useState(!1);
  return jsxs("div", {
    className: "cooper_template_ui--tileContainer--OsY1W",
    children: [jsx(en, {
      onPointerDown: n,
      isSquareTile: !o,
      shouldShowPlusButtonOnHover: !0,
      dimensions: o,
      ariaLabel: e,
      hasVideo: l,
      children: jsx("span", {
        className: _$$s.flex.justifyCenter.itemsCenter.overflowHidden.wFull.hFull.$,
        children: jsx(oW, {
          onLoad: () => {
            c(!0);
          },
          src: t,
          alt: e,
          draggable: !1,
          style: {
            objectFit: "contain",
            transition: "opacity 0.1s ease-in-out",
            opacity: d ? 1 : 0,
            borderRadius: "var(--radius-medium)",
            ...(o ? {
              aspectRatio: o.width / o.height,
              width: "100%",
              height: "auto"
            } : {
              width: "100%",
              height: "100%"
            })
          },
          loading: i ? "eager" : "lazy"
        })
      })
    }), s && jsx("span", {
      ...xk(K.assetTypeName),
      children: s
    })]
  });
}
let K = {
  assetTypeName: {
    ..._$$g.textBodyMedium,
    color: "x1n0bwc9",
    $$css: !0
  }
};
export function $$Y2({
  onPointerDown: e
}) {
  let t = _$$T("useAllowInternalTemplatesCooper");
  let n = "loaded" === t.status ? t.data?.name : void 0;
  return jsx(_$$E, {
    onClick: e,
    className: P,
    "data-testid": "create-new-template-tile",
    children: jsxs("div", {
      className: R,
      children: [jsxs("div", {
        className: M,
        children: [jsx(Q, {}), jsx(ea, {
          variant: "add",
          buttonText: getI18nString("cooper.templates.new_template")
        })]
      }), jsx(et, {
        title: getI18nString("cooper.templates.new_template"),
        subtitle: n && getI18nString("cooper.templates.for_plan_name", {
          planName: n
        })
      })]
    })
  });
}
export function $$Q6({
  templateType: e,
  iconUrl: t,
  onPointerDown: n
}) {
  let {
    name,
    dimension
  } = e;
  let o = dimension.x / dimension.y;
  return jsx("button", {
    onClick: n,
    className: P,
    "data-testid": "start-from-scratch-template-tile",
    children: jsxs("div", {
      className: R,
      children: [jsxs("div", {
        className: M,
        children: [jsx("div", {
          className: h()("cooper_template_ui--startFromScratchAsset--5ppxw", o > 1 ? "cooper_template_ui--horizontalAspectRatio--CE1m4" : "cooper_template_ui--verticalAspectRatio--5b2Ap"),
          style: o < 2.5 && o > .4 ? {
            aspectRatio: dimension.x / dimension.y
          } : void 0,
          children: t && jsx(oW, {
            src: t,
            alt: name,
            draggable: !1,
            style: {
              objectFit: "contain",
              width: "12px",
              height: "12px"
            },
            loading: "lazy"
          })
        }), jsx(ea, {
          variant: "add",
          buttonText: getI18nString("cooper.templates.add_blank"),
          ariaLabel: name
        })]
      }), jsx(et, {
        title: name,
        subtitle: `${dimension.x} x ${dimension.y}`
      })]
    })
  });
}
export function $$Z5({
  templateType: e,
  iconUrl: t,
  onPointerDown: n
}) {
  let {
    name,
    dimension
  } = e;
  let l = useRef(null);
  let d = o6(l) ? {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": name,
    "data-tooltip-timeout-delay": 300
  } : {};
  return jsx("div", {
    className: D,
    children: jsxs(_$$E, {
      onClick: n,
      actionOnPointerDown: !0,
      htmlAttributes: {
        "data-element-target": $
      },
      className: L,
      ...d,
      children: [t ? jsx("div", {
        className: F,
        children: jsx(oW, {
          src: t,
          alt: name,
          draggable: !1,
          style: {
            objectFit: "contain",
            width: "12px",
            height: "12px"
          },
          loading: "lazy"
        })
      }) : jsx(J, {}), jsxs("div", {
        className: B,
        children: [name && jsx("span", {
          ref: l,
          className: U,
          children: name
        }), dimension && jsx("span", {
          className: "cooper_template_ui--rowMetadataSubtitle--RjcR9",
          children: `${dimension.x} x ${dimension.y}`
        })]
      })]
    })
  });
}
export function $$X4({
  onPointerDown: e
}) {
  return jsx("div", {
    className: D,
    children: jsxs(_$$E, {
      onClick: e,
      actionOnPointerDown: !0,
      className: L,
      recordingKey: "cooperStartFromScratchCustomSize",
      children: [jsx(J, {}), jsx("div", {
        className: B,
        children: jsx("span", {
          className: U,
          children: getI18nString("cooper.templates.custom_size")
        })
      })]
    })
  });
}
function J() {
  return jsx("div", {
    className: F,
    children: jsx(q, {})
  });
}
export function $$ee9({
  numColumns: e,
  children: t
}) {
  let n = VU();
  let r = useAtomWithSubscription(ce);
  let i = useAtomWithSubscription(Lm);
  let o = useAtomWithSubscription(U_);
  let s = r.length > 0;
  let l = s && n;
  let d = n && i.type === mF.TEMPLATES;
  let c = "COMMUNITY" === o && !s;
  let _ = h()({
    "cooper_template_ui--grid---JmtS cooper_template_ui--gridBase--AIKjP": !n,
    "cooper_template_ui--teamTemplateGrid--jNTGc cooper_template_ui--gridBase--AIKjP": n && !d && !c && !l,
    "cooper_template_ui--firstPartyAssetGrid--YjA3q cooper_template_ui--gridBase--AIKjP": n && (c || l),
    "cooper_template_ui--templateListGrid--4vaYJ cooper_template_ui--gridBase--AIKjP": d && !c && !l
  });
  return jsx("div", {
    className: _,
    style: {
      "--num-columns": e || 3
    },
    children: t
  });
}
function et({
  title: e,
  subtitle: t
}) {
  let n = useRef(null);
  let i = o6(n) ? {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": e,
    "data-tooltip-timeout-delay": 300
  } : {};
  return jsxs("div", {
    className: "cooper_template_ui--tileMetadataContainer---6Z7k",
    children: [e && jsx("div", {
      style: {
        display: "table-row"
      },
      children: jsx("span", {
        ref: n,
        ...i,
        className: "cooper_template_ui--tileMetadataTitle--Rkqhq",
        children: e
      })
    }), t && jsx("div", {
      style: {
        display: "table-row"
      },
      children: jsx("span", {
        className: "cooper_template_ui--tileMetadataSubTitle--G7BsU",
        children: t
      })
    })]
  });
}
function en({
  children: e,
  onPointerDown: t,
  isSquareTile: n,
  shouldShowPlusButtonOnHover: i,
  dimensions: o,
  ariaLabel: s,
  hasVideo: l = !1
}) {
  let d = useRef(null);
  let c = useCallback(e => {
    if ("Enter" === e.key || " " === e.key) {
      e.preventDefault();
      let n = window.innerWidth / 2;
      let a = window.innerHeight / 2;
      let r = new PointerEvent("pointerdown", {
        pointerId: 0,
        pointerType: "virtual",
        clientX: n,
        clientY: a,
        bubbles: !0
      });
      t({
        ...r,
        target: e.currentTarget,
        currentTarget: e.currentTarget,
        preventDefault: () => {},
        stopPropagation: () => {},
        stopImmediatePropagation: () => {},
        isDefaultPrevented: () => !1,
        isPropagationStopped: () => !1,
        persist: () => {},
        nativeEvent: r
      });
      let i = new PointerEvent("pointerup", {
        pointerId: 0,
        pointerType: "virtual",
        clientX: n,
        clientY: a,
        bubbles: !0
      });
      document.dispatchEvent(i);
    }
  }, [t]);
  return jsxs(e6, {
    ref: d,
    onClick: t,
    actionOnPointerDown: !0,
    htmlAttributes: {
      "data-element-target": $,
      "data-testid": "insertableAssetTile",
      onKeyDown: c
    },
    className: h()(n ? "cooper_template_ui--templateAssetTile--KzBnr" : O, {
      [P]: i
    }),
    style: {
      position: "relative",
      ...(o ? {
        aspectRatio: o.width / o.height,
        width: "100%",
        height: "auto"
      } : {
        aspectRatio: 1
      })
    },
    trackingProperties: {
      trackingDescriptor: _$$c.TEMPLATE_COVER_TILE
    },
    children: [i && jsx(ea, {
      variant: "add",
      buttonText: d.current?.clientWidth && d.current.clientWidth > 140 ? getI18nString("cooper.templates.add_template") : getI18nString("cooper.templates.add"),
      ariaLabel: s
    }), e, l && jsx(_$$_, {
      className: "x10l6tqk x1bfpjnn x1473dw x1n327nk x47corl x192jxwq xmkeg23 x1y0btm7 x1co876m x68m4m9 xwa2v1s"
    })]
  });
}
function ea({
  variant: e,
  buttonText: t,
  ariaLabel: n
}) {
  return jsx(Fragment, {
    children: jsx("div", {
      className: "cooper_template_ui--templateTileHoverOverlay--TZ2iV",
      "aria-label": n || t,
      role: "button",
      children: "add" === e ? jsx($n, {
        iconPrefix: jsx(_$$e, {
          style: {
            "--color-icon": "white"
          }
        }),
        htmlAttributes: {
          tabIndex: -1
        },
        variant: "primary",
        children: t
      }) : jsx(_$$E, {
        className: "cooper_template_ui--hoverOverlayWhiteButton--ePHj2",
        htmlAttributes: {
          tabIndex: -1
        },
        children: t
      })
    })
  });
}
export function $$er3({
  isWide: e = !1
}) {
  return e ? jsx(IK, {
    variant: "secondary",
    onClick: () => FJ($$G0, "_blank"),
    children: renderI18nText("cooper.templates.show_me_how")
  }) : jsx(_$$N.Button, {
    href: $$G0,
    variant: "secondary",
    trusted: !0,
    newTab: !0,
    children: renderI18nText("cooper.templates.show_me_how")
  });
}
export const qv = $$G0;
export const ah = $$z1;
export const rG = $$Y2;
export const iW = $$er3;
export const DM = $$X4;
export const px = $$Z5;
export const T5 = $$Q6;
export const Vg = $$H7;
export const EI = $$q8;
export const p9 = $$ee9;
export const ON = $$V10;