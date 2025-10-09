import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { textDisplayConfig } from "../905/687265";
import { stylex } from "@stylexjs/stylex";
import { ms, c$ } from "../figma_app/236327";
import { renderI18nText } from "../905/303541";
import { getFileKey } from "../905/412913";
import { styleBuilderInstance } from "../905/941192";
import { lW } from "../figma_app/850075";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { showDropdownThunk, hideDropdownAction } from "../905/929976";
import { isWhiteboardFileType } from "../figma_app/976749";
import { useDropdownState } from "../905/848862";
import { liveStoreInstance } from "../905/713695";
import { Du, Vq, Rt } from "../figma_app/979658";
import { PI, A5, rp } from "../figma_app/703988";
import { lX } from "../figma_app/588397";
import { cX } from "../figma_app/920333";
import { b as _$$b } from "../905/635568";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { $ as _$$$ } from "../1291/295522";
import { kL, xl, ts, Do, pr, R5, BF, Ox } from "../1291/62942";
let C = {
  attributionContainer: {
    ...textDisplayConfig.textBodySmall,
    height: "x47omn1",
    marginBottom: "x1ef8nbk",
    $$css: !0
  },
  nameContainer: {
    ...textDisplayConfig.textBodySmall,
    height: "x47omn1",
    marginBottom: "x1ef8nbk",
    paddingLeft: "xilkfi8",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
export function $$$2(e) {
  return jsx("div", {
    className: Object.keys(e.items).length > 5 ? kL : xl,
    children: Object.keys(e.items).sort().map(t => jsx($$I0, {
      items: e.items[t],
      layoutOverride: e.layoutOverride,
      showContextMenu: e.showContextMenu,
      positionerRef: e.positionerRef,
      showAttribution: e.showAttribution,
      showName: e.showName,
      shouldHideTooltip: e.shouldHideTooltip
    }, t))
  });
}
let E = getFileKey();
export function $$I0(e) {
  let t = e.layoutOverride || PI(e.items);
  let s = lW(!!e.showAttribution);
  let r = k(t);
  let o = A5({
    containerWidth: 0,
    isList: !1,
    layout: t,
    maxSmallThumbSize: 60,
    maxWideColWidth: 60
  });
  let {
    height,
    width,
    gridClassName
  } = r;
  let m = _$$b();
  let h = cX().tabManager;
  let f = useIsFullscreenSlidesView();
  let $ = isWhiteboardFileType();
  let I = useIsSelectedViewFullscreenCooper();
  let L = t === rp.THIN_2_COL || t === rp.THIN_3_COL ? 4 : 8;
  let A = useDispatch<AppDispatch>();
  let R = f ? Du : Vq(h.activeTab);
  let [M, F] = useState(!1);
  let [z, O] = useState(width);
  let [H, D] = useState(height);
  useEffect(() => {
    if (!M || !e.positionerRef) return;
    let t = new ResizeObserver(e => {
      for (let t of e) {
        let e = (t.contentRect.width - 32 - 8 * (o - 1)) / o;
        O(e);
        D(e);
      }
    });
    t.observe(e.positionerRef.current);
    return () => {
      t && t.disconnect();
    };
  }, [M, e.positionerRef, o]);
  useEffect(() => {
    F(!0);
  }, []);
  return jsxs("div", {
    className: `${gridClassName} ${ts}`,
    children: [e.items.map((t, a) => {
      let n = jsx(lX, {
        buttonProps: {
          onContextMenu: s => {
            e.showContextMenu && (s.preventDefault(), A(showDropdownThunk({
              type: B,
              data: {
                fileKey: E(t),
                position: {
                  top: s.clientY,
                  left: s.clientX
                }
              }
            })));
          },
          clickToInsert: !0
        },
        draggable: {
          sourceForTracking: R,
          afterSuccessfulInsert: m
        },
        height: H,
        isCooper: I,
        isFigJam: $,
        isSearch: !1,
        isSlides: f,
        item: t,
        itemPadding: L,
        noBackground: !f && !I,
        shouldHideDescription: !0,
        shouldHideTooltip: e.shouldHideTooltip,
        shouldShowShadowOnHover: !0,
        showName: !1,
        width: z
      }, a);
      return jsx(Fragment, {
        children: I ? jsxs("div", {
          className: "x78zum5 xdt5ytf x10185g9",
          children: [n, e.showAttribution ? jsx("div", {
            ...stylex.props(C.attributionContainer),
            children: jsx(_$$$, {
              libraryKey: t.library_key,
              attribution: s[t.library_key]?.attribution
            })
          }) : null, e.showName ? jsx("div", {
            ...stylex.props(C.nameContainer),
            children: t.name
          }) : null]
        }, a) : n
      });
    }), jsx($$P1, {})]
  });
}
let k = e => {
  switch (e) {
    case rp.SMALL:
      return {
        height: 60,
        width: 60,
        gridClassName: Do
      };
    case rp.NORMAL:
      return {
        height: 73,
        width: 73,
        gridClassName: pr
      };
    case rp.WIDE:
      return {
        width: 432,
        gridClassName: R5
      };
    case rp.THIN_2_COL:
      return {
        width: 60,
        height: 60,
        gridClassName: BF
      };
    case rp.THIN_3_COL:
      return {
        width: 60,
        height: 60,
        gridClassName: Ox
      };
    default:
      throwTypeError(e);
  }
};
let L = ms;
let A = c$;
let B = "FIGJAM_LIBRARY_ITEM_DROPDOWN_KEY";
export function $$P1() {
  let e = useDropdownState();
  let t = liveStoreInstance.File.useValue(e?.data?.fileKey).data;
  let s = cX().setSelectedCategory;
  let a = useDispatch<AppDispatch>();
  if (e?.type !== B || !t) return null;
  let r = t.library_key;
  return r ? jsx(L, {
    style: styleBuilderInstance.add(e?.data?.position).add(styleBuilderInstance.fixed).$,
    children: jsx(A, {
      onClick: () => {
        a(hideDropdownAction());
        s({
          id: r,
          title: t.name,
          resourceType: Rt.STICKERS_AND_COMPONENTS
        });
      },
      children: renderI18nText("whiteboard.inserts.view_stickers_in_this_set")
    })
  }) : null;
}
export const OS = $$I0;
export const he = $$P1;
export const lU = $$$2;
