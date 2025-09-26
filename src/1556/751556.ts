import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { BrowserInfo, isAndroidOrIphoneNotFigmaMobile } from "../figma_app/778880";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { useIsCommunityHubView, useAuthedActiveCommunityProfile, getActiveProfileUserOrOrg, isOrgOrTeamExport, getTeamAdminAccess, getOrgAdminAccess, isProfilePublished } from "../figma_app/740025";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItemComp, MenuItemLead, MenuSubText, MenuSubMenu, MenuSubContainerComp, MenuSubTrigger, MenuHiddenTitleComp, MenuTitleComp, MenuGroupComp, setupMenu, MenuRootComp, MenuContainerComp } from "../figma_app/860955";
import { ButtonPrimitive } from "../905/632989";
import { O as _$$O } from "../905/969533";
import { UI3ConditionalWrapper } from "../905/341359";
import { Ay as _$$Ay } from "@stylexjs/stylex";
import x from "classnames";
import { usePrefersMediaQuery } from "../figma_app/469468";
import { Badge, BadgeColor } from "../figma_app/919079";
import { g as _$$g } from "../1556/359896";
import { getI18nString, renderI18nText } from "../905/303541";
import { UserAvatar, AvatarSize } from "../905/590952";
import { TextWithTruncation } from "../905/984674";
import { COMMUNITY_MIN_WIDTH } from "../figma_app/350203";
import { selectUser } from "../905/372672";
import { E as _$$E3 } from "../1556/957507";
import { w as _$$w } from "../figma_app/883622";
import { g as _$$g2 } from "../1556/689749";
import { q as _$$q } from "../1556/198651";
import { j as _$$j } from "../905/834956";
import { deepEqual } from "../905/382883";
import E from "../vendor/116389";
import { desktopAPIInstance } from "../figma_app/876459";
import { getThemePreference } from "../905/640017";
import { ServiceCategories } from "../905/165054";
import { CU, z6 } from "../905/963340";
import { A as _$$A } from "../905/891805";
import { U as _$$U } from "../905/103637";
import { b as _$$b2 } from "../905/484176";
import { x as _$$x } from "../905/587214";
import { V as _$$V } from "../1577/612419";
import { n } from "../905/796896";
import { A as _$$A2 } from "../af221b13/388839";
import { J as _$$J2 } from "../1556/905117";
import { x as _$$x2 } from "../905/149501";
import { getFeatureFlags } from "../905/601108";
import { customHistory } from "../905/612521";
import { reportError } from "../905/11";
import { switchAccountAndNavigate, startDesktopAppAuth } from "../figma_app/976345";
import { e as _$$e2 } from "../905/579755";
import { selectViewAction, showDropdownThunk, hideDropdownAction } from "../905/929976";
import { popModalStack, showModalHandler } from "../905/156213";
import { ql, S5 } from "../figma_app/24841";
import { T$, w3 } from "../figma_app/865646";
import { setFileBrowserUserId, getUserPlan, setCommunityProfileId } from "../figma_app/502247";
import { OrganizationType } from "../905/833838";
import { s as _$$s2, c as _$$c } from "../905/744710";
import { G$, FF } from "../figma_app/588092";
import { ButtonBasePrimary } from "../figma_app/637027";
import { registerModal } from "../905/102752";
import { OJ } from "../905/519092";
import { kL, v0 } from "../figma_app/639088";
import { nT } from "../1556/690522";
import { ScreenReaderOnly } from "../905/172252";
import { SubTrigger, MenuItemPrimitive } from "../905/465888";
import { textDisplayConfig } from "../905/687265";
import { resolveDisplayName } from "../figma_app/11961";
import { switchCommunityProfileThunk } from "../figma_app/530167";
import { K as _$$K } from "../1556/124168";
import { logAndTrackCTA } from "../figma_app/314264";
import { X as _$$X } from "../figma_app/91315";
import { ck } from "../905/952832";
import { InterProfileType } from "../905/895626";
import { e0 as _$$e3 } from "../905/696396";
import { S as _$$S } from "../1556/805548";
import { s as _$$s3 } from "../905/539471";
import { T$ as _$$T$, B$, SO } from "../1556/114224";
import { d8i } from "../figma_app/27776";
import { trackEventAnalytics } from "../905/449184";
import { X9 } from "../figma_app/236327";
import { J as _$$J3 } from "../1577/181415";
import { stopPropagation } from "../figma_app/753501";
import { N as _$$N2 } from "../1577/472492";
import { selectCurrentFile } from "../figma_app/516028";
import { X2, td as _$$td } from "../figma_app/273118";
import { KindEnum } from "../905/129884";
import { Ro } from "../figma_app/598952";
import { iX } from "../905/415545";
import { ue } from "../af221b13/476940";
import { useSubscription } from "../figma_app/288654";
import { tT, getResourceDataOrFallback } from "../905/723791";
import { CommunityNotificationBellView, PersistentUserNotificationBellData } from "../figma_app/43951";
import { M as _$$M } from "../1556/569109";
import { h as _$$h } from "../1556/255035";
import { In } from "../905/672640";
import { IP } from "../1577/159553";
var p = x;
let M = _$$g2 - 8;
export function $$R2(e) {
  return jsx(_$$j, {
    depth: 0,
    dispatch: e.dispatch,
    items: e.items,
    lean: "right",
    minLeftMargin: -4,
    minWidth: M,
    onSelectItem: e.onSelectItem,
    onboardingKey: e.onboardingKey,
    parentRect: e.parentRect,
    rootAndSubmenuMaxWidth: M,
    showCheckmarkOnRight: !0,
    showPoint: !1
  });
}
var S = E;
let ed = registerModal(function () {
  let e = useDispatch();
  let t = () => {
    e(popModalStack());
  };
  return jsx(OJ, {
    onClose: t,
    minWidth: 400,
    maxWidth: 400,
    title: getI18nString("multi-account.max_accounts_title"),
    children: jsxs("div", {
      className: kL,
      children: [renderI18nText("multi-account.max_accounts_body"), jsx("div", {
        className: v0,
        children: jsx(ButtonBasePrimary, {
          onClick: t,
          children: renderI18nText("multi-account.max_accounts_submit")
        })
      })]
    })
  });
}, "TooManyAccountsModal");
let eC = "editable_avatar_with_pencil--profilePictureUpdaterContainer--X-nf6";
let eN = "editable_avatar_with_pencil--profilePictureEditButton--LpEdQ";
let eI = "editable_avatar_with_pencil--profilePictureEditButtonHighlight--PruBM";
function eA(e) {
  return jsxs("button", {
    className: eC,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onClick: e.onClick,
    tabIndex: -1,
    children: [jsx(UserAvatar, {
      user: e.user,
      size: AvatarSize.XLARGE
    }), jsx("div", {
      className: p()(eN, e.highlight && eI),
      children: jsx(_$$s3, {})
    })]
  });
}
function eM(e) {
  return jsx(SubTrigger, {
    style: {
      width: "100%",
      paddingRight: "16px",
      paddingLeft: "16px"
    },
    children: jsxs("div", {
      style: {
        margin: "auto"
      },
      className: eC,
      onMouseEnter: e.onMouseEnter,
      onMouseLeave: e.onMouseLeave,
      tabIndex: -1,
      children: [jsx(UserAvatar, {
        user: e.user,
        size: AvatarSize.XLARGE
      }), jsx("div", {
        className: p()(eN, e.highlight && eI),
        children: jsx(_$$s3, {})
      })]
    })
  });
}
function eR(e) {
  return getFeatureFlags().figpal_avatars_mw25 ? jsx(eM, {
    onClick: e.onClick,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    user: e.user,
    highlight: e.highlight
  }) : jsx(eA, {
    onClick: e.onClick,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    user: e.user,
    highlight: e.highlight
  });
}
function eT({
  dispatch: e,
  user: t,
  legacyBehavior: n
}) {
  let {
    close
  } = _$$S();
  let o = useIsCommunityHubView();
  let c = useAuthedActiveCommunityProfile();
  let d = o && !!c;
  let u = getActiveProfileUserOrOrg();
  let h = d && c.public_at;
  let x = _$$K(t) && !h;
  let p = useSelector(e => resolveDisplayName(e, e.authedActiveCommunityProfile));
  let f = d ? p : t.email;
  let [g, _] = useState(null);
  let w = g?.subText ?? f;
  let y = h ? getI18nString("account_switcher.view_community_profile") : getI18nString("account_switcher.view_profile");
  let k = e => _({
    type: "view-profile",
    subText: y,
    showOutline: e
  });
  let C = getI18nString("account_switcher.change_photo");
  let N = e => _({
    type: "change-photo",
    subText: C,
    showOutline: e
  });
  let I = () => _(null);
  let A = useRef(!0);
  let M = () => {
    close();
    h ? e(switchCommunityProfileThunk({
      profileId: c.id,
      view: {
        view: "communityHub",
        subView: "handle",
        handle: c.profile_handle
      }
    })) : (o && setFileBrowserUserId(t.id), e(selectViewAction({
      view: "user",
      userId: t.id,
      userViewTab: InterProfileType.INTERNAL_PROFILE
    })));
    x && logAndTrackCTA({
      trackingContext: _$$e3.FILE_BROWSER,
      context: "job_title",
      text: "Internal Profile"
    });
  };
  let R = () => {
    close();
    e(_$$X({
      entity: t,
      entityType: ck.CURRENT_USER,
      shape: "CIRCLE"
    }));
  };
  let T = d && isOrgOrTeamExport(c);
  let E = jsxs(Fragment, {
    children: [T ? jsx(UserAvatar, {
      user: u,
      size: AvatarSize.XLARGE
    }) : jsx(eR, {
      dispatch: e,
      onClick: R,
      onMouseEnter: () => N(!1),
      onMouseLeave: I,
      highlight: g?.type === "change-photo" && g.showOutline,
      user: t
    }), jsx("button", {
      onClick: M,
      ..._$$Ay.props(eE.userName, g?.type === "view-profile" && g.showOutline && eE.underline),
      onMouseOver: () => k(!1),
      onMouseLeave: I,
      tabIndex: -1,
      children: d && isOrgOrTeamExport(c) ? c.name : t.handle
    }), jsx(TextWithTruncation, {
      fontSize: 11,
      color: "desktopBackgrounded",
      truncate: !0,
      children: w
    })]
  });
  return n ? E : jsxs(Fragment, {
    children: [jsx("div", {
      "aria-hidden": !0,
      ..._$$Ay.props(eE.container),
      children: E
    }), T ? null : jsx(ScreenReaderOnly, {
      as: MenuItemPrimitive,
      onClick: R,
      htmlAttributes: {
        onFocus: () => {
          if (A.current) {
            A.current = !1;
            return;
          }
          N(!0);
        },
        onBlur: () => I()
      },
      children: C
    }), jsx(ScreenReaderOnly, {
      as: MenuItemPrimitive,
      onClick: M,
      htmlAttributes: {
        onFocus: () => {
          if (A.current) {
            A.current = !1;
            return;
          }
          k(!0);
        },
        onBlur: () => I()
      },
      children: y
    })]
  });
}
let eE = {
  container: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    alignItems: "x6s0dn4",
    padding: "x1tamke2",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  },
  userName: {
    background: "x1x0wbdh",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    marginTop: "x1xmf6yo",
    width: "xh8yej3",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    whiteSpace: "xuxw1ft",
    textOverflow: "xlyipyv",
    color: "x1kax57l",
    lineHeight: "x1d3mw78",
    ":hover_textDecoration": "xt0b8zv",
    ":hover_textDecorationLine": null,
    ":hover_textDecorationStyle": null,
    ":hover_textDecorationThickness": null,
    ":hover_textDecorationColor": "xxex89h",
    $$css: !0
  },
  underline: {
    textDecoration: "x1bvjpef",
    textDecorationLine: null,
    textDecorationStyle: null,
    textDecorationThickness: null,
    textDecorationColor: "x1hdadn",
    $$css: !0
  }
};
let eS = "account_switcher_items--optionClassOverride--dRdRQ";
let eB = "account_switcher_items--noIconClassOverride--t-OW2";
let eL = "account_switcher_items--subTextContainerStyleOverride--92-SP";
let eO = "account_switcher_items--accountSwitcherItemLabel--QwAjo text--fontPos11--2LvXf text--_fontBase--QdLsd";
let eP = "account_switcher_items--icon--5a9Zb";
var e$ = (e => (e.ADJUST = "adjust", e.COMMUNITY = "community", e.DOWNLOAD = "download", e.PLUS = "plus", e.SIGN_OUT = "signOut", e.THEME = "theme", e))(e$ || {});
function eD(e) {
  switch (e) {
    case "adjust":
      return jsx(_$$A, {
        className: eP
      });
    case "community":
      return jsx(_$$U, {
        className: eP
      });
    case "download":
      return jsx(_$$b2, {
        className: eP
      });
    case "plus":
      return jsx(_$$x, {
        className: eP
      });
    case "signOut":
      return jsx(_$$V, {
        className: eP
      });
    case "theme":
      return jsx(n, {
        className: eP
      });
  }
}
function ez(e) {
  return jsx("div", {
    className: cssBuilderInstance.p4.$,
    children: e
  });
}
function eU({
  displayText: e,
  callback: t,
  iconType: n,
  children: i,
  dataOnboardingKey: l
}) {
  return {
    displayText: e,
    optionHeight: 24,
    callback: t,
    icon: eD(n),
    className: eS,
    children: i,
    "data-onboarding-key": l,
    subTextContainerStyleOverride: eL
  };
}
let eH = (e, t) => e.map(e => {
  let n = () => {
    t(selectViewAction({
      view: "communityHub",
      subView: "handle",
      handle: e.profile_handle
    }));
  };
  let l = {
    id: e.id,
    name: e.name,
    img_url: e.img_url
  };
  let o = `@${e.profile_handle}`;
  return {
    element: jsxs(MenuItemComp, {
      onClick: n,
      children: [jsx(MenuItemLead, {
        children: ez(jsx(_$$e2, {
          entity: l,
          size: 16
        }))
      }), jsxs("div", {
        className: "x78zum5 xdt5ytf xeuugli x98rzlu xb3r6kr",
        children: [eQ(e.name), jsx(MenuSubText, {
          children: eQ(o)
        })]
      })]
    }, e.id),
    legacyItems: [{
      displayText: e.name,
      subText: o,
      optionHeight: 40,
      className: eS,
      subTextContainerStyleOverride: eL,
      icon: ez(jsx(_$$e2, {
        entity: l,
        size: 16
      })),
      callback: n
    }]
  };
});
let eq = (e, t) => {
  let n = getI18nString("navbar.profile_switcher.create_a_community_profile");
  let l = () => {
    t(showModalHandler({
      type: G$,
      data: {
        userId: e.id,
        variations: [FF.OPT_IN]
      }
    }));
  };
  return {
    element: jsxs(MenuItemComp, {
      onClick: l,
      children: [jsx(MenuItemLead, {
        children: ez(jsx(UserAvatar, {
          user: e,
          size: AvatarSize.SMALL16
        }))
      }), jsxs("div", {
        className: "x78zum5 xdt5ytf xeuugli x98rzlu xb3r6kr",
        children: [n, jsx(MenuSubText, {
          children: eQ(e.email)
        })]
      })]
    }, "create-new-profile"),
    legacyItems: [{
      displayText: n,
      subText: e.email,
      optionHeight: 40,
      className: eS,
      icon: ez(jsx(UserAvatar, {
        user: e,
        size: AvatarSize.SMALL16
      })),
      callback: l
    }]
  };
};
function eW(e, t, n) {
  let l = ez(jsx(UserAvatar, {
    size: AvatarSize.SMALL16,
    user: e
  }));
  return {
    element: jsxs(CU, {
      value: e.id,
      children: [jsx(MenuItemLead, {
        children: l
      }), jsxs("div", {
        className: "x78zum5 xdt5ytf xeuugli x98rzlu xb3r6kr",
        children: [eQ(e.name), jsx(MenuSubText, {
          children: eQ(e.email)
        })]
      })]
    }, e.id),
    legacyItems: [{
      displayText: e.name,
      subText: e.email,
      optionHeight: 24,
      className: eS,
      subTextContainerStyleOverride: eL,
      isChecked: t,
      icon: l,
      callback: n
    }]
  };
}
function eQ(e) {
  return jsx("div", {
    className: "xb3r6kr xlyipyv xuxw1ft",
    children: e
  });
}
function eX() {
  let e = function () {
    let e = useDispatch();
    let t = useSelector(e => e.authedUsers);
    let n = selectUser();
    let o = getThemePreference();
    let a = useSelector(e => e.authedProfilesById);
    let d = useSelector(e => getTeamAdminAccess(e), deepEqual);
    let u = useSelector(e => getOrgAdminAccess(e));
    let h = S()(Object.values(d).map(e => e.community_profile_id && a[e.community_profile_id]));
    let m = S()(Object.values(u).map(e => e.community_profile_id && a[e.community_profile_id]));
    let x = useIsCommunityHubView();
    let p = !desktopAPIInstance && (BrowserInfo.mac || BrowserInfo.windows);
    return [{
      key: "profile-settings",
      items: S()([{
        element: getFeatureFlags().figpal_avatars_mw25 ? jsxs(MenuSubMenu, {
          children: [jsx(eT, {
            user: n,
            dispatch: e
          }, "profile"), jsxs(MenuSubContainerComp, {
            children: [jsxs(MenuItemComp, {
              onClick: () => console.warn("upload photo"),
              children: [jsx(MenuItemLead, {
                children: jsx(_$$A2, {})
              }), getI18nString("account_switcher.upload_photo")]
            }), jsxs(MenuItemComp, {
              onClick: () => console.warn("customize figpal"),
              children: [jsx(MenuItemLead, {
                children: jsx(_$$J2, {})
              }), getI18nString("account_switcher.customize_photo")]
            }), jsxs(MenuItemComp, {
              onClick: () => console.warn("reset to default"),
              children: [jsx(MenuItemLead, {
                children: jsx(_$$x2, {})
              }), getI18nString("account_switcher.reset_to_default_photo")]
            })]
          })]
        }, "edit-profile") : jsx(eT, {
          user: n,
          dispatch: e
        }, "profile"),
        legacyItems: [{
          className: "account_switcher_items--profileClassOverride--7JiNH",
          disabled: !0,
          displayText: getI18nString("navbar.settings_dropdown.profile_label"),
          render: () => jsx(eT, {
            user: n,
            dispatch: e,
            legacyBehavior: !0
          })
        }]
      }, function (e, t) {
        let n = getI18nString("navbar.settings_dropdown.theme");
        let l = "theme";
        return {
          element: jsxs(MenuSubMenu, {
            children: [jsxs(MenuSubTrigger, {
              children: [jsx(MenuItemLead, {
                children: eD(l)
              }), n]
            }), jsx(MenuSubContainerComp, {
              children: jsx(z6, {
                title: jsx(MenuHiddenTitleComp, {
                  children: n
                }),
                value: e ?? void 0,
                onChange: e => {
                  T$(t, e);
                },
                children: w3().map(e => jsx(CU, {
                  value: e.value,
                  children: e.displayText
                }, e.value))
              }, "theme")
            })]
          }, "theme"),
          legacyItems: [eU({
            displayText: n,
            iconType: l,
            children: w3().map(n => ({
              name: `theme-${n.value}-mode`,
              displayText: n.displayText,
              isChecked: n.value === e,
              callback: () => {
                T$(t, n.value);
              }
            }))
          })]
        };
      }(o, e), function (e) {
        let t = getI18nString("navbar.settings_dropdown.settings");
        let n = "adjust";
        let l = "settings-nav-bar-item";
        let o = () => {
          e(showModalHandler({
            type: _$$s2,
            data: {
              tab: _$$c.ACCOUNT
            }
          }));
        };
        return {
          element: jsxs(MenuItemComp, {
            onClick: o,
            "data-onboarding-key": l,
            children: [jsx(MenuItemLead, {
              children: eD(n)
            }), t]
          }, "settings"),
          legacyItems: [eU({
            displayText: t,
            iconType: n,
            dataOnboardingKey: l,
            callback: o
          })]
        };
      }(e), p && function () {
        let e = getI18nString("navbar.settings_dropdown.desktop_app_cta");
        let t = "download";
        let n = () => {
          customHistory.redirect(`/download/desktop/${BrowserInfo.mac ? "mac" : "win"}`, "_blank");
        };
        return {
          element: jsxs(MenuItemComp, {
            onClick: n,
            children: [jsx(MenuItemLead, {
              children: eD(t)
            }), e]
          }, "desktop-download"),
          legacyItems: [eU({
            displayText: e,
            iconType: t,
            callback: n
          })]
        };
      }()])
    }, function (e, t, n, l, o) {
      let s = eH(S()([t, ...n, ...l]), o);
      if (t || s.push(eq(e, o)), getFeatureFlags().cmty_profile_selection_cleanup && 1 === s.length) {
        let e = t ? getI18nString("navbar.profile_switcher.your_community_profile") : null;
        return {
          key: "community-profiles",
          title: e,
          items: [{
            element: s.map(e => e.element),
            legacyItems: S()([e ? {
              displayText: e,
              className: eO,
              disabled: !0
            } : null, ...s.flatMap(e => e.legacyItems)])
          }]
        };
      }
      let a = getI18nString("navbar.profile_switcher.community");
      let r = "community";
      return {
        key: "community-profiles",
        items: [{
          element: jsxs(MenuSubMenu, {
            children: [jsxs(MenuSubTrigger, {
              children: [jsx(MenuItemLead, {
                children: eD(r)
              }), a]
            }), jsx(MenuSubContainerComp, {
              children: s.map(e => e.element)
            })]
          }, "community-profile-menu-trigger"),
          legacyItems: [eU({
            displayText: a,
            iconType: r,
            children: s.flatMap(e => e.legacyItems)
          })]
        }]
      };
    }(n, n.community_profile_id ? a[n.community_profile_id] : void 0, h, m, e), {
      key: "accounts-to-switch-to",
      items: S()([function (e, t, n, l) {
        let o = t => {
          if (t === e.id) {
            l(selectViewAction({
              view: "recentsAndSharing"
            }));
            return;
          }
          let n = getUserPlan(t) || [];
          let i = null;
          let o = null;
          let s = n[0];
          let a = n[1];
          s === OrganizationType.ORG && a ? i = a : s === OrganizationType.TEAM && a && (o = a);
          l(switchAccountAndNavigate({
            workspace: {
              userId: t,
              orgId: i,
              teamId: o
            }
          }));
          setCommunityProfileId(t);
        };
        let s = S()(t.orderedIds.filter(t => t !== e.id).map(e => {
          let n = t.byId[e];
          return n ? eW(n, !1, () => o(e)) : null;
        }));
        if (!n && 0 === s.length) return null;
        let a = getI18nString("navbar.profile_switcher.switch_account");
        let r = getFeatureFlags().cmty_profile_selection_cleanup;
        let d = eW(e, !0, () => o(e.id));
        return {
          element: jsxs(z6, {
            title: r ? jsx(MenuTitleComp, {
              children: a
            }) : jsx(MenuHiddenTitleComp, {
              children: a
            }),
            onChange: o,
            value: e.id,
            children: [d.element, s.map(e => e.element)]
          }, "switch-account"),
          legacyItems: S()([r ? {
            displayText: a,
            className: eO,
            disabled: !0
          } : null, ...d.legacyItems, ...s.flatMap(e => e.legacyItems)])
        };
      }(n, t, x, e), function (e, t, n) {
        let l = getI18nString("navbar.profile_switcher.add_account");
        let o = "plus";
        let s = nT;
        let a = () => {
          e >= 10 ? n(showModalHandler({
            type: ed
          })) : t ? n(startDesktopAppAuth()) : customHistory.redirect("/login?cont=", "_blank");
        };
        return {
          element: jsxs(MenuItemComp, {
            onClick: a,
            "data-onboarding-key": s,
            children: [jsx(MenuItemLead, {
              children: eD(o)
            }), l]
          }, "add-account"),
          legacyItems: [eU({
            displayText: l,
            iconType: o,
            dataOnboardingKey: s,
            callback: a
          })]
        };
      }(t.orderedIds.length, !!desktopAPIInstance, e)])
    }, {
      key: "logout",
      items: [function (e, t, n) {
        let l = getI18nString("navbar.navbar.logout_button_label");
        let o = "signOut";
        let s = e.orderedIds;
        let a = e => {
          t(ql({
            user: e
          }));
        };
        if (s.length < 2) {
          let e = () => {
            a(n);
          };
          return {
            element: jsxs(MenuItemComp, {
              onClick: e,
              children: [jsx(MenuItemLead, {
                children: eD(o)
              }), l]
            }, "logout"),
            legacyItems: [eU({
              displayText: l,
              iconType: o,
              callback: e
            })]
          };
        }
        let r = getI18nString("navbar.profile_switcher.logout_all_accounts");
        let d = () => {
          t(S5());
        };
        return {
          element: jsxs(MenuSubMenu, {
            children: [jsxs(MenuSubTrigger, {
              children: [jsx(MenuItemLead, {
                children: eD(o)
              }), l]
            }), jsxs(MenuSubContainerComp, {
              children: [jsx(MenuGroupComp, {
                children: e.orderedIds.map(t => {
                  let n = e.byId[t];
                  return n ? jsx(MenuItemComp, {
                    onClick: () => a(n),
                    children: eQ(n.email)
                  }, t) : null;
                })
              }), jsx(MenuItemComp, {
                onClick: d,
                children: r
              })]
            })]
          }, "logout"),
          legacyItems: [eU({
            displayText: l,
            iconType: o,
            children: [...e.orderedIds.flatMap(t => {
              let n = e.byId[t];
              return n ? [{
                displayText: n.email,
                optionHeight: 24,
                className: eB,
                callback: () => a(n)
              }] : (reportError(ServiceCategories.WAYFINDING, Error("authedUsers.byId[userId] not defined")), []);
            }), _$$w, {
              displayText: r,
              optionHeight: 24,
              className: eB,
              callback: d
            }]
          })]
        };
      }(t, e, n)]
    }];
  }();
  let t = useIsCommunityHubView();
  let n = selectUser();
  let a = useAuthedActiveCommunityProfile();
  let d = t && !!a;
  let u = getActiveProfileUserOrOrg();
  let h = usePrefersMediaQuery(`(max-width: ${COMMUNITY_MIN_WIDTH}px)`);
  let m = usePrefersMediaQuery(`(max-width: ${d8i})`);
  let x = getI18nString("navbar.settings_dropdown.button_label");
  let _ = jsxs("div", {
    className: "account_switcher--dropdownButtonContent--GPGDx",
    "data-testid": "ProfileButton",
    children: [jsx("div", {
      className: cssBuilderInstance.relative.inlineFlex.$,
      children: jsx(UserAvatar, {
        user: d && isOrgOrTeamExport(a) ? u : n,
        size: AvatarSize.MEDIUM
      })
    }), (t ? !m : !h) && jsx(TextWithTruncation, {
      fontSize: 13,
      fontWeight: "medium",
      color: "default",
      truncate: !0,
      children: d && isOrgOrTeamExport(a) ? a.name : n.name
    }), d && isOrgOrTeamExport(a) && jsx(Badge, {
      className: p()("account_switcher--adminBadge--ys5HM", cssBuilderInstance.mr0.$),
      color: BadgeColor.TERTIARY,
      text: getI18nString("navbar.community.admin_label")
    })]
  });
  return _$$q() ? jsx(eK, {
    triggerLabel: x,
    triggerContent: _,
    groups: e
  }) : jsx(eY, {
    triggerLabel: x,
    triggerContent: _,
    groups: e
  });
}
function eK({
  triggerLabel: e,
  triggerContent: t,
  groups: n
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu({
    config2025CuratorHacks: !0
  });
  let s = {
    ...manager,
    getFloatingProps: e => {
      let t = manager.getFloatingProps(e);
      return {
        ...t,
        style: {
          ...t?.style,
          minWidth: _$$g2 - 16,
          maxWidth: 320
        }
      };
    }
  };
  _$$T$(s);
  return jsx(UI3ConditionalWrapper, {
    children: jsxs(MenuRootComp, {
      manager: s,
      children: [jsxs(ButtonPrimitive, {
        ..._$$Ay.props(eG.button, manager.isOpen && eG.buttonActive),
        ...getTriggerProps(),
        "aria-label": e,
        children: [t, jsx(_$$O, {
          className: "x2lah0s"
        })]
      }), jsx(MenuContainerComp, {
        children: n.map(e => 0 === e.items.length ? null : jsx(MenuGroupComp, {
          title: e.title ? jsx(MenuTitleComp, {
            children: e.title
          }) : null,
          children: e.items.map(e => e.element)
        }, e.key))
      })]
    })
  });
}
let eG = {
  button: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    height: "x10w6t97",
    borderRadius: "x12oqio5",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    padding: "xehqz9p",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    ":hover_backgroundColor": "xv2f06h",
    ":focus-visible_outline": "x5hs570",
    ":focus-visible_outlineColor": null,
    ":focus-visible_outlineOffset": null,
    ":focus-visible_outlineStyle": null,
    ":focus-visible_outlineWidth": null,
    $$css: !0
  },
  buttonActive: {
    backgroundColor: "x30nh5c",
    $$css: !0
  }
};
function eY({
  triggerLabel: e,
  triggerContent: t,
  groups: n
}) {
  let l = useRef(null);
  let o = useSelector(_$$E3(B$));
  let s = useDispatch();
  let {
    open
  } = SO();
  return jsxs(Fragment, {
    children: [jsx(_$$g, {
      buttonClassName: "account_switcher--accountDropdownButton--JVtb0",
      ref: l,
      onClick: open,
      isShowingDropdown: o,
      "aria-label": e,
      children: t
    }), l.current && o && jsx($$R2, {
      items: n.flatMap(e => 0 === e.items.length ? [] : [...e.items.flatMap(e => e.legacyItems), _$$w]),
      onSelectItem: e => e.callback?.(),
      parentRect: l.current.getBoundingClientRect(),
      dispatch: s
    })]
  });
}
function tl(e) {
  return jsx("div", {
    className: p()("red_dot--redDot--A3EKk", e.redDotClassName),
    "data-testid": e.dataTestId
  });
}
function to(e) {
  return jsx("div", {
    className: p()("seasonal_red_dot--seasonalRedDot--tkwA-", e.redDotClassName),
    children: "\u2764\uFE0F"
  });
}
function ta(e) {
  let t = getFeatureFlags().notif_ui3_bell ? e.hasNotifications ? jsx(_$$M, {}) : jsx(_$$h, {}) : jsxs(Fragment, {
    children: [jsx(In, {
      icon: "bell-32"
    }), e.hasNotifications && (e.seasonal ? jsx(to, {
      redDotClassName: "notification_bell--seasonalRedDotPosition--eZxlP"
    }) : jsx(tl, {
      redDotClassName: "notification_bell--redDotPosition--QI7hr"
    }))]
  });
  return jsx("div", {
    className: p()("notification_bell--redDotAndBellContainer--fJXU1", {
      "notification_bell--bellRing--0QhIM": e.useAnimation && e.hasNotifications,
      "notification_bell--redDotAndBellContainerActive--RX4nU": e.isActive
    }),
    children: t
  });
}
function tr(e) {
  let t = useDispatch();
  let n = useSubscription(CommunityNotificationBellView, {});
  useEffect(() => {
    if ("loaded" === n.status && n.data.currentUser.communityProfileNotificationBell.status === tT.Loaded) {
      let e = getResourceDataOrFallback(n.data.currentUser.communityProfileNotificationBell);
      if (e) {
        let n = {
          isBellStateHigh: !!e.bell,
          userInitiated: !1,
          profileId: e.id
        };
        t(X2(n));
      }
    }
  }, [n, t]);
  return jsx(ta, {
    hasNotifications: e.hasNotifications,
    isActive: e.isActive,
    seasonal: !!getFeatureFlags().notif_bell_seasonal,
    useAnimation: !!getFeatureFlags().notif_bell_animation,
    openFile: e.openFile
  });
}
let td = {
  isHigh: !1,
  fileKeyWithoutBadge: null
};
let tu = "sidebar-user-notifications-dropdown";
export function $$th1() {
  let e;
  let t = useDispatch();
  let n = useIsCommunityHubView();
  let l = useSelector(_$$E3(tu));
  let o = useRef(null);
  let c = _$$N2();
  let d = selectCurrentFile();
  let u = !!d;
  let h = useAuthedActiveCommunityProfile();
  let m = function () {
    let e = useSubscription(PersistentUserNotificationBellData, {});
    if ("loaded" !== e.status || e.data.persistentUserNotificationBells.status !== tT.Loaded) return {};
    let t = getResourceDataOrFallback(e.data.persistentUserNotificationBells);
    let n = {};
    Object.values(t || []).forEach(e => {
      let {
        userId,
        notificationSpaceId
      } = e;
      if (userId && notificationSpaceId) {
        n[userId] ??= {};
        let l = n[userId];
        l && (l[notificationSpaceId] = !!e.bell);
      }
    });
    return n;
  }();
  let x = function () {
    let e = useSubscription(PersistentUserNotificationBellData, {});
    if ("loaded" !== e.status || e.data.persistentUserNotificationBells.status !== tT.Loaded) return td;
    let t = getResourceDataOrFallback(e.data.persistentUserNotificationBells);
    let n = t?.find(e => e.notificationSpaceId === _$$td);
    return n ? {
      isHigh: !!n.bell,
      fileKeyWithoutBadge: n.fileKeyWithoutBadge
    } : td;
  }();
  let p = selectUser();
  let f = useSelector(e => e.userNotifications);
  let g = "Web";
  if (desktopAPIInstance ? g = "Desktop" : u && (g = "Web Editor"), n) e = !!h && !!f.communityProfileBellStates[h.id];else if (d) {
    let t = !d || d.key !== x?.fileKeyWithoutBadge;
    e = x.isHigh && t;
  } else e = m?.[p.id]?.[_$$td] ?? !1;
  let _ = !l && e;
  let v = c ? getI18nString("navbar.navbar.notifications_disabled_tooltip") : _ ? getI18nString("fullscreen_actions.notifications_new_notification_received") : getI18nString("fullscreen_actions.notifications");
  return jsxs("div", {
    children: [jsx(_$$J3, {
      "aria-label": v,
      ref: o,
      htmlAttributes: {
        "data-onboarding-key": Ro,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": v,
        "data-tooltip-show-below": !0,
        "data-tooltip-max-width": 300,
        onMouseDown: stopPropagation
      },
      onClick: () => {
        let e = o.current?.getBoundingClientRect();
        e && !l && (t(showDropdownThunk({
          type: tu,
          data: {
            targetRect: e
          }
        })), trackEventAnalytics("notification_dropdown_opened", {
          source: g
        }));
      },
      disabled: c,
      "aria-live": "polite",
      children: jsx(tr, {
        isActive: l,
        openFile: d,
        hasNotifications: _
      })
    }), l && jsxs(Fragment, {
      children: [jsx(X9, {
        closeDropdown: () => t(hideDropdownAction())
      }), jsx(ue, {
        registrationOrigin: iX.NOTIFICATION_BELL
      }), jsx(IP, {
        containerClassName: "notifications--centerDropdown--R3Lp-",
        inCommunity: n
      })]
    })]
  });
}
export function $$tm0({
  hideNotifications: e = !1
}) {
  let t = useIsCommunityHubView();
  let n = useAuthedActiveCommunityProfile();
  let a = t && !isProfilePublished(n);
  let r = !e && !a && !isAndroidOrIphoneNotFigmaMobile;
  return jsxs("div", {
    className: cssBuilderInstance.justifyBetween.flex.flexRow.itemsCenter.pt8.ml8.mr8.mb8.lh0.$,
    children: [jsx(eX, {}), r && jsx($$th1, {})]
  });
}
export const Xg = $$tm0;
export const $0 = $$th1;
export const Uo = $$R2;