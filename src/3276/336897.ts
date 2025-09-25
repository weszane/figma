import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setupMenu, MenuItemComp, MenuContainerComp, MenuRootComp } from "../figma_app/860955";
import { u as _$$u } from "../905/65923";
import { bL as _$$bL, O6, HG } from "../905/598775";
import { J as _$$J } from "../905/125993";
import { getFeatureFlags } from "../905/601108";
import m from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { Av } from "../905/149328";
import { c$ } from "../figma_app/236327";
import { h1 } from "../905/986103";
import { renderI18nText, getI18nString } from "../905/303541";
import { H8 } from "../905/590952";
import { hideDropdownAction } from "../905/929976";
import { hideTooltip } from "../905/765855";
import { stopPropagation } from "../figma_app/753501";
import { isUIHiddenOrLocked } from "../905/868547";
import { Py, AD } from "../figma_app/578768";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { KindEnum } from "../905/129884";
import { Cf } from "../905/504727";
import { fI, YW } from "../figma_app/626177";
import { vQ } from "../9410/124657";
import { i as _$$i, S as _$$S } from "../3276/270077";
import { Ro } from "../figma_app/805373";
import { _L, K$, C7 } from "../9410/574786";
import { Fp, LH, nr, MO, Vs, Cu, BI, yH, UD, FH, G7, Xg, Hl, Sh, nP, ko, j7, TV, DL, e6, vO, hv, VQ, Lk, tE, L8, zO, fJ } from "../9410/232922";
import { Wh, R3, XF } from "../9410/132424";
import { m52, Ko3 } from "../figma_app/27776";
import { A as _$$A } from "../2854/580012";
import { A as _$$A2 } from "../2854/415431";
var u = m;
let F = parsePxNumber(m52);
let B = parsePxNumber(Ko3);
function U(e) {
  let t = useSelector(e => e.multiplayer);
  return "sessionID" in e && t.observingSessionID === e.sessionID;
}
var H = (e => (e.CURRENT_USER = "current_user", e.FILE_CREATOR = "file_creator", e))(H || {});
function V(e) {
  let {
    user,
    onClick,
    volumeIcon,
    containsCursor,
    secondaryActions,
    disableSpotlightAnimation
  } = e;
  let C = selectCurrentFile();
  let E = useSelector(e => e.multiplayer);
  let A = selectCurrentUser();
  let L = U(user);
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let H = E.allUsers.length > 1;
  let V = A?.id === user.userID;
  let [q, z] = useState(!1);
  let Z = useRef(null);
  let $ = useDispatch();
  let K = "prototype" === useSelector(e => e.selectedView).view;
  let W = jsx(Ro, {
    entity: {
      ...user,
      id: user.userID
    },
    className: Fp,
    size: 24
  }, user.userID);
  let G = Py(user);
  AD(user) ? W = jsx("span", {
    className: LH,
    children: jsx(vQ, {
      sessionID: user.sessionID,
      observingSessionID: E.observingSessionID,
      presenterSessionID: E.presenterSessionID ?? null,
      nominatedSessionID: E.sessionsNominatingCurrentUser.length > 0 ? E.sessionID : null,
      user,
      showColorIndicators: H,
      horizontal: !0,
      disableSpotlightAnimation
    })
  }) : G && (W = jsx("span", {
    className: LH,
    children: jsx("div", {
      className: _L,
      children: jsx(H8, {
        user: {
          ...user,
          id: user.userID
        }
      })
    })
  }));
  let Q = u()({
    [nr]: !getFeatureFlags().a11y_multiplayer_dropdown,
    [MO]: !0,
    [Vs]: !getFeatureFlags().a11y_multiplayer_dropdown,
    [Cu]: e.isCurrentUserHeaderRow,
    [BI]: e.isInListbox && !G,
    [yH]: containsCursor && !G,
    [UD]: G
  });
  let X = () => V ? "current_user" : user.userID === C?.creatorId ? "file_creator" : null;
  let Y = () => {
    let e = X();
    return "current_user" === e ? jsxs("span", {
      children: [" ", renderI18nText("collaboration.voice.you_lower_cased")]
    }) : "file_creator" === e ? jsxs("span", {
      children: [" ", getFeatureFlags().multiplayer_avatar_show_creator_label ? renderI18nText("collaboration.voice.creator") : renderI18nText("collaboration.voice.owner")]
    }) : "";
  };
  let J = () => G ? jsx("span", {
    className: FH,
    children: jsx(h1, {
      date: user.viewedAt
    })
  }) : null;
  let ee = () => {
    let e = secondaryActions?.map(e => jsx(MenuItemComp, {
      onClick: t => {
        t.stopPropagation();
        t.preventDefault();
        e.onClick(t);
      },
      disabled: e.disabled,
      children: e.text
    }, e.key));
    return jsx(MenuContainerComp, {
      children: e
    });
  };
  let et = () => jsxs(MenuRootComp, {
    manager,
    children: [jsx("div", {
      className: G7,
      children: jsx(_$$u, {
        className: Xg,
        "aria-label": getI18nString("fullscreen.toolbar.multiplayer.more_options"),
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("fullscreen.toolbar.multiplayer.more_options"),
        ...getTriggerProps(),
        children: jsx(_$$J, {})
      })
    }), ee()]
  });
  let en = jsxs(fI, {
    className: u()(Hl, {
      [Sh]: getFeatureFlags().fix_overflow_menu_display && K
    }),
    children: [W, jsxs("span", {
      className: nP,
      children: [jsxs("span", {
        className: ko,
        children: [jsx("span", {
          className: j7,
          children: Py(user) ? jsxs(Fragment, {
            children: [jsx("span", {
              className: TV,
              children: user.name
            }), J()]
          }) : jsxs(Fragment, {
            children: [jsxs("span", {
              className: DL,
              children: [user.name, Y()]
            }), containsCursor && jsx("span", {
              className: FH,
              children: L ? renderI18nText("collaboration.voice.click_to_unfollow") : renderI18nText("collaboration.voice.click_to_follow")
            })]
          })
        }), volumeIcon && jsx("span", {
          className: e6,
          children: volumeIcon
        })]
      }), jsx("span", {
        className: vO,
        children: secondaryActions && secondaryActions.length > 0 && (getFeatureFlags().a11y_multiplayer_dropdown ? et() : jsxs("div", {
          onMouseUp: stopPropagation,
          children: [jsx("div", {
            className: G7,
            ref: Z,
            children: jsx(YW, {
              svg: _$$A,
              fallbackSvg: _$$A2,
              isBackgroundTransparent: !1,
              selected: q,
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("fullscreen.toolbar.multiplayer.more_options"),
              className: u()(hv, {
                [VQ]: q
              }),
              onClick: e => {
                e.stopPropagation();
                z(!0);
              }
            })
          }), (() => {
            let e = Z.current;
            if (q && e) {
              let t = secondaryActions?.map(e => jsx(c$, {
                onClick: t => {
                  t.stopPropagation();
                  t.preventDefault();
                  e.onClick(t);
                  z(!1);
                  $(hideDropdownAction());
                },
                disabled: e.disabled,
                children: e.text
              }, e.key));
              return jsx(Cf, {
                targetRect: e.getBoundingClientRect(),
                minWidth: 160,
                closeDropdown: () => {
                  z(!1);
                },
                autoHeight: !0,
                children: t
              });
            }
            return jsx(Fragment, {});
          })()]
        }))
      })]
    })]
  });
  return getFeatureFlags().a11y_multiplayer_dropdown && onClick ? jsxs(_$$bL, {
    className: u()(Q, {
      [Lk]: !G && !manager.isOpen,
      [tE]: !G && manager.isOpen
    }),
    children: [jsx(O6, {
      onClick,
      className: L8,
      "aria-label": L ? getI18nString("collaboration.voice.click_to_unfollow_user", {
        username: user.name
      }) : getI18nString("collaboration.voice.click_to_follow_user", {
        username: user.name
      })
    }, user.userID), jsxs(fI, {
      className: u()(Hl, {
        [Sh]: getFeatureFlags().fix_overflow_menu_display && K
      }),
      children: [W, jsxs("span", {
        className: nP,
        children: [jsxs("span", {
          className: ko,
          children: [jsx("span", {
            className: j7,
            children: Py(user) ? jsxs(Fragment, {
              children: [jsx("span", {
                className: TV,
                children: user.name
              }), J()]
            }) : jsxs(Fragment, {
              children: [jsxs("span", {
                className: DL,
                children: [user.name, Y()]
              }), jsx("span", {
                className: zO,
                children: L ? renderI18nText("collaboration.voice.click_to_unfollow") : renderI18nText("collaboration.voice.click_to_follow")
              })]
            })
          }), volumeIcon && jsx("span", {
            className: e6,
            children: volumeIcon
          })]
        }), jsx(HG, {
          className: vO,
          children: secondaryActions && secondaryActions.length > 0 && et()
        })]
      })]
    })]
  }) : onClick ? jsx("button", {
    className: Q,
    onClick,
    children: en
  }, user.userID) : jsx("div", {
    className: u()(Q, {
      [fJ]: manager.isOpen && getFeatureFlags().a11y_multiplayer_dropdown
    }),
    children: en
  }, user.userID);
}
function q(e) {
  let t = useSelector(e => e.multiplayer);
  let n = useSelector(e => "prototype" === e.selectedView.view ? e.prototype.showProgressBar : isUIHiddenOrLocked(e?.progressBarState?.mode));
  let a = t.allUsers.length > 1;
  Av();
  let {
    user,
    onClick,
    volumeIcon,
    disableSpotlightAnimation
  } = e;
  let c = U(user);
  let m = n ? K$ : "";
  if (!AD(user)) return jsxs("div", {
    className: u()(C7, m),
    children: [jsx(H8, {
      user: {
        ...user,
        id: user.userID
      }
    }), volumeIcon && jsx("span", {
      className: Wh,
      children: volumeIcon
    })]
  });
  {
    let n = `voice-avatar-session-${user.sessionID}`;
    return jsxs("span", {
      "data-onboarding-key": e.onboardingKey,
      className: u()(R3, m),
      children: [onClick && jsx("button", {
        className: XF,
        onClick,
        "data-tooltip-proxy-element-id": n,
        "aria-label": c ? getI18nString("fullscreen.toolbar.multiplayer.unfollow_name", {
          name: user.name
        }) : getI18nString("fullscreen.toolbar.multiplayer.follow_a_name", {
          name: user.name
        }),
        "data-fullscreen-intercept": !0
      }), jsx(vQ, {
        disableSpotlightAnimation,
        hasBorder: e.hasBorder,
        nominatedSessionID: t.sessionsNominatingCurrentUser.length > 0 ? t.sessionID : null,
        observingSessionID: t.observingSessionID,
        presenterSessionID: t.presenterSessionID ?? null,
        sessionID: user.sessionID,
        showColorIndicators: a,
        tooltipOffsetY: (B - F) / 2,
        tooltipProxyId: n,
        user
      }), volumeIcon && jsx("span", {
        className: Wh,
        children: volumeIcon
      })]
    });
  }
}
export function $$z0(e) {
  let {
    user,
    onboardingKey,
    callMetadata,
    isOverflow,
    isCurrentUserHeaderRow,
    onUserClick,
    containsCursor,
    secondaryActions,
    disableSpotlightAnimation,
    hasBorder,
    hidePopover
  } = e;
  let h = useDispatch();
  let f = callMetadata && jsx(_$$i, {
    userId: user.userID,
    userName: user.name,
    microphoneStyle: callMetadata.microphoneStyle,
    call: callMetadata.call,
    alwaysShowVoiceBars: isOverflow,
    volumeIconMutedState: isOverflow ? _$$S.DEFAULT : _$$S.MINI
  });
  let _ = onUserClick && (e => {
    e.stopPropagation();
    e.preventDefault();
    AD(user) && (onUserClick(user), isOverflow ? (h(hideDropdownAction()), hidePopover && hidePopover()) : h(hideTooltip()));
  });
  return isOverflow || isCurrentUserHeaderRow ? jsx(V, {
    user,
    volumeIcon: f,
    onClick: _,
    containsCursor,
    secondaryActions,
    disableSpotlightAnimation,
    isCurrentUserHeaderRow
  }) : jsx(q, {
    user,
    onboardingKey,
    volumeIcon: f,
    onClick: _,
    disableSpotlightAnimation,
    hasBorder
  });
}
export const Q = $$z0;