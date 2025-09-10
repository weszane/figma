import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { k as _$$k } from "../905/443820";
import { E as _$$E } from "../905/500201";
import { getFeatureFlags } from "../905/601108";
import { useSubscription } from "../figma_app/288654";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { P as _$$P } from "../905/347284";
import { getI18nString, renderI18nText } from "../905/303541";
import { Gj, Lk } from "../figma_app/646357";
import { l as _$$l } from "../905/997221";
import { LH } from "../905/872904";
import { LibraryVariableCollectionDataWithVariables } from "../figma_app/43951";
import { Ib } from "../905/129884";
import { c as _$$c } from "../905/511370";
import { lH, Ze } from "../905/297574";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { A as _$$A } from "../905/408320";
import { q } from "../905/820062";
import { sortWithCollator } from "../figma_app/930338";
import { o as _$$o } from "../905/605383";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { lX } from "../figma_app/588397";
import { M4 } from "../905/713695";
import { PT } from "../905/669853";
import { V as _$$V } from "../905/697254";
import { c as _$$c2 } from "../905/167005";
import { Xk } from "../905/712714";
let w = "dsa_file_view_assets--stickySection---ITu-";
let C = "dsa_file_view_assets--headerIcon--fdLRQ";
function T({
  items: e,
  onItemClick: t
}) {
  let i = new Map();
  let r = new Map();
  e.forEach(e => {
    let t = e.containing_frame || {};
    let n = t.pageId || "NO_PAGE";
    let a = t.pageName || "";
    r.set(n, a);
    let s = i.get(n);
    s ? s.push(e) : i.set(n, [e]);
  });
  let a = sortWithCollator(Array.from(i.keys()), e => r.get(e) ?? "");
  let s = a.length > 1;
  return jsx("div", {
    children: a.map(e => {
      let a = i.get(e) || [];
      let o = r.get(e) || "";
      return jsx(k, {
        showTitle: s && !!o,
        headerText: o,
        children: jsx(R, {
          items: a,
          onItemClick: t
        })
      }, e);
    })
  });
}
function k({
  children: e,
  headerText: t,
  showTitle: i
}) {
  let r = i ? "dsa_file_view_assets--stickySectionPage--tkNT6 dsa_file_view_assets--stickySection---ITu-" : w;
  return jsxs("div", {
    className: `${r || w}`,
    children: [i && jsxs("div", {
      className: "dsa_file_view_assets--stickySectionHeader--3Ho7o dsa_file_view_assets--sectionHeader--B1dd7 ellipsis--ellipsis--Tjyfa",
      children: [jsx("div", {
        className: C,
        children: jsx(_$$A, {})
      }), jsx("div", {
        children: t
      })]
    }), e]
  });
}
function R({
  items: e,
  onItemClick: t
}) {
  let i = {};
  let r = [];
  for (let t of e) {
    let e = t.containing_frame;
    e && e.nodeId && e.nodeId !== t.node_id ? (i[e.nodeId] = i[e.nodeId] || [], i[e.nodeId].push(t)) : r.push(t);
  }
  sortByPropertyWithOptions(r, "name");
  let a = Object.keys(i);
  a.sort((e, t) => {
    let n = i[e][0].containing_frame?.name || "";
    let r = i[t][0].containing_frame?.name || "";
    return n.toLowerCase() < r.toLowerCase() ? -1 : 1;
  });
  let s = a.join(",");
  return jsxs("div", {
    children: [r.length > 0 && jsx(P, {
      items: r,
      onItemClick: t
    }), jsx(_$$o, {
      chunkSize: 5,
      listKey: s,
      children: a.map(e => {
        let r = i[e];
        sortByPropertyWithOptions(r, "name");
        let a = r[0];
        return a ? jsx(N, {
          title: a.containing_frame?.name || "",
          children: jsx(P, {
            items: r,
            onItemClick: t
          })
        }, e) : null;
      })
    })]
  });
}
function N({
  title: e,
  children: t
}) {
  return jsxs("div", {
    children: [jsxs("div", {
      className: "dsa_file_view_assets--sectionHeader--B1dd7 ellipsis--ellipsis--Tjyfa",
      children: [jsx("div", {
        className: C,
        children: jsx(q, {})
      }), jsx("div", {
        children: e
      })]
    }), t]
  });
}
function P({
  items: e,
  onItemClick: t
}) {
  let i = e.map(e => jsx(lX, {
    buttonProps: {
      onItemClick: t
    },
    draggable: {
      sourceForTracking: ""
    },
    height: 62,
    isFigJam: !1,
    item: e,
    recordingNodePath: e.node_id,
    shouldHideTooltip: !1,
    showName: !0,
    width: 62
  }, Gj(e)));
  let r = e.map(e => e.type === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.key).join(",");
  return jsx("div", {
    children: jsx("div", {
      className: "dsa_file_view_assets--componentContainer--PGt6T",
      children: jsx(_$$o, {
        chunkSize: 50,
        listKey: r,
        className: "dsa_file_view_assets--componentTiles--CXYEl",
        children: i
      })
    })
  });
}
function M({
  libraryFileKey: e
}) {
  let [t] = setupResourceAtomHandler(U(e));
  let i = useMemo(() => [{
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.used_by"),
    count: t?.data?.num_teams ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.team", {
      teamCount: t?.data?.num_teams ?? 0
    })
  }, {
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.total_components"),
    count: t?.data?.num_components ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.component", {
      componentCount: t?.data?.num_components ?? 0
    })
  }, {
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.total_styles"),
    count: t?.data?.num_styles ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.style", {
      styleCount: t?.data?.num_styles ?? 0
    })
  }, {
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.activity_this_week"),
    count: t?.data?.num_weekly_insertions ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.insert", {
      insertCount: t?.data?.num_weekly_insertions ?? 0
    })
  }], [t]);
  return jsx(_$$c2, {
    isLoading: "loading" === t.status,
    stats: i
  });
}
function j({
  libraryFileKey: e
}) {
  let [t] = setupResourceAtomHandler(U(e));
  let i = t.data;
  let a = useMemo(() => [{
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.used_by"),
    count: i?.num_teams ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.team", {
      teamCount: i?.num_teams ?? 0
    })
  }, {
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.total_components"),
    count: i?.num_components ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.component", {
      componentCount: i?.num_components ?? 0
    })
  }, {
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.total_styles"),
    count: i?.num_styles ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.style", {
      styleCount: i?.num_styles ?? 0
    })
  }, {
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.total_variables"),
    count: i?.num_variables ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.variable", {
      variableCount: i?.num_variables ?? 0
    })
  }, {
    type: _$$V.STAT,
    header: getI18nString("design_systems.libraries_modal.activity_this_week"),
    count: i?.num_weekly_insertions ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.insert", {
      insertCount: i?.num_weekly_insertions ?? 0
    })
  }], [i]);
  return jsx(_$$c2, {
    isLoading: "loading" === t.status,
    stats: a
  });
}
let U = M4.Query({
  fetch: async e => (await PT.getLibraryOverview({
    libraryFileKey: e
  })).data.meta
});
let V = "dsa_file_view_overview--fileAssetSectionHeader--ngbds library_section_header--fileAssetSectionHeader--FApn3 text--fontPos12--YsUAh text--_fontBase--QdLsd";
let G = "dsa_file_view_overview--sectionWrapper--rn7kh";
let z = "dsa_file_view_overview--loadingSpinner--giOL4";
export function $$H0(e) {
  let {
    duration,
    entrypoint,
    file,
    width,
    onItemClick
  } = e;
  let f = LH();
  let [y] = setupResourceAtomHandler(lH(file.key));
  let b = "loading" === y.status;
  let v = useMemo(() => [...("loaded" === y.status ? y.data : [])].sort(Lk), [y]);
  let [I] = setupResourceAtomHandler(Xk({
    duration,
    orgId: f,
    libraryFileKey: file.key,
    entryPointForLogging: entrypoint
  }));
  let E = "loading" === I.status;
  let x = Ze({
    productComponentStats: I.data,
    libraryKey: _$$l(file)
  });
  let S = getFeatureFlags().dsa_styles_variables_ui;
  return jsxs(_$$P, {
    width,
    className: "dsa_file_view_overview--fileViewDSA--pOwsl",
    children: [S ? jsx(j, {
      libraryFileKey: file.key
    }) : jsx(M, {
      libraryFileKey: file.key
    }), b ? jsx("div", {
      className: z,
      children: jsx(_$$k, {})
    }) : v.length > 0 && jsxs("div", {
      className: G,
      children: [jsx("div", {
        className: V,
        children: renderI18nText("design_systems.libraries_modal.header_styles")
      }), jsx(_$$c, {
        styleList: v
      })]
    }), S && jsx(W, {
      libraryFileKey: file.key
    }), !S && v.length > 0 && x.length > 0 && jsx("div", {
      className: "dsa_file_view_overview--divider--TIoHM"
    }), E && !b ? jsx("div", {
      className: z,
      children: jsx(_$$k, {})
    }) : x.length > 0 && jsxs("div", {
      className: G,
      children: [jsx("div", {
        className: V,
        children: renderI18nText("design_systems.libraries_modal.header_components")
      }), jsx(T, {
        items: x,
        onItemClick
      })]
    })]
  });
}
function W({
  libraryFileKey: e
}) {
  let t = useSubscription(LibraryVariableCollectionDataWithVariables, {
    fileKey: e
  });
  let i = t.data?.file?.variableCollections;
  let o = useMemo(() => i?.filter(e => !e.unpublishedAt), [i]);
  return "loading" === t.status ? jsx("div", {
    className: z,
    children: jsx(_$$k, {})
  }) : o && 0 !== o.length ? jsxs("div", {
    className: G,
    children: [jsx("div", {
      className: V,
      children: getI18nString("design_systems.libraries_modal.header_variable_collections")
    }), jsx("div", {
      className: "dsa_file_view_overview--variablesSection--4Nm9y",
      children: o.map(e => jsx("div", {
        className: "dsa_file_view_overview--variableSetThumb--A92GL",
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": e.name,
        "data-tooltip-subtext": getI18nString("design_systems.libraries_modal.plural.num_variables", {
          numVariables: e.variables.length
        }),
        role: "img",
        "aria-label": e.name,
        children: jsx(_$$E, {})
      }, e.id))
    })]
  }) : null;
}
export const l = $$H0;
