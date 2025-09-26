import { useDispatch, useSelector } from "react-redux";
import { openCreateTeamFlow } from "../figma_app/976345";
import { popModalStack, hideModal, showModalHandler } from "../905/156213";
import { hasStarterTeamLoopholeAccess } from "../figma_app/297957";
import { getUserId } from "../905/372672";
import { selectUserFlag } from "../905/940356";
import { hasMultipleOwners } from "../figma_app/598018";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { isAllowedDomain, getEmailDomain } from "../figma_app/416935";
import { CloseButton } from "../905/17223";
import { ButtonSecondaryTracked, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { TeamAvatar } from "../figma_app/537817";
import { S as _$$S } from "../905/339549";
import { postUserFlag } from "../905/985254";
import { TrackingProvider } from "../figma_app/831799";
import { h as _$$h } from "../905/864281";
import { consumptionPaywallUtils } from "../905/224";
import { UpsellModalType } from "../905/165519";
import { TeamCreationSpeedBump } from "../905/652992";
import { registerModal } from "../905/102752";
import w from "classnames";
import { ModalContainer } from "../figma_app/918700";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { A as _$$A } from "../4711/867985";
var C = w;
function T(e) {
  let {
    text,
    hoverText
  } = e;
  let [n, r] = useState(!1);
  let [a, s] = useState(!0);
  let [o, l] = useState(null);
  useEffect(() => {
    if (o) return () => clearTimeout(o);
  }, [o]);
  return jsx("div", {
    onMouseLeave: () => {
      hoverText && (r(!1), o && clearTimeout(o), l(setTimeout(() => {
        s(!0);
      }, 200)));
    },
    className: "hover_tooltip--tooltipParent--KAceC",
    children: jsxs("span", {
      children: [!!hoverText && jsxs("span", {
        className: C()("hover_tooltip--tooltip--SjnUs", {
          "hover_tooltip--tooltipHoverStateVisible--XZGjZ": n,
          "hover_tooltip--tooltipHoverStateHidden--9a66V": a
        }),
        children: [hoverText, jsx("div", {
          className: "hover_tooltip--tooltipHoverTriangle--ehc6Y"
        })]
      }), jsx("span", {
        className: "hover_tooltip--tooltipMarker--nT5Gb",
        children: "\u2713"
      }), jsx("span", {
        onMouseOver: () => {
          hoverText && (s(!1), o && clearTimeout(o), r(!1), setTimeout(() => {
            r(!0);
          }, 20));
        },
        className: C()({
          "hover_tooltip--tooltipHoverable--oYa3X": !!hoverText
        }),
        children: text
      })]
    })
  });
}
function P({
  user: e
}) {
  let t = isAllowedDomain(e.email) ? null : getEmailDomain(e.email)?.split(".")[0];
  t = t ? t.charAt(0).toUpperCase() + t.slice(1) : getI18nString("team_creation_speed_bump.placeholder.team_name", {
    userName: e.name
  });
  return jsxs("div", {
    className: "team_creation_speed_bump--placeholderVisual--Oqrum",
    children: [jsxs("div", {
      className: "team_creation_speed_bump--placeholderHeader--homNf text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: [jsx(TeamAvatar, {
        team: {
          name: t
        }
      }), jsx("div", {
        "aria-hidden": !0,
        children: t
      })]
    }), jsxs("div", {
      className: "team_creation_speed_bump--placeholderContent--FCRBG",
      children: [jsx(O, {
        pxTextWidth: 66
      }), jsx(O, {
        pxTextWidth: 39
      }), jsx(O, {
        pxTextWidth: 82
      })]
    })]
  });
}
function O({
  pxTextWidth: e
}) {
  return jsxs("div", {
    className: "team_creation_speed_bump--placeholderDirectory--IAGl8",
    children: [jsx("div", {
      className: "team_creation_speed_bump--placeholderLine--vY1Tr"
    }), jsx(SvgComponent, {
      svg: _$$A
    }), jsx("div", {
      className: "team_creation_speed_bump--placeholderText--T0k3s",
      style: {
        width: `${e}px`
      }
    })]
  });
}
let D = registerModal(function (e) {
  let t = useDispatch();
  let i = useRef(null);
  let [r, s] = useState(550);
  let o = _$$h.useTrackingContext({
    trigger: UpsellModalType.TEAM_CREATION_SPEED_BUMP
  });
  let l = () => {
    t(popModalStack());
  };
  let d = () => {
    t(hideModal());
  };
  let p = () => {
    l();
    t(showModalHandler({
      type: ConsumptionPaywallModalPlansPricing,
      data: {
        resource: TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP,
        currentPlan: consumptionPaywallUtils.Plan.STARTER,
        upsellPlan: consumptionPaywallUtils.Plan.PRO,
        editorType: e.editorType,
        upsellSource: UpsellModalType.TEAM_CREATION_SPEED_BUMP
      }
    }));
  };
  let [g, _] = useState(!1);
  let S = () => {
    g && t(postUserFlag({
      team_creation_speed_bump_dismissed: !0
    }));
  };
  useLayoutEffect(() => {
    let e = i?.current?.offsetWidth;
    e && e > 167 && s(550 + (e - 167));
  }, []);
  return jsx(TrackingProvider, {
    name: "Team creation speed bump",
    properties: o,
    children: jsxs(ModalContainer, {
      title: getI18nString("team_creation_speed_bump.title"),
      titleClassName: "team_creation_speed_bump--modalTitle--ji1ue",
      className: "team_creation_speed_bump--modal--Q02I8",
      size: r,
      children: [jsx(CloseButton, {
        className: "team_creation_speed_bump--closeButton--JcGlN close_button--modalUpperRightCorner--eKAQg",
        onClick: () => {
          S();
          l();
        },
        innerText: "Close"
      }), jsxs("div", {
        className: "team_creation_speed_bump--modalContent--RxtK4 text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: [jsxs("div", {
          className: "team_creation_speed_bump--modalText--GFoIV",
          children: [jsx("p", {
            children: renderI18nText("team_creation_speed_bump.body.best_way_to_organize_team_projects")
          }), jsx("p", {
            className: "team_creation_speed_bump--modalBold--Z5JFe",
            children: getI18nString("team_creation_speed_bump.body.upgrade_a_team")
          }), jsx(T, {
            text: getI18nString("team_creation_speed_bump.body.unlimited_files")
          }), jsx(T, {
            text: getI18nString("team_creation_speed_bump.body.viewers_and_commenters"),
            hoverText: getI18nString("team_creation_speed_bump.tooltip.viewers_and_commenters")
          }), jsx(T, {
            text: getI18nString("team_creation_speed_bump.body.set_permissions"),
            hoverText: getI18nString("team_creation_speed_bump.tooltip.set_permissions")
          })]
        }), jsx(P, {
          user: e.user
        })]
      }), jsx("div", {
        className: "team_creation_speed_bump--separator--8QwGz"
      }), jsxs("div", {
        className: "team_creation_speed_bump--footer--qMvoj",
        children: [jsx(_$$S, {
          checked: g,
          onChange: e => _(e.currentTarget.checked),
          label: getI18nString("team_creation_speed_bump.footer.checkbox_text")
        }), jsxs("div", {
          className: "team_creation_speed_bump--footerButtons--zvChs",
          children: [jsx("div", {
            ref: i,
            children: jsxs(ButtonSecondaryTracked, {
              className: "team_creation_speed_bump--upgradeButton--Z3aHm",
              onClick: () => {
                S();
                l();
                p();
              },
              innerText: getI18nString("team_creation_speed_bump.footer.upgrade_button.text"),
              children: [getI18nString("team_creation_speed_bump.footer.upgrade_button.text"), jsx("div", {
                className: "team_creation_speed_bump--proLabel--OKnVm text--fontPos9--naThA text--_fontBase--QdLsd",
                children: getI18nString("team_creation_speed_bump.footer.upgrade_button.label")
              })]
            })
          }), jsx(ButtonBasePrimaryTracked, {
            className: "team_creation_speed_bump--createTeamButton--C0SJY",
            onClick: () => {
              S();
              d();
              e.startTeamCreation();
            },
            children: getI18nString("team_creation_speed_bump.footer.create_team_button.text")
          })]
        })]
      })]
    })
  });
}, "TeamCreationSpeedBump");
export function $$L0() {
  let e = getUserId();
  let t = useDispatch();
  let i = selectUserFlag("team_creation_speed_bump_dismissed");
  let c = useSelector(e => e.teams);
  let u = useSelector(e => e.roles.byTeamId);
  let p = useSelector(e => e.user);
  let m = () => {
    e && t(openCreateTeamFlow({
      ignoreCurrentPlan: !0
    }));
  };
  return e && !i && hasMultipleOwners(e, Object.values(c), u) && !hasStarterTeamLoopholeAccess({
    userId: e,
    teams: Object.values(c),
    rolesByTeamId: u
  }) ? () => t(showModalHandler({
    type: D,
    data: {
      user: p,
      startTeamCreation: m,
      editorType: null
    }
  })) : m;
}
export const z = $$L0;