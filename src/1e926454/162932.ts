import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useMemo, createRef } from "react";
import { connect, useDispatch } from "react-redux";
import { debounce } from "../905/915765";
import { $n } from "../905/521428";
import { EventShield } from "../905/821217";
import { d as _$$d } from "../905/976845";
import { k as _$$k } from "../905/443820";
import { E as _$$E } from "../905/632989";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { P as _$$P } from "../905/537307";
import { getFeatureFlags } from "../905/601108";
import { c$, ms, MM } from "../figma_app/236327";
import { B as _$$B } from "../905/714743";
import { $z } from "../figma_app/617427";
import { Ph } from "../905/160095";
import { renderI18nText, getI18nString } from "../905/303541";
import { oB, j7 } from "../905/929976";
import { showModal, popModalStack } from "../905/156213";
import { $$do, F1, Nw, ui, LN, Kq } from "../905/941249";
import { S as _$$S } from "../1e926454/283343";
import { getPermissionLevelName } from "../figma_app/12796";
import { AccessLevelEnum } from "../905/557142";
import { Ib } from "../905/129884";
import { registerModal } from "../905/102752";
import { Cf } from "../905/504727";
import { b8 } from "../figma_app/926061";
import { A as _$$A } from "../2854/769773";
let N = "team_join_link_permissions--loadedViewWrapper--LjAIr";
let A = "team_join_link_permissions--urlText--jcjRH ellipsis--ellipsis--Tjyfa";
let D = debounce((e, n, t) => e($$do({
  teamId: n,
  level: t
})));
let $$R0 = connect(e => ({
  teamJoinLinks: e.teamJoinLinks
}), null, (e, n, t) => ({
  ...e,
  ...t,
  ...n
}))(function (e) {
  let {
    dispatch,
    teamId,
    initialInviteLevel,
    teamPermissions
  } = e;
  let [o, d] = useState(initialInviteLevel);
  let c = _$$S(teamId);
  let p = "loading" === c.status;
  let u = c.data;
  useEffect(() => (D(dispatch, teamId, initialInviteLevel), () => {
    dispatch(F1(null));
  }), [dispatch, teamId, initialInviteLevel]);
  let _ = e.teamPermissions.canEdit && !!e.teamJoinLinks?.url && e.includeCopyLinkButton;
  let m = useCallback(() => {
    dispatch(showModal({
      type: W,
      data: {
        resetLink: () => {
          dispatch(Nw({
            teamId,
            level: o,
            shouldShowVisualBell: !0
          }));
        }
      }
    }));
  }, [dispatch, teamId, o]);
  let h = useCallback(() => jsx(B, {
    dropdownShown: e.dropdownShown,
    resetInviteLinks: m,
    disableInviteLinks: () => dispatch(ui({
      teamId
    })),
    loading: p,
    canAdmin: teamPermissions.canAdmin
  }), [dispatch, e.dropdownShown, p, m, teamPermissions.canAdmin, teamId,,]);
  let x = useCallback(() => {
    u && dispatch(LN({
      teamId: e.teamId,
      url: u,
      source: Kq.TEAM_PERMISSIONS_MODAL
    }));
  }, [dispatch, e.teamId, u]);
  let j = useMemo(() => e.includeCopyLinkButton ? jsx($n, {
    onClick: x,
    disabled: !u,
    children: renderI18nText("team_join_links.copy_link")
  }) : h(), [x, e.includeCopyLinkButton, u, h]);
  return !p && !e.teamJoinLinks || !teamPermissions.canAdmin && e.teamJoinLinks?.disabled ? null : jsxs(Fragment, {
    children: [jsxs("div", {
      style: _ ? {
        justifyContent: "space-between"
      } : {
        justifyContent: "flex-start"
      },
      className: "team_join_link_permissions--inviteLinkTitleWrapper--LSkbL",
      children: [jsx("span", {
        className: "team_join_link_permissions--inviteHeader--80xpy",
        children: renderI18nText("team_join_links.invite_link")
      }), _ && h()]
    }), "loading" === c.status || e.teamJoinLinks?.url ? jsx(O, {
      dropdownShown: e.dropdownShown,
      getPermissionDescriptionText: e.getPermissionDescriptionText,
      showDropdownSeparators: e.showDropdownSeparators,
      setLevel: e => {
        o !== e && (d(e), dispatch($$do({
          teamId,
          level: e,
          shouldShowFailureMessage: !0,
          callbackOnFailure: () => d(o)
        })));
      },
      currentLevel: o,
      url: p ? void 0 : e.teamJoinLinks?.url,
      inviteLevels: teamPermissions.canEdit ? [AccessLevelEnum.VIEWER, AccessLevelEnum.EDITOR] : [AccessLevelEnum.VIEWER],
      teamId: e.teamId,
      button: j
    }) : jsx(F, {
      turnOnInviteLinks: () => dispatch(Nw({
        teamId,
        level: o
      }))
    })]
  });
});
function B(e) {
  let n = useDispatch();
  let t = "team-link-settings-dropdown";
  let s = createRef();
  let l = () => e.dropdownShown?.type === t;
  return jsxs(EventShield, {
    eventListeners: ["onMouseDown"],
    children: [jsx("div", {
      ref: s,
      children: jsx(_$$d, {
        "aria-expanded": l(),
        disabled: e.loading,
        "aria-label": getI18nString("team_join_links.team_invite_link_settings"),
        onClick: () => {
          let e = s.current?.getBoundingClientRect();
          l() ? n(oB()) : e && n(j7({
            type: t,
            data: {
              targetRect: e
            }
          }));
        },
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("team_join_links.team_invite_link_settings")
        },
        children: jsx(_$$P, {})
      })
    }), l() && jsxs(Cf, {
      targetRect: e.dropdownShown.data.targetRect,
      maxWidth: 140,
      minWidth: 140,
      lean: "left",
      propagateCloseClick: !0,
      children: [jsx(c$, {
        onClick: e.resetInviteLinks,
        children: renderI18nText("team_join_links.reset_invite_links")
      }), e.canAdmin && jsx(c$, {
        onClick: e.disableInviteLinks,
        children: renderI18nText("team_join_links.turn_off_invite_links")
      })]
    })]
  });
}
function O(e) {
  let n = useDispatch();
  let t = "join-link-permission-level-dropdown";
  let a = e.currentLevel === AccessLevelEnum.VIEWER ? "-32px" : "-61px";
  let s = jsxs("div", {
    className: "team_join_link_permissions--linkAndDropdown--dOdkB",
    children: [jsxs("span", {
      className: "team_join_link_permissions--urlSection--fh6VF",
      children: [!e.url && jsx(_$$k, {}), e.url && jsx("span", {
        className: A,
        children: e.url
      })]
    }), jsxs("div", {
      children: [jsxs(_$$E, {
        onClick: i => {
          i.stopPropagation();
          e.url && (e.dropdownShown ? n(oB()) : n(j7({
            type: t
          })));
        },
        className: "team_join_link_permissions--permissionLevelDropdown--xuQLz role_row--select--6VpSS",
        children: [jsx("span", {
          children: getPermissionLevelName(e.currentLevel)
        }), jsx("div", {
          className: "team_join_link_permissions--caretWrapper--OXpki role_row--caretWrapper--P1Mak",
          children: jsx(_$$B, {
            svg: _$$A
          })
        })]
      }), e.dropdownShown && e.dropdownShown.type === t && jsx(ms, {
        className: "team_join_link_permissions--permissionLevelDropdownOptions--cgu-T",
        style: {
          marginTop: a
        },
        children: e.inviteLevels.map((n, t) => jsx(MM, {
          checked: n === e.currentLevel,
          onClick: () => e.setLevel(n),
          children: getPermissionLevelName(n)
        }, t))
      })]
    })]
  });
  let l = jsxs("div", {
    className: "team_join_link_permissions--linkAndDropdownV2--7DFWL",
    children: [jsxs("div", {
      className: "team_join_link_permissions--urlSectionV2--YS4eI",
      children: [!e.url && jsx(_$$k, {}), e.url && jsx("span", {
        className: A,
        children: e.url
      })]
    }), jsx("div", {
      className: "team_join_link_permissions--permissionLevelDropdownWrapper--yCu62",
      children: jsx(b8, {
        value: e.currentLevel,
        options: e.inviteLevels,
        getPermissionName: getPermissionLevelName,
        getPermissionDescription: e.getPermissionDescriptionText,
        showSeparators: e.showDropdownSeparators,
        onChange: e.setLevel
      })
    })]
  });
  return jsxs("div", {
    className: N,
    children: [getFeatureFlags().team_permission_modal_styling ? l : s, e.button]
  });
}
function F(e) {
  return jsxs("div", {
    className: N,
    children: [renderI18nText("team_join_links.share_a_secret_link_people_can_use_to_join_your_team"), " ", jsx(Ph, {
      href: "#",
      onClick: e.turnOnInviteLinks,
      children: renderI18nText("team_join_links.turn_on_invite_links")
    })]
  });
}
let W = "RESET_LINKS_CONFIRMATION_MODAL";
registerModal(function (e) {
  let n = useDispatch();
  let t = useModalManager(e);
  return jsx(bL, {
    width: "md",
    manager: t,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("team_join_links.reset_invite_links")
        })
      }), jsx(nB, {
        children: renderI18nText("team_join_links.modal_description")
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($z, {
            variant: "secondary",
            onClick: () => n(popModalStack()),
            children: renderI18nText("team_join_links.cancel")
          }), jsx($z, {
            variant: "destructive",
            onClick: () => {
              e.resetLink();
              n(popModalStack());
            },
            children: renderI18nText("team_join_links.reset_links")
          })]
        })
      })]
    })
  });
}, W);
export const i = $$R0;