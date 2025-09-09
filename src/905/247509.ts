import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, memo, useMemo } from "react";
import { useDispatch } from "react-redux";
import { E as _$$E } from "../905/632989";
import { defaultSessionLocalIDString, sessionLocalIDToString } from "../905/871411";
import l from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { yT } from "../figma_app/332598";
import { X } from "../figma_app/953068";
import { n2 } from "../figma_app/137317";
import { _r } from "../figma_app/451499";
import { eY } from "../figma_app/722362";
import { lE } from "../905/945781";
import { Pp } from "../vendor/330821";
import { trackEventAnalytics } from "../905/449184";
import { K } from "../905/918348";
import { WEB } from "../905/359509";
import { j5 } from "../figma_app/711907";
import { qZ } from "../905/201014";
import { Q } from "../905/346809";
import { WD } from "../figma_app/571341";
var d = l;
let k = "compare_changes_right_panel--sidePanel--wHvM4";
let R = "compare_changes_right_panel--ellipsisWithWrap--54R7Y";
let N = "compare_changes_right_panel--dash--prjvO";
export function $$P1(e) {
  let {
    header,
    changedKeys,
    oldValueMap,
    newValueMap
  } = e;
  let o = useDispatch();
  let l = new _r();
  let d = e => e && "Variables" === header ? l.format(e) : e;
  return jsxs("div", {
    className: "compare_changes_right_panel--propertiesTable--eA09s",
    children: [header && jsx(F, {
      title: header
    }), changedKeys.map(e => jsx(j, {
      name: d(oldValueMap[e]?.displayName || newValueMap[e]?.displayName),
      basis: {
        value: oldValueMap[e]?.displayValue || getI18nString("collaboration.branching_node_treatments.value.empty_dash"),
        onClick: () => WD(oldValueMap[e]?.displayValue, o)
      },
      change: {
        value: newValueMap[e]?.displayValue || getI18nString("collaboration.branching_node_treatments.value.empty_dash"),
        onClick: () => WD(newValueMap[e]?.displayValue, o)
      }
    }, e))]
  });
}
export function $$O2({
  layerChangeNodeId: e,
  layerBasisNodeId: t,
  layerChangeSceneGraph: i,
  layerBasisSceneGraph: a,
  selectedVersion: s,
  displayableChanges: l,
  preferencesApi: d
}) {
  let c = eY();
  let m = a?.get(t ?? "") ?? c.get(t ?? "");
  let g = i?.get(e ?? "") ?? c.get(e ?? "");
  let A = m?.type === "TEXT" || g?.type === "TEXT";
  let b = !t || t === defaultSessionLocalIDString;
  let v = !e || e === defaultSessionLocalIDString;
  let I = b ? getI18nString("dev_handoff.compare_changes.banner.added_layer") : getI18nString("dev_handoff.compare_changes.banner.removed_layer");
  let {
    inspectionMode,
    setInspectionMode,
    inspectionModes,
    preferenceOptions,
    preferences,
    codeLanguageApi
  } = d;
  let R = inspectionModes.includes("code") && void 0 !== preferenceOptions && void 0 !== preferences && void 0 !== codeLanguageApi;
  let N = useCallback(() => {
    setInspectionMode("properties");
  }, [setInspectionMode]);
  return jsxs("div", {
    className: k,
    id: "cc-code-panel",
    children: [(b || v) && jsx("div", {
      className: "compare_changes_right_panel--banner--lsWBi",
      children: jsx(_$$_, {
        dataTestId: "cc-code-panel-banner",
        color: b ? _$$S.INFORMATION : _$$S.ERROR,
        text: I
      })
    }), jsx(n2, {
      dropdownPrefix: "COMPARE_CHANGES",
      inspectionModeLayout: "tabs",
      preferencesApi: d,
      hidePreferencesForList: !0
    }), jsx("div", {
      className: "compare_changes_right_panel--dividerBottom--FmR5V"
    }), jsxs(P, {
      children: [R && "code" === inspectionMode ? jsx(L, {
        codeLanguage: codeLanguageApi.codeLanguage,
        layerBasisNodeId: t,
        layerBasisSceneGraph: a,
        layerChangeNodeId: e,
        layerChangeSceneGraph: i,
        onSwitchToPropertiesMode: N,
        plugin: codeLanguageApi.activeCodegenPlugin,
        preferences,
        selectedVersion: s
      }, `${e || ""}-${t || ""}`) : l && !b && !v && jsx(D, {
        displayableChanges: l,
        layerBasisNodeId: t,
        layerChangeNodeId: e
      }), A ? jsx(X, {
        basisContent: m?.characters,
        changeContent: g?.characters
      }) : null]
    }, `${e}-${t}`)]
  });
}
function D({
  displayableChanges: e,
  layerChangeNodeId: t,
  layerBasisNodeId: i
}) {
  let r = useDispatch();
  let s = lE(e, e => sessionLocalIDToString(e.basis.guid) === i || sessionLocalIDToString(e.change.guid) === t)?.changesToDisplay;
  if (!s) return null;
  let l = s.filter(e => "textData" !== e.identifier);
  let d = l.filter(e => "lego-table" !== e.oldValue());
  let c = l.filter(e => "lego-table" === e.oldValue());
  return l && l.length > 0 ? jsxs(Fragment, {
    children: [d.length > 0 && jsx("div", {
      className: "compare_changes_right_panel--propertiesTableCompareChanges--NnOU6",
      children: d.map(e => {
        let t = e.oldValue();
        let i = e.newValue();
        return jsx(j, {
          name: e.name(),
          basis: {
            value: t,
            onClick: () => WD(t, r)
          },
          change: {
            value: i,
            onClick: () => WD(i, r)
          }
        });
      })
    }), c.map(e => e.newValue())]
  }) : null;
}
let L = memo(({
  layerChangeNodeId: e,
  layerBasisNodeId: t,
  layerChangeSceneGraph: i,
  layerBasisSceneGraph: a,
  selectedVersion: s,
  codeLanguage: o,
  preferences: l,
  plugin: d,
  onSwitchToPropertiesMode: p
}) => {
  let {
    code,
    hasDiffs
  } = function ({
    layerChangeNodeId: e,
    layerBasisNodeId: t,
    layerChangeSceneGraph: i,
    layerBasisSceneGraph: n,
    selectedVersion: a,
    codeLanguage: s,
    preferences: o,
    plugin: l
  }) {
    let d = useMemo(() => s.id === WEB && "first-party" === s.type ? {
      id: qZ.CSS,
      type: "first-party"
    } : s, [s]);
    return function ({
      codeForBasisNode: e,
      codeForChangeNode: t
    }) {
      let i = performance.now();
      let n = {};
      t.code.forEach(t => {
        let i = e.code.find(e => e.name === t.name);
        n[t.name] = {
          changed: t,
          basis: i || {
            ...t,
            lines: []
          }
        };
      });
      e.code.forEach(e => {
        n[e.name] || (n[e.name] = {
          changed: {
            ...e,
            lines: []
          },
          basis: e
        });
      });
      let r = Object.values(n).map(e => function (e, t) {
        let i = e.lines.map(e => e.code).join("\n");
        let n = t.lines.map(e => e.code).join("\n");
        let r = Pp(n, i);
        let a = 0;
        let s = 0;
        let o = [];
        r.forEach(i => {
          let n = i.count ?? 0;
          for (let r = 0; r < n; r++) {
            let n;
            i.added ? (n = {
              ...e.lines[a],
              diff: j5.ADDED
            }, a++) : (i.removed ? n = {
              ...t.lines[s],
              diff: j5.REMOVED,
              excludeFromCopy: !0
            } : (n = e.lines[a], a++), s++);
            o.push(n);
          }
        });
        return {
          ...e,
          lines: o
        };
      }(e.changed, e.basis));
      let a = r.some(e => e.lines.some(e => void 0 !== e.diff));
      let s = Math.trunc(performance.now() - i);
      trackEventAnalytics("dev_mode.compare_changes.diffing", {
        type: "code",
        durationMs: s
      }, {
        forwardToDatadog: !0
      });
      return {
        code: r,
        hasDiffs: a
      };
    }({
      codeForBasisNode: K({
        selectedNodeID: t ?? void 0,
        extensionLanguage: d,
        sceneGraph: n,
        selectedVersion: a,
        preferences: o,
        plugin: l
      }),
      codeForChangeNode: K({
        selectedNodeID: e ?? void 0,
        extensionLanguage: d,
        sceneGraph: i,
        preferences: o,
        plugin: l
      })
    });
  }({
    selectedVersion: s,
    layerChangeNodeId: e,
    layerBasisNodeId: t,
    layerChangeSceneGraph: i,
    layerBasisSceneGraph: a,
    codeLanguage: o,
    plugin: d,
    preferences: l
  });
  return jsxs("div", {
    className: _$$s.pb8.$,
    children: [!hasDiffs && jsx("div", {
      className: _$$s.pt16.pl16.pr16.pb8.$,
      children: jsx(_$$_, {
        color: _$$S.PLAIN,
        text: jsxs(Fragment, {
          children: [jsx("p", {
            children: getI18nString("dev_handoff.compare_changes.banner.no_changes")
          }), jsx("div", {
            className: "compare_changes_right_panel--bannerLink--pPJYo",
            onClick: p,
            role: "button",
            tabIndex: 0,
            children: getI18nString("dev_handoff.compare_changes.banner.no_changes_link")
          })]
        })
      })
    }), code.map(e => {
      let t = e.lines.some(e => !e.excludeFromCopy);
      return e.lines.length > 0 ? jsx("div", {
        className: "compare_changes_right_panel--codeWellWrapper--IIgCk",
        children: jsx(yT, {
          code,
          section: e,
          collapseLongSections: !1,
          copyActionEnabled: t,
          hasCodeDiff: !0,
          hideHints: !0,
          recordingKey: generateRecordingKey("styles_code_panel", e.name)
        })
      }, e.name) : null;
    })]
  });
});
function F({
  title: e
}) {
  return jsx("div", {
    className: "compare_changes_right_panel--diffTitle--m6MT- inspection_panel--panelTitle--LoTej",
    children: jsx(Q, {
      className: "compare_changes_right_panel--diffTitleText--R5SSI inspection_panel--panelTitleText--ifjYg",
      children: e
    })
  });
}
let M = e => e?.valueOf() === getI18nString("collaboration.branching_node_treatments.value.empty_dash");
function j({
  basis: e,
  change: t,
  name: i
}) {
  return jsxs("div", {
    className: "compare_changes_right_panel--propertyRowWithDiff--c9Sqh inspection_property--basePropertyRow--nwW7c inspection_property--_basePropertyRow--nfWzH",
    children: [jsx("span", {
      className: "compare_changes_right_panel--propertyNameWrap--8gSYG inspection_property--propertyName--X6OKc ellipsis--ellipsis--Tjyfa",
      children: i
    }), jsxs("div", {
      className: "compare_changes_right_panel--propertyDiffLine--3UXAq inspection_property--propertyValue--6HQoD ellipsis--ellipsis--Tjyfa",
      children: [jsx(_$$E, {
        onClick: e.onClick,
        className: d()("compare_changes_right_panel--basis--jr6Ud", R, M(e.value) && N),
        children: e.value
      }), jsx(_$$E, {
        onClick: t.onClick,
        className: d()("compare_changes_right_panel--change--ARqhy", R, M(t.value) && N),
        children: t.value
      })]
    })]
  });
}
export function $$U0({
  text: e
}) {
  return jsx("div", {
    className: k,
    children: jsx("div", {
      className: "compare_changes_right_panel--selectLayerText--bQQTr text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: e
    })
  });
}
export const Ox = $$U0;
export const O0 = $$P1;
export const wv = $$O2;
