import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo, useEffect, createRef, useRef, useCallback, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { debug } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { E as _$$E } from "../905/632989";
import { b as _$$b, bL, mc, r1 } from "../figma_app/860955";
import { K as _$$K } from "../905/443068";
import { u as _$$u } from "../905/65923";
import { z6, CU, H_ } from "../905/963340";
import { z as _$$z } from "../905/252950";
import { o as _$$o } from "../905/830042";
import { C as _$$C } from "../905/197863";
import { J as _$$J } from "../905/125993";
import { r as _$$r } from "../905/571562";
import { R as _$$R } from "../905/621802";
import { x as _$$x } from "../905/587214";
import { L as _$$L } from "../905/704296";
import { S as _$$S } from "../905/711470";
import { LayoutTabType, UIVisibilitySetting, HistoryChangesBindings, SceneGraphHelpers } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import v from "classnames";
import x from "../vendor/805353";
import { trackEventAnalytics } from "../905/449184";
import { j as _$$j } from "../905/564614";
import { Uz } from "../905/63728";
import { PAGINATION_NEXT, hasMorePages } from "../figma_app/661371";
import { BrowserInfo } from "../figma_app/778880";
import { stripHtmlTags } from "../905/491152";
import { RecordingComponent, handleMouseEvent, generateRecordingKey, handleKeyboardEvent } from "../figma_app/878298";
import { reportError } from "../905/11";
import { logError } from "../905/714362";
import { Ph } from "../figma_app/637027";
import { h1 } from "../905/986103";
import { kt } from "../figma_app/858013";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { E as _$$E2 } from "../905/984674";
import { V as _$$V } from "../905/223767";
import { D0 } from "../figma_app/867292";
import { sf } from "../905/929976";
import { Y6 } from "../figma_app/91703";
import { showModalHandler } from "../905/156213";
import { D as _$$D } from "../905/852057";
import { Dm } from "../figma_app/8833";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { h as _$$h } from "../905/864281";
import { removeOptimist } from "../905/766303";
import { F as _$$F2 } from "../905/224";
import { ud } from "../905/862913";
import { fullscreenValue } from "../figma_app/455680";
import { FPlanNameType } from "../figma_app/191312";
import { MAX_USERS } from "../figma_app/345997";
import { hM } from "../905/851937";
import { UpsellModalType } from "../905/165519";
import { V_, Nb, Eg, vF, _h } from "../figma_app/841351";
import { Bi } from "../905/652992";
import { FEditorType } from "../figma_app/53721";
import { lF } from "../figma_app/915202";
import { Ib } from "../905/129884";
import { shouldShowView, isBranchView } from "../905/218608";
import { $A } from "../905/782918";
import { C as _$$C2 } from "../905/870666";
import { xX, $_ } from "../figma_app/597338";
import { rb } from "../figma_app/151869";
import { DV } from "../905/739964";
import { y as _$$y } from "../figma_app/504415";
import { K as _$$K2 } from "../905/373605";
import { e as _$$e2, M as _$$M } from "../905/298379";
import { D as _$$D2 } from "../905/62437";
import { pq, vR } from "../figma_app/973219";
import { Lw, qC, at, qv, AS as _$$AS, Y0, j$, SU, kD, Nh, lV, LF, h_, zL, lw, EB, N5, y5, pi, p8, zj, IF, Ov, UY, sh, KD, $D as _$$$D, RI, Pf, VM, DS, HK, B0, yT, kr, RV, mP, Tc, eF, nw, Gl, B_, Ob, BI, eP as _$$eP, NM, s6, ot, Ao, QQ, Jt, aJ, UX, nf, kL, fy, u1, N1, qd } from "../905/447412";
import { A as _$$A } from "../6828/315990";
var A = v;
var N = x;
export function $$eN0(e) {
  return e === LayoutTabType.HISTORY || e === LayoutTabType.COMPARE_CHANGES || e === LayoutTabType.DEV_HANDOFF_HISTORY;
}
export function $$eC6(e) {
  return e.label ? e.label : e.participating_users_array && e.participating_users_array[0] ? e.participating_users_array[0] : e.user.handle ? e.user.handle : (logError("version", "Verison history got user without a handle", {
    item: e
  }), reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("Verison history got user without a handle")), "(unknown user)");
}
export function $$ew2(e) {
  switch (e.item.view) {
    case "branch_child_create":
      return renderI18nText("collaboration.feedback.new_branch_created");
    case "branch_child_merge":
      return renderI18nText("collaboration.feedback.branch_merged");
    case "branch_child_update":
      return renderI18nText("collaboration.feedback.branch_updated_from_main_file");
    case "branch_create":
      return renderI18nText("collaboration.feedback.branch_created");
    case "branch_merge":
      return renderI18nText("collaboration.feedback.branch_merged_into_main_and_archived");
    case "branch_update":
      return renderI18nText("collaboration.feedback.updated_from_main");
    case "branch_archive":
      return renderI18nText("collaboration.feedback.branch_archived");
    case "branch_restore":
      return renderI18nText("collaboration.feedback.branch_restored");
    case "file_restore":
      if (e.item.label) return renderI18nText("collaboration.feedback.version_restored_label", {
        label: e.item.label
      });
      return renderI18nText("collaboration.feedback.version_restored");
  }
  return jsx(Fragment, {
    children: $$eC6(e.item)
  });
}
export function $$eO1(e) {
  let {
    time
  } = e;
  let r = useMemo(() => xX(time, !0), [time]);
  let {
    onChange
  } = e;
  useEffect(() => {
    onChange && onChange(r);
  }, [onChange, r]);
  return jsx(Fragment, {
    children: r
  });
}
export class $$eR4 extends RecordingComponent {
  constructor(e) {
    super(e);
    this.versionRowDiv = null;
    this.descriptionRef = createRef();
    this._onClick = handleMouseEvent(this, "click", e => {
      if (2 === e.detail) {
        if (this.props.disabled && this.props.isStarterTeam) return;
        this.onDoubleClick();
        return;
      }
      if (this.props.disabled) {
        this.disabledOnClickHandler();
        return;
      }
      this.props.onClick ? this.props.onClick() : this.props.isAllowedToChangeVersion() && !this.props.isActive && this.props.onSelect && this.props.onSelect(this.props.versionId);
    });
    this.onClick = N()(e => this._onClick(e), 300);
    this.disabledOnClickHandler = handleMouseEvent(this, "click", () => {
      if (trackEventAnalytics("CTA Clicked", {
        name: "Disabled Version History",
        teamId: this.props.team?.id
      }), this.props.isStarterTeam) {
        if (!this.props.team) {
          reportError(_$$e.MONETIZATION_UPGRADES, Error("Paywall: no team present"));
          return;
        }
        this.props.dispatch(showModalHandler({
          type: DV,
          data: {
            team: this.props.team,
            editorType: this.props.editorType,
            resource: Bi.VERSION_HISTORY,
            currentPlan: _$$F2.Plan.STARTER,
            upsellPlan: _$$F2.Plan.PRO
          }
        }));
      }
    });
    this.onMouseEnter = () => {
      let e = this.descriptionRef.current;
      e && e.scrollHeight > e.clientHeight && this.setState({
        hovered: !0
      });
    };
    this.onMouseLeave = () => {
      this.setState({
        hovered: !1
      });
    };
    this.onDoubleClick = handleMouseEvent(this, "dblclick", () => {
      this.props.onCreateSavepoint ? this.props.onCreateSavepoint() : this.props.onEditSavepoint && this.props.onEditSavepoint(this.props.versionId);
    });
    this.onBranchClick = handleMouseEvent(this, "click", e => {
      e.stopPropagation();
      this.props.dispatch(sf({
        view: "fullscreen",
        fileKey: this.props.branchFileKey,
        editorType: FEditorType.Design
      }));
    });
    this.onCompareClick = handleMouseEvent(this, "click", e => {
      e.stopPropagation();
      setTimeout(() => {
        this.props.onCompareChanges && this.props.isAllowedToChangeVersion() && this.props.isCurrentVersionActive && !this.props.isComparing && this.props.onCompareChanges(this.props.versionId);
      }, 300);
    });
    this.onCompareCurrentClick = handleMouseEvent(this, "click", e => {
      e.stopPropagation();
      setTimeout(() => {
        this.props.onCompareChangesFromCurrent && this.props.isAllowedToChangeVersion() && !this.props.isComparing && this.props.onCompareChangesFromCurrent();
      }, 300);
    });
    this.toggleSeeMore = e => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        expandedDescription: !this.state.expandedDescription
      });
    };
    this.ref = e => {
      e && (this.versionRowDiv = e);
    };
    this.generateEditorName = (e, t) => jsx("div", {
      className: Lw,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": t,
      "data-tooltip-show-left": !0,
      "data-tooltip-max-width": 1e3,
      dir: "auto",
      children: t
    }, `who_${e}`);
    this.generateBranchLink = e => {
      if (!this.props.fileByKey || !this.props.branchFileKey) return null;
      {
        let t = this.props.fileByKey[this.props.branchFileKey];
        return t && !t.deleted_at ? jsx(_$$E, {
          className: qC,
          onClick: this.onBranchClick,
          children: e || (t.name ?? renderI18nText("collaboration.feedback.branch"))
        }) : jsx("span", {
          className: at,
          children: t?.name ?? renderI18nText("collaboration.feedback.branch")
        });
      }
    };
    this.setFormattedTime = e => {
      this.setState({
        formattedTime: e
      });
    };
    this.state = {
      expandedDescription: !1,
      hovered: !1
    };
  }
  componentDidMount() {
    super.componentDidMount();
    this.versionRowDiv && this.props.isActive && !this.props.first && this.versionRowDiv.scrollIntoView(!1);
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    let r = this.props.description;
    let n = e.description;
    r !== n && (this.state.expandedDescription && r && n && r.length >= n.length || this.setState({
      expandedDescription: !1
    }));
  }
  render() {
    let e;
    let t;
    let r = this.descriptionRef.current;
    let i = !!(r && (this.state.expandedDescription || r.scrollHeight > r.clientHeight || this.state.hovered) && !this.props.isActive);
    let a = this.props.versionId === V_;
    let s = !a && !shouldShowView({
      view: this.props.view ?? "file_default",
      label: this.props.label
    }) && !this.props.isLinked;
    let o = this.props.version?.frameCreated || this.props.version?.frameEdited || this.props.version?.lastViewed;
    let l = s && !o;
    let d = this.props.isPreview ? qv : _$$AS;
    this.props.disabled && !this.props.isStarterTeam && (d = Y0 + " " + d);
    a && (d = j$ + " " + d);
    (this.props.isActive || this.props.isComparing) && (d = SU + " " + d);
    this.props.onSelect && (d = kD + " " + d);
    let c = this.props.isActive && !a ? Nh : this.state.expandedDescription ? lV : i ? LF : h_;
    let u = this.state.expandedDescription ? renderI18nText("collaboration.feedback.show_less") : renderI18nText("collaboration.feedback.show_more");
    let p = null;
    let g = Object.keys(this.props.participatingImagesDict ?? {}).length;
    let f = getI18nString("collaboration.feedback.version_editor_count", {
      numEditors: g
    });
    if (this.props.participatingImagesDict) {
      let e = Object.entries(this.props.participatingImagesDict).slice(0, 5);
      e.length > 0 && (p = jsxs(Fragment, {
        children: [e.map(([e, t], r) => jsxs("span", {
          className: zL,
          children: [(!this.props.first || "current_version" !== this.props.versionId) && $_(t, 15), this.generateEditorName(r, e)]
        }, r)), g > 4 && !this.props.isActive && jsx("div", {
          className: lw,
          children: renderI18nText("collaboration.feedback.num_editors_number_editor_count_more", {
            numEditors: g - 4
          })
        }, "number-additional-editors")]
      }));
    } else this.props.user && this.props.userUrl ? p = jsxs("span", {
      className: zL,
      children: [(!this.props.first || "current_version" !== this.props.versionId) && $_(this.props.userUrl, 15), this.generateEditorName(0, this.props.user)]
    }, "branching-solo-editor") : l && "file_multiplayer" === this.props.view && "Figma System" === this.props.user && (p = jsx("div", {
      className: EB,
      children: this.props.user
    }, "figma-system"));
    let E = N5;
    this.props.hideLine ? E = "" : this.props.first && this.props.last ? E = y5 : this.props.first ? E = pi : this.props.last && (E = p8);
    let y = null;
    "text" in this.props && this.props.text.toLowerCase();
    l || (e = jsx(_$$z, {}));
    l && this.props.last && (e = jsx(_$$z, {}));
    let b = this.props.devModeActivity && this.props.devModeActivity.length > 0;
    if (b) {
      let {
        status,
        nodes
      } = D0(this.props.devModeActivity);
      y = jsx(_$$e2, {
        status,
        nodes
      });
      e = jsx(_$$M, {
        status
      });
    }
    if (this.props.isBranchingVersion) switch (this.props.view) {
      case "branch_child_create":
        e = jsx(_$$o, {});
        y = renderI18nText("collaboration.feedback.branch_child_create", {
          link: this.generateBranchLink()
        });
        this.props.isPreview && this.props.first && !this.props.hideLine && (E = zj);
        this.props.last && (E = "");
        break;
      case "branch_child_merge":
        e = jsx(_$$C, {});
        y = renderI18nText("collaboration.feedback.merged", {
          link: this.generateBranchLink(this.props.label)
        });
        break;
      case "branch_child_update":
        e = jsx(_$$z, {});
        y = renderI18nText("collaboration.feedback.branch_child_update", {
          link: this.generateBranchLink()
        });
        this.props.isPreview && this.props.first && !this.props.hideLine && (E = zj);
        this.props.last && (E = "");
        break;
      case "branch_merge":
        e = jsx(_$$C, {});
        y = renderI18nText("collaboration.feedback.branch_merge", {
          link: this.generateBranchLink(getI18nString("collaboration.feedback.main_branch_name"))
        });
        break;
      case "branch_create":
        e = jsx(_$$o, {});
        y = renderI18nText("collaboration.feedback.branch_created");
        break;
      case "branch_update":
        e = jsx(_$$o, {});
        y = renderI18nText("collaboration.feedback.branch_updated_from", {
          link: this.generateBranchLink(getI18nString("collaboration.feedback.main_branch_name"))
        });
        break;
      case "branch_archive":
        e = jsx(_$$z, {});
        y = renderI18nText("collaboration.feedback.branch_archived");
        break;
      default:
        e = jsx(_$$z, {});
    }
    let T = [];
    this.props.version?.frameCreated && T.push(this.props.isSection ? renderI18nText("collaboration.feedback.compare_changes_modal.section_created") : renderI18nText("collaboration.feedback.compare_changes_modal.frame_created"));
    this.props.version?.lastViewed && T.push(renderI18nText("collaboration.feedback.compare_changes_modal.last_viewed_by_you"));
    s && !l && this.props.time ? T.push(jsx("div", {
      className: IF,
      children: jsx($$eO1, {
        time: this.props.time
      })
    })) : l && this.props.time ? T.push(this.renderTime(this.props.time, Ov)) : "displayText" in this.props ? T.push(this.props.displayText) : T.push(this.props.text);
    !this.props.isComparing || this.props.isComparingLoading || a || (t = jsxs("div", {
      className: UY,
      children: [jsx("div", {
        className: sh,
        children: T[0]
      }), jsx(_$$B, {
        svg: _$$A,
        className: KD
      }), jsx("div", {
        className: _$$$D,
        children: renderI18nText("collaboration.feedback.current_file")
      })]
    }));
    let I = jsx(Fragment, {
      children: this.props.isBranchingVersion && this.props.fileByKey && this.props.branchFileKey ? jsx("div", {
        className: RI,
        dir: "auto",
        children: y
      }) : b ? jsx("div", {
        className: Pf,
        dir: "auto",
        children: y
      }) : t ? jsx("div", {
        className: Pf,
        dir: "auto",
        children: t
      }) : jsx("div", {
        className: Pf,
        dir: "auto",
        children: T[0]
      })
    });
    let S = stripHtmlTags(this.props.description);
    let v = p && jsx("div", {
      className: VM,
      role: "group",
      "aria-label": f,
      children: p
    });
    let A = !s && this.props.time && jsxs("span", {
      className: DS,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": xX(this.props.time),
      children: [" ", this.props.isLinked ? jsx($$eO1, {
        onChange: this.setFormattedTime,
        time: this.props.time
      }) : jsx(h1, {
        onChange: this.setFormattedTime,
        date: this.props.time
      })]
    });
    let x = T.length > 1 || S || i || v || A;
    let N = jsxs(Fragment, {
      children: [T.length > 1 && jsx("div", {
        className: HK,
        children: T.slice(1).map((e, t) => jsx("div", {
          className: Pf,
          dir: "auto",
          children: e
        }, t))
      }), S && jsx("div", {
        className: c,
        style: {
          paddingRight: this.getLabelRightPosition(this.props.showCompareChanges)
        },
        ref: this.descriptionRef,
        dir: "auto",
        children: S
      }), i && jsx("div", {
        className: B0,
        onClick: this.props.disabled ? void 0 : this.toggleSeeMore,
        children: jsx("div", {
          className: yT,
          children: u
        })
      }), jsxs(Fragment, {
        children: [v, A, this.props.rowBodyFooter || !A && (v || r) && jsx("div", {})]
      })]
    });
    let C = jsx("button", {
      onClick: this.onCompareClick,
      className: kr,
      children: renderI18nText("collaboration.feedback.compare")
    });
    let w = jsx("button", {
      onClick: this.onCompareCurrentClick,
      className: kr,
      children: renderI18nText("collaboration.feedback.compare")
    });
    let O = jsx("button", {
      onClick: this.props.onDoneComparingClick,
      className: kr,
      children: renderI18nText("collaboration.feedback.done_version_history")
    });
    return l && !this.props.showAutosaves ? null : jsx("li", {
      className: d,
      ref: this.ref,
      onMouseEnter: this.props.disabled && !this.props.isStarterTeam ? void 0 : this.onMouseEnter,
      onMouseLeave: this.props.disabled && !this.props.isStarterTeam ? void 0 : this.onMouseLeave,
      "data-testid": "version-row",
      children: jsx("div", {
        className: l ? RV : mP,
        children: jsx("div", {
          className: Tc,
          children: jsxs("div", {
            className: x ? eF : nw,
            style: {
              right: this.getLabelRightPosition(this.props.showCompareChanges)
            },
            children: [this.props.iconOverride ? this.props.iconOverride(jsx("div", {
              className: E
            })) : jsxs("div", {
              className: Gl,
              children: [jsx("div", {
                className: E
              }), e]
            }), jsxs("div", {
              className: B_,
              children: [jsx(eL, {
                onClick: this.onClick,
                isActive: this.props.isActive,
                isCurrentVersion: a,
                rowHeaderText: I,
                rowBodyText: N,
                versionId: this.props.versionId
              }), this.props.isActive && !a && jsx(eP, {
                recordingKey: this.props.recordingKey,
                versionId: this.props.versionId
              }), this.props.hoverMenu, this.props.showCompareChanges && !this.props.isCurrentVersionActive && !this.props.isComparingLoading && a && w, this.props.showCompareChanges && this.props.isCurrentVersionActive && !this.props.isComparingLoading && !a && !this.props.isComparing && C, this.props.showCompareChanges && this.props.isCurrentVersionActive && !this.props.isComparingLoading && this.props.isComparing && O, this.props.showCompareChanges && this.props.isCurrentVersionActive && this.props.isComparingLoading && !a && !this.props.isComparing && jsx("div", {
                className: Ob,
                children: jsx(kt, {})
              })]
            })]
          })
        })
      })
    });
  }
  renderTime(e, t) {
    let r = jsx($$eO1, {
      time: e,
      onChange: this.setFormattedTime
    });
    return jsx("div", {
      className: t,
      children: r
    });
  }
  getLabelRightPosition(e) {
    return e ? "65px" : "35px";
  }
}
function eL({
  onClick: e,
  isActive: t,
  isCurrentVersion: r,
  rowHeaderText: i,
  rowBodyText: a,
  versionId: s
}) {
  let {
    manager,
    getContextMenuTriggerProps
  } = _$$b();
  let u = _$$D2(s);
  return jsx("div", {
    className: BI,
    children: jsxs(bL, {
      manager,
      children: [jsxs(_$$E, {
        ...(r ? {} : getContextMenuTriggerProps()),
        onClick: e,
        "aria-label": getI18nString("collaboration.feedback.view_version_button_label"),
        "aria-pressed": t,
        "data-testid": r ? "version-row-button-current" : "version-row-button",
        className: _$$eP,
        children: [i, a]
      }), jsx(mc, {
        children: u
      })]
    })
  });
}
function eP({
  recordingKey: e,
  versionId: t
}) {
  let {
    manager,
    getTriggerProps
  } = _$$b();
  let a = _$$D2(t);
  return a ? jsxs(bL, {
    manager,
    children: [jsx(_$$K, {
      "aria-label": getI18nString("collaboration.feedback.more_options"),
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("collaboration.feedback.more_options"),
      recordingKey: generateRecordingKey(e, "versonContext"),
      "data-test-id": "dots-menu-icon-button",
      ...getTriggerProps(),
      children: jsx(_$$J, {})
    }), jsx(mc, {
      children: a
    })]
  }) : null;
}
function eD({
  shouldShowUpgradeLink: e,
  startUpgrade: t,
  hasRestrictedVersions: r
}) {
  let i = _$$h.useTrackingContext({
    trigger: UpsellModalType.HISTORY_UPSELL
  });
  return jsx(fu, {
    name: "Version History Paywall Panel",
    properties: {
      ...i
    },
    children: jsxs("div", {
      className: NM,
      children: [jsx(_$$E2, {
        fontWeight: "semi-bold",
        children: renderI18nText(r ? "upsell.history.need_to_travel_back_in_time" : "upsell.history.everything_else_is_history")
      }), jsx("div", {
        children: e ? jsx(_$$E2, {
          children: renderI18nText("upsell.history.upsell_upgrade_description", {
            upgradeLink: jsx(Ph, {
              className: s6,
              onClick: t,
              trackingProperties: {
                trackingDescriptor: _$$c.UPGRADE,
                upsellSource: UpsellModalType.HISTORY_UPSELL,
                canUserAccessProFeature: !1
              },
              trusted: !0,
              children: jsx(_$$E2, {
                children: renderI18nText("upsell.history.upsell_upgrade")
              })
            })
          })
        }) : jsx(_$$E2, {
          children: renderI18nText("upsell.history.upsell_learn_more_description", {
            upgradeLink: jsx(Ph, {
              className: s6,
              href: "/pricing",
              trusted: !0,
              trackingProperties: {
                canUserAccessProFeature: !1
              },
              children: renderI18nText("upsell.history.learn_more")
            })
          })
        })
      })]
    })
  });
}
function ek() {
  return jsx(Fragment, {
    children: jsx("span", {
      className: ot,
      children: BrowserInfo.mac ? renderI18nText("collaboration.feedback.shortcut_mac") : renderI18nText("collaboration.feedback.shortcut")
    })
  });
}
$$eR4.displayName = "VersionRow";
class eM extends RecordingComponent {
  constructor(e) {
    super(e);
    this.label = "";
    this.description = "";
    this.hasLabeled = !1;
    this.autoExpandUnlabeledOnly = !0;
    this.autoExpandGroupId = "";
    this.expandLast = !1;
    this.toggleAutoItemById = e => {
      let t = new Set(this.state.expandedIds);
      t.has(e) || this.autoExpandUnlabeledOnly && !this.hasLabeled || this.autoExpandGroupId === e ? (t.$$delete(e), this.hasLabeled || (this.autoExpandUnlabeledOnly = !1), this.setState({
        autoExpandForCurrentSelection: !1
      })) : (t.add(e), this.hasLabeled || (this.autoExpandUnlabeledOnly = !0));
      this.autoExpandGroupId = "";
      this.setState({
        expandedIds: t
      });
    };
    this.drawRows = (e, t, r, n) => {
      let i = [];
      let a = 0;
      let s = -1;
      let o = -1;
      let l = 0;
      let d = e.length - 1 - e.slice().reverse().findIndex(e => shouldShowView(e));
      let c = e.length - 1 - e.slice().reverse().findIndex(e => this.props.user?.handle && (e.participating_users_array?.includes(this.props.user?.handle) || e.user.handle === this.props.user?.handle));
      for (; a < e.length;) {
        let t = e[a];
        if (shouldShowView(t)) {
          let u = r && (0 === a && t.disabled || 0 === i.length);
          l > 0 && (this.renderAutoVersionBatch(i, e, s, o, r && (t.disabled && 0 === s || 0 === i.length), !1, this.state.showAutosaves, n), u = !1);
          i.push(this.renderRow(t, u, a === e.length - 1 || a === d && !this.state.showAutosaves || a === c && this.state.showOnlyUserVersionHistory, n));
          l = 0;
          s = -1;
          o = -1;
        } else {
          s < 0 && (s = a);
          o = a;
          l++;
        }
        a++;
      }
      l > 0 && this.renderAutoVersionBatch(i, e, s, o, r && (e[0].disabled && 0 === s || 0 === i.length), t, this.state.showAutosaves, n);
      return i;
    };
    this.hasLabeledVersions = e => {
      for (let t of e) if (t.label && t.label.length > 0) return !0;
      return !1;
    };
    this.startLoadingVersion = e => {
      this.props.dispatch(sf({
        ...this.props.selectedView,
        versionId: e.id
      }));
      this.props.dispatch(Y6({
        mode: UIVisibilitySetting.KEEP_UI,
        type: lF.SPINNER
      }));
      this.setState({
        isLoadingVersion: !0,
        loadingVersionId: e.id
      });
      trackEventAnalytics("History Version Savepoint Viewed", {
        savepointId: e.id,
        savedAt: e.touched_at
      });
    };
    this.finishedLoadingVersion = () => {
      let e = this.state.loadingVersionId;
      if (e && e.length > 0) {
        let t = this.getVersionByID(e);
        if (t && !this.props.modalShown) {
          let e;
          if (null != t.label && t.label.length > 0) e = getI18nString("collaboration.feedback.viewing_version", {
            label: t.label
          });else {
            let r = xX(t.touched_at);
            e = getI18nString("collaboration.feedback.viewing_version", {
              label: r
            });
          }
          e.length > 34 && (e = e.substring(0, 34) + "\u2026");
          this.props.dispatch(VisualBellActions.enqueue({
            type: "versions",
            message: e
          }));
        }
      }
      this.setState({
        isLoadingVersion: !1,
        loadingVersionId: ""
      });
    };
    this.loadVersionById = e => {
      if (e === this.props.versionHistory.activeId) return;
      if (e === V_) {
        this.props.dispatch(Nb({
          id: V_
        }));
        return;
      }
      let t = this.getVersionByID(e);
      t && this.loadVersion(t);
    };
    this.loadVersion = e => {
      e.id !== this.props.versionHistory.activeId && (this.startLoadingVersion(e), requestAnimationFrame(() => {
        this.props.dispatch(Nb({
          id: e.id,
          eventType: "LOAD_NEW_VERSION"
        }));
      }));
    };
    this.isAllowedToChangeVersion = () => null === this.props.modalShown && !hM();
    this.onKeyDown = handleKeyboardEvent(this, "keydown", e => {
      if (!this.props.dropdownShown && !this.props.modalShown && !this.props.versionHistory.compareId) {
        if (e.keyCode === Uz.ESCAPE) this.props.modalShown || 0 !== Object.keys(this.props.mirror.sceneGraphSelection).length || this.props.dispatch(Eg());else if (e.keyCode === Uz.UP_ARROW || e.keyCode === Uz.DOWN_ARROW) {
          if (!this.isAllowedToChangeVersion()) return;
          let t = this.props.versionHistory.versions.length;
          this.setState({
            autoExpandForCurrentSelection: !0
          });
          this.autoExpandGroupId = "";
          let r = -1;
          if (this.props.versionHistory.activeId === V_) e.keyCode === Uz.DOWN_ARROW && (r = 0);else {
            let t = this.props.versionHistory.versions.findIndex(e => e.id === this.props.versionHistory.activeId);
            -1 !== t && (r = e.keyCode === Uz.UP_ARROW ? t - 1 : t + 1);
          }
          if (r < 0) {
            this.props.dispatch(Nb({
              id: V_
            }));
            return;
          }
          r >= t && (r = t - 1);
          let n = this.props.versionHistory.versions[r];
          n.disabled || this.loadVersion(n);
        }
      }
    });
    this.startComparingChanges = e => {
      this.props.dispatch(Y6({
        mode: UIVisibilitySetting.KEEP_UI,
        type: lF.SPINNER
      }));
      this.setState({
        isLoadingCompareChanges: !0,
        loadingCompareId: e.id
      });
    };
    this.finishedComparingChanges = () => {
      let e = this.state.loadingCompareId;
      if (e && e.length > 0 && !this.props.modalShown) {
        let t = this.getVersionByID(e);
        if (!t) return;
        if (0 === HistoryChangesBindings.getChunkChangeCount()) {
          SceneGraphHelpers.clearSelection();
          let e = getI18nString("collaboration.feedback.no_visible_changes");
          e.length > 56 && (e = e.substring(0, 56) + "\u2026");
          this.props.dispatch(VisualBellActions.dequeue({}));
          this.props.dispatch(VisualBellActions.enqueue({
            type: "comparing",
            message: e
          }));
        } else {
          let e = null != t.label && t.label.length > 0 ? t.label : xX(t.touched_at);
          let r = getI18nString("collaboration.feedback.comparing_changes_toast", {
            fromVersionLabel: e
          });
          r.length > 56 && (r = r.substring(0, 56) + "\u2026");
          this.props.dispatch(VisualBellActions.dequeue({}));
          this.props.dispatch(VisualBellActions.enqueue({
            type: "comparing",
            message: r
          }));
        }
      }
      this.setState({
        isLoadingCompareChanges: !1,
        loadingCompareId: ""
      });
      this.props.dispatch(Y6({
        mode: UIVisibilitySetting.OFF
      }));
    };
    this.compareChangesById = e => {
      if (e === V_) return;
      if (e === this.props.versionHistory.compareId) {
        this.props.dispatch(vF({
          fromVersionId: e
        }));
        return;
      }
      let t = this.getVersionByID(e);
      t && this.compareChanges(t);
    };
    this.compareChangesFromCurrent = () => {
      let e = this.props.versionHistory.activeId;
      if (!e) return;
      let t = this.getVersionByID(e);
      t && (this.props.dispatch(Nb({
        id: V_
      })), this.compareChanges(t));
    };
    this.compareChanges = e => {
      e.id !== this.props.versionHistory.compareId && (this.startComparingChanges(e), requestAnimationFrame(() => {
        this.props.dispatch(vF({
          fromVersionId: e.id
        }));
      }));
    };
    this.loadMore = () => {
      this.expandLast = !0;
      this.props.dispatch(_h({
        direction: PAGINATION_NEXT
      }));
    };
    this.startUpgrade = () => {
      let e = this.getOpenFile();
      let t = e.teamId && this.props.teams[e.teamId];
      if (!t) {
        reportError(_$$e.MONETIZATION_UPGRADES, Error("Paywall: no team present"));
        return;
      }
      this.props.dispatch(showModalHandler({
        type: _$$V,
        data: {
          upsellSource: UpsellModalType.HISTORY_UPSELL,
          teamId: t.id,
          openCheckoutInNewTab: !0
        }
      }));
    };
    this.clearVersion = e => {
      this.props.dispatch(_$$D({
        fileKey: this.getOpenFile().key,
        savepointID: e,
        label: "",
        description: ""
      }));
    };
    this.addSavepoint = () => {
      this.canEditFile() && this.props.dispatch(showModalHandler({
        type: _$$y,
        data: {}
      }));
    };
    this.editSavepoint = e => {
      if (this.canEditFile() && e) {
        let t = this.getVersionByID(e);
        t?.label && (this.label = t.label);
        t?.description && (this.description = t.description);
        this.props.dispatch(showModalHandler({
          type: _$$y,
          data: {
            description: this.description,
            label: this.label,
            savepointID: e
          }
        }));
      }
    };
    this.getVersionByID = e => {
      let t = this.props.versionHistory;
      let r = t.versions.find(t => t.id === e);
      return t.linkedVersion?.id === e ? t.linkedVersion : r;
    };
    this.onDoneComparingClick = handleMouseEvent(this, "click", e => {
      e.stopPropagation();
      setTimeout(() => {
        this.isAllowedToChangeVersion() && this.props.versionHistory.compareId && (this.props.dispatch(Nb({
          id: V_
        })), SceneGraphHelpers.clearSelection(), this.props.dispatch(VisualBellActions.dequeue({
          matchType: "comparing"
        })), this.props.dispatch(VisualBellActions.dequeue({
          matchType: "view_changes"
        })));
      }, 300);
    });
    this.renderRow = (e, t, r, i) => {
      let a = this.getOpenFile();
      return jsx($$eR4, {
        branchFileKey: e.branch_file_key,
        checkpointKey: e.checkpoint_key,
        clearVersion: this.clearVersion.bind(this, e.id),
        description: e.description,
        devModeActivity: e.dev_mode_activity,
        disabled: e.disabled,
        dispatch: this.props.dispatch,
        displayText: jsx($$ew2, {
          item: e
        }),
        editorType: a.editorType,
        fileByKey: this.props.fileByKey,
        first: t,
        isActive: this.props.versionHistory.activeId === e.id,
        isAllowedToChangeVersion: this.isAllowedToChangeVersion,
        isBranchingVersion: isBranchView(e),
        isComparing: this.props.versionHistory.compareId === e.id,
        isComparingLoading: this.state.loadingCompareId === e.id,
        isCurrentVersionActive: this.props.versionHistory.activeId === V_,
        isStarterTeam: i,
        label: e.label,
        last: r,
        onCompareChanges: this.compareChangesById,
        onCompareChangesFromCurrent: this.compareChangesFromCurrent,
        onDoneComparingClick: this.onDoneComparingClick,
        onEditSavepoint: this.editSavepoint,
        onSelect: this.loadVersionById,
        participatingImagesDict: e.participating_images_dict,
        recordingKey: generateRecordingKey(this.props, "version", e.id),
        showAutosaves: this.state.showAutosaves,
        showCompareChanges: this.showCompareChanges(),
        team: a.teamId ? this.props.teams?.[a.teamId] : void 0,
        text: $$eC6(e),
        time: e.touched_at,
        user: e.user && e.user.handle,
        userUrl: e.user && (isBranchView(e) || e.label) ? e.user.img_url : null,
        versionId: e.id,
        view: e.view ? e.view : null
      }, `history-item-${e.id}`);
    };
    this.onClose = () => {
      if (this.props.onClose) {
        this.props.onClose();
        return;
      }
      this.props.dispatch(Eg());
    };
    this.state = {
      isLoadingVersion: !1,
      loadingVersionId: "",
      isLoadingCompareChanges: !1,
      loadingCompareId: "",
      expandedIds: new Set(),
      autoExpandForCurrentSelection: !1,
      showAutosaves: !0,
      showOnlyUserVersionHistory: !1
    };
  }
  renderAutoVersionBatch(e, t, r, i, a, s, o, d) {
    let c;
    if (r < 0 || null === t || t.length < 1) return;
    let u = t[r];
    if (!u) throw Error("Invalid start index for auto version batch");
    let p = this.state.expandedIds.has(u.id) || this.autoExpandUnlabeledOnly && !this.hasLabeled;
    if (this.state.autoExpandForCurrentSelection) for (let e = r; e <= i; e++) {
      let r = t[e];
      if (!r) throw Error("Invalid version in auto version batch");
      r.id === this.props.versionHistory.activeId && (p = !0, this.autoExpandGroupId = this.props.versionHistory.activeId);
    }
    this.expandLast && s && (p || this.toggleAutoItemById(u.id), this.expandLast = !1);
    let _ = i - r + 1;
    let h = !0;
    if (1 === _ && (p = !0, h = !1), c = s && (1 === _ || !p) ? a ? y5 : p8 : a ? pi : N5, h && o && e.push(jsx("li", {
      children: jsx(_$$E, {
        recordingKey: generateRecordingKey(this.props, `autoVersionBatch.${r}`),
        className: u.disabled ? Ao : QQ,
        onClick: this.toggleAutoItemById.bind(this, u.id),
        "aria-expanded": p,
        children: jsxs("div", {
          className: Jt,
          children: [jsxs("div", {
            className: Gl,
            children: [jsx("div", {
              className: c
            }), p ? jsx(_$$r, {}) : jsx(_$$R, {})]
          }), jsx("div", {
            className: aJ,
            children: renderI18nText("collaboration.feedback.autosave_count", {
              count: _
            })
          })]
        })
      }, `auto_row_${r}`)
    })), p) for (let n = r; n <= i; n++) {
      let o = t[n];
      if (!o) throw Error("Invalid version in auto version batch");
      e.push(this.renderRow(o, a && r === i, s && n === i, d));
    }
  }
  componentDidMount() {
    super.componentDidMount();
    this.props.versionHistory.activeId || this.props.dispatch(Nb({
      id: V_
    }));
    document.addEventListener("keydown", this.onKeyDown);
    fullscreenValue.fromFullscreen.on("sceneGraphMirrorUpdate", this.finishedLoadingVersion);
    _$$j.on("loadedCompareChanges", this.finishedComparingChanges);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    document.removeEventListener("keydown", this.onKeyDown);
    fullscreenValue.fromFullscreen.removeListener("sceneGraphMirrorUpdate", this.finishedLoadingVersion);
    _$$j.removeListener("loadedCompareChanges", this.finishedComparingChanges);
  }
  getOpenFile() {
    let e = this.props.openFile;
    null == e && logError("history", "history view should only be possible to open when we have a file");
    debug(null != e, "history view should only be possible to open when we have a file");
    return e;
  }
  canEditFile() {
    return this.props.openFile?.canEdit;
  }
  showCompareChanges() {
    return getFeatureFlags().version_diffing && this.props.selectedView.editorType === FEditorType.Design;
  }
  render() {
    let e = this.getOpenFile();
    let t = e.team;
    let r = this.props.versionHistory.versions.filter(e => !this.state.showOnlyUserVersionHistory || this.props.user?.handle && (e.participating_users_array?.includes(this.props.user?.handle) || e.user.handle === this.props.user?.handle));
    let i = r.filter(e => !e.disabled);
    let a = r.filter(e => e.disabled).slice(0, MAX_USERS);
    this.hasLabeled = this.hasLabeledVersions(i) || this.hasLabeledVersions(a);
    let s = null;
    let o = hasMorePages(this.props.versionHistory);
    let d = e.plan?.tier === FPlanNameType.STARTER;
    let c = !!e.team?.canEdit;
    d && (a.length > 0 || !o) && (s = jsx(eD, {
      startUpgrade: this.startUpgrade,
      shouldShowUpgradeLink: c,
      hasRestrictedVersions: !!a.length
    }));
    let u = jsx("div", {
      className: UX,
      children: !this.props.versionHistory.loading && hasMorePages(this.props.versionHistory) && jsx(_$$E, {
        className: nf,
        onClick: this.loadMore,
        children: renderI18nText("collaboration.feedback.show_older")
      })
    });
    let p = this.props.versionHistory.docHasChanged && !this.props.versionHistory.loading;
    let _ = this.props.versionHistory.linkedVersion;
    let h = _ && i.some(e => _.id === e.id);
    let m = !this.state.showOnlyUserVersionHistory || _?.user.id === this.props.user?.id;
    let g = $A(this.props.selectedView);
    let f = _$$C2(this.props.selectedView);
    let E = !this.canEditFile();
    let y = i.map(e => shouldShowView(e) ? 1 : 0).reduce((e, t) => e + t, 0);
    return jsx("div", {
      children: this.props.progressBarState.mode !== UIVisibilitySetting.ON_AND_LOCKED && jsx(fu, {
        name: "Version History Panel",
        properties: {
          teamId: t?.id
        },
        children: jsxs("div", {
          className: A()(kL, Dm),
          style: {
            width: g ? "100%" : void 0,
            borderLeft: g ? "unset" : void 0,
            minWidth: f ? "240px" : "unset"
          },
          children: [jsx($$ej5, {
            onClose: this.onClose,
            addSavepoint: this.addSavepoint,
            filterOptions: {
              showAutosaves: this.state.showAutosaves,
              setShowAutosaves: e => this.setState({
                showAutosaves: e
              }),
              showOnlyUserVersionHistory: this.state.showOnlyUserVersionHistory,
              setShowOnlyUserVersionHistory: e => this.setState({
                showOnlyUserVersionHistory: e
              })
            },
            isViewOnly: E,
            recordingKey: generateRecordingKey(this.props, "toolbar")
          }), this.props.fileHasCMSData && jsx(_$$K2, {}), jsxs("div", {
            "data-not-draggable": !0,
            children: [!this.hasLabeled && !E && !g && jsx("div", {
              className: fy,
              children: jsx("div", {
                children: renderI18nText("collaboration.feedback.press_shortcut_to_add_to_version_history_while_editing", {
                  shortcut: jsx(ek, {})
                })
              })
            }), jsxs("ol", {
              children: [_ && !h && m && jsx($$eR4, {
                checkpointKey: _.checkpoint_key,
                description: _.description,
                dispatch: this.props.dispatch,
                displayText: renderI18nText("collaboration.feedback.get_version_text_linked_version_linked_version", {
                  versionText: jsx($$ew2, {
                    item: _
                  })
                }),
                editorType: e.editorType,
                first: !0,
                isActive: this.props.versionHistory.activeId === _.id,
                isAllowedToChangeVersion: this.isAllowedToChangeVersion,
                isBranchingVersion: isBranchView(_),
                isComparing: this.props.versionHistory.compareId === _.id,
                isComparingLoading: this.state.loadingCompareId === _.id,
                isCurrentVersionActive: this.props.versionHistory.activeId === V_,
                isLinked: !0,
                label: _.label,
                last: !0,
                onCompareChanges: this.compareChangesById,
                onCompareChangesFromCurrent: this.compareChangesFromCurrent,
                onDoneComparingClick: this.onDoneComparingClick,
                onSelect: this.loadVersionById,
                showAutosaves: this.state.showAutosaves,
                showCompareChanges: this.showCompareChanges(),
                time: _.touched_at,
                userUrl: _.user.img_url,
                versionId: _.id,
                view: _.view ? _.view : null
              }), this.props.versionHistory.loading && jsx("li", {
                className: u1,
                children: jsx(kt, {})
              }), p && jsx($$eR4, {
                addSavepoint: this.addSavepoint,
                dispatch: this.props.dispatch,
                displayText: renderI18nText("collaboration.feedback.current_version"),
                editorType: e.editorType,
                first: !0,
                hideLine: 0 === i.length || !this.state.showAutosaves && 0 === y,
                isActive: this.props.versionHistory.activeId === V_,
                isAllowedToChangeVersion: this.isAllowedToChangeVersion,
                isComparing: !!this.props.versionHistory.compareId,
                isComparingLoading: this.state.loadingCompareId === V_,
                isCurrentVersionActive: this.props.versionHistory.activeId === V_,
                last: !1,
                onCompareChanges: this.compareChangesById,
                onCompareChangesFromCurrent: this.compareChangesFromCurrent,
                onCreateSavepoint: this.addSavepoint,
                onDoneComparingClick: this.onDoneComparingClick,
                onSelect: this.loadVersionById,
                recordingKey: generateRecordingKey(this.props, "currentVersion"),
                showAutosaves: this.state.showAutosaves,
                showCompareChanges: this.showCompareChanges(),
                userUrl: this.props.user.img_url,
                versionId: V_,
                view: null
              }), this.drawRows(i, 0 === a.length, !p), this.drawRows(a, !0, !1, c)]
            }), s, 0 === a.length && u]
          })]
        })
      })
    });
  }
}
eM.displayName = "VersionHistoryView";
export let $$eF7 = connect(removeOptimist)(eM);
export function $$ej5(e) {
  let {
    onClose,
    addSavepoint,
    filterOptions,
    isViewOnly
  } = e;
  let o = useRef(!1);
  let l = useCallback(e => {
    e && !o.current && (setTimeout(() => {
      e.focus();
    }, 0), o.current = !0);
  }, []);
  return jsxs("div", {
    className: N1,
    children: [jsx("h2", {
      className: qd,
      children: renderI18nText("collaboration.feedback.version_history")
    }), jsxs("div", {
      className: _$$s.flex.itemsCenter.gap4.$,
      children: [filterOptions && jsx(eU, {
        showAutosaves: filterOptions.showAutosaves,
        setShowAutosaves: filterOptions.setShowAutosaves,
        showOnlyUserVersionHistory: filterOptions.showOnlyUserVersionHistory,
        setShowOnlyUserVersionHistory: filterOptions.setShowOnlyUserVersionHistory,
        isViewOnly,
        buttonRef: l
      }), !isViewOnly && jsx(_$$K, {
        onClick: addSavepoint,
        "aria-label": getI18nString("collaboration.feedback.add_to_version_history_tooltip"),
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": getI18nString("collaboration.feedback.add_to_version_history_tooltip"),
        "data-testid": "versions-add-savepoint",
        recordingKey: generateRecordingKey(e, "plusVersion"),
        ref: l,
        children: jsx(_$$x, {})
      }), jsx(_$$K, {
        onClick: onClose,
        "aria-label": getI18nString("collaboration.feedback.close_tooltip"),
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": getI18nString("collaboration.feedback.close_tooltip"),
        recordingKey: generateRecordingKey(e, "button-close"),
        ref: l,
        children: jsx(_$$L, {})
      })]
    })]
  });
}
function eU(e) {
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let {
    ref,
    ...a
  } = getTriggerProps();
  return jsxs(bL, {
    manager,
    children: [jsx(_$$u, {
      ...a,
      ref: t => {
        ref(t);
        e.buttonRef?.(t);
      },
      className: A()(pq, {
        [vR]: e.showOnlyUserVersionHistory
      }),
      "aria-label": getI18nString("collaboration.feedback.filter_tooltip"),
      children: jsx(_$$S, {})
    }), jsxs(mc, {
      children: [jsxs(z6, {
        title: jsx(r1, {
          children: getI18nString("collaboration.feedback.filter_menu_title")
        }),
        onChange: t => {
          e.setShowOnlyUserVersionHistory("onlyUser" === t);
        },
        value: e.showOnlyUserVersionHistory ? "onlyUser" : "all",
        children: [jsx(CU, {
          value: "all",
          children: renderI18nText("collaboration.feedback.all_filter_text")
        }), jsx(CU, {
          value: "onlyUser",
          disabled: e.isViewOnly,
          children: renderI18nText("collaboration.feedback.only_yours_filter")
        })]
      }), jsx(H_, {
        checked: e.showAutosaves,
        onChange: () => e.setShowAutosaves(!e.showAutosaves),
        children: renderI18nText("collaboration.feedback.show_autosave_versions")
      })]
    })]
  });
}
function eB({
  versions: e,
  selectedVersion: t,
  setVersion: r,
  last: i,
  idx: s,
  isSection: o
}) {
  let l = useDispatch();
  let d = ud();
  return jsx(Fragment, {
    children: e.map((a, c) => jsx($$eR4, {
      branchFileKey: a.branch_file_key,
      checkpointKey: a.checkpoint_key,
      description: a.description,
      devModeActivity: a.dev_mode_activity,
      disabled: a.disabled,
      dispatch: l,
      displayText: jsx($$ew2, {
        item: a
      }),
      editorType: null,
      fileByKey: d,
      first: 0 === s && 0 === c,
      isActive: t?.id === a.id,
      isAllowedToChangeVersion: () => !0,
      isBranchingVersion: isBranchView(a),
      isSection: o,
      label: a.label,
      last: i && c === e.length - 1,
      onSelect: () => r(a),
      participatingImagesDict: a.participating_images_dict,
      showAutosaves: !0,
      text: $$eC6(a),
      time: a.touched_at,
      user: a.user && a.user.handle,
      userUrl: a.user && (isBranchView(a) || a.label) ? a.user.img_url : null,
      version: a,
      versionId: a.id,
      view: a.view ? a.view : null
    }, `history-item-${a.id}`))
  });
}
function eG({
  versions: e,
  selectedVersion: t,
  setVersion: r,
  last: a,
  idx: s
}) {
  let [o, d] = useState(t && !!e.find(e => e.id === t.id));
  let c = "SECTION" === rb();
  return jsxs("div", {
    children: [jsx(_$$E, {
      className: QQ,
      onClick: () => d(!o),
      "aria-expanded": !!o,
      children: jsxs("div", {
        className: Jt,
        children: [jsx("div", {
          className: Gl,
          children: o ? jsx(_$$r, {}) : jsx(_$$R, {})
        }), jsx("div", {
          className: aJ,
          children: renderI18nText("collaboration.feedback.autosave_count", {
            count: e.length
          })
        })]
      })
    }), o && jsx(eB, {
      versions: e,
      selectedVersion: t,
      setVersion: r,
      last: a,
      idx: s,
      isSection: c
    })]
  }, `auto_row_${s}`);
}
export function $$eV3({
  versions: e,
  selectedVersion: t,
  setVersion: r
}) {
  let i = [];
  let a = [];
  let s = 0;
  let o = "SECTION" === rb();
  function l(e) {
    a.length > 0 && (i.push(jsx(eG, {
      versions: [...a],
      selectedVersion: t,
      setVersion: r,
      idx: s,
      last: e
    }, s)), s++, a = []);
  }
  for (let d = 0; d < e.length; d++) {
    let c = e[d];
    shouldShowView(c) || c.frameCreated || c.frameEdited || c.lastViewed ? (l(!1), i.push(jsx(eB, {
      versions: [c],
      selectedVersion: t,
      setVersion: r,
      idx: s,
      last: d === e.length - 1,
      isSection: o
    }, s)), s++, a = []) : a.push(c);
  }
  l(!0);
  return jsx(Fragment, {
    children: i
  });
}
export const Ah = $$eN0;
export const Cr = $$eO1;
export const YL = $$ew2;
export const aS = $$eV3;
export const jP = $$eR4;
export const s3 = $$ej5;
export const ur = $$eC6;
export const yU = $$eF7;