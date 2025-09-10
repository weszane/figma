import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useRef, useCallback, useContext, useLayoutEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { k as _$$k } from "../905/443820";
import { VariableResolvedDataType, VariablesBindings, VariableDataType, DesignGraphElements } from "../figma_app/763686";
import { s4 } from "../figma_app/276332";
import { getFeatureFlags } from "../905/601108";
import { Ay } from "../figma_app/272902";
import u from "classnames";
import { h as _$$h } from "../905/207101";
import { useLatestRef } from "../figma_app/922077";
import { Uz } from "../905/63728";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { tH } from "../905/751457";
import { Nt, c2, yn, lv, dP } from "../figma_app/119475";
import { B as _$$B } from "../905/714743";
import { n as _$$n } from "../905/734251";
import { getI18nString } from "../905/303541";
import { Fl } from "../figma_app/236178";
import { NX, k9 } from "../figma_app/777207";
import { B8 } from "../figma_app/255679";
import { kf, u5, Rb, yp, pN } from "../figma_app/852050";
import { Um } from "../905/848862";
import { dH } from "../figma_app/722362";
import { useOpenFileLibraryKey, useCurrentFileKey } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { Oe } from "../figma_app/336853";
import { PrimaryWorkflowEnum, LibraryItemTypeEnum } from "../figma_app/633080";
import { t as _$$t2 } from "../905/62933";
import { Id, jT } from "../figma_app/626177";
import { AH, Zk, Je } from "../905/571648";
import { mY } from "../figma_app/915281";
import { M as _$$M, A as _$$A } from "../905/749030";
import { R as _$$R } from "../905/69216";
import { HZ, Rm } from "../figma_app/74668";
import { Ih, LV, tx, dC, kE, w$, HK, dh, Yc, oM } from "../905/820169";
import { qF, bT, tZ, Ui } from "../905/943361";
import { XM, A7, ip } from "../905/609328";
import { D as _$$D } from "../figma_app/406976";
import { s1 } from "../figma_app/226737";
import { Px } from "../figma_app/152690";
import { Z as _$$Z, t as _$$t3 } from "../905/230174";
import { AQ } from "../figma_app/481279";
import { d2 } from "../figma_app/225126";
import { g$ } from "../figma_app/743107";
import { p$, PP, eB as _$$eB, a2, S as _$$S, jG, ZA, ON, qc, Rt } from "../905/794523";
import { A as _$$A2 } from "../1617/720598";
var p = u;
function J({
  resolvedType: e,
  requestedTypes: t
}) {
  return t || (e ? [e] : null);
}
function Z(e, t, r, i) {
  return jsx("div", {
    className: p$,
    style: {
      height: Ih({
        layout: t
      })
    },
    children: e.length > 0 ? getI18nString("variables.binding_ui.no_search_results") : i === VariableResolvedDataType.COLOR ? getI18nString("variables.binding_ui.no_colors_empty_state") : r ? getI18nString("variables.binding_ui.no_variables_props_empty_state") : getI18nString("variables.binding_ui.no_variables_empty_state")
  });
}
export function $$Q1({
  selectedItem: e,
  resolvedType: t,
  requestedTypes: r,
  variableFilters: s,
  pickerType: o,
  disabledVariableIds: l,
  setControlRightButtons: d,
  variableScopes: c,
  recordingKey: u,
  onVariableSelected: p,
  onStyleSelected: _,
  onComponentPropSelected: h,
  onClose: m,
  keepOpenOnItemSelect: g
}) {
  let {
    currentView,
    setCurrentView,
    toggleLayout
  } = _$$R({
    selectedItem: e,
    resolvedType: t
  });
  let T = function (e) {
    switch (e.type) {
      case "ALL_LIBRARIES":
        return en;
      case "LOCAL_VARIABLES":
        return $$er2;
      case "SUBSCRIBED_VARIABLES":
        return ee;
      default:
        throwTypeError(e, "Unhandled view for picker body");
    }
  }(currentView);
  let I = useMemo(() => J({
    requestedTypes: r,
    resolvedType: t ?? null
  }), [r, t]);
  let [S, v] = useState("");
  let A = useRef(null);
  let x = useCallback(() => {
    A.current && A.current.focus();
    toggleLayout();
  }, [toggleLayout, A]);
  return jsxs(tH, {
    boundaryKey: "VariablePicker",
    fallback: Z(S, currentView.layout, !!h, t),
    children: [jsx(T, {
      currentView,
      disabledVariableIds: l,
      keepOpenOnItemSelect: g,
      onClose: m,
      onComponentPropSelected: h,
      onSearchInputChange: v,
      onStyleSelected: _,
      onVariableSelected: p,
      pickerType: o,
      recordingKey: u,
      renderSetControls: i => jsx(ec, {
        currentView,
        onStyleSelected: _,
        onToggleLayout: x,
        recordingKey: u,
        requestedTypes: r,
        resolvedType: t,
        searchQuery: S,
        selectedItem: e,
        setControlRightButtons: d,
        setCurrentView,
        variableSets: i
      }),
      requestedTypes: r,
      resolvedType: t,
      searchInputRef: A,
      searchQuery: S,
      selectedItem: e,
      variableFilters: s,
      variableScopes: c
    }), jsx(_$$M, {
      resolvedTypes: I,
      selectedItem: e
    })]
  });
}
function ee({
  selectedItem: e,
  currentView: t,
  resolvedType: r,
  pickerType: i,
  recordingKey: a,
  onVariableSelected: s,
  onStyleSelected: l,
  onClose: d,
  requestedTypes: c,
  searchQuery: u,
  onSearchInputChange: p,
  variableScopes: _,
  variableFilters: h,
  searchInputRef: m,
  renderSetControls: g
}) {
  let f = t.fileKey;
  let E = kf(f);
  let y = u5(f);
  let b = "loading" === y.status || "loading" === E.status;
  let T = E.data ?? [];
  let I = y.data ?? [];
  return r === VariableResolvedDataType.COLOR && "color-picker" === i && l ? jsx(et, {
    fileKey: f,
    selectedStyle: e?.type === PrimaryWorkflowEnum.STYLE ? e : null,
    render: ({
      isLoading: o,
      dsStyles: f
    }) => jsx($$el3, {
      currentView: t,
      disabledVariableIds: new Set(),
      dsStyles: f,
      isLoading: o || b,
      onClose: d,
      onSearchInputChange: p,
      onStyleSelected: l,
      onVariableSelected: s,
      pickerControls: g(I),
      pickerType: i,
      recordingKey: a,
      requestedTypes: c,
      resolvedType: r,
      searchInputRef: m,
      searchQuery: u,
      selectedItem: e,
      variableFilters: h,
      variableScopes: _,
      variableSets: I,
      variables: T
    })
  }) : jsx($$el3, {
    currentView: t,
    disabledVariableIds: new Set(),
    dsStyles: [],
    onClose: d,
    onSearchInputChange: p,
    onVariableSelected: s,
    pickerControls: g(I),
    pickerType: i,
    recordingKey: a,
    requestedTypes: c,
    resolvedType: r,
    searchInputRef: m,
    searchQuery: u,
    selectedItem: e,
    variableScopes: _,
    variableSets: I,
    variables: T
  });
}
function et({
  fileKey: e,
  selectedStyle: t,
  render: r
}) {
  let i = AH(t?.key || null, t);
  let {
    status,
    stylesByFileKey
  } = Zk({
    styleType: s4.FILL,
    initialSelectedSubscribedStyle: i
  });
  let o = stylesByFileKey[e]?.styles ?? [];
  return jsx(mY, {
    children: r({
      isLoading: "loaded" !== status,
      dsStyles: o
    })
  });
}
export function $$er2({
  selectedItem: e,
  disabledVariableIds: t,
  currentView: r,
  resolvedType: i,
  pickerType: a,
  recordingKey: s,
  onVariableSelected: d,
  onStyleSelected: c,
  onClose: u,
  requestedTypes: p,
  searchQuery: _,
  onSearchInputChange: h,
  variableScopes: m,
  variableFilters: g,
  onComponentPropSelected: f,
  searchInputRef: E,
  renderSetControls: y
}) {
  let b = Rb();
  let T = yp();
  return i === VariableResolvedDataType.COLOR && "color-picker" === a && c ? jsx(ei, {
    styleType: s4.FILL,
    render: o => jsx($$el3, {
      currentView: r,
      disabledVariableIds: t,
      dsStyles: o,
      onClose: u,
      onSearchInputChange: h,
      onStyleSelected: c,
      onVariableSelected: d,
      pickerControls: y(T),
      pickerType: a,
      recordingKey: s,
      requestedTypes: p,
      resolvedType: i,
      searchInputRef: E,
      searchQuery: _,
      selectedItem: e,
      variableFilters: g,
      variableScopes: m,
      variableSets: T,
      variables: b
    })
  }) : f ? jsx(ea, {
    render: o => jsx($$el3, {
      componentProps: o,
      currentView: r,
      disabledVariableIds: t,
      dsStyles: [],
      onClose: u,
      onComponentPropSelected: f,
      onSearchInputChange: h,
      onVariableSelected: d,
      pickerControls: y(T),
      pickerType: a,
      recordingKey: s,
      requestedTypes: p,
      resolvedType: i,
      searchInputRef: E,
      searchQuery: _,
      selectedItem: e,
      variableFilters: g,
      variableScopes: m,
      variableSets: T,
      variables: b
    }),
    pickerType: a,
    requestedTypes: p,
    resolvedType: i
  }) : jsx($$el3, {
    currentView: r,
    disabledVariableIds: t,
    dsStyles: [],
    onClose: u,
    onSearchInputChange: h,
    onVariableSelected: d,
    pickerControls: y(T),
    pickerType: a,
    recordingKey: s,
    requestedTypes: p,
    resolvedType: i,
    searchInputRef: E,
    searchQuery: _,
    selectedItem: e,
    variableFilters: g,
    variableScopes: m,
    variableSets: T,
    variables: b
  });
}
function en({
  selectedItem: e,
  disabledVariableIds: t,
  currentView: r,
  resolvedType: a,
  pickerType: s,
  recordingKey: d,
  onVariableSelected: c,
  onStyleSelected: u,
  onComponentPropSelected: p,
  onClose: _,
  keepOpenOnItemSelect: h,
  requestedTypes: m,
  searchQuery: g,
  onSearchInputChange: f,
  variableScopes: E,
  variableFilters: y,
  searchInputRef: b,
  renderSetControls: T
}) {
  let I = Rb();
  let S = yp();
  let v = pN();
  let x = "loaded" !== v.status;
  let N = v.data?.libraryVariables;
  let C = v.data?.libraryVariableSets;
  let w = useMemo(() => [...I, ...(N ?? [])], [I, N]);
  let O = useMemo(() => [...S, ...(C ?? [])], [S, C]);
  return a === VariableResolvedDataType.COLOR && "color-picker" === s && u ? jsx(es, {
    styleType: s4.FILL,
    selectedStyle: e?.type === PrimaryWorkflowEnum.STYLE ? e : null,
    render: ({
      dsStyles: i,
      isLoading: o
    }) => jsx($$el3, {
      currentView: r,
      disabledVariableIds: t,
      dsStyles: i,
      isLoading: o || x,
      keepOpenOnItemSelect: h,
      onClose: _,
      onSearchInputChange: f,
      onStyleSelected: u,
      onVariableSelected: c,
      pickerControls: T(O),
      pickerType: s,
      recordingKey: d,
      requestedTypes: m,
      resolvedType: a,
      searchInputRef: b,
      searchQuery: g,
      selectedItem: e,
      variableFilters: y,
      variableScopes: E,
      variableSets: O,
      variables: w
    })
  }) : p ? jsx(ea, {
    render: i => jsx($$el3, {
      componentProps: i,
      currentView: r,
      disabledVariableIds: t,
      dsStyles: [],
      isLoading: x,
      onClose: _,
      onComponentPropSelected: p,
      onSearchInputChange: f,
      onVariableSelected: c,
      pickerControls: T(O),
      pickerType: s,
      recordingKey: d,
      requestedTypes: m,
      resolvedType: a,
      searchInputRef: b,
      searchQuery: g,
      selectedItem: e,
      variableFilters: y,
      variableScopes: E,
      variableSets: O,
      variables: w
    }),
    pickerType: s,
    requestedTypes: m,
    resolvedType: a
  }) : jsx($$el3, {
    currentView: r,
    disabledVariableIds: t,
    dsStyles: [],
    isLoading: x,
    onClose: _,
    onSearchInputChange: f,
    onVariableSelected: c,
    pickerControls: T(O),
    pickerType: s,
    recordingKey: d,
    requestedTypes: m,
    resolvedType: a,
    searchInputRef: b,
    searchQuery: g,
    selectedItem: e,
    variableFilters: y,
    variableScopes: E,
    variableSets: O,
    variables: w
  });
}
function ei({
  styleType: e,
  render: t
}) {
  return t(Je(e));
}
function ea({
  render: e,
  pickerType: t,
  requestedTypes: r,
  resolvedType: n
}) {
  return e(useCallback(() => {
    let e = (() => {
      switch (t) {
        case "set-variable":
          return getFeatureFlags().ds_variable_props_proto ? VariablesBindings.getComponentPropsForSetVariableList() : [];
        case "prop-assignment":
          return [];
        default:
          return VariablesBindings.getComponentPropsForFieldsList();
      }
    })();
    let i = [];
    e && Object.keys(e).length > 0 && e.forEach(e => {
      i.push(...LV(e.values, r, n));
    });
    return i;
  }, [t, r, n])());
}
function es({
  styleType: e,
  selectedStyle: t,
  render: r
}) {
  let a = Je(e);
  let s = AH(t?.key || null, t);
  let {
    status,
    stylesByFileKey
  } = Zk({
    styleType: s4.FILL,
    initialSelectedSubscribedStyle: s
  });
  let c = useMemo(() => Object.values(stylesByFileKey).reduce((e, {
    styles: t
  }) => (e.push(...t), e), []), [stylesByFileKey]);
  let u = useMemo(() => a.concat(c), [a, c]);
  return jsx(mY, {
    children: r({
      isLoading: "loaded" !== status,
      dsStyles: u
    })
  });
}
function eo(e) {
  let t = Px({
    includeSubtree: !0
  });
  return useMemo(() => e.some(e => "MIXED" === ("LOCAL" === e.subscriptionStatus ? t[e.keyForPublish] : t[e.key])), [e, t]);
}
export function $$el3({
  variables: e,
  variableSets: t,
  dsStyles: r,
  currentView: a,
  selectedItem: l,
  disabledVariableIds: c,
  resolvedType: u,
  pickerType: _,
  recordingKey: f,
  isLoading: y,
  onVariableSelected: b,
  onStyleSelected: A,
  onClose: N,
  keepOpenOnItemSelect: D,
  requestedTypes: k,
  searchQuery: F,
  onSearchInputChange: z,
  variableScopes: W,
  variableFilters: q,
  onComponentPropSelected: Q,
  componentProps: ee,
  onCMSFieldSelected: et,
  cmsCollectionItem: er,
  pickerControls: en,
  searchInputRef: ei
}) {
  _$$D({
    isLoading: y ?? !1,
    eventName: "variables.variable_picker_load_time"
  });
  let ea = useOpenFileLibraryKey();
  let es = Um();
  let el = l ? tx(l) : null;
  let [ec, eu] = useState(null);
  useRef(null).current = ec;
  let e_ = eo(t);
  let eh = F.length > 0 || e_ ? "list" : a.layout;
  let em = s1();
  let eg = useMemo(() => J({
    requestedTypes: k,
    resolvedType: u ?? null
  }), [k, u]);
  let ef = A ? [LibraryItemTypeEnum.VARIABLE, LibraryItemTypeEnum.STYLE] : [LibraryItemTypeEnum.VARIABLE];
  let eE = _$$A(eg, l?.type !== "CMS_FIELD" ? l : null, ef);
  let ey = sZ();
  let eb = Fl();
  let eT = Oe(ey) && NX(eb);
  let eI = ed({
    selectedItem: l,
    resolvedType: u,
    requestedTypes: k,
    onStyleSelected: A
  });
  let eS = B8();
  let [ev, eA] = useState(() => getFeatureFlags().dse_collapse_variable_and_style_libraries ? new Set(eI.filter(({
    libraryKey: e
  }) => eS(e)).map(({
    libraryKey: e
  }) => e)) : new Set());
  let ex = useCallback(e => {
    eA(t => {
      let r = new Set(t);
      r.has(e) ? r.$$delete(e) : r.add(e);
      return r;
    });
  }, [eA]);
  let eN = useMemo(() => {
    let e = {};
    (eT ? eI : eE).forEach(t => {
      e[t.libraryKey] = t.fileName;
    });
    return e;
  }, [eE, eI, eT]);
  let eC = useMemo(() => k ? e.filter(e => k.includes(e.resolvedType)) : e.filter(e => void 0 === u || e.resolvedType === u), [e, u, k]);
  let ew = useMemo(() => W ? eC.filter(e => tx(e) === el || AQ(e, W)) : eC, [eC, W, el]);
  let eO = qF(ew, F);
  let eR = useMemo(() => F.length > 0 ? eO : eO.filter(e => {
    let t = e.resolvedType;
    let r = q?.[_$$t2.HIDE_IN_DEFAULT_VIEW];
    if (r && r[t]) return !1;
    let n = q?.[_$$t2.MUST_INCLUDE_ONE_OF];
    if (n && n[t]?.length) {
      let r = n[t];
      if ("LIBRARY" === e.subscriptionStatus || r && !Object.values(e.modeValues).some(e => {
        if (e.type === VariableDataType.STRING) {
          let t = e.value.trim().toLocaleLowerCase();
          return r?.some(e => e === t);
        }
        return !1;
      })) return !1;
    }
    return !0;
  }), [eO, F, q]);
  let eL = bT(r, F);
  let eP = tZ(ee ?? [], F);
  let eD = Ui(er?.cmsFields ?? [], F);
  let ek = useMemo(() => {
    if ("ALL_LIBRARIES" === a.type) return dC({
      variables: eR,
      variableSets: t,
      styles: eL,
      componentProps: eP,
      layout: eh,
      fileNamesByLibraryKey: eN,
      collapsedLibraryKeys: ev,
      openFileLibraryKey: ea,
      slideThemeId: em
    });
    if ("CMS_FIELDS" === a.type) return kE({
      collectionName: er?.collectionName,
      cmsFields: eD,
      fieldTypes: er?.fieldTypes ?? []
    });
    if (u === VariableResolvedDataType.COLOR) return w$({
      variables: eR,
      variableSets: t,
      styles: eL,
      layout: eh,
      isLocal: "LOCAL_VARIABLES" === a.type,
      slideThemeId: em
    });
    {
      let e = HK({
        variables: eR,
        variableSets: t,
        layout: eh
      });
      if (!Q) return e;
      let r = dh({
        componentProps: eP
      });
      r.length > 0 && e.length > 0 && r.push({
        type: Yc.SECTION_HEADER,
        name: getI18nString("variables.binding_ui.set_labels.variables_created_in_file")
      });
      return r.concat(e);
    }
  }, [a.type, u, eR, t, eL, eP, eh, eN, ev, ea, em, er?.collectionName, er?.fieldTypes, eD, Q]);
  let eM = useRef([]);
  eM.current = ek;
  let eF = useRef(null);
  let ej = useCallback(() => {
    eF.current?.scrollToTop();
    let e = function (e) {
      let t = null;
      for (let r of e) if ("items" in r) {
        t = r.items[0];
        break;
      }
      return t;
    }(eM.current);
    eu(e ? tx(e) ?? null : null);
  }, []);
  let eU = useCallback((e, t) => {
    let r = oM(eM.current, e);
    r >= 0 && eF.current?.scrollToIndex(r, t);
    eu(e);
  }, []);
  let eB = useCurrentFileKey();
  let eG = useContext(d2);
  g$({
    variables: e,
    variableSets: t,
    subscribedLibraries: eE,
    variableRerankingData: eG,
    fileKey: eB ?? "",
    orgId: ey?.id
  });
  let eV = useLatestRef(F);
  useLayoutEffect(() => {
    !y && eV !== F && (F.length > 0 || !el ? ej() : F || eU(el, {
      align: "center"
    }));
  }, [F, y, ej, eU, el, eV]);
  let {
    showStyleContextMenu,
    hideStyleContextMenu
  } = XM();
  let eW = useCallback((e, t) => {
    e.type === PrimaryWorkflowEnum.STYLE && showStyleContextMenu({
      dsStyle: e,
      position: t
    });
  }, [showStyleContextMenu]);
  let eK = useCallback(e => {
    let t = tx(e);
    t && eu(t);
  }, [eu]);
  let eY = useCallback(e => {
    ec === tx(e) && eu(null);
  }, [ec, eu]);
  let e$ = useCallback(e => {
    if (e.type === Yc.FILE_NAME) {
      getFeatureFlags().dse_collapse_variable_and_style_libraries && e.libraryKey && ex(e.libraryKey);
      return;
    }
    e.type === PrimaryWorkflowEnum.VARIABLE ? b(e, eG) : e.type === PrimaryWorkflowEnum.STYLE ? A?.(e, {
      fromSearch: F.length > 0
    }) : "COMPONENT_PROP" === e.type ? Q?.(e) : "CMS_FIELD" === e.type && et?.(e);
    D || N();
  }, [D, b, A, F.length, Q, ex, et, N, eG]);
  let eX = useCallback(e => {
    z(e.currentTarget.value);
  }, [z]);
  let eq = useCallback(t => {
    if (t.keyCode === Uz.ENTER) {
      let t = function ({
        highlightedItemID: e,
        variables: t,
        dsStyles: r,
        componentProps: n,
        cmsFields: i
      }) {
        return e ? [...t, ...r, ...n, ...i].find(t => tx(t) === e) ?? null : null;
      }({
        variables: e,
        dsStyles: r,
        componentProps: eP,
        cmsFields: eD,
        highlightedItemID: ec
      });
      t ? e$(t) : l && b();
      N();
    } else t.keyCode === Uz.ESCAPE ? N() : (Nt(t, !1) || c2(t, !1) || yn(t.code, !1) || lv(t.code, !1)) && (ec ? (eF.current?.getVirtualItems() ?? []).some(e => {
      let t = eM.current[e.index];
      return "items" in t && t.items.some(e => tx(e) === ec);
    }) || eU(ec, {
      align: "center"
    }) : el ? eU(el, {
      align: "center"
    }) : ej());
  }, [e, r, eP, eD, ec, N, e$, l, b, el, eU, ej]);
  return jsxs(dP, {
    recordingKey: f,
    onClick: hideStyleContextMenu,
    children: [jsx("div", {
      className: PP,
      children: jsx(ep, {
        inputRef: ei,
        value: F,
        onChange: eX,
        onKeyDown: eq,
        recordingKey: generateRecordingKey(f, "input")
      })
    }), en, jsx(Id, {
      className: p()({
        [_$$eB]: u !== VariableResolvedDataType.COLOR,
        [a2]: !0
      }),
      children: y ? jsx("div", {
        className: _$$S,
        style: {
          height: Ih({
            layout: eh
          })
        },
        children: jsx(_$$k, {})
      }) : 0 === eL.length && 0 === eR.length && 0 === eP.length && 0 === eD.length ? Z(F, eh, !!Q, u) : "list" === eh ? jsx(HZ, {
        ref: eF,
        className: jG,
        disabledVariableIds: c,
        highlightedItemID: ec,
        listItems: ek,
        onItemContextMenu: eW,
        onItemHighlight: eK,
        onItemMouseLeave: eY,
        onItemSelect: e$,
        pickerType: _,
        recordingKey: f,
        selectedItemID: el ?? null
      }) : jsx(Rm, {
        ref: eF,
        className: jG,
        highlightedItemID: ec,
        listItems: ek,
        onItemContextMenu: eW,
        onItemHighlight: eK,
        onItemMouseLeave: eY,
        onItemSelect: e$,
        recordingKey: f,
        selectedItemID: el ?? null
      })
    }), es?.type === A7 && jsx(ip, {
      dsStyle: es.data.dsStyle,
      position: es.data.position,
      recordingKey: generateRecordingKey(f, "contextMenu")
    })]
  });
}
function ed({
  selectedItem: e,
  resolvedType: t,
  requestedTypes: r,
  onStyleSelected: n
}) {
  let a = useMemo(() => J({
    requestedTypes: r,
    resolvedType: t ?? null
  }), [r, t]);
  let s = n ? [LibraryItemTypeEnum.VARIABLE, LibraryItemTypeEnum.STYLE] : [LibraryItemTypeEnum.VARIABLE];
  let o = _$$A(a, e?.type !== "CMS_FIELD" ? e : null, s);
  let l = sZ();
  let d = Fl();
  let c = Oe(l) && NX(d);
  return useMemo(() => {
    if (c) {
      let e = o.map(({
        fileKey: e,
        libraryKey: t,
        fileName: r
      }) => ({
        key: e,
        name: r,
        libraryKey: t
      }));
      k9({
        libraries: e,
        approvedLibraryKeysByResourceType: d
      });
      return e.map(({
        key: e,
        libraryKey: t,
        name: r
      }) => ({
        fileKey: e,
        fileName: r,
        libraryKey: t
      }));
    }
    return o.sort((e, t) => e.fileName.localeCompare(t.fileName));
  }, [o, c, d]);
}
function ec({
  variableSets: e,
  currentView: t,
  setCurrentView: r,
  onToggleLayout: a,
  selectedItem: s,
  resolvedType: o,
  setControlRightButtons: l,
  recordingKey: d,
  onStyleSelected: c,
  requestedTypes: u,
  searchQuery: p
}) {
  let _ = ed({
    selectedItem: s,
    resolvedType: o,
    requestedTypes: u,
    onStyleSelected: c
  });
  let h = eo(e);
  let m = 0 === p.length;
  let g = p.length > 0 || h ? "list" : t.layout;
  let f = useMemo(() => ({
    ...t,
    layout: g
  }), [t, g]);
  return jsx(_$$Z, {
    recordingKey: d,
    currentView: f,
    resolvedType: o,
    subscribedLibraries: _,
    setControlRightButtons: l,
    onSetSelect: r,
    onToggleLayoutIconClick: m ? a : void 0,
    disableGridLayout: h ? _$$t3.MIXED_MODES : void 0
  });
}
export function $$eu0({
  recordingKey: e,
  onClose: t
}) {
  let r = useHandleMouseEvent(e, "mousedown", useCallback(e => {
    t();
    e.stopPropagation();
  }, [t]));
  return dH() === DesignGraphElements.DROPPER_COLOR ? null : jsx(_$$n.div, {
    className: ZA,
    onMouseDown: r
  });
}
function ep({
  inputRef: e,
  value: t,
  onChange: r,
  onKeyDown: a,
  recordingKey: s
}) {
  let o = useRef(null);
  _$$h(() => {
    o.current && o.current.focus();
  });
  return jsxs("div", {
    className: ON,
    children: [jsx(_$$B, {
      className: qc,
      svg: _$$A2
    }), jsx(jT, {
      ref: Ay(e, o),
      className: Rt,
      value: t,
      onChange: r,
      noBorderOnFocus: !0,
      placeholder: getI18nString("variables.binding_ui.search_placeholder"),
      onKeyDown: a,
      recordingKey: s
    })]
  });
}
export const $3 = $$eu0;
export const Rp = $$Q1;
export const YK = $$er2;
export const di = $$el3;