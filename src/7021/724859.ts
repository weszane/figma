import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useLayoutEffect } from "react";
import { md } from "../figma_app/27355";
import o from "classnames";
import { N as _$$N } from "../vendor/930821";
import { P } from "../vendor/348225";
import { bk, ZE, aV, VN, _D } from "../905/98947";
import { pu } from "../7037/430062";
import { G } from "../9864/196889";
import { l as _$$l } from "../9864/643198";
import { R } from "../9864/181596";
import { i as _$$i } from "../9864/639536";
import { f as _$$f } from "../9864/614697";
import { I } from "../9864/163604";
import { B } from "../9864/379151";
import { E } from "../9864/621850";
import { f as _$$f2 } from "../9864/681718";
import { u as _$$u } from "../9864/637317";
import { H } from "../9864/39370";
import { h as _$$h } from "../9864/138901";
import { l as _$$l2 } from "../9864/139592";
import { E as _$$E } from "../9864/469526";
import { e } from "../9864/269985";
import { Sl, XU, Fs, CM, Ec, Ak, I0, PI, U$, q6, pq, b1, i5, jI, yh, jp } from "../9864/804873";
var r = o;
let N = {
  designer: {
    Component: _$$i,
    className: Sl
  },
  user_researcher: {
    Component: _$$h,
    className: XU
  },
  research: {
    Component: _$$h,
    className: XU
  },
  developer: {
    Component: _$$f,
    className: Fs
  },
  marketer: {
    Component: E,
    className: CM
  },
  student: {
    Component: _$$E,
    className: Ec
  },
  educator: {
    Component: I,
    className: Ak
  },
  ux_writing: {
    Component: e,
    className: I0
  },
  data_analytics: {
    Component: _$$l,
    className: PI
  },
  something_else: {
    Component: _$$f2,
    className: U$
  },
  product_manager: {
    Component: _$$u,
    className: q6
  },
  design_file: {
    Component: R,
    className: pq
  },
  slides_file: {
    Component: _$$l2,
    className: b1
  }
};
let q = {
  design: "design_file",
  whiteboard: "product_manager",
  slides: "slides_file"
};
export function $$O1(e) {
  let t = md(bk);
  let [a] = md(ZE);
  let i = md(aV);
  let o = e.staticBackgroundType ? q[e.staticBackgroundType] : a;
  let l = o && N[o]?.Component;
  let d = !!t && [pu.WHAT_DO_YOU_DO, pu.WHAT_DO_YOU_DO_V2, pu.WHERE_OR_HOW_DO_YOU_WORK, pu.WHAT_TYPE_OR_LEVEL_OF_SCHOOL].includes(t);
  let _ = !e.hasFigjamIntent && l && (d || e.staticBackgroundType && "none" !== e.staticBackgroundType);
  let p = e.hasFigjamIntent && t === pu.WHAT_DO_YOU_DO_V2;
  let h = t === pu.CHOOSE_PLAN && i === VN.PROFESSIONAL;
  return jsxs(Fragment, {
    children: [_ && jsx("div", {
      className: r()(i5, N[o]?.className, {
        [jI]: e.staticBackgroundType,
        [yh]: !!e.isInModal
      }),
      children: jsx(l, {})
    }, a), p && jsx(G, {
      jobTitle: a
    }), h && jsx("div", {
      className: jp,
      children: e.hasFigjamIntent ? jsx(B, {}) : jsx(H, {})
    }, `animationHandler-${i}`)]
  });
}
export function $$E0(e) {
  let {
    children,
    ...a
  } = e;
  return jsx(_$$N, {
    children: jsx(P.div, {
      layout: !0,
      transition: {
        type: !1
      },
      variants: {
        initial: {
          opacity: 1,
          scale: 1
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        exit: {
          opacity: 1,
          scale: 1
        }
      },
      ...a,
      children
    })
  });
}
export function $$A2(e) {
  let {
    children,
    ...a
  } = e;
  return jsx(_$$N, {
    children: jsx(P.div, {
      layout: !0,
      transition: {
        ease: "easeInOut",
        duration: .35
      },
      ...a,
      children
    })
  });
}
export function $$I3(e) {
  let {
    children,
    ...a
  } = e;
  let o = md(_D);
  let [r, u] = useState(!1);
  return (useLayoutEffect(() => {
    o && (u(!0), setTimeout(() => u(!1), 1e3));
  }, [o]), r || o) ? jsx(_$$N, {
    children: jsx(P.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      transition: {
        delay: .35
      },
      ...a,
      children
    })
  }) : jsx("div", {
    ...a,
    children
  });
}
export const QP = $$E0;
export const TE = $$O1;
export const eI = $$A2;
export const pA = $$I3;