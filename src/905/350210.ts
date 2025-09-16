import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useRef, PureComponent } from "react";
import { useDispatch, connect } from "react-redux";
import { s as _$$s } from "../905/601732";
import { j4, o1, f7, Rv, UU, mH } from "../figma_app/599979";
import { getPermissionsState } from "../figma_app/642025";
import { TeamOrgType } from "../figma_app/10554";
import { A as _$$A } from "../905/61817";
import { c$ } from "../figma_app/236327";
import { SvgComponent } from "../905/714743";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { Um } from "../905/848862";
import { Cf, it } from "../905/504727";
import { A as _$$A2 } from "../905/972270";
import { A as _$$A3 } from "../6828/814452";
function A({
  options: e,
  cmpOptions: t,
  value: i,
  onChange: s,
  dropdownType: o,
  getAuthorOptionKey: l,
  getAuthorDisplayName: d,
  getAuthorProfileHandle: c,
  renderCreatorWithIcon: u,
  ariaLabelledBy: g
}) {
  let f = useDispatch();
  let A = Um();
  let b = A?.type === o;
  let v = useCallback(() => {
    b ? f(hideDropdownAction()) : f(showDropdownThunk({
      type: o
    }));
  }, [f, b, o]);
  let I = useCallback(e => {
    s(e);
    f(hideDropdownAction());
  }, [f, s]);
  let E = useRef(null);
  return jsxs("div", {
    ref: E,
    "data-testid": "publishing-metadata-author-select",
    children: [jsxs("button", {
      className: "publishing_metadata_author_select_ui3--authorSelectTrigger--q-mht publish_modal--categorySelectTriggerUI3--yeDOp publish_modal--categorySelectTrigger--UCp2x",
      onClick: v,
      onKeyDown: e => {
        "Tab" !== e.key && e.preventDefault();
        e.stopPropagation();
        "Enter" !== e.key || b || f(showDropdownThunk({
          type: o
        }));
      },
      role: "listbox",
      children: [u(i), jsx("span", {
        className: "publishing_metadata_author_select_ui3--authorSelectTriggerIcon--STbr6 publish_modal--categorySelectTriggerIcon--43Irx",
        children: jsx(SvgComponent, {
          svg: _$$A3
        })
      })]
    }), b && jsx(y, {
      ariaLabelledBy: g,
      options: e,
      cmpOptions: t,
      onChange: I,
      dropdownTargetRef: E,
      getAuthorOptionKey: l,
      getAuthorDisplayName: d,
      getAuthorProfileHandle: c
    })]
  });
}
function y({
  options: e,
  cmpOptions: t,
  onChange: i,
  dropdownTargetRef: r,
  getAuthorOptionKey: a,
  getAuthorDisplayName: s,
  getAuthorProfileHandle: l,
  ariaLabelledBy: d
}) {
  let c = r.current?.getBoundingClientRect();
  return c ? jsx(Cf, {
    "aria-labelledby": d,
    autofocusPrevOnDismount: !0,
    dataTestId: "publishing-metadata-author-select",
    focusContainerOnMount: !0,
    maxWidth: 528,
    minWidth: 528,
    propagateCloseClick: !0,
    showPoint: !1,
    targetRect: c,
    type: it.MATCH_BACKGROUND,
    children: e.sort(t).map(e => jsx(c$, {
      id: a(e),
      className: "publishing_metadata_author_select_ui3--singleOption--ygwXK",
      onClick: t => {
        t.preventDefault();
        t.stopPropagation();
        i(e);
      },
      children: jsx(_$$A2, {
        avatarEntity: j4(e),
        authorDisplayName: s(e),
        authorProfileHandle: l(e)
      })
    }, a(e)))
  }) : null;
}
class b extends PureComponent {
  constructor() {
    super(...arguments);
    this.formatter = {
      format: e => o1(e, {
        ...this.props.permissionsState,
        authedProfilesById: this.props.authedProfilesById,
        authedUsers: this.props.authedUsers
      }),
      isEqual: f7
    };
    this.cmpOptions = (e, t) => {
      let i = e => "org_id" in e ? 3 : "user_id" in e ? 2 : 1;
      let n = i(e);
      let r = i(t);
      return n === r ? this.formatter.format(e) < this.formatter.format(t) ? -1 : 1 : r - n;
    };
  }
  getOptions() {
    let e = {
      ...this.props.permissionsState,
      currentOrgId: this.props.permissionsState.currentUserOrgId,
      authedProfilesById: this.props.authedProfilesById
    };
    return "hub_file" === this.props.resourceType ? Rv(this.props.editingFile.team_id, e, this.props.hubFile || null, this.props.editingFile.parent_org_id || null) : "plugin" === this.props.resourceType || "widget" === this.props.resourceType ? UU(e, this.props.resource) : [];
  }
  renderCreatorWithIcon(e) {
    let t = j4(e);
    let i = "org_id" in e ? TeamOrgType.ORG : "team_id" in e ? TeamOrgType.TEAM : TeamOrgType.USER;
    return t ? jsx(_$$A, {
      profile: {
        ...t,
        isPending: !1,
        entity_type: i
      }
    }) : jsx("div", {
      className: "publishing_metadata_author_select--singleOption--inXo1 publish_modal--_userSelectNone--sP-aW",
      children: this.formatter.format(e)
    });
  }
  render() {
    let e = this.getOptions();
    return 0 === e.length ? null : this.props.isEditHubFilePageMode && this.props.property ? this.renderCreatorWithIcon(this.props.property) : this.props.isPaid ? this.renderCreatorWithIcon(this.props.property) : 1 === e.length ? this.renderCreatorWithIcon(e[0]) : jsx(A, {
      ariaLabelledBy: this.props.ariaLabelledBy,
      cmpOptions: this.cmpOptions,
      dropdownType: "PUBLISHING_METADATA_AUTHOR_SELECT",
      getAuthorDisplayName: this.formatter.format,
      getAuthorOptionKey: _$$s,
      getAuthorProfileHandle: e => mH(e, {
        ...this.props.permissionsState,
        authedProfilesById: this.props.authedProfilesById,
        authedUsers: this.props.authedUsers
      }),
      onChange: this.props.onChange,
      options: e,
      renderCreatorWithIcon: this.renderCreatorWithIcon.bind(this),
      value: this.props.property
    });
  }
}
b.displayName = "PublishingMetadataAuthorSelect";
export let $$v0 = connect(e => {
  let t = getPermissionsState(e);
  let i = e.openFile?.key || null;
  let n = i ? e.figFilePublishedAsHubFile?.[i] : void 0;
  let r = n ? e.hubFiles?.[n] : void 0;
  let a = e.authedProfilesById;
  return {
    teams: e.teams,
    dropdownShown: e.dropdownShown,
    user: e.user,
    permissionsState: t,
    hubFile: r || null,
    authedProfilesById: a,
    authedUsers: e.authedUsers
  };
})(b);
export const Q = $$v0;