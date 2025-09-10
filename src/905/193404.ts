import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useMemo, useState, useRef, useCallback } from "react";
import { sortByPropertyWithOptions, sortByProperty, sortByDateProperty } from "../figma_app/656233";
import { throwTypeError } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { e as _$$e } from "../905/916195";
import { useAtomValueAndSetter, createLocalStorageAtom } from "../figma_app/27355";
import u from "classnames";
import { w as _$$w } from "../905/835474";
import { oW } from "../905/675859";
import { h1 } from "../905/986103";
import { o as _$$o } from "../905/605383";
import { Ph } from "../905/160095";
import { getI18nString } from "../905/303541";
import { jN } from "../905/612685";
import { LT } from "../figma_app/646357";
import { FFileType } from "../figma_app/191312";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { l as _$$l } from "../905/402643";
import { zi } from "../905/824449";
import { i } from "../905/415810";
import { Hj, tD } from "../905/682977";
let d = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M8.97 6.617a2 2 0 0 1 2.06 0l3 1.8a2 2 0 0 1 .97 1.716v3.734l-.004.132a2 2 0 0 1-.967 1.584l-3 1.8-.12.066a2 2 0 0 1-1.817 0l-.121-.066-3-1.8a2 2 0 0 1-.967-1.584L5 13.867v-3.734c0-.659.324-1.273.86-1.645l.11-.071zm5.03.266a.5.5 0 0 1 .757-.429l3.272 1.963A2 2 0 0 1 19 10.133v3.734c0 .703-.368 1.354-.97 1.716l-3.273 1.963a.5.5 0 0 1-.514-.858l3.272-1.963c.3-.18.485-.507.485-.858v-3.734c0-.352-.184-.678-.485-.859l-3.272-1.963A.5.5 0 0 1 14 6.883m-3.485.591a1 1 0 0 0-1.03 0l-3 1.8c-.3.181-.485.507-.485.859v3.734a1 1 0 0 0 .485.858l3 1.8c.317.19.713.19 1.03 0l3-1.8c.3-.18.485-.507.485-.858v-3.734c0-.352-.184-.678-.485-.859zM10 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    })
  });
});
var p = u;
let C = "stats_table--avatarColumn--RQMCl stats_table--textColumn--EMk0L text--fontPos11--2LvXf text--_fontBase--QdLsd";
let T = "stats_table--avatarColumnComponentName--ffp7H ellipsis--ellipsis--Tjyfa";
let k = "stats_table--caretColumn--ix8oN";
let R = "stats_table--statsColumn---ELO3 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let N = "stats_table--statsColVal--ybv3W stats_table--statsColumn---ELO3 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let P = "stats_table--fileNameColumn--8Th-2 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let O = "stats_table--teamNameColumn--QIu3X text--fontPos11--2LvXf text--_fontBase--QdLsd";
let D = "stats_table--fileStatNumColumn--4oIM4 library_modal_stats--numCol---FbhI text--fontPos11--2LvXf text--_fontBase--QdLsd";
let L = "stats_table--fileStatNumColVal--SL9MV stats_table--fileStatNumColumn--4oIM4 library_modal_stats--numCol---FbhI text--fontPos11--2LvXf text--_fontBase--QdLsd";
function F({
  emptyStateText: e,
  statsData: t,
  onRowClick: i,
  onScrollTo: s,
  columns: l,
  getListKey: d,
  getStatKey: u,
  showingStateStats: p,
  defaultSortBy: m,
  defaultSortIsDescending: h
}) {
  let g = t.type;
  let {
    sortBy,
    isDescending,
    setSortByAndOrder,
    onSortScrollTargetRef
  } = function (e, t, i, n) {
    let {
      sortPreferences,
      setSortPreferences
    } = function (e) {
      let [t, i] = useAtomValueAndSetter(X);
      let [n, a] = useAtomValueAndSetter(Q);
      let [s, o] = useAtomValueAndSetter(J);
      let [l, d] = useAtomValueAndSetter(ee);
      let [u, p] = useAtomValueAndSetter(et);
      let [m, h] = useMemo(() => {
        switch (e) {
          case _$$l.PRODUCT_COMPONENTS:
            return [t, i];
          case _$$l.STYLES:
            return [n, a];
          case _$$l.VARIABLES:
            return [s, o];
          case _$$l.VARIABLE_MODES:
            return [l, d];
          case _$$l.FILES:
            return [u, p];
        }
      }, [e, t, n, s, l, u, i, a, o, d, p]);
      return useMemo(() => ({
        sortPreferences: m,
        setSortPreferences: h
      }), [m, h]);
    }(e.type);
    let [o, l] = useState(sortPreferences?.sortBy ?? i ?? "alpha");
    let [d, u] = useState(sortPreferences?.isDescending ?? n ?? !1);
    let p = useRef(null);
    let m = useCallback(e => {
      let i = o !== e || !d;
      l(e);
      u(i);
      setSortPreferences({
        sortBy: e,
        prevCol: o,
        isDescending: i
      });
      p.current?.offsetTop && t(p.current.offsetTop);
    }, [o, d, setSortPreferences, t]);
    return useMemo(() => ({
      sortBy: o,
      isDescending: d,
      setSortByAndOrder: m,
      onSortScrollTargetRef: p
    }), [o, d, m]);
  }(t, s, m, h);
  let v = useMemo(() => function (e, t, i) {
    switch (e.type) {
      case _$$l.PRODUCT_COMPONENTS:
        return function (e, t, i) {
          let n = [...e];
          switch (t) {
            case "alpha":
              sortByPropertyWithOptions(n, "name", {
                isDescending: i
              });
              break;
            case "num_states":
              sortBy(n, e => e.type === PrimaryWorkflowEnum.STATE_GROUP ? e.num_states : 0, i);
              break;
            case "num_existing_instances":
              sortByProperty(n, "num_existing_instances", i);
              break;
            case "num_insertions":
              sortByProperty(n, "num_insertions", i);
              break;
            case "num_detachments":
              sortByProperty(n, "num_detachments", i);
          }
          return n;
        }([...e.items], t, i);
      case _$$l.STYLES:
        return function (e, t, i) {
          let n = [...e];
          switch (t) {
            case "alpha":
              sortByPropertyWithOptions(n, "name", {
                isDescending: i
              });
              break;
            case "num_existing_instances":
              sortByProperty(n, "num_existing_instances", i);
              break;
            case "num_insertions":
              sortByProperty(n, "num_insertions", i);
              break;
            case "num_detachments":
              sortByProperty(n, "num_detachments", i);
          }
          return n;
        }([...e.items], t, i);
      case _$$l.VARIABLES:
        return function (e, t, i) {
          let n = [...e];
          switch (t) {
            case "alpha":
              sortByPropertyWithOptions(n, "name", {
                isDescending: i
              });
              break;
            case "collection_name":
              sortByPropertyWithOptions(n, "collectionName", {
                isDescending: i
              });
              break;
            case "num_existing_instances":
              sortByProperty(n, "num_existing_instances", i);
              break;
            case "num_insertions":
              sortByProperty(n, "num_insertions", i);
              break;
            case "num_detachments":
              sortByProperty(n, "num_detachments", i);
          }
          return n;
        }([...e.items], t, i);
      case _$$l.VARIABLE_MODES:
        return function (e, t, i) {
          let n = [...e];
          switch (t) {
            case "alpha":
              sortByPropertyWithOptions(n, "name", {
                isDescending: i
              });
              break;
            case "num_existing_instances":
              sortByProperty(n, "num_existing_instances", i);
              break;
            case "collection_name":
              sortByPropertyWithOptions(n, "collectionName", {
                isDescending: i
              });
          }
          return n;
        }([...e.items], t, i);
      case _$$l.FILES:
        return function (e, t, i) {
          let n = [...e];
          switch (t) {
            case "alpha":
              sortByPropertyWithOptions(n, "fileName", {
                isDescending: i
              });
              break;
            case "teamNames":
              sortByPropertyWithOptions(n, "teamName", {
                isDescending: i
              });
              break;
            case "instances":
              sortByProperty(n, "numInstances", i);
              break;
            case "lastModified":
              sortByDateProperty(n, "lastModified", i);
          }
          return n;
        }([...e.items], t, i);
      default:
        return [];
    }
  }(t, sortBy, isDescending), [t, sortBy, isDescending]);
  let x = useMemo(() => d(v), [v, d]);
  let S = useMemo(() => {
    switch (g) {
      case _$$l.VARIABLES:
      case _$$l.VARIABLE_MODES:
        return !1;
      default:
        return !0;
    }
  }, [g]);
  return jsxs("div", {
    children: [S && jsx($$M2, {
      tableType: g,
      showingStateStats: p
    }), jsx("div", {
      ref: onSortScrollTargetRef
    }), jsx(j, {
      columns: l,
      sortBy,
      isDescending,
      onSort: setSortByAndOrder,
      withCaret: !!i
    }), jsx("div", {
      children: 0 === v.length && e ? jsx("div", {
        className: "stats_table--emptyStateText--bymBw text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: e
      }) : jsx(_$$o, {
        chunkSize: 50,
        listKey: x,
        children: v.map(e => jsx(U, {
          stat: e,
          onRowClick: i ?? lQ,
          columns: l,
          withCaret: !!i
        }, u(e)))
      })
    })]
  });
}
export function $$M2({
  tableType: e,
  showingStateStats: t = !1
}) {
  let i = useMemo(() => {
    switch (e) {
      case _$$l.PRODUCT_COMPONENTS:
        return t ? getI18nString("design_systems.libraries_modal.all_variants") : getI18nString("design_systems.libraries_modal.component_statistics");
      case _$$l.STYLES:
        return getI18nString("design_systems.libraries_modal.style_statistics");
      case _$$l.VARIABLES:
      case _$$l.VARIABLE_MODES:
        return getI18nString("design_systems.libraries_modal.usage_statistics");
      case _$$l.FILES:
        return null;
      default:
        throwTypeError(e);
    }
  }, [e, t]);
  return i ? jsx("h3", {
    className: "stats_table--libraryAnalyticsHeader--v4iuU library_modal_stats--libraryAnalyticsHeader--9giDS text--fontPos14--OL9Hp text--_fontBase--QdLsd",
    children: i
  }) : null;
}
function j({
  columns: e,
  sortBy: t,
  isDescending: i,
  onSort: r,
  withCaret: a
}) {
  return jsxs(Hj, {
    className: "stats_table--statsTableHeaderRow--rLO-Y library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [e.map(e => jsx(tD, {
      className: p()(e.headerClassName, {
        "stats_table--selectedCol--6jw8p library_modal_stats--selectedCol--pwGl4": t === e.sortBy
      }),
      isDescending: i,
      hasArrow: t === e.sortBy,
      field: e.sortBy,
      sortBy: r,
      children: e.header
    }, e.sortBy)), a && jsx("div", {
      className: k
    })]
  });
}
function U({
  stat: e,
  onRowClick: t,
  columns: i,
  withCaret: a
}) {
  let s = useCallback(i => {
    i.stopPropagation();
    i.preventDefault();
    t(i, e);
  }, [t, e]);
  return jsxs(Hj, {
    className: "stats_table--row--KtRaP text--fontPos11--2LvXf text--_fontBase--QdLsd",
    onMouseDown: s,
    children: [i.map(t => jsx("div", {
      className: t.valueClassName,
      children: t.valueRenderFn({
        stat: e
      })
    }, t.sortBy)), a ? jsx("div", {
      className: k,
      children: jsx("div", {
        className: "stats_table--componentRowCaretRightWrapper--LcHHS",
        children: jsx(_$$e, {})
      })
    }) : null]
  });
}
export function $$B0({
  statsData: e,
  duration: t,
  onRowClick: i,
  onScrollTo: a,
  showingStateStats: s
}) {
  let o = !s;
  let l = useMemo(() => {
    let e = [{
      header: s ? getI18nString("design_systems.libraries_modal.variant_name") : getI18nString("design_systems.libraries_modal.component_name"),
      sortBy: "alpha",
      headerClassName: C,
      valueClassName: C,
      valueRenderFn: ({
        stat: e
      }) => jsx(K, {
        stat: e,
        shouldSplitName: o
      })
    }];
    s || e.push({
      header: getI18nString("design_systems.libraries_modal.total_variants"),
      sortBy: "num_states",
      headerClassName: R,
      valueClassName: N,
      valueRenderFn: ({
        stat: e
      }) => e.type === PrimaryWorkflowEnum.STATE_GROUP ? e.num_states : getI18nString("design_systems.libraries_modal.n_a")
    });
    e.push({
      header: getI18nString("design_systems.libraries_modal.total_instances"),
      sortBy: "num_existing_instances",
      headerClassName: R,
      valueClassName: N,
      valueRenderFn: ({
        stat: e
      }) => e.num_existing_instances.toLocaleString()
    });
    e.push({
      header: getI18nString("design_systems.libraries_modal.inserts_last_duration", {
        duration: LT(t)
      }),
      sortBy: "num_insertions",
      headerClassName: R,
      valueClassName: N,
      valueRenderFn: ({
        stat: e
      }) => e.num_insertions.toLocaleString()
    });
    e.push({
      header: getI18nString("design_systems.libraries_modal.detaches_last_duration", {
        duration: LT(t)
      }),
      sortBy: "num_detachments",
      headerClassName: R,
      valueClassName: N,
      valueRenderFn: ({
        stat: e
      }) => e.num_detachments.toLocaleString()
    });
    return e;
  }, [s, t, o]);
  let d = useCallback(e => e.map(e => e.type === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.key).join(","), []);
  let c = useCallback(e => (e.type === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.key) ?? e.name, []);
  return jsx(F, {
    columns: l,
    defaultSortBy: "num_existing_instances",
    defaultSortIsDescending: !0,
    emptyStateText: getI18nString("design_systems.libraries_modal.dsa_empty_components"),
    getListKey: d,
    getStatKey: c,
    onRowClick: i,
    onScrollTo: a,
    showingStateStats: s,
    statsData: e
  });
}
export function $$V3({
  statsData: e,
  duration: t,
  onRowClick: i,
  onScrollTo: a
}) {
  let s = useMemo(() => [{
    header: getI18nString("design_systems.libraries_modal.style_name"),
    sortBy: "alpha",
    headerClassName: C,
    valueClassName: C,
    valueRenderFn: Y
  }, {
    header: getI18nString("design_systems.libraries_modal.total_instances"),
    sortBy: "num_existing_instances",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.num_existing_instances.toLocaleString()
  }, {
    header: getI18nString("design_systems.libraries_modal.inserts_last_duration", {
      duration: LT(t)
    }),
    sortBy: "num_insertions",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.num_insertions.toLocaleString()
  }, {
    header: getI18nString("design_systems.libraries_modal.detaches_last_duration", {
      duration: LT(t)
    }),
    sortBy: "num_detachments",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.num_detachments.toLocaleString()
  }], [t]);
  let o = useCallback(e => e.map(e => e.key).join(","), []);
  let l = useCallback(e => e.key, []);
  return jsx(F, {
    statsData: e,
    onRowClick: i,
    onScrollTo: a,
    columns: s,
    getListKey: o,
    getStatKey: l,
    defaultSortBy: "num_existing_instances",
    defaultSortIsDescending: !0,
    emptyStateText: getI18nString("design_systems.libraries_modal.dsa_empty_styles")
  });
}
export function $$G5({
  statsData: e,
  duration: t,
  onRowClick: i,
  onScrollTo: a
}) {
  let s = useMemo(() => [{
    header: getI18nString("design_systems.libraries_modal.variable_name"),
    sortBy: "alpha",
    headerClassName: C,
    valueClassName: C,
    valueRenderFn: q
  }, {
    header: getI18nString("design_systems.libraries_modal.collection"),
    sortBy: "collection_name",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.collectionName
  }, {
    header: getI18nString("design_systems.libraries_modal.total_instances"),
    sortBy: "num_existing_instances",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.num_existing_instances.toLocaleString()
  }, {
    header: getI18nString("design_systems.libraries_modal.inserts_last_duration", {
      duration: LT(t)
    }),
    sortBy: "num_insertions",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.num_insertions.toLocaleString()
  }, {
    header: getI18nString("design_systems.libraries_modal.detaches_last_duration", {
      duration: LT(t)
    }),
    sortBy: "num_detachments",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.num_detachments.toLocaleString()
  }], [t]);
  let o = useCallback(e => e.map(e => e.key).join(","), []);
  let l = useCallback(e => e.key, []);
  return jsx(F, {
    statsData: e,
    onRowClick: i,
    onScrollTo: a,
    columns: s,
    getListKey: o,
    getStatKey: l,
    defaultSortBy: "num_existing_instances",
    defaultSortIsDescending: !0,
    emptyStateText: getI18nString("design_systems.libraries_modal.dsa_empty_variables")
  });
}
export function $$z4({
  statsData: e,
  onScrollTo: t
}) {
  let i = useMemo(() => [{
    header: getI18nString("design_systems.libraries_modal.mode_name"),
    sortBy: "alpha",
    headerClassName: C,
    valueClassName: C,
    valueRenderFn: $
  }, {
    header: getI18nString("design_systems.libraries_modal.collection"),
    sortBy: "collection_name",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.collectionName
  }, {
    header: getI18nString("design_systems.libraries_modal.total_instances"),
    sortBy: "num_existing_instances",
    headerClassName: R,
    valueClassName: N,
    valueRenderFn: ({
      stat: e
    }) => e.num_existing_instances.toLocaleString()
  }], []);
  let a = useCallback(e => e.map(e => e.id).join(","), []);
  let s = useCallback(e => e.id, []);
  return jsx(F, {
    statsData: e,
    onScrollTo: t,
    columns: i,
    getListKey: a,
    getStatKey: s,
    defaultSortBy: "num_existing_instances",
    defaultSortIsDescending: !0
  });
}
export function $$H1({
  statsData: e,
  onScrollTo: t
}) {
  let i = useMemo(() => [{
    header: getI18nString("design_systems.libraries_modal.file_name"),
    sortBy: "alpha",
    headerClassName: P,
    valueClassName: P,
    valueRenderFn: ({
      stat: e
    }) => jsx(Ph, {
      newTab: !0,
      href: jN({
        file: {
          key: e.fileKey,
          name: e.fileName,
          editorType: FFileType.DESIGN
        }
      }),
      innerText: "DSAnalytics File Open",
      trackingProperties: {
        libraryFileKey: e.fileKey
      },
      trusted: !0,
      children: e.fileName
    })
  }, {
    header: getI18nString("design_systems.libraries_modal.team"),
    sortBy: "teamNames",
    headerClassName: O,
    valueClassName: O,
    valueRenderFn: ({
      stat: e
    }) => e.teamName
  }, {
    header: getI18nString("design_systems.libraries_modal.instances_all_time"),
    sortBy: "instances",
    headerClassName: D,
    valueClassName: L,
    valueRenderFn: ({
      stat: e
    }) => e.numInstances.toLocaleString()
  }, {
    header: getI18nString("design_systems.libraries_modal.last_modified"),
    sortBy: "lastModified",
    headerClassName: D,
    valueClassName: L,
    valueRenderFn: ({
      stat: e
    }) => jsx(h1, {
      date: e.lastModified
    })
  }], []);
  let a = useCallback(e => e.map(e => e.fileName).join(","), []);
  let s = useCallback(e => e.fileKey, []);
  return jsx(F, {
    statsData: e,
    onScrollTo: t,
    columns: i,
    getListKey: a,
    getStatKey: s,
    defaultSortBy: "instances",
    defaultSortIsDescending: !0
  });
}
function W({
  name: e,
  splitBySlash: t
}) {
  let i = useMemo(() => t ? e.split("/") : [_$$w(e)], [e, t]);
  return i.length <= 1 ? jsx("span", {
    children: i[i.length - 1]
  }) : jsxs("span", {
    children: [jsxs("span", {
      className: "stats_table--prefixText--F27fr",
      children: [i.slice(0, i.length - 1).join("/"), "/"]
    }), jsx("span", {
      children: i[i.length - 1]
    })]
  });
}
function K({
  stat: e,
  shouldSplitName: t = !1
}) {
  return jsxs(Fragment, {
    children: [jsx(oW, {
      src: e.thumbnail_url,
      className: "stats_table--componentAvatar--GQaA5",
      alt: ""
    }), jsx("div", {
      className: T,
      children: jsx(W, {
        name: e.name,
        splitBySlash: t
      })
    })]
  });
}
function Y({
  stat: e
}) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "stats_table--styleIcon--4WrDI",
      children: jsx(zi, {
        dsStyle: e,
        disableOutline: !0
      })
    }), jsx("div", {
      className: T,
      children: jsx(W, {
        name: e.name,
        splitBySlash: !1
      })
    })]
  });
}
function q({
  stat: e
}) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "stats_table--variableIcon--oRMnc",
      children: jsx(i, {
        type: e.resolvedType
      })
    }), jsx("div", {
      className: T,
      children: jsx(W, {
        name: e.name,
        splitBySlash: !1
      })
    })]
  });
}
function $({
  stat: e
}) {
  return jsxs(Fragment, {
    children: [jsx(d, {}), jsx("div", {
      className: T,
      children: jsx(W, {
        name: e.name,
        splitBySlash: !1
      })
    })]
  });
}
let Z = {
  [_$$l.PRODUCT_COMPONENTS]: "subscriptionFileViewComponentStats:state",
  [_$$l.STYLES]: "subscriptionFileViewStyleStats:state",
  [_$$l.VARIABLES]: "subscriptionFileViewVariableStats:state",
  [_$$l.VARIABLE_MODES]: "subscriptionFileViewVariableModeStats:state",
  [_$$l.FILES]: "subscriptionFileViewFileStats:state"
};
let X = createLocalStorageAtom(Z[_$$l.PRODUCT_COMPONENTS], null);
let Q = createLocalStorageAtom(Z[_$$l.STYLES], null);
let J = createLocalStorageAtom(Z[_$$l.VARIABLES], null);
let ee = createLocalStorageAtom(Z[_$$l.VARIABLE_MODES], null);
let et = createLocalStorageAtom(Z[_$$l.FILES], null);
export const Dd = $$B0;
export const KZ = $$H1;
export const Yu = $$M2;
export const $G = $$V3;
export const vA = $$z4;
export const Gy = $$G5;
