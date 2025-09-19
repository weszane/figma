import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { useCurrentOrgAdminInfo } from "../figma_app/740025";
import { b as _$$b } from "../figma_app/203891";
import { sX, GR, F$, gc, B8, w5, tC as _$$tC } from "../figma_app/229710";
import { isEmptyObject } from "../figma_app/493477";
import { GridLayoutApi, SceneGraphHelpers, Axis, LayoutSizingType, SocialMediaFormats, ItemType, LayoutTabType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { logError } from "../905/714362";
import { getFalseValue, isInteractionPathCheck, isEvalViewPathCheck } from "../figma_app/897289";
import { selectCurrentUser } from "../905/372672";
import { VF } from "../figma_app/679183";
import { nl as _$$nl } from "../figma_app/359943";
import { useState, useEffect, useMemo, memo, useCallback } from "react";
import { IconButton } from "../905/443068";
import { bL } from "../905/246123";
import { fI } from "../905/201252";
import { fh } from "../905/127493";
import { HiddenLabel } from "../905/270045";
import { bL as _$$bL, l9, mc, c$ } from "../905/493196";
import { T as _$$T } from "../905/68180";
import { K as _$$K2 } from "../905/621139";
import { bL as _$$bL2, D0 } from "../905/4410";
import { A as _$$A } from "../905/251970";
import { e as _$$e } from "../905/149844";
import { O as _$$O } from "../905/487602";
import { permissionScopeHandler } from "../905/189185";
import { Ay } from "@stylexjs/stylex";
import v from "classnames";
import { getI18nString, renderI18nText } from "../905/303541";
import { A5, fC, kl, pw, DQ } from "../905/275640";
import { useDeepEqualSceneValue, useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { Y as _$$Y } from "../a88a4c5a/211633";
import { pq } from "../8826/642528";
import { q as _$$q } from "../8826/33573";
import { SQ, tV, M0, Br, U4, So, Ws, SJ, d6, GG, ww, P1, iP, NR, Dj } from "../figma_app/803054";
import { useSelector, useDispatch } from "react-redux";
import { isCooperFeatureEnabled } from "../figma_app/828186";
import { k as _$$k2 } from "../905/582200";
import { k as _$$k3 } from "../8618/427799";
import { Cl } from "../figma_app/334505";
import { isInvalidValue, MIXED_MARKER, isValidValue, valueOrFallback } from "../905/216495";
import { Zk } from "../figma_app/626177";
import { Vy } from "../8826/611318";
import { Wv } from "../figma_app/711157";
import { defaultGrayColor, blackColor } from "../figma_app/385874";
import { useHasSceneGraphSelection, useAppModelProperty, useAppModelPropsShallow } from "../figma_app/722362";
import { o3, nt } from "../905/226610";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { BS } from "../642/202922";
import { Q as _$$Q } from "../9314/475980";
import { Mw, ON } from "../3276/43946";
import { v as _$$v } from "../642/281455";
import { c as _$$c } from "../642/688711";
import { hD, LI } from "../figma_app/970285";
import { _ as _$$_ } from "../figma_app/645682";
import { Ay as _$$Ay } from "../642/964720";
import { X2 } from "../642/755347";
import { B as _$$B } from "../642/707257";
import { $p, UA } from "../figma_app/580959";
import { C as _$$C } from "../642/776991";
import { Q as _$$Q2 } from "../1528/190444";
import { qh } from "../642/435480";
import { Xo } from "../figma_app/482495";
import { aR, pf } from "../figma_app/530362";
import { yt } from "../figma_app/292212";
import { sanitizeAndExtractText } from "../905/973142";
import { detectEditorStateFormat, parseEditorStateToPlainText } from "../figma_app/9619";
import { Ad } from "../figma_app/811257";
import { U_, vG, zq, VR } from "../figma_app/938628";
import { If, _i } from "../figma_app/319440";
import { x as _$$x } from "../573/916234";
import { B as _$$B2 } from "../7a72fc59/288229";
import { UpgradeAction } from "../905/370443";
import { e as _$$e2 } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { F_ } from "../905/858282";
import { y_w } from "../figma_app/6204";
import { dP } from "../figma_app/947348";
import { _ as _$$_2 } from "../642/896644";
import { r as _$$r } from "../905/571562";
import { tV as _$$tV } from "../905/794875";
import { u as _$$u } from "../figma_app/9104";
import { W as _$$W } from "../a88a4c5a/370121";
import { R as _$$R } from "../figma_app/360122";
import { tx as _$$tx2, ah, fP } from "../figma_app/240115";
import { s as _$$s } from "../figma_app/483328";
import { P as _$$P } from "../a88a4c5a/931446";
import { RK, NV, bX, aC } from "../figma_app/193101";
import { db } from "../figma_app/636678";
import { Ig } from "../905/805224";
import { X9 } from "../figma_app/730706";
import { li, T$, PU, GQ, hg, Oy, LS, D5, FC, OD, YW, Ef, Sd, zb, s$, sM, _x, sv, vo, KM, mC } from "../figma_app/29089";
import { L as _$$L } from "../figma_app/940186";
import { a3, or, Ez } from "../figma_app/139805";
import { Um } from "../905/848862";
import { selectCurrentFile } from "../figma_app/516028";
import { b as _$$b2 } from "../905/600173";
import { n } from "../905/796896";
import { i as _$$i } from "../905/542104";
import { generateRecordingKey } from "../figma_app/878298";
import { fullscreenValue } from "../figma_app/455680";
import { z as _$$z } from "../905/454433";
import { getCurrentFileType } from "../figma_app/976749";
import { rb } from "../figma_app/151869";
import { GV } from "../figma_app/159296";
import { P as _$$P2 } from "../figma_app/223272";
import { T as _$$T2 } from "../figma_app/453188";
import { W as _$$W2 } from "../figma_app/691750";
import { W as _$$W3 } from "../figma_app/110892";
import { G as _$$G, D as _$$D } from "../a88a4c5a/237102";
import { r as _$$r2 } from "../figma_app/17220";
import { yc, T0, gv, XS, sE } from "../figma_app/386160";
import { ServiceCategories as _$$e3 } from "../905/165054";
import { reportError } from "../905/11";
import { TabLoop } from "../905/718764";
import { Y as _$$Y2 } from "../a88a4c5a/416715";
var F = v;
function D() {
  let [e, t] = useState(new Set());
  let n = pq("PARENT");
  let r = useDeepEqualSceneValue(e => {
    let t = e.getDirectlySelectedNodes();
    return 1 === t.length && t[0]?.isGrid && GridLayoutApi?.getGridTrackSelection() || [];
  });
  useEffect(() => {
    r.length > 0 && t(new Set(r));
  }, [r]);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf xh8yej3 x6s0dn4",
    children: [jsxs("div", {
      className: "x78zum5 xsdox4t x6s0dn4 xh8yej3 x9f619 xtrkpyg xl56j7k x1kgkb76",
      children: [jsx(_$$Y, {
        nodeCount: 1,
        nodeType: "GRID_TRACKS",
        nodeTypeString: "Grid tracks"
      }), jsx(IconButton, {
        "aria-label": getI18nString("common.close"),
        onClick: () => {
          n && SceneGraphHelpers?.replaceSelection([n], !0);
        },
        children: jsx(_$$A, {})
      })]
    }), jsx(K, {
      axis: "COLUMNS",
      titleString: getI18nString("fullscreen.properties_panel.grid.columns"),
      selectedRows: new Set([...e].filter(e => e.axis === Axis.X).map(e => e.index)),
      updateSelectedRows: e => {
        let n = [...e].map(e => ({
          index: e,
          axis: Axis.X
        }));
        t(new Set(n));
        GridLayoutApi?.setGridTrackSelection(n);
      }
    }), jsx(K, {
      axis: "ROWS",
      titleString: getI18nString("fullscreen.properties_panel.grid.rows"),
      selectedRows: new Set([...e].filter(e => e.axis === Axis.Y).map(e => e.index)),
      updateSelectedRows: e => {
        let n = [...e].map(e => ({
          index: e,
          axis: Axis.Y
        }));
        t(new Set(n));
        GridLayoutApi?.setGridTrackSelection(n);
      }
    })]
  });
}
function K({
  axis: e,
  titleString: t,
  selectedRows: n,
  updateSelectedRows: r
}) {
  let l = useDeepEqualSceneValue(t => {
    let n = t.getDirectlySelectedNodes();
    return 1 === n.length && n[0]?.isGrid ? "ROWS" === e ? n[0].gridRowSizesInOrder : n[0].gridColumnSizesInOrder : null;
  });
  return l && 0 !== l.length ? jsxs("div", {
    className: "x78zum5 xdt5ytf xh8yej3 x9f619 x1kgkb76 xsag5q8",
    children: [jsxs("div", {
      className: "x78zum5 x1qughib x6s0dn4 xsdox4t xh8yej3 x9f619 xcb4yev xe0lunc",
      children: [jsx("span", {
        className: "xiuzu7u xwq5hk xfc7a33 x1j61x8r x8j8v4g x11tzhbd xqp8s7e",
        children: t
      }), jsx(IconButton, {
        "aria-label": "ROWS" === e ? getI18nString("fullscreen.properties_panel.grid.add_row") : getI18nString("fullscreen.properties_panel.grid.add_column"),
        onClick: () => {
          permissionScopeHandler.user("add-grid-track-edit-scope", () => {
            GridLayoutApi?.addTrackToGrid("ROWS" === e ? Axis.Y : Axis.X);
          });
        },
        children: jsx(_$$e, {})
      })]
    }), jsx(bL, {
      setSelectedRows: r,
      children: l?.map((t, l) => jsx(L, {
        index: l + 1,
        axis: e,
        computedSize: t.computedSize,
        type: t.maxSizing.type,
        selected: n.has(l),
        setIsSelected: e => {
          e && !n.has(l) && r(new Set([l]));
        }
      }, `${e}-${l}`))
    })]
  }) : null;
}
function L({
  key: e,
  index: t,
  axis: n,
  type: r,
  computedSize: l,
  selected: s,
  setIsSelected: o
}) {
  let a = A5("gridTrackSizingType");
  let d = A5("gridTrackSize");
  let p = useMemo(() => new _$$K2({
    maximumFractionDigits: 2
  }), []);
  let u = jsx(IconButton, {
    "aria-label": "ROWS" === n ? getI18nString("fullscreen.properties_panel.grid.delete_row") : getI18nString("fullscreen.properties_panel.grid.delete_column"),
    onClick: () => {
      permissionScopeHandler.user("delete-grid-track-edit-scope", () => {
        GridLayoutApi?.deleteGridTrackSelection();
      });
    },
    children: jsx(_$$O, {})
  });
  return jsxs(fI, {
    selected: s,
    disableDragging: !0,
    className: F()("grid_tracks_panel--oneIconTwoInputOneIconRow--w4Jov grid_tracks_panel--row--pzpgw", "grid_tracks_panel--withFocus--XwgfQ"),
    children: [jsx("span", {
      className: "grid_tracks_panel--indexLabel--6AMAs",
      children: t
    }), jsx(fh, {
      className: "grid_tracks_panel--leftInput--XRpGB",
      children: jsxs(Fragment, {
        children: [jsx(HiddenLabel, {
          htmlFor: "grid-track-size-input",
          children: "ROWS" === n ? getI18nString("fullscreen.properties_panel.grid.row_height") : getI18nString("fullscreen.properties_panel.grid.column_width")
        }), jsx(_$$bL2, {
          children: jsx(D0, {
            id: "grid-track-size-input",
            formatter: p,
            value: l,
            onChange: e => {
              d(e);
            },
            htmlAttributes: {
              onSelect: () => {
                o(!0);
              }
            }
          })
        })]
      })
    }), jsx(fh, {
      className: "grid_tracks_panel--rightInput--wjOuc",
      children: jsxs(_$$bL, {
        onChange: e => {
          e && a(+e);
        },
        onOpenChange: e => {
          e && o(!0);
        },
        value: r.toString(),
        children: [jsx(l9, {
          width: "fill",
          label: jsx(HiddenLabel, {
            children: getI18nString("fullscreen.properties_panel.grid.track_sizing")
          })
        }), jsxs(mc, {
          children: [jsx(c$, {
            value: LayoutSizingType.FIXED.toString(),
            children: getI18nString("fullscreen.properties_panel.constraints_resizing_panel.fixed")
          }), jsx(c$, {
            value: LayoutSizingType.FLEX.toString(),
            children: getI18nString("fullscreen.properties_panel.constraints_resizing_panel.fill")
          }), jsx(c$, {
            value: LayoutSizingType.HUG.toString(),
            children: getI18nString("fullscreen.properties_panel.constraints_resizing_panel.hug")
          })]
        })]
      })
    }), jsx(fh, {
      className: "grid_tracks_panel--rightIcon--3iZ87",
      children: jsx(_$$T, {
        selected: s,
        children: jsx("span", {
          className: F()("grid_tracks_panel--removeButton--MiKPU", {
            "grid_tracks_panel--removeButtonVisible--vg0ex": s
          }),
          children: u
        })
      })
    })]
  }, e);
}
function q() {
  let e = useSelector(e => {
    if (isInvalidValue(e.mirror.selectionProperties.cooperTemplateData)) return MIXED_MARKER;
    if (!e.mirror.selectionProperties.cooperTemplateData) return SocialMediaFormats.CUSTOM;
    let t = e.mirror.selectionProperties.cooperTemplateData?.type || "CUSTOM";
    return SocialMediaFormats[t];
  });
  let {
    hasInstanceSelected
  } = Cl();
  let n = hasInstanceSelected || e !== SocialMediaFormats.CUSTOM;
  return jsxs(Fragment, {
    children: [jsx(_$$k2, {
      name: "cooper_asset_size_panel",
      children: jsxs(Zk, {
        children: [jsx(Wv, {
          titleTx: renderI18nText("cooper.properties_panel.asset_size.title")
        }), jsx("div", {
          className: "xh8yej3 xnm25rq xyfqnmn x9f619",
          children: jsx(_$$k3, {
            isAssetPanel: !0
          })
        })]
      })
    }), jsx(Vy, {
      recordingKey: "stackPanel",
      onlyShowResizingRow: !0,
      onlyStacksAndGridsSelected: !1,
      hideToggleButton: !0,
      disabled: n
    }, "stack")]
  });
}
function ef({
  slotPropertyDefinition: e
}) {
  let t = e.description;
  let n = useMemo(() => t ? "lexical" === detectEditorStateFormat(t) ? parseEditorStateToPlainText(t) : sanitizeAndExtractText(t) : null, [t]);
  return n && "" !== n ? jsx(Ad, {
    appendedClassName: "slot_description_preview--descriptionRow--mxTUO",
    label: null,
    input: jsx("div", {
      className: "slot_description_preview--description--et-yW ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k",
      children: n
    })
  }) : null;
}
let eI = memo(function ({
  isInSelectionActionsPanel: e
}) {
  let {
    slotPropertyDefinition
  } = yt();
  let n = Xo()?.id === aR;
  return getFeatureFlags().dse_slots && slotPropertyDefinition ? jsxs(Zk, {
    className: "slot_panel--slotPanel--uguM2",
    style: e ? {
      paddingBottom: 0,
      borderBottom: "none"
    } : void 0,
    children: [jsx(ef, {
      slotPropertyDefinition
    }), n && jsx(pf, {
      componentPropDef: slotPropertyDefinition
    })]
  }) : null;
});
let eO = userFlagExistsAtomFamily("seen_draw_properties_panel_onboarding");
function eD(e) {
  let {
    panelsShown
  } = e;
  let n = useAtomWithSubscription(eO);
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: y_w,
    priority: _$$N.DEFAULT_MODAL
  }, [n]);
  useEffect(() => {
    panelsShown && show({
      canShow: e => (getFeatureFlags().ce_il_onboarding ?? !1) && e
    });
  }, [panelsShown, show]);
  let a = {
    type: "button",
    label: renderI18nText("draw.onboarding.dismiss_button"),
    onClick: complete,
    ctaTrackingDescriptor: UpgradeAction.GOT_IT
  };
  return jsx(rq, {
    arrowPadding: 4,
    arrowPosition: F_.RIGHT_BODY,
    description: renderI18nText("draw.onboarding.design_followup.description"),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    primaryCta: a,
    targetKey: dP,
    title: renderI18nText("draw.onboarding.design_followup.title"),
    trackingContextName: "draw_onboarding",
    userFlagOnShow: "seen_draw_design_followup_onboarding"
  });
}
function e1() {
  return jsx(Ig, {
    children: jsx(e4, {})
  });
}
function e4() {
  let e = RK();
  let t = X9();
  let n = function () {
    let e = _$$tx2();
    let t = useStrictDeepEqualSceneValue(e => li(e.getDirectlySelectedNodes(), !1));
    let n = NV();
    let i = bX();
    let r = _$$L();
    let l = aC();
    return useMemo(() => [i, r, T$, e, t, n, PU, GQ, hg, Oy, l], [e, t, n, i, r, l]);
  }();
  let r = a3();
  let l = function () {
    let e = useStrictDeepEqualSceneValue(e => {
      let t = e.getDirectlySelectedNodes();
      return LS(t);
    });
    let t = useStrictDeepEqualSceneValue(e => {
      let t = e.getDirectlySelectedNodes();
      return D5(t);
    });
    return useMemo(() => [[t], e], [e, t]);
  }();
  let s = useDeepEqualSceneValue(e => {
    let t = e.getDirectlySelectedNodes();
    return FC(t);
  });
  let o = useStrictDeepEqualSceneValue(e => OD(e.getDirectlySelectedNodes()));
  let a = db();
  let c = useDeepEqualSceneValue(e => YW(e.getDirectlySelectedNodes()));
  let p = Ef();
  let u = Sd();
  let _ = useMemo(() => {
    let i = [];
    i.push(a);
    i.push([e]);
    i.push(p);
    i.push([u]);
    let _ = [zb, s$, o, sM];
    c || i.push(_);
    s && i.push(...l);
    i.push(n);
    i.push(r);
    c && i.push(_);
    s || i.push(...l);
    i.push([_x, sv]);
    i.push([t]);
    i.push([vo]);
    let m = [];
    getFeatureFlags().ce_il_vem_offset_path && m.push(KM);
    getFeatureFlags().ce_il_simplify && m.push(mC);
    m.length > 0 && i.push(m);
    return i;
  }, [a, e, p, u, o, c, s, n, r, t, l]);
  return jsx(_$$P, {
    actions: _
  });
}
function tt(e) {
  return jsx(_$$z, {
    recordingKey: generateRecordingKey(e, "createTemplateSetButton"),
    onClick: () => {
      fullscreenValue.triggerActionInUserEditScope("create-state-group-row");
    },
    icon: jsx(_$$b2, {}),
    children: renderI18nText("design_systems.templates.create_template_set")
  }, "create-template-set-button");
}
function tn(e) {
  return 1 === useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().length) ? jsx(ti, {
    ...e
  }) : jsx(tr, {
    ...e
  });
}
function ti(e) {
  return jsx(_$$z, {
    recordingKey: generateRecordingKey(e, "createTemplateButton"),
    onClick: () => {
      fullscreenValue.triggerActionInUserEditScope("create-symbol");
    },
    icon: jsx(n, {}),
    children: renderI18nText("design_systems.templates.create_template")
  }, "create-template-button");
}
function tr(e) {
  return jsx(_$$z, {
    recordingKey: generateRecordingKey(e, "createMultipleTemplatesButton"),
    onClick: () => {
      fullscreenValue.triggerActionInUserEditScope("create-multiple-symbols");
    },
    icon: jsx(_$$i, {}),
    children: renderI18nText("design_systems.templates.create_multiple_templates")
  }, "create-multiple-templates-button");
}
function to() {
  let e = rb();
  let t = getCurrentFileType();
  let n = useCallback(() => {
    fullscreenValue.triggerAction("edit-make-from-design");
  }, []);
  return getFeatureFlags().bake_canvas && "design" === t && "RESPONSIVE_SET" === e ? jsx(_$$z, {
    onClick: n,
    children: getI18nString("design_systems.instance_panel.edit_make")
  }) : null;
}
function tg(e, t) {
  let n = _$$G();
  let i = _$$D(t);
  return n ? "INSTANCE" : i ? "SYMBOL" : e;
}
function tx() {
  let {
    nodeType,
    count
  } = _$$u();
  let n = tg(nodeType, count);
  return _$$r2(n);
}
function th({
  nodeType: e
}) {
  let t = !tx();
  let n = or();
  let r = Ez();
  return jsxs(Fragment, {
    children: ["INSTANCE" === e && jsx(_$$W2, {
      recordingKey: If,
      isInDesignSAP: !0
    }), jsx(_$$T2, {
      isInDesignSAP: !0
    }), jsx(_$$P2, {}), jsx(ah, {}), jsx(_$$W3, {}), t && jsx(ty, {}), n && jsx(tt, {}), r && jsx(tn, {}), jsx(to, {})]
  });
}
function ty() {
  let e = useDispatch();
  let t = Um();
  let n = selectCurrentFile();
  let r = GV();
  let {
    numSelected,
    stateGroupSelectionInfo
  } = fC("numSelected", "stateGroupSelectionInfo");
  let o = SQ();
  return jsxs(Fragment, {
    children: [jsx(VF, {
      isVisible: o,
      children: () => jsx(_$$x, {
        recordingKey: "vectorOperationPanel",
        numSelected
      }, "vectorOperation")
    }), jsx(VF, {
      isVisible: tV(r, stateGroupSelectionInfo),
      children: () => jsx(BS, {
        recordingKey: "propsPanel",
        isInSelectionActionsPanel: !0
      }, "componentProperties")
    }), jsx(VF, {
      isVisible: r[ItemType.COMPONENT_ITEM],
      children: () => jsx(_$$c, {
        recordingKey: "componentPanel",
        isInSelectionActionsPanel: !0
      }, "component")
    }), jsx(VF, {
      isVisible: M0(r),
      children: () => jsx(_$$_, {
        recordingKey: "instancePanel",
        isInSelectionActionsPanel: !0
      }, "instance")
    }), jsx(VF, {
      isVisible: Br(r),
      children: () => jsx(eI, {
        isInSelectionActionsPanel: !0
      }, "slot")
    }), jsx(VF, {
      isVisible: r[ItemType.VECTOR_TRANSFORM_UNIFIED_ITEM],
      children: () => jsx(U_, {
        recordingKey: "transformPanel",
        openFileKey: n?.key || null,
        dispatch: e,
        dropdownShown: t,
        isInSelectionActionsPanel: !0
      }, "vector-transform")
    })]
  });
}
function tS() {
  let e = useCallback(e => getFeatureFlags().dse_slots && e.every(e => e.isSlotReactive) ? {
    nodeType: "SLOT",
    count: e.length,
    node: e[0] ?? null
  } : null, []);
  let t = function () {
    let e = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
    return useCallback(t => e === LayoutTabType.VECTOR && t ? getI18nString("fullscreen.properties_panel.layer_header.node_type_vector") : getFeatureFlags().dse_slots && t && t.isSlotReactive ? getI18nString("fullscreen.properties_panel.layer_header.slot") : null, [e]);
  }();
  let {
    nodeType,
    count,
    nodeTypeAsUserDisplayableString
  } = _$$u({
    getNodeTypeStringOverrides: t,
    getTypeCountAndNodeOverrides: e
  });
  let s = tg(nodeType, count);
  return useHasSceneGraphSelection() ? jsxs(Fragment, {
    children: [jsx(_$$W, {
      selectionName: (() => {
        switch (s) {
          case "MIXED_FRAME_SECTION_GROUP":
          case "SECTION":
          case "GROUP":
          case "REPEATER":
          case "FRAME":
            return jsx("div", {
              style: {
                display: "inline-flex"
              },
              children: jsx(_$$tV, {
                value: {
                  chevron: () => jsx(_$$r, {
                    className: yc
                  })
                },
                children: jsx(vG, {
                  id: "selection-actions-frame-preset-dropdown",
                  selectClassName: T0,
                  inputClassName: gv,
                  recordingKey: "transformPanel.framePresetDropdown"
                })
              })
            });
          case "SLOT":
            return jsx("div", {
              ...Ay.props(_$$R.selectionName),
              children: jsx(_$$s, {
                unfocusedInputOverridesClassName: XS,
                focusedInputOverridesClassName: sE
              })
            });
          default:
            return null;
        }
      })() || jsx(_$$Y, {
        nodeCount: count,
        nodeType: s,
        nodeTypeString: nodeTypeAsUserDisplayableString
      }),
      selectionActionsButtons: jsx(e1, {}),
      children: jsx(th, {
        nodeType: s
      })
    }), jsx(fP, {})]
  }) : null;
}
function tb({
  allSavedPlugins: e,
  colorFormat: t,
  dropdownShown: n,
  library: l,
  localPlugins: a,
  modalShown: p,
  openFile: u,
  orgEntity: _,
  pickerInStyleCreationShown: g,
  pickerShown: x,
  publishedPlugins: h,
  saveAsState: y,
  sceneGraphSelection: j,
  scrollContainer: S,
  shownPanels: b,
  stylePickerListLayout: T,
  stylePickerShown: f
}) {
  let I = useDispatch();
  let E = useAtomWithSubscription(_$$b);
  let P = qh();
  let w = SQ();
  let C = U4(b);
  let k = So(b, !0);
  let V = hD();
  let v = kl("exportSettings");
  let {
    numSelected,
    stateGroupSelectionInfo
  } = fC("numSelected", "stateGroupSelectionInfo");
  let {
    areOnlyResponsiveSetsSelected,
    maskType
  } = pw("areOnlyResponsiveSetsSelected", "maskType");
  let {
    numSelected: _numSelected,
    pluginRelaunchData
  } = DQ("pluginRelaunchData", "numSelected");
  let K = useAppModelProperty("currentPage");
  let L = useAppModelProperty("currentSelectedProperty");
  let U = Ws(b, j);
  let B = SJ();
  let {
    onlyCooperFrames
  } = Cl();
  let $ = isCooperFeatureEnabled() && onlyCooperFrames;
  let Z = o3(nt.designSelectionActionsPanel);
  let eh = !tx() && Z;
  return jsxs(Fragment, {
    children: [0 === Object.keys(j).length && jsx(Mw, {
      panelName: ON.DESIGN
    }), jsx(eD, {
      panelsShown: b[ItemType.FILL_ITEM] ?? !1
    }), Z ? jsx(tS, {}) : jsx(_i, {
      recordingKey: "toolbarView",
      shouldShowComponentPropertiesPanel: tV(b, stateGroupSelectionInfo),
      shouldShowInstancePanel: M0(b),
      shouldShowTransformModifiersPanel: C,
      shouldShowVectorOperationPanel: w,
      shouldShowSlotPanel: Br(b),
      withBottomBorder: !b[ItemType.VECTOR_TRANSFORM_UNIFIED_ITEM]
    }), getFeatureFlags().react_scenegraph && jsx(VF, {
      isVisible: b[ItemType.JSX_ITEM],
      children: () => jsx(_$$_2, {})
    }), !eh && jsx(VF, {
      isVisible: w,
      children: () => jsx(_$$x, {
        recordingKey: "vectorOperationPanel",
        numSelected
      }, "vectorOperation")
    }), jsx(VF, {
      isVisible: C,
      children: () => jsx(sX, {}, "transformModifiers")
    }), !eh && jsx(VF, {
      isVisible: tV(b, stateGroupSelectionInfo),
      children: () => jsx(BS, {
        recordingKey: "propsPanel"
      }, "componentProperties")
    }), !eh && jsx(VF, {
      isVisible: b[ItemType.COMPONENT_ITEM],
      children: () => jsx(_$$c, {
        recordingKey: "componentPanel"
      }, "component")
    }), !eh && jsx(VF, {
      isVisible: M0(b),
      children: () => jsx(_$$_, {
        recordingKey: "instancePanel"
      }, "instance")
    }), !Z && jsx(VF, {
      isVisible: Br(b),
      children: () => jsx(eI, {}, "slot")
    }), jsx(VF, {
      isVisible: $,
      children: () => jsx(q, {})
    }), jsx(VF, {
      isVisible: !$ && (d6(b) || b[ItemType.TRANSFORM_ITEM]),
      children: () => jsx(zq, {
        recordingKey: "transformPanel",
        propertiesPanelState: E,
        openFileKey: u?.key || null,
        canEditConstraints: GG(b),
        onlyShowXYInputsRow: E === GR.DEFAULT_SIMPLIFIED || ((areOnlyResponsiveSetsSelected && isValidValue(areOnlyResponsiveSetsSelected)) ?? !1)
      }, "transform")
    }), !eh && jsx(VF, {
      isVisible: b[ItemType.VECTOR_TRANSFORM_UNIFIED_ITEM],
      children: () => jsx(U_, {
        recordingKey: "transformPanel",
        openFileKey: u?.key || null,
        dispatch: I,
        dropdownShown: n
      }, "vector-transform")
    }), jsx(VF, {
      isVisible: !$ && k,
      children: () => jsx(Vy, {
        recordingKey: "stackPanel",
        onlyShowResizingRow: E === GR.DEFAULT_SIMPLIFIED,
        onlyStacksAndGridsSelected: !!b[ItemType.STACK_ITEM]
      }, "stack")
    }), jsx(F$, {
      isVisible: b[ItemType.SCALE_ITEM]
    }), jsx(VF, {
      isVisible: b[ItemType.VECTOR_ITEM],
      children: () => jsx(VR, {
        isUI3: !0,
        recordingKey: "vectorTransformPanel",
        dispatch: I,
        dropdownShown: n
      }, "vector-transform")
    }), jsx(VF, {
      isVisible: b[ItemType.MASK_ITEM],
      children: () => jsx(_$$B, {
        recordingKey: "maskPanel",
        maskType
      }, "mask")
    }), jsx(VF, {
      isVisible: b[ItemType.LAYER_ITEM],
      children: () => jsx(X2, {
        recordingKey: "appearancePanel"
      })
    }), jsx(VF, {
      isVisible: b[ItemType.TYPE_ITEM],
      children: () => jsx(gc, {}, "type")
    }), jsx(VF, {
      isVisible: b[ItemType.CANVAS_ITEM],
      children: () => jsx(_$$v, {
        colorFormat: t,
        defaultColor: defaultGrayColor,
        dispatch: I,
        dropdownShown: n,
        hasExports: !!v && valueOrFallback(v, []).length > 0,
        library: l,
        modalShown: p,
        openFile: u,
        pickerShown: x,
        recordingKey: "canvasBackgroundPanel",
        sceneGraphSelection: j
      }, "canvas-background")
    }), jsx(VF, {
      isVisible: b[ItemType.REMOVE_GROUP_BACKGROUND_ITEM],
      children: () => jsx(_$$C, {}, "remove-group-fill-stroke")
    }), jsx(VF, {
      isVisible: b[ItemType.FILL_ITEM],
      children: () => jsx(B8, {
        variableScopes: P
      }, "fill")
    }), jsx(VF, {
      isVisible: b[ItemType.STROKE_ITEM],
      children: () => jsx($p, {
        colorFormat: t,
        defaultColor: blackColor,
        dispatch: I,
        dropdownShown: n,
        isPanelBodyCollapsedAtom: null,
        library: l,
        modalShown: p,
        openFile: u,
        pickerInStyleCreationShown: g,
        pickerShown: x,
        recordingKey: "strokePanel",
        sceneGraphSelection: j,
        stylePickerListLayout: T,
        stylePickerShown: f
      }, "stroke")
    }), jsx(VF, {
      isVisible: b[ItemType.EFFECTS_ITEM],
      children: () => jsx(w5, {}, "effects")
    }), jsx(VF, {
      isVisible: B,
      children: () => jsx(UA, {
        colorFormat: t,
        defaultColor: defaultGrayColor,
        dispatch: I,
        dropdownShown: n,
        library: l,
        openFile: u,
        pickerShown: x,
        recordingKey: "selectionPaintsPanel",
        sceneGraphSelection: j,
        stylePickerListLayout: T
      }, "selection-paints")
    }), jsx(VF, {
      isVisible: U,
      children: () => jsx(_$$B2, {}, "local-variables")
    }), jsx(VF, {
      isVisible: ww(b, j),
      children: () => jsx(_$$Q, {
        recordingKey: "local-styles",
        scrollContainer: S
      }, "local-styles")
    }), jsx(VF, {
      isVisible: b[ItemType.GRIDS_ITEM],
      children: () => jsx(_$$tC, {}, "grids")
    }), jsx(VF, {
      isVisible: P1(b, u),
      children: () => jsx(LI, {
        currentPage: K,
        currentSelectedProperty: L,
        dispatch: I,
        dropdownShown: n,
        exportSettings: v,
        isSelectionRenamable: LI.isSelectionRenamable(Object.keys(j)),
        numSelected,
        openFile: u,
        panelWidth: iP,
        pickerShown: x,
        recordingKey: "exportsPanel",
        saveAsState: y,
        sceneGraphSelection: j,
        singleNodeName: V
      }, "export")
    }), jsx(VF, {
      isVisible: !NR(b),
      children: () => jsx(_$$Q2, {
        allSavedPlugins: e.plugins,
        dispatch: I,
        editorType: u?.editorType ? mapFileTypeToEditorType(u.editorType) : null,
        localPlugins: a,
        numSelected: _numSelected ?? 0,
        openFileKey: u?.key || null,
        orgEntity: _,
        pluginRelaunchData,
        publishedPlugins: h,
        recordingKey: "pluginPanel"
      }, "plugin")
    }), getFeatureFlags().jsx_debugging && jsx(_$$Ay, {
      recordingKey: "jsxDebugPanel"
    })]
  });
}
function tT(e) {
  let t = selectCurrentUser();
  let n = Dj(t);
  return ((isEmptyObject(e.shownPanels) || Object.keys(e.shownPanels).every(t => !e.shownPanels[parseInt(t)])) && !window.figmaPerfTesting && !getFalseValue() && !isInteractionPathCheck() && !isEvalViewPathCheck() && logError("PropertiesPanel", "Rendering design tab with no shownPropertiesPanels", {
    isEmpty: isEmptyObject(e.shownPanels),
    shouldRenderInspectTab: n
  }), e.shownPanels[ItemType.FRAME_PRESETS]) ? jsx(VF, {
    isVisible: !0,
    children: () => jsx(_$$nl, {
      recordingKey: "framePresetPanel"
    }, "frame-presets")
  }) : e.shownPanels[ItemType.PENCIL_TOOL] ? jsx(VF, {
    isVisible: !0,
    children: () => jsx(_$$q, {
      recordingKey: "pencilToolPanel",
      id: "pencilToolPanel",
      openFile: e.openFile
    }, "pencilToolPanel")
  }) : getFeatureFlags().ce_tv_grid_ga && e.shownPanels[ItemType.GRID_TRACKS] ? jsx(D, {}) : jsx(tb, {
    ...e
  });
}
function tw({
  allSavedPlugins: e,
  colorFormat: t,
  dropdownShown: n,
  library: l,
  localPlugins: a,
  modalShown: p,
  openFile: u,
  orgEntity: _,
  pickerInStyleCreationShown: g,
  pickerShown: x,
  publishedPlugins: h,
  saveAsState: y,
  sceneGraphSelection: j,
  shownPanels: S,
  stylePickerListLayout: b,
  stylePickerShown: T
}) {
  let f = useDispatch();
  let [I, E] = useAtomValueAndSetter(_$$b);
  let P = useAppModelPropsShallow("currentPage", "currentSelectedProperty");
  let w = qh();
  let C = hD();
  let k = kl("exportSettings");
  let V = So(S, !0);
  let {
    numSelected,
    stateGroupSelectionInfo
  } = fC("numSelected", "stateGroupSelectionInfo");
  let {
    maskType,
    areOnlyResponsiveSetsSelected
  } = pw("maskType", "areOnlyResponsiveSetsSelected");
  let {
    pluginRelaunchData,
    numSelected: _numSelected2
  } = DQ("pluginRelaunchData", "numSelected");
  let D = SJ();
  let K = o3(nt.designSelectionActionsPanel);
  let L = !tx() && K;
  return jsxs(TabLoop, {
    children: [0 === Object.keys(j).length && jsx(Mw, {
      panelName: ON.DESIGN
    }), K ? jsx(tS, {}) : jsx(_i, {
      recordingKey: "toolbarView",
      shouldShowComponentPropertiesPanel: tV(S, stateGroupSelectionInfo),
      shouldShowSlotPanel: Br(S),
      shouldShowInstancePanel: M0(S)
    }), getFeatureFlags().react_scenegraph && jsx(VF, {
      isVisible: S[ItemType.JSX_ITEM],
      children: () => jsx(_$$_2, {})
    }), !L && jsx(VF, {
      isVisible: !NR(S),
      children: () => jsx(_$$_, {
        recordingKey: "instancePanel"
      }, "instance")
    }), jsx(VF, {
      isVisible: !0,
      children: () => jsx(zq, {
        recordingKey: "transformPanel",
        propertiesPanelState: I,
        openFileKey: u?.key || null,
        canEditConstraints: GG(S),
        onlyShowXYInputsRow: I === GR.DEFAULT_SIMPLIFIED || ((areOnlyResponsiveSetsSelected && isValidValue(areOnlyResponsiveSetsSelected)) ?? !1)
      }, "transform")
    }), !L && jsx(VF, {
      isVisible: S[ItemType.VECTOR_TRANSFORM_UNIFIED_ITEM],
      children: () => jsx(U_, {
        recordingKey: "transformPanel",
        openFileKey: u?.key || null,
        dispatch: f,
        dropdownShown: n
      }, "vector-transform")
    }), jsx(VF, {
      isVisible: V,
      children: () => jsx(Vy, {
        recordingKey: "stackPanel",
        onlyShowResizingRow: I === GR.DEFAULT_SIMPLIFIED,
        onlyStacksAndGridsSelected: !!S[ItemType.STACK_ITEM]
      }, "stack")
    }), jsx(F$, {
      isVisible: S[ItemType.SCALE_ITEM]
    }), I === GR.DEFAULT_SIMPLIFIED && jsx(_$$Y2, {
      onExpand: () => E(GR.OVERRIDDEN_EXPANDED)
    }), I === GR.OVERRIDDEN_EXPANDED && jsxs(Fragment, {
      children: [jsx(VF, {
        isVisible: S[ItemType.LAYER_ITEM],
        children: () => jsx(X2, {
          recordingKey: "appearancePanel"
        })
      }), !L && jsx(VF, {
        isVisible: S[ItemType.COMPONENT_ITEM],
        children: () => jsx(_$$c, {
          recordingKey: "componentPanel"
        }, "component")
      }), jsx(VF, {
        isVisible: S[ItemType.VECTOR_ITEM],
        children: () => jsx(VR, {
          isUI3: !0,
          recordingKey: "vectorTransformPanel",
          dispatch: f,
          dropdownShown: n
        }, "vector-transform")
      }), jsx(VF, {
        isVisible: S[ItemType.MASK_ITEM],
        children: () => jsx(_$$B, {
          recordingKey: "maskPanel",
          maskType
        }, "mask")
      }), jsx(VF, {
        isVisible: S[ItemType.TYPE_ITEM],
        children: () => jsx(gc, {}, "type")
      }), jsx(VF, {
        isVisible: S[ItemType.CANVAS_ITEM],
        children: () => jsx(_$$v, {
          colorFormat: t,
          defaultColor: defaultGrayColor,
          dispatch: f,
          dropdownShown: n,
          hasExports: !!k && valueOrFallback(k, []).length > 0,
          library: l,
          modalShown: p,
          openFile: u,
          pickerShown: x,
          recordingKey: "canvasBackgroundPanel",
          sceneGraphSelection: j
        }, "canvas-background")
      }), jsx(VF, {
        isVisible: S[ItemType.REMOVE_GROUP_BACKGROUND_ITEM],
        children: () => jsx(_$$C, {}, "remove-group-fill-stroke")
      }), jsx(VF, {
        isVisible: S[ItemType.FILL_ITEM],
        children: () => jsx(B8, {
          variableScopes: w
        }, "fill")
      }), jsx(VF, {
        isVisible: S[ItemType.STROKE_ITEM],
        children: () => jsx($p, {
          colorFormat: t,
          defaultColor: blackColor,
          dispatch: f,
          dropdownShown: n,
          isPanelBodyCollapsedAtom: null,
          library: l,
          modalShown: p,
          openFile: u,
          pickerInStyleCreationShown: g,
          pickerShown: x,
          recordingKey: "strokePanel",
          sceneGraphSelection: j,
          stylePickerListLayout: b,
          stylePickerShown: T
        }, "stroke")
      }), jsx(VF, {
        isVisible: S[ItemType.EFFECTS_ITEM],
        children: () => jsx(w5, {}, "effects")
      }), jsx(VF, {
        isVisible: D,
        children: () => jsx(UA, {
          colorFormat: t,
          defaultColor: defaultGrayColor,
          dispatch: f,
          dropdownShown: n,
          library: l,
          openFile: u,
          pickerShown: x,
          recordingKey: "selectionPaintsPanel",
          sceneGraphSelection: j,
          stylePickerListLayout: b
        }, "selection-paints")
      }), jsx(VF, {
        isVisible: S[ItemType.GRIDS_ITEM],
        children: () => jsx(_$$tC, {}, "grids")
      })]
    }), jsx(VF, {
      isVisible: P1(S, u),
      children: () => jsx(LI, {
        currentPage: P.currentPage,
        currentSelectedProperty: P.currentSelectedProperty,
        dispatch: f,
        dropdownShown: n,
        exportSettings: k,
        isSelectionRenamable: LI.isSelectionRenamable(Object.keys(j)),
        numSelected,
        openFile: u,
        panelWidth: iP,
        pickerShown: x,
        recordingKey: "exportsPanel",
        saveAsState: y,
        sceneGraphSelection: j,
        singleNodeName: C
      }, "export")
    }), jsx(VF, {
      isVisible: !NR(S),
      children: () => jsx(_$$Q2, {
        allSavedPlugins: e.plugins,
        dispatch: f,
        editorType: u?.editorType ? mapFileTypeToEditorType(u.editorType) : null,
        localPlugins: a,
        numSelected: _numSelected2 ?? 0,
        openFileKey: u?.key || null,
        orgEntity: _,
        pluginRelaunchData,
        publishedPlugins: h,
        recordingKey: "pluginPanel"
      }, "plugin")
    })]
  });
}
function tC(e) {
  if (isEmptyObject(e.shownPanels) || Object.keys(e.shownPanels).every(t => !e.shownPanels[parseInt(t)])) {
    let e = Error("Rendering simplified design tab with no shownPropertiesPanels");
    reportError(_$$e3.EDITOR_USABILITY, e);
  }
  return jsx(tw, {
    ...e
  });
}
export function $$tk0({
  scrollContainer: e,
  ...t
}) {
  let n = useAtomWithSubscription(_$$b);
  let a = useCurrentOrgAdminInfo();
  return n === GR.DEFAULT_EXPANDED ? jsx(tT, {
    ...t,
    orgEntity: a,
    scrollContainer: e
  }) : jsx(tC, {
    ...t,
    orgEntity: a
  });
}
export const Y = $$tk0;