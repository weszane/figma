import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useMemo, useId, useState, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { c2 } from "../905/382883";
import { K as _$$K } from "../905/443068";
import { f as _$$f } from "../905/335032";
import { getFeatureFlags } from "../905/601108";
import c from "../vendor/223926";
import { Ay } from "../905/612521";
import { Pt } from "../figma_app/806412";
import { logError } from "../905/714362";
import { B as _$$B } from "../905/714743";
import { getI18nString } from "../905/303541";
import { Wo } from "../figma_app/933328";
import { showModalHandler } from "../905/156213";
import { UK } from "../figma_app/740163";
import { ol } from "../figma_app/852050";
import { getObservableOrFallback } from "../figma_app/84367";
import { Sh } from "../figma_app/889655";
import { Wv } from "../figma_app/633080";
import { Ib } from "../905/129884";
import { r6 } from "../905/542608";
import { T as _$$T } from "../figma_app/472024";
import { l6, c$, sK } from "../905/794875";
import { s as _$$s } from "../cssbuilder/589278";
import { fn } from "../figma_app/811257";
import { No } from "../1528/842139";
import { iw, UE, Mo, Ws, Yn, kN, iR, d2, hZ, ZP, Yc } from "../figma_app/152690";
import { T as _$$T2, Z as _$$Z } from "../figma_app/608982";
import { ai, UZ } from "../1528/277451";
import { A as _$$A } from "../1617/230645";
var u = c;
let D = forwardRef(function ({
  labelTx: e,
  input: t,
  icon: n
}, l) {
  return jsx(fn, {
    ref: l,
    leftInput: jsx("span", {
      className: _$$s.textBodyMedium.pl1.flex.$,
      children: e
    }),
    rightInput: t,
    icon: n,
    leftLabel: null,
    rightLabel: null
  });
});
function A() {
  return jsx("div", {
    className: "x10l6tqk xl8wat7 x1neqaik x1vjfegm",
    children: jsx("svg", {
      viewBox: "0 0 18 24",
      className: "xxk0z11",
      children: jsx("path", {
        className: "x8mtndw xbocpqy",
        strokeWidth: "1",
        d: "M -1 0.5h 1a 5 5 0 0 1 5 5q 0 4 4 4 q 4 0 4 -4a 5 5 0 0 1 5 -5h 1v 23h -1a 5 5 0 0 1 -5 -5q 0 -4 -4 -4 q -4 0 -4 4a 5 5 0 0 1 -5 5h -1z"
      })
    })
  });
}
function w(e) {
  let {
    leftInput,
    rightInput,
    icon
  } = e;
  return jsx(fn, {
    leftInput: jsxs("div", {
      className: "x78zum5 x6s0dn4 x1n2onr6",
      children: [jsx(A, {}), jsx("div", {
        className: "xh8yej3 x1pc0aet",
        children: leftInput
      })]
    }),
    leftLabel: getI18nString("variables.create_modal.collection_label"),
    rightLabel: getI18nString("variables.authoring_modal.action_bar.new_mode"),
    rightInput: jsx("div", {
      className: "x78zum5 x6s0dn4 x1n2onr6",
      children: jsx("div", {
        className: "xh8yej3 x1pc0aet",
        children: rightInput
      })
    }),
    icon
  });
}
let F = "variable_mode_entries--infoIconContainer--DmUPj";
let M = "variable_mode_entries--infoIcon--JylKl";
let B = "variable_mode_entries--infoOption--fKiWW";
let G = l6;
let U = c$;
let K = l6;
let H = c$;
function V({
  modeOptions: e,
  inheritedModeID: t,
  isShowingGuids: n
}) {
  return {
    format: a => {
      if (a === iw.LEARN_MORE) return getI18nString("variables.modes.option.learn_more");
      if (a === iw.REVIEW_UPDATES) return getI18nString("variables.modes.option.review_updates");
      if (a === UE) {
        if (t === Mo) return getI18nString("variables.mode_properties_panel.select.option.auto_with_name", {
          modeName: getI18nString("variables.mode_properties_panel.select.option.mixed")
        });
        let n = e.find(e => c2(e.modeId, t))?.name;
        return n ? getI18nString("variables.mode_properties_panel.select.option.auto_with_name", {
          modeName: n
        }) : getI18nString("variables.mode_properties_panel.select.option.auto");
      }
      {
        if (a === Ws) {
          0 === e.length && logError("variables", "No mode options available");
          return getI18nString("variables.mode_properties_panel.select.option.default_with_name", {
            modeName: e[0].name ?? ""
          });
        }
        if (a === Mo) return getI18nString("variables.mode_properties_panel.select.option.mixed");
        if (a === Yn) return getI18nString("variables.mode_properties_panel.select.option.deleted");
        let t = e.find(e => c2(e.modeId, a));
        return t ? n ? `${t.name} (${t.modeId.guid})` : t.name : (logError("variables", "Option does not exist in modeOptions"), getI18nString("variables.mode_properties_panel.select.option.deleted"));
      }
    },
    isEqual: (e, t) => c2(e, t)
  };
}
export function $$$0({
  fill: e,
  showExplicitOnly: t,
  showInheritedModeOption: n,
  recordingKey: i
}) {
  let s = useDispatch();
  let o = kN();
  let d = iR();
  let c = d2();
  let u = getObservableOrFallback(UK().showGuids);
  let p = useSelector(Sh);
  let m = useMemo(() => JSON.stringify(p), [p]);
  let _ = hZ();
  let E = Object.entries(o);
  let g = useMemo(() => E.sort(([e, t], [n, a]) => t.libraryKey !== a.libraryKey ? t.libraryKey ? a.libraryKey ? t.libraryKey.localeCompare(a.libraryKey) : 1 : -1 : t.collectionName.localeCompare(a.collectionName)), [E]);
  return jsx(Fragment, {
    children: g.map(([l, r]) => {
      let o = r.inheritMode;
      let p = r.explicitMode;
      return jsx($$W1, {
        explicitModeID: p,
        fill: e,
        inheritedModeID: o,
        isShowingGuids: u,
        modeOptions: r.modeOptions,
        onChange: (e, t) => {
          let n = "object" == typeof e && !!e.extendedCollectionId;
          (c[l] || n) && d[l] ? s(Wo({
            item: d[n ? e.collectionKey : l],
            callback: t => {
              _(l, e);
            }
          })) : _(l, e, t);
        },
        recordingKey: Pt(i, `variableModeEntry-${t}`),
        showExplicitOnly: t,
        showInheritedModeOption: void 0 === n || n,
        variableSetKey: l,
        variableSetName: r.collectionName
      }, `variable-mode-entry-${l}-${t}-${m}`);
    })
  });
}
export function $$W1(e) {
  let {
    fill,
    showExplicitOnly,
    variableSetName,
    variableSetKey,
    modeOptions,
    explicitModeID,
    inheritedModeID,
    isShowingGuids,
    recordingKey,
    showInheritedModeOption,
    hideRemoveButton,
    onChange
  } = e;
  let W = useDispatch();
  let Y = useSelector(e => e.dropdownShown);
  let X = ZP();
  let q = explicitModeID && explicitModeID !== Mo && modeOptions.every(e => !c2(e.modeId, explicitModeID));
  let Z = Ws;
  q ? Z = Yn : explicitModeID ? Z = explicitModeID : inheritedModeID && (Z = showInheritedModeOption ? UE : inheritedModeID);
  let J = useId();
  let Q = V({
    modeOptions,
    inheritedModeID,
    isShowingGuids
  }).format(Z);
  let [ee, et] = useState(showExplicitOnly);
  let en = useCallback((e, t, n) => {
    onChange(e, n);
    void 0 !== t && et(t);
  }, [onChange]);
  let ea = ol();
  let el = _$$T2(variableSetKey, modeOptions, explicitModeID, inheritedModeID ?? null, ea);
  let er = getFeatureFlags().ds_extended_collections && el.collectionsInFamily.size > 1;
  let ei = useMemo(() => getFeatureFlags().ds_extended_collections ? function (e, t) {
    let n = [];
    let l = jsx("div", {
      className: F,
      children: jsx(_$$B, {
        className: M,
        svg: _$$A
      })
    });
    for (let t of e.formattedModeOptions) t.type === _$$Z.Standard && t.modeId.collectionKey === e.activeCollectionKeyInFamily && n.push(jsx(U, {
      value: t.modeId,
      fullWidth: !0,
      rightSettingsIcon: t.isCompatible ? void 0 : l
    }, `mode-option-${t.modeId.guid}`));
    e.hasIncompatibleMode && (n.push(jsx(sK, {})), n.push(jsx(U, {
      value: t,
      iconToReplaceCheck: l,
      additionalStylesClassName: B
    }, t === iw.REVIEW_UPDATES ? "incompatible-modes-updates" : "incompatible-modes-learn-more")));
    return n;
  }(el, X) : function (e, t, n, l) {
    let r = [];
    if (0 === t.length) return r;
    let i = u()(t, e => e.modeId.collectionKey);
    let s = jsx("div", {
      className: F,
      children: jsx(_$$B, {
        className: M,
        svg: _$$A
      })
    });
    Object.entries(i).map(([t, l]) => {
      for (let i of (r.length > 0 && l.length > 0 && r.push(jsx(sK, {})), l)) r.push(jsx(U, {
        value: i.modeId,
        recordingKey: Pt(e, `varSetSelect=${t}`, `value=${i.modeId.guid}`, `varSetKey=${t}`),
        fullWidth: !0,
        rightSettingsIcon: i.isCompatible ? void 0 : s
      }, `mode-option-${t}-${i.modeId.guid}-${n}`));
    });
    t.some(e => !e.isCompatible) && (r.push(jsx(sK, {})), l === iw.REVIEW_UPDATES ? r.push(jsx(U, {
      value: iw.REVIEW_UPDATES,
      iconToReplaceCheck: s,
      recordingKey: Pt(e, "incompatible-modes-review-updates"),
      additionalStylesClassName: B
    }, "incompatible-modes-updates")) : l === iw.LEARN_MORE && r.push(jsx(U, {
      value: iw.LEARN_MORE,
      iconToReplaceCheck: s,
      recordingKey: Pt(e, "incompatible-modes-learn-more"),
      additionalStylesClassName: B
    }, "incompatible-modes-learn-more")));
    return r;
  }(recordingKey, modeOptions, showExplicitOnly, X), [recordingKey, modeOptions, showExplicitOnly, X, el]);
  let es = useMemo(() => ({
    format: e => el.collectionsInFamily.get(e) ?? e,
    isEqual: (e, t) => e === t
  }), [el.collectionsInFamily]);
  let eo = useCallback(e => {
    if (e === el.activeCollectionKeyInFamily) onChange(Z, Q);else {
      let t = modeOptions.find(t => t.modeId.collectionKey === e && t.isCompatible);
      if (!t) return;
      onChange(t.modeId, t.name);
    }
    et(!1);
  }, [el.activeCollectionKeyInFamily, Z, Q, modeOptions, onChange]);
  if (modeOptions.length < 2 || ee && !explicitModeID) return null;
  let ed = Z === Mo;
  let ec = !!inheritedModeID;
  let eu = er ? inheritedModeID === Mo || inheritedModeID?.collectionKey === el.activeCollectionKeyInFamily : showInheritedModeOption;
  let ep = !er || modeOptions[0]?.modeId.collectionKey === el.activeCollectionKeyInFamily;
  let eh = function (e, t, n, l, r, i, s) {
    let o = [];
    n && o.push(jsx(U, {
      value: Mo,
      recordingKey: Pt(e, "value:MIXED"),
      selected: !0
    }, Mo), jsx(sK, {}));
    l ? r && o.push(jsx(U, {
      value: UE,
      recordingKey: Pt(e, "value:INHERIT")
    }, UE), jsx(sK, {})) : s.length > 0 && i && o.push(jsx(U, {
      value: Ws,
      recordingKey: Pt(e, "value:DEFAULT"),
      disabled: !s[0].isCompatible,
      selected: t === Ws
    }, Ws), jsx(sK, {}));
    t === Yn && o.push(jsx(U, {
      value: Yn,
      recordingKey: Pt(e, "value:DELETED"),
      disabled: !0,
      selected: !0
    }, Yn));
    return o;
  }(recordingKey, Z, ed, ec, eu, ep, modeOptions);
  let em = jsxs(G, {
    ariaLabelledBy: J,
    chevronClassName: ai,
    dispatch: W,
    dropdownAlignment: "right",
    dropdownShown: Y,
    dropdownWidth: 200,
    fill,
    formatter: V({
      modeOptions,
      inheritedModeID,
      isShowingGuids
    }),
    id: `var-set-mode-${variableSetKey}-${showExplicitOnly}`,
    inputClassName: UZ,
    onChange: e => {
      e === iw.LEARN_MORE ? Ay.unsafeRedirect(Yc, "_blank") : e === iw.REVIEW_UPDATES ? W(showModalHandler({
        type: _$$T,
        data: {
          initialTab: Wv.UPDATES,
          entrypoint: r6.VARIABLE_MODE_INCOMPATIBLE_REVIEW_UPDATES_DROPDOWN_OPTION
        }
      })) : en(e, !1, V({
        modeOptions,
        inheritedModeID,
        isShowingGuids
      }).format(e));
    },
    property: Z,
    recordingKey: Pt(recordingKey, `varSetSelect=${variableSetKey}`),
    tooltip: Q,
    children: [...eh, ...ei]
  });
  let e_ = jsx("span", {
    className: "variable_mode_entries--ui3VariableSetName--eqW9C variable_mode_entries--variableSetName--hmoV4",
    "data-testid": "variableModeEntry",
    children: variableSetName
  });
  let eE = jsx(_$$K, {
    "aria-label": getI18nString("general.remove"),
    onClick: () => en("INHERIT", !0),
    actionOnPointerDown: !0,
    htmlAttributes: {
      "data-tooltip": getI18nString("general.remove"),
      "data-tooltip-type": Ib.TEXT
    },
    children: jsx(_$$f, {})
  });
  if (er) {
    let e = jsx(K, {
      dispatch: W,
      dropdownAlignment: "right",
      dropdownShown: Y,
      dropdownWidth: 200,
      fill,
      formatter: es,
      id: "variable-set-in-family-select",
      inputClassName: UZ,
      onChange: eo,
      property: el.activeCollectionKeyInFamily,
      recordingKey: Pt(recordingKey, `varSetInFamilySelect=${variableSetKey}`),
      children: Array.from(el.collectionsInFamily.entries()).map(([e, t]) => jsx(H, {
        value: e,
        recordingKey: Pt(recordingKey, `varSetInFamilyOption=${e}`),
        children: t
      }, `var-set-in-family-option-${e}`))
    });
    return jsx(w, {
      leftInput: e,
      rightInput: em,
      icon: hideRemoveButton ? void 0 : eE
    });
  }
  return showInheritedModeOption && !hideRemoveButton ? jsx(D, {
    labelTx: e_,
    input: em,
    icon: eE
  }) : jsx(No, {
    label: e_,
    labelId: J,
    input: em
  });
}
export const wu = $$$0;
export const yj = $$W1;