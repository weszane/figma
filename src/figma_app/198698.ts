import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { U1 } from "../figma_app/343967";
import { Cs } from "../figma_app/59509";
import { Q } from "../905/363675";
import { AppStateTsApi } from "../figma_app/763686";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import u from "classnames";
import { wY, cU } from "../figma_app/708845";
import { F as _$$F } from "../905/680873";
import { BrowserInfo } from "../figma_app/778880";
import { Jn } from "../905/17223";
import { ButtonSecondaryTracked } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { FEditorType } from "../figma_app/53721";
import { VA } from "../figma_app/844818";
import { x1, MA } from "../figma_app/465413";
import { B6, fF, O4, r3, Dt, tC, Xs, $j, NM, Aq, jy, Ce, zS, Fl, JT, lI, Y2, av, TL, Kk, J3, v0, $e, h_, iZ, r as _$$r } from "../figma_app/600310";
import { A as _$$A } from "../svg/104766";
import { A as _$$A2 } from "../svg/633277";
import { A as _$$A3 } from "../1617/316388";
import { A as _$$A4 } from "../svg/57540";
var p = u;
let $$C = 0;
export function $$w0(e) {
  let t;
  let r;
  let {
    editorType,
    content,
    dataTestId
  } = e;
  let R = useRef(null);
  let L = wY(R) ?? cU;
  let P = U1(R);
  switch (useEffect(() => {
    let e = document.documentElement.style;
    AppStateTsApi?.uiState().editorBannerHeight.set(L.height);
    e.setProperty("--editor-banner-height", `${L.height}px`);
  }, [L.height]), useEffect(() => ($$C++, () => {
    if (0 == --$$C) {
      let e = document.documentElement.style;
      AppStateTsApi?.uiState().editorBannerHeight.set(0);
      e.setProperty("--editor-banner-height", "0px");
    }
  }), []), content.bannerType) {
    case x1.INFO:
      switch (editorType) {
        case FEditorType.Design:
        case FEditorType.Illustration:
          t = B6;
          break;
        case FEditorType.DevHandoff:
          t = fF;
          break;
        case FEditorType.Whiteboard:
          t = O4;
          break;
        case FEditorType.Slides:
          t = r3;
          break;
        case FEditorType.Figmake:
        case FEditorType.Sites:
          t = Dt;
          break;
        case FEditorType.Cooper:
          t = tC;
          break;
        default:
          throw Error(`Unsupported editor type: ${editorType}`);
      }
      break;
    case x1.INFO_SOFT:
      t = Xs;
      break;
    case x1.WARN:
      t = $j;
      break;
    case x1.WARN_SOFT:
      t = NM;
      break;
    case x1.SUCCESS:
      t = Aq;
      break;
    case x1.ERROR:
      t = jy;
      break;
    case x1.DANGER:
      t = Ce;
      break;
    case x1.CONFIDENTIALITY:
      t = zS;
      break;
    case x1.BRAND_STRONG:
      t = Fl;
      break;
    case x1.FPL_BRAND:
      r = "brand";
      break;
    case x1.FPL_DANGER:
      r = "danger";
      break;
    case x1.FPL_DEFAULT:
      r = "default";
      break;
    case x1.FPL_SUCCESS:
      r = "success";
      break;
    case x1.FPL_WARN:
      r = "warn";
      break;
    default:
      throwTypeError(content.bannerType);
  }
  let D = p()(t, {
    [JT]: !content.positionStatic
  });
  if (!content.icon && !content.hideIcon) switch (content.bannerType) {
    case x1.BRAND_STRONG:
    case x1.INFO:
    case x1.INFO_SOFT:
      content.icon = _$$A;
      break;
    case x1.WARN:
    case x1.WARN_SOFT:
      content.icon = _$$A3;
      break;
    case x1.SUCCESS:
      content.icon = _$$A;
      break;
    case x1.ERROR:
    case x1.DANGER:
      content.icon = _$$A4;
      break;
    case x1.CONFIDENTIALITY:
      content.icon = _$$A2;
      break;
    case x1.FPL_BRAND:
    case x1.FPL_DANGER:
    case x1.FPL_DEFAULT:
    case x1.FPL_SUCCESS:
    case x1.FPL_WARN:
      break;
    default:
      throwTypeError(content.bannerType);
  }
  let k = null;
  if (content.button) {
    let e = content.button.type;
    switch (e) {
      case MA.CUSTOM:
        k = content.button.element;
        break;
      case MA.STRUCTURED:
      case void 0:
        k = jsx(ButtonSecondaryTracked, {
          className: content.button.className || lI,
          onClick: content.button.onClick,
          recordingKey: content.button.recordingKey,
          trackingProperties: {
            trackingDescriptor: content.button.trackingDescriptor,
            buttonContext: "string" == typeof content.button.buttonText && content.button.buttonText,
            productType: editorType
          },
          disabled: content.button.disabled,
          dataTestId: "banner-cta-button",
          children: content.button.buttonText
        });
        break;
      default:
        throwTypeError(e);
    }
  }
  let M = useMemo(() => content.dismissedAtom ?? atom(!1), [content.dismissedAtom]);
  let [F, j] = useAtomValueAndSetter(M);
  let U = _$$F(e.onDismiss);
  let B = _$$F(content.onDismiss);
  return (useEffect(() => {
    F && (U.current(), B.current?.());
  }, [F, U, B]), r) ? jsx("div", {
    ref: P,
    className: p()(D, e.containerClassName),
    "data-testid": dataTestId,
    className: "xh8yej3",
    children: jsxs(Cs, {
      variant: r,
      children: [jsx(Q, {
        title: content.mainText,
        children: content.description
      }), content?.button?.type === MA.CUSTOM && content.button?.element, content?.button?.type === void 0 || content?.button?.type === MA.STRUCTURED && k]
    })
  }) : jsx("div", {
    className: p()(D, e.containerClassName),
    style: BrowserInfo.isIpadNative ? {
      top: `${VA()}px`
    } : {},
    ref: P,
    "data-testid": dataTestId,
    children: jsxs("div", {
      className: Y2,
      children: [jsxs("div", {
        className: p()(av, {
          [TL]: "medium" === content.iconSize
        }),
        children: [null != content.icon && jsx("div", {
          className: p()(Kk, {
            [J3]: "large" === content.iconSize,
            [v0]: "medium" === content.iconSize
          }),
          children: "string" == typeof content.icon ? jsx(SvgComponent, {
            svg: content.icon,
            width: "large" === content.iconSize ? "32px" : "medium" === content.iconSize ? "24px" : "16px",
            autosize: !0
          }) : content.icon
        }), jsxs("div", {
          children: [jsx("div", {
            className: $e,
            children: content.mainText
          }), content.customElem && jsx("div", {
            children: content.customElem
          })]
        })]
      }), jsx("div", {
        className: h_,
        children: content.description
      }), jsxs("div", {
        className: iZ,
        children: [k, e.content.dismissible && jsx(Jn, {
          onClick: () => j(!0),
          className: _$$r,
          "aria-label": getI18nString("banner.shared.close_banner"),
          recordingKey: content.onDismissRecordingKey,
          innerText: "close"
        })]
      })]
    })
  });
}
export const C = $$w0;