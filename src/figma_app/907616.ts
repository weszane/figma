import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { bL, l9, mc, c$ } from "../905/493196";
import { HiddenLabel, Label } from "../905/270045";
import { b as _$$b, c as _$$c } from "../905/308099";
import { q } from "../905/932270";
import { Y } from "../905/185567";
import { w as _$$w } from "../905/770105";
import { Y as _$$Y } from "../905/26051";
import { c as _$$c2 } from "../905/425573";
import { b as _$$b2 } from "../905/946806";
import { getFeatureFlags } from "../905/601108";
import { EJ } from "../figma_app/930338";
import { z, Z } from "../905/306088";
import { getI18nString, renderI18nText } from "../905/303541";
import { sZ } from "../905/845253";
import { FPermissionLevelType, FViewPermissionType, FResourceCategoryType } from "../figma_app/191312";
import { FEditorType } from "../figma_app/53721";
import { Fb } from "../figma_app/630077";
import { Ib } from "../905/129884";
import { UNASSIGNED } from "../905/247093";
import { Ro } from "../figma_app/805373";
let A = "audience_selector--radioText--OD-3K";
let x = "audience_selector--radioOption--4NDFa";
let N = "audience_selector--radioSubtitle--g3Mry";
let C = "audience_selector--containerName--5i9Dn";
let w = "audience_selector--flexRow--cOscx";
var $$O0 = (e => (e.VIEW = "view", e.EDIT = "edit", e))($$O0 || {});
var $$R4 = (e => (e.ANYONE = "anyone", e.ORG = "org", e.WORKSPACE = "workspace", e.TEAM = "team", e.FOLDER = "folder", e.INVITE_ONLY = "invite_only", e))($$R4 || {});
let $$L6 = {
  [FPermissionLevelType.EDIT]: {
    shareAudience: "anyone",
    audienceAccessLevel: "edit"
  },
  [FPermissionLevelType.VIEW]: {
    shareAudience: "anyone",
    audienceAccessLevel: "view"
  },
  [FPermissionLevelType.ORG_EDIT]: {
    shareAudience: "org",
    audienceAccessLevel: "edit"
  },
  [FPermissionLevelType.ORG_VIEW]: {
    shareAudience: "org",
    audienceAccessLevel: "view"
  },
  [FPermissionLevelType.WORKSPACE_VIEW]: {
    shareAudience: "workspace",
    audienceAccessLevel: "view"
  },
  [FPermissionLevelType.WORKSPACE_EDIT]: {
    shareAudience: "workspace",
    audienceAccessLevel: "edit"
  },
  [FPermissionLevelType.INHERIT]: {
    shareAudience: "invite_only",
    audienceAccessLevel: null
  },
  [FPermissionLevelType.INVITE_ONLY]: {
    shareAudience: "invite_only",
    audienceAccessLevel: null
  }
};
let $$P7 = {
  [FViewPermissionType.VIEW]: {
    shareAudience: "anyone",
    audienceAccessLevel: "view"
  },
  [FViewPermissionType.ORG_VIEW]: {
    shareAudience: "org",
    audienceAccessLevel: "view"
  },
  [FViewPermissionType.INHERIT]: {
    shareAudience: "invite_only",
    audienceAccessLevel: null
  }
};
export function $$D5(e, t) {
  return "anyone" === e ? "edit" === t ? FPermissionLevelType.EDIT : FPermissionLevelType.VIEW : "org" === e ? "edit" === t ? FPermissionLevelType.ORG_EDIT : FPermissionLevelType.ORG_VIEW : FPermissionLevelType.INVITE_ONLY;
}
let k = (e, t) => {
  if ("anyone" === e) {
    if ("anyone" !== t) return !1;
  } else if ("org" === e && "invite_only" === t) return !1;
  return !0;
};
export function $$M1(e) {
  let t = {
    [FResourceCategoryType.TEAM]: ["invite_only"],
    [FResourceCategoryType.FOLDER]: ["invite_only"],
    [FResourceCategoryType.FILE]: ["anyone", "invite_only"],
    [FResourceCategoryType.FILE_REPO]: ["anyone", "invite_only"]
  }[e.resourceType];
  let r = null;
  e.org && (e.workspace && e.workspace.id !== UNASSIGNED && t.splice(1, 0, "workspace"), t.splice(1, 0, "org"));
  e.isPrototype && (t = t.filter(t => k(e.fileShareAudience, t)), "anyone" === e.fileShareAudience && 1 === t.length && "anyone" === t[0] && (r = getI18nString("permissions.audience_selector.can_only_be_adjusted_in_the_main_file")));
  let o = {
    anyone: getI18nString("permissions.audience_selector.anyone"),
    workspace: e.workspace?.name || "",
    org: e.org?.name || "",
    team: e.team?.name || "",
    folder: "",
    invite_only: getI18nString("permissions.audience_selector.only_invited_people")
  };
  let l = {
    anyone: jsx(Y, {}),
    workspace: e.workspace && jsx(_$$w, {}),
    org: e.org && jsx(_$$Y, {}),
    team: e.team && jsx(Ro, {
      entity: {
        id: e.team.id,
        imgUrl: e.team.img_url,
        name: e.team.name
      },
      hideFallbackInitial: !1,
      size: 16
    }),
    folder: jsx(Fragment, {}),
    invite_only: jsx(_$$c2, {})
  };
  let h = useCallback(() => {
    let t = {
      [FResourceCategoryType.TEAM]: getI18nString("permissions.audience_selector.team_resource_name"),
      [FResourceCategoryType.FOLDER]: getI18nString("permissions.audience_selector.project_resource_name"),
      [FResourceCategoryType.FILE]: getI18nString("permissions.audience_selector.file_resource_name"),
      [FResourceCategoryType.FILE_REPO]: getI18nString("permissions.audience_selector.file_resource_name")
    };
    return e.isPrototype ? e.editorType === FEditorType.Slides ? getI18nString("permissions.audience_selector.presentation_resource_name") : getI18nString("permissions.audience_selector.prototype_resource_name") : t[e.resourceType];
  }, [e.isPrototype, e.resourceType, e.editorType]);
  let m = useMemo(() => {
    let t = h();
    switch (e.value) {
      case "anyone":
        return e.editorType === FEditorType.Slides ? getI18nString("permissions.audience_selector.anyone_even_outside_your_org_can_access_this_resource", {
          resourceName: t
        }) : getI18nString("permissions.audience_selector.anyone_even_those_outside_your_org_can_access_this_resource", {
          resourceName: t
        });
      case "org":
        if (e.searchable) return getI18nString("permissions.audience_selector.audience_can_access_through_search_link_or_file_browser", {
          resourceName: t,
          audience: getI18nString("permissions.audience_selector.org_members")
        });
        return getI18nString("permissions.audience_selector.audience_can_access_through_link_or_file_browser", {
          resourceName: t,
          audience: getI18nString("permissions.audience_selector.org_members")
        });
      case "workspace":
        return getI18nString("permissions.audience_selector.audience_can_access_through_search_link_or_file_browser", {
          resourceName: t,
          audience: getI18nString("permissions.audience_selector.workspace_members")
        });
      case "team":
      case "folder":
        return getI18nString("permissions.audience_selector.can_access_through_search_file_browser_link");
      case "invite_only":
        return getI18nString("permissions.audience_selector.only_people_you_directly_invited_can_access", {
          resourceName: t
        });
    }
  }, [e.value, e.searchable, e.editorType, h]);
  return jsxs("div", {
    "data-testid": "create-team-modal-audience-selector",
    children: [jsx("div", {
      "data-onboarding-key": e.dataOnboardingKey,
      children: jsxs(bL, {
        value: e.value,
        onChange: e.onChange,
        children: [jsx(l9, {
          label: jsx(HiddenLabel, {
            children: getI18nString("permissions.audience_selector.aria_label")
          }),
          disabled: !!r || e.disabled,
          size: "lg",
          width: "fill",
          children: jsxs("div", {
            className: "audience_selector--audienceSelectorTrigger--VKOKc",
            children: [jsxs("div", {
              className: w,
              children: [l[e.value], jsx("span", {
                children: o[e.value]
              })]
            }), r && jsx(_$$b2, {
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": r
            })]
          })
        }), jsx(mc, {
          children: t.map(t => jsx(c$, {
            value: t,
            disabled: "anyone" === t && e.publicLinksBanned,
            children: jsxs("div", {
              className: w,
              "data-testid": `audience-option-${t}`,
              children: [jsx("div", {
                className: "audience_selector--audienceSelectorIcon--lTBRF",
                children: l[t]
              }), o[t]]
            })
          }, t))
        })]
      })
    }), jsx("div", {
      className: "audience_selector--subtitle--MIXKn text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: m
    })]
  });
}
export function $$F3(e) {
  return jsxs(_$$b, {
    value: e.selectedPermissionsLevel,
    onChange: e.setSelectedPermissionsLevel,
    legend: jsx(q, {
      children: jsx(Fragment, {})
    }),
    children: [jsx(_$$c, {
      value: "view",
      readonly: e.disabled || void 0,
      label: jsx(Label, {
        className: A,
        children: renderI18nText("team_creation.view")
      })
    }, "view-only"), jsx(_$$c, {
      value: "edit",
      readonly: e.disabled || e.disableEdit || void 0,
      label: jsx(Label, {
        className: A,
        children: e.teamCanAccess ? renderI18nText("permissions.level_name_capitalized.can_access") : renderI18nText("team_creation.edit")
      })
    }, "edit")]
  });
}
export function $$j2(e) {
  return sZ()?.k12_google_org && getFeatureFlags().student_plan_no_hidden_teams ? jsxs(z, {
    dataTestId: "org-browsable-team-radio-options",
    value: e.selectedDiscoverability,
    onChange: e.setSelectedDiscoverability,
    children: [jsx(Z, {
      value: Fb.ORG_BROWSABLE,
      className: x,
      children: jsx("p", {
        className: A,
        children: renderI18nText("team_creation.visible")
      })
    }, "org_browsable"), jsx("p", {
      className: N,
      children: renderI18nText("team_creation.anyone_can_find_this_team")
    })]
  }) : jsx(Fragment, {
    children: jsxs(z, {
      dataTestId: "org-browsable-team-radio-options",
      value: e.selectedDiscoverability,
      onChange: e.setSelectedDiscoverability,
      children: [jsx(Z, {
        value: Fb.ORG_BROWSABLE,
        className: x,
        children: jsx("p", {
          className: A,
          children: renderI18nText("team_creation.visible")
        })
      }, "org_browsable"), jsx("p", {
        className: N,
        children: renderI18nText("team_creation.anyone_can_find_this_team")
      }), jsx(Z, {
        value: Fb.HIDDEN,
        className: x,
        children: jsx("p", {
          className: A,
          children: renderI18nText("team_creation.hidden")
        })
      }, "hidden"), jsx("p", {
        className: N,
        children: renderI18nText("team_creation.only_team_members_can_find_and_access")
      })]
    })
  });
}
export function $$U9(e, t, r, i) {
  let a = t => e === FResourceCategoryType.TEAM ? renderI18nText("team_view.team_permissions_modal.anyone_in_container_can_edit_this_team", {
    containerName: jsx("span", {
      className: C,
      children: t
    })
  }) : e === FResourceCategoryType.FOLDER ? renderI18nText("folder_access_row.anyone_in_container_can_edit_this_project", {
    containerName: jsx("span", {
      className: C,
      children: t
    })
  }) : void 0;
  let s = t => e === FResourceCategoryType.TEAM ? renderI18nText("team_view.team_permissions_modal.anyone_in_container_can_view_this_team", {
    containerName: jsx("span", {
      className: C,
      children: t
    })
  }) : e === FResourceCategoryType.FOLDER ? renderI18nText("folder_access_row.anyone_in_container_can_view_this_project", {
    containerName: jsx("span", {
      className: C,
      children: t
    })
  }) : void 0;
  return t && i !== FPermissionLevelType.INVITE_ONLY ? i === FPermissionLevelType.ORG_EDIT ? a(t.name) : i === FPermissionLevelType.WORKSPACE_EDIT && r ? a(r.name) : i === FPermissionLevelType.ORG_VIEW ? s(t.name) : i === FPermissionLevelType.WORKSPACE_VIEW && r ? s(r.name) : jsx(Fragment, {}) : renderI18nText("team_view.team_permissions_modal.only_invited_people_can_access");
}
export function $$B10(e, t, r, i, a) {
  return e === FPermissionLevelType.EDIT || e === FPermissionLevelType.VIEW ? i ? renderI18nText("file_audience_row.anyone_with_password") : renderI18nText("permissions.anyone") : e === FPermissionLevelType.ORG_EDIT || e === FPermissionLevelType.ORG_VIEW ? t && renderI18nText("permissions.anyone_in_container_name", {
    containerName: t.name
  }) : e === FPermissionLevelType.WORKSPACE_EDIT || e === FPermissionLevelType.WORKSPACE_VIEW ? renderI18nText("permissions.anyone_in_container_name", {
    containerName: r?.name ?? renderI18nText("folder_permissions_modal.project_name_s_workspace", {
      projectName: EJ(a ?? "", 30)
    })
  }) : e === FPermissionLevelType.INVITE_ONLY || e === FPermissionLevelType.INHERIT ? renderI18nText("permissions.only_those_invited") : jsx(Fragment, {});
}
export function $$G8(e) {
  return e === FPermissionLevelType.EDIT || e === FPermissionLevelType.ORG_EDIT || e === FPermissionLevelType.WORKSPACE_EDIT ? renderI18nText("file_access_row.can_edit") : e === FPermissionLevelType.VIEW || e === FPermissionLevelType.ORG_VIEW || e === FPermissionLevelType.WORKSPACE_VIEW ? renderI18nText("file_access_row.can_view") : void 0;
}
export const J4 = $$O0;
export const YU = $$M1;
export const Kd = $$j2;
export const Iz = $$F3;
export const _9 = $$R4;
export const lG = $$D5;
export const fb = $$L6;
export const p8 = $$P7;
export const mi = $$G8;
export const wO = $$U9;
export const ET = $$B10;