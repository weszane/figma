import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { wA } from "../vendor/514228";
import { A as _$$A } from "../905/410311";
import { sx } from "../905/449184";
import { B } from "../905/714743";
import { tx } from "../905/303541";
import { UF, Jd } from "../figma_app/494261";
import { e6 } from "../905/557142";
import { aD, zg } from "../905/452667";
import { E as _$$E } from "../905/632989";
import h from "classnames";
import { vd } from "../figma_app/637027";
import { fu } from "../figma_app/831799";
import { xf, my, Zk, $S } from "../905/372455";
import { A as _$$A2 } from "../2854/769773";
var g = h;
let A = "role_request_row--roleRequestRowContainer--kjxUx";
let y = "role_request_row--roleRequestEmail--NxasY";
let b = "role_requests--container--77Hxz";
let v = "role_requests--imgContainer--vpNHd";
let I = "role_requests--boldText--1ynVk";
function x(e) {
  return jsx(fu, {
    name: "Request Permission > Share Modal Notification",
    properties: {
      request_type: aD(e.requestType)
    },
    children: jsxs("div", {
      className: g()(xf, "role_request_row--roleRequestRow--GO8fw", {
        "role_request_row--singleRoleRequestRow--p0dOf": e.isSingleRequest
      }),
      children: [jsxs("div", {
        className: "role_request_row--profileContainer--qseq7",
        children: [e.imgUrl ? jsx("img", {
          src: e.imgUrl,
          className: my,
          alt: `avatar of ${e.handle}`
        }, `avatar-${e.roleRequestId}`) : jsx(_$$A, {
          className: Zk
        }), jsx("div", {
          className: "role_request_row--profileBadge--OHG3Y"
        })]
      }), jsxs("div", {
        className: $S,
        children: [jsx(S, {
          handle: e.handle,
          email: e.email,
          isSingleRequest: e.isSingleRequest,
          requestType: e.requestType
        }), jsx(w, {
          resourceIdOrKey: e.resourceIdOrKey,
          handle: e.handle,
          requestType: e.requestType,
          requesterId: e.requesterId,
          roleRequestId: e.roleRequestId,
          getEditRequestHandlers: e.getEditRequestHandlers
        })]
      })]
    })
  });
}
function S(e) {
  return e.isSingleRequest ? jsxs("div", {
    className: A,
    children: [jsx("p", {
      children: tx("request_row.user_wants_to_request_type", {
        userHandle: jsx("strong", {
          className: I,
          children: e.handle.length > 25 ? `${e.handle.slice(0, 25)}...` : e.handle
        }),
        requestType: zg(e.requestType)
      })
    }), jsx("p", {
      className: y,
      children: e.email
    })]
  }) : jsxs("div", {
    className: A,
    children: [jsx("p", {
      children: e.handle
    }), jsx("p", {
      className: y,
      children: e.email
    })]
  });
}
function w(e) {
  let {
    handleApprove,
    handleDeny
  } = e.getEditRequestHandlers(e);
  return jsxs("div", {
    className: "role_request_row--roleRequestButtons--UalWl",
    children: [jsx(_$$E, {
      onClick: handleDeny,
      className: "role_request_row--roleRequestButton--lj7fY",
      children: tx("request_row.deny")
    }), jsx(vd, {
      trackingProperties: {
        resourceIdOrKey: e.resourceIdOrKey,
        userId: e.requesterId,
        roleRequestId: e.roleRequestId,
        request_type: aD(e.requestType)
      },
      trackingEventName: "Request Approved Share Modal",
      onClick: handleApprove,
      children: tx("request_row.approve")
    })]
  });
}
function T(e) {
  let [t, i] = useState(!!e.startExpanded);
  let a = e.fileRoleRequests.filter(t => t.level === e.requestType);
  if (!a || 0 === a.length || !a[0].requesterUser) return null;
  let s = a[0];
  return jsxs("div", {
    className: b,
    children: [a.length > 1 && jsx(O, {
      fileRoleRequests: a,
      firstFileRoleRequest: s,
      roleRequestsExpanded: t,
      setRoleRequestsExpanded: i,
      requestType: e.requestType
    }), (t || 1 === a.length) && a.map((t, i) => {
      if (!e.editorUserIds.includes(t.requesterUserId) && t.requesterUser) return jsx(x, {
        email: t.requesterUser.email,
        getEditRequestHandlers: e.getEditRequestHandlers,
        handle: t.requesterUser.handle,
        imgUrl: t.requesterUser.imgUrl,
        isSingleRequest: 1 === a.length,
        requestType: e.requestType,
        requesterId: t.requesterUserId,
        resourceIdOrKey: e.fileKey,
        roleRequestId: t.id
      }, t.id);
    })]
  });
}
function k(e) {
  let t = wA();
  let [i, s] = useState(!1);
  let l = e.teamRoleRequests.filter(t => t.level === e.requestType);
  let d = e.teamId;
  if (!l || 0 === l.length || !l[0].user) return null;
  let u = l[0];
  let p = e => {
    e.response = "deny";
    sx("permission_request_responded", e);
    t(UF({
      requestId: e.request_id
    }));
  };
  let m = (i, n) => {
    let r = {
      id: i.id,
      img_url: i.imgUrl,
      handle: i.handle,
      name: i.name ?? "",
      email: i.email ?? ""
    };
    sx("permission_request_responded", n);
    t(Jd({
      requestId: n.request_id,
      level: n.type,
      teamId: e.teamId,
      email: i.email ?? "",
      user: r
    }));
  };
  return jsxs("div", {
    className: b,
    children: [l.length > 1 && jsx(D, {
      teamRoleRequests: l,
      firstRoleRequest: u,
      roleRequestsExpanded: i,
      setRoleRequestsExpanded: s,
      requestType: e.requestType
    }), (i || 1 === l.length) && l.map(t => {
      if (t.requesterUserId && !e.editorUserIds.includes(t.requesterUserId) && t.user) return jsx(x, {
        email: t.user.email,
        getEditRequestHandlers: () => {
          let i = {
            response: "approve",
            request_id: t.id,
            team_id: d,
            type: e.requestType,
            source: "TeamPermissionsModal"
          };
          return {
            handleApprove: () => m(t.user, i),
            handleDeny: () => p(i)
          };
        },
        handle: t.user.handle,
        imgUrl: t.user.imgUrl,
        isSingleRequest: 1 === l.length,
        requestType: e.requestType,
        requesterId: t.requesterUserId,
        resourceIdOrKey: e.teamId,
        roleRequestId: t.id
      }, t.id);
    })]
  });
}
export function $$R0(e) {
  let t = N(e6.VIEWER, e.fileRoleRequests);
  let i = N(e6.EDITOR, e.fileRoleRequests);
  return jsxs(Fragment, {
    children: [t && jsx(T, {
      fileKey: e.fileKey,
      editorUserIds: e.roles.filter(e => e.level >= e6.EDITOR && !e.pending).map(e => e.user_id),
      fileRoleRequests: e.fileRoleRequests,
      requestType: e6.VIEWER,
      startExpanded: e.startExpanded,
      getEditRequestHandlers: e.getEditRequestHandlers
    }), i && jsx(T, {
      fileKey: e.fileKey,
      editorUserIds: e.roles.filter(e => e.level >= e6.EDITOR && !e.pending).map(e => e.user_id),
      fileRoleRequests: e.fileRoleRequests,
      requestType: e6.EDITOR,
      startExpanded: e.startExpanded,
      getEditRequestHandlers: e.getEditRequestHandlers
    })]
  });
}
function N(e, t) {
  return t.filter(t => t.level === e && "pending" === t.status).length > 0;
}
export function $$P1(e) {
  let t = N(e6.VIEWER, e.teamRoleRequests);
  let i = N(e6.EDITOR, e.teamRoleRequests);
  let r = () => e.teamRoles.filter(e => e.level >= e6.EDITOR && !e.pending).map(e => e.user_id);
  return jsxs(Fragment, {
    children: [t && jsx(k, {
      teamId: e.teamId,
      editorUserIds: r(),
      teamRoleRequests: e.teamRoleRequests,
      requestType: e6.VIEWER
    }), i && jsx(k, {
      teamId: e.teamId,
      editorUserIds: r(),
      teamRoleRequests: e.teamRoleRequests,
      requestType: e6.EDITOR
    })]
  });
}
function O(e) {
  return e.firstFileRoleRequest.requesterUser ? jsxs("div", {
    className: xf,
    children: [e.firstFileRoleRequest.requesterUser.imgUrl ? jsx("div", {
      className: v,
      children: jsx("img", {
        src: e.firstFileRoleRequest.requesterUser.imgUrl,
        className: my,
        alt: ""
      }, `avatar-${e.firstFileRoleRequest.id}`)
    }) : jsx(_$$A, {
      className: Zk
    }), jsx("div", {
      className: $S,
      children: jsx(L, {
        numRoleRequests: e.fileRoleRequests.length,
        firstRoleRequestName: e.firstFileRoleRequest.requesterUser.handle,
        roleRequestsExpanded: e.roleRequestsExpanded,
        requestType: e.requestType,
        onClick: () => e.setRoleRequestsExpanded(!e.roleRequestsExpanded)
      })
    })]
  }) : null;
}
function D(e) {
  return e.firstRoleRequest.user ? jsxs("div", {
    className: xf,
    children: [e.firstRoleRequest.user.imgUrl ? jsx("div", {
      className: v,
      children: jsx("img", {
        src: e.firstRoleRequest.user.imgUrl,
        className: my,
        alt: ""
      }, `avatar-${e.firstRoleRequest.id}`)
    }) : jsx(_$$A, {
      className: Zk
    }), jsx("div", {
      className: $S,
      children: jsx(L, {
        numRoleRequests: e.teamRoleRequests.length,
        firstRoleRequestName: e.firstRoleRequest.user.handle,
        roleRequestsExpanded: e.roleRequestsExpanded,
        requestType: e.requestType,
        onClick: () => e.setRoleRequestsExpanded(!e.roleRequestsExpanded)
      })
    })]
  }) : null;
}
function L(e) {
  let t = e.roleRequestsExpanded ? "role_requests--chevronSvgExpanded--HJ2AV role_requests--chevronSvg---zhi8" : "role_requests--chevronSvg---zhi8";
  return jsxs("button", {
    className: "role_requests--expandRoleRequests--GgRNB",
    onClick: e.onClick,
    children: [jsx(function () {
      return jsx("p", {
        className: "role_requests--textWrapper--CsNzC",
        children: tx("role_requests.header_text", {
          userName: jsx("strong", {
            className: I,
            children: e.firstRoleRequestName
          }),
          othersText: jsx("strong", {
            className: I,
            children: tx("role_requests.num_pending_requests", {
              numRoleRequests: e.numRoleRequests - 1
            })
          }),
          requestType: zg(e.requestType)
        })
      });
    }, {}), jsx(B, {
      svg: _$$A2,
      className: t
    })]
  });
}
export const ul = $$R0;
export const $i = $$P1;