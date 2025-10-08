import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useMemo, Children, useEffect, useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SupportedLocales } from "../905/631683";
import { clamp } from "../figma_app/492908";
import { AppStateTsApi, DesignWorkspace, ViewType, Fullscreen, SelfDesignType, DesignGraphElements, Command } from "../figma_app/763686";
import { n3, VariableStyleId } from "../905/859698";
import { sessionLocalIDToString, isValidSessionLocalID } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { G as _$$G } from "../figma_app/318030";
import m from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { KeyCodes } from "../905/63728";
import { k as _$$k2 } from "../905/582200";
import { V as _$$V } from "../905/506207";
import { getI18nState } from "../figma_app/363242";
import { isFullscreenDesignModeNotFocused } from "../figma_app/327588";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { e as _$$e } from "../1528/93111";
import { hasCmsCollection } from "../figma_app/618433";
import { sw, Zs } from "../figma_app/914957";
import { hideVariablePicker } from "../905/330741";
import { Dm } from "../figma_app/8833";
import { getPropertiesPanelSplitPosition, EditorPreferencesApi } from "../figma_app/740163";
import { q as _$$q, T as _$$T } from "../figma_app/590592";
import { normalizeValue, valueOrFallback } from "../905/216495";
import { b as _$$b } from "../figma_app/755529";
import { useAppModelProperty, useCurrentTool, useSceneGraphSelection, useSceneGraphSelector, useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { selectCurrentFile, useCurrentFileKey } from "../figma_app/516028";
import { useLabConfiguration, labConfigurations } from "../905/226610";
import R, { isLoading } from "../905/18797";
import { getObservableValue } from "../figma_app/84367";
import { t as _$$t } from "../figma_app/501766";
import { yU } from "../figma_app/221114";
import { A5 } from "../figma_app/274104";
import { KeyboardReceiver } from "../905/826900";
import { At } from "../figma_app/74043";
import { M as _$$M } from "../figma_app/119924";
import { zK, zM, lk } from "../905/182453";
import { RecordingScrollContainer } from "../905/347284";
import { B7 } from "../figma_app/144692";
import { iP } from "../figma_app/803054";
import { StyleType } from "../figma_app/276332";
import { useHandleFocusEvent, generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { Point } from "../905/736624";
import { getI18nString, renderI18nText } from "../905/303541";
import { compareLibraryItemWithKey } from "../905/709171";
import { getPropertiesPanelTab, setPropertiesPanelTab } from "../figma_app/741237";
import { getShownNonLocalStyle, getAssetUniqueId } from "../figma_app/646357";
import { useCachedSubtree } from "../figma_app/679183";
import { Button } from "../905/521428";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { getSingletonSceneGraph } from "../905/700578";
import { AutoLayout } from "../figma_app/947482";
import { ButtonBasePrimary } from "../figma_app/637027";
import { hidePickerThunk, hideStylePicker } from "../figma_app/91703";
import { u as _$$u } from "../9410/354452";
import { O8 } from "../figma_app/393980";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { useEffectiveThemeId } from "../figma_app/226737";
import { Rc } from "../figma_app/634146";
import { tA, rp } from "../figma_app/229710";
import { DraggableModalManager } from "../905/748636";
import { FY, lf, Lp, Ph, ux, KE, eu as _$$eu, eh as _$$eh, By, w1, gq, jG, Mf, yR, iV, A7, tq, wR, qq, R as _$$R, dn, Fo, Ar, K8, ew as _$$ew, Jq, IV } from "../figma_app/386160";
import { sanitizeAndExtractText } from "../905/973142";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { Link } from "../905/438674";
import { useLibraryFileLink } from "../905/217163";
import { Zk, fI } from "../figma_app/626177";
import { logError } from "../905/714362";
import { S as _$$S } from "../figma_app/552746";
import { hideInstanceSwapPicker } from "../905/8732";
import { shouldHandleMultiTouchOrPressure } from "../figma_app/753501";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { isUserNotLoggedInAndEditorSupported } from "../figma_app/564183";
import { fullscreenValue } from "../figma_app/455680";
import { useDropdownState } from "../905/848862";
import { Xo } from "../figma_app/482495";
import { se } from "../642/171234";
import { j as _$$j } from "../642/638075";
import { useIsFullscreenSitesView } from "../905/561485";
import { G$ } from "../figma_app/159296";
import { GY, _w } from "../642/435480";
import { Tabs } from "../905/150656";
import { trackEventAnalytics } from "../905/449184";
import { WN } from "../figma_app/638601";
import { U as _$$U } from "../905/492359";
import { D as _$$D } from "../642/26273";
import { D9 } from "../figma_app/433401";
import { H as _$$H } from "../figma_app/378458";
import { getFilteredFeatureFlags } from "../905/717445";
import { FEditorType } from "../figma_app/53721";
import { lY } from "../figma_app/779965";
import { v2 } from "../1528/88743";
import { bo } from "../figma_app/447445";
import { uj0 } from "../figma_app/27776";
var g = m;
function ef({
  initialPosition: e,
  styleNameInputPrefix: t,
  styleType: s,
  inheritStyleKeyField: l,
  onCreate: a,
  recordingKey: d
}) {
  let c = useDispatch();
  let p = useSelector(e => e.mirror.selectedStyleProperties);
  let h = useSelector(e => e.mirror.sceneGraphSelection);
  let m = 1 === Object.keys(h).length ? Object.keys(h)[0] : null;
  let g = m ? getSingletonSceneGraph().get(m)?.type === "CMS_RICH_TEXT" : null;
  let f = useRef(!g && Object.keys(h).length > 0);
  let [x, y] = useState(!f.current && void 0);
  let _ = useIsFullscreenSlidesView();
  let [b, C] = useState(useEffectiveThemeId());
  let j = _ && Rc(s);
  let {
    styleRef,
    createStyle
  } = _$$u({
    inheritStyleKeyField: l,
    isCreatingFromSelection: f.current,
    trackingOptions: {
      styleType: s
    },
    shouldUseEyedropperStyleCreationFlow: !1
  });
  let w = useHandleFocusEvent(d, "submit", () => {
    let e = createStyle();
    j && AppStateTsApi.slideThemeLibBindings().addStyleToLocalTheme(e || "", b);
    c(hidePickerThunk());
    g || c(hideStylePicker());
    c(sw());
    a && a(e || "");
  });
  let T = useSelector(e => {
    let t = e.mirror.selectedStyleProperties;
    switch (s) {
      case "FILL":
        return t.fillPaints && "length" in t.fillPaints && t.fillPaints.length > 0;
      case "GRID":
        return t.layoutGrids && t.layoutGrids.length > 0;
      case "EFFECT":
        return t.effects && t.effects.length > 0;
      default:
        return !0;
    }
  });
  let N = e => {
    switch (e) {
      case "FILL":
        return getI18nString("design_systems.create_style.color");
      case "TEXT":
        return getI18nString("design_systems.create_style.text");
      case "EFFECT":
        return getI18nString("design_systems.create_style.effect");
      case "EXPORT":
        return getI18nString("design_systems.create_style.export");
      case "GRID":
        return getI18nString("design_systems.create_style.guide");
      default:
        return getI18nString("design_systems.create_style.create_new_style_generic");
    }
  };
  if (!p.styleType) return null;
  let I = jsxs("div", {
    className: FY,
    children: [jsx(O8, {
      isInspectPanel: !1,
      onEnterPressed: w,
      recordingKey: "createStyleModal",
      selectedStyleProperties: p,
      setSlideThemeId: C,
      showProperties: x,
      showSlideThemeField: j,
      slideThemeId: b,
      styleNameInputPrefix: t,
      type: p.styleType
    }), !styleRef && jsx("div", {
      className: "create_style_modal--errorMessage--8ZpFE",
      children: renderI18nText("design_systems.create_style.an_error_occurred_while_creating_the_style")
    }), jsxs(AutoLayout, {
      horizontalAlignItems: f.current ? void 0 : "end",
      verticalAlignItems: "center",
      spacing: f.current ? "auto" : void 0,
      padding: 8,
      children: [f.current && jsx(Button, {
        variant: "link",
        onClick: () => y(!x),
        recordingKey: generateRecordingKey("createStyleModal", "moreOptions"),
        children: x ? renderI18nText("design_systems.create_style.hide_options") : renderI18nText("design_systems.create_style.show_more_options")
      }), getFeatureFlags().ce_tv_fpl_create_style_modal ? jsx(Button, {
        onClick: w,
        disabled: !T || !styleRef,
        children: renderI18nText("design_systems.create_style.create_style")
      }) : jsx(ButtonBasePrimary, {
        style: {
          justifySelf: "right"
        },
        onClick: w,
        disabled: !T || !styleRef,
        tabIndex: 0,
        children: renderI18nText("design_systems.create_style.create_style")
      })]
    })]
  });
  return getFeatureFlags().ce_tv_fpl_create_style_modal ? jsx(zK.Provider, {
    value: zM.CREATE_STYLE,
    children: jsx(bL, {
      onClose: () => {
        c(sw());
      },
      width: tA,
      defaultPosition: e,
      draggable: "header",
      recordingKey: generateRecordingKey("createStyleModal"),
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: N(p.styleType)
          })
        }), jsx(DialogBody, {
          padding: 0,
          children: I
        })]
      })
    })
  }) : jsx(zK.Provider, {
    value: zM.CREATE_STYLE,
    children: jsx(DraggableModalManager, {
      title: N(p.styleType),
      headerSize: "small",
      initialWidth: tA,
      initialPosition: e,
      onClose: () => {
        c(sw());
      },
      recordingKey: generateRecordingKey("createStyleModal"),
      dragHeaderOnly: !0,
      children: I
    })
  });
}
function e_({
  canEdit: e,
  isInspectPanel: t,
  isRenaming: s,
  recordingKey: n,
  stylePreviewShown: l
}) {
  let a = useDispatch();
  let o = useSelector(e => e.mirror.selectedStyleProperties);
  let d = getShownNonLocalStyle(l);
  let u = sessionLocalIDToString(o.guid);
  let p = useAppModelProperty("isReadOnly");
  let h = !!d || !e || p;
  let m = "";
  let g = "";
  let [f, x] = useDeepEqualSceneValue((e, t) => {
    if (d) return ["", ""];
    let s = e.get(t);
    return [s?.name || "", s?.description || ""];
  }, u);
  d ? (m = d.name || "", g = d.description_rt ? sanitizeAndExtractText(d.description_rt) : d.description || "") : sessionLocalIDToString(o.guid) && (m = f, g = sanitizeAndExtractText(x));
  return jsx(zK.Provider, {
    value: zM.EDIT_STYLE,
    children: jsx(O8, {
      recordingKey: n,
      isInspectPanel: t,
      isRenaming: s,
      onEnterPressed: () => a(sw()),
      selectedStyleProperties: o,
      styleDescription: g,
      styleName: m,
      type: o.styleType,
      viewOnly: h
    })
  });
}
function ev({
  stylePreviewShown: e
}) {
  let t = getShownNonLocalStyle(e);
  let s = useLibraryFileLink({
    libraryKey: t?.library_key,
    nodeId: t?.node_id
  });
  let i = useMemo(() => s.data?.type === "team", [s.data]);
  let l = useMemo(() => s.data?.type === "team" ? s.data.link : null, [s.data]);
  return l && i ? jsx(_$$k2, {
    name: "external_style_options",
    children: jsx(Zk, {
      children: jsx(fI, {
        children: jsx("div", {
          className: lf,
          children: jsx(Link, {
            newTab: !0,
            href: l,
            trusted: !0,
            children: renderI18nText("fullscreen.properties_panel.go_to_style_definition_to_edit")
          })
        })
      })
    }, "external-style-options")
  }) : null;
}
function eS({
  onCloseStylePreviewModal: e,
  recordingKey: t
}) {
  let s = selectCurrentFile();
  let n = getObservableValue(getPropertiesPanelTab(), DesignWorkspace.DESIGN);
  let l = useAppModelProperty("topLevelMode");
  let a = useSelector(e => e.library);
  let d = useSelector(e => e.stylePreviewShown);
  let u = _$$b("guid");
  let p = _$$b("styleType");
  if (!d.isShown || ![DesignWorkspace.DESIGN, DesignWorkspace.SITE, DesignWorkspace.INSPECT, DesignWorkspace.ILLUSTRATION].includes(n)) return null;
  let h = new Point(d.rowLeft - tA, d.rowTop);
  if (d.isCreating) {
    let {
      styleType,
      inheritStyleKeyField,
      styleNameInputPrefix
    } = d;
    return jsx(ef, {
      recordingKey: "createStyleModal",
      initialPosition: h,
      styleNameInputPrefix,
      styleType,
      inheritStyleKeyField
    });
  }
  let m = normalizeValue(u);
  let g = valueOrFallback(p, StyleType.NONE);
  if (null === m) return null;
  let f = !compareLibraryItemWithKey(d.style, s);
  let x = sessionLocalIDToString(m);
  if (!(a.local.styles[x] && !a.local.styles[x]?.is_soft_deleted) && !f) return null;
  let y = s?.canEdit ?? !1;
  let _ = f || !y || l === ViewType.BRANCHING;
  return jsx(zK.Provider, {
    value: zM.EDIT_STYLE,
    children: jsx(DraggableModalManager, {
      title: function (e, t) {
        if (t) switch (e) {
          case "FILL":
            return getI18nString("design_systems.styles.view_color_style");
          case "TEXT":
            return getI18nString("design_systems.styles.view_text_style");
          case "EFFECT":
            return getI18nString("design_systems.styles.view_effect_style");
          case "GRID":
            return getI18nString("design_systems.styles.view_guide_style");
          default:
            return getI18nString("design_systems.styles.view_style");
        }
        switch (e) {
          case "FILL":
            return getI18nString("design_systems.styles.edit_color_style");
          case "TEXT":
            return getI18nString("design_systems.styles.edit_text_style");
          case "EFFECT":
            return getI18nString("design_systems.styles.edit_effect_style");
          case "GRID":
            return getI18nString("design_systems.styles.edit_guide_style");
          default:
            return getI18nString("design_systems.styles.edit_style");
        }
      }(g, _),
      headerSize: "small",
      initialWidth: tA,
      initialPosition: h,
      onClose: e,
      recordingKey: generateRecordingKey(t, "modal"),
      dragHeaderOnly: !0,
      children: jsxs("div", {
        className: FY,
        children: [jsx(useCachedSubtree, {
          isVisible: !0,
          children: () => jsx(e_, {
            recordingKey: generateRecordingKey(t, "stylePreviewPanel"),
            canEdit: y,
            isInspectPanel: n === DesignWorkspace.INSPECT,
            isRenaming: a.isRenamingSelectedStyle,
            stylePreviewShown: d
          }, "style-preview-panel")
        }), jsx(useCachedSubtree, {
          isVisible: f,
          children: () => jsx(ev, {
            stylePreviewShown: d
          })
        })]
      })
    }, getAssetUniqueId(d.style))
  });
}
function ek({
  onCloseStylePreviewModal: e,
  onKeyDown: t,
  recordingKey: s,
  shouldAnimate: n
}) {
  return jsx(KeyboardReceiver, {
    name: "propertiesPanel",
    focusOnMount: !0,
    handleKeyDown: t,
    children: jsxs(_$$V, {
      className: g()(Lp, Ph),
      children: [jsx(RecordingScrollContainer, {
        hideScrollbar: !0,
        scrollingDisabled: !0,
        className: g()(ux, KE, Dm, Ph, {
          [_$$eu]: n
        }),
        width: iP,
        children: jsx("div", {
          className: _$$eh,
          "data-non-interactive": !0,
          children: jsx(B7, {})
        })
      }), jsx(eS, {
        onCloseStylePreviewModal: e,
        recordingKey: s
      })]
    })
  });
}
function eK({
  activeTab: e,
  children: t,
  isStyleEditMode: s,
  recordingKey: l,
  refMainScrollContainer: a
}) {
  var d;
  let c = useDispatch();
  let u = useAppModelProperty("isReadOnly");
  let h = useAppModelProperty("topLevelMode");
  let m = useDropdownState();
  let f = Xo();
  let [x, y] = useAtomValueAndSetter(_$$j);
  let _ = useIsFullscreenSitesView();
  let b = !!(m || f?.modal);
  let C = useHandleMouseEvent(l, "mousedown", () => {
    fullscreenValue.deselectProperty();
    c(hidePickerThunk());
    c(hideInstanceSwapPicker());
    c(sw());
    c(hideStylePicker());
    _ && (y([]), Fullscreen?.setSelectedInteractions([]));
  });
  let j = se();
  let v = isDevHandoffEditorType();
  let S = e === DesignWorkspace.COMMENT;
  let w = useIsFullscreenSlidesView();
  let T = !s || !b;
  let N = !S && T;
  let I = shouldHandleMultiTouchOrPressure();
  let E = G$();
  d = {
    tab: DesignWorkspace[e],
    topLevelMode: ViewType[h],
    shouldRenderInspectTab: E
  };
  0 === Children.toArray(t).length && logError("PropertiesPanel", "Rendering empty properties panel", d);
  let M = isUserNotLoggedInAndEditorSupported();
  let P = S && !(u && !v) && !w;
  let L = jsx(_$$S.div, {
    className: g()({
      [By]: P,
      [_$$eh]: !P,
      [w1]: M
    }),
    onMouseDown: I ? void 0 : C,
    onPointerDown: I ? C : void 0,
    "data-non-interactive": !0,
    children: t
  });
  return S ? L : jsx("div", {
    className: gq,
    onFocus: j,
    children: jsx(RecordingScrollContainer, {
      enableOverscroll: !0,
      ref: a,
      className: jG,
      containerId: rp,
      hideScrollbar: !N,
      onContextMenu: GY,
      scrollingDisabled: S || (s ? b : !!m),
      children: L
    }, e)
  });
}
eK.displayName = "PropertiesPanel";
function eq(e, t) {
  return {
    [DesignWorkspace.DESIGN]: {
      label: getI18nString("fullscreen.properties_panel.design"),
      tab: DesignWorkspace.DESIGN,
      className: Mf,
      recordingKey: "designTab",
      analyticsName: "design"
    },
    [DesignWorkspace.PROTOTYPE]: {
      label: t ? getI18nString("fullscreen.properties_panel.interactive") : getI18nString("fullscreen.properties_panel.prototype"),
      tab: DesignWorkspace.PROTOTYPE,
      className: Mf,
      recordingKey: t ? "interactionsTab" : "prototypeTab",
      analyticsName: t ? "interactions" : "prototype"
    },
    [DesignWorkspace.INSPECT]: {
      label: getI18nString("fullscreen.properties_panel.properties"),
      tab: DesignWorkspace.INSPECT,
      className: Mf,
      recordingKey: "inspectTab",
      analyticsName: "inspect"
    },
    [DesignWorkspace.COMMENT]: {
      label: getI18nString("fullscreen.properties_panel.comments"),
      tab: DesignWorkspace.COMMENT,
      className: Mf,
      recordingKey: "commentTab",
      analyticsName: "comment"
    },
    [DesignWorkspace.EXPORT]: {
      label: getI18nString("fullscreen.properties_panel.export"),
      tab: DesignWorkspace.EXPORT,
      className: Mf,
      recordingKey: "exportTab",
      analyticsName: "export"
    },
    [DesignWorkspace.SLIDE]: {
      label: getI18nString("fullscreen.properties_panel.design"),
      tab: DesignWorkspace.SLIDE,
      className: Mf,
      recordingKey: "designTab",
      analyticsName: "design"
    },
    [DesignWorkspace.SLIDE_ANIMATION]: {
      label: getI18nString("slides.properties_panel.animate"),
      tab: DesignWorkspace.SLIDE_ANIMATION,
      className: Mf,
      recordingKey: "animateTab",
      analyticsName: "animate"
    },
    [DesignWorkspace.SITE]: {
      label: getI18nString("fullscreen.properties_panel.design"),
      tab: DesignWorkspace.SITE,
      className: Mf,
      recordingKey: "sitesTab",
      analyticsName: "sites"
    },
    [DesignWorkspace.DAKOTA]: {
      label: getI18nString("dakota.properties_panel.dakota_panel.tab_title"),
      tab: DesignWorkspace.DAKOTA,
      className: Mf,
      recordingKey: "dakotaTab",
      analyticsName: "dakota"
    },
    [DesignWorkspace.ILLUSTRATION]: {
      label: getI18nString("fullscreen.properties_panel.draw"),
      tab: DesignWorkspace.ILLUSTRATION,
      className: Mf,
      recordingKey: "illustrationTab",
      analyticsName: "illustration"
    },
    [DesignWorkspace.COOPER]: {
      label: getI18nString("fullscreen.properties_panel.design"),
      tab: DesignWorkspace.COOPER,
      className: Mf,
      recordingKey: "designTab",
      analyticsName: "design"
    }
  }[e];
}
function eJ({
  activeTab: e,
  recordingKey: t
}) {
  let s = _$$e();
  let l = G$();
  let a = useSelector(e => e.mirror.appModel.topLevelMode);
  let d = useCurrentTool();
  let c = useAppModelProperty("isReadOnly");
  let u = isDevHandoffEditorType();
  let p = c && !u;
  let h = useIsFullscreenSlidesView();
  let m = useIsFullscreenSitesView();
  let g = useIsSelectedViewFullscreenCooper();
  let f = _$$U();
  let x = useSelector(e => {
    var t;
    t = e.selectedView;
    return !!getFilteredFeatureFlags().ce_il_root && "fullscreen" === t.view && t.editorType === FEditorType.Illustration;
  });
  let y = useSceneGraphSelection();
  let _ = useMemo(() => Object.keys(y), [y]);
  let b = useSceneGraphSelector();
  let [C, S] = useState(!1);
  let k = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF) === SelfDesignType.DESIGN;
  useEffect(() => {
    if (f) {
      if (_$$D(b, _)?.fieldSchemaStableId) {
        S(!0);
        return;
      }
      e === DesignWorkspace.DAKOTA && setPropertiesPanelTab(DesignWorkspace.SITE);
      S(!1);
    }
  }, [f, _, b, e]);
  let w = (() => {
    let t = h || m ? [DesignWorkspace.COMMENT] : [DesignWorkspace.COMMENT, DesignWorkspace.INSPECT];
    switch (a) {
      case ViewType.LAYOUT:
        if (p) return t;
        if (e === DesignWorkspace.COMMENT) return [DesignWorkspace.COMMENT];
        if (x) return [DesignWorkspace.ILLUSTRATION];
        if (m) {
          if (s) return [DesignWorkspace.DAKOTA];
          return C ? [DesignWorkspace.SITE, DesignWorkspace.PROTOTYPE, DesignWorkspace.DAKOTA] : [DesignWorkspace.SITE, DesignWorkspace.PROTOTYPE];
        }
        if (h) return [DesignWorkspace.SLIDE, DesignWorkspace.SLIDE_ANIMATION];
        if (g) return [DesignWorkspace.DESIGN];
        return l ? [DesignWorkspace.DESIGN, DesignWorkspace.PROTOTYPE, DesignWorkspace.INSPECT] : [DesignWorkspace.DESIGN, DesignWorkspace.PROTOTYPE];
      case ViewType.PREVIEW:
      case ViewType.DEV_HANDOFF:
        return t;
      case ViewType.BRANCHING:
        return [DesignWorkspace.INSPECT];
      default:
        return [DesignWorkspace.DESIGN, DesignWorkspace.PROTOTYPE, DesignWorkspace.INSPECT];
    }
  })();
  let T = w.find(t => t === e);
  let N = w.map((t, s) => {
    let r = eq(t, m);
    let n = r.tab === e || 0 === s && void 0 === T;
    let i = r.className;
    n && (i = w.length > 1 ? yR : iV);
    return {
      ...r,
      className: i,
      active: n,
      topLevelMode: a,
      currentTool: d
    };
  });
  return w.length && (!g || k) ? jsx(eZ, {
    recordingKey: t,
    tabInfo: N
  }) : null;
}
function eZ({
  tabInfo: e,
  recordingKey: t
}) {
  let s = isUserNotLoggedInAndEditorSupported();
  let n = WN();
  let l = e.reduce((e, t) => (e[t.tab] = !0, e), {});
  let a = e.find(e => e.active);
  let [d,, c] = Tabs.useManagedTabs(l, a?.tab.toString() ?? "", e => {
    let t = parseInt(e);
    let r = eq(t, u).analyticsName;
    if (trackEventAnalytics("properties-panel-select-tab", {
      tab: r
    }), p === DesignGraphElements.SCALE && t === DesignWorkspace.PROTOTYPE && fullscreenValue.triggerAction("set-tool-default"), t === DesignWorkspace.INSPECT && s) {
      n(Command.ENTER_INSPECT_MODE);
      return;
    }
    setPropertiesPanelTab(t);
    h === ViewType.PREVIEW && (t === DesignWorkspace.COMMENT ? fullscreenValue.triggerAction("set-tool-comments") : fullscreenValue.triggerAction("set-tool-default"));
  }, {
    recordingKey: generateRecordingKey(t, "tabs")
  });
  let u = useIsFullscreenSitesView();
  let p = useCurrentTool();
  let h = useSelector(e => e.mirror.appModel.topLevelMode);
  return jsxs("div", {
    className: A7,
    children: [jsx("div", {
      className: tq,
      children: jsx(Tabs.TabStrip, {
        manager: c,
        children: e.map((e, t) => jsx(Tabs.Tab, {
          ...d[e.tab],
          children: e.label
        }, `props-panel-tab-${t}`))
      })
    }), jsx("div", {
      className: wR,
      children: jsx(_$$H, {
        recordingKey: generateRecordingKey(t, "zoomMenu")
      })
    }), jsx("div", {
      "data-onboarding-key": D9,
      className: qq
    })]
  });
}
export function $$e20({
  activeTab: e,
  children: t,
  getPanelMode: s,
  recordingKey: l,
  refMainScrollContainer: a,
  trackingAlwaysEnabled: p = !1,
  shouldDeferCanvasUpdateOnPanelResize: h
}) {
  let m = useDispatch();
  let g = useIsProgressBarHiddenOrLocked();
  let f = _$$b("guid");
  let _ = isValidSessionLocalID(normalizeValue(f));
  let b = useCallback(e => {
    _ && (e.event.keyCode === KeyCodes.ESCAPE ? (e.accept(), Fullscreen?.selectStyle(n3.INVALID, VariableStyleId.INVALID)) : e.event.keyCode === KeyCodes.F && Fullscreen?.selectStyle(n3.INVALID, VariableStyleId.INVALID));
  }, [_]);
  let C = useSelector(e => e.loadingState);
  let j = isLoading(C, "edit_button_upgrading_to_edit");
  let v = g || j;
  let S = useCallback(() => {
    Fullscreen?.selectStyle(n3.INVALID, VariableStyleId.INVALID);
    m(sw());
    m(hideVariablePicker());
  }, [m]);
  let T = e === DesignWorkspace.COMMENT;
  let N = useCallback(() => void 0, []);
  let I = function (e) {
    let t = useAppModelProperty("currentPage") || "0:1";
    let s = useSceneGraphSelection();
    let r = e();
    return useCallback(() => ({
      pageId: t,
      selectedNodeIds: Object.keys(s),
      panelMode: r
    }), [t, s, r]);
  }(s ?? N);
  let P = useCallback(({
    styleType: e,
    inheritStyleKeyField: t,
    nodeId: s,
    rowLeft: r,
    rowTop: n
  }) => {
    m(sw());
    m(Zs({
      rowLeft: r,
      rowTop: n,
      styleType: e,
      inheritStyleKeyField: t,
      nodeId: s
    }));
  }, [m]);
  return v ? jsx(ek, {
    onKeyDown: b,
    onCloseStylePreviewModal: S,
    shouldAnimate: g
  }) : jsx(_$$k2, {
    name: "properties_panel",
    trackingEnabled: getFeatureFlags().trackable_properties || p,
    alsoTrack: I,
    trackImpressions: !1,
    children: jsx(KeyboardReceiver, {
      name: "propertiesPanel",
      focusOnMount: !T,
      handleKeyDown: b,
      children: jsx(lk.Provider, {
        value: P,
        children: jsx(e4, {
          activeTab: e,
          recordingKey: l,
          refMainScrollContainer: a,
          onCloseStylePreviewModal: S,
          shouldDeferCanvasUpdateOnPanelResize: h,
          children: t
        })
      })
    })
  });
}
function e4({
  activeTab: e,
  children: t,
  recordingKey: s,
  refMainScrollContainer: i,
  onCloseStylePreviewModal: l,
  shouldDeferCanvasUpdateOnPanelResize: a
}) {
  let d = _$$e();
  let m = _$$b("guid");
  let f = isValidSessionLocalID(normalizeValue(m));
  let x = e === DesignWorkspace.COMMENT;
  let y = useAppModelProperty("topLevelMode") === ViewType.HISTORY;
  let b = function () {
    let e = getPropertiesPanelSplitPosition();
    return "number" != typeof e || e < e9 ? (EditorPreferencesApi().propertiesPanelSplitPosition.set(e9), e9) : e;
  }();
  let k = getObservableValue(AppStateTsApi?.uiState().inProductHelpSidePanelWidth, 0);
  let {
    inProductHelpViewType
  } = A5();
  let {
    isRightPanelCollapsed
  } = useContext(_$$t);
  let K = R;
  let V = _$$q();
  let U = useIsSelectedViewFullscreenCooper();
  let z = isFullscreenDesignModeNotFocused();
  U && x && (K = !1);
  let W = useAppModelProperty("showUi");
  let $ = useCurrentFileKey();
  let Y = hasCmsCollection($);
  let X = useLabConfiguration(labConfigurations.newResizablePanel);
  let q = getObservableValue(EditorPreferencesApi().renderRulers, !1);
  let J = _$$T();
  let Z = getFeatureFlags().properties_panel_resize_lag_fix;
  let Q = Xr(At);
  let {
    setRulerVisibilityOnInitialSizeChange,
    setRulerVisibilityOnDragEnd,
    shouldShowGhostRulers
  } = _$$M({
    shouldDeferCanvasUpdateOnPanelResize: !!a
  });
  let er = jsxs(_w, {
    showRightSidebarPill: K,
    children: [jsx(v2, {
      recordingKey: s
    }), y && jsx(yU, {
      recordingKey: "versionHistoryView",
      fileHasCMSData: Y
    }), !K && !y && jsxs(Fragment, {
      children: [jsx(eJ, {
        recordingKey: s,
        activeTab: e
      }), jsx(eK, {
        recordingKey: s,
        activeTab: e,
        isStyleEditMode: f,
        refMainScrollContainer: i,
        children: t
      })]
    }), jsx(eS, {
      onCloseStylePreviewModal: l,
      recordingKey: s
    })]
  });
  return X ? jsx(_$$V, {
    children: jsx(_$$G, {
      className: g()(Lp, {
        [_$$R]: !W,
        [dn]: K,
        [Ph]: !V && !d || z,
        [Fo]: "side_panel" === inProductHelpViewType,
        [Ar]: getFeatureFlags().properties_panel_isolate,
        [K8]: shouldShowGhostRulers
      }),
      "data-cancel-insertable-resource-drag-and-drop": !0,
      "data-onboarding-key": "properties-panel",
      "data-testid": "properties-panel",
      defaultSize: b,
      maxSize: e7,
      minSize: e9,
      onContextMenu: GY,
      onDragEnd: e => {
        a && (te(e), setRulerVisibilityOnDragEnd());
        Q(!1);
      },
      onInitialSizeChange: () => {
        a && (te(e9), setRulerVisibilityOnInitialSizeChange());
        Q(!0);
      },
      onSizeChange__SLOW: a ? void 0 : te,
      recordingKey: "propertiesPanelContainer.resizablePanel",
      shouldDeferCanvasUpdateOnPanelResize: a,
      side: "left",
      style: {
        "--inProductHelpSidePanelWidth": `${k}px`
      },
      children: jsx(bo, {
        children: jsx("div", {
          className: g()(ux, Dm, {
            [_$$ew]: q,
            [Ph]: !V && !d || z,
            [Jq]: !J
          }),
          children: er
        })
      })
    })
  }) : jsx(_$$V, {
    className: g()(Lp, {
      [IV]: Z,
      [_$$R]: !W,
      [dn]: K,
      [Ph]: !V && !d || z,
      [Fo]: "side_panel" === inProductHelpViewType,
      [Ar]: getFeatureFlags().properties_panel_isolate
    }),
    style: {
      width: Z ? void 0 : b,
      "--inProductHelpSidePanelWidth": `${k}px`
    },
    children: jsx(bo, {
      children: jsx(e6, {
        isCollapsed: isRightPanelCollapsed,
        isUIMinimized: V,
        width: b,
        children: er
      })
    })
  });
}
let e5 = e => {
  te(e);
};
function e6({
  children: e,
  isUIMinimized: t,
  width: s
}) {
  let n = _$$e();
  let i = isFullscreenDesignModeNotFocused();
  let l = getObservableValue(EditorPreferencesApi().renderRulers, !1);
  let a = _$$T();
  return jsx(lY, {
    className: g()(ux, Dm, {
      [_$$ew]: l,
      [Ph]: !t && !n || i,
      [Jq]: !a
    }),
    "data-cancel-insertable-resource-drag-and-drop": !0,
    "data-onboarding-key": "properties-panel",
    "data-testid": "properties-panel",
    onContextMenu: GY,
    onResize: e5,
    recordingKey: "propertiesPanelContainer.resizablePanel",
    side: "left",
    size: s,
    children: e
  });
}
let e8 = {
  aaa: 1,
  aal: 1.3,
  en: 1,
  "es-es": 1,
  "es-la": 1,
  "ko-kr": 1,
  ja: 1,
  "pt-br": 1
};
let e7 = 500;
let e9 = function (e) {
  let t = parsePxNumber(e) + 1;
  if (!getFeatureFlags().ui3p_locale_aware_properties_panel) return t;
  let s = getI18nState().getPrimaryLocale(!0);
  for (let e of SupportedLocales) if (s === e) return Math.min(Math.ceil(t * e8[e]), e7);
  return t;
}(uj0);
function te(e) {
  let t = clamp(e, e9, e7);
  EditorPreferencesApi().propertiesPanelSplitPosition.set(t);
  getFeatureFlags().properties_panel_resize_lag_fix && document.documentElement.style.setProperty("--properties-panel-width", `${t}px`);
}
export const j = $$e20;
