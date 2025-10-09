import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useMemo, createRef } from "react";
import { connect, useDispatch } from "react-redux";
import { debounce } from "../905/915765";
import { Button } from "../905/521428";
import { EventShield } from "../905/821217";
import { DialogTriggerButton } from "../905/976845";
import { LoadingSpinner } from "../905/443820";
import { ButtonPrimitive } from "../905/632989";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { P as _$$P } from "../905/537307";
import { getFeatureFlags } from "../905/601108";
import { c$, ms, MM } from "../figma_app/236327";
import { SvgComponent } from "../905/714743";
import { WithTrackedButton } from "../figma_app/617427";
import { TrackedLink } from "../905/160095";
import { renderI18nText, getI18nString } from "../905/303541";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { showModal, popModalStack } from "../905/156213";
import { $$do, F1, Nw, ui, LN, Kq } from "../905/941249";
import { S as _$$S } from "../1e926454/283343";
import { getPermissionLevelName } from "../figma_app/12796";
import { AccessLevelEnum } from "../905/557142";
import { KindEnum } from "../905/129884";
import { registerModal } from "../905/102752";
import { ConnectedPointingDropdown } from "../905/504727";
import { b8 } from "../figma_app/926061";
import { A as _$$A } from "../2854/769773";
let A = "team_join_link_permissions--loadedViewWrapper--LjAIr";
let O = "team_join_link_permissions--urlText--jcjRH ellipsis--ellipsis--Tjyfa";
let P = debounce((e, t, r) => e($$do({
  teamId: t,
  level: r
})));
let $$L0 = connect(e => ({
  teamJoinLinks: e.teamJoinLinks
}), null, (e, t, r) => ({
  ...e,
  ...r,
  ...t
}))(function (e) {
  let {
    dispatch,
    teamId,
    initialInviteLevel,
    teamPermissions
  } = e;
  let [l, d] = useState(initialInviteLevel);
  let c = _$$S(teamId);
  let u = "loading" === c.status;
  let m = c.data;
  useEffect(() => (P(dispatch, teamId, initialInviteLevel), () => {
    dispatch(F1(null));
  }), [dispatch, teamId, initialInviteLevel]);
  let _ = e.teamPermissions.canEdit && !!e.teamJoinLinks?.url && e.includeCopyLinkButton;
  let p = useCallback(() => {
    dispatch(showModal({
      type: U,
      data: {
        resetLink: () => {
          dispatch(Nw({
            teamId,
            level: l,
            shouldShowVisualBell: !0
          }));
        }
      }
    }));
  }, [dispatch, teamId, l]);
  let f = useCallback(() => jsx(D, {
    dropdownShown: e.dropdownShown,
    resetInviteLinks: p,
    disableInviteLinks: () => dispatch(ui({
      teamId
    })),
    loading: u,
    canAdmin: teamPermissions.canAdmin
  }), [dispatch, e.dropdownShown, u, p, teamPermissions.canAdmin, teamId,,]);
  let g = useCallback(() => {
    m && dispatch(LN({
      teamId: e.teamId,
      url: m,
      source: Kq.TEAM_PERMISSIONS_MODAL
    }));
  }, [dispatch, e.teamId, m]);
  let h = useMemo(() => e.includeCopyLinkButton ? jsx(Button, {
    onClick: g,
    disabled: !m,
    children: renderI18nText("team_join_links.copy_link")
  }) : f(), [g, e.includeCopyLinkButton, m, f]);
  return !u && !e.teamJoinLinks || !teamPermissions.canAdmin && e.teamJoinLinks?.disabled ? null : jsxs(Fragment, {
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
      }), _ && f()]
    }), "loading" === c.status || e.teamJoinLinks?.url ? jsx(M, {
      dropdownShown: e.dropdownShown,
      getPermissionDescriptionText: e.getPermissionDescriptionText,
      showDropdownSeparators: e.showDropdownSeparators,
      setLevel: e => {
        l !== e && (d(e), dispatch($$do({
          teamId,
          level: e,
          shouldShowFailureMessage: !0,
          callbackOnFailure: () => d(l)
        })));
      },
      currentLevel: l,
      url: u ? void 0 : e.teamJoinLinks?.url,
      inviteLevels: teamPermissions.canEdit ? [AccessLevelEnum.VIEWER, AccessLevelEnum.EDITOR] : [AccessLevelEnum.VIEWER],
      teamId: e.teamId,
      button: h
    }) : jsx(B, {
      turnOnInviteLinks: () => dispatch(Nw({
        teamId,
        level: l
      }))
    })]
  });
});
function D(e) {
  let t = useDispatch<AppDispatch>();
  let r = "team-link-settings-dropdown";
  let n = createRef();
  let o = () => e.dropdownShown?.type === r;
  return jsxs(EventShield, {
    eventListeners: ["onMouseDown"],
    children: [jsx("div", {
      ref: n,
      children: jsx(DialogTriggerButton, {
        "aria-expanded": o(),
        disabled: e.loading,
        "aria-label": getI18nString("team_join_links.team_invite_link_settings"),
        onClick: () => {
          let e = n.current?.getBoundingClientRect();
          o() ? t(hideDropdownAction()) : e && t(showDropdownThunk({
            type: r,
            data: {
              targetRect: e
            }
          }));
        },
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("team_join_links.team_invite_link_settings")
        },
        children: jsx(_$$P, {})
      })
    }), o() && jsxs(ConnectedPointingDropdown, {
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
function M(e) {
  let t = useDispatch<AppDispatch>();
  let r = "join-link-permission-level-dropdown";
  let s = e.currentLevel === AccessLevelEnum.VIEWER ? "-32px" : "-61px";
  let n = jsxs("div", {
    className: "team_join_link_permissions--linkAndDropdown--dOdkB",
    children: [jsxs("span", {
      className: "team_join_link_permissions--urlSection--fh6VF",
      children: [!e.url && jsx(LoadingSpinner, {}), e.url && jsx("span", {
        className: O,
        children: e.url
      })]
    }), jsxs("div", {
      children: [jsxs(ButtonPrimitive, {
        onClick: a => {
          a.stopPropagation();
          e.url && (e.dropdownShown ? t(hideDropdownAction()) : t(showDropdownThunk({
            type: r
          })));
        },
        className: "team_join_link_permissions--permissionLevelDropdown--xuQLz role_row--select--6VpSS",
        children: [jsx("span", {
          children: getPermissionLevelName(e.currentLevel)
        }), jsx("div", {
          className: "team_join_link_permissions--caretWrapper--OXpki role_row--caretWrapper--P1Mak",
          children: jsx(SvgComponent, {
            svg: _$$A
          })
        })]
      }), e.dropdownShown && e.dropdownShown.type === r && jsx(ms, {
        className: "team_join_link_permissions--permissionLevelDropdownOptions--cgu-T",
        style: {
          marginTop: s
        },
        children: e.inviteLevels.map((t, r) => jsx(MM, {
          checked: t === e.currentLevel,
          onClick: () => e.setLevel(t),
          children: getPermissionLevelName(t)
        }, r))
      })]
    })]
  });
  let o = jsxs("div", {
    className: "team_join_link_permissions--linkAndDropdownV2--7DFWL",
    children: [jsxs("div", {
      className: "team_join_link_permissions--urlSectionV2--YS4eI",
      children: [!e.url && jsx(LoadingSpinner, {}), e.url && jsx("span", {
        className: O,
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
    className: A,
    children: [getFeatureFlags().team_permission_modal_styling ? o : n, e.button]
  });
}
function B(e) {
  return jsxs("div", {
    className: A,
    children: [renderI18nText("team_join_links.share_a_secret_link_people_can_use_to_join_your_team"), " ", jsx(TrackedLink, {
      href: "#",
      onClick: e.turnOnInviteLinks,
      children: renderI18nText("team_join_links.turn_on_invite_links")
    })]
  });
}
let U = "RESET_LINKS_CONFIRMATION_MODAL";
registerModal(function (e) {
  let t = useDispatch<AppDispatch>();
  let r = useModalManager(e);
  return jsx(ModalRootComponent, {
    width: "md",
    manager: r,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("team_join_links.reset_invite_links")
        })
      }), jsx(DialogBody, {
        children: renderI18nText("team_join_links.modal_description")
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(WithTrackedButton, {
            variant: "secondary",
            onClick: () => t(popModalStack()),
            children: renderI18nText("team_join_links.cancel")
          }), jsx(WithTrackedButton, {
            variant: "destructive",
            onClick: () => {
              e.resetLink();
              t(popModalStack());
            },
            children: renderI18nText("team_join_links.reset_links")
          })]
        })
      })]
    })
  });
}, U);
export const i = $$L0;
