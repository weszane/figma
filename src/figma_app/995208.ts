import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo } from "../figma_app/272243";
import { $n } from "../905/521428";
import { Kz } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { In } from "../905/672640";
import { c as _$$c } from "../905/370443";
import { fu, j6 } from "../figma_app/831799";
import { Cu } from "../figma_app/314264";
import { Ju } from "../905/102752";
import { F as _$$F } from "../905/759613";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { J } from "../905/341359";
import { ZC } from "../figma_app/39751";
import { Lo, $O } from "../905/156213";
import { M as _$$M } from "../905/152487";
function v(e) {
  let t = useDispatch();
  let {
    isShowing,
    onClose,
    modalType
  } = e;
  let s = ZC(isShowing);
  let o = useSelector(e => e.modalShown?.type) === modalType;
  let l = ZC(o);
  useEffect(() => {
    isShowing && l && !o && onClose("different_modal_shown");
  }, [isShowing, l, o, onClose]);
  useEffect(() => {
    s || !isShowing || o ? s && !isShowing && o && t(Lo()) : t($O({
      type: modalType,
      optOutOfPrevModal: !0
    }));
  }, [t, s, isShowing, o, modalType]);
  return jsx(J, {
    children: jsx(_$$M, {
      isShowing: isShowing && o,
      testId: e.testId,
      userFlagOnShow: e.userFlagOnShow,
      children: e.children
    })
  });
}
let A = "FeatureAnnouncement";
export function $$x0(e) {
  return jsx(v, {
    isShowing: e.isShowing,
    modalType: A,
    onClose: e.onClose,
    testId: e.testId,
    userFlagOnShow: e.userFlagOnShow,
    children: jsx($$w3, {
      ...e
    })
  });
}
function N(e) {
  let {
    trackingContextName,
    trackingProperties,
    trackingEnabled,
    ...a
  } = e;
  return jsx(fu, {
    name: trackingContextName,
    properties: trackingProperties,
    enabled: trackingEnabled,
    children: jsx(C, {
      ...a
    })
  });
}
function C(e) {
  let t = j6();
  let r = hS({
    open: !0,
    onClose: r => {
      switch (r.source) {
        case "button":
          let n = t.name;
          Cu({
            ...t.properties,
            ...(null != n ? {
              trackingContext: n
            } : {}),
            trackingDescriptor: _$$c.CLOSE,
            text: "Close"
          });
          return e.onClose("close_button_clicked");
        case "outside":
          return e.onClose("modal_background_clicked");
        case "escape":
          return e.onClose("escape_button_pressed");
        case "other":
          return e.onClose("other");
      }
    },
    preventUserClose: e.preventUserClose
  });
  return jsx(bL, {
    manager: r,
    width: e.width ?? 700,
    overrideCloseButtonColor: e.closeButtonColor,
    height: e.dynamicHeight ? "dynamic" : void 0,
    children: jsx(vo, {
      children: e.children
    })
  });
}
export function $$w3(e) {
  return jsxs(N, {
    ...e,
    children: ["landscape" === e.orientation ? jsx(R, {
      ...e
    }) : jsx(O, {
      ...e
    }), jsx(j, {
      stepCounter: e.stepCounter
    })]
  });
}
function O(e) {
  return jsxs("div", {
    className: _$$s.flex.$,
    children: [jsxs("div", {
      className: _$$s.flex.flexColumn.justifyCenter.p32.$,
      children: [jsx("div", {
        className: _$$s.textHeadingLarge.$,
        style: sx.add({
          letterSpacing: "-0.456px"
        }).$,
        children: e.title
      }), jsx(Kz, {
        direction: "y",
        multiple: 1
      }), jsx("div", {
        className: _$$s.textBodyLarge.$,
        style: sx.add({
          letterSpacing: "-0.084px"
        }).$,
        children: e.description
      }), (e.primaryCta || e.secondaryCta) && jsxs(Fragment, {
        children: [jsx(Kz, {
          direction: "y",
          multiple: 3
        }), jsxs("div", {
          className: _$$s.flex.gap8.$,
          children: [e.primaryCta && jsx(_$$F, {
            defaultVariant: "primary",
            large: !0,
            ctaButtonMeta: e.primaryCta
          }), e.secondaryCta && jsx(_$$F, {
            defaultVariant: "secondary",
            large: !0,
            ctaButtonMeta: e.secondaryCta
          })]
        })]
      }), e.disclaimerFooter && jsx("div", {
        className: _$$s.textBodySmall.colorTextSecondary.pt8.$,
        children: e.disclaimerFooter
      })]
    }), e.media]
  });
}
function R(e) {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.$,
    children: [e.media, jsxs("div", {
      className: _$$s.flex.pl32.pr32.pt32.pb24.gap32.$,
      children: [jsx("div", {
        className: _$$s.textHeadingLarge.w200.flexShrink0.$,
        style: sx.add({
          letterSpacing: "-0.456px"
        }).$,
        children: e.title
      }), jsx("div", {
        className: _$$s.textBodyLarge.$,
        style: sx.add({
          letterSpacing: "-0.084px"
        }).$,
        children: e.description
      })]
    }), jsxs("div", {
      className: _$$s.flex.pl32.pr32.gap8.justifyEnd.$,
      children: [e.secondaryCta && jsx(_$$F, {
        defaultVariant: "secondary",
        large: !0,
        ctaButtonMeta: e.secondaryCta
      }), e.primaryCta && jsx(_$$F, {
        defaultVariant: "primary",
        large: !0,
        ctaButtonMeta: e.primaryCta
      })]
    }), e.disclaimerFooter && jsx("div", {
      className: _$$s.textBodySmall.colorTextSecondary.$,
      children: e.disclaimerFooter
    }), jsx(Kz, {
      direction: "y",
      multiple: 4
    })]
  });
}
export function $$L1(e) {
  return jsx("img", {
    src: e.src,
    alt: e.alt,
    style: sx.add({
      aspectRatio: e.aspectRatio.toString()
    }).$,
    width: e.width
  });
}
export function $$P2(e) {
  return jsx("video", {
    autoPlay: !0,
    muted: !0,
    loop: !0,
    "object-fit": "initial",
    "aria-hidden": "true",
    width: e.width,
    style: sx.add({
      aspectRatio: e.aspectRatio.toString()
    }).$,
    children: jsx("source", {
      src: e.src,
      type: "video/mp4"
    })
  });
}
function D(e) {
  return jsx("div", {
    className: _$$s.absolute.left0.pl8.$,
    hidden: e.hidden,
    children: jsx($n, {
      variant: "ghost",
      onClick: e.onBack,
      children: jsxs("div", {
        className: _$$s.font13.lh24.flex.itemsCenter.pr12.$,
        children: [jsx(In, {
          icon: "chevron-left-32"
        }), renderI18nText("general.back")]
      })
    })
  });
}
function k(e) {
  return jsx("div", {
    className: _$$s.absolute.right0.pr8.$,
    hidden: e.hidden,
    children: jsx($n, {
      variant: "ghost",
      onClick: e.onNext,
      children: jsxs("div", {
        className: _$$s.font13.lh24.flex.itemsCenter.pl12.$,
        children: [renderI18nText("general.next"), jsx(In, {
          icon: "chevron-right-32"
        })]
      })
    })
  });
}
function M(e) {
  return jsx("div", {
    className: _$$s.absolute.right0.pr8.$,
    hidden: e.hidden,
    children: jsx($n, {
      variant: "ghost",
      onClick: e.onDone,
      children: jsx("div", {
        className: _$$s.font13.lh24.flex.itemsCenter.$,
        children: renderI18nText("general.done")
      })
    })
  });
}
function F(e) {
  let t = t => t + 1 === e.stepNum;
  return jsx("div", {
    className: _$$s.flex.gap8.h32.justifyCenter.itemsCenter.absolute.left0.right0.mxAuto.$,
    children: Array(e.totalNumSteps).fill(0).map((e, r) => jsx("div", {
      className: _$$s.w8.h8.bRadius8.b1.colorBorder.$$if(t(r), _$$s.colorBgInverse, _$$s.colorBg).$
    }, r))
  });
}
function j(e) {
  let {
    stepCounter
  } = e;
  if (!stepCounter) return null;
  let r = 1 === stepCounter.stepNum;
  let i = stepCounter.stepNum === stepCounter.totalNumSteps;
  return jsxs("div", {
    className: _$$s.p8.bt1.colorBorder.bSolid.h32.$,
    children: [jsx(F, {
      stepNum: stepCounter.stepNum,
      totalNumSteps: stepCounter.totalNumSteps
    }), jsx(D, {
      onBack: stepCounter.onBack,
      hidden: r
    }), jsx(k, {
      onNext: stepCounter.onNext,
      hidden: i
    }), jsx(M, {
      onDone: stepCounter.onNext,
      hidden: !i
    })]
  });
}
Ju(() => null, A);
export const _l = $$x0;
export const B$ = $$L1;
export const Jm = $$P2;
export const xx = $$w3;