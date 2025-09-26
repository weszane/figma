import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { bL, gZ } from "../905/598775";
import { Button } from "../905/521428";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { rr, Jn, wv, Ve } from "../figma_app/236327";
import { IntersectionSentinel } from "../905/925868";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { qI, GR, L_ } from "../figma_app/622574";
import { gp } from "../figma_app/973927";
import { useCurrentUserOrg } from "../905/845253";
import { FFileType } from "../figma_app/191312";
import { isBigmaEnabledAlias } from "../figma_app/336853";
import { s as _$$s2 } from "../905/82276";
import { e0 } from "../905/696396";
import { Ht } from "../figma_app/522930";
import { Kt, iq, AF } from "../figma_app/80782";
import { z as _$$z } from "../figma_app/497127";
import { k as _$$k } from "../figma_app/623769";
import { H6, bV, jy, a0 } from "../figma_app/745709";
import { MY } from "../figma_app/589564";
import { A as _$$A } from "../6828/523860";
import { A as _$$A2 } from "../6828/85206";
var c = d;
export function $$L0({
  filterOptions: e,
  selectedIds: t,
  isMyTeamsOnly: r,
  onFilterChange: i,
  userTeamOrWorkspaceIds: s,
  showWorkspaces: o,
  rightAlignOptions: l = !0
}) {
  let d = new Set(t || e.map(e => e.id));
  let c = [];
  let p = [];
  let _ = [];
  let E = !1;
  for (let t of e) {
    d.has(t.id) && _.push(t);
    qI(t) ? E = !0 : s.has(t.id) ? c.push(t) : p.push(t);
  }
  sortByPropertyWithOptions(c, "name");
  sortByPropertyWithOptions(p, "name");
  let y = c.filter(e => d.has(e.id));
  let b = p.filter(e => d.has(e.id));
  let T = function ({
    filterOptionsCount: e,
    userMemberFilterOptionsSelected: t,
    userNonMemberFilterOptionsSelected: r,
    isMyTeamsOnly: n,
    showWorkspaces: i,
    unassignedTeamsSelected: a
  }) {
    let s = [...t, ...r];
    let o = s.length + (a ? 1 : 0);
    return 0 === o ? getI18nString("browse_templates_modal.none_selected") : o === e ? i ? n ? getI18nString("browse_templates_modal.my_teams_only") : getI18nString("browse_templates_modal.all_workspaces") : getI18nString("browse_templates_modal.all_teams") : 1 === o ? a ? getI18nString("browse_templates_modal.other_teams") : s[0].name : getI18nString("browse_templates_modal.first_name_count_more", {
      count: o - 1,
      firstName: s[0].name
    });
  }({
    filterOptionsCount: e.length,
    userMemberFilterOptionsSelected: y,
    userNonMemberFilterOptionsSelected: b,
    showWorkspaces: o,
    isMyTeamsOnly: r,
    unassignedTeamsSelected: d.has(_$$s2)
  });
  let v = (e, t) => {
    i({
      ids: e ? _.reduce((e, r) => r.id === t.id ? e : [...e, r.id], []) : [..._.map(e => e.id), t.id],
      myTeamsOnly: r
    });
  };
  let A = (e, t) => {
    let n = new Set(d);
    e.forEach(e => {
      t ? n.add(e.id) : n.$$delete(e.id);
    });
    i({
      ids: Array.from(n),
      myTeamsOnly: r
    });
  };
  let x = [];
  if (o) {
    if (x.push(...[...c, ...p].filter(e => !!e.id).map(e => {
      let t = d.has(e.id);
      return jsx(rr, {
        checked: t,
        onClick: () => {
          v(t, e);
        },
        displayType: Jn.Checkbox,
        children: e.name
      }, e.id || e.name);
    })), x.length && x.unshift(jsx(wv, {}, "my-teams-only-separator")), x.unshift(jsx(rr, {
      checked: r,
      onClick: () => i({
        ids: t,
        myTeamsOnly: !r
      }),
      displayType: Jn.Checkmark,
      children: renderI18nText("browse_templates_modal.my_teams_only")
    }, "my-teams-only")), E) {
      let e = d.has(_$$s2);
      x.push(jsx(wv, {}, "unassigned-teams-separator"), jsx(rr, {
        checked: e,
        onClick: () => {
          v(e, {
            id: _$$s2
          });
        },
        displayType: Jn.Checkbox,
        children: renderI18nText("browse_templates_modal.other_teams")
      }, "unassigned-teams"));
    }
  } else {
    c.length > 0 && x.push(jsx(rr, {
      displayType: Jn.Checkbox,
      checked: c.length === y.length,
      mixed: c.length > y.length && y.length > 0,
      onClick: () => {
        A(c, y.length < c.length);
      },
      children: renderI18nText("browse_templates_modal.my_teams")
    }, "my-teams"));
    x.push(...c.map(e => {
      let t = d.has(e.id);
      return jsx(rr, {
        checked: t,
        onClick: () => {
          v(t, e);
        },
        displayType: Jn.Checkbox,
        nested: !0,
        children: e.name
      }, e.id || e.name);
    }));
    c.length > 0 && p.length > 0 && x.push(jsx(wv, {}, "other-teams-separator"));
    p.length > 0 && x.push(jsx(rr, {
      displayType: Jn.Checkbox,
      checked: p.length === b.length,
      mixed: p.length > b.length && b.length > 0,
      onClick: () => {
        A(p, b.length < p.length);
      },
      children: renderI18nText("browse_templates_modal.all_others")
    }, "other-teams"));
    x.push(...p.map(e => {
      let t = d.has(e.id);
      return jsx(rr, {
        checked: t,
        onClick: () => {
          v(t, e);
        },
        displayType: Jn.Checkbox,
        nested: !0,
        children: e.name
      }, e.id || e.name);
    }));
  }
  return x.length ? jsxs(AutoLayout, {
    spacing: 0,
    width: "hug-contents",
    children: [jsx("span", {
      className: cssBuilderInstance.colorTextSecondary.$,
      children: renderI18nText("browse_templates_modal.published_from")
    }), jsx(Ve, {
      label: T,
      menuTrackingContextName: e0.TEMPLATES_BROWSE_FILTERS,
      menuTrackingProperties: {
        isEnterpriseOrg: o
      },
      noBorder: !0,
      noRightPadding: !0,
      notDraggable: !0,
      options: x,
      optionsBelowSelector: !0,
      rightAlignOptions: l,
      stayOpenOnSelect: !0
    })]
  }) : null;
}
export function $$P2(e) {
  let [t, r] = useState(!0);
  let a = useRef(null);
  let s = useRef(!1);
  useEffect(() => {
    !0 !== s.current || t || a.current?.scrollIntoView();
  }, [t]);
  return jsxs("section", {
    children: [jsx("button", {
      className: c()(cssBuilderInstance.wFull.alignLeft.sticky.top0.zIndexTemplateModalTeamName.font13.my8.h40.fontMedium.colorBg.$, MY),
      onClick: () => r(!t),
      ref: a,
      children: jsxs("h2", {
        children: [jsx(SvgComponent, {
          className: cssBuilderInstance.relative.inlineFlex.justifyCenter.colorIconTertiary.mx2.w16.$,
          style: {
            top: "-2px"
          },
          svg: t ? _$$A : _$$A2
        }), e.workspaceName && jsxs("span", {
          className: cssBuilderInstance.colorTextSecondary.fontNormal.$,
          children: [e.workspaceName, " /", " "]
        }), e.teamName]
      })
    }), t && jsxs(Fragment, {
      children: [jsx("div", {
        className: cssBuilderInstance.if(e.minimalSpacing, cssBuilderInstance.px0.mb0, cssBuilderInstance.px24.mb20).$,
        children: e.children
      }), jsx(IntersectionSentinel, {
        "data-testid": `load-more-team-${e.teamId}`,
        onIntersectionChange: ({
          isIntersecting: t
        }) => {
          t && e.onRequestLoadMoreForTeam(e.teamId);
        }
      })]
    }), jsx(IntersectionSentinel, {
      onIntersectionChange: ({
        isIntersecting: e
      }) => {
        s.current = e;
      }
    })]
  });
}
export function $$D1(e) {
  return jsxs("section", {
    children: [getFeatureFlags().fpl_card_primitive_migration ? jsxs(bL, {
      className: H6,
      children: [jsxs("div", {
        className: bV,
        children: [e.workspaceName && jsxs("span", {
          className: cssBuilderInstance.colorTextSecondary.fontNormal.$,
          children: [e.workspaceName, " /", " "]
        }), e.teamName]
      }), jsx(gZ, {
        className: jy,
        children: jsx(Button.Link, {
          onClick: e.onSeeAllClick,
          children: renderI18nText("whiteboard.inserts.see_all")
        })
      })]
    }) : jsxs("div", {
      className: c()(cssBuilderInstance.borderBox.$, a0),
      children: [jsxs("div", {
        className: bV,
        children: [e.workspaceName && jsxs("span", {
          className: cssBuilderInstance.colorTextSecondary.fontNormal.$,
          children: [e.workspaceName, " /", " "]
        }), e.teamName]
      }), e.onSeeAllClick && jsx("button", {
        className: jy,
        onClick: e.onSeeAllClick,
        children: renderI18nText("whiteboard.inserts.see_all")
      })]
    }), jsx("div", {
      className: cssBuilderInstance.if(e.minimalSpacing, cssBuilderInstance.px0.mb0, cssBuilderInstance.px24.mb20).$,
      children: e.children
    })]
  });
}
export function $$k3(e) {
  let t = useRef(null);
  let r = useCurrentUserOrg();
  let a = isBigmaEnabledAlias(r);
  let {
    filterOptions,
    selectedTeamOrWorkspaceOrLicenseGroupIds,
    isMyTeamsOnly,
    onFilterChange,
    requestLoadMore,
    requestLoadMoreForTeam,
    templatesByTeam,
    userTeamOrWorkspaceIds,
    isLoadingTeamTemplates
  } = GR(r, FFileType.WHITEBOARD);
  let {
    filterOptions: _filterOptions,
    selectedIds,
    isMyTeamsOnly: _isMyTeamsOnly,
    onFilterChange: _onFilterChange,
    requestLoadMoreForOrg,
    teamTemplates,
    userTeamOrWorkspaceIds: _userTeamOrWorkspaceIds,
    isLoading
  } = L_({
    orgId: r.id,
    areWorkspacesEnabled: a,
    editorType: FFileType.WHITEBOARD,
    numTemplatesPerTeam: 6
  });
  let B = getFeatureFlags().pro_templates_lg;
  let [G, V] = useState(null);
  if (G) return jsx(_$$z, {
    teamId: G.teamId,
    teamName: G.name,
    templateInsertionLocation: e.templateInsertionLocation,
    isInsertingTemplate: e.isInsertingTemplate,
    onInsert: e.insertTemplate,
    onBackClick: () => V(null)
  });
  let H = B ? _onFilterChange : onFilterChange;
  let z = B ? requestLoadMoreForOrg : requestLoadMore;
  let W = B ? isLoading : isLoadingTeamTemplates;
  let K = B ? teamTemplates : templatesByTeam;
  return jsxs("div", {
    className: cssBuilderInstance.wFull.$,
    children: [jsxs(AutoLayout, {
      horizontalAlignItems: "space-between",
      height: _$$k,
      padding: {
        left: 24,
        right: 24
      },
      strokeWidth: {
        bottom: 1
      },
      strokeColor: "default",
      children: [jsx("div", {
        className: cssBuilderInstance.font13.fontMedium.$,
        children: renderI18nText("browse_templates_modal.published_by_current_org_name", {
          orgName: r.name
        })
      }), jsx($$L0, {
        filterOptions: B ? _filterOptions : filterOptions,
        selectedIds: B ? selectedIds : selectedTeamOrWorkspaceOrLicenseGroupIds,
        isMyTeamsOnly: B ? _isMyTeamsOnly : isMyTeamsOnly,
        onFilterChange: e => {
          "function" == typeof t.current?.scroll && t.current.scroll({
            top: 0,
            behavior: "smooth"
          });
          H(e);
        },
        userTeamOrWorkspaceIds: new Set(B ? _userTeamOrWorkspaceIds : userTeamOrWorkspaceIds),
        showWorkspaces: a
      })]
    }), 0 === K.length ? B ? isLoading : W ? jsx(Kt, {}) : jsx(Ht, {}) : jsxs("section", {
      className: cssBuilderInstance.overflowYScroll.$,
      ref: t,
      style: {
        height: `calc(100% - ${_$$k}px)`
      },
      children: [K.map(({
        teamId: t,
        teamName: r,
        workspaceName: i,
        templates: s,
        totalTemplatesByTeam: o
      }) => {
        let l = jsx(iq, {
          children: s.map(t => jsx(AF, {
            templateInsertionLocation: e.templateInsertionLocation,
            template: t,
            onInsert: () => e.insertTemplate(t),
            isInsertingTemplate: e.isInsertingTemplate(gp(t))
          }, gp(t)))
        });
        return B ? jsx($$D1, {
          teamName: r ?? "",
          workspaceName: a ? i ?? "" : null,
          teamId: t,
          onSeeAllClick: o > 6 ? () => {
            V({
              teamId: t,
              name: r ?? ""
            });
          } : void 0,
          children: l
        }, t) : jsx($$P2, {
          teamName: r ?? "",
          workspaceName: a ? i ?? "" : null,
          teamId: t,
          onRequestLoadMoreForTeam: requestLoadMoreForTeam,
          children: l
        }, t);
      }), jsx(IntersectionSentinel, {
        "data-testid": "load-more-teams",
        className: cssBuilderInstance.relative.$,
        style: {
          bottom: "250px"
        },
        onIntersectionChange: ({
          isIntersecting: e
        }) => {
          e && z();
        }
      })]
    })]
  });
}
export const DL = $$L0;
export const Z0 = $$D1;
export const fc = $$P2;
export const yB = $$k3;
