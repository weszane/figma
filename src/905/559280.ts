import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Component, useCallback } from "react";
import { lQ } from "../905/934246";
import { i as _$$i } from "../905/718764";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { parsePxInt } from "../figma_app/783094";
import { Point } from "../905/736624";
import { l as _$$l } from "../905/30301";
import { x as _$$x } from "../905/211326";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { pW } from "../905/160095";
import { wrapWithTracking, useTracking } from "../figma_app/831799";
import { logAndTrackCTA } from "../figma_app/314264";
import { uF, F_, Ao } from "../905/748636";
import { CR, NJ, OA } from "../figma_app/419216";
import { xT } from "../figma_app/195407";
import { Uj, iy } from "../figma_app/532170";
import { x as _$$x2 } from "../figma_app/849451";
import { q3, _L, LN, No } from "../figma_app/450829";
import { S as _$$S, v0, zP, qg } from "../figma_app/169752";
import { tui, IKB } from "../figma_app/27776";
let C = parsePxInt(tui);
let T = parsePxInt(IKB);
let k = e => null !== e ? e : void 0;
export class $$R0 extends Component {
  constructor(e) {
    super(e);
    this.renderIfDocumentComplete = () => {
      "complete" === document.readyState && this.forceRender();
    };
    this.getRcsKeyElementInterval = null;
    this.startScanningForRcsKeyElement = () => {
      this.cleanUpRcsKeyElementScanner();
      let e = this.props.step;
      if (e.modalType === q3.DRAGGABLE) {
        if (!e.onboardingKey) {
          this.setState({
            rcsKeyLocation: null
          });
          return;
        }
        this.getRcsKeyElementInterval = setInterval(() => {
          let e = this.getRcsKeyElement();
          if (null != e) {
            let t = this.computeLocation(e.getBoundingClientRect());
            (null == this.state.rcsKeyLocation || this.state.rcsKeyLocation.top !== t.top || this.state.rcsKeyLocation.left !== t.left) && this.setState({
              rcsKeyLocation: t
            });
          } else this.setState({
            rcsKeyLocation: null
          });
        }, 50);
      }
    };
    this.cleanUpRcsKeyElementScanner = () => {
      null != this.getRcsKeyElementInterval && (clearInterval(this.getRcsKeyElementInterval), this.getRcsKeyElementInterval = null);
    };
    this.acceptHeight = e => this.setState({
      modalHeight: e
    });
    this.button = null;
    this.nextButtonRef = e => {
      e && (this.button = e, this.focusButton());
    };
    this.focusButton = () => {
      this.button && !this.props.step.UNSAFE_disableFocus && this.button.focus();
    };
    this.computeLocation = e => {
      let t = this.props.step;
      if (t.modalType !== q3.DRAGGABLE) return {
        top: null,
        left: null,
        arrowRelativeX: null,
        arrowRelativeY: null,
        arrowPosition: null
      };
      if (t.pointDirection === _L.LEFT_TITLE) {
        let t = e.top + e.height / 2;
        return {
          left: e.left + e.width + 16,
          top: t - 20,
          arrowRelativeX: -18,
          arrowRelativeY: uF / 2 - 9,
          arrowPosition: F_.LEFT_TITLE
        };
      }
      if (t.pointDirection === _L.RIGHT_TITLE) {
        let t = e.top + e.height / 2;
        let i = e.left - this.width - 16;
        let n = uF / 2 - 9;
        return {
          left: i,
          top: t - 20,
          arrowRelativeX: this.width,
          arrowRelativeY: n,
          arrowPosition: F_.RIGHT_TITLE
        };
      }
      let i = e.left + e.width / 2;
      let n = e.bottom + 18;
      let r = i - this.width / 2;
      let a = i - (r = Math.min(r = Math.max(r, 10), window.innerWidth - 10 - this.width));
      let s = F_.TOP;
      null != this.state.modalHeight && window.innerHeight - n < this.state.modalHeight + 12 && (n = e.top - this.state.modalHeight - 12, s = F_.BOTTOM);
      return {
        left: r,
        top: n,
        arrowRelativeX: a,
        arrowRelativeY: null,
        arrowPosition: s
      };
    };
    this.getFramePosition = () => this.state.rcsKeyLocation ? this.state.rcsKeyLocation : {
      top: null,
      left: null,
      arrowPosition: null,
      arrowRelativeX: null,
      arrowRelativeY: null
    };
    this.getRcsKeyElement = () => {
      let e = this.props.step;
      return e.modalType === q3.DRAGGABLE && e.onboardingKey ? xT(e.onboardingKey) : null;
    };
    this.acceptTitle = e => {
      this.setState({
        title: e,
        titleSetByStep: this.props.step
      });
    };
    this.forceRender = () => this.setState({
      renderCount: this.state.renderCount + 1
    });
    this.getPositionAndConstraints = (e, t) => {
      let i = this.getFramePosition();
      if (i.top && i.left) return {
        initialPosition: new Point(i.left, i.top)
      };
      switch (e) {
        case LN.BOTTOM_LEFT:
          return {
            initialPosition: t || new Point(T, T),
            initialConstraints: {
              x: "left",
              y: "bottom"
            }
          };
        case LN.BOTTOM_RIGHT:
          return {
            initialPosition: t || new Point(_$$l, 16),
            initialConstraints: {
              x: "right",
              y: "bottom"
            }
          };
        case LN.TOP_RIGHT:
          return {
            initialPosition: t || new Point(T, C + T),
            initialConstraints: {
              x: "right",
              y: "top"
            }
          };
        case LN.CENTER:
        default:
          return {
            initialPosition: t || new Point(window.innerWidth / 2 - this.width / 2, window.innerHeight / 2 - this.height / 2)
          };
      }
    };
    this.state = {
      modalHeight: 328,
      rcsKeyLocation: null,
      renderCount: 0
    };
  }
  componentDidMount() {
    window.addEventListener("beforeunload", this.props.onClose);
    this.startScanningForRcsKeyElement();
    document.addEventListener("readystatechange", this.renderIfDocumentComplete);
  }
  componentWillUnmount() {
    this.props.onClose();
    window.removeEventListener("beforeunload", this.props.onClose);
    document.removeEventListener("readystatechange", this.renderIfDocumentComplete);
    this.cleanUpRcsKeyElementScanner();
  }
  componentDidUpdate(e, t) {
    this.focusButton();
    let i = this.props.step;
    if (i.modalType !== q3.DRAGGABLE) return;
    let n = e.step;
    (n.modalType !== q3.DRAGGABLE || i.onboardingKey && i.onboardingKey !== n.onboardingKey) && this.startScanningForRcsKeyElement();
  }
  get width() {
    let e = this.props.step;
    switch (e.modalType) {
      case q3.FEATURE_UPDATE:
        return e.width || No;
      case q3.DRAGGABLE:
        return e.width || 350;
      default:
        return 350;
    }
  }
  get height() {
    return this.state.modalHeight || 328;
  }
  static getDerivedStateFromProps(e, t) {
    return e.step !== t.titleSetByStep ? {
      title: void 0,
      titleSetByStep: void 0
    } : {};
  }
  render() {
    let e = this.props.step;
    let t = this.getFramePosition();
    let i = {
      acceptTitle: this.acceptTitle,
      dismissModal: this.props.dismissModal,
      onClickPrimaryCta: this.props.onClickPrimaryCta,
      forceRender: this.forceRender
    };
    let r = jsx(Uj.Provider, {
      value: this.forceRender,
      children: jsx(e.element, {
        ...i
      })
    });
    return wrapWithTracking((() => {
      switch (e.modalType) {
        case q3.DRAGGABLE:
          let {
            initialPosition,
            initialConstraints
          } = this.getPositionAndConstraints(e.defaultLocation, e.initialPosition);
          let l = e.title instanceof Function ? e.title() : e.title;
          let d = this.state.title || l;
          let c = e.onboardingKey || e.highlightOnlyKey;
          return jsxs(Fragment, {
            children: [c && !e.disableHighlight && jsx(_$$x2, {
              target: c
            }), jsxs(Ao, {
              acceptHeight: this.acceptHeight,
              animatedIn: !0,
              arrowPosition: e.hideArrow ? void 0 : k(t.arrowPosition),
              arrowRelativeX: e.hideArrow ? void 0 : k(t.arrowRelativeX),
              arrowRelativeY: e.hideArrow ? void 0 : k(t.arrowRelativeY),
              disableDragging: e.disableDragging,
              dragHeaderOnly: !!d,
              headerClassName: e.headerClassName,
              initialConstraints,
              initialPosition,
              initialWidth: this.width,
              onClose: this.props.dismissModal,
              title: d,
              zIndex: e.zIndex,
              children: [r, e.disableFooter ? null : jsxs(iy, {
                className: e.footerClassName,
                children: [!e.hideStepCounter && e.stepCounter && jsx("div", {
                  className: _$$S,
                  children: e.stepCounter
                }), jsxs("div", {
                  className: v0,
                  children: [e.additionalButton && jsx("div", {
                    className: _$$s.ml8.$,
                    children: jsx(O, {
                      additionalButton: e.additionalButton,
                      dismissModal: this.props.dismissModal,
                      dispatch: this.props.dispatch
                    })
                  }), jsx("div", {
                    className: _$$s.ml8.$,
                    children: jsx($z, {
                      ref: this.nextButtonRef,
                      onClick: this.props.onClickPrimaryCta,
                      trackingProperties: {
                        trackingDescriptor: e.ctaTrackingDescriptor
                      },
                      disabled: !!e.ctaIsLoading,
                      children: jsx(_$$x, {
                        isLoading: !!e.ctaIsLoading,
                        className: zP,
                        children: () => jsx("div", {
                          children: e.ctaText
                        })
                      })
                    })
                  })]
                })]
              })]
            })]
          });
        case q3.FEATURE_UPDATE:
          return jsx(N, {
            width: this.width,
            onAdditionalExplicitDismiss: this.props.additionalOnExplicitDismiss,
            onDismissModal: this.props.dismissModal,
            children: r
          });
        case q3.WALK_THROUGH:
          return jsxs(Fragment, {
            children: [!e.disableHighlight && jsx(_$$x2, {
              target: e.onboardingKey
            }), jsx(CR, {
              additionalOnExplicitDismiss: this.props.additionalOnExplicitDismiss,
              className: e.className,
              disableClickOutsideToHide: e.disableClickOutsideToHide,
              dismissModal: this.props.dismissModal,
              height: e.height,
              hideCloseButton: e.hideCloseButton,
              pointerForegroundColor: e.pointerForegroundColor,
              shouldCenterArrow: e.shouldCenterArrow,
              shouldDismissWhenLostDOMTarget: e.shouldDismissWhenLostDOMTarget,
              targetKey: e.onboardingKey,
              topPadding: e.topPadding,
              width: e.width,
              children: r
            })]
          });
        case q3.WELCOME:
          return jsxs(Fragment, {
            children: [e.fullscreen && jsx("div", {
              className: qg
            }), jsx(P, {
              onDismissModal: this.props.dismissModal,
              children: jsx(_$$i, {
                children: r
              })
            })]
          });
        case q3.SELF_CONTAINED:
          return r;
        case q3.POINTER:
          return jsxs(Fragment, {
            children: [e.showHighlight && jsx(_$$x2, {
              target: e.onboardingKey
            }), jsx(NJ, {
              dismissModal: this.props.dismissModal,
              targetKey: e.onboardingKey,
              width: e.width,
              topPadding: e.topPadding,
              shouldCenterArrow: e.shouldCenterArrow,
              shouldNotWrapInParagraphTag: e.shouldNotWrapInParagraphTag,
              arrowPosition: e.arrowPosition,
              onTargetLost: e.onTargetLost,
              children: r
            })]
          });
        case q3.ANNOUNCEMENT_POINTER:
          let u = e.title instanceof Function ? e.title() : e.title;
          return jsx(OA, {
            arrowPosition: e.arrowPosition,
            bottomLeftText: e.stepCounter,
            ctaText: e.ctaText,
            dismissModal: this.props.dismissModal,
            onClickPrimaryCta: this.props.onClickPrimaryCta,
            onClickSecondaryCta: e.preventDismissOnClickSecondaryCta ? lQ : this.props.dismissModal,
            secondaryCtaText: e.secondaryCtaText,
            shouldCenterArrow: e.shouldCenterArrow,
            shouldCenterModal: e.shouldCenterModal,
            targetKey: e.onboardingKey,
            title: u,
            topPadding: e.topPadding,
            width: e.width,
            children: r
          });
      }
    })(), e.trackingContextName, e.trackingProperties, e.trackingEnabled);
  }
}
function N({
  children: e,
  width: t,
  onAdditionalExplicitDismiss: i,
  onDismissModal: a
}) {
  let s = useTracking();
  let c = useCallback(({
    source: e
  }) => {
    if ("button" === e) {
      let e = s.name;
      logAndTrackCTA({
        ...s.properties,
        ...(null != e ? {
          trackingContext: e
        } : {}),
        text: "Close"
      });
    }
    i?.();
    a();
  }, [i, a, s]);
  let u = useModalManager({
    open: !0,
    onClose: c
  });
  return jsx(ModalRootComponent, {
    manager: u,
    width: t ?? "fit-content",
    children: jsx(vo, {
      children: jsx(nB, {
        padding: 0,
        children: e
      })
    })
  });
}
function P({
  children: e,
  onDismissModal: t
}) {
  let i = useModalManager({
    open: !0,
    onClose: t,
    preventUserClose: !0
  });
  return jsx(ModalRootComponent, {
    manager: i,
    width: "fit-content",
    children: jsx(vo, {
      children: jsx(nB, {
        padding: 0,
        children: e
      })
    })
  });
}
function O({
  additionalButton: e,
  dismissModal: t,
  dispatch: i
}) {
  if (!e) return null;
  let r = e.textForTracking ? {
    text: e.textForTracking()
  } : {};
  return "link" === e.onClickBehavior ? jsx(pW, {
    href: e.href,
    variant: "secondary",
    trackingProperties: r,
    newTab: !0,
    children: e.label
  }) : jsx($z, {
    onClick: () => {
      e.onClick(i);
      t();
    },
    trackingProperties: r,
    variant: "secondary",
    children: e.label
  });
}
$$R0.displayName = "RcsFrame";
export const i = $$R0;