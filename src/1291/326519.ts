import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { K } from "../905/443068";
import { A as _$$A } from "../905/251970";
import o from "classnames";
import { A as _$$A2 } from "../vendor/850789";
import { BrowserInfo } from "../figma_app/778880";
import { Pt } from "../figma_app/806412";
import { IW } from "../figma_app/563413";
import { B as _$$B } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { A as _$$A3 } from "../1291/23528";
import { LR } from "../figma_app/120210";
import { Rt, Vq } from "../figma_app/979658";
import { O } from "../figma_app/71774";
import { bE } from "../9410/183049";
import { e as _$$e } from "../1291/265452";
import { cX } from "../figma_app/920333";
import { Q, I as _$$I } from "../9410/40694";
import { F } from "../figma_app/603239";
import { d0, d2, U5 } from "../9410/353422";
import { t as _$$t2 } from "../9410/47995";
import { XV, kb, Gv, pG } from "../1291/616526";
import { A as _$$A4 } from "../6828/564422";
import { A as _$$A5 } from "../svg/570866";
var l = o;
let C = "face_stamps--contentRow--hiGYK";
let $ = "face_stamps--sectionHeader--mWSOw text--fontPos13--xW8hS text--_fontBase--QdLsd";
export function $$k3() {
  let e = d0();
  let {
    setPreviewResource
  } = cX();
  return e ? jsx(_$$t2, {
    text: getI18nString("whiteboard.inserts.faces_title"),
    description: getI18nString("whiteboard.inserts.faces_description"),
    onClick: () => setPreviewResource({
      id: "FACE_STAMPS",
      type: Rt.ORG_FACE_STAMPS
    }),
    iconComponent: bE(),
    recordingKey: Pt("inserts", "more", "facestamps"),
    rightCaret: !0
  }) : null;
}
export function $$L2(e) {
  let {
    onBack,
    queryFromAllSearch
  } = e;
  let [n, r] = useState(!1);
  let {
    faceStampServerSideSearch,
    faceStampSearchIsLoading,
    faceStampSearchHasResolved
  } = _$$A3({
    maxResults: 20
  });
  let [u, _] = useState("");
  let [x] = _$$A2(u, 200);
  useEffect(() => {
    queryFromAllSearch && !n ? (faceStampServerSideSearch(queryFromAllSearch), _(queryFromAllSearch), r(!0)) : faceStampServerSideSearch(x);
  }, [faceStampServerSideSearch, queryFromAllSearch, x, n]);
  let h = faceStampSearchIsLoading || !faceStampSearchHasResolved;
  let f = useCallback(e => "Escape" === e.key && (x ? _("") : onBack(), !0), [x, onBack]);
  let b = d2(x);
  let j = Math.min(b.length, B);
  let S = U5(x);
  return jsxs(Fragment, {
    children: [jsx(IW, {
      focusOnMount: !1,
      selectTextOnMount: !0,
      className: "face_stamps--searchBar--vDblE",
      query: x,
      placeholder: getI18nString("whiteboard.inserts.faces_search_placeholder"),
      clearSearch: () => _(""),
      onChange: _,
      isKeyDownHandled: f,
      hideXIcon: !x
    }), jsx("div", {
      className: "face_stamps--contentContainer--0-n3a",
      children: h ? jsxs(Fragment, {
        children: [jsx($$P1, {
          rows: 1,
          showHeader: !x
        }), !x && jsx($$P1, {
          rows: 2,
          showHeader: !0
        })]
      }) : x ? S.length > 0 ? jsx($$F4, {
        maxRows: 4,
        isLoading: h,
        users: S
      }) : jsx(_$$e, {
        illustration: _$$A5,
        query: x
      }) : jsxs(Fragment, {
        children: [jsx($$F4, {
          maxRows: 1,
          title: getI18nString("whiteboard.inserts.recents_header"),
          users: S.slice(0, j)
        }), jsx($$F4, {
          maxRows: b.length > 0 ? 2 : 3,
          isLoading: h,
          title: getI18nString("whiteboard.inserts.suggested_header"),
          users: S.slice(j)
        })]
      })
    })]
  });
}
function A({
  children: e
}) {
  return jsx("div", {
    className: $,
    children: e
  });
}
let B = 5;
export function $$P1({
  rows: e = 1,
  showHeader: t = !0
}) {
  let s = e * B;
  let a = [];
  for (let e = 0; e < s; e++) a.push(jsx(M, {}, e));
  return jsxs(Fragment, {
    children: [t && jsx(R, {}), jsxs("div", {
      className: l()(C, "face_stamps--skeletonRow--AqMaG"),
      children: [...a]
    })]
  });
}
function R() {
  return jsx("div", {
    className: l()($, "face_stamps--skeletonHeader--dh0WB face_stamps--sectionHeader--mWSOw text--fontPos13--xW8hS text--_fontBase--QdLsd")
  });
}
function M() {
  return jsxs("div", {
    className: "face_stamps--skeletonFaceStampContainer--6nweY",
    children: [jsx("div", {
      className: "face_stamps--skeletonFaceStamp--J8vAD"
    }), jsx("div", {
      className: "face_stamps--skeletonFaceStampLabel---4KQM"
    })]
  });
}
export function $$F4({
  users: e,
  title: t,
  isLoading: s,
  maxRows: a
}) {
  let {
    tabManager,
    searchQuery
  } = cX();
  let o = Vq(tabManager.activeTab);
  return 0 === e.length && !0 !== s ? null : jsxs(Fragment, {
    children: [t && jsx(A, {
      children: t
    }), jsx("div", {
      className: C,
      children: s ? jsx(Q, {}) : e.slice(0, a * B).map(e => jsx(_$$I, {
        user: e,
        searchQuery,
        triggeredFrom: o
      }, e.id))
    })]
  });
}
export function $$z0({
  onBack: e,
  setPinned: t,
  queryFromAllSearch: s
}) {
  let o = LR();
  let l = useCallback(() => o(!1), [o]);
  let {
    faceStampServerSideSearch
  } = _$$A3({
    maxResults: 20
  });
  let u = () => {
    "" !== s && faceStampServerSideSearch(s);
    e();
  };
  let m = F();
  return jsxs("div", {
    className: XV,
    children: [jsxs("div", {
      className: kb,
      children: [jsx(_$$B, {
        svg: _$$A4,
        className: Gv,
        onClick: BrowserInfo.isIpad ? void 0 : u,
        onPointerDown: BrowserInfo.isIpad ? u : void 0,
        "data-not-draggable": !0,
        "data-does-not-dismiss-modal": !0
      }), jsxs("div", {
        className: "face_stamps--titleContainer--0IWlF",
        children: [jsx("span", {
          className: "face_stamps--titlePrimary--J3DrZ text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: renderI18nText("whiteboard.inserts.faces_title")
        }), jsx("span", {
          className: "face_stamps--titleSecondary--95nwF text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: renderI18nText("whiteboard.inserts.faces_description")
        })]
      })]
    }), jsx("div", {
      className: pG,
      children: m ? jsx(O, {
        setPinned: t
      }) : jsx(K, {
        onClick: l,
        "aria-label": getI18nString("general.close"),
        children: jsx(_$$A, {})
      })
    })]
  });
}
export const EP = $$z0;
export const _b = $$P1;
export const $t = $$L2;
export const H_ = $$k3;
export const Jd = $$F4;