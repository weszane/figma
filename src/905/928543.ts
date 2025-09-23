import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, memo, useState, useEffect, useRef, PureComponent, Fragment as _$$Fragment } from "react";
import { sortByDateProperty, sortByPropertyWithOptions, sortByProperty } from "../figma_app/656233";
import { Link } from "../905/438674";
import { getFeatureFlags } from "../905/601108";
import { getStorage } from "../905/657224";
import d from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { w as _$$w } from "../905/835474";
import { G5 } from "../figma_app/795674";
import { JD, h1 } from "../905/986103";
import { x as _$$x } from "../905/211326";
import { P as _$$P } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { Ph } from "../905/160095";
import { getI18nString, renderI18nText } from "../905/303541";
import { b as _$$b } from "../905/217163";
import { LibraryAgeEnum, getDraftsSidebarString, PrimaryWorkflowEnum } from "../figma_app/633080";
import { e0 } from "../905/696396";
import { DSAApiServiceInstance } from "../905/669853";
import { c as _$$c } from "../905/167005";
import { i as _$$i } from "../905/565139";
import { o as _$$o } from "../905/918279";
import { V as _$$V } from "../905/697254";
import { A as _$$A } from "../905/27250";
import { Hj, FO, tD } from "../905/682977";
import { nZ } from "../figma_app/277330";
import { t as _$$t2 } from "../905/414363";
import { n as _$$n } from "../905/402643";
import O from "../vendor/923386";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { SvgComponent } from "../905/714743";
import { KindEnum } from "../905/129884";
import { yu, Lp } from "../905/712714";
import { A as _$$A2 } from "../5724/600086";
var c = d;
var D = O;
function B({
  fileVersion: e,
  componentKey: t,
  orgId: i
}) {
  let [a] = setupResourceAtomHandler(yu({
    fileVersion: e?.toString(),
    componentKey: t
  }));
  let [s] = setupResourceAtomHandler(Lp({
    orgId: i ?? void 0,
    fileVersion: e?.toString(),
    componentKey: t
  }));
  let o = "loaded" === a.status && "loaded" === s.status && !!a.data && !!s.data;
  let l = useMemo(() => {
    if (!o) return;
    let e = a.data.total_file_usage;
    let t = a.data.total_instances;
    let i = a.data.total_team_usage;
    return {
      files: e - s.data.length,
      instances: t - D()(s.data, "num_instances"),
      teams: i - s.data.reduce((e, t) => e.add(t.team_name), new Set()).size
    };
  }, [a.data, s.data, o]);
  let d = useMemo(() => l ? [{
    header: getI18nString("design_systems.dsa.files"),
    count: l.files,
    className: "stats_for_missing_files_view--filesColumn--9W0Wa stats_for_missing_files_view--_baseColumn--b7nv9 library_item_view--oneComponentViewFileNameCol--d9Nqk text--fontPos11--2LvXf text--_fontBase--QdLsd"
  }, {
    header: getI18nString("design_systems.dsa.teams"),
    count: l.teams,
    className: "stats_for_missing_files_view--teamsColumn--mCRJ7 stats_for_missing_files_view--_baseColumn--b7nv9 library_item_view--oneComponentViewTeamCol--2iMZ2 text--fontPos11--2LvXf text--_fontBase--QdLsd"
  }, {
    header: getI18nString("design_systems.dsa.instances_all_time"),
    count: l.instances,
    className: "stats_for_missing_files_view--instancesColumn--pqnCO stats_for_missing_files_view--_baseColumn--b7nv9 library_item_view--componentNumCol--3rX5Q library_modal_stats--numCol---FbhI text--fontPos11--2LvXf text--_fontBase--QdLsd"
  }] : [], [l]);
  return o ? jsxs(Fragment, {
    children: [jsxs("div", {
      className: "stats_for_missing_files_view--heading--giOj- text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: [jsx(SvgComponent, {
        svg: _$$A2,
        className: "stats_for_missing_files_view--infoIcon--4-RnW",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("design_systems.dsa.not_visible_help")
      }), renderI18nText("design_systems.dsa.not_visible"), jsx(Ph, {
        newTab: !0,
        href: "https://help.figma.com/hc/articles/360039238353-View-and-explore-library-analytics",
        trusted: !0,
        children: renderI18nText("design_systems.dsa.learn_more")
      })]
    }), jsx(Hj, {
      className: "stats_for_missing_files_view--headerRow--7en-p library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: d.map(e => jsx("div", {
        className: e.className,
        children: e.header
      }, e.header))
    }), jsx(Hj, {
      className: "stats_for_missing_files_view--statsRow--W5gDv library_item_view--componentRow--KcAgz text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: d.map(e => jsx("div", {
        className: e.className,
        children: e.count
      }, e.header))
    })]
  }) : null;
}
let V = "library_item_view--componentNumCol--3rX5Q library_modal_stats--numCol---FbhI text--fontPos11--2LvXf text--_fontBase--QdLsd";
let G = "library_item_view--componentNumColVal--44bAM library_item_view--componentNumCol--3rX5Q library_modal_stats--numCol---FbhI text--fontPos11--2LvXf text--_fontBase--QdLsd";
let z = "library_item_view--componentViewFooter--QIMIV file_view_styles--componentViewFooter--JQ0-4 file_view_styles--fileViewFooter--y5O8t";
let H = "library_item_view--componentViewFooterText--YLOdY";
let W = "library_item_view--oneComponentViewFileNameCol--d9Nqk text--fontPos11--2LvXf text--_fontBase--QdLsd";
let K = "library_item_view--oneComponentViewTeamCol--2iMZ2 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let Y = LibraryAgeEnum.THIRTY_DAYS;
let $$q1 = memo(function (e) {
  let {
    fileVersion
  } = selectWithShallowEqual(e => ({
    fileVersion: e.fileVersion
  }));
  let [i, a] = useState(null);
  useEffect(() => {
    DSAApiServiceInstance.getStateGroupComponents({
      startTs: G5(_$$o[Y]).toString(),
      endTs: G5(0).toString(),
      fv: `${fileVersion || 0}`,
      stateGroupKey: e.stateGroup.key
    }).then(e => {
      let t = e?.data?.meta || {
        state_groups: [],
        components: []
      };
      a({
        components: t.components,
        stateGroups: t.state_groups
      });
    }).catch(console.error);
  }, [fileVersion, e.stateGroup.key]);
  let s = useMemo(() => i?.components.filter(t => t.containing_frame?.containingStateGroup?.nodeId === e.stateGroup.node_id), [i, e.stateGroup]);
  let o = useMemo(() => ({
    stateGroupKey: e.stateGroup.key,
    assetType: _$$n.PRODUCT_COMPONENTS
  }), [e.stateGroup.key]);
  let l = useRef(null);
  let d = nZ(l);
  return jsx(_$$t2, {
    page: e0.DSA_STATE_GROUP_VIEW,
    properties: o,
    children: jsxs("div", {
      className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
      children: [jsx(_$$i, {
        assetOrFileName: e.stateGroup.name,
        onBack: e.onBackClick,
        children: !e.hideOpenInFileButton && jsx(et, {
          item: e.stateGroup
        })
      }), jsxs(_$$P, {
        width: e.width,
        className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
        ref: l,
        children: [jsx(ee, {
          item: e.stateGroup,
          fileVersion
        }), jsx(_$$A, {
          itemStats: s,
          duration: Y,
          viewItem: e.onItemClick,
          scrollTo: d,
          showingStateStats: !0
        })]
      }), jsx(Z, {
        numStates: s.length
      })]
    })
  });
});
export function $$$0({
  component: e,
  onBackClick: t,
  width: i,
  orgId: a,
  fileVersion: s,
  hideOpenInFileButton: o
}) {
  let [l, d] = useState(null);
  let c = useMemo(() => ({
    componentKey: e.component_key,
    assetType: _$$n.PRODUCT_COMPONENTS
  }), [e.component_key]);
  let u = e.containing_frame?.containingStateGroup ? _$$w(e.name) : e.name;
  return jsx(_$$t2, {
    page: e0.DSA_COMPONENT_VIEW,
    properties: c,
    children: jsxs("div", {
      className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
      "data-testid": "component-drilldown",
      children: [jsx(_$$i, {
        assetOrFileName: u,
        onBack: t,
        children: !o && jsx(et, {
          item: e
        })
      }), jsxs(_$$P, {
        width: i,
        className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
        children: [jsx(ee, {
          item: e,
          fileVersion: s
        }), jsx(Q, {
          component: e,
          orgId: a,
          setFileStats: d,
          fileVersion: s
        })]
      }), jsx(X, {
        fileStats: l
      })]
    })
  });
}
function Z(e) {
  return jsx("div", {
    className: z,
    children: jsx("div", {
      className: H,
      children: renderI18nText("design_systems.libraries_modal.showing_x_variant", {
        variantCount: e.numStates
      })
    })
  });
}
class X extends PureComponent {
  constructor() {
    super(...arguments);
    this.renderFooterText = () => this.props.fileStats ? (sortByDateProperty(this.props.fileStats, "last_modified"), jsxs("div", {
      className: z,
      children: [jsxs("div", {
        className: H,
        children: [renderI18nText("design_systems.libraries_modal.x_files_shown_open_teams_and_teams_you_re_on", {
          fileCount: this.props.fileStats.length
        }), " ", jsx("div", {
          className: "library_item_view--componentViewFooterInlineLink--ngFvo",
          children: jsx(Link, {
            href: "https://help.figma.com/hc/articles/360039238353",
            newTab: !0,
            trusted: !0,
            children: renderI18nText("design_systems.libraries_modal.learn_more")
          })
        })]
      }), jsx("div", {
        className: "library_item_view--componentViewFooterLastUpdated--K9SEB",
        children: this.props.fileStats.length > 0 && getI18nString("design_systems.libraries_modal.last_updated_time", {
          timeFromNow: JD(this.props.fileStats[0]?.last_modified)
        })
      })]
    })) : null;
  }
  render() {
    return jsx(_$$x, {
      isLoading: null == this.props.fileStats,
      children: this.renderFooterText
    });
  }
}
X.displayName = "ComponentViewFooter";
class Q extends PureComponent {
  constructor(e) {
    super(e);
    this.storageKey = "listFilesByComponentView:state";
    this.storage = getStorage();
    this.setSortByAndOrder = e => {
      let t = this.state.sortBy;
      let i = t !== e || !this.state.isDescending;
      let n = {
        sortBy: e,
        prevCol: t,
        isDescending: i
      };
      this.setState(n);
      this.storage.set(this.storageKey, n);
    };
    let t = this.storage.get(this.storageKey);
    this.state = {
      loaded: !1,
      fileStats: [],
      sortBy: t ? t.sortBy : "alpha",
      prevCol: t ? t.prevCol : null,
      isDescending: !t || t.isDescending
    };
  }
  componentDidMount() {
    DSAApiServiceInstance.getComponentFileUsage({
      orgId: this.props.orgId || "",
      fv: `${this.props.fileVersion || 0}`,
      componentKey: this.props.component.component_key
    }).then(e => {
      let t = e?.data?.meta || [];
      this.setState({
        fileStats: t,
        loaded: !0
      });
      this.props.setFileStats(t);
    }).catch(() => {});
  }
  render() {
    let e = this.state.fileStats;
    switch (this.state.sortBy) {
      case "alpha":
        sortByPropertyWithOptions(e, "file_name", {
          isDescending: !this.state.isDescending
        });
        break;
      case "teamNames":
        sortByPropertyWithOptions(e, "team_name", {
          isDescending: !this.state.isDescending
        });
        break;
      case "instances":
        sortByProperty(e, "num_instances", this.state.isDescending);
        break;
      case "lastModified":
        sortByDateProperty(e, "last_modified", this.state.isDescending);
    }
    let t = [{
      header: getI18nString("design_systems.libraries_modal.file_name"),
      sortBy: "alpha",
      className: W
    }, {
      header: getI18nString("design_systems.libraries_modal.team"),
      sortBy: "teamNames",
      className: K
    }, {
      header: getI18nString("design_systems.libraries_modal.instances_all_time"),
      sortBy: "instances",
      className: V
    }, {
      header: getI18nString("design_systems.libraries_modal.last_modified"),
      sortBy: "lastModified",
      className: V
    }];
    return jsxs("div", {
      children: [!this.state.loaded && jsx(FO, {}), this.state.loaded && jsxs(Fragment, {
        children: [jsx(Hj, {
          className: "library_item_view--headerRow--bkJ-a library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: t.map(e => jsx(tD, {
            className: c()(e.className, "library_item_view--sortableCol--5Kur-", {
              "library_item_view--selectedCol--IZP4x library_modal_stats--selectedCol--pwGl4": this.state.sortBy === e.sortBy
            }),
            isDescending: this.state.isDescending,
            hasArrow: this.state.sortBy === e.sortBy,
            field: e.sortBy,
            sortBy: this.setSortByAndOrder,
            children: e.header
          }, e.sortBy))
        }), e.map(e => jsx(_$$Fragment, {
          children: jsx(J, {
            fileName: e.file_name,
            fileKey: e.file_key,
            teamName: e.team_name,
            numInstances: e.num_instances,
            lastModified: e.last_modified
          })
        }, e.file_key)), getFeatureFlags().dsa_missing_section && jsx(B, {
          fileVersion: this.props.fileVersion,
          componentKey: this.props.component.component_key,
          orgId: this.props.orgId
        })]
      })]
    });
  }
}
Q.displayName = "ListFilesByLibraryItemView";
class J extends PureComponent {
  constructor() {
    super(...arguments);
    this.renderTeamNameField = e => null === e ? jsx("div", {
      className: "library_item_view--oneComponentViewTeamColDrafts--0qRH1 library_item_view--oneComponentViewTeamCol--2iMZ2 text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: getDraftsSidebarString()
    }) : jsx("div", {
      className: K,
      children: e
    });
  }
  render() {
    let e = this.props.fileName ? this.props.fileName : "Untitled";
    let t = this.props.fileKey;
    return jsx(Hj, {
      className: "library_item_view--componentRow--KcAgz text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: jsxs(Fragment, {
        children: [jsx("div", {
          className: W,
          children: jsx(Ph, {
            href: `/file/${t}/${encodeURIComponent(e)}`,
            innerText: "DSAnalytics File Open",
            trackingProperties: {
              libraryFileKey: t
            },
            newTab: !0,
            trusted: !0,
            children: e
          })
        }), this.renderTeamNameField(this.props.teamName), jsx("div", {
          className: G,
          children: this.props.numInstances.toLocaleString()
        }), jsx("div", {
          className: G,
          children: jsx(h1, {
            date: this.props.lastModified
          })
        })]
      })
    });
  }
}
J.displayName = "ComponentStatRow";
class ee extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      statsData: null
    };
  }
  componentDidMount() {
    this.props.item.type === PrimaryWorkflowEnum.COMPONENT ? DSAApiServiceInstance.getComponent({
      fv: `${this.props.fileVersion || 0}`,
      componentKey: this.props.item.component_key
    }).then(e => {
      let t = e?.data?.meta || null;
      this.setState({
        statsData: t
      });
    }).catch(() => {}) : DSAApiServiceInstance.getStateGroup({
      fv: `${this.props.fileVersion || 0}`,
      stateGroupKey: this.props.item.key
    }).then(e => {
      let t = e?.data?.meta || null;
      this.setState({
        statsData: t
      });
    }).catch(() => {});
  }
  render() {
    let e = [{
      type: _$$V.DESCRIPTION_AND_IMAGE,
      imageData: {
        type: "image",
        url: this.props.item.thumbnail_url
      },
      description: this.props.item.description || getI18nString("design_systems.libraries_modal.n_a")
    }, {
      type: _$$V.STAT,
      header: getI18nString("design_systems.libraries_modal.total"),
      count: this.state.statsData?.total_instances ?? null,
      word: getI18nString("design_systems.libraries_modal.plural.instance", {
        instanceCount: this.state.statsData?.total_instances ?? 0
      })
    }, {
      type: _$$V.STAT,
      header: getI18nString("design_systems.libraries_modal.used_by"),
      count: this.state.statsData?.total_team_usage ?? null,
      word: getI18nString("design_systems.libraries_modal.plural.team", {
        teamCount: this.state.statsData?.total_team_usage ?? 0
      })
    }, {
      type: _$$V.STAT,
      header: getI18nString("design_systems.libraries_modal.used_in"),
      count: this.state.statsData?.total_file_usage ?? null,
      word: getI18nString("design_systems.libraries_modal.plural.file", {
        fileCount: this.state.statsData?.total_file_usage ?? 0
      })
    }];
    return jsx(_$$c, {
      isLoading: null == this.state.statsData,
      stats: e
    });
  }
}
function et({
  item: e
}) {
  let t = _$$b({
    libraryKey: e.library_key,
    nodeId: e.node_id,
    mainComponent: !0
  });
  return t.data?.link == null || t.data?.type === "community" ? null : jsx(Link, {
    href: t.data.link,
    newTab: !0,
    trusted: !0,
    children: renderI18nText("design_systems.libraries_modal.open_in_file")
  });
}
ee.displayName = "OneLibraryItemStatsView";
export const E = $$$0;
export const v = $$q1;