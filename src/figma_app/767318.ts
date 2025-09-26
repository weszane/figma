import { jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { deepEqual } from "../905/382883";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import d from "../vendor/181640";
import u from "../vendor/104014";
import _ from "lodash-es/mapValues";
import { customHistory } from "../905/612521";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { generateRecordingKey } from "../figma_app/878298";
import { useSprigWithSampling } from "../905/99656";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { useDevModeFocusId } from "../figma_app/88239";
import { N as _$$N } from "../figma_app/673778";
import { Wo } from "../figma_app/933328";
import { showModalHandler } from "../905/156213";
import { EditorPreferencesApi } from "../figma_app/740163";
import { ol } from "../figma_app/852050";
import { useDropdownState } from "../905/848862";
import { getLibraryNames } from "../905/506188";
import { getObservableOrFallback } from "../figma_app/84367";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { LibraryTabEnum } from "../figma_app/633080";
import { r6 } from "../905/542608";
import { T as _$$T } from "../figma_app/472024";
import { j as _$$j } from "../905/834956";
import { Jo, hZ, ZP, iw, UE, Ws, Mo, Yc, lk, FR, iR } from "../figma_app/152690";
import { T as _$$T2, Z } from "../figma_app/608982";
import { A as _$$A2 } from "../1617/230645";
var c = d;
var p = u;
var h = _;
let F = "variables_apply_mode_dropdown--infoIcon--BO6TZ";
let $$U2 = "VARIABLES_APPLY_MODE_DROPDOWN";
let $$B1 = _$$l("[INVALID_LIBRARY_KEY]");
export function $$G0(e) {
  let {
    showLibrarySets,
    recordingKey,
    consumptionTarget
  } = e;
  let d = useDispatch();
  let {
    Sprig
  } = useSprigWithSampling();
  let _ = function (e, t, r) {
    let o = useDispatch();
    let d = getObservableOrFallback(EditorPreferencesApi().showGuids);
    let u = t === Jo.FOCUS_NODE;
    let _ = hZ(t);
    let g = useCallback((e, t, r) => {
      u ? _$$N(() => _(e, t, r)) : _(e, t, r);
    }, [_, u]);
    let E = ZP();
    let T = t === Jo.FOCUS_NODE ? iw.LEARN_MORE : E;
    let N = useCallback((e, t, r, i, a) => {
      let c = r ?? (i ? UE : Ws);
      let u = i === Mo ? getI18nString("variables.mode_properties_panel.select.option.mixed") : t.find(e => deepEqual(e.modeId, i))?.name;
      let p = jsx(SvgComponent, {
        className: F,
        svg: _$$A2
      });
      let _ = t.some(e => !e.isCompatible);
      let h = (e, t) => e ? t : [];
      return [...h(c === Mo, [{
        recordingKey: "mode-MIXED",
        displayText: getI18nString("variables.mode_properties_panel.select.option.mixed"),
        isChecked: !0
      }]), ...h(!!i, [{
        recordingKey: "mode-INHERIT",
        displayText: u ? getI18nString("variables.mode_properties_panel.select.option.auto_with_name", {
          modeName: u
        }) : getI18nString("variables.mode_properties_panel.select.option.auto"),
        isChecked: c === UE,
        callback: () => {
          g(e, UE, u);
        }
      }]), ...h(!i && t.length > 0, [{
        recordingKey: "mode-DEFAULT",
        displayText: getI18nString("variables.mode_properties_panel.select.option.default_with_name", {
          modeName: t[0].name
        }),
        rightIcon: t[0].isCompatible ? void 0 : p,
        isChecked: c === Ws,
        callback: () => {
          g(e, Ws, t[0].name);
        }
      }]), ...function (e, t, r, i, a, o, d, c) {
        if (!e.length) return [];
        let u = jsx(SvgComponent, {
          className: F,
          svg: _$$A2
        });
        let p = a ?? (i ? UE : Ws);
        let _ = [];
        let h = new Set(e.map(e => e.modeId.collectionKey)).size > 1;
        let m = new Set();
        for (let n of e) {
          getFeatureFlags().ds_extended_collections && h && !m.has(n.modeId.collectionKey) && (m.size > 0 && _.push({
            separator: !0,
            displayText: ""
          }), _.push({
            recordingKey: "mode-collection-header-" + n.collectionName,
            displayText: n.collectionName,
            header: !0
          }), m.add(n.modeId.collectionKey));
          _.push(function (e) {
            return {
              recordingKey: "mode-" + e.modeId.guid + (h ? `-${e.modeId.collectionKey}` : ""),
              displayText: o ? `${e.name} (${e.modeId.guid})` : e.name,
              callback: () => {
                let n = "object" == typeof e.modeId && "extendedCollectionId" in e.modeId;
                let i = c ? c[n ? e.modeId.collectionKey : d] : null;
                i ? t(Wo({
                  item: i,
                  callback: t => {
                    r(d, e.modeId, e.name);
                  }
                })) : r(d, e.modeId, e.name);
              },
              rightIcon: e.isCompatible ? void 0 : u,
              isChecked: deepEqual(e.modeId, p)
            };
          }(n));
        }
        return [{
          separator: !0,
          displayText: ""
        }, ...(a && a !== Mo && e.every(e => !deepEqual(e.modeId, a)) ? [{
          recordingKey: "mode-DELETED",
          displayText: getI18nString("variables.mode_properties_panel.select.option.deleted"),
          disabled: !0,
          isChecked: !0
        }] : []), ..._];
      }(t, o, g, i, r, d, e, a), ...h(_ && T === iw.REVIEW_UPDATES, [{
        separator: !0,
        displayText: ""
      }, {
        recordingKey: "mode-review-update",
        displayText: getI18nString("variables.modes.option.review_updates"),
        callback: () => {
          o(showModalHandler({
            type: _$$T,
            data: {
              initialTab: LibraryTabEnum.UPDATES,
              entrypoint: r6.VARIABLE_APPLY_MODE_DROPDOWN_INCOMPATIBLE_LINK
            }
          }));
        },
        iconType: "info"
      }]), ...h(_ && T === iw.LEARN_MORE, [{
        separator: !0,
        displayText: ""
      }, {
        recordingKey: "mode-learn-more",
        displayText: getI18nString("variables.modes.option.learn_more"),
        callback: () => {
          customHistory.unsafeRedirect(Yc, "_blank");
        },
        iconType: "info"
      }])];
    }, [T, g, d, o]);
    let O = lk(t);
    let D = FR(t);
    let M = iR();
    let U = useMemo(() => {
      if (!e) return D;
      {
        let e = h()(M, (e, t) => ({
          collectionID: e.node_id,
          collectionName: e.name,
          modeOptions: e.modes?.map(t => ({
            modeId: {
              guid: t.id,
              collectionKey: e.key,
              extendedCollectionId: e.isExtension ? e.node_id : null
            },
            name: t.name,
            sortPosition: t.sortPosition,
            isCompatible: !0,
            collectionName: e.name
          })) || [],
          explicitMode: null,
          inheritMode: null,
          libraryKey: e.library_key
        }));
        return c()({}, D, e);
      }
    }, [M, e, D]);
    let G = getLibraryNames(p()(U, e => e.libraryKey ?? $$B1));
    let H = useMemo(() => Object.entries(U).reduce((e, [t, r]) => {
      if (O[t]) return e;
      let n = $$B1;
      r.libraryKey && G.data?.[r.libraryKey] && (n = r.libraryKey);
      let i = e[n];
      i ? i[t] = r : e[n] = {
        [t]: r
      };
      return e;
    }, {}), [O, U, G]);
    let z = useMemo(() => Object.keys(H).sort(), [H]);
    let W = ol();
    return useMemo(() => {
      let e = [];
      for (let [t, n] of (Object.values(O).length > 0 && e.push({
        recordingKey: generateRecordingKey(r, "local"),
        displayText: getI18nString("variables.mode_properties_panel.assets_created_in_file.subheading"),
        header: !0
      }), Object.entries(O))) {
        let i = getFeatureFlags().ds_new_mode_dropdown_data ? V(t, n.modeOptions, n.explicitMode, n.inheritMode, o, g, d, T, W) : N(t, n.modeOptions, n.explicitMode, n.inheritMode);
        e.push({
          recordingKey: generateRecordingKey(r, t),
          displayText: n.collectionName,
          children: i
        });
      }
      for (let t of z) {
        let n = H[t] ?? [];
        if (0 === Object.values(n).length) continue;
        e.length > 0 && e.push({
          separator: !0,
          displayText: ""
        });
        let i = G.data?.[t] ?? getI18nString("variables.mode_properties_panel.used_variables.subheading");
        for (let [t, a] of (e.push({
          recordingKey: generateRecordingKey(r, "fileName-" + i),
          displayText: i,
          header: !0
        }), Object.entries(n).sort(([e, t], [r, n]) => t.collectionName.localeCompare(n.collectionName)))) e.push({
          recordingKey: generateRecordingKey(r, t),
          displayText: a.collectionName,
          children: getFeatureFlags().ds_new_mode_dropdown_data ? V(t, a.modeOptions, a.explicitMode, a.inheritMode, o, g, d, T, W, M[t]) : N(t, a.modeOptions, a.explicitMode, a.inheritMode, M)
        });
      }
      return e;
    }, [O, r, N, z, H, G, M, o, g, d, T, W]);
  }(showLibrarySets, consumptionTarget, recordingKey);
  let M = useDropdownState();
  let G = trackDefinedFileEventWithStore();
  let H = useDevModeFocusId();
  let z = useDeepEqualSceneValue((e, t) => {
    let r = e.get(t);
    return r?.type;
  }, H);
  return M && M.type === $$U2 ? jsx(_$$j, {
    dispatch: d,
    parentRect: M.data.targetRect,
    showPoint: !0,
    items: _,
    onSelectItem: e => {
      e.callback && (e.callback("", {}, d), consumptionTarget === Jo.FOCUS_NODE && (G("dev_mode.focus_view.mode_change", {
        node_id: H,
        node_type: z
      }), Sprig("track", "interactive_inspection_action")));
    },
    recordingKey: "applyModeDropdown"
  }) : null;
}
function V(e, t, r, i, a, s, o, l, d, c) {
  let u = _$$T2(e, t, r, i, d);
  let p = [];
  for (let t of u.formattedModeOptions) t.type === Z.Mixed ? p.push({
    recordingKey: "mode-MIXED",
    displayText: getI18nString("variables.mode_properties_panel.select.option.mixed"),
    isChecked: t.isCurrentlyActive
  }) : t.type === Z.Inherited ? p.push({
    recordingKey: "mode-INHERIT",
    displayText: t.name ? getI18nString("variables.mode_properties_panel.select.option.auto_with_name", {
      modeName: t.name === Mo ? getI18nString("variables.mode_properties_panel.select.option.mixed") : t.name
    }) : getI18nString("variables.mode_properties_panel.select.option.auto"),
    isChecked: t.isCurrentlyActive,
    callback: () => {
      s(e, UE, t.name);
    }
  }) : t.type === Z.Default && p.push({
    recordingKey: "mode-DEFAULT",
    displayText: getI18nString("variables.mode_properties_panel.select.option.default_with_name", {
      modeName: t.name
    }),
    rightIcon: t.isCompatible ? void 0 : jsx(SvgComponent, {
      className: F,
      svg: _$$A2
    }),
    isChecked: t.isCurrentlyActive,
    callback: () => {
      s(e, Ws, t.name);
    }
  });
  let _ = u.formattedModeOptions.filter(e => [Z.Standard, Z.Deleted].includes(e.type));
  if (_.length > 0) for (let t of (p.push({
    separator: !0,
    displayText: ""
  }), _)) t.type === Z.Standard ? p.push({
    recordingKey: "mode-" + t.modeId.guid,
    displayText: o ? `${t.name} (${t.modeId.guid})` : t.name,
    isChecked: t.isCurrentlyActive,
    callback: () => {
      c ? a(Wo({
        item: c,
        callback: r => {
          s(e, t.modeId, t.name);
        }
      })) : s(e, t.modeId, t.name);
    },
    rightIcon: t.isCompatible ? void 0 : jsx(SvgComponent, {
      className: F,
      svg: _$$A2
    })
  }) : t.type === Z.Deleted && p.push({
    recordingKey: "mode-DELETED",
    displayText: getI18nString("variables.mode_properties_panel.select.option.deleted"),
    disabled: !0,
    isChecked: t.isCurrentlyActive
  });
  u.hasIncompatibleMode && (p.push({
    separator: !0,
    displayText: ""
  }), p.push({
    recordingKey: l === iw.REVIEW_UPDATES ? "mode-review-update" : "mode-learn-more",
    displayText: l === iw.REVIEW_UPDATES ? getI18nString("variables.modes.option.review_updates") : getI18nString("variables.modes.option.learn_more"),
    callback: () => {
      l === iw.REVIEW_UPDATES ? a(showModalHandler({
        type: _$$T,
        data: {
          initialTab: LibraryTabEnum.UPDATES,
          entrypoint: r6.VARIABLE_APPLY_MODE_DROPDOWN_INCOMPATIBLE_LINK
        }
      })) : customHistory.unsafeRedirect(Yc, "_blank");
    },
    iconType: "info"
  }));
  return p;
}
export const bt = $$G0;
export const CC = $$B1;
export const R = $$U2;