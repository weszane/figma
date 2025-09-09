import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { J as _$$J } from "../905/614223";
import { buildUploadUrl } from "../figma_app/169182";
import { $z } from "../figma_app/617427";
import { renderI18nText, getI18nString } from "../905/303541";
import { zE } from "../905/738636";
import { b as _$$b } from "../905/985254";
import { w as _$$w } from "../0c62c2fd/912149";
import { B } from "../905/524020";
import { FFileType } from "../figma_app/191312";
import { f6, ai } from "../figma_app/915202";
import { X } from "../905/482718";
import { Q } from "../905/11928";
function y(e) {
  switch (e) {
    case "developer":
      return {
        title: renderI18nText("whiteboard.whats_new.diagram.title"),
        carousel: [buildUploadUrl("d17ad024cc18607d4a8b1a00d5e2c2d9c33f7124"), buildUploadUrl("6c43de4a393f0c6a62c810c9e624475937af46b1"), buildUploadUrl("39e86727a54bf46978d4893784240e752197b537")],
        body: renderI18nText("whiteboard.whats_new.engineer.control.body")
      };
    case "researcher":
      return {
        title: renderI18nText("whiteboard.whats_new.workshop.title"),
        carousel: [buildUploadUrl("3875dfbdfc499dfc81addcc2cb4c425432e4d83c"), buildUploadUrl("19c6fa16695aa643eb32b6de523e34682c99ff74"), buildUploadUrl("d32d06accd71ec34d461ebeb0683d372ce3c4e86")],
        body: renderI18nText("whiteboard.whats_new.research.control.body")
      };
    case "designer":
      return {
        title: renderI18nText("whiteboard.whats_new.brainstorm.title"),
        carousel: [buildUploadUrl("86daaf50ff13c8defd9b675fbfabffe8fe2b6913"), buildUploadUrl("4d374f6472949a2b2b6428ea45e6e09d4608b5b2"), buildUploadUrl("532f390ae672946525645d4b0bdaaf4d84a2d1e5")],
        body: renderI18nText("whiteboard.whats_new.design.control.body")
      };
    case "marketer":
      return {
        title: renderI18nText("whiteboard.whats_new.workshop.title"),
        carousel: [buildUploadUrl("86daaf50ff13c8defd9b675fbfabffe8fe2b6913"), buildUploadUrl("19c6fa16695aa643eb32b6de523e34682c99ff74"), buildUploadUrl("5828c6e302bd2cf83170176485c5cae9a7e09fa9")],
        body: renderI18nText("whiteboard.whats_new.marketing.control.body")
      };
    case "product-manager":
      return {
        title: renderI18nText("whiteboard.whats_new.meeting.title"),
        carousel: [buildUploadUrl("07a2696df083d2dcbbc25f3c1b184c88b72ed4a6"), buildUploadUrl("19c6fa16695aa643eb32b6de523e34682c99ff74"), buildUploadUrl("d42ae46e1e5c846580f4cfa3d275a0a4fde6c482")],
        body: renderI18nText("whiteboard.whats_new.product.control.body")
      };
    default:
      return {
        title: renderI18nText("whiteboard.whats_new.diagram.title"),
        carousel: [buildUploadUrl("c58d5f4a37c974b72777d0d482b5e168819ed339"), buildUploadUrl("87363e4551c98cc4dd5c2eb17c8a1c216b4df558"), buildUploadUrl("17e4b5731b359b5da1cc9498bee8d19a574ecb39")],
        body: renderI18nText("whiteboard.whats_new.other.control.body")
      };
  }
}
function v() {
  let e = y(_$$w({
    rolesToDefaultToOther: ["education"]
  })).carousel;
  let t = useRef(null);
  let [n, i] = useState(1);
  let o = useCallback(() => (t.current && (1 === n ? t.current.style.transition = "none" : t.current.style.transition = "transform 0.4s ease-in-out"), n === 2 * e.length - 2) ? i(1) : i(e => e + 1), [e.length, n]);
  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        o();
        t.current && (t.current.style.transform = `translateX(-${210 * n - 45}px)`);
      }, 1 === n ? 400 : 3e3);
    }, 0);
  }, [n, o, 45]);
  return jsx("div", {
    className: "whats_new_v2_carousel--carouselContainer--fm3dW",
    children: jsxs("div", {
      className: "whats_new_v2_carousel--slideTrack--CsJL8",
      ref: t,
      children: [jsx("img", {
        src: e[2],
        alt: "clone of last thumbnail"
      }), jsx("img", {
        src: e[0],
        alt: "first thumbnail"
      }), jsx("img", {
        src: e[1],
        alt: "second thumbnail"
      }), jsx("img", {
        src: e[2],
        alt: "last thumbnail"
      }), jsx("img", {
        src: e[0],
        alt: "clone of first thumbnail"
      }), jsx("img", {
        src: e[1],
        alt: "clone of second thumbnail"
      })]
    })
  });
}
let w = buildUploadUrl("d67cccad0bd5d4d8f50d8cac15b5ed848027e0a8");
let T = buildUploadUrl("f9217dd1dac2a765d218e1de9eb6fcbb32a454ec");
export function $$j0(e) {
  let t = useDispatch();
  let n = B();
  let o = _$$w({
    rolesToDefaultToOther: ["education"]
  });
  let [s, d] = useState(!0);
  let j = `Design to FigJam What's New v2 > ${o} > ${e.context}`;
  let {
    title,
    body
  } = y(o);
  let I = useCallback(() => {
    t(_$$b({
      dont_show_figjam_updates_in_figma_design: !s
    }));
    e.onClose();
  }, [s, t, e]);
  return jsx(X, {
    trackingContextName: j,
    position: Q.BOTTOM_RIGHT,
    title,
    onClose: I,
    description: body,
    media: jsxs(Fragment, {
      children: [jsx("img", {
        src: T,
        alt: "",
        className: "whats_new_v2--newBadge--kl1gy"
      }), jsx("img", {
        src: w,
        alt: "",
        className: "whats_new_v2--peaceIcon--Uk3-s"
      }), jsx(v, {})]
    }),
    overrideFooter: jsxs("div", {
      className: "whats_new_v2--ctaRow--8jvr-",
      children: [jsx(_$$J, {
        brand: "whiteboard",
        children: jsx($z, {
          onClick: () => {
            I();
            t(_$$b({
              interacted_figjam_whats_new_v2_cta: !0
            }));
            t(zE({
              state: n,
              editorType: FFileType.WHITEBOARD,
              team: void 0,
              from: f6.FIGJAM_WHATS_NEW_MODAL,
              openNewFileIn: ai.NEW_TAB
            }));
          },
          children: renderI18nText("rcs.whats_new_in_figjam.try_fig_jam")
        })
      }), "editor" === e.context && jsx("div", {
        className: "whats_new_v2--checkboxRow--eYDbx",
        children: jsx(k, {
          checked: s,
          setChecked: () => d(!s)
        })
      })]
    }),
    userFlagOnShow: "seen_whats_new_v2_modal",
    isShowing: e.isShowing
  });
}
function k({
  checked: e,
  setChecked: t
}) {
  return jsx(Checkbox, {
    label: jsx(Label, {
      children: getI18nString("rcs.whats_new_in_figjam.show_fig_jam_updates")
    }),
    checked: e,
    onChange: t
  });
}
export const xZ = $$j0;
