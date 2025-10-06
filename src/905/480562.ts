import { registerTooltip } from "../905/524523";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useCallback, PureComponent, useState, useId, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "../905/443068";
import { B as _$$B } from "../905/950875";
import { L as _$$L } from "../905/704296";
import { getFeatureFlags } from "../905/601108";
import { P as _$$P } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { postUserFlag } from "../905/985254";
import { selectUserFlag } from "../905/940356";
import { TrackingKeyEnum } from "../905/696396";
import { n as _$$n, l as _$$l } from "../905/402643";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { r as _$$r } from "../905/571562";
import E from "../vendor/239910";
import { ms, MM, rr } from "../figma_app/236327";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { h as _$$h } from "../905/589458";
import { o as _$$o } from "../905/918279";
import { LoadingSpinner } from "../905/443820";
import { dayjs } from "../905/920142";
import { G5, S6 } from "../figma_app/795674";
import { SvgComponent } from "../905/714743";
import { TrackedLink } from "../905/160095";
import { KindEnum } from "../905/129884";
import { DSAApiServiceInstance } from "../905/669853";
import { A as _$$A2 } from "../1617/380980";
import { resourceUtils } from "../905/989992";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { fX, Im } from "../905/627262";
import { bu, k9, DQ, y$ } from "../905/712714";
import { getUserLocale } from "../figma_app/514043";
import { A as _$$A3 } from "../905/27250";
import { throwTypeError } from "../figma_app/465776";
import { Tabs } from "../905/150656";
import { Label } from "../905/270045";
import { bL, DZ, mc, zW, c$ } from "../905/493196";
import { analyticsEventManager } from "../905/449184";
import { selectCurrentUser } from "../905/372672";
import { useUniqueId } from "../905/27228";
import { Dd, $G, Yu, Gy, vA } from "../905/193404";
import { FO } from "../905/682977";
import { ue, nZ } from "../figma_app/277330";
import { t as _$$t3 } from "../905/414363";
let _ = "dsa_file_view_analytics_footer--componentViewFooter--J00R3 file_view_styles--componentViewFooter--JQ0-4 file_view_styles--fileViewFooter--y5O8t";
let A = "dsa_file_view_analytics_footer--libraryViewFooterNumText--tmYqO text--fontPos11--2LvXf text--_fontBase--QdLsd";
function y({
  assetType: e,
  numItems: t
}) {
  return getFeatureFlags().dsa_styles_variables_ui ? jsx("div", {
    className: _,
    children: jsx("span", {
      className: A,
      children: jsx(b, {
        assetType: e,
        numItems: t
      })
    })
  }) : jsx("div", {
    className: _,
    children: jsx("span", {
      className: A,
      children: renderI18nText("design_systems.libraries_modal.plural.num_components_shown", {
        numComponents: t
      })
    })
  });
}
function b({
  assetType: e,
  numItems: t
}) {
  switch (e) {
    case _$$n.PRODUCT_COMPONENTS:
      return renderI18nText("design_systems.libraries_modal.plural.num_library_components_shown", {
        numItems: t
      });
    case _$$n.STYLES:
      return renderI18nText("design_systems.libraries_modal.plural.num_library_styles_shown", {
        numItems: t
      });
    case _$$n.VARIABLES:
      return renderI18nText("design_systems.libraries_modal.plural.num_library_variables_shown", {
        numItems: t
      });
  }
}
var x = E;
let T = "library-comparison-dropdown";
function k(e) {
  return null != e && e.type === T;
}
function R({
  assetType: e,
  libraryFile: t,
  libraries: i,
  comparisonLibraryKey: s,
  comparisonLibrary: o,
  onResetComparison: l,
  onSelectComparison: c
}) {
  let u = useDispatch();
  let m = useSelector(e => e.dropdownShown);
  let h = useMemo(() => {
    if (!t) return N;
    let e = [...i.files];
    sortByPropertyWithOptions(e, "library_file_name");
    return e.filter(e => e.library_file_key !== t.key);
  }, [i.files, t]);
  let g = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    k(m) ? u(hideDropdownAction()) : u(showDropdownThunk({
      type: T
    }));
  }, [u, m]);
  let _ = useCallback(e => () => {
    c(e);
  }, [c]);
  let A = useMemo(() => {
    if (!getFeatureFlags().dsa_styles_variables_ui) return renderI18nText("design_systems.libraries_modal.component_insertions");
    switch (e) {
      case _$$n.PRODUCT_COMPONENTS:
        return renderI18nText("design_systems.libraries_modal.component_insertions");
      case _$$n.STYLES:
        return renderI18nText("design_systems.libraries_modal.style_insertions");
      case _$$n.VARIABLES:
        return renderI18nText("design_systems.libraries_modal.variable_insertions");
    }
  }, [e]);
  let y = useMemo(() => x()(h, "library_file_key"), [h]);
  let b = useMemo(() => h.map(e => ({
    value: e.library_file_key,
    label: e.library_file_name
  })), [h]);
  let E = useCallback(e => {
    if (!e) {
      l();
      return;
    }
    let t = y[e];
    t && c(t);
  }, [y, c, l]);
  return jsxs("div", {
    className: getFeatureFlags().dse_fpl_wave_1 ? "dsa_file_view_analytics_header--libraryAnalyticsHeaderFpl--CcU2g dsa_file_view_analytics_header--libraryAnalyticsHeader--OsDNz library_modal_stats--libraryAnalyticsHeader--9giDS text--fontPos14--OL9Hp text--_fontBase--QdLsd" : "dsa_file_view_analytics_header--libraryAnalyticsHeader--OsDNz library_modal_stats--libraryAnalyticsHeader--9giDS text--fontPos14--OL9Hp text--_fontBase--QdLsd",
    children: [jsx("h3", {
      className: "dsa_file_view_analytics_header--libraryAnalyticsHeading--jQXah",
      children: A
    }), jsxs("div", {
      className: "dsa_file_view_analytics_header--libraryComparison--i1HxB text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: [s && jsx("span", {
        className: "dsa_file_view_analytics_header--comparisonDot--Ftd-Z"
      }), getFeatureFlags().dse_fpl_wave_1 ? jsx(_$$h, {
        labelContent: renderI18nText("design_systems.libraries_modal.compare_with"),
        value: s ?? void 0,
        onChange: E,
        options: b,
        placeholder: getI18nString("design_systems.libraries_modal.select_library"),
        resetOption: getI18nString("design_systems.libraries_modal.none")
      }) : jsxs(Fragment, {
        children: [jsx("span", {
          className: "dsa_file_view_analytics_header--libraryComparisonText--yPSZD",
          children: renderI18nText("design_systems.libraries_modal.compare_with")
        }), jsxs("span", {
          onClick: g,
          className: "dsa_file_view_analytics_header--libraryComparisonDropdown--RjNol",
          children: [o ?? renderI18nText("design_systems.libraries_modal.select_library"), jsx("div", {
            className: "dsa_file_view_analytics_header--dropdownIcon--lXL7e",
            children: jsx(_$$r, {})
          })]
        }), jsx("div", {
          children: k(m) && jsxs(ms, {
            className: "dsa_file_view_analytics_header--dropdown--5HdGZ",
            children: [jsx(MM, {
              onClick: l,
              checked: null == s,
              children: renderI18nText("design_systems.libraries_modal.none")
            }, "none"), h.map(e => jsx(rr, {
              onClick: _(e),
              innerText: "DS Analytics Compare Libraries",
              checked: s === e.library_file_key,
              trackingProperties: {
                libraryKeyToCompare: e.library_file_key
              },
              children: jsx("div", {
                className: "dsa_file_view_analytics_header--libraryComparisonItem--TlOgB ellipsis--ellipsis--Tjyfa",
                children: e.library_file_name
              })
            }, e.library_file_key))]
          })
        })]
      })]
    })]
  });
}
let N = [];
function L(e) {
  return dayjs(e).format("MMM D");
}
let V = "library_analytics_view--csvLinkWrapper--sKpaJ";
let G = "library_analytics_view--dotContainer--PRTz9";
let z = "library_analytics_view--invisibleDot--F3kZR";
let H = "library_analytics_view--dotPadding--DrIGx";
let W = "library_analytics_view--dot--ltERR";
let K = "library_analytics_view--dotSmall--8oEk0";
let Y = "library_analytics_view--graphContainer--fdFN0 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let q = "library_analytics_view--graphLine--8JnXf";
let $ = "library_analytics_view--graphLoading--xF2lO library_analytics_view--graphContainer--fdFN0 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let Z = "library_analytics_view--graphLoadingInner--QL1Id";
let X = "library_analytics_view--graphSpinner--umu0y";
let Q = "library_analytics_view--grayCell--3BQVt";
let J = "library_analytics_view--noTeamUsage--TJ79m";
let ee = "library_analytics_view--numColGray--OS-BX";
let et = "library_analytics_view--svgContainer--vKe6s";
let ei = "library_analytics_view--teamUsageContainer--bOhlE";
let en = "library_analytics_view--teamUsage--MD3SD";
let er = "library_analytics_view--teamUsageHeader--6SYVB text--fontPos14--OL9Hp text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa";
let ea = "library_analytics_view--teamUsageHeaderWrapper--mJFh2";
let es = "library_analytics_view--usageLoading--XAu34";
let eo = "library_analytics_view--usageRow--od4F8";
let el = "library_analytics_view--usageRowV2--JkwwL";
let ed = "library_analytics_view--usageRowTeamName--jNRz3 ellipsis--ellipsis--Tjyfa";
let ec = "library_analytics_view--xAxisTop--rw38A library_analytics_view--xAxis--pcnz0";
let eu = "library_analytics_view--xAxisBottom--r2OhS library_analytics_view--xAxis--pcnz0";
let ep = "library_analytics_view--xLabel--xp8uy";
let em = "library_analytics_view--yAxis--Y8sSo";
class eg extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      library1TimeSeries: null,
      library2TimeSeries: null,
      library1TeamUsage: null,
      library2TeamUsage: null
    };
  }
  componentDidMount() {
    this.fetchInsertions("primary");
    this.props.comparisonFileKey && this.fetchInsertions("comparison");
  }
  componentDidUpdate(e) {
    if (e.libraryFile.key !== this.props.libraryFile.key && this.fetchInsertions("primary"), null === this.props.comparisonFileKey) {
      this.setState({
        library2TimeSeries: null,
        library2TeamUsage: null
      });
      return;
    }
    e.comparisonFileKey !== this.props.comparisonFileKey && this.fetchInsertions("comparison");
  }
  fetchInsertions(e) {
    let t = "primary" === e ? this.props.libraryFile.key : this.props.comparisonFileKey;
    DSAApiServiceInstance.getLibraryWeeklyInsertions({
      fileKey: t,
      startTs: G5(this.props.numDays + 7).toString(),
      endTs: S6(1).toString()
    }).then(t => {
      let i = t.data.meta.map(e => ({
        date: new Date(e.date),
        value: e.num_insertions
      }));
      "primary" === e ? this.setState({
        library1TimeSeries: i
      }) : this.setState({
        library2TimeSeries: i
      });
    }).catch(e => {
      console.warn(`Unable to fetch insertions, error: ${e}`);
    });
    DSAApiServiceInstance.getLibraryTeamUsage({
      fileKey: t,
      startTs: G5(this.props.numDays).toString(),
      endTs: S6(1).toString()
    }).then(t => {
      let i = t.data.meta;
      let n = 0;
      for (let e of i) n += +e.num_insertions;
      for (let e of i) e.percent_insertions = `${Math.round(100 * e.num_insertions / n)}%`;
      "primary" === e ? this.setState({
        library1TeamUsage: i
      }) : this.setState({
        library2TeamUsage: i
      });
    }).catch(e => {
      console.warn(`Unable to fetch team usage, error: ${e}`);
    });
  }
  render() {
    let e = this.state.library1TimeSeries;
    let t = this.state.library2TimeSeries || [];
    if (null === e || null === this.state.library1TeamUsage) return jsxs(Fragment, {
      children: [jsx("div", {
        className: $,
        children: jsxs("div", {
          className: Z,
          children: [jsx("div", {
            className: X,
            children: jsx(LoadingSpinner, {
              size: "sm"
            })
          }), jsx("div", {
            children: renderI18nText("design_systems.libraries_modal.loading_library_activity")
          })]
        })
      }), jsx("div", {
        className: ea,
        children: jsx("div", {
          className: er,
          children: renderI18nText("design_systems.libraries_modal.top_teams")
        })
      }), jsx("div", {
        className: ei,
        children: jsx(ef, {
          usage: null,
          startingIndex: 0,
          maxCount: 3
        })
      })]
    });
    let i = Math.max(0, ...[...e, ...t].map(e => e.value));
    let r = 10;
    let a = 20;
    for (; i > 4 * a;) {
      i > 4 * a && (r = a);
      i > 5 * a && (r = 2.5 * a);
      i > 15 * a && (r = 5 * a);
      a *= 10;
    }
    let s = 1;
    this.props.numDays > 60 && (s = 3);
    this.props.numDays > 120 && (s = 6);
    let o = Math.floor(i / r) + 1;
    let l = o * r;
    let d = 119 / o;
    let c = Array.from(Array(o + 1), (e, t) => 1 + Math.floor(t * d));
    function u(e) {
      return 120 - Math.floor(120 * e / l);
    }
    function m(e) {
      return e.map(e => e.join(",")).join(" ");
    }
    let h = e.length > 0 ? +e[0].date : +Date.now();
    let g = (Date.now() - h) / 864e5;
    let f = Math.ceil((this.props.numDays - g) / 7);
    let _ = Array(f).fill(0);
    let A = f - e.length;
    let y = "var(--color-text-brand, #0D99FF)";
    let b = "var(--color-text, black)";
    let v = 100 / f;
    let I = v / 2;
    function E(e) {
      let t = [];
      let i = "";
      if ((e = [...e]).length > 0) {
        let i = [100 - I, u(e[0].value)];
        t.push(i);
      }
      let n = [...t];
      let r = [];
      for (let i = 1; i < e.length; i++) {
        let a = [100 - I - i * v, u(e[i].value)];
        t.push(a);
        r.push(a);
        1 === i && n.push(a);
      }
      i = m(t) + ` ${100 - I - (e.length - 1) * v},121 ${100 - I},121`;
      A < 0 && e.pop();
      return {
        data: e,
        dashed: n,
        restOfPts: r,
        polygon: i
      };
    }
    let {
      data,
      dashed,
      restOfPts,
      polygon
    } = E(e);
    let {
      data: _data,
      dashed: _dashed,
      restOfPts: _restOfPts
    } = E(t);
    function N(e, t, i) {
      return jsx("polyline", {
        points: m(e),
        vectorEffect: "non-scaling-stroke",
        strokeLinejoin: "round",
        style: {
          fill: "none",
          stroke: t,
          strokeWidth: 2,
          strokeDasharray: i
        }
      });
    }
    let P = 365 === this.props.numDays;
    function D(e, t) {
      return jsx("div", {
        className: G,
        children: _.map((i, r) => e.length > r ? jsx("div", {
          style: {
            marginTop: u(e[r].value) - 6.5
          },
          className: H,
          "data-tooltip-show-above": !0,
          "data-tooltip-show-immediately": !0,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": [getI18nString("design_systems.libraries_modal.dsa_graph_tooltip", {
            numInsertions: e[r].value
          }), e[r].date.toLocaleDateString()].join("\n"),
          children: jsx("div", {
            className: P ? K : W,
            style: {
              backgroundColor: t
            }
          })
        }, r) : jsx("div", {
          className: z
        }, r))
      });
    }
    let F = this.state.library1TeamUsage;
    return jsxs(Fragment, {
      children: [jsxs("div", {
        className: Y,
        children: [jsx("div", {
          className: em,
          children: c.map((e, t) => jsx("div", {
            children: l - t * r
          }, t))
        }), D(data, y), D(_data, b), jsxs("div", {
          className: et,
          children: [jsx("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 120",
            preserveAspectRatio: "none",
            children: data.length > 1 && jsxs(Fragment, {
              children: [jsx("polygon", {
                points: polygon,
                style: {
                  fill: y,
                  fillOpacity: .1
                }
              }), N(restOfPts, y, ""), _restOfPts && N(_restOfPts, b, ""), N(dashed, y, "4 4"), _dashed && N(_dashed, b, "4 4"), c.map(e => jsx("polyline", {
                points: `0,${e} 100,${e}`,
                vectorEffect: "non-scaling-stroke",
                style: {
                  fill: "none",
                  stroke: "black",
                  strokeOpacity: .05
                }
              }, e))]
            })
          }), jsx("div", {
            className: ec,
            children: _.map((e, t) => jsx("div", {
              className: ep,
              children: (t + Math.floor(s / 2)) % s == 0 && jsx("div", {
                className: q
              })
            }, t))
          }), jsx("div", {
            className: eu,
            children: _.map((e, t) => jsx("div", {
              className: ep,
              children: (t + Math.floor(s / 2)) % s == 0 && jsx("div", {
                children: L(new Date(h - 6048e5 * t))
              })
            }, t))
          }), A >= 0 && jsx("div", {
            style: {
              width: `${Math.min(A * v + I, 100)}%`
            },
            className: "library_analytics_view--missingData--s6R-h",
            children: jsx("div", {
              className: H,
              "data-tooltip-show-above": !0,
              "data-tooltip-show-immediately": !0,
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": `No data before ${data.length > 0 ? L(data[data.length - 1].date) : L(new Date())}`,
              children: jsx(SvgComponent, {
                svg: _$$A2
              })
            })
          })]
        })]
      }), jsxs("div", {
        className: ea,
        children: [jsx("div", {
          className: er,
          children: renderI18nText("design_systems.libraries_modal.top_teams")
        }), F.length > 0 ? jsx(e_, {
          name: this.props.libraryFile.name,
          usage: F
        }) : null]
      }), jsxs("div", {
        className: ei,
        children: [jsx(ef, {
          usage: F,
          startingIndex: 0,
          maxCount: 3
        }), jsx(ef, {
          usage: F,
          startingIndex: 3,
          maxCount: 3
        })]
      })]
    });
  }
}
function ef({
  usage: e,
  startingIndex: t,
  maxCount: i
}) {
  return jsxs("div", {
    className: en,
    children: [null === e && Array(i).fill(0).map((e, t) => jsxs("div", {
      className: eo,
      children: [jsx("div", {
        className: Q,
        children: `${t + 1}.`
      }), jsx("div", {
        className: es
      })]
    }, t)), e && jsxs(Fragment, {
      children: [e.slice(t, t + i).map((e, i) => jsxs("div", {
        className: eo,
        children: [jsx("div", {
          className: Q,
          children: `${t + i + 1}.`
        }), jsx("div", {
          className: ed,
          children: e.team_name
        }), jsx("div", {
          className: ee,
          children: renderI18nText("design_systems.libraries_modal.plural.insert", {
            insertCount: +e.num_insertions
          })
        }), jsx("div", {
          className: ee,
          children: e.percent_insertions
        })]
      }, i)), 0 === e.length && 0 === t && jsx("div", {
        className: J,
        children: jsx("div", {
          children: renderI18nText("design_systems.libraries_modal.no_usage_recorded")
        })
      })]
    })]
  });
}
function e_({
  name: e,
  usage: t
}) {
  return jsx("div", {
    children: jsxs("div", {
      className: V,
      children: [renderI18nText("design_systems.libraries_modal.plural.num_teams_total", {
        teamCount: t.length
      }), jsx(eA, {
        name: e,
        usage: t
      })]
    })
  });
}
function eA({
  name: e,
  usage: t
}) {
  let i = [[getI18nString("design_systems.libraries_modal.dsa_csv_team_id"), getI18nString("design_systems.libraries_modal.dsa_csv_team_name"), getI18nString("design_systems.libraries_modal.dsa_csv_num_insertions"), getI18nString("design_systems.libraries_modal.dsa_csv_percent_insertions")].join(",")];
  for (let e of t) i.push(`${e.team_id},${e.team_name},${e.num_insertions},${e.percent_insertions}`);
  let r = "data:text/plain;charset=utf-8," + encodeURIComponent(i.join("\r\n"));
  return jsx("span", {
    className: cssBuilderInstance.ml12.$,
    children: jsx(TrackedLink, {
      href: r,
      download: getI18nString("design_systems.libraries_modal.dsa_csv_file_name", {
        libraryName: e
      }),
      innerText: "DSAnalytics Download CSV",
      trusted: !0,
      children: renderI18nText("design_systems.libraries_modal.download_csv")
    })
  });
}
function eE({
  libraryFileKey: e,
  numDays: t,
  assetType: i
}) {
  let [n] = setupResourceAtomHandler(bu({
    fileKey: e ?? "",
    numDays: t
  }), {
    enabled: (!getFeatureFlags().dsa_styles_variables_ui || i === _$$n.PRODUCT_COMPONENTS) && !!e
  });
  let [a] = setupResourceAtomHandler(k9({
    fileKey: e ?? "",
    numDays: t
  }), {
    enabled: (!getFeatureFlags().dsa_styles_variables_ui || i === _$$n.PRODUCT_COMPONENTS) && !!e
  });
  let [s] = setupResourceAtomHandler(DQ({
    fileKey: e ?? ""
  }), {
    enabled: !!e && getFeatureFlags().dsa_styles_variables_ui && i === _$$n.STYLES
  });
  let [o] = setupResourceAtomHandler(y$({
    fileKey: e ?? ""
  }), {
    enabled: !!e && getFeatureFlags().dsa_styles_variables_ui && i === _$$n.VARIABLES
  });
  let l = resourceUtils.all([n, a]);
  let c = useMemo(() => {
    if (!getFeatureFlags().dsa_styles_variables_ui) return n.data;
    switch (i) {
      case _$$n.PRODUCT_COMPONENTS:
        return n.data;
      case _$$n.STYLES:
        return fX(s.data?.weekly_insertions);
      case _$$n.VARIABLES:
        return fX(o.data?.weekly_insertions);
    }
  }, [i, n, s, o]);
  let u = useMemo(() => {
    if (!getFeatureFlags().dsa_styles_variables_ui) return a.data;
    switch (i) {
      case _$$n.PRODUCT_COMPONENTS:
        return a.data;
      case _$$n.STYLES:
        return Im(s.data?.teams, t);
      case _$$n.VARIABLES:
        return Im(o.data?.teams, t);
    }
  }, [i, a, s, o, t]);
  let p = useMemo(() => {
    if (!getFeatureFlags().dsa_styles_variables_ui) return l.status;
    switch (i) {
      case _$$n.PRODUCT_COMPONENTS:
        return l.status;
      case _$$n.STYLES:
        return s.status;
      case _$$n.VARIABLES:
        return o.status;
    }
  }, [i, l, s, o]);
  return useMemo(() => ({
    timeSeries: c,
    teamUsage: u,
    status: p
  }), [p, u, c]);
}
let eS = registerTooltip("dsa_graph", function ({
  numInsertions: e,
  dateString: t
}) {
  let i = useMemo(() => new Intl.NumberFormat(getUserLocale(), {
    useGrouping: !0
  }).format(e), [e]);
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.itemsCenter.justifyCenter.$,
    children: [jsx("div", {
      children: renderI18nText("design_systems.libraries_modal.dsa_graph_tooltip", {
        numInsertions: i
      })
    }), jsx("div", {
      className: "dsa_graph_tooltip--date--mV0EW",
      children: t
    })]
  });
}, e => ({
  numInsertions: parseInt(e.getAttribute("data-tooltip-dsa-graph-num-insertions") ?? "0"),
  dateString: e.getAttribute("data-tooltip-dsa-graph-date-string") ?? ""
}));
function ew({
  assetType: e,
  numDays: t,
  libraryFile: i,
  comparisonLibraryKey: r
}) {
  let {
    timeSeries,
    teamUsage,
    status
  } = eE({
    libraryFileKey: i?.key,
    numDays: t,
    assetType: e
  });
  let {
    timeSeries: _timeSeries
  } = eE({
    libraryFileKey: r,
    numDays: t,
    assetType: e
  });
  return jsx(eC, {
    assetType: e,
    numDays: t,
    libraryFile: i,
    primaryTimeSeries: timeSeries,
    comparisonTimeSeries: _timeSeries,
    primaryTeamUsage: teamUsage,
    isLoading: "loading" === status
  });
}
function eC({
  assetType: e,
  numDays: t,
  libraryFile: i,
  primaryTimeSeries: r,
  comparisonTimeSeries: a,
  primaryTeamUsage: s,
  isLoading: o
}) {
  return o || null === r || null === s ? jsx(eT, {}) : jsx(ek, {
    assetType: e,
    numDays: t,
    libraryFile: i,
    primaryTimeSeries: r,
    comparisonTimeSeries: a ?? [],
    primaryTeamUsage: s
  });
}
function eT({}) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: $,
      children: jsxs("div", {
        className: Z,
        children: [jsx("div", {
          className: X,
          children: jsx(LoadingSpinner, {})
        }), jsx("div", {
          children: renderI18nText("design_systems.libraries_modal.loading_library_activity")
        })]
      })
    }), jsx("div", {
      className: ea,
      children: jsx("div", {
        className: er,
        children: renderI18nText("design_systems.libraries_modal.top_teams")
      })
    }), jsx("div", {
      className: ei,
      children: jsx(eL, {
        usage: null,
        startingIndex: 0,
        maxCount: 3
      })
    })]
  });
}
function ek({
  assetType: e,
  numDays: t,
  libraryFile: i,
  primaryTimeSeries: a,
  comparisonTimeSeries: s = [],
  primaryTeamUsage: o
}) {
  let l = useMemo(() => Math.max(0, ...[...a, ...s].map(e => e.value)), [a, s]);
  let {
    yMax,
    graphMax,
    markerYs,
    tickInterval,
    xAxisFreq
  } = useMemo(() => {
    let e = 10;
    let i = 20;
    for (; l > 4 * i;) {
      l > 4 * i && (e = i);
      l > 5 * i && (e = 2.5 * i);
      l > 15 * i && (e = 5 * i);
      i *= 10;
    }
    let n = 1;
    t > 60 && (n = 3);
    t > 120 && (n = 6);
    let r = Math.floor(l / e) + 1;
    let a = r * e;
    let s = 119 / r;
    return {
      yMax: 120,
      graphMax: a,
      markerYs: Array.from(Array(r + 1), (e, t) => 1 + Math.floor(t * s)),
      tickInterval: e,
      xAxisFreq: n
    };
  }, [l, t]);
  let g = useMemo(() => a.length > 0 ? +a[0].date : +Date.now(), [a]);
  let {
    ptWidth,
    missingWeeks,
    wholeWeeksList
  } = useMemo(() => {
    let e = Math.ceil(t / 7);
    let i = Array(e).fill(0);
    let n = e - a.length;
    return {
      ptWidth: 100 / e,
      missingWeeks: n,
      wholeWeeksList: i,
      firstDate: g
    };
  }, [g, a.length, t]);
  let {
    data,
    dashed,
    restOfPts,
    polygon
  } = useMemo(() => eP({
    data: a,
    ptWidth,
    yMax,
    graphMax,
    missingWeeks
  }), [a, ptWidth, yMax, graphMax, missingWeeks]);
  let {
    data: _data2,
    dashed: _dashed2,
    restOfPts: _restOfPts2
  } = useMemo(() => eP({
    data: s,
    ptWidth,
    yMax,
    graphMax,
    missingWeeks
  }), [s, ptWidth, yMax, graphMax, missingWeeks]);
  let w = 365 === t;
  let C = "var(--color-text-brand, #0D99FF)";
  let T = "var(--color-text, black)";
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: Y,
      children: [jsx("div", {
        className: em,
        children: markerYs.map((e, t) => jsx("div", {
          children: graphMax - t * tickInterval
        }, t))
      }), jsx(eO, {
        dots: data,
        color: C,
        weeks: wholeWeeksList,
        dotSize: w ? "small" : "default",
        yMax,
        graphMax
      }), jsx(eO, {
        dots: _data2,
        color: T,
        weeks: wholeWeeksList,
        dotSize: w ? "small" : "default",
        yMax,
        graphMax
      }), jsxs("div", {
        className: et,
        children: [jsx("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 100 120",
          preserveAspectRatio: "none",
          children: data.length > 1 && jsxs(Fragment, {
            children: [jsx("polygon", {
              points: polygon,
              style: {
                fill: C,
                fillOpacity: .1
              }
            }), jsx(eD, {
              pts: restOfPts,
              color: C,
              strokeDasharray: ""
            }), _restOfPts2 && jsx(eD, {
              pts: _restOfPts2,
              color: T,
              strokeDasharray: ""
            }), jsx(eD, {
              pts: dashed,
              color: C,
              strokeDasharray: "4 4"
            }), _dashed2 && jsx(eD, {
              pts: _dashed2,
              color: T,
              strokeDasharray: "4 4"
            }), markerYs.map(e => jsx("polyline", {
              points: `0,${e} 100,${e}`,
              vectorEffect: "non-scaling-stroke",
              style: {
                fill: "none",
                stroke: "black",
                strokeOpacity: .05
              }
            }, e))]
          })
        }), jsx("div", {
          className: ec,
          children: wholeWeeksList.map((e, t) => jsx("div", {
            className: ep,
            children: (t + Math.floor(xAxisFreq / 2)) % xAxisFreq == 0 && jsx("div", {
              className: q
            })
          }, t))
        }), jsx("div", {
          className: eu,
          children: wholeWeeksList.map((e, t) => jsx("div", {
            className: ep,
            children: (t + Math.floor(xAxisFreq / 2)) % xAxisFreq == 0 && jsx("div", {
              children: L(new Date(g - 6048e5 * t))
            })
          }, t))
        })]
      })]
    }), jsxs("div", {
      className: ea,
      children: [jsx("h4", {
        className: er,
        children: renderI18nText("design_systems.libraries_modal.top_teams")
      }), o.length > 0 ? jsx(eF, {
        name: i.name,
        usage: o,
        assetType: e
      }) : null]
    }), jsxs("div", {
      className: ei,
      children: [jsx(eL, {
        usage: o,
        startingIndex: 0,
        maxCount: 3
      }), jsx(eL, {
        usage: o,
        startingIndex: 3,
        maxCount: 3
      })]
    })]
  });
}
function eR({
  pt: e,
  yMax: t,
  graphMax: i
}) {
  return t - Math.floor(e * t / i);
}
function eN(e) {
  return e.map(e => e.join(",")).join(" ");
}
function eP({
  data: e,
  ptWidth: t,
  yMax: i,
  graphMax: n,
  missingWeeks: r
}) {
  let a = t / 2;
  let s = [];
  let o = "";
  if ((e = [...e]).length > 0) {
    let t = [100 - a, eR({
      pt: e[0].value,
      yMax: i,
      graphMax: n
    })];
    s.push(t);
  }
  let l = [...s];
  let d = [];
  for (let r = 1; r < e.length; r++) {
    let o = [100 - a - r * t, eR({
      pt: e[r].value,
      yMax: i,
      graphMax: n
    })];
    s.push(o);
    d.push(o);
    1 === r && l.push(o);
  }
  o = eN(s) + ` ${100 - a - (e.length - 1) * t},${i + 1} ${100 - a},${i + 1}`;
  r < 0 && e.pop();
  return {
    data: e,
    dashed: l,
    restOfPts: d,
    polygon: o
  };
}
function eO({
  dots: e,
  color: t,
  weeks: i,
  dotSize: r,
  yMax: a,
  graphMax: s
}) {
  return jsx("div", {
    className: G,
    children: i.map((i, o) => e.length > o ? jsx("div", {
      style: {
        marginTop: eR({
          pt: e[o].value,
          yMax: a,
          graphMax: s
        }) - 6.5
      },
      className: H,
      "data-tooltip-show-above": !0,
      "data-tooltip-show-immediately": !0,
      "data-tooltip-type": KindEnum.SPECIAL,
      "data-tooltip-dsa-graph-num-insertions": e[o].value,
      "data-tooltip-dsa-graph-date-string": e[o].date.toLocaleDateString(),
      "data-tooltip": eS,
      children: jsx("div", {
        className: "small" === r ? K : W,
        style: {
          backgroundColor: t
        }
      })
    }, o) : jsx("div", {
      className: z
    }, o))
  });
}
function eD({
  pts: e,
  color: t,
  strokeDasharray: i
}) {
  return jsx("polyline", {
    points: eN(e),
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "round",
    style: {
      fill: "none",
      stroke: t,
      strokeWidth: 2,
      strokeDasharray: i
    }
  });
}
function eL({
  usage: e,
  startingIndex: t,
  maxCount: i
}) {
  return jsxs("div", {
    className: en,
    children: [null === e && Array(i).fill(0).map((e, t) => jsxs("div", {
      className: el,
      children: [jsx("div", {
        className: Q,
        children: `${t + 1}.`
      }), jsx("div", {
        className: es
      })]
    }, t)), e && jsxs(Fragment, {
      children: [e.slice(t, t + i).map((e, i) => jsxs("div", {
        className: el,
        children: [jsx("div", {
          className: Q,
          children: `${t + i + 1}.`
        }), jsx("div", {
          className: ed,
          children: e.team_name
        }), jsx("div", {
          className: "library_analytics_view--insertCount--UXHQd library_analytics_view--numColGray--OS-BX",
          children: renderI18nText("design_systems.libraries_modal.plural.insert_count", {
            insertCount: +e.num_insertions
          })
        }), jsx("div", {
          className: ee,
          children: e.percent_insertions
        })]
      }, i)), 0 === e.length && 0 === t && jsx("div", {
        className: J,
        children: jsx("div", {
          children: renderI18nText("design_systems.libraries_modal.no_usage_recorded")
        })
      })]
    })]
  });
}
function eF({
  assetType: e,
  name: t,
  usage: i
}) {
  return jsx("div", {
    children: jsxs("div", {
      className: V,
      children: [renderI18nText("design_systems.libraries_modal.plural.num_teams_total", {
        teamCount: i.length
      }), jsx(eM, {
        name: t,
        usage: i,
        assetType: e
      })]
    })
  });
}
function eM({
  assetType: e,
  name: t,
  usage: i
}) {
  let r = [[getI18nString("design_systems.libraries_modal.dsa_csv_team_id"), getI18nString("design_systems.libraries_modal.dsa_csv_team_name"), getI18nString("design_systems.libraries_modal.dsa_csv_num_insertions"), getI18nString("design_systems.libraries_modal.dsa_csv_percent_insertions")].join(",")];
  for (let e of i) r.push(`${e.team_id},${e.team_name},${e.num_insertions},${e.percent_insertions}`);
  let a = "data:text/plain;charset=utf-8," + encodeURIComponent(r.join("\r\n"));
  return jsx("span", {
    className: cssBuilderInstance.ml12.$,
    children: jsx(TrackedLink, {
      href: a,
      download: getI18nString("design_systems.libraries_modal.dsa_csv_team_file_name", {
        libraryName: t,
        assetType: e
      }),
      innerText: "DSAnalytics Download CSV",
      trusted: !0,
      children: renderI18nText("design_systems.libraries_modal.download_csv")
    })
  });
}
let eY = "library_item_stats_by_asset--statsTableTopMargin--fnX5S";
function eq({
  duration: e,
  itemsList: t,
  onComponentClick: i,
  onStyleClick: r,
  onVariableClick: a,
  onScrollTo: s,
  libraryFile: o
}) {
  switch (t.type) {
    case _$$n.PRODUCT_COMPONENTS:
      let l = {
        type: _$$l.PRODUCT_COMPONENTS,
        items: t.items
      };
      return jsx("div", {
        className: eY,
        children: jsx(Dd, {
          statsData: l,
          duration: e,
          onRowClick: i,
          onScrollTo: s
        })
      });
    case _$$n.STYLES:
      let d = {
        type: _$$l.STYLES,
        items: t.items
      };
      return jsx("div", {
        className: eY,
        children: jsx($G, {
          statsData: d,
          duration: e,
          onRowClick: r,
          onScrollTo: s
        })
      });
    case _$$n.VARIABLES:
      let c = {
        type: _$$l.VARIABLES,
        items: t.items
      };
      let u = {
        type: _$$l.VARIABLE_MODES,
        items: t.modeItems
      };
      return jsx(e$, {
        variableStatsData: c,
        variableModeStatsData: u,
        variableSets: t.variableSets,
        duration: e,
        onVariableClick: a,
        onScrollTo: s,
        libraryFile: o
      });
    default:
      throwTypeError(t);
  }
}
function e$({
  variableStatsData: e,
  variableModeStatsData: t,
  variableSets: i,
  duration: a,
  onVariableClick: s,
  onScrollTo: o,
  libraryFile: l
}) {
  let d = selectCurrentUser();
  let c = useUniqueId();
  let m = i.length > 1;
  let [h, g] = useState();
  let _ = useMemo(() => {
    if (null != h) return i.find(e => e.key === h);
  }, [i, h]);
  let A = useId();
  let y = useCallback(e => {
    g(e);
    analyticsEventManager.trackDefinedEvent("design_systems_analytics.dsa_variable_set_selected", {
      variableSetId: e,
      previousVariableSetId: h,
      fileKey: l?.key,
      orgId: l?.parent_org_id ?? void 0,
      userId: d?.id,
      dsaSessionId: c
    });
  }, [g, h, d, l, c]);
  let b = useMemo(() => null == h ? e : {
    type: _$$l.VARIABLES,
    items: e.items.filter(e => e.variableCollectionKey === h)
  }, [e, h]);
  let v = useMemo(() => null == h ? t : {
    type: _$$l.VARIABLE_MODES,
    items: t.items.filter(e => e.collectionKey === h)
  }, [t, h]);
  let [I, E, x] = Tabs.useTabs({
    variables: !0,
    modes: !0
  });
  let S = "modes" === x.activeTab ? _$$l.VARIABLE_MODES : _$$l.VARIABLES;
  return jsxs(Fragment, {
    children: [jsx(Yu, {
      tableType: S
    }), jsxs("div", {
      className: "library_item_stats_by_asset--tabStrip--6YFuB",
      children: [jsxs(Tabs.TabStrip, {
        manager: x,
        children: [jsx(Tabs.Tab, {
          ...I.variables,
          children: getI18nString("design_systems.libraries_modal.variables")
        }), jsx(Tabs.Tab, {
          ...I.modes,
          children: getI18nString("design_systems.libraries_modal.modes")
        })]
      }), m && jsxs("div", {
        className: cssBuilderInstance.flex.alignCenter.gap8.$,
        children: [jsx(Label, {
          className: "library_item_stats_by_asset--dropdownLabel--pciWg text--fontPos11--2LvXf text--_fontBase--QdLsd",
          htmlFor: A,
          children: getI18nString("design_systems.libraries_modal.collection")
        }), jsxs(bL, {
          value: h,
          onChange: y,
          children: [jsx(DZ, {
            id: A,
            children: _?.name ?? renderI18nText("design_systems.libraries_modal.all")
          }), jsxs(mc, {
            children: [jsx(zW, {
              children: renderI18nText("design_systems.libraries_modal.all")
            }), i.map(e => jsx(c$, {
              value: e.key,
              children: e.name
            }, e.key))]
          })]
        })]
      })]
    }), jsx(Tabs.TabPanel, {
      ...E.variables,
      children: jsx(Gy, {
        statsData: b,
        duration: a,
        onRowClick: s,
        onScrollTo: o
      })
    }), jsx(Tabs.TabPanel, {
      ...E.modes,
      children: jsx(vA, {
        statsData: v,
        onScrollTo: o
      })
    })]
  });
}
export function $$eJ0({
  assetType: e,
  duration: t,
  entrypoint: i,
  libraryFile: a,
  libraries: s,
  onComponentClick: o,
  onStyleClick: l,
  onVariableClick: m,
  width: h
}) {
  let f = useRef(null);
  let [_, A] = useState(null);
  let [b, v] = useState(null);
  let {
    itemsList,
    isLoading
  } = ue({
    assetType: e,
    duration: t,
    libraryFileKey: a?.key,
    entrypoint: i
  });
  let x = itemsList?.items?.length ?? 0;
  let S = useCallback(e => {
    v(e.library_file_name);
    A(e.library_file_key);
  }, []);
  let w = useCallback(() => {
    v(null);
    A(null);
  }, []);
  let C = nZ(f);
  let T = useMemo(() => ({
    assetType: e,
    orgId: a?.parent_org_id
  }), [e, a?.parent_org_id]);
  return jsx(_$$t3, {
    page: TrackingKeyEnum.DSA_FILE_VIEW_ANALYTICS,
    properties: T,
    children: jsxs("div", {
      className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.maxHFull.$,
      children: [jsxs(_$$P, {
        width: h,
        ref: f,
        className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
        children: [jsx(e1, {}), jsx(R, {
          assetType: e,
          comparisonLibrary: b,
          comparisonLibraryKey: _,
          libraryFile: a,
          libraries: s,
          onResetComparison: w,
          onSelectComparison: S
        }), a && (getFeatureFlags().dsa_styles_variables_ui ? jsx(ew, {
          assetType: e,
          numDays: _$$o[t],
          libraryFile: a,
          comparisonLibraryKey: _
        }) : jsx(eg, {
          libraryFile: a,
          comparisonFileKey: _,
          comparisonFileName: b ?? getI18nString("design_systems.libraries_modal.select_library"),
          numDays: _$$o[t]
        }, t)), isLoading && jsx(FO, {}), !isLoading && (getFeatureFlags().dsa_styles_variables_ui ? jsx(eq, {
          libraryFile: a,
          itemsList,
          duration: t,
          onComponentClick: o,
          onStyleClick: l,
          onVariableClick: m,
          onScrollTo: C
        }) : jsx(_$$A3, {
          itemStats: itemsList.items,
          duration: t,
          viewItem: o,
          scrollTo: C
        }))]
      }), !isLoading && jsx(y, {
        assetType: e,
        numItems: x
      })]
    })
  });
}
let e0 = "dsa_dismissed_feb_2025_missing_data_banner";
function e1() {
  let e = selectUserFlag(e0);
  let t = useDispatch();
  let i = useCallback(() => {
    t(postUserFlag({
      [e0]: !0
    }));
  }, [t]);
  return !getFeatureFlags().dsa_missing_data_banner || e ? null : jsxs("div", {
    className: cssBuilderInstance.colorBgInfo.p8.radiusMedium.flex.flexRow.my8.mx16.gap8.$,
    children: [jsx(_$$B, {}), jsxs("div", {
      className: cssBuilderInstance.flex.flex1.flexColumn.gap1.$,
      children: [jsx("strong", {
        children: renderI18nText("design_systems.libraries_modal.dsa_missing_data_header")
      }), jsx("div", {
        children: renderI18nText("design_systems.libraries_modal.dsa_missing_data_message")
      })]
    }), jsx("div", {
      className: cssBuilderInstance.flex.itemsCenter.$,
      children: jsx(IconButton, {
        "aria-label": getI18nString("design_systems.libraries_modal.dsa_missing_data_dismiss"),
        onClick: i,
        children: jsx(_$$L, {})
      })
    })]
  });
}
export const O = $$eJ0;