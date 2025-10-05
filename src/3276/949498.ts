import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { IconButton } from "../905/443068";
import { A as _$$A } from "../905/251970";
import { setupThemeContext } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { useRef, useLayoutEffect } from "react";
import { WithTrackedButton } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { e as _$$e } from "../905/579755";
import { useCanAccessFullDevMode } from "../figma_app/473493";
import { showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { RC } from "../3276/926297";
import { nk } from "../figma_app/2023";
import { useCurrentFileKey } from "../figma_app/516028";
import { Cf } from "../905/504727";
import { zg, iF, aD } from "../905/452667";
import { g_ } from "../905/646788";
import { Bj, lf, c4, ic } from "../3276/565493";
var c = d;
function u(e) {
  let {
    className,
    maxWidth,
    dep,
    children
  } = e;
  let s = useRef(null);
  let r = useRef(null);
  useLayoutEffect(() => {
    if (!s.current || !r.current) return;
    s.current.style.width = "unset";
    let e = Math.ceil(r.current.getBoundingClientRect().width);
    s.current.style.width = `${e}px`;
  }, [dep]);
  return jsx("div", {
    className,
    ref: s,
    style: {
      maxWidth
    },
    children: jsx("span", {
      ref: r,
      children
    })
  });
}
let I = "edit_request_tooltip--avatar--RW6OW";
let T = "edit_request_tooltip--buttonContainer--h3Mpx";
export function $$M0({
  target: e,
  windowPadding: t
}) {
  let n = Bj(500);
  let {
    unreadFileRoleRequests,
    markRequestsAsRead
  } = lf();
  let s = c4(unreadFileRoleRequests.slice(0, 2));
  let r = RC();
  let l = isDevHandoffEditorType();
  let d = useCanAccessFullDevMode();
  return n && unreadFileRoleRequests.length && s && r && (!l || d) ? jsx(E, {
    target: e,
    unreadRequests: unreadFileRoleRequests,
    markRequestsAsRead,
    editRequestPermissionsData: r,
    windowPadding: t
  }) : null;
}
function E({
  target: e,
  unreadRequests: t,
  markRequestsAsRead: n,
  editRequestPermissionsData: a,
  windowPadding: i
}) {
  let s = ic(e);
  return s ? jsx(TrackingProvider, {
    name: "Edit Request Tooltip",
    children: jsx(Cf, {
      className: "edit_request_tooltip--tooltipContainer--rhLGf",
      targetRect: s,
      disableDropdownScrollContainer: !0,
      propagateCloseClick: !0,
      windowPadding: i,
      children: jsx(N, {
        requests: t,
        markRequestsAsRead: n,
        editRequestPermissionsData: a
      })
    })
  }) : null;
}
function N({
  requests: e,
  markRequestsAsRead: t,
  editRequestPermissionsData: n
}) {
  return jsx(setupThemeContext, {
    mode: "dark",
    children: jsxs("div", {
      className: "edit_request_tooltip--contentContainer--IClWV",
      "data-testid": "edit-request-tooltip",
      children: [jsx(S, {
        requests: e
      }), jsx(D, {
        requests: e
      }), jsx(A, {
        requests: e,
        editRequestPermissionsData: n
      }), jsx(IconButton, {
        onClick: () => t(!0),
        "aria-label": getI18nString("general.close"),
        children: jsx(_$$A, {})
      })]
    })
  });
}
function S({
  requests: e
}) {
  let t = e.length <= 2 ? e.length : 1;
  let n = e.length - t;
  return jsxs("div", {
    className: "edit_request_tooltip--avatarContainer--wTOHq",
    children: [e.slice(0, t).map((e, t) => jsx(_$$e, {
      adtlClassName: I,
      size: 24,
      entity: {
        id: e.requesterUserId,
        name: e.requesterUser?.handle,
        img_url: e.requesterUser?.imgUrl
      },
      style: {
        zIndex: -t
      }
    }, e.id)), n > 0 && jsx(_$$e, {
      adtlClassName: c()(I, "edit_request_tooltip--avatarRemainder--AP7l3"),
      size: 24,
      entity: {
        id: "-1",
        name: n.toString()
      },
      style: {
        zIndex: -t
      }
    })]
  });
}
function D({
  requests: e
}) {
  let t = (e = getI18nString("user_notifications.community.someone")) => jsx("b", {
    children: e.length <= 18 ? e : `${e.slice(0, 18).trim()}...`
  });
  let n = (() => {
    switch (e.length) {
      case 1:
        return renderI18nText("role_request.edit_request_tooltip.user_wants_to_request_type", {
          userHandle: t(e[0].requesterUser?.handle),
          requestType: zg(e[0].level)
        });
      case 2:
        return renderI18nText("role_request.edit_request_tooltip.user1_and_user2_request_access", {
          userHandle1: t(e[0].requesterUser?.handle),
          userHandle2: t(e[1].requesterUser?.handle)
        });
      default:
        return renderI18nText("role_request.edit_request_tooltip.user_and_others_request_access", {
          userHandle: t(e[0].requesterUser?.handle),
          othersText: jsx("b", {
            children: renderI18nText("role_request.edit_request_tooltip.othersText", {
              numOthers: e.length - 1
            })
          })
        });
    }
  })();
  let a = 1 === e.length ? 137 : 158;
  return jsx(u, {
    className: "edit_request_tooltip--textContainer--OU1YR",
    maxWidth: a,
    dep: e,
    children: getFeatureFlags().edit_request_reformat ? jsxs(Fragment, {
      children: [jsx("div", {
        children: (() => {
          switch (e.length) {
            case 1:
              return t(e[0].requesterUser?.handle);
            case 2:
              let n = t(e[0].requesterUser?.handle);
              let a = t(e[1].requesterUser?.handle);
              if (e[0].requesterUser?.handle.length && e[1].requesterUser?.handle.length && e[1].requesterUser?.handle.length + e[0].requesterUser?.handle.length > 18) return renderI18nText("role_request.edit_request_tooltip.user1_and_user2", {
                userHandle1: t(e[0].requesterUser?.handle),
                userHandle2: jsx("b", {
                  children: renderI18nText("role_request.edit_request_tooltip.othersText", {
                    numOthers: e.length - 1
                  })
                })
              });
              return renderI18nText("role_request.edit_request_tooltip.user1_and_user2", {
                userHandle1: n,
                userHandle2: a
              });
            default:
              return renderI18nText("role_request.edit_request_tooltip.user1_and_user2", {
                userHandle1: t(e[0].requesterUser?.handle),
                userHandle2: jsx("b", {
                  children: renderI18nText("role_request.edit_request_tooltip.othersText", {
                    numOthers: e.length - 1
                  })
                })
              });
          }
        })()
      }), jsx("div", {
        children: (() => {
          if (1 !== e.length) return renderI18nText("role_request.edit_request_tooltip.request_access");
          {
            let t = zg(e[0].level);
            return renderI18nText("role_request.edit_request_tooltip.wants_to_request_type", {
              requestType: t
            });
          }
        })()
      })]
    }) : jsx(Fragment, {
      children: n
    })
  });
}
function A({
  requests: e,
  editRequestPermissionsData: t
}) {
  let n = useDispatch();
  let i = useCurrentFileKey();
  let s = t.file?.key ?? i;
  let r = e[0];
  return 1 === e.length && r && r.requesterUser ? jsx("div", {
    className: T,
    children: jsx(L, {
      id: r.id,
      level: r.level,
      requesterUserId: r.requesterUserId,
      userHandle: r.requesterUser.handle,
      editRequestPermissionsData: t
    })
  }) : s ? jsx("div", {
    className: T,
    children: jsx(WithTrackedButton, {
      trackingProperties: {
        numRequests: e.length
      },
      trackingEventName: "Edit Request Tooltip - Open Share Modal",
      onClick: () => {
        s && n(showModalHandler({
          type: g_,
          data: {
            fileKey: s,
            source: nk.editRequestTooltip
          }
        }));
      },
      variant: "secondary",
      children: renderI18nText("role_request.edit_request_tooltip.view_button_text")
    })
  }) : null;
}
function L(e) {
  let {
    id,
    level,
    requesterUserId,
    userHandle,
    editRequestPermissionsData
  } = e;
  let l = useDispatch();
  let d = useCurrentFileKey();
  let {
    handleApprove,
    handleDeny
  } = iF(l, editRequestPermissionsData)({
    roleRequestId: id,
    requestType: level,
    handle: userHandle
  });
  let u = {
    fileKey: d,
    userId: requesterUserId,
    fileRoleRequestId: id,
    request_type: aD(level)
  };
  return jsxs(Fragment, {
    children: [jsx(WithTrackedButton, {
      trackingProperties: u,
      trackingEventName: "Edit Request Tooltip - Request Denied",
      onClick: handleDeny,
      variant: "destructiveLink",
      children: renderI18nText("request_row.deny")
    }), jsx(WithTrackedButton, {
      trackingProperties: u,
      trackingEventName: "Edit Request Tooltip - Request Approved",
      onClick: handleApprove,
      variant: "secondary",
      children: renderI18nText("request_row.approve")
    })]
  });
}
export const F = $$M0;