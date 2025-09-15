import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useModalManager } from "../905/437088";
import { k as _$$k } from "../905/443820";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { parsePxInt } from "../figma_app/783094";
import { getI18nString } from "../905/303541";
import { Tn, fv } from "../figma_app/933328";
import { liveStoreInstance, IT } from "../905/713695";
import { MH, cM, tK } from "../figma_app/803787";
import { registerModal } from "../905/102752";
import { u as _$$u } from "../905/56919";
import { t as _$$t } from "../905/150656";
import { getFeatureFlags } from "../905/601108";
import { s as _$$s } from "../cssbuilder/589278";
import { vx } from "../905/91038";
import { LibraryAgeEnum, PrimaryWorkflowEnum, initialLibraryStats } from "../figma_app/633080";
import { e0 } from "../905/696396";
import { O as _$$O } from "../905/480562";
import { l as _$$l } from "../905/362016";
import { S as _$$S } from "../905/669334";
import { n as _$$n } from "../905/402643";
import { v as _$$v, E as _$$E } from "../905/928543";
import { U as _$$U } from "../905/402186";
import { x as _$$x } from "../905/805083";
import { R as _$$R } from "../905/697254";
import { t as _$$t2 } from "../905/414363";
import { Gk } from "../figma_app/277330";
import { l as _$$l2 } from "../905/579959";
import { T as _$$T } from "../905/27228";
import { YQL } from "../figma_app/27776";
let P = "dsa_file_view_v2--slidingPane--DMaAh sliding_pane--slidingPane--6OmDU";
let O = "dsa_file_view_v2--slidingPaneLeft--j57zz sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU";
function D({
  defaultAssetType: e,
  libraryFile: t,
  width: i,
  entrypoint: s
}) {
  let [o, l] = useState(e ?? _$$n.PRODUCT_COMPONENTS);
  let [d, c] = useState(_$$R.OVERVIEW);
  let [u, m] = useState(LibraryAgeEnum.THIRTY_DAYS);
  let [h, g] = useState(void 0);
  let [D, L] = useState(void 0);
  let [F, M] = useState(void 0);
  let [j, U] = useState(void 0);
  let B = !h && !D && !F && !j;
  let V = useCallback(() => {
    L(void 0);
  }, []);
  let G = useCallback(() => {
    g(void 0);
  }, []);
  let z = useCallback(() => {
    M(void 0);
  }, []);
  let H = useCallback(() => {
    U(void 0);
  }, []);
  let W = useCallback((e, t) => {
    z();
    H();
    t.type === PrimaryWorkflowEnum.COMPONENT ? g(t) : t.type === PrimaryWorkflowEnum.STATE_GROUP && L(t);
  }, [z, H]);
  let K = useCallback((e, t) => {
    G();
    V();
    H();
    M(t);
  }, [G, V, H]);
  let Y = useCallback((e, t) => {
    G();
    V();
    z();
    U(t);
  }, [G, V, z]);
  let q = useSelector(e => e.currentUserOrgId);
  let $ = useSelector(vx);
  let [Z] = Tn({
    currentOrgId: q
  });
  let X = Z.data || initialLibraryStats;
  let [Q, J, ee] = _$$u({
    overview: !0,
    analytics: !0
  });
  return jsx(_$$t2, {
    page: e0.DSA_FILE_VIEW,
    properties: {
      libraryKey: t?.key
    },
    children: jsxs("div", {
      className: "dsa_file_view_v2--slidingPaneContainer--aGZ15 sliding_pane--slidingPaneContainer--RQkXf",
      children: [jsxs("div", {
        className: B ? P : O,
        children: [jsx(_$$S, {
          selectedDuration: u,
          onSelectDuration: m,
          shownView: d,
          onSelectShownView: c,
          selectedAssetType: o,
          onSelectAssetType: l,
          libraryFile: t,
          tabManager: ee,
          tabProps: Q
        }), getFeatureFlags().dse_fpl_wave_1 ? jsxs("div", {
          className: _$$s.minH0.$,
          children: [jsx(_$$t.TabPanel, {
            ...J.overview,
            height: "fill",
            children: t && jsx(_$$l, {
              duration: u,
              entrypoint: s,
              file: t,
              onItemClick: W,
              width: i
            })
          }), jsx(_$$t.TabPanel, {
            ...J.analytics,
            height: "fill",
            children: jsx(_$$O, {
              assetType: o,
              duration: u,
              entrypoint: s,
              libraryFile: t,
              libraries: X,
              onComponentClick: W,
              onStyleClick: K,
              onVariableClick: Y,
              width: i
            })
          })]
        }) : jsx(Fragment, {
          children: d === _$$R.OVERVIEW ? t && jsx(_$$l, {
            duration: u,
            entrypoint: s,
            file: t,
            onItemClick: W,
            width: i
          }) : jsx(_$$O, {
            assetType: o,
            duration: u,
            entrypoint: s,
            libraryFile: t,
            libraries: X,
            onComponentClick: W,
            onStyleClick: K,
            onVariableClick: Y,
            width: i
          })
        })]
      }), D && jsx("div", {
        className: h ? O : P,
        children: jsx(_$$v, {
          stateGroup: D,
          onBackClick: V,
          onItemClick: W,
          width: i,
          hideOpenInFileButton: !0
        })
      }), h && jsx("div", {
        className: P,
        children: jsx(_$$E, {
          component: h,
          onBackClick: G,
          width: i,
          orgId: q,
          fileVersion: $,
          hideOpenInFileButton: !0
        })
      }), F && jsx("div", {
        className: P,
        children: jsx(_$$U, {
          libraryFileKey: t?.key,
          styleStat: F,
          onBackClick: z,
          width: i,
          hideOpenInFileButton: !0
        })
      }), j && jsx("div", {
        className: P,
        children: jsx(_$$x, {
          libraryFileKey: t?.key,
          variableStat: j,
          onBackClick: H,
          width: i,
          hideOpenInFileButton: !0
        })
      })]
    })
  });
}
let U = parsePxInt(YQL);
let $$B0 = registerModal(function (e) {
  let {
    fileKey,
    entrypoint
  } = e;
  let c = useModalManager(e);
  _$$T();
  let g = useSelector(e => e.currentUserOrgId);
  let f = useSelector(e => g ? e.orgById[g] : void 0);
  let _ = liveStoreInstance.useFile(fileKey).data;
  let A = useSelector(e => Object.values(MH(e)).length);
  let y = useSelector(e => Object.values(cM(e)).length);
  let b = useSelector(e => Object.values(tK(e)).length);
  let v = useMemo(() => Gk(A, y, b), [A, y, b]);
  let [I] = IT(fv(g));
  return f ? jsx(ModalRootComponent, {
    manager: c,
    width: "fit-content",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _?.name ?? getI18nString("fullscreen.fullscreen_view_selector.untitled")
        })
      }), jsx(nB, {
        padding: 0,
        children: "loading" === I.status ? jsx("div", {
          className: "dsa_file_view_modal--loadingSpinnerContainer--aSSip",
          children: jsx(_$$k, {})
        }) : "loaded" === I.status && I.data.is_currently_migrating ? jsx(_$$l2, {}) : jsx("div", {
          className: "dsa_file_view_modal--container--olqOl",
          children: jsx(D, {
            defaultAssetType: v,
            libraryFile: _ || void 0,
            width: U,
            entrypoint
          })
        })
      })]
    })
  }) : null;
}, "DSAFileViewModal");
export const e = $$B0;