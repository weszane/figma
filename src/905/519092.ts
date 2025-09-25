import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Component } from "react";
import { useDispatch } from "react-redux";
import { generateRecordingKey } from "../figma_app/878298";
import o from "classnames";
import { KeyCodes } from "../905/63728";
import { CloseButton } from "../905/17223";
import { ButtonNegativeTracked, ButtonBasePrimaryTracked, ButtonSecondaryTracked } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { popModalStack } from "../905/156213";
import { Dm } from "../figma_app/8833";
import { shouldHandleMultiTouchOrPressure } from "../figma_app/753501";
import { K1, CY, Y5, zB, Vw, jT, yl, P9, nd, SM, x7, EJ, EO, UR, xR, qG, JF, Wc, Rh, Jg, eo, fp, hS, TX, R2 } from "../905/634218";
var l = o;
let y = "header-modal-title";
export class $$b1 extends Component {
  constructor() {
    super(...arguments);
    this.onBackgroundMouseDown = e => {
      !this.props.disableClickOutsideToHide && this.props.onClose && this.props.onClose(e);
      this.props.onBackgroundMouseDown && this.props.onBackgroundMouseDown(e);
    };
    this.onModalMouseDown = e => {
      e.stopPropagation();
    };
    this.onKeyDown = e => {
      e.stopPropagation();
      e.keyCode === KeyCodes.ESCAPE && (!this.props.disableClickOutsideToHide || this.props.closeOnEsc) && this.props.onClose && this.props.onClose(e);
      e.keyCode === KeyCodes.ENTER && this.props.closeOnEnter && this.props.onClose && this.props.onClose(e);
    };
    this.bgRef = e => {
      e && !e.contains(document.activeElement) && (this.props.closeOnEsc || this.props.focus) && e.focus();
    };
  }
  render() {
    let e = l()(K1, Dm, {
      [CY]: this.props.fixedTop,
      [Y5]: this.props.fixedCenter,
      [zB]: this.props.fixedTopDynamic,
      [Vw]: this.props.transparentBackground
    });
    let t = this.props.maxWidth || 492;
    let i = this.props.minWidth || 348;
    t < i && (t = 492, i = 348);
    let r = this.props.paddingLeft || 0;
    let a = this.props.paddingRight || 0;
    let s = this.props.bottomSection;
    return jsx("div", {
      tabIndex: 0,
      className: e,
      onPointerDown: this.onBackgroundMouseDown,
      onKeyDown: this.onKeyDown,
      onClick: this.props.onClick,
      ref: this.bgRef,
      children: jsx("div", {
        className: l()(s ? jT : yl, this.props.containerClassName, {
          [P9]: this.props.allowScroll
        }),
        style: {
          maxWidth: t,
          minWidth: i,
          paddingLeft: r,
          paddingRight: a
        },
        onPointerDown: this.onModalMouseDown,
        role: "dialog",
        "data-testid": this.props.dataTestId,
        "aria-labelledby": y,
        "aria-modal": !0,
        children: (() => {
          let e = jsx($$I2, {
            className: this.props.innerContainerClassName,
            closeTrackingText: this.props.closeTrackingText,
            containerRef: this.props.containerRef,
            customButton: this.props.customButton,
            disableHeaderBottomBorder: this.props.disableHeaderBottomBorder,
            headerClassname: this.props.headerClassName || "",
            headerSize: this.props.headerSize,
            isCloseHidden: this.props.isCloseHidden,
            onClose: this.props.onClose,
            onMouseDown: this.onModalMouseDown,
            title: this.props.title,
            titleIconSvgSrc: this.props.titleIconSvgSrc,
            titleIconURL: this.props.titleIconURL,
            titleId: y,
            truncateTitleText: this.props.truncateTitleText,
            children: this.props.children
          });
          let t = !!this.props.bottomSection && jsx("div", {
            className: nd,
            onPointerDown: this.onModalMouseDown,
            children: this.props.bottomSection
          });
          return s ? jsxs(Fragment, {
            children: [jsx("div", {
              className: SM,
              children: e
            }), t]
          }) : jsx(Fragment, {
            children: e
          });
        })()
      })
    });
  }
}
export function $$v0(e) {
  let t = useDispatch();
  let i = e.destructive ? ButtonNegativeTracked : ButtonBasePrimaryTracked;
  let r = () => {
    if (e.onCancel) {
      e.onCancel();
      return;
    }
    t(popModalStack());
  };
  let s = jsxs(Fragment, {
    children: [e.hideCancel || jsx(ButtonSecondaryTracked, {
      innerText: getI18nString("general.cancel"),
      onClick: r,
      className: x7,
      children: e.cancelText || getI18nString("general.cancel")
    }), jsx(i, {
      innerText: e.confirmText || getI18nString("general.okay"),
      onClick: i => {
        if (i.preventDefault(), e.onSubmit) {
          e.onSubmit();
          return;
        }
        t(popModalStack());
        e.onConfirm && e.onConfirm();
      },
      className: EJ,
      trackingProperties: e.trackedConfirmationProperties || {},
      disabled: e.disabled,
      children: e.confirmText || getI18nString("general.okay")
    })]
  });
  return jsx($$b1, {
    maxWidth: e.maxWidth || 344,
    minWidth: 344,
    fixedTop: !0,
    onClose: r,
    ...e,
    containerClassName: e.useRedesign ? l()(e.containerClassName, EO) : void 0,
    headerClassName: e.useRedesign ? l()(cssBuilderInstance.textBodyLargeStrong.pb4.pt4.$, e.headerClassName) : void 0,
    children: e.useRedesign ? jsxs("div", {
      className: cssBuilderInstance.flex.flexColumn.$,
      children: [jsx("div", {
        className: cssBuilderInstance.$$if(!e.fullWidthContent, cssBuilderInstance.p16).flex.flexColumn.$,
        children: e.children
      }), jsx("div", {
        className: cssBuilderInstance.flex.justifyEnd.p16.bt1.colorBorder.bSolid.$,
        children: s
      })]
    }) : jsxs("div", {
      className: UR,
      children: [jsx("div", {
        className: xR,
        children: e.children
      }), jsx("div", {
        className: qG,
        children: s
      })]
    })
  });
}
$$b1.displayName = "HeaderModal";
export class $$I2 extends Component {
  render() {
    let e = (() => {
      switch (this.props.headerSize) {
        case "large":
          return JF;
        case "hidden":
          return Wc;
        default:
          return Rh;
      }
    })();
    let t = l()(e, this.props.headerClassname, {
      [cssBuilderInstance.sticky.top0.left0.zIndex1.colorBg.$]: this.props.stickyHeader,
      [Jg]: !this.props.disableHeaderBottomBorder
    });
    let i = jsx(CloseButton, {
      onClick: this.props.onClose,
      onMouseDown: this.props.onMouseDown,
      innerText: this.props.closeTrackingText || "Close",
      className: this.props.closeButtonClassName,
      recordingKey: generateRecordingKey(this.props, "headerModalContainer"),
      dataTestId: generateRecordingKey(this.props, "headerModalContainer") + ".close-button"
    });
    let r = shouldHandleMultiTouchOrPressure();
    return jsxs("div", {
      className: `${this.props.className || ""}`,
      ref: this.props.containerRef,
      "aria-modal": this.props["aria-modal"],
      children: [jsxs("div", {
        className: t,
        onPointerMove: r ? this.props.onMouseMove : void 0,
        onMouseMove: r ? void 0 : this.props.onMouseMove,
        children: [this.props.titleIconURL && jsx("div", {
          className: eo,
          children: jsx("img", {
            src: this.props.titleIconURL,
            alt: ""
          })
        }), this.props.titleIconSvgSrc && jsx("div", {
          className: fp,
          children: jsx(SvgComponent, {
            svg: this.props.titleIconSvgSrc,
            className: this.props.titleIconSvgClassName
          })
        }), "function" == typeof this.props.title ? this.props.title(i, {
          titleId: this.props.titleId
        }) : jsxs(Fragment, {
          children: ["string" == typeof this.props.title ? jsx(E, {
            title: this.props.title,
            titleId: this.props.titleId,
            truncateTitleText: this.props.truncateTitleText
          }) : this.props.title, jsxs("div", {
            className: hS,
            children: [this.props.customButton, !this.props.isCloseHidden && i]
          })]
        })]
      }), this.props.children]
    });
  }
}
function E(e) {
  return jsx("h1", {
    id: e.titleId,
    className: e.truncateTitleText ? TX : R2,
    children: e.title
  });
}
$$I2.displayName = "HeaderModalContainer";
export const Dd = $$v0;
export const OJ = $$b1;
export const ZD = $$I2;