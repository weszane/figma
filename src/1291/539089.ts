import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortByPropertyWithOptions, MAX_LENGTH } from "../figma_app/656233";
import { E as _$$E } from "../905/632989";
import { g as _$$g } from "../905/687265";
import { l as _$$l } from "../905/716947";
import { Ay } from "@stylexjs/stylex";
import { useMemoStable } from "../905/19536";
import m from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { getInitialOptions } from "../figma_app/169182";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { to } from "../figma_app/828186";
import { fC } from "../figma_app/968813";
import { fi, zK } from "../figma_app/913823";
import { fu } from "../figma_app/831799";
import { u as _$$u } from "../905/389684";
import { g5 } from "../figma_app/178752";
import { q5 } from "../figma_app/516028";
import { I as _$$I } from "../905/342732";
import { Cn } from "../905/225265";
import { Ow } from "../905/921418";
import { oh, mC, D2, Sc } from "../905/18797";
import { MH } from "../figma_app/803787";
import { Rt } from "../figma_app/979658";
import { $A } from "../905/862883";
import { D as _$$D } from "../figma_app/268271";
import { PI, rp } from "../figma_app/703988";
import { r6 } from "../905/542608";
import { yD } from "../905/92359";
import { p as _$$p } from "../905/42189";
import { e as _$$e } from "../1291/265452";
import { ik, mk, cX, hY } from "../figma_app/920333";
import { ZA } from "../1291/533467";
import { throwTypeError } from "../figma_app/465776";
import { useAtomWithSubscription } from "../figma_app/27355";
import { lW } from "../figma_app/850075";
import { ow } from "../figma_app/976749";
import { qp } from "../905/977779";
import { lX } from "../figma_app/588397";
import { b as _$$b } from "../905/635568";
import { sO } from "../figma_app/21029";
import { $ as _$$$ } from "../1291/295522";
import { W as _$$W } from "../905/78565";
import { lU } from "../1291/813188";
import { A as _$$A } from "../6828/625002";
import { A as _$$A2 } from "../1617/954184";
var _ = m;
let V = "library_items_compact_view--fullWidth--wDe9K";
let Y = "library_items_compact_view--hasFocusOutline--rLh3r";
let J = {
  standardizedLibraryTitleStyle: {
    ..._$$g.textBodyMedium,
    color: "x1akne3o",
    textAlign: "xdpxx8g",
    textOverflow: "xlyipyv",
    marginBottom: "x12sbs06",
    marginTop: "x7hzu26",
    $$css: !0
  }
};
function Z(e) {
  let t = useAtomWithSubscription(qp);
  let s = e.libraryKey ? t[e.libraryKey]?.name : void 0;
  let n = lW(!!e.showAttribution);
  let r = e.title ?? s ?? "";
  let l = () => e.onClick(r);
  let d = PI(e.items);
  let u = ee(d);
  let {
    height,
    width
  } = u;
  let p = d === rp.WIDE ? 2 : 8;
  let x = _$$b();
  let h = sO();
  let f = to();
  let y = ow();
  let [j, S] = useState(!1);
  let [v, w] = useState(width);
  let [N, T] = useState(height);
  useEffect(() => {
    if (!j || !e.positionerRef) return;
    let t = new ResizeObserver(e => {
      for (let t of e) {
        let e = (t.contentRect.width - 40 - 22 - 24) / 4;
        w(e);
        T(e);
      }
    });
    t.observe(e.positionerRef.current);
    return () => {
      t && t.disconnect();
    };
  }, [j, e.positionerRef]);
  useEffect(() => {
    S(!0);
  }, []);
  return jsxs("div", {
    className: _()("library_items_compact_view--librariesTwoColumnsItemPadding--Wl9Nv", e.isResponsive && V),
    children: [jsx(_$$E, {
      onClick: l,
      className: _()(u.gridClassName, Y, h || f ? "library_items_compact_view--slidesLibraryItemsContainer--1yske" : null, e.isResponsive && V),
      style: {
        height: N ? 2 * N + 32 + 8 + "px" : void 0
      },
      children: e.items.slice(0, p).map((t, s) => jsxs(Fragment, {
        children: [jsx(lX, {
          buttonProps: {
            onItemClick: l
          },
          draggable: {
            sourceForTracking: "universal-insert-figjam-stickers-compact-view",
            afterSuccessfulInsert: x
          },
          height: N,
          isCooper: f,
          isFigJam: y,
          isSearch: !1,
          isSlides: h,
          item: t,
          noBackground: !0,
          shouldHideDescription: !0,
          shouldShowShadowOnHover: !0,
          showName: !1,
          width: v
        }, s), f && e.showAttribution && e.libraryKey && jsx(_$$$, {
          libraryKey: e.libraryKey,
          attribution: n[e.libraryKey]?.attribution
        })]
      }))
    }), f ? jsxs("button", {
      onClick: l,
      ...Ay.props(J.standardizedLibraryTitleStyle),
      children: [e.libraryKey ? r.replace(RegExp(" by " + n[e.libraryKey]?.attribution, "g"), "").trim() : r, e.libraryKey && jsx(_$$$, {
        libraryKey: e.libraryKey,
        attribution: n[e.libraryKey]?.attribution
      })]
    }) : jsx(_$$E, {
      onClick: l,
      className: _()("library_items_compact_view--libraryTitle--wIVmD ellipsis--ellipsis--Tjyfa text--fontPos13--xW8hS text--_fontBase--QdLsd", Y),
      children: r
    })]
  });
}
let ee = e => {
  switch (e) {
    case rp.SMALL:
    case rp.NORMAL:
      return {
        height: 40,
        width: 40,
        gridClassName: "library_items_compact_view--browseLibraryItemsContainer--pNmFL"
      };
    case rp.WIDE:
      return {
        width: 184,
        height: 40,
        gridClassName: "library_items_compact_view--wideGrid--XbpRp library_items_compact_view--browseLibraryItemsContainer--pNmFL"
      };
    case rp.THIN_2_COL:
      throw Error("THIN_2_COL layout not implemented for library items compact view");
    case rp.THIN_3_COL:
      throw Error("THIN_3_COL layout not implemented for library items compact view");
    default:
      throwTypeError(e);
  }
};
let ei = "libraries_tab--libraryPadding--Dwvws";
let er = {
  sectionTitle: {
    marginLeft: "x400o59",
    marginInlineStart: null,
    marginInlineEnd: null,
    marginTop: "x1sy10c2",
    marginBottom: "x4vex6e",
    $$css: !0
  },
  bodyLargeSectionTitleText: {
    ..._$$g.textBodyLargeStrong,
    whiteSpace: "xuxw1ft",
    textOverflow: "xlyipyv",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    $$css: !0
  },
  bodyMediumSectionTitleText: {
    ..._$$g.textBodyMediumStrong,
    whiteSpace: "xuxw1ft",
    textOverflow: "xlyipyv",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    $$css: !0
  },
  libraryHeader: {
    height: "xxk0z11",
    paddingTop: "x1vi7shn",
    paddingBottom: "xp6roeo",
    paddingLeft: "x1nz7w5u",
    paddingRight: "xyx8554",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    display: "x78zum5",
    justifyContent: "x1qughib",
    alignItems: "x6s0dn4",
    $$css: !0
  },
  cooperLibraryHeader: {
    height: "xt7dq6l",
    paddingTop: "x1w4f5ud",
    paddingLeft: "x1nhlgff",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    paddingBottom: "x1vamu9a",
    $$css: !0
  },
  cooperLibraryHeaderLessPadding: {
    paddingTop: "x1gskr33",
    $$css: !0
  },
  cooperRecentsHeader: {
    marginTop: "xehsoiq",
    $$css: !0
  },
  libraryHeaderButton: {
    background: "x11g6tue",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    border: "x1gs6z28",
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
    marginLeft: "x8x9d4c",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  }
};
export function $$eo1({
  query: e,
  recentlyUsedItemsKey: t = $A.FigJam,
  hideRecentsIfEmpty: s,
  showLocalComponents: r = !1,
  addLibraryButtonType: l = "large",
  layoutOverride: m,
  recentsLayoutOverride: H,
  isResponsive: D = !1,
  positionerRef: K,
  children: W,
  toggleLibraryModalType: G = "figjam",
  showOrgLibraryLoadingState: U = !0
}) {
  let q = q5();
  let {
    fileVersion,
    loadingState
  } = selectWithShallowEqual(e => ({
    fileVersion: e.fileVersion,
    loadingState: e.loadingState,
    library: e.library
  }));
  let V = _$$I(Cn.FigJam);
  let Y = to();
  let {
    productComponents
  } = g5(t);
  let ee = ik(productComponents, "components", (e, t) => !t.some(t => t.id === e.id), Y ? 9 : 10);
  let eo = oh(fi);
  let el = mk(ee, [!eo, mC(fC)]);
  let ed = el.length > 0 || !s;
  let ec = (!V.query || !e) && getInitialOptions().user_data;
  let em = cX().setSelectedCategory;
  let e_ = !q || !fileVersion || U && !D2(loadingState, yD(q.key));
  let eg = hY();
  let {
    onToggleLibraryModal
  } = _$$u({
    entrypoint: r6.FIGJAM_BROWSE,
    modalType: G
  });
  let ex = useMemo(() => Ow(V.results.normalizedSearchResults), [V.results.normalizedSearchResults]);
  let eh = useSelector(MH);
  let ef = useMemoStable(() => Object.values(eh), [eh]);
  return V.query && e ? V.isLoading ? jsx(ZA, {}) : jsx(fu, {
    name: "stickers",
    properties: {
      query: e,
      resourceType: _$$p.STICKERS_AND_COMPONENTS
    },
    children: 0 === ex.length ? jsx(_$$e, {
      illustration: _$$A,
      defaultDisplayStringResourceType: "stickers or components",
      query: e
    }) : jsx("div", {
      className: ei,
      children: jsx(lU, {
        items: {
          "": ex
        },
        showContextMenu: !0,
        layoutOverride: m || rp.NORMAL,
        positionerRef: K,
        showAttribution: !0
      })
    })
  }) : jsxs(fu, {
    name: "stickers",
    children: [!e_ && !V.query && !Y && jsx(_$$W, {
      dismissable: !0,
      buttonText: getI18nString("whiteboard.inserts.libraries_update"),
      formatBannerText: e => getI18nString("whiteboard.inserts.libraries_component_update_count", {
        numUpdates: e
      })
    }), W, (e_ || eo) && jsx(ZA, {}), ed && jsxs(Fragment, {
      children: [jsx("h2", {
        ...Ay.props(er.sectionTitle, Y ? er.bodyMediumSectionTitleText : er.bodyLargeSectionTitleText, Y && er.cooperRecentsHeader),
        children: renderI18nText("whiteboard.inserts.recents")
      }), jsx(lU, {
        items: {
          "": el
        },
        showContextMenu: !0,
        layoutOverride: H || m || rp.NORMAL,
        positionerRef: K
      })]
    }), "small" === l && ec && jsxs("div", {
      ...Ay.props(er.libraryHeader, er.libraryHeaderButton, Y && er.cooperLibraryHeader, Y && ed && er.cooperLibraryHeaderLessPadding),
      children: [jsx("h2", {
        ...Ay.props(er.bodyMediumSectionTitleText),
        children: renderI18nText("whiteboard.inserts.libraries")
      }), jsx("button", {
        onClick: onToggleLibraryModal,
        "data-onboarding-key": _$$D,
        children: jsx("div", {
          className: "libraries_tab--secondaryButton--fxK2n ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: renderI18nText("cooper.inserts.add_library")
        })
      })]
    }), "large" === l && jsx("h2", {
      ...Ay.props(er.sectionTitle, Y ? er.bodyMediumSectionTitleText : er.bodyLargeSectionTitleText),
      children: renderI18nText("whiteboard.inserts.libraries")
    }), jsxs("div", {
      className: "libraries_tab--librariesTwoColumns--dSOU-",
      children: ["large" === l && ec && jsx("div", {
        className: "libraries_tab--librariesTwoColumnsItemPadding--YeBjB",
        children: jsxs(_$$E, {
          className: _()("libraries_tab--toggleLibraryModalContainer--lup1l text--fontPos13--xW8hS text--_fontBase--QdLsd", "libraries_tab--hasFocusOutline--aUlA1"),
          onClick: onToggleLibraryModal,
          "data-onboarding-key": _$$D,
          children: [jsx(_$$B, {
            className: _$$s.colorIcon.$,
            svg: _$$A2
          }), jsx("span", {
            className: _$$s.colorText.$,
            children: renderI18nText("whiteboard.inserts.add_your_own")
          })]
        })
      }), r && q && ef.length ? jsx(Z, {
        fileKey: q.libraryKey,
        libraryKey: _$$l(q.libraryKey),
        items: ef,
        title: getI18nString("design_systems.assets_panel.local_components"),
        onClick: e => {
          em({
            id: q.libraryKey,
            title: e,
            resourceType: Rt.STICKERS_AND_COMPONENTS
          });
        }
      }, q.libraryKey) : null, Object.keys(eg.libraryKeyToSubscribedItems).map(e => jsx(Z, {
        libraryKey: _$$l(e),
        items: function (e) {
          let t = [];
          let s = eu(e);
          Object.keys(s).sort().forEach(e => {
            t.push(...s[e]);
          });
          return t;
        }(eg.libraryKeyToSubscribedItems[_$$l(e)]),
        onClick: t => {
          em({
            id: e,
            title: t,
            resourceType: Rt.STICKERS_AND_COMPONENTS
          });
        },
        isResponsive: D,
        positionerRef: K
      }, e))]
    })]
  });
}
function el() {
  let e = useSelector(MH);
  let t = q5();
  return jsx(fu, {
    name: "detail",
    properties: {
      resourceId: t?.libraryKey,
      resourceType: _$$p.STICKERS_AND_COMPONENTS
    },
    children: jsx("div", {
      className: ei,
      children: jsx(lU, {
        items: eu(Object.values(e)),
        showContextMenu: !1
      })
    })
  });
}
export function $$ed2({
  selectedLibrary: e,
  layoutOverride: t,
  positionerRef: s,
  showName: a = !1,
  includeTopPadding: n = !0,
  shouldHideTooltip: r = !1
}) {
  let o = hY();
  let l = q5();
  let c = o.libraryKeyToSubscribedItems[_$$l(e.id)];
  return l && e.id === l.libraryKey ? jsx(el, {}) : c ? jsx(fu, {
    name: "detail",
    properties: {
      resourceId: e.id,
      resourceType: _$$p.STICKERS_AND_COMPONENTS
    },
    children: jsx("div", {
      className: _()({
        [ei]: n && t === rp.THIN_2_COL
      }),
      children: jsx(lU, {
        items: eu(c),
        showContextMenu: !1,
        layoutOverride: t,
        positionerRef: s,
        showName: a,
        shouldHideTooltip: r
      })
    })
  }) : null;
}
export function $$ec0() {
  let e = useDispatch();
  let t = q5();
  let {
    fileVersion,
    loadingState
  } = selectWithShallowEqual(e => ({
    fileVersion: e.fileVersion,
    loadingState: e.loadingState
  }));
  let o = t && fileVersion && Sc(loadingState, yD(t.key));
  useEffect(() => {
    o && e(zK());
  }, [e, o]);
  let {
    productComponents
  } = g5($A.FigJam);
  let d = ik(productComponents, "components", (e, t) => !t.some(t => t.id === e.id), 10);
  let c = mk(d, [mC(fi), mC(fC)]);
  return jsx(lU, {
    items: {
      "": c
    },
    showContextMenu: !0,
    layoutOverride: rp.NORMAL
  });
}
function eu(e) {
  let t = {};
  sortByPropertyWithOptions(e, "name", {
    useExpensiveNaturalComparison: e.length < MAX_LENGTH
  });
  e.forEach(e => {
    let s = e.containing_frame?.name || "";
    t[s] || (t[s] = []);
    t[s].push(e);
  });
  return t;
}
export function $$em3(e) {
  return {
    "": e
  };
}
export const zz = $$ec0;
export const FN = $$eo1;
export const uU = $$ed2;
export const M8 = $$em3;