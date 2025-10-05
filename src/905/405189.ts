import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { k } from "../905/443820";
import { ButtonPrimitive } from "../905/632989";
import o from "../vendor/241899";
import { P } from "../905/347284";
import { TrackingProvider } from "../figma_app/831799";
import { formatLibraryContents } from "../figma_app/646357";
import { getLibraryNames } from "../905/506188";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { lX } from "../figma_app/588397";
import { w } from "../905/768636";
import { isLibraryModalContextAvailable } from "../905/753512";
import { W } from "../905/729905";
import { renderI18nText } from "../905/303541";
import { Q } from "../905/620793";
import { lh } from "../905/424623";
import { U as _$$U } from "../905/763676";
import { MissingLibrariesHeader } from "../905/180528";
var l = o;
function b({
  backToList: e,
  numMissingLibraries: t
}) {
  return jsx(Q, {
    title: renderI18nText("design_systems.libraries_modal.plural.missing_library", {
      missingLibCount: t
    }),
    onBack: e
  });
}
export function $$x0(e) {
  let [t, i] = useState(null);
  let o = lh();
  let A = isLibraryModalContextAvailable();
  let y = getLibraryNames(e.libraryKeys);
  let x = "loading" === y.status;
  let S = useCallback(() => {
    let t = 0;
    let i = 0;
    let n = 0;
    Object.values(l()(o, e.libraryKeys)).forEach(e => {
      e.forEach(e => {
        e.type === PrimaryWorkflowEnum.STYLE ? i++ : e.type === PrimaryWorkflowEnum.VARIABLE ? n++ : (e.type === PrimaryWorkflowEnum.COMPONENT || e.type === PrimaryWorkflowEnum.STATE_GROUP) && t++;
      });
    });
    return {
      n_libraries: e.libraryKeys.length,
      n_components: t,
      n_styles: i,
      n_variables: n
    };
  }, [e.libraryKeys, o]);
  return jsx(W.PageWithTracking, {
    name: "missing_libraries",
    metadata: S,
    children: jsx(TrackingProvider, {
      name: "MissingLibrariesView",
      properties: {
        selectedLibraryKey: t
      },
      children: jsxs("div", {
        className: "missing_libraries_view--slidingPaneContainer--royLY",
        children: [jsxs("div", {
          className: t ? "missing_libraries_view--rowContainerLeft--Dwa1H missing_libraries_view--rowContainer--uFuO7 missing_libraries_view--slidingPane--xbfvj" : "missing_libraries_view--rowContainer--uFuO7 missing_libraries_view--slidingPane--xbfvj",
          children: [A ? jsx(b, {
            backToList: e.backToList,
            numMissingLibraries: e.libraryKeys.length
          }) : jsx(MissingLibrariesHeader, {
            backToList: e.backToList,
            numMissingLibraries: e.libraryKeys.length
          }), jsxs(P, {
            children: [x && jsx(k, {}), !x && e.libraryKeys.map(e => {
              let t = o[e];
              if (!t) return;
              let r = t.reduce((e, t) => e + (t.type === PrimaryWorkflowEnum.STYLE ? 1 : 0), 0);
              let a = t.reduce((e, t) => e + (t.type === PrimaryWorkflowEnum.VARIABLE ? 1 : 0), 0);
              let l = t.reduce((e, t) => e + (t.type === PrimaryWorkflowEnum.VARIABLE_SET ? 1 : 0), 0);
              let d = t.slice(0, A ? 10 : 8);
              let c = y.data?.[e];
              return jsxs("div", {
                className: "missing_libraries_view--row--P7plh",
                children: [jsxs(ButtonPrimitive, {
                  className: "missing_libraries_view--rowHeader--Ych4v",
                  onClick: () => i(e),
                  children: [c ?? "Missing library with " + formatLibraryContents({
                    numVariables: a,
                    numProductComponents: t.length - r - a - l,
                    numVariableCollections: l,
                    numStyles: r
                  }), jsx(w, {})]
                }), jsx("div", {
                  className: "missing_libraries_view--tileContainer--roLPH",
                  children: d.map(e => jsx(lX, {
                    item: e,
                    height: A ? 95 : 96,
                    width: A ? 95 : 96,
                    style: {
                      marginRight: 12,
                      marginBottom: 12,
                      marginLeft: 0,
                      pointerEvents: "none"
                    }
                  }, e.node_id))
                })]
              }, e);
            })]
          })]
        }), t ? jsx("div", {
          className: "missing_libraries_view--slidingPane--xbfvj",
          children: jsx(_$$U, {
            selectedLibraryKey: t,
            onBackClick: () => i(null)
          })
        }) : void 0]
      })
    })
  });
}
export const f = $$x0;