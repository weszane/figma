import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByWithOptions } from "../figma_app/656233";
import { memoizeByArgs } from "../figma_app/815945";
import { resourceUtils } from "../905/989992";
import { useSubscription } from "../figma_app/288654";
import { P } from "../905/347284";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { convertLgSeatTypeProduct } from "../figma_app/217457";
import { Pe } from "../4452/207203";
import { W } from "../4452/143028";
import { EditAccessModalView } from "../figma_app/43951";
import { AccessLevelEnum } from "../905/557142";
import { HeaderModal } from "../905/519092";
let v = "edit_access_modal--column--MYvAz";
let y = "edit_access_modal--resource--qhm-x";
let w = "edit_access_modal--resourceTitle--79DdK edit_access_modal--resource--qhm-x";
let j = "edit_access_modal--greyResource--pdVfB edit_access_modal--resource--qhm-x";
let T = (e, t) => {
  if ("file" === e.resource_type) {
    let r = t[e.resource_id_or_key];
    if (r) return {
      name: r.name,
      id_or_key: r.key
    };
  } else {
    let r = t[e.resource_id_or_key];
    if (r) return {
      name: r.name,
      id_or_key: r.id
    };
  }
};
let E = memoizeByArgs((e, t) => {
  let r = {
    privateResourceCount: 0,
    editableResources: []
  };
  e && 0 !== e.length && (e.forEach(e => {
    let a = T(e, t);
    a ? r.editableResources.push(a) : r.privateResourceCount++;
  }), sortByWithOptions(r.editableResources, e => e.name));
  return r;
});
let I = e => ({
  privateResourceCount: e.file_edit_roles_count,
  editableResources: []
});
export function $$N0(e) {
  let t = useDispatch();
  let r = function (e, t) {
    let r = useSubscription(EditAccessModalView, {
      teamId: e,
      userId: t
    });
    return useMemo(() => r.transform(e => {
      let t = e.teamUserDescendedRoles;
      if (!t) return {
        team_user: void 0,
        team_role: void 0,
        edit_roles: {
          whiteboard_files: [],
          design_files: [],
          folders: []
        },
        file_edit_roles_count: 0,
        name: "",
        id: ""
      };
      let r = t[0];
      if (!r.teamUser) return {
        team_user: void 0,
        team_role: void 0,
        edit_roles: {
          whiteboard_files: [],
          design_files: [],
          folders: []
        },
        file_edit_roles_count: 0,
        name: "",
        id: ""
      };
      let a = r.teamUser;
      let s = r.teamUser.teamRole;
      return {
        ...W.toSinatra(a.user),
        team_user: {
          id: a.id,
          user_id: a.user.id,
          team_id: r.teamId,
          active_seat_type: convertLgSeatTypeProduct(a.activeSeatTypeUpgrade?.billableProduct)
        },
        team_role: s ? Pe(s, a.user) : void 0,
        file_edit_roles_count: r.fileEditRolesCount,
        edit_roles: {
          whiteboard_files: [],
          design_files: [],
          folders: r.projectEditRoles?.map(e => Pe(e, a.user)) || []
        }
      };
    }), [r]);
  }(e.teamId, e.userId);
  let n = useSelector(e => e.folders);
  let o = useMemo(() => r.transform(e => E(e?.edit_roles?.folders, n)), [n, r]);
  let y = useMemo(() => r.transform(e => e ? I(e) : {
    privateResourceCount: 0,
    editableResources: []
  }), [r]);
  let j = useSelector(t => t.teams[e.teamId]);
  let T = resourceUtils.all([r, o, y]);
  if ("loaded" !== T.status) return null;
  let [N, C, k] = T.data;
  if (!N) {
    console.error("Member not found");
    return null;
  }
  let R = !!N.team_role && N.team_role?.level >= AccessLevelEnum.EDITOR;
  let A = C.editableResources.length + C.privateResourceCount;
  let O = k.editableResources.length + k.privateResourceCount;
  return jsx(TrackingProvider, {
    name: "Member Edit Access Modal",
    properties: {
      teamId: j.id,
      userId: N.id,
      folderCount: A,
      fileCount: O
    },
    children: jsxs(HeaderModal, {
      title: getI18nString("team_view.member_edit_access_modal.title", {
        memberName: N.name ?? ""
      }),
      maxWidth: 432,
      minWidth: 432,
      containerClassName: "edit_access_modal--modalStyle--20dSp",
      onClose: () => {
        t(hideModal());
      },
      children: [jsxs("div", {
        className: "edit_access_modal--headerContainer--ZoKpu edit_access_modal--resourceContainer--vZA5E",
        children: [jsx("div", {
          className: v,
          children: jsx("div", {
            className: w,
            children: renderI18nText("team_view.member_edit_access_modal.projects_title_v2")
          })
        }), jsx("div", {
          className: v,
          children: jsx("div", {
            className: w,
            children: renderI18nText("team_view.member_edit_access_modal.files_title_v2")
          })
        })]
      }), jsx(P, {
        className: "edit_access_modal--scrollContainer--WzCWr",
        hideScrollbar: !0,
        children: jsxs("div", {
          className: "edit_access_modal--resourceContainer--vZA5E",
          children: [jsx("div", {
            className: v,
            children: jsx(S, {
              hasTeamEditPermissions: R,
              resources: C,
              resourceType: "project"
            })
          }), jsx("div", {
            className: v,
            children: jsx(S, {
              hasTeamEditPermissions: R,
              resources: k,
              resourceType: "file"
            })
          })]
        })
      })]
    })
  });
}
let C = e => "file" === e ? renderI18nText("team_view.member_edit_access_modal.none_files") : renderI18nText("team_view.member_edit_access_modal.none_projects");
function S(e) {
  let t;
  let {
    hasTeamEditPermissions,
    resourceType
  } = e;
  if (hasTeamEditPermissions) return "project" === resourceType ? jsx("div", {
    className: j,
    children: renderI18nText("team_view.member_edit_access_modal.all_projects")
  }) : jsx("div", {
    className: j,
    children: renderI18nText("team_view.member_edit_access_modal.all_files")
  });
  let i = e.resources;
  if (0 === i.privateResourceCount && 0 === i.editableResources.length) return jsx("div", {
    className: j,
    children: C(resourceType)
  });
  if (i.privateResourceCount > 0) {
    let e = jsx("span", {});
    0 === i.editableResources.length && "project" === resourceType ? e = renderI18nText("team_view.member_edit_access_modal.invite_only_projects", {
      numProjects: i.privateResourceCount
    }) : 0 === i.editableResources.length && "file" === resourceType ? e = renderI18nText("team_view.member_edit_access_modal.invite_only_files", {
      numFiles: i.privateResourceCount
    }) : i.editableResources.length > 0 && "project" === resourceType ? e = renderI18nText("team_view.member_edit_access_modal.invite_only_projects_list_end", {
      numProjects: i.privateResourceCount
    }) : i.editableResources.length > 0 && "file" === resourceType && (e = renderI18nText("team_view.member_edit_access_modal.invite_only_files_list_end", {
      numFiles: i.privateResourceCount
    }));
    t = jsx("div", {
      className: y,
      children: e
    });
  }
  return jsxs(Fragment, {
    children: [i.editableResources.map(e => jsx("div", {
      className: y,
      children: e.name
    }, e.id_or_key)), t]
  });
}
export const MemberEditAccessModal = $$N0;