import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { s as _$$s } from "../cssbuilder/589278";
import { oB, j7 } from "../905/929976";
import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { parsePxInt } from "../figma_app/783094";
import { Ex, zE } from "../figma_app/919079";
import { SvgComponent } from "../905/714743";
import { t as _$$t } from "../905/331623";
import { n as _$$n } from "../figma_app/3731";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { _l } from "../figma_app/976345";
import { cs, UP, T9, nR } from "../figma_app/740025";
import { nm } from "../905/352022";
import { O_ } from "../905/967587";
import { FC } from "../figma_app/212807";
import { selectUser } from "../905/372672";
import { j as _$$j } from "../905/834956";
import { Dg } from "../figma_app/530167";
import { A as _$$A } from "../5724/267849";
import { A as _$$A2 } from "../1617/741473";
import { A as _$$A3 } from "../1617/159136";
let x = "32px";
let S = "workspace_switcher--option--ykJBs";
let w = "workspace_switcher--adminBadge--klir1";
let C = "workspace_switcher--communityProfileOption--Enex8";
let T = "workspace_switcher--activeOption--5-jOu";
let k = "workspace_switcher--baseRedDot--JUzRa red_dot--baseRedDot--pgZV7";
let R = "workspace_switcher--redDotAndIconContainer--oTZoM red_dot--redDotAndIconContainer--vM6id workspace_switcher--_paddedIcon--sxKM6 workspace_switcher--_icon--TdUto workspace_switcher--_iconFlex--pM-O7 workspace_switcher--_iconMargin--RMvSX";
let N = parsePxInt(x) + 2 * parsePxInt("4px") + 1;
function P(e, t, i, r, a, s, o) {
  return {
    displayText: e.name,
    sideText: `@${e.profile_handle}`,
    optionHeight: N,
    icon: jsxs("div", {
      className: R,
      children: [a[e.id] && jsx("div", {
        className: k
      }), jsx(_$$n, {
        userId: t.id,
        profileId: e.id,
        forceAvatar: !0
      })]
    }),
    itemBadge: cs(e) ? jsx(Ex, {
      className: w,
      text: getI18nString("navbar.community.admin_label"),
      color: zE.INVERT,
      subtle: !0
    }) : void 0,
    isActive: r,
    isChecked: r,
    className: C,
    callback: () => o(Dg({
      profileId: e.id,
      view: i ? s : void 0
    }))
  };
}
let F = "FILE_BROWSER_WORKSPACE_SWITCHER";
let M = "ACCOUNT_SWITCHING_COMMUNITY_ONBOARDING_KEY";
let j = parsePxInt("7px");
let U = parsePxInt("224px");
let B = parsePxInt("364px");
let V = parsePxInt(x) + 2 * parsePxInt("4px");
let G = V + 1;
function z() {
  let e;
  let t = useDispatch();
  let i = useSelector(e => e.dropdownShown?.type === F);
  let s = useSelector(e => e.selectedView);
  let d = useSelector(e => e.dropdownShown?.data?.targetRect);
  let x = useSelector(e => e.authedUsers);
  let z = useSelector(e => e.authedProfilesById);
  let H = FC();
  let W = selectUser();
  let K = useSelector(e => e.orgById);
  let Y = useSelector(e => e.authedTeamsById);
  let q = useSelector(e => e.authedActiveCommunityProfile);
  let $ = UP();
  let Z = useSelector(e => Object.keys(e.authedProfilesById).some(t => !!e.authedProfilesById[t].org_id || !!e.authedProfilesById[t].team_id));
  let X = useSelector(e => e.userNotifications.communityProfileBellStates);
  useEffect(() => {
    nm()(t).catch(e => {
      let i = e?.data?.message || getI18nString("file_browser.error_try_again");
      t(VisualBellActions.enqueue({
        message: i,
        type: "error"
      }));
    });
  }, [t]);
  return jsx(Fragment, {
    children: i && jsx(_$$j, {
      dispatch: t,
      items: (e = [], x.orderedIds.forEach(i => {
        let r = x.byId[i];
        if (!r) return;
        e = e.concat([{
          displayText: r.email,
          optionHeight: V,
          icon: jsx("span", {
            className: "workspace_switcher--iconEmpty--0neJ2 workspace_switcher--_icon--TdUto workspace_switcher--_iconMargin--RMvSX"
          }),
          disabled: !0
        }]);
        let s = r.plans?.map(e => {
          let i = {
            userId: r.id,
            orgId: e.is_org ? e.plan_id : null,
            teamId: e.is_org ? null : e.plan_id
          };
          let s = O_(H, i);
          let o = !!e.is_guest;
          let d = i.orgId && !o && getFeatureFlags().xr_debounce_threshold ? {
            view: "teamFeed"
          } : {
            view: "recentsAndSharing"
          };
          return {
            displayText: e.name,
            optionHeight: G,
            itemBadge: o ? jsx(Ex, {
              className: "workspace_switcher--badge--lsDwX",
              text: getI18nString("navbar.navbar.guest"),
              color: zE.INVERT,
              subtle: !0
            }) : void 0,
            icon: jsx(_$$n, {
              className: _$$s.mr8.$,
              userId: i.userId,
              orgId: i.orgId,
              teamId: i.teamId
            }),
            isActive: s,
            isChecked: s,
            className: "workspace_switcher--optionWithBottomMargin--8atEJ workspace_switcher--option--ykJBs",
            callback: () => t(_l({
              workspace: i,
              view: d
            })),
            activeClassName: T
          };
        }) || [];
        e = (e = e.concat(s)).concat([{
          displayText: "",
          disabled: !0,
          separator: !0
        }]);
      }), e).concat((() => {
        let e = !!X && Object.values(X).some(e => e);
        let i = function (e, t, i, r, a, s, o, l, d, u, p) {
          let g = [];
          let f = new Set();
          let A = [];
          let y = [];
          Object.keys(e).forEach(r => {
            let a = e[r];
            let c = a.community_profile_id;
            if (c) {
              let e = s[c];
              if (!e || f.has(c)) return;
              f.add(c);
              let n = !!l?.primary_user_id && l?.id === e.id;
              let r = t && n;
              g = g.concat([P(e, i, t, r, o, d, u)]);
              return;
            }
            let p = l?.primary_user_id === a.id;
            let h = t && p;
            let y = T9({
              authedProfilesById: s,
              userId: a.id
            });
            A = A.concat([{
              displayText: a.name,
              sideText: a.email,
              optionHeight: N,
              icon: jsx("div", {
                className: R,
                children: jsx(_$$n, {
                  userId: a.id,
                  forceAvatar: !0
                })
              }),
              isActive: h,
              isChecked: h,
              className: C,
              callback: () => u(Dg({
                profileId: y?.id || null,
                view: t ? d : void 0
              }))
            }]);
          });
          Object.keys(r).forEach(e => {
            let a = r[e];
            let p = a?.community_profile_id;
            if (p) {
              let e = s[p];
              if (!e || f.has(p)) return;
              f.add(p);
              let n = t && l?.id === e.id;
              g = g.concat([P(e, i, t, n, o, d, u)]);
              return;
            }
            let A = t && l?.org_id === a.id;
            let b = T9({
              authedProfilesById: s,
              orgId: a.id
            });
            b && (y = y.concat([{
              displayText: a.name,
              sideText: void 0,
              optionHeight: N,
              icon: jsx("div", {
                className: R,
                children: jsx(_$$n, {
                  userId: i.id,
                  orgId: a.id,
                  forceAvatar: !0
                })
              }),
              isActive: A,
              itemBadge: jsx(Ex, {
                className: w,
                text: getI18nString("navbar.community.admin_label"),
                color: zE.INVERT,
                subtle: !0
              }),
              isChecked: A,
              className: C,
              callback: () => u(Dg({
                profileId: b.id || null,
                view: t ? d : void 0
              }))
            }]));
          });
          Object.values(a).forEach(e => {
            let n = e?.community_profile_id;
            if (n) {
              let e = s[n];
              if (!e || f.has(n)) return;
              f.add(n);
              let r = t && l?.id === e.id;
              g = g.concat([P(e, i, t, r, o, d, u)]);
              return;
            }
          });
          return g = g.concat(A).concat(y);
        }(x.byId, $, W, K, Y, z, X, q, s, t);
        if (i.length > 1) {
          let t = [{
            displayText: Z ? "" : getI18nString("navbar.community.browse_community_workspace_switcher_label"),
            optionHeight: V,
            itemBadge: Z ? jsxs("div", {
              className: "workspace_switcher--browseCommunityRowContainer--X6NW8",
              children: [renderI18nText("navbar.community.browse_community_workspace_switcher_label"), jsx("a", {
                href: "https://help.figma.com/hc/articles/4404108672663",
                target: "_blank",
                className: "workspace_switcher--infoBadgeContainer--5BRbv",
                children: jsx(SvgComponent, {
                  svg: _$$A,
                  className: "workspace_switcher--infoBadge--kvJnm"
                })
              })]
            }) : void 0,
            icon: jsx("span", {
              className: "workspace_switcher--browseCommunityHeaderIcon--pZkm4 workspace_switcher--iconEmpty--0neJ2 workspace_switcher--_icon--TdUto workspace_switcher--_iconMargin--RMvSX"
            }),
            disabled: !0
          }];
          return [{
            displayText: getI18nString("navbar.community.community_label"),
            optionHeight: V,
            icon: jsxs("div", {
              className: R,
              children: [e && jsx("div", {
                className: k
              }), jsx(_$$t, {
                svg: _$$A2,
                fallbackSvg: _$$A3
              })]
            }),
            onMouseEnter: () => nR("submenu", s.view),
            className: S,
            children: t.concat(i),
            activeClassName: T,
            "data-onboarding-key": M
          }];
        }
        if (1 !== i.length) return [];
        {
          let t = i[0];
          return [{
            displayText: getI18nString("navbar.community.community_label"),
            sideText: t.sideText,
            rightJustifySideText: !0,
            optionHeight: V,
            icon: jsxs("div", {
              className: R,
              children: [e && jsx("div", {
                className: k
              }), jsx(_$$t, {
                svg: _$$A2,
                fallbackSvg: _$$A3
              })]
            }),
            activeClassName: T,
            isActive: t.isActive,
            isChecked: t.isChecked,
            className: S,
            callback: t.callback,
            "data-onboarding-key": M
          }];
        }
      })()),
      lean: "left",
      leanPadding: j,
      minWidth: U,
      onSelectItem: (e, i) => {
        e.callback && e.callback("", null, t);
      },
      parentRect: d,
      rootAndSubmenuMaxWidth: B,
      showCheckmarkOnRight: !0,
      showPoint: !0
    })
  });
}
export function $$H0(e) {
  let t = useDispatch();
  let i = useSelector(e => e.dropdownShown?.type === F);
  return jsxs(Fragment, {
    children: [jsx("button", {
      type: "button",
      className: _$$s.colorTextBrand.cursorPointer.selectNone.$,
      onClick: e => {
        let n = e.currentTarget.getBoundingClientRect();
        i ? t(oB()) : n && t(j7({
          type: F,
          data: {
            targetRect: n
          }
        }));
      },
      "data-testid": e.dataTestId,
      children: e.text
    }), jsx(z, {})]
  });
}
export const h = $$H0;