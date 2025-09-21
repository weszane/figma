import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { getFeatureFlags } from "../905/601108";
import { renderI18nText, getI18nString } from "../905/303541";
import { hasValidId } from "../figma_app/336853";
import { d as _$$d } from "../905/762622";
import { CH } from "../figma_app/805373";
import { _ } from "../905/328370";
import { hP } from "../905/144598";
import { gO, S6, $j, my, wo, Q, UU, Rp, JH } from "../905/70359";
export function $$m1(e) {
  return _$$d(e.token.content) ? getFeatureFlags().user_groups ? jsx(g, {
    tokenContent: e.token.content
  }) : null : jsx(f, {
    tokenContent: e.token.content
  });
}
export function $$h2(e) {
  return jsx(f, {
    tokenContent: e.token.content
  });
}
function g(e) {
  return jsx("div", {
    className: gO,
    children: e.tokenContent.name
  });
}
function f(e) {
  let {
    email,
    displayString
  } = hasValidId(e.tokenContent) ? {
    email: e.tokenContent.email,
    displayString: e.tokenContent.handle
  } : {
    email: e.tokenContent,
    displayString: e.tokenContent
  };
  return jsx(_, {
    className: gO,
    email,
    displayString
  });
}
export function $$_0(e) {
  if (_$$d(e.searchResult)) {
    if (!getFeatureFlags().user_groups) return null;
    {
      let t = e.searchResult;
      return jsx(b, {
        userGroup: t,
        isSelected: e.isSelected
      });
    }
  }
  return jsx(y, {
    user: e.searchResult,
    isSelected: e.isSelected
  });
}
export function $$A3(e) {
  return jsx(y, {
    user: e.searchResult,
    isSelected: e.isSelected
  });
}
function y(e) {
  let t = e.user.existingRole || e.user.pendingRole;
  return jsxs("div", {
    className: e.isSelected ? S6 : $j,
    children: [jsx("div", {
      className: my,
      children: jsx(hP, {
        user: e.user,
        id: e.user.id,
        pending: e.user.pendingRole || !1
      })
    }), jsxs("div", {
      className: wo,
      children: [!e.user.pendingRole && jsx("div", {
        className: t ? Q : UU,
        children: e.user.handle
      }), jsx(_, {
        className: Rp,
        email: e.user.email,
        displayString: e.user.email
      })]
    }), t && jsx("p", {
      className: JH,
      children: e.user.pendingRole ? renderI18nText("permissions_modal.autocomplete_permissions.invite_pending") : renderI18nText("permissions_modal.autocomplete_permissions.already_added")
    })]
  });
}
function b(e) {
  let [t, i] = useState(!1);
  return jsxs("div", {
    className: e.isSelected ? S6 : $j,
    onMouseEnter: () => i(!0),
    onMouseLeave: () => i(!1),
    children: [jsx("div", {
      className: my,
      children: jsx(CH, {
        entity: e.userGroup,
        size: 24
      })
    }), jsxs("div", {
      className: wo,
      children: [jsx("div", {
        className: UU,
        children: e.userGroup.name
      }), jsx("div", {
        className: Rp,
        ...(t && {
          "data-tooltip": function (e, t) {
            if (e && 0 !== e.length) {
              if (1 === e.length) return e[0];
              if (t <= e.length) {
                let t = e.slice(0, -1);
                return getI18nString("permissions_modal.autocomplete_permissions.user_group_tooltip_less_than_10_members", {
                  firstMembers: t.length > 1 ? t.join(", ") + "," : t[0],
                  lastMember: e[e.length - 1]
                });
              }
              return getI18nString("permissions_modal.autocomplete_permissions.user_group_tooltip_more_than_10_members", {
                membersList: e.join(", "),
                othersCount: t - e.length
              });
            }
          }(e.userGroup.preview_members, e.userGroup.member_count),
          "data-tooltip-type": "text",
          "data-tooltip-show-immediately": t,
          "data-tooltip-max-width": "300"
        }),
        children: renderI18nText("permissions_modal.autocomplete_permissions.user_group_num_members", {
          count: e.userGroup.member_count
        })
      })]
    })]
  });
}
export const VO = $$_0;
export const Vh = $$m1;
export const gy = $$h2;
export const o6 = $$A3;