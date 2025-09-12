import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useCallback, useId } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { K as _$$K } from "../905/443068";
import { E as _$$E } from "../905/632989";
import { LinkPrimitive } from "../figma_app/496441";
import { L as _$$L } from "../905/704296";
import { E as _$$E2 } from "../905/235326";
import { U as _$$U } from "../905/103637";
import { B as _$$B } from "../905/950875";
import { Q as _$$Q } from "../905/553231";
import { f as _$$f } from "../905/257420";
import { VariableDataType, PropertyScope } from "../figma_app/763686";
import f from "classnames";
import { useLatestRef } from "../figma_app/922077";
import { Uz } from "../905/63728";
import { tH, H4 } from "../905/751457";
import { s as _$$s } from "../cssbuilder/589278";
import { c as _$$c } from "../905/241436";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { X as _$$X } from "../905/99316";
import { J as _$$J } from "../905/45438";
import { Nh } from "../905/560959";
import { g as _$$g } from "../905/246147";
import { gs, ON, KP } from "../figma_app/31103";
import { b as _$$b } from "../905/217163";
import { Ku } from "../figma_app/740163";
import { u as _$$u, G6, Kd, BQ, t8, Xv, hg } from "../figma_app/852050";
import { isVsCodeEnvironment } from "../905/858738";
import { Um } from "../905/848862";
import { B as _$$B2 } from "../905/506188";
import { Ib } from "../905/129884";
import { vL } from "../905/826900";
import { np, rh } from "../figma_app/803932";
import { Cj } from "../figma_app/151869";
import { X as _$$X2 } from "../905/839893";
import { VZ } from "../figma_app/727192";
import { _p, nd } from "../figma_app/826998";
import { q as _$$q } from "../figma_app/777660";
import { Ig } from "../figma_app/155647";
import { l6, c$ } from "../905/794875";
import { ov, r8, lo } from "../905/386270";
import { yK, Px } from "../figma_app/152690";
import { Hr, eF } from "../figma_app/394327";
import { B3, wG } from "../905/331989";
import { Us } from "../figma_app/481279";
import { ex } from "../905/524523";
import { qf, Ct, h6, h_, L$, cG, Yv, FV, Fj, VL, xZ, Iw, WF, YI, FO, g7, _Z, LU, aI, my, mH, X1, Kk, Pn, Uq, TQ, Ur, W7, e9, n8, jl, Kv, qg, Wu } from "../905/881983";
var E = f;
function ee({
  variableId: e,
  isDetailsModal: t
}) {
  let r = _$$u(e);
  let n = G6(r?.variableSetId);
  let i = Kd(r?.node_id);
  let a = n?.modes.find(e => e.id === n?.defaultModeID);
  let s = yK(r?.node_id);
  return {
    variable: r ?? void 0,
    variableSet: n,
    variableSetKey: i ?? void 0,
    modeForModal: t && s ? s.modeId.guid : a?.id
  };
}
function et(e) {
  return !!e.variable && !!e.variableSet && !!e.variableSetKey && !!e.modeForModal;
}
export function $$er1({
  variableId: e,
  isDetailsModal: t
}) {
  return et(ee({
    variableId: e,
    isDetailsModal: t
  }));
}
export function $$en0({
  variableId: e,
  onClose: t,
  isDetailsModal: r,
  inlineCloseButton: a,
  surface: s,
  entryPoint: o,
  canOpenLibrary: l
}) {
  let d = _$$u(e);
  let c = isVsCodeEnvironment() ? "vscode" : "dev_mode";
  let u = d?.subscriptionStatus === "LOCAL" && d.isSoftDeleted;
  let p = useMemo(() => ({
    entrypoint: o,
    variableType: d?.resolvedType !== void 0 ? Hr(d.resolvedType) : void 0,
    variableOrigin: d?.subscriptionStatus === "LOCAL" ? "local" : "library",
    product: c,
    isDeleted: u,
    surface: s
  }), [o, u, d?.resolvedType, d?.subscriptionStatus, s, c]);
  return jsx(gs, {
    name: "details",
    enabled: !!d,
    trackingProps: p,
    children: jsx(ei, {
      variableId: e,
      onClose: t,
      isDetailsModal: r,
      inlineCloseButton: a,
      canOpenLibrary: l
    })
  });
}
function ei({
  variableId: e,
  onClose: t,
  isDetailsModal: r,
  inlineCloseButton: s,
  canOpenLibrary: l = !0
}) {
  let d = useDispatch();
  let u = ON();
  let p = ee({
    variableId: e,
    isDetailsModal: r
  });
  let _ = useLatestRef(e);
  let h = p.variable?.variableSetId;
  let m = useLatestRef(h);
  let [g, f] = useState(null);
  useEffect(() => {
    r ? _ && _ !== e && f(null) : m && m !== h && f(null);
  }, [r, _, e, m, h]);
  let E = et(p);
  useEffect(() => {
    E || (d(VisualBellActions.enqueue({
      message: "Variable details could not be loaded"
    })), t());
  }, [E, d, t]);
  let T = useCallback(e => {
    e.event.keyCode === Uz.ESCAPE && (u("escape_pressed"), e.event.preventDefault(), e.accept(), t());
  }, [u, t]);
  let I = useCallback(() => {
    u("description_expanded");
  }, [u]);
  let {
    variable,
    variableSet,
    variableSetKey,
    modeForModal
  } = p ?? {};
  let R = g ?? modeForModal;
  let L = eg(e, variableSetKey, R);
  if (!E) return null;
  let P = "LOCAL" === variable.subscriptionStatus && variable.isSoftDeleted;
  return jsxs(vL, {
    handleKeyDown: T,
    name: "dev-mode-variable-details",
    focusOnMount: !0,
    children: [jsx("div", {
      className: qf,
      children: jsx(VZ, {
        title: "variable-info",
        hideHeader: !0,
        recordingKey: "dev-var-details-header",
        noPadding: !0,
        children: jsxs("div", {
          className: Ct,
          children: [s ? jsxs("div", {
            className: h6,
            children: [jsx(ea, {
              variable
            }), jsx(_$$K, {
              onClick: t,
              "aria-label": getI18nString("dev_handoff.variables.details_button_close_aria_label"),
              children: jsx(_$$L, {})
            })]
          }) : jsx(ea, {
            variable
          }), r && !P && jsx(es, {
            variableId: e,
            libraryKey: variable?.subscriptionStatus === "SUBSCRIBED" ? variable.library_key : void 0,
            isLocal: variable?.subscriptionStatus === "LOCAL",
            onClose: t,
            canOpenLibrary: l
          }), jsx(_$$X, {
            description: variable.description,
            containerClassName: h_,
            onExpand: I,
            dataTestId: "var-details-description"
          })]
        })
      })
    }), jsx(VZ, {
      title: "variable-value",
      hideHeader: !0,
      recordingKey: "dev-var-details-value",
      noPadding: !0,
      children: jsxs("div", {
        className: Ct,
        children: [jsx(ed, {
          name: getI18nString("dev_handoff.variables.details_collection"),
          value: variableSet?.name,
          copyValue: null,
          trackingName: "collection"
        }), jsx(el, {
          setSelectedMode: f,
          selectedMode: R,
          modeOptions: variableSet?.modes ?? [],
          jumpsCollection: L
        }), jsx(ef, {
          variableId: variable.node_id,
          currentVarSetKey: variableSetKey,
          currentlySelectedModeId: R,
          expandByDefault: !r,
          onClose: t,
          canOpenLibrary: l
        }), jsx(eE, {
          variableId: variable.node_id
        })]
      })
    }), jsx(ey, {
      codeSyntax: variable.codeSyntax
    })]
  });
}
function ea({
  variable: e
}) {
  let t = Cj(e.name);
  let r = ON();
  let a = "LOCAL" === e.subscriptionStatus && e.isSoftDeleted;
  let {
    ref,
    ...o
  } = _$$X2(e.name);
  let d = a ? {
    "data-tooltip": getI18nString("variables.variable_was_deleted"),
    "data-tooltip-type": Ib.TEXT
  } : void 0;
  let c = useCallback(() => {
    t && (r("row_copied", {
      type: "name"
    }), t());
  }, [t, r]);
  return jsxs(_$$E, {
    className: L$,
    onClick: c,
    htmlAttributes: o ?? d,
    children: [a && jsx(B3, {}), jsx("span", {
      className: cG,
      ref,
      "data-testid": "var-details-name",
      children: e.name
    })]
  });
}
function es({
  variableId: e,
  libraryKey: t,
  isLocal: r,
  onClose: i,
  canOpenLibrary: a
}) {
  let o = KP("full_table", Nh.VariableDetailsModal);
  let l = _$$b({
    libraryKey: t,
    isDevHandoff: !0,
    isDevModeOverview: !1,
    isDevModeVarsTable: !0,
    devModeVarsTableSelection: e,
    devModeFocusId: void 0
  });
  let d = _$$B2(t || "", {
    enabled: !!t
  });
  let c = _$$g({
    onShow: i,
    entryPoint: Nh.VariableDetailsModal,
    variableId: e
  });
  return r || "loaded" === l.status && "loaded" === d.status ? a ? jsx(tH, {
    boundaryKey: "varsTable_detailsEntry",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    team: _$$e.DEVELOPER_TOOLS,
    sentryTags: {
      area: _$$e.DEVELOPER_TOOLS
    },
    children: jsx(_$$J, {
      libraryName: d?.data,
      containerClassName: Yv,
      link: l.data,
      isLocal: r,
      localFallback: getI18nString("dev_handoff.variables.details_local"),
      onClickLocalFallback: c,
      onTrackClickName: o,
      dataTestId: "var-details-library",
      recordingKey: "library_name"
    })
  }) : jsx(_$$J, {
    libraryName: d?.data,
    containerClassName: Yv,
    isLocal: r,
    dataTestId: "var-details-library"
  }) : jsx(_$$J, {
    containerClassName: Yv,
    loading: !0
  });
}
let eo = new class {
  format(e) {
    return e.name;
  }
}();
function el({
  selectedMode: e,
  setSelectedMode: t,
  modeOptions: r,
  jumpsCollection: s
}) {
  let o = useDispatch();
  let l = ON();
  let d = Um();
  let c = useMemo(() => r.find(t => t.id === e), [e, r]);
  let u = useCallback(r => {
    l("change_mode", {
      previous: e,
      current: r.id
    });
    t(r.id);
  }, [e, t, l]);
  let p = useId();
  if (!c || !r || r.length < 2) return null;
  let _ = s ? FV : Fj;
  return jsxs(_p, {
    className: VL,
    disableDetailModalEntry: !0,
    children: [jsx("span", {
      id: p,
      className: xZ,
      children: renderI18nText("dev_handoff.variables.details_mode")
    }), jsx("span", {
      className: _,
      "data-testid": "var-details-mode",
      children: jsx(l6, {
        ariaLabelledBy: p,
        id: "mode_dropdown",
        dispatch: o,
        dropdownShown: d,
        property: c,
        onChange: u,
        formatter: eo,
        children: r.map(e => jsx(c$, {
          value: e,
          children: e.name
        }, `${e.id}`))
      })
    })]
  });
}
function ed({
  name: e,
  trackingName: t,
  trackingProps: r = {},
  value: a,
  copyValue: s,
  children: o
}) {
  let l = ON();
  let d = useCallback(() => {
    null !== s ? l("row_copied", {
      type: t,
      ...r
    }) : l("row_clicked", {
      type: t,
      ...r
    });
  }, [s, l, t, r]);
  return o ? jsx(_p, {
    copyValue: s,
    onCopy: d,
    disableDetailModalEntry: !0,
    showTooltipAbove: !0,
    children: o
  }) : jsx(_p, {
    name: e,
    value: a,
    copyValue: s,
    onCopy: d,
    disableDetailModalEntry: !0,
    showTooltipAbove: !0
  });
}
function ec(e, t) {
  let r = Px();
  return useMemo(() => e && t ? {
    ...r,
    [e]: t
  } : r, [r, e, t]);
}
let eu = ex("variable_value_from_other_mode", function ({
  modeName: e,
  collectionName: t
}) {
  return jsx("div", {
    className: _$$s.cursorDefault.colorTextTooltip.wFitContent.$,
    children: renderI18nText("dev_handoff.variables.details_value_from_other_mode", {
      modeName: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: e
      }),
      collectionName: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: t
      })
    })
  });
}, e => ({
  modeName: e.getAttribute("data-tooltip-mode"),
  collectionName: e.getAttribute("data-tooltip-collection")
}));
function ep({
  variableId: e,
  onClose: t,
  canOpenLibrary: r
}) {
  let a = _$$u(e);
  let c = a?.subscriptionStatus === "LOCAL";
  let _ = a?.subscriptionStatus === "LOCAL" && a.isSoftDeleted;
  let h = a?.subscriptionStatus === "SUBSCRIBED" ? a.library_key : void 0;
  let m = KP("full_table", Nh.VariableDetailsModal);
  let g = _$$b({
    libraryKey: h,
    isDevHandoff: !0,
    isDevModeOverview: !1,
    isDevModeVarsTable: !0,
    devModeVarsTableSelection: e,
    devModeFocusId: void 0
  });
  let f = g.data?.link;
  let y = _$$g({
    onShow: t,
    entryPoint: Nh.VariableDetailsModal,
    variableId: e
  });
  let b = useCallback(() => {
    m({
      type: c ? "local" : "library"
    });
    c && y();
  }, [c, m, y]);
  return a && !_ && r && (a?.subscriptionStatus !== "SUBSCRIBED" || "loaded" === g.status) ? c ? jsx("div", {
    className: Iw,
    children: jsx(_$$K, {
      "aria-label": getI18nString("dev_handoff.variables.details_view_in_collection"),
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": getI18nString("dev_handoff.variables.details_view_in_collection")
      },
      onClick: b,
      children: jsx(_$$E2, {})
    })
  }) : g.data?.type === "community" ? jsx(_$$E, {
    disabled: !0,
    className: E()(WF, Iw),
    "aria-label": getI18nString("dev_handoff.variables.details_from_community"),
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("dev_handoff.variables.details_from_community")
    },
    children: jsx(_$$U, {})
  }) : f ? jsx(tH, {
    boundaryKey: "varsTable_detailsEntry",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    team: _$$e.DEVELOPER_TOOLS,
    sentryTags: {
      area: _$$e.DEVELOPER_TOOLS
    },
    children: jsx(LinkPrimitive, {
      className: E()(YI, Iw),
      newTab: !0,
      href: f,
      trusted: !0,
      onClick: b,
      "aria-label": getI18nString("dev_handoff.variables.details_view_in_collection"),
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": getI18nString("dev_handoff.variables.details_view_in_collection")
      },
      children: jsx(_$$E2, {})
    })
  }) : null : null;
}
function e_({
  variableData: e,
  varSetKeyToModeID: t,
  originalSetID: r,
  showArrow: a,
  showDotDotDot: s,
  numberOfAliases: o,
  showCollapsedTooltip: d,
  someAliasOutsideCollection: c,
  onToggle: u,
  onClose: p,
  canOpenLibrary: f
}) {
  let y = _$$u(e.value);
  let b = BQ(e.value, t);
  let T = t8(e.value, t);
  let I = G6(y?.variableSetId);
  let S = Kd(y?.node_id);
  let A = Cj(y?.name);
  let x = ON();
  let N = useCallback(() => {
    A && (A(), x("row_copied", {
      type: "alias"
    }));
  }, [A, x]);
  let C = useMemo(() => {
    if (y?.variableSetId === r || !S || !I) return null;
    let e = t?.[S] ?? I?.defaultModeID;
    let n = I?.modes.find(t => t.id === e);
    return n ? {
      modeName: n.name,
      collectionName: I.name
    } : null;
  }, [r, I, t, y, S]);
  let w = getI18nString("dev_handoff.variables.details_value_show_more", {
    count: o - 2
  });
  let {
    ref,
    ...L
  } = _$$X2(w);
  let D = "MIXED" !== b && b?.type !== VariableDataType.COLOR;
  let k = !D;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: FO,
      children: [k ? jsx(np, {
        color: b.value,
        variable: y,
        label: y?.name ?? getI18nString("variables.missing_name"),
        onClick: N,
        shouldStretch: !0
      }) : jsx(wG, {
        thumbnailValue: T,
        text: y?.name ?? getI18nString("variables.missing_name"),
        onClick: N,
        isDeleted: y ? eF(y) : void 0,
        fullWidth: !0,
        containerClassName: g7
      }), c && jsx("div", {
        className: _Z,
        children: C && jsx(_$$B, {
          "data-tooltip-type": Ib.SPECIAL,
          "data-tooltip": eu,
          "data-tooltip-mode": C.modeName,
          "data-tooltip-collection": C.collectionName,
          className: LU
        })
      }), jsx(ep, {
        onClose: p,
        variableId: e.value,
        canOpenLibrary: f
      })]
    }), a ? jsx("div", {
      className: aI,
      children: jsx(_$$Q, {})
    }) : s ? jsxs("div", {
      className: E()(my, D && mH),
      children: [jsxs(_$$E, {
        onClick: u,
        "aria-label": getI18nString("dev_handoff.variables.details_value_expand_aria_label"),
        className: X1,
        htmlAttributes: L,
        children: [jsx(_$$f, {
          className: Kk
        }), jsx("div", {
          className: Pn,
          ref,
          children: w
        })]
      }), d && jsx(_$$B, {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": getI18nString("dev_handoff.variables.details_values_not_all_from_same_mode"),
        className: Kk
      })]
    }) : null]
  });
}
function eh({
  value: e,
  noChain: t
}) {
  let r = e?.type === VariableDataType.FLOAT ? nd(e.value, "") : e?.value?.toString();
  let a = Cj(r);
  let s = ON();
  let {
    ref,
    ...d
  } = _$$X2(r);
  let c = useCallback(() => {
    a && (a(), s("row_copied", {
      type: "value"
    }));
  }, [a, s]);
  switch (e.type) {
    case VariableDataType.STRING:
    case VariableDataType.BOOLEAN:
    case VariableDataType.FLOAT:
      return jsx(_$$E, {
        onClick: c,
        className: E()(Uq, e.type === VariableDataType.STRING && TQ),
        htmlAttributes: {
          ...d,
          "data-testid": "var-details-value"
        },
        ref,
        children: r
      });
    case VariableDataType.COLOR:
      return jsx(em, {
        value: e,
        noChain: t
      });
    default:
      return null;
  }
}
function em({
  value: e,
  noChain: t
}) {
  let r = Ku();
  let a = Ig();
  let s = _$$q(e.value, r, a, {
    alphaInPercent: !0
  }).value;
  let o = Cj(s);
  let l = ON();
  let d = useCallback(() => {
    o && (o(), l("row_copied", {
      type: "value"
    }));
  }, [o, l]);
  let {
    ref,
    ...u
  } = _$$X2(s);
  let p = {
    ...u,
    "data-testid": "var-details-value"
  };
  return jsx("div", {
    className: Ur,
    children: jsx(rh, {
      color: e.value,
      value: s,
      onClick: d,
      labelRef: ref,
      htmlAttributes: p,
      pillClassName: t ? W7 : void 0
    })
  });
}
function eg(e, t, r) {
  let n = ec(t, r);
  let a = _$$u(e);
  let s = Xv(e, n);
  let o = hg((s ?? []).map(e => e.type === VariableDataType.ALIAS ? e.value : void 0));
  let l = a?.variableSetId;
  return useMemo(() => o.some((e, t) => !!e && t > 0 && e?.variableSetId !== l), [o, l]);
}
function ef({
  variableId: e,
  currentVarSetKey: t,
  currentlySelectedModeId: r,
  expandByDefault: a,
  onClose: s,
  canOpenLibrary: o
}) {
  let [l, d] = useState(!1);
  let c = a || l;
  let u = ec(t, r);
  let p = _$$u(e);
  let _ = Xv(e, u);
  let h = ON();
  let m = useCallback(() => {
    h("toggle_alias_chain", {
      type: c ? "collapse" : "expand"
    });
    d(e => !e);
  }, [c, h]);
  let f = eg(e, t, r);
  if (!p || !_ || 0 === _.length) return null;
  let y = _.length > 2;
  let b = _[0];
  let T = _[_.length - 1];
  let I = _.length > 1 ? c ? _ : [b, T] : [T];
  if (1 === _.length && (T.type === VariableDataType.STRING || T.type === VariableDataType.BOOLEAN || T.type === VariableDataType.FLOAT)) {
    let e = T.type === VariableDataType.FLOAT ? nd(T.value, "") : T.value.toString();
    return jsx(ed, {
      trackingName: "value",
      name: getI18nString("dev_handoff.variables.details_value"),
      value: e,
      copyValue: e
    });
  }
  return jsxs("div", {
    className: e9,
    children: [jsx("span", {
      className: xZ,
      children: renderI18nText("dev_handoff.variables.details_value")
    }), jsx("div", {
      className: E()(n8, T.type !== VariableDataType.COLOR && jl, T.type === VariableDataType.COLOR && Kv),
      children: I.map((e, t) => {
        let r = t === I.length - 1;
        return e.type === VariableDataType.ALIAS ? jsx(e_, {
          canOpenLibrary: o,
          numberOfAliases: _.length,
          onClose: s,
          onToggle: m,
          originalSetID: p?.variableSetId,
          showArrow: y ? !r && c : !r,
          showCollapsedTooltip: y && !c && f,
          showDotDotDot: !!y && !r && !c,
          someAliasOutsideCollection: f,
          varSetKeyToModeID: u,
          variableData: e
        }, t) : jsx(eh, {
          value: e,
          noChain: 1 === _.length
        }, t);
      })
    })]
  });
}
function eE({
  variableId: e
}) {
  let t = _$$u(e);
  let r = ON();
  let i = getI18nString("dev_handoff.variables.details_scope");
  let a = _$$X2(i);
  return t?.scopes && t.scopes.length > 0 && t.scopes[0] !== PropertyScope.ALL_SCOPES ? jsxs(_$$c, {
    className: e9,
    onClick: () => r("row_clicked", {
      type: "scopes"
    }),
    children: [jsxs("span", {
      className: xZ,
      children: [jsx("span", {
        className: qg,
        ...a,
        children: i
      }), jsx("div", {
        "data-tooltip": getI18nString("dev_handoff.variables.details_scope_info"),
        "data-tooltip-type": Ib.TEXT,
        className: Kk,
        children: jsx(_$$B, {})
      })]
    }), jsx("div", {
      className: Wu,
      children: t.scopes.map(e => jsx("div", {
        className: qg,
        "data-testid": `var-details-scope-${e.toString()}`,
        children: Us(e, {
          devMode: !0
        })
      }, e.toString()))
    })]
  }) : null;
}
function ey({
  codeSyntax: e
}) {
  return e && Object.keys(e).length > 0 ? jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.h8.$
    }), jsx(VZ, {
      title: getI18nString("dev_handoff.variables.details_code_syntax"),
      recordingKey: "dev-var-details-code-syntax",
      children: Object.entries(e).map(([e, t]) => {
        let r = ov(e);
        return null === r ? null : jsx(ed, {
          trackingName: "code_syntax",
          trackingProps: {
            codeSyntaxPlatform: r8(r)
          },
          name: lo(r),
          value: t,
          copyValue: t
        }, r);
      })
    })]
  }) : null;
}
export const a = $$en0;
export const u = $$er1;