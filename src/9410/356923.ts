import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { ButtonPrimitive } from "../905/632989";
import { AppStateTsApi, SlideConstantsCppBindings } from "../figma_app/763686";
import { scopeAwareFunction } from "../905/189185";
import { l as _$$l } from "../905/716947";
import { Ay } from "@stylexjs/stylex";
import { Xr, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import h from "classnames";
import { Point } from "../905/736624";
import { oW } from "../905/675859";
import { LoadingSpinner } from "../figma_app/858013";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { getFileKey } from "../905/412913";
import { wo } from "../figma_app/753501";
import { logAndTrackCTA } from "../figma_app/314264";
import { fG } from "../figma_app/973927";
import { useCurrentFileKey } from "../figma_app/516028";
import { q } from "../905/524117";
import { j as _$$j } from "../905/523935";
import { sU, WM, dY, Wh } from "../905/838765";
import { i } from "../figma_app/566312";
import { JY } from "../9410/236102";
import { v2 } from "../figma_app/164260";
import { D as _$$D } from "../7222/938408";
import { VZ, Ei, bY, Vf, ux, DM } from "../figma_app/60023";
import { CH, Ji } from "../figma_app/553488";
import { r$ } from "../7222/396421";
import { e4, pz, a3, ln, S as _$$S, uP, zs, $y, VY, iH, y5, gx, JB, n_ } from "../9410/261393";
var m = h;
let M = getFileKey();
export function $$P2({
  module: e,
  ...t
}) {
  let i = r$();
  let s = Xr(VZ);
  let o = Xr(Ei);
  let c = useAtomWithSubscription(v2);
  let u = useCurrentFileKey();
  let h = useDispatch();
  let g = "insert-slide-module";
  let _ = _$$D(e.library_key);
  let y = scopeAwareFunction.user(g, (t, r, n) => {
    CH({
      module: e,
      viewType: i,
      getGridCoord: AppStateTsApi?.getInsertGridCoord ?? (() => ({
        row: 0,
        col: 0
      })),
      dispatch: h,
      subscribeToLibrary: _
    })(t, r, n);
  });
  let {
    onInsertableResourcePointerDown,
    dragState
  } = _$$j({
    resource: e,
    isList: !1,
    sourceForTracking: "slides-templates-panel",
    clickToInsert_DEPRECATED: !0,
    insertAsChildOfCanvas: !0,
    insertionCallback: y,
    afterSuccessfulInsert: () => {
      o(!1);
      s(!1);
    },
    selectAfterInsert: !1
  });
  let E = scopeAwareFunction.user(g, onInsertableResourcePointerDown);
  let j = useMemo(() => c ? new Point(SlideConstantsCppBindings?.singleSlideThumbnailWidth() ?? 0, SlideConstantsCppBindings?.singleSlideThumbnailHeight() ?? 0) : void 0, [c]);
  return jsxs("div", {
    className: m()(_$$s.flex.alignCenter.justifyCenter.gap8.$, {
      [e4]: i === Ji.PICKER || i === Ji.OUTLINE_TO_DECK,
      [pz]: i === Ji.OVERLAY_MODAL,
      [a3]: !c
    }),
    children: [jsx(q, {
      dragState: i === Ji.PICKER ? dragState : null,
      isList: !1,
      overrideDragPreviewSize: j
    }), jsx($$F1, {
      thumbnailUrl: e.thumbnail_url,
      onPointerDown: t => {
        E(t);
        logAndTrackCTA({
          moduleId: e.id,
          moduleFileKey: M(e),
          fileKey: u,
          name: "slide_template_tile",
          productType: "slides"
        });
      },
      "aria-label": t["aria-label"]
    }, e.node_id)]
  });
}
export function $$F1({
  name: e,
  thumbnailUrl: t,
  thumbnailWidth: i,
  thumbnailHeight: n,
  onPointerDown: a,
  showLoadingSpinner: s = !1,
  disabled: l = !1,
  removeBorder: d = !1,
  ...c
}) {
  return jsxs(ButtonPrimitive, {
    className: m()(_$$s.flex.flexColumn.itemsStart.hFull.wFull.$, ln),
    onClick: l ? void 0 : a,
    actionOnPointerDown: !0,
    "aria-label": c["aria-label"],
    htmlAttributes: {
      "data-testid": "insertableSlideTile"
    },
    children: [jsxs("div", {
      ...Ay.props(H.tile, !d && H.tileBorder),
      style: {
        width: i ?? "100%",
        height: n ?? "100%"
      },
      children: [s && jsx(LoadingSpinner, {
        className: _$$S
      }), jsx(oW, {
        onDragStart: wo,
        className: uP,
        src: t,
        alt: e,
        loading: "lazy"
      })]
    }), e && jsx("div", {
      className: _$$s.font11.fontInter.colorTextSecondary.$,
      children: e
    })]
  });
}
function B({
  text: e,
  dataTestId: t,
  onPointerDown: i,
  imageContainerContent: n,
  additionalClassname: a,
  showSelectedState: s = !1
}) {
  let o = r$();
  let l = useAtomWithSubscription(bY);
  return jsx("div", {
    "data-testid": t,
    className: m()(_$$s.p8.$, a),
    children: jsx(sU, {
      image: jsx("div", {
        onPointerDown: i,
        children: jsx(WM, {
          className: m()({
            [zs]: o === Ji.PICKER || o === Ji.OUTLINE_TO_DECK,
            [$y]: o === Ji.OVERLAY_MODAL,
            [VY]: l.type === Vf.TEMPLATE_PICKER,
            [iH]: s
          }),
          removeBorder: !0,
          backgroundColor: "none",
          children: n
        })
      }),
      bottomRow: jsx(dY.MetadataContainer, {
        children: jsx(dY.TextMetadataLayout, {
          onClick: i,
          primaryText: jsx("div", {
            className: _$$s.font11.colorText.ellipsis.overflowHidden.$,
            children: e
          })
        })
      }),
      bottomRowClassName: m()({
        [y5]: o === Ji.PICKER || o === Ji.OUTLINE_TO_DECK,
        [gx]: o === Ji.OVERLAY_MODAL
      })
    })
  });
}
export function $$U0({
  template: e
}) {
  return useAtomWithSubscription(bY).type === Vf.TEMPLATE_PICKER ? jsx(G, {
    template: e
  }) : jsx(K, {
    template: e
  });
}
function G({
  template: e
}) {
  let {
    name,
    imageUrl,
    libraryKey
  } = fG()(e);
  let [a, s] = useAtomValueAndSetter(ux);
  if (!libraryKey) return null;
  let o = () => s(_$$l(libraryKey));
  return jsx(B, {
    text: name,
    dataTestId: "slidesTemplateCoverTile",
    onPointerDown: o,
    imageContainerContent: jsx($$F1, {
      thumbnailUrl: imageUrl,
      onPointerDown: o,
      removeBorder: a === _$$l(libraryKey)
    }, name),
    additionalClassname: JB,
    showSelectedState: a === _$$l(libraryKey)
  });
}
function K({
  template: e
}) {
  let {
    name,
    imageUrl,
    libraryKey
  } = fG()(e);
  let a = Xr(bY);
  let o = r$();
  let l = useAtomWithSubscription(bY);
  let d = JY();
  let u = Xr(DM);
  if (!libraryKey) return null;
  let h = e => {
    e.stopPropagation();
    libraryKey && (logAndTrackCTA({
      fileKey: libraryKey,
      name: "template_cover_tile",
      productType: "slides"
    }), o === Ji.OUTLINE_TO_DECK ? (d.setTemplateLibraryKey(_$$l(libraryKey)), u(!1)) : a({
      type: Vf.TEMPLATE,
      libraryKey,
      parentView: l
    }));
  };
  let m = o === Ji.OUTLINE_TO_DECK ? "Select template" : renderI18nText("slides.templates.view_template");
  return jsx(B, {
    text: name,
    dataTestId: "slidesTemplateCoverTile",
    onPointerDown: h,
    imageContainerContent: jsxs(Fragment, {
      children: [jsx(Wh.Cover, {
        children: jsx("div", {
          className: n_
        })
      }), jsx(Wh.Center, {
        children: jsx(i, {
          insertTemplate: lQ,
          isInsertingTemplate: !1,
          shouldUseOpaqueBackground: !0,
          children: m
        })
      }), jsx($$F1, {
        thumbnailUrl: imageUrl,
        onPointerDown: h
      }, name)]
    })
  });
}
let H = {
  tile: {
    display: "x78zum5",
    position: "x1n2onr6",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    $$css: !0
  },
  tileBorder: {
    boxSizing: "x9f619",
    border: "xqvp088",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "x1sxf85j",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  }
};
export const AK = $$U0;
export const FA = $$F1;
export const ag = $$P2;