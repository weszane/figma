import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useCallback, useState, useEffect, forwardRef, useRef } from "react";
import { ButtonPrimitive } from "../905/632989";
import { O as _$$O } from "../905/587457";
import { k as _$$k } from "../905/888808";
import { O as _$$O2 } from "../905/969533";
import { j as _$$j } from "../905/519202";
import { r as _$$r } from "../905/957643";
import { _ as _$$_ } from "../905/563242";
import { InteractionCpp, SlideConstantsCppBindings, AppStateTsApi, SlideTransitionType, AnimationEventType } from "../figma_app/763686";
import { Y as _$$Y } from "../905/912236";
import { xk, Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { Ay as _$$Ay } from "../figma_app/272902";
import g from "classnames";
import { _ as _$$_2 } from "../vendor/853977";
import { selectWithShallowEqual } from "../905/103090";
import { useHandleChangeEvent, useHandleKeyboardEvent, generateRecordingKey } from "../figma_app/878298";
import { RecordableButton } from "../905/511649";
import { oW } from "../905/675859";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { sx } from "../905/941192";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { z7, Uo } from "../figma_app/334505";
import { DP } from "../905/640017";
import { ic } from "../figma_app/688398";
import { x as _$$x } from "../9410/705473";
import { Fk } from "../figma_app/167249";
import { KindEnum } from "../905/129884";
import { useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { SvgComponent } from "../905/714743";
import { fullscreenValue } from "../figma_app/455680";
import { Z7 } from "../9410/626378";
import { Vi } from "../figma_app/955650";
import { A as _$$A } from "../b2835def/22707";
import { go } from "../figma_app/524655";
import { J as _$$J } from "../905/614223";
import { g as _$$g } from "../905/687265";
import { permissionScopeHandler } from "../905/189185";
import { isCommandEvent } from "../905/63728";
import { b as _$$b } from "../1528/127188";
import { f7 } from "../figma_app/896988";
import { renameNode, replaceSelection } from "../figma_app/741237";
import { p8 } from "../figma_app/722362";
import { w as _$$w } from "../1528/606183";
let s = memo(function (e) {
  return _$$O() ? jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M18 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.5 8.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-2 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  }) : jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M7.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-2 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm9.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m1 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",
      clipRule: "evenodd"
    })
  });
});
var f = g;
function U(e) {
  let {
    carouselSlide
  } = e;
  let n = useAtomWithSubscription(Z7);
  let r = n.get(carouselSlide.guid);
  let i = useSelector(e => e.mirror.appModel.showComments);
  let s = Vi();
  let o = useCallback(() => {
    i || fullscreenValue.triggerAction("toggle-show-comments", {
      source: "comments_sidebar_setting"
    });
    s || fullscreenValue.triggerAction("set-tool-comments", {
      source: "comments_sidebar_setting"
    });
  }, [i, s]);
  if (!r && !carouselSlide.isCollapsed) return null;
  let d = r?.commentCount || 0;
  let c = r?.hasUnread || !1;
  if (carouselSlide.isCollapsed) {
    let e = carouselSlide.children;
    for (let t = 0; t < e.length; t++) {
      let a = e[t];
      let l = n.get(a.guid);
      a.children && e.concat(a.children);
      l && (d += l.commentCount, c = c || l.hasUnread);
    }
  }
  return d ? jsxs("div", {
    className: c ? "carousel_comment--carouselComment--X2WAd" : "carousel_comment--carouselCommentRead--ecFSn carousel_comment--carouselComment--X2WAd",
    children: [jsx("div", {
      className: "carousel_comment--commentCount--8Fpe6",
      children: d
    }), jsx(SvgComponent, {
      className: "carousel_comment--carouselCommentPin--yBJwH",
      svg: _$$A,
      onClick: o
    })]
  }) : null;
}
function H({
  width: e,
  layerCount: t
}) {
  return jsx("div", {
    className: "x186iv6y x1n2onr6 x1rm44br x1db2dqx x176lpz5 x19y5rnk xf7z5ut x78zum5 x6s0dn4 xl56j7k xutn4fi",
    style: {
      width: e,
      transform: `translateY(calc(-104% - ${7.5 * t}px))`
    }
  });
}
let V = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M2 4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5V6H2zM6 7h8v4.5a1.5 1.5 0 0 1-1.5 1.5H6zM5 7v6H3.5A1.5 1.5 0 0 1 2 11.5V7z",
      clipRule: "evenodd"
    })
  });
});
let ee = {
  rowTitleContent: {
    whiteSpace: "xuxw1ft",
    overflow: "xb3r6kr",
    textOverflow: "xlyipyv",
    $$css: !0
  },
  rowTitleContentGrey: {
    color: "x1n0bwc9",
    $$css: !0
  },
  rowTitleContentWrapper: {
    width: "xh8yej3",
    paddingRight: "x10134s8",
    overflow: "xb3r6kr",
    $$css: !0
  },
  rowTitleContentWrapperEditing: {
    paddingRight: "x1xpa7k",
    marginLeft: "x1bawvfr",
    $$css: !0
  },
  stateGroupTitleContentWrapper: {
    display: "x78zum5",
    gap: "xg2d0mh",
    $$css: !0
  },
  stateGroupTitleContent: {
    color: "xb78xi3",
    $$css: !0
  },
  stateGroupTitleContentDarkMode: {
    color: "x130mkmq",
    $$css: !0
  },
  stateGroupIcon: {
    "--color-icon": "xz23s8v",
    $$css: !0
  },
  stateGroupIconDarkMode: {
    "--color-icon": "xjzaj9q",
    $$css: !0
  }
};
function et({
  caret: e,
  onClickCaret: t,
  recordingKey: n,
  rowTitle: i,
  carouselItemIndexNumber: s,
  nodeId: o,
  isSelected: c,
  isStateGroupRow: u
}) {
  let p = p8("isReadOnly");
  let [m, E] = useState(!1);
  let [x, g] = useState(i || "");
  let [v, I] = useState(!0);
  let [y, b] = useState(!1);
  let C = InteractionCpp?.editorTypeConfig().hasSlideRowBeenManuallyRenamed(o);
  useEffect(() => {
    g(i || "");
    C || g("");
  }, [i, C]);
  let T = useHandleChangeEvent("onCanvasGridRowRename", "change", e => {
    g(e.target.value);
    I(!0);
  });
  let L = useHandleKeyboardEvent("onCanvasGridRowRename", "keydown", e => {
    if (!y) switch (e.key) {
      case "Escape":
      case "Enter":
      case "Tab":
        e.preventDefault();
        I(!1);
        O(x);
        fullscreenValue.commit();
        E(!1);
        break;
      case "=":
      case "-":
        isCommandEvent(e) && f7(e);
    }
  });
  let R = useSelector(e => e.mirror.selectionProperties.name);
  let O = e => {
    R && permissionScopeHandler.user("rename-row", () => renameNode(o, e));
  };
  let j = "dark" === DP();
  return jsxs(_$$b, {
    tag: "div",
    className: f()("row_title--rowTitle--yb97n", {
      "row_title--rowTitleSelected--pzJfe": c,
      "row_title--rowTitleSelectedStateGroup---TE5b": c && u && !j,
      "row_title--rowTitleSelectedDark--mKfmJ": c && j,
      "row_title--rowTitleSelectedStateGroupDarkMode--G7mLN": c && u && j
    }),
    onClick: () => {
      replaceSelection([o]);
    },
    onDoubleClick: () => {
      p || E(!0);
    },
    recordingKey: generateRecordingKey(n, "rowTitle"),
    children: [e ? jsx(ButtonPrimitive, {
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        t(e);
      },
      "aria-label": getI18nString("cooper.carousel.row_title_caret_label"),
      "aria-expanded": "EXPANDED" === e,
      style: {
        justifySelf: "center",
        transition: "transform 0.25s",
        transform: "EXPANDED" === e ? `rotate(0deg) translateX(${s && s > 9 ? "2px" : "0"})` : "rotate(-90deg) translateX(0)",
        backgroundColor: "transparent",
        marginLeft: "4px"
      },
      recordingKey: generateRecordingKey(n, "caret"),
      children: jsx(_$$O2, {
        style: {
          "--color-icon": "var(--color-icon-secondary)"
        }
      })
    }) : null, jsxs("div", {
      style: e ? {} : {
        paddingLeft: "28px"
      },
      ...xk(ee.rowTitleContentWrapper, u && ee.stateGroupTitleContentWrapper, m && ee.rowTitleContentWrapperEditing),
      children: [u && jsx(V, {
        ...xk(j ? ee.stateGroupIconDarkMode : ee.stateGroupIcon)
      }), m ? jsx(_$$J, {
        brand: "design",
        children: jsx("input", {
          className: "xh8yej3 xxk0z11 x9f619 x3zlzjp x19y5rnk xx99whi",
          autoCapitalize: "off",
          autoComplete: "off",
          autoCorrect: "off",
          autoFocus: !0,
          onBlur: e => {
            E(!1);
            v && (O(e.target.value), fullscreenValue.commit());
          },
          onChange: T,
          onCompositionEnd: () => b(!1),
          onCompositionStart: () => b(!0),
          onFocus: e => {
            e.target.select();
          },
          onKeyDown: L,
          spellCheck: !1,
          type: "text",
          value: x
        })
      }) : jsx("div", {
        ...xk(ee.rowTitleContent, u && (j ? ee.stateGroupTitleContentDarkMode : ee.stateGroupTitleContent), u && _$$g.textBodyMedium, !C && ee.rowTitleContentGrey),
        "data-tooltip": i,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip-show-above": !0,
        children: i
      })]
    })]
  });
}
let ea = e => [e ? "var(--ramp-pink-400)" : "var(--ramp-pink-500)", e ? "var(--ramp-pale-pink-800)" : "var(--ramp-pink-100)", e ? "var(--ramp-pink-400-dark)" : "var(--ramp-pink-600)", e ? "var(--ramp-pale-pink-800)" : "var(--ramp-pink-100)", e ? "var(--ramp-pink-700)" : "var(--ramp-pink-300)"];
let $$el0 = forwardRef(function ({
  carouselType: e,
  carouselItemConfig: t,
  parentCarouselItemConfig: n,
  isDraggingCarouselItems: r,
  isHovered: i,
  isCarouselFocused: d,
  isItemActive: c,
  isSelected: u,
  firstOfSelection: p,
  lastOfSelection: _,
  indentAmount: g,
  selectedSlideCount: b,
  guidToDisplayForDebugging: L,
  onMouseDown: R,
  onMouseUp: O,
  onClickCaret: w,
  onScrollToCarouselItem: P,
  disabled: F,
  recordingKey: M,
  dragControls: B,
  onDrag: z,
  onDragStart: G,
  onDragEnd: V,
  reorderScrollerRef: $,
  getStackTooltipText: W,
  showRowTitle: Y,
  shouldIndentChildren: X,
  useDifferentColorForTemplates: q,
  showRowNumber: Z,
  smallSquares: J,
  showRowDivider: Q,
  isFirstItem: ee,
  collapsedStatesDisabled: el,
  hasBuzzBulkCreateBinding: er
}, es) {
  let eo;
  let eu;
  let {
    guid,
    number,
    isCollapsed,
    children
  } = t;
  let eE = useRef(null);
  let ex = "dark" === DP();
  let eg = getFeatureFlags().slide_chapters;
  let ef = selectWithShallowEqual(e => Object.keys(e.mirror.sceneGraphSelection));
  let ev = SlideConstantsCppBindings?.singleSlideThumbnailNumberWidth() ?? 0;
  let eI = function (e) {
    let t = AppStateTsApi?.slideAnimationBindings().getSlideTransition(e);
    let n = null != t && (t.type !== SlideTransitionType.NONE || t.trigger.type === AnimationEventType.AFTER_DELAY);
    let a = Fk((e, t) => {
      let n = e.get(t);
      return !!n?.objectAnimations?.length;
    }, e);
    return n || a;
  }(guid);
  let [eN, ey] = go(t);
  let eb = children.length > 0 || !t.parentGuid;
  let eC = Fk(e => {
    let t = e.get(guid);
    if (!t) return {
      name: "",
      guid: ""
    };
    let n = e.get(t.containingCanvasGridRowId);
    let a = n?.isCanvasGridStateGroupRow;
    return {
      name: n?.name,
      guid: n?.guid,
      isStateGroupRow: a
    };
  });
  let eS = eC.name;
  let eT = !!eC.isStateGroupRow && getFeatureFlags().buzz_template_sets;
  let eL = eC.guid;
  let eR = !!eL && ef.includes(eL);
  let eD = n && n?.children.length && n.children[n.children.length - 1]?.guid === guid;
  eR && (p = !1, _ = !1);
  let eO = Fk((e, t) => {
    let n = e.get(t);
    return _$$Y(n) && n.isSkippedSlide;
  }, guid);
  let ej = _$$x($);
  useEffect(() => {
    eE.current && ej && u && P(eE.current);
  }, [u, ej, P, $, b]);
  let ek = 0;
  eO ? ek = 1 : er && (ek = 2);
  let eA = r && i;
  let ew = r && u && !i;
  let eP = (u || c) && !eA || Y && eR;
  let eF = Fk(e => ["FRAME", "SLIDE", "MODULE"].includes(e.get(guid)?.type ?? ""));
  let eM = "var(--color-bordertranslucent)";
  let eB = "var(--color-bg)";
  let ez = "var(--color-text-secondary";
  let eG = "var(--color-fsCanvasDefaultFill)";
  q ? u ? eT ? [eM, eB, ez, eG, eo] = ea(ex) : eF ? (eM = ex ? "var(--ramp-blue-400)" : "var(--ramp-blue-500)", eB = ex ? "var(--ramp-pale-blue-700)" : "var(--ramp-blue-200)", ez = ex ? "var(--ramp-blue-400-dark)" : "var(--ramp-blue-600)", eG = ex ? "var(--ramp-pale-blue-800)" : "var(--ramp-blue-100)") : (eM = ex ? "var(--ramp-pink-400)" : "var(--ramp-pink-500)", eB = ex ? "var(--ramp-pale-pink-700)" : "var(--ramp-pink-200)", ez = ex ? "var(--ramp-pink-400-dark)" : "var(--ramp-pink-600)", eG = ex ? "var(--ramp-pale-pink-800)" : "var(--ramp-pink-100)") : eR ? (eB = ex ? "var(--ramp-pale-blue-800)" : "var(--ramp-blue-100)", eG = ex ? "var(--ramp-pale-blue-800)" : "var(--ramp-blue-100)", eT ? [eM, eB, ez, eG, eo] = ea(ex) : eF ? (ez = ex ? "var(--ramp-blue-400-dark)" : "var(--ramp-blue-600-light)", eM = ex ? "var(--ramp-pale-blue-600)" : "var(--ramp-blue-300-light)", eo = ex ? "var(--ramp-pale-blue-600)" : "var(--ramp-blue-300-light)") : (ez = ex ? "var(--ramp-pink-400)" : "var(--ramp-pink-600)", eM = ex ? "var(--ramp-pale-pink-600)" : "var(--ramp-pink-300)", eo = ex ? "var(--ramp-pale-pink-600)" : "var(--ramp-pink-300)")) : c && (eM = "var(--color-border-strong)", eB = "var(--color-border)", ez = "var(--color-text)", eG = "var(--color-bg-secondary)") : (eo = "var(--color-bordertranslucent)", d ? u ? (eB = "var(--color-border-design)", ez = "var(--color-text-design)") : getFeatureFlags().slide_chapters && eR && (eB = ex ? "var(--ramp-pale-blue-800)" : "var(--ramp-blue-100)", eG = ex ? "var(--ramp-pale-blue-800)" : "var(--ramp-blue-100)", ez = ex ? "var(--ramp-blue-400-dark)" : "var(--ramp-blue-600-light)", eM = ex ? "var(--ramp-pale-blue-600)" : "var(--ramp-blue-300-light)") : u && (eB = "var(--color-bg-tertiary)", ez = "var(--color-text-secondary)"));
  let eU = 0;
  r && u && b >= 2 ? eU = b >= 3 ? 2 : 1 : isCollapsed && children.length >= 1 && (eU = children.length > 1 ? 2 : 1);
  let eK = !children.length || eA || el ? void 0 : isCollapsed ? "COLLAPSED" : "EXPANDED";
  let eH = J ? "5px" : "9px";
  eu = q ? eB || "var(--color-bg)" : ex ? "#5C5C5C" : "var(--color-bg, var(--fallback-color-bg))";
  let eV = "buzz" !== e && getFeatureFlags().slides_editor_a11y ? eO ? getI18nString("slides.carousel.item_aria_label_slides_skipped") : getI18nString("slides.carousel.item_aria_label_slides", {
    number: number ?? ""
  }) : getI18nString("cooper.carousel.item_aria_label");
  let e$ = eA && g > 0 && !X;
  return jsxs(Fragment, {
    children: [eA && (!eg || g <= 0 || J) ? jsx("div", {
      className: _$$s.colorBgDesign.h0.p1.bRadius3.mr8.$,
      style: X ? {
        width: `calc(100% - 24px - ${g}px - ${ev}px)`
      } : {
        width: `calc(100% - 20px - ${g}px - ${ev}px + 16px)`,
        marginLeft: J ? "0" : "-16px",
        marginRight: J ? "0" : "8px"
      }
    }) : null, (eK || eb) && Y && !Q && eL && !e$ ? jsx(et, {
      caret: eK,
      onClickCaret: e => w(e),
      recordingKey: M,
      rowTitle: eS ?? "",
      isStateGroupRow: !!eT,
      carouselItemIndexNumber: number,
      nodeId: eL,
      isSelected: eR
    }) : null, (eK || eb && !ee) && Q && eL ? jsx(ei, {
      onClickCaret: e => w(e),
      caret: eK,
      collapsedStatesDisabled: el
    }) : null, jsxs(_$$_2.Item, {
      ref: _$$Ay(es, eE),
      className: _$$s.wFull.relative.$,
      "data-testid": J ? "mini-carousel-item" : "carousel-item",
      "data-tooltip": children.length > 0 && isCollapsed ? W(eN, ey) : void 0,
      "data-tooltip-type": KindEnum.TEXT,
      drag: !F,
      dragConstraints: {
        left: -50,
        right: 50
      },
      dragControls: B,
      dragElastic: .1,
      onDrag: z,
      onDragEnd: V,
      onDragStart: G,
      style: sx.add({
        scrollMargin: "8px"
      }).$,
      transition: {
        type: "spring",
        duration: .25,
        bounce: 0
      },
      value: guid,
      children: [J && isCollapsed && children.length > 0 && jsx("div", {
        className: "x1n11dy9 xaatb59 x1qgsegg x1sxf85j x100vrsf xdk7pt x10l6tqk xqzfmfr x1iog12x x1ja2u2z x5jz2lk xbogpc4"
      }), jsx(RecordableButton, {
        "aria-label": eV,
        "aria-pressed": u,
        "aria-selected": u,
        className: _$$s.eventsAuto.bgTransparent.relative.wFull.zIndex0.opacity1.$$if(eA, _$$s.zIndex1).$$if(ew, _$$s.opacity0).$$if(J, _$$s.w48.h48.colorBgSecondary).$,
        "data-fullscreen-intercept": !0,
        onFocus: () => {
          AppStateTsApi && AppStateTsApi.singleSlideView().isCarouselFocused.set(!0);
        },
        onMouseDown: R,
        onMouseUp: O,
        recordingKey: M,
        style: J ? sx.relative.add({
          outline: "1px solid var(--color-bordertranslucent)",
          outlineColor: eM,
          borderBottomRightRadius: eH,
          borderBottomLeftRadius: eH,
          borderTopRightRadius: eH,
          borderTopLeftRadius: eH
        }).$ : sx.relative.$$if(eP, {
          backgroundColor: eB
        }).$$if(p, {
          borderTopLeftRadius: eH,
          borderTopRightRadius: eH
        }).$$if(_ || Y && eD || ("COLLAPSED" === eK || void 0 === eK) && eb && 1 === b, {
          borderBottomLeftRadius: eH,
          borderBottomRightRadius: eH
        }).$$if("buzz" === e && !J && !u && c && !eR, {
          borderTopLeftRadius: eH,
          borderTopRightRadius: eH,
          borderBottomLeftRadius: eH,
          borderBottomRightRadius: eH
        }).$,
        tabIndex: u ? 0 : -1,
        children: jsxs("div", {
          className: _$$s.inlineFlex.bgTransparent.bRadius5.wFull.justifyCenter.itemsCenter.$$if(!J, _$$s.p8).borderBox.overflowHidden.$,
          style: J ? {} : {
            paddingBottom: `${8 + 7.5 * eU}px`
          },
          children: [Z && jsx("div", {
            className: _$$s.flex.flexColumn.itemsStart.itemSelfStart.gap16.$,
            style: {
              ...sx.add({
                width: `${ev}px`,
                marginRight: `${SlideConstantsCppBindings?.singleSlideThumbnailNumberMargin() ?? 0}px`,
                marginLeft: X ? `${g}px` : "0px"
              }).$
            },
            children: jsx("span", {
              className: _$$s.alignLeft.font13.$$if(eA, _$$s.opacity0).$,
              style: {
                ...sx.add({
                  color: ez
                }).$$if(number && number > 99, {
                  marginLeft: "5px",
                  width: `${ev}px`,
                  direction: "rtl"
                }).$
              },
              children: number || "-"
            })
          }), jsxs("div", {
            className: _$$s.eventsNone.wFull.flex.relative.$,
            children: [L ? jsx("div", {
              className: _$$s.absolute.top0.left0.$,
              children: L
            }) : null, jsx("div", {
              style: sx.add({
                background: J ? "var(--color-bg-secondary)" : eG,
                borderRadius: J ? "0px" : "5px",
                aspectRatio: J ? "1 / 1" : "16 / 9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                overflow: "hidden"
              }).$$if(q && !J, {
                padding: "8px"
              }).$$if(q && J, {
                padding: "4px"
              }).$$if(eo, {
                outline: `1px solid ${eo}`
              }).$,
              children: jsx($$ed1, {
                guid,
                thumbnailBorder: q ? void 0 : eo,
                smallSquares: J,
                thumbnailType: ek
              })
            }), jsx(ec, {
              layersActive: eU,
              useDifferentColorForTemplates: q,
              backgroundColor: eu
            }), eI ? jsx("div", {
              className: f()(_$$s.absolute.colorBg.b1.bRadius2.$, _$$w),
              children: jsx("span", {
                children: jsx(s, {})
              })
            }) : null]
          }), jsx(U, {
            carouselSlide: t
          })]
        })
      }), !eK || Y || Q ? null : jsx(RecordableButton, {
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          w(e);
        },
        className: _$$s.bgTransparent.absolute.$,
        style: {
          justifySelf: "center",
          transition: "transform 0.25s",
          transform: "EXPANDED" === eK ? `rotate(0deg) translateX(${number && number > 9 ? "2px" : "0"})` : "rotate(-90deg) translateX(0)",
          top: "28px",
          left: "0"
        },
        recordingKey: generateRecordingKey(M, "caret"),
        children: jsx(_$$k, {
          style: {
            "--color-icon": ez
          }
        })
      })]
    }), eg && !J && e$ ? jsx(H, {
      width: `calc(100% - 20px - ${g}px - ${ev}px)`,
      layerCount: eU
    }) : null]
  });
});
let er = {
  rowDividerWithCaret: {
    height: "xjm9jq1",
    position: "x10l6tqk",
    top: "xfr5jun",
    background: "x1eochie",
    width: "xnlsq7q",
    marginLeft: "x400o59",
    $$css: !0
  },
  rowDividerWithoutCaret: {
    height: "xjm9jq1",
    position: "x10l6tqk",
    top: "xfr5jun",
    background: "x1eochie",
    width: "x1td3qas",
    marginLeft: "xet2fuk",
    $$css: !0
  },
  caretButton: {
    position: "x10l6tqk",
    left: "xu96u03",
    top: "x13vifvy",
    justifySelf: "x7v7x1q",
    transition: "x1ctt156",
    backgroundColor: "xjbqb8w",
    $$css: !0
  },
  caretButtonExpanded: {
    transform: "x7p49u4",
    $$css: !0
  },
  caretButtonCollapsed: {
    transform: "x9tu13d",
    $$css: !0
  }
};
function ei({
  onClickCaret: e,
  caret: t,
  collapsedStatesDisabled: n
}) {
  return jsxs("div", {
    className: _$$s.relative.h16.wFull.$,
    children: [jsx("div", {
      ...Ay.props(t ? er.rowDividerWithCaret : er.rowDividerWithoutCaret)
    }), t && !n && jsx(ButtonPrimitive, {
      onClick: t => {
        t.preventDefault();
        t.stopPropagation();
        e(t);
      },
      ...Ay.props(er.caretButton, "EXPANDED" === t ? er.caretButtonExpanded : er.caretButtonCollapsed),
      children: jsx(_$$O2, {
        style: {
          "--color-icon": "var(--color-icon-secondary)"
        }
      })
    })]
  });
}
let es = {
  buzzVideoIcon: {
    position: "x10l6tqk",
    right: "x3m8u43",
    top: "x13vifvy",
    marginTop: "x1k70j0n",
    marginRight: "xvo1kyu",
    borderRadius: "x192jxwq",
    borderWidth: "xmkeg23",
    borderStyle: "x1y0btm7",
    borderColor: "x1co876m",
    backgroundColor: "x68m4m9",
    "--color-icon": "xwa2v1s",
    $$css: !0
  },
  buzzVideoIconSmallSquares: {
    margin: "x18vase2",
    marginRight: null,
    marginTop: null,
    $$css: !0
  }
};
export var $$eo2 = (e => (e[e.NORMAL = 0] = "NORMAL", e[e.IS_SKIPPED_SLIDE = 1] = "IS_SKIPPED_SLIDE", e[e.HAS_BUZZ_BULK_CREATE_BINDING = 2] = "HAS_BUZZ_BULK_CREATE_BINDING", e))($$eo2 || {});
export function $$ed1({
  guid: e,
  thumbnailBorder: t,
  smallSquares: n,
  thumbnailType: l = 0
}) {
  let r = ic(e);
  let i = z7();
  let s = useIsSelectedViewFullscreenCooper();
  let o = Uo(e) && s && getFeatureFlags().buzz_video_export;
  return jsxs(Fragment, {
    children: [1 === l && jsx("div", {
      className: "xh8yej3 x5yr21d x78zum5 x19y5rnk xl56j7k x6s0dn4 x10l6tqk x1vjfegm x1yjdb4r x1us6l5c",
      children: jsx("div", {
        className: "x1gz8ohu",
        children: jsx(_$$j, {})
      })
    }), n && 2 === l && i && jsx("div", {
      className: "xh8yej3 x5yr21d x78zum5 x19y5rnk xl56j7k x6s0dn4 x10l6tqk x1vjfegm xjbqb8w",
      children: jsx("div", {
        className: "xu5wzci x19y5rnk x18vase2 x10l6tqk x3m8u43 x1ey2m1c",
        children: jsx(_$$r, {
          className: "xwa2v1s"
        })
      })
    }), o && jsx("div", {
      className: "xh8yej3 x5yr21d x78zum5 x19y5rnk xl56j7k x6s0dn4 x10l6tqk x1vjfegm xjbqb8w",
      "data-testid": "carousel-item-video-icon",
      children: jsx("div", {
        ...Ay.props(es.buzzVideoIcon, n && es.buzzVideoIconSmallSquares),
        children: jsx(_$$_, {})
      })
    }), jsx(oW, {
      src: r,
      id: "carousel-item-thumbnail-image",
      alt: "",
      className: "xh8yej3 xt7dq6l",
      style: sx.add({
        aspectRatio: n ? "1 / 1" : "16 / 9",
        objectFit: "contain"
      }).$$if(t, {
        outline: `1px solid ${t}`
      }).$
    })]
  });
}
function ec({
  layersActive: e,
  useDifferentColorForTemplates: t,
  backgroundColor: n
}) {
  let l = [`translate(0, ${t ? 15 : 7}px) scale(0.91, 0.83)`, `translate(0, ${t ? 22 : 15}px) scale(0.84, 0.79)`];
  let r = 1 === e ? ["var(--elevation-100-canvas)"] : ["var(--elevation-200-canvas)", "var(--elevation-100-canvas)"];
  let i = [`linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.12) 89%, rgba(0,0,0,0) 98%) ${n}`, n];
  return jsx(Fragment, {
    children: [2, 1].map(t => jsx("div", {
      className: _$$s.bRadius3.eventsNone.absolute.zIndexMinus1.elevation100.borderBox.top0.wFull.$,
      style: sx.add({
        transitionProperty: "transform, opacity",
        transitionDuration: "0.1s, 0.001s",
        transitionDelay: "0s, 0.2s",
        aspectRatio: "16 / 9",
        transform: "translate(0, 0) scale(0)",
        transformOrigin: "center bottom",
        opacity: 0
      }).$$if(e >= t, {
        transform: l[t - 1],
        opacity: 1,
        transitionDelay: "0s, 0s",
        boxShadow: r[t - 1],
        background: i[t - 1]
      }).$
    }, "outlineui" + t))
  });
}
export const A7 = $$el0;
export const eI = $$ed1;
export const GC = $$eo2;